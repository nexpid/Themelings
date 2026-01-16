// app/modules/quests/QuestContentImpressionTracker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
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
    var _closure1_slot18 = var1;
    var4 = function useQuestImpression() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot6;
            var2 = var3.useContext;
            var1 = _closure1_slot17;
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
    var _closure1_slot19 = var4;
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
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var9 = var8[var6];
    var6 = metroImportAll;
    var9 = var6.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var11 = var6.getVisibleChannelIdsMethod;
    var _closure1_slot7 = var11;
    var6 = var6.getVisibleGuildIdsMethod;
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
    var6 = var10.bind(var1)(var6);
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.jsx;
    var _closure1_slot14 = var6;
    var5 = var5.Set;
    var6 = var5.prototype;
    var6 = Object.create(var6, {constructor: {value: var5}});
    var15 = var6;
    var5 = new var15[var5](var14);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot15 = var5;
    var5 = function() {
        var4 = _closure1_slot5;
        var3 = function QuestContentImpression(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var8 = 11;
                        var3 = var1[var8];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.getQuestPlacementFromQuestContent;
                        var3 = _closure3_slot0;
                        var3 = var3.questContent;
                        var6 = var5.bind(var6)(var3);
                        var3 = null;
                        var3 = var3 != var6;
                        if(!var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var8];
                        var7 = var7.bind(var1)(var5);
                        var5 = var7.isBillableQuestContent;
                        var4 = _closure3_slot0;
                        var4 = var4.questContent;
                        var3 = var5.bind(var7)(var4);
case 4:
                        if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var4 = _closure1_slot15;
                        var3 = var4.add;
                        var5 = _closure1_slot18;
                        var2 = arg1;
                        var2 = var5.bind(var1)(var2, var6);
                        var2 = var3.bind(var4)(var2);
case 6:
                        return var1;
                    }
                };
                var3['trackViewedPlacement'] = var5;
                var5 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var6 = 11;
                        var1 = var1[var6];
                        var5 = undefined;
                        var7 = var2.bind(var5)(var1);
                        var4 = var7.getQuestPlacementFromQuestContent;
                        var1 = _closure3_slot0;
                        var1 = var1.questContent;
                        var10 = var4.bind(var7)(var1);
                        var1 = null;
                        var1 = var1 != var10;
                        if(!var1) { _fun0004_ip = 8; continue _fun0004 }
case 5:
                        var8 = _closure1_slot15;
                        var7 = var8.has;
                        var9 = _closure1_slot18;
                        var4 = arg1;
                        var4 = var9.bind(var5)(var4, var10);
                        var4 = var7.bind(var8)(var4);
                        var1 = !var4;
case 8:
                        if(!var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.isBillableQuestContent;
                        var2 = _closure3_slot0;
                        var2 = var2.questContent;
                        var1 = var3.bind(var4)(var2);
case 9:
                        return var1;
                    }
                };
                var3['shouldExtendSession'] = var5;
                var6 = _closure1_slot3;
                var5 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                            var3 = undefined;
                            var _closure5_slot0 = var3;
                            var _closure5_slot1 = var3;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 11;
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
                            var6 = 12;
                            var6 = var13[var6];
                            var8 = var12.bind(var3)(var6);
                            var6 = var8.getAdUser;
                            var10 = 13;
                            var10 = var13[var10];
                            var12 = var12.bind(var3)(var10);
                            var10 = var12.getQuestContentName;
                            var2 = var2.questContent;
                            var2 = var10.bind(var12)(var2);
                            var2 = var6.bind(var8)(var2);
                            SaveGenerator(address=151);
case 13:
                            return var2;
case 14:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0005_ip = 15; continue _fun0005 }
case 16:
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
                            if(!var12) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var12 = 14;
                            var12 = var14[var12];
                            var13 = var13.bind(var3)(var12);
                            var12 = var13.isIOS;
                            var12 = var12.bind(var13)();
                            var10 = null;
                            if(!var12) { _fun0005_ip = 17; continue _fun0005 }
case 19:
                            var10 = var2.advertisingId;
case 17:
                            var6['apple_advertising_id'] = var10;
                            var12 = var8 != var2;
                            var10 = null;
                            if(!var12) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var12 = 14;
                            var12 = var14[var12];
                            var13 = var13.bind(var3)(var12);
                            var12 = var13.isAndroid;
                            var12 = var12.bind(var13)();
                            var10 = null;
                            if(!var12) { _fun0005_ip = 20; continue _fun0005 }
case 22:
                            var10 = var2.advertisingId;
case 20:
                            var6['android_advertising_id'] = var10;
                            var12 = var8 != var11;
                            var10 = null;
                            if(!var12) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                            var10 = var11;
