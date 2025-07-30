// app/records/UserRecord.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.LOCAL_BOT_ID;
    var _closure1_slot9 = var8;
    var8 = var5.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot10 = var8;
    var8 = var5.PREMIUM_TYPE_NONE;
    var _closure1_slot11 = var8;
    var5 = var5.UserFlags;
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.SKU_ID_PURCHASED_FLAGS;
    var _closure1_slot13 = var8;
    var8 = var5.PremiumTypes;
    var _closure1_slot14 = var8;
    var5 = var5.PurchasedFlags;
    var _closure1_slot15 = var5;
    var2 = function(arg1) {
        var4 = function UserRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = arg1;
                var4 = this;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var12 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 67; continue _fun0002 }
 54:
                var1 = var12.apply;
                var1 = var1.bind(var12)(var4, var3);
                _fun0002_ip = 105; continue _fun0002;
 67:
                var5 = global;
                var11 = var5.Reflect;
                var10 = var11.construct;
                var5 = _closure1_slot7;
                var5 = var5.bind(var3)(var4);
                var8 = var5.constructor;
                var5 = new Array(0);
                var1 = var10.bind(var11)(var12, var5, var8);
 105:
                var1 = var2.bind(var3)(var4, var1);
                var _closure3_slot0 = var1;
                var2 = function() {
                    var1 = false;
                    return var1;
                };
                var1['hasFlag'] = var2;
                var2 = function() {
                    var1 = false;
                    return var1;
                };
                var1['isStaff'] = var2;
                var2 = function() {
                    var1 = false;
                    return var1;
                };
                var1['isStaffPersonal'] = var2;
                var2 = function() {
                    var1 = false;
                    return var1;
                };
                var1['hasAnyStaffLevel'] = var2;
                var5 = var6.premium_type;
                var2 = null;
                if(!(var2 == var5)) { _fun0002_ip = 177; continue _fun0002 }
 171:
                var5 = var6.premiumType;
 177:
                var4 = var6.id;
                var1['id'] = var4;
                var8 = var6.username;
                var10 = var2 != var8;
                var4 = '';
                if(!var10) { _fun0002_ip = 207; continue _fun0002 }
 204:
                var4 = var8;
 207:
                var1['username'] = var4;
                var4 = var6.discriminator;
                if(!(var2 == var4)) { _fun0002_ip = 227; continue _fun0002 }
 223:
                var4 = _closure1_slot10;
 227:
                var1['discriminator'] = var4;
                var8 = var6.avatar;
                var10 = var2 != var8;
                var4 = null;
                if(!var10) { _fun0002_ip = 251; continue _fun0002 }
 248:
                var4 = var8;
 251:
                var1['avatar'] = var4;
                var4 = var6.avatar_decoration_data;
                if(!(var2 == var4)) { _fun0002_ip = 273; continue _fun0002 }
 267:
                var4 = var6.avatarDecorationData;
 273:
                var1['avatarDecoration'] = var4;
                var8 = var6.email;
                var10 = var2 != var8;
                var4 = null;
                if(!var10) { _fun0002_ip = 297; continue _fun0002 }
 294:
                var4 = var8;
 297:
                var1['email'] = var4;
                var8 = var6.verified;
                var4 = var2 != var8;
                if(!var4) { _fun0002_ip = 319; continue _fun0002 }
 316:
                var4 = var8;
 319:
                var1['verified'] = var4;
                var8 = var6.bot;
                var4 = var2 != var8;
                if(!var4) { _fun0002_ip = 341; continue _fun0002 }
 338:
                var4 = var8;
 341:
                var1['bot'] = var4;
                var8 = var6.system;
                var4 = var2 != var8;
                if(!var4) { _fun0002_ip = 363; continue _fun0002 }
 360:
                var4 = var8;
 363:
                var1['system'] = var4;
                var8 = var6.mfa_enabled;
                if(!(var2 == var8)) { _fun0002_ip = 385; continue _fun0002 }
 379:
                var8 = var6.mfaEnabled;
 385:
                var4 = var2 != var8;
                if(!var4) { _fun0002_ip = 395; continue _fun0002 }
 392:
                var4 = var8;
 395:
                var1['mfaEnabled'] = var4;
                var8 = var6.mobile;
                var4 = var2 != var8;
                if(!var4) { _fun0002_ip = 417; continue _fun0002 }
 414:
                var4 = var8;
 417:
                var1['mobile'] = var4;
                var8 = var6.desktop;
                var4 = var2 != var8;
                if(!var4) { _fun0002_ip = 439; continue _fun0002 }
 436:
                var4 = var8;
 439:
                var1['desktop'] = var4;
                var8 = _closure1_slot11;
                var4 = null;
                if(!(var5 !== var8)) { _fun0002_ip = 458; continue _fun0002 }
 455:
                var4 = var5;
 458:
                var1['premiumType'] = var4;
                var8 = var6.flags;
                var10 = var2 != var8;
                var4 = 0;
                var5 = 0;
                if(!var10) { _fun0002_ip = 483; continue _fun0002 }
 480:
                var5 = var8;
 483:
                var1['flags'] = var5;
                var8 = var6.public_flags;
                if(!(var2 == var8)) { _fun0002_ip = 505; continue _fun0002 }
 499:
                var8 = var6.publicFlags;
 505:
                var10 = var2 != var8;
                var5 = 0;
                if(!var10) { _fun0002_ip = 517; continue _fun0002 }
 514:
                var5 = var8;
 517:
                var1['publicFlags'] = var5;
                var8 = var6.purchased_flags;
                if(!(var2 == var8)) { _fun0002_ip = 539; continue _fun0002 }
 533:
                var8 = var6.purchasedFlags;
 539:
                var10 = var2 != var8;
                var5 = 0;
                if(!var10) { _fun0002_ip = 551; continue _fun0002 }
 548:
                var5 = var8;
 551:
                var1['purchasedFlags'] = var5;
                var8 = var6.premium_usage_flags;
                if(!(var2 == var8)) { _fun0002_ip = 573; continue _fun0002 }
 567:
                var8 = var6.premiumUsageFlags;
 573:
                var10 = var2 != var8;
                var5 = 0;
                if(!var10) { _fun0002_ip = 585; continue _fun0002 }
 582:
                var5 = var8;
 585:
                var1['premiumUsageFlags'] = var5;
                var8 = var6.phone;
                var10 = var2 != var8;
                var5 = null;
                if(!var10) { _fun0002_ip = 609; continue _fun0002 }
 606:
                var5 = var8;
 609:
                var1['phone'] = var5;
                var5 = var6.nsfw_allowed;
                if(!(var2 == var5)) { _fun0002_ip = 631; continue _fun0002 }
 625:
                var5 = var6.nsfwAllowed;
 631:
                var1['nsfwAllowed'] = var5;
                var5 = var6.age_verification_status;
                if(!(var2 == var5)) { _fun0002_ip = 653; continue _fun0002 }
 647:
                var5 = var6.ageVerificationStatus;
 653:
                var1['ageVerificationStatus'] = var5;
                var5 = var6.guildMemberAvatars;
                if(!(var2 == var5)) { _fun0002_ip = 671; continue _fun0002 }
 669:
                var5 = {};
 671:
                var1['guildMemberAvatars'] = var5;
                var8 = var6.has_bounced_email;
                if(!(var2 == var8)) { _fun0002_ip = 695; continue _fun0002 }
 689:
                var8 = var6.hasBouncedEmail;
 695:
                var5 = var2 != var8;
                if(!var5) { _fun0002_ip = 705; continue _fun0002 }
 702:
                var5 = var8;
 705:
                var1['hasBouncedEmail'] = var5;
                var8 = var6.personal_connection_id;
                if(!(var2 == var8)) { _fun0002_ip = 727; continue _fun0002 }
 721:
                var8 = var6.personalConnectionId;
 727:
                var10 = var2 != var8;
                var5 = null;
                if(!var10) { _fun0002_ip = 739; continue _fun0002 }
 736:
                var5 = var8;
 739:
                var1['personalConnectionId'] = var5;
                var5 = var6.global_name;
                if(!(var2 == var5)) { _fun0002_ip = 761; continue _fun0002 }
 755:
                var5 = var6.globalName;
 761:
                var1['globalName'] = var5;
                var5 = var6.banner;
                var1['banner'] = var5;
                var8 = _closure1_slot0;
                var10 = _closure1_slot3;
                var5 = 8;
                var5 = var10[var5];
                var10 = var8.bind(var3)(var5);
                var8 = var10.ensureUserPrimaryGuild;
                var11 = var6.primary_guild;
                if(!(var2 == var11)) { _fun0002_ip = 821; continue _fun0002 }
 815:
                var11 = var6.primaryGuild;
 821:
                var12 = var2 != var11;
                var5 = null;
                if(!var12) { _fun0002_ip = 833; continue _fun0002 }
 830:
                var5 = var11;
 833:
                var5 = var8.bind(var10)(var5);
                var1['primaryGuild'] = var5;
                var5 = var6.collectibles;
                var1['collectibles'] = var5;
                var5 = var6.displayNameStyles;
                if(!(var2 == var5)) { _fun0002_ip = 903; continue _fun0002 }
 866:
                var8 = _closure1_slot0;
                var10 = _closure1_slot3;
                var7 = 9;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.parseServerDisplayNameStyles;
                var6 = var6.display_name_styles;
                var5 = var7.bind(var8)(var6);
 903:
                var1['displayNameStyles'] = var5;
                var5 = global;
                var7 = var5.Object;
                var6 = var7.defineProperties;
                var5 = {};
                var8 = {'writable': false, 'configurable': false, 'enumerable': false};
                var10 = function value(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var1 = 1073741824;
                        if(!(!(var2 <= var1))) { _fun0003_ip = 153; continue _fun0003 }
 16:
                        var9 = _closure1_slot2;
                        var10 = _closure1_slot3;
                        var1 = 10;
                        var3 = var10[var1];
                        var6 = undefined;
                        var7 = var9.bind(var6)(var3);
                        var5 = var7.deserialize;
                        var3 = _closure3_slot0;
                        var4 = var3.flags;
                        var8 = var5.bind(var7)(var4);
                        var4 = var10[var1];
                        var5 = var9.bind(var6)(var4);
                        var4 = var5.deserialize;
                        var3 = var3.publicFlags;
                        var7 = var4.bind(var5)(var3);
                        var3 = var10[var1];
                        var4 = var9.bind(var6)(var3);
                        var3 = var4.deserialize;
                        var5 = var3.bind(var4)(var2);
                        var3 = var10[var1];
                        var4 = var9.bind(var6)(var3);
                        var3 = var4.has;
                        var1 = var10[var1];
                        var6 = var9.bind(var6)(var1);
                        var1 = var6.combine;
                        var1 = var1.bind(var6)(var8, var7);
                        var1 = var3.bind(var4)(var1, var5);
                        return var1;
 153:
                        var1 = _closure3_slot0;
                        var3 = var1.flags;
                        var1 = var1.publicFlags;
                        var1 = var3 | var1;
                        var1 = var1 & var2;
                        var1 = var1 === var2;
                        return var1;
                    }
                };
                var8['value'] = var10;
                var5['hasFlag'] = var8;
                var8 = {'writable': false, 'configurable': false, 'enumerable': false};
                var10 = function value() {
                    var3 = _closure3_slot0;
                    var2 = var3.hasFlag;
                    var1 = _closure1_slot12;
                    var1 = var1.STAFF;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8['value'] = var10;
                var5['isStaff'] = var8;
                var8 = {'writable': false, 'configurable': false, 'enumerable': false};
                var10 = function value() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var4 = _closure3_slot0;
                        var3 = var4.hasFlag;
                        var1 = _closure1_slot12;
                        var1 = var1.STAFF;
                        var1 = var3.bind(var4)(var1);
                        var1 = !var1;
                        if(!var1) { _fun0004_ip = 53; continue _fun0004 }
 37:
                        var2 = _closure3_slot0;
                        var3 = var2.personalConnectionId;
                        var2 = null;
                        var1 = var2 != var3;
 53:
                        return var1;
                    }
                };
                var8['value'] = var10;
                var5['isStaffPersonal'] = var8;
                var8 = {'writable': false, 'configurable': false, 'enumerable': false};
                var9 = function value() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var5 = _closure3_slot0;
                        var4 = var5.hasFlag;
                        var1 = _closure1_slot12;
                        var1 = var1.STAFF;
                        var1 = var4.bind(var5)(var1);
                        if(var1) { _fun0005_ip = 59; continue _fun0005 }
 34:
                        var6 = _closure3_slot0;
                        var5 = var6.hasFlag;
                        var4 = _closure1_slot12;
                        var4 = var4.COLLABORATOR;
                        var1 = var5.bind(var6)(var4);
 59:
                        if(var1) { _fun0005_ip = 87; continue _fun0005 }
 62:
                        var4 = _closure3_slot0;
                        var3 = var4.hasFlag;
                        var2 = _closure1_slot12;
                        var2 = var2.RESTRICTED_COLLABORATOR;
                        var1 = var3.bind(var4)(var2);
 87:
                        return var1;
                    }
                };
                var8['value'] = var9;
                var5['hasAnyStaffLevel'] = var8;
                var5 = var6.bind(var7)(var1, var5);
                var5 = var1.globalName;
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0002_ip = 1047; continue _fun0002 }
 1042:
                var3 = var5.length;
 1047:
                if(!(var4 === var3)) { _fun0002_ip = 1057; continue _fun0002 }
 1051:
                var1['globalName'] = var2;
 1057:
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
        var1 = 'createdAt';
        var5['key'] = var1;
        var1 = function get() {
            var1 = global;
            var3 = var1.Date;
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.extractTimestamp;
            var1 = this;
            var1 = var1.id;
            var5 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(26);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasVerifiedEmailOrPhone';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var3 = var2.verified;
                var1 = true;
                var1 = var1 === var3;
                if(var1) { _fun0006_ip = 30; continue _fun0006 }
 18:
                var3 = var2.phone;
                var2 = null;
                var1 = var2 != var3;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getAvatarURL';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var9 = arg1;
                var6 = arguments[2];
                var5 = arguments[3];
                var7 = this;
                var4 = undefined;
                if(!(var6 === var4)) { _fun0007_ip = 20; continue _fun0007 }
 18:
                var6 = false;
 20:
                if(!(var5 === var4)) { _fun0007_ip = 53; continue _fun0007 }
 24:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 12;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var5 = var1.SUPPORTS_WEBP;
 53:
                var10 = null;
                var1 = var10 != var9;
                var8 = undefined;
                if(!var1) { _fun0007_ip = 74; continue _fun0007 }
 64:
                var1 = var7.guildMemberAvatars;
                var8 = var1[var9];
 74:
                if(!(var10 != var8)) { _fun0007_ip = 82; continue _fun0007 }
 78:
                if(!(var10 == var9)) { _fun0007_ip = 134; continue _fun0007 }
 82:
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 12;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.getUserAvatarURL;
                var13 = arg2;
                var16 = var3;
                var15 = var7;
                var14 = var6;
                var12 = null;
                var11 = var5;
                var1 = var16[var2](var15, var14, var13, var12, var11, var10);
                _fun0007_ip = 198; continue _fun0007;
 134:
                var3 = _closure1_slot1;
                var10 = _closure1_slot3;
                var2 = 12;
                var2 = var10[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.getGuildMemberAvatarURLSimple;
                var2 = {};
                var2['guildId'] = var9;
                var2['avatar'] = var8;
                var7 = var7.id;
                var2['userId'] = var7;
                var2['canAnimate'] = var6;
                var2['canWebP'] = var5;
                var1 = var3.bind(var4)(var2);
 198:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'addGuildAvatarHash';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = arg1;
                var2 = arg2;
                var1 = this;
                var4 = var1.guildMemberAvatars;
                var4 = var4[var3];
                if(!(var4 !== var2)) { _fun0008_ip = 63; continue _fun0008 }
 23:
                var4 = {};
                var6 = var1.guildMemberAvatars;
                var7 = var4;
                var5 = copyDataProperties(var7, var6);
                var4[var3] = var2;
                var3 = var1.merge;
                var2 = {};
                var2['guildMemberAvatars'] = var4;
                var2 = var3.bind(var1)(var2);
                return var2;
 63:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'removeGuildAvatarHash';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.guildMemberAvatars;
                var4 = var2[var3];
                var2 = undefined;
                if(!(var2 !== var4)) { _fun0009_ip = 62; continue _fun0009 }
 22:
                var4 = {};
                var6 = var1.guildMemberAvatars;
                var7 = var4;
                var5 = copyDataProperties(var7, var6);
                var4[var3] = var2;
                var3 = var1.merge;
                var2 = {};
                var2['guildMemberAvatars'] = var4;
                var2 = var3.bind(var1)(var2);
                return var2;
 62:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAvatarSource';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var6 = arg1;
                var4 = arguments[1];
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var6;
                var5 = undefined;
                if(!(var4 === var5)) { _fun0010_ip = 27; continue _fun0010 }
 25:
                var4 = false;
 27:
                var3 = arguments[2];
                var _closure3_slot2 = var3;
                var _closure3_slot3 = var5;
                var3 = null;
                if(!(var3 != var6)) { _fun0010_ip = 62; continue _fun0010 }
 44:
                var2 = var2.guildMemberAvatars;
                var2 = var2[var6];
                _closure3_slot3 = var2;
                if(!(var3 == var2)) { _fun0010_ip = 104; continue _fun0010 }
 62:
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 12;
                var2 = var6[var2];
                var6 = var3.bind(var5)(var2);
                var3 = var6.getAnimatableSourceWithFallback;
                var2 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.getUserAvatarSource;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot2;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var1;
                };
                var2 = var3.bind(var6)(var4, var2);
                return var2;
 104:
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 12;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getAnimatableSourceWithFallback;
                var1 = function(arg1) {
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 12;
                    var2 = var6[var1];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var2);
                    var2 = var3.makeSource;
                    var1 = var6[var1];
                    var5 = var5.bind(var4)(var1);
                    var4 = var5.getGuildMemberAvatarURLSimple;
                    var1 = {};
                    var7 = _closure3_slot1;
                    var1['guildId'] = var7;
                    var7 = _closure3_slot3;
                    var1['avatar'] = var7;
                    var7 = _closure3_slot0;
                    var7 = var7.id;
                    var1['userId'] = var7;
                    var7 = arg1;
                    var1['canAnimate'] = var7;
                    var6 = _closure3_slot2;
                    var1['size'] = var6;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isClaimed';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = this;
                var1 = var2.email;
                var3 = null;
                var1 = var3 != var1;
                if(var1) { _fun0011_ip = 28; continue _fun0011 }
 18:
                var2 = var2.phone;
                var1 = var3 != var2;
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isPhoneVerified';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.phone;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'toString';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var2 = this;
                var4 = var2.username;
                var1 = '???';
                var3 = '';
                if(!(var3 !== var4)) { _fun0012_ip = 27; continue _fun0012 }
 22:
                var1 = var2.username;
 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'tag';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var5 = var1.username;
            var3 = var1.discriminator;
            var1 = global;
            var2 = var1.HermesInternal;
            var2 = var2.concat;
            var4 = '';
            var7 = var2.bind(var4)(var3);
            var6 = var7.padStart;
            var3 = 4;
            var2 = '0';
            var3 = var6.bind(var7)(var3, var2);
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '#';
            var1 = var2.bind(var4)(var5, var1, var3);
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'hasPurchasedFlag';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.hasFlag;
            var1 = this;
            var2 = var1.purchasedFlags;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'hasPremiumUsageFlag';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.hasFlag;
            var1 = this;
            var2 = var1.premiumUsageFlags;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'hasHadSKU';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = this;
                var2 = _closure1_slot13;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0013_ip = 37; continue _fun0013 }
 26:
                var2 = var4.hasPurchasedFlag;
                var1 = var2.bind(var4)(var3);
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'hasHadPremium';
        var5['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var5 = arguments[0];
                var7 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0014_ip = 14; continue _fun0014 }
 12:
                var5 = null;
 14:
                var2 = var7.hasPurchasedFlag;
                var3 = _closure1_slot15;
                var1 = var3.PREMIUM_TIER_0;
                var1 = var2.bind(var7)(var1);
                var6 = var7.hasPurchasedFlag;
                var2 = var3.PREMIUM_TIER_1;
                var2 = var6.bind(var7)(var2);
                var6 = var7.hasPurchasedFlag;
                var3 = var3.PREMIUM_TIER_2;
                var3 = var6.bind(var7)(var3);
                var6 = _closure1_slot14;
                var6 = var6.TIER_0;
                if(!(var6 !== var5)) { _fun0014_ip = 135; continue _fun0014 }
 86:
                var6 = _closure1_slot14;
                var6 = var6.TIER_1;
                if(!(var6 !== var5)) { _fun0014_ip = 133; continue _fun0014 }
 100:
                var4 = _closure1_slot14;
                var4 = var4.TIER_2;
                if(!(var4 !== var5)) { _fun0014_ip = 131; continue _fun0014 }
 114:
                var4 = var1;
                if(var4) { _fun0014_ip = 123; continue _fun0014 }
 120:
                var4 = var2;
 123:
                if(var4) { _fun0014_ip = 129; continue _fun0014 }
 126:
                var4 = var3;
 129:
                return var4;
 131:
                return var3;
 133:
                return var2;
 135:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'hadPremiumSubscription';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var4 = arguments[0];
                var3 = this;
                var5 = undefined;
                if(!(var4 === var5)) { _fun0015_ip = 14; continue _fun0015 }
 12:
                var4 = null;
 14:
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 14;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.isPremium;
                var1 = var1.bind(var2)(var3);
                var1 = !var1;
                if(!var1) { _fun0015_ip = 65; continue _fun0015 }
 54:
                var2 = var3.hasHadPremium;
                var1 = var2.bind(var3)(var4);
 65:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'hasFreePremium';
        var5['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var3 = this;
                var1 = var3.isStaff;
                var1 = var1.bind(var3)();
                if(var1) { _fun0016_ip = 40; continue _fun0016 }
 16:
                var4 = var3.hasFlag;
                var2 = _closure1_slot12;
                var2 = var2.PARTNER;
                var1 = var4.bind(var3)(var2);
 40:
                if(var1) { _fun0016_ip = 53; continue _fun0016 }
 43:
                var2 = var3.isStaffPersonal;
                var1 = var2.bind(var3)();
 53:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'hasUrgentMessages';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot12;
            var1 = var1.HAS_UNREAD_URGENT_MESSAGES;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'isNonUserBot';
        var5['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var3 = this;
                var1 = var3.isSystemUser;
                var1 = var1.bind(var3)();
                if(var1) { _fun0017_ip = 45; continue _fun0017 }
 16:
                var2 = var3.bot;
                if(!var2) { _fun0017_ip = 42; continue _fun0017 }
 25:
                var4 = var3.discriminator;
                var3 = _closure1_slot10;
                var2 = var4 === var3;
 42:
                var1 = var2;
 45:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'isLocalBot';
        var5['key'] = var7;
        var7 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var2 = this;
                var1 = var2.bot;
                if(!var1) { _fun0018_ip = 28; continue _fun0018 }
 12:
                var3 = var2.id;
                var2 = _closure1_slot9;
                var1 = var3 === var2;
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'isVerifiedBot';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var4 = this;
                var1 = var4.isSystemUser;
                var1 = var1.bind(var4)();
                if(var1) { _fun0019_ip = 28; continue _fun0019 }
 16:
                var2 = var4.isLocalBot;
                var1 = var2.bind(var4)();
 28:
                if(var1) { _fun0019_ip = 55; continue _fun0019 }
 31:
                var3 = var4.hasFlag;
                var2 = _closure1_slot12;
                var2 = var2.VERIFIED_BOT;
                var1 = var3.bind(var4)(var2);
 55:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'isSystemUser';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.system;
            var1 = true;
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'hasAvatarForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0020_ip = 29; continue _fun0020 }
 12:
                var2 = this;
                var2 = var2.guildMemberAvatars;
                var2 = var2[var4];
                var1 = var3 != var2;
 29:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'hasUniqueUsername';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.discriminator;
            var1 = '0';
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'isProvisional';
        var5['key'] = var7;
        var7 = function get() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot12;
            var1 = var1.PROVISIONAL_ACCOUNT;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['get'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'avatarDecoration';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1.avatarDecorationData;
            return var1;
        };
        var5['get'] = var7;
        var7 = function set(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.parseAvatarDecorationData;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = this;
            var2['avatarDecorationData'] = var3;
            return var1;
        };
        var5['set'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'nameplate';
        var5['key'] = var7;
        var6 = function get() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getNameplateData;
                var4 = this;
                var4 = var4.collectibles;
                var5 = null;
                var5 = var5 == var4;
                if(var5) { _fun0021_ip = 55; continue _fun0021 }
 49:
                var1 = var4.nameplate;
 55:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['get'] = var6;
        var1[25] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var2.bind(var1)(var4);
    var2 = {};
    var5 = '0';
    var2['id'] = var5;
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var13 = var5;
    var12 = var2;
    var2 = new var13[var4](var12, var11);
    var2 = var2 instanceof Object ? var2 : var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'records/UserRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['PLACEHOLDER_USER_RECORD'] = var2;
    return var1;
})();