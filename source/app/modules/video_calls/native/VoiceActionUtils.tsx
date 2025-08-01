// app/modules/video_calls/native/VoiceActionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function NOOP() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = {};
    var7 = 0;
    var4['SERVER_MUTE'] = var7;
    var1 = 'SERVER_MUTE';
    var4[var7] = var1;
    var1 = 1;
    var4['SUPPRESS'] = var1;
    var7 = 'SUPPRESS';
    var4[var1] = var7;
    var8 = 2;
    var4['SELF_MUTE'] = var8;
    var7 = 'SELF_MUTE';
    var4[var8] = var7;
    var8 = 3;
    var4['NONE'] = var8;
    var7 = 'NONE';
    var4[var8] = var7;
    var _closure1_slot2 = var4;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/VoiceActionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['DominantMuteState'] = var4;
    var4 = function createMuteHandler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = arguments[1];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var1 = false;
 14:
            var2 = _closure1_slot2;
            var2 = var2.NONE;
            var3 = var5.selfMute;
            if(!var3) { _fun0001_ip = 46; continue _fun0001 }
 36:
            var3 = _closure1_slot2;
            var2 = var3.SELF_MUTE;
 46:
            if(var1) { _fun0001_ip = 76; continue _fun0001 }
 49:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var1 = var3.bind(var7)(var1);
            var3 = var1.handleToggleSelfMute;
            _fun0001_ip = 80; continue _fun0001;
 76:
            var3 = _closure1_slot3;
 80:
            var1 = var5.suppress;
            if(!var1) { _fun0001_ip = 124; continue _fun0001 }
 89:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 0;
            var1 = var8[var1];
            var1 = var6.bind(var7)(var1);
            var3 = var1.showSuppressedAlert;
            var6 = _closure1_slot2;
            var2 = var6.SUPPRESS;
 124:
            var1 = var5.mute;
            if(!var1) { _fun0001_ip = 168; continue _fun0001 }
 133:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 0;
            var1 = var8[var1];
            var1 = var6.bind(var7)(var1);
            var3 = var1.showServerMuteAlert;
            var4 = _closure1_slot2;
            var2 = var4.SERVER_MUTE;
 168:
            var1 = {};
            var4 = var5.selfMute;
            if(var4) { _fun0001_ip = 185; continue _fun0001 }
 179:
            var4 = var5.mute;
 185:
            if(var4) { _fun0001_ip = 194; continue _fun0001 }
 188:
            var4 = var5.suppress;
 194:
            var1['mute'] = var4;
            var1['onPress'] = var3;
            var1['dominantMuteState'] = var2;
            return var1;
        }
    };
    var3['createMuteHandler'] = var4;
    var2 = function createDeafHandler(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 0;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var2 = var2.handleToggleSelfDeaf;
            var3 = var4.deaf;
            if(!var3) { _fun0002_ip = 65; continue _fun0002 }
 42:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var3.bind(var5)(var1);
            var2 = var1.showServerDeafenAlert;
 65:
            var1 = {};
            var3 = var4.selfDeaf;
            if(var3) { _fun0002_ip = 82; continue _fun0002 }
 76:
            var3 = var4.deaf;
 82:
            var1['deaf'] = var3;
            var1['onPress'] = var2;
            return var1;
        }
    };
    var3['createDeafHandler'] = var2;
    return var1;
})();