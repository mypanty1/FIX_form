javascript:(function(){if(document.title!='InetcoreResponder'&&(window.location.href.includes('https://fx.mts.ru')||window.location.href.includes('http://inetcore.mts.ru/fix')||window.location.href.includes('http://pre.inetcore.mts.ru/fix'))){
	document.title='InetcoreResponder';
	
	/*app communication*/
	let timeout=1000;/*1sec*/
	let lastStr='';
	let lastObj={};/*dev*/
	function sendStr(type='',data=null,uid='unknown_'+Date.now()){
		let str=JSON.stringify({
			'type':type,
			'data':data,
			'uid':uid,
		});
		lastStr=str;
		window.AppInventor.setWebViewString(str);
	};
	let readWebString=setTimeout(function rws(){
		let str=window.AppInventor.getWebViewString();
		if(str!=lastStr){
			lastStr=str;
			lastObj=JSON.parse(str);/*"{"data":{"inetcore":{"type":"post","url":"/call/main/get_user_data","prm":null}},"uid":"uid_1612004586606"}"*/
			if(lastObj.uid&&lastObj.data&&lastObj.data.inetcore){
				switch(lastObj.data.inetcore.type){
					case'get':
						httpGet(lastObj.data.inetcore.url,true).then(function(data){
							sendStr('data',data,lastObj.uid);
						});
					break;
					case'post':
						httpPost(lastObj.data.inetcore.url,lastObj.data.inetcore.prm,true).then(function(data){
							sendStr('data',data,lastObj.uid);
						});
					break;
					default:
						sendStr('error',lastObj.data,lastObj.uid);
				};
			};
		};
		readWebString=setTimeout(rws,timeout);
	},timeout);
	
	window.AppInventor.setWebViewString('{"responder":"'+document.title+'"}');

}else{console.log(document.title)}}());