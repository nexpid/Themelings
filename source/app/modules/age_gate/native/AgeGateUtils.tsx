// app/modules/age_gate/native/AgeGateUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
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
 0:
            var6 = arg1;
            var3 = _closure1_slot8;
            var2 = var3.has;
            var5 = null;
            var7 = var5 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 46; continue _fun0001 }
 26:
            var6 = var6.guild;
            var7 = var5 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 46; continue _fun0001 }
 40:
            var1 = var6.nsfw_level;
 46:
            if(!(var5 == var1)) { _fun0001_ip = 60; continue _fun0001 }
 50:
            var4 = _closure1_slot6;
            var1 = var4.DEFAULT;
 60:
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
 0:
            var7 = arg1;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var9 = undefined;
            var2 = var2.bind(var9)(var1);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            if(var1) { _fun0002_ip = 45; continue _fun0002 }
 41:
            var1 = false;
            return var1;
 45:
            var1 = _closure1_slot9;
            var2 = var1.bind(var9)(var7);
            var5 = _closure1_slot3;
            var4 = var5.getGuild;
            var8 = null;
            var6 = var8 == var7;
            var1 = undefined;
            if(var6) { _fun0002_ip = 93; continue _fun0002 }
 74:
            var6 = var7.guild;
            var10 = var8 == var6;
            var1 = undefined;
            if(var10) { _fun0002_ip = 93; continue _fun0002 }
 88:
            var1 = var6.id;
 93:
            var1 = var4.bind(var5)(var1);
            var1 = var8 != var1;
            var2 = !var2;
            if(var2) { _fun0002_ip = 111; continue _fun0002 }
 108:
            var2 = var1;
 111:
            var1 = !var2;
            if(var2) { _fun0002_ip = 219; continue _fun0002 }
 117:
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
            if(var10) { _fun0002_ip = 207; continue _fun0002 }
 188:
            var7 = var7.guild;
            var8 = var8 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 207; continue _fun0002 }
 202:
            var6 = var7.id;
 207:
            var2['guildId'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = true;
 219:
            return var1;
        }
    };
    var3['handleNSFWGuildInvite'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            if(var1) { _fun0003_ip = 42; continue _fun0003 }
 38:
            var1 = false;
            return var1;
 42:
            var4 = _closure1_slot3;
            var3 = var4.getGuild;
            var1 = arg1;
            var6 = var3.bind(var4)(var1);
            var3 = _closure1_slot5;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var6)) { _fun0003_ip = 311; continue _fun0003 }
 81:
            if(!(var1 != var4)) { _fun0003_ip = 311; continue _fun0003 }
 88:
            var5 = _closure1_slot4;
            var3 = var5.can;
            var1 = _closure1_slot7;
            var1 = var1.ADMINISTRATOR;
            var1 = var3.bind(var5)(var1, var6);
            if(var1) { _fun0003_ip = 143; continue _fun0003 }
 117:
            var8 = _closure1_slot4;
            var5 = var8.can;
            var3 = _closure1_slot7;
            var3 = var3.MANAGE_GUILD;
            var1 = var5.bind(var8)(var3, var6);
 143:
            if(var1) { _fun0003_ip = 172; continue _fun0003 }
 146:
            var8 = _closure1_slot4;
            var5 = var8.can;
            var3 = _closure1_slot7;
            var3 = var3.KICK_MEMBERS;
            var1 = var5.bind(var8)(var3, var6);
 172:
            if(var1) { _fun0003_ip = 201; continue _fun0003 }
 175:
            var8 = _closure1_slot4;
            var5 = var8.can;
            var3 = _closure1_slot7;
            var3 = var3.BAN_MEMBERS;
            var1 = var5.bind(var8)(var3, var6);
 201:
            var8 = var6.nsfwLevel;
            var5 = _closure1_slot6;
            var3 = var5.AGE_RESTRICTED;
            var3 = var8 === var3;
            var6 = var6.nsfwLevel;
            var5 = var5.EXPLICIT;
            var5 = var6 === var5;
            var4 = var4.nsfwAllowed;
            if(!var4) { _fun0003_ip = 282; continue _fun0003 }
 246:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var6 = var2.ViewNsfwGuilds;
            var2 = var6.getSetting;
            var4 = var2.bind(var6)();
 282:
            var1 = !var1;
            if(!var1) { _fun0003_ip = 309; continue _fun0003 }
 288:
            var2 = !var5;
            var2 = !var2;
            if(var5) { _fun0003_ip = 306; continue _fun0003 }
 297:
            if(!var3) { _fun0003_ip = 303; continue _fun0003 }
 300:
            var3 = !var4;
 303:
            var2 = var3;
 306:
            var1 = var2;
 309:
            return var1;
 311:
            var1 = false;
            return var1;
        }
    };
    var3['shouldNSFWGateGuild'] = var2;
    return var1;
})();