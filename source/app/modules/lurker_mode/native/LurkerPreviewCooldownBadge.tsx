// app/modules/lurker_mode/native/LurkerPreviewCooldownBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var13.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var5 = 2;
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var9 = var9.View;
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.jsx;
    var _closure1_slot6 = var9;
    var4 = var4.Math;
    var4 = var4.PI;
    var5 = var5 * var4;
    var4 = 6;
    var5 = var5 * var4;
    var _closure1_slot7 = var5;
    var9 = {};
    var5 = 1000;
    var9['duration'] = var5;
    var5 = 4;
    var10 = var7[var5];
    var10 = var6.bind(var1)(var10);
    var10 = var10.Easing;
    var10 = var10.linear;
    var9['easing'] = var10;
    var _closure1_slot8 = var9;
    var5 = var7[var5];
    var10 = var13.bind(var1)(var5);
    var9 = var10.createAnimatedComponent;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Circle;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot9 = var5;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {'borderRadius': 20, 'backgroundColor': null, 'position': 'absolute'};
    var12 = 7;
    var11 = var7[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var10['backgroundColor'] = var11;
    var11 = 'absolute';
    var14 = 8;
    var15 = var7[var14];
    var15 = var6.bind(var1)(var15);
    var15 = var15.BADGE_PADDING;
    var15 = -var15;
    var10['bottom'] = var15;
    var15 = var7[var14];
    var15 = var6.bind(var1)(var15);
    var15 = var15.BADGE_PADDING;
    var15 = -var15;
    var10['right'] = var15;
    var14 = var7[var14];
    var14 = var6.bind(var1)(var14);
    var14 = var14.BADGE_PADDING;
    var10['padding'] = var14;
    var14 = 22;
    var10['height'] = var14;
    var10['width'] = var14;
    var14 = 'center';
    var10['alignItems'] = var14;
    var10['justifyContent'] = var14;
    var4['outerRing'] = var10;
    var10 = {'borderRadius': 20, 'backgroundColor': null, 'height': 16, 'width': 16, 'alignItems': 'center', 'justifyContent': 'center'};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_STRONG;
    var10['backgroundColor'] = var12;
    var4['innerFill'] = var10;
    var10 = {};
    var10['position'] = var11;
    var12 = {};
    var11 = '90deg';
    var12['rotate'] = var11;
    var11 = new Array(2);
    var11[0] = var12;
    var12 = {};
    var13 = -1;
    var12['scaleX'] = var13;
    var11[1] = var12;
    var10['transform'] = var11;
    var4['progressRing'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var5 = 'function LurkerPreviewCooldownBadgeTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE*(1-animatedProgress.get())};}';
    var4['code'] = var5;
    var _closure1_slot11 = var4;
    var5 = var8.memo;
    var4 = function LurkerPreviewCooldownBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var11 = var3.expiresAt;
            var _closure2_slot0 = var11;
            var2 = var3.totalDurationMs;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 9;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var2 = var5.LURKER_PREVIEW_PERSIST_MS;
case 2:
            var _closure2_slot1 = var2;
            var6 = var3.style;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot10;
            var9 = var3.bind(var4)();
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 10;
            var5 = var13[var5];
            var12 = var3.bind(var4)(var5);
            var10 = var12.useToken;
            var7 = _closure1_slot1;
            var5 = 7;
            var5 = var13[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.colors;
            var5 = var5.BACKGROUND_BRAND;
            var12 = var10.bind(var12)(var5);
            var15 = _closure1_slot4;
            var10 = var15.useCallback;
            var5 = new Array(2);
            var5[0] = var11;
            var5[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var2 = var3 - var2;
                    var1 = _closure2_slot1;
                    var3 = var2 / var1;
                    var2 = 0;
                    if(!(!(var3 < var2))) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = 1;
                    if(!(!(var3 > var1))) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var3;
case 6:
                    var2 = var1;
case 4:
                    var1 = 0.9;
                    var1 = var1 * var2;
                    return var1;
                }
            };
            var5 = var10.bind(var15)(var2, var5);
            _closure2_slot2 = var5;
            var2 = 4;
            var10 = var13[var2];
            var14 = var3.bind(var4)(var10);
            var11 = var14.useSharedValue;
            var10 = var5.bind(var4)();
            var10 = var11.bind(var14)(var10);
            _closure2_slot3 = var10;
            var14 = var15.useEffect;
            var11 = new Array(2);
            var11[0] = var10;
            var11[1] = var5;
            var5 = function() {
                var4 = _closure2_slot3;
                var3 = var4.set;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 11;
                var7 = var7[var5];
                var5 = undefined;
                var9 = var8.bind(var5)(var7);
                var8 = var9.withTiming;
                var6 = _closure2_slot2;
                var7 = var6.bind(var5)();
                var6 = _closure1_slot8;
                var2 = 'animate-always';
                var2 = var8.bind(var9)(var7, var6, var2);
                var2 = var3.bind(var4)(var2);
                var2 = global;
                var4 = var2.setInterval;
                var3 = function() {
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var6 = var6[var1];
                    var1 = undefined;
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.withTiming;
                    var5 = _closure2_slot2;
                    var6 = var5.bind(var1)();
                    var5 = _closure1_slot8;
                    var2 = 'animate-always';
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = 1000;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearInterval;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var5 = var14.bind(var15)(var5, var11);
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useAnimatedProps;
            var1 = function p() {
                var1 = {};
                var3 = _closure1_slot7;
                var4 = _closure2_slot3;
                var2 = var4.get;
                var4 = var2.bind(var4)();
                var2 = 1;
                var2 = var2 - var4;
                var2 = var3 * var2;
                var1['strokeDashoffset'] = var2;
                return var1;
            };
            var5 = {};
            var11 = _closure1_slot7;
            var5['PROGRESS_CIRCUMFERENCE'] = var11;
            var5['animatedProgress'] = var10;
            var1['__closure'] = var5;
            var5 = 7162520447613.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot11;
            var1['__initData'] = var5;
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {'style': null, 'pointerEvents': 'none', 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var14 = var9.outerRing;
            var5 = new Array(2);
            var5[0] = var14;
            var5[1] = var6;
            var1['style'] = var5;
            var5 = {};
            var6 = var9.innerFill;
            var5['style'] = var6;
            var6 = 5;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'width': 16, 'height': 16};
            var9 = var9.progressRing;
            var6['style'] = var9;
            var9 = _closure1_slot9;
            var8 = {'cx': 8, 'cy': 8, 'r': 6, 'fill': 'none', 'stroke': null, 'strokeWidth': 4, 'strokeDasharray': null, 'strokeLinecap': 'butt'};
            var8['stroke'] = var12;
            var8['strokeDasharray'] = var11;
            var8['animatedProps'] = var10;
            var8 = var3.bind(var4)(var9, var8);
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5['children'] = var6;
            var5 = var3.bind(var4)(var2, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/lurker_mode/native/LurkerPreviewCooldownBadge.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useHasExpired(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var7 = _closure1_slot4;
            var5 = var7.useState;
            var1 = null;
            var8 = var5.bind(var7)(var1);
            var6 = _closure1_slot3;
            var5 = undefined;
            var2 = 2;
            var6 = var6.bind(var5)(var8, var2);
            var2 = 0;
            var2 = var6[var2];
            var5 = 1;
            var5 = var6[var5];
            var _closure2_slot1 = var5;
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var3;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var2 = undefined;
                    return var2;
case 8:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.max;
                    var4 = _closure2_slot0;
                    var7 = var2.Date;
                    var3 = var7.now;
                    var3 = var3.bind(var7)();
                    var4 = var4 - var3;
                    var3 = 0;
                    var5 = var5.bind(var6)(var3, var4);
                    var4 = var2.setTimeout;
                    var3 = undefined;
                    var2 = function() {
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2, var5);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var1 = var1 != var3;
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = var2 === var3;
case 10:
            return var1;
        }
    };
    var3['useHasExpired'] = var2;
    return var1;
})();