// grab the presidents data from the file
import {presidents} from '../data/presidents.mjs';
console.log(presidents);

//path to photos on the government website
//const pathStart = "//www.loc.gov/static/portals/free-to-use/public-domain/presidential-portraits/";
const pathStart = "https://resources.dgmuvu.com/presidents/"

 //referrence to the id on our web page
const showPresidents = document.querySelector("#showpresidents");

//========================== FILTER THE ENTIRE LIST WHEN A BUTTON IS CLICKED ======================
// show ALL button
document.querySelector('#all').addEventListener('click', () => {
  displayPresidents(presidents, "all")
}); 

// show rep button
document.querySelector('#rep').addEventListener('click', () => {
  const filteredlist = presidents.filter((presidents) => presidents.party === 'Republican');
  displayPresidents(filteredlist, "rep")
}); 

// show dem button
document.querySelector('#dem').addEventListener('click', () => {
  const filteredlist = presidents.filter((presidents) => presidents.party === 'Democrat');
  displayPresidents(filteredlist, "dem")
}); 

// show dr button
document.querySelector('#dr').addEventListener('click', () => {
  const filteredlist = presidents.filter((presidents) => presidents.party === 'Democrat-Republican');
  displayPresidents(filteredlist, "dr")
});

// show whi button
document.querySelector('#whi').addEventListener('click', () => {
  const filteredlist = presidents.filter((presidents) => presidents.party === 'Whig');
  displayPresidents(filteredlist, "whi")
});

// show non button
document.querySelector('#non').addEventListener('click', () => {
  const filteredlist = presidents.filter((presidents) => presidents.party === 'No Party');
  displayPresidents(filteredlist, "non")
});





// ---------------- FUNCTION TO SHOW PRESIDENTS ------------------------
function displayPresidents(filteredlist, buttonName ) {
  console.log(filteredlist, buttonName)
  
  //clear the page
  showPresidents.innerHTML = '';

  //remove the active class from all buttons
  document.querySelectorAll('.submenu button').forEach(btn => {
    btn.className = '';
  });

  // add the active class to the current button
  document.querySelector(`#${buttonName}`).classList.add('active');

// loop through the filtered list

for (let x = 0; x < filteredlist.length; x++) {


  //create a heading for the name
  let presName = document.createElement("h2")
  presName.innerText = filteredlist[x].name
  // assign a class based on the party
  switch (filteredlist[x].party) {
    case "Democrat":
      presName.className="party1"
    break;
    case "Republican":
      presName.className="party2"
    break;
    case "Whig":
      presName.className="party3"
    break;
    case "Democrat-Republican":
      presName.className="party4"
    break;
    default:
      presName.className="party5"
    break;
  }

  // create an image element with attributes
  let presImage = document.createElement("img");
  let pathEnd = filteredlist[x].photo;
  presImage.setAttribute("src", pathStart+pathEnd);
  presImage.setAttribute("alt", filteredlist[x].name);

  // create a caption
  let presInfo = document.createElement("p");
  presInfo.innerHTML = `Served ${filteredlist[x].took_office} to ${filteredlist[x].left_office}<br>Party: ${filteredlist[x].party}`;

	// create an empty figure
  let presCard = document.createElement("section");

  // build the figure with child elements
  presCard.appendChild(presName);
  presCard.appendChild(presImage);
  presCard.appendChild(presInfo);

  //add a new card to a page
  showPresidents.appendChild(presCard);
  
} // end for loop




} // end of dsplay presidents

displayPresidents(presidents, "all")