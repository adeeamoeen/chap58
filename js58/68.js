 //que1
 var mainContent = document.getElementById("main-content");
    
 var childElements = mainContent.children;
 console.log(childElements);


 var renderElements = document.getElementsByClassName("render");
 for (var i = 0; i < renderElements.length; i++) {
   console.log(renderElements[i].innerHTML);
 }

 var firstNameInput = document.getElementById("first-name");
 firstNameInput.value = "Adeea";

 var lastNameInput = document.getElementById("last-name");
 lastNameInput.value = "Moeen";

 var emailInput = document.getElementById("email");
 emailInput.value = "alexbank@example.com";

//que2

  var formContent = document.getElementById("form-content");
  var formContentType = formContent.nodeType;
  console.log("Node type of element with id 'form-content': " + formContentType);

  
  var lastNameElement = document.getElementById("lastName");
  var lastNameNodeType = lastNameElement.nodeType;
  var lastNameChildNode = lastNameElement.childNodes[0].nodeType;
  console.log("Node type of element with id 'lastName': " + lastNameNodeType);
  console.log("Child node type of element with id 'lastName': " + lastNameChildNode);

  
  lastNameElement.childNodes[0].nodeValue = "Last Name: Moeen";

  var mainContent = document.getElementById("main-content");
  var firstChild = mainContent.firstChild;
  var lastChild = mainContent.lastChild;
  console.log("First child of element with id 'main-content':", firstChild);
  console.log("Last child of element with id 'main-content':", lastChild);

  var lastNameSiblingNext = lastNameElement.nextSibling;
  var lastNameSiblingPrev = lastNameElement.previousSibling;
  console.log("Next sibling of element with id 'lastName':", lastNameSiblingNext);
  console.log("Previous sibling of element with id 'lastName':", lastNameSiblingPrev);

  
  var emailElement = document.getElementById("email");
  var emailParentNode = emailElement.parentNode;
  var emailNodeType = emailElement.nodeType;
  console.log("Parent node of element with id 'email':", emailParentNode);
  console.log("Node type of element with id 'email':", emailNodeType);