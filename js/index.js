
// //login
// let userData = []



// fetch('http://localhost:3000/user')
// .then(res=> res.json())
// .then(data => {userData.push( data)}
//   )




//Signup 

// Handles email sending
$("#submitEmail").click(function(e){
  e.preventDefault();

  const formData =[ {
      firstname: $('#exampleInputFirstname').val(),
      lastname: $('#exampleInputLastname').val(),
      username: $('#exampleInputUsername').val(),
      DOB: $('#exampleDate').val(),
      email: $('#exampleInputEmail1').val(),
     

  }];

  // // Check for any unfilled input field
  // if (!(data.name && data.email && data.phone && data.primary_skill && data.other_skills && data.description && data.github  && data.source )) {
  //   //  display('Incomplete Form', 'Please Fill the Complete Form');
  //     document.getElementById("demo").innerHTML = "Incomplete Form', 'Please Fill the Complete Form Correctly";
  //     document.getElementById("demo").style.color = "red";

  // }
  // else {
    //  display('Sending Email', 'Please wait while we send the email.')
  //  document.getElementById("demo").innerHTML = "<img src=\"https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif\" width=\"50px\" height=\"50px\ alt=\"\">";
    //document.getElementById("demo").style.marginLeft = "300px";
      // $.ajax('https://dev-he.herokuapp.com/career/joinus', {
      //     type: 'POST',
      //     data: JSON.stringify(data),
      //     contentType: 'application/json',
      // }).done(function(responseData) {
      //   console.log(responseData);
      //     if (responseData.statusCode === 200) { // email send successfully
      //      //   display('Email Sent', 'Your email was sent successfully.');
      //         document.getElementById("demo").innerHTML = "Application Saved', 'Your application was saved successfully.";
      //         document.getElementById("demo").style.color = "green";

      //     }
      //     else { // error occured while sending email
      //      //   display('Error Occured', 'An error occured while sending the email. Kindly email to admin at syedsalifmoin@gmail.com');
      //         document.getElementById("demo").innerHTML = responseData.message;
      //         document.getElementById("demo").style.color = "red";

      //     }
          
      // }).fail( function(xhr, textStatus, errorThrown){
      //   const errorData = JSON.parse(JSON.stringify(xhr))
      //  console.log("xhr"+xhr);
      //  console.log("textStatus"+textStatus);
        

      //    // display('Error Occured', 'Cannot send email Currently. Check your Internet Connection or try again later.');
          
          
      //     document.getElementById("demo").innerHTML = errorData.responseJSON.message+" Please fill the application correctly.";
      //     document.getElementById("demo").style.color = "red";
      // })  
  //const data = { username: 'example' };

fetch('http://localhost:3000/user', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
})
});
