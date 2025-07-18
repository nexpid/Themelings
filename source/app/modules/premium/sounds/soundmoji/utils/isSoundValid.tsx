// app/modules/premium/sounds/soundmoji/utils/isSoundValid.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/sounds/soundmoji/utils/isSoundValid.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isSoundValid(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot2;
            var4 = var5.getChannel;
            var2 = arg3;
            var6 = var4.bind(var5)(var2);
            var5 = null;
            var2 = var5 == var1;
            var4 = undefined;
            var7 = undefined;
            if(var2) { _fun0001_ip = 41; continue _fun0001 }
 36:
            var7 = var1.guildId;
 41:
            var2 = _closure1_slot5;
            if(!(var7 !== var2)) { _fun0001_ip = 206; continue _fun0001 }
 52:
            var2 = var5 == var1;
            var7 = undefined;
            if(var2) { _fun0001_ip = 66; continue _fun0001 }
 61:
            var7 = var1.guildId;
 66:
            var8 = var5 == var6;
            var2 = undefined;
            if(var8) { _fun0001_ip = 80; continue _fun0001 }
 75:
            var2 = var6.guild_id;
 80:
            if(!(var7 !== var2)) { _fun0001_ip = 202; continue _fun0001 }
 84:
            var7 = var5 == var1;
            var2 = undefined;
            if(var7) { _fun0001_ip = 98; continue _fun0001 }
 93:
            var2 = var1.guildId;
 98:
            var1 = arg2;
            if(!(var2 !== var1)) { _fun0001_ip = 202; continue _fun0001 }
 105:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 5;
            var1 = var7[var1];
            var4 = var2.bind(var4)(var1);
            var2 = var4.canUseSoundboardEverywhere;
            var7 = _closure1_slot4;
            var1 = var7.getCurrentUser;
            var1 = var1.bind(var7)();
            var2 = var2.bind(var4)(var1);
            var1 = var5 == var6;
            if(var1) { _fun0001_ip = 165; continue _fun0001 }
 156:
            var4 = var6.guild_id;
            var1 = var5 == var4;
 165:
            if(var1) { _fun0001_ip = 194; continue _fun0001 }
 168:
            var5 = _closure1_slot3;
            var4 = var5.can;
            var3 = _closure1_slot6;
            var3 = var3.USE_EXTERNAL_SOUNDS;
            var1 = var4.bind(var5)(var3, var6);
 194:
            if(!var1) { _fun0001_ip = 200; continue _fun0001 }
 197:
            var1 = var2;
 200:
            return var1;
 202:
            var1 = true;
            return var1;
 206:
            var1 = true;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();