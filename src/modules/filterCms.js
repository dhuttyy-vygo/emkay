import gsap from "gsap";

export function filterCollection() {
    const cmsItems = document.querySelectorAll(".ep-cms-items"); // Select all CMS items
    if (!cmsItems.length) return;
    
    const filterOptions = document.querySelectorAll(".filter-option"); // Select all filter options
    const resetButton = document.getElementById("reset-filters"); // Reset button

    const savedFilters = JSON.parse(localStorage.getItem("activeFilters")) || {
        industry: [],
        temperature: [],
        pressure: [],
    };

    // Function to save filters
    function saveFilters(filters) {
        localStorage.setItem("activeFilters", JSON.stringify(filters));
    }

    // Apply saved filters on load
    function applySavedFilters() {
        filterOptions.forEach((option) => {
            const group = option.closest(".filter-group").getAttribute("data-group");
            const value = option.getAttribute("data-value").toLowerCase();
            if (savedFilters[group]?.includes(value)) {
                option.classList.add("selected");
            }
        });
        filterItems();
    }

    // Get active filters
    function getActiveFilters() {
        const filters = { industry: [], temperature: [], pressure: [] };

        filterOptions.forEach((option) => {
            if (option.classList.contains("selected")) {
                const group = option.closest(".filter-group").getAttribute("data-group");
                filters[group].push(option.getAttribute("data-value").toLowerCase());
            }
        });

        return filters;
    }

    // Filter items based on selected filters
    function filterItems() {
        const filters = getActiveFilters();

        cmsItems.forEach((item) => {
            // Aggregate all nested `data-industry` values
            const industries = Array.from(item.querySelectorAll("[data-industry]"))
                .map((child) => child.getAttribute("data-industry").toLowerCase());
            const itemTemperature = item.getAttribute("data-temperature")?.toLowerCase() || "";
            const itemPressure = item.getAttribute("data-pressure")?.toLowerCase() || "";

            // Logic for matching filters
            const matchesIndustry =
                !filters.industry.length || filters.industry.some((filter) => industries.includes(filter));

            const matchesTemperature =
                !filters.temperature.length || filters.temperature.includes(itemTemperature);

            const matchesPressure =
                !filters.pressure.length || filters.pressure.includes(itemPressure);

            // Show/hide items based on filter match
            if (matchesIndustry && matchesTemperature && matchesPressure) {
                gsap.to(item, { opacity: 1, display: "block", duration: 0.3 });
            } else {
                gsap.to(item, { opacity: 0, display: "none", duration: 0.3 });
            }
        });

        saveFilters(filters); // Save current filters to localStorage
    }

    // Toggle "selected" state on click
    filterOptions.forEach((option) => {
        option.addEventListener("click", () => {
            option.classList.toggle("selected");
            filterItems();
        });
    });

    // Reset filters
    resetButton.addEventListener("click", () => {
        filterOptions.forEach((option) => option.classList.remove("selected"));
        localStorage.removeItem("activeFilters");
        filterItems();
    });

    // Apply saved filters on page load
    applySavedFilters();
}