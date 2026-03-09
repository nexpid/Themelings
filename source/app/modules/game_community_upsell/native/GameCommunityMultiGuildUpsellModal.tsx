// app/modules/game_community_upsell/native/GameCommunityMultiGuildUpsellModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var10 = metroImportAll;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var10;
    var _closure1_slot3 = var8;
    var4 = function OneColumnGuildUpsellList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.suggestedGuilds;
            var10 = var2.contentContainerStyle;
            var7 = var2.subheader;
            var3 = var2.onDismiss;
            var _closure2_slot0 = var3;
            var15 = var2.bottomPadding;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = 0;
case 2:
            var _closure2_slot1 = var15;
            var _closure2_slot2 = var4;
            var9 = _closure1_slot4;
            var6 = var9.useCallback;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var2 = new Array(0);
            var9 = var6.bind(var9)(var5, var2);
            var2 = _closure1_slot0;
            var13 = _closure1_slot3;
            var5 = 11;
            var5 = var13[var5];
            var14 = var2.bind(var4)(var5);
            var12 = var14.useStateFromStoresObject;
            var5 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getGuildGameIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var12.bind(var14)(var6, var5);
            _closure2_slot2 = var14;
            var12 = _closure1_slot1;
            var5 = 12;
            var5 = var13[var5];
            var6 = var12.bind(var4)(var5);
            var5 = 13;
            var5 = var13[var5];
            var5 = var12.bind(var4)(var5);
            var5 = var5.GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT;
            var5 = var6.bind(var4)(var5);
            var12 = var5.analyticsLocations;
            var16 = _closure1_slot4;
            var6 = var16.useCallback;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var14;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.item;
                    var3 = _closure2_slot2;
                    var2 = var1.id;
                    var2 = var3[var2];
                    var6 = null;
                    var8 = var6 != var2;
                    var5 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['guild'] = var1;
                    var10 = _closure2_slot2;
                    var9 = var1.id;
                    var9 = var10[var9];
                    var2['gameId'] = var9;
                    var9 = 'one-column';
                    var2['variant'] = var9;
                    if(!var8) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure2_slot0;
