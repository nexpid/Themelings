// discord_common/js/packages/flux/Store.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = new Array(0);
    var _closure1_slot6 = var7;
    var7 = false;
    var _closure1_slot7 = var7;
    var8 = var4.Promise;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var13 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function t() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = null;
            _closure1_slot3 = var2;
            return var1;
        };
        var _closure1_slot3 = var1;
        var1 = undefined;
        return var1;
    };
    var14 = var7;
    var4 = new var14[var8](var13, var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var2 = function() {
        var5 = _closure1_slot5;
        var4 = function Store(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var6 = arg2;
                var3 = this;
                var _closure3_slot0 = var3;
                var7 = _closure1_slot4;
                var5 = _closure2_slot0;
                var1 = undefined;
                var5 = var7.bind(var1)(var3, var5);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 2;
                var9 = var8[var5];
                var9 = var7.bind(var1)(var9);
                var9 = var9.ChangeListeners;
                var10 = var9.prototype;
                var10 = Object.create(var10, {constructor: {value: var9}});
                var13 = var10;
                var9 = new var13[var9](var12);
                var9 = var9 instanceof Object ? var9 : var10;
                var3['_changeCallbacks'] = var9;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ChangeListeners;
                var7 = var5.prototype;
                var7 = Object.create(var7, {constructor: {value: var5}});
                var13 = var7;
                var5 = new var13[var5](var12);
                var5 = var5 instanceof Object ? var5 : var7;
                var3['_reactChangeCallbacks'] = var5;
                var5 = new Array(0);
                var3['_syncWiths'] = var5;
                var5 = false;
                var3['_isInitialized'] = var5;
                var4 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure3_slot0;
                        var2 = var1._changeCallbacks;
                        var1 = var2.hasAny;
                        var1 = var1.bind(var2)();
                        if(var1) { _fun0002_ip = 46; continue _fun0002 }
 26:
                        var2 = _closure3_slot0;
                        var3 = var2._reactChangeCallbacks;
                        var2 = var3.hasAny;
                        var1 = var2.bind(var3)();
 46:
                        if(var1) { _fun0002_ip = 70; continue _fun0002 }
 49:
                        var2 = _closure3_slot0;
                        var2 = var2._syncWiths;
                        var3 = var2.length;
                        var2 = 0;
                        var1 = var3 > var2;
 70:
                        if(!var1) { _fun0002_ip = 208; continue _fun0002 }
 76:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 3;
                        var7 = var2[var4];
                        var3 = undefined;
                        var9 = var6.bind(var3)(var7);
                        var8 = var9.markChanged;
                        var7 = _closure3_slot0;
                        var7 = var8.bind(var9)(var7);
                        var2 = var2[var4];
                        var6 = var6.bind(var3)(var2);
                        var2 = var6.getIsPaused;
                        var2 = var2.bind(var6)();
                        if(!var2) { _fun0002_ip = 154; continue _fun0002 }
 138:
                        var6 = _closure3_slot0;
                        var7 = var6._mustEmitChanges;
                        var6 = null;
                        var2 = var6 != var7;
 154:
                        if(!var2) { _fun0002_ip = 175; continue _fun0002 }
 157:
                        var7 = _closure3_slot0;
                        var6 = var7._mustEmitChanges;
                        var5 = arg1;
                        var2 = var6.bind(var7)(var5);
 175:
                        if(!var2) { _fun0002_ip = 208; continue _fun0002 }
 178:
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var4];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.resume;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
 208:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['doEmitChanges'] = var4;
                var4 = var3._changeCallbacks;
                var4 = var4.add;
                var3['addChangeListener'] = var4;
                var4 = var3._changeCallbacks;
                var4 = var4.addConditional;
                var3['addConditionalChangeListener'] = var4;
                var4 = var3._changeCallbacks;
                var4 = var4.remove;
                var3['removeChangeListener'] = var4;
                var4 = var3._reactChangeCallbacks;
                var4 = var4.add;
                var3['addReactChangeListener'] = var4;
                var4 = var3._reactChangeCallbacks;
                var4 = var4.remove;
                var3['removeReactChangeListener'] = var4;
                var4 = arg1;
                var3['_dispatcher'] = var4;
                var5 = var3._dispatcher;
                var4 = var5.createToken;
                var4 = var4.bind(var5)();
                var3['_dispatchToken'] = var4;
                var5 = var3.registerActionHandlers;
                var4 = null;
                if(!(var4 == var6)) { _fun0001_ip = 289; continue _fun0001 }
 287:
                var6 = {};
 289:
                var4 = arg3;
                var4 = var5.bind(var3)(var6, var4);
                var5 = _closure1_slot6;
                var4 = var5.push;
                var4 = var4.bind(var5)(var3);
                var2 = _closure1_slot7;
                if(!var2) { _fun0001_ip = 329; continue _fun0001 }
 319:
                var2 = var3.initializeIfNeeded;
                var2 = var2.bind(var3)();
 329:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var1 = {};
        var2 = 'registerActionHandlers';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            var1 = this;
            var7 = var1._dispatcher;
            var6 = var7.register;
            var2 = var1.getName;
            var12 = var2.bind(var1)();
            var10 = var1.doEmitChanges;
            var8 = var1._dispatchToken;
            var11 = arg1;
            var9 = arg2;
            var13 = var7;
            var1 = var13[var6](var12, var11, var10, var9, var8, var7);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var3 = new Array(9);
        var3[0] = var1;
        var1 = {};
        var2 = 'getName';
        var1['key'] = var2;
        var2 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var1 = var2.constructor;
                var1 = var1.displayName;
                var3 = null;
                if(!(var3 == var1)) { _fun0003_ip = 29; continue _fun0003 }
 19:
                var2 = var2.constructor;
                var1 = var2.name;
 29:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var1 = {};
        var2 = 'initializeIfNeeded';
        var1['key'] = var2;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = this;
                var1 = var2._isInitialized;
                if(var1) { _fun0004_ip = 138; continue _fun0004 }
 15:
                var1 = global;
                var4 = var1.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var4 = var2.initialize;
                var4 = var4.bind(var2)();
                var4 = true;
                var2['_isInitialized'] = var4;
                var4 = var1.Date;
                var1 = var4.now;
                var1 = var1.bind(var4)();
                var5 = var1 - var3;
                var1 = 5;
                if(!(var5 > var1)) { _fun0004_ip = 138; continue _fun0004 }
 76:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
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
 138:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[2] = var1;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var7;
        var3[3] = var1;
        var1 = {};
        var7 = 'syncWith';
        var1['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arg1;
                var2 = arg3;
                var7 = this;
                var _closure3_slot0 = var7;
                var4 = arg2;
                var _closure3_slot1 = var4;
                var6 = var7.waitFor;
                var4 = new Array(0);
                var5 = 0;
                var11 = var4;
                var10 = var3;
                var9 = 0;
                var8 = arraySpread(var11, var10, var9);
                var11 = var6;
                var10 = var4;
                var9 = var7;
                var4 = apply(var11, var10, var9);
                var4 = null;
                if(!(var4 == var2)) { _fun0005_ip = 82; continue _fun0005 }
 65:
                var7 = var3.forEach;
                var6 = function(arg1) {
                    var1 = arg1;
                    var3 = var1._syncWiths;
                    var2 = var3.push;
                    var1 = {};
                    var5 = _closure3_slot1;
                    var1['func'] = var5;
                    var4 = _closure3_slot0;
                    var1['store'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = var7.bind(var3)(var6);
                _fun0005_ip = 139; continue _fun0005;
 82:
                var _closure3_slot2 = var5;
                var6 = function wrapper() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var6 = _closure3_slot2;
                        var7 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var5 = 3;
                        var4 = var1[var5];
                        var1 = undefined;
                        var7 = var7.bind(var1)(var4);
                        var4 = var7.getChangeSentinel;
                        var4 = var4.bind(var7)();
                        if(!(var6 !== var4)) { _fun0006_ip = 105; continue _fun0006 }
 46:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getChangeSentinel;
                        var3 = var3.bind(var4)();
                        _closure3_slot2 = var3;
                        var3 = _closure3_slot1;
                        var4 = var3.bind(var1)();
                        var3 = false;
                        if(!(var3 !== var4)) { _fun0006_ip = 105; continue _fun0006 }
 91:
                        var3 = _closure3_slot0;
                        var2 = var3.emitChange;
                        var2 = var2.bind(var3)();
 105:
                        return var1;
                    }
                };
                var _closure3_slot3 = var6;
                var4 = var4 != var2;
                var5 = 0;
                if(!var4) { _fun0005_ip = 107; continue _fun0005 }
 104:
                var5 = var2;
 107:
                var4 = function debounce(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var1 = arg2;
                        var _closure4_slot1 = var1;
                        var1 = null;
                        var _closure4_slot2 = var1;
                        var1 = 0;
                        if(!(var1 !== var3)) { _fun0007_ip = 35; continue _fun0007 }
 28:
                        var1 = function() {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                var3 = _closure4_slot2;
                                var1 = null;
                                if(!(var1 == var3)) { _fun0008_ip = 44; continue _fun0008 }
 13:
                                var1 = global;
                                var5 = var1.setTimeout;
                                var4 = _closure4_slot0;
                                var3 = undefined;
                                var1 = function() {
                                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0: // try_start_0
                                        var2 = _closure4_slot1;
                                        var1 = undefined;
                                        var2 = var2.bind(var1)();
 13: // try_end0
                                        var2 = null;
                                        _closure4_slot2 = var2;
                                        return var1;
 21: // catch_target0
                                        CatchBlockStart(arg_register=0);
                                        var2 = null;
                                        _closure4_slot2 = var2;
                                        throw var1;
                                    }
                                };
                                var1 = var5.bind(var3)(var1, var4);
                                _closure4_slot2 = var1;
 44:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        _fun0007_ip = 40; continue _fun0007;
 35:
                        var1 = function() {
                            var2 = global;
                            var5 = var2.clearImmediate;
                            var4 = _closure4_slot2;
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            var4 = var2.setImmediate;
                            var2 = _closure4_slot1;
                            var2 = var4.bind(var1)(var2);
                            _closure4_slot2 = var2;
                            return var1;
                        };
 40:
                        return var1;
                    }
                };
                var2 = undefined;
                var2 = var4.bind(var2)(var5, var6);
                _closure3_slot3 = var2;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.addChangeListener;
                    var1 = _closure3_slot3;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 139:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var7;
        var3[4] = var1;
        var1 = {};
        var7 = 'waitFor';
        var1['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var _closure3_slot0 = var5;
            var8 = 0;
            var4 = copyRestArgs(var8);
            var3 = var4.map;
            var2 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var7 = 5;
                    var1 = var1[var7];
                    var6 = undefined;
                    var9 = var2.bind(var6)(var1);
                    var1 = null;
                    var8 = var1 != var3;
                    var10 = _closure3_slot0;
                    var5 = var10.getName;
                    var13 = var5.bind(var10)();
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var12 = var5.concat;
                    var11 = 'Store.waitFor(...) called with null Store at index ';
                    var10 = arg2;
                    var5 = ' for store ';
                    var5 = var12.bind(var11)(var10, var5, var13);
                    var5 = var9.bind(var6)(var8, var5);
                    var5 = var3._dispatcher;
                    var5 = var1 != var5;
                    if(!var5) { _fun0010_ip = 164; continue _fun0010 }
 105:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var3._dispatcher;
                    var2 = _closure3_slot0;
                    var2 = var2._dispatcher;
                    var4 = var4 === var2;
                    var2 = 'Stores belong to two separate dispatchers.';
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = var3.getDispatchToken;
                    var1 = var2.bind(var3)();
 164:
                    return var1;
                }
            };
            var6 = var3.bind(var4)(var2);
            var4 = var5._dispatcher;
            var3 = var4.addDependencies;
            var2 = var5.getDispatchToken;
            var2 = var2.bind(var5)();
            var5 = var6.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var1 = var5.bind(var6)(var1);
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var7;
        var3[5] = var1;
        var1 = {};
        var7 = 'emitChange';
        var1['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.markChanged;
            var2 = this;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var7;
        var3[6] = var1;
        var1 = {};
        var7 = 'getDispatchToken';
        var1['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1._dispatchToken;
            return var1;
        };
        var1['value'] = var7;
        var3[7] = var1;
        var1 = {};
        var7 = 'mustEmitChanges';
        var1['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = arguments[0];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0011_ip = 16; continue _fun0011 }
 9:
                var3 = function t() {
                    var1 = true;
                    return var1;
                };
 16:
                var2 = this;
                var2['_mustEmitChanges'] = var3;
                return var1;
            }
        };
        var1['value'] = var7;
        var3[8] = var1;
        var1 = {};
        var1['key'] = var2;
        var2 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var2 = true;
                _closure1_slot7 = var2;
                var4 = _closure1_slot6;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.initializeIfNeeded;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot3;
                var2 = null;
                if(!(var2 != var3)) { _fun0012_ip = 50; continue _fun0012 }
 40:
                var2 = _closure1_slot3;
                var1 = undefined;
                var1 = var2.bind(var1)();
 50:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var7 = 'destroy';
        var1['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot6;
            var2 = 0;
            var3['length'] = var2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.destroy;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1['value'] = var7;
        var2[1] = var1;
        var1 = {};
        var7 = 'getAll';
        var1['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = undefined;
        var1 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var2['initialized'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/Store.tsx';
    var4 = var5.bind(var6)(var4);
    var3['Store'] = var2;
    return var1;
})();