// app/modules/quests/lib/analytics/ContentImpressionTracker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function getQuestPlacementCombinationKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = '_';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var4 = global;
    var10 = var4.Object;
    var6 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var6 = var8[var5];
    var5 = metroImportAll;
    var6 = var5.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var5 = 4;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var9 = var5.HEARTBEAT_SECONDS;
    var _closure1_slot8 = var9;
    var9 = var5.MIN_QUEST_VIEW_TIME_SECONDS;
    var _closure1_slot9 = var9;
    var5 = var5.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot12 = var5;
    var4 = var4.Set;
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var14 = var5;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot13 = var4;
    var4 = function() {
        var4 = _closure1_slot5;
        var3 = function QuestContentImpression(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var3;
                var6 = _closure1_slot4;
                var5 = _closure2_slot0;
                var1 = undefined;
                var5 = var6.bind(var1)(var3, var5);
                var5 = false;
                var3['isRunning'] = var5;
                var5 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var8 = 8;
                        var3 = var1[var8];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.getQuestPlacementFromQuestContent;
                        var3 = _closure3_slot0;
                        var3 = var3.questContent;
                        var6 = var5.bind(var6)(var3);
                        var3 = null;
                        var3 = var3 != var6;
                        if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var7 = var7.bind(var1)(var5);
                        var5 = var7.isBillableQuestContent;
                        var4 = _closure3_slot0;
                        var4 = var4.questContent;
                        var3 = var5.bind(var7)(var4);
case 2:
                        if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var4 = _closure1_slot13;
                        var3 = var4.add;
                        var5 = _closure1_slot16;
                        var2 = arg1;
                        var2 = var5.bind(var1)(var2, var6);
                        var2 = var3.bind(var4)(var2);
case 4:
                        return var1;
                    }
                };
                var3['trackViewedPlacement'] = var5;
                var5 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var6 = 8;
                        var1 = var1[var6];
                        var5 = undefined;
                        var7 = var2.bind(var5)(var1);
                        var4 = var7.getQuestPlacementFromQuestContent;
                        var1 = _closure3_slot0;
                        var1 = var1.questContent;
                        var10 = var4.bind(var7)(var1);
                        var1 = null;
                        var1 = var1 != var10;
                        if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                        var8 = _closure1_slot13;
                        var7 = var8.has;
                        var9 = _closure1_slot16;
                        var4 = arg1;
                        var4 = var9.bind(var5)(var4, var10);
                        var4 = var7.bind(var8)(var4);
                        var1 = !var4;
case 6:
                        if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.isBillableQuestContent;
                        var2 = _closure3_slot0;
                        var2 = var2.questContent;
                        var1 = var3.bind(var4)(var2);
case 7:
                        return var1;
                    }
                };
                var3['shouldExtendSession'] = var5;
                var6 = _closure1_slot3;
                var5 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                            var3 = undefined;
                            var _closure5_slot0 = var3;
                            var _closure5_slot1 = var3;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 8;
                            var2 = var13[var6];
                            var10 = var12.bind(var3)(var2);
                            var9 = var10.getAdMetadataRaw;
                            var2 = _closure3_slot1;
                            var8 = var2.questContent;
                            var11 = var9.bind(var10)(var8);
                            var6 = var13[var6];
                            var9 = var12.bind(var3)(var6);
                            var8 = var9.getAdMetadataSealed;
                            var6 = var2.questContent;
                            var9 = var8.bind(var9)(var6);
                            var6 = 9;
                            var6 = var13[var6];
                            var8 = var12.bind(var3)(var6);
                            var6 = var8.getAdUser;
                            var10 = 10;
                            var10 = var13[var10];
                            var12 = var12.bind(var3)(var10);
                            var10 = var12.getQuestContentName;
                            var2 = var2.questContent;
                            var2 = var10.bind(var12)(var2);
                            var2 = var6.bind(var8)(var2);
                            SaveGenerator(address=151);
case 11:
                            return var2;
case 12:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                            var6 = {};
                            var8 = _closure3_slot1;
                            var10 = var8.trackGuildAndChannelMetadata;
                            var6['trackGuildAndChannelMetadata'] = var10;
                            var10 = var8.sourceQuestContent;
                            var6['sourceQuestContent'] = var10;
                            _closure5_slot0 = var6;
                            var6 = {};
                            var10 = var8.minViewTimeSeconds;
                            var6['min_view_time_seconds'] = var10;
                            var10 = var8.minViewportPercentage;
                            var6['min_viewport_percentage'] = var10;
                            var8 = var8.triggeredByStatusChange;
                            var6['triggered_by_status_change'] = var8;
                            var8 = null;
                            var12 = var8 != var2;
                            var10 = null;
                            if(!var12) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var12 = 11;
                            var12 = var14[var12];
                            var13 = var13.bind(var3)(var12);
                            var12 = var13.isIOS;
                            var12 = var12.bind(var13)();
                            var10 = null;
                            if(!var12) { _fun0004_ip = 15; continue _fun0004 }
