// app/modules/quests/lib/analytics/AnalyticsActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
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
    var _closure1_slot10 = var1;
    var1 = function getCommonProperties(arg1, arg2, arg3, arg4) {
        var5 = arg1;
        var4 = arg2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 8;
        var1 = var7[var1];
        var3 = undefined;
        var9 = var6.bind(var3)(var1);
        var8 = var9.getOrRefreshAdSession;
        var1 = arg4;
        var1 = var8.bind(var9)(var1);
        var10 = var1.uuid;
        var1 = {};
        var1['client_ad_session_id'] = var10;
        var9 = _closure1_slot10;
        var2 = 9;
        var8 = var7[var2];
        var11 = var6.bind(var3)(var8);
        var8 = var11.isBillableQuestContent;
        var8 = var8.bind(var11)(var4);
        var8 = var9.bind(var3)(var10, var8);
        var1['billing_session_id'] = var8;
        var1['ad_content_id'] = var5;
        var8 = arg3;
        var1['creative_type'] = var8;
        var2 = var7[var2];
        var3 = var6.bind(var3)(var2);
        var2 = var3.getAdDecisionData;
        var12 = var2.bind(var3)(var5, var4);
        var13 = var1;
        var2 = copyDataProperties(var13, var12);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function getCommonQuestProperties(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.id;
            var1['quest_id'] = var2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 10;
            var4 = var6[var4];
            var7 = undefined;
            var9 = var5.bind(var7)(var4);
            var8 = var9.getQuestType;
            var4 = var3.config;
            var4 = var8.bind(var9)(var4);
            var1['quest_type'] = var4;
            var4 = var3.config;
            var4 = var4.application;
            var4 = var4.id;
            var1['game_id'] = var4;
            var4 = var3.config;
            var4 = var4.application;
            var4 = var4.name;
            var1['game_name'] = var4;
            var4 = 11;
            var4 = var6[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.getAllApplicationIds;
            var4 = var4.bind(var5)(var3);
            var5 = null;
            if(!(var5 == var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = new Array(0);
case 15:
            var1['application_ids'] = var4;
            var6 = _closure1_slot11;
            var5 = var3.id;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.AdCreativeType;
            var11 = var2.QUEST;
            var12 = arg2;
            var10 = arg3;
            var14 = undefined;
            var13 = var5;
            var12 = var14[var6](var13, var12, var11, var10, var9);
            var13 = var1;
            var2 = copyDataProperties(var13, var12);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function getCommonAdContentProperties(arg1, arg2, arg3, arg4) {
        var1 = {};
        var7 = _closure1_slot11;
        var12 = undefined;
        var11 = arg1;
        var10 = arg3;
        var9 = arg2;
        var8 = arg4;
        var10 = var12[var7](var11, var10, var9, var8, var7);
        var11 = var1;
        var2 = copyDataProperties(var11, var10);
        return var1;
    };
    var _closure1_slot13 = var1;
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
            var3 = 13;
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
            var3 = _closure1_slot4;
            var3 = var3.displayTools;
            if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 21:
            var3 = _closure1_slot4;
            var4 = var3.lastOpenTabId;
            var3 = 'quest_preview';
            if(!(var3 !== var4)) { _fun0003_ip = 22; continue _fun0003 }
case 19:
            var3 = _closure1_slot5;
            var3 = var3.isLoggingAnalyticsEvents;
            var3 = arguments[3];
            if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 7:
            var4 = _closure1_slot9;
            var3 = var4.has;
            var4 = var3.bind(var4)(var6);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var2 = 15;
            var2 = var7[var2];
            var9 = var3.bind(var1)(var2);
            var8 = var9.track;
            var2 = {};
            var2['flush'] = var4;
            var2 = var8.bind(var9)(var6, var5, var2);
            _fun0003_ip = 22; continue _fun0003;
case 23:
            var2 = 14;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackWithMetadata;
            var2 = var2.bind(var3)(var6, var5, var4);
            return var2;
case 22:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var5 = function trackQuestEvent(arg1) {
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
            var4 = _closure1_slot14;
            var3 = {};
            var8 = _closure1_slot12;
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
    var _closure1_slot15 = var5;
    var4 = function trackAdContentEvent(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var11 = var3.adContentId;
            var10 = var3.adCreativeType;
            var6 = var3.event;
            var2 = var3.properties;
            var5 = var3.trackGuildAndChannelMetadata;
            var9 = var3.shouldExtendSession;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var9 = false;
case 29:
            var13 = var3.sourceQuestContent;
            var4 = _closure1_slot14;
            var3 = {};
            var7 = _closure1_slot13;
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
    var _closure1_slot16 = var4;
    var1 = function _getAdUserMetadata() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var3 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 17;
                    var2 = var10[var2];
                    var7 = undefined;
                    var8 = var9.bind(var7)(var2);
                    var5 = var8.getAdUser;
                    var2 = 16;
                    var2 = var10[var2];
                    var9 = var9.bind(var7)(var2);
                    var2 = var9.getQuestContentName;
                    var2 = var2.bind(var9)(var6);
                    var2 = var5.bind(var8)(var2);
                    SaveGenerator(address=78);
case 28:
                    return var2;
case 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var3['adUser'] = var2;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 9;
                    var9 = var8[var4];
                    var10 = var5.bind(var7)(var9);
                    var9 = var10.getAdMetadataRaw;
                    var9 = var9.bind(var10)(var6);
                    var3['adMetadataRaw'] = var9;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.getAdMetadataSealed;
                    var4 = var4.bind(var5)(var6);
                    var3['adMetadataSealed'] = var4;
                    return var3;
case 34:
                    return var2;
case 31:
                    return var1;
                }
            };
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
    var1 = function getCommonClickEventProperties() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _getCommonClickEventProperties() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 36; continue _fun0007 }
case 32:
                    var17 = var2.questContent;
                    var16 = var2.questContentPosition;
                    var15 = var2.questContentRowIndex;
                    var12 = var2.questContentCTA;
                    var11 = var2.impressionId;
                    var10 = undefined;
                    SaveGenerator(address=49);
case 29:
                    return var10;
case 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var3 = function getAdUserMetadata() {
                        var1 = undefined;
                        var4 = _closure1_slot17;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var10)(var17);
                    SaveGenerator(address=74);
case 40:
                    return var3;
case 41:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 42; continue _fun0007 }
case 21:
                    var9 = var3.adUser;
                    var7 = var3.adMetadataRaw;
                    var5 = var3.adMetadataSealed;
                    var4 = {};
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var6 = 16;
                    var6 = var14[var6];
                    var13 = var13.bind(var10)(var6);
                    var6 = var13.getContentProperties;
                    var19 = var6.bind(var13)(var17, var16, var15);
                    var20 = var4;
                    var6 = copyDataProperties(var20, var19);
                    var13 = _closure1_slot1;
                    var6 = 18;
                    var6 = var14[var6];
                    var6 = var13.bind(var10)(var6);
                    var19 = var6.bind(var10)();
                    var20 = var4;
                    var6 = copyDataProperties(var20, var19);
                    var6 = 'cta_name';
                    var4[var6] = var12;
                    var6 = 'impression_id';
                    var4[var6] = var11;
                    var6 = null;
                    var11 = var6 != var9;
                    var12 = null;
                    if(!var11) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 19;
                    var11 = var14[var11];
                    var13 = var13.bind(var10)(var11);
                    var11 = var13.isIOS;
                    var11 = var11.bind(var13)();
                    var12 = null;
                    if(!var11) { _fun0007_ip = 43; continue _fun0007 }
case 45:
                    var12 = var9.advertisingId;
case 43:
                    var11 = 'apple_advertising_id';
                    var4[var11] = var12;
                    var12 = var6 != var9;
                    var11 = null;
                    if(!var12) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 19;
                    var12 = var14[var12];
                    var13 = var13.bind(var10)(var12);
                    var12 = var13.isAndroid;
                    var12 = var12.bind(var13)();
                    var11 = null;
                    if(!var12) { _fun0007_ip = 46; continue _fun0007 }
case 48:
                    var11 = var9.advertisingId;
case 46:
                    var9 = 'android_advertising_id';
                    var4[var9] = var11;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 20;
                    var8 = var11[var8];
                    var9 = var9.bind(var10)(var8);
                    var8 = var9.v4;
                    var9 = var8.bind(var9)();
                    var8 = 'click_id';
                    var4[var8] = var9;
                    var9 = var6 != var7;
                    var8 = null;
                    if(!var9) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var8 = var7;
case 49:
                    var7 = 'metadata_raw';
                    var4[var7] = var8;
                    var7 = var6 != var5;
                    var6 = null;
                    if(!var7) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var6 = var5;
case 51:
                    var5 = 'metadata_sealed';
                    var4[var5] = var6;
                    return var4;
case 42:
                    return var3;
case 38:
                    return var2;
case 36:
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
    var1 = function _trackQuestContentClicked() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 53; continue _fun0008 }
case 32:
                    var3 = var2.questId;
                    var10 = var2.questContent;
                    var17 = var2.questContentCTA;
                    var20 = var2.questContentPosition;
                    var18 = var2.questContentRowIndex;
                    var16 = var2.impressionId;
                    var9 = var2.trackGuildAndChannelMetadata;
                    var7 = var2.sourceQuestContent;
                    var4 = undefined;
                    SaveGenerator(address=67);
case 54:
                    return var4;
case 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 56; continue _fun0008 }
case 28:
                    var6 = _closure1_slot6;
                    var5 = var6.getQuest;
                    var19 = var5.bind(var6)(var3);
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var11 = 9;
                    var12 = var5[var11];
                    var13 = var6.bind(var4)(var12);
                    var12 = var13.getAdTrafficMetadataRaw;
                    var15 = var12.bind(var13)(var10, var3);
                    var5 = var5[var11];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.getAdTrafficMetadataSealed;
                    var13 = var5.bind(var6)(var10, var3);
                    var6 = _closure1_slot15;
                    var5 = {};
                    var5['questId'] = var3;
                    var3 = _closure1_slot8;
                    var3 = var3.QUEST_CONTENT_CLICKED;
                    var5['event'] = var3;
                    var12 = {};
                    var14 = _closure1_slot18;
                    var3 = {};
                    var3['questContent'] = var10;
                    var3['questContentPosition'] = var20;
                    var3['questContentRowIndex'] = var18;
                    var3['questContentCTA'] = var17;
                    var3['impressionId'] = var16;
                    var3 = var14.bind(var4)(var3);
                    SaveGenerator(address=215);
case 57:
                    return var3;
case 58:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=13);
                    if(var14) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var23 = var12;
                    var22 = var3;
                    var14 = copyDataProperties(var23, var22);
                    var14 = null;
                    var16 = var14 != var19;
                    var17 = null;
                    if(!var16) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var16 = 16;
                    var16 = var20[var16];
                    var18 = var18.bind(var4)(var16);
                    var16 = var18.getQuestStatus;
                    var17 = var16.bind(var18)(var19);
