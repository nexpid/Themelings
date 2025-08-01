// app/modules/multi_account/MultiAccountManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot12 = var4;
    var4 = false;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function MultiAccountManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var9 = this;
                var5 = var1.onSwitchStart;
                var4 = var1.onSwitchSuccess;
                var3 = var1.onSwitchError;
                var2 = var1.onTokenSet;
                var1 = _closure1_slot5;
                var7 = _closure2_slot0;
                var8 = undefined;
                var1 = var1.bind(var8)(var9, var7);
                var1 = _closure1_slot8;
                var14 = var1.bind(var8)(var7);
                var7 = _closure1_slot7;
                var1 = _closure1_slot14;
                var1 = var1.bind(var8)();
                if(var1) { _fun0002_ip = 91; continue _fun0002 }
 78:
                var1 = var14.apply;
                var1 = var1.bind(var14)(var9, var8);
                _fun0002_ip = 129; continue _fun0002;
 91:
                var11 = global;
                var13 = var11.Reflect;
                var12 = var13.construct;
                var10 = _closure1_slot8;
                var10 = var10.bind(var8)(var9);
                var11 = var10.constructor;
                var10 = new Array(0);
                var1 = var12.bind(var13)(var14, var10, var11);
 129:
                var1 = var7.bind(var8)(var9, var1);
                var _closure3_slot0 = var1;
                var7 = {};
                var8 = function LOGOUT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleLogout;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['LOGOUT'] = var8;
                var1['actions'] = var7;
                var7 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure1_slot10;
                        var2 = var3.getCurrentUser;
                        var3 = var2.bind(var3)();
                        var4 = null;
                        if(!(var4 != var3)) { _fun0003_ip = 392; continue _fun0003 }
 25:
                        var2 = _closure1_slot4;
                        if(!(var4 != var2)) { _fun0003_ip = 267; continue _fun0003 }
 36:
                        var5 = _closure1_slot4;
                        var2 = _closure1_slot3;
                        if(!(var5 === var2)) { _fun0003_ip = 130; continue _fun0003 }
 48:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 8;
                        var5 = var5[var2];
                        var2 = undefined;
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.track;
                        var2 = _closure1_slot12;
                        var2 = var2.MULTI_ACCOUNT_SWITCH_FAILURE;
                        var2 = var5.bind(var6)(var2);
                        var5 = _closure3_slot0;
                        var5 = var5.onSwitchError;
                        if(!(var4 != var5)) { _fun0003_ip = 263; continue _fun0003 }
 110:
                        var5 = _closure3_slot0;
                        var2 = var5.onSwitchError;
                        var2 = var2.bind(var5)(var3);
                        _fun0003_ip = 263; continue _fun0003;
 130:
                        var5 = _closure1_slot11;
                        var2 = var5.getUsers;
                        var6 = var2.bind(var5)();
                        var5 = var6.map;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var8 = var5.bind(var6)(var2);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 8;
                        var5 = var5[var2];
                        var2 = undefined;
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.track;
                        var2 = _closure1_slot12;
                        var5 = var2.MULTI_ACCOUNT_SWITCH_SUCCESS;
                        var2 = {};
                        var9 = _closure1_slot4;
                        var2['from_user_id'] = var9;
                        var2['linked_user_ids'] = var8;
                        var2 = var6.bind(var7)(var5, var2);
                        var5 = _closure3_slot0;
                        var5 = var5.onSwitchSuccess;
                        if(!(var4 != var5)) { _fun0003_ip = 263; continue _fun0003 }
 243:
                        var6 = _closure3_slot0;
                        var5 = var6.onSwitchSuccess;
                        var2 = _closure1_slot13;
                        var2 = var5.bind(var6)(var3, var2);
 263:
                        var _closure1_slot4 = var4;
 267:
                        var2 = var3.id;
                        var _closure1_slot3 = var2;
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var7 = 9;
                        var2 = var2[var7];
                        var5 = undefined;
                        var6 = var6.bind(var5)(var2);
                        var2 = var6.getToken;
                        var6 = var2.bind(var6)();
                        var2 = var4 != var6;
                        if(!var2) { _fun0003_ip = 323; continue _fun0003 }
 315:
                        var8 = '';
                        var2 = var8 !== var6;
 323:
                        if(!var2) { _fun0003_ip = 360; continue _fun0003 }
 326:
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var7];
                        var5 = var2.bind(var5)(var1);
                        var2 = var5.setToken;
                        var1 = var3.id;
                        var1 = var2.bind(var5)(var6, var1);
 360:
                        var2 = _closure3_slot0;
                        var2 = var2.onTokenSet;
                        if(!(var4 != var2)) { _fun0003_ip = 392; continue _fun0003 }
 377:
                        var2 = _closure3_slot0;
                        var1 = var2.onTokenSet;
                        var1 = var1.bind(var2)(var3);
 392:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleConnectionOpen'] = var7;
                var6 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.isSwitchingAccount;
                        if(var3) { _fun0004_ip = 60; continue _fun0004 }
 15:
                        var3 = false;
                        _closure1_slot13 = var3;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 9;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.removeToken;
                        var3 = _closure1_slot3;
                        var3 = var4.bind(var5)(var3);
                        _fun0004_ip = 117; continue _fun0004;
 60:
                        var3 = _closure1_slot3;
                        _closure1_slot4 = var3;
                        var4 = _closure3_slot0;
                        var5 = var4.onSwitchStart;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0004_ip = 101; continue _fun0004 }
 87:
                        var4 = _closure3_slot0;
                        var3 = var4.onSwitchStart;
                        var3 = var3.bind(var4)();
 101:
                        var1 = var1.goHomeAfterSwitching;
                        var1 = !var1;
                        var1 = !var1;
                        _closure1_slot13 = var1;
 117:
                        var1 = null;
                        _closure1_slot3 = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLogout'] = var6;
                var1['onSwitchStart'] = var5;
                var1['onSwitchSuccess'] = var4;
                var1['onSwitchError'] = var3;
                var1['onTokenSet'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.subscribe;
            var4 = 'CONNECTION_OPEN';
            var2 = function() {
                var2 = _closure3_slot0;
                var1 = var2.handleConnectionOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            var2 = var3.handleConnectionOpen;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = 'CONNECTION_OPEN';
            var2 = function() {
                var2 = _closure3_slot0;
                var1 = var2.handleConnectionOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/MultiAccountManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();