let click = document.getElementById("katt");

click.addEventListener("click", () => {
    let table = document.getElementById("adatok");

    if (table.style.display === "table") {
        table.style.display = "none"
    } else {
        table.style.display = "table"
    }
})