// app/modules/video_calls/useChannelVideoLimit.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/useChannelVideoLimit.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useChannelVideoLimit(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var7 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot2;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = _closure1_slot3;
                var4 = var5.countVoiceStatesForChannel;
                var7 = _closure2_slot0;
                var3 = var7.id;
                var5 = var4.bind(var5)(var3);
                var6 = _closure1_slot2;
                var4 = var6.getGuild;
                var3 = var7.getGuildId;
                var3 = var3.bind(var7)();
                var3 = var4.bind(var6)(var3);
                var4 = null;
                if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
                var2 = var2.type;
                var1 = _closure1_slot4;
                var1 = var1.GUILD_STAGE_VOICE;
                if(!(var2 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = {};
                var4 = var3.maxVideoChannelUsers;
                var2 = 0;
                var2 = var4 > var2;
                if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = var3.maxVideoChannelUsers;
                var2 = var5 > var4;
case 6:
                var1['reachedLimit'] = var2;
                var2 = var3.maxVideoChannelUsers;
                var1['limit'] = var2;
                _fun0001_ip = 8; continue _fun0001;
case 4:
                var2 = {};
                var4 = var3.maxStageVideoChannelUsers;
                var4 = var5 > var4;
                var2['reachedLimit'] = var4;
                var3 = var3.maxStageVideoChannelUsers;
                var2['limit'] = var3;
                var1 = var2;
case 8:
                _fun0001_ip = 9; continue _fun0001;
case 2:
                var1 = {'reachedLimit': false, 'limit': 4294967295};
case 9:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function getChannelVideoLimit(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot3;
            var4 = var5.countVoiceStatesForChannel;
            var3 = var2.id;
            var5 = var4.bind(var5)(var3);
            var6 = _closure1_slot2;
            var4 = var6.getGuild;
            var3 = var2.getGuildId;
            var3 = var3.bind(var2)();
            var3 = var4.bind(var6)(var3);
            var4 = null;
            if(!(var4 != var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var2.type;
            var1 = _closure1_slot4;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var2 !== var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = {};
            var4 = var3.maxVideoChannelUsers;
            var2 = 0;
            var2 = var4 > var2;
            if(!var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = var3.maxVideoChannelUsers;
            var2 = var5 > var4;
case 14:
            var1['reachedLimit'] = var2;
            var2 = var3.maxVideoChannelUsers;
            var1['limit'] = var2;
            _fun0002_ip = 16; continue _fun0002;
case 12:
            var2 = {};
            var4 = var3.maxStageVideoChannelUsers;
            var4 = var5 > var4;
            var2['reachedLimit'] = var4;
            var3 = var3.maxStageVideoChannelUsers;
            var2['limit'] = var3;
            var1 = var2;
case 16:
            _fun0002_ip = 17; continue _fun0002;
case 10:
            var1 = {'reachedLimit': false, 'limit': 4294967295};
case 17:
            return var1;
        }
    };
    var3['getChannelVideoLimit'] = var2;
    return var1;
})();