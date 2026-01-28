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
            _closure1_slot32 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot32 = var1;
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
            var9 = _closure1_slot34;
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
            var7 = _closure1_slot34;
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
    var _closure1_slot33 = var1;
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
case 39:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 39; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function createUserWidgetFromServer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = var5.data;
            var4 = var1.type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 12;
            var2 = var2[var7];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var2 = var2.WidgetType;
            var2 = var2.CURRENT_GAMES;
            if(!(var2 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var6)(var2);
            var2 = var2.WidgetType;
            var2 = var2.FAVORITE_GAMES;
            if(!(var2 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
case 42:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var6)(var2);
            var2 = var2.WidgetType;
            var2 = var2.PLAYED_GAMES;
            if(!(var2 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
case 43:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var6)(var2);
            var2 = var2.WidgetType;
            var2 = var2.WANT_TO_PLAY_GAMES;
            if(!(var2 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
case 18:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var6)(var2);
            var2 = var2.WidgetType;
            var2 = var2.APPLICATION;
            if(!(var2 !== var4)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
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
            var3 = var5.data;
            var3 = var3.application_id;
            var2['applicationId'] = var3;
            var3 = var7.prototype;
            var3 = Object.create(var3, {constructor: {value: var7}});
            var12 = var3;
            var11 = var2;
            var2 = new var12[var7](var11, var10);
            var2 = var2 instanceof Object ? var2 : var3;
            return var2;
case 40:
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
            var9 = var3.bind(var7)(var2);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 13;
            var2 = var7[var2];
            var8 = var3.bind(var6)(var2);
            var3 = var8.uniqBy;
            var2 = 'applicationId';
            var2 = var3.bind(var8)(var9, var2);
            var3 = _closure1_slot0;
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
            var12 = var2;
            var11 = var1;
            var1 = new var12[var3](var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function checkUserProfileEffectExpiry(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot18;
            var2 = var3.get;
            var3 = var2.bind(var3)(var4);
            var7 = null;
            if(!(var7 != var3)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var6 = var3.profileEffect;
            var9 = var7 == var6;
            var2 = undefined;
            var8 = undefined;
            if(var9) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var8 = var6.expiresAt;
case 48:
            if(!(var7 != var8)) { _fun0006_ip = 46; continue _fun0006 }
case 50:
            var8 = var6.expiresAt;
            var6 = 1000;
            var9 = var6 * var8;
            var6 = global;
            var10 = var6.Date;
            var8 = var10.now;
            var8 = var8.bind(var10)();
            var11 = var9 - var8;
            var8 = 0;
            if(!(!(var11 <= var8))) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var9 = _closure1_slot20;
            var8 = var9.get;
            var8 = var8.bind(var9)(var4);
            if(!(var7 != var8)) { _fun0006_ip = 46; continue _fun0006 }
case 53:
            var7 = var8.start;
            var10 = var6.Math;
            var9 = var10.min;
            var6 = _closure1_slot17;
            var6 = var9.bind(var10)(var6, var11);
            var5 = function() {
                var3 = _closure1_slot36;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var7.bind(var8)(var6, var5);
case 46:
            var5 = undefined;
            return var5;
case 51:
            var3['profileEffect'] = var2;
            var3 = _closure1_slot20;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            var2 = _closure1_slot31;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function checkGuildMemberProfileEffectExpiry(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var4;
            var5 = _closure1_slot19;
            var2 = var5.get;
            var7 = var2.bind(var5)(var6);
            var2 = null;
            if(!(var2 != var7)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var5 = var7.get;
            var8 = var5.bind(var7)(var4);
            if(!(var2 != var8)) { _fun0007_ip = 54; continue _fun0007 }
case 56:
            var5 = var8.profileEffect;
            var11 = var2 == var5;
            var9 = undefined;
            var10 = undefined;
            if(var11) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var10 = var5.expiresAt;
case 57:
            if(!(var2 != var10)) { _fun0007_ip = 54; continue _fun0007 }
case 59:
            var10 = var5.expiresAt;
            var5 = 1000;
            var11 = var5 * var10;
            var5 = global;
            var12 = var5.Date;
            var10 = var12.now;
            var10 = var10.bind(var12)();
            var14 = var11 - var10;
            var10 = 0;
            if(!(!(var14 <= var10))) { _fun0007_ip = 60; continue _fun0007 }
case 43:
            var11 = _closure1_slot21;
            var10 = var11.get;
            var12 = var10.bind(var11)(var6);
            var10 = var2 == var12;
            var11 = undefined;
            if(var10) { _fun0007_ip = 18; continue _fun0007 }
case 61:
            var10 = var12.get;
            var11 = var10.bind(var12)(var4);
case 18:
            if(!(var2 != var11)) { _fun0007_ip = 54; continue _fun0007 }
case 62:
            var10 = var11.start;
            var13 = var5.Math;
            var12 = var13.min;
            var5 = _closure1_slot17;
            var5 = var12.bind(var13)(var5, var14);
            var3 = function() {
                var4 = _closure1_slot37;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var3 = var10.bind(var11)(var5, var3);
case 54:
            var3 = undefined;
            return var3;
case 60:
            var5 = var7.set;
            var3 = {};
            var16 = var3;
            var15 = var8;
            var8 = copyDataProperties(var16, var15);
            var8 = 'profileEffect';
            var3[var8] = var9;
            var3 = var5.bind(var7)(var4, var3);
            var5 = _closure1_slot21;
            var3 = var5.get;
            var3 = var3.bind(var5)(var6);
            if(!(var2 != var3)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
case 63:
            var2 = _closure1_slot31;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function handleLogout() {
        var3 = _closure1_slot15;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot16;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot18;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot19;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot22;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot23;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot24;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = false;
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function handleMutualFriendsFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot16;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function handleMutualFriendsFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot16;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function getMutualFriends(arg1) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 13;
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
    var _closure1_slot41 = var1;
    var1 = function handleMutualFriendsFetchSuccess(arg1) {
        var2 = arg1;
        var5 = _closure1_slot16;
        var4 = var5.delete;
        var1 = var2.userId;
        var1 = var4.bind(var5)(var1);
        var7 = _closure1_slot22;
        var6 = var7.set;
        var5 = var2.userId;
        var8 = _closure1_slot41;
        var4 = var2.mutualFriends;
        var1 = undefined;
        var4 = var8.bind(var1)(var4);
        var4 = var6.bind(var7)(var5, var4);
        var5 = _closure1_slot23;
        var4 = var5.set;
        var3 = var2.userId;
        var2 = var2.mutualFriends;
        var2 = var2.length;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot42 = var1;
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
            var7 = var5 == var3;
            var9 = undefined;
            if(var7) { _fun0008_ip = 65; continue _fun0008 }
case 9:
            var9 = var3.guild_id;
case 65:
            if(!(var5 == var9)) { _fun0008_ip = 66; continue _fun0008 }
case 41:
            var9 = _closure1_slot14;
case 66:
            var10 = _closure1_slot15;
            var8 = var10.get;
            var7 = var2.user;
            var7 = var7.id;
            var8 = var8.bind(var10)(var7);
            if(!(var5 != var8)) { _fun0008_ip = 52; continue _fun0008 }
case 15:
            var7 = var8.delete;
            var7 = var7.bind(var8)(var9);
case 52:
            var9 = _closure1_slot16;
            var8 = var9.delete;
            var7 = var2.user;
            var7 = var7.id;
            var7 = var8.bind(var9)(var7);
            var7 = var2.mutual_guilds;
            if(!(var5 != var7)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var7 = {};
            _closure2_slot0 = var7;
            var9 = var2.mutual_guilds;
            var8 = var9.forEach;
            var7 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.id;
                    var4 = var1.nick;
                    var2 = _closure1_slot11;
                    var1 = var2.getGuild;
                    var5 = var1.bind(var2)(var3);
                    var1 = null;
                    if(!(var1 != var5)) { _fun0009_ip = 56; continue _fun0009 }
case 69:
                    var2 = _closure2_slot0;
                    var1 = {};
                    var1['guild'] = var5;
                    var1['nick'] = var4;
                    var2[var3] = var1;
case 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var7);
            var10 = _closure1_slot24;
            var9 = var10.set;
            var7 = var2.user;
            var8 = var7.id;
            var11 = _closure1_slot13;
            var7 = var11.getFlattenedGuildIds;
            var12 = var7.bind(var11)();
            var11 = var12.filter;
            var7 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var12 = var11.bind(var12)(var7);
            var11 = var12.map;
            var7 = function(arg1) {
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
            var7 = var11.bind(var12)(var7);
            var7 = var9.bind(var10)(var8, var7);
case 67:
            var7 = var2.mutual_friends_count;
            if(!(var5 != var7)) { _fun0008_ip = 70; continue _fun0008 }
case 71:
            var8 = var2.mutual_friends_count;
            var10 = _closure1_slot23;
            var9 = var10.set;
            var7 = var2.user;
            var7 = var7.id;
            var7 = var9.bind(var10)(var7, var8);
            var7 = 0;
            if(!(var7 === var8)) { _fun0008_ip = 70; continue _fun0008 }
case 14:
            var10 = _closure1_slot22;
            var9 = var10.set;
            var7 = var2.user;
            var8 = var7.id;
            var7 = _closure1_slot25;
            var7 = var9.bind(var10)(var8, var7);
case 70:
            var7 = var2.mutual_friends;
            if(!(var5 != var7)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
            var10 = _closure1_slot22;
            var9 = var10.set;
            var7 = var2.user;
            var8 = var7.id;
            var11 = _closure1_slot41;
            var7 = var2.mutual_friends;
            var7 = var11.bind(var1)(var7);
            var7 = var9.bind(var10)(var8, var7);
            var10 = _closure1_slot23;
            var9 = var10.set;
            var7 = var2.user;
            var8 = var7.id;
            var7 = var2.mutual_friends;
            var7 = var7.length;
            var7 = var9.bind(var10)(var8, var7);
case 72:
            var7 = var2.premium_since;
            var7 = var5 != var7;
            var14 = null;
            if(!var7) { _fun0008_ip = 74; continue _fun0008 }
case 75:
            var7 = global;
            var9 = var7.Date;
            var21 = var2.premium_since;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var22 = var8;
            var7 = new var22[var9](var21, var20);
            var14 = var7 instanceof Object ? var7 : var8;
case 74:
            _closure2_slot1 = var14;
            var7 = var2.premium_guild_since;
            var7 = var5 != var7;
            var13 = null;
            if(!var7) { _fun0008_ip = 76; continue _fun0008 }
case 77:
            var7 = global;
            var9 = var7.Date;
            var21 = var2.premium_guild_since;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var22 = var8;
            var7 = new var22[var9](var21, var20);
            var13 = var7 instanceof Object ? var7 : var8;
case 76:
            _closure2_slot2 = var13;
            var15 = var2.application;
            var7 = var2.badges;
            if(!(var5 == var7)) { _fun0008_ip = 78; continue _fun0008 }
case 79:
            var12 = new Array(0);
            _fun0008_ip = 80; continue _fun0008;
case 78:
            var9 = var2.badges;
            var8 = var9.map;
            var7 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 16;
                    var3 = var5[var3];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.getTieredTenureBadgeData;
                    var3 = var2.id;
                    var5 = var4.bind(var5)(var3);
                    var4 = var2.id;
                    var3 = 'premium';
                    if(!(var3 !== var4)) { _fun0010_ip = 81; continue _fun0010 }
case 41:
                    var3 = null;
                    if(!(var3 != var5)) { _fun0010_ip = 82; continue _fun0010 }
case 81:
                    var3 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0010_ip = 83; continue _fun0010 }
case 82:
                    var9 = var2.id;
                    var6 = var9.startsWith;
                    var3 = 'guild_booster_lvl';
                    var6 = var6.bind(var9)(var3);
                    var3 = var2;
                    if(!var6) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                    var9 = _closure2_slot2;
                    var6 = null;
                    var3 = var2;
                    if(!(var6 != var9)) { _fun0010_ip = 84; continue _fun0010 }
case 53:
                    var6 = {};
                    var16 = var6;
                    var15 = var2;
                    var9 = copyDataProperties(var16, var15);
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 17;
                    var11 = var14[var9];
                    var11 = var10.bind(var8)(var11);
                    var12 = var11.intl;
                    var11 = var12.formatToPlainString;
                    var9 = var14[var9];
                    var9 = var10.bind(var8)(var9);
                    var9 = var9.t;
                    var10 = var9.IWkAq7;
                    var9 = {};
                    var13 = _closure2_slot2;
                    var9['date'] = var13;
                    var10 = var11.bind(var12)(var10, var9);
                    var9 = 'description';
                    var6[var9] = var10;
                    var3 = var6;
case 84:
                    return var3;
case 83:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 17;
                    var10 = var3[var9];
                    var10 = var6.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.formatToPlainString;
                    var3 = var3[var9];
                    var3 = var6.bind(var8)(var3);
                    var3 = var3.t;
                    var6 = var3.8zbGNR;
                    var3 = {};
                    var12 = _closure2_slot1;
                    var3['date'] = var12;
                    var3 = var10.bind(var11)(var6, var3);
                    if(!(var4 != var5)) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = var1[var9];
                    var5 = var4.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var1 = var1[var9];
                    var1 = var4.bind(var8)(var1);
                    var1 = var1.t;
                    var4 = var1.Hu4jfi;
                    var1 = {};
                    var7 = _closure2_slot1;
                    var1['date'] = var7;
                    var3 = var5.bind(var6)(var4, var1);
case 86:
                    var1 = {};
                    var16 = var1;
                    var15 = var2;
                    var2 = copyDataProperties(var16, var15);
                    var2 = 'description';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var12 = var8.bind(var9)(var7);
case 80:
            var7 = _closure1_slot30;
            var7 = var5 != var7;
            if(!var7) { _fun0008_ip = 88; continue _fun0008 }
case 89:
            var8 = _closure1_slot30;
            var9 = var8.userId;
            var8 = var2.user;
            var8 = var8.id;
            var7 = var9 === var8;
case 88:
            if(!var7) { _fun0008_ip = 90; continue _fun0008 }
case 91:
            var7 = global;
            var8 = var7.Date;
            var7 = var8.now;
            var8 = var7.bind(var8)();
            var7 = _closure1_slot30;
            var7 = var7.expiresAtMs;
            if(!(!(var8 > var7))) { _fun0008_ip = 92; continue _fun0008 }
case 93:
            var8 = _closure1_slot44;
            var7 = _closure1_slot30;
            var7 = var8.bind(var1)(var12, var7);
            _fun0008_ip = 90; continue _fun0008;
case 92:
            _closure1_slot30 = var5;
case 90:
            var8 = var2.user_profile;
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0008_ip = 94; continue _fun0008 }
case 95:
            var7 = var8.collectibles;
case 94:
            var7 = var5 != var7;
            var8 = undefined;
            if(!var7) { _fun0008_ip = 96; continue _fun0008 }
case 97:
            var7 = var2.user_profile;
            var10 = var7.collectibles;
            var9 = var10.find;
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                var1 = var2 === var1;
                return var1;
            };
            var10 = var9.bind(var10)(var7);
            var7 = var5 != var10;
            var8 = undefined;
            if(!var7) { _fun0008_ip = 96; continue _fun0008 }
case 98:
            var7 = {};
            var9 = var10.sku_id;
            var7['skuId'] = var9;
            var9 = var10.expires_at;
            var11 = var5 != var9;
            var9 = undefined;
            if(!var11) { _fun0008_ip = 99; continue _fun0008 }
case 100:
            var17 = global;
            var16 = var17.Math;
            var11 = var16.floor;
            var18 = var17.Date;
            var21 = var10.expires_at;
            var17 = var18.prototype;
            var17 = Object.create(var17, {constructor: {value: var18}});
            var22 = var17;
            var10 = new var22[var18](var21, var20);
            var17 = var10 instanceof Object ? var10 : var17;
            var10 = var17.getTime;
            var17 = var10.bind(var17)();
            var10 = 1000;
            var10 = var17 / var10;
            var9 = var11.bind(var16)(var10);
case 99:
            var7['expiresAt'] = var9;
            var8 = var7;
case 96:
            var7 = var5 == var8;
            if(!var7) { _fun0008_ip = 101; continue _fun0008 }
case 102:
            var10 = var2.user_profile;
            var11 = var5 == var10;
            var9 = undefined;
            if(var11) { _fun0008_ip = 103; continue _fun0008 }
case 104:
            var9 = var10.profile_effect;
case 103:
            var7 = var5 != var9;
case 101:
            if(!var7) { _fun0008_ip = 105; continue _fun0008 }
case 106:
            var7 = {};
            var9 = var2.user_profile;
            var9 = var9.profile_effect;
            var9 = var9.sku_id;
            var7['skuId'] = var9;
            var9 = var2.user_profile;
            var9 = var9.profile_effect;
            var9 = var9.expires_at;
            var7['expiresAt'] = var9;
            var8 = var7;
case 105:
            var11 = _closure1_slot18;
            var10 = var11.set;
            var7 = var2.user;
            var9 = var7.id;
            var7 = {};
            var16 = var2.user;
            var16 = var16.id;
            var7['userId'] = var16;
            var17 = var2.user_profile;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0008_ip = 107; continue _fun0008 }
case 108:
            var16 = var17.banner;
case 107:
            var7['banner'] = var16;
            var17 = var2.user_profile;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0008_ip = 109; continue _fun0008 }
case 110:
            var16 = var17.accent_color;
case 109:
            var7['accentColor'] = var16;
            var17 = var2.user_profile;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0008_ip = 111; continue _fun0008 }
case 112:
            var16 = var17.theme_colors;
case 111:
            var7['themeColors'] = var16;
            var17 = var2.user_profile;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0008_ip = 113; continue _fun0008 }
case 114:
            var16 = var17.popout_animation_particle_type;
case 113:
            var7['popoutAnimationParticleType'] = var16;
            var16 = var2.user_profile;
            var17 = var5 == var16;
            var18 = undefined;
            if(var17) { _fun0008_ip = 115; continue _fun0008 }
case 116:
            var18 = var16.bio;
case 115:
            var19 = var5 != var18;
            var16 = '';
            var17 = var16;
            if(!var19) { _fun0008_ip = 117; continue _fun0008 }
case 118:
            var17 = var18;
case 117:
            var7['bio'] = var17;
            var7['profileEffect'] = var8;
            var18 = var2.user_profile;
            var19 = var5 == var18;
            var17 = undefined;
            if(var19) { _fun0008_ip = 119; continue _fun0008 }
case 120:
            var17 = var18.pronouns;
case 119:
            var18 = var5 != var17;
            if(!var18) { _fun0008_ip = 121; continue _fun0008 }
case 122:
            var16 = var17;
case 121:
            var7['pronouns'] = var16;
            var18 = var2.connected_accounts;
            var17 = var18.filter;
            var16 = function(arg1) {
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
            var16 = var17.bind(var18)(var16);
            if(!(var5 == var16)) { _fun0008_ip = 123; continue _fun0008 }
case 124:
            var16 = new Array(0);
case 123:
            var7['connectedAccounts'] = var16;
            var16 = var2.application_role_connections;
            if(!(var5 == var16)) { _fun0008_ip = 125; continue _fun0008 }
case 126:
            var16 = new Array(0);
case 125:
            var7['applicationRoleConnections'] = var16;
            var7['premiumSince'] = var14;
            var14 = var2.premium_type;
            var7['premiumType'] = var14;
            var7['premiumGuildSince'] = var13;
            var7['fetchStartedAt'] = var4;
            var4 = global;
            var14 = var4.Date;
            var13 = var14.now;
            var13 = var13.bind(var14)();
            var7['fetchEndedAt'] = var13;
            var13 = var2.legacy_username;
            var7['legacyUsername'] = var13;
            var14 = var5 != var15;
            var13 = null;
            if(!var14) { _fun0008_ip = 127; continue _fun0008 }
case 128:
            var14 = {};
            var16 = var15.id;
            var14['id'] = var16;
            var16 = var15.primary_sku_id;
            var14['primarySkuId'] = var16;
            var16 = var15.custom_install_url;
            var14['customInstallUrl'] = var16;
            var16 = var15.install_params;
            var14['installParams'] = var16;
            var16 = var15.integration_types_config;
            var14['integrationTypesConfig'] = var16;
            var16 = var15.flags;
            var14['flags'] = var16;
            var16 = var15.popular_application_command_ids;
            var14['popularApplicationCommandIds'] = var16;
            var16 = var15.storefront_available;
            var14['storefront_available'] = var16;
            var15 = var15.name;
            var14['name'] = var15;
            var13 = var14;
case 127:
            var7['application'] = var13;
            var7['badges'] = var12;
            var15 = var2.widgets;
            var13 = var5 == var15;
            var12 = undefined;
            if(var13) { _fun0008_ip = 129; continue _fun0008 }
case 130:
            var14 = var15.map;
            var13 = _closure1_slot35;
            var15 = var14.bind(var15)(var13);
            var14 = var15.filter;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 20;
            var13 = var17[var13];
            var13 = var16.bind(var1)(var13);
            var13 = var13.isNotNullish;
            var12 = var14.bind(var15)(var13);
case 129:
            var7['widgets'] = var12;
            var12 = var2.wishlist_settings;
            var7['wishlistSettings'] = var12;
            var13 = var2.user_profile;
            var14 = var5 == var13;
            var12 = undefined;
            if(var14) { _fun0008_ip = 131; continue _fun0008 }
case 132:
            var15 = var13.collectibles;
            var13 = var5 == var15;
            var12 = undefined;
            if(var13) { _fun0008_ip = 131; continue _fun0008 }
case 133:
            var14 = var15.map;
            var13 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.sku_id;
                    var2 = var1.type;
                    var7 = var1.expires_at;
                    var1 = {};
                    var4 = null;
                    var5 = var4 != var7;
                    var4 = undefined;
                    if(!var5) { _fun0011_ip = 66; continue _fun0011 }
case 37:
                    var5 = global;
                    var5 = var5.Date;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {constructor: {value: var5}});
                    var9 = var6;
                    var8 = var7;
                    var5 = new var9[var5](var8, var7);
                    var4 = var5 instanceof Object ? var5 : var6;
case 66:
                    var1['expiresAt'] = var4;
                    var1['skuId'] = var3;
                    var1['type'] = var2;
                    return var1;
                }
            };
            var12 = var14.bind(var15)(var13);
case 131:
            var7['collectibles'] = var12;
            var7 = var10.bind(var11)(var9, var7);
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0008_ip = 134; continue _fun0008 }
case 135:
            var7 = var8.expiresAt;
case 134:
            if(!(var5 != var7)) { _fun0008_ip = 136; continue _fun0008 }
case 137:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 21;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.Timeout;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var22 = var8;
            var7 = new var22[var7](var21);
            var10 = var7 instanceof Object ? var7 : var8;
            var9 = _closure1_slot20;
            var8 = var9.set;
            var7 = var2.user;
            var7 = var7.id;
            var7 = var8.bind(var9)(var7, var10);
            var8 = _closure1_slot36;
            var7 = var2.user;
            var7 = var7.id;
            var7 = var8.bind(var1)(var7);
case 136:
            var7 = var2.guild_member_profile;
            if(!(var5 != var7)) { _fun0008_ip = 138; continue _fun0008 }
case 139:
            var8 = var2.guild_member_profile;
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0008_ip = 140; continue _fun0008 }
case 141:
            var7 = var8.collectibles;
case 140:
            var8 = var5 != var7;
            var7 = undefined;
            if(!var8) { _fun0008_ip = 142; continue _fun0008 }
case 143:
            var8 = var2.guild_member_profile;
            var9 = var8.collectibles;
            var8 = var9.find;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                var1 = var2 === var1;
                return var1;
            };
            var9 = var8.bind(var9)(var6);
            var6 = var5 != var9;
            var7 = undefined;
            if(!var6) { _fun0008_ip = 142; continue _fun0008 }
case 144:
            var6 = {};
            var8 = var9.sku_id;
            var6['skuId'] = var8;
            var8 = var9.expires_at;
            var10 = var5 != var8;
            var8 = undefined;
            if(!var10) { _fun0008_ip = 145; continue _fun0008 }
case 146:
            var11 = var4.Math;
            var10 = var11.floor;
            var13 = var4.Date;
            var21 = var9.expires_at;
            var12 = var13.prototype;
            var12 = Object.create(var12, {constructor: {value: var13}});
            var22 = var12;
            var9 = new var22[var13](var21, var20);
            var12 = var9 instanceof Object ? var9 : var12;
            var9 = var12.getTime;
            var12 = var9.bind(var12)();
            var9 = 1000;
            var9 = var12 / var9;
            var8 = var10.bind(var11)(var9);
case 145:
            var6['expiresAt'] = var8;
            var7 = var6;
case 142:
            var6 = var5 == var7;
            if(!var6) { _fun0008_ip = 147; continue _fun0008 }
case 148:
            var9 = var2.guild_member_profile;
            var10 = var5 == var9;
            var8 = undefined;
            if(var10) { _fun0008_ip = 149; continue _fun0008 }
case 150:
            var8 = var9.profile_effect;
case 149:
            var6 = var5 != var8;
case 147:
            if(!var6) { _fun0008_ip = 151; continue _fun0008 }
case 152:
            var6 = {};
            var8 = var2.guild_member_profile;
            var8 = var8.profile_effect;
            var8 = var8.sku_id;
            var6['skuId'] = var8;
            var8 = var2.guild_member_profile;
            var8 = var8.profile_effect;
            var8 = var8.expires_at;
            var6['expiresAt'] = var8;
            var7 = var6;
case 151:
            var10 = {};
            var6 = var2.user;
            var6 = var6.id;
            var10['userId'] = var6;
            var6 = var2.guild_member_profile;
            var6 = var6.guild_id;
            var10['guildId'] = var6;
            var6 = var2.guild_member_profile;
            var6 = var6.banner;
            var10['banner'] = var6;
            var6 = var2.guild_member_profile;
            var6 = var6.accent_color;
            var10['accentColor'] = var6;
            var8 = var2.guild_member_profile;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0008_ip = 153; continue _fun0008 }
case 154:
            var6 = var8.theme_colors;
case 153:
            var10['themeColors'] = var6;
            var8 = var2.guild_member_profile;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0008_ip = 155; continue _fun0008 }
case 156:
            var6 = var8.popout_animation_particle_type;
case 155:
            var10['popoutAnimationParticleType'] = var6;
            var10['profileEffect'] = var7;
            var6 = var2.guild_member_profile;
            var6 = var6.bio;
            var10['bio'] = var6;
            var6 = var2.guild_member_profile;
            var6 = var6.pronouns;
            var10['pronouns'] = var6;
            var6 = var2.guild_badges;
            var10['badges'] = var6;
            var9 = _closure1_slot19;
            var8 = var9.get;
            var6 = var2.user;
            var6 = var6.id;
            var9 = var8.bind(var9)(var6);
            if(!(var5 == var9)) { _fun0008_ip = 157; continue _fun0008 }
case 158:
            var6 = var4.Map;
            var8 = var6.prototype;
            var8 = Object.create(var8, {constructor: {value: var6}});
            var22 = var8;
            var6 = new var22[var6](var21);
            var12 = var6 instanceof Object ? var6 : var8;
            var8 = var12.set;
            var6 = var2.guild_member_profile;
            var6 = var6.guild_id;
            var6 = var8.bind(var12)(var6, var10);
            var11 = _closure1_slot19;
            var8 = var11.set;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var8.bind(var11)(var6, var12);
            _fun0008_ip = 159; continue _fun0008;
case 157:
            var8 = var9.set;
            var6 = var2.guild_member_profile;
            var6 = var6.guild_id;
            var6 = var8.bind(var9)(var6, var10);
case 159:
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0008_ip = 160; continue _fun0008 }
case 161:
            var6 = var7.expiresAt;
case 160:
            if(!(var5 != var6)) { _fun0008_ip = 138; continue _fun0008 }
case 162:
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
            var9 = _closure1_slot21;
            var8 = var9.get;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var8.bind(var9)(var6);
            if(!(var5 == var6)) { _fun0008_ip = 163; continue _fun0008 }
case 164:
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
            var8 = _closure1_slot21;
            var5 = var8.set;
            var4 = var2.user;
            var4 = var4.id;
            var4 = var5.bind(var8)(var4, var9);
            _fun0008_ip = 165; continue _fun0008;
case 163:
            var5 = var6.set;
            var4 = var2.guild_member_profile;
            var4 = var4.guild_id;
            var4 = var5.bind(var6)(var4, var7);
case 165:
            var4 = _closure1_slot37;
            var3 = var2.user;
            var3 = var3.id;
            var2 = var2.guild_member_profile;
            var2 = var2.guild_id;
            var2 = var4.bind(var1)(var3, var2);
case 138:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function mergePinnedBadges(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var4 = null;
            if(!(var4 == var1)) { _fun0012_ip = 166; continue _fun0012 }
case 36:
            var5 = undefined;
            return var5;
case 166:
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
            if(var4) { _fun0012_ip = 15; continue _fun0012 }
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
case 15:
            var2 = var5.length;
            var4 = 0;
            if(!(var2 > var4)) { _fun0012_ip = 167; continue _fun0012 }
case 168:
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
case 167:
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function handleProfileFetchStart(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userId;
            var6 = var1.guildId;
            var2 = var1.withMutualFriends;
            var4 = null;
            if(!(var4 == var6)) { _fun0013_ip = 169; continue _fun0013 }
case 170:
            var6 = _closure1_slot14;
case 169:
            var7 = _closure1_slot15;
            var5 = var7.get;
            var5 = var5.bind(var7)(var3);
            if(!(var4 == var5)) { _fun0013_ip = 171; continue _fun0013 }
case 65:
            var4 = global;
            var4 = var4.Set;
            var7 = var4.prototype;
            var7 = Object.create(var7, {constructor: {value: var4}});
            var11 = var7;
            var4 = new var11[var4](var10);
            var8 = var4 instanceof Object ? var4 : var7;
            var4 = var8.add;
            var4 = var4.bind(var8)(var6);
            var7 = _closure1_slot15;
            var4 = var7.set;
            var4 = var4.bind(var7)(var3, var8);
            _fun0013_ip = 172; continue _fun0013;
case 171:
            var4 = var5.add;
            var4 = var4.bind(var5)(var6);
case 172:
            if(!var2) { _fun0013_ip = 173; continue _fun0013 }
case 174:
            var2 = _closure1_slot16;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 173:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function handleProfileFetchFailure(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userId;
            var8 = var1.guildId;
            var3 = var1.apiError;
            var4 = var1.fetchStartedAt;
            var6 = _closure1_slot15;
            var1 = var6.get;
            var7 = var1.bind(var6)(var5);
            var1 = null;
            if(!(var1 != var7)) { _fun0014_ip = 175; continue _fun0014 }
case 9:
            var6 = var7.delete;
            if(!(var1 == var8)) { _fun0014_ip = 176; continue _fun0014 }
case 41:
            var8 = _closure1_slot14;
case 176:
            var6 = var6.bind(var7)(var8);
case 175:
            var7 = _closure1_slot16;
            var6 = var7.delete;
            var6 = var6.bind(var7)(var5);
            var7 = _closure1_slot18;
            var6 = var7.get;
            var7 = var6.bind(var7)(var5);
            if(!(var1 == var7)) { _fun0014_ip = 177; continue _fun0014 }
case 178:
            var6 = {'connectedAccounts': null, 'applicationRoleConnections': null, 'premiumSince': null, 'premiumGuildSince': null, 'application': null, 'legacyUsername': null, 'userId': null, 'banner': null, 'accentColor': null, 'bio': '', 'pronouns': '', 'premiumType': null, 'fetchStartedAt': 0, 'fetchEndedAt': 0};
            var8 = new Array(0);
            var6['connectedAccounts'] = var8;
            var8 = new Array(0);
            var6['applicationRoleConnections'] = var8;
            var6['userId'] = var5;
            var8 = undefined;
            var6['fetchError'] = var8;
            var7 = var6;
case 177:
            var7['fetchStartedAt'] = var4;
            var4 = global;
            var6 = var4.Date;
            var4 = var6.now;
            var4 = var4.bind(var6)();
            var7['fetchEndedAt'] = var4;
            var7['fetchError'] = var3;
            var6 = _closure1_slot18;
            var4 = var6.set;
            var4 = var4.bind(var6)(var5, var7);
            var6 = var1 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0014_ip = 179; continue _fun0014 }
case 180:
            var4 = var3.status;
case 179:
            var3 = 404;
            if(!(var3 === var4)) { _fun0014_ip = 181; continue _fun0014 }
case 182:
            var6 = _closure1_slot23;
            var4 = var6.set;
            var3 = 0;
            var3 = var4.bind(var6)(var5, var3);
            var6 = _closure1_slot22;
            var4 = var6.set;
            var3 = _closure1_slot25;
            var3 = var4.bind(var6)(var5, var3);
            var4 = _closure1_slot24;
            var3 = var4.set;
            var2 = _closure1_slot26;
            var2 = var3.bind(var4)(var5, var2);
case 181:
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function handleProfileUpdateStart() {
        var1 = true;
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot47 = var1;
    var1 = function handleProfileUpdateSuccess(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var3 = false;
            _closure1_slot29 = var3;
            var3 = var2.guild_id;
            var5 = null;
            if(!(var5 == var3)) { _fun0015_ip = 183; continue _fun0015 }
case 184:
            var6 = var2.userId;
            var15 = var2.accent_color;
            var14 = var2.banner;
            var13 = var2.bio;
            var12 = var2.pronouns;
            var11 = var2.popout_animation_particle_type;
            var10 = var2.theme_colors;
            var7 = var2.profile_effect;
            var4 = _closure1_slot18;
            var3 = var4.get;
            var4 = var3.bind(var4)(var6);
            if(!(var5 != var4)) { _fun0015_ip = 185; continue _fun0015 }
case 186:
            var9 = _closure1_slot18;
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
            if(!var10) { _fun0015_ip = 60; continue _fun0015 }
case 187:
            var10 = {};
            var12 = var7.sku_id;
            var10['skuId'] = var12;
            var12 = var7.expires_at;
            var10['expiresAt'] = var12;
            var11 = var10;
case 60:
            var10 = 'profileEffect';
            var3[var10] = var11;
            var3 = var8.bind(var9)(var6, var3);
            var8 = var5 == var7;
            var3 = undefined;
            if(var8) { _fun0015_ip = 188; continue _fun0015 }
case 189:
            var3 = var7.expires_at;
case 188:
            if(!(var5 != var3)) { _fun0015_ip = 185; continue _fun0015 }
case 190:
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
            var7 = _closure1_slot20;
            var3 = var7.set;
            var3 = var3.bind(var7)(var6, var8);
            var3 = _closure1_slot36;
            var3 = var3.bind(var4)(var6);
            _fun0015_ip = 185; continue _fun0015;
case 183:
            var4 = var2.userId;
            var3 = var2.guild_id;
            var15 = var2.accent_color;
            var14 = var2.banner;
            var13 = var2.bio;
            var12 = var2.pronouns;
            var11 = var2.popout_animation_particle_type;
            var10 = var2.theme_colors;
            var7 = var2.profile_effect;
            var6 = _closure1_slot19;
            var2 = var6.get;
            var9 = var2.bind(var6)(var4);
            if(!(var5 != var3)) { _fun0015_ip = 185; continue _fun0015 }
case 191:
            if(!(var5 != var9)) { _fun0015_ip = 185; continue _fun0015 }
case 192:
            var2 = var9.get;
            var2 = var2.bind(var9)(var3);
            if(!(var5 != var2)) { _fun0015_ip = 185; continue _fun0015 }
case 193:
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
            if(!var10) { _fun0015_ip = 194; continue _fun0015 }
case 195:
            var10 = {};
            var12 = var7.sku_id;
            var10['skuId'] = var12;
            var12 = var7.expires_at;
            var10['expiresAt'] = var12;
            var11 = var10;
case 194:
            var10 = 'profileEffect';
            var6[var10] = var11;
            var6 = var8.bind(var9)(var3, var6);
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0015_ip = 196; continue _fun0015 }
case 197:
            var6 = var7.expires_at;
case 196:
            if(!(var5 != var6)) { _fun0015_ip = 185; continue _fun0015 }
case 198:
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
            var8 = _closure1_slot21;
            var6 = var8.get;
            var6 = var6.bind(var8)(var4);
            if(!(var5 == var6)) { _fun0015_ip = 199; continue _fun0015 }
case 200:
            var5 = global;
            var5 = var5.Map;
            var8 = var5.prototype;
            var8 = Object.create(var8, {constructor: {value: var5}});
            var18 = var8;
            var5 = new var18[var5](var17);
            var9 = var5 instanceof Object ? var5 : var8;
            var5 = var9.set;
            var5 = var5.bind(var9)(var3, var7);
            var8 = _closure1_slot21;
            var5 = var8.set;
            var5 = var5.bind(var8)(var4, var9);
            _fun0015_ip = 201; continue _fun0015;
case 199:
            var5 = var6.set;
            var5 = var5.bind(var6)(var3, var7);
case 201:
            var1 = _closure1_slot37;
            var1 = var1.bind(var2)(var4, var3);
case 185:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function handleProfileUpdateFailure() {
        var1 = false;
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot49 = var1;
    var1 = function handleWidgetsUpdateSuccess(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userId;
            var8 = var1.widgets;
            var3 = _closure1_slot18;
            var2 = var3.get;
            var6 = var2.bind(var3)(var5);
            var2 = null;
            if(!(var2 != var6)) { _fun0016_ip = 202; continue _fun0016 }
case 69:
            var4 = _closure1_slot18;
            var3 = var4.set;
            var2 = {};
            var11 = var2;
            var10 = var6;
            var6 = copyDataProperties(var11, var10);
            var7 = var8.map;
            var6 = _closure1_slot35;
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
case 202:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = function handlePinBadgesToProfile(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
            _closure1_slot30 = var2;
            var3 = _closure1_slot18;
            var2 = var3.get;
            var5 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var5)) { _fun0017_ip = 46; continue _fun0017 }
case 186:
            var6 = var5.badges;
            if(!(var2 == var6)) { _fun0017_ip = 171; continue _fun0017 }
case 203:
            var6 = new Array(0);
case 171:
            var7 = _closure1_slot44;
            var3 = _closure1_slot30;
            var2 = undefined;
            var2 = var7.bind(var2)(var6, var3);
            var3 = _closure1_slot18;
            var2 = var3.set;
            var1 = {};
            var9 = var1;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            var5 = 'badges';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
case 46:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function handleUserUpdate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var1 = var1.user;
            var4 = var1.id;
            var3 = _closure1_slot15;
            var1 = var3.get;
            var5 = var1.bind(var3)(var4);
            var1 = null;
            var7 = var1 == var5;
            var3 = undefined;
            var6 = undefined;
            if(var7) { _fun0018_ip = 9; continue _fun0018 }
case 204:
            var6 = var5.size;
case 9:
            var7 = var1 != var6;
            var5 = 0;
            var1 = 0;
            if(!var7) { _fun0018_ip = 50; continue _fun0018 }
case 56:
            var1 = var6;
case 50:
            var5 = var1 > var5;
            var1 = !var5;
            if(var5) { _fun0018_ip = 205; continue _fun0018 }
case 5:
            var2 = _closure1_slot57;
            var1 = var2.bind(var3)(var4);
case 205:
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function handleGuildStatusChange() {
        var2 = _closure1_slot18;
        var1 = var2.keys;
        var6 = var1.bind(var2)();
        var4 = new Array(0);
        var5 = 0;
        var7 = var4;
        var1 = arraySpread(var7, var6, var5);
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot57;
                var3 = undefined;
                var1 = arg2;
                var1 = var4.bind(var3)(var1);
                if(var1) { _fun0019_ip = 184; continue _fun0019 }
case 35:
                var1 = var2;
case 184:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot53 = var1;
    var1 = function handleGuildMemberStatusChange(arg1) {
        var3 = _closure1_slot57;
        var1 = arg1;
        var1 = var1.user;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot54 = var1;
    var1 = function handleRelationshipStatusChange(arg1) {
        var3 = _closure1_slot57;
        var1 = arg1;
        var1 = var1.relationship;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot55 = var1;
    var1 = function handleLocaleStoreChange() {
        var3 = _closure1_slot15;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot16;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot18;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot19;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var _closure1_slot56 = var1;
    var1 = function resetProfileFetch(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0020_ip = 48; continue _fun0020 }
case 206:
            var3 = _closure1_slot18;
            var2 = var3.get;
            var2 = var2.bind(var3)(var4);
            if(!(var1 != var2)) { _fun0020_ip = 8; continue _fun0020 }
case 7:
            var1 = 0;
            var2['fetchStartedAt'] = var1;
            var2['fetchEndedAt'] = var1;
            var1 = undefined;
            var2['fetchError'] = var1;
            return var1;
case 8:
            var1 = false;
            return var1;
case 48:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot57 = var1;
    var1 = function handleAppWidgetConfigsFetchSuccess(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var3 = var1.applicationConfigs;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.ApplicationWidgetConfig;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = arg1;
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _closure1_slot27 = var1;
            var2 = _closure1_slot28;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var3 = _closure1_slot33;
            var2 = _closure1_slot27;
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0021_ip = 207; continue _fun0021 }
case 4:
            var8 = var3.value;
            var7 = _closure1_slot28;
            var6 = var7.set;
            var2 = var8.applicationId;
            var2 = var6.bind(var7)(var2, var8);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0021_ip = 4; continue _fun0021 }
case 207:
            return var1;
        }
    };
    var _closure1_slot58 = var1;
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
    var10 = var9.Symbol;
    var2 = 'NO GUILD ID';
    var2 = var10.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = var9.Map;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot15 = var2;
    var2 = var9.Set;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot16 = var2;
    var2 = 2147483647;
    var _closure1_slot17 = var2;
    var2 = var9.Map;
    var10 = var2.prototype;
    var10 = Object.create(var10, {constructor: {value: var2}});
    var14 = var10;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var10;
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
    var2 = new Array(0);
    var _closure1_slot25 = var2;
    var2 = new Array(0);
    var _closure1_slot26 = var2;
    var2 = null;
    var _closure1_slot27 = var2;
    var9 = var9.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot28 = var9;
    var9 = false;
    var _closure1_slot29 = var9;
    var _closure1_slot30 = var2;
    var2 = function(arg1) {
        var4 = function UserProfileStore() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
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
                var7 = _closure1_slot45;
                var1['USER_PROFILE_FETCH_START'] = var7;
                var7 = _closure1_slot46;
                var1['USER_PROFILE_FETCH_FAILURE'] = var7;
                var7 = _closure1_slot43;
                var1['USER_PROFILE_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot47;
                var1['USER_PROFILE_UPDATE_START'] = var7;
                var7 = _closure1_slot48;
                var1['USER_PROFILE_UPDATE_SUCCESS'] = var7;
                var7 = _closure1_slot49;
                var1['USER_PROFILE_UPDATE_FAILURE'] = var7;
                var7 = _closure1_slot50;
                var1['WIDGET_PENDING_SAVE_SUCCESS'] = var7;
                var7 = _closure1_slot51;
                var1['USER_PROFILE_PIN_BADGES_ON_CLIENT'] = var7;
                var7 = _closure1_slot39;
                var1['MUTUAL_FRIENDS_FETCH_START'] = var7;
                var7 = _closure1_slot42;
                var1['MUTUAL_FRIENDS_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot40;
                var1['MUTUAL_FRIENDS_FETCH_FAILURE'] = var7;
                var7 = _closure1_slot52;
                var1['USER_UPDATE'] = var7;
                var1['GUILD_MEMBER_UPDATE'] = var7;
                var7 = _closure1_slot53;
                var1['GUILD_JOIN'] = var7;
                var1['GUILD_DELETE'] = var7;
                var1['INVITE_ACCEPT_SUCCESS'] = var7;
                var7 = _closure1_slot54;
                var1['GUILD_MEMBER_ADD'] = var7;
                var1['GUILD_MEMBER_REMOVE'] = var7;
                var7 = _closure1_slot55;
                var1['RELATIONSHIP_ADD'] = var7;
                var1['RELATIONSHIP_REMOVE'] = var7;
                var1['RELATIONSHIP_UPDATE'] = var7;
                var7 = _closure1_slot58;
                var1['USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot38;
                var1['LOGOUT'] = var7;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot32;
                var1 = var1.bind(var4)();
                if(var1) { _fun0022_ip = 208; continue _fun0022 }
case 209:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0022_ip = 183; continue _fun0022;
case 208:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 183:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = function() {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = var3.readSnapshot;
                        var1 = _closure2_slot0;
                        var1 = var1.LATEST_SNAPSHOT_VERSION;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var3)) { _fun0023_ip = 8; continue _fun0023 }
case 69:
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                                var1 = arg1;
                                var4 = var1.userId;
                                var3 = var1.profile;
                                var1 = null;
                                if(!(var1 != var4)) { _fun0024_ip = 176; continue _fun0024 }
case 33:
                                if(!(var1 == var3)) { _fun0024_ip = 204; continue _fun0024 }
case 210:
                                var2 = _closure1_slot18;
                                var1 = var2.delete;
                                var1 = var1.bind(var2)(var4);
                                _fun0024_ip = 176; continue _fun0024;
case 204:
                                var2 = _closure1_slot18;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var4, var3);
case 176:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
case 8:
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
            var1 = _closure1_slot56;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'isFetchingProfile';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = arg2;
                var3 = _closure1_slot15;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var6 = null;
                var1 = var6 != var3;
                if(!var1) { _fun0025_ip = 211; continue _fun0025 }
case 169:
                var2 = var3.has;
                if(!(var6 == var4)) { _fun0025_ip = 6; continue _fun0025 }
case 212:
                var4 = _closure1_slot14;
case 6:
                var1 = var2.bind(var3)(var4);
case 211:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFetchingFriends';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot16;
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
            var1 = _closure1_slot29;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUserProfile';
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
        var7 = 'getGuildMemberProfile';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var6 = arg2;
                var2 = null;
                var3 = var2 == var6;
                var1 = null;
                if(var3) { _fun0026_ip = 213; continue _fun0026 }
case 36:
                var5 = _closure1_slot19;
                var4 = var5.get;
                var3 = arg1;
                var5 = var4.bind(var5)(var3);
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0026_ip = 65; continue _fun0026 }
case 204:
                var4 = var5.get;
                var3 = var4.bind(var5)(var6);
case 65:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0026_ip = 214; continue _fun0026 }
case 50:
                var2 = var3;
case 214:
                var1 = var2;
case 213:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getMutualFriends';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot22;
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
            var3 = _closure1_slot23;
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
            var3 = _closure1_slot24;
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
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0027_ip = 69; continue _fun0027 }
case 215:
                var1 = var2.widgets;
case 69:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getWishlistIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var3 = null;
                var4 = var3 == var2;
                var1 = undefined;
                if(var4) { _fun0028_ip = 69; continue _fun0028 }
case 215:
                var1 = var2.wishlistSettings;
case 69:
                if(!(var3 == var1)) { _fun0028_ip = 216; continue _fun0028 }
case 212:
                var1 = new Array(0);
                _fun0028_ip = 217; continue _fun0028;
case 216:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2.wishlistSettings;
                var1 = var3.bind(var4)(var2);
case 217:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getFirstWishlistId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var1 = null;
                if(!(var1 != var4)) { _fun0029_ip = 216; continue _fun0029 }
case 218:
                var2 = var3.getWishlistIds;
                var4 = var2.bind(var3)(var4);
                var2 = var4.length;
                var3 = 0;
                var5 = var2 > var3;
                var2 = null;
                if(!var5) { _fun0029_ip = 6; continue _fun0029 }
case 212:
                var2 = var4[var3];
case 6:
                return var2;
case 216:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getWishlistSettings';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var3 = _closure1_slot18;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0030_ip = 65; continue _fun0030 }
case 215:
                var4 = var3.wishlistSettings;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0030_ip = 65; continue _fun0030 }
case 219:
                var3 = arg2;
                var2 = var4[var3];
case 65:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0030_ip = 214; continue _fun0030 }
case 50:
                var1 = var2;
case 214:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'takeSnapshot';
        var5['key'] = var7;
        var7 = function value() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = _closure1_slot10;
                var2 = var3.getId;
                var5 = var2.bind(var3)();
                var2 = _closure1_slot18;
                var1 = var2.get;
                var3 = var1.bind(var2)(var5);
                var1 = null;
                if(!(var1 == var3)) { _fun0031_ip = 34; continue _fun0031 }
case 69:
                var1 = {};
                var2 = _closure2_slot0;
                var2 = var2.LATEST_SNAPSHOT_VERSION;
                var1['version'] = var2;
                var2 = new Array(0);
                var1['data'] = var2;
                _fun0031_ip = 220; continue _fun0031;
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
case 220:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'applicationWidgetConfigs';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['get'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getApplicationWidgetConfig';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot28;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
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
    var _closure1_slot31 = var2;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();