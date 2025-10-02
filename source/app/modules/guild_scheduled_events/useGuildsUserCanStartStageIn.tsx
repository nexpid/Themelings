// app/modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx
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
    var4 = 0;
    var8 = var6[var4];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelsUserCanStartStageIn(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = null;
            var4 = var6 == var3;
            var5 = undefined;
            var2 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.id;
case 2:
            var3 = var6 != var2;
            var6 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var2;
case 4:
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStoresArray;
            var7 = _closure1_slot2;
            var3 = new Array(2);
            var3[0] = var7;
            var2 = _closure1_slot4;
            var3[1] = var2;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var4 = _closure1_slot2;
                var3 = var4.getChannels;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var1 = _closure1_slot3;
                var4 = var2[var1];
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var3 = var2.channel;
                        var4 = var3.isGuildStageVoice;
                        var4 = var4.bind(var3)();
                        if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var7 = var2.channel;
                        var6 = _closure1_slot4;
                        var9 = undefined;
                        if(!(var6 === var9)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var6 = _closure1_slot4;
case 8:
                        var2 = var7.isGuildStageVoice;
                        var2 = var2.bind(var7)();
                        var5 = !var2;
                        var2 = !var5;
                        if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var5 = var6.can;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var4 = 2;
                        var4 = var10[var4];
                        var4 = var8.bind(var9)(var4);
                        var4 = var4.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                        var2 = var5.bind(var6)(var4, var7);
case 10:
                        if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 12:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var3);
case 6:
                        return var1;
                    }
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['useChannelsUserCanStartStageIn'] = var2;
    return var1;
})();