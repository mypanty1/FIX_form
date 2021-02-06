function createNiossFile(event,new_file_name,jsonObj){/*создать копию и заполнить*/
	let task_files=DriveApp.getFolderById('1jjD3bAffmSFTclWq--ZgZAQW0PorbJFs');/*task_files*/
	let nioss_template=DriveApp.getFileById('1sSos0uTs-5ljIK3_PsoBYODCTOmC2lx_rYEVEq4r-bU');/*NIOSS_template*/
	let new_file_id=nioss_template.makeCopy(new_file_name,task_files).getId();
  let new_file=SpreadsheetApp.openById(new_file_id);
	for(let key in jsonObj){/*перебор объектов*/
		let obj=jsonObj[key];
		let new_file_list=new_file.getSheetByName((obj.original)?(obj.original.sheet):(obj.variation)?(obj.variation.sheet):'unknown');
		new_file_list.appendRow([
			event.parameter.site_id,
			'',
			key,
		]);
		let list_data=new_file_list.getDataRange().getValues();
		for(let row=1;row<list_data.length;row++){
			if(list_data[row][getColIndex(list_data,'Object_id')]==key){
				/*заливка данных original*/
				for(let col_name in obj.original){
					let col=getColIndex(list_data,col_name);
					if(col){/*наличие столбца в файле*/
						new_file_list.getRange(row+1,col+1).setValue(obj.original[col_name]);
					};
				};
				list_data=new_file_list.getDataRange().getValues();
				/*заливка данных variation*/
				for(let col_name in obj.variation){
					let col=getColIndex(list_data,col_name);
					if(col){/*наличие столбца в файле*/
						if(list_data[row][getColIndex(list_data,col_name)]!=obj.variation[col_name]){/*если данные отличаются*/
							new_file_list.getRange(row+1,col+1).setBackground('yellow');/*подсветка изменений*/
						}else{
							new_file_list.getRange(row+1,col+1).setBackground(null);/*не подсветка*/
						};
						new_file_list.getRange(row+1,col+1).setValue(obj.variation[col_name]).setBorder(true,true,true,true,null,null,null,null);
					};
				};
			};
		};
	};
  DriveApp.getFileById(new_file_id).setSharing(DriveApp.Access.ANYONE_WITH_LINK,DriveApp.Permission.VIEW);/*права*/
	return new_file_id;
};