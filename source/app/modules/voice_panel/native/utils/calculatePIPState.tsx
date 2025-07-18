// app/modules/voice_panel/native/utils/calculatePIPState.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelModes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/utils/calculatePIPState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function calculatePIPState(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var14 = arg2;
            var1 = arg5;
            var2 = var1.focusedId;
            var10 = null;
            var8 = var10 != var2;
            if(!var8) { _fun0001_ip = 77; continue _fun0001 }
 24:
            var5 = _closure1_slot2;
            var4 = var5.getParticipant;
            var3 = var1.focusedId;
            var4 = var4.bind(var5)(var6, var3);
            var5 = var10 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 63; continue _fun0001 }
 58:
            var3 = var4.type;
 63:
            var2 = _closure1_slot5;
            var2 = var2.ACTIVITY;
            var8 = var3 === var2;
 77:
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var20 = var3;
            var2 = new var20[var2](var19);
            var5 = var2 instanceof Object ? var2 : var3;
            var3 = _closure1_slot3;
            var2 = var3.getCurrentUserActiveStream;
            var7 = var2.bind(var3)();
            if(!(var10 != var7)) { _fun0001_ip = 169; continue _fun0001 }
 126:
            var3 = var5.add;
            var11 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var11.bind(var2)(var4);
            var2 = var4.encodeStreamKey;
            var2 = var2.bind(var4)(var7);
            var2 = var3.bind(var5)(var2);
 169:
            var3 = var1.mode;
            var2 = _closure1_slot4;
            var2 = var2.PANEL;
            var7 = var3 === var2;
            var2 = var1.focusedId;
            var2 = var10 != var2;
            if(!var2) { _fun0001_ip = 204; continue _fun0001 }
 201:
            var2 = var7;
 204:
            if(!var2) { _fun0001_ip = 223; continue _fun0001 }
 207:
            var3 = var5.add;
            var2 = var1.focusedId;
            var2 = var3.bind(var5)(var2);
 223:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var12 = 5;
            var2 = var2[var12];
            var11 = undefined;
            var4 = var3.bind(var11)(var2);
            var3 = var4.computePIPParticipantToShow;
            var2 = {};
            var2['channelId'] = var6;
            var6 = arg3;
            var2['lastParticipantId'] = var6;
            var6 = arg4;
            var2['speakingUserId'] = var6;
            var6 = var1.focusedId;
            var2['focusedParticipantId'] = var6;
            var2['blockList'] = var5;
            var5 = var1.mode;
            var2['panelMode'] = var5;
            var5 = var1.showSecondaryPIP;
            var2['showSecondaryPIP'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var10 == var3;
            var4 = undefined;
            if(var2) { _fun0001_ip = 329; continue _fun0001 }
 324:
            var4 = var3.type;
 329:
            var2 = _closure1_slot5;
            var2 = var2.STREAM;
            var6 = var4 !== var2;
            if(!var6) { _fun0001_ip = 374; continue _fun0001 }
 346:
            var2 = var10 == var3;
            var4 = undefined;
            if(var2) { _fun0001_ip = 360; continue _fun0001 }
 355:
            var4 = var3.type;
 360:
            var2 = _closure1_slot5;
            var2 = var2.ACTIVITY;
            var6 = var4 !== var2;
 374:
            if(!var6) { _fun0001_ip = 417; continue _fun0001 }
 377:
            var2 = var1.focusedId;
            var2 = var10 == var2;
            if(var2) { _fun0001_ip = 414; continue _fun0001 }
 390:
            var4 = var10 == var3;
            var5 = undefined;
            if(var4) { _fun0001_ip = 404; continue _fun0001 }
 399:
            var5 = var3.id;
 404:
            var4 = var1.focusedId;
            var2 = var5 !== var4;
 414:
            var6 = var2;
 417:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var12];
            var5 = var4.bind(var11)(var2);
            var4 = var5.computePIPSize;
            var13 = var14.getTargetDimensions;
            var15 = var10 == var3;
            var2 = undefined;
            if(var15) { _fun0001_ip = 460; continue _fun0001 }
 455:
            var2 = var3.id;
 460:
            var2 = var13.bind(var14)(var2);
            if(!(var10 == var2)) { _fun0001_ip = 492; continue _fun0001 }
 469:
            var10 = _closure1_slot0;
            var9 = _closure1_slot1;
            var9 = var9[var12];
            var9 = var10.bind(var11)(var9);
            var2 = var9.SquarePIPReferenceDimensions;
 492:
            if(!var7) { _fun0001_ip = 498; continue _fun0001 }
 495:
            var7 = var8;
 498:
            var16 = var1.showSecondaryPIP;
            var20 = var5;
            var19 = var2;
            var18 = var6;
            var17 = var7;
            var2 = var20[var4](var19, var18, var17, var16, var15);
            var1 = {};
            var1['participant'] = var3;
            var1['dimensions'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();