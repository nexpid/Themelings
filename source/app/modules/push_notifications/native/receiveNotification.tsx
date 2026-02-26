// app/modules/push_notifications/native/receiveNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function onStageConnectionError() {
        var6 = _closure1_slot1;
        var7 = _closure1_slot3;
        var1 = 11;
        var2 = var7[var1];
        var1 = undefined;
        var4 = var6.bind(var1)(var2);
        var3 = var4.open;
        var2 = {};
        var8 = 'STAGE_DISCOVERY_CONNECTION_ERROR_GENERIC';
        var2['key'] = var8;
        var10 = _closure1_slot0;
        var5 = 12;
        var8 = var7[var5];
        var8 = var10.bind(var1)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var5 = var7[var5];
        var5 = var10.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.ah3RLk;
        var5 = var8.bind(var9)(var5);
        var2['content'] = var5;
        var5 = 13;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var2['icon'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function waitForConnection() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1) {
            var3 = _closure1_slot5;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function waitForDataOrConnection() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _waitForDataOrConnection() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var3 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var3;
                    var2 = undefined;
                    var _closure4_slot2 = var2;
                    var3 = var3.bind(var2)();
                    if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = false;
                    _closure4_slot2 = var3;
                    var3 = global;
                    var7 = var3.Promise;
                    var4 = var7.prototype;
                    var6 = Object.create(var4, {constructor: {value: var7}});
                    var9 = function(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var3 = _closure4_slot0;
                        var2 = var3.addConditionalChangeListener;
                        var1 = function() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                var3 = _closure4_slot2;
                                var1 = !var3;
                                if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                                var2 = _closure4_slot1;
                                var4 = undefined;
                                var2 = var2.bind(var4)();
                                var2 = !var2;
                                if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                                var3 = _closure5_slot0;
                                var3 = var3.bind(var4)();
                                var2 = false;
case 8:
                                var1 = var2;
case 6:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var10 = var6;
                    var4 = new var10[var7](var9, var8);
                    var8 = var4 instanceof Object ? var4 : var6;
                    var4 = _closure1_slot19;
                    var7 = var4.bind(var2)();
                    var6 = var3.Promise;
                    var4 = var6.race;
                    var3 = new Array(2);
                    var3[0] = var8;
                    var3[1] = var7;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=124);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var4 = true;
                    _closure4_slot2 = var4;
                    _fun0001_ip = 4; continue _fun0001;
case 12:
                    return var3;
case 4:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function waitForNavigationReady() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function _waitForNavigationReady() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    var3 = var3 != var5;
                    if(!var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var4 = var5.isReady;
                    var3 = var4.bind(var5)();
case 16:
                    if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var3 = global;
                    var5 = var3.Promise;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var6 = function(arg1) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 15;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var5 = var4.ComponentDispatch;
                        var4 = var5.subscribeOnce;
                        var3 = _closure1_slot12;
                        var3 = var3.NAVIGATOR_READY;
                        var2 = function() {
                            var2 = _closure5_slot0;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var7 = var4;
                    var3 = new var7[var5](var6, var5);
                    var3 = var3 instanceof Object ? var3 : var4;
                    SaveGenerator(address=105);
case 20:
                    return var3;
case 21:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(!var4) { _fun0003_ip = 18; continue _fun0003 }
case 22:
                    return var3;
case 18:
                    return var2;
case 14:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function _connectToStage() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function _connectToStage2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var6 = arg1;
                    var5 = arg2;
                    var2 = _closure1_slot19;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=33);
case 25:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 27; continue _fun0004 }
case 5: // try_start_0
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var8 = 16;
                    var7 = var7[var8];
                    var10 = var9.bind(var3)(var7);
                    var9 = var10.connectOrLurkStage;
                    var7 = var6;
                    var6 = var5;
                    var5 = true;
                    var5 = var9.bind(var10)(var7, var6, var5);
                    SaveGenerator(address=84);
case 28:
                    return var5;
case 29:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var8];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.navigateToStage;
                    var6 = null;
                    var6 = var7.bind(var8)(var5, var6);
case 32: // try_end0
                    _fun0004_ip = 33; continue _fun0004;
case 30:
                    return var5;
case 34: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot18;
                    var4 = var4.bind(var3)();
case 33:
                    return var3;
case 27:
                    return var2;
case 23:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _handleStageNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 17; continue _fun0005 }
case 24:
                    var5 = _closure1_slot24;
                    var4 = var2.guild_id;
                    var2 = var2.channel_id;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4, var2);
                    SaveGenerator(address=39);
case 35:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 36; continue _fun0005 }
case 6:
                    return var3;
case 36:
                    return var2;
