const api = require('./api');

function ioRouter(io) {
  io.on('connection', (socket) => {
    socket.on('voltage', (data) => {
      api.createVoltage(data);
    });
    socket.on('offsets', (data) => {
      api.createOffsets(data);
    });
    socket.on('speed', (data) => {
      api.createSpeed(data);
    });
    socket.on('health', (data) => {
      api.createHealth(data);
    });
    socket.on('pressure', (data) => {
      api.createPressure(data);
    });
    socket.on('traction', (data) => {
      api.createTraction(data);
    });
    socket.on('location', (data) => {
      api.createLocation(data);
    });
    socket.on('accelerometer', (data) => {
      api.createAccelerometer(data);
    });
    socket.on('gyroscope', (data) => {
      api.createGyroscope(data);
    });
    socket.on('compass', (data) => {
      api.createCompass(data);
    });
    socket.on('temperature', (data) => {
      socket.broadcast.emit('temperature',data);
      api.createTemperature(data);
    });
  });
}
module.exports = ioRouter;
