// app/modules/voice_dares/protocol/VoiceDarePresenceCodec.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
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
            var9 = _closure1_slot5;
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
            var7 = _closure1_slot5;
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
    var _closure1_slot4 = var1;
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
    var _closure1_slot5 = var1;
    var1 = function decodeVoiceDareFromChunks(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arguments[1];
            var8 = arguments[2];
            var7 = undefined;
            if(!(var9 === var7)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var9 = '';
case 36:
            if(!(var8 === var7)) { _fun0004_ip = 38; continue _fun0004 }
case 29:
            var8 = '';
case 38:
            var2 = new Array(0);
            var3 = _closure1_slot4;
            var1 = arg1;
            var6 = var3.bind(var7)(var1);
            var3 = var6.bind(var7)();
            var1 = var3.done;
            var4 = 4;
            if(var1) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var11 = var3.value;
            var10 = var11.startsWith;
            var1 = _closure1_slot3;
            var1 = var10.bind(var11)(var1);
            if(var1) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var1 = null;
            return var1;
case 41:
            var10 = var2.push;
            var1 = var11.slice;
            var1 = var1.bind(var11)(var4);
            var1 = var10.bind(var2)(var1);
            var10 = var6.bind(var7)();
            var1 = var10.done;
            var3 = var10;
            if(!var1) { _fun0004_ip = 40; continue _fun0004 }
case 39:
            var1 = var2.join;
            var3 = '';
            var2 = var1.bind(var2)(var3);
            var1 = function decodeBase64Url(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
case 43: // try_start_0
                    var4 = var1;
                    var3 = var4.replace;
                    var2 = /-/g;
                    var1 = '+';
                    var4 = var3.bind(var4)(var2, var1);
                    var3 = var4.replace;
                    var2 = /_/g;
                    var1 = '/';
                    var5 = var3.bind(var4)(var2, var1);
                    var1 = var5.length;
                    var6 = 4;
                    var1 = var1 % var6;
                    var2 = 0;
                    var4 = var5;
                    if(!(var2 !== var1)) { _fun0005_ip = 44; continue _fun0005 }
case 41:
                    var3 = '=';
                    var2 = var3.repeat;
                    var1 = var6 - var1;
                    var3 = var2.bind(var3)(var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '';
                    var4 = var2.bind(var1)(var5, var3);
case 44:
                    var1 = global;
                    var3 = var1.atob;
                    var2 = undefined;
                    var5 = var3.bind(var2)(var4);
                    var4 = var1.Uint8Array;
                    var3 = var4.from;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.charCodeAt;
                        var1 = 0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var5, var2);
                    var1 = var1.TextDecoder;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var9 = var2;
                    var1 = new var9[var1](var8);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = var2.decode;
                    var1 = var1.bind(var2)(var3);
case 45: // try_end0
                    return var1;
case 22: // catch_target0
                    CatchBlockStart(arg_register=0);
                    var1 = null;
                    return var1;
                }
            };
            var6 = var1.bind(var7)(var2);
            var1 = null;
            if(!(var1 != var6)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var2 = var6;
case 15: // try_start_0
            var6 = global;
            var10 = var6.JSON;
            var6 = var10.parse;
            var2 = var6.bind(var10)(var2);
case 48: // try_end0
            var6 = var2;
            _fun0004_ip = 49; continue _fun0004;
case 50: // catch_target0
            CatchBlockStart(arg_register=1);
            var6 = null;
case 49:
            var2 = global;
            var10 = var2.Array;
            var2 = var10.isArray;
            var2 = var2.bind(var10)(var6);
            var10 = var6;
            var6 = false;
            if(!var2) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var11 = var10.length;
            var2 = 2;
            var11 = var11 < var2;
            var6 = false;
            if(var11) { _fun0004_ip = 51; continue _fun0004 }
case 53:
            var13 = _closure1_slot8;
            var11 = 0;
            var11 = var10[var11];
            var11 = var13.bind(var7)(var11);
            var6 = false;
            if(!var11) { _fun0004_ip = 51; continue _fun0004 }
case 54:
            var15 = _closure1_slot10;
            var14 = _closure1_slot0;
            var11 = _closure1_slot1;
            var13 = 1;
            var11 = var11[var13];
            var11 = var14.bind(var7)(var11);
            var14 = var11.VoiceDareMessageKind;
            var11 = var10[var13];
            var11 = var15.bind(var7)(var14, var11);
            var6 = false;
            if(!var11) { _fun0004_ip = 51; continue _fun0004 }
case 55:
            var11 = var10[var13];
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var14 = var14[var13];
            var14 = var15.bind(var7)(var14);
            var14 = var14.VoiceDareMessageKind;
            var14 = var14.OFFER;
            if(!(var14 !== var11)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var14 = var14[var13];
            var14 = var15.bind(var7)(var14);
            var14 = var14.VoiceDareMessageKind;
            var14 = var14.STATE;
            if(!(var14 !== var11)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var14 = var14[var13];
            var14 = var15.bind(var7)(var14);
            var14 = var14.VoiceDareMessageKind;
            var14 = var14.COMMAND;
            var6 = false;
            if(!(var14 === var11)) { _fun0004_ip = 51; continue _fun0004 }
case 60:
            var15 = var10.length;
            var14 = 9;
            var6 = false;
            if(!(var14 === var15)) { _fun0004_ip = 51; continue _fun0004 }
case 61:
            _fun0004_ip = 62; continue _fun0004;
case 58:
            var15 = var10.length;
            var14 = 9;
            var14 = var15 < var14;
            var6 = false;
            if(var14) { _fun0004_ip = 51; continue _fun0004 }
case 63:
            var15 = var10.length;
            var14 = 10;
            var14 = var15 > var14;
            var6 = false;
            if(var14) { _fun0004_ip = 51; continue _fun0004 }
case 64:
            _fun0004_ip = 62; continue _fun0004;
case 56:
            var15 = var10.length;
            var14 = 8;
            var6 = false;
            if(!(var14 === var15)) { _fun0004_ip = 51; continue _fun0004 }
case 62:
            var14 = _closure1_slot8;
            var2 = var10[var2];
            var2 = var14.bind(var7)(var2);
            var6 = false;
            if(!var2) { _fun0004_ip = 51; continue _fun0004 }
case 65:
            var14 = _closure1_slot8;
            var2 = 3;
            var2 = var10[var2];
            var2 = var14.bind(var7)(var2);
            var6 = false;
            if(!var2) { _fun0004_ip = 51; continue _fun0004 }
case 66:
            var15 = _closure1_slot10;
            var14 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var13];
            var2 = var14.bind(var7)(var2);
            var14 = var2.VoiceDareKind;
            var2 = var10[var4];
            var2 = var15.bind(var7)(var14, var2);
            var6 = false;
            if(!var2) { _fun0004_ip = 51; continue _fun0004 }
case 67:
            var15 = _closure1_slot9;
            var2 = 5;
            var14 = var10[var2];
            var14 = var15.bind(var7)(var14);
            var6 = false;
            if(!var14) { _fun0004_ip = 51; continue _fun0004 }
case 68:
            var16 = var10[var2];
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var14 = var14[var13];
            var14 = var15.bind(var7)(var14);
            var14 = var14.VOICE_DARE_MIN_DURATION_MIN;
            var15 = 60;
            var14 = var15 * var14;
            var14 = var16 < var14;
            var6 = false;
            if(var14) { _fun0004_ip = 51; continue _fun0004 }
case 69:
            var14 = var10[var2];
            var16 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var13];
            var2 = var16.bind(var7)(var2);
            var2 = var2.VOICE_DARE_MAX_DURATION_MIN;
            var2 = var15 * var2;
            var2 = var14 > var2;
            var6 = false;
            if(var2) { _fun0004_ip = 51; continue _fun0004 }
case 70:
            var15 = _closure1_slot10;
            var14 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var13];
            var2 = var14.bind(var7)(var2);
            var14 = var2.VoiceDareSpiciness;
            var2 = 6;
            var2 = var10[var2];
            var2 = var15.bind(var7)(var14, var2);
            var6 = false;
            if(!var2) { _fun0004_ip = 51; continue _fun0004 }
case 71:
            var15 = _closure1_slot9;
            var2 = 7;
            var14 = var10[var2];
            var14 = var15.bind(var7)(var14);
            var6 = false;
            if(!var14) { _fun0004_ip = 51; continue _fun0004 }
case 72:
            var15 = var10[var2];
            var16 = _closure1_slot0;
            var14 = _closure1_slot1;
            var14 = var14[var13];
            var14 = var16.bind(var7)(var14);
            var14 = var14.VOICE_DARE_MIN_FAIL_AFTER_HOURS;
            var14 = var15 < var14;
            var6 = false;
            if(var14) { _fun0004_ip = 51; continue _fun0004 }
case 73:
            var14 = var10[var2];
            var15 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var13];
            var2 = var15.bind(var7)(var2);
            var2 = var2.VOICE_DARE_MAX_FAIL_AFTER_HOURS;
            var2 = var14 > var2;
            var6 = false;
            if(var2) { _fun0004_ip = 51; continue _fun0004 }
