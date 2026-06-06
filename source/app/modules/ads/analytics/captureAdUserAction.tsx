// app/modules/ads/analytics/captureAdUserAction.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/ads/analytics/captureAdUserAction.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function captureAdUserAction(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var3 = var6.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.AdUserActionType;
            var2 = var2.END_CONTENT_LOAD;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var12 = 2;
            var2 = var5[var12];
            var9 = var4.bind(var1)(var2);
            var8 = var9.getAdMetadataSealed;
            var3 = var6.sourceQuestContent;
            var2 = var6.adCreativeId;
            var11 = var8.bind(var9)(var3, var2);
            var2 = _closure1_slot2;
            var2 = var2.questEnrollmentBlockedUntil;
            var9 = null;
            var8 = var9 != var2;
            var3 = var6.adCreativeType;
            var2 = 3;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.AdCreativeType;
            var2 = var2.QUEST;
            if(!(var3 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var2 = 4;
            var2 = var14[var2];
            var4 = var13.bind(var1)(var2);
            var3 = var4.trackAdContentEvent;
            var2 = {};
            var5 = _closure1_slot3;
            var5 = var5.QUEST_CONTENT_LOADED;
            var2['event'] = var5;
            var5 = var6.adCreativeId;
            var2['adContentId'] = var5;
            var5 = var6.adCreativeType;
            var2['adCreativeType'] = var5;
            var5 = var6.trackGuildAndChannelMetadata;
            var2['trackGuildAndChannelMetadata'] = var5;
            var5 = var6.sourceQuestContent;
            var2['sourceQuestContent'] = var5;
            var5 = {};
            var10 = var6.triggeredByStatusChange;
            var5['triggered_by_status_change'] = var10;
            var10 = var6.impressionId;
            var5['impression_id'] = var10;
            var5['is_quest_enrollment_blocked'] = var8;
            var10 = var6.surfaceId;
            var5['content_id'] = var10;
            var10 = 5;
            var10 = var14[var10];
            var14 = var13.bind(var1)(var10);
            var13 = var14.getQuestContentName;
            var10 = var6.surfaceId;
            var10 = var13.bind(var14)(var10);
            var5['content_name'] = var10;
            var10 = var6.questContentPosition;
            var5['content_position'] = var10;
            var10 = var6.questContentRowIndex;
            var5['row_index'] = var10;
            var2['properties'] = var5;
            var2 = var3.bind(var4)(var2);
            _fun0001_ip = 2; continue _fun0001;
case 4:
            var13 = var6.adCreativeId;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackQuestEvent;
            var2 = {};
            var5 = _closure1_slot3;
            var5 = var5.QUEST_CONTENT_LOADED;
            var2['event'] = var5;
            var2['questId'] = var13;
            var5 = var6.trackGuildAndChannelMetadata;
            var2['trackGuildAndChannelMetadata'] = var5;
            var5 = var6.sourceQuestContent;
            var2['sourceQuestContent'] = var5;
            var5 = {};
            var10 = var6.triggeredByStatusChange;
            var5['triggered_by_status_change'] = var10;
            var14 = var9 != var11;
            var10 = null;
            if(!var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var11;
case 6:
            var5['metadata_sealed'] = var10;
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var10 = var10[var12];
            var12 = var11.bind(var1)(var10);
            var11 = var12.getAdTrafficMetadataSealed;
            var10 = var6.sourceQuestContent;
            var10 = var11.bind(var12)(var10, var13);
            var11 = var9 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var10;
case 8:
            var5['traffic_metadata_sealed'] = var9;
            var9 = var6.impressionId;
            var5['impression_id'] = var9;
            var5['is_quest_enrollment_blocked'] = var8;
            var8 = var6.surfaceId;
            var5['content_id'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var7 = 5;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.getQuestContentName;
            var7 = var6.surfaceId;
            var7 = var8.bind(var9)(var7);
            var5['content_name'] = var7;
            var7 = var6.questContentPosition;
            var5['content_position'] = var7;
            var6 = var6.questContentRowIndex;
            var5['row_index'] = var6;
            var2['properties'] = var5;
            var2 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var3['captureAdUserAction'] = var2;
    return var1;
})();