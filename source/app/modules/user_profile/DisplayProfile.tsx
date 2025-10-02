// app/modules/user_profile/DisplayProfile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _getStringFieldDefault(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = '';
            if(!(var3 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = var2;
case 4:
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
case 0:
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
                if(var8) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var7 = var3.guildId;
case 5:
                var2['guildId'] = var7;
                var8 = var6 == var3;
                var7 = undefined;
                if(var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var7 = var3.banner;
case 7:
                if(!(var6 == var7)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var7 = var4.banner;
case 9:
                var2['banner'] = var7;
                var9 = _closure1_slot6;
                var8 = var4.bio;
                var10 = var6 == var3;
                var7 = undefined;
                if(var10) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var7 = var3.bio;
case 11:
                var7 = var9.bind(var1)(var8, var7);
                var2['bio'] = var7;
                var8 = _closure1_slot6;
                var7 = var4.pronouns;
                var9 = var6 == var3;
                var5 = undefined;
                if(var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var5 = var3.pronouns;
case 13:
                var5 = var8.bind(var1)(var7, var5);
                var2['pronouns'] = var5;
                var5 = var4.accentColor;
                var2['accentColor'] = var5;
                var7 = var6 == var3;
                var5 = undefined;
                if(var7) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var5 = var3.themeColors;
case 15:
                if(!(var6 == var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var5 = var4.themeColors;
case 17:
                var2['themeColors'] = var5;
                var7 = var6 == var3;
                var5 = undefined;
                if(var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var5 = var3.profileEffect;
case 19:
                if(!(var6 == var5)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var5 = var4.profileEffect;
case 21:
                var2['profileEffect'] = var5;
                var7 = var6 == var3;
                var5 = undefined;
                if(var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var5 = var3.popoutAnimationParticleType;
case 23:
                if(!(var6 == var5)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var5 = var4.popoutAnimationParticleType;
case 25:
                var2['popoutAnimationParticleType'] = var5;
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
        var2 = new Array(21);
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
        var6 = 'widgets';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._userProfile;
            var1 = var1.widgets;
            return var1;
        };
        var1['get'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'gameWidgets';
        var1['key'] = var6;
        var6 = function get() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = this;
                var1 = var1._userProfile;
                var4 = var1.widgets;
                var1 = null;
                var2 = var1 == var4;
                var6 = undefined;
                var1 = undefined;
                if(var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                var3 = var4.filter;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.isGameWidget;
                var1 = var3.bind(var4)(var2);
case 27:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'primaryColor';
        var1['key'] = var6;
        var6 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var5 = var2.themeColors;
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                if(var4) { _fun0004_ip = 29; continue _fun0004 }
case 2:
                var4 = 0;
                var1 = var5[var4];
case 29:
                if(!(var3 == var1)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var1 = var2.accentColor;
case 30:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'canUsePremiumProfileCustomization';
        var1['key'] = var6;
        var6 = function get() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 4;
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
        var2[6] = var1;
        var1 = {};
        var6 = 'canEditThemes';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.canUsePremiumProfileCustomization;
            return var1;
        };
        var1['get'] = var6;
        var2[7] = var1;
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
        var2[8] = var1;
        var1 = {};
        var6 = 'isLoaded';
        var1['key'] = var6;
        var6 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = this;
                var1 = var3._userProfile;
                var4 = undefined;
                var1 = var4 !== var1;
                if(!var1) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var5 = var3.guildId;
                var2 = null;
                var2 = var2 == var5;
                if(var2) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var3 = var3._guildMemberProfile;
                var2 = var4 !== var3;
case 34:
                var1 = var2;
case 32:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'hasThemeColors';
        var1['key'] = var6;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var6 = var4.themeColors;
                var3 = null;
                var5 = var3 == var6;
                var1 = undefined;
                if(var5) { _fun0006_ip = 29; continue _fun0006 }
case 2:
                var5 = 0;
                var1 = var6[var5];
case 29:
                var1 = var3 != var1;
                if(var1) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                var5 = var4.themeColors;
                var4 = var3 == var5;
                var2 = undefined;
                if(var4) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                var4 = 1;
                var2 = var5[var4];
case 38:
                var1 = var3 != var2;
case 36:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'hasPremiumCustomization';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var1 = var2.isUsingGuildMemberBanner;
                var1 = var1.bind(var2)();
                if(var1) { _fun0007_ip = 29; continue _fun0007 }
case 40:
                var3 = var2.isUsingGuildMemberBio;
                var1 = var3.bind(var2)();
case 29:
                if(var1) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var4 = var2.banner;
                var3 = null;
                var1 = var3 != var4;
case 41:
                if(var1) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var3 = var2.hasThemeColors;
                var1 = var3.bind(var2)();
case 43:
                if(var1) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var3 = var2.popoutAnimationParticleType;
                var2 = null;
                var1 = var2 != var3;
case 45:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'isUsingGuildMemberBanner';
        var1['key'] = var6;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var3 = var1._guildMemberProfile;
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0008_ip = 29; continue _fun0008 }
case 2:
                var1 = var3.banner;
case 29:
                var1 = var2 != var1;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'isUsingGuildMemberBio';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var5 = var2._guildMemberProfile;
                var4 = null;
                var6 = var4 == var5;
                var1 = undefined;
                if(var6) { _fun0009_ip = 29; continue _fun0009 }
case 2:
                var1 = var5.bio;
case 29:
                var1 = var4 != var1;
                if(!var1) { _fun0009_ip = 47; continue _fun0009 }
case 37:
                var2 = var2._guildMemberProfile;
                var4 = var4 == var2;
                var3 = undefined;
                if(var4) { _fun0009_ip = 43; continue _fun0009 }
case 39:
                var3 = var2.bio;
case 43:
                var2 = '';
                var1 = var2 !== var3;
case 47:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'isUsingGuildMemberPronouns';
        var1['key'] = var6;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var5 = var2._guildMemberProfile;
                var4 = null;
                var6 = var4 == var5;
                var1 = undefined;
                if(var6) { _fun0010_ip = 29; continue _fun0010 }
case 2:
                var1 = var5.pronouns;
case 29:
                var1 = var4 != var1;
                if(!var1) { _fun0010_ip = 47; continue _fun0010 }
case 37:
                var2 = var2._guildMemberProfile;
                var4 = var4 == var2;
                var3 = undefined;
                if(var4) { _fun0010_ip = 43; continue _fun0010 }
case 39:
                var3 = var2.pronouns;
case 43:
                var2 = '';
                var1 = var2 !== var3;
case 47:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'getBannerURL';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var7 = this;
                var6 = var1.canAnimate;
                var5 = var1.size;
                var2 = var7.guildId;
                var1 = null;
                if(!(var1 != var2)) { _fun0011_ip = 41; continue _fun0011 }
case 28:
                var1 = var7.isUsingGuildMemberBanner;
                var1 = var1.bind(var7)();
                if(var1) { _fun0011_ip = 48; continue _fun0011 }
case 41:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
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
                _fun0011_ip = 49; continue _fun0011;
case 48:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 5;
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
case 49:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'getPreviewBanner';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg1;
                var8 = arg2;
                var7 = arguments[2];
                var9 = this;
                var6 = undefined;
                if(!(var7 === var6)) { _fun0012_ip = 50; continue _fun0012 }
case 33:
                var7 = 480;
case 50:
                var3 = null;
                var1 = var2;
                if(!(var3 == var1)) { _fun0012_ip = 51; continue _fun0012 }
case 37:
                if(!(var3 !== var2)) { _fun0012_ip = 52; continue _fun0012 }
case 53:
                var4 = var9.getBannerURL;
                var2 = {};
                var2['canAnimate'] = var8;
                var2['size'] = var7;
                var2 = var4.bind(var9)(var2);
                _fun0012_ip = 54; continue _fun0012;
case 52:
                var4 = var9.isUsingGuildMemberBanner;
                var4 = var4.bind(var9)();
                var3 = null;
                if(!var4) { _fun0012_ip = 55; continue _fun0012 }
case 56:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 5;
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
case 55:
                var2 = var3;
case 54:
                var1 = var2;
case 51:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'getPreviewBio';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = this;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var5 = var6.getProfilePreviewField;
                var3 = var1._guildMemberProfile;
                var2 = null;
                var7 = var2 == var3;
                if(var7) { _fun0013_ip = 38; continue _fun0013 }
case 57:
                var4 = var3.bio;
case 38:
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
        var2[17] = var1;
        var1 = {};
        var6 = 'getPreviewThemeColors';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var6 = null;
                var5 = var6 == var4;
                var2 = undefined;
                var1 = undefined;
                if(var5) { _fun0014_ip = 58; continue _fun0014 }
case 59:
                var5 = 0;
                var1 = var4[var5];
case 58:
                if(!(var6 != var1)) { _fun0014_ip = 60; continue _fun0014 }
case 42:
                var1 = var6 == var4;
                var5 = undefined;
                if(var1) { _fun0014_ip = 32; continue _fun0014 }
case 61:
                var1 = 1;
                var5 = var4[var1];
case 32:
                var1 = var4;
                if(!(var6 == var5)) { _fun0014_ip = 7; continue _fun0014 }
case 60:
                if(!(var2 === var4)) { _fun0014_ip = 62; continue _fun0014 }
case 63:
                var2 = var3.themeColors;
                _fun0014_ip = 56; continue _fun0014;
case 62:
                var3 = var3._userProfile;
                var2 = var3.themeColors;
case 56:
                var1 = var2;
case 7:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'getBadges';
        var1['key'] = var6;
        var6 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var1 = var2._userProfile;
                var5 = var1.badges;
                var4 = null;
                if(!(var4 == var5)) { _fun0015_ip = 58; continue _fun0015 }
case 64:
                var5 = new Array(0);
case 58:
                var1 = new Array(0);
                var7 = 0;
                var9 = var1;
                var8 = var5;
                var3 = arraySpread(var9, var8, var7);
                var5 = var2._guildMemberProfile;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0015_ip = 47; continue _fun0015 }
case 63:
                var2 = var5.badges;
case 47:
                if(!(var4 == var2)) { _fun0015_ip = 65; continue _fun0015 }
case 66:
                var2 = new Array(0);
case 65:
                var9 = var1;
                var8 = var2;
                var7 = var3;
                var2 = arraySpread(var9, var8, var7);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[19] = var1;
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
        var2[20] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/DisplayProfile.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();