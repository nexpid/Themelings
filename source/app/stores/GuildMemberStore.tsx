// app/stores/GuildMemberStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var11 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
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
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot30;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot30;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function trackCommunicationDisabled(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            var3 = var1.communicationDisabledUntil;
            var2 = null;
            if(!(var2 != var3)) { _fun0005_ip = 152; continue _fun0005 }
 21:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 13;
            var5 = var2[var9];
            var2 = undefined;
            var6 = var6.bind(var2)(var5);
            var5 = var6.isMemberCommunicationDisabled;
            var5 = var5.bind(var6)(var1);
            if(!var5) { _fun0005_ip = 152; continue _fun0005 }
 60:
            var6 = _closure1_slot35;
            var5 = var1.userId;
            var5 = var6.bind(var2)(var4, var5);
            var6 = _closure1_slot20;
            var7 = var6[var5];
            var6 = var1.communicationDisabledUntil;
            var6 = var7 !== var6;
            if(!var6) { _fun0005_ip = 124; continue _fun0005 }
 96:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var8 = var8.bind(var2)(var7);
            var7 = var8.isMemberCommunicationDisabled;
            var6 = var7.bind(var8)(var1);
 124:
            if(!var6) { _fun0005_ip = 150; continue _fun0005 }
 127:
            var7 = _closure1_slot20;
            var6 = var1.communicationDisabledUntil;
            var7[var5] = var6;
            var3 = _closure1_slot33;
            var3 = var3.bind(var2)(var5);
 150:
            return var2;
 152:
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
 0:
            var5 = arg1;
            var4 = arg2;
            var7 = null;
            if(!(var7 == var4)) { _fun0006_ip = 74; continue _fun0006 }
 12:
            var9 = _closure1_slot20;
            var1 = undefined;
            for(var2 in var9)
 29:
            {
 38:
                var12 = var2;
                var11 = _closure1_slot37;
                var11 = var11.bind(var1)(var12);
                if(var11 !== var5) { _fun0006_ip = 29; continue _fun0006 }
 54:
                var11 = _closure1_slot33;
                var11 = var11.bind(var1)(var12);
                var11 = _closure1_slot34;
                var11 = var11.bind(var1)(var12);
                _fun0006_ip = 29; continue _fun0006;
 74:
                var2 = _closure1_slot35;
                var3 = undefined;
                var6 = var2.bind(var3)(var5, var4);
                var2 = _closure1_slot20;
                var2 = var2[var6];
                if(!(var7 != var2)) { _fun0006_ip = 110; continue _fun0006 }
 101:
                var2 = _closure1_slot33;
                var2 = var2.bind(var3)(var6);
 110:
                var2 = _closure1_slot34;
                var1 = _closure1_slot35;
                var1 = var1.bind(var3)(var5, var4);
                var1 = var2.bind(var3)(var1);
            }
 129:
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
 0:
            var3 = arg1;
            var4 = _closure1_slot36;
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var6 = _closure1_slot10;
            var4 = var6.getId;
            var4 = var4.bind(var6)();
            if(!(var5 === var4)) { _fun0007_ip = 53; continue _fun0007 }
 35:
            var5 = _closure1_slot8;
            var4 = _closure1_slot37;
            var4 = var4.bind(var1)(var3);
            var4 = var5.bind(var1)(var4);
 53:
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
 0:
            var16 = arg1;
            var4 = arg2;
            var1 = var4.length;
            var12 = 0;
            if(!(var12 !== var1)) { _fun0008_ip = 604; continue _fun0008 }
 20:
            var3 = _closure1_slot29;
            var2 = undefined;
            var15 = var3.bind(var2)(var4);
            var3 = var15.bind(var2)();
            var5 = var3.done;
            var4 = null;
            var14 = undefined;
            var13 = undefined;
            var11 = undefined;
            var10 = undefined;
            var9 = var3;
            var8 = undefined;
            var6 = undefined;
            var7 = undefined;
            var3 = undefined;
            if(var5) { _fun0008_ip = 324; continue _fun0008 }
 70:
            var5 = var9.value;
            var5 = var16[var5];
            var20 = var14;
            var19 = var13;
            var18 = var11;
            var17 = var10;
            if(!(var4 != var5)) { _fun0008_ip = 282; continue _fun0008 }
 98:
            var21 = var4 == var10;
            if(var21) { _fun0008_ip = 119; continue _fun0008 }
 105:
            var23 = var5.position;
            var22 = var10.position;
            var21 = var23 > var22;
 119:
            if(!var21) { _fun0008_ip = 125; continue _fun0008 }
 122:
            var10 = var5;
 125:
            var21 = var5.color;
            var21 = var21 > var12;
            if(!var21) { _fun0008_ip = 161; continue _fun0008 }
 137:
            var22 = var4 == var14;
            if(var22) { _fun0008_ip = 158; continue _fun0008 }
 144:
            var24 = var5.position;
            var23 = var14.position;
            var22 = var24 > var23;
 158:
            var21 = var22;
 161:
            if(!var21) { _fun0008_ip = 167; continue _fun0008 }
 164:
            var14 = var5;
 167:
            var21 = var5.hoist;
            if(!var21) { _fun0008_ip = 200; continue _fun0008 }
 176:
            var22 = var4 == var13;
            if(var22) { _fun0008_ip = 197; continue _fun0008 }
 183:
            var24 = var5.position;
            var23 = var13.position;
            var22 = var24 > var23;
 197:
            var21 = var22;
 200:
            if(!var21) { _fun0008_ip = 206; continue _fun0008 }
 203:
            var13 = var5;
 206:
            var21 = var5.icon;
            var21 = var4 != var21;
            if(var21) { _fun0008_ip = 228; continue _fun0008 }
 218:
            var22 = var5.unicodeEmoji;
            var21 = var4 != var22;
 228:
            if(!var21) { _fun0008_ip = 255; continue _fun0008 }
 231:
            var22 = var4 == var11;
            if(var22) { _fun0008_ip = 252; continue _fun0008 }
 238:
            var24 = var5.position;
            var23 = var11.position;
            var22 = var24 > var23;
 252:
            var21 = var22;
 255:
            var20 = var14;
            var19 = var13;
            var18 = var11;
            var17 = var10;
            if(!var21) { _fun0008_ip = 282; continue _fun0008 }
 270:
            var20 = var14;
            var19 = var13;
            var18 = var5;
            var17 = var10;
 282:
            var21 = var15.bind(var2)();
            var5 = var21.done;
            var14 = var20;
            var13 = var19;
            var11 = var18;
            var10 = var17;
            var9 = var21;
            var8 = var14;
            var6 = var13;
            var7 = var11;
            var3 = var10;
            if(!var5) { _fun0008_ip = 70; continue _fun0008 }
 324:
            var10 = var4 != var8;
            var9 = undefined;
            var5 = undefined;
            if(!var10) { _fun0008_ip = 514; continue _fun0008 }
 338:
            var10 = var8.colorString;
            var10 = var4 == var10;
            if(!var10) { _fun0008_ip = 360; continue _fun0008 }
 351:
            var11 = var8.color;
            var10 = var11 > var12;
 360:
            if(!var10) { _fun0008_ip = 405; continue _fun0008 }
 363:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 14;
            var10 = var12[var10];
            var12 = var11.bind(var2)(var10);
            var11 = var12.int2hex;
            var10 = var8.color;
            var10 = var11.bind(var12)(var10);
            var8['colorString'] = var10;
 405:
            var11 = var8.colorString;
            var12 = var4 != var11;
            var10 = undefined;
            if(!var12) { _fun0008_ip = 423; continue _fun0008 }
 420:
            var10 = var11;
 423:
            var11 = var8.colorStrings;
            var11 = var4 == var11;
            if(!var11) { _fun0008_ip = 445; continue _fun0008 }
 436:
            var12 = var8.colors;
            var11 = var4 != var12;
 445:
            if(!var11) { _fun0008_ip = 490; continue _fun0008 }
 448:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 15;
            var1 = var12[var1];
            var12 = var11.bind(var2)(var1);
            var11 = var12.extractColorStringsFromServerColors;
            var1 = var8.colors;
            var1 = var11.bind(var12)(var1);
            var8['colorStrings'] = var1;
 490:
            var11 = var8.colorStrings;
            var12 = var4 != var11;
            var1 = undefined;
            if(!var12) { _fun0008_ip = 508; continue _fun0008 }
 505:
            var1 = var11;
 508:
            var5 = var1;
            var9 = var10;
 514:
            var1 = {};
            var1['colorString'] = var9;
            var1['colorStrings'] = var5;
            var9 = var4 == var8;
            var5 = undefined;
            if(var9) { _fun0008_ip = 540; continue _fun0008 }
 535:
            var5 = var8.id;
 540:
            var1['colorRoleId'] = var5;
            var8 = var4 == var7;
            var5 = undefined;
            if(var8) { _fun0008_ip = 559; continue _fun0008 }
 554:
            var5 = var7.id;
 559:
            var1['iconRoleId'] = var5;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0008_ip = 578; continue _fun0008 }
 573:
            var5 = var6.id;
 578:
            var1['hoistRoleId'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0008_ip = 597; continue _fun0008 }
 592:
            var2 = var3.id;
 597:
            var1['highestRoleId'] = var2;
            return var1;
 604:
            var1 = {};
            var2 = undefined;
            var1['colorString'] = var2;
            var1['colorStrings'] = var2;
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
 0:
            var1 = arg1;
            var3 = var1.userId;
            var17 = var1.nick;
            var4 = var1.guildId;
            var16 = var1.avatar;
            var15 = var1.avatarDecoration;
            var13 = var1.guildRoles;
            var14 = var1.roles;
            var12 = var1.premiumSince;
            var11 = var1.isPending;
            var10 = var1.joinedAt;
            var8 = var1.communicationDisabledUntil;
            var7 = var1.unusualDMActivityUntil;
            var6 = var1.fullProfileLoadedTimestamp;
            var2 = var1.flags;
            var1 = _closure1_slot38;
            var9 = undefined;
            var13 = var1.bind(var9)(var13, var14);
            var1 = {};
            var1['userId'] = var3;
            var1['nick'] = var17;
            var1['guildId'] = var4;
            var1['avatar'] = var16;
            var1['avatarDecoration'] = var15;
            var1['roles'] = var14;
            var14 = var13.colorString;
            var1['colorString'] = var14;
            var14 = var13.colorStrings;
            var1['colorStrings'] = var14;
            var14 = var13.colorRoleId;
            var1['colorRoleId'] = var14;
            var14 = var13.iconRoleId;
            var1['iconRoleId'] = var14;
            var14 = var13.hoistRoleId;
            var1['hoistRoleId'] = var14;
            var13 = var13.highestRoleId;
            var1['highestRoleId'] = var13;
            var1['premiumSince'] = var12;
            var1['isPending'] = var11;
            var1['joinedAt'] = var10;
            var1['communicationDisabledUntil'] = var8;
            var1['unusualDMActivityUntil'] = var7;
            var1['fullProfileLoadedTimestamp'] = var6;
            var1['flags'] = var2;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 16;
            var2 = var2[var8];
            var12 = var6.bind(var9)(var2);
            var11 = var12.hasFlag;
            var2 = var1.flags;
            var6 = null;
            var13 = var6 != var2;
            var7 = 0;
            if(!var13) { _fun0009_ip = 274; continue _fun0009 }
 271:
            var7 = var2;
 274:
            var2 = _closure1_slot14;
            var2 = var2.IS_GUEST;
            var2 = var11.bind(var12)(var7, var2);
            if(!var2) { _fun0009_ip = 355; continue _fun0009 }
 293:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var8 = var7.bind(var9)(var2);
            var7 = var8.addFlag;
            var2 = var1.flags;
            var11 = var6 != var2;
            var10 = 0;
            if(!var11) { _fun0009_ip = 333; continue _fun0009 }
 330:
            var10 = var2;
 333:
            var2 = _closure1_slot14;
            var2 = var2.BYPASSES_VERIFICATION;
            var2 = var7.bind(var8)(var10, var2);
            var1['flags'] = var2;
 355:
            var2 = _closure1_slot16;
            var2 = var2[var4];
            if(!(var6 != var2)) { _fun0009_ip = 561; continue _fun0009 }
 370:
            var7 = _closure1_slot10;
            var2 = var7.getId;
            var2 = var2.bind(var7)();
            if(!(var3 === var2)) { _fun0009_ip = 559; continue _fun0009 }
 391:
            var3 = _closure1_slot9;
            var2 = var3.isViewingRoles;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0009_ip = 449; continue _fun0009 }
 409:
            var3 = _closure1_slot9;
            var2 = var3.isFullServerPreview;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0009_ip = 449; continue _fun0009 }
 427:
            var2 = _closure1_slot18;
            var2 = var2[var4];
            if(!(var6 != var2)) { _fun0009_ip = 559; continue _fun0009 }
 439:
            var2 = _closure1_slot18;
            var2 = delete var2[var4];
            _fun0009_ip = 559; continue _fun0009;
 449:
            var3 = _closure1_slot9;
            var2 = var3.getViewingRoles;
            var8 = var2.bind(var3)(var4);
            var3 = _closure1_slot18;
            var2 = {};
            var20 = var2;
            var19 = var1;
            var7 = copyDataProperties(var20, var19);
            var10 = _closure1_slot9;
            var7 = var10.getMemberOptions;
            var19 = var7.bind(var10)(var4);
            var20 = var2;
            var7 = copyDataProperties(var20, var19);
            if(!(var6 == var8)) { _fun0009_ip = 516; continue _fun0009 }
 510:
            var6 = new Array(0);
            _fun0009_ip = 546; continue _fun0009;
 516:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 17;
            var5 = var10[var5];
            var7 = var7.bind(var9)(var5);
            var5 = var7.keys;
            var6 = var5.bind(var7)(var8);
 546:
            var5 = 'roles';
            var2[var5] = var6;
            var3[var4] = var2;
 559:
            return var1;
 561:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function handleCachedGuilds(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
            if(var2) { _fun0010_ip = 269; continue _fun0010 }
 43:
            var12 = var4.value;
            var2 = var12.member;
            var9 = var3;
            if(!(var5 != var2)) { _fun0010_ip = 248; continue _fun0010 }
 64:
            var10 = _closure1_slot19;
            var2 = var12.id;
            var2 = var10[var2];
            var11 = _closure1_slot19;
            var10 = var12.id;
            if(!(var5 != var2)) { _fun0010_ip = 124; continue _fun0010 }
 90:
            var2 = {};
            var14 = var12.member;
            var15 = var2;
            var13 = copyDataProperties(var15, var14);
            var13 = var12.member;
            var13 = var13.roles;
            var2[var6] = var13;
            _fun0010_ip = 130; continue _fun0010;
 124:
            var2 = var12.member;
 130:
            var11[var10] = var2;
            var10 = _closure1_slot16;
            var2 = var12.id;
            var2 = var10[var2];
            var9 = var3;
            if(!(var5 != var2)) { _fun0010_ip = 248; continue _fun0010 }
 154:
            var10 = _closure1_slot16;
            var2 = var12.id;
            var2 = var10[var2];
            var10 = var12.member;
            var10 = var10.userId;
            var10 = var2[var10];
            var9 = var2;
            if(!(var5 != var10)) { _fun0010_ip = 248; continue _fun0010 }
 189:
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
 248:
            var10 = var7.bind(var1)();
            var2 = var10.done;
            var3 = var9;
            var4 = var10;
            if(!var2) { _fun0010_ip = 43; continue _fun0010 }
 269:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var17 = function handleGuildMemberUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var3 = var1.user;
            var18 = var1.nick;
            var2 = var1.avatar;
            var20 = var1.avatarDecoration;
            var16 = var1.roles;
            var15 = var1.premiumSince;
            var14 = var1.isPending;
            var13 = var1.joinedAt;
            var12 = var1.communicationDisabledUntil;
            var11 = var1.unusualDMActivityUntil;
            var9 = var1.flags;
            var4 = _closure1_slot16;
            var5 = var4[var6];
            var10 = null;
            if(!(var10 != var5)) { _fun0011_ip = 352; continue _fun0011 }
 92:
            var7 = _closure1_slot13;
            var4 = var7.getGuild;
            var17 = var4.bind(var7)(var6);
            if(!(var10 != var17)) { _fun0011_ip = 303; continue _fun0011 }
 113:
            var7 = var3.id;
            var8 = _closure1_slot39;
            var4 = {};
            var19 = var3.id;
            var4['userId'] = var19;
            var4['nick'] = var18;
            var4['guildId'] = var6;
            var4['avatar'] = var2;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 18;
            var18 = var18[var2];
            var2 = undefined;
            var19 = var19.bind(var2)(var18);
            var18 = var19.parseAvatarDecorationData;
            var18 = var18.bind(var19)(var20);
            var4['avatarDecoration'] = var18;
            var19 = _closure1_slot12;
            var18 = var19.getRoles;
            var17 = var17.id;
            var17 = var18.bind(var19)(var17);
            var4['guildRoles'] = var17;
            var4['roles'] = var16;
            var4['premiumSince'] = var15;
            var4['isPending'] = var14;
            var4['joinedAt'] = var13;
            var4['communicationDisabledUntil'] = var12;
            var4['unusualDMActivityUntil'] = var11;
            var11 = var3.id;
            var11 = var5[var11];
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0011_ip = 264; continue _fun0011 }
 258:
            var10 = var11.fullProfileLoadedTimestamp;
 264:
            var4['fullProfileLoadedTimestamp'] = var10;
            var4['flags'] = var9;
            var4 = var8.bind(var2)(var4);
            var5[var7] = var4;
            var4 = _closure1_slot31;
            var3 = var3.id;
            var3 = var5[var3];
            var3 = var4.bind(var2)(var6, var3);
            return var2;
 303:
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
 352:
            var1 = false;
            return var1;
        }
    };
    var1 = function batchUpdateGuildMembers(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var7 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var7;
            var3 = _closure1_slot16;
            var3 = var3[var7];
            var _closure2_slot1 = var3;
            var5 = null;
            if(!(var5 != var3)) { _fun0012_ip = 134; continue _fun0012 }
 33:
            var6 = _closure1_slot13;
            var3 = var6.getGuild;
            var3 = var3.bind(var6)(var7);
            var _closure2_slot2 = var3;
            if(!(var5 != var3)) { _fun0012_ip = 85; continue _fun0012 }
 55:
            var3 = var4.forEach;
            var1 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
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
                    var10 = var12.getRoles;
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
                    if(var12) { _fun0013_ip = 213; continue _fun0013 }
 207:
                    var9 = var11.fullProfileLoadedTimestamp;
 213:
                    var4['fullProfileLoadedTimestamp'] = var9;
                    var9 = var2.unusual_dm_activity_until;
                    if(!(var10 == var9)) { _fun0013_ip = 246; continue _fun0013 }
 228:
                    var12 = var10 == var11;
                    var10 = undefined;
                    if(var12) { _fun0013_ip = 243; continue _fun0013 }
 237:
                    var10 = var11.unusualDMActivityUntil;
 243:
                    var9 = var10;
 246:
                    var4['unusualDMActivityUntil'] = var9;
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
            _fun0012_ip = 132; continue _fun0012;
 85:
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
 132:
            return var1;
 134:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function getAvatarDecorationFromServerMember(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 18;
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
 0:
            var5 = arg1;
            var4 = arg2;
            var1 = _closure1_slot16;
            var1 = var1[var5];
            var6 = null;
            if(!(var6 != var1)) { _fun0014_ip = 60; continue _fun0014 }
 23:
            var2 = var1[var4];
            if(!(var6 != var2)) { _fun0014_ip = 60; continue _fun0014 }
 31:
            var1 = delete var1[var4];
            var2 = _closure1_slot32;
            var1 = undefined;
            var2 = var2.bind(var1)(var5, var4);
            var2 = _closure1_slot23;
            var2 = var2 + 1;
            _closure1_slot23 = var2;
            return var1;
 60:
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
        var1 = 20;
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
 0:
            var10 = arg1;
            var9 = var10.id;
            var1 = _closure1_slot16;
            var1 = var9 in var1;
            if(var1) { _fun0015_ip = 37; continue _fun0015 }
 22:
            var3 = _closure1_slot16;
            var2 = var10.id;
            var1 = {};
            var3[var2] = var1;
 37:
            var2 = _closure1_slot13;
            var1 = var2.getGuild;
            var7 = var1.bind(var2)(var9);
            var6 = null;
            if(!(var6 != var7)) { _fun0015_ip = 357; continue _fun0015 }
 60:
            var1 = _closure1_slot16;
            var5 = var1[var9];
            var2 = _closure1_slot29;
            var1 = var10.members;
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0015_ip = 353; continue _fun0015 }
 100:
            var13 = var2.value;
            var1 = var13.user;
            var1 = var1.id;
            var15 = var5[var1];
            var12 = _closure1_slot39;
            var11 = {};
            var11['userId'] = var1;
            var14 = var13.nick;
            var11['nick'] = var14;
            var14 = var10.id;
            var11['guildId'] = var14;
            var14 = var13.avatar;
            var11['avatar'] = var14;
            var14 = _closure1_slot42;
            var14 = var14.bind(var4)(var13);
            var11['avatarDecoration'] = var14;
            var17 = _closure1_slot12;
            var16 = var17.getRoles;
            var14 = var7.id;
            var14 = var16.bind(var17)(var14);
            var11['guildRoles'] = var14;
            var14 = var13.roles;
            var11['roles'] = var14;
            var14 = var13.premium_since;
            var11['premiumSince'] = var14;
            var14 = var13.pending;
            var11['isPending'] = var14;
            var14 = var13.joined_at;
            var11['joinedAt'] = var14;
            var14 = var13.communication_disabled_until;
            var11['communicationDisabledUntil'] = var14;
            var16 = var6 == var15;
            var14 = undefined;
            if(var16) { _fun0015_ip = 269; continue _fun0015 }
 263:
            var14 = var15.fullProfileLoadedTimestamp;
 269:
            var11['fullProfileLoadedTimestamp'] = var14;
            var14 = var13.flags;
            var11['flags'] = var14;
            var13 = var13.unusual_dm_activity_until;
            if(!(var6 == var13)) { _fun0015_ip = 311; continue _fun0015 }
 293:
            var16 = var6 == var15;
            var14 = undefined;
            if(var16) { _fun0015_ip = 308; continue _fun0015 }
 302:
            var14 = var15.unusualDMActivityUntil;
 308:
            var13 = var14;
 311:
            var11['unusualDMActivityUntil'] = var13;
            var11 = var12.bind(var4)(var11);
            var5[var1] = var11;
            var1 = _closure1_slot31;
            var1 = var1.bind(var4)(var9, var11);
            var11 = var3.bind(var4)();
            var1 = var11.done;
            var2 = var11;
            if(!var1) { _fun0015_ip = 100; continue _fun0015 }
 353:
            var1 = true;
            return var1;
 357:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var16 = function handleGuildRoleUpdateOrDelete(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot16;
            var3 = var1.guildId;
            var12 = var4[var3];
            var11 = null;
            if(!(var11 != var12)) { _fun0016_ip = 488; continue _fun0016 }
 34:
            var5 = _closure1_slot13;
            var4 = var5.getGuild;
            var3 = var1.guildId;
            var10 = var4.bind(var5)(var3);
            if(!(var11 != var10)) { _fun0016_ip = 427; continue _fun0016 }
 60:
            var4 = _closure1_slot10;
            var3 = var4.getId;
            var9 = var3.bind(var4)();
            var5 = _closure1_slot29;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 17;
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
            if(var4) { _fun0016_ip = 425; continue _fun0016 }
 136:
            var4 = var5.value;
            var17 = var12[var4];
            var14 = var17.roles;
            if(!(var11 != var14)) { _fun0016_ip = 170; continue _fun0016 }
 155:
            var14 = var17.roles;
            var14 = var14.length;
            if(!(!(var14 > var6))) { _fun0016_ip = 193; continue _fun0016 }
 170:
            var14 = var17.colorString;
            if(!(var11 == var14)) { _fun0016_ip = 193; continue _fun0016 }
 180:
            var14 = var17.hoistRoleId;
            if(!(var11 != var14)) { _fun0016_ip = 407; continue _fun0016 }
 193:
            if(!(var4 === var9)) { _fun0016_ip = 206; continue _fun0016 }
 197:
            var14 = var1.type;
            if(!(var7 !== var14)) { _fun0016_ip = 214; continue _fun0016 }
 206:
            var16 = var17.roles;
            _fun0016_ip = 235; continue _fun0016;
 214:
            var18 = var17.roles;
            var15 = var18.filter;
            var14 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.roleId;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var16 = var15.bind(var18)(var14);
 235:
            var15 = _closure1_slot39;
            var14 = {};
            var14['userId'] = var4;
            var18 = var17.nick;
            var14['nick'] = var18;
            var18 = var1.guildId;
            var14['guildId'] = var18;
            var18 = var17.avatar;
            var14['avatar'] = var18;
            var18 = var17.avatarDecoration;
            var14['avatarDecoration'] = var18;
            var20 = _closure1_slot12;
            var19 = var20.getRoles;
            var18 = var10.id;
            var18 = var19.bind(var20)(var18);
            var14['guildRoles'] = var18;
            var14['roles'] = var16;
            var16 = var17.premiumSince;
            var14['premiumSince'] = var16;
            var16 = var17.isPending;
            var14['isPending'] = var16;
            var16 = var17.joinedAt;
            var14['joinedAt'] = var16;
            var16 = var17.flags;
            var14['flags'] = var16;
            var18 = var11 == var17;
            var16 = undefined;
            if(var18) { _fun0016_ip = 374; continue _fun0016 }
 368:
            var16 = var17.fullProfileLoadedTimestamp;
 374:
            var14['fullProfileLoadedTimestamp'] = var16;
            var14 = var15.bind(var3)(var14);
            var12[var4] = var14;
            var15 = _closure1_slot31;
            var14 = var1.guildId;
            var4 = var12[var4];
            var4 = var15.bind(var3)(var14, var4);
 407:
            var14 = var8.bind(var3)();
            var4 = var14.done;
            var5 = var14;
            if(!var4) { _fun0016_ip = 136; continue _fun0016 }
 425:
            return var3;
 427:
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
 488:
            var1 = false;
            return var1;
        }
    };
    var15 = function handleImpersonateUpdate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var2 = _closure1_slot16;
            var5 = var2[var6];
            var2 = null;
            if(!(var2 != var5)) { _fun0017_ip = 276; continue _fun0017 }
 28:
            var4 = _closure1_slot13;
            var3 = var4.getGuild;
            var8 = var3.bind(var4)(var6);
            if(!(var2 != var8)) { _fun0017_ip = 227; continue _fun0017 }
 49:
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
            var9 = var10.getRoles;
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
            var2 = var2.flags;
            var3['flags'] = var2;
            var2 = undefined;
            var3 = var7.bind(var2)(var3);
            var5[var4] = var3;
            return var2;
 227:
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
 276:
            var1 = false;
            return var1;
        }
    };
    var14 = function handleIncomingMessage(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var5 = var1.message;
            var _closure2_slot0 = var5;
            var6 = var1.guildId;
            var7 = var5.resolved;
            var3 = null;
            var8 = var3 == var7;
            var1 = undefined;
            var2 = undefined;
            if(var8) { _fun0018_ip = 44; continue _fun0018 }
 38:
            var2 = var7.members;
 44:
            var2 = var3 != var2;
            if(!var2) { _fun0018_ip = 55; continue _fun0018 }
 51:
            var2 = var3 != var6;
 55:
            if(!var2) { _fun0018_ip = 142; continue _fun0018 }
 58:
            var3 = _closure1_slot45;
            var2 = {};
            var2['id'] = var6;
            var6 = global;
            var7 = var6.Object;
            var6 = var7.entries;
            var5 = var5.resolved;
            var5 = var5.members;
            var7 = var6.bind(var7)(var5);
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var5 = arg1;
                    var3 = var5[Symbol.iterator];
                    var5 = var3().next;
                    var2 = var5().value;
                    var4 = var3;
                    var1 = undefined;
                    var4 = var4 === var1;
                    var6 = undefined;
                    if(var4) { _fun0019_ip = 27; continue _fun0019 }
 24:
                    var6 = var2;
 27:
                    var2 = undefined;
                    if(var4) { _fun0019_ip = 57; continue _fun0019 }
 32:
                    var7 = var5().value;
                    var5 = var3;
                    var5 = var5 === var1;
                    var2 = undefined;
                    var4 = var5;
                    if(var5) { _fun0019_ip = 57; continue _fun0019 }
 51:
                    var2 = var7;
                    var4 = var5;
 57:
                    if(var4) { _fun0019_ip = 63; continue _fun0019 }
 60:
                    var3.return();
 63:
                    var3 = _closure2_slot0;
                    var5 = var3.resolved;
                    var4 = null;
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0019_ip = 106; continue _fun0019 }
 87:
                    var5 = var5.users;
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0019_ip = 106; continue _fun0019 }
 102:
                    var3 = var5[var6];
 106:
                    if(!(var4 == var3)) { _fun0019_ip = 112; continue _fun0019 }
 110:
                    return var1;
 112:
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
 142:
            return var1;
        }
    };
    var1 = function mergeMessageResolvedMembers(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var6 = var5.resolved;
            var3 = null;
            var7 = var3 == var6;
            var1 = undefined;
            var2 = undefined;
            if(var7) { _fun0020_ip = 34; continue _fun0020 }
 28:
            var2 = var6.members;
 34:
            if(!(var3 != var2)) { _fun0020_ip = 169; continue _fun0020 }
 41:
            var8 = _closure1_slot11;
            var7 = var8.getChannel;
            var6 = var5.channel_id;
            var6 = var7.bind(var8)(var6);
            var3 = var3 == var6;
            if(var3) { _fun0020_ip = 80; continue _fun0020 }
 70:
            var7 = var6.isPrivate;
            var3 = var7.bind(var6)();
 80:
            if(var3) { _fun0020_ip = 169; continue _fun0020 }
 83:
            var3 = _closure1_slot45;
            var2 = {};
            var6 = var6.guild_id;
            var2['id'] = var6;
            var6 = global;
            var7 = var6.Object;
            var6 = var7.entries;
            var5 = var5.resolved;
            var5 = var5.members;
            var7 = var6.bind(var7)(var5);
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var5 = arg1;
                    var3 = var5[Symbol.iterator];
                    var5 = var3().next;
                    var2 = var5().value;
                    var4 = var3;
                    var1 = undefined;
                    var4 = var4 === var1;
                    var6 = undefined;
                    if(var4) { _fun0021_ip = 27; continue _fun0021 }
 24:
                    var6 = var2;
 27:
                    var2 = undefined;
                    if(var4) { _fun0021_ip = 57; continue _fun0021 }
 32:
                    var7 = var5().value;
                    var5 = var3;
                    var5 = var5 === var1;
                    var2 = undefined;
                    var4 = var5;
                    if(var5) { _fun0021_ip = 57; continue _fun0021 }
 51:
                    var2 = var7;
                    var4 = var5;
 57:
                    if(var4) { _fun0021_ip = 63; continue _fun0021 }
 60:
                    var3.return();
 63:
                    var3 = _closure2_slot0;
                    var5 = var3.resolved;
                    var4 = null;
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0021_ip = 106; continue _fun0021 }
 87:
                    var5 = var5.users;
                    var7 = var4 == var5;
                    var3 = undefined;
                    if(var7) { _fun0021_ip = 106; continue _fun0021 }
 102:
                    var3 = var5[var6];
 106:
                    if(!(var4 == var3)) { _fun0021_ip = 112; continue _fun0021 }
 110:
                    return var1;
 112:
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
 169:
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var13 = function handleLoadMessages(arg1) {
        var1 = arg1;
        var3 = var1.messages;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot46;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot47 = var13;
    var8 = function handleLoadSearchResults(arg1) {
        var1 = arg1;
        var3 = var1.messages;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot47;
            var2 = {};
            var1 = arg1;
            var2['messages'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
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
    var12 = 23;
    var12 = var10[var12];
    var12 = var11.bind(var1)(var12);
    var18 = var12.Store;
    var12 = function(arg1) {
        var4 = function GuildMemberStore() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
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
                if(var1) { _fun0022_ip = 69; continue _fun0022 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0022_ip = 105; continue _fun0022;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
            var3 = 21;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var2 = _closure1_slot16;
            var3 = var3.bind(var4)(var2);
            var2 = var3.toPairs;
            var4 = var2.bind(var3)();
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var2 = var1;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if(var3) { _fun0023_ip = 49; continue _fun0023 }
 24:
                    var5 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0023_ip = 49; continue _fun0023 }
 43:
                    var2 = var5;
                    var3 = var4;
 49:
                    if(var3) { _fun0023_ip = 55; continue _fun0023 }
 52:
                    var1.return();
 55:
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
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var1 = arg1;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var4 = var1().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    if(var3) { _fun0024_ip = 25; continue _fun0024 }
 22:
                    var1 = var4;
 25:
                    if(var3) { _fun0024_ip = 31; continue _fun0024 }
 28:
                    var2.return();
 31:
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
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var11 = arg1;
                var1 = {};
                var9 = _closure1_slot16;
                var4 = global;
                var3 = null;
                for(var5 in var9)
 24:
                {
 33:
                    var14 = var5;
                    var12 = _closure1_slot16;
                    var12 = var12[var14];
                    var13 = var12[var11];
                    var15 = var3 == var13;
                    var12 = undefined;
                    if(var15) { _fun0025_ip = 63; continue _fun0025 }
 57:
                    var12 = var13.nick;
 63:
                    if(var3 == var12) { _fun0025_ip = 24; continue _fun0025 }
 67:
                    var13 = var4.Object;
                    var13 = var13.prototype;
                    var15 = var13.hasOwnProperty;
                    var13 = var15.call;
                    var13 = var13.bind(var15)(var1, var12);
                    if(var13) { _fun0025_ip = 106; continue _fun0025 }
 98:
                    var13 = new Array(0);
                    var1[var12] = var13;
 106:
                    var13 = var1[var12];
                    var12 = var13.push;
                    var12 = var12.bind(var13)(var14);
                    _fun0025_ip = 24; continue _fun0025;
                }
 122:
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
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var2 = arg1;
                var4 = arg2;
                var3 = null;
                if(!(var3 != var2)) { _fun0026_ip = 44; continue _fun0026 }
 12:
                if(!(var3 != var4)) { _fun0026_ip = 44; continue _fun0026 }
 16:
                var1 = _closure1_slot16;
                var2 = var1[var2];
                var1 = var3 != var2;
                if(!var1) { _fun0026_ip = 42; continue _fun0026 }
 34:
                var2 = var2[var4];
                var1 = var3 != var2;
 42:
                return var1;
 44:
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
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var2 = arg1;
                var4 = arg2;
                var3 = null;
                if(!(var3 != var2)) { _fun0027_ip = 59; continue _fun0027 }
 12:
                if(!(var3 != var4)) { _fun0027_ip = 59; continue _fun0027 }
 16:
                var1 = _closure1_slot16;
                var2 = var1[var2];
                var1 = var3 != var2;
                if(!var1) { _fun0027_ip = 57; continue _fun0027 }
 34:
                var4 = var2[var4];
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0027_ip = 53; continue _fun0027 }
 47:
                var2 = var4.joinedAt;
 53:
                var1 = var3 == var2;
 57:
                return var1;
 59:
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
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var5 = arg1;
                var1 = null;
                if(!(var1 != var5)) { _fun0028_ip = 112; continue _fun0028 }
 9:
                var4 = _closure1_slot10;
                var3 = var4.getId;
                var4 = var3.bind(var4)();
                var3 = _closure1_slot16;
                var3 = var3[var5];
                if(!(var1 != var3)) { _fun0028_ip = 108; continue _fun0028 }
 38:
                var5 = var3[var4];
                if(!(var1 != var5)) { _fun0028_ip = 108; continue _fun0028 }
 46:
                var3 = var3[var4];
                var5 = var3.flags;
                var1 = var1 != var5;
                if(!var1) { _fun0028_ip = 106; continue _fun0028 }
 62:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 16;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.hasFlag;
                var2 = _closure1_slot14;
                var2 = var2.IS_GUEST;
                var1 = var3.bind(var4)(var5, var2);
 106:
                return var1;
 108:
                var1 = false;
                return var1;
 112:
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
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var4 = arg1;
                var2 = null;
                if(!(var2 != var4)) { _fun0029_ip = 64; continue _fun0029 }
 9:
                var3 = _closure1_slot16;
                var3 = var3[var4];
                if(!(var2 != var3)) { _fun0029_ip = 58; continue _fun0029 }
 24:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.keys;
                var1 = var1.bind(var2)(var3);
                _fun0029_ip = 62; continue _fun0029;
 58:
                var1 = new Array(0);
 62:
                return var1;
 64:
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
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0030_ip = 50; continue _fun0030 }
 9:
                var2 = _closure1_slot16;
                var3 = var2[var3];
                if(!(var1 != var3)) { _fun0030_ip = 44; continue _fun0030 }
 24:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.values;
                var1 = var1.bind(var2)(var3);
                _fun0030_ip = 48; continue _fun0030;
 44:
                var1 = new Array(0);
 48:
                return var1;
 50:
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
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var2 = _closure1_slot16;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var2 = var1 != var3;
                if(!var2) { _fun0031_ip = 30; continue _fun0031 }
 23:
                var2 = arg2;
                var1 = var3[var2];
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getMember';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var5 = arg1;
                var7 = arg2;
                var2 = this;
                var1 = var2.getTrueMember;
                var4 = var1.bind(var2)(var5, var7);
                var3 = null;
                var1 = var4;
                if(!(var3 != var4)) { _fun0032_ip = 111; continue _fun0032 }
 30:
                var8 = _closure1_slot10;
                var6 = var8.getId;
                var6 = var6.bind(var8)();
                var1 = var4;
                if(!(var7 === var6)) { _fun0032_ip = 111; continue _fun0032 }
 54:
                var7 = _closure1_slot9;
                var6 = var7.isViewingRoles;
                var6 = var6.bind(var7)(var5);
                if(var6) { _fun0032_ip = 93; continue _fun0032 }
 72:
                var7 = _closure1_slot9;
                var6 = var7.isFullServerPreview;
                var6 = var6.bind(var7)(var5);
                var1 = var4;
                if(!var6) { _fun0032_ip = 111; continue _fun0032 }
 93:
                var2 = _closure1_slot18;
                var2 = var2[var5];
                var1 = var4;
                if(!(var3 != var2)) { _fun0032_ip = 111; continue _fun0032 }
 108:
                var1 = var2;
 111:
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
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                var5 = arg1;
                var6 = this;
                var1 = _closure1_slot17;
                var1 = var1[var5];
                var2 = null;
                if(!(var2 == var1)) { _fun0033_ip = 94; continue _fun0033 }
 23:
                var3 = var6.getSelfMember;
                var3 = var3.bind(var6)(var5);
                if(!(var2 != var3)) { _fun0033_ip = 92; continue _fun0033 }
 38:
                var6 = var3.joinedAt;
                if(!(var2 != var6)) { _fun0033_ip = 92; continue _fun0033 }
 48:
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
 92:
                return var2;
 94:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getCachedSelfMember';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                var2 = _closure1_slot19;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0034_ip = 26; continue _fun0034 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getNick';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var5 = arg1;
                var4 = arg2;
                var3 = this;
                var1 = null;
                if(!(var1 != var5)) { _fun0035_ip = 48; continue _fun0035 }
 15:
                if(!(var1 != var4)) { _fun0035_ip = 48; continue _fun0035 }
 19:
                var2 = var3.getMember;
                var3 = var2.bind(var3)(var5, var4);
                var4 = var1 != var3;
                var2 = null;
                if(!var4) { _fun0035_ip = 46; continue _fun0035 }
 40:
                var2 = var3.nick;
 46:
                return var2;
 48:
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
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var3 = _closure1_slot25;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0036_ip = 24; continue _fun0036 }
 20:
                var1 = _closure1_slot26;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getMemberRoleWithPendingUpdates';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var3 = var4.getMember;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                var4 = null;
                var3 = var4 == var1;
                var7 = undefined;
                var8 = undefined;
                if(var3) { _fun0037_ip = 40; continue _fun0037 }
 34:
                var8 = var1.roles;
 40:
                if(!(var4 == var8)) { _fun0037_ip = 48; continue _fun0037 }
 44:
                var8 = new Array(0);
 48:
                var1 = _closure1_slot25;
                var2 = var1[var2];
                var1 = var8;
                if(!(var4 != var2)) { _fun0037_ip = 131; continue _fun0037 }
 66:
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 21;
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
 131:
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
    var7 = 24;
    var7 = var10[var7];
    var23 = var11.bind(var1)(var7);
    var7 = {};
    var18 = function handleConnectionOpen(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
            var1 = _closure1_slot21;
            if(var1) { _fun0038_ip = 24; continue _fun0038 }
 10:
            var1 = {};
            _closure1_slot16 = var1;
            var1 = {};
            _closure1_slot17 = var1;
            _fun0038_ip = 30; continue _fun0038;
 24:
            var1 = false;
            _closure1_slot21 = var1;
 30:
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
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
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
                if(!(var3 != var4)) { _fun0039_ip = 72; continue _fun0039 }
 57:
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
 72:
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
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
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
            if(!var1) { _fun0040_ip = 71; continue _fun0040 }
 67:
            var6 = var3[var4];
 71:
            if(!(var8 != var6)) { _fun0040_ip = 444; continue _fun0040 }
 78:
            var2 = _closure1_slot13;
            var1 = var2.getGuild;
            var10 = var1.bind(var2)(var12);
            if(!(var8 != var10)) { _fun0040_ip = 440; continue _fun0040 }
 99:
            var1 = _closure1_slot25;
            var14 = var1[var12];
            if(!(var8 == var14)) { _fun0040_ip = 113; continue _fun0040 }
 111:
            var14 = {};
 113:
            var5 = _closure1_slot25;
            var2 = {};
            var16 = _closure1_slot1;
            var15 = _closure1_slot2;
            var20 = 21;
            var17 = var15[var20];
            var1 = undefined;
            var18 = var16.bind(var1)(var17);
            var17 = var18.difference;
            var15 = var15[var20];
            var21 = var16.bind(var1)(var15);
            var16 = var21.union;
            var15 = var14.added;
            if(!(var8 == var15)) { _fun0040_ip = 176; continue _fun0040 }
 172:
            var15 = new Array(0);
 176:
            var16 = var16.bind(var21)(var15, var13);
            var15 = var19;
            if(!(var8 == var15)) { _fun0040_ip = 193; continue _fun0040 }
 189:
            var15 = new Array(0);
 193:
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
            if(!(var8 == var14)) { _fun0040_ip = 256; continue _fun0040 }
 252:
            var14 = new Array(0);
 256:
            var14 = var17.bind(var18)(var14, var19);
            if(!(var8 == var13)) { _fun0040_ip = 270; continue _fun0040 }
 266:
            var13 = new Array(0);
 270:
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
            var11 = var12.getRoles;
            var10 = var10.id;
            var10 = var11.bind(var12)(var10);
            var2['guildRoles'] = var10;
            if(!(var8 == var9)) { _fun0040_ip = 367; continue _fun0040 }
 361:
            var9 = var6.roles;
 367:
            var2['roles'] = var9;
            var9 = var6.premiumSince;
            var2['premiumSince'] = var9;
            var9 = var6.isPending;
            var2['isPending'] = var9;
            var9 = var6.joinedAt;
            var2['joinedAt'] = var9;
            if(!(var8 == var7)) { _fun0040_ip = 414; continue _fun0040 }
 409:
            var7 = var6.flags;
 414:
            var2['flags'] = var7;
            var6 = var6.fullProfileLoadedTimestamp;
            var2['fullProfileLoadedTimestamp'] = var6;
            var2 = var5.bind(var1)(var2);
            var3[var4] = var2;
            return var1;
 440:
            var1 = false;
            return var1;
 444:
            var1 = false;
            return var1;
        }
    };
    var7['GUILD_MEMBER_UPDATE_LOCAL'] = var17;
    var17 = function handleGuildMembersChunkBatch(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
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
            if(var2) { _fun0041_ip = 95; continue _fun0041 }
 42:
            var2 = var4.value;
            var9 = _closure1_slot41;
            var8 = var2.guildId;
            var2 = var2.members;
            var8 = var9.bind(var6)(var8, var2);
            if(var8) { _fun0041_ip = 74; continue _fun0041 }
 71:
            var8 = var3;
 74:
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var3 = var8;
            var4 = var9;
            var1 = var3;
            if(!var2) { _fun0041_ip = 42; continue _fun0041 }
 95:
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
        var1 = 19;
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
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var7 = var1.addedMembers;
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0042_ip = 91; continue _fun0042 }
 23:
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
            var2 = 19;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var8.bind(var3)(var2);
            var2 = var2.isNotNullish;
            var2 = var6.bind(var7)(var2);
            var1 = var4.bind(var3)(var5, var2);
 91:
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
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                var1 = arg1;
                var2 = arg2;
                var3 = var2.owner;
                var4 = null;
                if(!(var4 != var3)) { _fun0043_ip = 34; continue _fun0043 }
 18:
                var5 = var1.push;
                var3 = var2.owner;
                var3 = var5.bind(var1)(var3);
 34:
                var6 = var4 == var2;
                var5 = undefined;
                if(var6) { _fun0043_ip = 64; continue _fun0043 }
 43:
                var6 = var2.first_message;
                var7 = var4 == var6;
                var5 = undefined;
                if(var7) { _fun0043_ip = 64; continue _fun0043 }
 58:
                var5 = var6.message_snapshots;
 64:
                if(!(var4 != var5)) { _fun0043_ip = 180; continue _fun0043 }
 68:
                var2 = var2.first_message;
                var5 = var2.message_snapshots;
                var2 = 0;
                var2 = var5[var2];
                var6 = var2.moderator_report;
                var7 = var4 == var6;
                var5 = undefined;
                if(var7) { _fun0043_ip = 107; continue _fun0043 }
 101:
                var5 = var6.reported_member;
 107:
                if(!(var4 != var5)) { _fun0043_ip = 133; continue _fun0043 }
 111:
                var6 = var1.push;
                var5 = var2.moderator_report;
                var5 = var5.reported_member;
                var5 = var6.bind(var1)(var5);
 133:
                var5 = var2.moderator_report;
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0043_ip = 154; continue _fun0043 }
 148:
                var3 = var5.reporting_member;
 154:
                if(!(var4 != var3)) { _fun0043_ip = 180; continue _fun0043 }
 158:
                var3 = var1.push;
                var2 = var2.moderator_report;
                var2 = var2.reporting_member;
                var2 = var3.bind(var1)(var2);
 180:
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
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var4 = var1.userId;
            var10 = var1.roleId;
            var _closure2_slot0 = var10;
            var2 = _closure1_slot16;
            var3 = var2[var6];
            var8 = null;
            if(!(var8 != var3)) { _fun0044_ip = 245; continue _fun0044 }
 45:
            var7 = _closure1_slot13;
            var2 = var7.getGuild;
            var2 = var2.bind(var7)(var6);
            if(!(var8 != var2)) { _fun0044_ip = 196; continue _fun0044 }
 66:
            var7 = var3[var4];
            if(!(var8 != var7)) { _fun0044_ip = 192; continue _fun0044 }
 74:
            var9 = var7.roles;
            var8 = var9.includes;
            var8 = var8.bind(var9)(var10);
            if(var8) { _fun0044_ip = 97; continue _fun0044 }
 93:
            var8 = false;
            return var8;
 97:
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
            var5 = var8.getRoles;
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
 192:
            var2 = false;
            return var2;
 196:
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
 245:
            var1 = false;
            return var1;
        }
    };
    var7['GUILD_ROLE_MEMBER_REMOVE'] = var16;
    var16 = function handleGuildMemberRoleAdd(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var4 = var1.userId;
            var8 = var1.roleId;
            var2 = _closure1_slot16;
            var3 = var2[var6];
            var5 = null;
            if(!(var5 != var3)) { _fun0045_ip = 252; continue _fun0045 }
 39:
            var7 = _closure1_slot13;
            var2 = var7.getGuild;
            var2 = var2.bind(var7)(var6);
            if(!(var5 != var2)) { _fun0045_ip = 203; continue _fun0045 }
 60:
            var7 = var3[var4];
            if(!(var5 != var7)) { _fun0045_ip = 199; continue _fun0045 }
 71:
            var9 = var7.roles;
            var5 = var9.includes;
            var5 = var5.bind(var9)(var8);
            if(var5) { _fun0045_ip = 195; continue _fun0045 }
 90:
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
            var5 = var8.getRoles;
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
 195:
            var2 = false;
            return var2;
 199:
            var2 = false;
            return var2;
 203:
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
 252:
            var1 = false;
            return var1;
        }
    };
    var7['GUILD_ROLE_MEMBER_ADD'] = var16;
    var16 = function handleGuildMemberProfileUpdate(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildMember;
            var6 = var1.guildId;
            var2 = _closure1_slot16;
            var5 = var2[var6];
            var2 = null;
            if(!(var2 != var5)) { _fun0046_ip = 333; continue _fun0046 }
 34:
            var7 = _closure1_slot13;
            var4 = var7.getGuild;
            var9 = var4.bind(var7)(var6);
            if(!(var2 != var9)) { _fun0046_ip = 284; continue _fun0046 }
 55:
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
            var10 = var11.getRoles;
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
            var4 = var8.bind(var2)(var4);
            var5[var7] = var4;
            var4 = _closure1_slot31;
            var3 = var3.user;
            var3 = var3.id;
            var3 = var5[var3];
            var3 = var4.bind(var2)(var6, var3);
            return var2;
 284:
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
 333:
            var1 = false;
            return var1;
        }
    };
    var7['GUILD_MEMBER_PROFILE_UPDATE'] = var16;
    var7['IMPERSONATE_UPDATE'] = var15;
    var7['IMPERSONATE_STOP'] = var15;
    var15 = function handlePassiveUpdateV2(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
            var2 = arg1;
            var1 = var2.members;
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            if(!var1) { _fun0047_ip = 49; continue _fun0047 }
 23:
            var5 = _closure1_slot41;
            var4 = var2.guildId;
            var3 = var2.members;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 49:
            return var1;
        }
    };
    var7['PASSIVE_UPDATE_V2'] = var15;
    var15 = function handleClearPendingUpdates(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var1 = null;
            if(!(var1 != var2)) { _fun0048_ip = 29; continue _fun0048 }
 14:
            var1 = _closure1_slot25;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
 29:
            var1 = false;
            return var1;
        }
    };
    var7['CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES'] = var15;
    var15 = function handleLocalMessagesLoaded(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
            var10 = arg1;
            var1 = var10.guildId;
            var9 = null;
            if(!(var9 != var1)) { _fun0049_ip = 228; continue _fun0049 }
 17:
            var3 = _closure1_slot13;
            var2 = var3.getGuild;
            var1 = var10.guildId;
            var1 = var2.bind(var3)(var1);
            if(!(var9 != var1)) { _fun0049_ip = 228; continue _fun0049 }
 46:
            var7 = true;
            _closure1_slot21 = var7;
            var3 = _closure1_slot16;
            var2 = var10.guildId;
            var4 = _closure1_slot16;
            var1 = var10.guildId;
            var1 = var4[var1];
            if(!(var9 == var1)) { _fun0049_ip = 80; continue _fun0049 }
 78:
            var1 = {};
 80:
            var3[var2] = var1;
            _closure1_slot21 = var7;
            var3 = _closure1_slot16;
            var2 = var10.guildId;
            var4 = _closure1_slot16;
            var1 = var10.guildId;
            var1 = var4[var1];
            if(!(var9 == var1)) { _fun0049_ip = 116; continue _fun0049 }
 114:
            var1 = {};
 116:
            var3[var2] = var1;
            var2 = _closure1_slot29;
            var1 = var10.members;
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = false;
            var1 = false;
            if(var2) { _fun0049_ip = 226; continue _fun0049 }
 153:
            var12 = var3.value;
            var11 = _closure1_slot16;
            var2 = var10.guildId;
            var11 = var11[var2];
            var2 = var12.userId;
            var2 = var11[var2];
            if(!(var9 == var2)) { _fun0049_ip = 208; continue _fun0049 }
 184:
            var11 = _closure1_slot16;
            var2 = var10.guildId;
            var11 = var11[var2];
            var2 = var12.userId;
            var11[var2] = var12;
            var4 = true;
 208:
            var12 = var5.bind(var6)();
            var2 = var12.done;
            var3 = var12;
            var1 = var4;
            if(!var2) { _fun0049_ip = 153; continue _fun0049 }
 226:
            return var1;
 228:
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
            var2 = _closure1_slot46;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['LOAD_PINNED_MESSAGES_SUCCESS'] = var13;
    var7['SEARCH_FINISH'] = var8;
    var7['MOD_VIEW_SEARCH_FINISH'] = var8;
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
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
            var1 = arg1;
            var6 = var1.location;
            var5 = var1.participants;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 22;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getEmbeddedActivityLocationGuildId;
            var3 = var1.bind(var3)(var6);
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0050_ip = 69; continue _fun0050 }
 59:
            var2 = _closure1_slot44;
            var1 = var2.bind(var4)(var3, var5);
 69:
            return var1;
        }
    };
    var7['EMBEDDED_ACTIVITY_UPDATE_V2'] = var8;
    var8 = var12.prototype;
    var8 = Object.create(var8, {constructor: {value: var12}});
    var24 = var8;
    var22 = var7;
    var7 = new var24[var12](var23, var22, var21);
    var7 = var7 instanceof Object ? var7 : var8;
    var8 = 25;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'stores/GuildMemberStore.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var6 = function getUserCommunicationDisabledVersion(arg1, arg2) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
            var5 = _closure1_slot35;
            var4 = undefined;
            var3 = arg1;
            var1 = arg2;
            var3 = var5.bind(var4)(var3, var1);
            var1 = _closure1_slot24;
            var4 = var3 in var1;
            var1 = -1;
            if(!var4) { _fun0051_ip = 46; continue _fun0051 }
 38:
            var2 = _closure1_slot24;
            var1 = var2[var3];
 46:
            return var1;
        }
    };
    var3['getUserCommunicationDisabledVersion'] = var6;
    var3['getCommunicationDisabledUserKey'] = var5;
    var3['getUserIdFromCommunicationDisabledUserKey'] = var4;
    var3['getGuildIdFromCommunicationDisabledUserKey'] = var2;
    return var1;
})();