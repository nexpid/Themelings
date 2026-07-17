// app/modules/quests/lib/analytics/AnalyticsActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var9;
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
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['quest_id'] = var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var7 = undefined;
            var9 = var4.bind(var7)(var3);
            var8 = var9.getQuestType;
            var3 = var2.config;
            var3 = var8.bind(var9)(var3);
            var1['quest_type'] = var3;
            var3 = 9;
            var3 = var6[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.getAllApplicationIds;
            var3 = var3.bind(var4)(var2);
            var4 = null;
            if(!(var4 == var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = new Array(0);
case 10:
            var1['application_ids'] = var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 10;
            var6 = var4[var6];
            var8 = var3.bind(var7)(var6);
            var6 = var8.getQuestStatus;
            var6 = var6.bind(var8)(var2);
            var1['quest_status'] = var6;
            var6 = _closure1_slot10;
            var5 = var2.id;
            var2 = 11;
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
    var1 = function getCommonAdContentProperties(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = var1.adContentId;
            var11 = var1.adCreativeType;
            var9 = var1.sourceQuestContent;
            var3 = var1.shouldExtendSession;
            var6 = var1.relatedQuestId;
            var4 = null;
            var1 = var4 != var6;
            var7 = null;
            if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var2 = _closure1_slot6;
            var1 = var2.getQuest;
            var7 = var1.bind(var2)(var6);
case 12:
            var1 = {};
            var2 = _closure1_slot10;
            var8 = undefined;
            var17 = undefined;
            var16 = var10;
            var15 = var9;
            var14 = var11;
            var13 = var3;
            var15 = var17[var2](var16, var15, var14, var13, var12);
            var16 = var1;
            var2 = copyDataProperties(var16, var15);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = 7;
            var2 = var2[var11];
            var3 = var3.bind(var8)(var2);
            var2 = var3.getAdMetadataSealed;
            var2 = var2.bind(var3)(var9, var10);
            var12 = var4 != var2;
            var3 = null;
            if(!var12) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = var2;
case 14:
            var2 = 'metadata_sealed';
            var1[1] = var3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var11];
            var3 = var3.bind(var8)(var2);
            var2 = var3.getAdTrafficMetadataSealed;
            var2 = var2.bind(var3)(var9, var8, var10);
            var9 = var4 != var2;
            var3 = null;
            if(!var9) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var3 = var2;
case 16:
            var2 = 'traffic_metadata_sealed';
            var1[1] = var3;
            if(!(var4 == var6)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var2 = {};
            _fun0004_ip = 20; continue _fun0004;
case 18:
            var3 = {};
            var3['quest_id'] = var6;
            var6 = var4 != var7;
            var4 = null;
            if(!var6) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 10;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.getQuestStatus;
            var4 = var5.bind(var6)(var7);
case 21:
            var3['quest_status'] = var4;
            var2 = var3;
case 20:
            var16 = var1;
            var15 = var2;
            var2 = copyDataProperties(var16, var15);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function trackEvent(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = arguments[2];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var2 = false;
case 23:
            var3 = _closure1_slot4;
            var3 = var3.displayTools;
            if(!var3) { _fun0005_ip = 5; continue _fun0005 }
case 25:
            var3 = _closure1_slot4;
            var4 = var3.lastOpenTabId;
            var3 = 'quest_preview';
            if(!(var3 !== var4)) { _fun0005_ip = 26; continue _fun0005 }
case 5:
            var3 = _closure1_slot5;
            var3 = var3.isLoggingAnalyticsEvents;
            var3 = arguments[3];
            if(var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var4 = _closure1_slot8;
            var3 = var4.has;
            var4 = var3.bind(var4)(var6);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var2) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var2 = 13;
            var2 = var7[var2];
            var9 = var3.bind(var1)(var2);
            var8 = var9.track;
            var2 = {};
            var2['flush'] = var4;
            var2 = var8.bind(var9)(var6, var5, var2);
            _fun0005_ip = 26; continue _fun0005;
case 28:
            var2 = 12;
            var2 = var7[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackWithMetadata;
            var2 = var2.bind(var3)(var6, var5, var4);
            return var2;
case 26:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var6 = function trackQuestEvent(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var4 = var2.questId;
            var6 = var2.event;
            var7 = var2.properties;
            var5 = var2.trackGuildAndChannelMetadata;
            var10 = var2.shouldExtendSession;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
            var10 = false;
case 30:
            var9 = var2.sourceQuestContent;
            var2 = _closure1_slot6;
            var3 = var2.quests;
            var2 = var3.get;
            var2 = var2.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var2)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
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
case 32:
            return var1;
        }
    };
    var _closure1_slot14 = var6;
    var5 = function trackAdContentEvent(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var13 = var3.adContentId;
            var9 = var3.relatedQuestId;
            var12 = var3.adCreativeType;
            var6 = var3.event;
            var2 = var3.properties;
            var5 = var3.trackGuildAndChannelMetadata;
            var10 = var3.shouldExtendSession;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0007_ip = 5; continue _fun0007 }
case 34:
            var10 = false;
case 5:
            var11 = var3.sourceQuestContent;
            var4 = _closure1_slot13;
            var3 = {};
            var8 = _closure1_slot12;
            var7 = {};
            var7['adContentId'] = var13;
            var7['adCreativeType'] = var12;
            var7['sourceQuestContent'] = var11;
            var7['shouldExtendSession'] = var10;
            var7['relatedQuestId'] = var9;
            var16 = var8.bind(var1)(var7);
            var17 = var3;
            var7 = copyDataProperties(var17, var16);
            var17 = var3;
            var16 = var2;
            var2 = copyDataProperties(var17, var16);
            var14 = false;
            var18 = undefined;
            var17 = var6;
            var16 = var3;
            var15 = var5;
            var2 = var18[var4](var17, var16, var15, var14, var13);
            return var1;
        }
    };
    var _closure1_slot15 = var5;
    var4 = function getCommonClickEventProperties() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var4;
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
                    if(var3) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var15 = var2.questContent;
                    var14 = var2.questContentPosition;
                    var13 = var2.questContentRowIndex;
                    var10 = var2.questContentCTA;
                    var9 = var2.impressionId;
                    var6 = var2.clickId;
                    var8 = undefined;
                    SaveGenerator(address=55);
case 5:
                    return var8;
case 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var12 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 14;
                    var4 = var3[var4];
                    var11 = var12.bind(var8)(var4);
                    var4 = var11.getAdUser;
                    var7 = 10;
                    var3 = var3[var7];
                    var12 = var12.bind(var8)(var3);
                    var3 = var12.getQuestContentName;
                    var3 = var3.bind(var12)(var15);
                    var3 = var4.bind(var11)(var3);
                    SaveGenerator(address=125);
case 40:
                    return var3;
case 41:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var4 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = var12[var7];
                    var11 = var11.bind(var8)(var7);
                    var7 = var11.getContentProperties;
                    var17 = var7.bind(var11)(var15, var14, var13);
                    var18 = var4;
                    var7 = copyDataProperties(var18, var17);
                    var11 = _closure1_slot1;
                    var7 = 15;
                    var7 = var12[var7];
                    var7 = var11.bind(var8)(var7);
                    var17 = var7.bind(var8)();
                    var18 = var4;
                    var7 = copyDataProperties(var18, var17);
                    var7 = 'cta_name';
                    var4[6] = var10;
                    var7 = 'impression_id';
                    var4[6] = var9;
                    var7 = null;
                    var9 = var7 != var3;
                    var10 = null;
                    if(!var9) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 16;
                    var9 = var12[var9];
                    var11 = var11.bind(var8)(var9);
                    var9 = var11.isIOS;
                    var9 = var9.bind(var11)();
                    var10 = null;
                    if(!var9) { _fun0008_ip = 44; continue _fun0008 }
case 46:
                    var10 = var3.advertisingId;
case 44:
                    var9 = 'apple_advertising_id';
                    var4[8] = var10;
                    var9 = var7 != var3;
                    var10 = null;
                    if(!var9) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 16;
                    var9 = var12[var9];
                    var11 = var11.bind(var8)(var9);
                    var9 = var11.isAndroid;
                    var9 = var9.bind(var11)();
                    var10 = null;
                    if(!var9) { _fun0008_ip = 47; continue _fun0008 }
case 49:
                    var10 = var3.advertisingId;
case 47:
                    var9 = 'android_advertising_id';
                    var4[8] = var10;
                    if(!(var7 == var6)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 17;
                    var5 = var9[var5];
                    var7 = var7.bind(var8)(var5);
                    var5 = var7.v4;
                    var6 = var5.bind(var7)();
case 50:
                    var5 = 'click_id';
                    var4[4] = var6;
                    return var4;
case 42:
                    return var3;
case 38:
                    return var2;
case 35:
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
                    if(var3) { _fun0009_ip = 52; continue _fun0009 }
case 36:
                    var3 = var2.questId;
                    var10 = var2.questContent;
                    var17 = var2.questContentCTA;
                    var19 = var2.questContentPosition;
                    var18 = var2.questContentRowIndex;
                    var16 = var2.impressionId;
                    var15 = var2.clickId;
                    var9 = var2.trackGuildAndChannelMetadata;
                    var7 = var2.sourceQuestContent;
                    var4 = undefined;
                    SaveGenerator(address=73);
case 6:
                    return var4;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var11 = 7;
                    var5 = var5[var11];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.getAdTrafficMetadataSealed;
                    var13 = var5.bind(var6)(var7, var3);
                    var6 = _closure1_slot14;
                    var5 = {};
                    var5['questId'] = var3;
                    var3 = _closure1_slot7;
                    var3 = var3.QUEST_CONTENT_CLICKED;
                    var5['event'] = var3;
                    var12 = {};
                    var14 = _closure1_slot16;
                    var3 = {};
                    var3['questContent'] = var10;
                    var3['questContentPosition'] = var19;
                    var3['questContentRowIndex'] = var18;
                    var3['questContentCTA'] = var17;
                    var3['impressionId'] = var16;
                    var3['clickId'] = var15;
                    var3 = var14.bind(var4)(var3);
                    SaveGenerator(address=190);
case 56:
                    return var3;
case 17:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=13);
                    if(var14) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var22 = var12;
                    var21 = var3;
                    var14 = copyDataProperties(var22, var21);
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var11];
                    var15 = var15.bind(var4)(var14);
                    var14 = var15.getAdMetadataSealed;
                    var15 = var14.bind(var15)(var7);
                    var14 = null;
                    var17 = var14 != var15;
                    var16 = null;
                    if(!var17) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var16 = var15;
case 59:
                    var15 = 'metadata_sealed';
                    var12[14] = var16;
                    var16 = var14 != var13;
                    var15 = null;
                    if(!var16) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var15 = var13;
case 61:
                    var13 = 'traffic_metadata_sealed';
                    var12[12] = var15;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var13 = 18;
                    var13 = var16[var13];
                    var15 = var15.bind(var4)(var13);
                    var13 = var15.getCurrentQuestHomeSearchSession;
                    var15 = var13.bind(var15)();
                    var16 = var14 == var15;
                    var13 = undefined;
                    if(var16) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var13 = var15.uuid;
case 63:
                    var15 = var14 != var13;
                    var14 = null;
                    if(!var15) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var14 = var13;
case 65:
                    var13 = 'search_session_id';
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
case 57:
                    return var3;
case 54:
                    return var2;
case 52:
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
                    if(var3) { _fun0010_ip = 67; continue _fun0010 }
case 36:
                    var16 = var2.adContentId;
                    var11 = var2.relatedQuestId;
                    var3 = var2.adCreativeType;
                    var10 = var2.questContent;
                    var13 = var2.questContentCTA;
                    var15 = var2.questContentPosition;
                    var14 = var2.questContentRowIndex;
                    var12 = var2.impressionId;
                    var9 = var2.trackGuildAndChannelMetadata;
                    var7 = var2.sourceQuestContent;
                    var4 = undefined;
                    SaveGenerator(address=79);
case 68:
                    return var4;
case 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                    var6 = _closure1_slot15;
                    var5 = {};
                    var5['adContentId'] = var16;
                    var5['relatedQuestId'] = var11;
                    var5['adCreativeType'] = var3;
                    var3 = _closure1_slot7;
                    var3 = var3.QUEST_CONTENT_CLICKED;
                    var5['event'] = var3;
                    var11 = _closure1_slot16;
                    var3 = {};
                    var3['questContent'] = var10;
                    var3['questContentPosition'] = var15;
                    var3['questContentRowIndex'] = var14;
                    var3['questContentCTA'] = var13;
                    var3['impressionId'] = var12;
                    var3 = var11.bind(var4)(var3);
                    SaveGenerator(address=167);
case 72:
                    return var3;
case 73:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                    if(var11) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                    var5['properties'] = var3;
                    var5['trackGuildAndChannelMetadata'] = var9;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 7;
                    var8 = var11[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.isBillableQuestContent;
                    var8 = var8.bind(var9)(var10);
                    var5['shouldExtendSession'] = var8;
                    var5['sourceQuestContent'] = var7;
                    var5 = var6.bind(var4)(var5);
                    return var4;
case 74:
                    return var3;
case 70:
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
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var7 = global;
    var13 = var7.Object;
    var12 = var13.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var10);
    var1 = 0;
    var10 = var9[var1];
    var1 = undefined;
    var10 = var11.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var9[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var9[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var9[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var10 = var10.AnalyticEvents;
    var _closure1_slot7 = var10;
    var11 = var7.Set;
    var12 = var10.QUEST_CONTENT_VIEWED;
    var7 = new Array(2);
    var7[0] = var12;
    var10 = var10.QUEST_CONTENT_CLICKED;
    var7[1] = var10;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var17 = var10;
    var16 = var7;
    var7 = new var17[var11](var16, var15);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot8 = var7;
    var7 = 20;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/quests/lib/analytics/AnalyticsActions.tsx';
    var7 = var8.bind(var9)(var7);
    var3['trackQuestEvent'] = var6;
    var6 = function trackAppStoreOverlayEvent(arg1, arg2, arg3, arg4, arg5) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg2;
            var5 = arg4;
            var8 = arg5;
            var7 = {};
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 10;
            var10 = var9[var3];
            var1 = undefined;
            var12 = var6.bind(var1)(var10);
            var11 = var12.getQuestContentName;
            var10 = var4.content;
            var10 = var11.bind(var12)(var10);
            var7['content_name'] = var10;
            var10 = var4.ctaContent;
            var7['cta_name'] = var10;
            var10 = var4.impressionId;
            var7['impression_id'] = var10;
            var3 = var9[var3];
            var9 = var6.bind(var1)(var3);
            var6 = var9.getQuestContentName;
            var3 = var4.sourceQuestContent;
            var3 = var6.bind(var9)(var3);
            var7['source_content_name'] = var3;
            var3 = arg3;
            var7['app_id'] = var3;
            var3 = var4.position;
            var7['content_position'] = var3;
            var3 = _closure1_slot7;
            var3 = var3.QUEST_APP_STORE_OVERLAY_CLOSED;
            var6 = var5 === var3;
            if(var6) { _fun0011_ip = 76; continue _fun0011 }
case 77:
            var3 = _closure1_slot7;
            var3 = var3.QUEST_APP_STORE_OVERLAY_RETURNED;
            var6 = var5 === var3;
case 76:
            if(!var6) { _fun0011_ip = 78; continue _fun0011 }
case 79:
            var6 = var1 !== var8;
case 78:
            var3 = _closure1_slot14;
            var2 = {};
            var9 = arg1;
            var9 = var9.id;
            var2['questId'] = var9;
            var2['event'] = var5;
            var5 = var7;
            if(!var6) { _fun0011_ip = 80; continue _fun0011 }
case 81:
            var6 = {};
            var14 = var6;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var7 = 'time_spent_ms';
            var6[6] = var8;
            var5 = var6;
case 80:
            var2['properties'] = var5;
            var4 = var4.sourceQuestContent;
            var2['sourceQuestContent'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['trackAppStoreOverlayEvent'] = var6;
    var6 = function trackAdContentAppStoreOverlayEvent(arg1, arg2, arg3, arg4, arg5) {
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
            var2 = 10;
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
            if(!(var9 !== var6)) { _fun0012_ip = 82; continue _fun0012 }
case 83:
            var5 = _closure1_slot7;
            var6 = var5.QUEST_APP_STORE_OVERLAY_RETURNED;
            var5 = var7;
            if(!(var9 === var6)) { _fun0012_ip = 84; continue _fun0012 }
case 82:
            var5 = var7;
            if(!(var1 !== var8)) { _fun0012_ip = 84; continue _fun0012 }
case 85:
            var6 = {};
            var16 = var6;
            var15 = var7;
            var7 = copyDataProperties(var16, var15);
            var7 = 'time_spent_ms';
            var6[6] = var8;
            var5 = var6;
case 84:
            var2['properties'] = var5;
            var4 = var4.sourceQuestContent;
            var2['sourceQuestContent'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['trackAdContentAppStoreOverlayEvent'] = var6;
    var3['trackAdContentEvent'] = var5;
    var3['getCommonClickEventProperties'] = var4;
    var4 = function trackQuestContentClicked() {
        var1 = undefined;
        var4 = _closure1_slot18;
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
        var4 = _closure1_slot19;
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
        var2 = 13;
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
        var6 = 10;
        var6 = var9[var6];
        var7 = var7.bind(var1)(var6);
        var6 = var7.getQuestContentName;
        var6 = var6.bind(var7)(var8);
        var2['content_name'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackBountyCarouselScroll'] = var4;
    var4 = function trackQuestHomeOrbShopCarouselViewed(arg1) {
        var1 = arg1;
        var8 = var1.obtainableOrbRewards;
        var7 = var1.carouselSize;
        var6 = var1.isPlaceholderCarousel;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 13;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.QUEST_HOME_ORB_SHOP_CAROUSEL_VIEWED;
        var2 = {};
        var2['obtainable_orb_rewards'] = var8;
        var2['carousel_size'] = var7;
        var2['is_placeholder_carousel'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackQuestHomeOrbShopCarouselViewed'] = var4;
    var4 = function trackQuestHomeOrbShopCarouselScroll(arg1) {
        var1 = arg1;
        var8 = var1.scrollingDirection;
        var7 = var1.carouselPosition;
        var6 = var1.carouselSize;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 13;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.QUEST_HOME_ORB_SHOP_CAROUSEL_SCROLL;
        var2 = {};
        var2['scrolling_direction'] = var8;
        var2['carousel_position'] = var7;
        var2['carousel_size'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackQuestHomeOrbShopCarouselScroll'] = var4;
    var4 = function trackBountyCarouselEmptyStateViewed(arg1) {
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 6;
        var2 = var12[var1];
        var1 = undefined;
        var3 = var11.bind(var1)(var2);
        var2 = var3.getOrRefreshAdSession;
        var2 = var2.bind(var3)();
        var8 = var2.uuid;
        var3 = _closure1_slot1;
        var2 = 13;
        var2 = var12[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.BOUNTY_CAROUSEL_EMPTY_STATE_VIEWED;
        var2 = {};
        var2['client_ad_session_id'] = var8;
        var7 = _closure1_slot9;
        var6 = 7;
        var6 = var12[var6];
        var10 = var11.bind(var1)(var6);
        var9 = var10.isBillableQuestContent;
        var6 = 19;
        var6 = var12[var6];
        var6 = var11.bind(var1)(var6);
        var6 = var6.QuestContent;
        var6 = var6.QUEST_HOME_MOBILE_CAROUSEL;
        var6 = var9.bind(var10)(var6);
        var6 = var7.bind(var1)(var8, var6);
        var2['billing_session_id'] = var6;
        var6 = arg1;
        var2['reason'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackBountyCarouselEmptyStateViewed'] = var4;
    var4 = function trackBountyVerticalScroll(arg1) {
        var1 = arg1;
        var10 = var1.scrollingType;
        var9 = var1.scrollingDirection;
        var8 = var1.verticalScrollingPosition;
        var7 = var1.scrollSessionId;
        var6 = var1.timeWatchedPreScrollMs;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var2 = var4[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getOrRefreshAdSession;
        var2 = var2.bind(var3)();
        var13 = var2.uuid;
        var3 = _closure1_slot1;
        var2 = 13;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.BOUNTY_VERTICAL_SCROLL;
        var2 = {};
        var2['client_ad_session_id'] = var13;
        var12 = _closure1_slot9;
        var11 = false;
        var11 = var12.bind(var1)(var13, var11);
        var2['billing_session_id'] = var11;
        var2['scrolling_type'] = var10;
        var2['scrolling_direction'] = var9;
        var2['vertical_scrolling_position'] = var8;
        var2['scroll_session_id'] = var7;
        var2['time_watched_pre_scroll_ms'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackBountyVerticalScroll'] = var4;
    var4 = function trackBountyAutoScrollDismissed(arg1) {
        var1 = arg1;
        var7 = var1.verticalScrollingPosition;
        var6 = var1.scrollSessionId;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var2 = var4[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getOrRefreshAdSession;
        var2 = var2.bind(var3)();
        var10 = var2.uuid;
        var3 = _closure1_slot1;
        var2 = 13;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.BOUNTY_AUTO_SCROLL_DISMISSED;
        var2 = {};
        var2['client_ad_session_id'] = var10;
        var9 = _closure1_slot9;
        var8 = false;
        var8 = var9.bind(var1)(var10, var8);
        var2['billing_session_id'] = var8;
        var2['vertical_scrolling_position'] = var7;
        var2['scroll_session_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackBountyAutoScrollDismissed'] = var4;
    var4 = function trackQuestHomeCarouselScroll(arg1) {
        var1 = arg1;
        var15 = var1.scrollingType;
        var13 = var1.scrollingDirection;
        var12 = var1.scrollWindowStartIndex;
        var11 = var1.scrollWindowEndIndex;
        var8 = var1.scrollWindowSize;
        var7 = var1.questContent;
        var6 = var1.carouselSize;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 6;
        var2 = var10[var1];
        var1 = undefined;
        var3 = var9.bind(var1)(var2);
        var2 = var3.getOrRefreshAdSession;
        var2 = var2.bind(var3)();
        var16 = var2.uuid;
        var3 = _closure1_slot1;
        var2 = 13;
        var2 = var10[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.QUEST_HOME_CAROUSEL_SCROLL;
        var2 = {};
        var2['scrolling_type'] = var15;
        var2['client_ad_session_id'] = var16;
        var15 = _closure1_slot9;
        var14 = 7;
        var14 = var10[var14];
        var17 = var9.bind(var1)(var14);
        var14 = var17.isBillableQuestContent;
        var14 = var14.bind(var17)(var7);
        var14 = var15.bind(var1)(var16, var14);
        var2['billing_session_id'] = var14;
        var2['scrolling_direction'] = var13;
        var2['scroll_window_start_index'] = var12;
        var2['scroll_window_end_index'] = var11;
        var2['scroll_window_size'] = var8;
        var8 = 10;
        var8 = var10[var8];
        var9 = var9.bind(var1)(var8);
        var8 = var9.getQuestContentName;
        var8 = var8.bind(var9)(var7);
        var2['content_name'] = var8;
        var2['content_id'] = var7;
        var2['carousel_size'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackQuestHomeCarouselScroll'] = var4;
    var4 = function trackQuestHomeSearchEntered(arg1) {
        var1 = arg1;
        var6 = var1.searchSessionId;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var2 = var4[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getOrRefreshAdSession;
        var2 = var2.bind(var3)();
        var9 = var2.uuid;
        var3 = _closure1_slot1;
        var2 = 13;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.QUEST_HOME_SEARCH_ENTERED;
        var2 = {};
        var2['client_ad_session_id'] = var9;
        var8 = _closure1_slot9;
        var7 = false;
        var7 = var8.bind(var1)(var9, var7);
        var2['billing_session_id'] = var7;
        var2['search_session_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackQuestHomeSearchEntered'] = var4;
    var4 = function trackQuestHomeSearchClosed(arg1) {
        var1 = arg1;
        var7 = var1.searchSessionId;
        var6 = var1.searchSessionDurationMs;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var2 = var4[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getOrRefreshAdSession;
        var2 = var2.bind(var3)();
        var10 = var2.uuid;
        var3 = _closure1_slot1;
        var2 = 13;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.QUEST_HOME_SEARCH_CLOSED;
        var2 = {};
        var2['client_ad_session_id'] = var10;
        var9 = _closure1_slot9;
        var8 = false;
        var8 = var9.bind(var1)(var10, var8);
        var2['billing_session_id'] = var8;
        var2['search_session_id'] = var7;
        var2['search_session_duration_ms'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackQuestHomeSearchClosed'] = var4;
    var4 = function trackQuestHomeSearchQuerySubmitted(arg1) {
        var1 = arg1;
        var10 = var1.searchSessionId;
        var9 = var1.searchQuery;
        var8 = var1.searchQueryLength;
        var7 = var1.resultsCount;
        var6 = var1.hasResults;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var2 = var4[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getOrRefreshAdSession;
        var2 = var2.bind(var3)();
        var13 = var2.uuid;
        var3 = _closure1_slot1;
        var2 = 13;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.QUEST_HOME_SEARCH_QUERY_SUBMITTED;
        var2 = {};
        var2['client_ad_session_id'] = var13;
        var12 = _closure1_slot9;
        var11 = false;
        var11 = var12.bind(var1)(var13, var11);
        var2['billing_session_id'] = var11;
        var2['search_session_id'] = var10;
        var2['search_query'] = var9;
        var2['search_query_length'] = var8;
        var2['results_count'] = var7;
        var2['has_results'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackQuestHomeSearchQuerySubmitted'] = var4;
    var4 = function trackQuestBarOrDockModeChange(arg1) {
        var1 = arg1;
        var8 = var1.questContent;
        var4 = var1.sourceQuestContent;
        var9 = var1.questId;
        var7 = var1.mode;
        var6 = var1.prevMode;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
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
        var1 = 12;
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