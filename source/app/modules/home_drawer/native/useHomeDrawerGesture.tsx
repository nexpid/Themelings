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
    var6 = "function useHomeDrawerGestureTsx3(){const{safeAreaInsets,withSpring,panelX,gestureState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{flex:1,marginTop:safeAreaInsets.top,transform:[{translateX:withSpring(panelX.get(),gestureState.get().active?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always')}]};}";
    var2['code'] = var6;
    var _closure1_slot11 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx4(){const{panelX,MAX_HOME_DRAWER_ANIMATING_WIDTH,GUILD_DESCRIPTION_ANIMATION_DISTANCE,MIN_HOME_DRAWER_TEXT_OPACITY,MIN_HOME_DRAWER_OPEN_WIDTH,withSpring,HOME_DRAWER_FLING_PHYSICS,clamp}=this.__closure;let x=0;if(panelX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(GUILD_DESCRIPTION_ANIMATION_DISTANCE,panelX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*GUILD_DESCRIPTION_ANIMATION_DISTANCE);}const opacity=MIN_HOME_DRAWER_TEXT_OPACITY+panelX.get()/MIN_HOME_DRAWER_OPEN_WIDTH*(1-MIN_HOME_DRAWER_TEXT_OPACITY);return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)}],opacity:withSpring(clamp(opacity,0,1),HOME_DRAWER_FLING_PHYSICS)};}';
    var2['code'] = var6;
    var _closure1_slot12 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx5(){const{panelX,MAX_HOME_DRAWER_ANIMATING_WIDTH,MAX_HOME_DRAWER_ICON_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let x=0;if(panelX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(MAX_HOME_DRAWER_ICON_DISTANCE,panelX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*MAX_HOME_DRAWER_ICON_DISTANCE);}return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)}]};}';
    var2['code'] = var6;
    var _closure1_slot13 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx6(){const{panelX,MAX_HOME_DRAWER_ANIMATING_WIDTH,UNREAD_INDICATOR_ANIMATION_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let left=0;if(panelX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){left=-Math.min(UNREAD_INDICATOR_ANIMATION_DISTANCE,panelX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*UNREAD_INDICATOR_ANIMATION_DISTANCE);}return{transform:[{translateX:withSpring(left,HOME_DRAWER_FLING_PHYSICS)}]};}';
    var2['code'] = var6;
    var _closure1_slot14 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx7(){const{gestureState,dragOffsetX}=this.__closure;gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);}';
    var2['code'] = var6;
    var _closure1_slot15 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx8(event){const{runOnJS,setHomeDrawerState,panelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,gestureState}=this.__closure;if(event.velocityX>50){runOnJS(setHomeDrawerState)(true);}else if(event.velocityX<-50){runOnJS(setHomeDrawerState)(false);}else{if(panelX.get()===0){runOnJS(setHomeDrawerState)(false);}else if(panelX.get()>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX){runOnJS(setHomeDrawerState)(true);}else if(panelX.get()>=INITIAL_OPEN_WIDTH&&event.absoluteX-gestureState.get().initialX>0){runOnJS(setHomeDrawerState)(true);}else{runOnJS(setHomeDrawerState)(false);}}}';
    var2['code'] = var6;
    var _closure1_slot16 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx9(event){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH,panelX,DRAWER_RESISTANCE}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);if(newXOffset>=INITIAL_OPEN_WIDTH){panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}else{panelX.set(Math.max((newXOffset+gestureState.get().panelX)/DRAWER_RESISTANCE,0));}}';
    var2['code'] = var6;
    var _closure1_slot17 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx10(event,manager){const{gestureState,panelX}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);if(absoluteYDiff>absoluteXDiff||panelX.get()===0&&touchX<gestureState.get().initialX||panelX.get()>0&&touchX>gestureState.get().initialX){manager.fail();}if(panelX.get()===0&&touchX>gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}else if(touchX<gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}}';
    var2['code'] = var6;
    var _closure1_slot18 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx11(event){const{gestureState,panelX}=this.__closure;gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()});}';
    var2['code'] = var6;
    var _closure1_slot19 = var2;
    var6 = var9.createContext;
    var2 = {};
    var10 = 13;
    var10 = var8[var10];
    var10 = var7.bind(var1)(var10);
    var11 = var10.Gesture;
    var10 = var11.Pan;
    var10 = var10.bind(var11)();
    var2['gesture'] = var10;
    var10 = {};
    var2['panelStyles'] = var10;
    var10 = 14;
    var11 = var8[var10];
    var14 = var7.bind(var1)(var11);
    var13 = var14.createFakeSharedValue;
    var11 = {'active': false, 'initialX': 0, 'initialY': 0, 'panelX': 0};
    var11 = var13.bind(var14)(var11);
    var2['gestureState'] = var11;
    var10 = var8[var10];
    var11 = var7.bind(var1)(var10);
    var10 = var11.createFakeSharedValue;
    var10 = var10.bind(var11)(var12);
    var2['panelX'] = var10;
    var10 = {};
    var2['guildsBarLabelDrawerStyle'] = var10;
    var10 = {};
    var2['guildsBarIconDrawerStyle'] = var10;
    var10 = {};
    var2['guildsBarUnreadDrawerStyle'] = var10;
    var2 = var6.bind(var9)(var2);
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/home_drawer/native/useHomeDrawerGesture.tsx';
    var6 = var7.bind(var8)(var6);
    var3['HOME_DRAWER_FLING_PHYSICS'] = var5;
    var4 = function useHomeGesture() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var21 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 4;
            var2 = var17[var2];
            var7 = undefined;
            var2 = var21.bind(var7)(var2);
            var4 = var2.MobileHomeDrawerExperiment;
            var3 = var4.useConfig;
            var2 = {};
            var6 = 'gesture';
            var2['location'] = var6;
            var2 = var3.bind(var4)(var2);
            var10 = var2.enableHome;
            var2 = _closure1_slot5;
            var2 = var2.bind(var7)();
            var12 = var2.panelX;
            var _closure2_slot0 = var12;
            var13 = var2.gestureState;
            var _closure2_slot1 = var13;
            var9 = var2.updateMaxX;
            var _closure2_slot2 = var9;
            var4 = var2.maxX;
            var _closure2_slot3 = var4;
            var3 = var2.setPanelX;
            var _closure2_slot4 = var3;
            var6 = 5;
            var2 = var17[var6];
            var11 = var21.bind(var7)(var2);
            var8 = var11.useSharedValue;
            var2 = 0;
            var11 = var8.bind(var11)(var2);
            var _closure2_slot5 = var11;
            var8 = 6;
            var8 = var17[var8];
            var14 = var21.bind(var7)(var8);
            var8 = var14.useNavigation;
            var15 = var8.bind(var14)();
            var _closure2_slot6 = var15;
            var8 = var17[var6];
            var18 = var21.bind(var7)(var8);
            var16 = var18.useAnimatedReaction;
            var14 = function R() {
                var2 = _closure2_slot5;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 144;
                var1 = var2 >= var1;
                return var1;
            };
            var8 = {};
            var8['dragOffsetX'] = var11;
            var19 = 144;
            var8['INITIAL_OPEN_WIDTH'] = var19;
            var14['__closure'] = var8;
            var8 = 2525772891435.0;
            var14['__workletHash'] = var8;
            var8 = _closure1_slot9;
            var14['__initData'] = var8;
            var8 = function N(arg1, arg2) {
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
            var19 = {};
            var19['gestureState'] = var13;
            var20 = var17[var6];
            var20 = var21.bind(var7)(var20);
            var20 = var20.runOnJS;
            var19['runOnJS'] = var20;
            var20 = 7;
            var22 = var17[var20];
            var22 = var21.bind(var7)(var22);
            var22 = var22.triggerHapticFeedback;
            var19['triggerHapticFeedback'] = var22;
            var20 = var17[var20];
            var20 = var21.bind(var7)(var20);
            var20 = var20.HapticFeedbackTypes;
            var19['HapticFeedbackTypes'] = var20;
            var8['__closure'] = var19;
            var19 = 11947599708940.0;
            var8['__workletHash'] = var19;
            var19 = _closure1_slot10;
            var8['__initData'] = var19;
            var8 = var16.bind(var18)(var14, var8);
            var14 = _closure1_slot1;
            var8 = 8;
            var8 = var17[var8];
            var8 = var14.bind(var7)(var8);
            var18 = var8.bind(var7)();
            var _closure2_slot7 = var18;
            var8 = 9;
            var8 = var17[var8];
            var8 = var14.bind(var7)(var8);
            var16 = var8.bind(var7)();
            var _closure2_slot8 = var16;
            var8 = 10;
            var8 = var17[var8];
            var8 = var14.bind(var7)(var8);
            var8 = var8.bind(var7)();
            var8 = var8.isChatBesideChannelList;
            if(!var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = !var8;
case 10:
            var _closure2_slot9 = var10;
            var8 = _closure1_slot4;
            var17 = var8.useEffect;
            var14 = new Array(4);
            var14[0] = var18;
            var14[1] = var16;
            var14[2] = var9;
            var14[3] = var10;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var4 = _closure2_slot2;
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 12:
                    var5 = undefined;
                    var3 = {'width': 0, 'height': 0};
                    var2 = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0003_ip = 13; continue _fun0003;
case 4:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var17.bind(var8)(var9, var14);
            var14 = var8.useEffect;
            var9 = new Array(3);
            var9[0] = var15;
            var9[1] = var3;
            var9[2] = var10;
            var3 = function() {
                var5 = function handleStateChange(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var7 = var1.state;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var2);
                        var4 = var6.coerceGuildsRoute;
                        var5 = null;
                        var8 = var5 == var7;
                        var2 = undefined;
                        if(var8) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var8 = var7.routes;
                        var9 = var5 == var8;
                        var2 = undefined;
                        if(var9) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                        var10 = var5 == var7;
                        var9 = undefined;
                        if(var10) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var9 = var7.index;
case 17:
                        var10 = var5 != var9;
                        var7 = 0;
                        if(!var10) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var7 = var9;
case 19:
                        var2 = var8[var7];
case 14:
                        var2 = var4.bind(var6)(var2);
                        if(!(var5 != var2)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var6 = _closure2_slot9;
                        if(!var6) { _fun0004_ip = 21; continue _fun0004 }
case 23:
                        var2 = var2.params;
                        var6 = var5 == var2;
                        var5 = undefined;
                        if(var6) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                        var5 = var2.drawerOpen;
case 24:
                        var2 = true;
                        var2 = var2 === var5;
                        var5 = _closure2_slot4;
                        var4 = 'closed';
                        if(!var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var4 = 'open';
case 26:
                        var4 = var5.bind(var1)(var4);
                        var4 = _closure1_slot6;
                        var3 = var4.getState;
                        var3 = var3.bind(var4)();
                        if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var2 = var3.stopTimer;
                        var2 = var2.bind(var3)();
                        _fun0004_ip = 21; continue _fun0004;
case 28:
                        var2 = var3.startTimer;
                        var2 = var2.bind(var3)();
case 21:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var4 = _closure2_slot6;
                var3 = var4.addListener;
                var2 = 'state';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure2_slot6;
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
            var3 = var14.bind(var8)(var3, var9);
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = var19[var6];
            var14 = var18.bind(var7)(var3);
            var9 = var14.useAnimatedStyle;
            var3 = function L() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var2 = 1;
                    var1['flex'] = var2;
                    var2 = _closure2_slot8;
                    var2 = var2.top;
                    var1['marginTop'] = var2;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 12;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.withSpring;
                    var8 = _closure2_slot0;
                    var5 = var8.get;
                    var5 = var5.bind(var8)();
                    var8 = _closure2_slot1;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var4 = var4.active;
                    if(var4) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var4 = _closure1_slot8;
                    _fun0005_ip = 32; continue _fun0005;
case 30:
                    var4 = _closure1_slot7;
case 32:
                    var2 = 'animate-always';
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var15['safeAreaInsets'] = var16;
            var17 = 12;
            var16 = var19[var17];
            var16 = var18.bind(var7)(var16);
            var16 = var16.withSpring;
            var15['withSpring'] = var16;
            var15['panelX'] = var12;
            var15['gestureState'] = var13;
            var16 = _closure1_slot7;
            var15['HOME_GESTURE_DRAG_PHYSICS'] = var16;
            var16 = _closure1_slot8;
            var15['HOME_DRAWER_FLING_PHYSICS'] = var16;
            var3['__closure'] = var15;
            var15 = 3028612476336.0;
            var3['__workletHash'] = var15;
            var15 = _closure1_slot11;
            var3['__initData'] = var15;
            var3 = var9.bind(var14)(var3);
            var _closure2_slot10 = var3;
            var9 = var19[var6];
            var15 = var18.bind(var7)(var9);
            var14 = var15.useAnimatedStyle;
            var9 = function y() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = 48;
                    var2 = var2 < var3;
                    var9 = 0;
                    var12 = 0;
                    if(!var2) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.min;
                    var6 = _closure2_slot0;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var2 = var2 / var3;
                    var3 = 18;
                    var2 = var2 * var3;
                    var12 = var4.bind(var5)(var3, var2);
case 33:
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 150;
                    var10 = var2 / var1;
                    var1 = {};
                    var4 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 12;
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
            var20 = {'panelX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'GUILD_DESCRIPTION_ANIMATION_DISTANCE': 18, 'MIN_HOME_DRAWER_TEXT_OPACITY': 0.1, 'MIN_HOME_DRAWER_OPEN_WIDTH': 150};
            var20['panelX'] = var12;
            var21 = var19[var17];
            var21 = var18.bind(var7)(var21);
            var21 = var21.withSpring;
            var20['withSpring'] = var21;
            var20['HOME_DRAWER_FLING_PHYSICS'] = var16;
            var21 = var19[var6];
            var21 = var18.bind(var7)(var21);
            var21 = var21.clamp;
            var20['clamp'] = var21;
            var9['__closure'] = var20;
            var20 = 9071438150323.0;
            var9['__workletHash'] = var20;
            var20 = _closure1_slot12;
            var9['__initData'] = var20;
            var9 = var14.bind(var15)(var9);
            var _closure2_slot11 = var9;
            var9 = var19[var6];
            var15 = var18.bind(var7)(var9);
            var14 = var15.useAnimatedStyle;
            var9 = function k() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 48;
                    var3 = var3 < var2;
                    var6 = 0;
                    if(!var3) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                    var3 = global;
                    var4 = var3.Math;
                    var3 = var4.min;
                    var5 = _closure2_slot0;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1 / var2;
                    var2 = 12;
                    var1 = var1 * var2;
                    var6 = var3.bind(var4)(var2, var1);
case 35:
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 12;
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
            var20 = {'panelX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'MAX_HOME_DRAWER_ICON_DISTANCE': 12};
            var20['panelX'] = var12;
            var21 = var19[var17];
            var21 = var18.bind(var7)(var21);
            var21 = var21.withSpring;
            var20['withSpring'] = var21;
            var20['HOME_DRAWER_FLING_PHYSICS'] = var16;
            var9['__closure'] = var20;
            var20 = 8112582996611.0;
            var9['__workletHash'] = var20;
            var20 = _closure1_slot13;
            var9['__initData'] = var20;
            var9 = var14.bind(var15)(var9);
            var _closure2_slot12 = var9;
            var6 = var19[var6];
            var14 = var18.bind(var7)(var6);
            var9 = var14.useAnimatedStyle;
            var6 = function J() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 48;
                    var3 = var3 < var2;
                    var6 = 0;
                    if(!var3) { _fun0008_ip = 37; continue _fun0008 }
case 36:
                    var3 = global;
                    var4 = var3.Math;
                    var3 = var4.min;
                    var5 = _closure2_slot0;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1 / var2;
                    var2 = 6;
                    var1 = var1 * var2;
                    var1 = var3.bind(var4)(var2, var1);
                    var6 = -var1;
case 37:
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 12;
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
            var15 = {'panelX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'UNREAD_INDICATOR_ANIMATION_DISTANCE': 6};
            var15['panelX'] = var12;
            var17 = var19[var17];
            var17 = var18.bind(var7)(var17);
            var17 = var17.withSpring;
            var15['withSpring'] = var17;
            var15['HOME_DRAWER_FLING_PHYSICS'] = var16;
            var6['__closure'] = var15;
            var15 = 2707689244264.0;
            var6['__workletHash'] = var15;
            var15 = _closure1_slot14;
            var6['__initData'] = var15;
            var6 = var9.bind(var14)(var6);
            var _closure2_slot13 = var6;
            var9 = var8.useMemo;
            var6 = new Array(5);
            var6[0] = var13;
            var6[1] = var12;
            var6[2] = var11;
            var6[3] = var10;
            var6[4] = var4;
            var4 = function() {
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 13;
                var2 = var15[var2];
                var13 = undefined;
                var2 = var14.bind(var13)(var2);
                var3 = var2.Gesture;
                var2 = var3.Pan;
                var5 = var2.bind(var3)();
                var3 = var5.enabled;
                var2 = _closure2_slot9;
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
                var7 = _closure2_slot1;
                var6['gestureState'] = var7;
                var11 = _closure2_slot0;
                var6['panelX'] = var11;
                var2['__closure'] = var6;
                var6 = 12233334043271.0;
                var2['__workletHash'] = var6;
                var6 = _closure1_slot19;
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
                        if(var3) { _fun0009_ip = 38; continue _fun0009 }
case 39:
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
                        if(var1) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                        var6 = _closure2_slot0;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var3 === var4;
                        if(!var4) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                        var8 = _closure2_slot1;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var6.initialX;
                        var4 = var7 < var6;
case 42:
                        var1 = var4;
case 40:
                        if(var1) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                        var6 = _closure2_slot0;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var4 > var3;
                        if(!var4) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                        var8 = _closure2_slot1;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var6.initialX;
                        var4 = var7 > var6;
case 46:
                        var1 = var4;
case 44:
                        if(!var1) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
case 48:
                        var4 = _closure2_slot0;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = var3 === var1;
                        if(!var1) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.initialX;
                        var1 = var7 > var3;
case 50:
                        if(var1) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.initialX;
                        var1 = var7 < var3;
case 52:
                        if(!var1) { _fun0009_ip = 38; continue _fun0009 }
case 54:
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
case 38:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = {};
                var6['gestureState'] = var7;
                var6['panelX'] = var11;
                var2['__closure'] = var6;
                var6 = 11497858108220.0;
                var2['__workletHash'] = var6;
                var6 = _closure1_slot18;
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
                        if(!var2) { _fun0010_ip = 55; continue _fun0010 }
case 36:
                        var2 = arg1;
                        var3 = var2.absoluteX;
                        var4 = _closure2_slot1;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var2 = var2.initialX;
                        var4 = var3 - var2;
                        var3 = _closure2_slot5;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4);
                        var2 = 144;
                        if(!(!(var4 >= var2))) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                        var5 = _closure2_slot0;
                        var3 = var5.set;
                        var2 = global;
                        var8 = var2.Math;
                        var7 = var8.max;
                        var6 = _closure2_slot1;
                        var2 = var6.get;
                        var2 = var2.bind(var6)();
                        var2 = var2.panelX;
                        var6 = var4 + var2;
                        var2 = 3;
                        var6 = var6 / var2;
                        var2 = 0;
                        var2 = var7.bind(var8)(var6, var2);
                        var2 = var3.bind(var5)(var2);
                        _fun0010_ip = 55; continue _fun0010;
case 56:
                        var3 = _closure2_slot0;
                        var2 = var3.set;
                        var5 = global;
                        var6 = var5.Math;
                        var5 = var6.max;
                        var7 = _closure2_slot1;
                        var1 = var7.get;
                        var1 = var1.bind(var7)();
                        var1 = var1.panelX;
                        var4 = var4 + var1;
                        var1 = 0;
                        var1 = var5.bind(var6)(var4, var1);
                        var1 = var2.bind(var3)(var1);
case 55:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = {};
                var8['gestureState'] = var7;
                var6 = _closure2_slot5;
                var8['dragOffsetX'] = var6;
                var9 = 144;
                var8['INITIAL_OPEN_WIDTH'] = var9;
                var8['panelX'] = var11;
                var12 = 3;
                var8['DRAWER_RESISTANCE'] = var12;
                var2['__closure'] = var8;
                var8 = 15721468150530.0;
                var2['__workletHash'] = var8;
                var8 = _closure1_slot17;
                var2['__initData'] = var8;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onEnd;
                var2 = function t(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var2 = var3.velocityX;
                        var1 = 50;
                        if(!(!(var2 > var1))) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                        var2 = var3.velocityX;
                        var1 = -50;
                        if(!(!(var2 < var1))) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                        var4 = _closure2_slot0;
                        var2 = var4.get;
                        var4 = var2.bind(var4)();
                        var2 = 0;
                        if(!(var2 !== var4)) { _fun0011_ip = 60; continue _fun0011 }
case 62:
                        var5 = _closure2_slot0;
                        var4 = var5.get;
                        var5 = var4.bind(var5)();
                        var6 = _closure2_slot3;
                        var4 = 0.5;
                        var4 = var4 * var6;
                        if(!(!(var5 > var4))) { _fun0011_ip = 63; continue _fun0011 }
case 30:
                        var5 = _closure2_slot0;
                        var4 = var5.get;
                        var5 = var4.bind(var5)();
                        var4 = 144;
                        if(!(var5 >= var4)) { _fun0011_ip = 64; continue _fun0011 }
case 9:
                        var3 = var3.absoluteX;
                        var4 = _closure2_slot1;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = var1.initialX;
                        var1 = var3 - var1;
                        if(!(!(var1 > var2))) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 5;
                        var1 = var6[var1];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = 11;
                        var1 = var6[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.setHomeDrawerState;
                        var2 = var2.bind(var4)(var1);
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        _fun0011_ip = 65; continue _fun0011;
case 63:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 5;
                        var1 = var6[var1];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = 11;
                        var1 = var6[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.setHomeDrawerState;
                        var2 = var2.bind(var4)(var1);
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
                        _fun0011_ip = 65; continue _fun0011;
case 60:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 5;
                        var1 = var6[var1];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = 11;
                        var1 = var6[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.setHomeDrawerState;
                        var2 = var2.bind(var4)(var1);
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        _fun0011_ip = 65; continue _fun0011;
case 58:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 5;
                        var1 = var6[var1];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = 11;
                        var1 = var6[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.setHomeDrawerState;
                        var2 = var2.bind(var4)(var1);
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
case 65:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = {};
                var12 = 5;
                var12 = var15[var12];
                var12 = var14.bind(var13)(var12);
                var12 = var12.runOnJS;
                var8['runOnJS'] = var12;
                var12 = 11;
                var12 = var15[var12];
                var12 = var14.bind(var13)(var12);
                var12 = var12.setHomeDrawerState;
                var8['setHomeDrawerState'] = var12;
                var8['panelX'] = var11;
                var11 = 0.5;
                var8['FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN'] = var11;
                var10 = _closure2_slot3;
                var8['maxX'] = var10;
                var8['INITIAL_OPEN_WIDTH'] = var9;
                var8['gestureState'] = var7;
                var2['__closure'] = var8;
                var8 = 3807234575610.0;
                var2['__workletHash'] = var8;
                var8 = _closure1_slot16;
                var2['__initData'] = var8;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onFinalize;
                var1 = function e() {
                    var5 = _closure2_slot1;
                    var4 = var5.set;
                    var3 = 0;
                    var2 = {'active': false, 'initialX': 0, 'initialY': 0, 'panelX': 0};
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure2_slot5;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                };
                var5 = {};
                var5['gestureState'] = var7;
                var5['dragOffsetX'] = var6;
                var1['__closure'] = var5;
                var5 = 14058675924338.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot15;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var9.bind(var8)(var4, var6);
            var _closure2_slot14 = var4;
            var6 = var8.useState;
            var5 = function() {
                var1 = {};
                var3 = _closure2_slot14;
                var1['gesture'] = var3;
                var3 = _closure2_slot10;
                var1['panelStyles'] = var3;
                var3 = _closure2_slot1;
                var1['gestureState'] = var3;
                var3 = _closure2_slot0;
                var1['panelX'] = var3;
                var3 = _closure2_slot11;
                var1['guildsBarLabelDrawerStyle'] = var3;
                var3 = _closure2_slot12;
                var1['guildsBarIconDrawerStyle'] = var3;
                var2 = _closure2_slot13;
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