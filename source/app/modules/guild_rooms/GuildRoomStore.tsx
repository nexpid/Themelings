// app/modules/guild_rooms/GuildRoomStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function handleSelectedChannelStoreChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot11;
            var1 = var3.getVoiceChannelId;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = _closure1_slot18;
            var4 = var5.delete;
            var4 = var4.bind(var5)(var3);
            var2 = _closure1_slot17;
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
    var _closure1_slot22 = var1;
    var1 = ['users'];
    var _closure1_slot0 = var1;
    var1 = ['users'];
    var _closure1_slot1 = var1;
    var1 = ['users'];
    var _closure1_slot2 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = var4.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var13 = var8;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var8 = {};
    var _closure1_slot14 = var8;
    var8 = {};
    var _closure1_slot15 = var8;
    var8 = null;
    var _closure1_slot16 = var8;
    var8 = {};
    var _closure1_slot17 = var8;
    var4 = var4.Map;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var13 = var8;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot18 = var4;
    var4 = false;
    var _closure1_slot19 = var4;
    var4 = {};
    var _closure1_slot20 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildRoomStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot21;
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
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var6 = var4.waitFor;
            var5 = _closure1_slot9;
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var2 = var6.bind(var4)(var5, var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot22;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getRoom';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot14;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var1 = _closure1_slot13;
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
                var3 = _closure1_slot15;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var1 = _closure1_slot12;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getPendingPosition';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getMediaSessionId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot18;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isVisible';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure1_slot17;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 == var2;
                if(var1) { _fun0006_ip = 15; continue _fun0006 }
case 7:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getPendingNote';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure1_slot20;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0007_ip = 15; continue _fun0007 }
case 7:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 10;
    var4 = var6[var4];
    var12 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleConnect(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var2 = var1.room;
            var4 = var1.guildId;
            var6 = var2.users;
            var7 = _closure1_slot8;
            var5 = _closure1_slot0;
            var1 = undefined;
            var8 = var7.bind(var1)(var2, var5);
            var7 = _closure1_slot14;
            var5 = var2.roomId;
            var7[var5] = var8;
            var5 = _closure1_slot15;
            var2 = var2.roomId;
            var5[var2] = var6;
            var2 = null;
            var4 = var2 != var4;
            if(!var4) { _fun0008_ip = 16; continue _fun0008 }
case 4:
            var5 = _closure1_slot16;
            var4 = var2 != var5;
case 16:
            if(!var4) { _fun0008_ip = 17; continue _fun0008 }
case 18:
            _closure1_slot16 = var2;
case 17:
            return var1;
        }
    };
    var4['GUILD_ROOM_CONNECT'] = var9;
    var9 = function handleConnectFailure(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.roomId;
            var2 = _closure1_slot14;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 != var4)) { _fun0009_ip = 19; continue _fun0009 }
