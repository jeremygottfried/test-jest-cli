import spawnd from 'spawnd';
import cwd from 'cwd';
import http from 'http';

function serverReady() {
  return new Promise(function(resolve) {
    async function checkReady() {
      const req = http.get({
        hostname: 'localhost',
        port: 3000,
        path: '/',
      }, function (res) {
        if (res.statusCode === 200) {
          resolve();
        } else {
          return checkReady();
        }
      });
      req.on('error', function() {
        return checkReady();
      });
    }
    checkReady();
  });
}

export default async function setup() {
  console.log(`\nStarting up react server at port 3000...`);
  const server = spawnd('yarn', ['start'], { shell: true, cwd: cwd() });
  global.server = server;
  await serverReady();
  console.log('\nServer Ready');
}
