// app/modules/voice_panel/native/VoicePanelUI.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function NOOP() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot63 = var1;
    var1 = function AnimatedWrapper(arg1) {
        var1 = arg1;
        var2 = var1.wrapperOffset;
        var5 = var1.children;
        var1 = function useWrapperStyles(arg1) {
            var15 = arg1;
            var _closure3_slot0 = var15;
            var3 = _closure1_slot31;
            var10 = undefined;
            var5 = var3.bind(var10)();
            var _closure3_slot1 = var5;
            var6 = _closure1_slot4;
            var4 = var6.useContext;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 15;
            var3 = var11[var3];
            var3 = var12.bind(var10)(var3);
            var3 = var4.bind(var6)(var3);
            var16 = var3.wrapperDimensions;
            var _closure3_slot2 = var16;
            var14 = var3.connected;
            var _closure3_slot3 = var14;
            var20 = var3.controlsSpecs;
            var _closure3_slot4 = var20;
            var22 = var3.focused;
            var _closure3_slot5 = var22;
            var13 = var3.mode;
            var _closure3_slot6 = var13;
            var18 = var3.preJoinContentSize;
            var _closure3_slot7 = var18;
            var23 = var3.safeArea;
            var _closure3_slot8 = var23;
            var19 = var3.windowDimensions;
            var _closure3_slot9 = var19;
            var17 = var3.useReducedMotion;
            var _closure3_slot10 = var17;
            var9 = _closure1_slot0;
            var8 = 14;
            var3 = var11[var8];
            var6 = var9.bind(var10)(var3);
            var4 = var6.useDerivedValue;
            var3 = function o() {
                var2 = _closure3_slot4;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var1 = var1.height;
                return var1;
            };
            var7 = {};
            var7['controlsSpecs'] = var20;
            var3['__closure'] = var7;
            var7 = 6243014585347.0;
            var3['__workletHash'] = var7;
            var7 = _closure1_slot55;
            var3['__initData'] = var7;
            var20 = var4.bind(var6)(var3);
            var _closure3_slot11 = var20;
            var3 = 24;
            var3 = var11[var3];
            var4 = var9.bind(var10)(var3);
            var3 = var4.usePIPState;
            var21 = var3.bind(var4)();
            var _closure3_slot12 = var21;
            var3 = var11[var8];
            var7 = var9.bind(var10)(var3);
            var6 = var7.useAnimatedReaction;
            var4 = function l() {
                var1 = {};
                var4 = _closure3_slot6;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['modeToSet'] = var3;
                var4 = _closure3_slot3;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['connected'] = var3;
                var4 = _closure3_slot9;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var3 = var3.width;
                var1['windowWidth'] = var3;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var3 = var3.height;
                var1['windowHeight'] = var3;
                var4 = _closure3_slot8;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['safeArea'] = var3;
                var4 = _closure3_slot5;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['focused'] = var3;
                var3 = _closure3_slot12;
                var1['pipState'] = var3;
                var4 = _closure3_slot11;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['controlsHeight'] = var3;
                var3 = _closure3_slot7;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['preJoinContentSize'] = var2;
                return var1;
            };
            var3 = {};
            var3['mode'] = var13;
            var3['connected'] = var14;
            var3['windowDimensions'] = var19;
            var3['safeArea'] = var23;
            var3['focused'] = var22;
            var3['pipState'] = var21;
            var3['controlsHeight'] = var20;
            var3['preJoinContentSize'] = var18;
            var4['__closure'] = var3;
            var3 = 5273555735813.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot56;
            var4['__initData'] = var3;
            var3 = function s(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var6 = arg1;
                    var7 = arg2;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var5 = var8.cheapWorkletShallowEqual;
                    var2 = null;
                    var9 = var2 != var7;
                    var4 = undefined;
                    if(!var9) { _fun0001_ip = 51; continue _fun0001 }
 48:
                    var4 = var7;
 51:
                    var4 = var5.bind(var8)(var6, var4);
                    if(var4) { _fun0001_ip = 772; continue _fun0001 }
 63:
                    var9 = var6.modeToSet;
                    var5 = var6.connected;
                    var12 = var6.windowWidth;
                    var11 = var6.windowHeight;
                    var4 = var6.safeArea;
                    var8 = var6.pipState;
                    var16 = var6.controlsHeight;
                    var6 = var6.preJoinContentSize;
                    var10 = _closure1_slot15;
                    var10 = var10.PIP;
                    if(!(var9 === var10)) { _fun0001_ip = 137; continue _fun0001 }
 125:
                    var8 = var8.id;
                    if(!(var2 != var8)) { _fun0001_ip = 772; continue _fun0001 }
 137:
                    var10 = var2 == var7;
                    if(var10) { _fun0001_ip = 262; continue _fun0001 }
 144:
                    var2 = var7.windowHeight;
                    var2 = var11 === var2;
                    if(!var2) { _fun0001_ip = 167; continue _fun0001 }
 157:
                    var8 = var7.windowWidth;
                    var2 = var12 === var8;
 167:
                    if(!var2) { _fun0001_ip = 190; continue _fun0001 }
 170:
                    var13 = var4.top;
                    var8 = var7.safeArea;
                    var8 = var8.top;
                    var2 = var13 === var8;
 190:
                    if(!var2) { _fun0001_ip = 213; continue _fun0001 }
 193:
                    var13 = var4.bottom;
                    var8 = var7.safeArea;
                    var8 = var8.bottom;
                    var2 = var13 === var8;
 213:
                    if(!var2) { _fun0001_ip = 236; continue _fun0001 }
 216:
                    var13 = var4.left;
                    var8 = var7.safeArea;
                    var8 = var8.left;
                    var2 = var13 === var8;
 236:
                    if(!var2) { _fun0001_ip = 259; continue _fun0001 }
 239:
                    var8 = var4.right;
                    var7 = var7.safeArea;
                    var7 = var7.right;
                    var2 = var8 === var7;
 259:
                    var10 = var2;
 262:
                    var8 = _closure3_slot2;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var8 = var7.drawerX;
                    var7 = var7.drawerY;
                    var7 = _closure1_slot15;
                    var7 = var7.PANEL;
                    if(!(var9 !== var7)) { _fun0001_ip = 412; continue _fun0001 }
 304:
                    var7 = _closure1_slot15;
                    var7 = var7.DISMISSED;
                    if(!(var9 === var7)) { _fun0001_ip = 772; continue _fun0001 }
 321:
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 19;
                    var7 = var13[var7];
                    var13 = var8.bind(var1)(var7);
                    var8 = _closure3_slot2;
                    if(var5) { _fun0001_ip = 395; continue _fun0001 }
 348:
                    var7 = {};
                    var15 = _closure3_slot9;
                    var14 = var15.get;
                    var14 = var14.bind(var15)();
                    var15 = var14.height;
                    var14 = 60;
                    var14 = var15 + var14;
                    var7['drawerY'] = var14;
                    var7['mode'] = var9;
                    var7 = var13.bind(var1)(var8, var7);
                    _fun0001_ip = 772; continue _fun0001;
 395:
                    var7 = {};
                    var7['mode'] = var9;
                    var7 = var13.bind(var1)(var8, var7);
                    _fun0001_ip = 772; continue _fun0001;
 412:
                    if(var5) { _fun0001_ip = 681; continue _fun0001 }
 418:
                    var8 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var7 = 25;
                    var13 = var14[var7];
                    var17 = var8.bind(var1)(var13);
                    var15 = var17.getMaxPanelWidth;
                    var13 = {};
                    var13['windowWidth'] = var12;
                    var13['connected'] = var5;
                    var18 = var4.left;
                    var13['safeAreaLeft'] = var18;
                    var18 = var4.right;
                    var13['safeAreaRight'] = var18;
                    var13 = var15.bind(var17)(var13);
                    var7 = var14[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getPanelX;
                    var8 = var7.bind(var8)(var12, var13);
                    var7 = 0;
                    if(var5) { _fun0001_ip = 618; continue _fun0001 }
 507:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var5 = 26;
                    var5 = var15[var5];
                    var5 = var14.bind(var1)(var5);
                    var14 = global;
                    var15 = var14.Math;
                    var14 = var15.max;
                    var6 = var11 - var6;
                    var6 = var6 - var16;
                    var4 = var4.bottom;
                    var6 = var6 - var4;
                    var17 = _closure3_slot9;
                    var4 = var17.get;
                    var4 = var4.bind(var17)();
                    var16 = var4.height;
                    var4 = var17.get;
                    var4 = var4.bind(var17)();
                    var17 = var4.height;
                    var4 = 0.8;
                    var4 = var4 * var17;
                    var4 = var16 - var4;
                    var4 = var14.bind(var15)(var6, var4);
                    var7 = var5.bind(var1)(var4);
 618:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 19;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = _closure3_slot2;
                    var4 = {};
                    var4['drawerWidth'] = var13;
                    var4['drawerHeight'] = var11;
                    var4['drawerX'] = var8;
                    var4['drawerY'] = var7;
                    var4['animated'] = var10;
                    var4['mode'] = var9;
                    var4 = var6.bind(var1)(var5, var4);
                    _fun0001_ip = 772; continue _fun0001;
 681:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 19;
                    var6 = var5[var3];
                    var8 = var4.bind(var1)(var6);
                    var7 = _closure3_slot2;
                    var6 = {};
                    var6['drawerWidth'] = var12;
                    var6['drawerHeight'] = var11;
                    var11 = 0;
                    var6['drawerX'] = var11;
                    var6['drawerY'] = var11;
                    var6['animated'] = var10;
                    var6['mode'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = _closure3_slot0;
                    var2 = {};
                    var5 = false;
                    var2['gestureActive'] = var5;
                    var2 = var4.bind(var1)(var3, var2);
 772:
                    return var1;
                }
            };
            var18 = {};
            var20 = 18;
            var20 = var11[var20];
            var20 = var9.bind(var10)(var20);
            var20 = var20.cheapWorkletShallowEqual;
            var18['cheapWorkletShallowEqual'] = var20;
            var20 = _closure1_slot15;
            var18['VoicePanelModes'] = var20;
            var18['wrapperDimensions'] = var16;
            var20 = 19;
            var20 = var11[var20];
            var20 = var12.bind(var10)(var20);
            var18['updateSharedValueIfChanged'] = var20;
            var18['wrapperOffset'] = var15;
            var20 = 25;
            var21 = var11[var20];
            var21 = var9.bind(var10)(var21);
            var21 = var21.getMaxPanelWidth;
            var18['getMaxPanelWidth'] = var21;
            var20 = var11[var20];
            var20 = var9.bind(var10)(var20);
            var20 = var20.getPanelX;
            var18['getPanelX'] = var20;
            var20 = 26;
            var20 = var11[var20];
            var20 = var12.bind(var10)(var20);
            var18['roundToNearestPixel'] = var20;
            var18['windowDimensions'] = var19;
            var3['__closure'] = var18;
            var18 = 4141680172446.0;
            var3['__workletHash'] = var18;
            var18 = _closure1_slot57;
            var3['__initData'] = var18;
            var3 = var6.bind(var7)(var4, var3);
            var3 = var11[var8];
            var6 = var9.bind(var10)(var3);
            var4 = var6.useAnimatedStyle;
            var3 = function C() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure3_slot10;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var15 = !var1;
                    if(!var15) { _fun0002_ip = 41; continue _fun0002 }
 22:
                    var2 = _closure3_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var15 = var1.animated;
 41:
                    if(var15) { _fun0002_ip = 63; continue _fun0002 }
 44:
                    var2 = _closure3_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var15 = var1.gestureActive;
 63:
                    var2 = _closure3_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var8 = var1.gestureActive;
                    var2 = _closure3_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var2 = var1.drawerY;
                    var4 = var1.drawerX;
                    if(!var8) { _fun0002_ip = 126; continue _fun0002 }
 110:
                    var5 = _closure3_slot3;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var8 = !var1;
 126:
                    var14 = var2;
                    var16 = var4;
                    if(!var8) { _fun0002_ip = 205; continue _fun0002 }
 135:
                    var1 = global;
                    var7 = var1.Math;
                    var6 = var7.max;
                    var5 = 0;
                    var1 = 0;
                    if(!var8) { _fun0002_ip = 173; continue _fun0002 }
 155:
                    var9 = _closure3_slot0;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    var1 = var8.y;
 173:
                    var1 = var6.bind(var7)(var1, var5);
                    var14 = var2 + var1;
                    var5 = _closure3_slot0;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1.x;
                    var16 = var4 + var1;
 205:
                    var1 = function() {
                        var1 = function VoicePanelUITsx29(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var1 = arg1;
                                if(!var1) { _fun0003_ip = 39; continue _fun0003 }
 6:
                                var3 = _closure3_slot6;
                                var2 = var3.get;
                                var3 = var2.bind(var3)();
                                var2 = _closure1_slot15;
                                var2 = var2.DISMISSED;
                                var1 = var3 !== var2;
 39:
                                if(!var1) { _fun0003_ip = 103; continue _fun0003 }
 42:
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 14;
                                var3 = var6[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.runOnJS;
                                var5 = _closure1_slot1;
                                var1 = 27;
                                var1 = var6[var1];
                                var1 = var5.bind(var2)(var1);
                                var1 = var1.updateSourceTrackingView;
                                var1 = var3.bind(var4)(var1);
                                var1 = var1.bind(var2)();
 103:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = {};
                        var2 = _closure3_slot6;
                        var3['mode'] = var2;
                        var4 = _closure1_slot15;
                        var3['VoicePanelModes'] = var4;
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 14;
                        var4 = var7[var4];
                        var6 = undefined;
                        var4 = var5.bind(var6)(var4);
                        var4 = var4.runOnJS;
                        var3['runOnJS'] = var4;
                        var5 = _closure1_slot1;
                        var4 = 27;
                        var4 = var7[var4];
                        var4 = var5.bind(var6)(var4);
                        var4 = var4.updateSourceTrackingView;
                        var3['updateSourceTrackingView'] = var4;
                        var1['__closure'] = var3;
                        var3 = 10394717541764.0;
                        var1['__workletHash'] = var3;
                        var2 = _closure1_slot59;
                        var1['__initData'] = var2;
                        return var1;
                    };
                    var6 = undefined;
                    var13 = var1.bind(var6)();
                    var4 = _closure1_slot54;
                    var1 = {};
                    var7 = _closure3_slot6;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var1['mode'] = var5;
                    var7 = _closure3_slot3;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var1['connected'] = var5;
                    var7 = var4.bind(var6)(var1);
                    var1 = {};
                    var5 = {};
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var8 = 11;
                    var4 = var4[var8];
                    var11 = var9.bind(var6)(var4);
                    var10 = var11.withSpring;
                    var9 = _closure3_slot0;
                    var4 = var9.get;
                    var4 = var4.bind(var9)();
                    var4 = var4.gestureActive;
                    if(var4) { _fun0002_ip = 326; continue _fun0002 }
 320:
                    var9 = _closure1_slot28;
                    _fun0002_ip = 330; continue _fun0002;
 326:
                    var9 = _closure1_slot17;
 330:
                    var12 = 'animate-never';
                    var4 = var12;
                    if(!var15) { _fun0002_ip = 348; continue _fun0002 }
 342:
                    var4 = 'animate-always';
 348:
                    var22 = var11;
                    var21 = var16;
                    var20 = var9;
                    var19 = var4;
                    var18 = var13;
                    var4 = var22[var10](var21, var20, var19, var18, var17);
                    var5['translateX'] = var4;
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = {};
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var8];
                    var11 = var10.bind(var6)(var9);
                    var10 = var11.withSpring;
                    var16 = _closure3_slot0;
                    var9 = var16.get;
                    var9 = var9.bind(var16)();
                    var9 = var9.gestureActive;
                    if(var9) { _fun0002_ip = 432; continue _fun0002 }
 426:
                    var9 = _closure1_slot28;
                    _fun0002_ip = 436; continue _fun0002;
 432:
                    var9 = _closure1_slot17;
 436:
                    if(!var15) { _fun0002_ip = 445; continue _fun0002 }
 439:
                    var12 = 'animate-always';
 445:
                    var22 = var11;
                    var21 = var14;
                    var20 = var9;
                    var19 = var12;
                    var18 = var13;
                    var9 = var22[var10](var21, var20, var19, var18, var17);
                    var5['translateY'] = var9;
                    var4[1] = var5;
                    var1['transform'] = var4;
                    var5 = _closure3_slot2;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var4 = var4.drawerWidth;
                    var1['width'] = var4;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var4 = var4.drawerHeight;
                    var1['height'] = var4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.withSpring;
                    var4 = _closure1_slot10;
                    var4 = var5.bind(var6)(var7, var4);
                    var1['borderRadius'] = var4;
                    var5 = _closure3_slot6;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var2 = _closure1_slot15;
                    var4 = var2.PANEL;
                    var2 = 'none';
                    if(!(var5 === var4)) { _fun0002_ip = 590; continue _fun0002 }
 586:
                    var2 = 'auto';
 590:
                    var1['pointerEvents'] = var2;
                    var4 = _closure3_slot3;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = 'transparent';
                    if(var4) { _fun0002_ip = 630; continue _fun0002 }
 615:
                    var3 = _closure3_slot1;
                    var3 = var3.maskDefaultBackground;
                    var2 = var3.backgroundColor;
 630:
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var7['useReducedMotion'] = var17;
            var7['wrapperDimensions'] = var16;
            var7['wrapperOffset'] = var15;
            var7['connected'] = var14;
            var7['mode'] = var13;
            var13 = _closure1_slot15;
            var7['VoicePanelModes'] = var13;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.runOnJS;
            var7['runOnJS'] = var8;
            var8 = 27;
            var8 = var11[var8];
            var8 = var12.bind(var10)(var8);
            var8 = var8.updateSourceTrackingView;
            var7['updateSourceTrackingView'] = var8;
            var8 = _closure1_slot54;
            var7['computeBorderRadii'] = var8;
            var8 = 11;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.withSpring;
            var7['withSpring'] = var8;
            var8 = _closure1_slot17;
            var7['DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE'] = var8;
            var8 = _closure1_slot28;
            var7['DRAWER_SIZE_PHYSICS'] = var8;
            var8 = _closure1_slot10;
            var7['BORDER_RADIUS_PHYSICS'] = var8;
            var7['styles'] = var5;
            var3['__closure'] = var7;
            var7 = 5539911019838.0;
            var3['__workletHash'] = var7;
            var7 = _closure1_slot58;
            var3['__initData'] = var7;
            var6 = var4.bind(var6)(var3);
            var _closure3_slot13 = var6;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var5 = var5.wrapper;
            var2[1] = var5;
            var1 = function() {
                var1 = _closure3_slot1;
                var3 = var1.wrapper;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = _closure3_slot13;
                var1[1] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var4 = undefined;
        var7 = var1.bind(var4)(var2);
        var3 = _closure1_slot21;
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 28;
        var1 = var8[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['style'] = var7;
        var6 = _closure1_slot24;
        var1['layout'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot64 = var1;
    var1 = function onGestureHandlerError(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 30;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.captureMessage;
            var3 = {};
            var2 = null;
            var6 = var2 == var7;
            var2 = undefined;
            if(var6) { _fun0004_ip = 61; continue _fun0004 }
 47:
            var6 = {};
            var7 = var7.message;
            var6['error'] = var7;
            var2 = var6;
 61:
            var3['extra'] = var2;
            var2 = 'VoicePanelUI: Gesture handler error';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var _closure1_slot65 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var15 = 0;
    var2 = var7[var15];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var14 = 1;
    var5 = var7[var14];
    var2 = native4;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var11 = 2;
    var2 = var7[var11];
    var2 = var6.bind(var1)(var2);
    var17 = var2.StyleSheet;
    var _closure1_slot5 = var17;
    var5 = var2.Pressable;
    var _closure1_slot6 = var5;
    var10 = var2.ScrollView;
    var2 = 3;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.BORDER_RADIUS_PHYSICS;
    var _closure1_slot10 = var5;
    var18 = var2.DEFAULT_BORDER_RADIUS;
    var _closure1_slot11 = var18;
    var5 = var2.DEFAULT_BORDER_RADIUS_PIP;
    var _closure1_slot12 = var5;
    var5 = var2.DRAWER_SPRING_PHYSICS;
    var12 = var2.IS_IOS;
    var _closure1_slot13 = var12;
    var12 = var2.MODE_CHANGE_PHYSICS;
    var13 = var2.VOICE_PANEL_CHUNK_DIVISOR;
    var _closure1_slot14 = var13;
    var13 = var2.VoicePanelModes;
    var _closure1_slot15 = var13;
    var13 = var2.LAYOUT_PHYSICS;
    var _closure1_slot16 = var13;
    var2 = var2.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
    var _closure1_slot17 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.VoicePanelControlsModes;
    var _closure1_slot18 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.isActivityParticipant;
    var _closure1_slot19 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.POP_RESISTANCE;
    var _closure1_slot20 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var16 = var2.jsx;
    var _closure1_slot21 = var16;
    var2 = var2.jsxs;
    var _closure1_slot22 = var2;
    var2 = {};
    var16 = "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}";
    var2['code'] = var16;
    var _closure1_slot23 = var2;
    var2 = function() {
        var1 = function layoutTransition(arg1) {
            var3 = arg1;
            var1 = {};
            var2 = {};
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 11;
            var8 = var9[var4];
            var5 = undefined;
            var12 = var6.bind(var5)(var8);
            var11 = var12.withSpring;
            var10 = var3.targetOriginX;
            var8 = _closure1_slot16;
            var7 = 'animate-always';
            var10 = var11.bind(var12)(var10, var8, var7);
            var2['originX'] = var10;
            var10 = var9[var4];
            var12 = var6.bind(var5)(var10);
            var11 = var12.withSpring;
            var10 = var3.targetOriginY;
            var10 = var11.bind(var12)(var10, var8, var7);
            var2['originY'] = var10;
            var10 = var9[var4];
            var12 = var6.bind(var5)(var10);
            var11 = var12.withSpring;
            var10 = var3.targetWidth;
            var10 = var11.bind(var12)(var10, var8, var7);
            var2['width'] = var10;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.withSpring;
            var4 = var3.targetHeight;
            var4 = var5.bind(var6)(var4, var8, var7);
            var2['height'] = var4;
            var1['animations'] = var2;
            var2 = {};
            var4 = var3.currentOriginX;
            var2['originX'] = var4;
            var4 = var3.currentOriginY;
            var2['originY'] = var4;
            var4 = var3.currentWidth;
            var2['width'] = var4;
            var3 = var3.currentHeight;
            var2['height'] = var3;
            var1['initialValues'] = var2;
            return var1;
        };
        var3 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 11;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.withSpring;
        var3['withSpring'] = var4;
        var4 = _closure1_slot16;
        var3['LAYOUT_PHYSICS'] = var4;
        var1['__closure'] = var3;
        var3 = 16454235842679.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot23;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot24 = var2;
    var2 = {};
    var22 = var2;
    var21 = var13;
    var13 = copyDataProperties(var22, var21);
    var13 = 'damping';
    var2[var13] = var15;
    var _closure1_slot25 = var2;
    var2 = {};
    var16 = "function scrollViewLayoutTransition_VoicePanelUITsx2(values){const{withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}";
    var2['code'] = var16;
    var _closure1_slot26 = var2;
    var2 = function() {
        var1 = function scrollViewLayoutTransition(arg1) {
            var3 = arg1;
            var1 = {};
            var2 = {};
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 11;
            var8 = var9[var4];
            var5 = undefined;
            var12 = var6.bind(var5)(var8);
            var11 = var12.withSpring;
            var10 = var3.targetOriginX;
            var13 = _closure1_slot16;
            var8 = 'animate-always';
            var10 = var11.bind(var12)(var10, var13, var8);
            var2['originX'] = var10;
            var10 = var9[var4];
            var12 = var6.bind(var5)(var10);
            var11 = var12.withSpring;
            var10 = var3.targetOriginY;
            var10 = var11.bind(var12)(var10, var13, var8);
            var2['originY'] = var10;
            var10 = var9[var4];
            var12 = var6.bind(var5)(var10);
            var11 = var12.withSpring;
            var10 = var3.targetWidth;
            var7 = _closure1_slot25;
            var10 = var11.bind(var12)(var10, var7, var8);
            var2['width'] = var10;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.withSpring;
            var4 = var3.targetHeight;
            var4 = var5.bind(var6)(var4, var7, var8);
            var2['height'] = var4;
            var1['animations'] = var2;
            var2 = {};
            var4 = var3.currentOriginX;
            var2['originX'] = var4;
            var4 = var3.currentOriginY;
            var2['originY'] = var4;
            var4 = var3.currentWidth;
            var2['width'] = var4;
            var3 = var3.currentHeight;
            var2['height'] = var3;
            var1['initialValues'] = var2;
            return var1;
        };
        var3 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 11;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.withSpring;
        var3['withSpring'] = var4;
        var4 = _closure1_slot16;
        var3['LAYOUT_PHYSICS'] = var4;
        var4 = _closure1_slot25;
        var3['EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS'] = var4;
        var1['__closure'] = var3;
        var3 = 11745134918460.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot26;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot27 = var2;
    var2 = {};
    var22 = var2;
    var21 = var5;
    var5 = copyDataProperties(var22, var21);
    var16 = 0.3;
    var5 = 'mass';
    var2[var5] = var16;
    var16 = 100;
    var2[var13] = var16;
    var13 = 'stiffness';
    var2[var13] = var16;
    var _closure1_slot28 = var2;
    var2 = {};
    var22 = var2;
    var21 = var12;
    var12 = copyDataProperties(var22, var21);
    var2[var5] = var11;
    var5 = {};
    var11 = 'function computeViewableChunksFromScrollPosition_VoicePanelUITsx3(scrollPosition,windowHeight,contentHeight,extraChunks=1){const{VOICE_PANEL_CHUNK_DIVISOR}=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};}';
    var5['code'] = var11;
    var _closure1_slot29 = var5;
    var5 = function() {
        var1 = function computeViewableChunksFromScrollPosition(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var8 = arguments[3];
                var1 = undefined;
                if(!(var8 === var1)) { _fun0005_ip = 12; continue _fun0005 }
 9:
                var8 = 1;
 12:
                var4 = global;
                var3 = var4.Math;
                var2 = var3.ceil;
                var7 = _closure1_slot14;
                var1 = arg2;
                var1 = var1 / var7;
                var12 = var2.bind(var3)(var1);
                var3 = var4.Math;
                var2 = var3.max;
                var6 = var4.Math;
                var5 = var6.floor;
                var1 = arg1;
                var1 = var1 / var12;
                var1 = var5.bind(var6)(var1);
                var1 = var1 - var8;
                var6 = 0;
                var1 = var2.bind(var3)(var1, var6);
                var9 = var4.Math;
                var5 = var9.min;
                var2 = var1 + var7;
                var3 = 2;
                var1 = var3 * var8;
                var2 = var2 + var1;
                var11 = var4.Math;
                var10 = var11.ceil;
                var1 = arg3;
                var1 = var1 / var12;
                var1 = var10.bind(var11)(var1);
                var2 = var5.bind(var9)(var2, var1);
                var1 = {};
                var5 = var4.Math;
                var4 = var5.max;
                var7 = var2 - var7;
                var3 = var3 * var8;
                var3 = var7 - var3;
                var3 = var4.bind(var5)(var3, var6);
                var1['start'] = var3;
                var1['end'] = var2;
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot14;
        var3['VOICE_PANEL_CHUNK_DIVISOR'] = var4;
        var1['__closure'] = var3;
        var3 = 3008066799757.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot29;
        var1['__initData'] = var2;
        return var1;
    };
    var5 = var5.bind(var1)();
    var _closure1_slot30 = var5;
    var5 = 12;
    var5 = var7[var5];
    var12 = var6.bind(var1)(var5);
    var11 = var12.createStyles;
    var5 = {};
    var13 = {};
    var21 = var17.absoluteFillObject;
    var22 = var13;
    var16 = copyDataProperties(var22, var21);
    var19 = 'hidden';
    var16 = 'overflow';
    var13[var16] = var19;
    var5['accessibilityView'] = var13;
    var13 = {};
    var21 = var17.absoluteFillObject;
    var22 = var13;
    var16 = copyDataProperties(var22, var21);
    var16 = 'zIndex';
    var13[var16] = var14;
    var5['wrapper'] = var13;
    var13 = {};
    var16 = 13;
    var19 = var7[var16];
    var19 = var9.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BG_BASE_SECONDARY;
    var13['backgroundColor'] = var19;
    var5['maskDefaultBackground'] = var13;
    var13 = {};
    var21 = var17.absoluteFillObject;
    var22 = var13;
    var17 = copyDataProperties(var22, var21);
    var17 = 'borderTopLeftRadius';
    var13[var17] = var18;
    var17 = 'borderTopRightRadius';
    var13[var17] = var18;
    var5['scrollView'] = var13;
    var13 = {'flexGrow': 1, 'flexShrink': 0};
    var5['scrollViewContent'] = var13;
    var13 = {};
    var16 = var7[var16];
    var16 = var9.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_BACKDROP_NO_OPACITY;
    var13['backgroundColor'] = var16;
    var13['zIndex'] = var15;
    var5['shade'] = var13;
    var13 = {};
    var13['flexGrow'] = var14;
    var5['shadePressable'] = var13;
    var5 = var11.bind(var12)(var5);
    var _closure1_slot31 = var5;
    var5 = 14;
    var5 = var7[var5];
    var9 = var9.bind(var1)(var5);
    var5 = var9.createAnimatedComponent;
    var5 = var5.bind(var9)(var10);
    var _closure1_slot32 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}';
    var5['code'] = var9;
    var _closure1_slot33 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}';
    var5['code'] = var9;
    var _closure1_slot34 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx6(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}';
    var5['code'] = var9;
    var _closure1_slot35 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}';
    var5['code'] = var9;
    var _closure1_slot36 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx8(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}';
    var5['code'] = var9;
    var _closure1_slot37 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx9(){const{updateSharedValueIfChanged,gestureState}=this.__closure;updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}';
    var5['code'] = var9;
    var _closure1_slot38 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx10(event){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}';
    var5['code'] = var9;
    var _closure1_slot39 = var5;
    var5 = {};
    var9 = "function VoicePanelUITsx11(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});console.log('onTouchesCancelled');}";
    var5['code'] = var9;
    var _closure1_slot40 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx12(event){const{gestureState,mode,VoicePanelModes,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(gestureState.get().cancel)return;if(mode.get()!==VoicePanelModes.PIP){const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});}}';
    var5['code'] = var9;
    var _closure1_slot41 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx13(event,manager){const{State,gestureState,mode,VoicePanelModes,scrollPosition,focused,MIN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){startGesture=true;}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}';
    var5['code'] = var9;
    var _closure1_slot42 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx14(event){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes}=this.__closure;if(gestureState.get().cancel)return;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});}';
    var5['code'] = var9;
    var _closure1_slot43 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx15(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}';
    var5['code'] = var9;
    var _closure1_slot44 = var5;
    var5 = {};
    var9 = 'function onBeginDrag_VoicePanelUITsx16(event){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);}';
    var5['code'] = var9;
    var _closure1_slot45 = var5;
    var5 = {};
    var9 = 'function onEndDrag_VoicePanelUITsx17(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}';
    var5['code'] = var9;
    var _closure1_slot46 = var5;
    var5 = {};
    var9 = 'function onMomentumEnd_VoicePanelUITsx18(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}';
    var5['code'] = var9;
    var _closure1_slot47 = var5;
    var5 = {};
    var9 = 'function onScroll_VoicePanelUITsx19(event){const{lockScrolling,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}scrollTo(scrollerRef,0,targetScrollPosition,false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}';
    var5['code'] = var9;
    var _closure1_slot48 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx20(){const{mode}=this.__closure;return mode.get();}';
    var5['code'] = var9;
    var _closure1_slot49 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx21(mode,previous){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}}';
    var5['code'] = var9;
    var _closure1_slot50 = var5;
    var5 = {};
    var9 = "function VoicePanelUITsx22(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get()).height-safeArea.get().top,bottom:safeArea.get().bottom}};}";
    var5['code'] = var9;
    var _closure1_slot51 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx23(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+(wrapperOffset.get().gestureActive?wrapperOffset.get().y:0);const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}';
    var5['code'] = var9;
    var _closure1_slot52 = var5;
    var5 = {};
    var9 = 'function computeBorderRadii_VoicePanelUITsx24({mode:mode,connected:connected}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;}';
    var5['code'] = var9;
    var _closure1_slot53 = var5;
    var5 = function() {
        var1 = function computeBorderRadii(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var4 = var1.mode;
                var3 = var1.connected;
                var1 = _closure1_slot15;
                var1 = var1.PIP;
                if(!(var4 !== var1)) { _fun0006_ip = 42; continue _fun0006 }
 31:
                var1 = 0;
                if(var3) { _fun0006_ip = 40; continue _fun0006 }
 36:
                var1 = _closure1_slot11;
 40:
                _fun0006_ip = 46; continue _fun0006;
 42:
                var1 = _closure1_slot12;
 46:
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot15;
        var3['VoicePanelModes'] = var4;
        var4 = _closure1_slot12;
        var3['DEFAULT_BORDER_RADIUS_PIP'] = var4;
        var4 = _closure1_slot11;
        var3['DEFAULT_BORDER_RADIUS'] = var4;
        var1['__closure'] = var3;
        var3 = 4574399878042.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot53;
        var1['__initData'] = var2;
        return var1;
    };
    var5 = var5.bind(var1)();
    var _closure1_slot54 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx25(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().height;}';
    var5['code'] = var9;
    var _closure1_slot55 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx26(){const{mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize}=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get()};}';
    var5['code'] = var9;
    var _closure1_slot56 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx27(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize}=props;if(modeToSet===VoicePanelModes.PIP&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:windowHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=connected?0:roundToNearestPixel(Math.max(windowHeight-preJoinContentSize-controlsHeight-safeArea.bottom,windowDimensions.get().height-0.8*windowDimensions.get().height));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:windowHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.DISMISSED){if(connected){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}}}';
    var5['code'] = var9;
    var _closure1_slot57 = var5;
    var5 = {};
    var9 = "function VoicePanelUITsx28(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,computeBorderRadii,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS,BORDER_RADIUS_PHYSICS,styles}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;let{gestureActive:gestureActive}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();gestureActive=gestureActive&&!connected.get();if(gestureActive){y+=Math.max(gestureActive?wrapperOffset.get().y:0,0);x+=wrapperOffset.get().x;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)}],width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none',backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}";
    var5['code'] = var9;
    var _closure1_slot58 = var5;
    var5 = {};
    var9 = 'function VoicePanelUITsx29(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}';
    var5['code'] = var9;
    var _closure1_slot59 = var5;
    var5 = {'mass': 0.6, 'damping': 30, 'stiffness': 400, 'overshootClamping': true};
    var _closure1_slot60 = var5;
    var5 = {};
    var9 = "function VoicePanelUITsx30(){const{withSpring,opacity,DrawerShadeOpacityPhysics,accessibilityPreferencesSharedValue}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&opacity.get()===0?'none':'flex',pointerEvents:opacity.get()===0?'none':'auto'};}";
    var5['code'] = var9;
    var _closure1_slot61 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        var1 = arg1;
        var11 = var1.opacity;
        var _closure2_slot0 = var11;
        var8 = var1.onPress;
        var1 = _closure1_slot31;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var12 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 14;
        var3 = var6[var1];
        var7 = var12.bind(var4)(var3);
        var3 = var7.useAnimatedStyle;
        var2 = function o() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 11;
                var2 = var6[var2];
                var4 = undefined;
                var9 = var5.bind(var4)(var2);
                var8 = var9.withSpring;
                var10 = _closure2_slot0;
                var7 = var10.get;
                var7 = var7.bind(var10)();
                var3 = _closure1_slot60;
                var3 = var8.bind(var9)(var7, var3);
                var1['opacity'] = var3;
                var3 = 29;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var4 = var3.accessibilityPreferencesSharedValue;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var4 = var3.screenReaderEnabled;
                var6 = 'flex';
                var3 = var6;
                if(!var4) { _fun0007_ip = 131; continue _fun0007 }
 105:
                var5 = _closure2_slot0;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var4 = 0;
                var3 = var6;
                if(!(var4 === var5)) { _fun0007_ip = 131; continue _fun0007 }
 127:
                var3 = 'none';
 131:
                var1['display'] = var3;
                var3 = _closure2_slot0;
                var2 = var3.get;
                var4 = var2.bind(var3)();
                var2 = 'auto';
                var3 = 0;
                if(!(var3 === var4)) { _fun0007_ip = 162; continue _fun0007 }
 158:
                var2 = 'none';
 162:
                var1['pointerEvents'] = var2;
                return var1;
            }
        };
        var10 = {};
        var13 = 11;
        var13 = var6[var13];
        var13 = var12.bind(var4)(var13);
        var13 = var13.withSpring;
        var10['withSpring'] = var13;
        var10['opacity'] = var11;
        var11 = _closure1_slot60;
        var10['DrawerShadeOpacityPhysics'] = var11;
        var11 = 29;
        var11 = var6[var11];
        var11 = var12.bind(var4)(var11);
        var11 = var11.accessibilityPreferencesSharedValue;
        var10['accessibilityPreferencesSharedValue'] = var11;
        var2['__closure'] = var10;
        var10 = 4107656223951.0;
        var2['__workletHash'] = var10;
        var10 = _closure1_slot61;
        var2['__initData'] = var10;
        var7 = var3.bind(var7)(var2);
        var3 = _closure1_slot21;
        var2 = _closure1_slot1;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {'style': null, 'importantForAccessibility': 'no', 'accessibilityElementsHidden': true};
        var6 = _closure1_slot5;
        var10 = var6.absoluteFill;
        var6 = new Array(3);
        var6[0] = var10;
        var10 = var9.shade;
        var6[1] = var10;
        var6[2] = var7;
        var1['style'] = var6;
        var7 = _closure1_slot21;
        var6 = _closure1_slot6;
        var5 = {};
        var9 = var9.shadePressable;
        var5['style'] = var9;
        var5['onPress'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot62 = var5;
    var5 = var8.memo;
    var4 = function VoicePanelUI() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = _closure1_slot31;
            var5 = undefined;
            var31 = var2.bind(var5)();
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 31;
            var3 = var8[var2];
            var4 = var7.bind(var5)(var3);
            var3 = 32;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.VOICE_PANEL;
            var3 = var4.bind(var5)(var3);
            var6 = var3.analyticsLocations;
            var9 = _closure1_slot4;
            var4 = var9.useContext;
            var3 = 15;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var4.bind(var9)(var3);
            var11 = var3.scrollPosition;
            var10 = var3.dragScrolling;
            var17 = var3.channelId;
            var _closure2_slot0 = var17;
            var15 = var3.dismissPanel;
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var28 = false;
            var4 = var3.bind(var4)(var28);
            var3 = _closure1_slot3;
            var22 = 2;
            var9 = var3.bind(var5)(var4, var22);
            var3 = 0;
            var3 = var9[var3];
            var4 = 1;
            var4 = var9[var4];
            var _closure2_slot1 = var4;
            var12 = _closure1_slot4;
            var9 = var12.useRef;
            var4 = -1;
            var4 = var9.bind(var12)(var4);
            var _closure2_slot2 = var4;
            var14 = _closure1_slot4;
            var12 = var14.useCallback;
            var9 = new Array(1);
            var9[0] = var17;
            var4 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = global;
                var4 = var1.clearTimeout;
                var1 = _closure2_slot2;
                var3 = var1.current;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 33;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.batchUpdates;
                var2 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = _closure3_slot0;
                        if(var1) { _fun0009_ip = 112; continue _fun0009 }
 10:
                        var3 = _closure1_slot9;
                        var2 = var3.getState;
                        var3 = var2.bind(var3)();
                        var2 = var3.setChannelPanelFullscreen;
                        var6 = _closure2_slot0;
                        var4 = _closure3_slot0;
                        var2 = var2.bind(var3)(var6, var4);
                        var2 = _closure1_slot8;
                        var1 = var2.getState;
                        var3 = var1.bind(var2)();
                        var2 = var3.requestFreezeLock;
                        var1 = {};
                        var1['lockEnabled'] = var4;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = 'voice-panel-freeze-';
                        var4 = var5.bind(var4)(var6);
                        var1['key'] = var4;
                        var1 = var2.bind(var3)(var1);
                        _fun0009_ip = 156; continue _fun0009;
 112:
                        var2 = _closure2_slot2;
                        var1 = global;
                        var5 = var1.setTimeout;
                        var4 = undefined;
                        var3 = function() {
                            var3 = _closure1_slot9;
                            var2 = var3.getState;
                            var3 = var2.bind(var3)();
                            var2 = var3.setChannelPanelFullscreen;
                            var6 = _closure2_slot0;
                            var4 = _closure3_slot0;
                            var2 = var2.bind(var3)(var6, var4);
                            var2 = _closure1_slot8;
                            var1 = var2.getState;
                            var3 = var1.bind(var2)();
                            var2 = var3.requestFreezeLock;
                            var1 = {};
                            var1['lockEnabled'] = var4;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var5 = var4.concat;
                            var4 = 'voice-panel-freeze-';
                            var4 = var5.bind(var4)(var6);
                            var1['key'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = 1000;
                        var1 = var5.bind(var4)(var3, var1);
                        var2['current'] = var1;
 156:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var12.bind(var14)(var4, var9);
            var16 = _closure1_slot4;
            var14 = var16.useLayoutEffect;
            var12 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var9 = new Array(0);
            var9 = var14.bind(var16)(var12, var9);
            var9 = {};
            var9['scrollPosition'] = var11;
            var9['dragScrolling'] = var10;
            var9['setPanelFullscreen'] = var4;
            var12 = _closure1_slot4;
            var11 = var12.useCallback;
            var10 = new Array(1);
            var10[0] = var17;
            var4 = function(arg1) {
                var2 = _closure1_slot9;
                var1 = var2.getState;
                var4 = var1.bind(var2)();
                var3 = var4.setChannelPanelOpen;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var4 = var11.bind(var12)(var4, var10);
            var9['setPanelOpen'] = var4;
            var12 = _closure1_slot4;
            var11 = var12.useCallback;
            var10 = new Array(1);
            var10[0] = var17;
            var4 = function(arg1) {
                var2 = _closure1_slot9;
                var1 = var2.getState;
                var4 = var1.bind(var2)();
                var3 = var4.setChannelPanelPIP;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var4 = var11.bind(var12)(var4, var10);
            var9['setPanelPIP'] = var4;
            var4 = function usePanelGesture(arg1) {
                var2 = arg1;
                var27 = var2.scrollPosition;
                var _closure3_slot0 = var27;
                var28 = var2.dragScrolling;
                var _closure3_slot1 = var28;
                var40 = var2.setPanelFullscreen;
                var _closure3_slot2 = var40;
                var39 = var2.setPanelOpen;
                var _closure3_slot3 = var39;
                var38 = var2.setPanelPIP;
                var _closure3_slot4 = var38;
                var4 = _closure1_slot4;
                var3 = var4.useContext;
                var25 = _closure1_slot1;
                var20 = _closure1_slot2;
                var2 = 15;
                var2 = var20[var2];
                var15 = undefined;
                var2 = var25.bind(var15)(var2);
                var2 = var3.bind(var4)(var2);
                var7 = var2.channelId;
                var _closure3_slot5 = var7;
                var18 = var2.connected;
                var _closure3_slot6 = var18;
                var33 = var2.controlsSpecs;
                var _closure3_slot7 = var33;
                var32 = var2.dismissPanel;
                var _closure3_slot8 = var32;
                var31 = var2.dismissToPIPGestureRef;
                var _closure3_slot9 = var31;
                var26 = var2.focused;
                var _closure3_slot10 = var26;
                var29 = var2.hideControls;
                var _closure3_slot11 = var29;
                var22 = var2.isFocusedVideoZoomed;
                var _closure3_slot12 = var22;
                var19 = var2.mode;
                var _closure3_slot13 = var19;
                var23 = var2.safeArea;
                var _closure3_slot14 = var23;
                var21 = var2.setMode;
                var _closure3_slot15 = var21;
                var6 = var2.showControls;
                var _closure3_slot16 = var6;
                var16 = var2.windowDimensions;
                var _closure3_slot17 = var16;
                var17 = var2.wrapperDimensions;
                var _closure3_slot18 = var17;
                var5 = var2.wrapperOffset;
                var _closure3_slot19 = var5;
                var2 = 16;
                var2 = var20[var2];
                var2 = var25.bind(var15)(var2);
                var34 = var2.bind(var15)();
                var _closure3_slot20 = var34;
                var13 = _closure1_slot0;
                var2 = 14;
                var3 = var20[var2];
                var8 = var13.bind(var15)(var3);
                var4 = var8.useSharedValue;
                var3 = 0;
                var4 = var4.bind(var8)(var3);
                var _closure3_slot21 = var4;
                var8 = var20[var2];
                var10 = var13.bind(var15)(var8);
                var9 = var10.useSharedValue;
                var8 = false;
                var24 = var9.bind(var10)(var8);
                var _closure3_slot22 = var24;
                var8 = var20[var2];
                var10 = var13.bind(var15)(var8);
                var9 = var10.useSharedValue;
                var8 = {};
                var8['start'] = var3;
                var11 = _closure1_slot14;
                var8['end'] = var11;
                var9 = var9.bind(var10)(var8);
                var _closure3_slot23 = var9;
                var11 = _closure1_slot4;
                var10 = var11.useState;
                var8 = true;
                var11 = var10.bind(var11)(var8);
                var10 = _closure1_slot3;
                var8 = 2;
                var8 = var10.bind(var15)(var11, var8);
                var30 = var8[var3];
                var _closure3_slot24 = var30;
                var3 = 1;
                var3 = var8[var3];
                var _closure3_slot25 = var3;
                var11 = _closure1_slot4;
                var10 = var11.useMemo;
                var8 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.Gesture;
                    var1 = var2.Native;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = new Array(0);
                var10 = var10.bind(var11)(var8, var3);
                var _closure3_slot26 = var10;
                var3 = var20[var2];
                var8 = var13.bind(var15)(var3);
                var3 = var8.useAnimatedRef;
                var11 = var3.bind(var8)();
                var _closure3_slot27 = var11;
                var3 = var20[var2];
                var12 = var13.bind(var15)(var3);
                var8 = var12.useSharedValue;
                var3 = {'absoluteXStart': 0, 'absoluteYStart': 0, 'cancel': false, 'active': false, 'requiresPop': false};
                var3 = var8.bind(var12)(var3);
                var _closure3_slot28 = var3;
                var8 = var20[var2];
                var36 = var13.bind(var15)(var8);
                var35 = var36.useAnimatedReaction;
                var12 = function f() {
                    var1 = {};
                    var4 = _closure3_slot28;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var3 = var3.active;
                    var1['gestureActive'] = var3;
                    var4 = _closure3_slot6;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1['connected'] = var3;
                    var3 = _closure3_slot13;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['mode'] = var2;
                    return var1;
                };
                var8 = {};
                var8['gestureState'] = var3;
                var8['connected'] = var18;
                var8['mode'] = var19;
                var12['__closure'] = var8;
                var8 = 5596084348360.0;
                var12['__workletHash'] = var8;
                var8 = _closure1_slot33;
                var12['__initData'] = var8;
                var8 = function h(arg1, arg2) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var4 = arg1;
                        var7 = arg2;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 18;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.cheapWorkletShallowEqual;
                        var3 = null;
                        var8 = var3 != var7;
                        var3 = undefined;
                        if(!var8) { _fun0010_ip = 51; continue _fun0010 }
 48:
                        var3 = var7;
 51:
                        var3 = var5.bind(var6)(var4, var3);
                        if(var3) { _fun0010_ip = 398; continue _fun0010 }
 63:
                        var3 = var4.gestureActive;
                        var5 = var4.connected;
                        var4 = var4.mode;
                        if(!var5) { _fun0010_ip = 146; continue _fun0010 }
 83:
                        if(var3) { _fun0010_ip = 146; continue _fun0010 }
 86:
                        var3 = _closure1_slot15;
                        var3 = var3.PANEL;
                        if(!(var4 === var3)) { _fun0010_ip = 146; continue _fun0010 }
 100:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 14;
                        var3 = var6[var3];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.runOnJS;
                        var3 = _closure3_slot2;
                        var5 = var5.bind(var6)(var3);
                        var3 = true;
                        var3 = var5.bind(var1)(var3);
                        _fun0010_ip = 190; continue _fun0010;
 146:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 14;
                        var3 = var6[var3];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.runOnJS;
                        var3 = _closure3_slot2;
                        var5 = var5.bind(var6)(var3);
                        var3 = false;
                        var3 = var5.bind(var1)(var3);
 190:
                        var3 = _closure1_slot15;
                        var3 = var3.PANEL;
                        if(!(var4 !== var3)) { _fun0010_ip = 250; continue _fun0010 }
 204:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 14;
                        var3 = var6[var3];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.runOnJS;
                        var3 = _closure3_slot3;
                        var5 = var5.bind(var6)(var3);
                        var3 = false;
                        var3 = var5.bind(var1)(var3);
                        _fun0010_ip = 294; continue _fun0010;
 250:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 14;
                        var3 = var6[var3];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.runOnJS;
                        var3 = _closure3_slot3;
                        var5 = var5.bind(var6)(var3);
                        var3 = true;
                        var3 = var5.bind(var1)(var3);
 294:
                        var3 = _closure1_slot15;
                        var3 = var3.PIP;
                        if(!(var4 !== var3)) { _fun0010_ip = 354; continue _fun0010 }
 308:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 14;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.runOnJS;
                        var3 = _closure3_slot4;
                        var4 = var4.bind(var5)(var3);
                        var3 = false;
                        var3 = var4.bind(var1)(var3);
                        _fun0010_ip = 398; continue _fun0010;
 354:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 14;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure3_slot4;
                        var3 = var3.bind(var4)(var2);
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
 398:
                        return var1;
                    }
                };
                var37 = {};
                var41 = 18;
                var41 = var20[var41];
                var41 = var13.bind(var15)(var41);
                var41 = var41.cheapWorkletShallowEqual;
                var37['cheapWorkletShallowEqual'] = var41;
                var41 = _closure1_slot15;
                var37['VoicePanelModes'] = var41;
                var41 = var20[var2];
                var41 = var13.bind(var15)(var41);
                var41 = var41.runOnJS;
                var37['runOnJS'] = var41;
                var37['setPanelFullscreen'] = var40;
                var37['setPanelOpen'] = var39;
                var37['setPanelPIP'] = var38;
                var8['__closure'] = var37;
                var37 = 10989484188294.0;
                var8['__workletHash'] = var37;
                var37 = _closure1_slot34;
                var8['__initData'] = var37;
                var8 = var35.bind(var36)(var12, var8);
                var35 = _closure1_slot4;
                var12 = var35.useCallback;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var6 = arg1;
                        var1 = null;
                        var1 = var1 != var6;
                        if(!var1) { _fun0011_ip = 49; continue _fun0011 }
 12:
                        var4 = _closure1_slot19;
                        var5 = _closure1_slot7;
                        var3 = var5.getParticipant;
                        var2 = _closure3_slot5;
                        var3 = var3.bind(var5)(var2, var6);
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3);
 49:
                        var3 = _closure3_slot25;
                        var2 = !var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var37 = var12.bind(var35)(var7, var8);
                var _closure3_slot29 = var37;
                var7 = var20[var2];
                var35 = var13.bind(var15)(var7);
                var12 = var35.useAnimatedReaction;
                var8 = function Pe() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var2 = _closure3_slot13;
                        var1 = var2.get;
                        var5 = var1.bind(var2)();
                        var1 = _closure1_slot15;
                        var4 = var1.PANEL;
                        var1 = undefined;
                        if(!(var5 === var4)) { _fun0012_ip = 67; continue _fun0012 }
 35:
                        var4 = _closure3_slot10;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var4 = null;
                        var4 = var4 == var3;
                        var2 = undefined;
                        if(var4) { _fun0012_ip = 64; continue _fun0012 }
 59:
                        var2 = var3.id;
 64:
                        var1 = var2;
 67:
                        return var1;
                    }
                };
                var7 = {};
                var7['mode'] = var19;
                var36 = _closure1_slot15;
                var7['VoicePanelModes'] = var36;
                var7['focused'] = var26;
                var8['__closure'] = var7;
                var7 = 6595654888031.0;
                var8['__workletHash'] = var7;
                var7 = _closure1_slot35;
                var8['__initData'] = var7;
                var7 = function _e(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var3 = arg1;
                        var1 = arg2;
                        if(!(var3 !== var1)) { _fun0013_ip = 57; continue _fun0013 }
 10:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var1 = var2[var1];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.runOnJS;
                        var1 = _closure3_slot29;
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.bind(var2)(var3);
 57:
                        var1 = undefined;
                        return var1;
                    }
                };
                var36 = {};
                var38 = var20[var2];
                var38 = var13.bind(var15)(var38);
                var38 = var38.runOnJS;
                var36['runOnJS'] = var38;
                var36['handleFocusChange'] = var37;
                var7['__closure'] = var36;
                var36 = 15236018210415.0;
                var7['__workletHash'] = var36;
                var36 = _closure1_slot36;
                var7['__initData'] = var36;
                var7 = var12.bind(var35)(var8, var7);
                var12 = _closure1_slot4;
                var8 = var12.useMemo;
                var7 = new Array(20);
                var7[0] = var34;
                var7[1] = var18;
                var7[2] = var33;
                var7[3] = var32;
                var7[4] = var31;
                var7[5] = var26;
                var7[6] = var30;
                var7[7] = var29;
                var7[8] = var3;
                var7[9] = var22;
                var7[10] = var24;
                var7[11] = var19;
                var7[12] = var23;
                var7[13] = var27;
                var7[14] = var10;
                var7[15] = var21;
                var7[16] = var6;
                var7[17] = var16;
                var7[18] = var17;
                var7[19] = var5;
                var6 = function() {
                    var18 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var16 = 17;
                    var2 = var13[var16];
                    var12 = undefined;
                    var2 = var18.bind(var12)(var2);
                    var4 = var2.Gesture;
                    var3 = var4.Race;
                    var2 = var13[var16];
                    var2 = var18.bind(var12)(var2);
                    var5 = var2.Gesture;
                    var2 = var5.Tap;
                    var6 = var2.bind(var5)();
                    var5 = var6.hitSlop;
                    var2 = {};
                    var9 = _closure3_slot20;
                    var8 = var9.left;
                    var10 = -1;
                    var8 = var10 * var8;
                    var2['left'] = var8;
                    var8 = var9.right;
                    var8 = var10 * var8;
                    var2['right'] = var8;
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.enabled;
                    var8 = _closure3_slot24;
                    var6 = var2.bind(var5)(var8);
                    var5 = var6.maxDistance;
                    var2 = 30;
                    var6 = var5.bind(var6)(var2);
                    var5 = var6.onStart;
                    var2 = function h() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var3 = _closure3_slot6;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if(!var2) { _fun0014_ip = 189; continue _fun0014 }
 22:
                            var3 = _closure3_slot13;
                            var2 = var3.get;
                            var4 = var2.bind(var3)();
                            var3 = _closure1_slot15;
                            var3 = var3.PIP;
                            if(!(var4 !== var3)) { _fun0014_ip = 189; continue _fun0014 }
 55:
                            var4 = _closure3_slot7;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var4 = var3.mode;
                            var3 = _closure1_slot18;
                            var3 = var3.HIDDEN;
                            if(!(var4 !== var3)) { _fun0014_ip = 139; continue _fun0014 }
 87:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 14;
                            var3 = var5[var3];
                            var5 = undefined;
                            var6 = var4.bind(var5)(var3);
                            var4 = var6.runOnJS;
                            var3 = _closure3_slot11;
                            var4 = var4.bind(var6)(var3);
                            var3 = {};
                            var6 = true;
                            var3['debounce'] = var6;
                            var3 = var4.bind(var5)(var3);
                            _fun0014_ip = 189; continue _fun0014;
 139:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 14;
                            var2 = var3[var2];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.runOnJS;
                            var1 = _closure3_slot16;
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var4 = true;
                            var1['debounce'] = var4;
                            var1 = var2.bind(var3)(var1);
 189:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var20 = {};
                    var19 = _closure3_slot6;
                    var20['connected'] = var19;
                    var23 = _closure3_slot13;
                    var20['mode'] = var23;
                    var11 = _closure1_slot15;
                    var20['VoicePanelModes'] = var11;
                    var14 = _closure3_slot7;
                    var20['controlsSpecs'] = var14;
                    var11 = _closure1_slot18;
                    var20['VoicePanelControlsModes'] = var11;
                    var17 = 14;
                    var21 = var13[var17];
                    var21 = var18.bind(var12)(var21);
                    var21 = var21.runOnJS;
                    var20['runOnJS'] = var21;
                    var21 = _closure3_slot16;
                    var20['showControls'] = var21;
                    var21 = _closure3_slot11;
                    var20['hideControls'] = var21;
                    var2['__closure'] = var20;
                    var20 = 15350003421175.0;
                    var2['__workletHash'] = var20;
                    var20 = _closure1_slot37;
                    var2['__initData'] = var20;
                    var2 = var5.bind(var6)(var2);
                    var5 = var13[var16];
                    var5 = var18.bind(var12)(var5);
                    var6 = var5.Gesture;
                    var5 = var6.Pan;
                    var6 = var5.bind(var6)();
                    var5 = var6.enabled;
                    var8 = var5.bind(var6)(var8);
                    var6 = var8.manualActivation;
                    var5 = true;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.maxPointers;
                    var5 = 1;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.hitSlop;
                    var5 = {};
                    var20 = var9.left;
                    var20 = var10 * var20;
                    var5['left'] = var20;
                    var9 = var9.right;
                    var9 = var10 * var9;
                    var5['right'] = var9;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.withRef;
                    var5 = _closure3_slot9;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.shouldCancelWhenOutside;
                    var5 = false;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.simultaneousWithExternalGesture;
                    var5 = _closure3_slot26;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.onTouchesDown;
                    var5 = function S(arg1, arg2) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var2 = arg2;
                            var1 = arg1;
                            var3 = var1.allTouches;
                            var1 = 0;
                            var1 = var3[var1];
                            var3 = _closure1_slot13;
                            if(!var3) { _fun0015_ip = 90; continue _fun0015 }
 28:
                            var3 = null;
                            if(!(var3 != var1)) { _fun0015_ip = 90; continue _fun0015 }
 34:
                            var4 = var1.absoluteY;
                            var5 = _closure3_slot17;
                            var3 = var5.get;
                            var3 = var3.bind(var5)();
                            var5 = var3.height;
                            var7 = _closure3_slot14;
                            var3 = var7.get;
                            var3 = var3.bind(var7)();
                            var3 = var3.bottom;
                            var3 = var5 - var3;
                            if(!(!(var4 > var3))) { _fun0015_ip = 234; continue _fun0015 }
 90:
                            var5 = _closure3_slot12;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            if(var4) { _fun0015_ip = 174; continue _fun0015 }
 109:
                            var7 = _closure3_slot13;
                            var5 = var7.get;
                            var7 = var5.bind(var7)();
                            var5 = _closure1_slot15;
                            var5 = var5.PANEL;
                            var5 = var7 === var5;
                            if(!var5) { _fun0015_ip = 171; continue _fun0015 }
 139:
                            var8 = _closure3_slot7;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            var7 = var7.mode;
                            var6 = _closure1_slot18;
                            var6 = var6.DRAWER;
                            var5 = var7 === var6;
 171:
                            var4 = var5;
 174:
                            if(!var4) { _fun0015_ip = 230; continue _fun0015 }
 177:
                            var5 = _closure3_slot28;
                            var4 = var5.set;
                            var3 = {};
                            var6 = var5.get;
                            var9 = var6.bind(var5)();
                            var10 = var3;
                            var6 = copyDataProperties(var10, var9);
                            var7 = true;
                            var6 = 'cancel';
                            var3[var6] = var7;
                            var3 = var4.bind(var5)(var3);
                            var3 = var2.fail;
                            var3 = var3.bind(var2)();
 230:
                            var3 = undefined;
                            return var3;
 234:
                            var4 = _closure3_slot28;
                            var3 = var4.set;
                            var1 = {};
                            var5 = var4.get;
                            var9 = var5.bind(var4)();
                            var10 = var1;
                            var5 = copyDataProperties(var10, var9);
                            var6 = true;
                            var5 = 'cancel';
                            var1[var5] = var6;
                            var1 = var3.bind(var4)(var1);
                            var1 = var2.activate;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10 = {};
                    var9 = _closure1_slot13;
                    var10['IS_IOS'] = var9;
                    var22 = _closure3_slot17;
                    var10['windowDimensions'] = var22;
                    var21 = _closure3_slot14;
                    var10['safeArea'] = var21;
                    var9 = _closure3_slot28;
                    var10['gestureState'] = var9;
                    var20 = _closure3_slot12;
                    var10['isFocusedVideoZoomed'] = var20;
                    var10['mode'] = var23;
                    var20 = _closure1_slot15;
                    var10['VoicePanelModes'] = var20;
                    var10['controlsSpecs'] = var14;
                    var10['VoicePanelControlsModes'] = var11;
                    var5['__closure'] = var10;
                    var10 = 13538548264193.0;
                    var5['__workletHash'] = var10;
                    var10 = _closure1_slot44;
                    var5['__initData'] = var10;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.onBegin;
                    var5 = function u(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var4 = arg1;
                            var2 = _closure3_slot28;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var1 = var1.cancel;
                            if(var1) { _fun0016_ip = 174; continue _fun0016 }
 31:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 19;
                            var1 = var3[var1];
                            var7 = undefined;
                            var3 = var2.bind(var7)(var1);
                            var2 = _closure3_slot19;
                            var1 = {'x': 0, 'y': 0};
                            var1 = var3.bind(var7)(var2, var1);
                            var3 = _closure3_slot28;
                            var2 = var3.set;
                            var1 = {};
                            var7 = var4.absoluteX;
                            var1['absoluteXStart'] = var7;
                            var4 = var4.absoluteY;
                            var1['absoluteYStart'] = var4;
                            var4 = false;
                            var1['active'] = var4;
                            var1['cancel'] = var4;
                            var7 = _closure3_slot6;
                            var4 = var7.get;
                            var4 = var4.bind(var7)();
                            if(!var4) { _fun0016_ip = 164; continue _fun0016 }
 137:
                            var7 = _closure3_slot13;
                            var6 = var7.get;
                            var6 = var6.bind(var7)();
                            var5 = _closure1_slot15;
                            var5 = var5.PANEL;
                            var4 = var6 === var5;
 164:
                            var1['requiresPop'] = var4;
                            var1 = var2.bind(var3)(var1);
 174:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var14 = {};
                    var14['gestureState'] = var9;
                    var11 = _closure1_slot1;
                    var10 = 19;
                    var20 = var13[var10];
                    var20 = var11.bind(var12)(var20);
                    var14['updateSharedValueIfChanged'] = var20;
                    var20 = _closure3_slot19;
                    var14['wrapperOffset'] = var20;
                    var14['connected'] = var19;
                    var14['mode'] = var23;
                    var24 = _closure1_slot15;
                    var14['VoicePanelModes'] = var24;
                    var5['__closure'] = var14;
                    var14 = 11622638269935.0;
                    var5['__workletHash'] = var14;
                    var14 = _closure1_slot43;
                    var5['__initData'] = var14;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.onTouchesMove;
                    var5 = function c(arg1, arg2) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            var4 = arg1;
                            var3 = arg2;
                            var6 = var4.state;
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.State;
                            var2 = var2.BEGAN;
                            if(!(var6 === var2)) { _fun0017_ip = 662; continue _fun0017 }
 55:
                            var7 = _closure3_slot28;
                            var6 = var7.get;
                            var6 = var6.bind(var7)();
                            var6 = var6.active;
                            if(var6) { _fun0017_ip = 662; continue _fun0017 }
 83:
                            var7 = _closure3_slot28;
                            var6 = var7.get;
                            var6 = var6.bind(var7)();
                            var6 = var6.cancel;
                            if(var6) { _fun0017_ip = 662; continue _fun0017 }
 108:
                            var4 = var4.changedTouches;
                            var10 = 0;
                            var4 = var4[var10];
                            var9 = var4.absoluteY;
                            var8 = var4.absoluteX;
                            var6 = _closure3_slot28;
                            var4 = var6.get;
                            var4 = var4.bind(var6)();
                            var4 = var4.absoluteYStart;
                            var11 = var4 - var9;
                            var4 = var6.get;
                            var4 = var4.bind(var6)();
                            var4 = var4.absoluteXStart;
                            var12 = var4 - var8;
                            var7 = global;
                            var14 = var7.Math;
                            var13 = var14.max;
                            var6 = var7.Math;
                            var4 = var6.abs;
                            var6 = var4.bind(var6)(var11);
                            var15 = var7.Math;
                            var4 = var15.abs;
                            var4 = var4.bind(var15)(var12);
                            var13 = var13.bind(var14)(var6, var4);
                            var6 = var7.Math;
                            var4 = var6.abs;
                            var6 = var4.bind(var6)(var12);
                            var12 = var7.Math;
                            var4 = var12.abs;
                            var4 = var4.bind(var12)(var11);
                            var6 = var6 >= var4;
                            if(var6) { _fun0017_ip = 272; continue _fun0017 }
 268:
                            var6 = var11 > var10;
 272:
                            var12 = _closure3_slot13;
                            var4 = var12.get;
                            var12 = var4.bind(var12)();
                            var4 = _closure1_slot15;
                            var4 = var4.PANEL;
                            if(!(var12 !== var4)) { _fun0017_ip = 398; continue _fun0017 }
 299:
                            var12 = _closure3_slot13;
                            var4 = var12.get;
                            var12 = var4.bind(var12)();
                            var4 = _closure1_slot15;
                            var4 = var4.PIP;
                            var12 = var12 === var4;
                            if(!var12) { _fun0017_ip = 336; continue _fun0017 }
 329:
                            var4 = 10;
                            var12 = var13 > var4;
 336:
                            var4 = false;
                            if(!var12) { _fun0017_ip = 497; continue _fun0017 }
 344:
                            var13 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var12 = 14;
                            var12 = var16[var12];
                            var14 = var13.bind(var1)(var12);
                            var13 = var14.runOnJS;
                            var15 = _closure1_slot1;
                            var12 = 20;
                            var12 = var16[var12];
                            var12 = var15.bind(var1)(var12);
                            var12 = var13.bind(var14)(var12);
                            var12 = var12.bind(var1)();
                            var4 = true;
                            _fun0017_ip = 497; continue _fun0017;
 398:
                            var13 = var7.Math;
                            var12 = var13.floor;
                            var14 = _closure3_slot0;
                            var7 = var14.get;
                            var7 = var7.bind(var14)();
                            var7 = var12.bind(var13)(var7);
                            if(!(var11 < var10)) { _fun0017_ip = 441; continue _fun0017 }
 432:
                            var7 = var7 <= var10;
                            var4 = true;
                            if(var7) { _fun0017_ip = 497; continue _fun0017 }
 441:
                            var10 = _closure3_slot10;
                            var7 = var10.get;
                            var11 = var7.bind(var10)();
                            var10 = null;
                            var12 = var10 == var11;
                            var7 = undefined;
                            if(var12) { _fun0017_ip = 470; continue _fun0017 }
 465:
                            var7 = var11.id;
 470:
                            var7 = var10 != var7;
                            if(!var7) { _fun0017_ip = 480; continue _fun0017 }
 477:
                            var7 = var6;
 480:
                            var4 = false;
                            if(!var7) { _fun0017_ip = 497; continue _fun0017 }
 485:
                            var7 = var3.fail;
                            var7 = var7.bind(var3)();
                            var4 = false;
 497:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 19;
                            var5 = var7[var5];
                            var7 = var6.bind(var1)(var5);
                            if(var4) { _fun0017_ip = 544; continue _fun0017 }
 520:
                            var5 = _closure3_slot28;
                            var4 = {};
                            var4['absoluteYStart'] = var9;
                            var4['absoluteXStart'] = var8;
                            var4 = var7.bind(var1)(var5, var4);
                            _fun0017_ip = 662; continue _fun0017;
 544:
                            var6 = _closure3_slot19;
                            var4 = {};
                            var5 = true;
                            var4['gestureActive'] = var5;
                            var4 = var7.bind(var1)(var6, var4);
                            var7 = _closure3_slot28;
                            var6 = var7.set;
                            var4 = {};
                            var4['absoluteXStart'] = var8;
                            var10 = _closure3_slot0;
                            var8 = var10.get;
                            var8 = var8.bind(var10)();
                            var8 = var9 + var8;
                            var4['absoluteYStart'] = var8;
                            var8 = false;
                            var4['cancel'] = var8;
                            var4['active'] = var5;
                            var8 = var7.get;
                            var8 = var8.bind(var7)();
                            var8 = var8.requiresPop;
                            var4['requiresPop'] = var8;
                            var4 = var6.bind(var7)(var4);
                            var4 = _closure3_slot22;
                            var2 = var4.set;
                            var2 = var2.bind(var4)(var5);
                            var2 = var3.activate;
                            var2 = var2.bind(var3)();
 662:
                            return var1;
                        }
                    };
                    var14 = {};
                    var16 = var13[var16];
                    var16 = var18.bind(var12)(var16);
                    var16 = var16.State;
                    var14['State'] = var16;
                    var14['gestureState'] = var9;
                    var14['mode'] = var23;
                    var16 = _closure1_slot15;
                    var14['VoicePanelModes'] = var16;
                    var24 = _closure3_slot0;
                    var14['scrollPosition'] = var24;
                    var16 = _closure3_slot10;
                    var14['focused'] = var16;
                    var16 = 10;
                    var14['MIN_GESTURE_MOVE'] = var16;
                    var16 = var13[var17];
                    var16 = var18.bind(var12)(var16);
                    var16 = var16.runOnJS;
                    var14['runOnJS'] = var16;
                    var16 = 20;
                    var16 = var13[var16];
                    var16 = var11.bind(var12)(var16);
                    var14['triggerIOSHaptic'] = var16;
                    var16 = var13[var10];
                    var16 = var11.bind(var12)(var16);
                    var14['updateSharedValueIfChanged'] = var16;
                    var14['wrapperOffset'] = var20;
                    var16 = _closure3_slot22;
                    var14['lockScrolling'] = var16;
                    var5['__closure'] = var14;
                    var14 = 12776663671117.0;
                    var5['__workletHash'] = var14;
                    var14 = _closure1_slot42;
                    var5['__initData'] = var14;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.onChange;
                    var5 = function l(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var3 = arg1;
                            var4 = _closure3_slot28;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var2 = var2.cancel;
                            if(var2) { _fun0018_ip = 644; continue _fun0018 }
 31:
                            var4 = _closure3_slot13;
                            var2 = var4.get;
                            var5 = var2.bind(var4)();
                            var4 = _closure1_slot15;
                            var4 = var4.PIP;
                            if(!(var5 === var4)) { _fun0018_ip = 176; continue _fun0018 }
 61:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 19;
                            var4 = var6[var4];
                            var7 = undefined;
                            var6 = var5.bind(var7)(var4);
                            var5 = _closure3_slot19;
                            var4 = {};
                            var10 = _closure3_slot28;
                            var8 = var10.get;
                            var8 = var8.bind(var10)();
                            var9 = var8.absoluteXStart;
                            var8 = var3.absoluteX;
                            var8 = var9 - var8;
                            var9 = -1;
                            var8 = var9 * var8;
                            var4['x'] = var8;
                            var8 = var10.get;
                            var8 = var8.bind(var10)();
                            var10 = var8.absoluteYStart;
                            var8 = var3.absoluteY;
                            var8 = var10 - var8;
                            var8 = var9 * var8;
                            var4['y'] = var8;
                            var4 = var6.bind(var7)(var5, var4);
                            _fun0018_ip = 644; continue _fun0018;
 176:
                            var5 = _closure3_slot28;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var4 = var4.absoluteYStart;
                            var3 = var3.absoluteY;
                            var4 = var4 - var3;
                            var3 = -1;
                            var3 = var3 * var4;
                            var5 = _closure3_slot6;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            if(!var4) { _fun0018_ip = 253; continue _fun0018 }
 231:
                            var6 = _closure3_slot28;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var5 = var5.requiresPop;
                            var4 = !var5;
 253:
                            if(!var4) { _fun0018_ip = 262; continue _fun0018 }
 256:
                            var5 = 0;
                            var4 = var3 <= var5;
 262:
                            if(!var4) { _fun0018_ip = 308; continue _fun0018 }
 265:
                            var6 = _closure3_slot28;
                            var5 = var6.set;
                            var4 = {};
                            var7 = var6.get;
                            var13 = var7.bind(var6)();
                            var14 = var4;
                            var7 = copyDataProperties(var14, var13);
                            var8 = true;
                            var7 = 'requiresPop';
                            var4[var7] = var8;
                            var4 = var5.bind(var6)(var4);
 308:
                            var5 = _closure3_slot22;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            if(!var4) { _fun0018_ip = 330; continue _fun0018 }
 324:
                            var4 = 0;
                            if(!(!(var3 < var4))) { _fun0018_ip = 389; continue _fun0018 }
 330:
                            var5 = _closure3_slot22;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var4 = !var4;
                            if(!var4) { _fun0018_ip = 368; continue _fun0018 }
 349:
                            var6 = _closure3_slot0;
                            var5 = var6.get;
                            var6 = var5.bind(var6)();
                            var5 = 0;
                            var4 = var6 <= var5;
 368:
                            if(!var4) { _fun0018_ip = 405; continue _fun0018 }
 371:
                            var6 = _closure3_slot22;
                            var5 = var6.set;
                            var4 = true;
                            var4 = var5.bind(var6)(var4);
                            _fun0018_ip = 405; continue _fun0018;
 389:
                            var6 = _closure3_slot22;
                            var5 = var6.set;
                            var4 = false;
                            var4 = var5.bind(var6)(var4);
 405:
                            var5 = _closure3_slot28;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var4 = var4.requiresPop;
                            var5 = var3;
                            if(!var4) { _fun0018_ip = 600; continue _fun0018 }
 433:
                            var4 = global;
                            var7 = var4.Math;
                            var6 = var7.max;
                            var4 = 0;
                            var4 = var6.bind(var7)(var3, var4);
                            var6 = 180;
                            if(!(!(var4 <= var6))) { _fun0018_ip = 588; continue _fun0018 }
 464:
                            var8 = _closure3_slot28;
                            var7 = var8.set;
                            var6 = {};
                            var9 = var8.get;
                            var13 = var9.bind(var8)();
                            var14 = var6;
                            var9 = copyDataProperties(var14, var13);
                            var10 = false;
                            var9 = 'requiresPop';
                            var6[var9] = var10;
                            var6 = var7.bind(var8)(var6);
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 14;
                            var6 = var10[var6];
                            var8 = undefined;
                            var12 = var9.bind(var8)(var6);
                            var11 = var12.runOnJS;
                            var6 = 21;
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
                            _fun0018_ip = 600; continue _fun0018;
 588:
                            var3 = _closure1_slot20;
                            var3 = var4 * var3;
                            var5 = var4 - var3;
 600:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 19;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = _closure3_slot19;
                            var1 = {};
                            var1['y'] = var5;
                            var5 = 0;
                            var1['x'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
 644:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var14 = {};
                    var14['gestureState'] = var9;
                    var14['mode'] = var23;
                    var25 = _closure1_slot15;
                    var14['VoicePanelModes'] = var25;
                    var14['connected'] = var19;
                    var14['lockScrolling'] = var16;
                    var14['scrollPosition'] = var24;
                    var24 = _closure1_slot20;
                    var14['POP_RESISTANCE'] = var24;
                    var24 = 180;
                    var14['PIP_POP_HEIGHT'] = var24;
                    var24 = var13[var17];
                    var24 = var18.bind(var12)(var24);
                    var24 = var24.runOnJS;
                    var14['runOnJS'] = var24;
                    var24 = 21;
                    var25 = var13[var24];
                    var25 = var18.bind(var12)(var25);
                    var25 = var25.triggerHapticFeedback;
                    var14['triggerHapticFeedback'] = var25;
                    var24 = var13[var24];
                    var24 = var18.bind(var12)(var24);
                    var24 = var24.HapticFeedbackTypes;
                    var14['HapticFeedbackTypes'] = var24;
                    var24 = var13[var10];
                    var24 = var11.bind(var12)(var24);
                    var14['updateSharedValueIfChanged'] = var24;
                    var14['wrapperOffset'] = var20;
                    var5['__closure'] = var14;
                    var14 = 2084376677229.0;
                    var5['__workletHash'] = var14;
                    var14 = _closure1_slot41;
                    var5['__initData'] = var14;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.onTouchesCancelled;
                    var5 = function s() {
                        var3 = _closure3_slot22;
                        var1 = var3.set;
                        var5 = false;
                        var1 = var1.bind(var3)(var5);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 19;
                        var7 = var6[var3];
                        var1 = undefined;
                        var9 = var4.bind(var1)(var7);
                        var8 = _closure3_slot28;
                        var7 = {'cancel': false, 'active': false};
                        var7 = var9.bind(var1)(var8, var7);
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = _closure3_slot19;
                        var2 = {};
                        var2['gestureActive'] = var5;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var14 = {};
                    var14['lockScrolling'] = var16;
                    var24 = var13[var10];
                    var24 = var11.bind(var12)(var24);
                    var14['updateSharedValueIfChanged'] = var24;
                    var14['gestureState'] = var9;
                    var14['wrapperOffset'] = var20;
                    var5['__closure'] = var14;
                    var14 = 8529626440714.0;
                    var5['__workletHash'] = var14;
                    var14 = _closure1_slot40;
                    var5['__initData'] = var14;
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.onEnd;
                    var5 = function n(arg1) {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                            var2 = arg1;
                            var4 = _closure3_slot28;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var3 = var3.cancel;
                            if(var3) { _fun0019_ip = 769; continue _fun0019 }
 31:
                            var11 = var2.velocityX;
                            var10 = var2.velocityY;
                            var9 = var2.absoluteX;
                            var8 = var2.absoluteY;
                            var3 = _closure3_slot13;
                            var2 = var3.get;
                            var4 = var2.bind(var3)();
                            var3 = _closure1_slot15;
                            var3 = var3.PIP;
                            if(!(var4 !== var3)) { _fun0019_ip = 600; continue _fun0019 }
 88:
                            var4 = _closure3_slot13;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = _closure1_slot15;
                            var3 = var3.PANEL;
                            if(!(var4 === var3)) { _fun0019_ip = 769; continue _fun0019 }
 118:
                            var3 = 0;
                            if(!(!(var10 > var3))) { _fun0019_ip = 187; continue _fun0019 }
 124:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 19;
                            var3 = var5[var3];
                            var7 = undefined;
                            var6 = var4.bind(var7)(var3);
                            var4 = _closure3_slot19;
                            var5 = false;
                            var3 = {'gestureActive': false, 'x': 0, 'y': 0};
                            var3 = var6.bind(var7)(var4, var3);
                            var4 = _closure3_slot22;
                            var3 = var4.set;
                            var3 = var3.bind(var4)(var5);
                            _fun0019_ip = 769; continue _fun0019;
 187:
                            var4 = _closure3_slot6;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            if(var3) { _fun0019_ip = 423; continue _fun0019 }
 206:
                            var5 = _closure3_slot18;
                            var3 = var5.get;
                            var3 = var3.bind(var5)();
                            var4 = var3.drawerHeight;
                            var3 = var5.get;
                            var3 = var3.bind(var5)();
                            var3 = var3.drawerY;
                            var5 = var4 - var3;
                            var4 = _closure3_slot19;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var4 = var3.y;
                            var3 = 0.2;
                            var3 = var3 * var5;
                            if(!(!(var4 > var3))) { _fun0019_ip = 343; continue _fun0019 }
 280:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 19;
                            var3 = var5[var3];
                            var7 = undefined;
                            var6 = var4.bind(var7)(var3);
                            var4 = _closure3_slot19;
                            var5 = false;
                            var3 = {'gestureActive': false, 'x': 0, 'y': 0};
                            var3 = var6.bind(var7)(var4, var3);
                            var4 = _closure3_slot22;
                            var3 = var4.set;
                            var3 = var3.bind(var4)(var5);
                            _fun0019_ip = 769; continue _fun0019;
 343:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 19;
                            var3 = var6[var3];
                            var4 = undefined;
                            var7 = var5.bind(var4)(var3);
                            var5 = _closure3_slot19;
                            var3 = {};
                            var12 = false;
                            var3['gestureActive'] = var12;
                            var3 = var7.bind(var4)(var5, var3);
                            var5 = _closure1_slot0;
                            var3 = 14;
                            var3 = var6[var3];
                            var6 = var5.bind(var4)(var3);
                            var5 = var6.runOnJS;
                            var3 = _closure3_slot8;
                            var3 = var5.bind(var6)(var3);
                            var3 = var3.bind(var4)();
                            _fun0019_ip = 769; continue _fun0019;
 423:
                            var4 = _closure3_slot28;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var3 = var3.requiresPop;
                            if(var3) { _fun0019_ip = 537; continue _fun0019 }
 445:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 14;
                            var3 = var5[var3];
                            var6 = undefined;
                            var7 = var4.bind(var6)(var3);
                            var4 = var7.runOnJS;
                            var3 = _closure3_slot15;
                            var4 = var4.bind(var7)(var3);
                            var3 = _closure1_slot15;
                            var3 = var3.PIP;
                            var3 = var4.bind(var6)(var3);
                            var4 = _closure1_slot1;
                            var3 = 19;
                            var3 = var5[var3];
                            var5 = var4.bind(var6)(var3);
                            var4 = _closure3_slot19;
                            var3 = {'gestureActive': false, 'x': 0, 'y': 0};
                            var3 = var5.bind(var6)(var4, var3);
                            _fun0019_ip = 769; continue _fun0019;
 537:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 19;
                            var3 = var5[var3];
                            var7 = undefined;
                            var6 = var4.bind(var7)(var3);
                            var4 = _closure3_slot19;
                            var5 = false;
                            var3 = {'gestureActive': false, 'x': 0, 'y': 0};
                            var3 = var6.bind(var7)(var4, var3);
                            var4 = _closure3_slot22;
                            var3 = var4.set;
                            var3 = var3.bind(var4)(var5);
                            _fun0019_ip = 769; continue _fun0019;
 600:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 22;
                            var3 = var5[var3];
                            var4 = undefined;
                            var7 = var6.bind(var4)(var3);
                            var6 = var7.calculatePIPPositionFromVelocity;
                            var3 = {};
                            var3['velocityX'] = var11;
                            var3['velocityY'] = var10;
                            var3['absoluteX'] = var9;
                            var3['absoluteY'] = var8;
                            var9 = _closure3_slot17;
                            var8 = var9.get;
                            var8 = var8.bind(var9)();
                            var3['windowDimensions'] = var8;
                            var9 = _closure3_slot14;
                            var8 = var9.get;
                            var8 = var8.bind(var9)();
                            var3['safeArea'] = var8;
                            var3 = var6.bind(var7)(var3);
                            var10 = var3.pipX;
                            var9 = var3.pipY;
                            var3 = _closure1_slot1;
                            var2 = 19;
                            var6 = var5[var2];
                            var8 = var3.bind(var4)(var6);
                            var7 = _closure3_slot18;
                            var6 = {};
                            var6['pipX'] = var10;
                            var6['pipY'] = var9;
                            var6 = var8.bind(var4)(var7, var6);
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = _closure3_slot19;
                            var1 = {};
                            var5 = false;
                            var1['gestureActive'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
 769:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var14 = {};
                    var14['gestureState'] = var9;
                    var14['mode'] = var23;
                    var23 = _closure1_slot15;
                    var14['VoicePanelModes'] = var23;
                    var23 = 22;
                    var23 = var13[var23];
                    var23 = var18.bind(var12)(var23);
                    var23 = var23.calculatePIPPositionFromVelocity;
                    var14['calculatePIPPositionFromVelocity'] = var23;
                    var14['windowDimensions'] = var22;
                    var14['safeArea'] = var21;
                    var21 = var13[var10];
                    var21 = var11.bind(var12)(var21);
                    var14['updateSharedValueIfChanged'] = var21;
                    var21 = _closure3_slot18;
                    var14['wrapperDimensions'] = var21;
                    var14['wrapperOffset'] = var20;
                    var14['connected'] = var19;
                    var17 = var13[var17];
                    var17 = var18.bind(var12)(var17);
                    var17 = var17.runOnJS;
                    var14['runOnJS'] = var17;
                    var17 = _closure3_slot15;
                    var14['setMode'] = var17;
                    var14['lockScrolling'] = var16;
                    var16 = 0.2;
                    var14['MIN_DISMISS_MOVE_PERCENTAGE'] = var16;
                    var15 = _closure3_slot8;
                    var14['dismissPanel'] = var15;
                    var5['__closure'] = var14;
                    var14 = 10532794222556.0;
                    var5['__workletHash'] = var14;
                    var14 = _closure1_slot39;
                    var5['__initData'] = var14;
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.onFinalize;
                    var1 = function t() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = _closure3_slot28;
                        var2 = {'cancel': false, 'active': false};
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var8 = {};
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var8['updateSharedValueIfChanged'] = var10;
                    var8['gestureState'] = var9;
                    var1['__closure'] = var8;
                    var8 = 141147937726.0;
                    var1['__workletHash'] = var8;
                    var7 = _closure1_slot38;
                    var1['__initData'] = var7;
                    var1 = var5.bind(var6)(var1);
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var12 = var8.bind(var12)(var6, var7);
                var6 = var20[var2];
                var8 = var13.bind(var15)(var6);
                var7 = var8.useAnimatedScrollHandler;
                var6 = {};
                var21 = function ve(arg1) {
                    var4 = _closure3_slot0;
                    var3 = var4.set;
                    var2 = arg1;
                    var2 = var2.contentOffset;
                    var2 = var2.y;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure3_slot1;
                    var2 = var3.set;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var22 = {};
                var22['scrollPosition'] = var27;
                var22['dragScrolling'] = var28;
                var21['__closure'] = var22;
                var22 = 57033362164.0;
                var21['__workletHash'] = var22;
                var22 = _closure1_slot45;
                var21['__initData'] = var22;
                var6['onBeginDrag'] = var21;
                var21 = function Oe() {
                    var3 = _closure3_slot1;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var22 = {};
                var22['dragScrolling'] = var28;
                var21['__closure'] = var22;
                var22 = 14366146937201.0;
                var21['__workletHash'] = var22;
                var22 = _closure1_slot46;
                var21['__initData'] = var22;
                var6['onEndDrag'] = var21;
                var21 = function Ie() {
                    var3 = _closure3_slot1;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var22 = {};
                var22['dragScrolling'] = var28;
                var21['__closure'] = var22;
                var22 = 12919609750790.0;
                var21['__workletHash'] = var22;
                var22 = _closure1_slot47;
                var21['__initData'] = var22;
                var6['onMomentumEnd'] = var21;
                var21 = function me(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var2 = arg1;
                        var4 = _closure3_slot22;
                        var3 = var4.get;
                        var4 = var3.bind(var4)();
                        var5 = _closure3_slot0;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        if(var4) { _fun0020_ip = 187; continue _fun0020 }
 38:
                        var4 = var2.contentOffset;
                        var4 = var4.y;
                        var7 = undefined;
                        var6 = undefined;
                        if(!(var3 !== var4)) { _fun0020_ip = 115; continue _fun0020 }
 57:
                        var9 = _closure1_slot30;
                        var5 = _closure3_slot0;
                        var4 = var5.get;
                        var8 = var4.bind(var5)();
                        var5 = _closure3_slot17;
                        var4 = var5.get;
                        var4 = var4.bind(var5)();
                        var5 = var4.height;
                        var10 = _closure3_slot21;
                        var4 = var10.get;
                        var4 = var4.bind(var10)();
                        var6 = var9.bind(var7)(var8, var5, var4);
 115:
                        var8 = _closure3_slot0;
                        var5 = var8.set;
                        var4 = var2.contentOffset;
                        var4 = var4.y;
                        var4 = var5.bind(var8)(var4);
                        var4 = null;
                        if(!(var4 != var6)) { _fun0020_ip = 317; continue _fun0020 }
 149:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 19;
                        var4 = var8[var4];
                        var5 = var5.bind(var7)(var4);
                        var4 = _closure3_slot23;
                        var4 = var5.bind(var7)(var4, var6);
                        _fun0020_ip = 317; continue _fun0020;
 187:
                        var6 = 0;
                        if(!(var3 < var6)) { _fun0020_ip = 207; continue _fun0020 }
 193:
                        var4 = _closure3_slot0;
                        var3 = var4.set;
                        var3 = var3.bind(var4)(var6);
 207:
                        var4 = _closure3_slot0;
                        var3 = var4.get;
                        var5 = var3.bind(var4)();
                        var3 = global;
                        var4 = var3.Math;
                        var3 = var4.abs;
                        var2 = var2.contentOffset;
                        var2 = var2.y;
                        var2 = var2 - var5;
                        var3 = var3.bind(var4)(var2);
                        var2 = 0.1;
                        if(!(!(var3 < var2))) { _fun0020_ip = 321; continue _fun0020 }
 268:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 14;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.scrollTo;
                        var14 = _closure3_slot27;
                        var11 = false;
                        var15 = var4;
                        var13 = 0;
                        var12 = var5;
                        var1 = var15[var3](var14, var13, var12, var11, var10);
 317:
                        var1 = undefined;
                        return var1;
 321:
                        var1 = undefined;
                        return var1;
                    }
                };
                var22 = {};
                var22['lockScrolling'] = var24;
                var22['scrollPosition'] = var27;
                var27 = var20[var2];
                var27 = var13.bind(var15)(var27);
                var27 = var27.scrollTo;
                var22['scrollTo'] = var27;
                var22['scrollerRef'] = var11;
                var27 = _closure1_slot30;
                var22['computeViewableChunksFromScrollPosition'] = var27;
                var22['windowDimensions'] = var16;
                var22['scrollableRegionSize'] = var4;
                var27 = 19;
                var27 = var20[var27];
                var27 = var25.bind(var15)(var27);
                var22['updateSharedValueIfChanged'] = var27;
                var22['viewableChunks'] = var9;
                var21['__closure'] = var22;
                var22 = 12272614511406.0;
                var21['__workletHash'] = var22;
                var22 = _closure1_slot48;
                var21['__initData'] = var22;
                var6['onScroll'] = var21;
                var8 = var7.bind(var8)(var6);
                var6 = var20[var2];
                var22 = var13.bind(var15)(var6);
                var21 = var22.useAnimatedReaction;
                var7 = function Ae() {
                    var2 = _closure3_slot13;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var6 = {};
                var6['mode'] = var19;
                var7['__closure'] = var6;
                var6 = 9335671323831.0;
                var7['__workletHash'] = var6;
                var6 = _closure1_slot49;
                var7['__initData'] = var6;
                var6 = function Ve(arg1, arg2) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                        var2 = arg1;
                        var4 = arg2;
                        var1 = null;
                        var1 = var1 != var4;
                        if(!var1) { _fun0021_ip = 19; continue _fun0021 }
 15:
                        var1 = var2 !== var4;
 19:
                        if(!var1) { _fun0021_ip = 107; continue _fun0021 }
 22:
                        var3 = _closure1_slot15;
                        var3 = var3.PANEL;
                        if(!(var2 === var3)) { _fun0021_ip = 53; continue _fun0021 }
 39:
                        var3 = _closure1_slot15;
                        var3 = var3.PIP;
                        if(!(var4 !== var3)) { _fun0021_ip = 88; continue _fun0021 }
 53:
                        var1 = _closure1_slot15;
                        var1 = var1.PIP;
                        if(!(var2 === var1)) { _fun0021_ip = 107; continue _fun0021 }
 67:
                        var3 = _closure3_slot22;
                        var2 = var3.set;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
                        _fun0021_ip = 107; continue _fun0021;
 88:
                        var3 = _closure3_slot22;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
 107:
                        var1 = undefined;
                        return var1;
                    }
                };
                var27 = {};
                var28 = _closure1_slot15;
                var27['VoicePanelModes'] = var28;
                var27['lockScrolling'] = var24;
                var6['__closure'] = var27;
                var27 = 15902278985136.0;
                var6['__workletHash'] = var27;
                var27 = _closure1_slot50;
                var6['__initData'] = var27;
                var6 = var21.bind(var22)(var7, var6);
                var6 = var20[var2];
                var21 = var13.bind(var15)(var6);
                var7 = var21.useAnimatedProps;
                var6 = function Ce() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var2 = _closure3_slot13;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = _closure1_slot15;
                        var1 = var1.PIP;
                        var6 = var2 === var1;
                        var2 = var6;
                        if(var2) { _fun0022_ip = 58; continue _fun0022 }
 39:
                        var5 = _closure3_slot10;
                        var1 = var5.get;
                        var5 = var1.bind(var5)();
                        var1 = null;
                        var2 = var1 != var5;
 58:
                        var1 = {};
                        var5 = 'auto';
                        if(!var6) { _fun0022_ip = 71; continue _fun0022 }
 67:
                        var5 = 'none';
 71:
                        var1['pointerEvents'] = var5;
                        var5 = !var2;
                        var1['scrollEnabled'] = var5;
                        var6 = _closure3_slot22;
                        var2 = var6.get;
                        var2 = var2.bind(var6)();
                        var2 = !var2;
                        if(!var2) { _fun0022_ip = 106; continue _fun0022 }
 103:
                        var2 = var5;
 106:
                        var1['showsVerticalScrollIndicator'] = var2;
                        var2 = {};
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 23;
                        var4 = var6[var4];
                        var6 = undefined;
                        var5 = var5.bind(var6)(var4);
                        var4 = _closure3_slot14;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var5.bind(var6)(var3);
                        var5 = var3.height;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.top;
                        var3 = var5 - var3;
                        var2['top'] = var3;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.bottom;
                        var2['bottom'] = var3;
                        var1['scrollIndicatorInsets'] = var2;
                        return var1;
                    }
                };
                var22 = {};
                var22['mode'] = var19;
                var27 = _closure1_slot15;
                var22['VoicePanelModes'] = var27;
                var22['focused'] = var26;
                var22['lockScrolling'] = var24;
                var24 = 23;
                var24 = var20[var24];
                var24 = var25.bind(var15)(var24);
                var22['calculateVoicePanelHeaderSpecs'] = var24;
                var22['safeArea'] = var23;
                var6['__closure'] = var22;
                var22 = 11925957642441.0;
                var6['__workletHash'] = var22;
                var22 = _closure1_slot51;
                var6['__initData'] = var22;
                var7 = var7.bind(var21)(var6);
                var23 = _closure1_slot4;
                var22 = var23.useCallback;
                var21 = new Array(1);
                var21[0] = var4;
                var6 = function(arg1, arg2) {
                    var3 = _closure3_slot21;
                    var2 = var3.set;
                    var1 = arg2;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = var22.bind(var23)(var6, var21);
                var2 = var20[var2];
                var13 = var13.bind(var15)(var2);
                var2 = var13.useDerivedValue;
                var1 = function be() {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                        var3 = _closure3_slot13;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var4 = _closure1_slot15;
                        var4 = var4.PIP;
                        if(!(var4 !== var3)) { _fun0023_ip = 255; continue _fun0023 }
 36:
                        var1 = _closure1_slot15;
                        var1 = var1.DISMISSED;
                        if(!(var1 !== var3)) { _fun0023_ip = 255; continue _fun0023 }
 53:
                        var3 = _closure3_slot6;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0023_ip = 116; continue _fun0023 }
 69:
                        var3 = _closure3_slot28;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var1 = var1.active;
                        if(!var1) { _fun0023_ip = 116; continue _fun0023 }
 91:
                        var3 = _closure3_slot28;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var1 = var1.requiresPop;
                        if(var1) { _fun0023_ip = 250; continue _fun0023 }
 116:
                        var3 = _closure3_slot18;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var3 = var1.drawerY;
                        var4 = _closure3_slot19;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var4 = var1.gestureActive;
                        var6 = 0;
                        var1 = 0;
                        if(!var4) { _fun0023_ip = 179; continue _fun0023 }
 161:
                        var5 = _closure3_slot19;
                        var4 = var5.get;
                        var4 = var4.bind(var5)();
                        var1 = var4.y;
 179:
                        var1 = var3 + var1;
                        var3 = _closure3_slot17;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var7 = var2.height;
                        var2 = global;
                        var4 = var2.Math;
                        var3 = var4.min;
                        var5 = var2.Math;
                        var2 = var5.max;
                        var1 = var7 - var1;
                        var1 = var1 / var7;
                        var2 = var2.bind(var5)(var1, var6);
                        var1 = 1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
 250:
                        var1 = 1;
                        return var1;
 255:
                        var1 = 0;
                        return var1;
                    }
                };
                var15 = {};
                var15['mode'] = var19;
                var19 = _closure1_slot15;
                var15['VoicePanelModes'] = var19;
                var15['connected'] = var18;
                var15['gestureState'] = var3;
                var15['wrapperDimensions'] = var17;
                var15['wrapperOffset'] = var5;
                var15['windowDimensions'] = var16;
                var1['__closure'] = var15;
                var15 = 7328947258749.0;
                var1['__workletHash'] = var15;
                var14 = _closure1_slot52;
                var1['__initData'] = var14;
                var2 = var2.bind(var13)(var1);
                var1 = {};
                var1['gesture'] = var12;
                var1['scrollerRef'] = var11;
                var1['scrollNativeGesture'] = var10;
                var1['viewableChunks'] = var9;
                var1['handleScroll'] = var8;
                var1['scrollViewProps'] = var7;
                var1['onContentSizeChange'] = var6;
                var1['wrapperOffset'] = var5;
                var1['scrollableRegionSize'] = var4;
                var1['gestureState'] = var3;
                var1['opacity'] = var2;
                return var1;
            };
            var4 = var4.bind(var5)(var9);
            var23 = var4.gesture;
            var19 = var4.gestureState;
            var35 = var4.handleScroll;
            var32 = var4.onContentSizeChange;
            var33 = var4.scrollViewProps;
            var36 = var4.scrollerRef;
            var30 = var4.scrollNativeGesture;
            var34 = var4.viewableChunks;
            var26 = var4.wrapperOffset;
            var20 = var4.opacity;
            var4 = 34;
            var4 = var8[var4];
            var4 = var7.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var _closure2_slot3 = var4;
            var9 = _closure1_slot4;
            var8 = var9.useEffect;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var2 = _closure2_slot3;
                var1 = var2.lock;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var4 = var8.bind(var9)(var4, var7);
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var4 = function() {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = new Array(0);
            var1 = var7.bind(var8)(var4, var1);
            var1 = null;
            if(!var3) { _fun0008_ip = 1236; continue _fun0008 }
 487:
            var4 = _closure1_slot21;
            var27 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = var16[var2];
            var2 = var27.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var8 = _closure1_slot22;
            var18 = 35;
            var6 = var16[var18];
            var6 = var27.bind(var5)(var6);
            var7 = var6.LayerScope;
            var6 = {};
            var11 = _closure1_slot21;
            var14 = _closure1_slot1;
            var9 = 36;
            var9 = var16[var9];
            var10 = var14.bind(var5)(var9);
            var9 = {};
            var10 = var11.bind(var5)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot21;
            var11 = _closure1_slot62;
            var10 = {};
            var10['opacity'] = var20;
            var10['onPress'] = var15;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var10 = 37;
            var10 = var16[var10];
            var11 = var14.bind(var5)(var10);
            var10 = {};
            var12 = var31.accessibilityView;
            var10['style'] = var12;
            var12 = global;
            var12 = var12.HermesInternal;
            var15 = var12.concat;
            var12 = 'voice-panel-ui-';
            var12 = var15.bind(var12)(var17);
            var10['nativeID'] = var12;
            var12 = true;
            var10['accessibilityViewIsModal'] = var12;
            var12 = _closure1_slot24;
            var10['layout'] = var12;
            var12 = 38;
            var12 = var16[var12];
            var12 = var14.bind(var5)(var12);
            var10['onAccessibilityEscape'] = var12;
            var17 = _closure1_slot21;
            var12 = 39;
            var12 = var16[var12];
            var15 = var14.bind(var5)(var12);
            var12 = {};
            var15 = var17.bind(var5)(var15, var12);
            var12 = new Array(4);
            var12[0] = var15;
            var17 = _closure1_slot64;
            var15 = {};
            var15['wrapperOffset'] = var26;
            var21 = _closure1_slot21;
            var18 = var16[var18];
            var18 = var27.bind(var5)(var18);
            var20 = var18.LayerScope;
            var18 = {};
            var18['zIndex'] = var22;
            var25 = _closure1_slot21;
            var22 = 40;
            var22 = var16[var22];
            var24 = var14.bind(var5)(var22);
            var22 = {};
            var22['wrapperOffset'] = var26;
            var22['gestureState'] = var19;
            var26 = _closure1_slot24;
            var22['layout'] = var26;
            var22 = var25.bind(var5)(var24, var22);
            var18['children'] = var22;
            var20 = var21.bind(var5)(var20, var18);
            var18 = new Array(2);
            var18[0] = var20;
            var22 = _closure1_slot21;
            var26 = 17;
            var20 = var16[var26];
            var20 = var27.bind(var5)(var20);
            var21 = var20.GestureDetector;
            var20 = {};
            var20['gesture'] = var23;
            var29 = _closure1_slot65;
            var20['discordOnErrorHandler'] = var29;
            var25 = _closure1_slot21;
            var23 = 28;
            var23 = var16[var23];
            var24 = var14.bind(var5)(var23);
            var23 = {};
            var37 = _closure1_slot5;
            var37 = var37.absoluteFill;
            var23['style'] = var37;
            var37 = _closure1_slot24;
            var23['layout'] = var37;
            var23['collapsable'] = var28;
            var28 = _closure1_slot21;
            var26 = var16[var26];
            var26 = var27.bind(var5)(var26);
            var27 = var26.GestureDetector;
            var26 = {};
            var26['gesture'] = var30;
            var26['discordOnErrorHandler'] = var29;
            var30 = _closure1_slot32;
            var29 = {};
            var37 = _closure1_slot27;
            var29['layout'] = var37;
            var29['ref'] = var36;
            var29['onScroll'] = var35;
            var35 = _closure1_slot63;
            var29['onMomentumScrollEnd'] = var35;
            var29['animatedProps'] = var33;
            var33 = var31.scrollView;
            var29['style'] = var33;
            var29['onContentSizeChange'] = var32;
            var31 = var31.scrollViewContent;
            var29['contentContainerStyle'] = var31;
            var31 = 8.333333333333334;
            var29['scrollEventThrottle'] = var31;
            var33 = _closure1_slot21;
            var31 = 41;
            var31 = var16[var31];
            var32 = var14.bind(var5)(var31);
            var31 = {};
            var31['viewableChunks'] = var34;
            var32 = var33.bind(var5)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var34 = _closure1_slot21;
            var32 = 42;
            var32 = var16[var32];
            var33 = var14.bind(var5)(var32);
            var32 = {};
            var32 = var34.bind(var5)(var33, var32);
            var31[1] = var32;
            var29['children'] = var31;
            var29 = var8.bind(var5)(var30, var29);
            var26['children'] = var29;
            var26 = var28.bind(var5)(var27, var26);
            var23['children'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var20['children'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var18[1] = var20;
            var15['children'] = var18;
            var15 = var8.bind(var5)(var17, var15);
            var12[1] = var15;
            var18 = _closure1_slot21;
            var15 = 43;
            var15 = var16[var15];
            var17 = var14.bind(var5)(var15);
            var15 = {};
            var15['gestureState'] = var19;
            var15 = var18.bind(var5)(var17, var15);
            var12[2] = var15;
            var15 = _closure1_slot21;
            var13 = 44;
            var13 = var16[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13 = var15.bind(var5)(var14, var13);
            var12[3] = var13;
            var10['children'] = var12;
            var10 = var8.bind(var5)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1236:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 45;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/VoicePanelUI.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['REDUCED_MOTION_OPACITY_PHYSICS'] = var2;
    return var1;
})();