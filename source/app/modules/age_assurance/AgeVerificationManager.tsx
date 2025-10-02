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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var8 = var4.ChannelTypes;
    var _closure1_slot13 = var8;
    var4 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot14 = var4;
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
    var _closure1_slot15 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function AgeVerificationManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                var1 = _closure1_slot16;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = null;
                var1['_previousAgeVerificationStatus'] = var4;
                var4 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = _closure1_slot11;
                        var1 = var2.getCurrentUser;
                        var5 = var1.bind(var2)();
                        var2 = null;
                        var6 = var2 == var5;
                        var1 = undefined;
                        var4 = undefined;
                        if(var6) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var4 = var5.ageVerificationStatus;
case 9:
                        var5 = var2 != var4;
                        var2 = null;
                        if(!var5) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var2 = var4;
case 11:
                        var3['_previousAgeVerificationStatus'] = var2;
                        return var1;
                    }
                };
                var1['handlePostConnectionOpen'] = var4;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var6 = var1.user;
                        var1 = undefined;
                        var2 = undefined;
                        var7 = undefined;
                        var5 = undefined;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var1;
                        var3 = _closure1_slot12;
                        var3 = var3.bind(var1)(var6);
                        var3 = var3.ageVerificationStatus;
                        var6 = null;
                        var9 = var6 != var3;
                        var11 = null;
                        if(!var9) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var11 = var3;
case 13:
                        var2 = var11;
                        var10 = _closure3_slot0;
                        var10 = var10._previousAgeVerificationStatus;
                        var10 = var10 !== var11;
                        if(!var10) { _fun0004_ip = 8; continue _fun0004 }
case 15:
                        var12 = var2;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var11 = 14;
                        var11 = var14[var11];
                        var11 = var13.bind(var1)(var11);
                        var11 = var11.AgeVerificationStatusUkAndAusOnly;
                        var11 = var11.VERIFIED_ADULT;
                        var10 = var12 === var11;
case 8:
                        var9 = var10;
                        if(!var10) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 15;
                        var10 = var12[var10];
                        var12 = var11.bind(var1)(var10);
                        var11 = var12.isEligibleForSettingsDefaultsAggregate;
                        var10 = 'age-verification-manager';
                        var9 = var11.bind(var12)(var10);
case 16:
                        var7 = var9;
case 18: // try_start_0 // try_start_1
                        if(!var7) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var9 = _closure1_slot10;
                        var7 = var9.getChannelId;
                        var7 = var7.bind(var9)();
                        var5 = var7;
                        _closure4_slot0 = var7;
                        var7 = false;
                        _closure4_slot1 = var7;
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 16;
                        var7 = var10[var7];
                        var10 = var9.bind(var1)(var7);
                        var9 = var10.forEach;
                        var7 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var1 = arg1;
                                var3 = var1.channelId;
                                var4 = _closure1_slot8;
                                var2 = var4.getChannel;
                                var4 = var2.bind(var4)(var3);
                                var2 = null;
                                var2 = var2 != var4;
                                if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                                var2 = var4.nsfw;
case 21:
                                if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 16;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.clear;
                                var1 = var1.bind(var2)(var3);
                                var1 = _closure4_slot0;
                                if(!(var3 === var1)) { _fun0005_ip = 23; continue _fun0005 }
case 25:
                                var1 = true;
                                _closure4_slot1 = var1;
case 23:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var7 = var9.bind(var10)(var7);
                        var8 = _closure4_slot1;
                        var7 = var8;
                        if(!var8) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var8 = var5;
                        var7 = var6 != var8;
case 26:
                        if(!var7) { _fun0004_ip = 19; continue _fun0004 }
case 28:
                        var8 = var5;
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 12;
                        var5 = var9[var5];
                        var9 = var7.bind(var1)(var5);
                        var7 = var9.fetchMessages;
                        var5 = {};
                        var5['channelId'] = var8;
                        var10 = _closure1_slot14;
                        var5['limit'] = var10;
                        var5 = var7.bind(var9)(var5);
                        var7 = _closure1_slot8;
                        var5 = var7.getChannel;
                        var7 = var5.bind(var7)(var8);
                        var5 = var6 == var7;
                        var8 = undefined;
                        if(var5) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var8 = var7.type;
case 29:
                        var5 = _closure1_slot13;
                        var5 = var5.GUILD_FORUM;
                        var5 = var8 !== var5;
                        if(!var5) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var6 = var6 == var7;
                        var8 = undefined;
                        if(var6) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var8 = var7.type;
case 33:
                        var6 = _closure1_slot13;
                        var6 = var6.GUILD_MEDIA;
                        var5 = var8 !== var6;
case 31:
                        if(var5) { _fun0004_ip = 19; continue _fun0004 }
case 35:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 13;
                        var5 = var8[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.preloadForumThreads;
                        var5 = var5.bind(var6)(var7);
case 19: // try_end0
                        _fun0004_ip = 36; continue _fun0004;
case 37: // catch_target0
                        CatchBlockStart(arg_register=6);
                        var6 = _closure1_slot15;
                        var5 = var6.warn;
                        var4 = 'Error clearing cache and refetching messages';
                        var4 = var5.bind(var6)(var4, var7);
case 36: // try_end1
                        var5 = _closure3_slot0;
                        var4 = var2;
                        var5['_previousAgeVerificationStatus'] = var4;
                        return var1;
case 38: // catch_target1
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
                var3 = _closure1_slot17;
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
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/AgeVerificationManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();