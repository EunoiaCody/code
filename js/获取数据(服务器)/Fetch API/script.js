(function () {
    var verseChoose = document.querySelector('select');
    var poemDisplay = document.querySelector("pre");
    verseChoose.addEventListener('change', function () {
        var verse = verseChoose.value;
        updateDisplay(verse);
    });
    function updateDisplay(verse) {
        verse = verse.replace(' ', '').toLowerCase();
        var url = "".concat(verse, ".txt");
        // 调用 `fetch()`，传入 URL。
        fetch(url)
            // fetch() 返回一个 promise。当我们从服务器收到响应时，
            // 会使用该响应调用 promise 的 `then()` 处理器。
            .then(function (response) {
            // 如果请求没有成功，我们的处理器会抛出错误。
            if (!response.ok) {
                throw new Error("HTTP \u9519\u8BEF\uFF1A".concat(response.status));
            }
            // 否则（如果请求成功），我们的处理器通过调用
            // response.text() 以获取文本形式的响应，
            // 并立即返回 `response.text()` 返回的 promise。
            return response.text();
        })
            // 若成功调用 response.text()，会使用返回的文本来调用 `then()` 处理器，
            // 然后我们将其拷贝到 `poemDisplay` 框中。
            .then(function (text) { return (poemDisplay.textContent = text); })
            // 捕获可能出现的任何错误，
            // 并在 `poemDisplay` 框中显示一条消息。
            .catch(function (error) { return (poemDisplay.textContent = "\u83B7\u53D6\u8BD7\u6B4C\u5931\u8D25\uFF1A".concat(error)); });
    }
    ;
    updateDisplay('Verse 1');
    verseChoose.value = 'Verse 1';
});
