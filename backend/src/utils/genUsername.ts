type Range = {
  min: number;
  max: number;
};

const random = (range: Range): number => {
  return Math.floor(Math.random() * (range.max - range.min + 1) + range.min);
};

const genUsername = (charsNumber: number): string => {
  const types: Array<Range> = [
    // Numbers
    { min: 48, max: 57 },
    // Upper letters
    { min: 65, max: 90 },
    // Lower letters
    { min: 97, max: 122 },
  ];

  let username = '';

  for (let i = 0; i < charsNumber; i++) {
    const typeIndex = random({ min: 0, max: 2 });
    const type = types[typeIndex];

    const charCode = random(type);
    username += String.fromCharCode(charCode);
  }

  return username;
};

export default genUsername;
