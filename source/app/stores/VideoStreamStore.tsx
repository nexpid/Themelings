// app/stores/VideoStreamStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function makeTimeoutKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function clearUser(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var4 = arg2;
            var10 = arguments[2];
            var1 = undefined;
            if(!(var10 === var1)) { _fun0002_ip = 17; continue _fun0002 }
 15:
            var10 = null;
 17:
            var2 = _closure1_slot9;
            var3 = var2[var7];
            var6 = null;
            if(!(var6 != var3)) { _fun0002_ip = 171; continue _fun0002 }
 37:
            var2 = var4;
            if(!(var6 == var4)) { _fun0002_ip = 48; continue _fun0002 }
 44:
            var2 = _closure1_slot5;
 48:
            var3 = var3[var2];
            if(!(var6 != var3)) { _fun0002_ip = 171; continue _fun0002 }
 56:
            var2 = global;
            var9 = var2.Object;
            var8 = var9.values;
            var2 = _closure1_slot6;
            var9 = var8.bind(var9)(var2);
            var2 = var9.length;
            var8 = 0;
            var2 = var8 < var2;
            if(!var2) { _fun0002_ip = 151; continue _fun0002 }
 92:
            var12 = var9[var8];
            var2 = var10 !== var12;
            if(!var2) { _fun0002_ip = 107; continue _fun0002 }
 103:
            var2 = var6 != var10;
 107:
            if(var2) { _fun0002_ip = 139; continue _fun0002 }
 110:
            var2 = delete var3[var12];
            var11 = _closure1_slot10;
            var2 = _closure1_slot12;
            if(!(var6 != var10)) { _fun0002_ip = 129; continue _fun0002 }
 126:
            var12 = var10;
 129:
            var2 = var2.bind(var1)(var12, var7);
            var2 = delete var11[var2];
 139:
            var8 = var8 + 1;
            var2 = var9.length;
            if(var8 < var2) { _fun0002_ip = 92; continue _fun0002 }
 151:
            var2 = _closure1_slot9;
            var2 = var2[var7];
            if(!(var6 == var4)) { _fun0002_ip = 167; continue _fun0002 }
 163:
            var4 = _closure1_slot5;
 167:
            var2[var4] = var3;
 171:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NULL_STRING_GUILD_ID;
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MediaEngineContextTypes;
    var _closure1_slot6 = var2;
    var2 = null;
    var _closure1_slot7 = var2;
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function VideoStreamStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'getStreamId';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arg2;
                var5 = arguments[2];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0004_ip = 25; continue _fun0004 }
 12:
                var1 = _closure1_slot6;
                var5 = var1.DEFAULT;
 25:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var3 = null;
                var8 = var3 == var2;
                var1 = undefined;
                if(var8) { _fun0004_ip = 90; continue _fun0004 }
 50:
                if(!(var3 == var6)) { _fun0004_ip = 58; continue _fun0004 }
 54:
                var6 = _closure1_slot5;
 58:
                var2 = var2[var6];
                var6 = var3 == var2;
                var1 = undefined;
                if(var6) { _fun0004_ip = 90; continue _fun0004 }
 71:
                var2 = var2[var5];
                var3 = var3 == var2;
                var1 = undefined;
                if(var3) { _fun0004_ip = 90; continue _fun0004 }
 84:
                var1 = var2.streamId;
 90:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserStreamData';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var6 = arg2;
                var3 = arguments[2];
                var5 = undefined;
                if(!(var3 === var5)) { _fun0005_ip = 25; continue _fun0005 }
 12:
                var1 = _closure1_slot6;
                var3 = var1.DEFAULT;
 25:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var4 = null;
                var8 = var4 == var2;
                var1 = undefined;
                if(var8) { _fun0005_ip = 75; continue _fun0005 }
 50:
                if(!(var4 == var6)) { _fun0005_ip = 58; continue _fun0005 }
 54:
                var6 = _closure1_slot5;
 58:
                var2 = var2[var6];
                var4 = var4 == var2;
                var1 = undefined;
                if(var4) { _fun0005_ip = 75; continue _fun0005 }
 71:
                var1 = var2[var3];
 75:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getTimedoutVideos';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getTimedoutVideo';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            var2 = _closure1_slot10;
            var5 = _closure1_slot12;
            var4 = undefined;
            var3 = arg1;
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var1);
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'VideoStreamStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen(arg1) {
        var2 = arg1;
        var1 = var2.user;
        var2 = var2.sessionId;
        var3 = var1.id;
        _closure1_slot7 = var3;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleOverlayInitialize(arg1) {
        var2 = arg1;
        var1 = var2.user;
        var2 = var2.sessionId;
        var3 = var1.id;
        _closure1_slot7 = var3;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var9 = function handleVideo(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var5 = var1.userId;
            var3 = var1.guildId;
            var8 = var1.streamId;
            var4 = var1.context;
            var2 = null;
            if(!(var2 == var8)) { _fun0006_ip = 48; continue _fun0006 }
 30:
            var6 = _closure1_slot13;
            var1 = undefined;
            var1 = var6.bind(var1)(var5, var3, var4);
            _fun0006_ip = 165; continue _fun0006;
 48:
            var6 = _closure1_slot9;
            var6 = var5 in var6;
            if(var6) { _fun0006_ip = 72; continue _fun0006 }
 62:
            var7 = _closure1_slot9;
            var6 = {};
            var7[var5] = var6;
 72:
            var6 = _closure1_slot9;
            var7 = var6[var5];
            var6 = var3;
            if(!(var2 == var3)) { _fun0006_ip = 91; continue _fun0006 }
 87:
            var6 = _closure1_slot5;
 91:
            var7 = var7[var6];
            if(!(var2 == var7)) { _fun0006_ip = 101; continue _fun0006 }
 99:
            var7 = {};
 101:
            var6 = _closure1_slot9;
            var6 = var6[var5];
            if(!(var2 == var3)) { _fun0006_ip = 117; continue _fun0006 }
 113:
            var3 = _closure1_slot5;
 117:
            var2 = {};
            var12 = var2;
            var11 = var7;
            var7 = copyDataProperties(var12, var11);
            var7 = {};
            var7['streamId'] = var8;
            var2[var4] = var7;
            var6[var3] = var2;
            var2 = _closure1_slot10;
            var3 = _closure1_slot12;
            var1 = undefined;
            var1 = var3.bind(var1)(var4, var5);
            var1 = delete var2[var1];
 165:
            var1 = undefined;
            return var1;
        }
    };
    var2['RTC_CONNECTION_VIDEO'] = var9;
    var9 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var3 = arg2;
                var7 = var3.userId;
                var4 = var3.sessionId;
                var2 = var3.channelId;
                var6 = var3.guildId;
                var9 = null;
                if(!(var9 == var2)) { _fun0007_ip = 44; continue _fun0007 }
 33:
                var5 = _closure1_slot7;
                if(!(var7 !== var5)) { _fun0007_ip = 103; continue _fun0007 }
 44:
                if(!(var9 == var2)) { _fun0007_ip = 101; continue _fun0007 }
 48:
                var5 = _closure1_slot9;
                var11 = var5[var7];
                var10 = var9 == var11;
                var5 = undefined;
                var8 = undefined;
                if(var10) { _fun0007_ip = 85; continue _fun0007 }
 70:
                var10 = var6;
                if(!(var9 == var10)) { _fun0007_ip = 81; continue _fun0007 }
 77:
                var10 = _closure1_slot5;
 81:
                var8 = var11[var10];
 85:
                if(!(var9 != var8)) { _fun0007_ip = 101; continue _fun0007 }
 89:
                var2 = _closure1_slot13;
                var2 = var2.bind(var5)(var7, var6);
                _fun0007_ip = 123; continue _fun0007;
 101:
                return var1;
 103:
                var2 = _closure1_slot8;
                if(!(var4 === var2)) { _fun0007_ip = 127; continue _fun0007 }
 111:
                var2 = {};
                _closure1_slot9 = var2;
                var2 = {};
                _closure1_slot10 = var2;
 123:
                var2 = true;
                return var2;
 127:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var9;
    var9 = function handleVideoStreamReadyTimeout(arg1) {
        var1 = arg1;
        var8 = var1.videoStreamId;
        var7 = var1.userId;
        var6 = var1.streamKey;
        var5 = var1.mediaContext;
        var4 = _closure1_slot10;
        var2 = _closure1_slot12;
        var1 = undefined;
        var3 = var2.bind(var1)(var5, var7);
        var2 = {};
        var2['videoStreamId'] = var8;
        var2['userId'] = var7;
        var2['streamKey'] = var6;
        var2['mediaContext'] = var5;
        var4[var3] = var2;
        return var1;
    };
    var2['VIDEO_STREAM_READY_TIMEOUT'] = var9;
    var4 = function handleClearVideoStreamTimeout(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var5 = var1.mediaContext;
            var4 = var1.userId;
            var3 = _closure1_slot12;
            var1 = undefined;
            var3 = var3.bind(var1)(var5, var4);
            var4 = _closure1_slot10;
            var5 = var4[var3];
            var4 = null;
            if(!(var4 != var5)) { _fun0008_ip = 53; continue _fun0008 }
 43:
            var2 = _closure1_slot10;
            var2 = delete var2[var3];
            return var1;
 53:
            var1 = false;
            return var1;
        }
    };
    var2['CLEAR_VIDEO_STREAM_READY_TIMEOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/VideoStreamStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();