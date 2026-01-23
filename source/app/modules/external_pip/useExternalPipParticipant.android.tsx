// app/modules/external_pip/useExternalPipParticipant.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function useSelectedParticipant(arg1) {
        var1 = arg1;
        var10 = var1.channelId;
        var _closure2_slot0 = var10;
        var9 = var1.focusedParticipantStreamId;
        var _closure2_slot1 = var9;
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 7;
        var1 = var7[var4];
        var5 = undefined;
        var12 = var6.bind(var5)(var1);
        var11 = var12.useStateFromStores;
        var1 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var1;
        var1 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var11.bind(var12)(var8, var1);
        var _closure2_slot2 = var8;
        var12 = _closure1_slot3;
        var11 = var12.useState;
        var1 = 0;
        var13 = var11.bind(var12)(var1);
        var12 = _closure1_slot2;
        var11 = 2;
        var12 = var12.bind(var5)(var13, var11);
        var1 = var12[var1];
        var11 = 1;
        var11 = var12[var11];
        var _closure2_slot3 = var11;
        var4 = var7[var4];
        var7 = var6.bind(var5)(var4);
        var6 = var7.useStateFromStoresObject;
        var4 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(4);
        var4[0] = var10;
        var4[1] = var9;
        var4[2] = var8;
        var4[3] = var1;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure2_slot0;
                var5 = null;
                if(!(var5 != var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var1 = _closure2_slot1;
                if(!(var5 == var1)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var20 = var1.bind(var2)();
                var3 = _closure1_slot4;
                var2 = var3.getParticipants;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var10 = _closure2_slot2;
                var3 = var2.length;
                var1 = 3;
                var1 = var1 < var3;
                var18 = false;
                if(var1) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                var1 = _closure1_slot9;
                var8 = undefined;
                var7 = var1.bind(var8)(var2);
                var3 = var7.bind(var8)();
                var1 = var3.done;
                var4 = var3;
                var3 = undefined;
                var18 = true;
                if(var1) { _fun0004_ip = 39; continue _fun0004 }
case 41:
                var1 = var4.value;
                var12 = var1.type;
                var11 = _closure1_slot8;
                var11 = var11.ACTIVITY;
                if(!(var12 !== var11)) { _fun0004_ip = 17; continue _fun0004 }
case 42:
                var11 = var1.user;
                var12 = var5 == var11;
                var1 = undefined;
                if(var12) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                var1 = var11.id;
case 43:
                var3 = var11;
                var18 = false;
                if(!(var1 === var10)) { _fun0004_ip = 39; continue _fun0004 }
case 17:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var4 = var11;
                var18 = true;
                if(!var1) { _fun0004_ip = 41; continue _fun0004 }
case 39:
                var1 = _closure1_slot9;
                var3 = undefined;
                var17 = var1.bind(var3)(var2);
                var2 = var17.bind(var3)();
                var1 = var2.done;
                var16 = 1000;
                var15 = undefined;
                var14 = undefined;
                var13 = var2;
                var12 = undefined;
                var11 = undefined;
                var10 = undefined;
                var8 = undefined;
                var6 = undefined;
                var4 = undefined;
                var2 = undefined;
                var7 = undefined;
                var9 = undefined;
                if(var1) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                var26 = var13.value;
                var1 = var6;
                if(var18) { _fun0004_ip = 26; continue _fun0004 }
case 47:
                var23 = var26.type;
                var22 = _closure1_slot8;
                var22 = var22.USER;
                var1 = var6;
                if(!(var23 === var22)) { _fun0004_ip = 26; continue _fun0004 }
case 48:
                var31 = var26.user;
                var22 = var5 == var31;
                var30 = undefined;
                if(var22) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                var30 = var31.id;
case 49:
                var29 = _closure2_slot2;
                var1 = var31;
                var28 = var15;
                var27 = var14;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var8;
                var6 = var1;
                if(!(var30 !== var29)) { _fun0004_ip = 51; continue _fun0004 }
case 26:
                var30 = var26.type;
                var29 = _closure1_slot8;
                var29 = var29.USER;
                if(!(var29 !== var30)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                var29 = _closure1_slot8;
                var29 = var29.STREAM;
                var28 = var15;
                var27 = var14;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var8;
                var6 = var1;
                if(!(var29 === var30)) { _fun0004_ip = 51; continue _fun0004 }
case 54:
                var29 = var5 == var10;
                if(!var29) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                var30 = var26.streamId;
                var29 = var5 != var30;
case 55:
                var28 = var15;
                var27 = var14;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var8;
                var6 = var1;
                if(!var29) { _fun0004_ip = 51; continue _fun0004 }
case 57:
                var28 = var15;
                var27 = var14;
                var25 = var12;
                var24 = var11;
                var23 = var26;
                var22 = var8;
                var6 = var1;
                _fun0004_ip = 51; continue _fun0004;
case 52:
                var29 = var26.speaking;
                if(var29) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                var30 = var26.lastSpoke;
                var30 = var20 - var30;
                var29 = var30 < var16;
case 58:
                if(!var29) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                var29 = var5 == var12;
case 60:
                if(!var29) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                var12 = var26;
case 62:
                var29 = var26.voiceState;
                var31 = var5 == var29;
                var30 = undefined;
                if(var31) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                var30 = var29.selfVideo;
case 64:
                var31 = var5 != var30;
                if(!var31) { _fun0004_ip = 66; continue _fun0004 }
case 67:
                var31 = var30;
case 66:
                if(!var31) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                var32 = var5 == var11;
                if(var32) { _fun0004_ip = 70; continue _fun0004 }
case 71:
                var34 = var11.lastSpoke;
                var33 = var26.lastSpoke;
                var32 = var34 < var33;
case 70:
                var31 = var32;
case 68:
                if(!var31) { _fun0004_ip = 72; continue _fun0004 }
case 73:
                var11 = var26;
case 72:
                var31 = var5 == var8;
                if(var31) { _fun0004_ip = 74; continue _fun0004 }
case 75:
                var33 = var8.lastSpoke;
                var32 = var26.lastSpoke;
                var31 = var33 < var32;
case 74:
                var28 = var30;
                var27 = var29;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var8;
                var6 = var1;
                if(!var31) { _fun0004_ip = 51; continue _fun0004 }
case 76:
                var28 = var30;
                var27 = var29;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var26;
                var6 = var1;
case 51:
                var26 = var17.bind(var3)();
                var1 = var26.done;
                var15 = var28;
                var14 = var27;
                var12 = var25;
                var11 = var24;
                var10 = var23;
                var8 = var22;
                var13 = var26;
                var4 = var12;
                var2 = var11;
                var7 = var10;
                var9 = var8;
                if(!var1) { _fun0004_ip = 46; continue _fun0004 }
case 45:
                var1 = {};
                var6 = var5 != var4;
                var1['selectedParticipantSpeaking'] = var6;
                var8 = var5 == var4;
                var6 = undefined;
                if(var8) { _fun0004_ip = 77; continue _fun0004 }
case 78:
                var8 = var4.user;
                var10 = var5 == var8;
                var6 = undefined;
                if(var10) { _fun0004_ip = 77; continue _fun0004 }
case 79:
                var6 = var8.id;
case 77:
                if(!(var5 == var6)) { _fun0004_ip = 80; continue _fun0004 }
case 81:
                var10 = var5 == var2;
                var8 = undefined;
                if(var10) { _fun0004_ip = 82; continue _fun0004 }
case 83:
                var10 = var2.user;
                var11 = var5 == var10;
                var8 = undefined;
                if(var11) { _fun0004_ip = 82; continue _fun0004 }
case 84:
                var8 = var10.id;
case 82:
                var6 = var8;
case 80:
                if(!(var5 == var6)) { _fun0004_ip = 85; continue _fun0004 }
case 86:
                var10 = var5 == var9;
                var8 = undefined;
                if(var10) { _fun0004_ip = 87; continue _fun0004 }
case 88:
                var9 = var9.user;
                var10 = var5 == var9;
                var8 = undefined;
                if(var10) { _fun0004_ip = 87; continue _fun0004 }
case 89:
                var8 = var9.id;
case 87:
                var6 = var8;
case 85:
                var1['selectedParticipantUserId'] = var6;
                if(!(var5 == var4)) { _fun0004_ip = 90; continue _fun0004 }
case 91:
                var8 = var5 == var2;
                var6 = undefined;
                if(var8) { _fun0004_ip = 92; continue _fun0004 }
case 93:
                var6 = var2.streamId;
case 92:
                if(!(var5 == var6)) { _fun0004_ip = 94; continue _fun0004 }
case 95:
                var8 = var5 == var7;
                var2 = undefined;
                if(var8) { _fun0004_ip = 96; continue _fun0004 }
case 97:
                var2 = var7.streamId;
case 96:
                var6 = var2;
case 94:
                var7 = var5 != var6;
                var2 = undefined;
                if(!var7) { _fun0004_ip = 98; continue _fun0004 }
case 99:
                var2 = var6;
case 98:
                _fun0004_ip = 100; continue _fun0004;
case 90:
                var4 = var4.streamId;
                var5 = var5 != var4;
                var3 = undefined;
                if(!var5) { _fun0004_ip = 101; continue _fun0004 }
case 102:
                var3 = var4;
case 101:
                var2 = var3;
case 100:
                var1['selectedStreamId'] = var2;
                return var1;
case 36:
                var1 = {};
                var2 = false;
                var1['selectedParticipantSpeaking'] = var2;
                var2 = undefined;
                var1['selectedParticipantUserId'] = var2;
                var1['selectedStreamId'] = var2;
                return var1;
            }
        };
        var1 = var6.bind(var7)(var5, var1, var4);
        var _closure2_slot4 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var6 = var1.selectedParticipantSpeaking;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot4;
                var2 = var2.selectedParticipantSpeaking;
                var5 = undefined;
                if(var2) { _fun0005_ip = 103; continue _fun0005 }
case 29:
                return var5;
case 103:
                var2 = global;
                var4 = var2.setTimeout;
                var3 = function() {
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 3000;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
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
    var4 = var4.ParticipantTypes;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/external_pip/useExternalPipParticipant.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useExternalPipParticipant() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 7;
            var2 = var5[var2];
            var8 = undefined;
            var6 = var4.bind(var8)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            var5 = null;
            var4 = var5 != var2;
            var6 = undefined;
            if(!var4) { _fun0006_ip = 104; continue _fun0006 }
case 105:
            var6 = var2;
case 104:
            var4 = {};
            var4['channelId'] = var6;
            var2 = function useFocusedParticipant(arg1) {
                var2 = arg1;
                var2 = var2.channelId;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot3;
                var3 = var4.useRef;
                var5 = undefined;
                var3 = var3.bind(var4)(var5);
                var _closure3_slot1 = var3;
                var4 = _closure1_slot3;
                var3 = var4.useRef;
                var3 = var3.bind(var4)(var5);
                var _closure3_slot2 = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.useStateFromStoresObject;
                var5 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var2 = null;
                        var1 = var2 != var1;
                        var7 = null;
                        if(!var1) { _fun0007_ip = 106; continue _fun0007 }
case 107:
                        var5 = _closure1_slot4;
                        var4 = var5.getSelectedParticipantId;
                        var1 = _closure3_slot0;
                        var7 = var4.bind(var5)(var1);
case 106:
                        var1 = var2 != var7;
                        var6 = null;
                        if(!var1) { _fun0007_ip = 108; continue _fun0007 }
case 5:
                        var1 = _closure3_slot0;
                        var1 = var2 != var1;
                        var6 = null;
                        if(!var1) { _fun0007_ip = 108; continue _fun0007 }
case 109:
                        var5 = _closure1_slot4;
                        var4 = var5.getParticipant;
                        var1 = _closure3_slot0;
                        var1 = var4.bind(var5)(var1, var7);
                        var4 = var2 != var1;
                        var6 = null;
                        if(!var4) { _fun0007_ip = 108; continue _fun0007 }
case 110:
                        var6 = var1;
case 108:
                        var1 = _closure3_slot1;
                        var1 = var1.current;
                        var4 = undefined;
                        if(!(var4 === var1)) { _fun0007_ip = 43; continue _fun0007 }
case 111:
                        var5 = _closure3_slot1;
                        var7 = var2 == var6;
                        var1 = undefined;
                        if(var7) { _fun0007_ip = 112; continue _fun0007 }
case 113:
                        var1 = var6.id;
case 112:
                        var5['current'] = var1;
                        var5 = _closure3_slot2;
                        var7 = var2 == var6;
                        var1 = undefined;
                        if(var7) { _fun0007_ip = 114; continue _fun0007 }
case 115:
                        var1 = var6.type;
case 114:
                        var5['current'] = var1;
case 43:
                        var1 = _closure3_slot1;
                        var5 = var1.current;
                        var7 = var2 == var6;
                        var1 = undefined;
                        if(var7) { _fun0007_ip = 116; continue _fun0007 }
case 117:
                        var1 = var6.id;
case 116:
                        if(!(var5 === var1)) { _fun0007_ip = 118; continue _fun0007 }
case 19:
                        var1 = {};
                        var5 = var2 == var6;
                        var8 = undefined;
                        if(var5) { _fun0007_ip = 119; continue _fun0007 }
case 120:
                        var8 = var6.type;
case 119:
                        var5 = _closure1_slot8;
                        var7 = var5.ACTIVITY;
                        var5 = undefined;
                        if(!(var8 !== var7)) { _fun0007_ip = 18; continue _fun0007 }
case 121:
                        var8 = var2 == var6;
                        var7 = undefined;
                        if(var8) { _fun0007_ip = 122; continue _fun0007 }
case 123:
                        var7 = var6.streamId;
case 122:
                        var8 = var2 != var7;
                        var5 = undefined;
                        if(!var8) { _fun0007_ip = 18; continue _fun0007 }
case 124:
                        var5 = var7;
case 18:
                        var1['focusedParticipantStreamId'] = var5;
                        var7 = var2 == var6;
                        var5 = undefined;
                        if(var7) { _fun0007_ip = 125; continue _fun0007 }
case 126:
                        var5 = var6.type;
case 125:
                        var6 = var2 != var5;
                        var2 = undefined;
                        if(!var6) { _fun0007_ip = 127; continue _fun0007 }
case 128:
                        var2 = var5;
case 127:
                        var1['focusedParticipantType'] = var2;
                        _fun0007_ip = 129; continue _fun0007;
case 118:
                        var2 = {};
                        var2['focusedParticipantStreamId'] = var4;
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var2['focusedParticipantType'] = var3;
                        var1 = var2;
case 129:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var2.bind(var8)(var4);
            var9 = var2.focusedParticipantStreamId;
            var2 = var2.focusedParticipantType;
            var4 = _closure1_slot11;
            var3 = {};
            var3['channelId'] = var6;
            var3['focusedParticipantStreamId'] = var9;
            var3 = var4.bind(var8)(var3);
            var7 = var3.selectedStreamId;
            var4 = var3.selectedParticipantUserId;
            var3 = var3.selectedParticipantSpeaking;
            if(!(var5 != var9)) { _fun0006_ip = 130; continue _fun0006 }
case 131:
            var7 = var9;
case 130:
            var9 = var5 != var7;
            var5 = undefined;
            if(!var9) { _fun0006_ip = 15; continue _fun0006 }
case 44:
            var5 = var7;
case 15:
            var7 = {};
            var7['selectedParticipantStreamId'] = var5;
            var1 = function useSetHasActiveVideoOutputSink(arg1) {
                var2 = arg1;
                var5 = var2.selectedParticipantStreamId;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var _closure4_slot0 = var3;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0008_ip = 31; continue _fun0008 }
case 132:
                        var2 = undefined;
                        return var2;
case 31:
                        var2 = 'useExternalPipParticipant';
                        var _closure4_slot1 = var2;
                        var3 = _closure1_slot6;
                        var2 = var3.getMediaEngine;
                        var4 = var2.bind(var3)();
                        var3 = var4.eachConnection;
                        var2 = function(arg1) {
                            var5 = arg1;
                            var4 = var5.setHasActiveVideoOutputSink;
                            var3 = _closure4_slot0;
                            var2 = _closure4_slot1;
                            var1 = true;
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        var1 = function() {
                            var2 = _closure1_slot6;
                            var1 = var2.getMediaEngine;
                            var3 = var1.bind(var2)();
                            var2 = var3.eachConnection;
                            var1 = function(arg1) {
                                var5 = arg1;
                                var4 = var5.setHasActiveVideoOutputSink;
                                var3 = _closure4_slot0;
                                var2 = _closure4_slot1;
                                var1 = false;
                                var1 = var4.bind(var5)(var3, var1, var2);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var1 = var1.bind(var8)(var7);
            var1 = {};
            var1['channelId'] = var6;
            var1['selectedParticipantStreamId'] = var5;
            var1['selectedParticipantUserId'] = var4;
            var1['selectedParticipantSpeaking'] = var3;
            var1['focusedParticipantType'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();