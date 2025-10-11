// app/modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = var7.DEFAULT_PANELS_ANIMATION_CONFIG;
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var4 = var7.ANDROID_PANELS_ANIMATION_CONFIG;
case 4:
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
        var7 = 'function useMainTabsPanelsGestureTsx4(){const{disallowGesture}=this.__closure;return disallowGesture.get();}';
        var4['code'] = var7;
        var _closure1_slot11 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx5(currentDisallow,previousDisallow){const{didJustAllowGesture}=this.__closure;if(currentDisallow===previousDisallow)return;if(currentDisallow)return;didJustAllowGesture.set(true);}';
        var4['code'] = var7;
        var _closure1_slot12 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx6(e){const{isDragging,disallowGesture,didJustAllowGesture,runOnJS,setIsDraggingRef,panelsConfig,movePanel,translateX,width}=this.__closure;try{if(!isDragging.get()||disallowGesture.get()||didJustAllowGesture.get()){return;}}finally{isDragging.set(false);didJustAllowGesture.set(false);runOnJS(setIsDraggingRef)(false);}if(Math.abs(e.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e.velocityX<0,true,e.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e.velocityX,true);}}';
        var4['code'] = var7;
        var _closure1_slot13 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx7(e){const{disallowGesture,translateX,width,didJustAllowGesture}=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));didJustAllowGesture.set(false);}';
        var4['code'] = var7;
        var _closure1_slot14 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx8(){const{isDragging,runOnJS,setIsDraggingRef,onDragStart}=this.__closure;isDragging.set(true);runOnJS(setIsDraggingRef)(true);if(onDragStart!=null){runOnJS(onDragStart)();}}';
        var4['code'] = var7;
        var _closure1_slot15 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx9(event,manager){const{State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET}=this.__closure;if(event.state!==State.BEGAN)return;const touch=event.allTouches[0];if(touch==null)return;const xDiff=touch.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager.fail();return;}}manager.activate();}';
        var4['code'] = var7;
        var _closure1_slot16 = var4;
        var4 = {};
        var7 = 'function useMainTabsPanelsGestureTsx10(event,manager){const{startPosition}=this.__closure;const touch=event.allTouches[0];if(touch==null)return;startPosition.set({x:touch.x,y:touch.y});manager.begin();}';
        var4['code'] = var7;
        var _closure1_slot17 = var4;
        var4 = 13;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function useMainTabsPanelsGesture(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var17 = var3.canDrag;
                var _closure2_slot0 = var17;
                var25 = var3.onVisibilityChange;
                var _closure2_slot1 = var25;
                var18 = var3.onDragStart;
                var _closure2_slot2 = var18;
                var24 = var3.onPreMovement;
                var _closure2_slot3 = var24;
                var6 = var3.startShown;
                var2 = var3.openWidth;
                var14 = var3.cancelOnSwipeRightFromStart;
                var _closure2_slot4 = var14;
                var21 = undefined;
                var _closure2_slot8 = var21;
                var _closure2_slot9 = var21;
                var _closure2_slot10 = var21;
                var _closure2_slot11 = var21;
                var _closure2_slot12 = var21;
                var _closure2_slot13 = var21;
                var _closure2_slot14 = var21;
                var _closure2_slot15 = var21;
                var _closure2_slot16 = var21;
                var _closure2_slot17 = var21;
                var _closure2_slot18 = var21;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 5;
                var3 = var5[var3];
                var3 = var4.bind(var21)(var3);
                var15 = var3.bind(var21)();
                var _closure2_slot5 = var15;
                var3 = 6;
                var3 = var5[var3];
                var3 = var4.bind(var21)(var3);
                var20 = var3.bind(var21)();
                var _closure2_slot6 = var20;
                var3 = _closure1_slot4;
                var3 = var3.bind(var21)();
                var19 = var3.width;
                var _closure2_slot7 = var19;
                var4 = null;
                var3 = var19;
                if(!(var4 != var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var3 = var2;
case 5:
                _closure2_slot8 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 7;
                var2 = var2[var9];
                var5 = var4.bind(var21)(var2);
                var4 = var5.useSharedValue;
                var2 = 0;
                if(var6) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var2 = var3;
case 7:
                var5 = var4.bind(var5)(var2);
                _closure2_slot9 = var5;
                var12 = _closure1_slot0;
                var22 = _closure1_slot2;
                var2 = var22[var9];
                var4 = var12.bind(var21)(var2);
                var2 = var4.useSharedValue;
                var23 = false;
                var6 = var2.bind(var4)(var23);
                _closure2_slot10 = var6;
                var10 = _closure1_slot3;
                var2 = var10.useRef;
                var2 = var2.bind(var10)(var23);
                _closure2_slot11 = var2;
                var11 = var10.useCallback;
                var7 = new Array(1);
                var7[0] = var2;
                var4 = function(arg1) {
                    var2 = _closure2_slot11;
                    var1 = arg1;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var13 = var11.bind(var10)(var4, var7);
                _closure2_slot12 = var13;
                var4 = var22[var9];
                var7 = var12.bind(var21)(var4);
                var4 = var7.useSharedValue;
                var11 = var4.bind(var7)(var23);
                _closure2_slot13 = var11;
                var16 = var10.useEffect;
                var7 = new Array(3);
                var7[0] = var6;
                var7[1] = var5;
                var7[2] = var3;
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
case 0:
                            var8 = arg1;
                            var3 = _closure2_slot10;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var3 = _closure2_slot9;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                            var3 = _closure2_slot9;
                            var2 = var3.set;
                            var5 = _closure1_slot6;
                            var1 = var8;
                            if(!var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
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
case 12:
                            var1 = var2.bind(var3)(var1);
case 9:
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
                var4 = var16.bind(var10)(var4, var7);
                var16 = var10.useCallback;
                var7 = function N(arg1, arg2, arg3, arg4) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = arg1;
                        var4 = arg2;
                        var _closure3_slot0 = var3;
                        var1 = arg4;
                        if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var6 = _closure2_slot9;
                        var5 = var6.get;
                        var6 = var5.bind(var6)();
                        var5 = 0;
                        if(!(var5 !== var6)) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                        var6 = _closure2_slot9;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        var1 = _closure2_slot8;
                        if(!(var5 !== var1)) { _fun0004_ip = 14; continue _fun0004 }
case 17:
                        var1 = false;
                        return var1;
case 14:
                        var11 = 0;
                        if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var11 = _closure2_slot8;
case 18:
                        var6 = _closure2_slot9;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        if(!(var5 !== var11)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var6 = _closure2_slot3;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
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
case 22:
                        var5 = _closure1_slot7;
                        if(var3) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                        if(var4) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var6 = var5.nonSwipeSidePanelClose;
                        _fun0004_ip = 28; continue _fun0004;
case 26:
                        var6 = var5.swipeSidePanelClose;
case 28:
                        _fun0004_ip = 29; continue _fun0004;
case 24:
                        if(var4) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                        var4 = var5.nonSwipeSidePanelOpen;
                        _fun0004_ip = 32; continue _fun0004;
case 30:
                        var4 = var5.swipeSidePanelOpen;
case 32:
                        var6 = var4;
case 29:
                        var2 = function() {
                            var1 = function handleAnimationFinish(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var1 = arg1;
                                    if(!var1) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                                    var3 = _closure2_slot1;
                                    var2 = null;
                                    var1 = var2 != var3;
case 33:
                                    if(!var1) { _fun0005_ip = 35; continue _fun0005 }
case 10:
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
case 35:
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
                        if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
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
                        _fun0004_ip = 38; continue _fun0004;
case 36:
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
case 38:
                        var2 = var4.bind(var5)(var2);
                        var2 = true;
                        return var2;
case 20:
                        var4 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
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
case 39:
                        var1 = false;
                        return var1;
                    }
                };
                var4 = {};
                var4['translateX'] = var5;
                var4['width'] = var3;
                var4['onVisibilityChange'] = var25;
                var26 = var22[var9];
                var26 = var12.bind(var21)(var26);
                var26 = var26.runOnJS;
                var4['runOnJS'] = var26;
                var4['onPreMovement'] = var24;
                var26 = _closure1_slot7;
                var4['panelsConfig'] = var26;
                var26 = 4;
                var26 = var22[var26];
                var26 = var12.bind(var21)(var26);
                var26 = var26.isTimingConfig;
                var4['isTimingConfig'] = var26;
                var26 = 8;
                var26 = var22[var26];
                var26 = var12.bind(var21)(var26);
                var26 = var26.withTiming;
                var4['withTiming'] = var26;
                var26 = 10;
                var26 = var22[var26];
                var26 = var12.bind(var21)(var26);
                var26 = var26.withSpring;
                var4['withSpring'] = var26;
                var7['__closure'] = var4;
                var4 = 4205680413964.0;
                var7['__workletHash'] = var4;
                var4 = _closure1_slot9;
                var7['__initData'] = var4;
                var4 = new Array(4);
                var4[0] = var25;
                var4[1] = var24;
                var4[2] = var5;
                var4[3] = var3;
                var4 = var16.bind(var10)(var7, var4);
                _closure2_slot14 = var4;
                var7 = var22[var9];
                var16 = var12.bind(var21)(var7);
                var7 = var16.useSharedValue;
                var7 = var7.bind(var16)(var23);
                _closure2_slot15 = var7;
                var16 = var22[var9];
                var25 = var12.bind(var21)(var16);
                var24 = var25.useAnimatedReaction;
                var23 = function F() {
                    var2 = _closure2_slot13;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var16 = {};
                var16['disallowGesture'] = var11;
                var23['__closure'] = var16;
                var16 = 15338765161171.0;
                var23['__workletHash'] = var16;
                var16 = _closure1_slot11;
                var23['__initData'] = var16;
                var16 = function U(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        if(!(var1 !== var2)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                        if(var1) { _fun0006_ip = 41; continue _fun0006 }
case 43:
                        var3 = _closure2_slot15;
                        var2 = var3.set;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
case 41:
                        var1 = undefined;
                        return var1;
                    }
                };
                var26 = {};
                var26['didJustAllowGesture'] = var7;
                var16['__closure'] = var26;
                var26 = 17048450187141.0;
                var16['__workletHash'] = var26;
                var26 = _closure1_slot12;
                var16['__initData'] = var26;
                var16 = var24.bind(var25)(var23, var16);
                var9 = var22[var9];
                var16 = var12.bind(var21)(var9);
                var12 = var16.useSharedValue;
                var9 = {'x': 0, 'y': 0};
                var16 = var12.bind(var16)(var9);
                _closure2_slot16 = var16;
                var9 = var10.useContext;
                var12 = _closure1_slot1;
                var8 = 11;
                var8 = var22[var8];
                var8 = var12.bind(var21)(var8);
                var12 = var9.bind(var10)(var8);
                _closure2_slot17 = var12;
                var9 = var10.useMemo;
                var8 = new Array(15);
                var8[0] = var20;
                var8[1] = var5;
                var8[2] = var3;
                var8[3] = var19;
                var8[4] = var6;
                var8[5] = var4;
                var8[6] = var18;
                var8[7] = var17;
                var8[8] = var16;
                var8[9] = var15;
                var8[10] = var14;
                var8[11] = var11;
                var8[12] = var13;
                var8[13] = var12;
                var8[14] = var7;
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
                    var2 = _closure2_slot17;
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
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = arg2;
                            var1 = arg1;
                            var3 = var1.allTouches;
                            var1 = 0;
                            var5 = var3[var1];
                            var1 = null;
                            if(!(var1 != var5)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                            var4 = _closure2_slot16;
                            var3 = var4.set;
                            var1 = {};
                            var6 = var5.x;
                            var1['x'] = var6;
                            var5 = var5.y;
                            var1['y'] = var5;
                            var1 = var3.bind(var4)(var1);
                            var1 = var2.begin;
                            var1 = var1.bind(var2)();
case 44:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var7 = {};
                    var12 = _closure2_slot16;
                    var7['startPosition'] = var12;
                    var2['__closure'] = var7;
                    var7 = 718728838752.0;
                    var2['__workletHash'] = var7;
                    var7 = _closure1_slot17;
                    var2['__initData'] = var7;
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.onTouchesMove;
                    var2 = function l(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
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
                            if(!(var6 === var4)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                            var2 = var2.allTouches;
                            var6 = 0;
                            var7 = var2[var6];
                            var2 = null;
                            if(!(var2 != var7)) { _fun0008_ip = 46; continue _fun0008 }
case 35:
                            var8 = var7.x;
                            var9 = _closure2_slot16;
                            var4 = var9.get;
                            var4 = var4.bind(var9)();
                            var4 = var4.x;
                            var4 = var8 - var4;
                            var9 = global;
                            var11 = var9.Math;
                            var8 = var11.abs;
                            var8 = var8.bind(var11)(var4);
                            if(!(!(var8 <= var10))) { _fun0008_ip = 46; continue _fun0008 }
case 48:
                            var11 = _closure2_slot13;
                            var10 = var11.get;
                            var10 = var10.bind(var11)();
                            if(var10) { _fun0008_ip = 46; continue _fun0008 }
case 49:
                            var10 = var9.Math;
                            var9 = var10.abs;
                            var11 = var7.y;
                            var12 = _closure2_slot16;
                            var7 = var12.get;
                            var7 = var7.bind(var12)();
                            var7 = var7.y;
                            var7 = var11 - var7;
                            var7 = var9.bind(var10)(var7);
                            if(!(!(var8 <= var7))) { _fun0008_ip = 46; continue _fun0008 }
case 50:
                            var8 = var8 * var8;
                            var7 = var7 * var7;
                            var8 = var8 + var7;
                            var7 = 144;
                            if(!(!(var8 < var7))) { _fun0008_ip = 46; continue _fun0008 }
case 51:
                            if(!(!(var4 <= var6))) { _fun0008_ip = 52; continue _fun0008 }
case 8:
                            var8 = _closure2_slot4;
                            var7 = true;
                            if(!(var7 === var8)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                            var8 = _closure2_slot9;
                            var7 = var8.get;
                            var8 = var7.bind(var8)();
                            var7 = _closure2_slot8;
                            if(!(var8 >= var7)) { _fun0008_ip = 53; continue _fun0008 }
case 55:
                            var7 = var3.fail;
                            var7 = var7.bind(var3)();
                            var7 = undefined;
                            return var7;
case 52:
                            var8 = _closure2_slot9;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            if(!(var6 !== var7)) { _fun0008_ip = 56; continue _fun0008 }
case 53:
                            var8 = _closure2_slot5;
                            var7 = _closure1_slot5;
                            var7 = var7.GESTURE_EDGE;
                            if(!(var8 !== var7)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                            var8 = _closure2_slot5;
                            var7 = _closure1_slot5;
                            var7 = var7.GESTURE_FULL;
                            if(!(var8 === var7)) { _fun0008_ip = 59; continue _fun0008 }
case 57:
                            if(!(var4 < var6)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                            var6 = _closure2_slot7;
                            var4 = 48;
                            var4 = var6 - var4;
                            var7 = _closure2_slot5;
                            var6 = _closure1_slot5;
                            var6 = var6.GESTURE_FULL;
                            if(!(var7 === var6)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                            var7 = _closure2_slot16;
                            var6 = var7.get;
                            var6 = var6.bind(var7)();
                            var6 = var6.x;
                            if(!(!(var6 < var4))) { _fun0008_ip = 63; continue _fun0008 }
case 61:
                            var6 = _closure2_slot5;
                            var5 = _closure1_slot5;
                            var5 = var5.GESTURE_EDGE;
                            if(!(var6 === var5)) { _fun0008_ip = 59; continue _fun0008 }
case 64:
                            var5 = _closure2_slot16;
                            var2 = var5.get;
                            var2 = var2.bind(var5)();
                            var2 = var2.x;
                            if(!(!(var2 >= var4))) { _fun0008_ip = 63; continue _fun0008 }
case 59:
                            var2 = var3.activate;
                            var2 = var2.bind(var3)();
                            _fun0008_ip = 46; continue _fun0008;
case 63:
                            var2 = var3.fail;
                            var2 = var2.bind(var3)();
                            var2 = undefined;
                            return var2;
case 56:
                            var2 = var3.fail;
                            var2 = var2.bind(var3)();
                            var2 = undefined;
                            return var2;
case 46:
                            return var1;
                        }
                    };
                    var7 = {};
                    var12 = var10[var11];
                    var12 = var9.bind(var8)(var12);
                    var12 = var12.State;
                    var7['State'] = var12;
                    var12 = _closure2_slot16;
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
                    var7 = 13108412336922.0;
                    var2['__workletHash'] = var7;
                    var7 = _closure1_slot16;
                    var2['__initData'] = var7;
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.onStart;
                    var2 = function s() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
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
                            if(!(var4 != var6)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.runOnJS;
                            var2 = _closure2_slot2;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var1)();
case 65:
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
                    var11 = 8659650895938.0;
                    var2['__workletHash'] = var11;
                    var11 = _closure1_slot15;
                    var2['__initData'] = var11;
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.onChange;
                    var2 = function t(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var3 = _closure2_slot13;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var3 = _closure2_slot9;
                            if(var2) { _fun0010_ip = 67; continue _fun0010 }
case 68:
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
                            var5 = _closure2_slot15;
                            var4 = var5.set;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            _fun0010_ip = 69; continue _fun0010;
case 67:
                            var2 = var3.get;
                            var4 = var2.bind(var3)();
                            var3 = 0;
                            if(!(var3 !== var4)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                            var2 = _closure2_slot8;
                            if(!(var4 !== var2)) { _fun0010_ip = 70; continue _fun0010 }
case 72:
                            var2 = _closure2_slot9;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
case 69:
                            var1 = undefined;
                            return var1;
case 70:
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
                    var12 = _closure2_slot15;
                    var11['didJustAllowGesture'] = var12;
                    var2['__closure'] = var11;
                    var11 = 13355779907583.0;
                    var2['__workletHash'] = var11;
                    var11 = _closure1_slot14;
                    var2['__initData'] = var11;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.onFinalize;
                    var1 = function e(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = arg1;
case 73: // try_start_0
                            var4 = _closure2_slot10;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            if(!var1) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                            var4 = _closure2_slot13;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            if(var1) { _fun0011_ip = 74; continue _fun0011 }
case 76:
                            var4 = _closure2_slot15;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            if(var1) { _fun0011_ip = 74; continue _fun0011 }
case 13: // try_end0
                            var4 = _closure2_slot10;
                            var1 = var4.set;
                            var8 = false;
                            var1 = var1.bind(var4)(var8);
                            var4 = _closure2_slot15;
                            var1 = var4.set;
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
                            if(!(!(var5 > var4))) { _fun0011_ip = 77; continue _fun0011 }
case 78:
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
                            _fun0011_ip = 79; continue _fun0011;
case 77:
                            var6 = _closure2_slot14;
                            var5 = var3.velocityX;
                            var4 = 0;
                            var12 = var5 < var4;
                            var10 = var3.velocityX;
                            var13 = undefined;
                            var11 = true;
                            var9 = true;
                            var3 = var13[var6](var12, var11, var10, var9, var8);
case 79:
                            return var1;
case 74:
                            var4 = _closure2_slot10;
                            var1 = var4.set;
                            var3 = false;
                            var1 = var1.bind(var4)(var3);
                            var4 = _closure2_slot15;
                            var1 = var4.set;
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
case 80: // catch_target0
                            CatchBlockStart(arg_register=0);
                            var5 = _closure2_slot10;
                            var3 = var5.set;
                            var4 = false;
                            var3 = var3.bind(var5)(var4);
                            var5 = _closure2_slot15;
                            var3 = var5.set;
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
                    var11 = _closure2_slot15;
                    var5['didJustAllowGesture'] = var11;
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
                    var5 = 2071301756262.0;
                    var1['__workletHash'] = var5;
                    var4 = _closure1_slot13;
                    var1['__initData'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var9.bind(var10)(var7, var8);
                _closure2_slot18 = var8;
                var9 = var10.useMemo;
                var7 = new Array(3);
                var7[0] = var8;
                var7[1] = var11;
                var7[2] = var5;
                var1 = function() {
                    var1 = {};
                    var3 = _closure2_slot18;
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