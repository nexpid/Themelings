// app/modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var4 = function makeGuildRoleConnectionsConnectAccountsActionSheetKey(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'GuildRoleConnectionsConnectAccountsActionSheet-';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 5;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function openGuildRoleConnectionsModal(arg1) {
        var1 = arg1;
        var7 = var1.guildId;
        var1 = var1.onClose;
        var _closure2_slot0 = var1;
        var6 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 0;
        var5 = var3[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var5 = var6.pushLazy;
        var8 = _closure1_slot0;
        var4 = 2;
        var4 = var3[var4];
        var8 = var8.bind(var1)(var4);
        var4 = 1;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var8.bind(var1)(var4, var3);
        var3 = {};
        var3['guildId'] = var7;
        var2 = function onClose() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.popWithKey;
                var2 = 'ROLE_CONNECTIONS_MODAL_KEY';
                var2 = var3.bind(var4)(var2);
                var4 = _closure2_slot0;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
case 2:
                return var1;
            }
        };
        var3['onClose'] = var2;
        var2 = 'ROLE_CONNECTIONS_MODAL_KEY';
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openGuildRoleConnectionsModal'] = var5;
    var3['makeGuildRoleConnectionsConnectAccountsActionSheetKey'] = var4;
    var2 = function openGuildRoleConnectionsConnectAccountModal(arg1, arg2) {
        var7 = arg1;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var8 = _closure1_slot0;
        var4 = 2;
        var4 = var3[var4];
        var8 = var8.bind(var1)(var4);
        var4 = 4;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var8.bind(var1)(var4, var3);
        var3 = _closure1_slot3;
        var2 = var7.id;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['role'] = var7;
        var7 = arg2;
        var2['guildId'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openGuildRoleConnectionsConnectAccountModal'] = var2;
    return var1;
})();