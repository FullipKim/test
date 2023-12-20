function getXMLHttp()
{
	if ( window.XMLHttpRequest ) {
		return new XMLHttpRequest();											// �곗꽑�곸쑝濡�  IE7,�뚯씠�댄룺�� 怨꾩뿴�� �꾪븳 XMLHTTP媛� �앹꽦��
	} else {
		var xmlhttps			=	new Array	(
												"MSXML2.XMLHttp.7.0",
												"MSXML2.XMLHttp.6.0",
												"MSXML2.XMLHttp.5.0",
												"MSXML2.XMLHttp.4.0",
												"MSXML2.XMLHttp.3.0",
												"MSXML2.XMLHttp",
												"Microsoft.XMLHttp"
												);

		for (var i = 0; i < xmlhttps.length; i++)
		{
			try
			{
				var req			=	new ActiveXObject(xmlhttps[i]);						// IE 5,6�� �꾪븳 �≫떚釉똛踰꾩졏 XMLHTTP媛� �앹꽦��
				alert(xmlhttps[i] + ": �ъ슜媛���");
				return req;
			}
			catch (oError)
			{
			}
		}
		return null;
	}
}

function getObject(objectId)
{
	if(document.getElementById && document.getElementById(objectId)) {
		return document.getElementById(objectId); 
	} else if (document.all && document.all(objectId)){
		return document.all(objectId); 
	} else if (document.layers && document.layers[objectId]){
		return document.layers[objectId]; 
	} else {
		return false;
	}
}

// 怨듬갚�쒓굅
function udf_Trim(keyword)
{
	var st_num;
		st_num					=	keyword.indexOf(" ");
	while (st_num != -1){
		keyword					=	keyword.replace(" ","");
		st_num					=	keyword.indexOf(" ");
	}
	return keyword;
}

//Only Korean
function Check_onlyKorean(id_text)
{
	for ( var i=0; i < id_text.length; i++ )
	{
		if ( id_text.charCodeAt(i) < 0xAC00 || id_text.charCodeAt(i) > 0xD7A3){
			if (( id_text.charCodeAt(i) < 12593 || id_text.charCodeAt(i) > 12643 ) && ( id_text.charCodeAt(i) != 32)) {
				return true;
			}
		}
	}	
	return false;
}

function openWindow(theURL,winName,features)														//	v2.0
{
	window.open(theURL,winName,features);
}

function check(keyword)
{
	var st_num, key_len;
		st_num					=	keyword.indexOf(" ");
	while (st_num != -1) {
		keyword					=	keyword.replace(" ", "");
		st_num					=	keyword.indexOf(" ");
	}
	key_len						=	keyword.length;
	return key_len;
}

function chkNull(obj, msg)
{
	if (obj.value.split(" ").join("") == "") {
		alert(msg);
		obj.focus();
		return false;
	}else{
		return true;
	}
}

//	Null Cheak
function NullChk(str)
{
	for (var i=0;i<str.length;i++)
	{
		if (str.charAt(i)!=' ')
		break
	}
	if (i==str.length)
	return false
}

//	�뷀꽣踰꾪듉�� �숈옉
function enterKey(obj)
{
	if (event.keyCode == 13) {
		obj.focus();
	}
}

//	�뷀꽣踰꾪듉�� �� �쒕툕諛�
function enterKeySubmit(formChk) {
	if (event.keyCode == 13) {
		formChk();
	}
}

function onlyNumber()																				//	�レ옄留뚯쓣 湲곗엯諛쏄쾶 �섎뒗 諛⑸쾿
{
	if ((event.keyCode < 48) || (event.keyCode > 57)){
		event.returnValue = false; }
}

function onlyNumberDot()																			//	�レ옄�� .留� 湲곗엯諛쏄쾶 �섎뒗 諛⑸쾿
{
	if (event.keyCode != 46) {
		if ((event.keyCode < 48) || (event.keyCode > 57)) {
			event.returnValue	=	false;
		}
	}
}

function js_tab_order(arg,nextname,len)																//	�앹씠�숈떆
{
	if (arg.value.length == len) {
		nextname.focus() ;
		return;
	}
}

