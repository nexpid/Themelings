// app/utils/native/ClientInfoUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/ClientInfoUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getConstants() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 1;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0001_ip = 59; continue _fun0001 }
 37:
            var2 = _closure1_slot3;
            var4 = var2.InfoDictionaryManager;
            var2 = var4.getConstants;
            var2 = var2.bind(var4)();
            return var2;
 59:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 2;
            var2 = var2[var4];
            var5 = var5.bind(var3)(var2);
            var2 = null;
            if(!(var2 !== var5)) { _fun0001_ip = 114; continue _fun0001 }
 85:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var2 = var2.bind(var3)(var1);
            var1 = var2.getConstants;
            var1 = var1.bind(var2)();
            return var1;
 114:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var6 = 'Turbo module RTNClientInfoManager is undefined for Android';
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['getConstants'] = var4;
    var2 = function getBuildNumberLabel() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = ['0', '123456', '1234567890'];
            var1 = var2.includes;
            var5 = '4632';
            var2 = var1.bind(var2)(var5);
            var1 = var5;
            if(!var2) { _fun0002_ip = 61; continue _fun0002 }
 32:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'dev (';
            var2 = ')';
            var1 = var4.bind(var3)(var5, var2);
 61:
            return var1;
        }
    };
    var3['getBuildNumberLabel'] = var2;
    return var1;
})();