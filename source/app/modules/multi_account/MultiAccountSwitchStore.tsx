// app/modules/multi_account/MultiAccountSwitchStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function getFastConnectUserId() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getLastFastConnectIdentifyUserId;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function getBaseSwitchAnalytics(arg1) {
        var1 = {};
        var3 = _closure1_slot13;
        var1['from_user_id'] = var3;
        var3 = _closure1_slot14;
        var1['to_user_id'] = var3;
        var3 = arg1;
        var1['actual_user_id'] = var3;
        var4 = _closure1_slot21;
        var3 = undefined;
        var3 = var4.bind(var3)();
        var1['fast_connect_user_id'] = var3;
        var4 = _closure1_slot9;
        var3 = var4.getUsers;
        var5 = var3.bind(var4)();
        var4 = var5.map;
        var3 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var1['linked_user_ids'] = var3;
        var3 = _closure1_slot17;
        var1['has_ever_connected'] = var3;
        var2 = _closure1_slot15;
        var1['switch_origin'] = var2;
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function isDiagnosticsEnabled() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot16;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = true;
case 6:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var8 = var7.bind(var1)(var2);
    var2 = var8.prototype;
    var9 = Object.create(var2, {constructor: {value: var8}});
    var2 = 'MultiAccountSwitchStore';
    var14 = var9;
    var13 = var2;
    var8 = new var14[var8](var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot11 = var8;
    var8 = null;
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var8;
    var _closure1_slot15 = var8;
    var9 = false;
    var _closure1_slot16 = var9;
    var _closure1_slot17 = var9;
    var _closure1_slot18 = var9;
    var _closure1_slot19 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var9 = var8.Store;
    var8 = function(arg1) {
        var4 = function MultiAccountSwitchStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot9;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getIsSwitchingAccount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSwitchResult';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var8.bind(var1)(var9);
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleSwitchStart(arg1) {
        var1 = arg1;
        var3 = var1.targetUserId;
        _closure1_slot14 = var3;
        var1 = var1.location;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var2['MULTI_ACCOUNT_SWITCH_START'] = var9;
    var9 = function handleSwitchTimeout() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.track;
        var1 = _closure1_slot10;
        var2 = var1.MULTI_ACCOUNT_SWITCH_TIMEOUT;
        var1 = {};
        var6 = _closure1_slot13;
        var1['from_user_id'] = var6;
        var6 = _closure1_slot14;
        var1['to_user_id'] = var6;
        var7 = _closure1_slot9;
        var6 = var7.getUsers;
        var8 = var6.bind(var7)();
        var7 = var8.map;
        var6 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var6 = var7.bind(var8)(var6);
        var1['linked_user_ids'] = var6;
        var6 = _closure1_slot17;
        var1['has_ever_connected'] = var6;
        var5 = _closure1_slot15;
        var1['switch_origin'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = false;
        return var1;
    };
    var2['MULTI_ACCOUNT_SWITCH_TIMEOUT'] = var9;
    var9 = function handleLogout(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isSwitchingAccount;
            var3 = !var1;
            var3 = !var3;
            _closure1_slot16 = var3;
            var3 = var2.isSwitchingAccount;
            if(var3) { _fun0004_ip = 4; continue _fun0004 }
case 11:
            var3 = false;
            _closure1_slot18 = var3;
            var5 = _closure1_slot2;
            var4 = _closure1_slot3;
            var3 = 9;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.removeToken;
            var3 = _closure1_slot12;
            var3 = var4.bind(var5)(var3);
            _fun0004_ip = 12; continue _fun0004;
case 4:
            var3 = _closure1_slot12;
            _closure1_slot13 = var3;
            var2 = var2.goHomeAfterSwitching;
            var2 = !var2;
            var2 = !var2;
            _closure1_slot18 = var2;
            var4 = _closure1_slot11;
            var3 = var4.log;
            var2 = {};
            var5 = _closure1_slot12;
            var2['current_user_id'] = var5;
            var5 = _closure1_slot14;
            var2['expected_user_id'] = var5;
            var6 = _closure1_slot21;
            var5 = undefined;
            var5 = var6.bind(var5)();
            var2['fast_connect_user_id'] = var5;
            var1 = _closure1_slot15;
            var2['switch_origin'] = var1;
            var1 = 'logout from account switch';
            var1 = var3.bind(var4)(var1, var2);
case 12:
            var1 = undefined;
            return var1;
        }
    };
    var2['LOGOUT'] = var9;
    var4 = function handleConnectionOpen(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.user;
            var1 = _closure1_slot16;
            if(var1) { _fun0005_ip = 11; continue _fun0005 }
case 13:
            var1 = null;
            _closure1_slot19 = var1;
            _fun0005_ip = 14; continue _fun0005;
case 11:
            var12 = var2.id;
            var1 = _closure1_slot23;
            var6 = undefined;
            var1 = var1.bind(var6)();
            if(!var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var4 = _closure1_slot2;
            var7 = _closure1_slot3;
            var1 = 9;
            var8 = var7[var1];
            var9 = var4.bind(var6)(var8);
            var8 = var9.getToken;
            var10 = var8.bind(var9)(var12);
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.getToken;
            var9 = var1.bind(var4)();
            var4 = _closure1_slot14;
            var1 = null;
            var4 = var1 != var4;
            if(!var4) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var7 = _closure1_slot14;
            var4 = var12 !== var7;
case 17:
            var7 = var1 != var10;
            if(!var7) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var7 = var1 != var9;
case 19:
            if(!var7) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var7 = var10 !== var9;
case 21:
            if(var7) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            if(!var4) { _fun0005_ip = 15; continue _fun0005 }
case 23:
            var8 = {};
            var11 = _closure1_slot22;
            var13 = var11.bind(var6)(var12);
            var14 = var8;
            var11 = copyDataProperties(var14, var13);
            var11 = var1 != var10;
            var10 = 'user_token_exists';
            var8[9] = var11;
            var9 = var1 != var9;
            var1 = 'main_token_exists';
            var8[0] = var9;
            var1 = 'is_token_mismatch';
            var8[0] = var7;
            var1 = 'is_user_mismatch';
            var8[0] = var4;
            var7 = _closure1_slot11;
            var4 = var7.log;
            var1 = 'Token mismatch on account switch connection open';
            var1 = var4.bind(var7)(var1, var8);
            var4 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 10;
            var1 = var7[var1];
            var7 = var4.bind(var6)(var1);
            var4 = var7.track;
            var1 = _closure1_slot10;
            var1 = var1.MULTI_ACCOUNT_SWITCH_READY_MISMATCH;
            var1 = var4.bind(var7)(var1, var8);
case 15:
            var4 = _closure1_slot13;
            var1 = var2.id;
            var4 = var4 !== var1;
            var7 = var2.id;
            var1 = _closure1_slot22;
            var8 = var1.bind(var6)(var7);
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 10;
            var1 = var9[var1];
            var9 = var7.bind(var6)(var1);
            var7 = var9.track;
            var1 = _closure1_slot10;
            if(var4) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var10 = var1.MULTI_ACCOUNT_SWITCH_FAILURE;
            var10 = var7.bind(var9)(var10, var8);
            var10 = _closure1_slot23;
            var10 = var10.bind(var6)();
            if(!var10) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var12 = _closure1_slot11;
            var11 = var12.log;
            var10 = 'Account switch failure';
            var10 = var11.bind(var12)(var10, var8);
            _fun0005_ip = 27; continue _fun0005;
case 25:
            var1 = var1.MULTI_ACCOUNT_SWITCH_SUCCESS;
            var1 = var7.bind(var9)(var1, var8);
            var1 = _closure1_slot23;
            var1 = var1.bind(var6)();
            if(!var1) { _fun0005_ip = 27; continue _fun0005 }
case 29:
            var7 = _closure1_slot11;
            var6 = var7.log;
            var1 = 'Account switch success';
            var1 = var6.bind(var7)(var1, var8);
case 27:
            var1 = {};
            var1['success'] = var4;
            var4 = _closure1_slot18;
            var1['navigateHome'] = var4;
            _closure1_slot19 = var1;
case 14:
            var6 = _closure1_slot2;
            var1 = _closure1_slot3;
            var8 = 9;
            var4 = var1[var8];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.getToken;
            var9 = var4.bind(var6)();
            var4 = null;
            var6 = var4 != var9;
            if(!var6) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var7 = '';
            var6 = var7 !== var9;
case 30:
            if(!var6) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var7 = var2.id;
            var6 = function checkTokenCollisionIntroducedAtWrite(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var8 = arg1;
                    var4 = arg2;
                    var _closure3_slot0 = var8;
                    var _closure3_slot1 = var4;
                    var5 = _closure1_slot23;
                    var1 = undefined;
                    var5 = var5.bind(var1)();
                    if(!var5) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var6 = _closure1_slot9;
                    var5 = var6.getUsers;
                    var7 = var5.bind(var6)();
                    var6 = var7.map;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.filter;
                    var3 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var5 = arg1;
                            var1 = _closure3_slot0;
                            var1 = var5 !== var1;
                            if(!var1) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                            var6 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var3 = 9;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var6.bind(var3)(var4);
                            var3 = var4.getToken;
                            var3 = var3.bind(var4)(var5);
                            var2 = _closure3_slot1;
                            var1 = var3 === var2;
case 36:
                            return var1;
                        }
                    };
                    var7 = var5.bind(var6)(var3);
                    var5 = var7.length;
                    var3 = 0;
                    if(!(var3 !== var5)) { _fun0006_ip = 34; continue _fun0006 }
case 38:
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var3 = 9;
                    var3 = var6[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.getToken;
                    var3 = var3.bind(var5)(var8);
                    var4 = var3 === var4;
                    var5 = var7.length;
                    var3 = 2;
                    var3 = var5 >= var3;
                    var5 = {};
                    var6 = _closure1_slot22;
                    var9 = var6.bind(var1)(var8);
                    var10 = var5;
                    var6 = copyDataProperties(var10, var9);
                    var6 = 'colliding_user_ids';
                    var5[5] = var7;
                    if(var4) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var4 = var3;
case 39:
                    var3 = 'is_already_corrupted';
                    var5[2] = var4;
                    var6 = _closure1_slot11;
                    var4 = var6.log;
                    var3 = 'setToken about to introduce per-user token collision';
                    var3 = var4.bind(var6)(var3, var5);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 10;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.track;
                    var2 = _closure1_slot10;
                    var2 = var2.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE;
                    var2 = var3.bind(var4)(var2, var5);
case 34:
                    return var1;
                }
            };
            var6 = var6.bind(var1)(var7, var9);
            var7 = _closure1_slot2;
            var6 = _closure1_slot3;
            var6 = var6[var8];
            var8 = var7.bind(var1)(var6);
            var7 = var8.setToken;
            var6 = var2.id;
            var6 = var7.bind(var8)(var9, var6);
case 32:
            var6 = var2.id;
            var5 = function checkGeneralTokenCollision(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot23;
                    var1 = undefined;
                    var4 = var4.bind(var1)();
                    if(!var4) { _fun0008_ip = 10; continue _fun0008 }
case 41:
                    var4 = global;
                    var4 = var4.Map;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var8 = var5;
                    var4 = new var8[var4](var7);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var _closure3_slot1 = var4;
                    var5 = _closure1_slot9;
                    var3 = var5.getUsers;
                    var6 = var3.bind(var5)();
                    var5 = var6.forEach;
                    var3 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var6 = var1.id;
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getToken;
                            var5 = var2.bind(var3)(var6);
                            var3 = null;
                            if(!(var3 != var5)) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                            var2 = '';
                            if(!(var2 !== var5)) { _fun0009_ip = 42; continue _fun0009 }
case 44:
                            var7 = _closure3_slot1;
                            var4 = var7.get;
                            var4 = var4.bind(var7)(var5);
                            if(!(var3 == var4)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                            var4 = new Array(0);
case 45:
                            var3 = var4.push;
                            var3 = var3.bind(var4)(var6);
                            var3 = _closure3_slot1;
                            var2 = var3.set;
                            var2 = var2.bind(var3)(var5, var4);
case 42:
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var3);
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var3 = arg1;
                            var2 = var3.length;
                            var1 = 2;
                            if(!(!(var2 < var1))) { _fun0010_ip = 47; continue _fun0010 }
case 48:
                            var4 = {};
                            var6 = _closure1_slot22;
                            var2 = _closure3_slot0;
                            var5 = undefined;
                            var7 = var6.bind(var5)(var2);
                            var8 = var4;
                            var2 = copyDataProperties(var8, var7);
                            var2 = 'colliding_user_ids';
                            var4[1] = var3;
                            var6 = _closure1_slot11;
                            var3 = var6.log;
                            var2 = 'Per-user token collision detected';
                            var2 = var3.bind(var6)(var2, var4);
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var2 = 10;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.track;
                            var1 = _closure1_slot10;
                            var1 = var1.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION;
                            var1 = var2.bind(var3)(var1, var4);
case 47:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
case 10:
                    return var1;
                }
            };
            var5 = var5.bind(var1)(var6);
            _closure1_slot13 = var4;
            _closure1_slot14 = var4;
            _closure1_slot15 = var4;
            var4 = false;
            _closure1_slot16 = var4;
            _closure1_slot18 = var4;
            var4 = true;
            _closure1_slot17 = var4;
            var2 = var2.id;
            _closure1_slot12 = var2;
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/MultiAccountSwitchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();