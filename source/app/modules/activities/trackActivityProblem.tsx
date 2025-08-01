// app/modules/activities/trackActivityProblem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/trackActivityProblem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackActivityProblem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.problem;
            var14 = var2.channel;
            var7 = var2.embeddedActivityLocation;
            var8 = var2.feedback;
            var12 = var2.activityApplication;
            var6 = var2.analyticsData;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0001_ip = 46; continue _fun0001 }
 44:
            var6 = {};
 46:
            var10 = var2.location;
            var9 = var2.rating;
            if(!(var9 === var1)) { _fun0001_ip = 63; continue _fun0001 }
 61:
            var9 = null;
 63:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot2;
            var3 = var2.ACTIVITY_REPORT_PROBLEM;
            var2 = {};
            var2['reason'] = var11;
            var11 = null;
            var15 = var11 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 129; continue _fun0001 }
 119:
            var15 = var14.getGuildId;
            var13 = var15.bind(var14)();
 129:
            var2['guild_id'] = var13;
            var15 = var11 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 147; continue _fun0001 }
 142:
            var13 = var14.id;
 147:
            var2['channel_id'] = var13;
            var14 = var11 == var12;
            var13 = undefined;
            if(var14) { _fun0001_ip = 165; continue _fun0001 }
 160:
            var13 = var12.id;
 165:
            var2['application_id'] = var13;
            var13 = var11 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 184; continue _fun0001 }
 179:
            var11 = var12.name;
 184:
            var2['application_name'] = var11;
            var2['location'] = var10;
            var2['rating'] = var9;
            var2['feedback'] = var8;
            var7 = var7.kind;
            var2['embedded_activity_location_kind'] = var7;
            var7 = var6.rtc_connection_id;
            var2['rtc_connection_id'] = var7;
            var6 = var6.media_session_id;
            var2['media_session_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();