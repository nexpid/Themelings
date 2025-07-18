// app/modules/activities/utils/getGamePlatform.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var7 = var4.ActivityTypes;
    var _closure1_slot2 = var7;
    var4 = var4.ActivityGamePlatforms;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getGamePlatform.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGamePlatform(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = null;
            var2 = var5 == var4;
            var1 = null;
            if(var2) { _fun0001_ip = 125; continue _fun0001 }
 14:
            var2 = var4.type;
            var2 = var5 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 125; continue _fun0001 }
 28:
            var6 = var4.type;
            var2 = _closure1_slot2;
            var2 = var2.PLAYING;
            var1 = null;
            if(!(var6 === var2)) { _fun0001_ip = 125; continue _fun0001 }
 52:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var6 = undefined;
            var2 = var7.bind(var6)(var2);
            var2 = var2.bind(var6)(var4);
            if(var2) { _fun0001_ip = 112; continue _fun0001 }
 82:
            var2 = var4.platform;
            if(!(var5 == var2)) { _fun0001_ip = 104; continue _fun0001 }
 92:
            var2 = _closure1_slot3;
            var2 = var2.DESKTOP;
            _fun0001_ip = 110; continue _fun0001;
 104:
            var2 = var4.platform;
 110:
            _fun0001_ip = 122; continue _fun0001;
 112:
            var3 = _closure1_slot3;
            var2 = var3.XBOX;
 122:
            var1 = var2;
 125:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();