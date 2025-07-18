// app/modules/calls/NativeMuteManager.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'NativeMuteManager';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = function NativeMuteManager() {
            var2 = this;
            var _closure3_slot0 = var2;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var2, var5);
            var5 = false;
            var2['ignoreForNativeUnmute'] = var5;
            var2['needToUnmuteNative'] = var5;
            var2['ignoreForAudioRouteChange'] = var5;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 5;
            var6 = var5[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.Timeout;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var10 = var7;
            var6 = new var10[var6](var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var2['audioRouteChangeIgnoreTimer'] = var6;
            var6 = 300;
            var2['AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS'] = var6;
            var4 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var2 = _closure3_slot0;
                    var3 = var2.audioRouteChangeIgnoreTimer;
                    var2 = var3.isStarted;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 26:
                    var2 = _closure3_slot0;
                    var3 = var2.audioRouteChangeIgnoreTimer;
                    var2 = var3.stop;
                    var2 = var2.bind(var3)();
 46:
                    var1 = _closure3_slot0;
                    var2 = true;
                    var1['ignoreForAudioRouteChange'] = var2;
                    var4 = var1.audioRouteChangeIgnoreTimer;
                    var3 = var4.start;
                    var2 = var1.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS;
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = false;
                        var2['ignoreForAudioRouteChange'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var2['handleAudioRouteChange'] = var4;
            var7 = _closure1_slot5;
            var6 = var7.addChangeListener;
            var4 = var2.handleAudioRouteChange;
            var4 = var6.bind(var7)(var4);
            var4 = _closure1_slot1;
            var3 = 6;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var3 = var2.handleVoiceChannelSelect;
            var2 = 'VOICE_CHANNEL_SELECT';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'nativeMuteChanged';
        var1['key'] = var2;
        var2 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot6;
                var3 = var4.hasActiveCallKitCall;
                var3 = var3.bind(var4)();
                if(var3) { _fun0002_ip = 122; continue _fun0002 }
 23:
                var3 = var2.ignoreForNativeUnmute;
                if(var3) { _fun0002_ip = 114; continue _fun0002 }
 32:
                var3 = var2.ignoreForAudioRouteChange;
                if(var3) { _fun0002_ip = 122; continue _fun0002 }
 41:
                var3 = true;
                var2['needToUnmuteNative'] = var3;
                var5 = _closure1_slot7;
                var4 = var5.log;
                var3 = 'Native mute changed > toggling mute';
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.toggleSelfMute;
                var1 = {};
                var5 = false;
                var1['playSoundEffect'] = var5;
                var1 = var3.bind(var4)(var1);
                _fun0002_ip = 122; continue _fun0002;
 114:
                var1 = false;
                var2['ignoreForNativeUnmute'] = var1;
 122:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'updateNativeMute';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = this;
                var4 = _closure1_slot6;
                var2 = var4.hasActiveCallKitCall;
                var2 = var2.bind(var4)();
                if(var2) { _fun0003_ip = 124; continue _fun0003 }
 23:
                var2 = var3.needToUnmuteNative;
                if(!var2) { _fun0003_ip = 124; continue _fun0003 }
 32:
                var4 = false;
                var3['needToUnmuteNative'] = var4;
                var2 = true;
                var3['ignoreForNativeUnmute'] = var2;
                var5 = _closure1_slot7;
                var3 = var5.log;
                var2 = 'Update native mute > unmuting native';
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getVoiceEngine;
                var3 = var1.bind(var2)();
                var2 = var3.setNativeMuteState;
                var1 = null;
                if(!(var1 != var2)) { _fun0003_ip = 124; continue _fun0003 }
 113:
                var1 = var2.call;
                var1 = var1.bind(var2)(var3, var4);
 124:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'handleVoiceChannelSelect';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var2 = var1.channelId;
                var1 = null;
                if(!(var1 == var2)) { _fun0004_ip = 93; continue _fun0004 }
 14:
                var5 = _closure1_slot7;
                var4 = var5.log;
                var3 = 'Leaving voice channel > unmuting native';
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getVoiceEngine;
                var4 = var2.bind(var3)();
                var3 = var4.setNativeMuteState;
                if(!(var1 != var3)) { _fun0004_ip = 93; continue _fun0004 }
 80:
                var2 = var3.call;
                var1 = false;
                var1 = var2.bind(var3)(var4, var1);
 93:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function NativeMuteManagerWrapper() {
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'nativeMuteChanged';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var3 = _closure1_slot8;
            var2 = var3.nativeMuteChanged;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'updateNativeMute';
        var1['key'] = var6;
        var5 = function value() {
            var2 = _closure1_slot8;
            var1 = var2.updateNativeMute;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/NativeMuteManager.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();