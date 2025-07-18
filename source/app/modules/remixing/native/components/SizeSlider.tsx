// app/modules/remixing/native/components/SizeSlider.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_BRUSH_SIZE;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function SizeSliderTsx1(){const{size}=this.__closure;return size.get();}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function SizeSliderTsx2(currentValue,previousValue){const{runOnJS,setRefSize}=this.__closure;if(currentValue!==previousValue){runOnJS(setRefSize)(currentValue);}}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/SizeSlider.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.size;
            var _closure2_slot0 = var13;
            var23 = var1.color;
            var28 = var1.canvasWidth;
            var2 = var1.drawing;
            var25 = _closure1_slot4;
            var1 = var25.useState;
            var37 = false;
            var1 = var1.bind(var25)(var37);
            var21 = _closure1_slot3;
            var5 = undefined;
            var27 = 2;
            var1 = var21.bind(var5)(var1, var27);
            var19 = 0;
            var34 = var1[var19];
            var _closure2_slot1 = var34;
            var18 = 1;
            var1 = var1[var18];
            var _closure2_slot2 = var1;
            var16 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var1 = var16.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.height;
            var1 = 3;
            var11 = var3 / var1;
            var1 = var25.useState;
            var1 = var1.bind(var25)(var37);
            var1 = var21.bind(var5)(var1, var27);
            var20 = var1[var19];
            var _closure2_slot3 = var20;
            var1 = var1[var18];
            var _closure2_slot4 = var1;
            var3 = var25.useState;
            var1 = function() {
                var2 = _closure2_slot0;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var25)(var1);
            var1 = var21.bind(var5)(var1, var27);
            var24 = var1[var19];
            var38 = var1[var18];
            var _closure2_slot5 = var38;
            var3 = {};
            var3['x'] = var27;
            var10 = 12;
            var6 = var11 - var10;
            var3['y'] = var6;
            var1 = {};
            var7 = -2;
            var1['x'] = var7;
            var1['y'] = var6;
            var7 = _closure1_slot0;
            var6 = 6;
            var9 = var4[var6];
            var14 = var7.bind(var5)(var9);
            var9 = var14.useSharedValue;
            var30 = var11 / var27;
            var14 = var9.bind(var14)(var30);
            var26 = 7;
            var9 = var4[var26];
            var15 = var7.bind(var5)(var9);
            var9 = var15.useValue;
            var22 = var9.bind(var15)(var19);
            var _closure2_slot6 = var22;
            var9 = var4[var26];
            var17 = var7.bind(var5)(var9);
            var15 = var17.useValue;
            var29 = {};
            var9 = var22.current;
            var29['translateX'] = var9;
            var9 = new Array(1);
            var9[0] = var29;
            var9 = var15.bind(var17)(var9);
            var _closure2_slot7 = var9;
            var15 = {'value': 20, 'timing': 0, 'duration': 200};
            var17 = var4[var6];
            var17 = var7.bind(var5)(var17);
            var31 = var17.Easing;
            var29 = var31.in;
            var17 = var4[var6];
            var17 = var7.bind(var5)(var17);
            var17 = var17.Easing;
            var17 = var17.ease;
            var17 = var29.bind(var31)(var17);
            var15['easing'] = var17;
            var29 = new Array(1);
            var29[0] = var15;
            var17 = {'value': 0, 'timing': 0, 'duration': 200};
            var15 = var4[var6];
            var15 = var7.bind(var5)(var15);
            var32 = var15.Easing;
            var31 = var32.in;
            var15 = var4[var6];
            var15 = var7.bind(var5)(var15);
            var15 = var15.Easing;
            var15 = var15.ease;
            var15 = var31.bind(var32)(var15);
            var17['easing'] = var15;
            var15 = new Array(1);
            var15[0] = var17;
            var17 = 8;
            var31 = var4[var17];
            var35 = var16.bind(var5)(var31);
            var33 = new Array(1);
            var33[0] = var22;
            var32 = new Array(1);
            var32[0] = var29;
            var31 = {};
            var29 = true;
            var31['autoplay'] = var29;
            var31 = var35.bind(var5)(var33, var32, var31);
            var31 = var21.bind(var5)(var31, var27);
            var33 = var31[var19];
            var _closure2_slot8 = var33;
            var31 = var31[var18];
            var _closure2_slot9 = var31;
            var32 = var4[var17];
            var36 = var16.bind(var5)(var32);
            var35 = new Array(1);
            var35[0] = var22;
            var32 = new Array(1);
            var32[0] = var15;
            var15 = {};
            var15['autoplay'] = var37;
            var15 = var36.bind(var5)(var35, var32, var15);
            var15 = var21.bind(var5)(var15, var27);
            var32 = var15[var19];
            var _closure2_slot10 = var32;
            var18 = var15[var18];
            var _closure2_slot11 = var18;
            var15 = 9;
            var19 = var4[var15];
            var21 = var16.bind(var5)(var19);
            var19 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot10;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var3 = _closure2_slot2;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 600;
                var2 = var5.bind(var4)(var3, var2);
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure2_slot6;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0002_ip = 27; continue _fun0002 }
 13:
                        var4 = _closure2_slot6;
                        var2 = var4.dispose;
                        var2 = var2.bind(var4)();
 27:
                        var2 = _closure2_slot7;
                        if(!(var3 != var2)) { _fun0002_ip = 49; continue _fun0002 }
 35:
                        var2 = _closure2_slot7;
                        var1 = var2.dispose;
                        var1 = var1.bind(var2)();
 49:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var19 = var21.bind(var5)(var19);
            var19 = var4[var6];
            var36 = var7.bind(var5)(var19);
            var35 = var36.useAnimatedReaction;
            var21 = function x() {
                var2 = _closure2_slot0;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var19 = {};
            var19['size'] = var13;
            var21['__closure'] = var19;
            var19 = 14018055573432.0;
            var21['__workletHash'] = var19;
            var19 = _closure1_slot9;
            var21['__initData'] = var19;
            var19 = function p(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0003_ip = 57; continue _fun0003 }
 10:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot5;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = {};
            var39 = var4[var6];
            var39 = var7.bind(var5)(var39);
            var39 = var39.runOnJS;
            var37['runOnJS'] = var39;
            var37['setRefSize'] = var38;
            var19['__closure'] = var37;
            var37 = 2405349460675.0;
            var19['__workletHash'] = var37;
            var37 = _closure1_slot10;
            var19['__initData'] = var37;
            var19 = var35.bind(var36)(var21, var19);
            var21 = var25.useEffect;
            var19 = new Array(6);
            var19[0] = var20;
            var19[1] = var34;
            var19[2] = var33;
            var19[3] = var32;
            var19[4] = var31;
            var19[5] = var18;
            var18 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0004_ip = 55; continue _fun0004 }
 10:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0004_ip = 37; continue _fun0004 }
 17:
                    var2 = _closure2_slot9;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var3)();
                    _fun0004_ip = 55; continue _fun0004;
 37:
                    var3 = _closure2_slot11;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var2)();
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var21.bind(var25)(var18, var19);
            var18 = var4[var26];
            var21 = var7.bind(var5)(var18);
            var19 = var21.useValueEffect;
            var18 = function() {
                var2 = _closure2_slot7;
                var3 = {};
                var1 = _closure2_slot6;
                var1 = var1.current;
                var3['translateX'] = var1;
                var1 = new Array(1);
                var1[0] = var3;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var18 = var19.bind(var21)(var22, var18);
            var15 = var4[var15];
            var16 = var16.bind(var5)(var15);
            var15 = function() {
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = _closure2_slot0;
                        var2 = var3.get;
                        var4 = var2.bind(var3)();
                        var3 = _closure1_slot6;
                        if(!(var4 !== var3)) { _fun0005_ip = 73; continue _fun0005 }
 27:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.setDrawingStrokeSize;
                        var4 = _closure2_slot0;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var1 = var2.bind(var3)(var1);
 73:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var15 = var16.bind(var5)(var15);
            var4 = var4[var26];
            var4 = var7.bind(var5)(var4);
            var4 = var4.Skia;
            var7 = var4.Path;
            var4 = var7.Make;
            var16 = var4.bind(var7)();
            var4 = var16.moveTo;
            var15 = -8;
            var7 = 24;
            var16 = var4.bind(var16)(var15, var7);
            var4 = var16.lineTo;
            var17 = var4.bind(var16)(var17, var7);
            var16 = var17.lineTo;
            var4 = var3.x;
            var3 = var3.y;
            var17 = var16.bind(var17)(var4, var3);
            var16 = var17.lineTo;
            var4 = var1.x;
            var3 = var1.y;
            var4 = var16.bind(var17)(var4, var3);
            var3 = var4.moveTo;
            var7 = var3.bind(var4)(var15, var7);
            var4 = var7.lineTo;
            var3 = var1.x;
            var1 = var1.y;
            var25 = var4.bind(var7)(var3, var1);
            var19 = {};
            var1 = {'left': 0, 'top': 4294967284};
            var1['width'] = var28;
            var3 = var27 * var11;
            var1['height'] = var3;
            var19['canvasStyle'] = var1;
            var1 = {'position': 'absolute', 'left': 0};
            var1['top'] = var11;
            var1['width'] = var28;
            var1['height'] = var11;
            var19['canvasContainer'] = var1;
            var1 = null;
            if(var2) { _fun0001_ip = 1609; continue _fun0001 }
 1049:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var16 = _closure1_slot7;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = var17[var6];
            var6 = var15.bind(var5)(var6);
            var15 = var6.View;
            var6 = {};
            var18 = var19.canvasContainer;
            var6['style'] = var18;
            var21 = 'none';
            var6['pointerEvents'] = var21;
            var18 = _closure1_slot0;
            var17 = var17[var26];
            var17 = var18.bind(var5)(var17);
            var18 = var17.Canvas;
            var17 = {};
            var17['pointerEvents'] = var21;
            var19 = var19.canvasStyle;
            var17['style'] = var19;
            var21 = null;
            if(!var20) { _fun0001_ip = 1223; continue _fun0001 }
 1147:
            var31 = _closure1_slot7;
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var26];
            var19 = var22.bind(var5)(var19);
            var22 = var19.Circle;
            var19 = {};
            var32 = var28 / var27;
            var19['cx'] = var32;
            var32 = 10;
            var32 = var30 + var32;
            var19['cy'] = var32;
            var32 = var24 + var27;
            var32 = var32 / var27;
            var19['r'] = var32;
            var32 = 'white';
            var19['color'] = var32;
            var21 = var31.bind(var5)(var22, var19);
 1223:
            var19 = new Array(3);
            var19[0] = var21;
            var7 = null;
            if(!var20) { _fun0001_ip = 1304; continue _fun0001 }
 1236:
            var22 = _closure1_slot7;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var26];
            var20 = var21.bind(var5)(var20);
            var21 = var20.Circle;
            var20 = {};
            var28 = var28 / var27;
            var20['cx'] = var28;
            var28 = 10;
            var28 = var30 + var28;
            var20['cy'] = var28;
            var24 = var24 / var27;
            var20['r'] = var24;
            var20['color'] = var23;
            var7 = var22.bind(var5)(var21, var20);
 1304:
            var19[1] = var7;
            var22 = _closure1_slot8;
            var27 = _closure1_slot0;
            var7 = _closure1_slot2;
            var20 = var7[var26];
            var20 = var27.bind(var5)(var20);
            var21 = var20.Group;
            var20 = {};
            var20['transform'] = var9;
            var9 = _closure1_slot7;
            var23 = var7[var26];
            var23 = var27.bind(var5)(var23);
            var24 = var23.Path;
            var23 = {};
            var23['path'] = var25;
            var25 = 'rgba(235, 235, 235, 0.7)';
            var23['color'] = var25;
            var24 = var9.bind(var5)(var24, var23);
            var23 = new Array(2);
            var23[0] = var24;
            var24 = var7[var26];
            var24 = var27.bind(var5)(var24);
            var25 = var24.Group;
            var24 = {};
            var26 = var7[var26];
            var26 = var27.bind(var5)(var26);
            var27 = var26.Circle;
            var26 = {'cx': 0, 'cy': null, 'r': 12, 'color': 'white'};
            var26['cy'] = var14;
            var27 = var9.bind(var5)(var27, var26);
            var26 = new Array(2);
            var26[0] = var27;
            var8 = _closure1_slot1;
            var27 = 11;
            var27 = var7[var27];
            var28 = var8.bind(var5)(var27);
            var27 = {};
            var27['active'] = var29;
            var27 = var9.bind(var5)(var28, var27);
            var26[1] = var27;
            var24['children'] = var26;
            var24 = var22.bind(var5)(var25, var24);
            var23[1] = var24;
            var20['children'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var19[2] = var20;
            var17['children'] = var19;
            var17 = var4.bind(var5)(var18, var17);
            var6['children'] = var17;
            var15 = var16.bind(var5)(var15, var6);
            var6 = new Array(2);
            var6[0] = var15;
            var7 = var7[var10];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['sliderCirclePosition'] = var14;
            var7['size'] = var13;
            var12 = function handleGrabbed(arg1) {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['handleGrabbed'] = var12;
            var7['top'] = var11;
            var7['height'] = var11;
            var7['controlCircleRadius'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1609:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();