case 23:
                            var6['metadata_raw'] = var10;
                            var10 = var8 != var9;
                            var8 = null;
                            if(!var10) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                            var8 = var9;
case 25:
                            var6['metadata_sealed'] = var8;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 15;
                            var7 = var9[var7];
                            var7 = var8.bind(var3)(var7);
                            var15 = var7.bind(var3)();
                            var16 = var6;
                            var7 = copyDataProperties(var16, var15);
                            var5 = _closure3_slot1;
                            var7 = var5.getBrandSafetyContext;
                            var15 = var7.bind(var5)();
                            var16 = var6;
                            var7 = copyDataProperties(var16, var15);
                            _closure5_slot1 = var6;
                            var5 = var5.entity;
                            var6 = var5.adContentIds;
                            var5 = var6.forEach;
                            var4 = function(arg1, arg2) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                                    var1 = 16;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var6.bind(var1)(var2);
                                    var2 = var2.AdCreativeType;
                                    var2 = var2.QUEST;
                                    if(!(var4 !== var2)) { _fun0006_ip = 25; continue _fun0006 }
case 10:
                                    var10 = _closure3_slot1;
                                    var2 = var10.entity;
                                    var2 = var2.adContentIds;
                                    var11 = var2[var3];
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 17;
                                    var2 = var6[var2];
                                    var7 = var4.bind(var1)(var2);
                                    var2 = var7.getQuestLogger;
                                    var13 = var2.bind(var7)();
                                    var12 = var13.info;
                                    var23 = var10.minViewTimeSeconds;
                                    var2 = 13;
                                    var7 = var6[var2];
                                    var14 = var4.bind(var1)(var7);
                                    var9 = var14.getQuestContentName;
                                    var7 = var10.questContent;
                                    var21 = var9.bind(var14)(var7);
                                    var7 = global;
                                    var7 = var7.HermesInternal;
                                    var16 = var7.concat;
                                    var26 = '';
                                    var24 = ' ad content viewed for at least ';
                                    var22 = 's at ';
                                    var25 = var11;
                                    var9 = var26[var16](var25, var24, var23, var22, var21, var20);
                                    var7 = {};
                                    var14 = var10.id;
                                    var7['impressionId'] = var14;
                                    var7 = var12.bind(var13)(var9, var7);
                                    var2 = var6[var2];
                                    var6 = var4.bind(var1)(var2);
                                    var4 = var6.trackAdContentEvent;
                                    var2 = {};
                                    var24 = _closure5_slot0;
                                    var25 = var2;
                                    var9 = copyDataProperties(var25, var24);
                                    var9 = 'shouldExtendSession';
                                    var2[var9] = var15;
                                    var9 = 'adContentId';
                                    var2[var9] = var11;
                                    var9 = var10.entity;
                                    var11 = var9.adCreativeType;
                                    var9 = 'adCreativeType';
                                    var2[var9] = var11;
                                    var9 = _closure1_slot13;
                                    var11 = var9.QUEST_CONTENT_VIEWED;
                                    var9 = 'event';
                                    var2[var9] = var11;
                                    var9 = {};
                                    var24 = _closure5_slot1;
                                    var25 = var9;
                                    var7 = copyDataProperties(var25, var24);
                                    var7 = var10.commonProperties;
                                    var24 = var7.bind(var10)();
                                    var25 = var9;
                                    var7 = copyDataProperties(var25, var24);
                                    var7 = 'properties';
                                    var2[var7] = var9;
                                    var2 = var4.bind(var6)(var2);
                                    _fun0006_ip = 27; continue _fun0006;
case 25:
                                    var2 = _closure3_slot1;
                                    var2 = var2.entity;
                                    var2 = var2.adContentIds;
                                    var14 = var2[var3];
                                    var3 = _closure1_slot12;
                                    var2 = var3.getQuest;
                                    var11 = var2.bind(var3)(var14);
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 17;
                                    var2 = var4[var2];
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.getQuestLogger;
                                    var10 = var2.bind(var3)();
                                    var6 = var10.info;
                                    var7 = null;
                                    var3 = var7 == var11;
                                    var2 = undefined;
                                    if(var3) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                                    var3 = var11.config;
                                    var3 = var3.messages;
                                    var2 = var3.questName;
