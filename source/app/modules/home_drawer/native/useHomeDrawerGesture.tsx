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
    var6 = "function useHomeDrawerGestureTsx1(){const{safeAreaInsets,withSpring,panelX,gestureState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{flex:1,marginTop:safeAreaInsets.top,transform:[{translateX:withSpring(panelX.get(),gestureState.get().active?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always')}]};}";
    var2['code'] = var6;
    var _closure1_slot9 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx2(){const{panelX,MAX_HOME_DRAWER_ANIMATING_WIDTH,GUILD_DESCRIPTION_ANIMATION_DISTANCE,MIN_HOME_DRAWER_TEXT_OPACITY,MIN_HOME_DRAWER_OPEN_WIDTH,withSpring,HOME_DRAWER_FLING_PHYSICS,clamp}=this.__closure;let x=0;if(panelX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(GUILD_DESCRIPTION_ANIMATION_DISTANCE,panelX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*GUILD_DESCRIPTION_ANIMATION_DISTANCE);}const opacity=MIN_HOME_DRAWER_TEXT_OPACITY+panelX.get()/MIN_HOME_DRAWER_OPEN_WIDTH*(1-MIN_HOME_DRAWER_TEXT_OPACITY);return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)}],opacity:withSpring(clamp(opacity,0,1),HOME_DRAWER_FLING_PHYSICS)};}';
    var2['code'] = var6;
    var _closure1_slot10 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx3(){const{panelX,MAX_HOME_DRAWER_ANIMATING_WIDTH,MAX_HOME_DRAWER_ICON_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let x=0;if(panelX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(MAX_HOME_DRAWER_ICON_DISTANCE,panelX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*MAX_HOME_DRAWER_ICON_DISTANCE);}return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)}]};}';
    var2['code'] = var6;
    var _closure1_slot11 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx4(){const{panelX,MAX_HOME_DRAWER_ANIMATING_WIDTH,UNREAD_INDICATOR_ANIMATION_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let left=0;if(panelX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){left=-Math.min(UNREAD_INDICATOR_ANIMATION_DISTANCE,panelX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*UNREAD_INDICATOR_ANIMATION_DISTANCE);}return{transform:[{translateX:withSpring(left,HOME_DRAWER_FLING_PHYSICS)}]};}';
    var2['code'] = var6;
    var _closure1_slot12 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx5(){const{gestureState}=this.__closure;gestureState.set({active:false,initialX:0,initialY:0,panelX:0});}';
    var2['code'] = var6;
    var _closure1_slot13 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx6(event){const{runOnJS,setHomeDrawerState,panelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,gestureState}=this.__closure;if(event.velocityX>50){runOnJS(setHomeDrawerState)(true);}else if(event.velocityX<-50){runOnJS(setHomeDrawerState)(false);}else{if(panelX.get()===0){runOnJS(setHomeDrawerState)(false);}else if(panelX.get()>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX){runOnJS(setHomeDrawerState)(true);}else if(panelX.get()>=INITIAL_OPEN_WIDTH&&event.absoluteX-gestureState.get().initialX>0){runOnJS(setHomeDrawerState)(true);}else{runOnJS(setHomeDrawerState)(false);}}}';
    var2['code'] = var6;
    var _closure1_slot14 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx7(event){const{gestureState,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,panelX,DRAWER_RESISTANCE}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;const changeX=event.changeX;if(changeX>0){if(newXOffset>=INITIAL_OPEN_WIDTH&&newXOffset-changeX<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else{if(newXOffset<INITIAL_OPEN_WIDTH&&newXOffset-changeX>=INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}if(newXOffset>=INITIAL_OPEN_WIDTH){panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}else{panelX.set(Math.max((newXOffset+gestureState.get().panelX)/DRAWER_RESISTANCE,0));}}';
    var2['code'] = var6;
    var _closure1_slot15 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx8(event,manager){const{gestureState,panelX}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);if(absoluteYDiff>absoluteXDiff||panelX.get()===0&&touchX<gestureState.get().initialX||panelX.get()>0&&touchX>gestureState.get().initialX){manager.fail();}if(panelX.get()===0&&touchX>gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}else if(touchX<gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}}';
    var2['code'] = var6;
    var _closure1_slot16 = var2;
    var2 = {};
    var6 = 'function useHomeDrawerGestureTsx9(event){const{gestureState,panelX}=this.__closure;gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()});}';
    var2['code'] = var6;
    var _closure1_slot17 = var2;
    var6 = var9.createContext;
    var2 = {};
    var10 = 12;
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
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 4;
            var3 = var13[var3];
            var6 = undefined;
            var3 = var8.bind(var6)(var3);
            var5 = var3.MobileHomeDrawerExperiment;
            var4 = var5.useConfig;
            var3 = {};
            var7 = 'gesture';
            var3['location'] = var7;
            var3 = var4.bind(var5)(var3);
            var9 = var3.enableHome;
            var3 = _closure1_slot5;
            var3 = var3.bind(var6)();
            var10 = var3.panelX;
            var _closure2_slot0 = var10;
            var11 = var3.gestureState;
            var _closure2_slot1 = var11;
            var5 = var3.updateMaxX;
            var _closure2_slot2 = var5;
            var4 = var3.maxX;
            var _closure2_slot3 = var4;
            var3 = var3.setPanelX;
            var _closure2_slot4 = var3;
            var7 = 5;
            var7 = var13[var7];
            var8 = var8.bind(var6)(var7);
            var7 = var8.useNavigation;
            var12 = var7.bind(var8)();
            var _closure2_slot5 = var12;
            var8 = _closure1_slot1;
            var7 = 6;
            var7 = var13[var7];
            var7 = var8.bind(var6)(var7);
            var15 = var7.bind(var6)();
            var _closure2_slot6 = var15;
            var7 = 7;
            var7 = var13[var7];
            var7 = var8.bind(var6)(var7);
            var14 = var7.bind(var6)();
            var _closure2_slot7 = var14;
            var7 = 8;
            var7 = var13[var7];
            var7 = var8.bind(var6)(var7);
            var7 = var7.bind(var6)();
            var7 = var7.isChatBesideChannelList;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = !var7;
case 2:
            var _closure2_slot8 = var9;
            var7 = _closure1_slot4;
            var13 = var7.useEffect;
            var8 = new Array(4);
            var8[0] = var15;
            var8[1] = var14;
            var8[2] = var5;
            var8[3] = var9;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var4 = _closure2_slot2;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = undefined;
                    var3 = {'width': 0, 'height': 0};
                    var2 = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var13.bind(var7)(var5, var8);
            var8 = var7.useEffect;
            var5 = new Array(3);
            var5[0] = var12;
            var5[1] = var3;
            var5[2] = var9;
            var3 = function() {
                var5 = function handleStateChange(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var7 = var1.state;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var2);
                        var4 = var6.coerceGuildsRoute;
                        var5 = null;
                        var8 = var5 == var7;
                        var2 = undefined;
                        if(var8) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var8 = var7.routes;
                        var9 = var5 == var8;
                        var2 = undefined;
                        if(var9) { _fun0003_ip = 7; continue _fun0003 }
case 9:
                        var10 = var5 == var7;
                        var9 = undefined;
                        if(var10) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var9 = var7.index;
case 10:
                        var10 = var5 != var9;
                        var7 = 0;
                        if(!var10) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var7 = var9;
case 12:
                        var2 = var8[var7];
case 7:
                        var2 = var4.bind(var6)(var2);
                        if(!(var5 != var2)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var6 = _closure2_slot8;
                        if(!var6) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                        var2 = var2.params;
                        var6 = var5 == var2;
                        var5 = undefined;
                        if(var6) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var5 = var2.drawerOpen;
case 17:
                        var2 = true;
                        var2 = var2 === var5;
                        var5 = _closure2_slot4;
                        var4 = 'closed';
                        if(!var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var4 = 'open';
case 19:
                        var4 = var5.bind(var1)(var4);
                        var4 = _closure1_slot6;
                        var3 = var4.getState;
                        var3 = var3.bind(var4)();
                        if(var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                        var2 = var3.stopTimer;
                        var2 = var2.bind(var3)();
                        _fun0003_ip = 14; continue _fun0003;
case 21:
                        var2 = var3.startTimer;
                        var2 = var2.bind(var3)();
case 14:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var4 = _closure2_slot5;
                var3 = var4.addListener;
                var2 = 'state';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure2_slot5;
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
            var3 = var8.bind(var7)(var3, var5);
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 10;
            var3 = var17[var5];
            var12 = var16.bind(var6)(var3);
            var8 = var12.useAnimatedStyle;
            var3 = function P() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var2 = 1;
                    var1['flex'] = var2;
                    var2 = _closure2_slot7;
                    var2 = var2.top;
                    var1['marginTop'] = var2;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 11;
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
                    if(var4) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var4 = _closure1_slot8;
                    _fun0004_ip = 25; continue _fun0004;
case 23:
                    var4 = _closure1_slot7;
case 25:
                    var2 = 'animate-always';
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['safeAreaInsets'] = var14;
            var15 = 11;
            var14 = var17[var15];
            var14 = var16.bind(var6)(var14);
            var14 = var14.withSpring;
            var13['withSpring'] = var14;
            var13['panelX'] = var10;
            var13['gestureState'] = var11;
            var14 = _closure1_slot7;
            var13['HOME_GESTURE_DRAG_PHYSICS'] = var14;
            var14 = _closure1_slot8;
            var13['HOME_DRAWER_FLING_PHYSICS'] = var14;
            var3['__closure'] = var13;
            var13 = 13899151055922.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot9;
            var3['__initData'] = var13;
            var3 = var8.bind(var12)(var3);
            var _closure2_slot9 = var3;
            var8 = var17[var5];
            var13 = var16.bind(var6)(var8);
            var12 = var13.useAnimatedStyle;
            var8 = function b() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = 48;
                    var2 = var2 < var3;
                    var9 = 0;
                    var12 = 0;
                    if(!var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
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
case 26:
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 150;
                    var10 = var2 / var1;
                    var1 = {};
                    var4 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 11;
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
                    var2 = 10;
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
            var18 = {'panelX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'GUILD_DESCRIPTION_ANIMATION_DISTANCE': 18, 'MIN_HOME_DRAWER_TEXT_OPACITY': 0.1, 'MIN_HOME_DRAWER_OPEN_WIDTH': 150};
            var18['panelX'] = var10;
            var19 = var17[var15];
            var19 = var16.bind(var6)(var19);
            var19 = var19.withSpring;
            var18['withSpring'] = var19;
            var18['HOME_DRAWER_FLING_PHYSICS'] = var14;
            var19 = var17[var5];
            var19 = var16.bind(var6)(var19);
            var19 = var19.clamp;
            var18['clamp'] = var19;
            var8['__closure'] = var18;
            var18 = 16821183426357.0;
            var8['__workletHash'] = var18;
            var18 = _closure1_slot10;
            var8['__initData'] = var18;
            var8 = var12.bind(var13)(var8);
            var _closure2_slot10 = var8;
            var8 = var17[var5];
            var13 = var16.bind(var6)(var8);
            var12 = var13.useAnimatedStyle;
            var8 = function F() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 48;
                    var3 = var3 < var2;
                    var6 = 0;
                    if(!var3) { _fun0006_ip = 28; continue _fun0006 }
case 29:
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
case 28:
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 11;
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
            var18 = {'panelX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'MAX_HOME_DRAWER_ICON_DISTANCE': 12};
            var18['panelX'] = var10;
            var19 = var17[var15];
            var19 = var16.bind(var6)(var19);
            var19 = var19.withSpring;
            var18['withSpring'] = var19;
            var18['HOME_DRAWER_FLING_PHYSICS'] = var14;
            var8['__closure'] = var18;
            var18 = 1021966223877.0;
            var8['__workletHash'] = var18;
            var18 = _closure1_slot11;
            var8['__initData'] = var18;
            var8 = var12.bind(var13)(var8);
            var _closure2_slot11 = var8;
            var5 = var17[var5];
            var12 = var16.bind(var6)(var5);
            var8 = var12.useAnimatedStyle;
            var5 = function x() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 48;
                    var3 = var3 < var2;
                    var6 = 0;
                    if(!var3) { _fun0007_ip = 30; continue _fun0007 }
case 29:
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
case 30:
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 11;
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
            var13 = {'panelX': null, 'MAX_HOME_DRAWER_ANIMATING_WIDTH': 48, 'UNREAD_INDICATOR_ANIMATION_DISTANCE': 6};
            var13['panelX'] = var10;
            var15 = var17[var15];
            var15 = var16.bind(var6)(var15);
            var15 = var15.withSpring;
            var13['withSpring'] = var15;
            var13['HOME_DRAWER_FLING_PHYSICS'] = var14;
            var5['__closure'] = var13;
            var13 = 13576988898538.0;
            var5['__workletHash'] = var13;
            var13 = _closure1_slot12;
            var5['__initData'] = var13;
            var5 = var8.bind(var12)(var5);
            var _closure2_slot12 = var5;
            var8 = var7.useMemo;
            var5 = new Array(4);
            var5[0] = var11;
            var5[1] = var10;
            var5[2] = var9;
            var5[3] = var4;
            var4 = function() {
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 12;
                var2 = var14[var2];
                var12 = undefined;
                var2 = var13.bind(var12)(var2);
                var3 = var2.Gesture;
                var2 = var3.Pan;
                var5 = var2.bind(var3)();
                var3 = var5.enabled;
                var2 = _closure2_slot8;
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
                var7 = {};
                var6 = _closure2_slot1;
                var7['gestureState'] = var6;
                var10 = _closure2_slot0;
                var7['panelX'] = var10;
                var2['__closure'] = var7;
                var7 = 2019160397342.0;
                var2['__workletHash'] = var7;
                var7 = _closure1_slot17;
                var2['__initData'] = var7;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onTouchesMove;
                var2 = function _(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.active;
                        if(var3) { _fun0008_ip = 31; continue _fun0008 }
case 32:
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
                        if(var1) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                        var6 = _closure2_slot0;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var3 === var4;
                        if(!var4) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                        var8 = _closure2_slot1;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var6.initialX;
                        var4 = var7 < var6;
case 35:
                        var1 = var4;
case 33:
                        if(var1) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                        var6 = _closure2_slot0;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var4 = var4 > var3;
                        if(!var4) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                        var8 = _closure2_slot1;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        var6 = var6.initialX;
                        var4 = var7 > var6;
case 39:
                        var1 = var4;
case 37:
                        if(!var1) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
case 41:
                        var4 = _closure2_slot0;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = var3 === var1;
                        if(!var1) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.initialX;
                        var1 = var7 > var3;
case 43:
                        if(var1) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.initialX;
                        var1 = var7 < var3;
case 45:
                        if(!var1) { _fun0008_ip = 31; continue _fun0008 }
case 47:
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
case 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = {};
                var7['gestureState'] = var6;
                var7['panelX'] = var10;
                var2['__closure'] = var7;
                var7 = 92353855173.0;
                var2['__workletHash'] = var7;
                var7 = _closure1_slot16;
                var2['__initData'] = var7;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onChange;
                var2 = function n(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.active;
                        if(!var3) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                        var4 = var2.absoluteX;
                        var5 = _closure2_slot1;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var3 = var3.initialX;
                        var7 = var4 - var3;
                        var3 = var2.changeX;
                        var6 = 0;
                        if(!(!(var3 > var6))) { _fun0009_ip = 50; continue _fun0009 }
case 28:
                        var5 = 144;
                        var2 = var7 < var5;
                        if(!var2) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                        var4 = var7 - var3;
                        var2 = var4 >= var5;
case 51:
                        if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 12:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 10;
                        var2 = var9[var2];
                        var5 = undefined;
                        var11 = var8.bind(var5)(var2);
                        var10 = var11.runOnJS;
                        var2 = 13;
                        var4 = var9[var2];
                        var4 = var8.bind(var5)(var4);
                        var4 = var4.triggerHapticFeedback;
                        var4 = var10.bind(var11)(var4);
                        var2 = var9[var2];
                        var2 = var8.bind(var5)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.SOFT;
                        var2 = var4.bind(var5)(var2);
                        _fun0009_ip = 53; continue _fun0009;
case 50:
                        var4 = 144;
                        var2 = var7 >= var4;
                        if(!var2) { _fun0009_ip = 21; continue _fun0009 }
case 54:
                        var3 = var7 - var3;
                        var2 = var3 < var4;
case 21:
                        if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 55:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 10;
                        var2 = var8[var2];
                        var4 = undefined;
                        var10 = var5.bind(var4)(var2);
                        var9 = var10.runOnJS;
                        var2 = 13;
                        var3 = var8[var2];
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.triggerHapticFeedback;
                        var3 = var9.bind(var10)(var3);
                        var2 = var8[var2];
                        var2 = var5.bind(var4)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.IMPACT_MEDIUM;
                        var2 = var3.bind(var4)(var2);
case 53:
                        var2 = 144;
                        if(!(!(var7 >= var2))) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                        var4 = _closure2_slot0;
                        var3 = var4.set;
                        var2 = global;
                        var8 = var2.Math;
                        var5 = var8.max;
                        var9 = _closure2_slot1;
                        var2 = var9.get;
                        var2 = var2.bind(var9)();
                        var2 = var2.panelX;
                        var9 = var7 + var2;
                        var2 = 3;
                        var2 = var9 / var2;
                        var2 = var5.bind(var8)(var2, var6);
                        var2 = var3.bind(var4)(var2);
                        _fun0009_ip = 48; continue _fun0009;
case 56:
                        var3 = _closure2_slot0;
                        var2 = var3.set;
                        var4 = global;
                        var5 = var4.Math;
                        var4 = var5.max;
                        var8 = _closure2_slot1;
                        var1 = var8.get;
                        var1 = var1.bind(var8)();
                        var1 = var1.panelX;
                        var1 = var7 + var1;
                        var1 = var4.bind(var5)(var1, var6);
                        var1 = var2.bind(var3)(var1);
case 48:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = {};
                var7['gestureState'] = var6;
                var8 = 144;
                var7['INITIAL_OPEN_WIDTH'] = var8;
                var11 = 10;
                var15 = var14[var11];
                var15 = var13.bind(var12)(var15);
                var15 = var15.runOnJS;
                var7['runOnJS'] = var15;
                var15 = 13;
                var16 = var14[var15];
                var16 = var13.bind(var12)(var16);
                var16 = var16.triggerHapticFeedback;
                var7['triggerHapticFeedback'] = var16;
                var15 = var14[var15];
                var15 = var13.bind(var12)(var15);
                var15 = var15.HapticFeedbackTypes;
                var7['HapticFeedbackTypes'] = var15;
                var7['panelX'] = var10;
                var15 = 3;
                var7['DRAWER_RESISTANCE'] = var15;
                var2['__closure'] = var7;
                var7 = 17424338336639.0;
                var2['__workletHash'] = var7;
                var7 = _closure1_slot15;
                var2['__initData'] = var7;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onEnd;
                var2 = function t(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = arg1;
                        var2 = var3.velocityX;
                        var1 = 50;
                        if(!(!(var2 > var1))) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                        var2 = var3.velocityX;
                        var1 = -50;
                        if(!(!(var2 < var1))) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                        var4 = _closure2_slot0;
                        var2 = var4.get;
                        var4 = var2.bind(var4)();
                        var2 = 0;
                        if(!(var2 !== var4)) { _fun0010_ip = 60; continue _fun0010 }
case 62:
                        var5 = _closure2_slot0;
                        var4 = var5.get;
                        var5 = var4.bind(var5)();
                        var6 = _closure2_slot3;
                        var4 = 0.5;
                        var4 = var4 * var6;
                        if(!(!(var5 > var4))) { _fun0010_ip = 2; continue _fun0010 }
case 23:
                        var5 = _closure2_slot0;
                        var4 = var5.get;
                        var5 = var4.bind(var5)();
                        var4 = 144;
                        if(!(var5 >= var4)) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                        var3 = var3.absoluteX;
                        var4 = _closure2_slot1;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = var1.initialX;
                        var1 = var3 - var1;
                        if(!(!(var1 > var2))) { _fun0010_ip = 2; continue _fun0010 }
case 63:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var1 = var6[var1];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = 9;
                        var1 = var6[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.setHomeDrawerState;
                        var2 = var2.bind(var4)(var1);
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        _fun0010_ip = 65; continue _fun0010;
case 2:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var1 = var6[var1];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = 9;
                        var1 = var6[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.setHomeDrawerState;
                        var2 = var2.bind(var4)(var1);
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
                        _fun0010_ip = 65; continue _fun0010;
case 60:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var1 = var6[var1];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = 9;
                        var1 = var6[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.setHomeDrawerState;
                        var2 = var2.bind(var4)(var1);
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        _fun0010_ip = 65; continue _fun0010;
case 58:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var1 = var6[var1];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = 9;
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
                var7 = {};
                var11 = var14[var11];
                var11 = var13.bind(var12)(var11);
                var11 = var11.runOnJS;
                var7['runOnJS'] = var11;
                var11 = 9;
                var11 = var14[var11];
                var11 = var13.bind(var12)(var11);
                var11 = var11.setHomeDrawerState;
                var7['setHomeDrawerState'] = var11;
                var7['panelX'] = var10;
                var10 = 0.5;
                var7['FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN'] = var10;
                var9 = _closure2_slot3;
                var7['maxX'] = var9;
                var7['INITIAL_OPEN_WIDTH'] = var8;
                var7['gestureState'] = var6;
                var2['__closure'] = var7;
                var7 = 16508224056948.0;
                var2['__workletHash'] = var7;
                var7 = _closure1_slot14;
                var2['__initData'] = var7;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onFinalize;
                var1 = function e() {
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = {'active': false, 'initialX': 0, 'initialY': 0, 'panelX': 0};
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var5 = {};
                var5['gestureState'] = var6;
                var1['__closure'] = var5;
                var5 = 103454722650.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot13;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var8.bind(var7)(var4, var5);
            var _closure2_slot13 = var4;
            var5 = var7.useState;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot13;
                var1['gesture'] = var3;
                var3 = _closure2_slot9;
                var1['panelStyles'] = var3;
                var3 = _closure2_slot1;
                var1['gestureState'] = var3;
                var3 = _closure2_slot0;
                var1['panelX'] = var3;
                var3 = _closure2_slot10;
                var1['guildsBarLabelDrawerStyle'] = var3;
                var3 = _closure2_slot11;
                var1['guildsBarIconDrawerStyle'] = var3;
                var2 = _closure2_slot12;
                var1['guildsBarUnreadDrawerStyle'] = var2;
                return var1;
            };
            var5 = var5.bind(var7)(var2);
            var2 = _closure1_slot3;
            var1 = 1;
            var2 = var2.bind(var6)(var5, var1);
            var1 = 0;
            var2 = var2[var1];
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