case 17:
                            var10 = var2.advertisingId;
case 15:
                            var6['apple_advertising_id'] = var10;
                            var12 = var8 != var2;
                            var10 = null;
                            if(!var12) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var12 = 11;
                            var12 = var14[var12];
                            var13 = var13.bind(var3)(var12);
                            var12 = var13.isAndroid;
                            var12 = var12.bind(var13)();
                            var10 = null;
                            if(!var12) { _fun0004_ip = 18; continue _fun0004 }
case 20:
                            var10 = var2.advertisingId;
case 18:
                            var6['android_advertising_id'] = var10;
                            var12 = var8 != var11;
                            var10 = null;
                            if(!var12) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                            var10 = var11;
case 21:
                            var6['metadata_raw'] = var10;
                            var10 = var8 != var9;
                            var8 = null;
                            if(!var10) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                            var8 = var9;
case 23:
                            var6['metadata_sealed'] = var8;
                            var10 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var8 = 12;
                            var8 = var9[var8];
                            var8 = var10.bind(var3)(var8);
                            var15 = var8.bind(var3)();
                            var16 = var6;
                            var8 = copyDataProperties(var16, var15);
                            var8 = _closure1_slot0;
                            var7 = 13;
                            var7 = var9[var7];
                            var9 = var8.bind(var3)(var7);
                            var8 = var9.getBrandSafetyContext;
                            var5 = _closure3_slot1;
                            var7 = var5.questContent;
                            var15 = var8.bind(var9)(var7);
                            var16 = var6;
                            var7 = copyDataProperties(var16, var15);
                            _closure5_slot1 = var6;
                            var5 = var5.entity;
                            var6 = var5.adContentIds;
                            var5 = var6.forEach;
                            var4 = function(arg1, arg2) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var4 = arg1;
                                    var3 = arg2;
                                    var1 = _closure3_slot1;
                                    var2 = var1.shouldExtendSession;
                                    var15 = var2.bind(var1)(var4);
                                    var2 = var1.trackViewedPlacement;
                                    var2 = var2.bind(var1)(var4);
                                    var1 = var1.entity;
                                    var4 = var1.adCreativeType;
                                    var6 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 14;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var6.bind(var1)(var2);
                                    var2 = var2.AdCreativeType;
                                    var2 = var2.QUEST;
                                    if(!(var4 !== var2)) { _fun0005_ip = 25; continue _fun0005 }
case 8:
                                    var10 = _closure3_slot1;
                                    var2 = var10.entity;
                                    var2 = var2.adContentIds;
                                    var11 = var2[var3];
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 15;
                                    var2 = var6[var2];
                                    var7 = var4.bind(var1)(var2);
                                    var2 = var7.getQuestLogger;
                                    var12 = var2.bind(var7)();
                                    var9 = var12.info;
                                    var22 = var10.minViewTimeSeconds;
                                    var2 = 10;
                                    var2 = var6[var2];
                                    var13 = var4.bind(var1)(var2);
                                    var7 = var13.getQuestContentName;
                                    var2 = var10.questContent;
                                    var20 = var7.bind(var13)(var2);
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var14 = var2.concat;
                                    var25 = '';
                                    var23 = ' ad content viewed for at least ';
                                    var21 = 's at ';
                                    var24 = var11;
                                    var7 = var25[var14](var24, var23, var22, var21, var20, var19);
                                    var2 = {};
                                    var13 = var10.id;
                                    var2['impressionId'] = var13;
                                    var2 = var9.bind(var12)(var7, var2);
                                    var2 = 16;
                                    var2 = var6[var2];
                                    var6 = var4.bind(var1)(var2);
                                    var4 = var6.trackAdContentEvent;
                                    var2 = {};
                                    var23 = _closure5_slot0;
                                    var24 = var2;
                                    var9 = copyDataProperties(var24, var23);
                                    var9 = 'shouldExtendSession';
                                    var2[var9] = var15;
                                    var9 = 'adContentId';
                                    var2[var9] = var11;
                                    var9 = var10.entity;
                                    var11 = var9.adCreativeType;
                                    var9 = 'adCreativeType';
                                    var2[var9] = var11;
                                    var9 = _closure1_slot11;
                                    var11 = var9.QUEST_CONTENT_VIEWED;
                                    var9 = 'event';
                                    var2[var9] = var11;
                                    var9 = {};
                                    var23 = _closure5_slot1;
                                    var24 = var9;
                                    var7 = copyDataProperties(var24, var23);
                                    var7 = var10.commonProperties;
                                    var23 = var7.bind(var10)();
                                    var24 = var9;
                                    var7 = copyDataProperties(var24, var23);
                                    var7 = 'properties';
                                    var2[var7] = var9;
                                    var2 = var4.bind(var6)(var2);
                                    _fun0005_ip = 26; continue _fun0005;
