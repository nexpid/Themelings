// app/modules/activities/panel/native/ActivityPanelPIPView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityLayoutMode;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.ACTIVITY_PIP_SIZE;
    var _closure1_slot10 = var11;
    var8 = var4.ActivityPanelModes;
    var _closure1_slot11 = var8;
    var8 = var4.ACTIVITY_LAYOUT_PHYSICS_GESTURE;
    var _closure1_slot12 = var8;
    var8 = var4.ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
    var _closure1_slot13 = var8;
    var4 = var4.LANDSCAPE_IFRAME_HORIZONTAL_MARGIN;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PIP_WINDOW_OFFSET;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 300;
    var4['duration'] = var8;
    var _closure1_slot19 = var4;
    var4 = 12;
    var8 = var6[var4];
    var9 = var5.bind(var1)(var8);
    var8 = var9.generateBoxShadowStyle;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS;
    var14 = var8.bind(var9)(var4);
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 14;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var10['borderRadius'] = var15;
    var18 = var10;
    var17 = var11;
    var15 = copyDataProperties(var18, var17);
    var18 = var10;
    var17 = var14;
    var14 = copyDataProperties(var18, var17);
    var4['wrapper'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var12;
    var18 = var10;
    var17 = var11;
    var11 = copyDataProperties(var18, var17);
    var4['mask'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}";
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var24 = var2.transitionState;
            var _closure2_slot0 = var24;
            var23 = var2.transitionCleanUp;
            var _closure2_slot1 = var23;
            var13 = undefined;
            var _closure2_slot12 = var13;
            var _closure2_slot13 = var13;
            var _closure2_slot14 = var13;
            var _closure2_slot15 = var13;
            var _closure2_slot16 = var13;
            var _closure2_slot17 = var13;
            var _closure2_slot18 = var13;
            var _closure2_slot19 = var13;
            var _closure2_slot20 = var13;
            var _closure2_slot21 = var13;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 15;
            var6 = var3[var5];
            var9 = var4.bind(var13)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var25 = var8.bind(var9)(var7, var6);
            var _closure2_slot2 = var25;
            var6 = _closure1_slot20;
            var6 = var6.bind(var13)();
            var _closure2_slot3 = var6;
            var10 = _closure1_slot1;
            var7 = 16;
            var7 = var3[var7];
            var7 = var10.bind(var13)(var7);
            var29 = var7.bind(var13)();
            var _closure2_slot4 = var29;
            var7 = 17;
            var7 = var3[var7];
            var7 = var10.bind(var13)(var7);
            var7 = var7.bind(var13)();
            var _closure2_slot5 = var7;
            var12 = _closure1_slot3;
            var9 = var12.useContext;
            var8 = 18;
            var8 = var3[var8];
            var8 = var10.bind(var13)(var8);
            var8 = var9.bind(var12)(var8);
            var14 = var8.wrapperOffset;
            var _closure2_slot6 = var14;
            var21 = var8.setMode;
            var _closure2_slot7 = var21;
            var15 = var8.pipState;
            var _closure2_slot8 = var15;
            var28 = var8.pipAvoidanceSpecs;
            var _closure2_slot9 = var28;
            var16 = var8.wrapperDimensions;
            var8 = 19;
            var8 = var3[var8];
            var9 = var4.bind(var13)(var8);
            var8 = var9.useLockedWebView;
            var8 = var8.bind(var9)(var24);
            var26 = var8.shown;
            var _closure2_slot10 = var26;
            var9 = var8.renderWebView;
            var11 = var12.useEffect;
            var10 = new Array(1);
            var10[0] = var14;
            var8 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = _closure2_slot6;
                var2 = {};
                var5 = false;
                var2['gestureActive'] = var5;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var8 = var11.bind(var12)(var8, var10);
            var3 = var3[var5];
            var10 = var4.bind(var13)(var3);
            var8 = var10.useStateFromStoresObject;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure1_slot8;
                var1 = var4.getConnectedActivityLocation;
                var3 = var1.bind(var4)();
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 21;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.getEmbeddedActivityLocationChannelId;
                var2 = var2.bind(var5)(var3);
                var1['channelId'] = var2;
                var2 = var4.getSelfEmbeddedActivityForLocation;
                var2 = var2.bind(var4)(var3);
                var1['activity'] = var2;
                return var1;
            };
            var3 = var8.bind(var10)(var4, var3);
            var4 = var3.channelId;
            var _closure2_slot11 = var4;
            var4 = var3.activity;
            var3 = null;
            var10 = var3 == var4;
            var8 = undefined;
            if(var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var4.applicationId;
case 2:
            _closure2_slot12 = var8;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = var18[var5];
            var12 = var17.bind(var13)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot8;
                    var3 = var4.getPipOrientationLockStateForApp;
                    var2 = _closure2_slot12;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var19 = var11.bind(var12)(var10, var8);
            var5 = var18[var5];
            var11 = var17.bind(var13)(var5);
            var10 = var11.useStateFromStores;
            var5 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot11;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var11)(var8, var5);
            _closure2_slot13 = var10;
            var8 = _closure1_slot6;
            var5 = function(arg1) {
                var2 = arg1;
                var1 = var2.shouldDisableSafeAreas;
                var1 = var1.bind(var2)();
                return var1;
            };
            var27 = var8.bind(var13)(var5);
            _closure2_slot14 = var27;
            var22 = 22;
            var5 = var18[var22];
            var11 = var17.bind(var13)(var5);
            var8 = var11.useAnimatedStyle;
            var5 = function W() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var2 = var1.x;
                    var6 = var1.y;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 23;
                    var1 = var4[var1];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var1);
                    var3 = var5.getClampedPIPPosition;
                    var1 = {};
                    var1['pipX'] = var2;
                    var1['pipY'] = var6;
                    var6 = _closure1_slot10;
                    var7 = var6.width;
                    var1['width'] = var7;
                    var6 = var6.height;
                    var1['height'] = var6;
                    var6 = _closure2_slot4;
                    var1['windowDimensions'] = var6;
                    var6 = _closure2_slot5;
                    var1['safeArea'] = var6;
                    var7 = _closure2_slot9;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var6 = var6.bottom;
                    var1['bottomAvoidanceRegion'] = var6;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var6 = var6.top;
                    var1['topAvoidanceRegion'] = var6;
                    var7 = _closure2_slot6;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var7 = var6.gestureActive;
                    var6 = undefined;
                    if(!var7) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var8 = _closure2_slot6;
                    var7 = var8.get;
                    var6 = var7.bind(var8)();
