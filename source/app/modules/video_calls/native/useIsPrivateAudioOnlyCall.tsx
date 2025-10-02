// app/modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function areParticipantStatesEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = var5[Symbol.iterator];
            var5 = var2().next;
            var12 = undefined;
            var3 = undefined;
            var4 = undefined;
            var6 = var5().value;
            var9 = var2;
            var9 = var9 === var12;
            var3 = var9;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6;
case 2:
            var4 = undefined;
            var6 = var3;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var5().value;
            var6 = var2;
            var6 = var6 === var12;
            var3 = var6;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = var5;
case 4:
            var8 = var4;
            var4 = var3;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2.return();
case 7:
            var10 = arg2;
            var5 = var10[Symbol.iterator];
            var10 = var5().next;
            var6 = undefined;
            var9 = undefined;
            var11 = var10().value;
            var13 = var5;
            var13 = var13 === var12;
            var6 = var13;
            if(var13) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = var11;
case 9:
            var9 = undefined;
            var11 = var6;
            if(var11) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = var10().value;
            var11 = var5;
            var11 = var11 === var12;
            var6 = var11;
            if(var11) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var9 = var10;
case 11:
            var7 = var9;
            var9 = var6;
            if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5.return();
case 14:
            var7 = var8 === var7;
            return var7;
case 16:
            CatchBlockStart(arg_register=3);
            if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5.return();
case 17:
            throw var4;
case 19:
            CatchBlockStart(arg_register=0);
            if(var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2.return();
case 20:
            throw var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isActivityParticipant;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var8 = 7;
            var3 = var3[var8];
            var5 = undefined;
            var11 = var4.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var3;
            var6 = new Array(1);
            var6[0] = var7;
            var12 = _closure1_slot9;
            var14 = function() {
                var4 = _closure1_slot4;
                var3 = var4.getSelectedParticipant;
                var2 = _closure2_slot0;
                var1 = var2.id;
                var3 = var3.bind(var4)(var1);
                var1 = new Array(2);
                var1[0] = var3;
                var3 = var4.getParticipantsVersion;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1[1] = var2;
                return var1;
            };
            var16 = var11;
            var15 = var9;
            var13 = var6;
            var6 = var16[var10](var15, var14, var13, var12, var11);
            var4 = _closure1_slot2;
            var3 = 1;
            var3 = var4.bind(var5)(var6, var3);
            var6 = 0;
            var4 = var3[var6];
            var10 = _closure1_slot3;
            var9 = var10.getEmbeddedActivitiesForChannel;
            var3 = var7.id;
            var3 = var9.bind(var10)(var3);
            var3 = var3.length;
            var6 = var3 > var6;
            if(var6) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var3 = _closure1_slot8;
            var6 = var3.bind(var5)(var4);
case 22:
            var _closure2_slot1 = var6;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStores;
            var8 = _closure1_slot7;
            var3 = new Array(3);
            var3[0] = var8;
            var8 = _closure1_slot6;
            var3[1] = var8;
            var2 = _closure1_slot5;
            var3[2] = var2;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isPrivate;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var5 = _closure1_slot7;
                    var4 = var5.hasVideo;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var1 = !var3;
case 24:
                    if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 26:
                    var3 = _closure2_slot1;
                    var1 = !var3;
case 4:
                    if(!var1) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var5 = _closure1_slot5;
                    var4 = var5.getAllApplicationStreamsForChannel;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.length;
                    var3 = 0;
                    var1 = var3 === var4;
case 27:
                    if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 29:
                    var4 = _closure1_slot5;
                    var3 = var4.getAllActiveStreamsForChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var2 === var3;
case 14:
                    if(!var1) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var3 = _closure1_slot6;
                    var2 = var3.isVideoEnabled;
                    var2 = var2.bind(var3)();
                    var1 = !var2;
case 30:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();