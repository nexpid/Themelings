// app/modules/video_calls/native/useTrackActivityVideoPip.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/useTrackActivityVideoPip.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackActivityPip(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 3;
        var4 = var6[var1];
        var1 = undefined;
        var9 = var5.bind(var1)(var4);
        var8 = var9.useStateFromStores;
        var4 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var2 = _closure1_slot4;
            var1 = var2.isPipEnabledWhileFocusedOnActivityOrStream;
            var1 = var1.bind(var2)();
            return var1;
        };
        var9 = var8.bind(var9)(var5, var4);
        var _closure2_slot1 = var9;
        var5 = _closure1_slot1;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.bind(var1)(var9);
        var _closure2_slot2 = var8;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var6 = var4.bind(var1)();
        var _closure2_slot3 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot3;
                var2 = null;
                if(!(var2 != var1)) { _fun0001_ip = 149; continue _fun0001 }
 16:
                var1 = _closure2_slot2;
                if(!(var2 != var1)) { _fun0001_ip = 149; continue _fun0001 }
 27:
                var2 = _closure2_slot1;
                var1 = _closure2_slot2;
                if(!(var2 !== var1)) { _fun0001_ip = 149; continue _fun0001 }
 39:
                var3 = _closure2_slot1;
                var2 = _closure1_slot5;
                if(var3) { _fun0001_ip = 61; continue _fun0001 }
 53:
                var4 = var2.ACTIVITY_VIDEO_PIP_HIDDEN;
                _fun0001_ip = 67; continue _fun0001;
 61:
                var4 = var2.ACTIVITY_VIDEO_PIP_SHOWN;
 67:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.track;
                var1 = {};
                var6 = _closure2_slot0;
                var7 = var6.id;
                var1['channel_id'] = var7;
                var6 = var6.guild_id;
                var1['guild_id'] = var6;
                var5 = _closure2_slot3;
                var6 = var5.applicationId;
                var1['application_id'] = var6;
                var5 = var5.compositeInstanceId;
                var1['activity_session_id'] = var5;
                var1 = var2.bind(var3)(var4, var1);
 149:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();