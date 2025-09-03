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
