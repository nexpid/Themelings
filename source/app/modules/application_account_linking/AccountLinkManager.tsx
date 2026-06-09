// app/modules/application_account_linking/AccountLinkManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
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
    var4 = function claimIncentivizedAccountLinkingReward() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var4;
    var1 = function _claimIncentivizedAccountLinkingReward() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var11 = var2.applicationId;
                    var7 = var2.onSuccess;
                    var5 = var2.onError;
                    var3 = undefined;
                    SaveGenerator(address=36);
case 42:
                    return var3;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 44; continue _fun0005 }
case 45: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 12;
                    var6 = var9[var6];
                    var6 = var8.bind(var3)(var6);
                    var9 = var6.HTTP;
                    var8 = var9.post;
                    var6 = {};
                    var10 = _closure1_slot13;
                    var10 = var10.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT;
                    var6['url'] = var10;
                    var10 = {};
                    var10['application_id'] = var11;
                    var6['body'] = var10;
                    var10 = true;
                    var6['rejectWithError'] = var10;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=118);
case 46:
                    return var6;
case 47:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var9 = var7;
                    var8 = null;
                    if(!(var8 != var9)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var7 = var7.bind(var3)();
case 50: // try_end0
                    _fun0005_ip = 15; continue _fun0005;
case 48:
                    return var6;
case 52: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var7 = var5;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0005_ip = 15; continue _fun0005 }
case 53:
                    var4 = var5.bind(var3)(var4);
case 15:
                    return var3;
case 44:
                    return var2;
case 40:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.IncentivizedAccountLinkingApplicationIds;
    var _closure1_slot11 = var5;
    var5 = 10;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var9 = var5.AppStates;
    var _closure1_slot12 = var9;
    var5 = var5.Endpoints;
    var _closure1_slot13 = var5;
    var5 = 11;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Millis;
    var9 = var5.MINUTE;
    var5 = 20;
    var5 = var5 * var9;
    var _closure1_slot14 = var5;
    var5 = 13;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var2 = function(arg1) {
        var4 = function AccountLinkManager(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var4)();
                if(var1) { _fun0006_ip = 9; continue _fun0006 }
case 54:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0006_ip = 55; continue _fun0006;
case 9:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 55:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var4 = function OAUTH2_TOKEN_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOAuth2TokenCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['OAUTH2_TOKEN_CREATE'] = var4;
                var4 = function USER_AUTHORIZED_APPS_UPDATE() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleAuthorizedAppsUpdate;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['USER_AUTHORIZED_APPS_UPDATE'] = var4;
                var4 = function APP_STATE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAppStateUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['APP_STATE_UPDATE'] = var4;
                var3 = function ACCOUNT_LINK_AUTHORIZATION_COMPLETED(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAccountLinkAuthorizationCompleted;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['ACCOUNT_LINK_AUTHORIZATION_COMPLETED'] = var3;
                var1['actions'] = var2;
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
        var1 = 'evaluatePending';
        var5['key'] = var1;
        var1 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure1_slot10;
                var1 = var2.getPendingAuthorizations;
                var2 = var1.bind(var2)();
                var1 = var2.size;
                var9 = 0;
                if(!(var9 !== var1)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var8 = var1.bind(var3)();
                var1 = _closure1_slot15;
                var7 = undefined;
                var6 = var1.bind(var7)(var2);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var5 = null;
                var4 = 2;
                var3 = 1;
                if(var1) { _fun0007_ip = 56; continue _fun0007 }
case 58:
                var11 = var2.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var7)(var11, var4);
                var12 = var1[var9];
                var13 = var1[var3];
                var1 = var13.startedAt;
                var11 = var8 - var1;
                var1 = _closure1_slot14;
                if(!(!(var11 > var1))) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var11 = _closure1_slot9;
                var1 = var11.getNewestTokenForApplication;
                var1 = var1.bind(var11)(var12);
                var1 = var5 != var1;
                if(!var1) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var14 = _closure1_slot11;
                var11 = var14.has;
                var1 = var11.bind(var14)(var12);
case 61:
                if(!var1) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                var11 = var13.claimIncentivizedAccountLinkingRewardCallbacks;
                var1 = var5 != var11;
case 63:
                if(!var1) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                var11 = _closure1_slot18;
                var1 = {};
                var1['applicationId'] = var12;
                var14 = var13.claimIncentivizedAccountLinkingRewardCallbacks;
                var14 = var14.onSuccess;
                var1['onSuccess'] = var14;
                var13 = var13.claimIncentivizedAccountLinkingRewardCallbacks;
                var13 = var13.onError;
                var1['onError'] = var13;
                var1 = var11.bind(var7)(var1);
                var11 = _closure1_slot10;
                var1 = var11.deletePendingAuthorization;
                var1 = var1.bind(var11)(var12);
                _fun0007_ip = 65; continue _fun0007;
case 59:
                var11 = _closure1_slot10;
                var1 = var11.deletePendingAuthorization;
                var1 = var1.bind(var11)(var12);
case 65:
                var11 = var6.bind(var7)();
                var1 = var11.done;
                var2 = var11;
                if(!var1) { _fun0007_ip = 58; continue _fun0007 }
case 56:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleOAuth2TokenCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var3 = _closure1_slot10;
                var1 = var3.getPendingAuthorizations;
                var4 = var1.bind(var3)();
                var3 = var4.has;
                var1 = arg1;
                var1 = var1.application;
                var1 = var1.id;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0008_ip = 28; continue _fun0008 }
case 2:
                var1 = var2.evaluatePending;
                var1 = var1.bind(var2)();
case 28:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleAuthorizedAppsUpdate';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.evaluatePending;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleAccountLinkAuthorizationCompleted';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var3 = _closure1_slot10;
                var1 = var3.getPendingAuthorizations;
                var4 = var1.bind(var3)();
                var3 = var4.has;
                var1 = arg1;
                var1 = var1.applicationId;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                var1 = var2.evaluatePending;
                var1 = var1.bind(var2)();
case 67:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleAppStateUpdate';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var1 = arg1;
                var3 = var1.state;
                var1 = _closure1_slot12;
                var1 = var1.ACTIVE;
                if(!(var3 === var1)) { _fun0010_ip = 69; continue _fun0010 }
case 34:
                var1 = var2.evaluatePending;
                var1 = var1.bind(var2)();
case 69:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var5 = 'AccountLinkManager';
    var2['displayName'] = var5;
    var5 = var2.prototype;
    var6 = Object.create(var5, {constructor: {value: var2}});
    var14 = var6;
    var5 = new var14[var2](var13);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/application_account_linking/AccountLinkManager.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['claimIncentivizedAccountLinkingReward'] = var4;
    var3['AccountLinkManager'] = var2;
    return var1;
})();