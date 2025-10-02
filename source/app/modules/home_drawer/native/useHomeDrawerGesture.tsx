// app/modules/home_drawer/native/useHomeDrawerGesture.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var12;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var10 = true;
    var2['value'] = var10;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var17 = 0;
    var2 = var12[var17];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var12[var2];
    var2 = metroImportAll;
    var13 = var2.bind(var1)(var5);
    var _closure1_slot4 = var13;
    var2 = 2;
    var2 = var12[var2];
    var2 = var11.bind(var1)(var2);
    var2 = var2.Dimensions;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var12[var2];
    var2 = var11.bind(var1)(var2);
    var2 = var2.DM_WIDTH;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var12[var2];
    var5 = var11.bind(var1)(var2);
    var2 = var5.isIpadOS;
    var2 = var2.bind(var5)();
    var _closure1_slot7 = var2;
    var9 = {'mass': 0.3, 'damping': 30, 'stiffness': 400};
    var _closure1_slot8 = var9;
    var8 = {'mass': 0.4, 'damping': 100, 'stiffness': 250};
    var _closure1_slot9 = var8;
    var7 = {'mass': 1, 'damping': 20, 'stiffness': 150};
    var6 = {};
    var22 = var6;
    var21 = var7;
    var2 = copyDataProperties(var22, var21);
    var5 = {};
    var22 = var5;
    var21 = var7;
    var2 = copyDataProperties(var22, var21);
    var2 = 'overshootClamping';
    var5[var2] = var10;
    var2 = {};
    var10 = "function useHomeDrawerGestureTsx1(){const{safeArea,withSpring,panelX,gestureState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{flex:1,marginTop:safeArea.get().top,transform:[{translateX:withSpring(panelX.get(),gestureState.get().active?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always')}]};}";
    var2['code'] = var10;
    var _closure1_slot10 = var2;
    var2 = {};
    var10 = 'function useHomeDrawerGestureTsx2(){const{gestureState}=this.__closure;return gestureState.get().active;}';
    var2['code'] = var10;
    var _closure1_slot11 = var2;
    var2 = {};
    var10 = 'function useHomeDrawerGestureTsx3(){const{windowDimensions,safeArea,DM_WIDTH,PEEK_SIZE}=this.__closure;return windowDimensions.get().width-safeArea.get().left-safeArea.get().right-DM_WIDTH-PEEK_SIZE;}';
    var2['code'] = var10;
    var _closure1_slot12 = var2;
    var2 = {};
    var10 = 'function useHomeDrawerGestureTsx4(){const{gestureState}=this.__closure;gestureState.set({active:false,initialX:0,initialY:0,panelX:0,requiresPop:true});}';
    var2['code'] = var10;
    var _closure1_slot13 = var2;
    var2 = {};
    var10 = "function useHomeDrawerGestureTsx5(event){const{getMaxX,DM_WIDTH,gestureState,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,drawerState,panelX}=this.__closure;const maxX=getMaxX();if(event.velocityX>=-100&&event.absoluteX>DM_WIDTH){if(gestureState.get().requiresPop&&event.velocityX>300){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);drawerState.set('open');panelX.set(maxX);}else if(gestureState.get().requiresPop){panelX.set(0);drawerState.set('closed');}else{drawerState.set('open');panelX.set(maxX);}}else{drawerState.set('closed');panelX.set(0);}}";
    var2['code'] = var10;
    var _closure1_slot14 = var2;
    var2 = {};
    var10 = "function useHomeDrawerGestureTsx6(event){const{gestureState,POP_RESISTANCE,PIP_POP_DISTANCE,panelX,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,drawerState,DM_WIDTH}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;if(gestureState.get().requiresPop){const distance=Math.max(newXOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_DISTANCE){panelX.set(distance-resistance);}else{runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);gestureState.set({...gestureState.get(),requiresPop:false});drawerState.set('open');panelX.set(Math.max(event.absoluteX-DM_WIDTH,0));}}else{panelX.set(Math.max(event.absoluteX-DM_WIDTH,0));}}";
    var2['code'] = var10;
    var _closure1_slot15 = var2;
    var2 = {};
    var10 = 'function useHomeDrawerGestureTsx7(event,manager){const{gestureState,panelX}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);if(absoluteYDiff>absoluteXDiff||panelX.get()===0&&touchX<gestureState.get().initialX||panelX.get()>0&&touchX>gestureState.get().initialX){manager.fail();}if(panelX.get()===0&&touchX>gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}else if(touchX<gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}}';
    var2['code'] = var10;
    var _closure1_slot16 = var2;
    var2 = {};
    var10 = 'function useHomeDrawerGestureTsx8(event){const{gestureState,panelX}=this.__closure;gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get(),requiresPop:panelX.get()===0});}';
    var2['code'] = var10;
    var _closure1_slot17 = var2;
    var10 = var13.createContext;
    var2 = {};
    var14 = 12;
    var15 = var12[var14];
    var18 = var11.bind(var1)(var15);
    var16 = var18.createFakeSharedValue;
    var15 = 'closed';
    var15 = var16.bind(var18)(var15);
    var2['drawerState'] = var15;
    var15 = var12[var14];
    var19 = var11.bind(var1)(var15);
    var16 = var19.createFakeSharedValue;
    var18 = false;
    var15 = {'active': false, 'initialX': 0, 'initialY': 0, 'panelX': 0, 'requiresPop': false};
    var15 = var16.bind(var19)(var15);
    var2['gestureState'] = var15;
    var15 = var12[var14];
    var16 = var11.bind(var1)(var15);
    var15 = var16.createFakeSharedValue;
    var15 = var15.bind(var16)(var18);
    var2['isGestureActive'] = var15;
    var15 = var12[var14];
    var16 = var11.bind(var1)(var15);
    var15 = var16.createFakeSharedValue;
    var15 = var15.bind(var16)(var17);
    var2['panelX'] = var15;
    var15 = var12[var14];
    var18 = var11.bind(var1)(var15);
    var16 = var18.createFakeSharedValue;
    var15 = 13;
    var15 = var12[var15];
    var15 = var11.bind(var1)(var15);
    var15 = var15.EMPTY_SAFE_AREA_INSETS;
    var15 = var16.bind(var18)(var15);
    var2['safeArea'] = var15;
    var15 = function setDrawerState() {
        var1 = undefined;
        return var1;
    };
    var2['setDrawerState'] = var15;
    var15 = var12[var14];
    var16 = var11.bind(var1)(var15);
    var15 = var16.createFakeSharedValue;
    var15 = var15.bind(var16)(var17);
    var2['transitionProgress'] = var15;
    var14 = var12[var14];
    var16 = var11.bind(var1)(var14);
    var15 = var16.createFakeSharedValue;
    var14 = {'width': 0, 'height': 0};
    var14 = var15.bind(var16)(var14);
    var2['windowDimensions'] = var14;
    var2 = var10.bind(var13)(var2);
    var10 = 14;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/home_drawer/native/useHomeDrawerGesture.tsx';
    var10 = var11.bind(var12)(var10);
    var10 = 16;
    var3['HOME_GESTURE_LABEL_HIDDEN_TRANSLATE'] = var10;
    var10 = 8;
    var3['PEEK_SIZE'] = var10;
    var3['HOME_GESTURE_DRAG_PHYSICS'] = var9;
    var3['HOME_DRAWER_FLING_PHYSICS'] = var8;
    var3['BASE_PHYSICS'] = var7;
    var7 = {'mass': 1, 'damping': 20, 'stiffness': 500};
    var3['POP_PHYSICS'] = var7;
    var3['transitionSpringPhysics'] = var6;
    var3['transitionSpringPhysicsClamped'] = var5;
    var4 = function useHomeGesture() {
        var4 = _closure1_slot1;
        var9 = _closure1_slot2;
        var16 = 8;
        var3 = var9[var16];
        var6 = undefined;
        var4 = var4.bind(var6)(var3);
        var3 = 'nav_experiment_server_drawer_enabled';
        var5 = var4.bind(var6)(var3);
        var _closure2_slot0 = var5;
        var3 = function useSharedWindowDimensions() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot7;
                var6 = _closure1_slot5;
                var5 = var6.get;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = 'screen';
                var2 = var5.bind(var6)(var2);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var4 = 'window';
                var2 = var5.bind(var6)(var4);
case 4:
                var10 = var2.width;
                var9 = var2.height;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var2 = var2.bind(var5)();
                var4 = _closure1_slot0;
                var3 = 6;
                var3 = var7[var3];
                var8 = var4.bind(var5)(var3);
                var4 = var8.useSharedValue;
                var3 = {};
                var3['width'] = var10;
                var3['height'] = var9;
                var3 = var4.bind(var8)(var3);
                var _closure3_slot0 = var3;
                var4 = 7;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure1_slot5;
                        var2 = var3.get;
                        var4 = _closure1_slot7;
                        var1 = 'screen';
                        if(!var4) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var1 = 'window';
case 5:
                        var1 = var2.bind(var3)(var1);
                        var5 = var1.width;
                        var4 = var1.height;
                        var3 = _closure3_slot0;
                        var2 = var3.set;
                        var1 = {};
                        var1['width'] = var5;
                        var1['height'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var1);
                var1 = {};
                var1['windowDimensions'] = var3;
                var1['safeArea'] = var2;
                return var1;
            }
        };
        var3 = var3.bind(var6)();
        var15 = var3.windowDimensions;
        var _closure2_slot1 = var15;
        var14 = var3.safeArea;
        var _closure2_slot2 = var14;
        var8 = _closure1_slot0;
        var7 = 6;
        var3 = var9[var7];
        var10 = var8.bind(var6)(var3);
        var4 = var10.useSharedValue;
        var3 = 0;
        var4 = var4.bind(var10)(var3);
        var _closure2_slot3 = var4;
        var4 = var9[var7];
        var10 = var8.bind(var6)(var4);
        var4 = var10.useSharedValue;
        var12 = var4.bind(var10)(var3);
        var _closure2_slot4 = var12;
        var4 = var9[var7];
        var11 = var8.bind(var6)(var4);
        var10 = var11.useSharedValue;
        var4 = {'active': false, 'initialX': 0, 'initialY': 0, 'panelX': 0, 'requiresPop': true};
        var13 = var10.bind(var11)(var4);
        var _closure2_slot5 = var13;
        var4 = var9[var7];
        var11 = var8.bind(var6)(var4);
        var10 = var11.useAnimatedStyle;
        var4 = function _() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = {};
                var2 = 1;
                var1['flex'] = var2;
                var3 = _closure2_slot2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var2 = var2.top;
                var1['marginTop'] = var2;
                var3 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 9;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.withSpring;
                var8 = _closure2_slot4;
                var5 = var8.get;
                var5 = var5.bind(var8)();
                var8 = _closure2_slot5;
                var4 = var8.get;
                var4 = var4.bind(var8)();
                var4 = var4.active;
                if(var4) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var4 = _closure1_slot9;
                _fun0003_ip = 9; continue _fun0003;
