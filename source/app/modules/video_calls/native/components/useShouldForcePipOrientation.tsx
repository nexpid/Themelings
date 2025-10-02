// app/modules/video_calls/native/components/useShouldForcePipOrientation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OrientationLockState;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.isStreamParticipant;
    var _closure1_slot7 = var7;
    var4 = var4.ParticipantTypes;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/useShouldForcePipOrientation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldForcePipOrientation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 5;
            var4 = var8[var4];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var1 = var1.id;
            var1 = var4.bind(var5)(var1);
            var6 = _closure1_slot0;
            var4 = 6;
            var7 = var8[var4];
            var12 = var6.bind(var5)(var7);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot4;
            var10 = new Array(2);
            var10[0] = var9;
            var7 = _closure1_slot5;
            var10[1] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot4;
                    var4 = var5.getParticipant;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var6 = _closure1_slot5;
                    var1 = var6.getId;
                    var1 = var1.bind(var6)();
                    var2 = var4.bind(var5)(var2, var1);
                    var4 = null;
                    var5 = var4 != var2;
                    var1 = null;
                    if(!var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = var2.type;
                    var3 = _closure1_slot8;
                    var3 = var3.USER;
                    var1 = null;
                    if(!(var5 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var3 = var2.streamId;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 5:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var10, var7);
            var4 = var8[var4];
            var8 = var6.bind(var5)(var4);
            var6 = var8.useStateFromStoresObject;
            var10 = _closure1_slot3;
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var9;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getCurrentEmbeddedActivity;
                    var3 = var1.bind(var2)();
                    var5 = _closure1_slot4;
                    var2 = var5.getSelectedParticipant;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var6 = var2.bind(var5)(var1);
                    var1 = {};
                    var2 = null;
                    var7 = var2 == var3;
                    var10 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = var3.applicationId;
case 6:
                    var7 = var2 != var5;
                    var5 = null;
                    if(!var7) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var7 = var2 == var6;
                    var8 = undefined;
                    if(var7) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var8 = var6.id;
case 10:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 7;
                    var7 = var11[var7];
                    var10 = var9.bind(var10)(var7);
                    var9 = var10.getEmbeddedActivityParticipantId;
                    var7 = {};
                    var11 = var3.applicationId;
                    var7['applicationId'] = var11;
                    var11 = var3.compositeInstanceId;
                    var7['instanceId'] = var11;
                    var7 = var9.bind(var10)(var7);
                    var5 = null;
                    if(!(var8 === var7)) { _fun0003_ip = 8; continue _fun0003 }
case 12:
                    var5 = var6;
case 8:
                    var1['focusedEmbeddedActivityParticipant'] = var5;
                    var5 = var2 == var3;
                    var2 = null;
                    if(var5) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var5 = _closure1_slot3;
                    var4 = var5.getPipOrientationLockStateForApp;
                    var3 = var3.applicationId;
                    var2 = var4.bind(var5)(var3);
case 13:
                    var1['activityLockOrientation'] = var2;
                    return var1;
                }
            };
            var2 = var6.bind(var8)(var4, var2);
            var8 = var2.focusedEmbeddedActivityParticipant;
            var6 = var2.activityLockOrientation;
            var2 = null;
            var9 = var2 != var1;
            var4 = null;
            if(!var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = var1.user;
            var10 = var9.id;
            var11 = _closure1_slot5;
            var9 = var11.getId;
            var9 = var9.bind(var11)();
            var4 = null;
            if(!(var10 !== var9)) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var4 = var1;
case 15:
            var1 = var4;
            if(!(var2 != var8)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = var8;
case 18:
            if(!(var2 != var1)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = _closure1_slot7;
            var8 = var8.bind(var5)(var1);
            if(var8) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var8 = _closure1_slot6;
            var8 = var8.LANDSCAPE;
            if(!(var6 === var8)) { _fun0001_ip = 20; continue _fun0001 }
case 22:
            if(!(var2 == var7)) { _fun0001_ip = 20; continue _fun0001 }
case 24:
            if(!(var2 != var4)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var4 = var4.id;
            var1 = var1.id;
            if(!(var4 === var1)) { _fun0001_ip = 20; continue _fun0001 }
case 25:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.OrientationType;
            var1 = var1.LANDSCAPE;
            _fun0001_ip = 27; continue _fun0001;
case 20:
            var4 = _closure1_slot6;
            var4 = var4.LANDSCAPE;
            if(!(var6 !== var4)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var4 = _closure1_slot6;
            var4 = var4.PORTRAIT;
            var2 = null;
            if(!(var6 === var4)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.OrientationType;
            var2 = var4.PORTRAIT;
case 30:
            _fun0001_ip = 32; continue _fun0001;
case 28:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.OrientationType;
            var2 = var3.LANDSCAPE;
case 32:
            var1 = var2;
case 27:
            return var1;
        }
    };
    var3['useShouldForcePipOrientation'] = var2;
    return var1;
})();