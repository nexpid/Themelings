// discord_common/js/shared/utils/FunctionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var5 = function areArraysShallowlyEqual(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            if(!(var4 !== var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            if(!(var1 != var3)) { _fun0004_ip = 38; continue _fun0004 }
case 29:
            var2 = var4.length;
            var1 = var3.length;
            if(!(var2 === var1)) { _fun0004_ip = 38; continue _fun0004 }
case 40:
            var2 = var4.length;
            var1 = 0;
            var5 = var1 < var2;
            if(!var5) { _fun0004_ip = 30; continue _fun0004 }
case 41:
            var6 = var4[var1];
            var5 = var3[var1];
            if(!(var6 === var5)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var1 = var1 + 1;
            if(var1 < var2) { _fun0004_ip = 41; continue _fun0004 }
case 30:
            var1 = true;
            return var1;
case 42:
            var1 = false;
            return var1;
case 38:
            var1 = false;
            return var1;
case 36:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var7[var4];
    var6 = var6.bind(var1)(var4);
    var4 = 'promises';
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = function PromiseDeduper() {
            var6 = this;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var1 = undefined;
            var3 = var4.bind(var1)(var6, var3);
            var7 = global;
            var5 = var7.Object;
            var4 = var5.defineProperty;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = true;
            var2['writable'] = var8;
            var7 = var7.Map;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var12 = var8;
            var7 = new var12[var7](var11);
            var7 = var7 instanceof Object ? var7 : var8;
            var2['value'] = var7;
            var2 = var4.bind(var5)(var6, var3, var2);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'one';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = arguments[2];
                var6 = this;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var4;
                var5 = undefined;
                if(!(var1 === var5)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var1 = {};
case 44:
                var7 = var1.force;
                if(!(var7 === var5)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var7 = false;
case 46:
                var _closure3_slot2 = var5;
                var1 = _closure1_slot4;
                var8 = _closure1_slot5;
                var1 = var1.bind(var5)(var6, var8);
                var8 = var1[var8];
                var1 = var8.get;
                var1 = var1.bind(var8)(var4);
                if(var7) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                var7 = null;
                if(!(var7 != var1)) { _fun0005_ip = 48; continue _fun0005 }
case 50:
                return var1;
case 48:
                var1 = arg2;
                var8 = var1.bind(var5)();
                var7 = var8.finally;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var6 = _closure1_slot4;
                        var3 = _closure3_slot0;
                        var5 = _closure1_slot5;
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3, var5);
                        var6 = var3[var5];
                        var5 = var6.get;
                        var3 = _closure3_slot1;
                        var5 = var5.bind(var6)(var3);
                        var3 = _closure3_slot2;
                        if(!(var5 === var3)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                        var5 = _closure1_slot4;
                        var3 = _closure3_slot0;
                        var4 = _closure1_slot5;
                        var3 = var5.bind(var1)(var3, var4);
                        var4 = var3[var4];
                        var3 = var4.delete;
                        var2 = _closure3_slot1;
                        var2 = var3.bind(var4)(var2);
case 51:
                        return var1;
                    }
                };
                var1 = var7.bind(var8)(var1);
                _closure3_slot2 = var1;
                var2 = _closure1_slot4;
                var3 = _closure1_slot5;
                var2 = var2.bind(var5)(var6, var3);
                var3 = var2[var3];
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'many';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arguments[2];
                var17 = this;
                var10 = arg2;
                var7 = undefined;
                if(!(var2 === var7)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var2 = {};
case 53:
                var16 = var2.force;
                if(!(var16 === var7)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var16 = false;
case 55:
                var3 = undefined;
                var _closure3_slot1 = var7;
                var _closure3_slot2 = var7;
                var4 = undefined;
                var5 = undefined;
                var8 = undefined;
                var _closure3_slot0 = var17;
                var2 = global;
                var11 = var2.Set;
                var6 = var11.prototype;
                var9 = Object.create(var6, {constructor: {value: var11}});
                var22 = arg1;
                var23 = var9;
                var6 = new var23[var11](var22, var21);
                var21 = var6 instanceof Object ? var6 : var9;
                var6 = new Array(0);
                var12 = 0;
                var22 = var6;
                var20 = 0;
                var9 = arraySpread(var22, var21, var20);
                var3 = new Array(0);
                var9 = var2.Map;
                var11 = var9.prototype;
                var11 = Object.create(var11, {constructor: {value: var9}});
                var23 = var11;
                var9 = new var23[var9](var22);
                var15 = var9 instanceof Object ? var9 : var11;
                _closure3_slot1 = var15;
                var9 = var6.length;
                var11 = var12 < var9;
                var14 = null;
                var13 = 0;
                if(!var11) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var19 = var6[var13];
                var11 = _closure1_slot4;
                var18 = _closure1_slot5;
                var11 = var11.bind(var7)(var17, var18);
                var18 = var11[var18];
                var11 = var18.get;
                var18 = var11.bind(var18)(var19);
                if(var16) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                if(!(var14 != var18)) { _fun0007_ip = 59; continue _fun0007 }
case 61:
                var11 = var15.set;
                var11 = var11.bind(var15)(var19, var18);
                _fun0007_ip = 62; continue _fun0007;
case 59:
                var18 = var3;
                var11 = var18.push;
                var11 = var11.bind(var18)(var19);
case 62:
                var13 = var13 + 1;
                var11 = var6.length;
                if(var13 < var11) { _fun0007_ip = 58; continue _fun0007 }
case 57:
                var11 = var3;
                var11 = var11.length;
                if(!(var11 > var12)) { _fun0007_ip = 63; continue _fun0007 }
case 64: // try_start_0
                var11 = var10;
                var10 = var3;
                var10 = var11.bind(var7)(var10);
                _closure3_slot2 = var10;
case 65: // try_end0
                _fun0007_ip = 66; continue _fun0007;
case 67: // catch_target0
                CatchBlockStart(arg_register=11);
                var11 = var2.Promise;
                var10 = var11.reject;
                var10 = var10.bind(var11)(var12);
                _closure3_slot2 = var10;
case 66:
                var5 = function _loop(arg1) {
                    var5 = arg1;
                    var _closure4_slot0 = var5;
                    var6 = _closure3_slot2;
                    var4 = var6.then;
                    var3 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = arg1;
                            var4 = var3.has;
                            var2 = _closure4_slot0;
                            var2 = var4.bind(var3)(var2);
                            if(var2) { _fun0008_ip = 68; continue _fun0008 }
case 31:
                            var2 = global;
                            var5 = var2.Error;
                            var7 = var2.String;
                            var6 = _closure4_slot0;
                            var4 = undefined;
                            var6 = var7.bind(var4)(var6);
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var2 = 'Promise deduper result missing key: ';
                            var8 = var4.bind(var2)(var6);
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {constructor: {value: var5}});
                            var9 = var4;
                            var2 = new var9[var5](var8, var7);
                            var2 = var2 instanceof Object ? var2 : var4;
                            throw var2;
case 68:
                            var2 = var3.get;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.finally;
                    var3 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var6 = _closure1_slot4;
                            var2 = _closure3_slot0;
                            var5 = _closure1_slot5;
                            var1 = undefined;
                            var2 = var6.bind(var1)(var2, var5);
                            var7 = var2[var5];
                            var6 = var7.get;
                            var5 = _closure4_slot0;
                            var6 = var6.bind(var7)(var5);
                            var5 = _closure4_slot1;
                            if(!(var6 === var5)) { _fun0009_ip = 69; continue _fun0009 }
case 4:
                            var5 = _closure1_slot4;
                            var3 = _closure3_slot0;
                            var4 = _closure1_slot5;
                            var3 = var5.bind(var1)(var3, var4);
                            var4 = var3[var4];
                            var3 = var4.delete;
                            var2 = _closure4_slot0;
                            var2 = var3.bind(var4)(var2);
case 69:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var6)(var3);
                    var _closure4_slot1 = var4;
                    var7 = _closure1_slot4;
                    var3 = _closure3_slot0;
                    var6 = _closure1_slot5;
                    var1 = undefined;
                    var3 = var7.bind(var1)(var3, var6);
                    var6 = var3[var6];
                    var3 = var6.set;
                    var3 = var3.bind(var6)(var5, var4);
                    var3 = _closure3_slot1;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
                    return var1;
                };
                var9 = _closure1_slot6;
                var3 = var9.bind(var7)(var3);
                var8 = var3;
                var3 = var3.bind(var7)();
                var4 = var3;
                var3 = var3.done;
                if(var3) { _fun0007_ip = 63; continue _fun0007 }
case 70:
                var9 = var5;
                var3 = var4;
                var3 = var3.value;
                var3 = var9.bind(var7)(var3);
                var3 = var8;
                var3 = var3.bind(var7)();
                var4 = var3;
                var3 = var3.done;
                if(!var3) { _fun0007_ip = 70; continue _fun0007 }
case 63:
                var4 = var2.Promise;
                var3 = var4.all;
                var5 = var6.map;
                var2 = function() {
                    var4 = _closure1_slot1;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                StartGenerator();
                                var5 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 4; continue _fun0010 }
case 37:
                                var3 = new Array(2);
                                var3[0] = var5;
                                var4 = _closure3_slot1;
                                var2 = var4.get;
                                var2 = var2.bind(var4)(var5);
                                SaveGenerator(address=39);
case 47:
                                return var2;
case 46:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0010_ip = 52; continue _fun0010 }
case 71:
                                var3[1] = var2;
                                return var3;
case 52:
                                return var2;
case 4:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function(arg1) {
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
                var2 = var2.bind(var7)();
                var2 = var5.bind(var6)(var2);
                var3 = var3.bind(var4)(var2);
                var2 = var3.then;
                var1 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = global;
                        var1 = var1.Map;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var14 = var2;
                        var1 = new var14[var1](var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var3 = _closure1_slot6;
                        var8 = undefined;
                        var2 = arg1;
                        var7 = var3.bind(var8)(var2);
                        var3 = var7.bind(var8)();
                        var2 = var3.done;
                        var6 = 2;
                        var5 = 0;
                        var4 = 1;
                        if(var2) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                        var10 = var3.value;
                        var2 = _closure1_slot0;
                        var2 = var2.bind(var8)(var10, var6);
                        var11 = var2[var5];
                        var10 = var2[var4];
                        var2 = var1.set;
                        var2 = var2.bind(var1)(var11, var10);
                        var10 = var7.bind(var8)();
                        var2 = var10.done;
                        var3 = var10;
                        if(!var2) { _fun0011_ip = 73; continue _fun0011 }
case 72:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var6 = 6;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/shared/utils/FunctionUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['areArraysShallowlyEqual'] = var5;
    var5 = function cachedFunction(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = null;
        var _closure2_slot1 = var2;
        var _closure2_slot2 = var2;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var9 = 0;
                var2 = copyRestArgs(var9);
                var4 = _closure1_slot8;
                var3 = _closure2_slot1;
                var5 = undefined;
                var3 = var4.bind(var5)(var3, var2);
                if(var3) { _fun0012_ip = 30; continue _fun0012 }
case 55:
                var4 = _closure2_slot0;
                var3 = new Array(0);
                var9 = var3;
                var8 = var2;
                var7 = 0;
                var6 = arraySpread(var9, var8, var7);
                var9 = var4;
                var8 = var3;
                var7 = undefined;
                var3 = apply(var9, var8, var7);
                _closure2_slot2 = var3;
case 30:
                _closure2_slot1 = var2;
                var1 = _closure2_slot2;
                return var1;
            }
        };
        return var1;
    };
    var3['cachedFunction'] = var5;
    var5 = function promiseThrottle(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0013_ip = 74; continue _fun0013 }
case 75:
            var2 = 5000;
case 74:
            var _closure2_slot1 = var2;
            var2 = -1;
            var _closure2_slot2 = var2;
            var2 = null;
            var _closure2_slot3 = var2;
            var1 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0014_ip = 76; continue _fun0014 }
