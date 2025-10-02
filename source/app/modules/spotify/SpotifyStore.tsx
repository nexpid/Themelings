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
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot54;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot54;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var1 = function _getActiveSocketAndDevice() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var10 = _closure1_slot44;
            var1 = undefined;
            var5 = null;
            var2 = undefined;
            for(var6 in var10)
case 35:
            {
case 39:
                var13 = var6;
                var3 = _closure1_slot44;
                var4 = var3[var13];
                var3 = var4.connected;
                if(!var3) { _fun0005_ip = 35; continue _fun0005 }
case 40:
                var3 = _closure1_slot45;
                var3 = var3[var13];
                if(var5 == var3) { _fun0005_ip = 35; continue _fun0005 }
case 41:
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
                if(var5 == var2) { _fun0005_ip = 35; continue _fun0005 }
case 42:
                var2 = {};
                var2['socket'] = var4;
                var2['device'] = var3;
                return var2;
            }
case 43:
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = function calculateStartTime(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = global;
            var4 = var3.Date;
            var1 = var4.now;
            var4 = var1.bind(var4)();
            var1 = null;
            var5 = var1 != var2;
            var1 = 0;
            if(!var5) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var1 = var2.startTime;
case 44:
            var2 = arg2;
            var2 = var4 - var2;
            var5 = var3.Math;
            var4 = var5.abs;
            var3 = var2 - var1;
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot31;
            if(!(var4 > var3)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var1 = var2;
case 46:
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
case 0:
                var2 = arg1;
                var1 = var2.party;
                var4 = null;
                var1 = var4 != var1;
                if(!var1) { _fun0007_ip = 37; continue _fun0007 }
case 48:
                var3 = var2.party;
                var3 = var3.id;
                var1 = var4 != var3;
case 37:
                if(!var1) { _fun0007_ip = 11; continue _fun0007 }
case 49:
                var4 = _closure1_slot16;
                var2 = var2.party;
                var3 = var2.id;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 11:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot58 = var1;
    var1 = function upsertAccount(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var3 = arg2;
            var2 = _closure1_slot44;
            var4 = var5 in var2;
            var2 = _closure1_slot44;
            if(var4) { _fun0008_ip = 50; continue _fun0008 }
case 51:
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
            _fun0008_ip = 52; continue _fun0008;
case 50:
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
case 52:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot59 = var1;
    var1 = function removeAccount(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot44;
            var2 = var5 in var2;
            if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 33:
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
            if(!var3) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            var6 = _closure1_slot23;
            var3 = var2 != var6;
case 54:
            if(!var3) { _fun0009_ip = 56; continue _fun0009 }
case 4:
            var4 = var4.track;
            var6 = var4.id;
            var4 = _closure1_slot23;
            var4 = var4.track;
            var4 = var4.id;
            var3 = var6 === var4;
case 56:
            if(!var3) { _fun0009_ip = 43; continue _fun0009 }
case 57:
            var _closure1_slot23 = var2;
case 43:
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
case 53:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot60 = var1;
    var1 = function setActiveDevice(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg2;
            var3 = _closure1_slot53;
            var2 = _closure1_slot45;
            var1 = arg1;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0010_ip = 58; continue _fun0010 }
case 59:
            var6 = var3.value;
            var2 = var6.id;
            var2 = var2 === var5;
            var6['is_active'] = var2;
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0010_ip = 59; continue _fun0010 }
case 58:
            return var1;
        }
    };
    var _closure1_slot61 = var1;
    var1 = function activitySync(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var14 = arg1;
            var8 = arg2;
            var2 = _closure1_slot55;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var4 = null;
            if(!(var4 != var2)) { _fun0011_ip = 60; continue _fun0011 }
case 38:
            var6 = var2.socket;
            var5 = var2.device;
            var13 = var8.sync_id;
            var10 = var8.party;
            var2 = var8.timestamps;
            if(!(var4 != var13)) { _fun0011_ip = 61; continue _fun0011 }
case 62:
            if(!(var4 != var10)) { _fun0011_ip = 61; continue _fun0011 }
case 5:
            var7 = var10.id;
            if(!(var4 != var7)) { _fun0011_ip = 61; continue _fun0011 }
case 63:
            var9 = _closure1_slot16;
            var7 = var10.id;
            var7 = var9.bind(var1)(var7);
            if(!var7) { _fun0011_ip = 61; continue _fun0011 }
case 64:
            if(!(var4 != var2)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var7 = var2.start;
            if(!(var4 == var7)) { _fun0011_ip = 67; continue _fun0011 }
case 65:
            var7 = global;
            var9 = var7.Date;
            var7 = var9.now;
            var7 = var7.bind(var9)();
            _fun0011_ip = 68; continue _fun0011;
case 67:
            var7 = var2.start;
case 68:
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
            if(!var9) { _fun0011_ip = 69; continue _fun0011 }
case 70:
            var12 = var11.repeat;
            var11 = false;
            var9 = var11 === var12;
case 69:
            var16 = false;
            if(!var9) { _fun0011_ip = 71; continue _fun0011 }
case 72:
            var16 = null;
case 71:
            var9 = _closure1_slot15;
            var11 = var8.metadata;
            var12 = var4 == var11;
            var8 = undefined;
            if(var12) { _fun0011_ip = 73; continue _fun0011 }
case 74:
            var8 = var11.type;
case 73:
            if(!(var4 == var8)) { _fun0011_ip = 75; continue _fun0011 }
case 22:
            var11 = _closure1_slot19;
            var8 = var11.TRACK;
case 75:
            var15 = var9.bind(var1)(var8);
            if(!(var4 != var15)) { _fun0011_ip = 76; continue _fun0011 }
case 77:
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
            if(!var4) { _fun0011_ip = 78; continue _fun0011 }
case 79:
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
case 78:
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
case 76:
            return var1;
case 61:
            var1 = false;
            return var1;
case 60:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot62 = var1;
    var8 = function handleUserActivitySyncStop() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
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
            if(!var9) { _fun0012_ip = 34; continue _fun0012 }
case 80:
            var9 = _closure1_slot24;
            var8 = var9.partyId;
case 34:
            var2['party_id'] = var8;
            var8 = _closure1_slot24;
            var9 = var4 != var8;
            var8 = null;
            if(!var9) { _fun0012_ip = 81; continue _fun0012 }
case 82:
            var9 = _closure1_slot24;
            var8 = var9.userId;
case 81:
            var2['other_user_id'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var2 = _closure1_slot24;
            var2 = var4 != var2;
            var6 = null;
            if(!var2) { _fun0012_ip = 83; continue _fun0012 }
case 84:
            var2 = _closure1_slot24;
            var6 = var2.trackId;
case 83:
            _closure1_slot24 = var4;
            var7 = _closure1_slot38;
            var5 = var7.info;
            var2 = 'Listen along stopped';
            var2 = var5.bind(var7)(var2);
            var2 = _closure1_slot55;
            var2 = var2.bind(var1)();
            if(!(var4 != var2)) { _fun0012_ip = 85; continue _fun0012 }
case 86:
            var2 = var2.socket;
            var7 = _closure1_slot46;
            var5 = var2.accountId;
            var5 = var7[var5];
            var4 = var4 != var5;
            if(!var4) { _fun0012_ip = 87; continue _fun0012 }
case 88:
            var5 = var5.track;
            var5 = var5.id;
            var4 = var5 === var6;
case 87:
            if(!var4) { _fun0012_ip = 85; continue _fun0012 }
case 89:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 20;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.pause;
            var3 = var2.accountId;
            var2 = var2.accessToken;
            var2 = var4.bind(var5)(var3, var2);
case 85:
            return var1;
        }
    };
    var _closure1_slot63 = var8;
    var11 = function handleUserConnectionsUpdate() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
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
            if(!(var9 != var2)) { _fun0013_ip = 90; continue _fun0013 }
case 62:
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
            if(!var1) { _fun0013_ip = 91; continue _fun0013 }
case 15:
            var5 = var10[var3];
            var1 = var4.includes;
            var1 = var1.bind(var4)(var5);
            if(var1) { _fun0013_ip = 92; continue _fun0013 }
case 93:
            var1 = _closure1_slot60;
            var1 = var1.bind(var8)(var5);
case 92:
            var3 = var3 + 1;
            var1 = var10.length;
            if(var3 < var1) { _fun0013_ip = 15; continue _fun0013 }
case 91:
            var1 = _closure1_slot53;
            var7 = var1.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = 20;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0013_ip = 94; continue _fun0013 }
case 95:
            var2 = var4.value;
            var12 = _closure1_slot23;
            var12 = var9 != var12;
            if(!var12) { _fun0013_ip = 96; continue _fun0013 }
case 97:
            var13 = _closure1_slot23;
            var13 = var13.account;
            var14 = var13.id;
            var13 = var2.id;
            var12 = var14 === var13;
case 96:
            if(!var12) { _fun0013_ip = 98; continue _fun0013 }
case 99:
            var12 = _closure1_slot23;
            var12['account'] = var2;
            var3 = true;
case 98:
            var13 = var10.includes;
            var12 = var2.id;
            var13 = var13.bind(var10)(var12);
            var12 = var3;
            if(var13) { _fun0013_ip = 100; continue _fun0013 }
case 101:
            var13 = var2.accessToken;
            if(!(var9 != var13)) { _fun0013_ip = 102; continue _fun0013 }
case 103:
            var15 = _closure1_slot59;
            var14 = var2.id;
            var13 = var2.accessToken;
            var13 = var15.bind(var8)(var14, var13);
            _fun0013_ip = 100; continue _fun0013;
case 102:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var6];
            var14 = var14.bind(var8)(var13);
            var13 = var14.getAccessToken;
            var2 = var2.id;
            var2 = var13.bind(var14)(var2);
