#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {

    ofstream masterFile;
    ifstream generatedValues;
    ifstream simulatedValues;

    string genLineRead, simLineRead, concatLine;

    generatedValues.open("generated-values.csv");
    simulatedValues.open("simulated-values.csv");
    masterFile.open("test-values.csv");

    if(masterFile.is_open()) {
        cout << "File opened successfully" << endl;

        if(generatedValues.is_open() && simulatedValues.is_open()) {
            while ( getline (generatedValues, genLineRead) && getline (simulatedValues, simLineRead)) {
                masterFile << genLineRead + simLineRead << endl;
            }
        }
    }

    return 0;
}
