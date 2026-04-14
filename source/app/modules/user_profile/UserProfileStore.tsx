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
            var2 = var3["@@iterator"];
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
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
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
            var2 = 16;
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
            var9 = var3.bind(var7)(var2);
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 14;
            var2 = var7[var2];
            var8 = var3.bind(var6)(var2);
            var3 = var8.uniqBy;
            var2 = 'applicationId';
            var2 = var3.bind(var8)(var9, var2);
            var3 = _closure1_slot0;
            var1 = 15;
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
            var9 = var6 * var8;
            var6 = global;
            var10 = var6.Date;
            var8 = var10.now;
            var8 = var8.bind(var10)();
            var11 = var9 - var8;
            var8 = 0;
            if(!(!(var11 <= var8))) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var9 = _closure1_slot20;
            var8 = var9.get;
            var8 = var8.bind(var9)(var4);
            if(!(var7 != var8)) { _fun0006_ip = 45; continue _fun0006 }
case 52:
            var7 = var8.start;
            var10 = var6.Math;
            var9 = var10.min;
            var6 = _closure1_slot14;
            var6 = var9.bind(var10)(var6, var11);
            var5 = function() {
                var3 = _closure1_slot36;
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
case 13:
            var10 = var5.expiresAt;
            var5 = 1000;
            var11 = var5 * var10;
            var5 = global;
            var12 = var5.Date;
            var10 = var12.now;
            var10 = var10.bind(var12)();
            var14 = var11 - var10;
            var10 = 0;
            if(!(!(var14 <= var10))) { _fun0007_ip = 58; continue _fun0007 }
case 42:
            var11 = _closure1_slot21;
            var10 = var11.get;
            var12 = var10.bind(var11)(var6);
            var10 = var2 == var12;
            var11 = undefined;
            if(var10) { _fun0007_ip = 43; continue _fun0007 }
case 59:
            var10 = var12.get;
            var11 = var10.bind(var12)(var4);
case 43:
            if(!(var2 != var11)) { _fun0007_ip = 53; continue _fun0007 }
case 60:
            var10 = var11.start;
            var13 = var5.Math;
            var12 = var13.min;
            var5 = _closure1_slot14;
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
case 53:
            var3 = undefined;
            return var3;
case 58:
            var5 = var7.set;
            var3 = {};
            var16 = var3;
            var15 = var8;
            var8 = copyDataProperties(var16, var15);
            var8 = 'profileEffect';
            var3[7] = var9;
            var3 = var5.bind(var7)(var4, var3);
            var5 = _closure1_slot21;
            var3 = var5.get;
            var3 = var3.bind(var5)(var6);
            if(!(var2 != var3)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
case 61:
            var2 = _closure1_slot31;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function handleLogout() {
        var3 = _closure1_slot16;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot17;
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
        var2 = _closure1_slot17;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function handleMutualFriendsFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot17;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function getMutualFriends(arg1) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 14;
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
        var5 = _closure1_slot17;
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
            var8 = var1.fetchStartedAt;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var3 = var2.guild_member_profile;
            var5 = null;
            var4 = var5 == var3;
            var7 = undefined;
            if(var4) { _fun0008_ip = 63; continue _fun0008 }
case 64:
            var7 = var3.guild_id;
case 63:
            if(!(var5 == var7)) { _fun0008_ip = 65; continue _fun0008 }
case 40:
            var7 = _closure1_slot15;
case 65:
            var9 = _closure1_slot16;
            var6 = var9.get;
            var4 = var2.user;
            var4 = var4.id;
            var6 = var6.bind(var9)(var4);
            if(!(var5 != var6)) { _fun0008_ip = 51; continue _fun0008 }
case 66:
            var4 = var6.delete;
            var4 = var4.bind(var6)(var7);
case 51:
            var7 = _closure1_slot17;
            var6 = var7.delete;
            var4 = var2.user;
            var4 = var4.id;
            var4 = var6.bind(var7)(var4);
            var4 = var2.mutual_guilds;
            if(!(var5 != var4)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var4 = {};
            _closure2_slot0 = var4;
            var7 = var2.mutual_guilds;
            var6 = var7.forEach;
            var4 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.id;
                    var4 = var1.nick;
                    var2 = _closure1_slot11;
                    var1 = var2.getGuild;
                    var5 = var1.bind(var2)(var3);
                    var1 = null;
                    if(!(var1 != var5)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var2 = _closure2_slot0;
                    var1 = {};
                    var1['guild'] = var5;
                    var1['nick'] = var4;
                    var2[var3] = var1;
case 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4);
            var9 = _closure1_slot24;
            var7 = var9.set;
            var4 = var2.user;
            var6 = var4.id;
            var10 = _closure1_slot13;
            var4 = var10.getFlattenedGuildIds;
            var11 = var4.bind(var10)();
            var10 = var11.filter;
            var4 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var11 = var10.bind(var11)(var4);
            var10 = var11.map;
            var4 = function(arg1) {
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
            var4 = var10.bind(var11)(var4);
            var4 = var7.bind(var9)(var6, var4);
case 67:
            var4 = var2.mutual_friends_count;
            if(!(var5 != var4)) { _fun0008_ip = 71; continue _fun0008 }
case 72:
            var6 = var2.mutual_friends_count;
            var9 = _closure1_slot23;
            var7 = var9.set;
            var4 = var2.user;
            var4 = var4.id;
            var4 = var7.bind(var9)(var4, var6);
            var4 = 0;
            if(!(var4 === var6)) { _fun0008_ip = 71; continue _fun0008 }
case 73:
            var9 = _closure1_slot22;
            var7 = var9.set;
            var4 = var2.user;
            var6 = var4.id;
            var4 = _closure1_slot25;
            var4 = var7.bind(var9)(var6, var4);
case 71:
            var4 = var2.mutual_friends;
            if(!(var5 != var4)) { _fun0008_ip = 74; continue _fun0008 }
case 75:
            var9 = _closure1_slot22;
            var7 = var9.set;
            var4 = var2.user;
            var6 = var4.id;
            var10 = _closure1_slot41;
            var4 = var2.mutual_friends;
            var4 = var10.bind(var1)(var4);
            var4 = var7.bind(var9)(var6, var4);
            var9 = _closure1_slot23;
            var7 = var9.set;
            var4 = var2.user;
            var6 = var4.id;
            var4 = var2.mutual_friends;
            var4 = var4.length;
            var4 = var7.bind(var9)(var6, var4);
case 74:
            var4 = var2.premium_since;
            var4 = var5 != var4;
            var17 = null;
            if(!var4) { _fun0008_ip = 76; continue _fun0008 }
case 77:
            var4 = global;
            var7 = var4.Date;
            var25 = var2.premium_since;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var26 = var6;
            var4 = new var26[var7](var25, var24);
            var17 = var4 instanceof Object ? var4 : var6;
case 76:
            _closure2_slot1 = var17;
            var4 = var2.premium_guild_since;
            var4 = var5 != var4;
            var16 = null;
            if(!var4) { _fun0008_ip = 78; continue _fun0008 }
case 79:
            var4 = global;
            var7 = var4.Date;
            var25 = var2.premium_guild_since;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var26 = var6;
            var4 = new var26[var7](var25, var24);
            var16 = var4 instanceof Object ? var4 : var6;
case 78:
            _closure2_slot2 = var16;
            var18 = var2.application;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var10 = 17;
            var4 = var4[var10];
            var6 = var6.bind(var1)(var4);
            var4 = var2.user_profile;
            var4 = var6.bind(var1)(var4);
            var9 = var4.profileEffect;
            var20 = var4.profileFrame;
            var4 = var2.badges;
            if(!(var5 == var4)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
            var14 = new Array(0);
            _fun0008_ip = 82; continue _fun0008;
case 80:
            var7 = var2.badges;
            var6 = var7.map;
            var4 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.getTieredTenureBadgeData;
                    var3 = var2.id;
                    var5 = var4.bind(var5)(var3);
                    var4 = var2.id;
                    var3 = 'premium';
                    if(!(var3 !== var4)) { _fun0010_ip = 83; continue _fun0010 }
case 40:
                    var3 = null;
                    if(!(var3 != var5)) { _fun0010_ip = 84; continue _fun0010 }
case 83:
                    var3 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0010_ip = 85; continue _fun0010 }
case 84:
                    var9 = var2.id;
                    var6 = var9.startsWith;
                    var3 = 'guild_booster_lvl';
                    var6 = var6.bind(var9)(var3);
                    var3 = var2;
                    if(!var6) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                    var9 = _closure2_slot2;
                    var6 = null;
                    var3 = var2;
                    if(!(var6 != var9)) { _fun0010_ip = 86; continue _fun0010 }
case 52:
                    var6 = {};
                    var16 = var6;
                    var15 = var2;
                    var9 = copyDataProperties(var16, var15);
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 19;
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
                    var6[8] = var10;
                    var3 = var6;
case 86:
                    return var3;
case 85:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 19;
                    var10 = var3[var9];
                    var10 = var6.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.formatToPlainString;
                    var3 = var3[var9];
                    var3 = var6.bind(var8)(var3);
                    var3 = var3.t;
                    var6 = var3["8zbGNR"];
                    var3 = {};
                    var12 = _closure2_slot1;
                    var3['date'] = var12;
                    var3 = var10.bind(var11)(var6, var3);
                    if(!(var4 != var5)) { _fun0010_ip = 88; continue _fun0010 }
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
                    var4 = var1.Hu4jfi;
                    var1 = {};
                    var7 = _closure2_slot1;
                    var1['date'] = var7;
                    var3 = var5.bind(var6)(var4, var1);
case 88:
                    var1 = {};
                    var16 = var1;
                    var15 = var2;
                    var2 = copyDataProperties(var16, var15);
                    var2 = 'description';
                    var1[1] = var3;
                    return var1;
                }
            };
            var14 = var6.bind(var7)(var4);
case 82:
            var4 = _closure1_slot30;
            var4 = var5 != var4;
            if(!var4) { _fun0008_ip = 89; continue _fun0008 }
case 90:
            var6 = _closure1_slot30;
            var7 = var6.userId;
            var6 = var2.user;
            var6 = var6.id;
            var4 = var7 === var6;
case 89:
            if(!var4) { _fun0008_ip = 91; continue _fun0008 }
case 92:
            var4 = global;
            var6 = var4.Date;
            var4 = var6.now;
            var6 = var4.bind(var6)();
            var4 = _closure1_slot30;
            var4 = var4.expiresAtMs;
            if(!(!(var6 > var4))) { _fun0008_ip = 93; continue _fun0008 }
case 94:
            var6 = _closure1_slot44;
            var4 = _closure1_slot30;
            var4 = var6.bind(var1)(var14, var4);
            _fun0008_ip = 91; continue _fun0008;
case 93:
            _closure1_slot30 = var5;
case 91:
            var4 = global;
            var7 = var4.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var13 = _closure1_slot18;
            var12 = var13.set;
            var7 = var2.user;
            var11 = var7.id;
            var7 = {};
            var19 = var2.user;
            var19 = var19.id;
            var7['userId'] = var19;
            var21 = var2.user_profile;
            var22 = var5 == var21;
            var19 = undefined;
            if(var22) { _fun0008_ip = 95; continue _fun0008 }
case 96:
            var19 = var21.banner;
case 95:
            var7['banner'] = var19;
            var21 = var2.user_profile;
            var22 = var5 == var21;
            var19 = undefined;
            if(var22) { _fun0008_ip = 97; continue _fun0008 }
case 98:
            var19 = var21.accent_color;
case 97:
            var7['accentColor'] = var19;
            var21 = var2.user_profile;
            var22 = var5 == var21;
            var19 = undefined;
            if(var22) { _fun0008_ip = 99; continue _fun0008 }
case 100:
            var19 = var21.theme_colors;
case 99:
            var7['themeColors'] = var19;
            var21 = var2.user_profile;
            var22 = var5 == var21;
            var19 = undefined;
            if(var22) { _fun0008_ip = 101; continue _fun0008 }
case 102:
            var19 = var21.popout_animation_particle_type;
case 101:
            var7['popoutAnimationParticleType'] = var19;
            var19 = var2.user_profile;
            var21 = var5 == var19;
            var22 = undefined;
            if(var21) { _fun0008_ip = 103; continue _fun0008 }
case 104:
            var22 = var19.bio;
case 103:
            var23 = var5 != var22;
            var19 = '';
            var21 = var19;
            if(!var23) { _fun0008_ip = 105; continue _fun0008 }
case 106:
            var21 = var22;
case 105:
            var7['bio'] = var21;
            var7['profileEffect'] = var9;
            var7['profileFrame'] = var20;
            var21 = var2.user_profile;
            var22 = var5 == var21;
            var20 = undefined;
            if(var22) { _fun0008_ip = 107; continue _fun0008 }
case 108:
            var20 = var21.pronouns;
case 107:
            var21 = var5 != var20;
            if(!var21) { _fun0008_ip = 109; continue _fun0008 }
case 110:
            var19 = var20;
case 109:
            var7['pronouns'] = var19;
            var21 = var2.connected_accounts;
            var20 = var21.filter;
            var19 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isSupported;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var20.bind(var21)(var19);
            if(!(var5 == var19)) { _fun0008_ip = 111; continue _fun0008 }
case 112:
            var19 = new Array(0);
case 111:
            var7['connectedAccounts'] = var19;
            var19 = var2.application_role_connections;
            if(!(var5 == var19)) { _fun0008_ip = 113; continue _fun0008 }
case 114:
            var19 = new Array(0);
case 113:
            var7['applicationRoleConnections'] = var19;
            var7['premiumSince'] = var17;
            var17 = var2.premium_type;
            var7['premiumType'] = var17;
            var7['premiumGuildSince'] = var16;
            var7['fetchStartedAt'] = var8;
            var7['fetchEndedAt'] = var6;
            var16 = var2.legacy_username;
            var7['legacyUsername'] = var16;
            var17 = var5 != var18;
            var16 = null;
            if(!var17) { _fun0008_ip = 115; continue _fun0008 }
case 116:
            var17 = {};
            var19 = var18.id;
            var17['id'] = var19;
            var19 = var18.primary_sku_id;
            var17['primarySkuId'] = var19;
            var19 = var18.custom_install_url;
            var17['customInstallUrl'] = var19;
            var19 = var18.install_params;
            var17['installParams'] = var19;
            var19 = var18.integration_types_config;
            var17['integrationTypesConfig'] = var19;
            var19 = var18.flags;
            var17['flags'] = var19;
            var19 = var18.popular_application_command_ids;
            var17['popularApplicationCommandIds'] = var19;
            var19 = var18.storefront_available;
            var17['storefront_available'] = var19;
            var18 = var18.name;
            var17['name'] = var18;
            var16 = var17;
case 115:
            var7['application'] = var16;
            var7['badges'] = var14;
            var18 = var2.widgets;
            var16 = var5 == var18;
            var14 = undefined;
            if(var16) { _fun0008_ip = 117; continue _fun0008 }
case 118:
            var17 = var18.map;
            var16 = _closure1_slot35;
            var18 = var17.bind(var18)(var16);
            var17 = var18.filter;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 21;
            var16 = var20[var16];
            var16 = var19.bind(var1)(var16);
            var16 = var16.isNotNullish;
            var14 = var17.bind(var18)(var16);
case 117:
            var7['widgets'] = var14;
            var14 = var2.wishlist_settings;
            var7['wishlistSettings'] = var14;
            var16 = var2.user_profile;
            var17 = var5 == var16;
            var14 = undefined;
            if(var17) { _fun0008_ip = 119; continue _fun0008 }
case 120:
            var17 = var16.collectibles;
            var16 = var5 == var17;
            var14 = undefined;
            if(var16) { _fun0008_ip = 119; continue _fun0008 }
case 121:
            var16 = var17.map;
            var15 = function(arg1) {
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
                    if(!var5) { _fun0011_ip = 65; continue _fun0011 }
case 37:
                    var5 = global;
                    var5 = var5.Date;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {constructor: {value: var5}});
                    var9 = var6;
                    var8 = var7;
                    var5 = new var9[var5](var8, var7);
                    var4 = var5 instanceof Object ? var5 : var6;
case 65:
                    var1['expiresAt'] = var4;
                    var1['skuId'] = var3;
                    var1['type'] = var2;
                    return var1;
                }
            };
            var14 = var16.bind(var17)(var15);
case 119:
            var7['collectibles'] = var14;
            var14 = var2.private;
            var7['private'] = var14;
            var7 = var12.bind(var13)(var11, var7);
            var11 = var5 == var9;
            var7 = undefined;
            if(var11) { _fun0008_ip = 122; continue _fun0008 }
case 123:
            var7 = var9.expiresAt;
case 122:
            if(!(var5 != var7)) { _fun0008_ip = 124; continue _fun0008 }
case 125:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 22;
            var7 = var11[var7];
            var7 = var9.bind(var1)(var7);
            var7 = var7.Timeout;
            var9 = var7.prototype;
            var9 = Object.create(var9, {constructor: {value: var7}});
            var26 = var9;
            var7 = new var26[var7](var25);
            var12 = var7 instanceof Object ? var7 : var9;
            var11 = _closure1_slot20;
            var9 = var11.set;
            var7 = var2.user;
            var7 = var7.id;
            var7 = var9.bind(var11)(var7, var12);
            var9 = _closure1_slot36;
            var7 = var2.user;
            var7 = var7.id;
            var7 = var9.bind(var1)(var7);
case 124:
            var7 = var2.guild_member_profile;
            if(!(var5 != var7)) { _fun0008_ip = 126; continue _fun0008 }
case 127:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var9 = var9.bind(var1)(var7);
            var7 = var2.guild_member_profile;
            var9 = var9.bind(var1)(var7);
            var7 = var9.profileEffect;
            var9 = var9.profileFrame;
            var10 = {};
            var11 = var2.user;
            var11 = var11.id;
            var10['userId'] = var11;
            var11 = var2.guild_member_profile;
            var11 = var11.guild_id;
            var10['guildId'] = var11;
            var11 = var2.guild_member_profile;
            var11 = var11.banner;
            var10['banner'] = var11;
            var11 = var2.guild_member_profile;
            var11 = var11.accent_color;
            var10['accentColor'] = var11;
            var12 = var2.guild_member_profile;
            var13 = var5 == var12;
            var11 = undefined;
            if(var13) { _fun0008_ip = 128; continue _fun0008 }
case 129:
            var11 = var12.theme_colors;
case 128:
            var10['themeColors'] = var11;
            var12 = var2.guild_member_profile;
            var13 = var5 == var12;
            var11 = undefined;
            if(var13) { _fun0008_ip = 130; continue _fun0008 }
case 131:
            var11 = var12.popout_animation_particle_type;
case 130:
            var10['popoutAnimationParticleType'] = var11;
            var10['profileEffect'] = var7;
            var10['profileFrame'] = var9;
            var9 = var2.guild_member_profile;
            var9 = var9.bio;
            var10['bio'] = var9;
            var9 = var2.guild_member_profile;
            var9 = var9.pronouns;
            var10['pronouns'] = var9;
            var9 = var2.guild_badges;
            var10['badges'] = var9;
            var10['fetchStartedAt'] = var8;
            var10['fetchEndedAt'] = var6;
            var9 = _closure1_slot19;
            var8 = var9.get;
            var6 = var2.user;
            var6 = var6.id;
            var9 = var8.bind(var9)(var6);
            if(!(var5 == var9)) { _fun0008_ip = 132; continue _fun0008 }
case 133:
            var6 = var4.Map;
            var8 = var6.prototype;
            var8 = Object.create(var8, {constructor: {value: var6}});
            var26 = var8;
            var6 = new var26[var6](var25);
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
            _fun0008_ip = 134; continue _fun0008;
case 132:
            var8 = var9.set;
            var6 = var2.guild_member_profile;
            var6 = var6.guild_id;
            var6 = var8.bind(var9)(var6, var10);
case 134:
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0008_ip = 135; continue _fun0008 }
case 136:
            var6 = var7.expiresAt;
