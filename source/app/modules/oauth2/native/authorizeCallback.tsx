// app/modules/oauth2/native/authorizeCallback.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.OAUTH2_SUCCESS_RESULT_MODAL_KEY;
    var _closure1_slot3 = var7;
    var4 = var4.OAUTH2_ERROR_RESULT_MODAL_KEY;
    var _closure1_slot4 = var4;
    var4 = /oauth2\\/authorized/;
    var _closure1_slot5 = var4;
    var4 = /oauth2\\/error/;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/authorizeCallback.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function authorizeCallback(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.location;
            var1 = var2.canceled;
            var7 = var2.application;
            var6 = var2.guild;
            var8 = var2.wasDeepLink;
            var11 = null;
            if(!(var11 == var5)) { _fun0001_ip = 123; continue _fun0001 }
 36:
            if(var1) { _fun0001_ip = 396; continue _fun0001 }
 42:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 1;
            var3 = var2[var3];
            var9 = undefined;
            var4 = var4.bind(var9)(var3);
            var3 = var4.pushLazy;
            var12 = _closure1_slot0;
            var10 = 3;
            var10 = var2[var10];
            var12 = var12.bind(var9)(var10);
            var10 = 2;
            var10 = var2[var10];
            var2 = var2.paths;
            var2 = var12.bind(var9)(var10, var2);
            var1 = _closure1_slot4;
            var1 = var3.bind(var4)(var2, var9, var1);
            _fun0001_ip = 396; continue _fun0001;
 123:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var12 = 4;
            var2 = var2[var12];
            var9 = undefined;
            var3 = var3.bind(var9)(var2);
            var2 = var3.toURLSafe;
            var2 = var2.bind(var3)(var5);
            if(!(var11 == var2)) { _fun0001_ip = 165; continue _fun0001 }
 163:
            var2 = {};
 165:
            var10 = var2.host;
            var4 = var2.pathname;
            var14 = var2.searchParams;
            if(!(var11 != var10)) { _fun0001_ip = 266; continue _fun0001 }
 187:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var12];
            var3 = var3.bind(var9)(var2);
            var2 = var3.isDiscordHostname;
            var2 = var2.bind(var3)(var10);
            if(!var2) { _fun0001_ip = 266; continue _fun0001 }
 218:
            if(!(var11 != var4)) { _fun0001_ip = 266; continue _fun0001 }
 222:
            var3 = var4.match;
            var2 = _closure1_slot5;
            var2 = var3.bind(var4)(var2);
            if(!(var11 == var2)) { _fun0001_ip = 570; continue _fun0001 }
 244:
            var3 = var4.match;
            var2 = _closure1_slot6;
            var2 = var3.bind(var4)(var2);
            if(!(var11 == var2)) { _fun0001_ip = 400; continue _fun0001 }
 266:
            if(!var8) { _fun0001_ip = 327; continue _fun0001 }
 269:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 6;
            var2 = var10[var2];
            var3 = var4.bind(var9)(var2);
            var2 = var3.getBrowserManagerSelectedBrowser;
            var3 = var2.bind(var3)();
            var2 = 7;
            var2 = var10[var2];
            var2 = var4.bind(var9)(var2);
            var2 = var2.WebBrowserType;
            var2 = var2.IN_APP;
            var8 = var3 === var2;
 327:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = var3.bind(var9)(var2);
            var3 = var4.openURL;
            var2 = undefined;
            if(!var8) { _fun0001_ip = 390; continue _fun0001 }
 358:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 7;
            var8 = var12[var8];
            var8 = var10.bind(var9)(var8);
            var8 = var8.WebBrowserType;
            var2 = var8.SAFARI;
 390:
            var2 = var3.bind(var4)(var5, var2);
 396:
            var2 = undefined;
            return var2;
 400:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 1;
            var3 = var2[var3];
            var8 = var4.bind(var9)(var3);
            var5 = var8.pushLazy;
            var4 = _closure1_slot0;
            var3 = 3;
            var3 = var2[var3];
            var4 = var4.bind(var9)(var3);
            var3 = 2;
            var3 = var2[var3];
            var2 = var2.paths;
            var4 = var4.bind(var9)(var3, var2);
            var3 = {};
            var10 = var11 == var14;
            var2 = undefined;
            if(var10) { _fun0001_ip = 503; continue _fun0001 }
 471:
            var12 = var14.get;
            var10 = 'error_description';
            var12 = var12.bind(var14)(var10);
            var10 = var11 == var12;
            var2 = undefined;
            if(var10) { _fun0001_ip = 503; continue _fun0001 }
 494:
            var10 = var12.toString;
            var2 = var10.bind(var12)();
 503:
            if(!(var11 == var2)) { _fun0001_ip = 551; continue _fun0001 }
 507:
            var12 = var11 == var14;
            var10 = undefined;
            if(var12) { _fun0001_ip = 548; continue _fun0001 }
 516:
            var13 = var14.get;
            var12 = 'error';
            var12 = var13.bind(var14)(var12);
            var11 = var11 == var12;
            var10 = undefined;
            if(var11) { _fun0001_ip = 548; continue _fun0001 }
 539:
            var11 = var12.toString;
            var10 = var11.bind(var12)();
 548:
            var2 = var10;
 551:
            var3['error'] = var2;
            var2 = _closure1_slot4;
            var2 = var5.bind(var8)(var4, var3, var2);
            var2 = undefined;
            return var2;
 570:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 1;
            var3 = var2[var3];
            var5 = var4.bind(var9)(var3);
            var4 = var5.pushLazy;
            var8 = _closure1_slot0;
            var3 = 3;
            var3 = var2[var3];
            var8 = var8.bind(var9)(var3);
            var3 = 5;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var8.bind(var9)(var3, var2);
            var2 = {};
            var2['application'] = var7;
            var2['guild'] = var6;
            var1 = _closure1_slot3;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();