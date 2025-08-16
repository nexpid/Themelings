// discord_common/js/shared/utils/SnowflakeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var6 = function extractTimestamp(arg1) {
        var1 = global;
        var3 = var1.Math;
        var2 = var3.floor;
        var5 = var1.Number;
        var4 = undefined;
        var1 = arg1;
        var4 = var5.bind(var4)(var1);
        var1 = 4194304;
        var1 = var4 / var1;
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot4;
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot5 = var6;
    var5 = function fromTimestamp(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot4;
            var1 = arg1;
            var4 = var1 - var3;
            var1 = '0';
            var3 = 0;
            if(!(!(var4 <= var3))) { _fun0001_ip = 76; continue _fun0001 }
 26:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var4 = var2.bind(var3)(var4);
            var3 = var4.shiftLeft;
            var2 = 22;
            var3 = var3.bind(var4)(var2);
            var2 = var3.toString;
            var1 = var2.bind(var3)();
 76:
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var9[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var7 = 1420070400000.0;
    var _closure1_slot4 = var7;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function SnowflakeSequence() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = 0;
            var3['seq'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'next';
        var1['key'] = var2;
        var2 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = this;
                var3 = var2.seq;
                var1 = 4095;
                if(!(!(var3 > var1))) { _fun0002_ip = 39; continue _fun0002 }
 19:
                var1 = var2.seq;
                var1 = parseFloat(var1);
                var3 = var1 + 1;
                var2['seq'] = var3;
                return var1;
 39:
                var1 = global;
                var3 = var1.Error;
                var4 = var2.seq;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Snowflake sequence number overflow: ';
                var5 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'willOverflowNext';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.seq;
            var1 = 4095;
            var1 = var2 > var1;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var5 = function value() {
            var2 = 0;
            var1 = this;
            var1['seq'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var8 = 3;
    var9 = var9[var8];
    var8 = require;
    var10 = var8.bind(var1)(var9);
    var9 = var10.fileFinishedImporting;
    var8 = '../discord_common/js/shared/utils/SnowflakeUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['DISCORD_EPOCH'] = var7;
    var7 = 4095;
    var3['MAX_SNOWFLAKE_SEQ'] = var7;
    var3['extractTimestamp'] = var6;
    var3['fromTimestamp'] = var5;
    var5 = function fromTimestampWithSequence(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg2;
            var3 = _closure1_slot4;
            var2 = arg1;
            var5 = var2 - var3;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            if(!(!(var5 <= var1))) { _fun0003_ip = 48; continue _fun0003 }
 45:
            var1 = var5;
 48:
            var3 = var2.bind(var3)(var1);
            var2 = var3.shiftLeft;
            var1 = 22;
            var3 = var2.bind(var3)(var1);
            var2 = var3.add;
            var1 = var4.next;
            var1 = var1.bind(var4)();
            var2 = var2.bind(var3)(var1);
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['fromTimestampWithSequence'] = var5;
    var5 = function atPreviousMillisecond(arg1) {
        var3 = _closure1_slot6;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg1;
        var4 = var4.bind(var2)(var1);
        var1 = 1;
        var1 = var4 - var1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['atPreviousMillisecond'] = var5;
    var5 = function atNextMillisecond(arg1) {
        var3 = _closure1_slot6;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg1;
        var4 = var4.bind(var2)(var1);
        var1 = 1;
        var1 = var4 + var1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['atNextMillisecond'] = var5;
    var5 = function age(arg1) {
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        var4 = _closure1_slot5;
        var3 = undefined;
        var1 = arg1;
        var1 = var4.bind(var3)(var1);
        var1 = var2 - var1;
        return var1;
    };
    var3['age'] = var5;
    var5 = function compare(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var9 = arg1;
            var8 = arg2;
            var1 = 0;
            if(!(var9 !== var8)) { _fun0004_ip = 108; continue _fun0004 }
 12:
            var3 = null;
            var4 = var3 == var8;
            var7 = 1;
            var2 = var7;
            if(var4) { _fun0004_ip = 105; continue _fun0004 }
 27:
            var4 = var3 == var9;
            var6 = -1;
            var3 = var6;
            if(var4) { _fun0004_ip = 102; continue _fun0004 }
 43:
            var5 = var9.length;
            var4 = var8.length;
            var5 = var5 > var4;
            var4 = var7;
            if(var5) { _fun0004_ip = 99; continue _fun0004 }
 63:
            var10 = var9.length;
            var5 = var8.length;
            var10 = var10 < var5;
            var5 = var6;
            if(var10) { _fun0004_ip = 96; continue _fun0004 }
 83:
            var8 = var9 > var8;
            if(!var8) { _fun0004_ip = 93; continue _fun0004 }
 90:
            var6 = var7;
 93:
            var5 = var6;
 96:
            var4 = var5;
 99:
            var3 = var4;
 102:
            var2 = var3;
 105:
            var1 = var2;
 108:
            return var1;
        }
    };
    var3['compare'] = var5;
    var4 = function isProbablyAValidSnowflake(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 79; continue _fun0005 }
 12:
            var4 = /^\d{17,19}$/;
            var3 = var4.test;
            var1 = var2;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0005_ip = 46; continue _fun0005 }
 42:
            var1 = false;
            return var1;
 46: // try_start_0
            var4 = _closure1_slot5;
            var3 = var2;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var1 = _closure1_slot4;
            var1 = var2 >= var1;
 71: // try_end0
            return var1;
 73: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = false;
            return var1;
 79:
            var1 = false;
            return var1;
        }
    };
    var3['isProbablyAValidSnowflake'] = var4;
    var3['SnowflakeSequence'] = var2;
    return var1;
})();