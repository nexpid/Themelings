// app/modules/go_live/utils/StreamPermissionUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var7 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
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
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
 342:
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
    var _closure1_slot12 = var1;
    var6 = function canStreamInChannel(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var8 = arg3;
            var2 = arguments[3];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0004_ip = 20; continue _fun0004 }
 18:
            var2 = true;
 20:
            var1 = var5.isPrivate;
            var1 = var1.bind(var5)();
            if(var1) { _fun0004_ip = 218; continue _fun0004 }
 36:
            var3 = var4.getGuild;
            var1 = var5.getGuildId;
            var1 = var1.bind(var5)();
            var6 = var3.bind(var4)(var1);
            var4 = null;
            var3 = var4 == var6;
            var1 = undefined;
            if(var3) { _fun0004_ip = 73; continue _fun0004 }
 67:
            var1 = var6.maxStageVideoChannelUsers;
 73:
            var10 = var4 != var1;
            var9 = 0;
            var3 = 0;
            if(!var10) { _fun0004_ip = 87; continue _fun0004 }
 84:
            var3 = var1;
 87:
            var1 = var5.isGuildStageVoice;
            var1 = var1.bind(var5)();
            if(!var1) { _fun0004_ip = 104; continue _fun0004 }
 100:
            var1 = var3 <= var9;
 104:
            var1 = !var1;
            if(!var1) { _fun0004_ip = 216; continue _fun0004 }
 110:
            if(!var2) { _fun0004_ip = 145; continue _fun0004 }
 113:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 7;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.bind(var7)(var5, var8);
            var2 = !var3;
 145:
            var2 = !var2;
            if(!var2) { _fun0004_ip = 213; continue _fun0004 }
 151:
            var7 = var8.can;
            var3 = _closure1_slot9;
            var3 = var3.STREAM;
            var3 = var7.bind(var8)(var3, var5);
            var7 = !var3;
            var3 = !var7;
            if(var7) { _fun0004_ip = 210; continue _fun0004 }
 185:
            var4 = var4 != var6;
            if(!var4) { _fun0004_ip = 207; continue _fun0004 }
 192:
            var6 = var6.afkChannelId;
            var5 = var5.id;
            var4 = var6 !== var5;
 207:
            var3 = var4;
 210:
            var2 = var3;
 213:
            var1 = var2;
 216:
            return var1;
 218:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot13 = var6;
    var4 = function canWatchStream(arg1, arg2, arg3, arg4, arg5) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var9 = arg2;
            var10 = arg5;
            var8 = null;
            if(!(var8 != var2)) { _fun0005_ip = 327; continue _fun0005 }
 18:
            var3 = var9.isInChannel;
            var1 = var2.id;
            var1 = var3.bind(var9)(var1);
            var4 = _closure1_slot4;
            var5 = var2 instanceof var4;
            if(!var5) { _fun0005_ip = 86; continue _fun0005 }
 48:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 9;
            var6 = var6[var4];
            var4 = undefined;
            var7 = var7.bind(var4)(var6);
            var6 = var7.isChannelFull;
            var4 = arg3;
            var5 = var6.bind(var7)(var2, var9, var4);
 86:
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
            if(var7) { _fun0005_ip = 148; continue _fun0005 }
 134:
            var6 = var10.getRemoteSessionId;
            var6 = var6.bind(var10)();
            var7 = var8 != var6;
 148:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = 10;
            var6 = var6[var11];
            var8 = var8.bind(var9)(var6);
            var6 = var8.shouldAgeVerifyForAgeGate;
            var6 = var6.bind(var8)();
            if(!var6) { _fun0005_ip = 214; continue _fun0005 }
 181:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var10 = var10.bind(var9)(var8);
            var8 = var10.shouldShowAgeGateForChannelId;
            var2 = var2.id;
            var6 = var8.bind(var10)(var2);
 214:
            if(var7) { _fun0005_ip = 276; continue _fun0005 }
 217:
            if(var6) { _fun0005_ip = 264; continue _fun0005 }
 220:
            if(var4) { _fun0005_ip = 238; continue _fun0005 }
 223:
            if(var1) { _fun0005_ip = 238; continue _fun0005 }
 226:
            var2 = _closure1_slot10;
            var2 = var2.NO_PERMISSION;
            _fun0005_ip = 286; continue _fun0005;
 238:
            var8 = var5;
            if(!var8) { _fun0005_ip = 247; continue _fun0005 }
 244:
            var8 = !var1;
 247:
            var2 = undefined;
            if(!var8) { _fun0005_ip = 286; continue _fun0005 }
 252:
            var8 = _closure1_slot10;
            var2 = var8.CHANNEL_FULL;
            _fun0005_ip = 286; continue _fun0005;
 264:
            var8 = _closure1_slot10;
            var2 = var8.AGE_RESTRICTED;
            _fun0005_ip = 286; continue _fun0005;
 276:
            var3 = _closure1_slot10;
            var2 = var3.REMOTE_MODE;
 286:
            var3 = !var7;
            if(var7) { _fun0005_ip = 295; continue _fun0005 }
 292:
            var3 = !var6;
 295:
            if(!var3) { _fun0005_ip = 313; continue _fun0005 }
 298:
            if(var1) { _fun0005_ip = 310; continue _fun0005 }
 301:
            if(!var4) { _fun0005_ip = 307; continue _fun0005 }
 304:
            var4 = !var5;
 307:
            var1 = var4;
 310:
            var3 = var1;
 313:
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
 327:
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
 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.REMOTE_MODE;
            if(!(var2 !== var3)) { _fun0006_ip = 307; continue _fun0006 }
 23:
            var2 = _closure1_slot10;
            var2 = var2.CHANNEL_FULL;
            if(!(var2 !== var3)) { _fun0006_ip = 248; continue _fun0006 }
 40:
            var2 = _closure1_slot10;
            var2 = var2.NO_PERMISSION;
            if(!(var2 !== var3)) { _fun0006_ip = 189; continue _fun0006 }
 57:
            var2 = _closure1_slot10;
            var2 = var2.AGE_RESTRICTED;
            if(!(var2 !== var3)) { _fun0006_ip = 130; continue _fun0006 }
 71:
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
 130:
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
 189:
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
 248:
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
 307:
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
 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.REMOTE_MODE;
            if(!(var2 !== var3)) { _fun0007_ip = 606; continue _fun0007 }
 23:
            var2 = _closure1_slot10;
            var2 = var2.CHANNEL_FULL;
            if(!(var2 !== var3)) { _fun0007_ip = 473; continue _fun0007 }
 40:
            var2 = _closure1_slot10;
            var2 = var2.NO_PERMISSION;
            if(!(var2 !== var3)) { _fun0007_ip = 340; continue _fun0007 }
 57:
            var2 = _closure1_slot10;
            var2 = var2.AGE_RESTRICTED;
            if(!(var2 !== var3)) { _fun0007_ip = 207; continue _fun0007 }
 74:
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
 207:
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
 340:
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
 473:
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
 606:
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
 0:
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
            if(var2) { _fun0008_ip = 96; continue _fun0008 }
 47:
            var2 = var3.value;
            var9 = var2.channel;
            var2 = _closure1_slot13;
            var2 = var2.bind(var5)(var9, var8, var7);
            if(!var2) { _fun0008_ip = 81; continue _fun0008 }
 71:
            var2 = var1.push;
            var2 = var2.bind(var1)(var9);
 81:
            var9 = var4.bind(var5)();
            var2 = var9.done;
            var3 = var9;
            if(!var2) { _fun0008_ip = 47; continue _fun0008 }
 96:
            return var1;
        }
    };
    var3['getStreamEligibleChannels'] = var2;
    return var1;
})();