// app/modules/panels/morphable/native/useMorphablePanelGesture.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var5 = var6.bind(var1)(var2);
    var2 = var5.IS_IOS;
    var _closure1_slot4 = var2;
    var2 = var5.MIN_PAN_GESTURE_MOVE;
    var _closure1_slot5 = var2;
    var2 = var5.MorphablePanelModes;
    var _closure1_slot6 = var2;
    var8 = var5.PANEL_TAP_GESTURE_MAX_DISTANCE;
    var _closure1_slot7 = var8;
    var8 = var5.PIP_POP_HEIGHT;
    var _closure1_slot8 = var8;
    var5 = var5.POP_RESISTANCE;
    var _closure1_slot9 = var5;
    var5 = {};
    var8 = 'function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}';
    var5['code'] = var8;
    var _closure1_slot10 = var5;
    var5 = {};
    var8 = 'function useMorphablePanelGestureTsx2(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}';
    var5['code'] = var8;
    var _closure1_slot11 = var5;
    var5 = {};
    var8 = 'function useMorphablePanelGestureTsx3(event){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}';
    var5['code'] = var8;
    var _closure1_slot12 = var5;
    var5 = {};
    var8 = 'function useMorphablePanelGestureTsx4(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}';
    var5['code'] = var8;
    var _closure1_slot13 = var5;
    var5 = {};
    var8 = 'function useMorphablePanelGestureTsx5(event){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1});}}';
    var5['code'] = var8;
    var _closure1_slot14 = var5;
    var5 = {};
    var8 = 'function useMorphablePanelGestureTsx6(event,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}';
    var5['code'] = var8;
    var _closure1_slot15 = var5;
    var5 = {};
    var8 = 'function useMorphablePanelGestureTsx7(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}';
    var5['code'] = var8;
    var _closure1_slot16 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/panels/morphable/native/useMorphablePanelGesture.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useMorphablePanelGesture(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = var2.mode;
            var _closure2_slot0 = var14;
            var12 = var2.onPanMinimizeGestureEnd;
            var _closure2_slot1 = var12;
            var11 = var2.onTapGestureStart;
            var _closure2_slot2 = var11;
            var10 = var2.panGestureEnabled;
            var15 = undefined;
            if(!(var10 === var15)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = false;
case 2:
            var _closure2_slot3 = var10;
            var7 = var2.pipState;
            var _closure2_slot4 = var7;
            var13 = var2.swipeRequiresPop;
            if(!(var13 === var15)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = false;
case 4:
            var _closure2_slot5 = var13;
            var6 = var2.wrapperOffset;
            var _closure2_slot6 = var6;
            var5 = var2.disableHorizontalSafeAreas;
            if(!(var5 === var15)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = false;
case 6:
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var15;
            var _closure2_slot9 = var15;
            var _closure2_slot10 = var15;
            var4 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 2;
            var3 = var16[var3];
            var3 = var4.bind(var15)(var3);
            var8 = var3.bind(var15)();
            _closure2_slot8 = var8;
            var3 = 3;
            var3 = var16[var3];
            var3 = var4.bind(var15)(var3);
            var9 = var3.bind(var15)();
            _closure2_slot9 = var9;
            var4 = _closure1_slot0;
            var3 = 4;
            var3 = var16[var3];
            var15 = var4.bind(var15)(var3);
            var4 = var15.useSharedValue;
            var3 = {'absoluteXStart': 0, 'absoluteYStart': 0, 'active': false, 'gestureInBottomSafeArea': false, 'cancel': false, 'requiresPop': false};
            var15 = var4.bind(var15)(var3);
            _closure2_slot10 = var15;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(11);
            var2[0] = var15;
            var2[1] = var14;
            var2[2] = var13;
            var2[3] = var12;
            var2[4] = var11;
            var2[5] = var10;
            var2[6] = var9;
            var2[7] = var8;
            var2[8] = var7;
            var2[9] = var6;
            var2[10] = var5;
            var1 = function() {
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var16 = 5;
                var2 = var13[var16];
                var12 = undefined;
                var2 = var17.bind(var12)(var2);
                var4 = var2.Gesture;
                var3 = var4.Race;
                var2 = var13[var16];
                var2 = var17.bind(var12)(var2);
                var5 = var2.Gesture;
                var2 = var5.Tap;
                var6 = var2.bind(var5)();
                var5 = var6.enabled;
                var10 = _closure2_slot2;
                var2 = null;
                var2 = var2 != var10;
                var6 = var5.bind(var6)(var2);
                var5 = var6.maxDistance;
                var2 = _closure1_slot7;
                var6 = var5.bind(var6)(var2);
                var5 = var6.onStart;
                var2 = function x() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 8:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = {};
                var8['onTapGestureStart'] = var10;
                var2['__closure'] = var8;
                var8 = 9880530558215.0;
                var2['__workletHash'] = var8;
                var8 = _closure1_slot10;
                var2['__initData'] = var8;
                var2 = var5.bind(var6)(var2);
                var5 = var13[var16];
                var5 = var17.bind(var12)(var5);
                var6 = var5.Gesture;
                var5 = var6.Pan;
                var8 = var5.bind(var6)();
                var6 = var8.enabled;
                var5 = _closure2_slot3;
                var8 = var6.bind(var8)(var5);
                var6 = var8.manualActivation;
                var5 = true;
                var8 = var6.bind(var8)(var5);
                var6 = var8.maxPointers;
                var5 = 1;
                var8 = var6.bind(var8)(var5);
                var6 = var8.shouldCancelWhenOutside;
                var5 = false;
                var8 = var6.bind(var8)(var5);
                var6 = var8.onBegin;
                var5 = function V(arg1) {
                    var6 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = _closure2_slot6;
                    var2 = {'x': 0, 'y': 0};
                    var2 = var4.bind(var1)(var3, var2);
                    var4 = _closure2_slot10;
                    var3 = var4.set;
                    var2 = {};
                    var7 = var6.absoluteX;
                    var2['absoluteXStart'] = var7;
                    var7 = var6.absoluteY;
                    var2['absoluteYStart'] = var7;
                    var7 = false;
                    var2['active'] = var7;
                    var8 = var6.absoluteY;
                    var7 = _closure2_slot8;
                    var9 = var7.height;
                    var7 = _closure2_slot9;
                    var10 = var7.bottom;
                    var7 = 2;
                    var7 = var7 * var10;
                    var7 = var9 - var7;
                    var7 = var8 > var7;
                    var2['cancel'] = var7;
                    var7 = var6.absoluteY;
                    var6 = _closure2_slot8;
                    var8 = var6.height;
                    var6 = _closure2_slot9;
                    var6 = var6.bottom;
                    var6 = var8 - var6;
                    var6 = var7 > var6;
                    var2['gestureInBottomSafeArea'] = var6;
                    var5 = _closure2_slot5;
                    var2['requiresPop'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var14 = {};
                var11 = _closure1_slot1;
                var10 = 6;
                var15 = var13[var10];
                var15 = var11.bind(var12)(var15);
                var14['updateSharedValueIfChanged'] = var15;
                var15 = _closure2_slot6;
                var14['wrapperOffset'] = var15;
                var18 = _closure2_slot10;
                var14['initialGestureOffset'] = var18;
                var18 = _closure2_slot8;
                var14['windowDimensions'] = var18;
                var18 = _closure2_slot9;
                var14['safeArea'] = var18;
                var18 = _closure2_slot5;
                var14['swipeRequiresPop'] = var18;
                var5['__closure'] = var14;
                var14 = 14796057583737.0;
                var5['__workletHash'] = var14;
                var14 = _closure1_slot16;
                var5['__initData'] = var14;
                var8 = var6.bind(var8)(var5);
                var6 = var8.onTouchesMove;
                var5 = function C(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var7 = arg1;
                        var2 = arg2;
                        var3 = _closure1_slot4;
                        if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var4 = _closure2_slot10;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.gestureInBottomSafeArea;
                        if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 10:
                        var4 = _closure2_slot10;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.cancel;
                        if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 5:
                        var4 = var7.state;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 5;
                        var3 = var8[var3];
                        var8 = undefined;
                        var3 = var6.bind(var8)(var3);
                        var3 = var3.State;
                        var3 = var3.BEGAN;
                        if(!(var4 === var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var4 = _closure2_slot10;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.active;
                        if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 7;
                        var3 = var6[var3];
                        var6 = var4.bind(var8)(var3);
                        var4 = var6.calculateXYDiff;
                        var3 = _closure2_slot10;
                        var3 = var4.bind(var6)(var7, var3);
                        var7 = var3.absoluteX;
                        var6 = var3.absoluteY;
                        var11 = var3.absoluteMovement;
                        var9 = var3.isNotPullDownGesture;
                        var10 = var3.yDiff;
                        var4 = _closure2_slot0;
                        var3 = _closure1_slot6;
                        var3 = var3.PANEL;
                        if(!(var4 !== var3)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var4 = _closure2_slot0;
                        var3 = _closure1_slot6;
                        var3 = var3.PIP;
                        var4 = var4 === var3;
                        if(!var4) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var3 = _closure1_slot5;
                        var4 = var11 > var3;
case 19:
                        var3 = false;
                        if(!var4) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                        var11 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var4 = 4;
                        var4 = var14[var4];
                        var12 = var11.bind(var8)(var4);
                        var11 = var12.runOnJS;
                        var13 = _closure1_slot1;
                        var4 = 8;
                        var4 = var14[var4];
                        var4 = var13.bind(var8)(var4);
                        var4 = var11.bind(var12)(var4);
                        var4 = var4.bind(var8)();
                        var3 = true;
                        _fun0003_ip = 21; continue _fun0003;
case 17:
                        var4 = 0;
                        var4 = var10 < var4;
                        var3 = true;
                        if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 23:
                        var3 = false;
                        if(!var9) { _fun0003_ip = 21; continue _fun0003 }
case 24:
                        var9 = var2.fail;
                        var9 = var9.bind(var2)();
                        var3 = false;
case 21:
                        if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 25:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var1 = var4[var1];
                        var4 = var3.bind(var8)(var1);
                        var3 = _closure2_slot6;
                        var1 = {'x': 0, 'y': 0, 'gestureActive': true};
                        var1 = var4.bind(var8)(var3, var1);
                        var4 = _closure2_slot10;
                        var3 = var4.set;
                        var1 = {'absoluteXStart': null, 'absoluteYStart': null, 'active': true, 'cancel': false, 'gestureInBottomSafeArea': false};
                        var1['absoluteXStart'] = var7;
                        var1['absoluteYStart'] = var6;
                        var6 = _closure2_slot10;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        var5 = var5.requiresPop;
                        var1['requiresPop'] = var5;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.activate;
                        var1 = var1.bind(var2)();
                        _fun0003_ip = 14; continue _fun0003;
case 13:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
                        _fun0003_ip = 14; continue _fun0003;
case 12:
                        var1 = var2.activate;
                        var1 = var1.bind(var2)();
case 14:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = {};
                var18 = _closure1_slot4;
                var14['IS_IOS'] = var18;
                var18 = _closure2_slot10;
                var14['initialGestureOffset'] = var18;
                var16 = var13[var16];
                var16 = var17.bind(var12)(var16);
                var16 = var16.State;
                var14['State'] = var16;
                var16 = 7;
                var18 = var13[var16];
                var18 = var17.bind(var12)(var18);
                var18 = var18.calculateXYDiff;
                var14['calculateXYDiff'] = var18;
                var19 = _closure2_slot0;
                var14['mode'] = var19;
                var18 = _closure1_slot6;
                var14['MorphablePanelModes'] = var18;
                var20 = _closure1_slot5;
                var14['MIN_PAN_GESTURE_MOVE'] = var20;
                var20 = 4;
                var21 = var13[var20];
                var21 = var17.bind(var12)(var21);
                var21 = var21.runOnJS;
                var14['runOnJS'] = var21;
                var21 = 8;
                var21 = var13[var21];
                var21 = var11.bind(var12)(var21);
                var14['triggerIOSHaptic'] = var21;
                var21 = var13[var10];
                var21 = var11.bind(var12)(var21);
                var14['updateSharedValueIfChanged'] = var21;
                var14['wrapperOffset'] = var15;
                var5['__closure'] = var14;
                var14 = 12545486163726.0;
                var5['__workletHash'] = var14;
                var14 = _closure1_slot15;
                var5['__initData'] = var14;
                var8 = var6.bind(var8)(var5);
                var6 = var8.onChange;
                var5 = function H(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure2_slot0;
                        var4 = _closure1_slot6;
                        var4 = var4.PIP;
                        if(!(var5 === var4)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 6;
                        var4 = var6[var4];
                        var7 = undefined;
                        var6 = var5.bind(var7)(var4);
                        var5 = _closure2_slot6;
                        var4 = {};
                        var9 = _closure2_slot10;
                        var8 = var9.get;
                        var8 = var8.bind(var9)();
                        var9 = var8.absoluteXStart;
                        var8 = var3.absoluteX;
                        var8 = var9 - var8;
                        var9 = -1;
                        var8 = var9 * var8;
                        var4['x'] = var8;
                        var10 = _closure2_slot10;
                        var8 = var10.get;
                        var8 = var8.bind(var10)();
                        var10 = var8.absoluteYStart;
                        var8 = var3.absoluteY;
                        var8 = var10 - var8;
                        var8 = var9 * var8;
                        var4['y'] = var8;
                        var4 = var6.bind(var7)(var5, var4);
                        _fun0004_ip = 28; continue _fun0004;
case 26:
                        var4 = _closure2_slot9;
                        var5 = var4.top;
                        var6 = _closure2_slot10;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var4.absoluteYStart;
                        var3 = var3.absoluteY;
                        var4 = var4 - var3;
                        var3 = -1;
                        var3 = var3 * var4;
                        var6 = _closure2_slot10;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var4.requiresPop;
                        var4 = !var4;
                        if(!var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var4 = var3 <= var5;
case 29:
                        if(!var4) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var6 = _closure2_slot10;
                        var5 = var6.set;
                        var4 = {};
                        var8 = _closure2_slot10;
                        var7 = var8.get;
                        var13 = var7.bind(var8)();
                        var14 = var4;
                        var7 = copyDataProperties(var14, var13);
                        var8 = true;
                        var7 = 'requiresPop';
                        var4[var7] = var8;
                        var4 = var5.bind(var6)(var4);
case 31:
                        var5 = _closure2_slot10;
                        var4 = var5.get;
                        var4 = var4.bind(var5)();
                        var4 = var4.requiresPop;
                        var5 = var3;
                        if(!var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var4 = global;
                        var7 = var4.Math;
                        var6 = var7.max;
                        var4 = 0;
                        var4 = var6.bind(var7)(var3, var4);
                        var6 = _closure1_slot8;
                        if(!(!(var4 <= var6))) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                        var8 = _closure2_slot10;
                        var7 = var8.set;
                        var6 = {};
                        var10 = _closure2_slot10;
                        var9 = var10.get;
                        var13 = var9.bind(var10)();
                        var14 = var6;
                        var9 = copyDataProperties(var14, var13);
                        var10 = false;
                        var9 = 'requiresPop';
                        var6[var9] = var10;
                        var6 = var7.bind(var8)(var6);
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 4;
                        var6 = var10[var6];
                        var8 = undefined;
                        var12 = var9.bind(var8)(var6);
                        var11 = var12.runOnJS;
                        var6 = 9;
                        var7 = var10[var6];
                        var7 = var9.bind(var8)(var7);
                        var7 = var7.triggerHapticFeedback;
                        var7 = var11.bind(var12)(var7);
                        var6 = var10[var6];
                        var6 = var9.bind(var8)(var6);
                        var6 = var6.HapticFeedbackTypes;
                        var6 = var6.IMPACT_MEDIUM;
                        var6 = var7.bind(var8)(var6);
                        var5 = var3;
                        _fun0004_ip = 33; continue _fun0004;
case 35:
                        var3 = _closure1_slot9;
                        var3 = var4 * var3;
                        var5 = var4 - var3;
case 33:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 6;
                        var2 = var4[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = _closure2_slot6;
                        var1 = {};
                        var1['y'] = var5;
                        var5 = 0;
                        var1['x'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = {};
                var14['mode'] = var19;
                var14['MorphablePanelModes'] = var18;
                var21 = _closure2_slot9;
                var14['safeArea'] = var21;
                var21 = _closure2_slot10;
                var14['initialGestureOffset'] = var21;
                var21 = _closure1_slot9;
                var14['POP_RESISTANCE'] = var21;
                var21 = _closure1_slot8;
                var14['PIP_POP_HEIGHT'] = var21;
                var20 = var13[var20];
                var20 = var17.bind(var12)(var20);
                var20 = var20.runOnJS;
                var14['runOnJS'] = var20;
                var20 = 9;
                var21 = var13[var20];
                var21 = var17.bind(var12)(var21);
                var21 = var21.triggerHapticFeedback;
                var14['triggerHapticFeedback'] = var21;
                var20 = var13[var20];
                var20 = var17.bind(var12)(var20);
                var20 = var20.HapticFeedbackTypes;
                var14['HapticFeedbackTypes'] = var20;
                var20 = var13[var10];
                var20 = var11.bind(var12)(var20);
                var14['updateSharedValueIfChanged'] = var20;
                var14['wrapperOffset'] = var15;
                var5['__closure'] = var14;
                var14 = 6076208535373.0;
                var5['__workletHash'] = var14;
                var14 = _closure1_slot14;
                var5['__initData'] = var14;
                var8 = var6.bind(var8)(var5);
                var6 = var8.onTouchesCancelled;
                var5 = function D() {
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var2 = var6[var3];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var2);
                    var8 = _closure2_slot10;
                    var7 = {};
                    var5 = false;
                    var7['active'] = var5;
                    var7 = var9.bind(var1)(var8, var7);
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = _closure2_slot6;
                    var2 = {};
                    var2['gestureActive'] = var5;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var14 = {};
                var20 = var13[var10];
                var20 = var11.bind(var12)(var20);
                var14['updateSharedValueIfChanged'] = var20;
                var20 = _closure2_slot10;
                var14['initialGestureOffset'] = var20;
                var14['wrapperOffset'] = var15;
                var5['__closure'] = var14;
                var14 = 14566382353702.0;
                var5['__workletHash'] = var14;
                var14 = _closure1_slot13;
                var5['__initData'] = var14;
                var8 = var6.bind(var8)(var5);
                var6 = var8.onEnd;
                var5 = function X(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure2_slot10;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.cancel;
                        if(var3) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                        var11 = var2.velocityX;
                        var10 = var2.velocityY;
                        var9 = var2.absoluteX;
                        var8 = var2.absoluteY;
                        var4 = _closure2_slot0;
                        var3 = _closure1_slot6;
                        var3 = var3.PIP;
                        if(!(var4 !== var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                        var4 = _closure2_slot0;
                        var3 = _closure1_slot6;
                        var3 = var3.PANEL;
                        if(!(var4 === var3)) { _fun0005_ip = 41; continue _fun0005 }
case 6:
                        var7 = 0;
                        if(!(var10 > var7)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                        var4 = _closure2_slot10;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.requiresPop;
                        if(var3) { _fun0005_ip = 41; continue _fun0005 }
case 43:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 6;
                        var3 = var5[var3];
                        var5 = undefined;
                        var6 = var4.bind(var5)(var3);
                        var4 = _closure2_slot6;
                        var3 = {};
                        var3['x'] = var7;
                        var7 = _closure2_slot8;
                        var7 = var7.height;
                        var3['y'] = var7;
                        var3 = var6.bind(var5)(var4, var3);
                        var4 = _closure2_slot1;
                        var3 = null;
                        var3 = var3 == var4;
                        if(var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                        var4 = _closure2_slot1;
                        var3 = var4.bind(var5)();
case 44:
                        var3 = undefined;
                        return var3;
case 39:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var6 = undefined;
                        var7 = var4.bind(var6)(var3);
                        var4 = var7.calculatePIPPositionFromVelocity;
                        var3 = {};
                        var3['velocityX'] = var11;
                        var3['velocityY'] = var10;
                        var3['absoluteX'] = var9;
                        var3['absoluteY'] = var8;
                        var8 = _closure2_slot8;
                        var3['windowDimensions'] = var8;
                        var8 = _closure2_slot9;
                        var3['safeArea'] = var8;
                        var8 = _closure2_slot7;
                        var3['disableHorizontalSafeAreas'] = var8;
                        var3 = var4.bind(var7)(var3);
                        var8 = var3.pipX;
                        var7 = var3.pipY;
                        var4 = _closure1_slot1;
                        var3 = 6;
                        var9 = var5[var3];
                        var11 = var4.bind(var6)(var9);
                        var10 = _closure2_slot6;
                        var9 = {};
                        var12 = false;
                        var9['gestureActive'] = var12;
                        var9 = var11.bind(var6)(var10, var9);
                        var3 = var5[var3];
                        var5 = var4.bind(var6)(var3);
                        var4 = _closure2_slot4;
                        var3 = {};
                        var3['x'] = var8;
                        var3['y'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
case 41:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 6;
                        var2 = var4[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = _closure2_slot6;
                        var1 = {'x': 0, 'y': 0, 'gestureActive': false};
                        var1 = var3.bind(var4)(var2, var1);
case 37:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = {};
                var20 = _closure2_slot10;
                var14['initialGestureOffset'] = var20;
                var14['mode'] = var19;
                var14['MorphablePanelModes'] = var18;
                var16 = var13[var16];
                var16 = var17.bind(var12)(var16);
                var16 = var16.calculatePIPPositionFromVelocity;
                var14['calculatePIPPositionFromVelocity'] = var16;
                var16 = _closure2_slot8;
                var14['windowDimensions'] = var16;
                var16 = _closure2_slot9;
                var14['safeArea'] = var16;
                var16 = _closure2_slot7;
                var14['disableHorizontalSafeAreas'] = var16;
                var16 = var13[var10];
                var16 = var11.bind(var12)(var16);
                var14['updateSharedValueIfChanged'] = var16;
                var14['wrapperOffset'] = var15;
                var15 = _closure2_slot4;
                var14['pipState'] = var15;
                var15 = _closure2_slot1;
                var14['onPanMinimizeGestureEnd'] = var15;
                var5['__closure'] = var14;
                var14 = 2406462688275.0;
                var5['__workletHash'] = var14;
                var14 = _closure1_slot12;
                var5['__initData'] = var14;
                var6 = var6.bind(var8)(var5);
                var5 = var6.onFinalize;
                var1 = function t() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = _closure2_slot10;
                    var2 = {'active': false, 'cancel': false};
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var8 = {};
                var10 = var13[var10];
                var10 = var11.bind(var12)(var10);
                var8['updateSharedValueIfChanged'] = var10;
                var9 = _closure2_slot10;
                var8['initialGestureOffset'] = var9;
                var1['__closure'] = var8;
                var8 = 11153815903321.0;
                var1['__workletHash'] = var8;
                var7 = _closure1_slot11;
                var1['__initData'] = var7;
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['MorphablePanelModes'] = var2;
    return var1;
})();