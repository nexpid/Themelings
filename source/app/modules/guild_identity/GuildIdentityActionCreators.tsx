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
 0:
                    StartGenerator();
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 650; continue _fun0001 }
 13:
                    var16 = arg1;
                    var14 = var2.nick;
                    var13 = var2.avatar;
                    var11 = var2.avatarDescription;
                    var12 = var2.avatarId;
                    var17 = var2.avatarDecoration;
                    var19 = var2.nameplate;
                    var6 = undefined;
                    var15 = undefined;
                    var10 = undefined;
                    var5 = undefined;
                    SaveGenerator(address=64);
 62:
                    return var6;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 647; continue _fun0001 }
 73:
                    var4 = var16;
                    var9 = null;
                    if(!(var9 != var4)) { _fun0001_ip = 611; continue _fun0001 }
 85:
                    var18 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 2;
                    var8 = var8[var7];
                    var20 = var18.bind(var6)(var8);
                    var18 = var20.dispatch;
                    var8 = {};
                    var21 = 'GUILD_IDENTITY_SETTINGS_SUBMIT';
                    var8['type'] = var21;
                    var8 = var18.bind(var20)(var8);
                    var8 = {};
                    var8['nick'] = var14;
                    var14 = var13;
                    var8['avatar'] = var14;
                    var8['avatar_description'] = var11;
                    var11 = var12;
                    var8['avatar_id'] = var11;
                    var14 = var9 === var17;
                    var11 = null;
                    if(var14) { _fun0001_ip = 184; continue _fun0001 }
 167:
                    var20 = var9 == var17;
                    var18 = undefined;
                    if(var20) { _fun0001_ip = 181; continue _fun0001 }
 176:
                    var18 = var17.id;
 181:
                    var11 = var18;
 184:
                    var8['avatar_decoration_id'] = var11;
                    var11 = null;
                    if(var14) { _fun0001_ip = 212; continue _fun0001 }
 194:
                    var18 = var9 == var17;
                    var14 = undefined;
                    if(var18) { _fun0001_ip = 209; continue _fun0001 }
 203:
                    var14 = var17.skuId;
 209:
                    var11 = var14;
 212:
                    var8['avatar_decoration_sku_id'] = var11;
                    var11 = undefined;
                    if(!(var6 !== var19)) { _fun0001_ip = 264; continue _fun0001 }
 223:
                    var14 = {};
                    var17 = null;
                    if(!(var17 !== var19)) { _fun0001_ip = 256; continue _fun0001 }
 231:
                    var18 = {};
                    var20 = var19.id;
                    var18['id'] = var20;
                    var19 = var19.skuId;
                    var18['sku_id'] = var19;
                    var17 = var18;
 256:
                    var14['nameplate'] = var17;
                    var11 = var14;
 264:
                    var8['collectibles'] = var11;
                    var15 = var8;
 272: // try_start_0
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
                    SaveGenerator(address=353);
 351:
                    return var8;
 353:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 506; continue _fun0001 }
 362:
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
                    if(!var13) { _fun0001_ip = 461; continue _fun0001 }
 457:
                    var11 = var9 == var12;
 461:
                    if(var11) { _fun0001_ip = 503; continue _fun0001 }
 464:
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var7];
                    var13 = var12.bind(var6)(var11);
                    var12 = var13.dispatch;
                    var11 = {};
                    var14 = 'RECENT_AVATARS_UPDATE';
                    var11['type'] = var14;
                    var11 = var12.bind(var13)(var11);
 503: // try_end0
                    return var10;
 506:
                    return var8;
 509: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var3 = var8;
                    var8 = var8.body;
                    var5 = var8;
                    var10 = var9 == var8;
                    var8 = undefined;
                    if(var10) { _fun0001_ip = 539; continue _fun0001 }
 531:
                    var10 = var5;
                    var8 = var10.username;
 539:
                    if(!(var9 != var8)) { _fun0001_ip = 559; continue _fun0001 }
 543:
                    var8 = var5.username;
                    var5['nick'] = var8;
                    var5 = delete var5.username;
 559:
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
 611:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var22 = 'Need guildId';
                    var23 = var4;
                    var3 = new var23[var5](var22, var21);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 647:
                    return var2;
 650:
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
    var4 = function setPendingProfileEffectId(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID';
        var2['type'] = var5;
        var5 = arg1;
        var2['profileEffectId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPendingProfileEffectId'] = var4;
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