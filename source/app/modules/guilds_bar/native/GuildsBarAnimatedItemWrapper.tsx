// app/modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var9;
    var1 = function UnreadIndicatorLA(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.selected;
            var17 = var1.sharedId;
            var _closure2_slot0 = var17;
            var16 = var1.id;
            var _closure2_slot1 = var16;
            var11 = var1.transitionState;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.TransitionStates;
            var11 = var3.MOUNTED;
case 2:
            var _closure2_slot2 = var11;
            var10 = var1.cleanUp;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot13;
            var3 = var3.bind(var4)();
            _closure2_slot4 = var3;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var14 = 6;
            var6 = var6[var14];
            var6 = var7.bind(var4)(var6);
            var6 = var6.TransitionStates;
            var6 = var6.MOUNTED;
            var18 = var11 === var6;
            _closure2_slot5 = var18;
            var12 = 8;
            var8 = var12;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var14];
            var5 = var6.bind(var4)(var5);
            var5 = var5.TransitionStates;
            var5 = var5.YEETED;
            var8 = var12;
            if(!(var11 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var8 = 40;
case 4:
            _closure2_slot6 = var8;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var5 = new Array(3);
            var5[0] = var8;
            var5[1] = var11;
            var3 = var3.unreadIndicator;
            var5[2] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var2 = var1.unreadIndicator;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = _closure2_slot6;
                    var2['height'] = var4;
                    var5 = _closure2_slot6;
                    var4 = 2;
                    var5 = var5 / var4;
                    var4 = -1;
                    var4 = var5 * var4;
                    var2['marginTop'] = var4;
                    var5 = _closure2_slot2;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    var3 = var3.TransitionStates;
                    var4 = var3.YEETED;
                    var3 = 0;
                    if(!(var5 === var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = -4;
case 7:
                    var2['marginLeft'] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var3, var5);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = function _(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot5;
                    if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot1;
                    if(!(var2 === var1)) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                    var1 = {};
                    var2 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 7;
                    var8 = var9[var5];
                    var6 = undefined;
                    var13 = var7.bind(var6)(var8);
                    var12 = var13.withSpring;
                    var11 = var4.targetOriginY;
                    var10 = _closure1_slot12;
                    var8 = 'animate-always';
                    var10 = var12.bind(var13)(var11, var10, var8);
                    var2['originY'] = var10;
                    var10 = var9[var5];
                    var13 = var7.bind(var6)(var10);
                    var12 = var13.withSpring;
                    var11 = var4.targetOriginX;
                    var10 = _closure1_slot12;
                    var10 = var12.bind(var13)(var11, var10, var8);
                    var2['originX'] = var10;
                    var5 = var9[var5];
                    var7 = var7.bind(var6)(var5);
                    var6 = var7.withSpring;
                    var5 = var4.targetHeight;
                    var4 = _closure1_slot12;
                    var4 = var6.bind(var7)(var5, var4, var8);
                    var2['height'] = var4;
                    var1['animations'] = var2;
                    var2 = {'height': 8, 'originY': null, 'originX': 4294967284};
                    var4 = _closure1_slot8;
                    var3 = 2;
                    var4 = var4 / var3;
                    var3 = 4;
                    var3 = var4 - var3;
                    var2['originY'] = var3;
                    var1['initialValues'] = var2;
                    _fun0003_ip = 13; continue _fun0003;
case 9:
                    var2 = {};
                    var3 = {};
                    var2['animations'] = var3;
                    var3 = {};
                    var2['initialValues'] = var3;
                    var1 = var2;
case 13:
                    return var1;
                }
            };
            var3 = {};
            var3['disableEntering'] = var18;
            var3['sharedId'] = var17;
            var3['id'] = var16;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var15 = 7;
            var19 = var8[var15];
            var19 = var13.bind(var4)(var19);
            var19 = var19.withSpring;
            var3['withSpring'] = var19;
            var19 = _closure1_slot12;
            var3['BAR_SPRING_PHYSICS'] = var19;
            var19 = _closure1_slot8;
            var3['WRAPPER_SIZE'] = var19;
            var6['__closure'] = var3;
            var3 = 16330603891282.0;
            var6['__workletHash'] = var3;
            var3 = _closure1_slot14;
            var6['__initData'] = var3;
            var3 = new Array(3);
            var3[0] = var18;
            var3[1] = var17;
            var3[2] = var16;
            var7 = var7.bind(var9)(var6, var3);
            var9 = _closure1_slot3;
            var6 = var9.useCallback;
            var3 = function h(arg1) {
                var3 = arg1;
                var1 = {};
                var2 = {};
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 7;
                var8 = var9[var5];
                var6 = undefined;
                var13 = var7.bind(var6)(var8);
                var12 = var13.withSpring;
                var11 = var3.targetOriginY;
                var10 = _closure1_slot12;
                var8 = 'animate-always';
                var10 = var12.bind(var13)(var11, var10, var8);
                var2['originY'] = var10;
                var10 = var9[var5];
                var13 = var7.bind(var6)(var10);
                var12 = var13.withSpring;
                var11 = var3.targetOriginX;
                var10 = _closure1_slot12;
                var10 = var12.bind(var13)(var11, var10, var8);
                var2['originX'] = var10;
                var5 = var9[var5];
                var7 = var7.bind(var6)(var5);
                var6 = var7.withSpring;
                var5 = var3.targetHeight;
                var4 = _closure1_slot12;
                var4 = var6.bind(var7)(var5, var4, var8);
                var2['height'] = var4;
                var1['animations'] = var2;
                var2 = {};
                var4 = var3.currentHeight;
                var2['height'] = var4;
                var4 = var3.currentOriginY;
                var2['originY'] = var4;
                var3 = var3.currentOriginX;
                var2['originX'] = var3;
                var1['initialValues'] = var2;
                var2 = function callback(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var5 = arg1;
                        var6 = _closure2_slot2;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.TransitionStates;
                        var4 = var4.YEETED;
                        var4 = var6 === var4;
                        if(!var4) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var4 = var5;
case 14:
                        if(!var4) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var6 = _closure2_slot3;
                        var5 = null;
                        var4 = var5 != var6;
case 16:
                        if(!var4) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 8;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot3;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
case 18:
                        return var1;
                    }
                };
                var1['callback'] = var2;
                return var1;
            };
            var2 = {};
            var15 = var8[var15];
            var15 = var13.bind(var4)(var15);
            var15 = var15.withSpring;
            var2['withSpring'] = var15;
            var15 = _closure1_slot12;
            var2['BAR_SPRING_PHYSICS'] = var15;
            var2['transitionState'] = var11;
            var14 = var8[var14];
            var14 = var13.bind(var4)(var14);
            var14 = var14.TransitionStates;
            var2['TransitionStates'] = var14;
            var2['cleanUp'] = var10;
            var12 = var8[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.runOnJS;
            var2['runOnJS'] = var12;
            var3['__closure'] = var2;
            var2 = 10632665703864.0;
            var3['__workletHash'] = var2;
            var2 = _closure1_slot15;
            var3['__initData'] = var2;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var10;
            var6 = var6.bind(var9)(var3, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = false;
            var1['collapsable'] = var8;
            var1['entering'] = var7;
            var1['layout'] = var6;
            var1['style'] = var5;
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function UnreadIndicatorNoLA(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var7 = var1.selected;
            var12 = var1.sharedId;
            var _closure2_slot0 = var12;
            var11 = var1.id;
            var _closure2_slot1 = var11;
            var6 = var1.transitionState;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.TransitionStates;
            var6 = var3.MOUNTED;
case 2:
            var13 = var1.cleanUp;
            var _closure2_slot2 = var13;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot13;
            var5 = var3.bind(var4)();
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 6;
            var10 = var9[var3];
            var10 = var8.bind(var4)(var10);
            var10 = var10.TransitionStates;
            var10 = var10.YEETED;
            var14 = var6 === var10;
            _closure2_slot3 = var14;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.TransitionStates;
            var3 = var3.ENTERED;
            var6 = var6 === var3;
            _closure2_slot4 = var6;
            var15 = 0;
            if(var14) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var3 = 8;
            if(!var7) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var3 = 40;
case 22:
            var15 = var3;
case 20:
            _closure2_slot5 = var15;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 8;
            var7 = var7[var3];
            var8 = var8.bind(var4)(var7);
            var7 = var8.useSharedValue;
            var9 = 0;
            if(var6) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var9 = var15;
case 24:
            var9 = var7.bind(var8)(var9);
            _closure2_slot6 = var9;
            var10 = _closure1_slot3;
            var8 = var10.useRef;
            var7 = true;
            var7 = var8.bind(var10)(var7);
            _closure2_slot7 = var7;
            var10 = _closure1_slot3;
            var8 = var10.useEffect;
            var7 = new Array(7);
            var7[0] = var15;
            var7[1] = var9;
            var7[2] = var14;
            var7[3] = var13;
            var7[4] = var12;
            var7[5] = var11;
            var7[6] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var2 = var2.current;
                    if(!var2) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0006_ip = 28; continue _fun0006 }
case 26:
                    var3 = _closure2_slot7;
                    var2 = false;
                    var3['current'] = var2;
                    var5 = _closure2_slot6;
                    var4 = var5.set;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var2 = 7;
                    var6 = var15[var2];
                    var2 = undefined;
                    var11 = var14.bind(var2)(var6);
                    var10 = var11.withSpring;
                    var9 = _closure2_slot5;
                    var18 = _closure1_slot12;
                    var6 = function n(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = arg1;
                            var2 = _closure2_slot3;
                            if(!var2) { _fun0007_ip = 10; continue _fun0007 }
case 29:
                            var2 = var3;
case 10:
                            if(!var2) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                            var4 = _closure2_slot2;
                            var3 = null;
                            var2 = var3 != var4;
case 30:
                            if(!var2) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 32:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var12 = {};
                    var13 = _closure2_slot3;
                    var12['isYeeted'] = var13;
                    var13 = _closure2_slot2;
                    var12['cleanUp'] = var13;
                    var13 = 8;
                    var13 = var15[var13];
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.runOnJS;
                    var12['runOnJS'] = var13;
                    var6['__closure'] = var12;
                    var12 = 1371040297097.0;
                    var6['__workletHash'] = var12;
                    var3 = _closure1_slot17;
                    var6['__initData'] = var3;
                    var17 = 'animate-always';
                    var20 = var11;
                    var19 = var9;
                    var16 = var6;
                    var3 = var20[var10](var19, var18, var17, var16, var15);
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 28:
                    var3 = _closure2_slot7;
                    var2 = false;
                    var3['current'] = var2;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 8;
                    var3 = var9[var2];
                    var2 = undefined;
                    var4 = var8.bind(var2)(var3);
                    var3 = var4.runOnUI;
                    var1 = function t() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure2_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0008_ip = 34; continue _fun0008 }
case 29:
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = _closure2_slot1;
                            if(!(var3 === var2)) { _fun0008_ip = 35; continue _fun0008 }
case 34:
                            var4 = _closure2_slot6;
                            var3 = var4.set;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 7;
                            var6 = var6[var5];
                            var5 = undefined;
                            var8 = var7.bind(var5)(var6);
                            var7 = var8.withSpring;
                            var6 = _closure2_slot5;
                            var5 = _closure1_slot12;
                            var2 = 'animate-always';
                            var2 = var7.bind(var8)(var6, var5, var2);
                            var2 = var3.bind(var4)(var2);
                            _fun0008_ip = 36; continue _fun0008;
case 35:
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var1 = _closure2_slot5;
                            var1 = var2.bind(var3)(var1);
case 36:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = {};
                    var10 = _closure2_slot0;
                    var6['sharedId'] = var10;
                    var10 = _closure2_slot1;
                    var6['id'] = var10;
                    var10 = _closure2_slot6;
                    var6['height'] = var10;
                    var7 = _closure2_slot5;
                    var6['targetHeight'] = var7;
                    var7 = 7;
                    var7 = var9[var7];
                    var7 = var8.bind(var2)(var7);
                    var7 = var7.withSpring;
                    var6['withSpring'] = var7;
                    var7 = _closure1_slot12;
                    var6['BAR_SPRING_PHYSICS'] = var7;
                    var1['__closure'] = var6;
                    var6 = 8455337407083.0;
                    var1['__workletHash'] = var6;
                    var5 = _closure1_slot16;
                    var1['__initData'] = var5;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var8.bind(var10)(var6, var7);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = var7[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useAnimatedStyle;
            var2 = function T() {
                var2 = _closure2_slot6;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = {};
                var1['height'] = var2;
                var3 = -var2;
                var2 = 2;
                var2 = var3 / var2;
                var1['marginTop'] = var2;
                return var1;
            };
            var8 = {};
            var8['height'] = var9;
            var2['__closure'] = var8;
            var8 = 17253956522958.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot18;
            var2['__initData'] = var8;
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'collapsable': false, 'style': null, 'pointerEvents': 'none'};
            var7 = var5.unreadIndicator;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var4 = function UnreadIndicator(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.AndroidPullModeRenderingExperiment;
            var2 = var3.getCachedConfig;
            var5 = var2.bind(var3)();
            var3 = null;
            var6 = var3 == var5;
            var2 = undefined;
            if(var6) { _fun0009_ip = 37; continue _fun0009 }
case 38:
            var2 = var5.treatmentId;
case 37:
            var3 = var3 != var2;
            var5 = 0;
            if(!var3) { _fun0009_ip = 16; continue _fun0009 }
case 39:
            var5 = var2;
case 16:
            var3 = _closure1_slot9;
            var2 = 3;
            if(!(var2 !== var5)) { _fun0009_ip = 40; continue _fun0009 }
case 41:
            var2 = _closure1_slot21;
            _fun0009_ip = 42; continue _fun0009;
case 40:
            var2 = _closure1_slot22;
case 42:
            var1 = {};
            var7 = arg1;
            var8 = var1;
            var5 = copyDataProperties(var8, var7);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var2 = function renderUnreadIndicator(arg1, arg2, arg3, arg4) {
        var2 = arg2;
        var1 = var2.selected;
        var6 = var2.sharedId;
        var2 = var2.id;
        var5 = _closure1_slot9;
        var4 = _closure1_slot23;
        var3 = {};
        var3['sharedId'] = var6;
        var3['id'] = var2;
        var3['selected'] = var1;
        var1 = arg3;
        var3['transitionState'] = var1;
        var1 = arg4;
        var3['cleanUp'] = var1;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var _closure1_slot24 = var2;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var5);
    var16 = 0;
    var7 = var9[var16];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.IOS_POINTER_STYLE;
    var _closure1_slot4 = var5;
    var14 = 2;
    var5 = var9[var14];
    var5 = var8.bind(var1)(var5);
    var7 = var5.GUILD_ITEM_SIZE;
    var _closure1_slot5 = var7;
    var7 = var5.GUILD_ITEM_SELECTED_BORDER_RADIUS;
    var _closure1_slot6 = var7;
    var7 = var5.GUILD_ITEM_HIT_SLOP;
    var _closure1_slot7 = var7;
    var13 = var5.WRAPPER_SIZE;
    var _closure1_slot8 = var13;
    var5 = 3;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var7 = var5.jsx;
    var _closure1_slot9 = var7;
    var5 = var5.jsxs;
    var _closure1_slot10 = var5;
    var5 = {'mass': 0.8, 'damping': 100, 'stiffness': 150};
    var _closure1_slot11 = var5;
    var5 = {'mass': 0.25, 'damping': 100, 'stiffness': 200};
    var _closure1_slot12 = var5;
    var5 = 4;
    var7 = var9[var5];
    var11 = var8.bind(var1)(var7);
    var10 = var11.createStyles;
    var7 = {};
    var12 = {};
    var12['opacity'] = var16;
    var7['draggedElement'] = var12;
    var12 = {'position': 'relative', 'overflow': 'visible'};
    var7['container'] = var12;
    var12 = {'position': 'absolute', 'top': null, 'left': 4294967292, 'height': 8, 'width': 8};
    var14 = var13 / var14;
    var12['top'] = var14;
    var14 = 5;
    var16 = var9[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var12['borderRadius'] = var16;
    var14 = var9[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_ACTIVE;
    var12['backgroundColor'] = var14;
    var7['unreadIndicator'] = var12;
    var12 = {'position': 'absolute', 'left': null, 'top': 0, 'right': 16, 'height': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var14 = 16;
    var14 = var13 + var14;
    var12['left'] = var14;
    var12['height'] = var13;
    var7['expandedChildrenWrapper'] = var12;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot13 = var7;
    var5 = var9[var5];
    var10 = var8.bind(var1)(var5);
    var7 = var10.createStyles;
    var5 = function() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arguments[0];
            var6 = arguments[1];
            var7 = undefined;
            if(!(var3 === var7)) { _fun0010_ip = 43; continue _fun0010 }
case 44:
            var3 = false;
case 43:
            if(!(var6 === var7)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
            var6 = false;
case 45:
            var1 = {};
            var2 = {'position': 'relative', 'paddingTop': 4, 'paddingBottom': 4, 'paddingLeft': 12};
            var4 = _closure1_slot8;
            var2['height'] = var4;
            var4 = _closure1_slot5;
            var8 = _closure1_slot7;
            var9 = var8.left;
            var9 = var4 + var9;
            var8 = var8.right;
            var8 = var9 + var8;
            var2['width'] = var8;
            var1['pressableWrapper'] = var2;
            var2 = {'position': 'relative', 'width': null, 'height': null, 'overflow': 'hidden', 'justifyContent': 'center', 'alignItems': 'center'};
            var2['width'] = var4;
            var2['height'] = var4;
            var4 = 'transparent';
            var8 = var4;
            if(var6) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 5;
            var9 = var11[var9];
            var9 = var10.bind(var7)(var9);
            var9 = var9.colors;
            var8 = var9.BACKGROUND_SURFACE_HIGH;
case 47:
            var2['backgroundColor'] = var8;
            var1['itemShape'] = var2;
            var2 = {};
            var8 = var4;
            if(var6) { _fun0010_ip = 49; continue _fun0010 }
case 50:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 5;
            var9 = var11[var9];
            var9 = var10.bind(var7)(var9);
            var9 = var9.colors;
            var8 = var9.BACKGROUND_MOD_STRONG;
case 49:
            var2['backgroundColor'] = var8;
            var1['itemShapeThemed'] = var2;
            var2 = {};
            if(var3) { _fun0010_ip = 51; continue _fun0010 }
case 52:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 5;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BRAND;
            _fun0010_ip = 53; continue _fun0010;
case 51:
            if(var6) { _fun0010_ip = 54; continue _fun0010 }
case 55:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 5;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.colors;
            var4 = var5.BACKGROUND_SURFACE_HIGH;
case 54:
            var3 = var4;
case 53:
            var2['backgroundColor'] = var3;
            var1['itemShapeSelected'] = var2;
            return var1;
        }
    };
    var5 = var7.bind(var10)(var5);
    var7 = {};
    var10 = "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,WRAPPER_SIZE}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:WRAPPER_SIZE/2-4,originX:-12}};}";
    var7['code'] = var10;
    var _closure1_slot14 = var7;
    var7 = {};
    var10 = "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}";
    var7['code'] = var10;
    var _closure1_slot15 = var7;
    var7 = {};
    var10 = "function GuildsBarAnimatedItemWrapperTsx3(){const{sharedId,id,height,targetHeight,withSpring,BAR_SPRING_PHYSICS}=this.__closure;if(sharedId!=null&&sharedId.get()!==id){height.set(targetHeight);}else{height.set(withSpring(targetHeight,BAR_SPRING_PHYSICS,'animate-always'));}}";
    var7['code'] = var10;
    var _closure1_slot16 = var7;
    var7 = {};
    var10 = 'function GuildsBarAnimatedItemWrapperTsx4(finished){const{isYeeted,cleanUp,runOnJS}=this.__closure;if(isYeeted&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}';
    var7['code'] = var10;
    var _closure1_slot17 = var7;
    var7 = {};
    var10 = 'function GuildsBarAnimatedItemWrapperTsx5(){const{height}=this.__closure;const h=height.get();return{height:h,marginTop:-(h/2)};}';
    var7['code'] = var10;
    var _closure1_slot18 = var7;
    var7 = {};
    var10 = "function GuildsBarAnimatedItemWrapperTsx6(){const{withSpring,circle,GUILD_ITEM_SELECTED_BORDER_RADIUS,GUILD_ITEM_SIZE,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?GUILD_ITEM_SELECTED_BORDER_RADIUS:GUILD_ITEM_SIZE/2,CORNER_SPRING_PHYSICS,'animate-always')};}";
    var7['code'] = var10;
    var _closure1_slot19 = var7;
    var7 = {};
    var10 = 'function GuildsBarAnimatedItemWrapperTsx7(){const{withSpring,panelX,MIN_OPACITY_REVEAL_WIDTH,MAX_OPACITY_REVEAL_WIDTH,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{opacity:withSpring(Math.max(0,Math.min(1,(panelX.get()-MIN_OPACITY_REVEAL_WIDTH)/MAX_OPACITY_REVEAL_WIDTH)),HOME_DRAWER_FLING_PHYSICS)};}';
    var7['code'] = var10;
    var _closure1_slot20 = var7;
    var7 = 19;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function GuildsBarAnimatedItemWrapper(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var1 = var7.id;
            var _closure2_slot0 = var1;
            var28 = var7.selected;
            var _closure2_slot1 = var28;
            var6 = var7.unread;
            var31 = var7.circle;
            var _closure2_slot2 = var31;
            var22 = var7.children;
            var10 = var7.externalChildren;
            var11 = var7.expandedChildren;
            var15 = var7.config;
            var32 = var7.label;
            var18 = var7.draggable;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0011_ip = 41; continue _fun0011 }
case 56:
            var18 = false;
case 41:
            var23 = var7.cutouts;
            var21 = var7.isDragTarget;
            if(!(var21 === var4)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
            var21 = false;
case 57:
            var _closure2_slot3 = var21;
            var40 = var7.dragState;
            var _closure2_slot4 = var40;
            var3 = var7.isDragPreview;
            if(!(var3 === var4)) { _fun0011_ip = 59; continue _fun0011 }
case 60:
            var3 = false;
case 59:
            var39 = var7.draggedItemSize;
            if(!(var39 === var4)) { _fun0011_ip = 61; continue _fun0011 }
case 62:
            var39 = 0;
case 61:
            var _closure2_slot5 = var39;
            var33 = var7.overState;
            var _closure2_slot6 = var33;
            var27 = var7.styles;
            var _closure2_slot7 = var27;
            var20 = var7.accessibilityActions;
            var19 = var7.onAccessibilityAction;
            var5 = var7.preventClipping;
            if(!(var5 === var4)) { _fun0011_ip = 63; continue _fun0011 }
case 64:
            var5 = false;
case 63:
            var29 = var7.expanded;
            var _closure2_slot8 = var29;
            var13 = var7.entering;
            var9 = var7.exiting;
            var17 = var7.layout;
            var14 = var7.zIndex;
            if(!(var14 === var4)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var14 = 0;
case 65:
            var _closure2_slot9 = var14;
            var16 = var7.sharedId;
            var _closure2_slot10 = var16;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var8 = _closure1_slot13;
            var12 = var8.bind(var4)();
            _closure2_slot11 = var12;
            var24 = _closure1_slot1;
            var36 = _closure1_slot2;
            var8 = 11;
            var8 = var36[var8];
            var8 = var24.bind(var4)(var8);
            var15 = var8.bind(var4)(var15);
            var35 = _closure1_slot0;
            var8 = 8;
            var24 = var36[var8];
            var26 = var35.bind(var4)(var24);
            var25 = var26.useAnimatedStyle;
            var24 = function F() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot2;
                    if(var3) { _fun0012_ip = 67; continue _fun0012 }
case 3:
                    var4 = _closure1_slot6;
                    _fun0012_ip = 68; continue _fun0012;
case 67:
                    var7 = _closure1_slot5;
                    var3 = 2;
                    var4 = var7 / var3;
case 68:
                    var3 = _closure1_slot11;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['borderRadius'] = var2;
                    return var1;
                }
            };
            var30 = {};
            var38 = 7;
            var34 = var36[var38];
            var34 = var35.bind(var4)(var34);
            var34 = var34.withSpring;
            var30['withSpring'] = var34;
            var30['circle'] = var31;
            var31 = _closure1_slot6;
            var30['GUILD_ITEM_SELECTED_BORDER_RADIUS'] = var31;
            var31 = _closure1_slot5;
            var30['GUILD_ITEM_SIZE'] = var31;
            var31 = _closure1_slot11;
            var30['CORNER_SPRING_PHYSICS'] = var31;
            var24['__closure'] = var30;
            var30 = 530931294361.0;
            var24['__workletHash'] = var30;
            var30 = _closure1_slot19;
            var24['__initData'] = var30;
            var25 = var25.bind(var26)(var24);
            var30 = _closure1_slot3;
            var26 = var30.useContext;
            var34 = 12;
            var24 = var36[var34];
            var24 = var35.bind(var4)(var24);
            var24 = var24.HomeDrawerStateContext;
            var24 = var26.bind(var30)(var24);
            var37 = var24.panelX;
            _closure2_slot12 = var37;
            var24 = 13;
            var24 = var36[var24];
            var30 = var35.bind(var4)(var24);
            var26 = var30.useClientThemesOverride;
            var24 = var27.itemShapeThemed;
            var26 = var26.bind(var30)(var24);
            var31 = _closure1_slot3;
            var30 = var31.useMemo;
            var24 = new Array(5);
            var24[0] = var21;
            var24[1] = var40;
            var24[2] = var39;
            var24[3] = var33;
            var24[4] = var14;
            var14 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                    var3 = _closure2_slot4;
                    var1 = 'dragging';
                    if(!(var1 === var3)) { _fun0013_ip = 69; continue _fun0013 }
case 71:
                    var3 = _closure2_slot6;
                    var5 = 'hide';
                    var1 = 'self';
                    if(!(var1 === var3)) { _fun0013_ip = 72; continue _fun0013 }
case 69:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0013_ip = 73; continue _fun0013 }
case 67:
                    var3 = _closure2_slot6;
                    var1 = 'self';
                    if(!(var1 !== var3)) { _fun0013_ip = 73; continue _fun0013 }
case 17:
                    var4 = _closure2_slot4;
                    var1 = 'drag-target';
                    var3 = 'dragging';
                    if(!(var3 !== var4)) { _fun0013_ip = 74; continue _fun0013 }
case 73:
                    var1 = 'none';
case 74:
                    var5 = var1;
case 72:
                    var1 = {};
                    var4 = 'drag-target';
                    if(!(var4 !== var5)) { _fun0013_ip = 75; continue _fun0013 }
case 58:
                    var6 = 'hide';
                    var3 = 0;
                    if(!(var6 !== var5)) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                    var3 = _closure1_slot8;
case 76:
                    _fun0013_ip = 78; continue _fun0013;
case 75:
                    var7 = _closure1_slot8;
                    var6 = _closure2_slot5;
                    var3 = var7 + var6;
case 78:
                    var1['height'] = var3;
                    var3 = 0;
                    if(!(var4 === var5)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
                    var5 = _closure2_slot6;
                    var4 = 'before';
                    if(!(var4 !== var5)) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                    var5 = _closure2_slot6;
                    var4 = 'convert-before';
                    var3 = 0;
                    if(!(var4 === var5)) { _fun0013_ip = 79; continue _fun0013 }
case 81:
                    var3 = _closure2_slot5;
case 79:
                    var1['top'] = var3;
                    var2 = _closure2_slot9;
                    var1['zIndex'] = var2;
                    return var1;
                }
            };
            var33 = var30.bind(var31)(var14, var24);
            var31 = _closure1_slot3;
            var30 = var31.useMemo;
            var14 = var27.pressableWrapper;
            var24 = new Array(3);
            var24[0] = var14;
            var24[1] = var21;
            var14 = var12.draggedElement;
            var24[2] = var14;
            var14 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var2 = var1.pressableWrapper;
                    var1 = new Array(3);
                    var1[0] = var2;
                    var4 = _closure2_slot3;
                    var2 = undefined;
                    if(!var4) { _fun0014_ip = 83; continue _fun0014 }
case 84:
                    var3 = _closure2_slot11;
                    var2 = var3.draggedElement;
case 83:
                    var1[1] = var2;
                    var2 = _closure1_slot4;
                    var1[2] = var2;
                    return var1;
                }
            };
            var31 = var30.bind(var31)(var14, var24);
            var8 = var36[var8];
            var24 = var35.bind(var4)(var8);
            var14 = var24.useAnimatedStyle;
            var8 = function J() {
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var6 = undefined;
                var5 = var7.bind(var6)(var2);
                var4 = var5.withSpring;
                var2 = global;
                var10 = var2.Math;
                var9 = var10.max;
                var12 = var2.Math;
                var11 = var12.min;
                var3 = _closure2_slot12;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 30;
                var13 = var3 - var2;
                var3 = 1;
                var2 = 150;
                var2 = var13 / var2;
                var3 = var11.bind(var12)(var3, var2);
                var2 = 0;
                var3 = var9.bind(var10)(var2, var3);
                var2 = 12;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.HOME_DRAWER_FLING_PHYSICS;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            };
            var30 = {};
            var38 = var36[var38];
            var38 = var35.bind(var4)(var38);
            var38 = var38.withSpring;
            var30['withSpring'] = var38;
            var30['panelX'] = var37;
            var37 = 30;
            var30['MIN_OPACITY_REVEAL_WIDTH'] = var37;
            var37 = 150;
            var30['MAX_OPACITY_REVEAL_WIDTH'] = var37;
            var34 = var36[var34];
            var34 = var35.bind(var4)(var34);
            var34 = var34.HOME_DRAWER_FLING_PHYSICS;
            var30['HOME_DRAWER_FLING_PHYSICS'] = var34;
            var8['__closure'] = var30;
            var30 = 10575718417346.0;
            var8['__workletHash'] = var30;
            var30 = _closure1_slot20;
            var8['__initData'] = var30;
            var14 = var14.bind(var24)(var8);
            var24 = !var6;
            if(!var24) { _fun0011_ip = 85; continue _fun0011 }
case 86:
            var24 = !var28;
case 85:
            if(var24) { _fun0011_ip = 87; continue _fun0011 }
case 88:
            var24 = var21;
case 87:
            if(var24) { _fun0011_ip = 89; continue _fun0011 }
case 90:
            var24 = var3;
case 89:
            _closure2_slot13 = var24;
            var8 = _closure1_slot3;
            var6 = var8.useMemo;
            var3 = new Array(4);
            var3[0] = var24;
            var3[1] = var28;
            var3[2] = var16;
            var3[3] = var1;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot13;
                    if(var1) { _fun0015_ip = 83; continue _fun0015 }
case 70:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var1['selected'] = var3;
                    var3 = _closure2_slot10;
                    var1['sharedId'] = var3;
                    var2 = _closure2_slot0;
                    var1['id'] = var2;
                    return var1;
case 83:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var6.bind(var8)(var1, var3);
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 14;
            var3 = var1[var3];
            var3 = var6.bind(var4)(var3);
            var8 = var3.MobileHomeDrawerExperiment;
            var6 = var8.useConfig;
            var3 = {};
            var16 = 'guilds_bar';
            var3['location'] = var16;
            var3 = var6.bind(var8)(var3);
            var8 = var3.enableHome;
            var6 = _closure1_slot3;
            var3 = var6.useRef;
            var3 = var3.bind(var6)(var4);
            _closure2_slot14 = var3;
            var16 = _closure1_slot3;
            var6 = var16.useEffect;
            var3 = new Array(1);
            var3[0] = var29;
            var2 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot14;
                    var3 = var1.current;
                    var1 = undefined;
                    if(!(var1 === var3)) { _fun0016_ip = 91; continue _fun0016 }
case 46:
                    var4 = _closure2_slot14;
                    var3 = _closure2_slot8;
                    var4['current'] = var3;
                    _fun0016_ip = 92; continue _fun0016;
case 91:
                    var3 = _closure2_slot14;
                    var4 = var3.current;
                    var3 = _closure2_slot8;
                    if(!(var4 !== var3)) { _fun0016_ip = 92; continue _fun0016 }
case 14:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var9 = 15;
                    var4 = var4[var9];
                    var4 = var5.bind(var1)(var4);
                    var6 = var4.intl;
                    var5 = var6.string;
                    var4 = _closure2_slot8;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.t;
                    if(var4) { _fun0016_ip = 93; continue _fun0016 }
case 36:
                    var4 = var7.jsudFd;
                    _fun0016_ip = 61; continue _fun0016;
case 93:
                    var4 = var7.CUnsOR;
case 61:
                    var5 = var5.bind(var6)(var4);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 16;
                    var3 = var6[var3];
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.AccessibilityAnnouncer;
                    var3 = var4.announce;
                    var3 = var3.bind(var4)(var5);
                    var3 = _closure2_slot14;
                    var2 = _closure2_slot8;
                    var3['current'] = var2;
case 92:
                    return var1;
                }
            };
            var2 = var6.bind(var16)(var2, var3);
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var16 = 9;
            var1 = var1[var16];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var34 = null;
            if(!var8) { _fun0011_ip = 94; continue _fun0011 }
