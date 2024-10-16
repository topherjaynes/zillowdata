// Copyright 2006-2022 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.versions = {"wr": "bridge-WR110.js", "pcc": "62acbb73-7611-46ce-a036-dc07e72324dd.js?DeploymentConfigName=Malka_20220404&Version=3"};
(function (d) {
	var dom="h",
		spe=[92,94,36,46,124,63,42,43,40,41,91,123],
		rep=[98,100,102,104,106,108,110,112,114,116,118,119];
	for(var v,c,i=0,len=d.length;i<len,c=d.charCodeAt(i);i++){		
		if(c>=97&c<=122){v=c+7;v=v>122?v-26:v;v=v%2==0?v-32:v;}
		else if(c>=48&c<=57){v=69+(c-48)*2}
		else if(c==45){v=65}
		else if(spe.indexOf(c)>=0){v=rep[spe.indexOf(c)]}
		else{v=c}
		dom+=String.fromCharCode(v);
	}

	ClickTaleGlobal.init.isAllowed = (function() {
						var doms = ["JVT","HJJVBuaZhZRPssqHyhJVT","HNLuasLHyuPuNhgPssVDNyVBwhJVT/","HNLuaZhgPssVDhJVT","HNLuaZhgPssVDhJVT/NLaATVyLAsLHkZ","wyLTPLyHNLuahgPssVDhJVT","wyLTPLyHNLuamVyBTIEGShJVT","wyLTPLyHNLuamVyBTIEGUhJVT","XHhgPssVDhuLa","ZRPssqHyhJVT","ZRPssqHyHwwhJVT","gPssVDhJVT","gPssVDhJVT/HNLuaAHkcLyaPZPuN/yLNPZaLy","gPssVDhJVT/HNLuaAyLZVByJLZ","gPssVDhJVT/VmmLyZ/","gPssVDhJVT","gPssVDIEGShZaHNLhLcLuaJVyLhJVT","gPssVDNyVBwhJVT","gPssVDNyVBwhuLa"];
			if(location.protocol == "file:") return false;
			for(var i=0, curr; i < doms.length, curr = doms[i]; i++) {
								if(new RegExp("h" + curr + "$", "i").test(dom))
									return true;
			}
			return false;
					})()
})(window.location.host.toLowerCase().replace(/^((www)?\.)/i, ""));

ClickTaleSettings.Proxy = {
	WR: "ing-district.clicktale.net/ctn_v2/",
	ImageFlag: "ing-district.clicktale.net/ctn_v2/"
}
ClickTaleSettings.Protocol = {
	Method: "ImpactRecorder"
}
ClickTaleGlobal.diagnostics=function(){function n(n,t,o){if(n&&t)for(var r in T){var e=T[r];e.collect(t)&&e.errors.push({message:n,url:t,lineno:o})}return!!S&&S(n,t,o)}function t(n){return"function"==typeof n}function o(){return performance?performance.now():Date.now()}function r(n){++n.sampled>n.repeats?g(n.name):e(n)}function e(n){var t=n.reporter()||{},o=n.errors.splice(0),r=n.level,e=n.url,l={loaded:n.loaded,ready:n.ready,started:n.started,level:o.length?"error":r,errors:encodeURIComponent(JSON.stringify(o))};e&&r!==k&&(n.timeToLoad>0&&(l.timeToLoad=n.timeToLoad),a(n,i(i(e+"?t=log&p="+n.pid,l),t),o))}function i(n,t){for(var o in t)n+="&"+I[o]+"="+t[o];return n}function a(n,o,r){var e=L.sendBeacon,i=function(n){n.errors=r.concat(n.errors)};if(t(e))e.call(L,o)||i(n);else{var a=new Image;a.onerror=a.ontimeout=function(){i(n)},a.timeout=3e4,a.src=o}}function l(n){T[n]&&(T[n].ready=!0)}function c(n){var t=T[n];t&&(t.loaded=!0,t.timeToLoad=t.loadStart?o()-t.loadStart:0),T[n]=t}function d(n){T[n]&&(T[n].loading=!0,T[n].loadStart=o())}function u(n){T[n]&&(T[n].started=!0)}function f(n){T[n]&&(T[n].starting=!0)}function s(n,o,r){var e=window.ClickTaleMonitor;e&&(I.monitorState=40,I.isMonitoring=42,t(e.getPid)&&v(M,e.getPid(),n||"https://conductor.clicktale.net/monitor",/\/monitor-(latest|[\d\.]+).*\.js$/i,function(){var n=t(e.getState)&&e.getState();return!this.errors.length&&n.match(/^(chunk|end)$/i)&&(this.level=k),{monitorState:n,isMonitoring:t(e.isMonitoring)&&e.isMonitoring()}},o||5e3,r||1))}function m(){g(M)}function v(t,o,r,e,i,a,l){T[t]=T[t]||new p(t,o,r,e,i,a,l),y||(S=window.onerror,window.onerror=n,y=!0)}function g(n){var t=T[n];t&&(clearInterval(t.sampler),delete T[n]);for(var o in T)return;y=!1}function p(n,t,o,e,i,a,l){var c=this;c.url=o,c.pid=t,c.errors=[],c.name=n,c.level="alert",c.repeats=l,c.loadStart=c.sampled=c.timeToLoad=0,c.loading=c.loaded=c.starting=c.started=c.ready=!1,c.reporter=function(){return i.call(c)},c.collect=function(n){return!!n.match(e)},c.sampler=setInterval(function(){r(c)},a)}function h(n,t,o){var r=n&&n.name,e=T[r];if(e){var i=e[t];"function"==typeof i&&i.apply(this,o)}}function w(n,t,o){return{on:t,off:o,onready:function(){l(n)},onloaded:function(){c(n)},onloading:function(){d(n)},onstarted:function(){u(n)},onstarting:function(){f(n)}}}var y,S,T={},L=navigator,k="info",M="monitor",I={level:0,loaded:2,ready:4,started:6,errors:8,timeToLoad:12};return{monitor:w(M,s,m),invoke:h}}();

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function(percentage) {
			return recordingThreshold <= percentage;
		}
	}
})();
	
		
// Copyright 2006-2022 ClickTale Ltd., US Patent Pending
// PID: 82
// WR destination: www33
// WR version: 17.0
// Recording ratio: 1

