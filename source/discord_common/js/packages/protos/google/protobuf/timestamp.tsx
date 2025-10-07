// discord_common/js/packages/protos/google/protobuf/timestamp.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageType;
    var2 = function(arg1) {
        var4 = function Timestamp$Type() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var1 = new Array(2);
                var6 = {'no': 1, 'name': 'seconds', 'kind': 'scalar', 'T': 3};
                var1[0] = var6;
                var6 = {'no': 2, 'name': 'nanos', 'kind': 'scalar', 'T': 5};
                var1[1] = var6;
                var9 = ['google.protobuf.Timestamp'];
                var9[1] = var1;
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'now';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var1 = var2.create;
            var1 = var1.bind(var2)();
            var2 = global;
            var4 = var2.Date;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 6;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var6 = var4.PbLong;
            var5 = var6.from;
            var8 = var2.Math;
            var7 = var8.floor;
            var2 = 1000;
            var4 = var3 / var2;
            var4 = var7.bind(var8)(var4);
            var5 = var5.bind(var6)(var4);
            var4 = var5.toString;
            var4 = var4.bind(var5)();
            var1['seconds'] = var4;
            var3 = var3 % var2;
            var2 = 1000000;
            var2 = var3 * var2;
            var1['nanos'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'toDate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var4 = global;
            var3 = var4.Date;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 6;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var6 = var2.PbLong;
            var5 = var6.from;
            var2 = var1.seconds;
            var5 = var5.bind(var6)(var2);
            var2 = var5.toNumber;
            var5 = var2.bind(var5)();
            var2 = 1000;
            var2 = var2 * var5;
            var5 = var4.Math;
            var4 = var5.ceil;
            var6 = var1.nanos;
            var1 = 1000000;
            var1 = var6 / var1;
            var1 = var4.bind(var5)(var1);
            var7 = var2 + var1;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'fromDate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var2 = this;
            var1 = var2.create;
            var1 = var1.bind(var2)();
            var2 = var3.getTime;
            var3 = var2.bind(var3)();
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var6 = var2.PbLong;
            var5 = var6.from;
            var2 = global;
            var8 = var2.Math;
            var7 = var8.floor;
            var2 = 1000;
            var4 = var3 / var2;
            var4 = var7.bind(var8)(var4);
            var5 = var5.bind(var6)(var4);
            var4 = var5.toString;
            var4 = var4.bind(var5)();
            var1['seconds'] = var4;
            var3 = var3 % var2;
            var2 = 1000000;
            var2 = var3 * var2;
            var1['nanos'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalJsonWrite';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var10 = 6;
                var3 = var1[var10];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var4 = var1.PbLong;
                var3 = var4.from;
                var1 = var2.seconds;
                var3 = var3.bind(var4)(var1);
                var1 = var3.toNumber;
                var3 = var1.bind(var3)();
                var1 = 1000;
                var4 = var1 * var3;
                var1 = global;
                var6 = var1.Date;
                var5 = var6.parse;
                var3 = '0001-01-01T00:00:00Z';
                var3 = var5.bind(var6)(var3);
                if(!(!(var4 < var3))) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var6 = var1.Date;
                var5 = var6.parse;
                var3 = '9999-12-31T23:59:59Z';
                var3 = var5.bind(var6)(var3);
                if(!(!(var4 > var3))) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                var3 = var2.nanos;
                var9 = 0;
                if(!(!(var3 < var9))) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var3 = var2.nanos;
                var3 = var3 > var9;
                var6 = 'Z';
                var5 = var6;
                if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var3 = var2.nanos;
                var2 = 1000000000;
                var3 = var3 + var2;
                var2 = var3.toString;
                var7 = var2.bind(var3)();
                var3 = var7.substring;
                var2 = 1;
                var8 = var3.bind(var7)(var2);
                var2 = var8.substring;
                var7 = 3;
                var3 = var2.bind(var8)(var7);
                var2 = '000000';
                if(!(var2 !== var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var2 = var8.substring;
                var3 = var2.bind(var8)(var10);
                var2 = '000';
                if(!(var2 !== var3)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var2 = '.';
                var2 = var2 + var8;
                var2 = var2 + var6;
                _fun0003_ip = 20; continue _fun0003;
case 18:
                var3 = var8.substring;
                var10 = var3.bind(var8)(var9, var10);
                var3 = '.';
                var3 = var3 + var10;
                var2 = var3 + var6;
case 20:
                _fun0003_ip = 21; continue _fun0003;
case 16:
                var3 = var8.substring;
                var7 = var3.bind(var8)(var9, var7);
                var3 = '.';
                var3 = var3 + var7;
                var2 = var3 + var6;
case 21:
                var5 = var2;
case 14:
                var2 = var1.Date;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var13 = var3;
                var12 = var4;
                var2 = new var13[var2](var12, var11);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var3.toISOString;
                var4 = var2.bind(var3)();
                var3 = var4.replace;
                var2 = '.000Z';
                var2 = var3.bind(var4)(var2, var5);
                return var2;
case 12:
                var4 = var1.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var12 = 'Unable to encode invalid Timestamp to JSON. Nanos must not be negative.';
                var13 = var3;
                var2 = new var13[var4](var12, var11);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
case 9:
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var12 = 'Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.';
                var13 = var2;
                var1 = new var13[var3](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'internalJsonRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var2 = arg3;
                var5 = this;
                var3 = 'string';
                var1 = typeof var4;
                if(!(var3 === var1)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var3 = var4.match;
                var1 = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/;
                var10 = var3.bind(var4)(var1);
                var1 = global;
                if(var10) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var7 = var1.Error;
                var3 = var7.prototype;
                var6 = Object.create(var3, {constructor: {value: var7}});
                var13 = 'Unable to parse Timestamp from JSON. Invalid format.';
                var14 = var6;
                var3 = new var14[var7](var13, var12);
                var3 = var3 instanceof Object ? var3 : var6;
                throw var3;
case 24:
                var8 = var1.Date;
                var7 = var8.parse;
                var3 = 1;
                var3 = var10[var3];
                var9 = '-';
                var6 = var3 + var9;
                var3 = 2;
                var3 = var10[var3];
                var3 = var6 + var3;
                var6 = 3;
                var6 = var10[var6];
                var3 = var3 + var9;
                var9 = var3 + var6;
                var3 = 4;
                var6 = var10[var3];
                var3 = 'T';
                var3 = var9 + var3;
                var3 = var3 + var6;
                var6 = 5;
                var6 = var10[var6];
                var11 = ':';
                var3 = var3 + var11;
                var3 = var3 + var6;
                var6 = 6;
                var9 = var10[var6];
                var3 = var3 + var11;
                var9 = var3 + var9;
                var11 = 8;
                var12 = var10[var11];
                var3 = 'Z';
                if(!var12) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var3 = var10[var11];
case 26:
                var3 = var9 + var3;
                var8 = var7.bind(var8)(var3);
                var7 = var1.Number;
                var3 = var7.isNaN;
                var3 = var3.bind(var7)(var8);
                if(var3) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var9 = var1.Date;
                var7 = var9.parse;
                var3 = '0001-01-01T00:00:00Z';
                var3 = var7.bind(var9)(var3);
                if(!(!(var8 < var3))) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var9 = var1.Date;
                var7 = var9.parse;
                var3 = '9999-12-31T23:59:59Z';
                var3 = var7.bind(var9)(var3);
                if(!(!(var8 > var3))) { _fun0004_ip = 30; continue _fun0004 }
case 32:
                if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var3 = var5.create;
                var2 = var3.bind(var5)();
case 33:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var6 = undefined;
                var3 = var5.bind(var6)(var3);
                var7 = var3.PbLong;
                var5 = var7.from;
                var3 = 1000;
                var3 = var8 / var3;
                var5 = var5.bind(var7)(var3);
                var3 = var5.toString;
                var3 = var3.bind(var5)();
                var2['seconds'] = var3;
                var3 = 0;
                var2['nanos'] = var3;
                var3 = 7;
                var5 = var10[var3];
                if(!var5) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var5 = var1.parseInt;
                var8 = var10[var3];
                var7 = '1';
                var7 = var7 + var8;
                var9 = '0';
                var8 = var9.repeat;
                var3 = var10[var3];
                var10 = var3.length;
                var3 = 9;
                var3 = var3 - var10;
                var3 = var8.bind(var9)(var3);
                var3 = var7 + var3;
                var5 = var5.bind(var6)(var3);
                var3 = 1000000000;
                var3 = var5 - var3;
                var2['nanos'] = var3;
case 35:
                return var2;
case 30:
                var2 = var1.globalThis;
                var5 = var2.Error;
                var2 = var5.prototype;
                var3 = Object.create(var2, {constructor: {value: var5}});
                var13 = 'Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.';
                var14 = var3;
                var2 = new var14[var5](var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
case 28:
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var13 = 'Unable to parse Timestamp from JSON. Invalid value.';
                var14 = var2;
                var1 = new var14[var3](var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
case 22:
                var1 = global;
                var3 = var1.Error;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.typeofJsonValue;
                var2 = var1.bind(var2)(var4);
                var1 = 'Unable to parse Timestamp from JSON ';
                var4 = var1 + var2;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var1 = '.';
                var13 = var4 + var1;
                var14 = var2;
                var1 = new var14[var3](var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'create';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'seconds': '0', 'nanos': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 39:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0006_ip = 43; continue _fun0006 }
case 37:
                if(!(var7 !== var26)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var22 = var20;
                if(!(var10 === var20)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 50:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0006_ip = 48; continue _fun0006;
case 46:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 44:
                var2 = var17.int32;
                var2 = var2.bind(var17)();
                var1['nanos'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0006_ip = 48; continue _fun0006;
case 43:
                var2 = var17.int64;
                var20 = var2.bind(var17)();
                var2 = var20.toString;
                var2 = var2.bind(var20)();
                var1['seconds'] = var2;
                var19 = var4;
                var18 = var3;
case 48:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0006_ip = 42; continue _fun0006 }
case 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.seconds;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int64;
                var2 = var5.seconds;
                var2 = var3.bind(var4)(var2);
case 52:
                var3 = var5.nanos;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0007_ip = 15; continue _fun0007 }
case 10:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 2;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.nanos;
                var2 = var3.bind(var4)(var2);
case 15:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var2 = 1;
                if(!(var2 == var4)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 56:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 54:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/protos/google/protobuf/timestamp.tsx';
    var4 = var5.bind(var6)(var4);
    var3['Timestamp'] = var2;
    return var1;
})();