case 39:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var4 = var3.bind(var4)();
                    var3 = _closure2_slot2;
                    var2 = var4 >= var3;
case 76:
                    if(!var2) { _fun0014_ip = 77; continue _fun0014 }
case 78:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot1;
                    var2 = var3 + var2;
                    _closure2_slot2 = var2;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _closure2_slot3 = var2;
case 77:
                    var1 = _closure2_slot3;
                    return var1;
                }
            };
            return var1;
        }
    };
    var3['promiseThrottle'] = var5;
    var3['PromiseDeduper'] = var4;
    var4 = function clearObject(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = arg1;
            var4 = var6;
            for(var1 in var4)
case 32:
            {
case 31:
                var7 = var1;
                var8 = var6.hasOwnProperty;
                var8 = var8.bind(var6)(var7);
                if(!var8) { _fun0015_ip = 32; continue _fun0015 }
case 79:
                var7 = delete var6[var7];
                _fun0015_ip = 32; continue _fun0015;
            }
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['clearObject'] = var4;
    var2 = function isPlainObjectEmpty(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            for(var1 in var4)
case 80:
            {
case 29:
                var1 = false;
                return var1;
            }
case 74:
            var1 = true;
            return var1;
        }
    };
    var3['isPlainObjectEmpty'] = var2;
    return var1;
})();