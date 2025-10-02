// app/modules/game_console/handoffRemote.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/handoffRemote.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handoffRemote(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var1 = var3.sessionId;
            var4 = null;
            var2 = var4 != var1;
            var6 = '';
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var1;
case 2:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 1;
            var10 = var9[var7];
            var1 = undefined;
            var11 = var8.bind(var1)(var10);
            var10 = var11.remoteDisconnect;
            var10 = var10.bind(var11)(var6);
            var7 = var9[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.disconnectRemote;
            var7 = var7.bind(var8)();
            var7 = var6;
            if(!(var4 == var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3.channelId;
case 4:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 2;
            var6 = var9[var6];
            var8 = var8.bind(var1)(var6);
            var6 = var4 != var5;
            var4 = 'attempted to transfer to unknown channel';
            var4 = var8.bind(var1)(var6, var4);
            var6 = var3.selfMute;
            var8 = _closure1_slot3;
            var4 = var8.isSelfMute;
            var4 = var4.bind(var8)();
            if(!(var6 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 3;
            var4 = var8[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.toggleSelfMute;
            var4 = var4.bind(var6)();
case 6:
            var4 = var3.selfDeaf;
            var6 = _closure1_slot3;
            var3 = var6.isSelfDeaf;
            var3 = var3.bind(var6)();
            if(!(var4 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.toggleSelfDeaf;
            var3 = var3.bind(var4)();
case 8:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var2 = 'discord_client';
            var2 = var6.bind(var1)(var5, var2, var7);
            var2 = 5;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.selectVoiceChannel;
            var2 = false;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var3['handoffRemote'] = var2;
    return var1;
})();