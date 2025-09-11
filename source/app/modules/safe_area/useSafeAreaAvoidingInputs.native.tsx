// app/modules/safe_area/useSafeAreaAvoidingInputs.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _calculateScrollOffset() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    var3 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 277; continue _fun0001 }
 16:
                    var6 = null;
                    if(!(var6 != var5)) { _fun0001_ip = 239; continue _fun0001 }
 25:
                    var4 = var5.type;
                    var2 = 'toRef';
                    if(!(var2 !== var4)) { _fun0001_ip = 88; continue _fun0001 }
 40:
                    var2 = 'toValue';
                    if(!(var2 !== var4)) { _fun0001_ip = 80; continue _fun0001 }
 48:
                    var2 = 'toBottom';
                    if(!(var2 !== var4)) { _fun0001_ip = 63; continue _fun0001 }
 58:
                    var2 = undefined;
                    return var2;
 63:
                    var2 = global;
                    var2 = var2.Number;
                    var2 = var2.MAX_SAFE_INTEGER;
                    return var2;
 80:
                    var2 = var5.value;
                    return var2;
 88:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var2 = var7[var2];
                    var7 = undefined;
                    var9 = var8.bind(var7)(var2);
                    var8 = var9.measureViewRefInWindow;
                    var2 = var5.ref;
                    var2 = var8.bind(var9)(var2);
                    SaveGenerator(address=133);
 131:
                    return var2;
 133:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 236; continue _fun0001 }
 139:
                    var8 = var5.extraOffset;
                    var9 = var6 != var8;
                    var5 = 0;
                    if(!var9) { _fun0001_ip = 157; continue _fun0001 }
 154:
                    var5 = var8;
 157:
                    if(!(var6 != var2)) { _fun0001_ip = 199; continue _fun0001 }
 161:
                    var6 = var2.y;
                    var8 = var3.y;
                    var3 = var3.height;
                    var3 = var8 + var3;
                    var6 = var6 - var3;
                    var3 = var2.height;
                    var3 = var6 + var3;
                    var3 = var3 + var5;
                    _fun0001_ip = 233; continue _fun0001;
 199:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 3;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.spacing;
                    var4 = var4.PX_16;
                    var3 = var4 + var5;
 233:
                    return var3;
 236:
                    return var2;
 239:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.spacing;
                    var2 = var2.PX_16;
                    return var2;
 277:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/useSafeAreaAvoidingInputs.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSafeAreaAvoidingInputs(arg1) {
        var2 = arg1;
        var7 = var2.insets;
        var _closure2_slot0 = var7;
        var3 = var2.inputs;
        var _closure2_slot1 = var3;
        var6 = var2.scrollViewRef;
        var _closure2_slot2 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useRef;
        var4 = var4.bind(var5)(var3);
        var _closure2_slot3 = var4;
        var8 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure2_slot3;
            var1 = _closure2_slot1;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var8.bind(var5)(var3, var4);
        var4 = var5.useCallback;
        var8 = _closure1_slot3;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 698; continue _fun0002 }
 12:
                    var2 = _closure2_slot2;
                    var12 = var2.current;
                    var2 = _closure2_slot3;
                    var4 = var2.current;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.ref;
                            var3 = var1.current;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0003_ip = 34; continue _fun0003 }
 24:
                            var2 = var3.isFocused;
                            var1 = var2.bind(var3)();
 34:
                            return var1;
                        }
                    };
                    var7 = var3.bind(var4)(var2);
                    var11 = null;
                    if(!(var11 != var7)) { _fun0002_ip = 681; continue _fun0002 }
 60:
                    if(!(var11 != var12)) { _fun0002_ip = 681; continue _fun0002 }
 67:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var13 = 4;
                    var2 = var2[var13];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.measureViewRefInWindow;
                    var2 = var7.ref;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=112);
 110:
                    return var2;
 112:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 695; continue _fun0002 }
 121:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var13];
                    var10 = var4.bind(var8)(var3);
                    var4 = var10.measureViewRefInView;
                    var3 = var7.ref;
                    var3 = var4.bind(var10)(var3, var12);
                    SaveGenerator(address=159);
 157:
                    return var3;
 159:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 692; continue _fun0002 }
 168:
                    if(!(var11 != var2)) { _fun0002_ip = 681; continue _fun0002 }
 175:
                    if(!(var11 != var3)) { _fun0002_ip = 681; continue _fun0002 }
 182:
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var13];
                    var10 = var10.bind(var8)(var4);
                    var4 = var10.measureViewInWindow;
                    var4 = var4.bind(var10)(var12);
                    SaveGenerator(address=214);
 212:
                    return var4;
 214:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0002_ip = 689; continue _fun0002 }
 223:
                    var7 = var7.offset;
                    var5 = function calculateScrollOffset() {
                        var1 = undefined;
                        var4 = _closure1_slot5;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var5 = var5.bind(var8)(var7, var2);
                    SaveGenerator(address=246);
 244:
                    return var5;
 246:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 686; continue _fun0002 }
 255:
                    var14 = global;
                    var7 = var14.Number;
                    var7 = var7.MAX_SAFE_INTEGER;
                    if(!(var5 === var7)) { _fun0002_ip = 314; continue _fun0002 }
 273:
                    var7 = _closure2_slot2;
                    var12 = var7.current;
                    if(!(var11 != var12)) { _fun0002_ip = 681; continue _fun0002 }
 289:
                    var10 = var12.scrollToEnd;
                    var7 = {};
                    var13 = true;
                    var7['animated'] = var13;
                    var7 = var10.bind(var12)(var7);
                    _fun0002_ip = 681; continue _fun0002;
 314:
                    var7 = {};
                    var10 = _closure2_slot0;
                    var7['insets'] = var10;
                    var7['inputInScrollView'] = var3;
                    var7['inputInWindow'] = var2;
                    var7['scrollOffset'] = var5;
                    var7['scrollView'] = var4;
                    var10 = var7.scrollView;
                    var12 = var10.y;
                    var10 = var7.scrollView;
                    var10 = var10.height;
                    var13 = var12 + var10;
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 2;
                    var9 = var12[var9];
                    var15 = var10.bind(var8)(var9);
                    var12 = var15.getWindowDimensions;
                    var10 = {};
                    var9 = true;
                    var10['ignoreKeyboard'] = var9;
                    var10 = var12.bind(var15)(var10);
                    var12 = var10.height;
                    var10 = var7.insets;
                    var10 = var10.bottom;
                    var12 = var12 - var10;
                    var10 = var7.inputInWindow;
                    var15 = var10.y;
                    var10 = var7.inputInWindow;
                    var10 = var10.height;
                    var15 = var15 + var10;
                    var10 = var7.scrollOffset;
                    var15 = var15 + var10;
                    var10 = undefined;
                    if(!(!(var15 <= var12))) { _fun0002_ip = 557; continue _fun0002 }
 473:
                    var15 = var14.Math;
                    var14 = var15.max;
                    var13 = var13 - var12;
                    var12 = 0;
                    var13 = var14.bind(var15)(var12, var13);
                    var12 = var7.scrollView;
                    var12 = var12.height;
                    var12 = var12 - var13;
                    var13 = var7.inputInScrollView;
                    var14 = var13.y;
                    var13 = var7.inputInScrollView;
                    var13 = var13.height;
                    var13 = var14 + var13;
                    var7 = var7.scrollOffset;
                    var7 = var13 + var7;
                    var10 = undefined;
                    if(!(!(var7 <= var12))) { _fun0002_ip = 557; continue _fun0002 }
 553:
                    var10 = var7 - var12;
 557:
                    if(!(var11 != var10)) { _fun0002_ip = 681; continue _fun0002 }
 561:
                    var7 = _closure2_slot2;
                    var14 = var7.current;
                    var12 = var11 == var14;
                    var6 = undefined;
                    if(var12) { _fun0002_ip = 621; continue _fun0002 }
 579:
                    var12 = var14.scrollTo;
                    var12 = var11 == var12;
                    var6 = undefined;
                    if(var12) { _fun0002_ip = 621; continue _fun0002 }
 594:
                    var13 = var14.scrollTo;
                    var12 = {'x': 0, 'y': null, 'animated': true};
                    var12['y'] = var10;
                    var6 = var13.bind(var14)(var12);
 621:
                    var6 = var11 != var6;
                    var8 = undefined;
                    if(var6) { _fun0002_ip = 642; continue _fun0002 }
 630:
                    var7 = var7.current;
                    var6 = var11 == var7;
                    var8 = var7;
 642:
                    if(var6) { _fun0002_ip = 655; continue _fun0002 }
 645:
                    var7 = var8.scrollToOffset;
                    var6 = var11 == var7;
 655:
                    if(var6) { _fun0002_ip = 681; continue _fun0002 }
 658:
                    var7 = var8.scrollToOffset;
                    var6 = {};
                    var6['offset'] = var10;
                    var6['animated'] = var9;
                    var6 = var7.bind(var8)(var6);
 681:
                    var6 = undefined;
                    return var6;
 686:
                    return var5;
 689:
                    return var4;
 692:
                    return var3;
 695:
                    return var2;
 698:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var8.bind(var3)(var2);
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var _closure2_slot4 = var2;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var2;
        var1 = function() {
            var2 = global;
            var5 = var2.setTimeout;
            var4 = _closure2_slot4;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var2 = var3[var2];
            var3 = undefined;
            var6 = var6.bind(var3)(var2);
            var2 = var6.getKeyboardDuration;
            var2 = var2.bind(var6)();
            var2 = var5.bind(var3)(var4, var2);
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
        };
        var1 = var4.bind(var5)(var1, var3);
        var1 = {};
        var1['onFocus'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();