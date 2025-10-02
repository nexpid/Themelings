// app/stores/GuildMemberStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
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
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
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
            var9 = _closure1_slot30;
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
            var7 = _closure1_slot30;
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
    var _closure1_slot29 = var1;
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
    var _closure1_slot30 = var1;
    var1 = function trackCommunicationDisabled(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            var3 = var1.communicationDisabledUntil;
            var2 = null;
            if(!(var2 != var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 13;
            var5 = var2[var9];
            var2 = undefined;
            var6 = var6.bind(var2)(var5);
            var5 = var6.isMemberCommunicationDisabled;
            var5 = var5.bind(var6)(var1);
            if(!var5) { _fun0005_ip = 39; continue _fun0005 }
case 41:
            var6 = _closure1_slot35;
            var5 = var1.userId;
            var5 = var6.bind(var2)(var4, var5);
            var6 = _closure1_slot20;
            var7 = var6[var5];
            var6 = var1.communicationDisabledUntil;
            var6 = var7 !== var6;
            if(!var6) { _fun0005_ip = 42; continue _fun0005 }
case 15:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var8 = var8.bind(var2)(var7);
            var7 = var8.isMemberCommunicationDisabled;
            var6 = var7.bind(var8)(var1);
case 42:
            if(!var6) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var7 = _closure1_slot20;
            var6 = var1.communicationDisabledUntil;
            var7[var5] = var6;
            var3 = _closure1_slot33;
            var3 = var3.bind(var2)(var5);
case 43:
            return var2;
case 39:
            var3 = _closure1_slot32;
            var2 = var1.userId;
            var1 = undefined;
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function removeCommunicationDisabled(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var7 = null;
            if(!(var7 == var4)) { _fun0006_ip = 4; continue _fun0006 }
case 45:
            var9 = _closure1_slot20;
            var1 = undefined;
            for(var2 in var9)
case 46:
            {
case 47:
                var12 = var2;
                var11 = _closure1_slot37;
                var11 = var11.bind(var1)(var12);
                if(var11 !== var5) { _fun0006_ip = 46; continue _fun0006 }
case 48:
                var11 = _closure1_slot33;
                var11 = var11.bind(var1)(var12);
                var11 = _closure1_slot34;
                var11 = var11.bind(var1)(var12);
                _fun0006_ip = 46; continue _fun0006;
case 4:
                var2 = _closure1_slot35;
                var3 = undefined;
                var6 = var2.bind(var3)(var5, var4);
                var2 = _closure1_slot20;
                var2 = var2[var6];
                if(!(var7 != var2)) { _fun0006_ip = 17; continue _fun0006 }
case 49:
                var2 = _closure1_slot33;
                var2 = var2.bind(var3)(var6);
case 17:
                var2 = _closure1_slot34;
                var1 = _closure1_slot35;
                var1 = var1.bind(var3)(var5, var4);
                var1 = var2.bind(var3)(var1);
            }
case 50:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function incrementCommunicationDisabledVersion(arg1) {
        var3 = _closure1_slot22;
        var2 = 1;
        var3 = var3 + var2;
        _closure1_slot22 = var3;
        var2 = _closure1_slot24;
        var1 = arg1;
        var2[var1] = var3;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function _removeCommunicationDisabledFromMap(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot36;
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var6 = _closure1_slot10;
            var4 = var6.getId;
            var4 = var4.bind(var6)();
            if(!(var5 === var4)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var5 = _closure1_slot8;
            var4 = _closure1_slot37;
            var4 = var4.bind(var1)(var3);
            var4 = var5.bind(var1)(var4);
case 51:
            var2 = _closure1_slot20;
            var2 = delete var2[var3];
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var5 = function getCommunicationDisabledUserKey(arg1, arg2) {
        var3 = new Array(0);
        var2 = _closure1_slot27;
        var4 = var2.GUILD;
        var2 = arg1;
        var3[var4] = var2;
        var1 = _closure1_slot27;
        var2 = var1.USER;
        var1 = arg2;
        var3[var2] = var1;
        var2 = var3.join;
        var1 = '-';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot35 = var5;
    var4 = function getUserIdFromCommunicationDisabledUserKey(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = '-';
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot27;
        var1 = var1.USER;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot36 = var4;
    var2 = function getGuildIdFromCommunicationDisabledUserKey(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = '-';
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot27;
        var1 = var1.GUILD;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot37 = var2;
    var1 = function computeDerivedMemberState(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var17 = arg1;
            var3 = arg2;
            var1 = var3.length;
            var16 = 0;
            if(!(var16 !== var1)) { _fun0008_ip = 53; continue _fun0008 }
case 33:
            var1 = _closure1_slot29;
            var2 = undefined;
            var14 = var1.bind(var2)(var3);
            var3 = var14.bind(var2)();
            var1 = var3.done;
            var13 = 14;
            var4 = null;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
            var9 = undefined;
            var5 = var3;
            var8 = undefined;
            var6 = undefined;
            var7 = undefined;
            var3 = undefined;
            if(var1) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var1 = var5.value;
            var22 = var17[var1];
            var21 = var12;
            var20 = var11;
            var19 = var10;
            var18 = var9;
            if(!(var4 != var22)) { _fun0008_ip = 56; continue _fun0008 }
case 49:
            var23 = var4 == var9;
            if(var23) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var24 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var13];
            var24 = var24.bind(var2)(var1);
            var1 = var24.doesRoleSortHigher;
            var23 = var1.bind(var24)(var22, var9);
case 57:
            var1 = var9;
            if(!var23) { _fun0008_ip = 59; continue _fun0008 }
case 60:
            var1 = var22;
case 59:
            var23 = var22.color;
            var23 = var23 > var16;
            if(!var23) { _fun0008_ip = 61; continue _fun0008 }
case 19:
            var24 = var4 == var12;
            if(var24) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var13];
            var26 = var26.bind(var2)(var25);
            var25 = var26.doesRoleSortHigher;
            var24 = var25.bind(var26)(var22, var12);
case 62:
            var23 = var24;
case 61:
            var24 = var12;
            if(!var23) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var24 = var22;
case 64:
            var25 = var22.hoist;
            if(!var25) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var23 = var4 == var11;
            if(var23) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var13];
            var27 = var27.bind(var2)(var26);
            var26 = var27.doesRoleSortHigher;
            var23 = var26.bind(var27)(var22, var11);
case 68:
            var25 = var23;
case 66:
            var23 = var11;
            if(!var25) { _fun0008_ip = 70; continue _fun0008 }
case 71:
            var23 = var22;
case 70:
            var25 = var22.icon;
            var25 = var4 != var25;
            if(var25) { _fun0008_ip = 72; continue _fun0008 }
case 73:
            var26 = var22.unicodeEmoji;
            var25 = var4 != var26;
case 72:
            if(!var25) { _fun0008_ip = 74; continue _fun0008 }
case 75:
            var26 = var4 == var10;
            if(var26) { _fun0008_ip = 76; continue _fun0008 }
case 77:
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var13];
            var28 = var28.bind(var2)(var27);
            var27 = var28.doesRoleSortHigher;
            var26 = var27.bind(var28)(var22, var10);
case 76:
            var25 = var26;
case 74:
            var21 = var24;
            var20 = var23;
            var19 = var10;
            var18 = var1;
            if(!var25) { _fun0008_ip = 56; continue _fun0008 }
case 78:
            var21 = var24;
            var20 = var23;
            var19 = var22;
            var18 = var1;
case 56:
            var22 = var14.bind(var2)();
            var1 = var22.done;
            var12 = var21;
            var11 = var20;
            var10 = var19;
            var9 = var18;
            var5 = var22;
            var8 = var12;
            var6 = var11;
            var7 = var10;
            var3 = var9;
            if(!var1) { _fun0008_ip = 55; continue _fun0008 }
case 54:
            var1 = {};
            var5 = var4 == var8;
            var9 = undefined;
            if(var5) { _fun0008_ip = 79; continue _fun0008 }
case 80:
            var9 = var8.colorString;
case 79:
            var10 = var4 != var9;
            var5 = null;
            if(!var10) { _fun0008_ip = 81; continue _fun0008 }
case 82:
            var5 = var9;
case 81:
            var1['colorString'] = var5;
            var5 = var4 == var8;
            var9 = undefined;
            if(var5) { _fun0008_ip = 83; continue _fun0008 }
case 84:
            var9 = var8.colorStrings;
case 83:
            var10 = var4 != var9;
            var5 = null;
            if(!var10) { _fun0008_ip = 85; continue _fun0008 }
case 86:
            var5 = var9;
case 85:
            var1['colorStrings'] = var5;
            var9 = var4 == var8;
            var5 = undefined;
            if(var9) { _fun0008_ip = 87; continue _fun0008 }
case 88:
            var5 = var8.id;
case 87:
            var1['colorRoleId'] = var5;
            var8 = var4 == var7;
            var5 = undefined;
            if(var8) { _fun0008_ip = 89; continue _fun0008 }
case 90:
            var5 = var7.id;
case 89:
            var1['iconRoleId'] = var5;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0008_ip = 91; continue _fun0008 }
case 92:
            var5 = var6.id;
case 91:
            var1['hoistRoleId'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0008_ip = 93; continue _fun0008 }
case 94:
            var2 = var3.id;
case 93:
            var1['highestRoleId'] = var2;
            return var1;
case 53:
            var1 = {'colorString': null, 'colorStrings': null};
            var2 = undefined;
            var1['colorRoleId'] = var2;
            var1['hoistRoleId'] = var2;
            var1['iconRoleId'] = var2;
            var1['highestRoleId'] = var2;
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function createMember(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userId;
            var19 = var1.nick;
            var4 = var1.guildId;
            var18 = var1.avatar;
            var17 = var1.avatarDecoration;
            var15 = var1.guildRoles;
            var16 = var1.roles;
            var14 = var1.premiumSince;
            var13 = var1.isPending;
            var12 = var1.joinedAt;
            var11 = var1.communicationDisabledUntil;
            var10 = var1.unusualDMActivityUntil;
            var8 = var1.fullProfileLoadedTimestamp;
            var7 = var1.flags;
            var6 = var1.collectibles;
            var2 = var1.displayNameStyles;
            var1 = _closure1_slot38;
            var9 = undefined;
            var15 = var1.bind(var9)(var15, var16);
            var1 = {};
            var1['userId'] = var3;
            var1['nick'] = var19;
            var1['guildId'] = var4;
            var1['avatar'] = var18;
            var1['avatarDecoration'] = var17;
            var1['roles'] = var16;
            var16 = var15.colorString;
            var1['colorString'] = var16;
            var16 = var15.colorStrings;
            var1['colorStrings'] = var16;
            var16 = var15.colorRoleId;
            var1['colorRoleId'] = var16;
            var16 = var15.iconRoleId;
            var1['iconRoleId'] = var16;
            var16 = var15.hoistRoleId;
            var1['hoistRoleId'] = var16;
            var15 = var15.highestRoleId;
            var1['highestRoleId'] = var15;
            var1['premiumSince'] = var14;
            var1['isPending'] = var13;
            var1['joinedAt'] = var12;
            var1['communicationDisabledUntil'] = var11;
            var1['unusualDMActivityUntil'] = var10;
            var1['fullProfileLoadedTimestamp'] = var8;
            var1['flags'] = var7;
            var1['collectibles'] = var6;
            var1['displayNameStyles'] = var2;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 15;
            var2 = var2[var8];
            var12 = var6.bind(var9)(var2);
            var11 = var12.hasFlag;
            var2 = var1.flags;
            var6 = null;
            var13 = var6 != var2;
            var7 = 0;
            if(!var13) { _fun0009_ip = 95; continue _fun0009 }
case 96:
            var7 = var2;
case 95:
            var2 = _closure1_slot14;
            var2 = var2.IS_GUEST;
            var2 = var11.bind(var12)(var7, var2);
            if(!var2) { _fun0009_ip = 97; continue _fun0009 }
case 98:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var8 = var7.bind(var9)(var2);
            var7 = var8.addFlag;
            var2 = var1.flags;
            var11 = var6 != var2;
            var10 = 0;
            if(!var11) { _fun0009_ip = 99; continue _fun0009 }
case 100:
            var10 = var2;
case 99:
            var2 = _closure1_slot14;
            var2 = var2.BYPASSES_VERIFICATION;
            var2 = var7.bind(var8)(var10, var2);
            var1['flags'] = var2;
case 97:
            var2 = _closure1_slot16;
            var2 = var2[var4];
            if(!(var6 != var2)) { _fun0009_ip = 101; continue _fun0009 }
case 102:
            var7 = _closure1_slot10;
            var2 = var7.getId;
            var2 = var2.bind(var7)();
            if(!(var3 === var2)) { _fun0009_ip = 103; continue _fun0009 }
case 79:
            var3 = _closure1_slot9;
            var2 = var3.isViewingRoles;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0009_ip = 88; continue _fun0009 }
case 104:
            var3 = _closure1_slot9;
            var2 = var3.isFullServerPreview;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0009_ip = 88; continue _fun0009 }
case 105:
            var2 = _closure1_slot18;
            var2 = var2[var4];
            if(!(var6 != var2)) { _fun0009_ip = 103; continue _fun0009 }
case 106:
            var2 = _closure1_slot18;
            var2 = delete var2[var4];
            _fun0009_ip = 103; continue _fun0009;
case 88:
            var3 = _closure1_slot9;
            var2 = var3.getViewingRoles;
            var8 = var2.bind(var3)(var4);
            var3 = _closure1_slot18;
            var2 = {};
            var22 = var2;
            var21 = var1;
            var7 = copyDataProperties(var22, var21);
            var10 = _closure1_slot9;
            var7 = var10.getMemberOptions;
            var21 = var7.bind(var10)(var4);
            var22 = var2;
            var7 = copyDataProperties(var22, var21);
            if(!(var6 == var8)) { _fun0009_ip = 107; continue _fun0009 }
case 108:
            var6 = new Array(0);
            _fun0009_ip = 109; continue _fun0009;
case 107:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 16;
            var5 = var10[var5];
            var7 = var7.bind(var9)(var5);
            var5 = var7.keys;
            var6 = var5.bind(var7)(var8);
case 109:
            var5 = 'roles';
            var2[var5] = var6;
            var3[var4] = var2;
case 103:
            return var1;
case 101:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function handleCachedGuilds(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot29;
            var1 = undefined;
            var2 = arg1;
            var7 = var3.bind(var1)(var2);
            var3 = var7.bind(var1)();
            var2 = var3.done;
            var6 = 'roles';
            var5 = null;
            var4 = var3;
            var3 = undefined;
            if(var2) { _fun0010_ip = 110; continue _fun0010 }
case 111:
            var12 = var4.value;
            var2 = var12.member;
            var9 = var3;
            if(!(var5 != var2)) { _fun0010_ip = 112; continue _fun0010 }
case 113:
            var10 = _closure1_slot19;
            var2 = var12.id;
            var2 = var10[var2];
            var11 = _closure1_slot19;
            var10 = var12.id;
            if(!(var5 != var2)) { _fun0010_ip = 42; continue _fun0010 }
case 114:
            var2 = {};
            var14 = var12.member;
            var15 = var2;
            var13 = copyDataProperties(var15, var14);
            var13 = var12.member;
            var13 = var13.roles;
            var2[var6] = var13;
            _fun0010_ip = 115; continue _fun0010;
case 42:
            var2 = var12.member;
case 115:
            var11[var10] = var2;
            var10 = _closure1_slot16;
            var2 = var12.id;
            var2 = var10[var2];
            var9 = var3;
            if(!(var5 != var2)) { _fun0010_ip = 112; continue _fun0010 }
case 116:
            var10 = _closure1_slot16;
            var2 = var12.id;
            var2 = var10[var2];
            var10 = var12.member;
            var10 = var10.userId;
            var10 = var2[var10];
            var9 = var2;
            if(!(var5 != var10)) { _fun0010_ip = 112; continue _fun0010 }
case 117:
            var10 = var12.member;
            var11 = var10.userId;
            var10 = {};
            var13 = var12.member;
            var13 = var13.userId;
            var14 = var2[var13];
            var15 = var10;
            var13 = copyDataProperties(var15, var14);
            var12 = var12.member;
            var12 = var12.roles;
            var10[var6] = var12;
            var2[var11] = var10;
            var9 = var2;
case 112:
            var10 = var7.bind(var1)();
            var2 = var10.done;
            var3 = var9;
            var4 = var10;
            if(!var2) { _fun0010_ip = 111; continue _fun0010 }
case 110:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var17 = function handleGuildMemberUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var3 = var1.user;
            var20 = var1.nick;
            var2 = var1.avatar;
            var22 = var1.avatarDecoration;
            var18 = var1.roles;
            var17 = var1.premiumSince;
            var16 = var1.isPending;
            var15 = var1.joinedAt;
            var14 = var1.communicationDisabledUntil;
            var13 = var1.unusualDMActivityUntil;
            var11 = var1.flags;
            var10 = var1.collectibles;
            var9 = var1.displayNameStyles;
            var4 = _closure1_slot16;
            var5 = var4[var6];
            var12 = null;
            if(!(var12 != var5)) { _fun0011_ip = 118; continue _fun0011 }
case 119:
            var7 = _closure1_slot13;
            var4 = var7.getGuild;
            var19 = var4.bind(var7)(var6);
            if(!(var12 != var19)) { _fun0011_ip = 120; continue _fun0011 }
case 121:
            var7 = var3.id;
            var8 = _closure1_slot39;
            var4 = {};
            var21 = var3.id;
            var4['userId'] = var21;
            var4['nick'] = var20;
            var4['guildId'] = var6;
            var4['avatar'] = var2;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 17;
            var20 = var20[var2];
            var2 = undefined;
            var21 = var21.bind(var2)(var20);
            var20 = var21.parseAvatarDecorationData;
            var20 = var20.bind(var21)(var22);
            var4['avatarDecoration'] = var20;
            var21 = _closure1_slot12;
            var20 = var21.getUnsafeMutableRoles;
            var19 = var19.id;
            var19 = var20.bind(var21)(var19);
            var4['guildRoles'] = var19;
            var4['roles'] = var18;
            var4['premiumSince'] = var17;
            var4['isPending'] = var16;
            var4['joinedAt'] = var15;
            var4['communicationDisabledUntil'] = var14;
            var4['unusualDMActivityUntil'] = var13;
            var13 = var3.id;
            var13 = var5[var13];
            var14 = var12 == var13;
            var12 = undefined;
            if(var14) { _fun0011_ip = 122; continue _fun0011 }
case 16:
            var12 = var13.fullProfileLoadedTimestamp;
case 122:
            var4['fullProfileLoadedTimestamp'] = var12;
            var4['flags'] = var11;
            var4['collectibles'] = var10;
            var4['displayNameStyles'] = var9;
            var4 = var8.bind(var2)(var4);
            var5[var7] = var4;
            var4 = _closure1_slot31;
            var3 = var3.id;
            var3 = var5[var3];
            var3 = var4.bind(var2)(var6, var3);
            return var2;
case 120:
            var3 = _closure1_slot15;
            var2 = var3.warn;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = 'Guild ';
            var1 = ' not found during GUILD_MEMBER_UPDATE.';
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
            var1 = false;
            return var1;
case 118:
            var1 = false;
            return var1;
        }
    };
    var1 = function batchUpdateGuildMembers(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var7;
            var3 = _closure1_slot16;
            var3 = var3[var7];
            var _closure2_slot1 = var3;
            var5 = null;
            if(!(var5 != var3)) { _fun0012_ip = 123; continue _fun0012 }
case 37:
            var6 = _closure1_slot13;
            var3 = var6.getGuild;
            var3 = var3.bind(var6)(var7);
            var _closure2_slot2 = var3;
            if(!(var5 != var3)) { _fun0012_ip = 124; continue _fun0012 }
case 8:
            var3 = var4.forEach;
            var1 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var7 = _closure2_slot1;
                    var1 = var2.user;
                    var1 = var1.id;
                    var11 = var7[var1];
                    var1 = var2.user;
                    var6 = var1.id;
                    var8 = _closure1_slot39;
                    var4 = {};
                    var1 = var2.user;
                    var1 = var1.id;
                    var4['userId'] = var1;
                    var1 = var2.nick;
                    var4['nick'] = var1;
                    var1 = _closure2_slot0;
                    var4['guildId'] = var1;
                    var1 = var2.avatar;
                    var4['avatar'] = var1;
                    var9 = _closure1_slot42;
                    var1 = undefined;
                    var9 = var9.bind(var1)(var2);
                    var4['avatarDecoration'] = var9;
                    var12 = _closure1_slot12;
                    var10 = var12.getUnsafeMutableRoles;
                    var9 = _closure2_slot2;
                    var9 = var9.id;
                    var9 = var10.bind(var12)(var9);
                    var4['guildRoles'] = var9;
                    var9 = var2.roles;
                    var4['roles'] = var9;
                    var9 = var2.premium_since;
                    var4['premiumSince'] = var9;
                    var9 = var2.pending;
                    var4['isPending'] = var9;
                    var9 = var2.joined_at;
                    var4['joinedAt'] = var9;
                    var9 = var2.communication_disabled_until;
                    var4['communicationDisabledUntil'] = var9;
                    var9 = var2.flags;
                    var4['flags'] = var9;
                    var10 = null;
                    var12 = var10 == var11;
                    var9 = undefined;
                    if(var12) { _fun0013_ip = 125; continue _fun0013 }
case 126:
                    var9 = var11.fullProfileLoadedTimestamp;
case 125:
                    var4['fullProfileLoadedTimestamp'] = var9;
                    var9 = var2.unusual_dm_activity_until;
                    if(!(var10 == var9)) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                    var12 = var10 == var11;
                    var10 = undefined;
                    if(var12) { _fun0013_ip = 129; continue _fun0013 }
case 130:
                    var10 = var11.unusualDMActivityUntil;
case 129:
                    var9 = var10;
case 127:
                    var4['unusualDMActivityUntil'] = var9;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 18;
                    var9 = var11[var9];
                    var13 = var10.bind(var1)(var9);
                    var12 = var13.parseServerUserCollectibles;
                    var9 = var2.collectibles;
                    var9 = var12.bind(var13)(var9);
                    var4['collectibles'] = var9;
                    var9 = 19;
                    var9 = var11[var9];
                    var11 = var10.bind(var1)(var9);
                    var10 = var11.parseServerDisplayNameStyles;
                    var9 = var2.display_name_styles;
                    var9 = var10.bind(var11)(var9);
                    var4['displayNameStyles'] = var9;
                    var4 = var8.bind(var1)(var4);
                    var7[var6] = var4;
                    var4 = _closure1_slot31;
                    var3 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var2 = var2.user;
                    var2 = var2.id;
                    var2 = var5[var2];
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = _closure1_slot23;
            var1 = var1 + 1;
            _closure1_slot23 = var1;
            var1 = true;
            _fun0012_ip = 131; continue _fun0012;
case 124:
            var4 = _closure1_slot15;
            var3 = var4.warn;
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var5 = 'Guild ';
            var2 = ' not found during batchUpdateGuildMembers.';
            var2 = var6.bind(var5)(var7, var2);
            var2 = var3.bind(var4)(var2);
            var1 = false;
case 131:
            return var1;
case 123:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function getAvatarDecorationFromServerMember(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.parseAvatarDecorationData;
        var1 = arg1;
        var1 = var1.avatar_decoration_data;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function _removeMemberFromGuild(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = _closure1_slot16;
            var1 = var1[var5];
            var6 = null;
            if(!(var6 != var1)) { _fun0014_ip = 41; continue _fun0014 }
case 35:
            var2 = var1[var4];
            if(!(var6 != var2)) { _fun0014_ip = 41; continue _fun0014 }
case 132:
            var1 = delete var1[var4];
            var2 = _closure1_slot32;
            var1 = undefined;
            var2 = var2.bind(var1)(var5, var4);
            var2 = _closure1_slot23;
            var2 = var2 + 1;
            _closure1_slot23 = var2;
            return var1;
case 41:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function buildMembersFromActivityParticipants(arg1, arg2) {
        var6 = arg2;
        var3 = _closure1_slot45;
        var2 = {};
        var4 = arg1;
        var2['id'] = var4;
        var5 = var6.filter;
        var7 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 21;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var6 = var5.bind(var6)(var4);
        var5 = var6.map;
        var4 = function(arg1) {
            var1 = arg1;
            var1 = var1.member;
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var2['members'] = var4;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot44 = var1;
    var1 = function buildMembers(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var12 = arg1;
            var11 = var12.id;
            var1 = _closure1_slot16;
            var1 = var11 in var1;
            if(var1) { _fun0015_ip = 133; continue _fun0015 }
case 134:
            var3 = _closure1_slot16;
            var2 = var12.id;
            var1 = {};
            var3[var2] = var1;
case 133:
            var2 = _closure1_slot13;
            var1 = var2.getGuild;
            var9 = var1.bind(var2)(var11);
            var8 = null;
            if(!(var8 != var9)) { _fun0015_ip = 135; continue _fun0015 }
case 41:
            var1 = _closure1_slot16;
            var7 = var1[var11];
            var2 = _closure1_slot29;
            var1 = var12.members;
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var2 = var5.bind(var6)();
            var1 = var2.done;
            var4 = 18;
            var3 = 19;
            if(var1) { _fun0015_ip = 136; continue _fun0015 }
case 137:
            var15 = var2.value;
            var1 = var15.user;
            var1 = var1.id;
            var18 = var7[var1];
            var14 = _closure1_slot39;
            var13 = {};
            var13['userId'] = var1;
            var16 = var15.nick;
            var13['nick'] = var16;
            var16 = var12.id;
            var13['guildId'] = var16;
            var16 = var15.avatar;
            var13['avatar'] = var16;
            var16 = _closure1_slot42;
            var16 = var16.bind(var6)(var15);
            var13['avatarDecoration'] = var16;
            var19 = _closure1_slot12;
            var17 = var19.getUnsafeMutableRoles;
            var16 = var9.id;
            var16 = var17.bind(var19)(var16);
            var13['guildRoles'] = var16;
            var16 = var15.roles;
            var13['roles'] = var16;
            var16 = var15.premium_since;
            var13['premiumSince'] = var16;
            var16 = var15.pending;
            var13['isPending'] = var16;
            var16 = var15.joined_at;
            var13['joinedAt'] = var16;
            var16 = var15.communication_disabled_until;
            var13['communicationDisabledUntil'] = var16;
            var17 = var8 == var18;
            var16 = undefined;
            if(var17) { _fun0015_ip = 73; continue _fun0015 }
case 110:
            var16 = var18.fullProfileLoadedTimestamp;
case 73:
            var13['fullProfileLoadedTimestamp'] = var16;
            var16 = var15.flags;
            var13['flags'] = var16;
            var16 = var15.unusual_dm_activity_until;
            if(!(var8 == var16)) { _fun0015_ip = 138; continue _fun0015 }
case 139:
            var19 = var8 == var18;
            var17 = undefined;
            if(var19) { _fun0015_ip = 140; continue _fun0015 }
case 141:
            var17 = var18.unusualDMActivityUntil;
case 140:
            var16 = var17;
case 138:
            var13['unusualDMActivityUntil'] = var16;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = var16[var4];
            var20 = var17.bind(var6)(var18);
            var19 = var20.parseServerUserCollectibles;
            var18 = var15.collectibles;
            var18 = var19.bind(var20)(var18);
            var13['collectibles'] = var18;
            var16 = var16[var3];
            var17 = var17.bind(var6)(var16);
            var16 = var17.parseServerDisplayNameStyles;
            var15 = var15.display_name_styles;
            var15 = var16.bind(var17)(var15);
            var13['displayNameStyles'] = var15;
            var13 = var14.bind(var6)(var13);
            var7[var1] = var13;
            var1 = _closure1_slot31;
            var1 = var1.bind(var6)(var11, var13);
            var13 = var5.bind(var6)();
            var1 = var13.done;
            var2 = var13;
            if(!var1) { _fun0015_ip = 137; continue _fun0015 }
case 136:
            var1 = true;
            return var1;
case 135:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var16 = function handleGuildRoleUpdateOrDelete(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot16;
            var3 = var1.guildId;
            var12 = var4[var3];
            var11 = null;
            if(!(var11 != var12)) { _fun0016_ip = 142; continue _fun0016 }
case 143:
            var5 = _closure1_slot13;
            var4 = var5.getGuild;
            var3 = var1.guildId;
            var10 = var4.bind(var5)(var3);
            if(!(var11 != var10)) { _fun0016_ip = 105; continue _fun0016 }
case 41:
            var4 = _closure1_slot10;
            var3 = var4.getId;
            var9 = var3.bind(var4)();
            var5 = _closure1_slot29;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 16;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var4);
            var4 = var6.keys;
            var4 = var4.bind(var6)(var12);
            var8 = var5.bind(var3)(var4);
            var5 = var8.bind(var3)();
            var4 = var5.done;
            var7 = 'GUILD_ROLE_DELETE';
            var6 = 0;
            if(var4) { _fun0016_ip = 144; continue _fun0016 }
case 145:
            var4 = var5.value;
            var16 = var12[var4];
            var14 = var16.roles;
            if(!(var11 != var14)) { _fun0016_ip = 146; continue _fun0016 }
case 147:
            var14 = var16.roles;
            var14 = var14.length;
            if(!(!(var14 > var6))) { _fun0016_ip = 148; continue _fun0016 }
case 146:
            var14 = var16.colorString;
            if(!(var11 == var14)) { _fun0016_ip = 148; continue _fun0016 }
case 149:
            var14 = var16.hoistRoleId;
            if(!(var11 != var14)) { _fun0016_ip = 136; continue _fun0016 }
case 148:
            if(!(var4 === var9)) { _fun0016_ip = 64; continue _fun0016 }
case 61:
            var14 = var1.type;
            if(!(var7 !== var14)) { _fun0016_ip = 150; continue _fun0016 }
case 64:
            var17 = var16.roles;
            _fun0016_ip = 151; continue _fun0016;
case 150:
            var18 = var16.roles;
            var15 = var18.filter;
            var14 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.roleId;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var17 = var15.bind(var18)(var14);
case 151:
            var15 = _closure1_slot39;
            var14 = {};
            var14['userId'] = var4;
            var18 = var16.nick;
            var14['nick'] = var18;
            var18 = var1.guildId;
            var14['guildId'] = var18;
            var18 = var16.avatar;
            var14['avatar'] = var18;
            var18 = var16.avatarDecoration;
            var14['avatarDecoration'] = var18;
            var20 = _closure1_slot12;
            var19 = var20.getUnsafeMutableRoles;
            var18 = var10.id;
            var18 = var19.bind(var20)(var18);
            var14['guildRoles'] = var18;
            var14['roles'] = var17;
            var17 = var16.premiumSince;
            var14['premiumSince'] = var17;
            var17 = var16.isPending;
            var14['isPending'] = var17;
            var17 = var16.joinedAt;
            var14['joinedAt'] = var17;
            var17 = var16.flags;
            var14['flags'] = var17;
            var18 = var11 == var16;
            var17 = undefined;
            if(var18) { _fun0016_ip = 118; continue _fun0016 }
case 152:
            var17 = var16.fullProfileLoadedTimestamp;
case 118:
            var14['fullProfileLoadedTimestamp'] = var17;
            var17 = var16.collectibles;
            var14['collectibles'] = var17;
            var16 = var16.displayNameStyles;
            var14['displayNameStyles'] = var16;
            var14 = var15.bind(var3)(var14);
            var12[var4] = var14;
            var15 = _closure1_slot31;
            var14 = var1.guildId;
            var4 = var12[var4];
            var4 = var15.bind(var3)(var14, var4);
case 136:
            var14 = var8.bind(var3)();
            var4 = var14.done;
            var5 = var14;
            if(!var4) { _fun0016_ip = 145; continue _fun0016 }
case 144:
            return var3;
case 105:
            var3 = _closure1_slot15;
            var2 = var3.warn;
            var24 = var1.guildId;
            var22 = var1.type;
            var1 = global;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var25 = 'Guild ';
            var23 = ' not found during ';
            var21 = '.';
            var1 = var25[var6](var24, var23, var22, var21, var20);
            var1 = var2.bind(var3)(var1);
            var1 = false;
            return var1;
case 142:
            var1 = false;
            return var1;
        }
    };
    var15 = function handleImpersonateUpdate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var2 = _closure1_slot16;
            var5 = var2[var6];
            var2 = null;
            if(!(var2 != var5)) { _fun0017_ip = 153; continue _fun0017 }
case 38:
            var4 = _closure1_slot13;
            var3 = var4.getGuild;
            var8 = var3.bind(var4)(var6);
            if(!(var2 != var8)) { _fun0017_ip = 22; continue _fun0017 }
case 9:
            var3 = _closure1_slot10;
            var2 = var3.getId;
            var4 = var2.bind(var3)();
            var2 = var5[var4];
            var7 = _closure1_slot39;
            var3 = {};
            var3['userId'] = var4;
            var9 = var2.nick;
            var3['nick'] = var9;
            var3['guildId'] = var6;
            var9 = var2.avatar;
            var3['avatar'] = var9;
            var9 = var2.avatarDecoration;
            var3['avatarDecoration'] = var9;
            var10 = _closure1_slot12;
            var9 = var10.getUnsafeMutableRoles;
            var8 = var8.id;
            var8 = var9.bind(var10)(var8);
            var3['guildRoles'] = var8;
            var8 = var2.roles;
            var3['roles'] = var8;
            var8 = var2.premiumSince;
            var3['premiumSince'] = var8;
            var8 = var2.isPending;
            var3['isPending'] = var8;
            var8 = var2.joinedAt;
            var3['joinedAt'] = var8;
            var8 = var2.communicationDisabledUntil;
            var3['communicationDisabledUntil'] = var8;
            var8 = var2.fullProfileLoadedTimestamp;
            var3['fullProfileLoadedTimestamp'] = var8;
            var8 = var2.flags;
            var3['flags'] = var8;
            var8 = var2.collectibles;
            var3['collectibles'] = var8;
            var2 = var2.displayNameStyles;
            var3['displayNameStyles'] = var2;
            var2 = undefined;
            var3 = var7.bind(var2)(var3);
            var5[var4] = var3;
            return var2;
case 22:
            var3 = _closure1_slot15;
            var2 = var3.warn;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = 'Guild ';
            var1 = ' not found during IMPERSONATE_UPDATE.';
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
            var1 = false;
            return var1;
case 153:
            var1 = false;
            return var1;
        }
    };
    var1 = function processResolvedMembers(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var5;
            var2 = null;
            var7 = var2 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var7) { _fun0018_ip = 132; continue _fun0018 }
case 154:
            var3 = var5.members;
case 132:
            if(!(var2 != var3)) { _fun0018_ip = 155; continue _fun0018 }
case 52:
            if(!(var2 != var6)) { _fun0018_ip = 155; continue _fun0018 }
case 156:
            var3 = _closure1_slot45;
            var2 = {};
            var2['id'] = var6;
            var6 = global;
            var7 = var6.Object;
            var6 = var7.entries;
            var5 = var5.members;
            var7 = var6.bind(var7)(var5);
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var5 = arg1;
                    var3 = var5[Symbol.iterator];
                    var5 = var3().next;
                    var2 = var5().value;
                    var4 = var3;
                    var1 = undefined;
                    var4 = var4 === var1;
                    var6 = undefined;
                    if(var4) { _fun0019_ip = 157; continue _fun0019 }
case 158:
                    var6 = var2;
case 157:
                    var2 = undefined;
                    if(var4) { _fun0019_ip = 159; continue _fun0019 }
case 160:
                    var7 = var5().value;
                    var5 = var3;
                    var5 = var5 === var1;
                    var2 = undefined;
                    var4 = var5;
                    if(var5) { _fun0019_ip = 159; continue _fun0019 }
case 161:
                    var2 = var7;
                    var4 = var5;
case 159:
                    if(var4) { _fun0019_ip = 162; continue _fun0019 }
case 41:
                    var3.return();
case 162:
                    var3 = _closure2_slot0;
                    var4 = null;
                    var7 = var4 == var3;
                    var3 = undefined;
                    if(var7) { _fun0019_ip = 119; continue _fun0019 }
case 163:
                    var5 = _closure2_slot0;
                    var5 = var5.users;
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0019_ip = 119; continue _fun0019 }
case 164:
                    var3 = var5[var6];
case 119:
                    if(!(var4 == var3)) { _fun0019_ip = 17; continue _fun0019 }
case 58:
                    return var1;
case 17:
                    var1 = {};
                    var10 = var1;
                    var9 = var2;
                    var2 = copyDataProperties(var10, var9);
                    var2 = 'user';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.filter;
            var4 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var2['members'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
case 155:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function processMessageResolvedMembers(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var3 = false;
            var _closure2_slot1 = var3;
            var5 = var1.message_snapshots;
            var3 = null;
            if(!(var3 != var5)) { _fun0020_ip = 165; continue _fun0020 }
case 157:
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var5 = _closure1_slot46;
                    var1 = arg1;
                    var3 = var1.message;
                    var2 = null;
                    var6 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0021_ip = 143; continue _fun0021 }
case 38:
                    var4 = var3.resolved;
case 143:
                    var6 = _closure2_slot0;
                    var6 = var6.message_reference;
                    var7 = var2 == var6;
                    var2 = undefined;
                    if(var7) { _fun0021_ip = 11; continue _fun0021 }
case 32:
                    var2 = var6.guild_id;
case 11:
                    var2 = var5.bind(var1)(var4, var2);
                    if(!var2) { _fun0021_ip = 166; continue _fun0021 }
case 3:
                    var2 = true;
                    _closure2_slot1 = var2;
case 166:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
case 165:
            var5 = _closure1_slot46;
            var4 = var1.resolved;
            var3 = undefined;
            var1 = arg2;
            var1 = var5.bind(var3)(var4, var1);
            if(var1) { _fun0020_ip = 55; continue _fun0020 }
case 167:
            var1 = _closure2_slot1;
case 55:
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var14 = function handleIncomingMessage(arg1) {
        var1 = arg1;
        var4 = var1.message;
        var3 = var1.guildId;
        var2 = _closure1_slot47;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var1 = function mergeMessageResolvedMembers(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot11;
            var3 = var5.getChannel;
            var2 = var4.channel_id;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot47;
            var1 = null;
            var6 = var1 == var5;
            var1 = undefined;
            var2 = undefined;
            if(var6) { _fun0022_ip = 168; continue _fun0022 }
case 165:
            var2 = var5.guild_id;
case 168:
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var13 = function handleLoadMessages(arg1) {
        var1 = arg1;
        var3 = var1.messages;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot48;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot49 = var13;
    var8 = function handleLoadSearchResults(arg1) {
        var1 = arg1;
        var4 = var1.data;
        var1 = new Array(0);
        var _closure2_slot0 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var1 = arg1;
            var3 = var1.messages;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
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
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot49;
        var2 = {};
        var2['messages'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var1 = global;
    var18 = var1.Object;
    var12 = var18.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var18)(var3, var1, var7);
    var20 = 0;
    var7 = var10[var20];
    var1 = undefined;
    var7 = var11.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var19 = 1;
    var7 = var10[var19];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.clearCommunicationDisabledNotice;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var10[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.GuildMemberFlags;
    var _closure1_slot14 = var7;
    var7 = 12;
    var7 = var10[var7];
    var12 = var11.bind(var1)(var7);
    var7 = var12.prototype;
    var18 = Object.create(var7, {constructor: {value: var12}});
    var7 = 'GuildMemberStore';
    var24 = var18;
    var23 = var7;
    var12 = new var24[var12](var23, var22);
    var12 = var12 instanceof Object ? var12 : var18;
    var _closure1_slot15 = var12;
    var12 = {};
    var _closure1_slot16 = var12;
    var12 = {};
    var _closure1_slot17 = var12;
    var12 = {};
    var _closure1_slot18 = var12;
    var12 = {};
    var _closure1_slot19 = var12;
    var12 = {};
    var _closure1_slot20 = var12;
    var12 = false;
    var _closure1_slot21 = var12;
    var _closure1_slot22 = var20;
    var _closure1_slot23 = var20;
    var12 = {};
    var _closure1_slot24 = var12;
    var12 = {};
    var _closure1_slot25 = var12;
    var12 = {};
    var18 = new Array(0);
    var12['added'] = var18;
    var18 = new Array(0);
    var12['removed'] = var18;
    var _closure1_slot26 = var12;
    var12 = {};
    var12['GUILD'] = var20;
    var18 = 'GUILD';
    var12[var20] = var18;
    var12['USER'] = var19;
    var18 = 'USER';
    var12[var19] = var18;
    var _closure1_slot27 = var12;
    var12 = 24;
    var12 = var10[var12];
    var12 = var11.bind(var1)(var12);
    var18 = var12.Store;
    var12 = function(arg1) {
        var4 = function GuildMemberStore() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
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
                var1 = _closure1_slot28;
                var1 = var1.bind(var3)();
                if(var1) { _fun0023_ip = 167; continue _fun0023 }
case 161:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0023_ip = 169; continue _fun0023;
case 167:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 169:
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
            var6 = this;
            var5 = var6.waitFor;
            var10 = _closure1_slot13;
            var9 = _closure1_slot12;
            var8 = _closure1_slot10;
            var7 = _closure1_slot9;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(21);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMutableAllGuildsAndMembers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'memberOf';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 22;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var2 = _closure1_slot16;
            var3 = var3.bind(var4)(var2);
            var2 = var3.toPairs;
            var4 = var2.bind(var3)();
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var2 = var1;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if(var3) { _fun0024_ip = 9; continue _fun0024 }
case 158:
                    var5 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0024_ip = 9; continue _fun0024 }
case 111:
                    var2 = var5;
                    var3 = var4;
case 9:
                    if(var3) { _fun0024_ip = 8; continue _fun0024 }
case 170:
                    var1.return();
case 8:
                    var1 = _closure3_slot0;
                    var2 = var2[var1];
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var4 = var1().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    if(var3) { _fun0025_ip = 154; continue _fun0025 }
case 134:
                    var1 = var4;
case 154:
                    if(var3) { _fun0025_ip = 132; continue _fun0025 }
case 38:
                    var2.return();
case 132:
                    return var1;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getNicknameGuildsMapping';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var11 = arg1;
                var1 = {};
                var9 = _closure1_slot16;
                var4 = global;
                var3 = null;
                for(var5 in var9)
case 158:
                {
case 37:
                    var14 = var5;
                    var12 = _closure1_slot16;
                    var12 = var12[var14];
                    var13 = var12[var11];
                    var15 = var3 == var13;
                    var12 = undefined;
                    if(var15) { _fun0026_ip = 162; continue _fun0026 }
case 159:
                    var12 = var13.nick;
case 162:
                    if(var3 == var12) { _fun0026_ip = 158; continue _fun0026 }
case 34:
                    var13 = var4.Object;
                    var13 = var13.prototype;
                    var15 = var13.hasOwnProperty;
                    var13 = var15.call;
                    var13 = var13.bind(var15)(var1, var12);
                    if(var13) { _fun0026_ip = 137; continue _fun0026 }
case 171:
                    var13 = new Array(0);
                    var1[var12] = var13;
case 137:
                    var13 = var1[var12];
                    var12 = var13.push;
                    var12 = var12.bind(var13)(var14);
                    _fun0026_ip = 158; continue _fun0026;
                }
case 172:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getNicknames';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var4 = var5.getNicknameGuildsMapping;
            var1 = arg1;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isMember';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var2 = arg1;
                var4 = arg2;
                var3 = null;
                if(!(var3 != var2)) { _fun0027_ip = 173; continue _fun0027 }
case 45:
                if(!(var3 != var4)) { _fun0027_ip = 173; continue _fun0027 }
case 174:
                var1 = _closure1_slot16;
                var2 = var1[var2];
                var1 = var3 != var2;
                if(!var1) { _fun0027_ip = 165; continue _fun0027 }
case 143:
                var2 = var2[var4];
                var1 = var3 != var2;
case 165:
                return var1;
case 173:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isGuestOrLurker';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var2 = arg1;
                var4 = arg2;
                var3 = null;
                if(!(var3 != var2)) { _fun0028_ip = 175; continue _fun0028 }
case 45:
                if(!(var3 != var4)) { _fun0028_ip = 175; continue _fun0028 }
case 174:
                var1 = _closure1_slot16;
                var2 = var1[var2];
                var1 = var3 != var2;
                if(!var1) { _fun0028_ip = 159; continue _fun0028 }
case 143:
                var4 = var2[var4];
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0028_ip = 51; continue _fun0028 }
case 168:
                var2 = var4.joinedAt;
case 51:
                var1 = var3 == var2;
case 159:
                return var1;
case 175:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isCurrentUserGuest';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var5 = arg1;
                var1 = null;
                if(!(var1 != var5)) { _fun0029_ip = 176; continue _fun0029 }
case 177:
                var4 = _closure1_slot10;
                var3 = var4.getId;
                var4 = var3.bind(var4)();
                var3 = _closure1_slot16;
                var3 = var3[var5];
                if(!(var1 != var3)) { _fun0029_ip = 58; continue _fun0029 }
case 47:
                var5 = var3[var4];
                if(!(var1 != var5)) { _fun0029_ip = 58; continue _fun0029 }
case 6:
                var3 = var3[var4];
                var5 = var3.flags;
                var1 = var1 != var5;
                if(!var1) { _fun0029_ip = 137; continue _fun0029 }
case 178:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 15;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.hasFlag;
                var2 = _closure1_slot14;
                var2 = var2.IS_GUEST;
                var1 = var3.bind(var4)(var5, var2);
case 137:
                return var1;
case 58:
                var1 = false;
                return var1;
case 176:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getMemberIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var4 = arg1;
                var2 = null;
                if(!(var2 != var4)) { _fun0030_ip = 113; continue _fun0030 }
case 177:
                var3 = _closure1_slot16;
                var3 = var3[var4];
                if(!(var2 != var3)) { _fun0030_ip = 179; continue _fun0030 }
case 158:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.keys;
                var1 = var1.bind(var2)(var3);
                _fun0030_ip = 178; continue _fun0030;
case 179:
                var1 = new Array(0);
case 178:
                return var1;
case 113:
                var1 = new Array(0);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getMembers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0031_ip = 180; continue _fun0031 }
case 177:
                var2 = _closure1_slot16;
                var3 = var2[var3];
                if(!(var1 != var3)) { _fun0031_ip = 173; continue _fun0031 }
case 158:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.values;
                var1 = var1.bind(var2)(var3);
                _fun0031_ip = 181; continue _fun0031;
case 173:
                var1 = new Array(0);
case 181:
                return var1;
case 180:
                var1 = new Array(0);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getTrueMember';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var2 = _closure1_slot16;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var2 = var1 != var3;
                if(!var2) { _fun0032_ip = 7; continue _fun0032 }
case 35:
                var2 = arg2;
                var1 = var3[var2];
case 7:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getMember';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var5 = arg1;
                var7 = arg2;
                var2 = this;
                var1 = var2.getTrueMember;
                var4 = var1.bind(var2)(var5, var7);
                var3 = null;
                var1 = var4;
                if(!(var3 != var4)) { _fun0033_ip = 182; continue _fun0033 }
case 7:
                var8 = _closure1_slot10;
                var6 = var8.getId;
                var6 = var6.bind(var8)();
                var1 = var4;
                if(!(var7 === var6)) { _fun0033_ip = 182; continue _fun0033 }
case 48:
                var7 = _closure1_slot9;
                var6 = var7.isViewingRoles;
                var6 = var6.bind(var7)(var5);
                if(var6) { _fun0033_ip = 183; continue _fun0033 }
case 5:
                var7 = _closure1_slot9;
                var6 = var7.isFullServerPreview;
                var6 = var6.bind(var7)(var5);
                var1 = var4;
                if(!var6) { _fun0033_ip = 182; continue _fun0033 }
case 183:
                var2 = _closure1_slot18;
                var2 = var2[var5];
                var1 = var4;
                if(!(var3 != var2)) { _fun0033_ip = 182; continue _fun0033 }
case 58:
                var1 = var2;
case 182:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getSelfMember';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = var4.getMember;
            var2 = _closure1_slot10;
            var1 = var2.getId;
            var2 = var1.bind(var2)();
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getSelfMemberJoinedAt';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var5 = arg1;
                var6 = this;
                var1 = _closure1_slot17;
                var1 = var1[var5];
                var2 = null;
                if(!(var2 == var1)) { _fun0034_ip = 184; continue _fun0034 }
case 35:
                var3 = var6.getSelfMember;
                var3 = var3.bind(var6)(var5);
                if(!(var2 != var3)) { _fun0034_ip = 185; continue _fun0034 }
case 47:
                var6 = var3.joinedAt;
                if(!(var2 != var6)) { _fun0034_ip = 185; continue _fun0034 }
case 181:
                var6 = global;
                var7 = var6.Date;
                var8 = var3.joinedAt;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var9 = var6;
                var3 = new var9[var7](var8, var7);
                var3 = var3 instanceof Object ? var3 : var6;
                var4 = _closure1_slot17;
                var4[var5] = var3;
                return var3;
case 185:
                return var2;
case 184:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getCachedSelfMember';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var2 = _closure1_slot19;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0035_ip = 186; continue _fun0035 }
case 35:
                var1 = var2;
case 186:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getNick';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var3 = this;
                var1 = null;
                if(!(var1 != var5)) { _fun0036_ip = 181; continue _fun0036 }
case 187:
                if(!(var1 != var4)) { _fun0036_ip = 181; continue _fun0036 }
case 188:
                var2 = var3.getMember;
                var3 = var2.bind(var3)(var5, var4);
                var4 = var1 != var3;
                var2 = null;
                if(!var4) { _fun0036_ip = 6; continue _fun0036 }
case 189:
                var2 = var3.nick;
case 6:
                return var2;
case 181:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getCommunicationDisabledUserMap';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getCommunicationDisabledVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getPendingRoleUpdates';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var3 = _closure1_slot25;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0037_ip = 158; continue _fun0037 }
case 33:
                var1 = _closure1_slot26;
case 158:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getMemberRoleWithPendingUpdates';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var3 = var4.getMember;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                var4 = null;
                var3 = var4 == var1;
                var7 = undefined;
                var8 = undefined;
                if(var3) { _fun0038_ip = 189; continue _fun0038 }
case 143:
                var8 = var1.roles;
case 189:
                if(!(var4 == var8)) { _fun0038_ip = 181; continue _fun0038 }
case 173:
                var8 = new Array(0);
case 181:
                var1 = _closure1_slot25;
                var2 = var1[var2];
                var1 = var8;
                if(!(var4 != var2)) { _fun0038_ip = 190; continue _fun0038 }
case 191:
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 22;
                var4 = var9[var3];
                var5 = var6.bind(var7)(var4);
                var4 = var5.difference;
                var3 = var9[var3];
                var7 = var6.bind(var7)(var3);
                var6 = var7.union;
                var3 = var2.added;
                var3 = var6.bind(var7)(var8, var3);
                var2 = var2.removed;
                var1 = var4.bind(var5)(var3, var2);
case 190:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getMemberVersion';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var6;
        var1[20] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var12 = var12.bind(var1)(var18);
    var12['displayName'] = var7;
    var7 = 25;
    var7 = var10[var7];
    var23 = var11.bind(var1)(var7);
    var7 = {};
    var18 = function handleConnectionOpen(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = _closure1_slot21;
            if(var1) { _fun0039_ip = 158; continue _fun0039 }
case 192:
            var1 = {};
            _closure1_slot16 = var1;
            var1 = {};
            _closure1_slot17 = var1;
            _fun0039_ip = 7; continue _fun0039;
case 158:
            var1 = false;
            _closure1_slot21 = var1;
case 7:
            var1 = {};
            _closure1_slot20 = var1;
            var3 = function mergeGuildMembers(arg1) {
                var1 = arg1;
                var3 = var1.guilds;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure1_slot45;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var7['CONNECTION_OPEN'] = var18;
    var18 = function handleConnectionOpenSupplemental(arg1) {
        var1 = arg1;
        var3 = var1.guilds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var3 = arg1;
                var6 = var3.id;
                var _closure3_slot0 = var6;
                var1 = var3.members;
                var5 = _closure1_slot45;
                var4 = {};
                var4['id'] = var6;
                var4['members'] = var1;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var3.activity_instances;
                var3 = null;
                if(!(var3 != var4)) { _fun0040_ip = 5; continue _fun0040 }
case 159:
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var4 = _closure1_slot44;
                    var3 = _closure3_slot0;
                    var1 = arg1;
                    var2 = var1.participants;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
case 5:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['CONNECTION_OPEN_SUPPLEMENTAL'] = var18;
    var18 = function handleInitialize(arg1) {
        var1 = arg1;
        var3 = var1.guildMembers;
        var1 = {};
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var7['OVERLAY_INITIALIZE'] = var18;
    var18 = function handleCacheLoaded(arg1) {
        var1 = arg1;
        var5 = var1.guildMembers;
        var3 = var1.guilds;
        var2 = true;
        _closure1_slot21 = var2;
        var2 = {};
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        _closure1_slot16 = var2;
        var2 = {};
        _closure1_slot17 = var2;
        var2 = {};
        _closure1_slot19 = var2;
        var2 = _closure1_slot40;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var7['CACHE_LOADED'] = var18;
    var18 = function handleCacheLoadedLazy(arg1) {
        var1 = arg1;
        var3 = var1.guilds;
        var2 = _closure1_slot40;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var7['CACHE_LOADED_LAZY'] = var18;
    var18 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var2 = _closure1_slot45;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var7['GUILD_CREATE'] = var18;
    var18 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var4 = _closure1_slot16;
        var3 = var1.id;
        var3 = delete var4[var3];
        var4 = _closure1_slot17;
        var3 = var1.id;
        var3 = delete var4[var3];
        var3 = _closure1_slot32;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['GUILD_DELETE'] = var18;
    var7['GUILD_MEMBER_ADD'] = var17;
    var7['GUILD_MEMBER_UPDATE'] = var17;
    var17 = function handleGuildMemberUpdateLocal(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var12 = var1.guildId;
            var9 = var1.roles;
            var13 = var1.addedRoleIds;
            var19 = var1.removedRoleIds;
            var7 = var1.flags;
            var2 = _closure1_slot10;
            var1 = var2.getId;
            var4 = var1.bind(var2)();
            var1 = _closure1_slot16;
            var3 = var1[var12];
            var8 = null;
            var1 = var8 != var3;
            var6 = null;
            if(!var1) { _fun0041_ip = 193; continue _fun0041 }
case 34:
            var6 = var3[var4];
case 193:
            if(!(var8 != var6)) { _fun0041_ip = 194; continue _fun0041 }
case 195:
            var2 = _closure1_slot13;
            var1 = var2.getGuild;
            var10 = var1.bind(var2)(var12);
            if(!(var8 != var10)) { _fun0041_ip = 196; continue _fun0041 }
case 197:
            var1 = _closure1_slot25;
            var14 = var1[var12];
            if(!(var8 == var14)) { _fun0041_ip = 198; continue _fun0041 }
case 182:
            var14 = {};
case 198:
            var5 = _closure1_slot25;
            var2 = {};
            var16 = _closure1_slot1;
            var15 = _closure1_slot2;
            var20 = 22;
            var17 = var15[var20];
            var1 = undefined;
            var18 = var16.bind(var1)(var17);
            var17 = var18.difference;
            var15 = var15[var20];
            var21 = var16.bind(var1)(var15);
            var16 = var21.union;
            var15 = var14.added;
            if(!(var8 == var15)) { _fun0041_ip = 199; continue _fun0041 }
case 200:
            var15 = new Array(0);
case 199:
            var16 = var16.bind(var21)(var15, var13);
            var15 = var19;
            if(!(var8 == var15)) { _fun0041_ip = 148; continue _fun0041 }
case 117:
            var15 = new Array(0);
case 148:
            var15 = var17.bind(var18)(var16, var15);
            var2['added'] = var15;
            var18 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = var17[var20];
            var16 = var18.bind(var1)(var15);
            var15 = var16.difference;
            var17 = var17[var20];
            var18 = var18.bind(var1)(var17);
            var17 = var18.union;
            var14 = var14.removed;
            if(!(var8 == var14)) { _fun0041_ip = 201; continue _fun0041 }
case 202:
            var14 = new Array(0);
case 201:
            var14 = var17.bind(var18)(var14, var19);
            if(!(var8 == var13)) { _fun0041_ip = 16; continue _fun0041 }
case 203:
            var13 = new Array(0);
case 16:
            var13 = var15.bind(var16)(var14, var13);
            var2['removed'] = var13;
            var5[var12] = var2;
            var5 = _closure1_slot39;
            var2 = {};
            var2['userId'] = var4;
            var2['guildId'] = var12;
            var12 = var6.nick;
            var2['nick'] = var12;
            var12 = var6.avatar;
            var2['avatar'] = var12;
            var12 = var6.avatarDecoration;
            var2['avatarDecoration'] = var12;
            var12 = _closure1_slot12;
            var11 = var12.getUnsafeMutableRoles;
            var10 = var10.id;
            var10 = var11.bind(var12)(var10);
            var2['guildRoles'] = var10;
            if(!(var8 == var9)) { _fun0041_ip = 204; continue _fun0041 }
case 205:
            var9 = var6.roles;
case 204:
            var2['roles'] = var9;
            var9 = var6.premiumSince;
            var2['premiumSince'] = var9;
            var9 = var6.isPending;
            var2['isPending'] = var9;
            var9 = var6.joinedAt;
            var2['joinedAt'] = var9;
            if(!(var8 == var7)) { _fun0041_ip = 206; continue _fun0041 }
case 207:
            var7 = var6.flags;
case 206:
            var2['flags'] = var7;
            var7 = var6.fullProfileLoadedTimestamp;
            var2['fullProfileLoadedTimestamp'] = var7;
            var7 = var6.collectibles;
            var2['collectibles'] = var7;
            var6 = var6.displayNameStyles;
            var2['displayNameStyles'] = var6;
            var2 = var5.bind(var1)(var2);
            var3[var4] = var2;
            return var1;
case 196:
            var1 = false;
            return var1;
case 194:
            var1 = false;
            return var1;
        }
    };
    var7['GUILD_MEMBER_UPDATE_LOCAL'] = var17;
    var17 = function handleGuildMembersChunkBatch(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var2 = _closure1_slot29;
            var1 = arg1;
            var1 = var1.chunks;
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0042_ip = 208; continue _fun0042 }
case 165:
            var2 = var4.value;
            var9 = _closure1_slot41;
            var8 = var2.guildId;
            var2 = var2.members;
            var8 = var9.bind(var6)(var8, var2);
            if(var8) { _fun0042_ip = 4; continue _fun0042 }
case 193:
            var8 = var3;
case 4:
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var3 = var8;
            var4 = var9;
            var1 = var3;
            if(!var2) { _fun0042_ip = 165; continue _fun0042 }
case 208:
            return var1;
        }
    };
    var7['GUILD_MEMBERS_CHUNK_BATCH'] = var17;
    var17 = function handleGuildMemberRemove(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var1 = var1.user;
        var3 = _closure1_slot43;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var7['GUILD_MEMBER_REMOVE'] = var17;
    var17 = function handleGuildMemberRemoveLocal(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = var1.userId;
        var2 = _closure1_slot43;
        var1 = undefined;
        var2 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var7['GUILD_MEMBER_REMOVE_LOCAL'] = var17;
    var17 = function handleThreadMemberListUpdate(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var6 = var1.members;
        var3 = _closure1_slot41;
        var5 = var6.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.member;
            return var1;
        };
        var6 = var5.bind(var6)(var2);
        var5 = var6.filter;
        var7 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 20;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var7.bind(var2)(var1);
        var1 = var1.isNotNullish;
        var1 = var5.bind(var6)(var1);
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var7['THREAD_MEMBER_LIST_UPDATE'] = var17;
    var17 = function handleThreadMembersUpdate(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var7 = var1.addedMembers;
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0043_ip = 209; continue _fun0043 }
case 35:
            var4 = _closure1_slot41;
            var6 = var7.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.member;
                return var1;
            };
            var7 = var6.bind(var7)(var3);
            var6 = var7.filter;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 20;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var8.bind(var3)(var2);
            var2 = var2.isNotNullish;
            var2 = var6.bind(var7)(var2);
            var1 = var4.bind(var3)(var5, var2);
case 209:
            return var1;
        }
    };
    var7['THREAD_MEMBERS_UPDATE'] = var17;
    var17 = function handleLoadArchivedThreadsSuccess(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = var1.owners;
        var2 = _closure1_slot41;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var7['LOAD_ARCHIVED_THREADS_SUCCESS'] = var17;
    var17 = function handleLoadForumPosts(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var5 = var1.threads;
        var3 = _closure1_slot41;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.values;
        var6 = var1.bind(var2)(var5);
        var5 = var6.reduce;
        var2 = function(arg1, arg2) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var1 = arg1;
                var2 = arg2;
                var3 = var2.owner;
                var4 = null;
                if(!(var4 != var3)) { _fun0044_ip = 143; continue _fun0044 }
case 210:
                var5 = var1.push;
                var3 = var2.owner;
                var3 = var5.bind(var1)(var3);
case 143:
                var6 = var4 == var2;
                var5 = undefined;
                if(var6) { _fun0044_ip = 113; continue _fun0044 }
case 111:
                var6 = var2.first_message;
                var7 = var4 == var6;
                var5 = undefined;
                if(var7) { _fun0044_ip = 113; continue _fun0044 }
case 179:
                var5 = var6.message_snapshots;
case 113:
                if(!(var4 != var5)) { _fun0044_ip = 149; continue _fun0044 }
case 211:
                var2 = var2.first_message;
                var5 = var2.message_snapshots;
                var2 = 0;
                var2 = var5[var2];
                var6 = var2.moderator_report;
                var7 = var4 == var6;
                var5 = undefined;
                if(var7) { _fun0044_ip = 212; continue _fun0044 }
case 49:
                var5 = var6.reported_member;
case 212:
                if(!(var4 != var5)) { _fun0044_ip = 213; continue _fun0044 }
case 182:
                var6 = var1.push;
                var5 = var2.moderator_report;
                var5 = var5.reported_member;
                var5 = var6.bind(var1)(var5);
case 213:
                var5 = var2.moderator_report;
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0044_ip = 116; continue _fun0044 }
case 214:
                var3 = var5.reporting_member;
case 116:
                if(!(var4 != var3)) { _fun0044_ip = 149; continue _fun0044 }
case 19:
                var3 = var1.push;
                var2 = var2.moderator_report;
                var2 = var2.reporting_member;
                var2 = var3.bind(var1)(var2);
case 149:
                return var1;
            }
        };
        var1 = new Array(0);
        var2 = var5.bind(var6)(var2, var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var7['LOAD_FORUM_POSTS'] = var17;
    var7['GUILD_ROLE_UPDATE'] = var16;
    var7['GUILD_ROLE_DELETE'] = var16;
    var16 = function handleGuildMemberRoleRemove(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var4 = var1.userId;
            var10 = var1.roleId;
            var _closure2_slot0 = var10;
            var2 = _closure1_slot16;
            var3 = var2[var6];
            var8 = null;
            if(!(var8 != var3)) { _fun0045_ip = 215; continue _fun0045 }
case 216:
            var7 = _closure1_slot13;
            var2 = var7.getGuild;
            var2 = var2.bind(var7)(var6);
            if(!(var8 != var2)) { _fun0045_ip = 217; continue _fun0045 }
case 191:
            var7 = var3[var4];
            if(!(var8 != var7)) { _fun0045_ip = 218; continue _fun0045 }
case 4:
            var9 = var7.roles;
            var8 = var9.includes;
            var8 = var8.bind(var9)(var10);
            if(var8) { _fun0045_ip = 219; continue _fun0045 }
case 183:
            var8 = false;
            return var8;
case 219:
            var9 = var7.roles;
            var8 = var9.filter;
            var5 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var5 = var8.bind(var9)(var5);
            var7['roles'] = var5;
            var9 = _closure1_slot38;
            var8 = _closure1_slot12;
            var5 = var8.getUnsafeMutableRoles;
            var2 = var2.id;
            var8 = var5.bind(var8)(var2);
            var5 = var7.roles;
            var2 = undefined;
            var5 = var9.bind(var2)(var8, var5);
            var2 = {};
            var12 = var2;
            var11 = var7;
            var7 = copyDataProperties(var12, var11);
            var12 = var2;
            var11 = var5;
            var5 = copyDataProperties(var12, var11);
            var3[var4] = var2;
            var2 = true;
            return var2;
case 218:
            var2 = false;
            return var2;
case 217:
            var3 = _closure1_slot15;
            var2 = var3.warn;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = 'Guild ';
            var1 = ' not found during GUILD_MEMBER_UPDATE.';
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
            var1 = false;
            return var1;
case 215:
            var1 = false;
            return var1;
        }
    };
    var7['GUILD_ROLE_MEMBER_REMOVE'] = var16;
    var16 = function handleGuildMemberRoleAdd(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var4 = var1.userId;
            var8 = var1.roleId;
            var2 = _closure1_slot16;
            var3 = var2[var6];
            var5 = null;
            if(!(var5 != var3)) { _fun0046_ip = 202; continue _fun0046 }
case 156:
            var7 = _closure1_slot13;
            var2 = var7.getGuild;
            var2 = var2.bind(var7)(var6);
            if(!(var5 != var2)) { _fun0046_ip = 65; continue _fun0046 }
case 41:
            var7 = var3[var4];
            if(!(var5 != var7)) { _fun0046_ip = 220; continue _fun0046 }
case 193:
            var9 = var7.roles;
            var5 = var9.includes;
            var5 = var5.bind(var9)(var8);
            if(var5) { _fun0046_ip = 24; continue _fun0046 }
case 114:
            var12 = var7.roles;
            var5 = new Array(1);
            var11 = 0;
            var13 = var5;
            var9 = arraySpread(var13, var12, var11);
            var5[var9] = var8;
            var8 = 1;
            var8 = var9 + var8;
            var7['roles'] = var5;
            var9 = _closure1_slot38;
            var8 = _closure1_slot12;
            var5 = var8.getUnsafeMutableRoles;
            var2 = var2.id;
            var8 = var5.bind(var8)(var2);
            var5 = var7.roles;
            var2 = undefined;
            var5 = var9.bind(var2)(var8, var5);
            var2 = {};
            var13 = var2;
            var12 = var7;
            var7 = copyDataProperties(var13, var12);
            var13 = var2;
            var12 = var5;
            var5 = copyDataProperties(var13, var12);
            var3[var4] = var2;
            var2 = true;
            return var2;
case 24:
            var2 = false;
            return var2;
case 220:
            var2 = false;
            return var2;
case 65:
            var3 = _closure1_slot15;
            var2 = var3.warn;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = 'Guild ';
            var1 = ' not found during GUILD_MEMBER_UPDATE.';
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
            var1 = false;
            return var1;
case 202:
            var1 = false;
            return var1;
        }
    };
    var7['GUILD_ROLE_MEMBER_ADD'] = var16;
    var16 = function handleGuildMemberProfileUpdate(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildMember;
            var6 = var1.guildId;
            var2 = _closure1_slot16;
            var5 = var2[var6];
            var2 = null;
            if(!(var2 != var5)) { _fun0047_ip = 207; continue _fun0047 }
case 143:
            var7 = _closure1_slot13;
            var4 = var7.getGuild;
            var9 = var4.bind(var7)(var6);
            if(!(var2 != var9)) { _fun0047_ip = 221; continue _fun0047 }
case 8:
            var2 = var3.user;
            var7 = var2.id;
            var8 = _closure1_slot39;
            var4 = {};
            var2 = var3.user;
            var2 = var2.id;
            var4['userId'] = var2;
            var2 = var3.nick;
            var4['nick'] = var2;
            var4['guildId'] = var6;
            var2 = var3.avatar;
            var4['avatar'] = var2;
            var10 = _closure1_slot42;
            var2 = undefined;
            var10 = var10.bind(var2)(var3);
            var4['avatarDecoration'] = var10;
            var11 = _closure1_slot12;
            var10 = var11.getUnsafeMutableRoles;
            var9 = var9.id;
            var9 = var10.bind(var11)(var9);
            var4['guildRoles'] = var9;
            var9 = var3.roles;
            var4['roles'] = var9;
            var9 = var3.premium_since;
            var4['premiumSince'] = var9;
            var9 = var3.pending;
            var4['isPending'] = var9;
            var9 = var3.joined_at;
            var4['joinedAt'] = var9;
            var9 = var3.communication_disabled_until;
            var4['communicationDisabledUntil'] = var9;
            var9 = var3.unusual_dm_activity_until;
            var4['unusualDMActivityUntil'] = var9;
            var9 = var3.flags;
            var4['flags'] = var9;
            var9 = global;
            var10 = var9.Date;
            var9 = var10.now;
            var9 = var9.bind(var10)();
            var4['fullProfileLoadedTimestamp'] = var9;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 18;
            var9 = var11[var9];
            var13 = var10.bind(var2)(var9);
            var12 = var13.parseServerUserCollectibles;
            var9 = var3.collectibles;
            var9 = var12.bind(var13)(var9);
            var4['collectibles'] = var9;
            var9 = 19;
            var9 = var11[var9];
            var11 = var10.bind(var2)(var9);
            var10 = var11.parseServerDisplayNameStyles;
            var9 = var3.display_name_styles;
            var9 = var10.bind(var11)(var9);
            var4['displayNameStyles'] = var9;
            var4 = var8.bind(var2)(var4);
            var5[var7] = var4;
            var4 = _closure1_slot31;
            var3 = var3.user;
            var3 = var3.id;
            var3 = var5[var3];
            var3 = var4.bind(var2)(var6, var3);
            return var2;
case 221:
            var3 = _closure1_slot15;
            var2 = var3.warn;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = 'Guild ';
            var1 = ' not found during GUILD_MEMBER_UPDATE.';
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
            var1 = false;
            return var1;
case 207:
            var1 = false;
            return var1;
        }
    };
    var7['GUILD_MEMBER_PROFILE_UPDATE'] = var16;
    var7['IMPERSONATE_UPDATE'] = var15;
    var7['IMPERSONATE_STOP'] = var15;
    var15 = function handlePassiveUpdateV2(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var2 = arg1;
            var1 = var2.members;
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            if(!var1) { _fun0048_ip = 9; continue _fun0048 }
case 35:
            var5 = _closure1_slot41;
            var4 = var2.guildId;
            var3 = var2.members;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 9:
            return var1;
        }
    };
    var7['PASSIVE_UPDATE_V2'] = var15;
    var15 = function handleClearPendingUpdates(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var1 = null;
            if(!(var1 != var2)) { _fun0049_ip = 46; continue _fun0049 }
case 36:
            var1 = _closure1_slot25;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
case 46:
            var1 = false;
            return var1;
        }
    };
    var7['CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES'] = var15;
    var15 = function handleLocalMessagesLoaded(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var10 = arg1;
            var1 = var10.guildId;
            var9 = null;
            if(!(var9 != var1)) { _fun0050_ip = 128; continue _fun0050 }
case 222:
            var3 = _closure1_slot13;
            var2 = var3.getGuild;
            var1 = var10.guildId;
            var1 = var2.bind(var3)(var1);
            if(!(var9 != var1)) { _fun0050_ip = 128; continue _fun0050 }
case 6:
            var7 = true;
            _closure1_slot21 = var7;
            var3 = _closure1_slot16;
            var2 = var10.guildId;
            var4 = _closure1_slot16;
            var1 = var10.guildId;
            var1 = var4[var1];
            if(!(var9 == var1)) { _fun0050_ip = 223; continue _fun0050 }
case 195:
            var1 = {};
case 223:
            var3[var2] = var1;
            _closure1_slot21 = var7;
            var3 = _closure1_slot16;
            var2 = var10.guildId;
            var4 = _closure1_slot16;
            var1 = var10.guildId;
            var1 = var4[var1];
            if(!(var9 == var1)) { _fun0050_ip = 224; continue _fun0050 }
case 225:
            var1 = {};
case 224:
            var3[var2] = var1;
            var2 = _closure1_slot29;
            var1 = var10.members;
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = false;
            var1 = false;
            if(var2) { _fun0050_ip = 226; continue _fun0050 }
case 227:
            var12 = var3.value;
            var11 = _closure1_slot16;
            var2 = var10.guildId;
            var11 = var11[var2];
            var2 = var12.userId;
            var2 = var11[var2];
            if(!(var9 == var2)) { _fun0050_ip = 228; continue _fun0050 }
case 229:
            var11 = _closure1_slot16;
            var2 = var10.guildId;
            var11 = var11[var2];
            var2 = var12.userId;
            var11[var2] = var12;
            var4 = true;
case 228:
            var12 = var5.bind(var6)();
            var2 = var12.done;
            var3 = var12;
            var1 = var4;
            if(!var2) { _fun0050_ip = 227; continue _fun0050 }
case 226:
            return var1;
case 128:
            var1 = false;
            return var1;
        }
    };
    var7['LOCAL_MESSAGES_LOADED'] = var15;
    var7['MESSAGE_CREATE'] = var14;
    var7['MESSAGE_UPDATE'] = var14;
    var7['LOAD_MESSAGES_SUCCESS'] = var13;
    var7['LOAD_MESSAGES_AROUND_SUCCESS'] = var13;
    var7['LOAD_RECENT_MENTIONS_SUCCESS'] = var13;
    var13 = function handleLoadPinnedMessages(arg1) {
        var1 = arg1;
        var3 = var1.pins;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.message;
            var2 = _closure1_slot48;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['LOAD_PINNED_MESSAGES_SUCCESS'] = var13;
    var7['SEARCH_MESSAGES_SUCCESS'] = var8;
    var7['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var8;
    var8 = function hangdleMemberSafetyGuildMemberSearchSuccess(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var5 = var1.members;
        var3 = _closure1_slot41;
        var2 = var5.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.member;
            return var1;
        };
        var2 = var2.bind(var5)(var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var7['MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS'] = var8;
    var8 = function handleEmbeddedActivityUpdateV2(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var1 = arg1;
            var6 = var1.location;
            var5 = var1.participants;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 23;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getEmbeddedActivityLocationGuildId;
            var3 = var1.bind(var3)(var6);
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0051_ip = 167; continue _fun0051 }
case 175:
            var2 = _closure1_slot44;
            var1 = var2.bind(var4)(var3, var5);
case 167:
            return var1;
        }
    };
    var7['EMBEDDED_ACTIVITY_UPDATE_V2'] = var8;
    var8 = function handleInteractionModalCreate(arg1) {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot11;
            var4 = var5.getChannel;
            var3 = var1.channelId;
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot46;
            var3 = var1.resolved;
            var1 = null;
            var6 = var1 == var5;
            var2 = undefined;
            var1 = undefined;
            if(var6) { _fun0052_ip = 51; continue _fun0052 }
case 181:
            var1 = var5.guild_id;
case 51:
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        }
    };
    var7['INTERACTION_MODAL_CREATE'] = var8;
    var8 = var12.prototype;
    var8 = Object.create(var8, {constructor: {value: var12}});
    var24 = var8;
    var22 = var7;
    var7 = new var24[var12](var23, var22, var21);
    var7 = var7 instanceof Object ? var7 : var8;
    var8 = 26;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'stores/GuildMemberStore.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var6 = function getUserCommunicationDisabledVersion(arg1, arg2) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
            var5 = _closure1_slot35;
            var4 = undefined;
            var3 = arg1;
            var1 = arg2;
            var3 = var5.bind(var4)(var3, var1);
            var1 = _closure1_slot24;
            var4 = var3 in var1;
            var1 = -1;
            if(!var4) { _fun0053_ip = 6; continue _fun0053 }
case 47:
            var2 = _closure1_slot24;
            var1 = var2[var3];
case 6:
            return var1;
        }
    };
    var3['getUserCommunicationDisabledVersion'] = var6;
    var3['getCommunicationDisabledUserKey'] = var5;
    var3['getUserIdFromCommunicationDisabledUserKey'] = var4;
    var3['getGuildIdFromCommunicationDisabledUserKey'] = var2;
    return var1;
})();