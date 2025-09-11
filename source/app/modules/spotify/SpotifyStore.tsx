// app/modules/spotify/SpotifyStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot52 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot54;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot54;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot53 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var1 = function _getActiveSocketAndDevice() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var10 = _closure1_slot44;
            var1 = undefined;
            var5 = null;
            var2 = undefined;
            for(var6 in var10)
 23:
            {
 32:
                var13 = var6;
                var3 = _closure1_slot44;
                var4 = var3[var13];
                var3 = var4.connected;
                if(!var3) { _fun0005_ip = 23; continue _fun0005 }
 52:
                var3 = _closure1_slot45;
                var3 = var3[var13];
                if(var5 == var3) { _fun0005_ip = 23; continue _fun0005 }
 64:
                var3 = _closure1_slot45;
                var14 = var3[var13];
                var13 = var14.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.is_active;
                    return var1;
                };
                var3 = var13.bind(var14)(var3);
                var2 = var3;
                if(var5 == var2) { _fun0005_ip = 23; continue _fun0005 }
 95:
                var2 = {};
                var2['socket'] = var4;
                var2['device'] = var3;
                return var2;
            }
 109:
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = function calculateStartTime(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var3 = global;
            var4 = var3.Date;
            var1 = var4.now;
            var4 = var1.bind(var4)();
            var1 = null;
            var5 = var1 != var2;
            var1 = 0;
            if(!var5) { _fun0006_ip = 37; continue _fun0006 }
 31:
            var1 = var2.startTime;
 37:
            var2 = arg2;
            var2 = var4 - var2;
            var5 = var3.Math;
            var4 = var5.abs;
            var3 = var2 - var1;
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot31;
            if(!(var4 > var3)) { _fun0006_ip = 79; continue _fun0006 }
 76:
            var1 = var2;
 79:
            return var1;
        }
    };
    var _closure1_slot56 = var1;
    var1 = function sendStoppedPlayerState(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 18;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {'type': 'SPOTIFY_PLAYER_STATE', 'accountId': null, 'track': null, 'volumePercent': 0, 'isPlaying': false, 'repeat': false, 'position': 0, 'context': null};
        var5 = arg1;
        var2['accountId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot57 = var1;
    var1 = function findSpotifyActivity(arg1) {
        var4 = _closure1_slot12;
        var3 = var4.findActivity;
        var2 = arg1;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = arg1;
                var1 = var2.party;
                var4 = null;
                var1 = var4 != var1;
                if(!var1) { _fun0007_ip = 33; continue _fun0007 }
 18:
                var3 = var2.party;
                var3 = var3.id;
                var1 = var4 != var3;
 33:
                if(!var1) { _fun0007_ip = 61; continue _fun0007 }
 36:
                var4 = _closure1_slot16;
                var2 = var2.party;
                var3 = var2.id;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
 61:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot58 = var1;
    var1 = function upsertAccount(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var5 = arg1;
            var3 = arg2;
            var2 = _closure1_slot44;
            var4 = var5 in var2;
            var2 = _closure1_slot44;
            if(var4) { _fun0008_ip = 99; continue _fun0008 }
 24:
            var4 = _closure1_slot50;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var11 = var6;
            var10 = var5;
            var9 = var3;
            var4 = new var11[var4](var10, var9, var8);
            var4 = var4 instanceof Object ? var4 : var6;
            var2[var5] = var4;
            var7 = _closure1_slot38;
            var6 = var7.info;
            var4 = global;
            var4 = var4.HermesInternal;
            var8 = var4.concat;
            var4 = 'Added account: ';
            var4 = var8.bind(var4)(var5);
            var4 = var6.bind(var7)(var4);
            _fun0008_ip = 148; continue _fun0008;
 99:
            var2 = var2[var5];
            var2['accessToken'] = var3;
            var3 = _closure1_slot38;
            var2 = var3.info;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'Updated account access token: ';
            var1 = var4.bind(var1)(var5);
            var1 = var2.bind(var3)(var1);
 148:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot59 = var1;
    var1 = function removeAccount(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot44;
            var2 = var5 in var2;
            if(!var2) { _fun0009_ip = 156; continue _fun0009 }
 20:
            var2 = _closure1_slot44;
            var3 = var2[var5];
            var2 = var3.disconnect;
            var2 = var2.bind(var3)();
            var2 = _closure1_slot44;
            var2 = delete var2[var5];
            var2 = _closure1_slot46;
            var4 = var2[var5];
            var2 = null;
            var3 = var2 != var4;
            if(!var3) { _fun0009_ip = 71; continue _fun0009 }
 63:
            var6 = _closure1_slot23;
            var3 = var2 != var6;
 71:
            if(!var3) { _fun0009_ip = 102; continue _fun0009 }
 74:
            var4 = var4.track;
            var6 = var4.id;
            var4 = _closure1_slot23;
            var4 = var4.track;
            var4 = var4.id;
            var3 = var6 === var4;
 102:
            if(!var3) { _fun0009_ip = 109; continue _fun0009 }
 105:
            var _closure1_slot23 = var2;
 109:
            var2 = _closure1_slot46;
            var2 = delete var2[var5];
            var3 = _closure1_slot38;
            var2 = var3.info;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'Removed account: ';
            var1 = var4.bind(var1)(var5);
            var1 = var2.bind(var3)(var1);
 156:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot60 = var1;
    var1 = function setActiveDevice(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg2;
            var3 = _closure1_slot53;
            var2 = _closure1_slot45;
            var1 = arg1;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0010_ip = 75; continue _fun0010 }
 40:
            var6 = var3.value;
            var2 = var6.id;
            var2 = var2 === var5;
            var6['is_active'] = var2;
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0010_ip = 40; continue _fun0010 }
 75:
            return var1;
        }
    };
    var _closure1_slot61 = var1;
    var1 = function activitySync(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var14 = arg1;
            var8 = arg2;
            var2 = _closure1_slot55;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var4 = null;
            if(!(var4 != var2)) { _fun0011_ip = 539; continue _fun0011 }
 28:
            var6 = var2.socket;
            var5 = var2.device;
            var13 = var8.sync_id;
            var10 = var8.party;
            var2 = var8.timestamps;
            if(!(var4 != var13)) { _fun0011_ip = 535; continue _fun0011 }
 65:
            if(!(var4 != var10)) { _fun0011_ip = 535; continue _fun0011 }
 72:
            var7 = var10.id;
            if(!(var4 != var7)) { _fun0011_ip = 535; continue _fun0011 }
 84:
            var9 = _closure1_slot16;
            var7 = var10.id;
            var7 = var9.bind(var1)(var7);
            if(!var7) { _fun0011_ip = 535; continue _fun0011 }
 104:
            if(!(var4 != var2)) { _fun0011_ip = 117; continue _fun0011 }
 108:
            var7 = var2.start;
            if(!(var4 == var7)) { _fun0011_ip = 136; continue _fun0011 }
 117:
            var7 = global;
            var9 = var7.Date;
            var7 = var9.now;
            var7 = var7.bind(var9)();
            _fun0011_ip = 141; continue _fun0011;
 136:
            var7 = var2.start;
 141:
            var2 = global;
            var15 = var2.Math;
            var12 = var15.max;
            var11 = var2.Date;
            var9 = var11.now;
            var9 = var9.bind(var11)();
            var11 = var9 - var7;
            var9 = 0;
            var17 = var12.bind(var15)(var9, var11);
            var11 = _closure1_slot46;
            var9 = var6.accountId;
            var11 = var11[var9];
            var9 = var4 != var11;
            if(!var9) { _fun0011_ip = 214; continue _fun0011 }
 202:
            var12 = var11.repeat;
            var11 = false;
            var9 = var11 === var12;
 214:
            var16 = false;
            if(!var9) { _fun0011_ip = 221; continue _fun0011 }
 219:
            var16 = null;
 221:
            var9 = _closure1_slot15;
            var11 = var8.metadata;
            var12 = var4 == var11;
            var8 = undefined;
            if(var12) { _fun0011_ip = 245; continue _fun0011 }
 240:
            var8 = var11.type;
 245:
            if(!(var4 == var8)) { _fun0011_ip = 259; continue _fun0011 }
 249:
            var11 = _closure1_slot19;
            var8 = var11.TRACK;
 259:
            var15 = var9.bind(var1)(var8);
            if(!(var4 != var15)) { _fun0011_ip = 533; continue _fun0011 }
 271:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 20;
            var4 = var9[var4];
            var12 = var8.bind(var1)(var4);
            var11 = var12.play;
            var26 = var6.accountId;
            var25 = var6.accessToken;
            var4 = {};
            var17 = var17 - 0;
            var4['position'] = var17;
            var17 = var5.id;
            var4['deviceId'] = var17;
            var4['repeat'] = var16;
            var27 = var12;
            var24 = var13;
            var23 = var15;
            var22 = var4;
            var4 = var27[var11](var26, var25, var24, var23, var22, var21);
            var4 = {};
            var4['userId'] = var14;
            var8 = var10.id;
            var4['partyId'] = var8;
            var4['trackId'] = var13;
            var4['startTime'] = var7;
            var _closure1_slot24 = var4;
            var12 = 'presence change';
            var4 = arg3;
            if(!var4) { _fun0011_ip = 453; continue _fun0011 }
 391:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 22;
            var4 = var8[var4];
            var9 = var7.bind(var1)(var4);
            var8 = var9.track;
            var4 = _closure1_slot22;
            var7 = var4.SPOTIFY_LISTEN_ALONG_STARTED;
            var4 = {};
            var10 = var10.id;
            var4['party_id'] = var10;
            var4['other_user_id'] = var14;
            var4 = var8.bind(var9)(var7, var4);
            var12 = 'started';
 453:
            var4 = _closure1_slot38;
            var3 = var4.info;
            var24 = var6.accountId;
            var18 = var5.name;
            var2 = var2.HermesInternal;
            var9 = var2.concat;
            var27 = 'Listen along ';
            var25 = ': ';
            var23 = ' to ';
            var21 = ' playing ';
            var19 = ' on ';
            var26 = var12;
            var22 = var14;
            var20 = var13;
            var2 = var27[var9](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17);
            var2 = var3.bind(var4)(var2);
 533:
            return var1;
 535:
            var1 = false;
            return var1;
 539:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot62 = var1;
    var8 = function handleUserActivitySyncStop() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 22;
            var2 = var2[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var2);
            var6 = var7.track;
            var2 = _closure1_slot22;
            var5 = var2.SPOTIFY_LISTEN_ALONG_ENDED;
            var2 = {};
            var8 = _closure1_slot24;
            var4 = null;
            var9 = var4 != var8;
            var8 = null;
            if(!var9) { _fun0012_ip = 67; continue _fun0012 }
 57:
            var9 = _closure1_slot24;
            var8 = var9.partyId;
 67:
            var2['party_id'] = var8;
            var8 = _closure1_slot24;
            var9 = var4 != var8;
            var8 = null;
            if(!var9) { _fun0012_ip = 94; continue _fun0012 }
 85:
            var9 = _closure1_slot24;
            var8 = var9.userId;
 94:
            var2['other_user_id'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var2 = _closure1_slot24;
            var2 = var4 != var2;
            var6 = null;
            if(!var2) { _fun0012_ip = 128; continue _fun0012 }
 118:
            var2 = _closure1_slot24;
            var6 = var2.trackId;
 128:
            _closure1_slot24 = var4;
            var7 = _closure1_slot38;
            var5 = var7.info;
            var2 = 'Listen along stopped';
            var2 = var5.bind(var7)(var2);
            var2 = _closure1_slot55;
            var2 = var2.bind(var1)();
            if(!(var4 != var2)) { _fun0012_ip = 253; continue _fun0012 }
 165:
            var2 = var2.socket;
            var7 = _closure1_slot46;
            var5 = var2.accountId;
            var5 = var7[var5];
            var4 = var4 != var5;
            if(!var4) { _fun0012_ip = 206; continue _fun0012 }
 192:
            var5 = var5.track;
            var5 = var5.id;
            var4 = var5 === var6;
 206:
            if(!var4) { _fun0012_ip = 253; continue _fun0012 }
 209:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 20;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.pause;
            var3 = var2.accountId;
            var2 = var2.accessToken;
            var2 = var4.bind(var5)(var3, var2);
 253:
            return var1;
        }
    };
    var _closure1_slot63 = var8;
    var11 = function handleUserConnectionsUpdate() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = _closure1_slot44;
            var10 = var3.bind(var4)(var2);
            var3 = _closure1_slot10;
            var2 = var3.getAccounts;
            var4 = var2.bind(var3)();
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot20;
                var1 = var1.SPOTIFY;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var9 = null;
            if(!(var9 != var2)) { _fun0013_ip = 336; continue _fun0013 }
 65:
            var3 = var2.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var4 = var3.bind(var2)(var1);
            var1 = var10.length;
            var3 = 0;
            var1 = var3 < var1;
            var8 = undefined;
            if(!var1) { _fun0013_ip = 134; continue _fun0013 }
 96:
            var5 = var10[var3];
            var1 = var4.includes;
            var1 = var1.bind(var4)(var5);
            if(var1) { _fun0013_ip = 122; continue _fun0013 }
 113:
            var1 = _closure1_slot60;
            var1 = var1.bind(var8)(var5);
 122:
            var3 = var3 + 1;
            var1 = var10.length;
            if(var3 < var1) { _fun0013_ip = 96; continue _fun0013 }
 134:
            var1 = _closure1_slot53;
            var7 = var1.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = 20;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0013_ip = 334; continue _fun0013 }
 168:
            var2 = var4.value;
            var12 = _closure1_slot23;
            var12 = var9 != var12;
            if(!var12) { _fun0013_ip = 208; continue _fun0013 }
 184:
            var13 = _closure1_slot23;
            var13 = var13.account;
            var14 = var13.id;
            var13 = var2.id;
            var12 = var14 === var13;
 208:
            if(!var12) { _fun0013_ip = 223; continue _fun0013 }
 211:
            var12 = _closure1_slot23;
            var12['account'] = var2;
            var3 = true;
 223:
            var13 = var10.includes;
            var12 = var2.id;
            var13 = var13.bind(var10)(var12);
            var12 = var3;
            if(var13) { _fun0013_ip = 310; continue _fun0013 }
 244:
            var13 = var2.accessToken;
            if(!(var9 != var13)) { _fun0013_ip = 277; continue _fun0013 }
 254:
            var15 = _closure1_slot59;
            var14 = var2.id;
            var13 = var2.accessToken;
            var13 = var15.bind(var8)(var14, var13);
            _fun0013_ip = 310; continue _fun0013;
 277:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var6];
            var14 = var14.bind(var8)(var13);
            var13 = var14.getAccessToken;
            var2 = var2.id;
            var2 = var13.bind(var14)(var2);
 310:
            var13 = var7.bind(var8)();
            var2 = var13.done;
            var4 = var13;
            var3 = var12;
            var1 = var3;
            if(!var2) { _fun0013_ip = 168; continue _fun0013 }
 334:
            return var1;
 336:
            var1 = false;
            return var1;
        }
    };
    var1 = function autoPause() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = _closure1_slot23;
            var3 = null;
            if(!(var3 != var2)) { _fun0014_ip = 143; continue _fun0014 }
 16:
            var2 = _closure1_slot55;
            var4 = undefined;
            var2 = var2.bind(var4)();
            if(!(var3 != var2)) { _fun0014_ip = 143; continue _fun0014 }
 30:
            var2 = var2.socket;
            var3 = true;
            _closure1_slot47 = var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 20;
            var3 = var5[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.pause;
            var3 = var2.accountId;
            var2 = var2.accessToken;
            var2 = var6.bind(var7)(var3, var2);
            var3 = _closure1_slot1;
            var2 = 22;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.track;
            var2 = _closure1_slot22;
            var2 = var2.SPOTIFY_AUTO_PAUSED;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot38;
            var2 = var3.info;
            var1 = 'Playback auto paused';
            var1 = var2.bind(var3)(var1);
 143:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot64 = var1;
    var1 = function setSpeaking(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot9;
            var2 = var3.getId;
            var2 = var2.bind(var3)();
            if(!(var6 === var2)) { _fun0015_ip = 178; continue _fun0015 }
 27:
            var3 = _closure1_slot14;
            var2 = var3.isCurrentClientInVoiceChannel;
            var3 = var2.bind(var3)();
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 25;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.getIsSpeaking;
            var2 = {'userId': null, 'checkSoundSharing': true, 'checkSoundboardSounds': false};
            var2['userId'] = var6;
            var6 = false;
            var2 = var4.bind(var5)(var2);
            if(!var3) { _fun0015_ip = 112; continue _fun0015 }
 99:
            if(!var2) { _fun0015_ip = 112; continue _fun0015 }
 102:
            var3 = _closure1_slot23;
            var2 = null;
            if(!(var2 == var3)) { _fun0015_ip = 140; continue _fun0015 }
 112:
            var5 = _closure1_slot40;
            var4 = var5.start;
            var3 = 100;
            var2 = function() {
                var2 = _closure1_slot39;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2, var6);
            _fun0015_ip = 178; continue _fun0015;
 140:
            var5 = _closure1_slot39;
            var4 = var5.start;
            var3 = _closure1_slot28;
            var2 = _closure1_slot64;
            var2 = var4.bind(var5)(var3, var2, var6);
            var2 = _closure1_slot40;
            var1 = var2.stop;
            var1 = var1.bind(var2)();
 178:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot65 = var1;
    var1 = function updatePlayerState(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var9 = arg1;
            var2 = arg3;
            var _closure2_slot0 = var9;
            var3 = var2.device;
            var _closure2_slot1 = var3;
            var4 = var2.progress_ms;
            var _closure2_slot2 = var4;
            var4 = var2.is_playing;
            var _closure2_slot3 = var4;
            var4 = var2.repeat_state;
            var _closure2_slot4 = var4;
            var4 = var2.item;
            var7 = var2.context;
            var6 = undefined;
            var _closure2_slot5 = var6;
            var8 = null;
            if(!(var8 != var4)) { _fun0016_ip = 105; continue _fun0016 }
 80:
            var5 = var4.type;
            var2 = _closure1_slot19;
            var2 = var2.TRACK;
            if(!(var5 !== var2)) { _fun0016_ip = 358; continue _fun0016 }
 105:
            if(!(var8 != var4)) { _fun0016_ip = 677; continue _fun0016 }
 112:
            var5 = var4.type;
            var2 = _closure1_slot19;
            var2 = var2.EPISODE;
            if(!(var5 === var2)) { _fun0016_ip = 677; continue _fun0016 }
 137:
            var5 = var4.id;
            var2 = {};
            var2['id'] = var5;
            var5 = var4.name;
            var2['name'] = var5;
            var5 = var4.duration_ms;
            var2['duration'] = var5;
            var5 = _closure1_slot19;
            var5 = var5.EPISODE;
            var2['type'] = var5;
            var5 = {};
            var10 = var4.show;
            var13 = var8 == var10;
            var14 = undefined;
            if(var13) { _fun0016_ip = 203; continue _fun0016 }
 198:
            var14 = var10.id;
 203:
            var15 = var8 != var14;
            var10 = '';
            var13 = var10;
            if(!var15) { _fun0016_ip = 220; continue _fun0016 }
 217:
            var13 = var14;
 220:
            var5['id'] = var13;
            var14 = var4.show;
            var15 = var8 == var14;
            var13 = undefined;
            if(var15) { _fun0016_ip = 244; continue _fun0016 }
 239:
            var13 = var14.name;
 244:
            var14 = var8 != var13;
            if(!var14) { _fun0016_ip = 254; continue _fun0016 }
 251:
            var10 = var13;
 254:
            var5['name'] = var10;
            var13 = var4.show;
            var14 = var8 == var13;
            var10 = undefined;
            if(var14) { _fun0016_ip = 285; continue _fun0016 }
 273:
            var14 = var13.images;
            var13 = 0;
            var10 = var14[var13];
 285:
            var5['image'] = var10;
            var13 = var4.album;
            var14 = var8 == var13;
            var10 = undefined;
            if(var14) { _fun0016_ip = 310; continue _fun0016 }
 305:
            var10 = var13.type;
 310:
            if(!(var8 == var10)) { _fun0016_ip = 324; continue _fun0016 }
 314:
            var12 = _closure1_slot19;
            var10 = var12.SHOW;
 324:
            var5['type'] = var10;
            var2['album'] = var5;
            var5 = new Array(0);
            var2['artists'] = var5;
            var5 = false;
            var2['isLocal'] = var5;
            _closure2_slot5 = var2;
            _fun0016_ip = 677; continue _fun0016;
 358:
            var5 = var4.id;
            var2 = var4.linked_from;
            var2 = var8 != var2;
            if(!var2) { _fun0016_ip = 391; continue _fun0016 }
 376:
            var10 = var4.linked_from;
            var10 = var10.id;
            var2 = var8 != var10;
 391:
            if(!var2) { _fun0016_ip = 405; continue _fun0016 }
 394:
            var2 = var4.linked_from;
            var5 = var2.id;
 405:
            var2 = {};
            var2['id'] = var5;
            var5 = var4.name;
            var2['name'] = var5;
            var5 = var4.duration_ms;
            var2['duration'] = var5;
            var5 = _closure1_slot19;
            var5 = var5.TRACK;
            var2['type'] = var5;
            var5 = {};
            var10 = var4.album;
            var12 = var8 == var10;
            var13 = undefined;
            if(var12) { _fun0016_ip = 466; continue _fun0016 }
 461:
            var13 = var10.id;
 466:
            var14 = var8 != var13;
            var10 = '';
            var12 = var10;
            if(!var14) { _fun0016_ip = 483; continue _fun0016 }
 480:
            var12 = var13;
 483:
            var5['id'] = var12;
            var13 = var4.album;
            var14 = var8 == var13;
            var12 = undefined;
            if(var14) { _fun0016_ip = 507; continue _fun0016 }
 502:
            var12 = var13.name;
 507:
            var13 = var8 != var12;
            if(!var13) { _fun0016_ip = 517; continue _fun0016 }
 514:
            var10 = var12;
 517:
            var5['name'] = var10;
            var12 = var4.album;
            var13 = var8 == var12;
            var10 = undefined;
            if(var13) { _fun0016_ip = 548; continue _fun0016 }
 536:
            var13 = var12.images;
            var12 = 0;
            var10 = var13[var12];
 548:
            var5['image'] = var10;
            var12 = var4.album;
            var13 = var8 == var12;
            var10 = undefined;
            if(var13) { _fun0016_ip = 573; continue _fun0016 }
 568:
            var10 = var12.type;
 573:
            if(!(var8 == var10)) { _fun0016_ip = 587; continue _fun0016 }
 577:
            var11 = _closure1_slot19;
            var10 = var11.ALBUM;
 587:
            var5['type'] = var10;
            var2['album'] = var5;
            var5 = global;
            var11 = var5.Array;
            var10 = var11.isArray;
            var5 = var4.artists;
            var5 = var10.bind(var11)(var5);
            if(var5) { _fun0016_ip = 629; continue _fun0016 }
 623:
            var5 = new Array(0);
            _fun0016_ip = 650; continue _fun0016;
 629:
            var12 = var4.artists;
            var11 = var12.filter;
            var10 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 26;
                    var1 = var1[var6];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var1);
                    var4 = var7.isNotNullish;
                    var1 = var2.id;
                    var1 = var4.bind(var7)(var1);
                    if(!var1) { _fun0017_ip = 80; continue _fun0017 }
 47:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.isNotNullish;
                    var2 = var2.name;
                    var1 = var3.bind(var4)(var2);
 80:
                    return var1;
                }
            };
            var5 = var11.bind(var12)(var10);
 650:
            var2['artists'] = var5;
            var4 = var4.is_local;
            if(var4) { _fun0016_ip = 668; continue _fun0016 }
 666:
            var4 = false;
 668:
            var2['isLocal'] = var4;
            _closure2_slot5 = var2;
 677:
            var2 = var8 != var3;
            if(!var2) { _fun0016_ip = 696; continue _fun0016 }
 684:
            var5 = var3.is_active;
            var4 = true;
            var2 = var4 !== var5;
 696:
            if(!var2) { _fun0016_ip = 726; continue _fun0016 }
 699:
            var2 = {};
            var18 = var2;
            var17 = var3;
            var3 = copyDataProperties(var18, var17);
            var4 = true;
            var3 = 'is_active';
            var2[var3] = var4;
            _closure2_slot1 = var2;
 726:
            if(!(var8 != var7)) { _fun0016_ip = 783; continue _fun0016 }
 730:
            var3 = _closure1_slot19;
            var3 = var3.PLAYLIST;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = _closure1_slot19;
            var3 = var3.ALBUM;
            var5[1] = var3;
            var4 = var5.includes;
            var3 = var7.type;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0016_ip = 807; continue _fun0016 }
 783:
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.resolve;
            var3 = var3.bind(var4)(var6);
            _fun0016_ip = 1012; continue _fun0016;
 807:
            var5 = _closure1_slot51;
            var4 = var5.getPlayerState;
            var4 = var4.bind(var5)(var9);
            if(!(var8 != var4)) { _fun0016_ip = 859; continue _fun0016 }
 828:
            var5 = var4.context;
            if(!(var8 != var5)) { _fun0016_ip = 859; continue _fun0016 }
 837:
            var5 = var4.context;
            var8 = var5.uri;
            var5 = var7.uri;
            if(!(var8 !== var5)) { _fun0016_ip = 985; continue _fun0016 }
 859:
            var8 = var7.type;
            var5 = _closure1_slot19;
            var5 = var5.ALBUM;
            if(!(var8 !== var5)) { _fun0016_ip = 964; continue _fun0016 }
 878:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 20;
            var2 = var8[var2];
            var2 = var5.bind(var6)(var2);
            var8 = var2.SpotifyAPI;
            var6 = var8.get;
            var5 = {};
            var2 = var7.href;
            var5['url'] = var2;
            var2 = arg2;
            var6 = var6.bind(var8)(var9, var2, var5);
            var5 = var6.then;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                return var1;
            };
            var6 = var5.bind(var6)(var2);
            var5 = var6.catch;
            var2 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0018_ip = 21; continue _fun0018 }
 6:
                    var3 = var1.status;
                    var2 = 404;
                    if(!(var2 !== var3)) { _fun0018_ip = 23; continue _fun0018 }
 21:
                    throw var1;
 23:
                    var1 = null;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2);
            _fun0016_ip = 983; continue _fun0016;
 964:
            var5 = global;
            var6 = var5.Promise;
            var5 = var6.resolve;
            var2 = var5.bind(var6)(var7);
 983:
            _fun0016_ip = 1009; continue _fun0016;
 985:
            var5 = global;
            var6 = var5.Promise;
            var5 = var6.resolve;
            var4 = var4.context;
            var2 = var5.bind(var6)(var4);
 1009:
            var3 = var2;
 1012:
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var6 = arg1;
                    var8 = null;
                    var1 = var8 == var6;
                    if(var1) { _fun0019_ip = 34; continue _fun0019 }
 12:
                    var3 = var6.type;
                    var2 = _closure1_slot19;
                    var2 = var2.PLAYLIST;
                    var1 = var3 !== var2;
 34:
                    if(var1) { _fun0019_ip = 45; continue _fun0019 }
 37:
                    var1 = var6.public;
 45:
                    if(var1) { _fun0019_ip = 50; continue _fun0019 }
 48:
                    var6 = null;
 50:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'SPOTIFY_PLAYER_STATE';
                    var2['type'] = var5;
                    var7 = _closure2_slot0;
                    var2['accountId'] = var7;
                    var7 = _closure2_slot5;
                    var2['track'] = var7;
                    var7 = _closure2_slot1;
                    var8 = var8 != var7;
                    var7 = 0;
                    if(!var8) { _fun0019_ip = 135; continue _fun0019 }
 123:
                    var8 = _closure2_slot1;
                    var7 = var8.volume_percent;
 135:
                    var2['volumePercent'] = var7;
                    var7 = _closure2_slot3;
                    var2['isPlaying'] = var7;
                    var8 = _closure2_slot4;
                    var7 = 'off';
                    var7 = var7 !== var8;
                    var2['repeat'] = var7;
                    var7 = _closure2_slot2;
                    var2['position'] = var7;
                    var2['context'] = var6;
                    var5 = _closure2_slot1;
                    var2['device'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot66 = var1;
    var1 = function getPlayerState(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.SpotifyAPI;
        var3 = var4.get;
        var2 = {};
        var7 = _closure1_slot18;
        var7 = var7.PLAYER;
        var2['url'] = var7;
        var7 = {};
        var9 = _closure1_slot19;
        var12 = var9.TRACK;
        var8 = _closure1_slot19;
        var11 = var8.EPISODE;
        var8 = global;
        var8 = var8.HermesInternal;
        var10 = var8.concat;
        var9 = '';
        var8 = ',';
        var8 = var10.bind(var9)(var12, var8, var11);
        var7['additional_types'] = var8;
        var2['query'] = var7;
        var7 = true;
        var2['onlyRetryOnAuthorizationErrors'] = var7;
        var4 = var3.bind(var4)(var6, var5, var2);
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var6 = var2.body;
                var2 = null;
                if(!(var2 == var6)) { _fun0020_ip = 43; continue _fun0020 }
 20:
                var4 = _closure1_slot57;
                var3 = _closure2_slot0;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _fun0020_ip = 85; continue _fun0020;
 43:
                var5 = _closure1_slot66;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = undefined;
                var3 = var5.bind(var2)(var4, var3, var6);
                var2 = var3.then;
                var1 = function() {
                    var1 = _closure3_slot0;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 85:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function() {
            var3 = _closure1_slot57;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot67 = var1;
    var4 = global;
    var12 = var4.Object;
    var10 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var13 = 1;
    var2 = var7[var13];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var10 = 3;
    var2 = var7[var10];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var14 = 5;
    var2 = var7[var14];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var12 = var2.getSpotifyResourceType;
    var _closure1_slot15 = var12;
    var12 = var2.isSpotifyParty;
    var _closure1_slot16 = var12;
    var12 = var2.SPOTIFY_PARTY_PREFIX;
    var _closure1_slot17 = var12;
    var12 = var2.SpotifyEndpoints;
    var _closure1_slot18 = var12;
    var2 = var2.SpotifyResourceTypes;
    var _closure1_slot19 = var2;
    var2 = 13;
    var2 = var7[var2];
    var12 = var6.bind(var1)(var2);
    var2 = var12.PlatformTypes;
    var _closure1_slot20 = var2;
    var15 = var12.ActivityFlags;
    var _closure1_slot21 = var15;
    var12 = var12.AnalyticEvents;
    var _closure1_slot22 = var12;
    var12 = 14;
    var12 = var7[var12];
    var15 = var9.bind(var1)(var12);
    var12 = var15.get;
    var2 = var2.SPOTIFY;
    var2 = var12.bind(var15)(var2);
    var _closure1_slot26 = var2;
    var2 = 15;
    var12 = var7[var2];
    var12 = var9.bind(var1)(var12);
    var12 = var12.Millis;
    var12 = var12.SECOND;
    var15 = 30;
    var12 = var15 * var12;
    var _closure1_slot27 = var12;
    var12 = var7[var2];
    var12 = var9.bind(var1)(var12);
    var12 = var12.Millis;
    var12 = var12.SECOND;
    var12 = var15 * var12;
    var _closure1_slot28 = var12;
    var12 = var7[var2];
    var12 = var9.bind(var1)(var12);
    var12 = var12.Millis;
    var12 = var12.MINUTE;
    var12 = var14 * var12;
    var _closure1_slot29 = var12;
    var12 = var7[var2];
    var12 = var9.bind(var1)(var12);
    var12 = var12.Millis;
    var12 = var12.SECOND;
    var12 = var14 * var12;
    var _closure1_slot30 = var12;
    var12 = var7[var2];
    var12 = var9.bind(var1)(var12);
    var12 = var12.Millis;
    var14 = var12.SECOND;
    var12 = 1.5;
    var12 = var12 * var14;
    var _closure1_slot31 = var12;
    var12 = var7[var2];
    var12 = var9.bind(var1)(var12);
    var12 = var12.Millis;
    var12 = var12.MINUTE;
    var12 = var13 * var12;
    var _closure1_slot32 = var12;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.SECOND;
    var2 = var10 * var2;
    var _closure1_slot33 = var2;
    var2 = {};
    var10 = 'PLAYER_STATE_CHANGED';
    var2['PLAYER_STATE_CHANGED'] = var10;
    var10 = 'DEVICE_STATE_CHANGED';
    var2['DEVICE_STATE_CHANGED'] = var10;
    var _closure1_slot34 = var2;
    var2 = 'message';
    var _closure1_slot35 = var2;
    var2 = 'ping';
    var _closure1_slot36 = var2;
    var2 = 'single';
    var _closure1_slot37 = var2;
    var2 = 16;
    var2 = var7[var2];
    var12 = var9.bind(var1)(var2);
    var2 = var12.prototype;
    var10 = Object.create(var2, {constructor: {value: var12}});
    var18 = 'Spotify';
    var19 = var10;
    var2 = new var19[var12](var18, var17);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot38 = var2;
    var2 = 17;
    var10 = var7[var2];
    var10 = var6.bind(var1)(var10);
    var10 = var10.Timeout;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var19 = var12;
    var10 = new var19[var10](var18);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot39 = var10;
    var10 = var7[var2];
    var10 = var6.bind(var1)(var10);
    var10 = var10.Timeout;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var19 = var12;
    var10 = new var19[var10](var18);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot40 = var10;
    var10 = var7[var2];
    var10 = var6.bind(var1)(var10);
    var10 = var10.Timeout;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var19 = var12;
    var10 = new var19[var10](var18);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot41 = var10;
    var10 = var7[var2];
    var10 = var6.bind(var1)(var10);
    var10 = var10.Timeout;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var19 = var12;
    var10 = new var19[var10](var18);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot42 = var10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Timeout;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var19 = var10;
    var2 = new var19[var2](var18);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot43 = var2;
    var2 = {};
    var _closure1_slot44 = var2;
    var2 = {};
    var _closure1_slot45 = var2;
    var2 = {};
    var _closure1_slot46 = var2;
    var2 = false;
    var _closure1_slot47 = var2;
    var2 = null;
    var _closure1_slot48 = var2;
    var10 = var4.Set;
    var2 = var4.WebSocket;
    var12 = var2.CONNECTING;
    var2 = new Array(2);
    var2[0] = var12;
    var4 = var4.WebSocket;
    var4 = var4.OPEN;
    var2[1] = var4;
    var4 = var10.prototype;
    var4 = Object.create(var4, {constructor: {value: var10}});
    var19 = var4;
    var18 = var2;
    var2 = new var19[var10](var18, var17);
    var2 = var2 instanceof Object ? var2 : var4;
    var _closure1_slot49 = var2;
    var2 = function() {
        var4 = _closure1_slot7;
        var3 = function SpotifySocket(arg1, arg2) {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot6;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = false;
            var3['_requestedDisconnect'] = var5;
            var3['_requestedConnect'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var7 = 19;
            var7 = var6[var7];
            var9 = var5.bind(var1)(var7);
            var8 = var9.throttle;
            var7 = _closure1_slot33;
            var4 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.getDevices;
                var2 = _closure3_slot0;
                var5 = var2.accountId;
                var4 = var2.accessToken;
                var4 = var6.bind(var7)(var5, var4);
                var4 = _closure1_slot67;
                var3 = var2.accountId;
                var2 = var2.accessToken;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var4 = var8.bind(var9)(var4, var7);
            var3['handleDeviceStateChange'] = var4;
            var4 = arg1;
            var3['accountId'] = var4;
            var4 = arg2;
            var3['accessToken'] = var4;
            var7 = _closure1_slot0;
            var4 = 17;
            var4 = var6[var4];
            var4 = var7.bind(var1)(var4);
            var4 = var4.Interval;
            var7 = var4.prototype;
            var7 = Object.create(var7, {constructor: {value: var4}});
            var12 = var7;
            var4 = new var12[var4](var11);
            var4 = var4 instanceof Object ? var4 : var7;
            var3['pingInterval'] = var4;
            var4 = 21;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var10 = _closure1_slot32;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var12 = var4;
            var11 = undefined;
            var2 = new var12[var5](var11, var10, var9);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['backoff'] = var2;
            var2 = var3.connect;
            var2 = var2.bind(var3)();
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'connected';
        var1['key'] = var2;
        var2 = function get() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var2 = this;
                var3 = var2.socket;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0021_ip = 47; continue _fun0021 }
 18:
                var4 = _closure1_slot49;
                var3 = var4.has;
                var2 = var2.socket;
                var2 = var2.readyState;
                var1 = var3.bind(var4)(var2);
 47:
                return var1;
            }
        };
        var1['get'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'connect';
        var1['key'] = var6;
        var6 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.connected;
                if(var3) { _fun0022_ip = 24; continue _fun0022 }
 18:
                var3 = var2._requestedConnect;
 24:
                if(var3) { _fun0022_ip = 122; continue _fun0022 }
 27:
                var6 = _closure1_slot38;
                var5 = var6.info;
                var4 = 'WS Connecting';
                var4 = var5.bind(var6)(var4);
                var4 = false;
                var2['_requestedDisconnect'] = var4;
                var4 = true;
                var2['_requestedConnect'] = var4;
                var5 = _closure1_slot67;
                var4 = var2.accountId;
                var3 = var2.accessToken;
                var2 = undefined;
                var4 = var5.bind(var2)(var4, var3);
                var3 = var4.then;
                var2 = function() {
                    var5 = _closure3_slot0;
                    var1 = false;
                    var5['_requestedConnect'] = var1;
                    var1 = global;
                    var3 = var1.WebSocket;
                    var4 = var5.accessToken;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'wss://dealer.spotify.com/?access_token=';
                    var6 = var2.bind(var1)(var4);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var7 = var2;
                    var1 = new var7[var3](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var5['socket'] = var1;
                    var2 = var5.socket;
                    var3 = var5.handleOpen;
                    var1 = var3.bind;
                    var1 = var1.bind(var3)(var5);
                    var2['onopen'] = var1;
                    var2 = var5.socket;
                    var3 = var5.handleMessage;
                    var1 = var3.bind;
                    var1 = var1.bind(var3)(var5);
                    var2['onmessage'] = var1;
                    var2 = var5.socket;
                    var3 = var5.socket;
                    var4 = var5.handleClose;
                    var1 = var4.bind;
                    var1 = var1.bind(var4)(var5);
                    var3['onerror'] = var1;
                    var2['onclose'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function(arg1) {
                    var3 = _closure1_slot38;
                    var2 = var3.error;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure3_slot0;
                    var1 = false;
                    var2['_requestedConnect'] = var1;
                    var1 = var2.handleClose;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 122:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'disconnect';
        var1['key'] = var6;
        var6 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var3 = this;
                var1 = undefined;
                var2 = undefined;
                var4 = true;
                var3['_requestedDisconnect'] = var4;
                var5 = var3.backoff;
                var4 = var5.cancel;
                var4 = var4.bind(var5)();
 31: // try_start_0
                var4 = var3.socket;
                var2 = var4;
                var3 = null;
                if(!(var3 != var4)) { _fun0023_ip = 59; continue _fun0023 }
 46:
                var3 = var2;
                var2 = var3.close;
                var2 = var2.bind(var3)();
 59: // try_end0
                _fun0023_ip = 63; continue _fun0023;
 61: // catch_target0
                CatchBlockStart(arg_register=1);
 63:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'ping';
        var1['key'] = var6;
        var6 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var1 = this;
                var2 = var1.connected;
                if(!var2) { _fun0024_ip = 67; continue _fun0024 }
 12:
                var3 = var1.socket;
                var1 = null;
                if(!(var1 != var3)) { _fun0024_ip = 67; continue _fun0024 }
 24:
                var2 = var3.send;
                var1 = global;
                var5 = var1.JSON;
                var4 = var5.stringify;
                var1 = {};
                var6 = _closure1_slot36;
                var1['type'] = var6;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
 67:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'handleOpen';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var6 = _closure1_slot38;
            var5 = var6.info;
            var4 = 'WS Connected';
            var4 = var5.bind(var6)(var4);
            var5 = var2.backoff;
            var4 = var5.succeed;
            var4 = var4.bind(var5)();
            var6 = var2.pingInterval;
            var5 = var6.start;
            var4 = _closure1_slot27;
            var3 = function() {
                var2 = _closure3_slot0;
                var1 = var2.ping;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var6)(var4, var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 20;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.getProfile;
            var7 = var2.accountId;
            var6 = var2.accessToken;
            var6 = var8.bind(var9)(var7, var6);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.getDevices;
            var3 = var2.accountId;
            var2 = var2.accessToken;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'handleMessage';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var1 = this;
                var2 = arg1;
                var6 = var2.data;
                var5 = 'string';
                var2 = typeof var6;
                if(!(var5 === var2)) { _fun0025_ip = 349; continue _fun0025 }
 25:
                var3 = global;
                var4 = var3.JSON;
                var2 = var4.parse;
                var2 = var2.bind(var4)(var6);
                var8 = var2.type;
                var6 = var2.uri;
                var7 = var2.payloads;
                var4 = _closure1_slot35;
                if(!(var8 === var4)) { _fun0025_ip = 349; continue _fun0025 }
 76:
                var4 = typeof var6;
                if(!(var5 === var4)) { _fun0025_ip = 106; continue _fun0025 }
 83:
                var5 = var6.startsWith;
                var4 = 'hm://pusher/v1/connections/';
                var5 = var5.bind(var6)(var4);
                if(var5) { _fun0025_ip = 262; continue _fun0025 }
 106:
                var8 = var3.Array;
                var5 = var8.isArray;
                var5 = var5.bind(var8)(var7);
                if(!var5) { _fun0025_ip = 349; continue _fun0025 }
 128:
                var5 = _closure1_slot53;
                var12 = undefined;
                var11 = var5.bind(var12)(var7);
                var7 = var11.bind(var12)();
                var5 = var7.done;
                var10 = null;
                var9 = var7;
                var8 = undefined;
                var7 = undefined;
                if(var5) { _fun0025_ip = 349; continue _fun0025 }
 163:
                var5 = var9.value;
                var13 = var5.events;
                if(!(var10 != var13)) { _fun0025_ip = 245; continue _fun0025 }
 178:
                var5 = _closure1_slot53;
                var14 = var5.bind(var12)(var13);
                var15 = var14.bind(var12)();
                var5 = var15.done;
                var13 = var15;
                var8 = var13;
                var7 = var14;
                if(var5) { _fun0025_ip = 245; continue _fun0025 }
 208:
                var15 = var13.value;
                var5 = var1.handleEvent;
                var5 = var5.bind(var1)(var15);
                var15 = var14.bind(var12)();
                var5 = var15.done;
                var13 = var15;
                var8 = var13;
                var7 = var14;
                if(!var5) { _fun0025_ip = 208; continue _fun0025 }
 245:
                var13 = var11.bind(var12)();
                var5 = var13.done;
                var9 = var13;
                if(var5) { _fun0025_ip = 349; continue _fun0025 }
 260:
                _fun0025_ip = 163; continue _fun0025;
 262:
                var5 = var3.decodeURIComponent;
                var3 = var6.split;
                var4 = var3.bind(var6)(var4);
                var3 = 1;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var1['connectionId'] = var3;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 20;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var4 = var5.subscribePlayerStateNotifications;
                var3 = var1.accountId;
                var2 = var1.accessToken;
                var1 = var1.connectionId;
                var1 = var4.bind(var5)(var3, var2, var1);
 349:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'handleClose';
        var1['key'] = var6;
        var6 = function value() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2.pingInterval;
                var3 = var4.stop;
                var3 = var3.bind(var4)();
                var3 = var2._requestedDisconnect;
                if(var3) { _fun0026_ip = 123; continue _fun0026 }
 34: // try_start_0
                var3 = var2.backoff;
                var2 = var3.fail;
                var1 = function() {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2._requestedDisconnect;
                        if(var2) { _fun0027_ip = 30; continue _fun0027 }
 16:
                        var2 = _closure3_slot0;
                        var1 = var2.connect;
                        var1 = var1.bind(var2)();
 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var2.bind(var3)(var1);
                var3 = _closure1_slot38;
                var2 = var3.info;
                var1 = global;
                var5 = var1.Math;
                var4 = var5.round;
                var6 = var4.bind(var5)(var6);
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'WS Disconnected. Next retry in ';
                var1 = 'ms';
                var1 = var5.bind(var4)(var6, var1);
                var1 = var2.bind(var3)(var1);
 119: // try_end0
                _fun0026_ip = 123; continue _fun0026;
 121: // catch_target0
                CatchBlockStart(arg_register=0);
 123:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'handleEvent';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var5 = var1.type;
                var1 = var1.event;
                var4 = _closure1_slot34;
                var4 = var4.PLAYER_STATE_CHANGED;
                if(!(var4 !== var5)) { _fun0028_ip = 60; continue _fun0028 }
 34:
                var4 = _closure1_slot34;
                var4 = var4.DEVICE_STATE_CHANGED;
                if(!(var4 === var5)) { _fun0028_ip = 111; continue _fun0028 }
 48:
                var4 = var2.handleDeviceStateChange;
                var4 = var4.bind(var2)();
                _fun0028_ip = 111; continue _fun0028;
 60:
                var6 = null;
                var4 = var6 != var1;
                if(!var4) { _fun0028_ip = 78; continue _fun0028 }
 69:
                var5 = var1.state;
                var4 = var6 != var5;
 78:
                if(!var4) { _fun0028_ip = 111; continue _fun0028 }
 81:
                var5 = _closure1_slot66;
                var4 = var2.accountId;
                var3 = var2.accessToken;
                var2 = var1.state;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
 111:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot50 = var2;
    var4 = 28;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var10 = var4.Store;
    var4 = function(arg1) {
        var4 = function SpotifyStore() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot52;
                var1 = var1.bind(var3)();
                if(var1) { _fun0029_ip = 69; continue _fun0029 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0029_ip = 105; continue _fun0029;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot10;
            var2 = _closure1_slot13;
            var2 = var4.bind(var5)(var3, var2);
            var4 = var5.syncWith;
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = function handlePresenceUpdate() {
                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                        var4 = _closure1_slot24;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0030_ip = 244; continue _fun0030 }
 18:
                        var4 = _closure1_slot55;
                        var8 = undefined;
                        var4 = var4.bind(var8)();
                        if(!(var3 != var4)) { _fun0030_ip = 240; continue _fun0030 }
 35:
                        var4 = _closure1_slot24;
                        var7 = var4.userId;
                        var _closure5_slot0 = var7;
                        var4 = _closure1_slot58;
                        var6 = var4.bind(var8)(var7);
                        if(!(var3 != var6)) { _fun0030_ip = 212; continue _fun0030 }
 64:
                        var5 = _closure1_slot41;
                        var4 = var5.stop;
                        var4 = var4.bind(var5)();
                        var11 = var6.sync_id;
                        var10 = var6.timestamps;
                        var4 = var6.party;
                        var9 = var3 != var11;
                        if(!var9) { _fun0030_ip = 117; continue _fun0030 }
 103:
                        var5 = _closure1_slot24;
                        var5 = var5.trackId;
                        var9 = var5 !== var11;
 117:
                        var5 = var3 != var10;
                        if(!var5) { _fun0030_ip = 143; continue _fun0030 }
 124:
                        var11 = _closure1_slot24;
                        var11 = var11.startTime;
                        var10 = var10.start;
                        var5 = var11 !== var10;
 143:
                        if(var9) { _fun0030_ip = 197; continue _fun0030 }
 146:
                        if(var5) { _fun0030_ip = 197; continue _fun0030 }
 149:
                        var3 = var3 != var4;
                        if(!var3) { _fun0030_ip = 175; continue _fun0030 }
 156:
                        var9 = var4.id;
                        var5 = _closure1_slot24;
                        var5 = var5.partyId;
                        var3 = var9 !== var5;
 175:
                        if(!var3) { _fun0030_ip = 195; continue _fun0030 }
 178:
                        var5 = _closure1_slot24;
                        var4 = var4.id;
                        var5['partyId'] = var4;
                        var3 = true;
 195:
                        _fun0030_ip = 210; continue _fun0030;
 197:
                        var5 = _closure1_slot62;
                        var4 = false;
                        var3 = var5.bind(var8)(var7, var6, var4);
 210:
                        return var3;
 212:
                        var4 = _closure1_slot41;
                        var3 = var4.start;
                        var2 = _closure1_slot29;
                        var1 = function() {
                            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                                var3 = _closure1_slot24;
                                var2 = null;
                                var2 = var2 != var3;
                                if(!var2) { _fun0031_ip = 36; continue _fun0031 }
 16:
                                var3 = _closure1_slot24;
                                var4 = var3.userId;
                                var3 = _closure5_slot0;
                                var2 = var4 === var3;
 36:
                                if(!var2) { _fun0031_ip = 65; continue _fun0031 }
 39:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 24;
                                var1 = var2[var1];
                                var2 = undefined;
                                var1 = var3.bind(var2)(var1);
                                var1 = var1.bind(var2)();
 65:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = false;
                        return var1;
 240:
                        var1 = false;
                        return var1;
 244:
                        var1 = false;
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchIsSpotifyProtocolRegistered;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasConnectedAccount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot44;
            var1 = var2.bind(var3)(var1);
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getActiveSocketAndDevice';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot55;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getPlayableComputerDevices';
        var5['key'] = var7;
        var7 = function value() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var1 = new Array(0);
                var8 = _closure1_slot44;
                var2 = null;
                var3 = undefined;
                for(var4 in var8)
 25:
                {
 34:
                    var12 = var4;
                    var11 = _closure1_slot44;
                    var14 = var11[var12];
                    var11 = var14.connected;
                    if(!var11) { _fun0032_ip = 25; continue _fun0032 }
 54:
                    var11 = _closure1_slot45;
                    var11 = var11[var12];
                    if(var2 == var11) { _fun0032_ip = 25; continue _fun0032 }
 66:
                    var11 = _closure1_slot45;
                    var13 = var11[var12];
                    var12 = var13.find;
                    var11 = function(arg1) {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                            var2 = arg1;
                            var1 = var2.is_restricted;
                            var1 = !var1;
                            if(!var1) { _fun0033_ip = 32; continue _fun0033 }
 17:
                            var3 = var2.type;
                            var2 = 'Computer';
                            var1 = var2 === var3;
 32:
                            return var1;
                        }
                    };
                    var11 = var12.bind(var13)(var11);
                    var3 = var11;
                    if(var2 == var3) { _fun0032_ip = 25; continue _fun0032 }
 97:
                    var13 = var1.push;
                    var12 = {};
                    var12['socket'] = var14;
                    var12['device'] = var11;
                    var12 = var13.bind(var1)(var12);
                    var3 = var11;
                    _fun0032_ip = 25; continue _fun0032;
                }
 124:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'canPlay';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                var1 = arg1;
                var5 = var1.sync_id;
                var2 = var1.party;
                var1 = _closure1_slot55;
                var4 = undefined;
                var1 = var1.bind(var4)();
                var6 = null;
                var1 = var6 != var1;
                if(!var1) { _fun0034_ip = 41; continue _fun0034 }
 37:
                var1 = var6 != var5;
 41:
                if(!var1) { _fun0034_ip = 48; continue _fun0034 }
 44:
                var1 = var6 != var2;
 48:
                if(!var1) { _fun0034_ip = 60; continue _fun0034 }
 51:
                var5 = var2.id;
                var1 = var6 != var5;
 60:
                if(!var1) { _fun0034_ip = 77; continue _fun0034 }
 63:
                var3 = _closure1_slot16;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
 77:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getSyncingWith';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'wasAutoPaused';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot47;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getLastPlayedTrackId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getTrack';
        var5['key'] = var7;
        var7 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var3 = _closure1_slot23;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0035_ip = 25; continue _fun0035 }
 16:
                var2 = _closure1_slot23;
                var1 = var2.track;
 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getPlayerState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot46;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'shouldShowActivity';
        var5['key'] = var7;
        var7 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var3 = _closure1_slot23;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0036_ip = 32; continue _fun0036 }
 16:
                var3 = _closure1_slot23;
                var3 = var3.account;
                var1 = var3.showActivity;
 32:
                if(!var1) { _fun0036_ip = 52; continue _fun0036 }
 35:
                var3 = _closure1_slot11;
                var2 = var3.isIdle;
                var2 = var2.bind(var3)();
                var1 = !var2;
 52:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getActivity';
        var5['key'] = var7;
        var6 = function value() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var3 = _closure1_slot23;
                var1 = null;
                if(!(var1 != var3)) { _fun0037_ip = 540; continue _fun0037 }
 18:
                var4 = _closure1_slot23;
                var3 = var4.track;
                var7 = var3.artists;
                var14 = var3.album;
                var19 = var3.name;
                var5 = var3.id;
                var10 = var3.duration;
                var6 = var3.isLocal;
                var3 = var3.type;
                var9 = var4.startTime;
                var4 = var4.context;
                var11 = var7.slice;
                var18 = 0;
                var8 = 5;
                var15 = var11.bind(var7)(var18, var8);
                var7 = var7.length;
                var8 = var7 > var18;
                var11 = undefined;
                var7 = undefined;
                if(!var8) { _fun0037_ip = 139; continue _fun0037 }
 108:
                var12 = var15.map;
                var8 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.name;
                    var3 = var4.replace;
                    var2 = /;/g;
                    var1 = '';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var16 = var12.bind(var15)(var8);
                var12 = var16.join;
                var8 = '; ';
                var7 = var12.bind(var16)(var8);
 139:
                var12 = {};
                var8 = var14.image;
                var16 = var1 != var8;
                var8 = null;
                if(!var16) { _fun0037_ip = 209; continue _fun0037 }
 156:
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 27;
                var16 = var20[var16];
                var21 = var17.bind(var11)(var16);
                var20 = var21.getAssetFromImageURL;
                var16 = _closure1_slot20;
                var17 = var16.SPOTIFY;
                var16 = var14.image;
                var16 = var16.url;
                var8 = var20.bind(var21)(var17, var16);
 209:
                var16 = var14.image;
                var16 = var1 != var16;
                if(!var16) { _fun0037_ip = 226; continue _fun0037 }
 222:
                var16 = var1 != var8;
 226:
                if(!var16) { _fun0037_ip = 235; continue _fun0037 }
 229:
                var12['large_image'] = var8;
 235:
                var16 = var14.type;
                var8 = _closure1_slot37;
                if(!(var16 !== var8)) { _fun0037_ip = 259; continue _fun0037 }
 248:
                var8 = var14.name;
                var12['large_text'] = var8;
 259:
                var8 = var1 != var4;
                var16 = undefined;
                if(!var8) { _fun0037_ip = 273; continue _fun0037 }
 268:
                var16 = var4.uri;
 273:
                var4 = _closure1_slot24;
                if(!(var1 != var4)) { _fun0037_ip = 295; continue _fun0037 }
 281:
                var4 = _closure1_slot24;
                var4 = var4.partyId;
                if(!(var1 == var4)) { _fun0037_ip = 338; continue _fun0037 }
 295:
                var17 = _closure1_slot17;
                var8 = _closure1_slot9;
                var4 = var8.getId;
                var11 = var4.bind(var8)();
                var4 = global;
                var4 = var4.HermesInternal;
                var8 = var4.concat;
                var4 = '';
                var8 = var8.bind(var4)(var17, var11);
                _fun0037_ip = 348; continue _fun0037;
 338:
                var4 = _closure1_slot24;
                var8 = var4.partyId;
 348:
                var17 = var19.length;
                var4 = 128;
                var11 = var19;
                if(!(var17 > var4)) { _fun0037_ip = 388; continue _fun0037 }
 363:
                var17 = var19.substring;
                var4 = 125;
                var17 = var17.bind(var19)(var18, var4);
                var4 = '...';
                var11 = var17 + var4;
 388:
                var4 = {};
                var4['context_uri'] = var16;
                var14 = var14.id;
                var4['album_id'] = var14;
                var14 = var15.map;
                var13 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var13 = var14.bind(var15)(var13);
                var4['artist_ids'] = var13;
                var4['type'] = var3;
                var3 = new Array(0);
                var4['button_urls'] = var3;
                var3 = {};
                var13 = _closure1_slot26;
                var13 = var13.name;
                var3['name'] = var13;
                var3['assets'] = var12;
                var3['details'] = var11;
                var3['state'] = var7;
                var7 = {};
                var7['start'] = var9;
                var9 = var9 + var10;
                var7['end'] = var9;
                var3['timestamps'] = var7;
                var7 = {};
                var7['id'] = var8;
                var3['party'] = var7;
                if(var6) { _fun0037_ip = 538; continue _fun0037 }
 500:
                var3['sync_id'] = var5;
                var5 = _closure1_slot21;
                var6 = var5.PLAY;
                var5 = var5.SYNC;
                var5 = var6 | var5;
                var3['flags'] = var5;
                var3['metadata'] = var4;
 538:
                return var3;
 540:
                var3 = _closure1_slot24;
                var3 = var1 != var3;
                var1 = null;
                if(!var3) { _fun0037_ip = 573; continue _fun0037 }
 553:
                var4 = _closure1_slot58;
                var2 = _closure1_slot24;
                var3 = var2.userId;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
 573:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var4.bind(var1)(var10);
    var4 = 'SpotifyStore';
    var10['displayName'] = var4;
    var4 = 18;
    var4 = var7[var4];
    var18 = var9.bind(var1)(var4);
    var4 = {};
    var4['USER_CONNECTIONS_UPDATE'] = var11;
    var4['CONNECTION_OPEN'] = var11;
    var11 = function handleSpotifyAccountAccessToken(arg1) {
        var1 = arg1;
        var4 = var1.accountId;
        var3 = var1.accessToken;
        var2 = _closure1_slot59;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        var1 = false;
        return var1;
    };
    var4['SPOTIFY_ACCOUNT_ACCESS_TOKEN'] = var11;
    var11 = function handleSpotifyAccountAccessTokenRevoked(arg1) {
        var1 = arg1;
        var3 = var1.accountId;
        var2 = _closure1_slot60;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE'] = var11;
    var11 = function handleSpotifyProfileUpdate(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
            var1 = arg1;
            var7 = var1.accountId;
            var6 = var1.isPremium;
            var2 = _closure1_slot44;
            var2 = var2[var7];
            var3 = null;
            if(!(var3 != var2)) { _fun0038_ip = 89; continue _fun0038 }
 32:
            var2['isPremium'] = var6;
            var3 = _closure1_slot38;
            var2 = var3.info;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = 'Profile updated for ';
            var1 = ': isPremium = ';
            var1 = var5.bind(var4)(var7, var1, var6);
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
 89:
            var1 = false;
            return var1;
        }
    };
    var4['SPOTIFY_PROFILE_UPDATE'] = var11;
    var11 = function handleSpotifyPlayerState(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
            var1 = arg1;
            var13 = var1.accountId;
            var7 = var1.isPlaying;
            var14 = var1.repeat;
            var4 = var1.track;
            var12 = var1.position;
            var2 = var1.device;
            var _closure2_slot0 = var2;
            var15 = var1.context;
            var6 = undefined;
            var _closure2_slot1 = var6;
            var3 = null;
            var9 = var3 != var2;
            var1 = false;
            if(!var9) { _fun0039_ip = 223; continue _fun0039 }
 68:
            var10 = _closure1_slot45;
            var10 = var10[var13];
            if(!(var3 == var10)) { _fun0039_ip = 103; continue _fun0039 }
 83:
            var11 = _closure1_slot45;
            var10 = new Array(1);
            var10[0] = var2;
            var11[var13] = var10;
            var1 = true;
            _fun0039_ip = 223; continue _fun0039;
 103:
            var10 = _closure1_slot45;
            var16 = var10[var13];
            var11 = var16.find;
            var10 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var16 = var11.bind(var16)(var10);
            if(!(var3 != var16)) { _fun0039_ip = 185; continue _fun0039 }
 131:
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 23;
            var10 = var17[var10];
            var10 = var11.bind(var6)(var10);
            var10 = var10.bind(var6)(var16, var2);
            var5 = false;
            if(var10) { _fun0039_ip = 205; continue _fun0039 }
 162:
            var10 = global;
            var11 = var10.Object;
            var10 = var11.assign;
            var10 = var10.bind(var11)(var16, var2);
            var5 = true;
            _fun0039_ip = 205; continue _fun0039;
 185:
            var10 = _closure1_slot45;
            var11 = var10[var13];
            var10 = var11.push;
            var10 = var10.bind(var11)(var2);
            var5 = true;
 205:
            var10 = _closure1_slot61;
            var9 = var2.id;
            var9 = var10.bind(var6)(var13, var9);
            var1 = var5;
 223:
            var17 = _closure1_slot48;
            if(var7) { _fun0039_ip = 256; continue _fun0039 }
 233:
            var5 = var3 == var17;
            var9 = null;
            if(var5) { _fun0039_ip = 285; continue _fun0039 }
 242:
            var5 = var17.stop;
            var5 = var5.bind(var17)();
            var9 = null;
            _fun0039_ip = 285; continue _fun0039;
 256:
            var9 = var4;
            if(!(var3 != var17)) { _fun0039_ip = 285; continue _fun0039 }
 263:
            var16 = var17.start;
            var11 = _closure1_slot28;
            var5 = _closure1_slot64;
            var5 = var16.bind(var17)(var11, var5);
            var9 = var4;
 285:
            var11 = _closure1_slot10;
            var5 = var11.getAccount;
            var4 = _closure1_slot20;
            var4 = var4.SPOTIFY;
            var16 = var5.bind(var11)(var13, var4);
            _closure2_slot1 = var16;
            if(!(var3 != var16)) { _fun0039_ip = 1043; continue _fun0039 }
 322:
            var4 = _closure1_slot46;
            var5 = var4[var13];
            var11 = var3 != var9;
            var4 = null;
            if(!var11) { _fun0039_ip = 377; continue _fun0039 }
 339:
            var11 = {};
            var11['account'] = var16;
            var11['track'] = var9;
            var16 = _closure1_slot56;
            var16 = var16.bind(var6)(var5, var12);
            var11['startTime'] = var16;
            var11['context'] = var15;
            var11['repeat'] = var14;
            var4 = var11;
 377:
            var14 = var3 != var2;
            if(!var14) { _fun0039_ip = 392; continue _fun0039 }
 384:
            var11 = _closure1_slot24;
            var14 = var3 != var11;
 392:
            if(!var14) { _fun0039_ip = 401; continue _fun0039 }
 395:
            var11 = 0;
            var14 = var11 === var12;
 401:
            if(!var14) { _fun0039_ip = 407; continue _fun0039 }
 404:
            var14 = !var7;
 407:
            if(var14) { _fun0039_ip = 418; continue _fun0039 }
 410:
            var11 = _closure1_slot46;
            var11[var13] = var4;
 418:
            var11 = _closure1_slot23;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 19;
            var15 = var17[var15];
            var17 = var16.bind(var6)(var15);
            var16 = var17.values;
            var15 = _closure1_slot46;
            var17 = var16.bind(var17)(var15);
            var16 = var17.find;
            var15 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var15 = var16.bind(var17)(var15);
            _closure1_slot23 = var15;
            var16 = _closure1_slot65;
            var17 = _closure1_slot9;
            var15 = var17.getId;
            var15 = var15.bind(var17)();
            var15 = var16.bind(var6)(var15);
            if(!(var3 != var9)) { _fun0039_ip = 545; continue _fun0039 }
 503:
            if(var14) { _fun0039_ip = 545; continue _fun0039 }
 506:
            var17 = _closure1_slot42;
            var16 = var17.start;
            var14 = var9.duration;
            var15 = var14 - var12;
            var14 = _closure1_slot30;
            var15 = var15 + var14;
            var14 = function() {
                var3 = _closure1_slot57;
                var1 = _closure2_slot1;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var14 = var16.bind(var17)(var15, var14);
            _fun0039_ip = 559; continue _fun0039;
 545:
            var15 = _closure1_slot42;
            var14 = var15.stop;
            var14 = var14.bind(var15)();
 559:
            var14 = _closure1_slot24;
            if(!(var3 != var14)) { _fun0039_ip = 608; continue _fun0039 }
 567:
            if(var7) { _fun0039_ip = 576; continue _fun0039 }
 570:
            var7 = 0;
            if(!(!(var12 > var7))) { _fun0039_ip = 662; continue _fun0039 }
 576:
            if(!(var3 != var2)) { _fun0039_ip = 662; continue _fun0039 }
 580:
            if(!(var3 != var4)) { _fun0039_ip = 608; continue _fun0039 }
 584:
            var2 = _closure1_slot24;
            var7 = var2.trackId;
            var2 = var4.track;
            var2 = var2.id;
            if(!(var7 === var2)) { _fun0039_ip = 662; continue _fun0039 }
 608:
            var7 = _closure1_slot43;
            var2 = var7.isStarted;
            var2 = var2.bind(var7)();
            if(!var2) { _fun0039_ip = 730; continue _fun0039 }
 625:
            var12 = _closure1_slot38;
            var7 = var12.info;
            var2 = 'Listen along stop cancelled as playback of track resumed';
            var2 = var7.bind(var12)(var2);
            var7 = _closure1_slot43;
            var2 = var7.stop;
            var2 = var2.bind(var7)();
            _fun0039_ip = 730; continue _fun0039;
 662:
            var12 = _closure1_slot38;
            var7 = var12.info;
            var14 = _closure1_slot30;
            var2 = global;
            var2 = var2.HermesInternal;
            var16 = var2.concat;
            var15 = 'Listen along active but playback stopped or track changed. Stopping listen along in ';
            var2 = 'ms';
            var2 = var16.bind(var15)(var14, var2);
            var2 = var7.bind(var12)(var2);
            var12 = _closure1_slot43;
            var7 = var12.start;
            var2 = function() {
                var4 = _closure1_slot38;
                var3 = var4.info;
                var1 = 'Stopping listening along';
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 24;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.bind(var1)();
                var3 = _closure1_slot57;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var7.bind(var12)(var14, var2);
 730:
            var7 = _closure1_slot23;
            var2 = var1;
            if(!(var11 !== var7)) { _fun0039_ip = 1041; continue _fun0039 }
 744:
            if(!(var3 == var5)) { _fun0039_ip = 758; continue _fun0039 }
 748:
            var2 = var1;
            if(!(var3 != var4)) { _fun0039_ip = 1041; continue _fun0039 }
 758:
            if(!(var3 != var5)) { _fun0039_ip = 812; continue _fun0039 }
 762:
            if(!(var3 != var4)) { _fun0039_ip = 812; continue _fun0039 }
 766:
            var7 = var5.track;
            var11 = var7.id;
            var7 = var4.track;
            var7 = var7.id;
            if(!(var11 === var7)) { _fun0039_ip = 812; continue _fun0039 }
 790:
            var5 = var5.startTime;
            var4 = var4.startTime;
            var2 = var1;
            if(!(var5 !== var4)) { _fun0039_ip = 1041; continue _fun0039 }
 812:
            var3 = var3 != var9;
            if(!var3) { _fun0039_ip = 1039; continue _fun0039 }
 822:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 18;
            var4 = var7[var4];
            var12 = var5.bind(var6)(var4);
            var11 = var12.dispatch;
            var4 = {};
            var14 = 'SPOTIFY_NEW_TRACK';
            var4['type'] = var14;
            var4['track'] = var9;
            var4['connectionId'] = var13;
            var4 = var11.bind(var12)(var4);
            var4 = 22;
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var6 = var7.track;
            var4 = _closure1_slot22;
            var5 = var4.ACTIVITY_UPDATED;
            var4 = {};
            var10 = _closure1_slot20;
            var10 = var10.SPOTIFY;
            var4['party_platform'] = var10;
            var10 = var9.id;
            var4['track_id'] = var10;
            var10 = true;
            var4['has_images'] = var10;
            var10 = var9.album;
            var10 = var10.name;
            var4['details'] = var10;
            var10 = var9.name;
            var4['state'] = var10;
            var10 = var9.album;
            var10 = var10.id;
            var4['album_id'] = var10;
            var12 = var9.artists;
            var11 = var12.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var4['author_ids'] = var10;
            var10 = var9.artists;
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.name;
                return var1;
            };
            var8 = var9.bind(var10)(var8);
            var4['author_names'] = var8;
            var3 = var6.bind(var7)(var5, var4);
 1039:
            var2 = undefined;
 1041:
            return var2;
 1043:
            return var1;
        }
    };
    var4['SPOTIFY_PLAYER_STATE'] = var11;
    var11 = function handleSpotifyPlayerPlay(arg1) {
        var1 = arg1;
        var2 = var1.id;
        var _closure1_slot25 = var2;
        var1 = undefined;
        return var1;
    };
    var4['SPOTIFY_PLAYER_PLAY'] = var11;
    var11 = function handleUserActivityPlay(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
            var2 = arg1;
            var1 = var2.activity;
            var7 = var2.metadata;
            var2 = _closure1_slot55;
            var10 = undefined;
            var2 = var2.bind(var10)();
            var5 = null;
            if(!(var5 != var2)) { _fun0040_ip = 321; continue _fun0040 }
 37:
            var6 = var2.socket;
            var3 = var2.device;
            var11 = var1.sync_id;
            var1 = var1.party;
            var2 = var5 == var11;
            if(var2) { _fun0040_ip = 72; continue _fun0040 }
 68:
            var2 = var5 == var1;
 72:
            if(var2) { _fun0040_ip = 84; continue _fun0040 }
 75:
            var8 = var1.id;
            var2 = var5 == var8;
 84:
            if(var2) { _fun0040_ip = 104; continue _fun0040 }
 87:
            var8 = _closure1_slot16;
            var1 = var1.id;
            var1 = var8.bind(var10)(var1);
            var2 = !var1;
 104:
            var1 = !var2;
            if(var2) { _fun0040_ip = 319; continue _fun0040 }
 113:
            var2 = var5 != var7;
            var13 = undefined;
            if(!var2) { _fun0040_ip = 128; continue _fun0040 }
 122:
            var13 = var7.context_uri;
 128:
            var2 = _closure1_slot24;
            if(!(var5 != var2)) { _fun0040_ip = 144; continue _fun0040 }
 136:
            var2 = _closure1_slot63;
            var2 = var2.bind(var10)();
 144:
            var2 = var5 != var7;
            if(!var2) { _fun0040_ip = 316; continue _fun0040 }
 154:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 20;
            var8 = var12[var8];
            var12 = var9.bind(var10)(var8);
            var10 = var12.play;
            var9 = var6.accountId;
            var8 = var6.accessToken;
            var7 = var7.type;
            if(!(var5 == var7)) { _fun0040_ip = 211; continue _fun0040 }
 201:
            var5 = _closure1_slot19;
            var7 = var5.TRACK;
 211:
            var5 = {};
            var5['contextUri'] = var13;
            var13 = var3.id;
            var5['deviceId'] = var13;
            var19 = var12;
            var18 = var9;
            var17 = var8;
            var16 = var11;
            var15 = var7;
            var14 = var5;
            var5 = var19[var10](var18, var17, var16, var15, var14, var13);
            var5 = _closure1_slot38;
            var4 = var5.info;
            var18 = var6.accountId;
            var14 = var3.name;
            var3 = global;
            var3 = var3.HermesInternal;
            var8 = var3.concat;
            var19 = 'Play started: ';
            var17 = ' playing ';
            var15 = ' on ';
            var16 = var11;
            var3 = var19[var8](var18, var17, var16, var15, var14, var13);
            var3 = var4.bind(var5)(var3);
            var2 = undefined;
 316:
            var1 = var2;
 319:
            return var1;
 321:
            var1 = false;
            return var1;
        }
    };
    var4['ACTIVITY_PLAY'] = var11;
    var11 = function handleUserActivitySync(arg1) {
        var1 = arg1;
        var5 = var1.activity;
        var4 = var1.userId;
        var3 = _closure1_slot62;
        var2 = undefined;
        var1 = true;
        var1 = var3.bind(var2)(var4, var5, var1);
        return var1;
    };
    var4['ACTIVITY_SYNC'] = var11;
    var4['ACTIVITY_SYNC_STOP'] = var8;
    var8 = function handleSpotifySetDevices(arg1) {
        var1 = arg1;
        var7 = var1.accountId;
        var4 = var1.devices;
        var2 = _closure1_slot45;
        var2[var7] = var4;
        var3 = _closure1_slot38;
        var2 = var3.info;
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var5 = 'Devices updated for ';
        var1 = ':';
        var1 = var6.bind(var5)(var7, var1);
        var1 = var2.bind(var3)(var1, var4);
        var1 = undefined;
        return var1;
    };
    var4['SPOTIFY_SET_DEVICES'] = var8;
    var8 = function handleSetActiveDevice(arg1) {
        var1 = arg1;
        var4 = var1.accountId;
        var3 = var1.deviceId;
        var2 = _closure1_slot61;
        var1 = undefined;
        var2 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var4['SPOTIFY_SET_ACTIVE_DEVICE'] = var8;
    var8 = function handleSpeaking(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot65;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        var1 = false;
        return var1;
    };
    var4['SPEAKING'] = var8;
    var8 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            var1 = arg2;
            var3 = var1.userId;
            var2 = _closure1_slot65;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            var1 = arg1;
            return var1;
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4['VOICE_STATE_UPDATES'] = var8;
    var8 = function handleSetGoLiveSource(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
            var1 = arg1;
            var5 = var1.settings;
            var3 = null;
            var4 = var3 == var5;
            var1 = undefined;
            var2 = undefined;
            if(var4) { _fun0041_ip = 28; continue _fun0041 }
 22:
            var2 = var5.desktopSettings;
 28:
            if(!(var3 == var2)) { _fun0041_ip = 69; continue _fun0041 }
 32:
            if(!(var3 == var5)) { _fun0041_ip = 247; continue _fun0041 }
 39:
            var6 = _closure1_slot48;
            if(!(var3 != var6)) { _fun0041_ip = 60; continue _fun0041 }
 50:
            var4 = var6.stop;
            var4 = var4.bind(var6)();
 60:
            _closure1_slot48 = var3;
            _fun0041_ip = 247; continue _fun0041;
 69:
            var6 = _closure1_slot48;
            if(!(var3 != var6)) { _fun0041_ip = 90; continue _fun0041 }
 80:
            var4 = var6.stop;
            var4 = var4.bind(var6)();
 90:
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0041_ip = 105; continue _fun0041 }
 99:
            var4 = var5.desktopSettings;
 105:
            var7 = var4.sourceId;
            var4 = var4.sound;
            if(!(var3 != var7)) { _fun0041_ip = 154; continue _fun0041 }
 121:
            var6 = _closure1_slot8;
            var5 = var6.getObservedAppNameForWindow;
            var6 = var5.bind(var6)(var7);
            var5 = _closure1_slot26;
            var5 = var5.name;
            if(!(var6 === var5)) { _fun0041_ip = 154; continue _fun0041 }
 151:
            if(var4) { _fun0041_ip = 178; continue _fun0041 }
 154:
            var5 = _closure1_slot48;
            if(!(var3 != var5)) { _fun0041_ip = 172; continue _fun0041 }
 162:
            var4 = var5.stop;
            var4 = var4.bind(var5)();
 172:
            _closure1_slot48 = var3;
            _fun0041_ip = 247; continue _fun0041;
 178:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 17;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.Interval;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var10 = var4;
            var3 = new var10[var3](var9);
            var5 = var3 instanceof Object ? var3 : var4;
            _closure1_slot48 = var5;
            var4 = var5.start;
            var3 = _closure1_slot28;
            var2 = _closure1_slot64;
            var2 = var4.bind(var5)(var3, var2);
 247:
            return var1;
        }
    };
    var4['MEDIA_ENGINE_SET_GO_LIVE_SOURCE'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var19 = var8;
    var17 = var4;
    var4 = new var19[var10](var18, var17, var16);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot51 = var4;
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/spotify/SpotifyStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SpotifySocket'] = var2;
    return var1;
})();