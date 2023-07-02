const activities = [
  {
    name: 'Take a coffee break',
    emoji: '☕️',
  },
  {
    name: 'Meditate for five minutes',
    emoji: '🧘',
  },
  {
    name: 'Drink a glass of water',
    emoji: '🚰',
  },
  {
    name: 'Go for a walk',
    emoji: '🚶',
  },
  {
    name: 'Take a hike at a local park',
    emoji: '🌲',
  },
  {
    name: 'Take a nap',
    emoji: '😴',
  },
  {
    name: 'Go stargazing',
    emoji: '✨',
  },
  {
    name: 'Watch a movie',
    emoji: '🍿',
  },
  {
    name: 'Play a video game',
    emoji: '🎮',
  },
  {
    name: 'Write a list of things you are grateful for',
    emoji: '📝',
  },
  {
    name: 'Look at pictures or videos of cute animals',
    emoji: '🐶',
  },
  {
    name: 'Listen to some music',
    emoji: '🎧',
  },
  {
    name: 'Read a book',
    emoji: '📚',
  },
] as const;

export default defineEventHandler(() => {
  return activities.at(Math.floor(Math.random() * activities.length));
});
