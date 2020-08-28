function validate() {
  //Define variables for input fields
  let fName = document.JSForm.fName.value;
  let lName = document.JSForm.lName.value;
  let contact = document.JSForm.contact.value;
  let email = document.JSForm.email.value;
  let dob = document.JSForm.dob.value;
  let state = document.JSForm.state.value;
  let country = document.JSForm.country.value;

  //Define variables for date conditions
  let currentDate = new Date();
  let start = new Date(2020, 7, 29, 00, 00);
  let end = new Date(2020, 7, 31, 11, 59, 59);

  //Define conditions for any empty field
  if (fName == "" && lName == "" && contact == "" && email == "" && dob == "" && state == "" && country == "") {
    alert('Please fill all empty fields.');
    return false; //checks if all input fields are empty
  }
  else if (fName == null || fName == "" || fName == " ") {
    alert('Enter your first name');
    return false; //checks if first name field is empty
  }
  else if (lName == null || lName == "" || lName == " ") {
    alert('Enter your last name');
    return false; //checks if last name field is empty
  }
  else if (contact == null || contact == "" || contact == " ") {
    alert('Enter your phone number');
    return false; //checks if contact name field is empty
  }
  else if (email == null || email == "" || email == " ") {
    alert('Enter a valid email address');
    return false; //checks if email field is empty
  }
  else if (dob == null || dob == "" || dob == " ") {
    alert('Enter your date of birth');
    return false; //checks if date of birth field is empty
  }
  else if (state == null || state == "" || state == " ") {
    alert('Enter your state of origin');
    return false; //checks if state of origin field is empty
  }
  else if (country == null || country == "" || country == " ") {
    alert('Choose your country');
    return false; //checks if country field is empty
  }


    //Define conditions for registration period
    if (currentDate >= start && currentDate <= end) {
      alert('Registration successful.');
      return true;
    }
    else {
      alert('Registration has ended');
      return false;
    }
}