case 17:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function _handleGuildEventNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 7:
                    var5 = var2.guild_scheduled_event_entity_type;
                    var4 = _closure1_slot16;
                    var4 = var4.STAGE_INSTANCE;
                    if(!(var4 !== var5)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var4 = _closure1_slot16;
                    var4 = var4.VOICE;
                    if(!(var4 !== var5)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var4 = _closure1_slot16;
                    var4 = var4.EXTERNAL;
                    if(!(var4 === var5)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var7 = var2.guild_id;
                    var8 = var2.guild_scheduled_event_id;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var4 = 18;
                    var4 = var5[var4];
                    var5 = undefined;
                    var6 = var6.bind(var5)(var4);
                    var4 = var6.transitionToGuild;
                    var4 = var4.bind(var6)(var7);
                    var4 = _closure1_slot19;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=131);
case 44:
                    return var4;
case 45:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var7 = _closure1_slot6;
                    var6 = var7.getGuildScheduledEvent;
                    var9 = var6.bind(var7)(var8);
                    var6 = null;
                    if(!(var6 != var9)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var6 = 19;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.openGuildEventDetails;
                    var6 = {};
                    var10 = var9.id;
                    var6['eventId'] = var10;
                    var6['event'] = var9;
                    var6 = var7.bind(var8)(var6);
case 42:
                    var6 = undefined;
                    return var6;
case 48:
                    return var5;
case 46:
                    return var4;
case 40:
                    var7 = var2.channel_id;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var4 = _closure1_slot19;
                    var8 = undefined;
                    var5 = var4.bind(var8)();
                    SaveGenerator(address=242);
case 52:
                    return var5;
case 53:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 17;
                    var4 = var9[var4];
                    var6 = var6.bind(var8)(var4);
                    var4 = var6.selectVoiceChannel;
                    var4 = var4.bind(var6)(var7);
                    var4 = undefined;
                    _fun0006_ip = 56; continue _fun0006;
case 54:
                    return var5;
case 50:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var5 = 11;
                    var6 = var11[var5];
                    var5 = undefined;
                    var8 = var10.bind(var5)(var6);
                    var7 = var8.open;
                    var6 = {};
                    var9 = 'VOICE_CONNECTION_ERROR_GENERIC';
                    var6['key'] = var9;
                    var14 = _closure1_slot0;
                    var9 = 12;
                    var12 = var11[var9];
                    var12 = var14.bind(var5)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var9 = var11[var9];
                    var9 = var14.bind(var5)(var9);
                    var9 = var9.t;
                    var9 = var9.S69lJR;
                    var9 = var12.bind(var13)(var9);
                    var6['content'] = var9;
                    var9 = 13;
                    var9 = var11[var9];
                    var9 = var10.bind(var5)(var9);
                    var6['icon'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var4 = undefined;
case 56:
                    return var4;
case 38:
                    var6 = var2.channel_id;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var5 = _closure1_slot24;
                    var4 = var2.guild_id;
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4, var6);
                    SaveGenerator(address=444);
case 59:
                    return var4;
case 60:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var2 = undefined;
                    _fun0006_ip = 63; continue _fun0006;
case 61:
                    return var4;
case 57:
                    var4 = _closure1_slot18;
                    var3 = undefined;
                    var4 = var4.bind(var3)();
                    var2 = undefined;
case 63:
                    return var2;
case 37:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function _handleRelationshipAddNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 64; continue _fun0007 }
case 3:
                    var6 = undefined;
                    var _closure4_slot0 = var6;
                    var2 = _closure1_slot22;
                    var2 = var2.bind(var6)();
                    SaveGenerator(address=36);
case 65:
                    return var2;
case 66:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 67; continue _fun0007 }
case 6:
                    var5 = global;
                    var8 = var5.Number;
                    var5 = var7.rel_type;
                    var8 = var8.bind(var6)(var5);
                    var5 = _closure1_slot13;
                    var5 = var5.PENDING_INCOMING;
                    if(!(var8 !== var5)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                    var5 = _closure1_slot13;
                    var5 = var5.FRIEND;
                    if(!(var8 === var5)) { _fun0007_ip = 4; continue _fun0007 }
case 70:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var5 = 26;
                    var5 = var9[var5];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.openPrivateChannel;
                    var5 = {};
                    var10 = var7.user_id;
                    var5['recipientIds'] = var10;
                    var5 = var8.bind(var9)(var5);
                    _fun0007_ip = 71; continue _fun0007;
case 4:
                    var8 = var7.notification_type;
                    var5 = _closure1_slot10;
                    var5 = var5.REMINDER;
                    if(!(var8 === var5)) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 14;
                    var5 = var9[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.getRootNavigationRef;
                    var10 = var5.bind(var8)();
                    var5 = null;
                    if(!(var5 != var10)) { _fun0007_ip = 71; continue _fun0007 }
case 73:
                    var9 = var10.navigate;
                    var8 = {};
                    var5 = 'requests';
                    var8['screen'] = var5;
                    var5 = 'friends';
                    var5 = var9.bind(var10)(var5, var8);
case 71:
                    return var6;
case 68:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var5 = 20;
                    var5 = var9[var5];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.getConfig;
                    var5 = {};
                    var10 = 'add-relationship-notification';
                    var5['location'] = var10;
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.enabled;
                    if(var5) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                    var8 = _closure1_slot19;
                    var8 = var8.bind(var6)();
                    SaveGenerator(address=290);
case 76:
                    return var8;
case 77:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(!var9) { _fun0007_ip = 74; continue _fun0007 }
case 78:
                    return var8;
case 74:
                    var7 = var7.user_id;
                    _closure4_slot0 = var7;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var8 = 21;
                    var8 = var12[var8];
                    var10 = var11.bind(var6)(var8);
                    var9 = var10.navigateToRootTab;
                    var8 = {};
                    var13 = 'notifications';
                    var8['screen'] = var13;
                    var8 = var9.bind(var10)(var8);
                    var9 = _closure1_slot2;
                    var8 = 22;
                    var8 = var12[var8];
                    var10 = var9.bind(var6)(var8);
                    var9 = var10.setTab;
                    var8 = 23;
                    var8 = var12[var8];
                    var8 = var11.bind(var6)(var8);
                    var8 = var8.NotificationCenterTabs;
                    var8 = var8.ForYou;
                    var8 = var9.bind(var10)(var8);
                    if(!var5) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                    var8 = _closure1_slot20;
                    var5 = _closure1_slot9;
                    var3 = function() {
                        var3 = _closure1_slot9;
                        var2 = var3.getUser;
                        var1 = _closure4_slot0;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var3 = var8.bind(var6)(var5, var3);
                    SaveGenerator(address=430);
case 81:
                    return var3;
case 82:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 83; continue _fun0007 }
case 79:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 24;
                    var4 = var9[var4];
                    var5 = var8.bind(var6)(var4);
                    var4 = {};
                    var4['userId'] = var7;
                    var7 = 25;
                    var7 = var9[var7];
                    var7 = var8.bind(var6)(var7);
                    var8 = var7.PUSH_NOTIFICATION;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var4['sourceAnalyticsLocations'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = undefined;
                    return var4;
case 83:
                    return var3;
case 67:
                    return var2;
case 64:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function _handleCallRingNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 84; continue _fun0008 }
case 3:
                    var _closure4_slot0 = var4;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 20;
                    var6 = var6[var3];
                    var3 = undefined;
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.getConfig;
                    var6 = {};
                    var9 = 'call-ring-notification';
                    var6['location'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.enabled;
                    if(var6) { _fun0008_ip = 85; continue _fun0008 }
case 43:
                    var6 = _closure1_slot19;
                    var6 = var6.bind(var3)();
                    SaveGenerator(address=87);
case 86:
                    return var6;
case 87:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!var7) { _fun0008_ip = 88; continue _fun0008 }
case 89:
                    return var6;
case 85:
                    var7 = _closure1_slot20;
                    var6 = _closure1_slot8;
                    var2 = function() {
                        var3 = _closure1_slot8;
                        var2 = var3.getChannel;
                        var1 = _closure4_slot0;
                        var1 = var1.channel_id;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var2 = var7.bind(var3)(var6, var2);
                    SaveGenerator(address=121);
case 90:
                    return var2;
case 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 91; continue _fun0008 }
case 88:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 27;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.transitionToChannel;
                    var4 = var4.channel_id;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 91:
                    return var2;
case 84:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function _handleCallConnectNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 92; continue _fun0009 }
case 3:
                    var _closure4_slot0 = var4;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 20;
                    var6 = var6[var3];
                    var3 = undefined;
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.getConfig;
                    var6 = {};
                    var9 = 'call-connect-notification';
                    var6['location'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.enabled;
                    if(var6) { _fun0009_ip = 85; continue _fun0009 }
case 43:
                    var6 = _closure1_slot19;
                    var6 = var6.bind(var3)();
                    SaveGenerator(address=87);
case 86:
                    return var6;
case 87:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!var7) { _fun0009_ip = 13; continue _fun0009 }
case 89:
                    return var6;
case 85:
                    var7 = _closure1_slot20;
                    var6 = _closure1_slot8;
                    var2 = function() {
                        var3 = _closure1_slot8;
                        var2 = var3.getChannel;
                        var1 = _closure4_slot0;
                        var1 = var1.channel_id;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var2 = var7.bind(var3)(var6, var2);
                    SaveGenerator(address=121);
case 90:
                    return var2;
case 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0009_ip = 93; continue _fun0009 }
case 13:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 27;
                    var6 = var9[var6];
                    var10 = var8.bind(var3)(var6);
                    var7 = var10.transitionToChannel;
                    var6 = var4.channel_id;
                    var6 = var7.bind(var10)(var6);
                    var14 = _closure1_slot1;
                    var6 = 28;
                    var6 = var9[var6];
                    var11 = var14.bind(var3)(var6);
                    var10 = var11.call;
                    var7 = var4.channel_id;
                    var6 = false;
                    var6 = var10.bind(var11)(var7, var6, var6);
                    var6 = 29;
                    var7 = var9[var6];
                    var13 = var14.bind(var3)(var7);
                    var11 = var13.track;
                    var7 = _closure1_slot11;
                    var10 = var7.RING_CALL_ACCEPTED;
                    var7 = {};
                    var12 = 25;
                    var12 = var9[var12];
                    var12 = var14.bind(var3)(var12);
                    var12 = var12.PUSH_NOTIFICATION;
                    var7['location'] = var12;
                    var12 = var4.guild_id;
                    var7['guild_id'] = var12;
                    var12 = var4.user_id;
                    var7['ringer_user_id'] = var12;
                    var12 = 30;
                    var14 = var9[var12];
                    var16 = var8.bind(var3)(var14);
                    var15 = var16.collectChannelAnalyticsMetadataFromId;
                    var14 = var4.channel_id;
                    var18 = var15.bind(var16)(var14);
                    var19 = var7;
                    var14 = copyDataProperties(var19, var18);
                    var7 = var11.bind(var13)(var10, var7);
                    var7 = 31;
                    var7 = var9[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.isAndroid;
                    var7 = var7.bind(var8)();
                    if(!var7) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                    var7 = var4.is_fullscreen_call_ui;
                    if(!var7) { _fun0009_ip = 96; continue _fun0009 }
case 97:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var6 = var10[var6];
                    var9 = var7.bind(var3)(var6);
                    var8 = var9.track;
                    var6 = _closure1_slot11;
                    var7 = var6.CALLKIT_CLICKED;
                    var6 = {};
                    var11 = 'join';
                    var6['action_type'] = var11;
                    var11 = _closure1_slot0;
                    var10 = var10[var12];
                    var12 = var11.bind(var3)(var10);
                    var11 = var12.collectChannelAnalyticsMetadataFromId;
                    var10 = var4.channel_id;
                    var18 = var11.bind(var12)(var10);
                    var19 = var6;
                    var10 = copyDataProperties(var19, var18);
                    var6 = var8.bind(var9)(var7, var6);
case 96:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 32;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var4 = var4.channel_id;
                    var4 = var5.bind(var3)(var4);
case 94:
                    return var3;
case 93:
                    return var2;
case 92:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function _handleFriendSuggestionCreateNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 98; continue _fun0010 }
case 99:
                    var4 = undefined;
                    var _closure4_slot0 = var4;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 20;
                    var2 = var7[var2];
                    var7 = var6.bind(var4)(var2);
                    var6 = var7.getConfig;
                    var2 = {};
                    var8 = 'friend-suggestion-create-notification';
                    var2['location'] = var8;
                    var2 = var6.bind(var7)(var2);
                    var6 = var2.enabled;
                    if(var6) { _fun0010_ip = 89; continue _fun0010 }
case 100:
                    var2 = _closure1_slot19;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=84);
case 28:
                    return var2;
case 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(!var7) { _fun0010_ip = 89; continue _fun0010 }
case 31:
                    return var2;
case 89:
                    var2 = _closure1_slot22;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=105);
