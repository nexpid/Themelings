// app/modules/errors/native/SentryInitUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _maybeBackfillMissingBreadcrumbsFromTelemetryRing() {
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
                    var2 = var4.breadcrumbs;
                    var6 = global;
                    var7 = var6.Array;
                    var5 = var7.isArray;
                    var5 = var5.bind(var7)(var2);
                    if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = var2.length;
                    var2 = 0;
                    if(!(!(var5 > var2))) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var5 = var2.SentryTelemetry;
                    var2 = var5.snapshotForBreadcrumbs;
                    var8 = var2.bind(var5)();
                    var7 = var6.Promise;
                    var5 = var7.race;
                    var2 = new Array(2);
                    var2[0] = var8;
                    var10 = var6.Promise;
                    var8 = var10.prototype;
                    var9 = Object.create(var8, {constructor: {value: var10}});
                    var11 = function(arg1, arg2) {
                        var2 = arg2;
                        var _closure5_slot0 = var2;
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = undefined;
                        var2 = function() {
                            var3 = _closure5_slot0;
                            var1 = global;
                            var4 = var1.Error;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var5 = 'TelemetryRing breadcrumb timeout';
                            var6 = var2;
                            var1 = new var6[var4](var5, var4);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1 = 200;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var12 = var9;
                    var8 = new var12[var10](var11, var10);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var2[1] = var8;
                    var7 = var5.bind(var7)(var2);
                    var5 = var7.catch;
                    var2 = function() {
                        var1 = null;
                        return var1;
                    };
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=179);
case 7:
                    return var2;
case 8:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var5 = null;
                    var5 = var5 != var2;
                    if(!var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var8 = var6.Array;
                    var7 = var8.isArray;
                    var6 = var2.entries;
                    var5 = var7.bind(var8)(var6);
case 11:
                    if(!var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var6 = var2.entries;
                    var7 = var6.length;
                    var6 = 0;
                    var5 = var6 !== var7;
case 13:
                    if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 15:
                    var6 = var2.entries;
                    var5 = var6.map;
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var2 = arg1;
                            var1 = {};
                            var3 = var2.message;
                            var4 = null;
                            if(!(var4 == var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                            var3 = var2.key;
case 16:
                            var1['message'] = var3;
                            var3 = 'telemetry_ring';
                            var1['category'] = var3;
                            var4 = var2.timestamp;
                            var3 = 1000;
                            var3 = var4 / var3;
                            var1['timestamp'] = var3;
                            var2 = var2.data;
                            var1['data'] = var2;
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var3);
                    var4['breadcrumbs'] = var3;
                    _fun0001_ip = 6; continue _fun0001;
case 9:
                    return var2;
case 6:
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function filterError(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var7;
            var1 = null;
            var5 = var1 == var7;
            var4 = undefined;
            var8 = undefined;
            if(var5) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var8 = var7.originalException;
case 18:
            var5 = var1 == var8;
            var6 = undefined;
            if(var5) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var6 = var8.status;
case 20:
            if(!var6) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var5 = 400;
            var6 = var6 >= var5;
            var5 = true;
            if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 22:
            var9 = var1 == var8;
            var6 = undefined;
            if(var9) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var6 = var8.captchaFields;
case 25:
            var6 = var1 != var6;
            var9 = null;
            if(!var6) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var10 = var1 == var8;
            var6 = undefined;
            if(var10) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var6 = var8.code;
case 29:
            var9 = var6;
case 27:
            var5 = false;
            if(!var9) { _fun0003_ip = 24; continue _fun0003 }
case 31:
            var6 = 0;
            var6 = var9 < var6;
            var5 = false;
            if(!var6) { _fun0003_ip = 24; continue _fun0003 }
case 32:
            var5 = true;
case 24:
            if(var5) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var8 = var1 == var7;
            var6 = undefined;
            if(var8) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var6 = var7.originalException;
case 35:
            var8 = var1 == var6;
            var9 = undefined;
            if(var8) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var6 = var6.err;
            var8 = var1 == var6;
            var9 = undefined;
            if(var8) { _fun0003_ip = 37; continue _fun0003 }
case 39:
            var9 = var6.code;
case 37:
            var8 = 'ABORTED';
            var6 = false;
            if(!(var8 === var9)) { _fun0003_ip = 40; continue _fun0003 }
case 10:
            var6 = true;
case 40:
            var5 = var6;
case 33:
            if(var5) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var6 = var1 == var7;
            var5 = undefined;
            if(var6) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var5 = var7.originalException;
case 43:
            var8 = var1 == var5;
            var6 = undefined;
            if(var8) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var6 = var5.status;
case 45:
            if(!(var1 != var6)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var5 = var2.tags;
            if(!(var1 == var5)) { _fun0003_ip = 49; continue _fun0003 }
case 15:
            var5 = {};
            var2['tags'] = var5;
case 49:
            var5 = var2.tags;
            var5['httpStatusCode'] = var6;
case 47:
            var8 = _closure1_slot12;
            var9 = var2.level;
            var6 = 'error';
            if(!(var6 === var9)) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var8 = 0.005;
case 50:
            var6 = _closure1_slot13;
            if(var6) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var6 = _closure1_slot14;
            var6 = var6.bind(var4)();
            if(!var6) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var6 = _closure1_slot20;
            var6 = var6.bind(var4)(var8);
            if(var6) { _fun0003_ip = 52; continue _fun0003 }
case 54:
            var6 = _closure1_slot19;
            var6 = var6.bind(var4)(var2, var7);
            _fun0003_ip = 56; continue _fun0003;
case 52:
            var5 = _closure1_slot4;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 57; continue _fun0004 }
case 58: // try_start_0
                        var7 = global;
                        var6 = var7.Promise;
                        var4 = var6.race;
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var2 = 6;
                        var2 = var5[var2];
                        var5 = undefined;
                        var2 = var8.bind(var5)(var2);
                        var8 = var2.ZoomedInTelemetry;
                        var2 = var8.flushNow;
                        var8 = var2.bind(var8)();
                        var2 = new Array(2);
                        var2[0] = var8;
                        var9 = var7.Promise;
                        var7 = var9.prototype;
                        var8 = Object.create(var7, {constructor: {value: var9}});
                        var11 = function(arg1) {
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = arg1;
                            var1 = 200;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var12 = var8;
                        var7 = new var12[var9](var11, var10);
                        var7 = var7 instanceof Object ? var7 : var8;
                        var2[1] = var7;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=121);
case 59:
                        return var2;
case 60:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                        var4 = _closure2_slot0;
                        var3 = function maybeBackfillMissingBreadcrumbsFromTelemetryRing() {
                            var1 = undefined;
                            var4 = _closure1_slot15;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var3 = var3.bind(var5)(var4);
                        SaveGenerator(address=148);
case 63:
                        return var3;
case 64:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 65; continue _fun0004 }
case 66: // try_end0
                        _fun0004_ip = 67; continue _fun0004;
case 65:
                        return var3;
case 61:
                        return var2;
case 68: // catch_target0
                        CatchBlockStart(arg_register=1);
case 67:
                        var5 = _closure1_slot19;
                        var2 = _closure2_slot0;
                        var4 = _closure2_slot1;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var2, var4);
                        return var2;
case 57:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            return var3;
case 41:
            var3 = _closure1_slot21;
            var2 = var2.event_id;
            var2 = var3.bind(var4)(var2);
case 56:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getCrashErrorMessage(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var4 = var2.exception;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var5 = var4.values;
            var4 = var3 == var5;
            var1 = undefined;
            if(var4) { _fun0005_ip = 69; continue _fun0005 }
case 71:
            var4 = 0;
            var1 = var5[var4];
case 69:
            if(!(var3 != var1)) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var8 = var1.type;
            var7 = var1.value;
            if(!(var3 != var8)) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            if(!(var3 == var7)) { _fun0005_ip = 63; continue _fun0005 }
case 74:
            var1 = var2.extra;
            var4 = var3 == var1;
            var5 = undefined;
            if(var4) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var5 = var1.persisted_error_message;
case 76:
            var1 = var7;
            if(!(var3 != var8)) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var1 = var8;
case 78:
            if(!(var3 == var1)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var1 = var2.message;
case 29:
            if(!(var3 == var1)) { _fun0005_ip = 35; continue _fun0005 }
case 80:
            var10 = 'string';
            var9 = typeof var5;
            var4 = undefined;
            if(!(var10 === var9)) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var10 = var5.length;
            var9 = 0;
            var9 = var10 > var9;
            var4 = undefined;
            if(!var9) { _fun0005_ip = 81; continue _fun0005 }
case 36:
            var4 = var5;
case 81:
            var1 = var4;
case 35:
            return var1;
case 63:
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '';
            var1 = ': ';
            var1 = var5.bind(var4)(var8, var1, var7);
            return var1;
case 72:
            var1 = var2.extra;
            var5 = var3 == var1;
            var4 = undefined;
            if(var5) { _fun0005_ip = 83; continue _fun0005 }
case 57:
            var4 = var1.persisted_error_message;
case 83:
            var7 = 'string';
            var5 = typeof var4;
            var1 = undefined;
            if(!(var7 === var5)) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var7 = var4.length;
            var5 = 0;
            var5 = var7 > var5;
            var1 = undefined;
            if(!var5) { _fun0005_ip = 84; continue _fun0005 }
case 86:
            var1 = var4;
case 84:
            if(!(var3 == var1)) { _fun0005_ip = 87; continue _fun0005 }
case 88:
            var1 = var2.message;
case 87:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getErrorStackTrace(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var5 = var1.exception;
            var2 = null;
            var6 = var2 == var5;
            var3 = undefined;
            if(var6) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var6 = var5.values;
            var5 = var2 == var6;
            var3 = undefined;
            if(var5) { _fun0006_ip = 69; continue _fun0006 }
case 71:
            var5 = 0;
            var3 = var6[var5];
case 69:
            if(!(var2 != var3)) { _fun0006_ip = 89; continue _fun0006 }
case 73:
            var5 = var3.stacktrace;
            var6 = var2 == var5;
            var3 = undefined;
            if(var6) { _fun0006_ip = 27; continue _fun0006 }
case 90:
            var7 = var5.frames;
            var5 = var2 == var7;
            var3 = undefined;
            if(var5) { _fun0006_ip = 27; continue _fun0006 }
case 91:
            var6 = var7.map;
            var5 = function(arg1) {
                var1 = arg1;
                var11 = var1.filename;
                var9 = var1.lineno;
                var7 = var1.colno;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var12 = '';
                var1 = ':';
                var10 = var1;
                var8 = var1;
                var1 = var12[var3](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var7 = var6.bind(var7)(var5);
            var6 = var7.join;
            var5 = '\n';
            var3 = var6.bind(var7)(var5);
case 27:
            if(!(var2 != var3)) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            var6 = var3.length;
            var5 = 0;
            if(!(!(var6 > var5))) { _fun0006_ip = 72; continue _fun0006 }
case 92:
            var5 = var1.extra;
            var7 = var2 == var5;
            var6 = undefined;
            if(var7) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var6 = var5.persisted_error_stack;
case 35:
            var8 = 'string';
            var7 = typeof var6;
            var5 = undefined;
            if(!(var8 === var7)) { _fun0006_ip = 94; continue _fun0006 }
case 95:
            var8 = var6.length;
            var7 = 0;
            var7 = var8 > var7;
            var5 = undefined;
            if(!var7) { _fun0006_ip = 94; continue _fun0006 }
case 37:
            var5 = var6;
case 94:
            return var5;
case 72:
            return var3;
case 89:
            var1 = var1.extra;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0006_ip = 96; continue _fun0006 }
case 97:
            var2 = var1.persisted_error_stack;
case 96:
            var5 = 'string';
            var3 = typeof var2;
            var1 = undefined;
            if(!(var5 === var3)) { _fun0006_ip = 98; continue _fun0006 }
case 99:
            var5 = var2.length;
            var3 = 0;
            var3 = var5 > var3;
            var1 = undefined;
            if(!var3) { _fun0006_ip = 98; continue _fun0006 }
case 100:
            var1 = var2;
case 98:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function trackCrash(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var14 = arg2;
            var6 = _closure1_slot10;
            var5 = var6.info;
            var4 = {};
            var4['event'] = var1;
            var4['hint'] = var14;
            var3 = 'Crash';
            var3 = var5.bind(var6)(var3, var4);
            var7 = var1.level;
            var4 = var1.extra;
            var8 = null;
            var5 = var8 == var4;
            var9 = undefined;
            var3 = undefined;
            if(var5) { _fun0007_ip = 101; continue _fun0007 }
case 102:
            var3 = var4.native_is_native;
case 101:
            if(!(var8 == var3)) { _fun0007_ip = 80; continue _fun0007 }
case 103:
            var3 = var1.tags;
            var5 = var8 == var3;
            var4 = undefined;
            if(var5) { _fun0007_ip = 104; continue _fun0007 }
case 79:
            var4 = var3.event.origin;
case 104:
            var3 = 'javascript';
            var4 = var3 !== var4;
            _fun0007_ip = 34; continue _fun0007;
case 80:
            var3 = var1.extra;
            var5 = var3.native_is_native;
            var3 = 'true';
            var4 = var3 === var5;
case 34:
            var3 = 'fatal';
            if(!(var3 !== var7)) { _fun0007_ip = 105; continue _fun0007 }
case 106:
            var3 = 'error';
            if(!(var3 !== var7)) { _fun0007_ip = 105; continue _fun0007 }
case 107:
            if(!(var8 == var7)) { _fun0007_ip = 108; continue _fun0007 }
case 105:
            var3 = var4;
            if(var3) { _fun0007_ip = 109; continue _fun0007 }
case 110:
            var5 = 'error';
            var3 = var5 !== var7;
case 109:
            var5 = 1;
            if(var3) { _fun0007_ip = 111; continue _fun0007 }
case 112:
            var5 = 0.01;
case 111:
            var3 = _closure1_slot13;
            if(var3) { _fun0007_ip = 113; continue _fun0007 }
case 114:
            var3 = _closure1_slot20;
            var3 = var3.bind(var9)(var5);
            if(var3) { _fun0007_ip = 113; continue _fun0007 }
case 96:
            var5 = _closure1_slot21;
            var3 = var1.event_id;
            var3 = var5.bind(var9)(var3);
            return var9;
case 113:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 7;
            var3 = var6[var3];
            var5 = var5.bind(var9)(var3);
            var3 = var5.getHistory;
            var3 = var3.bind(var5)();
            var15 = var3.location;
            var3 = var1.event_id;
            var6 = var8 != var3;
            var5 = null;
            if(!var6) { _fun0007_ip = 6; continue _fun0007 }
case 9:
            var5 = var3;
case 6:
            var6 = var1.timestamp;
            var3 = var8 != var6;
            var13 = undefined;
            if(!var3) { _fun0007_ip = 115; continue _fun0007 }
case 116:
            var11 = typeof var6;
            var3 = 'number';
            if(!(var3 === var11)) { _fun0007_ip = 117; continue _fun0007 }
case 118:
            var3 = global;
            var3 = var3.isNaN;
            var3 = var3.bind(var9)(var6);
            if(var3) { _fun0007_ip = 117; continue _fun0007 }
case 119:
            var3 = 1000;
            var13 = var3 * var6;
            _fun0007_ip = 115; continue _fun0007;
case 117:
            var10 = global;
            var3 = var10.Date;
            var3 = var6 instanceof var3;
            if(var3) { _fun0007_ip = 120; continue _fun0007 }
case 121:
            var3 = 'string';
            var13 = undefined;
            if(!(var3 === var11)) { _fun0007_ip = 115; continue _fun0007 }
case 122:
            var11 = var10.Date;
            var3 = var11.parse;
            var3 = var3.bind(var11)(var6);
            var11 = var10.Number;
            var10 = var11.isNaN;
            var10 = var10.bind(var11)(var3);
            var13 = undefined;
            if(var10) { _fun0007_ip = 115; continue _fun0007 }
case 123:
            var13 = var3;
            _fun0007_ip = 115; continue _fun0007;
case 120:
            var3 = var6.getTime;
            var13 = var3.bind(var6)();
case 115:
            if(!(var8 == var13)) { _fun0007_ip = 124; continue _fun0007 }
case 125:
            var3 = global;
            var6 = var3.Date;
            var3 = var6.now;
            var13 = var3.bind(var6)();
case 124:
            var6 = _closure1_slot1;
            var10 = _closure1_slot3;
            var3 = 8;
            var3 = var10[var3];
            var11 = var6.bind(var9)(var3);
            var10 = var11.track;
            var3 = _closure1_slot6;
            if(var4) { _fun0007_ip = 126; continue _fun0007 }
case 127:
            var12 = var3.APP_CRASHED;
            var6 = {};
            var15 = var15.pathname;
            var6['path'] = var15;
            var6['client_track_timestamp'] = var13;
            var6['sentry_issue_id'] = var5;
            var6['extra'] = var14;
            var14 = _closure1_slot17;
            var14 = var14.bind(var9)(var1);
            var6['error_message'] = var14;
            var15 = var8 != var7;
            var14 = undefined;
            if(!var15) { _fun0007_ip = 128; continue _fun0007 }
case 129:
            var14 = var7;
case 128:
            var6['error_level'] = var14;
            var14 = _closure1_slot18;
            var14 = var14.bind(var9)(var1);
            var6['error_stack'] = var14;
            var6 = var10.bind(var11)(var12, var6);
            _fun0007_ip = 130; continue _fun0007;
case 126:
            var6 = var3.APP_NATIVE_CRASH;
            var12 = var1.extra;
            if(!(var8 == var12)) { _fun0007_ip = 131; continue _fun0007 }
case 132:
            var12 = {};
case 131:
            var3 = {};
            var14 = true;
            var3['did_crash'] = var14;
            var15 = var1.event_id;
            var16 = var8 != var15;
            var14 = null;
            if(!var16) { _fun0007_ip = 133; continue _fun0007 }
case 134:
            var14 = var15;
case 133:
            var3['sentry_issue_id'] = var14;
            var3['client_track_timestamp'] = var13;
            var13 = _closure1_slot22;
            var14 = var12.native_exit_reason;
            var14 = var13.bind(var9)(var14);
            var3['exit_reason'] = var14;
            var14 = var12.native_exit_description;
            var14 = var13.bind(var9)(var14);
            var3['exit_description'] = var14;
            var14 = var12.native_tombstone_hash;
            var14 = var13.bind(var9)(var14);
            var3['tombstone_hash'] = var14;
            var14 = var12.native_tombstone_cause;
            var14 = var13.bind(var9)(var14);
            var3['tombstone_cause'] = var14;
            var14 = var12.native_tombstone;
            var14 = var13.bind(var9)(var14);
            var3['tombstone'] = var14;
            var14 = var12.native_tombstone_group_by;
            var14 = var13.bind(var9)(var14);
            var3['call_stack_tree'] = var14;
            var14 = var12.native_tombstone_origin;
            var14 = var13.bind(var9)(var14);
            var3['binary_name'] = var14;
            var14 = _closure1_slot17;
            var14 = var14.bind(var9)(var1);
            var3['exception_message'] = var14;
            var14 = _closure1_slot18;
            var14 = var14.bind(var9)(var1);
            var3['exception_stacktrace'] = var14;
            var14 = var12.persisted_error_message;
            var14 = var13.bind(var9)(var14);
            var3['js_error_message'] = var14;
            var12 = var12.persisted_error_stack;
            var12 = var13.bind(var9)(var12);
            var3['js_error_stacktrace'] = var12;
            var3 = var10.bind(var11)(var6, var3);
case 130:
            var3 = _closure1_slot21;
            var3 = var3.bind(var9)(var5);
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 9;
            var3 = var6[var3];
            var3 = var5.bind(var9)(var3);
            var3 = var3.AppCrashedReasons;
            if(var4) { _fun0007_ip = 135; continue _fun0007 }
case 136:
            var10 = var3.UNHANDLED_JS_ERROR;
            _fun0007_ip = 137; continue _fun0007;
case 135:
            var10 = var3.UNHANDLED_NATIVE_ERROR;
case 137:
            var4 = _closure1_slot1;
            var11 = _closure1_slot3;
            var3 = 10;
            var3 = var11[var3];
            var5 = var4.bind(var9)(var3);
            var4 = var5.increment;
            var3 = {};
            var6 = _closure1_slot0;
            var2 = 11;
            var2 = var11[var2];
            var2 = var6.bind(var9)(var2);
            var2 = var2.MetricEvents;
            var2 = var2.APP_CRASHED;
            var3['name'] = var2;
            var6 = global;
            var2 = var6.HermesInternal;
            var9 = var2.concat;
            var2 = 'reason:';
            var9 = var9.bind(var2)(var10);
            var2 = new Array(2);
            var2[0] = var9;
            var9 = var8 != var7;
            var8 = 'unknown';
            if(!var9) { _fun0007_ip = 138; continue _fun0007 }
case 139:
            var8 = var7;
case 138:
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'level:';
            var6 = var7.bind(var6)(var8);
            var2[1] = var6;
            var3['tags'] = var2;
            var2 = true;
            var2 = var4.bind(var5)(var3, var2);
case 108:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function sample(arg1) {
        var1 = global;
        var2 = var1.Math;
        var1 = var2.random;
        var2 = var1.bind(var2)();
        var1 = arg1;
        var1 = var2 <= var1;
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function markCrashHandled(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var2 = 'string';
            var1 = typeof var3;
            var1 = var2 === var1;
            if(!var1) { _fun0008_ip = 140; continue _fun0008 }
case 141:
            var4 = var3.length;
            var2 = 0;
            var1 = var2 !== var4;
case 140:
            if(!var1) { _fun0008_ip = 22; continue _fun0008 }
case 142:
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.markCrashHandled;
            var1 = var1.bind(var2)(var3);
case 22:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function getStringExtra(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var5 = 'string';
            var3 = typeof var2;
            var1 = null;
            if(!(var5 === var3)) { _fun0009_ip = 18; continue _fun0009 }
case 17:
            var5 = var2.length;
            var3 = 0;
            var3 = var5 > var3;
            var1 = null;
            if(!var3) { _fun0009_ip = 18; continue _fun0009 }
case 143:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var9 = global;
    var10 = var9.Object;
    var5 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot6 = var5;
    var10 = var4.Endpoints;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.PRIMARY_DOMAIN;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var5 = var6.bind(var1)(var4);
    var4 = var5.reactNavigationIntegration;
    var4 = var4.bind(var5)();
    var _closure1_slot8 = var4;
    var13 = var9.RegExp;
    var5 = var9.window;
    var5 = var5.GLOBAL_ENV;
    var12 = var5.API_VERSION;
    var11 = var10.METRICS;
    var5 = var9.HermesInternal;
    var5 = var5.concat;
    var14 = '/v';
    var19 = var5.bind(var14)(var12, var11);
    var11 = var13.prototype;
    var11 = Object.create(var11, {constructor: {value: var13}});
    var12 = 'g';
    var20 = var11;
    var18 = var12;
    var5 = new var20[var13](var19, var18, var17);
    var11 = var5 instanceof Object ? var5 : var11;
    var5 = new Array(3);
    var5[0] = var11;
    var15 = var9.RegExp;
    var11 = var9.window;
    var11 = var11.GLOBAL_ENV;
    var16 = var11.API_VERSION;
    var13 = var10.METRICS_V2;
    var11 = var9.HermesInternal;
    var11 = var11.concat;
    var19 = var11.bind(var14)(var16, var13);
    var13 = var15.prototype;
    var13 = Object.create(var13, {constructor: {value: var15}});
    var20 = var13;
    var18 = var12;
    var11 = new var20[var15](var19, var18, var17);
    var11 = var11 instanceof Object ? var11 : var13;
    var5[1] = var11;
    var11 = var9.RegExp;
    var13 = var9.window;
    var13 = var13.GLOBAL_ENV;
    var13 = var13.API_VERSION;
    var10 = var10.TRACK;
    var9 = var9.HermesInternal;
    var9 = var9.concat;
    var19 = var9.bind(var14)(var13, var10);
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var20 = var10;
    var18 = var12;
    var9 = new var20[var11](var19, var18, var17);
    var9 = var9 instanceof Object ? var9 : var10;
    var5[2] = var9;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var19 = 'Sentry';
    var20 = var8;
    var5 = new var20[var9](var19, var18);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot10 = var5;
    var5 = ['The operation couldn’t be completed. (com.apple.CallKit.error.requesttransaction', 'Request has been terminated', "couldn't execute statement: database is disabled", "couldn't delete database: database is currently open", 'database is no longer open'];
    var _closure1_slot11 = var5;
    var5 = 0.05;
    var _closure1_slot12 = var5;
    var5 = false;
    var _closure1_slot13 = var5;
    var5 = 12;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.filterThrottle;
    var5 = {'maxBudgetMinute': 1, 'maxBudgetHour': 15};
    var5 = var8.bind(var9)(var5);
    var _closure1_slot14 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/errors/native/SentryInitUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['routingInstrumentation'] = var4;
    var2 = function initSentry() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = _closure1_slot5;
            var3 = var1.CrashReportingManager;
            var1 = null;
            if(!(var1 != var3)) { _fun0010_ip = 144; continue _fun0010 }
case 145:
            var2 = var3.getIsUserStaffForCrashReporting;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = arg1;
                    _closure1_slot13 = var4;
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getConstants;
                    var2 = var2.bind(var3)();
                    var3 = var2.ReleaseChannel;
                    var7 = var3.indexOf;
                    var5 = 'debug';
                    var5 = var7.bind(var3)(var5);
                    var8 = -1;
                    if(!(var8 === var5)) { _fun0011_ip = 146; continue _fun0011 }
case 103:
                    var7 = var3.indexOf;
                    var5 = 'developer';
                    var5 = var7.bind(var3)(var5);
                    if(!(var8 === var5)) { _fun0011_ip = 146; continue _fun0011 }
case 147:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 15;
                    var5 = var7[var5];
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.isStable;
                    var14 = _closure1_slot10;
                    var13 = var14.verbose;
                    var12 = {};
                    var12['releaseChannel'] = var3;
                    var12['isProductionChannel'] = var5;
                    var11 = 'Initialize';
                    var11 = var13.bind(var14)(var11, var12);
                    var13 = 16;
                    var7 = var7[var13];
                    var9 = var9.bind(var1)(var7);
                    var7 = var9.isAndroid;
                    var7 = var7.bind(var9)();
                    if(!var7) { _fun0011_ip = 148; continue _fun0011 }
case 114:
                    if(!var5) { _fun0011_ip = 148; continue _fun0011 }
case 149:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var7 = 17;
                    var7 = var11[var7];
                    var9 = var9.bind(var1)(var7);
                    var7 = var9.getDevice;
                    var11 = var7.bind(var9)();
                    var9 = var11.indexOf;
                    var7 = 'vivo';
                    var7 = var9.bind(var11)(var7);
                    if(!(var8 === var7)) { _fun0011_ip = 146; continue _fun0011 }
case 148:
                    var7 = 0.05;
                    _closure1_slot12 = var7;
                    var11 = var2.SentryDsn;
                    if(var5) { _fun0011_ip = 116; continue _fun0011 }
case 6:
                    var5 = 1;
                    _closure1_slot12 = var5;
                    var11 = var2.SentryAlphaBetaDsn;
case 116:
                    if(!var4) { _fun0011_ip = 150; continue _fun0011 }
case 151:
                    var11 = var2.SentryStaffDsn;
                    var5 = 1;
                    _closure1_slot12 = var5;
case 150:
                    var4 = function replayPendingCrashReportIfNeeded() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 13;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getLastCrashReport;
                        var5 = var3.bind(var4)();
                        var4 = var5.then;
                        var3 = function(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                var4 = arg1;
                                var1 = null;
                                if(!(var1 != var4)) { _fun0012_ip = 144; continue _fun0012 }
case 152:
                                var3 = _closure1_slot19;
                                var2 = {};
                                var1 = 'startup_reconcile';
                                var2['crash_event_source'] = var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var4, var2);
case 144:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.catch;
                        var2 = function(arg1) {
                            var4 = _closure1_slot10;
                            var3 = var4.warn;
                            var2 = 'Failed to replay pending crash report';
                            var1 = arg1;
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = undefined;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var4.bind(var1)();
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 4;
                    var5 = var9[var4];
                    var8 = var12.bind(var1)(var5);
                    var7 = var8.init;
                    var5 = {};
                    var9 = var9[var13];
                    var12 = var12.bind(var1)(var9);
                    var9 = var12.isAndroid;
                    var9 = var9.bind(var12)();
                    var12 = 'ios';
                    if(!var9) { _fun0011_ip = 153; continue _fun0011 }
case 154:
                    var12 = 'android';
case 153:
                    var9 = '/error-reporting-proxy/';
                    var9 = var9 + var12;
                    var5['tunnel'] = var9;
                    var9 = false;
                    var5['autoInitializeNativeSdk'] = var9;
                    var9 = _closure1_slot16;
                    var5['beforeSend'] = var9;
                    var9 = '5699';
                    var5['dist'] = var9;
                    var5['dsn'] = var11;
                    var5['environment'] = var3;
                    var3 = 0;
                    var5['tracesSampleRate'] = var3;
                    var3 = 1;
                    var5['sampleRate'] = var3;
                    var3 = _closure1_slot11;
                    var5['ignoreErrors'] = var3;
                    var3 = 'discord_android@333.0.0-2+333200';
                    var5['release'] = var3;
                    var11 = _closure1_slot7;
                    var3 = new Array(1);
                    var3[0] = var11;
                    var5['tracePropagationTargets'] = var3;
                    var3 = _closure1_slot8;
                    var11 = new Array(3);
                    var11[0] = var3;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var12 = var6[var4];
                    var13 = var3.bind(var1)(var12);
                    var12 = var13.featureFlagsIntegration;
                    var12 = var12.bind(var13)();
                    var11[1] = var12;
                    var12 = var6[var4];
                    var14 = var3.bind(var1)(var12);
                    var13 = var14.reactNativeTracingIntegration;
                    var12 = {};
                    var15 = function shouldCreateSpanForRequest(arg1) {
                        var3 = _closure1_slot9;
                        var2 = var3.some;
                        var1 = arg1;
                        var1 = var1.match;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var12['shouldCreateSpanForRequest'] = var15;
                    var12 = var13.bind(var14)(var12);
                    var11[2] = var12;
                    var5['integrations'] = var11;
                    var10 = function beforeBreadcrumb(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.data;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0013_ip = 155; continue _fun0013 }
case 156:
                            var3 = {};
                            var1['data'] = var3;
case 155:
                            var7 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var6 = 18;
                            var4 = var4[var6];
                            var5 = undefined;
                            var7 = var7.bind(var5)(var4);
                            var4 = var7.getCurrentMemoryUsageKB;
                            var7 = var4.bind(var7)();
                            if(!(var2 != var7)) { _fun0013_ip = 157; continue _fun0013 }
case 75:
                            var4 = var1.data;
                            var4['client_performance_memory'] = var7;
case 157:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.getCurrentCPUUsagePercent;
                            var3 = var3.bind(var4)();
                            if(!(var2 != var3)) { _fun0013_ip = 158; continue _fun0013 }
case 159:
                            var2 = var1.data;
                            var2['client_performance_cpu'] = var3;
case 158:
                            return var1;
                        }
                    };
                    var5['beforeBreadcrumb'] = var10;
                    var5 = var7.bind(var8)(var5);
                    var5 = var6[var4];
                    var8 = var3.bind(var1)(var5);
                    var7 = var8.setTag;
                    var5 = 'buildNumber';
                    var5 = var7.bind(var8)(var5, var9);
                    var5 = var6[var4];
                    var8 = var3.bind(var1)(var5);
                    var7 = var8.setTag;
                    var5 = var2.Version;
                    var2 = 'appVersion';
                    var2 = var7.bind(var8)(var2, var5);
                    var2 = var6[var4];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.setTag;
                    var2 = 19;
                    var2 = var6[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.DesignIds;
                    var9 = var2.DESIGN_TABS_IA;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = '';
                    var5 = var5.bind(var2)(var9);
                    var2 = 'design_id';
                    var2 = var7.bind(var8)(var2, var5);
                    var2 = var6[var4];
                    var9 = var3.bind(var1)(var2);
                    var8 = var9.setTag;
                    var2 = 20;
                    var5 = var6[var2];
                    var7 = var3.bind(var1)(var5);
                    var5 = var7.isFabric;
                    var7 = var5.bind(var7)();
                    var5 = 'newArchEnabled';
                    var5 = var8.bind(var9)(var5, var7);
                    var4 = var6[var4];
                    var5 = var3.bind(var1)(var4);
                    var4 = var5.setTag;
                    var2 = var6[var2];
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.isBridgeless;
                    var2 = 'isBridgeless';
                    var2 = var4.bind(var5)(var2, var3);
case 146:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 144:
            var1 = undefined;
            return var1;
        }
    };
    var3['initSentry'] = var2;
    return var1;
})();