case 100:
            var13 = var7.bind(var8)();
            var2 = var13.done;
            var4 = var13;
            var3 = var12;
            var1 = var3;
            if(!var2) { _fun0013_ip = 95; continue _fun0013 }
case 94:
            return var1;
case 90:
            var1 = false;
            return var1;
        }
    };
    var1 = function autoPause() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = _closure1_slot23;
            var3 = null;
            if(!(var3 != var2)) { _fun0014_ip = 104; continue _fun0014 }
case 105:
            var2 = _closure1_slot55;
            var4 = undefined;
            var2 = var2.bind(var4)();
            if(!(var3 != var2)) { _fun0014_ip = 104; continue _fun0014 }
case 7:
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
case 104:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot64 = var1;
    var1 = function setSpeaking(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot9;
            var2 = var3.getId;
            var2 = var2.bind(var3)();
            if(!(var6 === var2)) { _fun0015_ip = 106; continue _fun0015 }
case 107:
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
            if(!var3) { _fun0015_ip = 108; continue _fun0015 }
case 50:
            if(!var2) { _fun0015_ip = 108; continue _fun0015 }
case 56:
            var3 = _closure1_slot23;
            var2 = null;
            if(!(var2 == var3)) { _fun0015_ip = 109; continue _fun0015 }
case 108:
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
            _fun0015_ip = 106; continue _fun0015;
case 109:
            var5 = _closure1_slot39;
            var4 = var5.start;
            var3 = _closure1_slot28;
            var2 = _closure1_slot64;
            var2 = var4.bind(var5)(var3, var2, var6);
            var2 = _closure1_slot40;
            var1 = var2.stop;
            var1 = var1.bind(var2)();
case 106:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot65 = var1;
    var1 = function updatePlayerState(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
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
            if(!(var8 != var4)) { _fun0016_ip = 57; continue _fun0016 }
case 110:
            var5 = var4.type;
            var2 = _closure1_slot19;
            var2 = var2.TRACK;
            if(!(var5 !== var2)) { _fun0016_ip = 111; continue _fun0016 }
case 57:
            if(!(var8 != var4)) { _fun0016_ip = 112; continue _fun0016 }
case 108:
            var5 = var4.type;
            var2 = _closure1_slot19;
            var2 = var2.EPISODE;
            if(!(var5 === var2)) { _fun0016_ip = 112; continue _fun0016 }
case 113:
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
            if(var13) { _fun0016_ip = 114; continue _fun0016 }
case 115:
            var14 = var10.id;
case 114:
            var15 = var8 != var14;
            var10 = '';
            var13 = var10;
            if(!var15) { _fun0016_ip = 116; continue _fun0016 }
case 117:
            var13 = var14;
case 116:
            var5['id'] = var13;
            var14 = var4.show;
            var15 = var8 == var14;
            var13 = undefined;
            if(var15) { _fun0016_ip = 101; continue _fun0016 }
case 118:
            var13 = var14.name;
case 101:
            var14 = var8 != var13;
            if(!var14) { _fun0016_ip = 103; continue _fun0016 }
case 119:
            var10 = var13;
case 103:
            var5['name'] = var10;
            var13 = var4.show;
            var14 = var8 == var13;
            var10 = undefined;
            if(var14) { _fun0016_ip = 120; continue _fun0016 }
case 121:
            var14 = var13.images;
            var13 = 0;
            var10 = var14[var13];
case 120:
            var5['image'] = var10;
            var13 = var4.album;
            var14 = var8 == var13;
            var10 = undefined;
            if(var14) { _fun0016_ip = 100; continue _fun0016 }
case 122:
            var10 = var13.type;
case 100:
            if(!(var8 == var10)) { _fun0016_ip = 123; continue _fun0016 }
case 124:
            var12 = _closure1_slot19;
            var10 = var12.SHOW;
case 123:
            var5['type'] = var10;
            var2['album'] = var5;
            var5 = new Array(0);
            var2['artists'] = var5;
            var5 = false;
            var2['isLocal'] = var5;
            _closure2_slot5 = var2;
            _fun0016_ip = 112; continue _fun0016;
case 111:
            var5 = var4.id;
            var2 = var4.linked_from;
            var2 = var8 != var2;
            if(!var2) { _fun0016_ip = 79; continue _fun0016 }
case 125:
            var10 = var4.linked_from;
            var10 = var10.id;
            var2 = var8 != var10;
case 79:
            if(!var2) { _fun0016_ip = 126; continue _fun0016 }
case 127:
            var2 = var4.linked_from;
            var5 = var2.id;
case 126:
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
            if(var12) { _fun0016_ip = 128; continue _fun0016 }
case 129:
            var13 = var10.id;
case 128:
            var14 = var8 != var13;
            var10 = '';
            var12 = var10;
            if(!var14) { _fun0016_ip = 130; continue _fun0016 }
case 131:
            var12 = var13;
case 130:
            var5['id'] = var12;
            var13 = var4.album;
            var14 = var8 == var13;
            var12 = undefined;
            if(var14) { _fun0016_ip = 132; continue _fun0016 }
case 133:
            var12 = var13.name;
case 132:
            var13 = var8 != var12;
            if(!var13) { _fun0016_ip = 134; continue _fun0016 }
case 135:
            var10 = var12;
case 134:
            var5['name'] = var10;
            var12 = var4.album;
            var13 = var8 == var12;
            var10 = undefined;
            if(var13) { _fun0016_ip = 136; continue _fun0016 }
case 137:
            var13 = var12.images;
            var12 = 0;
            var10 = var13[var12];
case 136:
            var5['image'] = var10;
            var12 = var4.album;
            var13 = var8 == var12;
            var10 = undefined;
            if(var13) { _fun0016_ip = 138; continue _fun0016 }
case 139:
            var10 = var12.type;
case 138:
            if(!(var8 == var10)) { _fun0016_ip = 140; continue _fun0016 }
case 141:
            var11 = _closure1_slot19;
            var10 = var11.ALBUM;
case 140:
            var5['type'] = var10;
            var2['album'] = var5;
            var5 = global;
            var11 = var5.Array;
            var10 = var11.isArray;
            var5 = var4.artists;
            var5 = var10.bind(var11)(var5);
            if(var5) { _fun0016_ip = 142; continue _fun0016 }
case 143:
            var5 = new Array(0);
            _fun0016_ip = 144; continue _fun0016;
case 142:
            var12 = var4.artists;
            var11 = var12.filter;
            var10 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
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
                    if(!var1) { _fun0017_ip = 110; continue _fun0017 }
case 145:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.isNotNullish;
                    var2 = var2.name;
                    var1 = var3.bind(var4)(var2);
case 110:
                    return var1;
                }
            };
            var5 = var11.bind(var12)(var10);
