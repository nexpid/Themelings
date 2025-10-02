// app/modules/voice_panel/native/header/VoicePanelHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var9 = true;
    var4['value'] = var9;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var16.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var15 = var4.StyleSheet;
    var _closure1_slot5 = var15;
    var4 = var4.Platform;
    var4 = 3;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MODE_CHANGE_PHYSICS;
    var _closure1_slot14 = var8;
    var10 = var4.UI_SHOW_HIDE_PHYSICS;
    var _closure1_slot15 = var10;
    var10 = var4.VoicePanelModes;
    var _closure1_slot16 = var10;
    var4 = var4.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var17 = var4.EDGE_GUTTER;
    var _closure1_slot18 = var17;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot19 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot20 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.jsx;
    var _closure1_slot21 = var10;
    var4 = var4.jsxs;
    var _closure1_slot22 = var4;
    var4 = 16;
    var4 = var6[var4];
    var13 = var16.bind(var1)(var4);
    var10 = var13.createAnimatedComponent;
    var4 = 17;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var4 = var10.bind(var13)(var4);
    var _closure1_slot23 = var4;
    var4 = {};
    var10 = 300;
    var4['duration'] = var10;
    var _closure1_slot24 = var4;
    var4 = 18;
    var4 = var6[var4];
    var13 = var5.bind(var1)(var4);
    var10 = var13.createStyles;
    var4 = {};
    var14 = {'zIndex': 1, 'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'paddingBottom': null, 'overflow': 'hidden'};
    var14['paddingBottom'] = var17;
    var4['headerWrapper'] = var14;
    var14 = {};
    var20 = var15.absoluteFillObject;
    var21 = var14;
    var17 = copyDataProperties(var21, var20);
    var18 = 0.7;
    var17 = 'opacity';
    var14[var17] = var18;
    var4['blurStyles'] = var14;
    var17 = 'relative';
    var14 = {'position': 'relative', 'justifyContent': 'flex-start', 'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1, 'gap': 12};
    var4['leftWrapper'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 12, 'paddingLeft': 12};
    var4['rightWrapper'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['headerOuter'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1, 'flexGrow': 1};
    var4['headerInner'] = var14;
    var14 = {};
    var14['position'] = var17;
    var4['headerContentWrapper'] = var14;
    var14 = {};
    var17 = var15.hairlineWidth;
    var14['height'] = var17;
    var17 = 0.2;
    var14['opacity'] = var17;
    var4['stroke'] = var14;
    var14 = {};
    var17 = var15.hairlineWidth;
    var14['height'] = var17;
    var17 = 0.8;
    var14['opacity'] = var17;
    var4['strokeAlt'] = var14;
    var14 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0};
    var15 = var15.hairlineWidth;
    var14['height'] = var15;
    var4['strokeContainer'] = var14;
    var14 = {'width': 12, 'height': 12, 'borderRadius': null, 'padding': 2};
    var15 = 19;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.round;
    var14['borderRadius'] = var17;
    var4['focusedSpeakingDotWrapper'] = var14;
    var14 = {'width': 8, 'height': 8};
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var14['borderRadius'] = var15;
    var4['focusedSpeakingDot'] = var14;
    var14 = {};
    var15 = -8;
    var14['marginLeft'] = var15;
    var4['shieldIconMargin'] = var14;
    var4 = var10.bind(var13)(var4);
    var _closure1_slot25 = var4;
    var4 = {};
    var4['DOWN'] = var12;
    var10 = 'DOWN';
    var4[var12] = var10;
    var4['LEFT'] = var11;
    var10 = 'LEFT';
    var4[var11] = var10;
    var _closure1_slot26 = var4;
    var4 = {};
    var21 = var4;
    var20 = var8;
    var8 = copyDataProperties(var21, var20);
    var8 = 'overshootClamping';
    var4[var8] = var9;
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}';
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var2 = arg1;
        var14 = var2.isHeaderHidden;
        var _closure2_slot0 = var14;
        var9 = var2.scrollPosition;
        var _closure2_slot1 = var9;
        var11 = var2.focused;
        var _closure2_slot2 = var11;
        var2 = _closure1_slot25;
        var4 = undefined;
        var12 = var2.bind(var4)();
        var10 = _closure1_slot0;
        var13 = _closure1_slot2;
        var2 = 16;
        var3 = var13[var2];
        var7 = var10.bind(var4)(var3);
        var6 = var7.useDerivedValue;
        var3 = function l() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot2;
                var2 = var4.get;
                var4 = var2.bind(var4)();
                var2 = null;
                var2 = var2 != var4;
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure2_slot1;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var3 = 0;
                var2 = var4 > var3;
case 4:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var8 = {};
        var8['isHeaderHidden'] = var14;
        var8['focused'] = var11;
        var8['scrollPosition'] = var9;
        var3['__closure'] = var8;
        var8 = 8127245112238.0;
        var3['__workletHash'] = var8;
        var8 = _closure1_slot28;
        var3['__initData'] = var8;
        var8 = var6.bind(var7)(var3);
        var _closure2_slot3 = var8;
        var3 = var13[var2];
        var7 = var10.bind(var4)(var3);
        var6 = var7.useAnimatedProps;
        var3 = function c() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 20;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.withSpring;
                var5 = _closure2_slot3;
                var2 = var5.get;
                var5 = var2.bind(var5)();
                var2 = 0;
                if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var2 = 0.3;
case 4:
                var2 = var3.bind(var4)(var2);
                var1['blurAmount'] = var2;
                return var1;
            }
        };
        var11 = {};
        var9 = 20;
        var14 = var13[var9];
        var14 = var10.bind(var4)(var14);
        var14 = var14.withSpring;
        var11['withSpring'] = var14;
        var11['showHeaderBlur'] = var8;
        var3['__closure'] = var11;
        var11 = 10074943135400.0;
        var3['__workletHash'] = var11;
        var11 = _closure1_slot29;
        var3['__initData'] = var11;
        var7 = var6.bind(var7)(var3);
        var2 = var13[var2];
        var3 = var10.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function u() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 20;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.withSpring;
                var6 = _closure2_slot3;
                var3 = var6.get;
                var6 = var3.bind(var6)();
                var3 = 0;
                if(!var6) { _fun0003_ip = 7; continue _fun0003 }
