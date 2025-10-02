// app/modules/notifications/native/NotificationTokenManager.tsx
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function NotificationTokenManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = null;
                var1['token'] = var3;
                var4 = false;
                var1['hasRegisterEventListener'] = var4;
                var1['postConnectionOpenTimeoutID'] = var3;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = arg1;
                        var2['token'] = var3;
                        var2 = var2.canSync;
                        if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var2 = _closure3_slot0;
                        var1 = var2.registerToken;
                        var1 = var1.bind(var2)();
case 9:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleToken'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = var2.token;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var3 = _closure1_slot8;
                        var10 = var3.DCDNotificationCategoryUtils;
                        var9 = var10.registerNotificationReplyCategories;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var5 = 8;
                        var6 = var13[var5];
                        var4 = undefined;
                        var6 = var12.bind(var4)(var6);
                        var8 = var6.intl;
                        var7 = var8.string;
                        var6 = var13[var5];
                        var6 = var12.bind(var4)(var6);
                        var6 = var6.t;
                        var6 = var6.TBA5Xl;
                        var8 = var7.bind(var8)(var6);
                        var6 = var13[var5];
                        var6 = var12.bind(var4)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var13[var5];
                        var6 = var12.bind(var4)(var6);
                        var6 = var6.t;
                        var6 = var6.TXNS7e;
                        var16 = var7.bind(var11)(var6);
                        var6 = var13[var5];
                        var6 = var12.bind(var4)(var6);
                        var11 = var6.intl;
                        var6 = var11.string;
                        var5 = var13[var5];
                        var5 = var12.bind(var4)(var5);
                        var5 = var5.t;
                        var5 = var5.TBA5Xl;
                        var15 = var6.bind(var11)(var5);
                        var14 = function() {
                            var1 = undefined;
                            return var1;
                        };
                        var18 = var10;
                        var17 = var8;
                        var5 = var18[var9](var17, var16, var15, var14, var13);
                        var3 = var3.PushNotificationAndroid;
                        if(!var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var3 = _closure1_slot8;
                        var5 = var3.PushNotificationAndroid;
                        var3 = var5.onRegisterNotificationToken;
                        var3 = var3.bind(var5)();
case 13:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.registerDevice;
                        var1 = _closure3_slot0;
                        var1 = var1.token;
                        var1 = var2.bind(var3)(var1);
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['registerToken'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleSyncNoMultiAccount;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleSyncNoMultiAccountOnLoginSuccess'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.shouldRegisterDevicePostConnectionOpen;
                        var2 = 'notification_token_manager';
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot0;
                        if(var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                        var2 = var3.handleSyncNoMultiAccount;
                        var2 = var2.bind(var3)();
                        _fun0005_ip = 17; continue _fun0005;
case 15:
                        var2 = global;
                        var5 = var2.setTimeout;
                        var4 = var3.handleSyncNoMultiAccountOnPostConnectionOpen;
                        var2 = 5000;
                        var2 = var5.bind(var1)(var4, var2);
                        var3['postConnectionOpenTimeoutID'] = var2;
case 17:
                        return var1;
                    }
                };
                var1['handleSyncNoMultiAccountOnRegisterSuccess'] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var3 = var1.postConnectionOpenTimeoutID;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                        var3 = global;
                        var5 = var3.clearTimeout;
                        var2 = _closure3_slot0;
                        var4 = var2.postConnectionOpenTimeoutID;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var2['postConnectionOpenTimeoutID'] = var1;
                        var1 = var2.handleSyncNoMultiAccount;
                        var1 = var1.bind(var2)();
case 18:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSyncNoMultiAccountOnPostConnectionOpen'] = var3;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.canSync;
                        if(!var2) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                        var3 = _closure1_slot9;
                        var3 = var3.canUseMultiAccountNotifications;
                        var2 = !var3;
case 20:
                        if(!var2) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                        var2 = _closure3_slot0;
                        var1 = var2.registerToken;
                        var1 = var1.bind(var2)();
case 22:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSyncNoMultiAccount'] = var3;
                var2 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.canSync;
                        if(!var2) { _fun0008_ip = 24; continue _fun0008 }
case 21:
                        var3 = _closure1_slot9;
                        var2 = var3.canUseMultiAccountNotifications;
case 24:
                        if(!var2) { _fun0008_ip = 25; continue _fun0008 }
case 20:
                        var2 = _closure3_slot0;
                        var1 = var2.registerToken;
                        var1 = var1.bind(var2)();
case 25:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSyncWithMultiAccount'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var3 = var2.token;
                var1 = null;
                if(!(var1 != var3)) { _fun0009_ip = 20; continue _fun0009 }
case 26:
                var3 = var2.handleToken;
                var1 = var2.token;
                var1 = var3.bind(var2)(var1);
case 20:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 11;
                var6 = var5[var3];
                var1 = undefined;
                var9 = var4.bind(var1)(var6);
                var8 = var9.subscribe;
                var7 = var2.handleSyncNoMultiAccountOnLoginSuccess;
                var6 = 'LOGIN_SUCCESS';
                var6 = var8.bind(var9)(var6, var7);
                var6 = var5[var3];
                var9 = var4.bind(var1)(var6);
                var8 = var9.subscribe;
                var7 = var2.handleSyncNoMultiAccountOnRegisterSuccess;
                var6 = 'REGISTER_SUCCESS';
                var6 = var8.bind(var9)(var6, var7);
                var6 = var5[var3];
                var8 = var4.bind(var1)(var6);
                var7 = var8.subscribe;
                var6 = var2.handleSyncNoMultiAccountOnPostConnectionOpen;
                var9 = 'POST_CONNECTION_OPEN';
                var6 = var7.bind(var8)(var9, var6);
                var6 = var5[var3];
                var8 = var4.bind(var1)(var6);
                var7 = var8.subscribe;
                var6 = var2.handleSyncWithMultiAccount;
                var6 = var7.bind(var8)(var9, var6);
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.subscribe;
                var3 = var2.handleSyncWithMultiAccount;
                var2 = 'MULTI_ACCOUNT_REMOVE_ACCOUNT';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 11;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleSyncNoMultiAccountOnLoginSuccess;
            var6 = 'LOGIN_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleSyncNoMultiAccountOnRegisterSuccess;
            var6 = 'REGISTER_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var8 = var4.bind(var1)(var6);
            var7 = var8.unsubscribe;
            var6 = var2.handleSyncNoMultiAccountOnPostConnectionOpen;
            var9 = 'POST_CONNECTION_OPEN';
            var6 = var7.bind(var8)(var9, var6);
            var6 = var5[var3];
            var8 = var4.bind(var1)(var6);
            var7 = var8.unsubscribe;
            var6 = var2.handleSyncWithMultiAccount;
            var6 = var7.bind(var8)(var9, var6);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = var2.handleSyncWithMultiAccount;
            var2 = 'MULTI_ACCOUNT_REMOVE_ACCOUNT';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'registerListener';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var1 = var2.hasRegisterEventListener;
                if(var1) { _fun0010_ip = 15; continue _fun0010 }
case 27:
                var1 = true;
                var2['hasRegisterEventListener'] = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.addRegisterEventListener;
                var2 = var2.handleToken;
                var2 = var3.bind(var4)(var2);
                return var1;
case 15:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var5 = 'Device token listener already registered.';
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'registerNotificationCategories';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure1_slot8;
                var3 = var2.DCDNotificationCategoryUtils;
                var5 = var3.registerNotificationCategories;
                var2 = var2.DCDNotificationCategoryUtils;
                var4 = var2.registerNotificationCategoriesAndGroups;
                var2 = null;
                if(!(var2 == var4)) { _fun0011_ip = 28; continue _fun0011 }
case 29:
                if(!(var2 != var5)) { _fun0011_ip = 30; continue _fun0011 }
case 22:
                var3 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 8;
                var7 = var10[var6];
                var2 = undefined;
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.JJogjo;
                var7 = var8.bind(var11)(var7);
                var3['calls'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.K3lovL;
                var7 = var8.bind(var11)(var7);
                var3['mediaConnections'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.OIgYlZ;
                var7 = var8.bind(var11)(var7);
                var3['messages'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.YUU0RE;
                var7 = var8.bind(var11)(var7);
                var3['directMessages'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.TdEu5e;
                var7 = var8.bind(var11)(var7);
                var3['social'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.A/4saW;
                var7 = var8.bind(var11)(var7);
                var3['gameDetection'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.qGRago;
                var7 = var8.bind(var11)(var7);
                var3['stageLive'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.MfGr0d;
                var7 = var8.bind(var11)(var7);
                var3['guildEventLive'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.p5jg9f;
                var7 = var8.bind(var11)(var7);
                var3['guildHighlights'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.dl57ho;
                var7 = var8.bind(var11)(var7);
                var3['forumThreadCreated'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.BcZTKi;
                var7 = var8.bind(var11)(var7);
                var3['other'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var2)(var6);
                var6 = var6.t;
                var6 = var6.bcv3rq;
                var6 = var7.bind(var8)(var6);
                var3['otherHighPriority'] = var6;
                var2 = var5.bind(var2)(var3);
                _fun0011_ip = 30; continue _fun0011;
case 28:
                var3 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 8;
                var1 = var9[var5];
                var2 = undefined;
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.IUH/OT;
                var1 = var6.bind(var7)(var1);
                var3['calls'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.VeBD1N;
                var1 = var6.bind(var7)(var1);
                var3['mediaConnections'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.OIgYlZ;
                var1 = var6.bind(var7)(var1);
                var3['messages'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.NGdNZW;
                var1 = var6.bind(var7)(var1);
                var3['directMessages'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.NxgGZG;
                var1 = var6.bind(var7)(var1);
                var3['friendRequests'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.MOjygY;
                var1 = var6.bind(var7)(var1);
                var3['polls'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.jGVzY2;
                var1 = var6.bind(var7)(var1);
                var3['social'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.4n388P;
                var1 = var6.bind(var7)(var1);
                var3['stageLive'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.40TIqa;
                var1 = var6.bind(var7)(var1);
                var3['guildEventLive'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.p5jg9f;
                var1 = var6.bind(var7)(var1);
                var3['guildHighlights'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.HibKo6;
                var1 = var6.bind(var7)(var1);
                var3['forumThreadCreated'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.zJlwvb;
                var1 = var6.bind(var7)(var1);
                var3['systemMessages'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.kIrLfn;
                var1 = var6.bind(var7)(var1);
                var3['other'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.BcZTKi;
                var1 = var6.bind(var7)(var1);
                var3['default'] = var1;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var7 = var1.intl;
                var6 = var7.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.gHp0Cw;
                var1 = var6.bind(var7)(var1);
                var3['reactions'] = var1;
                var1 = {};
                var6 = var9[var5];
                var6 = var8.bind(var2)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var2)(var6);
                var6 = var6.t;
                var6 = var6.S5cB9f;
                var6 = var7.bind(var10)(var6);
                var1['realtime'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var2)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var2)(var6);
                var6 = var6.t;
                var6 = var6.jGVzY2;
                var6 = var7.bind(var10)(var6);
                var1['social'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var2)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var2)(var6);
                var6 = var6.t;
                var6 = var6.5qyruL;
                var6 = var7.bind(var10)(var6);
                var1['server'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var2)(var5);
                var5 = var5.t;
                var5 = var5.BcZTKi;
                var5 = var6.bind(var7)(var5);
                var1['other'] = var5;
                var1 = var4.bind(var2)(var3, var1);
case 30:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getToken';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.token;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'canSync';
        var5['key'] = var7;
        var6 = function get() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = this;
                var1 = var1.isInitialized;
                if(!var1) { _fun0012_ip = 24; continue _fun0012 }
case 27:
                var3 = _closure1_slot10;
                var2 = var3.isAuthenticated;
                var1 = var2.bind(var3)();
case 24:
                if(!var1) { _fun0012_ip = 31; continue _fun0012 }
case 20:
                var2 = _closure1_slot9;
                var2 = var2.isSwitchingAccount;
                var1 = !var2;
case 31:
                return var1;
            }
        };
        var5['get'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/native/NotificationTokenManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();