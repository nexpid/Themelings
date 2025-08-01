// app/design/components/Sticky/native/StickyHeader.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function useStickyHeaderStyles(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var7;
            var9 = undefined;
            if(!(var6 === var9)) { _fun0001_ip = 20; continue _fun0001 }
 18:
            var6 = true;
 20:
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var9;
            var5 = _closure1_slot3;
            var3 = var5.useContext;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 5;
            var2 = var10[var2];
            var2 = var8.bind(var9)(var2);
            var2 = var2.AccessibilityPreferencesContext;
            var2 = var3.bind(var5)(var2);
            var2 = var2.reducedMotion;
            var11 = var2.enabled;
            _closure2_slot2 = var11;
            var2 = 2;
            var2 = var10[var2];
            var3 = var8.bind(var9)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function l() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot2;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var7 = 0;
                    var5 = var3 > var7;
                    var3 = 'relative';
                    if(var1) { _fun0002_ip = 163; continue _fun0002 }
 38:
                    var1 = var3;
                    if(!var5) { _fun0002_ip = 48; continue _fun0002 }
 44:
                    var1 = 'absolute';
 48:
                    var2['position'] = var1;
                    var6 = {};
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 6;
                    var9 = var9[var8];
                    var8 = undefined;
                    var11 = var10.bind(var8)(var9);
                    var10 = var11.withTiming;
                    var8 = _closure2_slot1;
                    var9 = 0;
                    if(var8) { _fun0002_ip = 109; continue _fun0002 }
 93:
                    var12 = _closure2_slot0;
                    var8 = var12.get;
                    var8 = var8.bind(var12)();
                    var9 = -var8;
 109:
                    var8 = {};
                    var12 = _closure1_slot6;
                    var8['duration'] = var12;
                    var1 = _closure1_slot5;
                    var8['easing'] = var1;
                    var1 = 'animate-always';
                    var1 = var10.bind(var11)(var9, var8, var1);
                    var6['translateY'] = var1;
                    var1 = new Array(1);
                    var1[0] = var6;
                    var2['transform'] = var1;
                    var1 = var2;
                    _fun0002_ip = 255; continue _fun0002;
 163:
                    if(!var5) { _fun0002_ip = 170; continue _fun0002 }
 166:
                    var3 = 'absolute';
 170:
                    var2['position'] = var3;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 6;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var8.bind(var5)(var6);
                    var5 = var6.withTiming;
                    var4 = _closure2_slot1;
                    var7 = 0;
                    if(!var4) { _fun0002_ip = 216; continue _fun0002 }
 213:
                    var7 = 1;
 216:
                    var4 = {};
                    var8 = _closure1_slot6;
                    var4['duration'] = var8;
                    var3 = _closure1_slot5;
                    var4['easing'] = var3;
                    var3 = 'animate-always';
                    var3 = var5.bind(var6)(var7, var4, var3);
                    var2['opacity'] = var3;
                    var1 = var2;
 255:
                    return var1;
                }
            };
            var5 = {};
            var5['useReducedMotion'] = var11;
            var5['headerHeight'] = var7;
            var7 = 6;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.withTiming;
            var5['withTiming'] = var7;
            var5['show'] = var6;
            var6 = _closure1_slot6;
            var5['SHOW_DURATION'] = var6;
            var6 = _closure1_slot5;
            var5['SHOW_EASING'] = var6;
            var1['__closure'] = var5;
            var5 = 10390349288548.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot8;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var12 = 0;
    var8 = var7[var12];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var11 = 1;
    var5 = var7[var11];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.Easing;
    var9 = var10.bezier;
    var16 = 0.4;
    var14 = 0.2;
    var17 = var10;
    var15 = 0;
    var13 = var11;
    var5 = var17[var9](var16, var15, var14, var13, var12);
    var _closure1_slot5 = var5;
    var5 = 300;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'zIndex': 1, 'width': '100%', 'top': 0};
    var5['container'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var5 = {};
    var8 = "function StickyHeaderNativeTsx1(){const{useReducedMotion,headerHeight,withTiming,show,SHOW_DURATION,SHOW_EASING}=this.__closure;return useReducedMotion?{position:headerHeight.get()>0?'absolute':'relative',opacity:withTiming(show?1:0,{duration:SHOW_DURATION,easing:SHOW_EASING},'animate-always')}:{position:headerHeight.get()>0?'absolute':'relative',transform:[{translateY:withTiming(show?0:-headerHeight.get(),{duration:SHOW_DURATION,easing:SHOW_EASING},'animate-always')}]};}";
    var5['code'] = var8;
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Sticky/native/StickyHeader.native.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function StickyHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var7 = var1.show;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0003_ip = 19; continue _fun0003 }
 17:
            var7 = true;
 19:
            var _closure2_slot0 = var7;
            var5 = var1.children;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot7;
            var8 = var3.bind(var4)();
            var9 = _closure1_slot3;
            var6 = var9.useContext;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 4;
            var3 = var10[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.StickyContext;
            var6 = var6.bind(var9)(var3);
            var3 = var6.headerHeight;
            var12 = var6.setHeaderHeight;
            _closure2_slot1 = var12;
            var6 = var6.setShowHeader;
            _closure2_slot2 = var6;
            var13 = _closure1_slot3;
            var11 = var13.useRef;
            var9 = -1;
            var9 = var11.bind(var13)(var9);
            _closure2_slot3 = var9;
            var13 = _closure1_slot3;
            var11 = var13.useEffect;
            var9 = new Array(2);
            var9[0] = var7;
            var9[1] = var6;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    if(var3) { _fun0004_ip = 29; continue _fun0004 }
 12:
                    var5 = _closure2_slot2;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    _fun0004_ip = 69; continue _fun0004;
 29:
                    var3 = _closure2_slot3;
                    var2 = global;
                    var6 = var2.setTimeout;
                    var5 = _closure1_slot6;
                    var4 = undefined;
                    var2 = function() {
                        var3 = _closure2_slot2;
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var6.bind(var4)(var2, var5);
                    var3['current'] = var2;
 69:
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var1 = _closure2_slot3;
                        var2 = var1.current;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var6 = var11.bind(var13)(var6, var9);
            var11 = _closure1_slot3;
            var9 = var11.useCallback;
            var6 = new Array(1);
            var6[0] = var12;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.height;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var6 = var9.bind(var11)(var2, var6);
            var2 = _closure1_slot9;
            var9 = var2.bind(var4)(var3, var7);
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var1 = 2;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var10 = var8.container;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var1['style'] = var8;
            var1['onLayout'] = var6;
            var6 = !var7;
            var1['accessibilityElementsHidden'] = var6;
            var6 = 'no-hide-descendants';
            if(!var7) { _fun0003_ip = 290; continue _fun0003 }
 286:
            var6 = 'auto';
 290:
            var1['importantForAccessibility'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['StickyHeader'] = var4;
    var3['useStickyHeaderStyles'] = var2;
    return var1;
})();