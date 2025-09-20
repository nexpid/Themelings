// app/modules/hang_status/getHangStatusAnalytics.tsx
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
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/getHangStatusAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getHangStatusAnalytics(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 91; continue _fun0001 }
 9:
            var1 = {};
            var1['channel_id'] = var4;
            var6 = _closure1_slot0;
            var5 = var6.getChannel;
            var5 = var5.bind(var6)(var4);
            var6 = var3 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 46; continue _fun0001 }
 41:
            var3 = var5.guild_id;
 46:
            var1['guild_id'] = var3;
            var5 = _closure1_slot1;
            var3 = var5.getMediaSessionId;
            var3 = var3.bind(var5)();
            var1['media_session_id'] = var3;
            var3 = _closure1_slot2;
            var2 = var3.countVoiceStatesForChannel;
            var2 = var2.bind(var3)(var4);
            var1['call_num_participants'] = var2;
            _fun0001_ip = 135; continue _fun0001;
 91:
            var2 = {};
            var3 = undefined;
            var2['channel_id'] = var3;
            var2['guild_id'] = var3;
            var4 = _closure1_slot1;
            var3 = var4.getMediaSessionId;
            var3 = var3.bind(var4)();
            var2['media_session_id'] = var3;
            var3 = 0;
            var2['call_num_participants'] = var3;
            var1 = var2;
 135:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();