case 4:
                    var2['onDismiss'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var6 = var6.bind(var16)(var3, var5);
            var5 = _closure1_slot14;
            var3 = 'one-column';
            var12 = var5.bind(var4)(var14, var3, var12);
            var14 = _closure1_slot4;
            var5 = var14.useMemo;
            var3 = new Array(1);
            var3[0] = var15;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot1;
                var1['paddingBottom'] = var2;
                return var1;
            };
            var5 = var5.bind(var14)(var1, var3);
            var3 = _closure1_slot9;
            var1 = 15;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.FlashList;
            var1 = {};
            var1['onViewableItemsChanged'] = var12;
            var11 = _closure1_slot12;
            var1['viewabilityConfig'] = var11;
            var1['contentContainerStyle'] = var10;
            var1['keyExtractor'] = var9;
            var1['data'] = var8;
            var1['ListHeaderComponent'] = var7;
            var1['renderItem'] = var6;
            var6 = 390;
            var1['estimatedItemSize'] = var6;
            var1['ListFooterComponentStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var2 = function TwoColumnGuildUpsellList(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = var3.suggestedGuilds;
            var _closure2_slot0 = var2;
            var10 = var3.contentContainerStyle;
            var17 = var3.rowStyle;
            var _closure2_slot1 = var17;
            var7 = var3.subheader;
            var16 = var3.onDismiss;
            var _closure2_slot2 = var16;
            var3 = var3.bottomPadding;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var3 = 0;
case 6:
            var _closure2_slot3 = var3;
            var _closure2_slot4 = var4;
            var8 = _closure1_slot4;
            var6 = var8.useMemo;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var4 = _closure2_slot0;
                var3 = var4.reduce;
                var2 = function(arg1, arg2, arg3) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var6 = arg3;
                        var2 = 2;
                        var3 = var6 % var2;
                        var2 = 0;
                        if(!(var3 === var2)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                        var3 = var1.push;
                        var2 = {};
                        var4 = arg2;
                        var2['left'] = var4;
                        var5 = _closure2_slot0;
                        var4 = 1;
                        var4 = var6 + var4;
                        var4 = var5[var4];
                        var2['right'] = var4;
                        var2 = var3.bind(var1)(var2);
case 8:
                        return var1;
                    }
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var6.bind(var8)(var2, var5);
            var9 = _closure1_slot4;
            var6 = var9.useCallback;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.left;
                    var2 = null;
                    var5 = var2 == var4;
                    var6 = undefined;
                    if(var5) { _fun0005_ip = 10; continue _fun0005 }
case 9:
                    var6 = var4.id;
case 10:
                    var7 = var2 != var6;
                    var5 = '';
                    var4 = var5;
                    if(!var7) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var4 = var6;
case 11:
                    var3 = var3.right;
                    var6 = var2 == var3;
                    var1 = undefined;
                    if(var6) { _fun0005_ip = 8; continue _fun0005 }
case 13:
                    var1 = var3.id;
case 8:
                    var2 = var2 != var1;
                    var3 = var5;
                    if(!var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var3 = var1;
case 14:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '-';
                    var1 = var2.bind(var5)(var4, var1, var3);
                    return var1;
                }
            };
            var2 = new Array(0);
            var9 = var6.bind(var9)(var5, var2);
            var2 = _closure1_slot0;
            var13 = _closure1_slot3;
            var5 = 11;
            var5 = var13[var5];
            var14 = var2.bind(var4)(var5);
            var12 = var14.useStateFromStoresObject;
            var5 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getGuildGameIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var12.bind(var14)(var6, var5);
            _closure2_slot4 = var15;
            var12 = _closure1_slot1;
            var5 = 12;
            var5 = var13[var5];
            var6 = var12.bind(var4)(var5);
            var5 = 13;
            var5 = var13[var5];
            var5 = var12.bind(var4)(var5);
            var5 = var5.GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT;
            var5 = var6.bind(var4)(var5);
            var12 = var5.analyticsLocations;
            var6 = _closure1_slot14;
            var5 = 'two-column';
            var12 = var6.bind(var4)(var15, var5, var12);
            var14 = _closure1_slot4;
            var6 = var14.useMemo;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = {};
                var2 = _closure2_slot3;
                var1['paddingBottom'] = var2;
                return var1;
            };
            var5 = var6.bind(var14)(var3, var5);
            var14 = _closure1_slot4;
            var6 = var14.useCallback;
            var3 = new Array(3);
            var3[0] = var17;
            var3[1] = var16;
            var3[2] = var15;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var13 = var1.item;
                    var2 = var13.left;
                    var10 = null;
                    var3 = var10 == var2;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var1 = var2.id;
case 16:
                    var15 = var10 != var1;
                    if(!var15) { _fun0006_ip = 18; continue _fun0006 }
case 12:
                    var2 = _closure2_slot4;
                    var1 = var13.left;
                    var1 = var1.id;
                    var1 = var2[var1];
                    var15 = var10 != var1;
case 18:
                    var2 = var13.right;
                    var3 = var10 == var2;
                    var1 = undefined;
                    if(var3) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var1 = var2.id;
case 19:
                    var12 = var10 != var1;
                    if(!var12) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var2 = _closure2_slot4;
                    var1 = var13.right;
                    var1 = var1.id;
                    var1 = var2[var1];
                    var12 = var10 != var1;
case 21:
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['style'] = var5;
                    var5 = var13.left;
                    var6 = var10 != var5;
                    if(!var6) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var9 = _closure1_slot9;
                    var8 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var5 = 14;
                    var5 = var14[var5];
                    var8 = var8.bind(var4)(var5);
                    var5 = {};
                    var14 = var13.left;
                    var5['guild'] = var14;
                    var16 = _closure2_slot4;
                    var14 = var13.left;
                    var14 = var14.id;
                    var14 = var16[var14];
                    var5['gameId'] = var14;
                    var14 = 'two-column';
                    var5['variant'] = var14;
                    var14 = null;
                    if(!var15) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var14 = _closure2_slot2;
case 25:
                    var5['onDismiss'] = var14;
                    var6 = var9.bind(var4)(var8, var5);
