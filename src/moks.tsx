export const noteList = [
  {
    id: '1',
    name: 'Shopping List',
    date: 'Sep 20, 2022',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: { prev: 'Sep 20, 2022', next: 'Sep 20, 2022' },
    archived: false,
  },
  {
    id: '2',
    name: 'The theory of evolution',
    date: 'Sep 21, 2022',
    category: 'Random Thought',
    content: 'The evoluton has a lot of theories',
    dates: { prev: 'Sep 20, 2022', next: 'April 20, 2021' },
    archived: false,
  },
  {
    id: '3',
    name: 'New Feature',
    date: 'Sep 22, 2022',
    category: 'Idea',
    content: 'Implement new feature',
    dates: { prev: 'April 20, 2021', next: 'Sep 22, 2022' },
    archived: false,
  },
  {
    id: '4',
    name: 'William Gaddis',
    date: 'Sep 23, 2022',
    category: 'Quote',
    content: `Power doesn't corrupt people; people corrupt power`,
    dates: { prev: 'April 20, 2021', next: 'April 20, 2021' },
    archived: false,
  },
  {
    id: '5',
    name: 'Books',
    date: 'Sep 23, 2022',
    category: 'Task',
    content: 'The Lean Startup',
    dates: { prev: 'April 20, 2021', next: 'Sep 20, 2022' },
    archived: false,
  },
  {
    id: '6',
    name: 'William ',
    date: 'Sep 18, 2022',
    category: 'Quote',
    content: 'Bread, milk',
    dates: { prev: 'April 20, 2021', next: 'Sep 20, 2022' },
    archived: true,
  },
  {
    id: '7',
    name: 'Old Shopping List',
    date: 'Sep 19, 2022',
    category: 'Task',
    content: 'Bread, milk, meat',
    dates: { prev: 'April 20, 2021', next: 'April 20, 2021' },
    archived: true,
  },
];

export const summary = [
  { category: 'Task', active: 17, archived: 5 },
  { category: 'Random Thought', active: 3, archived: 1 },
  { category: 'Idea', active: 3, archived: 1 },
  { category: 'Quote', active: 2, archived: 11 },
];

export const notesBar = ['Created', 'Category', 'Content', 'Dates'];

export const categories = ['Task', 'Random Thought', 'Idea', 'Quote'];

export const months = [
  // 'January',
  // 'February',
  // 'March',
  // 'April',
  // 'May',
  // 'June',
  // 'July',
  // 'August',
  // 'September',
  // 'November',
  // 'December',
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Nov',
  'Dec',
];
