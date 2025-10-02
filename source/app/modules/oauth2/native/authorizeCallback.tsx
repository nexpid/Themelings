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
case 0:
            var1 = arg1;
            var8 = var1.location;
            var2 = var1.canceled;
            var7 = var1.application;
            var6 = var1.guild;
            var10 = var1.wasDeepLink;
            var11 = null;
            if(!(var11 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 1;
            var4 = var3[var4];
            var9 = undefined;
            var5 = var5.bind(var9)(var4);
            var4 = var5.pushLazy;
            var13 = _closure1_slot0;
            var12 = 3;
            var12 = var3[var12];
            var13 = var13.bind(var9)(var12);
            var12 = 2;
            var12 = var3[var12];
            var3 = var3.paths;
            var3 = var13.bind(var9)(var12, var3);
            var1 = _closure1_slot4;
            var1 = var4.bind(var5)(var3, var9, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var13 = 4;
            var3 = var3[var13];
            var9 = undefined;
            var4 = var4.bind(var9)(var3);
            var3 = var4.toURLSafe;
            var3 = var3.bind(var4)(var8);
            if(!(var11 == var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = {};
case 6:
            var12 = var3.host;
            var5 = var3.pathname;
            var14 = var3.searchParams;
            if(!(var11 != var12)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var4 = var4.bind(var9)(var3);
            var3 = var4.isDiscordHostname;
            var3 = var3.bind(var4)(var12);
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            if(!(var11 != var5)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var4 = var5.match;
            var3 = _closure1_slot5;
            var3 = var4.bind(var5)(var3);
            if(!(var11 == var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var5.match;
            var3 = _closure1_slot6;
            var3 = var4.bind(var5)(var3);
            if(!(var11 == var3)) { _fun0001_ip = 14; continue _fun0001 }
case 8:
            if(!var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var4 = var5.bind(var9)(var3);
            var3 = var4.getBrowserManagerSelectedBrowser;
            var4 = var3.bind(var4)();
            var3 = 7;
            var3 = var12[var3];
            var3 = var5.bind(var9)(var3);
            var3 = var3.WebBrowserType;
            var3 = var3.IN_APP;
            var10 = var4 === var3;
case 15:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var5 = var4.bind(var9)(var3);
            var4 = var5.openURL;
            var3 = undefined;
            if(!var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 7;
            var10 = var13[var10];
            var10 = var12.bind(var9)(var10);
            var10 = var10.WebBrowserType;
            var3 = var10.SAFARI;
case 17:
            var3 = var4.bind(var5)(var8, var3);
case 4:
            var3 = undefined;
            return var3;
case 14:
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
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
            if(var10) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = var14.get;
            var10 = 'error_description';
            var12 = var12.bind(var14)(var10);
            var10 = var11 == var12;
            var2 = undefined;
            if(var10) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var10 = var12.toString;
            var2 = var10.bind(var12)();
case 21:
            if(!(var11 == var2)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var12 = var11 == var14;
            var10 = undefined;
            if(var12) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var13 = var14.get;
            var12 = 'error';
            var12 = var13.bind(var14)(var12);
            var11 = var11 == var12;
            var10 = undefined;
            if(var11) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var11 = var12.toString;
            var10 = var11.bind(var12)();
case 26:
            var2 = var10;
case 24:
            var3['error'] = var2;
            var2 = _closure1_slot4;
            var2 = var5.bind(var8)(var4, var3, var2);
case 19:
            return var9;
case 12:
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