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
            var22 = var5.bind(var6)(var4);
            var6 = _closure1_slot12;
            var5 = var6.getCurrentUser;
            var23 = var5.bind(var6)();
            var25 = null;
            var5 = var25 != var22;
            if(!var5) { _fun0005_ip = 39; continue _fun0005 }
case 4:
            var7 = var22.verificationLevel;
            var6 = _closure1_slot13;
            var6 = var6.NONE;
            var5 = var7 !== var6;
case 39:
            var19 = var25 != var22;
            if(!var19) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var6 = var22.verificationRoleId;
            var19 = var25 != var6;
case 40:
            if(!(var25 != var22)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            if(!(var25 != var23)) { _fun0005_ip = 42; continue _fun0005 }
case 44:
            if(var5) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            if(!var19) { _fun0005_ip = 42; continue _fun0005 }
case 45:
            var6 = _closure1_slot8;
            var6 = var6.bind(var1)(var22, var23);
            if(var6) { _fun0005_ip = 42; continue _fun0005 }
case 47:
            var9 = _closure1_slot9;
            var8 = var9.getMember;
            var7 = var22.id;
            var6 = var23.id;
            var18 = var8.bind(var9)(var7, var6);
            if(!(var25 != var18)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 12;
            var6 = var8[var6];
            var9 = var7.bind(var1)(var6);
            var8 = var9.hasFlag;
            var6 = var18.flags;
            var10 = var25 != var6;
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
            var6 = var19;
            if(!var6) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var6 = var25 != var18;
case 52:
            var8 = false;
            if(!var6) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var10 = var18.roles;
            var9 = var10.includes;
            var7 = var22.verificationRoleId;
            var7 = var9.bind(var10)(var7);
            var6 = !var7;
            var8 = var6;
case 54:
            var14 = undefined;
            if(!var6) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var10 = _closure1_slot10;
            var9 = var10.getRole;
            var7 = var22.id;
            var6 = var22.verificationRoleId;
            var14 = var9.bind(var10)(var7, var6);
case 56:
            var20 = 0;
            var6 = false;
            var13 = false;
            var12 = false;
            var11 = false;
            var10 = false;
            var9 = 0;
            var7 = 0;
            if(!var5) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var5 = var23.isPhoneVerified;
            var5 = var5.bind(var23)();
            var6 = false;
            var13 = false;
            var12 = false;
            var11 = false;
            var10 = false;
            var9 = 0;
            var7 = 0;
            if(var5) { _fun0005_ip = 58; continue _fun0005 }
case 60:
            var15 = var25 != var18;
            var5 = false;
            if(!var15) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var24 = global;
            var15 = var24.Set;
            var17 = var15.prototype;
            var17 = Object.create(var17, {constructor: {value: var15}});
            var33 = var17;
            var15 = new var33[var15](var32);
            var17 = var15 instanceof Object ? var15 : var17;
            var21 = _closure1_slot21;
            var15 = var18.roles;
            var26 = var21.bind(var1)(var15);
            var21 = var26.bind(var1)();
            var15 = var21.done;
            if(var15) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var27 = var21.value;
            var29 = _closure1_slot10;
            var28 = var29.getRole;
            var15 = var22.id;
            var28 = var28.bind(var29)(var15, var27);
            var15 = var25 == var28;
            if(var15) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var15 = var28.managed;
case 65:
            if(var15) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var15 = var17.add;
            var15 = var15.bind(var17)(var27);
case 67:
            var27 = var26.bind(var1)();
            var15 = var27.done;
            var21 = var27;
            if(!var15) { _fun0005_ip = 64; continue _fun0005 }
case 63:
            var26 = var24.Date;
            var15 = var26.prototype;
            var21 = Object.create(var15, {constructor: {value: var26}});
            var32 = '2022-12-02 00:00:00';
            var33 = var21;
            var15 = new var33[var26](var32, var31);
            var21 = var15 instanceof Object ? var15 : var21;
            var15 = var18.joinedAt;
            var15 = var25 == var15;
            if(var15) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var25 = var24.Date;
            var32 = var18.joinedAt;
            var24 = var25.prototype;
            var24 = Object.create(var24, {constructor: {value: var25}});
            var33 = var24;
            var18 = new var33[var25](var32, var31);
            var18 = var18 instanceof Object ? var18 : var24;
            var15 = var18 < var21;
case 69:
            var24 = var22.features;
            var21 = var24.has;
            var18 = _closure1_slot15;
            var18 = var18.GUILD_ONBOARDING_EVER_ENABLED;
            var18 = var21.bind(var24)(var18);
            if(!var18) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var18 = !var15;
case 71:
            var15 = !var19;
            if(var19) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var15 = !var18;
case 73:
            if(!var15) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var17 = var17.size;
            var15 = var17 > var20;
case 75:
            var5 = false;
            if(!var15) { _fun0005_ip = 61; continue _fun0005 }
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
            var5 = var23.createdAt;
            var18 = var5 - 0;
            var5 = _closure1_slot14;
            var5 = var5.ACCOUNT_AGE;
            var19 = 60000;
            var5 = var19 * var5;
            var17 = global;
            var21 = var17.Date;
            var15 = var21.now;
            var15 = var15.bind(var21)();
            var5 = var18 + var5;
            var15 = var5 - var15;
            var5 = var22.joinedAt;
            var18 = var5 - 0;
            var5 = _closure1_slot14;
            var5 = var5.MEMBER_AGE;
            var5 = var19 * var5;
            var19 = var17.Date;
            var17 = var19.now;
            var17 = var17.bind(var19)();
            var5 = var18 + var5;
            var5 = var5 - var17;
            var18 = var22.verificationLevel;
            var17 = _closure1_slot13;
            var17 = var17.LOW;
            var21 = var18 >= var17;
            if(!var21) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var17 = var23.isClaimed;
            var17 = var17.bind(var23)();
            var21 = !var17;
case 79:
            var17 = var23.isStaff;
            var24 = var17.bind(var23)();
            var19 = false;
            var18 = false;
            var17 = false;
            var16 = false;
            if(var24) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var25 = var22.verificationLevel;
            var24 = _closure1_slot13;
            var24 = var24.LOW;
            var25 = var25 >= var24;
            if(!var25) { _fun0005_ip = 83; continue _fun0005 }
case 84:
            var23 = var23.verified;
            var25 = !var23;
case 83:
            var24 = var22.verificationLevel;
            var23 = _closure1_slot13;
            var23 = var23.VERY_HIGH;
            var24 = var24 >= var23;
            var26 = var22.verificationLevel;
            var23 = _closure1_slot13;
            var23 = var23.MEDIUM;
            var23 = var26 >= var23;
            if(!var23) { _fun0005_ip = 85; continue _fun0005 }
case 86:
            var23 = var15 > var20;
case 85:
            var26 = var22.verificationLevel;
            var22 = _closure1_slot13;
            var22 = var22.HIGH;
            var22 = var26 >= var22;
            if(!var22) { _fun0005_ip = 87; continue _fun0005 }
case 88:
            var22 = var5 > var20;
case 87:
            var16 = var22;
            var19 = var25;
            var18 = var24;
            var17 = var23;
case 81:
            var13 = var19;
            var12 = var18;
            var11 = var17;
            var10 = var16;
            var6 = var21;
            var9 = var15;
            var7 = var5;
case 58:
            var19 = new Array(0);
            if(!var10) { _fun0005_ip = 89; continue _fun0005 }
case 90:
            var5 = var19.push;
            var5 = var5.bind(var19)(var7);
case 89:
            if(!var11) { _fun0005_ip = 91; continue _fun0005 }
case 92:
            var5 = var19.push;
            var5 = var5.bind(var19)(var9);
case 91:
            var5 = var19.length;
            var15 = var5 > var20;
            var5 = undefined;
            if(!var15) { _fun0005_ip = 93; continue _fun0005 }
case 94:
            var15 = global;
            var16 = var15.setTimeout;
            var18 = var15.Math;
            var17 = var18.max;
            var15 = new Array(0);
            var32 = var15;
            var31 = var19;
            var30 = 0;
            var19 = arraySpread(var32, var31, var30);
            var32 = var17;
            var31 = var15;
            var30 = var18;
            var15 = apply(var32, var31, var30);
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
            var5 = var16.bind(var1)(var3, var15);
case 93:
            var3 = _closure1_slot19;
            var2 = {};
            var2['notClaimed'] = var6;
            var2['notEmailVerified'] = var13;
            var2['notPhoneVerified'] = var12;
            var2['newAccount'] = var11;
            var2['newMember'] = var10;
            var2['missingVerificationRole'] = var8;
            var2['verificationRole'] = var14;
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
            var32 = var8 + var9;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var33 = var9;
            var8 = new var33[var10](var32, var31);
            var8 = var8 instanceof Object ? var8 : var9;
            var2['accountDeadline'] = var8;
            var8 = var6.Date;
            var9 = var6.Date;
            var6 = var9.now;
            var6 = var6.bind(var9)();
            var32 = var6 + var7;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var33 = var7;
            var6 = new var33[var8](var32, var31);
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