function formatnumber(v1,v2)																		//	�レ옄�� 肄ㅻ쭏瑜� 李띿쓣�먮━�섎� 留ㅺ컻蹂��섎줈 諛쏆쓬
{
	var str						=	new Array();													//	肄ㅻ쭏�ㅽ듃留곸쓣 議고빀�� 諛곗뿴
		v1						=	String(v1);														//	�レ옄瑜� �ㅽ듃留곸쑝濡� 蹂���
	for (var i=1;i<=v1.length;i++)																	//	�レ옄�� 湲몄씠留뚰겮 諛섎났
	{
		if(i%v2) str[v1.length-i] = v1.charAt(v1.length-i);											//	�먮━�섍� �꾨땲硫� �レ옄留뚯궫��
		else  str[v1.length-i] = ','+v1.charAt(v1.length-i);										//	�먮━�� �대㈃ 肄ㅻ쭏源뚯� �쎌엯
	}
	return str.join('').replace(/^,/,'');															//	�ㅽ듃留곸쓣 議고빀�섏뿬 諛섑솚
}

//	�대�吏� �뺤옣�� 寃���
function checkImage(filename)
{
	if (check(filename) == 0) {																		//	�뚯씪 �좏깮�� �덊븳寃쎌슦
		return false;
	} else {																						// �뚯씪�좏깮�� �� 寃쎌슦
		var ext					=	filename.split(".");
		var length				=	ext.length - 1;

		if (ext[length].toUpperCase() == "GIF" || ext[length].toUpperCase() == "JPG" || ext[length].toUpperCase() == "JPEG" || ext[length].toUpperCase() == "PNG")
			return true;
		else
			return false;
	}
}
//	�대�吏� �뺤옣�� 寃���

//	�뚯씪 �뺤옣�� 寃���
function checkFile(filename)
{
	if (check(filename) == 0) {																		//	�뚯씪 �좏깮�� �덊븳寃쎌슦
		return false;
	} else {																						// �뚯씪�좏깮�� �� 寃쎌슦
		var ext					=	filename.split(".");
			ext					=	ext[1].toUpperCase();
		var extArr				=	["PHP","PHP3","PHP4","PHP5","PHP7","EXE","CGI","PHTML","HTML","HTM","PL","SH","ASP","ASPX","JAR","JSP","INC","DLL"];

		if ($.inArray(ext, extArr) != -1) {
			return false;
		} else {
			return true;
		}
	}
}
//	�뚯씪 �뺤옣�� 寃���

//	�묒� �뚯씪 寃���
function checkExcel(filename)
{
	if (check(filename) == 0) {											//	�뚯씪 �좏깮�� �덊븳寃쎌슦
		return false;
	} else {	// �뚯씪�좏깮�� �� 寃쎌슦
		var ext					=	filename.split(".");
		var length				=	ext.length - 1;

		if (ext[length].toUpperCase() == "XLS")
			return true;
		else
			return false;
	}
}
//	�대�吏� �뺤옣�� 寃���

//	�낅줈�� 媛��� �⑸웾 泥댄겕
function checkFileSize(objID, limitSize, sizeObj) {
	var iSize					=	0;
	if ( window.ActiveXObject ) {
		var objFSO				=	new ActiveXObject("Scripting.FileSystemObject");
		var sPath				=	$(objID)[0].value;
		var objFile				=	objFSO.getFile(sPath);
		iSize					=	objFile.size;
	} else {
		iSize					=	$(objID)[0].files[0].size;
	}

	//	留뚯빟 �⑸웾 �꾩떆 ���� Object 媛� 議댁옱�쒕떎硫� �⑸웾 �꾩떆����
	if (sizeObj) {
		var tSize				=	$(sizeObj).val();
		var totalSize			=	parseInt(tSize) + parseInt(iSize);
		$(sizeObj).val(totalSize);
	}

	if (parseInt(iSize) > parseInt(limitSize)) {						//	泥⑤� 媛��ν븳 �⑸웾 蹂대떎 �щ떎硫�
		return false;
	} else {
		return true;
	}
}
//	�낅줈�� 媛��� �⑸웾 泥댄겕

