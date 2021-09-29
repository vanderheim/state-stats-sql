# state-stats-sql

This is a simple program written in NodeJS that takes in some statistical information in the form of two CSV files and performs some basic calculations on it.

## Table of Contents
- [Prerequisities](#prerequisities)
- [Installing](#install)

### Prerequisites
You must have NodeJS version v14.16.0 or later installed to run this program.

**NOTE: This program uses ES6 modules, and thus it can only run in NodeJS versions of at least v14.16.0 or later! Please make sure your NodeJS version is compatible with this program.**

### Installing

1. Clone the repository.
```
git clone https://github.com/vanderheim/state-stats-sql.git
```

2. cd into the directory and run npm install. This will install all the libraries that are required by the program.
```
npm install
```

3. Run the program (index.js). This program takes a user defined input in the form of JSON. You can also run it with the --help argument to get a brief overview of what the program does. Input the JSON that was generated from the state-stats program.

```
node index.js
```

Sample input:

```
{"pop_total_by_state":[{"new_hampshire":31953},{"maine":38158},{"vermont":260799},{"massachusetts":264299}],"average_pop_per_zip":54109,"average_pop_per_state":148802}
```

This will output a sequence of SQL database query statements in the following format:
```
CREATE TABLE StateTotals (Name varchar(255), TotalPopulation int)
INSERT INTO StateTotals (Name, TotalPopulation)
VALUES
('New Hampshire', '31953'),
('Maine', '38158'),
('Vermont', '260799'),
('Massachusetts', '264299')
```

That's it! You can now use the generated statements to create and populate a table in your MySQL database.
