// app/modules/multi_account/MultiAccountStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
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
    var1 = function removeAccountById(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot12;
        var3 = var5.filter;
        var2 = function(arg1) {
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var2 = var3.bind(var5)(var2);
        _closure1_slot12 = var2;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.removeToken;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function setTokenStatus(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot12;
            var1 = var4.slice;
            var1 = var1.bind(var4)();
            var4 = var1.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 62; continue _fun0002 }
 49:
            var3 = arg2;
            var4['tokenStatus'] = var3;
            _closure1_slot12 = var1;
 62:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var11 = 0;
    var2 = var7[var11];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 1;
    var2 = var7[var10];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var9 = 2;
    var2 = var7[var9];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.MAX_ACCOUNTS;
    var _closure1_slot8 = var2;
    var2 = {};
    var2['INVALID'] = var11;
    var4 = 'INVALID';
    var2[var11] = var4;
    var2['VALIDATING'] = var10;
    var4 = 'VALIDATING';
    var2[var10] = var4;
    var2['VALID'] = var9;
    var4 = 'VALID';
    var2[var9] = var4;
    var _closure1_slot11 = var2;
    var4 = new Array(0);
    var _closure1_slot12 = var4;
    var4 = false;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function MultiAccountStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0004_ip = 40; continue _fun0004 }
 9:
                var3 = var1.users;
                if(!(var2 == var3)) { _fun0004_ip = 23; continue _fun0004 }
 19:
                var3 = new Array(0);
 23:
                _closure1_slot12 = var3;
                var1 = var1.canUseMultiAccountMobile;
                var _closure1_slot10 = var1;
 40:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCanUseMultiAccountMobile';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot12;
            var1['users'] = var3;
            var2 = _closure1_slot10;
            var1['canUseMultiAccountMobile'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getUsers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getValidUsers';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot12;
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.tokenStatus;
                var1 = _closure1_slot11;
                var1 = var1.INVALID;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getHasLoggedInAccounts';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getIsValidatingUsers';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot12;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.tokenStatus;
                var1 = _closure1_slot11;
                var1 = var1.VALIDATING;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'canUseMultiAccountNotifications';
        var5['key'] = var7;
        var7 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var1 = var2.getCanUseMultiAccountMobile;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0005_ip = 86; continue _fun0005 }
 16:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var5 = var2.MultiAccountMobileNotificationsExperiment;
                var4 = var5.getCurrentConfig;
                var3 = {};
                var2 = '09e468_1';
                var3['location'] = var2;
                var2 = {};
                var6 = false;
                var2['autoTrackExposure'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1 = var2.isMultiAccountMobileNotificationsEnabled;
 86:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isSwitchingAccount';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'MultiAccountStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = new Array(1);
    var10 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var4 = null;
            if(!(var4 == var3)) { _fun0006_ip = 29; continue _fun0006 }
 9:
            var1 = {};
            var2 = new Array(0);
            var1['users'] = var2;
            var2 = false;
            var1['canUseMultiAccountMobile'] = var2;
            _fun0006_ip = 60; continue _fun0006;
 29:
            var2 = {};
            var3 = var3.users;
            if(!(var4 == var3)) { _fun0006_ip = 45; continue _fun0006 }
 41:
            var3 = new Array(0);
 45:
            var2['users'] = var3;
            var3 = false;
            var2['canUseMultiAccountMobile'] = var3;
            var1 = var2;
 60:
            return var1;
        }
    };
    var4[0] = var10;
    var9['migrations'] = var4;
    var4 = 10;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleConnectionOpen(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var4 = var2.user;
            var _closure2_slot0 = var4;
            var3 = var4.id;
            var _closure1_slot9 = var3;
            var3 = false;
            _closure1_slot13 = var3;
            var5 = _closure1_slot12;
            var3 = var5.slice;
            var3 = var3.bind(var5)();
            var6 = var3.findIndex;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var6.bind(var3)(var5);
            var6 = -1;
            if(!(!(var5 > var6))) { _fun0007_ip = 153; continue _fun0007 }
 73:
            var7 = var3.push;
            var6 = {};
            var8 = var4.id;
            var6['id'] = var8;
            var8 = var4.avatar;
            var6['avatar'] = var8;
            var8 = var4.username;
            var6['username'] = var8;
            var8 = var4.discriminator;
            var6['discriminator'] = var8;
            var8 = _closure1_slot11;
            var8 = var8.VALID;
            var6['tokenStatus'] = var8;
            var8 = null;
            var6['pushSyncToken'] = var8;
            var6 = var7.bind(var3)(var6);
            _closure1_slot12 = var3;
            _fun0007_ip = 240; continue _fun0007;
 153:
            var6 = _closure1_slot12;
            var7 = var6[var5];
            var6 = var4.avatar;
            var7['avatar'] = var6;
            var6 = _closure1_slot12;
            var7 = var6[var5];
            var6 = var4.username;
            var7['username'] = var6;
            var6 = _closure1_slot12;
            var6 = var6[var5];
            var4 = var4.discriminator;
            var6['discriminator'] = var4;
            var4 = _closure1_slot12;
            var5 = var4[var5];
            var4 = _closure1_slot11;
            var4 = var4.VALID;
            var5['tokenStatus'] = var4;
            _closure1_slot12 = var3;
 240:
            var3 = _closure1_slot12;
            var4 = var3.length;
            var3 = _closure1_slot8;
            if(!(var4 > var3)) { _fun0007_ip = 293; continue _fun0007 }
 257:
            var4 = _closure1_slot12;
            var3 = var4.splice;
            var2 = _closure1_slot8;
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.id;
                var2 = _closure1_slot15;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 293:
            var1 = undefined;
            return var1;
        }
    };
    var4['CONNECTION_OPEN'] = var10;
    var10 = function handleLogout(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.isSwitchingAccount;
            var3 = !var2;
            var3 = !var3;
            _closure1_slot13 = var3;
            var1 = var1.isSwitchingAccount;
            if(var1) { _fun0008_ip = 58; continue _fun0008 }
 31:
            var4 = _closure1_slot12;
            var3 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure1_slot9;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            _closure1_slot12 = var1;
 58:
            var1 = null;
            _closure1_slot9 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['LOGOUT'] = var10;
    var10 = function MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST(arg1) {
        var4 = _closure1_slot16;
        var2 = arg1;
        var3 = var2.userId;
        var1 = _closure1_slot11;
        var2 = var1.VALIDATING;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4['MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST'] = var10;
    var10 = function MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS(arg1) {
        var4 = _closure1_slot16;
        var2 = arg1;
        var3 = var2.userId;
        var1 = _closure1_slot11;
        var2 = var1.VALID;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4['MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS'] = var10;
    var10 = function MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE(arg1) {
        var4 = _closure1_slot16;
        var2 = arg1;
        var3 = var2.userId;
        var1 = _closure1_slot11;
        var2 = var1.INVALID;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4['MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE'] = var10;
    var10 = function MULTI_ACCOUNT_REMOVE_ACCOUNT(arg1) {
        var3 = _closure1_slot15;
        var1 = arg1;
        var2 = var1.userId;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['MULTI_ACCOUNT_REMOVE_ACCOUNT'] = var10;
    var10 = function handleMoveAccount(arg1) {
        var1 = arg1;
        var7 = var1.from;
        var6 = var1.to;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var2);
        var4 = var5.moveItemFromTo;
        var2 = _closure1_slot12;
        var2 = var4.bind(var5)(var2, var7, var6);
        _closure1_slot12 = var2;
        return var1;
    };
    var4['MULTI_ACCOUNT_MOVE_ACCOUNT'] = var10;
    var10 = function handleCurrentUserUpdate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.user;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot12;
            var1 = var5.slice;
            var1 = var1.bind(var5)();
            var5 = var1.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var5.bind(var1)(var4);
            var5 = null;
            if(!(var5 != var4)) { _fun0009_ip = 93; continue _fun0009 }
 54:
            var5 = var3.avatar;
            var4['avatar'] = var5;
            var5 = var3.username;
            var4['username'] = var5;
            var3 = var3.discriminator;
            var4['discriminator'] = var3;
            _closure1_slot12 = var1;
 93:
            var1 = undefined;
            return var1;
        }
    };
    var4['CURRENT_USER_UPDATE'] = var10;
    var10 = function handleMultiAccountMobileExperimentUpdate(arg1) {
        var1 = arg1;
        var2 = var1.multiAccountMobileExperimentEnabled;
        _closure1_slot10 = var2;
        var1 = undefined;
        return var1;
    };
    var4['MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE'] = var10;
    var10 = function handleUpdatePushSyncToken(arg1) {
        var2 = arg1;
        var3 = var2.userId;
        var _closure2_slot0 = var3;
        var2 = var2.pushSyncToken;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot12;
        var3 = var4.map;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = arg1;
                var5 = var4.id;
                var2 = _closure2_slot0;
                var1 = var4;
                if(!(var5 === var2)) { _fun0010_ip = 50; continue _fun0010 }
 22:
                var2 = {};
                var7 = var2;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                var4 = _closure2_slot1;
                var3 = 'pushSyncToken';
                var2[var3] = var4;
                var1 = var2;
 50:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var4['MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN'] = var10;
    var5 = function handleInvalidatePushSyncTokens(arg1) {
        var2 = arg1;
        var2 = var2.invalidPushSyncTokens;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot12;
        var3 = var4.map;
        var1 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = arg1;
                var2 = var3.pushSyncToken;
                var4 = null;
                var1 = var3;
                if(!(var4 != var2)) { _fun0011_ip = 71; continue _fun0011 }
 18:
                var6 = _closure2_slot0;
                var5 = var6.includes;
                var2 = var3.pushSyncToken;
                var2 = var5.bind(var6)(var2);
                var1 = var3;
                if(!var2) { _fun0011_ip = 71; continue _fun0011 }
 47:
                var2 = {};
                var8 = var2;
                var7 = var3;
                var3 = copyDataProperties(var8, var7);
                var3 = 'pushSyncToken';
                var2[var3] = var4;
                var1 = var2;
 71:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var4['MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/multi_account/MultiAccountStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MultiAccountTokenStatus'] = var2;
    return var1;
})();