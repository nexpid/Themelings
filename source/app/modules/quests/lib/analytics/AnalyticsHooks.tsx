// app/modules/quests/lib/analytics/AnalyticsHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function useTrackQuestEventWithImpression() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useQuestImpression;
        var5 = var3.bind(var4)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackQuestEvent;
                var2 = {};
                var10 = var2;
                var9 = var5;
                var6 = copyDataProperties(var10, var9);
                var6 = {};
                var9 = var5.properties;
                var10 = var6;
                var5 = copyDataProperties(var10, var9);
                var8 = _closure2_slot0;
                var7 = null;
                var8 = var7 == var8;
                var7 = undefined;
                if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = _closure2_slot0;
                var5 = var8.getId;
                var7 = var5.bind(var8)();
case 2:
                var5 = 'impression_id';
                var6[4] = var7;
                var5 = 'properties';
                var2[4] = var6;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var5;
    var4 = function useTrackAdContentEventWithImpression() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useQuestImpression;
        var5 = var3.bind(var4)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackAdContentEvent;
                var2 = {};
                var10 = var2;
                var9 = var5;
                var6 = copyDataProperties(var10, var9);
                var6 = {};
                var9 = var5.properties;
                var10 = var6;
                var5 = copyDataProperties(var10, var9);
                var8 = _closure2_slot0;
                var7 = null;
                var8 = var7 == var8;
                var7 = undefined;
                if(var8) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var8 = _closure2_slot0;
                var5 = var8.getId;
                var7 = var5.bind(var8)();
