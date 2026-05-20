import { demoCards, demoStories, demoUsers } from './demoData';

const STORAGE_KEYS = {
  cards: 'kindcard_cards',
  stories: 'kindcard_stories',
  users: 'kindcard_users',
  token: 'token',
};

const adminEmail = 'joegelay@gmail.com';

function getStorage() {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function safeParse(rawValue, fallbackValue) {
  if (!rawValue) {
    return clone(fallbackValue);
  }

  try {
    return JSON.parse(rawValue);
  } catch (error) {
    return clone(fallbackValue);
  }
}

function readCollection(key, fallbackValue) {
  const storage = getStorage();

  if (!storage) {
    return clone(fallbackValue);
  }

  const rawValue = storage.getItem(key);

  if (!rawValue) {
    storage.setItem(key, JSON.stringify(fallbackValue));
    return clone(fallbackValue);
  }

  return safeParse(rawValue, fallbackValue);
}

function writeCollection(key, value) {
  const storage = getStorage();

  if (!storage) {
    return value;
  }

  storage.setItem(key, JSON.stringify(value));
  return value;
}

function nextId(collection) {
  return (
    collection.reduce(function (highestId, item) {
      const itemId = Number(item.id) || 0;
      return itemId > highestId ? itemId : highestId;
    }, 0) + 1
  );
}

function base64UrlEncode(value) {
  const jsonValue = JSON.stringify(value);

  if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    return window
      .btoa(unescape(encodeURIComponent(jsonValue)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }

  return '';
}

function base64UrlDecode(value) {
  if (typeof window !== 'undefined' && typeof window.atob === 'function') {
    const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
    const paddedBase64 = base64 + '==='.slice((base64.length + 3) % 4);

    return decodeURIComponent(
      window
        .atob(paddedBase64)
        .split('')
        .map(function (character) {
          return '%' + ('00' + character.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
  }

  return '{}';
}

function createTokenPayload(email) {
  return {
    id: Date.now(),
    email: email,
    role: email === adminEmail ? 'admin' : 'user',
  };
}

export function createDemoToken(email) {
  const header = { alg: 'none', typ: 'JWT' };
  const payload = createTokenPayload(email);

  return [base64UrlEncode(header), base64UrlEncode(payload), 'demo'].join('.');
}

export function decodeDemoToken(token) {
  if (!token || typeof token !== 'string') {
    return null;
  }

  const tokenParts = token.split('.');

  if (tokenParts.length < 2) {
    return null;
  }

  try {
    return JSON.parse(base64UrlDecode(tokenParts[1]));
  } catch (error) {
    return null;
  }
}

export function getToken() {
  const storage = getStorage();

  if (!storage) {
    return null;
  }

  return storage.getItem(STORAGE_KEYS.token);
}

export function setToken(token) {
  const storage = getStorage();

  if (storage) {
    storage.setItem(STORAGE_KEYS.token, token);
  }

  return token;
}

export function clearToken() {
  const storage = getStorage();

  if (storage) {
    storage.removeItem(STORAGE_KEYS.token);
  }
}

function ensureSeedData() {
  readCollection(STORAGE_KEYS.cards, demoCards);
  readCollection(STORAGE_KEYS.stories, demoStories);
  readCollection(STORAGE_KEYS.users, demoUsers);
}

function getCardsRaw() {
  ensureSeedData();
  return readCollection(STORAGE_KEYS.cards, demoCards);
}

function getStoriesRaw() {
  ensureSeedData();
  return readCollection(STORAGE_KEYS.stories, demoStories);
}

function getUsersRaw() {
  ensureSeedData();
  return readCollection(STORAGE_KEYS.users, demoUsers);
}

function sortStoriesByDate(stories) {
  return stories.slice().sort(function (leftStory, rightStory) {
    return new Date(rightStory.created_at) - new Date(leftStory.created_at);
  });
}

function normalizeCardNumber(number) {
  return Number(number) || number;
}

function cardStoriesForNumber(number) {
  const storyNumber = String(normalizeCardNumber(number));

  return sortStoriesByDate(getStoriesRaw()).filter(function (story) {
    return String(story.number) === storyNumber;
  });
}

function ensureCardExists(number) {
  const cards = getCardsRaw();
  const normalizedNumber = normalizeCardNumber(number);
  const existingCard = cards.find(function (card) {
    return String(card.number) === String(normalizedNumber);
  });

  if (existingCard) {
    return existingCard;
  }

  const nextCard = {
    id: nextId(cards),
    number: normalizedNumber,
  };

  writeCollection(STORAGE_KEYS.cards, cards.concat([nextCard]));
  return nextCard;
}

export function getStories() {
  return sortStoriesByDate(getStoriesRaw());
}

export function getCards() {
  const cards = getCardsRaw();

  return cards.map(function (card) {
    return {
      id: card.id,
      number: card.number,
      stories: cardStoriesForNumber(card.number),
    };
  });
}

export function getCard(number) {
  const cardNumber = normalizeCardNumber(number);
  const cards = getCards();
  const card = cards.find(function (item) {
    return String(item.number) === String(cardNumber);
  });

  if (card) {
    return card;
  }

  const fallbackStories = cardStoriesForNumber(cardNumber);

  if (fallbackStories.length === 0) {
    return null;
  }

  ensureCardExists(cardNumber);

  return {
    id: nextId(cards),
    number: cardNumber,
    stories: fallbackStories,
  };
}

export function getStoriesForEmail(email) {
  return getStories().filter(function (story) {
    return story.email === email;
  });
}

export function addStory(storyInput) {
  const stories = getStoriesRaw();
  const normalizedStory = {
    id: nextId(stories),
    number: normalizeCardNumber(storyInput.number),
    email: storyInput.email,
    location: storyInput.location,
    story: storyInput.story,
    lat: Number(storyInput.lat),
    lng: Number(storyInput.lng),
    created_at: new Date().toISOString(),
  };

  ensureCardExists(normalizedStory.number);
  writeCollection(STORAGE_KEYS.stories, stories.concat([normalizedStory]));

  return normalizedStory;
}

export function deleteStory(storyId) {
  const stories = getStoriesRaw();
  const updatedStories = stories.filter(function (story) {
    return String(story.id) !== String(storyId);
  });

  writeCollection(STORAGE_KEYS.stories, updatedStories);
  return updatedStories;
}

export function registerUser(userInput) {
  const users = getUsersRaw();
  const email = userInput.email;
  const existingUser = users.find(function (user) {
    return user.email === email;
  });

  if (existingUser) {
    return {
      user: existingUser,
      message: 'Account already exists. Please log in with that email.',
    };
  }

  const nextUser = {
    id: nextId(users),
    email: email,
    password: userInput.password,
    role: email === adminEmail ? 'admin' : 'user',
    created_at: new Date().toISOString(),
  };

  writeCollection(STORAGE_KEYS.users, users.concat([nextUser]));

  return {
    user: nextUser,
    message: 'Account created!',
  };
}

export function loginUser(userInput) {
  const users = getUsersRaw();
  const email = userInput.email;
  const matchedUser = users.find(function (user) {
    return user.email === email;
  });

  if (!matchedUser) {
    registerUser(userInput);
  }

  const token = createDemoToken(email);
  setToken(token);

  return {
    token: token,
    message: 'Logged in!',
  };
}

export function getCurrentUser() {
  return decodeDemoToken(getToken());
}

export function isAdminUser(user) {
  return Boolean(user && user.email === adminEmail);
}
