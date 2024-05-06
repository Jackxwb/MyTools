var data = null;

function jsReadFiles(files,funcionname) {
	var wait = true;
//	console.log("File length:"+files.length)
//	for(var i=0;i<files.length;i++){
//		next=false;
//		console.log(file);
//		var file = files[i];
		var file = files[0];
        var reader = new FileReader();
        if(/image+/.test(file.type)){//判断文件是不是imgage类型
            //$('body').append('<div>'+file.webkitRelativePath+'</div>');
            reader.onload = function() {
            	wait=false;
            	data=this.result;
//          	console.log(data)
//				return data;
				setTimeout(funcionname+'("'+data+'")',1);
            }
            reader.readAsDataURL(file);
        } else {
            reader.onload = function() {
//              var redata = createtable(this.result);
                $('body').append(this.result);
            }
            reader.readAsText(file);
//          while(true){
//          	if(wait==false)
//          	return data;
//          }
        }
//	}
}