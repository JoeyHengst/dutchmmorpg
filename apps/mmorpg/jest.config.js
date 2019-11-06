module.exports = {
  name: 'mmorpg',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mmorpg',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
