// app/stores/GuildVerificationStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
            var9 = _closure1_slot22;
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
            var7 = _closure1_slot22;
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
    var _closure1_slot21 = var1;
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
    var _closure1_slot22 = var1;
    var1 = function recomputeGuild(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot24;
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var6 = _closure1_slot18;
            var5 = var6.add;
            var5 = var5.bind(var6)(var4);
            var6 = _closure1_slot11;
            var5 = var6.getGuild;
            var5 = var5.bind(var6)(var4);
            var7 = _closure1_slot12;
            var6 = var7.getCurrentUser;
            var14 = var6.bind(var7)();
            var12 = null;
            if(!(var12 != var5)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var7 = var5.verificationLevel;
            var6 = _closure1_slot13;
            var6 = var6.NONE;
            if(!(var7 !== var6)) { _fun0005_ip = 39; continue _fun0005 }
case 15:
            if(!(var12 != var14)) { _fun0005_ip = 39; continue _fun0005 }
case 41:
            var6 = _closure1_slot8;
            var6 = var6.bind(var1)(var5, var14);
            if(var6) { _fun0005_ip = 39; continue _fun0005 }
case 42:
            var6 = var14.isPhoneVerified;
            var6 = var6.bind(var14)();
            if(var6) { _fun0005_ip = 39; continue _fun0005 }
case 43:
            var9 = _closure1_slot9;
            var8 = var9.getMember;
            var7 = var5.id;
            var6 = var14.id;
            var9 = var8.bind(var9)(var7, var6);
            if(!(var12 != var9)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 12;
            var6 = var8[var6];
            var11 = var7.bind(var1)(var6);
            var10 = var11.hasFlag;
            var6 = var9.flags;
            var13 = var12 != var6;
            var7 = 0;
            var8 = 0;
            if(!var13) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var8 = var6;
case 46:
            var6 = _closure1_slot16;
            var6 = var6.BYPASSES_VERIFICATION;
            var6 = var10.bind(var11)(var8, var6);
            if(var6) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var11 = global;
            var6 = var11.Set;
            var8 = var6.prototype;
            var8 = Object.create(var8, {constructor: {value: var6}});
            var23 = var8;
            var6 = new var23[var6](var22);
            var6 = var6 instanceof Object ? var6 : var8;
            var10 = _closure1_slot21;
            var8 = var9.roles;
            var13 = var10.bind(var1)(var8);
            var10 = var13.bind(var1)();
            var8 = var10.done;
            if(var8) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var15 = var10.value;
            var17 = _closure1_slot10;
            var16 = var17.getRole;
            var8 = var5.id;
            var16 = var16.bind(var17)(var8, var15);
            var8 = var12 == var16;
            if(var8) { _fun0005_ip = 52; continue _fun0005 }
case 12:
            var8 = var16.managed;
case 52:
            if(var8) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var8 = var6.add;
            var8 = var8.bind(var6)(var15);
case 53:
            var15 = var13.bind(var1)();
            var8 = var15.done;
            var10 = var15;
            if(!var8) { _fun0005_ip = 51; continue _fun0005 }
case 50:
            var13 = var11.Date;
            var8 = var13.prototype;
            var10 = Object.create(var8, {constructor: {value: var13}});
            var22 = '2022-12-02 00:00:00';
            var23 = var10;
            var8 = new var23[var13](var22, var21);
            var10 = var8 instanceof Object ? var8 : var10;
            var8 = var9.joinedAt;
            var8 = var12 == var8;
            if(var8) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var12 = var11.Date;
            var22 = var9.joinedAt;
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var23 = var11;
            var9 = new var23[var12](var22, var21);
            var9 = var9 instanceof Object ? var9 : var11;
            var8 = var9 < var10;
case 55:
            var11 = var5.features;
            var10 = var11.has;
            var9 = _closure1_slot15;
            var9 = var9.GUILD_ONBOARDING_EVER_ENABLED;
            var9 = var10.bind(var11)(var9);
            if(!var9) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            if(!var8) { _fun0005_ip = 44; continue _fun0005 }
case 57:
            var6 = var6.size;
            if(!(!(var6 > var7))) { _fun0005_ip = 59; continue _fun0005 }
case 44:
            var6 = var14.createdAt;
            var10 = var6 - 0;
            var6 = _closure1_slot14;
            var6 = var6.ACCOUNT_AGE;
            var8 = 60000;
            var7 = var8 * var6;
            var6 = global;
            var11 = var6.Date;
            var9 = var11.now;
            var9 = var9.bind(var11)();
            var7 = var10 + var7;
            var9 = var7 - var9;
            var7 = var5.joinedAt;
            var10 = var7 - 0;
            var7 = _closure1_slot14;
            var7 = var7.MEMBER_AGE;
            var7 = var8 * var7;
            var11 = var6.Date;
            var8 = var11.now;
            var8 = var8.bind(var11)();
            var7 = var10 + var7;
            var7 = var7 - var8;
            var10 = var5.verificationLevel;
            var8 = _closure1_slot13;
            var8 = var8.LOW;
            var8 = var10 >= var8;
            if(!var8) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var10 = var14.isClaimed;
            var10 = var10.bind(var14)();
            var8 = !var10;
case 60:
            var10 = var14.isPhoneVerified;
            var15 = var10.bind(var14)();
            if(var15) { _fun0005_ip = 62; continue _fun0005 }
case 63:
            var10 = var14.isStaff;
            var15 = var10.bind(var14)();
case 62:
            var13 = false;
            var12 = false;
            var11 = false;
            var10 = false;
            if(var15) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var16 = var5.verificationLevel;
            var15 = _closure1_slot13;
            var15 = var15.LOW;
            var16 = var16 >= var15;
            if(!var16) { _fun0005_ip = 66; continue _fun0005 }
case 67:
            var14 = var14.verified;
            var16 = !var14;
case 66:
            var15 = var5.verificationLevel;
            var14 = _closure1_slot13;
            var14 = var14.VERY_HIGH;
            var15 = var15 >= var14;
            var17 = var5.verificationLevel;
            var14 = _closure1_slot13;
            var14 = var14.MEDIUM;
            var14 = var17 >= var14;
            if(!var14) { _fun0005_ip = 68; continue _fun0005 }
case 69:
            var17 = 0;
            var14 = var9 > var17;
case 68:
            var17 = var5.verificationLevel;
            var5 = _closure1_slot13;
            var5 = var5.HIGH;
            var5 = var17 >= var5;
            if(!var5) { _fun0005_ip = 70; continue _fun0005 }
case 71:
            var17 = 0;
            var5 = var7 > var17;
case 70:
            var10 = var5;
            var13 = var16;
            var12 = var15;
            var11 = var14;
case 64:
            var19 = new Array(0);
            if(!var10) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var5 = var19.push;
            var5 = var5.bind(var19)(var7);
case 72:
            if(!var11) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var5 = var19.push;
            var5 = var5.bind(var19)(var9);
case 74:
            var5 = var19.length;
            var18 = 0;
            var14 = var5 > var18;
            var5 = undefined;
            if(!var14) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var15 = var6.setTimeout;
            var17 = var6.Math;
            var16 = var17.max;
            var14 = new Array(0);
            var22 = var14;
            var21 = var19;
            var20 = 0;
            var18 = arraySpread(var22, var21, var20);
            var22 = var16;
            var21 = var14;
            var20 = var17;
            var14 = apply(var22, var21, var20);
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'GUILD_VERIFICATION_CHECK';
                var1['type'] = var4;
                var4 = _closure2_slot0;
                var1['guildId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var15.bind(var1)(var3, var14);
case 76:
            var3 = _closure1_slot19;
            var2 = {};
            var2['notClaimed'] = var8;
            var2['notEmailVerified'] = var13;
            var2['notPhoneVerified'] = var12;
            var2['newAccount'] = var11;
            var2['newMember'] = var10;
            if(var8) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var8 = var13;
case 78:
            if(var8) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            var8 = var12;
case 80:
            if(var8) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var8 = var11;
case 82:
            if(var8) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var8 = var10;
case 84:
            var8 = !var8;
            var2['canChat'] = var8;
            var10 = var6.Date;
            var11 = var6.Date;
            var8 = var11.now;
            var8 = var8.bind(var11)();
            var22 = var8 + var9;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var23 = var9;
            var8 = new var23[var10](var22, var21);
            var8 = var8 instanceof Object ? var8 : var9;
            var2['accountDeadline'] = var8;
            var8 = var6.Date;
            var9 = var6.Date;
            var6 = var9.now;
            var6 = var6.bind(var9)();
            var22 = var6 + var7;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var23 = var7;
            var6 = new var23[var8](var22, var21);
            var6 = var6 instanceof Object ? var6 : var7;
            var2['memberDeadline'] = var6;
            var2['timeoutRef'] = var5;
            var3[var4] = var2;
            _fun0005_ip = 39; continue _fun0005;
case 59:
            return var1;
case 48:
            return var1;
case 39:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function clearGuild(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot19;
            var3 = var3[var2];
            var4 = null;
            if(!(var4 != var3)) { _fun0006_ip = 86; continue _fun0006 }
case 33:
            var4 = global;
            var5 = var4.clearTimeout;
            var4 = var3.timeoutRef;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
case 86:
            var1 = _closure1_slot19;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var9 = function handleCreateOrUpdateGuild(arg1) {
        var1 = arg1;
        var5 = _closure1_slot18;
        var4 = var5.delete;
        var3 = var1.guild;
        var3 = var3.id;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot23;
        var1 = var1.guild;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.isGuildOwner;
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.VerificationLevels;
    var _closure1_slot13 = var10;
    var10 = var8.VerificationCriteria;
    var _closure1_slot14 = var10;
    var8 = var8.GuildFeatures;
    var _closure1_slot15 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.GuildMemberFlags;
    var _closure1_slot16 = var8;
    var8 = {'notClaimed': false, 'notEmailVerified': false, 'notPhoneVerified': false, 'newAccount': false, 'newMember': false, 'canChat': true};
    var _closure1_slot17 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot18 = var2;
    var2 = {};
    var _closure1_slot19 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildVerificationStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 89; continue _fun0007;
case 87:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 89:
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
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot11;
            var2 = _closure1_slot10;
            var1 = _closure1_slot12;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCheck';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var3 = null;
                if(!(var3 != var4)) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                var5 = _closure1_slot18;
                var1 = var5.has;
                var1 = var1.bind(var5)(var4);
                if(var1) { _fun0008_ip = 92; continue _fun0008 }
case 93:
                var5 = _closure1_slot23;
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
case 92:
                var1 = _closure1_slot19;
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0008_ip = 32; continue _fun0008 }
case 94:
                var1 = _closure1_slot17;
case 32:
                _fun0008_ip = 95; continue _fun0008;
case 90:
                var1 = _closure1_slot17;
case 95:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'canChatInGuild';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = this;
            var2 = var3.getCheck;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = var1.canChat;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildVerificationStore';
    var8['displayName'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConnectionOpen() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = _closure1_slot18;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var6 = _closure1_slot19;
            var1 = undefined;
            for(var2 in var6)
case 96:
            {
case 92:
                var9 = var2;
                var8 = _closure1_slot24;
                var8 = var8.bind(var1)(var9);
                _fun0009_ip = 96; continue _fun0009;
            }
case 97:
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleConnectionClosed() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 14;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.keys;
        var3 = _closure1_slot19;
        var4 = var4.bind(var5)(var3);
        var3 = var4.forEach;
        var2 = _closure1_slot24;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['CONNECTION_CLOSED'] = var10;
    var10 = function handleCurrentUserUpdate() {
        var2 = _closure1_slot18;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['CURRENT_USER_UPDATE'] = var10;
    var2['GUILD_CREATE'] = var9;
    var2['GUILD_UPDATE'] = var9;
    var9 = function handleDeleteGuild(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot24;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['GUILD_DELETE'] = var9;
    var9 = function handleGuildMemberUpdate(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = var1.user;
            var5 = var1.id;
            var3 = _closure1_slot12;
            var1 = var3.getCurrentUser;
            var6 = var1.bind(var3)();
            var1 = null;
            var7 = var1 == var6;
            var1 = undefined;
            var3 = undefined;
            if(var7) { _fun0010_ip = 94; continue _fun0010 }
case 98:
            var3 = var6.id;
case 94:
            if(!(var5 === var3)) { _fun0010_ip = 5; continue _fun0010 }
case 32:
            var3 = _closure1_slot18;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            return var1;
case 5:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_MEMBER_UPDATE'] = var9;
    var4 = function handleGuildVerificationCheck(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot23;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_VERIFICATION_CHECK'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GuildVerificationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();