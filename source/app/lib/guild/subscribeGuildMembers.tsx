// app/lib/guild/subscribeGuildMembers.tsx
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = ['forwardedRef'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/guild/subscribeGuildMembers.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function subscribeGuildMembers(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var _closure3_slot0 = var4;
                var2 = var4.displayName;
                var3 = null;
                if(!(var3 == var2)) { _fun0002_ip = 25; continue _fun0002 }
 20:
                var2 = var4.name;
 25:
                var3 = var3 != var2;
                var6 = 'Component';
                if(!var3) { _fun0002_ip = 39; continue _fun0002 }
 36:
                var6 = var2;
 39:
                var2 = global;
                var3 = var2.HermesInternal;
                var4 = var3.concat;
                var3 = 'SubscribeGuildMembersContainer(';
                var5 = ')';
                var4 = var4.bind(var3)(var6, var5);
                var6 = _closure1_slot10;
                var8 = var6.Component;
                var7 = function(arg1) {
                    var4 = function WrappedComponent(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var4 = arg1;
                            var6 = this;
                            var1 = _closure1_slot5;
                            var2 = _closure4_slot0;
                            var5 = undefined;
                            var1 = var1.bind(var5)(var6, var2);
                            var11 = new Array(1);
                            var11[0] = var4;
                            var1 = _closure1_slot8;
                            var10 = var1.bind(var5)(var2);
                            var2 = _closure1_slot7;
                            var1 = _closure1_slot12;
                            var1 = var1.bind(var5)();
                            if(var1) { _fun0003_ip = 73; continue _fun0003 }
 60:
                            var1 = var10.apply;
                            var1 = var1.bind(var10)(var6, var11);
                            _fun0003_ip = 107; continue _fun0003;
 73:
                            var7 = global;
                            var9 = var7.Reflect;
                            var8 = var9.construct;
                            var7 = _closure1_slot8;
                            var7 = var7.bind(var5)(var6);
                            var7 = var7.constructor;
                            var1 = var8.bind(var9)(var10, var11, var7);
 107:
                            var1 = var2.bind(var5)(var6, var1);
                            var2 = _closure2_slot0;
                            var2 = var2.bind(var5)(var4);
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 8;
                            var3 = var6[var3];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.forEach;
                            var3 = function(arg1, arg2) {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.subscribeMembers;
                                var2 = arg2;
                                var1 = arg1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var3 = var4.bind(var5)(var2, var3);
                            var1['_subscriptions'] = var2;
                            return var1;
                        }
                    };
                    var _closure4_slot0 = var4;
                    var5 = _closure1_slot9;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var5.bind(var3)(var4, var2);
                    var2 = _closure1_slot6;
                    var5 = {};
                    var1 = 'componentDidUpdate';
                    var5['key'] = var1;
                    var1 = function value(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var3 = this;
                            var6 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var7 = var6.bind(var1)(var2);
                            var6 = var3.props;
                            var2 = arg1;
                            var2 = var7.bind(var1)(var6, var2);
                            if(var2) { _fun0004_ip = 221; continue _fun0004 }
 50:
                            var6 = _closure2_slot0;
                            var2 = var3.props;
                            var2 = var6.bind(var1)(var2);
                            var6 = var3._subscriptions;
                            var7 = null;
                            var6 = var7 != var6;
                            if(!var6) { _fun0004_ip = 120; continue _fun0004 }
 82:
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var8 = 8;
                            var8 = var10[var8];
                            var10 = var9.bind(var1)(var8);
                            var9 = var10.isEqual;
                            var8 = var3._subscriptions;
                            var6 = var9.bind(var10)(var8, var2);
 120:
                            if(var6) { _fun0004_ip = 221; continue _fun0004 }
 123:
                            var6 = var3._subscriptions;
                            if(!(var7 != var6)) { _fun0004_ip = 177; continue _fun0004 }
 133:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 8;
                            var6 = var8[var6];
                            var9 = var7.bind(var1)(var6);
                            var8 = var9.forEach;
                            var7 = var3._subscriptions;
                            var6 = function(arg1, arg2) {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.unsubscribeMembers;
                                var2 = arg2;
                                var1 = arg1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var6 = var8.bind(var9)(var7, var6);
 177:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 8;
                            var5 = var7[var5];
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.forEach;
                            var4 = function(arg1, arg2) {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.subscribeMembers;
                                var2 = arg2;
                                var1 = arg1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var4 = var5.bind(var6)(var2, var4);
                            var3['_subscriptions'] = var2;
 221:
                            return var1;
                        }
                    };
                    var5['value'] = var1;
                    var1 = new Array(3);
                    var1[0] = var5;
                    var5 = {};
                    var7 = 'componentWillUnmount';
                    var5['key'] = var7;
                    var7 = function value() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = this;
                            var3 = var1._subscriptions;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 66; continue _fun0005 }
 15:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.forEach;
                            var2 = var1._subscriptions;
                            var1 = function(arg1, arg2) {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.unsubscribeMembers;
                                var2 = arg2;
                                var1 = arg1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var1 = var3.bind(var4)(var2, var1);
 66:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5['value'] = var7;
                    var1[1] = var5;
                    var5 = {};
                    var7 = 'render';
                    var5['key'] = var7;
                    var6 = function value() {
                        var1 = this;
                        var5 = var1.props;
                        var6 = var5.forwardedRef;
                        var3 = _closure1_slot4;
                        var2 = _closure1_slot3;
                        var4 = undefined;
                        var7 = var3.bind(var4)(var5, var2);
                        var3 = _closure1_slot11;
                        var2 = _closure3_slot0;
                        var1 = {};
                        var1['ref'] = var6;
                        var8 = var1;
                        var5 = copyDataProperties(var8, var7);
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var5['value'] = var6;
                    var1[2] = var5;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                };
                var3 = undefined;
                var3 = var7.bind(var3)(var8);
                var _closure3_slot1 = var3;
                var3['displayName'] = var4;
                var3 = var6.forwardRef;
                var1 = function(arg1, arg2) {
                    var4 = _closure1_slot11;
                    var3 = _closure3_slot1;
                    var2 = {};
                    var6 = arg1;
                    var7 = var2;
                    var1 = copyDataProperties(var7, var6);
                    var5 = arg2;
                    var1 = 'forwardedRef';
                    var2[var1] = var5;
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
            }
        };
        return var1;
    };
    var3['default'] = var4;
    var2 = function useSubscribeGuildMembers(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot10;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.forEach;
            var3 = _closure2_slot0;
            var2 = function(arg1, arg2) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.subscribeMembers;
                var2 = arg2;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.forEach;
                var3 = _closure2_slot0;
                var2 = function(arg1, arg2) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.unsubscribeMembers;
                    var2 = arg2;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useSubscribeGuildMembers'] = var2;
    return var1;
})();