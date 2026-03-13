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
                    var5 = arg1;
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
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 67; continue _fun0007 }
case 6:
                    var7 = global;
                    var8 = var7.Number;
                    var7 = var5.rel_type;
                    var8 = var8.bind(var6)(var7);
                    var7 = _closure1_slot13;
                    var7 = var7.PENDING_INCOMING;
                    if(!(var8 !== var7)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                    var7 = _closure1_slot13;
                    var7 = var7.FRIEND;
                    if(!(var8 === var7)) { _fun0007_ip = 4; continue _fun0007 }
case 70:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 25;
                    var7 = var9[var7];
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.openPrivateChannel;
                    var7 = {};
                    var10 = var5.user_id;
                    var7['recipientIds'] = var10;
                    var7 = var8.bind(var9)(var7);
                    _fun0007_ip = 71; continue _fun0007;
case 4:
                    var8 = var5.notification_type;
                    var7 = _closure1_slot10;
                    var7 = var7.REMINDER;
                    if(!(var8 === var7)) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var7 = 14;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.getRootNavigationRef;
                    var10 = var7.bind(var8)();
                    var7 = null;
                    if(!(var7 != var10)) { _fun0007_ip = 71; continue _fun0007 }
case 73:
                    var9 = var10.navigate;
                    var8 = {};
                    var7 = 'requests';
                    var8['screen'] = var7;
                    var7 = 'friends';
                    var7 = var9.bind(var10)(var7, var8);
case 71:
                    return var6;
case 68:
                    var7 = var5.user_id;
                    _closure4_slot0 = var7;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 20;
                    var5 = var11[var5];
                    var9 = var10.bind(var6)(var5);
                    var8 = var9.navigateToRootTab;
                    var5 = {};
                    var12 = 'notifications';
                    var5['screen'] = var12;
                    var5 = var8.bind(var9)(var5);
                    var8 = _closure1_slot2;
                    var5 = 21;
                    var5 = var11[var5];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.setTab;
                    var5 = 22;
                    var5 = var11[var5];
                    var5 = var10.bind(var6)(var5);
                    var5 = var5.NotificationCenterTabs;
                    var5 = var5.ForYou;
                    var5 = var8.bind(var9)(var5);
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
                    SaveGenerator(address=355);
case 74:
                    return var3;
case 75:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 23;
                    var4 = var9[var4];
                    var5 = var8.bind(var6)(var4);
                    var4 = {};
                    var4['userId'] = var7;
                    var7 = 24;
                    var7 = var9[var7];
                    var7 = var8.bind(var6)(var7);
                    var8 = var7.PUSH_NOTIFICATION;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var4['sourceAnalyticsLocations'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = undefined;
                    return var4;
case 76:
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
                    if(var3) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                    var _closure4_slot0 = var4;
                    var7 = _closure1_slot20;
                    var6 = _closure1_slot8;
                    var3 = undefined;
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
                    SaveGenerator(address=46);
case 80:
                    return var2;
case 81:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 82; continue _fun0008 }
case 83:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 26;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.transitionToChannel;
                    var4 = var4.channel_id;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 82:
                    return var2;
case 78:
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
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 84; continue _fun0009 }
case 3:
                    var _closure4_slot0 = var5;
                    var7 = _closure1_slot20;
                    var3 = _closure1_slot8;
                    var4 = undefined;
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
                    var2 = var7.bind(var4)(var3, var2);
                    SaveGenerator(address=49);
case 85:
                    return var2;
case 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 87; continue _fun0009 }
case 41:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 26;
                    var3 = var8[var3];
                    var8 = var7.bind(var4)(var3);
                    var7 = var8.transitionToChannel;
                    var3 = var5.channel_id;
                    var3 = var7.bind(var8)(var3);
                    var3 = _closure1_slot19;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=106);
case 88:
                    return var3;
