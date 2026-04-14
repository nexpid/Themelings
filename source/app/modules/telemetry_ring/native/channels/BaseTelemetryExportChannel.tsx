// app/modules/telemetry_ring/native/channels/BaseTelemetryExportChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function BaseTelemetryExportChannel(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot4;
                var3 = _closure2_slot4;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var3 = false;
                var1['_initialized'] = var3;
                var5 = null;
                var1['_timer'] = var5;
                var1['_inflight'] = var5;
                var1['_resetting'] = var3;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var13 = 'TelemetryRing';
                var14 = var3;
                var2 = new var14[var4](var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['_logger'] = var2;
                return var1;
            }
        };
        var _closure2_slot4 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'getIntervalMs';
        var5['key'] = var1;
        var1 = function value() {
            var1 = 500;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(14);
        var1[0] = var5;
        var5 = {};
        var8 = 'getExportBatchSize';
        var5['key'] = var8;
        var8 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'initialize';
        var5['key'] = var8;
        var8 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var1 = var2._initialized;
                if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = true;
                var2['_initialized'] = var1;
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'reset';
        var5['key'] = var8;
        var8 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.stop;
                var3 = var3.bind(var2)();
                var3 = var2._resetting;
                if(var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = true;
                var2['_resetting'] = var3;
                var3 = var2._clearAckedEndOffset;
                var3 = var3.bind(var2)();
                var4 = var2._inflight;
                var3 = null;
                if(!(var3 != var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = var4.finally;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = false;
                    var2['_resetting'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                _fun0004_ip = 11; continue _fun0004;
case 13:
                var1 = false;
                var2['_resetting'] = var1;
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[3] = var5;
        var5 = {};
        var8 = 'start';
        var5['key'] = var8;
        var8 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.shouldRun;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var5 = var2._timer;
                var4 = null;
                var3 = var4 == var5;
case 15:
                if(!var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var4 = var2._kick;
                var3 = {'mode': 'backlog', 'flush': false};
                var3 = var4.bind(var2)(var3);
                var3 = global;
                var5 = var3.setInterval;
                var3 = var2.getIntervalMs;
                var4 = var3.bind(var2)();
                var3 = undefined;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3._kick;
                    var1 = {'mode': 'stream', 'flush': false};
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var5.bind(var3)(var1, var4);
                var2['_timer'] = var1;
case 17:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[4] = var5;
        var5 = {};
        var8 = 'stop';
        var5['key'] = var8;
        var8 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var3 = var2._timer;
                var1 = null;
                if(!(var1 != var3)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var3 = global;
                var5 = var3.clearInterval;
                var4 = var2._timer;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['_timer'] = var1;
case 19:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[5] = var5;
        var5 = {};
        var8 = 'flushNow';
        var5['key'] = var8;
        var8 = _closure1_slot3;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var2 = var4.shouldRun;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var3 = var4._kick;
                    var2 = {'mode': 'stream', 'flush': true};
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=52);
case 25:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 27; continue _fun0007 }
case 23:
                    var3 = undefined;
                    return var3;
case 27:
                    return var2;
case 21:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot3 = var7;
        var7 = function flushNow() {
            var1 = undefined;
            var4 = _closure2_slot3;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = '_readAckedEndOffset';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = this;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.Storage;
                var2 = var3.get;
                var1 = var4.getAckedEndOffsetStorageKey;
                var1 = var1.bind(var4)();
                var2 = var2.bind(var3)(var1);
                var4 = -1;
                var5 = 'number';
                var3 = typeof var2;
                var1 = var4;
                if(!(var5 === var3)) { _fun0008_ip = 28; continue _fun0008 }
case 5:
                var3 = global;
                var5 = var3.Number;
                var3 = var5.isFinite;
                var3 = var3.bind(var5)(var2);
                var1 = var4;
                if(!var3) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var1 = var2;
case 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = '_writeAckedEndOffset';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var5 = var2.Storage;
            var4 = var5.set;
            var2 = var3.getAckedEndOffsetStorageKey;
            var3 = var2.bind(var3)();
            var2 = arg1;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = '_clearAckedEndOffset';
        var5['key'] = var7;
        var7 = function value() {
            var5 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.remove;
            var2 = var5.getAckedEndOffsetStorageKey;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = '_kick';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = var2.shouldRun;
                var1 = var1.bind(var2)();
                if(var1) { _fun0009_ip = 30; continue _fun0009 }
case 16:
                var1 = global;
                var4 = var1.Promise;
                var1 = var4.resolve;
                var1 = var1.bind(var4)();
                _fun0009_ip = 31; continue _fun0009;
case 30:
                var5 = var2._inflight;
                var4 = null;
                if(!(var4 == var5)) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                var5 = var2._drainOnce;
                var4 = arg1;
                var6 = var5.bind(var2)(var4);
                var5 = var6.catch;
                var4 = function(arg1) {
                    var1 = _closure3_slot0;
                    var4 = var1._logger;
                    var3 = var4.warn;
                    var2 = 'TelemetryRing export failed';
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.finally;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = null;
                    var2['_inflight'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var2['_inflight'] = var3;
case 32:
                var1 = var2._inflight;
case 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = '_drainOnce';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    var7 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                    var4 = var7.getBudget;
                    var2 = var3.mode;
                    var6 = var4.bind(var7)(var2);
                    var2 = var7._readAckedEndOffset;
                    var2 = var2.bind(var7)();
                    var8 = 0;
                    var9 = var2 >= var8;
                    var4 = undefined;
                    var5 = undefined;
                    if(!var9) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                    var5 = var2;
case 36:
                    var2 = var7._collectPages;
                    var2 = var2.bind(var7)(var6, var5);
                    SaveGenerator(address=80);
case 38:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 39; continue _fun0010 }
case 40:
                    var5 = var2.length;
                    if(!(var8 !== var5)) { _fun0010_ip = 41; continue _fun0010 }
case 42:
                    var5 = var7._exportPages;
                    var3 = var3.flush;
                    var3 = var5.bind(var7)(var2, var3);
                    SaveGenerator(address=122);
case 43:
                    return var3;
case 44:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                    if(!var3) { _fun0010_ip = 41; continue _fun0010 }
case 47:
                    var5 = var2[var8];
                    var6 = var5.maxReturnedEndOffset;
                    var5 = var7._resetting;
                    if(var5) { _fun0010_ip = 41; continue _fun0010 }
case 48:
                    var9 = 'number';
                    var5 = typeof var6;
                    var5 = var9 === var5;
                    if(!var5) { _fun0010_ip = 49; continue _fun0010 }
case 50:
                    var9 = global;
                    var10 = var9.Number;
                    var9 = var10.isFinite;
                    var5 = var9.bind(var10)(var6);
case 49:
                    if(!var5) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                    var5 = var6 >= var8;
case 51:
                    if(!var5) { _fun0010_ip = 41; continue _fun0010 }
case 53:
                    var5 = var7._writeAckedEndOffset;
                    var5 = var5.bind(var7)(var6);
case 41:
                    return var4;
case 45:
                    return var3;
case 39:
                    return var2;
case 34:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot2 = var7;
        var7 = function _drainOnce() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = '_collectPages';
        var5['key'] = var7;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    var9 = arg2;
                    var8 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                    var3 = new Array(0);
                    var7 = -1;
                    var6 = 0;
                    var5 = global;
case 56:
                    var2 = var8.snapshot;
                    var2 = var2.bind(var8)(var7, var10, var9);
                    SaveGenerator(address=50);
case 57:
                    return var2;
case 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                    var12 = var5.Array;
                    var11 = var12.isArray;
                    var4 = var2.entries;
                    var4 = var11.bind(var12)(var4);
                    if(!var4) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                    var4 = var2.entries;
                    var4 = var4.length;
                    if(!(var6 !== var4)) { _fun0011_ip = 60; continue _fun0011 }
case 62:
                    var11 = var3.push;
                    var4 = {};
                    var12 = var2.entries;
                    var4['entries'] = var12;
                    var12 = var2.maxReturnedEndOffset;
                    var4['maxReturnedEndOffset'] = var12;
                    var12 = var2.nextBeforeOffset;
                    var4['nextBeforeOffset'] = var12;
                    var4 = var11.bind(var3)(var4);
                    var7 = var2.nextBeforeOffset;
                    var4 = var2.hasMore;
                    if(var4) { _fun0011_ip = 56; continue _fun0011 }
case 63:
                    return var3;
case 60:
                    return var3;
case 58:
                    return var2;
case 54:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = function _collectPages() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = '_exportPages';
        var5['key'] = var7;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var13 = arg1;
                    var12 = arg2;
                    var11 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 64; continue _fun0012 }
case 55:
                    var2 = var11.getExportBatchSize;
                    var10 = var2.bind(var11)();
                    var3 = var13.length;
                    var2 = 1;
                    var9 = var3 - var2;
                    var5 = undefined;
                    var8 = 0;
                    var7 = global;
                    var6 = null;
                    var4 = undefined;
                    var3 = undefined;
                    if(!(var9 >= var8)) { _fun0012_ip = 65; continue _fun0012 }
case 36:
                    var18 = var13[var9];
                    if(!(var6 != var10)) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                    var17 = var10;
                    if(!(!(var17 > var8))) { _fun0012_ip = 11; continue _fun0012 }
case 66:
                    var2 = var18.entries;
                    var17 = var2.length;
case 11:
                    var2 = var18.entries;
                    var2 = var2.length;
                    var2 = var8 < var2;
                    var16 = var8 === var9;
                    var15 = 0;
                    if(!var2) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                    var20 = var7.Math;
                    var19 = var20.min;
                    var14 = var15 + var17;
                    var2 = var18.entries;
                    var2 = var2.length;
                    var21 = var19.bind(var20)(var14, var2);
                    var14 = var18.entries;
                    var2 = var14.slice;
                    var20 = var2.bind(var14)(var15, var21);
                    var14 = var15;
                    var19 = var16;
                    if(!var19) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                    var2 = var18.entries;
                    var2 = var2.length;
                    var19 = var21 === var2;
case 70:
                    var22 = var11.exportEntries;
                    var2 = var12;
                    if(!var2) { _fun0012_ip = 41; continue _fun0012 }
case 72:
                    var2 = var19;
case 41:
                    var2 = var22.bind(var11)(var20, var2);
                    SaveGenerator(address=216);
case 73:
                    return var2;
case 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=21);
                    if(var22) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                    if(var2) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                    var22 = false;
                    return var22;
case 77:
                    var15 = var14 + var17;
                    var14 = var18.entries;
                    var14 = var14.length;
                    var5 = var21;
                    var4 = var20;
                    var3 = var19;
                    if(var15 < var14) { _fun0012_ip = 69; continue _fun0012 }
case 68:
                    var9 = var9 - 1;
                    if(var9 >= var8) { _fun0012_ip = 36; continue _fun0012 }
case 65:
                    var3 = true;
                    return var3;
case 75:
                    return var2;
case 64:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function _exportPages() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[13] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/telemetry_ring/native/channels/BaseTelemetryExportChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();