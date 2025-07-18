// app/modules/external_pip/useExternalPipParticipant.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
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
 0:
                var1 = _closure2_slot0;
                var5 = null;
                if(!(var5 != var1)) { _fun0004_ip = 872; continue _fun0004 }
 16:
                var1 = _closure2_slot1;
                if(!(var5 == var1)) { _fun0004_ip = 872; continue _fun0004 }
 27:
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
                if(var1) { _fun0004_ip = 186; continue _fun0004 }
 87:
                var1 = _closure1_slot9;
                var8 = undefined;
                var7 = var1.bind(var8)(var2);
                var3 = var7.bind(var8)();
                var1 = var3.done;
                var4 = var3;
                var3 = undefined;
                var18 = true;
                if(var1) { _fun0004_ip = 186; continue _fun0004 }
 117:
                var1 = var4.value;
                var12 = var1.type;
                var11 = _closure1_slot8;
                var11 = var11.ACTIVITY;
                if(!(var12 !== var11)) { _fun0004_ip = 169; continue _fun0004 }
 141:
                var11 = var1.user;
                var12 = var5 == var11;
                var1 = undefined;
                if(var12) { _fun0004_ip = 160; continue _fun0004 }
 155:
                var1 = var11.id;
 160:
                var3 = var11;
                var18 = false;
                if(!(var1 === var10)) { _fun0004_ip = 186; continue _fun0004 }
 169:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var4 = var11;
                var18 = true;
                if(!var1) { _fun0004_ip = 117; continue _fun0004 }
 186:
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
                if(var1) { _fun0004_ip = 675; continue _fun0004 }
 243:
                var26 = var13.value;
                var1 = var6;
                if(var18) { _fun0004_ip = 330; continue _fun0004 }
 254:
                var23 = var26.type;
                var22 = _closure1_slot8;
                var22 = var22.USER;
                var1 = var6;
                if(!(var23 === var22)) { _fun0004_ip = 330; continue _fun0004 }
 276:
                var31 = var26.user;
                var22 = var5 == var31;
                var30 = undefined;
                if(var22) { _fun0004_ip = 295; continue _fun0004 }
 290:
                var30 = var31.id;
 295:
                var29 = _closure2_slot2;
                var1 = var31;
                var28 = var15;
                var27 = var14;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var8;
                var6 = var1;
                if(!(var30 !== var29)) { _fun0004_ip = 627; continue _fun0004 }
 330:
                var30 = var26.type;
                var29 = _closure1_slot8;
                var29 = var29.USER;
                if(!(var29 !== var30)) { _fun0004_ip = 457; continue _fun0004 }
 349:
                var29 = _closure1_slot8;
                var29 = var29.STREAM;
                var28 = var15;
                var27 = var14;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var8;
                var6 = var1;
                if(!(var29 === var30)) { _fun0004_ip = 627; continue _fun0004 }
 387:
                var29 = var5 == var10;
                if(!var29) { _fun0004_ip = 404; continue _fun0004 }
 394:
                var30 = var26.streamId;
                var29 = var5 != var30;
 404:
                var28 = var15;
                var27 = var14;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var8;
                var6 = var1;
                if(!var29) { _fun0004_ip = 627; continue _fun0004 }
 431:
                var28 = var15;
                var27 = var14;
                var25 = var12;
                var24 = var11;
                var23 = var26;
                var22 = var8;
                var6 = var1;
                _fun0004_ip = 627; continue _fun0004;
 457:
                var29 = var26.speaking;
                if(var29) { _fun0004_ip = 480; continue _fun0004 }
 466:
                var30 = var26.lastSpoke;
                var30 = var20 - var30;
                var29 = var30 < var16;
 480:
                if(!var29) { _fun0004_ip = 487; continue _fun0004 }
 483:
                var29 = var5 == var12;
 487:
                if(!var29) { _fun0004_ip = 493; continue _fun0004 }
 490:
                var12 = var26;
 493:
                var29 = var26.voiceState;
                var31 = var5 == var29;
                var30 = undefined;
                if(var31) { _fun0004_ip = 514; continue _fun0004 }
 508:
                var30 = var29.selfVideo;
 514:
                var31 = var5 != var30;
                if(!var31) { _fun0004_ip = 524; continue _fun0004 }
 521:
                var31 = var30;
 524:
                if(!var31) { _fun0004_ip = 553; continue _fun0004 }
 527:
                var32 = var5 == var11;
                if(var32) { _fun0004_ip = 550; continue _fun0004 }
 534:
                var34 = var11.lastSpoke;
                var33 = var26.lastSpoke;
                var32 = var34 < var33;
 550:
                var31 = var32;
 553:
                if(!var31) { _fun0004_ip = 559; continue _fun0004 }
 556:
                var11 = var26;
 559:
                var31 = var5 == var8;
                if(var31) { _fun0004_ip = 582; continue _fun0004 }
 566:
                var33 = var8.lastSpoke;
                var32 = var26.lastSpoke;
                var31 = var33 < var32;
 582:
                var28 = var30;
                var27 = var29;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var8;
                var6 = var1;
                if(!var31) { _fun0004_ip = 627; continue _fun0004 }
 606:
                var28 = var30;
                var27 = var29;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                var22 = var26;
                var6 = var1;
 627:
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
                if(!var1) { _fun0004_ip = 243; continue _fun0004 }
 675:
                var1 = {};
                var6 = var5 != var4;
                var1['selectedParticipantSpeaking'] = var6;
                var8 = var5 == var4;
                var6 = undefined;
                if(var8) { _fun0004_ip = 714; continue _fun0004 }
 695:
                var8 = var4.user;
                var10 = var5 == var8;
                var6 = undefined;
                if(var10) { _fun0004_ip = 714; continue _fun0004 }
 709:
                var6 = var8.id;
 714:
                if(!(var5 == var6)) { _fun0004_ip = 749; continue _fun0004 }
 718:
                var10 = var5 == var2;
                var8 = undefined;
                if(var10) { _fun0004_ip = 746; continue _fun0004 }
 727:
                var10 = var2.user;
                var11 = var5 == var10;
                var8 = undefined;
                if(var11) { _fun0004_ip = 746; continue _fun0004 }
 741:
                var8 = var10.id;
 746:
                var6 = var8;
 749:
                if(!(var5 == var6)) { _fun0004_ip = 784; continue _fun0004 }
 753:
                var10 = var5 == var9;
                var8 = undefined;
                if(var10) { _fun0004_ip = 781; continue _fun0004 }
 762:
                var9 = var9.user;
                var10 = var5 == var9;
                var8 = undefined;
                if(var10) { _fun0004_ip = 781; continue _fun0004 }
 776:
                var8 = var9.id;
 781:
                var6 = var8;
 784:
                var1['selectedParticipantUserId'] = var6;
                if(!(var5 == var4)) { _fun0004_ip = 844; continue _fun0004 }
 793:
                var8 = var5 == var2;
                var6 = undefined;
                if(var8) { _fun0004_ip = 808; continue _fun0004 }
 802:
                var6 = var2.streamId;
 808:
                if(!(var5 == var6)) { _fun0004_ip = 830; continue _fun0004 }
 812:
                var8 = var5 == var7;
                var2 = undefined;
                if(var8) { _fun0004_ip = 827; continue _fun0004 }
 821:
                var2 = var7.streamId;
 827:
                var6 = var2;
 830:
                var7 = var5 != var6;
                var2 = undefined;
                if(!var7) { _fun0004_ip = 842; continue _fun0004 }
 839:
                var2 = var6;
 842:
                _fun0004_ip = 865; continue _fun0004;
 844:
                var4 = var4.streamId;
                var5 = var5 != var4;
                var3 = undefined;
                if(!var5) { _fun0004_ip = 862; continue _fun0004 }
 859:
                var3 = var4;
 862:
                var2 = var3;
 865:
                var1['selectedStreamId'] = var2;
                return var1;
 872:
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
 0:
                var2 = _closure2_slot4;
                var2 = var2.selectedParticipantSpeaking;
                var5 = undefined;
                if(var2) { _fun0005_ip = 22; continue _fun0005 }
 20:
                return var5;
 22:
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
    var4 = native4;
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
 0:
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
            if(!var4) { _fun0006_ip = 71; continue _fun0006 }
 68:
            var6 = var2;
 71:
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
 0:
                        var1 = _closure3_slot0;
                        var2 = null;
                        var1 = var2 != var1;
                        var7 = null;
                        if(!var1) { _fun0007_ip = 40; continue _fun0007 }
 18:
                        var5 = _closure1_slot4;
                        var4 = var5.getSelectedParticipantId;
                        var1 = _closure3_slot0;
                        var7 = var4.bind(var5)(var1);
 40:
                        var1 = var2 != var7;
                        var6 = null;
                        if(!var1) { _fun0007_ip = 97; continue _fun0007 }
 49:
                        var1 = _closure3_slot0;
                        var1 = var2 != var1;
                        var6 = null;
                        if(!var1) { _fun0007_ip = 97; continue _fun0007 }
 62:
                        var5 = _closure1_slot4;
                        var4 = var5.getParticipant;
                        var1 = _closure3_slot0;
                        var1 = var4.bind(var5)(var1, var7);
                        var4 = var2 != var1;
                        var6 = null;
                        if(!var4) { _fun0007_ip = 97; continue _fun0007 }
 94:
                        var6 = var1;
 97:
                        var1 = _closure3_slot1;
                        var1 = var1.current;
                        var4 = undefined;
                        if(!(var4 === var1)) { _fun0007_ip = 160; continue _fun0007 }
 112:
                        var5 = _closure3_slot1;
                        var7 = var2 == var6;
                        var1 = undefined;
                        if(var7) { _fun0007_ip = 130; continue _fun0007 }
 125:
                        var1 = var6.id;
 130:
                        var5['current'] = var1;
                        var5 = _closure3_slot2;
                        var7 = var2 == var6;
                        var1 = undefined;
                        if(var7) { _fun0007_ip = 154; continue _fun0007 }
 149:
                        var1 = var6.type;
 154:
                        var5['current'] = var1;
 160:
                        var1 = _closure3_slot1;
                        var5 = var1.current;
                        var7 = var2 == var6;
                        var1 = undefined;
                        if(var7) { _fun0007_ip = 183; continue _fun0007 }
 178:
                        var1 = var6.id;
 183:
                        if(!(var5 === var1)) { _fun0007_ip = 287; continue _fun0007 }
 187:
                        var1 = {};
                        var5 = var2 == var6;
                        var8 = undefined;
                        if(var5) { _fun0007_ip = 203; continue _fun0007 }
 198:
                        var8 = var6.type;
 203:
                        var5 = _closure1_slot8;
                        var7 = var5.ACTIVITY;
                        var5 = undefined;
                        if(!(var8 !== var7)) { _fun0007_ip = 249; continue _fun0007 }
 222:
                        var8 = var2 == var6;
                        var7 = undefined;
                        if(var8) { _fun0007_ip = 237; continue _fun0007 }
 231:
                        var7 = var6.streamId;
 237:
                        var8 = var2 != var7;
                        var5 = undefined;
                        if(!var8) { _fun0007_ip = 249; continue _fun0007 }
 246:
                        var5 = var7;
 249:
                        var1['focusedParticipantStreamId'] = var5;
                        var7 = var2 == var6;
                        var5 = undefined;
                        if(var7) { _fun0007_ip = 268; continue _fun0007 }
 263:
                        var5 = var6.type;
 268:
                        var6 = var2 != var5;
                        var2 = undefined;
                        if(!var6) { _fun0007_ip = 280; continue _fun0007 }
 277:
                        var2 = var5;
 280:
                        var1['focusedParticipantType'] = var2;
                        _fun0007_ip = 311; continue _fun0007;
 287:
                        var2 = {};
                        var2['focusedParticipantStreamId'] = var4;
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var2['focusedParticipantType'] = var3;
                        var1 = var2;
 311:
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
            if(!(var5 != var9)) { _fun0006_ip = 146; continue _fun0006 }
 143:
            var7 = var9;
 146:
            var9 = var5 != var7;
            var5 = undefined;
            if(!var9) { _fun0006_ip = 158; continue _fun0006 }
 155:
            var5 = var7;
 158:
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
 0:
                        var3 = _closure3_slot0;
                        var _closure4_slot0 = var3;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0008_ip = 23; continue _fun0008 }
 19:
                        var2 = undefined;
                        return var2;
 23:
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