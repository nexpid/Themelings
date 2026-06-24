// app/modules/home_drawer/native/useHomeDrawerGesture.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var2);
    var12 = 0;
    var2 = var8[var12];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var6 = var8[var2];
    var2 = metroImportAll;
    var9 = var2.bind(var1)(var6);
    var _closure1_slot4 = var9;
    var2 = 2;
    var2 = var8[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = {'mass': 0.3, 'damping': 30, 'stiffness': 400};
    var _closure1_slot7 = var2;
    var5 = {'mass': 0.4, 'damping': 100, 'stiffness': 250};
    var _closure1_slot8 = var5;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx1(){const{dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}';
    var2['code'] = var6;
    var _closure1_slot9 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx2(isOpen,wasOpen){const{gestureState,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active||wasOpen===null){return;}if(isOpen===wasOpen){return;}if(isOpen){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}';
    var2['code'] = var6;
    var _closure1_slot10 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx3(){const{panelX,peekX}=this.__closure;return panelX.get()+peekX.get();}';
    var2['code'] = var6;
    var _closure1_slot11 = var2;
    var2 = {};
    var6 = "function useHomeDrawerGestureTsx4(){const{withSpring,panelX,gestureState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return withSpring(panelX.get(),gestureState.get().active?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always');}";
    var2['code'] = var6;
    var _closure1_slot12 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx5(){const{panelGestureSpringX,peekX}=this.__closure;return panelGestureSpringX.get()+peekX.get();}';
    var2['code'] = var6;
    var _closure1_slot13 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx6(){const{safeAreaInsets,panelSpringTranslateX}=this.__closure;return{flex:1,marginTop:safeAreaInsets.top,transform:[{translateX:panelSpringTranslateX.get()}]};}';
    var2['code'] = var6;
    var _closure1_slot14 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx7(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,GUILD_DESCRIPTION_ANIMATION_DISTANCE,MIN_HOME_DRAWER_TEXT_OPACITY,MIN_HOME_DRAWER_OPEN_WIDTH,withSpring,HOME_DRAWER_FLING_PHYSICS,clamp}=this.__closure;let x=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(GUILD_DESCRIPTION_ANIMATION_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*GUILD_DESCRIPTION_ANIMATION_DISTANCE);}const opacity=MIN_HOME_DRAWER_TEXT_OPACITY+drawerRevealX.get()/MIN_HOME_DRAWER_OPEN_WIDTH*(1-MIN_HOME_DRAWER_TEXT_OPACITY);return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)}],opacity:withSpring(clamp(opacity,0,1),HOME_DRAWER_FLING_PHYSICS)};}';
    var2['code'] = var6;
    var _closure1_slot15 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx8(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,MAX_HOME_DRAWER_ICON_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let x=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(MAX_HOME_DRAWER_ICON_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*MAX_HOME_DRAWER_ICON_DISTANCE);}return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)}]};}';
    var2['code'] = var6;
    var _closure1_slot16 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx9(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,UNREAD_INDICATOR_ANIMATION_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let left=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){left=-Math.min(UNREAD_INDICATOR_ANIMATION_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*UNREAD_INDICATOR_ANIMATION_DISTANCE);}return{transform:[{translateX:withSpring(left,HOME_DRAWER_FLING_PHYSICS)}]};}';
    var2['code'] = var6;
    var _closure1_slot17 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx10(){const{isPanelTouchActive,runOnJS,noteInteraction,gestureState,dragOffsetX}=this.__closure;isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);}';
    var2['code'] = var6;
    var _closure1_slot18 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx11(event){const{dragOffsetX,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,panelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,gestureState,setHomeDrawerState}=this.__closure;let shouldOpen;if(event.velocityX>50){shouldOpen=true;if(dragOffsetX.get()<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-50){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else if(panelX.get()===0){shouldOpen=false;}else if(panelX.get()>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX){shouldOpen=true;}else if(panelX.get()>=INITIAL_OPEN_WIDTH&&event.absoluteX-gestureState.get().initialX>0){shouldOpen=true;}else{shouldOpen=false;}panelX.set(shouldOpen?maxX:0);runOnJS(setHomeDrawerState)(shouldOpen);}';
    var2['code'] = var6;
    var _closure1_slot19 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx12(event){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH,panelX,DRAWER_RESISTANCE}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const basePosition=newXOffset+gestureState.get().panelX;if(gestureState.get().panelX===0&&newXOffset>=0&&newXOffset<INITIAL_OPEN_WIDTH){panelX.set(Math.max(basePosition/DRAWER_RESISTANCE,0));}else{panelX.set(Math.max(basePosition,0));}}';
    var2['code'] = var6;
    var _closure1_slot20 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx13(event,manager){const{gestureState,panelX}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);if(absoluteYDiff>absoluteXDiff||panelX.get()===0&&touchX<gestureState.get().initialX||panelX.get()>0&&touchX>gestureState.get().initialX){manager.fail();}if(panelX.get()===0&&touchX>gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}else if(touchX<gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}}';
    var2['code'] = var6;
    var _closure1_slot21 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx14(event){const{isPanelTouchActive,gestureState,panelX}=this.__closure;isPanelTouchActive.set(true);gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()});}';
    var2['code'] = var6;
    var _closure1_slot22 = var2;
    var6 = var9.createContext;
    var2 = {};
    var10 = 14;
    var10 = var8[var10];
    var10 = var7.bind(var1)(var10);
    var11 = var10.Gesture;
    var10 = var11.Pan;
    var10 = var10.bind(var11)();
    var2['gesture'] = var10;
    var10 = {};
    var2['panelStyles'] = var10;
    var10 = 15;
    var11 = var8[var10];
    var14 = var7.bind(var1)(var11);
    var13 = var14.createFakeSharedValue;
    var11 = {'active': false, 'initialX': 0, 'initialY': 0, 'panelX': 0};
    var11 = var13.bind(var14)(var11);
    var2['gestureState'] = var11;
    var11 = var8[var10];
    var13 = var7.bind(var1)(var11);
    var11 = var13.createFakeSharedValue;
    var11 = var11.bind(var13)(var12);
    var2['panelX'] = var11;
    var10 = var8[var10];
    var11 = var7.bind(var1)(var10);
    var10 = var11.createFakeSharedValue;
    var10 = var10.bind(var11)(var12);
    var2['panelSpringTranslateX'] = var10;
    var10 = {};
    var2['guildsBarLabelDrawerStyle'] = var10;
    var10 = {};
    var2['guildsBarIconDrawerStyle'] = var10;
    var10 = {};
    var2['guildsBarUnreadDrawerStyle'] = var10;
    var2 = var6.bind(var9)(var2);
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/home_drawer/native/useHomeDrawerGesture.tsx';
    var6 = var7.bind(var8)(var6);
    var3['HOME_DRAWER_FLING_PHYSICS'] = var5;
    var4 = function useHomeGesture() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var24 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 4;
            var2 = var18[var2];
            var7 = undefined;
            var2 = var24.bind(var7)(var2);
            var4 = var2.MobileHomeDrawerExperiment;
            var3 = var4.useConfig;
            var2 = {};
            var6 = 'gesture';
            var2['location'] = var6;
            var2 = var3.bind(var4)(var2);
            var12 = var2.enableHome;
            var20 = var2.enablePeekHint;
            var2 = _closure1_slot5;
            var2 = var2.bind(var7)();
            var14 = var2.panelX;
            var _closure2_slot0 = var14;
            var15 = var2.gestureState;
            var _closure2_slot1 = var15;
            var9 = var2.updateMaxX;
            var _closure2_slot2 = var9;
            var11 = var2.maxX;
            var _closure2_slot3 = var11;
            var3 = var2.setPanelX;
            var _closure2_slot4 = var3;
            var10 = var2.isPanelTouchActive;
            var _closure2_slot5 = var10;
            var4 = var2.noteInteraction;
            var _closure2_slot6 = var4;
            var6 = 5;
            var2 = var18[var6];
            var13 = var24.bind(var7)(var2);
            var8 = var13.useSharedValue;
            var2 = 0;
            var13 = var8.bind(var13)(var2);
            var _closure2_slot7 = var13;
            var8 = 6;
            var8 = var18[var8];
            var16 = var24.bind(var7)(var8);
            var8 = var16.useNavigation;
            var17 = var8.bind(var16)();
            var _closure2_slot8 = var17;
            var8 = var18[var6];
            var21 = var24.bind(var7)(var8);
            var19 = var21.useAnimatedReaction;
            var16 = function M() {
                var2 = _closure2_slot7;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 144;
                var1 = var2 >= var1;
                return var1;
            };
            var8 = {};
            var8['dragOffsetX'] = var13;
            var22 = 144;
            var8['INITIAL_OPEN_WIDTH'] = var22;
            var16['__closure'] = var8;
            var8 = 2525772891435.0;
            var16['__workletHash'] = var8;
            var8 = _closure1_slot9;
            var16['__initData'] = var8;
            var8 = function h(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var2 = arg2;
                    var3 = _closure2_slot1;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var1.active;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = null;
                    var1 = var3 !== var2;
case 2:
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var4 !== var2;
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 5;
                    var1 = var6[var1];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var1);
                    var7 = var8.runOnJS;
                    var1 = 7;
                    var2 = var6[var1];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.triggerHapticFeedback;
                    var2 = var7.bind(var8)(var2);
                    var1 = var6[var1];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.HapticFeedbackTypes;
                    if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = var1.SOFT;
                    var4 = var2.bind(var3)(var4);
                    _fun0002_ip = 6; continue _fun0002;