case 144:
            var2['artists'] = var5;
            var4 = var4.is_local;
            if(var4) { _fun0016_ip = 146; continue _fun0016 }
case 147:
            var4 = false;
case 146:
            var2['isLocal'] = var4;
            _closure2_slot5 = var2;
case 112:
            var2 = var8 != var3;
            if(!var2) { _fun0016_ip = 148; continue _fun0016 }
case 149:
            var5 = var3.is_active;
            var4 = true;
            var2 = var4 !== var5;
case 148:
            if(!var2) { _fun0016_ip = 150; continue _fun0016 }
case 151:
            var2 = {};
            var18 = var2;
            var17 = var3;
            var3 = copyDataProperties(var18, var17);
            var4 = true;
            var3 = 'is_active';
            var2[var3] = var4;
            _closure2_slot1 = var2;
case 150:
            if(!(var8 != var7)) { _fun0016_ip = 152; continue _fun0016 }
case 153:
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
            if(var3) { _fun0016_ip = 154; continue _fun0016 }
case 152:
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.resolve;
            var3 = var3.bind(var4)(var6);
            _fun0016_ip = 155; continue _fun0016;
case 154:
            var5 = _closure1_slot51;
            var4 = var5.getPlayerState;
            var4 = var4.bind(var5)(var9);
            if(!(var8 != var4)) { _fun0016_ip = 156; continue _fun0016 }
