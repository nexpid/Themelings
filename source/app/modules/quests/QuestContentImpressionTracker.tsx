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
case 0:
            var3 = _closure1_slot5;
            var2 = var3.useContext;
            var1 = _closure1_slot16;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.current;
case 2:
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
case 0:
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
                if(!(var8 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var8 = 1;
case 4:
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
case 0:
                            var4 = arg1;
                            var _closure5_slot0 = var4;
                            var11 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 10;
                            var3 = var10[var1];
                            var1 = undefined;
                            var5 = var11.bind(var1)(var3);
                            var3 = var5.getQuestLogger;
                            var15 = var3.bind(var5)();
                            var14 = var15.info;
                            var3 = var4.config;
                            var3 = var3.messages;
                            var19 = var3.questName;
                            var9 = _closure3_slot0;
                            var22 = var9.minViewTimeSeconds;
                            var8 = 11;
                            var5 = var10[var8];
                            var12 = var11.bind(var1)(var5);
                            var7 = var12.getQuestContentName;
                            var5 = var9.questContent;
                            var20 = var7.bind(var12)(var5);
                            var7 = global;
                            var5 = var7.HermesInternal;
                            var16 = var5.concat;
                            var12 = '';
                            var23 = ' Quest viewed for at least ';
                            var21 = 's at ';
                            var25 = var12;
                            var24 = var19;
                            var13 = var25[var16](var24, var23, var22, var21, var20, var19);
                            var5 = {};
                            var16 = var9.id;
                            var5['impressionId'] = var16;
                            var5 = var14.bind(var15)(var13, var5);
                            var5 = false;
                            var _closure5_slot1 = var5;
                            var5 = 12;
                            var10 = var10[var5];
                            var11 = var11.bind(var1)(var10);
                            var10 = var11.getQuestPlacementFromQuestContent;
                            var9 = var9.questContent;
                            var11 = var10.bind(var11)(var9);
                            var9 = null;
                            if(!(var9 != var11)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var10 = var4.id;
                            var7 = var7.HermesInternal;
                            var9 = var7.concat;
                            var7 = '_';
                            var10 = var9.bind(var12)(var10, var7, var11);
                            var9 = _closure1_slot14;
                            var7 = var9.has;
                            var7 = var7.bind(var9)(var10);
                            var7 = !var7;
                            if(!var7) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var5];
                            var12 = var11.bind(var1)(var9);
                            var11 = var12.isBillableQuestContent;
                            var9 = _closure3_slot0;
                            var9 = var9.questContent;
                            var7 = var11.bind(var12)(var9);
case 8:
                            _closure5_slot1 = var7;
                            if(!var7) { _fun0003_ip = 6; continue _fun0003 }
case 10:
                            var9 = _closure1_slot14;
                            var7 = var9.add;
                            var7 = var7.bind(var9)(var10);
case 6:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var9 = var6[var5];
                            var11 = var7.bind(var1)(var9);
                            var10 = var11.getAdMetadataRaw;
                            var3 = _closure3_slot0;
                            var9 = var3.questContent;
                            var9 = var10.bind(var11)(var9);
                            var _closure5_slot2 = var9;
                            var9 = var6[var5];
                            var11 = var7.bind(var1)(var9);
                            var10 = var11.getAdMetadataSealed;
                            var9 = var3.questContent;
                            var9 = var10.bind(var11)(var9);
                            var _closure5_slot3 = var9;
                            var9 = var6[var5];
                            var12 = var7.bind(var1)(var9);
                            var11 = var12.getAdTrafficMetadataRaw;
                            var10 = var3.questContent;
                            var9 = var4.id;
                            var9 = var11.bind(var12)(var10, var9);
                            var _closure5_slot4 = var9;
                            var5 = var6[var5];
                            var10 = var7.bind(var1)(var5);
                            var9 = var10.getAdTrafficMetadataSealed;
                            var5 = var3.questContent;
                            var4 = var4.id;
                            var4 = var9.bind(var10)(var5, var4);
                            var _closure5_slot5 = var4;
                            var4 = 13;
                            var4 = var6[var4];
                            var5 = var7.bind(var1)(var4);
                            var4 = var5.getAdUser;
                            var6 = var6[var8];
                            var7 = var7.bind(var1)(var6);
                            var6 = var7.getQuestContentName;
                            var3 = var3.questContent;
                            var3 = var6.bind(var7)(var3);
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.then;
                            var2 = function(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    var11 = arg1;
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 11;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.trackQuestEvent;
                                    var2 = {};
                                    var5 = _closure5_slot0;
                                    var5 = var5.id;
                                    var2['questId'] = var5;
                                    var5 = _closure1_slot12;
                                    var5 = var5.QUEST_CONTENT_VIEWED;
                                    var2['event'] = var5;
                                    var9 = _closure3_slot0;
                                    var7 = var9.trackGuildAndChannelMetadata;
                                    var2['trackGuildAndChannelMetadata'] = var7;
                                    var7 = {};
                                    var10 = var9.minViewTimeSeconds;
                                    var7['min_view_time_seconds'] = var10;
                                    var10 = var9.minViewportPercentage;
                                    var7['min_viewport_percentage'] = var10;
                                    var9 = var9.triggeredByStatusChange;
                                    var7['triggered_by_status_change'] = var9;
                                    var9 = null;
                                    var12 = var9 != var11;
                                    var10 = null;
                                    if(!var12) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                                    var13 = _closure1_slot0;
                                    var14 = _closure1_slot2;
                                    var12 = 14;
                                    var12 = var14[var12];
                                    var13 = var13.bind(var1)(var12);
                                    var12 = var13.isIOS;
                                    var12 = var12.bind(var13)();
                                    var10 = null;
                                    if(!var12) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                                    var10 = var11.advertisingId;
case 11:
                                    var7['apple_advertising_id'] = var10;
                                    var12 = var9 != var11;
                                    var10 = null;
                                    if(!var12) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                                    var13 = _closure1_slot0;
                                    var14 = _closure1_slot2;
                                    var12 = 14;
                                    var12 = var14[var12];
                                    var13 = var13.bind(var1)(var12);
                                    var12 = var13.isAndroid;
                                    var12 = var12.bind(var13)();
                                    var10 = null;
                                    if(!var12) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                                    var10 = var11.advertisingId;
case 14:
                                    var7['android_advertising_id'] = var10;
                                    var10 = _closure5_slot2;
                                    var11 = var9 != var10;
                                    var10 = null;
                                    if(!var11) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                                    var10 = _closure5_slot2;
case 17:
                                    var7['metadata_raw'] = var10;
                                    var10 = _closure5_slot3;
                                    var11 = var9 != var10;
                                    var10 = null;
                                    if(!var11) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                                    var10 = _closure5_slot3;
case 19:
                                    var7['metadata_sealed'] = var10;
                                    var10 = _closure5_slot4;
                                    var11 = var9 != var10;
                                    var10 = null;
                                    if(!var11) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                                    var10 = _closure5_slot4;
case 21:
                                    var7['traffic_metadata_raw'] = var10;
                                    var10 = _closure5_slot5;
                                    var10 = var9 != var10;
                                    var9 = null;
                                    if(!var10) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                                    var9 = _closure5_slot5;
case 23:
                                    var7['traffic_metadata_sealed'] = var9;
                                    var9 = _closure1_slot1;
                                    var10 = _closure1_slot2;
                                    var8 = 15;
                                    var8 = var10[var8];
                                    var8 = var9.bind(var1)(var8);
                                    var15 = var8.bind(var1)();
                                    var16 = var7;
                                    var8 = copyDataProperties(var16, var15);
                                    var5 = _closure3_slot0;
                                    var9 = var5.commonProperties;
                                    var8 = _closure5_slot0;
                                    var15 = var9.bind(var5)(var8);
                                    var16 = var7;
                                    var8 = copyDataProperties(var16, var15);
                                    var8 = var5.getBrandSafetyContext;
                                    var15 = var8.bind(var5)();
                                    var16 = var7;
                                    var8 = copyDataProperties(var16, var15);
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
case 0:
                        var3 = arguments[0];
                        var1 = undefined;
                        if(!(var3 === var1)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        var3 = false;
case 25:
                        var _closure4_slot0 = var3;
                        var3 = _closure3_slot0;
                        var5 = var3.quests;
                        var4 = var5.forEach;
                        var2 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var7 = arg1;
                                var1 = _closure3_slot0;
                                var2 = var1.lastBeatTime;
                                var1 = null;
                                if(!(var1 != var2)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
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
                                if(!var2) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                                var13 = 'terminal ';
case 29:
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
case 27:
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
                    var1 = {};
                    var2 = _closure3_slot0;
                    var3 = var2.id;
                    var1['impression_id'] = var3;
                    var3 = var2.isQuestEnrollmentBlocked;
                    var1['is_quest_enrollment_blocked'] = var3;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var7 = var6[var3];
                    var4 = undefined;
                    var9 = var5.bind(var4)(var7);
                    var8 = var9.getQuestStatus;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var1['quest_status'] = var7;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.getContentProperties;
                    var4 = var2.questContent;
                    var3 = var2.questContentPosition;
                    var2 = var2.questContentRowIndex;
                    var11 = var5.bind(var6)(var4, var3, var2);
                    var12 = var1;
                    var2 = copyDataProperties(var12, var11);
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
case 0:
                        var8 = _closure3_slot0;
                        var4 = var8.stop;
                        var1 = false;
                        var1 = var4.bind(var8)(var1);
                        var6 = global;
                        var4 = var6.Date;
                        var1 = var4.now;
                        var1 = var1.bind(var4)();
                        var8['lastBeatTime'] = var1;
                        var7 = var6.window;
                        var5 = var7.setInterval;
                        var4 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.beat;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1 = 60000;
                        var1 = var5.bind(var7)(var4, var1);
                        var8['heartbeatTimeoutId'] = var1;
                        var7 = var6.window;
                        var5 = var7.setTimeout;
                        var4 = var8.onMinViewTimeReached;
                        var9 = var8.minViewTimeSeconds;
                        var1 = 1000;
                        var1 = var1 * var9;
                        var1 = var5.bind(var7)(var4, var1);
                        var8['minViewTimeReachedTimeoutId'] = var1;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var9 = 12;
                        var10 = var5[var9];
                        var1 = undefined;
                        var12 = var4.bind(var1)(var10);
                        var11 = var12.getAdMetadataRaw;
                        var10 = var8.questContent;
                        var10 = var11.bind(var12)(var10);
                        var _closure4_slot0 = var10;
                        var9 = var5[var9];
                        var11 = var4.bind(var1)(var9);
                        var10 = var11.getAdMetadataSealed;
                        var9 = var8.questContent;
                        var9 = var10.bind(var11)(var9);
                        var _closure4_slot1 = var9;
                        var9 = var8.quests;
                        var8 = var9.forEach;
                        var3 = function(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var8 = arg1;
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 12;
                                var5 = var4[var2];
                                var1 = undefined;
                                var12 = var3.bind(var1)(var5);
                                var11 = var12.getAdTrafficMetadataRaw;
                                var7 = _closure3_slot0;
                                var10 = var7.questContent;
                                var9 = var8.id;
                                var11 = var11.bind(var12)(var10, var9);
                                var2 = var4[var2];
                                var12 = var3.bind(var1)(var2);
                                var10 = var12.getAdTrafficMetadataSealed;
                                var9 = var7.questContent;
                                var2 = var8.id;
                                var9 = var10.bind(var12)(var9, var2);
                                var2 = 10;
                                var2 = var4[var2];
                                var10 = var3.bind(var1)(var2);
                                var2 = var10.getQuestLogger;
                                var14 = var2.bind(var10)();
                                var13 = var14.info;
                                var2 = var8.config;
                                var2 = var2.messages;
                                var17 = var2.questName;
                                var2 = 11;
                                var10 = var4[var2];
                                var15 = var3.bind(var1)(var10);
                                var12 = var15.getQuestContentName;
                                var10 = var7.questContent;
                                var16 = var12.bind(var15)(var10);
                                var10 = global;
                                var10 = var10.HermesInternal;
                                var15 = var10.concat;
                                var12 = '';
                                var10 = ' Quest became visible at ';
                                var12 = var15.bind(var12)(var17, var10, var16);
                                var10 = {};
                                var15 = var7.id;
                                var10['impressionId'] = var15;
                                var10 = var13.bind(var14)(var12, var10);
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.trackQuestEvent;
                                var2 = {};
                                var10 = var8.id;
                                var2['questId'] = var10;
                                var6 = _closure1_slot12;
                                var6 = var6.QUEST_CONTENT_LOADED;
                                var2['event'] = var6;
                                var6 = {};
                                var7 = var7.triggeredByStatusChange;
                                var6['triggered_by_status_change'] = var7;
                                var10 = _closure4_slot0;
                                var7 = null;
                                var13 = var7 != var10;
                                var10 = null;
                                if(!var13) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                                var10 = _closure4_slot0;
case 31:
                                var6['metadata_raw'] = var10;
                                var10 = _closure4_slot1;
                                var13 = var7 != var10;
                                var10 = null;
                                if(!var13) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                                var10 = _closure4_slot1;
case 33:
                                var6['metadata_sealed'] = var10;
                                var12 = var7 != var11;
                                var10 = null;
                                if(!var12) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                                var10 = var11;
case 35:
                                var6['traffic_metadata_raw'] = var10;
                                var10 = var7 != var9;
                                var7 = null;
                                if(!var10) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                                var7 = var9;
case 37:
                                var6['traffic_metadata_sealed'] = var7;
                                var5 = _closure3_slot0;
                                var7 = var5.commonProperties;
                                var19 = var7.bind(var5)(var8);
                                var20 = var6;
                                var7 = copyDataProperties(var20, var19);
                                var2['properties'] = var6;
                                var6 = var5.trackGuildAndChannelMetadata;
                                var2['trackGuildAndChannelMetadata'] = var6;
                                var5 = var5.sourceQuestContent;
                                var2['sourceQuestContent'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            }
                        };
                        var3 = var8.bind(var9)(var3);
                        var3 = 16;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.isEligibleForQuestsClientMonitoring;
                        var3 = 'QuestImpressionTracker';
                        var3 = var4.bind(var5)(var3);
                        if(!var3) { _fun0007_ip = 39; continue _fun0007 }
case 40:
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
case 39:
                        var3 = _closure3_slot0;
                        var2 = true;
                        var3['isRunning'] = var2;
                        return var1;
                    }
                };
                var3['start'] = var14;
                var13 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0009_ip = 26; continue _fun0009 }
case 41:
                        var2 = true;
case 26:
                        if(!var2) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                        var4 = _closure3_slot0;
                        var3 = var4.beat;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
case 42:
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
                if(var9) { _fun0002_ip = 20; continue _fun0002 }
case 44:
                var9 = new Array(1);
                var9[0] = var10;
                var8 = var9;
case 20:
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 12;
                var2 = var8[var3];
                var7 = undefined;
                var10 = var5.bind(var7)(var2);
                var9 = var10.isBillableQuestContent;
                var2 = var1.questContent;
                var2 = var9.bind(var10)(var2);
                var3 = var8[var3];
                var5 = var5.bind(var7)(var3);
                var3 = var5.getAdContext;
                var1 = var1.questContent;
                var3 = var3.bind(var5)(var1);
                var1 = _closure1_slot7;
                var9 = var1.bind(var7)();
                var1 = _closure1_slot6;
                var8 = var1.bind(var7)();
                var1 = null;
                if(!(var1 != var3)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                var3 = var3.is_campaign_ias_enabled;
                if(!var3) { _fun0010_ip = 45; continue _fun0010 }
case 47:
                if(!var2) { _fun0010_ip = 45; continue _fun0010 }
case 48:
                if(!(var7 !== var9)) { _fun0010_ip = 45; continue _fun0010 }
case 49:
                if(!(var7 !== var8)) { _fun0010_ip = 45; continue _fun0010 }
case 50:
                var3 = _closure1_slot10;
                var2 = var3.getGuildId;
                var2 = var2.bind(var3)();
                var5 = var1 != var2;
                var3 = null;
                if(!var5) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                var10 = _closure1_slot9;
                var5 = var10.getGuild;
                var3 = var5.bind(var10)(var2);
case 51:
                var5 = {};
                var11 = var9.bind(var7)();
                var10 = _closure1_slot9;
                var9 = var10.getGuilds;
                var9 = var9.bind(var10)();
                var _closure3_slot0 = var9;
                var10 = var11.map;
                var9 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var7 = var2[var1];
                        var6 = undefined;
                        if(!(var6 !== var7)) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                        var1 = {};
                        var2 = var7.id;
                        var1['id'] = var2;
                        var2 = var7.name;
                        var1['name'] = var2;
                        var2 = var7.description;
                        var3 = null;
                        if(!(var3 !== var2)) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                        var2 = var7.description;
                        var1['description'] = var2;
case 55:
                        var4 = var7.icon;
                        var2 = null;
                        if(!(var3 !== var4)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 20;
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
                        if(!var5) { _fun0011_ip = 57; continue _fun0011 }
case 29:
                        var2 = var4;
case 57:
                        if(!(var3 !== var2)) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                        var1['icon_url'] = var2;
case 59:
                        return var1;
case 53:
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
                var5['guilds'] = var9;
                if(!(var1 != var3)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                var10 = var8.bind(var7)();
                var9 = var10.map;
                var8 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = _closure1_slot8;
                        var2 = var3.getChannel;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = undefined;
                        if(!(var1 !== var2)) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                        var1 = {};
                        var3 = var2.id;
                        var1['id'] = var3;
                        var3 = var2.name;
                        var1['name'] = var3;
                        var3 = var2.topic;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0012_ip = 65; continue _fun0012 }
case 4:
                        var2 = var2.topic;
                        var1['channel_topic'] = var2;
case 65:
                        return var1;
case 63:
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
                _fun0010_ip = 66; continue _fun0010;
case 61:
                var6 = new Array(0);
case 66:
                var5['channels'] = var6;
                if(!(var1 != var2)) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                var5['selected_guild_id'] = var2;
case 67:
                var2 = var1 == var3;
                var6 = undefined;
                if(var2) { _fun0010_ip = 69; continue _fun0010 }
case 22:
                var6 = var3.banner;
case 69:
                var2 = null;
                if(!(var1 !== var6)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                var8 = var1 == var3;
                var6 = undefined;
                if(var8) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                var6 = var3.banner;
case 72:
                var2 = null;
                if(!(var7 !== var6)) { _fun0010_ip = 70; continue _fun0010 }
case 74:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 20;
                var4 = var8[var4];
                var7 = var6.bind(var7)(var4);
                var6 = var7.getGuildBannerURL;
                var4 = {};
                var8 = var3.id;
                var4['id'] = var8;
                var3 = var3.banner;
                var4['banner'] = var3;
                var3 = true;
                var3 = var6.bind(var7)(var4, var3);
                var4 = var1 != var3;
                var2 = null;
                if(!var4) { _fun0010_ip = 70; continue _fun0010 }
case 75:
                var2 = var3;
case 70:
                if(!(var1 !== var2)) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                var5['selected_guild_banner_url'] = var2;
case 76:
                var2 = var5.guilds;
                var2 = var2.length;
                var6 = 100;
                if(!(var2 > var6)) { _fun0010_ip = 78; continue _fun0010 }
case 79:
                var4 = var5.guilds;
                var3 = var4.slice;
                var2 = 0;
                var2 = var3.bind(var4)(var2, var6);
                var5['guilds'] = var2;
                var2 = true;
                var5['truncated'] = var2;
case 78:
                var2 = var5.channels;
                var2 = var2.length;
                if(!(var2 > var6)) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                var4 = var5.channels;
                var3 = var4.slice;
                var2 = 0;
                var2 = var3.bind(var4)(var2, var6);
                var5['channels'] = var2;
                var2 = true;
                var5['truncated'] = var2;
case 80:
                var2 = {};
                var3 = global;
                var4 = var3.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var5);
                var2['brand_safety_context'] = var3;
                return var2;
case 45:
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
    var6 = 24;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/QuestContentImpressionTracker.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = 0.5;
    var3['MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE'] = var6;
    var3['QuestContentImpression'] = var5;
    var5 = function(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var1 = global;
            var4 = var1.Array;
            var2 = var4.isArray;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0013_ip = 82; continue _fun0013 }
case 83:
            var5 = var3.id;
            _fun0013_ip = 84; continue _fun0013;
case 82:
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
case 84:
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
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = _closure1_slot17;
            var1 = undefined;
            var3 = var2.bind(var1)();
            var2 = null;
            var2 = var2 == var3;
            if(var2) { _fun0014_ip = 85; continue _fun0014 }
case 86:
            var2 = var3.getId;
            var1 = var2.bind(var3)();
case 85:
            return var1;
        }
    };
    var3['useQuestImpressionId'] = var4;
    var2 = function QuestContentImpressionTrackerInner(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
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
            if(var1) { _fun0015_ip = 87; continue _fun0015 }
case 46:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var1 = var3.getQuestStatus;
            var6 = var1.bind(var3)(var4);
case 87:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 21;
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
            var3 = 22;
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
            var3 = 23;
            var3 = var9[var3];
            var5 = var5.bind(var4)(var3);
            var3 = function() {
                var1 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = _closure2_slot7;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0016_ip = 88; continue _fun0016 }
case 89:
                        var1 = _closure2_slot7;
                        var2 = var1.current;
                        var1 = var2.stop;
                        var1 = var1.bind(var2)();
case 88:
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
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var5 = _closure2_slot3;
                    if(!var5) { _fun0017_ip = 43; continue _fun0017 }
case 90:
                    var5 = _closure2_slot1;
case 43:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0017_ip = 28; continue _fun0017 }
case 91:
                    var2 = _closure2_slot4;
case 28:
                    if(var2) { _fun0017_ip = 85; continue _fun0017 }
case 92:
                    var2 = _closure2_slot6;
case 85:
                    if(!var2) { _fun0017_ip = 2; continue _fun0017 }
case 93:
                    var2 = var5;
case 2:
                    var3 = var2;
                    if(var3) { _fun0017_ip = 94; continue _fun0017 }
case 95:
                    var4 = _closure2_slot2;
                    if(var4) { _fun0017_ip = 96; continue _fun0017 }
case 97:
                    var4 = _closure2_slot4;
case 96:
                    if(!var4) { _fun0017_ip = 98; continue _fun0017 }
case 99:
                    var4 = !var5;
case 98:
                    var3 = var4;
case 94:
                    if(var3) { _fun0017_ip = 100; continue _fun0017 }
case 101:
                    var3 = _closure2_slot6;
case 100:
                    if(!var3) { _fun0017_ip = 102; continue _fun0017 }
case 103:
                    var4 = _closure2_slot7;
                    var5 = var4.current;
                    var4 = null;
                    var3 = var4 != var5;
case 102:
                    if(!var3) { _fun0017_ip = 104; continue _fun0017 }
case 105:
                    var3 = _closure2_slot7;
                    var4 = var3.current;
                    var3 = var4.stop;
                    var3 = var3.bind(var4)();
case 104:
                    if(!var2) { _fun0017_ip = 20; continue _fun0017 }
case 106:
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
case 20:
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