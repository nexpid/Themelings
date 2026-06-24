// app/modules/video_calls/native/components/ChannelCallActionBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var16 = require;
    var8 = metroImportDefault;
    var15 = metroImportAll;
    var3 = exports;
    var17 = dependencyMap;
    var _closure1_slot0 = var16;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var15;
    var _closure1_slot3 = var17;
    var13 = function VideoButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var16 = var2.channel;
            var _closure2_slot0 = var16;
            var6 = var2.isSmallSize;
            var5 = _closure1_slot1;
            var13 = _closure1_slot3;
            var2 = 13;
            var2 = var13[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var10 = var2.bind(var4)(var16);
            var _closure2_slot1 = var10;
            var3 = _closure1_slot0;
            var2 = 14;
            var8 = var13[var2];
            var12 = var3.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot12;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot12;
                var1 = var2.isReactingToThermalState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var11.bind(var12)(var9, var8);
            var _closure2_slot2 = var15;
            var2 = var13[var2];
            var11 = var3.bind(var4)(var2);
            var9 = var11.useStateFromStores;
            var2 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.isVideoEnabled;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var9.bind(var11)(var8, var2);
            var _closure2_slot3 = var9;
            var2 = 15;
            var2 = var13[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var16);
            var12 = var2.reachedLimit;
            var2 = 16;
            var2 = var13[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useStageHasMedia;
            var2 = var16.id;
            var11 = var3.bind(var5)(var2);
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var2 = null;
            var2 = var3.bind(var5)(var2);
            var _closure2_slot4 = var2;
            var8 = _closure1_slot4;
            var5 = var8.useMemo;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot14;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CameraLottie;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1['ref'] = var6;
                    var6 = _closure2_slot3;
                    var5 = 'unmute';
                    if(!var6) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = 'mute';
case 2:
                    var1['animation'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var5 = var5.bind(var8)(var2, var3);
            var14 = _closure1_slot4;
            var8 = var14.useCallback;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleToggleVideo;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot4;
                    var5 = null;
                    var2 = var5 == var2;
                    var3 = undefined;
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var4 = _closure2_slot4;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var3 = var4;
case 4:
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = var3.play;
                    var2 = var2.bind(var3)();
case 6:
                    return var1;
                }
            };
            var2 = new Array(0);
            var14 = var8.bind(var14)(var3, var2);
            var _closure2_slot5 = var14;
            var8 = _closure1_slot4;
            var3 = var8.useCallback;
            var2 = new Array(4);
            var2[0] = var16;
            var2[1] = var10;
            var2[2] = var15;
            var2[3] = var14;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.showCameraDisabledAlert;
                    var2 = var2.bind(var3)();
                    _fun0004_ip = 10; continue _fun0004;
case 8:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    _fun0004_ip = 10; continue _fun0004;
case 11:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openIgnoreThermalStateAlert;
                    var1 = function() {
                        var3 = _closure2_slot5;
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot2;
            var1 = 20;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ToggledActionButton;
            var1 = {};
            var10 = !var10;
            if(var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = !var11;
            if(!var11) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var11 = var12;
case 15:
            var10 = var11;
case 13:
            var1['appearsDisabled'] = var10;
            var1['isActive'] = var9;
            var1['onPress'] = var8;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var8 = 21;
            var10 = var9[var8];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var9[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.HK4JIu;
            var8 = var10.bind(var11)(var8);
            var1['accessibilityLabel'] = var8;
            var8 = _closure1_slot1;
            var7 = 22;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var1['source'] = var7;
            var1['isSmallSize'] = var6;
            var1['lottieComponent'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var13;
    var12 = function ScreenshareButton(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var5 = var1.isSmallSize;
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 23;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var8 = var1.isActive;
            var6 = var1.onPress;
            var9 = var1.imgSource;
            var10 = var1.isFeatureEnabled;
            if(var10) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var6 = function() {
                var1 = undefined;
                return var1;
            };
case 17:
            var3 = _closure1_slot14;
            var2 = _closure1_slot2;
            var11 = _closure1_slot3;
            var1 = 20;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ToggledActionButton;
            var1 = {};
            var10 = !var10;
            var1['appearsDisabled'] = var10;
            var1['source'] = var9;
            var1['isActive'] = var8;
            var10 = _closure1_slot0;
            var7 = 21;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.XF1nZz;
            var7 = var8.bind(var9)(var7);
            var1['accessibilityLabel'] = var7;
            var1['onPress'] = var6;
            var1['isSmallSize'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var12;
    var11 = function AudioRouteButton(arg1) {
        var1 = arg1;
        var11 = var1.channel;
        var _closure2_slot0 = var11;
        var5 = var1.isSmallSize;
        var9 = _closure1_slot0;
        var10 = _closure1_slot3;
        var2 = 18;
        var2 = var10[var2];
        var4 = undefined;
        var3 = var9.bind(var4)(var2);
        var2 = var3.useMaskedSpeakerStates;
        var2 = var2.bind(var3)();
        var8 = var2.isAudioRouteEnabled;
        var3 = var2.toggleAudio;
        var _closure2_slot1 = var3;
        var7 = var2.routeSource;
        var2 = 24;
        var2 = var10[var2];
        var3 = var9.bind(var4)(var2);
        var2 = var3.useIsConnectedToVoiceChannel;
        var2 = var2.bind(var3)(var11);
        var _closure2_slot2 = var2;
        var3 = _closure1_slot14;
        var2 = _closure1_slot2;
        var1 = 20;
        var1 = var10[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ToggledActionButton;
        var1 = {};
        var1['isActive'] = var8;
        var1['source'] = var7;
        var6 = function onPress() {
            var4 = _closure2_slot1;
            var2 = _closure2_slot0;
            var3 = var2.id;
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['onPress'] = var6;
        var6 = 21;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.A/Ly/2;
        var6 = var7.bind(var8)(var6);
        var1['accessibilityLabel'] = var6;
        var1['isSmallSize'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var11;
    var10 = function DisconnectCallButton(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var _closure2_slot0 = var2;
        var6 = var1.isSmallSize;
        var4 = _closure1_slot14;
        var2 = _closure1_slot2;
        var11 = _closure1_slot3;
        var1 = 20;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.PrimaryActionButton;
        var1 = {};
        var9 = _closure1_slot1;
        var8 = 25;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var1['source'] = var8;
        var10 = _closure1_slot0;
        var7 = 21;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["6vrfgt"];
        var7 = var8.bind(var9)(var7);
        var1['accessibilityLabel'] = var7;
        var1['isSmallSize'] = var6;
        var5 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.handleDisconnect;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var10;
    var9 = function DisconnectStreamButton(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var7 = var1.isSmallSize;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 14;
            var4 = var3[var1];
            var5 = undefined;
            var11 = var2.bind(var5)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot7;
            var9 = new Array(2);
            var9[0] = var4;
            var4 = _closure1_slot10;
            var9[1] = var4;
            var4 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getSelectedParticipant;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                    var5 = var3.type;
                    var4 = _closure1_slot13;
                    var4 = var4.ACTIVITY;
                    if(!(var5 !== var4)) { _fun0007_ip = 19; continue _fun0007 }
case 21:
                    var4 = var3.user;
                    var5 = var4.id;
                    var4 = _closure1_slot10;
                    var1 = var4.getId;
                    var4 = var1.bind(var4)();
                    var1 = null;
                    if(!(var5 !== var4)) { _fun0007_ip = 22; continue _fun0007 }
case 19:
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var2 = var3.id;
case 23:
                    var1 = var2;
case 22:
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var9, var4);
            var _closure2_slot1 = var4;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var4 = _closure1_slot9;
                    var3 = var4.getActiveStreamForStreamKey;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 25:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2, var1);
            var _closure2_slot2 = var2;
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var4 = _closure1_slot14;
            var3 = _closure1_slot2;
            var12 = _closure1_slot3;
            var2 = 20;
            var2 = var12[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PrimaryActionButton;
            var2 = {};
            var10 = _closure1_slot1;
            var9 = 26;
            var9 = var12[var9];
            var9 = var10.bind(var5)(var9);
            var2['source'] = var9;
            var11 = _closure1_slot0;
            var8 = 21;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.q3O3J8;
            var8 = var9.bind(var10)(var8);
            var2['accessibilityLabel'] = var8;
            var2['isSmallSize'] = var7;
            var6 = function onPress() {
                var4 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 27;
                var2 = var7[var1];
                var1 = undefined;
                var8 = var4.bind(var1)(var2);
                var6 = var8.selectParticipant;
                var4 = _closure2_slot0;
                var5 = var4.id;
                var4 = null;
                var4 = var6.bind(var8)(var5, var4);
                var6 = _closure1_slot0;
                var3 = 28;
                var3 = var7[var3];
                var4 = var6.bind(var1)(var3);
                var3 = var4.stopStream;
                var5 = 29;
                var5 = var7[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.encodeStreamKey;
                var2 = _closure2_slot2;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 27:
            return var1;
        }
    };
    var _closure1_slot24 = var9;
    var1 = function LeaveActivityButton(arg1) {
        var1 = arg1;
        var5 = var1.isSmallSize;
        var4 = _closure1_slot14;
        var2 = _closure1_slot2;
        var8 = _closure1_slot3;
        var1 = 20;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.PrimaryActionButton;
        var1 = {};
        var11 = _closure1_slot0;
        var7 = 21;
        var9 = var8[var7];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var7 = var8[var7];
        var7 = var11.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.k0Aph0;
        var7 = var9.bind(var10)(var7);
        var1['accessibilityLabel'] = var7;
        var7 = function onPress() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure1_slot6;
                var2 = var3.getCurrentEmbeddedActivity;
                var6 = var2.bind(var3)();
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.leaveActivity;
                var2 = {};
                var5 = null;
                var8 = var5 == var6;
                var7 = undefined;
                if(var8) { _fun0009_ip = 2; continue _fun0009 }
case 29:
                var7 = var6.location;
case 2:
                var2['location'] = var7;
                var7 = var5 == var6;
                var5 = undefined;
                if(var7) { _fun0009_ip = 30; continue _fun0009 }
case 7:
                var5 = var6.applicationId;
case 30:
                var2['applicationId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['onPress'] = var7;
        var7 = _closure1_slot1;
        var6 = 31;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var1['source'] = var6;
        var1['isSmallSize'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var7 = function useActionBarSecondButtons(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var7 = var1.channel;
            var2 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 24;
            var1 = var6[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useIsConnectedToVoiceChannel;
            var2 = var1.bind(var2)(var7);
            var5 = _closure1_slot1;
            var1 = 23;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var7);
            var7 = var1.isActive;
            var1 = 32;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var4 = var1.bind(var4)();
            var1 = {};
            var5 = _closure1_slot18;
            var6 = var5.AUDIO_ROUTE;
            var5 = var2;
            if(!var2) { _fun0010_ip = 31; continue _fun0010 }
case 32:
            var5 = !var4;
case 31:
            var1[5] = var5;
            var5 = _closure1_slot18;
            var6 = var5.NONE;
            var5 = true;
            var1[5] = var5;
            var5 = _closure1_slot18;
            var6 = var5.SCREEN_SHARE_END;
            var5 = var2;
            if(!var2) { _fun0010_ip = 33; continue _fun0010 }
case 34:
            var5 = !var4;
case 33:
            if(!var5) { _fun0010_ip = 35; continue _fun0010 }
case 36:
            var5 = var7;
case 35:
            var1[5] = var5;
            var3 = _closure1_slot18;
            var3 = var3.SCREEN_SHARE_START;
            if(!var2) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var2 = !var4;
case 37:
            var1[2] = var2;
            return var1;
        }
    };
    var _closure1_slot26 = var7;
    var6 = function useActionBarSecondButton(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channel;
            var4 = _closure1_slot26;
            var1 = {};
            var1['channel'] = var6;
            var2 = undefined;
            var4 = var4.bind(var2)(var1);
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 33;
            var1 = var7[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.bind(var2)();
            var2 = _closure1_slot18;
            var2 = var2.SCREEN_SHARE_END;
            var5 = var4[var2];
            var2 = _closure1_slot18;
            if(var5) { _fun0011_ip = 39; continue _fun0011 }
case 4:
            var5 = var2.AUDIO_ROUTE;
            var5 = var4[var5];
            if(!var5) { _fun0011_ip = 23; continue _fun0011 }
case 6:
            var5 = var6.isPrivate;
            var5 = var5.bind(var6)();
            if(var5) { _fun0011_ip = 40; continue _fun0011 }
case 23:
            var5 = _closure1_slot18;
            var5 = var5.AUDIO_ROUTE;
            var5 = var4[var5];
            if(!var5) { _fun0011_ip = 41; continue _fun0011 }
case 10:
            if(!var1) { _fun0011_ip = 40; continue _fun0011 }
case 41:
            var1 = _closure1_slot18;
            var1 = var1.SCREEN_SHARE_START;
            var1 = var4[var1];
            var4 = _closure1_slot18;
            if(var1) { _fun0011_ip = 42; continue _fun0011 }
case 43:
            var1 = var4.NONE;
            _fun0011_ip = 44; continue _fun0011;
case 42:
            var1 = var4.SCREEN_SHARE_START;
case 44:
            _fun0011_ip = 45; continue _fun0011;
case 40:
            var3 = _closure1_slot18;
            var1 = var3.AUDIO_ROUTE;
case 45:
            _fun0011_ip = 46; continue _fun0011;
case 39:
            var1 = var2.SCREEN_SHARE_END;
case 46:
            return var1;
        }
    };
    var _closure1_slot27 = var6;
    var4 = function useActionBarPrimaryButtons(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var6 = var2.channel;
            var _closure2_slot0 = var6;
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var3 = 24;
            var3 = var9[var3];
            var5 = undefined;
            var4 = var7.bind(var5)(var3);
            var3 = var4.useIsConnectedToVoiceChannel;
            var6 = var3.bind(var4)(var6);
            var3 = 14;
            var4 = var9[var3];
            var11 = var7.bind(var5)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot7;
            var8 = new Array(2);
            var8[0] = var4;
            var4 = _closure1_slot10;
            var8[1] = var4;
            var4 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getSelectedParticipant;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 19; continue _fun0013 }
case 20:
                    var5 = var3.type;
                    var4 = _closure1_slot13;
                    var4 = var4.ACTIVITY;
                    if(!(var5 !== var4)) { _fun0013_ip = 19; continue _fun0013 }
case 21:
                    var4 = var3.user;
                    var5 = var4.id;
                    var4 = _closure1_slot10;
                    var1 = var4.getId;
                    var4 = var1.bind(var4)();
                    var1 = null;
                    if(!(var5 !== var4)) { _fun0013_ip = 22; continue _fun0013 }
case 19:
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0013_ip = 23; continue _fun0013 }
case 24:
                    var2 = var3.id;
case 23:
                    var1 = var2;
case 22:
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var8, var4);
            var _closure2_slot1 = var4;
            var4 = var9[var3];
            var11 = var7.bind(var5)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0014_ip = 25; continue _fun0014 }
case 26:
                    var4 = _closure1_slot9;
                    var3 = var4.getActiveStreamForStreamKey;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 25:
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var8, var4);
            var8 = var9[var3];
            var12 = var7.bind(var5)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentEmbeddedActivity;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var8 = var11.bind(var12)(var10, var8);
            var3 = var9[var3];
            var7 = var7.bind(var5)(var3);
            var5 = var7.useStateFromStoresObject;
            var9 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot8;
                var3 = var4.getAwaitingRemoteSessionInfo;
                var4 = var3.bind(var4)();
                var3 = null;
                var3 = var3 != var4;
                var1['awaitingRemote'] = var3;
                var3 = _closure1_slot8;
                var2 = var3.getRemoteSessionId;
                var2 = var2.bind(var3)();
                var1['remoteSessionId'] = var2;
                return var1;
            };
            var1 = var5.bind(var7)(var3, var1);
            var5 = var1.awaitingRemote;
            var7 = var1.remoteSessionId;
            var1 = {};
            var3 = _closure1_slot19;
            var3 = var3.END_ACTIVITY;
            var1[2] = var8;
            var3 = _closure1_slot19;
            var3 = var3.END_CALL;
            var1[2] = var6;
            var3 = _closure1_slot19;
            var3 = var3.END_REMOTE;
            if(var5) { _fun0012_ip = 47; continue _fun0012 }
case 48:
            var6 = null;
            var5 = var6 != var7;
case 47:
            var1[2] = var5;
            var2 = _closure1_slot19;
            var3 = var2.END_STREAM;
            var2 = null;
            var2 = var2 != var4;
            var1[2] = var2;
            return var1;
        }
    };
    var _closure1_slot28 = var4;
    var2 = function useActionBarPrimaryButton(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = _closure1_slot28;
            var2 = {};
            var2['channel'] = var1;
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var1 = _closure1_slot19;
            var1 = var1.END_STREAM;
            var1 = var5[var1];
            var2 = _closure1_slot19;
            if(var1) { _fun0015_ip = 49; continue _fun0015 }
case 50:
            var1 = var2.END_REMOTE;
            var1 = var5[var1];
            var3 = _closure1_slot19;
            if(var1) { _fun0015_ip = 23; continue _fun0015 }
case 51:
            var1 = var3.END_ACTIVITY;
            var1 = var5[var1];
            var4 = _closure1_slot19;
            if(var1) { _fun0015_ip = 52; continue _fun0015 }
case 53:
            var1 = var4.END_CALL;
            _fun0015_ip = 54; continue _fun0015;
case 52:
            var1 = var4.END_ACTIVITY;
case 54:
            _fun0015_ip = 32; continue _fun0015;
case 23:
            var1 = var3.END_REMOTE;
case 32:
            _fun0015_ip = 55; continue _fun0015;
case 49:
            var1 = var2.END_STREAM;
case 55:
            return var1;
        }
    };
    var _closure1_slot29 = var2;
    var1 = global;
    var19 = var1.Object;
    var18 = var19.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var18.bind(var19)(var3, var1, var5);
    var21 = 0;
    var5 = var17[var21];
    var1 = undefined;
    var5 = var15.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var20 = 1;
    var5 = var17[var20];
    var5 = var16.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var19 = 2;
    var5 = var17[var19];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var18 = 3;
    var5 = var17[var18];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var17[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var17[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var17[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var17[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var17[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var17[var5];
    var5 = var16.bind(var1)(var5);
    var5 = var5.ParticipantTypes;
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var17[var5];
    var5 = var16.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot14 = var8;
    var8 = var5.Fragment;
    var _closure1_slot15 = var8;
    var5 = var5.jsxs;
    var _closure1_slot16 = var5;
    var5 = 11;
    var5 = var17[var5];
    var15 = var16.bind(var1)(var5);
    var8 = var15.createStyles;
    var5 = {};
    var22 = {'height': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row'};
    var23 = 12;
    var24 = var17[var23];
    var24 = var16.bind(var1)(var24);
    var24 = var24.CALL_ACTION_BAR_HEIGHT;
    var22['height'] = var24;
    var5['container'] = var22;
    var22 = {'height': null, 'paddingHorizontal': 16, 'paddingTop': null, 'paddingBottom': null, 'justifyContent': 'center', 'flexDirection': 'row'};
    var24 = var17[var23];
    var24 = var16.bind(var1)(var24);
    var24 = var24.FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT;
    var22['height'] = var24;
    var24 = var17[var23];
    var24 = var16.bind(var1)(var24);
    var24 = var24.FIVE_BUTTON_CONTAINER_PADDING_TOP;
    var22['paddingTop'] = var24;
    var23 = var17[var23];
    var23 = var16.bind(var1)(var23);
    var23 = var23.FIVE_BUTTON_CONTAINER_PADDING_BOTTOM;
    var22['paddingBottom'] = var23;
    var5['containerForFiveButtonLayout'] = var22;
    var5 = var8.bind(var15)(var5);
    var _closure1_slot17 = var5;
    var8 = {};
    var8['NONE'] = var21;
    var5 = 'NONE';
    var8[var21] = var5;
    var8['SCREEN_SHARE_START'] = var20;
    var5 = 'SCREEN_SHARE_START';
    var8[var20] = var5;
    var8['SCREEN_SHARE_END'] = var19;
    var5 = 'SCREEN_SHARE_END';
    var8[var19] = var5;
    var8['AUDIO_ROUTE'] = var18;
    var5 = 'AUDIO_ROUTE';
    var8[var18] = var5;
    var _closure1_slot18 = var8;
    var5 = {};
    var5['END_STREAM'] = var21;
    var15 = 'END_STREAM';
    var5[var21] = var15;
    var5['END_ACTIVITY'] = var20;
    var15 = 'END_ACTIVITY';
    var5[var20] = var15;
    var5['END_CALL'] = var19;
    var15 = 'END_CALL';
    var5[var19] = var15;
    var5['END_REMOTE'] = var18;
    var15 = 'END_REMOTE';
    var5[var18] = var15;
    var _closure1_slot19 = var5;
    var15 = 40;
    var15 = var17[var15];
    var17 = var16.bind(var1)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'modules/video_calls/native/components/ChannelCallActionBar.tsx';
    var15 = var16.bind(var17)(var15);
    var14 = function ChannelCallActionBar(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var8 = var1.shouldShowConnectingScreen;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0016_ip = 56; continue _fun0016 }
case 57:
            var8 = false;
case 56:
            var1 = _closure1_slot17;
            var11 = var1.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 32;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var13 = var1.bind(var4)();
            var2 = _closure1_slot27;
            var1 = {};
            var1['channel'] = var12;
            var17 = var2.bind(var4)(var1);
            var2 = _closure1_slot29;
            var1 = {};
            var1['channel'] = var12;
            var16 = var2.bind(var4)(var1);
            var1 = 34;
            var2 = var6[var1];
            var3 = var5.bind(var4)(var2);
            var2 = 35;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CHANNEL_CALL_ACTION_BAR;
            var2 = var3.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var2 = _closure1_slot0;
            var3 = 36;
            var3 = var6[var3];
            var10 = var2.bind(var4)(var3);
            var7 = var10.useIsFiveButtonLayout;
            var3 = var12.id;
            var18 = var7.bind(var10)(var3);
            var3 = _closure1_slot14;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot5;
            var5 = {};
            var10 = 'box-none';
            var5['pointerEvents'] = var10;
            if(var18) { _fun0016_ip = 58; continue _fun0016 }
case 59:
            var10 = var11.container;
            _fun0016_ip = 60; continue _fun0016;
case 58:
            var10 = var11.containerForFiveButtonLayout;
case 60:
            var5['style'] = var10;
            if(var8) { _fun0016_ip = 61; continue _fun0016 }
case 62:
            var11 = _closure1_slot16;
            var10 = _closure1_slot15;
            var8 = {};
            var15 = null;
            if(var13) { _fun0016_ip = 63; continue _fun0016 }
case 64:
            var20 = _closure1_slot14;
            var19 = _closure1_slot20;
            var13 = {};
            var13['channel'] = var12;
            var13['isSmallSize'] = var18;
            var15 = var20.bind(var4)(var19, var13);
case 63:
            var13 = new Array(4);
            var13[0] = var15;
            var15 = _closure1_slot18;
            var15 = var15.AUDIO_ROUTE;
            if(!(var15 !== var17)) { _fun0016_ip = 65; continue _fun0016 }
case 66:
            var15 = _closure1_slot18;
            var15 = var15.SCREEN_SHARE_START;
            if(!(var15 !== var17)) { _fun0016_ip = 67; continue _fun0016 }
case 68:
            var15 = _closure1_slot18;
            var15 = var15.SCREEN_SHARE_END;
            if(!(var15 !== var17)) { _fun0016_ip = 67; continue _fun0016 }
case 69:
            var15 = _closure1_slot18;
            var15 = var15.NONE;
            var15 = null;
            _fun0016_ip = 70; continue _fun0016;
case 67:
            var20 = _closure1_slot14;
            var19 = _closure1_slot21;
            var17 = {};
            var17['channel'] = var12;
            var17['isSmallSize'] = var18;
            var15 = var20.bind(var4)(var19, var17);
            _fun0016_ip = 70; continue _fun0016;
case 65:
            var20 = _closure1_slot14;
            var19 = _closure1_slot22;
            var17 = {};
            var17['isSmallSize'] = var18;
            var17['channel'] = var12;
            var15 = var20.bind(var4)(var19, var17);
case 70:
            var13[1] = var15;
            var19 = _closure1_slot14;
            var17 = _closure1_slot0;
            var20 = _closure1_slot3;
            var15 = 38;
            var15 = var20[var15];
            var15 = var17.bind(var4)(var15);
            var17 = var15.ChannelCallMicButton;
            var15 = {};
            var15['channel'] = var12;
            var15['isSmallSize'] = var18;
            var15 = var19.bind(var4)(var17, var15);
            var13[2] = var15;
            var15 = _closure1_slot19;
            var15 = var15.END_REMOTE;
            if(!(var15 !== var16)) { _fun0016_ip = 71; continue _fun0016 }
case 72:
            var15 = _closure1_slot19;
            var15 = var15.END_STREAM;
            if(!(var15 !== var16)) { _fun0016_ip = 73; continue _fun0016 }
case 74:
            var15 = _closure1_slot19;
            var15 = var15.END_ACTIVITY;
            if(!(var15 !== var16)) { _fun0016_ip = 75; continue _fun0016 }
case 76:
            var15 = _closure1_slot19;
            var15 = var15.END_CALL;
            var14 = null;
            if(!(var15 === var16)) { _fun0016_ip = 77; continue _fun0016 }
case 78:
            var17 = _closure1_slot14;
            var16 = _closure1_slot23;
            var15 = {};
            var15['channel'] = var12;
            var15['isSmallSize'] = var18;
            var14 = var17.bind(var4)(var16, var15);
            _fun0016_ip = 77; continue _fun0016;
case 75:
            var17 = _closure1_slot14;
            var16 = _closure1_slot25;
            var15 = {};
            var15['isSmallSize'] = var18;
            var14 = var17.bind(var4)(var16, var15);
            _fun0016_ip = 77; continue _fun0016;
case 73:
            var17 = _closure1_slot14;
            var16 = _closure1_slot24;
            var15 = {};
            var15['channel'] = var12;
            var15['isSmallSize'] = var18;
            var14 = var17.bind(var4)(var16, var15);
            _fun0016_ip = 77; continue _fun0016;
case 71:
            var17 = _closure1_slot14;
            var16 = _closure1_slot0;
            var19 = _closure1_slot3;
            var15 = 39;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.DisconnectRemoteButton;
            var15 = {};
            var15['channel'] = var12;
            var15['isSmallSize'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 77:
            var13[3] = var14;
            var8['children'] = var13;
            var8 = var11.bind(var4)(var10, var8);
            _fun0016_ip = 79; continue _fun0016;
case 61:
            var11 = _closure1_slot14;
            var10 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 37;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.CallConnectingActionBar;
            var9 = {};
            var9['channel'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 79:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var14;
    var3['VideoButton'] = var13;
    var3['ScreenshareButton'] = var12;
    var3['AudioRouteButton'] = var11;
    var3['DisconnectCallButton'] = var10;
    var3['DisconnectStreamButton'] = var9;
    var3['ActionBarSecondButton'] = var8;
    var3['useActionBarSecondButtons'] = var7;
    var3['useActionBarSecondButton'] = var6;
    var3['ActionBarPrimaryButton'] = var5;
    var3['useActionBarPrimaryButtons'] = var4;
    var3['useActionBarPrimaryButton'] = var2;
    return var1;
})();