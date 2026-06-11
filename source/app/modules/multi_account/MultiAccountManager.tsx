// app/modules/multi_account/MultiAccountManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
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
    var1 = function isDiagnosticsEnabled() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot18;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = true;
case 6:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var2 = function getFastConnectUserId() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getLastFastConnectIdentifyUserId;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot22 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var8[var5];
    var10 = var6.bind(var1)(var5);
    var5 = var10.prototype;
    var9 = Object.create(var5, {constructor: {value: var10}});
    var13 = 'MultiAccountManager';
    var14 = var9;
    var5 = new var14[var10](var13, var12);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot14 = var5;
    var5 = false;
    var _closure1_slot15 = var5;
    var9 = null;
    var _closure1_slot16 = var9;
    var _closure1_slot17 = var9;
    var _closure1_slot18 = var5;
    var _closure1_slot19 = var5;
    var5 = 14;
    var5 = var8[var5];
    var6 = var6.bind(var1)(var5);
    var5 = function(arg1) {
        var4 = function MultiAccountManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var10 = this;
                var6 = var1.onSwitchStart;
                var5 = var1.onSwitchSuccess;
                var4 = var1.onSwitchError;
                var3 = var1.onTokenSet;
                var2 = var1.onLogout;
                var1 = _closure1_slot4;
                var8 = _closure2_slot0;
                var9 = undefined;
                var1 = var1.bind(var9)(var10, var8);
                var1 = _closure1_slot7;
                var15 = var1.bind(var9)(var8);
                var8 = _closure1_slot6;
                var1 = _closure1_slot20;
                var1 = var1.bind(var9)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var15.apply;
                var1 = var1.bind(var15)(var10, var9);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var12 = global;
                var14 = var12.Reflect;
                var13 = var14.construct;
                var11 = _closure1_slot7;
                var11 = var11.bind(var9)(var10);
                var12 = var11.constructor;
                var11 = new Array(0);
                var1 = var13.bind(var14)(var15, var11, var12);
case 10:
                var1 = var8.bind(var9)(var10, var1);
                var _closure3_slot0 = var1;
                var8 = {};
                var9 = function LOGOUT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleLogout;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8['LOGOUT'] = var9;
                var9 = function MULTI_ACCOUNT_SWITCH_START(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMultiAccountSwitchStart;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8['MULTI_ACCOUNT_SWITCH_START'] = var9;
                var1['actions'] = var8;
                var8 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.targetUserId;
                    _closure1_slot16 = var3;
                    var3 = var2.location;
                    _closure1_slot17 = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.setAccountSwitchUserId;
                    var2 = var2.targetUserId;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleMultiAccountSwitchStart'] = var8;
                var8 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = _closure1_slot9;
                        var3 = var4.getCurrentUser;
                        var6 = var3.bind(var4)();
                        var3 = null;
                        if(!(var3 != var6)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var7 = var6.id;
                        var5 = function checkConnectionOpenMismatch(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var9 = arg1;
                                var3 = _closure1_slot21;
                                var1 = undefined;
                                var3 = var3.bind(var1)();
                                if(!var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                                var4 = _closure1_slot2;
                                var5 = _closure1_slot3;
                                var3 = 10;
                                var6 = var5[var3];
                                var7 = var4.bind(var1)(var6);
                                var6 = var7.getToken;
                                var8 = var6.bind(var7)(var9);
                                var3 = var5[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.getToken;
                                var7 = var3.bind(var4)();
                                var3 = _closure1_slot16;
                                var6 = null;
                                var3 = var6 != var3;
                                if(!var3) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                                var4 = _closure1_slot16;
                                var3 = var9 !== var4;
case 15:
                                var4 = var6 != var8;
                                if(!var4) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                                var4 = var6 != var7;
case 17:
                                if(!var4) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                                var4 = var8 !== var7;
case 19:
                                if(var4) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                                if(!var3) { _fun0005_ip = 13; continue _fun0005 }
case 21:
                                var5 = {};
                                var10 = _closure1_slot13;
                                var5['from_user_id'] = var10;
                                var10 = _closure1_slot16;
                                var5['to_user_id'] = var10;
                                var5['actual_user_id'] = var9;
                                var9 = _closure1_slot22;
                                var9 = var9.bind(var1)();
                                var5['fast_connect_user_id'] = var9;
                                var10 = _closure1_slot10;
                                var9 = var10.getUsers;
                                var11 = var9.bind(var10)();
                                var10 = var11.map;
                                var9 = function(arg1) {
                                    var1 = arg1;
                                    var1 = var1.id;
                                    return var1;
                                };
                                var9 = var10.bind(var11)(var9);
                                var5['linked_user_ids'] = var9;
                                var9 = _closure1_slot19;
                                var5['has_ever_connected'] = var9;
                                var8 = var6 != var8;
                                var5['user_token_exists'] = var8;
                                var6 = var6 != var7;
                                var5['main_token_exists'] = var6;
                                var5['is_token_mismatch'] = var4;
                                var5['is_user_mismatch'] = var3;
                                var3 = _closure1_slot17;
                                var5['switch_origin'] = var3;
                                var6 = _closure1_slot14;
                                var4 = var6.log;
                                var3 = 'Token mismatch on account switch connection open';
                                var3 = var4.bind(var6)(var3, var5);
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var3 = 11;
                                var3 = var6[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.track;
                                var2 = _closure1_slot11;
                                var2 = var2.MULTI_ACCOUNT_SWITCH_READY_MISMATCH;
                                var2 = var3.bind(var4)(var2, var5);
case 13:
                                return var1;
                            }
                        };
                        var4 = undefined;
                        var5 = var5.bind(var4)(var7);
                        var5 = _closure1_slot13;
                        if(!(var3 != var5)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var7 = _closure1_slot13;
                        var5 = var6.id;
                        if(!(var7 === var5)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                        var5 = function trackAndLogFailure(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var5 = {};
                                var1 = _closure1_slot13;
                                var5['from_user_id'] = var1;
                                var1 = _closure1_slot16;
                                var5['to_user_id'] = var1;
                                var1 = arg1;
                                var1 = var1.id;
                                var5['actual_user_id'] = var1;
                                var3 = _closure1_slot22;
                                var1 = undefined;
                                var3 = var3.bind(var1)();
                                var5['fast_connect_user_id'] = var3;
                                var4 = _closure1_slot10;
                                var3 = var4.getUsers;
                                var6 = var3.bind(var4)();
                                var4 = var6.map;
                                var3 = function(arg1) {
                                    var1 = arg1;
                                    var1 = var1.id;
                                    return var1;
                                };
                                var3 = var4.bind(var6)(var3);
                                var5['linked_user_ids'] = var3;
                                var3 = _closure1_slot19;
                                var5['has_ever_connected'] = var3;
                                var3 = _closure1_slot17;
                                var5['switch_origin'] = var3;
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var3 = 11;
                                var3 = var6[var3];
                                var6 = var4.bind(var1)(var3);
                                var4 = var6.track;
                                var3 = _closure1_slot11;
                                var3 = var3.MULTI_ACCOUNT_SWITCH_FAILURE;
                                var3 = var4.bind(var6)(var3, var5);
                                var3 = _closure1_slot21;
                                var3 = var3.bind(var1)();
                                if(!var3) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                                var4 = _closure1_slot14;
                                var3 = var4.log;
                                var2 = 'Account switch failure';
                                var2 = var3.bind(var4)(var2, var5);
case 27:
                                return var1;
                            }
                        };
                        var5 = var5.bind(var4)(var6);
                        var7 = _closure3_slot0;
                        var7 = var7.onSwitchError;
                        if(!(var3 != var7)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var7 = _closure3_slot0;
                        var5 = var7.onSwitchError;
                        var5 = var5.bind(var7)(var6);
                        _fun0004_ip = 29; continue _fun0004;
case 25:
                        var5 = function trackAndLogSuccess(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var5 = {};
                                var1 = _closure1_slot13;
                                var5['from_user_id'] = var1;
                                var1 = _closure1_slot16;
                                var5['to_user_id'] = var1;
                                var1 = arg1;
                                var1 = var1.id;
                                var5['actual_user_id'] = var1;
                                var3 = _closure1_slot22;
                                var1 = undefined;
                                var3 = var3.bind(var1)();
                                var5['fast_connect_user_id'] = var3;
                                var4 = _closure1_slot10;
                                var3 = var4.getUsers;
                                var6 = var3.bind(var4)();
                                var4 = var6.map;
                                var3 = function(arg1) {
                                    var1 = arg1;
                                    var1 = var1.id;
                                    return var1;
                                };
                                var3 = var4.bind(var6)(var3);
                                var5['linked_user_ids'] = var3;
                                var3 = _closure1_slot19;
                                var5['has_ever_connected'] = var3;
                                var3 = _closure1_slot17;
                                var5['switch_origin'] = var3;
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var3 = 11;
                                var3 = var6[var3];
                                var6 = var4.bind(var1)(var3);
                                var4 = var6.track;
                                var3 = _closure1_slot11;
                                var3 = var3.MULTI_ACCOUNT_SWITCH_SUCCESS;
                                var3 = var4.bind(var6)(var3, var5);
                                var3 = _closure1_slot21;
                                var3 = var3.bind(var1)();
                                if(!var3) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                                var4 = _closure1_slot14;
                                var3 = var4.log;
                                var2 = 'Account switch success';
                                var2 = var3.bind(var4)(var2, var5);
case 27:
                                return var1;
                            }
                        };
                        var5 = var5.bind(var4)(var6);
                        var7 = _closure3_slot0;
                        var7 = var7.onSwitchSuccess;
                        if(!(var3 != var7)) { _fun0004_ip = 29; continue _fun0004 }
case 31:
                        var8 = _closure3_slot0;
                        var7 = var8.onSwitchSuccess;
                        var5 = _closure1_slot15;
                        var5 = var7.bind(var8)(var6, var5);
case 29:
                        var _closure1_slot13 = var3;
case 23:
                        var5 = var6.id;
                        var _closure1_slot12 = var5;
                        var7 = _closure1_slot2;
                        var5 = _closure1_slot3;
                        var8 = 10;
                        var5 = var5[var8];
                        var7 = var7.bind(var4)(var5);
                        var5 = var7.getToken;
                        var9 = var5.bind(var7)();
                        var5 = var3 != var9;
                        if(!var5) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                        var7 = '';
                        var5 = var7 !== var9;
case 32:
                        if(!var5) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                        var7 = var6.id;
                        var5 = function checkTokenCollisionIntroducedAtWrite(arg1, arg2) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var7 = arg1;
                                var _closure5_slot0 = var7;
                                var1 = arg2;
                                var _closure5_slot1 = var1;
                                var4 = _closure1_slot21;
                                var1 = undefined;
                                var4 = var4.bind(var1)();
                                if(!var4) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                                var4 = global;
                                var4 = var4.Set;
                                var5 = var4.prototype;
                                var5 = Object.create(var5, {constructor: {value: var4}});
                                var12 = var5;
                                var4 = new var12[var4](var11);
                                var4 = var4 instanceof Object ? var4 : var5;
                                var _closure5_slot2 = var4;
                                var4 = new Array(0);
                                var _closure5_slot3 = var4;
                                var6 = new Array(0);
                                var _closure5_slot4 = var6;
                                var8 = _closure1_slot10;
                                var5 = var8.getUsers;
                                var9 = var5.bind(var8)();
                                var5 = false;
                                var _closure5_slot5 = var5;
                                var8 = var9.forEach;
                                var5 = function(arg1) {
                                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                        var1 = arg1;
                                        var6 = var1.id;
                                        var2 = _closure5_slot4;
                                        var1 = var2.push;
                                        var1 = var1.bind(var2)(var6);
                                        var4 = _closure1_slot2;
                                        var2 = _closure1_slot3;
                                        var1 = 10;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var2);
                                        var2 = var4.getToken;
                                        var5 = var2.bind(var4)(var6);
                                        var2 = _closure5_slot0;
                                        var2 = var6 !== var2;
                                        if(!var2) { _fun0009_ip = 38; continue _fun0009 }
case 3:
                                        var4 = _closure5_slot1;
                                        var2 = var5 === var4;
case 38:
                                        if(!var2) { _fun0009_ip = 8; continue _fun0009 }
case 39:
                                        var4 = _closure5_slot3;
                                        var2 = var4.push;
                                        var2 = var2.bind(var4)(var6);
case 8:
                                        var2 = null;
                                        if(!(var2 != var5)) { _fun0009_ip = 31; continue _fun0009 }
case 40:
                                        var4 = _closure5_slot2;
                                        var2 = var4.has;
                                        var2 = var2.bind(var4)(var5);
                                        if(var2) { _fun0009_ip = 41; continue _fun0009 }
case 21:
                                        var4 = _closure5_slot2;
                                        var2 = var4.add;
                                        var2 = var2.bind(var4)(var5);
                                        _fun0009_ip = 31; continue _fun0009;
case 41:
                                        var2 = true;
                                        _closure5_slot5 = var2;
case 31:
                                        return var1;
                                    }
                                };
                                var5 = var8.bind(var9)(var5);
                                var8 = var4.length;
                                var5 = 0;
                                if(!(var5 !== var8)) { _fun0008_ip = 36; continue _fun0008 }
case 42:
                                var5 = {};
                                var8 = _closure1_slot13;
                                var5['from_user_id'] = var8;
                                var8 = _closure1_slot16;
                                var5['to_user_id'] = var8;
                                var5['actual_user_id'] = var7;
                                var7 = _closure1_slot22;
                                var7 = var7.bind(var1)();
                                var5['fast_connect_user_id'] = var7;
                                var5['linked_user_ids'] = var6;
                                var5['colliding_user_ids'] = var4;
                                var4 = _closure1_slot19;
                                var5['has_ever_connected'] = var4;
                                var3 = _closure5_slot5;
                                var5['is_already_corrupted'] = var3;
                                var3 = _closure1_slot17;
                                var5['switch_origin'] = var3;
                                var6 = _closure1_slot14;
                                var4 = var6.log;
                                var3 = 'setToken about to introduce per-user token collision';
                                var3 = var4.bind(var6)(var3, var5);
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var3 = 11;
                                var3 = var6[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.track;
                                var2 = _closure1_slot11;
                                var2 = var2.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE;
                                var2 = var3.bind(var4)(var2, var5);
case 36:
                                return var1;
                            }
                        };
                        var5 = var5.bind(var4)(var7, var9);
                        var7 = _closure1_slot2;
                        var5 = _closure1_slot3;
                        var5 = var5[var8];
                        var8 = var7.bind(var4)(var5);
                        var7 = var8.setToken;
                        var5 = var6.id;
                        var5 = var7.bind(var8)(var9, var5);
case 34:
                        var5 = var6.id;
                        var2 = function checkGeneralTokenCollision(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var1 = arg1;
                                var _closure5_slot0 = var1;
                                var4 = _closure1_slot21;
                                var1 = undefined;
                                var4 = var4.bind(var1)();
                                if(!var4) { _fun0010_ip = 25; continue _fun0010 }
case 43:
                                var4 = new Array(0);
                                var _closure5_slot1 = var4;
                                var4 = global;
                                var4 = var4.Map;
                                var5 = var4.prototype;
                                var5 = Object.create(var5, {constructor: {value: var4}});
                                var8 = var5;
                                var4 = new var8[var4](var7);
                                var4 = var4 instanceof Object ? var4 : var5;
                                var _closure5_slot2 = var4;
                                var5 = _closure1_slot10;
                                var3 = var5.getUsers;
                                var6 = var3.bind(var5)();
                                var5 = var6.forEach;
                                var3 = function(arg1) {
                                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                        var1 = arg1;
                                        var6 = var1.id;
                                        var3 = _closure5_slot1;
                                        var1 = var3.push;
                                        var1 = var1.bind(var3)(var6);
                                        var4 = _closure1_slot2;
                                        var3 = _closure1_slot3;
                                        var1 = 10;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var3);
                                        var3 = var4.getToken;
                                        var5 = var3.bind(var4)(var6);
                                        var3 = null;
                                        if(!(var3 != var5)) { _fun0011_ip = 44; continue _fun0011 }
case 26:
                                        var4 = '';
                                        if(!(var4 !== var5)) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                                        var7 = _closure5_slot2;
                                        var4 = var7.get;
                                        var4 = var4.bind(var7)(var5);
                                        if(!(var3 == var4)) { _fun0011_ip = 8; continue _fun0011 }
case 15:
                                        var4 = new Array(0);
case 8:
                                        var3 = var4.push;
                                        var3 = var3.bind(var4)(var6);
                                        var3 = _closure5_slot2;
                                        var2 = var3.set;
                                        var2 = var2.bind(var3)(var5, var4);
case 44:
                                        return var1;
                                    }
                                };
                                var3 = var5.bind(var6)(var3);
                                var3 = var4.forEach;
                                var2 = function(arg1) {
                                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                        var2 = arg1;
                                        var3 = var2.length;
                                        var1 = 2;
                                        if(!(!(var3 < var1))) { _fun0012_ip = 46; continue _fun0012 }
case 47:
                                        var4 = {};
                                        var3 = _closure1_slot13;
                                        var4['from_user_id'] = var3;
                                        var3 = _closure1_slot16;
                                        var4['to_user_id'] = var3;
                                        var5 = _closure5_slot0;
                                        var4['actual_user_id'] = var5;
                                        var6 = _closure1_slot22;
                                        var5 = undefined;
                                        var6 = var6.bind(var5)();
                                        var4['fast_connect_user_id'] = var6;
                                        var3 = _closure5_slot1;
                                        var4['linked_user_ids'] = var3;
                                        var4['colliding_user_ids'] = var2;
                                        var2 = _closure1_slot19;
                                        var4['has_ever_connected'] = var2;
                                        var2 = _closure1_slot17;
                                        var4['switch_origin'] = var2;
                                        var6 = _closure1_slot14;
                                        var3 = var6.log;
                                        var2 = 'Per-user token collision detected';
                                        var2 = var3.bind(var6)(var2, var4);
                                        var3 = _closure1_slot1;
                                        var6 = _closure1_slot3;
                                        var2 = 11;
                                        var2 = var6[var2];
                                        var3 = var3.bind(var5)(var2);
                                        var2 = var3.track;
                                        var1 = _closure1_slot11;
                                        var1 = var1.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION;
                                        var1 = var2.bind(var3)(var1, var4);
case 46:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
case 25:
                                return var1;
                            }
                        };
                        var2 = var2.bind(var4)(var5);
                        var5 = _closure3_slot0;
                        var5 = var5.onTokenSet;
                        if(!(var3 != var5)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                        var5 = _closure3_slot0;
                        var2 = var5.onTokenSet;
                        var2 = var2.bind(var5)(var6);
case 48:
                        _closure1_slot16 = var3;
                        _closure1_slot17 = var3;
                        var2 = false;
                        _closure1_slot18 = var2;
                        var2 = true;
                        _closure1_slot19 = var2;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 12;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.setAccountSwitchUserId;
                        var1 = var1.bind(var2)(var3);
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleConnectionOpen'] = var8;
                var7 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var3 = arg1;
                        var1 = _closure3_slot0;
                        var1 = var1.onLogout;
                        var2 = null;
                        if(!(var2 != var1)) { _fun0013_ip = 50; continue _fun0013 }
case 14:
                        var5 = _closure3_slot0;
                        var1 = var5.onLogout;
                        var1 = var1.bind(var5)(var3);
case 50:
                        var5 = var3.isSwitchingAccount;
                        if(var5) { _fun0013_ip = 8; continue _fun0013 }
case 51:
                        var5 = false;
                        _closure1_slot15 = var5;
                        var7 = _closure1_slot2;
                        var6 = _closure1_slot3;
                        var5 = 10;
                        var6 = var6[var5];
                        var5 = undefined;
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.removeToken;
                        var5 = _closure1_slot12;
                        var5 = var6.bind(var7)(var5);
                        _fun0013_ip = 35; continue _fun0013;
case 8:
                        var8 = _closure1_slot14;
                        var7 = var8.log;
                        var6 = {};
                        var5 = _closure1_slot12;
                        var6['current_user_id'] = var5;
                        var5 = _closure1_slot16;
                        var6['expected_user_id'] = var5;
                        var9 = _closure1_slot22;
                        var5 = undefined;
                        var5 = var9.bind(var5)();
                        var6['fast_connect_user_id'] = var5;
                        var5 = _closure1_slot17;
                        var6['switch_origin'] = var5;
                        var5 = 'logout from account switch';
                        var5 = var7.bind(var8)(var5, var6);
                        var5 = true;
                        _closure1_slot18 = var5;
                        var5 = _closure1_slot12;
                        _closure1_slot13 = var5;
                        var5 = _closure3_slot0;
                        var5 = var5.onSwitchStart;
                        if(!(var2 != var5)) { _fun0013_ip = 52; continue _fun0013 }
case 53:
                        var5 = _closure3_slot0;
                        var4 = var5.onSwitchStart;
                        var4 = var4.bind(var5)();
case 52:
                        var3 = var3.goHomeAfterSwitching;
                        var3 = !var3;
                        var3 = !var3;
                        _closure1_slot15 = var3;
case 35:
                        _closure1_slot12 = var2;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLogout'] = var7;
                var1['onSwitchStart'] = var6;
                var1['onSwitchSuccess'] = var5;
                var1['onSwitchError'] = var4;
                var1['onTokenSet'] = var3;
                var1['onLogout'] = var2;
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
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 13;
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
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 13;
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
    var5 = var5.bind(var1)(var6);
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/multi_account/MultiAccountManager.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var4 = function getMultiAccountManagerState() {
        var1 = {};
        var3 = _closure1_slot13;
        var1['previousUserId'] = var3;
        var3 = _closure1_slot16;
        var1['expectedUserId'] = var3;
        var3 = _closure1_slot17;
        var1['switchLocation'] = var3;
        var3 = _closure1_slot18;
        var1['isSwitchingAccount'] = var3;
        var2 = _closure1_slot19;
        var1['hasEverConnected'] = var2;
        return var1;
    };
    var3['getMultiAccountManagerState'] = var4;
    var3['getFastConnectUserId'] = var2;
    return var1;
})();