case 25:
                                    var2 = _closure3_slot1;
                                    var2 = var2.entity;
                                    var2 = var2.adContentIds;
                                    var14 = var2[var3];
                                    var3 = _closure1_slot7;
                                    var2 = var3.getQuest;
                                    var11 = var2.bind(var3)(var14);
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 15;
                                    var2 = var4[var2];
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.getQuestLogger;
                                    var6 = var2.bind(var3)();
                                    var4 = var6.info;
                                    var7 = null;
                                    var3 = var7 == var11;
                                    var2 = undefined;
                                    if(var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                                    var3 = var11.config;
                                    var3 = var3.messages;
                                    var2 = var3.questName;
case 27:
                                    var19 = var14;
                                    if(!(var7 != var2)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                                    var19 = var2;
case 29:
                                    var9 = _closure3_slot1;
                                    var22 = var9.minViewTimeSeconds;
                                    var13 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var2 = 10;
                                    var2 = var12[var2];
                                    var10 = var13.bind(var1)(var2);
                                    var3 = var10.getQuestContentName;
                                    var2 = var9.questContent;
                                    var20 = var3.bind(var10)(var2);
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var16 = var2.concat;
                                    var25 = '';
                                    var23 = ' Quest viewed for at least ';
                                    var21 = 's at ';
                                    var24 = var19;
                                    var3 = var25[var16](var24, var23, var22, var21, var20, var19);
                                    var2 = {};
                                    var10 = var9.id;
                                    var2['impressionId'] = var10;
                                    var2 = var4.bind(var6)(var3, var2);
                                    var2 = 16;
                                    var2 = var12[var2];
                                    var4 = var13.bind(var1)(var2);
                                    var3 = var4.trackQuestEvent;
                                    var2 = {};
                                    var23 = _closure5_slot0;
                                    var24 = var2;
                                    var6 = copyDataProperties(var24, var23);
                                    var6 = 'shouldExtendSession';
                                    var2[var6] = var15;
                                    var6 = 'questId';
                                    var2[var6] = var14;
                                    var6 = _closure1_slot11;
                                    var14 = var6.QUEST_CONTENT_VIEWED;
                                    var6 = 'event';
                                    var2[var6] = var14;
                                    var6 = {};
                                    var23 = _closure5_slot1;
                                    var24 = var6;
                                    var10 = copyDataProperties(var24, var23);
                                    var10 = var9.commonProperties;
                                    var23 = var10.bind(var9)(var11);
                                    var24 = var6;
                                    var10 = copyDataProperties(var24, var23);
                                    var10 = 8;
                                    var12 = var12[var10];
                                    var14 = var13.bind(var1)(var12);
                                    var13 = var14.getAdTrafficMetadataRaw;
                                    var12 = var9.questContent;
                                    var15 = var7 == var11;
                                    var9 = undefined;
                                    if(var15) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                                    var9 = var11.id;
case 31:
                                    var9 = var13.bind(var14)(var12, var9);
                                    var13 = var7 != var9;
                                    var12 = null;
                                    if(!var13) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                                    var12 = var9;
case 33:
                                    var9 = 'traffic_metadata_raw';
                                    var6[var9] = var12;
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var8 = var8[var10];
                                    var10 = var9.bind(var1)(var8);
                                    var9 = var10.getAdTrafficMetadataSealed;
                                    var5 = _closure3_slot1;
                                    var8 = var5.questContent;
                                    var12 = var7 == var11;
                                    var5 = undefined;
                                    if(var12) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                                    var5 = var11.id;
case 35:
                                    var5 = var9.bind(var10)(var8, var5);
                                    var8 = var7 != var5;
                                    var7 = null;
                                    if(!var8) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                                    var7 = var5;
case 37:
                                    var5 = 'traffic_metadata_sealed';
                                    var6[var5] = var7;
                                    var5 = 'properties';
                                    var2[var5] = var6;
                                    var2 = var3.bind(var4)(var2);
case 26:
                                    return var1;
                                }
                            };
                            var4 = var5.bind(var6)(var4);
                            return var3;
case 13:
                            return var2;
case 9:
                            return var1;
                        }
                    };
                    return var1;
                };
                var5 = var6.bind(var1)(var5);
                var3['onMinViewTimeReached'] = var5;
                var5 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var7 = arguments[0];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                        var7 = false;
