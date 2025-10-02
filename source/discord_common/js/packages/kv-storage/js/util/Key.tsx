// discord_common/js/packages/kv-storage/js/util/Key.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/kv-storage/js/util/Key.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function combineKey(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = global;
            var3 = var2.Array;
            var1 = var3.isArray;
            var1 = var1.bind(var3)(var5);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = new Array(1);
            var8 = 0;
            var10 = var1;
            var9 = var6;
            var4 = arraySpread(var10, var9, var8);
            var1[var4] = var5;
            var3 = 1;
            var3 = var4 + var3;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = new Array(0);
            var8 = 0;
            var10 = var3;
            var9 = var6;
            var8 = arraySpread(var10, var9, var8);
            var10 = var3;
            var9 = var5;
            var4 = arraySpread(var10, var9, var8);
            var1 = var3;
case 4:
            var4 = var1.length;
            var3 = 1;
            if(!(var4 >= var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = var1.length;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 0;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.MAXIMUM_KEY_BITS;
            if(!(!(var4 <= var3))) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var4 = var2.Error;
            var7 = var1.length;
            var5 = var2.JSON;
            var3 = var5.stringify;
            var6 = var3.bind(var5)(var1);
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var3 = 'combination results in an invalid key that has ';
            var2 = ' elements: ';
            var10 = var5.bind(var3)(var7, var2, var6);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var11 = var3;
            var2 = new var11[var4](var10, var9);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 7:
            return var1;
        }
    };
    var3['combineKey'] = var4;
    var2 = function combineKeyPrefix(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = global;
            var3 = var2.Array;
            var1 = var3.isArray;
            var1 = var1.bind(var3)(var5);
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = new Array(1);
            var8 = 0;
            var10 = var1;
            var9 = var6;
            var4 = arraySpread(var10, var9, var8);
            var1[var4] = var5;
            var3 = 1;
            var3 = var4 + var3;
            _fun0002_ip = 4; continue _fun0002;
case 2:
            var3 = new Array(0);
            var8 = 0;
            var10 = var3;
            var9 = var6;
            var8 = arraySpread(var10, var9, var8);
            var10 = var3;
            var9 = var5;
            var4 = arraySpread(var10, var9, var8);
            var1 = var3;
case 4:
            var4 = var1.length;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 0;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.MAXIMUM_KEY_BITS;
            if(!(!(var4 <= var3))) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var2.Error;
            var7 = var1.length;
            var5 = var2.JSON;
            var3 = var5.stringify;
            var6 = var3.bind(var5)(var1);
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var3 = 'combination results in an invalid prefix key that has ';
            var2 = ' elements: ';
            var10 = var5.bind(var3)(var7, var2, var6);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var11 = var3;
            var2 = new var11[var4](var10, var9);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 8:
            return var1;
        }
    };
    var3['combineKeyPrefix'] = var2;
    return var1;
})();