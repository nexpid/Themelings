// app/modules/app_database/system/StartupData.native.tsx
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
    var4 = 'modules/app_database/system/StartupData.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getUserId() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 1;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot3;
            var2 = var2.DCDAppDatabase;
            var4 = var2.userId;
            var2 = null;
            var5 = var2 != var4;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var4;
case 4:
            return var2;
case 2:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.getConstants;
            var1 = var1.bind(var2)();
            var2 = var1.userId;
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['getUserId'] = var4;
    var2 = function setUserId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.isAndroid;
            var3 = var3.bind(var5)();
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot3;
            var5 = var3.DCDAppDatabase;
            var3 = var5.setUserId;
            var3 = var3.bind(var5)(var4);
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setUserId;
            var2 = var2.bind(var3)(var4);
case 10:
            return var1;
        }
    };
    var3['setUserId'] = var2;
    return var1;
})();