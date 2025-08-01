// app/modules/app_database/util/Iterable.tsx
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
    var4 = function() {
        var4 = _closure1_slot1;
        var3 = function Chained(arg1) {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = 0;
            var3['index'] = var2;
            var2 = arg1;
            var3['items'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = global;
        var2 = var2.Symbol;
        var2 = var2.iterator;
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'next';
        var1['key'] = var6;
        var5 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = this;
                var2 = var4.index;
                var1 = var4.items;
                var1 = var1.length;
                var3 = 1;
                if(!(var2 < var1)) { _fun0001_ip = 95; continue _fun0001 }
 26:
                var2 = var4.items;
                var1 = var4.index;
                var2 = var2[var1];
                var1 = var2.next;
                var1 = var1.bind(var2)();
                var2 = var1.done;
                if(var2) { _fun0001_ip = 60; continue _fun0001 }
 58:
                return var1;
 60:
                var1 = var4.index;
                var1 = var1 + var3;
                var4['index'] = var1;
                var2 = var4.index;
                var1 = var4.items;
                var1 = var1.length;
                if(var2 < var1) { _fun0001_ip = 26; continue _fun0001 }
 95:
                var1 = {};
                var2 = true;
                var1['done'] = var2;
                var2 = undefined;
                var1['value'] = var2;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/util/Iterable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function chain(arg1) {
        var4 = 0;
        var4 = copyRestArgs(var4);
        var1 = _closure1_slot2;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var5 = var2;
        var1 = new var5[var1](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['chain'] = var2;
    return var1;
})();