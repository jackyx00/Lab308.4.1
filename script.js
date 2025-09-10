/* Part 1 */
        let csvfile = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
        let data = []; // overall data table
        let row = []; // each row in data table
        let cell = ""; // each cell in rows of table

        for (let i = 0; i < csvfile.length; i++) {
            let char = csvfile[i];
// if the character is a "," it will push the previous characters 
// that were stored in cell into row
            if (char === ",") {
                row.push(cell);
                cell = "";                
            } 
// if the character is a "\n" it will push the previous characters 
// that were stored in cell into row and push that entire stored row to
// data then clear row and cell to continue with the next row
            else if (char === "\n") {
                row.push(cell);
                data.push(row);
                row = [];
                cell = "";
            }
// Besides "," and "\n" any other characters will be put into cell
            else {
                cell += char;
            }
// Since the end of last cell doesn't have "\n" we push the cell into last row
// when i reaches the end of the csvfile length and push the entire row to data
            if (i === csvfile.length - 1) {
                row.push(cell);
                data.push(row);
            }
        }
        console.log(data);


/* Part 2 */

// Split into rows by "\n"
let rows = csvfile.split("\n");

// 2D parent array
let table = [];

// Split into cells by ","
for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].split(",");
    table.push(cells);
}

console.log(table);


/* Part 3 */

// Take the headers out to array keys by looking at only row table[0]
let keys = [];
for (let i = 0; i < table[0].length; i++) {
    keys.push(table[0][i].toLowerCase());
}

// a new objects array to store all objects
let objects = [];
// start i = 1 because no header row
for (let i = 1; i < table.length; i++) {
    let table_row = table[i]; // each row in table
    let obj = {}; // empty object
    for (let j = 0; j < keys.length; j++) {
        // assign values of their respective keys array to obj
        obj[keys[j]] = table_row[j];
    }
    objects.push(obj);
}

console.log(objects);


/* Part 4 */

objects.pop();
console.log(objects);

let Barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
let Bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

objects.splice(1, 0, Barry);
console.log(objects);

objects.push(Bilbo);
console.log(objects);

let average_age = 0;
for (let i = 0; i < objects.length; i++) {
    average_age += parseInt(objects[i].age);
    if (i === objects.length - 1) {
        average_age /= objects.length;
    }
}
console.log(`The average age of the group is ${average_age}`);


/* Part 5 */

// Capitalize first letter of header
for (let i = 0; i < keys.length; i++) {
    // slice with string instead of array
    keys[i] = keys[i].charAt(0).toUpperCase() + keys[i].slice(1);
}

// Combine header first
let csvline = keys.join(",");

// Add together as a single string
for (let i = 0; i < objects.length; i++) {
    csvline += "\\n" + objects[i].id + "," + 
    objects[i].name + "," +
    objects[i].occupation + "," +
    objects[i].age;
}

console.log(csvline);
