module.exports = {
  root: true,
  extends: ["nest"],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname,
    sourceType: 'module',
  },
};