//	臾몄옄�� 移섑솚
function replaceAll(str, searchStr, replaceStr)
{
	while (str.indexOf(searchStr) != -1)
	{
		str						=	str.replace(searchStr, replaceStr);
	}
	return str;
}
//	臾몄옄�� 移섑솚

//	湲��먯닔 �쒗븳
function fByteCount(arg,maxLength,obj)
{
	var str, msg;
	var len						=	0;
	var temp;
	var count					=	0;

		msg						=	arg.value;
		str						=	new String(msg);
		len						=	str.length;

	for (k=0 ; k<len ; k++)
	{
		temp					=	str.charAt(k);

		if (escape(temp).length > 4) {
			count				+=	2;
		} else if (temp == '\r' && str.charAt(k+1) == '\n') {										//	\r\n�� 寃쎌슦
			count				+=	2;
		} else if (temp != '\n') {
			count++;
		}
	}

	getObject(obj).innerHTML	=	count;

	if (parseInt(count) > parseInt(maxLength)) {
		arg.blur();
		arg.focus();
		alert(maxLength + "�� 源뚯�留� �낅젰�� 媛��ν빀�덈떎."); 
		backChar(arg,maxLength,obj);
	}
}
//	湲��먯닔 �쒗븳

//	�쒗븳�쒖닔�� �곕씪 湲��� �먮Ⅴ湲�
function backChar(arg,maxLength,obj)
{
	var str, msg;
	var len						=	0;
	var temp;
	var count					=	0;

		msg						=	arg.value;
		str						=	new String(msg);
		len						=	str.length;

	for (k = 0; k < len; k++)
	{
		temp					=	str.charAt(k);

		if (escape(temp).length > 4) {
			count				+=	2;
		} else if (temp == '\r' && str.charAt(k+1) == '\n') {										//	\r\n�� 寃쎌슦
			count				+=	2;
		} else if (temp != '\n') {
			count++;
		}

		if(parseInt(count) > parseInt(maxLength)) {
			str					=	str.substring(0,k);
			break;
		}
	}

	arg.value					=	str;
	fByteCount(arg,maxLength,obj);
}
//	�쒗븳�쒖닔�� �곕씪 湲��� �먮Ⅴ湲�

//	�뺢퇋�쒗쁽�앹쓣 �댁슜�� �대찓�� �좏슚�� 寃���
function email_check( email )
{
	var regex					=	/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	return (email != '' && email != 'undefined' && regex.test(email) === true);
}

//	date1 : 湲곗� �좎쭨(YYYY-MM-DD), date2 : ���� �좎쭨(YYYY-MM-DD)
function getDateDiff(date1,date2)
{
	var arrDate1				=	date1.split("-");
	var getDate1				=	new Date(arrDate1[0], Number(arrDate1[1])-1, arrDate1[2]);
	var arrDate2				=	date2.split("-");
	var getDate2				=	new Date(arrDate2[0], Number(arrDate2[1])-1, arrDate2[2]);

	//var getDiffTime = getDate1.getTime() - getDate2.getTime();
	//return Math.floor(getDiffTime / (1000 * 60 * 60 * 24));

	var getDiffTime				=	(getDate1.getTime() - getDate2.getTime()) / 1000 / 60 / 60 / 24;
	return getDiffTime;
}
//	date1 : 湲곗� �좎쭨(YYYY-MM-DD), date2 : ���� �좎쭨(YYYY-MM-DD)

//	�좎쭨�뺤쑝濡� 蹂��섑븯�� function
function makeDateFormat(pdate)
{
	var yy, mm, dd, yymmdd;
	var ar;

	if (pdate.indexOf(".") > -1) {																	//	yyyy.mm.dd
		ar						=	pdate.split(".");
		yy						=	ar[0];
		mm						=	ar[1];
		dd						=	ar[2];

		if (mm < 10) mm			=	"0" + mm;
		if (dd < 10) dd			=	"0" + dd;
	} else if (pdate.indexOf("/") > -1) {															//	yyyy-mm-dd
		ar						=	pdate.split("/");
		yy						=	ar[0];
		mm						=	ar[1];
		dd						=	ar[2];

		if (mm < 10) mm			=	"0" + mm;
		if (dd < 10) dd			=	"0" + dd;
	} else if (pdate.length == 8) {
		yy						=	pdate.substr(0,4);
		mm						=	pdate.substr(4,2);
		dd						=	pdate.substr(6,2);
	}

	yymmdd						=	yy + "-" + mm + "-"+dd;
	yymmdd						=	new Date(yymmdd);

	if (isNaN(yymmdd)) {
		return false;
	}
	return yymmdd;
}
//	�좎쭨�뺤쑝濡� 蹂��섑븯�� function

