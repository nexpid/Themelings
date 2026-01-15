// app/modules/quests/QuestAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var13;
    var10 = function getQuestContentName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot11;
            var2 = var3.find;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.QuestContent;
                var1 = arg1;
                var2 = var2[var1];
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot13 = var10;
    var9 = function getQuestStatus(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = var5.userStatus;
            var4 = null;
            var6 = var4 == var2;
            var1 = undefined;
            if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var2.claimedAt;
case 4:
            var2 = var4 != var1;
            var1 = 'COMPLETED_CLAIMED';
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var5.userStatus;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var6.completedAt;
case 8:
            var6 = var4 != var2;
            var2 = 'COMPLETED';
            if(var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var5.userStatus;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var5.enrolledAt;
case 12:
            var4 = var4 != var3;
            var3 = 'NONE';
            if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = 'ENROLLED';
case 14:
            var2 = var3;
case 10:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot14 = var9;
    var1 = function assignBillingSessionId(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var6 = var1.AdSessionIdExperiment;
            var5 = var6.getConfig;
            var1 = {};
            var7 = 'quest_analytics';
            var1['location'] = var7;
            var5 = var5.bind(var6)(var1);
            var1 = arg2;
            if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var6 = var6.bind(var4)(var1);
            var1 = var6.getActiveSessionUnsafe;
            var7 = var1.bind(var6)();
            var1 = null;
            var8 = var1 == var7;
            var6 = undefined;
            if(var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var6 = var7.uuid;
case 18:
            var7 = var1 != var6;
            var1 = null;
            if(!var7) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var1 = var6;
case 20:
            _fun0003_ip = 22; continue _fun0003;
case 16:
            var5 = var5.use_ad_session_id;
            if(var5) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getActiveSessionUnsafe;
            var5 = var3.bind(var5)();
            var3 = null;
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var4 = var5.uuid;
case 25:
            var5 = var3 != var4;
            var3 = null;
            if(!var5) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var3 = var4;
case 27:
            var2 = var3;
case 23:
            var1 = var2;
case 22:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getCommonProperties(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var6 = undefined;
            var9 = var7.bind(var6)(var1);
            var4 = var9.getOrRefreshAdSession;
            var1 = arg3;
            var1 = var4.bind(var9)(var1);
            var10 = var1.uuid;
            var1 = {};
            var4 = var2.id;
            var1['quest_id'] = var4;
            var4 = 11;
            var4 = var8[var4];
            var11 = var7.bind(var6)(var4);
            var9 = var11.getQuestType;
            var4 = var2.config;
            var4 = var9.bind(var11)(var4);
            var1['quest_type'] = var4;
            var4 = var2.config;
            var4 = var4.application;
            var4 = var4.id;
            var1['game_id'] = var4;
            var4 = var2.config;
            var4 = var4.application;
            var4 = var4.name;
            var1['game_name'] = var4;
            var4 = 12;
            var4 = var8[var4];
            var7 = var7.bind(var6)(var4);
            var4 = var7.getAllApplicationIds;
            var4 = var4.bind(var7)(var2);
            var7 = null;
            if(!(var7 == var4)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var4 = new Array(0);
case 29:
            var1['application_ids'] = var4;
            var1['client_ad_session_id'] = var10;
            var9 = _closure1_slot15;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 13;
            var8 = var7[var3];
            var11 = var4.bind(var6)(var8);
            var8 = var11.isBillableQuestContent;
            var8 = var8.bind(var11)(var5);
            var8 = var9.bind(var6)(var10, var8);
            var1['billing_session_id'] = var8;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getAdDecisionData;
            var2 = var2.id;
            var12 = var3.bind(var4)(var2, var5);
            var13 = var1;
            var2 = copyDataProperties(var13, var12);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var8 = function getContentProperties(arg1, arg2, arg3) {
        var4 = arg1;
        var1 = {};
        var1['content_id'] = var4;
        var3 = _closure1_slot13;
        var2 = undefined;
        var2 = var3.bind(var2)(var4);
        var1['content_name'] = var2;
        var2 = arg2;
        var1['content_position'] = var2;
        var2 = arg3;
        var1['row_index'] = var2;
        return var1;
    };
    var _closure1_slot17 = var8;
    var7 = function trackQuestEvent(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var8 = var3.questId;
            var6 = var3.event;
            var4 = var3.properties;
            var2 = var3.trackGuildAndChannelMetadata;
            var10 = var3.shouldExtendSession;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0005_ip = 31; continue _fun0005 }
case 7:
            var10 = false;
case 31:
            var9 = var3.sourceQuestContent;
            var3 = _closure1_slot7;
            var5 = var3.quests;
            var3 = var5.get;
            var3 = var3.bind(var5)(var8);
            var5 = null;
            if(!(var5 != var3)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 14;
            var5 = var11[var5];
            var11 = var8.bind(var1)(var5);
            var8 = var11.isQuestPreviewToolEnabled;
            var5 = {};
            var12 = _closure1_slot8;
            var12 = var12.QUEST_PREVIEW_TOOL;
            var5['location'] = var12;
            var5 = var8.bind(var11)(var5);
            if(!var5) { _fun0005_ip = 29; continue _fun0005 }
case 34:
            var8 = _closure1_slot6;
            var5 = var8.getLayers;
            var11 = var5.bind(var8)();
            var8 = var11.includes;
            var5 = _closure1_slot10;
            var5 = var5.USER_SETTINGS;
            var5 = var8.bind(var11)(var5);
            if(var5) { _fun0005_ip = 32; continue _fun0005 }
case 29:
            var5 = {};
            var8 = _closure1_slot16;
            var14 = var8.bind(var1)(var3, var9, var10);
            var15 = var5;
            var8 = copyDataProperties(var15, var14);
            var15 = var5;
            var14 = var4;
            var4 = copyDataProperties(var15, var14);
            var4 = _closure1_slot5;
            var4 = var4.isLoggingAnalyticsEvents;
            var3 = var3.preview;
            if(var3) { _fun0005_ip = 32; continue _fun0005 }
case 35:
            var4 = _closure1_slot12;
            var3 = var4.has;
            var4 = var3.bind(var4)(var6);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var2) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var2 = 16;
            var2 = var7[var2];
            var9 = var3.bind(var1)(var2);
            var8 = var9.track;
            var2 = {};
            var2['flush'] = var4;
            var2 = var8.bind(var9)(var6, var5, var2);
            _fun0005_ip = 32; continue _fun0005;
case 36:
            var2 = 15;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackWithMetadata;
            var2 = var2.bind(var3)(var6, var5, var4);
            return var2;
case 32:
            return var1;
        }
    };
    var _closure1_slot18 = var7;
    var1 = function _trackQuestContentClicked() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var12 = var2.questId;
                    var10 = var2.questContent;
                    var18 = var2.questContentCTA;
                    var23 = var2.questContentPosition;
                    var20 = var2.questContentRowIndex;
                    var19 = var2.impressionId;
                    var9 = var2.trackGuildAndChannelMetadata;
                    var4 = undefined;
                    if(!(var9 === var4)) { _fun0006_ip = 17; continue _fun0006 }
case 40:
                    var9 = false;
case 17:
                    var7 = var2.sourceQuestContent;
                    SaveGenerator(address=73);
case 11:
                    return var4;
case 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var5 = _closure1_slot7;
                    var3 = var5.getQuest;
                    var21 = var3.bind(var5)(var12);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 17;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.getAdUser;
                    var3 = _closure1_slot13;
                    var3 = var3.bind(var4)(var10);
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=144);
case 44:
                    return var3;
case 45:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var6 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var11 = 13;
                    var5 = var22[var11];
                    var13 = var6.bind(var4)(var5);
                    var5 = var13.getAdMetadataRaw;
                    var17 = var5.bind(var13)(var10);
                    var5 = var22[var11];
                    var13 = var6.bind(var4)(var5);
                    var5 = var13.getAdMetadataSealed;
                    var16 = var5.bind(var13)(var10);
                    var5 = var22[var11];
                    var13 = var6.bind(var4)(var5);
                    var5 = var13.getAdTrafficMetadataRaw;
                    var15 = var5.bind(var13)(var10, var12);
                    var5 = var22[var11];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.getAdTrafficMetadataSealed;
                    var13 = var5.bind(var6)(var10, var12);
                    var6 = _closure1_slot18;
                    var5 = {};
                    var5['questId'] = var12;
                    var12 = _closure1_slot9;
                    var12 = var12.QUEST_CONTENT_CLICKED;
                    var5['event'] = var12;
                    var12 = {};
                    var14 = _closure1_slot17;
                    var25 = var14.bind(var4)(var10, var23, var20);
                    var26 = var12;
                    var14 = copyDataProperties(var26, var25);
                    var20 = _closure1_slot1;
                    var14 = 18;
                    var14 = var22[var14];
                    var14 = var20.bind(var4)(var14);
                    var25 = var14.bind(var4)();
                    var26 = var12;
                    var14 = copyDataProperties(var26, var25);
                    var14 = 'cta_name';
                    var12[var14] = var18;
                    var14 = null;
                    var18 = var14 != var21;
                    var20 = null;
                    if(!var18) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var18 = _closure1_slot14;
                    var20 = var18.bind(var4)(var21);
case 48:
                    var18 = 'quest_status';
                    var12[var18] = var20;
                    var18 = 'impression_id';
                    var12[var18] = var19;
                    var18 = var14 != var3;
                    var19 = null;
                    if(!var18) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var18 = 19;
                    var18 = var21[var18];
                    var20 = var20.bind(var4)(var18);
                    var18 = var20.isIOS;
                    var18 = var18.bind(var20)();
                    var19 = null;
                    if(!var18) { _fun0006_ip = 50; continue _fun0006 }
case 52:
                    var19 = var3.advertisingId;
case 50:
                    var18 = 'apple_advertising_id';
                    var12[var18] = var19;
                    var18 = var14 != var3;
                    var19 = null;
                    if(!var18) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var18 = 19;
                    var18 = var21[var18];
                    var20 = var20.bind(var4)(var18);
                    var18 = var20.isAndroid;
                    var18 = var18.bind(var20)();
                    var19 = null;
                    if(!var18) { _fun0006_ip = 53; continue _fun0006 }
case 55:
                    var19 = var3.advertisingId;
case 53:
                    var18 = 'android_advertising_id';
                    var12[var18] = var19;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var18 = 20;
                    var18 = var20[var18];
                    var19 = var19.bind(var4)(var18);
                    var18 = var19.v4;
                    var19 = var18.bind(var19)();
                    var18 = 'click_id';
                    var12[var18] = var19;
                    var19 = var14 != var17;
                    var18 = null;
                    if(!var19) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var18 = var17;
case 56:
                    var17 = 'metadata_raw';
                    var12[var17] = var18;
                    var18 = var14 != var16;
                    var17 = null;
                    if(!var18) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var17 = var16;
case 58:
                    var16 = 'metadata_sealed';
                    var12[var16] = var17;
                    var17 = var14 != var15;
                    var16 = null;
                    if(!var17) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var16 = var15;
case 60:
                    var15 = 'traffic_metadata_raw';
                    var12[var15] = var16;
                    var15 = var14 != var13;
                    var14 = null;
                    if(!var15) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                    var14 = var13;
case 62:
                    var13 = 'traffic_metadata_sealed';
                    var12[var13] = var14;
                    var5['properties'] = var12;
                    var5['trackGuildAndChannelMetadata'] = var9;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var11];
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.isBillableQuestContent;
                    var8 = var8.bind(var9)(var10);
                    var5['shouldExtendSession'] = var8;
                    var5['sourceQuestContent'] = var7;
                    var5 = var6.bind(var4)(var5);
                    return var4;
case 46:
                    return var3;
case 42:
                    return var2;
case 38:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var5 = function useTrackQuestEventWithImpression() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 21;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useQuestImpression;
        var5 = var3.bind(var4)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var3 = _closure1_slot18;
                var2 = {};
                var9 = var2;
                var8 = var1;
                var4 = copyDataProperties(var9, var8);
                var5 = {};
                var8 = var1.properties;
                var9 = var5;
                var1 = copyDataProperties(var9, var8);
                var6 = _closure2_slot0;
                var1 = null;
                var7 = var1 == var6;
                var1 = undefined;
                var6 = undefined;
                if(var7) { _fun0007_ip = 11; continue _fun0007 }
case 64:
                var7 = _closure2_slot0;
                var4 = var7.getId;
                var6 = var4.bind(var7)();
case 11:
                var4 = 'impression_id';
                var5[var4] = var6;
                var4 = 'properties';
                var2[var4] = var5;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var5;
    var2 = function trackQuestEmbedFallbackViewed(arg1, arg2) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 15;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot9;
        var3 = var2.QUEST_EMBED_FALLBACK_VIEWED;
        var2 = {};
        var6 = arg1;
        var2['quest_id'] = var6;
        var6 = arg2;
        var2['reason'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot21 = var2;
    var6 = global;
    var16 = var6.Object;
    var15 = var16.defineProperty;
    var11 = {};
    var1 = true;
    var11['value'] = var1;
    var1 = '__esModule';
    var1 = var15.bind(var16)(var3, var1, var11);
    var1 = 0;
    var11 = var13[var1];
    var1 = undefined;
    var11 = var14.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var11 = 1;
    var15 = var13[var11];
    var11 = metroImportAll;
    var11 = var11.bind(var1)(var15);
    var _closure1_slot4 = var11;
    var11 = 2;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot5 = var11;
    var11 = 3;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var11 = 4;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot7 = var11;
    var11 = 5;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.QuestsExperimentLocations;
    var _closure1_slot8 = var11;
    var11 = 6;
    var11 = var13[var11];
    var14 = var12.bind(var1)(var11);
    var11 = var14.AnalyticEvents;
    var _closure1_slot9 = var11;
    var14 = var14.Layers;
    var _closure1_slot10 = var14;
    var16 = var6.Object;
    var15 = var16.keys;
    var14 = 7;
    var14 = var13[var14];
    var14 = var12.bind(var1)(var14);
    var14 = var14.QuestContent;
    var14 = var15.bind(var16)(var14);
    var _closure1_slot11 = var14;
    var14 = var6.Set;
    var15 = var11.QUEST_CONTENT_VIEWED;
    var6 = new Array(2);
    var6[0] = var15;
    var11 = var11.QUEST_CONTENT_CLICKED;
    var6[1] = var11;
    var11 = var14.prototype;
    var11 = Object.create(var11, {constructor: {value: var14}});
    var20 = var11;
    var19 = var6;
    var6 = new var20[var14](var19, var18);
    var6 = var6 instanceof Object ? var6 : var11;
    var _closure1_slot12 = var6;
    var6 = {};
    var11 = 'LEARN_MORE';
    var6['LEARN_MORE'] = var11;
    var11 = 'SHOW_REWARD';
    var6['SHOW_REWARD'] = var11;
    var11 = 'CLAIM_REWARD';
    var6['CLAIM_REWARD'] = var11;
    var11 = 'GET_REWARD_CODE';
    var6['GET_REWARD_CODE'] = var11;
    var11 = 'COPY_REWARD_CODE';
    var6['COPY_REWARD_CODE'] = var11;
    var11 = 'ACCEPT_QUEST';
    var6['ACCEPT_QUEST'] = var11;
    var11 = 'COPY_QUEST_URL';
    var6['COPY_QUEST_URL'] = var11;
    var11 = 'MOBILE_SHARESHEET';
    var6['MOBILE_SHARESHEET'] = var11;
    var11 = 'TRACK_PROGRESS';
    var6['TRACK_PROGRESS'] = var11;
    var11 = 'CONNECT_CONSOLE';
    var6['CONNECT_CONSOLE'] = var11;
    var11 = 'CONNECT_CONSOLE_LINK';
    var6['CONNECT_CONSOLE_LINK'] = var11;
    var11 = 'VIEW_CONSOLE_CONNECTION';
    var6['VIEW_CONSOLE_CONNECTIONS'] = var11;
    var11 = 'VIEW_CONSOLE_CONNECTIONS_LINK';
    var6['VIEW_CONSOLE_CONNECTIONS_LINK'] = var11;
    var11 = 'VIEW_REQUIREMENTS';
    var6['VIEW_REQUIREMENTS'] = var11;
    var11 = 'SELECT_CONSOLE_PLATFORM';
    var6['SELECT_CONSOLE_PLATFORM'] = var11;
    var11 = 'SELECT_DESKTOP_PLATFORM';
    var6['SELECT_DESKTOP_PLATFORM'] = var11;
    var11 = 'DESELECT_PLATFORM';
    var6['DESELECT_PLATFORM'] = var11;
    var11 = 'DEFIBRILLATOR';
    var6['DEFIBRILLATOR'] = var11;
    var11 = 'DEFIBRILLATOR_RECONNECT_CONSOLE';
    var6['DEFIBRILLATOR_RECONNECT_CONSOLE'] = var11;
    var11 = 'OPEN_DISCLOSURE';
    var6['OPEN_DISCLOSURE'] = var11;
    var11 = 'WATCH_STREAM';
    var6['WATCH_STREAM'] = var11;
    var11 = 'WATCH_STREAM_CONFIRM';
    var6['WATCH_STREAM_CONFIRM'] = var11;
    var11 = 'REWARD_LEARN_MORE';
    var6['REWARD_LEARN_MORE'] = var11;
    var11 = 'OPEN_GAME_LINK';
    var6['OPEN_GAME_LINK'] = var11;
    var11 = 'OPEN_CONTEXT_MENU';
    var6['OPEN_CONTEXT_MENU'] = var11;
    var11 = 'OPEN_QUEST_HOME';
    var6['OPEN_QUEST_HOME'] = var11;
    var11 = 'QUEST_BAR.COPY_LINK';
    var6['QUEST_BAR_COPY_LINK'] = var11;
    var11 = 'CONTEXT_MENU.COPY_LINK';
    var6['CONTEXT_MENU_COPY_LINK'] = var11;
    var11 = 'REWARD_MODAL.COPY_LINK';
    var6['REWARD_MODAL_COPY_LINK'] = var11;
    var11 = 'CONTEXT_MENU.HIDE_CONTENT';
    var6['CONTEXT_MENU_HIDE_CONTENT'] = var11;
    var11 = 'CONTEXT_MENU.OPEN_GAME_LINK';
    var6['CONTEXT_MENU_OPEN_GAME_LINK'] = var11;
    var11 = 'CONTEXT_MENU.OPEN_DISCLOSURE';
    var6['CONTEXT_MENU_OPEN_DISCLOSURE'] = var11;
    var11 = 'CONTEXT_MENU.LEARN_MORE';
    var6['CONTEXT_MENU_LEARN_MORE'] = var11;
    var11 = 'HOW_TO_HELP_ARTICLE_XBOX';
    var6['HOW_TO_HELP_ARTICLE_XBOX'] = var11;
    var11 = 'HOW_TO_HELP_ARTICLE_PLAYSTATION';
    var6['HOW_TO_HELP_ARTICLE_PLAYSTATION'] = var11;
    var11 = 'VIEW_QUESTS';
    var6['VIEW_QUESTS'] = var11;
    var11 = 'EXPAND';
    var6['EXPAND'] = var11;
    var11 = 'COLLAPSE';
    var6['COLLAPSE'] = var11;
    var11 = 'START_QUEST';
    var6['START_QUEST'] = var11;
    var11 = 'TRANSCRIPT_ENABLE';
    var6['TRANSCRIPT_ENABLE'] = var11;
    var11 = 'TRANSCRIPT_DISABLE';
    var6['TRANSCRIPT_DISABLE'] = var11;
    var11 = 'CLOSED_CAPTIONING_ENABLE';
    var6['CLOSED_CAPTIONING_ENABLE'] = var11;
    var11 = 'CLOSED_CAPTIONING_DISABLE';
    var6['CLOSED_CAPTIONING_DISABLE'] = var11;
    var11 = 'SEEK_BACKWARD';
    var6['SEEK_BACKWARD'] = var11;
    var11 = 'SEEK_FORWARD';
    var6['SEEK_FORWARD'] = var11;
    var11 = 'WATCH_VIDEO';
    var6['WATCH_VIDEO'] = var11;
    var11 = 'QUEST_BAR_VIDEO_QUEST_PREVIEW';
    var6['QUEST_BAR_VIDEO_QUEST_PREVIEW'] = var11;
    var11 = 'QUEST_HOME_TILE_HEADER_WATCH_VIDEO';
    var6['QUEST_HOME_TILE_HEADER_WATCH_VIDEO'] = var11;
    var11 = 'REDEEM_REWARD';
    var6['REDEEM_REWARD'] = var11;
    var11 = 'VISIT_REDEMPTION_LINK';
    var6['VISIT_REDEMPTION_LINK'] = var11;
    var11 = 'SPONSORED_QUEST_SHEET';
    var6['SPONSORED_QUEST_SHEET'] = var11;
    var11 = 'GAME_PROFILE_OPEN';
    var6['GAME_PROFILE_OPEN'] = var11;
    var11 = 'GAME_STORE_OPEN_GAME_LINK';
    var6['GAME_STORE_OPEN_GAME_LINK'] = var11;
    var11 = 'MOBILE_ORBS_ONBOARDING_DC';
    var6['MOBILE_ORBS_ONBOARDING_DC'] = var11;
    var11 = 22;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/quests/QuestAnalytics.tsx';
    var11 = var12.bind(var13)(var11);
    var3['getQuestContentName'] = var10;
    var3['getQuestStatus'] = var9;
    var3['getContentProperties'] = var8;
    var3['trackQuestEvent'] = var7;
    var3['QuestContentCTA'] = var6;
    var6 = function trackQuestContentClicked() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['trackQuestContentClicked'] = var6;
    var6 = function trackQuestBarOrDockModeChange(arg1) {
        var1 = arg1;
        var3 = var1.questContent;
        var4 = var1.sourceQuestContent;
        var9 = var1.questId;
        var7 = var1.mode;
        var6 = var1.prevMode;
        var2 = _closure1_slot17;
        var1 = undefined;
        var8 = var2.bind(var1)(var3);
        var3 = _closure1_slot18;
        var2 = {};
        var2['questId'] = var9;
        var5 = _closure1_slot9;
        var5 = var5.QUEST_BAR_MODE_CHANGED;
        var2['event'] = var5;
        var5 = {};
        var9 = var8.content_id;
        var5['content_id'] = var9;
        var8 = var8.content_name;
        var5['content_name'] = var8;
        var5['mode'] = var7;
        var5['previous_mode'] = var6;
        var2['properties'] = var5;
        var2['sourceQuestContent'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['trackQuestBarOrDockModeChange'] = var6;
    var3['useTrackQuestEventWithImpression'] = var5;
    var5 = function useTrackQuestContentClickedWithImpression() {
        var4 = _closure1_slot20;
        var3 = undefined;
        var5 = var4.bind(var3)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var9 = var3.questId;
                var _closure3_slot0 = var9;
                var6 = var3.questContent;
                var _closure3_slot1 = var6;
                var1 = var3.questContentCTA;
                var _closure3_slot2 = var1;
                var1 = var3.questContentPosition;
                var _closure3_slot3 = var1;
                var1 = var3.questContentRowIndex;
                var _closure3_slot4 = var1;
                var4 = var3.trackGuildAndChannelMetadata;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                var4 = false;
case 65:
                var _closure3_slot5 = var4;
                var3 = var3.sourceQuestContent;
                var _closure3_slot6 = var3;
                var _closure3_slot7 = var1;
                var _closure3_slot8 = var1;
                var _closure3_slot9 = var1;
                var _closure3_slot10 = var1;
                var _closure3_slot11 = var1;
                var5 = _closure1_slot7;
                var4 = var5.getQuest;
                var4 = var4.bind(var5)(var9);
                _closure3_slot7 = var4;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 13;
                var8 = var7[var4];
                var10 = var5.bind(var1)(var8);
                var8 = var10.getAdMetadataRaw;
                var8 = var8.bind(var10)(var6);
                _closure3_slot8 = var8;
                var8 = var7[var4];
                var10 = var5.bind(var1)(var8);
                var8 = var10.getAdMetadataSealed;
                var8 = var8.bind(var10)(var6);
                _closure3_slot9 = var8;
                var8 = var7[var4];
                var10 = var5.bind(var1)(var8);
                var8 = var10.getAdTrafficMetadataRaw;
                var8 = var8.bind(var10)(var6, var9);
                _closure3_slot10 = var8;
                var4 = var7[var4];
                var8 = var5.bind(var1)(var4);
                var4 = var8.getAdTrafficMetadataSealed;
                var4 = var4.bind(var8)(var6, var9);
                _closure3_slot11 = var4;
                var4 = 17;
                var4 = var7[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.getAdUser;
                var3 = _closure1_slot13;
                var3 = var3.bind(var1)(var6);
                var4 = var4.bind(var5)(var3);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var7 = arg1;
                        var3 = _closure2_slot0;
                        var2 = {};
                        var1 = _closure3_slot0;
                        var2['questId'] = var1;
                        var1 = _closure1_slot9;
                        var1 = var1.QUEST_CONTENT_CLICKED;
                        var2['event'] = var1;
                        var6 = {};
                        var11 = _closure1_slot17;
                        var10 = _closure3_slot1;
                        var9 = _closure3_slot3;
                        var8 = _closure3_slot4;
                        var1 = undefined;
                        var14 = var11.bind(var1)(var10, var9, var8);
                        var15 = var6;
                        var8 = copyDataProperties(var15, var14);
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var8 = 18;
                        var8 = var10[var8];
                        var8 = var9.bind(var1)(var8);
                        var14 = var8.bind(var1)();
                        var15 = var6;
                        var8 = copyDataProperties(var15, var14);
                        var9 = _closure3_slot2;
                        var8 = 'cta_name';
                        var6[var8] = var9;
                        var9 = _closure3_slot7;
                        var8 = null;
                        var9 = var8 != var9;
                        var10 = null;
                        if(!var9) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                        var11 = _closure1_slot14;
                        var9 = _closure3_slot7;
                        var10 = var11.bind(var1)(var9);
case 67:
                        var9 = 'quest_status';
                        var6[var9] = var10;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 20;
                        var9 = var11[var9];
                        var10 = var10.bind(var1)(var9);
                        var9 = var10.v4;
                        var10 = var9.bind(var10)();
                        var9 = 'click_id';
                        var6[var9] = var10;
                        var9 = var8 != var7;
                        var10 = null;
                        if(!var9) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var9 = 19;
                        var9 = var12[var9];
                        var11 = var11.bind(var1)(var9);
                        var9 = var11.isIOS;
                        var9 = var9.bind(var11)();
                        var10 = null;
                        if(!var9) { _fun0009_ip = 69; continue _fun0009 }
case 71:
                        var10 = var7.advertisingId;
case 69:
                        var9 = 'apple_advertising_id';
                        var6[var9] = var10;
                        var10 = var8 != var7;
                        var9 = null;
                        if(!var10) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 19;
                        var10 = var12[var10];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.isAndroid;
                        var10 = var10.bind(var11)();
                        var9 = null;
                        if(!var10) { _fun0009_ip = 72; continue _fun0009 }
case 32:
                        var9 = var7.advertisingId;
case 72:
                        var7 = 'android_advertising_id';
                        var6[var7] = var9;
                        var7 = _closure3_slot8;
                        var7 = var8 != var7;
                        var9 = null;
                        if(!var7) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                        var9 = _closure3_slot8;
case 74:
                        var7 = 'metadata_raw';
                        var6[var7] = var9;
                        var7 = _closure3_slot9;
                        var7 = var8 != var7;
                        var9 = null;
                        if(!var7) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                        var9 = _closure3_slot9;
case 76:
                        var7 = 'metadata_sealed';
                        var6[var7] = var9;
                        var7 = _closure3_slot10;
                        var7 = var8 != var7;
                        var9 = null;
                        if(!var7) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                        var9 = _closure3_slot10;
case 78:
                        var7 = 'traffic_metadata_raw';
                        var6[var7] = var9;
                        var7 = _closure3_slot11;
                        var7 = var8 != var7;
                        var8 = null;
                        if(!var7) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                        var8 = _closure3_slot11;
case 80:
                        var7 = 'traffic_metadata_sealed';
                        var6[var7] = var8;
                        var2['properties'] = var6;
                        var6 = _closure3_slot5;
                        var2['trackGuildAndChannelMetadata'] = var6;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 13;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.isBillableQuestContent;
                        var5 = _closure3_slot1;
                        var5 = var6.bind(var7)(var5);
                        var2['shouldExtendSession'] = var5;
                        var4 = _closure3_slot6;
                        var2['sourceQuestContent'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useTrackQuestContentClickedWithImpression'] = var5;
    var4 = function useQuestsEmbedFallbackAnalytics(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure1_slot21;
            var3 = _closure2_slot1;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useQuestsEmbedFallbackAnalytics'] = var4;
    var3['trackQuestEmbedFallbackViewed'] = var2;
    return var1;
})();