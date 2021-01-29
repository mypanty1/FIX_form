javascript:(function(){
	
if(document.title!='Inetcore FIX_form'&&(window.location.href.includes('https://fx.mts.ru')||window.location.href.includes('http://inetcore.mts.ru/fix')||window.location.href.includes('http://pre.inetcore.mts.ru/fix'))){
	document.title = 'Inetcore FIX_form';
	
	/*todo*/
	/*ок*//*чекбокс пресет новосибирск*/
	/*in process*//*task-tile*/
	/*createSelectBuildingTile обработать выбор дома из списка близкостоящих*/
	/*поменять генератор объектов и дизайн*/
	/*добавить кнопки редактировать/удалить/создать/отправить*/
	/*генератор дрс по шаблону*/
	let dev=false;
	let input='';
	if(dev){
		window.AppInventor={
			setWebViewString:function(str){console.log(str)},
			getWebViewString:function(){return input},
		};
	};
	function initApp(){
		if(document.getElementsByTagName('link')[1].rel=='stylesheet'){document.getElementsByTagName('link')[1].remove()};
		let addCSS = document.createElement('style');
		addCSS.type = 'text/css';
		let myCSS = `
		body{margin:unset;height:100%;background-color:#f1f1f1;display:flex;flex-direction:column;box-sizing:border-box;font-size:12px;}
		.chkb{}
		.search-input{width:100%;font-size:14px;}
		.btn{height:22px;font-size:14px;padding:1px 4px;}
		/*hr{padding:0px;margin:8px 0px;border:0;border-top:1px solid rgba(34,30,30,0.15);}*/
		
		
		
		.mobile-tile{box-shadow:0px 7px 16px 0px rgba(0,0,0,0.12);padding:4px;margin-bottom:4px;}
		.tile-search{display:inline-flex;background-color:#fff;order:-1;}
		.tile{}
		.tile-warning{background-color:#fee;}
		.tile-select{background-color:#fed;}
		.tile-task{display:inline-flex;background-color:#fff;}
		.tile-task.hide{display:none;}
			.create-task{}
				.task-input{font-size:12px;width:100%;resize:vertical;min-height:16px;}
			.task-new{background-color:aliceblue;}
			.task-start{background-color:bisque;}
			.task-reject{background-color:darksalmon;}
			.task-end{background-color:darkseagreen;}
				.task-id{margin-right:auto;}
				.task-state{}
				.task-date{margin-left:auto;}
		.tile-building{background-color:#fff;}
			.tab-controller{display:inline-flex;width:100%;margin-bottom:2px;}
				.tab-controller>.title{font-size:12px;line-height:20px;margin-right:2px;}
				.btns-row-scroll{overflow-x:overlay;}
					.btns-row{display:inline-flex;}
						.tab-btn{font-size:14px;width:22px;padding:0px 0px;margin-left:1px;margin-right:1px;}
						.tab-btn:disabled{font-weight:bold;}
			.entrances-row{}
				.entrance-tab{display:block;}
				.entrance-tab.hide{display:none;}
					.entrance{display:flex;flex-direction:column;}
						.entrance-head{font-size:10pt;background-color:#eee;border: 1px solid #000;border-bottom:unset;}
							.entrance-title{font-size:8pt;line-height:12px;color:#000;}
							.el-input{height:9px;font-size:8pt;line-height:10px;text-align:left;}
						.floors-over{display:flex;flex-direction:column-reverse;background-color:#eee;border: 1px solid #000;border-top-color:#ccc;border-bottom-color:#ccc;}
						.floors-under{display:flex;flex-direction:column;background-color:#eee;border: 1px solid #000;border-top:unset;}
							.floor{display:inline-grid;grid-template-columns:20px auto;border-top:1px solid #000;/*border-bottom:1px solid #000;*//*margin-top:1px;*//*margin-bottom:1px;*/}
								.floor-number{line-height:14px;height:14px;color:gray;/*margin:auto;*/text-align:center;}
								.floor-objects{}
									.floor-racks{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;}
										.rack{width:max-content;height:fit-content;min-height:12px;margin:1px;border:1px solid #000;border-radius:2px;background-color:#aaa;}
										.type-L{width:108px;}
										.type-CU{width:48px;}
											.rack-head{}
												.rack-title{line-height:12px;font-size:8pt;color:#000;}
											.rack-devices{display:flex;flex-direction:column;/*flex-direction:row;*//*flex-wrap:wrap;*/}
												.device{width:104px;height:12px;margin-left:1px;margin-right:1px;margin-bottom:1px;border:1px solid #000;background-color:#fff;display:flex;flex-direction:column;}
												.type-CU .device{width:44px;}/*устройство/пп в рк*/
												.type-ETH{background-color:#eff;}
												.type-OP{background-color:#ffe;}
												.type-A{background-color:#ffe;}
												.type-SBE{background-color:#eef;/*height:20px;*/}
												.type-OSW{background-color:#eef;}
												.type-FAMP{background-color:#eef;}
												.type-MBH{background-color:#eef;/*height:20px;*/}
												.type-MPLS{background-color:#eef;/*height:20px;*/}
												.type-OLT{background-color:#eef;/*height:20px;*/}
												.type-IP{background-color:#fef;}
												.type-CPE{background-color:#fef;}
												.type-Voip{background-color:#fef;}
												.type-CR{background-color:#ddd;}
												.type-PP{background-color:#ddd;}
												.without{width:44px;margin-top:1px;}
													.device-head{display:inline-flex;}
														.device-led{width:6px;min-width:6px;}
														.online{background-color:green;}
														.offline{background-color:red;}
														.nomon{background-color:#ddd;}
														.device-title{font-size:8pt;color:#000;}
															.title-norm{display:block;}
															.type-CU .title-norm{display:none;}
															.without .title-norm{display:none;}
															.title-short{display:none;}
															.type-CU .title-short{display:block;}
															.without .title-short{display:block;}
									.floor-flats{display:flex;flex-direction:row;flex-wrap:wrap;}
										.flat-none{width:100%;height:16px;line-height:16px;font-size:14px;margin:auto;text-align:center;color:#a2a2a2;}
										.flat{width:24px;min-width:24px;height:36px;line-height:12px;font-size:12px;margin:1px;border: 1px solid #a2a2a2;color:#a2a2a2;border-radius:2px;text-align:center;}
										.flat-service{border-color:#000;}
										.service-inet{}
										.service-tv{}
										.service-voip{}
										.service-unknown{}
											.service{display:none;}
											.red{display:block;color:tomato;}
											.green{display:block;color:forestgreen;}
		.hide{display:none;}
		`;
		addCSS.appendChild(document.createTextNode(myCSS));document.head.appendChild(addCSS);
		document.getElementsByTagName('body')[0].hidden=true;document.getElementsByTagName('body')[0].innerHTML='';document.getElementsByTagName('body')[0].insertAdjacentHTML('afterBegin',`	
			<div class="mobile-tile tile-search">
				<button type="button" class="btn" id="btn_clsAll">X</button>
				<input type="checkbox" class="chkb" id="chkb_nsk" onchange="if(event.target.checked){document.getElementById('input_search').setAttribute('placeholder','адрес в новосибирске');document.getElementById('input_search').setAttribute('city','новосибирск ');}else{document.getElementById('input_search').setAttribute('placeholder','адрес');document.getElementById('input_search').setAttribute('city','');};" checked>
				<input type="text" class="search-input" id="input_search" city="новосибирск " value="романова 60" placeholder="адрес в новосибирске">
				<button type="button" class="btn" id="btn_search">поиск</button>
				<button type="button" class="btn hide" id="btn_getTaskList">задачи</button>
			</div>`
		);/*55.04345,82.97501 леж8*//*55.03165,83.01073 выс5*//*ду0000000054КР-04082*//*ду0000000054КР-04203*/
		document.getElementsByTagName('body')[0].hidden=false;
		document.getElementById('input_search').addEventListener('keydown',function(e){if(e.keyCode===13){document.getElementById('btn_search').click();}});
		document.getElementById('btn_search').addEventListener('click',function(){clsTiles();let pattern=document.getElementById('input_search').getAttribute('city')+document.getElementById('input_search').value.trim();if(pattern){searchByAddress(pattern)}});
		document.getElementById('btn_clsAll').addEventListener('click',function(){clsTiles();document.getElementById('input_search').value='';});
		document.getElementById('btn_getTaskList').addEventListener('click',getTaskList);
		window.AppInventor.setWebViewString('{"js_ok":"true"}');
		let timer=setTimeout(delApp,100);function delApp(){if(document.getElementById('ptvtb-app')){document.getElementById('ptvtb-app').remove();clearTimeout(timer);}else{timer=setTimeout(delApp,100);};};
		
	};initApp();
	
	function clsTiles(){
		document.getElementById('btn_getTaskList').classList.add('hide');
		let tiles=document.getElementsByClassName('tile');
		while(tiles.length>0){tiles[0].remove();};
	};
	
	function searchByAddress(pattern,apikey='96902d94-ce02-4125-9ca8-b028c28b7772'){/*поиск координат по адресу в яндекс*/
		/*https://api-maps.yandex.ru/2.1/?apikey=96902d94-ce02-4125-9ca8-b028c28b7772&lang=ru-RU*/
		let resp;
		let xhr=new XMLHttpRequest();
		xhr.open('GET','https://geocode-maps.yandex.ru/1.x/?format=json&apikey='+apikey+'&geocode='+pattern+'&result=1&lang=ru_RU');
		xhr.responseType='json';
		xhr.send();
		xhr.onload=function(){
			if(xhr.status!=200){
				/*console.log(`xhr.onload ${xhr.status}:${xhr.statusText}`);*/
				showError('address not found');
			}else{
				/*console.log(`xhr.onload_200 ${xhr.response}`);*/
				resp=xhr.response;
				let coordinates=resp.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.replace(' ',',').split(',').reverse().join(',');/*55.03165,83.01073*/
				if(coordinates){
					searchByCoords(coordinates);
				}else{
					showError('location error');
					searchByCoords(pattern,false);/*костыль*/
				};
			};
		};
		xhr.onprogress=function(event){
			if(event.lengthComputable){
				/*console.log(`xhr.onprogress ${event.loaded} из ${event.total}`);*/
			}else{
				/*console.log(`xhr.onprogress ${event.loaded}`);*/
			};
		};
		xhr.onerror=function(){
			/*console.log(`xhr.onerror`);*/
			showError('geocoder error');
			searchByCoords(pattern,false);/*костыль*/
		};
	};
	
	function searchByCoords(pattern,cls=true){
		if(cls){clsTiles()};/*костыль*/
		httpPost('/call/device/search?fresh='+Math.random(),{'pattern':pattern},true).then(function(result){
			if(result){
				switch(result.key){
					case'building':/*по имени узла*/
						switch(result.type){
							case'building':/*узел ду*/
							case'building_mu':/*узел му*/
								createBuildingTile(result);
							break;
							case'warning':/*ду000000054КР-00340*/
							default:
								createErrorTile(result);
						};
					break;
					case'building_id':/*по id площадки*/
						switch(result.type){
							case'building_list':/*ду+му(или ду+ду?)*//*9135155037513569210*/
								var DU_or_MU_only=result.data.filter(function(node){return node.type=='ДУ'||node.type=='МУ'});
								if(DU_or_MU_only&&DU_or_MU_only.length>0){
									createBuildingTile({'data':Object.assign(DU_or_MU_only[0],{'nodes':DU_or_MU_only})});
								}else{
									createSelectBuildingTile(result);
								};
							break;
							case'building':/*ду*//*9135155037413562085*/
							case'building_mu':/*узел му*//*8101638987013413752*/
								createBuildingTile(result);
							break;
							default:
								createErrorTile(result);
						};
					break;
					case'coordinates':/*поиск по координатам*/
						switch(result.type){
							case'building':/*узел ду*/
							case'building_mu':/*узел му*/
								createBuildingTile(result);
							break;
							case'building_list':/*список узлов на адресе или рядом*//*55.037087,82.929278*/
								createSelectBuildingTile(result);
							break;
							case'warning':/*нет узлов по координатам*/
							default:
								createErrorTile(result);
						};
					break;
					case'device':/*поиск разрешенных устройств по имени Nioss*/
						switch(result.type){
							case'device':/*OP_25KR_00853_1*/
								createErrorTile(result);
							break;
							case'warning':/*OP_25KR_00853_5*/
							default:
								createErrorTile(result);
						};
					break;
					case'port':/*поиск порта по имени Smarts*/
						switch(result.type){
							case'port':/*PORT-ETH_KR_54_02227_1/1*/
								createErrorTile(result);
							break;
							case'warning':/*PORT-ETH_KR_54_02227_1/16*/
							default:
								createErrorTile(result);
						};
					break;
					case'ip':/*поиск устройства по ip*/
						switch(result.type){
							case'list':/*10.221.168.14*//*порты 10.70.18.110*/
							case'device':/*10.221.185.133*/
								createErrorTile(result);
							break;
							case'warning':/*10.70.34.67*/
							default:
								createErrorTile(result);
						};
					break;
					case'mac':/*поиск по маку*/
						switch(result.type){
							case'mac':
								createErrorTile(result);
							break;
							case'warning':/*08c6.b3c0.397d*/
							default:
								createErrorTile(result);
						};
					break;
					case'account':/*поиск по лс*/
						switch(result.type){
							case'list':/*список дублей по регионам*//*2-042-0023253*//*нет, list возвращает lbsv*/
							case'account':/*абонент*/
								createErrorTile(result);
							break;
							case'warning':/*6-091-0000000*/
							default:
								createErrorTile(result);;
						};
					break;
					default:
						createErrorTile(result);
				};
			}else{
				showError(pattern);
			};
		});
	};
	
	function showError(str){createErrorTile({'text':str})};/*обернуть ошибку*/
	function createErrorTile(result){/*ошибку поиска*/
		let newTile=`
			<div class="mobile-tile tile `+((result.data)?('tile-unknown'):('tile-warning'))+`">
				<div class="building-head">
					`+result.text||result.pattern+`
				</div>
			</div>`;
		document.getElementsByClassName('tile-search')[0].insertAdjacentHTML('afterEnd',newTile)
	};
	
	function createSelectBuildingTile(result){/*todo list*/
		let dataStr='';
		for(let param in result.data){dataStr+=`<div>&nbsp;&nbsp;&nbsp;`+param+`:<span>`+result.data[param]+`</span></div>`};
		let newTile=`
			<div class="mobile-tile tile tile-select">
				<div class="el-head">
					<div>pattern:<span>`+result.pattern+`</span></div>
					<div>key:<span>`+result.key+`</span></div>
					<div>type:<span>`+result.type+`</span></div>
					<div>data:</div>`
					+dataStr+`
				</div>
			</div>`;
		document.getElementsByClassName('tile-search')[0].insertAdjacentHTML('afterEnd',newTile)
	};
	
	function getTaskList(){
		/*document.getElementsByClassName('tile-building').id*/
	};
	
	function createTaskTile(){
		let newTile=`
			<div class="mobile-tile tile tile-task create-task">
				<textarea rows="1" class="task-input" placeholder="описание запроса"></textarea><button type="button" class="btn">отправить</button>
			</div>
			<div class="mobile-tile tile tile-task task-new">
				<div class="task-id">T1611922731347_mypanty1</div><div class="task-state">создан:</div><div class="task-date">29-01-2021,18:38:33</div>
			</div>
			<div class="mobile-tile tile tile-task task-start">
				<div class="task-id">T1611922766647_mypanty1</div><div class="task-state">в работе:</div><div class="task-date">29-01-2021,19:32:44</div>
			</div>
			<div class="mobile-tile tile tile-task task-end">
				<div class="task-id">T1611922231347_mypanty1</div><div class="task-state">завершен:</div><div class="task-date">29-01-2021,13:14:25</div>
			</div>
			<div class="mobile-tile tile tile-task task-reject">
				<div class="task-id">T1613332731347_mypanty1</div><div class="task-state">отклонен:</div><div class="task-date">29-01-2021,20:41:45</div>
			</div>
		`;
		document.getElementsByClassName('tile-search')[0].insertAdjacentHTML('afterEnd',newTile);
	};
	
	function createBuildingTile(buildingObj){/*building*/
		function trimAddress(addr){let addrArr=addr.split(', ').reverse();return addrArr[1].replace(/\s/g,'')+' '+addrArr[0].replace(/\s/g,'')};
		document.getElementById('input_search').value=trimAddress(buildingObj.data.address);
		let newTile=`
			<div class="mobile-tile tile tile-building" id="`+buildingObj.data.id+`">
				<div class="tab-controller">
					<div class="title">подъезды:</div>
					<div class="btns-row-scroll">
						<div class="btns-row" id="`+buildingObj.data.id+`.selector"><!--кнопки подъездов--></div>
					</div>
				</div>
				<div class="entrances-row" id="`+buildingObj.data.id+`.entrances"><!--табы подъездов--></div>
			</div>`;
		if(document.getElementById(buildingObj.data.id)){document.getElementById(buildingObj.data.id).remove()};/*удалить дубль если есть*/
		document.getElementsByClassName('tile-search')[0].insertAdjacentHTML('afterEnd',newTile);
		document.getElementById('btn_getTaskList').classList.remove('hide');
		getEntrances(buildingObj.data.id);
	};
	
	function getEntrances(siteid){/*сетка падиков*/
		httpPost('/call/device/site_flat_list?fresh='+Math.random(),{'siteid':siteid},true).then(function(entrances){
			if(entrances.type=='floors'||entrances.data.length>0){/*наличие падиков*/
				for(let entrance of entrances.data.filter(function(item){return !item.nioss_error})){/*перебор падиков*/
					document.getElementById(siteid+'.entrances').insertAdjacentHTML('beforeEnd',createEntrance(entrance));
					tabController('add',siteid,entrance);
					for(let floor of entrance.floor){/*перебор этажей*/
						document.getElementById(entrance.ENTRANCE_ID+((+floor.number>0)?'.over':'.under')).insertAdjacentHTML('beforeEnd',createFloor(entrance.ENTRANCE_ID,floor.number,'',floor.first,floor.last,floor.flats));
						for(let flat of floor.flats){/*перебор хат*/
							let flatHtml=document.getElementById(entrance.ENTRANCE_ID+'.flat_'+flat.number);
							flatHtml.classList.add('flat-service');
							for(let service of flat.services){/*перебор услуг в квартире*/
								switch(service.service_id){
									case'1':
										flatHtml.classList.add('service-inet');
										document.getElementById(entrance.ENTRANCE_ID+'.flat_'+flat.number+'.spd').classList.add(service.status);
									break;
									case'2':
									case'4':
									case'16':
										flatHtml.classList.add('service-tv');
										document.getElementById(entrance.ENTRANCE_ID+'.flat_'+flat.number+'.tv').classList.add(service.status);
									break;
									case'8':
										flatHtml.classList.add('service-voip');
										document.getElementById(entrance.ENTRANCE_ID+'.flat_'+flat.number+'.spd').classList.add(service.status);
									break;
									default:
										flatHtml.classList.add('service-unknown');
										document.getElementById(entrance.ENTRANCE_ID+'.flat_'+flat.number+'.tv').classList.add(service.status);
								};
							};
							for(let account of flat.subscribers){
								flatHtml.classList.add('account_'+account.account.match(/\d/g).join(''));
							};
						};
					};
					if(entrance.floor.length<=entrance.FLOOR_COUNT){/*фейковые этажи для выравнивание падиков по низу*/
						for(var f_number=0;f_number<entrance.floor[0].number;f_number++){
							document.getElementById(entrance.ENTRANCE_ID+((f_number>0)?'.over':'.under')).insertAdjacentHTML('beforeEnd',createFloor(entrance.ENTRANCE_ID,f_number));
						};
					};
				};
				tabController('first');
				httpPost('/call/device/site_rack_list?fresh='+Math.random(),{'siteid':siteid},true).then(function(racks){
					for(let rack of racks.filter(function(item){return !item.nioss_error})){
						let container=rack.ENTRANCE_ID+'.'+((rack.OFF_FLOR=='Подвал')?'podval':(rack.OFF_FLOR=='Чердак')?'cherdak':(rack.OFF_FLOR=='Технический этаж')?'tehetag':('floor_'+rack.FLOOR))+((isCU(rack.RACK_NAME))?'.rk':(isL(rack.RACK_NAME))?'.racks':'.racks');
						if(!document.getElementById(container)){/*если шкаф на этаже вне подъезда*//*ду0000000054КР-02878*/
							document.getElementById(rack.ENTRANCE_ID+((rack.OFF_FLOR=='Подвал'||rack.FLOOR<=0)?'.under':'.over')).insertAdjacentHTML('beforeEnd',createFloor(rack.ENTRANCE_ID,rack.FLOOR,((rack.OFF_FLOR=='Подвал')?'podval':(rack.OFF_FLOR=='Чердак')?'cherdak':(rack.OFF_FLOR=='Технический этаж')?'tehetag':'')));
						};
						document.getElementById(container).insertAdjacentHTML('beforeEnd',createRack(rack));
					};
					httpPost('/call/device/devices?fresh='+Math.random(),{'siteid':siteid},true).then(function(devices){
						devices.map(function(device){
							let inrack=document.getElementById(toKP(device.DEVICE_NAME));
							if(inrack){/*если есть в шкафу*/
								document.getElementById(inrack.getAttribute('inrack')+'.devices_ne').insertAdjacentHTML('beforeEnd',createDevice(device));
							}else{
								/*засунуть в фейковый шкаф, видимый из дома*/
							};
							httpPost('/call/hdm/device_ping?fresh='+Math.random(),{'device':device},true).then(function(ping){
								setPingLeds(device.DEVICE_NAME,ping.code);
							});
						});
					});
					httpPost('/call/device/patch_panels?fresh='+Math.random(),{'siteid':siteid},true).then(function(plints){
						let ppanels=plints;for(let pp of ppanels){ppanels=ppanels.concat(pp.children);};/*поднятие из топологии*/
						for(let pp of ppanels.filter(function(item){return !item.nioss_error})){
							if(pp.rack_id=='0'){/*вне шкафа*//*type-PP without*/
								let container=pp.entrance_id+'.floor_'+pp.n_floor+'.rk';
								if(!document.getElementById(container)){/*если на этаже вне подъезда*/
									document.getElementById(pp.entrance_id+((pp.n_floor<=0)?'.under':'.over')).insertAdjacentHTML('beforeEnd',createFloor(pp.entrance_id,pp.n_floor));
								};
								document.getElementById(container).insertAdjacentHTML('beforeEnd',createPP(pp));
							}else{
								let container=document.getElementById(pp.rack_id+'.devices_pp');
								if(container){/*если есть такой шкаф*/
									container.insertAdjacentHTML('beforeEnd',createPP(pp));
								}else{
									/*засунуть в фейковый шкаф, видимый из подъезда*/
								};
							};
						};
					});
				});
				
			}else if(entrances.type=='flats'){
				/*нет падиков, показать кучку квартир*/
				console.log('entrances.type==flats');
			}else{
				/*?*/
				console.log(entrances.type);
			};
		});
	};
	
	function createEntrance(entranceObj){/*падик*/
		return `
			<div class="entrance-tab" id="`+entranceObj.ENTRANCE_ID+`_tab">
				<div class="entrance" id="`+entranceObj.ENTRANCE_ID+`">
					<div class="entrance-head">
						<div class="entrance-title">
							`+entranceObj.ENTRANCE_NAME+`
							<input type="text" class="el-input input-2dig" style="width:15px;margin-left:5px;" value="`+entranceObj.ENTRANCE_NO+`" disabled>
						</div>
						<div>
							<input type="text" class="el-input input-2dig" style="width:15px;" value="`+entranceObj.FLOOR_COUNT+`" disabled>
							<input type="text" class="el-input input-4dig" style="width:30px;margin-left:10px;" value="`+entranceObj.FLAT_FROM+`" disabled>
							<input type="text" class="el-input input-4dig" style="width:30px;margin-left:5px;" value="`+entranceObj.FLAT_TO+`" disabled>
						</div>
					</div>
					<div class="floors-over" id="`+entranceObj.ENTRANCE_ID+`.over">
						`+createFloor(entranceObj.ENTRANCE_ID,'','cherdak')+`
						`+createFloor(entranceObj.ENTRANCE_ID,'','tehetag')+`
					</div>
					<div class="floors-under" id="`+entranceObj.ENTRANCE_ID+`.under">
						`+createFloor(entranceObj.ENTRANCE_ID,'','podval')+`
					</div>
				</div>
			</div>`;
	};
	
	function tabController(action,siteid,entrance){
		switch(action){
			case'add':
				document.getElementById(siteid+'.selector').insertAdjacentHTML('beforeEnd',`<button type="button" class="tab-btn" id="`+entrance.ENTRANCE_ID+`_btn" style="order:`+entrance.ENTRANCE_NO+`;">`+entrance.ENTRANCE_NO+`</button>`);
				document.getElementById(entrance.ENTRANCE_ID+'_btn').addEventListener('click',function(){tabController('select',siteid,entrance)});
				/*tabController('select',siteid,entrance);*//*замена на first*/
			break;
			case'select':
				for(let tab of document.getElementsByClassName('entrance-tab')){tab.classList.add('hide');};
				document.getElementById(entrance.ENTRANCE_ID+'_tab').classList.remove('hide');
				for(let btn of document.getElementsByClassName('tab-btn')){btn.removeAttribute('disabled');};
				document.getElementById(entrance.ENTRANCE_ID+'_btn').setAttribute('disabled','');
			break;
			case'first':
				for(let tab of document.getElementsByClassName('entrance-tab')){tab.classList.add('hide');};
				document.getElementsByClassName('entrance-tab')[0].classList.remove('hide');
				for(let btn of document.getElementsByClassName('tab-btn')){btn.removeAttribute('disabled');};
				document.getElementsByClassName('tab-btn')[0].setAttribute('disabled','');
			break;
		};
	};
	
	function createFloor(entrance_id,number='0',type='',floor_first=0,floor_last=0,flats=[]){/*этаж падика*/
		let floor={
			'cherdak':{name:'cherdak',order:'1001',title:'Ч',flats:createNoFlats('чердак')},
			'tehetag':{name:'tehetag',order:'1000',title:'Т',flats:createNoFlats('тех. этаж')},
			'podval':{name:'podval',order:'1000',title:'П',flats:createNoFlats('подвал')},
			'':{
				name:'floor_'+number,
				order:((Math.abs(+number)+10)*10),
				title:number,
				flats:((floor_first&&floor_last||flats.length>0)?createEmptyFlats(floor_first,floor_last):createNoFlats()),
			},
		}[type];
		function createNoFlats(name=''){return `<div class="flat-none">`+name+`</div>`};
		function createEmptyFlats(f_first,f_last){/*заготовки квартир на этаж*/
			let newFlatsRow='';
			for(let flat=f_first;flat<f_last+1;flat++){
				newFlatsRow+=`<div class="flat" id="`+entrance_id+`.flat_`+flat+`" style="order:`+flat+`;">
					<div>`+flat+`</div>
					<div class="service" id="`+entrance_id+`.flat_`+flat+`.spd">шпд</div>
					<div class="service" id="`+entrance_id+`.flat_`+flat+`.tv">тв</div>
				</div>`
			};		
			return newFlatsRow;
		};
		return `
			<div class="floor" id="`+entrance_id+`.`+floor.name+`" style="order:`+floor.order+`;">
				<div class="floor-number">`+floor.title+`</div>
				<div class="floor-objects" id="`+entrance_id+`.`+floor.name+`.objects">
					<div class="floor-racks" id="`+entrance_id+`.`+floor.name+`.racks"></div>
					<div class="floor-racks" id="`+entrance_id+`.`+floor.name+`.rk"></div>
					<div class="floor-flats" id="`+entrance_id+`.`+floor.name+`.flats">
						`+floor.flats+`
					</div>
				</div>
			</div>`;
	};
	
	function createRack(rackObj){/*шкаф*/
		/*let kpname=toKP(rackObj.RACK_NAME);*/
		let devices_ne=``;
		let devices_pp=``;
		for(let device of rackObj.NE_IN_RACK){
			if(isPP(device)||isCR(device)){
				devices_pp+=createPP({name:device,inrack:rackObj.RACK_NAME});
			}else{
				devices_ne+=createDevice({DEVICE_NAME:device,inrack:rackObj.RACK_NAME});
			};
		};
		let title=`<span class="title-norm">`+rackObj.RACK_NAME+`</span><span class="title-short">`+createRackTitle(rackObj)+`</span>`;
		return `
			<div class="rack `+((rackObj.RACK_NAME)?(`type-`+getType(rackObj.RACK_NAME)):`type-unknown`)+`" id="`+rackObj.RACK_ID+`" style="order:`+((rackObj.N_RACK_SITE)?rackObj.N_RACK_SITE:getNum(rackObj.RACK_NAME))+`;" title="`+rackObj.RACK_NAME+`">
				<div class="rack-head">
					<div class="rack-title">`+title+`</div>
				</div>
				<div class="rack-devices" id="`+rackObj.RACK_NAME+`.devices_ne">`+devices_ne+`</div>
				<div class="rack-devices" id="`+rackObj.RACK_ID+`.devices_pp">`+devices_pp+`</div>
			</div>`;
	};
		
	function createPP(ppObj){/*патчпанель*/
		let kpname=toKP(ppObj.name);
		if(document.getElementById(kpname)){document.getElementById(kpname).remove();};/*удаление ранее созданного от шкафа*/
		let title=`<span class="title-norm">`+kpname+`</span><span class="title-short">`+createPPTitle(ppObj)+`</span>`;
		let inrack=(ppObj.inrack)?(`inrack="`+ppObj.inrack+`"`):'';
		return `
			<div class="device type-`+getType(kpname)+((ppObj.rack_id=='0')?` without`:``)+`" id="`+kpname+`" `+inrack+` title="`+kpname+`">
				<div class="device-head">
					<div class="device-title">`+title+`</div>
				</div>
			</div>`;
	};
	
	function createDevice(deviceObj){/*устройство*/
		let kpname=toKP(deviceObj.DEVICE_NAME);
		if(document.getElementById(kpname)){document.getElementById(kpname).remove();};/*удаление ранее созданного от шкафа*/
		let title=`<span class="title-norm">`+createDeviceTitleIP(deviceObj)+`</span><span class="title-short">`+createDeviceTitle(deviceObj)+`</span>`;
		let inrack=(deviceObj.inrack)?(`inrack="`+deviceObj.inrack+`"`):'';
		return `
			<div class="device type-`+getType(kpname)+`" id="`+kpname+`" `+inrack+` title="`+kpname+`">
				<div class="device-head">
					<div class="device-led" id="`+kpname+`.ping"></div>
					<div class="device-title">`+title+`</div>
				</div>
			</div>`;
	};
	
	function setPingLeds(name,code){
		let device=document.getElementById(toKP(name)+'.ping');
		if(device){
			device.classList.remove('online','offline','nomon');
			switch(code){
				case'200':
					device.classList.add('online');
				break;
				case'400':
					device.classList.add('offline');
				break;
				default:
					device.classList.add('nomon')
			};
		};
	};
	
	function getType(name){return name.replace(/\W/g,'_').split('_')[0]};/*тип устройства*/
	function getNum(name){return name.replace(/\W/g,'_').split('_').reverse()[0]};/*номер устройства*/
	function toKP(name){return name.replace('KR','КР')};/*to Ru*/
	function toKR(name){return name.replace('КР','KR')};/*to En*/
	function isETH(name){return(getType(name)=='ETH')?true:false};
	function isOP(name){return(getType(name)=='OP')?true:false};
	/*function createDeviceTitleIP(d){return (d.IP_ADDRESS)?(createDeviceTitle(d)+'&nbsp;'+d.IP_ADDRESS):toKP(d.DEVICE_NAME)};*//*ETH#14 10.221.153.168*/
	function createDeviceTitleIP(d){return (d.IP_ADDRESS)?(getType(d.DEVICE_NAME)+'&nbsp;'+d.IP_ADDRESS):toKP(d.DEVICE_NAME)};/*ETH 10.221.153.168*/
	function createDeviceTitle(d){return getType(d.DEVICE_NAME)+'#'+getNum(d.DEVICE_NAME)};/*ETH#12*//*A#02*/
	function isPP(name){return(getType(name)=='PP')?true:false};
	function isCR(name){return(getType(name)=='CR')?true:false};
	function createPPTitle(p){return getType(p.name)+'#'+getNum(p.name)};/*PP#34*//*CR#202*/
	function createRackTitle(r){return getType(r.RACK_NAME)+'#'+getNum(r.RACK_NAME)};/*L#2*//*CU#46*/
	function isL(name){return(getType(name)=='L')?true:false};
	function isCU(name){return(getType(name)=='CU')?true:false};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}else{
	console.log(document.title);
};

}());
