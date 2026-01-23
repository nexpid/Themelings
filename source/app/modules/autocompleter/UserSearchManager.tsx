// app/modules/autocompleter/UserSearchManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
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
            var9 = _closure1_slot19;
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
            var7 = _closure1_slot19;
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
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function getTransformedUser(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var6 = _closure1_slot13;
            var5 = var6.isBlockedOrIgnored;
            var2 = var4.id;
            var2 = var5.bind(var6)(var2);
            if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 41:
            var2 = {};
            var5 = var4.id;
            var2['id'] = var5;
            var6 = var4.discriminator;
            var5 = '0';
            if(!(var5 === var6)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var5 = var4.username;
            _fun0005_ip = 44; continue _fun0005;
case 42:
            var10 = var4.username;
            var9 = var4.discriminator;
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var7 = '';
            var6 = '#';
            var5 = var8.bind(var7)(var10, var6, var9);
case 44:
            var2['username'] = var5;
            var5 = {};
            var2['nicknames'] = var5;
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var5 = 12;
            var5 = var7[var5];
            var7 = undefined;
            var6 = var6.bind(var7)(var5);
            var5 = var6.getGlobalName;
            var5 = var5.bind(var6)(var4);
            if(!(var1 != var5)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var5 = var4.globalName;
            var2['globalName'] = var5;
case 45:
            var5 = var4.bot;
            if(!var5) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var5 = true;
            var2['isBot'] = var5;
case 47:
            var5 = _closure1_slot10;
            var5 = var4 instanceof var5;
            if(var5) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var5 = 'flags';
            var5 = var5 in var4;
            if(var5) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var5 = false;
            var2['isProvisional'] = var5;
            _fun0005_ip = 53; continue _fun0005;
case 51:
            var6 = _closure1_slot2;
            var8 = _closure1_slot3;
            var5 = 13;
            var5 = var8[var5];
            var9 = var6.bind(var7)(var5);
            var8 = var9.hasFlag;
            var5 = var4.flags;
            var10 = var1 != var5;
            var6 = 0;
            if(!var10) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var6 = var5;
case 54:
            var5 = _closure1_slot15;
            var5 = var5.PROVISIONAL_ACCOUNT;
            var5 = var8.bind(var9)(var6, var5);
            var2['isProvisional'] = var5;
            _fun0005_ip = 53; continue _fun0005;
case 49:
            var5 = var4.isProvisional;
            var2['isProvisional'] = var5;
case 53:
            var8 = _closure1_slot13;
            var6 = var8.isFriend;
            var5 = var4.id;
            var5 = var6.bind(var8)(var5);
            if(!var5) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var5 = true;
            var2['isFriend'] = var5;
            var8 = _closure1_slot13;
            var6 = var8.getNickname;
            var5 = var4.id;
            var5 = var6.bind(var8)(var5);
            var2['friendNickname'] = var5;
case 56:
            var5 = _closure1_slot10;
            var5 = var4 instanceof var5;
            if(var5) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var5 = 'flags';
            var5 = var5 in var4;
            if(var5) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var5 = false;
            var2['isStaff'] = var5;
            _fun0005_ip = 62; continue _fun0005;
case 60:
            var6 = _closure1_slot2;
            var8 = _closure1_slot3;
            var5 = 13;
            var5 = var8[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.hasFlag;
            var8 = var4.flags;
            var9 = var1 != var8;
            var5 = 0;
            if(!var9) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var5 = var8;
case 63:
            var3 = _closure1_slot15;
            var3 = var3.STAFF;
            var3 = var6.bind(var7)(var5, var3);
            var2['isStaff'] = var3;
            _fun0005_ip = 62; continue _fun0005;
case 58:
            var3 = var4.isStaff;
            var3 = var3.bind(var4)();
            var2['isStaff'] = var3;
case 62:
            return var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function setNick(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = arg3;
            var5 = null;
            if(!(var5 != var2)) { _fun0006_ip = 65; continue _fun0006 }
case 40:
            var3 = var2.nicknames;
            var4 = var5 != var1;
            var2 = null;
            if(!var4) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var4 = '';
            var2 = null;
            if(!(var4 !== var1)) { _fun0006_ip = 66; continue _fun0006 }
case 68:
            var2 = var1;
case 66:
            var1 = arg2;
            var3[var1] = var2;
case 65:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function getDMUpdates(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var3 = null;
            if(!(var3 != var4)) { _fun0007_ip = 69; continue _fun0007 }
case 31:
            var6 = _closure1_slot9;
            var5 = var4.type;
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            if(!var5) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var4 = var4.recipients;
            if(!(var3 === var4)) { _fun0007_ip = 71; continue _fun0007 }
case 4:
            var4 = new Array(0);
case 71:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot21;
                    var5 = _closure1_slot14;
                    var2 = var5.getUser;
                    var1 = arg1;
                    var2 = var2.bind(var5)(var1);
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var6 = _closure2_slot0;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0008_ip = 72; continue _fun0008 }
case 70:
                    var5 = _closure1_slot22;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var5.bind(var1)(var4, var3);
case 72:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
case 69:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function updateMembersList(arg1, arg2) {
        var4 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var5 = _closure1_slot21;
                var4 = var3.user;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var5 = null;
                if(!(var5 != var4)) { _fun0009_ip = 73; continue _fun0009 }
case 34:
                var6 = _closure1_slot22;
                var5 = _closure2_slot0;
                var3 = var3.nick;
                var3 = var6.bind(var1)(var4, var5, var3);
                var3 = _closure2_slot1;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
case 73:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function getUsersFromMessage(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var4 = var1.message;
            var8 = var1.nicknameContextId;
            var7 = undefined;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var7;
            var6 = _closure1_slot11;
            var3 = var6.getChannel;
            var1 = var4.channel_id;
            var9 = var3.bind(var6)(var1);
            var3 = null;
            if(!(var3 == var8)) { _fun0010_ip = 74; continue _fun0010 }
case 75:
            var1 = var3 == var9;
            var6 = undefined;
            if(var1) { _fun0010_ip = 76; continue _fun0010 }
case 77:
            var1 = var9.isPrivate;
            var6 = var1.bind(var9)();
case 76:
            var1 = true;
            if(!(var1 !== var6)) { _fun0010_ip = 78; continue _fun0010 }
case 79:
            var6 = var3 == var9;
            var1 = undefined;
            if(var6) { _fun0010_ip = 80; continue _fun0010 }
case 81:
            var6 = var9.getGuildId;
            var1 = var6.bind(var9)();
case 80:
            _fun0010_ip = 82; continue _fun0010;
case 78:
            var10 = var3 == var9;
            var6 = undefined;
            if(var10) { _fun0010_ip = 44; continue _fun0010 }
case 83:
            var6 = var9.id;
case 44:
            var1 = var6;
case 82:
            var8 = var1;
case 74:
            _closure2_slot0 = var8;
            var1 = new Array(0);
            _closure2_slot1 = var1;
            var6 = var4.author;
            if(!(var3 != var6)) { _fun0010_ip = 84; continue _fun0010 }
case 85:
            var9 = _closure1_slot21;
            var6 = var4.author;
            var6 = var9.bind(var7)(var6);
            if(!(var3 != var6)) { _fun0010_ip = 84; continue _fun0010 }
case 86:
            var9 = var1.push;
            var9 = var9.bind(var1)(var6);
            if(!(var3 != var8)) { _fun0010_ip = 84; continue _fun0010 }
case 87:
            var5 = _closure1_slot22;
            var5 = var5.bind(var7)(var6, var8);
case 84:
            var4 = var4.mentions;
            if(!(var3 != var4)) { _fun0010_ip = 88; continue _fun0010 }
case 20:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = _closure1_slot21;
                    var1 = undefined;
                    var2 = arg1;
                    var4 = var4.bind(var1)(var2);
                    var6 = null;
                    if(!(var6 != var4)) { _fun0011_ip = 89; continue _fun0011 }
case 31:
                    var7 = _closure2_slot1;
                    var5 = var7.push;
                    var5 = var5.bind(var7)(var4);
                    var5 = _closure2_slot0;
                    if(!(var6 != var5)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                    var3 = _closure1_slot22;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var1)(var4, var2);
case 89:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
case 88:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.isPrivate;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.UserFlags;
    var _closure1_slot15 = var2;
    var2 = {};
    var5 = 'UPDATE_USERS';
    var2['UPDATE_USERS'] = var5;
    var5 = 'USER_RESULTS';
    var2['USER_RESULTS'] = var5;
    var5 = 'QUERY_SET';
    var2['QUERY_SET'] = var5;
    var5 = 'QUERY_CLEAR';
    var2['QUERY_CLEAR'] = var5;
    var5 = 'REQUEST_DEBUG_STATE';
    var2['REQUEST_DEBUG_STATE'] = var5;
    var5 = 'DEBUG_STATE';
    var2['DEBUG_STATE'] = var5;
    var _closure1_slot16 = var2;
    var2 = function() {
        var4 = _closure1_slot8;
        var3 = function UserSearchContext(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arguments[2];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0012_ip = 91; continue _fun0012 }
case 92:
                var2 = 10;
case 91:
                var7 = _closure1_slot7;
                var6 = _closure2_slot0;
                var6 = var7.bind(var1)(var3, var6);
                var5 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.data;
                        var3 = null;
                        var1 = var3 != var2;
                        if(!var1) { _fun0013_ip = 93; continue _fun0013 }
case 94:
                        var5 = var2.type;
                        var4 = _closure1_slot16;
                        var4 = var4.USER_RESULTS;
                        var1 = var5 === var4;
case 93:
                        if(!var1) { _fun0013_ip = 95; continue _fun0013 }
case 96:
                        var5 = var2.uuid;
                        var4 = _closure3_slot0;
                        var4 = var4._uuid;
                        var1 = var5 === var4;
case 95:
                        if(!var1) { _fun0013_ip = 97; continue _fun0013 }
case 43:
                        var4 = _closure3_slot0;
                        var5 = var4._currentQuery;
                        var4 = false;
                        if(!(var4 !== var5)) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                        var5 = _closure3_slot0;
                        var4 = var5._callback;
                        var2 = var2.payload;
                        var2 = var4.bind(var5)(var2);
case 98:
                        var2 = _closure3_slot0;
                        var2 = var2._currentQuery;
                        if(!(var3 != var2)) { _fun0013_ip = 100; continue _fun0013 }
case 101:
                        var2 = _closure3_slot0;
                        var2['_currentQuery'] = var3;
case 100:
                        var2 = _closure3_slot0;
                        var1 = var2._setNextQuery;
                        var1 = var1.bind(var2)();
case 97:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['handleMessages'] = var5;
                var5 = arg1;
                var3['_worker'] = var5;
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var4 = 14;
                var4 = var6[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.v4;
                var4 = var4.bind(var5)();
                var3['_uuid'] = var4;
                var4 = arg2;
                var3['_callback'] = var4;
                var3['_limit'] = var2;
                var2 = null;
                var3['_currentQuery'] = var2;
                var3['_nextQuery'] = var2;
                var2 = false;
                var3['_subscribed'] = var2;
                var2 = var3.subscribe;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setLimit';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var1['_limit'] = var2;
                var4 = var1._nextQuery;
                var3 = null;
                if(!(var3 != var4)) { _fun0014_ip = 102; continue _fun0014 }
case 103:
                var1 = var1._nextQuery;
                var1['limit'] = var2;
case 102:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(7);
        var2[0] = var1;
        var1 = {};
        var6 = 'subscribe';
        var1['key'] = var6;
        var6 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var3 = var2._worker;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0015_ip = 103; continue _fun0015 }
case 92:
                var1 = var2._subscribed;
case 103:
                if(var1) { _fun0015_ip = 69; continue _fun0015 }
case 67:
                var6 = var2._worker;
                var5 = var6.addEventListener;
                var4 = var2.handleMessages;
                var3 = 'message';
                var1 = false;
                var1 = var5.bind(var6)(var3, var4, var1);
                var1 = true;
                var2['_subscribed'] = var1;
                var1 = var2._setNextQuery;
                var1 = var1.bind(var2)();
case 69:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'unsubscribe';
        var1['key'] = var6;
        var6 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = this;
                var3 = var2._worker;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0016_ip = 103; continue _fun0016 }
case 92:
                var1 = var2._subscribed;
case 103:
                if(!var1) { _fun0016_ip = 72; continue _fun0016 }
case 67:
                var6 = var2._worker;
                var5 = var6.removeEventListener;
                var4 = var2.handleMessages;
                var3 = 'message';
                var1 = false;
                var3 = var5.bind(var6)(var3, var4, var1);
                var2['_subscribed'] = var1;
case 72:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'destroy';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.clearQuery;
            var1 = var1.bind(var2)();
            var1 = var2.unsubscribe;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'clearQuery';
        var1['key'] = var6;
        var6 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var4 = this;
                var1 = false;
                var4['_currentQuery'] = var1;
                var2 = null;
                var4['_nextQuery'] = var2;
                var1 = var4._worker;
                var1 = var2 != var1;
                if(!var1) { _fun0017_ip = 104; continue _fun0017 }
case 105:
                var1 = var4._subscribed;
case 104:
                if(!var1) { _fun0017_ip = 81; continue _fun0017 }
case 41:
                var3 = var4._worker;
                var2 = var3.postMessage;
                var1 = {};
                var4 = var4._uuid;
                var1['uuid'] = var4;
                var4 = _closure1_slot16;
                var4 = var4.QUERY_CLEAR;
                var1['type'] = var4;
                var1 = var2.bind(var3)(var1);
case 81:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'setQuery';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var7 = var1.query;
                var6 = var1.filters;
                var3 = var1.blacklist;
                var5 = var1.boosters;
                var4 = var1.boosterFallback;
                var1 = {};
                var1['query'] = var7;
                var1['filters'] = var6;
                var1['blacklist'] = var3;
                var3 = null;
                if(!(var3 == var5)) { _fun0018_ip = 7; continue _fun0018 }
case 71:
                var5 = {};
case 7:
                var1['boosters'] = var5;
                var5 = var3 != var4;
                var3 = 1;
                if(!var5) { _fun0018_ip = 79; continue _fun0018 }
case 69:
                var3 = var4;
case 79:
                var1['boosterFallback'] = var3;
                var3 = var2._limit;
                var1['limit'] = var3;
                var2['_nextQuery'] = var1;
                var1 = var2._setNextQuery;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = '_setNextQuery';
        var1['key'] = var6;
        var5 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var4 = this;
                var2 = var4._currentQuery;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0019_ip = 3; continue _fun0019 }
case 92:
                var5 = var4._currentQuery;
                var3 = false;
                var2 = var3 !== var5;
case 3:
                if(var2) { _fun0019_ip = 106; continue _fun0019 }
case 33:
                var3 = var4._nextQuery;
                var2 = var1 == var3;
case 106:
                if(var2) { _fun0019_ip = 46; continue _fun0019 }
case 2:
                var2 = var4._worker;
                if(!(var1 != var2)) { _fun0019_ip = 95; continue _fun0019 }
case 28:
                var2 = var4._subscribed;
                if(var2) { _fun0019_ip = 9; continue _fun0019 }
case 95:
                var2 = var4._subscribed;
                if(var2) { _fun0019_ip = 46; continue _fun0019 }
case 37:
                var2 = var4.subscribe;
                var2 = var2.bind(var4)();
                _fun0019_ip = 46; continue _fun0019;
case 9:
                var2 = var4._nextQuery;
                var4['_currentQuery'] = var2;
                var4['_nextQuery'] = var1;
                var3 = var4._worker;
                var2 = var3.postMessage;
                var1 = {};
                var5 = var4._uuid;
                var1['uuid'] = var5;
                var5 = _closure1_slot16;
                var5 = var5.QUERY_SET;
                var1['type'] = var5;
                var4 = var4._currentQuery;
                var1['payload'] = var4;
                var1 = var2.bind(var3)(var1);
case 46:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[6] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot17 = var2;
    var5 = 20;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function UserSearchManager(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot7;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot20;
                var1 = var1.bind(var4)();
                if(var1) { _fun0020_ip = 9; continue _fun0020 }
case 76:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0020_ip = 74; continue _fun0020;
case 9:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 74:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function LOGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2._handleLogout;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['LOGOUT'] = var4;
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2._handleConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var4 = function CONNECTION_OPEN_SUPPLEMENTAL(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleConnectionOpenSupplemental;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CONNECTION_OPEN_SUPPLEMENTAL'] = var4;
                var4 = function OVERLAY_INITIALIZE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleOverlayInitialize;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['OVERLAY_INITIALIZE'] = var4;
                var4 = function CURRENT_USER_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleCurrentUserUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CURRENT_USER_UPDATE'] = var4;
                var4 = function GUILD_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleGuildCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_CREATE'] = var4;
                var4 = function GUILD_MEMBERS_CHUNK_BATCH(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleGuildMembersChunkBatch;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_MEMBERS_CHUNK_BATCH'] = var4;
                var4 = function GUILD_MEMBER_ADD(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleGuildMemberUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_MEMBER_ADD'] = var4;
                var4 = function GUILD_MEMBER_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleGuildMemberUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_MEMBER_UPDATE'] = var4;
                var4 = function RELATIONSHIP_ADD(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleRelationshipAdd;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['RELATIONSHIP_ADD'] = var4;
                var4 = function RELATIONSHIP_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleRelationshipUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['RELATIONSHIP_UPDATE'] = var4;
                var4 = function RELATIONSHIP_REMOVE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleRelationshipRemove;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['RELATIONSHIP_REMOVE'] = var4;
                var4 = function CHANNEL_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleDMCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CHANNEL_CREATE'] = var4;
                var4 = function CHANNEL_UPDATES(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleDMUpdates;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CHANNEL_UPDATES'] = var4;
                var4 = function CHANNEL_RECIPIENT_ADD(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleRecipientChanges;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CHANNEL_RECIPIENT_ADD'] = var4;
                var4 = function PASSIVE_UPDATE_V2(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handlePassiveUpdateV2;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['PASSIVE_UPDATE_V2'] = var4;
                var4 = function THREAD_LIST_SYNC(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleThreadListSync;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['THREAD_LIST_SYNC'] = var4;
                var4 = function LOAD_FORUM_POSTS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleLoadForumPosts;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['LOAD_FORUM_POSTS'] = var4;
                var4 = function LOAD_MESSAGES_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleLoadMessagesSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['LOAD_MESSAGES_SUCCESS'] = var4;
                var4 = function SEARCH_MESSAGES_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleSearchMessagesSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['SEARCH_MESSAGES_SUCCESS'] = var4;
                var4 = function LOAD_THREADS_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleLoadThreadsSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['LOAD_THREADS_SUCCESS'] = var4;
                var4 = function LOAD_ARCHIVED_THREADS_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleLoadThreadsSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['LOAD_ARCHIVED_THREADS_SUCCESS'] = var4;
                var4 = function LOAD_PINNED_MESSAGES_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleLoadPinnedMessagesSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['LOAD_PINNED_MESSAGES_SUCCESS'] = var4;
                var4 = function GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleGuildScheduledEventUsersFetchSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS'] = var4;
                var4 = function MESSAGE_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleMessageCreateOrUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['MESSAGE_CREATE'] = var4;
                var4 = function MESSAGE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._handleMessageCreateOrUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['MESSAGE_UPDATE'] = var4;
                var1['actions'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.rebootWebworker;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['_handleLogout'] = var3;
                var3 = function() {
                    var1 = global;
                    var4 = var1.setTimeout;
                    var1 = undefined;
                    var3 = function() {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var3 = _closure1_slot14;
                            var1 = var3.getCurrentUser;
                            var3 = var1.bind(var3)();
                            var21 = null;
                            if(!(var21 != var3)) { _fun0021_ip = 107; continue _fun0021 }
case 67:
                            var1 = _closure1_slot21;
                            var20 = undefined;
                            var3 = var1.bind(var20)(var3);
                            var5 = {};
                            var1 = var3.id;
                            var5[var1] = var3;
                            var _closure5_slot0 = var5;
                            var1 = global;
                            var6 = var1.Object;
                            var4 = var6.values;
                            var7 = _closure1_slot14;
                            var3 = var7.getUsers;
                            var3 = var3.bind(var7)();
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                var5 = arg1;
                                var4 = _closure5_slot0;
                                var3 = var5.id;
                                var2 = _closure1_slot21;
                                var1 = undefined;
                                var2 = var2.bind(var1)(var5);
                                var4[var3] = var2;
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot12;
                            var2 = var3.getMutableAllGuildsAndMembers;
                            var19 = var2.bind(var3)();
                            var17 = var19;
                            var13 = 12;
                            var26 = undefined;
                            var25 = undefined;
                            var24 = undefined;
                            var23 = undefined;
                            for(var14 in var17)
case 108:
                            {
                                var6 = var26;
                                var4 = var25;
                                var3 = var24;
                                var2 = var23;
case 109:
                                var12 = var14;
                                var10 = var19[var12];
                                var26 = var6;
                                var25 = var4;
                                var24 = var3;
                                var23 = var2;
                                var6 = var26;
                                var4 = var25;
                                var3 = var24;
                                var2 = var23;
                                ForInLoopInit(obj_props_register=10, obj_register=9, iter_index_register=8, iter_size_register=7);
                                if(var11 === undefined) { _fun0021_ip = 108; continue _fun0021 }
case 110:
                                var26 = var6;
                                var25 = var4;
                                var24 = var3;
                                var23 = var2;
                                ForInLoopNextIter(next_value_register=6, obj_props_register=10, obj_register=9, iter_index_register=8, iter_size_register=7);
                                if(var7 === undefined) { _fun0021_ip = 108; continue _fun0021 }
case 111:
                                var25 = var7;
                                var24 = var5[var25];
                                var23 = var19[var12];
                                var25 = var23[var25];
                                var23 = var21 == var25;
                                var26 = undefined;
                                if(var23) { _fun0021_ip = 112; continue _fun0021 }
case 113:
                                var26 = var25.nick;
case 112:
                                var23 = var26;
                                if(!(var21 == var23)) { _fun0021_ip = 25; continue _fun0021 }
case 114:
                                var28 = _closure1_slot1;
                                var27 = _closure1_slot3;
                                var27 = var27[var13];
                                var28 = var28.bind(var20)(var27);
                                var27 = var28.getGlobalName;
                                var23 = var27.bind(var28)(var24);
case 25:
                                var6 = var26;
                                var4 = var25;
                                var3 = var24;
                                var2 = var23;
                                if(var21 == var24) { _fun0021_ip = 110; continue _fun0021 }
case 115:
                                var27 = _closure1_slot22;
                                var27 = var27.bind(var20)(var24, var12, var23);
                                var6 = var26;
                                var4 = var25;
                                var3 = var24;
                                var2 = var23;
                                _fun0021_ip = 110; continue _fun0021;
                            }
case 26:
                            var4 = _closure3_slot0;
                            var3 = var4.updateUsers;
                            var2 = var1.Object;
                            var1 = var2.values;
                            var2 = var1.bind(var2)(var5);
                            var1 = 'connection_open';
                            var1 = var3.bind(var4)(var2, var1);
case 107:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 3000;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['_handleConnectionOpen'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.guilds;
                    var _closure4_slot0 = var1;
                    var1 = global;
                    var4 = var1.setTimeout;
                    var1 = undefined;
                    var3 = function() {
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 15;
                        var5 = var6[var3];
                        var1 = undefined;
                        var9 = var4.bind(var1)(var5);
                        var8 = var9.flatMap;
                        var5 = _closure4_slot0;
                        var7 = function(arg1) {
                            var1 = arg1;
                            var4 = _closure1_slot24;
                            var3 = var1.members;
                            var2 = var1.id;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var7 = var8.bind(var9)(var5, var7);
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.flatMap;
                        var2 = function(arg1) {
                            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                                var3 = arg1;
                                var _closure6_slot0 = var3;
                                var1 = new Array(0);
                                var _closure6_slot1 = var1;
                                var4 = var3.activity_instances;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0022_ip = 116; continue _fun0022 }
case 117:
                                var3 = var4.forEach;
                                var2 = function(arg1) {
                                    var1 = arg1;
                                    var3 = var1.participants;
                                    var2 = var3.forEach;
                                    var1 = function(arg1) {
                                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                                            var1 = arg1;
                                            var2 = var1.member;
                                            var4 = null;
                                            if(!(var4 != var2)) { _fun0023_ip = 118; continue _fun0023 }
case 119:
                                            var5 = _closure1_slot21;
                                            var3 = var2.user;
                                            var6 = undefined;
                                            var3 = var5.bind(var6)(var3);
                                            if(!(var4 != var3)) { _fun0023_ip = 118; continue _fun0023 }
case 104:
                                            var5 = _closure1_slot22;
                                            var4 = _closure6_slot0;
                                            var4 = var4.id;
                                            var2 = var2.nick;
                                            var2 = var5.bind(var6)(var3, var4, var2);
                                            var2 = _closure6_slot1;
                                            var1 = var2.push;
                                            var1 = var1.bind(var2)(var3);
case 118:
                                            var1 = undefined;
                                            return var1;
                                        }
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    var1 = undefined;
                                    return var1;
                                };
                                var2 = var3.bind(var4)(var2);
case 116:
                                return var1;
                            }
                        };
                        var6 = var3.bind(var4)(var5, var2);
                        var5 = _closure3_slot0;
                        var4 = var5.updateUsers;
                        var3 = new Array(0);
                        var10 = 0;
                        var12 = var3;
                        var11 = var7;
                        var10 = arraySpread(var12, var11, var10);
                        var12 = var3;
                        var11 = var6;
                        var2 = arraySpread(var12, var11, var10);
                        var2 = 'connection_open_supplemental';
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2 = 3000;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['_handleConnectionOpenSupplemental'] = var3;
                var3 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.users;
                        var15 = var1.guildMembers;
                        var2 = global;
                        var1 = var2.Map;
                        var3 = var1.prototype;
                        var3 = Object.create(var3, {constructor: {value: var1}});
                        var30 = var3;
                        var1 = new var30[var1](var29);
                        var3 = var1 instanceof Object ? var1 : var3;
                        var4 = _closure1_slot18;
                        var1 = undefined;
                        var6 = var4.bind(var1)(var5);
                        var5 = var6.bind(var1)();
                        var4 = var5.done;
                        if(var4) { _fun0024_ip = 44; continue _fun0024 }
case 120:
                        var9 = var5.value;
                        var8 = var3.set;
                        var7 = var9.id;
                        var4 = _closure1_slot21;
                        var4 = var4.bind(var1)(var9);
                        var4 = var8.bind(var3)(var7, var4);
                        var7 = var6.bind(var1)();
                        var4 = var7.done;
                        var5 = var7;
                        if(!var4) { _fun0024_ip = 120; continue _fun0024 }
case 44:
                        var5 = _closure1_slot18;
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var13 = 16;
                        var4 = var4[var13];
                        var6 = var6.bind(var1)(var4);
                        var4 = var6.keys;
                        var4 = var4.bind(var6)(var15);
                        var12 = var5.bind(var1)(var4);
                        var5 = var12.bind(var1)();
                        var4 = var5.done;
                        var11 = null;
                        var10 = var5;
                        var9 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0024_ip = 121; continue _fun0024 }
case 48:
                        var22 = var10.value;
                        var21 = var15[var22];
                        var18 = var7;
                        var17 = var6;
                        var16 = var5;
                        if(!(var11 != var21)) { _fun0024_ip = 122; continue _fun0024 }
case 123:
                        var19 = _closure1_slot18;
                        var20 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var4 = var4[var13];
                        var20 = var20.bind(var1)(var4);
                        var4 = var20.keys;
                        var4 = var4.bind(var20)(var21);
                        var20 = var19.bind(var1)(var4);
                        var23 = var20.bind(var1)();
                        var4 = var23.done;
                        var19 = var23;
                        var9 = var19;
                        var8 = var20;
                        var18 = var7;
                        var17 = var6;
                        var16 = var5;
                        if(var4) { _fun0024_ip = 122; continue _fun0024 }
case 124:
                        var25 = var19.value;
                        var4 = var3.get;
                        var24 = var4.bind(var3)(var25);
                        var23 = var21[var25];
                        var4 = var11 != var24;
                        if(!var4) { _fun0024_ip = 125; continue _fun0024 }
case 126:
                        var4 = var11 != var23;
case 125:
                        if(!var4) { _fun0024_ip = 127; continue _fun0024 }
case 128:
                        var26 = var23.nick;
                        var4 = var11 != var26;
case 127:
                        if(!var4) { _fun0024_ip = 129; continue _fun0024 }
case 130:
                        var26 = _closure1_slot22;
                        var4 = var23.nick;
                        var4 = var26.bind(var1)(var24, var22, var4);
                        var4 = var3.set;
                        var4 = var4.bind(var3)(var25, var24);
case 129:
                        var26 = var20.bind(var1)();
                        var4 = var26.done;
                        var19 = var26;
                        var9 = var19;
                        var8 = var20;
                        var18 = var25;
                        var17 = var24;
                        var16 = var23;
                        if(!var4) { _fun0024_ip = 124; continue _fun0024 }
case 122:
                        var19 = var12.bind(var1)();
                        var4 = var19.done;
                        var7 = var18;
                        var6 = var17;
                        var5 = var16;
                        var10 = var19;
                        if(!var4) { _fun0024_ip = 48; continue _fun0024 }
case 121:
                        var6 = _closure3_slot0;
                        var5 = var6.updateUsers;
                        var7 = var2.Array;
                        var4 = var7.from;
                        var2 = var3.values;
                        var2 = var2.bind(var3)();
                        var4 = var4.bind(var7)(var2);
                        var2 = 'overlay_initialize';
                        var2 = var5.bind(var6)(var4, var2);
                        var2 = var3.clear;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var1['_handleOverlayInitialize'] = var3;
                var3 = function(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.user;
                        var2 = _closure1_slot21;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        var3 = null;
                        if(!(var3 != var2)) { _fun0025_ip = 7; continue _fun0025 }
case 34:
                        var5 = _closure3_slot0;
                        var4 = var5.updateUsers;
                        var3 = new Array(1);
                        var3[0] = var2;
                        var2 = 'current_user_update';
                        var2 = var4.bind(var5)(var3, var2);
case 7:
                        return var1;
                    }
                };
                var1['_handleCurrentUserUpdate'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.guild;
                    var6 = var1.members;
                    var5 = _closure3_slot0;
                    var4 = var5.updateUsers;
                    var3 = _closure1_slot24;
                    var2 = var1.id;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var6, var2);
                    var2 = 'guild_create';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['_handleGuildCreate'] = var3;
                var3 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.chunks;
                        var5 = new Array(0);
                        var2 = _closure1_slot18;
                        var1 = undefined;
                        var6 = var2.bind(var1)(var3);
                        var3 = var6.bind(var1)();
                        var2 = var3.done;
                        if(var2) { _fun0026_ip = 131; continue _fun0026 }
case 93:
                        var2 = var3.value;
                        var8 = var5.push;
                        var10 = _closure1_slot24;
                        var9 = var2.members;
                        var2 = var2.guildId;
                        var12 = var10.bind(var1)(var9, var2);
                        var2 = new Array(0);
                        var13 = var2;
                        var11 = 0;
                        var9 = arraySpread(var13, var12, var11);
                        var13 = var8;
                        var12 = var2;
                        var11 = var5;
                        var2 = apply(var13, var12, var11);
                        var8 = var6.bind(var1)();
                        var2 = var8.done;
                        var3 = var8;
                        if(!var2) { _fun0026_ip = 93; continue _fun0026 }
case 131:
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = 'guild_members_chunk_batch';
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    }
                };
                var1['_handleGuildMembersChunkBatch'] = var3;
                var3 = function(arg1) {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.guildId;
                        var6 = var1.user;
                        var4 = var1.nick;
                        var2 = _closure1_slot21;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var6);
                        var6 = null;
                        if(!(var6 != var2)) { _fun0027_ip = 132; continue _fun0027 }
case 93:
                        var3 = _closure1_slot22;
                        var3 = var3.bind(var1)(var2, var5, var4);
                        var5 = _closure3_slot0;
                        var4 = var5.updateUsers;
                        var3 = new Array(1);
                        var3[0] = var2;
                        var2 = 'guild_member_update';
                        var2 = var4.bind(var5)(var3, var2);
case 132:
                        return var1;
                    }
                };
                var1['_handleGuildMemberUpdate'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var5 = _closure3_slot0;
                    var4 = var5.updateUsers;
                    var6 = _closure1_slot24;
                    var3 = var1.members;
                    var2 = var1.guildId;
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3, var2);
                    var2 = 'passive_update_v2';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['_handlePassiveUpdateV2'] = var3;
                var3 = function(arg1) {
                    var3 = _closure1_slot21;
                    var1 = arg1;
                    var1 = var1.relationship;
                    var2 = var1.user;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = _closure3_slot0;
                    var4 = var5.updateUsers;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'relationship_add';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['_handleRelationshipAdd'] = var3;
                var3 = function(arg1) {
                    var3 = _closure1_slot21;
                    var4 = _closure1_slot14;
                    var2 = var4.getUser;
                    var1 = arg1;
                    var1 = var1.relationship;
                    var1 = var1.id;
                    var2 = var2.bind(var4)(var1);
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = _closure3_slot0;
                    var4 = var5.updateUsers;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'relationship_update';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['_handleRelationshipUpdate'] = var3;
                var3 = function(arg1) {
                    var3 = _closure1_slot21;
                    var4 = _closure1_slot14;
                    var2 = var4.getUser;
                    var1 = arg1;
                    var1 = var1.relationship;
                    var1 = var1.id;
                    var2 = var2.bind(var4)(var1);
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = _closure3_slot0;
                    var4 = var5.updateUsers;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'relationship_remove';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['_handleRelationshipRemove'] = var3;
                var3 = function(arg1) {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.channel;
                        var4 = var1.id;
                        var5 = _closure1_slot23;
                        var3 = _closure1_slot11;
                        var1 = var3.getChannel;
                        var3 = var1.bind(var3)(var4);
                        var1 = undefined;
                        var5 = var5.bind(var1)(var3);
                        var6 = var5.length;
                        var3 = 0;
                        if(!(var3 !== var6)) { _fun0028_ip = 133; continue _fun0028 }
case 134:
                        var6 = _closure1_slot21;
                        var7 = _closure1_slot14;
                        var3 = var7.getCurrentUser;
                        var3 = var3.bind(var7)();
                        var3 = var6.bind(var1)(var3);
                        var2 = _closure1_slot22;
                        var2 = var2.bind(var1)(var3, var4);
                        var2 = var5.push;
                        var2 = var2.bind(var5)(var3);
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = 'dm_create';
                        var2 = var3.bind(var4)(var5, var2);
case 133:
                        return var1;
                    }
                };
                var1['_handleDMCreate'] = var3;
                var3 = function(arg1) {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.channels;
                        var2 = _closure1_slot18;
                        var1 = undefined;
                        var7 = var2.bind(var1)(var3);
                        var3 = var7.bind(var1)();
                        var2 = var3.done;
                        var5 = 'dm_updates';
                        var4 = 0;
                        if(var2) { _fun0029_ip = 135; continue _fun0029 }
case 2:
                        var2 = var3.value;
                        var10 = _closure1_slot23;
                        var12 = _closure1_slot11;
                        var11 = var12.getChannel;
                        var9 = var2.id;
                        var9 = var11.bind(var12)(var9);
                        var10 = var10.bind(var1)(var9);
                        var9 = var10.length;
                        if(!(var4 !== var9)) { _fun0029_ip = 136; continue _fun0029 }
case 81:
                        var11 = _closure1_slot21;
                        var12 = _closure1_slot14;
                        var9 = var12.getCurrentUser;
                        var9 = var9.bind(var12)();
                        var9 = var11.bind(var1)(var9);
                        var11 = _closure1_slot22;
                        var2 = var2.id;
                        var2 = var11.bind(var1)(var9, var2);
                        var2 = var10.push;
                        var2 = var2.bind(var10)(var9);
                        var9 = _closure3_slot0;
                        var2 = var9.updateUsers;
                        var2 = var2.bind(var9)(var10, var5);
case 136:
                        var9 = var7.bind(var1)();
                        var2 = var9.done;
                        var3 = var9;
                        if(!var2) { _fun0029_ip = 2; continue _fun0029 }
case 135:
                        return var1;
                    }
                };
                var1['_handleDMUpdates'] = var3;
                var3 = function(arg1) {
                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.channelId;
                        var5 = var1.user;
                        var1 = var1.isMember;
                        if(!var1) { _fun0030_ip = 79; continue _fun0030 }
case 137:
                        var1 = _closure1_slot21;
                        var3 = undefined;
                        var1 = var1.bind(var3)(var5);
                        var2 = _closure1_slot22;
                        var2 = var2.bind(var3)(var1, var4);
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = 'recipient_changes';
                        var1 = var3.bind(var4)(var2, var1);
case 79:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleRecipientChanges'] = var3;
                var3 = function(arg1) {
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.guildId;
                        var _closure4_slot0 = var3;
                        var4 = var1.mostRecentMessages;
                        var1 = undefined;
                        var _closure4_slot1 = var1;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0031_ip = 138; continue _fun0031 }
case 105:
                        var5 = new Array(0);
                        _closure4_slot1 = var5;
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            var3 = _closure1_slot25;
                            var2 = {};
                            var1 = arg1;
                            var2['message'] = var1;
                            var1 = _closure4_slot0;
                            var2['nicknameContextId'] = var1;
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                var3 = _closure4_slot1;
                                var2 = var3.push;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = 'thread_list_sync';
                        var2 = var3.bind(var4)(var5, var2);
case 138:
                        return var1;
                    }
                };
                var1['_handleThreadListSync'] = var3;
                var3 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.guildId;
                    var _closure4_slot0 = var3;
                    var5 = var2.threads;
                    var4 = new Array(0);
                    var _closure4_slot1 = var4;
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.values;
                    var3 = var2.bind(var3)(var5);
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                            var2 = arg1;
                            var5 = var2.first_message;
                            var4 = var2.most_recent_message;
                            var2 = var2.owner;
                            var3 = null;
                            if(!(var3 != var5)) { _fun0032_ip = 69; continue _fun0032 }
case 117:
                            var7 = _closure1_slot25;
                            var6 = {};
                            var6['message'] = var5;
                            var5 = _closure4_slot0;
                            var6['nicknameContextId'] = var5;
                            var5 = undefined;
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.forEach;
                            var5 = function(arg1) {
                                var3 = _closure4_slot1;
                                var2 = var3.push;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var5 = var6.bind(var7)(var5);
case 69:
                            if(!(var3 != var4)) { _fun0032_ip = 139; continue _fun0032 }
case 138:
                            var6 = _closure1_slot25;
                            var5 = {};
                            var5['message'] = var4;
                            var4 = _closure4_slot0;
                            var5['nicknameContextId'] = var4;
                            var4 = undefined;
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.forEach;
                            var4 = function(arg1) {
                                var3 = _closure4_slot1;
                                var2 = var3.push;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var4 = var5.bind(var6)(var4);
case 139:
                            if(!(var3 != var2)) { _fun0032_ip = 140; continue _fun0032 }
case 141:
                            var5 = _closure1_slot24;
                            var4 = new Array(1);
                            var4[0] = var2;
                            var3 = _closure4_slot0;
                            var2 = undefined;
                            var3 = var5.bind(var2)(var4, var3);
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                var3 = _closure4_slot1;
                                var2 = var3.push;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
case 140:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure3_slot0;
                    var2 = var3.updateUsers;
                    var1 = 'load_forum_posts';
                    var1 = var2.bind(var3)(var4, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['_handleLoadForumPosts'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.messages;
                    var2 = var3.flatMap;
                    var1 = function(arg1) {
                        var3 = _closure1_slot25;
                        var2 = {};
                        var1 = arg1;
                        var2['message'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var2.bind(var3)(var1);
                    var3 = _closure3_slot0;
                    var2 = var3.updateUsers;
                    var1 = 'load_messages_success';
                    var1 = var2.bind(var3)(var4, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['_handleLoadMessagesSuccess'] = var3;
                var3 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.pins;
                    var4 = new Array(0);
                    var _closure4_slot0 = var4;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.message;
                        var3 = _closure1_slot25;
                        var2 = {};
                        var2['message'] = var1;
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = var3.push;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure3_slot0;
                    var2 = var3.updateUsers;
                    var1 = 'load_pinned_messages_success';
                    var1 = var2.bind(var3)(var4, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['_handleLoadPinnedMessagesSuccess'] = var3;
                var3 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.data;
                    var4 = new Array(0);
                    var _closure4_slot0 = var4;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.messages;
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            var3 = arg1;
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                var3 = _closure1_slot25;
                                var2 = {};
                                var1 = arg1;
                                var2['message'] = var1;
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.forEach;
                                var2 = function(arg1) {
                                    var3 = _closure4_slot0;
                                    var2 = var3.push;
                                    var1 = arg1;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure3_slot0;
                    var2 = var3.updateUsers;
                    var1 = 'search_messages_success';
                    var1 = var2.bind(var3)(var4, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['_handleSearchMessagesSuccess'] = var3;
                var3 = function(arg1) {
                    _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                        var2 = arg1;
                        var6 = var2.guildId;
                        var _closure4_slot0 = var6;
                        var9 = var2.firstMessages;
                        var8 = var2.mostRecentMessages;
                        var5 = var2.owners;
                        var4 = new Array(0);
                        var _closure4_slot1 = var4;
                        var2 = null;
                        if(!(var2 != var9)) { _fun0033_ip = 7; continue _fun0033 }
case 2:
                        var7 = var9.forEach;
                        var3 = function(arg1) {
                            var3 = _closure1_slot25;
                            var2 = {};
                            var1 = arg1;
                            var2['message'] = var1;
                            var1 = _closure4_slot0;
                            var2['nicknameContextId'] = var1;
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                var3 = _closure4_slot1;
                                var2 = var3.push;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var3 = var7.bind(var9)(var3);
case 7:
                        if(!(var2 != var8)) { _fun0033_ip = 138; continue _fun0033 }
case 95:
                        var7 = var8.forEach;
                        var3 = function(arg1) {
                            var3 = _closure1_slot25;
                            var2 = {};
                            var1 = arg1;
                            var2['message'] = var1;
                            var1 = _closure4_slot0;
                            var2['nicknameContextId'] = var1;
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                var3 = _closure4_slot1;
                                var2 = var3.push;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var3 = var7.bind(var8)(var3);
case 138:
                        if(!(var2 != var5)) { _fun0033_ip = 44; continue _fun0033 }
case 142:
                        var3 = _closure1_slot24;
                        var2 = undefined;
                        var3 = var3.bind(var2)(var5, var6);
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            var3 = _closure4_slot1;
                            var2 = var3.push;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
case 44:
                        var3 = _closure3_slot0;
                        var2 = var3.updateUsers;
                        var1 = 'load_threads_success';
                        var1 = var2.bind(var3)(var4, var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleLoadThreadsSuccess'] = var3;
                var3 = function(arg1) {
                    var3 = _closure1_slot25;
                    var2 = {};
                    var1 = arg1;
                    var1 = var1.message;
                    var2['message'] = var1;
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.updateUsers;
                    var2 = 'message_create_or_update';
                    var2 = var3.bind(var4)(var5, var2);
                    return var1;
                };
                var1['_handleMessageCreateOrUpdate'] = var3;
                var2 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.guildId;
                    var _closure4_slot0 = var3;
                    var3 = var2.guildScheduledEventUsers;
                    var4 = new Array(0);
                    var _closure4_slot1 = var4;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.user;
                            var7 = var1.member;
                            var3 = _closure1_slot21;
                            var1 = undefined;
                            var4 = var3.bind(var1)(var4);
                            var3 = null;
                            if(!(var3 != var4)) { _fun0034_ip = 118; continue _fun0034 }
case 143:
                            var6 = _closure1_slot22;
                            var5 = _closure4_slot0;
                            var8 = var3 == var7;
                            var3 = undefined;
                            if(var8) { _fun0034_ip = 144; continue _fun0034 }
case 75:
                            var3 = var7.nick;
case 144:
                            var3 = var6.bind(var1)(var4, var5, var3);
                            var3 = _closure4_slot1;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
case 118:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure3_slot0;
                    var2 = var3.updateUsers;
                    var1 = 'guild_scheduled_event_users_fetch_success';
                    var1 = var2.bind(var3)(var4, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['_handleGuildScheduledEventUsersFetchSuccess'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var1 = var2.rebootWebworker;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var2 = this;
                var3 = var2._worker;
                var1 = null;
                if(!(var1 != var3)) { _fun0035_ip = 68; continue _fun0035 }
case 119:
                var4 = var2._worker;
                var3 = var4.terminate;
                var3 = var3.bind(var4)();
                var2['_worker'] = var1;
case 68:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'rebootWebworker';
        var5['key'] = var7;
        var7 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var3 = this;
                var2 = var3._worker;
                var1 = null;
                if(!(var1 != var2)) { _fun0036_ip = 68; continue _fun0036 }
case 119:
                var4 = var3._worker;
                var2 = var4.terminate;
                var2 = var2.bind(var4)();
                var3['_worker'] = var1;
case 68:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3['_worker'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'updateUsers';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var6 = arg1;
                var10 = arg2;
                var1 = this;
                var3 = var1._worker;
                var9 = null;
                if(!(var9 != var3)) { _fun0037_ip = 145; continue _fun0037 }
case 103:
                var1 = _closure1_slot18;
                var4 = var6.filter;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 18;
                var2 = var8[var2];
                var8 = undefined;
                var2 = var7.bind(var8)(var2);
                var2 = var2.isNotNullish;
                var4 = var4.bind(var6)(var2);
                var7 = var1.bind(var8)(var4);
                var2 = var7.bind(var8)();
                var1 = var2.done;
                var6 = 19;
                if(var1) { _fun0037_ip = 146; continue _fun0037 }
case 147:
                var16 = var2.value;
                var11 = var9 == var16;
                var1 = undefined;
                if(var11) { _fun0037_ip = 131; continue _fun0037 }
case 148:
                var1 = var16.id;
case 131:
                if(!(var9 == var1)) { _fun0037_ip = 149; continue _fun0037 }
case 150:
                var11 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var6];
                var12 = var11.bind(var8)(var1);
                var11 = var12.addBreadcrumb;
                var1 = {'category': 'debug', 'message': 'User missing id'};
                var13 = {};
                var13['action'] = var10;
                var14 = {};
                var15 = var9 == var16;
                var14['userIsNull'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0037_ip = 151; continue _fun0037 }
case 48:
                var15 = var16.id;
case 151:
                var15 = var9 == var15;
                var14['idIsNull'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0037_ip = 52; continue _fun0037 }
case 123:
                var15 = var16.username;
case 52:
                var15 = var9 == var15;
                var14['usernameIsNull'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0037_ip = 152; continue _fun0037 }
case 153:
                var15 = var16.isBot;
case 152:
                var14['isBot'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0037_ip = 154; continue _fun0037 }
case 155:
                var15 = var16.isFriend;
case 154:
                var14['isFriend'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0037_ip = 156; continue _fun0037 }
case 157:
                var15 = var16.isProvisional;
case 156:
                var14['isProvisional'] = var15;
                var17 = var9 == var16;
                var15 = undefined;
                if(var17) { _fun0037_ip = 158; continue _fun0037 }
case 159:
                var15 = var16.globalName;
case 158:
                var15 = var9 == var15;
                var14['globalNameIsNull'] = var15;
                var15 = var4.length;
                var14['usersArrayLength'] = var15;
                var13['userFields'] = var14;
                var1['data'] = var13;
                var1 = var11.bind(var12)(var1);
case 149:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var2 = var11;
                if(!var1) { _fun0037_ip = 147; continue _fun0037 }
case 146:
                var2 = var3.postMessage;
                var1 = {};
                var5 = _closure1_slot16;
                var5 = var5.UPDATE_USERS;
                var1['type'] = var5;
                var1['payload'] = var4;
                var1 = var2.bind(var3)(var1);
case 145:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUserSearchContext';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var5 = arguments[1];
                var1 = this;
                var2 = undefined;
                if(!(var5 === var2)) { _fun0038_ip = 119; continue _fun0038 }
case 40:
                var5 = 10;
case 119:
                var2 = var1.initialize;
                var2 = var2.bind(var1)();
                var4 = var1._worker;
                var1 = null;
                if(!(var1 != var4)) { _fun0038_ip = 42; continue _fun0038 }
case 68:
                var3 = _closure1_slot17;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var7 = arg1;
                var9 = var2;
                var8 = var4;
                var6 = var5;
                var1 = new var9[var3](var8, var7, var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
case 42:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var8 = 'SearchContextManager: No webworker initialized';
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'requestDebugState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = null;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var13 = var5;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/autocompleter/UserSearchManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['UserSearchContext'] = var2;
    return var1;
})();