case 2:
                var5 = 'impression_id';
                var6[4] = var7;
                var5 = 'properties';
                var2[4] = var6;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot4 = var6;
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/lib/analytics/AnalyticsHooks.tsx';
    var6 = var7.bind(var8)(var6);
    var3['useTrackQuestEventWithImpression'] = var5;
    var5 = function useTrackQuestContentClickedWithImpression() {
        var4 = _closure1_slot5;
        var3 = undefined;
        var5 = var4.bind(var3)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            var1 = arg1;
            var9 = var1.questId;
            var _closure3_slot0 = var9;
            var7 = var1.questContent;
            var _closure3_slot1 = var7;
            var3 = var1.questContentCTA;
            var _closure3_slot2 = var3;
            var3 = var1.questContentPosition;
            var _closure3_slot3 = var3;
            var3 = var1.questContentRowIndex;
            var _closure3_slot4 = var3;
            var3 = var1.trackGuildAndChannelMetadata;
            var _closure3_slot5 = var3;
            var5 = var1.sourceQuestContent;
            var _closure3_slot6 = var5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var4 = var8[var3];
            var1 = undefined;
            var10 = var6.bind(var1)(var4);
            var4 = var10.getAdMetadataSealed;
            var4 = var4.bind(var10)(var5);
            var _closure3_slot7 = var4;
            var3 = var8[var3];
            var4 = var6.bind(var1)(var3);
            var3 = var4.getAdTrafficMetadataSealed;
            var3 = var3.bind(var4)(var5, var9);
            var _closure3_slot8 = var3;
            var3 = 5;
            var3 = var8[var3];
            var5 = var6.bind(var1)(var3);
            var4 = var5.getAdUser;
            var3 = 6;
            var3 = var8[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getQuestContentName;
            var3 = var3.bind(var6)(var7);
            var4 = var4.bind(var5)(var3);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['questId'] = var1;
                    var1 = _closure1_slot4;
                    var1 = var1.QUEST_CONTENT_CLICKED;
                    var2['event'] = var1;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 6;
                    var8 = var10[var1];
                    var1 = undefined;
                    var14 = var9.bind(var1)(var8);
                    var13 = var14.getContentProperties;
                    var12 = _closure3_slot1;
                    var11 = _closure3_slot3;
                    var8 = _closure3_slot4;
                    var16 = var13.bind(var14)(var12, var11, var8);
                    var17 = var6;
                    var8 = copyDataProperties(var17, var16);
                    var11 = _closure1_slot1;
                    var8 = 7;
                    var8 = var10[var8];
                    var8 = var11.bind(var1)(var8);
                    var16 = var8.bind(var1)();
                    var17 = var6;
                    var8 = copyDataProperties(var17, var16);
                    var11 = _closure3_slot2;
                    var8 = 'cta_name';
                    var6[7] = var11;
                    var8 = 8;
                    var8 = var10[var8];
                    var9 = var9.bind(var1)(var8);
                    var8 = var9.v4;
                    var9 = var8.bind(var9)();
                    var8 = 'click_id';
                    var6[7] = var9;
                    var8 = null;
                    var9 = var8 != var7;
                    var10 = null;
                    if(!var9) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 9;
                    var9 = var12[var9];
                    var11 = var11.bind(var1)(var9);
                    var9 = var11.isIOS;
                    var9 = var9.bind(var11)();
                    var10 = null;
                    if(!var9) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                    var10 = var7.advertisingId;
case 4:
                    var9 = 'apple_advertising_id';
                    var6[8] = var10;
                    var10 = var8 != var7;
                    var9 = null;
                    if(!var10) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 9;
                    var10 = var12[var10];
                    var11 = var11.bind(var1)(var10);
                    var10 = var11.isAndroid;
                    var10 = var10.bind(var11)();
                    var9 = null;
                    if(!var10) { _fun0003_ip = 7; continue _fun0003 }
case 9:
                    var9 = var7.advertisingId;
case 7:
                    var7 = 'android_advertising_id';
                    var6[6] = var9;
                    var7 = _closure3_slot7;
                    var7 = var8 != var7;
                    var9 = null;
                    if(!var7) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var9 = _closure3_slot7;
case 10:
                    var7 = 'metadata_sealed';
                    var6[6] = var9;
                    var7 = _closure3_slot8;
                    var7 = var8 != var7;
                    var9 = null;
                    if(!var7) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var9 = _closure3_slot8;
case 12:
                    var7 = 'traffic_metadata_sealed';
                    var6[6] = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 10;
                    var7 = var10[var7];
                    var9 = var9.bind(var1)(var7);
                    var7 = var9.getCurrentQuestHomeSearchSession;
                    var9 = var7.bind(var9)();
                    var10 = var8 == var9;
                    var7 = undefined;
                    if(var10) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var7 = var9.uuid;
case 14:
                    var9 = var8 != var7;
                    var8 = null;
                    if(!var9) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var8 = var7;
case 16:
                    var7 = 'search_session_id';
                    var6[6] = var8;
                    var2['properties'] = var6;
                    var6 = _closure3_slot5;
                    var2['trackGuildAndChannelMetadata'] = var6;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 4;
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
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useTrackQuestContentClickedWithImpression'] = var5;
    var3['useTrackAdContentEventWithImpression'] = var4;
    var4 = function useTrackAdContentClickedWithImpression() {
        var4 = _closure1_slot6;
        var3 = undefined;
        var5 = var4.bind(var3)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.adContentId;
            var _closure3_slot0 = var3;
            var3 = var1.relatedQuestId;
            var _closure3_slot1 = var3;
            var3 = var1.adCreativeType;
            var _closure3_slot2 = var3;
            var7 = var1.questContent;
            var _closure3_slot3 = var7;
            var3 = var1.questContentCTA;
            var _closure3_slot4 = var3;
            var3 = var1.questContentPosition;
            var _closure3_slot5 = var3;
            var3 = var1.questContentRowIndex;
            var _closure3_slot6 = var3;
            var3 = var1.trackGuildAndChannelMetadata;
            var _closure3_slot7 = var3;
            var1 = var1.sourceQuestContent;
            var _closure3_slot8 = var1;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var3 = var8[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var3);
            var4 = var5.getAdUser;
            var3 = 6;
            var3 = var8[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getQuestContentName;
            var3 = var3.bind(var6)(var7);
            var4 = var4.bind(var5)(var3);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['adContentId'] = var1;
                    var1 = _closure3_slot1;
                    var2['relatedQuestId'] = var1;
                    var1 = _closure3_slot2;
                    var2['adCreativeType'] = var1;
                    var1 = _closure1_slot4;
                    var1 = var1.QUEST_CONTENT_CLICKED;
                    var2['event'] = var1;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 6;
                    var8 = var10[var1];
                    var1 = undefined;
                    var14 = var9.bind(var1)(var8);
                    var13 = var14.getContentProperties;
                    var12 = _closure3_slot3;
                    var11 = _closure3_slot5;
                    var8 = _closure3_slot6;
                    var16 = var13.bind(var14)(var12, var11, var8);
                    var17 = var6;
                    var8 = copyDataProperties(var17, var16);
                    var11 = _closure1_slot1;
                    var8 = 7;
                    var8 = var10[var8];
                    var8 = var11.bind(var1)(var8);
                    var16 = var8.bind(var1)();
                    var17 = var6;
                    var8 = copyDataProperties(var17, var16);
                    var11 = _closure3_slot4;
                    var8 = 'cta_name';
                    var6[7] = var11;
                    var8 = 8;
                    var8 = var10[var8];
                    var9 = var9.bind(var1)(var8);
                    var8 = var9.v4;
                    var9 = var8.bind(var9)();
                    var8 = 'click_id';
                    var6[7] = var9;
                    var8 = null;
                    var9 = var8 != var7;
                    var10 = null;
                    if(!var9) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 9;
                    var9 = var12[var9];
                    var11 = var11.bind(var1)(var9);
                    var9 = var11.isIOS;
                    var9 = var9.bind(var11)();
                    var10 = null;
                    if(!var9) { _fun0004_ip = 18; continue _fun0004 }
case 20:
                    var10 = var7.advertisingId;
case 18:
                    var9 = 'apple_advertising_id';
                    var6[8] = var10;
                    var10 = var8 != var7;
                    var9 = null;
                    if(!var10) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 9;
                    var10 = var12[var10];
                    var11 = var11.bind(var1)(var10);
                    var10 = var11.isAndroid;
                    var10 = var10.bind(var11)();
                    var9 = null;
                    if(!var10) { _fun0004_ip = 21; continue _fun0004 }
case 23:
                    var9 = var7.advertisingId;
case 21:
                    var7 = 'android_advertising_id';
                    var6[6] = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 10;
                    var7 = var10[var7];
                    var9 = var9.bind(var1)(var7);
                    var7 = var9.getCurrentQuestHomeSearchSession;
                    var9 = var7.bind(var9)();
                    var10 = var8 == var9;
                    var7 = undefined;
                    if(var10) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var7 = var9.uuid;
case 24:
                    var9 = var8 != var7;
                    var8 = null;
                    if(!var9) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var8 = var7;
case 26:
                    var7 = 'search_session_id';
                    var6[6] = var8;
                    var2['properties'] = var6;
                    var6 = _closure3_slot7;
                    var2['trackGuildAndChannelMetadata'] = var6;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.isBillableQuestContent;
                    var5 = _closure3_slot3;
                    var5 = var6.bind(var7)(var5);
                    var2['shouldExtendSession'] = var5;
                    var4 = _closure3_slot8;
                    var2['sourceQuestContent'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useTrackAdContentClickedWithImpression'] = var4;
    var4 = function useQuestsEmbedFallbackAnalytics(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackQuestEmbedFallbackViewed;
            var3 = _closure2_slot1;
            var2 = _closure2_slot0;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useQuestsEmbedFallbackAnalytics'] = var4;
    var4 = function useBountyCarouselEmptyStateAnalytics(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.trackBountyCarouselEmptyStateViewed;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 28:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useBountyCarouselEmptyStateAnalytics'] = var4;
    var2 = function useQuestHomeEntrypointAnalyticsEvents(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = var2.questHomeHero;
            var _closure2_slot0 = var3;
            var8 = var2.shouldShowQuestHomeHeroContent;
            var _closure2_slot1 = var8;
            var6 = undefined;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 11;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.QuestContent;
            if(var8) { _fun0006_ip = 30; continue _fun0006 }
case 31:
            var4 = var5.QUEST_HOME_ENTRYPOINT;
            _fun0006_ip = 32; continue _fun0006;
case 30:
            var4 = var5.QUEST_HOME_ENTRYPOINT_THEMED;
case 32:
            _closure2_slot2 = var4;
            var9 = _closure1_slot3;
            var7 = var9.useMemo;
            var6 = new Array(1);
            var6[0] = var4;
            var5 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getContentProperties;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                var2 = delete var1.row_index;
                return var1;
            };
            var10 = var7.bind(var9)(var5, var6);
            _closure2_slot3 = var10;
            var7 = _closure1_slot3;
            var6 = var7.useCallback;
            var5 = new Array(4);
            var5[0] = var3;
            var5[1] = var8;
            var5[2] = var4;
            var5[3] = var10;
            var4 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0007_ip = 35; continue _fun0007 }
case 33:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var5, var1);
                    _fun0007_ip = 36; continue _fun0007;
case 35:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 3;
                    var1 = var9[var1];
                    var7 = undefined;
                    var3 = var8.bind(var7)(var1);
                    var2 = var3.trackAdContentEvent;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var1['adContentId'] = var6;
                    var6 = 12;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.AdCreativeType;
                    var6 = var6.QUEST_HOME_HERO;
                    var1['adCreativeType'] = var6;
                    var1['event'] = var5;
                    var5 = _closure2_slot3;
                    var1['properties'] = var5;
                    var4 = _closure2_slot2;
                    var1['sourceQuestContent'] = var4;
                    var1 = var2.bind(var3)(var1);
case 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            _closure2_slot4 = var4;
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var6 = new Array(1);
            var6[0] = var4;
            var5 = function() {
                var3 = _closure2_slot4;
                var1 = _closure1_slot4;
                var2 = var1.QUEST_HOVER;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var7.bind(var8)(var5, var6);
            _closure2_slot5 = var8;
            var7 = _closure1_slot3;
            var6 = var7.useCallback;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var3 = _closure2_slot4;
                var1 = _closure1_slot4;
                var2 = var1.QUEST_HOVER_OFF;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var6.bind(var7)(var4, var5);
            _closure2_slot6 = var7;
            var9 = _closure1_slot3;
            var6 = var9.useCallback;
            var5 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.track;
                var2 = _closure1_slot4;
                var2 = var2.QUEST_HOME_ONBOARDING_POPOVER_RENDERED;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = new Array(0);
            var6 = var6.bind(var9)(var5, var4);
            _closure2_slot7 = var6;
            var9 = _closure1_slot3;
            var5 = var9.useCallback;
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.QUEST_CONTENT_CLICKED;
                    var2 = {};
                    var6 = false;
                    var2['is_targeted'] = var6;
                    var9 = _closure2_slot3;
                    var10 = var2;
                    var6 = copyDataProperties(var10, var9);
                    var7 = _closure2_slot0;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var6 = {};
                    _fun0008_ip = 39; continue _fun0008;
case 37:
                    var7 = {};
                    var8 = _closure2_slot0;
                    var8 = var8.id;
                    var7['ad_content_id'] = var8;
                    var6 = var7;
case 39:
                    var10 = var2;
                    var9 = var6;
                    var6 = copyDataProperties(var10, var9);
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var5 = var5.bind(var9)(var3, var4);
            _closure2_slot8 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot5;
                var1['handleMouseEnter'] = var3;
                var3 = _closure2_slot6;
                var1['handleMouseLeave'] = var3;
                var3 = _closure2_slot7;
                var1['handleOnboardingPopoutRender'] = var3;
                var2 = _closure2_slot8;
                var1['handleEntrypointClick'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useQuestHomeEntrypointAnalyticsEvents'] = var2;
    return var1;
})();