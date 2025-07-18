// app/modules/errors/av_errors/AVErrorContext.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getCommonErrorContext() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = {};
            var4 = _closure1_slot2;
            var2 = var4.getVideoDevices;
            var4 = var2.bind(var4)();
            var5 = _closure1_slot2;
            var2 = var5.getVideoDeviceId;
            var2 = var2.bind(var5)();
            var6 = var4[var2];
            var4 = null;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 53; continue _fun0001 }
 48:
            var5 = var6.name;
 53:
            var1['videoDeviceName'] = var5;
            var6 = _closure1_slot2;
            var5 = var6.getInputDevices;
            var6 = var5.bind(var6)();
            var7 = _closure1_slot2;
            var5 = var7.getInputDeviceId;
            var5 = var5.bind(var7)();
            var6 = var6[var5];
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 104; continue _fun0001 }
 99:
            var5 = var6.name;
 104:
            var1['audioInputDeviceName'] = var5;
            var6 = _closure1_slot2;
            var5 = var6.getOutputDevices;
            var5 = var5.bind(var6)();
            var6 = _closure1_slot2;
            var3 = var6.getOutputDeviceId;
            var3 = var3.bind(var6)();
            var3 = var5[var3];
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 155; continue _fun0001 }
 150:
            var2 = var3.name;
 155:
            var1['audioOutputDeviceName'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/errors/av_errors/AVErrorContext.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getVoiceChannelErrorContext() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot4;
            var1 = var3.getVoiceChannelId;
            var6 = var1.bind(var3)();
            var1 = {};
            var4 = null;
            var7 = var4 != var6;
            var3 = undefined;
            var5 = undefined;
            if(!var7) { _fun0002_ip = 35; continue _fun0002 }
 32:
            var5 = var6;
 35:
            var1['channelId'] = var5;
            var6 = _closure1_slot3;
            var5 = var6.getMediaSessionId;
            var5 = var5.bind(var6)();
            var6 = var4 != var5;
            var4 = undefined;
            if(!var6) { _fun0002_ip = 65; continue _fun0002 }
 62:
            var4 = var5;
 65:
            var1['mediaSessionId'] = var4;
            var5 = _closure1_slot3;
            var4 = var5.getRTCConnectionId;
            var4 = var4.bind(var5)();
            var1['rtcConnectionId'] = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 4;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            var4 = var4.MediaEngineContextTypes;
            var4 = var4.DEFAULT;
            var1['mediaContext'] = var4;
            var2 = _closure1_slot6;
            var8 = var2.bind(var3)();
            var9 = var1;
            var2 = copyDataProperties(var9, var8);
            return var1;
        }
    };
    var3['getVoiceChannelErrorContext'] = var5;
    var4 = function getStreamErrorContext(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.decodeStreamKey;
            var1 = var1.bind(var5)(var4);
            var5 = var1.channelId;
            var6 = _closure1_slot5;
            var1 = var6.getRTCConnection;
            var7 = var1.bind(var6)(var4);
            var1 = {};
            var1['channelId'] = var5;
            var5 = null;
            var6 = var5 == var7;
            var8 = undefined;
            if(var6) { _fun0003_ip = 86; continue _fun0003 }
 76:
            var6 = var7.getMediaSessionId;
            var8 = var6.bind(var7)();
 86:
            var9 = var5 != var8;
            var6 = undefined;
            if(!var9) { _fun0003_ip = 98; continue _fun0003 }
 95:
            var6 = var8;
 98:
            var1['mediaSessionId'] = var6;
            var6 = var5 == var7;
            var5 = undefined;
            if(var6) { _fun0003_ip = 122; continue _fun0003 }
 112:
            var6 = var7.getRTCConnectionId;
            var5 = var6.bind(var7)();
 122:
            var1['rtcConnectionId'] = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 4;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.MediaEngineContextTypes;
            var5 = var5.STREAM;
            var1['mediaContext'] = var5;
            var1['streamKey'] = var4;
            var2 = _closure1_slot6;
            var10 = var2.bind(var3)();
            var11 = var1;
            var2 = copyDataProperties(var11, var10);
            return var1;
        }
    };
    var3['getStreamErrorContext'] = var4;
    var3['getCommonErrorContext'] = var2;
    return var1;
})();