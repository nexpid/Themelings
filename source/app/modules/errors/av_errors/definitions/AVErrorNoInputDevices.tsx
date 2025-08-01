// app/modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function getActiveErrors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.voiceChannelId;
            var7 = var1.voiceState;
            var3 = _closure1_slot2;
            var1 = var3.getChannel;
            var6 = var1.bind(var3)(var4);
            var5 = null;
            var4 = var5 == var6;
            var1 = undefined;
            var3 = undefined;
            if(var4) { _fun0001_ip = 55; continue _fun0001 }
 45:
            var4 = var6.isGuildStageVoice;
            var3 = var4.bind(var6)();
 55:
            if(!var3) { _fun0001_ip = 76; continue _fun0001 }
 58:
            var8 = var5 == var7;
            var4 = undefined;
            if(var8) { _fun0001_ip = 73; continue _fun0001 }
 67:
            var4 = var7.suppress;
 73:
            var3 = var4;
 76:
            var4 = global;
            var8 = var4.Object;
            var7 = var8.keys;
            var9 = _closure1_slot3;
            var4 = var9.getInputDevices;
            var4 = var4.bind(var9)();
            var4 = var7.bind(var8)(var4);
            var8 = var4.length;
            var7 = _closure1_slot4;
            var4 = var7.getMediaSessionId;
            var4 = var4.bind(var7)();
            var7 = 0;
            if(!(var7 === var8)) { _fun0001_ip = 221; continue _fun0001 }
 133:
            if(!(var5 != var6)) { _fun0001_ip = 221; continue _fun0001 }
 137:
            if(!(var5 != var4)) { _fun0001_ip = 221; continue _fun0001 }
 141:
            if(var3) { _fun0001_ip = 221; continue _fun0001 }
 144:
            var3 = {};
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.AVError;
            var2 = var2.NO_INPUT_DEVICES;
            var3['type'] = var2;
            var2 = 4;
            var2 = var5[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.getVoiceChannelErrorContext;
            var10 = var2.bind(var4)();
            var11 = var3;
            var2 = copyDataProperties(var11, var10);
            var2 = new Array(1);
            var2[0] = var3;
            return var2;
 221:
            return var1;
        }
    };
    var2['getActiveErrors'] = var7;
    var4 = function makeErrorContextKey(arg1) {
        var1 = arg1;
        var3 = var1.mediaSessionId;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['makeErrorContextKey'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AVErrorNoInputDevicesDefinition'] = var2;
    return var1;
})();