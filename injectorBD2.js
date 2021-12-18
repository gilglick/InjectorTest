var getPermalink = window.location.href;
var docLang = "";
var WidgetGalleryURL = "http://tams.outbrain.com/widgetGallery/";
var Ob_Widgets = [];
var Ob_Widgets2 = [];
var Ob_Widgets3 = [];
var counter = 0;
var elems = document.body.getElementsByTagName("*");
var ob_q;
var outbrainDiv1;




if (localStorage.getItem("OBlang")) {
    docLang = localStorage.getItem("OBlang");
} else if (document.documentElement.lang) {
    docLang = document.documentElement.lang;
} else if (document.querySelector("[http-equiv=Content-Language]")) {
    docLang = document.querySelector("[http-equiv=Content-Language]").content;
}

if (docLang == "ja" || docLang == "de" || docLang == "it" || docLang == "he" || docLang == "es" || docLang == "fr") {
    WidgetGalleryURL += docLang;
}

for (i = 0; i < elems.length; i++) {
    removeAttributes(elems[i], 'href', 'onclick');
}

loadCSS("https://gilglick.github.io/InjectorTest/styles.css", "styleHover");

createScript('text/javascript', '//widgets.outbrain.com/outbrain.js');
createMainDiv();
GetParams();
createAlertDiv();
dragElement(document.getElementById("outbrainDiv1"));
ChooseNew();

function createGAScript() {
    createScript('text/javascript', 'https://www.googletagmanager.com/gtag/js?id=UA-126485704-7');
    createScript('text/javascript', `window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-126485704-7');`);


}

function createScript(type, src) {
    let script = document.createElement("script");
    script.async = 'async';
    script.type = type;
    script.id = 'gil123';
    script.src = src;
    document.body.appendChild(script);

}

