javascript:(function(){if(document.title!='Inetcore_'&&document.title!='InetcoreResponder'&&(window.location.href.includes('https://fx.mts.ru')||window.location.href.includes('http://inetcore.mts.ru/fix')||window.location.href.includes('http://pre.inetcore.mts.ru/fix'))){
	document.title='Inetcore_';
	let addJS=document.createElement('script');
	addJS.src='https://mypanty1.github.io/FIX_form/InetcoreResponder.js';
	document.body.appendChild(addJS);
}}());