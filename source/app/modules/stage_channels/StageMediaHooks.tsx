// app/modules/stage_channels/StageMediaHooks.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function useStageHasStream(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = var4.getMutableParticipants;
            var2 = _closure2_slot0;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var5 = var5[var1];
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var1 = var1.StageChannelParticipantNamedIndex;
            var1 = var1.SPEAKER;
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.StageChannelParticipantTypes;
                var1 = var1.STREAM;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot5 = var5;
    var4 = function getStageHasStream(arg1) {
        var4 = _closure1_slot4;
        var3 = var4.getMutableParticipants;
        var5 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var2);
        var1 = var1.StageChannelParticipantNamedIndex;
        var2 = var1.SPEAKER;
        var1 = arg1;
        var3 = var3.bind(var4)(var1, var2);
        var2 = var3.find;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.StageChannelParticipantTypes;
            var1 = var1.STREAM;
            var1 = var2 === var1;
            return var1;
        };
        var2 = var2.bind(var3)(var1);
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot6 = var4;
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
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/StageMediaHooks.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useStageHasMedia(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var2 = _closure1_slot5;
            var6 = undefined;
            var2 = var2.bind(var6)(var7);
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 3;
            var4 = var8[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.hasVideo;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var5.bind(var6)(var4, var1, var3);
            if(var1) { _fun0001_ip = 86; continue _fun0001 }
 83:
            var1 = var2;
 86:
            return var1;
        }
    };
    var3['useStageHasMedia'] = var6;
    var3['useStageHasStream'] = var5;
    var5 = function getStageHasMedia(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot6;
            var1 = undefined;
            var1 = var3.bind(var1)(var4);
            if(var1) { _fun0002_ip = 35; continue _fun0002 }
 20:
            var3 = _closure1_slot3;
            var2 = var3.hasVideo;
            var1 = var2.bind(var3)(var4);
 35:
            return var1;
        }
    };
    var3['getStageHasMedia'] = var5;
    var3['getStageHasStream'] = var4;
    var4 = function useIsStageVideoEnabled(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 3;
            var3 = var4[var3];
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = var5.useStateFromStores;
            var6 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var5)(var2, var1);
            var2 = null;
            var1 = var2 != var3;
            if(!var1) { _fun0003_ip = 104; continue _fun0003 }
 71:
            var5 = var2 == var3;
            var4 = undefined;
            if(var5) { _fun0003_ip = 86; continue _fun0003 }
 80:
            var4 = var3.maxStageVideoChannelUsers;
 86:
            var5 = var2 != var4;
            var3 = 0;
            var2 = 0;
            if(!var5) { _fun0003_ip = 100; continue _fun0003 }
 97:
            var2 = var4;
 100:
            var1 = var2 > var3;
 104:
            return var1;
        }
    };
    var3['useIsStageVideoEnabled'] = var4;
    var2 = function isStageVideoEnabled(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.getGuild;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = null;
            var1 = var2 != var3;
            if(!var1) { _fun0004_ip = 62; continue _fun0004 }
 29:
            var5 = var2 == var3;
            var4 = undefined;
            if(var5) { _fun0004_ip = 44; continue _fun0004 }
 38:
            var4 = var3.maxStageVideoChannelUsers;
 44:
            var5 = var2 != var4;
            var3 = 0;
            var2 = 0;
            if(!var5) { _fun0004_ip = 58; continue _fun0004 }
 55:
            var2 = var4;
 58:
            var1 = var2 > var3;
 62:
            return var1;
        }
    };
    var3['isStageVideoEnabled'] = var2;
    return var1;
})();