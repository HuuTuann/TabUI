const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

function moveLine(tabActive) {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
}

moveLine(tabActive, panes[0]);

function addActive(tabActive, pane) {
    $(".tab-item.active").classList.remove("active");
    tabActive.classList.add("active");

    $(".tab-pane.active").classList.remove("active");
    pane.classList.add("active");

    moveLine(tabActive);
}

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.addEventListener("click", function () {
        addActive(this, pane);
    });
});