case 7:
                var4 = _closure1_slot8;
case 9:
                var2 = 'animate-always';
                var2 = var6.bind(var7)(var5, var4, var2);
                var3['translateX'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            }
        };
        var17 = {};
        var17['safeArea'] = var14;
        var18 = 9;
        var18 = var9[var18];
        var18 = var8.bind(var6)(var18);
        var18 = var18.withSpring;
        var17['withSpring'] = var18;
        var17['panelX'] = var12;
        var17['gestureState'] = var13;
        var18 = _closure1_slot8;
        var17['HOME_GESTURE_DRAG_PHYSICS'] = var18;
        var18 = _closure1_slot9;
        var17['HOME_DRAWER_FLING_PHYSICS'] = var18;
        var4['__closure'] = var17;
        var17 = 12952951293291.0;
        var4['__workletHash'] = var17;
        var17 = _closure1_slot10;
        var4['__initData'] = var17;
        var4 = var10.bind(var11)(var4);
        var10 = var9[var7];
        var17 = var8.bind(var6)(var10);
        var11 = var17.useSharedValue;
        var10 = 'closed';
        var11 = var11.bind(var17)(var10);
        var _closure2_slot6 = var11;
        var7 = var9[var7];
        var9 = var8.bind(var6)(var7);
        var8 = var9.useDerivedValue;
        var7 = function S() {
            var2 = _closure2_slot5;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var1 = var1.active;
            return var1;
        };
        var10 = {};
        var10['gestureState'] = var13;
        var7['__closure'] = var10;
        var10 = 12647153954789.0;
        var7['__workletHash'] = var10;
        var10 = _closure1_slot11;
        var7['__initData'] = var10;
        var7 = var8.bind(var9)(var7);
        var _closure2_slot7 = var7;
        var8 = _closure1_slot4;
        var10 = var8.useCallback;
        var9 = function p() {
            var3 = _closure2_slot1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var2 = var2.width;
            var3 = _closure2_slot2;
            var1 = var3.get;
            var1 = var1.bind(var3)();
            var1 = var1.left;
            var2 = var2 - var1;
            var1 = var3.get;
            var1 = var1.bind(var3)();
            var1 = var1.right;
            var2 = var2 - var1;
            var1 = _closure1_slot6;
            var2 = var2 - var1;
            var1 = 8;
            var1 = var2 - var1;
            return var1;
        };
        var7 = {};
        var7['windowDimensions'] = var15;
        var7['safeArea'] = var14;
        var17 = _closure1_slot6;
        var7['DM_WIDTH'] = var17;
        var7['PEEK_SIZE'] = var16;
        var9['__closure'] = var7;
        var7 = 10048482008799.0;
        var9['__workletHash'] = var7;
        var7 = _closure1_slot12;
        var9['__initData'] = var7;
        var7 = new Array(2);
        var7[0] = var15;
        var7[1] = var14;
        var10 = var10.bind(var8)(var9, var7);
        var _closure2_slot8 = var10;
        var9 = var8.useMemo;
        var7 = new Array(5);
        var7[0] = var13;
        var7[1] = var12;
        var7[2] = var11;
        var7[3] = var10;
        var7[4] = var5;
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure2_slot0;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 10;
                var3 = var14[var3];
                var12 = undefined;
                var3 = var13.bind(var12)(var3);
                var4 = var3.Gesture;
                var3 = var4.Pan;
                var6 = var3.bind(var4)();
                if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                var3 = var6.enabled;
                var1 = false;
                var1 = var3.bind(var6)(var1);
                _fun0004_ip = 12; continue _fun0004;
