// app/modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
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
        var4 = var4.bind(var1)(var7);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.useWindowDimensions;
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.LaunchPadTypes;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var7 = var5.bind(var1)(var4);
        var4 = var7.isAndroid;
        var4 = var4.bind(var7)();
        var _closure1_slot6 = var4;
        var7 = 4;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        if(var4) { _fun0001_ip = 170; continue _fun0001 }
 162:
        var4 = var7.DEFAULT_PANELS_ANIMATION_CONFIG;
        _fun0001_ip = 176; continue _fun0001;
 170:
        var4 = var7.ANDROID_PANELS_ANIMATION_CONFIG;
 176:
        var _closure1_slot7 = var4;
        var4 = {};
        var7 = "function useMainTabsPanelsGestureTsx1(width){const{isDragging,translateX,IS_ANDROID,withTiming,timingInstant}=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;translateX.set(IS_ANDROID?withTiming(width,timingInstant,'animate-always'):width);}";
        var4['code'] = var7;
        var _closure1_slot8 = var4;
        var4 = {};
        var7 = "function useMainTabsPanelsGestureTsx2(show,isFling,velocity,force){const{translateX,width,onVisibilityChange,runOnJS,onPreMovement,panelsConfig,isTimingConfig,withTiming,withSpring}=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}return false;}if(onPreMovement!=null){runOnJS(onPreMovement)(show);}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;function handleAnimationFinish(finished){'worklet';if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;}";
        var4['code'] = var7;
        var _closure1_slot9 = var4;
        var4 = {};
        var7 = 'function handleAnimationFinish_useMainTabsPanelsGestureTsx3(finished){const{onVisibilityChange,runOnJS,show}=this.__closure;if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}';
        var4['code'] = var7;
        var _closure1_slot10 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx4(e){const{isDragging,disallowGesture,runOnJS,setIsDraggingRef,panelsConfig,movePanel,translateX,width}=this.__closure;try{if(!isDragging.get()||disallowGesture.get()){return;}}finally{isDragging.set(false);runOnJS(setIsDraggingRef)(false);}if(Math.abs(e.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e.velocityX<0,true,e.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e.velocityX,true);}}';
        var4['code'] = var7;
        var _closure1_slot11 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx5(e){const{disallowGesture,translateX,width}=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));}';
        var4['code'] = var7;
        var _closure1_slot12 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx6(){const{isDragging,runOnJS,setIsDraggingRef,onDragStart}=this.__closure;isDragging.set(true);runOnJS(setIsDraggingRef)(true);if(onDragStart!=null){runOnJS(onDragStart)();}}';
        var4['code'] = var7;
        var _closure1_slot13 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx7(event,manager){const{State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET}=this.__closure;if(event.state!==State.BEGAN)return;const touch=event.allTouches[0];if(touch==null)return;const xDiff=touch.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager.fail();return;}}manager.activate();}';
        var4['code'] = var7;
        var _closure1_slot14 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx8(event,manager){const{startPosition}=this.__closure;const touch=event.allTouches[0];if(touch==null)return;startPosition.set({x:touch.x,y:touch.y});manager.begin();}';
        var4['code'] = var7;
        var _closure1_slot15 = var4;
        var4 = 13;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function useMainTabsPanelsGesture(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var16 = var3.canDrag;
                var _closure2_slot0 = var16;
                var24 = var3.onVisibilityChange;
                var _closure2_slot1 = var24;
                var17 = var3.onDragStart;
                var _closure2_slot2 = var17;
                var23 = var3.onPreMovement;
                var _closure2_slot3 = var23;
                var6 = var3.startShown;
                var2 = var3.openWidth;
                var13 = var3.cancelOnSwipeRightFromStart;
                var _closure2_slot4 = var13;
                var20 = undefined;
                var _closure2_slot8 = var20;
                var _closure2_slot9 = var20;
                var _closure2_slot10 = var20;
                var _closure2_slot11 = var20;
                var _closure2_slot12 = var20;
                var _closure2_slot13 = var20;
                var _closure2_slot14 = var20;
                var _closure2_slot15 = var20;
                var _closure2_slot16 = var20;
                var _closure2_slot17 = var20;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 5;
                var3 = var5[var3];
                var3 = var4.bind(var20)(var3);
                var14 = var3.bind(var20)();
                var _closure2_slot5 = var14;
                var3 = 6;
                var3 = var5[var3];
                var3 = var4.bind(var20)(var3);
                var19 = var3.bind(var20)();
                var _closure2_slot6 = var19;
                var3 = _closure1_slot4;
                var3 = var3.bind(var20)();
                var18 = var3.width;
                var _closure2_slot7 = var18;
                var4 = null;
                var3 = var18;
                if(!(var4 != var2)) { _fun0002_ip = 189; continue _fun0002 }
 186:
                var3 = var2;
 189:
                _closure2_slot8 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 7;
                var2 = var2[var8];
                var5 = var4.bind(var20)(var2);
                var4 = var5.useSharedValue;
                var2 = 0;
                if(var6) { _fun0002_ip = 226; continue _fun0002 }
 223:
                var2 = var3;
 226:
                var5 = var4.bind(var5)(var2);
                _closure2_slot9 = var5;
                var9 = _closure1_slot0;
                var21 = _closure1_slot2;
                var2 = var21[var8];
                var4 = var9.bind(var20)(var2);
                var2 = var4.useSharedValue;
                var15 = false;
                var6 = var2.bind(var4)(var15);
                _closure2_slot10 = var6;
                var10 = _closure1_slot3;
                var2 = var10.useRef;
                var2 = var2.bind(var10)(var15);
                _closure2_slot11 = var2;
                var12 = var10.useCallback;
                var11 = new Array(1);
                var11[0] = var2;
                var4 = function(arg1) {
                    var2 = _closure2_slot11;
                    var1 = arg1;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var12 = var12.bind(var10)(var4, var11);
                _closure2_slot12 = var12;
                var4 = var21[var8];
                var11 = var9.bind(var20)(var4);
                var4 = var11.useSharedValue;
                var11 = var4.bind(var11)(var15);
                _closure2_slot13 = var11;
                var22 = var10.useEffect;
                var15 = new Array(3);
                var15[0] = var6;
                var15[1] = var5;
                var15[2] = var3;
                var4 = function() {
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 7;
                    var2 = var10[var1];
                    var1 = undefined;
                    var5 = var9.bind(var1)(var2);
                    var4 = var5.runOnUI;
                    var3 = function e(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var8 = arg1;
                            var3 = _closure2_slot10;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0003_ip = 126; continue _fun0003 }
 22:
                            var3 = _closure2_slot9;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0003_ip = 126; continue _fun0003 }
 41:
                            var3 = _closure2_slot9;
                            var2 = var3.set;
                            var5 = _closure1_slot6;
                            var1 = var8;
                            if(!var5) { _fun0003_ip = 121; continue _fun0003 }
 63:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 8;
                            var4 = var10[var4];
                            var5 = undefined;
                            var7 = var9.bind(var5)(var4);
                            var6 = var7.withTiming;
                            var4 = 9;
                            var4 = var10[var4];
                            var4 = var9.bind(var5)(var4);
                            var5 = var4.timingInstant;
                            var4 = 'animate-always';
                            var1 = var6.bind(var7)(var8, var5, var4);
 121:
                            var1 = var2.bind(var3)(var1);
 126:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var7 = {};
                    var8 = _closure2_slot10;
                    var7['isDragging'] = var8;
                    var8 = _closure2_slot9;
                    var7['translateX'] = var8;
                    var8 = _closure1_slot6;
                    var7['IS_ANDROID'] = var8;
                    var8 = 8;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.withTiming;
                    var7['withTiming'] = var8;
                    var8 = 9;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.timingInstant;
                    var7['timingInstant'] = var8;
                    var3['__closure'] = var7;
                    var7 = 16976202846494.0;
                    var3['__workletHash'] = var7;
                    var6 = _closure1_slot8;
                    var3['__initData'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure2_slot8;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = var22.bind(var10)(var4, var15);
                var22 = var10.useCallback;
                var15 = function R(arg1, arg2, arg3, arg4) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = arg1;
                        var4 = arg2;
                        var _closure3_slot0 = var3;
                        var1 = arg4;
                        if(var1) { _fun0004_ip = 65; continue _fun0004 }
 18:
                        var6 = _closure2_slot9;
                        var5 = var6.get;
                        var6 = var5.bind(var6)();
                        var5 = 0;
                        if(!(var5 !== var6)) { _fun0004_ip = 65; continue _fun0004 }
 40:
                        var6 = _closure2_slot9;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        var1 = _closure2_slot8;
                        if(!(var5 !== var1)) { _fun0004_ip = 65; continue _fun0004 }
 61:
                        var1 = false;
                        return var1;
 65:
                        var11 = 0;
                        if(var3) { _fun0004_ip = 77; continue _fun0004 }
 70:
                        var11 = _closure2_slot8;
 77:
                        var6 = _closure2_slot9;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        if(!(var5 !== var11)) { _fun0004_ip = 383; continue _fun0004 }
 100:
                        var6 = _closure2_slot3;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0004_ip = 154; continue _fun0004 }
 110:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var5 = 7;
                        var5 = var6[var5];
                        var6 = undefined;
                        var8 = var7.bind(var6)(var5);
                        var7 = var8.runOnJS;
                        var5 = _closure2_slot3;
                        var5 = var7.bind(var8)(var5);
                        var5 = var5.bind(var6)(var3);
 154:
                        var5 = _closure1_slot7;
                        if(var3) { _fun0004_ip = 183; continue _fun0004 }
 164:
                        if(var4) { _fun0004_ip = 175; continue _fun0004 }
 167:
                        var6 = var5.nonSwipeSidePanelClose;
                        _fun0004_ip = 181; continue _fun0004;
 175:
                        var6 = var5.swipeSidePanelClose;
 181:
                        _fun0004_ip = 203; continue _fun0004;
 183:
                        if(var4) { _fun0004_ip = 194; continue _fun0004 }
 186:
                        var4 = var5.nonSwipeSidePanelOpen;
                        _fun0004_ip = 200; continue _fun0004;
 194:
                        var4 = var5.swipeSidePanelOpen;
 200:
                        var6 = var4;
 203:
                        var2 = function() {
                            var1 = function handleAnimationFinish(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    var1 = arg1;
                                    if(!var1) { _fun0005_ip = 19; continue _fun0005 }
 6:
                                    var3 = _closure2_slot1;
                                    var2 = null;
                                    var1 = var2 != var3;
 19:
                                    if(!var1) { _fun0005_ip = 76; continue _fun0005 }
 22:
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 7;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var4 = var2.bind(var3)(var1);
                                    var2 = var4.runOnJS;
                                    var1 = _closure2_slot1;
                                    var2 = var2.bind(var4)(var1);
                                    var1 = _closure3_slot0;
                                    var1 = var2.bind(var3)(var1);
 76:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var3 = {};
                            var2 = _closure2_slot1;
                            var3['onVisibilityChange'] = var2;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 7;
                            var5 = var5[var4];
                            var4 = undefined;
                            var4 = var6.bind(var4)(var5);
                            var4 = var4.runOnJS;
                            var3['runOnJS'] = var4;
                            var4 = _closure3_slot0;
                            var3['show'] = var4;
                            var1['__closure'] = var3;
                            var3 = 1018878139815.0;
                            var1['__workletHash'] = var3;
                            var2 = _closure1_slot10;
                            var1['__initData'] = var2;
                            return var1;
                        };
                        var8 = undefined;
                        var10 = var2.bind(var8)();
                        var5 = _closure2_slot9;
                        var4 = var5.set;
                        var7 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 4;
                        var2 = var12[var2];
                        var7 = var7.bind(var8)(var2);
                        var2 = var7.isTimingConfig;
                        var2 = var2.bind(var7)(var6);
                        var7 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var9 = var6;
                        if(var2) { _fun0004_ip = 335; continue _fun0004 }
 270:
                        var2 = 10;
                        var2 = var12[var2];
                        var14 = var7.bind(var8)(var2);
                        var13 = var14.withSpring;
                        var6 = {};
                        var19 = var6;
                        var18 = var9;
                        var2 = copyDataProperties(var19, var18);
                        var15 = arg3;
                        var2 = 'velocity';
                        var6[var2] = var15;
                        var17 = 'respect-motion-settings';
                        var20 = var14;
                        var19 = var11;
                        var18 = var6;
                        var16 = var10;
                        var2 = var20[var13](var19, var18, var17, var16, var15);
                        _fun0004_ip = 374; continue _fun0004;
 335:
                        var6 = 8;
                        var6 = var12[var6];
                        var8 = var7.bind(var8)(var6);
                        var7 = var8.withTiming;
                        var17 = 'respect-motion-settings';
                        var20 = var8;
                        var19 = var11;
                        var18 = var9;
                        var16 = var10;
                        var2 = var20[var7](var19, var18, var17, var16, var15);
 374:
                        var2 = var4.bind(var5)(var2);
                        var2 = true;
                        return var2;
 383:
                        var4 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0004_ip = 437; continue _fun0004 }
 393:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 7;
                        var4 = var4[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.runOnJS;
                        var1 = _closure2_slot1;
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.bind(var2)(var3);
 437:
                        var1 = false;
                        return var1;
                    }
                };
                var4 = {};
                var4['translateX'] = var5;
                var4['width'] = var3;
                var4['onVisibilityChange'] = var24;
                var25 = var21[var8];
                var25 = var9.bind(var20)(var25);
                var25 = var25.runOnJS;
                var4['runOnJS'] = var25;
                var4['onPreMovement'] = var23;
                var25 = _closure1_slot7;
                var4['panelsConfig'] = var25;
                var25 = 4;
                var25 = var21[var25];
                var25 = var9.bind(var20)(var25);
                var25 = var25.isTimingConfig;
                var4['isTimingConfig'] = var25;
                var25 = 8;
                var25 = var21[var25];
                var25 = var9.bind(var20)(var25);
                var25 = var25.withTiming;
                var4['withTiming'] = var25;
                var25 = 10;
                var25 = var21[var25];
                var25 = var9.bind(var20)(var25);
                var25 = var25.withSpring;
                var4['withSpring'] = var25;
                var15['__closure'] = var4;
                var4 = 4205680413964.0;
                var15['__workletHash'] = var4;
                var4 = _closure1_slot9;
                var15['__initData'] = var4;
                var4 = new Array(4);
                var4[0] = var24;
                var4[1] = var23;
                var4[2] = var5;
                var4[3] = var3;
                var4 = var22.bind(var10)(var15, var4);
                _closure2_slot14 = var4;
                var8 = var21[var8];
                var15 = var9.bind(var20)(var8);
                var9 = var15.useSharedValue;
                var8 = {'x': 0, 'y': 0};
                var15 = var9.bind(var15)(var8);
                _closure2_slot15 = var15;
                var8 = var10.useContext;
                var9 = _closure1_slot1;
                var7 = 11;
                var7 = var21[var7];
                var7 = var9.bind(var20)(var7);
                var7 = var8.bind(var10)(var7);
                _closure2_slot16 = var7;
                var9 = var10.useMemo;
                var8 = new Array(14);
                var8[0] = var19;
                var8[1] = var5;
                var8[2] = var3;
                var8[3] = var18;
                var8[4] = var6;
                var8[5] = var4;
                var8[6] = var17;
                var8[7] = var16;
                var8[8] = var15;
                var8[9] = var14;
                var8[10] = var13;
                var8[11] = var11;
                var8[12] = var12;
                var8[13] = var7;
                var7 = function() {
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var11 = 12;
                    var2 = var10[var11];
                    var8 = undefined;
                    var2 = var9.bind(var8)(var2);
                    var3 = var2.Gesture;
                    var2 = var3.Pan;
                    var5 = var2.bind(var3)();
                    var3 = var5.enabled;
                    var2 = _closure2_slot0;
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.requireExternalGestureToFail;
                    var2 = _closure2_slot16;
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.manualActivation;
                    var2 = 3;
                    var2 = var10[var2];
                    var7 = var9.bind(var8)(var2);
                    var2 = var7.isAndroid;
                    var2 = var2.bind(var7)();
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.hitSlop;
                    var2 = {};
                    var7 = _closure2_slot6;
                    var12 = var7.top;
                    var12 = -var12;
                    var2['top'] = var12;
                    var12 = var7.left;
                    var12 = -var12;
                    var2['left'] = var12;
                    var12 = var7.bottom;
                    var12 = -var12;
                    var2['bottom'] = var12;
                    var7 = var7.right;
                    var7 = -var7;
                    var2['right'] = var7;
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.onTouchesDown;
                    var2 = function u(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var2 = arg2;
                            var1 = arg1;
                            var3 = var1.allTouches;
                            var1 = 0;
                            var5 = var3[var1];
                            var1 = null;
                            if(!(var1 != var5)) { _fun0006_ip = 71; continue _fun0006 }
 24:
                            var4 = _closure2_slot15;
                            var3 = var4.set;
                            var1 = {};
                            var6 = var5.x;
                            var1['x'] = var6;
                            var5 = var5.y;
                            var1['y'] = var5;
                            var1 = var3.bind(var4)(var1);
                            var1 = var2.begin;
                            var1 = var1.bind(var2)();
 71:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var7 = {};
                    var12 = _closure2_slot15;
                    var7['startPosition'] = var12;
                    var2['__closure'] = var7;
                    var7 = 16497053886169.0;
                    var2['__workletHash'] = var7;
                    var7 = _closure1_slot15;
                    var2['__initData'] = var7;
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.onTouchesMove;
                    var2 = function l(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var2 = arg1;
                            var3 = arg2;
                            var6 = var2.state;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var10 = 12;
                            var4 = var1[var10];
                            var1 = undefined;
                            var4 = var7.bind(var1)(var4);
                            var4 = var4.State;
                            var4 = var4.BEGAN;
                            if(!(var6 === var4)) { _fun0007_ip = 464; continue _fun0007 }
 55:
                            var2 = var2.allTouches;
                            var6 = 0;
                            var7 = var2[var6];
                            var2 = null;
                            if(!(var2 != var7)) { _fun0007_ip = 464; continue _fun0007 }
 76:
                            var8 = var7.x;
                            var9 = _closure2_slot15;
                            var4 = var9.get;
                            var4 = var4.bind(var9)();
                            var4 = var4.x;
                            var4 = var8 - var4;
                            var9 = global;
                            var11 = var9.Math;
                            var8 = var11.abs;
                            var8 = var8.bind(var11)(var4);
                            if(!(!(var8 <= var10))) { _fun0007_ip = 464; continue _fun0007 }
 132:
                            var11 = _closure2_slot13;
                            var10 = var11.get;
                            var10 = var10.bind(var11)();
                            if(var10) { _fun0007_ip = 464; continue _fun0007 }
 151:
                            var10 = var9.Math;
                            var9 = var10.abs;
                            var11 = var7.y;
                            var12 = _closure2_slot15;
                            var7 = var12.get;
                            var7 = var7.bind(var12)();
                            var7 = var7.y;
                            var7 = var11 - var7;
                            var7 = var9.bind(var10)(var7);
                            if(!(!(var8 <= var7))) { _fun0007_ip = 464; continue _fun0007 }
 202:
                            var8 = var8 * var8;
                            var7 = var7 * var7;
                            var8 = var8 + var7;
                            var7 = 144;
                            if(!(!(var8 < var7))) { _fun0007_ip = 464; continue _fun0007 }
 224:
                            if(!(!(var4 <= var6))) { _fun0007_ip = 273; continue _fun0007 }
 228:
                            var8 = _closure2_slot4;
                            var7 = true;
                            if(!(var7 === var8)) { _fun0007_ip = 293; continue _fun0007 }
 238:
                            var8 = _closure2_slot9;
                            var7 = var8.get;
                            var8 = var7.bind(var8)();
                            var7 = _closure2_slot8;
                            if(!(var8 >= var7)) { _fun0007_ip = 293; continue _fun0007 }
 259:
                            var7 = var3.fail;
                            var7 = var7.bind(var3)();
                            var7 = undefined;
                            return var7;
 273:
                            var8 = _closure2_slot9;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            if(!(var6 !== var7)) { _fun0007_ip = 450; continue _fun0007 }
 293:
                            var8 = _closure2_slot5;
                            var7 = _closure1_slot5;
                            var7 = var7.GESTURE_EDGE;
                            if(!(var8 !== var7)) { _fun0007_ip = 329; continue _fun0007 }
 311:
                            var8 = _closure2_slot5;
                            var7 = _closure1_slot5;
                            var7 = var7.GESTURE_FULL;
                            if(!(var8 === var7)) { _fun0007_ip = 424; continue _fun0007 }
 329:
                            if(!(var4 < var6)) { _fun0007_ip = 424; continue _fun0007 }
 333:
                            var6 = _closure2_slot7;
                            var4 = 48;
                            var4 = var6 - var4;
                            var7 = _closure2_slot5;
                            var6 = _closure1_slot5;
                            var6 = var6.GESTURE_FULL;
                            if(!(var7 === var6)) { _fun0007_ip = 384; continue _fun0007 }
 362:
                            var7 = _closure2_slot15;
                            var6 = var7.get;
                            var6 = var6.bind(var7)();
                            var6 = var6.x;
                            if(!(!(var6 < var4))) { _fun0007_ip = 436; continue _fun0007 }
 384:
                            var6 = _closure2_slot5;
                            var5 = _closure1_slot5;
                            var5 = var5.GESTURE_EDGE;
                            if(!(var6 === var5)) { _fun0007_ip = 424; continue _fun0007 }
 402:
                            var5 = _closure2_slot15;
                            var2 = var5.get;
                            var2 = var2.bind(var5)();
                            var2 = var2.x;
                            if(!(!(var2 >= var4))) { _fun0007_ip = 436; continue _fun0007 }
 424:
                            var2 = var3.activate;
                            var2 = var2.bind(var3)();
                            _fun0007_ip = 464; continue _fun0007;
 436:
                            var2 = var3.fail;
                            var2 = var2.bind(var3)();
                            var2 = undefined;
                            return var2;
 450:
                            var2 = var3.fail;
                            var2 = var2.bind(var3)();
                            var2 = undefined;
                            return var2;
 464:
                            return var1;
                        }
                    };
                    var7 = {};
                    var12 = var10[var11];
                    var12 = var9.bind(var8)(var12);
                    var12 = var12.State;
                    var7['State'] = var12;
                    var12 = _closure2_slot15;
                    var7['startPosition'] = var12;
                    var7['GESTURE_MIN_DISTANCE'] = var11;
                    var11 = _closure2_slot13;
                    var7['disallowGesture'] = var11;
                    var11 = _closure2_slot9;
                    var7['translateX'] = var11;
                    var11 = _closure2_slot4;
                    var7['cancelOnSwipeRightFromStart'] = var11;
                    var11 = _closure2_slot8;
                    var7['width'] = var11;
                    var11 = _closure2_slot5;
                    var7['launchPadType'] = var11;
                    var11 = _closure1_slot5;
                    var7['LaunchPadTypes'] = var11;
                    var11 = _closure2_slot7;
                    var7['windowWidth'] = var11;
                    var11 = 48;
                    var7['LAUNCHPAD_GESTURE_INSET'] = var11;
                    var2['__closure'] = var7;
                    var7 = 7692840471060.0;
                    var2['__workletHash'] = var7;
                    var7 = _closure1_slot14;
                    var2['__initData'] = var7;
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.onStart;
                    var2 = function s() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var3 = _closure2_slot10;
                            var1 = var3.set;
                            var6 = true;
                            var1 = var1.bind(var3)(var6);
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 7;
                            var4 = var1[var5];
                            var1 = undefined;
                            var8 = var7.bind(var1)(var4);
                            var7 = var8.runOnJS;
                            var4 = _closure2_slot12;
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.bind(var1)(var6);
                            var6 = _closure2_slot2;
                            var4 = null;
                            if(!(var4 != var6)) { _fun0008_ip = 108; continue _fun0008 }
 73:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.runOnJS;
                            var2 = _closure2_slot2;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var1)();
 108:
                            return var1;
                        }
                    };
                    var11 = {};
                    var7 = _closure2_slot10;
                    var11['isDragging'] = var7;
                    var7 = 7;
                    var12 = var10[var7];
                    var12 = var9.bind(var8)(var12);
                    var12 = var12.runOnJS;
                    var11['runOnJS'] = var12;
                    var12 = _closure2_slot12;
                    var11['setIsDraggingRef'] = var12;
                    var12 = _closure2_slot2;
                    var11['onDragStart'] = var12;
                    var2['__closure'] = var11;
                    var11 = 6259908247884.0;
                    var2['__workletHash'] = var11;
                    var11 = _closure1_slot13;
                    var2['__initData'] = var11;
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.onChange;
                    var2 = function n(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var3 = _closure2_slot13;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var3 = _closure2_slot9;
                            if(var2) { _fun0009_ip = 103; continue _fun0009 }
 23:
                            var4 = var3.set;
                            var2 = global;
                            var7 = var2.Math;
                            var6 = var7.max;
                            var9 = var2.Math;
                            var8 = var9.min;
                            var5 = _closure2_slot8;
                            var10 = _closure2_slot9;
                            var2 = var10.get;
                            var10 = var2.bind(var10)();
                            var2 = arg1;
                            var2 = var2.changeX;
                            var2 = var10 + var2;
                            var5 = var8.bind(var9)(var5, var2);
                            var2 = 0;
                            var2 = var6.bind(var7)(var2, var5);
                            var2 = var4.bind(var3)(var2);
                            _fun0009_ip = 140; continue _fun0009;
 103:
                            var2 = var3.get;
                            var4 = var2.bind(var3)();
                            var3 = 0;
                            if(!(var3 !== var4)) { _fun0009_ip = 144; continue _fun0009 }
 118:
                            var2 = _closure2_slot8;
                            if(!(var4 !== var2)) { _fun0009_ip = 144; continue _fun0009 }
 126:
                            var2 = _closure2_slot9;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
 140:
                            var1 = undefined;
                            return var1;
 144:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var11 = {};
                    var12 = _closure2_slot13;
                    var11['disallowGesture'] = var12;
                    var12 = _closure2_slot9;
                    var11['translateX'] = var12;
                    var12 = _closure2_slot8;
                    var11['width'] = var12;
                    var2['__closure'] = var11;
                    var11 = 17126851611162.0;
                    var2['__workletHash'] = var11;
                    var11 = _closure1_slot12;
                    var2['__initData'] = var11;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.onFinalize;
                    var1 = function e(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var3 = arg1;
 3: // try_start_0
                            var4 = _closure2_slot10;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            if(!var1) { _fun0010_ip = 233; continue _fun0010 }
 25:
                            var4 = _closure2_slot13;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            if(var1) { _fun0010_ip = 233; continue _fun0010 }
 44: // try_end0
                            var4 = _closure2_slot10;
                            var1 = var4.set;
                            var8 = false;
                            var1 = var1.bind(var4)(var8);
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 7;
                            var5 = var5[var1];
                            var1 = undefined;
                            var7 = var6.bind(var1)(var5);
                            var6 = var7.runOnJS;
                            var5 = _closure2_slot12;
                            var5 = var6.bind(var7)(var5);
                            var5 = var5.bind(var1)(var8);
                            var5 = global;
                            var7 = var5.Math;
                            var6 = var7.abs;
                            var5 = var3;
                            var5 = var5.velocityX;
                            var5 = var6.bind(var7)(var5);
                            var4 = _closure1_slot7;
                            var4 = var4.minFlingVelocityX;
                            if(!(!(var5 > var4))) { _fun0010_ip = 199; continue _fun0010 }
 146:
                            var7 = _closure2_slot14;
                            var5 = _closure2_slot9;
                            var4 = var5.get;
                            var5 = var4.bind(var5)();
                            var6 = _closure2_slot8;
                            var4 = 2;
                            var4 = var6 / var4;
                            var12 = var5 < var4;
                            var4 = var3;
                            var10 = var4.velocityX;
                            var9 = true;
                            var13 = undefined;
                            var11 = false;
                            var4 = var13[var7](var12, var11, var10, var9, var8);
                            _fun0010_ip = 231; continue _fun0010;
 199:
                            var6 = _closure2_slot14;
                            var5 = var3.velocityX;
                            var4 = 0;
                            var12 = var5 < var4;
                            var10 = var3.velocityX;
                            var13 = undefined;
                            var11 = true;
                            var9 = true;
                            var3 = var13[var6](var12, var11, var10, var9, var8);
 231:
                            return var1;
 233:
                            var4 = _closure2_slot10;
                            var1 = var4.set;
                            var3 = false;
                            var1 = var1.bind(var4)(var3);
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 7;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.runOnJS;
                            var2 = _closure2_slot12;
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.bind(var1)(var3);
                            return var1;
 295: // catch_target0
                            CatchBlockStart(arg_register=0);
                            var5 = _closure2_slot10;
                            var3 = var5.set;
                            var4 = false;
                            var3 = var3.bind(var5)(var4);
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 7;
                            var5 = var5[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.runOnJS;
                            var2 = _closure2_slot12;
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.bind(var3)(var4);
                            throw var1;
                        }
                    };
                    var5 = {};
                    var11 = _closure2_slot10;
                    var5['isDragging'] = var11;
                    var11 = _closure2_slot13;
                    var5['disallowGesture'] = var11;
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.runOnJS;
                    var5['runOnJS'] = var7;
                    var7 = _closure2_slot12;
                    var5['setIsDraggingRef'] = var7;
                    var7 = _closure1_slot7;
                    var5['panelsConfig'] = var7;
                    var7 = _closure2_slot14;
                    var5['movePanel'] = var7;
                    var7 = _closure2_slot9;
                    var5['translateX'] = var7;
                    var6 = _closure2_slot8;
                    var5['width'] = var6;
                    var1['__closure'] = var5;
                    var5 = 10023794878197.0;
                    var1['__workletHash'] = var5;
                    var4 = _closure1_slot11;
                    var1['__initData'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var9.bind(var10)(var7, var8);
                _closure2_slot17 = var8;
                var9 = var10.useMemo;
                var7 = new Array(3);
                var7[0] = var8;
                var7[1] = var11;
                var7[2] = var5;
                var1 = function() {
                    var1 = {};
                    var3 = _closure2_slot17;
                    var1['gesture'] = var3;
                    var3 = _closure2_slot13;
                    var1['disallowGesture'] = var3;
                    var2 = _closure2_slot9;
                    var1['translateX'] = var2;
                    return var1;
                };
                var7 = var9.bind(var10)(var1, var7);
                var1 = {};
                var1['gesture'] = var8;
                var1['panelGestureContext'] = var7;
                var1['isDragging'] = var6;
                var1['translateX'] = var5;
                var1['movePanel'] = var4;
                var1['maxWidth'] = var3;
                var1['isDraggingRef'] = var2;
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();