window.onload = function() {
    const switchInterval = 10000; // 20秒（20000ミリ秒）

    function switchPage() {
        // 現在のURLのパスを取得
        const currentPath = window.location.pathname;

        // 次のページのURLを決定
        let nextPage;
        if (currentPath.includes('page1.html')) {
            nextPage = 'index_nemoto.html'; // 現在がpage1.htmlならpage2.htmlに遷移
        } else {
            nextPage = 'index_akai.html'; // それ以外ならpage1.htmlに遷移
        }

        // ページを切り替え
        window.location.href = nextPage;
    }

    // ページ切り替えのタイマー設定
    setInterval(switchPage, switchInterval);
};

