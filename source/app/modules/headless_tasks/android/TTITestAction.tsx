// app/modules/headless_tasks/android/TTITestAction.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = require;
    var8 = metroImportDefault;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var4;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot15;
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
            var7 = _closure1_slot15;
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
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
    var1 = function sendReply(arg1, arg2, arg3) {
        var1 = _closure1_slot4;
        var3 = var1.TTIManager;
        var2 = var3.logToDevice;
        var1 = global;
        var5 = var1.JSON;
        var4 = var5.stringify;
        var1 = {};
        var6 = 'response';
        var1['type'] = var6;
        var6 = arg1;
        var1['status'] = var6;
        var6 = arg2;
        var1['message'] = var6;
        var7 = arg3;
        var8 = var1;
        var6 = copyDataProperties(var8, var7);
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function sendStatus(arg1) {
        var6 = arg1;
        var3 = _closure1_slot12;
        var2 = var3.log;
        var2 = var2.bind(var3)(var6);
        var1 = _closure1_slot4;
        var3 = var1.TTIManager;
        var2 = var3.logToDevice;
        var1 = global;
        var5 = var1.JSON;
        var4 = var5.stringify;
        var1 = {};
        var7 = 'status';
        var1['type'] = var7;
        var1['message'] = var6;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function getErrorDetails(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var7 = null;
            if(!(var7 != var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = 'object';
            var2 = typeof var1;
            if(!(var3 === var2)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var5 = global;
            var2 = var5.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var14 = var3;
            var2 = new var14[var2](var13);
            var4 = var2 instanceof Object ? var2 : var3;
            var6 = undefined;
            var2 = var1;
            if(!(var7 != var2)) { _fun0004_ip = 15; continue _fun0004 }
case 39:
            var9 = _closure1_slot14;
            var10 = var5.Object;
            var8 = var10.getOwnPropertyNames;
            var8 = var8.bind(var10)(var2);
            var11 = var9.bind(var6)(var8);
            var9 = var11.bind(var6)();
            var8 = var9.done;
            var10 = var2;
            if(var8) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var12 = var9.value;
            var8 = var4.add;
            var8 = var8.bind(var4)(var12);
            var12 = var11.bind(var6)();
            var8 = var12.done;
            var9 = var12;
            if(!var8) { _fun0004_ip = 41; continue _fun0004 }
case 40:
            var9 = var5.Object;
            var8 = var9.getPrototypeOf;
            var2 = var8.bind(var9)(var10);
            if(var7 != var2) { _fun0004_ip = 39; continue _fun0004 }
case 15:
            var2 = {};
            var3 = _closure1_slot14;
            var5 = var3.bind(var6)(var4);
            var4 = var5.bind(var6)();
            var3 = var4.done;
            if(var3) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var7 = var4.value;
            var3 = var1[var7];
            var2[var7] = var3;
            var7 = var5.bind(var6)();
            var3 = var7.done;
            var4 = var7;
            if(!var3) { _fun0004_ip = 43; continue _fun0004 }
case 42:
            return var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var6 = function setupTTITest() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var6;
    var1 = function _setupTTITest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var20 = var4;
                    var _closure4_slot0 = var4;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0005_ip = 33; continue _fun0005 }
case 46:
                    var2 = false;
case 33:
                    var5 = var2;
                    var _closure4_slot1 = var2;
                    var14 = undefined;
                    var _closure4_slot2 = var4;
                    var16 = undefined;
                    var13 = undefined;
                    var8 = undefined;
                    var11 = undefined;
                    SaveGenerator(address=58);
case 28:
                    return var4;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 48; continue _fun0005 }
case 30:
                    var6 = var20;
                    var6 = var6.user;
                    var22 = null;
                    if(!(var22 != var6)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var6 = var20;
                    var7 = var6.user;
                    var7 = var7.email;
                    var14 = var7;
                    _closure4_slot2 = var7;
                    var7 = var6.user;
                    var16 = var7.password;
                    var6 = var6.user;
                    var13 = var6.expectedId;
case 51: // try_start_0
                    var9 = _closure1_slot8;
                    var7 = var9.getId;
                    var7 = var7.bind(var9)();
                    var7 = var22 != var7;
                    var6 = var7;
                    if(!var7) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var9 = _closure1_slot8;
                    var7 = var9.getId;
                    var9 = var7.bind(var9)();
                    var7 = var13;
                    var6 = var9 !== var7;
case 52:
                    if(!var6) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                    var7 = _closure1_slot17;
                    var6 = 'Logging out old user';
                    var6 = var7.bind(var4)(var6);
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 15;
                    var6 = var9[var6];
                    var9 = var7.bind(var4)(var6);
                    var7 = var9.logout;
                    var6 = 'TTI_test';
                    var6 = var7.bind(var9)(var6);
                    SaveGenerator(address=236);
case 21:
                    return var6;
case 56:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 57; continue _fun0005 }
case 54:
                    var9 = _closure1_slot8;
                    var7 = var9.getId;
                    var9 = var7.bind(var9)();
                    var7 = var13;
                    if(!(var9 !== var7)) { _fun0005_ip = 49; continue _fun0005 }
case 58:
                    var9 = _closure1_slot17;
                    var7 = 'Logging in new user';
                    var7 = var9.bind(var4)(var7);
                    var10 = global;
                    var15 = var10.Promise;
                    var7 = var15.prototype;
                    var9 = Object.create(var7, {constructor: {value: var15}});
                    var31 = function(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var1 = arg2;
                            var _closure5_slot1 = var1;
                            var4 = function subscribeOnce(arg1, arg2) {
                                var5 = arg1;
                                var _closure6_slot0 = var5;
                                var1 = arg2;
                                var _closure6_slot1 = var1;
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 11;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.subscribe;
                                var2 = function handler() {
                                    var3 = _closure6_slot1;
                                    var5 = _closure6_slot0;
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var5);
                                    var4 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 11;
                                    var3 = var6[var3];
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.unsubscribe;
                                    var2 = _closure6_slot2;
                                    var2 = var3.bind(var4)(var5, var2);
                                    return var1;
                                };
                                var _closure6_slot2 = var2;
                                var2 = var3.bind(var4)(var5, var2);
                                return var1;
                            };
                            var6 = ['LOGIN_MFA_STEP', 'LOGIN_SUSPENDED_USER', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED', 'LOGIN_FAILURE'];
                            var1 = var6.length;
                            var5 = 0;
                            var3 = var5 < var1;
                            var1 = undefined;
                            if(!var3) { _fun0006_ip = 59; continue _fun0006 }
case 5:
                            var7 = var6[var5];
                            var3 = function(arg1) {
                                var3 = _closure5_slot1;
                                var1 = global;
                                var4 = var1.Error;
                                var12 = _closure4_slot2;
                                var1 = var1.HermesInternal;
                                var7 = var1.concat;
                                var13 = 'Unable to login ';
                                var11 = ". Login failed with event '";
                                var10 = arg1;
                                var9 = "'";
                                var12 = var13[var7](var12, var11, var10, var9, var8);
                                var2 = var4.prototype;
                                var2 = Object.create(var2, {constructor: {value: var4}});
                                var13 = var2;
                                var1 = new var13[var4](var12, var11);
                                var2 = var1 instanceof Object ? var1 : var2;
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var3 = var4.bind(var1)(var7, var3);
                            var5 = var5 + 1;
                            var3 = var6.length;
                            if(var5 < var3) { _fun0006_ip = 5; continue _fun0006 }
case 59:
                            var3 = 'LOGIN_SUCCESS';
                            var2 = function() {
                                var2 = _closure5_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            };
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var32 = var9;
                    var7 = new var32[var15](var31, var30);
                    var8 = var7 instanceof Object ? var7 : var9;
                    var9 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var7 = 15;
                    var7 = var15[var7];
                    var15 = var9.bind(var4)(var7);
                    var9 = var15.login;
                    var7 = {};
                    var17 = var14;
                    var7['login'] = var17;
                    var7['password'] = var16;
                    var7 = var9.bind(var15)(var7);
                    SaveGenerator(address=369);
case 60:
                    return var7;
case 61:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                    SaveGenerator(address=382);
case 64:
                    return var8;
case 65:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                    var15 = _closure1_slot17;
                    var9 = 'Waiting for socket connection';
                    var9 = var15.bind(var4)(var9);
                    var16 = var10.Promise;
                    var9 = var16.prototype;
                    var15 = Object.create(var9, {constructor: {value: var16}});
                    var31 = function(arg1) {
                        var3 = _closure1_slot7;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var32 = var15;
                    var9 = new var32[var16](var31, var30);
                    var9 = var9 instanceof Object ? var9 : var15;
                    SaveGenerator(address=443);
case 68:
                    return var9;
case 69:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=14);
                    if(var15) { _fun0005_ip = 70; continue _fun0005 }
case 71:
                    var15 = _closure1_slot8;
                    var12 = var15.getId;
                    var15 = var12.bind(var15)();
                    var11 = var15;
                    var12 = var13;
                    if(!(var15 === var12)) { _fun0005_ip = 72; continue _fun0005 }
case 49: // try_end0
                    var15 = _closure1_slot17;
                    var12 = 'Waiting for socket connection';
                    var12 = var15.bind(var4)(var12);
                    var18 = global;
                    var16 = var18.Promise;
                    var12 = var16.prototype;
                    var15 = Object.create(var12, {constructor: {value: var16}});
                    var31 = function(arg1) {
                        var3 = _closure1_slot7;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var32 = var15;
                    var12 = new var32[var16](var31, var30);
                    var12 = var12 instanceof Object ? var12 : var15;
                    SaveGenerator(address=536);
case 73:
                    return var12;
case 74:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=14);
                    if(var15) { _fun0005_ip = 75; continue _fun0005 }
case 76:
                    var17 = var18.Promise;
                    var15 = var17.prototype;
                    var16 = Object.create(var15, {constructor: {value: var17}});
                    var31 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = 1000;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var32 = var16;
                    var15 = new var32[var17](var31, var30);
                    var15 = var15 instanceof Object ? var15 : var16;
                    SaveGenerator(address=582);
case 77:
                    return var15;
case 78:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=15);
                    if(var16) { _fun0005_ip = 79; continue _fun0005 }
case 80:
                    var16 = var20;
                    var16 = var16.invite;
                    var16 = var22 != var16;
                    if(!var16) { _fun0005_ip = 81; continue _fun0005 }
case 82:
                    var24 = _closure1_slot10;
                    var21 = var24.getGuild;
                    var17 = var20;
                    var17 = var17.invite;
                    var17 = var17.expectedGuildId;
                    var17 = var21.bind(var24)(var17);
                    var16 = var22 == var17;
case 81:
                    if(!var16) { _fun0005_ip = 83; continue _fun0005 }
case 84:
                    var16 = var5;
                    if(var16) { _fun0005_ip = 85; continue _fun0005 }
case 86:
                    var17 = _closure1_slot17;
                    var16 = 'Inviting to target guild';
                    var16 = var17.bind(var4)(var16);
case 85:
                    var17 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var16 = 16;
                    var16 = var21[var16];
                    var21 = var17.bind(var4)(var16);
                    var17 = var21.acceptInvite;
                    var16 = {};
                    var24 = var20;
                    var24 = var24.invite;
                    var24 = var24.code;
                    var16['inviteKey'] = var24;
                    var24 = {};
                    var25 = 'tti_tests';
                    var24['location'] = var25;
                    var16['context'] = var24;
                    var24 = true;
                    var16['skipOnboarding'] = var24;
                    var16 = var17.bind(var21)(var16);
                    SaveGenerator(address=746);
case 87:
                    return var16;
case 88:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=16);
                    if(var17) { _fun0005_ip = 89; continue _fun0005 }
case 90:
                    var17 = var5;
                    if(var17) { _fun0005_ip = 91; continue _fun0005 }
case 92:
                    var21 = _closure1_slot17;
                    var17 = 'Invite API call finished';
                    var17 = var21.bind(var4)(var17);
case 91:
                    var24 = var18.Promise;
                    var17 = var24.prototype;
                    var21 = Object.create(var17, {constructor: {value: var24}});
                    var31 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = global;
                        var5 = var1.setTimeout;
                        var1 = undefined;
                        var4 = arg2;
                        var3 = 15000;
                        var3 = var5.bind(var1)(var4, var3);
                        var _closure5_slot1 = var3;
                        var4 = _closure1_slot10;
                        var3 = var4.addConditionalChangeListener;
                        var2 = function() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var5 = _closure1_slot10;
                                var4 = var5.getGuild;
                                var3 = _closure4_slot0;
                                var3 = var3.invite;
                                var3 = var3.expectedGuildId;
                                var4 = var4.bind(var5)(var3);
                                var3 = null;
                                if(!(var3 == var4)) { _fun0007_ip = 2; continue _fun0007 }
case 93:
                                var3 = undefined;
                                return var3;
case 2:
                                var2 = _closure4_slot1;
                                if(var2) { _fun0007_ip = 35; continue _fun0007 }
case 94:
                                var3 = _closure1_slot17;
                                var2 = undefined;
                                var1 = 'Invited guild available in the store';
                                var1 = var3.bind(var2)(var1);
case 35:
                                var1 = global;
                                var4 = var1.clearTimeout;
                                var3 = _closure5_slot1;
                                var2 = undefined;
                                var3 = var4.bind(var2)(var3);
                                var1 = _closure5_slot0;
                                var1 = var1.bind(var2)();
                                var1 = false;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var32 = var21;
                    var17 = new var32[var24](var31, var30);
                    var17 = var17 instanceof Object ? var17 : var21;
                    SaveGenerator(address=813);
case 95:
                    return var17;
case 96:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=20);
                    if(var21) { _fun0005_ip = 97; continue _fun0005 }
case 83:
                    var21 = var20;
                    var21 = var21.channelId;
                    if(!(var22 != var21)) { _fun0005_ip = 98; continue _fun0005 }
case 99:
                    var25 = _closure1_slot9;
                    var24 = var25.getChannel;
                    var21 = var20;
                    var21 = var21.channelId;
                    var21 = var24.bind(var25)(var21);
                    if(!(var22 != var21)) { _fun0005_ip = 100; continue _fun0005 }
case 101:
                    var21 = var5;
                    if(var21) { _fun0005_ip = 102; continue _fun0005 }
case 103:
                    var22 = _closure1_slot17;
                    var21 = 'Switching to desired channel';
                    var21 = var22.bind(var4)(var21);
case 102:
                    var22 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var21 = 17;
                    var21 = var24[var21];
                    var24 = var22.bind(var4)(var21);
                    var22 = var24.transitionToChannel;
                    var21 = var20;
                    var21 = var21.channelId;
                    var21 = var22.bind(var24)(var21);
                    var24 = var18.Promise;
                    var21 = var24.prototype;
                    var22 = Object.create(var21, {constructor: {value: var24}});
                    var31 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = 1000;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var32 = var22;
                    var21 = new var32[var24](var31, var30);
                    var21 = var21 instanceof Object ? var21 : var22;
                    SaveGenerator(address=963);
case 104:
                    return var21;
case 105:
                    ResumeGenerator(result_out_reg=20, return_bool_out_reg=21);
                    if(var22) { _fun0005_ip = 106; continue _fun0005 }
case 98:
                    var22 = var5;
                    if(var22) { _fun0005_ip = 107; continue _fun0005 }
case 108:
                    var24 = _closure1_slot17;
                    var22 = 'Writing caches';
                    var22 = var24.bind(var4)(var22);
case 107:
                    var24 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var22 = 18;
                    var22 = var25[var22];
                    var24 = var24.bind(var4)(var22);
                    var22 = var24.writeCaches;
                    var22 = var22.bind(var24)();
                    SaveGenerator(address=1027);
case 109:
                    return var22;
case 110:
                    ResumeGenerator(result_out_reg=21, return_bool_out_reg=23);
                    if(var24) { _fun0005_ip = 111; continue _fun0005 }
case 112:
                    var25 = var18.Promise;
                    var24 = var25.prototype;
                    var24 = Object.create(var24, {constructor: {value: var25}});
                    var31 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = 1000;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var32 = var24;
                    var23 = new var32[var25](var31, var30);
                    var23 = var23 instanceof Object ? var23 : var24;
                    SaveGenerator(address=1070);
case 113:
                    return var23;
case 114:
                    ResumeGenerator(result_out_reg=22, return_bool_out_reg=23);
                    if(var24) { _fun0005_ip = 115; continue _fun0005 }
case 116:
                    var24 = var5;
                    if(var24) { _fun0005_ip = 117; continue _fun0005 }
case 118:
                    var25 = _closure1_slot17;
                    var24 = 'Sending reply';
                    var24 = var25.bind(var4)(var24);
                    var26 = _closure1_slot16;
                    var25 = 'success';
                    var24 = 'Setup Complete';
                    var24 = var26.bind(var4)(var25, var24);
case 117:
                    return var4;
case 115:
                    return var23;
case 111:
                    return var22;
case 106:
                    return var21;
case 100:
                    var21 = var18.Error;
                    var23 = var20.channelId;
                    var18 = var18.HermesInternal;
                    var22 = var18.concat;
                    var20 = 'Unable to switch to channel ';
                    var18 = ' because it does not exist on the client';
                    var31 = var22.bind(var20)(var23, var18);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {constructor: {value: var21}});
                    var32 = var20;
                    var18 = new var32[var21](var31, var30);
                    var18 = var18 instanceof Object ? var18 : var20;
                    var20 = var5;
                    if(var20) { _fun0005_ip = 119; continue _fun0005 }
case 120:
                    var21 = _closure1_slot16;
                    var20 = var18.message;
                    var19 = 'error';
                    var19 = var21.bind(var4)(var19, var20);
                    return var4;
case 119:
                    throw var18;
case 97:
                    return var17;
case 89:
                    return var16;
case 79:
                    return var15;
case 75:
                    return var12;
case 72: // try_start_1
                    var12 = var10.Error;
                    var31 = var14;
                    var29 = var13;
                    var27 = var11;
                    var10 = var10.HermesInternal;
                    var14 = var10.concat;
                    var32 = 'Unable to login ';
                    var30 = ', expected id ';
                    var28 = ' after login but was ';
                    var31 = var32[var14](var31, var30, var29, var28, var27, var26);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var32 = var11;
                    var10 = new var32[var12](var31, var30);
                    var10 = var10 instanceof Object ? var10 : var11;
                    throw var10;
case 70: // try_end1
                    return var9;
case 66:
                    return var8;
case 62:
                    return var7;
case 57:
                    return var6;
case 121: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    if(var5) { _fun0005_ip = 122; continue _fun0005 }
case 123:
                    var7 = _closure1_slot16;
                    var5 = var3;
                    var6 = var5.message;
                    var5 = 'error';
                    var5 = var7.bind(var4)(var5, var6);
                    return var4;
case 122:
                    throw var3;
case 48:
                    return var2;
case 44:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function apiLogin() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _apiLogin() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var17 = arg1;
                    var2 = arg3;
                    var16 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 124; continue _fun0008 }
case 125:
                    var _closure4_slot0 = var17;
                    var3 = arg2;
                    var _closure4_slot1 = var3;
                    var4 = _closure1_slot8;
                    var3 = var4.getId;
                    var3 = var3.bind(var4)();
                    if(!(var3 === var16)) { _fun0008_ip = 126; continue _fun0008 }
case 94:
                    var4 = null;
                    if(!(var4 == var2)) { _fun0008_ip = 127; continue _fun0008 }
case 128:
                    var5 = _closure1_slot8;
                    var3 = var5.getToken;
                    var3 = var3.bind(var5)();
                    if(!(var4 == var3)) { _fun0008_ip = 129; continue _fun0008 }
case 126:
                    var5 = _closure1_slot8;
                    var4 = var5.getId;
                    var4 = var4.bind(var5)();
                    var5 = null;
                    if(!(var5 != var4)) { _fun0008_ip = 130; continue _fun0008 }
case 131:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var6 = var6[var4];
                    var4 = undefined;
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.logout;
                    var4 = 'TTI_test';
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=146);
case 132:
                    return var4;
