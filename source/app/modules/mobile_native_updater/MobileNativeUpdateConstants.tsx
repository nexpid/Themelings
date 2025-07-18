// app/modules/mobile_native_updater/MobileNativeUpdateConstants.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
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
 0:
            var4 = global;
            var1 = var4.process;
            var1 = var1.env;
            var3 = var1.INTERNAL_UPDATE_URL;
            var2 = null;
            var1 = undefined;
            var5 = null;
            if(!(var1 !== var3)) { _fun0001_ip = 180; continue _fun0001 }
 33:
            var3 = var4.process;
            var3 = var3.env;
            var6 = var3.INTERNAL_UPDATE_URL;
            var3 = '';
            var5 = null;
            if(!(var3 !== var6)) { _fun0001_ip = 180; continue _fun0001 }
 61:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 1;
            var3 = var3[var8];
            var7 = var7.bind(var1)(var3);
            var3 = var7.isIOS;
            var3 = var3.bind(var7)();
            if(var3) { _fun0001_ip = 128; continue _fun0001 }
 97:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var7 = var7.bind(var1)(var3);
            var3 = var7.isAndroid;
            var7 = var3.bind(var7)();
            var3 = null;
            if(!var7) { _fun0001_ip = 177; continue _fun0001 }
 128:
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
 177:
            var5 = var3;
 180:
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
            if(var10) { _fun0001_ip = 234; continue _fun0001 }
 228:
            var6 = var9.Build;
 234:
            var6 = var8.bind(var1)(var6);
            var8 = var4.Number;
            var4 = var8.isNaN;
            var8 = var4.bind(var8)(var6);
            var4 = null;
            if(var8) { _fun0001_ip = 296; continue _fun0001 }
 261:
            var8 = 0;
            var4 = null;
            if(!(var8 !== var6)) { _fun0001_ip = 296; continue _fun0001 }
 269:
            var8 = 123456;
            var4 = null;
            if(!(var8 !== var6)) { _fun0001_ip = 296; continue _fun0001 }
 281:
            var8 = 1234567890;
            var4 = null;
            if(!(var8 !== var6)) { _fun0001_ip = 296; continue _fun0001 }
 293:
            var4 = var6;
 296:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getConstants;
            var3 = var3.bind(var6)();
            var6 = var2 == var3;
            var1 = undefined;
            if(var6) { _fun0001_ip = 338; continue _fun0001 }
 332:
            var1 = var3.Version;
 338:
            var6 = var2 != var1;
            var3 = null;
            if(!var6) { _fun0001_ip = 350; continue _fun0001 }
 347:
            var3 = var1;
 350:
            var1 = null;
            if(!(var2 !== var5)) { _fun0001_ip = 387; continue _fun0001 }
 356:
            var1 = null;
            if(!(var2 !== var4)) { _fun0001_ip = 387; continue _fun0001 }
 362:
            var1 = null;
            if(!(var1 !== var3)) { _fun0001_ip = 387; continue _fun0001 }
 368:
            var2 = {};
            var2['url'] = var5;
            var2['currentBuild'] = var4;
            var2['currentVersion'] = var3;
            var1 = var2;
 387:
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