//	Fri Nov 1 00:00:00 UTC+0900 2013 ==> 2013-11-01 �뺤떇�쇰줈 蹂���
function makeDateFormat1(pdate)
{
	var yy, mm, dd, yymmdd;
	var ar;

	var yy						=	pdate.getFullYear();
	var mm						=	pdate.getMonth() + 1;
		if(mm < 10) mm = "0" + mm;

	var dd						=	pdate.getDate();
		if(dd < 10) dd = "0" + dd;

	yymmdd						=	yy + "-" + mm + "-" + dd;
	return yymmdd;
}
//	Fri Nov 1 00:00:00 UTC+0900 2013 ==> 2013-11-01 �뺤떇�쇰줈 蹂���

/**
 *	�щ젰 jquery datepicker
 *
 *	@param val - 議고쉶��(�좎쭨 ex.2016-01-01)
 *	@return �대떦�섎뒗 �쇱옄
 */
function datePicker(obj)
{
	$(obj).datepicker({
		dateFormat				:	"yy-mm-dd",
		monthNames				:	["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"],
		monthNamesShort			:	["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"],
		dayNames				:	["��", "��", "��", "��", "紐�", "湲�", "��"],
		dayNamesMin				:	["��", "��", "��", "��", "紐�", "湲�", "��"],
		dayNamesShort			:	["��", "��", "��", "��", "紐�", "湲�", "��"],
		yearSuffix				:	"��",
		showMonthAfterYear		:	true,
		yearRange				:	'c-100:c+5',
		changeYear				:	true,
		changeMonth				:	true
	}).datepicker('show');
}

/**
 *	�щ젰 Bootstrap datetimepicker
 *
 *	@param val - 議고쉶��(�좎쭨 ex.2016-01-01 13:25)
 *	@return �대떦�섎뒗 �쇱옄
 *	http://b1ix.net/12
 *	https://www.codexworld.com/bootstrap-datetimepicker-add-date-time-picker-input-field/
 */

//	Date Only
function bootDatePicker(obj)
{
	$(obj).datetimepicker({
		language				:	'ko',
		format					:	'yyyy-mm-dd',
		autoclose				:	true,
		todayBtn				:	true,
		pickerPosition			:	'bottom-right',
		todayHighlight			:	true,
		startView				:	2,
		minView					:	2
	}).datetimepicker("show");
}

//	Date and Time
function bootDateTimePicker(obj)
{
	$(obj).datetimepicker({
		language				:	'ko',
		autoclose				:	true,
		todayBtn				:	true,
		pickerPosition			:	'bottom-right',
		todayHighlight			:	true
	}).datetimepicker("show");
}

//	Time Only
function bootTimePicker(obj)
{
	$(obj).datetimepicker({
		language				:	'ko',
		autoclose				:	true,
		todayBtn				:	true,
		pickerPosition			:	'bottom-right',
		todayHighlight			:	true,
		startView				:	1,
		minView					:	0,
		maxView					:	1,
	}).datetimepicker("show");
}

/**
 *	�� �좎쭨�� 李⑥씠瑜� �쇱옄濡� 援ы빀�덈떎.(議고쉶 醫낅즺�� - 議고쉶 �쒖옉��) jquery datepicker
 *
 *	@param val1 - 議고쉶 �쒖옉��(�좎쭨 ex.2015-01-01)
 *	@param val2 - 議고쉶 醫낅즺��(�좎쭨 ex.2015-01-01)
 *	@return 湲곌컙�� �대떦�섎뒗 �쇱옄
 */
