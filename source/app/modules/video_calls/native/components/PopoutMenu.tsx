// app/modules/video_calls/native/components/PopoutMenu.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function PopoutMenuRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var13 = var2.icon;
            var10 = var2.text;
            var9 = var2.onClick;
            var _closure2_slot0 = var9;
            var8 = var2.onClose;
            var _closure2_slot1 = var8;
            var2 = _closure1_slot9;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                    var4 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
 23:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0002_ip = 41; continue _fun0002 }
 31:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = null;
            var9 = var8 != var13;
            if(!var9) { _fun0001_ip = 151; continue _fun0001 }
 115:
            var12 = _closure1_slot6;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 7;
            var9 = var14[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var9['source'] = var13;
            var8 = var12.bind(var4)(var11, var9);
 151:
            var1['leading'] = var8;
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 8;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.FormLabel;
            var7 = {};
            var11 = var6.popoutMenuRowLabel;
            var7['style'] = var11;
            var7['text'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var1['label'] = var7;
            var6 = var6.popoutMenuRow;
            var1['style'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var11 = 1;
    var7 = var6[var11];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var8 = var4.jsxs;
    var _closure1_slot7 = var8;
    var4 = var4.Fragment;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 'absolute';
    var10['position'] = var12;
    var12 = 5;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var10['borderRadius'] = var12;
    var4['container'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['popoutMenuRow'] = var10;
    var10 = {};
    var11 = '100%';
    var10['width'] = var11;
    var4['popoutMenuRowLabel'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}";
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function PopoutMenuTsx3(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function PopoutMenuTsx4(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = var7.forwardRef;
    var2 = function PopoutMenu(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = var3.disabled;
            var16 = var3.title;
            var26 = var3.trigger;
            var14 = var3.rows;
            var19 = var3.style;
            var1 = var3.onOpen;
            var _closure2_slot0 = var1;
            var3 = var3.onClose;
            var _closure2_slot1 = var3;
            var5 = undefined;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var4 = _closure1_slot9;
            var11 = var4.bind(var5)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var23 = var4.width;
            var _closure2_slot2 = var23;
            var24 = var4.height;
            var _closure2_slot3 = var24;
            var4 = 10;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var25 = var4.bottom;
            var _closure2_slot4 = var25;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var6 = 0;
            var4 = var4.bind(var7)(var6);
            var28 = _closure1_slot3;
            var21 = 2;
            var7 = var28.bind(var5)(var4, var21);
            var4 = var7[var6];
            var20 = 1;
            var7 = var7[var20];
            var _closure2_slot5 = var7;
            var9 = _closure1_slot4;
            var8 = var9.useState;
            var17 = false;
            var8 = var8.bind(var9)(var17);
            var8 = var28.bind(var5)(var8, var21);
            var9 = var8[var6];
            var _closure2_slot6 = var9;
            var10 = var8[var20];
            var _closure2_slot7 = var10;
            var13 = _closure1_slot4;
            var8 = var13.useState;
            var8 = var8.bind(var13)(var17);
            var13 = var28.bind(var5)(var8, var21);
            var8 = var13[var6];
            var _closure2_slot8 = var8;
            var13 = var13[var20];
            var _closure2_slot9 = var13;
            var18 = _closure1_slot4;
            var17 = var18.useRef;
            var13 = null;
            var27 = var17.bind(var18)(var13);
            var _closure2_slot10 = var27;
            var18 = _closure1_slot4;
            var17 = var18.useRef;
            var22 = var17.bind(var18)(var13);
            var _closure2_slot11 = var22;
            var29 = _closure1_slot4;
            var18 = var29.useState;
            var17 = {'top': 0, 'left': 0, 'width': 0, 'height': 0};
            var17 = var18.bind(var29)(var17);
            var18 = var28.bind(var5)(var17, var21);
            var17 = var18[var6];
            var _closure2_slot12 = var17;
            var18 = var18[var20];
            var _closure2_slot13 = var18;
            var30 = _closure1_slot4;
            var29 = var30.useState;
            var18 = {'width': 0, 'height': 0};
            var18 = var29.bind(var30)(var18);
            var18 = var28.bind(var5)(var18, var21);
            var28 = var18[var6];
            var _closure2_slot14 = var28;
            var18 = var18[var20];
            var _closure2_slot15 = var18;
            var29 = _closure1_slot4;
            var21 = var29.useEffect;
            var20 = new Array(1);
            var20[0] = var8;
            var18 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot8;
                    if(!var2) { _fun0004_ip = 40; continue _fun0004 }
 12:
                    var3 = _closure2_slot10;
                    var5 = null;
                    var6 = var5 == var3;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 36; continue _fun0004 }
 27:
                    var6 = _closure2_slot10;
                    var3 = var6.current;
 36:
                    var2 = var5 != var3;
 40:
                    if(!var2) { _fun0004_ip = 113; continue _fun0004 }
 43:
                    var2 = _closure2_slot10;
                    var6 = null;
                    var2 = var6 == var2;
                    var3 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0004_ip = 76; continue _fun0004 }
 60:
                    var4 = _closure2_slot10;
                    var4 = var4.current;
                    var2 = var6 == var4;
                    var5 = var4;
 76:
                    if(var2) { _fun0004_ip = 95; continue _fun0004 }
 79:
                    var4 = var5.measureInWindow;
                    var2 = function(arg1, arg2, arg3, arg4) {
                        var3 = _closure2_slot13;
                        var2 = {};
                        var1 = global;
                        var6 = var1.Math;
                        var5 = var6.max;
                        var4 = arg2;
                        var1 = 0;
                        var1 = var5.bind(var6)(var4, var1);
                        var2['top'] = var1;
                        var1 = arg1;
                        var2['left'] = var1;
                        var1 = arg3;
                        var2['width'] = var1;
                        var1 = arg4;
                        var2['height'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
 95:
                    var2 = global;
                    var2 = var2.setTimeout;
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = _closure2_slot11;
                            var5 = null;
                            var2 = var5 == var1;
                            var1 = undefined;
                            var4 = undefined;
                            if(var2) { _fun0005_ip = 36; continue _fun0005 }
 20:
                            var3 = _closure2_slot11;
                            var3 = var3.current;
                            var2 = var5 == var3;
                            var4 = var3;
 36:
                            if(var2) { _fun0005_ip = 57; continue _fun0005 }
 39:
                            var3 = var4.measureInWindow;
                            var2 = function(arg1, arg2, arg3, arg4) {
                                var3 = _closure2_slot15;
                                var2 = {};
                                var1 = arg3;
                                var2['width'] = var1;
                                var1 = arg4;
                                var2['height'] = var1;
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
 57:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
 113:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var21.bind(var29)(var18, var20);
            var21 = _closure1_slot4;
            var20 = var21.useMemo;
            var18 = new Array(5);
            var18[0] = var28;
            var18[1] = var25;
            var18[2] = var24;
            var18[3] = var23;
            var18[4] = var17;
            var17 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot14;
                    var3 = var2.height;
                    var3 = -var3;
                    var4 = _closure2_slot12;
                    var5 = var4.top;
                    var4 = var4.height;
                    var4 = var5 + var4;
                    var2 = var2.height;
                    var2 = var4 + var2;
                    var4 = 8;
                    var5 = var2 + var4;
                    var2 = _closure2_slot4;
                    var5 = var5 + var2;
                    var2 = _closure2_slot3;
                    if(!(var5 < var2)) { _fun0006_ip = 81; continue _fun0006 }
 65:
                    var2 = _closure2_slot12;
                    var5 = var2.height;
                    var2 = 16;
                    var3 = var5 + var2;
 81:
                    var2 = _closure2_slot12;
                    var5 = var2.left;
                    var2 = _closure2_slot14;
                    var2 = var2.width;
                    var2 = var5 + var2;
                    var4 = var2 + var4;
                    var2 = _closure2_slot2;
                    var4 = var4 > var2;
                    var2 = 0;
                    if(!var4) { _fun0006_ip = 142; continue _fun0006 }
 120:
                    var4 = _closure2_slot12;
                    var4 = var4.width;
                    var1 = _closure2_slot14;
                    var1 = var1.width;
                    var2 = var4 - var1;
 142:
                    var1 = {};
                    var1['top'] = var3;
                    var1['left'] = var2;
                    return var1;
                }
            };
            var17 = var20.bind(var21)(var17, var18);
            var20 = var17.top;
            var21 = var17.left;
            var24 = _closure1_slot4;
            var23 = var24.useImperativeHandle;
            var18 = new Array(1);
            var18[0] = var10;
            var17 = arg2;
            var10 = function() {
                var1 = {};
                var2 = function close() {
                    var3 = _closure2_slot7;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['close'] = var2;
                return var1;
            };
            var10 = var23.bind(var24)(var17, var10, var18);
            var18 = _closure1_slot4;
            var17 = var18.useMemo;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.debounce;
                var2 = function(arg1) {
                    var3 = _closure2_slot5;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = 16;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var17.bind(var18)(var7, var10);
            var _closure2_slot16 = var7;
            var18 = var4 > var6;
            if(!var18) { _fun0003_ip = 557; continue _fun0003 }
 554:
            var18 = !var9;
 557:
            _closure2_slot17 = var18;
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0007_ip = 31; continue _fun0007 }
 10:
                    var2 = _closure2_slot1;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot9;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var6.bind(var7)(var3, var4);
            _closure2_slot18 = var9;
            var17 = _closure1_slot0;
            var10 = _closure1_slot2;
            var23 = 12;
            var3 = var10[var23];
            var6 = var17.bind(var5)(var3);
            var4 = var6.useAnimatedStyle;
            var3 = function te() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 13;
                    var2 = var2[var9];
                    var10 = undefined;
                    var16 = var3.bind(var10)(var2);
                    var15 = var16.withTiming;
                    var3 = _closure2_slot17;
                    var14 = 0;
                    if(!var3) { _fun0008_ip = 47; continue _fun0008 }
 44:
                    var14 = 1;
 47:
                    var13 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var11 = 14;
                    var3 = var4[var11];
                    var3 = var5.bind(var10)(var3);
                    var3 = var3.STANDARD_EASING;
                    var13['easing'] = var3;
                    var7 = 250;
                    var13['duration'] = var7;
                    var12 = function n(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0009_ip = 52; continue _fun0009 }
 6:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot18;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 52:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = {};
                    var17 = 12;
                    var17 = var4[var17];
                    var17 = var5.bind(var10)(var17);
                    var17 = var17.runOnJS;
                    var3['runOnJS'] = var17;
                    var17 = _closure2_slot18;
                    var3['handleClose'] = var17;
                    var12['__closure'] = var3;
                    var3 = 7805688342878.0;
                    var12['__workletHash'] = var3;
                    var3 = _closure1_slot11;
                    var12['__initData'] = var3;
                    var19 = 'respect-motion-settings';
                    var22 = var16;
                    var21 = var14;
                    var20 = var13;
                    var18 = var12;
                    var3 = var22[var15](var21, var20, var19, var18, var17);
                    var1['opacity'] = var3;
                    var3 = {};
                    var4 = var4[var9];
                    var5 = var5.bind(var10)(var4);
                    var4 = var5.withTiming;
                    var2 = _closure2_slot17;
                    var6 = 0;
                    if(!var2) { _fun0008_ip = 215; continue _fun0008 }
 209:
                    var6 = -8;
 215:
                    var2 = {};
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var11];
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.STANDARD_EASING;
                    var2['easing'] = var8;
                    var2['duration'] = var7;
                    var2 = var4.bind(var5)(var6, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var24 = 13;
            var24 = var10[var24];
            var24 = var17.bind(var5)(var24);
            var24 = var24.withTiming;
            var7['withTiming'] = var24;
            var7['animateIn'] = var18;
            var18 = 14;
            var18 = var10[var18];
            var18 = var17.bind(var5)(var18);
            var18 = var18.STANDARD_EASING;
            var7['STANDARD_EASING'] = var18;
            var18 = 250;
            var7['ANIMATION_DURATION'] = var18;
            var10 = var10[var23];
            var10 = var17.bind(var5)(var10);
            var10 = var10.runOnJS;
            var7['runOnJS'] = var10;
            var7['handleClose'] = var9;
            var18 = 8;
            var7['EXTRA_PADDING'] = var18;
            var3['__closure'] = var7;
            var7 = 2727321893876.0;
            var3['__workletHash'] = var7;
            var7 = _closure1_slot10;
            var3['__initData'] = var7;
            var17 = var4.bind(var6)(var3);
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var4 = function() {
                var3 = _closure2_slot7;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var3 = new Array(0);
            var3 = var6.bind(var7)(var4, var3);
            _closure2_slot19 = var3;
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var4 = _closure2_slot7;
                var1 = undefined;
                var3 = false;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 15;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.trigger;
                var3 = 'impactHeavy';
                var3 = var4.bind(var5)(var3);
                var4 = _closure2_slot9;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = var4.bind(var6)(var1, var3);
            _closure2_slot20 = var1;
            var6 = _closure1_slot4;
            var4 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 16;
                var2 = var10[var2];
                var8 = undefined;
                var2 = var9.bind(var8)(var2);
                var3 = var2.Gesture;
                var2 = var3.LongPress;
                var5 = var2.bind(var3)();
                var3 = var5.onBegin;
                var2 = function t() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot7;
                    var3 = var3.bind(var4)(var2);
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var11 = {};
                var7 = 12;
                var6 = var10[var7];
                var6 = var9.bind(var8)(var6);
                var6 = var6.runOnJS;
                var11['runOnJS'] = var6;
                var12 = _closure2_slot7;
                var11['_setClose'] = var12;
                var2['__closure'] = var11;
                var11 = 15929711498886.0;
                var2['__workletHash'] = var11;
                var11 = _closure1_slot13;
                var2['__initData'] = var11;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onStart;
                var1 = function n() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot20;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var5 = {};
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.runOnJS;
                var5['runOnJS'] = var7;
                var6 = _closure2_slot20;
                var5['handleLongPress'] = var6;
                var1['__closure'] = var5;
                var5 = 1649917173815.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot12;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var4.bind(var6)(var1, var3);
            var1 = var26;
            if(var2) { _fun0003_ip = 1162; continue _fun0003 }
 856:
            var4 = _closure1_slot7;
            var3 = _closure1_slot8;
            var2 = {};
            var9 = _closure1_slot6;
            var7 = _closure1_slot0;
            var24 = _closure1_slot2;
            var6 = 16;
            var6 = var24[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var10;
            var25 = _closure1_slot6;
            var24 = _closure1_slot5;
            var10 = {};
            var10['ref'] = var27;
            var10['children'] = var26;
            var10 = var25.bind(var5)(var24, var10);
            var6['children'] = var10;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(!var8) { _fun0003_ip = 1148; continue _fun0003 }
 953:
            var10 = _closure1_slot7;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var23];
            var8 = var9.bind(var5)(var8);
            var9 = var8.View;
            var8 = {};
            var8['ref'] = var22;
            var22 = var11.container;
            var11 = new Array(4);
            var11[0] = var22;
            var11[1] = var19;
            var19 = {};
            var19['left'] = var21;
            var19['top'] = var20;
            var11[2] = var19;
            var11[3] = var17;
            var8['style'] = var11;
            var11 = function onLayout(arg1) {
                var3 = _closure2_slot16;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8['onLayout'] = var11;
            var11 = var13 != var16;
            var17 = null;
            if(!var11) { _fun0003_ip = 1063; continue _fun0003 }
 1043:
            var20 = _closure1_slot6;
            var19 = _closure1_slot14;
            var11 = {};
            var11['text'] = var16;
            var17 = var20.bind(var5)(var19, var11);
 1063:
            var11 = new Array(3);
            var11[0] = var17;
            var16 = var13 != var16;
            var13 = null;
            if(!var16) { _fun0003_ip = 1115; continue _fun0003 }
 1080:
            var17 = _closure1_slot6;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var18];
            var15 = var16.bind(var5)(var15);
            var16 = var15.FormDivider;
            var15 = {};
            var13 = var17.bind(var5)(var16, var15);
 1115:
            var11[1] = var13;
            var13 = var14.map;
            var12 = function(arg1, arg2) {
                var5 = _closure1_slot6;
                var4 = _closure1_slot14;
                var3 = {};
                var7 = arg1;
                var8 = var3;
                var1 = copyDataProperties(var8, var7);
                var2 = _closure2_slot19;
                var1 = 'onClose';
                var3[var1] = var2;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var12 = var13.bind(var14)(var12);
            var11[2] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 1148:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1162:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/PopoutMenu.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();