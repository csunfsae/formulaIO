const api = require('./api');

function ioRouter(io) {
  io.on('connection', (socket) => {
    socket.emit('connected');
    socket.on('voltage', (data) => {
      socket.broadcast.emit('voltage', data);
      api.createVoltage(data);
    });
    // socket.on('offsets', (data) => {
    //   socket.broadcast.emit('offsets', data);
    //   api.createOffsets(data);
    // });
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
    socket.on('steering_wheel', (data) => {
      socket.broadcast.emit('steering_wheel', data);
      api.createSteering(data);
    });
    socket.on('accelerator', (data) => {
      socket.broadcast.emit('accelerator', data);
      api.createAccelerator(data);
    });
    socket.on('can_data', (data) => {
      socket.broadcast.emit('can_data', data);
      api.createCanData(data);
    });
    socket.on('suspension_offset', (data) => {
      socket.broadcast.emit('suspension_offset', data);
      api.createSuspensionOffset(data);
    });
    socket.on('brake', (data) => {
      socket.broadcast.emit('brake', data);
      api.createBrake(data);
    });
  });
}
module.exports = ioRouter;
