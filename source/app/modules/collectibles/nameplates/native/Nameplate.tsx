// app/modules/collectibles/nameplates/native/Nameplate.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var5 = arg2;
            var6 = arg3;
            var4 = arg4;
            var7 = arg5;
            var1 = {};
            var2 = {'position': 'absolute', 'overflow': 'hidden', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
            var1['container'] = var2;
            var2 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
            var3 = 1;
            var9 = var3;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = 0;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = 0.4;
            if(!var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = 0.8;
case 9:
            _fun0001_ip = 11; continue _fun0001;
case 7:
            var12 = 0.6;
            if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var12 = 0.3;
case 12:
            var11 = var12;
case 11:
            var10 = var11;
case 6:
            var9 = var10;
case 2:
            var2['opacity'] = var9;
            var1['gradient'] = var2;
            var2 = {'position': 'absolute', 'height': '100%', 'right': 0, 'aspectRatio': 5.333333333333333};
            if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = 0.1;
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 16:
            if(var5) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var5 = 0.6;
            if(!var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var5 = 0.8;
case 21:
            _fun0001_ip = 23; continue _fun0001;
case 19:
            var6 = 0.5;
            if(!var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var6 = 0.4;
case 24:
            var5 = var6;
case 23:
            var4 = var5;
case 18:
            var3 = var4;
case 14:
            var2['opacity'] = var3;
            var1['img'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function NameplateTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = function NameplateInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var10 = var3.nameplate;
            var16 = var3.isPressed;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var16 = false;
case 26:
            var15 = var3.isFocused;
            if(!(var15 === var4)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var15 = false;
case 28:
            var14 = var3.isMuted;
            if(!(var14 === var4)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var14 = false;
case 30:
            var12 = var3.fullOpacity;
            if(!(var12 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 32:
            var12 = false;
case 5:
            var18 = var3.isSquarePreview;
            if(!(var18 === var4)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var18 = false;
case 33:
            var11 = var3.invertPressOpacity;
            if(!(var11 === var4)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var11 = false;
case 35:
            var2 = var3.fadeIn;
            if(!(var2 === var4)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var2 = false;
case 37:
            var _closure2_slot0 = var2;
            var6 = var3.animate;
            if(!(var6 === var4)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var6 = false;
case 39:
            var13 = var3.style;
            var _closure2_slot1 = var4;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var3 = var8[var3];
            var19 = var9.bind(var4)(var3);
            var17 = var19.useStateFromStores;
            var3 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var3 = var17.bind(var19)(var5, var3);
            var5 = _closure1_slot7;
            var25 = undefined;
            var24 = var12;
            var23 = var16;
            var22 = var15;
            var21 = var14;
            var20 = var11;
            var11 = var25[var5](var24, var23, var22, var21, var20, var19);
            var12 = _closure1_slot1;
            var5 = 5;
            var5 = var8[var5];
            var5 = var12.bind(var4)(var5);
            var15 = var5.bind(var4)();
            var5 = 6;
            var8 = var8[var5];
            var12 = var9.bind(var4)(var8);
            var9 = var12.useSharedValue;
            var8 = 1;
            if(!var2) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var8 = 0;
case 41:
            var16 = var9.bind(var12)(var8);
            _closure2_slot1 = var16;
            var12 = _closure1_slot3;
            var9 = var12.useEffect;
            var8 = new Array(2);
            var8[0] = var16;
            var8[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 7;
                    var1 = var11[var1];
                    var9 = undefined;
                    var6 = var10.bind(var9)(var1);
                    var5 = var6.withTiming;
                    var4 = {};
                    var1 = 100;
                    var4['duration'] = var1;
                    var1 = 6;
                    var7 = var11[var1];
                    var7 = var10.bind(var9)(var7);
                    var8 = var7.Easing;
                    var7 = var8.in;
                    var1 = var11[var1];
                    var1 = var10.bind(var9)(var1);
                    var1 = var1.Easing;
                    var1 = var1.ease;
                    var1 = var7.bind(var8)(var1);
                    var4['easing'] = var1;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var12)(var2, var8);
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var5];
            var12 = var2.bind(var4)(var9);
            var9 = var12.useAnimatedStyle;
            var1 = function j() {
                var1 = {};
                var3 = _closure2_slot1;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var14 = {};
            var14['opacity'] = var16;
            var1['__closure'] = var14;
            var14 = 15588901070870.0;
            var1['__workletHash'] = var14;
            var14 = _closure1_slot8;
            var1['__initData'] = var14;
            var9 = var9.bind(var12)(var1);
            var1 = 8;
            var1 = var8[var1];
            var14 = var2.bind(var4)(var1);
            var12 = var14.getBackgroundGradientColors;
            var1 = var10.palette;
            var15 = var12.bind(var14)(var1, var15);
            var1 = 9;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getNameplateAssets;
            var2 = var1.bind(var2)(var10);
            var1 = var2.staticImageUrl;
            var2 = var2.animatedImageUrl;
            if(!var6) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var6 = !var3;
case 45:
            if(!var6) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var1 = var2;
case 47:
            var8 = null;
            var2 = var8 != var1;
            var12 = '';
            if(!var2) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var12 = var1;
case 49:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var14 = var11.container;
            var5 = new Array(3);
            var5[0] = var14;
            var5[1] = var13;
            var5[2] = var9;
            var1['style'] = var5;
            var5 = var8 != var15;
            var8 = null;
            if(!var5) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var13 = _closure1_slot5;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 10;
            var5 = var14[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var14 = var11.gradient;
            var5['style'] = var14;
            var14 = {};
            var16 = 0;
            var17 = 0;
            if(!var18) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var17 = -2;
case 53:
            var14['x'] = var17;
            var14['y'] = var16;
            var5['start'] = var14;
            var14 = {'x': 1, 'y': 0};
            var5['end'] = var14;
            var16 = var15.left;
            var14 = new Array(2);
            var14[0] = var16;
            var15 = var15.right;
            var14[1] = var15;
            var5['colors'] = var14;
            var8 = var13.bind(var4)(var9, var5);
case 51:
            var5 = new Array(2);
            var5[0] = var8;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 11;
            var8 = var13[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.isAndroid;
            var8 = var8.bind(var9)();
            if(!var8) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            if(var6) { _fun0002_ip = 57; continue _fun0002 }
case 55:
            var9 = _closure1_slot5;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 13;
            var6 = var13[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var13 = {};
            var13['uri'] = var12;
            var6['source'] = var13;
            var13 = var11.img;
            var6['style'] = var13;
            var13 = 'image';
            var6['accessibilityRole'] = var13;
            var13 = var10.imgAlt;
            var6['accessibilityLabel'] = var13;
            var6 = var9.bind(var4)(var8, var6);
            _fun0002_ip = 58; continue _fun0002;
case 57:
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 12;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.APNGPlayer;
            var7 = {};
            var7['url'] = var12;
            var11 = var11.img;
            var7['style'] = var11;
            var11 = true;
            var7['autoplay'] = var11;
            var10 = var10.imgAlt;
            var7['ariaLabel'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 58:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/nameplates/native/Nameplate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var6 = var4.nameplate;
            var1 = null;
            var3 = Object.create(var1);
            var2 = 0;
            var3['nameplate'] = var2;
            var9 = {};
            var8 = var4;
            var7 = var3;
            var2 = copyDataProperties(var9, var8, var7);
            var3 = var1 == var6;
            if(var3) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var5 = _closure1_slot5;
            var4 = _closure1_slot9;
            var3 = {};
            var3['nameplate'] = var6;
            var9 = var3;
            var8 = var2;
            var2 = copyDataProperties(var9, var8);
            var6 = true;
            var2 = 'aria-hidden';
            var3[1] = var6;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 59:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();