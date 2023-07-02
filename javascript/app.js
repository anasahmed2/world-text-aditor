var inputTarget = document.getElementById("input");   

var textArea = document.getElementById("textArea")   

//   ---------- bold variables---------//
var boldChart = document.getElementById("boldChart") 

//   ---------- italic variables---------//
var italicChart = document.getElementById("italicChart");

//   ---------- color variables---------//
var color = document.getElementById("color")

//   ---------- backgroundcolor variables---------//
var backGroundColor = document.getElementById("BackGroundColor");

//   ---------- underline variables---------//
var underlineChart = document.getElementById("underlineChart")

//   ---------- fontsize variables---------//
var FSChart = document.getElementById("FSChart");

//   ---------- text shadow variables---------//
var TSCharts = document.getElementById("TSCharts");

//   ---------- text shadow variables---------//
var btnClear = document.getElementById("editBtn");

//   ---------- file target variables---------//
var fileTarget = document.getElementById("file");

//   ---------- padding top variables---------//
var PTopChart = document.getElementById("PTopChart");


//   ---------- padding Botttom variables---------//
var PBottomChart = document.getElementById("PBottomChart");


//   ---------- input area function---------//

btnClear.addEventListener("click",function(){
inputTarget.value = "";
    textArea.innerHTML = inputTarget.value;
    boldChart.style.display = "transprent"
})


//   ---------- input area function---------//

input.addEventListener("input", function () {
    var inputTarget = document.getElementById("input");
    var inputValue = inputTarget.value;
    var textArea = document.getElementById("textArea")
    textArea.innerHTML = inputValue;

})


//   ---------- bold function---------//

function boldOver() {
    boldChart.style.display = "block"
    FSChart.style.display = "none"
    underlineChart.style.display = "none"
    italicChart.style.display = "none"
    TSCharts.style.display = "none"
    PTopChart.style.display = "none"
    PBottomChart.style.display = "none"

}

function boldLeft() {
    boldChart.style.display = "none"
}

boldChart.addEventListener("input", function () {
    var boldValue = document.querySelector("input[name='bolder']:checked");   //--------> bold value
    var boldValueGet = boldValue.value;   //--------> bold value get
    textArea.style.fontWeight = boldValueGet
})

//   ---------- italic function---------//

function italicOver() {
    italicChart.style.display = "block"
    FSChart.style.display = "none"
    TSCharts.style.display = "none"
    underlineChart.style.display = "none"
    boldChart.style.display = "none"
    PTopChart.style.display = "none"
    PBottomChart.style.display = "none"

}

function italicLeft() {
    italicChart.style.display = "none"
}

italicChart.addEventListener("input", function () {
    var italicValue = document.querySelector("input[name='italic']:checked");
    var italicValueGet = italicValue.value;
    textArea.style.fontStyle = italicValueGet
})


//   ---------- backgrond color function---------//
function BGColorsOver() {
    TSCharts.style.display = "none"
    FSChart.style.display = "none"
    boldChart.style.display = "none"
    underlineChart.style.display = "none"
    italicChart.style.display = "none"
    PTopChart.style.display = "none"
    PBottomChart.style.display = "none"

}

backGroundColor.addEventListener("input", function () {
    var backGroundColor = document.getElementById("BackGroundColor");
    var backGroundColorValue = backGroundColor.value
    textArea.style.backgroundColor = backGroundColorValue
    console.log(backGroundColorValue);
})

//   ---------- color function---------//

function colorsOver() {
    TSCharts.style.display = "none"
    FSChart.style.display = "none"
    boldChart.style.display = "none"
    italicChart.style.display = "none"
    underlineChart.style.display = "none"
    PTopChart.style.display = "none"
    PBottomChart.style.display = "none"


}

color.addEventListener("input", function () {
    var color = document.getElementById("color")
    var colorValue = color.value
    textArea.style.color = colorValue
    console.log(colorValue)
})

//   ---------- underline function---------//

function underlineOver() {
    underlineChart.style.display = "block"
    FSChart.style.display = "none"
    boldChart.style.display = "none"
    italicChart.style.display = "none"
    TSCharts.style.display = "none"
    PTopChart.style.display = "none"
    PBottomChart.style.display = "none"

}

