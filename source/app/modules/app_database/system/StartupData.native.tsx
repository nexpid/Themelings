// app/modules/app_database/system/StartupData.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 1;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0001_ip = 66; continue _fun0001 }
 37:
            var2 = _closure1_slot3;
            var2 = var2.DCDAppDatabase;
            var4 = var2.userId;
            var2 = null;
            var5 = var2 != var4;
            if(!var5) { _fun0001_ip = 64; continue _fun0001 }
 61:
            var2 = var4;
 64:
            return var2;
 66:
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
            if(!var3) { _fun0001_ip = 113; continue _fun0001 }
 110:
            var1 = var2;
 113:
            return var1;
        }
    };
    var3['getUserId'] = var4;
    var2 = function setUserId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.isAndroid;
            var3 = var3.bind(var5)();
            if(var3) { _fun0002_ip = 63; continue _fun0002 }
 40:
            var3 = _closure1_slot3;
            var5 = var3.DCDAppDatabase;
            var3 = var5.setUserId;
            var3 = var3.bind(var5)(var4);
            _fun0002_ip = 94; continue _fun0002;
 63:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setUserId;
            var2 = var2.bind(var3)(var4);
 94:
            return var1;
        }
    };
    var3['setUserId'] = var2;
    return var1;
})();