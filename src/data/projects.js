export const categories = ['all', 'web', 'hardware', 'creative'];

export const projectsData = [
  {
    id: 1,
    title: 'Digital Measuring Tape',
    description: 'Arduino-based contactless distance measurement system',
    longDesc:
      'A first-year team project that uses an Arduino Uno, ultrasonic sensor, and LCD display to measure distance without physical contact. The measured distance is calculated using the Time of Flight principle and displayed in real time.',
    tech: ['Arduino Uno', 'Ultrasonic Sensor', 'LCD', 'Embedded Systems'],
    category: 'hardware',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description: 'Personal portfolio built with React',
    longDesc:
      'A personal developer portfolio created to showcase my projects, skills, learning journey, and contact information. The website is designed with a responsive interface and a red-and-black visual theme.',
    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
    category: 'web',
    featured: true,
    liveUrl: 'https://kruthika-ten.vercel.app/',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'MoodBoard',
    description: 'A simple creative mood-based web experience',
    longDesc:
      'A small creative learning project where users can select a mood and receive a matching quote and visual experience. This project is planned as part of my journey in learning JavaScript and building interactive web experiences.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'creative',
    featured: false,
    liveUrl: '#',
    githubUrl: '#'
  }
];