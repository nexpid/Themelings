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
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOTIF_SETTINGS;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot13 = var4;
    var4 = 22;
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
                var1 = _closure1_slot14;
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
                var1['_experimentUnsubscribe'] = var3;
                var1['token'] = var3;
                var4 = false;
                var1['hasRegisterEventListener'] = var4;
                var1['hasTrackedDisabledAndroidNotifChannels'] = var4;
                var1['postConnectionOpenTimeoutID'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.registerNotificationCategories;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['_handleExperimentsUpdated'] = var3;
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
                        var5 = 11;
                        var6 = var13[var5];
                        var4 = undefined;
                        var6 = var12.bind(var4)(var6);
                        var8 = var6.intl;
                        var7 = var8.string;
                        var6 = var13[var5];
                        var6 = var12.bind(var4)(var6);
                        var6 = var6.t;
                        var6 = var6.TBA5Xg;
                        var8 = var7.bind(var8)(var6);
                        var6 = var13[var5];
                        var6 = var12.bind(var4)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var13[var5];
                        var6 = var12.bind(var4)(var6);
                        var6 = var6.t;
                        var6 = var6.TXNS7S;
                        var16 = var7.bind(var11)(var6);
                        var6 = var13[var5];
                        var6 = var12.bind(var4)(var6);
                        var11 = var6.intl;
                        var6 = var11.string;
                        var5 = var13[var5];
                        var5 = var12.bind(var4)(var5);
                        var5 = var5.t;
                        var5 = var5.TBA5Xg;
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
                        var2 = 12;
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
                    var3 = _closure3_slot0;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = var3.handleSyncNoMultiAccountOnPostConnectionOpen;
                    var1 = undefined;
                    var2 = 5000;
                    var2 = var5.bind(var1)(var4, var2);
                    var3['postConnectionOpenTimeoutID'] = var2;
                    return var1;
                };
                var1['handleSyncNoMultiAccountOnRegisterSuccess'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var3 = var1.postConnectionOpenTimeoutID;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                        var3 = global;
                        var5 = var3.clearTimeout;
                        var2 = _closure3_slot0;
                        var4 = var2.postConnectionOpenTimeoutID;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var2['postConnectionOpenTimeoutID'] = var1;
                        var1 = var2.handleSyncNoMultiAccount;
                        var1 = var1.bind(var2)();
case 15:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSyncNoMultiAccountOnPostConnectionOpen'] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.canSync;
                        if(!var2) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                        var3 = _closure1_slot10;
                        var3 = var3.canUseMultiAccountNotifications;
                        var2 = !var3;
case 17:
                        if(!var2) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                        var2 = _closure3_slot0;
                        var1 = var2.registerToken;
                        var1 = var1.bind(var2)();
case 19:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSyncNoMultiAccount'] = var3;
                var2 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.canSync;
                        if(!var2) { _fun0007_ip = 21; continue _fun0007 }
case 18:
                        var3 = _closure1_slot10;
                        var2 = var3.canUseMultiAccountNotifications;
case 21:
                        if(!var2) { _fun0007_ip = 22; continue _fun0007 }
case 17:
                        var2 = _closure3_slot0;
                        var1 = var2.registerToken;
                        var1 = var1.bind(var2)();
case 22:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2.token;
                var1 = null;
                if(!(var1 != var4)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                var4 = var2.handleToken;
                var1 = var2.token;
                var1 = var4.bind(var2)(var1);
case 23:
                var6 = _closure1_slot9;
                var5 = var6.addChangeListener;
                var4 = var2._handleExperimentsUpdated;
                var4 = var5.bind(var6)(var4);
                var3 = function() {
                    var3 = _closure1_slot9;
                    var2 = var3.removeChangeListener;
                    var1 = _closure3_slot0;
                    var1 = var1._handleExperimentsUpdated;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2['_experimentUnsubscribe'] = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 13;
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
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 13;
                var6 = var5[var2];
                var1 = undefined;
                var9 = var4.bind(var1)(var6);
                var8 = var9.unsubscribe;
                var7 = var3.handleSyncNoMultiAccountOnLoginSuccess;
                var6 = 'LOGIN_SUCCESS';
                var6 = var8.bind(var9)(var6, var7);
                var6 = var5[var2];
                var9 = var4.bind(var1)(var6);
                var8 = var9.unsubscribe;
                var7 = var3.handleSyncNoMultiAccountOnRegisterSuccess;
                var6 = 'REGISTER_SUCCESS';
                var6 = var8.bind(var9)(var6, var7);
                var6 = var5[var2];
                var8 = var4.bind(var1)(var6);
                var7 = var8.unsubscribe;
                var6 = var3.handleSyncNoMultiAccountOnPostConnectionOpen;
                var9 = 'POST_CONNECTION_OPEN';
                var6 = var7.bind(var8)(var9, var6);
                var6 = var5[var2];
                var8 = var4.bind(var1)(var6);
                var7 = var8.unsubscribe;
                var6 = var3.handleSyncWithMultiAccount;
                var6 = var7.bind(var8)(var9, var6);
                var2 = var5[var2];
                var6 = var4.bind(var1)(var2);
                var5 = var6.unsubscribe;
                var4 = var3.handleSyncWithMultiAccount;
                var2 = 'MULTI_ACCOUNT_REMOVE_ACCOUNT';
                var2 = var5.bind(var6)(var2, var4);
                var4 = var3._experimentUnsubscribe;
                var2 = null;
                if(!(var2 != var4)) { _fun0009_ip = 25; continue _fun0009 }
case 26:
                var4 = var3._experimentUnsubscribe;
                var4 = var4.bind(var3)();
                var3['_experimentUnsubscribe'] = var2;
case 25:
                return var1;
            }
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
                if(var1) { _fun0010_ip = 27; continue _fun0010 }
case 28:
                var1 = true;
                var2['hasRegisterEventListener'] = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.addRegisterEventListener;
                var2 = var2.handleToken;
                var2 = var3.bind(var4)(var2);
                return var1;
case 27:
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
                var3 = this;
                var1 = undefined;
                var4 = undefined;
                var5 = undefined;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 15;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var8 = var6.declarativeNotifSettingsExperiment;
                var7 = var8.getConfig;
                var6 = {};
                var9 = 'registerNotificationCategories';
                var6['location'] = var9;
                var4 = var7.bind(var8)(var6);
                var5 = false;
case 29: // try_start_0
                var6 = var4;
                var6 = var6.enabled;
                if(!var6) { _fun0011_ip = 30; continue _fun0011 }
case 3:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 16;
                var6 = var8[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.registerDeclarativeNotificationCategories;
                var5 = var6.bind(var7)();
case 30: // try_end0
                _fun0011_ip = 31; continue _fun0011;
case 32: // catch_target0
                CatchBlockStart(arg_register=7);
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 17;
                var6 = var9[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.captureException;
                var6 = var6.bind(var7)(var8);
case 31:
                if(var5) { _fun0011_ip = 33; continue _fun0011 }
case 34: // try_start_1
                var4 = var4.clearDeclarative;
                if(!var4) { _fun0011_ip = 35; continue _fun0011 }
case 36:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 17;
                var4 = var6[var4];
                var8 = var5.bind(var1)(var4);
                var7 = var8.addBreadcrumb;
                var4 = {};
                var9 = 'Clearing declarative notification categories';
                var4['message'] = var9;
                var4 = var7.bind(var8)(var4);
                var4 = 16;
                var4 = var6[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.clear;
                var4 = var4.bind(var5)();
case 35: // try_end1
                _fun0011_ip = 37; continue _fun0011;
case 14: // catch_target1
                CatchBlockStart(arg_register=4);
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 17;
                var2 = var6[var2];
                var4 = var4.bind(var1)(var2);
                var2 = var4.captureException;
                var2 = var2.bind(var4)(var5);
case 37:
                var2 = var3.registerLegacyNotificationCategories;
                var2 = var2.bind(var3)();
case 33:
                var2 = var3.trackDisabledAndroidNotifChannels;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'registerLegacyNotificationCategories';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure1_slot8;
                var3 = var2.DCDNotificationCategoryUtils;
                var5 = var3.registerNotificationCategories;
                var2 = var2.DCDNotificationCategoryUtils;
                var4 = var2.registerNotificationCategoriesAndGroups;
                var2 = null;
                if(!(var2 == var4)) { _fun0012_ip = 38; continue _fun0012 }
case 39:
                if(!(var2 != var5)) { _fun0012_ip = 40; continue _fun0012 }
case 19:
                var3 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 11;
                var7 = var10[var6];
                var2 = undefined;
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.JJogjm;
                var7 = var8.bind(var11)(var7);
                var3['calls'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.K3lovD;
                var7 = var8.bind(var11)(var7);
                var3['mediaConnections'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.OIgYlQ;
                var7 = var8.bind(var11)(var7);
                var3['messages'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.YUU0RF;
                var7 = var8.bind(var11)(var7);
                var3['directMessages'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.TdEu5X;
                var7 = var8.bind(var11)(var7);
                var3['social'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.A/4saf;
                var7 = var8.bind(var11)(var7);
                var3['gameDetection'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.qGRagm;
                var7 = var8.bind(var11)(var7);
                var3['stageLive'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.MfGr0a;
                var7 = var8.bind(var11)(var7);
                var3['guildEventLive'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.p5jg9S;
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
                var7 = var7.BcZTKu;
                var7 = var8.bind(var11)(var7);
                var3['other'] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var2)(var6);
                var6 = var6.t;
                var6 = var6.bcv3rp;
                var6 = var7.bind(var8)(var6);
                var3['otherHighPriority'] = var6;
                var2 = var5.bind(var2)(var3);
                _fun0012_ip = 40; continue _fun0012;
case 38:
                var3 = {};
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 11;
                var5 = var9[var6];
                var2 = undefined;
                var5 = var7.bind(var2)(var5);
                var11 = var5.intl;
                var10 = var11.string;
                var8 = _closure1_slot1;
                var5 = 18;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.IUH/Oe;
                var1 = var10.bind(var11)(var1);
                var3['calls'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.VeBD1N;
                var1 = var10.bind(var11)(var1);
                var3['mediaConnections'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1["4qWUAO"];
                var1 = var10.bind(var11)(var1);
                var3['messages'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.NGdNZb;
                var1 = var10.bind(var11)(var1);
                var3['directMessages'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.NxgGZA;
                var1 = var10.bind(var11)(var1);
                var3['friendRequests'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.MOjygY;
                var1 = var10.bind(var11)(var1);
                var3['polls'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.UzRF+8;
                var1 = var10.bind(var11)(var1);
                var3['social'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1["4n388K"];
                var1 = var10.bind(var11)(var1);
                var3['stageLive'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1["40TIqW"];
                var1 = var10.bind(var11)(var1);
                var3['guildEventLive'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.p5jg9S;
                var1 = var10.bind(var11)(var1);
                var3['guildHighlights'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.HibKoy;
                var1 = var10.bind(var11)(var1);
                var3['forumThreadCreated'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.zJlwvV;
                var1 = var10.bind(var11)(var1);
                var3['systemMessages'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.kIrLfg;
                var1 = var10.bind(var11)(var1);
                var3['other'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var5];
                var1 = var8.bind(var2)(var1);
                var1 = var1.T+79Eo;
                var1 = var10.bind(var11)(var1);
                var3['default'] = var1;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var11 = var1.intl;
                var10 = var11.string;
                var1 = var9[var6];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.gHp0C4;
                var1 = var10.bind(var11)(var1);
                var3['reactions'] = var1;
                var1 = {};
                var10 = var9[var6];
                var10 = var7.bind(var2)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var9[var5];
                var10 = var8.bind(var2)(var10);
                var10 = var10.S5cB9e;
                var10 = var11.bind(var12)(var10);
                var1['realtime'] = var10;
                var10 = var9[var6];
                var10 = var7.bind(var2)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var9[var5];
                var10 = var8.bind(var2)(var10);
                var10 = var10.UzRF+8;
                var10 = var11.bind(var12)(var10);
                var1['social'] = var10;
                var10 = var9[var6];
                var10 = var7.bind(var2)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var9[var5];
                var10 = var8.bind(var2)(var10);
                var10 = var10.zRKbpz;
                var10 = var11.bind(var12)(var10);
                var1['server'] = var10;
                var6 = var9[var6];
                var6 = var7.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var2)(var5);
                var5 = var5.q5M7HV;
                var5 = var6.bind(var7)(var5);
                var1['other'] = var5;
                var1 = var4.bind(var2)(var3, var1);
case 40:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'trackDisabledAndroidNotifChannels';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = this;
                var1 = var2.hasTrackedDisabledAndroidNotifChannels;
                if(var1) { _fun0013_ip = 41; continue _fun0013 }
case 42:
                var1 = true;
                var2['hasTrackedDisabledAndroidNotifChannels'] = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 19;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0013_ip = 41; continue _fun0013 }
case 43:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = 20;
                var2 = var2[var8];
                var2 = var3.bind(var4)(var2);
                var3 = null;
                var6 = var3 == var2;
                var2 = undefined;
                if(var6) { _fun0013_ip = 44; continue _fun0013 }
case 45:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var7.bind(var4)(var6);
                var2 = var6.getAndroidNotifChannelStates;
case 44:
                if(!(var3 != var2)) { _fun0013_ip = 41; continue _fun0013 }
case 46:
                var6 = var2.bind(var4)();
                var2 = global;
                var7 = var2.Set;
                var8 = _closure1_slot12;
                var3 = var8.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.string_id;
                    return var1;
                };
                var10 = var3.bind(var8)(var2);
                var3 = var7.prototype;
                var3 = Object.create(var3, {constructor: {value: var7}});
                var11 = var3;
                var2 = new var11[var7](var10, var9);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var2;
                var3 = var6.filter;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.importance;
                        var1 = 0;
                        var1 = var1 === var3;
                        if(!var1) { _fun0014_ip = 47; continue _fun0014 }
case 48:
                        var4 = _closure3_slot0;
                        var3 = var4.has;
                        var2 = var2.channelId;
                        var1 = var3.bind(var4)(var2);
case 47:
                        return var1;
                    }
                };
                var7 = var3.bind(var6)(var2);
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 21;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.track;
                var1 = _closure1_slot13;
                var2 = var1.ANDROID_NOTIFICATION_CHANNELS_SYNCED;
                var1 = {};
                var6 = var7.map;
                var5 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.channelId;
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
                var1['disabled_channels'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 41:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getToken';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.token;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'canSync';
        var5['key'] = var7;
        var6 = function get() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = this;
                var1 = var1.isInitialized;
                if(!var1) { _fun0015_ip = 21; continue _fun0015 }
case 28:
                var3 = _closure1_slot11;
                var2 = var3.isAuthenticated;
                var1 = var2.bind(var3)();
case 21:
                if(!var1) { _fun0015_ip = 49; continue _fun0015 }
case 17:
                var2 = _closure1_slot10;
                var2 = var2.isSwitchingAccount;
                var1 = !var2;
case 49:
                return var1;
            }
        };
        var5['get'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/native/NotificationTokenManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();