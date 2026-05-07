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
            var1 = arg1;
            var2 = arg2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.getActiveSessionUnsafe;
            var4 = var2.bind(var4)();
            var2 = null;
            var5 = var2 == var4;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.uuid;
case 4:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3;
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function getCommonProperties(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var10 = arg2;
            var3 = arg3;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 6;
            var1 = var11[var1];
            var8 = undefined;
            var5 = var9.bind(var8)(var1);
            var2 = var5.getOrRefreshAdSession;
            var1 = arg4;
            var1 = var2.bind(var5)(var1);
            var7 = var1.uuid;
            var5 = 7;
            var1 = var11[var5];
            var2 = var9.bind(var8)(var1);
            var1 = var2.getAdDecisionData;
            var2 = var1.bind(var2)(var4, var10);
            var1 = {};
            var1['client_ad_session_id'] = var7;
            var6 = _closure1_slot9;
            var5 = var11[var5];
            var9 = var9.bind(var8)(var5);
            var5 = var9.isBillableQuestContent;
            var5 = var5.bind(var9)(var10);
            var5 = var6.bind(var8)(var7, var5);
            var1['billing_session_id'] = var5;
            var1['ad_content_id'] = var4;
            var14 = var1;
            var13 = var2;
            var4 = copyDataProperties(var14, var13);
            var2 = var2.creative_type;
            var4 = null;
            if(!(var4 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var2;
case 8:
            var2 = 'creative_type';
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getCommonQuestProperties(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.id;
            var1['quest_id'] = var2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 8;
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
            var4 = 9;
            var4 = var6[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.getAllApplicationIds;
            var4 = var4.bind(var5)(var3);
            var5 = null;
            if(!(var5 == var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var4 = new Array(0);
case 10:
            var1['application_ids'] = var4;
            var6 = _closure1_slot10;
            var5 = var3.id;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
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
    var _closure1_slot11 = var1;
    var1 = function getCommonAdContentProperties(arg1, arg2, arg3, arg4) {
        var1 = {};
        var7 = _closure1_slot10;
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
    var _closure1_slot12 = var1;
    var1 = function trackEvent(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = arguments[2];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var2 = false;
case 12:
            var3 = _closure1_slot4;
            var3 = var3.displayTools;
            if(!var3) { _fun0004_ip = 5; continue _fun0004 }
case 14:
            var3 = _closure1_slot4;
            var4 = var3.lastOpenTabId;
            var3 = 'quest_preview';
            if(!(var3 !== var4)) { _fun0004_ip = 15; continue _fun0004 }
case 5:
            var3 = _closure1_slot5;
            var3 = var3.isLoggingAnalyticsEvents;
            var3 = arguments[3];
            if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var4 = _closure1_slot8;
            var3 = var4.has;
            var4 = var3.bind(var4)(var6);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var2 = 12;
            var2 = var7[var2];
            var9 = var3.bind(var1)(var2);
            var8 = var9.track;
            var2 = {};
            var2['flush'] = var4;
            var2 = var8.bind(var9)(var6, var5, var2);
            _fun0004_ip = 15; continue _fun0004;
case 17:
            var2 = 11;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackWithMetadata;
            var2 = var2.bind(var3)(var6, var5, var4);
            return var2;
case 15:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var5 = function trackQuestEvent(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var4 = var2.questId;
            var6 = var2.event;
            var7 = var2.properties;
            var5 = var2.trackGuildAndChannelMetadata;
            var10 = var2.shouldExtendSession;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var10 = false;
case 19:
            var9 = var2.sourceQuestContent;
            var2 = _closure1_slot6;
            var3 = var2.quests;
            var2 = var3.get;
            var2 = var2.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var2)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var4 = _closure1_slot13;
            var3 = {};
            var8 = _closure1_slot11;
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
case 21:
            return var1;
        }
    };
    var _closure1_slot14 = var5;
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
            if(!(var9 === var1)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var9 = false;
case 23:
            var13 = var3.sourceQuestContent;
            var4 = _closure1_slot13;
            var3 = {};
            var7 = _closure1_slot12;
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
    var _closure1_slot15 = var4;
    var1 = function _getAdUserMetadata() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 11; continue _fun0007 }
case 25:
                    var3 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 14;
                    var2 = var10[var2];
                    var6 = undefined;
                    var8 = var9.bind(var6)(var2);
                    var5 = var8.getAdUser;
                    var2 = 13;
                    var2 = var10[var2];
                    var9 = var9.bind(var6)(var2);
                    var2 = var9.getQuestContentName;
                    var2 = var2.bind(var9)(var7);
                    var2 = var5.bind(var8)(var2);
                    SaveGenerator(address=78);
case 22:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var3['adUser'] = var2;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.getAdMetadataSealed;
                    var4 = arg2;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['adMetadataSealed'] = var4;
                    return var3;
case 27:
                    return var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function getCommonClickEventProperties() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _getCommonClickEventProperties() {
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
                    if(var3) { _fun0008_ip = 29; continue _fun0008 }
case 25:
                    var17 = var2.questContent;
                    var16 = var2.questContentPosition;
                    var15 = var2.questContentRowIndex;
                    var12 = var2.questContentCTA;
                    var11 = var2.impressionId;
                    var8 = var2.clickId;
                    var4 = var2.adCreativeId;
                    var10 = undefined;
                    SaveGenerator(address=61);
case 4:
                    return var10;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var3 = function getAdUserMetadata() {
                        var1 = undefined;
                        var4 = _closure1_slot16;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var10)(var17, var4);
                    SaveGenerator(address=87);
case 33:
                    return var3;
case 34:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var9 = var3.adUser;
                    var5 = var3.adMetadataSealed;
                    var4 = {};
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var6 = 13;
                    var6 = var14[var6];
                    var13 = var13.bind(var10)(var6);
                    var6 = var13.getContentProperties;
                    var19 = var6.bind(var13)(var17, var16, var15);
                    var20 = var4;
                    var6 = copyDataProperties(var20, var19);
                    var13 = _closure1_slot1;
                    var6 = 15;
                    var6 = var14[var6];
                    var6 = var13.bind(var10)(var6);
                    var19 = var6.bind(var10)();
                    var20 = var4;
                    var6 = copyDataProperties(var20, var19);
                    var6 = 'cta_name';
                    var4[5] = var12;
                    var6 = 'impression_id';
                    var4[5] = var11;
                    var6 = null;
                    var11 = var6 != var9;
                    var12 = null;
                    if(!var11) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 16;
                    var11 = var14[var11];
                    var13 = var13.bind(var10)(var11);
                    var11 = var13.isIOS;
                    var11 = var11.bind(var13)();
                    var12 = null;
                    if(!var11) { _fun0008_ip = 37; continue _fun0008 }
case 39:
                    var12 = var9.advertisingId;
case 37:
                    var11 = 'apple_advertising_id';
                    var4[10] = var12;
                    var12 = var6 != var9;
                    var11 = null;
                    if(!var12) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 16;
                    var12 = var14[var12];
                    var13 = var13.bind(var10)(var12);
                    var12 = var13.isAndroid;
                    var12 = var12.bind(var13)();
                    var11 = null;
                    if(!var12) { _fun0008_ip = 40; continue _fun0008 }
case 42:
                    var11 = var9.advertisingId;
case 40:
                    var9 = 'android_advertising_id';
                    var4[8] = var11;
                    if(!(var6 == var8)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 17;
                    var7 = var11[var7];
                    var9 = var9.bind(var10)(var7);
                    var7 = var9.v4;
                    var8 = var7.bind(var9)();
case 43:
                    var7 = 'click_id';
                    var4[6] = var8;
                    var7 = var6 != var5;
                    var6 = null;
                    if(!var7) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                    var6 = var5;
case 45:
                    var5 = 'metadata_sealed';
                    var4[4] = var6;
                    return var4;
case 35:
                    return var3;
case 31:
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
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _trackQuestContentClicked() {
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
                    if(var3) { _fun0009_ip = 47; continue _fun0009 }
case 25:
                    var3 = var2.questId;
                    var10 = var2.questContent;
                    var17 = var2.questContentCTA;
                    var20 = var2.questContentPosition;
                    var19 = var2.questContentRowIndex;
                    var16 = var2.impressionId;
                    var15 = var2.clickId;
                    var9 = var2.trackGuildAndChannelMetadata;
                    var7 = var2.sourceQuestContent;
                    var4 = undefined;
                    SaveGenerator(address=73);
case 6:
                    return var4;
case 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                    var6 = _closure1_slot6;
                    var5 = var6.getQuest;
                    var18 = var5.bind(var6)(var3);
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var11 = 7;
                    var5 = var5[var11];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.getAdTrafficMetadataSealed;
                    var13 = var5.bind(var6)(var10, var3);
                    var6 = _closure1_slot14;
                    var5 = {};
                    var5['questId'] = var3;
                    var3 = _closure1_slot7;
                    var3 = var3.QUEST_CONTENT_CLICKED;
                    var5['event'] = var3;
                    var12 = {};
                    var14 = _closure1_slot17;
                    var3 = {};
                    var3['questContent'] = var10;
                    var3['questContentPosition'] = var20;
                    var3['questContentRowIndex'] = var19;
                    var3['questContentCTA'] = var17;
                    var3['impressionId'] = var16;
                    var3['clickId'] = var15;
                    var3 = var14.bind(var4)(var3);
                    SaveGenerator(address=205);
case 51:
                    return var3;
case 52:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=13);
                    if(var14) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var23 = var12;
                    var22 = var3;
                    var14 = copyDataProperties(var23, var22);
                    var14 = null;
                    var15 = var14 != var18;
                    var16 = null;
                    if(!var15) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var17 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var15 = 13;
                    var15 = var19[var15];
                    var17 = var17.bind(var4)(var15);
                    var15 = var17.getQuestStatus;
                    var16 = var15.bind(var17)(var18);
case 55:
                    var15 = 'quest_status';
                    var12[14] = var16;
                    var15 = var14 != var13;
                    var14 = null;
                    if(!var15) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var14 = var13;
case 57:
                    var13 = 'traffic_metadata_sealed';
                    var12[12] = var14;
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
case 53:
                    return var3;
case 49:
                    return var2;
case 47:
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
    var1 = function _trackAdContentClicked() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 59; continue _fun0010 }
case 25:
                    var15 = var2.adContentId;
                    var3 = var2.adCreativeType;
                    var10 = var2.questContent;
                    var14 = var2.questContentCTA;
                    var17 = var2.questContentPosition;
                    var16 = var2.questContentRowIndex;
                    var13 = var2.impressionId;
                    var9 = var2.trackGuildAndChannelMetadata;
                    var7 = var2.sourceQuestContent;
                    var4 = undefined;
                    SaveGenerator(address=73);
case 6:
                    return var4;
case 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 60; continue _fun0010 }
case 50:
                    var6 = _closure1_slot15;
                    var5 = {};
                    var5['adContentId'] = var15;
                    var5['adCreativeType'] = var3;
                    var3 = _closure1_slot7;
                    var3 = var3.QUEST_CONTENT_CLICKED;
                    var5['event'] = var3;
                    var12 = {};
                    var11 = _closure1_slot17;
                    var3 = {};
                    var3['questContent'] = var10;
                    var3['questContentPosition'] = var17;
                    var3['questContentRowIndex'] = var16;
                    var3['questContentCTA'] = var14;
                    var3['impressionId'] = var13;
                    var3['adCreativeId'] = var15;
                    var3 = var11.bind(var4)(var3);
                    SaveGenerator(address=163);
case 61:
                    return var3;
case 62:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                    if(var11) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                    var21 = var12;
                    var20 = var3;
                    var11 = copyDataProperties(var21, var20);
                    var14 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 7;
                    var13 = var13[var11];
                    var14 = var14.bind(var4)(var13);
                    var13 = var14.getAdTrafficMetadataSealed;
                    var13 = var13.bind(var14)(var10, var4, var15);
                    var14 = null;
                    var15 = var14 != var13;
                    if(!var15) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                    var14 = var13;
case 65:
                    var13 = 'traffic_metadata_sealed';
                    var12[12] = var14;
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
case 63:
                    return var3;
case 60:
                    return var2;
case 59:
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
    var9 = var9.AnalyticEvents;
    var _closure1_slot7 = var9;
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
    var _closure1_slot8 = var6;
    var6 = 18;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/lib/analytics/AnalyticsActions.tsx';
    var6 = var7.bind(var8)(var6);
    var3['trackQuestEvent'] = var5;
    var5 = function trackAppStoreOverlayEvent(arg1, arg2, arg3, arg4, arg5) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var9 = arg1;
            var4 = arg2;
            var5 = arg4;
            var8 = arg5;
            var7 = {};
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 13;
            var11 = var10[var3];
            var1 = undefined;
            var13 = var6.bind(var1)(var11);
            var12 = var13.getQuestContentName;
            var11 = var4.content;
            var11 = var12.bind(var13)(var11);
            var7['content_name'] = var11;
            var11 = var4.ctaContent;
            var7['cta_name'] = var11;
            var11 = var4.impressionId;
            var7['impression_id'] = var11;
            var11 = var10[var3];
            var13 = var6.bind(var1)(var11);
            var12 = var13.getQuestContentName;
            var11 = var4.sourceQuestContent;
            var11 = var12.bind(var13)(var11);
            var7['source_content_name'] = var11;
            var11 = arg3;
            var7['app_id'] = var11;
            var11 = var4.position;
            var7['content_position'] = var11;
            var3 = var10[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getQuestStatus;
            var3 = var3.bind(var6)(var9);
            var7['quest_status'] = var3;
            var3 = _closure1_slot7;
            var3 = var3.QUEST_APP_STORE_OVERLAY_CLOSED;
            var6 = var5 === var3;
            if(var6) { _fun0011_ip = 67; continue _fun0011 }
case 68:
            var3 = _closure1_slot7;
            var3 = var3.QUEST_APP_STORE_OVERLAY_RETURNED;
            var6 = var5 === var3;
case 67:
            if(!var6) { _fun0011_ip = 69; continue _fun0011 }
case 70:
            var6 = var1 !== var8;
case 69:
            var3 = _closure1_slot14;
            var2 = {};
            var9 = var9.id;
            var2['questId'] = var9;
            var2['event'] = var5;
            var5 = var7;
            if(!var6) { _fun0011_ip = 71; continue _fun0011 }
case 66:
            var6 = {};
            var15 = var6;
            var14 = var7;
            var7 = copyDataProperties(var15, var14);
            var7 = 'time_spent_ms';
            var6[6] = var8;
            var5 = var6;
case 71:
            var2['properties'] = var5;
            var4 = var4.sourceQuestContent;
            var2['sourceQuestContent'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['trackAppStoreOverlayEvent'] = var5;
    var5 = function trackAdContentAppStoreOverlayEvent(arg1, arg2, arg3, arg4, arg5) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var9 = arg4;
            var8 = arg5;
            var10 = var1.adContentId;
            var6 = var1.adCreativeType;
            var7 = {};
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 13;
            var12 = var11[var2];
            var1 = undefined;
            var14 = var3.bind(var1)(var12);
            var13 = var14.getQuestContentName;
            var12 = var4.content;
            var12 = var13.bind(var14)(var12);
            var7['content_name'] = var12;
            var12 = var4.ctaContent;
            var7['cta_name'] = var12;
            var12 = var4.impressionId;
            var7['impression_id'] = var12;
            var2 = var11[var2];
            var11 = var3.bind(var1)(var2);
            var3 = var11.getQuestContentName;
            var2 = var4.sourceQuestContent;
            var2 = var3.bind(var11)(var2);
            var7['source_content_name'] = var2;
            var2 = arg3;
            var7['app_id'] = var2;
            var2 = var4.position;
            var7['content_position'] = var2;
            var3 = _closure1_slot15;
            var2 = {};
            var2['adContentId'] = var10;
            var2['adCreativeType'] = var6;
            var2['event'] = var9;
            var6 = _closure1_slot7;
            var6 = var6.QUEST_APP_STORE_OVERLAY_CLOSED;
            if(!(var9 !== var6)) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var5 = _closure1_slot7;
            var6 = var5.QUEST_APP_STORE_OVERLAY_RETURNED;
            var5 = var7;
            if(!(var9 === var6)) { _fun0012_ip = 74; continue _fun0012 }
case 72:
            var5 = var7;
            if(!(var1 !== var8)) { _fun0012_ip = 74; continue _fun0012 }
case 75:
            var6 = {};
            var16 = var6;
            var15 = var7;
            var7 = copyDataProperties(var16, var15);
            var7 = 'time_spent_ms';
            var6[6] = var8;
            var5 = var6;
case 74:
            var2['properties'] = var5;
            var4 = var4.sourceQuestContent;
            var2['sourceQuestContent'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['trackAdContentAppStoreOverlayEvent'] = var5;
    var3['trackAdContentEvent'] = var4;
    var4 = function trackQuestContentClicked() {
        var1 = undefined;
        var4 = _closure1_slot19;
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
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['trackAdContentClicked'] = var4;
    var4 = function trackBountyCarouselScroll(arg1) {
        var1 = arg1;
        var11 = var1.scrollingType;
        var10 = var1.scrollingDirection;
        var6 = var1.carouselPosition;
        var8 = var1.questContent;
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 6;
        var2 = var9[var1];
        var1 = undefined;
        var3 = var7.bind(var1)(var2);
        var2 = var3.getOrRefreshAdSession;
        var2 = var2.bind(var3)();
        var14 = var2.uuid;
        var3 = _closure1_slot1;
        var2 = 12;
        var2 = var9[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.BOUNTY_CAROUSEL_SCROLL;
        var2 = {};
        var2['client_ad_session_id'] = var14;
        var13 = _closure1_slot9;
        var12 = 7;
        var12 = var9[var12];
        var15 = var7.bind(var1)(var12);
        var12 = var15.isBillableQuestContent;
        var12 = var12.bind(var15)(var8);
        var12 = var13.bind(var1)(var14, var12);
        var2['billing_session_id'] = var12;
        var2['scrolling_type'] = var11;
        var2['scrolling_direction'] = var10;
        var2['carousel_position'] = var6;
        var6 = 13;
        var6 = var9[var6];
        var7 = var7.bind(var1)(var6);
        var6 = var7.getQuestContentName;
        var6 = var6.bind(var7)(var8);
        var2['content_name'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackBountyCarouselScroll'] = var4;
    var4 = function trackQuestBarOrDockModeChange(arg1) {
        var1 = arg1;
        var8 = var1.questContent;
        var4 = var1.sourceQuestContent;
        var9 = var1.questId;
        var7 = var1.mode;
        var6 = var1.prevMode;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getContentProperties;
        var8 = var2.bind(var3)(var8);
        var3 = _closure1_slot14;
        var2 = {};
        var2['questId'] = var9;
        var5 = _closure1_slot7;
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
        var1 = 11;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot7;
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