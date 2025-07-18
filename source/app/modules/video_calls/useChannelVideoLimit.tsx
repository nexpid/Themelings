// app/modules/video_calls/useChannelVideoLimit.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
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
                if(!(var4 != var3)) { _fun0001_ip = 161; continue _fun0001 }
 60:
                var2 = _closure2_slot0;
                var2 = var2.type;
                var1 = _closure1_slot4;
                var1 = var1.GUILD_STAGE_VOICE;
                if(!(var2 !== var1)) { _fun0001_ip = 128; continue _fun0001 }
 83:
                var1 = {};
                var4 = var3.maxVideoChannelUsers;
                var2 = 0;
                var2 = var4 > var2;
                if(!var2) { _fun0001_ip = 110; continue _fun0001 }
 100:
                var4 = var3.maxVideoChannelUsers;
                var2 = var5 > var4;
 110:
                var1['reachedLimit'] = var2;
                var2 = var3.maxVideoChannelUsers;
                var1['limit'] = var2;
                _fun0001_ip = 159; continue _fun0001;
 128:
                var2 = {};
                var4 = var3.maxStageVideoChannelUsers;
                var4 = var5 > var4;
                var2['reachedLimit'] = var4;
                var3 = var3.maxStageVideoChannelUsers;
                var2['limit'] = var3;
                var1 = var2;
 159:
                _fun0001_ip = 175; continue _fun0001;
 161:
                var1 = {'reachedLimit': false, 'limit': 4294967295};
 175:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function getChannelVideoLimit(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(!(var4 != var3)) { _fun0002_ip = 153; continue _fun0002 }
 56:
            var2 = var2.type;
            var1 = _closure1_slot4;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var2 !== var1)) { _fun0002_ip = 120; continue _fun0002 }
 75:
            var1 = {};
            var4 = var3.maxVideoChannelUsers;
            var2 = 0;
            var2 = var4 > var2;
            if(!var2) { _fun0002_ip = 102; continue _fun0002 }
 92:
            var4 = var3.maxVideoChannelUsers;
            var2 = var5 > var4;
 102:
            var1['reachedLimit'] = var2;
            var2 = var3.maxVideoChannelUsers;
            var1['limit'] = var2;
            _fun0002_ip = 151; continue _fun0002;
 120:
            var2 = {};
            var4 = var3.maxStageVideoChannelUsers;
            var4 = var5 > var4;
            var2['reachedLimit'] = var4;
            var3 = var3.maxStageVideoChannelUsers;
            var2['limit'] = var3;
            var1 = var2;
 151:
            _fun0002_ip = 167; continue _fun0002;
 153:
            var1 = {'reachedLimit': false, 'limit': 4294967295};
 167:
            return var1;
        }
    };
    var3['getChannelVideoLimit'] = var2;
    return var1;
})();