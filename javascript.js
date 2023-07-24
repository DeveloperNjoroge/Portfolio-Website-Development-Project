document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;


  if (name.trim() === "" || email.trim() === "" || message.trim() ==="" ) {
    alert("Please fill in all fields data");
    return;
  }

  document.getElementById("successMessage").style.display = "block";

  document.getElementById("myForm").reset();
});

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}
