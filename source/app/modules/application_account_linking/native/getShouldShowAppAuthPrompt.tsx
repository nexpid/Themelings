// app/modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var4 = 0;
    var7 = var6[var4];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getShouldShowAppAuthPrompt(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var7 = null;
            if(!(var7 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getAuthorizationApp;
            var2 = var1.bind(var2)(var4);
            if(!(var7 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var7 == var2;
            var1 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2.connectionEntrypointUrl;
case 6:
            if(!(var7 == var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = false;
            return var1;
case 8:
            var1 = var7 == var2;
            var6 = undefined;
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var2.parentId;
case 10:
            if(!(var7 == var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var7 == var2;
            var1 = undefined;
            if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var2.id;
case 14:
            var6 = var1;
case 12:
            var1 = var7 != var6;
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = _closure1_slot3;
            var2 = var4.getFetchStateForApplication;
            var4 = var2.bind(var4)(var6);
            var2 = _closure1_slot4;
            var2 = var2.NOT_FETCHED;
            if(!(var4 !== var2)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = _closure1_slot3;
            var2 = var4.getFetchStateForApplication;
            var4 = var2.bind(var4)(var6);
            var2 = _closure1_slot4;
            var2 = var2.FETCHED;
            var2 = var4 === var2;
            if(!var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = _closure1_slot3;
            var4 = var8.getNewestTokenForApplication;
            var4 = var4.bind(var8)(var6);
            var2 = var7 != var4;
case 20:
            var2 = !var2;
            _fun0001_ip = 22; continue _fun0001;
case 18:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.fetch;
            var3 = new Array(1);
            var3[0] = var6;
            var3 = var4.bind(var5)(var3);
            var2 = false;
case 22:
            var1 = var2;
case 16:
            return var1;
case 4:
            var1 = false;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var3['getShouldShowAppAuthPrompt'] = var2;
    return var1;
})();