case 6:
                var3 = 1;
case 7:
                var2 = _closure1_slot27;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            }
        };
        var6 = {};
        var9 = var13[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.withSpring;
        var6['withSpring'] = var9;
        var6['showHeaderBlur'] = var8;
        var8 = _closure1_slot27;
        var6['HEADER_CHANGE_PHYSICS'] = var8;
        var1['__closure'] = var6;
        var6 = 2825977044105.0;
        var1['__workletHash'] = var6;
        var6 = _closure1_slot30;
        var1['__initData'] = var6;
        var8 = var2.bind(var3)(var1);
        var3 = _closure1_slot22;
        var10 = _closure1_slot1;
        var1 = 21;
        var1 = var13[var1];
        var2 = var10.bind(var4)(var1);
        var1 = {};
        var6 = _closure1_slot5;
        var9 = var6.absoluteFill;
        var6 = new Array(2);
        var6[0] = var9;
        var6[1] = var8;
        var1['style'] = var6;
        var6 = 'none';
        var1['pointerEvents'] = var6;
        var11 = _closure1_slot21;
        var6 = _closure1_slot23;
        var5 = {'style': null, 'blurStyle': 'ultra-thin', 'blurTheme': 'dark'};
        var8 = var12.blurStyles;
        var5['style'] = var8;
        var5['animatedProps'] = var7;
        var6 = var11.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var9 = 22;
        var6 = var13[var9];
        var7 = var10.bind(var4)(var6);
        var6 = {};
        var8 = var12.strokeContainer;
        var6['style'] = var8;
        var8 = var13[var9];
        var14 = var10.bind(var4)(var8);
        var8 = {};
        var15 = var12.stroke;
        var8['style'] = var15;
        var14 = var11.bind(var4)(var14, var8);
        var8 = new Array(2);
        var8[0] = var14;
        var9 = var13[var9];
        var10 = var10.bind(var4)(var9);
        var9 = {};
        var12 = var12.strokeAlt;
        var9['style'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var8[1] = var9;
        var6['children'] = var8;
        var6 = var3.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}';
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}';
    var4['code'] = var8;
    var _closure1_slot33 = var4;
    var8 = var7.memo;
    var4 = function() {
        var4 = _closure1_slot8;
        var3 = var4.getId;
        var7 = var3.bind(var4)();
        var _closure2_slot0 = var7;
        var11 = _closure1_slot4;
        var5 = var11.useContext;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var3 = 23;
        var3 = var8[var3];
        var4 = undefined;
        var3 = var6.bind(var4)(var3);
        var3 = var5.bind(var11)(var3);
        var15 = var3.focused;
        var _closure2_slot1 = var15;
        var14 = var3.controlsSpecs;
        var _closure2_slot2 = var14;
        var5 = _closure1_slot0;
        var3 = 16;
        var9 = var8[var3];
        var12 = var5.bind(var4)(var9);
        var10 = var12.useSharedValue;
        var13 = _closure1_slot12;
        var9 = var13.isSpeaking;
        var9 = var9.bind(var13)(var7);
        var13 = var10.bind(var12)(var9);
        var _closure2_slot3 = var13;
        var10 = var11.useLayoutEffect;
        var9 = new Array(2);
        var9[0] = var7;
        var9[1] = var13;
        var7 = function() {
            var4 = function handleChange() {
                var3 = _closure2_slot3;
                var2 = var3.set;
                var5 = _closure1_slot12;
                var4 = var5.isSpeaking;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var _closure3_slot0 = var4;
            var2 = undefined;
            var2 = var4.bind(var2)();
            var3 = _closure1_slot12;
            var2 = var3.addReactChangeListener;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var3 = _closure1_slot12;
                var2 = var3.removeReactChangeListener;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var7 = var10.bind(var11)(var7, var9);
        var7 = _closure1_slot25;
        var7 = var7.bind(var4)();
        var9 = var8[var3];
        var11 = var5.bind(var4)(var9);
        var10 = var11.useDerivedValue;
        var9 = function h() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var4 = _closure2_slot2;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var4 = var3.mode;
                var3 = _closure1_slot19;
                var3 = var3.HIDDEN;
                var1 = var4 !== var3;
case 8:
                if(!var1) { _fun0004_ip = 10; continue _fun0004 }
case 4:
                var3 = _closure2_slot3;
                var2 = var3.get;
                var1 = var2.bind(var3)();
case 10:
                return var1;
            }
        };
        var12 = {};
        var12['focused'] = var15;
        var12['controlsSpecs'] = var14;
        var14 = _closure1_slot19;
        var12['VoicePanelControlsModes'] = var14;
        var12['speaking'] = var13;
        var9['__closure'] = var12;
        var12 = 5466722752449.0;
        var9['__workletHash'] = var12;
        var12 = _closure1_slot32;
        var9['__initData'] = var12;
        var10 = var10.bind(var11)(var9);
        var _closure2_slot4 = var10;
        var3 = var8[var3];
        var5 = var5.bind(var4)(var3);
        var3 = var5.useAnimatedStyle;
        var2 = function p() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot4;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 0;
                if(!var3) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                var2 = 1;
case 11:
                var1['opacity'] = var2;
                return var1;
            }
        };
        var9 = {};
        var9['showSpeakingIndicator'] = var10;
        var2['__closure'] = var9;
        var9 = 16177124708898.0;
        var2['__workletHash'] = var9;
        var9 = _closure1_slot33;
        var2['__initData'] = var9;
        var10 = var3.bind(var5)(var2);
        var3 = _closure1_slot21;
        var5 = 21;
        var1 = var8[var5];
        var2 = var6.bind(var4)(var1);
        var1 = {};
        var11 = var7.focusedSpeakingDotWrapper;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var1['style'] = var9;
        var9 = 'none';
        var1['pointerEvents'] = var9;
        var5 = var8[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var7 = var7.focusedSpeakingDot;
        var5['style'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot34 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}';
    var4['code'] = var8;
    var _closure1_slot35 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}';
    var4['code'] = var8;
    var _closure1_slot36 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx8(){const{calculateVoicePanelHeaderSpecs,safeArea,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get());if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}';
    var4['code'] = var8;
    var _closure1_slot37 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get());const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs.paddingTop;return{...specs,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}';
    var4['code'] = var8;
    var _closure1_slot38 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx10(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}';
    var4['code'] = var8;
    var _closure1_slot39 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get());return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}';
    var4['code'] = var8;
    var _closure1_slot40 = var4;
    var4 = {};
    var8 = "function VoicePanelHeaderTsx12(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}";
    var4['code'] = var8;
    var _closure1_slot41 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelHeader(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var21 = var1.wrapperOffset;
            var _closure2_slot0 = var21;
            var23 = var1.gestureState;
            var _closure2_slot1 = var23;
            var17 = var1.layout;
            var4 = undefined;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var1 = _closure1_slot25;
            var24 = var1.bind(var4)();
            var15 = _closure1_slot4;
            var2 = var15.useContext;
            var16 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 23;
            var1 = var5[var1];
            var1 = var16.bind(var4)(var1);
            var1 = var2.bind(var15)(var1);
            var14 = var1.guildId;
            var28 = var1.channelId;
            var _closure2_slot2 = var28;
            var8 = var1.focused;
            var _closure2_slot3 = var8;
            var30 = var1.controlsSpecs;
            var _closure2_slot4 = var30;
            var34 = var1.mode;
            var _closure2_slot5 = var34;
            var27 = var1.safeArea;
            var _closure2_slot6 = var27;
            var25 = var1.connected;
            var _closure2_slot7 = var25;
            var9 = var1.scrollPosition;
            var2 = _closure1_slot0;
            var1 = 24;
            var1 = var5[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useIsScreenReaderEnabled;
            var22 = var1.bind(var6)();
            var _closure2_slot8 = var22;
            var1 = 25;
            var1 = var5[var1];
            var1 = var16.bind(var4)(var1);
            var31 = var1.bind(var4)(var28);
            var7 = 26;
            var1 = var5[var7];
            var12 = var2.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot13;
            var10 = new Array(4);
            var10[0] = var1;
            var1 = _closure1_slot11;
            var10[1] = var1;
            var1 = _closure1_slot9;
            var10[2] = var1;
            var1 = _closure1_slot7;
            var10[3] = var1;
            var6 = new Array(1);
            var6[0] = var28;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot2;
                    var9 = var3.bind(var4)(var1);
                    var3 = null;
                    var4 = var3 != var9;
                    var6 = undefined;
                    var1 = undefined;
                    if(!var4) { _fun0007_ip = 13; continue _fun0007 }
case 14:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 27;
                    var4 = var7[var4];
                    var8 = var5.bind(var6)(var4);
                    var7 = var8.computeChannelName;
                    var5 = _closure1_slot13;
                    var4 = _closure1_slot11;
                    var1 = var7.bind(var8)(var9, var5, var4);
case 13:
                    if(!(var3 == var1)) { _fun0007_ip = 15; continue _fun0007 }
case 16:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 28;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.zLZPmp;
                    var1 = var3.bind(var4)(var2);
case 15:
                    return var1;
                }
            };
            var32 = var11.bind(var12)(var10, var1, var6);
            var1 = var15.useState;
            var1 = var1.bind(var15)(var4);
            var13 = _closure1_slot3;
            var11 = 2;
            var1 = var13.bind(var4)(var1, var11);
            var10 = 0;
            var12 = var1[var10];
            var6 = 1;
            var1 = var1[var6];
            var _closure2_slot9 = var1;
            var1 = var15.useState;
            var18 = null;
            var1 = var1.bind(var15)(var18);
            var1 = var13.bind(var4)(var1, var11);
            var11 = var1[var10];
            var1 = var1[var6];
            var _closure2_slot10 = var1;
            var13 = var15.useCallback;
            var6 = new Array(1);
            var6[0] = var28;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure2_slot10;
                    var8 = _closure2_slot2;
                    var1 = null;
                    var6 = var1 == var3;
                    var4 = null;
                    if(var6) { _fun0008_ip = 17; continue _fun0008 }
