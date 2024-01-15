var click = document.getElementById("katt");
var table = document.getElementById("adatok")
click.addEventListener("click", () => {
    if (table.style.display === "table") {
        $(table).fadeOut("slow", function() {
            $(this).removeClass('show');
        });
    } else {
        $(table).fadeIn("slow", function() {
            $(this).addClass('show');
        });
    }
});