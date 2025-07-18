// app/modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function areParticipantStatesEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(var9) { _fun0001_ip = 32; continue _fun0001 }
 29:
            var4 = var6;
 32:
            var4 = undefined;
            var6 = var3;
            if(var6) { _fun0001_ip = 60; continue _fun0001 }
 40:
            var5 = var5().value;
            var6 = var2;
            var6 = var6 === var12;
            var3 = var6;
            if(var6) { _fun0001_ip = 60; continue _fun0001 }
 57:
            var4 = var5;
 60:
            var8 = var4;
            var4 = var3;
            if(var4) { _fun0001_ip = 72; continue _fun0001 }
 69:
            var2.return();
 72:
            var10 = arg2;
            var5 = var10[Symbol.iterator];
            var10 = var5().next;
            var6 = undefined;
            var9 = undefined;
            var11 = var10().value;
            var13 = var5;
            var13 = var13 === var12;
            var6 = var13;
            if(var13) { _fun0001_ip = 102; continue _fun0001 }
 99:
            var9 = var11;
 102:
            var9 = undefined;
            var11 = var6;
            if(var11) { _fun0001_ip = 130; continue _fun0001 }
 110:
            var10 = var10().value;
            var11 = var5;
            var11 = var11 === var12;
            var6 = var11;
            if(var11) { _fun0001_ip = 130; continue _fun0001 }
 127:
            var9 = var10;
 130:
            var7 = var9;
            var9 = var6;
            if(var9) { _fun0001_ip = 142; continue _fun0001 }
 139:
            var5.return();
 142:
            var7 = var8 === var7;
            return var7;
 148:
            CatchBlockStart(arg_register=3);
            if(var6) { _fun0001_ip = 156; continue _fun0001 }
 153:
            var5.return();
 156:
            throw var4;
 158:
            CatchBlockStart(arg_register=0);
            if(var3) { _fun0001_ip = 166; continue _fun0001 }
 163:
            var2.return();
 166:
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
 0:
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
            if(var6) { _fun0002_ip = 141; continue _fun0002 }
 132:
            var3 = _closure1_slot8;
            var6 = var3.bind(var5)(var4);
 141:
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
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isPrivate;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0003_ip = 50; continue _fun0003 }
 20:
                    var5 = _closure1_slot7;
                    var4 = var5.hasVideo;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var1 = !var3;
 50:
                    if(!var1) { _fun0003_ip = 60; continue _fun0003 }
 53:
                    var3 = _closure2_slot1;
                    var1 = !var3;
 60:
                    if(!var1) { _fun0003_ip = 101; continue _fun0003 }
 63:
                    var5 = _closure1_slot5;
                    var4 = var5.getAllApplicationStreamsForChannel;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.length;
                    var3 = 0;
                    var1 = var3 === var4;
 101:
                    if(!var1) { _fun0003_ip = 142; continue _fun0003 }
 104:
                    var4 = _closure1_slot5;
                    var3 = var4.getAllActiveStreamsForChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var2 === var3;
 142:
                    if(!var1) { _fun0003_ip = 165; continue _fun0003 }
 145:
                    var3 = _closure1_slot6;
                    var2 = var3.isVideoEnabled;
                    var2 = var2.bind(var3)();
                    var1 = !var2;
 165:
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