// app/modules/guild_settings/GuildSettingsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.Endpoints;
    var _closure1_slot10 = var8;
    var8 = var2.Layers;
    var8 = var2.GuildSettingsSubsections;
    var _closure1_slot11 = var8;
    var8 = var2.GuildSettingsSections;
    var _closure1_slot12 = var8;
    var8 = var2.GuildFeatures;
    var _closure1_slot13 = var8;
    var2 = var2.Routes;
    var _closure1_slot14 = var2;
    var2 = 8;
    var2 = var6[var2];
    var8 = var7.bind(var1)(var2);
    var2 = var8.prototype;
    var7 = Object.create(var2, {constructor: {value: var8}});
    var12 = 'GuildSettingsActionCreators';
    var13 = var7;
    var2 = new var13[var8](var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot15 = var2;
    var2 = {};
    var7 = function init(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_INIT';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['section'] = var5;
        var5 = arg4;
        var2['subsection'] = var5;
        var5 = arg3;
        var2['location'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['init'] = var7;
    var7 = function open(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot8;
                    var4 = var5.getGuild;
                    var3 = _closure2_slot0;
                    var5 = var4.bind(var5)(var3);
                    var4 = null;
                    var3 = var4 != var5;
                    if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = var5.features;
                    var7 = var8.has;
                    var5 = _closure1_slot13;
                    var5 = var5.COMMUNITY;
                    var3 = var7.bind(var8)(var5);
case 4:
                    if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure2_slot1;
                    var3 = _closure1_slot12;
                    var3 = var3.GUILD_AUTOMOD;
                    if(!(var5 === var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var3 = _closure1_slot12;
                    var3 = var3.SAFETY;
                    _closure2_slot1 = var3;
                    var3 = _closure1_slot11;
                    var3 = var3.SAFETY_AUTOMOD;
                    _closure2_slot3 = var3;
case 8:
                    var5 = _closure2_slot1;
                    var3 = _closure1_slot12;
                    var3 = var3.MEMBER_VERIFICATION;
                    if(!(var5 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 10:
                    var3 = _closure1_slot12;
                    var3 = var3.SAFETY;
                    _closure2_slot1 = var3;
                    var3 = _closure1_slot11;
                    var3 = var3.SAFETY_DM_AND_SPAM_PROTECTION;
                    _closure2_slot3 = var3;
case 6:
                    var10 = _closure1_slot16;
                    var9 = var10.init;
                    var14 = _closure2_slot0;
                    var13 = _closure2_slot1;
                    var12 = _closure2_slot2;
                    var11 = _closure2_slot3;
                    var15 = var10;
                    var3 = var15[var9](var14, var13, var12, var11, var10);
                    var3 = _closure2_slot1;
                    if(!(var4 != var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var7 = _closure1_slot16;
                    var5 = var7.setSection;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot3;
                    var3 = var5.bind(var7)(var4, var3);
case 11:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_SETTINGS_OPEN';
                    var3['type'] = var7;
                    var7 = _closure2_slot0;
                    var3['guildId'] = var7;
                    var7 = _closure2_slot1;
                    var3['section'] = var7;
                    var6 = _closure2_slot3;
                    var3['subsection'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['open'] = var7;
    var7 = function close() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_CLOSE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['close'] = var7;
    var7 = function saveRouteStack(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_SAVE_ROUTE_STACK';
        var2['type'] = var5;
        var5 = arg1;
        var2['state'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['saveRouteStack'] = var7;
    var7 = function setSection(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var4 = _closure1_slot9;
            var3 = var4.getGuildId;
            var6 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var6)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = _closure1_slot8;
            var4 = var5.getGuild;
            var4 = var4.bind(var5)(var6);
            var3 = var3 != var4;
            if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var6 = var4.features;
            var5 = var6.has;
            var4 = _closure1_slot13;
            var4 = var4.COMMUNITY;
            var3 = var5.bind(var6)(var4);
case 15:
            var5 = var7;
            var4 = var2;
            if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var3 = _closure1_slot12;
            var6 = var3.GUILD_AUTOMOD;
            var3 = var7;
            if(!(var7 === var6)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var6 = _closure1_slot12;
            var3 = var6.SAFETY;
            var6 = _closure1_slot11;
            var2 = var6.SAFETY_AUTOMOD;
case 19:
            var6 = _closure1_slot12;
            var6 = var6.MEMBER_VERIFICATION;
            if(!(var3 === var6)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var6 = _closure1_slot12;
            var3 = var6.SAFETY;
            var6 = _closure1_slot11;
            var2 = var6.SAFETY_DM_AND_SPAM_PROTECTION;
case 21:
            var5 = var3;
            var4 = var2;
case 17:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'GUILD_SETTINGS_SET_SECTION';
            var1['type'] = var6;
            var1['section'] = var5;
            var1['subsection'] = var4;
            var1 = var2.bind(var3)(var1);
case 13:
            var1 = undefined;
            return var1;
        }
    };
    var2['setSection'] = var7;
    var7 = function setSearchQuery(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_SET_SEARCH_QUERY';
        var2['type'] = var5;
        var5 = arg1;
        var2['searchQuery'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setSearchQuery'] = var7;
    var7 = function selectRole(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SETTINGS_ROLE_SELECT';
        var1['type'] = var4;
        var4 = arg1;
        var1['roleId'] = var4;
        var4 = arg2;
        var1['searchQuery'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['selectRole'] = var7;
    var7 = function updateEmbed(arg1, arg2, arg3) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var6 = _closure1_slot10;
        var5 = var6.GUILD_WIDGET;
        var5 = var5.bind(var6)(var7);
        var2['url'] = var5;
        var5 = {};
        var6 = arg2;
        var5['enabled'] = var6;
        var6 = arg3;
        var5['channel_id'] = var6;
        var2['body'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var5 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GUILD_SETTINGS_SET_WIDGET';
            var2['type'] = var6;
            var6 = _closure2_slot0;
            var2['guildId'] = var6;
            var6 = var5.body;
            var6 = var6.enabled;
            var2['enabled'] = var6;
            var5 = var5.body;
            var5 = var5.channel_id;
            var2['channelId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['updateEmbed'] = var7;
    var7 = function updateMFALevel(arg1) {
        var1 = arg1;
        var11 = var1.guildId;
        var9 = var1.level;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 10;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var10 = _closure1_slot10;
        var8 = var10.GUILD_MFA;
        var8 = var8.bind(var10)(var11);
        var1['url'] = var8;
        var8 = {};
        var8['level'] = var9;
        var1['body'] = var8;
        var8 = true;
        var1['oldFormErrors'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_SETTINGS_SET_MFA_SUCCESS';
            var1['type'] = var4;
            var4 = arg1;
            var4 = var4.body;
            var4 = var4.level;
            var1['level'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['updateMFALevel'] = var7;
    var7 = function updateIcon(arg1, arg2) {
        var12 = arg1;
        var10 = arg2;
        var _closure2_slot0 = var12;
        var _closure2_slot1 = var10;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var6 = 10;
        var3 = var8[var6];
        var1 = undefined;
        var3 = var7.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.patch;
        var3 = {};
        var11 = _closure1_slot10;
        var9 = var11.GUILD;
        var9 = var9.bind(var11)(var12);
        var3['url'] = var9;
        var9 = {};
        var9['icon'] = var10;
        var3['body'] = var9;
        var9 = true;
        var3['oldFormErrors'] = var9;
        var6 = var8[var6];
        var7 = var7.bind(var1)(var6);
        var6 = var7.rejectWithMigratedError;
        var6 = var6.bind(var7)();
        var3['rejectWithError'] = var6;
        var5 = var4.bind(var5)(var3);
        var4 = var5.then;
        var3 = function() {
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 9;
            var2 = var5[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var2);
            var6 = var7.dispatch;
            var3 = {};
            var2 = 'GUILD_SETTINGS_UPDATE';
            var3['type'] = var2;
            var8 = _closure2_slot1;
            var3['icon'] = var8;
            var3 = var6.bind(var7)(var3);
            var3 = 11;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.checkGuildTemplateDirty;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_SETTINGS_SUBMIT_FAILURE';
            var1['type'] = var4;
            var4 = arg1;
            var4 = var4.body;
            var1['errors'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['updateIcon'] = var7;
    var7 = function cancelChanges(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_CANCEL_CHANGES';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['cancelChanges'] = var7;
    var7 = function updateGuild(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var2 = var6.safetyAlertsChannelId;
            var3 = var6.profile;
            var4 = null;
            var5 = Object.create(var4);
            var1 = 0;
            var5['safetyAlertsChannelId'] = var1;
            var5['profile'] = var1;
            var10 = {};
            var9 = var6;
            var8 = var5;
            var9 = copyDataProperties(var10, var9, var8);
            var5 = {};
            var10 = var5;
            var1 = copyDataProperties(var10, var9);
            if(!(var4 != var3)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var1 = {};
            var6 = var5.profile;
            if(!(var4 == var6)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var6 = {};
case 25:
            var10 = var1;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var3;
            var3 = copyDataProperties(var10, var9);
            var5['profile'] = var1;
case 23:
            var6 = _closure1_slot9;
            var3 = var6.getGuildId;
            var3 = var3.bind(var6)();
            var3 = var4 != var3;
            if(!var3) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var3 = var4 != var2;
case 27:
            if(!var3) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var5['safetyAlertsChannelId'] = var2;
case 29:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GUILD_SETTINGS_UPDATE';
            var2['type'] = var6;
            var10 = var2;
            var9 = var5;
            var5 = copyDataProperties(var10, var9);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['updateGuild'] = var7;
    var7 = function updateGuildProfile(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_SETTINGS_PROFILE_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var6 = arg2;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['updateGuildProfile'] = var7;
    var7 = function saveGuild(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var14 = arg1;
            var3 = arg2;
            var12 = arguments[2];
            var _closure2_slot0 = var14;
            var30 = var3.name;
            var29 = var3.description;
            var28 = var3.icon;
            var27 = var3.splash;
            var26 = var3.banner;
            var25 = var3.homeHeader;
            var22 = var3.afkChannelId;
            var21 = var3.afkTimeout;
            var20 = var3.systemChannelId;
            var19 = var3.verificationLevel;
            var18 = var3.defaultMessageNotifications;
            var17 = var3.explicitContentFilter;
            var24 = var3.features;
            var16 = var3.systemChannelFlags;
            var23 = var3.preferredLocale;
            var15 = var3.rulesChannelId;
            var2 = var3.safetyAlertsChannelId;
            var13 = var3.ownerConfiguredContentLevel;
            var8 = var3.discoverySplash;
            var6 = var3.publicUpdatesChannelId;
            var11 = var3.premiumProgressBarEnabled;
            var9 = var3.profile;
            var5 = var3.moderatorReportingEnabled;
            var4 = var3.officialMessageColor;
            var3 = var3.verificationRoleId;
            var7 = undefined;
            if(!(var12 === var7)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var12 = {};
case 31:
            var _closure2_slot1 = var12;
            var10 = {};
            var10['name'] = var30;
            var10['description'] = var29;
            var10['icon'] = var28;
            var10['splash'] = var27;
            var10['banner'] = var26;
            var10['home_header'] = var25;
            var10['features'] = var24;
            var10['preferred_locale'] = var23;
            var10['afk_channel_id'] = var22;
            var10['afk_timeout'] = var21;
            var10['system_channel_id'] = var20;
            var10['verification_level'] = var19;
            var10['default_message_notifications'] = var18;
            var10['explicit_content_filter'] = var17;
            var10['system_channel_flags'] = var16;
            var10['rules_channel_id'] = var15;
            var10['owner_configured_content_level'] = var13;
            var10['discovery_splash'] = var8;
            var10['public_updates_channel_id'] = var6;
            var10['safety_alerts_channel_id'] = var2;
            var2 = null;
            var8 = var2 != var11;
            var6 = null;
            if(!var8) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var8 = {};
            var8['premium_progress_bar_enabled'] = var11;
            var6 = var8;
case 33:
            var32 = var10;
            var31 = var6;
            var6 = copyDataProperties(var32, var31);
            var6 = var9;
            if(!(var2 != var6)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 12;
            var2 = var11[var2];
            var8 = var8.bind(var7)(var2);
            var2 = var8.toServerGuildProfile;
            var6 = var2.bind(var8)(var9);
case 35:
            var2 = 'profile';
            var10[1] = var6;
            var2 = 'moderator_reporting_enabled';
            var10[1] = var5;
            var2 = 'official_message_color';
            var10[1] = var4;
            var2 = 'verification_role_id';
            var10[1] = var3;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var5 = var3.bind(var7)(var2);
            var4 = var5.dispatch;
            var2 = {};
            var6 = 'GUILD_SETTINGS_SUBMIT';
            var2['type'] = var6;
            var2 = var4.bind(var5)(var2);
            var4 = _closure1_slot9;
            var2 = var4.getPendingOriginalMd5s;
            var5 = var2.bind(var4)();
            var2 = 13;
            var2 = var8[var2];
            var4 = var3.bind(var7)(var2);
            var3 = var4.buildHeadersForMd5;
            var2 = {};
            var6 = _closure1_slot0;
            var9 = 14;
            var13 = var8[var9];
            var13 = var6.bind(var7)(var13);
            var13 = var13.SafetyScannedUploadSurface;
            var15 = var13.GUILD_ICON;
            var13 = var5.icon;
            var2[14] = var13;
            var13 = var8[var9];
            var13 = var6.bind(var7)(var13);
            var13 = var13.SafetyScannedUploadSurface;
            var15 = var13.GUILD_BANNER;
            var13 = var5.banner;
            var2[14] = var13;
            var13 = var8[var9];
            var13 = var6.bind(var7)(var13);
            var13 = var13.SafetyScannedUploadSurface;
            var15 = var13.GUILD_INVITE_SPLASH;
            var13 = var5.splash;
            var2[14] = var13;
            var9 = var8[var9];
            var9 = var6.bind(var7)(var9);
            var9 = var9.SafetyScannedUploadSurface;
            var9 = var9.GUILD_DISCOVERY_SPLASH;
            var5 = var5.discoverySplash;
            var2[8] = var5;
            var9 = var3.bind(var4)(var2);
            var5 = 10;
            var2 = var8[var5];
            var2 = var6.bind(var7)(var2);
            var4 = var2.HTTP;
            var3 = var4.patch;
            var2 = {};
            var13 = _closure1_slot10;
            var11 = var13.GUILD;
            var11 = var11.bind(var13)(var14);
            var2['url'] = var11;
            var11 = {};
            var12 = var12.isForDiscovery;
            var11['for_discovery'] = var12;
            var2['query'] = var11;
            var2['body'] = var10;
            var2['headers'] = var9;
            var9 = true;
            var2['oldFormErrors'] = var9;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.rejectWithMigratedError;
            var5 = var5.bind(var6)();
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.dispatch;
                var2 = {};
                var7 = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                var2['type'] = var7;
                var7 = arg1;
                var7 = var7.body;
                var2['guild'] = var7;
                var2 = var5.bind(var6)(var2);
                var2 = 11;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.checkGuildTemplateDirty;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_SETTINGS_SUBMIT_FAILURE';
                    var4['type'] = var7;
                    var7 = var1.body;
                    var4['errors'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var6 = _closure1_slot15;
                    var5 = var6.error;
                    var4 = {};
                    var3 = var1.body;
                    var4['errors'] = var3;
                    var3 = 'Failed to save guild settings';
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = _closure2_slot1;
                    var3 = var3.throwErr;
                    if(var3) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    return var2;
case 37:
                    var1 = var1.body;
                    throw var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2['saveGuild'] = var7;
    var7 = function updateGuildModeration(arg1, arg2) {
        var12 = arg1;
        var10 = arg2;
        var _closure2_slot0 = var12;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 10;
        var2 = var8[var5];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var11 = _closure1_slot10;
        var9 = var11.GUILD;
        var9 = var9.bind(var11)(var12);
        var2['url'] = var9;
        var9 = {};
        var11 = var10.verificationLevel;
        var9['verification_level'] = var11;
        var10 = var10.explicitContentFilter;
        var9['explicit_content_filter'] = var10;
        var2['body'] = var9;
        var9 = true;
        var2['oldFormErrors'] = var9;
        var5 = var8[var5];
        var6 = var7.bind(var6)(var5);
        var5 = var6.rejectWithMigratedError;
        var5 = var5.bind(var6)();
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.checkGuildTemplateDirty;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            var1 = arg1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['updateGuildModeration'] = var7;
    var7 = function updateGuildPremiumProgressBar(arg1, arg2) {
        var11 = arg1;
        var _closure2_slot0 = var11;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 10;
        var2 = var8[var5];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var10 = _closure1_slot10;
        var9 = var10.GUILD;
        var9 = var9.bind(var10)(var11);
        var2['url'] = var9;
        var9 = {};
        var10 = arg2;
        var9['premium_progress_bar_enabled'] = var10;
        var2['body'] = var9;
        var9 = true;
        var2['oldFormErrors'] = var9;
        var5 = var8[var5];
        var6 = var7.bind(var6)(var5);
        var5 = var6.rejectWithMigratedError;
        var5 = var5.bind(var6)();
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.checkGuildTemplateDirty;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            var1 = arg1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['updateGuildPremiumProgressBar'] = var7;
    var7 = function transferOwnership(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var10 = arg1;
            var9 = arguments[2];
            var8 = arguments[3];
            var6 = undefined;
            if(!(var9 === var6)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var9 = null;
case 39:
            if(!(var8 === var6)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var8 = null;
case 41:
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 15;
            var1 = var7[var1];
            var3 = var2.bind(var6)(var1);
            var2 = var3.patch;
            var1 = {};
            var11 = _closure1_slot10;
            var4 = var11.GUILD;
            var4 = var4.bind(var11)(var10);
            var1['url'] = var4;
            var4 = {};
            var11 = arg2;
            var4['owner_id'] = var11;
            var4['code'] = var8;
            var1['body'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var4 = {};
            var5 = _closure1_slot0;
            var8 = 16;
            var8 = var7[var8];
            var8 = var5.bind(var6)(var8);
            var8 = var8.NetworkActionNames;
            var8 = var8.GUILD_TRANSFER_OWNERSHIP;
            var4['event'] = var8;
            var8 = {};
            var8['guild_id'] = var10;
            var8['verification_type'] = var9;
            var4['properties'] = var8;
            var1['trackedActionData'] = var4;
            var4 = 10;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.rejectWithMigratedError;
            var4 = var4.bind(var5)();
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['transferOwnership'] = var7;
    var7 = function sendTransferOwnershipPincode(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var10 = arg1;
            var9 = arguments[1];
            var6 = undefined;
            if(!(var9 === var6)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var9 = false;
case 43:
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 15;
            var1 = var7[var1];
            var3 = var2.bind(var6)(var1);
            var2 = var3.put;
            var1 = {};
            var8 = _closure1_slot10;
            var4 = var8.GUILD_PINCODE;
            var4 = var4.bind(var8)(var10);
            var1['url'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var4 = {};
            var5 = _closure1_slot0;
            var8 = 16;
            var8 = var7[var8];
            var8 = var5.bind(var6)(var8);
            var8 = var8.NetworkActionNames;
            var8 = var8.GUILD_TRANSFER_OWNERSHIP_SEND_CODE;
            var4['event'] = var8;
            var8 = {};
            var8['guild_id'] = var10;
            var8['is_resend'] = var9;
            var4['properties'] = var8;
            var1['trackedActionData'] = var4;
            var4 = 10;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.rejectWithMigratedError;
            var4 = var4.bind(var5)();
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['sendTransferOwnershipPincode'] = var7;
    var7 = function deleteGuild(arg1) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 10;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var10 = _closure1_slot10;
        var9 = var10.GUILD_DELETE;
        var8 = arg1;
        var8 = var9.bind(var10)(var8);
        var1['url'] = var8;
        var8 = true;
        var1['oldFormErrors'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function() {
            var2 = _closure1_slot16;
            var1 = var2.close;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['deleteGuild'] = var7;
    var7 = function leaveGuild(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0008_ip = 45; continue _fun0008 }
case 46:
            var3 = false;
case 45:
            var _closure2_slot1 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 47; continue _fun0009 }
case 3:
                        var3 = _closure1_slot5;
                        var2 = var3.isLurking;
                        var12 = _closure2_slot0;
                        var6 = var2.bind(var3)(var12);
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var11 = 10;
                        var2 = var2[var11];
                        var3 = undefined;
                        var2 = var7.bind(var3)(var2);
                        var8 = var2.HTTP;
                        var7 = var8.del;
                        var2 = {};
                        var10 = _closure1_slot10;
                        var9 = var10.GUILD_LEAVE;
                        var9 = var9.bind(var10)(var12);
                        var2['url'] = var9;
                        var9 = {};
                        var10 = var6;
                        if(var6) { _fun0009_ip = 48; continue _fun0009 }
case 23:
                        var14 = _closure1_slot7;
                        var13 = var14.isCurrentUserGuest;
                        var12 = _closure2_slot0;
                        var10 = var13.bind(var14)(var12);
case 48:
                        var9['lurking'] = var10;
                        var2['body'] = var9;
                        var9 = true;
                        var2['oldFormErrors'] = var9;
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var9 = var9[var11];
                        var10 = var10.bind(var3)(var9);
                        var9 = var10.rejectWithMigratedError;
                        var9 = var9.bind(var10)();
                        var2['rejectWithError'] = var9;
                        var8 = var7.bind(var8)(var2);
                        var7 = var8.then;
                        var2 = function() {
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 17;
                            var2 = var8[var1];
                            var1 = undefined;
                            var2 = var7.bind(var1)(var2);
                            var4 = var2.AccessibilityAnnouncer;
                            var3 = var4.announce;
                            var2 = 18;
                            var5 = var8[var2];
                            var5 = var7.bind(var1)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var2 = var8[var2];
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2["7iPyVW"];
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = var7.bind(var8)(var2);
                        SaveGenerator(address=191);
case 49:
                        return var2;
case 50:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                        if(var7) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                        var8 = _closure1_slot16;
                        var7 = var8.close;
                        var7 = var7.bind(var8)();
                        var5 = _closure2_slot1;
                        if(!var5) { _fun0009_ip = 53; continue _fun0009 }
case 13:
                        var5 = var6;
case 53:
                        if(!var5) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 19;
                        var5 = var7[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.transitionTo;
                        var4 = _closure1_slot14;
                        var4 = var4.GUILD_DISCOVERY;
                        var4 = var5.bind(var6)(var4);
case 54:
                        return var3;
case 51:
                        return var2;
case 47:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['leaveGuild'] = var7;
    var7 = function updateMemberRoles(arg1, arg2, arg3, arg4, arg5) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var2 = arg5;
        var _closure2_slot4 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 56; continue _fun0010 }
case 44:
                    var7 = _closure1_slot4;
                    var6 = var7.isFullServerPreview;
                    var4 = _closure2_slot0;
                    var4 = var6.bind(var7)(var4);
                    if(!var4) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                    var6 = _closure2_slot1;
                    var7 = _closure1_slot6;
                    var4 = var7.getId;
                    var4 = var4.bind(var7)();
                    if(!(var6 !== var4)) { _fun0010_ip = 59; continue _fun0010 }
case 57:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 10;
                    var4 = var11[var8];
                    var9 = undefined;
                    var4 = var10.bind(var9)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.patch;
                    var4 = {};
                    var15 = _closure1_slot10;
                    var14 = var15.GUILD_MEMBER;
                    var13 = _closure2_slot0;
                    var12 = _closure2_slot1;
                    var12 = var14.bind(var15)(var13, var12);
                    var4['url'] = var12;
                    var12 = {};
                    var13 = _closure2_slot2;
                    var12['roles'] = var13;
                    var4['body'] = var12;
                    var12 = true;
                    var4['oldFormErrors'] = var12;
                    var8 = var11[var8];
                    var9 = var10.bind(var9)(var8);
                    var8 = var9.rejectWithMigratedError;
                    var8 = var8.bind(var9)();
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=182);
case 60:
                    return var4;
case 61:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                    var8 = _closure2_slot3;
                    var7 = var8.forEach;
                    var6 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'GUILD_ROLE_MEMBER_ADD';
                        var1['type'] = var4;
                        var5 = _closure2_slot0;
                        var1['guildId'] = var5;
                        var5 = arg1;
                        var1['roleId'] = var5;
                        var4 = _closure2_slot1;
                        var1['userId'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6);
                    var7 = _closure2_slot4;
                    var6 = var7.forEach;
                    var5 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'GUILD_ROLE_MEMBER_REMOVE';
                        var1['type'] = var4;
                        var5 = _closure2_slot0;
                        var1['guildId'] = var5;
                        var5 = arg1;
                        var1['roleId'] = var5;
                        var4 = _closure2_slot1;
                        var1['userId'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    _fun0010_ip = 64; continue _fun0010;
case 62:
                    return var4;
case 59:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 20;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.updateImpersonatedRoles;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
case 64:
                    var2 = undefined;
                    return var2;
case 56:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['updateMemberRoles'] = var7;
    var7 = function bulkAddMemberRoles(arg1, arg2, arg3) {
        var12 = arg1;
        var11 = arg2;
        var _closure2_slot0 = var12;
        var _closure2_slot1 = var11;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 10;
        var2 = var8[var5];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var10 = _closure1_slot10;
        var9 = var10.GUILD_ROLE_MEMBERS;
        var9 = var9.bind(var10)(var12, var11);
        var2['url'] = var9;
        var9 = {};
        var10 = arg3;
        var9['member_ids'] = var10;
        var2['body'] = var9;
        var5 = var8[var5];
        var6 = var7.bind(var6)(var5);
        var5 = var6.rejectWithMigratedError;
        var5 = var5.bind(var6)();
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GUILD_ROLE_MEMBER_BULK_ADD';
            var2['type'] = var5;
            var6 = _closure2_slot0;
            var2['guildId'] = var6;
            var5 = _closure2_slot1;
            var2['roleId'] = var5;
            var5 = arg1;
            var5 = var5.body;
            var2['added'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['bulkAddMemberRoles'] = var7;
    var7 = function enableIntegration(arg1, arg2, arg3) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 10;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var10 = _closure1_slot10;
        var9 = var10.GUILD_INTEGRATIONS;
        var8 = arg1;
        var8 = var9.bind(var10)(var8);
        var1['url'] = var8;
        var8 = {};
        var9 = arg2;
        var8['type'] = var9;
        var9 = arg3;
        var8['id'] = var9;
        var1['body'] = var8;
        var8 = true;
        var1['oldFormErrors'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['enableIntegration'] = var7;
    var7 = function disableIntegration(arg1, arg2) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 10;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var11 = _closure1_slot10;
        var10 = var11.GUILD_INTEGRATION;
        var9 = arg1;
        var8 = arg2;
        var8 = var10.bind(var11)(var9, var8);
        var1['url'] = var8;
        var8 = true;
        var1['oldFormErrors'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['disableIntegration'] = var7;
    var7 = function updateIntegration(arg1, arg2, arg3, arg4, arg5) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 10;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var11 = _closure1_slot10;
        var10 = var11.GUILD_INTEGRATION;
        var9 = arg1;
        var8 = arg2;
        var8 = var10.bind(var11)(var9, var8);
        var1['url'] = var8;
        var8 = {};
        var9 = arg3;
        var8['expire_behavior'] = var9;
        var9 = arg4;
        var8['expire_grace_period'] = var9;
        var9 = arg5;
        var8['enable_emoticons'] = var9;
        var1['body'] = var8;
        var8 = true;
        var1['oldFormErrors'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['updateIntegration'] = var7;
    var7 = function syncIntegration(arg1, arg2) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var5 = 10;
        var2 = var7[var5];
        var1 = undefined;
        var2 = var6.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.post;
        var2 = {};
        var11 = _closure1_slot10;
        var10 = var11.GUILD_INTEGRATION_SYNC;
        var9 = arg1;
        var8 = arg2;
        var8 = var10.bind(var11)(var9, var8);
        var2['url'] = var8;
        var8 = true;
        var2['oldFormErrors'] = var8;
        var5 = var7[var5];
        var6 = var6.bind(var1)(var5);
        var5 = var6.rejectWithMigratedError;
        var5 = var5.bind(var6)();
        var2['rejectWithError'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['syncIntegration'] = var7;
    var7 = function migratePinPermission(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var8 = _closure1_slot10;
                    var7 = var8.GUILD_MIGRATE_PIN_PERMISSION;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var6 = true;
                    var2['rejectWithError'] = var6;
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.then;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'GUILD_SETTINGS_PIN_PERMISSION_MIGRATED';
                        var1['type'] = var4;
                        var4 = _closure2_slot0;
                        var1['guildId'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=105);
case 67:
                    return var2;
case 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 69; continue _fun0011 }
case 37:
                    return var3;
case 69:
                    return var2;
case 65:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['migratePinPermission'] = var7;
    var7 = function migrateSlowmodePermission(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var8 = _closure1_slot10;
                    var7 = var8.GUILD_MIGRATE_SLOWMODE_PERMISSION;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var6 = true;
                    var2['rejectWithError'] = var6;
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.then;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED';
                        var1['type'] = var4;
                        var4 = _closure2_slot0;
                        var1['guildId'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=105);
case 67:
                    return var2;
case 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 69; continue _fun0012 }
case 37:
                    return var3;
case 69:
                    return var2;
case 65:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['migrateSlowmodePermission'] = var7;
    var7 = function migratePermissions(arg1, arg2) {
        var2 = arg2;
        var3 = arg1;
        var _closure2_slot0 = var3;
        var3 = var2.migratePin;
        var _closure2_slot1 = var3;
        var2 = var2.migrateSlowmode;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 70; continue _fun0013 }
case 66:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0013_ip = 71; continue _fun0013 }
case 39:
                    var5 = _closure1_slot16;
                    var4 = var5.migratePinPermission;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=43);
case 72:
                    return var2;
case 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 74; continue _fun0013 }
case 71:
                    var4 = _closure2_slot2;
                    if(!var4) { _fun0013_ip = 75; continue _fun0013 }
case 76:
                    var5 = _closure1_slot16;
                    var4 = var5.migrateSlowmodePermission;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=82);
case 15:
                    return var3;
case 77:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 78; continue _fun0013 }
case 75:
                    var4 = undefined;
                    return var4;
case 78:
                    return var3;
case 74:
                    return var2;
case 70:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['migratePermissions'] = var7;
    var _closure1_slot16 = var2;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildSettingsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();