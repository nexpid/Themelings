// app/modules/activities/native/createWebviewHtmlFile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createWebviewHtmlFile() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var11 = var2.iFrameUri;
                    var10 = var2.iFrameSandboxAttributes;
                    var9 = var2.referrerPolicy;
                    var8 = var2.insets;
                    var3 = var2.messageForDisallowedNavigationError;
                    var6 = undefined;
                    var7 = undefined;
                    var5 = undefined;
                    SaveGenerator(address=53);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var7 = 'discord_activity_data/activity.html';
                    var4 = {};
                    var4['iFrameUri'] = var11;
                    var4['iFrameSandboxAttributes'] = var10;
                    var4['referrerPolicy'] = var9;
                    var4['insets'] = var8;
                    var4['messageForDisallowedNavigationError'] = var3;
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var1 = arg1;
                            var12 = var1.iFrameUri;
                            var11 = var1.iFrameSandboxAttributes;
                            var10 = var1.referrerPolicy;
                            var5 = var1.insets;
                            var7 = var1.messageForDisallowedNavigationError;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 2;
                            var2 = var3[var2];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.isAndroid;
                            var2 = var2.bind(var4)();
                            var9 = '';
                            var8 = var9;
                            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var4 = _closure1_slot5;
                            var2 = {'insets': null, 'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
                            var2['insets'] = var5;
                            var6 = var4.bind(var3)(var2);
                            var2 = _closure1_slot6;
                            var1 = {'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
                            var20 = var2.bind(var3)(var1);
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var23 = '\n      <script type="text/javascript">\n        var iframe = document.getElementById("activityFrame");\n        var iframeWindow = iframe.contentWindow;\n        var isIframeLoaded = false;\n        ';
                            var21 = '\n        ';
                            var19 = '\n      </script>\n      ';
                            var22 = var6;
                            var8 = var23[var4](var22, var21, var20, var19, var18);
case 8:
                            var1 = null;
                            var1 = var1 != var7;
                            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var1 = global;
                            var2 = var1.HermesInternal;
                            var6 = var2.concat;
                            var23 = '\n  ';
                            var22 = 'iframeWindow';
                            var21 = ".addEventListener('beforeunload', function (e) {\n    window.ReactNativeWebView.postMessage('";
                            var19 = "');\n    e.preventDefault();\n  });\n";
                            var20 = var7;
                            var4 = var23[var6](var22, var21, var20, var19, var18);
                            var1 = var1.HermesInternal;
                            var3 = var1.concat;
                            var2 = '\n      <script type="text/javascript">\n        var iframe = document.getElementById("activityFrame");\n        var iframeWindow = iframe.contentWindow;\n        ';
                            var1 = '\n      </script>\n      ';
                            var9 = var3.bind(var2)(var4, var1);
case 10:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var7 = var1.concat;
                            var23 = '\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name="viewport"\n      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"\n      />\n  </head>\n  <body>\n      <script type="text/javascript">\n          window.addEventListener(\'message\', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id="activityFrame" width="100%" height="100%" src="';
                            var21 = '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen sandbox="';
                            var19 = '" referrerPolicy="';
                            var17 = '">\n      </iframe>\n      ';
                            var15 = '\n      ';
                            var13 = '\n  </body>\n  </html>\n';
                            var22 = var12;
                            var20 = var11;
                            var18 = var10;
                            var16 = var8;
                            var14 = var9;
                            var1 = var23[var7](var22, var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
                            return var1;
                        }
                    };
                    var5 = var3.bind(var6)(var4);
case 12: // try_start_0
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 2;
                    var3 = var9[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var3 = _closure1_slot4;
                    var12 = var3.DCDFileManager;
                    var11 = var12.writeFile;
                    var15 = var7;
                    var14 = var5;
                    var16 = 'cache';
                    var13 = 'utf8';
                    var17 = var12;
                    var3 = var17[var11](var16, var15, var14, var13, var12);
                    SaveGenerator(address=187);
case 15:
                    return var3;
case 16:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    var9 = var4;
                    var4 = var3;
                    if(!var9) { _fun0001_ip = 17; continue _fun0001 }
case 18: // try_end0
                    return var3;
case 13: // try_start_1
                    var9 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var10 = 3;
                    var3 = var3[var10];
                    var9 = var9.bind(var6)(var3);
                    var3 = null;
                    var9 = var3 == var9;
                    var3 = undefined;
                    if(var9) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var11 = var9.bind(var6)(var8);
                    var10 = var11.writeFile;
                    var15 = var7;
                    var14 = var5;
                    var16 = 'cache';
                    var13 = 'utf8';
                    var17 = var11;
                    var3 = var17[var10](var16, var15, var14, var13, var12);
case 19:
                    SaveGenerator(address=283);
case 21:
                    return var3;
case 22:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    var4 = var3;
                    if(var5) { _fun0001_ip = 23; continue _fun0001 }
case 17: // try_end1
                    return var4;
case 23:
                    return var3;
case 24: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var5);
                    var3 = null;
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = function safeAreaInitJs(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.insets;
            var15 = var2.iframeWindowVarName;
            var14 = var2.isIframeLoadedVarName;
            var2 = null;
            if(!(var2 == var1)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var1 = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
case 25:
            var25 = var1.left;
            var23 = var1.right;
            var21 = var1.top;
            var19 = var1.bottom;
            var1 = global;
            var1 = var1.HermesInternal;
            var9 = var1.concat;
            var30 = '\n  ';
            var28 = '.addEventListener("load", () => {\n    var iframeDoc = ';
            var26 = ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '";
            var24 = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '";
            var22 = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '";
            var20 = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '";
            var18 = "px');\n    ";
            var16 = ' = true;\n  });\n';
            var29 = var15;
            var27 = var15;
            var17 = var14;
            var1 = var30[var9](var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var4 = function safeAreasUpdateListenerJs(arg1) {
        var1 = arg1;
        var9 = var1.iframeWindowVarName;
        var13 = var1.isIframeLoadedVarName;
        var1 = global;
        var1 = var1.HermesInternal;
        var7 = var1.concat;
        var20 = '\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = ';
        var18 = ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    ";
        var16 = ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  ";
        var14 = ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (";
        var12 = ') {\n        updateSafeAreaVars(insets);\n      } else {\n        ';
        var10 = '.addEventListener("load", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n';
        var19 = var9;
        var17 = var9;
        var15 = var9;
        var11 = var9;
        var1 = var20[var7](var19, var18, var17, var16, var15, var14, var13, var12, var11, var10, var9);
        return var1;
    };
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/createWebviewHtmlFile.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createWebviewHtmlFile() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function(arg1) {
        var4 = _closure1_slot5;
        var2 = {'insets': null, 'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
        var3 = arg1;
        var2['insets'] = var3;
        var3 = undefined;
        var5 = var4.bind(var3)(var2);
        var2 = _closure1_slot6;
        var1 = {'iframeWindowVarName': 'iframeWindow', 'isIframeLoadedVarName': 'isIframeLoaded'};
        var7 = var2.bind(var3)(var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var10 = '\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n';
        var1 = '\n';
        var9 = var5;
        var8 = var1;
        var6 = var1;
        var1 = var10[var3](var9, var8, var7, var6, var5);
        return var1;
    };
    var3['createInjectedJavascriptForIOS'] = var2;
    return var1;
})();