case 9:
                    var7 = _closure1_slot6;
                    var6 = var7.getParticipant;
                    var6 = var6.bind(var7)(var8, var3);
                    var7 = var1 == var6;
                    var1 = null;
                    if(var7) { _fun0008_ip = 18; continue _fun0008 }
case 6:
                    var1 = var6.type;
case 18:
                    var4 = var1;
case 17:
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var29 = var13.bind(var15)(var1, var6);
            var _closure2_slot11 = var29;
            var1 = 16;
            var6 = var5[var1];
            var19 = var2.bind(var4)(var6);
            var15 = var19.useAnimatedReaction;
            var13 = function v() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0009_ip = 19; continue _fun0009 }
case 20:
                    var1 = var2.id;
case 19:
                    return var1;
                }
            };
            var6 = {};
            var6['focused'] = var8;
            var13['__closure'] = var6;
            var6 = 7943480174143.0;
            var13['__workletHash'] = var6;
            var6 = _closure1_slot35;
            var13['__initData'] = var6;
            var6 = function H(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0010_ip = 21; continue _fun0010 }
case 22:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot11;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = {};
            var33 = var5[var1];
            var33 = var2.bind(var4)(var33);
            var33 = var33.runOnJS;
            var26['runOnJS'] = var33;
            var26['handleFocusChange'] = var29;
            var6['__closure'] = var26;
            var26 = 13084116412140.0;
            var6['__workletHash'] = var26;
            var26 = _closure1_slot36;
            var6['__initData'] = var26;
            var6 = var15.bind(var19)(var13, var6);
            var6 = var5[var1];
            var15 = var2.bind(var4)(var6);
            var13 = var15.useDerivedValue;
            var6 = function de() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var1 = var4[var1];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var6 = _closure2_slot6;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var3 = var3.bind(var5)(var1);
                    var5 = _closure2_slot5;
                    var1 = var5.get;
                    var5 = var1.bind(var5)();
                    var1 = _closure1_slot16;
                    var1 = var1.PIP;
                    if(!(var5 !== var1)) { _fun0011_ip = 23; continue _fun0011 }
