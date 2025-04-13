// 将代码封装在一个模块或立即执行函数表达式（IIFE）中，避免污染全局作用域。
(() => {
  // 获取 HTML 元素并添加类型注解
  const customName = document.getElementById('customname') as HTMLInputElement;
  const randomize = document.querySelector('.randomize') as HTMLButtonElement;
  const story = document.querySelector('.story') as HTMLDivElement;

  // 定义一个函数，随机从数组中选择一个值
  function randomValueFromArray(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }

  // 定义故事模板和插入内容数组
  let storyText: string = '今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 140 公斤的胖子，天气又辣么热。';
  let insertX: string[] = ['怪兽威利', '大老爹', '圣诞老人'];
  let insertY: string[] = ['肯德基', '迪士尼乐园', '白宫'];
  let insertZ: string[] = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];

  // 添加点击事件监听器
  randomize.addEventListener('click', result);

  // 定义结果生成函数
  function result(): void {
    let newStory: string = storyText;
    let xItem: string = randomValueFromArray(insertX);
    let yItem: string = randomValueFromArray(insertY);
    let zItem: string = randomValueFromArray(insertZ);

    // 替换故事中的占位符
    newStory = newStory.replace(':inserta:', xItem);
    newStory = newStory.replace(':inserta:', xItem); // 第二次替换
    newStory = newStory.replace(':insertb:', yItem);
    newStory = newStory.replace(':insertc:', zItem);

    // 如果用户输入了自定义名字，则替换默认名字
    if (customName.value !== '') {
      let name: string = customName.value;
      newStory = newStory.replace('李雷', name);
    }

    // 如果选择了美式单位，则转换温度和体重
    if ((document.getElementById("american") as HTMLInputElement).checked) {
      let weight: number = Math.round(140 * 2.20462); // 公斤转磅
      let temperature: number = Math.round(34 * 9 / 5 + 32); // 摄氏度转华氏度

      newStory = newStory.replace('34 摄氏度', `${temperature} 华氏度`);
      newStory = newStory.replace('140 公斤', `${weight} 磅`);
    }

    // 如果选择了美式单位，则转换温度和体重
    if ((document.getElementById("american") as HTMLInputElement).checked) {
      let weight: number = Math.round(140 * 2.20462); // 公斤转磅
      let temperature: number = Math.round(34 * 9 / 5 + 32); // 摄氏度转华氏度

      newStory = newStory.replace('34 摄氏度', `${temperature} 华氏度`);
      newStory = newStory.replace('140 公斤', `${weight} 磅`);
    }

    // 显示生成的故事
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }

})();