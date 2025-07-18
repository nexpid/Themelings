// app/modules/activities/utils/isOnPlayStation.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = var4.ActivityGamePlatforms;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isOnPlayStation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isOnPlayStation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = null;
            var1 = var5 == var4;
            var6 = undefined;
            if(var1) { _fun0001_ip = 20; continue _fun0001 }
 14:
            var6 = var4.platform;
 20:
            var1 = _closure1_slot0;
            var1 = var1.PS4;
            var1 = var6 === var1;
            if(var1) { _fun0001_ip = 69; continue _fun0001 }
 40:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var3 = var4.platform;
 55:
            var2 = _closure1_slot0;
            var2 = var2.PS5;
            var1 = var3 === var2;
 69:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();