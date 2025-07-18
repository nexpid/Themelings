// app/modules/safe_area/useSafeAreaAvoidingInputs.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
                    if(var2) { _fun0002_ip = 693; continue _fun0002 }
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
                    if(!(var11 != var7)) { _fun0002_ip = 676; continue _fun0002 }
 57:
                    if(!(var11 != var12)) { _fun0002_ip = 676; continue _fun0002 }
 64:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var13 = 4;
                    var2 = var2[var13];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.measureViewRefInWindow;
                    var2 = var7.ref;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=109);
 107:
                    return var2;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 690; continue _fun0002 }
 118:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var13];
                    var10 = var4.bind(var8)(var3);
                    var4 = var10.measureViewRefInView;
                    var3 = var7.ref;
                    var3 = var4.bind(var10)(var3, var12);
                    SaveGenerator(address=156);
 154:
                    return var3;
 156:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 687; continue _fun0002 }
 165:
                    if(!(var11 != var2)) { _fun0002_ip = 676; continue _fun0002 }
 172:
                    if(!(var11 != var3)) { _fun0002_ip = 676; continue _fun0002 }
 179:
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var13];
                    var10 = var10.bind(var8)(var4);
                    var4 = var10.measureViewInWindow;
                    var4 = var4.bind(var10)(var12);
                    SaveGenerator(address=211);
 209:
                    return var4;
 211:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0002_ip = 684; continue _fun0002 }
 220:
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
                    SaveGenerator(address=241);
 239:
                    return var5;
 241:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 681; continue _fun0002 }
 250:
                    var14 = global;
                    var7 = var14.Number;
                    var7 = var7.MAX_SAFE_INTEGER;
                    if(!(var5 === var7)) { _fun0002_ip = 309; continue _fun0002 }
 268:
                    var7 = _closure2_slot2;
                    var12 = var7.current;
                    if(!(var11 != var12)) { _fun0002_ip = 676; continue _fun0002 }
 284:
                    var10 = var12.scrollToEnd;
                    var7 = {};
                    var13 = true;
                    var7['animated'] = var13;
                    var7 = var10.bind(var12)(var7);
                    _fun0002_ip = 676; continue _fun0002;
 309:
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
                    if(!(!(var15 <= var12))) { _fun0002_ip = 552; continue _fun0002 }
 468:
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
                    if(!(!(var7 <= var12))) { _fun0002_ip = 552; continue _fun0002 }
 548:
                    var10 = var7 - var12;
 552:
                    if(!(var11 != var10)) { _fun0002_ip = 676; continue _fun0002 }
 556:
                    var7 = _closure2_slot2;
                    var14 = var7.current;
                    var12 = var11 == var14;
                    var6 = undefined;
                    if(var12) { _fun0002_ip = 616; continue _fun0002 }
 574:
                    var12 = var14.scrollTo;
                    var12 = var11 == var12;
                    var6 = undefined;
                    if(var12) { _fun0002_ip = 616; continue _fun0002 }
 589:
                    var13 = var14.scrollTo;
                    var12 = {'x': 0, 'y': null, 'animated': true};
                    var12['y'] = var10;
                    var6 = var13.bind(var14)(var12);
 616:
                    var6 = var11 != var6;
                    var8 = undefined;
                    if(var6) { _fun0002_ip = 637; continue _fun0002 }
 625:
                    var7 = var7.current;
                    var6 = var11 == var7;
                    var8 = var7;
 637:
                    if(var6) { _fun0002_ip = 650; continue _fun0002 }
 640:
                    var7 = var8.scrollToOffset;
                    var6 = var11 == var7;
 650:
                    if(var6) { _fun0002_ip = 676; continue _fun0002 }
 653:
                    var7 = var8.scrollToOffset;
                    var6 = {};
                    var6['offset'] = var10;
                    var6['animated'] = var9;
                    var6 = var7.bind(var8)(var6);
 676:
                    var6 = undefined;
                    return var6;
 681:
                    return var5;
 684:
                    return var4;
 687:
                    return var3;
 690:
                    return var2;
 693:
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