case 89:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0009_ip = 90; continue _fun0009 }
case 91:
                    var13 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var7 = 27;
                    var7 = var10[var7];
                    var11 = var13.bind(var4)(var7);
                    var9 = var11.call;
                    var8 = var5.channel_id;
                    var7 = false;
                    var7 = var9.bind(var11)(var8, var7, var7);
                    var7 = 28;
                    var8 = var10[var7];
                    var14 = var13.bind(var4)(var8);
                    var12 = var14.track;
                    var8 = _closure1_slot11;
                    var11 = var8.RING_CALL_ACCEPTED;
                    var8 = {};
                    var9 = 24;
                    var9 = var10[var9];
                    var9 = var13.bind(var4)(var9);
                    var9 = var9.PUSH_NOTIFICATION;
                    var8['location'] = var9;
                    var9 = var5.guild_id;
                    var8['guild_id'] = var9;
                    var9 = var5.user_id;
                    var8['ringer_user_id'] = var9;
                    var9 = _closure1_slot0;
                    var13 = 29;
                    var15 = var10[var13];
                    var17 = var9.bind(var4)(var15);
                    var16 = var17.collectChannelAnalyticsMetadataFromId;
                    var15 = var5.channel_id;
                    var19 = var16.bind(var17)(var15);
                    var20 = var8;
                    var15 = copyDataProperties(var20, var19);
                    var8 = var12.bind(var14)(var11, var8);
                    var8 = 30;
                    var8 = var10[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = var9.isAndroid;
                    var8 = var8.bind(var9)();
                    if(!var8) { _fun0009_ip = 92; continue _fun0009 }
case 93:
                    var8 = var5.is_fullscreen_call_ui;
                    if(!var8) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var7 = var11[var7];
                    var10 = var8.bind(var4)(var7);
                    var9 = var10.track;
                    var7 = _closure1_slot11;
                    var8 = var7.CALLKIT_CLICKED;
                    var7 = {};
                    var12 = 'join';
                    var7['action_type'] = var12;
                    var12 = _closure1_slot0;
                    var11 = var11[var13];
                    var13 = var12.bind(var4)(var11);
                    var12 = var13.collectChannelAnalyticsMetadataFromId;
                    var11 = var5.channel_id;
                    var19 = var12.bind(var13)(var11);
                    var20 = var7;
                    var11 = copyDataProperties(var20, var19);
                    var7 = var9.bind(var10)(var8, var7);
case 94:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 31;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var5 = var5.channel_id;
                    var5 = var6.bind(var4)(var5);
case 92:
                    return var4;
case 90:
                    return var3;
case 87:
                    return var2;
case 84:
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
                    if(var2) { _fun0010_ip = 96; continue _fun0010 }
case 79:
                    var4 = undefined;
                    var _closure4_slot0 = var4;
                    var2 = _closure1_slot22;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=33);
case 25:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 97; continue _fun0010 }
case 8:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var6 = 14;
                    var6 = var8[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.getRootNavigationRef;
                    var9 = var6.bind(var7)();
                    var6 = null;
                    if(!(var6 != var9)) { _fun0010_ip = 30; continue _fun0010 }
case 98:
                    var8 = var9.navigate;
                    var7 = {};
                    var6 = 'add-friends';
                    var7['screen'] = var6;
                    var6 = {};
                    var10 = 'Notifications';
                    var6['sourcePage'] = var10;
                    var7['params'] = var6;
                    var6 = 'friends';
                    var6 = var8.bind(var9)(var6, var7);
case 30:
                    var6 = arg1;
                    var7 = var6.user_id;
                    _closure4_slot0 = var7;
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
                    SaveGenerator(address=161);
case 99:
                    return var3;
case 72:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 100; continue _fun0010 }
case 101:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var5 = 23;
                    var5 = var9[var5];
                    var6 = var8.bind(var4)(var5);
                    var5 = {};
                    var5['userId'] = var7;
                    var7 = 24;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var8 = var7.PUSH_NOTIFICATION;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var5['sourceAnalyticsLocations'] = var7;
                    var5 = var6.bind(var4)(var5);
                    return var4;
case 100:
                    return var3;
case 97:
                    return var2;
case 96:
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
                    if(var2) { _fun0011_ip = 102; continue _fun0011 }
case 7:
                    var2 = 'notification_center_id';
                    var3 = var2 in var6;
                    var2 = null;
                    var9 = null;
                    if(!var3) { _fun0011_ip = 65; continue _fun0011 }
case 103:
                    var9 = var6.notification_center_id;
case 65:
                    var3 = 'since';
                    var3 = var3 in var6;
                    var5 = null;
                    if(!var3) { _fun0011_ip = 104; continue _fun0011 }
case 85:
                    var5 = var6.since;
case 104:
                    var4 = var6.type;
                    var3 = 'RELATIONSHIP_ADD';
                    if(!(var3 === var4)) { _fun0011_ip = 105; continue _fun0011 }
