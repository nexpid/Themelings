// app/modules/libdiscore/stores/kv/KvStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.isPlainRecordDataEqual;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.Logger;
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var13 = 'KvStore';
    var14 = var8;
    var7 = new var14[var9](var13, var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot10 = var7;
    var7 = var4.Object;
    var7 = var7.prototype;
    var7 = var7.hasOwnProperty;
    var _closure1_slot11 = var7;
    var7 = var4.Symbol;
    var4 = 'version';
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Store;
    var2 = function(arg1) {
        var4 = function KvStore(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var8 = arg1;
                var3 = arguments[1];
                var7 = this;
                var _closure3_slot0 = var8;
                var6 = undefined;
                if(!(var3 === var6)) { _fun0002_ip = 25; continue _fun0002 }
 21:
                var3 = 'typescript';
 25:
                var _closure3_slot1 = var6;
                var _closure3_slot2 = var6;
                var _closure3_slot3 = var6;
                var _closure3_slot4 = var6;
                var _closure3_slot5 = var6;
                var9 = _closure1_slot3;
                var1 = _closure2_slot0;
                var1 = var9.bind(var6)(var7, var1);
                var1 = {};
                _closure3_slot2 = var1;
                var9 = 'typescript';
                if(!(var9 !== var3)) { _fun0002_ip = 89; continue _fun0002 }
 79:
                var9 = 'typescript-libdiscore-dual-read';
                if(!(var9 === var3)) { _fun0002_ip = 177; continue _fun0002 }
 89:
                var9 = false;
                _closure3_slot3 = var9;
                var9 = {};
                var10 = function reset(arg1) {
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
                var9['reset'] = var10;
                var10 = function get(arg1) {
                    var1 = _closure3_slot1;
                    var2 = var1.root;
                    var1 = arg1;
                    var1 = var2[var1];
                    return var1;
                };
                var9['get'] = var10;
                var10 = function set(arg1, arg2) {
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
                var9['set'] = var10;
                var10 = function remove(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var5 = arg1;
                        var6 = _closure1_slot11;
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
                var9['remove'] = var10;
                _closure3_slot4 = var9;
                var13 = function _loop() {
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
                var11 = var8;
                for(var8 in var11)
 155:
                {
 164:
                    var14 = var8;
                    _closure3_slot5 = var14;
                    var14 = var13.bind(var6)();
                    _fun0002_ip = 155; continue _fun0002;
                }
 177:
                var5 = _closure2_slot0;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 8;
                var8 = var10[var8];
                var8 = var9.bind(var6)(var8);
                var12 = new Array(2);
                var12[0] = var8;
                var12[1] = var1;
                var1 = _closure1_slot7;
                var11 = var1.bind(var6)(var5);
                var5 = _closure1_slot6;
                var1 = _closure1_slot13;
                var1 = var1.bind(var6)();
                if(var1) { _fun0002_ip = 250; continue _fun0002 }
 237:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var7, var12);
                _fun0002_ip = 284; continue _fun0002;
 250:
                var8 = global;
                var10 = var8.Reflect;
                var9 = var10.construct;
                var8 = _closure1_slot7;
                var8 = var8.bind(var6)(var7);
                var8 = var8.constructor;
                var1 = var9.bind(var10)(var11, var12, var8);
 284:
                var1 = var5.bind(var6)(var7, var1);
                _closure3_slot1 = var1;
                var1['mode'] = var3;
                var3 = null;
                var1['shadowState'] = var3;
                var3 = {};
                var1['root'] = var3;
                var4 = {};
                var3 = 0;
                var4['length'] = var3;
                var5 = {};
                var4['memoized'] = var5;
                var1['derived'] = var4;
                var1['nextVersion'] = var3;
                var4 = _closure1_slot10;
                var3 = var4.info;
                var2 = var1.getName;
                var8 = var2.bind(var1)();
                var7 = var1.mode;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = '';
                var2 = ' initialized in mode: ';
                var2 = var6.bind(var5)(var8, var2, var7);
                var2 = var3.bind(var4)(var2);
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
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'registerWithLibdiscore';
        var5['key'] = var7;
        var7 = function registerWithLibdiscore(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var3 = var5.mode;
                var2 = 'typescript-libdiscore-dual-read';
                if(!(var2 !== var3)) { _fun0007_ip = 146; continue _fun0007 }
 27:
                var2 = 'libdiscore';
                if(!(var2 !== var3)) { _fun0007_ip = 124; continue _fun0007 }
 37:
                var2 = 'typescript';
                if(!(var2 !== var3)) { _fun0007_ip = 88; continue _fun0007 }
 45:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var3);
                var3 = var6.assertNever;
                var2 = var5.mode;
                var2 = var3.bind(var6)(var2);
                _fun0007_ip = 206; continue _fun0007;
 88:
                var2 = global;
                var6 = var2.Error;
                var2 = var6.prototype;
                var3 = Object.create(var2, {constructor: {value: var6}});
                var8 = 'This method should not be called in TypeScript mode.';
                var9 = var3;
                var2 = new var9[var6](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
 124:
                var3 = var5.setKvRoot;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var5);
                var _closure3_slot1 = var2;
                _fun0007_ip = 206; continue _fun0007;
 146:
                var2 = {};
                var3 = {};
                var2['root'] = var3;
                var3 = {};
                var6 = 0;
                var3['length'] = var6;
                var6 = {};
                var3['memoized'] = var6;
                var2['derived'] = var3;
                var5['shadowState'] = var2;
                var2 = function t(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = _closure3_slot0;
                    var4 = var3.shadowState;
                    var2 = null;
                    var4 = var2 != var4;
                    var2 = 'Shadow state must be set in dual-read mode before setting derived data.';
                    var2 = var5.bind(var1)(var4, var2);
                    var2 = {};
                    var4 = arg1;
                    var2['root'] = var4;
                    var4 = arg2;
                    var2['derived'] = var4;
                    var3['shadowState'] = var2;
                    return var1;
                };
                _closure3_slot1 = var2;
                var3 = var5.addChangeListener;
                var2 = function() {
                    var4 = _closure3_slot0;
                    var7 = var4.shadowState;
                    var _closure4_slot0 = var7;
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 9;
                    var5 = var6[var1];
                    var1 = undefined;
                    var8 = var8.bind(var1)(var5);
                    var5 = null;
                    var7 = var5 != var7;
                    var5 = 'Shadow state must be set in dual-read mode before running validation.';
                    var5 = var8.bind(var1)(var7, var5);
                    var5 = _closure1_slot0;
                    var3 = 10;
                    var3 = var6[var3];
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.runDualReadValidation;
                    var3 = var4.getName;
                    var4 = var3.bind(var4)();
                    var3 = 'Kv';
                    var2 = function(arg1) {
                        var4 = {};
                        var1 = _closure3_slot0;
                        var2 = var1.root;
                        var4['root'] = var2;
                        var1 = var1.derived;
                        var4['derived'] = var1;
                        var3 = _closure4_slot0;
                        var2 = arg1;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var4, var3);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var2 = var3.bind(var5)(var2);
 206:
                var3 = var4.registerKvStore;
                var2 = var5.getName;
                var2 = var2.bind(var5)();
                var1 = function(arg1, arg2) {
                    var4 = _closure3_slot1;
                    var1 = undefined;
                    var3 = arg1;
                    var2 = arg2;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure3_slot0;
                    var1 = var1.derived;
                    var4 = var1.memoized;
                    var6 = _closure3_slot2;
                    var1 = var4[var6];
                    var5 = _closure1_slot11;
                    var2 = var5.call;
                    var2 = var2.bind(var5)(var4, var6);
                    if(var2) { _fun0008_ip = 80; continue _fun0008 }
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
        var1[2] = var5;
        var5 = {};
        var7 = 'version';
        var5['key'] = var7;
        var7 = function version() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = this;
                var1 = var5.derived;
                var3 = var1.memoized;
                var1 = _closure1_slot12;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0009_ip = 70; continue _fun0009 }
 32:
                var3 = var5.derived;
                var4 = var3.memoized;
                var3 = _closure1_slot12;
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
        var1[3] = var5;
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
        var1[4] = var5;
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
        var1[5] = var5;
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
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/libdiscore/stores/kv/KvStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['KvStore'] = var2;
    return var1;
})();