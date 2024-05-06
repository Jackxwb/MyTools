var MySerMess = new Array();
function loadmess(funname){
	$.ajax({
		type:"get",
		url:"ServerInfo/data.txt",
		async:false,
		dataType:"xml",
		success:function(dat){
//			setTimeout(funName+"('<xml>"+dat.responseText+"</xml>')",1)
			showMess("<xml>"+dat.responseText.toString()+"</xml>",funname)
		},
		error:function(dat){
//			setTimeout(funName+"('<xml>"+dat.responseText+"</xml>')",1)
			showMess("<xml>"+dat.responseText.toString()+"</xml>",funname)
		}
	});
}
function showMess(dat,funname){
//	console.log("---")
//	console.log(dat);
//	console.log("---")
	MySerMess["ip"] = $(dat).find("ipaddress").text()
	//disk
	MySerMess["hdd_z"] = $(dat).find("hdd").text().split(",")[0]
	MySerMess["hdd_u"] = $(dat).find("hdd").text().split(",")[1]
	//memory
	MySerMess["mem_z"] = $(dat).find("mem").text().split(",")[0]
	MySerMess["mem_u"] = $(dat).find("mem").text().split(",")[1]
	//internet
	MySerMess["bw_z"] = $(dat).find("bw").text().split(",")[0]
	MySerMess["bw_u"] = $(dat).find("bw").text().split(",")[1]
	//UpdateTime
	MySerMess["date"] = $(dat).find("date").text()
	
	if(funname!=undefined)
		setTimeout(funname+"("+MySerMess.join(",")+")",1);
	
	return MySerMess;
}