// app/modules/channel/useVoiceChannelStartTime.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/useVoiceChannelStartTime.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useStartTime(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var5[var1];
            var10 = undefined;
            var9 = var6.bind(var10)(var1);
            var7 = var9.useStateFromStoresObject;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot3;
                var5 = var4.hasRequestedStartTimes;
                var3 = _closure2_slot0;
                var2 = var3.guild_id;
                var2 = var5.bind(var4)(var2);
                var1['hasRequestedStartTimes'] = var2;
                var2 = var4.getStartTime;
                var2 = var2.bind(var4)(var3);
                var1['startTime'] = var2;
                return var1;
            };
            var1 = var7.bind(var9)(var4, var1);
            var7 = var1.hasRequestedStartTimes;
            var _closure2_slot1 = var7;
            var1 = var1.startTime;
            var4 = 4;
            var4 = var5[var4];
            var12 = var6.bind(var10)(var4);
            var11 = var12.useVoiceChannelDurationMobileEnabled;
            var9 = var8.guild_id;
            var4 = 'useStartTime';
            var4 = var11.bind(var12)(var9, var4);
            var11 = 5;
            var5 = var5[var11];
            var6 = var6.bind(var10)(var5);
            var5 = var6.isIOS;
            var6 = var5.bind(var6)();
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var11];
            var9 = var9.bind(var10)(var5);
            var5 = var9.isAndroid;
            var6 = var5.bind(var9)();
case 2:
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = !var4;
case 4:
            var _closure2_slot2 = var6;
            var5 = var8.type;
            var4 = _closure1_slot4;
            var4 = var4.GUILD_VOICE;
            var9 = var5 === var4;
            var _closure2_slot3 = var9;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(4);
            var3[0] = var9;
            var8 = var8.guild_id;
            var3[1] = var8;
            var3[2] = var7;
            var3[3] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot3;
                    var2 = !var3;
case 6:
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot2;
case 8:
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchChannelInfo;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useStartTime'] = var2;
    return var1;
})();