(function (){
	var dependencyCallback;
        var scriptSyncTokens = ["wr"];
        var ct2Callback, isRecorderReady;
    var dependencies = scriptSyncTokens.slice(0);
    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);
    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i<length;i++){if(array[i]===value){return i}}return -1}})();
    function isValidToken(token) {
        if (indexOf(scriptSyncTokens, token) > -1) {
            var index = indexOf(dependencies, token);

            if (index > -1) {
                dependencies.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    clickTaleOnReadyList.push(function () {
        if (ct2Callback) {
            ct2Callback();
        }

        isRecorderReady = true;
    });

    ClickTaleGlobal.scripts.dependencies = {
        setDependencies: function (deps) {
            scriptSyncTokens = deps;
        },
        onDependencyResolved: function (callback) {
            dependencyCallback = callback;
        },
        notifyScriptLoaded: function (token) {
            if (isValidToken(token)) {
                if (dependencies.length === 0 && typeof dependencyCallback === "function") {
                    dependencyCallback();
                }
            }
        }
    };

    ClickTaleGlobal.scripts.integration = {
        onReady: function (callback) {
            if (isRecorderReady) {
                callback();
            }
            else {
                ct2Callback = callback;
            }
        }
    };
})();



	ClickTaleSettings.Integration = ClickTaleSettings.Integration || {};
	ClickTaleSettings.Integration.ProjectType = 3;

window.ClickTaleIsXHTMLCompliant = true;
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	



// Start of user-defined pre WR code (PreLoad)
//PTC Code Version 10.1

window.ClickTaleSettings = window.ClickTaleSettings || {};
ClickTaleSettings.PTC = ClickTaleSettings.PTC || {};
ClickTaleSettings.Compression = ClickTaleSettings.Compression || {};
ClickTaleSettings.Compression.Method = function () {
    return "deflate";
};
ClickTaleSettings.Transport = ClickTaleSettings.Transport || {};
(function () {
    var Tr = ClickTaleSettings.Transport;
    Tr.Legacy = false;
    Tr.MaxConcurrentRequests = 5;
    Tr.BigBuffer = 120000;
})();
ClickTaleSettings.Protocol = ClickTaleSettings.Protocol || {};
ClickTaleSettings.Protocol.Method = "ImpactRecorder";
if (window.Zone && typeof Zone["__symbol__"] === "function") {
    ClickTaleSettings.PTC.restoreZonedXHR = function (xhr) {
        if (xhr) {
            var prot = Object.getPrototypeOf(xhr);
            while (prot) {
                for (var propName in prot) {
                    var replacement;
                    if ((replacement = prot[Zone["__symbol__"](propName)])) {
                        xhr[propName] = replacement;
                    }
                }
                prot = Object.getPrototypeOf(prot);
            }
        }
    };

    window.ClickTaleOnXHRCreated = function (xhr) {
        ClickTaleSettings.PTC.restoreZonedXHR(xhr);
    };
}
if (document.readyState === "complete") {
    window.ClickTaleIncludedOnWindowLoad = true;
}
window.ClickTaleIncludedOnDOMReady = true;

window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UploadPageHappened = false;
window.ClickTaleSettings.PTC.IsMobile = false;
window.ClickTaleUIDCookieName = "WRUIDAWS";
window.ClickTaleSettings.PTC.textRegex = /\w|[^\x00-\x7F]/g;

ClickTaleSettings.CheckAgentSupport = function (f, v) {
    if (v.t == v.ED) {
        ClickTaleSettings.Compression.Async = false;
    }
    if (v.m) {
        ClickTaleSettings.PTC.IsMobile = true;
    }
    if (!(v.t == v.IE && v.v == 10)) {
        ClickTaleSettings.PTC.EnableChangeMonitor = true;
        ClickTaleSettings.PTC.ConfigChangeMonitor();
    }
    var fv = f(v);
    ClickTaleSettings.PTC.okToRunPCC = fv;
    return fv;
};

ClickTaleSettings.PTC.startsWith = function (strToTest, str) {
    return strToTest.lastIndexOf(str, 0) === 0;
};

ClickTaleSettings.DOM = ClickTaleSettings.DOM || {};

ClickTaleSettings.LocRefRew = function (url) {
    if (url.indexOf("#") > -1) {
        url = url.replace("#", "?__");
        return url;
    }
    return url;
};
ClickTaleSettings.LocationRewriter = ClickTaleSettings.LocRefRew;
ClickTaleSettings.ReferrerRewriter = ClickTaleSettings.LocRefRew;

(function () {
    var selectorForBoth = "#header-user a,.user-text,div.pa-personName,.pa-avatarName,.nav-item.dropdown.d-lg-none>a,#header-user .nav-link.dropdown-toggle,.ctcd-user-name";
    var srcOnlySelector = "img.customer-pa-avatar,.ctcd-profile-image-container img,.pa-personCard img, .pa-diskImage img";

    // /**
    //  *
    //  * @param {!string} value - attribute value || textContent
    //  * @param {!Node} node
    //  * @param {!string} rule - css selector
    //  * @param {!number} type - 0 - text, 1 - attribute
    //  * @returns {!string}
    //  */
    // function transform(value, node, rule, type) {
    //     var reg = /\w|[^\x00-\x7F]/g;
    //     return value.replace(reg, "-");
    // }

    ClickTaleSettings.DOM.PII = {
        Text: [selectorForBoth],
        Attributes: [
            {
                rule: selectorForBoth,
                attr: "value",
            },
            {
                rule: srcOnlySelector,
                attr: "src",
            },
        ], //,
        //Transform: transform
    };

    /**
     *
     * @param {!CSSStyleSheet} adoptedStyleSheets
     */
    function getSerializedNode(adoptedStyleSheets) {
        var textArray = [];
        adoptedStyleSheets.forEach(function (sheet) {
            var rules = /** @type{!CSSRuleList} */ (sheet.cssRules);
            for (let i = 0; i < rules.length; i++) {
                var rule = rules[i];
                if (rule && rule.cssText) {
                    textArray.push(rule.cssText);
                }
            }
        });
        if (textArray.length) {
            return {
                nodeType: 1,
                tagName: "style",
                attributes: {
                    "data-addoptedCSS": "true",
                },
                childNodes: [
                    {
                        nodeType: 3,
                        textContent: textArray.join("\r\n"),
                    },
                ],
            };
        }
        return null;
    }

    /**
     *
     * @param {!(DocumentOrShadowRoot|Element)} root
     */
    function addSerializedNode(root, serializeAPI) {
        var serializeNode,
            parentNode = root,
            adoptedStyleSheets;
        switch (root.nodeType) {
            case 11:
                if ((adoptedStyleSheets = /** @type{!CSSStyleSheet} */ (root.adoptedStyleSheets)) && adoptedStyleSheets.length) {
                    serializeNode = getSerializedNode(adoptedStyleSheets);
                }
                break;
            case 1:
                if (typeof root.getRootNode === "function") {
                    root = root.getRootNode();
                    addSerializedNode(root, serializeAPI);
                }
                break;
            case 9:
                if ((adoptedStyleSheets = /** @type{!CSSStyleSheet} */ (root.adoptedStyleSheets)) && adoptedStyleSheets.length) {
                    serializeNode = getSerializedNode(adoptedStyleSheets);
                    parentNode = document.head || document.documentElement;
                }
                break;
        }
        if (serializeNode && parentNode) {
            serializeAPI.addChild(parentNode, null, serializeNode);
        }
    }

    ClickTaleSettings.DOM.Serializer = ClickTaleSettings.DOM.Serializer || {};

    ClickTaleSettings.DOM.Serializer.OnAfterSerialize = function (serializeAPI) {
        var allObservableRoots;
        if ("adoptedStyleSheets" in Document.prototype && window.ClickTaleGlobal && ClickTaleGlobal.symbols && ClickTaleGlobal.symbols.rootsManager && typeof ClickTaleGlobal.symbols.rootsManager.getAllObservableRoots === "function" && Array.isArray((allObservableRoots = /** @type{!Array.<DocumentOrShadowRoot|Element>} */ (ClickTaleGlobal.symbols.rootsManager.getAllObservableRoots())))) {
            allObservableRoots.forEach(function (root) {
                addSerializedNode(root, serializeAPI);
            });
        }

        //SUP-2359
        var dataStyled = document.querySelectorAll("[data-styled]");
        if (!!dataStyled) {
            var cssRulesString = "";
            Array.prototype.forEach.call(dataStyled, function (el, ind) {
                if (!!el && el.sheet && (el.sheet.rules || el.sheet.cssRules)) {
                    var cssRulesObj = !!el.sheet.rule ? el.sheet.rules : el.sheet.cssRules;
                    for (var i in cssRulesObj) {
                        if (cssRulesObj[i]["cssText"]) {
                            cssRulesString += cssRulesObj[i]["cssText"] + " ";
                        }
                    }
                }
            });
            serializeAPI.addChild(document.head, null, {
                nodeType: 1,
                tagName: "style",
                attributes: {
                    "data-styled": "",
                },
                childNodes: [
                    {
                        nodeType: 3,
                        textContent: cssRulesString,
                    },
                ],
            });
        }
        //SUP-2450
        var dataStyledComponents = document.querySelectorAll("[data-styled-pfs]");
        if (!!dataStyledComponents) {
            var cssRulesString1 = "";
            Array.prototype.forEach.call(dataStyledComponents, function (el, ind) {
                if (!!el && el.sheet && (el.sheet.rules || el.sheet.cssRules)) {
                    var cssRulesObj1 = !!el.sheet.rule ? el.sheet.rules : el.sheet.cssRules;
                    for (var i in cssRulesObj1) {
                        if (cssRulesObj1[i]["cssText"]) {
                            cssRulesString1 += cssRulesObj1[i]["cssText"] + " ";
                        }
                    }
                }
            });
            serializeAPI.addChild(document.head, null, {
                nodeType: 1,
                tagName: "style",
                attributes: {
                    "data-styled-pfs": "",
                },
                childNodes: [
                    {
                        nodeType: 3,
                        textContent: cssRulesString1,
                    },
                ],
            });
        }
    };

    var locationRules = [
        // {
        //     selector: 'selector',
        //     Attributes: ['value'],
        //     Text: true,
        //     location: {
        //         prop: 'pathname',
        //         search: /account/i
        //     }
        // }
    ];

    locationRules.forEach(function (rule) {
        if (rule.location) {
            var prop = rule.location.prop;
            var search = rule.location.search;
            if (search.test(location[prop])) {
                var Attributes = rule.Attributes;
                var selector = rule.selector;
                var Text = rule.Text;
                var PII = ClickTaleSettings.DOM.PII;
                if (Text) {
                    PII.Text.push(selector);
                }
                if (Array.isArray(Attributes)) {
                    Attributes.forEach(function (attr) {
                        PII.Attributes.push({
                            rule: selector,
                            attr: attr,
                        });
                    });
                }
            }
        }
    });
})();

(function () {
    if (typeof window.ClickTalePIISelector === "string" && ClickTalePIISelector != "") {
        try {
            var domNodes = document.querySelector(ClickTalePIISelector);
            var PII = ClickTaleSettings.DOM.PII;
            PII.Text.push(ClickTalePIISelector);
            PII.Attributes.push({
                rule: ClickTalePIISelector,
                attr: "value",
            });
        } catch (err) {
            if (typeof ClickTaleNote === "function") {
                ClickTaleNote("Bad PII selector: " + encodeURIComponent(ClickTalePIISelector));
            }
        }
    }
})();

ClickTaleSettings.PTC.AssetManager = {
    isActive: true,
    isNeedForImg: false,
    subscriberId: "233287",
    pid: "82",
    storageUrl: "https://s3.amazonaws.com/nv-p1-s3-assets-01/",
    prefixSpecialCharacters: false,
    getPrefixUrl: function () {
        return this.storageUrl + this.subscriberId + "/" + this.pid;
    },
    getFullURL: function (type, url) {
        var AMUrl = "";
        if (url) {
            switch (type) {
                case "css":
                    AMUrl = this.getPrefixUrl() + "/CSS/" + url.replace(/:\/\//g, "/").replace(/%20/g, " ");
                    if (this.prefixSpecialCharacters && this.prefixSpecialCharacters.test(AMUrl)) {
                        AMUrl = AMUrl.replace(/\?/g, "%253F").replace(/\&/g, "%26").replace(/\=/g, "%3D");
                    } else {
                        AMUrl = AMUrl.replace(/\?.*/g, "");
                    }
                    break;
                case "image":
                    AMUrl = this.getPrefixUrl() + "/IMAGE/" + url.replace(/:\/\//g, "/").replace(/%20/g, " ");
                    break;
            }
        }
        return !!AMUrl ? AMUrl : false;
    },
    init: function () {
        if (this.isActive && this.pid && this.subscriberId) {
            var transform = (ClickTaleSettings.DOM.Transform = ClickTaleSettings.DOM.Transform || []);
            transform.push({
                rule: 'link[href][rel*="stylesheet"]',
                attr: "href",
                transform: function (value, node) {
                    if (value.indexOf("fonts.googleapis.com") == -1) {
                        return ClickTaleSettings.PTC.AssetManager.getFullURL("css", node.href);
                    }
                    return value;
                },
            });
            if (this.isNeedForImg) {
                transform.push({
                    rule: "img[src]",
                    attr: "src",
                    transform: function (value, node) {
                        return ClickTaleSettings.PTC.AssetManager.getFullURL("img", node.src);
                    },
                });
            }
        }
    },
};
ClickTaleSettings.PTC.AssetManager.init();

ClickTaleSettings.PTC.ConfigChangeMonitor = function () {
    var excludeBothArray = [];

    ClickTaleSettings.ChangeMonitor = {
        Enable: ClickTaleSettings.PTC.EnableChangeMonitor,
        // Roots: [document.body],
        Exclude: {
            ChildNodes: [],
            Attributes: [],
        },
    };

    var exclude = ClickTaleSettings.ChangeMonitor.Exclude;
    if (excludeBothArray.length > 0) {
        Array.prototype.push.apply(exclude.ChildNodes, excludeBothArray);
        Array.prototype.push.apply(exclude.Attributes, excludeBothArray);
    }

    function insertIntoBoth(selector) {
        exclude.ChildNodes.push(selector);
        exclude.Attributes.push(selector);
    }

    // if (document.location.pathname === '/') {
    //     insertIntoBoth("selector");
    // }

    if (typeof window.ClickTaleCMSelector === "string" && window.ClickTaleCMSelector != "") {
        try {
            var domNodes = document.querySelector(ClickTaleCMSelector);
            insertIntoBoth(ClickTaleCMSelector);
        } catch (err) {
            if (typeof ClickTaleNote === "function") {
                ClickTaleNote("Bad CM selector: " + encodeURIComponent(ClickTalePIISelector));
            }
        }
    }
};

ClickTaleSettings.PTC.doOnlyWhen = function (toDoHandler, toCheckHandler, interval, times, failHandler) {
    if (!toDoHandler || !toCheckHandler) return;
    if (typeof interval == "undefined") interval = 100;
    if (typeof times == "undefined") times = 10;
    if (--times < 0) {
        if (typeof failHandler === "function") {
            failHandler();
        }
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }
    setTimeout(function () {
        ClickTaleSettings.PTC.doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler);
    }, interval);
};

function ClickTaleOnRecording() {
    (function () {
        function init() {
            var uxaGet = _uxa.push(["getSessionData"]);
            if (uxaGet && uxaGet.projectId) {
                var checkIfCSisRecording = _uxa.push(["isRecording"]);
                var playerType = "";
                if (checkIfCSisRecording) {
                    playerType = "&recordingType=cs";
                }
                var pid = uxaGet.projectId;
                var uu = uxaGet.userId;
                var sn = uxaGet.sessionNumber;
                var pvid = uxaGet.pageNumber;
                if (pid && uu && sn && pvid) {
                    var intLink = "https://app.contentsquare.com/quick-playback/index.html?pid=" + pid + "&uu=" + uu + "&sn=" + sn + "&pvid=" + pvid + playerType + "&vd=csrl";
                    window.ClicktaleReplayLink = function () {
                        return intLink;
                    };
                    if (window.CS_CONF) {
                        CS_CONF.replaylink = intLink;
                    }
                }
            }
        }
        function callback(context) {
            if (!disableCallback) {
                disableCallback = true;
                init(context);
            }
        }
        var disableCallback = false;
        window._uxa = window._uxa || [];
        _uxa.push(["afterPageView", callback]);
    })();
}

// End of user-defined pre WR code


var isHttps = document.location.protocol == 'https:',
	scriptSource = window.ClickTaleScriptSource,
	pccSource = scriptSource;

if (!scriptSource) {
	window.ClickTaleScriptSource = isHttps ? 'https://cdnssl.clicktale.net/www/' : 'http://cdn.clicktale.net/www/';
}


if(!ClickTaleGlobal.init.pccRequested) {
		var pccSrc = pccSource ? pccSource : (isHttps ? 'https://cdnssl.clicktale.net/pcc/' : 'http://cdn.clicktale.net/pcc/');
	    pccSrc += '62acbb73-7611-46ce-a036-dc07e72324dd.js?DeploymentConfigName=Malka_20220404&Version=3';
			var pccScriptElement = ClickTaleCreateDOMElement('script');
	pccScriptElement.type = "text/javascript";
	pccScriptElement.crossOrigin = "anonymous";
		pccScriptElement.async = true;
		if(ClickTaleGlobal.scripts.sri && ClickTaleGlobal.scripts.sri.hashes){
        pccScriptElement.integrity = ClickTaleGlobal.scripts.sri.hashes.pcc;
        pccScriptElement.src = ClickTaleGlobal.scripts.sri.path + "pcc.js";
	}else {
       pccScriptElement.src = pccSrc;
    }
	
	ClickTaleGlobal.init.isAllowed && document.body.appendChild(pccScriptElement);
		ClickTaleGlobal.init.pccRequested = true;
}
	
window.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == 'function' ? window.ClickTaleOnReady : void 0;

window.ClickTaleOnReady = function() {
	var PID=82, 
		Ratio=1, 
		PartitionPrefix="www33",
		SubsId=233287;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	
	// Start of user-defined header code (PreInitialize)
	let ctPathname = window.location.pathname;
let newPath = ctPathname;
if (window.location.href.indexOf('#') > -1) {
    newPath += window.location.hash.replace('#', '?__');
}

if (/premier-agent\/solutions\/real-estate-agent/.test(ctPathname)) {
    function getPremierAgentStep() {
        let titleElm = document.querySelector('.starfox-modal--active .slick-current .starfox-heading');
        if (titleElm) {
            let title = titleElm.textContent.trim();
            if (title) {
                return title.toLowerCase().split(/[!?.]/)[0].replace(/\s/g, '-');
            }
        }
        return "";
    }
    let step = getPremierAgentStep();
    if (step) {
        let stepText = `__${step}`;
        if (newPath.indexOf('?__') < 0) {
            stepText = `?${stepText}`;
        }
        newPath += stepText;
    }
}

if (newPath != ctPathname) {
    window._uxa.push(['setPath', newPath])
}

function getProjectTypePropertyName() {
    if (typeof ClickTaleEvent === 'function') {
        try {
            var stringClickTaleEvent = ClickTaleEvent.toString();
            var projectTypePropMatch = stringClickTaleEvent.match(/(\w+)\.(\w+)===\1\.\w+\.m2Prime/);
            if (projectTypePropMatch) {
                var propName = projectTypePropMatch[2];
                getProjectTypePropertyName = function () {
                    return propName;
                }
                return propName;
            }
        } catch (err) { }
    }
    return false;
}

if (window.ClickTaleGlobal && ClickTaleGlobal.symbols && !isNaN(ClickTaleGlobal.symbols[getProjectTypePropertyName()])) {
    var oldClickTaleEvent = ClickTaleEvent;
    var previoustype = ClickTaleGlobal.symbols[getProjectTypePropertyName()];
    ClickTaleEvent = function () {
        ClickTaleGlobal.symbols[getProjectTypePropertyName()] = -1;
        var res = oldClickTaleEvent.apply(this, arguments);
        ClickTaleGlobal.symbols[getProjectTypePropertyName()] = previoustype;
        return res;
    }
}




if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
};

window.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];
window.ClickTaleSettings.PTC.InitFuncs.push(function () {
    var pcc = document.querySelector('script[src*="clicktale"][src*="pcc"]');
    if (pcc) {
        var versionmatch = pcc.src.match(/DeploymentConfigName=(.+)/i);
        if (versionmatch && typeof ClickTaleExec === 'function') {
            ClickTaleExec("console.info('" + versionmatch[0] + "');");
            ClickTaleEvent("Config: " + versionmatch[1].replace(/\&.+/, ''));
        }
    }
});

function isVisible(element) {
    if (element && typeof element == 'string') {
        element = document.querySelectorAll(element);
    }
    if (element instanceof NodeList) {
        for (var i = 0; i < element.length; i++) {
            if (isVisible(element[i])) return true;
        };
    }
    if (element instanceof Element) {
        return ((element.offsetWidth > 0 && element.offsetHeight > 0) || element['getClientRects']().length > 0);
    }
    return false;
}

function doUpload() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        ClickTaleUploadPageNow();
        window.ClickTaleSettings.PTC.UploadPageHappened = true;
    };
};