case 28:
                                    var20 = var14;
                                    if(!(var7 != var2)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                                    var20 = var2;
case 30:
                                    var9 = _closure3_slot1;
                                    var23 = var9.minViewTimeSeconds;
                                    var13 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var2 = 13;
                                    var3 = var12[var2];
                                    var16 = var13.bind(var1)(var3);
                                    var4 = var16.getQuestContentName;
                                    var3 = var9.questContent;
                                    var21 = var4.bind(var16)(var3);
                                    var3 = global;
                                    var3 = var3.HermesInternal;
                                    var17 = var3.concat;
                                    var26 = '';
                                    var24 = ' Quest viewed for at least ';
                                    var22 = 's at ';
                                    var25 = var20;
                                    var4 = var26[var17](var25, var24, var23, var22, var21, var20);
                                    var3 = {};
                                    var16 = var9.id;
                                    var3['impressionId'] = var16;
                                    var3 = var6.bind(var10)(var4, var3);
                                    var2 = var12[var2];
                                    var4 = var13.bind(var1)(var2);
                                    var3 = var4.trackQuestEvent;
                                    var2 = {};
                                    var24 = _closure5_slot0;
                                    var25 = var2;
                                    var6 = copyDataProperties(var25, var24);
                                    var6 = 'shouldExtendSession';
                                    var2[var6] = var15;
                                    var6 = 'questId';
                                    var2[var6] = var14;
                                    var6 = _closure1_slot13;
                                    var14 = var6.QUEST_CONTENT_VIEWED;
                                    var6 = 'event';
                                    var2[var6] = var14;
                                    var6 = {};
                                    var24 = _closure5_slot1;
                                    var25 = var6;
                                    var10 = copyDataProperties(var25, var24);
                                    var10 = var9.commonProperties;
                                    var24 = var10.bind(var9)(var11);
                                    var25 = var6;
                                    var10 = copyDataProperties(var25, var24);
                                    var10 = 11;
                                    var12 = var12[var10];
                                    var14 = var13.bind(var1)(var12);
                                    var13 = var14.getAdTrafficMetadataRaw;
                                    var12 = var9.questContent;
                                    var15 = var7 == var11;
                                    var9 = undefined;
                                    if(var15) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                                    var9 = var11.id;
case 32:
                                    var9 = var13.bind(var14)(var12, var9);
                                    var13 = var7 != var9;
                                    var12 = null;
                                    if(!var13) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                                    var12 = var9;
case 34:
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
                                    if(var12) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                                    var5 = var11.id;
case 36:
                                    var5 = var9.bind(var10)(var8, var5);
                                    var8 = var7 != var5;
                                    var7 = null;
                                    if(!var8) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                                    var7 = var5;
case 38:
                                    var5 = 'traffic_metadata_sealed';
                                    var6[var5] = var7;
                                    var5 = 'properties';
                                    var2[var5] = var6;
                                    var2 = var3.bind(var4)(var2);
case 27:
                                    return var1;
                                }
                            };
                            var4 = var5.bind(var6)(var4);
                            return var3;
case 15:
                            return var2;
case 11:
                            return var1;
                        }
                    };
                    return var1;
                };
                var5 = var6.bind(var1)(var5);
                var3['onMinViewTimeReached'] = var5;
                var5 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var7 = arguments[0];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                        var7 = false;
