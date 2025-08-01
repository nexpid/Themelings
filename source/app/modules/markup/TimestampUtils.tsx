// app/modules/markup/TimestampUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var3, var4, var5);
    var5 = {};
    var4 = function t(arg1) {
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
    var5['t'] = var4;
    var4 = function T(arg1) {
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
    var5['T'] = var4;
    var4 = function d(arg1) {
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
    var5['d'] = var4;
    var4 = function D(arg1) {
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
    var5['D'] = var4;
    var4 = function f(arg1) {
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
    var5['f'] = var4;
    var4 = function F(arg1) {
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
    var5['F'] = var4;
    var4 = function R(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
 175: // try_start_0
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
 220: // try_end0
            _fun0001_ip = 224; continue _fun0001;
 222: // catch_target0
            CatchBlockStart(arg_register=7);
 224:
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
            if(!(var7 == var5)) { _fun0001_ip = 349; continue _fun0001 }
 302:
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
            _fun0001_ip = 352; continue _fun0001;
 349:
            var1 = var2;
 352:
            return var1;
        }
    };
    var5['R'] = var4;
    var _closure1_slot3 = var5;
    var9 = var1.Object;
    var8 = var9.setPrototypeOf;
    var4 = null;
    var4 = var8.bind(var9)(var5, var4);
    var8 = var1.Object;
    var4 = var8.keys;
    var9 = var4.bind(var8)(var5);
    var8 = var9.join;
    var4 = '|';
    var10 = var8.bind(var9)(var4);
    var8 = var1.RegExp;
    var1 = var1.HermesInternal;
    var9 = var1.concat;
    var4 = '^<t:(-?\\d{1,17})(?::(';
    var1 = '))?>';
    var13 = var9.bind(var4)(var10, var1);
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var1 = new var14[var8](var13, var12);
    var4 = var1 instanceof Object ? var1 : var4;
    var1 = 3;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/markup/TimestampUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['TIMESTAMP_FORMATS'] = var5;
    var5 = 'f';
    var3['DEFAULT_TIMESTAMP_FORMAT'] = var5;
    var3['TIMESTAMP_REGEX'] = var4;
    var4 = function parseTimestamp(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
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
            if(var2) { _fun0002_ip = 94; continue _fun0002 }
 92:
            return var1;
 94:
            var8 = var1 != var6;
            var2 = undefined;
            if(!var8) { _fun0002_ip = 111; continue _fun0002 }
 103:
            var8 = _closure1_slot3;
            var2 = var8[var6];
 111:
            if(!(var1 == var2)) { _fun0002_ip = 125; continue _fun0002 }
 115:
            var1 = _closure1_slot3;
            var2 = var1.f;
 125:
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
    var3['parseTimestamp'] = var4;
    var2 = function unparseTimestamp(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var1 = null;
            if(!(var1 == var6)) { _fun0003_ip = 43; continue _fun0003 }
 12:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '<t:';
            var1 = '>';
            var1 = var3.bind(var2)(var7, var1);
            _fun0003_ip = 80; continue _fun0003;
 43:
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var12 = '<t:';
            var10 = ':';
            var8 = '>';
            var11 = var7;
            var9 = var6;
            var1 = var12[var5](var11, var10, var9, var8, var7);
 80:
            return var1;
        }
    };
    var3['unparseTimestamp'] = var2;
    return var1;
})();