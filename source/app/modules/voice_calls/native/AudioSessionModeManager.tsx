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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function handleAVAudioSessionMode() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot11;
            var3 = var4.getChannel;
            var5 = _closure1_slot13;
            var2 = var5.getVoiceChannelId;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            var5 = null;
            if(!(var5 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot9;
            var3 = var4.getAllActiveStreams;
            var3 = var3.bind(var4)();
            var4 = var3.length;
            var3 = 0;
            var4 = var4 > var3;
            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = _closure1_slot14;
            var6 = var7.hasVideo;
            var3 = var2.id;
            var4 = var6.bind(var7)(var3);
case 8:
            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = _closure1_slot12;
            var3 = var6.isVideoEnabled;
            var4 = var3.bind(var6)();
case 10:
            var6 = _closure1_slot7;
            var3 = var6.getCurrentEmbeddedActivity;
            var3 = var3.bind(var6)();
            var3 = var5 != var3;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 14:
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
            var2 = _closure1_slot17;
            var2 = var2.AVAudioSessionMode;
            if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var2.LISTEN;
            _fun0002_ip = 17; continue _fun0002;
case 15:
            var3 = var2.VOICE;
case 17:
            _fun0002_ip = 18; continue _fun0002;
case 12:
            var2 = _closure1_slot17;
            var2 = var2.AVAudioSessionMode;
            var3 = var2.VIDEO;
case 18:
            _fun0002_ip = 19; continue _fun0002;
case 6:
            var2 = _closure1_slot17;
            var2 = var2.AVAudioSessionMode;
            var3 = var2.DEFAULT;
case 19:
            var2 = _closure1_slot18;
            var2 = var2 !== var3;
            if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = _closure1_slot15;
            var4 = var5.getState;
            var5 = var4.bind(var5)();
            var4 = _closure1_slot16;
            var4 = var4.ACTIVE;
            var2 = var5 === var4;
case 20:
            if(!var2) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            _closure1_slot18 = var3;
            var2 = _closure1_slot17;
            var1 = var2.setAVAudioSessionMode;
            var1 = var1.bind(var2)(var3);
case 22:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var4 = var4.NativeModules;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 14;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var8 = 15;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AppStates;
    var _closure1_slot16 = var8;
    var4 = var4.VoiceEngine;
    var _closure1_slot17 = var4;
    var4 = var4.AVAudioSessionMode;
    var4 = var4.VOICE;
    var _closure1_slot18 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function AudioSessionModeManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
                var1 = _closure1_slot19;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 26; continue _fun0003;
case 24:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 26:
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
                var5 = _closure1_slot20;
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