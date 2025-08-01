// app/modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 2;
            var1 = var8[var1];
            var4 = undefined;
            var7 = var2.bind(var4)(var1);
            var3 = var7.useExperiment;
            var1 = {};
            var1['guildId'] = var5;
            var9 = 'GuildSettingsModal';
            var1['location'] = var9;
            var1 = var3.bind(var7)(var1);
            var7 = var1.enabled;
            var3 = _closure1_slot0;
            var1 = 3;
            var1 = var8[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useCanReviewGuildMemberApplications;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot3;
            if(!var7) { _fun0001_ip = 102; continue _fun0001 }
 99:
            if(var1) { _fun0001_ip = 115; continue _fun0001 }
 102:
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            _fun0001_ip = 126; continue _fun0001;
 115:
            var7 = _closure1_slot2;
            var6 = 4;
            var1 = var7[var6];
 126:
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['guildId'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();