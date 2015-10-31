 var fs=require("fs")

 function view(templateName, values, response){
 	//read from the template files
 	var fileContents=fs.readFileSync('./views/'+ templateName +".html",{encoding:"utf8"});
	fileContents=mergeValues(values,fileContents);
	response.write(fileContents)
 

 	// write out to the response
 }
 function mergeValues(values,content){
 	for (var key in values){
 		content=content.replace("{{"+ key + "}}", values[key]);
 	}
 	return content;
 }
 module.exports.view=view;