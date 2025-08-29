// app/modules/toast/native/ToastContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function AnimatedToast(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.toast;
            var9 = var5.key;
            var1 = null;
            var4 = Object.create(var1);
            var14 = 0;
            var4['key'] = var14;
            var31 = {};
            var30 = var5;
            var29 = var4;
            var10 = copyDataProperties(var31, var30, var29);
            var _closure2_slot0 = var10;
            var19 = var2.state;
            var _closure2_slot1 = var19;
            var11 = var2.cleanUp;
            var _closure2_slot2 = var11;
            var5 = undefined;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var2 = _closure1_slot7;
            var12 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 6;
            var3 = var13[var2];
            var7 = var4.bind(var5)(var3);
            var3 = var7.useSharedValue;
            var24 = var3.bind(var7)(var14);
            var _closure2_slot3 = var24;
            var7 = _closure1_slot1;
            var3 = 7;
            var3 = var13[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var20 = var3.width;
            var _closure2_slot4 = var20;
            var25 = var3.height;
            var _closure2_slot5 = var25;
            var26 = 8;
            var3 = var13[var26];
            var14 = var4.bind(var5)(var3);
            var3 = var14.useMainTabsHeight;
            var23 = var3.bind(var14)();
            var _closure2_slot6 = var23;
            var3 = 9;
            var3 = var13[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var27 = var3.top;
            var _closure2_slot7 = var27;
            var3 = 10;
            var3 = var13[var3];
            var15 = var4.bind(var5)(var3);
            var14 = var15.useStateFromStores;
            var3 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure1_slot4;
                    var2 = var1.useReducedMotion;
                    if(var2) { _fun0002_ip = 29; continue _fun0002 }
 16:
                    var1 = _closure2_slot0;
                    var2 = var1.disableAnimations;
 29:
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 41; continue _fun0002 }
 38:
                    var1 = var2;
 41:
                    return var1;
                }
            };
            var17 = var14.bind(var15)(var7, var3);
            var _closure2_slot8 = var17;
            var7 = var10.content;
            var _closure2_slot9 = var7;
            var3 = 11;
            var3 = var13[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useIsScreenReaderEnabled;
            var3 = var3.bind(var4)();
            var4 = var1 != var7;
            if(!var4) { _fun0001_ip = 304; continue _fun0001 }
 293:
            var14 = 'string';
            var13 = typeof var7;
            var4 = var14 === var13;
 304:
            _closure2_slot10 = var4;
            var13 = var10.position;
            var28 = 'top';
            if(!(var5 !== var13)) { _fun0001_ip = 324; continue _fun0001 }
 321:
            var28 = var13;
 324:
            _closure2_slot11 = var28;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var2];
            var15 = var14.bind(var5)(var13);
            var14 = var15.useSharedValue;
            var16 = _closure1_slot8;
            if(var17) { _fun0001_ip = 366; continue _fun0001 }
 358:
            var13 = var16.START;
            _fun0001_ip = 372; continue _fun0001;
 366:
            var13 = var16.END;
 372:
            var18 = var14.bind(var15)(var13);
            _closure2_slot12 = var18;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = var21[var2];
            var15 = var22.bind(var5)(var13);
            var14 = var15.useAnimatedStyle;
            var13 = function p() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot11;
                    var10 = 'top';
                    if(!(var10 !== var1)) { _fun0003_ip = 53; continue _fun0003 }
 15:
                    var3 = _closure2_slot5;
                    var4 = _closure2_slot3;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var3 = var3 - var1;
                    var1 = _closure2_slot6;
                    var3 = var3 - var1;
                    var1 = 8;
                    var8 = var3 - var1;
                    _fun0003_ip = 64; continue _fun0003;
 53:
                    var3 = _closure2_slot7;
                    var1 = 8;
                    var8 = var3 + var1;
 64:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var15 = 6;
                    var1 = var1[var15];
                    var14 = undefined;
                    var7 = var3.bind(var14)(var1);
                    var6 = var7.interpolate;
                    var3 = _closure2_slot12;
                    var1 = var3.get;
                    var4 = var1.bind(var3)();
                    var3 = _closure1_slot9;
                    var1 = _closure2_slot11;
                    var9 = -30;
                    if(!(var10 !== var1)) { _fun0003_ip = 155; continue _fun0003 }
 126:
                    var10 = _closure2_slot5;
                    var1 = _closure2_slot6;
                    var10 = var10 - var1;
                    var11 = _closure2_slot3;
                    var1 = var11.get;
                    var1 = var1.bind(var11)();
                    var9 = var10 - var1;
 155:
                    var1 = new Array(2);
                    var1[0] = var9;
                    var1[1] = var8;
                    var10 = var6.bind(var7)(var4, var3, var1);
                    var1 = {};
                    var3 = _closure2_slot8;
                    if(var3) { _fun0003_ip = 233; continue _fun0003 }
 183:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 12;
                    var3 = var6[var3];
                    var7 = var4.bind(var14)(var3);
                    var6 = var7.withSpring;
                    var4 = _closure2_slot12;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot10;
                    var3 = var6.bind(var7)(var4, var3);
                    _fun0003_ip = 246; continue _fun0003;
 233:
                    var6 = _closure2_slot12;
                    var4 = var6.get;
                    var3 = var4.bind(var6)();
 246:
                    var1['opacity'] = var3;
                    var4 = {};
                    var6 = _closure2_slot8;
                    var3 = var10;
                    if(var6) { _fun0003_ip = 412; continue _fun0003 }
 265:
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 12;
                    var6 = var12[var6];
                    var9 = var13.bind(var14)(var6);
                    var8 = var9.withSpring;
                    var19 = _closure1_slot11;
                    var6 = function t(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0004_ip = 54; continue _fun0004 }
 6:
                            var3 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 13;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
 54:
                            if(!var1) { _fun0004_ip = 103; continue _fun0004 }
 57:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 103:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var11 = {};
                    var16 = _closure2_slot1;
                    var11['state'] = var16;
                    var16 = 13;
                    var16 = var12[var16];
                    var16 = var13.bind(var14)(var16);
                    var16 = var16.TransitionStates;
                    var11['TransitionStates'] = var16;
                    var12 = var12[var15];
                    var12 = var13.bind(var14)(var12);
                    var12 = var12.runOnJS;
                    var11['runOnJS'] = var12;
                    var12 = _closure2_slot2;
                    var11['cleanUp'] = var12;
                    var6['__closure'] = var11;
                    var11 = 633151838569.0;
                    var6['__workletHash'] = var11;
                    var5 = _closure1_slot13;
                    var6['__initData'] = var5;
                    var18 = 'respect-motion-settings';
                    var21 = var9;
                    var20 = var10;
                    var17 = var6;
                    var3 = var21[var8](var20, var19, var18, var17, var16);
 412:
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1['transform'] = var3;
                    var3 = _closure2_slot4;
                    var2 = 32;
                    var2 = var3 - var2;
                    var1['maxWidth'] = var2;
                    return var1;
                }
            };
            var16 = {};
            var16['position'] = var28;
            var16['safeAreaTop'] = var27;
            var16['CONTAINER_DISTANCE_VERTICAL'] = var26;
            var16['screenHeight'] = var25;
            var16['toastHeight'] = var24;
            var16['bottomTabsHeight'] = var23;
            var23 = var21[var2];
            var23 = var22.bind(var5)(var23);
            var23 = var23.interpolate;
            var16['interpolate'] = var23;
            var16['animationState'] = var18;
            var23 = _closure1_slot9;
            var16['ANIMATION_STATE_INPUT'] = var23;
            var23 = -30;
            var16['CONTAINER_TOP_POSITION_START'] = var23;
            var16['isReducedMotion'] = var17;
            var23 = 12;
            var23 = var21[var23];
            var23 = var22.bind(var5)(var23);
            var23 = var23.withSpring;
            var16['withSpring'] = var23;
            var23 = _closure1_slot10;
            var16['OPACITY_SPRING_PHYSICS'] = var23;
            var23 = _closure1_slot11;
            var16['TOAST_SPRING_PHYSICS'] = var23;
            var16['state'] = var19;
            var23 = 13;
            var23 = var21[var23];
            var23 = var22.bind(var5)(var23);
            var23 = var23.TransitionStates;
            var16['TransitionStates'] = var23;
            var21 = var21[var2];
            var21 = var22.bind(var5)(var21);
            var21 = var21.runOnJS;
            var16['runOnJS'] = var21;
            var16['cleanUp'] = var11;
            var16['screenWidth'] = var20;
            var20 = 16;
            var16['CONTAINER_DISTANCE_SIDES'] = var20;
            var13['__closure'] = var16;
            var16 = 15232111823130.0;
            var13['__workletHash'] = var16;
            var16 = _closure1_slot12;
            var13['__initData'] = var16;
            var13 = var14.bind(var15)(var13);
            var16 = _closure1_slot3;
            var15 = var16.useEffect;
            var14 = new Array(4);
            var14[0] = var19;
            var14[1] = var18;
            var14[2] = var17;
            var14[3] = var11;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var5 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 !== var4)) { _fun0005_ip = 74; continue _fun0005 }
 48:
                    var6 = _closure2_slot12;
                    var5 = var6.set;
                    var4 = _closure1_slot8;
                    var4 = var4.END;
                    var4 = var5.bind(var6)(var4);
                    _fun0005_ip = 113; continue _fun0005;
 74:
                    var5 = _closure2_slot12;
                    var4 = var5.set;
                    var3 = _closure1_slot8;
                    var3 = var3.START;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot8;
                    if(!var3) { _fun0005_ip = 113; continue _fun0005 }
 105:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
 113:
                    return var1;
                }
            };
            var11 = var15.bind(var16)(var11, var14);
            var15 = _closure1_slot3;
            var14 = var15.useEffect;
            var11 = new Array(2);
            var11[0] = var4;
            var11[1] = var7;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot10;
                    if(!var2) { _fun0006_ip = 56; continue _fun0006 }
 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = _closure2_slot9;
                    var1 = var2.bind(var3)(var1);
 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var7, var11);
            if(!var4) { _fun0001_ip = 725; continue _fun0001 }
 720:
            var1 = null;
            if(var3) { _fun0001_ip = 838; continue _fun0001 }
 725:
            var4 = _closure1_slot6;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var14 = 'none';
            var2['pointerEvents'] = var14;
            var14 = var12.container;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var2['style'] = var12;
            var8 = function onLayout(arg1) {
                var3 = _closure2_slot3;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2['onLayout'] = var8;
            var8 = _closure1_slot6;
            var6 = 15;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var31 = var6;
            var30 = var10;
            var10 = copyDataProperties(var31, var30);
            var6 = var8.bind(var5)(var7, var6, var9);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 838:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function renderItem(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot6;
        var4 = _closure1_slot14;
        var3 = {};
        var1 = arg2;
        var3['toast'] = var1;
        var1 = arg3;
        var3['state'] = var1;
        var1 = arg4;
        var3['cleanUp'] = var1;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function getItemKey(arg1) {
        var1 = arg1;
        var1 = var1.key;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function wrapChildren(arg1) {
        var4 = _closure1_slot6;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 16;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.NonExpandingOverlayView;
        var1 = {};
        var5 = arg1;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var10 = 0;
    var7 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var9 = 1;
    var4 = var6[var9];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var8 = var11.createStyles;
    var4 = {};
    var12 = {'position': 'absolute', 'alignSelf': 'center', 'flexDirection': 'row', 'justifyContent': 'center'};
    var13 = 5;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.TOAST_CONTAINER_SHADOW_COLOR;
    var12['shadowColor'] = var13;
    var4['container'] = var12;
    var4 = var8.bind(var11)(var4);
    var _closure1_slot7 = var4;
    var8 = {};
    var8['START'] = var10;
    var4 = 'START';
    var8[var10] = var4;
    var8['END'] = var9;
    var4 = 'END';
    var8[var9] = var4;
    var _closure1_slot8 = var8;
    var9 = var8.START;
    var4 = new Array(2);
    var4[0] = var9;
    var8 = var8.END;
    var4[1] = var8;
    var _closure1_slot9 = var4;
    var4 = {'mass': 0.1, 'damping': 10, 'stiffness': 100, 'overshootClamping': true};
    var _closure1_slot10 = var4;
    var4 = {'mass': 0.35, 'damping': 15, 'stiffness': 350, 'restDisplacementThreshold': 0.1, 'restSpeedThreshold': 0.1};
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = "function ToastContainerTsx1(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position==='top'?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position==='top'?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get(),verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}";
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function ToastContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function() {
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 10;
        var3 = var7[var3];
        var4 = undefined;
        var9 = var2.bind(var4)(var3);
        var8 = var9.useStateFromStoresArray;
        var3 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = _closure1_slot5;
                var1 = var2.getContent;
                var2 = var1.bind(var2)();
                var1 = null;
                if(!(var1 != var2)) { _fun0007_ip = 33; continue _fun0007 }
 23:
                var1 = new Array(1);
                var1[0] = var2;
                _fun0007_ip = 37; continue _fun0007;
 33:
                var1 = new Array(0);
 37:
                return var1;
            }
        };
        var6 = var8.bind(var9)(var6, var3);
        var _closure2_slot0 = var6;
        var9 = _closure1_slot3;
        var8 = var9.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = _closure2_slot0;
                var4 = var3.length;
                var3 = 0;
                if(!(var3 === var4)) { _fun0008_ip = 24; continue _fun0008 }
 20:
                var4 = undefined;
                return var4;
 24:
                var4 = global;
                var5 = var4.setTimeout;
                var2 = _closure2_slot0;
                var2 = var2[var3];
                var2 = var2.toastDurationMs;
                var3 = null;
                var3 = var3 != var2;
                var4 = 2000;
                if(!var3) { _fun0008_ip = 64; continue _fun0008 }
 61:
                var4 = var2;
 64:
                var3 = undefined;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.close;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var5.bind(var3)(var2, var4);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var1 = var8.bind(var9)(var1, var3);
        var3 = _closure1_slot6;
        var1 = 13;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TransitionGroup;
        var1 = {};
        var1['items'] = var6;
        var6 = _closure1_slot15;
        var1['renderItem'] = var6;
        var6 = _closure1_slot16;
        var1['getItemKey'] = var6;
        var5 = _closure1_slot17;
        var1['wrapChildren'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/toast/native/ToastContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();