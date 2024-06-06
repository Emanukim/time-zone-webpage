function toggleDropdown() {
    const dropdown = document.getElementById("countryDropdown");
    dropdown.classList.toggle("show");
}

function selectCountry(country, timezone) {
    const selectedCountryElement = document.getElementById("selected-country");
    selectedCountryElement.textContent = "Selected Country: " + country;

    const dropdown = document.getElementById("countryDropdown");
    dropdown.classList.remove("show");

    updateTime(timezone);
}

function updateTime(timezone) {
    const currentTimeElement = document.getElementById("current-time");
    const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
    currentTimeElement.textContent = "Current Time: " + currentTime;
}

document.addEventListener("DOMContentLoaded", function() {
    selectCountry('Kenya', 'Africa/Nairobi');
    

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});
