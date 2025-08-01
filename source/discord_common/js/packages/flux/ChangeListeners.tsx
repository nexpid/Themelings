// discord_common/js/packages/flux/ChangeListeners.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function ChangeListeners() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot0;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = global;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['listeners'] = var4;
            var4 = function(arg1) {
                var1 = _closure3_slot0;
                var3 = var1.listeners;
                var2 = var3.add;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3['add'] = var4;
            var4 = function(arg1) {
                var1 = _closure3_slot0;
                var3 = var1.listeners;
                var2 = var3.delete;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3['remove'] = var4;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = arg1;
                    var4 = arguments[1];
                    var _closure4_slot0 = var3;
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0001_ip = 20; continue _fun0001 }
 18:
                    var4 = true;
 20:
                    var _closure4_slot1 = var1;
                    if(!var4) { _fun0001_ip = 37; continue _fun0001 }
 27:
                    var4 = var3.bind(var1)();
                    var3 = false;
                    if(!(var3 !== var4)) { _fun0001_ip = 63; continue _fun0001 }
 37:
                    var4 = function conditionalCallback() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var3 = _closure4_slot0;
                            var1 = undefined;
                            var4 = var3.bind(var1)();
                            var3 = false;
                            if(!(var3 === var4)) { _fun0002_ip = 41; continue _fun0002 }
 19:
                            var4 = _closure3_slot0;
                            var3 = var4.remove;
                            var2 = _closure4_slot1;
                            var2 = var3.bind(var4)(var2);
 41:
                            return var1;
                        }
                    };
                    _closure4_slot1 = var4;
                    var3 = _closure3_slot0;
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
 63:
                    return var1;
                }
            };
            var3['addConditional'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'has';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var1 = this;
            var3 = var1.listeners;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'hasAny';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.listeners;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'invokeAll';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var3 = var1.listeners;
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
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/ChangeListeners.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ChangeListeners'] = var2;
    return var1;
})();