function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    if (amountValue > 0) {

    }
    else {
        alert("তুই কি গাধা নাকি সংখ্যা ঠিকমত দে");
    }
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotal(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const preTotal = parseFloat(TotalText);
    totalElement.innerText = amount + preTotal;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(balanceTotalText);
    return preBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const preBalanceTotal = parseFloat(balanceTotalText);
    preBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = preBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = preBalanceTotal - amount;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotal('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    // else {
    //     alert("তুই কি গাধা নাকি বে নেগেটিভ কেন দিছস পজিটিভ নাবার দে")
    // }

});

// handale withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotal('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        alert('তর বাপের ওতো টাকা নাই রে পাগলা!!');
    }
}); 