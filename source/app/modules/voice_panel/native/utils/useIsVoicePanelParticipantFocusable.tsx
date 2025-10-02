// app/modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function isVoicePanelParticipantFocusable(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg3;
            var6 = arguments[3];
            var8 = arguments[4];
            var5 = arguments[5];
            var9 = arguments[6];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot3;
case 2:
            if(!(var8 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot5;
case 4:
            if(!(var5 === var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot2;
case 6:
            if(!(var9 === var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot4;
case 8:
            var4 = null;
            if(!(var4 != var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var6.getParticipant;
            var2 = arg2;
            var3 = var3.bind(var6)(var2, var7);
            if(!(var4 != var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot6;
            var2 = var2.bind(var1)(var3);
            if(var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot7;
            var2 = var2.bind(var1)(var3);
            if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var3);
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = 6;
            var2 = var10[var2];
            var6 = var7.bind(var1)(var2);
            var2 = var6.assertNever;
            var2 = var2.bind(var6)(var3);
            var2 = undefined;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var6 = 5;
            var6 = var10[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.canRenderParticipantVideo;
            var2 = var6.bind(var7)(var3, var8);
case 20:
            _fun0001_ip = 21; continue _fun0001;
case 16:
            var8 = var9.getActiveStreamForUser;
            var6 = var3.user;
            var7 = var6.id;
            var6 = arg1;
            var6 = var8.bind(var9)(var7, var6);
            var2 = var4 != var6;
case 21:
            return var2;
case 14:
            var2 = var5.getCurrentEmbeddedActivity;
            var2 = var2.bind(var5)();
            var5 = var4 == var2;
            var1 = undefined;
            if(var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = var2.applicationId;
case 22:
            var1 = var4 != var1;
            if(!var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var3.applicationId;
            var2 = var2.applicationId;
            var1 = var3 === var2;
case 24:
            return var1;
case 12:
            var1 = false;
            return var1;
case 10:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot9 = var2;
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
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.isActivityParticipant;
    var _closure1_slot6 = var8;
    var8 = var5.isStreamParticipant;
    var _closure1_slot7 = var8;
    var5 = var5.isUserParticipant;
    var _closure1_slot8 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useIsVoicePanelParticipantFocusable(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = _closure1_slot5;
        var2[1] = var6;
        var6 = _closure1_slot2;
        var2[2] = var6;
        var5 = _closure1_slot4;
        var2[3] = var5;
        var1 = function() {
            var9 = _closure1_slot9;
            var16 = _closure2_slot0;
            var15 = _closure2_slot1;
            var14 = _closure2_slot2;
            var13 = _closure1_slot3;
            var12 = _closure1_slot5;
            var11 = _closure1_slot2;
            var10 = _closure1_slot4;
            var17 = undefined;
            var1 = var17[var9](var16, var15, var14, var13, var12, var11, var10, var9);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['isVoicePanelParticipantFocusable'] = var2;
    return var1;
})();