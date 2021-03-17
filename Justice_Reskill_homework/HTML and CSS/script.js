console.log("test");

function processForm() {
   // event.preventDefault();

    let firstName = document.getElementById("inputFirstName").value;
    let lastName = document.getElementById("inputLastName").value;
    let email = document.getElementById("inputEmail").value;
    let phoneNumber = document.getElementById("inputPhoneNumber").value;
    let age = document.getElementById("inputAge").value;
    let secretAnswer = document.getElementById("inputSecretAnswer").value;
    let message = document.getElementById("inputMessage").value;
    var preferredContactMethod = document.querySelector('input[name="input_radio_group_preferred"]:checked');
    let income = document.getElementById("inputIncome").value;
    let correct = document.querySelector('input[name="inputCorrect"]:checked');

    console.log(firstName); 
    console.log(lastName);
    console.log(email);
    console.log(phoneNumber);
    console.log(age);
    console.log(secretAnswer);
    console.log(message);
    console.log(preferredContactMethod);
    console.log(income);
    console.log(correct);

    document.getElementById("outputFirstName").value = firstName
    document.getElementById("outputLastName").value = lastName;
    document.getElementById("outputEmail").value = email;
    document.getElementById("outputPhoneNumber").value = phoneNumber;
    document.getElementById("outputAge").value = age;
    document.getElementById("outputSecretAnswer").value = secretAnswer;
    document.getElementById("outputMessage").value = message;
    document.getElementsByName("output_radio_email").value = preferredContactMethod;
    document.getElementById("outputIncome").value = income;
    document.getElementById("outputCorrect").value = correct;

}