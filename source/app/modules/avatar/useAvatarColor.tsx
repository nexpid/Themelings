// app/modules/avatar/useAvatarColor.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var5 = function hasFetchedColors(arg1) {
        var2 = _closure1_slot7;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var2 = var1.palette;
        var1 = arg1;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot8 = var5;
    var1 = function _maybeFetchColors() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot8;
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = _closure1_slot10;
                    var3 = var3.bind(var2)(var4);
                    SaveGenerator(address=40);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 8:
                    return var3;
case 4:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function fetchColors() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _fetchColors() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = var7;
                    var _closure4_slot0 = var7;
                    var2 = undefined;
                    var _closure4_slot1 = var2;
                    var _closure4_slot2 = var2;
                    var8 = _closure1_slot7;
                    var6 = var8.getState;
                    var6 = var6.bind(var8)();
                    var6 = var6.fetching;
                    var6 = var6[var7];
                    if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 5;
                    var7 = var7[var6];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.batchUpdates;
                    var7 = function() {
                        var3 = _closure1_slot7;
                        var2 = var3.setState;
                        var1 = function(arg1) {
                            var1 = {};
                            var2 = {};
                            var3 = arg1;
                            var5 = var3.fetching;
                            var6 = var2;
                            var3 = copyDataProperties(var6, var5);
                            var4 = _closure4_slot0;
                            var3 = true;
                            var2[var4] = var3;
                            var1['fetching'] = var2;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
case 13: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var7 = var9[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.getPaletteForAvatar;
                    var5 = var7.bind(var8)(var5);
                    SaveGenerator(address=136);
case 14:
                    return var5;
case 15:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    _closure4_slot1 = var5;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var9 = 7;
                    var9 = var7[var9];
                    var11 = var8.bind(var2)(var9);
                    var10 = var11.getComplimentaryPaletteForColor;
                    var9 = 0;
                    var9 = var5[var9];
                    var9 = var10.bind(var11)(var9);
                    _closure4_slot2 = var9;
                    var7 = var7[var6];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.batchUpdates;
                    var7 = function() {
                        var3 = _closure1_slot7;
                        var2 = var3.setState;
                        var1 = function(arg1) {
                            var3 = arg1;
                            var1 = {};
                            var2 = {};
                            var10 = var3.fetching;
                            var11 = var2;
                            var4 = copyDataProperties(var11, var10);
                            var4 = _closure4_slot0;
                            var6 = false;
                            var2[var4] = var6;
                            var1['fetching'] = var2;
                            var2 = {};
                            var10 = var3.palette;
                            var11 = var2;
                            var3 = copyDataProperties(var11, var10);
                            var8 = _closure4_slot1;
                            var6 = var8.slice;
                            var7 = 0;
                            var3 = 2;
                            var10 = var6.bind(var8)(var7, var3);
                            var3 = new Array(0);
                            var11 = var3;
                            var9 = 0;
                            var9 = arraySpread(var11, var10, var9);
                            var10 = _closure4_slot2;
                            var11 = var3;
                            var5 = arraySpread(var11, var10, var9);
                            var2[var4] = var3;
                            var1['palette'] = var2;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
case 18: // try_end0
                    _fun0002_ip = 11; continue _fun0002;
case 16:
                    return var5;
case 19: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.batchUpdates;
                    var3 = function() {
                        var3 = _closure1_slot7;
                        var2 = var3.setState;
                        var1 = function(arg1) {
                            var1 = {};
                            var2 = {};
                            var3 = arg1;
                            var5 = var3.fetching;
                            var6 = var2;
                            var3 = copyDataProperties(var6, var5);
                            var4 = _closure4_slot0;
                            var3 = false;
                            var2[var4] = var3;
                            var1['fetching'] = var2;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
case 11:
                    return var2;
case 9:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var2 = function useAvatarColors(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = arguments[2];
            var _closure2_slot0 = var4;
            var8 = undefined;
            if(!(var2 === var8)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var2 = true;
case 20:
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var8;
            var6 = _closure1_slot7;
            var5 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var3 = arg1;
                    var3 = var3.palette;
                    var2 = _closure2_slot0;
                    var1 = var3[var2];
case 22:
                    return var1;
                }
            };
            var7 = var6.bind(var8)(var5);
            _closure2_slot2 = var7;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 8;
            var5 = var9[var5];
            var9 = var6.bind(var8)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = 1;
                    var1 = var4;
                    if(!var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var3 = _closure1_slot6;
                    var3 = var3.desaturateUserColors;
                    var1 = var4;
                    if(!var3) { _fun0005_ip = 24; continue _fun0005 }
case 22:
                    var2 = _closure1_slot6;
                    var1 = var2.saturation;
case 24:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var5);
            _closure2_slot3 = var6;
            var9 = _closure1_slot5;
            var8 = var9.useEffect;
            var5 = new Array(2);
            var5[0] = var4;
            var5[1] = var7;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0006_ip = 26; continue _fun0006 }
case 25:
                    var3 = _closure2_slot2;
                    var2 = var4 == var3;
case 26:
                    if(!var2) { _fun0006_ip = 24; continue _fun0006 }
case 5:
                    var3 = _closure1_slot10;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4, var5);
            var5 = _closure1_slot5;
            var4 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0007_ip = 27; continue _fun0007 }
case 23:
                    var4 = _closure2_slot2;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var4 = arg1;
                            var1 = var4[Symbol.iterator];
                            var4 = var1().next;
                            var5 = var4().value;
                            var2 = var1;
                            var3 = undefined;
                            var2 = var2 === var3;
                            var9 = undefined;
                            if(var2) { _fun0008_ip = 5; continue _fun0008 }
case 26:
                            var9 = var5;
case 5:
                            var8 = undefined;
                            if(var2) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                            var6 = var4().value;
                            var5 = var1;
                            var5 = var5 === var3;
                            var8 = undefined;
                            var2 = var5;
                            if(var5) { _fun0008_ip = 28; continue _fun0008 }
case 30:
                            var8 = var6;
                            var2 = var5;
case 28:
                            var6 = undefined;
                            if(var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                            var5 = var4().value;
                            var4 = var1;
                            var4 = var4 === var3;
                            var6 = undefined;
                            var2 = var4;
                            if(var4) { _fun0008_ip = 31; continue _fun0008 }
case 33:
                            var6 = var5;
                            var2 = var4;
case 31:
                            if(var2) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                            var1.return();
case 34:
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 9;
                            var4 = var7[var1];
                            var5 = var2.bind(var3)(var4);
                            var4 = {};
                            var4['r'] = var9;
                            var4['g'] = var8;
                            var4['b'] = var6;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.toHsl;
                            var4 = var4.bind(var5)();
                            var5 = var4.h;
                            var6 = var4.s;
                            var4 = var4.l;
                            var1 = var7[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var1['h'] = var5;
                            var5 = _closure2_slot3;
                            var5 = var6 * var5;
                            var1['s'] = var5;
                            var1['l'] = var4;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.toHexString;
                            var1 = var1.bind(var2)();
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 27:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1, var2);
            var2 = null;
            if(!(var2 == var1)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var2 = new Array(2);
            var2[0] = var3;
            var2[1] = var3;
            var1 = var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var10 = var9[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var10 = var8.bind(var1)(var6);
    var7 = var10.create;
    var6 = function() {
        var1 = {};
        var2 = {};
        var1['palette'] = var2;
        var2 = {};
        var1['fetching'] = var2;
        return var1;
    };
    var6 = var7.bind(var10)(var6);
    var _closure1_slot7 = var6;
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/avatar/useAvatarColor.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function useAvatarColor(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arguments[2];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0009_ip = 38; continue _fun0009 }
case 39:
            var6 = true;
case 38:
            var5 = _closure1_slot12;
            var3 = arg1;
            var2 = arg2;
            var3 = var5.bind(var4)(var3, var2, var6);
            var2 = _closure1_slot3;
            var1 = 1;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        }
    };
    var3['default'] = var7;
    var3['useColorStore'] = var6;
    var3['hasFetchedColors'] = var5;
    var5 = function maybeFetchColors() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybeFetchColors'] = var5;
    var4 = function useHasFetchedColors(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0010_ip = 40; continue _fun0010 }
case 25:
                var3 = arg1;
                var3 = var3.fetching;
                var2 = _closure2_slot0;
                var1 = var3[var2];
case 40:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        var1 = !var1;
        return var1;
    };
    var3['useHasFetchedColors'] = var4;
    var3['useAvatarColors'] = var2;
    return var1;
})();