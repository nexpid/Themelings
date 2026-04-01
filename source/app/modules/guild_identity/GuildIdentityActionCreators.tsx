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
                    var7 = arg1;
                    var18 = var2.nick;
                    var14 = var2.avatar;
                    var12 = var2.avatarDescription;
                    var13 = var2.avatarId;
                    var15 = var2.avatarDecoration;
                    var20 = var2.nameplate;
                    var17 = var2.displayNameStyles;
                    var6 = undefined;
                    var16 = undefined;
                    var11 = undefined;
                    var5 = undefined;
                    SaveGenerator(address=70);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = var7;
                    var10 = null;
                    if(!(var10 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var19 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var8 = 2;
                    var9 = var9[var8];
                    var21 = var19.bind(var6)(var9);
                    var19 = var21.dispatch;
                    var9 = {};
                    var22 = 'USER_PROFILE_SETTINGS_SUBMIT';
                    var9['type'] = var22;
                    var22 = var7;
                    var9['guildId'] = var22;
                    var9 = var19.bind(var21)(var9);
                    var9 = {};
                    var9['nick'] = var18;
                    var18 = var14;
                    var9['avatar'] = var18;
                    var9['avatar_description'] = var12;
                    var12 = var13;
                    var9['avatar_id'] = var12;
                    var12 = undefined;
                    if(!(var6 !== var15)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var19 = var10 == var15;
                    var18 = undefined;
                    if(var19) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var18 = var15.skuId;
case 12:
                    var19 = var10 != var18;
                    var15 = null;
                    if(!var19) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var15 = var18;
case 14:
                    var12 = var15;
case 10:
                    var9['avatar_decoration_sku_id'] = var12;
                    var12 = undefined;
                    if(!(var6 !== var20)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var15 = {};
                    var18 = null;
                    if(!(var10 !== var20)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var19 = {};
                    var20 = var20.skuId;
                    var19['sku_id'] = var20;
                    var18 = var19;
case 18:
                    var15['nameplate'] = var18;
                    var12 = var15;
case 16:
                    var9['collectibles'] = var12;
                    var15 = var6 !== var17;
                    var12 = undefined;
                    if(!var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var18 = null;
                    if(!(var10 !== var17)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var18 = var17.fontId;
case 22:
                    var12 = var18;
case 20:
                    var9['display_name_font_id'] = var12;
                    var12 = undefined;
                    if(!var15) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var18 = null;
                    if(!(var10 !== var17)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var18 = var17.effectId;
case 26:
                    var12 = var18;
case 24:
                    var9['display_name_effect_id'] = var12;
                    var12 = undefined;
                    if(!var15) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var15 = null;
                    if(!(var15 !== var17)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var15 = var17.colors;
case 30:
                    var12 = var15;
case 28:
                    var9['display_name_colors'] = var12;
                    var16 = var9;
case 32: // try_start_0
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var9 = 3;
                    var9 = var15[var9];
                    var9 = var12.bind(var6)(var9);
                    var15 = var9.HTTP;
                    var12 = var15.patch;
                    var9 = {};
                    var19 = _closure1_slot4;
                    var18 = var19.SET_GUILD_MEMBER;
                    var17 = var7;
                    var17 = var18.bind(var19)(var17);
                    var9['url'] = var17;
                    var9['body'] = var16;
                    var16 = true;
                    var9['oldFormErrors'] = var16;
                    var16 = false;
                    var9['rejectWithError'] = var16;
                    var9 = var12.bind(var15)(var9);
                    SaveGenerator(address=415);
case 33:
                    return var9;
case 34:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                    var11 = var9;
                    var18 = var9.body;
                    var15 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var16 = var12[var8];
                    var20 = var15.bind(var6)(var16);
                    var19 = var20.dispatch;
                    var16 = {};
                    var17 = 'USER_PROFILE_SETTINGS_SUBMIT_SUCCESS';
                    var16['type'] = var17;
                    var17 = var7;
                    var16['guildId'] = var17;
                    var16 = var19.bind(var20)(var16);
                    var12 = var12[var8];
                    var16 = var15.bind(var6)(var12);
                    var15 = var16.dispatch;
                    var12 = {};
                    var19 = 'GUILD_MEMBER_PROFILE_UPDATE';
                    var12['type'] = var19;
                    var12['guildMember'] = var18;
                    var12['guildId'] = var17;
                    var12 = var15.bind(var16)(var12);
                    var14 = var10 == var14;
                    var12 = var14;
                    if(!var14) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var12 = var10 == var13;
case 37:
                    if(var12) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var12 = var12[var8];
                    var14 = var13.bind(var6)(var12);
                    var13 = var14.dispatch;
                    var12 = {};
                    var15 = 'RECENT_AVATARS_UPDATE';
                    var12['type'] = var15;
                    var12 = var13.bind(var14)(var12);
case 39: // try_end0
                    return var11;
case 35:
                    return var9;
case 41: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var3 = var9;
                    var9 = var9.body;
                    var5 = var9;
                    var11 = var10 == var9;
                    var9 = undefined;
                    if(var11) { _fun0001_ip = 42; continue _fun0001 }
case 43:
                    var11 = var5;
                    var9 = var11.username;
case 42:
                    if(!(var10 != var9)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
                    var9 = var5.username;
                    var5['nick'] = var9;
                    var5 = delete var5.username;
case 44:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'USER_PROFILE_SETTINGS_SUBMIT_FAILURE';
                    var4['type'] = var8;
                    var4['guildId'] = var7;
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
        var5 = 'USER_PROFILE_SETTINGS_SET_GUILD';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
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
        var5 = 'USER_PROFILE_SETTINGS_INIT';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['initGuildIdentitySettings'] = var4;
    var4 = function resetPendingMemberChanges() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES';
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
        var5 = 'USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
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
        var5 = 'USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES';
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
        var5 = 'USER_PROFILE_SETTINGS_CLEAR_ERRORS';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearErrors'] = var2;
    return var1;
})();