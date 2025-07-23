// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var15 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var7;
    var1 = function shouldTrackViewedEvent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.loading;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 31; continue _fun0001 }
 15:
            var2 = var2.data;
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
 31:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var10 = true;
    var2['value'] = var10;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var15.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var13 = 1;
    var4 = var7[var13];
    var2 = native4;
    var9 = var2.bind(var1)(var4);
    var _closure1_slot4 = var9;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.ScrollView;
    var _closure1_slot5 = var4;
    var2 = var2.View;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.HAPPENING_NOW_CARD_HEIGHT;
    var _closure1_slot7 = var4;
    var4 = var2.HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN;
    var _closure1_slot8 = var4;
    var4 = var2.HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN;
    var _closure1_slot9 = var4;
    var14 = var2.HAPPENING_NOW_PANELS_CONTAINER_PADDING;
    var2 = var2.HappeningNowKindIds;
    var _closure1_slot10 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot11 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot12 = var2;
    var4 = var9.createContext;
    var2 = 6;
    var2 = var7[var2];
    var11 = var6.bind(var1)(var2);
    var5 = var11.createFakeSharedValue;
    var2 = new Array(0);
    var2 = var5.bind(var11)(var2);
    var2 = var4.bind(var9)(var2);
    var _closure1_slot13 = var2;
    var4 = 7;
    var4 = var7[var4];
    var11 = var6.bind(var1)(var4);
    var5 = var11.createStyles;
    var4 = {};
    var12 = {};
    var12['paddingLeft'] = var14;
    var12['paddingRight'] = var14;
    var4['containerInner'] = var12;
    var12 = {};
    var14 = 8;
    var14 = var7[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var12['paddingHorizontal'] = var14;
    var12['flex'] = var13;
    var4['loading'] = var12;
    var4 = var5.bind(var11)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Gesture;
    var4 = var5.Native;
    var5 = var4.bind(var5)();
    var4 = var5.disallowInterruption;
    var4 = var4.bind(var5)(var10);
    var _closure1_slot15 = var4;
    var5 = var9.forwardRef;
    var4 = function(arg1, arg2) {
        var4 = _closure1_slot12;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 9;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var6 = _closure1_slot15;
        var1['gesture'] = var6;
        var6 = _closure1_slot5;
        var5 = {};
        var7 = arg2;
        var5['ref'] = var7;
        var8 = arg1;
        var9 = var5;
        var7 = copyDataProperties(var9, var8);
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var5 = var5.bind(var9)(var4);
    var _closure1_slot16 = var5;
    var4 = 'HappeningNowScrollView';
    var5['displayName'] = var4;
    var5 = var9.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var5 = var2.cards;
            var24 = var2.listRef;
            var _closure2_slot0 = var24;
            var6 = undefined;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var2 = _closure1_slot14;
            var9 = var2.bind(var6)();
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 14;
            var2 = var15[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.useIsFocused;
            var2 = var2.bind(var3)();
            var _closure2_slot1 = var2;
            var12 = _closure1_slot1;
            var3 = 15;
            var3 = var15[var3];
            var4 = var12.bind(var6)(var3);
            var3 = {};
            var3['withoutUserCards'] = var6;
            var3['guildId'] = var6;
            var20 = true;
            var3['showMultipleActivitiesPerChannel'] = var20;
            var3['isFocused'] = var2;
            var4 = var4.bind(var6)(var5, var3);
            var3 = _closure1_slot3;
            var14 = 2;
            var3 = var3.bind(var6)(var4, var14);
            var11 = 0;
            var7 = var3[var11];
            var _closure2_slot2 = var7;
            var5 = 1;
            var10 = var3[var5];
            var _closure2_slot3 = var10;
            var4 = 16;
            var3 = var15[var4];
            var13 = var12.bind(var6)(var3);
            var3 = 17;
            var3 = var15[var3];
            var3 = var12.bind(var6)(var3);
            var3 = var3.ACTIVITIES_HAPPENING_NOW;
            var3 = var13.bind(var6)(var3);
            var13 = var3.analyticsLocations;
            var3 = 18;
            var3 = var15[var3];
            var3 = var12.bind(var6)(var3);
            var3 = var3.bind(var6)();
            var25 = var3.width;
            var15 = _closure1_slot4;
            var3 = var15.useRef;
            var16 = var3.bind(var15)(var11);
            var _closure2_slot4 = var16;
            var12 = {};
            var12['data'] = var7;
            var12['isFocused'] = var2;
            var12['loading'] = var10;
            var3 = function useTrackActivityCardsView(arg1, arg2) {
                var4 = arg1;
                var _closure3_slot0 = var4;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var9 = var4.isFocused;
                var _closure3_slot2 = var9;
                var8 = _closure1_slot4;
                var3 = var8.useRef;
                var3 = var3.bind(var8)(var4);
                var _closure3_slot3 = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 10;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = function() {
                    var1 = {};
                    var2 = 'messages';
                    var1['context'] = var2;
                    var2 = _closure3_slot3;
                    var4 = var2.current;
                    var4 = var4.data;
                    var4 = var4.length;
                    var1['num_cards'] = var4;
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.min;
                    var3 = _closure3_slot1;
                    var4 = var3.current;
                    var3 = var2.current;
                    var3 = var3.data;
                    var3 = var3.length;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['max_viewed_card_index'] = var3;
                    var3 = var2.current;
                    var5 = var3.data;
                    var4 = var5.map;
                    var3 = function(arg1) {
                        var2 = _closure1_slot10;
                        var1 = arg1;
                        var1 = var1.kind;
                        var1 = var2[var1];
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    var1['card_types'] = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getAffinityProperties;
                    var2 = var2.current;
                    var2 = var2.data;
                    var7 = var3.bind(var4)(var2);
                    var8 = var1;
                    var2 = copyDataProperties(var8, var7);
                    return var1;
                };
                var3 = var6.bind(var1)(var3);
                var _closure3_slot4 = var3;
                var7 = var8.useEffect;
                var6 = function() {
                    var2 = _closure3_slot3;
                    var1 = _closure3_slot0;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
                var7 = var8.useEffect;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure3_slot2;
                        var2 = !var2;
                        if(!var2) { _fun0003_ip = 36; continue _fun0003 }
 13:
                        var5 = _closure1_slot21;
                        var3 = _closure3_slot3;
                        var4 = var3.current;
                        var3 = undefined;
                        var2 = var5.bind(var3)(var4);
 36:
                        if(!var2) { _fun0003_ip = 93; continue _fun0003 }
 39:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 12;
                        var3 = var5[var3];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.track;
                        var2 = _closure1_slot11;
                        var2 = var2.ACTIVITY_CARDS_VIEWED;
                        var1 = _closure3_slot4;
                        var1 = var1.bind(var5)();
                        var1 = var3.bind(var4)(var2, var1);
 93:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var7.bind(var8)(var3, var6);
                var3 = 13;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var2 = function() {
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var5 = _closure1_slot21;
                            var1 = _closure3_slot3;
                            var4 = var1.current;
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            if(!var4) { _fun0004_ip = 78; continue _fun0004 }
 29:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 12;
                            var4 = var6[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.track;
                            var3 = _closure1_slot11;
                            var3 = var3.ACTIVITY_CARDS_VIEWED;
                            var2 = _closure3_slot4;
                            var2 = var2.bind(var1)();
                            var2 = var4.bind(var5)(var3, var2);
 78:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var3.bind(var6)(var12, var16);
            var12 = var15.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var24;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0005_ip = 62; continue _fun0005 }
 10:
                    var2 = _closure2_slot0;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0005_ip = 50; continue _fun0005 }
 25:
                    var3 = var4.scrollToOffset;
                    var2 = {'offset': 0, 'animated': false};
                    var2 = var3.bind(var4)(var2);
 50:
                    var2 = _closure2_slot4;
                    var1 = 0;
                    var2['current'] = var1;
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var12.bind(var15)(var2, var3);
            var3 = var7.findIndex;
            var2 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.cardSize;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var1 = _closure1_slot9;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var7)(var2);
            var _closure2_slot5 = var2;
            var3 = var2 >= var11;
            var15 = inf;
            if(!var3) { _fun0002_ip = 345; continue _fun0002 }
 337:
            var3 = _closure1_slot8;
            var15 = var3 * var2;
 345:
            _closure2_slot6 = var15;
            var16 = _closure1_slot4;
            var12 = var16.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var15;
            var2 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg2;
                    var1 = arg1;
                    var4 = var2 + var1;
                    var2 = _closure2_slot6;
                    if(!(!(var4 < var2))) { _fun0006_ip = 53; continue _fun0006 }
 21:
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot6;
                    var5 = var4 - var2;
                    var2 = _closure1_slot9;
                    var2 = var5 / var2;
                    var2 = var2 | 0;
                    var2 = var3 + var2;
                    _fun0006_ip = 67; continue _fun0006;
 53:
                    var3 = _closure1_slot8;
                    var3 = var4 / var3;
                    var2 = var3 | 0;
 67:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var2 > var3)) { _fun0006_ip = 90; continue _fun0006 }
 80:
                    var1 = _closure2_slot4;
                    var1['current'] = var2;
 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var12.bind(var16)(var2, var3);
            var16 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 20;
            var3 = var3[var2];
            var3 = var16.bind(var6)(var3);
            var12 = var3.bind(var6)(var15, var12);
            var3 = _closure1_slot3;
            var3 = var3.bind(var6)(var12, var14);
            var23 = var3[var11];
            var3 = var3[var5];
            var19 = undefined;
            if(!var3) { _fun0002_ip = 436; continue _fun0002 }
 432:
            var19 = _closure1_slot8;
 436:
            var5 = _closure1_slot4;
            var14 = var5.useMemo;
            var12 = new Array(1);
            var12[0] = var7;
            var3 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 19;
                var3 = var5[var1];
                var2 = undefined;
                var7 = var4.bind(var2)(var3);
                var6 = var7.filterHappeningNowCards;
                var3 = _closure2_slot2;
                var3 = var6.bind(var7)(var3);
                var1 = var5[var1];
                var2 = var4.bind(var2)(var1);
                var1 = var2.sortHappeningNowCards;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var17 = var14.bind(var5)(var3, var12);
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = var12[var2];
            var14 = var3.bind(var6)(var2);
            var2 = var14.useHappeningNowScrollSnapping;
            var18 = var2.bind(var14)(var24);
            var15 = var5.useCallback;
            var14 = new Array(1);
            var14[0] = var10;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = var1.item;
                var1 = var1.index;
                var3 = _closure1_slot17;
                var2 = {};
                var2['index'] = var1;
                var1 = _closure2_slot3;
                var2['loading'] = var1;
                var1 = true;
                var2['panelVariant'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var4, var2);
                return var1;
            };
            var16 = var15.bind(var5)(var2, var14);
            var2 = 21;
            var2 = var12[var2];
            var12 = var3.bind(var6)(var2);
            var3 = var12.useSharedValue;
            var2 = new Array(0);
            var12 = var3.bind(var12)(var2);
            _closure2_slot7 = var12;
            var14 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function(arg1) {
                var1 = arg1;
                var7 = var1.viewableItems;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.updateSharedValueArrayIfChanged;
                var3 = _closure2_slot7;
                var6 = var7.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot18;
                    var1 = arg1;
                    var2 = var1.item;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var6.bind(var7)(var2);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var14 = var14.bind(var5)(var2, var3);
            _closure2_slot8 = var14;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var14;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.debounce;
                var2 = _closure2_slot8;
                var1 = 130;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var3.bind(var5)(var1, var2);
            var1 = var7.length;
            if(!(var11 === var1)) { _fun0002_ip = 639; continue _fun0002 }
 615:
            if(var10) { _fun0002_ip = 639; continue _fun0002 }
 618:
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var1 = var3.bind(var6)(var2, var1);
            _fun0002_ip = 1019; continue _fun0002;
 639:
            var5 = _closure1_slot12;
            if(var10) { _fun0002_ip = 931; continue _fun0002 }
 649:
            var2 = _closure1_slot13;
            var3 = var2.Provider;
            var2 = {};
            var2['value'] = var12;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var4 = var22[var4];
            var4 = var21.bind(var6)(var4);
            var12 = var4.AnalyticsLocationProvider;
            var4 = {};
            var4['value'] = var13;
            var13 = 24;
            var13 = var22[var13];
            var13 = var21.bind(var6)(var13);
            var14 = var13.FlashList;
            var13 = {};
            var13['ref'] = var24;
            var13['horizontal'] = var20;
            var24 = _closure1_slot16;
            var13['renderScrollComponent'] = var24;
            var24 = {};
            var24['width'] = var25;
            var25 = _closure1_slot7;
            var24['height'] = var25;
            var13['estimatedListSize'] = var24;
            var24 = _closure1_slot8;
            var13['estimatedItemSize'] = var24;
            var24 = _closure1_slot19;
            var13['overrideItemLayout'] = var24;
            var24 = 'fast';
            var13['decelerationRate'] = var24;
            var13['onScroll'] = var23;
            var13['disableHorizontalListHeightMeasurement'] = var20;
            var13['snapToInterval'] = var19;
            var13['snapToOffsets'] = var18;
            var18 = false;
            var13['showsHorizontalScrollIndicator'] = var18;
            var18 = 25;
            var19 = var22[var18];
            var19 = var21.bind(var6)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var6)(var18);
            var18 = var18.t;
            var18 = var18.1+boPj;
            var18 = var19.bind(var20)(var18);
            var13['accessibilityLabel'] = var18;
            var18 = var9.containerInner;
            var13['contentContainerStyle'] = var18;
            var13['data'] = var17;
            var13['renderItem'] = var16;
            var13['onViewableItemsChanged'] = var15;
            var15 = _closure1_slot18;
            var13['keyExtractor'] = var15;
            var15 = _closure1_slot20;
            var13['getItemType'] = var15;
            var13 = var5.bind(var6)(var14, var13);
            var4['children'] = var13;
            var4 = var5.bind(var6)(var12, var4);
            var2['children'] = var4;
            var2 = var5.bind(var6)(var3, var2);
            _fun0002_ip = 1016; continue _fun0002;
 931:
            var4 = _closure1_slot6;
            var3 = {};
            var9 = var9.loading;
            var3['style'] = var9;
            var9 = _closure1_slot17;
            var8 = var7.length;
            if(!(!(var8 > var11))) { _fun0002_ip = 976; continue _fun0002 }
 960:
            var8 = {'kind': 'placeholder', 'index': 0};
            _fun0002_ip = 980; continue _fun0002;
 976:
            var8 = var7[var11];
 980:
            var7 = {'index': 0, 'loading': null, 'fullwidth': true, 'panelVariant': true};
            var7['loading'] = var10;
            var7 = var9.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 1016:
            var1 = var2;
 1019:
            return var1;
        }
    };
    var4 = var5.bind(var9)(var4);
    var5 = function renderCard(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var2 = var6.kind;
            var1 = 'placeholder';
            if(!(var1 !== var2)) { _fun0007_ip = 990; continue _fun0007 }
 22:
            var1 = var5.loading;
            if(var1) { _fun0007_ip = 990; continue _fun0007 }
 34:
            var2 = var6.kind;
            var1 = 'live-guild-stage';
            if(!(var1 !== var2)) { _fun0007_ip = 931; continue _fun0007 }
 52:
            var1 = 'guild-event';
            if(!(var1 !== var2)) { _fun0007_ip = 872; continue _fun0007 }
 65:
            var1 = 'active-channel';
            if(!(var1 !== var2)) { _fun0007_ip = 813; continue _fun0007 }
 78:
            var1 = 'user';
            if(!(var1 !== var2)) { _fun0007_ip = 754; continue _fun0007 }
 89:
            var1 = 'activity';
            if(!(var1 !== var2)) { _fun0007_ip = 695; continue _fun0007 }
 100:
            var1 = 'voice';
            if(!(var1 !== var2)) { _fun0007_ip = 636; continue _fun0007 }
 111:
            var1 = 'invite';
            if(!(var1 !== var2)) { _fun0007_ip = 571; continue _fun0007 }
 122:
            var1 = 'customize-guild';
            if(!(var1 !== var2)) { _fun0007_ip = 506; continue _fun0007 }
 135:
            var1 = 'create-channel';
            if(!(var1 !== var2)) { _fun0007_ip = 441; continue _fun0007 }
 148:
            var1 = 'student-hub-add-channel';
            if(!(var1 !== var2)) { _fun0007_ip = 376; continue _fun0007 }
 161:
            var1 = 'embedded-activity';
            if(!(var1 !== var2)) { _fun0007_ip = 299; continue _fun0007 }
 174:
            var1 = 'unified-vc';
            if(!(var1 !== var2)) { _fun0007_ip = 222; continue _fun0007 }
 184:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 36;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var6);
            return var1;
 222:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 35;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var8 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var8 = copyDataProperties(var10, var9);
            var7 = _closure1_slot18;
            var8 = var7.bind(var3)(var6);
            var7 = 'cardKey';
            var1[var7] = var8;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 299:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 34;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var8 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var8 = copyDataProperties(var10, var9);
            var7 = _closure1_slot18;
            var8 = var7.bind(var3)(var6);
            var7 = 'cardKey';
            var1[var7] = var8;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 376:
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 33;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowStudentHubAddServer;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 441:
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 33;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowCardCreateChannel;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 506:
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 33;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowCardCustomizeGuild;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 571:
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 33;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowCardInvite;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 636:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 32;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 695:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 31;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 754:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 30;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 813:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 29;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 872:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 28;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 931:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 27;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var6 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
 990:
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 26;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowCardPlaceholder;
            var1 = {};
            var6 = var5.fullwidth;
            var1['fullWidth'] = var6;
            var5 = var5.panelVariant;
            var1['panelVariant'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var5 = function keyExtractor(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.kind;
            var2 = 'placeholder';
            if(!(var2 !== var3)) { _fun0008_ip = 569; continue _fun0008 }
 19:
            var2 = 'live-guild-stage';
            if(!(var2 !== var3)) { _fun0008_ip = 523; continue _fun0008 }
 32:
            var2 = 'guild-event';
            if(!(var2 !== var3)) { _fun0008_ip = 477; continue _fun0008 }
 45:
            var2 = 'active-channel';
            if(!(var2 !== var3)) { _fun0008_ip = 437; continue _fun0008 }
 58:
            var2 = 'user';
            if(!(var2 !== var3)) { _fun0008_ip = 397; continue _fun0008 }
 69:
            var2 = 'activity';
            if(!(var2 !== var3)) { _fun0008_ip = 397; continue _fun0008 }
 80:
            var2 = 'voice';
            if(!(var2 !== var3)) { _fun0008_ip = 340; continue _fun0008 }
 91:
            var2 = 'invite';
            if(!(var2 !== var3)) { _fun0008_ip = 333; continue _fun0008 }
 102:
            var2 = 'customize-guild';
            if(!(var2 !== var3)) { _fun0008_ip = 333; continue _fun0008 }
 115:
            var2 = 'create-channel';
            if(!(var2 !== var3)) { _fun0008_ip = 333; continue _fun0008 }
 128:
            var2 = 'student-hub-add-channel';
            if(!(var2 !== var3)) { _fun0008_ip = 333; continue _fun0008 }
 141:
            var2 = 'embedded-activity';
            if(!(var2 !== var3)) { _fun0008_ip = 256; continue _fun0008 }
 151:
            var2 = 'unified-vc';
            if(!(var2 !== var3)) { _fun0008_ip = 199; continue _fun0008 }
 161:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 36;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.assertNever;
            var3 = var3.bind(var4)(var1);
            return var2;
 199:
            var6 = var1.kind;
            var2 = var1.voiceState;
            var5 = var2.channelId;
            var2 = null;
            if(!(var2 == var5)) { _fun0008_ip = 226; continue _fun0008 }
 221:
            var5 = var1.userId;
 226:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
 256:
            var7 = var1.kind;
            var2 = var1.voiceState;
            var6 = var2.channelId;
            var2 = null;
            if(!(var2 == var6)) { _fun0008_ip = 283; continue _fun0008 }
 278:
            var6 = var1.userId;
 283:
            var2 = var1.activity;
            var8 = var2.applicationId;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var13 = '';
            var2 = '-';
            var12 = var7;
            var11 = var2;
            var10 = var6;
            var9 = var2;
            var2 = var13[var4](var12, var11, var10, var9, var8, var7);
            return var2;
 333:
            var2 = var1.kind;
            return var2;
 340:
            var6 = var1.kind;
            var2 = var1.voiceState;
            var5 = var2.channelId;
            var2 = null;
            if(!(var2 == var5)) { _fun0008_ip = 367; continue _fun0008 }
 362:
            var5 = var1.userId;
 367:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
 397:
            var6 = var1.kind;
            var5 = var1.userId;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
 437:
            var6 = var1.kind;
            var5 = var1.channelId;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
 477:
            var6 = var1.kind;
            var2 = var1.event;
            var5 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
 523:
            var6 = var1.kind;
            var2 = var1.stage;
            var5 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
 569:
            var5 = var1.kind;
            var4 = var1.index;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '-';
            var1 = var3.bind(var2)(var5, var1, var4);
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var5 = function overrideItemLayout(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 19;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.cardSize;
        var2 = arg2;
        var3 = var3.bind(var4)(var2);
        var2 = arg1;
        var2['size'] = var3;
        return var1;
    };
    var _closure1_slot19 = var5;
    var5 = function getItemType(arg1) {
        var1 = arg1;
        var1 = var1.kind;
        return var1;
    };
    var _closure1_slot20 = var5;
    var5 = 37;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ViewableHappeningNowCardKeysContext'] = var2;
    return var1;
})();