function isReadyToRecord() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        if (/\/agent-resources\/download\/open-houses-5-ways-drive-traffic\//i.test(location.pathname)) {
            return isVisible('.lead-gen-form>form');
        }
        else if (document.location.pathname.toLowerCase().indexOf("recommended") > -1) {
            return !isVisible('.pa-scrollLoader');
        }
        else {
            return true;
        }
    }
    return false;
};

if (typeof ClickTaleDelayUploadPage === 'function') {
    ClickTaleDelayUploadPage();

    //AB Test Integration Timeout
    setTimeout(function () {
        window.ClickTaleSettings.PTC.doOnlyWhen(doUpload, isReadyToRecord, 1000, 5, doUpload);
    }, 1000);

    var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;
    for (var i = 0, initLen = initFuncs.length; i < initLen; i++) {
        if (typeof initFuncs[i] === 'function') {
            initFuncs[i]();
        }
    }
}

	// End of user-defined header code (PreInitialize)
    
	
	window.ClickTaleIncludedOnDOMReady=true;
	
	ClickTaleGlobal.init.isAllowed && ClickTale(PID, Ratio, PartitionPrefix, SubsId);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	
	// Start of user-defined footer code
	
	// End of user-defined footer code
	
}; 
(function() {
	var div = ClickTaleCreateDOMElement("div");
	div.id = "ClickTaleDiv";
	div.style.display = "none";
	document.body.appendChild(div);

	
		var wrScript = ClickTaleCreateDOMElement("script");
	wrScript.crossOrigin = "anonymous";
	wrScript.type = 'text/javascript';
		wrScript.async = true;
		if(ClickTaleGlobal.scripts.sri && ClickTaleGlobal.scripts.sri.hashes){
        wrScript.integrity = ClickTaleGlobal.scripts.sri.hashes.wr;
        wrScript.src = ClickTaleGlobal.scripts.sri.path + "wr.js";
	}else {
        wrScript.src = window.ClickTaleScriptSource + 'bridge-WR110.js';
    }

	ClickTaleGlobal.init.isAllowed && document.body.appendChild(wrScript);
})();









//Signature:crE5YaSQFYtlZjeoQ19Zu2JvPaJpByedF4RNmrvsQsFE7SPgiNWdnc/T+wIYYLx9POXrRnNTYb4vDHQEcLMywDiq9g1NvjzeiD12kTVRR/5jnv0XqX7w6VDJsb0OUEnqLDST0tIH0M+T53rjpOkvmLoerFXjl97pSZKUUV8d9QI=