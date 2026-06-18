// app/components_native/common/TabBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function Tab(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.children;
            var13 = var2.index;
            var _closure2_slot0 = var13;
            var15 = var2.isSelected;
            var10 = var2.tabStyle;
            var11 = var2.tabStyleActive;
            var14 = var2.tabStyleSelected;
            var17 = var2.onSelect;
            var _closure2_slot1 = var17;
            var2 = _closure1_slot9;
            var4 = undefined;
            var16 = var2.bind(var4)();
            var6 = _closure1_slot3;
            var3 = var6.useState;
            var2 = function() {
                var1 = false;
                return var1;
            };
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3.bind(var4)(var6, var2);
            var2 = 0;
            var12 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot2 = var2;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var2;
            var3 = function() {
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var9 = var7.bind(var9)(var3, var6);
            var7 = _closure1_slot3;
            var6 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var7 = var6.bind(var7)(var2, var3);
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var17;
            var2[1] = var13;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var13 = 'tab';
            var1['accessibilityRole'] = var13;
            var1['onPressIn'] = var9;
            var1['onPressOut'] = var7;
            var1['onPress'] = var6;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var13 = var16.tab;
            var9 = new Array(6);
            var9[0] = var13;
            var9[1] = var10;
            var13 = null;
            if(!var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = var16.tabSelected;
case 2:
            var9[2] = var13;
            var13 = null;
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var16.tabActive;
case 4:
            var9[3] = var13;
            var13 = null;
            if(!var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var14;
case 6:
            var9[4] = var13;
            var10 = null;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var11;
case 8:
            var9[5] = var10;
            var5['style'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.TouchableWithoutFeedback;
    var _closure1_slot5 = var7;
    var4 = var4.FlatList;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'stretch'};
    var4['innerContainer'] = var9;
    var9 = {'flexGrow': 1, 'flexBasis': 'auto', 'flexShrink': 0, 'alignItems': 'center', 'justifyContent': 'center', 'marginBottom': 1, 'marginHorizontal': 1, 'padding': 10, 'borderBottomWidth': 2, 'borderBottomColor': 'transparent'};
    var4['tab'] = var9;
    var9 = {};
    var11 = 'rgba(0,0,0,0.1)';
    var9['backgroundColor'] = var11;
    var4['tabActive'] = var9;
    var9 = {};
    var11 = 6;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BRAND_600;
    var9['borderBottomColor'] = var11;
    var4['tabSelected'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/TabBar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var13 = var2.initialNumTabsToRender;
            var16 = var2.tabs;
            var20 = var2.tabIndexSelected;
            var _closure2_slot0 = var20;
            var15 = var2.tabStyle;
            var _closure2_slot1 = var15;
            var10 = var2.tabStyleActive;
            var _closure2_slot2 = var10;
            var9 = var2.tabStyleSelected;
            var _closure2_slot3 = var9;
            var7 = var2.onSelect;
            var _closure2_slot4 = var7;
            var19 = var2.containerStyle;
            var11 = var2.hideHorizontalScrollbar;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var11 = false;
case 10:
            var8 = var2.scrollToSelectedIndex;
            if(!(var8 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = false;
case 12:
            var _closure2_slot5 = var8;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot9;
            var18 = var2.bind(var4)();
            var5 = _closure1_slot3;
            var3 = var5.useRef;
            var2 = null;
            var2 = var3.bind(var5)(var2);
            _closure2_slot6 = var2;
            var5 = _closure1_slot3;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var20);
            _closure2_slot7 = var3;
            var14 = _closure1_slot3;
            var6 = var14.useEffect;
            var5 = new Array(1);
            var5[0] = var20;
            var3 = function() {
                var2 = _closure2_slot7;
                var1 = _closure2_slot0;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var6.bind(var14)(var3, var5);
            var6 = _closure1_slot3;
            var5 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var7;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var3 = var4.scrollToIndex;
                    var2 = {};
                    var2['index'] = var5;
                    var2 = var3.bind(var4)(var2);
case 14:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2, var3);
            _closure2_slot8 = var2;
            var3 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var5 = _closure1_slot3;
                var4 = var5.useState;
                var3 = function() {
                    var1 = _closure3_slot0;
                    return var1;
                };
                var6 = var4.bind(var5)(var3);
                var5 = _closure1_slot2;
                var4 = undefined;
                var3 = 1;
                var4 = var5.bind(var4)(var6, var3);
                var3 = 0;
                var5 = var4[var3];
                var _closure3_slot1 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = _closure2_slot7;
                            var3 = var2.current;
                            var2 = _closure3_slot1;
                            if(!(var3 === var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0004_ip = 16; continue _fun0004 }
case 18:
                            var2 = var3.scrollToIndex;
                            var1 = {};
                            var4 = _closure3_slot1;
                            var1['index'] = var4;
                            var4 = 1;
                            var1['viewPosition'] = var4;
                            var1 = var2.bind(var3)(var1);
case 16:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 500;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = _closure2_slot6;
                return var1;
            };
            var17 = var3.bind(var4)(var20);
            var14 = _closure1_slot3;
            var6 = var14.useCallback;
            var5 = function(arg1, arg2) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'tab-';
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var3 = new Array(0);
            var14 = var6.bind(var14)(var5, var3);
            var6 = _closure1_slot3;
            var5 = var6.useCallback;
            var3 = new Array(7);
            var3[0] = var20;
            var3[1] = var15;
            var3[2] = var10;
            var3[3] = var9;
            var3[4] = var8;
            var3[5] = var7;
            var3[6] = var2;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var7 = var2.index;
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot10;
                    var2 = {};
                    var2['index'] = var7;
                    var5 = _closure2_slot0;
                    var5 = var7 === var5;
                    var2['isSelected'] = var5;
                    var5 = _closure2_slot1;
                    var2['tabStyle'] = var5;
                    var5 = _closure2_slot2;
                    var2['tabStyleActive'] = var5;
                    var5 = _closure2_slot3;
                    var2['tabStyleSelected'] = var5;
                    var5 = _closure2_slot5;
                    if(var5) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var5 = _closure2_slot4;
                    _fun0005_ip = 21; continue _fun0005;
case 19:
                    var5 = _closure2_slot8;
case 21:
                    var2['onSelect'] = var5;
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var15 = var5.bind(var6)(var2, var3);
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.Gesture;
                var1 = var2.Native;
                var3 = var1.bind(var2)();
                var2 = var3.disallowInterruption;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = new Array(0);
            var8 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var18.container;
            var1['style'] = var5;
            var5 = 'tablist';
            var1['accessibilityRole'] = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 8;
            var7 = var9[var5];
            var7 = var6.bind(var4)(var7);
            var10 = var7.intl;
            var7 = var10.string;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.t1qXlK;
            var5 = var7.bind(var10)(var5);
            var1['accessibilityLabel'] = var5;
            var7 = _closure1_slot8;
            var5 = 7;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var8;
            var10 = _closure1_slot8;
            var9 = _closure1_slot6;
            var8 = {};
            var8['ref'] = var17;
            var17 = new Array(2);
            var17[0] = var19;
            var18 = var18.innerContainer;
            var17[1] = var18;
            var8['contentContainerStyle'] = var17;
            var17 = true;
            var8['horizontal'] = var17;
            var8['data'] = var16;
            var8['renderItem'] = var15;
            var8['keyExtractor'] = var14;
            var8['initialNumToRender'] = var13;
            var12 = _closure1_slot7;
            var8['onScrollToIndexFailed'] = var12;
            var11 = !var11;
            var8['showsHorizontalScrollIndicator'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();