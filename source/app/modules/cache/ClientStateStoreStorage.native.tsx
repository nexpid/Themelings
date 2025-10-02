// app/modules/cache/ClientStateStoreStorage.native.tsx
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
    var4 = 'modules/cache/ClientStateStoreStorage.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setClientState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot3;
            var6 = var3.DCDFastConnectManager;
            var5 = var6.setClientState;
            var4 = null;
            var8 = var4 != var7;
            var3 = null;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var7;
case 4:
            var3 = var5.bind(var6)(var3, var4);
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.setClientState;
            var2 = null;
            var6 = var2 == var7;
            var5 = undefined;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var7.toString;
            var5 = var6.bind(var7)();
case 7:
            var6 = var2 != var5;
            var2 = undefined;
            if(!var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var5;
case 9:
            var2 = var3.bind(var4)(var2, var1);
case 6:
            return var1;
        }
    };
    var3['setClientState'] = var2;
    return var1;
})();