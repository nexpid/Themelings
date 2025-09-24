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
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useCanReviewGuildMemberApplications;
            var1 = var1.bind(var2)(var5);
            var3 = _closure1_slot3;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var1) { _fun0001_ip = 68; continue _fun0001 }
 59:
            var1 = 4;
            var1 = var7[var1];
            _fun0001_ip = 75; continue _fun0001;
 68:
            var6 = 3;
            var1 = var7[var6];
 75:
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['guildId'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();