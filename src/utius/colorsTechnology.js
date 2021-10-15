export const colorsTechnology = (technology) => {
  const technologyLowerCase = technology.toLowerCase();
  const isTechnology = (tec) => (technologyLowerCase === tec);
  // console.log('ola', technologyLowerCase);
  switch (true) {
    case isTechnology('html5'): return '%23E44D27';

    case isTechnology('css3'): return '%231572B6';

    case isTechnology('javascript'): return '%23F7DF1C';

    case isTechnology('react'): return '61DAFB';

    case isTechnology('node.js'): return '339933';

    case isTechnology('jest'): return 'c22929';

    case isTechnology('mysql'): return '4479A1';

    case isTechnology('mongodb'): return '47A248';

    case isTechnology('python'): return 'blue';

    case isTechnology('git'): return '%23F05032';

    case isTechnology('socket.io'): return '1c1e21';

    case isTechnology('sequelize'): return 'blue';

    default: return 'b0ecfc';
  }
};
