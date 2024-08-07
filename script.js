// console.log('Hello World')

// var promopt= prompt('what is your name?')

// console.log(prompt)


 function verifyAge(age){
var age = prompt('what is your age');
 console.log(age)
   
 if (age < 18){
  alert('You are a minor!')
 } else if (age >= 18 && age <= 60) {
  alert('You are an adult!')
 } else {
  alert('You are a senior citizen!')
 } 
}


function uploadAndIdentifyPlant() {
// get the photo from the frontend
var photoInput = document.getElementById('photoInput');
  console.log(photoInput)
  console.log(photoInput.files[0])

  // if no photo is uploaded, then alert the user to upload a photo
if (photoInput.files.length === 0) {
  alert('Please select a photo to upload.');
  return;
  }

// select the first file from the files folder/array from the upload button
  var selectedFile = photoInput.files[0];
}