case 15:
            var4 = _closure1_slot9;
            var2 = var4.getId;
            var5 = var2.bind(var4)();
            var2 = global;
            var6 = var2.Map;
            var2 = _closure1_slot15;
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
case 19:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_ROOM_CONNECT_FAILURE'] = var9;
    var9 = function handleDisconnect(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var4 = var1.userId;
            var2 = var1.roomId;
            var3 = _closure1_slot14;
            var5 = var3[var2];
            var3 = null;
            if(!(var3 != var5)) { _fun0010_ip = 20; continue _fun0010 }
case 21:
            var3 = global;
            var7 = var3.Map;
            var5 = _closure1_slot15;
            var8 = var5[var2];
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var9 = var6;
            var3 = new var9[var7](var8, var7);
            var3 = var3 instanceof Object ? var3 : var6;
            var6 = var3.delete;
            var6 = var6.bind(var3)(var4);
            var5[var2] = var3;
            var3 = _closure1_slot19;
            if(!var3) { _fun0010_ip = 22; continue _fun0010 }
case 17:
            var6 = _closure1_slot9;
            var5 = var6.getId;
            var5 = var5.bind(var6)();
            var3 = var4 === var5;
case 22:
            if(!var3) { _fun0010_ip = 23; continue _fun0010 }
case 24:
            var5 = _closure1_slot17;
            var3 = true;
            var5[var2] = var3;
            var3 = false;
            _closure1_slot19 = var3;
case 23:
            var5 = _closure1_slot9;
            var3 = var5.getId;
            var3 = var3.bind(var5)();
            if(!(var4 === var3)) { _fun0010_ip = 25; continue _fun0010 }
case 26:
            var1 = _closure1_slot20;
            var1 = delete var1[var2];
case 25:
            var1 = undefined;
            return var1;
case 20:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_ROOM_DISCONNECT'] = var9;
    var9 = function handleUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = var1.room;
            var9 = var3.users;
            var4 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = undefined;
            var5 = var4.bind(var1)(var3, var2);
            var4 = _closure1_slot14;
            var2 = var3.roomId;
            var4[var2] = var5;
            var4 = _closure1_slot9;
            var2 = var4.getId;
            var5 = var2.bind(var4)();
            var4 = _closure1_slot15;
            var2 = var3.roomId;
            var8 = var4[var2];
            var2 = null;
            var7 = var2 == var8;
            var4 = undefined;
            if(var7) { _fun0011_ip = 27; continue _fun0011 }
case 18:
            var7 = var8.get;
            var4 = var7.bind(var8)(var5);
case 27:
            var8 = _closure1_slot15;
            var7 = var3.roomId;
            var8[var7] = var9;
            if(!(var2 != var4)) { _fun0011_ip = 28; continue _fun0011 }
case 29:
            var6 = _closure1_slot15;
            var3 = var3.roomId;
            var3 = var6[var3];
            if(!(var2 != var3)) { _fun0011_ip = 28; continue _fun0011 }
case 30:
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
case 28:
            return var1;
        }
    };
    var4['GUILD_ROOM_UPDATE'] = var9;
    var9 = function handleUpdateFailure(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var1 = var2.originalRoom;
            var3 = var2.originalRoomUsers;
            var5 = _closure1_slot14;
            var4 = var1.roomId;
            var5 = var5[var4];
            var4 = null;
            if(!(var4 != var5)) { _fun0012_ip = 31; continue _fun0012 }
case 32:
            var5 = _closure1_slot14;
            var4 = var1.roomId;
            var5[var4] = var1;
            var2 = _closure1_slot15;
            var1 = var1.roomId;
            var2[var1] = var3;
            var1 = undefined;
            return var1;
case 31:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_ROOM_UPDATE_FAILURE'] = var9;
    var9 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var2 = var1.room;
        var4 = var2.users;
        var6 = _closure1_slot8;
        var5 = _closure1_slot2;
        var1 = undefined;
        var7 = var6.bind(var1)(var2, var5);
        var6 = _closure1_slot14;
        var5 = var2.roomId;
        var6[var5] = var7;
        var3 = _closure1_slot15;
        var2 = var2.roomId;
        var3[var2] = var4;
        return var1;
    };
    var4['GUILD_ROOM_FETCH_SUCCESS'] = var9;
    var9 = function handleLocalPositionRequested(arg1) {
        var1 = arg1;
        var2 = var1.position;
        _closure1_slot16 = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROOM_LOCAL_POSITION_REQUESTED'] = var9;
    var9 = function handleToggleLayout(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var5 = var1.roomId;
            var1 = var1.clearLayout;
            var4 = _closure1_slot17;
            var3 = var4[var5];
            var3 = !var3;
            var4[var5] = var3;
            if(!var1) { _fun0013_ip = 33; continue _fun0013 }
case 34:
            var1 = true;
            _closure1_slot19 = var1;
case 33:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_ROOM_TOGGLE_LAYOUT'] = var9;
    var9 = function handleLocalUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var3 = var1.roomId;
            var8 = var1.background;
            var11 = var1.position;
            var10 = var1.statusId;
            var7 = var1.statusText;
            var2 = _closure1_slot14;
            var2 = var2[var3];
            var9 = null;
            if(!(var9 != var2)) { _fun0014_ip = 35; continue _fun0014 }
case 9:
            var4 = _closure1_slot9;
            var2 = var4.getId;
            var6 = var2.bind(var4)();
            if(!(var9 != var8)) { _fun0014_ip = 36; continue _fun0014 }
case 31:
            var4 = _closure1_slot14;
            var2 = {};
            var13 = var4[var3];
            var14 = var2;
            var5 = copyDataProperties(var14, var13);
            var5 = 'background';
            var2[4] = var8;
            var4[var3] = var2;
case 36:
            if(!(var9 == var11)) { _fun0014_ip = 29; continue _fun0014 }
case 37:
            if(!(var9 == var10)) { _fun0014_ip = 29; continue _fun0014 }
case 38:
            if(!(var9 != var7)) { _fun0014_ip = 39; continue _fun0014 }
case 29:
            var2 = _closure1_slot15;
            var4 = var2[var3];
            var2 = var4.get;
            var8 = var2.bind(var4)(var6);
            if(!(var9 != var8)) { _fun0014_ip = 39; continue _fun0014 }
case 40:
            var2 = global;
            var5 = var2.Map;
            var2 = _closure1_slot15;
            var14 = var2[var3];
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var15 = var4;
            var2 = new var15[var5](var14, var13);
            var2 = var2 instanceof Object ? var2 : var4;
            var5 = var2.set;
            var4 = {};
            var4['userId'] = var6;
            if(!(var9 == var11)) { _fun0014_ip = 41; continue _fun0014 }
case 42:
            var11 = var8.position;
case 41:
            var4['position'] = var11;
            if(!(var9 == var10)) { _fun0014_ip = 43; continue _fun0014 }
case 44:
            var10 = var8.statusId;
case 43:
            var4['statusId'] = var10;
            if(!(var9 == var7)) { _fun0014_ip = 45; continue _fun0014 }
case 46:
            var7 = var8.statusText;
case 45:
            var4['statusText'] = var7;
            var4 = var5.bind(var2)(var6, var4);
            var1 = _closure1_slot15;
            var1[var3] = var2;
case 39:
            var1 = undefined;
            return var1;
case 35:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_ROOM_LOCAL_UPDATE'] = var9;
    var9 = function handleMediaSessionJoined() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = _closure1_slot10;
            var2 = var3.getChannelId;
            var4 = var2.bind(var3)();
            var2 = var3.getMediaSessionId;
            var3 = var2.bind(var3)();
            var5 = null;
            var2 = var5 != var4;
            if(!var2) { _fun0015_ip = 47; continue _fun0015 }
case 34:
            var2 = var5 != var3;
case 47:
            if(!var2) { _fun0015_ip = 48; continue _fun0015 }
case 49:
            var2 = _closure1_slot18;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
case 48:
            var1 = undefined;
            return var1;
        }
    };
    var4['MEDIA_SESSION_JOINED'] = var9;
    var9 = function handlePendingNoteCreate(arg1) {
        var1 = arg1;
        var3 = var1.roomId;
        var2 = var1.note;
        var1 = _closure1_slot20;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROOM_PENDING_NOTE_CREATE'] = var9;
    var5 = function handleNoteCreateStart(arg1) {
        var1 = arg1;
        var2 = var1.roomId;
        var1 = _closure1_slot20;
        var1 = delete var1[var2];
        var1 = undefined;
        return var1;
    };
    var4['GUILD_ROOM_NOTE_CREATE_START'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var13 = var5;
    var11 = var4;
    var4 = new var13[var8](var12, var11, var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 11;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_rooms/GuildRoomStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['DEFAULT_ROOM'] = var2;
    return var1;
})();