case 135:
            if(!(var5 != var6)) { _fun0008_ip = 126; continue _fun0008 }
case 137:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 22;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.Timeout;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var26 = var7;
            var6 = new var26[var6](var25);
            var7 = var6 instanceof Object ? var6 : var7;
            var9 = _closure1_slot21;
            var8 = var9.get;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var8.bind(var9)(var6);
            if(!(var5 == var6)) { _fun0008_ip = 138; continue _fun0008 }
case 139:
            var4 = var4.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var26 = var5;
            var4 = new var26[var4](var25);
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
            _fun0008_ip = 140; continue _fun0008;
case 138:
            var5 = var6.set;
            var4 = var2.guild_member_profile;
            var4 = var4.guild_id;
            var4 = var5.bind(var6)(var4, var7);
case 140:
            var4 = _closure1_slot37;
            var3 = var2.user;
            var3 = var3.id;
            var2 = var2.guild_member_profile;
            var2 = var2.guild_id;
            var2 = var4.bind(var1)(var3, var2);
case 126:
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
            if(!(var4 == var1)) { _fun0012_ip = 141; continue _fun0012 }
case 36:
            var5 = undefined;
            return var5;
case 141:
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
            if(var4) { _fun0012_ip = 66; continue _fun0012 }
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
case 66:
            var2 = var5.length;
            var4 = 0;
            if(!(var2 > var4)) { _fun0012_ip = 142; continue _fun0012 }
