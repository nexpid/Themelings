// app/modules/activities/panel/native/ActivityPanelFocusedView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityLayoutMode;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ACTIVITY_LAYOUT_PHYSICS_GESTURE;
    var _closure1_slot8 = var8;
    var4 = var4.ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG;
    var _closure1_slot10 = var8;
    var8 = var4.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot11 = var8;
    var4 = var4.DEFAULT_LANDSCAPE_PILLERBOX_CONFIG;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IS_IOS;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot15 = var8;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 300;
    var4['duration'] = var8;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    var11 = 12;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var14;
    var4['wrapper'] = var10;
    var10 = {};
    var16 = var13.absoluteFillObject;
    var17 = var10;
    var13 = copyDataProperties(var17, var16);
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var12 = var11.BLACK;
    var11 = 'backgroundColor';
    var10[var11] = var12;
    var4['shade'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}";
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function ActivityPanelFocusedViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var22 = var2.transitionState;
            var _closure2_slot0 = var22;
            var21 = var2.transitionCleanUp;
            var _closure2_slot1 = var21;
            var12 = undefined;
            var _closure2_slot16 = var12;
            var _closure2_slot17 = var12;
            var _closure2_slot18 = var12;
            var _closure2_slot19 = var12;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 13;
            var4 = var14[var3];
            var7 = var9.bind(var12)(var4);
            var6 = var7.useStateFromStores;
            var4 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var20 = var6.bind(var7)(var5, var4);
            var _closure2_slot2 = var20;
            var4 = _closure1_slot18;
            var6 = var4.bind(var12)();
            var _closure2_slot3 = var6;
            var7 = _closure1_slot1;
            var4 = 14;
            var4 = var14[var4];
            var4 = var7.bind(var12)(var4);
            var23 = var4.bind(var12)();
            var _closure2_slot4 = var23;
            var4 = 15;
            var4 = var14[var4];
            var4 = var7.bind(var12)(var4);
            var10 = var4.bind(var12)();
            var _closure2_slot5 = var10;
            var19 = _closure1_slot3;
            var5 = var19.useContext;
            var4 = 16;
            var4 = var14[var4];
            var4 = var7.bind(var12)(var4);
            var4 = var5.bind(var19)(var4);
            var13 = var4.wrapperDimensions;
            var _closure2_slot6 = var13;
            var25 = var4.wrapperOffset;
            var _closure2_slot7 = var25;
            var4 = 17;
            var4 = var14[var4];
            var5 = var9.bind(var12)(var4);
            var4 = var5.useLockedWebView;
            var4 = var4.bind(var5)(var22);
            var24 = var4.shown;
            var _closure2_slot8 = var24;
            var4 = var4.renderWebView;
            var5 = 18;
            var5 = var14[var5];
            var5 = var7.bind(var12)(var5);
            var15 = var5.bind(var12)();
            var _closure2_slot9 = var15;
            var3 = var14[var3];
            var16 = var9.bind(var12)(var3);
            var11 = var16.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var8 = new Array(2);
            var8[0] = var3;
            var3 = _closure1_slot5;
            var8[1] = var3;
            var5 = function() {
                var3 = _closure1_slot6;
                var1 = var3.getConnectedActivityLocation;
                var5 = var1.bind(var3)();
                var1 = var3.getSelfEmbeddedActivityForLocation;
                var3 = var1.bind(var3)(var5);
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 19;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var1 = var4.getEmbeddedActivityLocationChannelId;
                var5 = var1.bind(var4)(var5);
                var1 = {};
                var4 = _closure1_slot5;
                var2 = var4.getChannel;
                var2 = var2.bind(var4)(var5);
                var1['channel'] = var2;
                var2 = null;
                var2 = var2 != var3;
                var1['hasActivity'] = var2;
                return var1;
            };
            var3 = new Array(0);
            var3 = var11.bind(var16)(var8, var5, var3);
            var11 = var3.channel;
            var _closure2_slot10 = var11;
            var3 = var3.hasActivity;
            var16 = var19.useEffect;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getBestActiveInput;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 51; continue _fun0002 }
 41:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
 51:
                    return var1;
                }
            };
            var5 = new Array(0);
            var5 = var16.bind(var19)(var8, var5);
            var5 = 12;
            var5 = var14[var5];
            var5 = var7.bind(var12)(var5);
            var5 = var5.radii;
            var16 = var5.lg;
            var _closure2_slot11 = var16;
            var8 = 21;
            var5 = var14[var8];
            var17 = var9.bind(var12)(var5);
            var7 = var17.useAnimatedStyle;
            var5 = function W() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot6;
                    var1 = var1.isWindowLandscape;
                    var2 = 0;
                    if(var1) { _fun0003_ip = 22; continue _fun0003 }
 18:
                    var2 = _closure2_slot11;
 22:
                    var1 = _closure1_slot14;
                    var3 = 0;
                    if(!var1) { _fun0003_ip = 47; continue _fun0003 }
 34:
                    var4 = _closure2_slot9;
                    var1 = var4.get;
                    var3 = var1.bind(var4)();
 47:
                    var1 = _closure2_slot4;
                    var4 = var1.width;
                    var1 = var1.height;
                    var3 = var1 - var3;
                    var1 = _closure2_slot6;
                    var7 = var1.isWindowLandscape;
                    var1 = 0;
                    if(var7) { _fun0003_ip = 89; continue _fun0003 }
 80:
                    var7 = _closure2_slot5;
                    var1 = var7.top;
 89:
                    var3 = var3 - var1;
                    var7 = _closure2_slot8;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    if(var1) { _fun0003_ip = 120; continue _fun0003 }
 109:
                    var1 = _closure2_slot4;
                    var14 = var1.height;
                    _fun0003_ip = 138; continue _fun0003;
 120:
                    var7 = _closure2_slot7;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var14 = var1.y;
 138:
                    var1 = function() {
                        var1 = function ActivityPanelFocusedViewTsx2() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var2 = arguments[0];
                                var1 = undefined;
                                if(!(var2 === var1)) { _fun0004_ip = 11; continue _fun0004 }
 9:
                                var2 = false;
 11:
                                if(!var2) { _fun0004_ip = 60; continue _fun0004 }
 14:
                                var4 = _closure2_slot0;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 22;
                                var3 = var6[var3];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.TransitionStates;
                                var3 = var3.YEETED;
                                var2 = var4 === var3;
 60:
                                if(!var2) { _fun0004_ip = 107; continue _fun0004 }
 63:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 21;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.runOnJS;
                                var2 = _closure2_slot1;
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.bind(var1)();
 107:
                                return var1;
                            }
                        };
                        var3 = {};
                        var2 = _closure2_slot0;
                        var3['transitionState'] = var2;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 22;
                        var5 = var8[var5];
                        var6 = undefined;
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.TransitionStates;
                        var3['TransitionStates'] = var5;
                        var5 = 21;
                        var5 = var8[var5];
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.runOnJS;
                        var3['runOnJS'] = var5;
                        var4 = _closure2_slot1;
                        var3['transitionCleanUp'] = var4;
                        var1['__closure'] = var3;
                        var3 = 2890456430056.0;
                        var1['__workletHash'] = var3;
                        var2 = _closure1_slot20;
                        var1['__initData'] = var2;
                        return var1;
                    };
                    var17 = undefined;
                    var13 = var1.bind(var17)();
                    var1 = _closure2_slot2;
                    var15 = 0;
                    if(!var1) { _fun0003_ip = 218; continue _fun0003 }
 162:
                    var7 = _closure2_slot8;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var15 = 0;
                    if(!var1) { _fun0003_ip = 218; continue _fun0003 }
 180:
                    var7 = _closure2_slot7;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var7 = var1.y;
                    var1 = _closure2_slot4;
                    var1 = var1.height;
                    var7 = var7 / var1;
                    var1 = 1;
                    var15 = var1 - var7;
 218:
                    var1 = {};
                    var8 = _closure2_slot2;
                    var7 = 1;
                    if(!var8) { _fun0003_ip = 334; continue _fun0003 }
 230:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 23;
                    var8 = var11[var8];
                    var12 = var10.bind(var17)(var8);
                    var11 = var12.withTiming;
                    var10 = _closure1_slot17;
                    var16 = _closure2_slot8;
                    var8 = var16.get;
                    var16 = var8.bind(var16)();
                    var18 = 'animate-always';
                    var8 = var18;
                    if(!var16) { _fun0003_ip = 315; continue _fun0003 }
 284:
                    var19 = _closure2_slot7;
                    var16 = var19.get;
                    var16 = var16.bind(var19)();
                    var16 = var16.gestureActive;
                    var8 = var18;
                    if(!var16) { _fun0003_ip = 315; continue _fun0003 }
 309:
                    var8 = 'animate-never';
 315:
                    var24 = var12;
                    var23 = var15;
                    var22 = var10;
                    var21 = var8;
                    var20 = var13;
                    var7 = var24[var11](var23, var22, var21, var20, var19);
 334:
                    var1['opacity'] = var7;
                    var8 = {};
                    var10 = _closure2_slot2;
                    var7 = 0;
                    if(var10) { _fun0003_ip = 468; continue _fun0003 }
 349:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 24;
                    var10 = var12[var10];
                    var12 = var11.bind(var17)(var10);
                    var11 = var12.withSpring;
                    var15 = _closure2_slot7;
                    var10 = var15.get;
                    var10 = var10.bind(var15)();
                    var10 = var10.gestureActive;
                    if(!var10) { _fun0003_ip = 436; continue _fun0003 }
 396:
                    var15 = _closure2_slot0;
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var10 = 22;
                    var10 = var18[var10];
                    var10 = var16.bind(var17)(var10);
                    var10 = var10.TransitionStates;
                    var10 = var10.YEETED;
                    if(!(var15 === var10)) { _fun0003_ip = 442; continue _fun0003 }
 436:
                    var10 = _closure1_slot9;
                    _fun0003_ip = 446; continue _fun0003;
 442:
                    var10 = _closure1_slot8;
 446:
                    var21 = 'animate-always';
                    var24 = var12;
                    var23 = var14;
                    var22 = var10;
                    var20 = var13;
                    var7 = var24[var11](var23, var22, var21, var20, var19);
 468:
                    var8['translateY'] = var7;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var1['transform'] = var7;
                    var7 = _closure2_slot6;
                    var7 = var7.isWindowLandscape;
                    var5 = 0;
                    if(var7) { _fun0003_ip = 509; continue _fun0003 }
 500:
                    var6 = _closure2_slot5;
                    var5 = var6.top;
 509:
                    var1['top'] = var5;
                    var1['width'] = var4;
                    var1['height'] = var3;
                    var1['borderTopStartRadius'] = var2;
                    var1['borderTopEndRadius'] = var2;
                    return var1;
                }
            };
            var18 = {};
            var18['wrapperDimensions'] = var13;
            var18['lg'] = var16;
            var16 = _closure1_slot14;
            var18['IS_IOS'] = var16;
            var18['animatedKeyboardHeight'] = var15;
            var18['windowDimensions'] = var23;
            var18['safeArea'] = var10;
            var18['shown'] = var24;
            var18['wrapperOffset'] = var25;
            var18['transitionState'] = var22;
            var22 = 22;
            var22 = var14[var22];
            var22 = var9.bind(var12)(var22);
            var22 = var22.TransitionStates;
            var18['TransitionStates'] = var22;
            var22 = var14[var8];
            var22 = var9.bind(var12)(var22);
            var22 = var22.runOnJS;
            var18['runOnJS'] = var22;
            var18['transitionCleanUp'] = var21;
            var18['reduceMotion'] = var20;
            var20 = 23;
            var20 = var14[var20];
            var20 = var9.bind(var12)(var20);
            var20 = var20.withTiming;
            var18['withTiming'] = var20;
            var20 = _closure1_slot17;
            var18['REDUCED_MOTION_TIMING'] = var20;
            var22 = 24;
            var20 = var14[var22];
            var20 = var9.bind(var12)(var20);
            var20 = var20.withSpring;
            var18['withSpring'] = var20;
            var20 = _closure1_slot8;
            var18['ACTIVITY_LAYOUT_PHYSICS_GESTURE'] = var20;
            var21 = _closure1_slot9;
            var18['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = var21;
            var5['__closure'] = var18;
            var18 = 14941136536014.0;
            var5['__workletHash'] = var18;
            var18 = _closure1_slot19;
            var5['__initData'] = var18;
            var5 = var7.bind(var17)(var5);
            var _closure2_slot12 = var5;
            var7 = var14[var8];
            var18 = var9.bind(var12)(var7);
            var17 = var18.useAnimatedStyle;
            var7 = function B() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.gestureActive;
                    if(var2) { _fun0005_ip = 48; continue _fun0005 }
 25:
                    var3 = _closure2_slot8;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var5 = 0;
                    if(!var2) { _fun0005_ip = 46; continue _fun0005 }
 43:
                    var5 = 1;
 46:
                    _fun0005_ip = 86; continue _fun0005;
 48:
                    var3 = _closure2_slot7;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.y;
                    var1 = _closure2_slot4;
                    var1 = var1.height;
                    var2 = var2 / var1;
                    var1 = 1;
                    var5 = var1 - var2;
 86:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 24;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.withSpring;
                    var2 = _closure1_slot9;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var20['wrapperOffset'] = var25;
            var20['shown'] = var24;
            var20['windowDimensions'] = var23;
            var22 = var14[var22];
            var22 = var9.bind(var12)(var22);
            var22 = var22.withSpring;
            var20['withSpring'] = var22;
            var20['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = var21;
            var7['__closure'] = var20;
            var20 = 8351375063373.0;
            var7['__workletHash'] = var20;
            var20 = _closure1_slot21;
            var7['__initData'] = var20;
            var7 = var17.bind(var18)(var7);
            var _closure2_slot13 = var7;
            var18 = var19.useMemo;
            var17 = new Array(2);
            var17[0] = var5;
            var5 = var6.wrapper;
            var17[1] = var5;
            var5 = function() {
                var1 = _closure2_slot3;
                var3 = var1.wrapper;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = _closure2_slot12;
                var1[1] = var2;
                return var1;
            };
            var5 = var18.bind(var19)(var5, var17);
            var _closure2_slot14 = var5;
            var8 = var14[var8];
            var12 = var9.bind(var12)(var8);
            var9 = var12.useAnimatedStyle;
            var8 = function J() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure1_slot14;
                    var3 = 0;
                    if(!var1) { _fun0006_ip = 28; continue _fun0006 }
 12:
                    var2 = _closure2_slot9;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
 28:
                    var1 = {};
                    var2 = _closure2_slot6;
                    var4 = var2.width;
                    var1['width'] = var4;
                    var2 = var2.height;
                    var2 = var2 - var3;
                    var1['height'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['IS_IOS'] = var16;
            var14['animatedKeyboardHeight'] = var15;
            var14['wrapperDimensions'] = var13;
            var8['__closure'] = var14;
            var14 = 10029372697959.0;
            var8['__workletHash'] = var14;
            var14 = _closure1_slot22;
            var8['__initData'] = var14;
            var12 = var9.bind(var12)(var8);
            var _closure2_slot15 = var12;
            var8 = var13.isLandscape;
            if(!var8) { _fun0001_ip = 857; continue _fun0001 }
 848:
            var9 = var13.isWindowLandscape;
            var8 = !var9;
 857:
            var9 = var13.isLandscape;
            var9 = !var9;
            if(!var9) { _fun0001_ip = 875; continue _fun0001 }
 869:
            var9 = var13.isWindowLandscape;
 875:
            _closure2_slot16 = var9;
            if(var8) { _fun0001_ip = 888; continue _fun0001 }
 882:
            var8 = _closure1_slot10;
            _fun0001_ip = 892; continue _fun0001;
 888:
            var8 = _closure1_slot11;
 892:
            _closure2_slot17 = var8;
            var14 = _closure1_slot3;
            var13 = var14.useMemo;
            var15 = var10.right;
            var10 = new Array(2);
            var10[0] = var15;
            var10[1] = var9;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot16;
                    if(var1) { _fun0007_ip = 63; continue _fun0007 }
 10:
                    var1 = {};
                    var2 = {};
                    var4 = false;
                    var2['disable'] = var4;
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.max;
                    var3 = _closure2_slot5;
                    var4 = var3.right;
                    var3 = 64;
                    var3 = var5.bind(var6)(var3, var4);
                    var2['override'] = var3;
                    var1['right'] = var2;
                    _fun0007_ip = 70; continue _fun0007;
 63:
                    var1 = _closure1_slot12;
 70:
                    return var1;
                }
            };
            var9 = var13.bind(var14)(var9, var10);
            _closure2_slot18 = var9;
            var10 = !var4;
            if(var10) { _fun0001_ip = 948; continue _fun0001 }
 945:
            var10 = !var3;
 948:
            _closure2_slot19 = var10;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(8);
            var2[0] = var12;
            var2[1] = var11;
            var2[2] = var10;
            var2[3] = var9;
            var2[4] = var8;
            var2[5] = var7;
            var6 = var6.shade;
            var2[6] = var6;
            var2[7] = var5;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 25;
                    var1 = var12[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ThemeContextProvider;
                    var1 = {};
                    var5 = _closure1_slot13;
                    var5 = var5.DARK;
                    var1['theme'] = var5;
                    var11 = _closure1_slot15;
                    var10 = _closure1_slot1;
                    var8 = 21;
                    var5 = var12[var8];
                    var5 = var10.bind(var3)(var5);
                    var6 = var5.View;
                    var5 = {};
                    var7 = _closure2_slot3;
                    var13 = var7.shade;
                    var7 = new Array(2);
                    var7[0] = var13;
                    var13 = _closure2_slot13;
                    var7[1] = var13;
                    var5['style'] = var7;
                    var7 = 'none';
                    var5['pointerEvents'] = var7;
                    var6 = var11.bind(var3)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = var12[var8];
                    var6 = var10.bind(var3)(var6);
                    var7 = var6.View;
                    var6 = {};
                    var13 = _closure2_slot14;
                    var6['style'] = var13;
                    var8 = var12[var8];
                    var8 = var10.bind(var3)(var8);
                    var10 = var8.View;
                    var8 = {};
                    var12 = _closure2_slot15;
                    var8['style'] = var12;
                    var13 = _closure2_slot19;
                    var12 = null;
                    if(var13) { _fun0008_ip = 265; continue _fun0008 }
 192:
                    var15 = _closure1_slot15;
                    var14 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var13 = 26;
                    var13 = var17[var13];
                    var14 = var14.bind(var3)(var13);
                    var13 = {};
                    var17 = _closure2_slot10;
                    var13['channel'] = var17;
                    var17 = _closure1_slot7;
                    var17 = var17.FOCUSED;
                    var13['layoutMode'] = var17;
                    var17 = _closure2_slot17;
                    var13['portraitSafeAreasConfig'] = var17;
                    var16 = _closure2_slot18;
                    var13['landscapeSafeAreasConfig'] = var16;
                    var12 = var15.bind(var3)(var14, var13);
 265:
                    var8['children'] = var12;
                    var10 = var11.bind(var3)(var10, var8);
                    var8 = new Array(2);
                    var8[0] = var10;
                    var11 = _closure1_slot15;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 27;
                    var9 = var12[var9];
                    var10 = var10.bind(var3)(var9);
                    var9 = {};
                    var9 = var11.bind(var3)(var10, var9);
                    var8[1] = var9;
                    var6['children'] = var8;
                    var6 = var4.bind(var3)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelFocusedView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();