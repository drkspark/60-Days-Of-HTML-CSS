const amtEle = document.getElementById("total");
const tipEle = document.getElementById("tip");
const btnEle = document.getElementById("btn");
const outEle = document.getElementById("result");

function showTipAmount() {
    let amt = Number(amtEle.value);
    let tip = Number(tipEle.value);

    if (amt === "") {
        alert("Enter Bill amount");
    } else if (tip === "") {
        alert("Enter Tip amount");
    } else {
        var res = (amt * tip) / 100;
        res += amt;
    }

    outEle.innerText = res.toFixed(2);
}

btn.addEventListener("click", showTipAmount);
