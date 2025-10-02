// app/modules/directory_channels/useCanManageGuildDirectoryEntry.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/useCanManageGuildDirectoryEntry.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCanManageGuildDirectoryEntry(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var6 = var7[var3];
            var4 = undefined;
            var10 = var5.bind(var4)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guildId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var10)(var8, var6);
            var _closure2_slot1 = var6;
            var6 = var7[var3];
            var10 = var5.bind(var4)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot2;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var10)(var8, var6);
            var _closure2_slot2 = var6;
            var6 = var7[var3];
            var10 = var5.bind(var4)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var6;
            var2 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var1 = _closure1_slot5;
                var2 = var1.ADMINISTRATOR;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var9.bind(var10)(var8, var2);
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var4 = var5.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var1 = _closure1_slot5;
                var2 = var1.MANAGE_MESSAGES;
                var1 = _closure2_slot2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3, var1);
            var1 = {};
            var1['isEntryAdmin'] = var2;
            var4 = var2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3;
case 2:
            var1['canEdit'] = var4;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            var1['canRemove'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useCanCreateOrAddGuildInDirectory(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = var4.can;
            var1 = _closure1_slot5;
            var2 = var1.SEND_MESSAGES;
            var1 = _closure2_slot0;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanCreateOrAddGuildInDirectory'] = var2;
    return var1;
})();