case 74:
            var12 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var13];
            var2 = var12.bind(var7)(var2);
            var2 = var2.VoiceDareMessageKind;
            var2 = var2.OFFER;
            var6 = true;
            if(!(var2 !== var11)) { _fun0004_ip = 51; continue _fun0004 }
case 75:
            var12 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var13];
            var2 = var12.bind(var7)(var2);
            var2 = var2.VoiceDareMessageKind;
            var2 = var2.STATE;
            if(!(var2 !== var11)) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var12 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var13];
            var2 = var12.bind(var7)(var2);
            var2 = var2.VoiceDareMessageKind;
            var2 = var2.COMMAND;
            var6 = undefined;
            if(!(var2 === var11)) { _fun0004_ip = 51; continue _fun0004 }
case 78:
            var12 = _closure1_slot10;
            var11 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var13];
            var2 = var11.bind(var7)(var2);
            var11 = var2.VoiceDareCommandType;
            var2 = 8;
            var2 = var10[var2];
            var6 = var12.bind(var7)(var11, var2);
            _fun0004_ip = 51; continue _fun0004;
case 76:
            var12 = _closure1_slot10;
            var11 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var13];
            var2 = var11.bind(var7)(var2);
            var11 = var2.VoiceDarePhase;
            var2 = 8;
            var2 = var10[var2];
            var2 = var12.bind(var7)(var11, var2);
            var11 = !var2;
            var2 = !var11;
            if(var11) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            var12 = var10.length;
            var11 = 10;
            var11 = var11 === var12;
            if(!var11) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var13 = _closure1_slot9;
            var12 = 9;
            var12 = var10[var12];
            var12 = var13.bind(var7)(var12);
            var11 = !var12;
