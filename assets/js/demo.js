
var formContainers = document.querySelectorAll(".form-container"),
    demoNav = document.querySelector("#nav"),
    formExamplesNav =  document.querySelector("#form-examples"),
    demoNavBtn = document.querySelector("#navbtn");

function getDemoFormTitles(elCont, el, targetEl){
    //remove all items before populating with new iiems
    while(targetEl.firstElementChild){
        targetEl.removeChild(targetEl.firstElementChild);
    }

    for(var i = 0; i < elCont.length; i++){
        //get the text from the target element, set it to lowrcase
        //remove trailing whitespace using trim()
        //replace text whitespace with "-" using the replace() method and regEX expression
        //regEX expression matches all ("/g") whitespace "\s" and replaces it with "-"
        var titleText = elCont[i].querySelector(el).textContent.toLowerCase().trim().replace(/\s/g, "-");
        elCont[i].setAttribute("id", titleText);

        var link = document.createElement("a");
        var listItem = document.createElement("li");
        link.textContent = titleText;
        link.setAttribute("href", "#"+titleText);
        listItem.appendChild(link);
        targetEl.appendChild(listItem);
    };
    for (let j = 0; j < targetEl.querySelectorAll("li a").length; j++) {
        const linkEl = targetEl.querySelectorAll("li a")[j];
        linkEl.addEventListener("click", function(){
            indicateForm(linkEl);
        })
    }
}

function indicateForm(link){
    var linkTarget = document.querySelector(link.getAttribute("href"));
    linkTarget.classList.add("active");
    setTimeout(function(){
        linkTarget.classList.remove("active");
    }, 800)
}

function navFunc(){
    demoNav.classList.toggle("nav-active");
}

//run code when the dom is interactive - complete
document.addEventListener('readystatechange', function(e){
	if(e.target.readyState === "interactive"){
        console.log("init");
        console.log(e.target.readyState);
	}
	if(e.target.readyState === "complete"){
        getDemoFormTitles(formContainers, ".section-title h2", formExamplesNav.querySelector("ul"));
	}
});

demoNavBtn.addEventListener("click", navFunc);
window.addEventListener("click", function(e){
    if(e.target === demoNav){
        navFunc();
    }
})
