// app/modules/user_profile/DisplayProfile.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getStringFieldDefault(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 20; continue _fun0001 }
 12:
            var3 = '';
            if(!(var3 === var1)) { _fun0001_ip = 23; continue _fun0001 }
 20:
            var1 = var2;
 23:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function DisplayProfile(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var7 = _closure1_slot3;
                var6 = _closure2_slot0;
                var1 = undefined;
                var6 = var7.bind(var1)(var2, var6);
                var6 = var4.userId;
                var2['userId'] = var6;
                var6 = null;
                var8 = var6 == var3;
                var7 = undefined;
                if(var8) { _fun0002_ip = 58; continue _fun0002 }
 53:
                var7 = var3.guildId;
 58:
                var2['guildId'] = var7;
                var8 = var6 == var3;
                var7 = undefined;
                if(var8) { _fun0002_ip = 79; continue _fun0002 }
 73:
                var7 = var3.banner;
 79:
                if(!(var6 == var7)) { _fun0002_ip = 89; continue _fun0002 }
 83:
                var7 = var4.banner;
 89:
                var2['banner'] = var7;
                var9 = _closure1_slot6;
                var8 = var4.bio;
                var10 = var6 == var3;
                var7 = undefined;
                if(var10) { _fun0002_ip = 120; continue _fun0002 }
 114:
                var7 = var3.bio;
 120:
                var7 = var9.bind(var1)(var8, var7);
                var2['bio'] = var7;
                var8 = _closure1_slot6;
                var7 = var4.pronouns;
                var9 = var6 == var3;
                var5 = undefined;
                if(var9) { _fun0002_ip = 157; continue _fun0002 }
 151:
                var5 = var3.pronouns;
 157:
                var5 = var8.bind(var1)(var7, var5);
                var2['pronouns'] = var5;
                var5 = var4.accentColor;
                var2['accentColor'] = var5;
                var7 = var6 == var3;
                var5 = undefined;
                if(var7) { _fun0002_ip = 196; continue _fun0002 }
 190:
                var5 = var3.themeColors;
 196:
                if(!(var6 == var5)) { _fun0002_ip = 206; continue _fun0002 }
 200:
                var5 = var4.themeColors;
 206:
                var2['themeColors'] = var5;
                var7 = var6 == var3;
                var5 = undefined;
                if(var7) { _fun0002_ip = 227; continue _fun0002 }
 221:
                var5 = var3.popoutAnimationParticleType;
 227:
                if(!(var6 == var5)) { _fun0002_ip = 237; continue _fun0002 }
 231:
                var5 = var4.popoutAnimationParticleType;
 237:
                var2['popoutAnimationParticleType'] = var5;
                var7 = var6 == var3;
                var5 = undefined;
                if(var7) { _fun0002_ip = 258; continue _fun0002 }
 252:
                var5 = var3.profileEffectId;
 258:
                if(!(var6 == var5)) { _fun0002_ip = 298; continue _fun0002 }
 262:
                var5 = var4.profileEffectId;
                if(!(var6 != var5)) { _fun0002_ip = 322; continue _fun0002 }
 272:
                var5 = var4.profileEffectId;
                var2['profileEffectId'] = var5;
                var5 = var4.profileEffectExpiresAt;
                var2['profileEffectExpiresAt'] = var5;
                _fun0002_ip = 322; continue _fun0002;
 298:
                var5 = var3.profileEffectId;
                var2['profileEffectId'] = var5;
                var5 = var3.profileEffectExpiresAt;
                var2['profileEffectExpiresAt'] = var5;
 322:
                var5 = var4.fetchStartedAt;
                var2['fetchStartedAt'] = var5;
                var5 = var4.fetchEndedAt;
                var2['fetchEndedAt'] = var5;
                var2['_userProfile'] = var4;
                var2['_guildMemberProfile'] = var3;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'premiumSince';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._userProfile;
            var1 = var1.premiumSince;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(19);
        var2[0] = var1;
        var1 = {};
        var6 = 'premiumGuildSince';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._userProfile;
            var1 = var1.premiumGuildSince;
            return var1;
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'premiumType';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._userProfile;
            var1 = var1.premiumType;
            return var1;
        };
        var1['get'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'primaryColor';
        var1['key'] = var6;
        var6 = function get() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var5 = var2.themeColors;
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                if(var4) { _fun0003_ip = 26; continue _fun0003 }
 20:
                var4 = 0;
                var1 = var5[var4];
 26:
                if(!(var3 == var1)) { _fun0003_ip = 36; continue _fun0003 }
 30:
                var1 = var2.accentColor;
 36:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'canUsePremiumProfileCustomization';
        var1['key'] = var6;
        var6 = function get() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.isPremiumAtLeast;
            var2 = this;
            var2 = var2.premiumType;
            var1 = _closure1_slot5;
            var1 = var1.TIER_2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['get'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'canEditThemes';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.canUsePremiumProfileCustomization;
            return var1;
        };
        var1['get'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'application';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._userProfile;
            var1 = var1.application;
            return var1;
        };
        var1['get'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'isLoaded';
        var1['key'] = var6;
        var6 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = this;
                var1 = var3._userProfile;
                var4 = undefined;
                var1 = var4 !== var1;
                if(!var1) { _fun0004_ip = 45; continue _fun0004 }
 18:
                var5 = var3.guildId;
                var2 = null;
                var2 = var2 == var5;
                if(var2) { _fun0004_ip = 42; continue _fun0004 }
 32:
                var3 = var3._guildMemberProfile;
                var2 = var4 !== var3;
 42:
                var1 = var2;
 45:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'hasThemeColors';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var6 = var4.themeColors;
                var3 = null;
                var5 = var3 == var6;
                var1 = undefined;
                if(var5) { _fun0005_ip = 26; continue _fun0005 }
 20:
                var5 = 0;
                var1 = var6[var5];
 26:
                var1 = var3 != var1;
                if(var1) { _fun0005_ip = 59; continue _fun0005 }
 33:
                var5 = var4.themeColors;
                var4 = var3 == var5;
                var2 = undefined;
                if(var4) { _fun0005_ip = 55; continue _fun0005 }
 48:
                var4 = 1;
                var2 = var5[var4];
 55:
                var1 = var3 != var2;
 59:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'hasPremiumCustomization';
        var1['key'] = var6;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var1 = var2.isUsingGuildMemberBanner;
                var1 = var1.bind(var2)();
                if(var1) { _fun0006_ip = 26; continue _fun0006 }
 16:
                var3 = var2.isUsingGuildMemberBio;
                var1 = var3.bind(var2)();
 26:
                if(var1) { _fun0006_ip = 41; continue _fun0006 }
 29:
                var4 = var2.banner;
                var3 = null;
                var1 = var3 != var4;
 41:
                if(var1) { _fun0006_ip = 54; continue _fun0006 }
 44:
                var3 = var2.hasThemeColors;
                var1 = var3.bind(var2)();
 54:
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 57:
                var3 = var2.popoutAnimationParticleType;
                var2 = null;
                var1 = var2 != var3;
 69:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'isUsingGuildMemberBanner';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = this;
                var3 = var1._guildMemberProfile;
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0007_ip = 26; continue _fun0007 }
 20:
                var1 = var3.banner;
 26:
                var1 = var2 != var1;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'isUsingGuildMemberBio';
        var1['key'] = var6;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = this;
                var5 = var2._guildMemberProfile;
                var4 = null;
                var6 = var4 == var5;
                var1 = undefined;
                if(var6) { _fun0008_ip = 26; continue _fun0008 }
 20:
                var1 = var5.bio;
 26:
                var1 = var4 != var1;
                if(!var1) { _fun0008_ip = 62; continue _fun0008 }
 33:
                var2 = var2._guildMemberProfile;
                var4 = var4 == var2;
                var3 = undefined;
                if(var4) { _fun0008_ip = 54; continue _fun0008 }
 48:
                var3 = var2.bio;
 54:
                var2 = '';
                var1 = var2 !== var3;
 62:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'isUsingGuildMemberPronouns';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = this;
                var5 = var2._guildMemberProfile;
                var4 = null;
                var6 = var4 == var5;
                var1 = undefined;
                if(var6) { _fun0009_ip = 26; continue _fun0009 }
 20:
                var1 = var5.pronouns;
 26:
                var1 = var4 != var1;
                if(!var1) { _fun0009_ip = 62; continue _fun0009 }
 33:
                var2 = var2._guildMemberProfile;
                var4 = var4 == var2;
                var3 = undefined;
                if(var4) { _fun0009_ip = 54; continue _fun0009 }
 48:
                var3 = var2.pronouns;
 54:
                var2 = '';
                var1 = var2 !== var3;
 62:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'getBannerURL';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = arg1;
                var7 = this;
                var6 = var1.canAnimate;
                var5 = var1.size;
                var2 = var7.guildId;
                var1 = null;
                if(!(var1 != var2)) { _fun0010_ip = 41; continue _fun0010 }
 28:
                var1 = var7.isUsingGuildMemberBanner;
                var1 = var1.bind(var7)();
                if(var1) { _fun0010_ip = 110; continue _fun0010 }
 41:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getUserBannerURL;
                var1 = {};
                var4 = var7.userId;
                var1['id'] = var4;
                var4 = var7.banner;
                var1['banner'] = var4;
                var1['canAnimate'] = var6;
                var1['size'] = var5;
                var1 = var2.bind(var3)(var1);
                _fun0010_ip = 186; continue _fun0010;
 110:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getGuildMemberBannerURL;
                var2 = {};
                var8 = var7.userId;
                var2['id'] = var8;
                var8 = var7.guildId;
                var2['guildId'] = var8;
                var7 = var7.banner;
                var2['banner'] = var7;
                var2['canAnimate'] = var6;
                var2['size'] = var5;
                var1 = var3.bind(var4)(var2);
 186:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'getPreviewBanner';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = arg1;
                var8 = arg2;
                var7 = arguments[2];
                var9 = this;
                var6 = undefined;
                if(!(var7 === var6)) { _fun0011_ip = 24; continue _fun0011 }
 18:
                var7 = 480;
 24:
                var3 = null;
                var1 = var2;
                if(!(var3 == var1)) { _fun0011_ip = 153; continue _fun0011 }
 33:
                if(!(var3 !== var2)) { _fun0011_ip = 61; continue _fun0011 }
 37:
                var4 = var9.getBannerURL;
                var2 = {};
                var2['canAnimate'] = var8;
                var2['size'] = var7;
                var2 = var4.bind(var9)(var2);
                _fun0011_ip = 150; continue _fun0011;
 61:
                var4 = var9.isUsingGuildMemberBanner;
                var4 = var4.bind(var9)();
                var3 = null;
                if(!var4) { _fun0011_ip = 147; continue _fun0011 }
 76:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 4;
                var4 = var10[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.getUserBannerURL;
                var4 = {};
                var10 = var9.userId;
                var4['id'] = var10;
                var9 = var9._userProfile;
                var9 = var9.banner;
                var4['banner'] = var9;
                var4['canAnimate'] = var8;
                var4['size'] = var7;
                var3 = var5.bind(var6)(var4);
 147:
                var2 = var3;
 150:
                var1 = var2;
 153:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'getPreviewBio';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = this;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var5 = var6.getProfilePreviewField;
                var3 = var1._guildMemberProfile;
                var2 = null;
                var7 = var2 == var3;
                if(var7) { _fun0012_ip = 55; continue _fun0012 }
 49:
                var4 = var3.bio;
 55:
                var3 = var1._userProfile;
                var9 = var3.bio;
                var1 = var1.guildId;
                var8 = var2 != var1;
                var11 = arg1;
                var12 = var6;
                var10 = var4;
                var1 = var12[var5](var11, var10, var9, var8, var7);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'getPreviewThemeColors';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var6 = null;
                var5 = var6 == var4;
                var2 = undefined;
                var1 = undefined;
                if(var5) { _fun0013_ip = 25; continue _fun0013 }
 19:
                var5 = 0;
                var1 = var4[var5];
 25:
                if(!(var6 != var1)) { _fun0013_ip = 52; continue _fun0013 }
 29:
                var1 = var6 == var4;
                var5 = undefined;
                if(var1) { _fun0013_ip = 45; continue _fun0013 }
 38:
                var1 = 1;
                var5 = var4[var1];
 45:
                var1 = var4;
                if(!(var6 == var5)) { _fun0013_ip = 79; continue _fun0013 }
 52:
                if(!(var2 === var4)) { _fun0013_ip = 64; continue _fun0013 }
 56:
                var2 = var3.themeColors;
                _fun0013_ip = 76; continue _fun0013;
 64:
                var3 = var3._userProfile;
                var2 = var3.themeColors;
 76:
                var1 = var2;
 79:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'getBadges';
        var1['key'] = var6;
        var6 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var2 = this;
                var1 = var2._userProfile;
                var5 = var1.badges;
                var4 = null;
                if(!(var4 == var5)) { _fun0014_ip = 25; continue _fun0014 }
 21:
                var5 = new Array(0);
 25:
                var1 = new Array(0);
                var7 = 0;
                var9 = var1;
                var8 = var5;
                var3 = arraySpread(var9, var8, var7);
                var5 = var2._guildMemberProfile;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0014_ip = 62; continue _fun0014 }
 56:
                var2 = var5.badges;
 62:
                if(!(var4 == var2)) { _fun0014_ip = 70; continue _fun0014 }
 66:
                var2 = new Array(0);
 70:
                var9 = var1;
                var8 = var2;
                var7 = var3;
                var2 = arraySpread(var9, var8, var7);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'getLegacyUsername';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var1 = var1._userProfile;
            var1 = var1.legacyUsername;
            return var1;
        };
        var1['value'] = var5;
        var2[18] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/DisplayProfile.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();