// app/modules/ads/analytics/captureAdUserAction.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _handleClickInternalAction() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var12 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var11 = var12.adCreativeType;
                    var16 = var12.questContentCTA;
                    var9 = var12.surfaceId;
                    var6 = var12.sourceQuestContent;
                    var15 = var12.impressionId;
                    var14 = var12.clickId;
                    var18 = var12.questContentPosition;
                    var17 = var12.questContentRowIndex;
                    var8 = var12.trackGuildAndChannelMetadata;
                    var13 = null;
                    if(!(var13 == var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var2 = var4[var2];
                    var21 = undefined;
                    var3 = var3.bind(var21)(var2);
                    var2 = var3.getContentProperties;
                    var7 = var2.bind(var3)(var9, var18, var17);
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var2 = var4[var2];
                    var5 = var3.bind(var21)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot5;
                    var3 = var2.QUEST_CONTENT_CLICKED;
                    var2 = {};
                    var2['cta_name'] = var16;
                    var10 = var14;
                    if(!(var13 == var10)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var20 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var19 = 8;
                    var19 = var22[var19];
                    var20 = var20.bind(var21)(var19);
                    var19 = var20.v4;
                    var10 = var19.bind(var20)();
case 6:
                    var2['click_id'] = var10;
                    var19 = var12.isTargeted;
                    var10 = var13 != var19;
                    if(!var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var10 = var19;
case 8:
                    var2['is_targeted'] = var10;
                    var10 = var7.content_id;
                    var2['content_id'] = var10;
                    var10 = var7.content_name;
                    var2['content_name'] = var10;
                    var10 = var7.content_position;
                    var2['content_position'] = var10;
                    var7 = var7.row_index;
                    var2['row_index'] = var7;
                    var7 = var12.adContentId;
                    var2['ad_content_id'] = var7;
                    var7 = var12.relatedQuestId;
                    var2['quest_id'] = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0001_ip = 10; continue _fun0001;
case 4:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 4;
                    var2 = var2[var3];
                    var10 = undefined;
                    var5 = var4.bind(var10)(var2);
                    var4 = var5.getCommonClickEventProperties;
                    var2 = {};
                    var2['questContent'] = var9;
                    var2['questContentPosition'] = var18;
                    var2['questContentRowIndex'] = var17;
                    var2['questContentCTA'] = var16;
                    var2['impressionId'] = var15;
                    var2['clickId'] = var14;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=368);
case 11:
                    return var2;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var5 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = 3;
                    var4 = var14[var4];
                    var4 = var5.bind(var10)(var4);
                    var4 = var4.AdCreativeType;
                    var4 = var4.QUEST;
                    if(!(var11 === var4)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var19 = var12.adCreativeId;
                    var18 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var4 = var16[var3];
                    var14 = var18.bind(var10)(var4);
                    var5 = var14.trackQuestEvent;
                    var4 = {};
                    var4['questId'] = var19;
                    var15 = _closure1_slot5;
                    var15 = var15.QUEST_CONTENT_CLICKED;
                    var4['event'] = var15;
                    var15 = {};
                    var25 = var15;
                    var24 = var2;
                    var17 = copyDataProperties(var25, var24);
                    var17 = 5;
                    var16 = var16[var17];
                    var18 = var18.bind(var10)(var16);
                    var16 = var18.getAdMetadataSealed;
                    var16 = var16.bind(var18)(var6, var19);
                    var20 = var13 != var16;
                    var18 = null;
                    if(!var20) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var18 = var16;
case 17:
                    var16 = 'metadata_sealed';
                    var15[15] = var18;
                    var18 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var16 = var16[var17];
                    var18 = var18.bind(var10)(var16);
                    var16 = var18.getAdTrafficMetadataSealed;
                    var16 = var16.bind(var18)(var6, var19);
                    var19 = var13 != var16;
                    var18 = null;
                    if(!var19) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var18 = var16;
case 19:
                    var16 = 'traffic_metadata_sealed';
                    var15[15] = var18;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var16 = 9;
                    var16 = var19[var16];
                    var18 = var18.bind(var10)(var16);
                    var16 = var18.getCurrentQuestHomeSearchSession;
                    var18 = var16.bind(var18)();
                    var19 = var13 == var18;
                    var16 = undefined;
                    if(var19) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var16 = var18.uuid;
case 21:
                    var19 = var13 != var16;
                    var18 = null;
                    if(!var19) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var18 = var16;
case 23:
                    var16 = 'search_session_id';
                    var15[15] = var18;
                    var4['properties'] = var15;
                    var4['trackGuildAndChannelMetadata'] = var8;
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var15 = var15[var17];
                    var16 = var16.bind(var10)(var15);
                    var15 = var16.isBillableQuestContent;
                    var15 = var15.bind(var16)(var9);
                    var4['shouldExtendSession'] = var15;
                    var4['sourceQuestContent'] = var6;
                    var4 = var5.bind(var14)(var4);
                    _fun0001_ip = 10; continue _fun0001;
case 15:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var3 = var15[var3];
                    var5 = var14.bind(var10)(var3);
                    var4 = var5.trackAdContentEvent;
                    var3 = {};
                    var16 = var12.adCreativeId;
                    var3['adContentId'] = var16;
                    var12 = var12.relatedQuestId;
                    var3['relatedQuestId'] = var12;
                    var3['adCreativeType'] = var11;
                    var11 = _closure1_slot5;
                    var11 = var11.QUEST_CONTENT_CLICKED;
                    var3['event'] = var11;
                    var11 = {};
                    var25 = var11;
                    var24 = var2;
                    var12 = copyDataProperties(var25, var24);
                    var12 = 9;
                    var12 = var15[var12];
                    var14 = var14.bind(var10)(var12);
                    var12 = var14.getCurrentQuestHomeSearchSession;
                    var14 = var12.bind(var14)();
                    var15 = var13 == var14;
                    var12 = undefined;
                    if(var15) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var12 = var14.uuid;
case 25:
                    var14 = var13 != var12;
                    var13 = null;
                    if(!var14) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var13 = var12;
case 27:
                    var12 = 'search_session_id';
                    var11[11] = var13;
                    var3['properties'] = var11;
                    var3['trackGuildAndChannelMetadata'] = var8;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 5;
                    var7 = var11[var7];
                    var8 = var8.bind(var10)(var7);
                    var7 = var8.isBillableQuestContent;
                    var7 = var7.bind(var8)(var9);
                    var3['shouldExtendSession'] = var7;
                    var3['sourceQuestContent'] = var6;
                    var3 = var4.bind(var5)(var3);
case 10:
                    var3 = undefined;
                    return var3;
case 13:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/ads/analytics/captureAdUserAction.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function captureAdUserAction(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var3 = var6.type;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 10;
            var2 = var1[var5];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.AdUserActionType;
            var2 = var2.END_CONTENT_LOAD;
            if(!(var2 !== var3)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var1)(var2);
            var2 = var2.AdUserActionType;
            var2 = var2.CLICK_INTERNAL;
            if(!(var2 === var3)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var2 = function handleClickInternalAction() {
                var1 = undefined;
                var4 = _closure1_slot6;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = var2.bind(var1)(var6);
            var2 = !var2;
            _fun0002_ip = 31; continue _fun0002;
case 29:
            var2 = _closure1_slot4;
            var2 = var2.questEnrollmentBlockedUntil;
            var9 = null;
            var8 = var9 != var2;
            var3 = var6.adCreativeType;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.AdCreativeType;
            var2 = var2.QUEST;
            if(!(var3 !== var2)) { _fun0002_ip = 11; continue _fun0002 }
case 33:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 4;
            var2 = var12[var2];
            var4 = var11.bind(var1)(var2);
            var3 = var4.trackAdContentEvent;
            var2 = {};
            var5 = _closure1_slot5;
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
            var10 = 6;
            var10 = var12[var10];
            var12 = var11.bind(var1)(var10);
            var11 = var12.getQuestContentName;
            var10 = var6.surfaceId;
            var10 = var11.bind(var12)(var10);
            var5['content_name'] = var10;
            var10 = var6.questContentPosition;
            var5['content_position'] = var10;
            var10 = var6.questContentRowIndex;
            var5['row_index'] = var10;
            var2['properties'] = var5;
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 31; continue _fun0002;
case 11:
            var13 = var6.adCreativeId;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 4;
            var2 = var10[var2];
            var4 = var11.bind(var1)(var2);
            var3 = var4.trackQuestEvent;
            var2 = {};
            var5 = _closure1_slot5;
            var5 = var5.QUEST_CONTENT_LOADED;
            var2['event'] = var5;
            var2['questId'] = var13;
            var5 = var6.trackGuildAndChannelMetadata;
            var2['trackGuildAndChannelMetadata'] = var5;
            var5 = var6.sourceQuestContent;
            var2['sourceQuestContent'] = var5;
            var5 = {};
            var12 = var6.triggeredByStatusChange;
            var5['triggered_by_status_change'] = var12;
            var12 = 5;
            var10 = var10[var12];
            var14 = var11.bind(var1)(var10);
            var11 = var14.getAdMetadataSealed;
            var10 = var6.sourceQuestContent;
            var11 = var11.bind(var14)(var10, var13);
            var14 = var9 != var11;
            var10 = null;
            if(!var14) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var10 = var11;
case 34:
            var5['metadata_sealed'] = var10;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var12 = var11.bind(var1)(var10);
            var11 = var12.getAdTrafficMetadataSealed;
            var10 = var6.sourceQuestContent;
            var10 = var11.bind(var12)(var10, var13);
            var11 = var9 != var10;
            var9 = null;
            if(!var11) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var9 = var10;
case 36:
            var5['traffic_metadata_sealed'] = var9;
            var9 = var6.impressionId;
            var5['impression_id'] = var9;
            var5['is_quest_enrollment_blocked'] = var8;
            var8 = var6.surfaceId;
            var5['content_id'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 6;
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
case 31:
            return var1;
        }
    };
    var3['captureAdUserAction'] = var2;
    return var1;
})();