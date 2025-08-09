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
            _closure1_slot31 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function createUserWidgetFromServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var9 = arg1;
            var1 = var9.data;
            var2 = var1.type;
            var1 = var9.data;
            var4 = var1.games;
            var3 = var4.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var5 = var1;
                var4 = var2;
                var3 = copyDataProperties(var5, var4);
                var3 = var2.game_id;
                var2 = 'applicationId';
                var1[var2] = var3;
                return var1;
            };
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 13;
            var1 = var1[var8];
            var7 = undefined;
            var1 = var3.bind(var7)(var1);
            var1 = var1.WidgetType;
            var1 = var1.FAVORITE_GAMES;
            if(!(var2 !== var1)) { _fun0002_ip = 104; continue _fun0002 }
 82:
            var1 = {};
            var3 = var9.id;
            var1['id'] = var3;
            var1['type'] = var2;
            var1['games'] = var4;
            _fun0002_ip = 199; continue _fun0002;
 104:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 14;
            var2 = var5[var2];
            var11 = var3.bind(var7)(var2);
            var2 = var4.length;
            var3 = 0;
            var10 = var2 > var3;
            var2 = 'Favorite games widget has at least one game';
            var2 = var11.bind(var7)(var10, var2);
            var2 = {};
            var9 = var9.id;
            var2['id'] = var9;
            var6 = _closure1_slot0;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.WidgetType;
            var5 = var5.FAVORITE_GAMES;
            var2['type'] = var5;
            var3 = var4[var3];
            var2['game'] = var3;
            var1 = var2;
 199:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function checkUserProfileEffectExpiry(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot19;
            var1 = var3.get;
            var3 = var1.bind(var3)(var5);
            var7 = null;
            var8 = var7 == var3;
            var1 = undefined;
            var6 = undefined;
            if(var8) { _fun0003_ip = 45; continue _fun0003 }
 39:
            var6 = var3.profileEffectExpiresAt;
 45:
            if(!(var7 != var6)) { _fun0003_ip = 202; continue _fun0003 }
 52:
            var8 = var3.profileEffectExpiresAt;
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
            if(!(!(var11 <= var8))) { _fun0003_ip = 162; continue _fun0003 }
 103:
            var9 = _closure1_slot21;
            var8 = var9.get;
            var8 = var8.bind(var9)(var5);
            if(!(var7 != var8)) { _fun0003_ip = 160; continue _fun0003 }
 121:
            var7 = var8.start;
            var10 = var6.Math;
            var9 = var10.min;
            var6 = _closure1_slot18;
            var6 = var9.bind(var10)(var6, var11);
            var4 = function() {
                var3 = _closure1_slot33;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var7.bind(var8)(var6, var4);
            _fun0003_ip = 202; continue _fun0003;
 160:
            return var1;
 162:
            var3['profileEffectId'] = var1;
            var3['profileEffectExpiresAt'] = var1;
            var4 = _closure1_slot21;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var5);
            var3 = _closure1_slot30;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
 202:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function checkGuildMemberProfileEffectExpiry(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var10 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var4;
            var3 = _closure1_slot20;
            var2 = var3.get;
            var7 = var2.bind(var3)(var10);
            var2 = null;
            if(!(var2 != var7)) { _fun0004_ip = 271; continue _fun0004 }
 42:
            var3 = var7.get;
            var8 = var3.bind(var7)(var4);
            var6 = var2 == var8;
            var9 = undefined;
            var3 = undefined;
            if(var6) { _fun0004_ip = 69; continue _fun0004 }
 63:
            var3 = var8.profileEffectExpiresAt;
 69:
            if(!(var2 != var3)) { _fun0004_ip = 271; continue _fun0004 }
 76:
            var6 = _closure1_slot22;
            var3 = var6.get;
            var3 = var3.bind(var6)(var10);
            var10 = var8.profileEffectExpiresAt;
            var6 = 1000;
            var10 = var6 * var10;
            var6 = _closure1_slot14;
            var11 = var10 + var6;
            var6 = global;
            var12 = var6.Date;
            var10 = var12.now;
            var10 = var10.bind(var12)();
            var14 = var11 - var10;
            var10 = 0;
            if(!(!(var14 <= var10))) { _fun0004_ip = 202; continue _fun0004 }
 141:
            if(!(var2 != var3)) { _fun0004_ip = 200; continue _fun0004 }
 145:
            var10 = var3.get;
            var11 = var10.bind(var3)(var4);
            if(!(var2 != var11)) { _fun0004_ip = 198; continue _fun0004 }
 159:
            var10 = var11.start;
            var13 = var6.Math;
            var12 = var13.min;
            var6 = _closure1_slot18;
            var6 = var12.bind(var13)(var6, var14);
            var5 = function() {
                var4 = _closure1_slot34;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5 = var10.bind(var11)(var6, var5);
            _fun0004_ip = 271; continue _fun0004;
 198:
            return var9;
 200:
            return var9;
 202:
            var6 = var7.set;
            var5 = {};
            var16 = var5;
            var15 = var8;
            var8 = copyDataProperties(var16, var15);
            var8 = 'profileEffectId';
            var5[var8] = var9;
            var8 = 'profileEffectExpiresAt';
            var5[var8] = var9;
            var5 = var6.bind(var7)(var4, var5);
            if(!(var2 != var3)) { _fun0004_ip = 257; continue _fun0004 }
 247:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
 257:
            var2 = _closure1_slot30;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
 271:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
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
        _closure1_slot28 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function handleMutualFriendsFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot17;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function handleMutualFriendsFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = _closure1_slot17;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function getMutualFriends(arg1) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 15;
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
    var _closure1_slot38 = var1;
    var1 = function handleMutualFriendsFetchSuccess(arg1) {
        var2 = arg1;
        var5 = _closure1_slot17;
        var4 = var5.delete;
        var1 = var2.userId;
        var1 = var4.bind(var5)(var1);
        var7 = _closure1_slot23;
        var6 = var7.set;
        var5 = var2.userId;
        var8 = _closure1_slot38;
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
    var _closure1_slot39 = var1;
    var1 = function handleProfileFetch(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
            if(var6) { _fun0005_ip = 53; continue _fun0005 }
 48:
            var8 = var3.guild_id;
 53:
            if(!(var5 == var8)) { _fun0005_ip = 64; continue _fun0005 }
 57:
            var8 = _closure1_slot15;
 64:
            var9 = _closure1_slot16;
            var7 = var9.get;
            var6 = var2.user;
            var6 = var6.id;
            var7 = var7.bind(var9)(var6);
            if(!(var5 != var7)) { _fun0005_ip = 105; continue _fun0005 }
 95:
            var6 = var7.delete;
            var6 = var6.bind(var7)(var8);
 105:
            var8 = _closure1_slot17;
            var7 = var8.delete;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var7.bind(var8)(var6);
            var6 = var2.mutual_guilds;
            if(!(var5 != var6)) { _fun0005_ip = 235; continue _fun0005 }
 139:
            var6 = {};
            _closure2_slot0 = var6;
            var8 = var2.mutual_guilds;
            var7 = var8.forEach;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.id;
                    var4 = var1.nick;
                    var2 = _closure1_slot11;
                    var1 = var2.getGuild;
                    var5 = var1.bind(var2)(var3);
                    var1 = null;
                    if(!(var1 != var5)) { _fun0006_ip = 59; continue _fun0006 }
 37:
                    var2 = _closure2_slot0;
                    var1 = {};
                    var1['guild'] = var5;
                    var1['nick'] = var4;
                    var2[var3] = var1;
 59:
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
 235:
            var6 = var2.mutual_friends_count;
            if(!(var5 != var6)) { _fun0005_ip = 311; continue _fun0005 }
 245:
            var7 = var2.mutual_friends_count;
            var9 = _closure1_slot24;
            var8 = var9.set;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var8.bind(var9)(var6, var7);
            var6 = 0;
            if(!(var6 === var7)) { _fun0005_ip = 311; continue _fun0005 }
 282:
            var9 = _closure1_slot23;
            var8 = var9.set;
            var6 = var2.user;
            var7 = var6.id;
            var6 = _closure1_slot26;
            var6 = var8.bind(var9)(var7, var6);
 311:
            var6 = var2.mutual_friends;
            if(!(var5 != var6)) { _fun0005_ip = 397; continue _fun0005 }
 321:
            var9 = _closure1_slot23;
            var8 = var9.set;
            var6 = var2.user;
            var7 = var6.id;
            var10 = _closure1_slot38;
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
 397:
            var6 = var2.premium_since;
            var6 = var5 != var6;
            var12 = null;
            if(!var6) { _fun0005_ip = 446; continue _fun0005 }
 412:
            var6 = global;
            var8 = var6.Date;
            var20 = var2.premium_since;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var21 = var7;
            var6 = new var21[var8](var20, var19);
            var12 = var6 instanceof Object ? var6 : var7;
 446:
            _closure2_slot1 = var12;
            var6 = var2.premium_guild_since;
            var6 = var5 != var6;
            var11 = null;
            if(!var6) { _fun0005_ip = 499; continue _fun0005 }
 465:
            var6 = global;
            var8 = var6.Date;
            var20 = var2.premium_guild_since;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var21 = var7;
            var6 = new var21[var8](var20, var19);
            var11 = var6 instanceof Object ? var6 : var7;
 499:
            _closure2_slot2 = var11;
            var13 = var2.application;
            var6 = var2.badges;
            if(!(var5 == var6)) { _fun0005_ip = 524; continue _fun0005 }
 518:
            var10 = new Array(0);
            _fun0005_ip = 545; continue _fun0005;
 524:
            var8 = var2.badges;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                    if(!(var3 !== var4)) { _fun0007_ip = 63; continue _fun0007 }
 57:
                    var3 = null;
                    if(!(var3 != var5)) { _fun0007_ip = 79; continue _fun0007 }
 63:
                    var3 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0007_ip = 218; continue _fun0007 }
 79:
                    var9 = var2.id;
                    var6 = var9.startsWith;
                    var3 = 'guild_booster_lvl';
                    var6 = var6.bind(var9)(var3);
                    var3 = var2;
                    if(!var6) { _fun0007_ip = 216; continue _fun0007 }
 107:
                    var9 = _closure2_slot2;
                    var6 = null;
                    var3 = var2;
                    if(!(var6 != var9)) { _fun0007_ip = 216; continue _fun0007 }
 123:
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
                    var10 = var9.IWkAq6;
                    var9 = {};
                    var13 = _closure2_slot2;
                    var9['date'] = var13;
                    var10 = var11.bind(var12)(var10, var9);
                    var9 = 'description';
                    var6[var9] = var10;
                    var3 = var6;
 216:
                    return var3;
 218:
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
                    var6 = var3.8zbGNT;
                    var3 = {};
                    var12 = _closure2_slot1;
                    var3['date'] = var12;
                    var3 = var10.bind(var11)(var6, var3);
                    if(!(var4 != var5)) { _fun0007_ip = 353; continue _fun0007 }
 289:
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
 353:
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
 545:
            var6 = _closure1_slot29;
            var6 = var5 != var6;
            if(!var6) { _fun0005_ip = 579; continue _fun0005 }
 556:
            var7 = _closure1_slot29;
            var8 = var7.userId;
            var7 = var2.user;
            var7 = var7.id;
            var6 = var8 === var7;
 579:
            if(!var6) { _fun0005_ip = 633; continue _fun0005 }
 582:
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var7 = var6.bind(var7)();
            var6 = _closure1_slot29;
            var6 = var6.expiresAtMs;
            if(!(!(var7 > var6))) { _fun0005_ip = 629; continue _fun0005 }
 613:
            var7 = _closure1_slot41;
            var6 = _closure1_slot29;
            var6 = var7.bind(var1)(var10, var6);
            _fun0005_ip = 633; continue _fun0005;
 629:
            _closure1_slot29 = var5;
 633:
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
            if(var17) { _fun0005_ip = 689; continue _fun0005 }
 683:
            var15 = var16.banner;
 689:
            var6['banner'] = var15;
            var16 = var2.user_profile;
            var17 = var5 == var16;
            var15 = undefined;
            if(var17) { _fun0005_ip = 715; continue _fun0005 }
 709:
            var15 = var16.accent_color;
 715:
            var6['accentColor'] = var15;
            var16 = var2.user_profile;
            var17 = var5 == var16;
            var15 = undefined;
            if(var17) { _fun0005_ip = 741; continue _fun0005 }
 735:
            var15 = var16.theme_colors;
 741:
            var6['themeColors'] = var15;
            var16 = var2.user_profile;
            var17 = var5 == var16;
            var15 = undefined;
            if(var17) { _fun0005_ip = 767; continue _fun0005 }
 761:
            var15 = var16.popout_animation_particle_type;
 767:
            var6['popoutAnimationParticleType'] = var15;
            var15 = var2.user_profile;
            var16 = var5 == var15;
            var17 = undefined;
            if(var16) { _fun0005_ip = 793; continue _fun0005 }
 787:
            var17 = var15.bio;
 793:
            var18 = var5 != var17;
            var15 = '';
            var16 = var15;
            if(!var18) { _fun0005_ip = 810; continue _fun0005 }
 807:
            var16 = var17;
 810:
            var6['bio'] = var16;
            var17 = var2.user_profile;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0005_ip = 850; continue _fun0005 }
 830:
            var17 = var17.profile_effect;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0005_ip = 850; continue _fun0005 }
 845:
            var16 = var17.id;
 850:
            var6['profileEffectId'] = var16;
            var17 = var2.user_profile;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0005_ip = 891; continue _fun0005 }
 870:
            var17 = var17.profile_effect;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0005_ip = 891; continue _fun0005 }
 885:
            var16 = var17.expires_at;
 891:
            var6['profileEffectExpiresAt'] = var16;
            var17 = var2.user_profile;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0005_ip = 917; continue _fun0005 }
 911:
            var16 = var17.pronouns;
 917:
            var17 = var5 != var16;
            if(!var17) { _fun0005_ip = 927; continue _fun0005 }
 924:
            var15 = var16;
 927:
            var6['pronouns'] = var15;
            var16 = var2.connected_accounts;
            var15 = var16.filter;
            var14 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
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
            if(!(var5 == var14)) { _fun0005_ip = 961; continue _fun0005 }
 957:
            var14 = new Array(0);
 961:
            var6['connectedAccounts'] = var14;
            var14 = var2.application_role_connections;
            if(!(var5 == var14)) { _fun0005_ip = 982; continue _fun0005 }
 978:
            var14 = new Array(0);
 982:
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
            if(!var12) { _fun0005_ip = 1155; continue _fun0005 }
 1055:
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
 1155:
            var6['application'] = var11;
            var6['badges'] = var10;
            var13 = var2.widgets;
            var11 = var5 == var13;
            var10 = undefined;
            if(var11) { _fun0005_ip = 1193; continue _fun0005 }
 1179:
            var12 = var13.map;
            var11 = _closure1_slot32;
            var10 = var12.bind(var13)(var11);
 1193:
            var6['widgets'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var7 = var2.user_profile;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 1240; continue _fun0005 }
 1219:
            var7 = var7.profile_effect;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 1240; continue _fun0005 }
 1234:
            var6 = var7.expires_at;
 1240:
            if(!(var5 != var6)) { _fun0005_ip = 1334; continue _fun0005 }
 1244:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 19;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.Timeout;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var21 = var7;
            var6 = new var21[var6](var20);
            var9 = var6 instanceof Object ? var6 : var7;
            var8 = _closure1_slot21;
            var7 = var8.set;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var7.bind(var8)(var6, var9);
            var7 = _closure1_slot33;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var7.bind(var1)(var6);
 1334:
            var6 = var2.guild_member_profile;
            if(!(var5 != var6)) { _fun0005_ip = 1962; continue _fun0005 }
 1347:
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
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 1433; continue _fun0005 }
 1427:
            var6 = var7.theme_colors;
 1433:
            var9['themeColors'] = var6;
            var7 = var2.guild_member_profile;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 1459; continue _fun0005 }
 1453:
            var6 = var7.popout_animation_particle_type;
 1459:
            var9['popoutAnimationParticleType'] = var6;
            var7 = var2.guild_member_profile;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 1499; continue _fun0005 }
 1479:
            var7 = var7.profile_effect;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 1499; continue _fun0005 }
 1494:
            var6 = var7.id;
 1499:
            var9['profileEffectId'] = var6;
            var7 = var2.guild_member_profile;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 1540; continue _fun0005 }
 1519:
            var7 = var7.profile_effect;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 1540; continue _fun0005 }
 1534:
            var6 = var7.expires_at;
 1540:
            var9['profileEffectExpiresAt'] = var6;
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
            if(!(var5 == var8)) { _fun0005_ip = 1695; continue _fun0005 }
 1620:
            var6 = var4.Map;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var21 = var7;
            var6 = new var21[var6](var20);
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
            _fun0005_ip = 1717; continue _fun0005;
 1695:
            var7 = var8.set;
            var6 = var2.guild_member_profile;
            var6 = var6.guild_id;
            var6 = var7.bind(var8)(var6, var9);
 1717:
            var7 = var2.guild_member_profile;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 1753; continue _fun0005 }
 1732:
            var7 = var7.profile_effect;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0005_ip = 1753; continue _fun0005 }
 1747:
            var6 = var7.expires_at;
 1753:
            if(!(var5 != var6)) { _fun0005_ip = 1962; continue _fun0005 }
 1760:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 19;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.Timeout;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var21 = var7;
            var6 = new var21[var6](var20);
            var7 = var6 instanceof Object ? var6 : var7;
            var9 = _closure1_slot22;
            var8 = var9.get;
            var6 = var2.user;
            var6 = var6.id;
            var6 = var8.bind(var9)(var6);
            if(!(var5 == var6)) { _fun0005_ip = 1909; continue _fun0005 }
 1834:
            var4 = var4.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var21 = var5;
            var4 = new var21[var4](var20);
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
            _fun0005_ip = 1931; continue _fun0005;
 1909:
            var5 = var6.set;
            var4 = var2.guild_member_profile;
            var4 = var4.guild_id;
            var4 = var5.bind(var6)(var4, var7);
 1931:
            var4 = _closure1_slot34;
            var3 = var2.user;
            var3 = var3.id;
            var2 = var2.guild_member_profile;
            var2 = var2.guild_id;
            var2 = var4.bind(var1)(var3, var2);
 1962:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function mergePinnedBadges(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = arg2;
            var4 = null;
            if(!(var4 == var1)) { _fun0008_ip = 18; continue _fun0008 }
 14:
            var5 = undefined;
            return var5;
 18:
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
            if(var4) { _fun0008_ip = 95; continue _fun0008 }
 74:
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
 95:
            var2 = var5.length;
            var4 = 0;
            if(!(var2 > var4)) { _fun0008_ip = 140; continue _fun0008 }
 106:
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
 140:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function handleProfileFetchStart(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.userId;
            var6 = var1.guildId;
            var2 = var1.withMutualFriends;
            var4 = null;
            if(!(var4 == var6)) { _fun0009_ip = 32; continue _fun0009 }
 25:
            var6 = _closure1_slot15;
 32:
            var7 = _closure1_slot16;
            var5 = var7.get;
            var5 = var5.bind(var7)(var3);
            if(!(var4 == var5)) { _fun0009_ip = 108; continue _fun0009 }
 53:
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
            _fun0009_ip = 118; continue _fun0009;
 108:
            var4 = var5.add;
            var4 = var4.bind(var5)(var6);
 118:
            if(!var2) { _fun0009_ip = 135; continue _fun0009 }
 121:
            var2 = _closure1_slot17;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
 135:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function handleProfileFetchFailure(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var5 = var1.userId;
            var8 = var1.guildId;
            var3 = var1.apiError;
            var4 = var1.fetchStartedAt;
            var6 = _closure1_slot16;
            var1 = var6.get;
            var7 = var1.bind(var6)(var5);
            var1 = null;
            if(!(var1 != var7)) { _fun0010_ip = 66; continue _fun0010 }
 48:
            var6 = var7.delete;
            if(!(var1 == var8)) { _fun0010_ip = 61; continue _fun0010 }
 57:
            var8 = _closure1_slot15;
 61:
            var6 = var6.bind(var7)(var8);
 66:
            var7 = _closure1_slot17;
            var6 = var7.delete;
            var6 = var6.bind(var7)(var5);
            var7 = _closure1_slot19;
            var6 = var7.get;
            var7 = var6.bind(var7)(var5);
            if(!(var1 == var7)) { _fun0010_ip = 148; continue _fun0010 }
 98:
            var6 = {'connectedAccounts': null, 'applicationRoleConnections': null, 'premiumSince': null, 'premiumGuildSince': null, 'application': null, 'legacyUsername': null, 'userId': null, 'banner': null, 'accentColor': null, 'bio': '', 'pronouns': '', 'premiumType': null, 'fetchStartedAt': 0, 'fetchEndedAt': 0};
            var8 = new Array(0);
            var6['connectedAccounts'] = var8;
            var8 = new Array(0);
            var6['applicationRoleConnections'] = var8;
            var6['userId'] = var5;
            var8 = undefined;
            var6['fetchError'] = var8;
            var7 = var6;
 148:
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
            if(var6) { _fun0010_ip = 214; continue _fun0010 }
 209:
            var4 = var3.status;
 214:
            var3 = 404;
            if(!(var3 === var4)) { _fun0010_ip = 279; continue _fun0010 }
 224:
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
 279:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function handleProfileUpdateStart() {
        var1 = true;
        _closure1_slot28 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot44 = var1;
    var1 = function handleProfileUpdateSuccess(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var3 = false;
            _closure1_slot28 = var3;
            var3 = var2.guild_id;
            var5 = null;
            if(!(var5 == var3)) { _fun0011_ip = 283; continue _fun0011 }
 26:
            var6 = var2.userId;
            var16 = var2.accent_color;
            var15 = var2.banner;
            var14 = var2.bio;
            var13 = var2.pronouns;
            var12 = var2.popout_animation_particle_type;
            var11 = var2.theme_colors;
            var10 = var2.profileEffectId;
            var3 = var2.profileEffectExpiresAt;
            var7 = _closure1_slot19;
            var4 = var7.get;
            var9 = var4.bind(var7)(var6);
            if(!(var5 != var9)) { _fun0011_ip = 631; continue _fun0011 }
 100:
            var8 = _closure1_slot19;
            var7 = var8.set;
            var4 = {};
            var18 = var4;
            var17 = var9;
            var9 = copyDataProperties(var18, var17);
            var9 = 'accentColor';
            var4[var9] = var16;
            var9 = 'banner';
            var4[var9] = var15;
            var9 = 'bio';
            var4[var9] = var14;
            var9 = 'pronouns';
            var4[var9] = var13;
            var9 = 'popoutAnimationParticleType';
            var4[var9] = var12;
            var9 = 'themeColors';
            var4[var9] = var11;
            var9 = 'profileEffectId';
            var4[var9] = var10;
            var9 = 'profileEffectExpiresAt';
            var4[var9] = var3;
            var4 = var7.bind(var8)(var6, var4);
            if(!(var5 != var3)) { _fun0011_ip = 631; continue _fun0011 }
 206:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 19;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var3 = var3.Timeout;
            var7 = var3.prototype;
            var7 = Object.create(var7, {constructor: {value: var3}});
            var19 = var7;
            var3 = new var19[var3](var18);
            var8 = var3 instanceof Object ? var3 : var7;
            var7 = _closure1_slot21;
            var3 = var7.set;
            var3 = var3.bind(var7)(var6, var8);
            var3 = _closure1_slot33;
            var3 = var3.bind(var4)(var6);
            _fun0011_ip = 631; continue _fun0011;
 283:
            var4 = var2.userId;
            var3 = var2.guild_id;
            var16 = var2.accent_color;
            var15 = var2.banner;
            var14 = var2.bio;
            var13 = var2.pronouns;
            var12 = var2.popout_animation_particle_type;
            var11 = var2.theme_colors;
            var10 = var2.profileEffectId;
            var2 = var2.profileEffectExpiresAt;
            var7 = _closure1_slot20;
            var6 = var7.get;
            var8 = var6.bind(var7)(var4);
            if(!(var5 != var3)) { _fun0011_ip = 631; continue _fun0011 }
 362:
            if(!(var5 != var8)) { _fun0011_ip = 631; continue _fun0011 }
 369:
            var6 = var8.get;
            var9 = var6.bind(var8)(var3);
            if(!(var5 != var9)) { _fun0011_ip = 631; continue _fun0011 }
 386:
            var7 = var8.set;
            var6 = {};
            var18 = var6;
            var17 = var9;
            var9 = copyDataProperties(var18, var17);
            var9 = 'accentColor';
            var6[var9] = var16;
            var9 = 'banner';
            var6[var9] = var15;
            var9 = 'bio';
            var6[var9] = var14;
            var9 = 'pronouns';
            var6[var9] = var13;
            var9 = 'popoutAnimationParticleType';
            var6[var9] = var12;
            var9 = 'themeColors';
            var6[var9] = var11;
            var9 = 'profileEffectId';
            var6[var9] = var10;
            var9 = 'profileEffectExpiresAt';
            var6[var9] = var2;
            var6 = var7.bind(var8)(var3, var6);
            if(!(var5 != var2)) { _fun0011_ip = 631; continue _fun0011 }
 488:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 19;
            var6 = var6[var2];
            var2 = undefined;
            var6 = var7.bind(var2)(var6);
            var6 = var6.Timeout;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var19 = var7;
            var6 = new var19[var6](var18);
            var7 = var6 instanceof Object ? var6 : var7;
            var8 = _closure1_slot22;
            var6 = var8.get;
            var6 = var6.bind(var8)(var4);
            if(!(var5 == var6)) { _fun0011_ip = 610; continue _fun0011 }
 554:
            var5 = global;
            var5 = var5.Map;
            var8 = var5.prototype;
            var8 = Object.create(var8, {constructor: {value: var5}});
            var19 = var8;
            var5 = new var19[var5](var18);
            var9 = var5 instanceof Object ? var5 : var8;
            var5 = var9.set;
            var5 = var5.bind(var9)(var3, var7);
            var8 = _closure1_slot22;
            var5 = var8.set;
            var5 = var5.bind(var8)(var4, var9);
            _fun0011_ip = 621; continue _fun0011;
 610:
            var5 = var6.set;
            var5 = var5.bind(var6)(var3, var7);
 621:
            var1 = _closure1_slot34;
            var1 = var1.bind(var2)(var4, var3);
 631:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function handleProfileUpdateFailure() {
        var1 = false;
        _closure1_slot28 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot46 = var1;
    var1 = function handleWidgetsUpdateSuccess(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = var1.userId;
            var7 = var1.widgets;
            var2 = _closure1_slot19;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0012_ip = 91; continue _fun0012 }
 37:
            var3 = _closure1_slot19;
            var2 = var3.set;
            var1 = {};
            var9 = var1;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var6 = var7.map;
            var5 = _closure1_slot32;
            var6 = var6.bind(var7)(var5);
            var5 = 'widgets';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
 91:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function handlePinBadgesToProfile(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
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
            _closure1_slot29 = var2;
            var3 = _closure1_slot19;
            var2 = var3.get;
            var5 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var5)) { _fun0013_ip = 160; continue _fun0013 }
 94:
            var6 = var5.badges;
            if(!(var2 == var6)) { _fun0013_ip = 108; continue _fun0013 }
 104:
            var6 = new Array(0);
 108:
            var7 = _closure1_slot41;
            var3 = _closure1_slot29;
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
 160:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function handleUserUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
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
            if(var7) { _fun0014_ip = 48; continue _fun0014 }
 43:
            var6 = var5.size;
 48:
            var7 = var1 != var6;
            var5 = 0;
            var1 = 0;
            if(!var7) { _fun0014_ip = 62; continue _fun0014 }
 59:
            var1 = var6;
 62:
            var5 = var1 > var5;
            var1 = !var5;
            if(var5) { _fun0014_ip = 81; continue _fun0014 }
 72:
            var2 = _closure1_slot54;
            var1 = var2.bind(var3)(var4);
 81:
            return var1;
        }
    };
    var _closure1_slot49 = var1;
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot54;
                var3 = undefined;
                var1 = arg2;
                var1 = var4.bind(var3)(var1);
                if(var1) { _fun0015_ip = 26; continue _fun0015 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot50 = var1;
    var1 = function handleGuildMemberStatusChange(arg1) {
        var3 = _closure1_slot54;
        var1 = arg1;
        var1 = var1.user;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot51 = var1;
    var1 = function handleRelationshipStatusChange(arg1) {
        var3 = _closure1_slot54;
        var1 = arg1;
        var1 = var1.relationship;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot52 = var1;
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
    var _closure1_slot53 = var1;
    var1 = function resetProfileFetch(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0016_ip = 58; continue _fun0016 }
 9:
            var3 = _closure1_slot19;
            var2 = var3.get;
            var2 = var2.bind(var3)(var4);
            if(!(var1 != var2)) { _fun0016_ip = 54; continue _fun0016 }
 30:
            var1 = 0;
            var2['fetchStartedAt'] = var1;
            var2['fetchEndedAt'] = var1;
            var1 = undefined;
            var2['fetchError'] = var1;
            return var1;
 54:
            var1 = false;
            return var1;
 58:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var8 = var6[var7];
    var8 = var10.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var10.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var10.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var10.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var10.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var10.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var10.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var10.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var10.bind(var1)(var8);
    var9 = 10;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var9 = 11;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var9 = 12;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.EPHEMERAL_COLLECTIBLE_EXPIRY_GRACE_PERIOD_IN_MS;
    var _closure1_slot14 = var9;
    var10 = var2.Symbol;
    var9 = 'NO GUILD ID';
    var9 = var10.bind(var1)(var9);
    var _closure1_slot15 = var9;
    var9 = var2.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot16 = var9;
    var9 = var2.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot17 = var9;
    var9 = 2147483647;
    var _closure1_slot18 = var9;
    var9 = var2.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot19 = var9;
    var9 = var2.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot20 = var9;
    var9 = var2.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot21 = var9;
    var9 = var2.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot22 = var9;
    var9 = var2.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot23 = var9;
    var9 = var2.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot24 = var9;
    var2 = var2.Map;
    var9 = var2.prototype;
    var9 = Object.create(var9, {constructor: {value: var2}});
    var14 = var9;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot25 = var2;
    var2 = new Array(0);
    var _closure1_slot26 = var2;
    var2 = new Array(0);
    var _closure1_slot27 = var2;
    var2 = false;
    var _closure1_slot28 = var2;
    var2 = null;
    var _closure1_slot29 = var2;
    var2 = function(arg1) {
        var4 = function UserProfileStore() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
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
                var7 = _closure1_slot42;
                var1['USER_PROFILE_FETCH_START'] = var7;
                var7 = _closure1_slot43;
                var1['USER_PROFILE_FETCH_FAILURE'] = var7;
                var7 = _closure1_slot40;
                var1['USER_PROFILE_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot44;
                var1['USER_PROFILE_UPDATE_START'] = var7;
                var7 = _closure1_slot45;
                var1['USER_PROFILE_UPDATE_SUCCESS'] = var7;
                var7 = _closure1_slot46;
                var1['USER_PROFILE_UPDATE_FAILURE'] = var7;
                var7 = _closure1_slot47;
                var1['WIDGET_PENDING_SAVE_SUCCESS'] = var7;
                var7 = _closure1_slot48;
                var1['USER_PROFILE_PIN_BADGES_ON_CLIENT'] = var7;
                var7 = _closure1_slot36;
                var1['MUTUAL_FRIENDS_FETCH_START'] = var7;
                var7 = _closure1_slot39;
                var1['MUTUAL_FRIENDS_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot37;
                var1['MUTUAL_FRIENDS_FETCH_FAILURE'] = var7;
                var7 = _closure1_slot49;
                var1['USER_UPDATE'] = var7;
                var1['GUILD_MEMBER_UPDATE'] = var7;
                var7 = _closure1_slot50;
                var1['GUILD_JOIN'] = var7;
                var1['GUILD_DELETE'] = var7;
                var1['INVITE_ACCEPT_SUCCESS'] = var7;
                var7 = _closure1_slot51;
                var1['GUILD_MEMBER_ADD'] = var7;
                var1['GUILD_MEMBER_REMOVE'] = var7;
                var7 = _closure1_slot52;
                var1['RELATIONSHIP_ADD'] = var7;
                var1['RELATIONSHIP_REMOVE'] = var7;
                var1['RELATIONSHIP_UPDATE'] = var7;
                var7 = _closure1_slot35;
                var1['LOGOUT'] = var7;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot31;
                var1 = var1.bind(var4)();
                if(var1) { _fun0017_ip = 276; continue _fun0017 }
 263:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0017_ip = 310; continue _fun0017;
 276:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 310:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = var3.readSnapshot;
                        var1 = _closure2_slot0;
                        var1 = var1.LATEST_SNAPSHOT_VERSION;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var3)) { _fun0018_ip = 54; continue _fun0018 }
 37:
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                                var1 = arg1;
                                var4 = var1.userId;
                                var3 = var1.profile;
                                var1 = null;
                                if(!(var1 != var4)) { _fun0019_ip = 61; continue _fun0019 }
 20:
                                if(!(var1 == var3)) { _fun0019_ip = 43; continue _fun0019 }
 24:
                                var2 = _closure1_slot19;
                                var1 = var2.delete;
                                var1 = var1.bind(var2)(var4);
                                _fun0019_ip = 61; continue _fun0019;
 43:
                                var2 = _closure1_slot19;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var4, var3);
 61:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
 54:
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
            var1 = _closure1_slot53;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'isFetchingProfile';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var4 = arg2;
                var3 = _closure1_slot16;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var6 = null;
                var1 = var6 != var3;
                if(!var1) { _fun0020_ip = 50; continue _fun0020 }
 32:
                var2 = var3.has;
                if(!(var6 == var4)) { _fun0020_ip = 45; continue _fun0020 }
 41:
                var4 = _closure1_slot15;
 45:
                var1 = var2.bind(var3)(var4);
 50:
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
            var1 = _closure1_slot28;
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
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var6 = arg2;
                var2 = null;
                var3 = var2 == var6;
                var1 = null;
                if(var3) { _fun0021_ip = 68; continue _fun0021 }
 14:
                var5 = _closure1_slot20;
                var4 = var5.get;
                var3 = arg1;
                var5 = var4.bind(var5)(var3);
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0021_ip = 53; continue _fun0021 }
 43:
                var4 = var5.get;
                var3 = var4.bind(var5)(var6);
 53:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0021_ip = 65; continue _fun0021 }
 62:
                var2 = var3;
 65:
                var1 = var2;
 68:
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
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var3 = _closure1_slot19;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0022_ip = 37; continue _fun0022 }
 31:
                var1 = var2.widgets;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'takeSnapshot';
        var5['key'] = var7;
        var6 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var3 = _closure1_slot10;
                var2 = var3.getId;
                var5 = var2.bind(var3)();
                var2 = _closure1_slot19;
                var1 = var2.get;
                var3 = var1.bind(var2)(var5);
                var1 = null;
                if(!(var1 == var3)) { _fun0023_ip = 67; continue _fun0023 }
 37:
                var1 = {};
                var2 = _closure2_slot0;
                var2 = var2.LATEST_SNAPSHOT_VERSION;
                var1['version'] = var2;
                var2 = new Array(0);
                var1['data'] = var2;
                _fun0023_ip = 113; continue _fun0023;
 67:
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
 113:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[10] = var5;
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
    var _closure1_slot30 = var2;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();