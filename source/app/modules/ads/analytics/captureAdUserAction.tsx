// app/modules/ads/analytics/captureAdUserAction.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function emitClickEventWithCreative() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _emitClickEventWithCreative() {
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
                    var15 = var12.questContentCTA;
                    var10 = var12.surfaceId;
                    var7 = var12.sourceQuestContent;
                    var14 = var12.impressionId;
                    var13 = var12.clickId;
                    var17 = var12.questContentPosition;
                    var16 = var12.questContentRowIndex;
                    var9 = var12.trackGuildAndChannelMetadata;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 4;
                    var2 = var2[var4];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.getCommonClickEventProperties;
                    var2 = {};
                    var2['questContent'] = var10;
                    var2['questContentPosition'] = var17;
                    var2['questContentRowIndex'] = var16;
                    var2['questContentCTA'] = var15;
                    var2['impressionId'] = var14;
                    var2['clickId'] = var13;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=139);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 3;
                    var5 = var13[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.AdCreativeType;
                    var5 = var5.QUEST;
                    if(!(var11 === var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var19 = var12.adCreativeId;
                    var17 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = var15[var4];
                    var13 = var17.bind(var3)(var5);
                    var6 = var13.trackQuestEvent;
                    var5 = {};
                    var5['questId'] = var19;
                    var14 = _closure1_slot5;
                    var14 = var14.QUEST_CONTENT_CLICKED;
                    var5['event'] = var14;
                    var14 = {};
                    var22 = var14;
                    var21 = var2;
                    var16 = copyDataProperties(var22, var21);
                    var16 = 5;
                    var15 = var15[var16];
                    var17 = var17.bind(var3)(var15);
                    var15 = var17.getAdMetadataSealed;
                    var15 = var15.bind(var17)(var7, var19);
                    var17 = null;
                    var20 = var17 != var15;
                    var18 = null;
                    if(!var20) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var18 = var15;
case 10:
                    var15 = 'metadata_sealed';
                    var14[14] = var18;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var15 = var15[var16];
                    var18 = var18.bind(var3)(var15);
                    var15 = var18.getAdTrafficMetadataSealed;
                    var15 = var15.bind(var18)(var7, var19);
                    var19 = var17 != var15;
                    var18 = null;
                    if(!var19) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var18 = var15;
case 12:
                    var15 = 'traffic_metadata_sealed';
                    var14[14] = var18;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var15 = 7;
                    var15 = var19[var15];
                    var18 = var18.bind(var3)(var15);
                    var15 = var18.getCurrentQuestHomeSearchSession;
                    var18 = var15.bind(var18)();
                    var19 = var17 == var18;
                    var15 = undefined;
                    if(var19) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var15 = var18.uuid;
case 14:
                    var18 = var17 != var15;
                    var17 = null;
                    if(!var18) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var17 = var15;
case 16:
                    var15 = 'search_session_id';
                    var14[14] = var17;
                    var5['properties'] = var14;
                    var5['trackGuildAndChannelMetadata'] = var9;
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var16];
                    var15 = var15.bind(var3)(var14);
                    var14 = var15.isBillableQuestContent;
                    var14 = var14.bind(var15)(var10);
                    var5['shouldExtendSession'] = var14;
                    var5['sourceQuestContent'] = var7;
                    var5 = var6.bind(var13)(var5);
                    _fun0001_ip = 18; continue _fun0001;
case 8:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = var14[var4];
                    var6 = var13.bind(var3)(var4);
                    var5 = var6.trackAdContentEvent;
                    var4 = {};
                    var15 = var12.adCreativeId;
                    var4['adContentId'] = var15;
                    var12 = var12.relatedQuestId;
                    var4['relatedQuestId'] = var12;
                    var4['adCreativeType'] = var11;
                    var11 = _closure1_slot5;
                    var11 = var11.QUEST_CONTENT_CLICKED;
                    var4['event'] = var11;
                    var11 = {};
                    var22 = var11;
                    var21 = var2;
                    var12 = copyDataProperties(var22, var21);
                    var12 = 7;
                    var12 = var14[var12];
                    var13 = var13.bind(var3)(var12);
                    var12 = var13.getCurrentQuestHomeSearchSession;
                    var14 = var12.bind(var13)();
                    var13 = null;
                    var15 = var13 == var14;
                    var12 = undefined;
                    if(var15) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var12 = var14.uuid;
case 19:
                    var14 = var13 != var12;
                    var13 = null;
                    if(!var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var13 = var12;
case 21:
                    var12 = 'search_session_id';
                    var11[11] = var13;
                    var4['properties'] = var11;
                    var4['trackGuildAndChannelMetadata'] = var9;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 5;
                    var8 = var11[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.isBillableQuestContent;
                    var8 = var8.bind(var9)(var10);
                    var4['shouldExtendSession'] = var8;
                    var4['sourceQuestContent'] = var7;
                    var4 = var5.bind(var6)(var4);
case 18:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _handleClickInternalAction() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 3:
                    var2 = var4.adCreativeType;
                    var8 = null;
                    if(!(var8 == var2)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var13 = var4.surfaceId;
                    var11 = var4.questContentCTA;
                    var9 = var4.clickId;
                    var7 = var4.questContentPosition;
                    var6 = var4.questContentRowIndex;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var12 = undefined;
                    var3 = var3.bind(var12)(var2);
                    var2 = var3.getContentProperties;
                    var7 = var2.bind(var3)(var13, var7, var6);
                    var3 = _closure1_slot1;
                    var2 = 8;
                    var2 = var5[var2];
                    var6 = var3.bind(var12)(var2);
                    var5 = var6.track;
                    var2 = _closure1_slot5;
                    var3 = var2.QUEST_CONTENT_CLICKED;
                    var2 = {};
                    var2['cta_name'] = var11;
                    if(!(var8 == var9)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 9;
                    var10 = var13[var10];
                    var11 = var11.bind(var12)(var10);
                    var10 = var11.v4;
                    var9 = var10.bind(var11)();
case 26:
                    var2['click_id'] = var9;
                    var9 = var4.isTargeted;
                    var8 = var8 != var9;
                    if(!var8) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var8 = var9;
case 28:
                    var2['is_targeted'] = var8;
                    var8 = var7.content_id;
                    var2['content_id'] = var8;
                    var8 = var7.content_name;
                    var2['content_name'] = var8;
                    var8 = var7.content_position;
                    var2['content_position'] = var8;
                    var7 = var7.row_index;
                    var2['row_index'] = var7;
                    var7 = var4.adContentId;
                    var2['ad_content_id'] = var7;
                    var7 = var4.relatedQuestId;
                    var2['quest_id'] = var7;
                    var2 = var5.bind(var6)(var3, var2);
                    _fun0002_ip = 30; continue _fun0002;
case 24:
                    var3 = _closure1_slot6;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    SaveGenerator(address=290);
case 10:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 32; continue _fun0002 }
case 30:
                    var3 = undefined;
                    return var3;
case 32:
                    return var2;
case 23:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _handleClickExternalAdvertiserCtaAction() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var4 = _closure1_slot6;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var3)(var2);
                    SaveGenerator(address=28);
case 35:
                    return var2;
case 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    return var3;
case 36:
                    return var2;
case 33:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
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
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var4 = var6.type;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 10;
            var3 = var1[var8];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var3.AdUserActionType;
            var3 = var3.END_CONTENT_LOAD;
            if(!(var3 !== var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var5.bind(var1)(var3);
            var3 = var3.AdUserActionType;
            var3 = var3.CLICK_INTERNAL;
            if(!(var3 !== var4)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var5.bind(var1)(var3);
            var3 = var3.AdUserActionType;
            var3 = var3.CLICK_EXTERNAL_ADVERTISER_CTA;
            if(!(var3 === var4)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var3 = function handleClickExternalAdvertiserCtaAction() {
                var1 = undefined;
                var4 = _closure1_slot9;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var3 = var3.bind(var1)(var6);
            var3 = !var3;
            _fun0004_ip = 42; continue _fun0004;
case 40:
            var2 = function handleClickInternalAction() {
                var1 = undefined;
                var4 = _closure1_slot8;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = var2.bind(var1)(var6);
            var2 = !var2;
            _fun0004_ip = 42; continue _fun0004;
case 38:
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
            if(!(var3 !== var2)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
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
            _fun0004_ip = 42; continue _fun0004;
case 44:
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
            if(!var14) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var10 = var11;
case 46:
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
            if(!var11) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var9 = var10;
case 48:
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
case 42:
            return var1;
        }
    };
    var3['captureAdUserAction'] = var2;
    return var1;
})();