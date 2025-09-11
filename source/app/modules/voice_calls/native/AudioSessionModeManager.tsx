// app/modules/voice_calls/native/AudioSessionModeManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function handleAVAudioSessionMode() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot11;
            var3 = var4.getChannel;
            var5 = _closure1_slot13;
            var2 = var5.getVoiceChannelId;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            var5 = null;
            if(!(var5 != var2)) { _fun0002_ip = 217; continue _fun0002 }
 40:
            var4 = _closure1_slot9;
            var3 = var4.getAllActiveStreams;
            var3 = var3.bind(var4)();
            var4 = var3.length;
            var3 = 0;
            var4 = var4 > var3;
            if(var4) { _fun0002_ip = 88; continue _fun0002 }
 68:
            var7 = _closure1_slot14;
            var6 = var7.hasVideo;
            var3 = var2.id;
            var4 = var6.bind(var7)(var3);
 88:
            if(var4) { _fun0002_ip = 105; continue _fun0002 }
 91:
            var6 = _closure1_slot12;
            var3 = var6.isVideoEnabled;
            var4 = var3.bind(var6)();
 105:
            var6 = _closure1_slot7;
            var3 = var6.getCurrentEmbeddedActivity;
            var3 = var3.bind(var6)();
            var3 = var5 != var3;
            if(var4) { _fun0002_ip = 205; continue _fun0002 }
 126:
            if(var3) { _fun0002_ip = 205; continue _fun0002 }
 129:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 16;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.shouldImmediatelyRequestVoicePermissions;
            var6 = _closure1_slot10;
            var3 = var6.getId;
            var3 = var3.bind(var6)();
            var2 = var2.id;
            var3 = var4.bind(var5)(var3, var2);
            var2 = _closure1_slot18;
            if(var3) { _fun0002_ip = 197; continue _fun0002 }
 189:
            var3 = var2.LISTEN;
            _fun0002_ip = 203; continue _fun0002;
 197:
            var3 = var2.VOICE;
 203:
            _fun0002_ip = 215; continue _fun0002;
 205:
            var2 = _closure1_slot18;
            var3 = var2.VIDEO;
 215:
            _fun0002_ip = 227; continue _fun0002;
 217:
            var2 = _closure1_slot18;
            var3 = var2.DEFAULT;
 227:
            var2 = _closure1_slot19;
            var2 = var2 !== var3;
            if(!var2) { _fun0002_ip = 266; continue _fun0002 }
 238:
            var5 = _closure1_slot15;
            var4 = var5.getState;
            var5 = var4.bind(var5)();
            var4 = _closure1_slot16;
            var4 = var4.ACTIVE;
            var2 = var5 === var4;
 266:
            if(!var2) { _fun0002_ip = 284; continue _fun0002 }
 269:
            _closure1_slot19 = var3;
            var2 = _closure1_slot17;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 284:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.NativeModules;
    var4 = var4.Platform;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppStates;
    var _closure1_slot16 = var4;
    var4 = function VoiceEngine_setAVAudioSessionMode() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot17 = var4;
    var4 = {'VOICE': 'AVAudioSessionModeVoiceChat', 'VIDEO': 'AVAudioSessionModeVideoChat', 'LISTEN': 'AVAudioSessionModeSpokenAudio', 'DEFAULT': 'AVAudioSessionModeDefault'};
    var _closure1_slot18 = var4;
    var4 = var4.VOICE;
    var _closure1_slot19 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function AudioSessionModeManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot20;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 84; continue _fun0003 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 118; continue _fun0003;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var3.bind(var4)(var5, var1);
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var14 = var4;
                var3 = new var14[var3](var13);
                var6 = var3 instanceof Object ? var3 : var4;
                var4 = var6.set;
                var3 = _closure1_slot9;
                var5 = _closure1_slot21;
                var6 = var4.bind(var6)(var3, var5);
                var4 = var6.set;
                var3 = _closure1_slot14;
                var6 = var4.bind(var6)(var3, var5);
                var4 = var6.set;
                var3 = _closure1_slot12;
                var6 = var4.bind(var6)(var3, var5);
                var4 = var6.set;
                var3 = _closure1_slot8;
                var4 = var4.bind(var6)(var3, var5);
                var3 = var4.set;
                var2 = _closure1_slot7;
                var2 = var3.bind(var4)(var2, var5);
                var1['stores'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/AudioSessionModeManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();