case 143:
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
case 142:
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
            if(!(var4 == var6)) { _fun0013_ip = 144; continue _fun0013 }
case 145:
            var6 = _closure1_slot15;
case 144:
            var7 = _closure1_slot16;
            var5 = var7.get;
            var5 = var5.bind(var7)(var3);
            if(!(var4 == var5)) { _fun0013_ip = 146; continue _fun0013 }
case 63:
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
            _fun0013_ip = 147; continue _fun0013;
case 146:
            var4 = var5.add;
            var4 = var4.bind(var5)(var6);
case 147:
            if(!var2) { _fun0013_ip = 148; continue _fun0013 }
case 149:
            var2 = _closure1_slot17;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 148:
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
            var10 = var1.guildId;
            var3 = var1.apiError;
            var7 = var1.fetchStartedAt;
            var4 = _closure1_slot16;
            var1 = var4.get;
            var8 = var1.bind(var4)(var5);
            var1 = null;
            if(!(var1 != var8)) { _fun0014_ip = 150; continue _fun0014 }
case 64:
            var6 = var8.delete;
            var4 = var10;
            if(!(var1 == var4)) { _fun0014_ip = 65; continue _fun0014 }
case 69:
            var4 = _closure1_slot15;
case 65:
            var4 = var6.bind(var8)(var4);