case 106:
                    var3 = global;
                    var8 = var3.Number;
                    var4 = var6.rel_type;
                    var7 = undefined;
                    var10 = var8.bind(var7)(var4);
                    var8 = _closure1_slot13;
                    var8 = var8.PENDING_INCOMING;
                    if(!(var10 === var8)) { _fun0011_ip = 105; continue _fun0011 }
case 88:
                    if(!(var2 == var5)) { _fun0011_ip = 107; continue _fun0011 }
case 105:
                    if(!(var2 != var9)) { _fun0011_ip = 108; continue _fun0011 }
case 91:
                    var2 = _closure1_slot19;
                    var10 = undefined;
                    var2 = var2.bind(var10)();
                    SaveGenerator(address=132);
case 13:
                    return var2;
case 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0011_ip = 110; continue _fun0011 }
case 12:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 33;
                    var5 = var11[var5];
                    var8 = var8.bind(var10)(var5);
                    var5 = var8.markNotificationCenterRemoteItemAcked;
                    var5 = var5.bind(var8)(var9);
                    _fun0011_ip = 108; continue _fun0011;
case 110:
                    return var2;
case 107:
                    var2 = _closure1_slot19;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=189);
case 111:
                    return var2;
case 112:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 113; continue _fun0011 }
case 114:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 32;
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
                    var4 = 33;
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
case 108:
                    var3 = undefined;
                    return var3;
case 113:
                    return var2;
case 102:
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
            var1 = 40;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.initializeRouteManagerIfNeeded;
            var1 = var1.bind(var4)();
            var8 = false;
            var _closure2_slot1 = var8;
            var1 = var5.type;
            var4 = 'MESSAGE_CREATE';
            if(!(var4 !== var1)) { _fun0012_ip = 115; continue _fun0012 }
case 106:
            var9 = var5.type;
            var7 = 'GENERIC_PUSH_NOTIFICATION_SENT';
            var1 = false;
            if(!(var7 === var9)) { _fun0012_ip = 116; continue _fun0012 }
case 117:
            var7 = var5.deeplink;
            var10 = null;
            var7 = var10 != var7;
            var1 = false;
            if(!var7) { _fun0012_ip = 116; continue _fun0012 }
case 89:
            var9 = var5.deeplink;
            var7 = '';
            var1 = false;
            if(!(var7 !== var9)) { _fun0012_ip = 116; continue _fun0012 }
case 118:
            var11 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 42;
            var7 = var9[var7];
            var11 = var11.bind(var3)(var7);
            var7 = var5.deeplink;
            var7 = var11.bind(var3)(var7);
            var7 = var7.payload;
            var11 = var7.type;
            var12 = _closure1_slot0;
            var13 = 43;
            var9 = var9[var13];
            var9 = var12.bind(var3)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.MESSAGE;
            if(!(var11 !== var9)) { _fun0012_ip = 119; continue _fun0012 }
case 120:
            var11 = var7.type;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var12.bind(var3)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.ICYMI;
            if(!(var11 === var9)) { _fun0012_ip = 121; continue _fun0012 }
case 52:
            var9 = var5.channel_id;
            if(!(var10 != var9)) { _fun0012_ip = 121; continue _fun0012 }
case 122:
            var9 = var5.message_id;
            if(!(var10 == var9)) { _fun0012_ip = 123; continue _fun0012 }
case 121:
            var11 = var7.type;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var12.bind(var3)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.ICYMI;
            var1 = false;
            if(!(var11 === var9)) { _fun0012_ip = 116; continue _fun0012 }
case 124:
            var9 = var5.user_id;
            var9 = var10 != var9;
            var1 = false;
            if(!var9) { _fun0012_ip = 116; continue _fun0012 }
case 125:
            var9 = var5.notification_center_id;
            var9 = var10 != var9;
            var1 = false;
            if(!var9) { _fun0012_ip = 116; continue _fun0012 }
case 126:
            var9 = var5.status_emoji_id;
            var9 = var10 != var9;
            var11 = null;
            if(!var9) { _fun0012_ip = 127; continue _fun0012 }
case 113:
            var12 = var5.status_emoji_id;
            var9 = '0';
            var11 = null;
            if(!(var9 !== var12)) { _fun0012_ip = 127; continue _fun0012 }
case 128:
            var11 = var5.status_emoji_id;
