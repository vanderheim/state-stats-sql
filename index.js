import readline from 'readline';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
var argv = require('minimist')(process.argv.slice(2));

// Display help message if --help was called.
if ('help' in argv) {
    console.log('This program takes a user input in the form of JSON and converts the information to a sequence of SQL commands to create and populate a table with the data.');
    console.log('Input format: JSON');
    console.log('Output format: SQL database query statements');
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Take in user input in the form of JSON.
    rl.question('Please enter the JSON created by the State Stats program. It will be processed into SQL database statements below. \n', (value) => {
        let data = JSON.parse(value);

        process.stdout.write(`CREATE TABLE StateTotals (Name varchar(255), TotalPopulation int)` + '\n');

        process.stdout.write(`INSERT INTO StateTotals (Name, TotalPopulation)` + '\n')
        process.stdout.write(`VALUES` + '\n')

        let statesArray = data['pop_total_by_state'];

        for (let i = 0; i < statesArray.length; i++) {
            // Format state back to capital letters and spaces.
            let formattedState = Object.keys(statesArray[i])[0]
            .split('_')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');

            process.stdout.write(`('${formattedState}', '${statesArray[i][Object.keys(statesArray[i])[0]]}')${i === statesArray.length - 1 ? '' : ','}` + '\n')
        }

        rl.close();
    });
}