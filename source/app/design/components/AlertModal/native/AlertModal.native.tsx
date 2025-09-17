// app/design/components/AlertModal/native/AlertModal.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var8;
    var1 = function getAlertModalItemKey(arg1) {
        var1 = arg1;
        var1 = var1.key;
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function dismissTopAlert() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 10;
            var7 = var6[var4];
            var1 = undefined;
            var7 = var5.bind(var1)(var7);
            var8 = var7.useAlertStore;
            var7 = var8.getState;
            var7 = var7.bind(var8)();
            var8 = var7.alerts;
            var7 = _closure1_slot5;
            var10 = var7.bind(var1)(var8);
            var7 = 0;
            var7 = var10[var7];
            var9 = var10.slice;
            var8 = 1;
            var8 = var9.bind(var10)(var8);
            var _closure2_slot0 = var8;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.dismissAlert;
            var4 = null;
            var8 = var4 == var7;
            var4 = undefined;
            if(var8) { _fun0001_ip = 112; continue _fun0001 }
 107:
            var4 = var7.key;
 112:
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.useAlertStore;
                var2 = var3.setState;
                var1 = {};
                var4 = _closure2_slot0;
                var1['alerts'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function AlertModalBackdrop() {
        var4 = _closure1_slot6;
        var3 = var4.useContext;
        var2 = _closure1_slot16;
        var7 = var3.bind(var4)(var2);
        var _closure2_slot0 = var7;
        var2 = _closure1_slot29;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot4;
        var2 = 2;
        var3 = var3.bind(var4)(var6, var2);
        var2 = 0;
        var11 = var3[var2];
        var _closure2_slot1 = var11;
        var2 = 1;
        var12 = var3[var2];
        var _closure2_slot2 = var12;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var10 = 11;
        var2 = var9[var10];
        var3 = var8.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function t() {
            var1 = {};
            var5 = _closure1_slot23;
            var3 = _closure2_slot2;
            var2 = var3.get;
            var4 = var2.bind(var3)();
            var3 = undefined;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = true;
                    var1 = arg1;
                    var1 = var2 === var1;
                    if(!var1) { _fun0002_ip = 34; continue _fun0002 }
 12:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    var1 = var2 === var3;
 34:
                    if(!var1) { _fun0002_ip = 94; continue _fun0002 }
 37:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.TransitionStates;
                    var2 = var2.YEETED;
                    var1 = var3 === var2;
 94:
                    if(!var1) { _fun0002_ip = 143; continue _fun0002 }
 97:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
 143:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var3)(var4, var2);
            var1['opacity'] = var2;
            return var1;
        };
        var6 = {};
        var13 = _closure1_slot23;
        var6['withAlertModalSpring'] = var13;
        var6['sharedVisible'] = var12;
        var6['sharedTransitionState'] = var11;
        var11 = 9;
        var11 = var9[var11];
        var11 = var8.bind(var4)(var11);
        var11 = var11.TransitionStates;
        var6['TransitionStates'] = var11;
        var10 = var9[var10];
        var10 = var8.bind(var4)(var10);
        var10 = var10.runOnJS;
        var6['runOnJS'] = var10;
        var6['cleanUp'] = var7;
        var1['__closure'] = var6;
        var6 = 4470729133936.0;
        var1['__workletHash'] = var6;
        var6 = _closure1_slot20;
        var1['__initData'] = var6;
        var6 = var2.bind(var3)(var1);
        var3 = _closure1_slot11;
        var1 = 16;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Backdrop;
        var1 = {};
        var7 = 'strong';
        var1['blur'] = var7;
        var1['style'] = var6;
        var5 = _closure1_slot27;
        var1['onDismiss'] = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.Xkfav7;
        var5 = var6.bind(var7)(var5);
        var1['accessibilityLabel'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function useSharedAnimationState() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot6;
            var3 = var4.useContext;
            var2 = _closure1_slot15;
            var4 = var3.bind(var4)(var2);
            var _closure2_slot0 = var4;
            var5 = _closure1_slot6;
            var3 = var5.useContext;
            var2 = _closure1_slot16;
            var9 = var3.bind(var5)(var2);
            var _closure2_slot1 = var9;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = 11;
            var3 = var2[var13];
            var12 = undefined;
            var5 = var6.bind(var12)(var3);
            var3 = var5.useSharedValue;
            var14 = 9;
            var2 = var2[var14];
            var2 = var6.bind(var12)(var2);
            var2 = var2.TransitionStates;
            var6 = var2.MOUNTED;
            var2 = 0;
            if(!(var4 === var6)) { _fun0003_ip = 112; continue _fun0003 }
 109:
            var2 = 1;
 112:
            var2 = var3.bind(var5)(var2);
            var _closure2_slot2 = var2;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = var10[var13];
            var5 = var11.bind(var12)(var3);
            var3 = var5.useSharedValue;
            var3 = var3.bind(var5)(var4);
            var _closure2_slot3 = var3;
            var8 = _closure1_slot6;
            var6 = var8.useLayoutEffect;
            var5 = new Array(3);
            var5[0] = var2;
            var5[1] = var4;
            var5[2] = var3;
            var4 = function() {
                var3 = _closure2_slot3;
                var2 = var3.set;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var4 = var6.bind(var8)(var4, var5);
            var4 = var10[var13];
            var6 = var11.bind(var12)(var4);
            var5 = var6.useAnimatedReaction;
            var4 = function n() {
                var2 = _closure2_slot3;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = {};
            var8['sharedTransitionState'] = var3;
            var4['__closure'] = var8;
            var8 = 14603144870585.0;
            var4['__workletHash'] = var8;
            var8 = _closure1_slot24;
            var4['__initData'] = var8;
            var1 = function t(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var4 = var2.YEETED;
                    var2 = arg1;
                    if(!(var2 !== var4)) { _fun0004_ip = 66; continue _fun0004 }
 44:
                    var5 = _closure2_slot2;
                    var4 = var5.set;
                    var2 = 1;
                    var2 = var4.bind(var5)(var2);
                    _fun0004_ip = 145; continue _fun0004;
 66:
                    var5 = _closure2_slot2;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = 1;
                    if(!(var4 !== var5)) { _fun0004_ip = 129; continue _fun0004 }
 89:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.runOnJS;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.bind(var1)();
                    _fun0004_ip = 145; continue _fun0004;
 129:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
 145:
                    return var1;
                }
            };
            var8 = {};
            var14 = var10[var14];
            var14 = var11.bind(var12)(var14);
            var14 = var14.TransitionStates;
            var8['TransitionStates'] = var14;
            var8['sharedVisible'] = var2;
            var10 = var10[var13];
            var10 = var11.bind(var12)(var10);
            var10 = var10.runOnJS;
            var8['runOnJS'] = var10;
            var8['cleanUp'] = var9;
            var1['__closure'] = var8;
            var8 = 9486923983340.0;
            var1['__workletHash'] = var8;
            var7 = _closure1_slot25;
            var1['__initData'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var4 = function AlertActions(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var4 = _closure1_slot11;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 21;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Stack;
        var1 = {};
        var6 = 12;
        var1['spacing'] = var6;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot30 = var4;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var6 = 0;
    var5 = var8[var6];
    var1 = undefined;
    var5 = var16.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var16.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var16.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var9 = var8[var5];
    var5 = metroImportAll;
    var9 = var5.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var10 = var5.View;
    var _closure1_slot7 = var10;
    var15 = var5.StyleSheet;
    var _closure1_slot8 = var15;
    var10 = var5.Dimensions;
    var _closure1_slot9 = var10;
    var5 = var5.ScrollView;
    var _closure1_slot10 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var10 = var5.NOOP;
    var5 = 6;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var11 = var5.jsx;
    var _closure1_slot11 = var11;
    var5 = var5.jsxs;
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var8[var5];
    var12 = var7.bind(var1)(var5);
    var11 = var12.createStyles;
    var5 = {};
    var14 = 'center';
    var13 = {'flex': 1, 'position': 'relative', 'justifyContent': 'center', 'alignItems': 'center', 'paddingHorizontal': 16};
    var5['root'] = var13;
    var13 = {};
    var19 = var15.absoluteFillObject;
    var20 = var13;
    var15 = copyDataProperties(var20, var19);
    var5['overlay'] = var13;
    var13 = {'backgroundColor': null, 'margin': 16, 'width': '100%', 'height': '100%'};
    var15 = 8;
    var17 = var8[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.ALERT_BG;
    var13['backgroundColor'] = var17;
    var17 = var8[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.xl;
    var13['borderRadius'] = var17;
    var15 = var8[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.shadows;
    var19 = var15.SHADOW_TOP_HIGH;
    var20 = var13;
    var15 = copyDataProperties(var20, var19);
    var5['content'] = var13;
    var13 = {'width': '100%', 'height': '100%', 'overflow': 'hidden', 'padding': 24, 'position': 'relative'};
    var5['overflow'] = var13;
    var13 = {};
    var13['alignItems'] = var14;
    var5['body'] = var13;
    var13 = {};
    var13['textAlign'] = var14;
    var5['contentText'] = var13;
    var5 = var11.bind(var12)(var5);
    var _closure1_slot13 = var5;
    var5 = {'overshootClamping': true, 'damping': 35, 'stiffness': 450, 'mass': 0.5, 'restDisplacementThreshold': 0.001};
    var _closure1_slot14 = var5;
    var11 = var9.createContext;
    var5 = 9;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.TransitionStates;
    var5 = var5.YEETED;
    var5 = var11.bind(var9)(var5);
    var _closure1_slot15 = var5;
    var5 = var9.createContext;
    var5 = var5.bind(var9)(var10);
    var _closure1_slot16 = var5;
    var5 = var9.createContext;
    var5 = var5.bind(var9)(var6);
    var _closure1_slot17 = var5;
    var6 = var9.createContext;
    var5 = '';
    var5 = var6.bind(var9)(var5);
    var _closure1_slot18 = var5;
    var6 = var9.createContext;
    var5 = null;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot19 = var5;
    var6 = var9.memo;
    var5 = function() {
        var2 = _closure1_slot13;
        var4 = undefined;
        var3 = var2.bind(var4)();
        var _closure2_slot0 = var3;
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var6 = 10;
        var6 = var9[var6];
        var8 = var2.bind(var4)(var6);
        var7 = var8.useAlertStore;
        var6 = function(arg1) {
            var1 = arg1;
            var1 = var1.alerts;
            return var1;
        };
        var7 = var7.bind(var8)(var6);
        var6 = 11;
        var6 = var9[var6];
        var10 = var2.bind(var4)(var6);
        var8 = var10.useSharedValue;
        var6 = 0;
        var11 = var8.bind(var10)(var6);
        var _closure2_slot1 = var11;
        var6 = function createTransitionGroupItems(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var6 = arg1;
                var1 = var6.length;
                var5 = 0;
                if(!(var5 !== var1)) { _fun0005_ip = 73; continue _fun0005 }
 16:
                var1 = new Array(1);
                var3 = {'type': 'backdrop', 'key': 'backdrop'};
                var1[0] = var3;
                var _closure3_slot0 = var1;
                var4 = var6.slice;
                var3 = 3;
                var4 = var4.bind(var6)(var5, var3);
                var3 = var4.forEach;
                var2 = function(arg1, arg2) {
                    var4 = arg1;
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var5 = 'alert';
                    var1['type'] = var5;
                    var1['alert'] = var4;
                    var4 = var4.key;
                    var1['key'] = var4;
                    var4 = arg2;
                    var1['index'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
 73:
                var1 = new Array(0);
                return var1;
            }
        };
        var7 = var6.bind(var4)(var7);
        var _closure2_slot2 = var7;
        var12 = _closure1_slot6;
        var10 = var12.useLayoutEffect;
        var8 = new Array(1);
        var8[0] = var7;
        var6 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = _closure2_slot2;
                var2 = var1.length;
                var1 = 0;
                if(!(var2 > var1)) { _fun0006_ip = 53; continue _fun0006 }
 18:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.dismissGlobalKeyboard;
                var1 = var1.bind(var2)();
 53:
                var1 = undefined;
                return var1;
            }
        };
        var6 = var10.bind(var12)(var6, var8);
        var10 = _closure1_slot6;
        var8 = var10.useCallback;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function(arg1) {
            var4 = _closure1_slot11;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = _closure1_slot8;
            var5 = var5.absoluteFillObject;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot0;
            var5 = 14;
            var5 = var9[var5];
            var5 = var6.bind(var3)(var5);
            var6 = var5.Dialog;
            var5 = {};
            var9 = _closure1_slot27;
            var5['onDismiss'] = var9;
            var10 = _closure1_slot11;
            var9 = _closure1_slot7;
            var8 = {};
            var11 = _closure2_slot0;
            var11 = var11.root;
            var8['style'] = var11;
            var11 = 'box-none';
            var8['pointerEvents'] = var11;
            var11 = arg1;
            var8['children'] = var11;
            var8 = var10.bind(var3)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var8 = var8.bind(var10)(var3, var6);
        var10 = _closure1_slot6;
        var6 = var10.useCallback;
        var3 = new Array(1);
        var3[0] = var11;
        var1 = function(arg1, arg2, arg3, arg4) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg1;
                var2 = arg2;
                var1 = var2.type;
                var4 = 'alert';
                if(!(var4 !== var1)) { _fun0007_ip = 42; continue _fun0007 }
 19:
                var7 = _closure1_slot11;
                var6 = _closure1_slot28;
                var3 = undefined;
                var1 = {};
                var1 = var7.bind(var3)(var6, var1);
                _fun0007_ip = 54; continue _fun0007;
 42:
                var3 = var2.alert;
                var1 = var3.node;
 54:
                var3 = var2.type;
                var15 = -1;
                if(!(var4 === var3)) { _fun0007_ip = 74; continue _fun0007 }
 69:
                var15 = var2.index;
 74:
                var4 = _closure1_slot11;
                var2 = _closure1_slot19;
                var3 = var2.Provider;
                var2 = {};
                var6 = _closure2_slot1;
                var2['value'] = var6;
                var8 = _closure1_slot11;
                var6 = _closure1_slot16;
                var7 = var6.Provider;
                var6 = {};
                var9 = arg4;
                var6['value'] = var9;
                var11 = _closure1_slot11;
                var9 = _closure1_slot15;
                var10 = var9.Provider;
                var9 = {};
                var12 = arg3;
                var9['value'] = var12;
                var14 = _closure1_slot11;
                var12 = _closure1_slot17;
                var13 = var12.Provider;
                var12 = {};
                var12['value'] = var15;
                var17 = _closure1_slot11;
                var15 = _closure1_slot18;
                var16 = var15.Provider;
                var15 = {};
                var15['value'] = var5;
                var20 = _closure1_slot11;
                var18 = _closure1_slot6;
                var19 = var18.Suspense;
                var18 = {};
                var21 = null;
                var18['fallback'] = var21;
                var18['children'] = var1;
                var1 = undefined;
                var18 = var20.bind(var1)(var19, var18);
                var15['children'] = var18;
                var15 = var17.bind(var1)(var16, var15);
                var12['children'] = var15;
                var12 = var14.bind(var1)(var13, var12);
                var9['children'] = var12;
                var9 = var11.bind(var1)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var6 = var6.bind(var10)(var1, var3);
        var3 = _closure1_slot11;
        var1 = 9;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TransitionGroup;
        var1 = {};
        var1['wrapChildren'] = var8;
        var1['items'] = var7;
        var1['renderItem'] = var6;
        var5 = _closure1_slot26;
        var1['getItemKey'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var5 = var6.bind(var9)(var5);
    var6 = {};
    var9 = 'function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}';
    var6['code'] = var9;
    var _closure1_slot20 = var6;
    var6 = {};
    var9 = "function AlertModalNativeTsx2(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}";
    var6['code'] = var9;
    var _closure1_slot21 = var6;
    var6 = {};
    var9 = "function withAlertModalSpring_AlertModalNativeTsx3(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}";
    var6['code'] = var9;
    var _closure1_slot22 = var6;
    var6 = function() {
        var1 = function withAlertModalSpring(arg1, arg2) {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 23;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var4.bind(var2)(var3);
            var5 = var6.withSpring;
            var9 = _closure1_slot14;
            var10 = arg1;
            var8 = 'animate-always';
            var7 = arg2;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var1;
        };
        var3 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 23;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.withSpring;
        var3['withSpring'] = var4;
        var4 = _closure1_slot14;
        var3['MODAL_SPRING'] = var4;
        var1['__closure'] = var3;
        var3 = 15556562210180.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot22;
        var1['__initData'] = var2;
        return var1;
    };
    var6 = var6.bind(var1)();
    var _closure1_slot23 = var6;
    var6 = {};
    var9 = 'function AlertModalNativeTsx4(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}';
    var6['code'] = var9;
    var _closure1_slot24 = var6;
    var6 = {};
    var9 = 'function AlertModalNativeTsx5(transitionState){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}';
    var6['code'] = var9;
    var _closure1_slot25 = var6;
    var6 = 25;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'design/components/AlertModal/native/AlertModal.native.tsx';
    var6 = var7.bind(var8)(var6);
    var3['AlertModalContainer'] = var5;
    var5 = function useDismissModalCallback() {
        var5 = _closure1_slot6;
        var4 = var5.useContext;
        var3 = _closure1_slot18;
        var5 = var4.bind(var5)(var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot6;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dismissAlert;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useDismissModalCallback'] = var5;
    var5 = function AlertModal(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var18 = var1.header;
            var28 = var1.title;
            var24 = var1.content;
            var19 = var1.actions;
            var15 = var1.extraContent;
            var3 = _closure1_slot6;
            var2 = var3.useContext;
            var1 = _closure1_slot16;
            var22 = var2.bind(var3)(var1);
            var _closure2_slot0 = var22;
            var3 = _closure1_slot6;
            var2 = var3.useContext;
            var1 = _closure1_slot17;
            var8 = var2.bind(var3)(var1);
            var _closure2_slot1 = var8;
            var1 = _closure1_slot13;
            var4 = undefined;
            var25 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = var3.useContext;
            var1 = _closure1_slot19;
            var14 = var2.bind(var3)(var1);
            var _closure2_slot2 = var14;
            var3 = _closure1_slot6;
            var2 = var3.useContext;
            var26 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 18;
            var1 = var9[var1];
            var1 = var26.bind(var4)(var1);
            var1 = var1.AccessibilityPreferencesContext;
            var1 = var2.bind(var3)(var1);
            var1 = var1.reducedMotion;
            var13 = var1.enabled;
            var _closure2_slot3 = var13;
            var1 = 11;
            var2 = var9[var1];
            var3 = var26.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var3 = var2.bind(var3)(var8);
            var _closure2_slot4 = var3;
            var2 = _closure1_slot29;
            var7 = var2.bind(var4)();
            var6 = _closure1_slot4;
            var2 = 2;
            var7 = var6.bind(var4)(var7, var2);
            var6 = 0;
            var23 = var7[var6];
            var _closure2_slot5 = var23;
            var2 = 1;
            var27 = var7[var2];
            var _closure2_slot6 = var27;
            var2 = _closure1_slot1;
            var7 = 19;
            var7 = var9[var7];
            var7 = var2.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var20 = var7.top;
            var _closure2_slot7 = var20;
            var17 = var7.bottom;
            var _closure2_slot8 = var17;
            var11 = _closure1_slot9;
            var10 = var11.get;
            var7 = 'window';
            var7 = var10.bind(var11)(var7);
            var21 = var7.height;
            var _closure2_slot9 = var21;
            var7 = var9[var1];
            var11 = var26.bind(var4)(var7);
            var10 = var11.useAnimatedStyle;
            var7 = function p() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot9;
                    var1 = 32;
                    var3 = var2 - var1;
                    var1 = global;
                    var5 = var1.Math;
                    var4 = var5.max;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot8;
                    var2 = var4.bind(var5)(var2, var1);
                    var1 = 2;
                    var2 = var1 * var2;
                    var1 = {};
                    var4 = 'absolute';
                    var1['position'] = var4;
                    var9 = _closure1_slot23;
                    var6 = _closure2_slot6;
                    var5 = var6.get;
                    var7 = var5.bind(var6)();
                    var6 = undefined;
                    var5 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var2 = true;
                            var1 = arg1;
                            var1 = var2 === var1;
                            if(!var1) { _fun0010_ip = 34; continue _fun0010 }
 12:
                            var3 = _closure2_slot6;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 0;
                            var1 = var2 === var3;
 34:
                            if(!var1) { _fun0010_ip = 94; continue _fun0010 }
 37:
                            var3 = _closure2_slot5;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
 94:
                            if(!var1) { _fun0010_ip = 143; continue _fun0010 }
 97:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 143:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var9.bind(var6)(var7, var5);
                    var1['opacity'] = var5;
                    var7 = _closure2_slot4;
                    var5 = var7.get;
                    var9 = var5.bind(var7)();
                    var5 = 10;
                    var5 = var5 - var9;
                    var1['zIndex'] = var5;
                    var5 = var7.get;
                    var7 = var5.bind(var7)();
                    var5 = 0;
                    var7 = var7 > var5;
                    var5 = 'auto';
                    if(!var7) { _fun0009_ip = 157; continue _fun0009 }
 144:
                    var9 = _closure2_slot2;
                    var7 = var9.get;
                    var5 = var7.bind(var9)();
 157:
                    var1['height'] = var5;
                    var2 = var3 - var2;
                    var1['maxHeight'] = var2;
                    var2 = _closure2_slot3;
                    if(var2) { _fun0009_ip = 409; continue _fun0009 }
 180:
                    var3 = {};
                    var5 = _closure1_slot23;
                    var7 = _closure2_slot6;
                    var2 = var7.get;
                    var9 = var2.bind(var7)();
                    var2 = 0.7;
                    var7 = 1;
                    if(!(var7 === var9)) { _fun0009_ip = 247; continue _fun0009 }
 216:
                    var10 = _closure2_slot4;
                    var9 = var10.get;
                    var10 = var9.bind(var10)();
                    var9 = 0.1;
                    var9 = var9 * var10;
                    var2 = var7 - var9;
 247:
                    var2 = var5.bind(var6)(var2);
                    var3['scale'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var5 = _closure1_slot23;
                    var9 = _closure2_slot6;
                    var4 = var9.get;
                    var4 = var4.bind(var9)();
                    if(!(var7 !== var4)) { _fun0009_ip = 314; continue _fun0009 }
 288:
                    var7 = _closure2_slot4;
                    var4 = var7.get;
                    var4 = var4.bind(var7)();
                    var7 = 50;
                    var4 = var7 * var4;
                    var4 = var7 - var4;
                    _fun0009_ip = 393; continue _fun0009;
 314:
                    var9 = [0];
                    var7 = -20;
                    var9[1] = var7;
                    var7 = -34;
                    var9[2] = var7;
                    var10 = _closure2_slot4;
                    var7 = var10.get;
                    var7 = var7.bind(var10)();
                    var7 = var9[var7];
                    var9 = null;
                    if(!(var9 == var7)) { _fun0009_ip = 390; continue _fun0009 }
 367:
                    var9 = _closure2_slot6;
                    var8 = var9.get;
                    var9 = var8.bind(var9)();
                    var8 = -12;
                    var7 = var8 * var9;
 390:
                    var4 = var7;
 393:
                    var4 = var5.bind(var6)(var4);
                    var3['translateY'] = var4;
                    var2[1] = var3;
                    _fun0009_ip = 413; continue _fun0009;
 409:
                    var2 = new Array(0);
 413:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['sharedVisible'] = var27;
            var12['sharedTransitionState'] = var23;
            var23 = 9;
            var23 = var9[var23];
            var23 = var26.bind(var4)(var23);
            var23 = var23.TransitionStates;
            var12['TransitionStates'] = var23;
            var23 = var9[var1];
            var23 = var26.bind(var4)(var23);
            var23 = var23.runOnJS;
            var12['runOnJS'] = var23;
            var12['cleanUp'] = var22;
            var12['windowHeight'] = var21;
            var21 = 16;
            var12['ALERT_MODAL_MARGIN'] = var21;
            var12['safeAreaTop'] = var20;
            var12['safeAreaBottom'] = var17;
            var17 = _closure1_slot23;
            var12['withAlertModalSpring'] = var17;
            var12['sharedIndex'] = var3;
            var12['sharedTopHeight'] = var14;
            var12['useReducedMotion'] = var13;
            var7['__closure'] = var12;
            var12 = 655123755546.0;
            var7['__workletHash'] = var12;
            var12 = _closure1_slot21;
            var7['__initData'] = var12;
            var7 = var10.bind(var11)(var7);
            var12 = _closure1_slot6;
            var11 = var12.useLayoutEffect;
            var10 = new Array(2);
            var10[0] = var8;
            var10[1] = var3;
            var3 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var11.bind(var12)(var3, var10);
            var3 = 20;
            var3 = var9[var3];
            var10 = var2.bind(var4)(var3);
            var3 = function() {
                var2 = _closure1_slot27;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = true;
                return var1;
            };
            var3 = var10.bind(var4)(var3);
            var3 = _closure1_slot11;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var9 = 'no-hide-descendants';
            if(!(var6 === var8)) { _fun0008_ip = 561; continue _fun0008 }
 557:
            var9 = 'auto';
 561:
            var1['importantForAccessibility'] = var9;
            var6 = var6 !== var8;
            var1['accessibilityElementsHidden'] = var6;
            var8 = var25.content;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var5 = function onLayout(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['onLayout'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot10;
            var5 = {};
            var8 = false;
            var5['alwaysBounceVertical'] = var8;
            var10 = _closure1_slot11;
            var9 = _closure1_slot7;
            var8 = {};
            var11 = var25.overflow;
            var8['style'] = var11;
            var13 = _closure1_slot12;
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var17 = 21;
            var11 = var26[var17];
            var11 = var22.bind(var4)(var11);
            var12 = var11.Stack;
            var11 = {};
            var14 = 24;
            var11['spacing'] = var14;
            var14 = new Array(4);
            var14[0] = var18;
            var17 = var26[var17];
            var17 = var22.bind(var4)(var17);
            var18 = var17.Stack;
            var17 = {};
            var20 = 8;
            var17['spacing'] = var20;
            var21 = var25.body;
            var20 = new Array(1);
            var20[0] = var21;
            var17['style'] = var20;
            var27 = _closure1_slot11;
            var21 = 22;
            var20 = var26[var21];
            var20 = var22.bind(var4)(var20);
            var23 = var20.Text;
            var20 = {'variant': 'heading-lg/bold', 'accessibilityRole': 'header', 'color': 'header-primary'};
            var20['children'] = var28;
            var23 = var27.bind(var4)(var23, var20);
            var20 = new Array(2);
            var20[0] = var23;
            var23 = _closure1_slot11;
            var21 = var26[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
            var25 = var25.contentText;
            var21['style'] = var25;
            var21['children'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[1] = var21;
            var17['children'] = var20;
            var17 = var13.bind(var4)(var18, var17);
            var14[1] = var17;
            var14[2] = var15;
            var15 = null;
            var17 = var15 != var19;
            if(!var17) { _fun0008_ip = 887; continue _fun0008 }
 867:
            var18 = _closure1_slot11;
            var17 = _closure1_slot30;
            var16 = {};
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 887:
            var14[3] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['AlertModal'] = var5;
    var3['AlertActions'] = var4;
    var2 = function AlertActionButton(arg1) {
        var4 = arg1;
        var1 = var4.onPress;
        var _closure2_slot0 = var1;
        var1 = null;
        var3 = Object.create(var1);
        var2 = 0;
        var3['onPress'] = var2;
        var11 = {};
        var10 = var4;
        var9 = var3;
        var6 = copyDataProperties(var11, var10, var9);
        var7 = _closure1_slot6;
        var4 = var7.useState;
        var3 = false;
        var8 = var4.bind(var7)(var3);
        var7 = _closure1_slot4;
        var4 = undefined;
        var3 = 2;
        var3 = var7.bind(var4)(var8, var3);
        var7 = var3[var2];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot1 = var2;
        var8 = _closure1_slot6;
        var3 = var8.useContext;
        var2 = _closure1_slot18;
        var2 = var3.bind(var8)(var2);
        var _closure2_slot2 = var2;
        var3 = _closure1_slot11;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 24;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Button;
        var1 = {};
        var11 = var1;
        var10 = var6;
        var6 = copyDataProperties(var11, var10);
        var8 = true;
        var6 = 'grow';
        var1[var6] = var8;
        var6 = 'loading';
        var1[var6] = var7;
        var5 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0011_ip = 126; continue _fun0011 }
 7:
                        var2 = _closure2_slot0;
                        var5 = null;
                        var6 = var5 == var2;
                        var3 = undefined;
                        var2 = undefined;
                        if(var6) { _fun0011_ip = 39; continue _fun0011 }
 27:
                        var7 = _closure2_slot0;
                        var6 = arg1;
                        var2 = var7.bind(var3)(var6);
 39:
                        var5 = var5 != var2;
                        if(!var5) { _fun0011_ip = 58; continue _fun0011 }
 46:
                        var6 = global;
                        var6 = var6.Promise;
                        var5 = var2 instanceof var6;
 58:
                        if(!var5) { _fun0011_ip = 82; continue _fun0011 }
 61:
                        var6 = _closure2_slot1;
                        var5 = true;
                        var5 = var6.bind(var3)(var5);
                        SaveGenerator(address=76);
 74:
                        return var2;
 76:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0011_ip = 123; continue _fun0011 }
 82:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 10;
                        var5 = var7[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.dismissAlert;
                        var4 = _closure2_slot2;
                        var4 = var5.bind(var6)(var4);
                        return var3;
 123:
                        return var2;
 126:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var6 = var5.bind(var4)();
        var5 = 'onPress';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['AlertActionButton'] = var2;
    return var1;
})();