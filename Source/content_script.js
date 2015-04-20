walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{	
	if(!isTweetBoxChild(textNode)){
		var v = textNode.nodeValue;
		var rand = Math.random();
		
		if(rand > 0.49) {
			v = v.replace(/\bMigrants\b/g, "People");
			v = v.replace(/\bmigrants\b/g, "people fleeing a terrible situation");
			v = v.replace(/\bMigrant\b/g, "Person");
			v = v.replace(/\bmigrant\b/g, "person fleeing persecution or war");
		} else {
			v = v.replace(/\bMigrants\b/g, "People seeking a better life");
			v = v.replace(/\bmigrants\b/g, "people");
			v = v.replace(/\bMigrant\b/g, "Person seeking a safe place to live");
			v = v.replace(/\bmigrant\b/g, "person");
		}
		
		rand = Math.random();
		
		if(rand > 0.49) {
			v = v.replace(/\bImmigrants\b/g, "People");
			v = v.replace(/\bimmigrants\b/g, "people seeking a better life");
			v = v.replace(/\bImmigrant\b/g, "Person");
			v = v.replace(/\bimmigrant\b/g, "person fleeing violence or economic hardship");
		} else {
			v = v.replace(/\bImmigrants\b/g, "People seeking a better life");
			v = v.replace(/\bimmigrants\b/g, "people");
			v = v.replace(/\bImmigrant\b/g, "Person seeking a safe place to live");
			v = v.replace(/\bimmigrant\b/g, "person");
		}
		
		v = v.replace(/\bKatie Hopkins\b/g, "A Professional Troll");
		
		textNode.nodeValue = v;
	}
}

function isTweetBoxChild(textNode) {
	if(findAncestor(textNode.parentElement, 'tweet-content')) {
    	return true;
	} else {
    	return false;
    }
}

function findAncestor(el, target) { // http://stackoverflow.com/a/22119674/1646470
	
	var i = 0;
	
    while (el && !el.classList.contains(target) && i<5) {
    	el = el.parentElement;
    	i++;
    }
    if(!el) {
    	return false;
    } else {
   		return el.classList.contains(target);
   	}
}

function nodeInsertedCallback(event) { // http://stackoverflow.com/a/8887226/1646470
    walk(document.body);
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);