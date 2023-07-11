function toggleOtherInput() {
    const professionSelect = document.getElementById("profession");
    const otherInputContainer = document.getElementById("otherInputContainer");

    if (professionSelect.value === "other") {
      otherInputContainer.style.display = "block";
    } else {
      otherInputContainer.style.display = "none";
    }
  }