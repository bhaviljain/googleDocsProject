//Storage
let sheetDB = []

for(let i =0; i<row; i++)
{
    let sheetRow =[];
    for(let j = 0; j<col; j++)
    {
    let cellprop = {
        bold: false,
        italic:false,
        underline:false,
        alignment:"left",
        fontFamily : "Monospace",
        fontsize :"14",
        fontcolor: "#000000",
        BGcolor: "#000000"
    }
    sheetRow.push(cellprop)
    }
    sheetDB.push(sheetRow)
}

let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontFamily = document.querySelector(".fontfamily");
let fontsize = document.querySelector(".fontsize");
let fontcolor = document.querySelector(".font-color-prop");
let BGcolor = document.querySelector(".BGcolor");
let alignment = document.querySelectorAll(".alignment")
let leftAlign = alignment[0]
let centerAlign = alignment[1]
let rightAlign = alignment[2]
let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

// let addressBar = document.querySelector(".address-bar");

bold.addEventListener("click", (e) => {
    let address = addressbar.value;
    let [cell, cellprop] = getCellAndCellProp(address);

    // Modification
    cellprop.bold = !cellprop.bold; // Data change
    cell.style.fontWeight = cellprop.bold ? "bold" : "normal"; // UI change (1)
    bold.style.backgroundColor = cellprop.bold ? activeColorProp : inactiveColorProp; // UI change (2)
})
italic.addEventListener("click", (e) => {
    let address = addressbar.value;
    let [cell, cellprop] = getCellAndCellProp(address);

    // Modification
    cellprop.italic = !cellprop.italic; // Data change
    cell.style.fontStyle = cellprop.italic ? "italic" : "normal"; // UI change (1)
    italic.style.backgroundColor = cellprop.italic ? activeColorProp : inactiveColorProp; // UI change (2)
})
underline.addEventListener("click", (e) => {
    let address = addressbar.value;
    let [cell, cellprop] = getCellAndCellProp(address);

    // Modification
    cellprop.underline = !cellprop.underline; // Data change
    cell.style.textDecoration = cellprop.underline ? "underline" : "normal"; // UI change (1)
    underline.style.backgroundColor = cellprop.underline ? activeColorProp : inactiveColorProp; // UI change (2)
})

fontsize.addEventListener("change", (e) => {
    let address = addressbar.value;
    let [cell, cellprop] = getCellAndCellProp(address);

    cellprop.fontsize = fontsize.value; // Data change
    cell.style.fontSize = cellprop.fontsize + "px";
    fontsize.value = cellprop.fontsize;
})
fontFamily.addEventListener("change", (e) => {
    let address = addressbar.value;
    let [cell, cellprop] = getCellAndCellProp(address);

    cellprop.fontFamily = fontFamily.value; // Data change
    cell.style.fontFamily = cellprop.fontFamily;
    fontFamily.value = cellprop.fontFamily;
})
alignment.forEach((alignEle)=>{
    alignEle.addEventListener('click', (e)=>{
        let address = addressbar.value;
        let [cell, cellprop] = getCellAndCellProp(address);

        let alignValue = e.target.classList[0];
        cellprop.alignment = alignValue;
        cell.style.textAlign = cellprop.alignment;
        // let activeColorProp = "#d1d8e0";
        // let inactiveColorProp = "#ecf0f1";
        switch(alignValue){
            case "left":
            leftAlign.style.backgroundColor = activeColorProp
            rightAlignAlign.style.backgroundColor = inactiveColorProp
            centerAlignAlign.style.backgroundColor = inactiveColorProp
            break

            case "right":
                leftAlign.style.backgroundColor = inactiveColorProp
                rightAlignAlign.style.backgroundColor = activeColorProp
                centerAlignAlign.style.backgroundColor = inactiveColorProp
            break

            case "center":
                leftAlign.style.backgroundColor = inactiveColorProp
                rightAlignAlign.style.backgroundColor = inactiveColorProp
                centerAlignAlign.style.backgroundColor = activeColorProp
                break;

        }

    })
 


})


