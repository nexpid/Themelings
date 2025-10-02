// app/modules/go_live/utils/StreamPermissionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var6 = function canStreamInChannel(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var8 = arg3;
            var2 = arguments[3];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0004_ip = 29; continue _fun0004 }
case 36:
            var2 = true;
case 29:
            var1 = var5.isPrivate;
            var1 = var1.bind(var5)();
            if(var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var3 = var4.getGuild;
            var1 = var5.getGuildId;
            var1 = var1.bind(var5)();
            var6 = var3.bind(var4)(var1);
            var4 = null;
            var3 = var4 == var6;
            var1 = undefined;
            if(var3) { _fun0004_ip = 39; continue _fun0004 }
case 30:
            var1 = var6.maxStageVideoChannelUsers;
case 39:
            var10 = var4 != var1;
            var9 = 0;
            var3 = 0;
            if(!var10) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var3 = var1;
case 40:
            var1 = var5.isGuildStageVoice;
            var1 = var1.bind(var5)();
            if(!var1) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var1 = var3 <= var9;
case 42:
            var1 = !var1;
            if(!var1) { _fun0004_ip = 44; continue _fun0004 }
case 13:
            if(!var2) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 7;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.bind(var7)(var5, var8);
            var2 = !var3;
case 45:
            var2 = !var2;
            if(!var2) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var7 = var8.can;
            var3 = _closure1_slot9;
            var3 = var3.STREAM;
            var3 = var7.bind(var8)(var3, var5);
            var7 = !var3;
            var3 = !var7;
            if(var7) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var4 = var4 != var6;
            if(!var4) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var6 = var6.afkChannelId;
            var5 = var5.id;
            var4 = var6 !== var5;
case 51:
            var3 = var4;
case 49:
            var2 = var3;
case 47:
            var1 = var2;
case 44:
            return var1;
case 37:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot13 = var6;
    var4 = function canWatchStream(arg1, arg2, arg3, arg4, arg5) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var9 = arg2;
            var10 = arg5;
            var8 = null;
            if(!(var8 != var2)) { _fun0005_ip = 53; continue _fun0005 }
case 36:
            var3 = var9.isInChannel;
            var1 = var2.id;
            var1 = var3.bind(var9)(var1);
            var4 = _closure1_slot4;
            var5 = var2 instanceof var4;
            if(!var5) { _fun0005_ip = 9; continue _fun0005 }
case 54:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 9;
            var6 = var6[var4];
            var4 = undefined;
            var7 = var7.bind(var4)(var6);
            var6 = var7.isChannelFull;
            var4 = arg3;
            var5 = var6.bind(var7)(var2, var9, var4);
case 9:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 7;
            var4 = var7[var4];
            var9 = undefined;
            var6 = var6.bind(var9)(var4);
            var4 = arg4;
            var4 = var6.bind(var9)(var2, var4);
            var6 = var10.getAwaitingRemoteSessionInfo;
            var6 = var6.bind(var10)();
            var7 = var8 != var6;
            if(var7) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var6 = var10.getRemoteSessionId;
            var6 = var6.bind(var10)();
            var7 = var8 != var6;
case 55:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = 10;
            var6 = var6[var11];
            var8 = var8.bind(var9)(var6);
            var6 = var8.shouldAgeVerifyForAgeGate;
            var6 = var6.bind(var8)();
            if(!var6) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var10 = var10.bind(var9)(var8);
            var8 = var10.shouldShowAgeGateForChannelId;
            var2 = var2.id;
            var6 = var8.bind(var10)(var2);
case 57:
            if(var7) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            if(var6) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            if(var4) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            if(var1) { _fun0005_ip = 63; continue _fun0005 }
case 65:
            var2 = _closure1_slot10;
            var2 = var2.NO_PERMISSION;
            _fun0005_ip = 66; continue _fun0005;
case 63:
            var8 = var5;
            if(!var8) { _fun0005_ip = 23; continue _fun0005 }
case 67:
            var8 = !var1;
case 23:
            var2 = undefined;
            if(!var8) { _fun0005_ip = 66; continue _fun0005 }
case 68:
            var8 = _closure1_slot10;
            var2 = var8.CHANNEL_FULL;
            _fun0005_ip = 66; continue _fun0005;
case 61:
            var8 = _closure1_slot10;
            var2 = var8.AGE_RESTRICTED;
            _fun0005_ip = 66; continue _fun0005;
case 59:
            var3 = _closure1_slot10;
            var2 = var3.REMOTE_MODE;
case 66:
            var3 = !var7;
            if(var7) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var3 = !var6;
case 69:
            if(!var3) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            if(var1) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            if(!var4) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var4 = !var5;
case 75:
            var1 = var4;
case 73:
            var3 = var1;
case 71:
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
case 53:
            var1 = new Array(2);
            var2 = false;
            var1[0] = var2;
            var2 = _closure1_slot10;
            var2 = var2.NO_PERMISSION;
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var13 = 0;
    var5 = var9[var13];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var12 = 1;
    var5 = var9[var12];
    var5 = var8.bind(var1)(var5);
    var5 = var5.ChannelRecordBase;
    var _closure1_slot4 = var5;
    var11 = 2;
    var5 = var9[var11];
    var5 = var8.bind(var1)(var5);
    var5 = var5.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot5 = var5;
    var10 = 3;
    var5 = var9[var10];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var9[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot9 = var5;
    var5 = {};
    var5['REMOTE_MODE'] = var13;
    var7 = 'REMOTE_MODE';
    var5[var13] = var7;
    var5['CHANNEL_FULL'] = var12;
    var7 = 'CHANNEL_FULL';
    var5[var12] = var7;
    var5['NO_PERMISSION'] = var11;
    var7 = 'NO_PERMISSION';
    var5[var11] = var7;
    var5['AGE_RESTRICTED'] = var10;
    var7 = 'AGE_RESTRICTED';
    var5[var10] = var7;
    var _closure1_slot10 = var5;
    var7 = 12;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/go_live/utils/StreamPermissionUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['canStreamInChannel'] = var6;
    var6 = function getStreamCTAString(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.REMOTE_MODE;
            if(!(var2 !== var3)) { _fun0006_ip = 75; continue _fun0006 }
case 31:
            var2 = _closure1_slot10;
            var2 = var2.CHANNEL_FULL;
            if(!(var2 !== var3)) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var2 = _closure1_slot10;
            var2 = var2.NO_PERMISSION;
            if(!(var2 !== var3)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var2 = _closure1_slot10;
            var2 = var2.AGE_RESTRICTED;
            if(!(var2 !== var3)) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.7Xq/nZ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 81:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.b5FqhI;
            var2 = var3.bind(var4)(var2);
            return var2;
case 79:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.pgUTZG;
            var2 = var3.bind(var4)(var2);
            return var2;
case 77:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.elyVbm;
            var2 = var3.bind(var4)(var2);
            return var2;
case 75:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.1i3tSU;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getStreamCTAString'] = var6;
    var6 = function getStreamCTAAriaLabel(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.REMOTE_MODE;
            if(!(var2 !== var3)) { _fun0007_ip = 83; continue _fun0007 }
case 31:
            var2 = _closure1_slot10;
            var2 = var2.CHANNEL_FULL;
            if(!(var2 !== var3)) { _fun0007_ip = 84; continue _fun0007 }
case 78:
            var2 = _closure1_slot10;
            var2 = var2.NO_PERMISSION;
            if(!(var2 !== var3)) { _fun0007_ip = 85; continue _fun0007 }
case 80:
            var2 = _closure1_slot10;
            var2 = var2.AGE_RESTRICTED;
            if(!(var2 !== var3)) { _fun0007_ip = 51; continue _fun0007 }
case 86:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var3 = var8[var2];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var6 = var3.intl;
            var4 = var6.string;
            var3 = var8[var2];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.7Xq/nZ;
            var6 = var4.bind(var6)(var3);
            var3 = var8[var2];
            var3 = var7.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.9C444u;
            var5 = var3.bind(var4)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ': ';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 51:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var3 = var8[var2];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var6 = var3.intl;
            var4 = var6.string;
            var3 = var8[var2];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.7Xq/nZ;
            var6 = var4.bind(var6)(var3);
            var3 = var8[var2];
            var3 = var7.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.b5FqhI;
            var5 = var3.bind(var4)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ': ';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 85:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var3 = var8[var2];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var6 = var3.intl;
            var4 = var6.string;
            var3 = var8[var2];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.7Xq/nZ;
            var6 = var4.bind(var6)(var3);
            var3 = var8[var2];
            var3 = var7.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.pgUTZG;
            var5 = var3.bind(var4)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ': ';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 84:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var3 = var8[var2];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var6 = var3.intl;
            var4 = var6.string;
            var3 = var8[var2];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.7Xq/nZ;
            var6 = var4.bind(var6)(var3);
            var3 = var8[var2];
            var3 = var7.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.elyVbm;
            var5 = var3.bind(var4)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ': ';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 83:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var2 = var7[var1];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var5 = var2.intl;
            var3 = var5.string;
            var2 = var7[var1];
            var2 = var6.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.7Xq/nZ;
            var5 = var3.bind(var5)(var2);
            var2 = var7[var1];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.1i3tSU;
            var4 = var2.bind(var3)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ': ';
            var1 = var3.bind(var2)(var5, var1, var4);
            return var1;
        }
    };
    var3['getStreamCTAAriaLabel'] = var6;
    var3['StreamUnavailableReasons'] = var5;
    var3['canWatchStream'] = var4;
    var4 = function useCanWatchStream(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var6 = _closure1_slot8;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = _closure1_slot6;
        var2[1] = var6;
        var6 = _closure1_slot7;
        var2[2] = var6;
        var5 = _closure1_slot3;
        var2[3] = var5;
        var1 = function() {
            var7 = _closure1_slot14;
            var12 = _closure2_slot0;
            var11 = _closure1_slot8;
            var10 = _closure1_slot6;
            var9 = _closure1_slot7;
            var8 = _closure1_slot3;
            var13 = undefined;
            var1 = var13[var7](var12, var11, var10, var9, var8, var7);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanWatchStream'] = var4;
    var2 = function getStreamEligibleChannels(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var8 = arg2;
            var7 = arg3;
            var1 = new Array(0);
            var3 = _closure1_slot11;
            var4 = _closure1_slot5;
            var2 = arg1;
            var2 = var2[var4];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0008_ip = 11; continue _fun0008 }
case 87:
            var2 = var3.value;
            var9 = var2.channel;
            var2 = _closure1_slot13;
            var2 = var2.bind(var5)(var9, var8, var7);
            if(!var2) { _fun0008_ip = 88; continue _fun0008 }
case 82:
            var2 = var1.push;
            var2 = var2.bind(var1)(var9);
case 88:
            var9 = var4.bind(var5)();
            var2 = var9.done;
            var3 = var9;
            if(!var2) { _fun0008_ip = 87; continue _fun0008 }
case 11:
            return var1;
        }
    };
    var3['getStreamEligibleChannels'] = var2;
    return var1;
})();