case 61:
                    var16 = 'quest_status';
                    var12[var16] = var17;
                    var17 = var14 != var15;
                    var16 = null;
                    if(!var17) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                    var16 = var15;
case 63:
                    var15 = 'traffic_metadata_raw';
                    var12[var15] = var16;
                    var15 = var14 != var13;
                    var14 = null;
                    if(!var15) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var14 = var13;
case 65:
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
case 59:
                    return var3;
case 56:
                    return var2;
case 53:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _trackAdContentClicked() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 67; continue _fun0009 }
case 32:
                    var11 = var2.adContentId;
                    var3 = var2.adCreativeType;
                    var10 = var2.questContent;
                    var13 = var2.questContentCTA;
                    var15 = var2.questContentPosition;
                    var14 = var2.questContentRowIndex;
                    var12 = var2.impressionId;
                    var9 = var2.trackGuildAndChannelMetadata;
                    var7 = var2.sourceQuestContent;
                    var4 = undefined;
                    SaveGenerator(address=73);
case 68:
                    return var4;
case 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 60; continue _fun0009 }
case 70:
                    var6 = _closure1_slot16;
                    var5 = {};
                    var5['adContentId'] = var11;
                    var5['adCreativeType'] = var3;
                    var3 = _closure1_slot8;
                    var3 = var3.QUEST_CONTENT_CLICKED;
                    var5['event'] = var3;
                    var11 = _closure1_slot18;
                    var3 = {};
                    var3['questContent'] = var10;
                    var3['questContentPosition'] = var15;
                    var3['questContentRowIndex'] = var14;
                    var3['questContentCTA'] = var13;
                    var3['impressionId'] = var12;
                    var3 = var11.bind(var4)(var3);
                    SaveGenerator(address=156);
