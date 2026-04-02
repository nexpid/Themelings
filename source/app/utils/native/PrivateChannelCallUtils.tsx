// app/utils/native/PrivateChannelCallUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var14;
    var4 = function openGuildVoiceModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot18;
            var4 = var3.id;
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 32;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isModalOpen;
            var4 = var4.bind(var5)(var6);
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot19;
            var2 = var2.bind(var1)(var3);
case 2:
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var5 = var14[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var7 = var14[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var7);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var14[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var14[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var14[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var14[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var14[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var14[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var14[var5];
    var5 = var13.bind(var1)(var5);
    var6 = var5.ChannelTypes;
    var _closure1_slot11 = var6;
    var6 = var5.ComponentActions;
    var _closure1_slot12 = var6;
    var5 = var5.NOOP;
    var _closure1_slot13 = var5;
    var5 = 9;
    var5 = var14[var5];
    var5 = var13.bind(var1)(var5);
    var5 = var5.AgeGateSource;
    var _closure1_slot14 = var5;
    var5 = 10;
    var5 = var14[var5];
    var5 = var13.bind(var1)(var5);
    var5 = var5.NativePermissionTypes;
    var _closure1_slot15 = var5;
    var5 = 11;
    var5 = var14[var5];
    var5 = var13.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot16 = var5;
    var11 = function getVoiceChannelKeyByChannelId(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = 'voice-channel';
        var2 = '-';
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot17 = var11;
    var10 = function getVoiceChannelKey(arg1) {
        var3 = _closure1_slot17;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot18 = var10;
    var9 = function openChannelCallModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.maybeOpenAgeGateForVoiceChannel;
            var3 = var6.id;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 13;
            var4 = var7[var4];
            var7 = var5.bind(var1)(var4);
            var5 = var7.maybeOpenSpoilerGateForVoiceChannel;
            var4 = var6.id;
            var3 = var5.bind(var7)(var4);
case 4:
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 14;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.rebuildRTCActiveChannels;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot0;
            var3 = 15;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isVoicePanelEnabled;
            var3 = var3.bind(var4)(var6);
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 17;
            var4 = var3[var4];
            var8 = var5.bind(var1)(var4);
            var7 = var8.pushLazy;
            var5 = _closure1_slot0;
            var4 = 19;
            var4 = var3[var4];
            var5 = var5.bind(var1)(var4);
            var4 = 18;
            var4 = var3[var4];
            var3 = var3.paths;
            var5 = var5.bind(var1)(var4, var3);
            var4 = {};
            var4['channel'] = var6;
            var9 = _closure1_slot18;
            var3 = var6.id;
            var3 = var9.bind(var1)(var3);
            var3 = var7.bind(var8)(var5, var4, var3);
            _fun0002_ip = 6; continue _fun0002;
case 8:
            var4 = _closure1_slot6;
            var3 = var4.getState;
            var5 = var3.bind(var4)();
            var4 = var5.openChannel;
            var3 = var6.id;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 16;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.ComponentDispatch;
            var4 = var5.dispatch;
            var2 = _closure1_slot12;
            var3 = var2.VOICE_PANEL_OPEN;
            var2 = {};
            var6 = var6.id;
            var2['channelId'] = var6;
            var2 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot19 = var9;
    var8 = function dismissVoiceChannelScreens(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot18;
            var1 = arg1;
            var3 = var1.id;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 17;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.popWithKey;
            var3 = arg2;
            var3 = var5.bind(var6)(var4, var3);
            var5 = _closure1_slot5;
            var3 = var5.getKey;
            var3 = var3.bind(var5)();
            if(!(var3 === var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 22;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
case 10:
            return var1;
        }
    };
    var _closure1_slot20 = var8;
    var7 = function monkeyPatchCall() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot9;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var5 = var2.bind(var3)(var4);
                var4 = null;
                if(!(var4 != var5)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var3 = _closure1_slot20;
                var2 = undefined;
                var2 = var3.bind(var2)(var5);
case 12:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.selectVoiceChannel;
                var2 = var2.bind(var3)(var4);
                var2 = global;
                var4 = var2.setTimeout;
                var3 = arg1;
                var2 = 500;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot21 = var7;
    var6 = function showGuardCallAlert(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 25;
        var2 = var11[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var10 = _closure1_slot0;
        var7 = 26;
        var8 = var11[var7];
        var8 = var10.bind(var1)(var8);
        var12 = var8.intl;
        var9 = var12.string;
        var8 = var11[var7];
        var8 = var10.bind(var1)(var8);
        var8 = var8.t;
        var8 = var8["91WuJ9"];
        var8 = var9.bind(var12)(var8);
        var2['title'] = var8;
        var8 = var11[var7];
        var8 = var10.bind(var1)(var8);
        var12 = var8.intl;
        var9 = var12.string;
        var8 = var11[var7];
        var8 = var10.bind(var1)(var8);
        var8 = var8.t;
        var8 = var8.Rs+Vk1;
        var8 = var9.bind(var12)(var8);
        var2['body'] = var8;
        var8 = var11[var7];
        var8 = var10.bind(var1)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.ETE/oC;
        var7 = var8.bind(var9)(var7);
        var2['cancelText'] = var7;
        var6 = function onConfirm() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var2['onConfirm'] = var6;
        var5 = _closure1_slot13;
        var2['onCancel'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot22 = var6;
    var5 = function guardPrivateCallForChannel(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot9;
            var3 = var6.getVoiceChannelId;
            var7 = var3.bind(var6)();
            var6 = _closure1_slot7;
            var3 = var6.getChannel;
            var3 = var3.bind(var6)(var7);
            var6 = null;
            if(!(var6 != var3)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            var8 = var3.type;
            var7 = _closure1_slot11;
            var7 = var7.GUILD_VOICE;
            if(!(var8 !== var7)) { _fun0005_ip = 14; continue _fun0005 }
case 16:
            if(!(var6 != var5)) { _fun0005_ip = 14; continue _fun0005 }
case 17:
            var5 = var5.id;
            var3 = var3.id;
            if(!(var5 === var3)) { _fun0005_ip = 18; continue _fun0005 }
case 14:
            var3 = undefined;
            var3 = var4.bind(var3)();
            _fun0005_ip = 19; continue _fun0005;
case 18:
            var3 = _closure1_slot22;
            var4 = _closure1_slot3;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 5; continue _fun0006 }
case 20:
                        var2 = _closure1_slot21;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=24);
case 21:
                        return var2;
case 22:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                        var4 = _closure2_slot0;
                        var4 = var4.bind(var3)();
                        return var3;
case 23:
                        return var2;
case 5:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
case 19:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot23 = var5;
    var12 = 34;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'utils/native/PrivateChannelCallUtils.tsx';
    var12 = var13.bind(var14)(var12);
    var3['getVoiceChannelKeyByChannelId'] = var11;
    var3['getVoiceChannelKey'] = var10;
    var10 = function isVoiceChannelModalKey(arg1) {
        var3 = arg1;
        var2 = var3.startsWith;
        var1 = 'voice-channel';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isVoiceChannelModalKey'] = var10;
    var3['openChannelCallModal'] = var9;
    var9 = function maybeShowAgeGateModal(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.shouldShowAgeGateForChannelId;
            var3 = arg1;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0007_ip = 25; continue _fun0007 }
case 26:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.runAfterInteractions;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.openAgeGateModal;
                var2 = _closure1_slot14;
                var2 = var2.NSFW_VOICE_CHANNEL;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = 150;
            var2 = var4.bind(var5)(var3, var2);
case 25:
            return var1;
        }
    };
    var3['maybeShowAgeGateModal'] = var9;
    var9 = function(arg1) {
        var7 = arg1;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 22;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var8 = _closure1_slot0;
        var4 = 19;
        var4 = var3[var4];
        var8 = var8.bind(var1)(var4);
        var4 = 23;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var8.bind(var1)(var4, var3);
        var3 = _closure1_slot18;
        var2 = var7.id;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['channel'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openVoiceChannelActionSheet'] = var9;
    var9 = function(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 22;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.hideActionSheet;
        var5 = _closure1_slot18;
        var2 = arg1;
        var2 = var2.id;
        var2 = var5.bind(var1)(var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['hideVoiceChannelActionSheet'] = var9;
    var3['dismissVoiceChannelScreens'] = var8;
    var3['monkeyPatchCall'] = var7;
    var3['showGuardCallAlert'] = var6;
    var3['guardPrivateCallForChannel'] = var5;
    var5 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var4;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0008_ip = 27; continue _fun0008 }
case 28:
            var3 = false;
case 27:
            var _closure2_slot1 = var3;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                            var2 = _closure2_slot1;
                            if(!var2) { _fun0009_ip = 31; continue _fun0009 }
case 27:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 27;
                            var5 = var5[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.requestPermission;
                            var2 = _closure1_slot15;
                            var2 = var2.CAMERA;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=70);
case 16:
                            return var2;
case 32:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                            if(var2) { _fun0009_ip = 31; continue _fun0009 }
case 35:
                            return var3;
case 31:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 28;
                            var6 = var7[var3];
                            var3 = undefined;
                            var8 = var8.bind(var3)(var6);
                            var6 = var8.dismissKeyboard;
                            var6 = var6.bind(var8)();
                            var6 = _closure1_slot1;
                            var5 = 24;
                            var5 = var7[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.selectVoiceChannel;
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var4 = _closure2_slot1;
                            var4 = var6.bind(var7)(var5, var4);
                            return var3;
case 33:
                            return var2;
case 29:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var2.bind(var1)();
            var2 = _closure1_slot23;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
        }
    };
    var3['handleJoinCall'] = var5;
    var5 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var4;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0010_ip = 27; continue _fun0010 }
case 28:
            var3 = false;
case 27:
            var _closure2_slot1 = var3;
            var3 = function guardAgainstCallingProvisionalAccount(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.isDM;
                    var1 = var1.bind(var5)();
                    if(!var1) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                    var4 = _closure1_slot10;
                    var3 = var4.getUser;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0011_ip = 36; continue _fun0011 }
case 38:
                    var2 = var2.isProvisional;
                    if(var2) { _fun0011_ip = 39; continue _fun0011 }
case 36:
                    var2 = false;
                    return var2;
case 39:
                    var4 = _closure1_slot4;
                    var3 = var4.lazy;
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 19;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 29;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var6 = var3.bind(var4)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 30;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.openAlert;
                    var2 = _closure1_slot16;
                    var1 = {};
                    var2 = var2.bind(var5)(var6, var1);
                    var1 = 'ProvisionalAccountNocallAllowed';
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = true;
                    return var1;
                }
            };
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0010_ip = 36; continue _fun0010 }
case 13:
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0012_ip = 40; continue _fun0012 }
case 30:
                            var2 = _closure2_slot1;
                            if(!var2) { _fun0012_ip = 41; continue _fun0012 }
case 27:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 27;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.requestPermission;
                            var2 = _closure1_slot15;
                            var2 = var2.CAMERA;
                            var2 = var4.bind(var5)(var2);
                            SaveGenerator(address=70);
case 16:
                            return var2;
case 32:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0012_ip = 42; continue _fun0012 }
case 35:
                            if(var2) { _fun0012_ip = 41; continue _fun0012 }
case 31:
                            return var3;
case 41:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 28;
                            var5 = var5[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.dismissKeyboard;
                            var5 = var5.bind(var6)();
                            var5 = _closure2_slot0;
                            var6 = var5.type;
                            var5 = _closure1_slot11;
                            var5 = var5.DM;
                            var9 = var6 !== var5;
                            if(var9) { _fun0012_ip = 43; continue _fun0012 }
case 44:
                            var7 = _closure1_slot8;
                            var6 = var7.isFriend;
                            var8 = _closure2_slot0;
                            var5 = var8.getRecipientId;
                            var5 = var5.bind(var8)();
                            var9 = var6.bind(var7)(var5);
case 43:
                            var8 = null;
                            if(var9) { _fun0012_ip = 45; continue _fun0012 }
case 46:
                            var6 = _closure2_slot0;
                            var5 = var6.getRecipientId;
                            var8 = var5.bind(var6)();
case 45:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 31;
                            var4 = var6[var4];
                            var7 = var5.bind(var3)(var4);
                            var6 = var7.call;
                            var4 = _closure2_slot0;
                            var5 = var4.id;
                            var4 = _closure2_slot1;
                            if(!var9) { _fun0012_ip = 47; continue _fun0012 }
case 48:
                            var11 = _closure2_slot0;
                            var10 = var11.isManaged;
                            var10 = var10.bind(var11)();
                            var9 = !var10;
case 47:
                            var16 = var7;
                            var15 = var5;
                            var14 = var4;
                            var13 = var9;
                            var12 = var8;
                            var4 = var16[var6](var15, var14, var13, var12, var11);
                            return var3;
case 42:
                            return var2;
case 40:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var2.bind(var1)();
            var2 = _closure1_slot23;
            var2 = var2.bind(var1)(var4, var3);
case 36:
            return var1;
        }
    };
    var3['handleStartCall'] = var5;
    var5 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var4;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0013_ip = 27; continue _fun0013 }
case 28:
            var3 = false;
case 27:
            var _closure2_slot1 = var3;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0014_ip = 49; continue _fun0014 }
case 30:
                            var2 = _closure2_slot1;
                            if(!var2) { _fun0014_ip = 31; continue _fun0014 }
case 27:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 27;
                            var5 = var5[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.requestPermission;
                            var2 = _closure1_slot15;
                            var2 = var2.CAMERA;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=70);
case 16:
                            return var2;
case 32:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0014_ip = 50; continue _fun0014 }
case 34:
                            if(var2) { _fun0014_ip = 31; continue _fun0014 }
case 35:
                            return var3;
case 31:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 28;
                            var6 = var7[var3];
                            var3 = undefined;
                            var8 = var8.bind(var3)(var6);
                            var6 = var8.dismissKeyboard;
                            var6 = var6.bind(var8)();
                            var6 = _closure1_slot1;
                            var5 = 31;
                            var5 = var7[var5];
                            var8 = var6.bind(var3)(var5);
                            var7 = var8.call;
                            var5 = _closure2_slot0;
                            var6 = var5.id;
                            var5 = _closure2_slot1;
                            var4 = true;
                            var4 = var7.bind(var8)(var6, var5, var4);
                            return var3;
case 50:
                            return var2;
case 49:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var2.bind(var1)();
            var2 = _closure1_slot23;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
        }
    };
    var3['handleRedesignGroupDMCall'] = var5;
    var5 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var4;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0015_ip = 27; continue _fun0015 }
case 28:
            var3 = false;
case 27:
            var _closure2_slot1 = var3;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0016_ip = 29; continue _fun0016 }
case 30:
                            var2 = _closure2_slot1;
                            if(!var2) { _fun0016_ip = 31; continue _fun0016 }
case 27:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 27;
                            var5 = var5[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.requestPermission;
                            var2 = _closure1_slot15;
                            var2 = var2.CAMERA;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=70);
case 16:
                            return var2;
case 32:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0016_ip = 33; continue _fun0016 }
case 34:
                            if(var2) { _fun0016_ip = 31; continue _fun0016 }