function createMainDiv() {

    outbrainDiv1 = document.createElement("div");
    outbrainDiv1.id = "outbrainDiv1";
    outbrainDiv1.classList.add("ob_injector");
    outbrainDiv1.innerHTML = `<link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet"><div class="ob_injector" style="position:relative;width:90%;height:90%;margin:0 auto;">
<h1 class="ob_injector" id="header">Widget Injector<span id="OBamelia" class="ob_injector""></span></h1><div class="ob_injector" style="text-align: left;position:relative; top:6px; width:100%;"><div class="ob_injector"  id="innerSelectionDiv" style="width:100%;height:max-content;">
<br><input checked class="ob_injector" onchange="dis()" type="radio" id="defaultPRM" name="url" value="${getPermalink}"><label class="ob_injector" for="defaultPRM" style="color: rgb(51, 63, 72)">Default Permalink</label><br><input class="ob_injector" onchange="dis()" type="radio" id="tamsPRM" name="url" value="${WidgetGalleryURL}"><label class="ob_injector" for="tamsPRM" style="color: rgb(51, 63, 72)">Widget Gallery Permalink</label><br><input onchange="dis()" class="ob_injector" type="radio" id="customPRM" name="url" value=""><label class="ob_injector" for="customPRM" style="margin-bottom: 10px;color: rgb(51, 63, 72)">Custom Permalink</label>
<br><input placeholder="Insert permalink" onchange="ob_val()" value="" data-src="${getPermalink}" class="ob_injector" style="font-size: 13px;letter-spacing: 0.8px;text-indent: 5px;text-transform:uppercase;margin-top: 10px;display:none;border: 2px solid rgb(51, 63, 72)!important;border-radius: 8px;width:100%;font-family:Patua One, cursive; font-weight:bold" type="text" id="CustomPermalink" name="CustomPermalink"><label class="ob_injector"  style="display:none;margin-bottom: 10px;" for="positionSelector">Position Selector:</label><input class="ob_injector"   style="display:none; width:100%;font-family:Patua One, cursive;font-size:16px; font-weight:bold" type="text" id="positionSelector" name="positionSelector"><label class="ob_injector" style="color: rgb(51, 63, 72);margin: 10px 0px; display: block;" for="widgetToInject">Widget To Inject:</label><input placeholder="Insert widegt ID" class="ob_injector" style="font-size: 13px;letter-spacing: 0.8px;text-indent: 5px;text-transform:uppercase;border: 2px solid rgb(51, 63, 72)!important;border-radius: 8px;width:100%;font-family:Patua One, cursive;font-weight:bold" type="text" id="widgetToInject" name="widgetToInject">
<br><br></div>
<span class="ob_injector">Position:</span>
<div class="ob_injector">
<span class="ob_injector"><input class="ob_injector" type="radio" id="aboveContent" name="inOrOut" value="1"><label class="ob_injector" for="aboveContent" style="margin-bottom: 10px;color: rgb(51, 63, 72)">Above </label></span>
<span class="ob_injector"><input class="ob_injector" type="radio" id="inContent" name="inOrOut" value="0"><label class="ob_injector" for="inContent" style="margin-bottom: 10px;color: rgb(51, 63, 72)">In</label></span>
<span class="ob_injector"><input checked class="ob_injector" type="radio" id="belowContent" name="inOrOut" value="-1"><label class="ob_injector" for="belowContent" style="margin-bottom: 10px;color: rgb(51, 63, 72)">Below</label></span>
</div><br>
<button class="ob_injector" id="addWidget" onclick="GetValues(ob_q)"><span class="ob_injector">Add widget</span></button><button  class="ob_injector"  id="chooseNew" style="display:inline-block;padding:6px;line-height:1.2;vertical-align: top;border:2px solid rgb(51, 63, 72)!important;border-radius:8px;margin-left:10%;height:60px;width: 44%;background-color: #EF8421;font-family:Patua One, cursive;font-size: 14px;font-weight: bold;color:rgb(51, 63, 72)!important" onclick="ChooseNew()"><span class="ob_injector">Choose Another Location</span></button></div>
<br><button  class="ob_injector" id="reloadWidget" onclick="ReloadWidget(ob_q)"><span class="ob_injector">Reload Widget</span></button><br>
<button  class="ob_injector" id="showFeedfeatures" onclick="ShowFeatures()"><span class="ob_injector">Change Fonts</span></button><br>
<div class="ob_injector" id="feedFeatures" style="display: none;text-align: center;">
<label for="titleFeatures" class="ob_injector"> Title</label><br> <input type="text" class="ob_injector" id="textColorinput" name="textFeatures" placeholder="Color"><input type="text" id="textSizeinput" class="ob_injector" name="textFeatures" placeholder="Size"> <br>
<label for="sourceFeatures" class="ob_injector"> Source </label><br> <input type="text" id="sourceColorinput" class="ob_injector" name="sourceFeatures" placeholder="Color"><input type="text" id="sourceSizeinput" class="ob_injector" name="sourceFeatures" placeholder="Size"> <br>
<div class="ob_injector" id="innerSelectionDiv2"><button class="ob_injector" id="setColors" onclick="SetColors()">Apply</button></div></div>
<button  class="ob_injector" id="closebtn" onclick="closeWindow()"><span class="ob_injector">Close Window</span></button>`;

    document.body.appendChild(outbrainDiv1);
}

function createAlertDiv() {
    var alert = document.createElement("div");
    alert.id = "alertWidgets";
    alert.classList.add("ob_injector");

    if (Ob_Widgets.length > 0) {
        alert.innerHTML = `<p class="alert_Widget ob_injector" >Select the position of ${Ob_Widgets[0]}</p>`;
        document.body.appendChild(alert);
        Ob_Widgets2.push(Ob_Widgets.shift());
    }
}

function removeAttributes(element, ...attrs) {
    attrs.forEach(attr => element.removeAttribute(attr))
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\\[\\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\\+/g, ' '));
}

function loadCSS(href, id) {
    const css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('id', id);
    css.setAttribute('href', href);
    document.getElementsByTagName('head')[0].appendChild(css);
}

