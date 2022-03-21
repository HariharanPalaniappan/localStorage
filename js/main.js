// global variabla
var tbody = document.getElementById("tBody");
var tbdy = document.getElementById("productTableBody");
var nam = $('.emp-name');
var lastElement = (((tbody.lastElementChild).lastElementChild).firstElementChild);
var lastEmpValue = ((((tbody.lastElementChild).firstElementChild).firstElementChild).value);
var ele = $('#empName');
var dbArray;
var dbObject = {};
// initial conditions
if (localStorage.getItem("ProductList") === null) {
    dbObject = [{
        name: "Hello",
        value: "world"
    }]
    dbArray = JSON.stringify(dbObject);
    localStorage.setItem("ProductList", dbArray);
    dbArray = JSON.parse(localStorage.getItem("ProductList"));
    getProduct()
    $(".productTable").css("display", "none");
} else {
    dbArray = JSON.parse(localStorage.getItem("ProductList"));
    getProduct()
    $(".productTable").css("display", "none");
}
ele.select();
//functions starts
function newLine() {
    var tr = document.createElement("tr");
    tbody.appendChild(tr);

    var td1 = document.createElement("td");
    tr.appendChild(td1);
    var input1 = document.createElement("input");
    td1.appendChild(input1);
    input1.setAttribute("class", "emp-no");
    input1.setAttribute("id", "empNo");
    input1.setAttribute("value", tbody.childElementCount);
    input1.setAttribute("readonly", "true");

    var td2 = document.createElement("td");
    tr.appendChild(td2);
    var input2 = document.createElement("input");
    td2.appendChild(input2);
    input2.setAttribute("class", "emp-name");
    input2.setAttribute("id", "empName");

    var td3 = document.createElement("td");
    tr.appendChild(td3);
    var input3 = document.createElement("input");
    td3.appendChild(input3);
    input3.setAttribute("class", "emp-num");
    input3.setAttribute("id", "empNum");
    lastElement = (((tbody.lastElementChild).lastElementChild).firstElementChild);
    lastEmpValue = ((((tbody.lastElementChild).firstElementChild).firstElementChild).value)
}

function productAdd() {
    var proName = $('#addName');
    var proValue = $('#addValue');
    if (proName.val().trim() == "") {
        alert("Must enter the Product Name");
        proName.select();
    } else if (proValue.val().trim() == "") {
        alert("Must enter the Product Value");
        proValue.select();
    } else {
        proName = proName.val().trim();
        proValue = proValue.val().trim();
        addProduct(proName, proValue);
        $('#addName').val("");
        $('#addValue').val("");
        $('.pop-up').css("display", "none");
        getProduct()
    }
}

function onpageLoad() {
    testObject = dbArray;
    console.log(testObject);

}

function addProduct(a, b) {
    dbObject = {
        name: a,
        value: b
    }
    dbArray.push(dbObject);
    var tempArray = JSON.stringify(dbArray);
    localStorage.setItem("ProductList", tempArray);
    onpageLoad();
}

function getProduct() {
    $(".productTable").css("display", "block");
    tbdy.innerHTML = "";
    for (var i = 0; i < dbArray.length; i++) {
        var tr = document.createElement("tr");
        tbdy.appendChild(tr);

        var td2 = document.createElement("td");
        tr.appendChild(td2);
        var input2 = document.createElement("input");
        td2.appendChild(input2);
        input2.setAttribute("class", "pro-name");
        input2.setAttribute("id", "proName");
        input2.setAttribute("value", dbArray[i].name);

        var td3 = document.createElement("td");
        tr.appendChild(td3);
        var input3 = document.createElement("input");
        td3.appendChild(input3);
        input3.setAttribute("class", "pro-val");
        input3.setAttribute("id", "proVal");
        input3.setAttribute("value", dbArray[i].value);
    }
}
//functions end

// event start
$(document).on('keypress', '#empName', function(key) {
    var snoValue = ((((this.parentElement).parentElement).firstElementChild).firstElementChild).value;
    var nextRow, numRow, tempVal;
    console.log();
    if (key.keyCode == "13") {
        if ((this.value).trim() != "") {
            if (snoValue == tbody.childElementCount) {
                for (var i = 0; i < testObject.length; i++) {
                    if (this.value == testObject[i].name) {
                        numRow = (((this.parentElement).nextElementSibling).firstElementChild);
                        numRow.value = testObject[i].value;
                        tempVal = 1;
                        newLine();
                        nextRow = (((((this.parentElement).parentElement).nextElementSibling).firstElementChild).nextElementSibling).firstElementChild;
                        nextRow.select();
                        break;
                    } else {
                        tempVal = 0;
                    }
                }
                if (tempVal == 0) {
                    this.value = "";
                    alert("Value not in Database")
                    tempVal = 1;
                }
            } else {
                nextRow = (((((this.parentElement).parentElement).nextElementSibling).firstElementChild).nextElementSibling).firstElementChild;
                nextRow.select();
            }
        } else {
            alert("Enter the value");
        }
    }
});

$(document).on('keypress', '#empNum', function(key) {
    var snoValue = ((((this.parentElement).parentElement).firstElementChild).firstElementChild).value;
    var nextRow, numRow, tempVal;
    console.log();
    if (key.keyCode == "13") {
        if ((this.value).trim() != "") {
            if (snoValue == tbody.childElementCount) {
                for (var i = 0; i < testObject.length; i++) {
                    if (this.value == testObject[i].name) {
                        numRow = (((this.parentElement).nextElementSibling).firstElementChild);
                        numRow.value = testObject[i].value;
                        tempVal = 1;
                        newLine();
                        nextRow = (((((this.parentElement).parentElement).nextElementSibling).firstElementChild).nextElementSibling).firstElementChild;
                        nextRow.select();
                        break;
                    } else {
                        tempVal = 0;
                    }
                }
                if (tempVal == 0) {
                    alert("Value not in Database")
                    tempVal = 1;
                }
            } else {
                nextRow = (((((this.parentElement).parentElement).nextElementSibling).firstElementChild).nextElementSibling).firstElementChild;
                nextRow.select();
            }
        } else {
            alert("Enter the value");
        }
    }
});
$("#btnAdd").click(function() {
    $('.pop-up').css("display", "flex");
    $('#addName').select();
});
$('#productAddBtn').click(function() { productAdd(); });
$('.close-icon-div').mouseover(function() {
    $('.closs').css("background", "#0077a8");
});
$('.close-icon-div').mouseout(function() {
    $('.closs').css("background", "#fff");
});
$('.close-icon-div').click(function() {
    $('#addName').val("");
    $('#addValue').val("");
    $('.pop-up').css("display", "none");
});
$("#btnGet").click(function() {
    getProduct()
});
// event end
// test object 
var testObject = [];
// function call
onpageLoad();
console.log("hello world");