// grab the presidents data from the file
import { presidents } from "../data/presidents.mjs";
//console.log(presidents);

//path to presidential photos
const pathStart = "https://resources.dgmuvu.com/presidents/";

//reference to the id on our web page
const showPresidents = document.querySelector("#showpresidents");




//========================== FILTER THE ENTIRE LIST WHEN A BUTTON IS CLICKED ======================

// respond to btn-all being clicked
document.querySelector("#btn-all").addEventListener("click", (el) => {
  displayPresidents(presidents);
  //console.log(el.target.id);
  updateSubNav(el.target.id);
});

// respond to btn-rep being clicked
document.querySelector("#btn-rep").addEventListener("click", (el) => {
  const filteredlist = presidents.filter((presidents) => presidents.party === "Republican");
  displayPresidents(filteredlist);
  updateSubNav(el.target.id);
});

// respond to btn-dem being clicked
document.querySelector("#btn-dem").addEventListener("click", (el) => {
  const filteredlist = presidents.filter((presidents) => presidents.party === "Democrat");
  displayPresidents(filteredlist);
  updateSubNav(el.target.id);
});

// respond to btn-dr being clicked
document.querySelector("#btn-dr").addEventListener("click", (el) => {
  const filteredlist = presidents.filter((presidents) => presidents.party === "Democrat-Republican");
  displayPresidents(filteredlist);
  updateSubNav(el.target.id);
});

// respond to btn-whi being clicked
document.querySelector("#btn-whi").addEventListener("click", (el) => {
  const filteredlist = presidents.filter(
    (presidents) => presidents.party === "Whig"
  );
  displayPresidents(filteredlist);
  updateSubNav(el.target.id);
});

// respond to btn-non being clicked
document.querySelector("#btn-non").addEventListener("click", (el) => {
  const filteredlist = presidents.filter((presidents) => presidents.party === "None");
  displayPresidents(filteredlist);
  updateSubNav(el.target.id);
});





// ---------------- UPDATE THE SUB NAVIGATION ------------------------
function updateSubNav(buttonName) {
  //remove the active class from all buttons
  const allButtons = document.querySelectorAll(".submenu button")
  allButtons.forEach((btn) => (btn.className = ""));

  // add the active class to the current button
  document.querySelector(`#${buttonName}`).classList.add("current");
}







// ---------------- FUNCTION TO SHOW PRESIDENTS ------------------------
function displayPresidents(filteredlist, buttonName) {
  console.log(filteredlist, buttonName);

  //clear the page
  showPresidents.innerHTML = "";

  // loop through the filtered list
  filteredlist.forEach((p) => {
    console.log(p.name);
    //create a heading for the name
    let presName = document.createElement("h2");
    presName.innerText = p.name;

    // create an image element with attributes
    let presImage = document.createElement("img");
    presImage.src=pathStart + p.photo
    presImage.alt = p.name
    presImage.loading = "lazy"
    presImage.width = 250
    presImage.height = 300

    // create a caption
    let presInfo = document.createElement("p");
    presInfo.innerHTML = `Served ${p.took_office} to ${p.left_office}<br>Party: ${p.party}`;




    // create a section for each card
    let presCard = document.createElement("section");
    presCard.className=p.party.toLowerCase()

    // build the section with child elements
    presCard.appendChild(presName);
    presCard.appendChild(presImage);
    presCard.appendChild(presInfo);

    //add a new card to a page
    showPresidents.appendChild(presCard);
  });
} // end of display presidents




displayPresidents(presidents, "btn-all");
