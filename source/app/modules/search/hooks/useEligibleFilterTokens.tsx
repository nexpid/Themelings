// app/modules/search/hooks/useEligibleFilterTokens.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function useEligibleFilterTokens(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 3;
        var3 = var8[var3];
        var4 = undefined;
        var9 = var7.bind(var4)(var3);
        var6 = var9.useIsSearchAuthorTypeFilterEnabled;
        var3 = {};
        var10 = 'useEligibleFilterTokens';
        var3['location'] = var10;
        var6 = var6.bind(var9)(var3);
        var _closure2_slot1 = var6;
        var3 = 4;
        var3 = var8[var3];
        var8 = var7.bind(var4)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot3;
            var1 = var1.hidePersonalInformation;
            return var1;
        };
        var7 = var7.bind(var8)(var4, var3);
        var _closure2_slot2 = var7;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.isChannelFilterSupported;
                var1 = _closure2_slot0;
                var4 = var4.bind(var5)(var1);
                var1 = new Array(0);
                var5 = _closure2_slot2;
                if(var5) { _fun0001_ip = 94; continue _fun0001 }
 54:
                var6 = var1.push;
                var5 = _closure1_slot4;
                var5 = var5.FILTER_FROM;
                var5 = var6.bind(var1)(var5);
                var6 = var1.push;
                var5 = _closure1_slot4;
                var5 = var5.FILTER_MENTIONS;
                var5 = var6.bind(var1)(var5);
 94:
                var6 = var1.push;
                var5 = _closure1_slot4;
                var5 = var5.FILTER_HAS;
                var5 = var6.bind(var1)(var5);
                if(!var4) { _fun0001_ip = 137; continue _fun0001 }
 117:
                var5 = var1.push;
                var4 = _closure1_slot4;
                var4 = var4.FILTER_IN;
                var4 = var5.bind(var1)(var4);
 137:
                var5 = var1.push;
                var4 = _closure1_slot4;
                var4 = var4.FILTER_ON;
                var4 = var5.bind(var1)(var4);
                var5 = var1.push;
                var4 = _closure1_slot4;
                var4 = var4.FILTER_BEFORE;
                var4 = var5.bind(var1)(var4);
                var5 = var1.push;
                var4 = _closure1_slot4;
                var4 = var4.FILTER_AFTER;
                var4 = var5.bind(var1)(var4);
                var3 = _closure2_slot1;
                if(!var3) { _fun0001_ip = 224; continue _fun0001 }
 204:
                var3 = var1.push;
                var2 = _closure1_slot4;
                var2 = var2.FILTER_AUTHOR_TYPE;
                var2 = var3.bind(var1)(var2);
 224:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var4;
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
    var5 = var5.SearchTokenTypes;
    var _closure1_slot4 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/hooks/useEligibleFilterTokens.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useEligibleFilterTokens'] = var4;
    var2 = function useEligibleFilterTokensSet(arg1) {
        var5 = _closure1_slot5;
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