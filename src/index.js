/**
 * const,let 等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// var val1 = "var変数を上書き";
// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// let val2 = "let変数を変更これはできない"

// const val4 = {
//   name: "糸数",
//   age: 27,
// };
// console.log(val4)
// val4.name = "いとかず りゅうたろう";
// val4.adress = "東京都";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// console.log(val5);
// val5.push("monkey");
// val5.push("wolf");

// const name = "糸数龍太郎"
// const age = "27"

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// const func1 = function (str) {
//   return str;
// };

// const func2 = (str) => str;
// console.log(func1("func1です。"))
// console.log(func2("func2です。"))

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1,2))

// const myProfile = {
//   neme: "糸数",
//   age: "27",
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// const myProfile = ["糸数", "27"];
// console.log(`私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`);

// const [name, age] = myProfile;
// console.log(`私の名前は${name}です。年齢は${age}歳です。`);

// // const sayHello = (name = "糸数") => console.log(`こんにちは${name}さん`);
// sayHello("森沢");

// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1,num2,...arr3] = arr2;
// console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
// console.log(arr6);

const arr7 = [...arr4, ...arr5];
// console.log(arr7);

arr7[0] = 100;
// console.log(arr7);

// const arr8 = arr4;
// arr7[0] = 1000;
// console.log(arr7);
// console.log(arr4);

const nameArr = ["田中", "佐藤", "糸数"];
// for (let i = 0; i < nameArr.length; i ++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index}番目は${name}です。`));

const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNumArr = numArr.map((num) => {
//   if (num % 2 === 1) {
//     return num;
//   }
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "糸数") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const newNameArr2 = nameArr.filter((name) => {
//   if (name === "糸数") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr2);

// const num = "1300";

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
// }
// console.log(checkSum(50,50))

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1も2もtrueになります。");
}

// ||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です。";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 10000;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);