case 40:
                        var _closure4_slot0 = var7;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var4 = _closure3_slot0;
                        var5 = var4.lastBeatTime;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
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
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var3 = arg2;
                                var1 = _closure3_slot0;
                                var1 = var1.entity;
                                var4 = var1.adCreativeType;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 16;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var5.bind(var1)(var2);
                                var2 = var2.AdCreativeType;
                                var2 = var2.QUEST;
                                if(!(var4 !== var2)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                                var2 = _closure3_slot0;
                                var2 = var2.entity;
                                var2 = var2.adContentIds;
                                var11 = var2[var3];
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 17;
                                var2 = var5[var2];
                                var4 = var4.bind(var1)(var2);
                                var2 = var4.getQuestLogger;
                                var9 = var2.bind(var4)();
                                var5 = var9.info;
                                var2 = _closure4_slot0;
                                var15 = '';
                                var14 = var15;
                                if(!var2) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                                var14 = 'terminal ';
case 46:
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
                                var2 = 13;
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
                                var9 = _closure1_slot13;
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
                                _fun0008_ip = 48; continue _fun0008;
case 44:
                                var2 = _closure3_slot0;
                                var2 = var2.entity;
                                var2 = var2.adContentIds;
                                var10 = var2[var3];
                                var3 = _closure1_slot12;
                                var2 = var3.getQuest;
                                var8 = var2.bind(var3)(var10);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 17;
                                var2 = var4[var2];
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.getQuestLogger;
                                var9 = var2.bind(var3)();
                                var4 = var9.info;
                                var3 = null;
                                var5 = var3 == var8;
                                var2 = undefined;
                                if(var5) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                                var5 = var8.config;
                                var5 = var5.messages;
                                var2 = var5.questName;
case 49:
                                var16 = var10;
                                if(!(var3 != var2)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                                var16 = var2;
case 51:
                                var2 = _closure4_slot0;
                                var15 = '';
                                var14 = var15;
                                if(!var2) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                                var14 = 'terminal ';
case 53:
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
                                var2 = 13;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.trackQuestEvent;
                                var2 = {};
                                var21 = _closure4_slot2;
                                var22 = var2;
                                var9 = copyDataProperties(var22, var21);
                                var9 = 'questId';
                                var2[var9] = var10;
                                var6 = _closure1_slot13;
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
case 48:
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
case 42:
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
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                        if(var4) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 13;
                        var4 = var8[var4];
                        var6 = var6.bind(var5)(var4);
                        var4 = var6.getQuestStatus;
                        var3 = var4.bind(var6)(var7);
case 55:
                        var1['quest_status'] = var3;
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 13;
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
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                        var8 = var6.window;
                        var7 = var8.setInterval;
                        var4 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.beat;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1 = 60000;
                        var1 = var7.bind(var8)(var4, var1);
                        var5['heartbeatTimeoutId'] = var1;
                        var8 = var6.window;
                        var7 = var8.setTimeout;
                        var4 = var5.onMinViewTimeReached;
                        var9 = var5.minViewTimeSeconds;
                        var1 = 1000;
                        var1 = var1 * var9;
                        var1 = var7.bind(var8)(var4, var1);
                        var5['minViewTimeReachedTimeoutId'] = var1;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 11;
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
                        if(!var11) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                        var9 = var10;
case 57:
                        var4['metadata_raw'] = var9;
                        var9 = var5 != var8;
                        var5 = null;
                        if(!var9) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                        var5 = var8;
case 59:
                        var4['metadata_sealed'] = var5;
                        var _closure4_slot1 = var4;
                        var4 = _closure3_slot0;
                        var4 = var4.entity;
                        var5 = var4.adContentIds;
                        var4 = var5.forEach;
                        var3 = function(arg1, arg2) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var3 = arg2;
                                var1 = _closure3_slot0;
                                var1 = var1.entity;
                                var4 = var1.adCreativeType;
                                var6 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 16;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var6.bind(var1)(var2);
                                var2 = var2.AdCreativeType;
                                var2 = var2.QUEST;
                                if(!(var4 !== var2)) { _fun0011_ip = 61; continue _fun0011 }
case 45:
                                var10 = _closure3_slot0;
                                var2 = var10.entity;
                                var2 = var2.adContentIds;
                                var11 = var2[var3];
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 17;
                                var2 = var6[var2];
                                var7 = var4.bind(var1)(var2);
                                var2 = var7.getQuestLogger;
                                var13 = var2.bind(var7)();
                                var12 = var13.info;
                                var2 = 13;
                                var7 = var6[var2];
                                var14 = var4.bind(var1)(var7);
                                var9 = var14.getQuestContentName;
                                var7 = var10.questContent;
                                var15 = var9.bind(var14)(var7);
                                var7 = global;
                                var7 = var7.HermesInternal;
                                var14 = var7.concat;
                                var9 = '';
                                var7 = ' ad content became visible at ';
                                var9 = var14.bind(var9)(var11, var7, var15);
                                var7 = {};
                                var14 = var10.id;
                                var7['impressionId'] = var14;
                                var7 = var12.bind(var13)(var9, var7);
                                var2 = var6[var2];
                                var6 = var4.bind(var1)(var2);
                                var4 = var6.trackAdContentEvent;
                                var2 = {};
                                var19 = _closure4_slot0;
                                var20 = var2;
                                var9 = copyDataProperties(var20, var19);
                                var9 = 'adContentId';
                                var2[var9] = var11;
                                var9 = var10.entity;
                                var11 = var9.adCreativeType;
                                var9 = 'adCreativeType';
                                var2[var9] = var11;
                                var9 = _closure1_slot13;
                                var11 = var9.QUEST_CONTENT_LOADED;
                                var9 = 'event';
                                var2[var9] = var11;
                                var9 = {};
                                var19 = _closure4_slot1;
                                var20 = var9;
                                var7 = copyDataProperties(var20, var19);
                                var7 = var10.commonProperties;
                                var19 = var7.bind(var10)();
                                var20 = var9;
                                var7 = copyDataProperties(var20, var19);
                                var7 = 'properties';
                                var2[var7] = var9;
                                var2 = var4.bind(var6)(var2);
                                _fun0011_ip = 62; continue _fun0011;
case 61:
                                var2 = _closure3_slot0;
                                var2 = var2.entity;
                                var2 = var2.adContentIds;
                                var14 = var2[var3];
                                var3 = _closure1_slot12;
                                var2 = var3.getQuest;
                                var11 = var2.bind(var3)(var14);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 17;
                                var2 = var4[var2];
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.getQuestLogger;
                                var10 = var2.bind(var3)();
                                var6 = var10.info;
                                var7 = null;
                                var3 = var7 == var11;
                                var2 = undefined;
                                if(var3) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                                var3 = var11.config;
                                var3 = var3.messages;
                                var2 = var3.questName;
case 63:
                                var17 = var14;
                                if(!(var7 != var2)) { _fun0011_ip = 65; continue _fun0011 }
case 50:
                                var17 = var2;
case 65:
                                var13 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var2 = 13;
                                var3 = var12[var2];
                                var15 = var13.bind(var1)(var3);
                                var4 = var15.getQuestContentName;
                                var9 = _closure3_slot0;
                                var3 = var9.questContent;
                                var16 = var4.bind(var15)(var3);
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var15 = var3.concat;
                                var4 = '';
                                var3 = ' Quest became visible at ';
                                var4 = var15.bind(var4)(var17, var3, var16);
                                var3 = {};
                                var15 = var9.id;
                                var3['impressionId'] = var15;
                                var3 = var6.bind(var10)(var4, var3);
                                var2 = var12[var2];
                                var4 = var13.bind(var1)(var2);
                                var3 = var4.trackQuestEvent;
                                var2 = {};
                                var19 = _closure4_slot0;
                                var20 = var2;
                                var6 = copyDataProperties(var20, var19);
                                var6 = 'questId';
                                var2[var6] = var14;
                                var6 = _closure1_slot13;
                                var14 = var6.QUEST_CONTENT_LOADED;
                                var6 = 'event';
                                var2[var6] = var14;
                                var6 = {};
                                var19 = _closure4_slot1;
                                var20 = var6;
                                var10 = copyDataProperties(var20, var19);
                                var10 = var9.commonProperties;
                                var19 = var10.bind(var9)(var11);
                                var20 = var6;
                                var10 = copyDataProperties(var20, var19);
                                var10 = 11;
                                var12 = var12[var10];
                                var14 = var13.bind(var1)(var12);
                                var13 = var14.getAdTrafficMetadataRaw;
                                var12 = var9.questContent;
                                var15 = var7 == var11;
                                var9 = undefined;
                                if(var15) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                                var9 = var11.id;
case 66:
                                var9 = var13.bind(var14)(var12, var9);
                                var13 = var7 != var9;
                                var12 = null;
                                if(!var13) { _fun0011_ip = 68; continue _fun0011 }
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
                                if(var12) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                                var5 = var11.id;
case 70:
                                var5 = var9.bind(var10)(var8, var5);
                                var8 = var7 != var5;
                                var7 = null;
                                if(!var8) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                                var7 = var5;
case 72:
                                var5 = 'traffic_metadata_sealed';
                                var6[var5] = var7;
                                var5 = 'properties';
                                var2[var5] = var6;
                                var2 = var3.bind(var4)(var2);
case 62:
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 18;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.isEligibleForQuestsClientMonitoring;
                        var3 = 'QuestImpressionTracker';
                        var3 = var4.bind(var5)(var3);
                        if(!var3) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                        var4 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 19;
                        var3 = var9[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.increment;
                        var3 = {};
                        var8 = _closure1_slot0;
                        var7 = 20;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.MetricEvents;
                        var7 = var7.QUEST_CONTENT_IMPRESSION;
                        var3['name'] = var7;
                        var7 = 13;
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
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0012_ip = 41; continue _fun0012 }
case 76:
                        var2 = true;
case 41:
                        if(!var2) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                        var4 = _closure3_slot0;
                        var3 = var4.beat;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
case 77:
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
                var14 = var2.questContent;
                var10 = var2.triggeredByStatusChange;
                var11 = var2.trackGuildAndChannelMetadata;
                var13 = var2.questContentPosition;
                var9 = var2.questContentRowIndex;
                var6 = var2.minViewTimeSeconds;
                var12 = 1;
                if(!(var1 !== var6)) { _fun0002_ip = 79; continue _fun0002 }
case 80:
                var12 = var6;
case 79:
                var8 = var2.isQuestEnrollmentBlocked;
                var2 = var2.sourceQuestContent;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var15 = 21;
                var15 = var7[var15];
                var16 = var6.bind(var1)(var15);
                var15 = var16.v4;
                var15 = var15.bind(var16)();
                var3['id'] = var15;
                var3['questContent'] = var14;
                var3['questContentPosition'] = var13;
                var3['minViewTimeSeconds'] = var12;
                var12 = 0.5;
                var3['minViewportPercentage'] = var12;
                var3['trackGuildAndChannelMetadata'] = var11;
                var3['triggeredByStatusChange'] = var10;
                var3['questContentRowIndex'] = var9;
                var3['isQuestEnrollmentBlocked'] = var8;
                var3['sourceQuestContent'] = var2;
                var2 = 16;
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = this;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 11;
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
                var1 = _closure1_slot8;
                var9 = var1.bind(var7)();
                var1 = _closure1_slot7;
                var8 = var1.bind(var7)();
                var1 = null;
                if(!(var1 != var3)) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                var3 = var3.is_campaign_ias_enabled;
                if(!var3) { _fun0013_ip = 81; continue _fun0013 }
case 83:
                if(!var2) { _fun0013_ip = 81; continue _fun0013 }
case 84:
                if(!(var7 !== var9)) { _fun0013_ip = 81; continue _fun0013 }
case 85:
                if(!(var7 !== var8)) { _fun0013_ip = 81; continue _fun0013 }
case 86:
                var3 = _closure1_slot11;
                var2 = var3.getGuildId;
                var2 = var2.bind(var3)();
                var5 = var1 != var2;
                var3 = null;
                if(!var5) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                var10 = _closure1_slot10;
                var5 = var10.getGuild;
                var3 = var5.bind(var10)(var2);
case 87:
                var5 = {};
                var11 = var9.bind(var7)();
                var10 = _closure1_slot10;
                var9 = var10.getGuilds;
                var9 = var9.bind(var10)();
                var _closure3_slot0 = var9;
                var10 = var11.map;
                var9 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var7 = var2[var1];
                        var6 = undefined;
                        if(!(var6 !== var7)) { _fun0014_ip = 89; continue _fun0014 }
case 90:
                        var1 = {};
                        var2 = var7.id;
                        var1['id'] = var2;
                        var2 = var7.name;
                        var1['name'] = var2;
                        var2 = var7.description;
                        var3 = null;
                        if(!(var3 !== var2)) { _fun0014_ip = 91; continue _fun0014 }
case 92:
                        var2 = var7.description;
                        var1['description'] = var2;
case 91:
                        var4 = var7.icon;
                        var2 = null;
                        if(!(var3 !== var4)) { _fun0014_ip = 93; continue _fun0014 }
case 94:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 22;
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
                        if(!var5) { _fun0014_ip = 93; continue _fun0014 }
case 95:
                        var2 = var4;
case 93:
                        if(!(var3 !== var2)) { _fun0014_ip = 96; continue _fun0014 }
case 16:
                        var1['icon_url'] = var2;
case 96:
                        return var1;
case 89:
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
                if(!(var1 != var3)) { _fun0013_ip = 97; continue _fun0013 }
case 98:
                var10 = var8.bind(var7)();
                var9 = var10.map;
                var8 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var3 = _closure1_slot9;
                        var2 = var3.getChannel;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = undefined;
                        if(!(var1 !== var2)) { _fun0015_ip = 99; continue _fun0015 }
case 100:
                        var1 = {};
                        var3 = var2.id;
                        var1['id'] = var3;
                        var3 = var2.name;
                        var1['name'] = var3;
                        var3 = var2.topic;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0015_ip = 101; continue _fun0015 }
case 102:
                        var2 = var2.topic;
                        var1['channel_topic'] = var2;
case 101:
                        return var1;
case 99:
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
                _fun0013_ip = 103; continue _fun0013;
case 97:
                var6 = new Array(0);
case 103:
                var5['channels'] = var6;
                if(!(var1 != var2)) { _fun0013_ip = 104; continue _fun0013 }
case 105:
                var5['selected_guild_id'] = var2;
case 104:
                var2 = var1 == var3;
                var6 = undefined;
                if(var2) { _fun0013_ip = 106; continue _fun0013 }
case 107:
                var6 = var3.banner;
case 106:
                var2 = null;
                if(!(var1 !== var6)) { _fun0013_ip = 108; continue _fun0013 }
case 109:
                var8 = var1 == var3;
                var6 = undefined;
                if(var8) { _fun0013_ip = 110; continue _fun0013 }
case 111:
                var6 = var3.banner;
case 110:
                var2 = null;
                if(!(var7 !== var6)) { _fun0013_ip = 108; continue _fun0013 }
case 112:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 22;
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
                if(!var4) { _fun0013_ip = 108; continue _fun0013 }
case 113:
                var2 = var3;
case 108:
                if(!(var1 !== var2)) { _fun0013_ip = 114; continue _fun0013 }
case 115:
                var5['selected_guild_banner_url'] = var2;
case 114:
                var2 = var5.guilds;
                var2 = var2.length;
                var6 = 100;
                if(!(var2 > var6)) { _fun0013_ip = 116; continue _fun0013 }
case 63:
                var4 = var5.guilds;
                var3 = var4.slice;
                var2 = 0;
                var2 = var3.bind(var4)(var2, var6);
                var5['guilds'] = var2;
                var2 = true;
                var5['truncated'] = var2;
case 116:
                var2 = var5.channels;
                var2 = var2.length;
                if(!(var2 > var6)) { _fun0013_ip = 117; continue _fun0013 }
case 118:
                var4 = var5.channels;
                var3 = var4.slice;
                var2 = 0;
                var2 = var3.bind(var4)(var2, var6);
                var5['channels'] = var2;
                var2 = true;
                var5['truncated'] = var2;
case 117:
                var2 = {};
                var3 = global;
                var4 = var3.JSON;
                var3 = var4.stringify;
                var3 = var3.bind(var4)(var5);
                var2['brand_safety_context'] = var3;
                return var2;
case 81:
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
    var _closure1_slot16 = var5;
    var6 = var9.createContext;
    var6 = var6.bind(var9)(var1);
    var _closure1_slot17 = var6;
    var6 = 26;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/QuestContentImpressionTracker.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = 0.5;
    var3['MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE'] = var6;
    var3['QuestContentImpression'] = var5;
    var5 = function useAdContentImpressionTrackerProps(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var2 = 'questOrQuests';
            var3 = var2 in var6;
            var4 = undefined;
            var7 = undefined;
            if(!var3) { _fun0016_ip = 119; continue _fun0016 }
case 120:
            var7 = var6.questOrQuests;
case 119:
            var3 = 'adContentId';
            var3 = var3 in var6;
            var5 = undefined;
            if(!var3) { _fun0016_ip = 121; continue _fun0016 }
case 122:
            var5 = var6.adContentId;
case 121:
            var3 = function useAdContentIds(arg1, arg2) {
                var6 = arg1;
                var5 = arg2;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var5;
                var4 = _closure1_slot6;
                var3 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = _closure3_slot1;
                        var3 = null;
                        if(!(var3 == var1)) { _fun0017_ip = 123; continue _fun0017 }
case 40:
                        var1 = _closure3_slot0;
                        if(!(var3 == var1)) { _fun0017_ip = 124; continue _fun0017 }
case 125:
                        var1 = new Array(0);
                        _fun0017_ip = 10; continue _fun0017;
case 124:
                        var3 = global;
                        var5 = var3.Array;
                        var4 = var5.isArray;
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var5)(var3);
                        var6 = _closure3_slot0;
                        if(var3) { _fun0017_ip = 126; continue _fun0017 }
case 127:
                        var4 = var6.id;
                        var3 = new Array(1);
                        var3[0] = var4;
                        _fun0017_ip = 8; continue _fun0017;
case 126:
                        var5 = var6.map;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var3 = var5.bind(var6)(var4);
case 8:
                        var1 = var3;
case 10:
                        _fun0017_ip = 128; continue _fun0017;
case 123:
                        var3 = _closure3_slot1;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1 = var2;
case 128:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var7 = var3.bind(var4)(var7, var5);
            var _closure2_slot1 = var7;
            var2 = var2 in var6;
            if(var2) { _fun0016_ip = 99; continue _fun0016 }
case 126:
            var5 = var6.adCreativeType;
            _fun0016_ip = 129; continue _fun0016;
case 99:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.AdCreativeType;
            var5 = var2.QUEST;
case 129:
            var _closure2_slot2 = var5;
            var4 = _closure1_slot6;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var6 = var6.questContent;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot1;
                var1['adContentIds'] = var2;
                var2 = _closure2_slot0;
                var2 = var2.questContent;
                var1['questContent'] = var2;
                var2 = var1.adContentIds;
                var6 = var1.questContent;
                var1 = var2.sort;
                var2 = var1.bind(var2)();
                var1 = var2.join;
                var5 = '_';
                var4 = var1.bind(var2)(var5);
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var2 = var2.bind(var1)(var4, var5, var6);
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.AdCreativeType;
                var1 = var1.QUEST;
                var1 = {};
                var4 = _closure2_slot1;
                var1['adContentIds'] = var4;
                var3 = _closure2_slot2;
                var1['adCreativeType'] = var3;
                var1['key'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useAdContentImpressionTrackerProps'] = var5;
    var3['useQuestImpression'] = var4;
    var4 = function useQuestImpressionId() {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = _closure1_slot19;
            var1 = undefined;
            var3 = var2.bind(var1)();
            var2 = null;
            var2 = var2 == var3;
            if(var2) { _fun0018_ip = 130; continue _fun0018 }
case 131:
            var2 = var3.getId;
            var1 = var2.bind(var3)();
case 130:
            return var1;
        }
    };
    var3['useQuestImpressionId'] = var4;
    var2 = function QuestContentImpressionTrackerInner(arg1) {
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
        var1 = function useQuestStatusChanged(arg1) {
            var1 = arg1;
            var10 = var1.adContentIds;
            var _closure3_slot0 = var10;
            var4 = var1.adCreativeType;
            var _closure3_slot1 = var4;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 23;
            var6 = var5[var3];
            var3 = undefined;
            var9 = var7.bind(var3)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var4;
            var4 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var5 = _closure3_slot1;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 16;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var4);
                    var1 = var1.AdCreativeType;
                    var4 = var1.QUEST;
                    var1 = null;
                    if(!(var5 === var4)) { _fun0019_ip = 123; continue _fun0019 }
case 132:
                    var4 = _closure3_slot0;
                    var5 = var4.length;
                    var4 = 1;
                    var1 = null;
                    if(!(var4 === var5)) { _fun0019_ip = 123; continue _fun0019 }
case 133:
                    var4 = _closure1_slot12;
                    var3 = var4.getQuest;
                    var5 = _closure3_slot0;
                    var2 = 0;
                    var2 = var5[var2];
                    var1 = var3.bind(var4)(var2);
case 123:
                    return var1;
                }
            };
            var8 = var8.bind(var9)(var7, var4, var6);
            var _closure3_slot2 = var8;
            var7 = _closure1_slot6;
            var6 = var7.useMemo;
            var4 = new Array(1);
            var4[0] = var8;
            var2 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure3_slot2;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0020_ip = 127; continue _fun0020 }
