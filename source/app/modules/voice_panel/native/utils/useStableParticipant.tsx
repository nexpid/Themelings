// app/modules/voice_panel/native/utils/useStableParticipant.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function isStableStreamParticipant(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = global;
            var3 = var1.Boolean;
            var5 = null;
            var1 = var5 == var6;
            var2 = undefined;
            var7 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var6.type;
case 2:
            var1 = _closure1_slot7;
            var1 = var1.STREAM;
            var1 = var7 === var1;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6.type;
case 6:
            var4 = _closure1_slot7;
            var4 = var4.HIDDEN_STREAM;
            var1 = var5 === var4;
case 4:
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function isStableUserParticipant(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = global;
            var3 = var2.Boolean;
            var2 = null;
            var5 = var2 == var1;
            var2 = undefined;
            var4 = undefined;
            if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var4 = var1.type;
case 2:
            var1 = _closure1_slot7;
            var1 = var1.USER;
            var1 = var4 === var1;
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function isStableActivityParticipant(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = global;
            var3 = var2.Boolean;
            var2 = null;
            var5 = var2 == var1;
            var2 = undefined;
            var4 = undefined;
            if(var5) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var4 = var1.type;
case 2:
            var1 = _closure1_slot7;
            var1 = var1.ACTIVITY;
            var1 = var4 === var1;
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = function areStableParticipantsEqual(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = var6 === var5;
            if(var1) { _fun0004_ip = 6; continue _fun0004 }
case 8:
            var3 = null;
            var2 = var3 != var6;
            if(!var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var2 = var3 != var5;
case 9:
            if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 2:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 5;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var2 = var3.bind(var4)(var6, var5);
case 11:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ParticipantTypes;
    var _closure1_slot7 = var7;
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/voice_panel/native/utils/useStableParticipant.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function useStableParticipant(arg1, arg2, arg3) {
        var9 = arg1;
        var8 = arg2;
        var7 = arg3;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var8;
        var _closure2_slot2 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot3;
        var4 = new Array(4);
        var4[0] = var3;
        var3 = _closure1_slot6;
        var4[1] = var3;
        var3 = _closure1_slot4;
        var4[2] = var3;
        var3 = _closure1_slot5;
        var4[3] = var3;
        var3 = new Array(3);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var10 = _closure1_slot11;
        var12 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var1)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                var5 = _closure1_slot3;
                var4 = var5.getParticipant;
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var3 = var4.bind(var5)(var3, var1);
                var5 = var2 != var3;
                var1 = undefined;
                var4 = undefined;
                if(!var5) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var4 = var3;
case 14:
                if(!(var2 != var4)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 9;
                var3 = var7[var3];
                var3 = var5.bind(var1)(var3);
                var9 = var3.bind(var1)(var4);
                var5 = var4.type;
                var3 = _closure1_slot7;
                var3 = var3.ACTIVITY;
                if(!(var3 !== var5)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var3 = _closure1_slot7;
                var3 = var3.STREAM;
                if(!(var3 !== var5)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var3 = _closure1_slot7;
                var3 = var3.HIDDEN_STREAM;
                if(!(var3 !== var5)) { _fun0005_ip = 20; continue _fun0005 }
case 22:
                var3 = _closure1_slot7;
                var3 = var3.USER;
                if(!(var3 !== var5)) { _fun0005_ip = 23; continue _fun0005 }
case 12:
                var3 = undefined;
                return var3;
case 23:
                var3 = var4.user;
                var7 = var3.id;
                var5 = _closure1_slot4;
                var3 = var5.getId;
                var5 = var3.bind(var5)();
                var3 = {};
                var10 = var4.type;
                var3['type'] = var10;
                var10 = _closure2_slot0;
                var3['id'] = var10;
                var10 = var4.user;
                var3['user'] = var10;
                var10 = var4.voiceState;
                var12 = var2 == var10;
                var11 = undefined;
                if(var12) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var11 = var10.selfVideo;
case 24:
                var10 = var2 != var11;
                if(!var10) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var10 = var11;
case 26:
                var3['selfVideo'] = var10;
                var10 = var4.userNick;
                var3['userNick'] = var10;
                var10 = var4.userAvatarDecoration;
                var3['userAvatarDecoration'] = var10;
                var11 = var4.streamId;
                var12 = var2 != var11;
                var10 = undefined;
                if(!var12) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var10 = var11;
case 28:
                var3['streamId'] = var10;
                var10 = var4.ringing;
                var3['ringing'] = var10;
                var3['hasVideo'] = var9;
                var10 = var9;
                if(!var10) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var13 = _closure1_slot5;
                var12 = var13.isLocalVideoDisabled;
                var11 = var4.user;
                var11 = var11.id;
                var11 = var12.bind(var13)(var11);
                var10 = !var11;
case 30:
                var3['canRenderVideo'] = var10;
                var5 = var7 === var5;
                var3['isSelf'] = var5;
                return var3;
case 20:
                var3 = var4.user;
                var7 = var3.id;
                var5 = _closure1_slot4;
                var3 = var5.getId;
                var5 = var3.bind(var5)();
                var3 = {};
                var10 = var4.type;
                var3['type'] = var10;
                var10 = _closure2_slot0;
                var3['id'] = var10;
                var10 = var4.user;
                var3['user'] = var10;
                var10 = var4.userNick;
                var3['userNick'] = var10;
                var11 = var4.streamId;
                var12 = var2 != var11;
                var10 = undefined;
                if(!var12) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var10 = var11;
case 32:
                var3['streamId'] = var10;
                var10 = var4.stream;
                var11 = var10.guildId;
                var12 = var2 != var11;
                var10 = undefined;
                if(!var12) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var10 = var11;
case 34:
                var3['streamGuildId'] = var10;
                var3['hasVideo'] = var9;
                var5 = var7 === var5;
                var3['isSelf'] = var5;
                return var3;
case 18:
                var3 = {};
                var5 = var4.type;
                var3['type'] = var5;
                var5 = _closure2_slot0;
                var3['id'] = var5;
                var4 = var4.applicationId;
                var3['applicationId'] = var4;
                return var3;
case 16:
                var5 = _closure1_slot6;
                var4 = var5.getUser;
                var3 = _closure2_slot0;
                var9 = var4.bind(var5)(var3);
                if(!(var2 != var9)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var4 = var9.id;
                var3 = _closure1_slot4;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var2 = {};
                var5 = _closure1_slot7;
                var5 = var5.USER;
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['id'] = var5;
                var2['user'] = var9;
                var5 = false;
                var2['selfVideo'] = var5;
                var2['canRenderVideo'] = var5;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 7;
                var8 = var10[var8];
                var12 = var7.bind(var1)(var8);
                var11 = var12.getName;
                var8 = _closure2_slot2;
                var6 = _closure2_slot1;
                var6 = var11.bind(var12)(var8, var6, var9);
                var2['userNick'] = var6;
                var6 = 8;
                var6 = var10[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.getAvatarDecoration;
                var6 = var6.bind(var7)(var9, var8);
                var2['userAvatarDecoration'] = var6;
                var2['streamId'] = var1;
                var2['ringing'] = var5;
                var2['hasVideo'] = var5;
                var3 = var4 === var3;
                var2['isSelf'] = var3;
                return var2;
case 36:
                return var1;
            }
        };
        var14 = var6;
        var13 = var4;
        var11 = var3;
        var1 = var14[var5](var13, var12, var11, var10, var9);
        return var1;
    };
    var3['default'] = var7;
    var3['isStableStreamParticipant'] = var6;
    var3['isStableUserParticipant'] = var5;
    var3['isStableActivityParticipant'] = var4;
    var4 = function isStableParticipantWithUser(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot8;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0006_ip = 2; continue _fun0006 }
case 38:
            var2 = _closure1_slot9;
            var1 = var2.bind(var3)(var4);
case 2:
            return var1;
        }
    };
    var3['isStableParticipantWithUser'] = var4;
    var2 = function stableParticipantHasVideo(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot10;
            var4 = undefined;
            var1 = var1.bind(var4)(var3);
            var1 = !var1;
            if(!var1) { _fun0007_ip = 7; continue _fun0007 }
case 39:
            var2 = _closure1_slot8;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var2 = var3.selfVideo;
            _fun0007_ip = 42; continue _fun0007;
case 40:
            var4 = var3.streamId;
            var3 = null;
            var2 = var3 != var4;
case 42:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['stableParticipantHasVideo'] = var2;
    return var1;
})();