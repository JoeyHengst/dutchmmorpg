module.exports = {
  name: 'game',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/game',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
