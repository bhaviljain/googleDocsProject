let row =100;
let col =26;

let addressColCont= document.querySelector(".address-column");

let addressRowCont= document.querySelector(".address-row");

let cellCont = document.querySelector(".cell-cont")

let addressbar = document.querySelector(".address-bar")
for(let i=0; i<row; i++)
{
 let addressCol = document.createElement("div");
 addressCol.setAttribute("class","address-col")
 addressCol.innerHTML =i+1;
 addressColCont.appendChild(addressCol);
}

for(let i=0; i<col; i++)
{
    let addressRow= document.createElement("div");
    addressRow.setAttribute("class","address-rows")
    addressRow.innerHTML = String.fromCharCode(65+i); 
    addressRowCont.appendChild(addressRow);
} 

for(let i =0; i<row; i++)
{
    let rowCount = document.createElement("div")
    rowCount.setAttribute("class","row")
    for(let j=0; j<col; j++){
        let cell = document.createElement("div")
        cell.setAttribute("spellcheck" , false)
        cell.setAttribute("class","cell")
        cell.setAttribute("contenteditable", "true")
        //cell and storage indentfication
        cell.setAttribute('rid', i)
        cell.setAttribute('cid', j)
        rowCount.appendChild(cell)
        samecontentdisplayinaddressbar(cell,i,j)

    }
 cellCont.appendChild(rowCount)
}
function samecontentdisplayinaddressbar(cell,i,j)
{
cell.addEventListener("click",(e)=> {
    let rowId =i+1;
    let colId=String.fromCharCode(65 + j); 
    addressbar.value=`${colId}${rowId}`

})
}
//default A1 ayega adress bar par
let firstClick = document.querySelector('.cell')
firstClick.click()



// let rows = 100;
// let cols = 26;

// let addressColCont = document.querySelector(".address-col-cont");
// let addressRowCont = document.querySelector(".address-row-cont");
// let cellsCont = document.querySelector(".cells-cont");
// let addressBar = document.querySelector(".address-bar");

// for (let i = 0;i < rows;i++) {
//     let addressCol = document.createElement("div");
//     addressCol.setAttribute("class", "address-col");
//     addressCol.innerText = i+1;
//     addressColCont.appendChild(addressCol);
// }

// for (let i = 0;i < cols;i++) {
//     let addressRow = document.createElement("div");
//     addressRow.setAttribute("class", "address-row");
//     addressRow.innerText = String.fromCharCode(65 + i);
//     addressRowCont.appendChild(addressRow);
// }

// for (let i = 0;i < rows;i++) {
//     let rowCont = document.createElement("div");
//     rowCont.setAttribute("class", "row-cont");
//     for (let j = 0;j < cols;j++) {
//         let cell = document.createElement("div");
//         cell.setAttribute("class", "cell");
//         cell.setAttribute("contenteditable", "true");
//         cell.setAttribute("spellcheck", "false");

//         // Attributes for cell and storage identification
//         cell.setAttribute("rid", i);
//         cell.setAttribute("cid", j);

//         rowCont.appendChild(cell);
//         addListenerForAddressBarDisplay(cell, i, j);
//     }
//     cellsCont.appendChild(rowCont);
// }

// function addListenerForAddressBarDisplay(cell, i, j) {
//     cell.addEventListener("click", (e) => {
//         let rowID = i+1;
//         let colID = String.fromCharCode(65 + j);
//         addressBar.value = `${colID}${rowID}`;
//     })
// }