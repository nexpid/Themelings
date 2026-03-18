// app/modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var5 = function pauseCurrentAudioPlayer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.isAndroid;
            var3 = var3.bind(var5)();
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot9;
            var5 = var3.DCDAudioPlayerManager;
            var3 = null;
            if(!(var3 != var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var5.pauseCurrentPlayer;
            var3 = var3.bind(var5)(var4);
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.pauseCurrentPlayer;
            var2 = var2.bind(var3)(var4);
case 8:
            return var1;
        }
    };
    var _closure1_slot13 = var5;
    var4 = function playCurrentAudioPlayer() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot9;
            var4 = var3.DCDAudioPlayerManager;
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var3 = var4.maybePlayCurrentPlayer;
            var3 = var3.bind(var4)();
            _fun0003_ip = 12; continue _fun0003;
case 10:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.maybePlayCurrentPlayer;
            var2 = var2.bind(var3)();
case 12:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var2 = function handleVoiceMessageDeleted(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.isAndroid;
            var3 = var3.bind(var5)();
            if(var3) { _fun0004_ip = 6; continue _fun0004 }
case 7:
            var3 = _closure1_slot9;
            var5 = var3.DCDAudioPlayerManager;
            var3 = null;
            if(!(var3 != var5)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var3 = var5.handleVoiceMessageDeleted;
            var3 = var3.bind(var5)(var4);
            _fun0004_ip = 8; continue _fun0004;
case 6:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.handleVoiceMessageDeleted;
            var2 = var2.bind(var3)(var4);
case 8:
            return var1;
        }
    };
    var _closure1_slot15 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var11 = var7.AppState;
    var _closure1_slot8 = var11;
    var7 = var7.NativeModules;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 12;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var6 = function(arg1) {
        var4 = function VoiceMessagesPlaybackManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var5)();
                if(var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 16; continue _fun0005;
case 14:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 16:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var3 = _closure1_slot8;
                var3 = var3.currentState;
                var1['appState'] = var3;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arg1;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.isAndroid;
                        var4 = var4.bind(var5)();
                        if(var4) { _fun0006_ip = 6; continue _fun0006 }
case 7:
                        var4 = _closure1_slot9;
                        var6 = var4.DCDAccessibilityManager;
                        var5 = var6.handleSetPrefersReducedMotion;
                        var4 = var2.prefersReducedMotion;
                        var4 = var5.bind(var6)(var4);
                        _fun0006_ip = 17; continue _fun0006;
case 6:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 10;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.handleSetPrefersReducedMotion;
                        var2 = var2.prefersReducedMotion;
                        var2 = var3.bind(var4)(var2);
case 17:
                        return var1;
                    }
                };
                var1['handleSetPrefersReducedMotion'] = var3;
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.id;
                        var4 = var1.channelId;
                        var5 = _closure1_slot11;
                        var2 = var5.getCurrentlySelectedChannelId;
                        var2 = var2.bind(var5)();
                        var5 = var4 === var2;
                        var4 = null;
                        var2 = var4 != var5;
                        if(!var2) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                        var2 = var5;
case 18:
                        if(!var2) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                        var2 = _closure1_slot15;
                        if(!(var4 != var2)) { _fun0007_ip = 20; continue _fun0007 }
case 9:
                        var2 = _closure1_slot15;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 20:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMessageDelete'] = var3;
                var3 = function() {
                    var3 = _closure1_slot13;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['handleLogout'] = var3;
                var2 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.state;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.isAndroid;
                        var4 = var4.bind(var5)();
                        if(!var4) { _fun0008_ip = 22; continue _fun0008 }
case 18:
                        var4 = _closure3_slot0;
                        var5 = var4.appState;
                        var4['appState'] = var3;
                        var4 = 'active';
                        if(!(var4 === var3)) { _fun0008_ip = 23; continue _fun0008 }
case 15:
                        if(!(var4 === var5)) { _fun0008_ip = 24; continue _fun0008 }
case 23:
                        var3 = var4 !== var3;
                        if(!var3) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                        var3 = var4 === var5;
case 25:
                        if(!var3) { _fun0008_ip = 22; continue _fun0008 }
case 27:
                        var4 = _closure1_slot13;
                        var3 = true;
                        var3 = var4.bind(var1)(var3);
                        _fun0008_ip = 22; continue _fun0008;
case 24:
                        var2 = _closure1_slot14;
                        var2 = var2.bind(var1)();
case 22:
                        return var1;
                    }
                };
                var1['handleAppStateChanged'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_terminate';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 11;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleLogout;
            var6 = 'LOGOUT';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleMessageDelete;
            var6 = 'MESSAGE_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleAppStateChanged;
            var6 = 'APP_STATE_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = var2.handleSetPrefersReducedMotion;
            var2 = 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_initialize';
        var5['key'] = var7;
        var6 = function value() {
            var4 = this;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 11;
            var7 = var6[var2];
            var1 = undefined;
            var10 = var3.bind(var1)(var7);
            var9 = var10.subscribe;
            var8 = var4.handleLogout;
            var7 = 'LOGOUT';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var2];
            var10 = var3.bind(var1)(var7);
            var9 = var10.subscribe;
            var8 = var4.handleMessageDelete;
            var7 = 'MESSAGE_DELETE';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var2];
            var10 = var3.bind(var1)(var7);
            var9 = var10.subscribe;
            var8 = var4.handleAppStateChanged;
            var7 = 'APP_STATE_UPDATE';
            var7 = var9.bind(var10)(var7, var8);
            var2 = var6[var2];
            var7 = var3.bind(var1)(var2);
            var3 = var7.subscribe;
            var2 = var4.handleSetPrefersReducedMotion;
            var6 = 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION';
            var2 = var3.bind(var7)(var6, var2);
            var3 = var4.handleSetPrefersReducedMotion;
            var2 = {};
            var2['type'] = var6;
            var5 = _closure1_slot10;
            var5 = var5.rawPrefersReducedMotion;
            var2['prefersReducedMotion'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var6.bind(var1)(var7);
    var7 = var6.prototype;
    var7 = Object.create(var7, {constructor: {value: var6}});
    var16 = var7;
    var6 = new var16[var6](var15);
    var6 = var6 instanceof Object ? var6 : var7;
    var7 = 13;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['pauseCurrentAudioPlayer'] = var5;
    var3['playCurrentAudioPlayer'] = var4;
    var3['handleVoiceMessageDeleted'] = var2;
    return var1;
})();