case 39:
                        var _closure4_slot0 = var7;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var4 = _closure3_slot0;
                        var5 = var4.lastBeatTime;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                        var4 = global;
                        var8 = var4.Math;
                        var6 = var8.round;
                        var5 = var4.Date;
                        var4 = var5.now;
                        var9 = var4.bind(var5)();
                        var4 = _closure3_slot0;
                        var5 = var4.lastBeatTime;
                        var5 = var9 - var5;
                        var6 = var6.bind(var8)(var5);
                        _closure4_slot1 = var6;
                        var5 = {};
                        var8 = var4.trackGuildAndChannelMetadata;
                        var5['trackGuildAndChannelMetadata'] = var8;
                        var8 = var4.sourceQuestContent;
                        var5['sourceQuestContent'] = var8;
                        _closure4_slot2 = var5;
                        var5 = {};
                        var5['is_termination_beat'] = var7;
                        var5['viewed_time_ms'] = var6;
                        var6 = var4.triggeredByStatusChange;
                        var5['triggered_by_status_change'] = var6;
                        _closure4_slot3 = var5;
                        var4 = var4.entity;
                        var5 = var4.adContentIds;
                        var4 = var5.forEach;
                        var3 = function(arg1, arg2) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var3 = arg2;
                                var1 = _closure3_slot0;
                                var1 = var1.entity;
                                var4 = var1.adCreativeType;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var5.bind(var1)(var2);
                                var2 = var2.AdCreativeType;
                                var2 = var2.QUEST;
                                if(!(var4 !== var2)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                                var2 = _closure3_slot0;
                                var2 = var2.entity;
                                var2 = var2.adContentIds;
                                var11 = var2[var3];
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 15;
                                var2 = var5[var2];
                                var4 = var4.bind(var1)(var2);
                                var2 = var4.getQuestLogger;
                                var9 = var2.bind(var4)();
                                var5 = var9.info;
                                var2 = _closure4_slot0;
                                var15 = '';
                                var14 = var15;
                                if(!var2) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                                var14 = 'terminal ';
case 45:
                                var18 = _closure4_slot1;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var12 = var2.concat;
                                var21 = ' ad content impression ';
                                var19 = 'heartbeat: ';
                                var17 = 'ms since last heartbeat';
                                var23 = var15;
                                var22 = var11;
                                var20 = var14;
                                var4 = var23[var12](var22, var21, var20, var19, var18, var17, var16);
                                var2 = {};
                                var10 = _closure3_slot0;
                                var12 = var10.id;
                                var2['impressionId'] = var12;
                                var2 = var5.bind(var9)(var4, var2);
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 16;
                                var2 = var5[var2];
                                var5 = var4.bind(var1)(var2);
                                var4 = var5.trackAdContentEvent;
                                var2 = {};
                                var21 = _closure4_slot2;
                                var22 = var2;
                                var9 = copyDataProperties(var22, var21);
                                var9 = 'adContentId';
                                var2[var9] = var11;
                                var9 = var10.entity;
                                var11 = var9.adCreativeType;
                                var9 = 'adCreativeType';
                                var2[var9] = var11;
                                var9 = _closure1_slot11;
                                var11 = var9.QUEST_CONTENT_VIEW_TIME;
                                var9 = 'event';
                                var2[var9] = var11;
                                var9 = {};
                                var21 = _closure4_slot3;
                                var22 = var9;
                                var8 = copyDataProperties(var22, var21);
                                var8 = var10.commonProperties;
                                var21 = var8.bind(var10)();
                                var22 = var9;
                                var8 = copyDataProperties(var22, var21);
                                var8 = 'properties';
                                var2[var8] = var9;
                                var2 = var4.bind(var5)(var2);
                                _fun0007_ip = 47; continue _fun0007;
case 43:
                                var2 = _closure3_slot0;
                                var2 = var2.entity;
                                var2 = var2.adContentIds;
                                var10 = var2[var3];
                                var3 = _closure1_slot7;
                                var2 = var3.getQuest;
                                var8 = var2.bind(var3)(var10);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 15;
                                var2 = var4[var2];
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.getQuestLogger;
                                var9 = var2.bind(var3)();
                                var4 = var9.info;
                                var3 = null;
                                var5 = var3 == var8;
                                var2 = undefined;
                                if(var5) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                                var5 = var8.config;
                                var5 = var5.messages;
                                var2 = var5.questName;
case 48:
                                var16 = var10;
                                if(!(var3 != var2)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                                var16 = var2;
case 50:
                                var2 = _closure4_slot0;
                                var15 = '';
                                var14 = var15;
                                if(!var2) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                                var14 = 'terminal ';
case 52:
                                var18 = _closure4_slot1;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var12 = var2.concat;
                                var21 = ' Quest impression ';
                                var19 = 'heartbeat: ';
                                var17 = 'ms since last heartbeat';
                                var23 = var15;
                                var22 = var16;
                                var20 = var14;
                                var3 = var23[var12](var22, var21, var20, var19, var18, var17, var16);
                                var2 = {};
                                var7 = _closure3_slot0;
                                var11 = var7.id;
                                var2['impressionId'] = var11;
                                var2 = var4.bind(var9)(var3, var2);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 16;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.trackQuestEvent;
                                var2 = {};
                                var21 = _closure4_slot2;
                                var22 = var2;
                                var9 = copyDataProperties(var22, var21);
                                var9 = 'questId';
                                var2[var9] = var10;
                                var6 = _closure1_slot11;
                                var9 = var6.QUEST_CONTENT_VIEW_TIME;
                                var6 = 'event';
                                var2[var6] = var9;
                                var6 = {};
                                var21 = _closure4_slot3;
                                var22 = var6;
                                var5 = copyDataProperties(var22, var21);
                                var5 = var7.commonProperties;
                                var21 = var5.bind(var7)(var8);
                                var22 = var6;
                                var5 = copyDataProperties(var22, var21);
                                var5 = 'properties';
                                var2[var5] = var6;
                                var2 = var3.bind(var4)(var2);
case 47:
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
case 41:
                        var3 = _closure3_slot0;
                        var2 = global;
                        var4 = var2.Date;
                        var2 = var4.now;
                        var2 = var2.bind(var4)();
                        var3['lastBeatTime'] = var2;
                        return var1;
                    }
                };
                var3['beat'] = var5;
                var5 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var7 = arg1;
                        var1 = {};
                        var3 = _closure3_slot0;
                        var4 = var3.id;
                        var1['impression_id'] = var4;
                        var3 = var3.isQuestEnrollmentBlocked;
                        var1['is_quest_enrollment_blocked'] = var3;
                        var3 = null;
                        var4 = var3 == var7;
                        var5 = undefined;
                        var3 = undefined;
                        if(var4) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 10;
                        var4 = var8[var4];
                        var6 = var6.bind(var5)(var4);
                        var4 = var6.getQuestStatus;
                        var3 = var4.bind(var6)(var7);
