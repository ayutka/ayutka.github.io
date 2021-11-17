/** @format */

//
const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  //clickがくるまでaddが待って、来たらfunctionに中身が入る
  const formula = document.getElementById("formula").value; //formulaていうIDの中にある要素のformulaをゲットした
  const encoded_formula = encodeURIComponent(formula); //'+'や'='など特殊文字もencodeする
  console.log(encoded_formula);
  fetch(`http://0.0.0.0:8080/?formula=${encoded_formula}`) //url先にある文字列を受け取ってくる関数
    .then((response) => response.json()) //受け取った文字列をjsonに変換
    .then((data) => document.getElementById("ans").innerHTML =`${data.ans}`); //上の内容がdataに入っている dataの辞書(型配列)ansにある要素を出力
});
