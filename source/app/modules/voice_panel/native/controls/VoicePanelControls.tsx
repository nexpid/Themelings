// app/modules/voice_panel/native/controls/VoicePanelControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
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
        var4 = var6[var1];
        var1 = undefined;
        var4 = var13.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var14 = 1;
        var7 = var6[var14];
        var4 = metroImportAll;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var12 = var4.StyleSheet;
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.UI_SHOW_HIDE_PHYSICS;
        var _closure1_slot7 = var8;
        var8 = var4.MODE_CHANGE_PHYSICS;
        var _closure1_slot8 = var8;
        var8 = var4.BORDER_RADIUS_PHYSICS;
        var _closure1_slot9 = var8;
        var8 = var4.PANEL_CONTROLS_HEIGHT_PHYSICS;
        var _closure1_slot10 = var8;
        var4 = var4.VoicePanelModes;
        var _closure1_slot11 = var4;
        var4 = 5;
        var8 = var6[var4];
        var8 = var5.bind(var1)(var8);
        var9 = var8.CALL_TILE_GUTTER;
        var _closure1_slot12 = var9;
        var8 = var8.EDGE_GUTTER;
        var _closure1_slot13 = var8;
        var8 = 6;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
        var _closure1_slot14 = var9;
        var8 = var8.VoicePanelControlsModes;
        var _closure1_slot15 = var8;
        var8 = 7;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.ComponentActions;
        var _closure1_slot16 = var9;
        var8 = var8.ThemeTypes;
        var _closure1_slot17 = var8;
        var8 = 8;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.jsx;
        var _closure1_slot18 = var9;
        var9 = var8.Fragment;
        var _closure1_slot19 = var9;
        var8 = var8.jsxs;
        var _closure1_slot20 = var8;
        var8 = 9;
        var8 = var6[var8];
        var10 = var5.bind(var1)(var8);
        var9 = var10.createStyles;
        var8 = {};
        var11 = {};
        var16 = var12.absoluteFillObject;
        var17 = var11;
        var12 = copyDataProperties(var17, var16);
        var12 = 'zIndex';
        var11[11] = var14;
        var8['accessibilityWrapper'] = var11;
        var11 = {'position': 'absolute', 'bottom': 0, 'left': '50%', 'overflow': 'hidden', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
        var12 = 10;
        var14 = var6[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.modules;
        var14 = var14.mobile;
        var14 = var14.VOICE_PANEL_CONTROLS_BORDER_RADIUS;
        var11['borderRadius'] = var14;
        var8['wrapper'] = var11;
        var11 = {'position': 'absolute', 'left': 0, 'right': 0, 'zIndex': 20, 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
        var12 = var6[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_16;
        var11['marginHorizontal'] = var12;
        var8['buttonsWrapper'] = var11;
        var11 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'zIndex': 21};
        var8['actionSheetDragHandleWrapper'] = var11;
        var8 = var9.bind(var10)(var8);
        var _closure1_slot21 = var8;
        var8 = 11;
        var8 = var6[var8];
        var9 = var5.bind(var1)(var8);
        var8 = var9.isMetaQuest;
        var8 = var8.bind(var9)();
        if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = 15;
case 2:
        var _closure1_slot22 = var4;
        var8 = var7.memo;
        var4 = function(arg1) {
            var1 = arg1;
            var2 = var1.openTab;
            var1 = _closure1_slot21;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var8 = var1.handlePress;
            var7 = var1.accessibilityLabel;
            var3 = _closure1_slot18;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var6.actionSheetDragHandleWrapper;
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var5 = 13;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ActionSheetDragHandle;
            var5 = {};
            var5['onPress'] = var8;
            var8 = true;
            var5['overlay'] = var8;
            var5['accessibilityLabel'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = var8.bind(var7)(var4);
        var _closure1_slot23 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx1(){const{scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)();}';
        var4['code'] = var8;
        var _closure1_slot24 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx2({velocityY:velocityY}){const{wrapperSpecs,wrapperDimensions,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,controlsSpecs,VoicePanelControlsModes,gestureSpecs,scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;const absoluteVelocity=Math.abs(velocityY);let resultingControlMode;if(absoluteVelocity>200&&velocityY<0){wrapperSpecs.set({...wrapperSpecs.get(),height:wrapperDimensions.get().drawerHeight-calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height});if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else if(absoluteVelocity<200&&gestureSpecs.get().isDrawer){if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.FLOATING_DEFAULT;}}scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)(resultingControlMode);}';
        var4['code'] = var8;
        var _closure1_slot25 = var4;
        var4 = {};
        var8 = "function VoicePanelControlsTsx3(){const{scrollLock,isDragScrolling,gestureSpecs,runOnJS,gestureLock}=this.__closure;console.log('ZZZZZ - ControlsGesture.onTouchesCancelled');scrollLock.set(false);isDragScrolling.set(false);gestureSpecs.set({...gestureSpecs.get(),active:false});runOnJS(gestureLock.unlock)();}";
        var4['code'] = var8;
        var _closure1_slot26 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx4(event){const{gestureSpecs,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,wrapperSpecs,getControlsDrawerOpenWidth,windowDimensions,wrapperDimensions,controlsSpecs,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,getControlsDefaultWidth}=this.__closure;const change=event.absoluteY-gestureSpecs.get().absoluteY;const newHeight=gestureSpecs.get().height-gestureSpecs.get().y-change;if(newHeight>gestureSpecs.get().drawerTransitionHeight){if(!gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:true});}const headerHeight=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height;wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:0,width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(newHeight,wrapperDimensions.get().drawerHeight-headerHeight),drawerMode:true});}else{const progress=newHeight/gestureSpecs.get().drawerTransitionHeight;const floatingHeight=controlsSpecs.get().height;const yOffset=Math.max(newHeight-safeArea.get().bottom-floatingHeight,0)*-1;const newChange=yOffset*(1-progress/1.5);if(gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:false});}if(floatingHeight!==wrapperSpecs.get().height&&!wrapperSpecs.get().drawerMode){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:safeArea.get().bottom*-1+newChange,width:getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:floatingHeight,drawerMode:false});}}';
        var4['code'] = var8;
        var _closure1_slot27 = var4;
        var4 = {};
        var8 = "function VoicePanelControlsTsx5(event,manager){const{State,gestureSpecs,controlsSpecs,VoicePanelControlsModes,touchMoveCount,SCROLL_BEGIN_GRACE_TICKS,isDragScrolling,sharedTab,scrollOffsetValue,GESTURE_VERTICAL_MINIMUM,wrapperSpecs,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT,tab,runOnJS,openTab,VoicePanelTabAnalyticsSources,scrollLock}=this.__closure;if(event.state!==State.BEGAN||gestureSpecs.get().active)return;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){manager.fail();return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=SCROLL_BEGIN_GRACE_TICKS?true:isDragScrolling.get();const scrollOffset=function(){switch(sharedTab.get()){case'settings':case'app_launcher':return scrollOffsetValue.get();default:return 0;}}();const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=gestureSpecs.get().absoluteY-absoluteY;if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&isDragging&&(computed>=0||scrollOffset>0)){return;}if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT&&computed>GESTURE_VERTICAL_MINIMUM||controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&(computed<-GESTURE_VERTICAL_MINIMUM||computed>GESTURE_VERTICAL_MINIMUM)){gestureSpecs.set({absoluteX:absoluteX,absoluteY:absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:true,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER&&tab!=='settings'){runOnJS(openTab)({tab:'settings',source:VoicePanelTabAnalyticsSources.GESTURE,disableControlsUpdate:true});}scrollLock.set(true);manager.activate();}else if(Math.abs(computed)>Math.abs(GESTURE_VERTICAL_MINIMUM)){manager.fail();}}";
        var4['code'] = var8;
        var _closure1_slot28 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx6(){const{runOnJS,gestureLock}=this.__closure;runOnJS(gestureLock.lock)();}';
        var4['code'] = var8;
        var _closure1_slot29 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx7(event){const{touchMoveCount,gestureSpecs,wrapperSpecs,controlsSpecs,VoicePanelControlsModes,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT}=this.__closure;touchMoveCount.set(0);gestureSpecs.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:false,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});}';
        var4['code'] = var8;
        var _closure1_slot30 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx8(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}';
        var4['code'] = var8;
        var _closure1_slot31 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx9(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous)return;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}';
        var4['code'] = var8;
        var _closure1_slot32 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx10(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}';
        var4['code'] = var8;
        var _closure1_slot33 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx11(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea}=props;switch(mode){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea.left,safeArea.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea.left,safeArea.right),height:height,drawerMode:true,hidden:false});break;}}';
        var4['code'] = var8;
        var _closure1_slot34 = var4;
        var8 = var7.memo;
        var4 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var8 = var2.channelId;
                var16 = var2.wrapperSpecs;
                var _closure2_slot0 = var16;
                var15 = var2.controlsSpecs;
                var _closure2_slot1 = var15;
                var14 = var2.accessoryHeights;
                var _closure2_slot2 = var14;
                var2 = var2.gestureState;
                var _closure2_slot3 = var2;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 28;
                var3 = var5[var3];
                var4 = undefined;
                var7 = var6.bind(var4)(var3);
                var3 = var7.useShouldShowFloatingCTA;
                var7 = var3.bind(var7)(var8);
                var11 = _closure1_slot1;
                var3 = 17;
                var3 = var5[var3];
                var3 = var11.bind(var4)(var3);
                var10 = var3.bind(var4)();
                var _closure2_slot4 = var10;
                var3 = 29;
                var3 = var5[var3];
                var3 = var11.bind(var4)(var3);
                var3 = var3.bind(var4)(var8);
                var13 = var3.isConnectingToConsole;
                var _closure2_slot5 = var13;
                var12 = var3.isConnectingOrConnectedToConsole;
                var8 = _closure1_slot4;
                var11 = var8.useMemo;
                var3 = new Array(4);
                var3[0] = var16;
                var3[1] = var15;
                var3[2] = var14;
                var3[3] = var2;
                var2 = function() {
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1['wrapperSpecs'] = var3;
                    var3 = _closure2_slot1;
                    var1['controlsSpecs'] = var3;
                    var3 = _closure2_slot2;
                    var1['accessoryHeights'] = var3;
                    var2 = _closure2_slot3;
                    var1['gestureState'] = var2;
                    return var1;
                };
                var11 = var11.bind(var8)(var2, var3);
                var3 = var8.useLayoutEffect;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var10;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure2_slot5;
                        var2 = _closure2_slot4;
                        if(var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var1 = var2.unlock;
                        var1 = var1.bind(var2)();
                        _fun0003_ip = 6; continue _fun0003;
case 4:
                        var1 = var2.lock;
                        var1 = var1.bind(var2)();
case 6:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var8)(var1, var2);
                var3 = _closure1_slot20;
                var2 = _closure1_slot19;
                var1 = {};
                var13 = _closure1_slot18;
                var10 = 30;
                var5 = var5[var10];
                var5 = var6.bind(var4)(var5);
                var8 = var5.TransitionItem;
                var5 = {};
                var6 = undefined;
                if(!var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var6 = var11;
case 7:
                var5['item'] = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var14 = 31;
                var14 = var6[var14];
                var14 = var7.bind(var4)(var14);
                var14 = var14.renderVoicePanelFloatingCTA;
                var5['renderItem'] = var14;
                var8 = var13.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot18;
                var6 = var6[var10];
                var6 = var7.bind(var4)(var6);
                var7 = var6.TransitionItem;
                var6 = {};
                var10 = undefined;
                if(!var12) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var10 = var11;
case 9:
                var6['item'] = var10;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 32;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.renderVoicePanelConsoleStatus;
                var6['renderItem'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var4 = var8.bind(var7)(var4);
        var _closure1_slot35 = var4;
        var4 = {};
        var8 = "function VoicePanelControlsTsx12(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}";
        var4['code'] = var8;
        var _closure1_slot36 = var4;
        var8 = var7.memo;
        var4 = function VoicePanelButtonsInner(arg1) {
            var1 = arg1;
            var2 = var1.openTab;
            var _closure2_slot0 = var2;
            var16 = var1.wrapperSpecs;
            var _closure2_slot1 = var16;
            var17 = var1.sharedTab;
            var _closure2_slot2 = var17;
            var15 = _closure1_slot4;
            var2 = var15.useRef;
            var1 = true;
            var2 = var2.bind(var15)(var1);
            var _closure2_slot3 = var2;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 33;
            var1 = var11[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var5 = var1.bind(var4)(var2);
            var1 = _closure1_slot21;
            var8 = var1.bind(var4)();
            var2 = var15.useContext;
            var1 = 14;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var2.bind(var15)(var1);
            var19 = var1.controlsSpecs;
            var _closure2_slot4 = var19;
            var18 = var1.connected;
            var _closure2_slot5 = var18;
            var1 = 34;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var9 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = 15;
            var10 = var11[var1];
            var13 = var2.bind(var4)(var10);
            var12 = var13.useAnimatedStyle;
            var10 = function c() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var3 = var1.pushToTalk;
                    if(!var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
case 11:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var11 = 'settings';
                    if(!(var11 === var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var2 = var1.height;
                    var1 = 200;
                    if(!(!(var2 >= var1))) { _fun0004_ip = 15; continue _fun0004 }
case 13:
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var13 = var1.height;
                    _fun0004_ip = 16; continue _fun0004;
case 15:
                    var13 = _closure1_slot14;
case 16:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var14 = 0;
                    if(!(var11 !== var1)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var2 = var1.height;
                    var1 = 200;
                    var1 = var2 >= var1;
                    var14 = 0;
                    if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 19:
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var1 = var1.height;
                    var14 = -var1;
case 17:
                    var1 = {};
                    var2 = 0;
                    if(!var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var2 = -4;
case 20:
                    var1['top'] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 35;
                    var5 = var2[var10];
                    var7 = undefined;
                    var12 = var3.bind(var7)(var5);
                    var9 = var12.withSpring;
                    var5 = _closure1_slot8;
                    var5 = var9.bind(var12)(var13, var5);
                    var1['height'] = var5;
                    var2 = var2[var10];
                    var5 = var3.bind(var7)(var2);
                    var3 = var5.withSpring;
                    var9 = _closure2_slot2;
                    var2 = var9.get;
                    var12 = var2.bind(var9)();
                    var9 = 1;
                    var2 = var9;
                    if(!(var11 !== var12)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var13 = _closure2_slot1;
                    var12 = var13.get;
                    var12 = var12.bind(var13)();
                    var13 = var12.height;
                    var12 = 200;
                    var12 = var13 >= var12;
                    var2 = var9;
                    if(!var12) { _fun0004_ip = 22; continue _fun0004 }
case 24:
                    var2 = 0;
case 22:
                    var13 = _closure1_slot8;
                    var2 = var3.bind(var5)(var2, var13);
                    var1['opacity'] = var2;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = var5[var10];
                    var12 = var6.bind(var7)(var2);
                    var2 = var12.withSpring;
                    var2 = var2.bind(var12)(var14, var13);
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var5 = var5[var10];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.withSpring;
                    var10 = _closure2_slot2;
                    var5 = var10.get;
                    var10 = var5.bind(var10)();
                    var5 = var9;
                    if(!(var11 !== var10)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var10 = _closure2_slot1;
                    var8 = var10.get;
                    var8 = var8.bind(var10)();
                    var10 = var8.height;
                    var8 = 200;
                    var8 = var10 >= var8;
                    var5 = var9;
                    if(!var8) { _fun0004_ip = 25; continue _fun0004 }
case 27:
                    var5 = 0.95;
case 25:
                    var4 = _closure1_slot8;
                    var4 = var6.bind(var7)(var5, var4);
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['controlsSpecs'] = var19;
            var14['connected'] = var18;
            var14['sharedTab'] = var17;
            var14['wrapperSpecs'] = var16;
            var16 = 200;
            var14['TRANSITIONAL_HEIGHT'] = var16;
            var16 = _closure1_slot14;
            var14['CONTROLS_DRAWER_HEADER_EXPANDED_SIZE'] = var16;
            var16 = 35;
            var16 = var11[var16];
            var16 = var2.bind(var4)(var16);
            var16 = var16.withSpring;
            var14['withSpring'] = var16;
            var16 = _closure1_slot8;
            var14['MODE_CHANGE_PHYSICS'] = var16;
            var10['__closure'] = var14;
            var14 = 17578996123721.0;
            var10['__workletHash'] = var14;
            var14 = _closure1_slot36;
            var10['__initData'] = var14;
            var10 = var12.bind(var13)(var10);
            var14 = var15.useEffect;
            var13 = function() {
                var2 = _closure2_slot3;
                var1 = false;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var12 = new Array(0);
            var12 = var14.bind(var15)(var13, var12);
            var3 = _closure1_slot18;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.LayoutAnimationConfig;
            var1 = {};
            var1['skipEntering'] = var5;
            var5 = 36;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var11 = var8.buttonsWrapper;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var10;
            var5['style'] = var8;
            var8 = var9.map;
            var7 = function(arg1) {
                var4 = arg1;
                var3 = var4.render;
                var2 = var4.key;
                var1 = {};
                var1['props'] = var4;
                var6 = _closure2_slot0;
                var1['openTab'] = var6;
                var5 = _closure2_slot1;
                var1['wrapperSpecs'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = var8.bind(var7)(var4);
        var _closure1_slot37 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx13(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,useReducedMotion,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),opacity:withSpring(wrapperSpecs.get().hidden?0:1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop)?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}';
        var4['code'] = var8;
        var _closure1_slot38 = var4;
        var4 = {};
        var8 = "function VoicePanelControlsTsx14(){const{mode,VoicePanelModes,wrapperSpecs}=this.__closure;return{pointerEvents:mode.get()!==VoicePanelModes.PANEL||wrapperSpecs.get().hidden?'none':'auto'};}";
        var4['code'] = var8;
        var _closure1_slot39 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx15(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}';
        var4['code'] = var8;
        var _closure1_slot40 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx16(mode,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode===previousMode||!isScreenReaderEnabled)return;if(mode===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else if(mode!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}';
        var4['code'] = var8;
        var _closure1_slot41 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx17(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}';
        var4['code'] = var8;
        var _closure1_slot42 = var4;
        var4 = {};
        var8 = 'function VoicePanelControlsTsx18(drawerMode,previousDrawerMode){const{isRefreshEnabled,runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode)return;if(!isRefreshEnabled)return;if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}';
        var4['code'] = var8;
        var _closure1_slot43 = var4;
        var4 = var7.memo;
        var2 = function VoicePanelControls(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var29 = var2.gestureState;
                var _closure2_slot0 = var29;
                var16 = _closure1_slot0;
                var22 = _closure1_slot2;
                var2 = 24;
                var2 = var22[var2];
                var4 = undefined;
                var3 = var16.bind(var4)(var2);
                var2 = var3.useIsScreenReaderEnabled;
                var39 = var2.bind(var3)();
                var _closure2_slot1 = var39;
                var12 = _closure1_slot1;
                var2 = 37;
                var2 = var22[var2];
                var3 = var12.bind(var4)(var2);
                var2 = 'VoicePanelControls';
                var28 = var3.bind(var4)(var2);
                var _closure2_slot2 = var28;
                var6 = _closure1_slot4;
                var3 = var6.useContext;
                var2 = 14;
                var2 = var22[var2];
                var2 = var12.bind(var4)(var2);
                var2 = var3.bind(var6)(var2);
                var32 = var2.channelId;
                var _closure2_slot3 = var32;
                var31 = var2.controlsSpecs;
                var _closure2_slot4 = var31;
                var13 = var2.mode;
                var _closure2_slot5 = var13;
                var7 = var2.setControlsMode;
                var _closure2_slot6 = var7;
                var18 = var2.useReducedMotion;
                var _closure2_slot7 = var18;
                var2 = _closure1_slot21;
                var23 = var2.bind(var4)();
                var2 = var6.useState;
                var15 = null;
                var2 = var2.bind(var6)(var15);
                var24 = _closure1_slot3;
                var9 = 2;
                var2 = var24.bind(var4)(var2, var9);
                var8 = 0;
                var20 = var2[var8];
                var _closure2_slot8 = var20;
                var3 = 1;
                var2 = var2[var3];
                var _closure2_slot9 = var2;
                var34 = 15;
                var2 = var22[var34];
                var5 = var16.bind(var4)(var2);
                var2 = var5.useSharedValue;
                var19 = var2.bind(var5)(var20);
                var _closure2_slot10 = var19;
                var5 = var6.useLayoutEffect;
                var2 = function() {
                    var3 = _closure2_slot10;
                    var2 = var3.set;
                    var1 = _closure2_slot8;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                var2 = 38;
                var2 = var22[var2];
                var2 = var12.bind(var4)(var2);
                var26 = var2.bind(var4)(var32);
                var2 = 39;
                var2 = var22[var2];
                var10 = var16.bind(var4)(var2);
                var5 = var10.useMaybeFetchSoundboardSounds;
                var2 = {};
                var2['shouldFetch'] = var26;
                var2 = var5.bind(var10)(var2);
                var10 = var6.useCallback;
                var5 = new Array(3);
                var5[0] = var32;
                var5[1] = var31;
                var5[2] = var7;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = arg1;
                        var1 = var3.tab;
                        var _closure3_slot0 = var1;
                        var1 = var3.source;
                        var _closure3_slot1 = var1;
                        var4 = var3.disableControlsUpdate;
                        var1 = undefined;
                        if(!(var4 === var1)) { _fun0006_ip = 11; continue _fun0006 }
case 6:
                        var4 = false;
case 11:
                        var _closure3_slot2 = var4;
                        var3 = var3.controlsProps;
                        var _closure3_slot3 = var3;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 40;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.batchUpdates;
                        var2 = function() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var1 = false;
                                var _closure4_slot0 = var1;
                                var2 = _closure2_slot4;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var2 = var1.mode;
                                var1 = _closure1_slot15;
                                var1 = var1.DRAWER;
                                var6 = var2 !== var1;
                                var7 = _closure2_slot9;
                                var1 = undefined;
                                var2 = function(arg1) {
                                    var1 = _closure3_slot0;
                                    var2 = arg1;
                                    var2 = var2 !== var1;
                                    _closure4_slot0 = var2;
                                    return var1;
                                };
                                var2 = var7.bind(var1)(var2);
                                var7 = _closure3_slot2;
                                if(var7) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                                var8 = _closure2_slot6;
                                var7 = {};
                                var9 = _closure1_slot15;
                                var9 = var9.DRAWER;
                                var7['mode'] = var9;
                                var11 = _closure3_slot3;
                                var12 = var7;
                                var9 = copyDataProperties(var12, var11);
                                var7 = var8.bind(var1)(var7);
case 28:
                                var5 = _closure4_slot0;
                                if(var5) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                                var5 = var6;
case 30:
                                if(!var5) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 20;
                                var4 = var6[var4];
                                var5 = var5.bind(var1)(var4);
                                var4 = _closure2_slot3;
                                var3 = _closure3_slot0;
                                var2 = _closure3_slot1;
                                var2 = var5.bind(var1)(var4, var3, var2);
case 32:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var17 = var10.bind(var6)(var2, var5);
                var _closure2_slot11 = var17;
                var2 = 41;
                var2 = var22[var2];
                var2 = var12.bind(var4)(var2);
                var30 = var2.bind(var4)();
                var _closure2_slot12 = var30;
                var10 = var6.useLayoutEffect;
                var5 = new Array(4);
                var5[0] = var32;
                var5[1] = var31;
                var5[2] = var17;
                var5[3] = var20;
                var2 = function() {
                    var4 = function handleStoreChange() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var5 = _closure1_slot6;
                            var4 = var5.getChatOpen;
                            var3 = _closure2_slot3;
                            var3 = var4.bind(var5)(var3);
                            var5 = _closure3_slot0;
                            if(!(var3 !== var5)) { _fun0008_ip = 34; continue _fun0008 }
case 6:
                            var _closure3_slot0 = var3;
                            if(!var3) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                            var3 = _closure2_slot11;
                            var2 = {};
                            var4 = 'chat';
                            var2['tab'] = var4;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 20;
                            var4 = var4[var1];
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            var4 = var4.VoicePanelTabAnalyticsSources;
                            var4 = var4.STORE;
                            var2['source'] = var4;
                            var4 = {};
                            var5 = true;
                            var4['debounce'] = var5;
                            var2['controlsProps'] = var4;
                            var1 = var3.bind(var1)(var2);
case 34:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var4;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
                    var3 = _closure1_slot6;
                    var2 = var3.addChangeListener;
                    var2 = var2.bind(var3)(var4);
                    var1 = function() {
                        var3 = _closure1_slot6;
                        var2 = var3.removeChangeListener;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                };
                var2 = var10.bind(var6)(var2, var5);
                var10 = var6.useEffect;
                var5 = new Array(1);
                var5[0] = var17;
                var2 = function() {
                    var5 = function handleOpenChatTab() {
                        var3 = _closure2_slot11;
                        var2 = {};
                        var1 = 'chat';
                        var2['tab'] = var1;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 20;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.VoicePanelTabAnalyticsSources;
                        var4 = var4.HEADER_BUTTON;
                        var2['source'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var _closure3_slot0 = var5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 42;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    var4 = var3.ComponentDispatch;
                    var3 = var4.subscribe;
                    var2 = _closure1_slot16;
                    var2 = var2.VOICE_PANEL_OPEN_CHAT_TAB;
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 42;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var5 = var3.ComponentDispatch;
                        var4 = var5.unsubscribe;
                        var2 = _closure1_slot16;
                        var3 = var2.VOICE_PANEL_OPEN_CHAT_TAB;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = var10.bind(var6)(var2, var5);
                var2 = 43;
                var2 = var22[var2];
                var5 = var16.bind(var4)(var2);
                var2 = var5.getSafeAreaInsets;
                var11 = var2.bind(var5)();
                var2 = var22[var34];
                var10 = var16.bind(var4)(var2);
                var5 = var10.useSharedValue;
                var2 = {'width': null, 'height': 0, 'x': 0, 'y': 0, 'drawerMode': false, 'hidden': false};
                var21 = 22;
                var21 = var22[var21];
                var33 = var16.bind(var4)(var21);
                var27 = var33.getControlsDefaultWidth;
                var21 = 44;
                var21 = var22[var21];
                var25 = var16.bind(var4)(var21);
                var21 = var25.getWindowDimensions;
                var21 = var21.bind(var25)();
                var25 = var21.width;
                var21 = var11.left;
                var11 = var11.right;
                var11 = var27.bind(var33)(var25, var21, var11);
                var2['width'] = var11;
                var27 = false;
                var21 = var5.bind(var10)(var2);
                var _closure2_slot13 = var21;
                var2 = 18;
                var2 = var22[var2];
                var10 = var16.bind(var4)(var2);
                var5 = var10.useToken;
                var2 = 10;
                var2 = var22[var2];
                var2 = var12.bind(var4)(var2);
                var2 = var2.modules;
                var2 = var2.mobile;
                var2 = var2.VOICE_PANEL_CONTROLS_BORDER_RADIUS;
                var25 = var5.bind(var10)(var2);
                var _closure2_slot14 = var25;
                var2 = var22[var34];
                var10 = var16.bind(var4)(var2);
                var5 = var10.useAnimatedStyle;
                var2 = function ge() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = {};
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var9 = 35;
                        var2 = var2[var9];
                        var7 = undefined;
                        var10 = var3.bind(var7)(var2);
                        var6 = var10.withSpring;
                        var3 = _closure2_slot13;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var3 = var2.drawerMode;
                        var5 = 0;
                        if(var3) { _fun0009_ip = 36; continue _fun0009 }
case 14:
                        var5 = _closure2_slot14;
case 36:
                        var3 = _closure1_slot9;
                        var3 = var6.bind(var10)(var5, var3);
                        var1['borderBottomRightRadius'] = var3;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var9];
                        var10 = var5.bind(var7)(var3);
                        var6 = var10.withSpring;
                        var5 = _closure2_slot13;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var3 = var3.drawerMode;
                        var5 = 0;
                        if(var3) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                        var5 = _closure2_slot14;
case 37:
                        var3 = _closure1_slot9;
                        var3 = var6.bind(var10)(var5, var3);
                        var1['borderBottomLeftRadius'] = var3;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var6 = var3[var9];
                        var13 = var5.bind(var7)(var6);
                        var12 = var13.withSpring;
                        var10 = _closure2_slot13;
                        var6 = var10.get;
                        var6 = var6.bind(var10)();
                        var11 = var6.height;
                        var6 = _closure1_slot10;
                        var6 = var12.bind(var13)(var11, var6);
                        var1['height'] = var6;
                        var6 = var3[var9];
                        var12 = var5.bind(var7)(var6);
                        var11 = var12.withSpring;
                        var6 = var10.get;
                        var6 = var6.bind(var10)();
                        var6 = var6.width;
                        var13 = _closure1_slot8;
                        var6 = var11.bind(var12)(var6, var13);
                        var1['width'] = var6;
                        var6 = var3[var9];
                        var12 = var5.bind(var7)(var6);
                        var11 = var12.withSpring;
                        var14 = _closure1_slot1;
                        var6 = 45;
                        var6 = var3[var6];
                        var14 = var14.bind(var7)(var6);
                        var6 = var10.get;
                        var6 = var6.bind(var10)();
                        var15 = var6.width;
                        var6 = 2;
                        var6 = var15 / var6;
                        var14 = var14.bind(var7)(var6);
                        var6 = -1;
                        var6 = var6 * var14;
                        var6 = var11.bind(var12)(var6, var13);
                        var1['marginLeft'] = var6;
                        var3 = var3[var9];
                        var6 = var5.bind(var7)(var3);
                        var5 = var6.withSpring;
                        var3 = var10.get;
                        var3 = var3.bind(var10)();
                        var10 = var3.hidden;
                        var3 = 1;
                        if(!var10) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                        var3 = 0;
case 39:
                        var2 = _closure1_slot8;
                        var2 = var5.bind(var6)(var3, var2);
                        var1['opacity'] = var2;
                        var3 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = var5[var9];
                        var12 = var6.bind(var7)(var2);
                        var11 = var12.withSpring;
                        var10 = _closure2_slot13;
                        var2 = var10.get;
                        var2 = var2.bind(var10)();
                        var10 = var2.x;
                        var2 = _closure1_slot7;
                        var2 = var11.bind(var12)(var10, var2);
                        var3['translateX'] = var2;
                        var2 = new Array(2);
                        var2[0] = var3;
                        var3 = {};
                        var5 = var5[var9];
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.withSpring;
                        var9 = _closure2_slot7;
                        var5 = var9.get;
                        var5 = var5.bind(var9)();
                        if(var5) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                        var9 = _closure2_slot13;
                        var5 = var9.get;
                        var5 = var5.bind(var9)();
                        var5 = var5.hidden;
                        if(var5) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                        var9 = _closure2_slot0;
                        var5 = var9.get;
                        var5 = var5.bind(var9)();
                        var5 = var5.active;
                        if(!var5) { _fun0009_ip = 41; continue _fun0009 }
case 45:
                        var9 = _closure2_slot0;
                        var5 = var9.get;
                        var5 = var5.bind(var9)();
                        var5 = var5.requiresPop;
                        if(var5) { _fun0009_ip = 41; continue _fun0009 }
case 43:
                        var9 = _closure2_slot13;
                        var5 = var9.get;
                        var5 = var5.bind(var9)();
                        var9 = var5.height;
                        var5 = _closure1_slot12;
                        var9 = var9 + var5;
                        var10 = _closure2_slot12;
                        var5 = var10.get;
                        var5 = var5.bind(var10)();
                        var5 = var9 + var5;
                        _fun0009_ip = 46; continue _fun0009;
case 41:
                        var9 = _closure2_slot13;
                        var8 = var9.get;
                        var8 = var8.bind(var9)();
                        var5 = var8.y;
case 46:
                        var4 = _closure1_slot7;
                        var4 = var6.bind(var7)(var5, var4);
                        var3['translateY'] = var4;
                        var2[1] = var3;
                        var1['transform'] = var2;
                        return var1;
                    }
                };
                var11 = {};
                var33 = 35;
                var33 = var22[var33];
                var33 = var16.bind(var4)(var33);
                var33 = var33.withSpring;
                var11['withSpring'] = var33;
                var11['wrapperSpecs'] = var21;
                var11['borderRadius'] = var25;
                var25 = _closure1_slot9;
                var11['BORDER_RADIUS_PHYSICS'] = var25;
                var25 = _closure1_slot10;
                var11['PANEL_CONTROLS_HEIGHT_PHYSICS'] = var25;
                var25 = _closure1_slot8;
                var11['MODE_CHANGE_PHYSICS'] = var25;
                var25 = 45;
                var25 = var22[var25];
                var25 = var12.bind(var4)(var25);
                var11['roundToNearestPixel'] = var25;
                var25 = _closure1_slot7;
                var11['UI_SHOW_HIDE_PHYSICS'] = var25;
                var11['useReducedMotion'] = var18;
                var11['gestureState'] = var29;
                var18 = _closure1_slot12;
                var11['CALL_TILE_GUTTER'] = var18;
                var11['accessoryHeights'] = var30;
                var2['__closure'] = var11;
                var11 = 14734014706335.0;
                var2['__workletHash'] = var11;
                var11 = _closure1_slot38;
                var2['__initData'] = var11;
                var25 = var5.bind(var10)(var2);
                var2 = var22[var34];
                var10 = var16.bind(var4)(var2);
                var5 = var10.useAnimatedProps;
                var2 = function de() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = {};
                        var4 = _closure2_slot5;
                        var3 = var4.get;
                        var4 = var3.bind(var4)();
                        var3 = _closure1_slot11;
                        var3 = var3.PANEL;
                        if(!(var4 === var3)) { _fun0010_ip = 47; continue _fun0010 }
case 48:
                        var3 = _closure2_slot13;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var3 = var2.hidden;
                        var2 = 'auto';
                        if(!var3) { _fun0010_ip = 49; continue _fun0010 }
case 47:
                        var2 = 'none';
case 49:
                        var1['pointerEvents'] = var2;
                        return var1;
                    }
                };
                var11 = {};
                var11['mode'] = var13;
                var13 = _closure1_slot11;
                var11['VoicePanelModes'] = var13;
                var11['wrapperSpecs'] = var21;
                var2['__closure'] = var11;
                var11 = 5608048435620.0;
                var2['__workletHash'] = var11;
                var11 = _closure1_slot39;
                var2['__initData'] = var11;
                var13 = var5.bind(var10)(var2);
                var2 = function useControlsGesture(arg1, arg2, arg3, arg4) {
                    var17 = arg1;
                    var18 = arg2;
                    var14 = arg3;
                    var22 = arg4;
                    var _closure3_slot0 = var17;
                    var _closure3_slot1 = var18;
                    var _closure3_slot2 = var14;
                    var _closure3_slot3 = var22;
                    var7 = _closure1_slot4;
                    var3 = var7.useContext;
                    var26 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = 14;
                    var2 = var13[var2];
                    var12 = undefined;
                    var2 = var26.bind(var12)(var2);
                    var2 = var3.bind(var7)(var2);
                    var25 = var2.controlsSpecs;
                    var _closure3_slot4 = var25;
                    var15 = var2.windowDimensions;
                    var _closure3_slot5 = var15;
                    var9 = var2.wrapperDimensions;
                    var _closure3_slot6 = var9;
                    var21 = var2.safeArea;
                    var _closure3_slot7 = var21;
                    var11 = _closure1_slot0;
                    var10 = 15;
                    var2 = var13[var10];
                    var5 = var11.bind(var12)(var2);
                    var3 = var5.useSharedValue;
                    var4 = 0;
                    var6 = false;
                    var2 = {'absoluteX': 0, 'absoluteY': 0, 'x': 0, 'y': 0, 'height': 0, 'isDrawer': false, 'active': false, 'drawerTransitionHeight': 200, 'interFloatingTransitionHeight': 200};
                    var2 = var3.bind(var5)(var2);
                    var _closure3_slot8 = var2;
                    var3 = var13[var10];
                    var5 = var11.bind(var12)(var3);
                    var3 = var5.useSharedValue;
                    var16 = var3.bind(var5)(var4);
                    var _closure3_slot9 = var16;
                    var3 = var13[var10];
                    var5 = var11.bind(var12)(var3);
                    var3 = var5.useSharedValue;
                    var23 = var3.bind(var5)(var6);
                    var _closure3_slot10 = var23;
                    var3 = var13[var10];
                    var5 = var11.bind(var12)(var3);
                    var3 = var5.useSharedValue;
                    var19 = var3.bind(var5)(var4);
                    var _closure3_slot11 = var19;
                    var3 = var7.useRef;
                    var3 = var3.bind(var7)(var12);
                    var _closure3_slot12 = var3;
                    var3 = var13[var10];
                    var5 = var11.bind(var12)(var3);
                    var3 = var5.useSharedValue;
                    var20 = var3.bind(var5)(var6);
                    var _closure3_slot13 = var20;
                    var5 = var7.useState;
                    var3 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.createUseAnimatedScrollLock;
                        var10 = _closure3_slot12;
                        var9 = _closure3_slot13;
                        var8 = _closure3_slot11;
                        var7 = _closure3_slot10;
                        var11 = var6;
                        var1 = var11[var5](var10, var9, var8, var7, var6);
                        return var1;
                    };
                    var6 = var5.bind(var7)(var3);
                    var5 = _closure1_slot3;
                    var3 = 1;
                    var3 = var5.bind(var12)(var6, var3);
                    var3 = var3[var4];
                    var4 = 17;
                    var4 = var13[var4];
                    var4 = var26.bind(var12)(var4);
                    var24 = var4.bind(var12)();
                    var _closure3_slot14 = var24;
                    var4 = 18;
                    var4 = var13[var4];
                    var6 = var11.bind(var12)(var4);
                    var5 = var6.useToken;
                    var4 = 10;
                    var4 = var13[var4];
                    var4 = var26.bind(var12)(var4);
                    var4 = var4.modules;
                    var4 = var4.mobile;
                    var4 = var4.VOICE_PANEL_GUTTER;
                    var4 = var5.bind(var6)(var4);
                    var _closure3_slot15 = var4;
                    var6 = var7.useMemo;
                    var5 = new Array(15);
                    var5[0] = var25;
                    var5[1] = var24;
                    var5[2] = var2;
                    var5[3] = var23;
                    var5[4] = var22;
                    var5[5] = var21;
                    var5[6] = var20;
                    var5[7] = var19;
                    var5[8] = var18;
                    var5[9] = var17;
                    var5[10] = var16;
                    var5[11] = var15;
                    var5[12] = var9;
                    var5[13] = var14;
                    var5[14] = var4;
                    var4 = function() {
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var17 = 19;
                        var2 = var10[var17];
                        var8 = undefined;
                        var2 = var9.bind(var8)(var2);
                        var3 = var2.Gesture;
                        var2 = var3.Pan;
                        var5 = var2.bind(var3)();
                        var3 = var5.manualActivation;
                        var2 = true;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.maxPointers;
                        var2 = 1;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.shouldCancelWhenOutside;
                        var2 = false;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.withRef;
                        var2 = _closure3_slot12;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onTouchesDown;
                        var2 = function b(arg1) {
                            var5 = arg1;
                            var2 = _closure3_slot9;
                            var1 = var2.set;
                            var6 = 0;
                            var1 = var1.bind(var2)(var6);
                            var3 = _closure3_slot8;
                            var2 = var3.set;
                            var1 = {};
                            var7 = var5.changedTouches;
                            var7 = var7[var6];
                            var7 = var7.absoluteX;
                            var1['absoluteX'] = var7;
                            var5 = var5.changedTouches;
                            var5 = var5[var6];
                            var5 = var5.absoluteY;
                            var1['absoluteY'] = var5;
                            var6 = _closure3_slot2;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var5 = var5.x;
                            var1['x'] = var5;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var5 = var5.y;
                            var1['y'] = var5;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var5 = var5.height;
                            var1['height'] = var5;
                            var5 = _closure3_slot4;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var5 = var4.mode;
                            var4 = _closure1_slot15;
                            var4 = var4.DRAWER;
                            var4 = var5 === var4;
                            var1['isDrawer'] = var4;
                            var4 = false;
                            var1['active'] = var4;
                            var4 = 200;
                            var1['drawerTransitionHeight'] = var4;
                            var1['interFloatingTransitionHeight'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var6 = {};
                        var11 = _closure3_slot9;
                        var6['touchMoveCount'] = var11;
                        var14 = _closure3_slot8;
                        var6['gestureSpecs'] = var14;
                        var22 = _closure3_slot2;
                        var6['wrapperSpecs'] = var22;
                        var16 = _closure3_slot4;
                        var6['controlsSpecs'] = var16;
                        var15 = _closure1_slot15;
                        var6['VoicePanelControlsModes'] = var15;
                        var12 = 200;
                        var6['TRANSITIONAL_HEIGHT'] = var12;
                        var6['INTER_FLOATING_TRANSITIONAL_HEIGHT'] = var12;
                        var2['__closure'] = var6;
                        var6 = 3524850376026.0;
                        var2['__workletHash'] = var6;
                        var6 = _closure1_slot30;
                        var2['__initData'] = var6;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onStart;
                        var2 = function R() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.runOnJS;
                            var2 = _closure3_slot14;
                            var2 = var2.lock;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var13 = {};
                        var7 = 15;
                        var6 = var10[var7];
                        var6 = var9.bind(var8)(var6);
                        var6 = var6.runOnJS;
                        var13['runOnJS'] = var6;
                        var6 = _closure3_slot14;
                        var13['gestureLock'] = var6;
                        var2['__closure'] = var13;
                        var13 = 11720944776433.0;
                        var2['__workletHash'] = var13;
                        var13 = _closure1_slot29;
                        var2['__initData'] = var13;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onTouchesMove;
                        var2 = function h(arg1, arg2) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var5 = arg1;
                                var3 = arg2;
                                var6 = var5.state;
                                var7 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 19;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var7.bind(var1)(var2);
                                var2 = var2.State;
                                var2 = var2.BEGAN;
                                if(!(var6 === var2)) { _fun0011_ip = 50; continue _fun0011 }
case 51:
                                var7 = _closure3_slot8;
                                var6 = var7.get;
                                var6 = var6.bind(var7)();
                                var6 = var6.active;
                                if(var6) { _fun0011_ip = 50; continue _fun0011 }
case 52:
                                var7 = _closure3_slot4;
                                var6 = var7.get;
                                var6 = var6.bind(var7)();
                                var7 = var6.mode;
                                var6 = _closure1_slot15;
                                var6 = var6.HIDDEN;
                                if(!(var7 === var6)) { _fun0011_ip = 18; continue _fun0011 }
case 34:
                                var6 = var3.fail;
                                var6 = var6.bind(var3)();
                                _fun0011_ip = 50; continue _fun0011;
case 18:
                                var7 = _closure3_slot9;
                                var8 = var7.set;
                                var6 = var7.get;
                                var9 = var6.bind(var7)();
                                var6 = 1;
                                var6 = var9 + var6;
                                var6 = var8.bind(var7)(var6);
                                var6 = var7.get;
                                var7 = var6.bind(var7)();
                                var6 = _closure1_slot22;
                                var9 = var7 <= var6;
                                if(var9) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                                var7 = _closure3_slot10;
                                var6 = var7.get;
                                var9 = var6.bind(var7)();
case 53:
                                var7 = _closure3_slot1;
                                var6 = var7.get;
                                var7 = var6.bind(var7)();
                                var8 = 'settings';
                                if(!(var8 !== var7)) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                                var6 = 'app_launcher';
                                var12 = 0;
                                if(!(var6 === var7)) { _fun0011_ip = 57; continue _fun0011 }
case 55:
                                var7 = _closure3_slot11;
                                var6 = var7.get;
                                var12 = var6.bind(var7)();
case 57:
                                var5 = var5.changedTouches;
                                var10 = 0;
                                var6 = var5[var10];
                                var5 = var6.absoluteY;
                                var6 = var6.absoluteX;
                                var11 = _closure3_slot8;
                                var7 = var11.get;
                                var7 = var7.bind(var11)();
                                var7 = var7.absoluteY;
                                var11 = var7 - var5;
                                var13 = _closure3_slot4;
                                var7 = var13.get;
                                var7 = var7.bind(var13)();
                                var13 = var7.mode;
                                var7 = _closure1_slot15;
                                var7 = var7.DRAWER;
                                var7 = var13 === var7;
                                if(!var7) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                                var7 = var9;
case 58:
                                if(!var7) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                                var9 = var11 >= var10;
                                if(var9) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                                var9 = var12 > var10;
case 62:
                                var7 = var9;
case 60:
                                if(var7) { _fun0011_ip = 50; continue _fun0011 }
case 64:
                                var9 = _closure3_slot4;
                                var7 = var9.get;
                                var7 = var7.bind(var9)();
                                var9 = var7.mode;
                                var7 = _closure1_slot15;
                                var7 = var7.FLOATING_DEFAULT;
                                if(!(var9 === var7)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                                var7 = 30;
                                if(!(!(var11 > var7))) { _fun0011_ip = 67; continue _fun0011 }
case 65:
                                var9 = _closure3_slot4;
                                var7 = var9.get;
                                var7 = var7.bind(var9)();
                                var9 = var7.mode;
                                var7 = _closure1_slot15;
                                var7 = var7.DRAWER;
                                if(!(var9 === var7)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                                var7 = -30;
                                if(!(!(var11 < var7))) { _fun0011_ip = 67; continue _fun0011 }
case 70:
                                var7 = 30;
                                if(!(!(var11 > var7))) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                                var7 = global;
                                var10 = var7.Math;
                                var9 = var10.abs;
                                var9 = var9.bind(var10)(var11);
                                var11 = var7.Math;
                                var10 = var11.abs;
                                var7 = 30;
                                var7 = var10.bind(var11)(var7);
                                if(!(var9 > var7)) { _fun0011_ip = 50; continue _fun0011 }
case 71:
                                var7 = var3.fail;
                                var7 = var7.bind(var3)();
                                _fun0011_ip = 50; continue _fun0011;
case 67:
                                var11 = _closure3_slot8;
                                var10 = var11.set;
                                var7 = {};
                                var7['absoluteX'] = var6;
                                var7['absoluteY'] = var5;
                                var6 = _closure3_slot2;
                                var5 = var6.get;
                                var5 = var5.bind(var6)();
                                var5 = var5.x;
                                var7['x'] = var5;
                                var5 = var6.get;
                                var5 = var5.bind(var6)();
                                var5 = var5.y;
                                var7['y'] = var5;
                                var5 = var6.get;
                                var5 = var5.bind(var6)();
                                var5 = var5.height;
                                var7['height'] = var5;
                                var9 = _closure3_slot4;
                                var5 = var9.get;
                                var5 = var5.bind(var9)();
                                var12 = var5.mode;
                                var6 = _closure1_slot15;
                                var5 = var6.DRAWER;
                                var5 = var12 === var5;
                                var7['isDrawer'] = var5;
                                var5 = true;
                                var7['active'] = var5;
                                var12 = 200;
                                var7['drawerTransitionHeight'] = var12;
                                var7['interFloatingTransitionHeight'] = var12;
                                var7 = var10.bind(var11)(var7);
                                var7 = var9.get;
                                var7 = var7.bind(var9)();
                                var7 = var7.mode;
                                var6 = var6.DRAWER;
                                var6 = var7 !== var6;
                                if(!var6) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                                var7 = _closure3_slot0;
                                var6 = var8 !== var7;
case 72:
                                if(!var6) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var4 = 15;
                                var4 = var9[var4];
                                var7 = var8.bind(var1)(var4);
                                var6 = var7.runOnJS;
                                var4 = _closure3_slot3;
                                var6 = var6.bind(var7)(var4);
                                var4 = {'tab': 'settings', 'source': null, 'disableControlsUpdate': true};
                                var7 = 20;
                                var7 = var9[var7];
                                var7 = var8.bind(var1)(var7);
                                var7 = var7.VoicePanelTabAnalyticsSources;
                                var7 = var7.GESTURE;
                                var4['source'] = var7;
                                var4 = var6.bind(var1)(var4);
case 74:
                                var4 = _closure3_slot13;
                                var2 = var4.set;
                                var2 = var2.bind(var4)(var5);
                                var2 = var3.activate;
                                var2 = var2.bind(var3)();
case 50:
                                return var1;
                            }
                        };
                        var13 = {};
                        var17 = var10[var17];
                        var17 = var9.bind(var8)(var17);
                        var17 = var17.State;
                        var13['State'] = var17;
                        var13['gestureSpecs'] = var14;
                        var13['controlsSpecs'] = var16;
                        var13['VoicePanelControlsModes'] = var15;
                        var13['touchMoveCount'] = var11;
                        var11 = _closure1_slot22;
                        var13['SCROLL_BEGIN_GRACE_TICKS'] = var11;
                        var11 = _closure3_slot10;
                        var13['isDragScrolling'] = var11;
                        var17 = _closure3_slot1;
                        var13['sharedTab'] = var17;
                        var17 = _closure3_slot11;
                        var13['scrollOffsetValue'] = var17;
                        var17 = 30;
                        var13['GESTURE_VERTICAL_MINIMUM'] = var17;
                        var13['wrapperSpecs'] = var22;
                        var13['TRANSITIONAL_HEIGHT'] = var12;
                        var13['INTER_FLOATING_TRANSITIONAL_HEIGHT'] = var12;
                        var12 = _closure3_slot0;
                        var13['tab'] = var12;
                        var12 = var10[var7];
                        var12 = var9.bind(var8)(var12);
                        var12 = var12.runOnJS;
                        var13['runOnJS'] = var12;
                        var12 = _closure3_slot3;
                        var13['openTab'] = var12;
                        var12 = 20;
                        var12 = var10[var12];
                        var12 = var9.bind(var8)(var12);
                        var12 = var12.VoicePanelTabAnalyticsSources;
                        var13['VoicePanelTabAnalyticsSources'] = var12;
                        var12 = _closure3_slot13;
                        var13['scrollLock'] = var12;
                        var2['__closure'] = var13;
                        var13 = 13965683053434.0;
                        var2['__workletHash'] = var13;
                        var13 = _closure1_slot28;
                        var2['__initData'] = var13;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onChange;
                        var2 = function p(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                var1 = arg1;
                                var3 = var1.absoluteY;
                                var2 = _closure3_slot8;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.absoluteY;
                                var3 = var3 - var1;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var5 = var1.height;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.y;
                                var1 = var5 - var1;
                                var7 = var1 - var3;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.drawerTransitionHeight;
                                if(!(!(var7 > var1))) { _fun0012_ip = 76; continue _fun0012 }
case 77:
                                var2 = _closure3_slot8;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.drawerTransitionHeight;
                                var10 = var7 / var1;
                                var3 = _closure3_slot4;
                                var1 = var3.get;
                                var1 = var1.bind(var3)();
                                var6 = var1.height;
                                var1 = global;
                                var5 = var1.Math;
                                var3 = var5.max;
                                var8 = _closure3_slot7;
                                var1 = var8.get;
                                var1 = var1.bind(var8)();
                                var1 = var1.bottom;
                                var1 = var7 - var1;
                                var1 = var1 - var6;
                                var11 = 0;
                                var1 = var3.bind(var5)(var1, var11);
                                var8 = -1;
                                var9 = var8 * var1;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.isDrawer;
                                if(!var1) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                                var3 = _closure3_slot8;
                                var2 = var3.set;
                                var1 = {};
                                var5 = var3.get;
                                var16 = var5.bind(var3)();
                                var17 = var1;
                                var5 = copyDataProperties(var17, var16);
                                var12 = false;
                                var5 = 'isDrawer';
                                var1[4] = var12;
                                var1 = var2.bind(var3)(var1);
case 78:
                                var2 = _closure3_slot2;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.height;
                                var1 = var6 === var1;
                                if(var1) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                                var3 = _closure3_slot2;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var1 = var2.drawerMode;
case 80:
                                if(var1) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                                var5 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var1 = 15;
                                var1 = var12[var1];
                                var3 = undefined;
                                var14 = var5.bind(var3)(var1);
                                var13 = var14.runOnJS;
                                var1 = 23;
                                var2 = var12[var1];
                                var2 = var5.bind(var3)(var2);
                                var2 = var2.triggerHapticFeedback;
                                var2 = var13.bind(var14)(var2);
                                var1 = var12[var1];
                                var1 = var5.bind(var3)(var1);
                                var1 = var1.HapticFeedbackTypes;
                                var1 = var1.IMPACT_MEDIUM;
                                var1 = var2.bind(var3)(var1);
case 82:
                                var3 = _closure3_slot2;
                                var2 = var3.set;
                                var1 = {};
                                var5 = var3.get;
                                var16 = var5.bind(var3)();
                                var17 = var1;
                                var5 = copyDataProperties(var17, var16);
                                var5 = 'x';
                                var1[4] = var11;
                                var12 = _closure3_slot7;
                                var5 = var12.get;
                                var5 = var5.bind(var12)();
                                var5 = var5.bottom;
                                var8 = var8 * var5;
                                var5 = 1.5;
                                var10 = var10 / var5;
                                var5 = 1;
                                var5 = var5 - var10;
                                var5 = var9 * var5;
                                var8 = var8 + var5;
                                var5 = 'y';
                                var1[4] = var8;
                                var9 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var5 = 22;
                                var8 = var8[var5];
                                var5 = undefined;
                                var11 = var9.bind(var5)(var8);
                                var10 = var11.getControlsDefaultWidth;
                                var8 = _closure3_slot5;
                                var5 = var8.get;
                                var5 = var5.bind(var8)();
                                var9 = var5.width;
                                var5 = var12.get;
                                var5 = var5.bind(var12)();
                                var8 = var5.left;
                                var5 = var12.get;
                                var5 = var5.bind(var12)();
                                var5 = var5.right;
                                var8 = var10.bind(var11)(var9, var8, var5);
                                var5 = 'width';
                                var1[4] = var8;
                                var5 = 'height';
                                var1[4] = var6;
                                var6 = false;
                                var5 = 'drawerMode';
                                var1[4] = var6;
                                var1 = var2.bind(var3)(var1);
                                _fun0012_ip = 84; continue _fun0012;
case 76:
                                var2 = _closure3_slot8;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var1 = var1.isDrawer;
                                if(var1) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                                var3 = _closure3_slot8;
                                var2 = var3.set;
                                var1 = {};
                                var5 = var3.get;
                                var16 = var5.bind(var3)();
                                var17 = var1;
                                var5 = copyDataProperties(var17, var16);
                                var6 = true;
                                var5 = 'isDrawer';
                                var1[4] = var6;
                                var1 = var2.bind(var3)(var1);
case 85:
                                var2 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var1 = 21;
                                var1 = var10[var1];
                                var9 = undefined;
                                var3 = var2.bind(var9)(var1);
                                var12 = _closure3_slot7;
                                var1 = var12.get;
                                var2 = var1.bind(var12)();
                                var1 = _closure3_slot15;
                                var1 = var3.bind(var9)(var2, var1);
                                var8 = var1.height;
                                var3 = _closure3_slot2;
                                var2 = var3.set;
                                var1 = {};
                                var6 = var3.get;
                                var16 = var6.bind(var3)();
                                var17 = var1;
                                var6 = copyDataProperties(var17, var16);
                                var11 = 0;
                                var6 = 'x';
                                var1[5] = var11;
                                var6 = 'y';
                                var1[5] = var11;
                                var6 = _closure1_slot0;
                                var5 = 22;
                                var5 = var10[var5];
                                var11 = var6.bind(var9)(var5);
                                var10 = var11.getControlsDrawerOpenWidth;
                                var6 = _closure3_slot5;
                                var5 = var6.get;
                                var5 = var5.bind(var6)();
                                var9 = var5.width;
                                var5 = var12.get;
                                var5 = var5.bind(var12)();
                                var6 = var5.left;
                                var5 = var12.get;
                                var5 = var5.bind(var12)();
                                var5 = var5.right;
                                var6 = var10.bind(var11)(var9, var6, var5);
                                var5 = 'width';
                                var1[4] = var6;
                                var5 = global;
                                var6 = var5.Math;
                                var5 = var6.min;
                                var9 = _closure3_slot6;
                                var4 = var9.get;
                                var4 = var4.bind(var9)();
                                var4 = var4.drawerHeight;
                                var4 = var4 - var8;
                                var5 = var5.bind(var6)(var7, var4);
                                var4 = 'height';
                                var1[3] = var5;
                                var5 = true;
                                var4 = 'drawerMode';
                                var1[3] = var5;
                                var1 = var2.bind(var3)(var1);
case 84:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var13 = {};
                        var13['gestureSpecs'] = var14;
                        var20 = _closure1_slot1;
                        var19 = 21;
                        var17 = var10[var19];
                        var17 = var20.bind(var8)(var17);
                        var13['calculateVoicePanelHeaderSpecs'] = var17;
                        var18 = _closure3_slot7;
                        var13['safeArea'] = var18;
                        var17 = _closure3_slot15;
                        var13['edgeGutter'] = var17;
                        var13['wrapperSpecs'] = var22;
                        var23 = 22;
                        var24 = var10[var23];
                        var24 = var9.bind(var8)(var24);
                        var24 = var24.getControlsDrawerOpenWidth;
                        var13['getControlsDrawerOpenWidth'] = var24;
                        var24 = _closure3_slot5;
                        var13['windowDimensions'] = var24;
                        var21 = _closure3_slot6;
                        var13['wrapperDimensions'] = var21;
                        var13['controlsSpecs'] = var16;
                        var24 = var10[var7];
                        var24 = var9.bind(var8)(var24);
                        var24 = var24.runOnJS;
                        var13['runOnJS'] = var24;
                        var24 = 23;
                        var25 = var10[var24];
                        var25 = var9.bind(var8)(var25);
                        var25 = var25.triggerHapticFeedback;
                        var13['triggerHapticFeedback'] = var25;
                        var24 = var10[var24];
                        var24 = var9.bind(var8)(var24);
                        var24 = var24.HapticFeedbackTypes;
                        var13['HapticFeedbackTypes'] = var24;
                        var23 = var10[var23];
                        var23 = var9.bind(var8)(var23);
                        var23 = var23.getControlsDefaultWidth;
                        var13['getControlsDefaultWidth'] = var23;
                        var2['__closure'] = var13;
                        var13 = 10007030283382.0;
                        var2['__workletHash'] = var13;
                        var13 = _closure1_slot27;
                        var2['__initData'] = var13;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onTouchesCancelled;
                        var2 = function u() {
                            var3 = _closure3_slot13;
                            var1 = var3.set;
                            var6 = false;
                            var1 = var1.bind(var3)(var6);
                            var3 = _closure3_slot10;
                            var1 = var3.set;
                            var1 = var1.bind(var3)(var6);
                            var4 = _closure3_slot8;
                            var3 = var4.set;
                            var1 = {};
                            var5 = var4.get;
                            var7 = var5.bind(var4)();
                            var8 = var1;
                            var5 = copyDataProperties(var8, var7);
                            var5 = 'active';
                            var1[4] = var6;
                            var1 = var3.bind(var4)(var1);
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.runOnJS;
                            var2 = _closure3_slot14;
                            var2 = var2.unlock;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var13 = {};
                        var13['scrollLock'] = var12;
                        var13['isDragScrolling'] = var11;
                        var13['gestureSpecs'] = var14;
                        var23 = var10[var7];
                        var23 = var9.bind(var8)(var23);
                        var23 = var23.runOnJS;
                        var13['runOnJS'] = var23;
                        var13['gestureLock'] = var6;
                        var2['__closure'] = var13;
                        var13 = 9808165597638.0;
                        var2['__workletHash'] = var13;
                        var13 = _closure1_slot26;
                        var2['__initData'] = var13;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onEnd;
                        var2 = function o(arg1) {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                var1 = arg1;
                                var4 = var1.velocityY;
                                var1 = global;
                                var2 = var1.Math;
                                var1 = var2.abs;
                                var2 = var1.bind(var2)(var4);
                                var1 = 200;
                                if(!(var2 > var1)) { _fun0013_ip = 87; continue _fun0013 }
case 48:
                                var3 = 0;
                                if(!(!(var4 < var3))) { _fun0013_ip = 88; continue _fun0013 }
case 87:
                                if(!(var2 < var1)) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                                var3 = _closure3_slot8;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.isDrawer;
                                if(var2) { _fun0013_ip = 91; continue _fun0013 }
case 89:
                                var3 = _closure3_slot4;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var4 = var2.mode;
                                var3 = _closure1_slot15;
                                var3 = var3.FLOATING_DEFAULT;
                                if(!(var4 !== var3)) { _fun0013_ip = 33; continue _fun0013 }
case 16:
                                var3 = _closure1_slot15;
                                var3 = var3.FLOATING_DEFAULT;
                                _fun0013_ip = 92; continue _fun0013;
case 33:
                                var2 = _closure1_slot15;
                                var3 = var2.RESET;
case 92:
                                _fun0013_ip = 93; continue _fun0013;
case 91:
                                var2 = _closure3_slot4;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var4 = var1.mode;
                                var1 = _closure1_slot15;
                                var1 = var1.DRAWER;
                                if(!(var4 !== var1)) { _fun0013_ip = 94; continue _fun0013 }
case 95:
                                var1 = _closure1_slot15;
                                var1 = var1.DRAWER;
                                _fun0013_ip = 96; continue _fun0013;
case 94:
                                var2 = _closure1_slot15;
                                var1 = var2.RESET;
case 96:
                                var3 = var1;
case 93:
                                _fun0013_ip = 97; continue _fun0013;
case 88:
                                var6 = _closure3_slot2;
                                var5 = var6.set;
                                var4 = {};
                                var2 = var6.get;
                                var12 = var2.bind(var6)();
                                var13 = var4;
                                var2 = copyDataProperties(var13, var12);
                                var7 = _closure3_slot6;
                                var2 = var7.get;
                                var2 = var2.bind(var7)();
                                var8 = var2.drawerHeight;
                                var9 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var7 = 21;
                                var7 = var10[var7];
                                var11 = undefined;
                                var10 = var9.bind(var11)(var7);
                                var9 = _closure3_slot7;
                                var7 = var9.get;
                                var9 = var7.bind(var9)();
                                var7 = _closure3_slot15;
                                var7 = var10.bind(var11)(var9, var7);
                                var7 = var7.height;
                                var8 = var8 - var7;
                                var7 = 'height';
                                var4[6] = var8;
                                var4 = var5.bind(var6)(var4);
                                var4 = _closure3_slot4;
                                var1 = var4.get;
                                var1 = var1.bind(var4)();
                                var4 = var1.mode;
                                var1 = _closure1_slot15;
                                var1 = var1.DRAWER;
                                if(!(var4 !== var1)) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                                var1 = _closure1_slot15;
                                var1 = var1.DRAWER;
                                _fun0013_ip = 100; continue _fun0013;
case 98:
                                var2 = _closure1_slot15;
                                var1 = var2.RESET;
case 100:
                                var3 = var1;
case 97:
                                var4 = _closure3_slot13;
                                var1 = var4.set;
                                var5 = false;
                                var1 = var1.bind(var4)(var5);
                                var4 = _closure3_slot10;
                                var1 = var4.set;
                                var1 = var1.bind(var4)(var5);
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 15;
                                var4 = var4[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var4);
                                var4 = var5.runOnJS;
                                var2 = _closure3_slot14;
                                var2 = var2.unlock;
                                var2 = var4.bind(var5)(var2);
                                var2 = var2.bind(var1)(var3);
                                return var1;
                            }
                        };
                        var13 = {};
                        var13['wrapperSpecs'] = var22;
                        var13['wrapperDimensions'] = var21;
                        var19 = var10[var19];
                        var19 = var20.bind(var8)(var19);
                        var13['calculateVoicePanelHeaderSpecs'] = var19;
                        var13['safeArea'] = var18;
                        var13['edgeGutter'] = var17;
                        var13['controlsSpecs'] = var16;
                        var13['VoicePanelControlsModes'] = var15;
                        var13['gestureSpecs'] = var14;
                        var13['scrollLock'] = var12;
                        var13['isDragScrolling'] = var11;
                        var14 = var10[var7];
                        var14 = var9.bind(var8)(var14);
                        var14 = var14.runOnJS;
                        var13['runOnJS'] = var14;
                        var13['gestureLock'] = var6;
                        var2['__closure'] = var13;
                        var13 = 12106761920053.0;
                        var2['__workletHash'] = var13;
                        var13 = _closure1_slot25;
                        var2['__initData'] = var13;
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.onFinalize;
                        var1 = function t() {
                            var3 = _closure3_slot13;
                            var1 = var3.set;
                            var4 = false;
                            var1 = var1.bind(var3)(var4);
                            var3 = _closure3_slot10;
                            var1 = var3.set;
                            var1 = var1.bind(var3)(var4);
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.runOnJS;
                            var2 = _closure3_slot14;
                            var2 = var2.unlock;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var5 = {};
                        var5['scrollLock'] = var12;
                        var5['isDragScrolling'] = var11;
                        var7 = var10[var7];
                        var7 = var9.bind(var8)(var7);
                        var7 = var7.runOnJS;
                        var5['runOnJS'] = var7;
                        var5['gestureLock'] = var6;
                        var1['__closure'] = var5;
                        var5 = 15918380969837.0;
                        var1['__workletHash'] = var5;
                        var4 = _closure1_slot24;
                        var1['__initData'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var6.bind(var7)(var4, var5);
                    var5 = var13[var10];
                    var7 = var11.bind(var12)(var5);
                    var6 = var7.useAnimatedReaction;
                    var5 = function p() {
                        var2 = _closure3_slot2;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var1 = var1.drawerMode;
                        return var1;
                    };
                    var9 = {};
                    var9['wrapperSpecs'] = var14;
                    var5['__closure'] = var9;
                    var9 = 2949834828607.0;
                    var5['__workletHash'] = var9;
                    var9 = _closure1_slot31;
                    var5['__initData'] = var9;
                    var1 = function u(arg1, arg2) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var2 = arg1;
                            var1 = arg2;
                            if(!(var2 !== var1)) { _fun0014_ip = 101; continue _fun0014 }
case 102:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 15;
                            var1 = var5[var1];
                            var3 = undefined;
                            var7 = var4.bind(var3)(var1);
                            var6 = var7.runOnJS;
                            var1 = 23;
                            var2 = var5[var1];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.triggerHapticFeedback;
                            var2 = var6.bind(var7)(var2);
                            var1 = var5[var1];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_MEDIUM;
                            var1 = var2.bind(var3)(var1);
case 101:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = {};
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.runOnJS;
                    var9['runOnJS'] = var10;
                    var10 = 23;
                    var14 = var13[var10];
                    var14 = var11.bind(var12)(var14);
                    var14 = var14.triggerHapticFeedback;
                    var9['triggerHapticFeedback'] = var14;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.HapticFeedbackTypes;
                    var9['HapticFeedbackTypes'] = var10;
                    var1['__closure'] = var9;
                    var9 = 10186886451735.0;
                    var1['__workletHash'] = var9;
                    var8 = _closure1_slot32;
                    var1['__initData'] = var8;
                    var1 = var6.bind(var7)(var5, var1);
                    var1 = {};
                    var1['gesture'] = var4;
                    var1['useScrollLock'] = var3;
                    var1['gestureSpecs'] = var2;
                    return var1;
                };
                var44 = undefined;
                var43 = var20;
                var42 = var19;
                var41 = var21;
                var40 = var17;
                var2 = var44[var2](var43, var42, var41, var40, var39);
                var11 = var2.gesture;
                var5 = var2.useScrollLock;
                var18 = var2.gestureSpecs;
                var2 = function useWrapperSpecs(arg1) {
                    var13 = arg1;
                    var _closure3_slot0 = var13;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 24;
                    var3 = var10[var1];
                    var1 = undefined;
                    var4 = var9.bind(var1)(var3);
                    var3 = var4.useIsScreenReaderEnabled;
                    var8 = var3.bind(var4)();
                    var _closure3_slot1 = var8;
                    var7 = _closure1_slot1;
                    var3 = 25;
                    var3 = var10[var3];
                    var4 = var7.bind(var1)(var3);
                    var3 = {};
                    var5 = true;
                    var3['ignoreKeyboard'] = var5;
                    var15 = var4.bind(var1)(var3);
                    var _closure3_slot2 = var15;
                    var5 = _closure1_slot4;
                    var4 = var5.useContext;
                    var3 = 14;
                    var3 = var10[var3];
                    var3 = var7.bind(var1)(var3);
                    var3 = var4.bind(var5)(var3);
                    var18 = var3.controlsSpecs;
                    var _closure3_slot3 = var18;
                    var16 = var3.windowDimensions;
                    var _closure3_slot4 = var16;
                    var17 = var3.mode;
                    var _closure3_slot5 = var17;
                    var11 = var3.setControlsMode;
                    var _closure3_slot6 = var11;
                    var14 = var3.safeArea;
                    var _closure3_slot7 = var14;
                    var19 = var3.connected;
                    var _closure3_slot8 = var19;
                    var12 = 15;
                    var3 = var10[var12];
                    var5 = var9.bind(var1)(var3);
                    var4 = var5.useAnimatedReaction;
                    var3 = function n() {
                        var1 = {};
                        var4 = _closure3_slot8;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var1['connected'] = var3;
                        var4 = _closure3_slot3;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.mode;
                        var1['currentControlsMode'] = var3;
                        var5 = _closure3_slot5;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var1['mode'] = var3;
                        var5 = _closure3_slot4;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var3 = var3.width;
                        var1['windowWidth'] = var3;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var3 = var3.height;
                        var1['windowHeight'] = var3;
                        var5 = _closure3_slot2;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var3 = var3.height;
                        var1['windowHeightIgnoringKeyboard'] = var3;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.height;
                        var1['controlsHeightValue'] = var3;
                        var3 = _closure3_slot7;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var1['safeArea'] = var2;
                        return var1;
                    };
                    var7 = {};
                    var7['connected'] = var19;
                    var7['controlsSpecs'] = var18;
                    var7['mode'] = var17;
                    var7['windowDimensions'] = var16;
                    var7['windowDimensionsIgnoringKeyboard'] = var15;
                    var7['safeArea'] = var14;
                    var3['__closure'] = var7;
                    var7 = 11588370229444.0;
                    var3['__workletHash'] = var7;
                    var7 = _closure1_slot33;
                    var3['__initData'] = var7;
                    var2 = function s(arg1, arg2) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var2 = arg1;
                            var7 = arg2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var3 = var3[var1];
                            var1 = undefined;
                            var8 = var4.bind(var1)(var3);
                            var4 = var8.cheapWorkletShallowEqual;
                            var6 = null;
                            var9 = var6 != var7;
                            var3 = undefined;
                            if(!var9) { _fun0015_ip = 103; continue _fun0015 }
case 90:
                            var3 = var7;
case 103:
                            var3 = var4.bind(var8)(var2, var3);
                            if(var3) { _fun0015_ip = 104; continue _fun0015 }
case 36:
                            var3 = var2.currentControlsMode;
                            var4 = var2.mode;
                            var13 = var2.windowWidth;
                            var10 = var2.windowHeightIgnoringKeyboard;
                            var8 = var2.controlsHeightValue;
                            var9 = var2.safeArea;
                            var2 = _closure1_slot11;
                            var2 = var2.DISMISSED;
                            if(!(var2 !== var4)) { _fun0015_ip = 105; continue _fun0015 }
case 34:
                            var2 = _closure1_slot11;
                            var2 = var2.PIP;
                            if(!(var2 !== var4)) { _fun0015_ip = 105; continue _fun0015 }
case 106:
                            var2 = _closure1_slot11;
                            var2 = var2.PANEL;
                            var2 = _closure1_slot15;
                            var2 = var2.RESET;
                            if(!(var2 !== var3)) { _fun0015_ip = 107; continue _fun0015 }
case 108:
                            var2 = _closure1_slot15;
                            var2 = var2.HIDDEN;
                            if(!(var2 !== var3)) { _fun0015_ip = 109; continue _fun0015 }
case 110:
                            var2 = _closure1_slot15;
                            var2 = var2.FLOATING_DEFAULT;
                            if(!(var2 !== var3)) { _fun0015_ip = 44; continue _fun0015 }
case 53:
                            var2 = _closure1_slot15;
                            var2 = var2.DRAWER;
                            if(!(var2 === var3)) { _fun0015_ip = 104; continue _fun0015 }
case 111:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var14 = 27;
                            var2 = var2[var14];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.getDrawerSpec;
                            var2 = var9.top;
                            var2 = var3.bind(var4)(var10, var2);
                            var10 = var2.minHeight;
                            var3 = var2.maxHeight;
                            var11 = _closure3_slot0;
                            var4 = var11.get;
                            var4 = var4.bind(var11)();
                            var4 = var4.height;
                            if(!(!(var4 <= var8))) { _fun0015_ip = 112; continue _fun0015 }
case 113:
                            if(!(var6 != var7)) { _fun0015_ip = 114; continue _fun0015 }
case 115:
                            var11 = _closure3_slot0;
                            var4 = var11.get;
                            var4 = var4.bind(var11)();
                            var11 = var4.height;
                            var12 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var14];
                            var15 = var12.bind(var1)(var4);
                            var14 = var15.getDrawerSpec;
                            var12 = var7.windowHeight;
                            var4 = var7.safeArea;
                            var4 = var4.top;
                            var4 = var14.bind(var15)(var12, var4);
                            var4 = var4.maxHeight;
                            if(!(var11 !== var4)) { _fun0015_ip = 112; continue _fun0015 }
case 114:
                            var11 = _closure3_slot0;
                            var4 = var11.get;
                            var4 = var4.bind(var11)();
                            var11 = var4.height;
                            var12 = var3 + var10;
                            var4 = 2;
                            var4 = var12 / var4;
                            if(!(var11 >= var4)) { _fun0015_ip = 116; continue _fun0015 }
case 112:
                            var10 = var3;
case 116:
                            var4 = _closure3_slot0;
                            var3 = var4.set;
                            var2 = {'x': 0, 'y': 0, 'width': null, 'height': null, 'drawerMode': true, 'hidden': false};
                            var12 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var11 = 22;
                            var11 = var14[var11];
                            var15 = var12.bind(var1)(var11);
                            var14 = var15.getControlsDrawerOpenWidth;
                            var12 = var9.left;
                            var11 = var9.right;
                            var11 = var14.bind(var15)(var13, var12, var11);
                            var2['width'] = var11;
                            var2['height'] = var10;
                            var2 = var3.bind(var4)(var2);
                            _fun0015_ip = 104; continue _fun0015;
case 44:
                            var4 = _closure3_slot0;
                            var3 = var4.set;
                            var2 = {'x': 0, 'y': null, 'width': null, 'height': null, 'drawerMode': false, 'hidden': false};
                            var10 = global;
                            var14 = var10.Math;
                            var12 = var14.max;
                            var11 = var9.bottom;
                            var10 = _closure1_slot13;
                            var11 = var12.bind(var14)(var11, var10);
                            var10 = -1;
                            var10 = var10 * var11;
                            var2['y'] = var10;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var10 = 22;
                            var10 = var12[var10];
                            var12 = var11.bind(var1)(var10);
                            var11 = var12.getControlsDefaultWidth;
                            var10 = var9.left;
                            var9 = var9.right;
                            var9 = var11.bind(var12)(var13, var10, var9);
                            var2['width'] = var9;
                            var2['height'] = var8;
                            var2 = var3.bind(var4)(var2);
                            _fun0015_ip = 104; continue _fun0015;
case 109:
                            var3 = _closure3_slot1;
                            var4 = _closure3_slot0;
                            if(var3) { _fun0015_ip = 117; continue _fun0015 }
case 118:
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var3 = var3.hidden;
                            if(var3) { _fun0015_ip = 104; continue _fun0015 }
case 119:
                            var8 = _closure3_slot0;
                            var3 = var8.set;
                            var2 = {};
                            var9 = var8.get;
                            var17 = var9.bind(var8)();
                            var18 = var2;
                            var9 = copyDataProperties(var18, var17);
                            var10 = true;
                            var9 = 'hidden';
                            var2[8] = var10;
                            var2 = var3.bind(var8)(var2);
                            _fun0015_ip = 104; continue _fun0015;
case 117:
                            var3 = var4.set;
                            var2 = {};
                            var8 = var4.get;
                            var17 = var8.bind(var4)();
                            var18 = var2;
                            var8 = copyDataProperties(var18, var17);
                            var9 = false;
                            var8 = 'hidden';
                            var2[7] = var9;
                            var2 = var3.bind(var4)(var2);
                            _fun0015_ip = 104; continue _fun0015;
case 107:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.runOnJS;
                            var2 = _closure3_slot6;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var8 = var6 == var7;
                            var4 = undefined;
                            if(var8) { _fun0015_ip = 120; continue _fun0015 }
case 121:
                            var4 = var7.currentControlsMode;
case 120:
                            if(!(var6 == var4)) { _fun0015_ip = 122; continue _fun0015 }
case 123:
                            var5 = _closure1_slot15;
                            var4 = var5.FLOATING_DEFAULT;
case 122:
                            var2['mode'] = var4;
                            var2 = var3.bind(var1)(var2);
                            var2 = undefined;
                            return var2;
case 105:
                            var4 = _closure3_slot0;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var2 = var2.hidden;
                            if(var2) { _fun0015_ip = 124; continue _fun0015 }
case 125:
                            var5 = _closure3_slot0;
                            var4 = var5.set;
                            var3 = {};
                            var6 = var5.get;
                            var17 = var6.bind(var5)();
                            var18 = var3;
                            var6 = copyDataProperties(var18, var17);
                            var7 = true;
                            var6 = 'hidden';
                            var3[5] = var7;
                            var2 = var4.bind(var5)(var3);
case 124:
                            var2 = undefined;
                            return var2;
case 104:
                            return var1;
                        }
                    };
                    var7 = {};
                    var14 = 26;
                    var14 = var10[var14];
                    var14 = var9.bind(var1)(var14);
                    var14 = var14.cheapWorkletShallowEqual;
                    var7['cheapWorkletShallowEqual'] = var14;
                    var14 = _closure1_slot11;
                    var7['VoicePanelModes'] = var14;
                    var7['wrapperSpecs'] = var13;
                    var13 = _closure1_slot15;
                    var7['VoicePanelControlsModes'] = var13;
                    var12 = var10[var12];
                    var12 = var9.bind(var1)(var12);
                    var12 = var12.runOnJS;
                    var7['runOnJS'] = var12;
                    var7['setControlsMode'] = var11;
                    var7['isScreenReaderEnabled'] = var8;
                    var8 = _closure1_slot13;
                    var7['EDGE_GUTTER'] = var8;
                    var8 = 22;
                    var11 = var10[var8];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.getControlsDefaultWidth;
                    var7['getControlsDefaultWidth'] = var11;
                    var11 = 27;
                    var11 = var10[var11];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.getDrawerSpec;
                    var7['getDrawerSpec'] = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.getControlsDrawerOpenWidth;
                    var7['getControlsDrawerOpenWidth'] = var8;
                    var2['__closure'] = var7;
                    var7 = 1154430392188.0;
                    var2['__workletHash'] = var7;
                    var6 = _closure1_slot34;
                    var2['__initData'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2 = var2.bind(var4)(var21);
                var2 = var6.useState;
                var2 = var2.bind(var6)(var27);
                var2 = var24.bind(var4)(var2, var9);
                var10 = var2[var8];
                var38 = var2[var3];
                var _closure2_slot15 = var38;
                var2 = var22[var34];
                var36 = var16.bind(var4)(var2);
                var35 = var36.useAnimatedReaction;
                var33 = function Ae() {
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var1 = var1.mode;
                    return var1;
                };
                var2 = {};
                var2['controlsSpecs'] = var31;
                var33['__closure'] = var2;
                var2 = 7719878249076.0;
                var33['__workletHash'] = var2;
                var2 = _closure1_slot40;
                var33['__initData'] = var2;
                var2 = function De(arg1, arg2) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var3 = arg1;
                        var4 = arg2;
                        var1 = var3 !== var4;
                        if(!var1) { _fun0016_ip = 126; continue _fun0016 }
case 127:
                        var1 = _closure2_slot1;
case 126:
                        if(!var1) { _fun0016_ip = 128; continue _fun0016 }
case 4:
                        var2 = _closure1_slot15;
                        var2 = var2.DRAWER;
                        if(!(var3 === var2)) { _fun0016_ip = 129; continue _fun0016 }
case 35:
                        var2 = _closure1_slot15;
                        var2 = var2.DRAWER;
                        if(!(var4 === var2)) { _fun0016_ip = 130; continue _fun0016 }
case 129:
                        var2 = _closure1_slot15;
                        var2 = var2.DRAWER;
                        var2 = var3 !== var2;
                        if(!var2) { _fun0016_ip = 131; continue _fun0016 }
case 29:
                        var3 = _closure1_slot15;
                        var3 = var3.DRAWER;
                        var2 = var4 === var3;
case 131:
                        if(!var2) { _fun0016_ip = 128; continue _fun0016 }
case 132:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var4 = undefined;
                        var5 = var3.bind(var4)(var2);
                        var3 = var5.runOnJS;
                        var2 = _closure2_slot15;
                        var3 = var3.bind(var5)(var2);
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
                        _fun0016_ip = 128; continue _fun0016;
case 130:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var1 = var3[var1];
                        var3 = undefined;
                        var4 = var2.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = _closure2_slot15;
                        var2 = var2.bind(var4)(var1);
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
case 128:
                        var1 = undefined;
                        return var1;
                    }
                };
                var37 = {};
                var37['isScreenReaderEnabled'] = var39;
                var39 = _closure1_slot15;
                var37['VoicePanelControlsModes'] = var39;
                var39 = var22[var34];
                var39 = var16.bind(var4)(var39);
                var39 = var39.runOnJS;
                var37['runOnJS'] = var39;
                var37['setIsDrawer'] = var38;
                var2['__closure'] = var37;
                var37 = 12036469956927.0;
                var2['__workletHash'] = var37;
                var37 = _closure1_slot41;
                var2['__initData'] = var37;
                var2 = var35.bind(var36)(var33, var2);
                var2 = var6.useState;
                var2 = var2.bind(var6)(var27);
                var2 = var24.bind(var4)(var2, var9);
                var24 = var2[var8];
                var33 = var2[var3];
                var _closure2_slot16 = var33;
                var2 = var22[var34];
                var9 = var16.bind(var4)(var2);
                var8 = var9.useAnimatedReaction;
                var3 = function Me() {
                    var2 = _closure2_slot13;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var1 = var1.drawerMode;
                    return var1;
                };
                var2 = {};
                var2['wrapperSpecs'] = var21;
                var3['__closure'] = var2;
                var2 = 2374715205601.0;
                var3['__workletHash'] = var2;
                var2 = _closure1_slot42;
                var3['__initData'] = var2;
                var2 = function be(arg1, arg2) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var2 = var1 !== var2;
                        if(!var2) { _fun0017_ip = 126; continue _fun0017 }
case 127:
                        var2 = _closure2_slot2;
case 126:
                        if(!var2) { _fun0017_ip = 13; continue _fun0017 }
case 133:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 15;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.runOnJS;
                        var2 = _closure2_slot16;
                        var2 = var4.bind(var5)(var2);
                        if(var1) { _fun0017_ip = 134; continue _fun0017 }
case 135:
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        _fun0017_ip = 13; continue _fun0017;
case 134:
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
case 13:
                        var1 = undefined;
                        return var1;
                    }
                };
                var27 = {};
                var27['isRefreshEnabled'] = var28;
                var34 = var22[var34];
                var34 = var16.bind(var4)(var34);
                var34 = var34.runOnJS;
                var27['runOnJS'] = var34;
                var27['setIsDrawerActive'] = var33;
                var2['__closure'] = var27;
                var27 = 1721919006032.0;
                var2['__workletHash'] = var27;
                var27 = _closure1_slot43;
                var2['__initData'] = var27;
                var2 = var8.bind(var9)(var3, var2);
                var2 = var6.useId;
                var27 = var2.bind(var6)();
                var3 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() {
                    var3 = _closure2_slot6;
                    var2 = {};
                    var1 = _closure1_slot15;
                    var1 = var1.FLOATING_DEFAULT;
                    var2['mode'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var9 = var3.bind(var6)(var1, var2);
                var3 = _closure1_slot20;
                var1 = 16;
                var1 = var22[var1];
                var1 = var16.bind(var4)(var1);
                var1 = var1.ControlsGestureScrollLock;
                var2 = var1.Provider;
                var1 = {};
                var1['value'] = var5;
                var8 = _closure1_slot18;
                var5 = 46;
                var5 = var22[var5];
                var6 = var12.bind(var4)(var5);
                var5 = {};
                var5['wrapperSpecs'] = var21;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var7 = _closure1_slot35;
                var6 = {};
                var6['channelId'] = var32;
                var6['wrapperSpecs'] = var21;
                var6['controlsSpecs'] = var31;
                var6['accessoryHeights'] = var30;
                var6['gestureState'] = var29;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var6 = 47;
                var6 = var22[var6];
                var7 = var12.bind(var4)(var6);
                var6 = {};
                var6['nativeID'] = var27;
                var27 = var23.accessibilityWrapper;
                var6['style'] = var27;
                var6['accessibilityViewIsModal'] = var10;
                var6['onAccessibilityEscape'] = var9;
                var9 = 'box-none';
                var6['pointerEvents'] = var9;
                var9 = 19;
                var9 = var22[var9];
                var9 = var16.bind(var4)(var9);
                var10 = var9.GestureDetector;
                var9 = {};
                var9['gesture'] = var11;
                var11 = 36;
                var11 = var22[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var27 = var23.wrapper;
                var23 = new Array(2);
                var23[0] = var27;
                var23[1] = var25;
                var11['style'] = var23;
                var11['animatedProps'] = var13;
                var13 = 11;
                var13 = var22[var13];
                var16 = var16.bind(var4)(var13);
                var13 = var16.isMetaQuest;
                var13 = var13.bind(var16)();
                if(var13) { _fun0005_ip = 136; continue _fun0005 }
case 137:
                var22 = _closure1_slot18;
                var16 = _closure1_slot23;
                var13 = {};
                var13['openTab'] = var17;
                var15 = var22.bind(var4)(var16, var13);
case 136:
                var13 = new Array(3);
                var13[0] = var15;
                var23 = _closure1_slot20;
                var16 = _closure1_slot0;
                var22 = _closure1_slot2;
                var15 = 48;
                var15 = var22[var15];
                var15 = var16.bind(var4)(var15);
                var22 = var15.ThemeContextProvider;
                var15 = {};
                var16 = undefined;
                if(!var28) { _fun0005_ip = 138; continue _fun0005 }
case 139:
                var16 = undefined;
                if(!var26) { _fun0005_ip = 138; continue _fun0005 }
case 140:
                var16 = undefined;
                if(var24) { _fun0005_ip = 138; continue _fun0005 }
case 141:
                var24 = _closure1_slot17;
                var16 = var24.MIDNIGHT;
case 138:
                var15['theme'] = var16;
                var25 = _closure1_slot18;
                var24 = _closure1_slot0;
                var27 = _closure1_slot2;
                var16 = 49;
                var16 = var27[var16];
                var16 = var24.bind(var4)(var16);
                var24 = var16.VoicePanelVisualEffectView;
                var16 = {};
                var26 = !var26;
                if(!var26) { _fun0005_ip = 142; continue _fun0005 }
case 143:
                var29 = _closure1_slot0;
                var30 = _closure1_slot2;
                var27 = 50;
                var27 = var30[var27];
                var29 = var29.bind(var4)(var27);
                var27 = var29.isAndroid;
                var27 = var27.bind(var29)();
                if(var27) { _fun0005_ip = 144; continue _fun0005 }
case 145:
                var27 = var28;
case 144:
                var26 = var27;
case 142:
                var16['matchAppTheme'] = var26;
                var16 = var25.bind(var4)(var24, var16);
                var24 = new Array(2);
                var24[0] = var16;
                var16 = _closure1_slot18;
                var26 = _closure1_slot37;
                var25 = {};
                var25['openTab'] = var17;
                var25['wrapperSpecs'] = var21;
                var25['sharedTab'] = var19;
                var25 = var16.bind(var4)(var26, var25);
                var24[1] = var25;
                var15['children'] = var24;
                var15 = var23.bind(var4)(var22, var15);
                var13[1] = var15;
                var15 = _closure1_slot1;
                var22 = _closure1_slot2;
                var14 = 51;
                var14 = var22[var14];
                var15 = var15.bind(var4)(var14);
                var14 = {};
                var14['wrapperSpecs'] = var21;
                var14['tab'] = var20;
                var14['sharedTab'] = var19;
                var14['gestureSpecs'] = var18;
                var14['openTab'] = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[2] = var14;
                var11['children'] = var13;
                var11 = var3.bind(var4)(var12, var11);
                var9['children'] = var11;
                var9 = var8.bind(var4)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 52;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/voice_panel/native/controls/VoicePanelControls.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();