// app/design/components/Tooltip/native/MeasurementUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function retryMeasurements() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot3 = var1;
    var1 = function _retryMeasurements() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var12 = arg1;
                    var3 = arg2;
                    var4 = arg3;
                    var2 = arg4;
                    var11 = arguments[4];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 251; continue _fun0001 }
 27:
                    var6 = var12;
                    var _closure4_slot0 = var12;
                    var8 = var3;
                    var _closure4_slot1 = var3;
                    var _closure4_slot2 = var4;
                    var9 = var2;
                    var _closure4_slot3 = var2;
                    var3 = undefined;
                    if(!(var11 === var3)) { _fun0001_ip = 60; continue _fun0001 }
 58:
                    var11 = 0;
 60:
                    var _closure4_slot4 = var11;
                    var7 = undefined;
                    var _closure4_slot5 = var3;
                    SaveGenerator(address=74);
 72:
                    return var3;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 248; continue _fun0001 }
 83:
                    var10 = 3;
                    if(!(!(var11 > var10))) { _fun0001_ip = 241; continue _fun0001 }
 93: // try_start_0
                    var10 = var6;
                    var6 = function measure(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var4 = function(arg1, arg2) {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                var2 = arg2;
                                var3 = arg1;
                                var _closure6_slot0 = var3;
                                var _closure6_slot1 = var2;
                                var4 = _closure5_slot0;
                                var5 = var4.current;
                                var4 = null;
                                if(!(var4 != var5)) { _fun0002_ip = 63; continue _fun0002 }
 34:
                                var3 = _closure5_slot0;
                                var4 = var3.current;
                                var3 = var4.measureInWindow;
                                var1 = function(arg1, arg2, arg3, arg4) {
                                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                        var5 = arg3;
                                        var4 = arg4;
                                        var1 = 0;
                                        if(!(var1 === var5)) { _fun0003_ip = 16; continue _fun0003 }
 12:
                                        if(!(var1 !== var4)) { _fun0003_ip = 66; continue _fun0003 }
 16:
                                        var3 = undefined;
                                        if(!(var3 === var5)) { _fun0003_ip = 26; continue _fun0003 }
 22:
                                        if(!(var3 !== var4)) { _fun0003_ip = 66; continue _fun0003 }
 26:
                                        var2 = _closure6_slot0;
                                        var1 = {};
                                        var6 = arg1;
                                        var1['x'] = var6;
                                        var6 = arg2;
                                        var1['y'] = var6;
                                        var1['width'] = var5;
                                        var1['height'] = var4;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = undefined;
                                        _fun0003_ip = 79; continue _fun0003;
 66:
                                        var3 = _closure6_slot1;
                                        var2 = undefined;
                                        var1 = var3.bind(var2)();
 79:
                                        return var1;
                                    }
                                };
                                var1 = var3.bind(var4)(var1);
                                var1 = undefined;
                                return var1;
 63:
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            }
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var6 = var6.bind(var3)(var10);
                    SaveGenerator(address=110);
 108:
                    return var6;
 110:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 208; continue _fun0001 }
 116:
                    var7 = var6;
                    _closure4_slot5 = var6;
                    var11 = var9;
                    var10 = null;
                    if(!(var10 != var11)) { _fun0001_ip = 200; continue _fun0001 }
 132:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var10 = 1;
                    var10 = var12[var10];
                    var12 = var11.bind(var3)(var10);
                    var11 = var12.isEqual;
                    var10 = var7;
                    var9 = var11.bind(var12)(var10, var9);
                    if(var9) { _fun0001_ip = 200; continue _fun0001 }
 173:
                    var9 = global;
                    var11 = var9.setTimeout;
                    var10 = function() {
                        var6 = _closure1_slot3;
                        var10 = _closure4_slot0;
                        var9 = _closure4_slot1;
                        var8 = _closure4_slot2;
                        var7 = _closure4_slot5;
                        var11 = undefined;
                        var1 = var11[var6](var10, var9, var8, var7, var6);
                        return var1;
                    };
                    var9 = 500;
                    var9 = var11.bind(var3)(var10, var9);
 198: // try_end0
                    _fun0001_ip = 238; continue _fun0001;
 200: // try_start_1
                    var7 = var8.bind(var3)(var7);
 205: // try_end1
                    return var7;
 208:
                    return var6;
 211: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    var6 = global;
                    var7 = var6.setTimeout;
                    var6 = function() {
                        var7 = _closure1_slot3;
                        var12 = _closure4_slot0;
                        var11 = _closure4_slot1;
                        var10 = _closure4_slot2;
                        var9 = _closure4_slot3;
                        var2 = _closure4_slot4;
                        var1 = 1;
                        var8 = var2 + var1;
                        var13 = undefined;
                        var1 = var13[var7](var12, var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var5 = 500;
                    var5 = var7.bind(var3)(var6, var5);
 238:
                    return var3;
 241:
                    var3 = var4.bind(var3)();
                    return var3;
 248:
                    return var2;
 251:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Tooltip/native/MeasurementUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getMeasurements(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0004_ip = 20; continue _fun0004 }
 18:
            var2 = false;
 20:
            var _closure2_slot1 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var6 = _closure1_slot3;
                    var5 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var4 = null;
                    if(!var1) { _fun0005_ip = 33; continue _fun0005 }
 23:
                    var4 = {'x': 0, 'y': 0, 'width': 0, 'height': 0};
 33:
                    var1 = undefined;
                    var9 = arg1;
                    var8 = arg2;
                    var11 = undefined;
                    var10 = var5;
                    var7 = var4;
                    var2 = var11[var6](var10, var9, var8, var7, var6);
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['getMeasurements'] = var2;
    return var1;
})();