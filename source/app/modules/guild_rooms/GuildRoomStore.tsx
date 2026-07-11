// app/modules/guild_rooms/GuildRoomStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function handleSelectedChannelStoreChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot13;
            var1 = var3.getVoiceChannelId;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = _closure1_slot23;
            var4 = var5.delete;
            var4 = var4.bind(var5)(var3);
            var2 = _closure1_slot22;
            var4 = var2[var3];
            var1 = var1 == var4;
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var4;
case 8:
            var2[var3] = var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var5 = function handleNoteCreateComplete(arg1) {
        var1 = arg1;
        var2 = var1.roomId;
        var1 = _closure1_slot25;
        var1 = delete var1[var2];
        var1 = undefined;
        return var1;
    };
    var1 = ['users', 'objects'];
    var _closure1_slot2 = var1;
    var1 = ['users', 'objects'];
    var _closure1_slot3 = var1;
    var1 = ['users'];
    var _closure1_slot4 = var1;
    var4 = global;
    var11 = var4.Object;
    var9 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = var4.Map;
    var9 = var2.prototype;
    var9 = Object.create(var9, {constructor: {value: var2}});
    var15 = var9;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot14 = var2;
    var2 = {};
    var _closure1_slot15 = var2;
    var9 = new Array(0);
    var _closure1_slot16 = var9;
    var9 = var4.Map;
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var15 = var11;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot17 = var9;
    var9 = {};
    var _closure1_slot18 = var9;
    var9 = {};
    var _closure1_slot19 = var9;
    var9 = {};
    var _closure1_slot20 = var9;
    var9 = null;
    var _closure1_slot21 = var9;
    var9 = {};
    var _closure1_slot22 = var9;
    var4 = var4.Map;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var15 = var9;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot23 = var4;
    var4 = false;
    var _closure1_slot24 = var4;
    var4 = {};
    var _closure1_slot25 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildRoomStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 12:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var6 = var4.waitFor;
            var5 = _closure1_slot11;
            var3 = _closure1_slot12;
            var2 = _closure1_slot13;
            var2 = var6.bind(var4)(var5, var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot27;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getRoom';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot18;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var1 = _closure1_slot15;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getRoomUsers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot19;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var1 = _closure1_slot14;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getRoomObjects';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot20;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                var1 = _closure1_slot17;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getPendingPosition';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getMediaSessionId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot23;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isVisible';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure1_slot22;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 == var2;
                if(var1) { _fun0007_ip = 15; continue _fun0007 }
case 7:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getPendingNote';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure1_slot25;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0008_ip = 15; continue _fun0008 }
case 7:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getNotes';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = this;
                var2 = var3.getRoomObjects;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var3 = var4.get;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 9;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = var1.GuildRoomObjectTypes;
                var1 = var1.NOTE;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0009_ip = 5; continue _fun0009 }
case 16:
                var1 = _closure1_slot16;
case 5:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 11;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handleConnect(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.room;
            var4 = var1.guildId;
            var8 = var2.users;
            var6 = var2.objects;
            var7 = _closure1_slot10;
            var5 = _closure1_slot2;
            var1 = undefined;
            var9 = var7.bind(var1)(var2, var5);
            var7 = _closure1_slot18;
            var5 = var2.roomId;
            var7[var5] = var9;
            var7 = _closure1_slot19;
            var5 = var2.roomId;
            var7[var5] = var8;
            var5 = _closure1_slot20;
            var2 = var2.roomId;
            var5[var2] = var6;
            var2 = null;
            var4 = var2 != var4;
            if(!var4) { _fun0010_ip = 17; continue _fun0010 }
case 18:
            var5 = _closure1_slot21;
            var4 = var2 != var5;
case 17:
            if(!var4) { _fun0010_ip = 19; continue _fun0010 }
case 20:
            _closure1_slot21 = var2;
case 19:
            return var1;
        }
    };
    var4['GUILD_ROOM_CONNECT'] = var11;
    var11 = function handleConnectFailure(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = var1.roomId;
            var2 = _closure1_slot18;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 != var4)) { _fun0011_ip = 21; continue _fun0011 }
case 15:
            var4 = _closure1_slot11;
            var2 = var4.getId;
            var5 = var2.bind(var4)();
            var2 = global;
            var6 = var2.Map;
            var2 = _closure1_slot19;
            var7 = var2[var3];
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var8 = var4;
            var1 = new var8[var6](var7, var6);
            var1 = var1 instanceof Object ? var1 : var4;
            var4 = var1.delete;
            var4 = var4.bind(var1)(var5);
            var2[var3] = var1;
            var1 = undefined;
            return var1;