case 6:
                    var1['positionOffset'] = var6;
                    var6 = _closure2_slot14;
                    var1['disableHorizontalSafeAreas'] = var6;
                    var1 = var3.bind(var5)(var1);
                    var9 = var1.x;
                    var13 = var1.y;
                    var3 = _closure2_slot10;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = _closure2_slot2;
case 8:
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = 0.5;
                    if(!(var2 < var1)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var1 = 0;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 14; continue _fun0003 }
case 12:
                    var1 = _closure2_slot4;
                    var2 = var1.width;
                    var1 = global;
                    var6 = var1.Math;
                    var5 = var6.max;
                    var1 = _closure2_slot5;
                    var3 = var1.right;
                    var1 = _closure1_slot17;
                    var1 = var5.bind(var6)(var3, var1);
                    var1 = var2 + var1;
                    _fun0003_ip = 15; continue _fun0003;
case 14:
                    var2 = _closure1_slot10;
                    var3 = var2.width;
                    var2 = global;
                    var7 = var2.Math;
                    var6 = var7.max;
                    var2 = _closure2_slot5;
                    var5 = var2.right;
                    var2 = _closure1_slot17;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3 + var2;
                    var1 = -var2;
case 15:
                    var9 = var1;
case 10:
                    var1 = function() {
                        var1 = function ActivityPanelPIPViewTsx2() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var2 = arguments[0];
                                var1 = undefined;
                                if(!(var2 === var1)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                                var2 = false;
case 16:
                                if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                                var4 = _closure2_slot0;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 24;
                                var3 = var6[var3];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.TransitionStates;
                                var3 = var3.YEETED;
                                var2 = var4 === var3;
case 18:
                                if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 22;
                                var2 = var4[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.runOnJS;
                                var2 = _closure2_slot1;
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.bind(var1)();
case 20:
                                return var1;
                            }
                        };
                        var3 = {};
                        var2 = _closure2_slot0;
                        var3['transitionState'] = var2;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 24;
                        var5 = var8[var5];
                        var6 = undefined;
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.TransitionStates;
                        var3['TransitionStates'] = var5;
                        var5 = 22;
                        var5 = var8[var5];
                        var5 = var7.bind(var6)(var5);
                        var5 = var5.runOnJS;
                        var3['runOnJS'] = var5;
                        var4 = _closure2_slot1;
                        var3['transitionCleanUp'] = var4;
                        var1['__closure'] = var3;
                        var3 = 5141562491372.0;
                        var1['__workletHash'] = var3;
                        var2 = _closure1_slot22;
                        var1['__initData'] = var2;
                        return var1;
                    };
                    var10 = var1.bind(var4)();
                    var1 = {};
                    var5 = _closure2_slot2;
                    var3 = 1;
                    var2 = var3;
                    if(!var5) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 25;
                    var5 = var7[var5];
                    var8 = var6.bind(var4)(var5);
                    var7 = var8.withTiming;
                    var6 = _closure2_slot10;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = 0;
                    if(!var5) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var6 = var3;
