const s3 = require('s3');
const path = require('path');
const build = require('./build');
const task = require('./task');
const config = require('./config');

module.exports = task('upload', () => Promise.resolve()
  .then(() => Uploader)
);
const Uploader = new Promise((resolve, reject) => {
  const client = s3.createClient({
  s3Options: {
      accessKeyId: 'AKIAI7IIUSXUX3OUOXYA',
      secretAccessKey: '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',
      region: 'eu-west-1',
      sslEnabled: true,
    },
  });
  const uploader = client.uploadDir({
    localDir: 'public/',
    deleteRemoved: true,
    s3Params: {
      Bucket: 'myway-webapp'
    },
  });
  uploader.on('error', reject);
  uploader.on('end', resolve);
});
