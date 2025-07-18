// app/modules/lobbies/LobbyUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function canUnlinkLobbyChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 19; continue _fun0001 }
 12:
            var5 = _closure1_slot2;
 19:
            var3 = null;
            var1 = var3 != var6;
            if(!var1) { _fun0001_ip = 125; continue _fun0001 }
 28:
            var2 = var6.linkedLobby;
            var2 = var3 != var2;
            if(!var2) { _fun0001_ip = 66; continue _fun0001 }
 41:
            var4 = var5.can;
            var3 = _closure1_slot3;
            var3 = var3.MANAGE_CHANNELS;
            var2 = var4.bind(var5)(var3, var6);
 66:
            if(!var2) { _fun0001_ip = 94; continue _fun0001 }
 69:
            var4 = var5.can;
            var3 = _closure1_slot3;
            var3 = var3.VIEW_CHANNEL;
            var2 = var4.bind(var5)(var3, var6);
 94:
            if(!var2) { _fun0001_ip = 122; continue _fun0001 }
 97:
            var4 = var5.can;
            var3 = _closure1_slot3;
            var3 = var3.SEND_MESSAGES;
            var2 = var4.bind(var5)(var3, var6);
 122:
            var1 = var2;
 125:
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
    var5 = native3;
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