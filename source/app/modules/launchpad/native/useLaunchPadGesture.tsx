// app/modules/launchpad/native/useLaunchPadGesture.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var7 = var4.LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE;
    var _closure1_slot4 = var7;
    var7 = var4.LAUNCH_PAD_PULL_TAB_HEIGHT;
    var _closure1_slot5 = var7;
    var7 = var4.LAUNCH_PAD_PULL_TAB_HIT_SLOP;
    var _closure1_slot6 = var7;
    var7 = var4.LAUNCH_PAD_PULL_TAB_SCALE_FACTOR;
    var _closure1_slot7 = var7;
    var7 = var4.LAUNCH_PAD_PULL_TAB_WIDTH;
    var _closure1_slot8 = var7;
    var4 = var4.LaunchPadTypes;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function useLaunchPadGestureTsx1(){const{updateSharedValueIfChanged,gestureState,updaters}=this.__closure;updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});updaters.setLaunchPadPullTabScale(1.0);}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function useLaunchPadGestureTsx2(){const{gestureState,updaters,updateSharedValueIfChanged}=this.__closure;const{initialLaunchPadPosition:initialLaunchPadPosition,active:active}=gestureState.get();if(active){if(initialLaunchPadPosition===1){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function useLaunchPadGestureTsx3({velocityX:velocityX}){const{gestureState,updaters,launchPadSharedState}=this.__closure;const{requiresPop:requiresPop,startShown:startShown}=gestureState.get();if(requiresPop){if(!startShown){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}else if(Math.abs(velocityX)<100){if(launchPadSharedState.get()>=0.5){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else if(velocityX>0){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function useLaunchPadGestureTsx4({translationX:translationX,translationY:translationY,absoluteX:absoluteX}){const{gestureState,getWindowDimensionsWorklet,POP_RESISTANCE,launchPadType,LaunchPadTypes,PIP_POP_DISTANCE,updaters,updateSharedValueIfChanged,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active)return;const{initialTouchX:initialTouchX,requiresPop:requiresPop}=gestureState.get();const{width:windowWidth}=getWindowDimensionsWorklet();const newXOffset=absoluteX-initialTouchX;const distance=Math.max(newXOffset*-1,0);const resistance=distance*POP_RESISTANCE;const positionOffsetX=absoluteX-gestureState.get().initialTouchX;const launchPadPosition=1-(gestureState.get().initialTouchX+translationX-(launchPadType!==LaunchPadTypes.PULL_TAB?40:0))/windowWidth;if(requiresPop&&distance<=PIP_POP_DISTANCE){if(launchPadType!==LaunchPadTypes.PULL_TAB){const a=(distance-resistance)/windowWidth;updaters.setLaunchPadPosition(a);}else{updaters.setLaunchPadPullTabTranslation(translationY);}updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}else{if(requiresPop){updateSharedValueIfChanged(gestureState,{requiresPop:false,positionOffsetX:positionOffsetX});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}updaters.setLaunchPadPosition(launchPadPosition);}}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function useLaunchPadGestureTsx5(event,manager){const{gestureState,State,getWindowDimensionsWorklet,launchPadType,LaunchPadTypes,LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,LAUNCH_PAD_PULL_TAB_WIDTH,LAUNCH_PAD_PULL_TAB_HIT_SLOP,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_HEIGHT,updaters,LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,launchPadSharedState,MANUAL_ACTIVATION_THRESHOLD}=this.__closure;const{active:active,initialLaunchPadPosition:initialLaunchPadPosition,initialTouchX:initialTouchX,initialTouchY:initialTouchY}=gestureState.get();if(event.state!==State.BEGAN||active)return;const currentTouch=event.changedTouches[0];const{x:x,y:y}=currentTouch;const{width:windowWidth}=getWindowDimensionsWorklet();if(currentTouch==null||launchPadType===LaunchPadTypes.GESTURE_EDGE&&initialLaunchPadPosition===0&&initialTouchX<windowWidth-LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE||launchPadType===LaunchPadTypes.DISABLED){manager.fail();return;}if(launchPadType===LaunchPadTypes.PULL_TAB&&initialLaunchPadPosition===0){const inPullTabX=x>windowWidth-LAUNCH_PAD_PULL_TAB_WIDTH-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&x<windowWidth;const inPullTabY=y>launchPadPullTabState.get().position-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&y<launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_HIT_SLOP;if(inPullTabX&&inPullTabY){gestureState.set({...gestureState.get(),initialPullTabPosition:launchPadPullTabState.get().position,active:true});updaters.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);updaters.setLaunchPadShown(true);manager.activate();return;}}if(launchPadType!==LaunchPadTypes.PULL_TAB||launchPadType===LaunchPadTypes.PULL_TAB&&initialLaunchPadPosition>0){const horizontalDistance=x-initialTouchX;const verticalDistance=Math.abs(y-initialTouchY);const hasMovedCorrectDirection=launchPadSharedState.get()>0&&horizontalDistance>0||launchPadSharedState.get()<=0&&horizontalDistance<0;if(hasMovedCorrectDirection&&Math.abs(horizontalDistance)>verticalDistance){if(Math.abs(horizontalDistance)<MANUAL_ACTIVATION_THRESHOLD){return;}gestureState.set({...gestureState.get(),active:true});updaters.setLaunchPadShown(true);manager.activate();return;}}manager.fail();}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function useLaunchPadGestureTsx6(event){const{gestureState,launchPadSharedState}=this.__closure;const{x:x,y:y}=event.changedTouches[0];gestureState.set({active:false,initialLaunchPadPosition:launchPadSharedState.get(),initialPullTabPosition:0,initialTouchX:x,initialTouchY:y,positionOffsetX:0,positionOffsetY:0,startTime:Date.now(),requiresPop:launchPadSharedState.get()===0,startShown:!(launchPadSharedState.get()===0)});}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/useLaunchPadGesture.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLaunchPadGesture(arg1) {
        var1 = arg1;
        var8 = var1.launchPadType;
        var _closure2_slot0 = var8;
        var9 = var1.launchPadSharedState;
        var _closure2_slot1 = var9;
        var10 = var1.launchPadPullTabState;
        var _closure2_slot2 = var10;
        var13 = var1.gestureState;
        var _closure2_slot3 = var13;
        var7 = var1.updaters;
        var _closure2_slot4 = var7;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var4 = var6[var2];
        var2 = undefined;
        var5 = var5.bind(var2)(var4);
        var4 = var5.useIsModalOpen;
        var11 = var4.bind(var5)();
        var _closure2_slot5 = var11;
        var5 = _closure1_slot1;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var2)(var4);
        var12 = var4.bind(var2)();
        var _closure2_slot6 = var12;
        var6 = _closure1_slot3;
        var1 = var6.useRef;
        var2 = var1.bind(var6)(var2);
        var _closure2_slot7 = var2;
        var1 = {};
        var5 = var6.useMemo;
        var4 = new Array(7);
        var4[0] = var13;
        var4[1] = var12;
        var4[2] = var11;
        var4[3] = var10;
        var4[4] = var9;
        var4[5] = var8;
        var4[6] = var7;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = _closure1_slot9;
                var2 = var2.GESTURE_FULL;
                var13 = 0;
                var7 = 0;
                if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot4;
                var2 = -1;
                var7 = var2 * var3;
case 2:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 4;
                var2 = var2[var8];
                var10 = undefined;
                var2 = var3.bind(var10)(var2);
                var3 = var2.Gesture;
                var2 = var3.Pan;
                var5 = var2.bind(var3)();
                var3 = var5.enabled;
                var2 = _closure2_slot5;
                var2 = !var2;
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var11 = _closure2_slot0;
                var9 = _closure1_slot9;
                var9 = var9.DISABLED;
                var2 = var11 !== var9;
case 4:
                var5 = var3.bind(var5)(var2);
                var3 = var5.withRef;
                var2 = _closure2_slot7;
                var3 = var3.bind(var5)(var2);
                var2 = var3.minDistance;
                var5 = var2.bind(var3)(var13);
                var3 = var5.maxPointers;
                var2 = 1;
                var5 = var3.bind(var5)(var2);
                var3 = var5.manualActivation;
                var15 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 5;
                var2 = var11[var2];
                var9 = var15.bind(var10)(var2);
                var2 = var9.isAndroid;
                var2 = var2.bind(var9)();
                var5 = var3.bind(var5)(var2);
                var3 = var5.hitSlop;
                var2 = {};
                var9 = _closure2_slot6;
                var14 = var9.top;
                var12 = -1;
                var14 = var12 * var14;
                var2['top'] = var14;
                var2['left'] = var13;
                var9 = var9.bottom;
                var9 = var12 * var9;
                var2['bottom'] = var9;
                var2['right'] = var7;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onTouchesDown;
                var2 = function w(arg1) {
                    var1 = arg1;
                    var1 = var1.changedTouches;
                    var5 = 0;
                    var1 = var1[var5];
                    var7 = var1.x;
                    var4 = var1.y;
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var1 = {'active': false, 'initialLaunchPadPosition': null, 'initialPullTabPosition': 0, 'initialTouchX': null, 'initialTouchY': null, 'positionOffsetX': 0, 'positionOffsetY': 0};
                    var6 = _closure2_slot1;
                    var8 = var6.get;
                    var8 = var8.bind(var6)();
                    var1['initialLaunchPadPosition'] = var8;
                    var1['initialTouchX'] = var7;
                    var1['initialTouchY'] = var4;
                    var4 = global;
                    var7 = var4.Date;
                    var4 = var7.now;
                    var4 = var4.bind(var7)();
                    var1['startTime'] = var4;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    var4 = var5 === var4;
                    var1['requiresPop'] = var4;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    var4 = var5 === var4;
                    var4 = !var4;
                    var1['startShown'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var9 = {};
                var7 = _closure2_slot3;
                var9['gestureState'] = var7;
                var13 = _closure2_slot1;
                var9['launchPadSharedState'] = var13;
                var2['__closure'] = var9;
                var9 = 14359599806316.0;
                var2['__workletHash'] = var9;
                var9 = _closure1_slot15;
                var2['__initData'] = var9;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onTouchesMove;
                var2 = function b(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = arg1;
                        var3 = arg2;
                        var2 = _closure2_slot3;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var6 = var1.active;
                        var9 = var1.initialLaunchPadPosition;
                        var7 = var1.initialTouchX;
                        var11 = var1.initialTouchY;
                        var10 = var5.state;
                        var12 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 4;
                        var8 = var8[var1];
                        var1 = undefined;
                        var8 = var12.bind(var1)(var8);
                        var8 = var8.State;
                        var8 = var8.BEGAN;
                        if(!(var10 === var8)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                        var5 = var5.changedTouches;
                        var6 = 0;
                        var13 = var5[var6];
                        var5 = var13.x;
                        var8 = var13.y;
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var10 = 6;
                        var10 = var14[var10];
                        var12 = var12.bind(var1)(var10);
                        var10 = var12.getWindowDimensionsWorklet;
                        var10 = var10.bind(var12)();
                        var12 = var10.width;
                        var10 = null;
                        if(!(var10 != var13)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var13 = _closure2_slot0;
                        var10 = _closure1_slot9;
                        var10 = var10.GESTURE_EDGE;
                        if(!(var13 === var10)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        if(!(var6 === var9)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                        var10 = _closure1_slot4;
                        var10 = var12 - var10;
                        if(!(!(var7 < var10))) { _fun0002_ip = 9; continue _fun0002 }
case 11:
                        var13 = _closure2_slot0;
                        var10 = _closure1_slot9;
                        var10 = var10.DISABLED;
                        if(!(var13 !== var10)) { _fun0002_ip = 9; continue _fun0002 }
case 14:
                        var13 = _closure2_slot0;
                        var10 = _closure1_slot9;
                        var10 = var10.PULL_TAB;
                        if(!(var13 === var10)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                        if(!(var6 === var9)) { _fun0002_ip = 15; continue _fun0002 }
case 17:
                        var13 = _closure2_slot2;
                        var10 = var13.get;
                        var10 = var10.bind(var13)();
                        var13 = var10.position;
                        var10 = _closure1_slot6;
                        var10 = var13 - var10;
                        var10 = var8 > var10;
                        if(!var10) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        var14 = _closure2_slot2;
                        var13 = var14.get;
                        var13 = var13.bind(var14)();
                        var14 = var13.position;
                        var13 = _closure1_slot5;
                        var14 = var14 + var13;
                        var13 = _closure1_slot6;
                        var13 = var14 + var13;
                        var10 = var8 < var13;
case 18:
                        var13 = _closure1_slot8;
                        var14 = var12 - var13;
                        var13 = _closure1_slot6;
                        var13 = var14 - var13;
                        if(!(var5 > var13)) { _fun0002_ip = 15; continue _fun0002 }
case 20:
                        if(!(var5 < var12)) { _fun0002_ip = 15; continue _fun0002 }
case 21:
                        if(var10) { _fun0002_ip = 22; continue _fun0002 }
case 15:
                        var12 = _closure2_slot0;
                        var10 = _closure1_slot9;
                        var10 = var10.PULL_TAB;
                        if(!(var12 === var10)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                        var12 = _closure2_slot0;
                        var10 = _closure1_slot9;
                        var10 = var10.PULL_TAB;
                        if(!(var12 === var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                        if(!(var9 > var6)) { _fun0002_ip = 25; continue _fun0002 }
case 23:
                        var7 = var5 - var7;
                        var5 = global;
                        var10 = var5.Math;
                        var9 = var10.abs;
                        var8 = var8 - var11;
                        var8 = var9.bind(var10)(var8);
                        var10 = _closure2_slot1;
                        var9 = var10.get;
                        var9 = var9.bind(var10)();
                        if(!(var9 > var6)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                        if(!(!(var7 > var6))) { _fun0002_ip = 29; continue _fun0002 }
case 27:
                        var10 = _closure2_slot1;
                        var9 = var10.get;
                        var9 = var9.bind(var10)();
                        if(!(var9 <= var6)) { _fun0002_ip = 25; continue _fun0002 }
case 30:
                        if(!(var7 < var6)) { _fun0002_ip = 25; continue _fun0002 }
case 29:
                        var9 = var5.Math;
                        var6 = var9.abs;
                        var6 = var6.bind(var9)(var7);
                        if(!(!(var6 > var8))) { _fun0002_ip = 31; continue _fun0002 }
case 25:
                        var6 = var3.fail;
                        var6 = var6.bind(var3)();
                        _fun0002_ip = 6; continue _fun0002;
case 31:
                        var6 = var5.Math;
                        var5 = var6.abs;
                        var6 = var5.bind(var6)(var7);
                        var5 = 3;
                        if(!(!(var6 < var5))) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                        var8 = _closure2_slot3;
                        var6 = var8.set;
                        var5 = {};
                        var7 = var8.get;
                        var15 = var7.bind(var8)();
                        var16 = var5;
                        var7 = copyDataProperties(var16, var15);
                        var7 = true;
                        var9 = 'active';
                        var5[var9] = var7;
                        var5 = var6.bind(var8)(var5);
                        var6 = _closure2_slot4;
                        var5 = var6.setLaunchPadShown;
                        var5 = var5.bind(var6)(var7);
                        var5 = var3.activate;
                        var5 = var5.bind(var3)();
                        var5 = undefined;
                        return var5;
case 32:
                        return var1;
case 22:
                        var8 = _closure2_slot3;
                        var7 = var8.set;
                        var6 = {};
                        var5 = var8.get;
                        var15 = var5.bind(var8)();
                        var16 = var6;
                        var5 = copyDataProperties(var16, var15);
                        var9 = _closure2_slot2;
                        var5 = var9.get;
                        var5 = var5.bind(var9)();
                        var9 = var5.position;
                        var5 = 'initialPullTabPosition';
                        var6[var5] = var9;
                        var5 = true;
                        var9 = 'active';
                        var6[var9] = var5;
                        var6 = var7.bind(var8)(var6);
                        var4 = _closure2_slot4;
                        var6 = var4.setLaunchPadPullTabScale;
                        var2 = _closure1_slot7;
                        var2 = var6.bind(var4)(var2);
                        var2 = var4.setLaunchPadShown;
                        var2 = var2.bind(var4)(var5);
                        var2 = var3.activate;
                        var2 = var2.bind(var3)();
                        var2 = undefined;
                        return var2;
case 9:
                        var2 = var3.fail;
                        var2 = var2.bind(var3)();
case 6:
                        return var1;
                    }
                };
                var12 = {};
                var12['gestureState'] = var7;
                var8 = var11[var8];
                var8 = var15.bind(var10)(var8);
                var8 = var8.State;
                var12['State'] = var8;
                var14 = 6;
                var8 = var11[var14];
                var8 = var15.bind(var10)(var8);
                var8 = var8.getWindowDimensionsWorklet;
                var12['getWindowDimensionsWorklet'] = var8;
                var9 = _closure2_slot0;
                var12['launchPadType'] = var9;
                var8 = _closure1_slot9;
                var12['LaunchPadTypes'] = var8;
                var16 = _closure1_slot4;
                var12['LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE'] = var16;
                var16 = _closure1_slot8;
                var12['LAUNCH_PAD_PULL_TAB_WIDTH'] = var16;
                var16 = _closure1_slot6;
                var12['LAUNCH_PAD_PULL_TAB_HIT_SLOP'] = var16;
                var16 = _closure2_slot2;
                var12['launchPadPullTabState'] = var16;
                var16 = _closure1_slot5;
                var12['LAUNCH_PAD_PULL_TAB_HEIGHT'] = var16;
                var6 = _closure2_slot4;
                var12['updaters'] = var6;
                var16 = _closure1_slot7;
                var12['LAUNCH_PAD_PULL_TAB_SCALE_FACTOR'] = var16;
                var12['launchPadSharedState'] = var13;
                var16 = 3;
                var12['MANUAL_ACTIVATION_THRESHOLD'] = var16;
                var2['__closure'] = var12;
                var12 = 5887887666279.0;
                var2['__workletHash'] = var12;
                var12 = _closure1_slot14;
                var2['__initData'] = var12;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onChange;
                var2 = function X(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var11 = var1.translationX;
                        var7 = var1.translationY;
                        var10 = var1.absoluteX;
                        var3 = _closure2_slot3;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.active;
                        if(!var2) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                        var12 = _closure2_slot3;
                        var2 = var12.get;
                        var2 = var2.bind(var12)();
                        var5 = var2.initialTouchX;
                        var3 = var2.requiresPop;
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 6;
                        var6 = var6[var4];
                        var4 = undefined;
                        var8 = var8.bind(var4)(var6);
                        var6 = var8.getWindowDimensionsWorklet;
                        var6 = var6.bind(var8)();
                        var8 = var6.width;
                        var6 = global;
                        var13 = var6.Math;
                        var9 = var13.max;
                        var6 = var10 - var5;
                        var5 = -1;
                        var5 = var5 * var6;
                        var6 = 0;
                        var9 = var9.bind(var13)(var5, var6);
                        var5 = var12.get;
                        var5 = var5.bind(var12)();
                        var5 = var5.initialTouchX;
                        var5 = var10 - var5;
                        var10 = var12.get;
                        var10 = var10.bind(var12)();
                        var10 = var10.initialTouchX;
                        var10 = var10 + var11;
                        var12 = _closure2_slot0;
                        var11 = _closure1_slot9;
                        var11 = var11.PULL_TAB;
                        if(!(var12 !== var11)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                        var6 = 40;
case 36:
                        var6 = var10 - var6;
                        var11 = var6 / var8;
                        if(!var3) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                        var6 = 70;
                        if(!(!(var9 <= var6))) { _fun0003_ip = 40; continue _fun0003 }
case 38:
                        var10 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var6 = 7;
                        var6 = var12[var6];
                        var10 = var10.bind(var4)(var6);
                        var6 = _closure2_slot3;
                        if(var3) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                        var3 = {};
                        var3['positionOffsetX'] = var5;
                        var3 = var10.bind(var4)(var6, var3);
                        _fun0003_ip = 43; continue _fun0003;
case 41:
                        var3 = {};
                        var13 = false;
                        var3['requiresPop'] = var13;
                        var3['positionOffsetX'] = var5;
                        var3 = var10.bind(var4)(var6, var3);
                        var10 = _closure1_slot0;
                        var3 = 8;
                        var3 = var12[var3];
                        var14 = var10.bind(var4)(var3);
                        var13 = var14.runOnJS;
                        var3 = 9;
                        var6 = var12[var3];
                        var6 = var10.bind(var4)(var6);
                        var6 = var6.triggerHapticFeedback;
                        var6 = var13.bind(var14)(var6);
                        var3 = var12[var3];
                        var3 = var10.bind(var4)(var3);
                        var3 = var3.HapticFeedbackTypes;
                        var3 = var3.IMPACT_MEDIUM;
                        var3 = var6.bind(var4)(var3);
case 43:
                        var10 = _closure2_slot4;
                        var6 = var10.setLaunchPadPosition;
                        var3 = 1;
                        var3 = var3 - var11;
                        var3 = var6.bind(var10)(var3);
                        _fun0003_ip = 34; continue _fun0003;
case 40:
                        var6 = _closure2_slot0;
                        var3 = _closure1_slot9;
                        var3 = var3.PULL_TAB;
                        if(!(var6 === var3)) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                        var6 = _closure2_slot4;
                        var3 = var6.setLaunchPadPullTabTranslation;
                        var3 = var3.bind(var6)(var7);
                        _fun0003_ip = 29; continue _fun0003;
case 44:
                        var7 = _closure2_slot4;
                        var6 = var7.setLaunchPadPosition;
                        var3 = 0.5;
                        var3 = var3 * var9;
                        var3 = var9 - var3;
                        var3 = var3 / var8;
                        var3 = var6.bind(var7)(var3);
case 29:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 7;
                        var2 = var6[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = _closure2_slot3;
                        var1 = {};
                        var1['positionOffsetX'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 34:
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = {};
                var12['gestureState'] = var7;
                var14 = var11[var14];
                var14 = var15.bind(var10)(var14);
                var14 = var14.getWindowDimensionsWorklet;
                var12['getWindowDimensionsWorklet'] = var14;
                var14 = 0.5;
                var12['POP_RESISTANCE'] = var14;
                var12['launchPadType'] = var9;
                var12['LaunchPadTypes'] = var8;
                var8 = 70;
                var12['PIP_POP_DISTANCE'] = var8;
                var12['updaters'] = var6;
                var9 = _closure1_slot1;
                var8 = 7;
                var14 = var11[var8];
                var14 = var9.bind(var10)(var14);
                var12['updateSharedValueIfChanged'] = var14;
                var14 = 8;
                var14 = var11[var14];
                var14 = var15.bind(var10)(var14);
                var14 = var14.runOnJS;
                var12['runOnJS'] = var14;
                var14 = 9;
                var16 = var11[var14];
                var16 = var15.bind(var10)(var16);
                var16 = var16.triggerHapticFeedback;
                var12['triggerHapticFeedback'] = var16;
                var14 = var11[var14];
                var14 = var15.bind(var10)(var14);
                var14 = var14.HapticFeedbackTypes;
                var12['HapticFeedbackTypes'] = var14;
                var2['__closure'] = var12;
                var12 = 8073380735713.0;
                var2['__workletHash'] = var12;
                var12 = _closure1_slot13;
                var2['__initData'] = var12;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onEnd;
                var2 = function v(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.velocityX;
                        var4 = _closure2_slot3;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var4 = var1.requiresPop;
                        var1 = var1.startShown;
                        if(var4) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                        var4 = global;
                        var5 = var4.Math;
                        var4 = var5.abs;
                        var5 = var4.bind(var5)(var3);
                        var4 = 100;
                        if(!(!(var5 < var4))) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                        var5 = 0;
                        if(!(!(var3 > var5))) { _fun0004_ip = 7; continue _fun0004 }
case 50:
                        var6 = _closure2_slot4;
                        var4 = var6.setLaunchPadPosition;
                        var3 = 1;
                        var3 = var4.bind(var6)(var3);
                        _fun0004_ip = 36; continue _fun0004;
case 7:
                        var4 = _closure2_slot4;
                        var3 = var4.setLaunchPadPosition;
                        var3 = var3.bind(var4)(var5);
                        _fun0004_ip = 36; continue _fun0004;
case 48:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var4 = var3.bind(var4)();
                        var3 = 0.5;
                        if(!(!(var4 >= var3))) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                        var5 = _closure2_slot4;
                        var4 = var5.setLaunchPadPosition;
                        var3 = 0;
                        var3 = var4.bind(var5)(var3);
                        _fun0004_ip = 36; continue _fun0004;
case 51:
                        var5 = _closure2_slot4;
                        var4 = var5.setLaunchPadPosition;
                        var3 = 1;
                        var3 = var4.bind(var5)(var3);
                        _fun0004_ip = 36; continue _fun0004;
case 46:
                        var3 = _closure2_slot4;
                        var2 = var3.setLaunchPadPosition;
                        if(var1) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                        var1 = 0;
                        var1 = var2.bind(var3)(var1);
                        _fun0004_ip = 36; continue _fun0004;
case 53:
                        var1 = 1;
                        var1 = var2.bind(var3)(var1);
case 36:
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = {};
                var12['gestureState'] = var7;
                var12['updaters'] = var6;
                var12['launchPadSharedState'] = var13;
                var2['__closure'] = var12;
                var12 = 14391907446770.0;
                var2['__workletHash'] = var12;
                var12 = _closure1_slot12;
                var2['__initData'] = var12;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onTouchesCancelled;
                var2 = function O() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure2_slot3;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var1 = var3.initialLaunchPadPosition;
                        var3 = var3.active;
                        if(!var3) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                        var4 = 1;
                        if(!(var4 !== var1)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                        var5 = _closure2_slot4;
                        var3 = var5.setLaunchPadPosition;
                        var1 = 0;
                        var1 = var3.bind(var5)(var1);
                        _fun0005_ip = 55; continue _fun0005;
case 57:
                        var3 = _closure2_slot4;
                        var1 = var3.setLaunchPadPosition;
                        var1 = var1.bind(var3)(var4);
case 55:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = _closure2_slot3;
                        var2 = {'active': false, 'initialLaunchPadPosition': 0, 'initialPullTabPosition': 0, 'initialTouchX': 0, 'initialTouchY': 0, 'positionOffsetX': 0, 'positionOffsetY': 0, 'startTime': 4294967295};
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var12 = {};
                var12['gestureState'] = var7;
                var12['updaters'] = var6;
                var13 = var11[var8];
                var13 = var9.bind(var10)(var13);
                var12['updateSharedValueIfChanged'] = var13;
                var2['__closure'] = var12;
                var12 = 11677880944102.0;
                var2['__workletHash'] = var12;
                var12 = _closure1_slot11;
                var2['__initData'] = var12;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onFinalize;
                var1 = function t() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = _closure2_slot3;
                    var3 = {'active': false, 'initialLaunchPadPosition': 0, 'initialPullTabPosition': 0, 'initialTouchX': 0, 'initialTouchY': 0, 'positionOffsetX': 0, 'positionOffsetY': 0, 'startTime': 4294967295};
                    var3 = var5.bind(var1)(var4, var3);
                    var4 = _closure2_slot4;
                    var3 = var4.setLaunchPadPullTabScale;
                    var2 = 1;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var5 = {};
                var8 = var11[var8];
                var8 = var9.bind(var10)(var8);
                var5['updateSharedValueIfChanged'] = var8;
                var5['gestureState'] = var7;
                var5['updaters'] = var6;
                var1['__closure'] = var5;
                var5 = 14463491499289.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot10;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var1['gesture'] = var3;
        var1['gestureRef'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();