case 134:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getQuestStatus;
                    var2 = _closure3_slot2;
                    var1 = var3.bind(var4)(var2);
case 127:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var4);
            var4 = _closure1_slot1;
            var1 = 24;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.bind(var3)(var2);
            var1 = var2 !== var1;
            return var1;
        };
        var4 = undefined;
        var12 = var1.bind(var4)(var8);
        var _closure2_slot6 = var12;
        var6 = _closure1_slot6;
        var5 = var6.useRef;
        var3 = null;
        var6 = var5.bind(var6)(var3);
        var _closure2_slot7 = var6;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 23;
        var3 = var9[var3];
        var18 = var5.bind(var4)(var3);
        var17 = var18.useStateFromStores;
        var3 = _closure1_slot12;
        var11 = new Array(1);
        var11[0] = var3;
        var5 = function() {
            var1 = _closure1_slot12;
            var2 = var1.questEnrollmentBlockedUntil;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var3 = new Array(0);
        var11 = var17.bind(var18)(var11, var5, var3);
        var _closure2_slot8 = var11;
        var5 = _closure1_slot1;
        var3 = 25;
        var3 = var9[var3];
        var5 = var5.bind(var4)(var3);
        var3 = function() {
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0021_ip = 135; continue _fun0021 }
case 136:
                    var1 = _closure2_slot7;
                    var2 = var1.current;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
case 135:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var3 = var5.bind(var4)(var3);
        var9 = _closure1_slot6;
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
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var5 = _closure2_slot3;
                if(!var5) { _fun0022_ip = 78; continue _fun0022 }
case 137:
                var5 = _closure2_slot1;
case 78:
                var2 = _closure2_slot2;
                if(var2) { _fun0022_ip = 138; continue _fun0022 }
case 125:
                var2 = _closure2_slot4;
case 138:
                if(var2) { _fun0022_ip = 130; continue _fun0022 }
case 139:
                var2 = _closure2_slot6;
case 130:
                if(!var2) { _fun0022_ip = 2; continue _fun0022 }
case 140:
                var2 = var5;
case 2:
                var3 = var2;
                if(var3) { _fun0022_ip = 141; continue _fun0022 }
case 142:
                var4 = _closure2_slot2;
                if(var4) { _fun0022_ip = 143; continue _fun0022 }
case 43:
                var4 = _closure2_slot4;
case 143:
                if(!var4) { _fun0022_ip = 144; continue _fun0022 }
case 5:
                var4 = !var5;
case 144:
                var3 = var4;
case 141:
                if(var3) { _fun0022_ip = 126; continue _fun0022 }
case 145:
                var3 = _closure2_slot6;
case 126:
                if(!var3) { _fun0022_ip = 146; continue _fun0022 }
case 147:
                var4 = _closure2_slot7;
                var5 = var4.current;
                var4 = null;
                var3 = var4 != var5;
case 146:
                if(!var3) { _fun0022_ip = 148; continue _fun0022 }
case 149:
                var3 = _closure2_slot7;
                var4 = var3.current;
                var3 = var4.stop;
                var3 = var3.bind(var4)();
case 148:
                if(!var2) { _fun0022_ip = 150; continue _fun0022 }
case 151:
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
                var4 = 16;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var6);
                var4 = var4.AdCreativeType;
                var4 = var4.QUEST;
                var1 = _closure2_slot7;
                var4 = _closure1_slot16;
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
case 150:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var5.bind(var9)(var2, var3);
        var3 = _closure1_slot14;
        var1 = _closure1_slot17;
        var2 = var1.Provider;
        var1 = {};
        var1['value'] = var6;
        var5 = var8.children;
        var5 = var5.bind(var8)(var7, var6);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['QuestContentImpressionTrackerInner'] = var2;
    return var1;
})();