case 54:
                        var1['quest_status'] = var3;
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 10;
                        var3 = var6[var3];
                        var6 = var4.bind(var5)(var3);
                        var5 = var6.getContentProperties;
                        var2 = _closure3_slot0;
                        var4 = var2.questContent;
                        var3 = var2.questContentPosition;
                        var2 = var2.questContentRowIndex;
                        var10 = var5.bind(var6)(var4, var3, var2);
                        var11 = var1;
                        var2 = copyDataProperties(var11, var10);
                        return var1;
                    }
                };
                var3['commonProperties'] = var5;
                var5 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.triggeredByStatusChange;
                    var2 = _closure3_slot0;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot0;
                    var1 = {};
                    var5 = var2.questContent;
                    var1['questContent'] = var5;
                    var5 = var2.questContentRowIndex;
                    var1['questContentRowIndex'] = var5;
                    var5 = var2.questContentPosition;
                    var1['questContentPosition'] = var5;
                    var5 = var2.trackGuildAndChannelMetadata;
                    var1['trackGuildAndChannelMetadata'] = var5;
                    var1['triggeredByStatusChange'] = var4;
                    var4 = var2.isQuestEnrollmentBlocked;
                    var1['isQuestEnrollmentBlocked'] = var4;
                    var4 = var2.sourceQuestContent;
                    var1['sourceQuestContent'] = var4;
                    var6 = var2.entity;
                    var7 = var1;
                    var2 = copyDataProperties(var7, var6);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var8 = var2;
                    var7 = var1;
                    var1 = new var8[var3](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var3['clone'] = var5;
                var5 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var5 = _closure3_slot0;
                        var4 = var5.stop;
                        var1 = false;
                        var1 = var4.bind(var5)(var1);
                        var6 = global;
                        var4 = var6.Date;
                        var1 = var4.now;
                        var1 = var1.bind(var4)();
                        var5['lastBeatTime'] = var1;
                        var9 = var6.window;
                        var8 = var9.setInterval;
                        var1 = _closure1_slot8;
                        var10 = 1000;
                        var4 = var10 * var1;
                        var1 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.beat;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1 = var8.bind(var9)(var1, var4);
                        var5['heartbeatTimeoutId'] = var1;
                        var9 = var6.window;
                        var8 = var9.setTimeout;
                        var4 = var5.onMinViewTimeReached;
                        var1 = var5.minViewTimeSeconds;
                        var1 = var10 * var1;
                        var1 = var8.bind(var9)(var4, var1);
                        var5['minViewTimeReachedTimeoutId'] = var1;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 8;
                        var10 = var9[var4];
                        var1 = undefined;
                        var12 = var8.bind(var1)(var10);
                        var11 = var12.getAdMetadataRaw;
                        var10 = var5.questContent;
                        var10 = var11.bind(var12)(var10);
                        var4 = var9[var4];
                        var9 = var8.bind(var1)(var4);
                        var8 = var9.getAdMetadataSealed;
                        var4 = var5.questContent;
                        var8 = var8.bind(var9)(var4);
                        var4 = {};
                        var9 = var5.trackGuildAndChannelMetadata;
                        var4['trackGuildAndChannelMetadata'] = var9;
                        var9 = var5.sourceQuestContent;
                        var4['sourceQuestContent'] = var9;
                        var _closure4_slot0 = var4;
                        var4 = {};
                        var5 = var5.triggeredByStatusChange;
                        var4['triggered_by_status_change'] = var5;
                        var5 = null;
                        var11 = var5 != var10;
                        var9 = null;
                        if(!var11) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                        var9 = var10;
case 56:
                        var4['metadata_raw'] = var9;
                        var9 = var5 != var8;
                        var5 = null;
                        if(!var9) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                        var5 = var8;
case 58:
                        var4['metadata_sealed'] = var5;
                        var _closure4_slot1 = var4;
                        var4 = _closure3_slot0;
                        var4 = var4.entity;
                        var5 = var4.adContentIds;
                        var4 = var5.forEach;
                        var3 = function(arg1, arg2) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var3 = arg2;
                                var1 = _closure3_slot0;
                                var1 = var1.entity;
                                var4 = var1.adCreativeType;
                                var6 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var6.bind(var1)(var2);
                                var2 = var2.AdCreativeType;
                                var2 = var2.QUEST;
                                if(!(var4 !== var2)) { _fun0010_ip = 60; continue _fun0010 }
case 44:
                                var10 = _closure3_slot0;
                                var2 = var10.entity;
                                var2 = var2.adContentIds;
                                var11 = var2[var3];
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 15;
                                var2 = var6[var2];
                                var7 = var4.bind(var1)(var2);
                                var2 = var7.getQuestLogger;
                                var12 = var2.bind(var7)();
                                var9 = var12.info;
                                var2 = 10;
                                var2 = var6[var2];
                                var13 = var4.bind(var1)(var2);
                                var7 = var13.getQuestContentName;
                                var2 = var10.questContent;
                                var14 = var7.bind(var13)(var2);
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var13 = var2.concat;
                                var7 = '';
                                var2 = ' ad content became visible at ';
                                var7 = var13.bind(var7)(var11, var2, var14);
                                var2 = {};
                                var13 = var10.id;
                                var2['impressionId'] = var13;
                                var2 = var9.bind(var12)(var7, var2);
                                var2 = 16;
                                var2 = var6[var2];
                                var6 = var4.bind(var1)(var2);
                                var4 = var6.trackAdContentEvent;
                                var2 = {};
                                var18 = _closure4_slot0;
                                var19 = var2;
                                var9 = copyDataProperties(var19, var18);
                                var9 = 'adContentId';
                                var2[var9] = var11;
                                var9 = var10.entity;
                                var11 = var9.adCreativeType;
                                var9 = 'adCreativeType';
                                var2[var9] = var11;
                                var9 = _closure1_slot11;
                                var11 = var9.QUEST_CONTENT_LOADED;
                                var9 = 'event';
                                var2[var9] = var11;
                                var9 = {};
                                var18 = _closure4_slot1;
                                var19 = var9;
                                var7 = copyDataProperties(var19, var18);
                                var7 = var10.commonProperties;
                                var18 = var7.bind(var10)();
                                var19 = var9;
                                var7 = copyDataProperties(var19, var18);
                                var7 = 'properties';
                                var2[var7] = var9;
                                var2 = var4.bind(var6)(var2);
                                _fun0010_ip = 61; continue _fun0010;
case 60:
                                var2 = _closure3_slot0;
                                var2 = var2.entity;
                                var2 = var2.adContentIds;
                                var14 = var2[var3];
                                var3 = _closure1_slot7;
                                var2 = var3.getQuest;
                                var11 = var2.bind(var3)(var14);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 15;
                                var2 = var4[var2];
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.getQuestLogger;
                                var6 = var2.bind(var3)();
                                var4 = var6.info;
                                var7 = null;
                                var3 = var7 == var11;
                                var2 = undefined;
                                if(var3) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                                var3 = var11.config;
                                var3 = var3.messages;
                                var2 = var3.questName;
case 62:
                                var16 = var14;
                                if(!(var7 != var2)) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                                var16 = var2;
case 64:
                                var13 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var2 = 10;
                                var2 = var12[var2];
                                var10 = var13.bind(var1)(var2);
                                var3 = var10.getQuestContentName;
                                var9 = _closure3_slot0;
                                var2 = var9.questContent;
                                var15 = var3.bind(var10)(var2);
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var10 = var2.concat;
                                var3 = '';
                                var2 = ' Quest became visible at ';
                                var3 = var10.bind(var3)(var16, var2, var15);
                                var2 = {};
                                var10 = var9.id;
                                var2['impressionId'] = var10;
                                var2 = var4.bind(var6)(var3, var2);
                                var2 = 16;
                                var2 = var12[var2];
                                var4 = var13.bind(var1)(var2);
                                var3 = var4.trackQuestEvent;
                                var2 = {};
                                var18 = _closure4_slot0;
                                var19 = var2;
                                var6 = copyDataProperties(var19, var18);
                                var6 = 'questId';
                                var2[var6] = var14;
                                var6 = _closure1_slot11;
                                var14 = var6.QUEST_CONTENT_LOADED;
                                var6 = 'event';
                                var2[var6] = var14;
                                var6 = {};
                                var18 = _closure4_slot1;
                                var19 = var6;
                                var10 = copyDataProperties(var19, var18);
                                var10 = var9.commonProperties;
                                var18 = var10.bind(var9)(var11);
                                var19 = var6;
                                var10 = copyDataProperties(var19, var18);
                                var10 = 8;
                                var12 = var12[var10];
                                var14 = var13.bind(var1)(var12);
                                var13 = var14.getAdTrafficMetadataRaw;
                                var12 = var9.questContent;
                                var15 = var7 == var11;
                                var9 = undefined;
                                if(var15) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                                var9 = var11.id;
case 66:
                                var9 = var13.bind(var14)(var12, var9);
                                var13 = var7 != var9;
                                var12 = null;
                                if(!var13) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                                var12 = var9;
case 68:
                                var9 = 'traffic_metadata_raw';
                                var6[var9] = var12;
                                var9 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var8 = var8[var10];
                                var10 = var9.bind(var1)(var8);
                                var9 = var10.getAdTrafficMetadataSealed;
                                var5 = _closure3_slot0;
                                var8 = var5.questContent;
                                var12 = var7 == var11;
                                var5 = undefined;
                                if(var12) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                                var5 = var11.id;
case 70:
                                var5 = var9.bind(var10)(var8, var5);
                                var8 = var7 != var5;
                                var7 = null;
                                if(!var8) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                                var7 = var5;
case 72:
                                var5 = 'traffic_metadata_sealed';
                                var6[var5] = var7;
                                var5 = 'properties';
                                var2[var5] = var6;
                                var2 = var3.bind(var4)(var2);
case 61:
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 17;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.isEligibleForQuestsClientMonitoring;
                        var3 = 'QuestImpressionTracker';
                        var3 = var4.bind(var5)(var3);
                        if(!var3) { _fun0009_ip = 74; continue _fun0009 }
case 22:
                        var4 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 18;
                        var3 = var9[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.increment;
                        var3 = {};
                        var8 = _closure1_slot0;
                        var7 = 19;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.MetricEvents;
                        var7 = var7.QUEST_CONTENT_IMPRESSION;
                        var3['name'] = var7;
                        var7 = 10;
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
case 74:
                        var3 = _closure3_slot0;
                        var2 = true;
                        var3['isRunning'] = var2;
                        return var1;
                    }
                };
                var3['start'] = var5;
                var4 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0011_ip = 40; continue _fun0011 }