case 150:
            var6 = _closure1_slot17;
            var4 = var6.delete;
            var4 = var4.bind(var6)(var5);
            var6 = _closure1_slot18;
            var4 = var6.get;
            var9 = var4.bind(var6)(var5);
            if(!(var1 == var9)) { _fun0014_ip = 151; continue _fun0014 }
case 152:
            var4 = {'connectedAccounts': null, 'applicationRoleConnections': null, 'premiumSince': null, 'premiumGuildSince': null, 'application': null, 'legacyUsername': null, 'userId': null, 'banner': null, 'accentColor': null, 'bio': '', 'pronouns': '', 'premiumType': null, 'fetchStartedAt': 0, 'fetchEndedAt': 0};
            var6 = new Array(0);
            var4['connectedAccounts'] = var6;
            var6 = new Array(0);
            var4['applicationRoleConnections'] = var6;
            var4['userId'] = var5;
            var6 = undefined;
            var4['fetchError'] = var6;
            var9 = var4;
case 151:
            var4 = global;
            var6 = var4.Date;
            var4 = var6.now;
            var6 = var4.bind(var6)();
            var9['fetchStartedAt'] = var7;
            var9['fetchEndedAt'] = var6;
            var9['fetchError'] = var3;
            var8 = _closure1_slot18;
            var4 = var8.set;
            var4 = var4.bind(var8)(var5, var9);
            if(!(var1 != var10)) { _fun0014_ip = 153; continue _fun0014 }
