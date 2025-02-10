document.addEventListener("DOMContentLoaded", function () {
    //drop down menu
    const pDropList = document.querySelectorAll(".menuParent");

    pDropList.forEach((pDrop) => {
        const dropDown = pDrop.querySelector(".dropDown");
        const svgIcon = pDrop.querySelector("img");

        if (!dropDown || !svgIcon) return;

        pDrop.addEventListener("click", function () {
            if (dropDown.classList.contains("hidden")) {
                dropDown.classList.remove("hidden");
                dropDown.classList.add("flex");
                dropDown.style.height = "0px";
                setTimeout(() => {
                    dropDown.style.height = dropDown.scrollHeight + "px";
                }, 10);
                svgIcon.classList.add("rotate-180");
            } else {
                hideDropdown();
            }
        });

        function hideDropdown() {
            dropDown.style.height = "0px";
            setTimeout(() => {
                dropDown.classList.add("hidden");
                dropDown.classList.remove("flex");
            }, 300);
            svgIcon.classList.remove("rotate-180");
        }

        document.addEventListener("click", function (event) {
            if (!pDrop.contains(event.target) && !dropDown.contains(event.target)) {
                hideDropdown();
            }
        });
    });

    const tableMenus = document.querySelectorAll(".tableMenu .menuLabel");
    const tableMenuContent = document.querySelectorAll(".tableMenu .dropDown");

    tableMenus?.forEach((tableMenu, index) => {
        tableMenu.addEventListener("click", () => {
            if(tableMenuContent[index].classList.contains("max-h-92")) {
                tableMenuContent[index].classList.remove("max-h-92");
                tableMenuContent[index].classList.remove("sm:py-4");
                tableMenuContent[index].classList.remove("p-1");
                tableMenuContent[index].classList.add("p-0");
                tableMenuContent[index].classList.add("max-h-0");
            } else {
                tableMenuContent[index].classList.remove("max-h-0");
                tableMenuContent[index].classList.add("max-h-92");
                tableMenuContent[index].classList.add("sm:py-4");
                tableMenuContent[index].classList.add("p-1");
            }
        })
    });

    //Medium Device Menu
    const bar = document.querySelector(".bar");
    const mainMenu = document.querySelector(".mainMenu");
    const overlay = document.querySelector(".overlay");
    const xmark = document.querySelector(".xmark");

    bar.addEventListener("click", () => {
        mainMenu.classList.remove("w-0");
        mainMenu.classList.add("w-80");
        overlay.classList.remove("invisible");
        overlay.classList.add("visible");
        overlay.classList.remove("opacity-0");
        overlay.classList.add("opacity-25");
        overlay.classList.remove("-z-10");
        overlay.classList.add("z-10");
    });
    overlay.addEventListener("click", () => {
        mainMenu.classList.remove("w-80");
        mainMenu.classList.add("w-0");
        overlay.classList.remove("visible");
        overlay.classList.add("invisible");
        overlay.classList.remove("opacity-25");
        overlay.classList.add("opacity-0");
        overlay.classList.remove("z-10");
        overlay.classList.add("-z-10");
    });
    xmark.addEventListener("click", () => {
        mainMenu.classList.remove("w-80");
        mainMenu.classList.add("w-0");
        overlay.classList.remove("visible");
        overlay.classList.add("invisible");
        overlay.classList.remove("opacity-25");
        overlay.classList.add("opacity-0");
        overlay.classList.remove("z-10");
        overlay.classList.add("-z-10");
    });

    // Chart
    const ctx = document.getElementById("stockChart").getContext("2d");
    // Sample Data (Replace with real data)
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"]; // X-Axis labels
    const gruposuraData = [
        40500, 40000, 35320, 36926, 37090, 34377, 32730, 30307, 32814, 31255, 33031, 35321,
    ];
    const pfgrupsuraData = [
        27314, 26208, 25682, 24850, 26366, 25309, 23212, 22304, 24346, 25752, 27933, 23321,
    ];

    const myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "GRUPOSURA",
                    data: gruposuraData,
                    borderColor: "#FFFFFF",
                    backgroundColor: "#FFFFFF",
                    borderWidth: 2,
                    pointStyle: false,
                    tension: 0.4, // Smooth curve
                },
                {
                    label: "PFGRUPSURA",
                    data: pfgrupsuraData,
                    borderColor: "#000000",
                    backgroundColor: "#000000",
                    borderWidth: 2,
                    pointStyle: false,
                    tension: 0.4, // Smooth curve
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Months",
                        color: "#FFF",
                        font: { size: 14, weight: "bold" }
                    },
                    ticks: {
                        color: "#FFF", // Change month labels color (golden)
                        font: { size: 12, weight: "bold" }
                    },
                    grid: { color: "rgba(200, 200, 200, 0.3)" }
                },
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: "Price (COP)",
                        color: "#FFF",
                        font: { size: 14, weight: "bold" }
                    },
                    ticks: {
                        color: "#FFF", // Change month labels color (golden)
                        font: { size: 12, weight: "bold" }
                    },
                    grid: { color: "rgba(200, 200, 200, 0.3)" }
                }
            },
            plugins: {
                legend: { display: true, position: "bottom", align: "start", labels: { color: "#FFF" } },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.raw.toLocaleString();
                        }
                    }
                }
            }
        }
    });
});
