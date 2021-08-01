// Function added today to reset fields
function reset(){
  document.getElementById('titleRec').value="";
  document.getElementById('recipeRec').value="";
}
// -- - - - - - - - - - - - - - -  - -  - -- - - - - - -
function getValue(){
  let retitle = document.getElementById('titleRec').value;
  alert("Ths is your recipe title: " + retitle);
  alert('Now add your recipe');
}
// function to add the image
function addImg(){
  let myImage = document.createElement('img');
  myImage.src = 'https://loremflickr.com/210/210/food';
  myImage.alt = 'Nice food photo';
  document.getElementById('recBlog').appendChild(myImage);
}
// function to add the blog
function addData(){
let recipeTitle = document.getElementById('titleRec').value;
let enteRecipe = document.getElementById('recipeRec').value;
let myPTag = document.createElement('p');
let myPTagContent = document.createTextNode(recipeTitle + ": " + enteRecipe);
myPTag.setAttribute('class', 'myClass');
myPTag.appendChild(myPTagContent);
document.getElementById('recBlog').appendChild(myPTag);
}
// function to add the image
function addImg1(){
  let myImage = document.createElement('img');
  myImage.src = 'https://loremflickr.com/g/210/210/food';
  myImage.alt = 'Nice food photo';
  document.getElementById('recBlog1').appendChild(myImage);
}
// function to add the blog
function addData1(){
let recipeTitle = document.getElementById('titleRec').value;
let enteRecipe = document.getElementById('recipeRec').value;
let myPTag = document.createElement('p');
let myPTagContent = document.createTextNode(recipeTitle + " " + enteRecipe);

myPTag.setAttribute('class', 'myClass');
myPTag.appendChild(myPTagContent);

document.getElementById('recBlog1').appendChild(myPTag);
}


function addImg2(){
  let myImage = document.createElement('img');
  myImage.src = 'https://loremflickr.com/210/210/food';
  myImage.alt = 'Nice food photo';
  document.getElementById('recBlog2').appendChild(myImage);
}

// function to add the blog
function addData2(){
let recipeTitle = document.getElementById('titleRec').value;
let enteRecipe = document.getElementById('recipeRec').value;
let myPTag = document.createElement('p');
let myPTagContent = document.createTextNode(recipeTitle + " " + enteRecipe);

myPTag.setAttribute('class', 'myClass');
myPTag.appendChild(myPTagContent);

document.getElementById('recBlog2').appendChild(myPTag);
}

//function to close modal
function closeModal() {
  let closeModal = document.getElementById('modalOuter');
  closeModal.classList.remove('open');
  reset();
}

function callTwoOtherFunctions(){
  addImg();
  addData();
  closeModal();
}

function callSecondBatchFunctions(){
  addImg1();
  addData1();
  closeModal();
}

function callthirdBatchFunctions(){
  addImg2();
  addData2();
  closeModal();
}
// function to loop through the different divs
// let principal = document.getElementById('butOpen');
if (callTwoOtherFunctions()==true){
  callSecondBatchFunctions();
}else{
  (callSecondBatchFunctions()==true)
    callthirdBatchFunctions();  
  }

//function to open with button
let but = document.getElementById('butOpen');
butOpen.addEventListener('click', function(){
  // console.log('ya clicked it!!!');
  let getModal = document.getElementById('modalOuter');
  getModal.classList.add('open');
});
