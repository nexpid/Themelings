// app/modules/nameplates/native/Nameplate.tsx
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
 0:
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
            if(var8) { _fun0001_ip = 126; continue _fun0001 }
 58:
            if(!var4) { _fun0001_ip = 66; continue _fun0001 }
 61:
            var10 = 0;
            if(!var6) { _fun0001_ip = 123; continue _fun0001 }
 66:
            if(var5) { _fun0001_ip = 94; continue _fun0001 }
 69:
            var11 = 0.4;
            if(!var6) { _fun0001_ip = 92; continue _fun0001 }
 82:
            var11 = 0.8;
 92:
            _fun0001_ip = 120; continue _fun0001;
 94:
            var12 = 0.6;
            if(!var7) { _fun0001_ip = 117; continue _fun0001 }
 107:
            var12 = 0.3;
 117:
            var11 = var12;
 120:
            var10 = var11;
 123:
            var9 = var10;
 126:
            var2['opacity'] = var9;
            var1['gradient'] = var2;
            var2 = {'position': 'absolute', 'height': '100%', 'right': 0, 'aspectRatio': 5.333333333333333};
            if(var8) { _fun0001_ip = 228; continue _fun0001 }
 152:
            if(!var4) { _fun0001_ip = 168; continue _fun0001 }
 155:
            var4 = 0.1;
            if(!var6) { _fun0001_ip = 225; continue _fun0001 }
 168:
            if(var5) { _fun0001_ip = 196; continue _fun0001 }
 171:
            var5 = 0.6;
            if(!var6) { _fun0001_ip = 194; continue _fun0001 }
 184:
            var5 = 0.8;
 194:
            _fun0001_ip = 222; continue _fun0001;
 196:
            var6 = 0.5;
            if(!var7) { _fun0001_ip = 219; continue _fun0001 }
 209:
            var6 = 0.4;
 219:
            var5 = var6;
 222:
            var4 = var5;
 225:
            var3 = var4;
 228:
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
 0:
            var1 = arg1;
            var9 = var1.nameplate;
            var16 = var1.isPressed;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 25; continue _fun0002 }
 23:
            var16 = false;
 25:
            var15 = var1.isFocused;
            if(!(var15 === var4)) { _fun0002_ip = 37; continue _fun0002 }
 35:
            var15 = false;
 37:
            var14 = var1.isMuted;
            if(!(var14 === var4)) { _fun0002_ip = 49; continue _fun0002 }
 47:
            var14 = false;
 49:
            var13 = var1.fullOpacity;
            if(!(var13 === var4)) { _fun0002_ip = 61; continue _fun0002 }
 59:
            var13 = false;
 61:
            var17 = var1.isSquarePreview;
            if(!(var17 === var4)) { _fun0002_ip = 73; continue _fun0002 }
 71:
            var17 = false;
 73:
            var10 = var1.invertPressOpacity;
            if(!(var10 === var4)) { _fun0002_ip = 85; continue _fun0002 }
 83:
            var10 = false;
 85:
            var7 = var1.fadeIn;
            if(!(var7 === var4)) { _fun0002_ip = 97; continue _fun0002 }
 95:
            var7 = false;
 97:
            var _closure2_slot0 = var7;
            var2 = var1.animate;
            if(!(var2 === var4)) { _fun0002_ip = 113; continue _fun0002 }
 111:
            var2 = false;
 113:
            var8 = var1.style;
            var _closure2_slot1 = var4;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 4;
            var1 = var11[var1];
            var19 = var12.bind(var4)(var1);
            var18 = var19.useStateFromStores;
            var1 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var18.bind(var19)(var5, var1);
            var5 = _closure1_slot7;
            var25 = undefined;
            var24 = var13;
            var23 = var16;
            var22 = var15;
            var21 = var14;
            var20 = var10;
            var10 = var25[var5](var24, var23, var22, var21, var20, var19);
            var13 = _closure1_slot1;
            var5 = 5;
            var5 = var11[var5];
            var5 = var13.bind(var4)(var5);
            var13 = var5.bind(var4)();
            var5 = 6;
            var11 = var11[var5];
            var14 = var12.bind(var4)(var11);
            var12 = var14.useSharedValue;
            var11 = 1;
            if(!var7) { _fun0002_ip = 245; continue _fun0002 }
 243:
            var11 = 0;
 245:
            var16 = var12.bind(var14)(var11);
            _closure2_slot1 = var16;
            var14 = _closure1_slot3;
            var12 = var14.useEffect;
            var11 = new Array(2);
            var11[0] = var16;
            var11[1] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0003_ip = 127; continue _fun0003 }
 10:
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
 127:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var12.bind(var14)(var7, var11);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = var12[var5];
            var14 = var11.bind(var4)(var7);
            var7 = var14.useAnimatedStyle;
            var3 = function j() {
                var1 = {};
                var3 = _closure2_slot1;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var15 = {};
            var15['opacity'] = var16;
            var3['__closure'] = var15;
            var15 = 15588901070870.0;
            var3['__workletHash'] = var15;
            var15 = _closure1_slot8;
            var3['__initData'] = var15;
            var7 = var7.bind(var14)(var3);
            var3 = 8;
            var3 = var12[var3];
            var12 = var11.bind(var4)(var3);
            var11 = var12.getBackgroundGradientColors;
            var3 = var9.palette;
            var14 = var11.bind(var12)(var3, var13);
            if(!var2) { _fun0002_ip = 467; continue _fun0002 }
 394:
            if(var1) { _fun0002_ip = 467; continue _fun0002 }
 397:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getAssetCDNUrl;
            var13 = var9.src;
            var1 = global;
            var1 = var1.HermesInternal;
            var12 = var1.concat;
            var11 = 'collectibles/';
            var1 = 'img.png';
            var1 = var12.bind(var11)(var13, var1);
            var12 = var2.bind(var3)(var1);
            _fun0002_ip = 535; continue _fun0002;
 467:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getAssetCDNUrl;
            var15 = var9.src;
            var1 = global;
            var1 = var1.HermesInternal;
            var13 = var1.concat;
            var11 = 'collectibles/';
            var1 = 'static.png';
            var1 = var13.bind(var11)(var15, var1);
            var12 = var2.bind(var3)(var1);
 535:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var11 = var10.container;
            var5 = new Array(3);
            var5[0] = var11;
            var5[1] = var8;
            var5[2] = var7;
            var1['style'] = var5;
            var7 = null;
            var5 = var7 != var14;
            if(!var5) { _fun0002_ip = 706; continue _fun0002 }
 597:
            var11 = _closure1_slot5;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 10;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var13 = var10.gradient;
            var5['style'] = var13;
            var13 = {};
            var15 = 0;
            var16 = 0;
            if(!var17) { _fun0002_ip = 648; continue _fun0002 }
 642:
            var16 = -2;
 648:
            var13['x'] = var16;
            var13['y'] = var15;
            var5['start'] = var13;
            var13 = {'x': 1, 'y': 0};
            var5['end'] = var13;
            var15 = var14.left;
            var13 = new Array(2);
            var13[0] = var15;
            var14 = var14.right;
            var13[1] = var14;
            var5['colors'] = var13;
            var7 = var11.bind(var4)(var8, var5);
 706:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 11;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var11 = {};
            var11['uri'] = var12;
            var6['source'] = var11;
            var10 = var10.img;
            var6['style'] = var10;
            var10 = 'image';
            var6['accessibilityRole'] = var10;
            var9 = var9.imgAlt;
            var6['accessibilityLabel'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nameplates/native/Nameplate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(var3) { _fun0004_ip = 87; continue _fun0004 }
 40:
            var5 = _closure1_slot5;
            var4 = _closure1_slot9;
            var3 = {};
            var3['nameplate'] = var6;
            var9 = var3;
            var8 = var2;
            var2 = copyDataProperties(var9, var8);
            var6 = true;
            var2 = 'aria-hidden';
            var3[var2] = var6;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 87:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();