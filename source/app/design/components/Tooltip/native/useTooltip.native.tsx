// app/design/components/Tooltip/native/useTooltip.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function useTooltipHelper(arg1, arg2, arg3) {
        var6 = arg1;
        var10 = arg2;
        var1 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var10;
        var _closure2_slot2 = var1;
        var4 = _closure1_slot5;
        var11 = undefined;
        var7 = var4.bind(var11)();
        var _closure2_slot3 = var7;
        var5 = _closure1_slot4;
        var4 = var5.useRef;
        var4 = var4.bind(var5)(var7);
        var _closure2_slot4 = var4;
        var8 = _closure1_slot4;
        var5 = var8.useContext;
        var9 = _closure1_slot0;
        var12 = _closure1_slot1;
        var4 = 7;
        var4 = var12[var4];
        var4 = var9.bind(var11)(var4);
        var4 = var4.LayerContext;
        var8 = var5.bind(var8)(var4);
        var _closure2_slot5 = var8;
        var9 = _closure1_slot4;
        var5 = var9.useRef;
        var4 = null;
        var4 = var5.bind(var9)(var4);
        var _closure2_slot6 = var4;
        var11 = _closure1_slot4;
        var9 = var11.useEffect;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var6;
        var4 = function() {
            var2 = _closure2_slot0;
            var2 = var2.current;
            var _closure3_slot0 = var2;
            var1 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = _closure3_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0001_ip = 35; continue _fun0001 }
 13:
                    var4 = _closure2_slot5;
                    var3 = var4.remove;
                    var1 = _closure3_slot0;
                    var1 = var3.bind(var4)(var1);
 35:
                    var1 = _closure2_slot0;
                    var1['current'] = var2;
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var4 = var9.bind(var11)(var4, var5);
        var9 = _closure1_slot4;
        var5 = var9.useCallback;
        var11 = var8.surfaceRef;
        var4 = new Array(4);
        var4[0] = var11;
        var4[1] = var10;
        var4[2] = var6;
        var4[3] = var1;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 233; continue _fun0002 }
 10:
                            var8 = arg1;
                            var2 = undefined;
                            var4 = undefined;
                            var5 = undefined;
 19: // try_start_0
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var3 = 9;
                            var6 = var10[var3];
                            var14 = var9.bind(var2)(var6);
                            var13 = var14.getMeasurements;
                            var11 = _closure2_slot5;
                            var12 = var11.surfaceRef;
                            var11 = _closure3_slot0;
                            var12 = var13.bind(var14)(var12, var11);
                            var3 = var10[var3];
                            var10 = var9.bind(var2)(var3);
                            var9 = var10.getMeasurements;
                            var3 = _closure2_slot1;
                            var11 = var9.bind(var10)(var3, var11);
                            var3 = global;
                            var10 = var3.Promise;
                            var9 = var10.all;
                            var3 = new Array(2);
                            var3[0] = var12;
                            var3[1] = var11;
                            var3 = var9.bind(var10)(var3);
                            SaveGenerator(address=134);
 132:
                            return var3;
 134:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                            if(var9) { _fun0002_ip = 225; continue _fun0002 }
 140:
                            var9 = _closure1_slot2;
                            var7 = 2;
                            var9 = var9.bind(var2)(var3, var7);
                            var7 = 0;
                            var4 = var9[var7];
                            var7 = 1;
                            var5 = var9[var7];
                            var9 = _closure2_slot0;
                            var10 = var9.current;
                            var9 = null;
                            var9 = var9 != var10;
                            var7 = var9;
                            if(!var9) { _fun0002_ip = 200; continue _fun0002 }
 187:
                            var9 = _closure2_slot6;
                            var9 = var9.current;
                            var7 = var9 === var8;
 200:
                            if(!var7) { _fun0002_ip = 223; continue _fun0002 }
 203:
                            var7 = _closure2_slot2;
                            var6 = _closure2_slot0;
                            var6 = var6.current;
                            var4 = var7.bind(var2)(var6, var5, var4);
 223: // try_end0
                            _fun0002_ip = 230; continue _fun0002;
 225:
                            return var3;
 228: // catch_target0
                            CatchBlockStart(arg_register=2);
 230:
                            return var2;
 233:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure4_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = undefined;
            var2 = var1.bind(var3)();
            var1 = _closure2_slot6;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 6;
            var4 = var6[var4];
            var5 = var5.bind(var3)(var4);
            var4 = var5.v4;
            var4 = var4.bind(var5)();
            var1['current'] = var4;
            var1 = var1.current;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var5.bind(var9)(var1, var4);
        var _closure2_slot7 = var1;
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var1;
        var3[3] = var6;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot4;
                var3 = var2.current;
                var2 = _closure2_slot3;
                var3 = var3 !== var2;
                if(!var3) { _fun0003_ip = 76; continue _fun0003 }
 23:
                var2 = _closure2_slot0;
                var4 = var2.current;
                var2 = null;
                if(!(var2 != var4)) { _fun0003_ip = 62; continue _fun0003 }
 38:
                var5 = _closure2_slot5;
                var4 = var5.remove;
                var2 = _closure2_slot0;
                var2 = var2.current;
                var2 = var4.bind(var5)(var2);
 62:
                var4 = _closure2_slot4;
                var2 = _closure2_slot3;
                var4['current'] = var2;
 76:
                var2 = _closure2_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.useWindowDimensions;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var13 = 'useTooltip.native';
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot7 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Tooltip/native/useTooltip.native.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg1, arg2) {
        var4 = _closure1_slot4;
        var3 = var4.useRef;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 6;
        var2 = var5[var2];
        var5 = undefined;
        var6 = var6.bind(var5)(var2);
        var2 = var6.v4;
        var2 = var2.bind(var6)();
        var4 = var3.bind(var4)(var2);
        var3 = function useAddTooltip(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var6 = _closure1_slot4;
                var4 = var6.useContext;
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 7;
                var7 = var7[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var7);
                var3 = var3.LayerContext;
                var6 = var4.bind(var6)(var3);
                var _closure3_slot1 = var6;
                var3 = null;
                if(!(var3 == var6)) { _fun0004_ip = 85; continue _fun0004 }
 65:
                var7 = _closure1_slot7;
                var4 = var7.warn;
                var3 = 'Tooltip called with no layer context. It will not show without a LayerScope.';
                var3 = var4.bind(var7)(var3);
 85:
                var4 = _closure1_slot4;
                var3 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function(arg1, arg2, arg3) {
                    var5 = _closure1_slot6;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = var2.AnimatedTooltip;
                    var3 = {};
                    var8 = _closure3_slot0;
                    var9 = var3;
                    var6 = copyDataProperties(var9, var8);
                    var7 = arg2;
                    var6 = 'targetMeasurements';
                    var3[var6] = var7;
                    var7 = arg3;
                    var6 = 'surfaceMeasurements';
                    var3[var6] = var7;
                    var5 = var5.bind(var1)(var4, var3);
                    var4 = _closure3_slot1;
                    var3 = var4.add;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            }
        };
        var2 = arg2;
        var3 = var3.bind(var5)(var2);
        var2 = _closure1_slot8;
        var1 = arg1;
        var1 = var2.bind(var5)(var4, var1, var3);
        return var1;
    };
    var3['useTooltip'] = var4;
    var3['useTooltipHelper'] = var2;
    return var1;
})();