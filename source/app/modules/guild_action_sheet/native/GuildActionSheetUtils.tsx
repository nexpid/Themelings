// app/modules/guild_action_sheet/native/GuildActionSheetUtils.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_action_sheet/native/GuildActionSheetUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0001_ip = 142; continue _fun0001 }
 16:
                var1 = {};
                var7 = _closure1_slot2;
                var4 = var7.canAccessGuildSettings;
                var6 = _closure2_slot0;
                var4 = var4.bind(var7)(var6);
                var1['canAccessSettings'] = var4;
                var5 = var7.can;
                var4 = _closure1_slot3;
                var4 = var4.CHANGE_NICKNAME;
                var4 = var5.bind(var7)(var4, var6);
                if(var4) { _fun0001_ip = 100; continue _fun0001 }
 70:
                var8 = _closure1_slot2;
                var7 = var8.can;
                var5 = _closure1_slot3;
                var6 = var5.MANAGE_NICKNAMES;
                var5 = _closure2_slot0;
                var4 = var7.bind(var8)(var6, var5);
 100:
                var1['canEditNickname'] = var4;
                var5 = _closure1_slot2;
                var4 = var5.can;
                var3 = _closure1_slot3;
                var3 = var3.MANAGE_CHANNELS;
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var3, var2);
                var1['canManageChannels'] = var2;
                _fun0001_ip = 156; continue _fun0001;
 142:
                var1 = {'canAccessSettings': false, 'canEditNickname': false, 'canManageChannels': false};
 156:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGuildActionSheetPermissions'] = var2;
    return var1;
})();