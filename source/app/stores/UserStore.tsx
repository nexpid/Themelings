// app/stores/UserStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var10;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot22;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot22;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
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
    var _closure1_slot22 = var1;
    var1 = function mergeGuildAvatar(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg2;
            var4 = arg3;
            var2 = _closure1_slot16;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            if(!(var1 != var2)) { _fun0005_ip = 92; continue _fun0005 }
 26:
            if(!(var1 != var4)) { _fun0005_ip = 46; continue _fun0005 }
 30:
            var1 = var2.addGuildAvatarHash;
            var1 = var1.bind(var2)(var5, var4);
            _fun0005_ip = 59; continue _fun0005;
 46:
            var4 = var2.removeGuildAvatarHash;
            var1 = var4.bind(var2)(var5);
 59:
            var5 = _closure1_slot16;
            var4 = var2.id;
            var5[var4] = var1;
            var1 = var2 !== var1;
            if(!var1) { _fun0005_ip = 90; continue _fun0005 }
 79:
            var2 = _closure1_slot17;
            var2 = var2 + 1;
            _closure1_slot17 = var2;
 90:
            return var1;
 92:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function mergeUserPrimaryGuild(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg2;
            var2 = _closure1_slot16;
            var1 = arg1;
            var7 = var2[var1];
            var8 = null;
            var1 = var8 != var7;
            if(!var1) { _fun0006_ip = 179; continue _fun0006 }
 29:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var10 = 11;
            var2 = var2[var10];
            var9 = undefined;
            var11 = var3.bind(var9)(var2);
            var6 = var11.isUserPrimaryGuildEqual;
            var3 = var7.primaryGuild;
            var2 = var4.primary_guild;
            var2 = var6.bind(var11)(var3, var2);
            var2 = !var2;
            if(!var2) { _fun0006_ip = 176; continue _fun0006 }
 81:
            var3 = var7.primaryGuild;
            var3 = var8 == var3;
            if(var3) { _fun0006_ip = 104; continue _fun0006 }
 94:
            var6 = var4.primary_guild;
            var3 = var8 != var6;
 104:
            if(!var3) { _fun0006_ip = 173; continue _fun0006 }
 107:
            var8 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var10];
            var8 = var8.bind(var9)(var6);
            var6 = var8.ensureUserPrimaryGuild;
            var4 = var4.primary_guild;
            var4 = var6.bind(var8)(var4);
            var7['primaryGuild'] = var4;
            var6 = _closure1_slot16;
            var4 = var7.id;
            var6[var4] = var7;
            var4 = _closure1_slot17;
            var4 = var4 + 1;
            _closure1_slot17 = var4;
            var3 = true;
 173:
            var2 = var3;
 176:
            var1 = var2;
 179:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var4 = function transformUser(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var2 = var1.mfa_enabled;
            var4 = null;
            if(!(var4 != var2)) { _fun0007_ip = 26; continue _fun0007 }
 15:
            var1['mfaEnabled'] = var2;
            var2 = delete var1.mfa_enabled;
 26:
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 12;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var6.bind(var5)(var3);
            var6 = var7.getPremiumTypeFromRawValue;
            var3 = var1.premium_type;
            var3 = var6.bind(var7)(var3);
            if(!(var5 !== var3)) { _fun0007_ip = 83; continue _fun0007 }
 72:
            var1['premiumType'] = var3;
            var3 = delete var1.premium_type;
 83:
            var3 = var1.nsfw_allowed;
            if(!(var4 != var3)) { _fun0007_ip = 104; continue _fun0007 }
 93:
            var1['nsfwAllowed'] = var3;
            var3 = delete var1.nsfw_allowed;
 104:
            var3 = var1.age_verification_status;
            if(!(var4 != var3)) { _fun0007_ip = 125; continue _fun0007 }
 114:
            var1['ageVerificationStatus'] = var3;
            var3 = delete var1.age_verification_status;
 125:
            var3 = var1.public_flags;
            if(!(var4 != var3)) { _fun0007_ip = 146; continue _fun0007 }
 135:
            var1['publicFlags'] = var3;
            var3 = delete var1.public_flags;
 146:
            var3 = var1.purchased_flags;
            if(!(var5 !== var3)) { _fun0007_ip = 167; continue _fun0007 }
 156:
            var1['purchasedFlags'] = var3;
            var3 = delete var1.purchased_flags;
 167:
            var3 = var1.premium_usage_flags;
            if(!(var5 !== var3)) { _fun0007_ip = 188; continue _fun0007 }
 177:
            var1['premiumUsageFlags'] = var3;
            var3 = delete var1.premium_usage_flags;
 188:
            var3 = var1.banner_color;
            if(!(var4 === var3)) { _fun0007_ip = 203; continue _fun0007 }
 198:
            var3 = delete var1.banner_color;
 203:
            var6 = var1.avatar_decoration_data;
            if(!(var5 !== var6)) { _fun0007_ip = 255; continue _fun0007 }
 213:
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 13;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.parseAvatarDecorationData;
            var3 = var3.bind(var4)(var6);
            var1['avatarDecorationData'] = var3;
            var3 = delete var1.avatar_decoration_data;
 255:
            var6 = var1.collectibles;
            if(!(var5 !== var6)) { _fun0007_ip = 307; continue _fun0007 }
 265:
            var3 = delete var1.collectibles;
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 14;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.parseServerUserCollectibles;
            var3 = var3.bind(var4)(var6);
            var1['collectibles'] = var3;
 307:
            var3 = var1.global_name;
            if(!(var5 !== var3)) { _fun0007_ip = 328; continue _fun0007 }
 317:
            var1['globalName'] = var3;
            var3 = delete var1.global_name;
 328:
            var6 = var1.primary_guild;
            if(!(var5 !== var6)) { _fun0007_ip = 375; continue _fun0007 }
 338:
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 11;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.ensureUserPrimaryGuild;
            var3 = var3.bind(var4)(var6);
            var1['primary_guild'] = var3;
 375:
            var6 = var1.display_name_styles;
            if(!(var5 !== var6)) { _fun0007_ip = 427; continue _fun0007 }
 385:
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 15;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.parseServerDisplayNameStyles;
            var3 = var3.bind(var4)(var6);
            var1['displayNameStyles'] = var3;
            var3 = delete var1.display_name_styles;
 427:
            var4 = var1.premium_state;
            if(!(var5 !== var4)) { _fun0007_ip = 479; continue _fun0007 }
 437:
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 16;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.parseServerPremiumState;
            var2 = var2.bind(var3)(var4);
            var1['premiumState'] = var2;
            var2 = delete var1.premium_state;
 479:
            return var1;
        }
    };
    var _closure1_slot25 = var4;
    var1 = function isNotCurrentUser(arg1) {
        var1 = arg1;
        var2 = var1.id;
        var3 = _closure1_slot11;
        var1 = var3.getId;
        var1 = var1.bind(var3)();
        var1 = var2 !== var1;
        return var1;
    };
    var _closure1_slot26 = var1;
    var2 = function mergeUser(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var1 = arguments[1];
            var9 = undefined;
            if(!(var1 === var9)) { _fun0008_ip = 14; continue _fun0008 }
 12:
            var1 = true;
 14:
            var5 = _closure1_slot16;
            var4 = var2.id;
            var6 = var5[var4];
            var4 = var2.id;
            var7 = var9 !== var4;
            if(!var7) { _fun0008_ip = 65; continue _fun0008 }
 42:
            var5 = var2.id;
            var8 = _closure1_slot11;
            var4 = var8.getId;
            var4 = var4.bind(var8)();
            var7 = var5 === var4;
 65:
            var12 = null;
            if(!(var12 != var6)) { _fun0008_ip = 425; continue _fun0008 }
 74:
            var8 = undefined;
            var5 = var6;
            if(!var1) { _fun0008_ip = 536; continue _fun0008 }
 85:
            var1 = _closure1_slot25;
            var1 = var1.bind(var9)(var2);
            var4 = var2.premium_type;
            if(!(var12 == var4)) { _fun0008_ip = 110; continue _fun0008 }
 104:
            var4 = var2.premiumType;
 110:
            var1 = var9 !== var4;
            if(!var1) { _fun0008_ip = 120; continue _fun0008 }
 117:
            var1 = var7;
 120:
            if(!var1) { _fun0008_ip = 154; continue _fun0008 }
 123:
            var11 = _closure1_slot0;
            var13 = _closure1_slot3;
            var10 = 12;
            var10 = var13[var10];
            var11 = var11.bind(var9)(var10);
            var10 = var11.isStaffEnvRawData;
            var1 = var10.bind(var11)(var2);
 154:
            if(!var1) { _fun0008_ip = 248; continue _fun0008 }
 157:
            var11 = var2.premium_type;
            if(!(var12 == var11)) { _fun0008_ip = 173; continue _fun0008 }
 167:
            var11 = var2.premiumType;
 173:
            var10 = _closure1_slot28;
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var1 = 12;
            var1 = var14[var1];
            var13 = var13.bind(var9)(var1);
            var1 = var13.isStaffEnvRawData;
            var1 = var1.bind(var13)(var2);
            var1 = var10.bind(var9)(var1, var11);
            var10 = var2.premiumType;
            if(!(var9 === var10)) { _fun0008_ip = 242; continue _fun0008 }
 224:
            var10 = var2.premium_type;
            if(!(var9 !== var10)) { _fun0008_ip = 248; continue _fun0008 }
 234:
            var2['premium_type'] = var1;
            _fun0008_ip = 248; continue _fun0008;
 242:
            var2['premiumType'] = var1;
 248:
            var1 = var6.primaryGuild;
            var1 = var12 == var1;
            if(!var1) { _fun0008_ip = 271; continue _fun0008 }
 261:
            var10 = var2.primary_guild;
            var1 = var12 == var10;
 271:
            var10 = true;
            if(!(var1 !== var10)) { _fun0008_ip = 409; continue _fun0008 }
 280:
            var1 = var6.primaryGuild;
            var1 = var12 != var1;
            if(!var1) { _fun0008_ip = 303; continue _fun0008 }
 293:
            var11 = var2.primary_guild;
            var1 = var12 == var11;
 303:
            if(!(var1 !== var10)) { _fun0008_ip = 397; continue _fun0008 }
 307:
            var12 = _closure1_slot0;
            var1 = _closure1_slot3;
            var11 = 11;
            var1 = var1[var11];
            var14 = var12.bind(var9)(var1);
            var13 = var14.isUserPrimaryGuildEqual;
            var12 = var6.primaryGuild;
            var1 = var2.primary_guild;
            var1 = var13.bind(var14)(var12, var1);
            if(!(var1 !== var10)) { _fun0008_ip = 397; continue _fun0008 }
 355:
            var10 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var11];
            var11 = var10.bind(var9)(var1);
            var10 = var11.ensureUserPrimaryGuild;
            var1 = var2.primary_guild;
            var1 = var10.bind(var11)(var1);
            var2['primary_guild'] = var1;
            _fun0008_ip = 409; continue _fun0008;
 397:
            var1 = var6.primaryGuild;
            var2['primary_guild'] = var1;
 409:
            var1 = var6.merge;
            var5 = var1.bind(var6)(var2);
            var8 = var4;
            _fun0008_ip = 536; continue _fun0008;
 425:
            var1 = _closure1_slot10;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var18 = var4;
            var17 = var2;
            var1 = new var18[var1](var17, var16);
            var1 = var1 instanceof Object ? var1 : var4;
            var4 = var1.premiumType;
            var6 = var9 !== var4;
            if(!var6) { _fun0008_ip = 468; continue _fun0008 }
 465:
            var6 = var7;
 468:
            var8 = var4;
            var5 = var1;
            if(!var6) { _fun0008_ip = 536; continue _fun0008 }
 477:
            var10 = _closure1_slot28;
            var7 = _closure1_slot0;
            var11 = _closure1_slot3;
            var6 = 12;
            var6 = var11[var6];
            var7 = var7.bind(var9)(var6);
            var6 = var7.isStaffEnv;
            var7 = var6.bind(var7)(var1);
            var6 = var1.premiumType;
            var6 = var10.bind(var9)(var7, var6);
            var1['premiumType'] = var6;
            var8 = var4;
            var5 = var1;
 536:
            var4 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 12;
            var6 = var10[var1];
            var7 = var4.bind(var9)(var6);
            var6 = var7.validatePremiumType;
            var1 = var10[var1];
            var4 = var4.bind(var9)(var1);
            var1 = var4.isStaffEnv;
            var4 = var1.bind(var4)(var5);
            var1 = var5.premiumType;
            var1 = var6.bind(var7)(var4, var8, var1);
            var4 = _closure1_slot16;
            var1 = var2.id;
            var1 = var4[var1];
            var1 = var1 !== var5;
            var4 = _closure1_slot16;
            var2 = var2.id;
            var4[var2] = var5;
            if(!var1) { _fun0008_ip = 639; continue _fun0008 }
 628:
            var2 = _closure1_slot17;
            var2 = var2 + 1;
            _closure1_slot17 = var2;
 639:
            return var1;
        }
    };
    var _closure1_slot27 = var2;
    var1 = function getUserPremiumType(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            if(var1) { _fun0009_ip = 11; continue _fun0009 }
 6:
            var1 = arg2;
            return var1;
 11:
            var2 = _closure1_slot9;
            var1 = var2.getPremiumTypeOverride;
            var1 = var1.bind(var2)();
            var4 = _closure1_slot9;
            var2 = var4.getPremiumTypeActual;
            var2 = var2.bind(var4)();
            var3 = _closure1_slot15;
            if(!(var1 === var3)) { _fun0009_ip = 55; continue _fun0009 }
 52:
            var1 = var2;
 55:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function processResolvedUsers(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var9 = arg1;
            var8 = arg2;
            var3 = null;
            var4 = var3 == var9;
            var1 = undefined;
            var2 = undefined;
            if(var4) { _fun0010_ip = 25; continue _fun0010 }
 19:
            var2 = var9.users;
 25:
            if(!(var3 != var2)) { _fun0010_ip = 94; continue _fun0010 }
 29:
            var6 = var9.users;
            for(var3 in var6)
 46:
            {
 55:
                var11 = var3;
                var10 = var9.users;
                var11 = var10[var11];
                var10 = _closure1_slot26;
                var10 = var10.bind(var1)(var11);
                if(!var10) { _fun0010_ip = 46; continue _fun0010 }
 80:
                var10 = _closure1_slot27;
                var10 = var10.bind(var1)(var11, var8);
                _fun0010_ip = 46; continue _fun0010;
            }
 92:
            return var1;
 94:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function mergeUsersFromMessage(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var7;
            var1 = var3.author;
            var5 = null;
            var1 = var5 != var1;
            if(!var1) { _fun0011_ip = 40; continue _fun0011 }
 27:
            var6 = var3.state;
            var4 = 'SENDING';
            var1 = var4 !== var6;
 40:
            if(!var1) { _fun0011_ip = 63; continue _fun0011 }
 43:
            var8 = _closure1_slot26;
            var6 = var3.author;
            var4 = undefined;
            var1 = var8.bind(var4)(var6);
 63:
            if(!var1) { _fun0011_ip = 87; continue _fun0011 }
 66:
            var6 = _closure1_slot27;
            var4 = var3.author;
            var1 = undefined;
            var1 = var6.bind(var1)(var4, var7);
 87:
            var6 = var3.mentions;
            if(!(var5 != var6)) { _fun0011_ip = 112; continue _fun0011 }
 97:
            var4 = var6.forEach;
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure1_slot26;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    if(!var3) { _fun0012_ip = 37; continue _fun0012 }
 20:
                    var3 = _closure1_slot27;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var1)(var4, var2);
 37:
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1);
 112:
            var6 = var3.interaction;
            var8 = var5 == var6;
            var1 = undefined;
            var4 = undefined;
            if(var8) { _fun0011_ip = 134; continue _fun0011 }
 129:
            var4 = var6.user;
 134:
            var4 = var5 != var4;
            if(!var4) { _fun0011_ip = 173; continue _fun0011 }
 141:
            var8 = _closure1_slot26;
            var9 = var3.interaction;
            var10 = var5 == var9;
            var6 = undefined;
            if(var10) { _fun0011_ip = 168; continue _fun0011 }
 163:
            var6 = var9.user;
 168:
            var4 = var8.bind(var1)(var6);
 173:
            if(!var4) { _fun0011_ip = 200; continue _fun0011 }
 176:
            var6 = _closure1_slot27;
            var4 = var3.interaction;
            var4 = var4.user;
            var4 = var6.bind(var1)(var4, var7);
 200:
            var8 = var3.attachments;
            if(!(var5 != var8)) { _fun0011_ip = 225; continue _fun0011 }
 210:
            var6 = var8.forEach;
            var4 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.clip_participants;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0013_ip = 34; continue _fun0013 }
 17:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var4 = arg1;
                            var3 = _closure1_slot26;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var4);
                            if(!var3) { _fun0014_ip = 37; continue _fun0014 }
 20:
                            var3 = _closure1_slot27;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var1)(var4, var2);
 37:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var8)(var4);
 225:
            var8 = _closure1_slot29;
            var6 = var3.resolved;
            var6 = var8.bind(var1)(var6, var7);
            var8 = var3.interaction_metadata;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0011_ip = 264; continue _fun0011 }
 259:
            var6 = var8.user;
 264:
            var6 = var5 != var6;
            if(!var6) { _fun0011_ip = 291; continue _fun0011 }
 271:
            var9 = _closure1_slot26;
            var8 = var3.interaction_metadata;
            var8 = var8.user;
            var6 = var9.bind(var1)(var8);
 291:
            if(!var6) { _fun0011_ip = 315; continue _fun0011 }
 294:
            var6 = _closure1_slot27;
            var4 = var3.interaction_metadata;
            var4 = var4.user;
            var4 = var6.bind(var1)(var4, var7);
 315:
            var4 = var3.message_snapshots;
            if(!(var5 != var4)) { _fun0011_ip = 346; continue _fun0011 }
 325:
            var4 = var3.message_snapshots;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.moderator_report;
                    var5 = null;
                    var6 = var5 == var4;
                    var1 = undefined;
                    var3 = undefined;
                    if(var6) { _fun0015_ip = 42; continue _fun0015 }
 22:
                    var4 = var4.reported_member;
                    var6 = var5 == var4;
                    var3 = undefined;
                    if(var6) { _fun0015_ip = 42; continue _fun0015 }
 37:
                    var3 = var4.user;
 42:
                    if(!(var5 != var3)) { _fun0015_ip = 83; continue _fun0015 }
 46:
                    var6 = _closure1_slot27;
                    var3 = var2.moderator_report;
                    var3 = var3.reported_member;
                    var4 = var3.user;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var1)(var4, var3);
 83:
                    var4 = var2.moderator_report;
                    var6 = var5 == var4;
                    var3 = undefined;
                    if(var6) { _fun0015_ip = 118; continue _fun0015 }
 98:
                    var4 = var4.reporting_member;
                    var6 = var5 == var4;
                    var3 = undefined;
                    if(var6) { _fun0015_ip = 118; continue _fun0015 }
 113:
                    var3 = var4.user;
 118:
                    if(!(var5 != var3)) { _fun0015_ip = 159; continue _fun0015 }
 122:
                    var6 = _closure1_slot27;
                    var3 = var2.moderator_report;
                    var3 = var3.reporting_member;
                    var4 = var3.user;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var1)(var4, var3);
 159:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.values;
                    var6 = var2.message;
                    var7 = var5 == var6;
                    var2 = undefined;
                    if(var7) { _fun0015_ip = 207; continue _fun0015 }
 186:
                    var6 = var6.resolved;
                    var7 = var5 == var6;
                    var2 = undefined;
                    if(var7) { _fun0015_ip = 207; continue _fun0015 }
 201:
                    var2 = var6.users;
 207:
                    if(!(var5 == var2)) { _fun0015_ip = 213; continue _fun0015 }
 211:
                    var2 = {};
 213:
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var4 = arg1;
                            var3 = _closure1_slot26;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var4);
                            if(!var3) { _fun0016_ip = 37; continue _fun0016 }
 20:
                            var3 = _closure1_slot27;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var1)(var4, var2);
 37:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 346:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function handleConnectionOpen(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var6 = var1.user;
            var7 = var1.users;
            var5 = var1.guilds;
            var1 = delete var6.premium;
            var1 = delete var6.banner_color;
            var4 = _closure1_slot27;
            var1 = undefined;
            var4 = var4.bind(var1)(var6);
            var6 = var7.forEach;
            var4 = function(arg1) {
                var3 = _closure1_slot27;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var4 = var5.forEach;
            var3 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = var2.members;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var2 = arg1;
                    var7 = _closure1_slot23;
                    var1 = var2.user;
                    var6 = var1.id;
                    var1 = _closure3_slot0;
                    var5 = var1.id;
                    var4 = var2.avatar;
                    var1 = undefined;
                    var4 = var7.bind(var1)(var6, var5, var4);
                    var4 = _closure1_slot24;
                    var3 = var2.user;
                    var3 = var3.id;
                    var2 = var2.user;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot16;
            var5 = _closure1_slot11;
            var3 = var5.getId;
            var3 = var3.bind(var5)();
            var4 = var4[var3];
            var3 = null;
            if(!(var3 != var4)) { _fun0017_ip = 163; continue _fun0017 }
 104:
            var4 = _closure1_slot16;
            var3 = _closure1_slot18;
            var6 = _closure1_slot10;
            var2 = {'id': null, 'username': 'Wumpus', 'discriminator': '0', 'globalName': 'Wumpus', 'avatar': 'c1f86b313385cb97985f1b118851c28c'};
            var2['id'] = var3;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var9 = var5;
            var8 = var2;
            var2 = new var9[var6](var8, var7);
            var2 = var2 instanceof Object ? var2 : var5;
            var4[var3] = var2;
 163:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function handleConnectionOpenSupplemental(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var2 = arg1;
            var5 = var2.guilds;
            var3 = var2.lazyPrivateChannels;
            var4 = var5.forEach;
            var2 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = var2.members;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var2 = arg1;
                    var7 = _closure1_slot23;
                    var1 = var2.user;
                    var6 = var1.id;
                    var1 = _closure3_slot0;
                    var5 = var1.id;
                    var4 = var2.avatar;
                    var1 = undefined;
                    var4 = var7.bind(var1)(var6, var5, var4);
                    var4 = _closure1_slot24;
                    var3 = var2.user;
                    var3 = var3.id;
                    var2 = var2.user;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var2 = null;
            if(!(var2 != var3)) { _fun0018_ip = 53; continue _fun0018 }
 38:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.rawRecipients;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0019_ip = 32; continue _fun0019 }
 15:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = _closure1_slot27;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
 53:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function isIncompleteUser(arg1) {
        var2 = 'incomplete';
        var1 = arg1;
        var1 = var2 in var1;
        var1 = !var1;
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function handleInitialize(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var3 = var1.users;
            var2 = null;
            if(!(var2 != var3)) { _fun0020_ip = 135; continue _fun0020 }
 15:
            var2 = _closure1_slot21;
            var1 = var1.users;
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0020_ip = 135; continue _fun0020 }
 47:
            var9 = var2.value;
            var6 = var9.id;
            var1 = _closure1_slot16;
            var1 = var6 in var1;
            if(!var1) { _fun0020_ip = 77; continue _fun0020 }
 68:
            var6 = _closure1_slot33;
            var1 = var6.bind(var4)(var9);
 77:
            if(var1) { _fun0020_ip = 120; continue _fun0020 }
 80:
            var7 = _closure1_slot16;
            var6 = var9.id;
            var1 = _closure1_slot10;
            var8 = var1.prototype;
            var8 = Object.create(var8, {constructor: {value: var1}});
            var11 = var8;
            var10 = var9;
            var1 = new var11[var1](var10, var9);
            var1 = var1 instanceof Object ? var1 : var8;
            var7[var6] = var1;
 120:
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(!var1) { _fun0020_ip = 47; continue _fun0020 }
 135:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function handleUserUpdate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var3 = var1.user;
            var4 = _closure1_slot26;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            if(var4) { _fun0021_ip = 29; continue _fun0021 }
 25:
            var4 = false;
            return var4;
 29:
            var2 = _closure1_slot27;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function handleUserProfileFetchSuccess(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var2 = var1.userProfile;
            var5 = _closure1_slot26;
            var4 = var2.user;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            if(var4) { _fun0022_ip = 35; continue _fun0022 }
 31:
            var4 = false;
            return var4;
 35:
            var3 = _closure1_slot27;
            var2 = var2.user;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function handleCurrentUserUpdate(arg1) {
        var1 = arg1;
        var3 = var1.user;
        var2 = _closure1_slot27;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function updatePremiumType(arg1) {
        var1 = arg1;
        var3 = var1.user;
        var2 = _closure1_slot27;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function handleLoadMessages(arg1) {
        var1 = arg1;
        var3 = var1.messages;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var4 = _closure1_slot30;
            var1 = undefined;
            var3 = arg1;
            var2 = true;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = false;
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function handleLoadPinnedMessages(arg1) {
        var1 = arg1;
        var3 = var1.pins;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = var1.message;
            var3 = _closure1_slot30;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = false;
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function handleThreadListSync(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var3 = var1.mostRecentMessages;
            var1 = null;
            if(!(var1 != var3)) { _fun0023_ip = 32; continue _fun0023 }
 15:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var4 = _closure1_slot30;
                var1 = undefined;
                var3 = arg1;
                var2 = false;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 32:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function handleLoadSearchResults(arg1) {
        var1 = arg1;
        var3 = var1.data;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var2 = arg1;
            var5 = var2.messages;
            var3 = var2.channels;
            var4 = var5.forEach;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var4 = _closure1_slot30;
                    var1 = undefined;
                    var3 = arg1;
                    var2 = true;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var3 = _closure1_slot14;
                    var3 = var3.DM;
                    var3 = var4 !== var3;
                    if(!var3) { _fun0024_ip = 47; continue _fun0024 }
 28:
                    var5 = var1.type;
                    var4 = _closure1_slot14;
                    var4 = var4.GROUP_DM;
                    var3 = var5 !== var4;
 47:
                    if(var3) { _fun0024_ip = 106; continue _fun0024 }
 50:
                    var6 = var1.recipients;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0024_ip = 79; continue _fun0024 }
 62:
                    var5 = var6.forEach;
                    var3 = function(arg1) {
                        var3 = _closure1_slot27;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var3 = var5.bind(var6)(var3);
 79:
                    var3 = var1.recipient;
                    if(!(var4 != var3)) { _fun0024_ip = 106; continue _fun0024 }
 89:
                    var3 = _closure1_slot27;
                    var2 = var1.recipient;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 106:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = false;
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function handleLoadThreadsSuccess(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var2 = arg1;
            var6 = var2.firstMessages;
            var3 = var2.owners;
            var2 = null;
            if(!(var2 != var6)) { _fun0025_ip = 38; continue _fun0025 }
 23:
            var5 = var6.forEach;
            var4 = function(arg1) {
                var4 = _closure1_slot30;
                var1 = undefined;
                var3 = arg1;
                var2 = true;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
 38:
            if(!(var2 != var3)) { _fun0025_ip = 57; continue _fun0025 }
 42:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var4 = _closure1_slot27;
                var1 = arg1;
                var3 = var1.user;
                var2 = undefined;
                var1 = true;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 57:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function handleLoadForumPosts(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.values;
        var3 = var1.bind(var2)(var3);
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var1 = arg1;
                var7 = var1.first_message;
                var6 = var1.most_recent_message;
                var1 = var1.owner;
                var4 = null;
                if(!(var4 != var7)) { _fun0026_ip = 44; continue _fun0026 }
 27:
                var5 = _closure1_slot30;
                var3 = undefined;
                var2 = true;
                var2 = var5.bind(var3)(var7, var2);
 44:
                if(!(var4 != var6)) { _fun0026_ip = 65; continue _fun0026 }
 48:
                var5 = _closure1_slot30;
                var3 = undefined;
                var2 = true;
                var2 = var5.bind(var3)(var6, var2);
 65:
                var2 = var4 != var1;
                if(!var2) { _fun0026_ip = 81; continue _fun0026 }
 72:
                var3 = var1.user;
                var2 = var4 != var3;
 81:
                if(!var2) { _fun0026_ip = 106; continue _fun0026 }
 84:
                var4 = _closure1_slot27;
                var3 = var1.user;
                var2 = undefined;
                var1 = true;
                var1 = var4.bind(var2)(var3, var1);
 106:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot44 = var1;
    var1 = function handleLoadMessageRequestsSupplementalDataSuccess(arg1) {
        var1 = arg1;
        var3 = var1.supplementalData;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.values;
        var3 = var1.bind(var2)(var3);
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var1 = arg1;
                var4 = var1.message_preview;
                var1 = null;
                if(!(var1 != var4)) { _fun0027_ip = 32; continue _fun0027 }
 15:
                var3 = _closure1_slot30;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var4, var1);
 32:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot45 = var1;
    var1 = function handleFetchUsersForGuildEventSuccess(arg1) {
        var2 = arg1;
        var3 = var2.guildScheduledEventUsers;
        var2 = var2.guildId;
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var2 = arg1;
                var1 = var2.user;
                var6 = var2.member;
                var3 = null;
                if(!(var3 != var1)) { _fun0028_ip = 76; continue _fun0028 }
 20:
                var4 = _closure1_slot27;
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var7 = var3 == var6;
                var4 = undefined;
                if(var7) { _fun0028_ip = 49; continue _fun0028 }
 43:
                var4 = var6.avatar;
 49:
                if(!(var3 != var4)) { _fun0028_ip = 76; continue _fun0028 }
 53:
                var3 = _closure1_slot23;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var3.bind(var5)(var2, var1, var4);
 76:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot46 = var1;
    var1 = function handleLoadNotificationCenterItems(arg1) {
        var1 = arg1;
        var3 = var1.items;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var1 = arg1;
                var3 = var1.other_user;
                var2 = null;
                if(!(var2 != var3)) { _fun0029_ip = 35; continue _fun0029 }
 15:
                var3 = _closure1_slot27;
                var2 = var1.other_user;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 35:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot47 = var1;
    var1 = function handleNotificationCenterItemCreate(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var1 = arg1;
            var1 = var1.item;
            var3 = var1.other_user;
            var2 = null;
            if(!(var2 != var3)) { _fun0030_ip = 40; continue _fun0030 }
 20:
            var3 = _closure1_slot27;
            var2 = var1.other_user;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 40:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function handleIncomingMessage(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var1 = arg1;
            var4 = var1.message;
            var1 = _closure1_slot30;
            var10 = undefined;
            var2 = true;
            var1 = var1.bind(var10)(var4, var2);
            var5 = var4.flags;
            var1 = null;
            if(!(var1 != var5)) { _fun0031_ip = 86; continue _fun0031 }
 36:
            var6 = _closure1_slot2;
            var5 = _closure1_slot3;
            var11 = 17;
            var5 = var5[var11];
            var7 = var6.bind(var10)(var5);
            var6 = var7.hasFlag;
            var5 = var4.flags;
            var4 = _closure1_slot13;
            var4 = var4.URGENT;
            var4 = var6.bind(var7)(var5, var4);
            if(var4) { _fun0031_ip = 90; continue _fun0031 }
 86:
            var4 = false;
            return var4;
 90:
            var5 = _closure1_slot16;
            var6 = _closure1_slot11;
            var4 = var6.getId;
            var4 = var4.bind(var6)();
            var8 = var5[var4];
            var1 = var1 != var8;
            if(!var1) { _fun0031_ip = 203; continue _fun0031 }
 119:
            var5 = _closure1_slot16;
            var6 = _closure1_slot11;
            var4 = var6.getId;
            var4 = var4.bind(var6)();
            var7 = var8.set;
            var9 = _closure1_slot2;
            var6 = _closure1_slot3;
            var6 = var6[var11];
            var10 = var9.bind(var10)(var6);
            var9 = var10.setFlag;
            var6 = var8.flags;
            var3 = _closure1_slot12;
            var3 = var3.HAS_UNREAD_URGENT_MESSAGES;
            var6 = var9.bind(var10)(var6, var3, var2);
            var3 = 'flags';
            var3 = var7.bind(var8)(var3, var6);
            var5[var4] = var3;
            var1 = true;
 203:
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = function handleCreateChannel(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.rawRecipients;
            var1 = null;
            if(!(var1 != var3)) { _fun0032_ip = 37; continue _fun0032 }
 20:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot27;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 37:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = function handleUpdateChannels(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
            var1 = arg1;
            var2 = var1.channels;
            var1 = _closure1_slot21;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = null;
            if(var1) { _fun0033_ip = 84; continue _fun0033 }
 39:
            var1 = var2.value;
            var8 = var1.rawRecipients;
            if(!(var3 != var8)) { _fun0033_ip = 69; continue _fun0033 }
 54:
            var7 = var8.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot27;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var7.bind(var8)(var1);
 69:
            var7 = var4.bind(var5)();
            var1 = var7.done;
            var2 = var7;
            if(!var1) { _fun0033_ip = 39; continue _fun0033 }
 84:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function handlePresenceUpdates(arg1) {
        var2 = arg1;
        var4 = var2.updates;
        var3 = var4.map;
        var2 = function(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var2 = _closure1_slot16;
                var1 = var1.user;
                var1 = var1.id;
                var2 = var2[var1];
                var _closure3_slot1 = var2;
                var1 = null;
                if(!(var1 != var2)) { _fun0034_ip = 98; continue _fun0034 }
 40:
                var6 = _closure1_slot19;
                var5 = var6.reduce;
                var2 = function(arg1, arg2) {
                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                        var5 = arg1;
                        var8 = arg2;
                        var1 = _closure3_slot0;
                        var2 = var1.user;
                        var1 = var2.hasOwnProperty;
                        var2 = var1.bind(var2)(var8);
                        var1 = var5;
                        if(!var2) { _fun0035_ip = 120; continue _fun0035 }
 35:
                        var7 = _closure3_slot1;
                        var6 = var7.set;
                        var9 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 18;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var9.bind(var2)(var3);
                        var2 = var3.camelCase;
                        var3 = var2.bind(var3)(var8);
                        var2 = _closure3_slot0;
                        var2 = var2.user;
                        var2 = var2[var8];
                        var3 = var6.bind(var7)(var3, var2);
                        var2 = var5;
                        if(var5) { _fun0035_ip = 113; continue _fun0035 }
 105:
                        var5 = _closure3_slot1;
                        var2 = var3 !== var5;
 113:
                        _closure3_slot1 = var3;
                        var1 = var2;
 120:
                        return var1;
                    }
                };
                var1 = false;
                var2 = var5.bind(var6)(var2, var1);
                var5 = !var2;
                var1 = !var5;
                if(var5) { _fun0034_ip = 96; continue _fun0034 }
 72:
                var5 = _closure1_slot16;
                var4 = _closure3_slot1;
                var4 = var4.id;
                var3 = _closure3_slot1;
                var5[var4] = var3;
                var1 = var2;
 96:
                return var1;
 98:
                var1 = false;
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot52 = var1;
    var1 = function handleLoadedBans(arg1) {
        var1 = arg1;
        var3 = var1.bans;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot27;
            var1 = arg1;
            var2 = var1.user;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot53 = var1;
    var1 = function handleLoadedBansBatch(arg1) {
        var1 = arg1;
        var3 = var1.bans;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot27;
            var1 = arg1;
            var2 = var1.user;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot54 = var1;
    var1 = function handleBan(arg1) {
        var3 = _closure1_slot27;
        var1 = arg1;
        var2 = var1.user;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot55 = var1;
    var1 = function handleRecipient(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
            var2 = arg1;
            var1 = var2.isMember;
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0036_ip = 37; continue _fun0036 }
 18:
            var4 = _closure1_slot27;
            var3 = var2.user;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 37:
            return var1;
        }
    };
    var _closure1_slot56 = var1;
    var1 = function handleGuildMembers(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot27;
            var2 = var1.user;
            var6 = undefined;
            var2 = var4.bind(var6)(var2);
            var5 = _closure1_slot23;
            var3 = var1.user;
            var4 = var3.id;
            var3 = var1.guildId;
            var1 = var1.avatar;
            var1 = var5.bind(var6)(var4, var3, var1);
            if(var1) { _fun0037_ip = 60; continue _fun0037 }
 57:
            var1 = var2;
 60:
            return var1;
        }
    };
    var _closure1_slot57 = var1;
    var1 = function handleGuildMemberListUpdate(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
            var1 = arg1;
            var2 = var1.ops;
            var1 = _closure1_slot21;
            var9 = undefined;
            var8 = var1.bind(var9)(var2);
            var2 = var8.bind(var9)();
            var1 = var2.done;
            var7 = null;
            var6 = 'UPDATE';
            var5 = 'INSERT';
            var4 = var2;
            var3 = undefined;
            var2 = undefined;
            if(var1) { _fun0038_ip = 146; continue _fun0038 }
 52:
            var1 = var4.value;
            var11 = var1.op;
            if(!(var5 !== var11)) { _fun0038_ip = 75; continue _fun0038 }
 66:
            var11 = var1.op;
            if(!(var6 === var11)) { _fun0038_ip = 131; continue _fun0038 }
 75:
            var1 = var1.item;
            var11 = var1.member;
            var12 = var7 == var11;
            var1 = undefined;
            if(var12) { _fun0038_ip = 100; continue _fun0038 }
 95:
            var1 = var11.user;
 100:
            var3 = var11;
            var2 = var1;
            if(!(var7 != var1)) { _fun0038_ip = 131; continue _fun0038 }
 110:
            var13 = _closure1_slot24;
            var12 = var1.id;
            var12 = var13.bind(var9)(var12, var1);
            var3 = var11;
            var2 = var1;
 131:
            var11 = var8.bind(var9)();
            var1 = var11.done;
            var4 = var11;
            if(!var1) { _fun0038_ip = 52; continue _fun0038 }
 146:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot58 = var1;
    var1 = function handleGuildMembersChunkBatch(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
            var2 = arg1;
            var3 = var2.chunks;
            var2 = false;
            var _closure2_slot0 = var2;
            var6 = function _loop(arg1) {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = var2.members;
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                            var2 = arg1;
                            var1 = arg2;
                            var5 = _closure1_slot27;
                            var3 = var1.user;
                            var7 = undefined;
                            var3 = var5.bind(var7)(var3);
                            var6 = _closure1_slot23;
                            var4 = var1.user;
                            var5 = var4.id;
                            var4 = _closure3_slot0;
                            var4 = var4.guildId;
                            var1 = var1.avatar;
                            var1 = var6.bind(var7)(var5, var4, var1);
                            if(var1) { _fun0041_ip = 70; continue _fun0041 }
 67:
                            var1 = var3;
 70:
                            if(var1) { _fun0041_ip = 76; continue _fun0041 }
 73:
                            var1 = var2;
 76:
                            return var1;
                        }
                    };
                    var1 = false;
                    var2 = var3.bind(var4)(var2, var1);
                    if(var2) { _fun0040_ip = 44; continue _fun0040 }
 37:
                    var2 = _closure2_slot0;
 44:
                    _closure2_slot0 = var2;
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = _closure1_slot21;
            var5 = undefined;
            var4 = var2.bind(var5)(var3);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0039_ip = 73; continue _fun0039 }
 48:
            var2 = var3.value;
            var2 = var6.bind(var5)(var2);
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0039_ip = 48; continue _fun0039 }
 73:
            var1 = _closure2_slot0;
            return var1;
        }
    };
    var _closure1_slot59 = var1;
    var1 = function handlePassiveUpdateV2(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
            var9 = arg1;
            var2 = _closure1_slot21;
            var1 = var9.members;
            var7 = undefined;
            var6 = var2.bind(var7)(var1);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0042_ip = 121; continue _fun0042 }
 42:
            var2 = var4.value;
            var11 = _closure1_slot27;
            var10 = var2.user;
            var10 = var11.bind(var7)(var10);
            if(!var10) { _fun0042_ip = 66; continue _fun0042 }
 64:
            var3 = true;
 66:
            var12 = _closure1_slot23;
            var10 = var2.user;
            var11 = var10.id;
            var10 = var9.guildId;
            var2 = var2.avatar;
            var2 = var12.bind(var7)(var11, var10, var2);
            if(!var2) { _fun0042_ip = 103; continue _fun0042 }
 101:
            var3 = true;
 103:
            var11 = var6.bind(var7)();
            var2 = var11.done;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0042_ip = 42; continue _fun0042 }
 121:
            return var1;
        }
    };
    var _closure1_slot60 = var1;
    var1 = function handleLocalMessagesLoaded(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
            var2 = _closure1_slot21;
            var1 = arg1;
            var1 = var1.users;
            var3 = null;
            if(!(var3 == var1)) { _fun0043_ip = 26; continue _fun0043 }
 22:
            var1 = new Array(0);
 26:
            var7 = undefined;
            var6 = var2.bind(var7)(var1);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var5 = global;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0043_ip = 131; continue _fun0043 }
 54:
            var10 = var4.value;
            var12 = var5.Object;
            var11 = var12.hasOwn;
            var9 = _closure1_slot16;
            var2 = var10.id;
            var2 = var11.bind(var12)(var9, var2);
            var9 = var3;
            if(var2) { _fun0043_ip = 110; continue _fun0043 }
 92:
            var2 = _closure1_slot27;
            var2 = var2.bind(var7)(var10);
            if(var2) { _fun0043_ip = 107; continue _fun0043 }
 104:
            var2 = var3;
 107:
            var9 = var2;
 110:
            var10 = var6.bind(var7)();
            var2 = var10.done;
            var3 = var9;
            var4 = var10;
            var1 = var3;
            if(!var2) { _fun0043_ip = 54; continue _fun0043 }
 131:
            return var1;
        }
    };
    var _closure1_slot61 = var1;
    var1 = function handleThreadMemberListUpdate(arg1) {
        var2 = arg1;
        var4 = var2.members;
        var2 = false;
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                var2 = arg1;
                var1 = var2.member;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0044_ip = 43; continue _fun0044 }
 18:
                var6 = _closure1_slot27;
                var4 = var2.member;
                var5 = var4.user;
                var4 = undefined;
                var1 = var6.bind(var4)(var5);
 43:
                if(!var1) { _fun0044_ip = 55; continue _fun0044 }
 46:
                var1 = true;
                _closure2_slot0 = var1;
 55:
                var1 = var2.presence;
                var1 = var3 != var1;
                if(!var1) { _fun0044_ip = 93; continue _fun0044 }
 68:
                var4 = _closure1_slot27;
                var2 = var2.presence;
                var3 = var2.user;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
 93:
                if(!var1) { _fun0044_ip = 105; continue _fun0044 }
 96:
                var1 = true;
                _closure2_slot0 = var1;
 105:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var _closure1_slot62 = var1;
    var1 = function handleThreadMembersUpdate(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
            var2 = arg1;
            var4 = var2.addedMembers;
            var2 = false;
            var _closure2_slot0 = var2;
            var2 = null;
            if(!(var2 != var4)) { _fun0045_ip = 38; continue _fun0045 }
 23:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.member;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0046_ip = 43; continue _fun0046 }
 18:
                    var6 = _closure1_slot27;
                    var4 = var2.member;
                    var5 = var4.user;
                    var4 = undefined;
                    var1 = var6.bind(var4)(var5);
 43:
                    if(!var1) { _fun0046_ip = 55; continue _fun0046 }
 46:
                    var1 = true;
                    _closure2_slot0 = var1;
 55:
                    var1 = var2.presence;
                    var1 = var3 != var1;
                    if(!var1) { _fun0046_ip = 93; continue _fun0046 }
 68:
                    var4 = _closure1_slot27;
                    var2 = var2.presence;
                    var3 = var2.user;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
 93:
                    if(!var1) { _fun0046_ip = 105; continue _fun0046 }
 96:
                    var1 = true;
                    _closure2_slot0 = var1;
 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 38:
            var1 = _closure2_slot0;
            return var1;
        }
    };
    var _closure1_slot63 = var1;
    var1 = function handleGuildCreate(arg1) {
        var2 = arg1;
        var2 = var2.guild;
        var _closure2_slot0 = var2;
        var3 = var2.members;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
                var1 = arg1;
                var2 = var1.user;
                var5 = var2.id;
                var9 = var2.username;
                var8 = var2.avatar;
                var7 = var2.discriminator;
                var2 = var2.bot;
                var4 = var1.avatar;
                var6 = _closure1_slot11;
                var3 = var6.getId;
                var3 = var3.bind(var6)();
                if(!(var5 !== var3)) { _fun0047_ip = 99; continue _fun0047 }
 63:
                var6 = _closure1_slot27;
                var3 = {};
                var3['id'] = var5;
                var3['username'] = var9;
                var3['avatar'] = var8;
                var3['discriminator'] = var7;
                var3['bot'] = var2;
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
 99:
                var3 = _closure1_slot23;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var5, var2, var4);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot64 = var1;
    var1 = function handleRelationshipAdd(arg1) {
        var3 = _closure1_slot27;
        var1 = arg1;
        var1 = var1.relationship;
        var2 = var1.user;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot65 = var1;
    var1 = function handleGameRelationshipAdd(arg1) {
        var3 = _closure1_slot27;
        var1 = arg1;
        var1 = var1.gameRelationship;
        var2 = var1.user;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot66 = var1;
    var1 = function handleLoadRelationships(arg1) {
        var1 = arg1;
        var4 = var1.relationships;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot27;
                var1 = arg2;
                var3 = var1.user;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                if(var1) { _fun0048_ip = 31; continue _fun0048 }
 28:
                var1 = var2;
 31:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot67 = var1;
    var1 = function handleFriendSuggestionCreate(arg1) {
        var3 = _closure1_slot27;
        var1 = arg1;
        var1 = var1.suggestion;
        var2 = var1.suggested_user;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot68 = var1;
    var1 = function handleLoadFriendSuggestions(arg1) {
        var1 = arg1;
        var4 = var1.suggestions;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot27;
                var1 = arg2;
                var3 = var1.suggested_user;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                if(var1) { _fun0049_ip = 32; continue _fun0049 }
 29:
                var1 = var2;
 32:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot69 = var1;
    var1 = function handleAuditLogFetched(arg1) {
        var1 = arg1;
        var3 = var1.users;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                var5 = arg1;
                var3 = _closure1_slot16;
                var2 = var5.id;
                var3 = var3[var2];
                var2 = null;
                if(!(var2 == var3)) { _fun0050_ip = 65; continue _fun0050 }
 25:
                var3 = _closure1_slot16;
                var2 = var5.id;
                var1 = _closure1_slot10;
                var4 = var1.prototype;
                var4 = Object.create(var4, {constructor: {value: var1}});
                var7 = var4;
                var6 = var5;
                var1 = new var7[var1](var6, var5);
                var1 = var1 instanceof Object ? var1 : var4;
                var3[var2] = var1;
 65:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot70 = var1;
    var1 = function handleGiftCodeResolve(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
            var1 = arg1;
            var2 = var1.giftCode;
            var3 = var2.user;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0051_ip = 42; continue _fun0051 }
 23:
            var4 = _closure1_slot27;
            var3 = var2.user;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 42:
            return var1;
        }
    };
    var _closure1_slot71 = var1;
    var1 = function handleGuildPremiumSubscriptionsFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.appliedBoosts;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
                var1 = arg1;
                var3 = var1.user;
                var1 = null;
                if(!(var1 != var3)) { _fun0052_ip = 28; continue _fun0052 }
 14:
                var2 = _closure1_slot27;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
 28:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot72 = var1;
    var1 = function handleGuildJoinRequest(arg1) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
            var1 = arg1;
            var1 = var1.request;
            var6 = var1.user;
            var5 = var1.actioned_by_user;
            var2 = null;
            var1 = var2 != var6;
            var3 = false;
            if(!var1) { _fun0053_ip = 45; continue _fun0053 }
 31:
            var4 = _closure1_slot27;
            var1 = undefined;
            var3 = var4.bind(var1)(var6);
 45:
            var1 = var3;
            if(!(var2 != var5)) { _fun0053_ip = 75; continue _fun0053 }
 52:
            var2 = var3;
            if(var3) { _fun0053_ip = 72; continue _fun0053 }
 58:
            var4 = _closure1_slot27;
            var3 = undefined;
            var2 = var4.bind(var3)(var5);
 72:
            var1 = var2;
 75:
            return var1;
        }
    };
    var _closure1_slot73 = var1;
    var1 = function handleInitialFamilyCenterLoad(arg1) {
        var1 = arg1;
        var6 = var1.users;
        var1 = var1.familyCenterTeenActivity;
        var4 = new Array(0);
        var5 = 0;
        var7 = var4;
        var5 = arraySpread(var7, var6, var5);
        var6 = var1.users;
        var7 = var4;
        var1 = arraySpread(var7, var6, var5);
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot27;
                var3 = undefined;
                var1 = arg2;
                var1 = var4.bind(var3)(var1);
                if(var1) { _fun0054_ip = 26; continue _fun0054 }
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
    var _closure1_slot74 = var1;
    var1 = function handleLinkedUserFetch(arg1) {
        var1 = arg1;
        var4 = var1.users;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot27;
                var3 = undefined;
                var1 = arg2;
                var1 = var4.bind(var3)(var1);
                if(var1) { _fun0055_ip = 26; continue _fun0055 }
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
    var _closure1_slot75 = var1;
    var1 = function handleRequestLinkSuccess(arg1) {
        var1 = arg1;
        var4 = var1.users;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot27;
                var3 = undefined;
                var1 = arg2;
                var1 = var4.bind(var3)(var1);
                if(var1) { _fun0056_ip = 26; continue _fun0056 }
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
    var _closure1_slot76 = var1;
    var1 = function handleTeenActivityFetch(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
            var1 = arg1;
            var1 = var1.familyCenterTeenActivity;
            var2 = undefined;
            if(!(var2 === var1)) { _fun0057_ip = 17; continue _fun0057 }
 15:
            return var2;
 17:
            var4 = var1.users;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot27;
                    var3 = undefined;
                    var1 = arg2;
                    var1 = var4.bind(var3)(var1);
                    if(var1) { _fun0058_ip = 26; continue _fun0058 }
 23:
                    var1 = var2;
 26:
                    return var1;
                }
            };
            var1 = false;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot77 = var1;
    var1 = function handleTeenActivityMoreFetch(arg1) {
        var1 = arg1;
        var1 = var1.familyCenterTeenActivity;
        var4 = var1.users;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot27;
                var3 = undefined;
                var1 = arg2;
                var1 = var4.bind(var3)(var1);
                if(var1) { _fun0059_ip = 26; continue _fun0059 }
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
    var _closure1_slot78 = var1;
    var1 = function handleMemberSafetyGuildMemberSearchSuccess(arg1) {
        var2 = arg1;
        var4 = var2.members;
        var3 = _closure1_slot11;
        var2 = var3.getId;
        var2 = var2.bind(var3)();
        var _closure2_slot0 = var2;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
 0:
                var3 = arg1;
                var2 = arg2;
                var1 = var2.member;
                var1 = var1.user;
                var5 = var1.id;
                var4 = _closure2_slot0;
                var1 = var3;
                if(!(var5 !== var4)) { _fun0060_ip = 70; continue _fun0060 }
 36:
                var5 = _closure1_slot27;
                var2 = var2.member;
                var4 = var2.user;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                if(var2) { _fun0060_ip = 67; continue _fun0060 }
 64:
                var2 = var3;
 67:
                var1 = var2;
 70:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot79 = var1;
    var1 = function handleLoadICYMIHydratedItems(arg1) {
        var1 = arg1;
        var4 = var1.messageItems;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
 0:
                var1 = arg1;
                var3 = var1.message;
                var2 = null;
                if(!(var2 != var3)) { _fun0061_ip = 36; continue _fun0061 }
 14:
                var4 = _closure1_slot30;
                var3 = var1.message;
                var2 = undefined;
                var1 = true;
                var1 = var4.bind(var2)(var3, var1);
 36:
                var1 = undefined;
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot80 = var1;
    var1 = function handleEmbeddedActivityUpdateV2(arg1) {
        var1 = arg1;
        var4 = var1.participants;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
 0:
                var2 = arg1;
                var3 = arg2;
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 19;
                var1 = var5[var1];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.bind(var5)(var3);
                if(!var1) { _fun0062_ip = 59; continue _fun0062 }
 39:
                var4 = _closure1_slot27;
                var3 = var3.member;
                var3 = var3.user;
                var1 = var4.bind(var5)(var3);
 59:
                if(var1) { _fun0062_ip = 65; continue _fun0062 }
 62:
                var1 = var2;
 65:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot81 = var1;
    var1 = function handleInitiateAgeVerification(arg1) {
        _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0063_ip = 116; continue _fun0063 }
 9:
            var5 = _closure1_slot16;
            var6 = _closure1_slot11;
            var4 = var6.getId;
            var4 = var4.bind(var6)();
            var8 = var5[var4];
            var1 = var1 != var8;
            if(!var1) { _fun0063_ip = 114; continue _fun0063 }
 41:
            var5 = _closure1_slot16;
            var6 = _closure1_slot11;
            var4 = var6.getId;
            var4 = var4.bind(var6)();
            var7 = var8.set;
            var9 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 20;
            var6 = var6[var3];
            var3 = undefined;
            var3 = var9.bind(var3)(var6);
            var3 = var3.AgeVerificationStatusUkAndAusOnly;
            var6 = var3.CLIENT_ONLY_PENDING;
            var3 = 'ageVerificationStatus';
            var3 = var7.bind(var8)(var3, var6);
            var5[var4] = var3;
            var1 = true;
 114:
            return var1;
 116:
            var10 = "Cannot destructure 'undefined' or 'null'.";
            var11 = var2;
            var1 = throwTypeError(var11, var10);
            var1 = undefined;
            throw var1;
        }
    };
    var _closure1_slot82 = var1;
    var1 = function handleCloseAgeVerificationModal(arg1) {
        _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
 0:
            var1 = arg1;
            var8 = var1.status;
            var2 = _closure1_slot16;
            var4 = _closure1_slot11;
            var1 = var4.getId;
            var1 = var1.bind(var4)();
            var7 = var2[var1];
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0064_ip = 131; continue _fun0064 }
 42:
            var4 = var7.ageVerificationStatus;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 20;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.AgeVerificationStatusUkAndAusOnly;
            var2 = var2.CLIENT_ONLY_PENDING;
            var2 = var4 === var2;
            if(!var2) { _fun0064_ip = 128; continue _fun0064 }
 89:
            var5 = _closure1_slot16;
            var4 = _closure1_slot11;
            var3 = var4.getId;
            var4 = var3.bind(var4)();
            var6 = var7.set;
            var3 = 'ageVerificationStatus';
            var3 = var6.bind(var7)(var3, var8);
            var5[var4] = var3;
            var2 = true;
 128:
            var1 = var2;
 131:
            return var1;
        }
    };
    var _closure1_slot83 = var1;
    var1 = function handleInteractionModalCreate(arg1) {
        var1 = arg1;
        var4 = var1.resolved;
        var3 = _closure1_slot29;
        var2 = undefined;
        var1 = true;
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var _closure1_slot84 = var1;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var5);
    var5 = 0;
    var6 = var10[var5];
    var1 = undefined;
    var6 = var11.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var8 = 1;
    var6 = var10[var8];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var10[var6];
    var11 = var11.bind(var1)(var6);
    var6 = 9;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var12 = var6.UserFlags;
    var _closure1_slot12 = var12;
    var12 = var6.MessageFlags;
    var _closure1_slot13 = var12;
    var6 = var6.ChannelTypes;
    var _closure1_slot14 = var6;
    var6 = 10;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot15 = var6;
    var6 = {};
    var _closure1_slot16 = var6;
    var _closure1_slot17 = var5;
    var5 = '47835198259242069';
    var _closure1_slot18 = var5;
    var12 = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'primary_guild'];
    var _closure1_slot19 = var12;
    var7 = function(arg1) {
        var4 = function UserStore() {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
 0:
                var5 = this;
                var1 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = {};
                var7 = _closure1_slot31;
                var1['CONNECTION_OPEN'] = var7;
                var7 = _closure1_slot32;
                var1['CONNECTION_OPEN_SUPPLEMENTAL'] = var7;
                var7 = _closure1_slot38;
                var1['UPDATE_CLIENT_PREMIUM_TYPE'] = var7;
                var7 = _closure1_slot34;
                var1['OVERLAY_INITIALIZE'] = var7;
                var7 = function CACHE_LOADED(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleLoadCache;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['CACHE_LOADED'] = var7;
                var7 = _closure1_slot35;
                var1['USER_UPDATE'] = var7;
                var7 = _closure1_slot36;
                var1['USER_PROFILE_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot37;
                var1['CURRENT_USER_UPDATE'] = var7;
                var7 = _closure1_slot52;
                var1['PRESENCE_UPDATES'] = var7;
                var7 = _closure1_slot42;
                var1['SEARCH_MESSAGES_SUCCESS'] = var7;
                var1['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var7;
                var7 = _closure1_slot39;
                var1['LOAD_MESSAGES_SUCCESS'] = var7;
                var1['LOAD_MESSAGES_AROUND_SUCCESS'] = var7;
                var1['LOAD_RECENT_MENTIONS_SUCCESS'] = var7;
                var7 = _closure1_slot40;
                var1['LOAD_PINNED_MESSAGES_SUCCESS'] = var7;
                var7 = _closure1_slot41;
                var1['THREAD_LIST_SYNC'] = var7;
                var7 = _closure1_slot49;
                var1['MESSAGE_CREATE'] = var7;
                var1['MESSAGE_UPDATE'] = var7;
                var7 = _closure1_slot53;
                var1['GUILD_SETTINGS_LOADED_BANS'] = var7;
                var7 = _closure1_slot54;
                var1['GUILD_SETTINGS_LOADED_BANS_BATCH'] = var7;
                var7 = _closure1_slot64;
                var1['GUILD_CREATE'] = var7;
                var7 = _closure1_slot55;
                var1['GUILD_BAN_ADD'] = var7;
                var1['GUILD_BAN_REMOVE'] = var7;
                var7 = _closure1_slot56;
                var1['CHANNEL_RECIPIENT_ADD'] = var7;
                var1['CHANNEL_RECIPIENT_REMOVE'] = var7;
                var7 = _closure1_slot73;
                var1['GUILD_JOIN_REQUEST_CREATE'] = var7;
                var1['GUILD_JOIN_REQUEST_UPDATE'] = var7;
                var7 = _closure1_slot57;
                var1['GUILD_MEMBER_ADD'] = var7;
                var1['GUILD_MEMBER_UPDATE'] = var7;
                var7 = _closure1_slot59;
                var1['GUILD_MEMBERS_CHUNK_BATCH'] = var7;
                var7 = _closure1_slot58;
                var1['GUILD_MEMBER_LIST_UPDATE'] = var7;
                var7 = _closure1_slot62;
                var1['THREAD_MEMBER_LIST_UPDATE'] = var7;
                var7 = _closure1_slot63;
                var1['THREAD_MEMBERS_UPDATE'] = var7;
                var7 = _closure1_slot50;
                var1['CHANNEL_CREATE'] = var7;
                var7 = _closure1_slot51;
                var1['CHANNEL_UPDATES'] = var7;
                var7 = _closure1_slot65;
                var1['RELATIONSHIP_ADD'] = var7;
                var7 = _closure1_slot66;
                var1['GAME_RELATIONSHIP_ADD'] = var7;
                var7 = _closure1_slot67;
                var1['LOAD_RELATIONSHIPS_SUCCESS'] = var7;
                var7 = _closure1_slot68;
                var1['FRIEND_SUGGESTION_CREATE'] = var7;
                var7 = _closure1_slot69;
                var1['LOAD_FRIEND_SUGGESTIONS_SUCCESS'] = var7;
                var7 = _closure1_slot70;
                var1['AUDIT_LOG_FETCH_SUCCESS'] = var7;
                var1['AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS'] = var7;
                var7 = _closure1_slot71;
                var1['GIFT_CODE_RESOLVE_SUCCESS'] = var7;
                var7 = _closure1_slot72;
                var1['GUILD_APPLIED_BOOSTS_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot43;
                var1['LOAD_THREADS_SUCCESS'] = var7;
                var1['LOAD_ARCHIVED_THREADS_SUCCESS'] = var7;
                var7 = _closure1_slot44;
                var1['LOAD_FORUM_POSTS'] = var7;
                var7 = _closure1_slot46;
                var1['GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot47;
                var1['LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS'] = var7;
                var7 = _closure1_slot48;
                var1['NOTIFICATION_CENTER_ITEM_CREATE'] = var7;
                var7 = _closure1_slot45;
                var1['LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS'] = var7;
                var7 = _closure1_slot60;
                var1['PASSIVE_UPDATE_V2'] = var7;
                var7 = _closure1_slot61;
                var1['LOCAL_MESSAGES_LOADED'] = var7;
                var7 = _closure1_slot74;
                var1['FAMILY_CENTER_INITIAL_LOAD'] = var7;
                var7 = _closure1_slot75;
                var1['FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot77;
                var1['FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot78;
                var1['FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot76;
                var1['FAMILY_CENTER_REQUEST_LINK_SUCCESS'] = var7;
                var7 = _closure1_slot79;
                var1['MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS'] = var7;
                var7 = _closure1_slot80;
                var1['LOAD_ICYMI_HYDRATED'] = var7;
                var7 = _closure1_slot81;
                var1['EMBEDDED_ACTIVITY_UPDATE_V2'] = var7;
                var7 = _closure1_slot82;
                var1['INITIATE_AGE_VERIFICATION'] = var7;
                var7 = _closure1_slot83;
                var1['CLOSE_AGE_VERIFICATION_MODAL'] = var7;
                var7 = _closure1_slot84;
                var1['INTERACTION_MODAL_CREATE'] = var7;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot20;
                var1 = var1.bind(var4)();
                if(var1) { _fun0065_ip = 619; continue _fun0065 }
 606:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0065_ip = 653; continue _fun0065;
 619:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 653:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function initialize() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot11;
            var1 = _closure1_slot9;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'takeSnapshot';
        var5['key'] = var7;
        var7 = function takeSnapshot() {
            var2 = this;
            var1 = var2.getCurrentUser;
            var3 = var1.bind(var2)();
            var1 = {};
            var2 = _closure2_slot0;
            var2 = var2.LATEST_SNAPSHOT_VERSION;
            var1['version'] = var2;
            var2 = {};
            var5 = new Array(1);
            var5[0] = var3;
            var4 = var5.filter;
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 21;
            var6 = var6[var3];
            var3 = undefined;
            var3 = var7.bind(var3)(var6);
            var3 = var3.isNotNullish;
            var3 = var4.bind(var5)(var3);
            var2['users'] = var3;
            var1['data'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleLoadCache';
        var5['key'] = var7;
        var7 = function handleLoadCache(arg1) {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var3 = var4.readSnapshot;
                var2 = _closure2_slot0;
                var2 = var2.LATEST_SNAPSHOT_VERSION;
                var2 = var3.bind(var4)(var2);
                var7 = null;
                if(!(var7 != var2)) { _fun0066_ip = 130; continue _fun0066 }
 38:
                var3 = _closure1_slot21;
                var2 = var2.users;
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0066_ip = 130; continue _fun0066 }
 70:
                var12 = var3.value;
                var10 = _closure1_slot16;
                var9 = var12.id;
                var2 = _closure1_slot10;
                var11 = var2.prototype;
                var11 = Object.create(var11, {constructor: {value: var2}});
                var14 = var11;
                var13 = var12;
                var2 = new var14[var2](var13, var12);
                var2 = var2 instanceof Object ? var2 : var11;
                var10[var9] = var2;
                var9 = var4.bind(var5)();
                var2 = var9.done;
                var3 = var9;
                if(!var2) { _fun0066_ip = 70; continue _fun0066 }
 130:
                var2 = var1.users;
                if(!(var7 != var2)) { _fun0066_ip = 260; continue _fun0066 }
 140:
                var3 = _closure1_slot21;
                var2 = var1.users;
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0066_ip = 260; continue _fun0066 }
 172:
                var12 = var3.value;
                var9 = var12.id;
                var2 = _closure1_slot16;
                var2 = var9 in var2;
                if(!var2) { _fun0066_ip = 202; continue _fun0066 }
 193:
                var9 = _closure1_slot33;
                var2 = var9.bind(var5)(var12);
 202:
                if(var2) { _fun0066_ip = 245; continue _fun0066 }
 205:
                var10 = _closure1_slot16;
                var9 = var12.id;
                var2 = _closure1_slot10;
                var11 = var2.prototype;
                var11 = Object.create(var11, {constructor: {value: var2}});
                var14 = var11;
                var13 = var12;
                var2 = new var14[var2](var13, var12);
                var2 = var2 instanceof Object ? var2 : var11;
                var10[var9] = var2;
 245:
                var9 = var4.bind(var5)();
                var2 = var9.done;
                var3 = var9;
                if(!var2) { _fun0066_ip = 172; continue _fun0066 }
 260:
                var2 = var1.privateChannels;
                var6 = new Array(2);
                var6[0] = var2;
                var1 = var1.initialGuildChannels;
                var6[1] = var1;
                var1 = var6.length;
                var5 = 0;
                var2 = var5 < var1;
                var1 = undefined;
                var3 = undefined;
                if(!var2) { _fun0066_ip = 390; continue _fun0066 }
 305:
                var9 = _closure1_slot21;
                var2 = var6[var5];
                var10 = var9.bind(var1)(var2);
                var9 = var10.bind(var1)();
                var2 = var9.done;
                if(var2) { _fun0066_ip = 378; continue _fun0066 }
 330:
                var2 = var9.value;
                var11 = var2.rawRecipients;
                if(!(var7 != var11)) { _fun0066_ip = 360; continue _fun0066 }
 345:
                var12 = var11.forEach;
                var2 = function(arg1) {
                    var4 = _closure1_slot27;
                    var3 = undefined;
                    var2 = arg1;
                    var1 = false;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2 = var12.bind(var11)(var2);
 360:
                var12 = var10.bind(var1)();
                var2 = var12.done;
                var9 = var12;
                var3 = var11;
                if(!var2) { _fun0066_ip = 330; continue _fun0066 }
 378:
                var5 = var5 + 1;
                var2 = var6.length;
                if(var5 < var2) { _fun0066_ip = 305; continue _fun0066 }
 390:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getUserStoreVersion';
        var5['key'] = var7;
        var7 = function getUserStoreVersion() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUser';
        var5['key'] = var7;
        var7 = function getUser(arg1) {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0067_ip = 13; continue _fun0067 }
 9:
                var1 = undefined;
                return var1;
 13:
                var1 = _closure1_slot16;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getUsers';
        var5['key'] = var7;
        var7 = function getUsers() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'forEach';
        var5['key'] = var7;
        var7 = function forEach(arg1) {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
 0:
                var10 = arg1;
                var8 = _closure1_slot16;
                var1 = undefined;
                var3 = false;
                for(var4 in var8)
 22:
                {
 31:
                    var11 = var4;
                    var2 = _closure1_slot16;
                    var2 = var2[var11];
                    var2 = var10.bind(var1)(var2);
                    if(var3 !== var2) { _fun0068_ip = 22; continue _fun0068 }
                }
 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'findByTag';
        var5['key'] = var7;
        var7 = function findByTag(arg1, arg2) {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
 0:
                var11 = arg1;
                var10 = arg2;
                var8 = _closure1_slot16;
                var3 = null;
                for(var4 in var8)
 23:
                {
 32:
                    var2 = var4;
                    var1 = _closure1_slot16;
                    var1 = var1[var2];
                    if(!(var3 != var10)) { _fun0069_ip = 66; continue _fun0069 }
 47:
                    var2 = var1.username;
                    if(!(var2 === var11)) { _fun0069_ip = 66; continue _fun0069 }
 56:
                    var2 = var1.discriminator;
                    if(!(var2 !== var10)) { _fun0069_ip = 94; continue _fun0069 }
 66:
                    if(var3 != var10) { _fun0069_ip = 23; continue _fun0069 }
 70:
                    var2 = var1.username;
                    if(var2 !== var11) { _fun0069_ip = 23; continue _fun0069 }
 79:
                    var2 = var1.hasUniqueUsername;
                    var2 = var2.bind(var1)();
                    if(!var2) { _fun0069_ip = 23; continue _fun0069 }
 92:
                    return var1;
 94:
                    return var1;
                }
 96:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'filter';
        var5['key'] = var7;
        var7 = function filter(arg1) {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
 0:
                var10 = arg1;
                var2 = arguments[1];
                var9 = undefined;
                if(!(var2 === var9)) { _fun0070_ip = 14; continue _fun0070 }
 12:
                var2 = false;
 14:
                var1 = new Array(0);
                var7 = _closure1_slot16;
                for(var3 in var7)
 33:
                {
 42:
                    var12 = var3;
                    var11 = _closure1_slot16;
                    var12 = var11[var12];
                    var11 = var10.bind(var9)(var12);
                    if(!var11) { _fun0070_ip = 33; continue _fun0070 }
 61:
                    var11 = var1.push;
                    var11 = var11.bind(var1)(var12);
                    _fun0070_ip = 33; continue _fun0070;
                }
 73:
                if(!var2) { _fun0070_ip = 94; continue _fun0070 }
 76:
                var3 = var1.sort;
                var2 = function(arg1, arg2) {
                    _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
 0:
                        var3 = arg1;
                        var2 = arg2;
                        var4 = var3.username;
                        var1 = var2.username;
                        var4 = var4 > var1;
                        var1 = 1;
                        if(var4) { _fun0071_ip = 54; continue _fun0071 }
 26:
                        var3 = var3.username;
                        var2 = var2.username;
                        var3 = var3 < var2;
                        var2 = 0;
                        if(!var3) { _fun0071_ip = 51; continue _fun0071 }
 45:
                        var2 = -1;
 51:
                        var1 = var2;
 54:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
 94:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getCurrentUser';
        var5['key'] = var7;
        var6 = function getCurrentUser() {
            var2 = _closure1_slot16;
            var3 = _closure1_slot11;
            var1 = var3.getId;
            var1 = var1.bind(var3)();
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var7.bind(var1)(var11);
    var11 = 'UserStore';
    var7['displayName'] = var11;
    var7['LATEST_SNAPSHOT_VERSION'] = var8;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var16 = var8;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var8;
    var8 = 22;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'stores/UserStore.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['users'] = var6;
    var3['ASSISTANT_WUMPUS_VOICE_USER'] = var5;
    var3['transformUser'] = var4;
    var3['mergeUser'] = var2;
    return var1;
})();