case 24:
                    var16 = _closure1_slot19;
                    var15 = 'animate-always';
                    var18 = var8;
                    var17 = var6;
                    var14 = var10;
                    var2 = var18[var7](var17, var16, var15, var14, var13);
case 22:
                    var1['opacity'] = var2;
                    var3 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 26;
                    var2 = var2[var7];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot6;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var2 = var2.gestureActive;
                    if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var2 = _closure1_slot13;
                    _fun0003_ip = 28; continue _fun0003;
case 26:
                    var2 = _closure1_slot12;
case 28:
                    var8 = 'animate-always';
                    var2 = var5.bind(var6)(var13, var2, var8);
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.withSpring;
                    var13 = _closure2_slot6;
                    var5 = var13.get;
                    var5 = var5.bind(var13)();
                    var5 = var5.gestureActive;
                    if(var5) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var5 = _closure1_slot13;
                    _fun0003_ip = 31; continue _fun0003;
case 29:
                    var5 = _closure1_slot12;
case 31:
                    var11 = _closure2_slot2;
                    var4 = undefined;
                    if(var11) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var4 = var10;
case 32:
                    var18 = var7;
                    var17 = var9;
                    var16 = var5;
                    var15 = var8;
                    var14 = var4;
                    var4 = var18[var6](var17, var16, var15, var14, var13);
                    var3['translateX'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['pipState'] = var15;
            var20 = 23;
            var20 = var18[var20];
            var20 = var17.bind(var13)(var20);
            var20 = var20.getClampedPIPPosition;
            var12['getClampedPIPPosition'] = var20;
            var20 = _closure1_slot10;
            var12['ACTIVITY_PIP_SIZE'] = var20;
            var12['windowDimensions'] = var29;
            var12['safeArea'] = var7;
            var12['pipAvoidanceSpecs'] = var28;
            var12['wrapperOffset'] = var14;
            var12['disableHorizontalSafeAreas'] = var27;
            var12['shown'] = var26;
            var12['reduceMotion'] = var25;
            var25 = _closure1_slot17;
            var12['PIP_WINDOW_OFFSET'] = var25;
            var12['transitionState'] = var24;
            var24 = 24;
            var24 = var18[var24];
            var24 = var17.bind(var13)(var24);
            var24 = var24.TransitionStates;
            var12['TransitionStates'] = var24;
            var24 = var18[var22];
            var24 = var17.bind(var13)(var24);
            var24 = var24.runOnJS;
            var12['runOnJS'] = var24;
            var12['transitionCleanUp'] = var23;
            var23 = 25;
            var23 = var18[var23];
            var23 = var17.bind(var13)(var23);
            var23 = var23.withTiming;
            var12['withTiming'] = var23;
            var23 = _closure1_slot19;
            var12['REDUCED_MOTION_TIMING'] = var23;
            var23 = 26;
            var23 = var18[var23];
            var23 = var17.bind(var13)(var23);
            var23 = var23.withSpring;
            var12['withSpring'] = var23;
            var23 = _closure1_slot12;
            var12['ACTIVITY_LAYOUT_PHYSICS_GESTURE'] = var23;
            var23 = _closure1_slot13;
            var12['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = var23;
            var5['__closure'] = var12;
            var12 = 8039199265160.0;
            var5['__workletHash'] = var12;
            var12 = _closure1_slot21;
            var5['__initData'] = var12;
            var5 = var8.bind(var11)(var5);
            _closure2_slot15 = var5;
            var12 = _closure1_slot1;
            var8 = 27;
            var8 = var18[var8];
            var11 = var12.bind(var13)(var8);
            var8 = {};
            var23 = var20.width;
            var8['pipWidth'] = var23;
            var20 = var20.height;
            var8['pipHeight'] = var20;
            var8['pipOrientationLockState'] = var19;
            var16 = var16.isLandscape;
            var8['isLandscape'] = var16;
            var8 = var11.bind(var13)(var8);
            var19 = var8.width;
            _closure2_slot16 = var19;
            var8 = var8.height;
            _closure2_slot17 = var8;
            var20 = _closure1_slot3;
            var16 = var20.useMemo;
            var11 = new Array(2);
            var11[0] = var19;
            var11[1] = var8;
            var8 = function() {
                var1 = {};
                var3 = _closure2_slot16;
                var1['width'] = var3;
                var2 = _closure2_slot17;
                var1['height'] = var2;
                var2 = 'none';
                var1['pointerEvents'] = var2;
                return var1;
            };
            var11 = var16.bind(var20)(var8, var11);
            _closure2_slot18 = var11;
            var16 = var20.useMemo;
            var7 = var7.right;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var2 = {};
                    var3 = false;
                    var2['disable'] = var3;
                    var3 = global;
                    var6 = var3.Math;
                    var5 = var6.max;
                    var4 = _closure1_slot14;
                    var7 = _closure2_slot5;
                    var3 = null;
                    var9 = var3 == var7;
                    var7 = undefined;
                    if(var9) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var8 = _closure2_slot5;
                    var7 = var8.right;
case 34:
                    var8 = var3 != var7;
                    var3 = 0;
                    if(!var8) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var3 = var7;
case 36:
                    var3 = var5.bind(var6)(var4, var3);
                    var2['override'] = var3;
                    var1['right'] = var2;
                    return var1;
                }
            };
            var7 = var16.bind(var20)(var7, var8);
            _closure2_slot19 = var7;
            var19 = var20.useCallback;
            var16 = function k() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 22;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.runOnJS;
                var3 = _closure2_slot7;
                var3 = var4.bind(var5)(var3);
                var2 = _closure1_slot11;
                var2 = var2.PANEL;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = {};
            var22 = var18[var22];
            var22 = var17.bind(var13)(var22);
            var22 = var22.runOnJS;
            var8['runOnJS'] = var22;
            var8['setMode'] = var21;
            var22 = _closure1_slot11;
            var8['ActivityPanelModes'] = var22;
            var16['__closure'] = var8;
            var8 = 2951177166574.0;
            var16['__workletHash'] = var8;
            var8 = _closure1_slot23;
            var16['__initData'] = var8;
            var8 = new Array(1);
            var8[0] = var21;
            var19 = var19.bind(var20)(var16, var8);
            var16 = 28;
            var8 = var18[var16];
            var12 = var12.bind(var13)(var8);
            var8 = {};
            var20 = true;
            var8['panGestureEnabled'] = var20;
            var8['onTapGestureStart'] = var19;
            var16 = var18[var16];
            var16 = var17.bind(var13)(var16);
            var16 = var16.MorphablePanelModes;
            var16 = var16.PIP;
            var8['mode'] = var16;
            var8['pipState'] = var15;
            var8['wrapperOffset'] = var14;
            var14 = false;
            var8['disableHorizontalSafeAreas'] = var14;
            var8 = var12.bind(var13)(var8);
            _closure2_slot20 = var8;
            var9 = !var9;
            if(var9) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var9 = var3 == var4;