case 81:
            var2 = !var11;
case 79:
            var6 = var2;
case 51:
            var2 = null;
            if(!var6) { _fun0004_ip = 83; continue _fun0004 }
case 84:
            if(!(var9 === var7)) { _fun0004_ip = 85; continue _fun0004 }
case 86:
            var9 = var3;
case 85:
            if(!(var8 === var7)) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var8 = var3;
case 87:
            var6 = {};
            var11 = 0;
            var11 = var10[var11];
            var6['dareId'] = var11;
            var6['guildId'] = var9;
            var6['channelId'] = var8;
            var8 = 2;
            var8 = var10[var8];
            var6['senderId'] = var8;
            var8 = 3;
            var8 = var10[var8];
            var6['targetId'] = var8;
            var4 = var10[var4];
            var6['kind'] = var4;
            var6['prompt'] = var3;
            var3 = 5;
            var3 = var10[var3];
            var6['durationSec'] = var3;
            var3 = 7;
            var3 = var10[var3];
            var6['failAfterHours'] = var3;
            var3 = 6;
            var3 = var10[var3];
            var6['spiciness'] = var3;
            var8 = 1;
            var3 = var10[var8];
            var6['messageKind'] = var3;
            var9 = var10[var8];
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var3 = var3.VoiceDareMessageKind;
            var3 = var3.OFFER;
            if(!(var3 !== var9)) { _fun0004_ip = 89; continue _fun0004 }
