
/// This dw_tester.js file is developped by,
///Piyali Chattopadhyay
///Project_scientist- Technical
///Virtual Lab Projects,Mechanical Engineering Department,IIT Kharagpur

alert('Laptop or Desktop view in chrome is preferable.');

$(document).ready(function(){
  $("#instcontrol").click(function(){
    $("#inst").slideToggle("slow");
  });
});
 $(document).ready(function(){
  $("#myTables").click(function(){	
	
    $("#obsTable").slideToggle("slow");
	
	
	}); 
  });
 
/* function seudovalue1(){
	
$('#seudobox').val(1);	
$('#HT').css('display','none');	
}

function seudovalue2(){
	
$('#seudobox').val(2);	
$('#HT').css('display','block');	
} */

///onff fn

function onoff(){
	if(document.getElementById('sw').src.match('./images/poff.png')){
		document.getElementById('sw').src = './images/pon.png';
		$('#lightcir').css('display','block');
		document.getElementById('lightcir').src = './images/lightimg1.png';
		document.getElementById('camtop').style['pointer-events'] = "auto";
		document.getElementById('rbtnP').style['pointer-events'] = "none";
		document.getElementById('rbtnM').style['pointer-events'] = "none";
	}
	else if(document.getElementById('sw').src.match('./images/pon.png')){
		document.getElementById('sw').src = './images/poff.png';
		$('#lightcir').css('display','none');
		document.getElementById('camtop').style['pointer-events'] = "none";
		if(document.getElementById('movechk').value !=8){
		document.getElementById('rbtnP').style['pointer-events'] = "auto";
		}
		document.getElementById('rbtnM').style['pointer-events'] = "auto";
		document.getElementById('Tbtn').disabled = true;
	}
	
}
///switch off the lightsource to move the mirror further
function alertMirror(){
	if(document.getElementById('rbtnP').style['pointer-events'] == "none" && document.getElementById('rbtnM').style['pointer-events'] == "none"){
	alert('Switch off the light source for the further movement of the mirror');	
	}	
}

var countL = 0,countC = 0;
function moveLeft(){
document.getElementById('rbtnM').style['pointer-events'] = "auto";
countL-=8.4;
countC-=8.4;
document.getElementById('mirror').style.left = math.add(72.4,countL)+ "%";	
document.getElementById('lightcir').style.left = math.add(78.2,countC)+ "%";
document.getElementById('movechk').stepUp(1);
if(document.getElementById('movechk').value == 8){
	document.getElementById('rbtnP').style['pointer-events'] = "none";
}	
}
function moveRight(){
document.getElementById('rbtnP').style['pointer-events'] = "auto";
countL+=8.4;
countC+=8.4;
document.getElementById('mirror').style.left = math.add(72.4,countL)+ "%";	
document.getElementById('lightcir').style.left = math.add(78.2,countC)+ "%";
document.getElementById('movechk').stepDown(1);	
if(document.getElementById('movechk').value == 1){
	document.getElementById('rbtnM').style['pointer-events'] = "none";
}
}

var imCount=0;
function secscaleRotation(){
	
	var scndpic = math.add(imCount,1);
	if(document.getElementById('secscale').src.match('./images/secscale1'+imCount+'.png')){
		document.getElementById('secscale').src = './images/secscale1'+scndpic+'.png';
		imCount++;
	}
	
	
	if(imCount == 14){
		imCount=0;
	document.getElementById('secscale').src = './images/secscale1'+math.add(imCount,0)+'.png';	
	}
	console.log(imCount);
	
}

