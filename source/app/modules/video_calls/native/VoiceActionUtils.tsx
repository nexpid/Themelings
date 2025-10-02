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
case 0:
            var5 = arg1;
            var1 = arguments[1];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var2 = _closure1_slot2;
            var2 = var2.NONE;
            var3 = var5.selfMute;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot2;
            var2 = var3.SELF_MUTE;
case 4:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var1 = var3.bind(var7)(var1);
            var3 = var1.handleToggleSelfMute;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var3 = _closure1_slot3;
case 8:
            var1 = var5.suppress;
            if(!var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 0;
            var1 = var8[var1];
            var1 = var6.bind(var7)(var1);
            var3 = var1.showSuppressedAlert;
            var6 = _closure1_slot2;
            var2 = var6.SUPPRESS;
case 9:
            var1 = var5.mute;
            if(!var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 0;
            var1 = var8[var1];
            var1 = var6.bind(var7)(var1);
            var3 = var1.showServerMuteAlert;
            var4 = _closure1_slot2;
            var2 = var4.SERVER_MUTE;
case 11:
            var1 = {};
            var4 = var5.selfMute;
            if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = var5.mute;
case 13:
            if(var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = var5.suppress;
case 15:
            var1['mute'] = var4;
            var1['onPress'] = var3;
            var1['dominantMuteState'] = var2;
            return var1;
        }
    };
    var3['createMuteHandler'] = var4;
    var2 = function createDeafHandler(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 0;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var2 = var2.handleToggleSelfDeaf;
            var3 = var4.deaf;
            if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var3.bind(var5)(var1);
            var2 = var1.showServerDeafenAlert;
case 17:
            var1 = {};
            var3 = var4.selfDeaf;
            if(var3) { _fun0002_ip = 19; continue _fun0002 }
case 6:
            var3 = var4.deaf;
case 19:
            var1['deaf'] = var3;
            var1['onPress'] = var2;
            return var1;
        }
    };
    var3['createDeafHandler'] = var2;
    return var1;
})();