case 10:
                var4 = var6.manualActivation;
                var3 = true;
                var6 = var4.bind(var6)(var3);
                var4 = var6.shouldCancelWhenOutside;
                var3 = false;
                var6 = var4.bind(var6)(var3);
                var4 = var6.maxPointers;
                var3 = 1;
                var6 = var4.bind(var6)(var3);
                var4 = var6.onBegin;
                var3 = function c(arg1) {
                    var5 = arg1;
                    var3 = _closure2_slot5;
                    var2 = var3.set;
                    var1 = {};
                    var6 = false;
                    var1['active'] = var6;
                    var6 = var5.absoluteX;
                    var1['initialX'] = var6;
                    var5 = var5.absoluteY;
                    var1['initialY'] = var5;
                    var5 = _closure2_slot4;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var1['panelX'] = var4;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = 0;
                    var4 = var4 === var5;
                    var1['requiresPop'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var8 = {};
                var7 = _closure2_slot5;
                var8['gestureState'] = var7;
                var9 = _closure2_slot4;
                var8['panelX'] = var9;
                var3['__closure'] = var8;
                var8 = 2003601972386.0;
                var3['__workletHash'] = var8;
                var8 = _closure1_slot17;
                var3['__initData'] = var8;
                var6 = var4.bind(var6)(var3);
                var4 = var6.onTouchesMove;
                var3 = function o(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var4 = _closure2_slot5;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.active;
                        if(var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                        var4 = var1.changedTouches;
                        var3 = 0;
                        var4 = var4[var3];
                        var7 = var4.absoluteX;
                        var1 = var1.changedTouches;
                        var1 = var1[var3];
                        var9 = var1.absoluteY;
                        var1 = global;
                        var8 = var1.Math;
                        var6 = var8.abs;
                        var10 = _closure2_slot5;
                        var4 = var10.get;
                        var4 = var4.bind(var10)();
                        var4 = var4.initialX;
                        var4 = var7 - var4;
                        var4 = var6.bind(var8)(var4);
                        var8 = var1.Math;
                        var6 = var8.abs;
                        var1 = var10.get;
                        var1 = var1.bind(var10)();
                        var1 = var1.initialY;
                        var1 = var9 - var1;
                        var1 = var6.bind(var8)(var1);
                        var1 = var1 > var4;
                        if(var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                        var6 = _closure2_slot4;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var3 === var4;
                        if(!var4) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                        var8 = _closure2_slot5;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var6.initialX;
                        var4 = var7 < var6;
case 17:
                        var1 = var4;
case 15:
                        if(var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                        var6 = _closure2_slot4;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var4 > var3;
                        if(!var4) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                        var8 = _closure2_slot5;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var6.initialX;
                        var4 = var7 > var6;
case 21:
                        var1 = var4;
case 19:
                        if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
case 23:
                        var4 = _closure2_slot4;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = var3 === var1;
                        if(!var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        var4 = _closure2_slot5;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.initialX;
                        var1 = var7 > var3;
case 25:
                        if(var1) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                        var4 = _closure2_slot5;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.initialX;
                        var1 = var7 < var3;
case 27:
                        if(!var1) { _fun0005_ip = 13; continue _fun0005 }
case 29:
                        var4 = _closure2_slot5;
                        var3 = var4.set;
                        var1 = {};
                        var6 = var4.get;
                        var11 = var6.bind(var4)();
                        var12 = var1;
                        var6 = copyDataProperties(var12, var11);
                        var8 = true;
                        var6 = 'active';
                        var1[var6] = var8;
                        var6 = 'initialX';
                        var1[var6] = var7;
                        var6 = _closure2_slot4;
                        var5 = var6.get;
                        var6 = var5.bind(var6)();
                        var5 = 'panelX';
                        var1[var5] = var6;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.activate;
                        var1 = var1.bind(var2)();
case 13:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = {};
                var8['gestureState'] = var7;
                var8['panelX'] = var9;
                var3['__closure'] = var8;
                var8 = 16181073245386.0;
                var3['__workletHash'] = var8;
                var8 = _closure1_slot16;
                var3['__initData'] = var8;
                var6 = var4.bind(var6)(var3);
                var4 = var6.onChange;
                var3 = function n(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var9 = arg1;
                        var3 = _closure2_slot5;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.active;
                        if(!var2) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                        var4 = var9.absoluteX;
                        var3 = _closure2_slot5;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.initialX;
                        var4 = var4 - var2;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.requiresPop;
                        var6 = global;
                        if(var2) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                        var5 = _closure2_slot4;
                        var3 = var5.set;
                        var10 = var6.Math;
                        var8 = var10.max;
                        var7 = var9.absoluteX;
                        var2 = _closure1_slot6;
                        var7 = var7 - var2;
                        var2 = 0;
                        var2 = var8.bind(var10)(var7, var2);
                        var2 = var3.bind(var5)(var2);
                        _fun0006_ip = 30; continue _fun0006;
case 32:
                        var3 = var6.Math;
                        var2 = var3.max;
                        var8 = 0;
                        var4 = var2.bind(var3)(var4, var8);
                        var2 = 70;
                        if(!(!(var4 <= var2))) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 6;
                        var3 = var11[var3];
                        var7 = undefined;
                        var13 = var10.bind(var7)(var3);
                        var12 = var13.runOnJS;
                        var3 = 11;
                        var5 = var11[var3];
                        var5 = var10.bind(var7)(var5);
                        var5 = var5.triggerHapticFeedback;
                        var5 = var12.bind(var13)(var5);
                        var3 = var11[var3];
                        var3 = var10.bind(var7)(var3);
                        var3 = var3.HapticFeedbackTypes;
                        var3 = var3.IMPACT_MEDIUM;
                        var3 = var5.bind(var7)(var3);
                        var7 = _closure2_slot5;
                        var5 = var7.set;
                        var3 = {};
                        var10 = var7.get;
                        var14 = var10.bind(var7)();
                        var15 = var3;
                        var10 = copyDataProperties(var15, var14);
                        var11 = false;
                        var10 = 'requiresPop';
                        var3[var10] = var11;
                        var3 = var5.bind(var7)(var3);
                        var7 = _closure2_slot6;
                        var5 = var7.set;
                        var3 = 'open';
                        var3 = var5.bind(var7)(var3);
                        var5 = _closure2_slot4;
                        var3 = var5.set;
                        var7 = var6.Math;
                        var6 = var7.max;
                        var9 = var9.absoluteX;
                        var2 = _closure1_slot6;
                        var2 = var9 - var2;
                        var2 = var6.bind(var7)(var2, var8);
                        var2 = var3.bind(var5)(var2);
                        _fun0006_ip = 30; continue _fun0006;
case 34:
                        var3 = _closure2_slot4;
                        var2 = var3.set;
                        var1 = 0.7;
                        var1 = var1 * var4;
                        var1 = var4 - var1;
                        var1 = var2.bind(var3)(var1);
case 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = {'gestureState': null, 'POP_RESISTANCE': 0.7, 'PIP_POP_DISTANCE': 70};
                var8['gestureState'] = var7;
                var8['panelX'] = var9;
                var15 = 6;
                var10 = var14[var15];
                var10 = var13.bind(var12)(var10);
                var10 = var10.runOnJS;
                var8['runOnJS'] = var10;
                var11 = 11;
                var10 = var14[var11];
                var10 = var13.bind(var12)(var10);
                var10 = var10.triggerHapticFeedback;
                var8['triggerHapticFeedback'] = var10;
                var10 = var14[var11];
                var10 = var13.bind(var12)(var10);
                var10 = var10.HapticFeedbackTypes;
                var8['HapticFeedbackTypes'] = var10;
                var10 = _closure2_slot6;
                var8['drawerState'] = var10;
                var16 = _closure1_slot6;
                var8['DM_WIDTH'] = var16;
                var3['__closure'] = var8;
                var8 = 12295486253259.0;
                var3['__workletHash'] = var8;
                var8 = _closure1_slot15;
                var3['__initData'] = var8;
                var6 = var4.bind(var6)(var3);
                var4 = var6.onEnd;
                var3 = function s(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var5 = arg1;
                        var3 = _closure2_slot8;
                        var1 = undefined;
                        var4 = var3.bind(var1)();
                        var6 = var5.velocityX;
                        var3 = -100;
                        if(!(var6 >= var3)) { _fun0007_ip = 36; continue _fun0007 }
case 2:
                        var7 = var5.absoluteX;
                        var6 = _closure1_slot6;
                        if(!(!(var7 > var6))) { _fun0007_ip = 37; continue _fun0007 }
case 36:
                        var8 = _closure2_slot6;
                        var7 = var8.set;
                        var6 = 'closed';
                        var6 = var7.bind(var8)(var6);
                        var8 = _closure2_slot4;
                        var7 = var8.set;
                        var6 = 0;
                        var6 = var7.bind(var8)(var6);
                        _fun0007_ip = 38; continue _fun0007;
case 37:
                        var7 = _closure2_slot5;
                        var6 = var7.get;
                        var6 = var6.bind(var7)();
                        var6 = var6.requiresPop;
                        if(!var6) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                        var6 = var5.velocityX;
                        var5 = 300;
                        if(!(!(var6 > var5))) { _fun0007_ip = 41; continue _fun0007 }
case 39:
                        var6 = _closure2_slot5;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        var5 = var5.requiresPop;
                        if(var5) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                        var7 = _closure2_slot6;
                        var6 = var7.set;
                        var5 = 'open';
                        var5 = var6.bind(var7)(var5);
                        var6 = _closure2_slot4;
                        var5 = var6.set;
                        var5 = var5.bind(var6)(var4);
                        _fun0007_ip = 38; continue _fun0007;
case 42:
                        var7 = _closure2_slot4;
                        var6 = var7.set;
                        var5 = 0;
                        var5 = var6.bind(var7)(var5);
                        var7 = _closure2_slot6;
                        var6 = var7.set;
                        var5 = 'closed';
                        var5 = var6.bind(var7)(var5);
                        _fun0007_ip = 38; continue _fun0007;
case 41:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 6;
                        var3 = var7[var3];
                        var9 = var6.bind(var1)(var3);
                        var8 = var9.runOnJS;
                        var3 = 11;
                        var5 = var7[var3];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.triggerHapticFeedback;
                        var5 = var8.bind(var9)(var5);
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.HapticFeedbackTypes;
                        var3 = var3.IMPACT_MEDIUM;
                        var3 = var5.bind(var1)(var3);
                        var6 = _closure2_slot6;
                        var5 = var6.set;
                        var3 = 'open';
                        var3 = var5.bind(var6)(var3);
                        var3 = _closure2_slot4;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4);
case 38:
                        return var1;
                    }
                };
                var8 = {};
                var17 = _closure2_slot8;
                var8['getMaxX'] = var17;
                var8['DM_WIDTH'] = var16;
                var8['gestureState'] = var7;
                var15 = var14[var15];
                var15 = var13.bind(var12)(var15);
                var15 = var15.runOnJS;
                var8['runOnJS'] = var15;
                var15 = var14[var11];
                var15 = var13.bind(var12)(var15);
                var15 = var15.triggerHapticFeedback;
                var8['triggerHapticFeedback'] = var15;
                var11 = var14[var11];
                var11 = var13.bind(var12)(var11);
                var11 = var11.HapticFeedbackTypes;
                var8['HapticFeedbackTypes'] = var11;
                var8['drawerState'] = var10;
                var8['panelX'] = var9;
                var3['__closure'] = var8;
                var8 = 10350453009723.0;
                var3['__workletHash'] = var8;
                var8 = _closure1_slot14;
                var3['__initData'] = var8;
                var4 = var4.bind(var6)(var3);
                var3 = var4.onFinalize;
                var2 = function t() {
                    var3 = _closure2_slot5;
                    var2 = var3.set;
                    var1 = {'active': false, 'initialX': 0, 'initialY': 0, 'panelX': 0, 'requiresPop': true};
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = {};
                var6['gestureState'] = var7;
                var2['__closure'] = var6;
                var6 = 15583564863210.0;
                var2['__workletHash'] = var6;
                var5 = _closure1_slot13;
                var2['__initData'] = var5;
                var1 = var3.bind(var4)(var2);
case 12:
                return var1;
            }
        };
        var7 = var9.bind(var8)(var5, var7);
        var5 = var8.useState;
        var1 = function() {
            var1 = {};
            var3 = _closure2_slot6;
            var1['drawerState'] = var3;
            var3 = _closure2_slot5;
            var1['gestureState'] = var3;
            var3 = _closure2_slot7;
            var1['isGestureActive'] = var3;
            var3 = _closure2_slot4;
            var1['panelX'] = var3;
            var3 = _closure2_slot2;
            var1['safeArea'] = var3;
            var3 = function setDrawerState(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot6;
                    var2 = var4.set;
                    var2 = var2.bind(var4)(var3);
                    var2 = 'open';
                    if(!(var2 !== var3)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    _fun0008_ip = 10; continue _fun0008;
case 44:
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var4 = _closure2_slot8;
                    var1 = undefined;
                    var1 = var4.bind(var1)();
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['setDrawerState'] = var3;
            var3 = _closure2_slot3;
            var1['transitionProgress'] = var3;
            var2 = _closure2_slot1;
            var1['windowDimensions'] = var2;
            return var1;
        };
        var5 = var5.bind(var8)(var1);
        var1 = {};
        var1['gesture'] = var7;
        var1['panelStyles'] = var4;
        var4 = _closure1_slot3;
        var2 = 1;
        var2 = var4.bind(var6)(var5, var2);
        var2 = var2[var3];
        var1['homeDrawerState'] = var2;
        return var1;
    };
    var3['useHomeGesture'] = var4;
    var3['HomeDrawerStateContext'] = var2;
    return var1;
})();