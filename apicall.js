/** @format */

//最初の計算式
const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  //clickがくるまでaddが待って、来たらfunctionに中身が入る
  const formula = document.getElementById("formula").value; //formulaていうIDの中にある要素のformulaをゲットした
  const encoded_formula = encodeURIComponent(formula); //'+'や'='など特殊文字もencodeする
  fetch(`http://0.0.0.0:8080/?formula=${encoded_formula}`) //url先にある文字列を受け取ってくる関数
    .then((response) => response.json()) //受け取った文字列をjsonに変換
    .then((data) => (document.getElementById("ans").innerHTML = `${data.ans}`)); //上の内容がdataに入っている dataの辞書(型配列)ansにある要素を出力
});

//ボタンを追加
const buttonUL = document.querySelector(".buttonUL");
const numberButton = buttonUL.querySelectorAll("button");
for (let i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", function (event) {
    const formula = document.getElementById("formula").value;
    const number = event.target.value;
    if (number === "=") {
    } else if (number === "del") {
      const newFormula = formula.slice(0, -1); //末尾を削除
      document.getElementById("formula").value = newFormula; //newFormulaの値をweb上の電卓の計算結果として出力
    } else {
      const newFormula = `${formula}${number}`; //formulaの後ろにボタンからの入力追加
      document.getElementById("formula").value = newFormula;
    }
  });
}
