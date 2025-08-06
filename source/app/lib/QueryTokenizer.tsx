// app/lib/QueryTokenizer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = function getMatch(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var14 = arg1;
            var13 = arg2;
            var12 = arg3;
            var1 = null;
            if(!(var1 != var13)) { _fun0001_ip = 305; continue _fun0001 }
 18:
            var2 = var13.length;
            var7 = 0;
            var2 = var7 < var2;
            var11 = undefined;
            var9 = 0;
            var8 = undefined;
            if(!var2) { _fun0001_ip = 246; continue _fun0001 }
 44:
            var15 = var13[var9];
            var3 = _closure1_slot5;
            var4 = var14.match;
            var2 = var15.regex;
            var2 = var4.bind(var14)(var2);
            var4 = var3.bind(var11)(var2, var12);
            if(!(var1 != var4)) { _fun0001_ip = 231; continue _fun0001 }
 82:
            var6 = var15.cache;
            var3 = var1 != var6;
            var16 = undefined;
            if(!var3) { _fun0001_ip = 118; continue _fun0001 }
 97:
            var5 = var6.get;
            var2 = var4[var7];
            var2 = var5.bind(var6)(var2);
            var3 = var1 != var2;
            var16 = var2;
 118:
            var2 = var16;
            if(!var3) { _fun0001_ip = 165; continue _fun0001 }
 124:
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
 165:
            if(!(var1 == var2)) { _fun0001_ip = 303; continue _fun0001 }
 172:
            var16 = _closure1_slot3;
            var17 = var15.type;
            var5 = var16.prototype;
            var5 = Object.create(var5, {constructor: {value: var16}});
            var19 = var5;
            var18 = var4;
            var3 = new var19[var16](var18, var17, var16);
            var3 = var3 instanceof Object ? var3 : var5;
            var5 = var15.validator;
            if(!(var1 != var5)) { _fun0001_ip = 248; continue _fun0001 }
 214:
            var5 = var15.validator;
            var5 = var5.bind(var15)(var3);
            var8 = var6;
            if(var5) { _fun0001_ip = 248; continue _fun0001 }
 231:
            var9 = var9 + 1;
            var5 = var13.length;
            if(var9 < var5) { _fun0001_ip = 44; continue _fun0001 }
 246:
            return var1;
 248:
            var5 = var1 == var6;
            if(var5) { _fun0001_ip = 279; continue _fun0001 }
 255:
            var8 = var1 != var6;
            if(!var8) { _fun0001_ip = 276; continue _fun0001 }
 262:
            var10 = var6.has;
            var9 = var4[var7];
            var8 = var10.bind(var6)(var9);
 276:
            var5 = var8;
 279:
            var2 = var3;
            if(var5) { _fun0001_ip = 303; continue _fun0001 }
 285:
            var5 = var6.set;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4, var3);
            var2 = var3;
 303:
            return var2;
 305:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function fixMatchIndex(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 36; continue _fun0002 }
 9:
            var2 = new Array(0);
            var5 = 0;
            var7 = var2;
            var6 = var4;
            var3 = arraySpread(var7, var6, var5);
            var3 = arg2;
            var2['index'] = var3;
            return var2;
 36:
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
 0:
                var4 = arguments[0];
                var5 = this;
                var _closure3_slot0 = var5;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0003_ip = 22; continue _fun0003 }
 18:
                var4 = new Array(0);
 22:
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
 0:
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
                if(!(var11 !== var5)) { _fun0004_ip = 137; continue _fun0004 }
 76:
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
 137:
                var5 = null;
                var6 = var5 != var8;
                var1 = undefined;
                var7 = undefined;
                if(!var6) { _fun0004_ip = 185; continue _fun0004 }
 150:
                var6 = global;
                var6 = var6.Map;
                var11 = var6.prototype;
                var11 = Object.create(var11, {constructor: {value: var6}});
                var14 = var11;
                var6 = new var14[var6](var13);
                var6 = var6 instanceof Object ? var6 : var11;
                var _closure3_slot1 = var6;
                var7 = var6;
 185:
                if(!(var5 == var4)) { _fun0004_ip = 228; continue _fun0004 }
 189:
                var6 = var3._rules;
                var5 = var6.push;
                var3 = {};
                var3['regex'] = var10;
                var3['type'] = var9;
                var3['validator'] = var8;
                var3['cache'] = var7;
                var3 = var5.bind(var6)(var3);
                _fun0004_ip = 243; continue _fun0004;
 228:
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = arg1;
                        var1 = _closure3_slot0;
                        var1 = var1._followers;
                        var3 = var1[var2];
                        var1 = null;
                        if(!(var1 == var3)) { _fun0005_ip = 44; continue _fun0005 }
 26:
                        var1 = _closure3_slot0;
                        var3 = var1._followers;
                        var1 = new Array(0);
                        var3[var2] = var1;
 44:
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
 243:
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
 0:
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
                if(!var6) { _fun0006_ip = 264; continue _fun0006 }
 53:
                var16 = var2._getMatch;
                var6 = var11.length;
                var6 = var9 + var6;
                var19 = var16.bind(var2)(var15, var12, var6);
                var21 = var15;
                if(!(var3 == var19)) { _fun0006_ip = 111; continue _fun0006 }
 84:
                var6 = var21[var14];
                var17 = var11 + var6;
                var6 = var21.substring;
                var15 = var6.bind(var21)(var13);
                var16 = var9;
                _fun0006_ip = 240; continue _fun0006;
 111:
                var6 = var3 != var11;
                if(!var6) { _fun0006_ip = 122; continue _fun0006 }
 118:
                var6 = var5 !== var11;
 122:
                if(!var6) { _fun0006_ip = 190; continue _fun0006 }
 125:
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
 190:
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
 240:
                var6 = var15.length;
                var11 = var17;
                var9 = var16;
                var10 = var11;
                var7 = var9;
                if(var6 > var14) { _fun0006_ip = 53; continue _fun0006 }
 264:
                var3 = var3 != var10;
                if(!var3) { _fun0006_ip = 275; continue _fun0006 }
 271:
                var3 = var5 !== var10;
 275:
                if(!var3) { _fun0006_ip = 343; continue _fun0006 }
 278:
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
 343:
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
 0:
                var6 = this;
                var9 = var6._rules;
                var8 = var9.forEach;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.cache;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0008_ip = 30; continue _fun0008 }
 20:
                        var2 = var3.clear;
                        var1 = var2.bind(var3)();
 30:
                        return var1;
                    }
                };
                var1 = var8.bind(var9)(var1);
                var4 = var6._followers;
                for(var1 in var4)
 40:
                {
 49:
                    var9 = var1;
                    var8 = var6._followers;
                    var10 = var8[var9];
                    var9 = var10.forEach;
                    var8 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var1 = arg1;
                            var3 = var1.cache;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0009_ip = 30; continue _fun0009 }
 20:
                            var2 = var3.clear;
                            var1 = var2.bind(var3)();
 30:
                            return var1;
                        }
                    };
                    var8 = var9.bind(var10)(var8);
                    _fun0007_ip = 40; continue _fun0007;
                }
 79:
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
 0:
                var6 = arg1;
                var1 = arg2;
                var5 = arg3;
                var2 = this;
                var3 = null;
                var4 = var3 != var1;
                var10 = null;
                if(!var4) { _fun0010_ip = 28; continue _fun0010 }
 23:
                var10 = var1.type;
 28:
                var8 = var3 == var1;
                var4 = undefined;
                var7 = undefined;
                if(var8) { _fun0010_ip = 44; continue _fun0010 }
 39:
                var7 = var1.end;
 44:
                var1 = undefined;
                if(!(var7 === var5)) { _fun0010_ip = 87; continue _fun0010 }
 50:
                var8 = _closure1_slot4;
                var9 = var2._followers;
                var7 = global;
                var7 = var7.String;
                var7 = var7.bind(var4)(var10);
                var7 = var9[var7];
                var1 = var8.bind(var4)(var6, var7, var5);
 87:
                if(!(var3 == var1)) { _fun0010_ip = 111; continue _fun0010 }
 91:
                var3 = _closure1_slot4;
                var2 = var2._rules;
                var1 = var3.bind(var4)(var6, var2, var5);
 111:
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
 0:
                var2 = arg1;
                var4 = arg2;
                var3 = this;
                var6 = _closure1_slot0;
                var5 = _closure2_slot0;
                var1 = undefined;
                var6 = var6.bind(var1)(var3, var5);
                var5 = var2 instanceof var5;
                if(var5) { _fun0011_ip = 142; continue _fun0011 }
 38:
                var8 = null;
                if(!(var8 == var2)) { _fun0011_ip = 73; continue _fun0011 }
 44:
                var5 = new Array(0);
                var3['match'] = var5;
                var5 = 0;
                var3['start'] = var5;
                var3['type'] = var4;
                _fun0011_ip = 213; continue _fun0011;
 73:
                var5 = new Array(0);
                var12 = var5;
                var11 = var2;
                var10 = 0;
                var7 = arraySpread(var12, var11, var10);
                var3['match'] = var5;
                var9 = 'string';
                var7 = typeof var2;
                var5 = 0;
                if(!(var9 !== var7)) { _fun0011_ip = 128; continue _fun0011 }
 108:
                var7 = var2.index;
                var8 = var8 != var7;
                var6 = 0;
                if(!var8) { _fun0011_ip = 125; continue _fun0011 }
 122:
                var6 = var7;
 125:
                var5 = var6;
 128:
                var3['start'] = var5;
                var3['type'] = var4;
                _fun0011_ip = 213; continue _fun0011;
 142:
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
                if(!(var4 != var5)) { _fun0011_ip = 213; continue _fun0011 }
 201:
                var2 = var2._data;
                var3['_data'] = var2;
 213:
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
 0:
                var2 = arguments[0];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0012_ip = 11; continue _fun0012 }
 9:
                var2 = 0;
 11:
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
 0:
                var1 = this;
                var3 = var1._data;
                var2 = null;
                if(!(var2 == var3)) { _fun0013_ip = 49; continue _fun0013 }
 15:
                var2 = global;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var7 = var3;
                var2 = new var7[var2](var6);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['_data'] = var2;
 49:
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
 0:
                var1 = this;
                var3 = var1._data;
                var2 = null;
                if(!(var2 == var3)) { _fun0014_ip = 19; continue _fun0014 }
 15:
                var2 = undefined;
                return var2;
 19:
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