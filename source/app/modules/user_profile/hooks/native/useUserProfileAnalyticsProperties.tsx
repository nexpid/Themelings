// app/modules/user_profile/hooks/native/useUserProfileAnalyticsProperties.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileAnalyticsTypes;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useUserProfileAnalyticsProperties.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileAnalyticsProperties(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var14 = var3.userId;
            var _closure2_slot0 = var14;
            var12 = var3.user;
            var _closure2_slot1 = var12;
            var13 = var3.channelId;
            var _closure2_slot2 = var13;
            var7 = var3.guildId;
            var _closure2_slot3 = var7;
            var8 = var3.displayProfile;
            var _closure2_slot4 = var8;
            var2 = var3.guildMember;
            var _closure2_slot5 = var2;
            var10 = var3.profileEffectSkuId;
            var _closure2_slot6 = var10;
            var4 = var3.type;
            var _closure2_slot7 = var4;
            var11 = undefined;
            var _closure2_slot8 = var11;
            var _closure2_slot9 = var11;
            var9 = _closure1_slot0;
            var6 = var9.useMemo;
            var5 = new Array(8);
            var5[0] = var14;
            var5[1] = var13;
            var5[2] = var7;
            var5[3] = var8;
            var13 = null;
            var15 = var13 == var2;
            var14 = undefined;
            if(var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = var2.avatarDecoration;
case 2:
            var5[4] = var14;
            var13 = var13 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var12.avatarDecoration;
case 4:
            var5[5] = var11;
            var5[6] = var10;
            var5[7] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot7;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot1;
                    var4 = var4.USER_SHEET;
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var4 = _closure2_slot7;
case 8:
                    var1['type'] = var4;
                    var4 = _closure2_slot0;
                    var1['other_user_id'] = var4;
                    var4 = _closure2_slot2;
                    var1['channel_id'] = var4;
                    var4 = _closure2_slot3;
                    var1['guild_id'] = var4;
                    var4 = _closure2_slot4;
                    var4 = var3 != var4;
                    if(!var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = _closure2_slot4;
                    var6 = var3 == var5;
                    var5 = undefined;
                    if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var7 = _closure2_slot4;
                    var6 = var7.hasPremiumCustomization;
                    var5 = var6.bind(var7)();
case 11:
                    var4 = var5;
case 9:
                    var1['profile_has_nitro_customization'] = var4;
                    var4 = _closure2_slot4;
                    var4 = var3 != var4;
                    if(!var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var6 = _closure2_slot4;
                    var5 = var6.hasThemeColors;
                    var4 = var5.bind(var6)();
case 13:
                    var1['profile_has_theme_color_customized'] = var4;
                    var4 = _closure2_slot4;
                    var5 = var3 == var4;
                    var7 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0002_ip = 15; continue _fun0002 }
case 5:
                    var5 = _closure2_slot4;
                    var4 = var5.popoutAnimationParticleType;
case 15:
                    var4 = var3 != var4;
                    var1['profile_has_theme_animation'] = var4;
                    var5 = global;
                    var6 = var5.Boolean;
                    var4 = _closure2_slot5;
                    var8 = var3 == var4;
                    var4 = undefined;
                    if(var8) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var8 = _closure2_slot5;
                    var4 = var8.avatarDecoration;
case 16:
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var6 = var5.Boolean;
                    var5 = _closure2_slot1;
                    var8 = var3 == var5;
                    var5 = undefined;
                    if(var8) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var8 = _closure2_slot1;
                    var5 = var8.avatarDecoration;
case 20:
                    var4 = var6.bind(var7)(var5);
case 18:
                    var1['has_avatar_decoration'] = var4;
                    var2 = _closure2_slot6;
                    var2 = var3 != var2;
                    var1['has_profile_effect'] = var2;
                    return var1;
                }
            };
            var6 = var6.bind(var9)(var4, var5);
            _closure2_slot8 = var6;
            var4 = _closure1_slot0;
            var5 = var4.useMemo;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var4 = global;
                    var7 = var4.Boolean;
                    var2 = _closure2_slot5;
                    var5 = null;
                    var8 = var5 == var2;
                    var2 = undefined;
                    var6 = undefined;
                    if(var8) { _fun0003_ip = 22; continue _fun0003 }
case 6:
                    var8 = _closure2_slot5;
                    var6 = var8.nick;
case 22:
                    var6 = var7.bind(var2)(var6);
                    var1['has_nickname'] = var6;
                    var6 = var4.Boolean;
                    var4 = _closure2_slot5;
                    var7 = var5 == var4;
                    var4 = undefined;
                    if(var7) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var7 = _closure2_slot5;
                    var4 = var7.avatar;
case 23:
                    var4 = var6.bind(var2)(var4);
                    var1['has_guild_member_avatar'] = var4;
                    var4 = _closure2_slot4;
                    var6 = var5 == var4;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 14; continue _fun0003 }
case 25:
                    var7 = _closure2_slot4;
                    var6 = var7.isUsingGuildMemberBanner;
                    var4 = var6.bind(var7)();
case 14:
                    var1['has_guild_member_banner'] = var4;
                    var4 = _closure2_slot4;
                    var4 = var5 == var4;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 5; continue _fun0003 }
case 26:
                    var4 = _closure2_slot4;
                    var3 = var4.isUsingGuildMemberBio;
                    var2 = var3.bind(var4)();
case 5:
                    var1['has_guild_member_bio'] = var2;
                    return var1;
                }
            };
            var5 = var5.bind(var4)(var2, var3);
            _closure2_slot9 = var5;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var1 = {};
                    var4 = _closure2_slot8;
                    var5 = var1;
                    var3 = copyDataProperties(var5, var4);
                    var4 = _closure2_slot9;
                    var5 = var1;
                    var3 = copyDataProperties(var5, var4);
                    _fun0004_ip = 29; continue _fun0004;
case 27:
                    var1 = _closure2_slot8;
case 29:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();