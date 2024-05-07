// Function to create checkbox element
function createCheckbox(text) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var label = document.createElement('label');
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(text));
    return label;
  }
  
  // Function to create form elements
  function createFormElement(type, id, labelText, required) {
    var label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', id);
  
    var input = document.createElement('input');
    input.type = type;
    input.id = id;
    if (required) input.setAttribute('required', '');
  
    var wrapper = document.createElement('div');
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    return wrapper;
  }
  
  // Create checkboxes
  var checkbox1 = createCheckbox("I had or know someone who had pneumococcal disease");
  var checkbox2 = createCheckbox("I have or know someone who had pneumococcal vaccine");
  
  // Create form elements
  var firstName = createFormElement('text', 'first-name', 'First Name:', true);
  var lastName = createFormElement('text', 'last-name', 'Last Name:', true);
  var email = createFormElement('email', 'email', 'Email:', true);
  var phone = createFormElement('tel', 'phone', 'Phone Number:', true);
  
  // Create submit button
  var submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.style.backgroundColor = 'purple';
  
  // Create form
  var form = document.createElement('form');
  form.appendChild(firstName);
  form.appendChild(lastName);
  form.appendChild(email);
  form.appendChild(phone);
  form.appendChild(submitButton); // Move submit button inside the form
  
  // Find the parent div where we want to replace the content
  var parentDiv = document.querySelector('.form-block');
  
  // Find the div containing the elements to replace
  var elementsToReplace = parentDiv.querySelectorAll('div:nth-child(3), div:nth-child(4), div:nth-child(5)');
  
  // Clear the content of the divs to be replaced
  elementsToReplace.forEach(element => {
    element.innerHTML = '';
  });
  
  // Append form and checkboxes to the parent div
  elementsToReplace[0].appendChild(checkbox1);
  elementsToReplace[1].appendChild(checkbox2);
  elementsToReplace[2].appendChild(form);
  
  // Function to show popup
  function showPopup(message) {
    alert(message);
  }
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    var formData = {
        'First Name': document.getElementById('first-name').value,
        'Last Name': document.getElementById('last-name').value,
        'Email': document.getElementById('email').value,
        'Phone Number': document.getElementById('phone').value,
        'Had disease': checkbox1.checked ? 'Yes' : 'No',
        'Had vaccine': checkbox2.checked ? 'Yes' : 'No'
      };
  
    // Assuming the API endpoint is 'https://admin.hlx.page/form/Uthmannewpage/know-practice/main/story-info.json'
    fetch('https://admin.hlx.page/form/Uthmannewpage/know-practice/main/story-info.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: formData })
    })
    .then(response => {
      if (response.ok) {
        showPopup('Form submitted successfully!');
      } else {
        showPopup('Form submission failed.');
      }
    })
    .catch(error => {
      showPopup('An error occurred while submitting the form.');
      console.error('Error:', error);
    });
  }
  
  // Add submit event listener to the form
  form.addEventListener('submit', handleSubmit);
  