case 133:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 76; continue _fun0008 }
case 130:
                    if(!(var5 != var2)) { _fun0008_ip = 6; continue _fun0008 }
case 134:
                    var7 = global;
                    var8 = var7.fetch;
                    var6 = {};
                    var5 = 'HEAD';
                    var6['method'] = var5;
                    var5 = {};
                    var5['Authorization'] = var2;
                    var6['headers'] = var5;
                    var10 = undefined;
                    var5 = 'https://discord.com/api/users/@me/settings-proto/2';
                    var5 = var8.bind(var10)(var5, var6);
                    SaveGenerator(address=213);
case 36:
                    return var5;
case 135:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 136; continue _fun0008 }
case 137:
                    var6 = var5.ok;
                    if(!var6) { _fun0008_ip = 6; continue _fun0008 }
case 138:
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 15;
                    var6 = var12[var6];
                    var10 = var8.bind(var10)(var6);
                    var8 = var10.loginToken;
                    var6 = false;
                    var6 = var8.bind(var10)(var2, var6);
                    SaveGenerator(address=269);
case 139:
                    return var6;
case 58:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0008_ip = 140; continue _fun0008 }
case 141:
                    var10 = var7.Promise;
                    var7 = var10.prototype;
                    var8 = Object.create(var7, {constructor: {value: var10}});
                    var22 = function(arg1) {
                        var3 = _closure1_slot7;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var23 = var8;
                    var7 = new var23[var10](var22, var21);
                    var7 = var7 instanceof Object ? var7 : var8;
                    SaveGenerator(address=315);
case 142:
                    return var7;
case 143:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0008_ip = 74; continue _fun0008 }
case 144:
                    var10 = _closure1_slot8;
                    var8 = var10.getId;
                    var8 = var8.bind(var10)();
                    if(!(var8 !== var16)) { _fun0008_ip = 145; continue _fun0008 }
