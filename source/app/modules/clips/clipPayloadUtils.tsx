// app/modules/clips/clipPayloadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
            var2 = var3["@@iterator"];
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var11 = 0;
    var4 = var7[var11];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var7[var10];
    var4 = var6.bind(var1)(var4);
    var5 = var4.CLIPS_MAX_PARTICIPANTS;
    var _closure1_slot4 = var5;
    var4 = var4.CLIPS_MAX_TIMELINE_EVENTS;
    var _closure1_slot5 = var4;
    var9 = 2;
    var4 = var7[var9];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var8 = 3;
    var4 = var7[var8];
    var4 = var6.bind(var1)(var4);
    var4 = var4.SpeakingFlags;
    var _closure1_slot7 = var4;
    var4 = {};
    var4['UNKNOWN'] = var11;
    var5 = 'UNKNOWN';
    var4[var11] = var5;
    var4['KILL'] = var10;
    var5 = 'KILL';
    var4[var10] = var5;
    var4['MULTIKILL'] = var9;
    var5 = 'MULTIKILL';
    var4[var9] = var5;
    var4['DEATH'] = var8;
    var5 = 'DEATH';
    var4[var8] = var5;
    var _closure1_slot8 = var4;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/clips/clipPayloadUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getClipCreatedAt(arg1) {
        var1 = global;
        var3 = var1.Date;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = arg1;
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.toISOString;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['getClipCreatedAt'] = var5;
    var5 = function getClipParticipantIds(arg1) {
        var4 = arg1;
        var3 = var4.slice;
        var2 = _closure1_slot4;
        var1 = 0;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getClipParticipantIds'] = var5;
    var3['ServerClipGameEventType'] = var4;
    var2 = function getClipEventsTimeline(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var12 = arg1;
            var _closure2_slot0 = var12;
            var3 = var12.timeline;
            var21 = null;
            var4 = var21 == var3;
            var1 = undefined;
            var5 = undefined;
            if(var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var5 = var3.length;
case 33:
            var6 = var21 != var5;
            var4 = 0;
            var3 = 0;
            if(!var6) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var5;
case 36:
            if(!(var4 !== var3)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = var12.decision;
            var6 = var21 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var3 = var5.timestamp;
case 40:
            if(!(var21 != var3)) { _fun0004_ip = 38; continue _fun0004 }
case 42:
            var3 = var12.editMetadata;
            if(!(var21 == var3)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var5 = {};
            var5['start'] = var4;
            var7 = var12.length;
            var6 = 1000;
            var6 = var7 / var6;
            var5['end'] = var6;
            var3 = var5;
case 43:
            var5 = var12.decision;
            var6 = var5.timestamp;
            var5 = var12.length;
            var5 = var6 - var5;
            var7 = var3.start;
            var6 = 1000;
            var7 = var6 * var7;
            var20 = var5 + var7;
            var3 = var3.end;
            var3 = var6 * var3;
            var19 = var5 + var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 4;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.isGameEventsOnPlayerEnabled;
            var10 = 'getClipEventsTimeline';
            var3 = var3.bind(var5)(var10);
            var _closure2_slot1 = var3;
            var6 = var12.timeline;
            var5 = var6.filter;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var1.editMetadata;
                    var4 = null;
                    var5 = var4 == var1;
                    var6 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var4 = var1.voiceAudio;
case 45:
                    var1 = false;
                    var1 = var1 !== var4;
                    if(!var1) { _fun0005_ip = 11; continue _fun0005 }
case 2:
                    var4 = var3.signal;
                    var5 = var4.type;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.ClipSignalTypes;
                    var4 = var4.SPEAKING;
                    var1 = var5 === var4;
case 11:
                    if(var1) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var3 = var3.signal;
                    var4 = var3.type;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 5;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ClipSignalTypes;
                    var3 = var3.GAME_EVENT;
                    var2 = var4 === var3;
case 49:
                    var1 = var2;
case 47:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var3);
            var3 = var5.sort;
            var2 = function(arg1, arg2) {
                var1 = arg1;
                var2 = var1.timestamp;
                var1 = arg2;
                var1 = var1.timestamp;
                var1 = var2 - var1;
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            var2 = var3.length;
            if(!(var4 === var2)) { _fun0004_ip = 51; continue _fun0004 }
case 38:
            return var1;
case 51:
            var18 = global;
            var2 = var18.Map;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var36 = var5;
            var2 = new var36[var2](var35);
            var17 = var2 instanceof Object ? var2 : var5;
            var9 = new Array(0);
            var2 = var18.Map;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var36 = var5;
            var2 = new var36[var2](var35);
            var16 = var2 instanceof Object ? var2 : var5;
            var2 = _closure1_slot9;
            var6 = var2.bind(var1)(var3);
            var5 = var6.bind(var1)();
            var2 = var5.done;
            var15 = 5;
            if(var2) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var7 = var5.value;
            var2 = var7.signal;
            var11 = var2.type;
            var13 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var13.bind(var1)(var2);
            var2 = var2.ClipSignalTypes;
            var2 = var2.SPEAKING;
            if(!(var11 === var2)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var2 = var7.timestamp;
            if(!(!(var2 >= var20))) { _fun0004_ip = 52; continue _fun0004 }
case 56:
            var2 = var7.signal;
            var13 = var2.speakingFlags;
            var2 = _closure1_slot7;
            var11 = var2.VOICE;
            var13 = var13 & var11;
            var2 = var2.VOICE;
            var11 = var17.set;
            var7 = var7.signal;
            var7 = var7.userId;
            var2 = var13 === var2;
            var2 = var11.bind(var17)(var7, var2);
case 54:
            var7 = var6.bind(var1)();
            var2 = var7.done;
            var5 = var7;
            if(!var2) { _fun0004_ip = 53; continue _fun0004 }
case 52:
            var2 = _closure1_slot9;
            var11 = var2.bind(var1)(var17);
            var5 = var11.bind(var1)();
            var2 = var5.done;
            var7 = 2;
            var6 = 1;
            if(var2) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var13 = var5.value;
            var2 = _closure1_slot3;
            var2 = var2.bind(var1)(var13, var7);
            var22 = var2[var4];
            var2 = var2[var6];
            if(!var2) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var13 = var9.push;
            var2 = {};
            var2['timestamp_ms'] = var4;
            var14 = {};
            var14['user_id'] = var22;
            var22 = _closure1_slot7;
            var22 = var22.VOICE;
            var14['speaking_flags'] = var22;
            var2['speaking'] = var14;
            var2 = var13.bind(var9)(var2);
case 59:
            var13 = var11.bind(var1)();
            var2 = var13.done;
            var5 = var13;
            if(!var2) { _fun0004_ip = 58; continue _fun0004 }
case 57:
            var2 = _closure1_slot9;
            var14 = var2.bind(var1)(var3);
            var3 = var14.bind(var1)();
            var2 = var3.done;
            var13 = var3;
            var11 = undefined;
            var7 = undefined;
            var6 = undefined;
            var5 = undefined;
            var3 = undefined;
            if(var2) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var31 = var13.value;
            var2 = var31.signal;
            var22 = var2.type;
            var23 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var23.bind(var1)(var2);
            var2 = var2.ClipSignalTypes;
            var2 = var2.SPEAKING;
            if(!(var22 !== var2)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var2 = var31.signal;
            var27 = var2.type;
            var22 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var22.bind(var1)(var2);
            var2 = var2.ClipSignalTypes;
            var2 = var2.GAME_EVENT;
            var26 = var11;
            var25 = var7;
            var24 = var6;
            var23 = var5;
            var22 = var3;
            if(!(var27 === var2)) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var2 = var31.timestamp;
            var26 = var11;
            var25 = var7;
            var24 = var6;
            var23 = var5;
            var22 = var3;
            if(!(!(var2 < var20))) { _fun0004_ip = 65; continue _fun0004 }
case 67:
            var2 = var31.timestamp;
            if(!(!(var2 > var19))) { _fun0004_ip = 61; continue _fun0004 }
case 68:
            var2 = var31.signal;
            var27 = var2.eventType;
            var28 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var28.bind(var1)(var2);
            var2 = var2.GameEventType;
            var2 = var2.KILL;
            if(!(var2 !== var27)) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var28 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var15];
            var2 = var28.bind(var1)(var2);
            var2 = var2.GameEventType;
            var2 = var2.MULTIKILL;
            var28 = undefined;
            if(!(var2 === var27)) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var2 = _closure1_slot8;
            var28 = var2.MULTIKILL;
            _fun0004_ip = 71; continue _fun0004;
case 69:
            var2 = _closure1_slot8;
            var28 = var2.KILL;
case 71:
            var26 = var11;
            var25 = var7;
            var24 = var28;
            var23 = var5;
            var22 = var3;
            if(!(var21 != var28)) { _fun0004_ip = 65; continue _fun0004 }
case 73:
            var29 = var18.Math;
            var27 = var29.round;
            var2 = var31.timestamp;
            var2 = var2 - var20;
            var27 = var27.bind(var29)(var2);
            var2 = var16.get;
            var2 = var2.bind(var16)(var27);
            if(!(var21 == var2)) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var30 = var16.set;
            var29 = var9.length;
            var29 = var30.bind(var16)(var27, var29);
            var30 = var9.push;
            var29 = {};
            var29['timestamp_ms'] = var27;
            var32 = {};
            var32['type'] = var28;
            var29['game'] = var32;
            var29 = var30.bind(var9)(var29);
            var26 = var11;
            var25 = var7;
            var24 = var28;
            var23 = var27;
            var22 = var2;
            _fun0004_ip = 65; continue _fun0004;
case 74:
            var29 = _closure1_slot8;
            var29 = var29.MULTIKILL;
            var26 = var11;
            var25 = var7;
            var24 = var28;
            var23 = var27;
            var22 = var2;
            if(!(var28 === var29)) { _fun0004_ip = 65; continue _fun0004 }
case 76:
            var30 = var9[var2];
            var29 = {};
            var29['type'] = var28;
            var30['game'] = var29;
            var26 = var11;
            var25 = var7;
            var24 = var28;
            var23 = var27;
            var22 = var2;
            _fun0004_ip = 65; continue _fun0004;
case 63:
            var2 = var31.timestamp;
            var26 = var11;
            var25 = var7;
            var24 = var6;
            var23 = var5;
            var22 = var3;
            if(!(!(var2 < var20))) { _fun0004_ip = 65; continue _fun0004 }
case 77:
            var2 = var31.timestamp;
            if(!(!(var2 > var19))) { _fun0004_ip = 61; continue _fun0004 }
case 78:
            var2 = var31.signal;
            var28 = var2.speakingFlags;
            var2 = _closure1_slot7;
            var27 = var2.VOICE;
            var27 = var28 & var27;
            var2 = var2.VOICE;
            var2 = var27 === var2;
            var28 = var17.get;
            var27 = var31.signal;
            var27 = var27.userId;
            var27 = var28.bind(var17)(var27);
            var28 = var21 != var27;
            if(!var28) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            var28 = var27;
case 79:
            var26 = var27;
            var25 = var2;
            var24 = var6;
            var23 = var5;
            var22 = var3;
            if(!(var28 !== var2)) { _fun0004_ip = 65; continue _fun0004 }
case 81:
            var29 = var17.set;
            var28 = var31.signal;
            var28 = var28.userId;
            var28 = var29.bind(var17)(var28, var2);
            var29 = var9.push;
            var28 = {};
            var33 = var18.Math;
            var32 = var33.round;
            var30 = var31.timestamp;
            var30 = var30 - var20;
            var30 = var32.bind(var33)(var30);
            var28['timestamp_ms'] = var30;
            var30 = {};
            var32 = var31.signal;
            var32 = var32.userId;
            var30['user_id'] = var32;
            var31 = var31.signal;
            var31 = var31.speakingFlags;
            var30['speaking_flags'] = var31;
            var28['speaking'] = var30;
            var28 = var29.bind(var9)(var28);
            var26 = var27;
            var25 = var2;
            var24 = var6;
            var23 = var5;
            var22 = var3;
case 65:
            var27 = var14.bind(var1)();
            var2 = var27.done;
            var11 = var26;
            var7 = var25;
            var6 = var24;
            var5 = var23;
            var3 = var22;
            var13 = var27;
            if(!var2) { _fun0004_ip = 62; continue _fun0004 }
case 61:
            var3 = var9.slice;
            var2 = _closure1_slot5;
            var2 = var3.bind(var9)(var4, var2);
            var5 = var2.length;
            var3 = var9.length;
            if(!(var5 !== var3)) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 6;
            var3 = var11[var3];
            var7 = var5.bind(var1)(var3);
            var6 = var7.track;
            var3 = _closure1_slot6;
            var5 = var3.CLIP_TIMELINE_TRIMMED;
            var3 = {};
            var12 = var12.id;
            var3['clip_uuid'] = var12;
            var9 = var9.length;
            var3['clip_event_timeline_size'] = var9;
            var9 = _closure1_slot0;
            var8 = 7;
            var8 = var11[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.getClipsRuntime;
            var8 = var8.bind(var9)(var10);
            var3['clip_runtime'] = var8;
            var3 = var6.bind(var7)(var5, var3);
case 82:
            var3 = var2.length;
            var3 = var3 > var4;
            var1 = undefined;
            if(!var3) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            var1 = var2;
case 84:
            return var1;
        }
    };
    var3['getClipEventsTimeline'] = var2;
    return var1;
})();