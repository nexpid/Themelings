// app/modules/voice_panel/native/utils/calculatePIPState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
case 0:
            var6 = arg1;
            var14 = arg2;
            var1 = arg5;
            var2 = var1.focusedId;
            var10 = null;
            var8 = var10 != var2;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot2;
            var4 = var5.getParticipant;
            var3 = var1.focusedId;
            var4 = var4.bind(var5)(var6, var3);
            var5 = var10 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.type;
case 4:
            var2 = _closure1_slot5;
            var2 = var2.ACTIVITY;
            var8 = var3 === var2;
case 2:
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
            if(!(var10 != var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
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
case 6:
            var3 = var1.mode;
            var2 = _closure1_slot4;
            var2 = var2.PANEL;
            var7 = var3 === var2;
            var2 = var1.focusedId;
            var2 = var10 != var2;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var7;
case 8:
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var5.add;
            var2 = var1.focusedId;
            var2 = var3.bind(var5)(var2);
case 10:
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
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var3.type;
case 12:
            var2 = _closure1_slot5;
            var2 = var2.STREAM;
            var6 = var4 !== var2;
            if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var10 == var3;
            var4 = undefined;
            if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var3.type;
case 16:
            var2 = _closure1_slot5;
            var2 = var2.ACTIVITY;
            var6 = var4 !== var2;
case 14:
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var1.focusedId;
            var2 = var10 == var2;
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = var10 == var3;
            var5 = undefined;
            if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = var3.id;
case 22:
            var4 = var1.focusedId;
            var2 = var5 !== var4;
case 20:
            var6 = var2;
case 18:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var12];
            var5 = var4.bind(var11)(var2);
            var4 = var5.computePIPSize;
            var13 = var14.getTargetDimensions;
            var15 = var10 == var3;
            var2 = undefined;
            if(var15) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var2 = var3.id;
case 24:
            var2 = var13.bind(var14)(var2);
            if(!(var10 == var2)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = _closure1_slot0;
            var9 = _closure1_slot1;
            var9 = var9[var12];
            var9 = var10.bind(var11)(var9);
            var2 = var9.SquarePIPReferenceDimensions;
case 26:
            if(!var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var7 = var8;
case 28:
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