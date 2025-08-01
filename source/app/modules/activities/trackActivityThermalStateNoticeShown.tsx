// app/modules/activities/trackActivityThermalStateNoticeShown.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/trackActivityThermalStateNoticeShown.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackActivityThermalStateNoticeShown() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot5;
            var1 = var2.getCurrentEmbeddedActivity;
            var2 = var1.bind(var2)();
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getEmbeddedActivityLocationChannelId;
            var7 = null;
            var8 = var7 == var2;
            var3 = undefined;
            if(var8) { _fun0001_ip = 61; continue _fun0001 }
 56:
            var3 = var2.location;
 61:
            var11 = var4.bind(var5)(var3);
            var4 = _closure1_slot3;
            var3 = var4.getBasicChannel;
            var8 = var3.bind(var4)(var11);
            var3 = var7 == var2;
            var9 = undefined;
            if(var3) { _fun0001_ip = 96; continue _fun0001 }
 90:
            var9 = var2.compositeInstanceId;
 96:
            var3 = var7 == var2;
            var10 = undefined;
            if(var3) { _fun0001_ip = 110; continue _fun0001 }
 105:
            var10 = var2.applicationId;
 110:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot6;
            var3 = var2.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN;
            var2 = {};
            var2['channel_id'] = var11;
            var2['application_id'] = var10;
            var2['activity_session_id'] = var9;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 175; continue _fun0001 }
 170:
            var7 = var8.guild_id;
 175:
            var2['guild_id'] = var7;
            var7 = _closure1_slot4;
            var6 = var7.getMediaSessionId;
            var6 = var6.bind(var7)();
            var2['media_session_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackActivityThermalStateNoticeShown'] = var2;
    return var1;
})();