case 75:
                        var2 = true;
case 40:
                        if(!var2) { _fun0011_ip = 76; continue _fun0011 }
case 77:
                        var4 = _closure3_slot0;
                        var3 = var4.beat;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
case 76:
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
                var3['stop'] = var4;
                var5 = var2.adContentIds;
                var4 = var2.adCreativeType;
                var15 = var2.questContent;
                var10 = var2.triggeredByStatusChange;
                var11 = var2.trackGuildAndChannelMetadata;
                var14 = var2.questContentPosition;
                var9 = var2.questContentRowIndex;
                var13 = var2.minViewTimeSeconds;
                if(!(var1 === var13)) { _fun0001_ip = 78; continue _fun0001 }
case 79:
                var13 = _closure1_slot9;
case 78:
                var8 = var2.isQuestEnrollmentBlocked;
                var2 = var2.sourceQuestContent;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var16 = 20;
                var16 = var7[var16];
                var17 = var6.bind(var1)(var16);
                var16 = var17.v4;
                var16 = var16.bind(var17)();
                var3['id'] = var16;
                var3['questContent'] = var15;
                var3['questContentPosition'] = var14;
                var3['minViewTimeSeconds'] = var13;
                var12 = _closure1_slot10;
                var3['minViewportPercentage'] = var12;
                var3['trackGuildAndChannelMetadata'] = var11;
                var3['triggeredByStatusChange'] = var10;
                var3['questContentRowIndex'] = var9;
                var3['isQuestEnrollmentBlocked'] = var8;
                var3['sourceQuestContent'] = var2;
                var2 = 14;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.AdCreativeType;
                var2 = var2.QUEST;
                var2 = {};
                var2['adContentIds'] = var5;
                var2['adCreativeType'] = var4;
                var3['entity'] = var2;
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
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'getQuestContentPosition';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var1 = var1.questContentPosition;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5 = var4.bind(var1)();
    var _closure1_slot14 = var5;
    var4 = var6.createContext;
    var4 = var4.bind(var6)(var1);
    var _closure1_slot15 = var4;
    var6 = 24;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/lib/analytics/ContentImpressionTracker.tsx';
    var6 = var7.bind(var8)(var6);
    var3['QuestContentImpression'] = var5;
    var3['QuestImpressionContext'] = var4;
    var2 = function QuestContentImpressionTracker(arg1) {
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
        var5 = _closure1_slot0;
        var17 = _closure1_slot2;
        var3 = 21;
        var3 = var17[var3];
        var4 = undefined;
        var6 = var5.bind(var4)(var3);
        var3 = var6.useQuestStatusChanged;
        var12 = var3.bind(var6)(var8);
        var _closure2_slot6 = var12;
        var9 = _closure1_slot6;
        var6 = var9.useRef;
        var3 = null;
        var6 = var6.bind(var9)(var3);
        var _closure2_slot7 = var6;
        var3 = 22;
        var3 = var17[var3];
        var19 = var5.bind(var4)(var3);
        var18 = var19.useStateFromStores;
        var3 = _closure1_slot7;
        var11 = new Array(1);
        var11[0] = var3;
        var5 = function() {
            var1 = _closure1_slot7;
            var2 = var1.questEnrollmentBlockedUntil;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var3 = new Array(0);
        var11 = var18.bind(var19)(var11, var5, var3);
        var _closure2_slot8 = var11;
        var5 = _closure1_slot1;
        var3 = 23;
        var3 = var17[var3];
        var5 = var5.bind(var4)(var3);
        var3 = function() {
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                    var1 = _closure2_slot7;
                    var2 = var1.current;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
case 80:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var3 = var5.bind(var4)(var3);
        var5 = var9.useEffect;
        var3 = new Array(14);
        var3[0] = var16;
        var3[1] = var15;
        var3[2] = var14;
        var3[3] = var13;
        var13 = var8.adContentIds;
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
        var10 = var8.adCreativeType;
        var3[13] = var10;
        var2 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var5 = _closure2_slot3;
                if(!var5) { _fun0013_ip = 77; continue _fun0013 }
case 82:
                var5 = _closure2_slot1;
case 77:
                var2 = _closure2_slot2;
                if(var2) { _fun0013_ip = 83; continue _fun0013 }
case 84:
                var2 = _closure2_slot4;
case 83:
                if(var2) { _fun0013_ip = 85; continue _fun0013 }
case 86:
                var2 = _closure2_slot6;
case 85:
                if(!var2) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                var2 = var5;
case 87:
                var3 = var2;
                if(var3) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                var4 = _closure2_slot2;
                if(var4) { _fun0013_ip = 91; continue _fun0013 }
case 42:
                var4 = _closure2_slot4;
case 91:
                if(!var4) { _fun0013_ip = 92; continue _fun0013 }
case 3:
                var4 = !var5;
case 92:
                var3 = var4;
case 89:
                if(var3) { _fun0013_ip = 93; continue _fun0013 }
case 94:
                var3 = _closure2_slot6;
case 93:
                if(!var3) { _fun0013_ip = 95; continue _fun0013 }
case 96:
                var4 = _closure2_slot7;
                var5 = var4.current;
                var4 = null;
                var3 = var4 != var5;
case 95:
                if(!var3) { _fun0013_ip = 97; continue _fun0013 }
case 98:
                var3 = _closure2_slot7;
                var4 = var3.current;
                var3 = var4.stop;
                var3 = var3.bind(var4)();
case 97:
                if(!var2) { _fun0013_ip = 99; continue _fun0013 }
case 100:
                var5 = {};
                var2 = _closure2_slot8;
                var5['isQuestEnrollmentBlocked'] = var2;
                var3 = _closure2_slot0;
                var2 = var3.minViewTimeSeconds;
                var5['minViewTimeSeconds'] = var2;
                var2 = var3.questContent;
                var5['questContent'] = var2;
                var2 = var3.questContentPosition;
                var5['questContentPosition'] = var2;
                var2 = var3.questContentRowIndex;
                var5['questContentRowIndex'] = var2;
                var2 = _closure2_slot5;
                var5['sourceQuestContent'] = var2;
                var2 = var3.trackGuildAndChannelMetadata;
                var5['trackGuildAndChannelMetadata'] = var2;
                var2 = _closure2_slot6;
                var5['triggeredByStatusChange'] = var2;
                var2 = var3.adCreativeType;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 14;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var6);
                var4 = var4.AdCreativeType;
                var4 = var4.QUEST;
                var1 = _closure2_slot7;
                var4 = _closure1_slot14;
                var2 = {};
                var9 = var2;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var6 = var3.adContentIds;
                var5 = 'adContentIds';
                var2[var5] = var6;
                var5 = var3.adCreativeType;
                var3 = 'adCreativeType';
                var2[var3] = var5;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var10 = var3;
                var9 = var2;
                var2 = new var10[var4](var9, var8);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['current'] = var2;
                var2 = var1.current;
                var1 = var2.start;
                var1 = var1.bind(var2)();
case 99:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var5.bind(var9)(var2, var3);
        var3 = _closure1_slot12;
        var1 = _closure1_slot15;
        var2 = var1.Provider;
        var1 = {};
        var1['value'] = var6;
        var5 = var8.children;
        var5 = var5.bind(var8)(var7, var6);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['QuestContentImpressionTracker'] = var2;
    return var1;
})();