case 26:
            var8 = _closure1_slot19;
            var4 = var8.get;
            var9 = var4.bind(var8)(var5);
            var8 = var1 == var9;
            var4 = undefined;
            if(var8) { _fun0014_ip = 154; continue _fun0014 }
case 155:
            var8 = var9.get;
            var4 = var8.bind(var9)(var10);
case 154:
            if(!(var1 != var4)) { _fun0014_ip = 153; continue _fun0014 }
case 156:
            var4['fetchStartedAt'] = var7;
            var4['fetchEndedAt'] = var6;
            var4['fetchError'] = var3;
case 153:
            var6 = var1 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0014_ip = 157; continue _fun0014 }
case 158:
            var4 = var3.status;
case 157:
            var3 = 404;
            if(!(var3 === var4)) { _fun0014_ip = 159; continue _fun0014 }
case 160:
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
case 159:
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
            if(!(var5 == var3)) { _fun0015_ip = 161; continue _fun0015 }
case 162:
            var6 = var2.userId;
            var17 = var2.accent_color;
            var16 = var2.banner;
            var15 = var2.bio;
            var14 = var2.pronouns;
            var13 = var2.popout_animation_particle_type;
            var12 = var2.theme_colors;
            var8 = var2.collectibles;
            var4 = _closure1_slot18;
            var3 = var4.get;
            var10 = var3.bind(var4)(var6);
            if(!(var5 != var10)) { _fun0015_ip = 163; continue _fun0015 }