case 38:
            _closure2_slot21 = var9;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(8);
            var2[0] = var11;
            var2[1] = var10;
            var2[2] = var9;
            var2[3] = var8;
            var2[4] = var7;
            var7 = var6.mask;
            var2[5] = var7;
            var6 = var6.wrapper;
            var2[6] = var6;
            var2[7] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot18;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 29;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.ThemeContextProvider;
                    var1 = {};
                    var5 = _closure1_slot16;
                    var5 = var5.DARK;
                    var1['theme'] = var5;
                    var5 = 30;
                    var5 = var9[var5];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.GestureDetector;
                    var5 = {};
                    var7 = _closure2_slot20;
                    var5['gesture'] = var7;
                    var8 = _closure1_slot1;
                    var7 = 22;
                    var7 = var9[var7];
                    var7 = var8.bind(var3)(var7);
                    var8 = var7.View;
                    var7 = {};
                    var11 = _closure2_slot3;
                    var10 = var11.wrapper;
                    var9 = new Array(2);
                    var9[0] = var10;
                    var10 = _closure2_slot15;
                    var9[1] = var10;
                    var7['style'] = var9;
                    var10 = _closure1_slot4;
                    var9 = {};
                    var11 = var11.mask;
                    var9['style'] = var11;
                    var12 = _closure2_slot21;
                    var11 = !var12;
                    if(var12) { _fun0006_ip = 12; continue _fun0006 }
case 40:
                    var14 = _closure1_slot18;
                    var13 = _closure1_slot4;
                    var12 = {};
                    var15 = _closure2_slot18;
                    var12['style'] = var15;
                    var16 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var15 = 31;
                    var15 = var19[var15];
                    var16 = var16.bind(var3)(var15);
                    var15 = {};
                    var19 = _closure2_slot13;
                    var15['channel'] = var19;
                    var19 = _closure1_slot9;
                    var19 = var19.PIP;
                    var15['layoutMode'] = var19;
                    var18 = _closure1_slot15;
                    var15['portraitSafeAreasConfig'] = var18;
                    var17 = _closure2_slot19;
                    var15['landscapeSafeAreasConfig'] = var17;
                    var15 = var14.bind(var3)(var16, var15);
                    var12['children'] = var15;
                    var11 = var14.bind(var3)(var13, var12);
case 12:
                    var9['children'] = var11;
                    var9 = var4.bind(var3)(var10, var9);
                    var7['children'] = var9;
                    var7 = var4.bind(var3)(var8, var7);
                    var5['children'] = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelPIPView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();