case 71:
                    return var3;
case 31:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                    if(var11) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                    var5['properties'] = var3;
                    var5['trackGuildAndChannelMetadata'] = var9;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 9;
                    var8 = var11[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.isBillableQuestContent;
                    var8 = var8.bind(var9)(var10);
                    var5['shouldExtendSession'] = var8;
                    var5['sourceQuestContent'] = var7;
                    var5 = var6.bind(var4)(var5);
                    return var4;
case 72:
                    return var3;
case 60:
                    return var2;
case 67:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var6 = global;
    var12 = var6.Object;
    var11 = var12.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var9);
    var1 = 0;
    var9 = var8[var1];
    var1 = undefined;
    var9 = var10.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var8[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var8[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var8[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.QuestsExperimentLocations;
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.AnalyticEvents;
    var _closure1_slot8 = var9;
    var10 = var6.Set;
    var11 = var9.QUEST_CONTENT_VIEWED;
    var6 = new Array(2);
    var6[0] = var11;
    var9 = var9.QUEST_CONTENT_CLICKED;
    var6[1] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var16 = var9;
    var15 = var6;
    var6 = new var16[var10](var15, var14);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot9 = var6;
    var6 = 21;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/lib/analytics/AnalyticsActions.tsx';
    var6 = var7.bind(var8)(var6);
    var3['trackQuestEvent'] = var5;
    var5 = function trackAppStoreOverlayEvent(arg1, arg2, arg3, arg4, arg5) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var8 = arg1;
            var4 = arg2;
            var5 = arg4;
            var7 = arg5;
            var6 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var11 = var10[var3];
            var1 = undefined;
            var13 = var9.bind(var1)(var11);
            var12 = var13.getQuestContentName;
            var11 = var4.content;
            var11 = var12.bind(var13)(var11);
            var6['content_name'] = var11;
            var11 = var4.ctaContent;
            var6['cta_name'] = var11;
            var11 = var4.impressionId;
            var6['impression_id'] = var11;
            var11 = var10[var3];
            var13 = var9.bind(var1)(var11);
            var12 = var13.getQuestContentName;
            var11 = var4.sourceQuestContent;
            var11 = var12.bind(var13)(var11);
            var6['source_content_name'] = var11;
            var11 = arg3;
            var6['app_id'] = var11;
            var11 = var4.position;
            var6['content_position'] = var11;
            var3 = var10[var3];
            var9 = var9.bind(var1)(var3);
            var3 = var9.getQuestStatus;
            var3 = var3.bind(var9)(var8);
            var6['quest_status'] = var3;
            var3 = _closure1_slot8;
            var3 = var3.QUEST_APP_STORE_OVERLAY_CLOSED;
            if(!(var5 === var3)) { _fun0010_ip = 74; continue _fun0010 }
case 75:
            if(!(var1 === var7)) { _fun0010_ip = 76; continue _fun0010 }
case 74:
            var9 = _closure1_slot15;
            var3 = {};
            var10 = var8.id;
            var3['questId'] = var10;
            var3['event'] = var5;
            var10 = {};
            var15 = var10;
            var14 = var6;
            var11 = copyDataProperties(var15, var14);
            var3['properties'] = var10;
            var10 = var4.sourceQuestContent;
            var3['sourceQuestContent'] = var10;
            var3 = var9.bind(var1)(var3);
            _fun0010_ip = 63; continue _fun0010;
case 76:
            var3 = _closure1_slot15;
            var2 = {};
            var8 = var8.id;
            var2['questId'] = var8;
            var2['event'] = var5;
            var5 = {};
            var15 = var5;
            var14 = var6;
            var6 = copyDataProperties(var15, var14);
            var6 = 'time_spent_ms';
            var5[var6] = var7;
            var2['properties'] = var5;
            var4 = var4.sourceQuestContent;
            var2['sourceQuestContent'] = var4;
            var2 = var3.bind(var1)(var2);
case 63:
            return var1;
        }
    };
    var3['trackAppStoreOverlayEvent'] = var5;
    var3['trackAdContentEvent'] = var4;
    var4 = function trackQuestContentClicked() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['trackQuestContentClicked'] = var4;
    var4 = function trackAdContentClicked() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['trackAdContentClicked'] = var4;
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
        var3 = _closure1_slot15;
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
        var1 = 14;
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