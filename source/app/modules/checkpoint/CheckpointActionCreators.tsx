// app/modules/checkpoint/CheckpointActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _sendSidekickMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    var14 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var _closure4_slot0 = var11;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 11;
                    var2 = var6[var2];
                    var6 = undefined;
                    var7 = var3.bind(var6)(var2);
                    var3 = var7.openPrivateChannel;
                    var2 = {'recipientIds': null, 'location': 'checkpoint-sidekick', 'navigateToChannel': false};
                    var2['recipientIds'] = var14;
                    var9 = 'checkpoint-sidekick';
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=88);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var7 = _closure1_slot4;
                    var3 = var7.getChannel;
                    var3 = var3.bind(var7)(var2);
                    var7 = null;
                    if(!(var7 != var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var7 = _closure1_slot5;
                    var10 = var7.bind(var6)();
                    var7 = var10.findIndex;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.trim;
                        var2 = var1.bind(var2)();
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var15 = var7.bind(var10)(var5);
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 12;
                    var7 = var10[var7];
                    var13 = var5.bind(var6)(var7);
                    var12 = var13.track;
                    var4 = _closure1_slot6;
                    var7 = var4.CHECKPOINT_SIDEKICK_MESSAGE_SENT;
                    var4 = {};
                    var4['other_user_id'] = var14;
                    var14 = var15.toString;
                    var14 = var14.bind(var15)();
                    var4['message_variant'] = var14;
                    var4 = var12.bind(var13)(var7, var4);
                    var4 = 9;
                    var4 = var10[var4];
                    var7 = var5.bind(var6)(var4);
                    var4 = var7.parse;
                    var18 = var4.bind(var7)(var3, var11);
                    var4 = 10;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.sendMessage;
                    var19 = var3.id;
                    var3 = {};
                    var3['location'] = var9;
                    var20 = var6;
                    var17 = false;
                    var16 = var3;
                    var3 = var20[var5](var19, var18, var17, var16, var15);
                    return var3;
case 8:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var19 = 'Failed to open private channel';
                    var20 = var4;
                    var3 = new var20[var5](var19, var18);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _claimAvatarDecoration() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {'url': '/checkpoint/loot', 'rejectWithError': true};
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=66);
case 12:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15: // try_end0
                    return var2;
case 14:
                    return var2;
case 16: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = undefined;
                    return var2;
case 10:
                    return var1;
                }
            };
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.CHECKPOINT_LOVE_LETTER_STRINGS;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = arg2;
                    var2 = var2.withMessage;
                    var _closure4_slot0 = var2;
                    var4 = undefined;
                    SaveGenerator(address=34);
case 19:
                    return var4;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var3 = global;
                    var8 = var3.Promise;
                    var7 = var8.all;
                    var9 = var10.map;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 7;
                    var3 = var12[var3];
                    var3 = var11.bind(var4)(var3);
                    var3 = var3.getOrResolveChannelIdFromDestinationId;
                    var3 = var9.bind(var10)(var3);
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=105);
case 23:
                    return var3;
case 24:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var7 = var3.filter;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 8;
                    var6 = var9[var6];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.isNotNullish;
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.forEach;
                    var5 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var6 = arg1;
                            var3 = _closure1_slot4;
                            var2 = var3.getChannel;
                            var7 = var2.bind(var3)(var6);
                            var9 = null;
                            if(!(var9 != var7)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 9;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.parse;
                            var2 = _closure4_slot0;
                            var9 = var9 != var2;
                            var2 = '';
                            if(!var9) { _fun0004_ip = 29; continue _fun0004 }
case 14:
                            var2 = _closure4_slot0;
case 29:
                            var5 = var4.bind(var5)(var7, var2);
                            var2 = new Array(0);
                            var5['components'] = var2;
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 10;
                            var1 = var4[var1];
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.sendMessage;
                            var11 = false;
                            var10 = {'location': 'checkpoint', 'withCheckpoint': true};
                            var14 = var4;
                            var13 = var6;
                            var12 = var5;
                            var1 = var14[var3](var13, var12, var11, var10, var9);
case 27:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 25:
                    return var3;
case 21:
                    return var2;
case 17:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
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
    var4 = var4.bind(var1)();
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/checkpoint/CheckpointActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function fetchCheckpointData() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 6;
        var5 = var4[var2];
        var1 = undefined;
        var7 = var3.bind(var1)(var5);
        var6 = var7.dispatch;
        var5 = {};
        var8 = 'CHECKPOINT_FETCH_START';
        var5['type'] = var8;
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHECKPOINT_FETCH_FAILED';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['fetchCheckpointData'] = var5;
    var3['sendCheckpointMessage'] = var4;
    var4 = function sendSidekickMessage() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendSidekickMessage'] = var4;
    var4 = function claimAvatarDecoration() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['claimAvatarDecoration'] = var4;
    var4 = function setVolume(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHECKPOINT_SET_VOLUME';
        var1['type'] = var4;
        var4 = arg1;
        var1['volume'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['setVolume'] = var4;
    var2 = function toggleMute() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHECKPOINT_TOGGLE_MUTE';
        var1['type'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['toggleMute'] = var2;
    return var1;
})();