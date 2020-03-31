
var formContainers = document.querySelectorAll(".form-container");

function getDemoFormTitles(elCont, el){
    for(var i = 0; i < elCont.length; i++){
        //get the text from the target element, set it to lowrcase
        //remove trailing whitespace using trim()
        //replace text whitespace with "-" using the replace() method and regEX expression
        //regEX expression matches all ("/g") whitespace "\s" and replaces it with "-"
        var titleText = elCont[i].querySelector(el).textContent.toLowerCase().trim().replace(/\s/g, "-");
        elCont[i].setAttribute("id", titleText);
    }
}


//run code when the dom is interactive - complete
document.addEventListener('readystatechange', function(e){
	if(e.target.readyState === "interactive"){
        console.log("init");
        console.log(e.target.readyState);
	}
	if(e.target.readyState === "complete"){
        getDemoFormTitles(formContainers, ".section-title h2");
	}
});