case 164:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 17;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var7.bind(var4)(var3);
            var3 = {};
            var3['collectibles'] = var8;
            var3 = var7.bind(var4)(var3);
            var7 = var3.profileEffect;
            var11 = var3.profileFrame;
            var9 = _closure1_slot18;
            var8 = var9.set;
            var3 = {};
            var19 = var3;
            var18 = var10;
            var10 = copyDataProperties(var19, var18);
            var10 = 'accentColor';
            var3[9] = var17;
            var10 = 'banner';
            var3[9] = var16;
            var10 = 'bio';
            var3[9] = var15;
            var10 = 'pronouns';
            var3[9] = var14;
            var10 = 'popoutAnimationParticleType';
            var3[9] = var13;
            var10 = 'themeColors';
            var3[9] = var12;
            var10 = 'profileEffect';
            var3[9] = var7;
            var10 = 'profileFrame';
            var3[9] = var11;
            var3 = var8.bind(var9)(var6, var3);
            var8 = var5 == var7;
            var3 = undefined;
            if(var8) { _fun0015_ip = 165; continue _fun0015 }
case 166:
            var3 = var7.expiresAt;
case 165:
            if(!(var5 != var3)) { _fun0015_ip = 163; continue _fun0015 }
case 167:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 22;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.Timeout;
            var7 = var3.prototype;
            var7 = Object.create(var7, {constructor: {value: var3}});
            var20 = var7;
            var3 = new var20[var3](var19);
            var8 = var3 instanceof Object ? var3 : var7;
            var7 = _closure1_slot20;
            var3 = var7.set;
            var3 = var3.bind(var7)(var6, var8);
            var3 = _closure1_slot36;
            var3 = var3.bind(var4)(var6);
            _fun0015_ip = 163; continue _fun0015;
case 161:
            var4 = var2.userId;
            var3 = var2.guild_id;
            var17 = var2.accent_color;
            var16 = var2.banner;
            var15 = var2.bio;
            var14 = var2.pronouns;
            var13 = var2.popout_animation_particle_type;
            var12 = var2.theme_colors;
            var8 = var2.collectibles;
            var6 = _closure1_slot19;
            var2 = var6.get;
            var9 = var2.bind(var6)(var4);
            if(!(var5 != var3)) { _fun0015_ip = 163; continue _fun0015 }