case 157:
            var5 = var4.context;
            if(!(var8 != var5)) { _fun0016_ip = 156; continue _fun0016 }
case 158:
            var5 = var4.context;
            var8 = var5.uri;
            var5 = var7.uri;
            if(!(var8 !== var5)) { _fun0016_ip = 159; continue _fun0016 }
case 156:
            var8 = var7.type;
            var5 = _closure1_slot19;
            var5 = var5.ALBUM;
            if(!(var8 !== var5)) { _fun0016_ip = 160; continue _fun0016 }
case 161:
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
case 0:
                    var1 = arg1;
                    if(!var1) { _fun0018_ip = 162; continue _fun0018 }
case 163:
                    var3 = var1.status;
                    var2 = 404;
                    if(!(var2 !== var3)) { _fun0018_ip = 35; continue _fun0018 }
case 162:
                    throw var1;
case 35:
                    var1 = null;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2);
            _fun0016_ip = 164; continue _fun0016;
case 160:
            var5 = global;
            var6 = var5.Promise;
            var5 = var6.resolve;
            var2 = var5.bind(var6)(var7);
case 164:
            _fun0016_ip = 165; continue _fun0016;
case 159:
            var5 = global;
            var6 = var5.Promise;
            var5 = var6.resolve;
            var4 = var4.context;
            var2 = var5.bind(var6)(var4);
case 165:
            var3 = var2;
case 155:
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var6 = arg1;
                    var8 = null;
                    var1 = var8 == var6;
                    if(var1) { _fun0019_ip = 166; continue _fun0019 }
case 167:
                    var3 = var6.type;
                    var2 = _closure1_slot19;
                    var2 = var2.PLAYLIST;
                    var1 = var3 !== var2;
case 166:
                    if(var1) { _fun0019_ip = 168; continue _fun0019 }
case 44:
                    var1 = var6.public;
case 168:
                    if(var1) { _fun0019_ip = 169; continue _fun0019 }
case 170:
                    var6 = null;
case 169:
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
                    if(!var8) { _fun0019_ip = 171; continue _fun0019 }
case 172:
                    var8 = _closure2_slot1;
                    var7 = var8.volume_percent;
case 171:
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
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var6 = var2.body;
                var2 = null;
                if(!(var2 == var6)) { _fun0020_ip = 173; continue _fun0020 }
case 33:
                var4 = _closure1_slot57;
                var3 = _closure2_slot0;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _fun0020_ip = 82; continue _fun0020;
case 173:
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
case 82:
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
case 0:
                var2 = this;
                var3 = var2.socket;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0021_ip = 145; continue _fun0021 }
case 48:
                var4 = _closure1_slot49;
                var3 = var4.has;
                var2 = var2.socket;
                var2 = var2.readyState;
                var1 = var3.bind(var4)(var2);
case 145:
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
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.connected;
                if(var3) { _fun0022_ip = 51; continue _fun0022 }
case 48:
                var3 = var2._requestedConnect;
case 51:
                if(var3) { _fun0022_ip = 92; continue _fun0022 }
case 107:
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
case 92:
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
case 0:
                var3 = this;
                var1 = undefined;
                var2 = undefined;
                var4 = true;
                var3['_requestedDisconnect'] = var4;
                var5 = var3.backoff;
                var4 = var5.cancel;
                var4 = var4.bind(var5)();
case 45: // try_start_0
                var4 = var3.socket;
                var2 = var4;
                var3 = null;
                if(!(var3 != var4)) { _fun0023_ip = 174; continue _fun0023 }
case 6:
                var3 = var2;
                var2 = var3.close;
                var2 = var2.bind(var3)();
case 174: // try_end0
                _fun0023_ip = 55; continue _fun0023;
case 11: // catch_target0
                CatchBlockStart(arg_register=1);
case 55:
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
case 0:
                var1 = this;
                var2 = var1.connected;
                if(!var2) { _fun0024_ip = 34; continue _fun0024 }
case 167:
                var3 = var1.socket;
                var1 = null;
                if(!(var1 != var3)) { _fun0024_ip = 34; continue _fun0024 }
case 51:
                var2 = var3.send;
                var1 = global;
                var5 = var1.JSON;
                var4 = var5.stringify;
                var1 = {};
                var6 = _closure1_slot36;
                var1['type'] = var6;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
case 34:
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
case 0:
                var1 = this;
                var2 = arg1;
                var6 = var2.data;
                var5 = 'string';
                var2 = typeof var6;
                if(!(var5 === var2)) { _fun0025_ip = 175; continue _fun0025 }
case 176:
                var3 = global;
                var4 = var3.JSON;
                var2 = var4.parse;
                var2 = var2.bind(var4)(var6);
                var8 = var2.type;
                var6 = var2.uri;
                var7 = var2.payloads;
                var4 = _closure1_slot35;
                if(!(var8 === var4)) { _fun0025_ip = 175; continue _fun0025 }
case 47:
                var4 = typeof var6;
                if(!(var5 === var4)) { _fun0025_ip = 177; continue _fun0025 }
case 178:
                var5 = var6.startsWith;
                var4 = 'hm://pusher/v1/connections/';
                var5 = var5.bind(var6)(var4);
                if(var5) { _fun0025_ip = 179; continue _fun0025 }
case 177:
                var8 = var3.Array;
                var5 = var8.isArray;
                var5 = var5.bind(var8)(var7);
                if(!var5) { _fun0025_ip = 175; continue _fun0025 }
case 83:
                var5 = _closure1_slot53;
                var12 = undefined;
                var11 = var5.bind(var12)(var7);
                var7 = var11.bind(var12)();
                var5 = var7.done;
                var10 = null;
                var9 = var7;
                var8 = undefined;
                var7 = undefined;
                if(var5) { _fun0025_ip = 175; continue _fun0025 }
