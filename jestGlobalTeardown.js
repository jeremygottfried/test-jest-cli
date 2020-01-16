export default async function teardown() {
  console.log('Stopping Server');
  // Stops process tree below foreman
  await global.server.destroy();
}