case 168:
            if(!(var5 != var9)) { _fun0015_ip = 163; continue _fun0015 }
case 169:
            var2 = var9.get;
            var10 = var2.bind(var9)(var3);
            if(!(var5 != var10)) { _fun0015_ip = 163; continue _fun0015 }
case 170:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 17;
            var6 = var6[var2];
            var2 = undefined;
            var7 = var7.bind(var2)(var6);
            var6 = {};
            var6['collectibles'] = var8;
            var6 = var7.bind(var2)(var6);
            var7 = var6.profileEffect;
            var11 = var6.profileFrame;
            var8 = var9.set;
            var6 = {};
            var19 = var6;
            var18 = var10;
            var10 = copyDataProperties(var19, var18);
            var10 = 'accentColor';
            var6[9] = var17;
            var10 = 'banner';
            var6[9] = var16;
            var10 = 'bio';
            var6[9] = var15;
            var10 = 'pronouns';
            var6[9] = var14;
            var10 = 'popoutAnimationParticleType';
            var6[9] = var13;
            var10 = 'themeColors';
            var6[9] = var12;
            var10 = 'profileEffect';
            var6[9] = var7;
            var10 = 'profileFrame';
            var6[9] = var11;
            var6 = var8.bind(var9)(var3, var6);
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0015_ip = 171; continue _fun0015 }
case 172:
            var6 = var7.expiresAt;
case 171:
            if(!(var5 != var6)) { _fun0015_ip = 163; continue _fun0015 }
case 173:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 22;
            var6 = var8[var6];
            var6 = var7.bind(var2)(var6);
            var6 = var6.Timeout;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var20 = var7;
            var6 = new var20[var6](var19);
            var7 = var6 instanceof Object ? var6 : var7;
            var8 = _closure1_slot21;
            var6 = var8.get;
            var6 = var6.bind(var8)(var4);
            if(!(var5 == var6)) { _fun0015_ip = 174; continue _fun0015 }
case 175:
            var5 = global;
            var5 = var5.Map;
            var8 = var5.prototype;
            var8 = Object.create(var8, {constructor: {value: var5}});
            var20 = var8;
            var5 = new var20[var5](var19);
            var9 = var5 instanceof Object ? var5 : var8;
            var5 = var9.set;
            var5 = var5.bind(var9)(var3, var7);
            var8 = _closure1_slot21;
            var5 = var8.set;
            var5 = var5.bind(var8)(var4, var9);
            _fun0015_ip = 176; continue _fun0015;
case 174:
            var5 = var6.set;
            var5 = var5.bind(var6)(var3, var7);
case 176:
            var1 = _closure1_slot37;
            var1 = var1.bind(var2)(var4, var3);
case 163:
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
            if(!(var2 != var6)) { _fun0016_ip = 177; continue _fun0016 }
case 178:
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
            var1 = 21;
            var6 = var6[var1];
            var1 = undefined;
            var6 = var9.bind(var1)(var6);
            var6 = var6.isNotNullish;
            var7 = var7.bind(var8)(var6);
            var6 = 'widgets';
            var2[5] = var7;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
case 177:
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
            if(!(var2 != var5)) { _fun0017_ip = 179; continue _fun0017 }
case 164:
            var6 = var5.badges;
            if(!(var2 == var6)) { _fun0017_ip = 146; continue _fun0017 }
case 180:
            var6 = new Array(0);
case 146:
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
            var1[4] = var6;
            var1 = var2.bind(var3)(var4, var1);
case 179:
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
            var3 = _closure1_slot16;
            var1 = var3.get;
            var5 = var1.bind(var3)(var4);
            var1 = null;
            var7 = var1 == var5;
            var3 = undefined;
            var6 = undefined;
            if(var7) { _fun0018_ip = 64; continue _fun0018 }
case 181:
            var6 = var5.size;
case 64:
            var7 = var1 != var6;
            var5 = 0;
            var1 = 0;
            if(!var7) { _fun0018_ip = 49; continue _fun0018 }
case 55:
            var1 = var6;
case 49:
            var5 = var1 > var5;
            var1 = !var5;
            if(var5) { _fun0018_ip = 182; continue _fun0018 }
case 5:
            var2 = _closure1_slot57;
            var1 = var2.bind(var3)(var4);
case 182:
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
                if(var1) { _fun0019_ip = 162; continue _fun0019 }
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
        var3 = _closure1_slot16;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot17;
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
            var7 = arg1;
            var3 = null;
            if(!(var3 != var7)) { _fun0020_ip = 183; continue _fun0020 }