case 20:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0010_ip = 101; continue _fun0010 }
case 18:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var7 = 14;
                    var7 = var9[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.getRootNavigationRef;
                    var10 = var7.bind(var8)();
                    var7 = null;
                    if(!(var7 != var10)) { _fun0010_ip = 102; continue _fun0010 }
case 103:
                    var9 = var10.navigate;
                    var8 = {};
                    var7 = 'add-friends';
                    var8['screen'] = var7;
                    var7 = {};
                    var11 = 'Notifications';
                    var7['sourcePage'] = var11;
                    var8['params'] = var7;
                    var7 = 'friends';
                    var7 = var9.bind(var10)(var7, var8);
case 102:
                    var7 = arg1;
                    var7 = var7.user_id;
                    _closure4_slot0 = var7;
                    if(!var6) { _fun0010_ip = 53; continue _fun0010 }
case 48:
                    var8 = _closure1_slot20;
                    var6 = _closure1_slot9;
                    var3 = function() {
                        var3 = _closure1_slot9;
                        var2 = var3.getUser;
                        var1 = _closure4_slot0;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var3 = var8.bind(var4)(var6, var3);
                    SaveGenerator(address=236);
case 104:
                    return var3;
case 105:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 106; continue _fun0010 }
case 53:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var5 = 24;
                    var5 = var9[var5];
                    var6 = var8.bind(var4)(var5);
                    var5 = {};
                    var5['userId'] = var7;
                    var7 = 25;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var8 = var7.PUSH_NOTIFICATION;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var5['sourceAnalyticsLocations'] = var7;
                    var5 = var6.bind(var4)(var5);
                    return var4;
case 106:
                    return var3;
case 101:
                    return var2;
case 98:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function _maybeAckNotificationCenter() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 107; continue _fun0011 }
case 7:
                    var2 = 'notification_center_id';
                    var3 = var2 in var6;
                    var2 = null;
                    var9 = null;
                    if(!var3) { _fun0011_ip = 65; continue _fun0011 }