function calDateRange(val1, val2)
{
	var FORMAT					=	"-";

	val1						=	val1.trim();
	val2						=	val2.trim();

	// FORMAT�� �ы븿�� 湲몄씠 泥댄겕
	if (val1.length != 10 || val2.length != 10)
		return null;

	// FORMAT�� �덈뒗吏� 泥댄겕
	if (val1.indexOf(FORMAT) < 0 || val2.indexOf(FORMAT) < 0)
		return null;

	// �꾨룄, ��, �쇰줈 遺꾨━
	var start_dt				=	val1.split(FORMAT);
	var end_dt					=	val2.split(FORMAT);

	// �� - 1(�먮컮�ㅽ겕由쏀듃�� �붿씠 0遺��� �쒖옉�섍린 �뚮Ц��...)
	// Number()瑜� �댁슜�섏뿬 08, 09�붿쓣 10吏꾩닔濡� �몄떇�섍쾶 ��.
	start_dt[1]					=	(Number(start_dt[1]) - 1) + "";
	end_dt[1]					=	(Number(end_dt[1]) - 1) + "";

	var from_dt					=	new Date(start_dt[0], start_dt[1], start_dt[2]);
	var to_dt					=	new Date(end_dt[0], end_dt[1], end_dt[2]);

	return (to_dt.getTime() - from_dt.getTime()) / 1000 / 60 / 60 / 24;
}

/**
 *	�붾떖�� jquery datepicker
 *
 *	@param val - 議고쉶��(�좎쭨 ex.2015-01-01)
 *	@return �대떦�섎뒗 �쇱옄
 */
function datePickerMonth(input) {
	$(input).datepicker({
		dateFormat				:	"yy-mm",
		monthNames				:	["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"],
		monthNamesShort			:	["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"],
		dayNames				:	["��", "��", "��", "��", "紐�", "湲�", "��"],
		dayNamesMin				:	["��", "��", "��", "��", "紐�", "湲�", "��"],
		dayNamesShort			:	["��", "��", "��", "��", "紐�", "湲�", "��"],
		yearSuffix				:	"��",
		showMonthAfterYear		:	true,
		changeYear				:	true,
		changeMonth				:	true,
		showButtonPanel			:	true,
		currentText				:	"�대쾲��",
		closeText				:	"�좏깮",
		yearRange				:	'c-10:c+10',
		showButtonPanel			:	true,
		onClose: function(dateText, inst) { 
			var year			=	$("#ui-datepicker-div .ui-datepicker-year :selected").val();
			var month			=	parseInt($("#ui-datepicker-div .ui-datepicker-month :selected").val()) + 1;
			if (("" + month).length == 1) { month = "0" + month; }
			var date			=	year + "-" + month;
			$(this).val(date);
		}
	}).datepicker("show");
}

//	�뚯씪 �ㅼ슫
function downFile(file, dname, path)
{
	procFrame.location.href		=	"/common/commonPage/downFile.php?path=" + path + "&file=" + file + "&dname=" + dname;
}
//	�뚯씪 �ㅼ슫

//	dialog alert
function digAlert(msgTxt, goLink)
{
	if (msgTxt) {
		$( "#dialog-message" ).html(msgTxt);
		$( "#dialog-message" ).dialog({
			resizable			:	false,
			modal				:	true,
			closeOnEscape		:	false,
			open				:	function(event, ui) {
				$(".ui-widget-header").remove();														//	�곷떒 ���댄� �쒓굅
				$(".ui-dialog-titlebar-close", $(this).parent()).hide();								//	close 踰꾪듉 �쒓굅
				$(".ui-dialog").css("z-index",10000);
				$(".ui-widget-overlay").css("z-index",9999);
				$("body").css("overflow","hidden");
			},
			close				:	function(event, ui) {
				$("body").css("overflow","auto");														//	close �� �ㅽ겕濡ㅻ컮 �놁뼱吏��� �꾩긽 留됯린
			},
			buttons				:	[
				{
					text: "�� ��",
					"class" : "btn btn-primary btn-xs",
					click: function() {
						$( this ).dialog( "close" );
						if (goLink) {
							location.href = goLink;
						}
					} 
				}
			]
		});
	} else {
		if (goLink) {
			location.href		=	goLink;
		}
	}
}
//	dialog alert