case 95:
            var34 = var12.container;
case 94:
            var24 = new Array(2);
            var24[0] = var34;
            var24[1] = var33;
            var1['style'] = var24;
            var1['layout'] = var17;
            var1['entering'] = var13;
            var1['exiting'] = var9;
            var1['preventClipping'] = var5;
            var24 = false;
            var1['collapsable'] = var24;
            var17 = _closure1_slot10;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 17;
            var5 = var13[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var43 = var5;
            var42 = var15;
            var13 = copyDataProperties(var43, var42);
            var13 = 'style';
            var5[var13] = var31;
            var31 = 'accessibilityLabel';
            var5[var31] = var32;
            var32 = true;
            var31 = 'accessible';
            var5[var31] = var32;
            var32 = 'button';
            var31 = 'accessibilityRole';
            var5[var31] = var32;
            var31 = {};
            var31['selected'] = var28;
            var31['expanded'] = var29;
            var29 = 'accessibilityState';
            var5[var29] = var31;
            var31 = _closure1_slot7;
            var29 = 'hitSlop';
            var5[var29] = var31;
            var29 = undefined;
            if(!var18) { _fun0011_ip = 96; continue _fun0011 }
case 97:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var18 = 15;
            var31 = var34[var18];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var18 = var34[var18];
            var18 = var33.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.BGMUFB;
            var29 = var31.bind(var32)(var18);
case 96:
            var18 = 'accessibilityHint';
            var5[var18] = var29;
            var18 = 'collapsable';
            var5[var18] = var24;
            var18 = 'accessibilityActions';
            var5[var18] = var20;
            var18 = 'onAccessibilityAction';
            var5[var18] = var19;
            var18 = new Array(3);
            var18[0] = var10;
            var29 = _closure1_slot9;
            var19 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = 6;
            var10 = var24[var10];
            var10 = var19.bind(var4)(var10);
            var20 = var10.TransitionItem;
            var10 = {};
            var10['item'] = var30;
            var30 = _closure1_slot24;
            var10['renderItem'] = var30;
            var10 = var29.bind(var4)(var20, var10);
            var18[1] = var10;
            var20 = _closure1_slot9;
            var10 = 18;
            var10 = var24[var10];
            var10 = var19.bind(var4)(var10);
            var19 = var10.ClipViewAnimated;
            var10 = {};
            var29 = var27.itemShape;
            var24 = new Array(4);
            var24[0] = var29;
            var24[1] = var26;
            var26 = undefined;
            if(!var28) { _fun0011_ip = 98; continue _fun0011 }
case 99:
            var26 = var27.itemShapeSelected;
case 98:
            var24[2] = var26;
            var24[3] = var25;
            var10['style'] = var24;
            var10['cutouts'] = var23;
            var21 = !var21;
            if(!var21) { _fun0011_ip = 100; continue _fun0011 }
case 101:
            var21 = var22;
case 100:
            var10['children'] = var21;
            var10 = var20.bind(var4)(var19, var10);
            var18[2] = var10;
            var10 = 'children';
            var5[var10] = var18;
            var9 = var17.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = null;
            if(!var8) { _fun0011_ip = 102; continue _fun0011 }
case 103:
            var9 = _closure1_slot9;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var16];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var43 = var7;
            var42 = var15;
            var15 = copyDataProperties(var43, var42);
            var15 = var12.expandedChildrenWrapper;
            var12 = new Array(2);
            var12[0] = var15;
            var12[1] = var14;
            var7[var13] = var12;
            var7[var10] = var11;
            var6 = var9.bind(var4)(var8, var7);
case 102:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['useGuildsBarAnimatedWrapperStyles'] = var5;
    var3['UnreadIndicator'] = var4;
    var3['renderUnreadIndicator'] = var2;
    return var1;
})();