function getCellAndCellProp(address) {
    let [rid, cid] = decodeRIDCIDFromAddress(address);
    // Access cell & storage object
    let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = sheetDB[rid][cid];
    return [cell, cellProp];
}

function decodeRIDCIDFromAddress(address) {
    // address -> "A1"
    let rid = Number(address.slice(1) - 1); // "1" -> 0
    let cid = Number(address.charCodeAt(0)) - 65; // "A" -> 65
    return [rid, cid];
}


// // Storage
// let collectedSheetDB = [];  //Contains all SheetDB
// let sheetDB = [];

// {
//     let addSheetBtn = document.querySelector(".sheet-add-icon");
//     addSheetBtn.click();
// }

// for (let i = 0; i < rows; i++) {
//     let sheetRow = [];
//     for (let j = 0; j < cols; j++) {
//         let cellProp = {
//             bold: false,
//             italic: false,
//             underline: false,
//             alignment: "left",
//             fontFamily: "monospace",
//             fontSize: "14",
//             fontColor: "#000000",
//             BGcolor: "#000000",  // Just for indication purpose,
//             value: "",
//             formula: "",
//             children: [],
//         }
//         sheetRow.push(cellProp);
//     }
//     sheetDB.push(sheetRow);
// }


// // Selectors for cell properties
// // let bold = document.querySelector(".bold");
// // let italic = document.querySelector(".italic");
// // let underline = document.querySelector(".underline");
// // let fontSize = document.querySelector(".font-size-prop");
// // let fontFamily = document.querySelector(".font-family-prop");
// // let fontColor = document.querySelector(".font-color-prop");
// // let BGcolor = document.querySelector(".BGcolor-prop");
// // let alignment = document.querySelectorAll(".alignment");
// // let leftAlign = alignment[0];
// // let centerAlign = alignment[1];
// // let rightAlign = alignment[2];

// // let activeColorProp = "#d1d8e0";
// // let inactiveColorProp = "#ecf0f1";

// // // Application of two-way binding
// // // Attach property listeners
// // bold.addEventListener("click", (e) => {
// //     let address = addressBar.value;
// //     let [cell, cellProp] = getCellAndCellProp(address);

// //     // Modification
// //     cellProp.bold = !cellProp.bold; // Data change
// //     cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; // UI change (1)
// //     bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp; // UI change (2)
// // })
// // italic.addEventListener("click", (e) => {
// //     let address = addressBar.value;
// //     let [cell, cellProp] = getCellAndCellProp(address);

// //     // Modification
// //     cellProp.italic = !cellProp.italic; // Data change
// //     cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; // UI change (1)
// //     italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp; // UI change (2)
// // })
// // underline.addEventListener("click", (e) => {
// //     let address = addressBar.value;
// //     let [cell, cellProp] = getCellAndCellProp(address);

// //     // Modification
// //     cellProp.underline = !cellProp.underline; // Data change
// //     cell.style.textDecoration = cellProp.underline ? "underline" : "none"; // UI change (1)
// //     underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp; // UI change (2)
// // })
// // fontSize.addEventListener("change", (e) => {
// //     let address = addressBar.value;
// //     let [cell, cellProp] = getCellAndCellProp(address);

// //     cellProp.fontSize = fontSize.value; // Data change
// //     cell.style.fontSize = cellProp.fontSize + "px";
// //     fontSize.value = cellProp.fontSize;
// // })
// // fontFamily.addEventListener("change", (e) => {
// //     let address = addressBar.value;
// //     let [cell, cellProp] = getCellAndCellProp(address);

// //     cellProp.fontFamily = fontFamily.value; // Data change
// //     cell.style.fontFamily = cellProp.fontFamily;
// //     fontFamily.value = cellProp.fontFamily;
// // })