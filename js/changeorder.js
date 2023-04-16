let isSorted = false;
const originalOrder = [];

function sortGrid(){
    const grid = document.querySelector(".grid");
    const items = Array.from(grid.children);

    if (!isSorted){
        if (originalOrder.length === 0){
            items.forEach((item, index) => {
                originalOrder[index] = item;
            });
        }

        items.sort((a, b) => {
            const aName = a.querySelector("h2").innerText.toLowerCase();
            const bName = b.querySelector("h2").innerText.toLowerCase();

            if (aName < bName) {
                return -1;
            }
            if (aName > bName) {
                return 1;
            }
            return 0;
        });

        isSorted = true;
        document.getElementById("sort-button").innerText = "Back to Original Order";
    } else {
        items.sort((a, b) => {
            return originalOrder.indexOf(a) - originalOrder.indexOf(b);
        });

        isSorted = false;
        document.getElementById("sort-button").innerText = "Sort Names Alphabetically";
    }

    items.forEach(item => grid.appendChild(item));

}