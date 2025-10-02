// app/records/VoiceStateRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot5 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function VoiceStateRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot3;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot5;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.userId;
                if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var3 = '';
case 9:
                var1['userId'] = var3;
                var3 = var2.channelId;
                if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var3 = null;
case 11:
                var1['channelId'] = var3;
                var3 = var2.sessionId;
                if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var3 = null;
case 13:
                var1['sessionId'] = var3;
                var3 = var2.mute;
                if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var3 = false;
case 15:
                var1['mute'] = var3;
                var3 = var2.deaf;
                if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var3 = false;
case 17:
                var1['deaf'] = var3;
                var3 = var2.selfMute;
                if(var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var3 = false;
case 19:
                var1['selfMute'] = var3;
                var3 = var2.selfDeaf;
                if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var3 = false;
case 21:
                var1['selfDeaf'] = var3;
                var3 = var2.selfVideo;
                if(var3) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var3 = false;
case 23:
                var1['selfVideo'] = var3;
                var3 = var2.selfStream;
                if(var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var3 = false;
case 25:
                var1['selfStream'] = var3;
                var3 = var2.suppress;
                if(var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var3 = false;
case 27:
                var1['suppress'] = var3;
                var3 = var2.requestToSpeakTimestamp;
                var1['requestToSpeakTimestamp'] = var3;
                var3 = var2.discoverable;
                var2 = null;
                var2 = var2 == var3;
                if(var2) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var2 = var3;
case 29:
                var1['discoverable'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'isVoiceMuted';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var1 = var2.selfMute;
                if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var1 = var2.mute;
case 31:
                if(var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var1 = var2.suppress;
case 33:
                if(var1) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var3 = var2.requestToSpeakTimestamp;
                var2 = null;
                var1 = var2 != var3;
case 35:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'isVoiceDeafened';
        var5['key'] = var7;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var1 = var2.selfDeaf;
                if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var1 = var2.deaf;
case 31:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 6;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/VoiceStateRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();