// app/modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openGuildRoleConnectionsModal(arg1) {
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
 0:
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
                if(!(var3 != var4)) { _fun0001_ip = 62; continue _fun0001 }
 54:
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
 62:
                return var1;
            }
        };
        var3['onClose'] = var2;
        var2 = 'ROLE_CONNECTIONS_MODAL_KEY';
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openGuildRoleConnectionsModal'] = var2;
    return var1;
})();