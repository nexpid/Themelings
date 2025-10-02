// app/modules/lobbies/LobbyUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function canUnlinkLobbyChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot2;
case 2:
            var3 = null;
            var1 = var3 != var6;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var6.linkedLobby;
            var2 = var3 != var2;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.can;
            var3 = _closure1_slot3;
            var3 = var3.MANAGE_CHANNELS;
            var2 = var4.bind(var5)(var3, var6);
case 6:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var5.can;
            var3 = _closure1_slot3;
            var3 = var3.VIEW_CHANNEL;
            var2 = var4.bind(var5)(var3, var6);
case 8:
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var5.can;
            var3 = _closure1_slot3;
            var3 = var3.SEND_MESSAGES;
            var2 = var4.bind(var5)(var3, var6);
case 10:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/lobbies/LobbyUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['canUnlinkLobbyChannel'] = var4;
    var2 = function useCanUnlinkLobbyChannel(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanUnlinkLobbyChannel'] = var2;
    return var1;
})();