case 90:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var3 = var3.VoiceDareMessageKind;
            var3 = var3.STATE;
            if(!(var3 !== var9)) { _fun0004_ip = 91; continue _fun0004 }
case 92:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var3 = var3.VoiceDareMessageKind;
            var4 = var3.COMMAND;
            var3 = undefined;
            if(!(var4 === var9)) { _fun0004_ip = 93; continue _fun0004 }
case 94:
            var4 = {};
            var18 = var4;
            var17 = var6;
            var9 = copyDataProperties(var18, var17);
            var11 = _closure1_slot0;
            var9 = _closure1_slot1;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.VoiceDareMessageKind;
            var11 = var9.COMMAND;
            var9 = 'messageKind';
            var4[var9] = var11;
            var9 = 8;
            var11 = var10[var9];
            var9 = 'commandType';
            var4[var9] = var11;
            var3 = var4;
            _fun0004_ip = 93; continue _fun0004;
case 91:
            var4 = {};
            var18 = var4;
            var17 = var6;
            var9 = copyDataProperties(var18, var17);
            var11 = _closure1_slot0;
            var9 = _closure1_slot1;
            var9 = var9[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.VoiceDareMessageKind;
            var11 = var9.STATE;
            var9 = 'messageKind';
            var4[var9] = var11;
            var9 = 8;
            var11 = var10[var9];
            var9 = 'phase';
            var4[var9] = var11;
            var9 = 9;
            var10 = var10[var9];
            var9 = 'startedAtMs';
            var4[var9] = var10;
            var3 = var4;
            _fun0004_ip = 93; continue _fun0004;
case 89:
            var4 = {};
            var18 = var4;
            var17 = var6;
            var6 = copyDataProperties(var18, var17);
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.VoiceDareMessageKind;
            var6 = var5.OFFER;
            var5 = 'messageKind';
            var4[var5] = var6;
            var3 = var4;
case 93:
            var2 = var3;
case 83:
            return var2;
case 46:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function getEncodedFromString(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = null;
            if(var4) { _fun0006_ip = 95; continue _fun0006 }
case 32:
            var4 = '';
            var1 = null;
            if(!(var4 !== var3)) { _fun0006_ip = 95; continue _fun0006 }
case 38:
            var5 = var3.startsWith;
            var4 = _closure1_slot3;
            var4 = var5.bind(var3)(var4);
            var2 = null;
            if(!var4) { _fun0006_ip = 96; continue _fun0006 }
case 97:
            var2 = var3;
case 96:
            var1 = var2;
case 95:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function isNonEmptyString(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var2 = 'string';
            var1 = typeof var3;
            var1 = var2 === var1;
            if(!var1) { _fun0007_ip = 98; continue _fun0007 }
case 99:
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
case 98:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function isFiniteNumber(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var2 = 'number';
            var1 = typeof var4;
            var1 = var2 === var1;
            if(!var1) { _fun0008_ip = 100; continue _fun0008 }
case 99:
            var2 = global;
            var3 = var2.Number;
            var2 = var3.isFinite;
            var1 = var2.bind(var3)(var4);
case 100:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function isValidNumericEnum(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg2;
            var2 = 'number';
            var1 = typeof var4;
            var1 = var2 === var1;
            if(!var1) { _fun0009_ip = 101; continue _fun0009 }
case 99:
            var2 = global;
            var5 = var2.Object;
            var3 = var5.values;
            var2 = arg1;
            var3 = var3.bind(var5)(var2);
            var2 = var3.includes;
            var1 = var2.bind(var3)(var4);
case 101:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot2 = var4;
    var4 = 'vd1:';
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_dares/protocol/VoiceDarePresenceCodec.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 'voice_dares';
    var3['VOICE_DARE_METADATA_NAMESPACE'] = var4;
    var4 = function encodeVoiceDareToFields(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var7 = arg1;
            var1 = var7.senderId;
            var4 = new Array(6);
            var4[0] = var1;
            var1 = var7.targetId;
            var4[1] = var1;
            var1 = var7.kind;
            var4[2] = var1;
            var1 = var7.durationSec;
            var4[3] = var1;
            var1 = var7.spiciness;
            var4[4] = var1;
            var1 = var7.failAfterHours;
            var4[5] = var1;
            var2 = var7.messageKind;
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 1;
            var1 = var1[var8];
            var5 = undefined;
            var1 = var6.bind(var5)(var1);
            var1 = var1.VoiceDareMessageKind;
            var1 = var1.OFFER;
            if(!(var1 !== var2)) { _fun0010_ip = 102; continue _fun0010 }
case 103:
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var6.bind(var5)(var1);
            var1 = var1.VoiceDareMessageKind;
            var1 = var1.STATE;
            if(!(var1 !== var2)) { _fun0010_ip = 104; continue _fun0010 }
case 105:
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var6.bind(var5)(var1);
            var1 = var1.VoiceDareMessageKind;
            var1 = var1.COMMAND;
            var6 = undefined;
            if(!(var1 === var2)) { _fun0010_ip = 106; continue _fun0010 }
case 107:
            var2 = var7.dareId;
            var1 = new Array(3);
            var1[0] = var2;
            var9 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var2 = var9.bind(var5)(var2);
            var2 = var2.VoiceDareMessageKind;
            var2 = var2.COMMAND;
            var1[1] = var2;
            var16 = 2;
            var18 = var1;
            var17 = var4;
            var2 = arraySpread(var18, var17, var16);
            var9 = var7.commandType;
            var1[var2] = var9;
            var2 = var2 + var8;
            var6 = var1;
            _fun0010_ip = 106; continue _fun0010;
case 104:
            var2 = var7.dareId;
            var1 = new Array(3);
            var1[0] = var2;
            var9 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var2 = var9.bind(var5)(var2);
            var2 = var2.VoiceDareMessageKind;
            var2 = var2.STATE;
            var1[1] = var2;
            var16 = 2;
            var18 = var1;
            var17 = var4;
            var2 = arraySpread(var18, var17, var16);
            var9 = var7.phase;
            var1[var2] = var9;
            var2 = var2 + var8;
            var9 = var7.startedAtMs;
            var2 = null;
            var6 = var1;
            if(!(var2 != var9)) { _fun0010_ip = 106; continue _fun0010 }
case 108:
            var9 = var1.push;
            var2 = var7.startedAtMs;
            var2 = var9.bind(var1)(var2);
            var6 = var1;
            _fun0010_ip = 106; continue _fun0010;
case 102:
            var2 = var7.dareId;
            var1 = new Array(2);
            var1[0] = var2;
            var9 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var2 = var9.bind(var5)(var2);
            var2 = var2.VoiceDareMessageKind;
            var2 = var2.OFFER;
            var1[1] = var2;
            var16 = 2;
            var18 = var1;
            var17 = var4;
            var2 = arraySpread(var18, var17, var16);
            var6 = var1;
case 106:
            var2 = global;
            var4 = var2.JSON;
            var1 = var4.stringify;
            var4 = var1.bind(var4)(var6);
            var1 = function encodeBase64Url(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = global;
                    var2 = var1.TextEncoder;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var13 = var3;
                    var2 = new var13[var2](var12);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = var4.encode;
                    var2 = arg1;
                    var4 = var3.bind(var4)(var2);
                    var2 = _closure1_slot4;
                    var3 = undefined;
                    var8 = var2.bind(var3)(var4);
                    var2 = var8.bind(var3)();
                    var5 = var2.done;
                    var4 = '';
                    var7 = var2;
                    var6 = var4;
                    var2 = var6;
                    if(var5) { _fun0011_ip = 109; continue _fun0011 }
case 42:
                    var10 = var7.value;
                    var9 = var1.String;
                    var5 = var9.fromCharCode;
                    var5 = var5.bind(var9)(var10);
                    var6 = var6 + var5;
                    var10 = var8.bind(var3)();
                    var5 = var10.done;
                    var7 = var10;
                    var2 = var6;
                    if(!var5) { _fun0011_ip = 42; continue _fun0011 }
case 109:
                    var1 = var1.btoa;
                    var5 = var1.bind(var3)(var2);
                    var3 = var5.replace;
                    var2 = /\+/g;
                    var1 = '-';
                    var5 = var3.bind(var5)(var2, var1);
                    var3 = var5.replace;
                    var2 = /\\//g;
                    var1 = '_';
                    var3 = var3.bind(var5)(var2, var1);
                    var2 = var3.replace;
                    var1 = /=+$/;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var5 = var1.bind(var5)(var4);
            var1 = {};
            var6 = var7.prompt;
            var4 = '';
            if(!(var4 !== var6)) { _fun0010_ip = 110; continue _fun0010 }
case 111:
            var6 = var7.prompt;
            var1['name'] = var6;
case 110:
            var9 = var7.guildId;
            var6 = null;
            var10 = var6 != var9;
            var12 = var4;
            if(!var10) { _fun0010_ip = 112; continue _fun0010 }
case 113:
            var12 = var9;
case 112:
            var7 = var7.channelId;
            var9 = var6 != var7;
            var11 = var4;
            if(!var9) { _fun0010_ip = 114; continue _fun0010 }
case 115:
            var11 = var7;
case 114:
            var7 = var2.HermesInternal;
            var10 = var7.concat;
            var18 = 'vd:';
            var16 = ':';
            var19 = var4;
            var17 = var12;
            var15 = var11;
            var7 = var19[var10](var18, var17, var16, var15, var14);
            var1['partyId'] = var7;
            var7 = var5.length;
            var12 = 124;
            if(!(!(var7 <= var12))) { _fun0010_ip = 116; continue _fun0010 }
case 117:
            var7 = new Array(0);
            var10 = var5.length;
            var9 = 0;
            var10 = var10 > var9;
            var11 = 0;
            if(!var10) { _fun0010_ip = 118; continue _fun0010 }
case 119:
            var13 = var7.push;
            var10 = var5.slice;
            var10 = var10.bind(var5)(var9, var12);
            var10 = var13.bind(var7)(var10);
            var11 = var12;
case 118:
            var10 = var5.length;
            if(!(var11 < var10)) { _fun0010_ip = 120; continue _fun0010 }
case 121:
            var14 = var7.push;
            var10 = var5.slice;
            var13 = var11 + var12;
            var10 = var10.bind(var5)(var11, var13);
            var10 = var14.bind(var7)(var10);
            var10 = var5.length;
            var11 = var13;
            if(var11 < var10) { _fun0010_ip = 121; continue _fun0010 }
case 120:
            var11 = var7.length;
            var10 = 2;
            if(!(!(var11 > var10))) { _fun0010_ip = 122; continue _fun0010 }
case 123:
            var10 = var7[var9];
            if(!(var6 != var10)) { _fun0010_ip = 124; continue _fun0010 }
case 125:
            var11 = _closure1_slot3;
            var10 = var7[var9];
            var9 = var2.HermesInternal;
            var9 = var9.concat;
            var9 = var9.bind(var4)(var11, var10);
            var1['state'] = var9;
case 124:
            var9 = var7[var8];
            if(!(var6 != var9)) { _fun0010_ip = 126; continue _fun0010 }
case 127:
            var9 = _closure1_slot3;
            var8 = var7[var8];
            var7 = var2.HermesInternal;
            var7 = var7.concat;
            var7 = var7.bind(var4)(var9, var8);
            var1['details'] = var7;
            _fun0010_ip = 126; continue _fun0010;
case 122:
            return var6;
case 116:
            var3 = _closure1_slot3;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var2 = var2.bind(var4)(var3, var5);
            var1['state'] = var2;
case 126:
            return var1;
        }
    };
    var3['encodeVoiceDareToFields'] = var4;
    var2 = function extractVoiceDarePresenceFromActivity(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0012_ip = 128; continue _fun0012 }
case 37:
            var4 = var5.type;
            var3 = _closure1_slot2;
            var3 = var3.CUSTOM_STATUS;
            if(!(var4 === var3)) { _fun0012_ip = 128; continue _fun0012 }
case 129:
            var4 = var5.party;
            var6 = var1 == var4;
            var8 = undefined;
            var3 = undefined;
            if(var6) { _fun0012_ip = 130; continue _fun0012 }
case 131:
            var3 = var4.id;
case 130:
            var3 = var1 != var3;
            var7 = '';
            var6 = var7;
            var4 = var6;
            if(!var3) { _fun0012_ip = 132; continue _fun0012 }
case 133:
            var3 = var5.party;
            var11 = var3.id;
            var9 = var11.startsWith;
            var3 = 'vd:';
            var9 = var9.bind(var11)(var3);
            var3 = null;
            if(!var9) { _fun0012_ip = 134; continue _fun0012 }
case 135:
            var10 = var11.slice;
            var9 = 3;
            var13 = var10.bind(var11)(var9);
            var10 = var13.indexOf;
            var9 = ':';
            var14 = var10.bind(var13)(var9);
            var10 = -1;
            var9 = null;
            if(!(var10 !== var14)) { _fun0012_ip = 20; continue _fun0012 }
case 105:
            var10 = {};
            var12 = var13.slice;
            var11 = 0;
            var11 = var12.bind(var13)(var11, var14);
            var10['guildId'] = var11;
            var12 = var13.slice;
            var11 = 1;
            var11 = var14 + var11;
            var11 = var12.bind(var13)(var11);
            var10['channelId'] = var11;
            var9 = var10;
case 20:
            var3 = var9;
case 134:
            var9 = var1 != var3;
            var6 = var7;
            var4 = var6;
            if(!var9) { _fun0012_ip = 132; continue _fun0012 }
case 136:
            var6 = var3.guildId;
            var4 = var3.channelId;
case 132:
            var3 = new Array(0);
            var14 = var5.state;
            var9 = var1 == var14;
            var10 = null;
            if(var9) { _fun0012_ip = 137; continue _fun0012 }
case 138:
            var10 = null;
            if(!(var7 !== var14)) { _fun0012_ip = 137; continue _fun0012 }
case 139:
            var11 = var14.indexOf;
            var9 = '\u2063';
            var15 = var11.bind(var14)(var9);
            var11 = -1;
            var9 = null;
            if(!(var11 !== var15)) { _fun0012_ip = 140; continue _fun0012 }
case 141:
            var12 = _closure1_slot7;
            var13 = var14.slice;
            var11 = 1;
            var11 = var15 + var11;
            var11 = var13.bind(var14)(var11);
            var9 = var12.bind(var8)(var11);
case 140:
            var10 = var9;
case 137:
            if(!(var1 != var10)) { _fun0012_ip = 142; continue _fun0012 }
case 143:
            var9 = var3.push;
            var9 = var9.bind(var3)(var10);
case 142:
            var10 = _closure1_slot7;
            var9 = var5.details;
            var10 = var10.bind(var8)(var9);
            if(!(var1 != var10)) { _fun0012_ip = 57; continue _fun0012 }
case 144:
            var9 = var3.push;
            var9 = var9.bind(var3)(var10);
case 57:
            var10 = var3.length;
            var9 = 0;
            if(!(var9 !== var10)) { _fun0012_ip = 145; continue _fun0012 }
case 146:
            var2 = _closure1_slot6;
            var6 = var2.bind(var8)(var3, var6, var4);
            var3 = var1 == var6;
            var2 = null;
            if(var3) { _fun0012_ip = 147; continue _fun0012 }
case 148:
            var4 = var5.name;
            var3 = var6;
            if(!(var7 !== var4)) { _fun0012_ip = 58; continue _fun0012 }
case 149:
            var7 = var5.name;
            var4 = 'Custom Status';
            var3 = var6;
            if(!(var4 !== var7)) { _fun0012_ip = 58; continue _fun0012 }
case 150:
            var4 = {};
            var18 = var4;
            var17 = var6;
            var6 = copyDataProperties(var18, var17);
            var6 = var5.name;
            var5 = 'prompt';
            var4[var5] = var6;
            var3 = var4;
case 58:
            var2 = var3;
case 147:
            return var2;
case 145:
            return var1;
case 128:
            return var1;
        }
    };
    var3['extractVoiceDarePresenceFromActivity'] = var2;
    return var1;
})();