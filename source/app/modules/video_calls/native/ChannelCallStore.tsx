// app/modules/video_calls/native/ChannelCallStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var11;
    var5 = function useIsVoiceChatFocused() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot10;
            var1 = undefined;
            var1 = var3.bind(var1)();
            var3 = var1.voiceChatDrawerState;
            var1 = _closure1_slot5;
            var1 = var1.OPEN;
            var1 = var3 === var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot5;
            var2 = var2.CLOSING;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var2 = global;
    var8 = var2.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 0;
    var7 = var11[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var7);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var11[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var13 = var6.VoiceCallOverlayType;
    var12 = var6.VoiceChatDrawerState;
    var _closure1_slot5 = var12;
    var6 = 3;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var6 = var6.OrientationLockState;
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var6 = var6.ParticipantTypes;
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var11[var6];
    var6 = var10.bind(var1)(var6);
    var6 = var6.Timeout;
    var7 = var6.prototype;
    var7 = Object.create(var7, {constructor: {value: var6}});
    var22 = var7;
    var6 = new var22[var6](var21);
    var8 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot8 = var8;
    var7 = var2.Object;
    var6 = var7.freeze;
    var2 = {'focus': true, 'pipFocus': false, 'isGestureEnabled': true};
    var15 = false;
    var12 = var12.CLOSED;
    var2['voiceChatDrawerState'] = var12;
    var12 = {};
    var17 = var13.VOICE_CONTROLS_TOGGLE_BUTTON;
    var14 = {};
    var14['x'] = var1;
    var14['y'] = var1;
    var14['width'] = var1;
    var14['height'] = var1;
    var16 = 6;
    var18 = var11[var16];
    var18 = var10.bind(var1)(var18);
    var18 = var18.OrientationType;
    var18 = var18.PORTRAIT;
    var14['screenOrientation'] = var18;
    var14['hasUserInteractedSinceOrientationChange'] = var15;
    var14['isInitialized'] = var15;
    var14['isVisible'] = var15;
    var12[var17] = var14;
    var14 = var13.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
    var13 = {};
    var13['x'] = var1;
    var13['y'] = var1;
    var13['width'] = var1;
    var13['height'] = var1;
    var16 = var11[var16];
    var16 = var10.bind(var1)(var16);
    var16 = var16.OrientationType;
    var16 = var16.PORTRAIT;
    var13['screenOrientation'] = var16;
    var13['hasUserInteractedSinceOrientationChange'] = var15;
    var13['isInitialized'] = var15;
    var13['isVisible'] = var15;
    var12[var14] = var13;
    var2['voiceCallOverlayLayoutStates'] = var12;
    var2 = var6.bind(var7)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var11[var2];
    var7 = var10.bind(var1)(var2);
    var6 = var7.create;
    var2 = function() {
        var1 = _closure1_slot9;
        return var1;
    };
    var2 = var6.bind(var7)(var2);
    var _closure1_slot10 = var2;
    var7 = function resetFocusTimer() {
        var4 = _closure1_slot8;
        var1 = var4.stop;
        var1 = var1.bind(var4)();
        var3 = var4.start;
        var2 = 5000;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot10;
                var2 = var3.setState;
                var1 = {};
                var4 = false;
                var1['focus'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot11 = var7;
    var6 = 11;
    var6 = var11[var6];
    var13 = var9.bind(var1)(var6);
    var12 = var13.throttle;
    var9 = function() {
        var4 = _closure1_slot10;
        var3 = var4.getState;
        var3 = var3.bind(var4)();
        var3 = var3.pipFocus;
        var _closure2_slot0 = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot10;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var4 = !var4;
            var1['pipFocus'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var6 = 300;
    var6 = var12.bind(var13)(var9, var6);
    var9 = 17;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/video_calls/native/ChannelCallStore.tsx';
    var9 = var10.bind(var11)(var9);
    var3['focusTimeout'] = var8;
    var8 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot10;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['focus'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setFocus'] = var8;
    var8 = function() {
        var4 = _closure1_slot10;
        var3 = var4.getState;
        var3 = var3.bind(var4)();
        var3 = var3.focus;
        var _closure2_slot0 = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot10;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var4 = !var4;
            var1['focus'] = var4;
            var4 = false;
            var1['pipFocus'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['toggleFocus'] = var8;
    var3['resetFocusTimer'] = var7;
    var7 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot10;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.focus;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot10;
                var2 = var3.setState;
                var1 = {};
                var4 = true;
                var1['focus'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var2 = _closure1_slot11;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var3['resetFocus'] = var7;
    var7 = function() {
        var2 = _closure1_slot8;
        var1 = var2.stop;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var3['clearFocusTimer'] = var7;
    var7 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var5;
            var3 = _closure1_slot5;
            var3 = var3.OPEN;
            var3 = var5 !== var3;
            if(!var3) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var4 = _closure1_slot5;
            var4 = var4.CLOSED;
            var3 = var5 !== var4;
case 2:
            if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 9;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.wait;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.updateChatOpen;
                var2 = _closure2_slot0;
                var5 = _closure2_slot1;
                var1 = _closure1_slot5;
                var1 = var1.OPEN;
                var1 = var5 === var1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
case 7:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot10;
                var2 = var3.setState;
                var1 = {};
                var4 = _closure2_slot1;
                var1['voiceChatDrawerState'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setVoiceChatDrawerState'] = var7;
    var3['togglePipFocus'] = var6;
    var3['useIsVoiceChatFocused'] = var5;
    var5 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 12;
            var4 = var6[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var8 = var4.bind(var1)(var9);
            var _closure2_slot0 = var8;
            var4 = 13;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var10 = var4.bind(var1)(var9);
            var _closure2_slot1 = var10;
            var4 = var9.isGuildStageVoice;
            var7 = var4.bind(var9)();
            if(!var7) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var4 = null;
            var7 = var4 == var10;
case 9:
            var _closure2_slot2 = var7;
            var4 = _closure1_slot12;
            var5 = var4.bind(var1)();
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 14;
            var4 = var11[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.useIsConnectedToVoiceChannel;
            var4 = var4.bind(var6)(var9);
            var4 = !var4;
            var6 = var5;
            if(var6) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var6 = var4;
case 11:
            var _closure2_slot3 = var6;
            var5 = _closure1_slot4;
            var4 = var5.getCurrentEmbeddedActivity;
            var4 = var4.bind(var5)();
            var5 = null;
            var5 = var5 == var4;
            var9 = undefined;
            if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var9 = var4.applicationId;
case 13:
            var _closure2_slot4 = var9;
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 15;
            var4 = var11[var4];
            var13 = var5.bind(var1)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var4;
            var5 = new Array(1);
            var5[0] = var9;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var4 = _closure1_slot4;
                    var3 = var4.getOrientationLockStateForApp;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var1);
                    if(!(var2 == var1)) { _fun0005_ip = 17; continue _fun0005 }
case 15:
                    var2 = _closure1_slot6;
                    var1 = var2.UNLOCKED;
case 17:
                    return var1;
                }
            };
            var11 = var12.bind(var13)(var11, var4, var5);
            var _closure2_slot5 = var11;
            var5 = _closure1_slot3;
            var12 = var5.useEffect;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.restoreDefaultOrientation;
                return var1;
            };
            var3 = new Array(0);
            var3 = var12.bind(var5)(var4, var3);
            var4 = var5.useEffect;
            var3 = new Array(6);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var9;
            var3[3] = var8;
            var3[4] = var7;
            var3[5] = var6;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0006_ip = 18; continue _fun0006 }
case 16:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var1 = _closure2_slot1;
                    var4 = var1.type;
                    var3 = _closure1_slot7;
                    var3 = var3.ACTIVITY;
                    if(!(var4 === var3)) { _fun0006_ip = 20; continue _fun0006 }
case 22:
                    var3 = _closure2_slot1;
                    var4 = var3.applicationId;
                    var3 = _closure2_slot4;
                    if(!(var4 !== var3)) { _fun0006_ip = 23; continue _fun0006 }
case 20:
                    var3 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 6;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    if(var3) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var4 = var5.unlockOrientation;
                    var3 = {};
                    var6 = false;
                    var3['unlockAfterRotatingToPreviousLock'] = var6;
                    var3 = var4.bind(var5)(var3);
                    _fun0006_ip = 26; continue _fun0006;
case 24:
                    var4 = var5.lockOrientationForiOS;
                    var3 = 'PORTRAIT';
                    var3 = var4.bind(var5)(var3);
                    _fun0006_ip = 26; continue _fun0006;
case 23:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 16;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isIpadOS;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var4 = _closure2_slot5;
                    var2 = _closure1_slot6;
                    var2 = var2.UNLOCKED;
                    if(!(var2 !== var4)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var2 = _closure1_slot6;
                    var2 = var2.PORTRAIT;
                    if(!(var2 !== var4)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var2 = _closure1_slot6;
                    var2 = var2.LANDSCAPE;
                    if(!(var2 === var4)) { _fun0006_ip = 26; continue _fun0006 }
case 32:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var6 = var4.bind(var3)(var2);
                    var5 = var6.lockOrientation;
                    var4 = 'LANDSCAPE';
                    var2 = true;
                    var2 = var5.bind(var6)(var4, var2);
                    _fun0006_ip = 26; continue _fun0006;
case 30:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var6 = var4.bind(var3)(var2);
                    var5 = var6.lockOrientation;
                    var4 = 'PORTRAIT';
                    var2 = true;
                    var2 = var5.bind(var6)(var4, var2);
                    _fun0006_ip = 26; continue _fun0006;
case 28:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.unlockOrientation;
                    var1 = {};
                    var4 = true;
                    var1['unlockAfterRotatingToPreviousLock'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0006_ip = 26; continue _fun0006;
case 18:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var5 = var4[var1];
                    var2 = undefined;
                    var7 = var3.bind(var2)(var5);
                    var6 = var7.unlockOrientation;
                    var5 = {};
                    var8 = false;
                    var5['unlockAfterRotatingToPreviousLock'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var1 = var4[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.lockOrientationForiOS;
                    var1 = 'PORTRAIT';
                    var1 = var2.bind(var3)(var1);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useChannelCallOrientationHandlers'] = var5;
    var4 = function() {
        var3 = _closure1_slot8;
        var2 = var3.stop;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot10;
            var2 = var3.setState;
            var1 = _closure1_slot9;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetChannelCallStore'] = var4;
    var3['useChannelCallStore'] = var2;
    return var1;
})();