case 24:
                    var5 = _closure2_slot1;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1.active;
                    if(!var1) { _fun0011_ip = 25; continue _fun0011 }
case 26:
                    var5 = _closure2_slot1;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1.requiresPop;
                    if(var1) { _fun0011_ip = 25; continue _fun0011 }
case 27:
                    var5 = _closure2_slot7;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    if(var1) { _fun0011_ip = 23; continue _fun0011 }
case 25:
                    var5 = _closure2_slot5;
                    var1 = var5.get;
                    var7 = var1.bind(var5)();
                    var1 = _closure1_slot16;
                    var6 = var1.DISMISSED;
                    var1 = 0;
                    if(!(var7 === var6)) { _fun0011_ip = 28; continue _fun0011 }
case 29:
                    var6 = _closure2_slot7;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    var1 = 0;
                    if(!var4) { _fun0011_ip = 28; continue _fun0011 }
case 23:
                    var3 = var3.height;
                    var2 = _closure1_slot18;
                    var2 = var3 + var2;
                    var1 = -var2;
case 28:
                    return var1;
                }
            };
            var19 = {};
            var29 = 29;
            var26 = var5[var29];
            var26 = var16.bind(var4)(var26);
            var19['calculateVoicePanelHeaderSpecs'] = var26;
            var19['safeArea'] = var27;
            var19['mode'] = var34;
            var26 = _closure1_slot16;
            var19['VoicePanelModes'] = var26;
            var19['gestureState'] = var23;
            var19['connected'] = var25;
            var23 = _closure1_slot18;
            var19['EDGE_GUTTER'] = var23;
            var6['__closure'] = var19;
            var19 = 16949501788449.0;
            var6['__workletHash'] = var19;
            var19 = _closure1_slot37;
            var6['__initData'] = var19;
            var33 = var13.bind(var15)(var6);
            var _closure2_slot12 = var33;
            var6 = var5[var1];
            var15 = var2.bind(var4)(var6);
            var13 = var15.useAnimatedStyle;
            var6 = function ue() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 29;
                    var1 = var3[var1];
                    var6 = undefined;
                    var2 = var2.bind(var6)(var1);
                    var4 = _closure2_slot6;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var5 = var2.bind(var6)(var1);
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var1 = _closure1_slot16;
                    var2 = var1.PIP;
                    var8 = _closure2_slot7;
                    var1 = var8.get;
                    var8 = var1.bind(var8)();
                    var1 = var5.height;
                    if(var8) { _fun0012_ip = 30; continue _fun0012 }
case 31:
                    var8 = var5.paddingTop;
                    var9 = var1 - var8;
                    var8 = _closure1_slot18;
                    var8 = var9 + var8;
                    _fun0012_ip = 32; continue _fun0012;
case 30:
                    var8 = var1;
case 32:
                    var9 = _closure2_slot7;
                    var1 = var9.get;
                    var1 = var1.bind(var9)();
                    if(var1) { _fun0012_ip = 33; continue _fun0012 }
case 34:
                    var9 = _closure1_slot18;
                    _fun0012_ip = 35; continue _fun0012;
case 33:
                    var9 = var5.paddingTop;
case 35:
                    var1 = {};
                    var12 = var1;
                    var11 = var5;
                    var5 = copyDataProperties(var12, var11);
                    var5 = 'paddingTop';
                    var1[var5] = var9;
                    var9 = _closure2_slot7;
                    var5 = var9.get;
                    var5 = var5.bind(var9)();
                    var9 = 24;
                    var10 = var9;
                    if(!var5) { _fun0012_ip = 36; continue _fun0012 }
case 37:
                    var10 = 0;
case 36:
                    var5 = 'borderTopLeftRadius';
                    var1[var5] = var10;
                    var10 = _closure2_slot7;
                    var5 = var10.get;
                    var5 = var5.bind(var10)();
                    if(!var5) { _fun0012_ip = 38; continue _fun0012 }
