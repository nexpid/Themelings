// app/modules/quests/lib/analytics/AnalyticsHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useTrackQuestEventWithImpression() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
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
                var1 = 4;
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
                var6[var5] = var7;
                var5 = 'properties';
                var2[var5] = var6;
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
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot5 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/lib/analytics/AnalyticsHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useTrackQuestEventWithImpression'] = var4;
    var4 = function useTrackQuestContentClickedWithImpression() {
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
            var5 = var1.questId;
            var _closure3_slot0 = var5;
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
            var1 = var1.sourceQuestContent;
            var _closure3_slot6 = var1;
            var4 = _closure1_slot4;
            var3 = var4.getQuest;
            var3 = var3.bind(var4)(var5);
            var _closure3_slot7 = var3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var4 = var8[var3];
            var1 = undefined;
            var9 = var6.bind(var1)(var4);
            var4 = var9.getAdMetadataRaw;
            var4 = var4.bind(var9)(var7);
            var _closure3_slot8 = var4;
            var4 = var8[var3];
            var9 = var6.bind(var1)(var4);
            var4 = var9.getAdMetadataSealed;
            var4 = var4.bind(var9)(var7);
            var _closure3_slot9 = var4;
            var4 = var8[var3];
            var9 = var6.bind(var1)(var4);
            var4 = var9.getAdTrafficMetadataRaw;
            var4 = var4.bind(var9)(var7, var5);
            var _closure3_slot10 = var4;
            var3 = var8[var3];
            var4 = var6.bind(var1)(var3);
            var3 = var4.getAdTrafficMetadataSealed;
            var3 = var3.bind(var4)(var7, var5);
            var _closure3_slot11 = var3;
            var3 = 6;
            var3 = var8[var3];
            var5 = var6.bind(var1)(var3);
            var4 = var5.getAdUser;
            var3 = 7;
            var3 = var8[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getQuestContentName;
            var3 = var3.bind(var6)(var7);
            var4 = var4.bind(var5)(var3);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['questId'] = var1;
                    var1 = _closure1_slot5;
                    var1 = var1.QUEST_CONTENT_CLICKED;
                    var2['event'] = var1;
                    var6 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var12 = 7;
                    var8 = var10[var12];
                    var1 = undefined;
                    var14 = var9.bind(var1)(var8);
                    var13 = var14.getContentProperties;
                    var11 = _closure3_slot1;
                    var9 = _closure3_slot3;
                    var8 = _closure3_slot4;
                    var16 = var13.bind(var14)(var11, var9, var8);
                    var17 = var6;
                    var8 = copyDataProperties(var17, var16);
                    var9 = _closure1_slot1;
                    var8 = 8;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var16 = var8.bind(var1)();
                    var17 = var6;
                    var8 = copyDataProperties(var17, var16);
                    var9 = _closure3_slot2;
                    var8 = 'cta_name';
                    var6[var8] = var9;
                    var9 = _closure3_slot7;
                    var8 = null;
                    var9 = var8 != var9;
                    var10 = null;
                    if(!var9) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var12 = var11.bind(var1)(var9);
                    var11 = var12.getQuestStatus;
                    var9 = _closure3_slot7;
                    var10 = var11.bind(var12)(var9);
case 4:
                    var9 = 'quest_status';
                    var6[var9] = var10;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 9;
                    var9 = var11[var9];
                    var10 = var10.bind(var1)(var9);
                    var9 = var10.v4;
                    var10 = var9.bind(var10)();
                    var9 = 'click_id';
                    var6[var9] = var10;
                    var9 = var8 != var7;
                    var10 = null;
                    if(!var9) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 10;
                    var9 = var12[var9];
                    var11 = var11.bind(var1)(var9);
                    var9 = var11.isIOS;
                    var9 = var9.bind(var11)();
                    var10 = null;
                    if(!var9) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var10 = var7.advertisingId;
case 6:
                    var9 = 'apple_advertising_id';
                    var6[var9] = var10;
                    var10 = var8 != var7;
                    var9 = null;
                    if(!var10) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 10;
                    var10 = var12[var10];
                    var11 = var11.bind(var1)(var10);
                    var10 = var11.isAndroid;
                    var10 = var10.bind(var11)();
                    var9 = null;
                    if(!var10) { _fun0002_ip = 9; continue _fun0002 }
case 11:
                    var9 = var7.advertisingId;
case 9:
                    var7 = 'android_advertising_id';
                    var6[var7] = var9;
                    var7 = _closure3_slot8;
                    var7 = var8 != var7;
                    var9 = null;
                    if(!var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var9 = _closure3_slot8;
case 12:
                    var7 = 'metadata_raw';
                    var6[var7] = var9;
                    var7 = _closure3_slot9;
                    var7 = var8 != var7;
                    var9 = null;
                    if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var9 = _closure3_slot9;
case 14:
                    var7 = 'metadata_sealed';
                    var6[var7] = var9;
                    var7 = _closure3_slot10;
                    var7 = var8 != var7;
                    var9 = null;
                    if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var9 = _closure3_slot10;
case 16:
                    var7 = 'traffic_metadata_raw';
                    var6[var7] = var9;
                    var7 = _closure3_slot11;
                    var7 = var8 != var7;
                    var8 = null;
                    if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var8 = _closure3_slot11;
case 18:
                    var7 = 'traffic_metadata_sealed';
                    var6[var7] = var8;
                    var2['properties'] = var6;
                    var6 = _closure3_slot5;
                    var2['trackGuildAndChannelMetadata'] = var6;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 5;
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
    var3['useTrackQuestContentClickedWithImpression'] = var4;
    var2 = function useQuestsEmbedFallbackAnalytics(arg1, arg2) {
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
            var1 = 4;
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
    var3['useQuestsEmbedFallbackAnalytics'] = var2;
    return var1;
})();