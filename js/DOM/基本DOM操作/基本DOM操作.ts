(() => {
  // 创建并放置新的节点
  const link = document.querySelector('a') as HTMLAnchorElement; //document.querySelector允许使用CSS选择器来选择元素

  link.textContent = 'Mozilla Developer Network'; // 赋予文本
  link.href = 'https://developer.mozilla.org'; // 赋予属性值

  const sect = document.querySelector('section') as HTMLTableSectionElement; // 选择到section元素
  const para = document.createElement('p') as HTMLParagraphElement; // 创建一个新元素p
  para.textContent = "We hope you enjoyed the ride.";
  sect.appendChild(para); // 在section中添加子元素p

  const text = document.createTextNode( // 创建一个文本节点
    " — the premier source for web development knowledge.",
  );
  const linkPara = document.querySelector('p') as HTMLParagraphElement;
  linkPara.appendChild(text);


  // 移动和删除元素
  sect.appendChild(linkPara); // 移动到底部
  sect.removeChild(linkPara); // 移除sect内部的linkPara节点
  linkPara.remove(); // 删除一个仅基于自身引用的节点



  // 操作样式
  // para.style.color = 'white';
  // para.style.backgroundColor = 'black';
  // para.style.padding = '10px';
  // para.style.width = "250px";
  // para.style.textAlign = "center";
  // 已引用的直接使用方法

  // 操作类名(class)来应用样式
  para.setAttribute('class', 'highlight');
})();