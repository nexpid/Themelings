// app/modules/go_live/utils/trackStreamProblem.tsx
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
    var4 = 'modules/go_live/utils/trackStreamProblem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackStreamProblem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var14 = var2.problem;
            var10 = var2.stream;
            var7 = var2.feedback;
            var11 = var2.streamApplication;
            var6 = var2.analyticsData;
            var9 = var2.location;
            var8 = var2.rating;
            var1 = undefined;
            if(!(var8 === var1)) { _fun0001_ip = 52; continue _fun0001 }
 50:
            var8 = null;
 52:
            var13 = var2.category;
            var12 = var2.variant;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot2;
            var3 = var2.STREAM_REPORT_PROBLEM;
            var2 = {};
            var2['reason'] = var14;
            var2['category'] = var13;
            var2['reason_variant'] = var12;
            var12 = var10.ownerId;
            var2['streamer_user_id'] = var12;
            var12 = var10.channelId;
            var2['stream_channel_id'] = var12;
            var10 = var10.guildId;
            var2['guild_id'] = var10;
            var10 = null;
            var13 = var10 != var11;
            var12 = null;
            if(!var13) { _fun0001_ip = 168; continue _fun0001 }
 163:
            var12 = var11.id;
 168:
            var2['application_id'] = var12;
            var12 = var10 != var11;
            var10 = null;
            if(!var12) { _fun0001_ip = 187; continue _fun0001 }
 182:
            var10 = var11.name;
 187:
            var2['application_name'] = var10;
            var2['location'] = var9;
            var2['rating'] = var8;
            var2['feedback'] = var7;
            var16 = var2;
            var15 = var6;
            var6 = copyDataProperties(var16, var15);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();