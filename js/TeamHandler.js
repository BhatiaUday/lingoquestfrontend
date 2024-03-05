document.addEventListener("DOMContentLoaded", function () {
  try {
    // Check if the item exists in local storage
    const storedItem = localStorage.getItem("TeamName");

    if (storedItem) {
      // Modify properties of the input and button based on their IDs
      const inputElement = document.getElementById("teamNameInput");
      const buttonElement = document.getElementById("btnSubmitTeam");

      inputElement.value = storedItem;
      inputElement.disabled = true;
      buttonElement.disabled = true;
    }
  } catch (error) {
    console.error(error);
  }
});

function handleTeamName() {
  try {
    const userInput = document.getElementById("teamNameInput").value;

    //Validation To Check Team Name Greater Than 4
    if (userInput.length > 4) {
      localStorage.setItem("TeamName", userInput);
      location.reload()
    } else {
      alert("Please Enter Valid Team Name! ");
    }
  } catch (error) {
    console.error(error)
  }
}
