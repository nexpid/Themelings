// app/modules/guild_identity/GuildIdentityActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _saveGuildIdentityChanges() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var16 = arg1;
                    var14 = var2.nick;
                    var13 = var2.avatar;
                    var11 = var2.avatarDescription;
                    var12 = var2.avatarId;
                    var18 = var2.avatarDecoration;
                    var20 = var2.nameplate;
                    var17 = var2.displayNameStyles;
                    var6 = undefined;
                    var15 = undefined;
                    var10 = undefined;
                    var5 = undefined;
                    SaveGenerator(address=70);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = var16;
                    var9 = null;
                    if(!(var9 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var19 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 2;
                    var8 = var8[var7];
                    var21 = var19.bind(var6)(var8);
                    var19 = var21.dispatch;
                    var8 = {};
                    var22 = 'GUILD_IDENTITY_SETTINGS_SUBMIT';
                    var8['type'] = var22;
                    var8 = var19.bind(var21)(var8);
                    var8 = {};
                    var8['nick'] = var14;
                    var14 = var13;
                    var8['avatar'] = var14;
                    var8['avatar_description'] = var11;
                    var11 = var12;
                    var8['avatar_id'] = var11;
                    var14 = var9 === var18;
                    var11 = null;
                    if(var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var21 = var9 == var18;
                    var19 = undefined;
                    if(var21) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var19 = var18.id;
case 12:
                    var11 = var19;
case 10:
                    var8['avatar_decoration_id'] = var11;
                    var11 = null;
                    if(var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var19 = var9 == var18;
                    var14 = undefined;
                    if(var19) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var14 = var18.skuId;
case 16:
                    var11 = var14;
case 14:
                    var8['avatar_decoration_sku_id'] = var11;
                    var11 = undefined;
                    if(!(var6 !== var20)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var14 = {};
                    var18 = null;
                    if(!(var9 !== var20)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var19 = {};
                    var21 = var20.id;
                    var19['id'] = var21;
                    var20 = var20.skuId;
                    var19['sku_id'] = var20;
                    var18 = var19;
case 20:
                    var14['nameplate'] = var18;
                    var11 = var14;
case 18:
                    var8['collectibles'] = var11;
                    var14 = var6 !== var17;
                    var11 = undefined;
                    if(!var14) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var18 = null;
                    if(!(var9 !== var17)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var18 = var17.fontId;
case 24:
                    var11 = var18;
case 22:
                    var8['display_name_font_id'] = var11;
                    var11 = undefined;
                    if(!var14) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var18 = null;
                    if(!(var9 !== var17)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var18 = var17.effectId;
case 28:
                    var11 = var18;
case 26:
                    var8['display_name_effect_id'] = var11;
                    var11 = undefined;
                    if(!var14) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var14 = null;
                    if(!(var14 !== var17)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var14 = var17.colors;
case 32:
                    var11 = var14;
case 30:
                    var8['display_name_colors'] = var11;
                    var15 = var8;
case 34: // try_start_0
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 3;
                    var8 = var14[var8];
                    var8 = var11.bind(var6)(var8);
                    var14 = var8.HTTP;
                    var11 = var14.patch;
                    var8 = {};
                    var19 = _closure1_slot4;
                    var18 = var19.SET_GUILD_MEMBER;
                    var17 = var16;
                    var17 = var18.bind(var19)(var17);
                    var8['url'] = var17;
                    var8['body'] = var15;
                    var15 = true;
                    var8['oldFormErrors'] = var15;
                    var15 = false;
                    var8['rejectWithError'] = var15;
                    var8 = var11.bind(var14)(var8);
                    SaveGenerator(address=437);
case 35:
                    return var8;
case 36:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var10 = var8;
                    var17 = var8.body;
                    var14 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var15 = var11[var7];
                    var19 = var14.bind(var6)(var15);
                    var18 = var19.dispatch;
                    var15 = {};
                    var20 = 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS';
                    var15['type'] = var20;
                    var15 = var18.bind(var19)(var15);
                    var11 = var11[var7];
                    var15 = var14.bind(var6)(var11);
                    var14 = var15.dispatch;
                    var11 = {};
                    var18 = 'GUILD_MEMBER_PROFILE_UPDATE';
                    var11['type'] = var18;
                    var11['guildMember'] = var17;
                    var11['guildId'] = var16;
                    var11 = var14.bind(var15)(var11);
                    var13 = var9 == var13;
                    var11 = var13;
                    if(!var13) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                    var11 = var9 == var12;
case 39:
                    if(var11) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var7];
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.dispatch;
                    var11 = {};
                    var14 = 'RECENT_AVATARS_UPDATE';
                    var11['type'] = var14;
                    var11 = var12.bind(var13)(var11);
case 41: // try_end0
                    return var10;
case 37:
                    return var8;
case 43: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var3 = var8;
                    var8 = var8.body;
                    var5 = var8;
                    var10 = var9 == var8;
                    var8 = undefined;
                    if(var10) { _fun0001_ip = 44; continue _fun0001 }
case 45:
                    var10 = var5;
                    var8 = var10.username;
case 44:
                    if(!(var9 != var8)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
                    var8 = var5.username;
                    var5['nick'] = var8;
                    var5 = delete var5.username;
case 46:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE';
                    var4['type'] = var7;
                    var7 = var3.body;
                    var4['errors'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 8:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var23 = 'Need guildId';
                    var24 = var4;
                    var3 = new var24[var5](var23, var22);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_identity/GuildIdentityActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function saveGuildIdentityChanges() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['saveGuildIdentityChanges'] = var4;
    var4 = function setCurrentGuild(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_GUILD';
        var2['type'] = var5;
        var5 = arg1;
        var2['guild'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setCurrentGuild'] = var4;
    var4 = function initGuildIdentitySettings(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_INIT';
        var2['type'] = var5;
        var5 = arg1;
        var2['guild'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['initGuildIdentitySettings'] = var4;
    var4 = function resetAndCloseGuildIdentityForm() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetAndCloseGuildIdentityForm'] = var4;
    var4 = function setPendingAvatar(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR';
        var2['type'] = var5;
        var5 = arg1;
        var2['avatar'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingAvatar'] = var4;
    var4 = function setPendingAvatarDecoration(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION';
        var2['type'] = var5;
        var5 = arg1;
        var2['avatarDecoration'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingAvatarDecoration'] = var4;
    var4 = function setPendingProfileEffect(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT';
        var2['type'] = var5;
        var5 = arg1;
        var2['profileEffect'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingProfileEffect'] = var4;
    var4 = function setPendingBanner(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER';
        var2['type'] = var5;
        var5 = arg1;
        var2['banner'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingBanner'] = var4;
    var4 = function setPendingBio(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO';
        var2['type'] = var5;
        var5 = arg1;
        var2['bio'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingBio'] = var4;
    var4 = function setPendingPronouns(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS';
        var2['type'] = var5;
        var5 = arg1;
        var2['pronouns'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingPronouns'] = var4;
    var4 = function setPendingNickname(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME';
        var2['type'] = var5;
        var5 = arg1;
        var2['nickname'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingNickname'] = var4;
    var4 = function setPendingThemeColors(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS';
        var2['type'] = var5;
        var5 = arg1;
        var2['themeColors'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingThemeColors'] = var4;
    var4 = function setGuildMemberPendingNameplate(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NAMEPLATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['nameplate'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setGuildMemberPendingNameplate'] = var4;
    var4 = function setGuildMemberPendingDisplayNameStyles(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES';
        var2['type'] = var5;
        var5 = arg1;
        var2['displayNameStyles'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setGuildMemberPendingDisplayNameStyles'] = var4;
    var4 = function resetPendingMemberChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPendingMemberChanges'] = var4;
    var4 = function resetPendingProfileChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPendingProfileChanges'] = var4;
    var4 = function resetAllPending() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetAllPending'] = var4;
    var2 = function clearErrors() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearErrors'] = var2;
    return var1;
})();