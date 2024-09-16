function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;

    // タブコンテンツを全て非表示にする
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 全てのタブボタンから "active" クラスを削除する
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    // 指定されたタブを表示し、対応するボタンに "active" クラスを追加する
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// モーダルウィンドウの初期状態は非表示
window.onload = function() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // 初期状態で非表示
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