case 127:
            var12 = {};
            var9 = var5.notification_center_id;
            var12['id'] = var9;
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 46;
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
            var9 = 45;
            var9 = var13[var9];
            var11 = var11.bind(var3)(var9);
            var9 = var11.fetchForStatusNotification;
            var9 = var9.bind(var11)(var12);
            var1 = false;
            _fun0012_ip = 116; continue _fun0012;
case 123:
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var9 = 45;
            var9 = var12[var9];
            var13 = var11.bind(var3)(var9);
            var12 = var13.fetchForNotification;
            var11 = var5.channel_id;
            var9 = var5.message_id;
            var9 = var12.bind(var13)(var11, var9);
            var1 = false;
            _fun0012_ip = 116; continue _fun0012;
case 119:
            var8 = var10 == var5;
            var12 = undefined;
            if(var8) { _fun0012_ip = 129; continue _fun0012 }
case 130:
            var12 = var5.tracking_type;
case 129:
            if(!(var10 == var12)) { _fun0012_ip = 131; continue _fun0012 }
case 132:
            var12 = var5.type;
case 131:
            var8 = var10 != var12;
            if(!var8) { _fun0012_ip = 133; continue _fun0012 }
case 134:
            var9 = var7.messageId;
            var8 = var10 != var9;
case 133:
            if(!var8) { _fun0012_ip = 135; continue _fun0012 }
case 136:
            var9 = var7.channelId;
            var8 = var10 != var9;
case 135:
            if(!var8) { _fun0012_ip = 137; continue _fun0012 }
case 138:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var8 = 44;
            var8 = var10[var8];
            var11 = var9.bind(var3)(var8);
            var10 = var11.receivedNotification;
            var9 = var7.messageId;
            var8 = var7.channelId;
            var8 = var10.bind(var11)(var9, var8, var12);
case 137:
            var9 = _closure1_slot1;
            var10 = _closure1_slot3;
            var8 = 41;
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
            _closure2_slot1 = var7;
            var1 = true;
case 116:
            var9 = _closure1_slot17;
            var8 = var9.log;
            var11 = var5.type;
            var7 = global;
            var7 = var7.HermesInternal;
            var10 = var7.concat;
            var7 = 'Notification clicked of type ';
            var7 = var10.bind(var7)(var11);
            var7 = var8.bind(var9)(var7);
            _fun0012_ip = 139; continue _fun0012;
case 115:
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
            var6 = 41;
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
            _closure2_slot1 = var6;
            var1 = true;