function simulation(){

var pos = document.getElementById('movechk').value;

if(pos == 1 && imCount == 10){///0-110 mm
	document.getElementById('secpointer').style.left = 160+'%';
	document.getElementById('minpointer').style.top = 47+'%';
	document.getElementById('lightcir').src = './images/lightimg2.png';
	document.getElementById('calcbtn').disabled = false;
}
else if(pos == 1 && imCount != 10){
document.getElementById('lightcir').src = './images/lightimg1.png';
document.getElementById('calcbtn').disabled = true;
document.getElementById('Tbtn').disabled = true;	
}

if(pos == 2 && imCount == 11){///110-220 mm
	document.getElementById('secpointer').style.left = 158.2+'%';
	document.getElementById('minpointer').style.top = 49+'%';
	document.getElementById('lightcir').src = './images/lightimg2.png';
	document.getElementById('calcbtn').disabled = false;
}
else if(pos == 2 && imCount != 11){
document.getElementById('lightcir').src = './images/lightimg1.png';
document.getElementById('calcbtn').disabled = true;
document.getElementById('Tbtn').disabled = true;	
}
	
if(pos == 3 && imCount == 0){///220-330 mm
	document.getElementById('secpointer').style.left = 169+'%';
	document.getElementById('minpointer').style.top = 49+'%';
	document.getElementById('lightcir').src = './images/lightimg2.png';
	document.getElementById('calcbtn').disabled = false;
}
else if(pos == 3 && imCount != 0){
document.getElementById('lightcir').src = './images/lightimg1.png';
document.getElementById('calcbtn').disabled = true;	
document.getElementById('Tbtn').disabled = true;
}
	
if(pos == 4 && imCount == 10){///330-440 mm
	document.getElementById('secpointer').style.left = 162+'%';
	document.getElementById('minpointer').style.top = 50+'%';
	document.getElementById('lightcir').src = './images/lightimg2.png';
	document.getElementById('calcbtn').disabled = false;
}
else if(pos == 4 && imCount != 10){
document.getElementById('lightcir').src = './images/lightimg1.png';
document.getElementById('calcbtn').disabled = true;	
document.getElementById('Tbtn').disabled = true;
}

if(pos == 5 && imCount == 7){///440-550 mm
	document.getElementById('secpointer').style.left = 168+'%';
	document.getElementById('minpointer').style.top = 50+'%';
	document.getElementById('lightcir').src = './images/lightimg2.png';
	document.getElementById('calcbtn').disabled = false;
}
else if(pos == 5 && imCount != 7){
document.getElementById('lightcir').src = './images/lightimg1.png';
document.getElementById('calcbtn').disabled = true;	
document.getElementById('Tbtn').disabled = true;
}

if(pos == 6 && imCount == 12){///550-660 mm
	document.getElementById('secpointer').style.left = 169+'%';
	document.getElementById('minpointer').style.top = 52+'%';
	document.getElementById('lightcir').src = './images/lightimg2.png';
	document.getElementById('calcbtn').disabled = false;
}
else if(pos == 6 && imCount != 12){
document.getElementById('lightcir').src = './images/lightimg1.png';
document.getElementById('calcbtn').disabled = true;	
document.getElementById('Tbtn').disabled = true;
}

if(pos == 7 && imCount == 0){///660-770 mm
	document.getElementById('secpointer').style.left = 169+'%';
	document.getElementById('minpointer').style.top = 52+'%';
	document.getElementById('lightcir').src = './images/lightimg2.png';
	document.getElementById('calcbtn').disabled = false;
}
else if(pos == 7 && imCount != 0){
document.getElementById('lightcir').src = './images/lightimg1.png';
document.getElementById('calcbtn').disabled = true;	
document.getElementById('Tbtn').disabled = true;
}

if(pos == 8 && imCount == 7){///770-880 mm
	document.getElementById('secpointer').style.left = 166+'%';
	document.getElementById('minpointer').style.top = 53+'%';
	document.getElementById('lightcir').src = './images/lightimg2.png';
	document.getElementById('calcbtn').disabled = false;
}
else if(pos == 8 && imCount != 7){
document.getElementById('lightcir').src = './images/lightimg1.png';
document.getElementById('calcbtn').disabled = true;	
document.getElementById('Tbtn').disabled = true;
}				
	
}


function calculate(){
	
document.getElementById('Tbtn').disabled = false;
var pos = document.getElementById('movechk').value;
	
if(pos == 1){
document.getElementById('position').value = "0-110";
document.getElementById('Fm').value = 12;
document.getElementById('Fs').value = 41;
}
if(pos == 2){
document.getElementById('position').value = "110-220";
document.getElementById('Fm').value = 11;
document.getElementById('Fs').value = 44.5;
}
if(pos == 3){
document.getElementById('position').value = "220-330";
document.getElementById('Fm').value = 11;
document.getElementById('Fs').value = 3.5;
}
if(pos == 4){
document.getElementById('position').value = "330-440";
document.getElementById('Fm').value = 10;
document.getElementById('Fs').value = 41.5;
}
if(pos == 5){
document.getElementById('position').value = "440-550";
document.getElementById('Fm').value = 10;
document.getElementById('Fs').value = 31;
}
if(pos == 6){
document.getElementById('position').value = "550-660";
document.getElementById('Fm').value = 9;
document.getElementById('Fs').value = 51.5;
}
if(pos == 7){
document.getElementById('position').value = "660-770";
document.getElementById('Fm').value = 9;
document.getElementById('Fs').value = 3.5;
}
if(pos == 8){
document.getElementById('position').value = "770-880";
document.getElementById('Fm').value = 8;
document.getElementById('Fs').value = 30.5;
}
var totalF = math.add(math.multiply(document.getElementById('Fm').value,60),document.getElementById('Fs').value);
document.getElementById('F').value = totalF;	
}

/////////////////////////////////////Table Creation//////////////////////////////////////////////////////////EDIT it
 
var tabrowindex = 0;
var arr = [];

var table;


