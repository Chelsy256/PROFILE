document.addEventListener("DOMContentLoaded"),
( => {
    const discoverBtn = getElementById("discover");
    discoverBtn.addEventListener("Click",()=>{window.location.href = "services.html";});
});

// Click on logo shows a welcome alert
    const logo = document.getElementById("logo");
    if (logo) {
        logo.addEventListener("click", function (e) {
            e.preventDefault(); // stop image from opening
            alert("Welcome to Smart Nutrition UG!");
        });
    }