case 18:
                var5 = var9.value;
                var13 = var5.events;
                if(!(var10 != var13)) { _fun0025_ip = 73; continue _fun0025 }
case 106:
                var5 = _closure1_slot53;
                var14 = var5.bind(var12)(var13);
                var15 = var14.bind(var12)();
                var5 = var15.done;
                var13 = var15;
                var8 = var13;
                var7 = var14;
                if(var5) { _fun0025_ip = 73; continue _fun0025 }
case 96:
                var15 = var13.value;
                var5 = var1.handleEvent;
                var5 = var5.bind(var1)(var15);
                var15 = var14.bind(var12)();
                var5 = var15.done;
                var13 = var15;
                var8 = var13;
                var7 = var14;
                if(!var5) { _fun0025_ip = 96; continue _fun0025 }
case 73:
                var13 = var11.bind(var12)();
                var5 = var13.done;
                var9 = var13;
                if(var5) { _fun0025_ip = 175; continue _fun0025 }
case 180:
                _fun0025_ip = 18; continue _fun0025;
case 179:
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
case 175:
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
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2.pingInterval;
                var3 = var4.stop;
                var3 = var3.bind(var4)();
                var3 = var2._requestedDisconnect;
                if(var3) { _fun0026_ip = 172; continue _fun0026 }
case 166: // try_start_0
                var3 = var2.backoff;
                var2 = var3.fail;
                var1 = function() {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2._requestedDisconnect;
                        if(var2) { _fun0027_ip = 7; continue _fun0027 }
case 105:
                        var2 = _closure3_slot0;
                        var1 = var2.connect;
                        var1 = var1.bind(var2)();
case 7:
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
case 181: // try_end0
                _fun0026_ip = 172; continue _fun0026;
case 182: // catch_target0
                CatchBlockStart(arg_register=0);
case 172:
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
case 0:
                var1 = arg1;
                var2 = this;
                var5 = var1.type;
                var1 = var1.event;
                var4 = _closure1_slot34;
                var4 = var4.PLAYER_STATE_CHANGED;
                if(!(var4 !== var5)) { _fun0028_ip = 183; continue _fun0028 }
case 166:
                var4 = _closure1_slot34;
                var4 = var4.DEVICE_STATE_CHANGED;
                if(!(var4 === var5)) { _fun0028_ip = 184; continue _fun0028 }
case 170:
                var4 = var2.handleDeviceStateChange;
                var4 = var4.bind(var2)();
                _fun0028_ip = 184; continue _fun0028;
case 183:
                var6 = null;
                var4 = var6 != var1;
                if(!var4) { _fun0028_ip = 185; continue _fun0028 }
case 186:
                var5 = var1.state;
                var4 = var6 != var5;
case 185:
                if(!var4) { _fun0028_ip = 184; continue _fun0028 }
case 187:
                var5 = _closure1_slot66;
                var4 = var2.accountId;
                var3 = var2.accessToken;
                var2 = var1.state;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
case 184:
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
case 0:
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
                if(var1) { _fun0029_ip = 186; continue _fun0029 }
case 188:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0029_ip = 57; continue _fun0029;
case 186:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 57:
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
case 0:
                        var4 = _closure1_slot24;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0030_ip = 101; continue _fun0030 }
case 48:
                        var4 = _closure1_slot55;
                        var8 = undefined;
                        var4 = var4.bind(var8)();
                        if(!(var3 != var4)) { _fun0030_ip = 74; continue _fun0030 }
case 189:
                        var4 = _closure1_slot24;
                        var7 = var4.userId;
                        var _closure5_slot0 = var7;
                        var4 = _closure1_slot58;
                        var6 = var4.bind(var8)(var7);
                        if(!(var3 != var6)) { _fun0030_ip = 190; continue _fun0030 }
case 41:
                        var5 = _closure1_slot41;
                        var4 = var5.stop;
                        var4 = var4.bind(var5)();
                        var11 = var6.sync_id;
                        var10 = var6.timestamps;
                        var4 = var6.party;
                        var9 = var3 != var11;
                        if(!var9) { _fun0030_ip = 65; continue _fun0030 }
case 191:
                        var5 = _closure1_slot24;
                        var5 = var5.trackId;
                        var9 = var5 !== var11;
case 65:
                        var5 = var3 != var10;
                        if(!var5) { _fun0030_ip = 104; continue _fun0030 }
case 192:
                        var11 = _closure1_slot24;
                        var11 = var11.startTime;
                        var10 = var10.start;
                        var5 = var11 !== var10;
case 104:
                        if(var9) { _fun0030_ip = 193; continue _fun0030 }
case 194:
                        if(var5) { _fun0030_ip = 193; continue _fun0030 }
case 195:
                        var3 = var3 != var4;
                        if(!var3) { _fun0030_ip = 196; continue _fun0030 }
case 53:
                        var9 = var4.id;
                        var5 = _closure1_slot24;
                        var5 = var5.partyId;
                        var3 = var9 !== var5;
case 196:
                        if(!var3) { _fun0030_ip = 24; continue _fun0030 }
case 106:
                        var5 = _closure1_slot24;
                        var4 = var4.id;
                        var5['partyId'] = var4;
                        var3 = true;
case 24:
                        _fun0030_ip = 197; continue _fun0030;
case 193:
                        var5 = _closure1_slot62;
                        var4 = false;
                        var3 = var5.bind(var8)(var7, var6, var4);
case 197:
                        return var3;
