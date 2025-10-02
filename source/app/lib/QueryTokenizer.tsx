// app/lib/QueryTokenizer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = function getMatch(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var14 = arg1;
            var13 = arg2;
            var12 = arg3;
            var1 = null;
            if(!(var1 != var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var13.length;
            var7 = 0;
            var2 = var7 < var2;
            var11 = undefined;
            var9 = 0;
            var8 = undefined;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = var13[var9];
            var3 = _closure1_slot5;
            var4 = var14.match;
            var2 = var15.regex;
            var2 = var4.bind(var14)(var2);
            var4 = var3.bind(var11)(var2, var12);
            if(!(var1 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var15.cache;
            var3 = var1 != var6;
            var16 = undefined;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var6.get;
            var2 = var4[var7];
            var2 = var5.bind(var6)(var2);
            var3 = var1 != var2;
            var16 = var2;
case 8:
            var2 = var16;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot3;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var19 = var5;
            var18 = var16;
            var3 = new var19[var3](var18, var17);
            var3 = var3 instanceof Object ? var3 : var5;
            var5 = var4.index;
            var3['start'] = var5;
            var2 = var3;
case 10:
            if(!(var1 == var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var16 = _closure1_slot3;
            var17 = var15.type;
            var5 = var16.prototype;
            var5 = Object.create(var5, {constructor: {value: var16}});
            var19 = var5;
            var18 = var4;
            var3 = new var19[var16](var18, var17, var16);
            var3 = var3 instanceof Object ? var3 : var5;
            var5 = var15.validator;
            if(!(var1 != var5)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var15.validator;
            var5 = var5.bind(var15)(var3);
            var8 = var6;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 6:
            var9 = var9 + 1;
            var5 = var13.length;
            if(var9 < var5) { _fun0001_ip = 5; continue _fun0001 }
case 4:
            return var1;
case 14:
            var5 = var1 == var6;
            if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var1 != var6;
            if(!var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = var6.has;
            var9 = var4[var7];
            var8 = var10.bind(var6)(var9);
case 18:
            var5 = var8;
case 16:
            var2 = var3;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 20:
            var5 = var6.set;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4, var3);
            var2 = var3;
case 12:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function fixMatchIndex(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = new Array(0);
            var5 = 0;
            var7 = var2;
            var6 = var4;
            var3 = arraySpread(var7, var6, var5);
            var3 = arg2;
            var2['index'] = var3;
            return var2;
case 21:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = /.+/g;
    var _closure1_slot2 = var2;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function QueryTokenizer() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arguments[0];
                var5 = this;
                var _closure3_slot0 = var5;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0003_ip = 23; continue _fun0003 }
case 3:
                var4 = new Array(0);
case 23:
                var6 = _closure1_slot0;
                var3 = _closure2_slot0;
                var3 = var6.bind(var1)(var5, var3);
                var3 = new Array(0);
                var5['_rules'] = var3;
                var3 = {};
                var5['_followers'] = var3;
                var3 = 'NON_TOKEN';
                var5['_nonTokenType'] = var3;
                var3 = var5.reset;
                var3 = var3.bind(var5)();
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.addRule;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'reset';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var1 = new Array(0);
            var2['_rules'] = var1;
            var1 = {};
            var2['_followers'] = var1;
            var1 = 'NON_TOKEN';
            var2['_nonTokenType'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'addRule';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var9 = var1.type;
                var _closure3_slot2 = var9;
                var4 = var1.follows;
                var8 = var1.validator;
                var _closure3_slot3 = var8;
                var1 = var1.regex;
                var _closure3_slot4 = var1;
                var7 = var1.source;
                var6 = var7.charAt;
                var5 = 0;
                var5 = var6.bind(var7)(var5);
                var11 = '^';
                var10 = var1;
                if(!(var11 !== var5)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var5 = global;
                var7 = var5.RegExp;
                var6 = var1.source;
                var5 = var5.HermesInternal;
                var5 = var5.concat;
                var13 = var5.bind(var11)(var6);
                var12 = var1.flags;
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var14 = var5;
                var1 = new var14[var7](var13, var12, var11);
                var1 = var1 instanceof Object ? var1 : var5;
                _closure3_slot4 = var1;
                var10 = var1;
case 24:
                var5 = null;
                var6 = var5 != var8;
                var1 = undefined;
                var7 = undefined;
                if(!var6) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var6 = global;
                var6 = var6.Map;
                var11 = var6.prototype;
                var11 = Object.create(var11, {constructor: {value: var6}});
                var14 = var11;
                var6 = new var14[var6](var13);
                var6 = var6 instanceof Object ? var6 : var11;
                var _closure3_slot1 = var6;
                var7 = var6;
case 26:
                if(!(var5 == var4)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var6 = var3._rules;
                var5 = var6.push;
                var3 = {};
                var3['regex'] = var10;
                var3['type'] = var9;
                var3['validator'] = var8;
                var3['cache'] = var7;
                var3 = var5.bind(var6)(var3);
                _fun0004_ip = 30; continue _fun0004;
case 28:
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = arg1;
                        var1 = _closure3_slot0;
                        var1 = var1._followers;
                        var3 = var1[var2];
                        var1 = null;
                        if(!(var1 == var3)) { _fun0005_ip = 5; continue _fun0005 }
case 31:
                        var1 = _closure3_slot0;
                        var3 = var1._followers;
                        var1 = new Array(0);
                        var3[var2] = var1;
case 5:
                        var1 = _closure3_slot0;
                        var1 = var1._followers;
                        var3 = var1[var2];
                        var2 = var3.push;
                        var1 = {};
                        var5 = _closure3_slot4;
                        var1['regex'] = var5;
                        var5 = _closure3_slot2;
                        var1['type'] = var5;
                        var5 = _closure3_slot3;
                        var1['validator'] = var5;
                        var4 = _closure3_slot1;
                        var1['cache'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
case 30:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'tokenize';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var15 = arg1;
                var2 = this;
                var1 = new Array(0);
                var3 = var15.length;
                var14 = 0;
                var6 = var3 > var14;
                var8 = undefined;
                var5 = '';
                var3 = null;
                var13 = 1;
                var12 = undefined;
                var11 = var5;
                var9 = 0;
                var10 = var11;
                var7 = 0;
                if(!var6) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                var16 = var2._getMatch;
                var6 = var11.length;
                var6 = var9 + var6;
                var19 = var16.bind(var2)(var15, var12, var6);
                var21 = var15;
                if(!(var3 == var19)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                var6 = var21[var14];
                var17 = var11 + var6;
                var6 = var21.substring;
                var15 = var6.bind(var21)(var13);
                var16 = var9;
                _fun0006_ip = 36; continue _fun0006;
case 34:
                var6 = var3 != var11;
                if(!var6) { _fun0006_ip = 37; continue _fun0006 }
case 8:
                var6 = var5 !== var11;
case 37:
                if(!var6) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                var18 = var1.push;
                var23 = _closure1_slot3;
                var20 = _closure1_slot5;
                var22 = var11.match;
                var6 = _closure1_slot2;
                var6 = var22.bind(var11)(var6);
                var26 = var20.bind(var8)(var6, var9);
                var25 = var2._nonTokenType;
                var20 = var23.prototype;
                var20 = Object.create(var20, {constructor: {value: var23}});
                var27 = var20;
                var6 = new var27[var23](var26, var25, var24);
                var6 = var6 instanceof Object ? var6 : var20;
                var6 = var18.bind(var1)(var6);
case 38:
                var6 = var1.push;
                var6 = var6.bind(var1)(var19);
                var18 = var19.length;
                var6 = var11.length;
                var6 = var18 + var6;
                var16 = var9 + var6;
                var20 = var21.substring;
                var18 = var19.length;
                var15 = var20.bind(var21)(var18);
                var12 = var19;
                var17 = var5;
case 36:
                var6 = var15.length;
                var11 = var17;
                var9 = var16;
                var10 = var11;
                var7 = var9;
                if(var6 > var14) { _fun0006_ip = 33; continue _fun0006 }
case 32:
                var3 = var3 != var10;
                if(!var3) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var3 = var5 !== var10;
case 40:
                if(!var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var3 = var1.push;
                var6 = _closure1_slot3;
                var5 = _closure1_slot5;
                var9 = var10.match;
                var4 = _closure1_slot2;
                var4 = var9.bind(var10)(var4);
                var26 = var5.bind(var8)(var4, var7);
                var25 = var2._nonTokenType;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var27 = var4;
                var2 = new var27[var6](var26, var25, var24);
                var2 = var2 instanceof Object ? var2 : var4;
                var2 = var3.bind(var1)(var2);
case 42:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'clearCache';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = this;
                var9 = var6._rules;
                var8 = var9.forEach;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.cache;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                        var2 = var3.clear;
                        var1 = var2.bind(var3)();
case 44:
                        return var1;
                    }
                };
                var1 = var8.bind(var9)(var1);
                var4 = var6._followers;
                for(var1 in var4)
case 46:
                {
case 47:
                    var9 = var1;
                    var8 = var6._followers;
                    var10 = var8[var9];
                    var9 = var10.forEach;
                    var8 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.cache;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                            var2 = var3.clear;
                            var1 = var2.bind(var3)();
case 44:
                            return var1;
                        }
                    };
                    var8 = var9.bind(var10)(var8);
                    _fun0007_ip = 46; continue _fun0007;
                }
case 48:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = '_getMatch';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var6 = arg1;
                var1 = arg2;
                var5 = arg3;
                var2 = this;
                var3 = null;
                var4 = var3 != var1;
                var10 = null;
                if(!var4) { _fun0010_ip = 49; continue _fun0010 }
case 50:
                var10 = var1.type;
case 49:
                var8 = var3 == var1;
                var4 = undefined;
                var7 = undefined;
                if(var8) { _fun0010_ip = 5; continue _fun0010 }
case 51:
                var7 = var1.end;
case 5:
                var1 = undefined;
                if(!(var7 === var5)) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                var8 = _closure1_slot4;
                var9 = var2._followers;
                var7 = global;
                var7 = var7.String;
                var7 = var7.bind(var4)(var10);
                var7 = var9[var7];
                var1 = var8.bind(var4)(var6, var7, var5);
case 52:
                if(!(var3 == var1)) { _fun0010_ip = 34; continue _fun0010 }
case 54:
                var3 = _closure1_slot4;
                var2 = var2._rules;
                var1 = var3.bind(var4)(var6, var2, var5);
case 34:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function Token(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arg1;
                var4 = arg2;
                var3 = this;
                var6 = _closure1_slot0;
                var5 = _closure2_slot0;
                var1 = undefined;
                var6 = var6.bind(var1)(var3, var5);
                var5 = var2 instanceof var5;
                if(var5) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                var8 = null;
                if(!(var8 == var2)) { _fun0011_ip = 57; continue _fun0011 }
case 5:
                var5 = new Array(0);
                var3['match'] = var5;
                var5 = 0;
                var3['start'] = var5;
                var3['type'] = var4;
                _fun0011_ip = 58; continue _fun0011;
case 57:
                var5 = new Array(0);
                var12 = var5;
                var11 = var2;
                var10 = 0;
                var7 = arraySpread(var12, var11, var10);
                var3['match'] = var5;
                var9 = 'string';
                var7 = typeof var2;
                var5 = 0;
                if(!(var9 !== var7)) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                var7 = var2.index;
                var8 = var8 != var7;
                var6 = 0;
                if(!var8) { _fun0011_ip = 39; continue _fun0011 }
case 37:
                var6 = var7;
case 39:
                var5 = var6;
case 59:
                var3['start'] = var5;
                var3['type'] = var4;
                _fun0011_ip = 58; continue _fun0011;
case 55:
                var11 = var2.match;
                var4 = new Array(0);
                var10 = 0;
                var12 = var4;
                var5 = arraySpread(var12, var11, var10);
                var3['match'] = var4;
                var4 = var2.start;
                var3['start'] = var4;
                var4 = var2.type;
                var3['type'] = var4;
                var5 = var2._data;
                var4 = null;
                if(!(var4 != var5)) { _fun0011_ip = 58; continue _fun0011 }
case 61:
                var2 = var2._data;
                var3['_data'] = var2;
case 58:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'end';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var2 = var1.start;
            var1 = var1.length;
            var1 = var2 + var1;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(7);
        var2[0] = var1;
        var1 = {};
        var6 = 'length';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var2 = var1.match;
            var1 = 0;
            var1 = var2[var1];
            var1 = var1.length;
            return var1;
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'valueOf';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.match;
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getFullMatch';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.match;
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getMatch';
        var1['key'] = var6;
        var6 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arguments[0];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0012_ip = 62; continue _fun0012 }
case 22:
                var2 = 0;
case 62:
                var1 = this;
                var1 = var1.match;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'setData';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = this;
                var3 = var1._data;
                var2 = null;
                if(!(var2 == var3)) { _fun0013_ip = 47; continue _fun0013 }
case 63:
                var2 = global;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var7 = var3;
                var2 = new var7[var2](var6);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['_data'] = var2;
case 47:
                var4 = var1._data;
                var3 = var4.set;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getData';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = this;
                var3 = var1._data;
                var2 = null;
                if(!(var2 == var3)) { _fun0014_ip = 64; continue _fun0014 }
case 63:
                var2 = undefined;
                return var2;
case 64:
                var3 = var1._data;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[6] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot3 = var2;
    var5 = 'NON_TOKEN';
    var4['NON_TOKEN_TYPE'] = var5;
    var4['Token'] = var2;
    var6 = 2;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/QueryTokenizer.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var4;
    var3['NON_TOKEN_TYPE'] = var5;
    var3['QueryTokenizer'] = var4;
    var3['Token'] = var2;
    return var1;
})();