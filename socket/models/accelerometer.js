module.exports = (sequelize, DataTypes) => {
	const Accelerometer = sequelize.define('Accelerometer', {
		time: DataTypes.DATE,
		value: DataTypes.BIGINT,
		type: DataTypes.STRING,
	}, {});

	// Accelerometer.associate = function(models){
		// associations can be defined here
	// };
	return Accelerometer;	
};
// https://www.youtube.com/watch?v=bl98dm7vJt0