//------------------------------------------------- Table Creation -----------------------------------------------//
function CreateTable() {


    arr[0] = tabrowindex+1 ;
    arr[1] = $('#position').val();
    arr[2] = $('#Fm').val();
	arr[3] = $('#Fs').val();
	arr[4] = $('#F').val();
	arr[5] = math.subtract(arr[4],761);
	arr[6] = math.multiply(arr[5],0.5);
	///cumulative rise/fall
	var a,b;
	if(arr[6]== -28.25){
		 a = -28.25;
		 $('#achk').val(a);
	}
	else if(arr[6]!= -28.25 && arr[6] != 0){
		b = math.add($('#achk').val(),arr[6]);
		a = b;
		$('#achk').val(a);
	}
	else if(arr[6] == 0){
		a = 0;
	}
	arr[7] = a;
	///adjustment
	var c,d;
	if(arr[7] == 0){
	 c= - 65.0312;
	 $('#cchk').val(c);
	}
	else if(arr[7] != 0){
	d = math.add($('#cchk').val(), -65.0312);
	c = d;
	$('#cchk').val(c);
	}
	arr[8] = c;
	arr[9] = math.subtract(arr[8],arr[7]);;
   
	
	table = document.getElementById("obsTable");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 10; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }
document.getElementById('calcbtn').disabled = true;	
document.getElementById('Tbtn').disabled = true;	

}  

function plot1(){
	
var dataArrayX = [];///x axis values
var dataArrayY = [];///y axis values

document.getElementById('myPlot').style.display = "block";	
	
var tableData = document.getElementById('obsTable');	
	
for (var tabrowindex1 = 1; tabrowindex1 < tableData.rows.length; tabrowindex1++) {
	var rwe1 = tableData.rows[tabrowindex1].cells;

	dataArrayX.push( parseFloat(rwe1[0].innerHTML));
	dataArrayY.push( parseFloat(rwe1[7].innerHTML));
}
	
///plot using plotly.js	

const data = [{
  x:dataArrayX,
  y:dataArrayY,
  type:"spline",
  //orientation:"v",
  marker: {color:"#2163A5"}
}];

const layout = {
	title:"Cumulative Error Vs. Position",

xaxis: {
	showgrid: true,
    zeroline: true,
    showline: true,
    //mirror: 'ticks',
    gridcolor: '#bdbdbd',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 3,
    linecolor: '#636363',
    linewidth: 2,
	rangemode:'tozero',
    title: {
      text: 'Position (mm)',
      font: {
        family: 'Times New Roman, monospace',
        size: 18,
        color: '#2163A5'
      }
    },
  },
  yaxis: {
	  tickangle: -65,
	  showgrid: true,
    zeroline: true,
    showline: true,
    //mirror: 'ticks',
    gridcolor: '#bdbdbd',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 3,
    linecolor: '#636363',
    linewidth: 2,
	rangemode:'tozero',
    title: {
      text: 'Cumulative Error( &#xb5;m )',
	  
      font: {
        family: 'Times New Roman, monospace',
        size: 18,
        color: '#2163A5'
      }
    }
  }



};

Plotly.newPlot("myPlot", data, layout);
	
}

function plot2(){
	
var dataArrayX = [];///x axis values
var dataArrayY = [];///y axis values

document.getElementById('myPlot').style.display = "block";	
	
var tableData = document.getElementById('obsTable');	
	
for (var tabrowindex1 = 1; tabrowindex1 < tableData.rows.length; tabrowindex1++) {
	var rwe1 = tableData.rows[tabrowindex1].cells;

	dataArrayX.push( parseFloat(rwe1[0].innerHTML));
	dataArrayY.push( parseFloat(rwe1[9].innerHTML));
}
	
///plot using plotly.js	

const data = [{
  x:dataArrayX,
  y:dataArrayY,
  type:"spline",
  //orientation:"v",
  marker: {color:"#2163A5"}
}];

const layout = {
	title:"Error from horizontal straight line Vs. Position ",

xaxis: {
	showgrid: true,
    zeroline: true,
    showline: true,
    //mirror: 'ticks',
    gridcolor: '#bdbdbd',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 3,
    linecolor: '#636363',
    linewidth: 2,
	rangemode:'tozero',
    title: {
      text: 'Position (mm)',
      font: {
        family: 'Times New Roman, monospace',
        size: 18,
        color: '#2163A5'
      }
    },
  },
  yaxis: {
	  tickangle: -65,
	  showgrid: true,
    zeroline: true,
    showline: true,
    //mirror: 'ticks',
    gridcolor: '#bdbdbd',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 3,
    linecolor: '#636363',
    linewidth: 2,
	rangemode:'tozero',
    title: {
      text: 'Error from horizontal straight line (&#xb5;m)',
	  
      font: {
        family: 'Times New Roman, monospace',
        size: 18,
        color: '#2163A5'
      }
    }
  }



};

Plotly.newPlot("myPlot", data, layout);
	
}





/// clear button function

function Refresh(){///donot keep the name of the function as clear

	document.getElementById('position').value = 0;
	document.getElementById('Fm').value = 0;
	document.getElementById('Fs').value = 0;
	document.getElementById('F').value = 0;
	
	var Dtable= document.getElementById('obsTable');	
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){
	Dtable.deleteRow(i);
	}

	tabrowindex=0;

	document.getElementById('myPlot').style.display = "none";
		
		
 }



