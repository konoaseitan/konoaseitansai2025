function openTab(event, tabId) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';

    const yOffset = -100;
    const yPosition = selectedTab.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: 'smooth' });
}


window.onload = function() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
    window.scrollTo(0, 0);
};

document.querySelectorAll('.gallery-item2 img').forEach(img => {
    img.addEventListener('click', function () {
        var modal = document.getElementById("imageModal");
        var modalImg = document.getElementById("modalImg");
        var captionText = document.getElementById("caption");

        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.getAttribute("data-comment");
    });
});

document.getElementById("imageModal").addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tab-button').click();
});
