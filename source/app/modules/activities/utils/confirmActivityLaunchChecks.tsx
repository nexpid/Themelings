// app/modules/activities/utils/confirmActivityLaunchChecks.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 335; continue _fun0001 }
 13:
                    var12 = var2.applicationId;
                    var13 = var2.channelId;
                    var11 = var2.guildId;
                    var3 = undefined;
                    var7 = undefined;
                    SaveGenerator(address=36);
 34:
                    return var3;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 332; continue _fun0001 }
 45: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var12;
                    var4 = var13;
                    var4 = var6.bind(var3)(var5, var4);
                    SaveGenerator(address=84);
 82:
                    return var4;
 84:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 93; continue _fun0001 }
 90: // try_end0
                    return var4;
 93:
                    return var4;
 96: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var4 = var11;
                    var10 = null;
                    if(!(var10 == var4)) { _fun0001_ip = 144; continue _fun0001 }
 107:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.EmbeddedActivityLocationKind;
                    var4 = var4.PRIVATE_CHANNEL;
                    _fun0001_ip = 179; continue _fun0001;
 144:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 5;
                    var5 = var9[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.EmbeddedActivityLocationKind;
                    var4 = var5.GUILD_CHANNEL;
 179:
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
                    if(!var14) { _fun0001_ip = 243; continue _fun0001 }
 240:
                    var12 = var13;
 243:
                    var4['channelId'] = var12;
                    var12 = var11;
                    var12 = var10 != var12;
                    var10 = null;
                    if(!var12) { _fun0001_ip = 262; continue _fun0001 }
 259:
                    var10 = var11;
 262:
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
 332:
                    return var2;
 335:
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 122; continue _fun0002 }
 12:
                    var5 = var2.currentEmbeddedApplication;
                    var _closure4_slot0 = var5;
                    var6 = var2.shouldClosePopoutOnLeaveCurrentEmbeddedApplication;
                    var _closure4_slot1 = var6;
                    var2 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var _closure4_slot2 = var2;
                    var2 = undefined;
                    SaveGenerator(address=48);
 46:
                    return var2;
 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 119; continue _fun0002 }
 54:
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 111; continue _fun0002 }
 60:
                    var4 = global;
                    var5 = var4.Promise;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var7 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                            if(var11) { _fun0003_ip = 96; continue _fun0003 }
 91:
                            var6 = var5.location;
 96:
                            var10 = var9.bind(var10)(var6);
                            var9 = _closure1_slot4;
                            var6 = var9.getChannel;
                            var6 = var6.bind(var9)(var10);
                            if(!(var7 != var5)) { _fun0003_ip = 123; continue _fun0003 }
 119:
                            if(!(var7 == var6)) { _fun0003_ip = 132; continue _fun0003 }
 123:
                            var5 = true;
                            var5 = var8.bind(var1)(var5);
                            _fun0003_ip = 191; continue _fun0003;
 132:
                            var5 = _closure4_slot2;
                            if(!(var7 != var5)) { _fun0003_ip = 148; continue _fun0003 }
 140:
                            var5 = _closure4_slot2;
                            var5 = var5.bind(var1)();
 148:
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
 191:
                            return var1;
                        }
                    };
                    var8 = var4;
                    var3 = new var8[var5](var7, var6);
                    var3 = var3 instanceof Object ? var3 : var4;
                    SaveGenerator(address=97);
 95:
                    return var3;
 97:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 116; continue _fun0002 }
 103:
                    if(var3) { _fun0002_ip = 111; continue _fun0002 }
 106:
                    var4 = false;
                    return var4;
 111:
                    var4 = true;
                    return var4;
 116:
                    return var3;
 119:
                    return var2;
 122:
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 277; continue _fun0004 }
 15:
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
 57:
                    return var4;
 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 274; continue _fun0004 }
 68:
                    var7 = var5.nsfwAllowed;
                    var5 = null;
                    if(!(var5 == var7)) { _fun0004_ip = 261; continue _fun0004 }
 83:
                    if(!(var5 == var6)) { _fun0004_ip = 174; continue _fun0004 }
 87:
                    var8 = _closure1_slot7;
                    var7 = {};
                    var7['applicationId'] = var9;
                    var10 = var5 == var11;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 114; continue _fun0004 }
 109:
                    var9 = var11.id;
 114:
                    var7['channelId'] = var9;
                    var9 = var5 == var11;
                    var10 = undefined;
                    if(var9) { _fun0004_ip = 137; continue _fun0004 }
 127:
                    var9 = var11.getGuildId;
                    var10 = var9.bind(var11)();
 137:
                    var11 = var5 != var10;
                    var9 = undefined;
                    if(!var11) { _fun0004_ip = 149; continue _fun0004 }
 146:
                    var9 = var10;
 149:
                    var7['guildId'] = var9;
                    var7 = var8.bind(var4)(var7);
                    SaveGenerator(address=162);
 160:
                    return var7;
 162:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    var6 = var7;
                    if(!var8) { _fun0004_ip = 174; continue _fun0004 }
 171:
                    return var7;
 174:
                    _closure4_slot2 = var6;
                    if(!(var5 != var6)) { _fun0004_ip = 269; continue _fun0004 }
 182:
                    var6 = var6.embeddedActivityConfig;
                    var7 = var5 == var6;
                    var4 = undefined;
                    if(var7) { _fun0004_ip = 203; continue _fun0004 }
 197:
                    var4 = var6.requires_age_gate;
 203:
                    if(!(var5 != var4)) { _fun0004_ip = 261; continue _fun0004 }
 207:
                    if(!var4) { _fun0004_ip = 261; continue _fun0004 }
 210:
                    var4 = global;
                    var5 = var4.Promise;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var12 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var1 = _closure4_slot1;
                            var8 = null;
                            if(!(var8 != var1)) { _fun0005_ip = 32; continue _fun0005 }
 22:
                            var2 = _closure4_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 32:
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
                            if(var8) { _fun0005_ip = 95; continue _fun0005 }
 86:
                            var7 = _closure4_slot0;
                            var6 = var7.id;
 95:
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
 245:
                    return var3;
 247:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 266; continue _fun0004 }
 253:
                    if(var3) { _fun0004_ip = 261; continue _fun0004 }
 256:
                    var4 = false;
                    return var4;
 261:
                    var4 = true;
                    return var4;
 266:
                    return var3;
 269:
                    var3 = false;
                    return var3;
 274:
                    return var2;
 277:
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 306; continue _fun0006 }
 15:
                    var4 = var2.application;
                    var8 = var2.applicationId;
                    var12 = var2.channel;
                    var2 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var _closure4_slot0 = var2;
                    var10 = undefined;
                    var _closure4_slot1 = var10;
                    SaveGenerator(address=50);
 48:
                    return var10;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 303; continue _fun0006 }
 59:
                    var3 = null;
                    if(!(var3 == var4)) { _fun0006_ip = 152; continue _fun0006 }
 65:
                    var7 = _closure1_slot7;
                    var5 = {};
                    var5['applicationId'] = var8;
                    var11 = var3 == var12;
                    var9 = undefined;
                    if(var11) { _fun0006_ip = 92; continue _fun0006 }
 87:
                    var9 = var12.id;
 92:
                    var5['channelId'] = var9;
                    var9 = var3 == var12;
                    var11 = undefined;
                    if(var9) { _fun0006_ip = 115; continue _fun0006 }
 105:
                    var9 = var12.getGuildId;
                    var11 = var9.bind(var12)();
 115:
                    var12 = var3 != var11;
                    var9 = undefined;
                    if(!var12) { _fun0006_ip = 127; continue _fun0006 }
 124:
                    var9 = var11;
 127:
                    var5['guildId'] = var9;
                    var5 = var7.bind(var10)(var5);
                    SaveGenerator(address=140);
 138:
                    return var5;
 140:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    var4 = var5;
                    if(!var7) { _fun0006_ip = 152; continue _fun0006 }
 149:
                    return var5;
 152:
                    _closure4_slot1 = var4;
                    var3 = var3 != var4;
                    if(!var3) { _fun0006_ip = 300; continue _fun0006 }
 166:
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
                    if(!var7) { _fun0006_ip = 231; continue _fun0006 }
 222:
                    var4 = var4.isVerified;
                    var7 = !var4;
 231:
                    var4 = !var7;
                    if(!var7) { _fun0006_ip = 297; continue _fun0006 }
 237:
                    var7 = _closure1_slot5;
                    var5 = var7.hasActivityEverBeenLaunched;
                    var5 = var5.bind(var7)(var8);
                    var7 = !var5;
                    var5 = !var7;
                    if(!var7) { _fun0006_ip = 294; continue _fun0006 }
 261:
                    var7 = global;
                    var8 = var7.Promise;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var14 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var2 = _closure4_slot0;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0007_ip = 32; continue _fun0007 }
 22:
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 32:
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
 294:
                    var4 = var5;
 297:
                    var3 = var4;
 300:
                    return var3;
 303:
                    return var2;
 306:
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
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 146; continue _fun0008 }
 15:
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
 64:
                    return var2;
 66:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 143; continue _fun0008 }
 72:
                    if(var2) { _fun0008_ip = 80; continue _fun0008 }
 75:
                    var3 = false;
                    return var3;
 80:
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
 92:
                    return var3;
 94:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0008_ip = 140; continue _fun0008 }
 100:
                    if(var3) { _fun0008_ip = 108; continue _fun0008 }
 103:
                    var7 = false;
                    return var7;
 108:
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
 120:
                    return var4;
 122:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 137; continue _fun0008 }
 128:
                    var5 = !var4;
                    var5 = !var5;
                    return var5;
 137:
                    return var4;
 140:
                    return var3;
 143:
                    return var2;
 146:
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