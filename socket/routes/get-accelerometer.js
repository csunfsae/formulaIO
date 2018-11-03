// The Getters for Accelerometer

const Accelerometer = {
	time: DataTypes.DATE,
	value: DataTypes.BIGINT,
	type: DataTypes.STRING,

	// Create Getter route to get entry from Accel
	get accelerInfo(){
		// return necessary info
	},

	// Create Setter to allow mutation
	set accelerInfo(speed){
		// Declare method for proper return values
	},
};

// getter => access properties
// setters => change (mutate) them