//	iframe dialog alert
function digAlertFrame(msgTxt, goLink)
{
	if (msgTxt) {
		$( "#dialog-message", parent.document ).html(msgTxt);
		$( "#dialog-message", parent.document ).dialog({
			resizable			:	false,
			modal				:	true,
			title				:	"�뺤씤",
			closeOnEscape		:	false,
			position			:
			{
				my					:	"center",
				at					:	"center",
				of					:	window.top,
				collision			:	"none"
			},
			open				:	function(event, ui)
			{
				$(".ui-widget-header").remove();														//	�곷떒 ���댄� �쒓굅
				$(".ui-dialog-titlebar-close", $(this).parent()).hide();								//	close 踰꾪듉 �쒓굅
				$(".ui-dialog").css("z-index",10000);
				$(".ui-widget-overlay").css("z-index",9999);
				$("body").css("overflow","hidden");
			},
			close				:	function(event, ui)
			{
				$("body").css("overflow","auto");														//	close �� �ㅽ겕濡ㅻ컮 �놁뼱吏��� �꾩긽 留됯린
			},
			buttons				:
			[{
				text			:	"�� ��",
				"class"			:	"btn btn-primary btn-xs",
				click			:	function()
				{
					$( this ).dialog( "close" );
					if (goLink) {
						location.href = goLink;
					}
				}
			}]
		});
	} else {
		if (goLink) {
			location.href		=	goLink;
		}
	}
}
//	iframe dialog alert

//	dialog confirm
function digConfirm(msg, frm, url, target, frame)
{
	$( "#dialog-message" ).html(msg);
	$( "#dialog-message" ).dialog({
		resizable				:	false,
		modal					:	true,
		title					:	"�뺤씤",
		width					:	"auto",
		height					:	"auto",
		autoResize				:	true,
		closeOnEscape			:	false,
		open					:	function(event, ui)

		{
			$(".ui-widget-header").remove();														//	�곷떒 ���댄� �쒓굅
			$(".ui-dialog-titlebar-close", $(this).parent()).hide();								//	close 踰꾪듉 �쒓굅
			$(".ui-dialog").css("z-index",10000);
			$(".ui-widget-overlay").css("z-index",9999);
			$("body").css("overflow","hidden");
		},
		close					:	function(event, ui)
		{
			$('body').css('overflow','auto');														//	close �� �ㅽ겕濡ㅻ컮 �놁뼱吏��� �꾩긽 留됯린
		},
		buttons					:
		{
			"�뺤씤"				:	function()
			{
				if (frame == "post") {
					frm.action					=	url;
					frm.target					=	target;
					frm.submit();
				} else if (frame == "frame") {
					parent.location.href		=	url;
				} else if (frame == "top") {
					top.location.href			=	url;
				} else {
					location.href				=	url;
				}
			},
			"痍⑥냼"				:	function()
			{
				$( this ).dialog( "close" );
			}
		}
	});
}
//	dialog confirm

//	�꾩껜泥댄겕
function allChecked(el, target_el)
{
	var isChecked				=	$("."+el).prop('checked');
	if(isChecked)	$("."+target_el).prop('checked', true);
	else			$("."+target_el).prop('checked', false);
}

//	泥댄겕�� 諛뺤뒪�섎웾泥댄겕
function checkedCount(target_el)
{
	var count					=	$("."+target_el+":checked").size();
	return count;
}

//	�좏슚�깃��� �レ옄留�
function checkNumber(num)
{
	var pattern					=	/^[0-9]+$/;
	if(!pattern.test(num))	return false;
	else					return true;
}

