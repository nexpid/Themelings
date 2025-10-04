// app/design/components/Menu/native/Menu.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var14 = 1;
    var5 = var7[var14];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var12 = var4.StyleSheet;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot6 = var4;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot7 = var5;
    var5 = {'mass': 1, 'stiffness': 300, 'damping': 25, 'restSpeedThreshold': 0.01, 'restDisplacementThreshold': 0.01};
    var _closure1_slot8 = var5;
    var5 = {};
    var9 = 250;
    var5['duration'] = var9;
    var9 = 5;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.STANDARD_EASING;
    var5['easing'] = var9;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var16 = var12.absoluteFillObject;
    var17 = var11;
    var12 = copyDataProperties(var17, var16);
    var12 = 'zIndex';
    var11[var12] = var14;
    var5['backdrop'] = var11;
    var11 = {};
    var12 = 'absolute';
    var11['position'] = var12;
    var12 = 7;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_FLOATING;
    var11['backgroundColor'] = var14;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var11['borderRadius'] = var12;
    var12 = 220;
    var11['width'] = var12;
    var5['menu'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot10 = var5;
    var5 = {};
    var5['menuClose'] = var4;
    var5['menuDismiss'] = var4;
    var4 = var8.createContext;
    var4 = var4.bind(var8)(var5);
    var _closure1_slot11 = var4;
    var5 = {};
    var8 = 'function measureButtonRef_MenuTsx1(ref,setDimensions){const{measure,runOnJS}=this.__closure;const measurements=measure(ref);if(measurements==null)return;runOnJS(setDimensions)(measurements);}';
    var5['code'] = var8;
    var _closure1_slot12 = var5;
    var5 = function() {
        var1 = function measureButtonRef(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 8;
                var3 = var1[var5];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.measure;
                var3 = arg1;
                var3 = var4.bind(var6)(var3);
                var4 = null;
                if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var5 = var4.bind(var1)(var2);
                var4 = var5.runOnJS;
                var2 = arg2;
                var2 = var4.bind(var5)(var2);
                var2 = var2.bind(var1)(var3);
case 2:
                return var1;
            }
        };
        var3 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 8;
        var8 = var7[var4];
        var5 = undefined;
        var8 = var6.bind(var5)(var8);
        var8 = var8.measure;
        var3['measure'] = var8;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.runOnJS;
        var3['runOnJS'] = var4;
        var1['__closure'] = var3;
        var3 = 15651320687527.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot12;
        var1['__initData'] = var2;
        return var1;
    };
    var5 = var5.bind(var1)();
    var _closure1_slot13 = var5;
    var5 = {};
    var8 = 'function MenuTsx2(){const{runOnJS,openMenuCallback}=this.__closure;return runOnJS(openMenuCallback)();}';
    var5['code'] = var8;
    var _closure1_slot14 = var5;
    var5 = {};
    var8 = 'function MenuTsx3(){const{runOnJS,closeMenuCallback}=this.__closure;return runOnJS(closeMenuCallback)();}';
    var5['code'] = var8;
    var _closure1_slot15 = var5;
    var5 = {};
    var8 = "function MenuTsx4(){const{visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY}=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};}";
    var5['code'] = var8;
    var _closure1_slot16 = var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Menu/native/Menu.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 10;
    var3['MENU_OFFSET'] = var5;
    var3['MenuContext'] = var4;
    var2 = function Menu(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var16 = var2.toggleButtonRef;
            var _closure2_slot0 = var16;
            var1 = var2.onClose;
            var3 = var2.position;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = 'right';
case 4:
            var _closure2_slot1 = var3;
            var3 = var2.align;
            if(!(var3 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = 'start';
case 6:
            var _closure2_slot2 = var3;
            var3 = var2.offset;
            var _closure2_slot3 = var3;
            var18 = var2.offsetAnimated;
            var _closure2_slot4 = var18;
            var8 = var2.style;
            var14 = var2.children;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var2 = _closure1_slot10;
            var7 = var2.bind(var4)();
            var15 = _closure1_slot4;
            var3 = var15.useContext;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 9;
            var2 = var10[var2];
            var2 = var13.bind(var4)(var2);
            var2 = var2.AccessibilityPreferencesContext;
            var2 = var3.bind(var15)(var2);
            var2 = var2.reducedMotion;
            var21 = var2.enabled;
            _closure2_slot5 = var21;
            var3 = _closure1_slot1;
            var2 = 10;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            _closure2_slot6 = var2;
            var2 = 11;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            _closure2_slot7 = var2;
            var2 = var15.useRef;
            var5 = null;
            var2 = var2.bind(var15)(var5);
            _closure2_slot8 = var2;
            var2 = var15.useState;
            var6 = var2.bind(var15)(var5);
            var3 = _closure1_slot3;
            var2 = 2;
            var17 = var3.bind(var4)(var6, var2);
            var6 = 0;
            var9 = var17[var6];
            _closure2_slot9 = var9;
            var3 = 1;
            var17 = var17[var3];
            _closure2_slot10 = var17;
            var17 = 8;
            var19 = var10[var17];
            var20 = var13.bind(var4)(var19);
            var19 = var20.useSharedValue;
            var23 = var19.bind(var20)(var6);
            _closure2_slot11 = var23;
            var10 = var10[var17];
            var19 = var13.bind(var4)(var10);
            var13 = var19.useSharedValue;
            var10 = {'width': 0, 'height': 0};
            var19 = var13.bind(var19)(var10);
            _closure2_slot12 = var19;
            var13 = var15.useLayoutEffect;
            var10 = new Array(2);
            var10[0] = var16;
            var10[1] = var9;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var4 = var5 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure2_slot0;
                    var3 = var4.current;
case 8:
                    var3 = var5 != var3;
                    if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 4:
                    var4 = _closure2_slot9;
                    var3 = var5 == var4;
case 10:
                    if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.runOnUI;
                    var3 = _closure1_slot13;
                    var4 = var4.bind(var5)(var3);
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot10;
                    var2 = var4.bind(var1)(var3, var2);
case 11:
                    return var1;
                }
            };
            var9 = var13.bind(var15)(var9, var10);
            var9 = function openMenuCallback() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 13;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var5 = var3.AccessibilityAnnouncer;
                    var4 = var5.announce;
                    var3 = 14;
                    var6 = var9[var3];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.t;
                    var3 = var3.ZqK0uL;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4.bind(var5)(var3);
case 13:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setAccessibilityFocus;
                    var2 = {};
                    var5 = _closure2_slot8;
                    var2['ref'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            _closure2_slot13 = var9;
            if(!(var5 == var1)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = _closure1_slot6;
case 15:
            _closure2_slot14 = var1;
            var16 = function handleClose() {
                var4 = _closure2_slot11;
                var3 = var4.set;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 16;
                var5 = var13[var1];
                var1 = undefined;
                var9 = var12.bind(var1)(var5);
                var8 = var9.withTiming;
                var16 = _closure1_slot9;
                var6 = function t() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot14;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var5 = {};
                var11 = 8;
                var11 = var13[var11];
                var11 = var12.bind(var1)(var11);
                var11 = var11.runOnJS;
                var5['runOnJS'] = var11;
                var10 = _closure2_slot14;
                var5['closeMenuCallback'] = var10;
                var6['__closure'] = var5;
                var5 = 5879184549724.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot15;
                var6['__initData'] = var2;
                var17 = 0;
                var15 = 'respect-motion-settings';
                var18 = var9;
                var14 = var6;
                var2 = var18[var8](var17, var16, var15, var14, var13);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            _closure2_slot15 = var16;
            var15 = function handleDismiss() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.setAccessibilityFocus;
                var3 = {};
                var6 = _closure2_slot0;
                var3['ref'] = var6;
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot15;
                var2 = var2.bind(var1)();
                return var1;
            };
            var22 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var9 = var5[var1];
            var10 = var22.bind(var4)(var9);
            var9 = var10.generateBoxShadowStyle;
            var1 = var5[var1];
            var1 = var22.bind(var4)(var1);
            var1 = var1.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
            var13 = var9.bind(var10)(var1);
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var8 = 'left';
                    if(!(var8 !== var1)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var2 = _closure2_slot1;
                    var9 = 'row';
                    var1 = 'right';
                    if(!(var1 === var2)) { _fun0005_ip = 19; continue _fun0005 }
case 17:
                    var9 = 'column';
case 19:
                    var1 = _closure2_slot9;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var1 = _closure2_slot9;
                    var3 = var1.pageX;
                    var1 = _closure2_slot9;
                    var2 = var1.pageY;
                    var10 = _closure2_slot1;
                    var4 = 'right';
                    var1 = 0;
                    if(!(var4 === var10)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var4 = _closure2_slot9;
                    var1 = var4.width;
case 22:
                    var10 = var3 + var1;
                    var4 = _closure2_slot1;
                    var3 = 'bottom';
                    var1 = 0;
                    if(!(var3 === var4)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var3 = _closure2_slot9;
                    var1 = var3.height;
case 24:
                    var1 = var2 + var1;
                    var11 = _closure2_slot2;
                    var4 = 'end';
                    var3 = var10;
                    var2 = var1;
                    if(!(var4 === var11)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var11 = 'row';
                    var4 = 0;
                    if(!(var11 === var9)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var11 = _closure2_slot9;
                    var4 = var11.width;
case 28:
                    var4 = var10 + var4;
                    var10 = 'column';
                    var5 = 0;
                    if(!(var10 === var9)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var10 = _closure2_slot9;
                    var5 = var10.height;
case 30:
                    var2 = var1 + var5;
                    var3 = var4;
case 26:
                    var1 = {};
                    var1['x'] = var3;
                    var1['y'] = var2;
                    _fun0005_ip = 32; continue _fun0005;
case 20:
                    var1 = {'x': 0, 'y': 0};
case 32:
                    var2 = _closure2_slot7;
                    var5 = var2.height;
                    var2 = _closure2_slot1;
                    if(!(var8 !== var2)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var2 = 'row';
                    var3 = var8;
                    if(!(var2 === var9)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var4 = _closure2_slot2;
                    var2 = 'end';
                    var3 = var8;
                    if(!(var2 === var4)) { _fun0005_ip = 35; continue _fun0005 }
case 33:
                    var3 = 'right';
case 35:
                    var2 = _closure2_slot1;
                    var4 = 'top';
                    if(!(var4 !== var2)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var10 = 'column';
                    var2 = var4;
                    if(!(var10 === var9)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var11 = _closure2_slot2;
                    var10 = 'end';
                    var2 = var4;
                    if(!(var10 === var11)) { _fun0005_ip = 39; continue _fun0005 }
case 37:
                    var2 = 'bottom';
case 39:
                    if(!(var8 !== var3)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var8 = _closure2_slot7;
                    var10 = var8.width;
                    var8 = var1.x;
                    var11 = var10 - var8;
                    _fun0005_ip = 43; continue _fun0005;
case 41:
                    var11 = var1.x;
case 43:
                    var4 = var4 === var2;
                    var1 = var1.y;
                    if(var4) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var10 = var5 - var1;
                    _fun0005_ip = 46; continue _fun0005;
case 44:
                    var10 = var1;
case 46:
                    var1 = _closure2_slot3;
                    if(!(var6 == var1)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var8 = 'column';
                    var6 = 0;
                    if(!(var8 === var9)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var6 = 10;
case 49:
                    var6 = var11 + var6;
                    var8 = 'row';
                    var1 = 0;
                    if(!(var8 === var9)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var1 = 10;
case 51:
                    var1 = var10 + var1;
                    _fun0005_ip = 53; continue _fun0005;
case 47:
                    var8 = _closure2_slot3;
                    var9 = var8.x;
                    var6 = var11 + var9;
                    var8 = var8.y;
                    var1 = var10 + var8;
case 53:
                    var5 = var5 - var1;
                    var7 = _closure2_slot6;
                    if(var4) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                    var4 = var7.top;
                    _fun0005_ip = 56; continue _fun0005;
case 54:
                    var4 = var7.bottom;
case 56:
                    var5 = var5 - var4;
                    var4 = 12;
                    var5 = var5 - var4;
                    var4 = {};
                    var4[var3] = var6;
                    var4[var2] = var1;
                    var1 = 'maxHeight';
                    var4[var1] = var5;
                    var1 = new Array(3);
                    var1[0] = var4;
                    var1[1] = var3;
                    var1[2] = var2;
                    return var1;
                }
            };
            var10 = var1.bind(var4)();
            var9 = _closure1_slot3;
            var1 = 3;
            var1 = var9.bind(var4)(var10, var1);
            var10 = var1[var6];
            var20 = var1[var3];
            _closure2_slot16 = var20;
            var9 = var1[var2];
            _closure2_slot17 = var9;
            var1 = var5[var17];
            var3 = var22.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function V() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot11;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['opacity'] = var2;
                    var2 = _closure2_slot5;
                    if(var2) { _fun0006_ip = 57; continue _fun0006 }
case 5:
                    var3 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 8;
                    var2 = var2[var8];
                    var10 = undefined;
                    var15 = var5.bind(var10)(var2);
                    var14 = var15.interpolate;
                    var5 = _closure2_slot11;
                    var2 = var5.get;
                    var9 = var2.bind(var5)();
                    var7 = _closure2_slot16;
                    var11 = 1;
                    var2 = 'left';
                    var5 = var11;
                    if(!(var2 === var7)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var5 = -1;
case 58:
                    var7 = _closure2_slot12;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var2.width;
                    var2 = var5 * var2;
                    var7 = new Array(2);
                    var13 = 4;
                    var2 = var2 / var13;
                    var7[0] = var2;
                    var2 = _closure2_slot4;
                    var12 = null;
                    var5 = var12 == var2;
                    var2 = undefined;
                    if(var5) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var16 = _closure2_slot4;
                    var5 = var16.get;
                    var5 = var5.bind(var16)();
                    var16 = var12 == var5;
                    var2 = undefined;
                    if(var16) { _fun0006_ip = 60; continue _fun0006 }
case 62:
                    var2 = var5.x;
case 60:
                    var16 = var12 != var2;
                    var2 = 0;
                    if(!var16) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                    var17 = _closure2_slot4;
                    var16 = var17.get;
                    var17 = var16.bind(var17)();
                    var18 = var12 == var17;
                    var16 = undefined;
                    if(var18) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                    var16 = var17.x;
case 65:
                    var2 = var16;
case 63:
                    var7[1] = var2;
                    var2 = [0, 1];
                    var2 = var14.bind(var15)(var9, var2, var7);
                    var3['translateX'] = var2;
                    var2 = new Array(3);
                    var2[0] = var3;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var9 = var7.bind(var10)(var6);
                    var8 = var9.interpolate;
                    var7 = _closure2_slot11;
                    var6 = var7.get;
                    var7 = var6.bind(var7)();
                    var14 = _closure2_slot17;
                    var6 = 'top';
                    if(!(var6 === var14)) { _fun0006_ip = 67; continue _fun0006 }
case 39:
                    var11 = -1;
case 67:
                    var14 = _closure2_slot12;
                    var6 = var14.get;
                    var6 = var6.bind(var14)();
                    var6 = var6.height;
                    var11 = var11 * var6;
                    var6 = new Array(2);
                    var11 = var11 / var13;
                    var6[0] = var11;
                    var11 = _closure2_slot4;
                    var13 = var12 == var11;
                    var11 = undefined;
                    if(var13) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                    var14 = _closure2_slot4;
                    var13 = var14.get;
                    var13 = var13.bind(var14)();
                    var14 = var12 == var13;
                    var11 = undefined;
                    if(var14) { _fun0006_ip = 68; continue _fun0006 }
case 70:
                    var11 = var13.y;
case 68:
                    var11 = var12 != var11;
                    var5 = 0;
                    if(!var11) { _fun0006_ip = 71; continue _fun0006 }
case 72:
                    var13 = _closure2_slot4;
                    var11 = var13.get;
                    var11 = var11.bind(var13)();
                    var12 = var12 == var11;
                    var10 = undefined;
                    if(var12) { _fun0006_ip = 53; continue _fun0006 }
case 73:
                    var10 = var11.y;
case 53:
                    var5 = var10;
case 71:
                    var6[1] = var5;
                    var5 = [0, 1];
                    var5 = var8.bind(var9)(var7, var5, var6);
                    var3['translateY'] = var5;
                    var2[1] = var3;
                    var3 = {};
                    var5 = _closure2_slot11;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = 2;
                    var5 = var5 / var4;
                    var4 = 0.5;
                    var4 = var5 + var4;
                    var3['scale'] = var4;
                    var2[2] = var3;
                    _fun0006_ip = 74; continue _fun0006;
case 57:
                    var2 = new Array(0);
case 74:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var6['visible'] = var23;
            var6['useReducedMotion'] = var21;
            var21 = var5[var17];
            var21 = var22.bind(var4)(var21);
            var21 = var21.interpolate;
            var6['interpolate'] = var21;
            var6['dirX'] = var20;
            var6['size'] = var19;
            var6['offsetAnimated'] = var18;
            var6['dirY'] = var9;
            var1['__closure'] = var6;
            var6 = 7884133597410.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot16;
            var1['__initData'] = var6;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var6 = _closure1_slot1;
            var1 = 18;
            var1 = var5[var1];
            var2 = var6.bind(var4)(var1);
            var1 = {'style': null, 'accessibilityViewIsModal': true, 'importantForAccessibility': 'yes'};
            var19 = var7.backdrop;
            var18 = new Array(1);
            var18[0] = var19;
            var1['style'] = var18;
            var1['onTouchDown'] = var15;
            var1['onAccessibilityEscape'] = var15;
            var5 = var5[var17];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var17 = 'list';
            var5['accessibilityRole'] = var17;
            var17 = var7.menu;
            var7 = new Array(5);
            var7[0] = var17;
            var7[1] = var13;
            var7[2] = var10;
            var7[3] = var9;
            var7[4] = var8;
            var5['style'] = var7;
            var7 = function onLayout(arg1) {
                var4 = arg1;
                var3 = _closure2_slot12;
                var2 = var3.set;
                var1 = {};
                var5 = var4.nativeEvent;
                var5 = var5.layout;
                var5 = var5.width;
                var1['width'] = var5;
                var4 = var4.nativeEvent;
                var4 = var4.layout;
                var4 = var4.height;
                var1['height'] = var4;
                var1 = var2.bind(var3)(var1);
                var4 = _closure2_slot11;
                var3 = var4.set;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 19;
                var5 = var13[var1];
                var1 = undefined;
                var9 = var12.bind(var1)(var5);
                var8 = var9.withSpring;
                var16 = _closure1_slot8;
                var6 = function n() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot13;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var5 = {};
                var11 = 8;
                var11 = var13[var11];
                var11 = var12.bind(var1)(var11);
                var11 = var11.runOnJS;
                var5['runOnJS'] = var11;
                var10 = _closure2_slot13;
                var5['openMenuCallback'] = var10;
                var6['__closure'] = var5;
                var5 = 14966618105405.0;
                var6['__workletHash'] = var5;
                var2 = _closure1_slot14;
                var6['__initData'] = var2;
                var17 = 1;
                var15 = 'respect-motion-settings';
                var18 = var9;
                var14 = var6;
                var2 = var18[var8](var17, var16, var15, var14, var13);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['onLayout'] = var7;
            var8 = _closure1_slot5;
            var7 = {};
            var9 = _closure1_slot11;
            var10 = var9.Provider;
            var9 = {};
            var13 = {};
            var13['menuClose'] = var16;
            var13['menuDismiss'] = var15;
            var9['value'] = var13;
            var12 = _closure1_slot4;
            var13 = var12.Children;
            var12 = var13.map;
            var11 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var3 = 0;
                    var2 = arg2;
                    var1 = var5;
                    if(!(var3 === var2)) { _fun0007_ip = 75; continue _fun0007 }
case 18:
                    var4 = _closure1_slot4;
                    var3 = var4.isValidElement;
                    var3 = var3.bind(var4)(var5);
                    var1 = var5;
                    if(!var3) { _fun0007_ip = 75; continue _fun0007 }
case 76:
                    var4 = _closure1_slot4;
                    var3 = var4.cloneElement;
                    var2 = {};
                    var6 = _closure2_slot8;
                    var2['ref'] = var6;
                    var1 = var3.bind(var4)(var5, var2);
case 75:
                    return var1;
                }
            };
            var11 = var12.bind(var13)(var14, var11);
            var9['children'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var7['children'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['Menu'] = var2;
    return var1;
})();