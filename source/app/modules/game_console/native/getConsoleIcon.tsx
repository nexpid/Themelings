// app/modules/game_console/native/getConsoleIcon.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var9 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var9;
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
    var8 = var4.PlatformTypes;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePlatforms;
    var _closure1_slot2 = var4;
    var4 = {};
    var10 = var8.XBOX;
    var7 = 2;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var4[var10] = var7;
    var11 = var8.PLAYSTATION;
    var7 = 3;
    var10 = var6[var7];
    var10 = var9.bind(var1)(var10);
    var4[var11] = var10;
    var8 = var8.PLAYSTATION_STAGING;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var4[var8] = var7;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/native/getConsoleIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getConsoleIcon(arg1) {
        var2 = _closure1_slot3;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var3['default'] = var4;
    var2 = function getConsoleIconForVoicePlatform(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot2;
            var1 = var1.XBOX;
            if(!(var4 !== var1)) { _fun0001_ip = 60; continue _fun0001 }
 20:
            var1 = _closure1_slot2;
            var3 = var1.PLAYSTATION;
            var1 = null;
            if(!(var4 === var3)) { _fun0001_ip = 58; continue _fun0001 }
 36:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var1 = var5.bind(var3)(var4);
 58:
            _fun0001_ip = 82; continue _fun0001;
 60:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 82:
            return var1;
        }
    };
    var3['getConsoleIconForVoicePlatform'] = var2;
    return var1;
})();