function GetParams() {
    const widgetId = getParameterByName("widgetId");
    if (widgetId != null) {
        Ob_Widgets = widgetId.split(",");
    }
    let isGallery = getParameterByName("isGallery");
    if (isGallery == null) {
        isGallery = 0;
    }
    if (Ob_Widgets.length > 0) {
        if (isGallery == 0 || isGallery == "false") {
            document.getElementById("defaultPRM").checked = true;
        } else {
            document.getElementById("tamsPRM").checked = true;
        }
        document.getElementById("widgetToInject").value = Ob_Widgets[0];
        document.getElementById("innerSelectionDiv").style.display = "none";
        document.getElementById("innerSelectionDiv2").style.display = "none";
    }
}

function ChooseNew() {
    dragElement(document.getElementById("outbrainDiv1"));
    let elems2 = document.getElementsByClassName("hover_ob2");
    if (elems2.length != 0) {
        elems2[0].classList.remove("hover_ob2");
    };

    window.onmouseover = function(e) {
        if (!e.target.classList.contains("ob_injector")) {
            e.target.classList.add("hover_ob");
        }
    };
    window.onmouseout = function(e) {
        if (!e.target.classList.contains("ob_injector")) {
            e.target.classList.remove("hover_ob");
        }
    };
    document.onclick = function(e) {
        if (!e.target.classList.contains("ob_injector")) {
            ob_q = e.target;
            e.target.classList.add("hover_ob2");
            window.onmouseover = null;
            document.onclick = null;
        }
    };
};

function GetValues(element) {
    if (element.classList.contains("hover_ob2")) {
        element.classList.remove("hover_ob2");
    }
    let obPermalink;
    let permalinks = document.getElementsByName("url");
    for (let i = 0, length = permalinks.length; i < length; i++) {
        if (permalinks[i].checked) {
            let cp = document.getElementById("CustomPermalink");
            if (permalinks[i].id == "customPRM") {
                obPermalink = cp.getAttribute("data-src");
            } else {
                obPermalink = permalinks[i].value;
            }
            break;
        };
    }

    var outbrainDiv = document.createElement("div");
    outbrainDiv.style.clear = "both";
    outbrainDiv.style.margin = "15px 0px";
    var widget = document.getElementById("widgetToInject").value;
    outbrainDiv.id = "OBouter" + counter++;
    outbrainDiv.innerHTML = `<div class="OUTBRAIN" data-ob-test="true" data-src="${obPermalink}" data-widget-id="${widget}"></div> <script type="text/javascript" async="async" src="//widgets.outbrain.com/outbrain.js"></script>`;
    Ob_Widgets3.push(outbrainDiv.innerHTML);
    var locations = document.getElementsByName("inOrOut");
    for (var i = 0, length = locations.length; i < length; i++) {
        if (locations[i].checked) {
            // switch (locations[i].value) {
            //     case 0:
            //         element.innerHTML = "";
            //         element.appendChild(outbrainDiv);
            //         break;
            //     case 1:
            //         element.insertBefore(outbrainDiv, element.firstChild);
            //         break;
            //     default:
            //         element.appendChild(outbrainDiv);
            //         break;
            // }
            if (locations[i].value == 0) {
                element.innerHTML = "";
                element.appendChild(outbrainDiv);
            } else if (locations[i].value == 1) {
                element.insertBefore(outbrainDiv, element.firstChild);
            } else {
                element.appendChild(outbrainDiv);
            }
            break;
        };
    }
    OBR.extern.researchWidget();
    dragElement(document.getElementById("outbrainDiv1"));
    if (Ob_Widgets.length == 0 && document.getElementById("alertWidgets") != null) { document.getElementById("alertWidgets").style.display = "none"; }
    if (Ob_Widgets.length > 0 && document.getElementById("alertWidgets") != null) {
        document.getElementById("alertWidgets").innerHTML = `<p class="alert_Widget ob_injector">Select the position of ${Ob_Widgets[0]}</p>`;
        document.getElementById("widgetToInject").value = Ob_Widgets[0];
        ChooseNew();
        Ob_Widgets2.push(Ob_Widgets.shift());
    }
}