case 35:
                            return var3;
case 31:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 28;
                            var6 = var7[var3];
                            var3 = undefined;
                            var8 = var8.bind(var3)(var6);
                            var6 = var8.dismissKeyboard;
                            var6 = var6.bind(var8)();
                            var6 = _closure1_slot1;
                            var5 = 24;
                            var5 = var7[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.selectVoiceChannel;
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var4 = _closure2_slot1;
                            var4 = var6.bind(var7)(var5, var4);
                            return var3;
case 33:
                            return var2;
case 29:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var2.bind(var1)();
            var2 = _closure1_slot23;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
        }
    };
    var3['handleRedesignJoinCall'] = var5;
    var3['openGuildVoiceModal'] = var4;
    var2 = function navigateToVoiceChannel(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isPrivate;
            var2 = var1.bind(var3)();
            if(var2) { _fun0017_ip = 51; continue _fun0017 }
case 52:
            var2 = var3.isGuildStageVoice;
            var2 = var2.bind(var3)();
            if(var2) { _fun0017_ip = 53; continue _fun0017 }
case 54:
            var4 = _closure1_slot24;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            _fun0017_ip = 55; continue _fun0017;
case 53:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 33;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.openStageChannel;
            var2 = var2.bind(var4)(var3);
            _fun0017_ip = 55; continue _fun0017;
case 51:
            var2 = _closure1_slot19;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
case 55:
            var1 = undefined;
            return var1;
        }
    };
    var3['navigateToVoiceChannel'] = var2;
    return var1;
})();