//	�뚯닔�� �좏슚�깃���
function checkfloat(num, j)
{
	if (j == "") {
		j						=	0;
	}

	if(num.match(/\./))
	{
		var numArr				=	num.split(".");

		if (numArr[1] == '') {alert('�レ옄留� �낅젰媛��ν빀�덈떎'); return false;}

		if (!checkNumber(delComma(numArr[0]))) { alert('�レ옄留� �낅젰媛��ν빀�덈떎'); return false;}
		if (!checkNumber(numArr[1])) { alert('�レ옄留� �낅젰媛��ν빀�덈떎'); return false;}

		//	�뚯닔�� �먮━�� 寃���
		if (numArr[1].length > j){
			alert('�뚯닔�먯� ' + j + '�먮━源뚯� �낅젰媛��� �⑸땲��');
			return false;
		}
	}
	else
	{
		if (!checkNumber(delComma(num))) { alert('�レ옄留� �낅젰媛��ν빀�덈떎'); return false;}
		
	}
	return true;
}

//	1000�⑥쐞 , 李띻린
function number_format(numstr, ret)
{
	numstr						=	delComma(numstr);
	numstr						=	setComma(numstr);
	if(ret)
	ret.value					=	numstr;
	return numstr;
}

function setComma(numstr)
{
	numstr						=	String(numstr);
	var re0						=	/^(-?\d+)(\d{3})($|\..*$)/;
	if (re0.test(numstr))
		return numstr.replace(re0,
			function(str,p1,p2,p3)
			{
				return setComma(p1) + "," + p2 + p3;
			}
		);
	else
	return numstr;
}

//	肄ㅻ쭏��젣
function delComma(numstr)
{
	numstr						=	String(numstr);
	/*
	if (numstr == '') return '0';
	if (numstr == '0') return '0';
	if (numstr == '-0') return '-';
	if (numstr == '0-') return '-0';
	*/
	if (numstr == '') return '';
	if (numstr == '0') return '0';
	if (numstr == '-0') return '-';
	if (numstr == '0-') return '-0';
	//numstr					=	numstr.replace(/[^\d\.-]/g,'');	�レ옄媛��꾨땲硫� 紐⑤몢吏���
	numstr						=	String(numstr.match(/^-?\d*\.?\d*/));
	numstr						=	numstr.replace(/^(-?)(\d*)(.*)/,
		function(str,p1,p2,p3) {
			p2					=	(p2>0) ? String(parseInt(p2,10)) : '';
			return p1 + p2 + p3;
		}
	);
	return numstr;
}

//	�レ옄�� backspace留� �낅젰
function onlyNumber2()
{
	if(!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8)) {
		event.returnValue = false;
	}
}

//	�섏씠吏��대룞
function pageMove(url)
{
	location.href				=	url;
}

//	利먭꺼 李얘린 異붽�
$(document).ready(function()
{
	$('#favorite').on('click', function(e)
	{
		var bookmarkURL			=	window.location.href;
		//var bookmarkURL		=	parent.location.href;											//	�곸쐞 URL �곸슜 ��
		var bookmarkTitle		=	document.title;
		var triggerDefault		=	false;

		if (window.sidebar && window.sidebar.addPanel) {
			// Firefox version < 23
			window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
		} else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
			// Firefox version >= 23 and Opera Hotlist
			var $this			=	$(this);
			$this.attr('href', bookmarkURL);
			$this.attr('title', bookmarkTitle);
			$this.attr('rel', 'sidebar');
			$this.off(e);
			triggerDefault		=	true;
		} else if (window.external && ('AddFavorite' in window.external)) {
			// IE Favorite
			window.external.AddFavorite(bookmarkURL, bookmarkTitle);
		} else {
			// WebKit - Safari/Chrome
			alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D �ㅻ� �뚮윭 利먭꺼李얘린�� �깅줉�섏떎 �� �덉뒿�덈떎.');
		}

		return triggerDefault;
	});
});
//	利먭꺼 李얘린 異붽�


//	�몃뱶�� 踰덊샇 �섏씠��(-) �먮룞�낅젰
function phoneAutoHypen(obj) {
	var value					=	$(obj).val();
		value					=	fn(value);
		value					=	value.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
	$(obj).val(value);
}
//	�몃뱶�� 踰덊샇 �섏씠��(-) �먮룞�낅젰

//	�뺢퇋�앹쓣 �댁슜�� �レ옄留� 異붿텧
function fn(str){
	var res;
	res							=	str.replace(/[^0-9]/g,"");
	return res;
}