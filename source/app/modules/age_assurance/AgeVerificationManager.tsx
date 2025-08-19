// app/modules/age_assurance/AgeVerificationManager.tsx
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function handleMessageCreate(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var1 = var1.message;
        var3 = _closure1_slot9;
        var2 = var3.getMessage;
        var1 = var1.id;
        var1 = var2.bind(var3)(var4, var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot16 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.transformUser;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyToastType;
    var4 = 11;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'AgeVerificationManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot14 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function AgeVerificationManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = null;
                var1['_previousAgeVerificationStatus'] = var4;
                var4 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = _closure1_slot11;
                        var1 = var2.getCurrentUser;
                        var5 = var1.bind(var2)();
                        var2 = null;
                        var6 = var2 == var5;
                        var1 = undefined;
                        var4 = undefined;
                        if(var6) { _fun0003_ip = 42; continue _fun0003 }
 36:
                        var4 = var5.ageVerificationStatus;
 42:
                        var5 = var2 != var4;
                        var2 = null;
                        if(!var5) { _fun0003_ip = 54; continue _fun0003 }
 51:
                        var2 = var4;
 54:
                        var3['_previousAgeVerificationStatus'] = var2;
                        return var1;
                    }
                };
                var1['handlePostConnectionOpen'] = var4;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var6 = var1.user;
                        var1 = undefined;
                        var2 = undefined;
                        var7 = undefined;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var1;
                        var4 = _closure1_slot12;
                        var4 = var4.bind(var1)(var6);
                        var8 = var4.ageVerificationStatus;
                        var6 = null;
                        var9 = var6 != var8;
                        var4 = null;
                        if(!var9) { _fun0004_ip = 56; continue _fun0004 }
 53:
                        var4 = var8;
 56:
                        var2 = var4;
 59: // try_start_0 // try_start_1
                        var4 = _closure3_slot0;
                        var8 = var4._previousAgeVerificationStatus;
                        var4 = var2;
                        if(!(var8 !== var4)) { _fun0004_ip = 296; continue _fun0004 }
 82:
                        var8 = var2;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 12;
                        var4 = var10[var4];
                        var4 = var9.bind(var1)(var4);
                        var4 = var4.AgeVerificationStatusUkAndAusOnly;
                        var4 = var4.VERIFIED_ADULT;
                        if(!(var8 === var4)) { _fun0004_ip = 296; continue _fun0004 }
 124:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 13;
                        var4 = var9[var4];
                        var9 = var8.bind(var1)(var4);
                        var8 = var9.isEligibleForSettingsDefaultsAggregate;
                        var4 = 'age-verification-manager';
                        var4 = var8.bind(var9)(var4);
                        if(!var4) { _fun0004_ip = 296; continue _fun0004 }
 167:
                        var8 = _closure1_slot10;
                        var4 = var8.getChannelId;
                        var4 = var4.bind(var8)();
                        var7 = var4;
                        _closure4_slot0 = var4;
                        var4 = false;
                        _closure4_slot1 = var4;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 14;
                        var4 = var9[var4];
                        var9 = var8.bind(var1)(var4);
                        var8 = var9.forEach;
                        var4 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var1 = arg1;
                                var3 = var1.channelId;
                                var4 = _closure1_slot8;
                                var2 = var4.getChannel;
                                var4 = var2.bind(var4)(var3);
                                var2 = null;
                                var2 = var2 != var4;
                                if(!var2) { _fun0005_ip = 40; continue _fun0005 }
 34:
                                var2 = var4.nsfw;
 40:
                                if(!var2) { _fun0005_ip = 93; continue _fun0005 }
 43:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.clear;
                                var1 = var1.bind(var2)(var3);
                                var1 = _closure4_slot0;
                                if(!(var3 === var1)) { _fun0005_ip = 93; continue _fun0005 }
 87:
                                var1 = true;
                                _closure4_slot1 = var1;
 93:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var4 = var8.bind(var9)(var4);
                        var5 = _closure4_slot1;
                        var4 = var5;
                        if(!var5) { _fun0004_ip = 248; continue _fun0004 }
 241:
                        var5 = var7;
                        var4 = var6 != var5;
 248:
                        if(!var4) { _fun0004_ip = 296; continue _fun0004 }
 251:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 15;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.fetchMessages;
                        var4 = {};
                        var4['channelId'] = var7;
                        var7 = _closure1_slot13;
                        var4['limit'] = var7;
                        var4 = var5.bind(var6)(var4);
 296: // try_end0
                        _fun0004_ip = 321; continue _fun0004;
 298: // catch_target0
                        CatchBlockStart(arg_register=5);
                        var5 = _closure1_slot14;
                        var4 = var5.warn;
                        var3 = 'Error clearing cache and refetching messages';
                        var3 = var4.bind(var5)(var3, var6);
 321: // try_end1
                        var4 = _closure3_slot0;
                        var3 = var2;
                        var4['_previousAgeVerificationStatus'] = var3;
                        return var1;
 339: // catch_target1
                        CatchBlockStart(arg_register=0);
                        var3 = _closure3_slot0;
                        var3['_previousAgeVerificationStatus'] = var2;
                        throw var1;
                    }
                };
                var1['handleCurrentUserUpdate'] = var2;
                var2 = {};
                var4 = var1.handlePostConnectionOpen;
                var2['POST_CONNECTION_OPEN'] = var4;
                var4 = var1.handleCurrentUserUpdate;
                var2['CURRENT_USER_UPDATE'] = var4;
                var3 = _closure1_slot16;
                var2['MESSAGE_CREATE'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/AgeVerificationManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();