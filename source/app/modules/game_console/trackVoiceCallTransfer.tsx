// app/modules/game_console/trackVoiceCallTransfer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/trackVoiceCallTransfer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackVoiceCallTransfer(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var12 = arg3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot5;
            var3 = var2.VOICE_CALL_TRANSFER;
            var2 = {};
            var8 = null;
            var10 = var8 != var12;
            var9 = 'discord_client';
            if(!var10) { _fun0001_ip = 102; continue _fun0001 }
 63:
            var11 = _closure1_slot4;
            var10 = var11.getSessionById;
            var11 = var10.bind(var11)(var12);
            var12 = var8 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 99; continue _fun0001 }
 87:
            var11 = var11.clientInfo;
            var10 = var11.os;
 99:
            var9 = var10;
 102:
            var2['source_platform'] = var9;
            var10 = _closure1_slot2;
            var9 = var10.getChannel;
            var9 = var9.bind(var10)(var7);
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 137; continue _fun0001 }
 132:
            var8 = var9.guild_id;
 137:
            var2['guild_id'] = var8;
            var2['channel_id'] = var7;
            var7 = _closure1_slot3;
            var6 = var7.getRTCConnectionId;
            var6 = var6.bind(var7)();
            var2['rtc_connection_id'] = var6;
            var6 = arg2;
            var2['target_platform'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();