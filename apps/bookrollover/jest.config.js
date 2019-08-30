module.exports = {
  name: 'bookrollover',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bookrollover',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
