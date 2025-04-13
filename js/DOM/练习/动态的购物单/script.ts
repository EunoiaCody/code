(() => {
  const ul = document.querySelector('ul') as HTMLUListElement;
  const inpt = document.querySelector('input') as HTMLInputElement;
  const btn = document.querySelector('button') as HTMLButtonElement;

  btn.addEventListener('click', btnResponse)

  function btnResponse() {
    const inptValue: string = inpt.value;
    inpt.value = '';

    const listItem = document.createElement('li') as HTMLLIElement;
    const listText = document.createElement('span') as HTMLSpanElement;
    const listBtn = document.createElement('button') as HTMLButtonElement;

    listItem.appendChild(listText);
    listText.textContent = inptValue;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    ul.appendChild(listItem);

    listBtn.addEventListener('click', () => {
      ul.removeChild(listItem);
    });

    inpt.focus();
  };
})();