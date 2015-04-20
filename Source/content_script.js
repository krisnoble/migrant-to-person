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
	if(textNode.parentElement.nodeName == 'input' || textNode.parentElement.nodeName == 'textarea')
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

function nodeInsertedCallback(event) { // http://stackoverflow.com/a/8887226/1646470
    walk(document.body);
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);


