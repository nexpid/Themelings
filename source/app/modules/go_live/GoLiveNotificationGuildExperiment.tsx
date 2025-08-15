// app/modules/go_live/GoLiveNotificationGuildExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var4 = function isEligibleForGoLiveNotificationGuildExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.location;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0001_ip = 55; continue _fun0001 }
 22:
            var4 = _closure1_slot3;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['guildId'] = var6;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
 55:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var13 = true;
    var5['value'] = var13;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var8[var5];
    var9 = var7.bind(var1)(var5);
    var6 = var9.createExperiment;
    var5 = {'kind': 'guild', 'id': '2025-08_go_live_guild_notification', 'label': 'Go live notification guild experiment'};
    var10 = {};
    var11 = false;
    var10['enabled'] = var11;
    var5['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Go live notification on by default'};
    var10 = {};
    var10['enabled'] = var13;
    var11['config'] = var10;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Go live notification includes game data if available'};
    var12 = {};
    var12['enabled'] = var13;
    var11['config'] = var12;
    var10[1] = var11;
    var5['treatments'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot3 = var5;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/go_live/GoLiveNotificationGuildExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['GoLiveNotificationGuildExperiment'] = var5;
    var3['isEligibleForGoLiveNotificationGuildExperiment'] = var4;
    var2 = function isChannelEligibleGuildForGoLiveNotif(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 == var5)) { _fun0002_ip = 43; continue _fun0002 }
 9:
            var4 = _closure1_slot2;
            var3 = var4.getCurrentUser;
            var3 = var3.bind(var4)();
            if(!(var1 != var3)) { _fun0002_ip = 108; continue _fun0002 }
 29:
            var3 = _closure1_slot1;
            var2 = var3.getVoiceChannelId;
            var5 = var2.bind(var3)();
 43:
            if(!(var1 != var5)) { _fun0002_ip = 104; continue _fun0002 }
 47:
            var4 = _closure1_slot0;
            var3 = var4.getChannel;
            var5 = var3.bind(var4)(var5);
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var1 == var5;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0002_ip = 86; continue _fun0002 }
 81:
            var4 = var5.guild_id;
 86:
            var2['guildId'] = var4;
            var4 = arg2;
            var2['location'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
 104:
            var1 = false;
            return var1;
 108:
            var1 = false;
            return var1;
        }
    };
    var3['isChannelEligibleGuildForGoLiveNotif'] = var2;
    return var1;
})();