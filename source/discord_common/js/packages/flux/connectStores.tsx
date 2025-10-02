// discord_common/js/packages/flux/connectStores.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot11;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function getDisplayName(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = var3.displayName;
            var1 = null;
            if(!(var1 == var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var2 = var3.name;
case 11:
            var3 = var1 != var2;
            var1 = '<Unknown>';
            if(!var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function memoizeGetStateFromStores(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = null;
        var _closure2_slot1 = var1;
        var _closure2_slot2 = var1;
        var3 = function getCachedResult(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var1 = _closure2_slot1;
                var5 = null;
                if(!(var5 != var1)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var1 = _closure2_slot2;
                if(!(var5 != var1)) { _fun0004_ip = 15; continue _fun0004 }
case 17:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var6 = undefined;
                var4 = var4.bind(var6)(var1);
                var1 = _closure2_slot1;
                var1 = var4.bind(var6)(var1, var3);
                if(var1) { _fun0004_ip = 18; continue _fun0004 }
case 15:
                var1 = _closure2_slot1;
                var4 = var5 != var1;
                var1 = null;
                if(!var4) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var4 = _closure2_slot2;
                var4 = var5 != var4;
                var1 = null;
                if(!var4) { _fun0004_ip = 19; continue _fun0004 }
case 21:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var7 = undefined;
                var6 = var6.bind(var7)(var4);
                var4 = _closure2_slot1;
                var4 = var6.bind(var7)(var4, var3);
                var1 = null;
                if(!var4) { _fun0004_ip = 19; continue _fun0004 }
case 22:
                _closure2_slot1 = var3;
                var1 = _closure2_slot2;
case 19:
                _fun0004_ip = 23; continue _fun0004;
case 18:
                var1 = _closure2_slot2;
case 23:
                return var1;
            }
        };
        var _closure2_slot3 = var3;
        var1 = function memoizedFunction(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var1 = _closure2_slot3;
                var4 = undefined;
                var1 = var1.bind(var4)(var5);
                var2 = null;
                if(!(var2 == var1)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var2 = _closure2_slot0;
                _closure2_slot1 = var5;
                var2 = var2.bind(var4)(var5);
                _closure2_slot2 = var2;
                var1 = var2;
case 24:
                return var1;
            }
        };
        var1['getCachedResult'] = var3;
        var2 = function() {
            var1 = null;
            _closure2_slot1 = var1;
            _closure2_slot2 = var1;
            var1 = undefined;
            return var1;
        };
        var1['clear'] = var2;
        return var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/connectStores.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function connectStores(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = arg3;
            var3 = null;
            if(!(var3 != var1)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var1 = var1.forwardRef;
            if(var1) { _fun0006_ip = 28; continue _fun0006 }
case 26:
            var3 = function connectStoresWithoutRef(arg1, arg2) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var1 = function(arg1) {
                    var5 = arg1;
                    var _closure4_slot0 = var5;
                    var2 = _closure1_slot12;
                    var4 = undefined;
                    var7 = var2.bind(var4)(var5);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var5 = 'FluxContainer(';
                    var2 = ')';
                    var2 = var6.bind(var5)(var7, var2);
                    var _closure4_slot1 = var2;
                    var3 = _closure1_slot8;
                    var3 = var3.Component;
                    var1 = function(arg1) {
                        var4 = function FluxContainer(arg1) {
                            var7 = this;
                            var12 = 0;
                            var8 = copyRestArgs(var12);
                            var1 = _closure1_slot3;
                            var5 = _closure5_slot0;
                            var6 = undefined;
                            var1 = var1.bind(var6)(var7, var5);
                            var3 = _closure1_slot10;
                            var1 = new Array(0);
                            var12 = var1;
                            var11 = var8;
                            var10 = 0;
                            var8 = arraySpread(var12, var11, var10);
                            var1 = var3.bind(var6)(var7, var5, var1);
                            var _closure6_slot0 = var1;
                            var7 = _closure1_slot13;
                            var5 = _closure3_slot1;
                            var5 = var7.bind(var6)(var5);
                            var1['memoizedGetStateFromStores'] = var5;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 8;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var5 = var4.BatchedStoreListener;
                            var12 = _closure3_slot0;
                            var3 = var5.prototype;
                            var3 = Object.create(var3, {constructor: {value: var5}});
                            var11 = function() {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                    var2 = _closure6_slot0;
                                    var4 = var2.memoizedGetStateFromStores;
                                    var3 = var4.getCachedResult;
                                    var2 = var2.props;
                                    var6 = var3.bind(var4)(var2);
                                    var2 = null;
                                    var2 = var2 != var6;
                                    if(!var2) { _fun0007_ip = 29; continue _fun0007 }
case 3:
                                    var8 = _closure6_slot0;
                                    var4 = var8.memoizedGetStateFromStores;
                                    var3 = var4.clear;
                                    var3 = var3.bind(var4)();
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 9;
                                    var3 = var5[var3];
                                    var5 = undefined;
                                    var4 = var4.bind(var5)(var3);
                                    var7 = var8.memoizedGetStateFromStores;
                                    var3 = var8.props;
                                    var3 = var7.bind(var8)(var3);
                                    var2 = var4.bind(var5)(var3, var6);
case 29:
                                    if(var2) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                                    var2 = _closure6_slot0;
                                    var1 = var2.forceUpdate;
                                    var1 = var1.bind(var2)();
case 30:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var13 = var3;
                            var2 = new var13[var5](var12, var11, var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var1['listener'] = var2;
                            return var1;
                        };
                        var _closure5_slot0 = var4;
                        var5 = _closure1_slot7;
                        var3 = undefined;
                        var2 = arg1;
                        var2 = var5.bind(var3)(var4, var2);
                        var2 = _closure1_slot4;
                        var5 = {};
                        var1 = 'componentDidMount';
                        var5['key'] = var1;
                        var1 = function value() {
                            var1 = this;
                            var3 = var1.listener;
                            var2 = var3.attach;
                            var1 = _closure4_slot1;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var5['value'] = var1;
                        var1 = new Array(3);
                        var1[0] = var5;
                        var5 = {};
                        var7 = 'componentWillUnmount';
                        var5['key'] = var7;
                        var7 = function value() {
                            var1 = this;
                            var3 = var1.listener;
                            var2 = var3.detach;
                            var2 = var2.bind(var3)();
                            var2 = var1.memoizedGetStateFromStores;
                            var1 = var2.clear;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        };
                        var5['value'] = var7;
                        var1[1] = var5;
                        var5 = {};
                        var7 = 'render';
                        var5['key'] = var7;
                        var6 = function value() {
                            var5 = this;
                            var2 = var5.memoizedGetStateFromStores;
                            var1 = var5.props;
                            var1 = var2.bind(var5)(var1);
                            var4 = _closure1_slot9;
                            var3 = _closure4_slot0;
                            var2 = {};
                            var6 = var5.props;
                            var7 = var2;
                            var5 = copyDataProperties(var7, var6);
                            var7 = var2;
                            var6 = var1;
                            var1 = copyDataProperties(var7, var6);
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var5['value'] = var6;
                        var1[2] = var5;
                        var1 = var2.bind(var3)(var4, var1);
                        return var1;
                    };
                    var1 = var1.bind(var4)(var3);
                    var1['displayName'] = var2;
                    return var1;
                };
                return var1;
            };
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var4);
            _fun0006_ip = 32; continue _fun0006;
case 28:
            var3 = function connectStoresWithRef(arg1, arg2) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var1 = function(arg1) {
                    var4 = arg1;
                    var _closure4_slot0 = var4;
                    var2 = _closure1_slot12;
                    var8 = undefined;
                    var7 = var2.bind(var8)(var4);
                    var2 = global;
                    var4 = var2.HermesInternal;
                    var6 = var4.concat;
                    var4 = 'FluxContainer(';
                    var5 = ')';
                    var4 = var6.bind(var4)(var7, var5);
                    var _closure4_slot1 = var4;
                    var6 = _closure1_slot8;
                    var7 = var6.Component;
                    var3 = function(arg1) {
                        var4 = function FluxContainer(arg1) {
                            var7 = this;
                            var12 = 0;
                            var8 = copyRestArgs(var12);
                            var1 = _closure1_slot3;
                            var5 = _closure5_slot0;
                            var6 = undefined;
                            var1 = var1.bind(var6)(var7, var5);
                            var3 = _closure1_slot10;
                            var1 = new Array(0);
                            var12 = var1;
                            var11 = var8;
                            var10 = 0;
                            var8 = arraySpread(var12, var11, var10);
                            var1 = var3.bind(var6)(var7, var5, var1);
                            var _closure6_slot0 = var1;
                            var7 = _closure1_slot13;
                            var5 = _closure3_slot1;
                            var5 = var7.bind(var6)(var5);
                            var1['memoizedGetStateFromStores'] = var5;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 8;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var5 = var4.BatchedStoreListener;
                            var12 = _closure3_slot0;
                            var3 = var5.prototype;
                            var3 = Object.create(var3, {constructor: {value: var5}});
                            var11 = function() {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    var2 = _closure6_slot0;
                                    var4 = var2.memoizedGetStateFromStores;
                                    var3 = var4.getCachedResult;
                                    var2 = var2.props;
                                    var2 = var2.childProps;
                                    var6 = var3.bind(var4)(var2);
                                    var2 = null;
                                    var2 = var2 != var6;
                                    if(!var2) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                                    var8 = _closure6_slot0;
                                    var4 = var8.memoizedGetStateFromStores;
                                    var3 = var4.clear;
                                    var3 = var3.bind(var4)();
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 9;
                                    var3 = var5[var3];
                                    var5 = undefined;
                                    var4 = var4.bind(var5)(var3);
                                    var7 = var8.memoizedGetStateFromStores;
                                    var3 = var8.props;
                                    var3 = var3.childProps;
                                    var3 = var7.bind(var8)(var3);
                                    var2 = var4.bind(var5)(var3, var6);
case 33:
                                    if(var2) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                                    var2 = _closure6_slot0;
                                    var1 = var2.forceUpdate;
                                    var1 = var1.bind(var2)();
case 35:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var13 = var3;
                            var2 = new var13[var5](var12, var11, var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var1['listener'] = var2;
                            return var1;
                        };
                        var _closure5_slot0 = var4;
                        var5 = _closure1_slot7;
                        var3 = undefined;
                        var2 = arg1;
                        var2 = var5.bind(var3)(var4, var2);
                        var2 = _closure1_slot4;
                        var5 = {};
                        var1 = 'componentDidMount';
                        var5['key'] = var1;
                        var1 = function value() {
                            var1 = this;
                            var3 = var1.listener;
                            var2 = var3.attach;
                            var1 = _closure4_slot1;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var5['value'] = var1;
                        var1 = new Array(3);
                        var1[0] = var5;
                        var5 = {};
                        var7 = 'componentWillUnmount';
                        var5['key'] = var7;
                        var7 = function value() {
                            var1 = this;
                            var3 = var1.listener;
                            var2 = var3.detach;
                            var2 = var2.bind(var3)();
                            var2 = var1.memoizedGetStateFromStores;
                            var1 = var2.clear;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        };
                        var5['value'] = var7;
                        var1[1] = var5;
                        var5 = {};
                        var7 = 'render';
                        var5['key'] = var7;
                        var6 = function value() {
                            var2 = this;
                            var1 = var2.props;
                            var6 = var1.forwardedConnectStoresRef;
                            var5 = var1.childProps;
                            var1 = var2.memoizedGetStateFromStores;
                            var1 = var1.bind(var2)(var5);
                            var4 = _closure1_slot9;
                            var3 = _closure4_slot0;
                            var2 = {};
                            var2['ref'] = var6;
                            var8 = var2;
                            var7 = var5;
                            var5 = copyDataProperties(var8, var7);
                            var8 = var2;
                            var7 = var1;
                            var1 = copyDataProperties(var8, var7);
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var5['value'] = var6;
                        var1[2] = var5;
                        var1 = var2.bind(var3)(var4, var1);
                        return var1;
                    };
                    var3 = var3.bind(var8)(var7);
                    var _closure4_slot2 = var3;
                    var3['displayName'] = var4;
                    var3 = var6.forwardRef;
                    var1 = function(arg1, arg2) {
                        var4 = _closure1_slot9;
                        var3 = _closure4_slot2;
                        var2 = {};
                        var1 = arg1;
                        var2['childProps'] = var1;
                        var1 = arg2;
                        var2['forwardedConnectStoresRef'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1 = var3.bind(var6)(var1);
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'ForwardRef(';
                    var2 = var3.bind(var2)(var4, var5);
                    var1['displayName'] = var2;
                    return var1;
                };
                return var1;
            };
            var2 = undefined;
            var1 = var3.bind(var2)(var5, var4);
case 32:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();