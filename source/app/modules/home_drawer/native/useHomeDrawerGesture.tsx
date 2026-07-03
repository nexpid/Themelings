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
    var6 = var8[var2];
    var6 = var5.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.computeMaxX;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {'mass': 0.3, 'damping': 30, 'stiffness': 400};
    var _closure1_slot8 = var2;
    var5 = {'mass': 0.4, 'damping': 100, 'stiffness': 250};
    var _closure1_slot9 = var5;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx1(){const{dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}';
    var2['code'] = var6;
    var _closure1_slot10 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx2(isOpen,wasOpen){const{gestureState,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active||wasOpen===null){return;}if(isOpen===wasOpen){return;}if(isOpen){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}';
    var2['code'] = var6;
    var _closure1_slot11 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx3(){const{panelX,peekX}=this.__closure;return panelX.get()+peekX.get();}';
    var2['code'] = var6;
    var _closure1_slot12 = var2;
    var2 = {};
    var6 = "function useHomeDrawerGestureTsx4(){const{isDrawerInitialized,initialPanelX,withSpring,panelX,gestureState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS}=this.__closure;if(!isDrawerInitialized.get()){return initialPanelX;}return withSpring(panelX.get(),gestureState.get().active?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always');}";
    var2['code'] = var6;
    var _closure1_slot13 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx5(){const{panelGestureSpringX,peekX}=this.__closure;return panelGestureSpringX.get()+peekX.get();}';
    var2['code'] = var6;
    var _closure1_slot14 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx6(){const{safeAreaInsets,panelSpringTranslateX}=this.__closure;return{flex:1,marginTop:safeAreaInsets.top,transform:[{translateX:panelSpringTranslateX.get()}]};}';
    var2['code'] = var6;
    var _closure1_slot15 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx7(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,GUILD_DESCRIPTION_ANIMATION_DISTANCE,MIN_HOME_DRAWER_TEXT_OPACITY,MIN_HOME_DRAWER_OPEN_WIDTH,GUILD_LABEL_UNSNAPPED_SCALE,withSpring,HOME_DRAWER_FLING_PHYSICS,clamp}=this.__closure;let x=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(GUILD_DESCRIPTION_ANIMATION_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*GUILD_DESCRIPTION_ANIMATION_DISTANCE);}const opacity=MIN_HOME_DRAWER_TEXT_OPACITY+drawerRevealX.get()/MIN_HOME_DRAWER_OPEN_WIDTH*(1-MIN_HOME_DRAWER_TEXT_OPACITY);const scale=drawerRevealX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH?1:GUILD_LABEL_UNSNAPPED_SCALE;return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)},{scale:withSpring(scale,HOME_DRAWER_FLING_PHYSICS)}],opacity:withSpring(clamp(opacity,0,1),HOME_DRAWER_FLING_PHYSICS)};}';
    var2['code'] = var6;
    var _closure1_slot16 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx8(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,MAX_HOME_DRAWER_ICON_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let x=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(MAX_HOME_DRAWER_ICON_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*MAX_HOME_DRAWER_ICON_DISTANCE);}return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)}]};}';
    var2['code'] = var6;
    var _closure1_slot17 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx9(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,UNREAD_INDICATOR_ANIMATION_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let left=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){left=-Math.min(UNREAD_INDICATOR_ANIMATION_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*UNREAD_INDICATOR_ANIMATION_DISTANCE);}return{transform:[{translateX:withSpring(left,HOME_DRAWER_FLING_PHYSICS)}]};}';
    var2['code'] = var6;
    var _closure1_slot18 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx10(){const{isPanelTouchActive,runOnJS,noteInteraction,gestureState,dragOffsetX}=this.__closure;isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);}';
    var2['code'] = var6;
    var _closure1_slot19 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx11(event){const{FLING_MIN_VELOCITY,dragOffsetX,FLING_MIN_DISTANCE,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,panelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,gestureState,setHomeDrawerState}=this.__closure;let shouldOpen;if(event.velocityX>FLING_MIN_VELOCITY&&dragOffsetX.get()>FLING_MIN_DISTANCE){shouldOpen=true;if(dragOffsetX.get()<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&dragOffsetX.get()<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else if(panelX.get()===0){shouldOpen=false;}else if(panelX.get()>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX){shouldOpen=true;}else if(panelX.get()>=INITIAL_OPEN_WIDTH&&event.absoluteX-gestureState.get().initialX>0){shouldOpen=true;}else{shouldOpen=false;}panelX.set(shouldOpen?maxX:0);runOnJS(setHomeDrawerState)(shouldOpen);}';
    var2['code'] = var6;
    var _closure1_slot20 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx12(event){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH,panelX,DRAWER_RESISTANCE}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const basePosition=newXOffset+gestureState.get().panelX;if(gestureState.get().panelX===0&&newXOffset>=0&&newXOffset<INITIAL_OPEN_WIDTH){panelX.set(Math.max(basePosition/DRAWER_RESISTANCE,0));}else{panelX.set(Math.max(basePosition,0));}}';
    var2['code'] = var6;
    var _closure1_slot21 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx13(event,manager){const{gestureState,panelX}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);if(absoluteYDiff>absoluteXDiff||panelX.get()===0&&touchX<gestureState.get().initialX||panelX.get()>0&&touchX>gestureState.get().initialX){manager.fail();}if(panelX.get()===0&&touchX>gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}else if(touchX<gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}}';
    var2['code'] = var6;
    var _closure1_slot22 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx14(event){const{isPanelTouchActive,gestureState,panelX}=this.__closure;isPanelTouchActive.set(true);gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()});}';
    var2['code'] = var6;
    var _closure1_slot23 = var2;
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
            var27 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 4;
            var2 = var20[var2];
            var7 = undefined;
            var2 = var27.bind(var7)(var2);
            var4 = var2.MobileHomeDrawerExperiment;
            var3 = var4.useConfig;
            var2 = {};
            var6 = 'gesture';
            var2['location'] = var6;
            var2 = var3.bind(var4)(var2);
            var12 = var2.enableHome;
            var22 = var2.enablePeekHint;
            var8 = var2.landOnHome;
            var2 = _closure1_slot5;
            var2 = var2.bind(var7)();
            var14 = var2.panelX;
            var _closure2_slot0 = var14;
            var15 = var2.gestureState;
            var _closure2_slot1 = var15;
            var17 = var2.updateMaxX;
            var _closure2_slot2 = var17;
            var11 = var2.maxX;
            var _closure2_slot3 = var11;
            var9 = var2.setPanelX;
            var _closure2_slot4 = var9;
            var10 = var2.isPanelTouchActive;
            var _closure2_slot5 = var10;
            var4 = var2.noteInteraction;
            var _closure2_slot6 = var4;
            var6 = 5;
            var2 = var20[var6];
            var13 = var27.bind(var7)(var2);
            var3 = var13.useSharedValue;
            var2 = 0;
            var13 = var3.bind(var13)(var2);
            var _closure2_slot7 = var13;
            var3 = var20[var6];
            var18 = var27.bind(var7)(var3);
            var3 = var18.useSharedValue;
            var16 = false;
            var19 = var3.bind(var18)(var16);
            var _closure2_slot8 = var19;
            var3 = 6;
            var3 = var20[var3];
            var18 = var27.bind(var7)(var3);
            var3 = var18.useNavigation;
            var21 = var3.bind(var18)();
            var _closure2_slot9 = var21;
            var3 = var20[var6];
            var24 = var27.bind(var7)(var3);
            var23 = var24.useAnimatedReaction;
            var18 = function G() {
                var2 = _closure2_slot7;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 144;
                var1 = var2 >= var1;
                return var1;
            };
            var3 = {};
            var3['dragOffsetX'] = var13;
            var25 = 144;
            var3['INITIAL_OPEN_WIDTH'] = var25;
            var18['__closure'] = var3;
            var3 = 2525772891435.0;
            var18['__workletHash'] = var3;
            var3 = _closure1_slot10;
            var18['__initData'] = var3;
            var3 = function W(arg1, arg2) {
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
            var25 = {};
            var25['gestureState'] = var15;
            var26 = var20[var6];
            var26 = var27.bind(var7)(var26);
            var26 = var26.runOnJS;
            var25['runOnJS'] = var26;
            var26 = 7;
            var28 = var20[var26];
            var28 = var27.bind(var7)(var28);
            var28 = var28.triggerHapticFeedback;
            var25['triggerHapticFeedback'] = var28;
            var26 = var20[var26];
            var26 = var27.bind(var7)(var26);
            var26 = var26.HapticFeedbackTypes;
            var25['HapticFeedbackTypes'] = var26;
            var3['__closure'] = var25;
            var25 = 11947599708940.0;
            var3['__workletHash'] = var25;
            var25 = _closure1_slot11;
            var3['__initData'] = var25;
            var3 = var23.bind(var24)(var18, var3);
            var18 = _closure1_slot1;
            var3 = 8;
            var3 = var20[var3];
            var3 = var18.bind(var7)(var3);
            var26 = var3.bind(var7)();
            var _closure2_slot10 = var26;
            var3 = 9;
            var3 = var20[var3];
            var3 = var18.bind(var7)(var3);
            var24 = var3.bind(var7)();
            var _closure2_slot11 = var24;
            var3 = 10;
            var3 = var20[var3];
            var3 = var18.bind(var7)(var3);
            var3 = var3.bind(var7)();
            var3 = var3.isChatBesideChannelList;
            if(!var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = !var3;
case 10:
            var _closure2_slot12 = var12;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = var20[var6];
            var23 = var18.bind(var7)(var3);
            var3 = var23.useSharedValue;
            var23 = var3.bind(var23)(var2);
            var _closure2_slot13 = var23;
            var3 = 11;
            var3 = var20[var3];
            var20 = var18.bind(var7)(var3);
            var18 = var20.useHomeDrawerPeekHint;
            var3 = var12;
            if(!var12) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var22;
case 12:
            var3 = var18.bind(var20)(var3, var23);
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = var20[var6];
            var25 = var18.bind(var7)(var3);
            var22 = var25.useDerivedValue;
            var3 = function te() {
                var3 = _closure2_slot0;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot13;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = var2 + var1;
                return var1;
            };
            var27 = {};
            var27['panelX'] = var14;
            var27['peekX'] = var23;
            var3['__closure'] = var27;
            var27 = 4654854314200.0;
            var3['__workletHash'] = var27;
            var27 = _closure1_slot12;
            var3['__initData'] = var27;
            var22 = var22.bind(var25)(var3);
            var _closure2_slot14 = var22;
            var3 = var21.getState;
            var27 = var3.bind(var21)();
            var3 = 12;
            var3 = var20[var3];
            var25 = var18.bind(var7)(var3);
            var18 = var25.coerceGuildsRoute;
            var20 = null;
            var28 = var20 == var27;
            var3 = undefined;
            if(var28) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var28 = var27.routes;
            var29 = var20 == var28;
            var3 = undefined;
            if(var29) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var30 = var20 == var27;
            var29 = undefined;
            if(var30) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var29 = var27.index;
case 17:
            var30 = var20 != var29;
            var27 = 0;
            if(!var30) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var27 = var29;
case 19:
            var3 = var28[var27];
case 14:
            var25 = var18.bind(var25)(var3);
            var3 = var12;
            if(!var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var27 = var20 == var25;
            var18 = undefined;
            if(var27) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var25 = var25.params;
            var27 = var20 == var25;
            var18 = undefined;
            if(var27) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            var18 = var25.drawerOpen;
case 23:
            if(!(var20 != var18)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var8 = var18;
case 26:
            var3 = var8;
case 21:
            var _closure2_slot15 = var3;
            var18 = 0;
            if(!var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var8 = _closure1_slot6;
            var18 = var8.bind(var7)(var26, var24);
case 28:
            var _closure2_slot16 = var18;
            var8 = _closure1_slot4;
            var25 = var8.useEffect;
            var20 = new Array(4);
            var20[0] = var26;
            var20[1] = var24;
            var20[2] = var17;
            var20[3] = var12;
            var17 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var4 = _closure2_slot2;
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 30:
                    var5 = undefined;
                    var3 = {'width': 0, 'height': 0};
                    var2 = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0003_ip = 31; continue _fun0003;
case 4:
                    var3 = _closure2_slot10;
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var25.bind(var8)(var17, var20);
            var20 = var8.useEffect;
            var17 = new Array(3);
            var17[0] = var21;
            var17[1] = var9;
            var17[2] = var12;
            var9 = function() {
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
                        if(var8) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                        var8 = var7.routes;
                        var9 = var5 == var8;
                        var2 = undefined;
                        if(var9) { _fun0004_ip = 32; continue _fun0004 }
case 34:
                        var10 = var5 == var7;
                        var9 = undefined;
                        if(var10) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                        var9 = var7.index;
case 35:
                        var10 = var5 != var9;
                        var7 = 0;
                        if(!var10) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                        var7 = var9;
case 37:
                        var2 = var8[var7];
case 32:
                        var2 = var4.bind(var6)(var2);
                        if(!(var5 != var2)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                        var6 = _closure2_slot12;
                        if(!var6) { _fun0004_ip = 39; continue _fun0004 }
case 41:
                        var2 = var2.params;
                        var6 = var5 == var2;
                        var5 = undefined;
                        if(var6) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                        var5 = var2.drawerOpen;
case 42:
                        var2 = true;
                        var2 = var2 === var5;
                        var5 = _closure2_slot4;
                        var4 = 'closed';
                        if(!var2) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                        var4 = 'open';
case 44:
                        var4 = var5.bind(var1)(var4);
                        var4 = _closure1_slot7;
                        var3 = var4.getState;
                        var3 = var3.bind(var4)();
                        if(var2) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                        var2 = var3.stopTimer;
                        var2 = var2.bind(var3)();
                        _fun0004_ip = 39; continue _fun0004;
case 46:
                        var2 = var3.startTimer;
                        var2 = var2.bind(var3)();
case 39:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var4 = _closure2_slot9;
                var3 = var4.addListener;
                var2 = 'state';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure2_slot9;
                    var3 = var4.removeListener;
                    var2 = _closure3_slot0;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                    var2 = _closure1_slot7;
                    var1 = var2.getState;
                    var2 = var1.bind(var2)();
                    var1 = var2.stopTimer;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var9 = var20.bind(var8)(var9, var17);
            var9 = var8.useRef;
            var9 = var9.bind(var8)(var16);
            var _closure2_slot17 = var9;
            var16 = var8.useLayoutEffect;
            var9 = new Array(4);
            var9[0] = var12;
            var9[1] = var3;
            var9[2] = var18;
            var9[3] = var14;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot12;
                    if(!var2) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var3 = _closure2_slot17;
                    var3 = var3.current;
                    var2 = !var3;
case 48:
                    if(!var2) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var4 = _closure2_slot0;
                    var3 = var4.set;
                    var2 = _closure2_slot16;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot15;
                    if(!var2) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var3 = _closure1_slot7;
                    var2 = var3.getState;
                    var3 = var2.bind(var3)();
                    var2 = var3.startTimer;
                    var2 = var2.bind(var3)();
case 52:
                    var2 = _closure2_slot17;
                    var1 = true;
                    var2['current'] = var1;
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var16.bind(var8)(var3, var9);
            var16 = var8.useEffect;
            var9 = new Array(2);
            var9[0] = var12;
            var9[1] = var19;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot17;
                    var2 = var2.current;
                    if(!var2) { _fun0006_ip = 3; continue _fun0006 }
case 54:
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 3:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var16.bind(var8)(var3, var9);
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = var21[var6];
            var16 = var20.bind(var7)(var3);
            var9 = var16.useDerivedValue;
            var3 = function ue() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0007_ip = 51; continue _fun0007 }
case 55:
                    var1 = _closure2_slot16;
                    _fun0007_ip = 56; continue _fun0007;
case 51:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withSpring;
                    var7 = _closure2_slot0;
                    var4 = var7.get;
                    var4 = var4.bind(var7)();
                    var7 = _closure2_slot1;
                    var3 = var7.get;
                    var3 = var3.bind(var7)();
                    var3 = var3.active;
                    if(var3) { _fun0007_ip = 37; continue _fun0007 }
case 57:
                    var3 = _closure1_slot9;
                    _fun0007_ip = 32; continue _fun0007;
case 37:
                    var3 = _closure1_slot8;
case 32:
                    var2 = 'animate-always';
                    var1 = var5.bind(var6)(var4, var3, var2);
case 56:
                    return var1;
                }
            };
            var17 = {};
            var17['isDrawerInitialized'] = var19;
            var17['initialPanelX'] = var18;
            var19 = 13;
            var18 = var21[var19];
            var18 = var20.bind(var7)(var18);
            var18 = var18.withSpring;
            var17['withSpring'] = var18;
            var17['panelX'] = var14;
            var17['gestureState'] = var15;
            var18 = _closure1_slot8;
            var17['HOME_GESTURE_DRAG_PHYSICS'] = var18;
            var18 = _closure1_slot9;
            var17['HOME_DRAWER_FLING_PHYSICS'] = var18;
            var3['__closure'] = var17;
            var17 = 11078734703352.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot13;
            var3['__initData'] = var17;
            var25 = var9.bind(var16)(var3);
            var _closure2_slot18 = var25;
            var3 = var21[var6];
            var16 = var20.bind(var7)(var3);
            var9 = var16.useDerivedValue;
            var3 = function oe() {
                var3 = _closure2_slot18;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot13;
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
            var17 = _closure1_slot14;
            var3['__initData'] = var17;
            var23 = var9.bind(var16)(var3);
            var _closure2_slot19 = var23;
            var3 = var21[var6];
            var16 = var20.bind(var7)(var3);
            var9 = var16.useAnimatedStyle;
            var3 = function ce() {
                var1 = {};
                var2 = 1;
                var1['flex'] = var2;
                var3 = _closure2_slot11;
                var3 = var3.top;
                var1['marginTop'] = var3;
                var3 = {};
                var4 = _closure2_slot19;
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
            var17 = _closure1_slot15;
            var3['__initData'] = var17;
            var3 = var9.bind(var16)(var3);
            var _closure2_slot20 = var3;
            var9 = var21[var6];
            var17 = var20.bind(var7)(var9);
            var16 = var17.useAnimatedStyle;
            var9 = function Ie() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = 48;
                    var2 = var2 < var3;
                    var9 = 0;
                    var12 = 0;
                    if(!var2) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot14;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var2 / var3;
                    var4 = 12;
                    var2 = var2 * var4;
                    var12 = var5.bind(var6)(var4, var2);
case 58:
                    var4 = _closure2_slot14;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = 150;
                    var2 = var4 / var2;
                    var4 = _closure2_slot14;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var1 = var1 >= var3;
                    var13 = 0.98;
                    if(!var1) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var13 = 1;
case 60:
                    var1 = {};
                    var6 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 13;
                    var4 = var10[var3];
                    var7 = undefined;
                    var11 = var8.bind(var7)(var4);
                    var4 = var11.withSpring;
                    var5 = _closure1_slot9;
                    var4 = var4.bind(var11)(var12, var5);
                    var6['translateX'] = var4;
                    var4 = new Array(2);
                    var4[0] = var6;
                    var6 = {};
                    var11 = var10[var3];
                    var12 = var8.bind(var7)(var11);
                    var11 = var12.withSpring;
                    var11 = var11.bind(var12)(var13, var5);
                    var6['scale'] = var11;
                    var4[1] = var6;
                    var1['transform'] = var4;
                    var3 = var10[var3];
                    var4 = var8.bind(var7)(var3);
                    var3 = var4.withSpring;
                    var6 = 5;
                    var6 = var10[var6];
                    var8 = var8.bind(var7)(var6);
                    var7 = var8.clamp;
                    var6 = 1;
                    var2 = var2 * var6;
                    var2 = var9 + var2;
                    var2 = var7.bind(var8)(var2, var9, var6);
                    var2 = var3.bind(var4)(var2, var5);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var23 = {'drawerRevealX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'GUILD_DESCRIPTION_ANIMATION_DISTANCE': 12, 'MIN_HOME_DRAWER_TEXT_OPACITY': 0, 'MIN_HOME_DRAWER_OPEN_WIDTH': 150, 'GUILD_LABEL_UNSNAPPED_SCALE': 0.98};
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
            var23 = 11639414708115.0;
            var9['__workletHash'] = var23;
            var23 = _closure1_slot16;
            var9['__initData'] = var23;
            var9 = var16.bind(var17)(var9);
            var _closure2_slot21 = var9;
            var9 = var21[var6];
            var17 = var20.bind(var7)(var9);
            var16 = var17.useAnimatedStyle;
            var9 = function ge() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 48;
                    var3 = var3 < var2;
                    var6 = 0;
                    if(!var3) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var3 = global;
                    var4 = var3.Math;
                    var3 = var4.min;
                    var5 = _closure2_slot14;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1 / var2;
                    var2 = 8;
                    var1 = var1 * var2;
                    var6 = var3.bind(var4)(var2, var1);
case 62:
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.withSpring;
                    var2 = _closure1_slot9;
                    var2 = var4.bind(var5)(var6, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var23 = {'drawerRevealX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'MAX_HOME_DRAWER_ICON_DISTANCE': 8};
            var23['drawerRevealX'] = var22;
            var24 = var21[var19];
            var24 = var20.bind(var7)(var24);
            var24 = var24.withSpring;
            var23['withSpring'] = var24;
            var23['HOME_DRAWER_FLING_PHYSICS'] = var18;
            var9['__closure'] = var23;
            var23 = 16360618332998.0;
            var9['__workletHash'] = var23;
            var23 = _closure1_slot17;
            var9['__initData'] = var23;
            var9 = var16.bind(var17)(var9);
            var _closure2_slot22 = var9;
            var6 = var21[var6];
            var16 = var20.bind(var7)(var6);
            var9 = var16.useAnimatedStyle;
            var6 = function Se() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 48;
                    var3 = var3 < var2;
                    var6 = 0;
                    if(!var3) { _fun0010_ip = 64; continue _fun0010 }
case 63:
                    var3 = global;
                    var4 = var3.Math;
                    var3 = var4.min;
                    var5 = _closure2_slot14;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1 / var2;
                    var2 = 4;
                    var1 = var1 * var2;
                    var1 = var3.bind(var4)(var2, var1);
                    var6 = -var1;
case 64:
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.withSpring;
                    var2 = _closure1_slot9;
                    var2 = var4.bind(var5)(var6, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var17 = {'drawerRevealX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'UNREAD_INDICATOR_ANIMATION_DISTANCE': 4};
            var17['drawerRevealX'] = var22;
            var19 = var21[var19];
            var19 = var20.bind(var7)(var19);
            var19 = var19.withSpring;
            var17['withSpring'] = var19;
            var17['HOME_DRAWER_FLING_PHYSICS'] = var18;
            var6['__closure'] = var17;
            var17 = 8561772429103.0;
            var6['__workletHash'] = var17;
            var17 = _closure1_slot18;
            var6['__initData'] = var17;
            var6 = var9.bind(var16)(var6);
            var _closure2_slot23 = var6;
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
                var2 = _closure2_slot12;
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
                var2 = function _(arg1) {
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
                var6 = _closure1_slot23;
                var2['__initData'] = var6;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onTouchesMove;
                var2 = function s(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.active;
                        if(var3) { _fun0011_ip = 65; continue _fun0011 }
case 66:
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
                        if(var1) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                        var6 = _closure2_slot0;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var3 === var4;
                        if(!var4) { _fun0011_ip = 69; continue _fun0011 }
case 70:
                        var8 = _closure2_slot1;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var6.initialX;
                        var4 = var7 < var6;
case 69:
                        var1 = var4;
case 67:
                        if(var1) { _fun0011_ip = 71; continue _fun0011 }
case 72:
                        var6 = _closure2_slot0;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var4 > var3;
                        if(!var4) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                        var8 = _closure2_slot1;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var6.initialX;
                        var4 = var7 > var6;
case 73:
                        var1 = var4;
case 71:
                        if(!var1) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
case 75:
                        var4 = _closure2_slot0;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = var3 === var1;
                        if(!var1) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.initialX;
                        var1 = var7 > var3;
case 77:
                        if(var1) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.initialX;
                        var1 = var7 < var3;
case 79:
                        if(!var1) { _fun0011_ip = 65; continue _fun0011 }
case 81:
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
case 65:
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
                var6 = _closure1_slot22;
                var2['__initData'] = var6;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onChange;
                var2 = function n(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.active;
                        if(!var2) { _fun0012_ip = 82; continue _fun0012 }
case 63:
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
                        if(!(var6 === var2)) { _fun0012_ip = 83; continue _fun0012 }
case 84:
                        if(!(var3 >= var6)) { _fun0012_ip = 83; continue _fun0012 }
case 9:
                        var2 = 144;
                        if(!(!(var3 < var2))) { _fun0012_ip = 85; continue _fun0012 }
case 83:
                        var4 = _closure2_slot0;
                        var3 = var4.set;
                        var2 = global;
                        var5 = var2.Math;
                        var2 = var5.max;
                        var2 = var2.bind(var5)(var7, var6);
                        var2 = var3.bind(var4)(var2);
                        _fun0012_ip = 82; continue _fun0012;
case 85:
                        var3 = _closure2_slot0;
                        var2 = var3.set;
                        var1 = global;
                        var5 = var1.Math;
                        var4 = var5.max;
                        var1 = 3;
                        var1 = var7 / var1;
                        var1 = var4.bind(var5)(var1, var6);
                        var1 = var2.bind(var3)(var1);
case 82:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = {};
                var9['gestureState'] = var7;
                var6 = _closure2_slot7;
                var9['dragOffsetX'] = var6;
                var14 = 144;
                var9['INITIAL_OPEN_WIDTH'] = var14;
                var9['panelX'] = var15;
                var14 = 3;
                var9['DRAWER_RESISTANCE'] = var14;
                var2['__closure'] = var9;
                var9 = 14987365733436.0;
                var2['__workletHash'] = var9;
                var9 = _closure1_slot21;
                var2['__initData'] = var9;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onEnd;
                var2 = function t(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var7 = arg1;
                        var2 = var7.velocityX;
                        var1 = 50;
                        if(!(var2 > var1)) { _fun0013_ip = 86; continue _fun0013 }
case 87:
                        var3 = _closure2_slot7;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = 40;
                        if(!(!(var3 > var2))) { _fun0013_ip = 88; continue _fun0013 }
case 86:
                        var3 = var7.velocityX;
                        var2 = -50;
                        if(!(var3 < var2)) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                        var3 = _closure2_slot7;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = -40;
                        if(!(!(var3 < var2))) { _fun0013_ip = 91; continue _fun0013 }
case 89:
                        var3 = _closure2_slot0;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var6 = 0;
                        var3 = var6 !== var2;
                        if(!var3) { _fun0013_ip = 92; continue _fun0013 }
case 93:
                        var4 = _closure2_slot0;
                        var2 = var4.get;
                        var4 = var2.bind(var4)();
                        var8 = _closure2_slot3;
                        var2 = 0.5;
                        var2 = var2 * var8;
                        var2 = var4 > var2;
                        if(var2) { _fun0013_ip = 94; continue _fun0013 }
case 95:
                        var8 = _closure2_slot0;
                        var4 = var8.get;
                        var8 = var4.bind(var8)();
                        var4 = 144;
                        var4 = var8 >= var4;
                        if(!var4) { _fun0013_ip = 96; continue _fun0013 }
case 70:
                        var7 = var7.absoluteX;
                        var8 = _closure2_slot1;
                        var5 = var8.get;
                        var5 = var5.bind(var8)();
                        var5 = var5.initialX;
                        var5 = var7 - var5;
                        var4 = var5 > var6;
case 96:
                        var2 = var4;
case 94:
                        var3 = var2;
case 92:
                        _fun0013_ip = 97; continue _fun0013;
case 91:
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
                        var2 = var2.SOFT;
                        var2 = var4.bind(var5)(var2);
                        var3 = false;
                        _fun0013_ip = 97; continue _fun0013;
case 88:
                        var2 = _closure2_slot7;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = 144;
                        var2 = var2 < var1;
                        var3 = true;
                        if(!var2) { _fun0013_ip = 97; continue _fun0013 }
case 98:
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
case 97:
                        var4 = _closure2_slot0;
                        var2 = var4.set;
                        var1 = 0;
                        if(!var3) { _fun0013_ip = 99; continue _fun0013 }
case 100:
                        var1 = _closure2_slot3;
case 99:
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
                var14 = {'FLING_MIN_VELOCITY': 50, 'dragOffsetX': null, 'FLING_MIN_DISTANCE': 40, 'INITIAL_OPEN_WIDTH': 144};
                var14['dragOffsetX'] = var6;
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
                var14 = 10591277765330.0;
                var2['__workletHash'] = var14;
                var14 = _closure1_slot20;
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
                var4 = _closure1_slot19;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var9.bind(var8)(var4, var6);
            var _closure2_slot24 = var4;
            var6 = var8.useState;
            var5 = function() {
                var1 = {};
                var3 = _closure2_slot24;
                var1['gesture'] = var3;
                var3 = _closure2_slot20;
                var1['panelStyles'] = var3;
                var3 = _closure2_slot1;
                var1['gestureState'] = var3;
                var3 = _closure2_slot0;
                var1['panelX'] = var3;
                var3 = _closure2_slot19;
                var1['panelSpringTranslateX'] = var3;
                var3 = _closure2_slot21;
                var1['guildsBarLabelDrawerStyle'] = var3;
                var3 = _closure2_slot22;
                var1['guildsBarIconDrawerStyle'] = var3;
                var2 = _closure2_slot23;
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