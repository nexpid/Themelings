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
            var23 = var5.bind(var6)(var4);
            var6 = _closure1_slot12;
            var5 = var6.getCurrentUser;
            var24 = var5.bind(var6)();
            var26 = null;
            var5 = var26 != var23;
            if(!var5) { _fun0005_ip = 39; continue _fun0005 }
case 4:
            var7 = var23.verificationLevel;
            var6 = _closure1_slot13;
            var6 = var6.NONE;
            var5 = var7 !== var6;
case 39:
            var20 = var26 != var23;
            if(!var20) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var6 = var23.verificationRoleId;
            var20 = var26 != var6;
case 40:
            if(!(var26 != var23)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            if(!(var26 != var24)) { _fun0005_ip = 42; continue _fun0005 }
case 44:
            if(var5) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            if(!var20) { _fun0005_ip = 42; continue _fun0005 }
case 45:
            var6 = _closure1_slot8;
            var6 = var6.bind(var1)(var23, var24);
            if(var6) { _fun0005_ip = 42; continue _fun0005 }
case 47:
            var9 = _closure1_slot9;
            var8 = var9.getMember;
            var7 = var23.id;
            var6 = var24.id;
            var19 = var8.bind(var9)(var7, var6);
            if(!(var26 != var19)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 12;
            var6 = var8[var6];
            var9 = var7.bind(var1)(var6);
            var8 = var9.hasFlag;
            var6 = var19.flags;
            var10 = var26 != var6;
            var7 = 0;
            if(!var10) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var7 = var6;
case 50:
            var6 = _closure1_slot16;
            var6 = var6.BYPASSES_VERIFICATION;
            var6 = var8.bind(var9)(var7, var6);
            if(var6) { _fun0005_ip = 42; continue _fun0005 }
case 48:
            var15 = undefined;
            var14 = undefined;
            var8 = false;
            if(!var20) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var6 = var26 != var19;
            var15 = undefined;
            var14 = undefined;
            var8 = false;
            if(!var6) { _fun0005_ip = 52; continue _fun0005 }
case 16:
            var9 = var19.roles;
            var7 = var9.includes;
            var6 = var23.verificationRoleId;
            var6 = var7.bind(var9)(var6);
            var6 = !var6;
            var15 = undefined;
            var14 = undefined;
            var8 = var6;
            if(!var8) { _fun0005_ip = 52; continue _fun0005 }
case 54:
            var11 = _closure1_slot10;
            var10 = var11.getRole;
            var9 = var23.id;
            var7 = var23.verificationRoleId;
            var7 = var10.bind(var11)(var9, var7);
            var9 = var26 != var7;
            var15 = undefined;
            var14 = undefined;
            var8 = var6;
            if(!var9) { _fun0005_ip = 52; continue _fun0005 }
case 55:
            var9 = var7.name;
            var10 = var7.tags;
            var11 = var26 == var10;
            var7 = undefined;
            if(var11) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var7 = var10.guild_connections;
case 56:
            var14 = var26 === var7;
            var15 = var9;
            var8 = var6;
case 52:
            var21 = 0;
            var6 = false;
            var13 = false;
            var12 = false;
            var11 = false;
            var10 = false;
            var9 = 0;
            var7 = 0;
            if(!var5) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var5 = var24.isPhoneVerified;
            var5 = var5.bind(var24)();
            var6 = false;
            var13 = false;
            var12 = false;
            var11 = false;
            var10 = false;
            var9 = 0;
            var7 = 0;
            if(var5) { _fun0005_ip = 58; continue _fun0005 }
case 60:
            var16 = var26 != var19;
            var5 = false;
            if(!var16) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var25 = global;
            var16 = var25.Set;
            var18 = var16.prototype;
            var18 = Object.create(var18, {constructor: {value: var16}});
            var34 = var18;
            var16 = new var34[var16](var33);
            var18 = var16 instanceof Object ? var16 : var18;
            var22 = _closure1_slot21;
            var16 = var19.roles;
            var27 = var22.bind(var1)(var16);
            var22 = var27.bind(var1)();
            var16 = var22.done;
            if(var16) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var28 = var22.value;
            var30 = _closure1_slot10;
            var29 = var30.getRole;
            var16 = var23.id;
            var29 = var29.bind(var30)(var16, var28);
            var16 = var26 == var29;
            if(var16) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var16 = var29.managed;
case 65:
            if(var16) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var16 = var18.add;
            var16 = var16.bind(var18)(var28);
case 67:
            var28 = var27.bind(var1)();
            var16 = var28.done;
            var22 = var28;
            if(!var16) { _fun0005_ip = 64; continue _fun0005 }
case 63:
            var27 = var25.Date;
            var16 = var27.prototype;
            var22 = Object.create(var16, {constructor: {value: var27}});
            var33 = '2022-12-02 00:00:00';
            var34 = var22;
            var16 = new var34[var27](var33, var32);
            var22 = var16 instanceof Object ? var16 : var22;
            var16 = var19.joinedAt;
            var16 = var26 == var16;
            if(var16) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var26 = var25.Date;
            var33 = var19.joinedAt;
            var25 = var26.prototype;
            var25 = Object.create(var25, {constructor: {value: var26}});
            var34 = var25;
            var19 = new var34[var26](var33, var32);
            var19 = var19 instanceof Object ? var19 : var25;
            var16 = var19 < var22;
case 69:
            var25 = var23.features;
            var22 = var25.has;
            var19 = _closure1_slot15;
            var19 = var19.GUILD_ONBOARDING_EVER_ENABLED;
            var19 = var22.bind(var25)(var19);
            if(!var19) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var19 = !var16;
case 71:
            var16 = !var20;
            if(var20) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var16 = !var19;
case 73:
            if(!var16) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var18 = var18.size;
            var16 = var18 > var21;
case 75:
            var5 = false;
            if(!var16) { _fun0005_ip = 61; continue _fun0005 }
case 77:
            var5 = true;
case 61:
            var6 = false;
            var13 = false;
            var12 = false;
            var11 = false;
            var10 = false;
            var9 = 0;
            var7 = 0;
            if(var5) { _fun0005_ip = 58; continue _fun0005 }
case 78:
            var5 = var24.createdAt;
            var19 = var5 - 0;
            var5 = _closure1_slot14;
            var5 = var5.ACCOUNT_AGE;
            var20 = 60000;
            var5 = var20 * var5;
            var18 = global;
            var22 = var18.Date;
            var16 = var22.now;
            var16 = var16.bind(var22)();
            var5 = var19 + var5;
            var16 = var5 - var16;
            var5 = var23.joinedAt;
            var19 = var5 - 0;
            var5 = _closure1_slot14;
            var5 = var5.MEMBER_AGE;
            var5 = var20 * var5;
            var20 = var18.Date;
            var18 = var20.now;
            var18 = var18.bind(var20)();
            var5 = var19 + var5;
            var5 = var5 - var18;
            var19 = var23.verificationLevel;
            var18 = _closure1_slot13;
            var18 = var18.LOW;
            var22 = var19 >= var18;
            if(!var22) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var18 = var24.isClaimed;
            var18 = var18.bind(var24)();
            var22 = !var18;
case 79:
            var18 = var24.isStaff;
            var25 = var18.bind(var24)();
            var20 = false;
            var19 = false;
            var18 = false;
            var17 = false;
            if(var25) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var26 = var23.verificationLevel;
            var25 = _closure1_slot13;
            var25 = var25.LOW;
            var26 = var26 >= var25;
            if(!var26) { _fun0005_ip = 83; continue _fun0005 }
case 84:
            var24 = var24.verified;
            var26 = !var24;
case 83:
            var25 = var23.verificationLevel;
            var24 = _closure1_slot13;
            var24 = var24.VERY_HIGH;
            var25 = var25 >= var24;
            var27 = var23.verificationLevel;
            var24 = _closure1_slot13;
            var24 = var24.MEDIUM;
            var24 = var27 >= var24;
            if(!var24) { _fun0005_ip = 85; continue _fun0005 }
case 86:
            var24 = var16 > var21;
case 85:
            var27 = var23.verificationLevel;
            var23 = _closure1_slot13;
            var23 = var23.HIGH;
            var23 = var27 >= var23;
            if(!var23) { _fun0005_ip = 87; continue _fun0005 }
case 88:
            var23 = var5 > var21;
case 87:
            var17 = var23;
            var20 = var26;
            var19 = var25;
            var18 = var24;
case 81:
            var13 = var20;
            var12 = var19;
            var11 = var18;
            var10 = var17;
            var6 = var22;
            var9 = var16;
            var7 = var5;
case 58:
            var20 = new Array(0);
            if(!var10) { _fun0005_ip = 89; continue _fun0005 }
case 90:
            var5 = var20.push;
            var5 = var5.bind(var20)(var7);
case 89:
            if(!var11) { _fun0005_ip = 91; continue _fun0005 }
case 92:
            var5 = var20.push;
            var5 = var5.bind(var20)(var9);
case 91:
            var5 = var20.length;
            var16 = var5 > var21;
            var5 = undefined;
            if(!var16) { _fun0005_ip = 93; continue _fun0005 }
case 94:
            var16 = global;
            var17 = var16.setTimeout;
            var19 = var16.Math;
            var18 = var19.max;
            var16 = new Array(0);
            var33 = var16;
            var32 = var20;
            var31 = 0;
            var20 = arraySpread(var33, var32, var31);
            var33 = var18;
            var32 = var16;
            var31 = var19;
            var16 = apply(var33, var32, var31);
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
            var5 = var17.bind(var1)(var3, var16);
case 93:
            var3 = _closure1_slot19;
            var2 = {};
            var2['notClaimed'] = var6;
            var2['notEmailVerified'] = var13;
            var2['notPhoneVerified'] = var12;
            var2['newAccount'] = var11;
            var2['newMember'] = var10;
            var2['missingVerificationRole'] = var8;
            var2['verificationRoleName'] = var15;
            var2['verificationRoleIsLinkedRole'] = var14;
            if(var6) { _fun0005_ip = 95; continue _fun0005 }
case 96:
            var6 = var13;
case 95:
            if(var6) { _fun0005_ip = 97; continue _fun0005 }
case 98:
            var6 = var12;
case 97:
            if(var6) { _fun0005_ip = 99; continue _fun0005 }
case 100:
            var6 = var11;
case 99:
            if(var6) { _fun0005_ip = 101; continue _fun0005 }
case 102:
            var6 = var10;
case 101:
            if(var6) { _fun0005_ip = 103; continue _fun0005 }
case 104:
            var6 = var8;
case 103:
            var6 = !var6;
            var2['canChat'] = var6;
            var6 = global;
            var10 = var6.Date;
            var11 = var6.Date;
            var8 = var11.now;
            var8 = var8.bind(var11)();
            var33 = var8 + var9;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var34 = var9;
            var8 = new var34[var10](var33, var32);
            var8 = var8 instanceof Object ? var8 : var9;
            var2['accountDeadline'] = var8;
            var8 = var6.Date;
            var9 = var6.Date;
            var6 = var9.now;
            var6 = var6.bind(var9)();
            var33 = var6 + var7;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var34 = var7;
            var6 = new var34[var8](var33, var32);
            var6 = var6 instanceof Object ? var6 : var7;
            var2['memberDeadline'] = var6;
            var2['timeoutRef'] = var5;
            var3[var4] = var2;
case 42:
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
            if(!(var4 != var3)) { _fun0006_ip = 105; continue _fun0006 }
case 33:
            var4 = global;
            var5 = var4.clearTimeout;
            var4 = var3.timeoutRef;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
case 105:
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
    var8 = {'notClaimed': false, 'notEmailVerified': false, 'notPhoneVerified': false, 'newAccount': false, 'newMember': false, 'missingVerificationRole': false, 'canChat': true};
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
                if(var1) { _fun0007_ip = 106; continue _fun0007 }
case 107:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 108; continue _fun0007;
case 106:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 108:
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
            var10 = _closure1_slot9;
            var9 = _closure1_slot10;
            var8 = _closure1_slot11;
            var7 = _closure1_slot12;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
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
                if(!(var3 != var4)) { _fun0008_ip = 109; continue _fun0008 }
case 110:
                var5 = _closure1_slot18;
                var1 = var5.has;
                var1 = var1.bind(var5)(var4);
                if(var1) { _fun0008_ip = 111; continue _fun0008 }
case 112:
                var5 = _closure1_slot23;
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
case 111:
                var1 = _closure1_slot19;
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0008_ip = 32; continue _fun0008 }
case 113:
                var1 = _closure1_slot17;
case 32:
                _fun0008_ip = 114; continue _fun0008;
case 109:
                var1 = _closure1_slot17;
case 114:
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
case 115:
            {
case 111:
                var9 = var2;
                var8 = _closure1_slot24;
                var8 = var8.bind(var1)(var9);
                _fun0009_ip = 115; continue _fun0009;
            }
case 116:
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
            var3 = var1.guildId;
            var1 = var1.user;
            var5 = var1.id;
            var4 = _closure1_slot12;
            var1 = var4.getCurrentUser;
            var6 = var1.bind(var4)();
            var1 = null;
            var7 = var1 == var6;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0010_ip = 113; continue _fun0010 }
case 117:
            var4 = var6.id;
case 113:
            if(!(var5 === var4)) { _fun0010_ip = 118; continue _fun0010 }
case 32:
            var5 = _closure1_slot18;
            var4 = var5.delete;
            var4 = var4.bind(var5)(var3);
            var2 = _closure1_slot23;
            var2 = var2.bind(var1)(var3);
            return var1;
case 118:
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