case 39:
                    var9 = 0;
case 38:
                    var5 = 'borderTopRightRadius';
                    var1[var5] = var9;
                    var5 = 'height';
                    var1[var5] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 30;
                    var5 = var9[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.withTiming;
                    if(!(var4 !== var2)) { _fun0012_ip = 40; continue _fun0012 }
case 41:
                    var4 = _closure2_slot5;
                    var2 = var4.get;
                    var9 = var2.bind(var4)();
                    var2 = _closure1_slot16;
                    var2 = var2.DISMISSED;
                    var4 = 1;
                    if(!(var9 === var2)) { _fun0012_ip = 42; continue _fun0012 }
case 40:
                    var4 = 0;
case 42:
                    var2 = _closure1_slot24;
                    var4 = var5.bind(var8)(var4, var2);
                    var2 = 'opacity';
                    var1[var2] = var4;
                    var2 = {};
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 20;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot12;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var9 = _closure2_slot7;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    if(var8) { _fun0012_ip = 43; continue _fun0012 }
case 44:
                    var8 = _closure2_slot0;
                    var3 = var8.get;
                    var3 = var3.bind(var8)();
                    var3 = var3.gestureActive;
                    if(!var3) { _fun0012_ip = 43; continue _fun0012 }
case 45:
                    var3 = _closure1_slot17;
                    _fun0012_ip = 46; continue _fun0012;
case 43:
                    var3 = _closure1_slot15;
case 46:
                    var3 = var5.bind(var6)(var4, var3);
                    var2['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'transform';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var19 = {};
            var35 = var5[var29];
            var35 = var16.bind(var4)(var35);
            var19['calculateVoicePanelHeaderSpecs'] = var35;
            var19['safeArea'] = var27;
            var19['mode'] = var34;
            var19['VoicePanelModes'] = var26;
            var19['connected'] = var25;
            var19['EDGE_GUTTER'] = var23;
            var26 = 30;
            var23 = var5[var26];
            var23 = var2.bind(var4)(var23);
            var23 = var23.withTiming;
            var19['withTiming'] = var23;
            var25 = _closure1_slot24;
            var19['OPACITY_TIMING'] = var25;
            var23 = 20;
            var34 = var5[var23];
            var34 = var2.bind(var4)(var34);
            var34 = var34.withSpring;
            var19['withSpring'] = var34;
            var19['yOffset'] = var33;
            var19['wrapperOffset'] = var21;
            var21 = _closure1_slot17;
            var19['DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE'] = var21;
            var21 = _closure1_slot15;
            var19['UI_SHOW_HIDE_PHYSICS'] = var21;
            var6['__closure'] = var19;
            var19 = 1052627369386.0;
            var6['__workletHash'] = var19;
            var19 = _closure1_slot38;
            var6['__initData'] = var19;
            var6 = var13.bind(var15)(var6);
            var13 = var5[var1];
            var19 = var2.bind(var4)(var13);
            var15 = var19.useDerivedValue;
            var13 = function ge() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = var1.mode;
                    var1 = _closure1_slot19;
                    var1 = var1.HIDDEN;
                    var1 = var3 === var1;
                    if(!var1) { _fun0013_ip = 47; continue _fun0013 }
case 48:
                    var2 = _closure2_slot8;
                    var1 = !var2;
case 47:
                    return var1;
                }
            };
            var21 = {};
            var21['controlsSpecs'] = var30;
            var30 = _closure1_slot19;
            var21['VoicePanelControlsModes'] = var30;
            var21['isScreenReaderEnabled'] = var22;
            var13['__closure'] = var21;
            var21 = 16725581527938.0;
            var13['__workletHash'] = var21;
            var21 = _closure1_slot39;
            var13['__initData'] = var21;
            var15 = var15.bind(var19)(var13);
            var _closure2_slot13 = var15;
            var13 = var5[var1];
            var21 = var2.bind(var4)(var13);
            var19 = var21.useAnimatedStyle;
            var13 = function he() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 29;
                    var1 = var6[var1];
                    var8 = undefined;
                    var3 = var3.bind(var8)(var1);
                    var5 = _closure2_slot6;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var3.bind(var8)(var1);
                    var7 = var1.height;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var3 = 30;
                    var3 = var6[var3];
                    var9 = var5.bind(var8)(var3);
                    var6 = var9.withTiming;
                    var5 = _closure2_slot13;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = 1;
                    if(!var3) { _fun0014_ip = 26; continue _fun0014 }
case 49:
                    var5 = 0;