case 108:
                    var9 = var6.notification_center_id;
case 65:
                    var3 = 'since';
                    var3 = var3 in var6;
                    var5 = null;
                    if(!var3) { _fun0011_ip = 109; continue _fun0011 }
case 110:
                    var5 = var6.since;
case 109:
                    var4 = var6.type;
                    var3 = 'RELATIONSHIP_ADD';
                    if(!(var3 === var4)) { _fun0011_ip = 111; continue _fun0011 }
case 112:
                    var3 = global;
                    var8 = var3.Number;
                    var4 = var6.rel_type;
                    var7 = undefined;
                    var10 = var8.bind(var7)(var4);
                    var8 = _closure1_slot13;
                    var8 = var8.PENDING_INCOMING;
                    if(!(var10 === var8)) { _fun0011_ip = 111; continue _fun0011 }
case 113:
                    if(!(var2 == var5)) { _fun0011_ip = 114; continue _fun0011 }
case 111:
                    if(!(var2 != var9)) { _fun0011_ip = 115; continue _fun0011 }
case 116:
                    var2 = _closure1_slot19;
                    var10 = undefined;
                    var2 = var2.bind(var10)();
                    SaveGenerator(address=132);
case 13:
                    return var2;
case 117:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0011_ip = 118; continue _fun0011 }
case 12:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 34;
                    var5 = var11[var5];
                    var8 = var8.bind(var10)(var5);
                    var5 = var8.markNotificationCenterRemoteItemAcked;
                    var5 = var5.bind(var8)(var9);
                    _fun0011_ip = 115; continue _fun0011;
case 118:
                    return var2;
case 114:
                    var2 = _closure1_slot19;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=189);
case 119:
                    return var2;
case 120:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 121; continue _fun0011 }
case 122:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 33;
                    var5 = var8[var5];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.fromTimestamp;
                    var12 = var3.Date;
                    var11 = var3.String;
                    var5 = var6.since;
                    var15 = var11.bind(var7)(var5);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var16 = var11;
                    var5 = new var16[var12](var15, var14);
                    var11 = var5 instanceof Object ? var5 : var11;
                    var5 = var11.getTime;
                    var5 = var5.bind(var11)();
                    var9 = var9.bind(var10)(var5);
                    var5 = _closure1_slot0;
                    var4 = 34;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.markNotificationCenterLocalItemsAcked;
                    var8 = var6.user_id;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = 'incoming_friend_requests_';
                    var3 = '_';
                    var6 = var7.bind(var6)(var8, var3, var9);
                    var3 = new Array(1);
                    var3[0] = var6;
                    var3 = var4.bind(var5)(var3);
case 115:
                    var3 = undefined;
                    return var3;
case 121:
                    return var2;
