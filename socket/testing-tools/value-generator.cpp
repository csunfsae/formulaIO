#include <iostream>
#include <fstream>
#include <random>
#include <iomanip>

using namespace std;

int generateIntegerValues(int maximum);
float generateFloatValues(float maximum);
int writeToFile(ofstream testFile);

int main() {
	const float startingValue = 1000;
	int next;
	float current = 1000;
	int maximum, minimum;
	float batteryValue, random;
	ofstream testFile;
	
	testFile.open ("generated-values.csv");

	maximum = 1000, minimum = 900;

	if(testFile.is_open()) {

		testFile << "batteryReading," << "motorTemperature," << "wheelSpeed," << "suspensionOffset," << "steeringInput," 
		<< "tirePressure," << "accumulatorTemperature," << "cellTemperatureMax," << "cellTemperatureMin," 
		<< "rollRate," << "pitchRate," << endl;

		testFile << "Voltage," << "Celsius," << "RPM," << "Millimeters," << "Degrees," << "Pounds Per Inch," 
		<< "Celsius," << "Celsius," << "Celsius," << "Degrees," << "Degrees," << endl;

		testFile << "V," << "C," << "rpm," << "mm," << "deg," << "ppi," << "C," << "C," << "C," << "deg," << "deg," << endl;

		for(int i = 0; i < 4679; i++) {
			for(int j = 0; j < 11; j++) {
				switch(j) {
    				case 0 : 
						testFile << generateFloatValues(90) << ",";
             			break; 
    				case 1 : 
						testFile << generateIntegerValues(50) << ",";
            			break;
    				case 2 : 
						testFile << generateIntegerValues(1000) << ",";
            			break;
    				case 3 : 
						testFile << generateIntegerValues(50) << ",";
            			break;
    				case 4 : 
						testFile << generateIntegerValues(360) << ",";	
            			break;
    				case 5 : 
						testFile << generateIntegerValues(40) << ",";
            			break;
    				case 6 : 
						testFile << generateIntegerValues(60) << ",";
            			break;	
    				case 7 : 
						testFile << generateIntegerValues(60) << ",";
            			break;	
    				case 8 : 
						testFile << generateIntegerValues(25) << ","; 
            			break;	
  					case 9 : 
						testFile << generateFloatValues(90) << ",";
            			break;
  					case 10 : 
						testFile << generateFloatValues(190) << ",";
            			break;						
				}
			}

			testFile << endl;
		}
	}

	testFile.close();

	cout << "Test file created successfully" << endl;

	return 0;
}

int generateIntegerValues(int maximum) {
	int random = rand() % maximum;
	return random; 
}

float generateFloatValues(float maximum) {
	double random = rand() % 10 + maximum;
	return random / maximum;
}