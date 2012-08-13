/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeeBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeeBasket_kango.ui.ToolbarButton=function(element,details){this.superclass.call(this,element,details);};TeeBasket_kango.ui.ToolbarButton.prototype=TeeBasket_kango.oop.extend(TeeBasket_kango.ui.Button,{setMenu:function(itemName,callback){this._element.type='menu';var elem=document.createElement('menupopup');elem.setAttribute('id',this._element.id+'-menu');this._element.appendChild(elem);var itemElem=document.createElement('menuitem');itemElem.setAttribute('label',itemName);itemElem.addEventListener('command',function(e){callback();},false);elem.appendChild(itemElem);}});TeeBasket_kango.ui.Toolbar=function(){this._container=document.getElementById('TeeBasket_kango-ui-toolbar-container');this._toolbar=document.getElementById('TeeBasket_kango-ui-toolbar');this._elements={};};TeeBasket_kango.ui.Toolbar.prototype={_toolbar:null,_elements:{},_container:null,_idPrefix:'TeeBasket_kango-ui-toolbar-',_addButton:function(id,details){var elem=document.createElement('toolbarbutton');elem.setAttribute('id',this._idPrefix+id);this._container.appendChild(elem);this._elements[id]=new TeeBasket_kangoUIToolbarButton(elem,details);return this._elements[id];},addElement:function(name,id,details){if(id!=null&&id!=null&&id!=''&&name!=''&&typeof this._elements[id]=='undefined'){if(name=='button'){return this._addButton(id,details);}}
return null;},removeElement:function(id){},getElementById:function(id){return this._elements[id];}};