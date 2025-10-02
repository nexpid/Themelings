// app/modules/parent_tools/hooks/useFamilyCenterActivities.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function useActionTotalsForDisplayType(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot2;
            var2 = var3.getTotalForDisplayType;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
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
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TeenActionDisplayType;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CurrencyCodes;
    var _closure1_slot4 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/hooks/useFamilyCenterActivities.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useActionsForDisplayType(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot2;
            var2 = var3.getActionsForDisplayType;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useActionsForDisplayType'] = var5;
    var3['useActionTotalsForDisplayType'] = var4;
    var4 = function useHasActionForAnyDisplayType() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot3;
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                var3 = _closure1_slot2;
                var2 = var3.getTotalForDisplayType;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useHasActionForAnyDisplayType'] = var4;
    var2 = function useFormattedTotalForDisplayType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot5;
            var5 = undefined;
            var1 = var1.bind(var5)(var6);
            var3 = null;
            var3 = var3 != var1;
            var4 = 0;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1;
case 2:
            var1 = _closure1_slot3;
            var1 = var1.TOTAL_VOICE_MINUTES;
            if(!(var6 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot3;
            var3 = var1.PURCHASES;
            var1 = var4;
            if(!(var6 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 5;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.shortenAndFormatPrice;
            var3 = _closure1_slot4;
            var3 = var3.USD;
            var1 = var6.bind(var7)(var4, var3);
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.formatTotalTime;
            var1 = var2.bind(var3)(var4);
case 8:
            return var1;
        }
    };
    var3['useFormattedTotalForDisplayType'] = var2;
    return var1;
})();