case 184:
            var4 = _closure1_slot18;
            var1 = var4.get;
            var4 = var1.bind(var4)(var7);
            if(!(var3 != var4)) { _fun0020_ip = 185; continue _fun0020 }
case 37:
            var5 = 0;
            var4['fetchStartedAt'] = var5;
            var4['fetchEndedAt'] = var5;
            var1 = undefined;
            var4['fetchError'] = var1;
            var6 = _closure1_slot19;
            var4 = var6.get;
            var4 = var4.bind(var6)(var7);
            if(!(var3 != var4)) { _fun0020_ip = 186; continue _fun0020 }
case 187:
            var3 = _closure1_slot33;
            var2 = var4.values;
            var2 = var2.bind(var4)();
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0020_ip = 186; continue _fun0020 }
case 188:
            var2 = var3.value;
            var2['fetchStartedAt'] = var5;
            var2['fetchEndedAt'] = var5;
            var2['fetchError'] = var1;
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0020_ip = 188; continue _fun0020 }
case 186:
            return var1;
case 185:
            var1 = false;
            return var1;
case 183:
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
                var1 = 23;
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
            if(var2) { _fun0021_ip = 189; continue _fun0021 }
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
case 189:
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
    var2 = 12;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MAX_TIMEOUT_MS;
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
                if(var1) { _fun0022_ip = 190; continue _fun0022 }
case 191:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0022_ip = 192; continue _fun0022;
case 190:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 192:
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
                        if(!(var1 != var3)) { _fun0023_ip = 193; continue _fun0023 }
case 178:
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                                var1 = arg1;
                                var4 = var1.userId;
                                var3 = var1.profile;
                                var1 = null;
                                if(!(var1 != var4)) { _fun0024_ip = 11; continue _fun0024 }
case 33:
                                if(!(var1 == var3)) { _fun0024_ip = 181; continue _fun0024 }
case 194:
                                var2 = _closure1_slot18;
                                var1 = var2.delete;
                                var1 = var1.bind(var2)(var4);
                                _fun0024_ip = 11; continue _fun0024;
case 181:
                                var2 = _closure1_slot18;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var4, var3);
case 11:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
case 193:
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
                var3 = _closure1_slot16;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var6 = null;
                var1 = var6 != var3;
                if(!var1) { _fun0025_ip = 195; continue _fun0025 }
case 144:
                var2 = var3.has;
                if(!(var6 == var4)) { _fun0025_ip = 196; continue _fun0025 }
case 197:
                var4 = _closure1_slot15;
case 196:
                var1 = var2.bind(var3)(var4);
case 195:
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
                if(var3) { _fun0026_ip = 198; continue _fun0026 }
case 36:
                var5 = _closure1_slot19;
                var4 = var5.get;
                var3 = arg1;
                var5 = var4.bind(var5)(var3);
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0026_ip = 63; continue _fun0026 }
case 181:
                var4 = var5.get;
                var3 = var4.bind(var5)(var6);
case 63:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0026_ip = 199; continue _fun0026 }
case 49:
                var2 = var3;
case 199:
                var1 = var2;
case 198:
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
                if(var3) { _fun0027_ip = 178; continue _fun0027 }
case 200:
                var1 = var2.widgets;
case 178:
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
                if(var4) { _fun0028_ip = 178; continue _fun0028 }
case 200:
                var1 = var2.wishlistSettings;
case 178:
                if(!(var3 == var1)) { _fun0028_ip = 201; continue _fun0028 }
case 197:
                var1 = new Array(0);
                _fun0028_ip = 202; continue _fun0028;
case 201:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2.wishlistSettings;
                var1 = var3.bind(var4)(var2);
case 202:
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
                if(!(var1 != var4)) { _fun0029_ip = 201; continue _fun0029 }
case 184:
                var2 = var3.getWishlistIds;
                var4 = var2.bind(var3)(var4);
                var2 = var4.length;
                var3 = 0;
                var5 = var2 > var3;
                var2 = null;
                if(!var5) { _fun0029_ip = 196; continue _fun0029 }
case 197:
                var2 = var4[var3];
case 196:
                return var2;
case 201:
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
                if(var4) { _fun0030_ip = 63; continue _fun0030 }
case 200:
                var4 = var3.wishlistSettings;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0030_ip = 63; continue _fun0030 }
case 6:
                var3 = arg2;
                var2 = var4[var3];
case 63:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0030_ip = 199; continue _fun0030 }
case 49:
                var1 = var2;
case 199:
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
case 178:
                var1 = {};
                var2 = _closure2_slot0;
                var2 = var2.LATEST_SNAPSHOT_VERSION;
                var1['version'] = var2;
                var2 = new Array(0);
                var1['data'] = var2;
                _fun0031_ip = 203; continue _fun0031;
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
case 203:
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
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();