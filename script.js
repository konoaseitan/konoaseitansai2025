function openTab(event, tabId) {
    // タブボタンのアクティブ状態を更新
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // タブコンテンツを非表示にする
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    // 指定されたタブコンテンツを表示
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';

    // タブコンテンツの位置にスクロール (調整付き)
    const yOffset = -100; // 調整したいスクロール位置のオフセット値 (例: -100px)
    const yPosition = selectedTab.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: 'smooth' });
}


// モーダルウィンドウの初期状態は非表示
window.onload = function() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // 初期状態で非表示
    window.scrollTo(0, 0);
};

// 画像をクリックしてモーダルウィンドウを開く処理
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function () {
        var modal = document.getElementById("imageModal");
        var modalImg = document.getElementById("modalImg");
        var captionText = document.getElementById("caption");

        modal.style.display = "flex"; // クリック時にモーダルを表示
        modalImg.src = this.src; // クリックされた画像をモーダルに表示
        captionText.innerHTML = this.getAttribute("data-comment"); // コメントを表示
    });
});


// モーダルの背景をクリックしたときにモーダルを閉じる処理
document.getElementById("imageModal").addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = "none"; // モーダルを非表示
    }
});

// ページを開いたときにタブ1を表示
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tab-button').click();
});
