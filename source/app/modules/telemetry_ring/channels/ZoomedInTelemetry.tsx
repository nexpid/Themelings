// app/modules/telemetry_ring/channels/ZoomedInTelemetry.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = {'type': 'ROWS', 'limit': 250};
    var _closure1_slot9 = var4;
    var4 = {'type': 'ROWS', 'limit': 10000};
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function ZoomedInTelemetryImpl() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot4;
                var2 = _closure2_slot1;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var6 = var7[var1];
                var6 = var8.bind(var3)(var6);
                var9 = new Array(2);
                var9[0] = var6;
                var6 = _closure1_slot0;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.TelemetryChannel;
                var6 = var1.ZOOMED;
                var1 = new Array(1);
                var1[0] = var6;
                var9[1] = var1;
                var1 = _closure1_slot7;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0005_ip = 42; continue _fun0005;
case 40:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot7;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 42:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'shouldRun';
        var5['key'] = var1;
        var1 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isZoomedExperimentEnabled;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var8 = 'getBudget';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = 'backlog';
                var1 = arg1;
                if(!(var2 !== var1)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var1 = _closure1_slot9;
                _fun0006_ip = 45; continue _fun0006;
case 43:
                var1 = _closure1_slot10;
case 45:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'getAckedEndOffsetStorageKey';
        var5['key'] = var8;
        var8 = function value() {
            var1 = 'telemetry_ring_zoomed_acked_end_offset_v1';
            return var1;
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'getExportBatchSize';
        var5['key'] = var8;
        var8 = function value() {
            var1 = 250;
            return var1;
        };
        var5['value'] = var8;
        var1[3] = var5;
        var5 = {};
        var8 = 'exportEntries';
        var5['key'] = var8;
        var8 = _closure1_slot3;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var4 = arg1;
                    var5 = arg2;
                    var _closure4_slot0 = var5;
                    var8 = undefined;
                    var9 = undefined;
                    var3 = undefined;
                    var _closure4_slot1 = var8;
                    var10 = undefined;
                    var11 = undefined;
case 48: // try_start_0
                    var5 = new Array(0);
                    var3 = var5;
                    _closure4_slot1 = var5;
                    var5 = _closure1_slot11;
                    var4 = var5.bind(var8)(var4);
                    var10 = var4;
                    var4 = var4.bind(var8)();
                    var9 = var4;
                    var4 = var4.done;
                    var6 = 8;
                    var5 = null;
                    if(var4) { _fun0007_ip = 16; continue _fun0007 }
case 49:
                    var4 = var9;
                    var13 = var4.value;
                    var12 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var12 = var12.bind(var8)(var4);
                    var4 = var12.buildZoomedInAnalyticsEvent;
                    var4 = var4.bind(var12)(var13);
                    var11 = var4;
                    if(!(var5 != var4)) { _fun0007_ip = 42; continue _fun0007 }
case 50:
                    var13 = var3;
                    var12 = var13.push;
                    var4 = {};
                    var14 = var11;
                    var15 = var14.key;
                    var4['key'] = var15;
                    var14 = var14.props;
                    var4['props'] = var14;
                    var4 = var12.bind(var13)(var4);
case 42:
                    var4 = var10;
                    var4 = var4.bind(var8)();
                    var9 = var4;
                    var4 = var4.done;
                    if(!var4) { _fun0007_ip = 49; continue _fun0007 }
case 16:
                    var4 = var3;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var4 = var3;
                    var3 = var4.map;
                    var2 = function(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 9;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.track;
                            var3 = var1.key;
                            var2 = var1.props;
                            var1 = {};
                            var6 = _closure4_slot0;
                            if(!var6) { _fun0008_ip = 53; continue _fun0008 }
case 4:
                            var7 = _closure4_slot1;
                            var8 = var7.length;
                            var7 = 1;
                            var8 = var8 - var7;
                            var7 = arg2;
                            var6 = var7 === var8;
case 53:
                            var1['flush'] = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        }
                    };
                    var4 = var3.bind(var4)(var2);
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.all;
                    var2 = var2.bind(var3)(var4);
                    SaveGenerator(address=236);
case 21:
                    return var2;
case 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 23; continue _fun0007 }
case 55: // try_end0
                    var3 = true;
                    return var3;
case 23:
                    return var2;
case 51:
                    var2 = true;
                    return var2;
case 56: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = false;
                    return var2;
case 46:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function exportEntries() {
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
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/telemetry_ring/channels/ZoomedInTelemetry.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();