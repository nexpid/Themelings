// app/modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var4 = function useAuthorizedAppsTokens(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var5;
            var3 = null;
            if(!(var3 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var2 = var2.disableFetch;
            var9 = undefined;
            var8 = var9 !== var2;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var2;
case 4:
            var _closure2_slot1 = var8;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var2 = var10[var6];
            var13 = var7.bind(var9)(var2);
            var12 = var13.useStateFromStoresArray;
            var2 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var2;
            var3 = new Array(1);
            var3[0] = var5;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var1;
                    var7 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 2:
                    var5 = _closure2_slot0;
                    var4 = var5.map;
                    var3 = function(arg1) {
                        var3 = _closure1_slot4;
                        var2 = var3.getNewestTokenForApplication;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 3;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.isNotNullish;
                    var1 = var4.bind(var5)(var3);
case 6:
                    if(!(var2 == var1)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var1 = new Array(0);
case 7:
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var11, var2, var3);
            var2 = var10[var6];
            var14 = var7.bind(var9)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var2;
            var11 = new Array(1);
            var11[0] = var5;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var2;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 3:
                    var5 = _closure2_slot0;
                    var4 = var5.every;
                    var3 = function(arg1) {
                        var4 = _closure1_slot4;
                        var3 = var4.getFetchStateForApplication;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var1 = _closure1_slot5;
                        var1 = var1.FETCHED;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3);
case 9:
                    var1 = var1 != var2;
                    if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = var2;
case 10:
                    return var1;
                }
            };
            var2 = var13.bind(var14)(var12, var2, var11);
            var6 = var10[var6];
            var10 = var7.bind(var9)(var6);
            var9 = var10.useStateFromStoresArray;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 12; continue _fun0004 }
case 3:
                    var5 = _closure2_slot0;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var4 = _closure1_slot4;
                        var3 = var4.getFetchStateForApplication;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var1 = _closure1_slot5;
                        var1 = var1.NOT_FETCHED;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3);
case 12:
                    if(!(var2 == var1)) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                    var1 = new Array(0);
case 11:
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var7, var5, var6);
            var _closure2_slot2 = var7;
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var7;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var3 = _closure2_slot2;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 === var4;
case 14:
                    if(var2) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetch;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = {};
            var1['tokens'] = var3;
            var1['fetched'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.FetchState;
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useAuthorizedAppsTokens'] = var4;
    var2 = function useAuthorizedAppsToken(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot6;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                    var3 = _closure2_slot0;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 18:
                    return var1;
                }
            };
            var3 = var3.bind(var5)(var1, var2);
            var2 = undefined;
            var1 = arg2;
            var1 = var4.bind(var2)(var3, var1);
            var5 = var1.tokens;
            var2 = var1.fetched;
            var1 = {};
            var3 = var5.length;
            var4 = 0;
            var6 = var3 > var4;
            var3 = null;
            if(!var6) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var3 = var5[var4];
case 20:
            var1['token'] = var3;
            var1['fetched'] = var2;
            return var1;
        }
    };
    var3['useAuthorizedAppsToken'] = var2;
    return var1;
})();