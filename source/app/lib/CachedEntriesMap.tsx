// app/lib/CachedEntriesMap.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function CachedEntriesMap() {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot2;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = 0;
            var3['version'] = var5;
            var5 = global;
            var5 = var5.Map;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var12 = var6;
            var5 = new var12[var5](var11);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['data'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 2;
            var7 = var6[var4];
            var9 = var5.bind(var1)(var7);
            var8 = var9.cachedFunction;
            var7 = function() {
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = _closure3_slot0;
                var4 = var1.data;
                var1 = var4.values;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var3['cachedValues'] = var7;
            var7 = var6[var4];
            var9 = var5.bind(var1)(var7);
            var8 = var9.cachedFunction;
            var7 = function() {
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = _closure3_slot0;
                var4 = var1.data;
                var1 = var4.keys;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var3['cachedKeys'] = var7;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.cachedFunction;
            var2 = function() {
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = _closure3_slot0;
                var4 = var1.data;
                var1 = var4.entries;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var3['cachedEntries'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'keys';
        var1['key'] = var2;
        var2 = function value() {
            var3 = this;
            var2 = var3.cachedKeys;
            var1 = var3.version;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'values';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.cachedValues;
            var1 = var3.version;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'entries';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.cachedEntries;
            var1 = var3.version;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'size';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.data;
            var1 = var1.size;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.data;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'set';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = arg1;
                var4 = arg2;
                var2 = this;
                var3 = var2.data;
                var1 = var3.get;
                var1 = var1.bind(var3)(var5);
                if(!(var1 !== var4)) { _fun0001_ip = 59; continue _fun0001 }
 28:
                var3 = var2.data;
                var1 = var3.set;
                var1 = var1.bind(var3)(var5, var4);
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
 59:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = this;
                var4 = var3.data;
                var2 = var4.delete;
                var1 = arg1;
                var1 = var2.bind(var4)(var1);
                if(!var1) { _fun0002_ip = 39; continue _fun0002 }
 24:
                var2 = var3.version;
                var2 = var2 + 1;
                var3['version'] = var2;
 39:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var5 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var1 = var2.data;
                var3 = var1.size;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0003_ip = 49; continue _fun0003 }
 19:
                var3 = var2.data;
                var1 = var3.clear;
                var1 = var1.bind(var3)();
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
 49:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/CachedEntriesMap.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();