case 26:
                    var3 = _closure1_slot24;
                    var3 = var6.bind(var9)(var5, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 20;
                    var5 = var9[var5];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot13;
                    var4 = var8.get;
                    var8 = var4.bind(var8)();
                    var4 = 0;
                    if(!var8) { _fun0014_ip = 50; continue _fun0014 }
case 51:
                    var4 = -var7;
case 50:
                    var2 = _closure1_slot14;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var22 = {};
            var29 = var5[var29];
            var29 = var16.bind(var4)(var29);
            var22['calculateVoicePanelHeaderSpecs'] = var29;
            var22['safeArea'] = var27;
            var26 = var5[var26];
            var26 = var2.bind(var4)(var26);
            var26 = var26.withTiming;
            var22['withTiming'] = var26;
            var22['isHeaderHidden'] = var15;
            var22['OPACITY_TIMING'] = var25;
            var23 = var5[var23];
            var23 = var2.bind(var4)(var23);
            var23 = var23.withSpring;
            var22['withSpring'] = var23;
            var23 = _closure1_slot14;
            var22['MODE_CHANGE_PHYSICS'] = var23;
            var13['__closure'] = var22;
            var22 = 3320897771806.0;
            var13['__workletHash'] = var22;
            var22 = _closure1_slot40;
            var13['__initData'] = var22;
            var19 = var19.bind(var21)(var13);
            var1 = var5[var1];
            var21 = var2.bind(var4)(var1);
            var13 = var21.useAnimatedProps;
            var1 = function pe() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot13;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 'box-none';
                    if(!var4) { _fun0015_ip = 52; continue _fun0015 }
case 20:
                    var3 = 'none';
case 52:
                    var1['pointerEvents'] = var3;
                    var4 = _closure2_slot13;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 'auto';
                    if(!var4) { _fun0015_ip = 53; continue _fun0015 }
case 7:
                    var3 = 'no-hide-descendants';
case 53:
                    var1['importantForAccessibility'] = var3;
                    var3 = _closure2_slot13;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['accessibilityElementsHidden'] = var2;
                    return var1;
                }
            };
            var22 = {};
            var22['isHeaderHidden'] = var15;
            var1['__closure'] = var22;
            var22 = 4740985143159.0;
            var1['__workletHash'] = var22;
            var22 = _closure1_slot41;
            var1['__initData'] = var22;
            var13 = var13.bind(var21)(var1);
            var1 = 31;
            var1 = var5[var1];
            var21 = var2.bind(var4)(var1);
            var1 = var21.useCanInviteMembers;
            var21 = var1.bind(var21)(var28);
            var1 = 32;
            var1 = var5[var1];
            var22 = var2.bind(var4)(var1);
            var1 = var22.useInviteMembersCallback;
            var27 = var1.bind(var22)(var28);
            var1 = 33;
            var1 = var5[var1];
            var1 = var16.bind(var4)(var1);
            var29 = var1.bind(var4)();
            var1 = 34;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useNavigatorBackPressHandler;
            var1 = var1.bind(var2)(var29);
            if(!(var18 == var11)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var1 = _closure1_slot26;
            var16 = var1.DOWN;
            _fun0006_ip = 56; continue _fun0006;
case 54:
            var1 = _closure1_slot26;
            var16 = var1.LEFT;
case 56:
            _closure2_slot14 = var16;
            var1 = _closure1_slot26;
            var1 = var1.LEFT;
            if(!(var16 !== var1)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 28;
            var2 = var23[var1];
            var2 = var22.bind(var4)(var2);
            var5 = var2.intl;
            var2 = var5.string;
            var1 = var23[var1];
            var1 = var22.bind(var4)(var1);
            var1 = var1.t;
            if(var31) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var22 = var1.WAI6xs;
            var37 = var2.bind(var5)(var22);
            _fun0006_ip = 61; continue _fun0006;
case 59:
            var1 = var1.RLCTQE;
            var37 = var2.bind(var5)(var1);
case 61:
            _fun0006_ip = 62; continue _fun0006;
case 57:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 28;
            var2 = var23[var1];
            var2 = var22.bind(var4)(var2);
            var5 = var2.intl;
            var2 = var5.string;
            var1 = var23[var1];
            var1 = var22.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.9M6OdH;
            var37 = var2.bind(var5)(var1);
case 62:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 35;
            var2 = var1[var2];
            var5 = var5.bind(var4)(var2);
            var22 = _closure1_slot8;
            var2 = var22.getId;
            var2 = var2.bind(var22)();
            var5 = var5.bind(var4)(var2, var28, var14);
            _closure2_slot15 = var5;
            var2 = _closure1_slot0;
            var7 = var1[var7];
            var23 = var2.bind(var4)(var7);
            var22 = var23.useStateFromStores;
            var7 = _closure1_slot10;
            var14 = new Array(1);
            var14[0] = var7;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0016_ip = 63; continue _fun0016 }
case 64:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 35;
                    var5 = var5[var8];
                    var6 = undefined;
                    var9 = var7.bind(var6)(var5);
                    var7 = var9.isStableUserParticipant;
                    var5 = _closure2_slot15;
                    var5 = var7.bind(var9)(var5);
                    if(!var5) { _fun0016_ip = 63; continue _fun0016 }
case 65:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var7 = var7.bind(var6)(var5);
                    var5 = var7.stableParticipantHasVideo;
                    var4 = _closure2_slot15;
                    var4 = var5.bind(var7)(var4);
                    if(!var4) { _fun0016_ip = 63; continue _fun0016 }
case 66:
                    var5 = _closure1_slot10;
                    var4 = var5.getVideoDevices;
                    var7 = var4.bind(var5)();
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.keys;
                    var8 = var4.bind(var5)(var7);
                    var5 = var8.length;
                    var4 = 2;
                    if(!(!(var5 < var4))) { _fun0016_ip = 63; continue _fun0016 }
case 67:
                    var5 = _closure1_slot10;
                    var4 = var5.getVideoDeviceId;
                    var4 = var4.bind(var5)();
                    var _closure3_slot0 = var4;
                    var4 = var7[var4];
                    var9 = var1 == var4;
                    var5 = undefined;
                    if(var9) { _fun0016_ip = 36; continue _fun0016 }
case 23:
                    var5 = var4.facing;
case 36:
                    var4 = var8.find;
                    var3 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var4 = var4.bind(var8)(var3);
                    var8 = var1 != var4;
                    var3 = undefined;
                    if(!var8) { _fun0016_ip = 68; continue _fun0016 }
case 38:
                    var7 = var7[var4];
                    var8 = var1 == var7;
                    var4 = undefined;
                    if(var8) { _fun0016_ip = 69; continue _fun0016 }
case 70:
                    var4 = var7.facing;
case 69:
                    var3 = var4;
case 68:
                    if(!(var1 != var5)) { _fun0016_ip = 71; continue _fun0016 }
case 72:
                    if(!(var1 != var3)) { _fun0016_ip = 71; continue _fun0016 }
case 73:
                    var1 = 'back';
                    if(!(var1 === var5)) { _fun0016_ip = 74; continue _fun0016 }
case 75:
                    var4 = 'front';
                    if(!(var4 !== var3)) { _fun0016_ip = 76; continue _fun0016 }
case 74:
                    var4 = 'front';
                    if(!(var4 === var5)) { _fun0016_ip = 77; continue _fun0016 }
case 78:
                    if(!(var1 !== var3)) { _fun0016_ip = 79; continue _fun0016 }
case 77:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 28;
                    var3 = var7[var1];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.t9eQ/v;
                    var1 = var3.bind(var4)(var1);
                    _fun0016_ip = 80; continue _fun0016;
case 79:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 28;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.7YZ/Sk;
                    var1 = var4.bind(var5)(var3);
case 80:
                    _fun0016_ip = 81; continue _fun0016;
case 76:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 28;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3./R1SBw;
                    var1 = var4.bind(var5)(var3);
case 81:
                    _fun0016_ip = 82; continue _fun0016;
case 71:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 28;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.t9eQ/v;
                    var1 = var3.bind(var4)(var2);
case 82:
                    return var1;
case 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var22.bind(var23)(var14, var5, var7);
            var14 = _closure1_slot4;
            var23 = var14.useCallback;
            var7 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var6 = _closure1_slot10;
                    var3 = var6.getVideoDeviceId;
                    var3 = var3.bind(var6)();
                    var _closure3_slot0 = var3;
                    var3 = global;
                    var5 = var3.Object;
                    var4 = var5.keys;
                    var3 = var6.getVideoDevices;
                    var3 = var3.bind(var6)();
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0017_ip = 83; continue _fun0017 }
case 84:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 36;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.setVideoDevice;
                    var1 = var1.bind(var2)(var3);
