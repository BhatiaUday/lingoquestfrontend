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
    } else {
      const btnRun = document.getElementById("run-btn");
      btnRun.disabled = true;
    }
  } catch (error) {
    console.error(error);
  }
});

function isFolderNameSafe(folderName) {
  const folderNameRegex = /^[a-zA-Z0-9]{4,}$/;
  return folderNameRegex.test(folderName);
}

function handleTeamName() {
  try {
    const userInput = document.getElementById("teamNameInput").value;

    //Validation To Check Team Name Greater Than 4
    if (isFolderNameSafe(userInput)) {
      localStorage.setItem("TeamName", userInput);
      location.reload();
    } else {
      alert("Please Enter Valid Team Name!, A Team Name Can Only Contain Upper And Lower Case Alphabets, Numbers And No Special Characters. A Team Name Should Be Atleast 4 Characters Long.");
    }
  } catch (error) {
    console.error(error);
  }
}