case 21:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_ROOM_CONNECT_FAILURE'] = var11;
    var11 = function handleDisconnect(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var4 = var1.userId;
            var2 = var1.roomId;
            var3 = _closure1_slot18;
            var5 = var3[var2];
            var3 = null;
            if(!(var3 != var5)) { _fun0012_ip = 22; continue _fun0012 }
case 23:
            var3 = global;
            var7 = var3.Map;
            var5 = _closure1_slot19;
            var8 = var5[var2];
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var9 = var6;
            var3 = new var9[var7](var8, var7);
            var3 = var3 instanceof Object ? var3 : var6;
            var6 = var3.delete;
            var6 = var6.bind(var3)(var4);
            var5[var2] = var3;
            var3 = _closure1_slot24;
            if(!var3) { _fun0012_ip = 24; continue _fun0012 }
case 25:
            var6 = _closure1_slot11;
            var5 = var6.getId;
            var5 = var5.bind(var6)();
            var3 = var4 === var5;
case 24:
            if(!var3) { _fun0012_ip = 26; continue _fun0012 }
case 27:
            var5 = _closure1_slot22;
            var3 = true;
            var5[var2] = var3;
            var3 = false;
            _closure1_slot24 = var3;
case 26:
            var5 = _closure1_slot11;
            var3 = var5.getId;
            var3 = var3.bind(var5)();
            if(!(var4 === var3)) { _fun0012_ip = 28; continue _fun0012 }
case 29:
            var1 = _closure1_slot25;
            var1 = delete var1[var2];
case 28:
            var1 = undefined;
            return var1;
case 22:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_ROOM_DISCONNECT'] = var11;
    var11 = function handleUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = var1.room;
            var9 = var3.users;
            var5 = var3.objects;
            var4 = _closure1_slot10;
            var2 = _closure1_slot3;
            var1 = undefined;
            var7 = var4.bind(var1)(var3, var2);
            var4 = _closure1_slot18;
            var2 = var3.roomId;
            var4[var2] = var7;
            var4 = _closure1_slot20;
            var2 = var3.roomId;
            var4[var2] = var5;
            var4 = _closure1_slot11;
            var2 = var4.getId;
            var5 = var2.bind(var4)();
            var4 = _closure1_slot19;
            var2 = var3.roomId;
            var8 = var4[var2];
            var2 = null;
            var7 = var2 == var8;
            var4 = undefined;
            if(var7) { _fun0013_ip = 30; continue _fun0013 }
case 20:
            var7 = var8.get;
            var4 = var7.bind(var8)(var5);
case 30:
            var8 = _closure1_slot19;
            var7 = var3.roomId;
            var8[var7] = var9;
            if(!(var2 != var4)) { _fun0013_ip = 31; continue _fun0013 }
case 32:
            var6 = _closure1_slot19;
            var3 = var3.roomId;
            var3 = var6[var3];
            if(!(var2 != var3)) { _fun0013_ip = 31; continue _fun0013 }
case 33:
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
case 31:
            return var1;
        }
    };
    var4['GUILD_ROOM_UPDATE'] = var11;
    var11 = function handleUpdateFailure(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var1 = var2.originalRoom;
            var6 = var2.originalRoomUsers;
            var4 = _closure1_slot18;
            var3 = var1.roomId;
            var8 = var4[var3];
            var3 = null;
            if(!(var3 != var8)) { _fun0014_ip = 34; continue _fun0014 }
case 35:
            var7 = _closure1_slot18;
            var5 = var1.roomId;
            var4 = {};
            var11 = var4;
            var10 = var8;
            var8 = copyDataProperties(var11, var10);
            var9 = var1.background;
            var8 = 'background';
            var4[7] = var9;
            var7[var5] = var4;
            var5 = _closure1_slot11;
            var4 = var5.getId;
            var5 = var4.bind(var5)();
            var4 = var6.get;
            var6 = var4.bind(var6)(var5);
            if(!(var3 != var6)) { _fun0014_ip = 36; continue _fun0014 }
case 37:
            var7 = _closure1_slot19;
            var4 = var1.roomId;
            var4 = var7[var4];
            if(!(var3 != var4)) { _fun0014_ip = 38; continue _fun0014 }
case 26:
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var6);
            _fun0014_ip = 38; continue _fun0014;
case 36:
            var3 = global;
            var6 = var3.Map;
            var3 = _closure1_slot19;
            var2 = var1.roomId;
            var11 = var3[var2];
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var12 = var4;
            var2 = new var12[var6](var11, var10);
            var2 = var2 instanceof Object ? var2 : var4;
            var4 = var2.delete;
            var4 = var4.bind(var2)(var5);
            var1 = var1.roomId;
            var3[var1] = var2;
case 38:
            var1 = undefined;
            return var1;
