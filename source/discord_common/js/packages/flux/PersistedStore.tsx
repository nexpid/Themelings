// discord_common/js/packages/flux/PersistedStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function _superPropGet(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var7 = arg3;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot4;
            var4 = _closure1_slot9;
            var1 = 1;
            var3 = 3;
            var8 = var1 & var3;
            var1 = var5;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var5.prototype;
case 2:
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = arg2;
            var5 = var6.bind(var5)(var4, var1, var7);
            var _closure2_slot1 = var5;
            var1 = 2;
            var3 = var1 & var3;
            var1 = var5;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = 'function';
            var3 = typeof var5;
            var1 = var5;
            if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = function(arg1) {
                var4 = _closure2_slot1;
                var3 = var4.apply;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
case 4:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot9;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot8;
            var1 = _closure1_slot17;
            var1 = var1.bind(var3)();
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0002_ip = 6; continue _fun0002;
case 7:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var6 = new Array(0);
case 9:
            var5 = _closure1_slot9;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 6:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
case 11: // try_start_0
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
case 12: // try_end0
            _fun0003_ip = 13; continue _fun0003;
case 14: // catch_target0
            CatchBlockStart(arg_register=1);
case 13:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = ['_state', '_version'];
    var _closure1_slot3 = var1;
    var6 = global;
    var10 = var6.Object;
    var5 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var10)(var3, var1, var4);
    var4 = 0;
    var5 = var8[var4];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var9 = var5.Store;
    var _closure1_slot11 = var9;
    var5 = {};
    var5['_state'] = var1;
    var5['_version'] = var1;
    var _closure1_slot12 = var5;
    var5 = null;
    var _closure1_slot13 = var5;
    var5 = function(arg1) {
        var5 = function PersistedStore(arg1, arg2, arg3) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = this;
                var3 = _closure1_slot6;
                var5 = _closure2_slot0;
                var7 = undefined;
                var3 = var3.bind(var7)(var6, var5);
                var4 = _closure1_slot16;
                var3 = new Array(3);
                var8 = arg1;
                var3[0] = var8;
                var8 = arg2;
                var3[1] = var8;
                var8 = arg3;
                var3[2] = var8;
                var4 = var4.bind(var7)(var6, var5, var3);
                var _closure3_slot0 = var4;
                var3 = var4.getClass;
                var3 = var3.bind(var4)();
                var5 = var3.migrations;
                var3 = null;
                var5 = var3 == var5;
                var3 = 0;
                if(var5) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var5 = var4.getClass;
                var5 = var5.bind(var4)();
                var5 = var5.migrations;
                var3 = var5.length;
case 15:
                var4['_version'] = var3;
                var3 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.getClass;
                    var1 = var1.bind(var2)();
                    var3 = var1.persistKey;
                    var1 = var2.persist;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var4 = var1._writePromises;
                    var2 = var4.delete;
                    var2 = var2.bind(var4)(var3);
                    var2 = var1._writeResolvers;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                    var2 = arg1;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var4['callback'] = var3;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var6 = var3.bind(var7)(var2);
                var2 = var4.getClass;
                var2 = var2.bind(var4)();
                var5 = var2.throttleDelay;
                var3 = {};
                var2 = false;
                var3['leading'] = var2;
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.callback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var6.bind(var7)(var2, var5, var3);
                var4['throttledCallback'] = var2;
                var2 = var4.getClass;
                var2 = var2.bind(var4)();
                var2 = var2.persistKey;
                var3 = 'string';
                var2 = typeof var2;
                if(!(var3 === var2)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var2 = var4.initialize;
                var3 = 'function';
                var2 = typeof var2;
                if(!(var3 === var2)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var2 = var4.getState;
                var2 = typeof var2;
                if(!(var3 === var2)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var2 = var4.addChangeListener;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.asyncPersist;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var2.bind(var4)(var1);
                return var4;
case 21:
                var1 = global;
                var3 = var1.Error;
                var2 = var4.getClass;
                var2 = var2.bind(var4)();
                var6 = var2.name;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var2 = '';
                var1 = ' initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.';
                var11 = var5.bind(var2)(var6, var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
case 19:
                var1 = global;
                var3 = var1.Error;
                var2 = var4.getClass;
                var2 = var2.bind(var4)();
                var6 = var2.name;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var2 = '';
                var1 = ' initialized without an `initialize` method. Add one that accepts the initial cached state.';
                var11 = var5.bind(var2)(var6, var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
case 17:
                var1 = global;
                var3 = var1.Error;
                var2 = var4.getClass;
                var2 = var2.bind(var4)();
                var5 = var2.name;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = '';
                var1 = ' initialized without a `persistKey`. Add one so we know where to save your stuff!';
                var11 = var4.bind(var2)(var5, var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot10;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot7;
        var1 = {};
        var2 = 'getClass';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1.constructor;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'initializeFromState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var3 = var2.initialize;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var1 = var2.asyncPersist;
                var1 = var1.bind(var2)();
case 23:
                var1 = var2._isInitialized;
                if(var1) { _fun0005_ip = 25; continue _fun0005 }
case 3:
                var1 = _closure2_slot0;
                var4 = var1.allPersistKeys;
                var3 = var4.add;
                var1 = var2.getClass;
                var1 = var1.bind(var2)();
                var1 = var1.persistKey;
                var1 = var3.bind(var4)(var1);
                var1 = true;
                var2['_isInitialized'] = var1;
                _fun0005_ip = 26; continue _fun0005;
case 25:
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
case 26:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'initializeIfNeeded';
        var1['key'] = var6;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var1 = var2._isInitialized;
                if(var1) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                var1 = global;
                var4 = var1.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var7 = _closure2_slot0;
                var6 = var7.allPersistKeys;
                var5 = var6.add;
                var4 = var2.getClass;
                var4 = var4.bind(var2)();
                var4 = var4.persistKey;
                var4 = var5.bind(var6)(var4);
                var6 = var7.migrateAndReadStoreState;
                var4 = var2.getClass;
                var4 = var4.bind(var2)();
                var5 = var4.persistKey;
                var4 = var2.getClass;
                var4 = var4.bind(var2)();
                var4 = var4.migrations;
                var4 = var6.bind(var7)(var5, var4);
                var6 = var4.state;
                var4 = var4.requiresPersist;
                var5 = var2.initialize;
                var5 = var5.bind(var2)(var6);
                if(!var5) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var5 = var2.asyncPersist;
                var5 = var5.bind(var2)();
case 29:
                if(!var4) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                var4 = var2.asyncPersist;
                var4 = var4.bind(var2)();
case 31:
                var4 = true;
                var2['_isInitialized'] = var4;
                var4 = var1.Date;
                var1 = var4.now;
                var1 = var1.bind(var4)();
                var5 = var1 - var3;
                var1 = 5;
                if(!(var5 > var1)) { _fun0006_ip = 27; continue _fun0006 }
case 33:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.mark;
                var1 = var2.getName;
                var2 = var1.bind(var2)();
                var1 = '.initialize()';
                var2 = var2 + var1;
                var1 = '🦥';
                var1 = var3.bind(var4)(var1, var2, var5);
case 27:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'asyncPersist';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = var3.getClass;
                var3 = var1.bind(var3)();
                var5 = var3.persistKey;
                var _closure3_slot1 = var5;
                var1 = var3.disableWrite;
                var3 = var3.throttleDelay;
                var _closure3_slot2 = var3;
                var4 = _closure2_slot0;
                var4 = var4.disableWrites;
                if(var4) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                if(var1) { _fun0007_ip = 34; continue _fun0007 }
case 36:
                var1 = _closure2_slot0;
                var4 = var1._writePromises;
                var1 = var4.get;
                var1 = var1.bind(var4)(var5);
                var4 = null;
                if(!(var4 == var1)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                var4 = global;
                var6 = var4.Promise;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var8 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var5 = _closure3_slot2;
                        var4 = 0;
                        if(!(!(var5 > var4))) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                        var8 = function() {
                            var3 = _closure3_slot0;
                            var2 = var3.callback;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        _fun0008_ip = 41; continue _fun0008;
case 39:
                        var8 = function() {
                            var3 = _closure3_slot0;
                            var2 = var3.throttledCallback;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
case 41:
                        var3 = _closure2_slot0;
                        var5 = var3._writeResolvers;
                        var4 = var5.set;
                        var3 = _closure3_slot1;
                        var2 = new Array(2);
                        var2[0] = var1;
                        var1 = global;
                        var7 = var1.requestIdleCallback;
                        var6 = {};
                        var1 = 500;
                        var6['timeout'] = var1;
                        var1 = undefined;
                        var6 = var7.bind(var1)(var8, var6);
                        var2[1] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    }
                };
                var9 = var4;
                var2 = new var9[var6](var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                var3 = _closure2_slot0;
                var4 = var3._writePromises;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                var1 = var2;
case 37:
                return var1;
case 34:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.resolve;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'persist';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.getClass;
            var2 = var2.bind(var1)();
            var5 = var2.persistKey;
            var2 = var1.getState;
            var7 = var2.bind(var1)();
            var6 = var1._version;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = {};
            var2['_state'] = var7;
            var2['_version'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.getClass;
            var1 = var1.bind(var2)();
            var4 = var1.persistKey;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.Storage;
            var2 = var3.remove;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var6 = {};
        var1 = 'clearAll';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var _closure3_slot0 = var3;
                _closure1_slot13 = var3;
                var3 = _closure2_slot0;
                var4 = var3._clearAllPromise;
                var3 = null;
                if(!(var3 == var4)) { _fun0009_ip = 5; continue _fun0009 }
case 42:
                var3 = _closure2_slot0;
                var4 = global;
                var5 = var4.Promise;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var6 = function(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = global;
                    var4 = var1.requestIdleCallback;
                    var3 = {};
                    var1 = 500;
                    var3['timeout'] = var1;
                    var1 = undefined;
                    var2 = function() {
                        var2 = _closure2_slot0;
                        var4 = var2.clearPersistQueue;
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var2)(var3);
                        var5 = var2.allPersistKeys;
                        var4 = var5.forEach;
                        var3 = function(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var3 = arg1;
                                var4 = _closure2_slot0;
                                var2 = var4.shouldClear;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var4)(var1, var3);
                                if(!var1) { _fun0010_ip = 13; continue _fun0010 }
case 43:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var2);
                                var2 = var1.Storage;
                                var1 = var2.remove;
                                var1 = var1.bind(var2)(var3);
case 13:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot11;
                        var3 = var4.getAll;
                        var4 = var3.bind(var4)();
                        var3 = var4.forEach;
                        var1 = function(arg1) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var2 = arg1;
                                var1 = _closure2_slot0;
                                var1 = var2 instanceof var1;
                                if(!var1) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                                var6 = _closure2_slot0;
                                var5 = var6.shouldClear;
                                var4 = _closure3_slot0;
                                var3 = var2.getClass;
                                var3 = var3.bind(var2)();
                                var3 = var3.persistKey;
                                var1 = var5.bind(var6)(var4, var3);
case 44:
                                if(!var1) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                                var1 = false;
                                var2['_isInitialized'] = var1;
                                var1 = var2.initializeIfNeeded;
                                var1 = var1.bind(var2)();
case 46:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        var1 = null;
                        var2['_clearAllPromise'] = var1;
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var1)(var2, var3);
                    return var1;
                };
                var7 = var4;
                var2 = new var7[var5](var6, var5);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['_clearAllPromise'] = var2;
case 5:
                var1 = _closure2_slot0;
                var1 = var1._clearAllPromise;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(7);
        var1[0] = var6;
        var6 = {};
        var8 = 'shouldClear';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var6 = arg2;
                var4 = var3.omit;
                var1 = null;
                var1 = var1 == var4;
                if(var1) { _fun0012_ip = 41; continue _fun0012 }
case 48:
                var2 = var4.includes;
                var2 = var2.bind(var4)(var6);
                var1 = !var2;
case 41:
                if(!var1) { _fun0012_ip = 49; continue _fun0012 }
case 50:
                var4 = var3.type;
                var2 = 'all';
                var2 = var2 === var4;
                if(var2) { _fun0012_ip = 51; continue _fun0012 }
case 52:
                var4 = var3.type;
                var3 = 'user-data-only';
                var3 = var3 === var4;
                if(!var3) { _fun0012_ip = 4; continue _fun0012 }
case 9:
                var4 = _closure2_slot0;
                var5 = var4.userAgnosticPersistKeys;
                var4 = var5.has;
                var4 = var4.bind(var5)(var6);
                var3 = !var4;
case 4:
                var2 = var3;
case 51:
                var1 = var2;
case 49:
                return var1;
            }
        };
        var6['value'] = var8;
        var1[1] = var6;
        var6 = {};
        var8 = 'clearPersistQueue';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = _closure2_slot0;
            var4 = var1._writeResolvers;
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var6 = arg2;
                    var7 = arg1;
                    var2 = var7[Symbol.iterator];
                    var7 = var2().next;
                    var4 = var7().value;
                    var3 = var2;
                    var1 = undefined;
                    var5 = var3 === var1;
                    var3 = undefined;
                    if(var5) { _fun0013_ip = 23; continue _fun0013 }
case 53:
                    var3 = var4;
case 23:
                    var4 = undefined;
                    if(var5) { _fun0013_ip = 54; continue _fun0013 }
case 42:
                    var8 = var7().value;
                    var7 = var2;
                    var7 = var7 === var1;
                    var4 = undefined;
                    var5 = var7;
                    if(var7) { _fun0013_ip = 54; continue _fun0013 }
case 55:
                    var4 = var8;
                    var5 = var7;
case 54:
                    if(var5) { _fun0013_ip = 56; continue _fun0013 }
case 57:
                    var2.return();
case 56:
                    var8 = _closure2_slot0;
                    var7 = var8.shouldClear;
                    var5 = _closure3_slot0;
                    var5 = var7.bind(var8)(var5, var6);
                    if(!var5) { _fun0013_ip = 58; continue _fun0013 }
case 59:
                    var2 = _closure2_slot0;
                    var7 = var2._writePromises;
                    var5 = var7.delete;
                    var5 = var5.bind(var7)(var6);
                    var5 = var2._writeResolvers;
                    var2 = var5.delete;
                    var2 = var2.bind(var5)(var6);
                    var2 = global;
                    var2 = var2.cancelIdleCallback;
                    var2 = var2.bind(var1)(var4);
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 58:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var3 = var1._writePromises;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var2 = var1._writeResolvers;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var6['value'] = var8;
        var1[2] = var6;
        var6 = {};
        var8 = 'getAllStates';
        var6['key'] = var8;
        var8 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.all;
            var5 = var1.Array;
            var4 = var5.from;
            var1 = _closure2_slot0;
            var6 = var1._writePromises;
            var1 = var6.values;
            var1 = var1.bind(var6)();
            var1 = var4.bind(var5)(var1);
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function() {
                var1 = {};
                var _closure4_slot0 = var1;
                var3 = _closure2_slot0;
                var4 = var3.allPersistKeys;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure4_slot0;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var6.bind(var1)(var2);
                        var6 = var2.Storage;
                        var2 = var6.get;
                        var2 = var2.bind(var6)(var4);
                        var6 = null;
                        if(!(var6 == var2)) { _fun0014_ip = 35; continue _fun0014 }
case 60:
                        var2 = _closure1_slot12;
case 35:
                        var2 = var2._state;
                        var3[var4] = var2;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['value'] = var8;
        var1[3] = var6;
        var6 = {};
        var8 = 'initializeAll';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot11;
            var2 = var3.getAll;
            var3 = var2.bind(var3)();
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var3 instanceof var1;
                    if(!var1) { _fun0015_ip = 46; continue _fun0015 }
case 45:
                    var1 = var3.getClass;
                    var1 = var1.bind(var3)();
                    var4 = var1.persistKey;
                    var5 = _closure3_slot0;
                    var2 = var5.hasOwnProperty;
                    var2 = var2.bind(var5)(var4);
                    if(var2) { _fun0015_ip = 61; continue _fun0015 }
case 55:
                    var2 = undefined;
                    return var2;
case 61:
                    var2 = var3.initializeFromState;
                    var1 = _closure3_slot0;
                    var1 = var1[var4];
                    var1 = var2.bind(var3)(var1);
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var6['value'] = var8;
        var1[4] = var6;
        var6 = {};
        var8 = 'destroy';
        var6['key'] = var8;
        var8 = function value() {
            var2 = null;
            _closure1_slot13 = var2;
            var2 = _closure1_slot11;
            var1 = var2.destroy;
            var1 = var1.bind(var2)();
            var1 = _closure2_slot0;
            var3 = var1.clearPersistQueue;
            var2 = {};
            var4 = 'all';
            var2['type'] = var4;
            var2 = var3.bind(var1)(var2);
            var3 = var1.allPersistKeys;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var2 = var1.userAgnosticPersistKeys;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var6['value'] = var8;
        var1[5] = var6;
        var6 = {};
        var8 = 'migrateAndReadStoreState';
        var6['key'] = var8;
        var7 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = arg1;
                var8 = arg2;
                var2 = _closure1_slot13;
                var10 = null;
                if(!(var10 != var2)) { _fun0016_ip = 62; continue _fun0016 }
case 63:
                var5 = _closure2_slot0;
                var3 = var5.shouldClear;
                var2 = _closure1_slot13;
                var2 = var3.bind(var5)(var2, var4);
                if(var2) { _fun0016_ip = 64; continue _fun0016 }
case 62:
                var2 = _closure2_slot0;
                var2 = var2._clearAllPromise;
                var2 = var10 != var2;
                var6 = null;
                if(var2) { _fun0016_ip = 65; continue _fun0016 }
case 12:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var3);
                var3 = var2.Storage;
                var2 = var3.get;
                var6 = var2.bind(var3)(var4);
case 65:
                if(!(var10 == var6)) { _fun0016_ip = 66; continue _fun0016 }
case 67:
                var6 = _closure1_slot12;
case 66:
                var3 = var6._state;
                var9 = var6._version;
                var5 = _closure1_slot5;
                var2 = _closure1_slot3;
                var7 = undefined;
                var2 = var5.bind(var7)(var6, var2);
                var11 = var10 == var8;
                var6 = 0;
                var5 = 0;
                if(var11) { _fun0016_ip = 68; continue _fun0016 }
case 69:
                var5 = var8.length;
case 68:
                if(!(var6 !== var5)) { _fun0016_ip = 70; continue _fun0016 }
case 71:
                if(!(var9 !== var5)) { _fun0016_ip = 70; continue _fun0016 }
case 72:
                if(!(var10 == var8)) { _fun0016_ip = 73; continue _fun0016 }
case 70:
                var11 = global;
                var12 = var11.Object;
                var11 = var12.values;
                var11 = var11.bind(var12)(var2);
                var11 = var11.length;
                if(!(!(var11 > var6))) { _fun0016_ip = 74; continue _fun0016 }
case 75:
                var11 = {};
                var11['state'] = var3;
                var12 = false;
                var11['requiresPersist'] = var12;
                _fun0016_ip = 76; continue _fun0016;
case 74:
                var12 = {};
                var12['state'] = var2;
                var13 = true;
                var12['requiresPersist'] = var13;
                var11 = var12;
case 76:
                return var11;
case 73:
                var11 = var10 != var9;
                var6 = 0;
                if(!var11) { _fun0016_ip = 77; continue _fun0016 }
case 78:
                var6 = var9;
case 77:
                if(!(var10 == var9)) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                var3 = var2;
case 79:
                var2 = var3;
                var3 = var2;
                if(!(var6 < var5)) { _fun0016_ip = 81; continue _fun0016 }
case 82:
                var9 = var8[var6];
                var2 = var9.bind(var7)(var2);
                var6 = var6 + 1;
                var3 = var2;
                if(var6 < var5) { _fun0016_ip = 82; continue _fun0016 }
case 81:
                var2 = {};
                var2['state'] = var3;
                var3 = true;
                var2['requiresPersist'] = var3;
                return var2;
case 64:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var3 = var1.Storage;
                var1 = var3.remove;
                var1 = var1.bind(var3)(var4);
                var1 = {};
                var1['state'] = var2;
                var2 = false;
                var1['requiresPersist'] = var2;
                return var1;
            }
        };
        var6['value'] = var7;
        var1[6] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var9);
    var _closure1_slot14 = var5;
    var9 = var6.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var5['allPersistKeys'] = var9;
    var9 = var6.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var5['userAgnosticPersistKeys'] = var9;
    var9 = var6.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var5['_writePromises'] = var9;
    var6 = var6.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {constructor: {value: var6}});
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var5['_writeResolvers'] = var6;
    var6 = false;
    var5['disableWrites'] = var6;
    var5['disableWrite'] = var6;
    var5['throttleDelay'] = var4;
    var4 = function(arg1) {
        var4 = function UserAgnosticStore() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot6;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot16;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot10;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'initializeFromState';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var6 = this;
            var2 = _closure1_slot14;
            var4 = var2.userAgnosticPersistKeys;
            var3 = var4.add;
            var2 = var6.getClass;
            var2 = var2.bind(var6)();
            var2 = var2.persistKey;
            var2 = var3.bind(var4)(var2);
            var5 = _closure1_slot15;
            var10 = _closure2_slot0;
            var3 = undefined;
            var9 = 'initializeFromState';
            var7 = 3;
            var11 = undefined;
            var8 = var6;
            var2 = var11[var5](var10, var9, var8, var7, var6);
            var1 = new Array(1);
            var4 = arg1;
            var1[0] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'initializeIfNeeded';
        var5['key'] = var7;
        var7 = function value() {
            var6 = this;
            var2 = _closure1_slot14;
            var4 = var2.userAgnosticPersistKeys;
            var3 = var4.add;
            var2 = var6.getClass;
            var2 = var2.bind(var6)();
            var2 = var2.persistKey;
            var2 = var3.bind(var4)(var2);
            var5 = _closure1_slot15;
            var10 = _closure2_slot0;
            var3 = undefined;
            var9 = 'initializeIfNeeded';
            var7 = 3;
            var11 = undefined;
            var8 = var6;
            var2 = var11[var5](var10, var9, var8, var7, var6);
            var1 = new Array(0);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var2 = this;
            var1 = var2.getUserAgnosticState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var4.bind(var1)(var5);
    var4 = function(arg1) {
        var3 = function DeviceSettingsStore() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot6;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot16;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot10;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4 = var4.bind(var1)(var6);
    var2 = function(arg1) {
        var3 = function OfflineCacheStore() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot6;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot16;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot10;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/packages/flux/PersistedStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['PersistedStore'] = var5;
    var3['DeviceSettingsStore'] = var4;
    var3['OfflineCacheStore'] = var2;
    return var1;
})();