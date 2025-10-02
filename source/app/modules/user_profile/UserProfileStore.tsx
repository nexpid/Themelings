// app/modules/user_profile/UserProfileStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
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
            _closure1_slot33 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot33 = var1;
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
            var9 = _closure1_slot35;
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
            var7 = _closure1_slot35;
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
    var _closure1_slot34 = var1;
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
    var _closure1_slot35 = var1;
    var1 = function createUserWidgetFromServer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = var5.data;
            var4 = var1.type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 13;
            var2 = var2[var7];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var2 = var2.WidgetType;
            var2 = var2.CURRENT_GAMES;
            if(!(var2 !== var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var6)(var2);
            var2 = var2.WidgetType;
            var2 = var2.FAVORITE_GAMES;
            if(!(var2 !== var4)) { _fun0005_ip = 39; continue _fun0005 }
case 41:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var6)(var2);
            var2 = var2.WidgetType;
            var2 = var2.PLAYED_GAMES;
            if(!(var2 !== var4)) { _fun0005_ip = 39; continue _fun0005 }
case 42:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var6)(var2);
            var2 = var2.WidgetType;
            var2 = var2.WANT_TO_PLAY_GAMES;
            if(!(var2 !== var4)) { _fun0005_ip = 39; continue _fun0005 }
case 43:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var6)(var2);
            var2 = var2.WidgetType;
            var2 = var2.APPLICATION;
            if(!(var2 !== var4)) { _fun0005_ip = 44; continue _fun0005 }
case 24:
            return var6;
