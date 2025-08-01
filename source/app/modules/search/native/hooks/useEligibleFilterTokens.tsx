// app/modules/search/native/hooks/useEligibleFilterTokens.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function useEligibleFilterTokens(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 3;
        var3 = var8[var3];
        var4 = undefined;
        var10 = var6.bind(var4)(var3);
        var9 = var10.useStateFromStores;
        var3 = _closure1_slot3;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = function() {
            var1 = _closure1_slot3;
            var1 = var1.hidePersonalInformation;
            return var1;
        };
        var7 = var9.bind(var10)(var7, var3);
        var _closure2_slot1 = var7;
        var3 = 4;
        var3 = var8[var3];
        var6 = var6.bind(var4)(var3);
        var4 = var6.useIsSearchMobileXDMChannelFiltersEnabled;
        var3 = {};
        var8 = 'useEligibleFilterTokens';
        var3['location'] = var8;
        var6 = var4.bind(var6)(var3);
        var _closure2_slot2 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = new Array(0);
                var2 = _closure2_slot1;
                if(var2) { _fun0001_ip = 57; continue _fun0001 }
 14:
                var5 = var1.push;
                var3 = _closure1_slot4;
                var3 = var3.FILTER_FROM;
                var3 = var5.bind(var1)(var3);
                var3 = var1.push;
                var2 = _closure1_slot4;
                var2 = var2.FILTER_MENTIONS;
                var2 = var3.bind(var1)(var2);
 57:
                var5 = var1.push;
                var3 = _closure1_slot4;
                var3 = var3.FILTER_HAS;
                var3 = var5.bind(var1)(var3);
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 5;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.isGuildLikeSearchContext;
                var3 = _closure2_slot0;
                var3 = var5.bind(var6)(var3);
                if(!var3) { _fun0001_ip = 140; continue _fun0001 }
 120:
                var5 = var1.push;
                var3 = _closure1_slot4;
                var3 = var3.FILTER_IN;
                var3 = var5.bind(var1)(var3);
 140:
                var3 = _closure2_slot1;
                var3 = !var3;
                if(!var3) { _fun0001_ip = 154; continue _fun0001 }
 150:
                var3 = _closure2_slot2;
 154:
                if(!var3) { _fun0001_ip = 180; continue _fun0001 }
 157:
                var4 = _closure2_slot0;
                var5 = var4.type;
                var4 = _closure1_slot5;
                var4 = var4.DMS;
                var3 = var5 === var4;
 180:
                if(!var3) { _fun0001_ip = 203; continue _fun0001 }
 183:
                var4 = var1.push;
                var3 = _closure1_slot4;
                var3 = var3.FILTER_IN;
                var3 = var4.bind(var1)(var3);
 203:
                var4 = var1.push;
                var3 = _closure1_slot4;
                var3 = var3.FILTER_ON;
                var3 = var4.bind(var1)(var3);
                var4 = var1.push;
                var3 = _closure1_slot4;
                var3 = var3.FILTER_BEFORE;
                var3 = var4.bind(var1)(var3);
                var3 = var1.push;
                var2 = _closure1_slot4;
                var2 = var2.FILTER_AFTER;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportDefault;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.SearchTokenTypes;
    var _closure1_slot4 = var8;
    var5 = var5.SearchTypes;
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/hooks/useEligibleFilterTokens.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useEligibleFilterTokens'] = var4;
    var2 = function useEligibleFilterTokensSet(arg1) {
        var5 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var5 = var5.bind(var4)(var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = global;
            var3 = var1.Set;
            var4 = _closure2_slot0;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useEligibleFilterTokensSet'] = var2;
    return var1;
})();