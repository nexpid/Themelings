// app/modules/video_calls/participantHasVideo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function participantHasVideo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = var3.type;
            var1 = _closure1_slot4;
            var1 = var1.ACTIVITY;
            var1 = var4 !== var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot5;
            var4 = undefined;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3.voiceState;
            var2 = null;
            var6 = var2 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.selfVideo;
case 6:
            var2 = var2 != var4;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var4;
case 8:
            _fun0001_ip = 10; continue _fun0001;
case 4:
            var4 = var3.streamId;
            var3 = null;
            var2 = var3 != var4;
case 10:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function canRenderParticipantVideo(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var7 = arguments[1];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = _closure1_slot3;
case 11:
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0002_ip = 13; continue _fun0002 }
case 3:
            var2 = _closure1_slot7;
            var2 = var2.bind(var6)(var5);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = _closure1_slot5;
            var3 = var3.bind(var6)(var5);
            var3 = !var3;
            if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 16:
            var8 = var5.user;
            var9 = var8.id;
            var10 = _closure1_slot2;
            var8 = var10.getId;
            var8 = var8.bind(var10)();
            var3 = var9 !== var8;
case 2:
            if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = _closure1_slot6;
            var4 = var4.bind(var6)(var5);
            var4 = !var4;
            if(var4) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var6 = var7.isLocalVideoDisabled;
            var5 = var5.id;
            var5 = var6.bind(var7)(var5);
            var4 = !var5;
case 19:
            var3 = var4;
case 17:
            var2 = var3;
case 14:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.ParticipantTypes;
    var _closure1_slot4 = var9;
    var9 = var6.isStreamParticipant;
    var _closure1_slot5 = var9;
    var6 = var6.isUserParticipant;
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/video_calls/participantHasVideo.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['canRenderParticipantVideo'] = var4;
    var2 = function useCanRenderParticipantVideo(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot8;
            var3 = _closure2_slot0;
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanRenderParticipantVideo'] = var2;
    return var1;
})();