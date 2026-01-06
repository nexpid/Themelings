// app/modules/activities/utils/confirmActivityLaunchChecks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getOrFetchApplicationForLaunch() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _getOrFetchApplicationForLaunch() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var12 = var2.applicationId;
                    var13 = var2.channelId;
                    var11 = var2.guildId;
                    var3 = undefined;
                    var7 = undefined;
                    SaveGenerator(address=36);
case 4:
                    return var3;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var12;
                    var4 = var13;
                    var4 = var6.bind(var3)(var5, var4);
                    SaveGenerator(address=84);
case 8:
                    return var4;
case 9:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11: // try_end0
                    return var4;
case 10:
                    return var4;
case 12: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var4 = var11;
                    var10 = null;
                    if(!(var10 == var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.EmbeddedActivityLocationKind;
                    var4 = var4.PRIVATE_CHANNEL;
                    _fun0001_ip = 15; continue _fun0001;
case 13:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 5;
                    var5 = var9[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.EmbeddedActivityLocationKind;
                    var4 = var5.GUILD_CHANNEL;
case 15:
                    var7 = var4;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 6;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {'type': 'EMBEDDED_ACTIVITY_LAUNCH_FAIL', 'nonce': ''};
                    var4['applicationId'] = var12;
                    var12 = var13;
                    var14 = var10 != var12;
                    var12 = null;
                    if(!var14) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var12 = var13;
case 16:
                    var4['channelId'] = var12;
                    var12 = var11;
                    var12 = var10 != var12;
                    var10 = null;
                    if(!var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var10 = var11;
case 18:
                    var4['guildId'] = var10;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 7;
                    var9 = var11[var9];
                    var9 = var10.bind(var3)(var9);
                    var10 = var9.APIError;
                    var16 = var8;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var17 = var9;
                    var8 = new var17[var10](var16, var15);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var4['error'] = var8;
                    var4['locationKind'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _confirmActivityChange() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var5 = var2.currentEmbeddedApplication;
                    var _closure4_slot0 = var5;
                    var6 = var2.shouldClosePopoutOnLeaveCurrentEmbeddedApplication;
                    var _closure4_slot1 = var6;
                    var2 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var _closure4_slot2 = var2;
                    var2 = undefined;
                    SaveGenerator(address=48);
case 22:
                    return var2;
case 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var4 = global;
                    var5 = var4.Promise;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var7 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var8 = arg1;
                            var _closure5_slot0 = var8;
                            var3 = _closure1_slot5;
                            var1 = var3.getSelfEmbeddedActivities;
                            var6 = var1.bind(var3)();
                            var5 = var6.get;
                            var1 = _closure4_slot0;
                            var1 = var1.id;
                            var5 = var5.bind(var6)(var1);
                            var _closure5_slot1 = var5;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 8;
                            var6 = var6[var1];
                            var1 = undefined;
                            var10 = var7.bind(var1)(var6);
                            var9 = var10.getEmbeddedActivityLocationChannelId;
                            var7 = null;
                            var11 = var7 == var5;
                            var6 = undefined;
                            if(var11) { _fun0003_ip = 12; continue _fun0003 }
case 28:
                            var6 = var5.location;
case 12:
                            var10 = var9.bind(var10)(var6);
                            var9 = _closure1_slot4;
                            var6 = var9.getChannel;
                            var6 = var6.bind(var9)(var10);
                            if(!(var7 != var5)) { _fun0003_ip = 29; continue _fun0003 }
case 24:
                            if(!(var7 == var6)) { _fun0003_ip = 30; continue _fun0003 }
case 29:
                            var5 = true;
                            var5 = var8.bind(var1)(var5);
                            _fun0003_ip = 31; continue _fun0003;
case 30:
                            var5 = _closure4_slot2;
                            if(!(var7 != var5)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                            var5 = _closure4_slot2;
                            var5 = var5.bind(var1)();
case 32:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 9;
                            var4 = var7[var4];
                            var5 = var5.bind(var1)(var4);
                            var15 = _closure4_slot0;
                            var13 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var5 = var2.bind(var1)();
                                var4 = var5.leaveActivity;
                                var3 = {};
                                var6 = _closure5_slot1;
                                var6 = var6.location;
                                var3['location'] = var6;
                                var7 = _closure4_slot0;
                                var7 = var7.id;
                                var3['applicationId'] = var7;
                                var6 = _closure4_slot1;
                                var3['shouldClosePopout'] = var6;
                                var3 = var4.bind(var5)(var3);
                                var3 = _closure5_slot0;
                                var2 = true;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var12 = function() {
                                var3 = _closure5_slot0;
                                var2 = undefined;
                                var1 = false;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var16 = undefined;
                            var14 = var6;
                            var2 = var16[var5](var15, var14, var13, var12, var11);
case 31:
                            return var1;
                        }
                    };
                    var8 = var4;
                    var3 = new var8[var5](var7, var6);
                    var3 = var3 instanceof Object ? var3 : var4;
                    SaveGenerator(address=97);
case 34:
                    return var3;
case 35:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    if(var3) { _fun0002_ip = 26; continue _fun0002 }
case 38:
                    var4 = false;
                    return var4;
case 26:
                    var4 = true;
                    return var4;
case 36:
                    return var3;
case 24:
                    return var2;
case 20:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _confirmActivityAgeGate() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var6 = var2.application;
                    var9 = var2.applicationId;
                    var11 = var2.channel;
                    var _closure4_slot0 = var11;
                    var5 = var2.user;
                    var2 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var _closure4_slot1 = var2;
                    var4 = undefined;
                    var _closure4_slot2 = var4;
                    SaveGenerator(address=59);
case 41:
                    return var4;
case 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var7 = var5.nsfwAllowed;
                    var5 = null;
                    if(!(var5 == var7)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    if(!(var5 == var6)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var8 = _closure1_slot7;
                    var7 = {};
                    var7['applicationId'] = var9;
                    var10 = var5 == var11;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                    var9 = var11.id;
case 49:
                    var7['channelId'] = var9;
                    var9 = var5 == var11;
                    var10 = undefined;
                    if(var9) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    var9 = var11.getGuildId;
                    var10 = var9.bind(var11)();
case 51:
                    var11 = var5 != var10;
                    var9 = undefined;
                    if(!var11) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var9 = var10;
case 53:
                    var7['guildId'] = var9;
                    var7 = var8.bind(var4)(var7);
                    SaveGenerator(address=162);
case 55:
                    return var7;
case 56:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    var6 = var7;
                    if(!var8) { _fun0004_ip = 47; continue _fun0004 }
case 57:
                    return var7;
case 47:
                    _closure4_slot2 = var6;
                    if(!(var5 != var6)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                    var6 = var6.embeddedActivityConfig;
                    var7 = var5 == var6;
                    var4 = undefined;
                    if(var7) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                    var4 = var6.requires_age_gate;
case 60:
                    if(!(var5 != var4)) { _fun0004_ip = 45; continue _fun0004 }
case 62:
                    if(!var4) { _fun0004_ip = 45; continue _fun0004 }
case 63:
                    var4 = global;
                    var5 = var4.Promise;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var12 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var1 = _closure4_slot1;
                            var8 = null;
                            if(!(var8 != var1)) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                            var2 = _closure4_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 64:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.confirmActivityAgeGateAlert;
                            var2 = {};
                            var6 = _closure4_slot2;
                            var2['application'] = var6;
                            var6 = _closure4_slot0;
                            var8 = var8 == var6;
                            var6 = undefined;
                            if(var8) { _fun0005_ip = 34; continue _fun0005 }
case 66:
                            var7 = _closure4_slot0;
                            var6 = var7.id;
case 34:
                            var2['channelId'] = var6;
                            var6 = function onAgree() {
                                var3 = _closure5_slot0;
                                var2 = undefined;
                                var1 = true;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var2['onAgree'] = var6;
                            var5 = function onDisagree() {
                                var3 = _closure5_slot0;
                                var2 = undefined;
                                var1 = false;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var2['onDisagree'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var13 = var4;
                    var3 = new var13[var5](var12, var11);
                    var3 = var3 instanceof Object ? var3 : var4;
                    SaveGenerator(address=247);
case 67:
                    return var3;
case 68:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 69; continue _fun0004 }
case 70:
                    if(var3) { _fun0004_ip = 45; continue _fun0004 }
case 71:
                    var4 = false;
                    return var4;
case 45:
                    var4 = true;
                    return var4;
case 69:
                    return var3;
case 58:
                    var3 = false;
                    return var3;
case 43:
                    return var2;
case 39:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _confirmExternalAppLaunch() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 72; continue _fun0006 }
case 40:
                    var4 = var2.application;
                    var8 = var2.applicationId;
                    var12 = var2.channel;
                    var2 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var _closure4_slot0 = var2;
                    var10 = undefined;
                    var _closure4_slot1 = var10;
                    SaveGenerator(address=50);
case 23:
                    return var10;
case 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 74; continue _fun0006 }
case 42:
                    var3 = null;
                    if(!(var3 == var4)) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                    var7 = _closure1_slot7;
                    var5 = {};
                    var5['applicationId'] = var8;
                    var11 = var3 == var12;
                    var9 = undefined;
                    if(var11) { _fun0006_ip = 77; continue _fun0006 }
case 48:
                    var9 = var12.id;
case 77:
                    var5['channelId'] = var9;
                    var9 = var3 == var12;
                    var11 = undefined;
                    if(var9) { _fun0006_ip = 78; continue _fun0006 }
case 79:
                    var9 = var12.getGuildId;
                    var11 = var9.bind(var12)();
case 78:
                    var12 = var3 != var11;
                    var9 = undefined;
                    if(!var12) { _fun0006_ip = 52; continue _fun0006 }
case 80:
                    var9 = var11;
case 52:
                    var5['guildId'] = var9;
                    var5 = var7.bind(var10)(var5);
                    SaveGenerator(address=140);
case 81:
                    return var5;
case 33:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    var4 = var5;
                    if(!var7) { _fun0006_ip = 75; continue _fun0006 }
case 53:
                    return var5;
case 75:
                    _closure4_slot1 = var4;
                    var3 = var3 != var4;
                    if(!var3) { _fun0006_ip = 82; continue _fun0006 }
case 83:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 12;
                    var7 = var11[var7];
                    var11 = var9.bind(var10)(var7);
                    var10 = var11.hasFlag;
                    var9 = var4.flags;
                    var7 = _closure1_slot6;
                    var7 = var7.EMBEDDED_RELEASED;
                    var7 = var10.bind(var11)(var9, var7);
                    var7 = !var7;
                    if(!var7) { _fun0006_ip = 84; continue _fun0006 }
case 85:
                    var4 = var4.isVerified;
                    var7 = !var4;
case 84:
                    var4 = !var7;
                    if(!var7) { _fun0006_ip = 86; continue _fun0006 }
case 87:
                    var7 = _closure1_slot5;
                    var5 = var7.hasActivityEverBeenLaunched;
                    var5 = var5.bind(var7)(var8);
                    var7 = !var5;
                    var5 = !var7;
                    if(!var7) { _fun0006_ip = 88; continue _fun0006 }
case 45:
                    var7 = global;
                    var8 = var7.Promise;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var14 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var2 = _closure4_slot0;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 64:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.confirmExternalAppLaunchAlert;
                            var2 = {};
                            var6 = _closure4_slot1;
                            var2['application'] = var6;
                            var6 = function onConfirm() {
                                var3 = _closure5_slot0;
                                var2 = undefined;
                                var1 = true;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var2['onConfirm'] = var6;
                            var5 = function onCancel() {
                                var3 = _closure5_slot0;
                                var2 = undefined;
                                var1 = false;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var2['onCancel'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var15 = var7;
                    var6 = new var15[var8](var14, var13);
                    var5 = var6 instanceof Object ? var6 : var7;
case 88:
                    var4 = var5;
case 86:
                    var3 = var4;
case 82:
                    return var3;
case 74:
                    return var2;
case 72:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _confirmActivityLaunchChecks() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 54; continue _fun0008 }
case 40:
                    var3 = {};
                    var2 = var6.currentEmbeddedApplication;
                    var3['currentEmbeddedApplication'] = var2;
                    var2 = var6.shouldClosePopoutOnLeaveCurrentEmbeddedApplication;
                    var3['shouldClosePopoutOnLeaveCurrentEmbeddedApplication'] = var2;
                    var2 = var6.onConfirmActivityLaunchChecksAlertOpen;
                    var3['onConfirmActivityLaunchChecksAlertOpen'] = var2;
                    var2 = function confirmActivityChange() {
                        var1 = undefined;
                        var4 = _closure1_slot9;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var5 = undefined;
                    var2 = var2.bind(var5)(var3);
                    SaveGenerator(address=66);
case 89:
                    return var2;
case 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 91; continue _fun0008 }
case 92:
                    if(var2) { _fun0008_ip = 93; continue _fun0008 }
case 94:
                    var3 = false;
                    return var3;
case 93:
                    var3 = function confirmActivityAgeGate() {
                        var1 = undefined;
                        var4 = _closure1_slot10;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var5)(var6);
                    SaveGenerator(address=94);
case 77:
                    return var3;
case 95:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0008_ip = 33; continue _fun0008 }
case 96:
                    if(var3) { _fun0008_ip = 97; continue _fun0008 }
case 37:
                    var7 = false;
                    return var7;
case 97:
                    var4 = function confirmExternalAppLaunch() {
                        var1 = undefined;
                        var4 = _closure1_slot11;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var6);
                    SaveGenerator(address=122);
case 98:
                    return var4;
case 20:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 51; continue _fun0008 }
case 99:
                    var5 = !var4;
                    var5 = !var5;
                    return var5;
case 51:
                    return var4;
case 33:
                    return var3;
case 91:
                    return var2;
case 54:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationFlags;
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/confirmActivityLaunchChecks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function confirmActivityLaunchChecks() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmActivityLaunchChecks'] = var2;
    return var1;
})();