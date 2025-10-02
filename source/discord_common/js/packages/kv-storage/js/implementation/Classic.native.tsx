// discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var4 = global;
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var7 = global;
        var9 = var7.Object;
        var8 = var9.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var2 = var2.NativeModules;
        var9 = var4.__KvStorage;
        var8 = null;
        if(!(var8 == var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var9 = var2.KvStorage;
        if(!(var8 != var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var9 = var2.KvStorage;
        var10 = var9.activate;
        var9 = var7.Function;
        var9 = var10 instanceof var9;
        if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var11 = var7.Error;
        var9 = var11.prototype;
        var10 = Object.create(var9, {constructor: {value: var11}});
        var14 = "couldn't start the storage subsystem: native module exists, but jsi might not be available?";
        var15 = var10;
        var9 = new var15[var11](var14, var13);
        var9 = var9 instanceof Object ? var9 : var10;
        throw var9;
case 6:
        var9 = var2.KvStorage;
        var2 = var9.activate;
        var2 = var2.bind(var9)();
        if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var10 = var7.Error;
        var2 = var10.prototype;
        var9 = Object.create(var2, {constructor: {value: var10}});
        var14 = "couldn't start the storage subsystem: activation failed.";
        var15 = var9;
        var2 = new var15[var10](var14, var13);
        var2 = var2 instanceof Object ? var2 : var9;
        throw var2;
case 8:
        var2 = var4.__KvStorage;
        if(!(var8 != var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var2 = var4.__KvStorage;
        _fun0001_ip = 12; continue _fun0001;
case 10:
        var10 = var7.Error;
        var8 = var10.prototype;
        var9 = Object.create(var8, {constructor: {value: var10}});
        var14 = "couldn't start the storage subsystem: subsystem missing after activation.";
        var15 = var9;
        var8 = new var15[var10](var14, var13);
        var8 = var8 instanceof Object ? var8 : var9;
        throw var8;
case 4:
        var9 = var7.Error;
        var7 = var9.prototype;
        var8 = Object.create(var7, {constructor: {value: var9}});
        var14 = "couldn't find the native kv_storage module.";
        var15 = var8;
        var7 = new var15[var9](var14, var13);
        var7 = var7 instanceof Object ? var7 : var8;
        throw var7;
case 2:
        var2 = var4.__KvStorage;
case 12:
        var4 = 1;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = '../discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx';
        var4 = var5.bind(var6)(var4);
        var3['KV_RAW'] = var2;
        return var1;
    }
})();