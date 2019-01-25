const api = require('./api');

function ioRouter(io) {
  io.on('connection', (socket) => {
    socket.on('voltage', (data) => {
      socket.broadcast.emit('voltage', data);
      api.createVoltage(data);
    });
    socket.on('offsets', (data) => {
      socket.broadcast.emit('offsets', data);
      api.createOffsets(data);
    });
    socket.on('speed', (data) => {
      socket.broadcast.emit('speed', data);
      api.createSpeed(data);
    });
    socket.on('health', (data) => {
      socket.broadcast.emit('health', data);
      api.createHealth(data);
    });
    socket.on('pressure', (data) => {
      socket.broadcast.emit('pressure', data);
      api.createPressure(data);
    });
    socket.on('traction', (data) => {
      socket.broadcast.emit('traction', data);
      api.createTraction(data);
    });
    socket.on('location', (data) => {
      socket.broadcast.emit('location', data);
      api.createLocation(data);
    });
    socket.on('accelerometer', (data) => {
      socket.broadcast.emit('accelerometer', data);
      api.createAccelerometer(data);
    });
    socket.on('gyroscope', (data) => {
      socket.broadcast.emit('gyroscope', data);
      api.createGyroscope(data);
    });
    socket.on('compass', (data) => {
      socket.broadcast.emit('compass', data);
      api.createCompass(data);
    });
    socket.on('temperature', (data) => {
      socket.broadcast.emit('temperature', data);
      api.createTemperature(data);
    });
  });
}
module.exports = ioRouter;