case 23:
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = var13.right;
                    if(!(var10 == var6)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var9 = _closure1_slot9;
                    var8 = _closure1_slot5;
                    var6 = {};
                    var14 = {};
                    var15 = 1;
                    var14['flex'] = var15;
                    var6['style'] = var14;
                    var6 = var9.bind(var4)(var8, var6);
                    _fun0006_ip = 29; continue _fun0006;
case 27:
                    var9 = _closure1_slot9;
                    var8 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var7 = 14;
                    var7 = var14[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var14 = var13.right;
                    var7['guild'] = var14;
                    var14 = _closure2_slot4;
                    var13 = var13.right;
                    var13 = var13.id;
                    var13 = var14[var13];
                    var7['gameId'] = var13;
                    var13 = 'two-column';
                    var7['variant'] = var13;
                    var10 = null;
                    if(!var12) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var10 = _closure2_slot2;
case 30:
                    var7['onDismiss'] = var10;
                    var6 = var9.bind(var4)(var8, var7);
case 29:
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var6 = var6.bind(var14)(var1, var3);
            var3 = _closure1_slot9;
            var1 = 15;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.FlashList;
            var1 = {};
            var1['onViewableItemsChanged'] = var12;
            var11 = _closure1_slot12;
            var1['viewabilityConfig'] = var11;
            var1['contentContainerStyle'] = var10;
            var1['keyExtractor'] = var9;
            var1['data'] = var8;
            var1['ListHeaderComponent'] = var7;
            var1['renderItem'] = var6;
            var6 = 250;
            var1['estimatedItemSize'] = var6;
            var1['ListFooterComponentStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.View;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.MIN_HEADER_HEIGHT;
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot9 = var9;
    var6 = var6.jsxs;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = function(arg1, arg2) {
        var9 = arg2;
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot3;
        var3 = 7;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var7;
        var1['container'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 0};
        var7 = 'center';
        var2['paddingTop'] = var9;
        var8 = _closure1_slot8;
        var8 = var9 + var8;
        var2['minHeight'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var2['paddingHorizontal'] = var8;
        var1['headerWrapper'] = var2;
        var2 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
        var1['headerTitle'] = var2;
        var2 = {};
        var2['alignSelf'] = var7;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var2['marginHorizontal'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var2['marginBottom'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var2['marginTop'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var8;
        var2['textAlign'] = var7;
        var1['subtitle'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var7 = arg1;
        var2['paddingBottom'] = var7;
        var1['listContent'] = var2;
        var2 = {'flexDirection': 'row', 'gap': null, 'flex': 1};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['gap'] = var3;
        var1['twoColumnRow'] = var2;
        return var1;
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot11 = var6;
    var6 = {'itemVisiblePercentThreshold': 50, 'minimumViewTime': 500};
    var _closure1_slot12 = var6;
    var6 = function trackImpressionForCard(arg1, arg2, arg3, arg4, arg5) {
        var6 = arg2;
        var1 = arg1;
        var3 = var1.current;
        var2 = var3.add;
        var1 = var6.id;
        var1 = var2.bind(var3)(var1);
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var1 = 8;
        var2 = var8[var1];
        var1 = undefined;
        var4 = var7.bind(var1)(var2);
        var3 = var4.trackImpression;
        var2 = {};
        var5 = 9;
        var9 = var8[var5];
        var9 = var7.bind(var1)(var9);
        var9 = var9.ImpressionTypes;
        var9 = var9.PANE;
        var2['type'] = var9;
        var5 = var8[var5];
        var5 = var7.bind(var1)(var5);
        var5 = var5.ImpressionNames;
        var5 = var5.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD;
        var2['name'] = var5;
        var5 = {};
        var7 = arg3;
        var5['game_id'] = var7;
        var6 = var6.id;
        var5['guild_id'] = var6;
        var6 = arg5;
        var5['location_stack'] = var6;
        var6 = arg4;
        var5['variant'] = var6;
        var2['properties'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot13 = var6;
    var6 = function useOnViewableItemsChanged(arg1, arg2, arg3) {
        var7 = arg1;
        var5 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var5;
        var _closure2_slot2 = var6;
        var8 = _closure1_slot4;
        var4 = var8.useRef;
        var3 = global;
        var3 = var3.Set;
        var9 = var3.prototype;
        var9 = Object.create(var9, {constructor: {value: var3}});
        var14 = var9;
        var3 = new var14[var3](var13);
        var3 = var3 instanceof Object ? var3 : var9;
        var3 = var4.bind(var8)(var3);
        var _closure2_slot3 = var3;
        var8 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var8 = var8.bind(var3)(var4);
        var4 = var8.useFocusEffect;
        var11 = _closure1_slot4;
        var10 = var11.useCallback;
        var9 = function() {
            var1 = _closure2_slot3;
            var2 = var1.current;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var3 = new Array(0);
        var3 = var10.bind(var11)(var9, var3);
        var3 = var4.bind(var8)(var3);
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.viewableItems;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.item;
                    var3 = null;
                    if(!(var3 != var7)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var1 = 'left';
                    var1 = var1 in var7;
                    if(!var1) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                    var2 = var7.left;
                    var1 = var3 != var2;
case 34:
                    if(!var1) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var2 = _closure2_slot3;
                    var5 = var2.current;
                    var4 = var5.has;
                    var2 = var7.left;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    var1 = !var2;
case 36:
                    if(!var1) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var9 = _closure1_slot13;
                    var14 = _closure2_slot3;
                    var13 = var7.left;
                    var4 = _closure2_slot0;
                    var2 = var7.left;
                    var2 = var2.id;
                    var12 = var4[var2];
                    var11 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var15 = undefined;
                    var1 = var15[var9](var14, var13, var12, var11, var10, var9);
case 38:
                    var1 = 'right';
                    var1 = var1 in var7;
                    if(!var1) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var2 = var7.right;
                    var1 = var3 != var2;
case 40:
                    if(!var1) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var2 = _closure2_slot3;
                    var5 = var2.current;
                    var4 = var5.has;
                    var2 = var7.right;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    var1 = !var2;
case 42:
                    if(!var1) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var9 = _closure1_slot13;
                    var14 = _closure2_slot3;
                    var13 = var7.right;
                    var4 = _closure2_slot0;
                    var2 = var7.right;
                    var2 = var2.id;
                    var12 = var4[var2];
                    var11 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var15 = undefined;
                    var1 = var15[var9](var14, var13, var12, var11, var10, var9);
case 44:
                    var1 = 'id';
                    var1 = var1 in var7;
                    if(!var1) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var2 = var7.id;
                    var1 = var3 != var2;
case 46:
                    if(!var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var2 = _closure2_slot3;
                    var4 = var2.current;
                    var3 = var4.has;
                    var2 = var7.id;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 48:
                    if(!var1) { _fun0007_ip = 32; continue _fun0007 }
case 50:
                    var6 = _closure1_slot13;
                    var14 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var2 = var7.id;
                    var12 = var3[var2];
                    var11 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var15 = undefined;
                    var13 = var7;
                    var1 = var15[var6](var14, var13, var12, var11, var10, var9);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var6;
    var6 = 25;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/game_community_upsell/native/GameCommunityMultiGuildUpsellModal.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function GameCommunityMultiGuildUpsellModal(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var12 = var2.onClose;
            var18 = _closure1_slot1;
            var23 = _closure1_slot3;
            var2 = 16;
            var2 = var23[var2];
            var4 = undefined;
            var2 = var18.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var6 = var2.top;
            var5 = var2.bottom;
            var26 = _closure1_slot0;
            var2 = 17;
            var2 = var23[var2];
            var3 = var26.bind(var4)(var2);
            var2 = var3.useGradientTop;
            var2 = var2.bind(var3)();
            var _closure2_slot0 = var2;
            var3 = _closure1_slot11;
            var16 = var3.bind(var4)(var5, var6);
            var _closure2_slot1 = var16;
            var3 = 18;
            var3 = var23[var3];
            var3 = var26.bind(var4)(var3);
            var6 = var3.GameCommunityUpsellMultiExperiment;
            var5 = var6.useConfig;
            var3 = {};
            var7 = 'GameCommunityMultiGuildUpsellModal';
            var3['location'] = var7;
            var3 = var5.bind(var6)(var3);
            var13 = var3.visualVariant;
            var _closure2_slot2 = var13;
            var3 = 11;
            var3 = var23[var3];
            var7 = var26.bind(var4)(var3);
            var6 = var7.useStateFromStoresArray;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getPresentableUpsellGuilds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var6.bind(var7)(var5, var3);
            var6 = _closure1_slot4;
            var5 = var6.useMemo;
            var7 = var16.headerWrapper;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var2;
            var2 = function() {
                var1 = _closure2_slot1;
                var3 = var1.headerWrapper;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = _closure2_slot0;
                var1[1] = var2;
                return var1;
            };
            var8 = var5.bind(var6)(var2, var3);
            var6 = _closure1_slot4;
            var5 = var6.useMemo;
            var2 = var16.subtitle;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot9;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var1 = 19;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                var5 = _closure2_slot1;
                var5 = var5.subtitle;
                var1['style'] = var5;
                var5 = 20;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.PH+G/A;
                var5 = var6.bind(var7)(var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var15 = var5.bind(var6)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function(arg1, arg2) {
                var6 = arg1;
                var4 = _closure1_slot2;
                var5 = _closure1_slot3;
                var1 = 21;
                var3 = var5[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.dismissGuild;
                var3 = var3.bind(var4)(var6);
                var4 = _closure1_slot1;
                var3 = 22;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot7;
                var3 = var2.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED;
                var2 = {};
                var7 = arg2;
                var2['game_id'] = var7;
                var2['guild_id'] = var6;
                var6 = _closure2_slot2;
                var2['variant'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var16.container;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot5;
            var5 = {};
            var5['style'] = var8;
            var10 = _closure1_slot9;
            var8 = 23;
            var8 = var23[var8];
            var8 = var26.bind(var4)(var8);
            var9 = var8.HeaderIconButton;
            var8 = {};
            var17 = 24;
            var17 = var23[var17];
            var17 = var18.bind(var4)(var17);
            var8['source'] = var17;
            var8['onPress'] = var12;
            var19 = 20;
            var12 = var23[var19];
            var12 = var26.bind(var4)(var12);
            var18 = var12.intl;
            var17 = var18.string;
            var12 = var23[var19];
            var12 = var26.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.cpT0Cq;
            var12 = var17.bind(var18)(var12);
            var8['accessibilityLabel'] = var12;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var17 = _closure1_slot9;
            var12 = _closure1_slot5;
            var9 = {};
            var10 = var16.headerTitle;
            var9['style'] = var10;
            var22 = _closure1_slot9;
            var10 = 19;
            var10 = var23[var10];
            var10 = var26.bind(var4)(var10);
            var21 = var10.Text;
            var18 = {'variant': 'redesign/heading-18/bold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var10 = 1;
            var24 = var23[var19];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var19];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.fs+2Kn;
            var23 = var24.bind(var25)(var23);
            var18['children'] = var23;
            var18 = var22.bind(var4)(var21, var18);
            var9['children'] = var18;
            var9 = var17.bind(var4)(var12, var9);
            var8[1] = var9;
            var17 = _closure1_slot9;
            var12 = _closure1_slot5;
            var9 = {};
            var18 = {};
            var21 = 40;
            var18['width'] = var21;
            var9['style'] = var18;
            var9 = var17.bind(var4)(var12, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = {};
            var9['flex'] = var10;
            var6['style'] = var9;
            var9 = 'one-column';
            var12 = null;
            if(!(var9 === var13)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var18 = _closure1_slot9;
            var17 = _closure1_slot15;
            var9 = {};
            var23 = var20.slice;
            var22 = 0;
            var21 = 8;
            var21 = var23.bind(var20)(var22, var21);
            var9['suggestedGuilds'] = var21;
            var21 = var16.listContent;
            var9['contentContainerStyle'] = var21;
            var9['subheader'] = var15;
            var9['onDismiss'] = var14;
            var12 = var18.bind(var4)(var17, var9);
case 51:
            var9 = new Array(2);
            var9[0] = var12;
            var12 = 'two-column';
            var10 = null;
            if(!(var12 === var13)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var13 = _closure1_slot9;
            var12 = _closure1_slot16;
            var11 = {};
            var18 = var20.slice;
            var17 = 0;
            var17 = var18.bind(var20)(var17, var19);
            var11['suggestedGuilds'] = var17;
            var17 = var16.listContent;
            var11['contentContainerStyle'] = var17;
            var16 = var16.twoColumnRow;
            var11['rowStyle'] = var16;
            var11['subheader'] = var15;
            var11['onDismiss'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 53:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['OneColumnGuildUpsellList'] = var4;
    var3['TwoColumnGuildUpsellList'] = var2;
    return var1;
})();