case 6:
                    var10 = global;
                    var13 = var10.Promise;
                    var8 = var13.prototype;
                    var12 = Object.create(var8, {constructor: {value: var13}});
                    var22 = function(arg1, arg2) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var1 = arg2;
                            var _closure5_slot1 = var1;
                            var6 = function _loop(arg1) {
                                var5 = arg1;
                                var _closure6_slot0 = var5;
                                var4 = _closure1_slot23;
                                var6 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 11;
                                var3 = var3[var1];
                                var1 = undefined;
                                var3 = var6.bind(var1)(var3);
                                var2 = function() {
                                    var3 = _closure5_slot1;
                                    var1 = global;
                                    var4 = var1.Error;
                                    var12 = _closure4_slot0;
                                    var10 = _closure6_slot0;
                                    var1 = var1.HermesInternal;
                                    var6 = var1.concat;
                                    var13 = 'Unable to login ';
                                    var11 = ". Login failed with action '";
                                    var9 = "'";
                                    var12 = var13[var6](var12, var11, var10, var9, var8);
                                    var2 = var4.prototype;
                                    var2 = Object.create(var2, {constructor: {value: var4}});
                                    var13 = var2;
                                    var1 = new var13[var4](var12, var11);
                                    var2 = var1 instanceof Object ? var1 : var2;
                                    var1 = undefined;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var2 = var4.bind(var1)(var3, var5, var2);
                                return var1;
                            };
                            var5 = ['LOGIN_FAILURE', 'PASSWORDLESS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED'];
                            var1 = var5.length;
                            var4 = 0;
                            var3 = var4 < var1;
                            var1 = undefined;
                            if(!var3) { _fun0009_ip = 35; continue _fun0009 }
case 5:
                            var3 = var5[var4];
                            var3 = var6.bind(var1)(var3);
                            var4 = var4 + 1;
                            var3 = var5.length;
                            if(var4 < var3) { _fun0009_ip = 5; continue _fun0009 }
case 35:
                            var7 = _closure1_slot23;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var5 = 11;
                            var5 = var4[var5];
                            var6 = var3.bind(var1)(var5);
                            var5 = 'LOGIN_SUCCESS';
                            var2 = function(arg1) {
                                var3 = _closure5_slot0;
                                var1 = arg1;
                                var2 = var1.token;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = var7.bind(var1)(var6, var5, var2);
                            var2 = 15;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.login;
                            var2 = {};
                            var6 = _closure4_slot0;
                            var2['login'] = var6;
                            var5 = _closure4_slot1;
                            var2['password'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var23 = var12;
                    var8 = new var23[var13](var22, var21);
                    var8 = var8 instanceof Object ? var8 : var12;
                    SaveGenerator(address=384);
case 65:
                    return var8;
case 146:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(var12) { _fun0008_ip = 147; continue _fun0008 }
case 148:
                    var13 = var10.Promise;
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {constructor: {value: var13}});
                    var22 = function(arg1) {
                        var3 = _closure1_slot7;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var23 = var12;
                    var9 = new var23[var13](var22, var21);
                    var9 = var9 instanceof Object ? var9 : var12;
                    SaveGenerator(address=430);
case 149:
                    return var9;
case 150:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(var12) { _fun0008_ip = 151; continue _fun0008 }
case 152:
                    var12 = _closure1_slot8;
                    var11 = var12.getId;
                    var15 = var11.bind(var12)();
                    if(!(var15 === var16)) { _fun0008_ip = 153; continue _fun0008 }
case 154:
                    return var8;
case 153:
                    var12 = var10.Error;
                    var10 = var10.HermesInternal;
                    var14 = var10.concat;
                    var23 = 'Unable to login ';
                    var21 = ', expected id ';
                    var19 = ' after login but was ';
                    var22 = var17;
                    var20 = var16;
                    var18 = var15;
                    var22 = var23[var14](var22, var21, var20, var19, var18, var17);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var23 = var11;
                    var10 = new var23[var12](var22, var21);
                    var10 = var10 instanceof Object ? var10 : var11;
                    throw var10;
case 151:
                    return var9;
case 147:
                    return var8;
case 145:
                    return var2;
case 74:
                    return var7;
case 140:
                    return var6;
case 136:
                    return var5;
case 76:
                    return var4;
case 129:
                    return var3;
case 127:
                    return var2;
case 124:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function subscribeOnce(arg1, arg2, arg3) {
        var4 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var3;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var2 = var4.subscribe;
        var1 = function handler(arg1) {
            var5 = _closure2_slot0;
            var4 = var5.unsubscribe;
            var3 = _closure2_slot1;
            var2 = _closure2_slot3;
            var2 = var4.bind(var5)(var3, var2);
            var3 = _closure2_slot2;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var _closure2_slot3 = var1;
        var1 = var2.bind(var4)(var3, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = 0;
    var5 = var4[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var5);
    var _closure1_slot3 = var7;
    var5 = 1;
    var5 = var4[var5];
    var5 = var3.bind(var1)(var5);
    var5 = var5.NativeModules;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var3.bind(var1)(var5);
    var5 = var5.applicationReady;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var4[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var4[var5];
    var5 = var3.bind(var1)(var5);
    var5 = var5.addPostConnectionCallback;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var4[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var4[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var4[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var4[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var10 = 'TTITestAction';
    var11 = var8;
    var5 = new var11[var9](var10, var9);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot12 = var5;
    var5 = {};
    var5['setup-test'] = var6;
    var6 = function ping() {
        var1 = _closure1_slot4;
        var3 = var1.TTIManager;
        var2 = var3.logToDevice;
        var1 = global;
        var5 = var1.JSON;
        var4 = var5.stringify;
        var1 = {};
        var6 = 'pong';
        var1['type'] = var6;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var5['ping'] = var6;
    var6 = function reset-component-profiler() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.resetComponentProfiler;
        var3 = var3.bind(var4)();
        var4 = _closure1_slot16;
        var3 = 'success';
        var2 = 'reset-component-profiler';
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5['reset-component-profiler'] = var6;
    var6 = function pause-component-profiler() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.pauseComponentProfiler;
        var3 = var3.bind(var4)();
        var4 = _closure1_slot16;
        var3 = 'success';
        var2 = 'pause-component-profiler';
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5['pause-component-profiler'] = var6;
    var6 = function resume-component-profiler() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.resumeComponentProfiler;
        var3 = var3.bind(var4)();
        var4 = _closure1_slot16;
        var3 = 'success';
        var2 = 'resume-component-profiler';
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5['resume-component-profiler'] = var6;
    var6 = function dump-component-profiler-stats() {
        var5 = _closure1_slot16;
        var4 = {};
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dumpStats;
        var2 = var2.bind(var3)();
        var4['stats'] = var2;
        var3 = 'success';
        var2 = 'dump-component-profiler-stats';
        var2 = var5.bind(var1)(var3, var2, var4);
        return var1;
    };
    var5['dump-component-profiler-stats'] = var6;
    var6 = function dump-jank-stats() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = _closure1_slot16;
            var4 = {};
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 10;
            var2 = var1[var7];
            var1 = undefined;
            var6 = var6.bind(var1)(var2);
            var2 = null;
            var6 = var2 == var6;
            var2 = undefined;
            if(var6) { _fun0010_ip = 155; continue _fun0010 }
case 93:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var6 = var6.bind(var1)(var3);
            var3 = var6.requestReport;
            var2 = var3.bind(var6)();
case 155:
            var4['report'] = var2;
            var3 = 'success';
            var2 = 'dump-jank-stats';
            var2 = var5.bind(var1)(var3, var2, var4);
            return var1;
        }
    };
    var5['dump-jank-stats'] = var6;
    var6 = function set-jank-multiplier(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 10;
            var3 = var1[var5];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0011_ip = 35; continue _fun0011 }
case 46:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var5 = var4.bind(var1)(var3);
            var4 = var5.setJankHeuristicMultiplier;
            var3 = arg1;
            var3 = var3.multiplier;
            var3 = var4.bind(var5)(var3);
case 35:
            var4 = _closure1_slot16;
            var3 = 'success';
            var2 = 'set-jank-multiplier';
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var5['set-jank-multiplier'] = var6;
    var6 = function start-jank-stats() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 10;
            var3 = var1[var5];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0012_ip = 47; continue _fun0012 }
case 46:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var4 = var4.bind(var1)(var3);
            var3 = var4.startTracking;
            var3 = var3.bind(var4)();
case 47:
            var4 = _closure1_slot16;
            var3 = 'success';
            var2 = 'start-jank-stats';
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var5['start-jank-stats'] = var6;
    var6 = function flux-dispatch(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.dispatch;
        var3 = arg1;
        var3 = var3.action;
        var3 = var4.bind(var5)(var3);
        var4 = _closure1_slot16;
        var3 = 'success';
        var2 = 'flux-dispatch';
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5['flux-dispatch'] = var6;
    var6 = function get-token() {
        var5 = _closure1_slot16;
        var4 = {};
        var2 = _closure1_slot8;
        var1 = var2.getToken;
        var1 = var1.bind(var2)();
        var4['token'] = var1;
        var1 = undefined;
        var3 = 'success';
        var2 = 'get-token';
        var2 = var5.bind(var1)(var3, var2, var4);
        return var1;
    };
    var5['get-token'] = var6;
    var6 = function get-resource-usage() {
        var5 = _closure1_slot16;
        var4 = {};
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 12;
        var7 = var6[var2];
        var1 = undefined;
        var8 = var3.bind(var1)(var7);
        var7 = var8.getCumulativeCPUUsage;
        var7 = var7.bind(var8)();
        var4['cumulativeCPU'] = var7;
        var2 = var6[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.getCurrentMemoryUsageKB;
        var2 = var2.bind(var3)();
        var4['currentMemoryUsage'] = var2;
        var3 = 'success';
        var2 = 'get-resource-usage';
        var2 = var5.bind(var1)(var3, var2, var4);
        return var1;
    };
    var5['get-resource-usage'] = var6;
    var6 = function* (arg1) {
        var1 = function* anon_0_(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                StartGenerator();
                var6 = arg1;
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                if(var7) { _fun0013_ip = 156; continue _fun0013 }
case 157:
                var7 = undefined;
                var2 = undefined;
                var16 = undefined;
                var17 = undefined;
                var8 = undefined;
                var9 = undefined;
                var3 = undefined;
                var5 = undefined;
                var12 = undefined;
                var11 = undefined;
                var4 = undefined;
                var2 = var6.reply;
                var16 = var6.source;
                var15 = var6.args;
                var10 = {};
                var13 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 13;
                var14 = var19[var14];
                var14 = var18.bind(var7)(var14);
                var14 = var14.getConstants;
                var13['getConstants'] = var14;
                var10['ClientInfoUtils'] = var13;
                var13 = {};
                var14 = 9;
                var20 = var19[var14];
                var20 = var18.bind(var7)(var20);
                var20 = var20.resetComponentProfiler;
                var13['resetComponentProfiler'] = var20;
                var20 = var19[var14];
                var20 = var18.bind(var7)(var20);
                var20 = var20.resumeComponentProfiler;
                var13['resumeComponentProfiler'] = var20;
                var20 = var19[var14];
                var20 = var18.bind(var7)(var20);
                var20 = var20.pauseComponentProfiler;
                var13['pauseComponentProfiler'] = var20;
                var14 = var19[var14];
                var14 = var18.bind(var7)(var14);
                var14 = var14.dumpStats;
                var13['dumpStats'] = var14;
                var10['ComponentProfiler'] = var13;
                var14 = _closure1_slot1;
                var13 = 11;
                var13 = var19[var13];
                var13 = var14.bind(var7)(var13);
                var10['Dispatcher'] = var13;
                var13 = _closure1_slot6;
                var10['ExperimentStore'] = var13;
                var13 = 10;
                var13 = var19[var13];
                var13 = var14.bind(var7)(var13);
                var10['NativeJankStats'] = var13;
                var13 = 12;
                var13 = var19[var13];
                var13 = var14.bind(var7)(var13);
                var10['ProcessUtils'] = var13;
                var13 = {};
                var14 = 14;
                var20 = var19[var14];
                var20 = var18.bind(var7)(var20);
                var20 = var20.startRecordingAnalyticsEvents;
                var13['startRecordingAnalyticsEvents'] = var20;
                var20 = var19[var14];
                var20 = var18.bind(var7)(var20);
                var20 = var20.stopRecordingAnalyticsEvents;
                var13['stopRecordingAnalyticsEvents'] = var20;
                var20 = var19[var14];
                var20 = var18.bind(var7)(var20);
                var20 = var20.getAnalyticsEventsRecording;
                var13['getAnalyticsEventsRecording'] = var20;
                var14 = var19[var14];
                var14 = var18.bind(var7)(var14);
                var14 = var14.clearAnalyticsEventsRecording;
                var13['clearAnalyticsEventsRecording'] = var14;
                var10['AnalyticsUtils'] = var13;
                var13 = {};
                var14 = _closure1_slot21;
                var13['apiLogin'] = var14;
                var14 = _closure1_slot19;
                var13['setupTTITest'] = var14;
                var10['TTITestAction'] = var13;
                var17 = var10;
                var13 = _closure1_slot3;
                var10 = function* () {
                    var1 = function* anon_0_() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0014_ip = 37; continue _fun0014 }
case 158:
                            var2 = undefined;
                            return var2;
case 37:
                            return var1;
                        }
                    };
                    return var1;
                };
                var10 = var13.bind(var7)(var10);
                var8 = var10.constructor;
                var9 = {};
                var10 = null;
                if(!(var10 == var15)) { _fun0013_ip = 159; continue _fun0013 }
case 160:
                var15 = {};
case 159:
                var10 = global;
                var14 = var10.Object;
                var13 = var14.keys;
                var3 = var13.bind(var14)(var17);
                var14 = var10.Object;
                var13 = var14.values;
                var5 = var13.bind(var14)(var17);
                var14 = var10.Object;
                var13 = var14.keys;
                var12 = var13.bind(var14)(var15);
                var14 = var10.Object;
                var13 = var14.values;
                var11 = var13.bind(var14)(var15);
case 161: // try_start_0 // try_start_1
                var14 = var3;
                var3 = new Array(2);
                var23 = var3;
                var22 = var14;
                var21 = 0;
                var17 = arraySpread(var23, var22, var21);
                var13 = 'imports';
                var3[var17] = var13;
                var13 = 1;
                var21 = var17 + var13;
                var22 = var12;
                var23 = var3;
                var12 = arraySpread(var23, var22, var21);
                var17 = var10.String;
                var16 = var17.bind(var7)(var16);
                var3[var12] = var16;
                var12 = var12 + var13;
                var23 = var8;
                var22 = var3;
                var21 = undefined;
                var8 = apply(var23, var22, var21);
                var3 = var9;
                var22 = var5;
                var5 = new Array(1);
                var23 = var5;
                var21 = 0;
                var12 = arraySpread(var23, var22, var21);
                var5[var12] = var14;
                var21 = var12 + var13;
                var22 = var11;
                var23 = var5;
                var11 = arraySpread(var23, var22, var21);
                var23 = var8;
                var22 = var5;
                var21 = undefined;
                var5 = apply(var23, var22, var21);
                SaveGenerator(address=611);
case 162:
                return var5;
case 163:
                ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                if(var8) { _fun0013_ip = 164; continue _fun0013 }
case 165:
                var3['result'] = var5;
case 166: // try_end0
                _fun0013_ip = 167; continue _fun0013;
case 164: // try_end1
                var3 = var2;
                var8 = 'string';
                var3 = typeof var3;
                if(!(var8 === var3)) { _fun0013_ip = 168; continue _fun0013 }
case 169:
                var11 = var10.fetch;
                var8 = var2;
                var3 = {};
                var12 = 'PUT';
                var3['method'] = var12;
                var14 = var10.JSON;
                var13 = var14.stringify;
                var12 = var9;
                var12 = var13.bind(var14)(var12);
                var3['body'] = var12;
                var12 = {};
                var13 = 'application/json';
                var12['Content-Type'] = var13;
                var3['headers'] = var12;
                var3 = var11.bind(var7)(var8, var3);
                SaveGenerator(address=717);
case 170:
                return var3;
case 171:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                if(var8) { _fun0013_ip = 172; continue _fun0013 }
case 173:
                var4 = var3;
                var8 = var3.ok;
                var12 = _closure1_slot16;
                if(var8) { _fun0013_ip = 174; continue _fun0013 }
case 175:
                var13 = {};
                var8 = var4;
                var8 = var8.status;
                var13['status'] = var8;
                var11 = 'error';
                var8 = 'Failed to send backchannel reply';
                var8 = var12.bind(var7)(var11, var8, var13);
                _fun0013_ip = 168; continue _fun0013;
case 174:
                var11 = 'success';
                var8 = 'Backchannel reply sent';
                var8 = var12.bind(var7)(var11, var8);
case 168:
                return var5;
case 172:
                return var3;
case 176: // try_start_2 // catch_target0
                CatchBlockStart(arg_register=10);
                var5 = var9;
                var3 = {};
                var8 = _closure1_slot18;
                var8 = var8.bind(var7)(var11);
                var3['details'] = var8;
                var8 = var10.String;
                var8 = var8.bind(var7)(var11);
                var3['string'] = var8;
                var5['error'] = var3;
case 167: // try_end2
                var3 = var2;
                var5 = 'string';
                var3 = typeof var3;
                if(!(var5 === var3)) { _fun0013_ip = 177; continue _fun0013 }
case 178:
                var8 = var10.fetch;
                var5 = var2;
                var3 = {};
                var11 = 'PUT';
                var3['method'] = var11;
                var13 = var10.JSON;
                var12 = var13.stringify;
                var11 = var9;
                var11 = var12.bind(var13)(var11);
                var3['body'] = var11;
                var11 = {};
                var12 = 'application/json';
                var11['Content-Type'] = var12;
                var3['headers'] = var11;
                var3 = var8.bind(var7)(var5, var3);
                SaveGenerator(address=925);
case 179:
                return var3;
case 180:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                if(var5) { _fun0013_ip = 181; continue _fun0013 }
case 182:
                var4 = var3;
                var5 = var3.ok;
                var11 = _closure1_slot16;
                if(var5) { _fun0013_ip = 183; continue _fun0013 }
case 184:
                var12 = {};
                var5 = var4;
                var5 = var5.status;
                var12['status'] = var5;
                var8 = 'error';
                var5 = 'Failed to send backchannel reply';
                var5 = var11.bind(var7)(var8, var5, var12);
                _fun0013_ip = 177; continue _fun0013;
case 183:
                var8 = 'success';
                var5 = 'Backchannel reply sent';
                var5 = var11.bind(var7)(var8, var5);
case 177:
                return var7;
case 181:
                return var3;
case 185: // catch_target1 // catch_target2
                CatchBlockStart(arg_register=2);
                var5 = var2;
                var8 = 'string';
                var5 = typeof var5;
                if(!(var8 === var5)) { _fun0013_ip = 186; continue _fun0013 }
case 187:
                var8 = var10.fetch;
                var5 = var2;
                var2 = {};
                var11 = 'PUT';
                var2['method'] = var11;
                var11 = var10.JSON;
                var10 = var11.stringify;
                var9 = var10.bind(var11)(var9);
                var2['body'] = var9;
                var9 = {};
                var10 = 'application/json';
                var9['Content-Type'] = var10;
                var2['headers'] = var9;
                var2 = var8.bind(var7)(var5, var2);
                SaveGenerator(address=1090);
case 188:
                return var2;
case 189:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                if(var5) { _fun0013_ip = 190; continue _fun0013 }
case 191:
                var4 = var2;
                var5 = var2.ok;
                var6 = _closure1_slot16;
                if(var5) { _fun0013_ip = 192; continue _fun0013 }
case 193:
                var8 = {};
                var4 = var4.status;
                var8['status'] = var4;
                var5 = 'error';
                var4 = 'Failed to send backchannel reply';
                var4 = var6.bind(var7)(var5, var4, var8);
                _fun0013_ip = 186; continue _fun0013;
case 192:
                var5 = 'success';
                var4 = 'Backchannel reply sent';
                var4 = var6.bind(var7)(var5, var4);
case 186:
                throw var3;
case 190:
                return var2;
case 156:
                return var1;
            }
        };
        return var1;
    };
    var6 = var7.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = function() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var5['backchannel'] = var6;
    var _closure1_slot13 = var5;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 194; continue _fun0015 }
case 195:
                    var3 = global;
                    var5 = var3.TextDecoder;
                    var2 = var5.prototype;
                    var4 = Object.create(var2, {constructor: {value: var5}});
                    var12 = 'utf-8';
                    var13 = var4;
                    var2 = new var13[var5](var12, var11);
                    var7 = var2 instanceof Object ? var2 : var4;
                    var6 = var7.decode;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 19;
                    var5 = var5[var2];
                    var2 = undefined;
                    var9 = var8.bind(var2)(var5);
                    var8 = var9.base64decode;
                    var5 = arg1;
                    var5 = var5.actionData;
                    var5 = var8.bind(var9)(var5);
                    var7 = var6.bind(var7)(var5);
                    var6 = var3.JSON;
                    var5 = var6.parse;
                    var6 = var5.bind(var6)(var7);
                    var8 = _closure1_slot12;
                    var7 = var8.log;
                    var5 = {};
                    var12 = var5;
                    var11 = var6;
                    var9 = copyDataProperties(var12, var11);
                    var10 = var6.user;
                    var9 = null;
                    var10 = var9 == var10;
                    var9 = 'redacted';
                    if(!var10) { _fun0015_ip = 14; continue _fun0015 }
case 196:
                    var9 = undefined;
case 14:
                    var2 = 'user';
                    var5[var2] = var9;
                    var2 = 'Received TTI Test Action';
                    var2 = var7.bind(var8)(var2, var5);
                    var2 = _closure1_slot5;
                    var2 = var2.promise;
                    SaveGenerator(address=198);
case 197:
                    return var2;
case 198:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0015_ip = 199; continue _fun0015 }
case 200:
                    var5 = _closure1_slot13;
                    var4 = var6.type;
                    var4 = var5[var4];
                    var4 = var4.bind(var5)(var6);
                    var4 = var3.Promise;
                    var3 = var4.resolve;
                    var3 = var3.bind(var4)();
                    return var3;
case 199:
                    return var2;
case 194:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var2.bind(var1)();
    var2 = moduleObject;
    var2['exports'] = var5;
    var2 = 20;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'modules/headless_tasks/android/TTITestAction.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();