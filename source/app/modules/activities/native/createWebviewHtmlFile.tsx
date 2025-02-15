// app/modules/activities/native/createWebviewHtmlFile.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _createWebviewHtmlFile
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun75951: for(var _fun75951_ip = 0; ; ) switch(_fun75951_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun75951_ip = 334; continue _fun75951 }
 13:
                    foxtrot = mike.iFrameUri;
                    romeo = mike.iFrameSandboxAttributes;
                    yankee = mike.referrerPolicy;
                    offset = mike.insets;
                    verify = mike.messageForDisallowedNavigationError;
                    oscar = undefined;
                    options = undefined;
                    golf = undefined;
                    SaveGenerator(address=53);
 51:
                    return oscar;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun75951_ip = 331; continue _fun75951 }
 62:
                    options = 'discord_activity_data/activity.html';
                    report = _closure1_slot7;
                    tango = {};
                    tango['iFrameUri'] = foxtrot;
                    tango['iFrameSandboxAttributes'] = romeo;
                    tango['referrerPolicy'] = yankee;
                    tango['insets'] = offset;
                    tango['messageForDisallowedNavigationError'] = verify;
                    golf = report.bind(oscar)(tango);
 107: // try_start_0
                    report = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 2;
                    tango = verify[tango];
                    report = report.bind(oscar)(tango);
                    tango = report.isAndroid;
                    tango = tango.bind(report)();
                    if(tango) { _fun75951_ip = 197; continue _fun75951 }
 139:
                    tango = _closure1_slot4;
                    romeo = tango.DCDFileManager;
                    yankee = romeo.writeFile;
                    sizing = options;
                    kilo = golf;
                    output = 'cache';
                    backup = 'utf8';
                    result = romeo;
                    tango = result[yankee](output, sizing, kilo, backup, foxtrot);
                    SaveGenerator(address=182);
 180:
                    return tango;
 182:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    verify = report;
                    report = tango;
                    if(!verify) { _fun75951_ip = 287; continue _fun75951 }
 194: // try_end0
                    return tango;
 197: // try_start_1
                    verify = _closure1_slot1;
                    tango = _closure1_slot2;
                    yankee = 3;
                    tango = tango[yankee];
                    verify = verify.bind(oscar)(tango);
                    tango = null;
                    verify = tango == verify;
                    tango = undefined;
                    if(verify) { _fun75951_ip = 274; continue _fun75951 }
 228:
                    offset = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[yankee];
                    romeo = offset.bind(oscar)(verify);
                    yankee = romeo.writeFile;
                    sizing = options;
                    kilo = golf;
                    output = 'cache';
                    backup = 'utf8';
                    result = romeo;
                    tango = result[yankee](output, sizing, kilo, backup, foxtrot);
 274:
                    SaveGenerator(address=278);
 276:
                    return tango;
 278:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    report = tango;
                    if(golf) { _fun75951_ip = 290; continue _fun75951 }
 287: // try_end1
                    return report;
 290:
                    return tango;
 293: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 4;
                    zulu = golf[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.captureException;
                    zulu = zulu.bind(tango)(report);
                    zulu = null;
                    return zulu;
 331:
                    return mike;
 334:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot4 = tango;
    tango = function(argFoo) { // Original name: safeAreaInitJs
        _fun75952: for(var _fun75952_ip = 0; ; ) switch(_fun75952_ip) {
 0:
            mike = argFoo;
            entity = mike.insets;
            kilo = mike.iframeWindowVarName;
            backup = mike.isIframeLoadedVarName;
            mike = null;
            if(!(mike == entity)) { _fun75952_ip = 37; continue _fun75952 }
 27:
            entity = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
 37:
            config = entity.left;
            vacuum = entity.right;
            source = entity.top;
            echo = entity.bottom;
            entity = global;
            entity = entity.HermesInternal;
            verify = entity.concat;
            status = '\n  ';
            papa = '.addEventListener("load", () => {\n    var iframeDoc = ';
            record = ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '";
            sequence = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '";
            control = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '";
            update = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '";
            result = "px');\n    ";
            sizing = ' = true;\n  });\n';
            target = kilo;
            context = kilo;
            output = backup;
            entity = status[verify](target, papa, context, record, config, sequence, vacuum, control, source, update, echo, result, output, sizing, kilo);
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    tango = function(argFoo) { // Original name: safeAreasUpdateListenerJs
        entity = argFoo;
        verify = entity.iframeWindowVarName;
        foxtrot = entity.isIframeLoadedVarName;
        entity = global;
        entity = entity.HermesInternal;
        golf = entity.concat;
        update = '\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = ';
        result = ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    ";
        sizing = ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  ";
        backup = ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (";
        romeo = ') {\n        updateSafeAreaVars(insets);\n      } else {\n        ';
        offset = '.addEventListener("load", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n';
        echo = verify;
        output = verify;
        kilo = verify;
        yankee = verify;
        entity = update[golf](echo, result, output, sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify);
        return entity;
    };
    var _closure1_slot6 = tango;
    tango = function(argFoo) { // Original name: generateWebviewHtml
        _fun75954: for(var _fun75954_ip = 0; ; ) switch(_fun75954_ip) {
 0:
            entity = argFoo;
            romeo = entity.iFrameUri;
            yankee = entity.iFrameSandboxAttributes;
            offset = entity.referrerPolicy;
            report = entity.insets;
            golf = entity.messageForDisallowedNavigationError;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 2;
            mike = zulu[mike];
            zulu = undefined;
            tango = tango.bind(zulu)(mike);
            mike = tango.isAndroid;
            mike = mike.bind(tango)();
            verify = '';
            options = verify;
            if(!mike) { _fun75954_ip = 167; continue _fun75954 }
 77:
            tango = _closure1_slot5;
            mike = {'insets': null, 'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
            mike['insets'] = report;
            oscar = tango.bind(zulu)(mike);
            mike = _closure1_slot6;
            entity = {'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
            update = mike.bind(zulu)(entity);
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            vacuum = '\n      <script type="text/javascript">\n        var iframe = document.getElementById("activityFrame");\n        var iframeWindow = iframe.contentWindow;\n        var isIframeLoaded = false;\n        ';
            source = '\n        ';
            echo = '\n      </script>\n      ';
            control = oscar;
            options = vacuum[tango](control, source, update, echo, result);
 167:
            entity = null;
            entity = entity != golf;
            if(!entity) { _fun75954_ip = 249; continue _fun75954 }
 176:
            entity = global;
            mike = entity.HermesInternal;
            oscar = mike.concat;
            vacuum = '\n  ';
            control = 'iframeWindow';
            source = ".addEventListener('beforeunload', function (e) {\n    window.ReactNativeWebView.postMessage('";
            echo = "');\n    e.preventDefault();\n  });\n";
            update = golf;
            tango = vacuum[oscar](control, source, update, echo, result);
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '\n      <script type="text/javascript">\n        var iframe = document.getElementById("activityFrame");\n        var iframeWindow = iframe.contentWindow;\n        ';
            entity = '\n      </script>\n      ';
            verify = zulu.bind(mike)(tango, entity);
 249:
            entity = global;
            entity = entity.HermesInternal;
            golf = entity.concat;
            vacuum = '\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name="viewport"\n      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"\n      />\n  </head>\n  <body>\n      <script type="text/javascript">\n          window.addEventListener(\'message\', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id="activityFrame" width="100%" height="100%" src="';
            source = '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen sandbox="';
            echo = '" referrerPolicy="';
            output = '">\n      </iframe>\n      ';
            kilo = '\n      ';
            foxtrot = '\n  </body>\n  </html>\n';
            control = romeo;
            update = yankee;
            result = offset;
            sizing = options;
            backup = verify;
            entity = vacuum[golf](control, source, update, echo, result, output, sizing, kilo, backup, foxtrot, romeo);
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/native/createWebviewHtmlFile.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: createWebviewHtmlFile
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) {
        tango = _closure1_slot5;
        mike = {'insets': null, 'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
        zulu = argFoo;
        mike['insets'] = zulu;
        zulu = undefined;
        report = tango.bind(zulu)(mike);
        mike = _closure1_slot6;
        entity = {'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
        golf = mike.bind(zulu)(entity);
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        offset = '\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n';
        entity = '\n';
        verify = report;
        options = entity;
        oscar = entity;
        entity = offset[zulu](verify, options, golf, oscar, report);
        return entity;
    };
    zulu['createInjectedJavascriptForIOS'] = mike;
    return entity;
})();