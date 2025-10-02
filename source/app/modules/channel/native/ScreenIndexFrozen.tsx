// app/modules/channel/native/ScreenIndexFrozen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function isScreenIndexFrozen(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot5 = var6;
    var5 = function addFrozenScreenIndexesChangedListener(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.add;
        var2 = var2.bind(var3)(var4);
        var1 = function() {
            var3 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        return var1;
    };
    var _closure1_slot6 = var5;
    var4 = function removeFrozenScreenIndexesChangedListener(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.delete;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot7 = var4;
    var7 = global;
    var12 = var7.Object;
    var11 = var12.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var10);
    var1 = 0;
    var11 = var9[var1];
    var10 = metroImportAll;
    var1 = undefined;
    var10 = var10.bind(var1)(var11);
    var _closure1_slot2 = var10;
    var10 = var7.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot3 = var10;
    var7 = var7.Set;
    var10 = var7.prototype;
    var10 = Object.create(var10, {constructor: {value: var7}});
    var16 = var10;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/channel/native/ScreenIndexFrozen.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function freezeScreenIndex(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg2;
            var3 = _closure1_slot3;
            var2 = arg1;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
case 4:
            var3 = _closure1_slot4;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['freezeScreenIndex'] = var7;
    var3['isScreenIndexFrozen'] = var6;
    var3['addFrozenScreenIndexesChangedListener'] = var5;
    var3['removeFrozenScreenIndexesChangedListener'] = var4;
    var2 = function useIsScreenIndexFrozenSharedValue(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 1;
        var1 = var5[var1];
        var7 = undefined;
        var5 = var4.bind(var7)(var1);
        var4 = var5.useSharedValue;
        var1 = _closure1_slot5;
        var1 = var1.bind(var7)(var6);
        var1 = var4.bind(var5)(var1);
        var _closure2_slot1 = var1;
        var5 = _closure1_slot2;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var1;
        var2 = function() {
            var3 = _closure1_slot6;
            var2 = undefined;
            var1 = function() {
                var4 = _closure2_slot1;
                var3 = var4.set;
                var5 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useIsScreenIndexFrozenSharedValue'] = var2;
    return var1;
})();