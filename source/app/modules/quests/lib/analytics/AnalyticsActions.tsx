// app/modules/quests/lib/analytics/AnalyticsActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function assignBillingSessionId(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
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
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var1 = var7[var1];
            var6 = var6.bind(var4)(var1);
            var1 = var6.getActiveSessionUnsafe;
            var7 = var1.bind(var6)();
            var1 = null;
            var8 = var1 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var7.uuid;
case 4:
            var7 = var1 != var6;
            var1 = null;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var6;
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var5 = var5.use_ad_session_id;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getActiveSessionUnsafe;
            var5 = var3.bind(var5)();
            var3 = null;
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = var5.uuid;
case 11:
            var5 = var3 != var4;
            var3 = null;
            if(!var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var4;
case 13:
            var2 = var3;
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function getCommonProperties(arg1, arg2, arg3) {
        var5 = arg2;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 8;
        var1 = var6[var1];
        var3 = undefined;
        var8 = var4.bind(var3)(var1);
        var7 = var8.getOrRefreshAdSession;
        var1 = arg3;
        var1 = var7.bind(var8)(var1);
        var9 = var1.uuid;
        var1 = {};
        var1['client_ad_session_id'] = var9;
        var8 = _closure1_slot11;
        var2 = 9;
        var7 = var6[var2];
        var10 = var4.bind(var3)(var7);
        var7 = var10.isBillableQuestContent;
        var7 = var7.bind(var10)(var5);
        var7 = var8.bind(var3)(var9, var7);
        var1['billing_session_id'] = var7;
        var2 = var6[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.getAdDecisionData;
        var2 = arg1;
        var11 = var3.bind(var4)(var2, var5);
        var12 = var1;
        var2 = copyDataProperties(var12, var11);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function getCommonQuestProperties(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['quest_id'] = var3;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 10;
            var4 = var7[var4];
            var6 = undefined;
            var9 = var5.bind(var6)(var4);
            var8 = var9.getQuestType;
            var4 = var2.config;
            var4 = var8.bind(var9)(var4);
            var1['quest_type'] = var4;
            var4 = var2.config;
            var4 = var4.application;
            var4 = var4.id;
            var1['game_id'] = var4;
            var4 = var2.config;
            var4 = var4.application;
            var4 = var4.name;
            var1['game_name'] = var4;
            var4 = 11;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.getAllApplicationIds;
            var4 = var4.bind(var5)(var2);
            var5 = null;
            if(!(var5 == var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = new Array(0);
case 15:
            var1['application_ids'] = var4;
            var5 = _closure1_slot12;
            var4 = var2.id;
            var3 = arg2;
            var2 = arg3;
            var11 = var5.bind(var6)(var4, var3, var2);
            var12 = var1;
            var2 = copyDataProperties(var12, var11);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getCommonAdContentProperties(arg1, arg2, arg3, arg4) {
        var6 = arg1;
        var1 = {};
        var1['ad_content_id'] = var6;
        var2 = arg2;
        var1['creative_type'] = var2;
        var5 = _closure1_slot12;
        var4 = undefined;
        var3 = arg3;
        var2 = arg4;
        var8 = var5.bind(var4)(var6, var3, var2);
        var9 = var1;
        var2 = copyDataProperties(var9, var8);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function trackEvent(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = arguments[2];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = false;
case 17:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var3 = var8[var3];
            var8 = var4.bind(var1)(var3);
            var4 = var8.isQuestPreviewToolEnabled;
            var3 = {};
            var9 = _closure1_slot7;
            var9 = var9.QUEST_PREVIEW_TOOL;
            var3['location'] = var9;
            var3 = var4.bind(var8)(var3);
            if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var4 = _closure1_slot5;
            var3 = var4.getLayers;
            var8 = var3.bind(var4)();
            var4 = var8.includes;
            var3 = _closure1_slot9;
            var3 = var3.USER_SETTINGS;
            var3 = var4.bind(var8)(var3);
            if(var3) { _fun0003_ip = 21; continue _fun0003 }
case 19:
            var3 = _closure1_slot4;
            var3 = var3.isLoggingAnalyticsEvents;
            var3 = arguments[3];
            if(var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var4 = _closure1_slot10;
            var3 = var4.has;
            var4 = var3.bind(var4)(var6);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var2 = 14;
            var2 = var7[var2];
            var9 = var3.bind(var1)(var2);
            var8 = var9.track;
            var2 = {};
            var2['flush'] = var4;
            var2 = var8.bind(var9)(var6, var5, var2);
            _fun0003_ip = 21; continue _fun0003;
case 23:
            var2 = 13;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackWithMetadata;
            var2 = var2.bind(var3)(var6, var5, var4);
            return var2;
case 21:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var4 = function trackQuestEvent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = var2.questId;
            var6 = var2.event;
            var7 = var2.properties;
            var5 = var2.trackGuildAndChannelMetadata;
            var10 = var2.shouldExtendSession;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var10 = false;
case 25:
            var9 = var2.sourceQuestContent;
            var2 = _closure1_slot6;
            var3 = var2.quests;
            var2 = var3.get;
            var2 = var2.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var2)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var4 = _closure1_slot15;
            var3 = {};
            var8 = _closure1_slot13;
            var13 = var8.bind(var1)(var2, var9, var10);
            var14 = var3;
            var8 = copyDataProperties(var14, var13);
            var14 = var3;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var11 = var2.preview;
            var15 = undefined;
            var14 = var6;
            var13 = var3;
            var12 = var5;
            var2 = var15[var4](var14, var13, var12, var11, var10);
case 27:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var1 = function _trackQuestContentClicked() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var12 = var2.questId;
                    var10 = var2.questContent;
                    var18 = var2.questContentCTA;
                    var25 = var2.questContentPosition;
                    var24 = var2.questContentRowIndex;
                    var19 = var2.impressionId;
                    var9 = var2.trackGuildAndChannelMetadata;
                    var7 = var2.sourceQuestContent;
                    var4 = undefined;
                    SaveGenerator(address=67);
case 31:
                    return var4;
case 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 33; continue _fun0005 }
case 28:
                    var5 = _closure1_slot6;
                    var3 = var5.getQuest;
                    var22 = var3.bind(var5)(var12);
                    var11 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = 15;
                    var5 = var3[var5];
                    var6 = var11.bind(var4)(var5);
                    var5 = var6.getAdUser;
                    var23 = 16;
                    var3 = var3[var23];
                    var11 = var11.bind(var4)(var3);
                    var3 = var11.getQuestContentName;
                    var3 = var3.bind(var11)(var10);
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=152);
case 24:
                    return var3;
case 34:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var11 = 9;
                    var5 = var21[var11];
                    var6 = var20.bind(var4)(var5);
                    var5 = var6.getAdMetadataRaw;
                    var17 = var5.bind(var6)(var10);
                    var5 = var21[var11];
                    var6 = var20.bind(var4)(var5);
                    var5 = var6.getAdMetadataSealed;
                    var16 = var5.bind(var6)(var10);
                    var5 = var21[var11];
                    var6 = var20.bind(var4)(var5);
                    var5 = var6.getAdTrafficMetadataRaw;
                    var15 = var5.bind(var6)(var10, var12);
                    var5 = var21[var11];
                    var6 = var20.bind(var4)(var5);
                    var5 = var6.getAdTrafficMetadataSealed;
                    var13 = var5.bind(var6)(var10, var12);
                    var6 = _closure1_slot16;
                    var5 = {};
                    var5['questId'] = var12;
                    var12 = _closure1_slot8;
                    var12 = var12.QUEST_CONTENT_CLICKED;
                    var5['event'] = var12;
                    var12 = {};
                    var14 = var21[var23];
                    var20 = var20.bind(var4)(var14);
                    var14 = var20.getContentProperties;
                    var27 = var14.bind(var20)(var10, var25, var24);
                    var28 = var12;
                    var14 = copyDataProperties(var28, var27);
                    var20 = _closure1_slot1;
                    var14 = 17;
                    var14 = var21[var14];
                    var14 = var20.bind(var4)(var14);
                    var27 = var14.bind(var4)();
                    var28 = var12;
                    var14 = copyDataProperties(var28, var27);
                    var14 = 'cta_name';
                    var12[var14] = var18;
                    var14 = null;
                    var18 = var14 != var22;
                    var20 = null;
                    if(!var18) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var21 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var18 = var18[var23];
                    var21 = var21.bind(var4)(var18);
                    var18 = var21.getQuestStatus;
                    var20 = var18.bind(var21)(var22);
case 37:
                    var18 = 'quest_status';
                    var12[var18] = var20;
                    var18 = 'impression_id';
                    var12[var18] = var19;
                    var18 = var14 != var3;
                    var19 = null;
                    if(!var18) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var18 = 18;
                    var18 = var21[var18];
                    var20 = var20.bind(var4)(var18);
                    var18 = var20.isIOS;
                    var18 = var18.bind(var20)();
                    var19 = null;
                    if(!var18) { _fun0005_ip = 39; continue _fun0005 }
case 41:
                    var19 = var3.advertisingId;
case 39:
                    var18 = 'apple_advertising_id';
                    var12[var18] = var19;
                    var18 = var14 != var3;
                    var19 = null;
                    if(!var18) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var18 = 18;
                    var18 = var21[var18];
                    var20 = var20.bind(var4)(var18);
                    var18 = var20.isAndroid;
                    var18 = var18.bind(var20)();
                    var19 = null;
                    if(!var18) { _fun0005_ip = 42; continue _fun0005 }
case 44:
                    var19 = var3.advertisingId;
case 42:
                    var18 = 'android_advertising_id';
                    var12[var18] = var19;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var18 = 19;
                    var18 = var20[var18];
                    var19 = var19.bind(var4)(var18);
                    var18 = var19.v4;
                    var19 = var18.bind(var19)();
                    var18 = 'click_id';
                    var12[var18] = var19;
                    var19 = var14 != var17;
                    var18 = null;
                    if(!var19) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var18 = var17;
case 45:
                    var17 = 'metadata_raw';
                    var12[var17] = var18;
                    var18 = var14 != var16;
                    var17 = null;
                    if(!var18) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var17 = var16;
case 47:
                    var16 = 'metadata_sealed';
                    var12[var16] = var17;
                    var17 = var14 != var15;
                    var16 = null;
                    if(!var17) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var16 = var15;
case 49:
                    var15 = 'traffic_metadata_raw';
                    var12[var15] = var16;
                    var15 = var14 != var13;
                    var14 = null;
                    if(!var15) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var14 = var13;
case 51:
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
case 35:
                    return var3;
case 33:
                    return var2;
case 29:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var7[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.QuestsExperimentLocations;
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var7[var8];
    var9 = var6.bind(var1)(var8);
    var8 = var9.AnalyticEvents;
    var _closure1_slot8 = var8;
    var9 = var9.Layers;
    var _closure1_slot9 = var9;
    var9 = var5.Set;
    var10 = var8.QUEST_CONTENT_VIEWED;
    var5 = new Array(2);
    var5[0] = var10;
    var8 = var8.QUEST_CONTENT_CLICKED;
    var5[1] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var15 = var8;
    var14 = var5;
    var5 = new var15[var9](var14, var13);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot10 = var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/lib/analytics/AnalyticsActions.tsx';
    var5 = var6.bind(var7)(var5);
    var3['trackQuestEvent'] = var4;
    var4 = function trackAdContentEvent(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var11 = var3.adContentId;
            var10 = var3.adCreativeType;
            var6 = var3.event;
            var2 = var3.properties;
            var5 = var3.trackGuildAndChannelMetadata;
            var9 = var3.shouldExtendSession;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var9 = false;
case 53:
            var13 = var3.sourceQuestContent;
            var4 = _closure1_slot15;
            var3 = {};
            var7 = _closure1_slot14;
            var16 = undefined;
            var15 = var11;
            var14 = var10;
            var12 = var9;
            var14 = var16[var7](var15, var14, var13, var12, var11);
            var15 = var3;
            var7 = copyDataProperties(var15, var14);
            var15 = var3;
            var14 = var2;
            var2 = copyDataProperties(var15, var14);
            var12 = false;
            var16 = undefined;
            var15 = var6;
            var14 = var3;
            var13 = var5;
            var2 = var16[var4](var15, var14, var13, var12, var11);
            return var1;
        }
    };
    var3['trackAdContentEvent'] = var4;
    var4 = function trackQuestContentClicked() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['trackQuestContentClicked'] = var4;
    var4 = function trackQuestBarOrDockModeChange(arg1) {
        var1 = arg1;
        var8 = var1.questContent;
        var4 = var1.sourceQuestContent;
        var9 = var1.questId;
        var7 = var1.mode;
        var6 = var1.prevMode;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getContentProperties;
        var8 = var2.bind(var3)(var8);
        var3 = _closure1_slot16;
        var2 = {};
        var2['questId'] = var9;
        var5 = _closure1_slot8;
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
    var3['trackQuestBarOrDockModeChange'] = var4;
    var2 = function trackQuestEmbedFallbackViewed(arg1, arg2) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 13;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot8;
        var3 = var2.QUEST_EMBED_FALLBACK_VIEWED;
        var2 = {};
        var6 = arg1;
        var2['quest_id'] = var6;
        var6 = arg2;
        var2['reason'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackQuestEmbedFallbackViewed'] = var2;
    return var1;
})();