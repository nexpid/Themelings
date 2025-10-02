// app/modules/premium/sounds/soundmoji/utils/isSoundValid.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
case 0:
            var1 = arg1;
            var5 = _closure1_slot2;
            var4 = var5.getChannel;
            var2 = arg3;
            var6 = var4.bind(var5)(var2);
            var5 = null;
            var2 = var5 == var1;
            var4 = undefined;
            var7 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var1.guildId;
case 2:
            var2 = _closure1_slot5;
            if(!(var7 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var5 == var1;
            var7 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var1.guildId;
case 6:
            var8 = var5 == var6;
            var2 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var6.guild_id;
case 8:
            if(!(var7 !== var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var5 == var1;
            var2 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var1.guildId;
case 12:
            var1 = arg2;
            if(!(var2 !== var1)) { _fun0001_ip = 10; continue _fun0001 }
case 14:
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
            if(var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = var6.guild_id;
            var1 = var5 == var4;
case 15:
            if(var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = _closure1_slot3;
            var4 = var5.can;
            var3 = _closure1_slot6;
            var3 = var3.USE_EXTERNAL_SOUNDS;
            var1 = var4.bind(var5)(var3, var6);
case 17:
            if(!var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = var2;
case 19:
            return var1;
case 10:
            var1 = true;
            return var1;
case 4:
            var1 = true;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();