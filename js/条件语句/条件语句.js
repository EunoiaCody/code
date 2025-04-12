// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

//   if (choice === "sunny") {
//     para.textContent = "阳光明媚。穿上短裤吧！去海滩，或公园，吃个冰淇淋。";
//   } else if (choice === "rainy") {
//     para.textContent = "外面下着雨；带上雨衣和雨伞，不要在外面呆太久。";
//   } else if (choice === "snowing") {
//     para.textContent =
//       "大雪纷飞，天寒地冻！最好呆在家里喝杯热巧克力，或者去堆个雪人。";
//   } else if (choice === "overcast") {
//     para.textContent =
//       "虽然没有下雨，但天空灰蒙蒙的，随时都可能变天，所以要带一件雨衣以防万一。";
//   } else {
//     para.textContent = "";
//   }
// }

// let cheese = "Cheddar";

// if (cheese) {
//   console.log("耶！这里有一些制作奶酪吐司的奶酪。");
// } else {
//   console.log("今天你的吐司上没有奶酪了。");
// }

// let shoppingDone = false;
// let childsAllowance;

// // 不必直接明确指定 'shoppingDone === true'
// if (shoppingDone) {
//   childsAllowance = 10;
// } else {
//   childsAllowance = 5;
// }

// if (choice === "sunny") {
//     if (temperature < 86) {
//       para.textContent = `外面现在是 ${temperature} 华氏度——风和日丽。让我们去海滩或公园，吃个冰激凌。`;
//     } else if (temperature >= 86) {
//       para.textContent = `外面现在是 ${temperature} 华氏度——很热！如果你想出去，一定要涂抹一些防晒霜。`;
//     }
// }
  
// if (choice === "sunny" && temperature < 86) {
//     para.textContent = `外面现在是 ${temperature} 华氏度——风和日丽。让我们去海滩或公园，吃个冰激凌。`;
// } else if (choice === "sunny" && temperature >= 86) {
//     para.textContent = `外面现在是 ${temperature} 华氏度——很热！如果你想出去，一定要涂抹一些防晒霜。`;
// }

// if (iceCreamVanOutside || houseStatus === "on fire") {
//     console.log("你应该赶紧离开这间房子。");
// } else {
//     console.log("或许你应该呆在这里。");
// }

// if (!(iceCreamVanOutside || houseStatus === "on fire")) {
//     console.log("或许你应该呆在这里。");
// } else {
//     console.log("你应该赶紧离开这间房子。");
// }


// ---
// 使用 switch 重写
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent = "阳光明媚。穿上短裤吧！去海滩，或公园，吃个冰淇淋。";
      break;
    case "rainy":
      para.textContent = "外面下着雨；带上雨衣和雨伞，不要在外面呆太久。";
      break;
    case "snowing":
      para.textContent =
        "大雪纷飞，天寒地冻！最好呆在家里喝杯热巧克力，或者去堆个雪人。";
      break;
    case "overcast":
      para.textContent =
        "虽然没有下雨，但天空灰蒙蒙的，随时都可能变天，所以要带一件雨衣以防万一。";
      break;
    default:
      para.textContent = "";
  }
}