// app/modules/markup/TimestampUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function formatTimestampMention(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.timestamp;
            var6 = var1.format;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 1;
            var1 = var9[var1];
            var4 = undefined;
            var2 = var8.bind(var4)(var1);
            var1 = global;
            var1 = var1.Number;
            var3 = var1.bind(var4)(var7);
            var1 = 2;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.Millis;
            var1 = var1.SECOND;
            var1 = var3 * var1;
            var3 = var2.bind(var4)(var1);
            var1 = var3.isValid;
            var2 = var1.bind(var3)();
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
            var8 = var1 != var6;
            var2 = undefined;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot3;
            var2 = var8[var6];
case 4:
            if(!(var1 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot3;
            var2 = var1.f;
case 6:
            var1 = {};
            var1['timestamp'] = var7;
            var1['format'] = var6;
            var1['parsed'] = var3;
            var6 = _closure1_slot3;
            var5 = var6.F;
            var5 = var5.bind(var6)(var3);
            var1['full'] = var5;
            var2 = var2.bind(var4)(var3);
            var1['formatted'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var5 = true;
    var6['value'] = var5;
    var5 = '__esModule';
    var5 = var9.bind(var10)(var3, var5, var6);
    var6 = {};
    var5 = function t(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dateFormat;
        var2 = arg1;
        var1 = 'LT';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6['t'] = var5;
    var5 = function T(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dateFormat;
        var2 = arg1;
        var1 = 'LTS';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6['T'] = var5;
    var5 = function d(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dateFormat;
        var2 = arg1;
        var1 = 'L';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6['d'] = var5;
    var5 = function D(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dateFormat;
        var2 = arg1;
        var1 = 'LL';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6['D'] = var5;
    var5 = function f(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dateFormat;
        var2 = arg1;
        var1 = 'LLL';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6['f'] = var5;
    var5 = function F(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dateFormat;
        var2 = arg1;
        var1 = 'LLLL';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6['F'] = var5;
    var5 = function s(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dateFormat;
        var2 = arg1;
        var1 = 'L LT';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6['s'] = var5;
    var5 = function S(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dateFormat;
        var2 = arg1;
        var1 = 'L LTS';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6['S'] = var5;
    var5 = function R(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = undefined;
            var12 = undefined;
            var11 = undefined;
            var5 = undefined;
            var2 = undefined;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 1;
            var9 = var7[var6];
            var10 = var8.bind(var4)(var9);
            var9 = var10.relativeTimeThreshold;
            var16 = 's';
            var12 = var9.bind(var10)(var16);
            var9 = var7[var6];
            var13 = var8.bind(var4)(var9);
            var10 = var13.relativeTimeThreshold;
            var9 = 60;
            var10 = var10.bind(var13)(var16, var9);
            var10 = var7[var6];
            var13 = var8.bind(var4)(var10);
            var10 = var13.relativeTimeThreshold;
            var14 = 'ss';
            var11 = var10.bind(var13)(var14);
            var10 = var7[var6];
            var15 = var8.bind(var4)(var10);
            var13 = var15.relativeTimeThreshold;
            var10 = -1;
            var10 = var13.bind(var15)(var14, var10);
            var10 = var7[var6];
            var15 = var8.bind(var4)(var10);
            var13 = var15.relativeTimeThreshold;
            var10 = 'm';
            var5 = var13.bind(var15)(var10);
            var7 = var7[var6];
            var8 = var8.bind(var4)(var7);
            var7 = var8.relativeTimeThreshold;
            var7 = var7.bind(var8)(var10, var9);
            var7 = null;
            var2 = null;
case 8: // try_start_0
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var9 = var9.bind(var4)(var8);
            var13 = var1;
            var8 = var13.toDate;
            var8 = var8.bind(var13)();
            var9 = var9.bind(var4)(var8);
            var8 = var9.fromNow;
            var2 = var8.bind(var9)();
case 9: // try_end0
            _fun0002_ip = 10; continue _fun0002;
case 11: // catch_target0
            CatchBlockStart(arg_register=7);
case 10:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var13 = var8[var6];
            var15 = var9.bind(var4)(var13);
            var13 = var15.relativeTimeThreshold;
            var12 = var13.bind(var15)(var16, var12);
            var12 = var8[var6];
            var13 = var9.bind(var4)(var12);
            var12 = var13.relativeTimeThreshold;
            var11 = var12.bind(var13)(var14, var11);
            var8 = var8[var6];
            var9 = var9.bind(var4)(var8);
            var8 = var9.relativeTimeThreshold;
            var5 = var8.bind(var9)(var10, var5);
            var5 = var2;
            if(!(var7 == var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var4)(var3);
            var5 = var1;
            var1 = var5.toDate;
            var1 = var1.bind(var5)();
            var3 = var3.bind(var4)(var1);
            var1 = var3.fromNow;
            var1 = var1.bind(var3)();
            _fun0002_ip = 14; continue _fun0002;
case 12:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var6['R'] = var5;
    var _closure1_slot3 = var6;
    var10 = var1.Object;
    var9 = var10.setPrototypeOf;
    var5 = null;
    var5 = var9.bind(var10)(var6, var5);
    var9 = var1.Object;
    var5 = var9.keys;
    var10 = var5.bind(var9)(var6);
    var9 = var10.join;
    var5 = '|';
    var11 = var9.bind(var10)(var5);
    var9 = var1.RegExp;
    var1 = var1.HermesInternal;
    var10 = var1.concat;
    var5 = '^<t:(-?\\d{1,17})(?::(';
    var1 = '))?>';
    var14 = var10.bind(var5)(var11, var1);
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var1 = new var15[var9](var14, var13);
    var5 = var1 instanceof Object ? var1 : var5;
    var1 = 3;
    var7 = var7[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/markup/TimestampUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['TIMESTAMP_FORMATS'] = var6;
    var6 = 'f';
    var3['DEFAULT_TIMESTAMP_FORMAT'] = var6;
    var3['TIMESTAMP_REGEX'] = var5;
    var3['formatTimestampMention'] = var4;
    var4 = function parseTimestamp(arg1, arg2) {
        var3 = _closure1_slot4;
        var2 = {};
        var1 = arg1;
        var2['timestamp'] = var1;
        var1 = arg2;
        var2['format'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['parseTimestamp'] = var4;
    var2 = function unparseTimestamp(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var1 = null;
            if(!(var1 == var6)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '<t:';
            var1 = '>';
            var1 = var3.bind(var2)(var7, var1);
            _fun0003_ip = 17; continue _fun0003;
case 15:
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var12 = '<t:';
            var10 = ':';
            var8 = '>';
            var11 = var7;
            var9 = var6;
            var1 = var12[var5](var11, var10, var9, var8, var7);
case 17:
            return var1;
        }
    };
    var3['unparseTimestamp'] = var2;
    return var1;
})();