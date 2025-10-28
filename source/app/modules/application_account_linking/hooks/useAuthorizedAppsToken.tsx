// app/modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAuthorizedAppsToken(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 2;
            var2 = var10[var3];
            var7 = undefined;
            var13 = var9.bind(var7)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var2;
            var4 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getNewestTokenForApplication;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var12.bind(var13)(var11, var4);
            var3 = var10[var3];
            var10 = var9.bind(var7)(var3);
            var9 = var10.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure1_slot5;
                    var1 = var1.NOT_FETCHED;
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var4 = _closure1_slot4;
                    var3 = var4.getFetchStateForApplication;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var2);
            var _closure2_slot1 = var3;
            var2 = _closure1_slot5;
            var2 = var2.FETCHED;
            var9 = null;
            if(!(var9 == var6)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = {};
case 5:
            var6 = var6.disableFetch;
            var9 = var7 !== var6;
            if(!var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = var6;
case 7:
            var _closure2_slot2 = var9;
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var3;
            var5[2] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot5;
                    var3 = var3.NOT_FETCHED;
                    var2 = var4 !== var3;
case 9:
                    if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchByApplicationId;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['token'] = var4;
            var2 = var3 === var2;
            var1['fetched'] = var2;
            return var1;
        }
    };
    var3['useAuthorizedAppsToken'] = var2;
    return var1;
})();