case 44:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var7 = var2.ApplicationWidget;
            var2 = {};
            var3 = var5.id;
            var2['id'] = var3;
            var2['type'] = var4;
            var3 = var5.data;
            var3 = var3.application_id;
            var2['applicationId'] = var3;
            var3 = var7.prototype;
            var3 = Object.create(var3, {constructor: {value: var7}});
            var9 = var3;
            var8 = var2;
            var2 = new var9[var7](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            return var2;
case 39:
            var2 = var5.data;
            var7 = var2.games;
            var3 = var7.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.game_id;
                var1['applicationId'] = var3;
                var3 = var2.comment;
                var1['comment'] = var3;
                var2 = var2.tags;
                var1['tags'] = var2;
                return var1;
            };
            var2 = var3.bind(var7)(var2);
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 14;
            var1 = var7[var1];
            var1 = var3.bind(var6)(var1);
            var3 = var1.BaseGameWidget;
            var1 = {};
            var5 = var5.id;
            var1['id'] = var5;
            var1['type'] = var4;
            var1['games'] = var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var9 = var2;
            var8 = var1;
            var1 = new var9[var3](var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function checkUserProfileEffectExpiry(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot19;
            var2 = var3.get;
            var3 = var2.bind(var3)(var4);
            var7 = null;
            if(!(var7 != var3)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var6 = var3.profileEffect;
            var9 = var7 == var6;
            var2 = undefined;
            var8 = undefined;
            if(var9) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var8 = var6.expiresAt;
case 47:
            if(!(var7 != var8)) { _fun0006_ip = 45; continue _fun0006 }
case 49:
            var8 = var6.expiresAt;
            var6 = 1000;
            var8 = var6 * var8;
            var6 = _closure1_slot14;
            var9 = var8 + var6;
            var6 = global;
            var10 = var6.Date;
            var8 = var10.now;
            var8 = var8.bind(var10)();
            var11 = var9 - var8;
            var8 = 0;
            if(!(!(var11 <= var8))) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var9 = _closure1_slot21;
            var8 = var9.get;
            var8 = var8.bind(var9)(var4);
            if(!(var7 != var8)) { _fun0006_ip = 45; continue _fun0006 }
case 52:
            var7 = var8.start;
            var10 = var6.Math;
            var9 = var10.min;
            var6 = _closure1_slot18;
            var6 = var9.bind(var10)(var6, var11);
            var5 = function() {
                var3 = _closure1_slot37;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var7.bind(var8)(var6, var5);
case 45:
            var5 = undefined;
            return var5;
case 50:
            var3['profileEffect'] = var2;
            var3 = _closure1_slot21;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            var2 = _closure1_slot32;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function checkGuildMemberProfileEffectExpiry(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var4;
            var5 = _closure1_slot20;
            var2 = var5.get;
            var7 = var2.bind(var5)(var6);
            var2 = null;
            if(!(var2 != var7)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var5 = var7.get;
            var8 = var5.bind(var7)(var4);
            if(!(var2 != var8)) { _fun0007_ip = 53; continue _fun0007 }
case 55:
            var5 = var8.profileEffect;
            var11 = var2 == var5;
            var9 = undefined;
            var10 = undefined;
            if(var11) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var10 = var5.expiresAt;
case 56:
            if(!(var2 != var10)) { _fun0007_ip = 53; continue _fun0007 }
case 58:
            var10 = var5.expiresAt;
            var5 = 1000;
            var10 = var5 * var10;
            var5 = _closure1_slot14;
            var11 = var10 + var5;
            var5 = global;
            var12 = var5.Date;
            var10 = var12.now;
            var10 = var10.bind(var12)();
            var14 = var11 - var10;
            var10 = 0;
            if(!(!(var14 <= var10))) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var11 = _closure1_slot22;
            var10 = var11.get;
            var12 = var10.bind(var11)(var6);
            var10 = var2 == var12;
            var11 = undefined;
            if(var10) { _fun0007_ip = 61; continue _fun0007 }
case 18:
            var10 = var12.get;
            var11 = var10.bind(var12)(var4);
case 61:
            if(!(var2 != var11)) { _fun0007_ip = 53; continue _fun0007 }
case 62:
            var10 = var11.start;
            var13 = var5.Math;
            var12 = var13.min;
            var5 = _closure1_slot18;
            var5 = var12.bind(var13)(var5, var14);
            var3 = function() {
                var4 = _closure1_slot38;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var3 = var10.bind(var11)(var5, var3);
case 53:
            var3 = undefined;
            return var3;
case 59:
            var5 = var7.set;
            var3 = {};
            var16 = var3;
            var15 = var8;
            var8 = copyDataProperties(var16, var15);
            var8 = 'profileEffect';
            var3[var8] = var9;
            var3 = var5.bind(var7)(var4, var3);
            var5 = _closure1_slot22;
            var3 = var5.get;
            var3 = var3.bind(var5)(var6);
            if(!(var2 != var3)) { _fun0007_ip = 39; continue _fun0007 }
case 63:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
case 39:
            var2 = _closure1_slot32;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function handleLogout() {
        var3 = _closure1_slot16;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot17;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot19;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot20;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot23;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot24;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot25;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = false;
        _closure1_slot30 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function handleMutualFriendsFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot17;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function handleMutualFriendsFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot17;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = function getMutualFriends(arg1) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 16;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = arg1;
        var4 = var3.bind(var4)(var2);
        var3 = var4.map;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['key'] = var3;
            var4 = _closure1_slot9;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var7 = var5;
            var6 = var2;
            var4 = new var7[var4](var6, var5);
            var4 = var4 instanceof Object ? var4 : var5;
            var1['user'] = var4;
            var4 = _closure1_slot12;
            var3 = var4.getStatus;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var1['status'] = var2;
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.sortBy;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.user;
            var2 = var1.username;
            var1 = var2.toLowerCase;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.value;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function handleMutualFriendsFetchSuccess(arg1) {
        var2 = arg1;
        var5 = _closure1_slot17;
        var4 = var5.delete;
        var1 = var2.userId;
        var1 = var4.bind(var5)(var1);
        var7 = _closure1_slot23;
        var6 = var7.set;
        var5 = var2.userId;
        var8 = _closure1_slot42;
        var4 = var2.mutualFriends;
        var1 = undefined;
        var4 = var8.bind(var1)(var4);
        var4 = var6.bind(var7)(var5, var4);
        var5 = _closure1_slot24;
        var4 = var5.set;
        var3 = var2.userId;
        var2 = var2.mutualFriends;
        var2 = var2.length;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot43 = var1;
    var1 = function handleProfileFetch(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var2 = var1.userProfile;
            var4 = var1.fetchStartedAt;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var3 = var2.guild_member_profile;
            var5 = null;
            var6 = var5 == var3;
            var8 = undefined;
            if(var6) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var8 = var3.guild_id;
case 64:
            if(!(var5 == var8)) { _fun0008_ip = 66; continue _fun0008 }
case 40:
            var8 = _closure1_slot15;
case 66:
            var9 = _closure1_slot16;
            var7 = var9.get;
            var6 = var2.user;
            var6 = var6.id;
            var7 = var7.bind(var9)(var6);
            if(!(var5 != var7)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var6 = var7.delete;
            var6 = var6.bind(var7)(var8);
case 67:
            var8 = _closure1_slot17;
            var7 = var8.delete;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var7.bind(var8)(var6);
            var6 = var2.mutual_guilds;
            if(!(var5 != var6)) { _fun0008_ip = 69; continue _fun0008 }
case 70:
            var6 = {};
            _closure2_slot0 = var6;
            var8 = var2.mutual_guilds;
            var7 = var8.forEach;
            var6 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.id;
                    var4 = var1.nick;
                    var2 = _closure1_slot11;
                    var1 = var2.getGuild;
                    var5 = var1.bind(var2)(var3);
                    var1 = null;
                    if(!(var1 != var5)) { _fun0009_ip = 55; continue _fun0009 }
case 71:
                    var2 = _closure2_slot0;
                    var1 = {};
                    var1['guild'] = var5;
                    var1['nick'] = var4;
                    var2[var3] = var1;
case 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var9 = _closure1_slot25;
            var8 = var9.set;
            var6 = var2.user;
            var7 = var6.id;
            var10 = _closure1_slot13;
            var6 = var10.getFlattenedGuildIds;
            var11 = var6.bind(var10)();
            var10 = var11.filter;
            var6 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var11 = var10.bind(var11)(var6);
            var10 = var11.map;
            var6 = function(arg1) {
                var3 = arg1;
                var1 = {};
                var4 = _closure2_slot0;
                var4 = var4[var3];
                var4 = var4.guild;
                var1['guild'] = var4;
                var2 = _closure2_slot0;
                var2 = var2[var3];
                var2 = var2.nick;
                var1['nick'] = var2;
                return var1;
            };
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var7, var6);
case 69:
            var6 = var2.mutual_friends_count;
            if(!(var5 != var6)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
            var7 = var2.mutual_friends_count;
            var9 = _closure1_slot24;
            var8 = var9.set;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var8.bind(var9)(var6, var7);
            var6 = 0;
            if(!(var6 === var7)) { _fun0008_ip = 72; continue _fun0008 }
case 74:
            var9 = _closure1_slot23;
            var8 = var9.set;
            var6 = var2.user;
            var7 = var6.id;
            var6 = _closure1_slot26;
            var6 = var8.bind(var9)(var7, var6);
case 72:
            var6 = var2.mutual_friends;
            if(!(var5 != var6)) { _fun0008_ip = 75; continue _fun0008 }
case 76:
            var9 = _closure1_slot23;
            var8 = var9.set;
            var6 = var2.user;
            var7 = var6.id;
            var10 = _closure1_slot42;
            var6 = var2.mutual_friends;
            var6 = var10.bind(var1)(var6);
            var6 = var8.bind(var9)(var7, var6);
            var9 = _closure1_slot24;
            var8 = var9.set;
            var6 = var2.user;
            var7 = var6.id;
            var6 = var2.mutual_friends;
            var6 = var6.length;
            var6 = var8.bind(var9)(var7, var6);
case 75:
            var6 = var2.premium_since;
            var6 = var5 != var6;
            var12 = null;
            if(!var6) { _fun0008_ip = 77; continue _fun0008 }
case 78:
            var6 = global;
            var8 = var6.Date;
            var21 = var2.premium_since;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var22 = var7;
            var6 = new var22[var8](var21, var20);
            var12 = var6 instanceof Object ? var6 : var7;
case 77:
            _closure2_slot1 = var12;
            var6 = var2.premium_guild_since;
            var6 = var5 != var6;
            var11 = null;
            if(!var6) { _fun0008_ip = 79; continue _fun0008 }
case 80:
            var6 = global;
            var8 = var6.Date;
            var21 = var2.premium_guild_since;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var22 = var7;
            var6 = new var22[var8](var21, var20);
            var11 = var6 instanceof Object ? var6 : var7;
case 79:
            _closure2_slot2 = var11;
            var13 = var2.application;
            var6 = var2.user_profile;
            var7 = var5 == var6;
            var18 = undefined;
            if(var7) { _fun0008_ip = 81; continue _fun0008 }
case 82:
            var18 = var6.profile_effect;
case 81:
            var6 = var2.badges;
            if(!(var5 == var6)) { _fun0008_ip = 83; continue _fun0008 }
case 84:
            var10 = new Array(0);
            _fun0008_ip = 85; continue _fun0008;
case 83:
            var8 = var2.badges;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 17;
                    var3 = var5[var3];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.getTieredTenureBadgeData;
                    var3 = var2.id;
                    var5 = var4.bind(var5)(var3);
                    var4 = var2.id;
                    var3 = 'premium';
                    if(!(var3 !== var4)) { _fun0010_ip = 86; continue _fun0010 }
case 40:
                    var3 = null;
                    if(!(var3 != var5)) { _fun0010_ip = 87; continue _fun0010 }
case 86:
                    var3 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0010_ip = 59; continue _fun0010 }
case 87:
                    var9 = var2.id;
                    var6 = var9.startsWith;
                    var3 = 'guild_booster_lvl';
                    var6 = var6.bind(var9)(var3);
                    var3 = var2;
                    if(!var6) { _fun0010_ip = 88; continue _fun0010 }
case 89:
                    var9 = _closure2_slot2;
                    var6 = null;
                    var3 = var2;
                    if(!(var6 != var9)) { _fun0010_ip = 88; continue _fun0010 }
case 90:
                    var6 = {};
                    var16 = var6;
                    var15 = var2;
                    var9 = copyDataProperties(var16, var15);
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 18;
                    var11 = var14[var9];
                    var11 = var10.bind(var8)(var11);
                    var12 = var11.intl;
                    var11 = var12.formatToPlainString;
                    var9 = var14[var9];
                    var9 = var10.bind(var8)(var9);
                    var9 = var9.t;
                    var10 = var9.IWkAq6;
                    var9 = {};
                    var13 = _closure2_slot2;
                    var9['date'] = var13;
                    var10 = var11.bind(var12)(var10, var9);
                    var9 = 'description';
                    var6[var9] = var10;
                    var3 = var6;
case 88:
                    return var3;
case 59:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 18;
                    var10 = var3[var9];
                    var10 = var6.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.formatToPlainString;
                    var3 = var3[var9];
                    var3 = var6.bind(var8)(var3);
                    var3 = var3.t;
                    var6 = var3.8zbGNT;
                    var3 = {};
                    var12 = _closure2_slot1;
                    var3['date'] = var12;
                    var3 = var10.bind(var11)(var6, var3);
                    if(!(var4 != var5)) { _fun0010_ip = 91; continue _fun0010 }
case 29:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = var1[var9];
                    var5 = var4.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var1 = var1[var9];
                    var1 = var4.bind(var8)(var1);
                    var1 = var1.t;
                    var4 = var1.Hu4jfn;
                    var1 = {};
                    var7 = _closure2_slot1;
                    var1['date'] = var7;
                    var3 = var5.bind(var6)(var4, var1);
case 91:
                    var1 = {};
                    var16 = var1;
                    var15 = var2;
                    var2 = copyDataProperties(var16, var15);
                    var2 = 'description';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var10 = var7.bind(var8)(var6);
case 85:
            var6 = _closure1_slot31;
            var6 = var5 != var6;
            if(!var6) { _fun0008_ip = 92; continue _fun0008 }
case 93:
            var7 = _closure1_slot31;
            var8 = var7.userId;
            var7 = var2.user;
            var7 = var7.id;
            var6 = var8 === var7;
case 92:
            if(!var6) { _fun0008_ip = 94; continue _fun0008 }
case 95:
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var7 = var6.bind(var7)();
            var6 = _closure1_slot31;
            var6 = var6.expiresAtMs;
            if(!(!(var7 > var6))) { _fun0008_ip = 96; continue _fun0008 }
case 97:
            var7 = _closure1_slot45;
            var6 = _closure1_slot31;
            var6 = var7.bind(var1)(var10, var6);
            _fun0008_ip = 94; continue _fun0008;
case 96:
            _closure1_slot31 = var5;
case 94:
            var9 = _closure1_slot19;
            var8 = var9.set;
            var6 = var2.user;
            var7 = var6.id;
            var6 = {};
            var15 = var2.user;
            var15 = var15.id;
            var6['userId'] = var15;
            var16 = var2.user_profile;
            var17 = var5 == var16;
            var15 = undefined;
            if(var17) { _fun0008_ip = 98; continue _fun0008 }
case 99:
            var15 = var16.banner;
case 98:
            var6['banner'] = var15;
            var16 = var2.user_profile;
            var17 = var5 == var16;
            var15 = undefined;
            if(var17) { _fun0008_ip = 100; continue _fun0008 }
case 101:
            var15 = var16.accent_color;
case 100:
            var6['accentColor'] = var15;
            var16 = var2.user_profile;
            var17 = var5 == var16;
            var15 = undefined;
            if(var17) { _fun0008_ip = 102; continue _fun0008 }
case 103:
            var15 = var16.theme_colors;
case 102:
            var6['themeColors'] = var15;
            var16 = var2.user_profile;
            var17 = var5 == var16;
            var15 = undefined;
            if(var17) { _fun0008_ip = 104; continue _fun0008 }
case 105:
            var15 = var16.popout_animation_particle_type;
case 104:
            var6['popoutAnimationParticleType'] = var15;
            var15 = var2.user_profile;
            var16 = var5 == var15;
            var17 = undefined;
            if(var16) { _fun0008_ip = 106; continue _fun0008 }
case 107:
            var17 = var15.bio;
case 106:
            var19 = var5 != var17;
            var15 = '';
            var16 = var15;
            if(!var19) { _fun0008_ip = 108; continue _fun0008 }
case 109:
            var16 = var17;
case 108:
            var6['bio'] = var16;
            var17 = var5 != var18;
            var16 = undefined;
            if(!var17) { _fun0008_ip = 110; continue _fun0008 }
case 111:
            var17 = {};
            var19 = var18.id;
            var17['id'] = var19;
            var19 = var18.sku_id;
            var17['skuId'] = var19;
            var18 = var18.expires_at;
            var17['expiresAt'] = var18;
            var16 = var17;
case 110:
            var6['profileEffect'] = var16;
            var17 = var2.user_profile;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0008_ip = 112; continue _fun0008 }
case 113:
            var16 = var17.pronouns;
case 112:
            var17 = var5 != var16;
            if(!var17) { _fun0008_ip = 114; continue _fun0008 }
case 115:
            var15 = var16;
case 114:
            var6['pronouns'] = var15;
            var16 = var2.connected_accounts;
            var15 = var16.filter;
            var14 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isSupported;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var15.bind(var16)(var14);
            if(!(var5 == var14)) { _fun0008_ip = 116; continue _fun0008 }
case 117:
            var14 = new Array(0);
case 116:
            var6['connectedAccounts'] = var14;
            var14 = var2.application_role_connections;
            if(!(var5 == var14)) { _fun0008_ip = 118; continue _fun0008 }
case 119:
            var14 = new Array(0);
case 118:
            var6['applicationRoleConnections'] = var14;
            var6['premiumSince'] = var12;
            var12 = var2.premium_type;
            var6['premiumType'] = var12;
            var6['premiumGuildSince'] = var11;
            var6['fetchStartedAt'] = var4;
            var4 = global;
            var12 = var4.Date;
            var11 = var12.now;
            var11 = var11.bind(var12)();
            var6['fetchEndedAt'] = var11;
            var11 = var2.legacy_username;
            var6['legacyUsername'] = var11;
            var12 = var5 != var13;
            var11 = null;
            if(!var12) { _fun0008_ip = 120; continue _fun0008 }
case 121:
            var12 = {};
            var14 = var13.id;
            var12['id'] = var14;
            var14 = var13.primary_sku_id;
            var12['primarySkuId'] = var14;
            var14 = var13.custom_install_url;
            var12['customInstallUrl'] = var14;
            var14 = var13.install_params;
            var12['installParams'] = var14;
            var14 = var13.integration_types_config;
            var12['integrationTypesConfig'] = var14;
            var14 = var13.flags;
            var12['flags'] = var14;
            var14 = var13.popular_application_command_ids;
            var12['popularApplicationCommandIds'] = var14;
            var14 = var13.storefront_available;
            var12['storefront_available'] = var14;
            var13 = var13.name;
            var12['name'] = var13;
            var11 = var12;
case 120:
            var6['application'] = var11;
            var6['badges'] = var10;
            var13 = var2.widgets;
            var11 = var5 == var13;
            var10 = undefined;
            if(var11) { _fun0008_ip = 122; continue _fun0008 }
case 123:
            var12 = var13.map;
            var11 = _closure1_slot36;
            var13 = var12.bind(var13)(var11);
            var12 = var13.filter;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 20;
            var11 = var15[var11];
            var11 = var14.bind(var1)(var11);
            var11 = var11.isNotNullish;
            var10 = var12.bind(var13)(var11);
case 122:
            var6['widgets'] = var10;
            var10 = var2.wishlist_settings;
            var6['wishlistSettings'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var7 = var2.user_profile;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0008_ip = 124; continue _fun0008 }
case 125:
            var7 = var7.profile_effect;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0008_ip = 124; continue _fun0008 }
case 126:
            var6 = var7.expires_at;
case 124:
            if(!(var5 != var6)) { _fun0008_ip = 127; continue _fun0008 }
case 128:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 21;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.Timeout;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var22 = var7;
            var6 = new var22[var6](var21);
            var9 = var6 instanceof Object ? var6 : var7;
            var8 = _closure1_slot21;
            var7 = var8.set;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var7.bind(var8)(var6, var9);
            var7 = _closure1_slot37;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var7.bind(var1)(var6);
case 127:
            var6 = var2.guild_member_profile;
            if(!(var5 != var6)) { _fun0008_ip = 129; continue _fun0008 }
case 130:
            var6 = var2.guild_member_profile;
            var8 = var6.profile_effect;
            var9 = {};
            var6 = var2.user;
            var6 = var6.id;
            var9['userId'] = var6;
            var6 = var2.guild_member_profile;
            var6 = var6.guild_id;
            var9['guildId'] = var6;
            var6 = var2.guild_member_profile;
            var6 = var6.banner;
            var9['banner'] = var6;
            var6 = var2.guild_member_profile;
            var6 = var6.accent_color;
            var9['accentColor'] = var6;
            var7 = var2.guild_member_profile;
            var10 = var5 == var7;
            var6 = undefined;
            if(var10) { _fun0008_ip = 131; continue _fun0008 }
case 132:
            var6 = var7.theme_colors;
case 131:
            var9['themeColors'] = var6;
            var7 = var2.guild_member_profile;
            var10 = var5 == var7;
            var6 = undefined;
            if(var10) { _fun0008_ip = 133; continue _fun0008 }
case 134:
            var6 = var7.popout_animation_particle_type;
case 133:
            var9['popoutAnimationParticleType'] = var6;
            var7 = var5 != var8;
            var6 = undefined;
            if(!var7) { _fun0008_ip = 135; continue _fun0008 }
case 136:
            var7 = {};
            var10 = var8.id;
            var7['id'] = var10;
            var10 = var8.sku_id;
            var7['skuId'] = var10;
            var8 = var8.expires_at;
            var7['expiresAt'] = var8;
            var6 = var7;
case 135:
            var9['profileEffect'] = var6;
            var6 = var2.guild_member_profile;
            var6 = var6.bio;
            var9['bio'] = var6;
            var6 = var2.guild_member_profile;
            var6 = var6.pronouns;
            var9['pronouns'] = var6;
            var6 = var2.guild_badges;
            var9['badges'] = var6;
            var8 = _closure1_slot20;
            var7 = var8.get;
            var6 = var2.user;
            var6 = var6.id;
            var8 = var7.bind(var8)(var6);
            if(!(var5 == var8)) { _fun0008_ip = 137; continue _fun0008 }
case 138:
            var6 = var4.Map;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var22 = var7;
            var6 = new var22[var6](var21);
            var11 = var6 instanceof Object ? var6 : var7;
            var7 = var11.set;
            var6 = var2.guild_member_profile;
            var6 = var6.guild_id;
            var6 = var7.bind(var11)(var6, var9);
            var10 = _closure1_slot20;
            var7 = var10.set;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var7.bind(var10)(var6, var11);
            _fun0008_ip = 139; continue _fun0008;
case 137:
            var7 = var8.set;
            var6 = var2.guild_member_profile;
            var6 = var6.guild_id;
            var6 = var7.bind(var8)(var6, var9);
case 139:
            var7 = var2.guild_member_profile;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0008_ip = 140; continue _fun0008 }
case 141:
            var7 = var7.profile_effect;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0008_ip = 140; continue _fun0008 }
case 142:
            var6 = var7.expires_at;
case 140:
            if(!(var5 != var6)) { _fun0008_ip = 129; continue _fun0008 }
case 143:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 21;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.Timeout;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var22 = var7;
            var6 = new var22[var6](var21);
            var7 = var6 instanceof Object ? var6 : var7;
            var9 = _closure1_slot22;
            var8 = var9.get;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var8.bind(var9)(var6);
            if(!(var5 == var6)) { _fun0008_ip = 144; continue _fun0008 }
case 145:
            var4 = var4.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var22 = var5;
            var4 = new var22[var4](var21);
            var9 = var4 instanceof Object ? var4 : var5;
            var5 = var9.set;
            var4 = var2.guild_member_profile;
            var4 = var4.guild_id;
            var4 = var5.bind(var9)(var4, var7);
            var8 = _closure1_slot22;
            var5 = var8.set;
            var4 = var2.user;
            var4 = var4.id;
            var4 = var5.bind(var8)(var4, var9);
            _fun0008_ip = 146; continue _fun0008;
case 144:
            var5 = var6.set;
            var4 = var2.guild_member_profile;
            var4 = var4.guild_id;
            var4 = var5.bind(var6)(var4, var7);
case 146:
            var4 = _closure1_slot38;
            var3 = var2.user;
            var3 = var3.id;
            var2 = var2.guild_member_profile;
            var2 = var2.guild_id;
            var2 = var4.bind(var1)(var3, var2);
case 129:
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function mergePinnedBadges(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var4 = null;
            if(!(var4 == var1)) { _fun0011_ip = 147; continue _fun0011 }
case 36:
            var5 = undefined;
            return var5;
case 147:
            var5 = global;
            var7 = var5.Set;
            var6 = var1.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var10 = var6.bind(var1)(var5);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var11 = var6;
            var5 = new var11[var7](var10, var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var _closure2_slot0 = var5;
            var4 = var4 == var3;
            var5 = undefined;
            if(var4) { _fun0011_ip = 68; continue _fun0011 }
case 4:
            var4 = var3.badges;
            var3 = var4.filter;
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var5 = var3.bind(var4)(var2);
case 68:
            var2 = var5.length;
            var4 = 0;
            if(!(var2 > var4)) { _fun0011_ip = 60; continue _fun0011 }
case 148:
            var3 = var1.push;
            var2 = new Array(0);
            var10 = var2;
            var9 = var5;
            var8 = 0;
            var4 = arraySpread(var10, var9, var8);
            var10 = var3;
            var9 = var2;
            var8 = var1;
            var2 = apply(var10, var9, var8);
case 60:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function handleProfileFetchStart(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userId;
            var6 = var1.guildId;
            var2 = var1.withMutualFriends;
            var4 = null;
            if(!(var4 == var6)) { _fun0012_ip = 149; continue _fun0012 }
case 150:
            var6 = _closure1_slot15;
case 149:
            var7 = _closure1_slot16;
            var5 = var7.get;
            var5 = var5.bind(var7)(var3);
            if(!(var4 == var5)) { _fun0012_ip = 151; continue _fun0012 }
case 64:
            var4 = global;
            var4 = var4.Set;
            var7 = var4.prototype;
            var7 = Object.create(var7, {constructor: {value: var4}});
            var11 = var7;
            var4 = new var11[var4](var10);
            var8 = var4 instanceof Object ? var4 : var7;
            var4 = var8.add;
            var4 = var4.bind(var8)(var6);
            var7 = _closure1_slot16;
            var4 = var7.set;
            var4 = var4.bind(var7)(var3, var8);
            _fun0012_ip = 152; continue _fun0012;
case 151:
            var4 = var5.add;
            var4 = var4.bind(var5)(var6);
case 152:
            if(!var2) { _fun0012_ip = 153; continue _fun0012 }
case 154:
            var2 = _closure1_slot17;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 153:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function handleProfileFetchFailure(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userId;
            var8 = var1.guildId;
            var3 = var1.apiError;
            var4 = var1.fetchStartedAt;
            var6 = _closure1_slot16;
            var1 = var6.get;
            var7 = var1.bind(var6)(var5);
            var1 = null;
            if(!(var1 != var7)) { _fun0013_ip = 155; continue _fun0013 }
case 65:
            var6 = var7.delete;
            if(!(var1 == var8)) { _fun0013_ip = 11; continue _fun0013 }
case 40:
            var8 = _closure1_slot15;
case 11:
            var6 = var6.bind(var7)(var8);
case 155:
            var7 = _closure1_slot17;
            var6 = var7.delete;
            var6 = var6.bind(var7)(var5);
            var7 = _closure1_slot19;
            var6 = var7.get;
            var7 = var6.bind(var7)(var5);
            if(!(var1 == var7)) { _fun0013_ip = 156; continue _fun0013 }
case 157:
            var6 = {'connectedAccounts': null, 'applicationRoleConnections': null, 'premiumSince': null, 'premiumGuildSince': null, 'application': null, 'legacyUsername': null, 'userId': null, 'banner': null, 'accentColor': null, 'bio': '', 'pronouns': '', 'premiumType': null, 'fetchStartedAt': 0, 'fetchEndedAt': 0};
            var8 = new Array(0);
            var6['connectedAccounts'] = var8;
            var8 = new Array(0);
            var6['applicationRoleConnections'] = var8;
            var6['userId'] = var5;
            var8 = undefined;
            var6['fetchError'] = var8;
            var7 = var6;
case 156:
            var7['fetchStartedAt'] = var4;
            var4 = global;
            var6 = var4.Date;
            var4 = var6.now;
            var4 = var4.bind(var6)();
            var7['fetchEndedAt'] = var4;
            var7['fetchError'] = var3;
            var6 = _closure1_slot19;
            var4 = var6.set;
            var4 = var4.bind(var6)(var5, var7);
            var6 = var1 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0013_ip = 53; continue _fun0013 }
case 158:
            var4 = var3.status;
case 53:
            var3 = 404;
            if(!(var3 === var4)) { _fun0013_ip = 159; continue _fun0013 }
case 160:
            var6 = _closure1_slot24;
            var4 = var6.set;
            var3 = 0;
            var3 = var4.bind(var6)(var5, var3);
            var6 = _closure1_slot23;
            var4 = var6.set;
            var3 = _closure1_slot26;
            var3 = var4.bind(var6)(var5, var3);
            var4 = _closure1_slot25;
            var3 = var4.set;
            var2 = _closure1_slot27;
            var2 = var3.bind(var4)(var5, var2);
case 159:
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function handleProfileUpdateStart() {
        var1 = true;
        _closure1_slot30 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot48 = var1;
    var1 = function handleProfileUpdateSuccess(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var3 = false;
            _closure1_slot30 = var3;
            var3 = var2.guild_id;
            var5 = null;
            if(!(var5 == var3)) { _fun0014_ip = 161; continue _fun0014 }
case 162:
            var6 = var2.userId;
            var15 = var2.accent_color;
            var14 = var2.banner;
            var13 = var2.bio;
            var12 = var2.pronouns;
            var11 = var2.popout_animation_particle_type;
            var10 = var2.theme_colors;
            var7 = var2.profile_effect;
            var4 = _closure1_slot19;
            var3 = var4.get;
            var4 = var3.bind(var4)(var6);
            if(!(var5 != var4)) { _fun0014_ip = 163; continue _fun0014 }
case 164:
            var9 = _closure1_slot19;
            var8 = var9.set;
            var3 = {};
            var17 = var3;
            var16 = var4;
            var4 = copyDataProperties(var17, var16);
            var4 = 'accentColor';
            var3[var4] = var15;
            var4 = 'banner';
            var3[var4] = var14;
            var4 = 'bio';
            var3[var4] = var13;
            var4 = 'pronouns';
            var3[var4] = var12;
            var4 = 'popoutAnimationParticleType';
            var3[var4] = var11;
            var4 = 'themeColors';
            var3[var4] = var10;
            var10 = var5 != var7;
            var4 = undefined;
            var11 = undefined;
            if(!var10) { _fun0014_ip = 88; continue _fun0014 }
case 165:
            var10 = {};
            var12 = var7.id;
            var10['id'] = var12;
            var12 = var7.sku_id;
            var10['skuId'] = var12;
            var12 = var7.expires_at;
            var10['expiresAt'] = var12;
            var11 = var10;
case 88:
            var10 = 'profileEffect';
            var3[var10] = var11;
            var3 = var8.bind(var9)(var6, var3);
            var8 = var5 == var7;
            var3 = undefined;
            if(var8) { _fun0014_ip = 166; continue _fun0014 }
case 167:
            var3 = var7.expires_at;
case 166:
            if(!(var5 != var3)) { _fun0014_ip = 163; continue _fun0014 }
case 168:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 21;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.Timeout;
            var7 = var3.prototype;
            var7 = Object.create(var7, {constructor: {value: var3}});
            var18 = var7;
            var3 = new var18[var3](var17);
            var8 = var3 instanceof Object ? var3 : var7;
            var7 = _closure1_slot21;
            var3 = var7.set;
            var3 = var3.bind(var7)(var6, var8);
            var3 = _closure1_slot37;
            var3 = var3.bind(var4)(var6);
            _fun0014_ip = 163; continue _fun0014;
case 161:
            var4 = var2.userId;
            var3 = var2.guild_id;
            var15 = var2.accent_color;
            var14 = var2.banner;
            var13 = var2.bio;
            var12 = var2.pronouns;
            var11 = var2.popout_animation_particle_type;
            var10 = var2.theme_colors;
            var7 = var2.profile_effect;
            var6 = _closure1_slot20;
            var2 = var6.get;
            var9 = var2.bind(var6)(var4);
            if(!(var5 != var3)) { _fun0014_ip = 163; continue _fun0014 }
case 169:
            if(!(var5 != var9)) { _fun0014_ip = 163; continue _fun0014 }
case 170:
            var2 = var9.get;
            var2 = var2.bind(var9)(var3);
            if(!(var5 != var2)) { _fun0014_ip = 163; continue _fun0014 }
case 171:
            var8 = var9.set;
            var6 = {};
            var17 = var6;
            var16 = var2;
            var2 = copyDataProperties(var17, var16);
            var2 = 'accentColor';
            var6[var2] = var15;
            var2 = 'banner';
            var6[var2] = var14;
            var2 = 'bio';
            var6[var2] = var13;
            var2 = 'pronouns';
            var6[var2] = var12;
            var2 = 'popoutAnimationParticleType';
            var6[var2] = var11;
            var2 = 'themeColors';
            var6[var2] = var10;
            var10 = var5 != var7;
            var2 = undefined;
            var11 = undefined;
            if(!var10) { _fun0014_ip = 172; continue _fun0014 }
case 173:
            var10 = {};
            var12 = var7.id;
            var10['id'] = var12;
            var12 = var7.sku_id;
            var10['skuId'] = var12;
            var12 = var7.expires_at;
            var10['expiresAt'] = var12;
            var11 = var10;
case 172:
            var10 = 'profileEffect';
            var6[var10] = var11;
            var6 = var8.bind(var9)(var3, var6);
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0014_ip = 174; continue _fun0014 }
case 175:
            var6 = var7.expires_at;
case 174:
            if(!(var5 != var6)) { _fun0014_ip = 163; continue _fun0014 }
case 176:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 21;
            var6 = var8[var6];
            var6 = var7.bind(var2)(var6);
            var6 = var6.Timeout;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var18 = var7;
            var6 = new var18[var6](var17);
            var7 = var6 instanceof Object ? var6 : var7;
            var8 = _closure1_slot22;
            var6 = var8.get;
            var6 = var6.bind(var8)(var4);
            if(!(var5 == var6)) { _fun0014_ip = 177; continue _fun0014 }
case 178:
            var5 = global;
            var5 = var5.Map;
            var8 = var5.prototype;
            var8 = Object.create(var8, {constructor: {value: var5}});
            var18 = var8;
            var5 = new var18[var5](var17);
            var9 = var5 instanceof Object ? var5 : var8;
            var5 = var9.set;
            var5 = var5.bind(var9)(var3, var7);
            var8 = _closure1_slot22;
            var5 = var8.set;
            var5 = var5.bind(var8)(var4, var9);
            _fun0014_ip = 179; continue _fun0014;
case 177:
            var5 = var6.set;
            var5 = var5.bind(var6)(var3, var7);
case 179:
            var1 = _closure1_slot38;
            var1 = var1.bind(var2)(var4, var3);
case 163:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = function handleProfileUpdateFailure() {
        var1 = false;
        _closure1_slot30 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot50 = var1;
    var1 = function handleWidgetsUpdateSuccess(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userId;
            var8 = var1.widgets;
            var3 = _closure1_slot19;
            var2 = var3.get;
            var6 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var6)) { _fun0015_ip = 180; continue _fun0015 }
case 71:
            var4 = _closure1_slot19;
            var3 = var4.set;
            var2 = {};
            var11 = var2;
            var10 = var6;
            var6 = copyDataProperties(var11, var10);
            var7 = var8.map;
            var6 = _closure1_slot36;
            var8 = var7.bind(var8)(var6);
            var7 = var8.filter;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 20;
            var6 = var6[var1];
            var1 = undefined;
            var6 = var9.bind(var1)(var6);
            var6 = var6.isNotNullish;
            var7 = var7.bind(var8)(var6);
            var6 = 'widgets';
            var2[var6] = var7;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
case 180:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function handlePinBadgesToProfile(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var1 = var2.badges;
            var5 = var2.ttlInSeconds;
            var4 = var2.userId;
            var2 = {};
            var2['userId'] = var4;
            var2['badges'] = var1;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var3 = var1.bind(var3)();
            var1 = 1000;
            var1 = var1 * var5;
            var1 = var3 + var1;
            var2['expiresAtMs'] = var1;
            _closure1_slot31 = var2;
            var3 = _closure1_slot19;
            var2 = var3.get;
            var5 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var5)) { _fun0016_ip = 181; continue _fun0016 }
case 164:
            var6 = var5.badges;
            if(!(var2 == var6)) { _fun0016_ip = 151; continue _fun0016 }
case 182:
            var6 = new Array(0);
case 151:
            var7 = _closure1_slot45;
            var3 = _closure1_slot31;
            var2 = undefined;
            var2 = var7.bind(var2)(var6, var3);
            var3 = _closure1_slot19;
            var2 = var3.set;
            var1 = {};
            var9 = var1;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            var5 = 'badges';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
case 181:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function handleUserUpdate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var1 = var1.user;
            var4 = var1.id;
            var3 = _closure1_slot16;
            var1 = var3.get;
            var5 = var1.bind(var3)(var4);
            var1 = null;
            var7 = var1 == var5;
            var3 = undefined;
            var6 = undefined;
            if(var7) { _fun0017_ip = 65; continue _fun0017 }
case 183:
            var6 = var5.size;
case 65:
            var7 = var1 != var6;
            var5 = 0;
            var1 = 0;
            if(!var7) { _fun0017_ip = 49; continue _fun0017 }
case 55:
            var1 = var6;
case 49:
            var5 = var1 > var5;
            var1 = !var5;
            if(var5) { _fun0017_ip = 184; continue _fun0017 }
case 5:
            var2 = _closure1_slot58;
            var1 = var2.bind(var3)(var4);
case 184:
            return var1;
        }
    };
    var _closure1_slot53 = var1;
    var1 = function handleGuildStatusChange() {
        var2 = _closure1_slot19;
        var1 = var2.keys;
        var6 = var1.bind(var2)();
        var4 = new Array(0);
        var5 = 0;
        var7 = var4;
        var1 = arraySpread(var7, var6, var5);
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot58;
                var3 = undefined;
                var1 = arg2;
                var1 = var4.bind(var3)(var1);
                if(var1) { _fun0018_ip = 162; continue _fun0018 }
case 35:
                var1 = var2;
case 162:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot54 = var1;
    var1 = function handleGuildMemberStatusChange(arg1) {
        var3 = _closure1_slot58;
        var1 = arg1;
        var1 = var1.user;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot55 = var1;
    var1 = function handleRelationshipStatusChange(arg1) {
        var3 = _closure1_slot58;
        var1 = arg1;
        var1 = var1.relationship;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot56 = var1;
    var1 = function handleLocaleStoreChange() {
        var3 = _closure1_slot16;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot17;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot19;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot20;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var _closure1_slot57 = var1;
    var1 = function resetProfileFetch(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0019_ip = 47; continue _fun0019 }
case 185:
            var3 = _closure1_slot19;
            var2 = var3.get;
            var2 = var2.bind(var3)(var4);
            if(!(var1 != var2)) { _fun0019_ip = 186; continue _fun0019 }
case 7:
            var1 = 0;
            var2['fetchStartedAt'] = var1;
            var2['fetchEndedAt'] = var1;
            var1 = undefined;
            var2['fetchError'] = var1;
            return var1;
case 186:
            var1 = false;
            return var1;
case 47:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot58 = var1;
    var1 = function handleAppWidgetConfigsFetchSuccess(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var2 = var1.applicationConfigs;
            _closure1_slot28 = var2;
            var3 = _closure1_slot29;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot34;
            var2 = var1.applicationConfigs;
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0020_ip = 187; continue _fun0020 }
case 55:
            var8 = var3.value;
            var7 = _closure1_slot29;
            var6 = var7.set;
            var2 = var8.application_id;
            var2 = var6.bind(var7)(var2, var8);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0020_ip = 55; continue _fun0020 }
case 187:
            return var1;
        }
    };
    var _closure1_slot59 = var1;
    var9 = global;
    var8 = var9.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var10.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var7 = 1;
    var2 = var6[var7];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var8 = var10.bind(var1)(var2);
    var2 = 10;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.EPHEMERAL_COLLECTIBLE_EXPIRY_GRACE_PERIOD_IN_MS;
    var _closure1_slot14 = var2;
    var10 = var9.Symbol;
    var2 = 'NO GUILD ID';
    var2 = var10.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = var9.Map;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot16 = var2;
    var2 = var9.Set;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot17 = var2;
    var2 = 2147483647;
    var _closure1_slot18 = var2;
    var2 = var9.Map;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot19 = var2;
    var2 = var9.Map;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot20 = var2;
    var2 = var9.Map;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot21 = var2;
    var2 = var9.Map;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot22 = var2;
    var2 = var9.Map;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot23 = var2;
    var2 = var9.Map;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot24 = var2;
    var2 = var9.Map;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot25 = var2;
    var2 = new Array(0);
    var _closure1_slot26 = var2;
    var2 = new Array(0);
    var _closure1_slot27 = var2;
    var2 = null;
    var _closure1_slot28 = var2;
    var9 = var9.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot29 = var9;
    var9 = false;
    var _closure1_slot30 = var9;
    var _closure1_slot31 = var2;
    var2 = function(arg1) {
        var4 = function UserProfileStore() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = {};
                var7 = function CACHE_LOADED_LAZY() {
                    var2 = _closure3_slot0;
                    var1 = var2.loadCache;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['CACHE_LOADED_LAZY'] = var7;
                var7 = _closure1_slot46;
                var1['USER_PROFILE_FETCH_START'] = var7;
                var7 = _closure1_slot47;
                var1['USER_PROFILE_FETCH_FAILURE'] = var7;
                var7 = _closure1_slot44;
                var1['USER_PROFILE_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot48;
                var1['USER_PROFILE_UPDATE_START'] = var7;
                var7 = _closure1_slot49;
                var1['USER_PROFILE_UPDATE_SUCCESS'] = var7;
                var7 = _closure1_slot50;
                var1['USER_PROFILE_UPDATE_FAILURE'] = var7;
                var7 = _closure1_slot51;
                var1['WIDGET_PENDING_SAVE_SUCCESS'] = var7;
                var7 = _closure1_slot52;
                var1['USER_PROFILE_PIN_BADGES_ON_CLIENT'] = var7;
                var7 = _closure1_slot40;
                var1['MUTUAL_FRIENDS_FETCH_START'] = var7;
                var7 = _closure1_slot43;
                var1['MUTUAL_FRIENDS_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot41;
                var1['MUTUAL_FRIENDS_FETCH_FAILURE'] = var7;
                var7 = _closure1_slot53;
                var1['USER_UPDATE'] = var7;
                var1['GUILD_MEMBER_UPDATE'] = var7;
                var7 = _closure1_slot54;
                var1['GUILD_JOIN'] = var7;
                var1['GUILD_DELETE'] = var7;
                var1['INVITE_ACCEPT_SUCCESS'] = var7;
                var7 = _closure1_slot55;
                var1['GUILD_MEMBER_ADD'] = var7;
                var1['GUILD_MEMBER_REMOVE'] = var7;
                var7 = _closure1_slot56;
                var1['RELATIONSHIP_ADD'] = var7;
                var1['RELATIONSHIP_REMOVE'] = var7;
                var1['RELATIONSHIP_UPDATE'] = var7;
                var7 = _closure1_slot59;
                var1['USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot39;
                var1['LOGOUT'] = var7;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot33;
                var1 = var1.bind(var4)();
                if(var1) { _fun0021_ip = 188; continue _fun0021 }
case 189:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0021_ip = 190; continue _fun0021;
case 188:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 190:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = var3.readSnapshot;
                        var1 = _closure2_slot0;
                        var1 = var1.LATEST_SNAPSHOT_VERSION;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var3)) { _fun0022_ip = 186; continue _fun0022 }
case 71:
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                                var1 = arg1;
                                var4 = var1.userId;
                                var3 = var1.profile;
                                var1 = null;
                                if(!(var1 != var4)) { _fun0023_ip = 11; continue _fun0023 }
case 33:
                                if(!(var1 == var3)) { _fun0023_ip = 183; continue _fun0023 }
case 191:
                                var2 = _closure1_slot19;
                                var1 = var2.delete;
                                var1 = var1.bind(var2)(var4);
                                _fun0023_ip = 11; continue _fun0023;
case 183:
                                var2 = _closure1_slot19;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var4, var3);
case 11:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
case 186:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['loadCache'] = var2;
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
            var3 = var4.waitFor;
            var2 = _closure1_slot13;
            var2 = var3.bind(var4)(var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot57;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(15);
        var1[0] = var5;
        var5 = {};
        var7 = 'isFetchingProfile';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var4 = arg2;
                var3 = _closure1_slot16;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var6 = null;
                var1 = var6 != var3;
                if(!var1) { _fun0024_ip = 192; continue _fun0024 }
case 149:
                var2 = var3.has;
                if(!(var6 == var4)) { _fun0024_ip = 193; continue _fun0024 }
case 194:
                var4 = _closure1_slot15;
case 193:
                var1 = var2.bind(var3)(var4);
case 192:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFetchingFriends';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot17;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isSubmitting';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUserProfile';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot19;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getGuildMemberProfile';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var6 = arg2;
                var2 = null;
                var3 = var2 == var6;
                var1 = null;
                if(var3) { _fun0025_ip = 195; continue _fun0025 }
case 36:
                var5 = _closure1_slot20;
                var4 = var5.get;
                var3 = arg1;
                var5 = var4.bind(var5)(var3);
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0025_ip = 64; continue _fun0025 }
case 183:
                var4 = var5.get;
                var3 = var4.bind(var5)(var6);
case 64:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0025_ip = 196; continue _fun0025 }
case 49:
                var2 = var3;
case 196:
                var1 = var2;
case 195:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getMutualFriends';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot23;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getMutualFriendsCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot24;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getMutualGuilds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot25;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getWidgets';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var3 = _closure1_slot19;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0026_ip = 71; continue _fun0026 }
case 197:
                var1 = var2.widgets;
case 71:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getWishlistIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = _closure1_slot19;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var3 = null;
                var4 = var3 == var2;
                var1 = undefined;
                if(var4) { _fun0027_ip = 71; continue _fun0027 }
case 197:
                var1 = var2.wishlistSettings;
case 71:
                if(!(var3 == var1)) { _fun0027_ip = 198; continue _fun0027 }
case 194:
                var1 = new Array(0);
                _fun0027_ip = 199; continue _fun0027;
case 198:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2.wishlistSettings;
                var1 = var3.bind(var4)(var2);
case 199:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getFirstWishlistId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var3 = this;
                var2 = var3.getWishlistIds;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = var3.length;
                var2 = 0;
                var4 = var1 > var2;
                var1 = null;
                if(!var4) { _fun0028_ip = 200; continue _fun0028 }
case 46:
                var1 = var3[var2];
case 200:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'takeSnapshot';
        var5['key'] = var7;
        var7 = function value() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = _closure1_slot10;
                var2 = var3.getId;
                var5 = var2.bind(var3)();
                var2 = _closure1_slot19;
                var1 = var2.get;
                var3 = var1.bind(var2)(var5);
                var1 = null;
                if(!(var1 == var3)) { _fun0029_ip = 34; continue _fun0029 }
case 71:
                var1 = {};
                var2 = _closure2_slot0;
                var2 = var2.LATEST_SNAPSHOT_VERSION;
                var1['version'] = var2;
                var2 = new Array(0);
                var1['data'] = var2;
                _fun0029_ip = 51; continue _fun0029;
case 34:
                var2 = {};
                var4 = _closure2_slot0;
                var4 = var4.LATEST_SNAPSHOT_VERSION;
                var2['version'] = var4;
                var4 = {};
                var4['userId'] = var5;
                var4['profile'] = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var2['data'] = var3;
                var1 = var2;
case 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'applicationWidgetApplicationConfigs';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['get'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getApplicationWidgetApplicationConfig';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot29;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[14] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var8);
    var8 = 'UserProfileStore';
    var2['displayName'] = var8;
    var2['LATEST_SNAPSHOT_VERSION'] = var7;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var14 = var7;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot32 = var2;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();