case 139:
            var5 = var5.type;
            if(!(var4 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 141:
            var4 = 'FORUM_THREAD_CREATED';
            if(!(var4 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 142:
            var4 = 'RELATIONSHIP_ADD';
            if(!(var4 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 143:
            var4 = 'CALL_RING';
            if(!(var4 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 144:
            var4 = 'CALL_CONNECT';
            if(!(var4 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 145:
            var4 = 'FRIEND_SUGGESTION_CREATE';
            if(!(var4 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 146:
            var4 = 'STAGE_INSTANCE_CREATE';
            if(!(var4 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 147:
            var4 = 'GUILD_SCHEDULED_EVENT_UPDATE';
            if(!(var4 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 148:
            var4 = 'GUILD_STREAM_START';
            if(!(var4 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 149:
            var4 = 'GENERIC_PUSH_NOTIFICATION_SENT';
            if(!(var4 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 150:
            return var1;
case 140:
            var2 = function dispatch() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 47;
                    var4 = var7[var5];
                    var1 = undefined;
                    var9 = var6.bind(var1)(var4);
                    var8 = var9.dispatch;
                    var4 = {};
                    var10 = 'PUSH_NOTIFICATION_CLICK';
                    var4['type'] = var10;
                    var4 = var8.bind(var9)(var4);
                    var4 = 28;
                    var4 = var7[var4];
                    var10 = var6.bind(var1)(var4);
                    var9 = var10.track;
                    var4 = _closure1_slot11;
                    var8 = var4.NOTIFICATION_CLICKED;
                    var7 = {};
                    var11 = _closure2_slot0;
                    var4 = 'tracking_type';
                    var4 = var4 in var11;
                    var11 = _closure2_slot0;
                    if(var4) { _fun0013_ip = 21; continue _fun0013 }
case 151:
                    var4 = var11.type;
                    _fun0013_ip = 22; continue _fun0013;
case 21:
                    var4 = var11.tracking_type;
case 22:
                    var7['notif_type'] = var4;
                    var11 = _closure2_slot0;
                    var4 = 'user_id';
                    var12 = var4 in var11;
                    var4 = null;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 152; continue _fun0013 }
case 153:
                    var12 = _closure2_slot0;
                    var11 = var12.user_id;
case 152:
                    var7['notif_user_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 107; continue _fun0013 }
case 101:
                    var12 = _closure2_slot0;
                    var11 = var12.message_id;
case 107:
                    var7['message_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message_type_';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 154; continue _fun0013 }
case 155:
                    var12 = _closure2_slot0;
                    var11 = var12.message_type_;
case 154:
                    var7['message_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message';
                    var11 = var11 in var12;
                    if(!var11) { _fun0013_ip = 156; continue _fun0013 }
case 157:
                    var12 = _closure2_slot0;
                    var12 = var12.message;
                    var11 = var4 != var12;
case 156:
                    var7['has_message'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'guild_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 158; continue _fun0013 }
case 159:
                    var12 = _closure2_slot0;
                    var11 = var12.guild_id;
case 158:
                    var7['guild_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'channel_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 95; continue _fun0013 }
case 160:
                    var12 = _closure2_slot0;
                    var11 = var12.channel_id;
case 95:
                    var7['channel_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'channel_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 161; continue _fun0013 }
case 162:
                    var12 = _closure2_slot0;
                    var11 = var12.channel_type;
case 161:
                    var7['channel_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'rel_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 163; continue _fun0013 }
case 164:
                    var12 = global;
                    var13 = var12.Number;
                    var12 = _closure2_slot0;
                    var12 = var12.rel_type;
                    var11 = var13.bind(var1)(var12);
case 163:
                    var7['rel_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notification_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 165; continue _fun0013 }
case 166:
                    var12 = _closure2_slot0;
                    var11 = var12.notification_id;
case 165:
                    var7['notification_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'image_url';
                    var11 = var11 in var12;
                    if(!var11) { _fun0013_ip = 167; continue _fun0013 }
case 168:
                    var12 = _closure2_slot0;
                    var12 = var12.image_url;
                    var11 = var4 != var12;
case 167:
                    var7['has_image_thumbnail'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'join_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 169; continue _fun0013 }
case 170:
                    var12 = _closure2_slot0;
                    var11 = var12.join_id;
case 169:
                    var7['join_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notif_instance_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 171; continue _fun0013 }
case 172:
                    var12 = _closure2_slot0;
                    var11 = var12.notif_instance_id;
case 171:
                    var7['notif_instance_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notif_type_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 173; continue _fun0013 }
case 123:
                    var12 = _closure2_slot0;
                    var11 = var12.notif_type_id;
case 173:
                    var7['notif_type_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'mention_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0013_ip = 174; continue _fun0013 }
case 175:
                    var12 = _closure2_slot0;
                    var11 = var12.mention_type;
case 174:
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
                    if(!(var7 !== var8)) { _fun0013_ip = 176; continue _fun0013 }
case 177:
                    var7 = 'FORUM_THREAD_CREATED';
                    if(!(var7 !== var8)) { _fun0013_ip = 178; continue _fun0013 }
case 179:
                    var7 = 'RELATIONSHIP_ADD';
                    if(!(var7 !== var8)) { _fun0013_ip = 180; continue _fun0013 }
case 181:
                    var7 = 'CALL_RING';
                    if(!(var7 !== var8)) { _fun0013_ip = 182; continue _fun0013 }
case 183:
                    var7 = 'CALL_CONNECT';
                    if(!(var7 !== var8)) { _fun0013_ip = 184; continue _fun0013 }
case 185:
                    var7 = 'FRIEND_SUGGESTION_CREATE';
                    if(!(var7 !== var8)) { _fun0013_ip = 186; continue _fun0013 }
case 187:
                    var7 = 'GUILD_STREAM_START';
                    if(!(var7 !== var8)) { _fun0013_ip = 188; continue _fun0013 }
case 189:
                    var7 = 'GUILD_SCHEDULED_EVENT_UPDATE';
                    if(!(var7 !== var8)) { _fun0013_ip = 190; continue _fun0013 }
case 191:
                    var7 = 'STAGE_INSTANCE_CREATE';
                    if(!(var7 !== var8)) { _fun0013_ip = 192; continue _fun0013 }
case 193:
                    var7 = 'GENERIC_PUSH_NOTIFICATION_SENT';
                    if(!(var7 === var8)) { _fun0013_ip = 194; continue _fun0013 }
case 195:
                    var7 = _closure2_slot0;
                    var7 = var7.deeplink;
                    if(!(var4 != var7)) { _fun0013_ip = 194; continue _fun0013 }
case 196:
                    var7 = _closure2_slot0;
                    var8 = var7.deeplink;
                    var7 = '';
                    if(!(var7 !== var8)) { _fun0013_ip = 194; continue _fun0013 }
case 197:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var7 = 42;
                    var7 = var11[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = _closure2_slot0;
                    var7 = var7.deeplink;
                    var7 = var8.bind(var1)(var7);
                    var9 = var7.payload;
                    var _closure3_slot0 = var9;
                    var8 = var9.type;
                    var10 = _closure1_slot0;
                    var7 = 43;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.LinkingTypes;
                    var7 = var7.GAME_UPDATE;
                    if(!(var8 !== var7)) { _fun0013_ip = 198; continue _fun0013 }
case 199:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var7 = 54;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var7['payload'] = var9;
                    var9 = false;
                    var7['waitForConnection'] = var9;
                    var9 = _closure2_slot1;
                    var7['skipMessageFetch'] = var9;
                    var7 = var8.bind(var1)(var7);
                    _fun0013_ip = 194; continue _fun0013;
case 198:
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
                        var1 = 20;
                        var5 = var2[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var5);
                        var6 = var7.navigateToRootTab;
                        var5 = {};
                        var8 = 'notifications';
                        var5['screen'] = var8;
                        var5 = var6.bind(var7)(var5);
                        var5 = _closure1_slot1;
                        var3 = 51;
                        var3 = var2[var3];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.openLazy;
                        var3 = 53;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 52;
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
                    _fun0013_ip = 194; continue _fun0013;
case 192:
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
                    _fun0013_ip = 194; continue _fun0013;
case 190:
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
                    _fun0013_ip = 194; continue _fun0013;
case 188:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 50;
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
                    _fun0013_ip = 194; continue _fun0013;
case 186:
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
                    _fun0013_ip = 194; continue _fun0013;
case 184:
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
                    _fun0013_ip = 194; continue _fun0013;
case 182:
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
                    _fun0013_ip = 194; continue _fun0013;
case 180:
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
                    _fun0013_ip = 194; continue _fun0013;
case 178:
                    var7 = _closure1_slot19;
                    var8 = var7.bind(var1)();
                    var7 = var8.then;
                    var3 = function() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 49;
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
                    var3 = var7.bind(var8)(var3);
                    _fun0013_ip = 194; continue _fun0013;
case 176:
                    var3 = _closure2_slot0;
                    var3 = var3.message;
                    if(!(var4 != var3)) { _fun0013_ip = 200; continue _fun0013 }
case 201:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var5];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.dispatch;
                    var3 = {'type': 'MESSAGE_CREATE', 'channelId': null, 'message': null, 'optimistic': true, 'isPushNotification': true};
                    var7 = _closure2_slot0;
                    var8 = var7.message;
                    var8 = var8.channel_id;
                    var3['channelId'] = var8;
                    var7 = var7.message;
                    var3['message'] = var7;
                    var3 = var4.bind(var5)(var3);
case 200:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 48;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.popAll;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot0;
                    var3 = 49;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.transitionTo;
                    var9 = _closure1_slot14;
                    var8 = var9.CHANNEL;
                    var2 = _closure2_slot0;
                    var7 = var2.guild_id;
                    var3 = var2.channel_id;
                    var2 = var2.message_id;
                    var3 = var8.bind(var9)(var7, var3, var2);
                    var2 = {'navigationReplace': true, 'openChannel': true};
                    var6 = _closure2_slot1;
                    var2['skipMessageFetch'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 194:
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
    var4 = 55;
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
            if(!(var5 != var1)) { _fun0014_ip = 202; continue _fun0014 }
case 203:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 34;
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
            var1 = 35;
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
            if(!(var5 != var1)) { _fun0014_ip = 111; continue _fun0014 }
case 152:
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var5 != var1)) { _fun0014_ip = 111; continue _fun0014 }
case 204:
            var5 = var3.receiving_user_id;
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var5 === var1)) { _fun0014_ip = 157; continue _fun0014 }
case 111:
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 39;
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
            _fun0014_ip = 205; continue _fun0014;
case 157:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 36;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = 37;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = 38;
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
                var1 = 39;
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
case 205:
            return var1;
case 202:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();