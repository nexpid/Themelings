// app/modules/activities/native/createWebviewHtmlFile.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _createWebviewHtmlFile
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 342; continue _fun00001 }
 13:
                    yankee = michal.iFrameUri;
                    offset = michal.iFrameSandboxAttributes;
                    verify = michal.referrerPolicy;
                    option = michal.insets;
                    zuuluu = michal.messageForDisallowedNavigationError;
                    oscard = undefined;
                    golfie = undefined;
                    report = undefined;
                    SaveGenerator(address=53);
 51:
                    return oscard;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 339; continue _fun00001 }
 62:
                    golfie = 'discord_activity_data/activity.html';
                    tangon = {};
                    tangon['iFrameUri'] = yankee;
                    tangon['iFrameSandboxAttributes'] = offset;
                    tangon['referrerPolicy'] = verify;
                    tangon['insets'] = option;
                    tangon['messageForDisallowedNavigationError'] = zuuluu;
                    zuuluu = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = argFoo;
                            romeon = entity.iFrameUri;
                            yankee = entity.iFrameSandboxAttributes;
                            offset = entity.referrerPolicy;
                            report = entity.insets;
                            golfie = entity.messageForDisallowedNavigationError;
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 2;
                            michal = zuuluu[michal];
                            zuuluu = undefined;
                            tangon = tangon.bind(zuuluu)(michal);
                            michal = tangon.isAndroid;
                            michal = michal.bind(tangon)();
                            verify = '';
                            option = verify;
                            if(!michal) { _fun00004_ip = 167; continue _fun00003 }
 77:
                            tangon = _closure1_slot5;
                            michal = {'insets': null, 'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
                            michal['insets'] = report;
                            oscard = tangon.bind(zuuluu)(michal);
                            michal = _closure1_slot6;
                            entity = {'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
                            update = michal.bind(zuuluu)(entity);
                            entity = global;
                            entity = entity.HermesInternal;
                            tangon = entity.concat;
                            vacuum = '\n      <script type="text/javascript">\n        var iframe = document.getElementById("activityFrame");\n        var iframeWindow = iframe.contentWindow;\n        var isIframeLoaded = false;\n        ';
                            source = '\n        ';
                            echoed = '\n      </script>\n      ';
                            ctrled = oscard;
                            option = vacuum[tangon](ctrled, source, update, echoed, result);
 167:
                            entity = null;
                            entity = entity != golfie;
                            if(!entity) { _fun00004_ip = 249; continue _fun00003 }
 176:
                            entity = global;
                            michal = entity.HermesInternal;
                            oscard = michal.concat;
                            vacuum = '\n  ';
                            ctrled = 'iframeWindow';
                            source = ".addEventListener('beforeunload', function (e) {\n    window.ReactNativeWebView.postMessage('";
                            echoed = "');\n    e.preventDefault();\n  });\n";
                            update = golfie;
                            tangon = vacuum[oscard](ctrled, source, update, echoed, result);
                            entity = entity.HermesInternal;
                            zuuluu = entity.concat;
                            michal = '\n      <script type="text/javascript">\n        var iframe = document.getElementById("activityFrame");\n        var iframeWindow = iframe.contentWindow;\n        ';
                            entity = '\n      </script>\n      ';
                            verify = zuuluu.bind(michal)(tangon, entity);
 249:
                            entity = global;
                            entity = entity.HermesInternal;
                            golfie = entity.concat;
                            vacuum = '\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name="viewport"\n      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"\n      />\n  </head>\n  <body>\n      <script type="text/javascript">\n          window.addEventListener(\'message\', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id="activityFrame" width="100%" height="100%" src="';
                            source = '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen sandbox="';
                            echoed = '" referrerPolicy="';
                            output = '">\n      </iframe>\n      ';
                            kiloes = '\n      ';
                            foxtra = '\n  </body>\n  </html>\n';
                            ctrled = romeon;
                            update = yankee;
                            result = offset;
                            sizing = option;
                            backup = verify;
                            entity = vacuum[golfie](ctrled, source, update, echoed, result, output, sizing, kiloes, backup, foxtra, romeon);
                            return entity;
                        }
                    };
                    report = zuuluu.bind(oscard)(tangon);
 109: // try_start_0
                    tangon = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 2;
                    zuuluu = verify[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.isAndroid;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00002_ip = 202; continue _fun00001 }
 144:
                    zuuluu = _closure1_slot4;
                    romeon = zuuluu.DCDFileManager;
                    yankee = romeon.writeFile;
                    kiloes = golfie;
                    backup = report;
                    sizing = 'cache';
                    foxtra = 'utf8';
                    output = romeon;
                    zuuluu = output[yankee](sizing, kiloes, backup, foxtra, romeon);
                    SaveGenerator(address=187);
 185:
                    return zuuluu;
 187:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    verify = tangon;
                    tangon = zuuluu;
                    if(!verify) { _fun00002_ip = 292; continue _fun00001 }
 199: // try_end0
                    return zuuluu;
 202: // try_start_1
                    verify = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    offset = 3;
                    zuuluu = zuuluu[offset];
                    verify = verify.bind(oscard)(zuuluu);
                    zuuluu = null;
                    verify = zuuluu == verify;
                    zuuluu = undefined;
                    if(verify) { _fun00002_ip = 279; continue _fun00001 }
 233:
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[offset];
                    yankee = verify.bind(oscard)(option);
                    offset = yankee.writeFile;
                    kiloes = golfie;
                    backup = report;
                    sizing = 'cache';
                    foxtra = 'utf8';
                    output = yankee;
                    zuuluu = output[offset](sizing, kiloes, backup, foxtra, romeon);
 279:
                    SaveGenerator(address=283);
 281:
                    return zuuluu;
 283:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    tangon = zuuluu;
                    if(report) { _fun00002_ip = 295; continue _fun00001 }
 292: // try_end1
                    return tangon;
 295:
                    return zuuluu;
 298: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.captureException;
                    zuuluu = zuuluu.bind(tangon)(report);
                    zuuluu = null;
                    return zuuluu;
 339:
                    return michal;
 342:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot4 = tangon;
    tangon = function(argFoo) { // Original name: safeAreaInitJs
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = michal.insets;
            kiloes = michal.iframeWindowVarName;
            backup = michal.isIframeLoadedVarName;
            michal = null;
            if(!(michal == entity)) { _fun00006_ip = 41; continue _fun00005 }
 27:
            entity = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
 41:
            config = entity.left;
            vacuum = entity.right;
            source = entity.top;
            echoed = entity.bottom;
            entity = global;
            entity = entity.HermesInternal;
            verify = entity.concat;
            status = '\n  ';
            papara = '.addEventListener("load", () => {\n    var iframeDoc = ';
            record = ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '";
            sequen = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '";
            ctrled = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '";
            update = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '";
            result = "px');\n    ";
            sizing = ' = true;\n  });\n';
            target = kiloes;
            cntext = kiloes;
            output = backup;
            entity = status[verify](target, papara, cntext, record, config, sequen, vacuum, ctrled, source, update, echoed, result, output, sizing, kiloes);
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    tangon = function(argFoo) { // Original name: safeAreasUpdateListenerJs
        entity = argFoo;
        verify = entity.iframeWindowVarName;
        foxtra = entity.isIframeLoadedVarName;
        entity = global;
        entity = entity.HermesInternal;
        golfie = entity.concat;
        update = '\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = ';
        result = ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    ";
        sizing = ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  ";
        backup = ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (";
        romeon = ') {\n        updateSafeAreaVars(insets);\n      } else {\n        ';
        offset = '.addEventListener("load", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n';
        echoed = verify;
        output = verify;
        kiloes = verify;
        yankee = verify;
        entity = update[golfie](echoed, result, output, sizing, kiloes, backup, foxtra, romeon, yankee, offset, verify);
        return entity;
    };
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/native/createWebviewHtmlFile.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: createWebviewHtmlFile
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) {
        tangon = _closure1_slot5;
        michal = {'insets': null, 'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
        zuuluu = argFoo;
        michal['insets'] = zuuluu;
        zuuluu = undefined;
        report = tangon.bind(zuuluu)(michal);
        michal = _closure1_slot6;
        entity = {'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
        golfie = michal.bind(zuuluu)(entity);
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        offset = '\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n';
        entity = '\n';
        verify = report;
        option = entity;
        oscard = entity;
        entity = offset[zuuluu](verify, option, golfie, oscard, report);
        return entity;
    };
    zuuluu['createInjectedJavascriptForIOS'] = michal;
    return entity;
})();