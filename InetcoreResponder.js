javascript:(function(){if(document.title!='InetcoreResponder'&&(window.location.href.includes('https://fx.mts.ru')||window.location.href.includes('http://inetcore.mts.ru/fix')||window.location.href.includes('http://pre.inetcore.mts.ru/fix'))){
	document.title='InetcoreResponder';
	/*2046*/
	/*app communication*/
	let timeout=1000;/*01sec*/
	let lastStr='';
	let uidData={};
	let jsonObj={};
	function sendStr(type='',from_inetcore=false,uid='unknown-'+Date.now()){
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
					/*проверка на доступность респондера*/
					case'echo_responder':/*"{"to_inetcore":{"type":"echo_responder"},"uid":"uid-1612004586606"}"*/
						uidData[jsonObj.uid]='responder_ok';
						sendStr('data','responder_ok',jsonObj.uid);
					break;
					/*проверка на доступность методов инеткора*/
					case'echo_inetcore':/*"{"to_inetcore":{"type":"echo_inetcore"},"uid":"uid-1612004586606"}"*/
						if(document.getElementById('ptvtb-app')/*typeof httpGet=='function'&&typeof httpPost=='function'*/){
							uidData[jsonObj.uid]='inetcore_ok';
							sendStr('data','inetcore_ok',jsonObj.uid);
						}else{
							uidData[jsonObj.uid]=false;
							sendStr('data',false,jsonObj.uid);
						};
					break;
					/*get запрос в инеткор*/
					case'get':/*"{"to_inetcore":{"type":"get","url":"/call/main/get_user_data","prm":null},"uid":"uid-1612004586606"}"*/
						httpGet(jsonObj.to_inetcore.url,true).then(function(data){
							uidData[jsonObj.uid]=data;/*console.log(JSON.stringify(uidData[jsonObj.uid]));*/
							sendStr('data',data,jsonObj.uid);
						});
					break;
					/*post запрос в инеткор*/
					case'post':/*"{"to_inetcore":{"type":"post","url":"/call/main/get_user_data","prm":null},"uid":"uid-1612004586606"}"*/
						httpPost(jsonObj.to_inetcore.url,jsonObj.to_inetcore.prm,true).then(function(data){
							uidData[jsonObj.uid]=data;/*console.log(JSON.stringify(uidData[jsonObj.uid]));*/
							sendStr('data',data,jsonObj.uid);
						});
					break;
					/*запрос недошедшего сообщения от респондера*/
					case'uid_miss':/*"{"to_inetcore":{"type":"uid_miss","uid_miss":"uid-1612004586111"},"uid":"uid-1612004586222"}"*/
						/*sendStr('data',uidData[jsonObj.to_inetcore.uid_miss],jsonObj.uid);*/
						sendStr('data',uidData[jsonObj.to_inetcore.uid_miss],jsonObj.to_inetcore.uid_miss);
					break;
					/*сообщени от респондера принято, удалить из кэша*/
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
