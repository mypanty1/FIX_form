javascript:(function(){if(document.title!='InetcoreResponder'&&(window.location.href.includes('https://fx.mts.ru')||window.location.href.includes('http://inetcore.mts.ru/fix')||window.location.href.includes('http://pre.inetcore.mts.ru/fix'))){
	document.title='InetcoreResponder';
	/*1728*/
	/*app communication*/
	let timeout=1000;/*01sec*/
	let lastStr='';
	const uidData={};
	let jsonObj={};
	function sendStr(type='',from_inetcore=null,uid='unknown-'+Date.now()){
		let str=JSON.stringify({
			'from_inetcore':from_inetcore,
			'type':type,
			'uid':uid,
		});
		lastStr=str;
		window.AppInventor.setWebViewString(str);
	};
	let readWebString=setTimeout(function rws(){
		let str=window.AppInventor.getWebViewString();
		if(str!=lastStr){
			lastStr=str;
			jsonObj=JSON.parse(str);
			if(jsonObj.uid&&jsonObj.to_inetcore){
				switch(jsonObj.to_inetcore.type){
					case'echo':/*"{"to_inetcore":{"type":"echo"},"uid":"uid-1612004586606"}"*/
						sendStr('data','echo_ok',jsonObj.uid);
					break;
					case'get':/*"{"to_inetcore":{"type":"get","url":"/call/main/get_user_data","prm":null},"uid":"uid-1612004586606"}"*/
						httpGet(jsonObj.to_inetcore.url,true).then(function(data){
							uidData[jsonObj.uid]=data;console.log(JSON.stringify(uidData[jsonObj.uid]));
							sendStr('data',data,jsonObj.uid);
						});
					break;
					case'post':/*"{"to_inetcore":{"type":"post","url":"/call/main/get_user_data","prm":null},"uid":"uid-1612004586606"}"*/
						httpPost(jsonObj.to_inetcore.url,jsonObj.to_inetcore.prm,true).then(function(data){
							uidData[jsonObj.uid]=data;console.log(JSON.stringify(uidData[jsonObj.uid]));
							sendStr('data',data,jsonObj.uid);
						});
					break;
					case'uid_miss':/*"{"to_inetcore":{"type":"uid_miss","uid_miss":"uid-1612004586111"},"uid":"uid-1612004586222"}"*/
						sendStr('data',uidData[jsonObj.to_inetcore.uid_miss]||false,jsonObj.uid);
					break;
					case'uid_ok':/*"{"to_inetcore":{"type":"uid_ok","uid_ok":"uid-1612004586111"},"uid":"no_uid"}"*/
						uidData[jsonObj.to_inetcore.uid_ok]=false;
					break;
					default:
						sendStr('type-error',jsonObj.to_inetcore,jsonObj.uid);
				};
			};
		};
		readWebString=setTimeout(rws,timeout);
	},timeout);
	document.getElementsByTagName('body')[0].insertAdjacentHTML('afterBegin',`<div>`+document.title+`</div>`);
	window.AppInventor.setWebViewString('{"responder":"'+document.title+'"}');

}else{console.log(document.title)}}());
