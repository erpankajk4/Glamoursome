document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".ham-menu");
  const dropdowns = document.querySelectorAll(".hamMenuDropdown");
  const offScreenMenu = document.querySelector(".off-screen-menu");

  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event from bubbling up to parent dropdowns
      const parent = e.target.closest("li");
      const dropdownContainer = parent.querySelector(".hamDropdownContainer");

      // Toggle the current dropdown
      dropdownContainer.classList.toggle("open-dropdown");

      // If the current dropdown is open, ensure all ancestor dropdowns remain open
      if (dropdownContainer.classList.contains("open-dropdown")) {
        let ancestor = parent.parentElement.closest("li");
        while (ancestor) {
          ancestor.querySelector(".hamDropdownContainer").classList.add("open-dropdown");
          ancestor = ancestor.parentElement.closest("li");
        }
      } else {
        // Close all nested dropdowns
        parent.querySelectorAll(".hamDropdownContainer").forEach(container => {
          container.classList.remove("open-dropdown");
        });
      }
    });
  });
});