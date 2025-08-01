// discord_common/js/packages/flux/useStateFromStores.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function defaultAreStatesEqual(arg1, arg2) {
        var2 = arg1;
        var1 = arg2;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = function useStateFromStores(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var4 = arg2;
            var11 = arg3;
            var9 = arguments[3];
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var11;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0001_ip = 39; continue _fun0001 }
 32:
            var9 = _closure1_slot7;
 39:
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var1 = _closure1_slot5;
            var6 = null;
            var1 = var1.bind(var5)(var6);
            var7 = var1.current;
            if(!(var6 == var7)) { _fun0001_ip = 110; continue _fun0001 }
 78:
            var7 = {};
            var7['stores'] = var8;
            var7['areStatesEqual'] = var9;
            var7['getStateFromStores'] = var4;
            var7['prevDeps'] = var5;
            var7['state'] = var5;
            var1['current'] = var7;
 110:
            var1 = var1.current;
            _closure2_slot4 = var1;
            var8 = var1.state;
            _closure2_slot5 = var8;
            if(!(var6 != var11)) { _fun0001_ip = 176; continue _fun0001 }
 132:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 2;
            var7 = var12[var7];
            var10 = var10.bind(var5)(var7);
            var7 = var10.areArraysShallowEqual;
            var1 = var1.prevDeps;
            var7 = var7.bind(var10)(var11, var1);
            var1 = var8;
            if(var7) { _fun0001_ip = 206; continue _fun0001 }
 176:
            var4 = var4.bind(var5)();
            var7 = var6 != var8;
            if(!var7) { _fun0001_ip = 193; continue _fun0001 }
 187:
            var7 = var9.bind(var5)(var8, var4);
 193:
            var1 = var8;
            if(var7) { _fun0001_ip = 206; continue _fun0001 }
 199:
            _closure2_slot5 = var4;
            var1 = var4;
 206:
            var7 = _closure1_slot6;
            var4 = function() {
                var3 = _closure2_slot4;
                var2 = _closure2_slot1;
                var3['getStateFromStores'] = var2;
                var3 = _closure2_slot4;
                var2 = _closure2_slot2;
                var3['prevDeps'] = var2;
                var2 = _closure2_slot4;
                var1 = _closure2_slot5;
                var2['state'] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var7.bind(var5)(var4);
            var4 = _closure1_slot4;
            var7 = var4.bind(var5)(var6);
            var6 = _closure1_slot3;
            var4 = 2;
            var6 = var6.bind(var5)(var7, var4);
            var4 = 1;
            var4 = var6[var4];
            _closure2_slot6 = var4;
            var4 = _closure1_slot6;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var5 = var2.BatchedStoreListener;
                var7 = _closure2_slot0;
                var2 = var5.prototype;
                var3 = Object.create(var2, {constructor: {value: var5}});
                var6 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure2_slot4;
                        var1 = var3.getStateFromStores;
                        var4 = var1.bind(var3)();
                        var5 = _closure2_slot3;
                        var1 = _closure2_slot4;
                        var3 = var1.state;
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3, var4);
                        if(var3) { _fun0002_ip = 62; continue _fun0002 }
 41:
                        var3 = _closure2_slot4;
                        var3['state'] = var4;
                        var3 = _closure2_slot6;
                        var2 = {};
                        var2 = var3.bind(var1)(var2);
 62:
                        return var1;
                    }
                };
                var8 = var3;
                var2 = new var8[var5](var7, var6, var5);
                var4 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var4;
                var3 = var4.attach;
                var2 = 'useStateFromStores';
                var2 = var3.bind(var4)(var2);
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.detach;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.useState;
    var _closure1_slot4 = var8;
    var8 = var5.useRef;
    var _closure1_slot5 = var8;
    var5 = var5.useInsertionEffect;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/flux/useStateFromStores.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function statesWillNeverBeEqual() {
        var1 = false;
        return var1;
    };
    var3['statesWillNeverBeEqual'] = var5;
    var3['useStateFromStores'] = var4;
    var4 = function useStateFromStoresObject(arg1, arg2, arg3) {
        var6 = _closure1_slot8;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var1 = var3[var1];
        var5 = undefined;
        var7 = var2.bind(var5)(var1);
        var10 = arg1;
        var9 = arg2;
        var8 = arg3;
        var11 = undefined;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['useStateFromStoresObject'] = var4;
    var2 = function useStateFromStoresArray(arg1, arg2, arg3) {
        var6 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 2;
        var1 = var3[var1];
        var5 = undefined;
        var1 = var2.bind(var5)(var1);
        var7 = var1.areArraysShallowEqual;
        var10 = arg1;
        var9 = arg2;
        var8 = arg3;
        var11 = undefined;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['useStateFromStoresArray'] = var2;
    return var1;
})();