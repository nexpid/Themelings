// discord_common/js/packages/kv-storage/js/implementation/Classic.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var4 = native1;
        var5 = native2;
        var3 = native6;
        var6 = native7;
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
        if(!(var8 == var9)) { _fun0001_ip = 289; continue _fun0001 }
 78:
        var9 = var2.KvStorage;
        if(!(var8 != var9)) { _fun0001_ip = 255; continue _fun0001 }
 91:
        var9 = var2.KvStorage;
        var10 = var9.activate;
        var9 = var7.Function;
        var9 = var10 instanceof var9;
        if(var9) { _fun0001_ip = 150; continue _fun0001 }
 116:
        var11 = var7.Error;
        var9 = var11.prototype;
        var10 = Object.create(var9, {constructor: {value: var11}});
        var14 = "couldn't start the storage subsystem: native module exists, but jsi might not be available?";
        var15 = var10;
        var9 = new var15[var11](var14, var13);
        var9 = var9 instanceof Object ? var9 : var10;
        throw var9;
 150:
        var9 = var2.KvStorage;
        var2 = var9.activate;
        var2 = var2.bind(var9)();
        if(var2) { _fun0001_ip = 203; continue _fun0001 }
 169:
        var10 = var7.Error;
        var2 = var10.prototype;
        var9 = Object.create(var2, {constructor: {value: var10}});
        var14 = "couldn't start the storage subsystem: activation failed.";
        var15 = var9;
        var2 = new var15[var10](var14, var13);
        var2 = var2 instanceof Object ? var2 : var9;
        throw var2;
 203:
        var2 = var4.__KvStorage;
        if(!(var8 != var2)) { _fun0001_ip = 221; continue _fun0001 }
 213:
        var2 = var4.__KvStorage;
        _fun0001_ip = 295; continue _fun0001;
 221:
        var10 = var7.Error;
        var8 = var10.prototype;
        var9 = Object.create(var8, {constructor: {value: var10}});
        var14 = "couldn't start the storage subsystem: subsystem missing after activation.";
        var15 = var9;
        var8 = new var15[var10](var14, var13);
        var8 = var8 instanceof Object ? var8 : var9;
        throw var8;
 255:
        var9 = var7.Error;
        var7 = var9.prototype;
        var8 = Object.create(var7, {constructor: {value: var9}});
        var14 = "couldn't find the native kv_storage module.";
        var15 = var8;
        var7 = new var15[var9](var14, var13);
        var7 = var7 instanceof Object ? var7 : var8;
        throw var7;
 289:
        var2 = var4.__KvStorage;
 295:
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