javascript:(function(){if(document.title!='InetcoreResponder'&&(window.location.href.includes('https://fx.mts.ru')||window.location.href.includes('http://inetcore.mts.ru/fix')||window.location.href.includes('http://pre.inetcore.mts.ru/fix'))){
	document.title='InetcoreResponder';
	
	/*app communication*/
	let timeout=100;/*01sec*/
	let lastStr='';
	const uidData={};
	let jsonObj={};
	function sendStr(type='',from_inetcore=null,uid='unknown_'+Date.now()){
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
			jsonObj=JSON.parse(str);/*"{"to_inetcore":{"type":"post","url":"/call/main/get_user_data","prm":null},"uid":"uid_1612004586606"}"*/
			if(jsonObj.uid&&jsonObj.to_inetcore){
				switch(jsonObj.to_inetcore.type){
					case'get':
						httpGet(jsonObj.to_inetcore.url,true).then(function(data){
							uidData[jsonObj.uid]=data;
							sendStr('data',data,jsonObj.uid);
						});
					break;
					case'post':
						httpPost(jsonObj.to_inetcore.url,jsonObj.to_inetcore.prm,true).then(function(data){
							uidData[jsonObj.uid]=data;
							sendStr('data',data,jsonObj.uid);
						});
					break;
					case'uid_miss':
						if(uidData[jsonObj.to_inetcore.uid]){
							sendStr('data',uidData[jsonObj.to_inetcore.uid],jsonObj.uid);
						}else{
							sendStr('error',jsonObj.to_inetcore.uid,jsonObj.uid);
						};
					break;
					case'uid_ok':
						uidData[jsonObj.to_inetcore.uid]=false;
					break;
					case'echo':
						sendStr('echo','responder ok','uid_echo');
					break;
					default:
						sendStr('error',jsonObj.to_inetcore,jsonObj.uid);
				};
			};
		};
		readWebString=setTimeout(rws,timeout);
	},timeout);
	document.getElementsByTagName('body')[0].insertAdjacentHTML('afterBegin',`<div>`+document.title+`</div>`);
	window.AppInventor.setWebViewString('{"responder":"'+document.title+'"}');

}else{console.log(document.title)}}());
