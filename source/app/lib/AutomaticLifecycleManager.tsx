// app/lib/AutomaticLifecycleManager.tsx
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
        var3 = function AutomaticLifecycleManager() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = 0;
            var3['initializedCount'] = var2;
            var2 = {};
            var3['actions'] = var2;
            var2 = global;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['stores'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = this;
                var3 = var2.initializedCount;
                var3 = var3 + 1;
                var2['initializedCount'] = var3;
                var4 = var2.initializedCount;
                var3 = 1;
                if(!(!(var4 > var3))) { _fun0001_ip = 104; continue _fun0001 }
 33:
                var3 = var2._initialize;
                var3 = var3.bind(var2)();
                var3 = global;
                var5 = var3.Object;
                var4 = var5.entries;
                var3 = var2.actions;
                var5 = var4.bind(var5)(var3);
                var4 = var5.forEach;
                var3 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var6 = var4().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var5 = undefined;
                        if(var3) { _fun0002_ip = 27; continue _fun0002 }
 24:
                        var5 = var6;
 27:
                        var6 = undefined;
                        if(var3) { _fun0002_ip = 57; continue _fun0002 }
 32:
                        var7 = var4().value;
                        var4 = var2;
                        var4 = var4 === var1;
                        var6 = undefined;
                        var3 = var4;
                        if(var4) { _fun0002_ip = 57; continue _fun0002 }
 51:
                        var6 = var7;
                        var3 = var4;
 57:
                        if(var3) { _fun0002_ip = 63; continue _fun0002 }
 60:
                        var2.return();
 63:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 2;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.subscribe;
                        var8 = 'function';
                        var7 = typeof var6;
                        var2 = var6;
                        if(!(var8 !== var7)) { _fun0002_ip = 112; continue _fun0002 }
 106:
                        var2 = var6.callback;
 112:
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var3 = var2.stores;
                var2 = var3.forEach;
                var1 = function(arg1, arg2) {
                    var2 = arg1;
                    var3 = arg2;
                    var1 = var3.addChangeListener;
                    var1 = var1.bind(var3)(var2);
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 104:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var2 = var1.initializedCount;
                var3 = 0;
                if(!(!(var2 <= var3))) { _fun0003_ip = 106; continue _fun0003 }
 15:
                var2 = arg1;
                if(var2) { _fun0003_ip = 38; continue _fun0003 }
 21:
                var2 = var1.initializedCount;
                var2 = var2 - 1;
                var1['initializedCount'] = var2;
                _fun0003_ip = 44; continue _fun0003;
 38:
                var1['initializedCount'] = var3;
 44:
                var2 = var1.initializedCount;
                if(!(var3 === var2)) { _fun0003_ip = 106; continue _fun0003 }
 54:
                var2 = var1._terminate;
                var2 = var2.bind(var1)();
                var2 = global;
                var3 = var2.Object;
                var2 = var3.entries;
                var1 = var1.actions;
                var3 = var2.bind(var3)(var1);
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var6 = var4().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var5 = undefined;
                        if(var3) { _fun0004_ip = 27; continue _fun0004 }
 24:
                        var5 = var6;
 27:
                        var6 = undefined;
                        if(var3) { _fun0004_ip = 57; continue _fun0004 }
 32:
                        var7 = var4().value;
                        var4 = var2;
                        var4 = var4 === var1;
                        var6 = undefined;
                        var3 = var4;
                        if(var4) { _fun0004_ip = 57; continue _fun0004 }
 51:
                        var6 = var7;
                        var3 = var4;
 57:
                        if(var3) { _fun0004_ip = 63; continue _fun0004 }
 60:
                        var2.return();
 63:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 2;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.unsubscribe;
                        var8 = 'function';
                        var7 = typeof var6;
                        var2 = var6;
                        if(!(var8 !== var7)) { _fun0004_ip = 112; continue _fun0004 }
 106:
                        var2 = var6.callback;
 112:
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
 106:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = '_initialize';
        var1['key'] = var6;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = '_terminate';
        var1['key'] = var6;
        var5 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
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
    var4 = 'lib/AutomaticLifecycleManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();