case 8:
                    var1 = var1.IMPACT_MEDIUM;
                    var1 = var2.bind(var3)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = {};
            var22['gestureState'] = var15;
            var23 = var18[var6];
            var23 = var24.bind(var7)(var23);
            var23 = var23.runOnJS;
            var22['runOnJS'] = var23;
            var23 = 7;
            var25 = var18[var23];
            var25 = var24.bind(var7)(var25);
            var25 = var25.triggerHapticFeedback;
            var22['triggerHapticFeedback'] = var25;
            var23 = var18[var23];
            var23 = var24.bind(var7)(var23);
            var23 = var23.HapticFeedbackTypes;
            var22['HapticFeedbackTypes'] = var23;
            var8['__closure'] = var22;
            var22 = 11947599708940.0;
            var8['__workletHash'] = var22;
            var22 = _closure1_slot10;
            var8['__initData'] = var22;
            var8 = var19.bind(var21)(var16, var8);
            var16 = _closure1_slot1;
            var8 = 8;
            var8 = var18[var8];
            var8 = var16.bind(var7)(var8);
            var19 = var8.bind(var7)();
            var _closure2_slot9 = var19;
            var8 = 9;
            var8 = var18[var8];
            var8 = var16.bind(var7)(var8);
            var24 = var8.bind(var7)();
            var _closure2_slot10 = var24;
            var8 = 10;
            var8 = var18[var8];
            var8 = var16.bind(var7)(var8);
            var8 = var8.bind(var7)();
            var8 = var8.isChatBesideChannelList;
            if(!var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = !var8;
case 10:
            var _closure2_slot11 = var12;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = var18[var6];
            var21 = var16.bind(var7)(var8);
            var8 = var21.useSharedValue;
            var23 = var8.bind(var21)(var2);
            var _closure2_slot12 = var23;
            var8 = 11;
            var8 = var18[var8];
            var18 = var16.bind(var7)(var8);
            var16 = var18.useHomeDrawerPeekHint;
            var8 = var12;
            if(!var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var20;
case 12:
            var8 = var16.bind(var18)(var8, var23);
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var8 = var21[var6];
            var18 = var20.bind(var7)(var8);
            var16 = var18.useDerivedValue;
            var8 = function z() {
                var3 = _closure2_slot0;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot12;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = var2 + var1;
                return var1;
            };
            var22 = {};
            var22['panelX'] = var14;
            var22['peekX'] = var23;
            var8['__closure'] = var22;
            var22 = 4654854314200.0;
            var8['__workletHash'] = var22;
            var22 = _closure1_slot11;
            var8['__initData'] = var22;
            var22 = var16.bind(var18)(var8);
            var _closure2_slot13 = var22;
            var8 = _closure1_slot4;
            var18 = var8.useEffect;
            var16 = new Array(4);
            var16[0] = var19;
            var16[1] = var24;
            var16[2] = var9;
            var16[3] = var12;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot11;
                    var4 = _closure2_slot2;
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 14:
                    var5 = undefined;
                    var3 = {'width': 0, 'height': 0};
                    var2 = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0003_ip = 15; continue _fun0003;
case 4:
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var18.bind(var8)(var9, var16);
            var16 = var8.useEffect;
            var9 = new Array(3);
            var9[0] = var17;
            var9[1] = var3;
            var9[2] = var12;
            var3 = function() {
                var5 = function handleStateChange(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var7 = var1.state;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var2);
                        var4 = var6.coerceGuildsRoute;
                        var5 = null;
                        var8 = var5 == var7;
                        var2 = undefined;
                        if(var8) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var8 = var7.routes;
                        var9 = var5 == var8;
                        var2 = undefined;
                        if(var9) { _fun0004_ip = 16; continue _fun0004 }
case 18:
                        var10 = var5 == var7;
                        var9 = undefined;
                        if(var10) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var9 = var7.index;
case 19:
                        var10 = var5 != var9;
                        var7 = 0;
                        if(!var10) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var7 = var9;
case 21:
                        var2 = var8[var7];
case 16:
                        var2 = var4.bind(var6)(var2);
                        if(!(var5 != var2)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var6 = _closure2_slot11;
                        if(!var6) { _fun0004_ip = 23; continue _fun0004 }
case 25:
                        var2 = var2.params;
                        var6 = var5 == var2;
                        var5 = undefined;
                        if(var6) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var5 = var2.drawerOpen;
case 26:
                        var2 = true;
                        var2 = var2 === var5;
                        var5 = _closure2_slot4;
                        var4 = 'closed';
                        if(!var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var4 = 'open';
case 28:
                        var4 = var5.bind(var1)(var4);
                        var4 = _closure1_slot6;
                        var3 = var4.getState;
                        var3 = var3.bind(var4)();
                        if(var2) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                        var2 = var3.stopTimer;
                        var2 = var2.bind(var3)();
                        _fun0004_ip = 23; continue _fun0004;
case 30:
                        var2 = var3.startTimer;
                        var2 = var2.bind(var3)();
case 23:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var4 = _closure2_slot8;
                var3 = var4.addListener;
                var2 = 'state';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure2_slot8;
                    var3 = var4.removeListener;
                    var2 = _closure3_slot0;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                    var2 = _closure1_slot6;
                    var1 = var2.getState;
                    var2 = var1.bind(var2)();
                    var1 = var2.stopTimer;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var3 = var16.bind(var8)(var3, var9);
            var3 = var21[var6];
            var16 = var20.bind(var7)(var3);
            var9 = var16.useDerivedValue;
            var3 = function K() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var6 = _closure2_slot1;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var2 = var2.active;
                    if(var2) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var2 = _closure1_slot8;
                    _fun0005_ip = 34; continue _fun0005;
case 32:
                    var2 = _closure1_slot7;
case 34:
                    var1 = 'animate-always';
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var17 = {};
            var19 = 13;
            var18 = var21[var19];
            var18 = var20.bind(var7)(var18);
            var18 = var18.withSpring;
            var17['withSpring'] = var18;
            var17['panelX'] = var14;
            var17['gestureState'] = var15;
            var18 = _closure1_slot7;
            var17['HOME_GESTURE_DRAG_PHYSICS'] = var18;
            var18 = _closure1_slot8;
            var17['HOME_DRAWER_FLING_PHYSICS'] = var18;
            var3['__closure'] = var17;
            var17 = 2174063493497.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot12;
            var3['__initData'] = var17;
            var25 = var9.bind(var16)(var3);
            var _closure2_slot14 = var25;
            var3 = var21[var6];
            var16 = var20.bind(var7)(var3);
            var9 = var16.useDerivedValue;
            var3 = function Q() {
                var3 = _closure2_slot14;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot12;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = var2 + var1;
                return var1;
            };
            var17 = {};
            var17['panelGestureSpringX'] = var25;
            var17['peekX'] = var23;
            var3['__closure'] = var17;
            var17 = 2927026959998.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot13;
            var3['__initData'] = var17;
            var23 = var9.bind(var16)(var3);
            var _closure2_slot15 = var23;
            var3 = var21[var6];
            var16 = var20.bind(var7)(var3);
            var9 = var16.useAnimatedStyle;
            var3 = function Z() {
                var1 = {};
                var2 = 1;
                var1['flex'] = var2;
                var3 = _closure2_slot10;
                var3 = var3.top;
                var1['marginTop'] = var3;
                var3 = {};
                var4 = _closure2_slot15;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var3['translateX'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var17 = {};
            var17['safeAreaInsets'] = var24;
            var17['panelSpringTranslateX'] = var23;
            var3['__closure'] = var17;
            var17 = 13544610996653.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot14;
            var3['__initData'] = var17;
            var3 = var9.bind(var16)(var3);
            var _closure2_slot16 = var3;
            var9 = var21[var6];
            var17 = var20.bind(var7)(var9);
            var16 = var17.useAnimatedStyle;
            var9 = function $() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = 48;
                    var2 = var2 < var3;
                    var9 = 0;
                    var12 = 0;
                    if(!var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.min;
                    var6 = _closure2_slot13;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var2 = var2 / var3;
                    var3 = 18;
                    var2 = var2 * var3;
                    var12 = var4.bind(var5)(var3, var2);
case 35:
                    var2 = _closure2_slot13;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 150;
                    var10 = var2 / var1;
                    var1 = {};
                    var4 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 13;
                    var3 = var8[var2];
                    var6 = undefined;
                    var11 = var7.bind(var6)(var3);
                    var3 = var11.withSpring;
                    var5 = _closure1_slot8;
                    var3 = var3.bind(var11)(var12, var5);
                    var4['translateX'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1['transform'] = var3;
                    var2 = var8[var2];
                    var4 = var7.bind(var6)(var2);
                    var3 = var4.withSpring;
                    var2 = 5;
                    var2 = var8[var2];
                    var8 = var7.bind(var6)(var2);
                    var7 = var8.clamp;
                    var6 = 0.1;
                    var2 = 0.9;
                    var2 = var10 * var2;
                    var6 = var6 + var2;
                    var2 = 1;
                    var2 = var7.bind(var8)(var6, var9, var2);
                    var2 = var3.bind(var4)(var2, var5);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var23 = {'drawerRevealX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'GUILD_DESCRIPTION_ANIMATION_DISTANCE': 18, 'MIN_HOME_DRAWER_TEXT_OPACITY': 0.1, 'MIN_HOME_DRAWER_OPEN_WIDTH': 150};
            var23['drawerRevealX'] = var22;
            var24 = var21[var19];
            var24 = var20.bind(var7)(var24);
            var24 = var24.withSpring;
            var23['withSpring'] = var24;
            var23['HOME_DRAWER_FLING_PHYSICS'] = var18;
            var24 = var21[var6];
            var24 = var20.bind(var7)(var24);
            var24 = var24.clamp;
            var23['clamp'] = var24;
            var9['__closure'] = var23;
            var23 = 1147372271952.0;
            var9['__workletHash'] = var23;
            var23 = _closure1_slot15;
            var9['__initData'] = var23;
            var9 = var16.bind(var17)(var9);
            var _closure2_slot17 = var9;
            var9 = var21[var6];
            var17 = var20.bind(var7)(var9);
            var16 = var17.useAnimatedStyle;
            var9 = function ee() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 48;
                    var3 = var3 < var2;
                    var6 = 0;
                    if(!var3) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var3 = global;
                    var4 = var3.Math;
                    var3 = var4.min;
                    var5 = _closure2_slot13;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1 / var2;
                    var2 = 12;
                    var1 = var1 * var2;
                    var6 = var3.bind(var4)(var2, var1);
case 37:
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.withSpring;
                    var2 = _closure1_slot8;
                    var2 = var4.bind(var5)(var6, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var23 = {'drawerRevealX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'MAX_HOME_DRAWER_ICON_DISTANCE': 12};
            var23['drawerRevealX'] = var22;
            var24 = var21[var19];
            var24 = var20.bind(var7)(var24);
            var24 = var24.withSpring;
            var23['withSpring'] = var24;
            var23['HOME_DRAWER_FLING_PHYSICS'] = var18;
            var9['__closure'] = var23;
            var23 = 16360618332998.0;
            var9['__workletHash'] = var23;
            var23 = _closure1_slot16;
            var9['__initData'] = var23;
            var9 = var16.bind(var17)(var9);
            var _closure2_slot18 = var9;
            var6 = var21[var6];
            var16 = var20.bind(var7)(var6);
            var9 = var16.useAnimatedStyle;
            var6 = function te() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 48;
                    var3 = var3 < var2;
                    var6 = 0;
                    if(!var3) { _fun0008_ip = 32; continue _fun0008 }
case 38:
                    var3 = global;
                    var4 = var3.Math;
                    var3 = var4.min;
                    var5 = _closure2_slot13;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1 / var2;
                    var2 = 6;
                    var1 = var1 * var2;
                    var1 = var3.bind(var4)(var2, var1);
                    var6 = -var1;
case 32:
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.withSpring;
                    var2 = _closure1_slot8;
                    var2 = var4.bind(var5)(var6, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var17 = {'drawerRevealX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'UNREAD_INDICATOR_ANIMATION_DISTANCE': 6};
            var17['drawerRevealX'] = var22;
            var19 = var21[var19];
            var19 = var20.bind(var7)(var19);
            var19 = var19.withSpring;
            var17['withSpring'] = var19;
            var17['HOME_DRAWER_FLING_PHYSICS'] = var18;
            var6['__closure'] = var17;
            var17 = 8561772429103.0;
            var6['__workletHash'] = var17;
            var17 = _closure1_slot17;
            var6['__initData'] = var17;
            var6 = var9.bind(var16)(var6);
            var _closure2_slot19 = var6;
            var9 = var8.useMemo;
            var6 = new Array(7);
            var6[0] = var15;
            var6[1] = var14;
            var6[2] = var13;
            var6[3] = var12;
            var6[4] = var11;
            var6[5] = var10;
            var6[6] = var4;
            var4 = function() {
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 14;
                var2 = var12[var2];
                var10 = undefined;
                var2 = var11.bind(var10)(var2);
                var3 = var2.Gesture;
                var2 = var3.Pan;
                var5 = var2.bind(var3)();
                var3 = var5.enabled;
                var2 = _closure2_slot11;
                var5 = var3.bind(var5)(var2);
                var3 = var5.manualActivation;
                var2 = true;
                var5 = var3.bind(var5)(var2);
                var3 = var5.shouldCancelWhenOutside;
                var2 = false;
                var5 = var3.bind(var5)(var2);
                var3 = var5.maxPointers;
                var2 = 1;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onBegin;
                var2 = function l(arg1) {
                    var5 = arg1;
                    var3 = _closure2_slot5;
                    var2 = var3.set;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = {};
                    var6 = false;
                    var1['active'] = var6;
                    var6 = var5.absoluteX;
                    var1['initialX'] = var6;
                    var5 = var5.absoluteY;
                    var1['initialY'] = var5;
                    var5 = _closure2_slot0;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var1['panelX'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = {};
                var13 = _closure2_slot5;
                var6['isPanelTouchActive'] = var13;
                var7 = _closure2_slot1;
                var6['gestureState'] = var7;
                var15 = _closure2_slot0;
                var6['panelX'] = var15;
                var2['__closure'] = var6;
                var6 = 16505445202158.0;
                var2['__workletHash'] = var6;
                var6 = _closure1_slot22;
                var2['__initData'] = var6;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onTouchesMove;
                var2 = function s(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.active;
                        if(var3) { _fun0009_ip = 39; continue _fun0009 }
case 40:
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
                        var10 = _closure2_slot1;
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
                        if(var1) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                        var6 = _closure2_slot0;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var3 === var4;
                        if(!var4) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                        var8 = _closure2_slot1;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var6.initialX;
                        var4 = var7 < var6;
case 43:
                        var1 = var4;
case 41:
                        if(var1) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                        var6 = _closure2_slot0;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var4 > var3;
                        if(!var4) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                        var8 = _closure2_slot1;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var6.initialX;
                        var4 = var7 > var6;
case 47:
                        var1 = var4;
case 45:
                        if(!var1) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
case 49:
                        var4 = _closure2_slot0;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = var3 === var1;
                        if(!var1) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.initialX;
                        var1 = var7 > var3;
case 51:
                        if(var1) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.initialX;
                        var1 = var7 < var3;
case 53:
                        if(!var1) { _fun0009_ip = 39; continue _fun0009 }
case 55:
                        var4 = _closure2_slot1;
                        var3 = var4.set;
                        var1 = {};
                        var6 = var4.get;
                        var11 = var6.bind(var4)();
                        var12 = var1;
                        var6 = copyDataProperties(var12, var11);
                        var8 = true;
                        var6 = 'active';
                        var1[5] = var8;
                        var6 = 'initialX';
                        var1[5] = var7;
                        var6 = _closure2_slot0;
                        var5 = var6.get;
                        var6 = var5.bind(var6)();
                        var5 = 'panelX';
                        var1[4] = var6;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2.activate;
                        var1 = var1.bind(var2)();
case 39:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = {};
                var6['gestureState'] = var7;
                var6['panelX'] = var15;
                var2['__closure'] = var6;
                var6 = 14569763728735.0;
                var2['__workletHash'] = var6;
                var6 = _closure1_slot21;
                var2['__initData'] = var6;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onChange;
                var2 = function n(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.active;
                        if(!var2) { _fun0010_ip = 56; continue _fun0010 }
case 38:
                        var2 = arg1;
                        var3 = var2.absoluteX;
                        var4 = _closure2_slot1;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var2 = var2.initialX;
                        var3 = var3 - var2;
                        var5 = _closure2_slot7;
                        var2 = var5.set;
                        var2 = var2.bind(var5)(var3);
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var2 = var2.panelX;
                        var7 = var3 + var2;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var2 = var2.panelX;
                        var6 = 0;
                        if(!(var6 === var2)) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                        if(!(var3 >= var6)) { _fun0010_ip = 57; continue _fun0010 }
case 9:
                        var2 = 144;
                        if(!(!(var3 < var2))) { _fun0010_ip = 59; continue _fun0010 }
case 57:
                        var4 = _closure2_slot0;
                        var3 = var4.set;
                        var2 = global;
                        var5 = var2.Math;
                        var2 = var5.max;
                        var2 = var2.bind(var5)(var7, var6);
                        var2 = var3.bind(var4)(var2);
                        _fun0010_ip = 56; continue _fun0010;
case 59:
                        var3 = _closure2_slot0;
                        var2 = var3.set;
                        var1 = global;
                        var5 = var1.Math;
                        var4 = var5.max;
                        var1 = 3;
                        var1 = var7 / var1;
                        var1 = var4.bind(var5)(var1, var6);
                        var1 = var2.bind(var3)(var1);
case 56:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = {};
                var14['gestureState'] = var7;
                var6 = _closure2_slot7;
                var14['dragOffsetX'] = var6;
                var9 = 144;
                var14['INITIAL_OPEN_WIDTH'] = var9;
                var14['panelX'] = var15;
                var16 = 3;
                var14['DRAWER_RESISTANCE'] = var16;
                var2['__closure'] = var14;
                var14 = 14987365733436.0;
                var2['__workletHash'] = var14;
                var14 = _closure1_slot20;
                var2['__initData'] = var14;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onEnd;
                var2 = function t(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var6 = arg1;
                        var2 = var6.velocityX;
                        var1 = 50;
                        if(!(!(var2 > var1))) { _fun0011_ip = 50; continue _fun0011 }
case 60:
                        var2 = var6.velocityX;
                        var1 = -50;
                        if(!(!(var2 < var1))) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                        var2 = _closure2_slot0;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var5 = 0;
                        var3 = var5 !== var1;
                        if(!var3) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                        var2 = _closure2_slot0;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var7 = _closure2_slot3;
                        var1 = 0.5;
                        var1 = var1 * var7;
                        var1 = var2 > var1;
                        if(var1) { _fun0011_ip = 59; continue _fun0011 }
case 65:
                        var7 = _closure2_slot0;
                        var2 = var7.get;
                        var7 = var2.bind(var7)();
                        var2 = 144;
                        var2 = var7 >= var2;
                        if(!var2) { _fun0011_ip = 29; continue _fun0011 }
case 66:
                        var6 = var6.absoluteX;
                        var7 = _closure2_slot1;
                        var4 = var7.get;
                        var4 = var4.bind(var7)();
                        var4 = var4.initialX;
                        var4 = var6 - var4;
                        var2 = var4 > var5;
case 29:
                        var1 = var2;
case 59:
                        var3 = var1;
case 63:
                        _fun0011_ip = 67; continue _fun0011;
case 61:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 5;
                        var1 = var6[var1];
                        var4 = undefined;
                        var8 = var5.bind(var4)(var1);
                        var7 = var8.runOnJS;
                        var1 = 7;
                        var2 = var6[var1];
                        var2 = var5.bind(var4)(var2);
                        var2 = var2.triggerHapticFeedback;
                        var2 = var7.bind(var8)(var2);
                        var1 = var6[var1];
                        var1 = var5.bind(var4)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.SOFT;
                        var1 = var2.bind(var4)(var1);
                        var3 = false;
                        _fun0011_ip = 67; continue _fun0011;
case 50:
                        var2 = _closure2_slot7;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = 144;
                        var2 = var2 < var1;
                        var3 = true;
                        if(!var2) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 5;
                        var2 = var7[var2];
                        var5 = undefined;
                        var9 = var6.bind(var5)(var2);
                        var8 = var9.runOnJS;
                        var2 = 7;
                        var4 = var7[var2];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.triggerHapticFeedback;
                        var4 = var8.bind(var9)(var4);
                        var2 = var7[var2];
                        var2 = var6.bind(var5)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.IMPACT_MEDIUM;
                        var2 = var4.bind(var5)(var2);
                        var3 = true;
case 67:
                        var4 = _closure2_slot0;
                        var2 = var4.set;
                        var1 = 0;
                        if(!var3) { _fun0011_ip = 69; continue _fun0011 }
case 70:
                        var1 = _closure2_slot3;
case 69:
                        var1 = var2.bind(var4)(var1);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 5;
                        var2 = var7[var1];
                        var1 = undefined;
                        var5 = var6.bind(var1)(var2);
                        var4 = var5.runOnJS;
                        var2 = 12;
                        var2 = var7[var2];
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.setHomeDrawerState;
                        var2 = var4.bind(var5)(var2);
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    }
                };
                var14 = {};
                var14['dragOffsetX'] = var6;
                var14['INITIAL_OPEN_WIDTH'] = var9;
                var9 = 5;
                var16 = var12[var9];
                var16 = var11.bind(var10)(var16);
                var16 = var16.runOnJS;
                var14['runOnJS'] = var16;
                var16 = 7;
                var17 = var12[var16];
                var17 = var11.bind(var10)(var17);
                var17 = var17.triggerHapticFeedback;
                var14['triggerHapticFeedback'] = var17;
                var16 = var12[var16];
                var16 = var11.bind(var10)(var16);
                var16 = var16.HapticFeedbackTypes;
                var14['HapticFeedbackTypes'] = var16;
                var14['panelX'] = var15;
                var15 = 0.5;
                var14['FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN'] = var15;
                var15 = _closure2_slot3;
                var14['maxX'] = var15;
                var14['gestureState'] = var7;
                var15 = 12;
                var15 = var12[var15];
                var15 = var11.bind(var10)(var15);
                var15 = var15.setHomeDrawerState;
                var14['setHomeDrawerState'] = var15;
                var2['__closure'] = var14;
                var14 = 3928209418377.0;
                var2['__workletHash'] = var14;
                var14 = _closure1_slot19;
                var2['__initData'] = var14;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onFinalize;
                var1 = function e() {
                    var4 = _closure2_slot5;
                    var3 = var4.set;
                    var1 = false;
                    var1 = var3.bind(var4)(var1);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.runOnJS;
                    var3 = _closure2_slot6;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.bind(var1)();
                    var6 = _closure2_slot1;
                    var5 = var6.set;
                    var4 = 0;
                    var3 = {'active': false, 'initialX': 0, 'initialY': 0, 'panelX': 0};
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure2_slot7;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                };
                var5 = {};
                var5['isPanelTouchActive'] = var13;
                var9 = var12[var9];
                var9 = var11.bind(var10)(var9);
                var9 = var9.runOnJS;
                var5['runOnJS'] = var9;
                var8 = _closure2_slot6;
                var5['noteInteraction'] = var8;
                var5['gestureState'] = var7;
                var5['dragOffsetX'] = var6;
                var1['__closure'] = var5;
                var5 = 4660810514744.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot18;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var9.bind(var8)(var4, var6);
            var _closure2_slot20 = var4;
            var6 = var8.useState;
            var5 = function() {
                var1 = {};
                var3 = _closure2_slot20;
                var1['gesture'] = var3;
                var3 = _closure2_slot16;
                var1['panelStyles'] = var3;
                var3 = _closure2_slot1;
                var1['gestureState'] = var3;
                var3 = _closure2_slot0;
                var1['panelX'] = var3;
                var3 = _closure2_slot15;
                var1['panelSpringTranslateX'] = var3;
                var3 = _closure2_slot17;
                var1['guildsBarLabelDrawerStyle'] = var3;
                var3 = _closure2_slot18;
                var1['guildsBarIconDrawerStyle'] = var3;
                var2 = _closure2_slot19;
                var1['guildsBarUnreadDrawerStyle'] = var2;
                return var1;
            };
            var6 = var6.bind(var8)(var5);
            var5 = _closure1_slot3;
            var1 = 1;
            var1 = var5.bind(var7)(var6, var1);
            var2 = var1[var2];
            var1 = {};
            var1['gesture'] = var4;
            var1['panelStyles'] = var3;
            var1['homeDrawerState'] = var2;
            return var1;
        }
    };
    var3['useHomeGesture'] = var4;
    var3['HomeDrawerStateContext'] = var2;
    return var1;
})();