case 107:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function receiveNotification_(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 41;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.initializeRouteManagerIfNeeded;
            var1 = var1.bind(var4)();
            var1 = var5.type;
            var4 = 'MESSAGE_CREATE';
            if(!(var4 !== var1)) { _fun0012_ip = 123; continue _fun0012 }
case 124:
            var9 = var5.type;
            var7 = 'GENERIC_PUSH_NOTIFICATION_SENT';
            var1 = false;
            if(!(var7 === var9)) { _fun0012_ip = 125; continue _fun0012 }
case 126:
            var7 = var5.deeplink;
            var10 = null;
            var7 = var10 != var7;
            var1 = false;
            if(!var7) { _fun0012_ip = 125; continue _fun0012 }
case 127:
            var9 = var5.deeplink;
            var7 = '';
            var1 = false;
            if(!(var7 !== var9)) { _fun0012_ip = 125; continue _fun0012 }
case 90:
            var11 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 43;
            var7 = var9[var7];
            var11 = var11.bind(var3)(var7);
            var7 = var5.deeplink;
            var7 = var11.bind(var3)(var7);
            var7 = var7.payload;
            var11 = var7.type;
            var12 = _closure1_slot0;
            var13 = 44;
            var9 = var9[var13];
            var9 = var12.bind(var3)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.MESSAGE;
            if(!(var11 !== var9)) { _fun0012_ip = 128; continue _fun0012 }
case 129:
            var11 = var7.type;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var12.bind(var3)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.ICYMI;
            if(!(var11 === var9)) { _fun0012_ip = 130; continue _fun0012 }
case 104:
            var9 = var5.channel_id;
            if(!(var10 != var9)) { _fun0012_ip = 130; continue _fun0012 }
case 131:
            var9 = var5.message_id;
            if(!(var10 == var9)) { _fun0012_ip = 132; continue _fun0012 }
case 130:
            var11 = var7.type;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var12.bind(var3)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.ICYMI;
            var1 = false;
            if(!(var11 === var9)) { _fun0012_ip = 125; continue _fun0012 }
case 74:
            var9 = var5.user_id;
            var9 = var10 != var9;
            var1 = false;
            if(!var9) { _fun0012_ip = 125; continue _fun0012 }
case 133:
            var9 = var5.notification_center_id;
            var9 = var10 != var9;
            var1 = false;
            if(!var9) { _fun0012_ip = 125; continue _fun0012 }
case 134:
            var9 = var5.status_emoji_id;
            var9 = var10 != var9;
            var11 = null;
            if(!var9) { _fun0012_ip = 135; continue _fun0012 }
case 136:
            var12 = var5.status_emoji_id;
            var9 = '0';
            var11 = null;
            if(!(var9 !== var12)) { _fun0012_ip = 135; continue _fun0012 }
case 137:
            var11 = var5.status_emoji_id;
case 135:
            var12 = {};
            var9 = var5.notification_center_id;
            var12['id'] = var9;
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 47;
            var9 = var13[var9];
            var9 = var14.bind(var3)(var9);
            var9 = var9.ICYMIItemTypes;
            var9 = var9.CUSTOM_STATUS;
            var12['type'] = var9;
            var9 = 1000;
            var12['score'] = var9;
            var9 = {};
            var14 = var5.user_id;
            var9['user_id'] = var14;
            var14 = var5.status_text;
            var9['text'] = var14;
            var9['emoji_id'] = var11;
            var11 = var5.status_emoji_name;
            var9['emoji_name'] = var11;
            var11 = var5.status_emoji_animated;
            var11 = !var11;
            var11 = !var11;
            var9['emoji_animated'] = var11;
            var12['data'] = var9;
            var11 = _closure1_slot1;
            var9 = 46;
            var9 = var13[var9];
            var11 = var11.bind(var3)(var9);
            var9 = var11.fetchForStatusNotification;
            var9 = var9.bind(var11)(var12);
            var1 = false;
            _fun0012_ip = 125; continue _fun0012;
case 132:
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var9 = 46;
            var9 = var12[var9];
            var13 = var11.bind(var3)(var9);
            var12 = var13.fetchForNotification;
            var11 = var5.channel_id;
            var9 = var5.message_id;
            var9 = var12.bind(var13)(var11, var9);
            var1 = false;
            _fun0012_ip = 125; continue _fun0012;
case 128:
            var8 = var10 == var5;
            var12 = undefined;
            if(var8) { _fun0012_ip = 138; continue _fun0012 }
case 139:
            var12 = var5.tracking_type;
case 138:
            if(!(var10 == var12)) { _fun0012_ip = 140; continue _fun0012 }
case 141:
            var12 = var5.type;
case 140:
            var8 = var10 != var12;
            if(!var8) { _fun0012_ip = 142; continue _fun0012 }
case 143:
            var9 = var7.messageId;
            var8 = var10 != var9;
case 142:
            if(!var8) { _fun0012_ip = 144; continue _fun0012 }
case 145:
            var9 = var7.channelId;
            var8 = var10 != var9;
case 144:
            if(!var8) { _fun0012_ip = 146; continue _fun0012 }
case 147:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var8 = 45;
            var8 = var10[var8];
            var11 = var9.bind(var3)(var8);
            var10 = var11.receivedNotification;
            var9 = var7.messageId;
            var8 = var7.channelId;
            var8 = var10.bind(var11)(var9, var8, var12);
case 146:
            var9 = _closure1_slot1;
            var10 = _closure1_slot3;
            var8 = 42;
            var8 = var10[var8];
            var10 = var9.bind(var3)(var8);
            var9 = var10.fetchMessages;
            var8 = {};
            var11 = var7.guildId;
            var8['guildId'] = var11;
            var11 = var7.channelId;
            var8['channelId'] = var11;
            var7 = var7.messageId;
            var8['messageId'] = var7;
            var7 = true;
            var8['isPreload'] = var7;
            var8 = var9.bind(var10)(var8);
            var1 = true;
case 125:
            var9 = _closure1_slot17;
            var8 = var9.log;
            var11 = var5.type;
            var7 = global;
            var7 = var7.HermesInternal;
            var10 = var7.concat;
            var7 = 'Notification clicked of type ';
            var7 = var10.bind(var7)(var11);
            var7 = var8.bind(var9)(var7);
            _fun0012_ip = 148; continue _fun0012;
case 123:
            var9 = _closure1_slot17;
            var8 = var9.log;
            var24 = var5.type;
            var22 = var5.guild_id;
            var20 = var5.channel_id;
            var18 = var5.message_id;
            var7 = global;
            var7 = var7.HermesInternal;
            var13 = var7.concat;
            var25 = 'Notification clicked of type ';
            var23 = ' with guild:';
            var21 = ' channel:';
            var19 = ' message:';
            var7 = var25[var13](var24, var23, var22, var21, var20, var19, var18, var17);
            var7 = var8.bind(var9)(var7);
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var6 = 42;
            var6 = var8[var6];
            var9 = var7.bind(var3)(var6);
            var8 = var9.fetchMessages;
            var7 = {};
            var6 = var5.guild_id;
            var7['guildId'] = var6;
            var6 = var5.channel_id;
            var7['channelId'] = var6;
            var6 = var5.message_id;
            var7['messageId'] = var6;
            var6 = true;
            var7['isPreload'] = var6;
            var7 = var8.bind(var9)(var7);
            var1 = true;
case 148:
            var5 = var5.type;
            if(!(var4 !== var5)) { _fun0012_ip = 149; continue _fun0012 }
case 150:
            var4 = 'FORUM_THREAD_CREATED';
            if(!(var4 !== var5)) { _fun0012_ip = 149; continue _fun0012 }
case 151:
            var4 = 'RELATIONSHIP_ADD';
            if(!(var4 !== var5)) { _fun0012_ip = 149; continue _fun0012 }
case 152:
            var4 = 'CALL_RING';
            if(!(var4 !== var5)) { _fun0012_ip = 149; continue _fun0012 }
case 153:
            var4 = 'CALL_CONNECT';
            if(!(var4 !== var5)) { _fun0012_ip = 149; continue _fun0012 }
case 154:
            var4 = 'FRIEND_SUGGESTION_CREATE';
            if(!(var4 !== var5)) { _fun0012_ip = 149; continue _fun0012 }
case 155:
            var4 = 'STAGE_INSTANCE_CREATE';
            if(!(var4 !== var5)) { _fun0012_ip = 149; continue _fun0012 }
case 156:
            var4 = 'GUILD_SCHEDULED_EVENT_UPDATE';
            if(!(var4 !== var5)) { _fun0012_ip = 149; continue _fun0012 }
case 157:
            var4 = 'GUILD_STREAM_START';
            if(!(var4 !== var5)) { _fun0012_ip = 149; continue _fun0012 }
case 158:
            var4 = 'GENERIC_PUSH_NOTIFICATION_SENT';
            if(!(var4 !== var5)) { _fun0012_ip = 149; continue _fun0012 }
case 159:
            return var1;
case 149:
            var2 = function dispatch() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var6 = 48;
                    var2 = var7[var6];
                    var1 = undefined;
                    var9 = var5.bind(var1)(var2);
                    var8 = var9.dispatch;
                    var2 = {};
                    var10 = 'PUSH_NOTIFICATION_CLICK';
                    var2['type'] = var10;
                    var2 = var8.bind(var9)(var2);
                    var2 = 29;
                    var2 = var7[var2];
                    var10 = var5.bind(var1)(var2);
                    var9 = var10.track;
                    var2 = _closure1_slot11;
                    var8 = var2.NOTIFICATION_CLICKED;
                    var7 = {};
                    var11 = _closure2_slot0;
                    var5 = 'tracking_type';
                    var5 = var5 in var11;
                    var11 = _closure2_slot0;
                    if(var5) { _fun0013_ip = 21; continue _fun0013 }
case 160:
                    var5 = var11.type;
                    _fun0013_ip = 22; continue _fun0013;
case 21:
                    var5 = var11.tracking_type;
case 22:
                    var7['notif_type'] = var5;
                    var11 = _closure2_slot0;
                    var5 = 'user_id';
                    var12 = var5 in var11;
                    var5 = null;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 161; continue _fun0013 }
