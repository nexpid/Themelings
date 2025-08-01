// app/modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function shouldShowVoiceChannelChangeConfirmation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var1 = _closure1_slot1;
            var1 = var1.disableVoiceChannelChangeAlert;
            if(var1) { _fun0001_ip = 196; continue _fun0001 }
 22:
            var2 = _closure1_slot0;
            var1 = var2.getRemoteSessionId;
            var5 = var1.bind(var2)();
            var4 = _closure1_slot4;
            var2 = var4.getVoiceStateForSession;
            var7 = _closure1_slot2;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            var1 = var2.bind(var4)(var1, var5);
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 192; continue _fun0001 }
 72:
            var2 = _closure1_slot4;
            var1 = var2.isCurrentClientInVoiceChannel;
            var1 = var1.bind(var2)();
            if(var1) { _fun0001_ip = 93; continue _fun0001 }
 89:
            var1 = false;
            return var1;
 93:
            var5 = _closure1_slot4;
            var2 = var5.isInChannel;
            var1 = var6.id;
            var1 = var2.bind(var5)(var1);
            if(var1) { _fun0001_ip = 188; continue _fun0001 }
 116:
            var5 = _closure1_slot3;
            var2 = var5.getGuild;
            var1 = var6.getGuildId;
            var1 = var1.bind(var6)();
            var2 = var2.bind(var5)(var1);
            var5 = var4 == var2;
            var1 = undefined;
            if(var5) { _fun0001_ip = 155; continue _fun0001 }
 149:
            var1 = var2.afkChannelId;
 155:
            var1 = var4 == var1;
            if(var1) { _fun0001_ip = 186; continue _fun0001 }
 162:
            var4 = _closure1_slot4;
            var3 = var4.isInChannel;
            var2 = var2.afkChannelId;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
 186:
            return var1;
 188:
            var1 = false;
            return var1;
 192:
            var1 = false;
            return var1;
 196:
            var1 = false;
            return var1;
        }
    };
    var3['shouldShowVoiceChannelChangeConfirmation'] = var2;
    return var1;
})();