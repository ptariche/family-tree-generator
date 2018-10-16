# Family Tree Generator
Family Tree Generator -- Converts a Google Spreadsheet to a PNG Graph

### Google Spreadsheet
 - Copy/Duplicate the Spreadsheet at https://docs.google.com/spreadsheets/d/19q_eE2wclqLL8039WozLz-LquhcOPMGyy1hCdHUHr64/edit?usp=sharing
 - Modify the spreadsheet to your/a family/ancestors
 - Download a copy of the file

### How to Run
 - npm install
 - CSV_FILE=<FILE_PATH_OF_CSV> PNG_OUTPUT=<FILE_PATH_OF_PNG_OUTPUT> npm start

### Example
  - [CSV File](./examples/example_family.csv)

![Family Tree](./examples/example_family.png)


### Dependencies
  - [csvtojson](https://www.npmjs.com/package/csvtojson)
  - [json2yaml](https://www.npmjs.com/package/json2yaml)
  - [kingraph](https://github.com/rstacruz/kingraph)

### Author
  - Peter A. Tariche

### License
  - MIT
