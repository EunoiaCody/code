(function () {
    var ul = document.querySelector('ul');
    var inpt = document.querySelector('input');
    var btn = document.querySelector('button');
    btn.addEventListener('click', btnResponse);
    function btnResponse() {
        var inptValue = inpt.value;
        inpt.value = '';
        var listItem = document.createElement('li');
        var listText = document.createElement('span');
        var listBtn = document.createElement('button');
        listItem.appendChild(listText);
        listText.textContent = inptValue;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        ul.appendChild(listItem);
        listBtn.addEventListener('click', function () {
            ul.removeChild(listItem);
        });
        inpt.focus();
    }
    ;
})();
