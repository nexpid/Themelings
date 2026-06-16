// app/modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function interactivityProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = 'none';
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'auto';
case 2:
            var1['pointerEvents'] = var2;
            var2 = !var3;
            var1['accessibilityElementsHidden'] = var2;
            var2 = 'no-hide-descendants';
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = 'auto';
case 4:
            var1['importantForAccessibility'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var1 = function FadeTransitionItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var12 = var3.state;
            var _closure2_slot0 = var12;
            var1 = var3.cleanup;
            var _closure2_slot1 = var1;
            var6 = var3.children;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 4;
            var5 = var3[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.TransitionStates;
            var5 = var5.YEETED;
            var5 = var12 === var5;
            var8 = 5;
            var3 = var3[var8];
            var10 = var9.bind(var4)(var3);
            var9 = var10.useSharedValue;
            var3 = 1;
            if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = 0;
case 6:
            var11 = var9.bind(var10)(var3);
            _closure2_slot2 = var11;
            var10 = _closure1_slot3;
            var9 = var10.useEffect;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var11;
            var3[2] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 !== var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure2_slot2;
                    var4 = var5.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var9 = var6.bind(var1)(var3);
                    var8 = var9.withTiming;
                    var7 = _closure1_slot4;
                    var6 = 1;
                    var3 = 'respect-motion-settings';
                    var3 = var8.bind(var9)(var6, var7, var3);
                    var3 = var4.bind(var5)(var3);
                    _fun0003_ip = 10; continue _fun0003;
case 8:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 6;
                    var5 = var13[var5];
                    var9 = var12.bind(var1)(var5);
                    var8 = var9.withTiming;
                    var16 = _closure1_slot4;
                    var6 = function t(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = true;
                            var1 = arg1;
                            if(!(var2 === var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 11:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = {};
                    var11 = 5;
                    var11 = var13[var11];
                    var11 = var12.bind(var1)(var11);
                    var11 = var11.runOnJS;
                    var5['runOnJS'] = var11;
                    var10 = _closure2_slot1;
                    var5['cleanup'] = var10;
                    var6['__closure'] = var5;
                    var5 = 10965161938750.0;
                    var6['__workletHash'] = var5;
                    var2 = _closure1_slot7;
                    var6['__initData'] = var2;
                    var17 = 0;
                    var15 = 'respect-motion-settings';
                    var18 = var9;
                    var14 = var6;
                    var2 = var18[var8](var17, var16, var15, var14, var13);
                    var2 = var3.bind(var4)(var2);
case 10:
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var3);
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var8];
            var9 = var9.bind(var4)(var3);
            var3 = var9.useAnimatedStyle;
            var2 = function T() {
                var1 = {};
                var3 = _closure2_slot2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var10 = {};
            var10['visible'] = var11;
            var2['__closure'] = var10;
            var10 = 13386937038500.0;
            var2['__workletHash'] = var10;
            var10 = _closure1_slot8;
            var2['__initData'] = var10;
            var9 = var3.bind(var9)(var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = _closure1_slot6;
            var10 = var8.transitionItem;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var1['style'] = var8;
            var7 = _closure1_slot9;
            var5 = !var5;
            var13 = var7.bind(var4)(var5);
            var14 = var1;
            var5 = copyDataProperties(var14, var13);
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function BounceTransitionItem(arg1) {
        var1 = arg1;
        var11 = var1.state;
        var7 = var1.cleanup;
        var9 = var1.bounceEnterDelayMs;
        var6 = var1.children;
        var13 = _closure1_slot0;
        var8 = _closure1_slot2;
        var12 = 4;
        var1 = var8[var12];
        var4 = undefined;
        var1 = var13.bind(var4)(var1);
        var1 = var1.TransitionStates;
        var10 = var1.ENTERED;
        var2 = _closure1_slot1;
        var1 = 7;
        var1 = var8[var1];
        var3 = var2.bind(var4)(var1);
        var1 = {};
        var12 = var8[var12];
        var12 = var13.bind(var4)(var12);
        var12 = var12.TransitionStates;
        var12 = var12.YEETED;
        var12 = var11 !== var12;
        var1['visible'] = var12;
        var10 = var11 === var10;
        var10 = !var10;
        var1['initiallyVisible'] = var10;
        var1['enterDelayMs'] = var9;
        var1['onExitComplete'] = var7;
        var7 = true;
        var1['interactiveDuringEnter'] = var7;
        var1 = var3.bind(var4)(var1);
        var9 = var1.animatedStyle;
        var7 = var1.isInteractive;
        var3 = _closure1_slot5;
        var1 = 5;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var8 = _closure1_slot6;
        var10 = var8.transitionItemCentered;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var9;
        var1['style'] = var8;
        var5 = _closure1_slot9;
        var14 = var5.bind(var4)(var7);
        var15 = var1;
        var5 = copyDataProperties(var15, var14);
        var5 = 'children';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.StyleSheet;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CHAT_INPUT_TIMING_CONFIG;
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot5 = var5;
    var8 = var9.create;
    var5 = {};
    var10 = {};
    var11 = 'absolute';
    var10['position'] = var11;
    var5['transitionItem'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'alignItems': 'center', 'justifyContent': 'center'};
    var5['transitionItemCentered'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var5 = {};
    var8 = 'function ChatInputActionButtonTransitionItemTsx1(finished){const{runOnJS,cleanup}=this.__closure;if(finished===true){runOnJS(cleanup)();}}';
    var5['code'] = var8;
    var _closure1_slot7 = var5;
    var5 = {};
    var8 = 'function ChatInputActionButtonTransitionItemTsx2(){const{visible}=this.__closure;return{opacity:visible.get()};}';
    var5['code'] = var8;
    var _closure1_slot8 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ChatInputActionButtonTransitionItem(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var9 = var2.state;
            var8 = var2.cleanup;
            var6 = var2.children;
            var1 = var2.withBounce;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var1 = false;
case 13:
            var7 = var2.bounceEnterDelayMs;
            if(!(var7 === var5)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var7 = 0;
case 15:
            var4 = _closure1_slot5;
            if(var1) { _fun0005_ip = 17; continue _fun0005 }
case 11:
            var3 = _closure1_slot10;
            var1 = {};
            var1['state'] = var9;
            var1['cleanup'] = var8;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0005_ip = 8; continue _fun0005;
case 17:
            var3 = _closure1_slot11;
            var2 = {};
            var2['state'] = var9;
            var2['cleanup'] = var8;
            var2['bounceEnterDelayMs'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['interactivityProps'] = var2;
    return var1;
})();