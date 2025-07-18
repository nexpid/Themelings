// app/modules/remixing/native/components/ExportAreaMask.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getAspectRect(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var1 = arg2;
            var10 = arg3;
            var9 = arg4;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 4;
            var2 = var2[var8];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var2 = var2.AspectRatio;
            var2 = var2.ORIGINAL;
            if(!(var2 !== var7)) { _fun0001_ip = 239; continue _fun0001 }
 56:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var2 = var3.bind(var6)(var2);
            var2 = var2.AspectRatio;
            var5 = var2.SQUARE;
            var2 = var10;
            var3 = var2;
            if(!(var5 !== var7)) { _fun0001_ip = 308; continue _fun0001 }
 98:
            var11 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var11.bind(var6)(var5);
            var5 = var5.AspectRatio;
            var5 = var5.FOUR_THREE;
            if(!(var5 !== var7)) { _fun0001_ip = 220; continue _fun0001 }
 131:
            var11 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var11.bind(var6)(var5);
            var5 = var5.AspectRatio;
            var5 = var5.SIXTEEN_NINE;
            if(!(var5 !== var7)) { _fun0001_ip = 201; continue _fun0001 }
 164:
            var11 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var11.bind(var6)(var5);
            var5 = var5.AspectRatio;
            var5 = var5.VERTICAL;
            var2 = var1;
            var3 = var10;
            _fun0001_ip = 308; continue _fun0001;
 201:
            var5 = 1.7777777777777777;
            var2 = var10 / var5;
            var3 = var10;
            _fun0001_ip = 308; continue _fun0001;
 220:
            var5 = 1.3333333333333333;
            var2 = var10 / var5;
            var3 = var10;
            _fun0001_ip = 308; continue _fun0001;
 239:
            var11 = null;
            var2 = var1;
            var3 = var10;
            if(!(var11 != var9)) { _fun0001_ip = 308; continue _fun0001 }
 251:
            var5 = var9.height;
            var2 = var1;
            var3 = var10;
            if(!(var11 != var5)) { _fun0001_ip = 308; continue _fun0001 }
 266:
            var5 = var9.width;
            var2 = var1;
            var3 = var10;
            if(!(var11 != var5)) { _fun0001_ip = 308; continue _fun0001 }
 281:
            var5 = var9.width;
            var10 = var5 / var10;
            var5 = var9.width;
            var3 = var5 / var10;
            var9 = var9.height;
            var2 = var9 / var10;
 308:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var8];
            var4 = var5.bind(var6)(var4);
            var4 = var4.AspectRatio;
            var6 = var4.VERTICAL;
            var5 = 0;
            var4 = 0;
            if(!(var7 !== var6)) { _fun0001_ip = 356; continue _fun0001 }
 345:
            var6 = var1 - var2;
            var1 = 2;
            var4 = var6 / var1;
 356:
            var1 = {};
            var1['x'] = var5;
            var1['y'] = var4;
            var1['width'] = var3;
            var1['height'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingCanvasStore;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function ExportAreaMaskTsx1(){const{heightLerp}=this.__closure;return heightLerp.get();}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function ExportAreaMaskTsx2(currentValue,previousValue){const{mask,xLerp,yLerp,widthLerp,heightLerp}=this.__closure;if(currentValue!==previousValue){mask.set({x:xLerp.get(),y:yLerp.get(),width:widthLerp.get(),height:heightLerp.get()});}}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/ExportAreaMask.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var1 = arg1;
        var18 = var1.canvasHeight;
        var _closure2_slot0 = var18;
        var17 = var1.canvasWidth;
        var _closure2_slot1 = var17;
        var16 = var1.source;
        var _closure2_slot2 = var16;
        var6 = _closure1_slot4;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var3 = 5;
        var3 = var9[var3];
        var4 = undefined;
        var3 = var8.bind(var4)(var3);
        var5 = var3.shallow;
        var3 = function(arg1) {
            var1 = arg1;
            var3 = var1.aspectRatio;
            var2 = var1.setRect;
            var1 = {};
            var1['aspectRatio'] = var3;
            var1['setRect'] = var2;
            return var1;
        };
        var3 = var6.bind(var4)(var3, var5);
        var19 = var3.aspectRatio;
        var _closure2_slot3 = var19;
        var5 = var3.setRect;
        var _closure2_slot4 = var5;
        var3 = _closure1_slot8;
        var24 = undefined;
        var23 = var19;
        var22 = var18;
        var21 = var17;
        var20 = var16;
        var10 = var24[var3](var23, var22, var21, var20, var19);
        var3 = 6;
        var6 = var9[var3];
        var7 = var8.bind(var4)(var6);
        var6 = var7.useSharedValue;
        var6 = var6.bind(var7)(var10);
        var _closure2_slot5 = var6;
        var7 = var9[var3];
        var11 = var8.bind(var4)(var7);
        var10 = var11.useSharedValue;
        var7 = var6.get;
        var7 = var7.bind(var6)();
        var7 = var7.x;
        var14 = var10.bind(var11)(var7);
        var _closure2_slot6 = var14;
        var7 = var9[var3];
        var11 = var8.bind(var4)(var7);
        var10 = var11.useSharedValue;
        var7 = var6.get;
        var7 = var7.bind(var6)();
        var7 = var7.y;
        var13 = var10.bind(var11)(var7);
        var _closure2_slot7 = var13;
        var7 = var9[var3];
        var11 = var8.bind(var4)(var7);
        var10 = var11.useSharedValue;
        var7 = var6.get;
        var7 = var7.bind(var6)();
        var7 = var7.height;
        var11 = var10.bind(var11)(var7);
        var _closure2_slot8 = var11;
        var7 = var9[var3];
        var12 = var8.bind(var4)(var7);
        var10 = var12.useSharedValue;
        var7 = var6.get;
        var7 = var7.bind(var6)();
        var7 = var7.width;
        var12 = var10.bind(var12)(var7);
        var _closure2_slot9 = var12;
        var15 = _closure1_slot2;
        var10 = var15.useEffect;
        var7 = new Array(10);
        var7[0] = var19;
        var7[1] = var6;
        var7[2] = var14;
        var7[3] = var13;
        var7[4] = var11;
        var7[5] = var12;
        var7[6] = var18;
        var7[7] = var17;
        var7[8] = var16;
        var7[9] = var5;
        var5 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var8 = _closure1_slot8;
                var16 = _closure2_slot3;
                var15 = _closure2_slot0;
                var14 = _closure2_slot1;
                var13 = _closure2_slot2;
                var1 = undefined;
                var17 = undefined;
                var4 = var17[var8](var16, var15, var14, var13, var12);
                var5 = _closure2_slot4;
                var5 = var5.bind(var1)(var4);
                var5 = _closure1_slot3;
                var5 = var5.useReducedMotion;
                if(var5) { _fun0002_ip = 266; continue _fun0002 }
 59:
                var9 = {};
                var5 = 250;
                var9['duration'] = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var3 = var8[var3];
                var3 = var7.bind(var1)(var3);
                var3 = var3.Easing;
                var3 = var3.exp;
                var9['easing'] = var3;
                var10 = _closure2_slot6;
                var6 = var10.set;
                var3 = 7;
                var5 = var8[var3];
                var12 = var7.bind(var1)(var5);
                var11 = var12.withTiming;
                var5 = var4.x;
                var5 = var11.bind(var12)(var5, var9);
                var5 = var6.bind(var10)(var5);
                var10 = _closure2_slot7;
                var6 = var10.set;
                var5 = var8[var3];
                var12 = var7.bind(var1)(var5);
                var11 = var12.withTiming;
                var5 = var4.y;
                var5 = var11.bind(var12)(var5, var9);
                var5 = var6.bind(var10)(var5);
                var10 = _closure2_slot8;
                var6 = var10.set;
                var5 = var8[var3];
                var12 = var7.bind(var1)(var5);
                var11 = var12.withTiming;
                var5 = var4.height;
                var5 = var11.bind(var12)(var5, var9);
                var5 = var6.bind(var10)(var5);
                var6 = _closure2_slot9;
                var5 = var6.set;
                var3 = var8[var3];
                var8 = var7.bind(var1)(var3);
                var7 = var8.withTiming;
                var3 = var4.width;
                var3 = var7.bind(var8)(var3, var9);
                var3 = var5.bind(var6)(var3);
                _fun0002_ip = 280; continue _fun0002;
 266:
                var3 = _closure2_slot5;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4);
 280:
                return var1;
            }
        };
        var5 = var10.bind(var15)(var5, var7);
        var3 = var9[var3];
        var7 = var8.bind(var4)(var3);
        var5 = var7.useAnimatedReaction;
        var3 = function _() {
            var2 = _closure2_slot8;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            return var1;
        };
        var10 = {};
        var10['heightLerp'] = var11;
        var3['__closure'] = var10;
        var10 = 10156532750463.0;
        var3['__workletHash'] = var10;
        var10 = _closure1_slot6;
        var3['__initData'] = var10;
        var2 = function R(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var1 = arg2;
                if(!(var2 !== var1)) { _fun0003_ip = 97; continue _fun0003 }
 10:
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = {};
                var6 = _closure2_slot6;
                var5 = var6.get;
                var5 = var5.bind(var6)();
                var1['x'] = var5;
                var6 = _closure2_slot7;
                var5 = var6.get;
                var5 = var5.bind(var6)();
                var1['y'] = var5;
                var6 = _closure2_slot9;
                var5 = var6.get;
                var5 = var5.bind(var6)();
                var1['width'] = var5;
                var5 = _closure2_slot8;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var1['height'] = var4;
                var1 = var2.bind(var3)(var1);
 97:
                var1 = undefined;
                return var1;
            }
        };
        var10 = {};
        var10['mask'] = var6;
        var10['xLerp'] = var14;
        var10['yLerp'] = var13;
        var10['widthLerp'] = var12;
        var10['heightLerp'] = var11;
        var2['__closure'] = var10;
        var10 = 16499231284789.0;
        var2['__workletHash'] = var10;
        var10 = _closure1_slot7;
        var2['__initData'] = var10;
        var2 = var5.bind(var7)(var3, var2);
        var3 = _closure1_slot5;
        var5 = 8;
        var1 = var9[var5];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Group;
        var1 = {};
        var1['clip'] = var6;
        var6 = true;
        var1['invertClip'] = var6;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var6 = var5.Fill;
        var5 = {};
        var7 = 9;
        var7 = var9[var7];
        var7 = var8.bind(var4)(var7);
        var7 = var7.MASK_COLOR;
        var5['color'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();