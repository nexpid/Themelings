// app/modules/guild_profile/GuildProfileUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = var4.createChannelRecordFromInvite;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/GuildProfileUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getEstablishedDate(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = '';
            if(!(var2 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = global;
            var2 = var3.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var9 = var4;
            var8 = var5;
            var2 = new var9[var2](var8, var7);
            var6 = var2 instanceof Object ? var2 : var4;
            var2 = var3.Date;
            var4 = var6 instanceof var2;
            var2 = null;
            if(!var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = var3.isNaN;
            var3 = var6.getTime;
            var4 = var3.bind(var6)();
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var2 = null;
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var5 = var6.toLocaleDateString;
            var4 = arg2;
            var3 = {'year': 'numeric', 'month': 'short'};
            var2 = var5.bind(var6)(var4, var3);
case 5:
            return var2;
case 2:
            return var1;
        }
    };
    var3['getEstablishedDate'] = var4;
    var2 = function guildInviteCanEmbedProfile(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guild;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 4:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var6.bind(var5)(var3);
            var6 = var7.fromInviteGuild;
            var3 = var2.guild;
            var3 = var6.bind(var7)(var3);
            var7 = var3.features;
            var6 = var7.has;
            var3 = _closure1_slot3;
            var3 = var3.HUB;
            var3 = var6.bind(var7)(var3);
            if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var6 = var1 == var2;
            var3 = undefined;
            if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var2.channel;
case 11:
            var6 = var1 != var3;
            var3 = null;
            if(!var6) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = _closure1_slot2;
            var2 = var2.channel;
            var3 = var4.bind(var5)(var2);
case 13:
            var1 = var1 == var3;
            if(var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var2 = var3.isGuildVocal;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 15:
            return var1;
case 9:
            var1 = false;
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var3['guildInviteCanEmbedProfile'] = var2;
    return var1;
})();