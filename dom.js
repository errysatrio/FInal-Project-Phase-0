var body = document.body;
var mainDiv=document.createAttribute('div')
var mainDivAttrId=document.createAttribute('id')

mainDivAttrId.value= 'main'

mainDiv.setArributeNode(mainDivAttrId)

body.appendChild(mainDiv)

var insideMainDiv=document.createElement('div')

insideMainDiv.setAttribute('id','inside-main')

mainDiv.appendChild(insideMainDiv)