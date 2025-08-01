// app/modules/libdiscore/stores/kv/KvStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var6 = global;
    var10 = var6.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.isPlainRecordDataEqual;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var9 = var4.Logger;
    var4 = var9.prototype;
    var5 = Object.create(var4, {constructor: {value: var9}});
    var13 = 'KvStore';
    var14 = var5;
    var4 = new var14[var9](var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot10 = var4;
    var5 = var6.Symbol;
    var4 = 'setKv';
    var5 = var5.bind(var1)(var4);
    var _closure1_slot11 = var5;
    var9 = var6.Symbol;
    var4 = 'setMetadata';
    var4 = var9.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var9 = var6.Object;
    var9 = var9.prototype;
    var9 = var9.hasOwnProperty;
    var _closure1_slot13 = var9;
    var9 = var6.Symbol;
    var6 = 'version';
    var6 = var9.bind(var1)(var6);
    var _closure1_slot14 = var6;
    var6 = 13;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Store;
    var2 = function(arg1) {
        var4 = function KvStore(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var9 = arg1;
                var14 = arguments[1];
                var6 = this;
                var _closure3_slot0 = var9;
                var8 = undefined;
                if(!(var14 === var8)) { _fun0002_ip = 25; continue _fun0002 }
 21:
                var14 = 'typescript';
 25:
                var _closure3_slot1 = var8;
                var _closure3_slot2 = var8;
                var _closure3_slot3 = var8;
                var _closure3_slot4 = var8;
                var _closure3_slot5 = var8;
                var4 = _closure1_slot3;
                var1 = _closure2_slot0;
                var1 = var4.bind(var8)(var6, var1);
                var4 = 'typescript';
                var1 = var4 === var14;
                if(var1) { _fun0002_ip = 106; continue _fun0002 }
 76:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 8;
                var7 = var11[var7];
                var10 = var10.bind(var8)(var7);
                var7 = var10.hasKvDatabaseAPI;
                var1 = var7.bind(var10)();
 106:
                var7 = var14;
                if(var1) { _fun0002_ip = 160; continue _fun0002 }
 112:
                var11 = _closure1_slot10;
                var10 = var11.warn;
                var1 = global;
                var1 = var1.HermesInternal;
                var13 = var1.concat;
                var12 = 'Attempted to create a KvStore in mode ';
                var1 = ', but libdiscore is not available. Falling back to typescript mode.';
                var1 = var13.bind(var12)(var14, var1);
                var1 = var10.bind(var11)(var1);
                var7 = var4;
 160:
                var1 = {};
                _closure3_slot2 = var1;
                if(!(var4 !== var7)) { _fun0002_ip = 180; continue _fun0002 }
 170:
                var10 = 'typescript-libdiscore-dual-read';
                if(!(var10 === var7)) { _fun0002_ip = 268; continue _fun0002 }
 180:
                var10 = false;
                _closure3_slot3 = var10;
                var10 = {};
                var11 = function reset(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = arg1;
                        var5 = {};
                        var2 = 'function';
                        var1 = typeof var4;
                        if(!(var2 !== var1)) { _fun0003_ip = 27; continue _fun0003 }
 16:
                        var1 = null;
                        if(!(var1 != var4)) { _fun0003_ip = 53; continue _fun0003 }
 22:
                        var5 = var4;
                        _fun0003_ip = 53; continue _fun0003;
 27:
                        var1 = {};
                        var2 = _closure3_slot1;
                        var3 = var2.root;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var1, var3);
                        var5 = var1;
 53:
                        var4 = _closure3_slot1;
                        var3 = var4.setKvRoot;
                        var1 = {};
                        var6 = global;
                        var7 = var6.Object;
                        var6 = var7.keys;
                        var6 = var6.bind(var7)(var5);
                        var6 = var6.length;
                        var1['length'] = var6;
                        var6 = {};
                        var1['memoized'] = var6;
                        var1 = var3.bind(var4)(var5, var1);
                        var1 = true;
                        _closure3_slot3 = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var10['reset'] = var11;
                var11 = function get(arg1) {
                    var1 = _closure3_slot1;
                    var2 = var1.root;
                    var1 = arg1;
                    var1 = var2[var1];
                    return var1;
                };
                var10['get'] = var11;
                var11 = function set(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var6 = arg1;
                        var3 = arg2;
                        var1 = _closure3_slot1;
                        var1 = var1.root;
                        var4 = var1[var6];
                        var7 = 'function';
                        var1 = typeof var3;
                        var5 = var3;
                        if(!(var7 === var1)) { _fun0004_ip = 44; continue _fun0004 }
 37:
                        var1 = undefined;
                        var5 = var3.bind(var1)(var4);
 44:
                        var1 = undefined;
                        if(!(var1 !== var4)) { _fun0004_ip = 66; continue _fun0004 }
 50:
                        var3 = _closure1_slot9;
                        var3 = var3.bind(var1)(var4, var5);
                        if(var3) { _fun0004_ip = 136; continue _fun0004 }
 66:
                        var3 = _closure3_slot1;
                        var3 = var3.root;
                        var3[var6] = var5;
                        var5 = _closure1_slot5;
                        var3 = _closure3_slot1;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.derived;
                        if(!(var1 === var4)) { _fun0004_ip = 120; continue _fun0004 }
 106:
                        var1 = var3.length;
                        var1 = var1 + 1;
                        var3['length'] = var1;
 120:
                        var1 = {};
                        var3['memoized'] = var1;
                        var1 = true;
                        _closure3_slot3 = var1;
                        return var1;
 136:
                        var1 = false;
                        return var1;
                    }
                };
                var10['set'] = var11;
                var11 = function remove(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var5 = arg1;
                        var6 = _closure1_slot13;
                        var4 = var6.call;
                        var1 = _closure3_slot1;
                        var1 = var1.root;
                        var1 = var4.bind(var6)(var1, var5);
                        if(!var1) { _fun0005_ip = 100; continue _fun0005 }
 37:
                        var4 = _closure3_slot1;
                        var4 = var4.root;
                        var4 = delete var4[var5];
                        var5 = _closure1_slot5;
                        var4 = _closure3_slot1;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        var4 = var2.derived;
                        var2 = var4.length;
                        var2 = var2 - 1;
                        var4['length'] = var2;
                        var2 = {};
                        var4['memoized'] = var2;
                        var2 = true;
                        _closure3_slot3 = var2;
 100:
                        return var1;
                    }
                };
                var10['remove'] = var11;
                _closure3_slot4 = var10;
                var14 = function _loop() {
                    var4 = _closure3_slot0;
                    var3 = _closure3_slot5;
                    var3 = var4[var3];
                    var _closure4_slot0 = var3;
                    var3 = _closure3_slot2;
                    var2 = _closure3_slot5;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var2 = false;
                            _closure3_slot3 = var2;
                            var6 = _closure4_slot0;
                            var5 = _closure3_slot4;
                            var1 = undefined;
                            var4 = arg1;
                            var4 = var6.bind(var1)(var4, var5);
                            var3 = _closure3_slot3;
                            if(var3) { _fun0006_ip = 40; continue _fun0006 }
 38:
                            return var2;
 40:
                            return var1;
                        }
                    };
                    var3[var2] = var1;
                    var1 = undefined;
                    return var1;
                };
                var12 = var9;
                for(var9 in var12)
 246:
                {
 255:
                    var15 = var9;
                    _closure3_slot5 = var15;
                    var15 = var14.bind(var8)();
                    _fun0002_ip = 246; continue _fun0002;
                }
 268:
                var5 = _closure2_slot0;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var8)(var9);
                var13 = new Array(2);
                var13[0] = var9;
                var13[1] = var1;
                var1 = _closure1_slot7;
                var12 = var1.bind(var8)(var5);
                var5 = _closure1_slot6;
                var1 = _closure1_slot15;
                var1 = var1.bind(var8)();
                if(var1) { _fun0002_ip = 341; continue _fun0002 }
 328:
                var1 = var12.apply;
                var1 = var1.bind(var12)(var6, var13);
                _fun0002_ip = 375; continue _fun0002;
 341:
                var9 = global;
                var11 = var9.Reflect;
                var10 = var11.construct;
                var9 = _closure1_slot7;
                var9 = var9.bind(var8)(var6);
                var9 = var9.constructor;
                var1 = var10.bind(var11)(var12, var13, var9);
 375:
                var1 = var5.bind(var8)(var6, var1);
                _closure3_slot1 = var1;
                var1['mode'] = var7;
                var5 = null;
                var1['shadowState'] = var5;
                var5 = {};
                var1['root'] = var5;
                var5 = {};
                var6 = 0;
                var5['length'] = var6;
                var9 = {};
                var5['memoized'] = var9;
                var1['derived'] = var5;
                var1['nextVersion'] = var6;
                var10 = _closure1_slot10;
                var9 = var10.info;
                var5 = var1.getName;
                var14 = var5.bind(var1)();
                var13 = var1.mode;
                var5 = global;
                var5 = var5.HermesInternal;
                var12 = var5.concat;
                var11 = '';
                var5 = ' initialized in mode: ';
                var5 = var12.bind(var11)(var14, var5, var13);
                var5 = var9.bind(var10)(var5);
                var5 = 'typescript-libdiscore-dual-read';
                if(!(var5 !== var7)) { _fun0002_ip = 605; continue _fun0002 }
 504:
                var5 = 'libdiscore';
                if(!(var5 !== var7)) { _fun0002_ip = 577; continue _fun0002 }
 514:
                if(!(var4 !== var7)) { _fun0002_ip = 554; continue _fun0002 }
 518:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 12;
                var4 = var9[var4];
                var5 = var5.bind(var8)(var4);
                var4 = var5.assertNever;
                var4 = var4.bind(var5)(var7);
                _fun0002_ip = 680; continue _fun0002;
 554:
                var5 = _closure1_slot12;
                var7 = _closure1_slot11;
                var4 = function() {
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = 'This method should not be called in TypeScript mode.';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                };
                var1[var7] = var4;
                var1[var5] = var4;
                _fun0002_ip = 680; continue _fun0002;
 577:
                var5 = _closure1_slot12;
                var4 = function(arg1) {
                    var2 = _closure3_slot1;
                    var1 = arg1;
                    var2['derived'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1[var5] = var4;
                var5 = _closure1_slot11;
                var4 = function(arg1, arg2) {
                    var4 = _closure3_slot1;
                    var3 = var4.setKvRoot;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1[var5] = var4;
                _fun0002_ip = 680; continue _fun0002;
 605:
                var4 = {};
                var5 = {};
                var4['root'] = var5;
                var5 = {};
                var5['length'] = var6;
                var6 = {};
                var5['memoized'] = var6;
                var4['derived'] = var5;
                var1['shadowState'] = var4;
                var5 = _closure1_slot12;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = _closure3_slot1;
                    var4 = var3.shadowState;
                    var3 = null;
                    var4 = var3 != var4;
                    var3 = 'Shadow state must be set in dual-read mode before setting derived data.';
                    var3 = var5.bind(var1)(var4, var3);
                    var2 = _closure3_slot1;
                    var3 = var2.shadowState;
                    var2 = arg1;
                    var3['derived'] = var2;
                    return var1;
                };
                var1[var5] = var4;
                var4 = _closure1_slot11;
                var3 = function(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = _closure3_slot1;
                    var4 = var3.shadowState;
                    var3 = null;
                    var4 = var3 != var4;
                    var3 = 'Shadow state must be set in dual-read mode before setting derived data.';
                    var3 = var5.bind(var1)(var4, var3);
                    var3 = _closure3_slot1;
                    var2 = {};
                    var4 = arg1;
                    var2['root'] = var4;
                    var4 = arg2;
                    var2['derived'] = var4;
                    var3['shadowState'] = var2;
                    return var1;
                };
                var1[var4] = var3;
                var3 = var1.addChangeListener;
                var2 = function() {
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var2 = var5[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var4 = _closure3_slot1;
                    var6 = var4.shadowState;
                    var4 = null;
                    var6 = var4 != var6;
                    var4 = 'Shadow state must be set in dual-read mode before running validation.';
                    var4 = var7.bind(var1)(var6, var4);
                    var4 = _closure1_slot0;
                    var3 = 11;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.runDualReadValidation;
                    var4 = _closure3_slot1;
                    var3 = var4.getName;
                    var4 = var3.bind(var4)();
                    var3 = {};
                    var7 = _closure3_slot1;
                    var7 = var7.root;
                    var3['root'] = var7;
                    var7 = _closure3_slot1;
                    var7 = var7.derived;
                    var3['derived'] = var7;
                    var2 = _closure3_slot1;
                    var2 = var2.shadowState;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
 680:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getMode';
        var5['key'] = var1;
        var1 = function getMode() {
            var1 = this;
            var1 = var1.mode;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'memoized';
        var5['key'] = var7;
        var7 = function memoized(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = global;
            var3 = var2.Symbol;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var _closure3_slot2 = var2;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure3_slot0;
                    var1 = var1.derived;
                    var4 = var1.memoized;
                    var6 = _closure3_slot2;
                    var1 = var4[var6];
                    var5 = _closure1_slot13;
                    var2 = var5.call;
                    var2 = var2.bind(var5)(var4, var6);
                    if(var2) { _fun0007_ip = 80; continue _fun0007 }
 48:
                    var6 = _closure3_slot1;
                    var2 = _closure3_slot0;
                    var5 = var2.root;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var3 = _closure3_slot2;
                    var4[var3] = var2;
                    var1 = var2;
 80:
                    return var1;
                }
            };
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'version';
        var5['key'] = var7;
        var7 = function version() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var5 = this;
                var1 = var5.derived;
                var3 = var1.memoized;
                var1 = _closure1_slot14;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0008_ip = 70; continue _fun0008 }
 32:
                var3 = var5.derived;
                var4 = var3.memoized;
                var3 = _closure1_slot14;
                var2 = var5.nextVersion;
                var2 = var2 + 1;
                var5['nextVersion'] = var2;
                var4[var3] = var2;
                var1 = var2;
 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'get';
        var5['key'] = var7;
        var7 = function get(arg1) {
            var1 = this;
            var2 = var1.root;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'setKvRoot';
        var5['key'] = var7;
        var7 = function setKvRoot(arg1, arg2) {
            var2 = this;
            var1 = arg1;
            var2['root'] = var1;
            var1 = arg2;
            var2['derived'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'length';
        var5['key'] = var7;
        var6 = function length() {
            var1 = this;
            var1 = var1.derived;
            var1 = var1.length;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/libdiscore/stores/kv/KvStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['_libdiscoreSetKvRoot'] = var5;
    var3['_libdiscoreSetKvDerivedData'] = var4;
    var3['KvStore'] = var2;
    return var1;
})();