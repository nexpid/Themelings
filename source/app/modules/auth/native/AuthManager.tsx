// app/modules/auth/native/AuthManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.NativeModules;
    var _closure1_slot9 = var8;
    var4 = var4.Keyboard;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PermissionStateType;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationAuthorizationStatus;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NewUserTypes;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'register';
    var4['REGISTER'] = var8;
    var8 = 'login';
    var4['LOGIN'] = var8;
    var _closure1_slot15 = var4;
    var4 = null;
    var _closure1_slot16 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function AuthManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot17;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function() {
                    var1 = _closure1_slot15;
                    var1 = var1.REGISTER;
                    _closure1_slot16 = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['handleRegister'] = var3;
                var3 = function() {
                    var1 = _closure1_slot15;
                    var1 = var1.LOGIN;
                    _closure1_slot16 = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['handleLogin'] = var3;
                var3 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                StartGenerator();
                                var3 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 159; continue _fun0003 }
 13:
                                var4 = _closure1_slot10;
                                var2 = var4.dismiss;
                                var2 = var2.bind(var4)();
                                var6 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 11;
                                var4 = var4[var2];
                                var2 = undefined;
                                var4 = var6.bind(var2)(var4);
                                var4 = var4.bind(var2)();
                                if(var4) { _fun0003_ip = 152; continue _fun0003 }
 59:
                                var4 = _closure1_slot9;
                                var6 = var4.NativePermissionManager;
                                var4 = var6.getNotificationAuthorizationStatus;
                                var4 = var4.bind(var6)();
                                SaveGenerator(address=83);
 81:
                                return var4;
 83:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                                if(var6) { _fun0003_ip = 149; continue _fun0003 }
 89:
                                var6 = _closure1_slot13;
                                var6 = var6.UNDETERMINED;
                                if(!(var4 !== var6)) { _fun0003_ip = 109; continue _fun0003 }
 103:
                                var6 = var3.bind(var2)();
                                _fun0003_ip = 156; continue _fun0003;
 109:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var5 = 12;
                                var5 = var7[var5];
                                var7 = var6.bind(var2)(var5);
                                var6 = var7.showPushNotificationPromptModal;
                                var5 = {};
                                var5['onComplete'] = var3;
                                var5 = var6.bind(var7)(var5);
                                _fun0003_ip = 156; continue _fun0003;
 149:
                                return var4;
 152:
                                var3 = var3.bind(var2)();
 156:
                                return var2;
 159:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var3 = var3.bind(var4)();
                var1['handlePushNotificationOptIn'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isIOS;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0004_ip = 79; continue _fun0004 }
 38:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 14;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.setPushPermissionState;
                        var2 = _closure1_slot11;
                        var2 = var2.PROMPT_SEEN;
                        var2 = var3.bind(var4)(var2);
 79:
                        var3 = _closure3_slot0;
                        var2 = var3.handleRegisterComplete;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var1['handleRegisterWithConnection'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.hasDeferredInvite;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0005_ip = 79; continue _fun0005 }
 38:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 16;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.setNewUser;
                        var3 = _closure1_slot14;
                        var3 = var3.ORGANIC_REGISTERED;
                        var3 = var4.bind(var5)(var3);
 79:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 17;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.startOnboarding;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var1['handleRegisterComplete'] = var3;
                var3 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.handlePushNotificationOptIn;
                    var1 = function() {
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 18;
                        var3 = var4[var1];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var3);
                        var6 = var7.transitionTo;
                        var3 = _closure1_slot12;
                        var5 = var3.ME;
                        var3 = {};
                        var8 = true;
                        var3['navigationReplace'] = var8;
                        var3 = var6.bind(var7)(var5, var3);
                        var3 = _closure1_slot1;
                        var2 = 19;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'DEFERRED_INVITE_SHOW';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleLoginWithConnection'] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var3 = _closure1_slot16;
                        var1 = _closure1_slot15;
                        var1 = var1.REGISTER;
                        if(!(var1 !== var3)) { _fun0006_ip = 139; continue _fun0006 }
 21:
                        var1 = _closure1_slot15;
                        var1 = var1.LOGIN;
                        if(!(var1 !== var3)) { _fun0006_ip = 90; continue _fun0006 }
 35:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 18;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.transitionTo;
                        var1 = _closure1_slot12;
                        var3 = var1.ME;
                        var1 = {};
                        var6 = true;
                        var1['navigationReplace'] = var6;
                        var1 = var4.bind(var5)(var3, var1);
                        _fun0006_ip = 186; continue _fun0006;
 90:
                        var3 = _closure3_slot0;
                        var1 = var3.handleLoginWithConnection;
                        var1 = var1.bind(var3)();
                        var1 = _closure1_slot9;
                        var4 = var1.DCDSKAdNetworkManager;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0006_ip = 186; continue _fun0006 }
 123:
                        var3 = var4.updateConversionValue;
                        var1 = 10;
                        var1 = var3.bind(var4)(var1);
                        _fun0006_ip = 186; continue _fun0006;
 139:
                        var3 = _closure3_slot0;
                        var1 = var3.handleRegisterWithConnection;
                        var1 = var1.bind(var3)();
                        var1 = _closure1_slot9;
                        var4 = var1.DCDSKAdNetworkManager;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0006_ip = 186; continue _fun0006 }
 172:
                        var3 = var4.updateConversionValue;
                        var1 = 1;
                        var1 = var3.bind(var4)(var1);
 186:
                        var1 = null;
                        _closure1_slot16 = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleConnectionOpen'] = var3;
                var2 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 20;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.deleteAllInteractions;
                        var3 = var3.bind(var4)();
                        var2 = _closure1_slot9;
                        var3 = var2.DCDShortcutManager;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0007_ip = 63; continue _fun0007 }
 53:
                        var2 = var3.handleLogout;
                        var2 = var2.bind(var3)();
 63:
                        return var1;
                    }
                };
                var1['handleLogout'] = var2;
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
            var2 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 19;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleConnectionOpen;
            var6 = 'CONNECTION_OPEN';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleLogin;
            var6 = 'LOGIN_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleRegister;
            var6 = 'REGISTER_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var3 = var2.handleLogout;
            var2 = 'LOGOUT';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var2 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 19;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleConnectionOpen;
            var6 = 'CONNECTION_OPEN';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleLogin;
            var6 = 'LOGIN_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleRegister;
            var6 = 'REGISTER_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = var2.handleLogout;
            var2 = 'LOGOUT';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/AuthManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();