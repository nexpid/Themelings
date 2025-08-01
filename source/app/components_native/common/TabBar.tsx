// app/components_native/common/TabBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var8 = var4.StyleSheet;
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
    var7 = var8.create;
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
    var11 = 5;
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
    var4 = function Tab(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.children;
            var12 = var2.index;
            var _closure2_slot0 = var12;
            var14 = var2.isSelected;
            var9 = var2.tabStyle;
            var10 = var2.tabStyleActive;
            var13 = var2.tabStyleSelected;
            var16 = var2.onSelect;
            var _closure2_slot1 = var16;
            var5 = _closure1_slot3;
            var3 = var5.useState;
            var2 = function() {
                var1 = false;
                return var1;
            };
            var6 = var3.bind(var5)(var2);
            var3 = _closure1_slot2;
            var4 = undefined;
            var2 = 2;
            var3 = var3.bind(var4)(var6, var2);
            var2 = 0;
            var11 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot2 = var2;
            var8 = var5.useCallback;
            var6 = new Array(1);
            var6[0] = var2;
            var3 = function() {
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var8 = var8.bind(var5)(var3, var6);
            var6 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var6 = var6.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var16;
            var2[1] = var12;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var12 = 'tab';
            var1['accessibilityRole'] = var12;
            var1['onPressIn'] = var8;
            var1['onPressOut'] = var6;
            var1['onPress'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = _closure1_slot9;
            var12 = var8.tab;
            var8 = new Array(6);
            var8[0] = var12;
            var8[1] = var9;
            var12 = null;
            if(!var14) { _fun0001_ip = 266; continue _fun0001 }
 256:
            var16 = _closure1_slot9;
            var12 = var16.tabSelected;
 266:
            var8[2] = var12;
            var12 = null;
            if(!var11) { _fun0001_ip = 285; continue _fun0001 }
 275:
            var15 = _closure1_slot9;
            var12 = var15.tabActive;
 285:
            var8[3] = var12;
            var12 = null;
            if(!var14) { _fun0001_ip = 297; continue _fun0001 }
 294:
            var12 = var13;
 297:
            var8[4] = var12;
            var9 = null;
            if(!var11) { _fun0001_ip = 309; continue _fun0001 }
 306:
            var9 = var10;
 309:
            var8[5] = var9;
            var5['style'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/TabBar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var11 = var2.initialNumTabsToRender;
            var14 = var2.tabs;
            var19 = var2.tabIndexSelected;
            var _closure2_slot0 = var19;
            var18 = var2.tabStyle;
            var _closure2_slot1 = var18;
            var16 = var2.tabStyleActive;
            var _closure2_slot2 = var16;
            var13 = var2.tabStyleSelected;
            var _closure2_slot3 = var13;
            var7 = var2.onSelect;
            var _closure2_slot4 = var7;
            var17 = var2.containerStyle;
            var9 = var2.hideHorizontalScrollbar;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0002_ip = 89; continue _fun0002 }
 87:
            var9 = false;
 89:
            var8 = var2.scrollToSelectedIndex;
            if(!(var8 === var4)) { _fun0002_ip = 103; continue _fun0002 }
 101:
            var8 = false;
 103:
            var _closure2_slot5 = var8;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var5 = _closure1_slot3;
            var3 = var5.useRef;
            var2 = null;
            var2 = var3.bind(var5)(var2);
            _closure2_slot6 = var2;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var19);
            _closure2_slot7 = var3;
            var12 = var5.useEffect;
            var6 = new Array(1);
            var6[0] = var19;
            var3 = function() {
                var2 = _closure2_slot7;
                var1 = _closure2_slot0;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var12.bind(var5)(var3, var6);
            var6 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var7;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 49; continue _fun0003 }
 32:
                    var3 = var4.scrollToIndex;
                    var2 = {};
                    var2['index'] = var5;
                    var2 = var3.bind(var4)(var2);
 49:
                    return var1;
                }
            };
            var2 = var6.bind(var5)(var2, var3);
            _closure2_slot8 = var2;
            var3 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot3;
                var5 = var4.useState;
                var3 = function() {
                    var1 = _closure3_slot0;
                    return var1;
                };
                var6 = var5.bind(var4)(var3);
                var5 = _closure1_slot2;
                var3 = undefined;
                var2 = 1;
                var3 = var5.bind(var3)(var6, var2);
                var2 = 0;
                var5 = var3[var2];
                var _closure3_slot1 = var5;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = _closure2_slot7;
                            var3 = var2.current;
                            var2 = _closure3_slot1;
                            if(!(var3 === var2)) { _fun0004_ip = 67; continue _fun0004 }
 23:
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0004_ip = 67; continue _fun0004 }
 38:
                            var2 = var3.scrollToIndex;
                            var1 = {};
                            var4 = _closure3_slot1;
                            var1['index'] = var4;
                            var4 = 1;
                            var1['viewPosition'] = var4;
                            var1 = var2.bind(var3)(var1);
 67:
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
            var15 = var3.bind(var4)(var19);
            var12 = var5.useCallback;
            var6 = function(arg1, arg2) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'tab-';
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var3 = new Array(0);
            var12 = var12.bind(var5)(var6, var3);
            var6 = var5.useCallback;
            var3 = new Array(7);
            var3[0] = var19;
            var3[1] = var18;
            var3[2] = var16;
            var3[3] = var13;
            var3[4] = var8;
            var3[5] = var7;
            var3[6] = var2;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                    if(var5) { _fun0005_ip = 86; continue _fun0005 }
 80:
                    var5 = _closure2_slot4;
                    _fun0005_ip = 90; continue _fun0005;
 86:
                    var5 = _closure2_slot8;
 90:
                    var2['onSelect'] = var5;
                    var2['children'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var13 = var6.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
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
            var7 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var16 = _closure1_slot9;
            var5 = var16.container;
            var1['style'] = var5;
            var5 = 'tablist';
            var1['accessibilityRole'] = var5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 7;
            var18 = var8[var5];
            var18 = var6.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.t1qXlJ;
            var5 = var18.bind(var19)(var5);
            var1['accessibilityLabel'] = var5;
            var5 = 6;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var7;
            var8 = _closure1_slot6;
            var7 = {};
            var7['ref'] = var15;
            var15 = new Array(2);
            var15[0] = var17;
            var16 = var16.innerContainer;
            var15[1] = var16;
            var7['contentContainerStyle'] = var15;
            var15 = true;
            var7['horizontal'] = var15;
            var7['data'] = var14;
            var7['renderItem'] = var13;
            var7['keyExtractor'] = var12;
            var7['initialNumToRender'] = var11;
            var10 = _closure1_slot7;
            var7['onScrollToIndexFailed'] = var10;
            var9 = !var9;
            var7['showsHorizontalScrollIndicator'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();