case 190:
                        var4 = _closure1_slot41;
                        var3 = var4.start;
                        var2 = _closure1_slot29;
                        var1 = function() {
                            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                                var3 = _closure1_slot24;
                                var2 = null;
                                var2 = var2 != var3;
                                if(!var2) { _fun0031_ip = 49; continue _fun0031 }
case 105:
                                var3 = _closure1_slot24;
                                var4 = var3.userId;
                                var3 = _closure5_slot0;
                                var2 = var4 === var3;
case 49:
                                if(!var2) { _fun0031_ip = 62; continue _fun0031 }
case 198:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 24;
                                var1 = var2[var1];
                                var2 = undefined;
                                var1 = var3.bind(var2)(var1);
                                var1 = var1.bind(var2)();
case 62:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = false;
                        return var1;
case 74:
                        var1 = false;
                        return var1;
case 101:
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
case 0:
                var1 = new Array(0);
                var8 = _closure1_slot44;
                var2 = null;
                var3 = undefined;
                for(var4 in var8)
case 176:
                {
case 166:
                    var12 = var4;
                    var11 = _closure1_slot44;
                    var14 = var11[var12];
                    var11 = var14.connected;
                    if(!var11) { _fun0032_ip = 176; continue _fun0032 }
case 199:
                    var11 = _closure1_slot45;
                    var11 = var11[var12];
                    if(var2 == var11) { _fun0032_ip = 176; continue _fun0032 }
case 200:
                    var11 = _closure1_slot45;
                    var13 = var11[var12];
                    var12 = var13.find;
                    var11 = function(arg1) {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.is_restricted;
                            var1 = !var1;
                            if(!var1) { _fun0033_ip = 39; continue _fun0033 }
case 201:
                            var3 = var2.type;
                            var2 = 'Computer';
                            var1 = var2 === var3;
case 39:
                            return var1;
                        }
                    };
                    var11 = var12.bind(var13)(var11);
                    var3 = var11;
                    if(var2 == var3) { _fun0032_ip = 176; continue _fun0032 }
case 202:
                    var13 = var1.push;
                    var12 = {};
                    var12['socket'] = var14;
                    var12['device'] = var11;
                    var12 = var13.bind(var1)(var12);
                    var3 = var11;
                    _fun0032_ip = 176; continue _fun0032;
                }
case 192:
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
case 0:
                var1 = arg1;
                var5 = var1.sync_id;
                var2 = var1.party;
                var1 = _closure1_slot55;
                var4 = undefined;
                var1 = var1.bind(var4)();
                var6 = null;
                var1 = var6 != var1;
                if(!var1) { _fun0034_ip = 203; continue _fun0034 }
case 44:
                var1 = var6 != var5;
case 203:
                if(!var1) { _fun0034_ip = 170; continue _fun0034 }
case 204:
                var1 = var6 != var2;
case 170:
                if(!var1) { _fun0034_ip = 183; continue _fun0034 }
case 188:
                var5 = var2.id;
                var1 = var6 != var5;
case 183:
                if(!var1) { _fun0034_ip = 205; continue _fun0034 }
case 55:
                var3 = _closure1_slot16;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 205:
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
case 0:
                var3 = _closure1_slot23;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0035_ip = 176; continue _fun0035 }
case 105:
                var2 = _closure1_slot23;
                var1 = var2.track;
case 176:
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
case 0:
                var3 = _closure1_slot23;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0036_ip = 39; continue _fun0036 }
case 105:
                var3 = _closure1_slot23;
                var3 = var3.account;
                var1 = var3.showActivity;
case 39:
                if(!var1) { _fun0036_ip = 40; continue _fun0036 }
case 189:
                var3 = _closure1_slot11;
                var2 = var3.isIdle;
                var2 = var2.bind(var3)();
                var1 = !var2;
case 40:
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
case 0:
                var3 = _closure1_slot23;
                var1 = null;
                if(!(var1 != var3)) { _fun0037_ip = 206; continue _fun0037 }
case 48:
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
                if(!var8) { _fun0037_ip = 207; continue _fun0037 }
case 66:
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
case 207:
                var12 = {};
                var8 = var14.image;
                var16 = var1 != var8;
                var8 = null;
                if(!var16) { _fun0037_ip = 89; continue _fun0037 }
case 53:
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
case 89:
                var16 = var14.image;
                var16 = var1 != var16;
                if(!var16) { _fun0037_ip = 208; continue _fun0037 }
case 209:
                var16 = var1 != var8;
case 208:
                if(!var16) { _fun0037_ip = 210; continue _fun0037 }
case 211:
                var12['large_image'] = var8;
case 210:
                var16 = var14.type;
                var8 = _closure1_slot37;
                if(!(var16 !== var8)) { _fun0037_ip = 75; continue _fun0037 }
case 212:
                var8 = var14.name;
                var12['large_text'] = var8;
case 75:
                var8 = var1 != var4;
                var16 = undefined;
                if(!var8) { _fun0037_ip = 121; continue _fun0037 }
case 213:
                var16 = var4.uri;
case 121:
                var4 = _closure1_slot24;
                if(!(var1 != var4)) { _fun0037_ip = 214; continue _fun0037 }
case 215:
                var4 = _closure1_slot24;
                var4 = var4.partyId;
                if(!(var1 == var4)) { _fun0037_ip = 216; continue _fun0037 }
case 214:
                var17 = _closure1_slot17;
                var8 = _closure1_slot9;
                var4 = var8.getId;
                var11 = var4.bind(var8)();
                var4 = global;
                var4 = var4.HermesInternal;
                var8 = var4.concat;
                var4 = '';
                var8 = var8.bind(var4)(var17, var11);
                _fun0037_ip = 217; continue _fun0037;
case 216:
                var4 = _closure1_slot24;
                var8 = var4.partyId;
case 217:
                var17 = var19.length;
                var4 = 128;
                var11 = var19;
                if(!(var17 > var4)) { _fun0037_ip = 218; continue _fun0037 }
case 219:
                var17 = var19.substring;
                var4 = 125;
                var17 = var17.bind(var19)(var18, var4);
                var4 = '...';
                var11 = var17 + var4;
case 218:
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
                if(var6) { _fun0037_ip = 220; continue _fun0037 }
