// app/utils/native/PrivateChannelCallUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var13;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var13[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var6 = var13[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var13[var4];
    var4 = var12.bind(var1)(var4);
    var5 = var4.ChannelTypes;
    var _closure1_slot11 = var5;
    var5 = var4.ComponentActions;
    var _closure1_slot12 = var5;
    var4 = var4.NOOP;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var13[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var4.AgeGateSource;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var13[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var13[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot16 = var4;
    var10 = function getVoiceChannelKeyByChannelId(arg1) {
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
    var _closure1_slot17 = var10;
    var9 = function getVoiceChannelKey(arg1) {
        var3 = _closure1_slot17;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot18 = var9;
    var8 = function openChannelCallModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 13;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.rebuildRTCActiveChannels;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot0;
            var3 = 14;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isVoicePanelEnabled;
            var3 = var3.bind(var4)(var6);
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 16;
            var4 = var3[var4];
            var8 = var5.bind(var1)(var4);
            var7 = var8.pushLazy;
            var5 = _closure1_slot0;
            var4 = 18;
            var4 = var3[var4];
            var5 = var5.bind(var1)(var4);
            var4 = 17;
            var4 = var3[var4];
            var3 = var3.paths;
            var5 = var5.bind(var1)(var4, var3);
            var4 = {};
            var4['channel'] = var6;
            var9 = _closure1_slot18;
            var3 = var6.id;
            var3 = var9.bind(var1)(var3);
            var3 = var7.bind(var8)(var5, var4, var3);
            _fun0001_ip = 2; continue _fun0001;
case 4:
            var4 = _closure1_slot6;
            var3 = var4.getState;
            var5 = var3.bind(var4)();
            var4 = var5.openChannel;
            var3 = var6.id;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
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
case 2:
            return var1;
        }
    };
    var _closure1_slot19 = var8;
    var7 = function dismissVoiceChannelScreens(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot18;
            var1 = arg1;
            var3 = var1.id;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.popWithKey;
            var3 = arg2;
            var3 = var5.bind(var6)(var4, var3);
            var5 = _closure1_slot5;
            var3 = var5.getKey;
            var3 = var3.bind(var5)();
            if(!(var3 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
case 6:
            return var1;
        }
    };
    var _closure1_slot20 = var7;
    var6 = function monkeyPatchCall() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot9;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var5 = var2.bind(var3)(var4);
                var4 = null;
                if(!(var4 != var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var3 = _closure1_slot20;
                var2 = undefined;
                var2 = var3.bind(var2)(var5);
case 8:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
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
    var _closure1_slot21 = var6;
    var5 = function showGuardCallAlert(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 24;
        var2 = var11[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var10 = _closure1_slot0;
        var7 = 25;
        var8 = var11[var7];
        var8 = var10.bind(var1)(var8);
        var12 = var8.intl;
        var9 = var12.string;
        var8 = var11[var7];
        var8 = var10.bind(var1)(var8);
        var8 = var8.t;
        var8 = var8.91WuJy;
        var8 = var9.bind(var12)(var8);
        var2['title'] = var8;
        var8 = var11[var7];
        var8 = var10.bind(var1)(var8);
        var12 = var8.intl;
        var9 = var12.string;
        var8 = var11[var7];
        var8 = var10.bind(var1)(var8);
        var8 = var8.t;
        var8 = var8.Rs+Vk5;
        var8 = var9.bind(var12)(var8);
        var2['body'] = var8;
        var8 = var11[var7];
        var8 = var10.bind(var1)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.ETE/oK;
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
    var _closure1_slot22 = var5;
    var4 = function guardPrivateCallForChannel(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            if(!(var6 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var8 = var3.type;
            var7 = _closure1_slot11;
            var7 = var7.GUILD_VOICE;
            if(!(var8 !== var7)) { _fun0004_ip = 10; continue _fun0004 }
case 12:
            if(!(var6 != var5)) { _fun0004_ip = 10; continue _fun0004 }
case 13:
            var5 = var5.id;
            var3 = var3.id;
            if(!(var5 === var3)) { _fun0004_ip = 14; continue _fun0004 }
case 10:
            var3 = undefined;
            var3 = var4.bind(var3)();
            _fun0004_ip = 15; continue _fun0004;
case 14:
            var3 = _closure1_slot22;
            var4 = _closure1_slot3;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                        var2 = _closure1_slot21;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=24);
case 18:
                        return var2;
case 19:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                        var4 = _closure2_slot0;
                        var4 = var4.bind(var3)();
                        return var3;
case 20:
                        return var2;
case 16:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
case 15:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var11 = 32;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'utils/native/PrivateChannelCallUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var3['getVoiceChannelKeyByChannelId'] = var10;
    var3['getVoiceChannelKey'] = var9;
    var9 = function isVoiceChannelModalKey(arg1) {
        var3 = arg1;
        var2 = var3.startsWith;
        var1 = 'voice-channel';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isVoiceChannelModalKey'] = var9;
    var3['openChannelCallModal'] = var8;
    var8 = function maybeShowAgeGateModal(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
            if(!var3) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.runAfterInteractions;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
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
case 22:
            return var1;
        }
    };
    var3['maybeShowAgeGateModal'] = var8;
    var8 = function(arg1) {
        var7 = arg1;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 21;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var8 = _closure1_slot0;
        var4 = 18;
        var4 = var3[var4];
        var8 = var8.bind(var1)(var4);
        var4 = 22;
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
    var3['openVoiceChannelActionSheet'] = var8;
    var8 = function(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 21;
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
    var3['hideVoiceChannelActionSheet'] = var8;
    var3['dismissVoiceChannelScreens'] = var7;
    var3['monkeyPatchCall'] = var6;
    var3['showGuardCallAlert'] = var5;
    var3['guardPrivateCallForChannel'] = var4;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var4;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
            var3 = false;
case 24:
            var _closure2_slot1 = var3;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                            var2 = _closure2_slot1;
                            if(!var2) { _fun0008_ip = 28; continue _fun0008 }
case 24:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 26;
                            var5 = var5[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.requestPermission;
                            var2 = _closure1_slot15;
                            var2 = var2.CAMERA;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=70);
case 12:
                            return var2;
case 29:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                            if(var2) { _fun0008_ip = 28; continue _fun0008 }
case 32:
                            return var3;
case 28:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 27;
                            var6 = var8[var3];
                            var3 = undefined;
                            var9 = var7.bind(var3)(var6);
                            var6 = var9.dismissKeyboard;
                            var6 = var6.bind(var9)();
                            var9 = _closure1_slot1;
                            var6 = 23;
                            var6 = var8[var6];
                            var11 = var9.bind(var3)(var6);
                            var10 = var11.selectVoiceChannel;
                            var6 = _closure2_slot0;
                            var9 = var6.id;
                            var6 = _closure2_slot1;
                            var6 = var10.bind(var11)(var9, var6);
                            var6 = 14;
                            var6 = var8[var6];
                            var7 = var7.bind(var3)(var6);
                            var6 = var7.isVoicePanelEnabled;
                            var6 = var6.bind(var7)();
                            if(var6) { _fun0008_ip = 4; continue _fun0008 }
case 33:
                            var5 = _closure1_slot19;
                            var4 = _closure2_slot0;
                            var4 = var5.bind(var3)(var4);
case 4:
                            return var3;
case 30:
                            return var2;
case 26:
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
    var3['handleJoinCall'] = var4;
    var4 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var4;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0009_ip = 24; continue _fun0009 }
case 25:
            var3 = false;
case 24:
            var _closure2_slot1 = var3;
            var3 = function guardAgainstCallingProvisionalAccount(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.isDM;
                    var1 = var1.bind(var5)();
                    if(!var1) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                    var4 = _closure1_slot10;
                    var3 = var4.getUser;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0010_ip = 34; continue _fun0010 }
case 3:
                    var2 = var2.isProvisional;
                    if(var2) { _fun0010_ip = 36; continue _fun0010 }
case 34:
                    var2 = false;
                    return var2;
case 36:
                    var4 = _closure1_slot4;
                    var3 = var4.lazy;
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 18;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 28;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var6 = var3.bind(var4)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 29;
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
            if(var3) { _fun0009_ip = 34; continue _fun0009 }
case 9:
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0011_ip = 37; continue _fun0011 }
case 27:
                            var2 = _closure2_slot1;
                            if(!var2) { _fun0011_ip = 28; continue _fun0011 }
case 24:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 26;
                            var5 = var5[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.requestPermission;
                            var2 = _closure1_slot15;
                            var2 = var2.CAMERA;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=70);
case 12:
                            return var2;
case 29:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0011_ip = 38; continue _fun0011 }
case 31:
                            if(var2) { _fun0011_ip = 28; continue _fun0011 }
case 32:
                            return var3;
case 28:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 27;
                            var6 = var6[var3];
                            var3 = undefined;
                            var7 = var7.bind(var3)(var6);
                            var6 = var7.dismissKeyboard;
                            var6 = var6.bind(var7)();
                            var6 = _closure2_slot0;
                            var7 = var6.type;
                            var6 = _closure1_slot11;
                            var6 = var6.DM;
                            var10 = var7 !== var6;
                            if(var10) { _fun0011_ip = 39; continue _fun0011 }
case 40:
                            var8 = _closure1_slot8;
                            var7 = var8.isFriend;
                            var9 = _closure2_slot0;
                            var6 = var9.getRecipientId;
                            var6 = var6.bind(var9)();
                            var10 = var7.bind(var8)(var6);
case 39:
                            var9 = null;
                            if(var10) { _fun0011_ip = 41; continue _fun0011 }
case 42:
                            var7 = _closure2_slot0;
                            var6 = var7.getRecipientId;
                            var9 = var6.bind(var7)();
case 41:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 30;
                            var5 = var7[var5];
                            var8 = var6.bind(var3)(var5);
                            var7 = var8.call;
                            var5 = _closure2_slot0;
                            var6 = var5.id;
                            var5 = _closure2_slot1;
                            if(!var10) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                            var11 = _closure2_slot0;
                            var4 = var11.isManaged;
                            var4 = var4.bind(var11)();
                            var10 = !var4;
case 43:
                            var12 = function() {
                                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 14;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.isVoicePanelEnabled;
                                    var3 = var3.bind(var4)();
                                    var3 = !var3;
                                    if(!var3) { _fun0012_ip = 45; continue _fun0012 }
case 46:
                                    var3 = _closure1_slot19;
                                    var2 = _closure2_slot0;
                                    var2 = var3.bind(var1)(var2);
case 45:
                                    return var1;
                                }
                            };
                            var17 = var8;
                            var16 = var6;
                            var15 = var5;
                            var14 = var10;
                            var13 = var9;
                            var4 = var17[var7](var16, var15, var14, var13, var12, var11);
                            return var3;
case 38:
                            return var2;
case 37:
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
case 34:
            return var1;
        }
    };
    var3['handleStartCall'] = var4;
    var4 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var4;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0013_ip = 24; continue _fun0013 }
case 25:
            var3 = false;
case 24:
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
                            if(var2) { _fun0014_ip = 47; continue _fun0014 }
case 27:
                            var2 = _closure2_slot1;
                            if(!var2) { _fun0014_ip = 32; continue _fun0014 }
case 24:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 26;
                            var5 = var5[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.requestPermission;
                            var2 = _closure1_slot15;
                            var2 = var2.CAMERA;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=70);
case 12:
                            return var2;
case 29:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0014_ip = 48; continue _fun0014 }
case 49:
                            if(var2) { _fun0014_ip = 32; continue _fun0014 }
case 31:
                            return var3;
case 32:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 27;
                            var6 = var7[var3];
                            var3 = undefined;
                            var8 = var8.bind(var3)(var6);
                            var6 = var8.dismissKeyboard;
                            var6 = var6.bind(var8)();
                            var6 = _closure1_slot1;
                            var5 = 30;
                            var5 = var7[var5];
                            var8 = var6.bind(var3)(var5);
                            var7 = var8.call;
                            var5 = _closure2_slot0;
                            var6 = var5.id;
                            var5 = _closure2_slot1;
                            var4 = true;
                            var4 = var7.bind(var8)(var6, var5, var4);
                            return var3;
case 48:
                            return var2;
case 47:
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
    var3['handleRedesignGroupDMCall'] = var4;
    var4 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var4;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0015_ip = 24; continue _fun0015 }
case 25:
            var3 = false;
case 24:
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
                            if(var2) { _fun0016_ip = 50; continue _fun0016 }
case 27:
                            var2 = _closure2_slot1;
                            if(!var2) { _fun0016_ip = 32; continue _fun0016 }
case 24:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 26;
                            var5 = var5[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.requestPermission;
                            var2 = _closure1_slot15;
                            var2 = var2.CAMERA;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=70);
case 12:
                            return var2;
case 29:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0016_ip = 51; continue _fun0016 }
case 49:
                            if(var2) { _fun0016_ip = 32; continue _fun0016 }
case 31:
                            return var3;
case 32:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 27;
                            var6 = var7[var3];
                            var3 = undefined;
                            var8 = var8.bind(var3)(var6);
                            var6 = var8.dismissKeyboard;
                            var6 = var6.bind(var8)();
                            var6 = _closure1_slot1;
                            var5 = 23;
                            var5 = var7[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.selectVoiceChannel;
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var4 = _closure2_slot1;
                            var4 = var6.bind(var7)(var5, var4);
                            return var3;
case 51:
                            return var2;
case 50:
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
    var3['handleRedesignJoinCall'] = var4;
    var2 = function openGuildVoiceModal(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot18;
            var4 = var3.id;
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 31;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isModalOpen;
            var4 = var4.bind(var5)(var6);
            if(var4) { _fun0017_ip = 52; continue _fun0017 }
case 53:
            var2 = _closure1_slot19;
            var2 = var2.bind(var1)(var3);
case 52:
            return var1;
        }
    };
    var3['openGuildVoiceModal'] = var2;
    return var1;
})();