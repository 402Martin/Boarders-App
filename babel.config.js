module.exports = {
  plugins: [
    [
      'module-resolver',

      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['.'],
      },
    ],
    'optional-require',
    'react-native-paper/babel',
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
