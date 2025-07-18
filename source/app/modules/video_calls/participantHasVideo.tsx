// app/modules/video_calls/participantHasVideo.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function participantHasVideo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = var3.type;
            var1 = _closure1_slot4;
            var1 = var1.ACTIVITY;
            var1 = var4 !== var1;
            if(!var1) { _fun0001_ip = 92; continue _fun0001 }
 28:
            var2 = _closure1_slot5;
            var4 = undefined;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0001_ip = 77; continue _fun0001 }
 42:
            var5 = var3.voiceState;
            var2 = null;
            var6 = var2 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 65; continue _fun0001 }
 59:
            var4 = var5.selfVideo;
 65:
            var2 = var2 != var4;
            if(!var2) { _fun0001_ip = 75; continue _fun0001 }
 72:
            var2 = var4;
 75:
            _fun0001_ip = 89; continue _fun0001;
 77:
            var4 = var3.streamId;
            var3 = null;
            var2 = var3 != var4;
 89:
            var1 = var2;
 92:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function canRenderParticipantVideo(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var7 = arguments[1];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0002_ip = 19; continue _fun0002 }
 12:
            var7 = _closure1_slot3;
 19:
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0002_ip = 138; continue _fun0002 }
 28:
            var2 = _closure1_slot7;
            var2 = var2.bind(var6)(var5);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0002_ip = 135; continue _fun0002 }
 49:
            var3 = _closure1_slot5;
            var3 = var3.bind(var6)(var5);
            var3 = !var3;
            if(var3) { _fun0002_ip = 92; continue _fun0002 }
 64:
            var8 = var5.user;
            var9 = var8.id;
            var10 = _closure1_slot2;
            var8 = var10.getId;
            var8 = var8.bind(var10)();
            var3 = var9 !== var8;
 92:
            if(!var3) { _fun0002_ip = 132; continue _fun0002 }
 95:
            var4 = _closure1_slot6;
            var4 = var4.bind(var6)(var5);
            var4 = !var4;
            if(var4) { _fun0002_ip = 129; continue _fun0002 }
 110:
            var6 = var7.isLocalVideoDisabled;
            var5 = var5.id;
            var5 = var6.bind(var7)(var5);
            var4 = !var5;
 129:
            var3 = var4;
 132:
            var2 = var3;
 135:
            var1 = var2;
 138:
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