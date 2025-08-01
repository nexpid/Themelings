// app/modules/quests/QuestContentImpressionTracker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var4 = function useQuestImpression() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = var3.useContext;
            var1 = _closure1_slot16;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 38; continue _fun0001 }
 33:
            var1 = var2.current;
 38:
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var5 = global;
    var11 = var5.Object;
    var9 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var9 = var8[var6];
    var6 = metroImportAll;
    var9 = var6.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var11 = var6.getVisibleChannelIdsMethod;
    var _closure1_slot6 = var11;
    var6 = var6.getVisibleGuildIdsMethod;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.jsx;
    var _closure1_slot13 = var6;
    var5 = var5.Set;
    var6 = var5.prototype;
    var6 = Object.create(var6, {constructor: {value: var5}});
    var15 = var6;
    var5 = new var15[var5](var14);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot14 = var5;
    var5 = function() {
        var4 = _closure1_slot4;
        var3 = function QuestContentImpression(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var10 = var2.questOrQuests;
                var11 = var2.questContent;
                var6 = var2.triggeredByStatusChange;
                var7 = var2.trackGuildAndChannelMetadata;
                var9 = var2.questContentPosition;
                var5 = var2.questContentRowIndex;
                var8 = var2.minViewTimeSeconds;
                var1 = undefined;
                if(!(var8 === var1)) { _fun0002_ip = 63; continue _fun0002 }
 60:
                var8 = 1;
 63:
                var4 = var2.isQuestEnrollmentBlocked;
                var2 = var2.sourceQuestContent;
                var15 = _closure1_slot3;
                var14 = _closure2_slot0;
                var14 = var15.bind(var1)(var3, var14);
                var14 = false;
                var3['isRunning'] = var14;
                var14 = function() {
                    var1 = _closure3_slot0;
                    var3 = var1.quests;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var8 = arg1;
                            var _closure5_slot0 = var8;
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 10;
                            var4 = var7[var1];
                            var1 = undefined;
                            var5 = var9.bind(var1)(var4);
                            var4 = var5.getQuestLogger;
                            var14 = var4.bind(var5)();
                            var13 = var14.info;
                            var4 = var8.config;
                            var4 = var4.messages;
                            var18 = var4.questName;
                            var6 = _closure3_slot0;
                            var21 = var6.minViewTimeSeconds;
                            var4 = 11;
                            var4 = var7[var4];
                            var11 = var9.bind(var1)(var4);
                            var10 = var11.getQuestContentName;
                            var4 = var6.questContent;
                            var19 = var10.bind(var11)(var4);
                            var4 = global;
                            var10 = var4.HermesInternal;
                            var15 = var10.concat;
                            var11 = '';
                            var22 = ' Quest viewed for at least ';
                            var20 = 's at ';
                            var24 = var11;
                            var23 = var18;
                            var12 = var24[var15](var23, var22, var21, var20, var19, var18);
                            var10 = {};
                            var15 = var6.id;
                            var10['impressionId'] = var15;
                            var10 = var13.bind(var14)(var12, var10);
                            var10 = false;
                            var _closure5_slot1 = var10;
                            var10 = 12;
                            var7 = var7[var10];
                            var9 = var9.bind(var1)(var7);
                            var7 = var9.getQuestPlacementFromQuestContent;
                            var6 = var6.questContent;
                            var9 = var7.bind(var9)(var6);
                            var6 = null;
                            if(!(var6 != var9)) { _fun0003_ip = 313; continue _fun0003 }
 207:
                            var7 = var8.id;
                            var4 = var4.HermesInternal;
                            var6 = var4.concat;
                            var4 = '_';
                            var7 = var6.bind(var11)(var7, var4, var9);
                            var6 = _closure1_slot14;
                            var4 = var6.has;
                            var4 = var4.bind(var6)(var7);
                            var4 = !var4;
                            if(!var4) { _fun0003_ip = 292; continue _fun0003 }
 254:
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var10];
                            var10 = var9.bind(var1)(var6);
                            var9 = var10.isBillableQuestContent;
                            var6 = _closure3_slot0;
                            var6 = var6.questContent;
                            var4 = var9.bind(var10)(var6);
 292:
                            _closure5_slot1 = var4;
                            if(!var4) { _fun0003_ip = 313; continue _fun0003 }
 299:
                            var6 = _closure1_slot14;
                            var4 = var6.add;
                            var4 = var4.bind(var6)(var7);
 313:
                            var4 = {};
                            var7 = _closure3_slot0;
                            var5 = var7.minViewTimeSeconds;
                            var4['min_view_time_seconds'] = var5;
                            var5 = var7.minViewportPercentage;
                            var4['min_viewport_percentage'] = var5;
                            var5 = var7.triggeredByStatusChange;
                            var4['triggered_by_status_change'] = var5;
                            var9 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var6 = 13;
                            var6 = var5[var6];
                            var6 = var9.bind(var1)(var6);
                            var22 = var6.bind(var1)();
                            var23 = var4;
                            var6 = copyDataProperties(var23, var22);
                            var6 = var7.commonProperties;
                            var22 = var6.bind(var7)(var8);
                            var23 = var4;
                            var6 = copyDataProperties(var23, var22);
                            var6 = var7.getBrandSafetyContext;
                            var22 = var6.bind(var7)();
                            var23 = var4;
                            var6 = copyDataProperties(var23, var22);
                            var _closure5_slot2 = var4;
                            var4 = _closure1_slot0;
                            var3 = 14;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getAdUser;
                            var4 = var3.bind(var4)();
                            var3 = var4.then;
                            var2 = function(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    var1 = arg1;
                                    var2 = null;
                                    if(!(var2 != var1)) { _fun0004_ip = 120; continue _fun0004 }
 9:
                                    var6 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var5 = 15;
                                    var3 = var3[var5];
                                    var4 = undefined;
                                    var6 = var6.bind(var4)(var3);
                                    var3 = var6.isIOS;
                                    var3 = var3.bind(var6)();
                                    if(var3) { _fun0004_ip = 99; continue _fun0004 }
 47:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var2 = var2[var5];
                                    var3 = var3.bind(var4)(var2);
                                    var2 = var3.isAndroid;
                                    var2 = var2.bind(var3)();
                                    if(!var2) { _fun0004_ip = 120; continue _fun0004 }
 76:
                                    var3 = _closure5_slot2;
                                    var2 = var1.advertisingId;
                                    var3['android_advertising_id'] = var2;
                                    _fun0004_ip = 120; continue _fun0004;
 99:
                                    var2 = _closure5_slot2;
                                    var1 = var1.advertisingId;
                                    var2['apple_advertising_id'] = var1;
 120:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 11;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.trackQuestEvent;
                                    var2 = {};
                                    var7 = _closure5_slot0;
                                    var7 = var7.id;
                                    var2['questId'] = var7;
                                    var5 = _closure1_slot12;
                                    var5 = var5.QUEST_CONTENT_VIEWED;
                                    var2['event'] = var5;
                                    var5 = _closure3_slot0;
                                    var7 = var5.trackGuildAndChannelMetadata;
                                    var2['trackGuildAndChannelMetadata'] = var7;
                                    var7 = _closure5_slot2;
                                    var2['properties'] = var7;
                                    var6 = _closure5_slot1;
                                    var2['shouldExtendSession'] = var6;
                                    var5 = var5.sourceQuestContent;
                                    var2['sourceQuestContent'] = var5;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var3['onMinViewTimeReached'] = var14;
                var14 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = arguments[0];
                        var1 = undefined;
                        if(!(var3 === var1)) { _fun0005_ip = 13; continue _fun0005 }
 11:
                        var3 = false;
 13:
                        var _closure4_slot0 = var3;
                        var3 = _closure3_slot0;
                        var5 = var3.quests;
                        var4 = var5.forEach;
                        var2 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var7 = arg1;
                                var1 = _closure3_slot0;
                                var2 = var1.lastBeatTime;
                                var1 = null;
                                if(!(var1 != var2)) { _fun0006_ip = 354; continue _fun0006 }
 25:
                                var1 = global;
                                var5 = var1.Math;
                                var3 = var5.round;
                                var6 = var1.Date;
                                var2 = var6.now;
                                var6 = var2.bind(var6)();
                                var2 = _closure3_slot0;
                                var2 = var2.lastBeatTime;
                                var2 = var6 - var2;
                                var6 = var3.bind(var5)(var2);
                                var8 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 10;
                                var2 = var3[var2];
                                var3 = undefined;
                                var8 = var8.bind(var3)(var2);
                                var2 = var8.getQuestLogger;
                                var10 = var2.bind(var8)();
                                var9 = var10.info;
                                var2 = var7.config;
                                var2 = var2.messages;
                                var15 = var2.questName;
                                var2 = _closure4_slot0;
                                var14 = '';
                                var13 = var14;
                                if(!var2) { _fun0006_ip = 153; continue _fun0006 }
 147:
                                var13 = 'terminal ';
 153:
                                var1 = var1.HermesInternal;
                                var12 = var1.concat;
                                var20 = ' Quest impression ';
                                var18 = 'heartbeat: ';
                                var16 = 'ms since last heartbeat';
                                var22 = var14;
                                var21 = var15;
                                var19 = var13;
                                var17 = var6;
                                var2 = var22[var12](var21, var20, var19, var18, var17, var16, var15);
                                var1 = {};
                                var4 = _closure3_slot0;
                                var11 = var4.id;
                                var1['impressionId'] = var11;
                                var1 = var9.bind(var10)(var2, var1);
                                var2 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var1 = 11;
                                var1 = var9[var1];
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.trackQuestEvent;
                                var1 = {};
                                var9 = var7.id;
                                var1['questId'] = var9;
                                var5 = _closure1_slot12;
                                var5 = var5.QUEST_CONTENT_VIEW_TIME;
                                var1['event'] = var5;
                                var5 = {};
                                var8 = _closure4_slot0;
                                var5['is_termination_beat'] = var8;
                                var5['viewed_time_ms'] = var6;
                                var6 = var4.triggeredByStatusChange;
                                var5['triggered_by_status_change'] = var6;
                                var6 = var4.commonProperties;
                                var20 = var6.bind(var4)(var7);
                                var21 = var5;
                                var6 = copyDataProperties(var21, var20);
                                var1['properties'] = var5;
                                var5 = var4.trackGuildAndChannelMetadata;
                                var1['trackGuildAndChannelMetadata'] = var5;
                                var4 = var4.sourceQuestContent;
                                var1['sourceQuestContent'] = var4;
                                var1 = var2.bind(var3)(var1);
 354:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var2);
                        var2 = global;
                        var4 = var2.Date;
                        var2 = var4.now;
                        var2 = var2.bind(var4)();
                        var3['lastBeatTime'] = var2;
                        return var1;
                    }
                };
                var3['beat'] = var14;
                var14 = function(arg1) {
                    var9 = arg1;
                    var1 = {};
                    var2 = _closure3_slot0;
                    var3 = var2.id;
                    var1['impression_id'] = var3;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 12;
                    var3 = var6[var3];
                    var4 = undefined;
                    var10 = var5.bind(var4)(var3);
                    var8 = var10.getAdDecisionData;
                    var7 = var9.id;
                    var3 = var2.questContent;
                    var12 = var8.bind(var10)(var7, var3);
                    var13 = var1;
                    var3 = copyDataProperties(var13, var12);
                    var7 = var2.isQuestEnrollmentBlocked;
                    var3 = 'is_quest_enrollment_blocked';
                    var1[var3] = var7;
                    var3 = 11;
                    var7 = var6[var3];
                    var8 = var5.bind(var4)(var7);
                    var7 = var8.getQuestStatus;
                    var8 = var7.bind(var8)(var9);
                    var7 = 'quest_status';
                    var1[var7] = var8;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.getContentProperties;
                    var4 = var2.questContent;
                    var3 = var2.questContentPosition;
                    var2 = var2.questContentRowIndex;
                    var12 = var5.bind(var6)(var4, var3, var2);
                    var13 = var1;
                    var2 = copyDataProperties(var13, var12);
                    return var1;
                };
                var3['commonProperties'] = var14;
                var14 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.triggeredByStatusChange;
                    var2 = _closure3_slot0;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot0;
                    var1 = {};
                    var5 = var2.questContent;
                    var1['questContent'] = var5;
                    var5 = var2.quests;
                    var1['questOrQuests'] = var5;
                    var5 = var2.questContentRowIndex;
                    var1['questContentRowIndex'] = var5;
                    var5 = var2.questContentPosition;
                    var1['questContentPosition'] = var5;
                    var5 = var2.trackGuildAndChannelMetadata;
                    var1['trackGuildAndChannelMetadata'] = var5;
                    var1['triggeredByStatusChange'] = var4;
                    var4 = var2.isQuestEnrollmentBlocked;
                    var1['isQuestEnrollmentBlocked'] = var4;
                    var2 = var2.sourceQuestContent;
                    var1['sourceQuestContent'] = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var7 = var2;
                    var6 = var1;
                    var1 = new var7[var3](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var3['clone'] = var14;
                var14 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = _closure3_slot0;
                        var5 = var3.stop;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        var6 = global;
                        var5 = var6.Date;
                        var4 = var5.now;
                        var4 = var4.bind(var5)();
                        var3['lastBeatTime'] = var4;
                        var8 = var6.window;
                        var7 = var8.setInterval;
                        var5 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.beat;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var4 = 60000;
                        var4 = var7.bind(var8)(var5, var4);
                        var3['heartbeatTimeoutId'] = var4;
                        var8 = var6.window;
                        var7 = var8.setTimeout;
                        var5 = var3.onMinViewTimeReached;
                        var9 = var3.minViewTimeSeconds;
                        var4 = 1000;
                        var4 = var4 * var9;
                        var4 = var7.bind(var8)(var5, var4);
                        var3['minViewTimeReachedTimeoutId'] = var4;
                        var4 = var3.quests;
                        var3 = var4.forEach;
                        var1 = function(arg1) {
                            var8 = arg1;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 10;
                            var2 = var4[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var2 = var5.getQuestLogger;
                            var11 = var2.bind(var5)();
                            var10 = var11.info;
                            var2 = var8.config;
                            var2 = var2.messages;
                            var14 = var2.questName;
                            var2 = 11;
                            var5 = var4[var2];
                            var12 = var3.bind(var1)(var5);
                            var9 = var12.getQuestContentName;
                            var5 = _closure3_slot0;
                            var7 = var5.questContent;
                            var13 = var9.bind(var12)(var7);
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var12 = var7.concat;
                            var9 = '';
                            var7 = ' Quest became visible at ';
                            var9 = var12.bind(var9)(var14, var7, var13);
                            var7 = {};
                            var12 = var5.id;
                            var7['impressionId'] = var12;
                            var7 = var10.bind(var11)(var9, var7);
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.trackQuestEvent;
                            var2 = {};
                            var7 = var8.id;
                            var2['questId'] = var7;
                            var6 = _closure1_slot12;
                            var6 = var6.QUEST_CONTENT_LOADED;
                            var2['event'] = var6;
                            var6 = {};
                            var7 = var5.triggeredByStatusChange;
                            var6['triggered_by_status_change'] = var7;
                            var7 = var5.commonProperties;
                            var16 = var7.bind(var5)(var8);
                            var17 = var6;
                            var7 = copyDataProperties(var17, var16);
                            var2['properties'] = var6;
                            var6 = var5.trackGuildAndChannelMetadata;
                            var2['trackGuildAndChannelMetadata'] = var6;
                            var5 = var5.sourceQuestContent;
                            var2['sourceQuestContent'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var1 = var3.bind(var4)(var1);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.isEligibleForQuestsClientMonitoring;
                        var3 = 'QuestImpressionTracker';
                        var3 = var4.bind(var5)(var3);
                        if(!var3) { _fun0007_ip = 331; continue _fun0007 }
 198:
                        var4 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 17;
                        var3 = var9[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.increment;
                        var3 = {};
                        var8 = _closure1_slot0;
                        var7 = 18;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.MetricEvents;
                        var7 = var7.QUEST_CONTENT_IMPRESSION;
                        var3['name'] = var7;
                        var7 = 11;
                        var7 = var9[var7];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.getQuestContentName;
                        var7 = _closure3_slot0;
                        var7 = var7.questContent;
                        var8 = var8.bind(var9)(var7);
                        var6 = var6.HermesInternal;
                        var7 = var6.concat;
                        var6 = 'quest_content:';
                        var7 = var7.bind(var6)(var8);
                        var6 = new Array(1);
                        var6[0] = var7;
                        var3['tags'] = var6;
                        var3 = var4.bind(var5)(var3);
 331:
                        var3 = _closure3_slot0;
                        var2 = true;
                        var3['isRunning'] = var2;
                        return var1;
                    }
                };
                var3['start'] = var14;
                var13 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0008_ip = 11; continue _fun0008 }
 9:
                        var2 = true;
 11:
                        if(!var2) { _fun0008_ip = 34; continue _fun0008 }
 14:
                        var4 = _closure3_slot0;
                        var3 = var4.beat;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
 34:
                        var3 = _closure3_slot0;
                        var3['lastBeatTime'] = var1;
                        var2 = global;
                        var5 = var2.clearInterval;
                        var4 = var3.heartbeatTimeoutId;
                        var4 = var5.bind(var1)(var4);
                        var4 = var2.clearTimeout;
                        var2 = var3.minViewTimeReachedTimeoutId;
                        var2 = var4.bind(var1)(var2);
                        var2 = false;
                        var3['isRunning'] = var2;
                        return var1;
                    }
                };
                var3['stop'] = var13;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 19;
                var12 = var14[var12];
                var13 = var13.bind(var1)(var12);
                var12 = var13.v4;
                var12 = var12.bind(var13)();
                var3['id'] = var12;
                var3['questContent'] = var11;
                var3['questContentPosition'] = var9;
                var3['minViewTimeSeconds'] = var8;
                var8 = 0.5;
                var3['minViewportPercentage'] = var8;
                var8 = global;
                var9 = var8.Array;
                var8 = var9.isArray;
                var9 = var8.bind(var9)(var10);
                var8 = var10;
                if(var9) { _fun0002_ip = 286; continue _fun0002 }
 275:
                var9 = new Array(1);
                var9[0] = var10;
                var8 = var9;
 286:
                var3['quests'] = var8;
                var3['trackGuildAndChannelMetadata'] = var7;
                var3['triggeredByStatusChange'] = var6;
                var3['questContentRowIndex'] = var5;
                var3['isQuestEnrollmentBlocked'] = var4;
                var3['sourceQuestContent'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getId';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1.id;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'getQuestContentPosition';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.questContentPosition;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getBrandSafetyContext';
        var1['key'] = var6;
        var5 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = this;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 20;
                var1 = var9[var1];
                var7 = undefined;
                var4 = var8.bind(var7)(var1);
                var2 = var4.getIsEligibleForQuestBrandSafetyContext;
                var1 = var3.questContent;
                var2 = var2.bind(var4)(var1);
                var4 = 12;
                var1 = var9[var4];
                var11 = var8.bind(var7)(var1);
                var10 = var11.isBillableQuestContent;
                var1 = var3.questContent;
                var1 = var10.bind(var11)(var1);
                var4 = var9[var4];
                var8 = var8.bind(var7)(var4);
                var4 = var8.getAdContext;
                var3 = var3.questContent;
                var3 = var4.bind(var8)(var3);
                var4 = _closure1_slot7;
                var9 = var4.bind(var7)();
                var4 = _closure1_slot6;
                var8 = var4.bind(var7)();
                if(!var2) { _fun0009_ip = 581; continue _fun0009 }
 124:
                var2 = null;
                if(!(var2 != var3)) { _fun0009_ip = 581; continue _fun0009 }
 133:
                var3 = var3.is_campaign_ias_enabled;
                if(!var3) { _fun0009_ip = 581; continue _fun0009 }
 147:
                if(!var1) { _fun0009_ip = 581; continue _fun0009 }
 153:
                if(!(var7 !== var9)) { _fun0009_ip = 581; continue _fun0009 }
 160:
                if(!(var7 !== var8)) { _fun0009_ip = 581; continue _fun0009 }
 167:
                var3 = _closure1_slot10;
                var1 = var3.getGuildId;
                var1 = var1.bind(var3)();
                var4 = var2 != var1;
                var3 = null;
                if(!var4) { _fun0009_ip = 204; continue _fun0009 }
 190:
                var10 = _closure1_slot9;
                var4 = var10.getGuild;
                var3 = var4.bind(var10)(var1);
 204:
                var4 = {};
                var11 = var9.bind(var7)();
                var10 = _closure1_slot9;
                var9 = var10.getGuilds;
                var9 = var9.bind(var10)();
                var _closure3_slot0 = var9;
                var10 = var11.map;
                var9 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var7 = var2[var1];
                        var6 = undefined;
                        if(!(var6 !== var7)) { _fun0010_ip = 168; continue _fun0010 }
 23:
                        var1 = {};
                        var2 = var7.id;
                        var1['id'] = var2;
                        var2 = var7.name;
                        var1['name'] = var2;
                        var2 = var7.description;
                        var3 = null;
                        if(!(var3 !== var2)) { _fun0010_ip = 65; continue _fun0010 }
 54:
                        var2 = var7.description;
                        var1['description'] = var2;
 65:
                        var4 = var7.icon;
                        var2 = null;
                        if(!(var3 !== var4)) { _fun0010_ip = 156; continue _fun0010 }
 76:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 21;
                        var4 = var8[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.getGuildIconURL;
                        var4 = {};
                        var8 = var7.id;
                        var4['id'] = var8;
                        var7 = var7.icon;
                        var4['icon'] = var7;
                        var7 = 44;
                        var4['size'] = var7;
                        var7 = true;
                        var4['canAnimate'] = var7;
                        var4 = var5.bind(var6)(var4);
                        var5 = var3 != var4;
                        var2 = null;
                        if(!var5) { _fun0010_ip = 156; continue _fun0010 }
 153:
                        var2 = var4;
 156:
                        if(!(var3 !== var2)) { _fun0010_ip = 166; continue _fun0010 }
 160:
                        var1['icon_url'] = var2;
 166:
                        return var1;
 168:
                        var1 = null;
                        return var1;
                    }
                };
                var11 = var10.bind(var11)(var9);
                var10 = var11.filter;
                var9 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 !== var1;
                    return var1;
                };
                var9 = var10.bind(var11)(var9);
                var4['guilds'] = var9;
                if(!(var2 != var3)) { _fun0009_ip = 311; continue _fun0009 }
 271:
                var10 = var8.bind(var7)();
                var9 = var10.map;
                var8 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var3 = _closure1_slot8;
                        var2 = var3.getChannel;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = undefined;
                        if(!(var1 !== var2)) { _fun0011_ip = 79; continue _fun0011 }
 26:
                        var1 = {};
                        var3 = var2.id;
                        var1['id'] = var3;
                        var3 = var2.name;
                        var1['name'] = var3;
                        var3 = var2.topic;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0011_ip = 77; continue _fun0011 }
 63:
                        var2 = var2.topic;
                        var1['channel_topic'] = var2;
 77:
                        return var1;
 79:
                        var1 = null;
                        return var1;
                    }
                };
                var9 = var9.bind(var10)(var8);
                var8 = var9.filter;
                var6 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 !== var1;
                    return var1;
                };
                var6 = var8.bind(var9)(var6);
                _fun0009_ip = 315; continue _fun0009;
 311:
                var6 = new Array(0);
 315:
                var4['channels'] = var6;
                if(!(var2 != var1)) { _fun0009_ip = 330; continue _fun0009 }
 324:
                var4['selected_guild_id'] = var1;
 330:
                var1 = var2 == var3;
                var6 = undefined;
                if(var1) { _fun0009_ip = 345; continue _fun0009 }
 339:
                var6 = var3.banner;
 345:
                var1 = null;
                if(!(var2 !== var6)) { _fun0009_ip = 440; continue _fun0009 }
 351:
                var8 = var2 == var3;
                var6 = undefined;
                if(var8) { _fun0009_ip = 366; continue _fun0009 }
 360:
                var6 = var3.banner;
 366:
                var1 = null;
                if(!(var7 !== var6)) { _fun0009_ip = 440; continue _fun0009 }
 372:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 21;
                var5 = var8[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.getGuildBannerURL;
                var5 = {};
                var8 = var3.id;
                var5['id'] = var8;
                var3 = var3.banner;
                var5['banner'] = var3;
                var3 = true;
                var3 = var6.bind(var7)(var5, var3);
                var5 = var2 != var3;
                var1 = null;
                if(!var5) { _fun0009_ip = 440; continue _fun0009 }
 437:
                var1 = var3;
 440:
                if(!(var2 !== var1)) { _fun0009_ip = 452; continue _fun0009 }
 444:
                var4['selected_guild_banner_url'] = var1;
 452:
                var1 = var4.guilds;
                var1 = var1.length;
                var5 = 100;
                if(!(var1 > var5)) { _fun0009_ip = 503; continue _fun0009 }
 470:
                var3 = var4.guilds;
                var2 = var3.slice;
                var1 = 0;
                var1 = var2.bind(var3)(var1, var5);
                var4['guilds'] = var1;
                var1 = true;
                var4['truncated'] = var1;
 503:
                var1 = var4.channels;
                var1 = var1.length;
                if(!(var1 > var5)) { _fun0009_ip = 551; continue _fun0009 }
 518:
                var3 = var4.channels;
                var2 = var3.slice;
                var1 = 0;
                var1 = var2.bind(var3)(var1, var5);
                var4['channels'] = var1;
                var1 = true;
                var4['truncated'] = var1;
 551:
                var1 = {};
                var2 = global;
                var3 = var2.JSON;
                var2 = var3.stringify;
                var2 = var2.bind(var3)(var4);
                var1['brand_safety_context'] = var2;
                return var1;
 581:
                var1 = null;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5 = var5.bind(var1)();
    var _closure1_slot15 = var5;
    var6 = var9.createContext;
    var6 = var6.bind(var9)(var1);
    var _closure1_slot16 = var6;
    var6 = 25;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/QuestContentImpressionTracker.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = 0.5;
    var3['MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE'] = var6;
    var3['QuestContentImpression'] = var5;
    var5 = function(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var3 = arg1;
            var1 = global;
            var4 = var1.Array;
            var2 = var4.isArray;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0012_ip = 31; continue _fun0012 }
 24:
            var5 = var3.id;
            _fun0012_ip = 74; continue _fun0012;
 31:
            var2 = var3.sort;
            var4 = var2.bind(var3)();
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.join;
            var2 = '_';
            var5 = var3.bind(var4)(var2);
 74:
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var2 = '_';
            var1 = arg2;
            var1 = var4.bind(var3)(var5, var2, var1);
            return var1;
        }
    };
    var3['getQuestContentImpressionTrackerKey'] = var5;
    var3['useQuestImpression'] = var4;
    var4 = function useQuestImpressionId() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = _closure1_slot17;
            var1 = undefined;
            var3 = var2.bind(var1)();
            var2 = null;
            var2 = var2 == var3;
            if(var2) { _fun0013_ip = 32; continue _fun0013 }
 22:
            var2 = var3.getId;
            var1 = var2.bind(var3)();
 32:
            return var1;
        }
    };
    var3['useQuestImpressionId'] = var4;
    var2 = function QuestContentImpressionTrackerInner(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var15 = var8.visible;
            var _closure2_slot1 = var15;
            var13 = var8.visibleChanged;
            var _closure2_slot2 = var13;
            var16 = var8.focused;
            var _closure2_slot3 = var16;
            var7 = var8.reference;
            var14 = var8.focusedChanged;
            var _closure2_slot4 = var14;
            var10 = var8.sourceQuestContent;
            var _closure2_slot5 = var10;
            var4 = var8.questOrQuests;
            var1 = global;
            var3 = var1.Array;
            var1 = var3.isArray;
            var1 = var1.bind(var3)(var4);
            var11 = null;
            var6 = null;
            if(var1) { _fun0014_ip = 134; continue _fun0014 }
 98:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var1 = var3.getQuestStatus;
            var6 = var1.bind(var3)(var4);
 134:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 22;
            var3 = var9[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var6);
            var12 = var6 !== var3;
            var _closure2_slot6 = var12;
            var6 = _closure1_slot5;
            var3 = var6.useRef;
            var6 = var3.bind(var6)(var11);
            var _closure2_slot7 = var6;
            var11 = _closure1_slot0;
            var3 = 23;
            var3 = var9[var3];
            var19 = var11.bind(var4)(var3);
            var18 = var19.useStateFromStores;
            var3 = _closure1_slot11;
            var17 = new Array(1);
            var17[0] = var3;
            var11 = function() {
                var1 = _closure1_slot11;
                var2 = var1.questEnrollmentBlockedUntil;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3 = new Array(0);
            var11 = var18.bind(var19)(var17, var11, var3);
            var _closure2_slot8 = var11;
            var3 = 24;
            var3 = var9[var3];
            var5 = var5.bind(var4)(var3);
            var3 = function() {
                var1 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var2 = _closure2_slot7;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0015_ip = 37; continue _fun0015 }
 18:
                        var1 = _closure2_slot7;
                        var2 = var1.current;
                        var1 = var2.stop;
                        var1 = var1.bind(var2)();
 37:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var9 = _closure1_slot5;
            var5 = var9.useEffect;
            var3 = new Array(13);
            var3[0] = var16;
            var3[1] = var15;
            var3[2] = var14;
            var3[3] = var13;
            var13 = var8.questOrQuests;
            var3[4] = var13;
            var13 = var8.questContent;
            var3[5] = var13;
            var13 = var8.questContentPosition;
            var3[6] = var13;
            var13 = var8.questContentRowIndex;
            var3[7] = var13;
            var13 = var8.trackGuildAndChannelMetadata;
            var3[8] = var13;
            var3[9] = var12;
            var12 = var8.minViewTimeSeconds;
            var3[10] = var12;
            var3[11] = var11;
            var3[12] = var10;
            var2 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var5 = _closure2_slot3;
                    if(!var5) { _fun0016_ip = 14; continue _fun0016 }
 10:
                    var5 = _closure2_slot1;
 14:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0016_ip = 25; continue _fun0016 }
 21:
                    var2 = _closure2_slot4;
 25:
                    if(var2) { _fun0016_ip = 32; continue _fun0016 }
 28:
                    var2 = _closure2_slot6;
 32:
                    if(!var2) { _fun0016_ip = 38; continue _fun0016 }
 35:
                    var2 = var5;
 38:
                    var3 = var2;
                    if(var3) { _fun0016_ip = 64; continue _fun0016 }
 44:
                    var4 = _closure2_slot2;
                    if(var4) { _fun0016_ip = 55; continue _fun0016 }
 51:
                    var4 = _closure2_slot4;
 55:
                    if(!var4) { _fun0016_ip = 61; continue _fun0016 }
 58:
                    var4 = !var5;
 61:
                    var3 = var4;
 64:
                    if(var3) { _fun0016_ip = 71; continue _fun0016 }
 67:
                    var3 = _closure2_slot6;
 71:
                    if(!var3) { _fun0016_ip = 89; continue _fun0016 }
 74:
                    var4 = _closure2_slot7;
                    var5 = var4.current;
                    var4 = null;
                    var3 = var4 != var5;
 89:
                    if(!var3) { _fun0016_ip = 111; continue _fun0016 }
 92:
                    var3 = _closure2_slot7;
                    var4 = var3.current;
                    var3 = var4.stop;
                    var3 = var3.bind(var4)();
 111:
                    if(!var2) { _fun0016_ip = 274; continue _fun0016 }
 117:
                    var3 = _closure2_slot7;
                    var5 = _closure1_slot15;
                    var2 = {};
                    var4 = _closure2_slot0;
                    var6 = var4.questOrQuests;
                    var2['questOrQuests'] = var6;
                    var6 = var4.questContent;
                    var2['questContent'] = var6;
                    var6 = var4.questContentPosition;
                    var2['questContentPosition'] = var6;
                    var6 = var4.questContentRowIndex;
                    var2['questContentRowIndex'] = var6;
                    var6 = _closure2_slot6;
                    var2['triggeredByStatusChange'] = var6;
                    var6 = var4.trackGuildAndChannelMetadata;
                    var2['trackGuildAndChannelMetadata'] = var6;
                    var4 = var4.minViewTimeSeconds;
                    var2['minViewTimeSeconds'] = var4;
                    var4 = _closure2_slot8;
                    var2['isQuestEnrollmentBlocked'] = var4;
                    var4 = _closure2_slot5;
                    var2['sourceQuestContent'] = var4;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var8 = var4;
                    var7 = var2;
                    var2 = new var8[var5](var7, var6);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var3['current'] = var2;
                    var1 = _closure2_slot7;
                    var2 = var1.current;
                    var1 = var2.start;
                    var1 = var1.bind(var2)();
 274:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var9)(var2, var3);
            var3 = _closure1_slot13;
            var1 = _closure1_slot16;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var6;
            var5 = var8.children;
            var5 = var5.bind(var8)(var7, var6);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['QuestContentImpressionTrackerInner'] = var2;
    return var1;
})();