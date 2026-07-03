// app/modules/guild_rooms/GuildRoomStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function handleSelectedChannelStoreChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot10;
            var1 = var3.getVoiceChannelId;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = _closure1_slot17;
            var4 = var5.delete;
            var4 = var4.bind(var5)(var3);
            var2 = _closure1_slot16;
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
    var _closure1_slot20 = var1;
    var1 = ['users'];
    var _closure1_slot0 = var1;
    var1 = ['users'];
    var _closure1_slot1 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = var2.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot11 = var7;
    var7 = {};
    var _closure1_slot12 = var7;
    var7 = {};
    var _closure1_slot13 = var7;
    var7 = {};
    var _closure1_slot14 = var7;
    var7 = null;
    var _closure1_slot15 = var7;
    var7 = {};
    var _closure1_slot16 = var7;
    var2 = var2.Map;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var13 = var7;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot17 = var2;
    var2 = false;
    var _closure1_slot18 = var2;
    var2 = 9;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildRoomStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot19;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var6 = var4.waitFor;
            var5 = _closure1_slot8;
            var3 = _closure1_slot9;
            var2 = _closure1_slot10;
            var2 = var6.bind(var4)(var5, var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot20;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getRoom';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot13;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var1 = _closure1_slot12;
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
                var3 = _closure1_slot14;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var1 = _closure1_slot11;
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
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getMediaSessionId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot17;
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
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure1_slot16;
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
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 10;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleConnect(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.room;
            var4 = var1.guildId;
            var6 = var2.users;
            var7 = _closure1_slot7;
            var5 = _closure1_slot0;
            var1 = undefined;
            var8 = var7.bind(var1)(var2, var5);
            var7 = _closure1_slot13;
            var5 = var2.roomId;
            var7[var5] = var8;
            var5 = _closure1_slot14;
            var2 = var2.roomId;
            var5[var2] = var6;
            var2 = null;
            var4 = var2 != var4;
            if(!var4) { _fun0007_ip = 16; continue _fun0007 }
case 4:
            var5 = _closure1_slot15;
            var4 = var2 != var5;
case 16:
            if(!var4) { _fun0007_ip = 17; continue _fun0007 }
case 18:
            _closure1_slot15 = var2;
case 17:
            return var1;
        }
    };
    var2['GUILD_ROOM_CONNECT'] = var8;
    var8 = function handleDisconnect(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userId;
            var4 = var1.roomId;
            var1 = _closure1_slot13;
            var3 = var1[var4];
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 19; continue _fun0008 }
case 20:
            var1 = global;
            var7 = var1.Map;
            var3 = _closure1_slot14;
            var8 = var3[var4];
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var9 = var6;
            var1 = new var9[var7](var8, var7);
            var1 = var1 instanceof Object ? var1 : var6;
            var6 = var1.delete;
            var6 = var6.bind(var1)(var5);
            var3[var4] = var1;
            var1 = _closure1_slot18;
            if(!var1) { _fun0008_ip = 21; continue _fun0008 }
case 22:
            var6 = _closure1_slot8;
            var3 = var6.getId;
            var3 = var3.bind(var6)();
            var1 = var5 === var3;
case 21:
            if(!var1) { _fun0008_ip = 23; continue _fun0008 }
case 24:
            var3 = _closure1_slot16;
            var1 = true;
            var3[var4] = var1;
            var1 = false;
            _closure1_slot18 = var1;
case 23:
            var1 = undefined;
            return var1;
case 19:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_ROOM_DISCONNECT'] = var8;
    var8 = function handleUpdate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.room;
            var9 = var3.users;
            var4 = _closure1_slot7;
            var2 = _closure1_slot1;
            var1 = undefined;
            var5 = var4.bind(var1)(var3, var2);
            var4 = _closure1_slot13;
            var2 = var3.roomId;
            var4[var2] = var5;
            var4 = _closure1_slot8;
            var2 = var4.getId;
            var5 = var2.bind(var4)();
            var4 = _closure1_slot14;
            var2 = var3.roomId;
            var8 = var4[var2];
            var2 = null;
            var7 = var2 == var8;
            var4 = undefined;
            if(var7) { _fun0009_ip = 25; continue _fun0009 }
case 18:
            var7 = var8.get;
            var4 = var7.bind(var8)(var5);