case 221:
                var3['sync_id'] = var5;
                var5 = _closure1_slot21;
                var6 = var5.PLAY;
                var5 = var5.SYNC;
                var5 = var6 | var5;
                var3['flags'] = var5;
                var3['metadata'] = var4;
case 220:
                return var3;
case 206:
                var3 = _closure1_slot24;
                var3 = var1 != var3;
                var1 = null;
                if(!var3) { _fun0037_ip = 138; continue _fun0037 }
case 222:
                var4 = _closure1_slot58;
                var2 = _closure1_slot24;
                var3 = var2.userId;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 138:
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
case 0:
            var1 = arg1;
            var7 = var1.accountId;
            var6 = var1.isPremium;
            var2 = _closure1_slot44;
            var2 = var2[var7];
            var3 = null;
            if(!(var3 != var2)) { _fun0038_ip = 223; continue _fun0038 }
case 39:
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
case 223:
            var1 = false;
            return var1;
        }
    };
    var4['SPOTIFY_PROFILE_UPDATE'] = var11;
    var11 = function handleSpotifyPlayerState(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
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
            if(!var9) { _fun0039_ip = 98; continue _fun0039 }
case 224:
            var10 = _closure1_slot45;
            var10 = var10[var13];
            if(!(var3 == var10)) { _fun0039_ip = 191; continue _fun0039 }
case 178:
            var11 = _closure1_slot45;
            var10 = new Array(1);
            var10[0] = var2;
            var11[var13] = var10;
            var1 = true;
            _fun0039_ip = 98; continue _fun0039;
case 191:
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
            if(!(var3 != var16)) { _fun0039_ip = 225; continue _fun0039 }
case 226:
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 23;
            var10 = var17[var10];
            var10 = var11.bind(var6)(var10);
            var10 = var10.bind(var6)(var16, var2);
            var5 = false;
            if(var10) { _fun0039_ip = 26; continue _fun0039 }
case 227:
            var10 = global;
            var11 = var10.Object;
            var10 = var11.assign;
            var10 = var10.bind(var11)(var16, var2);
            var5 = true;
            _fun0039_ip = 26; continue _fun0039;
case 225:
            var10 = _closure1_slot45;
            var11 = var10[var13];
            var10 = var11.push;
            var10 = var10.bind(var11)(var2);
            var5 = true;
case 26:
            var10 = _closure1_slot61;
            var9 = var2.id;
            var9 = var10.bind(var6)(var13, var9);
            var1 = var5;
case 98:
            var17 = _closure1_slot48;
            if(var7) { _fun0039_ip = 228; continue _fun0039 }
case 229:
            var5 = var3 == var17;
            var9 = null;
            if(var5) { _fun0039_ip = 120; continue _fun0039 }
case 230:
            var5 = var17.stop;
            var5 = var5.bind(var17)();
            var9 = null;
            _fun0039_ip = 120; continue _fun0039;
case 228:
            var9 = var4;
            if(!(var3 != var17)) { _fun0039_ip = 120; continue _fun0039 }
case 231:
            var16 = var17.start;
            var11 = _closure1_slot28;
            var5 = _closure1_slot64;
            var5 = var16.bind(var17)(var11, var5);
            var9 = var4;
case 120:
            var11 = _closure1_slot10;
            var5 = var11.getAccount;
            var4 = _closure1_slot20;
            var4 = var4.SPOTIFY;
            var16 = var5.bind(var11)(var13, var4);
            _closure2_slot1 = var16;
            if(!(var3 != var16)) { _fun0039_ip = 232; continue _fun0039 }
case 233:
            var4 = _closure1_slot46;
            var5 = var4[var13];
            var11 = var3 != var9;
            var4 = null;
            if(!var11) { _fun0039_ip = 234; continue _fun0039 }
case 235:
            var11 = {};
            var11['account'] = var16;
            var11['track'] = var9;
            var16 = _closure1_slot56;
            var16 = var16.bind(var6)(var5, var12);
            var11['startTime'] = var16;
            var11['context'] = var15;
            var11['repeat'] = var14;
            var4 = var11;
case 234:
            var14 = var3 != var2;
            if(!var14) { _fun0039_ip = 236; continue _fun0039 }
case 237:
            var11 = _closure1_slot24;
            var14 = var3 != var11;
case 236:
            if(!var14) { _fun0039_ip = 238; continue _fun0039 }
case 239:
            var11 = 0;
            var14 = var11 === var12;
case 238:
            if(!var14) { _fun0039_ip = 240; continue _fun0039 }
case 241:
            var14 = !var7;
case 240:
            if(var14) { _fun0039_ip = 242; continue _fun0039 }
case 243:
            var11 = _closure1_slot46;
            var11[var13] = var4;
case 242:
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
            if(!(var3 != var9)) { _fun0039_ip = 244; continue _fun0039 }
case 245:
            if(var14) { _fun0039_ip = 244; continue _fun0039 }
case 246:
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
            _fun0039_ip = 247; continue _fun0039;
case 244:
            var15 = _closure1_slot42;
            var14 = var15.stop;
            var14 = var14.bind(var15)();
case 247:
            var14 = _closure1_slot24;
            if(!(var3 != var14)) { _fun0039_ip = 248; continue _fun0039 }
case 249:
            if(var7) { _fun0039_ip = 250; continue _fun0039 }
case 251:
            var7 = 0;
            if(!(!(var12 > var7))) { _fun0039_ip = 252; continue _fun0039 }
case 250:
            if(!(var3 != var2)) { _fun0039_ip = 252; continue _fun0039 }
case 253:
            if(!(var3 != var4)) { _fun0039_ip = 248; continue _fun0039 }
case 254:
            var2 = _closure1_slot24;
            var7 = var2.trackId;
            var2 = var4.track;
            var2 = var2.id;
            if(!(var7 === var2)) { _fun0039_ip = 252; continue _fun0039 }
case 248:
            var7 = _closure1_slot43;
            var2 = var7.isStarted;
            var2 = var2.bind(var7)();
            if(!var2) { _fun0039_ip = 153; continue _fun0039 }
case 255:
            var12 = _closure1_slot38;
            var7 = var12.info;
            var2 = 'Listen along stop cancelled as playback of track resumed';
            var2 = var7.bind(var12)(var2);
            var7 = _closure1_slot43;
            var2 = var7.stop;
            var2 = var2.bind(var7)();
            _fun0039_ip = 153; continue _fun0039;
case 252:
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
case 153:
            var7 = _closure1_slot23;
            var2 = var1;
            if(!(var11 !== var7)) { _fun0039_ip = 256; continue _fun0039 }
case 257:
            if(!(var3 == var5)) { _fun0039_ip = 258; continue _fun0039 }
case 259:
            var2 = var1;
            if(!(var3 != var4)) { _fun0039_ip = 256; continue _fun0039 }
case 258:
            if(!(var3 != var5)) { _fun0039_ip = 260; continue _fun0039 }
case 261:
            if(!(var3 != var4)) { _fun0039_ip = 260; continue _fun0039 }
case 262:
            var7 = var5.track;
            var11 = var7.id;
            var7 = var4.track;
            var7 = var7.id;
            if(!(var11 === var7)) { _fun0039_ip = 260; continue _fun0039 }
case 263:
            var5 = var5.startTime;
            var4 = var4.startTime;
            var2 = var1;
            if(!(var5 !== var4)) { _fun0039_ip = 256; continue _fun0039 }
case 260:
            var3 = var3 != var9;
            if(!var3) { _fun0039_ip = 264; continue _fun0039 }
case 265:
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
case 264:
            var2 = undefined;
case 256:
            return var2;
case 232:
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
case 0:
            var2 = arg1;
            var1 = var2.activity;
            var7 = var2.metadata;
            var2 = _closure1_slot55;
            var10 = undefined;
            var2 = var2.bind(var10)();
            var5 = null;
            if(!(var5 != var2)) { _fun0040_ip = 266; continue _fun0040 }
case 44:
            var6 = var2.socket;
            var3 = var2.device;
            var11 = var1.sync_id;
            var1 = var1.party;
            var2 = var5 == var11;
            if(var2) { _fun0040_ip = 5; continue _fun0040 }
case 224:
            var2 = var5 == var1;
case 5:
            if(var2) { _fun0040_ip = 63; continue _fun0040 }
case 58:
            var8 = var1.id;
            var2 = var5 == var8;
case 63:
            if(var2) { _fun0040_ip = 64; continue _fun0040 }
case 267:
            var8 = _closure1_slot16;
            var1 = var1.id;
            var1 = var8.bind(var10)(var1);
            var2 = !var1;
case 64:
            var1 = !var2;
            if(var2) { _fun0040_ip = 268; continue _fun0040 }
case 93:
            var2 = var5 != var7;
            var13 = undefined;
            if(!var2) { _fun0040_ip = 83; continue _fun0040 }
case 92:
            var13 = var7.context_uri;
case 83:
            var2 = _closure1_slot24;
            if(!(var5 != var2)) { _fun0040_ip = 269; continue _fun0040 }
case 67:
            var2 = _closure1_slot63;
            var2 = var2.bind(var10)();
case 269:
            var2 = var5 != var7;
            if(!var2) { _fun0040_ip = 270; continue _fun0040 }
case 271:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 20;
            var8 = var12[var8];
            var12 = var9.bind(var10)(var8);
            var10 = var12.play;
            var9 = var6.accountId;
            var8 = var6.accessToken;
            var7 = var7.type;
            if(!(var5 == var7)) { _fun0040_ip = 99; continue _fun0040 }
case 272:
            var5 = _closure1_slot19;
            var7 = var5.TRACK;
case 99:
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
case 270:
            var1 = var2;
case 268:
            return var1;
case 266:
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
case 0:
            var1 = arg1;
            var5 = var1.settings;
            var3 = null;
            var4 = var3 == var5;
            var1 = undefined;
            var2 = undefined;
            if(var4) { _fun0041_ip = 38; continue _fun0041 }
case 273:
            var2 = var5.desktopSettings;
case 38:
            if(!(var3 == var2)) { _fun0041_ip = 186; continue _fun0041 }
case 39:
            if(!(var3 == var5)) { _fun0041_ip = 27; continue _fun0041 }
case 198:
            var6 = _closure1_slot48;
            if(!(var3 != var6)) { _fun0041_ip = 183; continue _fun0041 }
case 169:
            var4 = var6.stop;
            var4 = var4.bind(var6)();
case 183:
            _closure1_slot48 = var3;
            _fun0041_ip = 27; continue _fun0041;
case 186:
            var6 = _closure1_slot48;
            if(!(var3 != var6)) { _fun0041_ip = 274; continue _fun0041 }
case 110:
            var4 = var6.stop;
            var4 = var4.bind(var6)();
case 274:
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0041_ip = 57; continue _fun0041 }
case 50:
            var4 = var5.desktopSettings;
case 57:
            var7 = var4.sourceId;
            var4 = var4.sound;
            if(!(var3 != var7)) { _fun0041_ip = 271; continue _fun0041 }
case 182:
            var6 = _closure1_slot8;
            var5 = var6.getObservedAppNameForWindow;
            var6 = var5.bind(var6)(var7);
            var5 = _closure1_slot26;
            var5 = var5.name;
            if(!(var6 === var5)) { _fun0041_ip = 271; continue _fun0041 }
case 275:
            if(var4) { _fun0041_ip = 106; continue _fun0041 }
case 271:
            var5 = _closure1_slot48;
            if(!(var3 != var5)) { _fun0041_ip = 276; continue _fun0041 }
case 227:
            var4 = var5.stop;
            var4 = var4.bind(var5)();
case 276:
            _closure1_slot48 = var3;
            _fun0041_ip = 27; continue _fun0041;
case 106:
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
case 27:
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