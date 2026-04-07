// app/modules/channel/useVoiceChannelStartTime.tsx
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
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var4.ChannelTypes;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/useVoiceChannelStartTime.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useStartTime(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var5[var1];
            var11 = undefined;
            var8 = var7.bind(var11)(var1);
            var6 = var8.useStateFromStoresObject;
            var1 = _closure1_slot4;
            var4 = new Array(2);
            var4[0] = var1;
            var1 = _closure1_slot3;
            var4[1] = var1;
            var1 = function() {
                var1 = {};
                var5 = _closure1_slot4;
                var6 = var5.hasRequestedStartTimes;
                var2 = _closure2_slot0;
                var4 = var2.guild_id;
                var4 = var6.bind(var5)(var4);
                var1['hasRequestedStartTimes'] = var4;
                var4 = var5.getStartTime;
                var4 = var4.bind(var5)(var2);
                var1['startTime'] = var4;
                var4 = _closure1_slot3;
                var3 = var4.isUnavailable;
                var2 = var2.guild_id;
                var2 = var3.bind(var4)(var2);
                var1['isGuildUnavailable'] = var2;
                return var1;
            };
            var4 = var6.bind(var8)(var4, var1);
            var8 = var4.hasRequestedStartTimes;
            var _closure2_slot1 = var8;
            var1 = var4.startTime;
            var6 = var4.isGuildUnavailable;
            var _closure2_slot2 = var6;
            var4 = 5;
            var4 = var5[var4];
            var13 = var7.bind(var11)(var4);
            var12 = var13.useVoiceChannelDurationMobileEnabled;
            var10 = var9.guild_id;
            var4 = 'useStartTime';
            var4 = var12.bind(var13)(var10, var4);
            var12 = 6;
            var5 = var5[var12];
            var7 = var7.bind(var11)(var5);
            var5 = var7.isIOS;
            var7 = var5.bind(var7)();
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var12];
            var10 = var10.bind(var11)(var5);
            var5 = var10.isAndroid;
            var7 = var5.bind(var10)();
case 2:
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = !var4;
case 4:
            var _closure2_slot3 = var7;
            var5 = var9.type;
            var4 = _closure1_slot5;
            var4 = var4.GUILD_VOICE;
            var10 = var5 === var4;
            var _closure2_slot4 = var10;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(5);
            var3[0] = var10;
            var9 = var9.guild_id;
            var3[1] = var9;
            var3[2] = var8;
            var3[3] = var7;
            var3[4] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot4;
                    var2 = !var3;
case 6:
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot3;
case 8:
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = _closure2_slot2;
case 10:
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchChannelInfo;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
case 12:
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