
var DataImportFlg = false;
var CurrentLineNo = 0;
var SlideStringLines = [];
var endSlideFlg = true;

DisplayDataImportFlg();
DisplayCurrentLineNo();
DisplayAutoPlayFlg();

function AutoPlayOn(){

	endSlideFlg = false;
	DisplayAutoPlayFlg();
	setTimeout(STFunc, 1000)

}

var STFunc = function(){
	line1 = SlideStringLines[CurrentLineNo].split("#=#")
	timeSpan = line1[0]
	contLine = line1[1]
	
	h2Elem = document.getElementById("SlideStringH2")
	h2Elem.innerHTML = contLine;
	DisplayCurrentLineNo();	
	
	CurrentLineNo++;
	if(CurrentLineNo >= SlideStringLines.length){
		CurrentLineNo = 0;
	}
	
	if(endSlideFlg == false){
		setTimeout(STFunc, timeSpan)
	}
	
	
}

function AutoPlayOff(){
	endSlideFlg = true;
	DisplayAutoPlayFlg();
}
function JumpLine(){
	var jumpLineNo = Number(document.getElementById("JumpLineNo").value)
	if(jumpLineNo > SlideStringLines.length || jumpLineNo < 0){
		jumpLineNo = 0;
	}
	
	CurrentLineNo = jumpLineNo;
	
	line1 = SlideStringLines[CurrentLineNo].split("#=#")
	timeSpan = line1[0]
	contLine = line1[1]
	
	h2Elem = document.getElementById("SlideStringH2")
	h2Elem.innerHTML = contLine;
	DisplayCurrentLineNo();	

	endSlideFlg = true;
	DisplayAutoPlayFlg();
}

function PrevLine(){
	var jumpLineNo = CurrentLineNo - 1
	if(jumpLineNo >= SlideStringLines.length || jumpLineNo < 0){
		jumpLineNo = 0;
	}
	
	CurrentLineNo = jumpLineNo;
	
	line1 = SlideStringLines[CurrentLineNo].split("#=#")
	timeSpan = line1[0]
	contLine = line1[1]
	
	h2Elem = document.getElementById("SlideStringH2")
	h2Elem.innerHTML = contLine;
	DisplayCurrentLineNo();	
	
	endSlideFlg = true;
	DisplayAutoPlayFlg();
}

function NextLine(){
	var jumpLineNo = CurrentLineNo + 1
	if(jumpLineNo >= SlideStringLines.length || jumpLineNo < 0){
		jumpLineNo = 0;
	}
	
	CurrentLineNo = jumpLineNo;
	
	line1 = SlideStringLines[CurrentLineNo].split("#=#")
	timeSpan = line1[0]
	contLine = line1[1]
	
	h2Elem = document.getElementById("SlideStringH2")
	h2Elem.innerHTML = contLine;
	DisplayCurrentLineNo();
	
	endSlideFlg = true;
	DisplayAutoPlayFlg();
}

function ImportDataOnDataImportTab(){
      var fileRef = document.getElementById('fileOnDataImport');
	  var content;
	  var category1;
	  
      if (1 <= fileRef.files.length) {
			var reader = new FileReader();
			//ファイル読み出し完了後の処理を記述
			reader.onload = function (theFile) {
			var content = theFile.target.result;
			SlideStringLines = content.split('\r\n');
			

			DataImportFlg = true;
			DisplayDataImportFlg();
			
			CurrentLineNo = 0
			line1 = SlideStringLines[CurrentLineNo].split("#=#")
			timeSpan = line1[0]
			contLine = line1[1]
			
			h2Elem = document.getElementById("SlideStringH2")
			h2Elem.innerHTML = contLine;
			DisplayCurrentLineNo();
			DisplayAutoPlayFlg();
        }

		//ファイル読み出し
        reader.readAsText(fileRef.files[0], "utf-8");

      }
}

var g_reader = new FileReader();
var g_File;
var fileElem = document.getElementById("fileOnDataImport");
fileElem.onchange = function(event) {
    g_File = event.target.files[0];
};

function DisplayCurrentLineNo(){
	span1 = document.getElementById("CurrentLineNoSpan")
	span1.innerHTML = CurrentLineNo
}

function DisplayAutoPlayFlg(){
	span1 = document.getElementById("AutoPlayFlgSpan")
	if(endSlideFlg == false){
		span1.innerHTML = "ON"
	}else{
		span1.innerHTML = "OFF"
	}
}

function DisplayDataImportFlg(){
	var spanElem;
	
	spanElem = document.getElementById("ImportDataFlg");
	if(DataImportFlg == true){
		spanElem.innerHTML = "スライド文字列データ：ロード済み"
	}else{
		spanElem.innerHTML = "スライド文字列データ：ロード未完了"
	}
}