function underlineLeft() {
    underlineChart.style.display = "none"
}

underlineChart.addEventListener("input", function () {
    var underline = document.querySelector("input[name='underline']:checked")
    var underlineValue = underline.value;
    textArea.style.textDecoration = underlineValue
    console.log(underlineValue);
})


//   ---------- font size function---------//

function FSOver() {
    FSChart.style.display = "block"
    boldChart.style.display = "none"
    italicChart.style.display = "none"
    underlineChart.style.display = "none"
    TSCharts.style.display = "none"
    PTopChart.style.display = "none"
    PBottomChart.style.display = "none"

}

function FSLeft() {
    FSChart.style.display = "none"

}

FSChart.addEventListener("input", function () {
    var FSTarget = document.getElementById("FSValue");
    if (!/^[0-9]+$/.test(FSTarget.value)) {
        FSTarget.value = "";
    }
    var FSValues = FSTarget.value + "px";
    textArea.style.fontSize = FSValues;
})


//   ---------- padding top function---------//

function PTopOver() {
    PTopChart.style.display = "block"
    FSChart.style.display = "none"
    boldChart.style.display = "none"
    italicChart.style.display = "none"
    underlineChart.style.display = "none"
    TSCharts.style.display = "none"
    PBottomChart.style.display = "none"

}

function PTopLeft() {
    PTopChart.style.display = "none"

}

PTopChart.addEventListener("input", function () {
    var PTopTarget = document.getElementById("PTopValue");
    if (!/^[0-9]+$/.test(PTopTarget.value)) {
        PTopTarget.value = "";
    }
    var PTopValues = (PTopTarget.value*30) + "px";
    textArea.style.paddingTop = PTopValues;
})



//   ---------- padding Bottom function---------//

function PBottomOver() {
    PBottomChart.style.display = "block"
    PTopChart.style.display = "none"
    FSChart.style.display = "none"
    boldChart.style.display = "none"
    italicChart.style.display = "none"
    underlineChart.style.display = "none"
    TSCharts.style.display = "none"

}

function PBottomLeft() {
    PBottomChart.style.display = "none"

}

PBottomChart.addEventListener("input", function () {
    var PBottomTarget = document.getElementById("PBottomValue");
    if (!/^[0-9]+$/.test(PBottomTarget.value)) {
        PBottomTarget.value = "";
    }
    var PBottomValues = (PBottomTarget.value*30) + "px";
    textArea.style.paddingBottom = PBottomValues;
})



//   ---------- Text Shadow function---------//

function TSOver() {

    TSCharts.style.display = "block"
    FSChart.style.display = "none"
    boldChart.style.display = "none"
    italicChart.style.display = "none"
    underlineChart.style.display = "none"
    PTopChart.style.display = "none"
    PBottomChart.style.display = "none"

}

function TSLeft() {
    TSCharts.style.display = "none"
}

TSCharts.addEventListener("input", function () {
    var TSTB = document.getElementById("TSTB")
    var TSLF = document.getElementById("TSLF")
    var TSOpct = document.getElementById("TSOpct")
    var TSColor = document.getElementById("TSColor")

    if (!/^[0-9]+$/.test(TSTB.value)) {
        TSTB.value = "";
    }
    var TSTBValues = TSTB.value + "px";


    if (!/^[0-9]+$/.test(TSLF.value)) {
        TSLF.value = "";
    }
    var TSLFValues = TSLF.value + "px";

    if (!/^[0-9]+$/.test(TSOpct.value)) {
        TSOpct.value = "";
    }
    var TSOpctValues = TSOpct.value + "px";
    var TSColorValue = TSColor.value;

    var textShadowValue = TSTBValues + " " +TSLFValues+" "+TSOpctValues+ " "+TSColorValue;
    console.log(textShadowValue);
   
    textArea.style.textShadow = textShadowValue;
})

//   ---------- backgroung image function---------//

fileTarget.addEventListener("change",function (){
    var file = this.files[0]  // Get the selected file store in object

    if(file){
        var reader = new FileReader()
        reader.addEventListener("load", function(){
            textArea.style.backgroundImage = `url('${this.result}')`;
            console.log(this.result)
        })
    }
    reader.readAsDataURL(file);
    console.log(file)
})