case 25:
            var8 = _closure1_slot14;
            var7 = var3.roomId;
            var8[var7] = var9;
            if(!(var2 != var4)) { _fun0009_ip = 26; continue _fun0009 }
case 27:
            var6 = _closure1_slot14;
            var3 = var3.roomId;
            var3 = var6[var3];
            if(!(var2 != var3)) { _fun0009_ip = 26; continue _fun0009 }
case 28:
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
case 26:
            return var1;
        }
    };
    var2['GUILD_ROOM_UPDATE'] = var8;
    var8 = function handleLocalPositionRequested(arg1) {
        var1 = arg1;
        var2 = var1.position;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_ROOM_LOCAL_POSITION_REQUESTED'] = var8;
    var8 = function handleToggleLayout(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var5 = var1.roomId;
            var1 = var1.clearLayout;
            var4 = _closure1_slot16;
            var3 = var4[var5];
            var3 = !var3;
            var4[var5] = var3;
            if(!var1) { _fun0010_ip = 29; continue _fun0010 }
case 30:
            var1 = true;
            _closure1_slot18 = var1;
case 29:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_ROOM_TOGGLE_LAYOUT'] = var8;
    var8 = function handleLocalUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = var1.roomId;
            var8 = var1.background;
            var11 = var1.position;
            var10 = var1.statusId;
            var7 = var1.statusText;
            var2 = _closure1_slot13;
            var2 = var2[var3];
            var9 = null;
            if(!(var9 != var2)) { _fun0011_ip = 31; continue _fun0011 }
case 9:
            var4 = _closure1_slot8;
            var2 = var4.getId;
            var6 = var2.bind(var4)();
            if(!(var9 != var8)) { _fun0011_ip = 32; continue _fun0011 }
case 33:
            var4 = _closure1_slot13;
            var2 = {};
            var13 = var4[var3];
            var14 = var2;
            var5 = copyDataProperties(var14, var13);
            var5 = 'background';
            var2[4] = var8;
            var4[var3] = var2;
case 32:
            if(!(var9 == var11)) { _fun0011_ip = 27; continue _fun0011 }
case 34:
            if(!(var9 == var10)) { _fun0011_ip = 27; continue _fun0011 }
case 35:
            if(!(var9 != var7)) { _fun0011_ip = 36; continue _fun0011 }
case 27:
            var2 = _closure1_slot14;
            var4 = var2[var3];
            var2 = var4.get;
            var8 = var2.bind(var4)(var6);
            if(!(var9 != var8)) { _fun0011_ip = 36; continue _fun0011 }
case 37:
            var2 = global;
            var5 = var2.Map;
            var2 = _closure1_slot14;
            var14 = var2[var3];
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var15 = var4;
            var2 = new var15[var5](var14, var13);
            var2 = var2 instanceof Object ? var2 : var4;
            var5 = var2.set;
            var4 = {};
            var4['userId'] = var6;
            if(!(var9 == var11)) { _fun0011_ip = 38; continue _fun0011 }
case 39:
            var11 = var8.position;
case 38:
            var4['position'] = var11;
            if(!(var9 == var10)) { _fun0011_ip = 40; continue _fun0011 }
case 41:
            var10 = var8.statusId;
case 40:
            var4['statusId'] = var10;
            if(!(var9 == var7)) { _fun0011_ip = 42; continue _fun0011 }
case 43:
            var7 = var8.statusText;
case 42:
            var4['statusText'] = var7;
            var4 = var5.bind(var2)(var6, var4);
            var1 = _closure1_slot14;
            var1[var3] = var2;
case 36:
            var1 = undefined;
            return var1;
case 31:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_ROOM_LOCAL_UPDATE'] = var8;
    var4 = function handleMediaSessionJoined() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = _closure1_slot9;
            var2 = var3.getChannelId;
            var4 = var2.bind(var3)();
            var2 = var3.getMediaSessionId;
            var3 = var2.bind(var3)();
            var5 = null;
            var2 = var5 != var4;
            if(!var2) { _fun0012_ip = 44; continue _fun0012 }
case 30:
            var2 = var5 != var3;
case 44:
            if(!var2) { _fun0012_ip = 45; continue _fun0012 }
case 46:
            var2 = _closure1_slot17;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
case 45:
            var1 = undefined;
            return var1;
        }
    };
    var2['MEDIA_SESSION_JOINED'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_rooms/GuildRoomStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();