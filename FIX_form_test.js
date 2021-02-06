javascript:(function(){if(document.title!='FIX_form_js.v1'&&(window.location.href.includes('https://fx.mts.ru')||window.location.href.includes('http://inetcore.mts.ru/fix')||window.location.href.includes('http://pre.inetcore.mts.ru/fix'))){
	document.title='FIX_form_js.v1';
	/*todo*/
	/*try{}catch(e){}finally{};*/
	
	let dev=false;
	let input='';
	if(dev){
		window.AppInventor={
			setWebViewString:function(str){console.log('setWebViewString:',str)},
			getWebViewString:function(){console.log('getWebViewString:',input);console.log(site);return input},
		};
	};
	
	window.AppInventor.setWebViewString('{"FIX_form":"'+document.title+'"}');
	
	document.getElementsByTagName('body')[0].hidden=true;
	let timer=setTimeout(delApp,100);
	function delApp(){
		if(document.getElementById('ptvtb-app')){
			document.getElementById('ptvtb-app').remove();
			document.getElementsByTagName('body')[0].hidden=false;
			clearTimeout(timer);
		}else{
			timer=setTimeout(delApp,100);
		};
	};
	let addCSS=document.createElement('style');addCSS.type='text/css';
	let myCSS=`
		body{margin:unset;height:100%;background-color:#f1f1f1;display:flex;flex-direction:column;box-sizing:border-box;font-size:12px;}
		input[type="checkbox"]{}
		input[type="text"]{width:100%;font-size:14px;}
		button{height:22px;font-size:14px;padding:1px 4px;}
		/*hr{padding:0px;margin:8px 0px;border:0;border-top:1px solid rgba(34,30,30,0.15);}*/
		
		
		
		.mobile-tile{box-shadow:0px 7px 16px 0px rgba(0,0,0,0.12);padding:4px;margin-bottom:4px;}
		.tile-search{display:inline-flex;background-color:#fff;order:-1;}
		.tile-search.hide{display:none;}
		.tile{}
		.tile-warning{background-color:#fee;}
		.tile-select{background-color:#fed;}
		.tile-task{background-color:#fff;}
		.task-new{background-color:aliceblue;}
		.task-start{background-color:bisque;}
		.task-reject{background-color:darksalmon;}
		.task-end{background-color:darkseagreen;}
			.task-content{width:100%;display:inline-flex;}
				.task-id{margin-right:auto;}
				.task-state{}
				.task-date{margin-left:auto;}
				.task-input{font-size:12px;width:100%;resize:vertical;min-height:16px;}
		.create-task{}
			.counters{width:100%;display:inline-grid;grid-template-columns:40% 40%}
		.tile-building{background-color:#fff;}
			.tab-controller{display:inline-flex;width:100%;margin-bottom:2px;}
				.tab-controller>.title{font-size:12px;line-height:20px;margin-right:2px;}
				.btns-row-scroll{overflow-x:overlay;}
					.btns-row{display:inline-flex;}
						.tab-btn{width:22px;padding:0px 0px;margin-left:1px;margin-right:1px;}
						.tab-btn:disabled{font-weight:bold;}
			.entrances-row{}
				.entrance-tab{display:block;}
				.entrance-tab.hide{display:none;}
					.entrance{display:flex;flex-direction:column;/*min-width:114px;width:fit-content;margin:auto;*/}
						.entrance-head{font-size:10pt;background-color:#eee;border: 1px solid #000;border-bottom:unset;}
							.entrance-title{font-size:8pt;line-height:12px;color:#000;}
						.floors-over{display:flex;flex-direction:column-reverse;background-color:#eee;border: 1px solid #000;border-top-color:#ccc;border-bottom-color:#ccc;}
						.floors-under{display:flex;flex-direction:column;background-color:#eee;border: 1px solid #000;border-top:unset;}
							.floor{display:inline-grid;grid-template-columns:20px auto;border-top:1px solid #000;/*border-bottom:1px solid #000;*//*margin-top:1px;*//*margin-bottom:1px;*/}
								.floor-number{line-height:14px;height:14px;color:gray;/*margin:auto;*/text-align:center;}
								.floor-objects{}
									.floor-racks{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;}
										.rack{width:max-content;height:fit-content;min-height:27px;margin:1px;border:1px solid #000;border-radius:2px;background-color:#aaa;}
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
									.floor-flats.floor-even{justify-content:space-between;}
									.floor-flats.floor-neven{justify-content:space-around;}
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
			.devices-without{margin-top:1em;}
		.hide{display:none;}
		.ghost{opacity:0.3;}
		
		.modal-wrapper{display:block;width:100%;height:100%;position:fixed;}
		.modal-wrapper.hide{display:none;}
			.modal{margin:1em;width:auto;min-height:100px;height:fit-content;position:relative;background-color:#fff;padding:1em;border:1px solid #000;border-radius:5px;}
				.dialog-head{width:100%;display:inline-flex;justify-content:space-between;}
					.dialog-title{font-size:16px;}
				.fields{width:100%;display:grid;grid-template-columns:auto 70%;margin-top:1em;}
					.field{border:1px solid #777;margin-bottom:2px;}
					.field-title{grid-column:1/2;border-right:unset;font-size:14px;}
					.field-input{grid-column:2/3;border-left:unset;}
						.field-input input{width:96%;height:1em;}
						.field-input select{width:100%;}
				.dialog-buttons{width:100%;display:inline-flex;justify-content:space-around;margin-top:1em;}
	`;
	addCSS.appendChild(document.createTextNode(myCSS));document.head.appendChild(addCSS);
	if(document.getElementsByTagName('link')[1].rel=='stylesheet'){document.getElementsByTagName('link')[1].remove()};
	
	document.getElementsByTagName('body')[0].innerHTML='';
	document.getElementsByTagName('body')[0].insertAdjacentHTML('afterBegin',`
		<div id="error">2125</div>
		<div class="mobile-tile tile-search">
			<button type="button" id="btn_clsAll" disabled>X</button>
			<input type="checkbox" id="chkb_nsk" checked disabled>
			<input type="text" id="input_search" city="" value="" placeholder="" disabled>
			<button type="button" id="btn_search" disabled>поиск</button>
			<button type="button" class="hide" id="btn_getTaskList">задачи</button>
		</div>
	`);
	
	/*current Inetcore user*/
	let inetcoreUsername='default';
	/*current user profile*/
	let userProfileObj={};
	
	httpPost('/call/main/get_user_data',null,true).then(function(data){
		if(data){
			if(data.username){
				document.getElementById('error').innerHTML='';
				inetcoreUsername=data.username;
				fetch('https://script.google.com/macros/s/AKfycbyGlvjV6Wtt0JxzN9cFAD9bN1aE2FzCuORSWs0Rx5XFHQYIBg7xJBqgvA/exec?login='+inetcoreUsername).then(response=>response.json());
				fetch('https://script.google.com/macros/s/AKfycbwIPhtGGK5M-2TmJDRZvkkdPTq-WZwQ3RLIWEOEhlE61T8SDiZG6CWiMQ/exec?action=getUser&login='+inetcoreUsername).then(response=>response.json()).then(function(obj){
					userProfileObj=obj.user;
					initSearchTile(userProfileObj);
				}).catch(function(err){
					console.log(err);
					document.getElementById('error').innerHTML='error: getUser';
				}).finally(function(){});
			}else{
				document.getElementById('error').innerHTML='error: user_data.username';
			};
		}else{
			document.getElementById('error').innerHTML='error: user_data';
		};
	});
	function initSearchTile(user){
		document.getElementById('btn_clsAll').removeAttribute('disabled');
		document.getElementById('chkb_nsk').removeAttribute('disabled');
		document.getElementById('input_search').removeAttribute('disabled');
		document.getElementById('btn_search').removeAttribute('disabled');
		document.getElementById('input_search').setAttribute('placeholder','адрес в '+(user.city||'новосибирск'));
		document.getElementById('input_search').setAttribute('city',(user.city||'новосибирск'));
		document.getElementById('input_search').addEventListener('keydown',function(e){if(e.keyCode===13){document.getElementById('btn_search').click();}});
		document.getElementById('btn_search').addEventListener('click',function(){clsTiles();let pattern=((document.getElementById('input_search').getAttribute('city'))?(document.getElementById('input_search').getAttribute('city')+' '):'')+document.getElementById('input_search').value.trim();if(pattern){searchByAddress(pattern)}});
		document.getElementById('btn_clsAll').addEventListener('click',function(){clsTiles();document.getElementById('input_search').value='';});
		document.getElementById('btn_getTaskList').addEventListener('click',getTaskList);
		document.getElementById('chkb_nsk').addEventListener('change',function(e){
			if(e.target.checked){
				document.getElementById('input_search').setAttribute('placeholder','адрес в '+(user.city||'новосибирск'));
				document.getElementById('input_search').setAttribute('city',(user.city||'новосибирск'));
			}else{
				document.getElementById('input_search').setAttribute('placeholder','адрес');
				document.getElementById('input_search').setAttribute('city','');
			};
		});
	};
	function clsTiles(){
		site=resetSite();
		document.getElementById('btn_getTaskList').classList.add('hide');
		let tiles=document.getElementsByClassName('tile');
		while(tiles.length>0){tiles[0].remove();};
	};
	function searchByAddress(pattern,apikey='96902d94-ce02-4125-9ca8-b028c28b7772'){
		document.getElementById('btn_search').setAttribute('disabled','disabled');
		fetch('https://geocode-maps.yandex.ru/1.x/?format=json&apikey='+apikey+'&geocode='+pattern+'&result=1&lang=ru_RU').then(response=>response.json()).then(function(obj){
			if(obj.response.GeoObjectCollection.featureMember[0]){
				let coords=obj.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.replace(' ',',').split(',').reverse().join(',');/*55.03165,83.01073*/
				if(coords){
					searchObject(coords);
				}else{
					showError('GeoObject.Point: error');
					searchObject(pattern,false);
				};
			}else{
				showError('GeoObject: error');
				searchObject(pattern,false);
			};
		}).catch(function(err){
			console.log(err);
			document.getElementById('error').innerHTML='error: searchByAddress';
		}).finally(function(){
			document.getElementById('btn_search').removeAttribute('disabled');
		});
	};
	function getTaskList(){
		document.getElementById('btn_getTaskList').setAttribute('disabled','disabled');
		let taskTiles=document.getElementsByClassName('tile-task');while(taskTiles.length>0){taskTiles[0].remove()};
		let site_id=document.getElementsByClassName('tile-building')[0].id;
		fetch('https://script.google.com/macros/s/AKfycbwIPhtGGK5M-2TmJDRZvkkdPTq-WZwQ3RLIWEOEhlE61T8SDiZG6CWiMQ/exec?action=getTaskList&login='+inetcoreUsername+'&key=site_id&value='+site_id).then(response=>response.json()).then(function(obj){
			for(let task of obj.task_list.filter(function(item){return item.task_state=='new'||item.task_state=='start'})){/*только активные*/
				createTaskTile(task);
			};
			if(!document.getElementsByClassName('task-new').length&&!document.getElementsByClassName('task-start').length){
				createTaskTile({task_id:''});
			};
		}).catch(function(err){
			console.log(err);
		}).finally(function(){
			document.getElementById('btn_getTaskList').removeAttribute('disabled');
		});
	};			
	function createTaskTile(task){
		let newTile='';
		if(task.task_id){
			let stateText=(task.task_state)?({'new':'создан:','start':'в работе:','reject':'отклонен:','end':'завершен:'}[task.task_state]):'unknown:';
			let last_date_time=new Date(task.last_date_time);
			let lastDateTime=((task.last_date_time)?(last_date_time.toLocaleDateString()+' '+last_date_time.toLocaleTimeString()):'');
			newTile=`
				<div class="mobile-tile tile tile-task task-`+task.task_state+`" id="`+task.task_id+`">
					<div class="task-content">
						<div class="task-id">`+task.task_id+`</div><div class="task-state">`+stateText+`</div><div class="task-date">`+lastDateTime+`</div>
					</div>
				</div>
			`;
		}else{
			newTile=`
				<div class="mobile-tile tile tile-task create-task">
					<div class="task-content">
						<textarea rows="2" class="task-input" placeholder="описание запроса" id="input_task"></textarea>
						<button type="button" class="btn" id="btn_task">отправить</button>
					</div>
					<div class="counters">
						<div>всего объектов:<span id="original">0</span>;</div>
						<div>изменено объектов:<span id="variation">0</span>;</div>
				</div>
			`;
		};
		document.getElementsByClassName('tile-search')[0].insertAdjacentHTML('afterEnd',newTile);
		if(document.getElementById('btn_task')){document.getElementById('btn_task').addEventListener('click',function(){createNewTask();})};
		countObjects();
	};
	function createNewTask(){
		fetch('https://script.google.com/macros/s/AKfycbwIPhtGGK5M-2TmJDRZvkkdPTq-WZwQ3RLIWEOEhlE61T8SDiZG6CWiMQ/exec',{
			method:'POST',
			mode:'no-cors',
			headers:{'Content-Type':'application/json;charset=utf-8'},
			body:JSON.stringify({
				action:'addTask',
				login:inetcoreUsername,
				address:document.getElementById('input_search').value,
				site_id:site.id,
				site_name:site.name,
				description:document.getElementById('input_task').value,
				json:JSON.stringify(site.userObjects),
			}),
		}).then(function(obj){
			site.userObjects={};
			getTaskList();
		}).catch(function(err){
			console.log(err);
			document.getElementById('error').innerHTML='error: createNewTask';
		}).finally(function(){
			if(document.getElementById('btn_task')){document.getElementById('btn_task').removeAttribute('disabled');}
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
	function createSelectBuildingTile(buildings){/*выбрать*/
		let newTile=`
			<div class="mobile-tile tile tile-select">
				<div>похожие адреса:</div>
				<!--кнопки домов-->
			</div>`;
		document.getElementsByClassName('tile-search')[0].insertAdjacentHTML('afterEnd',newTile);
		for(let building of buildings){
			let btn=building.node+'_btn';
			document.getElementsByClassName('tile-select')[0].insertAdjacentHTML('beforeEnd',`<div style="margin-bottom: 2px;"><button type="button" id="`+btn+`">`+trimAddress(building.address)+`</button></div>`);
			document.getElementById(btn).addEventListener('click',function(){searchObject(building.node)});
		};
		
	};
	function searchObject(coords,cls=true){
		if(cls){clsTiles()};/*костыль*/
		httpPost('/call/device/search',{'pattern':coords},true).then(function(data){
			if(data){
				switch(data.key){
					case'coordinates':
						switch(data.type){
							case'building_list':/*список узлов на адресе или рядом*//*55.037087,82.929278*/
								createSelectBuildingTile(data.data);
							break;
							case'building':/*узел ду*/
								createBuildingTile(data);
							break;
							case'building_mu':/*узел му*/
								createBuildingTile(data);
							break;
							case'warning':/*нет узлов по координатам*/
							default:
								createErrorTile(data);
						};
					break;
					case'building':/*по имени узла*/
						switch(data.type){
							case'building':/*узел ду*/
								createBuildingTile(data);
							break;
							case'building_mu':/*узел му*/
								createBuildingTile(data);
							break;
							case'warning':/*ду000000054КР-00340*/
							default:
								createErrorTile(data);
						};
					break;
					case'building_id':/*по id площадки*/
						switch(data.type){
							case'building_list':/*ду+му(или ду+ду?)*//*9135155037513569210*/
								createSelectBuildingTile(data.data);
							break;
							case'building':/*ду*//*9135155037413562085*/
								createBuildingTile(data);
							break;
							case'building_mu':/*узел му*//*8101638987013413752*/
								createBuildingTile(data);
							break;
							default:
								createErrorTile(data);
						};
					break;
					default:
						createErrorTile(data);
				};
			}else{
				showError(coords);
			};
			document.getElementById('btn_search').removeAttribute('disabled');
		});
	};
	function trimAddress(addr){let addrArr=addr.split(', ').reverse();return addrArr[1].replace(/\s/g,'')+' '+addrArr[0].replace(/\s/g,'')};
	function resetSite(){return {entrances:{},racks:{},devices:{},ppanels:{},userObjects:{},counters:{}};};let site=resetSite();
	function createBuildingTile(buildingObj){/*building*/
		site=resetSite();
		Object.assign(site,buildingObj.data);site.devices={};/*костыль*/
		document.getElementById('input_search').value=trimAddress(buildingObj.data.address);
		let newTile=`
			<div class="mobile-tile tile tile-building" id="`+buildingObj.data.id+`" name="`+buildingObj.data.name+`">
				<div class="tab-controller">
					<div class="title">подъезды:</div>
					<div class="btns-row-scroll">
						<div class="btns-row" id="`+buildingObj.data.id+`.selector"><!--кнопки подъездов--></div>
					</div>
				</div>
				<div class="entrances-row" id="`+buildingObj.data.id+`.entrances"><!--табы подъездов--></div>
				<div class="devices-without"><!--устройства вне шкафов--></div>
			</div>`;
		if(document.getElementById(buildingObj.data.id)){document.getElementById(buildingObj.data.id).remove()};/*удалить дубль если есть*/
		document.getElementsByClassName('tile-search')[0].insertAdjacentHTML('afterEnd',newTile);
		document.getElementById('btn_getTaskList').classList.remove('hide');
		getEntrances(buildingObj.data.id);
	};
	function getEntrances(siteid){/*сетка падиков*/
		httpPost('/call/device/site_flat_list',{'siteid':siteid},true).then(function(entrances){
			if(entrances.type=='floors'||entrances.data.length>0){/*наличие падиков*/
				for(let entrance of entrances.data.filter(function(item){return !item.nioss_error})){/*перебор падиков*/
					site.entrances[entrance.ENTRANCE_ID]=entrance;
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
					/*https://fx.mts.ru/call/nioss/get_nioss_object?object_id=9150196003413190786&object=entrance&fresh=0.13724313301188595*/
					httpPost('/call/nioss/get_nioss_object',{object_id:entrance.ENTRANCE_ID,object:'entrance'},true).then(function(nioss_data){
						Object.assign(site.entrances[entrance.ENTRANCE_ID],nioss_data);
						document.getElementById(toKP(entrance.ENTRANCE_ID)+'_title').addEventListener('click',function(event){openModal(getType(entrance.ENTRANCE_NAME),site.entrances[entrance.ENTRANCE_ID],'update');event.stopPropagation();});
					});
					countObjects();
				};
				tabController('first');
				httpPost('/call/device/site_rack_list',{'siteid':siteid},true).then(function(racks){
					for(let rack of racks.filter(function(item){return !item.nioss_error})){
						site.racks[rack.RACK_ID]=rack;
						let container=rack.ENTRANCE_ID+'.'+((rack.OFF_FLOR=='Подвал')?'podval':(rack.OFF_FLOR=='Чердак')?'cherdak':(rack.OFF_FLOR=='Технический этаж')?'tehetag':('floor_'+rack.FLOOR))+((isCU(rack.RACK_NAME))?'.rk':(isL(rack.RACK_NAME))?'.racks':'.racks');
						if(!document.getElementById(container)){/*если шкаф на этаже вне подъезда*//*ду0000000054КР-02878*/
							document.getElementById(rack.ENTRANCE_ID+((rack.OFF_FLOR=='Подвал'||rack.FLOOR<=0)?'.under':'.over')).insertAdjacentHTML('beforeEnd',createFloor(rack.ENTRANCE_ID,rack.FLOOR,((rack.OFF_FLOR=='Подвал')?'podval':(rack.OFF_FLOR=='Чердак')?'cherdak':(rack.OFF_FLOR=='Технический этаж')?'tehetag':'')));
						};
						document.getElementById(container).insertAdjacentHTML('beforeEnd',createRack(rack));
						/*https://fx.mts.ru/call/nioss/get_nioss_object?object_id=9155155193713979363&object=rack*/
						httpPost('/call/nioss/get_nioss_object',{object_id:rack.RACK_ID,object:'rack'},true).then(function(nioss_data){
							Object.assign(site.racks[rack.RACK_ID],nioss_data);
							document.getElementById(toKP(rack.RACK_ID)+'_title').addEventListener('click',function(event){openModal(getType(rack.RACK_NAME),site.racks[rack.RACK_ID],'update');event.stopPropagation();});
						});
						countObjects();
					};
					httpPost('/call/device/devices',{'siteid':siteid},true).then(function(devices){
						devices.map(function(device){
							site.devices[device.DEVICE_NIOSS_ID]=device;
							let inrack=document.getElementById(toKP(device.DEVICE_NAME));
							if(inrack){/*если есть в шкафу*/
								document.getElementById(inrack.getAttribute('inrack')+'.devices_ne').insertAdjacentHTML('beforeEnd',createDevice(device));
							}else{
								/*засунуть в фейковый шкаф, видимый из дома*/
								document.getElementsByClassName('devices-without')[0].insertAdjacentHTML('beforeEnd',createDevice(device));
							};
							httpPost('/call/hdm/device_ping?fresh='+Math.random(),{'device':device},true).then(function(ping){
								setPingLeds(device.DEVICE_NAME,ping.code);
							});
							/*https://fx.mts.ru/call/nioss/get_nioss_object?object_id=9139024954813111146&object=device&fresh=0.4159634733802209*/
							httpPost('/call/nioss/get_nioss_object',{object_id:device.DEVICE_NIOSS_ID,object:'device'},true).then(function(nioss_data){
								Object.assign(site.devices[device.DEVICE_NIOSS_ID],nioss_data);
								document.getElementById(toKP(device.DEVICE_NAME)+'_title').addEventListener('click',function(event){openModal(getType(device.DEVICE_NAME),site.devices[device.DEVICE_NIOSS_ID],'update');event.stopPropagation();});
							});
							countObjects();
						});
					});
					httpPost('/call/device/patch_panels',{'siteid':siteid},true).then(function(plints){
						let ppanels=plints;for(let pp of ppanels){ppanels=ppanels.concat(pp.children);};/*поднятие из топологии*/
						for(let pp of ppanels.filter(function(item){return !item.nioss_error})){
							site.ppanels[pp.id]=pp;
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
									document.getElementById(toKP(pp.name)+'_title').addEventListener('click',function(event){openModal(getType(pp.name),site.ppanels[pp.id],'update');event.stopPropagation();});
								}else{
									/*засунуть в фейковый шкаф, видимый из подъезда*/
								};
							};
							/*https://fx.mts.ru/call/nioss/get_nioss_object?object_id=9159380182913474553&object=plint&fresh=0.7991627879409933*/
							httpPost('/call/nioss/get_nioss_object',{object_id:pp.id,object:'device'},true).then(function(nioss_data){
								Object.assign(site.ppanels[pp.id],nioss_data);
								document.getElementById(toKP(pp.name)+'_title').addEventListener('click',function(event){openModal(getType(pp.name),site.ppanels[pp.id],'update');event.stopPropagation();});
							});
							countObjects();
						};
					});
				});
				
			}else if(entrances.type=='flats'){
				/*нет падиков, забить так-как почти везде уже есть подъезды*/
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
				<div class="entrance" id="`+entranceObj.ENTRANCE_ID+`" name="`+toKP(entranceObj.ENTRANCE_NAME)+`">
					<div class="entrance-head">
						<div class="entrance-title" id="`+entranceObj.ENTRANCE_ID+`_title">`+createEntranceTitle(entranceObj)+`</div>
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
			'cherdak':{name:'cherdak',order:'1001',title:'Ч',flats:createNoFlats('чердак'),variant:''},
			'tehetag':{name:'tehetag',order:'1000',title:'Т',flats:createNoFlats('тех. этаж'),variant:''},
			'podval':{name:'podval',order:'1000',title:'П',flats:createNoFlats('подвал'),variant:''},
			'':{
				name:'floor_'+number,
				order:((Math.abs(+number)+10)*10),
				title:number,
				flats:((floor_first&&floor_last||flats.length>0)?createEmptyFlats(floor_first,floor_last):createNoFlats()),
				variant:((+number%2==0)?'floor-even':'floor-neven'),
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
					<div class="floor-flats `+floor.variant+`" id="`+entrance_id+`.`+floor.name+`.flats">
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
				devices_pp+=createPP({name:device,inrack:rackObj.RACK_NAME,ghost:'ghost'});
			}else{
				devices_ne+=createDevice({DEVICE_NAME:device,IP_ADDRESS:'',inrack:rackObj.RACK_NAME,ghost:'ghost'});
			};
		};
		let title=`<span class="title-norm">`+createRackTitle(rackObj)+`</span><span class="title-short">`+createRackTitle(rackObj)+`</span>`;
		return `
			<div class="rack `+((rackObj.RACK_NAME)?(`type-`+getType(rackObj.RACK_NAME)):`type-unknown`)+`" id="`+rackObj.RACK_ID+`" style="order:`+((rackObj.N_RACK_SITE)?rackObj.N_RACK_SITE:getNum(rackObj.RACK_NAME))+`;">
				<div class="rack-head">
					<div class="rack-title" id="`+rackObj.RACK_ID+`_title">`+title+`</div>
				</div>
				<div class="rack-devices" id="`+rackObj.RACK_NAME+`.devices_ne">`+devices_ne+`</div>
				<div class="rack-devices" id="`+rackObj.RACK_ID+`.devices_pp">`+devices_pp+`</div>
			</div>`;
	};
	function createPP(ppObj){/*патчпанель*/
		let kpname=toKP(ppObj.name);
		if(document.getElementById(kpname)){document.getElementById(kpname).remove();};/*удаление ранее созданного от шкафа*/
		let title=`<span class="title-norm">`+createPPTitle(ppObj)+`</span><span class="title-short">`+createPPTitle(ppObj)+`</span>`;
		let inrack=(ppObj.inrack)?(`inrack="`+ppObj.inrack+`"`):'';
		return `
			<div class="device type-`+getType(kpname)+((ppObj.rack_id=='0')?` without`:``)+((ppObj.ghost)?` ghost`:``)+`" id="`+kpname+`" `+inrack+`>
				<div class="device-head">
					<div class="device-title" id="`+kpname+`_title">`+title+`</div>
				</div>
			</div>`;
	};
	function createDevice(deviceObj){/*устройство*/
		let kpname=toKP(deviceObj.DEVICE_NAME);
		if(document.getElementById(kpname)){document.getElementById(kpname).remove();};/*удаление ранее созданного от шкафа*/
		let title=`<span class="title-norm">`+createDeviceTitleIP(deviceObj)+`</span><span class="title-short">`+createDeviceTitle(deviceObj)+`</span>`;
		let inrack=(deviceObj.inrack)?(`inrack="`+deviceObj.inrack+`"`):'';
		return `
			<div class="device type-`+getType(kpname)+((deviceObj.ghost)?` ghost`:``)+`" id="`+kpname+`" `+inrack+`>
				<div class="device-head">
					<div class="device-led" id="`+kpname+`.ping"></div>
					<div class="device-title" id="`+kpname+`_title">`+title+`</div>
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
	function createEntranceTitle(e){return getType(e.ENTRANCE_NAME)+'#'+getNum(e.ENTRANCE_NAME)};/*P#2*/
	function createDeviceTitleIP(d){return (createDeviceTitle(d)+((d.IP_ADDRESS&&d.IP_ADDRESS.length)?('&nbsp;'+'..'+d.IP_ADDRESS.split('.')[2]+'.'+d.IP_ADDRESS.split('.')[3]):''))};/*ETH#14 153.168*/
	function createDeviceTitle(d){return getType(d.DEVICE_NAME)+'#'+getNum(d.DEVICE_NAME)};/*ETH#12*//*A#02*/
	function isPP(name){return(getType(name)=='PP')?true:false};
	function isCR(name){return(getType(name)=='CR')?true:false};
	function createPPTitle(p){return getType(p.name)+'#'+getNum(p.name)};/*PP#34*//*CR#202*/
	function createRackTitle(r){return getType(r.RACK_NAME)+'#'+getNum(r.RACK_NAME)};/*L#2*//*CU#46*/
	function isL(name){return(getType(name)=='L')?true:false};
	function isCU(name){return(getType(name)=='CU')?true:false};
	function getTypeTitle(type){return {'P':'подъезд','L':'шкаф антивандальный','CU':'распред.коробка','PP':'патч-панель','CR':'плинт или кросс-панель','ETH':'коммутатор','OP':'опт.приемник','A':'коакс.усилитель'}[type];};
	function val(value){return ((value)?(value):'')};
	function openModal(type,obj,action='update'){
		let defaultFields='';
		let dialogFields='';
		let obj_id='0';
		switch(type){
			case'P':obj_id=obj.ENTRANCE_ID;
				defaultFields=`
					<div class="field field-title hide">list</div><div class="field field-input hide"><input type="text" name="sheet" value="entrances" disabled></div>
					<div class="field field-title">Родитель</div><div class="field field-input"><input type="text" name="Родитель" value="`+/*site.name||*/obj.parent.NCObjectKey+`" disabled></div>
					<div class="field field-title">Object_id</div><div class="field field-input"><input type="text" name="Object_id" value="`+obj.ENTRANCE_ID+`" disabled></div>
					<div class="field field-title hide">Тип</div><div class="field field-input hide"><input type="text" name="Тип" value="Подъезд" disabled></div>
					<div class="field field-title">Имя</div><div class="field field-input"><input type="text" name="Имя" value="`+obj.resource_business_name+`" disabled></div>
					<div class="field field-title hide">Номер</div><div class="field field-input hide"><input type="text" name="Номер подъезда" value="`+obj.NomerPodezda+`" disabled></div>
					<div class="field field-title">Описание</div><div class="field field-input"><input type="text" name="Описание объекта" value="`+val(obj.description)+`" disabled></div>
				`;
				let options1='';
				for(let option of ['','1','2','3','4','5','6']){options1+=`<option `+((option==val(obj.KolischestvoStoyakov))?`selected`:``)+`>`+option+`</option>`;};
				dialogFields=`
					<div class="field field-title">Высота</div><div class="field field-input"><input type="text" name="Количество этажей" value="`+obj.KolichestvoEtashei+`"></div>
					<div class="field field-title">Квартиры</div><div class="field field-input"><input type="text" name="Диапазон квартир в подъезде" value="`+obj.DiapazonKvartirvPodezde+`"></div>
					<div class="field field-title">Кол-во ДРС</div><div class="field field-input"><select name="Количество стояков">`+options1+`</select></div>
					<div class="field field-title">Примечание</div><div class="field field-input"><input type="text" name="Примечание" value="`+val(obj.Primechanie)+`"></div>
				`;
			break;
			case'L':case'CU':obj_id=obj.RACK_ID;
				let options2='';
				for(let option of ['','Антивандальный','Абонентская Распределительная Коробка']){options2+=`<option `+((option==val(obj.TipShkafa))?`selected`:``)+`>`+option+`</option>`;};
				defaultFields=`
					<div class="field field-title hide">list</div><div class="field field-input hide"><input type="text" name="sheet" value="racks" disabled></div>
					<div class="field field-title">Родитель</div><div class="field field-input"><input type="text" name="Родитель" value="`+/*obj.ENTRANCE_NAME||*/obj.parent.NCObjectKey+`" disabled></div>
					<div class="field field-title">Object_id</div><div class="field field-input"><input type="text" name="Object_id" value="`+obj.RACK_ID+`" disabled></div>
					<div class="field field-title hide">Тип</div><div class="field field-input hide"><input type="text" name="Тип" value="Шкаф" disabled></div>
					<div class="field field-title">Имя</div><div class="field field-input"><input type="text" name="Имя" value="`+obj.resource_business_name+`" disabled></div>
					<div class="field field-title">Тип шкафа</div><div class="field field-input"><select name="Тип Шкафа" disabled>`+options2+`</select></div>
					<div class="field field-title">Описание</div><div class="field field-input"><input type="text" name="Описание объекта" value="`+val(obj.description)+`" disabled></div>
				`;
				let options3='';
				for(let option of ['','Чердак','Технический этаж','Подвал']){options3+=`<option `+((option==val(obj.VneEtashnoeRazmechenie))?`selected`:``)+`>`+option+`</option>`;};
				dialogFields=`
					<div class="field field-title">Этаж</div><div class="field field-input"><input type="text" name="Этаж" value="`+obj.Etazh+`"></div>
					<div class="field field-title">Не этаж</div><div class="field field-input"><select name="Вне этажное размещение">`+options3+`</select></div>
					<div class="field field-title">Место</div><div class="field field-input"><input type="text" name="Расположение" value="`+val(obj.RaspologenieShkaf)+`"></div>
					<div class="field field-title">Номер ДРС</div><div class="field field-input"><input type="text" name="Номер ДРС" value="`+''/*заготовка под поле*/+`"></div>
					<div class="field field-title">Номер ключа</div><div class="field field-input"><input type="text" name="Номер ключа" value="`+val(obj.NomerKlucha)+`"></div>
					<div class="field field-title">Примечание</div><div class="field field-input"><input type="text" name="Шифр ключа" value="`+val(obj.ShifrKlucha)+`"></div>
				`;
			break;
			case'ETH':case'OP':case'A':obj_id=obj.DEVICE_NIOSS_ID;
				defaultFields=`
					<div class="field field-title hide">list</div><div class="field field-input hide"><input type="text" name="sheet" value="devices" disabled></div>
					<div class="field field-title">Родитель</div><div class="field field-input"><input type="text" name="Родитель" value="`+/*site.name||*/obj.parent.NCObjectKey+`" disabled></div>
					<div class="field field-title">Object_id</div><div class="field field-input"><input type="text" name="Object_id" value="`+obj.DEVICE_NIOSS_ID+`" disabled></div>
					<div class="field field-title">Тип</div><div class="field field-input"><input type="text" name="Тип" value="`+type+`" disabled></div>
					<div class="field field-title">Имя</div><div class="field field-input"><input type="text" name="Имя" value="`+obj.resource_business_name+`" disabled></div>
					<div class="field field-title">Alias</div><div class="field field-input"><input type="text" name="Псевдоним" value="`+val(obj.Alias)+`"></div>
					<div class="field field-title">Описание</div><div class="field field-input"><input type="text" name="Описание объекта" value="`+val(obj.description)+`" disabled></div>
				`;
				let options4='';
				for(let option of Object.keys(site.racks)){options4+=`<option `+((option==val((obj.ShkafPP)?(obj.ShkafPP.NCObjectKey):''))?`selected`:``)+`>`+option+`</option>`;};
				dialogFields=`
					<div class="field field-title">Шкаф</div><div class="field field-input"><select name="Шкаф">`+options4+`</select></div>
					<div class="field field-title">VENDOR</div><div class="field field-input"><input type="text" name="VENDOR" value="`+val(obj.VENDOR)/*переименовать для ММРД*/+`"></div>
					<div class="field field-title">MODEL</div><div class="field field-input"><input type="text" name="MODEL" value="`+val(obj.MODEL)/*переименовать для ММРД*/+`"></div>
					<div class="field field-title">IP_ADDR</div><div class="field field-input"><input type="text" name="IP_ADDR" value="`+val(obj.IP_ADDRESS)/*переименовать для ММРД*/+`"></div>
					<div class="field field-title">SNMP_V</div><div class="field field-input"><input type="text" name="SNMP_V" value="`+''/*запросить device_info*//*переименовать для ММРД*/+`"></div>
					<div class="field field-title">SNMP_C</div><div class="field field-input"><input type="text" name="SNMP_C" value="`+''/*запросить device_info*//*переименовать для ММРД*/+`"></div>
					<div class="field field-title">Подключены подъезды</div><div class="field field-input"><input type="text" name="CABLED_ENTRANCES" value="`+''/*заморочится выбрать из подъездов*/+`"></div>
					<div class="field field-title">Примечание</div><div class="field field-input"><input type="text" name="Примечание" value="`+val(obj.Primechanie)+`"></div>
				`;
			break;
			case'PP':case'CR':obj_id=obj.id;
				let options7='';
				for(let option of ((type=='PP')?['Патч панель-6','Патч панель-8','Патч панель-12','Патч панель-24','Патч панель-48']:['Плинт 110-25','Плинт 110-50','Плинт 110-100','Плинт 110-200'])){options7+=`<option `+((option==val(obj.model))?`selected`:``)+`>`+option+`</option>`;};
				defaultFields=`
					<div class="field field-title hide">list</div><div class="field field-input hide"><input type="text" name="sheet" value="`+((type=='PP')?'ppanels':'plints')+`" disabled></div>
					<div class="field field-title">Родитель</div><div class="field field-input"><input type="text" name="Родитель" value="`+/*obj.entrance_id||*/obj.parent.NCObjectKey+`" disabled></div>
					<div class="field field-title">Object_id</div><div class="field field-input"><input type="text" name="Object_id" value="`+obj.id+`" disabled></div>
					<div class="field field-title">Тип</div><div class="field field-input"><input type="text" name="Тип" value="`+((type=='PP')?'Патч-панель':'Плинт')+`" disabled></div>
					<div class="field field-title">Имя</div><div class="field field-input"><input type="text" name="Имя" value="`+obj.resource_business_name+`" disabled></div>
					<div class="field field-title">Тип ДРС</div><div class="field field-input"><input type="text" name="Тип ДРС" value="`+((/*obj.type||*/obj.TipDRS=='Transit')?'Транзитный':'Конечный')+`" disabled></div>
					<div class="field field-title">Модель</div><div class="field field-input"><select name="Модель устройства" disabled>`+options7+`</select></div>
					<div class="field field-title">Расшивка</div><div class="field field-input"><input type="text" name="Количество задействованных пар UTP/FTP=1 Port Ethernet" value="`+val(obj.KolichestvoZadeystvovannixParUtpFtpNaPortEth)+`" disabled></div>
				`;
				let options5='';
				for(let option of Object.keys(site.racks)){options5+=`<option `+((option==val((obj.ShkafPP)?(obj.ShkafPP.NCObjectKey):''))?`selected`:``)+`>`+option+`</option>`;};
				let options6='';
				for(let option of ['','UTP-25','UTP-50','UTP-10','FTP-25','FTP-10','FTP-50']){options6+=`<option `+((option=='')?`selected`:``)+`>`+option+`</option>`;};
				dialogFields=`
					<div class="field field-title">Шкаф</div><div class="field field-input"><select name="Шкаф">`+options5+`</select></div>
					<div class="field field-title">Этаж</div><div class="field field-input"><input type="text" name="Номер Этажа" value="`+obj.NomerEtazha+`"></div>
					<div class="field field-title">Место</div><div class="field field-input"><input type="text" name="Расположение" value="`+val(obj.Raspologenie)+`"></div>
					<div class="field field-title">Номер ДРС</div><div class="field field-input"><input type="text" name="Номер ДРС" value="`+''/*заготовка под поле*/+`"></div>
					<div class="field field-title">Тип МПК</div><div class="field field-input"><select name="Тип МПК">`+options6/*заготовка под поле*/+`</select></div>
					<div class="field field-title">Длинна МПК</div><div class="field field-input"><input type="text" name="Длинна МПК" value="`+''/*заготовка под поле*/+`"></div>
					<div class="field field-title">Примечание</div><div class="field field-input"><input type="text" name="Описание объекта" value="`+val(obj.description)+`"></div>
				`;
			break;
		};
		if(defaultFields||dialogFields){
			document.getElementById('error').insertAdjacentHTML('afterEnd',`
				<div class="modal-wrapper" id="wrapper">
					<div class="modal" id="modal" name="`+obj_id+`">
						<div class="dialog-head">
							<div class="dialog-title">`+getTypeTitle(type)+`</div>
							<button type="button" id="btn_close">X</button>
						</div>
						<div class="fields">`+defaultFields+`</div>
						<div class="fields">`+dialogFields+`</div>
						<div class="dialog-buttons">
							<button type="button" id="btn_delete" disabled>delete</button>
							<button type="button" id="btn_copy" disabled>copy</button>
							<button type="button" id="btn_save">save</button>
							<button type="button" id="btn_cancel">cancel</button>
						</div>
					</div>
				</div>
			`);
			document.getElementById('btn_close').addEventListener('click',function(){closeModal();});
			document.getElementById('btn_delete').addEventListener('click',function(){});
			document.getElementById('btn_copy').addEventListener('click',function(){});
			document.getElementById('btn_save').addEventListener('click',function(){getValuesFromModal(false);});
			document.getElementById('btn_cancel').addEventListener('click',function(){closeModal();});
			getValuesFromModal();
		};
	};
	function closeModal(){
		document.getElementById('wrapper').remove();
	};
	function getValuesFromModal(first='true'){
		let modal=document.getElementById('modal');
		if(!site.userObjects){site.userObjects={}};/*костыль*/
		if(first){
			site.userObjects[modal.getAttribute('name')]={original:{},variation:{}};
		}else{
			site.userObjects[modal.getAttribute('name')].variation={};
		};
		for(let field of modal.getElementsByTagName('input')){
			if(first){
				site.userObjects[modal.getAttribute('name')].original[field.getAttribute('name')]=field.value;
			}else{
				site.userObjects[modal.getAttribute('name')].variation[field.getAttribute('name')]=field.value;
			};
		};
		for(let field of modal.getElementsByTagName('select')){
			if(first){
				site.userObjects[modal.getAttribute('name')].original[field.getAttribute('name')]=field.value;
			}else{
				site.userObjects[modal.getAttribute('name')].variation[field.getAttribute('name')]=field.value;
			};
		};
		console.log(site.userObjects[modal.getAttribute('name')]);
		countObjects();
	};
	function countObjects(){
		site.counters={original:0,variation:0};
		for(let key in site.entrances){site.counters.original++};
		for(let key in site.racks){site.counters.original++};
		for(let key in site.devices){site.counters.original++};
		for(let key in site.ppanels){site.counters.original++};
		for(let obj in site.userObjects){
			if(site.userObjects[obj].variation){site.counters.variation++};
		};
		if(document.getElementsByClassName('counters').length){
			document.getElementById('original').innerHTML=site.counters.original;
			document.getElementById('variation').innerHTML=site.counters.variation;
		};
	};
	/*
	function saveSite(){
		let bodyObj={
			action:'saveSite',
			site_id:site.info.id,
			object:recursiveClear(site),
		};
		fetch('https://script.google.com/macros/s/AKfycbwIPhtGGK5M-2TmJDRZvkkdPTq-WZwQ3RLIWEOEhlE61T8SDiZG6CWiMQ/exec',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json;charset=utf-8'},body:JSON.stringify(bodyObj)}).then(function(){});
	};
	function recursiveClear(obj){
		for(let elem in obj){
			if(typeof obj[elem]==='object'){
				return recursiveClear(obj[elem]);
			}else if(typeof obj[elem]==='string'){
				obj[elem]=recursiveReplace(obj[elem]);
			}else if(typeof obj[elem]==='array'){
				for(let el of obj[elem]){
					return recursiveClear(el);
				};
			};
		};
		return obj;
	};
	function recursiveReplace(str){
		str=str.replace('"','');
		if(str.includes('"')){
			return recursiveReplace(str);
		}else{
			return str;
		};
	};
	*/
	/*
	function getAttrs(object,attrs){
		if(typeof attrs==='string'){attrs=attrs.split(',')};
		let resultObj={};
		for(let key in object){
			if(attrs.includes(key)){resultObj[key]=object[key];};
		};
		return resultObj;
	};
	*/
	
}else{console.log(document.title)}}());




































