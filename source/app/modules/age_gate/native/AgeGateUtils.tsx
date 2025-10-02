// app/modules/age_gate/native/AgeGateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var8 = var6.bind(var1)(var5);
    var5 = var8.GuildNSFWContentLevel;
    var _closure1_slot6 = var5;
    var8 = var8.Permissions;
    var _closure1_slot7 = var8;
    var8 = var4.Set;
    var9 = var5.EXPLICIT;
    var4 = new Array(2);
    var4[0] = var9;
    var5 = var5.AGE_RESTRICTED;
    var4[1] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var14 = var5;
    var13 = var4;
    var4 = new var14[var8](var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot8 = var4;
    var4 = function isNSFWInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot8;
            var2 = var3.has;
            var5 = null;
            var7 = var5 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var6.guild;
            var7 = var5 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var6.nsfw_level;
case 2:
            if(!(var5 == var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = _closure1_slot6;
            var1 = var4.DEFAULT;
case 5:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/age_gate/native/AgeGateUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['isNSFWInvite'] = var4;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var9 = undefined;
            var2 = var2.bind(var9)(var1);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = false;
            return var1;
case 7:
            var1 = _closure1_slot9;
            var2 = var1.bind(var9)(var7);
            var5 = _closure1_slot3;
            var4 = var5.getGuild;
            var8 = null;
            var6 = var8 == var7;
            var1 = undefined;
            if(var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var6 = var7.guild;
            var10 = var8 == var6;
            var1 = undefined;
            if(var10) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var1 = var6.id;
case 9:
            var1 = var4.bind(var5)(var1);
            var1 = var8 != var1;
            var2 = !var2;
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var1;
case 12:
            var1 = !var2;
            if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 5;
            var4 = var2[var4];
            var5 = var5.bind(var9)(var4);
            var4 = var5.pushLazy;
            var6 = _closure1_slot0;
            var3 = 7;
            var3 = var2[var3];
            var6 = var6.bind(var9)(var3);
            var3 = 6;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var6.bind(var9)(var3, var2);
            var2 = {};
            var10 = var8 == var7;
            var6 = undefined;
            if(var10) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = var7.guild;
            var8 = var8 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            var6 = var7.id;
case 16:
            var2['guildId'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = true;
case 14:
            return var1;
        }
    };
    var3['handleNSFWGuildInvite'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            if(var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var1 = false;
            return var1;
case 19:
            var4 = _closure1_slot3;
            var3 = var4.getGuild;
            var1 = arg1;
            var6 = var3.bind(var4)(var1);
            var3 = _closure1_slot5;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var6)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            if(!(var1 != var4)) { _fun0003_ip = 21; continue _fun0003 }
case 11:
            var5 = _closure1_slot4;
            var3 = var5.can;
            var1 = _closure1_slot7;
            var1 = var1.ADMINISTRATOR;
            var1 = var3.bind(var5)(var1, var6);
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 15:
            var8 = _closure1_slot4;
            var5 = var8.can;
            var3 = _closure1_slot7;
            var3 = var3.MANAGE_GUILD;
            var1 = var5.bind(var8)(var3, var6);
case 23:
            if(var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var8 = _closure1_slot4;
            var5 = var8.can;
            var3 = _closure1_slot7;
            var3 = var3.KICK_MEMBERS;
            var1 = var5.bind(var8)(var3, var6);
case 24:
            if(var1) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var8 = _closure1_slot4;
            var5 = var8.can;
            var3 = _closure1_slot7;
            var3 = var3.BAN_MEMBERS;
            var1 = var5.bind(var8)(var3, var6);
case 26:
            var8 = var6.nsfwLevel;
            var5 = _closure1_slot6;
            var3 = var5.AGE_RESTRICTED;
            var3 = var8 === var3;
            var6 = var6.nsfwLevel;
            var5 = var5.EXPLICIT;
            var5 = var6 === var5;
            var4 = var4.nsfwAllowed;
            if(!var4) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var6 = var2.ViewNsfwGuilds;
            var2 = var6.getSetting;
            var4 = var2.bind(var6)();
case 28:
            var1 = !var1;
            if(!var1) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var2 = !var5;
            var2 = !var2;
            if(var5) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            if(!var3) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var3 = !var4;
case 34:
            var2 = var3;
case 32:
            var1 = var2;
case 30:
            return var1;
case 21:
            var1 = false;
            return var1;
        }
    };
    var3['shouldNSFWGateGuild'] = var2;
    return var1;
})();