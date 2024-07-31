import "./styles.css";

// 1. Remove the wrong animal
// 2. Combine both arrays to a larger array called "animals"
const cats = ["Tiger", "Lion", "Cheetah"];
const birds = ["Elephant", "Owl", "Eagle"];

const birdsCorrected = birds.filter((bird) => bird !== "Elephant");
const animals = [...cats, ...birdsCorrected];

// 3. Show the newly created array in our frontend
const tableNode = document.getElementById("listElement");
const tableData = tableNode.querySelector("tbody");

tableData.innerHTML = ""; // Reset table data

animals.forEach((animal) => {
  const tdNode = document.createElement("tr");
  tdNode.innerHTML = `<td>${animal}</td>`;
  tableData.appendChild(tdNode);
});
