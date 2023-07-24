const toggleBtn = document.querySelector("#dropDownbtn")
const toggleIcon = document.querySelector("#dropDownbtn")
const dropDownMenu = document.querySelector(".dropDownMenu")

function Open() {
    // Toggle the 'hidden' class on the dropdown menu
    dropDownMenu.classList.toggle('hidden')

    const isOpen = dropDownMenu.classList.contains('hidden')
    toggleIcon.classList = isOpen ? 'fa-solid fa-bars  text-[#5D50C6] toggle-btn text-3xl max-sm:text-2xl ' : 'fa-solid fa-xmark text-[#5D50C6] toggle-btn text-3xl max-sm:text-2xl'

};

document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!toggleBtn.contains(targetElement) && !dropDownMenu.contains(targetElement)) {
        // If the clicked element is outside the dropdown, hide it
        dropdownMenu.classList.add('hidden');
    }
});