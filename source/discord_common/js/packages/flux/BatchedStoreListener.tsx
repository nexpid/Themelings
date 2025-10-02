// discord_common/js/packages/flux/BatchedStoreListener.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function BatchedStoreListener(arg1, arg2) {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var2 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getChangeSentinel;
                    var3 = var2.bind(var3)();
                    var4 = _closure3_slot0;
                    var4 = var4.storeVersionHandled;
                    if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = _closure3_slot0;
                    var4 = var2.changeCallback;
                    var4 = var4.bind(var2)();
                    var2['storeVersionHandled'] = var3;
case 2:
                    return var1;
                }
            };
            var3['handleStoreChange'] = var2;
            var2 = arg1;
            var3['stores'] = var2;
            var2 = arg2;
            var3['changeCallback'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'attach';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = arg1;
            var _closure3_slot1 = var3;
            var3 = var2.stores;
            var2 = var3.forEach;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var3.addReactChangeListener;
                    var1 = _closure3_slot0;
                    var1 = var1.handleStoreChange;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
case 4:
                    var1 = global;
                    var3 = var1.Error;
                    var11 = _closure3_slot1;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var12 = '';
                    var10 = " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ";
                    var9 = arg2;
                    var8 = ' stores before error.';
                    var11 = var12[var6](var11, var10, var9, var8, var7);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var12 = var2;
                    var1 = new var12[var3](var11, var10);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'detach';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = var2.stores;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.removeReactChangeListener;
                var1 = _closure3_slot0;
                var1 = var1.handleStoreChange;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/BatchedStoreListener.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BatchedStoreListener'] = var2;
    return var1;
})();