case 34:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_ROOM_UPDATE_FAILURE'] = var11;
    var11 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var2 = var1.room;
        var4 = var2.users;
        var6 = _closure1_slot10;
        var5 = _closure1_slot4;
        var1 = undefined;
        var7 = var6.bind(var1)(var2, var5);
        var6 = _closure1_slot18;
        var5 = var2.roomId;
        var6[var5] = var7;
        var3 = _closure1_slot19;
        var2 = var2.roomId;
        var3[var2] = var4;
        return var1;
    };
    var4['GUILD_ROOM_FETCH_SUCCESS'] = var11;
    var11 = function handleLocalPositionRequested(arg1) {
        var1 = arg1;
        var2 = var1.position;
        _closure1_slot21 = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROOM_LOCAL_POSITION_REQUESTED'] = var11;
    var11 = function handleToggleLayout(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var5 = var1.roomId;
            var1 = var1.clearLayout;
            var4 = _closure1_slot22;
            var3 = var4[var5];
            var3 = !var3;
            var4[var5] = var3;
            if(!var1) { _fun0015_ip = 39; continue _fun0015 }
case 40:
            var1 = true;
            _closure1_slot24 = var1;
case 39:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_ROOM_TOGGLE_LAYOUT'] = var11;
    var11 = function handleLocalUpdate(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var3 = var1.roomId;
            var7 = var1.background;
            var12 = var1.position;
            var11 = var1.statusId;
            var8 = var1.statusText;
            var2 = _closure1_slot18;
            var2 = var2[var3];
            var9 = null;
            if(!(var9 != var2)) { _fun0016_ip = 41; continue _fun0016 }
case 9:
            var4 = _closure1_slot11;
            var2 = var4.getId;
            var6 = var2.bind(var4)();
            if(!(var9 != var7)) { _fun0016_ip = 42; continue _fun0016 }
case 16:
            var4 = _closure1_slot18;
            var2 = {};
            var13 = var4[var3];
            var14 = var2;
            var5 = copyDataProperties(var14, var13);
            var5 = 'background';
            var2[4] = var7;
            var4[var3] = var2;
case 42:
            if(!(var9 == var12)) { _fun0016_ip = 19; continue _fun0016 }
case 17:
            if(!(var9 != var11)) { _fun0016_ip = 43; continue _fun0016 }
case 19:
            var2 = _closure1_slot19;
            var4 = var2[var3];
            var2 = var4.get;
            var7 = var2.bind(var4)(var6);
            if(!(var9 != var7)) { _fun0016_ip = 43; continue _fun0016 }
case 44:
            var2 = global;
            var5 = var2.Map;
            var2 = _closure1_slot19;
            var14 = var2[var3];
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var15 = var4;
            var2 = new var15[var5](var14, var13);
            var2 = var2 instanceof Object ? var2 : var4;
            var5 = var2.set;
            var4 = {};
            var14 = var4;
            var13 = var7;
            var10 = copyDataProperties(var14, var13);
            if(!(var9 == var12)) { _fun0016_ip = 45; continue _fun0016 }
case 46:
            var12 = var7.position;
case 45:
            var10 = 'position';
            var4[9] = var12;
            if(!(var9 == var11)) { _fun0016_ip = 47; continue _fun0016 }
case 48:
            var11 = var7.statusId;
case 47:
            var10 = 'statusId';
            var4[9] = var11;
            if(!(var9 == var8)) { _fun0016_ip = 49; continue _fun0016 }
case 50:
            var8 = var7.statusText;
case 49:
            var7 = 'statusText';
            var4[6] = var8;
            var4 = var5.bind(var2)(var6, var4);
            var1 = _closure1_slot19;
            var1[var3] = var2;
case 43:
            var1 = undefined;
            return var1;
case 41:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_ROOM_LOCAL_UPDATE'] = var11;
    var11 = function handleMediaSessionJoined() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = _closure1_slot12;
            var2 = var3.getChannelId;
            var4 = var2.bind(var3)();
            var2 = var3.getMediaSessionId;
            var3 = var2.bind(var3)();
            var5 = null;
            var2 = var5 != var4;
            if(!var2) { _fun0017_ip = 51; continue _fun0017 }
case 40:
            var2 = var5 != var3;
case 51:
            if(!var2) { _fun0017_ip = 52; continue _fun0017 }
case 53:
            var2 = _closure1_slot23;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
case 52:
            var1 = undefined;
            return var1;
        }
    };
    var4['MEDIA_SESSION_JOINED'] = var11;
    var10 = function handlePendingNoteCreate(arg1) {
        var1 = arg1;
        var3 = var1.roomId;
        var2 = var1.note;
        var1 = _closure1_slot25;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROOM_PENDING_NOTE_CREATE'] = var10;
    var4['GUILD_ROOM_PENDING_NOTE_DELETE'] = var5;
    var4['GUILD_ROOM_NOTE_CREATE_COMPLETE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_rooms/GuildRoomStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['DEFAULT_ROOM'] = var2;
    return var1;
})();