// app/modules/soundboard/useCustomJoinSound.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _getCustomJoinSound(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg2;
            var1 = arg1;
            var2 = var6[var1];
            var5 = null;
            var3 = var5 == var2;
            var4 = undefined;
            if(var3) { _fun0001_ip = 27; continue _fun0001 }
 21:
            var4 = var2.joinSound;
 27:
            var2 = _closure1_slot3;
            var2 = var6[var2];
            var7 = var5 == var2;
            var6 = undefined;
            if(var7) { _fun0001_ip = 53; continue _fun0001 }
 47:
            var6 = var2.joinSound;
 53:
            if(!(var5 != var4)) { _fun0001_ip = 60; continue _fun0001 }
 57:
            var6 = var4;
 60:
            var2 = var5 != var6;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 119; continue _fun0001 }
 69:
            var2 = {};
            var9 = var2;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            if(!(var5 == var4)) { _fun0001_ip = 97; continue _fun0001 }
 85:
            var4 = _closure1_slot4;
            var4 = var4.GLOBAL;
            _fun0001_ip = 107; continue _fun0001;
 97:
            var3 = _closure1_slot4;
            var4 = var3.GUILD;
 107:
            var3 = 'type';
            var2[var3] = var4;
            var1 = var2;
 119:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var9 = 0;
    var5 = var7[var9];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var8 = 1;
    var4 = var7[var8];
    var4 = var6.bind(var1)(var4);
    var4 = var4.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
    var _closure1_slot3 = var4;
    var4 = {};
    var4['GLOBAL'] = var9;
    var5 = 'GLOBAL';
    var4[var9] = var5;
    var4['GUILD'] = var8;
    var5 = 'GUILD';
    var4[var8] = var5;
    var _closure1_slot4 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/soundboard/useCustomJoinSound.tsx';
    var5 = var6.bind(var7)(var5);
    var3['CustomSoundType'] = var4;
    var4 = function useCustomJoinSound(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure1_slot2;
                var2 = var2.settings;
                var5 = var2.guilds;
                var2 = null;
                var6 = var2 == var5;
                var4 = undefined;
                var3 = undefined;
                if(var6) { _fun0002_ip = 38; continue _fun0002 }
 32:
                var3 = var5.guilds;
 38:
                if(!(var2 == var3)) { _fun0002_ip = 44; continue _fun0002 }
 42:
                var3 = {};
 44:
                var2 = _closure1_slot5;
                var1 = _closure2_slot0;
                var1 = var2.bind(var4)(var1, var3);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCustomJoinSound'] = var4;
    var2 = function getCustomJoinSound(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot5;
            var1 = _closure1_slot2;
            var1 = var1.settings;
            var5 = var1.guilds;
            var1 = null;
            var6 = var1 == var5;
            var3 = undefined;
            var2 = undefined;
            if(var6) { _fun0003_ip = 42; continue _fun0003 }
 36:
            var2 = var5.guilds;
 42:
            if(!(var1 == var2)) { _fun0003_ip = 48; continue _fun0003 }
 46:
            var2 = {};
 48:
            var1 = arg1;
            var1 = var4.bind(var3)(var1, var2);
            return var1;
        }
    };
    var3['getCustomJoinSound'] = var2;
    return var1;
})();