document.addEventListener("DOMContentLoaded", function() {
  const dragItems = document.querySelectorAll(".drag-item");
  const dropContainer = document.querySelector(".drop-container");
  const successMessage = document.createElement("p");
  successMessage.className = "success-message";

  dragItems.forEach(function(dragItem) {
    dragItem.addEventListener("dragstart", function(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
      e.target.classList.add("dragging");
    });

    dragItem.addEventListener("dragend", function(e) {
      e.target.classList.remove("dragging");
    });
  });

  dropContainer.addEventListener("dragover", function(e) {
    e.preventDefault();
    this.classList.add("dragover");
  });

  dropContainer.addEventListener("dragleave", function(e) {
    this.classList.remove("dragover");
  });

  dropContainer.addEventListener("drop", function(e) {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData("text/plain");
    const draggedItem = document.getElementById(draggedItemId);
    this.appendChild(draggedItem);
    this.classList.remove("dragover");
    this.appendChild(successMessage);
    // successMessage.innerHTML = "Item dropped successfully!";
   
    dragItems.innerHTML = ""
  });

  const resetButton = document.getElementById("resetBtn");
  resetButton.addEventListener("click", function() {
    dropContainer.innerHTML = "";
    dropContainer.appendChild(successMessage);
    successMessage.textContent = "Data Reset!";
    document.getElementById("container1").innerHTML = `
      <div class="drag-item" draggable="true">Item 1</div>
      <div class="drag-item" draggable="true">Item 2</div>
      <div class="drag-item" draggable="true">Item 3</div>
      <div class="drag-item" draggable="true">Item 4</div>
    `;
    location.reload()
  });
});
