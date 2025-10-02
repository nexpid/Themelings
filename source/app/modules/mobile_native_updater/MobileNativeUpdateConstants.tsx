// app/modules/mobile_native_updater/MobileNativeUpdateConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var9 = var5.bind(var1)(var4);
    var8 = var9.duration;
    var5 = 6;
    var4 = 'hours';
    var4 = var8.bind(var9)(var5, var4);
    var2 = function currentUpdateConfig() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = global;
            var1 = var4.process;
            var1 = var1.env;
            var3 = var1.INTERNAL_UPDATE_URL;
            var2 = null;
            var1 = undefined;
            var5 = null;
            if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.process;
            var3 = var3.env;
            var6 = var3.INTERNAL_UPDATE_URL;
            var3 = '';
            var5 = null;
            if(!(var3 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 1;
            var3 = var3[var8];
            var7 = var7.bind(var1)(var3);
            var3 = var7.isIOS;
            var3 = var3.bind(var7)();
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var7 = var7.bind(var1)(var3);
            var3 = var7.isAndroid;
            var7 = var3.bind(var7)();
            var3 = null;
            if(!var7) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 2;
            var6 = var8[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.toURLSafe;
            var6 = var4.process;
            var6 = var6.env;
            var6 = var6.INTERNAL_UPDATE_URL;
            var3 = var7.bind(var8)(var6);
case 7:
            var5 = var3;
case 2:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 3;
            var6 = var6[var7];
            var8 = var8.bind(var1)(var6);
            var6 = var8.getConstants;
            var9 = var6.bind(var8)();
            var8 = var4.parseInt;
            var10 = var2 == var9;
            var6 = undefined;
            if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var9.Build;
case 8:
            var6 = var8.bind(var1)(var6);
            var8 = var4.Number;
            var4 = var8.isNaN;
            var8 = var4.bind(var8)(var6);
            var4 = null;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = 0;
            var4 = null;
            if(!(var8 !== var6)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var8 = 123456;
            var4 = null;
            if(!(var8 !== var6)) { _fun0001_ip = 10; continue _fun0001 }
case 13:
            var8 = 1234567890;
            var4 = null;
            if(!(var8 !== var6)) { _fun0001_ip = 10; continue _fun0001 }
case 14:
            var4 = var6;
case 10:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getConstants;
            var3 = var3.bind(var6)();
            var6 = var2 == var3;
            var1 = undefined;
            if(var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = var3.Version;
case 15:
            var6 = var2 != var1;
            var3 = null;
            if(!var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var3 = var1;
case 17:
            var1 = null;
            if(!(var2 !== var5)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = null;
            if(!(var2 !== var4)) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var1 = null;
            if(!(var1 !== var3)) { _fun0001_ip = 19; continue _fun0001 }
case 22:
            var2 = {};
            var2['url'] = var5;
            var2['currentBuild'] = var4;
            var2['currentVersion'] = var3;
            var1 = var2;
case 19:
            return var1;
        }
    };
    var2 = var2.bind(var1)();
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/mobile_native_updater/MobileNativeUpdateConstants.tsx';
    var5 = var6.bind(var7)(var5);
    var3['UPDATE_CHECK_INTERVAL'] = var4;
    var3['UPDATE_CONFIG'] = var2;
    return var1;
})();