case 162:
                    var12 = _closure2_slot0;
                    var11 = var12.user_id;
case 161:
                    var7['notif_user_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 114; continue _fun0013 }
case 163:
                    var12 = _closure2_slot0;
                    var11 = var12.message_id;
case 114:
                    var7['message_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message_type_';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 164; continue _fun0013 }
case 165:
                    var12 = _closure2_slot0;
                    var11 = var12.message_type_;
case 164:
                    var7['message_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message';
                    var11 = var11 in var12;
                    if(!var11) { _fun0013_ip = 166; continue _fun0013 }
case 167:
                    var12 = _closure2_slot0;
                    var12 = var12.message;
                    var11 = var5 != var12;
case 166:
                    var7['has_message'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'guild_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 168; continue _fun0013 }
case 169:
                    var12 = _closure2_slot0;
                    var11 = var12.guild_id;
case 168:
                    var7['guild_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'channel_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 170; continue _fun0013 }
case 171:
                    var12 = _closure2_slot0;
                    var11 = var12.channel_id;
case 170:
                    var7['channel_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'channel_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 172; continue _fun0013 }
case 173:
                    var12 = _closure2_slot0;
                    var11 = var12.channel_type;
case 172:
                    var7['channel_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'rel_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 174; continue _fun0013 }
case 175:
                    var12 = global;
                    var13 = var12.Number;
                    var12 = _closure2_slot0;
                    var12 = var12.rel_type;
                    var11 = var13.bind(var1)(var12);
case 174:
                    var7['rel_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notification_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 176; continue _fun0013 }
case 177:
                    var12 = _closure2_slot0;
                    var11 = var12.notification_id;
case 176:
                    var7['notification_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'image_url';
                    var11 = var11 in var12;
                    if(!var11) { _fun0013_ip = 178; continue _fun0013 }
case 96:
                    var12 = _closure2_slot0;
                    var12 = var12.image_url;
                    var11 = var5 != var12;
case 178:
                    var7['has_image_thumbnail'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'join_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 179; continue _fun0013 }
case 180:
                    var12 = _closure2_slot0;
                    var11 = var12.join_id;
case 179:
                    var7['join_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notif_instance_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 181; continue _fun0013 }
case 182:
                    var12 = _closure2_slot0;
                    var11 = var12.notif_instance_id;
case 181:
                    var7['notif_instance_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notif_type_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 183; continue _fun0013 }
case 184:
                    var12 = _closure2_slot0;
                    var11 = var12.notif_type_id;
case 183:
                    var7['notif_type_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'mention_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 185; continue _fun0013 }
case 186:
                    var12 = _closure2_slot0;
                    var11 = var12.mention_type;
case 185:
                    var7['mention_type'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var7 = _closure2_slot0;
                    var8 = function maybeAckNotificationCenter() {
                        var1 = undefined;
                        var4 = _closure1_slot32;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var8 = var8.bind(var1)(var7);
                    var8 = var7.type;
                    var7 = 'MESSAGE_CREATE';
                    if(!(var7 !== var8)) { _fun0013_ip = 187; continue _fun0013 }
case 188:
                    var7 = 'FORUM_THREAD_CREATED';
                    if(!(var7 !== var8)) { _fun0013_ip = 189; continue _fun0013 }
case 144:
                    var7 = 'RELATIONSHIP_ADD';
                    if(!(var7 !== var8)) { _fun0013_ip = 190; continue _fun0013 }
case 191:
                    var7 = 'CALL_RING';
                    if(!(var7 !== var8)) { _fun0013_ip = 192; continue _fun0013 }
case 193:
                    var7 = 'CALL_CONNECT';
                    if(!(var7 !== var8)) { _fun0013_ip = 194; continue _fun0013 }
case 195:
                    var7 = 'FRIEND_SUGGESTION_CREATE';
                    if(!(var7 !== var8)) { _fun0013_ip = 196; continue _fun0013 }
case 197:
                    var7 = 'GUILD_STREAM_START';
                    if(!(var7 !== var8)) { _fun0013_ip = 198; continue _fun0013 }
case 199:
                    var7 = 'GUILD_SCHEDULED_EVENT_UPDATE';
                    if(!(var7 !== var8)) { _fun0013_ip = 200; continue _fun0013 }
case 201:
                    var7 = 'STAGE_INSTANCE_CREATE';
                    if(!(var7 !== var8)) { _fun0013_ip = 202; continue _fun0013 }
case 203:
                    var7 = 'GENERIC_PUSH_NOTIFICATION_SENT';
                    if(!(var7 === var8)) { _fun0013_ip = 204; continue _fun0013 }
case 205:
                    var7 = _closure2_slot0;
                    var7 = var7.deeplink;
                    if(!(var5 != var7)) { _fun0013_ip = 204; continue _fun0013 }
case 206:
                    var7 = _closure2_slot0;
                    var8 = var7.deeplink;
                    var7 = '';
                    if(!(var7 !== var8)) { _fun0013_ip = 204; continue _fun0013 }
case 207:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var7 = 43;
                    var7 = var11[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = _closure2_slot0;
                    var7 = var7.deeplink;
                    var7 = var8.bind(var1)(var7);
                    var9 = var7.payload;
                    var _closure3_slot0 = var9;
                    var8 = var9.type;
                    var10 = _closure1_slot0;
                    var7 = 44;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.LinkingTypes;
                    var7 = var7.GAME_UPDATE;
                    if(!(var8 !== var7)) { _fun0013_ip = 208; continue _fun0013 }
case 209:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var7 = 55;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var7['payload'] = var9;
                    var9 = false;
                    var7['waitForConnection'] = var9;
                    var7 = var8.bind(var1)(var7);
                    _fun0013_ip = 204; continue _fun0013;
case 208:
                    var7 = _closure1_slot19;
                    var9 = var7.bind(var1)();
                    var8 = var9.then;
                    var7 = function() {
                        var2 = _closure1_slot22;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.then;
                    var7 = function() {
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 21;
                        var5 = var2[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var5);
                        var6 = var7.navigateToRootTab;
                        var5 = {};
                        var8 = 'notifications';
                        var5['screen'] = var8;
                        var5 = var6.bind(var7)(var5);
                        var5 = _closure1_slot1;
                        var3 = 52;
                        var3 = var2[var3];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.openLazy;
                        var3 = 54;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 53;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var7 = _closure3_slot0;
                        var7 = var7.gameUpdateId;
                        var3['gameUpdateId'] = var7;
                        var2 = _closure3_slot0;
                        var2 = var2.gameId;
                        var3['gameId'] = var2;
                        var2 = _closure2_slot0;
                        var7 = var2.update_title;
                        var3['initialUpdateTitle'] = var7;
                        var2 = var2.start_date;
                        var3['initialStartDate'] = var2;
                        var2 = 'GameUpdateActionSheet';
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
                    _fun0013_ip = 204; continue _fun0013;
case 202:
                    var8 = _closure2_slot0;
                    var7 = function handleStageNotification() {
                        var1 = undefined;
                        var4 = _closure1_slot26;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var1)(var8);
                    var7 = !var7;
                    _fun0013_ip = 204; continue _fun0013;
case 200:
                    var8 = _closure2_slot0;
                    var7 = function handleGuildEventNotification() {
                        var1 = undefined;
                        var4 = _closure1_slot27;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var1)(var8);
                    var7 = !var7;
                    _fun0013_ip = 204; continue _fun0013;
case 198:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 51;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var9 = _closure1_slot15;
                    var9 = var9.GUILD;
                    var7['streamType'] = var9;
                    var9 = _closure2_slot0;
                    var10 = var9.user_id;
                    var7['ownerId'] = var10;
                    var10 = var9.guild_id;
                    var7['guildId'] = var10;
                    var9 = var9.channel_id;
                    var7['channelId'] = var9;
                    var7 = var8.bind(var1)(var7);
                    _fun0013_ip = 204; continue _fun0013;
case 196:
                    var8 = _closure2_slot0;
                    var7 = function handleFriendSuggestionCreateNotification() {
                        var1 = undefined;
                        var4 = _closure1_slot31;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var1)(var8);
                    var7 = !var7;
                    _fun0013_ip = 204; continue _fun0013;
case 194:
                    var8 = _closure2_slot0;
                    var7 = function handleCallConnectNotification() {
                        var1 = undefined;
                        var4 = _closure1_slot30;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var1)(var8);
                    var7 = !var7;
                    _fun0013_ip = 204; continue _fun0013;
case 192:
                    var8 = _closure2_slot0;
                    var7 = function handleCallRingNotification() {
                        var1 = undefined;
                        var4 = _closure1_slot29;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var1)(var8);
                    var7 = !var7;
                    _fun0013_ip = 204; continue _fun0013;
case 190:
                    var8 = _closure2_slot0;
                    var7 = function handleRelationshipAddNotification() {
                        var1 = undefined;
                        var4 = _closure1_slot28;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var1)(var8);
                    var7 = !var7;
                    _fun0013_ip = 204; continue _fun0013;
case 189:
                    var7 = _closure1_slot19;
                    var8 = var7.bind(var1)();
                    var7 = var8.then;
                    var4 = function() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 50;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.transitionTo;
                        var7 = _closure1_slot14;
                        var6 = var7.CHANNEL;
                        var2 = _closure2_slot0;
                        var3 = var2.guild_id;
                        var2 = var2.channel_id;
                        var3 = var6.bind(var7)(var3, var2);
                        var2 = {'navigationReplace': true, 'openChannel': true};
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var4 = var7.bind(var8)(var4);
                    _fun0013_ip = 204; continue _fun0013;
case 187:
                    var4 = _closure2_slot0;
                    var4 = var4.message;
                    if(!(var5 != var4)) { _fun0013_ip = 210; continue _fun0013 }
case 211:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var6];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.dispatch;
                    var4 = {'type': 'MESSAGE_CREATE', 'channelId': null, 'message': null, 'optimistic': true, 'isPushNotification': true};
                    var7 = _closure2_slot0;
                    var8 = var7.message;
                    var8 = var8.channel_id;
                    var4['channelId'] = var8;
                    var7 = var7.message;
                    var4['message'] = var7;
                    var4 = var5.bind(var6)(var4);
case 210:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 49;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 50;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.transitionTo;
                    var8 = _closure1_slot14;
                    var7 = var8.CHANNEL;
                    var2 = _closure2_slot0;
                    var6 = var2.guild_id;
                    var3 = var2.channel_id;
                    var2 = var2.message_id;
                    var3 = var7.bind(var8)(var6, var3, var2);
                    var2 = {'navigationReplace': true, 'openChannel': true};
                    var2 = var4.bind(var5)(var3, var2);
case 204:
                    return var1;
                }
            };
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var _closure1_slot33 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.addPostConnectionCallback;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationTypes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot11 = var8;
    var8 = var4.ComponentActions;
    var _closure1_slot12 = var8;
    var8 = var4.RelationshipTypes;
    var _closure1_slot13 = var8;
    var4 = var4.Routes;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StreamTypes;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'receiveNotification';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot17 = var4;
    var4 = 56;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/push_notifications/native/receiveNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function receiveNotification(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var1 = var3.getData;
            var5 = null;
            if(!(var5 != var1)) { _fun0014_ip = 212; continue _fun0014 }
case 213:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 35;
            var1 = var8[var1];
            var6 = undefined;
            var9 = var7.bind(var6)(var1);
            var7 = var9.trackAppOpened;
            var1 = 'notification';
            var1 = var7.bind(var9)(var1);
            var1 = var3.getData;
            var3 = var1.bind(var3)();
            var _closure2_slot0 = var3;
            var7 = _closure1_slot1;
            var1 = 36;
            var1 = var8[var1];
            var9 = var7.bind(var6)(var1);
            var8 = var9.mark;
            var10 = var3.type;
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var1 = 'Receive notification ';
            var7 = var7.bind(var1)(var10);
            var1 = '❗';
            var1 = var8.bind(var9)(var1, var7);
            var1 = var3.receiving_user_id;
            if(!(var5 != var1)) { _fun0014_ip = 119; continue _fun0014 }
case 161:
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var5 != var1)) { _fun0014_ip = 119; continue _fun0014 }
case 214:
            var5 = var3.receiving_user_id;
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var5 === var1)) { _fun0014_ip = 167; continue _fun0014 }
case 119:
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 40;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var7 = var1.Emitter;
            var5 = var7.batched;
            var1 = function() {
                var3 = _closure1_slot33;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var5.bind(var7)(var1);
            _fun0014_ip = 215; continue _fun0014;
case 167:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 37;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = 38;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = 39;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.switchAccount;
            var4 = var3.receiving_user_id;
            var3 = false;
            var4 = var5.bind(var6)(var4, var3);
            var3 = var4.then;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 40;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.Emitter;
                var3 = var4.batched;
                var2 = function() {
                    var3 = _closure1_slot33;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 215:
            return var1;
case 212:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();