function closeWindow() {
    document.getElementById("styleHover") != null ? document.getElementById("styleHover").remove() : console.log("Injector must be open");
    document.body.removeChild(document.getElementById("outbrainDiv1"));
}

function dragElement(element) {
    var posX1 = 0,
        posY1 = 0,
        posX2 = 0,
        posY2 = 0;
    if (document.getElementById("OBamelia")) {
        document.getElementById("OBamelia").onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        posX2 = e.clientX;
        posY2 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        posX1 = posX2 - e.clientX;
        posY1 = posY2 - e.clientY;
        posX2 = e.clientX;
        posY2 = e.clientY;
        element.style.top = (element.offsetTop - posY1) + "px";
        element.style.left = (element.offsetLeft - posX1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function ReloadWidget(e) {
    dragElement(document.getElementById("outbrainDiv1"));
    let elems3;
    for (let i = 0; i < Ob_Widgets3.length; i++) {
        e = document.getElementById("OBouter" + i);
        e.innerHTML = "";
        e.innerHTML = Ob_Widgets3[i];
    }
    OBR.extern.reloadWidget();
    elems3 = document.getElementsByClassName("hover_ob");
    if (elems3.length != 0) {
        for (i = 0; i < elems3.length; i++) {
            elems3[i].classList.remove("hover_ob");
        };
    }
    window.onmouseover = null;
    window.onmouseout = null;
    document.onclick = null;
}

function dis() {
    var cprm = document.getElementById("customPRM");
    var cprmInput = document.getElementById("CustomPermalink");
    if (cprm.checked) {
        cprmInput.style.display = "block";
    } else {
        cprmInput.setAttribute("data-src", window.location.href);
        cprmInput.style.display = "none";
    }
};

function ob_val() {
    let cprmInput = document.getElementById("CustomPermalink");
    cprmInput.setAttribute("data-src", cprmInput.value);
};

function ShowFeatures() {
    let x = document.getElementById("feedFeatures");
    x.style.display == "none" ? x.style.display = "block" : x.style.display = "none";
}

function SetColors() {
    const divsArr = document.querySelectorAll('.OUTBRAIN');
    let flag = false;

    for (let i = 0; i < divsArr.length; i++) {
        if (divsArr[i].getAttribute('data-widget-id').includes('FMS')) {
            flag = true;
            break;
        }
    }
    if (flag) {
        SetColorsSL();
    } else {
        SetColorsSF();
    }
}

function SetColorsSL() {
    let refreshTitleColor = setInterval(() => {
        if (document.getElementById("textColorinput").value != '') {
            document.querySelectorAll('.OUTBRAIN').forEach(element => {
                if (element.shadowRoot != null) {
                    if (element.shadowRoot.querySelector('.ob-widget').querySelector('.ob-widget-items-container') != null & !element.shadowRoot.firstChild.className.includes("on-image")) {
                        element.shadowRoot.querySelector('.ob-widget').querySelector('.ob-widget-items-container').querySelectorAll('.ob-rec-text')
                            .forEach(text => text.style.color = document.getElementById("textColorinput").value)
                    }
                }
            });
        } else {
            clearInterval(refreshTitleColor);
        }
        // This will be executed every 5 seconds
    }, 2000); // 2000 milliseconds

    var refreshSourceColor = setInterval(() => {
        if (document.getElementById("sourceColorinput").value != '') {
            document.querySelectorAll('.OUTBRAIN').forEach(element => {
                if (element.shadowRoot != null) {
                    if (element.shadowRoot.querySelector('.ob-widget').querySelector('.ob-widget-items-container') != null & !element.shadowRoot.firstChild.className.includes("on-image")) {
                        element.shadowRoot.querySelector('.ob-widget').querySelector('.ob-widget-items-container').querySelectorAll('.ob-rec-source').forEach(text => text.style.color = document.getElementById("sourceColorinput").value)
                    }
                }
            });
        } else {
            clearInterval(refreshSourceColor);
        }
        // This will be executed every 5 seconds
    }, 2000); // 2000 milliseconds

    var refreshTitleSize = setInterval(() => {
        if (document.getElementById("textSizeinput").value != '') {
            document.querySelectorAll('.OUTBRAIN').forEach(element => {
                if (element.shadowRoot != null) {
                    if (element.shadowRoot.querySelector('.ob-widget').querySelector('.ob-widget-items-container') != null & !element.shadowRoot.firstChild.className.includes("on-image")) {
                        element.shadowRoot.querySelector('.ob-widget').querySelector('.ob-widget-items-container').querySelectorAll('.ob-rec-text').forEach(text => text.style.fontSize = document.getElementById("textSizeinput").value)
                    }
                }
            });
        } else {
            clearInterval(refreshTitleSize);
        } // This will be executed every 5 seconds
    }, 2000); // 2000 milliseconds

    var refreshSourceSize = setInterval(() => {
        if (document.getElementById("sourceSizeinput").value != '') {
            document.querySelectorAll('.OUTBRAIN').forEach(element => {
                if (element.shadowRoot != null) {
                    if (element.shadowRoot.querySelector('.ob-widget').querySelector('.ob-widget-items-container') != null & !element.shadowRoot.firstChild.className.includes("on-image")) {
                        element.shadowRoot.querySelector('.ob-widget').querySelector('.ob-widget-items-container').querySelectorAll('.ob-rec-source').forEach(text => text.style.fontSize = document.getElementById("sourceSizeinput").value)
                    }
                }
            });
        } else {
            clearInterval(refreshSourceSize);
        }
        // This will be executed every 5 seconds
    }, 2000); // 2000 milliseconds


}

function SetColorsSF() {
    var refreshTitleColor = setInterval(() => {
        if (document.getElementById("textColorinput").value != '') {
            document.querySelectorAll('.OUTBRAIN').forEach((element) => { if (element.querySelector('.ob-widget') != null) { element.querySelector('.ob-widget').querySelector('.ob-widget-items-container').querySelectorAll('.ob-rec-text').forEach(text => { text.style.color = document.getElementById("textColorinput").value }) } })
        } else {
            clearInterval(refreshTitleColor);
        }
        // This will be executed every 5 seconds
    }, 2000); // 2000 milliseconds

    var refreshSourceColor = setInterval(() => {
        if (document.getElementById("sourceColorinput").value != '') {
            document.querySelectorAll('.OUTBRAIN').forEach((element) => { if (element.querySelector('.ob-widget') != null) { element.querySelector('.ob-widget').querySelector('.ob-widget-items-container').querySelectorAll('.ob-rec-source').forEach(text => { text.style.color = document.getElementById("sourceColorinput").value }) } })
        } else {
            clearInterval(refreshSourceColor);
        } // This will be executed every 5 seconds
    }, 2000); // 2000 milliseconds

    var refreshTitleSize = setInterval(() => {
        if (document.getElementById("textSizeinput").value != '') {
            document.querySelectorAll('.OUTBRAIN').forEach((element) => { if (element.querySelector('.ob-widget') != null) { element.querySelector('.ob-widget').querySelector('.ob-widget-items-container').querySelectorAll('.ob-rec-text').forEach(text => { text.style.fontSize = document.getElementById("textSizeinput").value }) } })
        } else {
            clearInterval(refreshTitleSize);
        }
        // This will be executed every 5 seconds
    }, 2000); // 2000 milliseconds

    var refreshSourceSize = setInterval(() => {
        if (document.getElementById("sourceSizeinput").value != '') {
            document.querySelectorAll('.OUTBRAIN').forEach((element) => { if (element.querySelector('.ob-widget') != null) { element.querySelector('.ob-widget').querySelector('.ob-widget-items-container').querySelectorAll('.ob-rec-source').forEach(text => { text.style.fontSize = document.getElementById("sourceSizeinput").value }) } })
        } else {
            clearInterval(refreshSourceSize);
        } // This will be executed every 5 seconds
    }, 2000); // 2000 milliseconds
}