case 83:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = new Array(0);
            var23 = var23.bind(var14)(var7, var5);
            var7 = var14.useMemo;
            var5 = new Array(1);
            var5[0] = var16;
            var3 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var5 = _closure2_slot14;
                    var2 = _closure1_slot26;
                    var4 = var2.LEFT;
                    var2 = '0deg';
                    if(!(var5 === var4)) { _fun0018_ip = 85; continue _fun0018 }
case 86:
                    var2 = '90deg';
case 85:
                    var3['rotateZ'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var26 = var7.bind(var14)(var3, var5);
            var3 = 37;
            var3 = var1[var3];
            var7 = var2.bind(var4)(var3);
            var5 = var7.useIsSecureFramesUIEnabled;
            var3 = {};
            var3['channelId'] = var28;
            var34 = var5.bind(var7)(var3);
            var5 = 38;
            var1 = var1[var5];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useIsUserSecureFramesVerified;
            var1 = {};
            var7 = _closure1_slot20;
            var14 = var7.USER;
            var7 = null;
            if(!(var11 === var14)) { _fun0006_ip = 87; continue _fun0006 }
case 88:
            var14 = var18 != var12;
            var7 = null;
            if(!var14) { _fun0006_ip = 87; continue _fun0006 }
case 89:
            var7 = var12;
case 87:
            var1['userId'] = var7;
            var1['channelId'] = var28;
            var2 = var2.bind(var3)(var1);
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useIsStreamSecureFramesVerified;
            var1 = {};
            var7 = _closure1_slot20;
            var14 = var7.STREAM;
            var7 = null;
            if(!(var11 === var14)) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var14 = var18 != var12;
            var7 = null;
            if(!var14) { _fun0006_ip = 90; continue _fun0006 }
case 92:
            var7 = var12;
case 90:
            var1['streamKey'] = var7;
            var1['channelId'] = var28;
            var1 = var3.bind(var5)(var1);
            var3 = _closure1_slot20;
            var3 = var3.STREAM;
            if(!(var3 !== var11)) { _fun0006_ip = 93; continue _fun0006 }
case 94:
            var3 = _closure1_slot20;
            var3 = var3.USER;
            var33 = false;
            if(!(var3 === var11)) { _fun0006_ip = 95; continue _fun0006 }
case 96:
            var33 = var2;
            _fun0006_ip = 95; continue _fun0006;
case 93:
            var33 = var1;
case 95:
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var14 = 21;
            var1 = var1[var14];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = var24.headerWrapper;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var16 = 'box-none';
            var1['pointerEvents'] = var16;
            var1['layout'] = var17;
            var7 = _closure1_slot21;
            var6 = _closure1_slot31;
            var5 = {};
            var5['isHeaderHidden'] = var15;
            var5['scrollPosition'] = var9;
            var5['focused'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = var31;
            if(!var6) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            var9 = _closure1_slot21;
            var25 = _closure1_slot1;
            var30 = _closure1_slot2;
            var7 = 39;
            var7 = var30[var7];
            var8 = var25.bind(var4)(var7);
            var7 = {};
            var12 = 19;
            var12 = var30[var12];
            var12 = var25.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.BLACK;
            var7['baseColor'] = var12;
            var7['minHeight'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 97:
            var5[1] = var6;
            var8 = _closure1_slot22;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var14];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var9 = var24.headerContentWrapper;
            var6['style'] = var9;
            var6['pointerEvents'] = var16;
            var6['layout'] = var17;
            var9 = _closure1_slot20;
            var9 = var9.USER;
            var10 = null;
            if(!(var11 === var9)) { _fun0006_ip = 99; continue _fun0006 }
case 100:
            var12 = _closure1_slot21;
            var11 = _closure1_slot1;
            var25 = _closure1_slot2;
            var9 = 40;
            var9 = var25[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var9['isHeaderHidden'] = var15;
            var10 = var12.bind(var4)(var11, var9);
case 99:
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot22;
            var30 = _closure1_slot1;
            var36 = _closure1_slot2;
            var10 = var36[var14];
            var11 = var30.bind(var4)(var10);
            var10 = {};
            var25 = var24.headerOuter;
            var15 = new Array(2);
            var15[0] = var25;
            var15[1] = var19;
            var10['style'] = var15;
            var10['animatedProps'] = var13;
            var13 = 22;
            var13 = var36[var13];
            var15 = var30.bind(var4)(var13);
            var13 = {};
            var19 = var24.leftWrapper;
            var13['style'] = var19;
            var13['pointerEvents'] = var16;
            var35 = _closure1_slot21;
            var19 = 41;
            var16 = var36[var19];
            var25 = var30.bind(var4)(var16);
            var16 = {};
            var38 = 42;
            var38 = var36[var38];
            var38 = var30.bind(var4)(var38);
            var16['icon'] = var38;
            var16['accessibilityLabel'] = var37;
            var16['onPress'] = var29;
            var16['style'] = var26;
            var25 = var35.bind(var4)(var25, var16);
            var16 = new Array(2);
            var16[0] = var25;
            var25 = var36[var14];
            var26 = var30.bind(var4)(var25);
            var25 = {};
            var29 = var24.headerInner;
            var25['style'] = var29;
            var29 = 43;
            var29 = var36[var29];
            var30 = var30.bind(var4)(var29);
            var29 = {};
            var30 = var35.bind(var4)(var30, var29);
            var29 = new Array(2);
            var29[0] = var30;
            var30 = null;
            if(!var34) { _fun0006_ip = 101; continue _fun0006 }
case 102:
            var30 = null;
            if(!var33) { _fun0006_ip = 101; continue _fun0006 }
case 103:
            var35 = _closure1_slot21;
            var34 = _closure1_slot0;
            var38 = _closure1_slot2;
            var33 = 44;
            var33 = var38[var33];
            var33 = var34.bind(var4)(var33);
            var34 = var33.ShieldLockIcon;
            var33 = {};
            var36 = 'xs';
            var33['size'] = var36;
            var37 = _closure1_slot1;
            var36 = 19;
            var36 = var38[var36];
            var36 = var37.bind(var4)(var36);
            var36 = var36.colors;
            var36 = var36.HEADER_SECONDARY;
            var33['color'] = var36;
            var36 = var24.shieldIconMargin;
            var33['style'] = var36;
            var30 = var35.bind(var4)(var34, var33);
case 101:
            var29[1] = var30;
            var25['children'] = var29;
            var25 = var12.bind(var4)(var26, var25);
            var16[1] = var25;
            var13['children'] = var16;
            var15 = var12.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var16 = _closure1_slot22;
            var25 = _closure1_slot1;
            var29 = _closure1_slot2;
            var14 = var29[var14];
            var15 = var25.bind(var4)(var14);
            var14 = {};
            var24 = var24.rightWrapper;
            var14['style'] = var24;
            var14['layout'] = var17;
            var26 = _closure1_slot21;
            var24 = _closure1_slot34;
            var17 = {};
            var24 = var26.bind(var4)(var24, var17);
            var17 = new Array(5);
            var17[0] = var24;
            var24 = 45;
            var24 = var29[var24];
            var30 = var25.bind(var4)(var24);
            var24 = {};
            var24['isConnectedToVoiceChannel'] = var31;
            var24['channelId'] = var28;
            var24 = var26.bind(var4)(var30, var24);
            var17[1] = var24;
            var24 = 46;
            var24 = var29[var24];
            var25 = var25.bind(var4)(var24);
            var24 = {};
            var24['channelId'] = var28;
            var24 = var26.bind(var4)(var25, var24);
            var17[2] = var24;
            if(!var21) { _fun0006_ip = 104; continue _fun0006 }
case 105:
            var26 = _closure1_slot21;
            var29 = _closure1_slot1;
            var33 = _closure1_slot2;
            var24 = var33[var19];
            var25 = var29.bind(var4)(var24);
            var24 = {};
            var28 = 47;
            var28 = var33[var28];
            var28 = var29.bind(var4)(var28);
            var24['icon'] = var28;
            var29 = _closure1_slot0;
            var28 = 28;
            var30 = var33[var28];
            var30 = var29.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.formatToPlainString;
            var28 = var33[var28];
            var28 = var29.bind(var4)(var28);
            var28 = var28.t;
            var29 = var28.dHHb//;
            var28 = {};
            var28['channelName'] = var32;
            var28 = var30.bind(var31)(var29, var28);
            var24['accessibilityLabel'] = var28;
            var24['onPress'] = var27;
            var21 = var26.bind(var4)(var25, var24);
case 104:
            var17[3] = var21;
            var21 = var18 != var22;
            var18 = null;
            if(!var21) { _fun0006_ip = 106; continue _fun0006 }
case 107:
            var21 = _closure1_slot21;
            var25 = _closure1_slot1;
            var26 = _closure1_slot2;
            var19 = var26[var19];
            var20 = var25.bind(var4)(var19);
            var19 = {};
            var24 = 48;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var19['icon'] = var24;
            var19['onPress'] = var23;
            var19['accessibilityLabel'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 106:
            var17[4] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/header/VoicePanelHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();