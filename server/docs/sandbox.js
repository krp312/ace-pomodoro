const testArr = [
  {
    name: 'be zen',
    work_duration: {
      seconds: 5
    },
    break_duration: {}
  },
  {
    name: 'capstone',
    work_duration: {
      minutes: 4,
      seconds: 9
    },
    break_duration: {
      minutes: 10,
      seconds: 38
    }
  },
  {
    name: 'listen to kris whine',
    work_duration: {
      hours: 40,
      minutes: 40,
      seconds: 40
    },
    break_duration: {
      hours: 40,
      minutes: 40,
      seconds: 40
    }
  },
  {
    name: 'pilot aircraft',
    work_duration: {
      minutes: 16,
      seconds: 46
    },
    break_duration: {
      minutes: 12,
      seconds: 46
    }
  }
];

const aTestArr = ['bob', 'ray'];

const result = testArr.filter(object => {
  return object.name === 'be zen';
})

console.log(result)