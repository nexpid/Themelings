// app/modules/calls/toggleVoiceChannelChat.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/toggleVoiceChannelChat.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function toggleVoiceChannelChat(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot3;
            var1 = var4.isConnected;
            var4 = var1.bind(var4)();
            var1 = null;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
            var5 = _closure1_slot3;
            var4 = var5.getChannelId;
            var4 = var4.bind(var5)();
            if(!(var1 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot2;
            var5 = var6.getChannel;
            var6 = var5.bind(var6)(var4);
            if(!(var1 != var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6.isGuildVoice;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            if(!(var1 == var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = _closure1_slot4;
            var5 = var6.getChatOpen;
            var5 = var5.bind(var6)(var4);
            var3 = !var5;
case 9:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var5 = var5[var2];
            var2 = undefined;
            var5 = var6.bind(var2)(var5);
            var2 = var5.updateChatOpen;
            var2 = var2.bind(var5)(var4, var3);
            var2 = {};
            var2['channelId'] = var4;
            var2['chatOpen'] = var3;
            return var2;
case 6:
            return var1;
case 4:
            return var1;
        }
    };
    var3['toggleVoiceChannelChat'] = var2;
    return var1;
})();