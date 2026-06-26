// app/utils/GuildRecordUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function fromGuildPropertiesWithAdditionalFields(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var1 = arg2;
            var5 = arg3;
            var4 = _closure1_slot6;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = var7.id;
            var2['id'] = var6;
            var6 = var1.joinedAt;
            var2['joinedAt'] = var6;
            var1 = var1.premiumSubscriberCount;
            var2['premiumSubscriberCount'] = var1;
            var1 = var7.name;
            var2['name'] = var1;
            var9 = var7.description;
            var6 = null;
            var10 = var6 != var9;
            var1 = null;
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9;
case 2:
            var2['description'] = var1;
            var9 = var7.icon;
            var10 = var6 != var9;
            var1 = null;
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var9;
case 4:
            var2['icon'] = var1;
            var9 = var7.splash;
            var10 = var6 != var9;
            var1 = null;
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var9;
case 6:
            var2['splash'] = var1;
            var9 = var7.banner;
            var10 = var6 != var9;
            var1 = null;
            if(!var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var9;
case 8:
            var2['banner'] = var1;
            var9 = var7.home_header;
            var10 = var6 != var9;
            var1 = null;
            if(!var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var9;
case 10:
            var2['homeHeader'] = var1;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 3;
            var9 = var9[var1];
            var1 = undefined;
            var11 = var10.bind(var1)(var9);
            var10 = var11.toSetInplace;
            var9 = var7.features;
            var9 = var10.bind(var11)(var9);
            var2['features'] = var9;
            var9 = var7.preferred_locale;
            if(!(var6 == var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = _closure1_slot7;
            var9 = var10.preferredLocale;
case 12:
            var2['preferredLocale'] = var9;
            var9 = var7.owner_id;
            var2['ownerId'] = var9;
            var10 = var7.application_id;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var10;
case 14:
            var2['application_id'] = var9;
            var10 = var7.afk_channel_id;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = var10;
case 16:
            var2['afkChannelId'] = var9;
            var9 = var7.afk_timeout;
            if(!(var6 == var9)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = _closure1_slot7;
            var9 = var10.afkTimeout;
case 18:
            var2['afkTimeout'] = var9;
            var10 = var7.system_channel_id;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var9 = var10;
case 20:
            var2['systemChannelId'] = var9;
            var9 = var7.verification_level;
            if(!(var6 == var9)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var10 = _closure1_slot7;
            var9 = var10.verificationLevel;
case 22:
            var2['verificationLevel'] = var9;
            var9 = var7.explicit_content_filter;
            if(!(var6 == var9)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var10 = _closure1_slot7;
            var9 = var10.explicitContentFilter;
case 24:
            var2['explicitContentFilter'] = var9;
            var9 = var7.default_message_notifications;
            var2['defaultMessageNotifications'] = var9;
            var9 = var7.mfa_level;
            if(!(var6 == var9)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = _closure1_slot7;
            var9 = var10.mfaLevel;
case 26:
            var2['mfaLevel'] = var9;
            var10 = var7.vanity_url_code;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var9 = var10;
case 28:
            var2['vanityURLCode'] = var9;
            var9 = var7.premium_tier;
            if(!(var6 == var9)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var10 = _closure1_slot7;
            var9 = var10.premiumTier;
case 30:
            var2['premiumTier'] = var9;
            var9 = var7.premium_progress_bar_enabled;
            if(var9) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = _closure1_slot7;
            var9 = var10.premiumProgressBarEnabled;
case 32:
            var2['premiumProgressBarEnabled'] = var9;
            var9 = var7.premium_progress_bar_enabled_user_updated_at;
            var10 = var6 != var9;
            var9 = null;
            if(!var10) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var10 = global;
            var12 = var10.Date;
            var15 = var7.premium_progress_bar_enabled_user_updated_at;
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var16 = var11;
            var10 = new var16[var12](var15, var14);
            var9 = var10 instanceof Object ? var10 : var11;
case 34:
            var2['premiumProgressBarEnabledUserUpdatedAt'] = var9;
            var9 = var7.system_channel_flags;
            var2['systemChannelFlags'] = var9;
            var10 = var7.discovery_splash;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var9 = var10;
case 36:
            var2['discoverySplash'] = var9;
            var10 = var7.rules_channel_id;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var9 = var10;
case 38:
            var2['rulesChannelId'] = var9;
            var10 = var7.safety_alerts_channel_id;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var9 = var10;
case 40:
            var2['safetyAlertsChannelId'] = var9;
            var10 = var7.public_updates_channel_id;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var9 = var10;
case 42:
            var2['publicUpdatesChannelId'] = var9;
            var9 = var7.max_stage_video_channel_users;
            if(!(var6 == var9)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var10 = _closure1_slot7;
            var9 = var10.maxStageVideoChannelUsers;
case 44:
            var2['maxStageVideoChannelUsers'] = var9;
            var9 = var7.max_video_channel_users;
            if(!(var6 == var9)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var10 = _closure1_slot7;
            var9 = var10.maxVideoChannelUsers;
case 46:
            var2['maxVideoChannelUsers'] = var9;
            var9 = var7.max_members;
            if(!(var6 == var9)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var10 = _closure1_slot7;
            var9 = var10.maxMembers;
case 48:
            var2['maxMembers'] = var9;
            var9 = var7.nsfw_level;
            if(!(var6 == var9)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var10 = _closure1_slot7;
            var9 = var10.nsfwLevel;
case 50:
            var2['nsfwLevel'] = var9;
            var10 = var7.owner_configured_content_level;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var9 = var10;
case 52:
            var2['ownerConfiguredContentLevel'] = var9;
            var10 = var7.hub_type;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var9 = var10;
case 54:
            var2['hubType'] = var9;
            var10 = var7.latest_onboarding_question_id;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var9 = var10;
case 56:
            var2['latestOnboardingQuestionId'] = var9;
            var10 = var7.profile;
            var11 = var6 != var10;
            var9 = null;
            if(!var11) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var9 = var10;
case 58:
            var2['profile'] = var9;
            var9 = _closure1_slot13;
            var8 = var7.theme;
            var8 = var9.bind(var1)(var8, var5);
            var2['guildTheme'] = var8;
            var8 = var7.premium_features;
            var9 = var6 != var8;
            var8 = null;
            if(!var9) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var10 = var7.premium_features;
            var9 = {};
            var11 = var10.features;
            var9['features'] = var11;
            var11 = var10.additional_emoji_slots;
            var9['additionalEmojiSlots'] = var11;
            var11 = var10.additional_sticker_slots;
            var9['additionalStickerSlots'] = var11;
            var10 = var10.additional_sound_slots;
            var9['additionalSoundSlots'] = var10;
            var8 = var9;
case 60:
            var2['premiumFeatures'] = var8;
            var8 = var7.moderator_reporting;
            var9 = var6 != var8;
            var8 = null;
            if(!var9) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var10 = var7.moderator_reporting;
            var9 = {};
            var11 = var10.moderator_reporting_enabled;
            var9['moderatorReportingEnabled'] = var11;
            var10 = var10.moderator_report_channel_id;
            var9['moderatorReportChannelId'] = var10;
            var8 = var9;
case 62:
            var2['moderatorReporting'] = var8;
            var9 = var7.verification_role_id;
            var10 = var6 != var9;
            var8 = null;
            if(!var10) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var8 = var9;
case 64:
            var2['verificationRoleId'] = var8;
            var9 = var7.game_application_ids;
            var10 = var6 != var9;
            var8 = null;
            if(!var10) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var8 = var9;
case 66:
            var2['gameApplicationIds'] = var8;
            var7 = var7.official_message_color;
            var8 = var6 != var7;
            var6 = null;
            if(!var8) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var6 = var7;
case 68:
            var2['officialMessageColor'] = var6;
            var1 = var4.bind(var1)(var3, var5, var2);
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var2 = function constructFromPartialGuildRecord(arg1) {
        var3 = _closure1_slot12;
        var2 = {};
        var4 = _closure1_slot7;
        var5 = var2;
        var1 = copyDataProperties(var5, var4);
        var4 = arg1;
        var5 = var2;
        var1 = copyDataProperties(var5, var4);
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot11 = var2;
    var1 = function constructGuildInPlace(arg1) {
        var4 = _closure1_slot3;
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function resolveGuildTheme(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var3 = undefined;
            if(!(var3 !== var7)) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var5 = null;
            var2 = var5 != var7;
            var1 = null;
            if(!var2) { _fun0002_ip = 3; continue _fun0002 }
case 72:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var6 = var6.bind(var3)(var2);
            var2 = var6.fromServerGuildTheme;
            var2 = var2.bind(var6)(var7);
            if(!(var5 == var2)) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var2 = {'enabled': false, 'themeSettings': null};
case 73:
            var1 = var2;
case 3:
            _fun0002_ip = 75; continue _fun0002;
case 70:
            var2 = null;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var3 = var4.guildTheme;
case 76:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var2 = var3;
case 78:
            var1 = var2;
case 75:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var9 = var6.constructInPlace;
    var _closure1_slot3 = var9;
    var9 = var6.merge;
    var _closure1_slot4 = var9;
    var9 = var6.objectIsPlainRecordOfType;
    var _closure1_slot5 = var9;
    var6 = var6.tryReuseExistingInPlacePlainRecord;
    var _closure1_slot6 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.GUILD_DEFAULT_PROPERTY_VALUES;
    var _closure1_slot7 = var9;
    var6 = var6.GuildRecordTypeTag;
    var _closure1_slot8 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.GuildNSFWContentLevel;
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/GuildRecordUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function isGuildRecord(arg1) {
        var4 = _closure1_slot5;
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['isGuildRecord'] = var6;
    var3['fromGuildPropertiesWithAdditionalFields'] = var5;
    var5 = function fromServer(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var2 = var1.joined_at;
            var3 = null;
            if(!(var3 == var2)) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var4 = var3 == var5;
            var2 = undefined;
            if(var4) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var2 = var5.joinedAt;
case 82:
            var4 = var3 != var2;
            var7 = null;
            if(!var4) { _fun0003_ip = 84; continue _fun0003 }
case 85:
            var7 = var2;
case 84:
            _fun0003_ip = 2; continue _fun0003;
case 80:
            var2 = global;
            var6 = var2.Date;
            var12 = var1.joined_at;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var13 = var4;
            var2 = new var13[var6](var12, var11);
            var7 = var2 instanceof Object ? var2 : var4;
case 2:
            var2 = var1.premium_subscription_count;
            var4 = var3 != var2;
            var6 = 0;
            if(!var4) { _fun0003_ip = 5; continue _fun0003 }
case 86:
            var6 = var2;
case 5:
            var2 = var1.properties;
            if(!(var3 != var2)) { _fun0003_ip = 87; continue _fun0003 }
case 78:
            var8 = _closure1_slot10;
            var4 = var1.properties;
            var2 = {};
            var2['joinedAt'] = var7;
            var2['premiumSubscriberCount'] = var6;
            var1 = undefined;
            var1 = var8.bind(var1)(var4, var2, var5);
            _fun0003_ip = 88; continue _fun0003;
case 87:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 4;
            var8 = var8[var4];
            var4 = undefined;
            var9 = var9.bind(var4)(var8);
            var8 = var3 != var5;
            var3 = 'If guild.properties is null, existingGuild must be passed in';
            var3 = var9.bind(var4)(var8, var3);
            var3 = _closure1_slot4;
            var2 = {};
            var2['joinedAt'] = var7;
            var2['premiumSubscriberCount'] = var6;
            var1 = var3.bind(var4)(var5, var2);
case 88:
            return var1;
        }
    };
    var3['fromServer'] = var5;
    var5 = function attachSerializedData(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = arg3;
            var1 = {};
            var9 = var1;
            var8 = var2;
            var3 = copyDataProperties(var9, var8);
            var5 = var2.joinedAt;
            var3 = null;
            var5 = var3 != var5;
            var6 = null;
            if(!var5) { _fun0004_ip = 89; continue _fun0004 }
case 90:
            var7 = var2.joinedAt;
            var5 = var7.toISOString;
            var6 = var5.bind(var7)();
case 89:
            var5 = 'joinedAt';
            var1[4] = var6;
            var5 = var2.premiumProgressBarEnabledUserUpdatedAt;
            var5 = var3 != var5;
            var6 = null;
            if(!var5) { _fun0004_ip = 77; continue _fun0004 }
case 73:
            var7 = var2.premiumProgressBarEnabledUserUpdatedAt;
            var5 = var7.toISOString;
            var6 = var5.bind(var7)();
case 77:
            var5 = 'premiumProgressBarEnabledUserUpdatedAt';
            var1[4] = var6;
            var5 = global;
            var6 = var5.Array;
            var5 = var6.from;
            var2 = var2.features;
            var5 = var5.bind(var6)(var2);
            var2 = 'features';
            var1[1] = var5;
            var5 = arg2;
            var2 = 'roles';
            var1[1] = var5;
            var2 = var3 != var4;
            var3 = null;
            if(!var2) { _fun0004_ip = 91; continue _fun0004 }
case 92:
            var2 = {};
            var5 = var4.userId;
            var2['userId'] = var5;
            var4 = var4.roles;
            var2['roles'] = var4;
            var3 = var2;
case 91:
            var2 = 'member';
            var1[1] = var3;
            return var1;
        }
    };
    var3['attachSerializedData'] = var5;
    var5 = function fromBackgroundSync(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var4 = var2.properties;
            var3 = null;
            var1 = var6;
            if(!(var3 != var4)) { _fun0005_ip = 93; continue _fun0005 }
case 94:
            var5 = _closure1_slot10;
            var4 = var2.properties;
            var3 = {};
            var2 = var6.joinedAt;
            var3['joinedAt'] = var2;
            var2 = var6.premiumSubscriberCount;
            var3['premiumSubscriberCount'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3, var6);
case 93:
            return var1;
        }
    };
    var3['fromBackgroundSync'] = var5;
    var5 = function fromGuild(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot10;
            var2 = {};
            var6 = var5.joined_at;
            var1 = null;
            if(!(var1 == var6)) { _fun0006_ip = 95; continue _fun0006 }
case 83:
            var7 = var1 == var4;
            var6 = undefined;
            if(var7) { _fun0006_ip = 85; continue _fun0006 }
case 96:
            var6 = var4.joinedAt;
case 85:
            var7 = var1 != var6;
            var1 = null;
            if(!var7) { _fun0006_ip = 97; continue _fun0006 }
case 89:
            var1 = var6;
case 97:
            _fun0006_ip = 98; continue _fun0006;
case 95:
            var6 = global;
            var8 = var6.Date;
            var11 = var5.joined_at;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var6 = new var12[var8](var11, var10);
            var1 = var6 instanceof Object ? var6 : var7;
case 98:
            var2['joinedAt'] = var1;
            var1 = var5.premium_subscription_count;
            var2['premiumSubscriberCount'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var2, var4);
            return var1;
        }
    };
    var3['fromGuild'] = var5;
    var5 = function fromInviteGuild(arg1) {
        var4 = arg1;
        var3 = _closure1_slot11;
        var2 = {};
        var5 = var4.id;
        var2['id'] = var5;
        var5 = var4.name;
        var2['name'] = var5;
        var5 = var4.description;
        var2['description'] = var5;
        var5 = var4.icon;
        var2['icon'] = var5;
        var5 = var4.splash;
        var2['splash'] = var5;
        var5 = var4.banner;
        var2['banner'] = var5;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 3;
        var5 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var5);
        var6 = var7.toSetInplace;
        var5 = var4.features;
        var5 = var6.bind(var7)(var5);
        var2['features'] = var5;
        var5 = var4.verification_level;
        var2['verificationLevel'] = var5;
        var5 = var4.vanity_url_code;
        var2['vanityURLCode'] = var5;
        var5 = var4.premium_subscription_count;
        var2['premiumSubscriberCount'] = var5;
        var5 = var4.nsfw_level;
        var2['nsfwLevel'] = var5;
        var5 = var4.premium_tier;
        var2['premiumTier'] = var5;
        var4 = var4.home_header;
        var2['homeHeader'] = var4;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['fromInviteGuild'] = var5;
    var5 = function fromGuildProfile(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot11;
            var2 = {};
            var5 = var4.id;
            var2['id'] = var5;
            var5 = var4.name;
            var2['name'] = var5;
            var5 = var4.description;
            var2['description'] = var5;
            var5 = var4.icon;
            var2['icon'] = var5;
            var5 = var4.premiumSubscriberCount;
            var6 = null;
            if(!(var6 == var5)) { _fun0007_ip = 99; continue _fun0007 }
case 100:
            var7 = _closure1_slot7;
            var5 = var7.premiumSubscriberCount;
case 99:
            var2['premiumSubscriberCount'] = var5;
            var5 = var4.premiumTier;
            if(!(var6 == var5)) { _fun0007_ip = 101; continue _fun0007 }
case 102:
            var6 = _closure1_slot7;
            var5 = var6.premiumTier;
case 101:
            var2['premiumTier'] = var5;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.toSetInplace;
            var4 = var4.features;
            var4 = var5.bind(var6)(var4);
            var2['features'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromGuildProfile'] = var5;
    var5 = function fromStoreListingGuild(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot11;
            var2 = {};
            var4 = var1.id;
            var2['id'] = var4;
            var4 = var1.name;
            var2['name'] = var4;
            var4 = var1.icon;
            var1 = null;
            var5 = var1 != var4;
            if(!var5) { _fun0008_ip = 80; continue _fun0008 }
case 103:
            var1 = var4;
case 80:
            var2['icon'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromStoreListingGuild'] = var5;
    var5 = function fromDirectoryGuild(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot11;
            var2 = {};
            var5 = var4.id;
            var2['id'] = var5;
            var5 = var4.name;
            var2['name'] = var5;
            var7 = var4.icon;
            var5 = null;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0009_ip = 104; continue _fun0009 }
case 105:
            var6 = var7;
case 104:
            var2['icon'] = var6;
            var7 = var4.description;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0009_ip = 99; continue _fun0009 }
case 93:
            var6 = var7;
case 99:
            var2['description'] = var6;
            var6 = var4.splash;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0009_ip = 106; continue _fun0009 }
case 107:
            var5 = var6;
case 106:
            var2['splash'] = var5;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.toSetInplace;
            var4 = var4.features;
            var4 = var5.bind(var6)(var4);
            var2['features'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromDirectoryGuild'] = var5;
    var5 = function fromGuildDirectoryEntry(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot11;
            var2 = {};
            var5 = var4.guildId;
            var2['id'] = var5;
            var7 = var4.name;
            var5 = null;
            var8 = var5 != var7;
            var6 = '';
            if(!var8) { _fun0010_ip = 85; continue _fun0010 }
case 108:
            var6 = var7;
case 85:
            var2['name'] = var6;
            var7 = var4.icon;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0010_ip = 109; continue _fun0010 }
case 100:
            var6 = var7;
case 109:
            var2['icon'] = var6;
            var7 = var4.description;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0010_ip = 110; continue _fun0010 }
case 2:
            var6 = var7;
case 110:
            var2['description'] = var6;
            var6 = var4.splash;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0010_ip = 79; continue _fun0010 }
case 111:
            var5 = var6;
case 79:
            var2['splash'] = var5;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.toSetInplace;
            var4 = var4.features;
            var4 = var5.bind(var6)(var4);
            var2['features'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromGuildDirectoryEntry'] = var5;
    var5 = function fromVerificationGateGuild(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot11;
            var2 = {};
            var1 = var4.id;
            var2['id'] = var1;
            var1 = var4.name;
            var2['name'] = var1;
            var7 = var4.icon;
            var6 = null;
            var8 = var6 != var7;
            var1 = null;
            if(!var8) { _fun0011_ip = 104; continue _fun0011 }
case 105:
            var1 = var7;
case 104:
            var2['icon'] = var1;
            var7 = var4.description;
            var8 = var6 != var7;
            var1 = null;
            if(!var8) { _fun0011_ip = 99; continue _fun0011 }
case 93:
            var1 = var7;
case 99:
            var2['description'] = var1;
            var7 = var4.splash;
            var8 = var6 != var7;
            var1 = null;
            if(!var8) { _fun0011_ip = 106; continue _fun0011 }
case 107:
            var1 = var7;
case 106:
            var2['splash'] = var1;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var7 = var7[var1];
            var1 = undefined;
            var9 = var8.bind(var1)(var7);
            var8 = var9.toSetInplace;
            var7 = var4.features;
            var7 = var8.bind(var9)(var7);
            var2['features'] = var7;
            var4 = var4.verification_level;
            if(!(var6 == var4)) { _fun0011_ip = 112; continue _fun0011 }
case 113:
            var5 = _closure1_slot7;
            var4 = var5.verificationLevel;
case 112:
            var2['verificationLevel'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromVerificationGateGuild'] = var5;
    var5 = function fromClientDiscoverableGuild(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot11;
            var2 = {};
            var1 = var5.id;
            var2['id'] = var1;
            var1 = var5.name;
            var2['name'] = var1;
            var6 = var5.description;
            var4 = null;
            var8 = var4 != var6;
            var1 = null;
            if(!var8) { _fun0012_ip = 104; continue _fun0012 }
case 105:
            var1 = var6;
case 104:
            var2['description'] = var1;
            var6 = var5.splash;
            var8 = var4 != var6;
            var1 = null;
            if(!var8) { _fun0012_ip = 114; continue _fun0012 }
case 115:
            var1 = var6;
case 114:
            var2['splash'] = var1;
            var6 = var5.banner;
            var8 = var4 != var6;
            var1 = null;
            if(!var8) { _fun0012_ip = 116; continue _fun0012 }
case 77:
            var1 = var6;
case 116:
            var2['banner'] = var1;
            var1 = var5.preferredLocale;
            if(!(var4 == var1)) { _fun0012_ip = 117; continue _fun0012 }
case 78:
            var6 = _closure1_slot7;
            var1 = var6.preferredLocale;
case 117:
            var2['preferredLocale'] = var1;
            var6 = var5.icon;
            var8 = var4 != var6;
            var1 = null;
            if(!var8) { _fun0012_ip = 118; continue _fun0012 }
case 119:
            var1 = var6;
case 118:
            var2['icon'] = var1;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var6 = var6[var1];
            var1 = undefined;
            var9 = var8.bind(var1)(var6);
            var8 = var9.toSetInplace;
            var6 = var5.features;
            var6 = var8.bind(var9)(var6);
            var2['features'] = var6;
            var6 = var5.premiumSubscriptionCount;
            if(!(var4 == var6)) { _fun0012_ip = 120; continue _fun0012 }
case 121:
            var7 = _closure1_slot7;
            var6 = var7.premiumSubscriberCount;
case 120:
            var2['premiumSubscriberCount'] = var6;
            var5 = var5.discoverySplash;
            var6 = var4 != var5;
            var4 = null;
            if(!var6) { _fun0012_ip = 122; continue _fun0012 }
case 13:
            var4 = var5;
case 122:
            var2['discoverySplash'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromClientDiscoverableGuild'] = var5;
    var5 = function fromGuildBasic(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot11;
            var2 = {};
            var5 = var4.id;
            var2['id'] = var5;
            var5 = var4.name;
            var2['name'] = var5;
            var7 = var4.icon;
            var5 = null;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 104; continue _fun0013 }
case 105:
            var6 = var7;
case 104:
            var2['icon'] = var6;
            var7 = var4.description;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 99; continue _fun0013 }
case 93:
            var6 = var7;
case 99:
            var2['description'] = var6;
            var7 = var4.splash;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 106; continue _fun0013 }
case 107:
            var6 = var7;
case 106:
            var2['splash'] = var6;
            var6 = var4.discovery_splash;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0013_ip = 123; continue _fun0013 }
case 75:
            var5 = var6;
case 123:
            var2['discoverySplash'] = var5;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.toSetInplace;
            var4 = var4.features;
            var4 = var5.bind(var6)(var4);
            var2['features'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromGuildBasic'] = var5;
    var5 = function dangerouslyConstructGuildRecordFromUntypedObject(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot12;
            var2 = {};
            var1 = var5.id;
            var2['id'] = var1;
            var1 = var5.name;
            if(var1) { _fun0014_ip = 82; continue _fun0014 }
case 124:
            var1 = '';
case 82:
            var2['name'] = var1;
            var1 = var5.description;
            if(var1) { _fun0014_ip = 80; continue _fun0014 }
case 84:
            var1 = null;
case 80:
            var2['description'] = var1;
            var1 = var5.ownerId;
            if(var1) { _fun0014_ip = 125; continue _fun0014 }
case 100:
            var1 = null;
case 125:
            var2['ownerId'] = var1;
            var1 = var5.icon;
            if(var1) { _fun0014_ip = 126; continue _fun0014 }
case 73:
            var1 = null;
case 126:
            var2['icon'] = var1;
            var1 = var5.splash;
            if(var1) { _fun0014_ip = 106; continue _fun0014 }
case 98:
            var1 = null;
case 106:
            var2['splash'] = var1;
            var1 = var5.banner;
            if(var1) { _fun0014_ip = 127; continue _fun0014 }
case 79:
            var1 = null;
case 127:
            var2['banner'] = var1;
            var1 = var5.homeHeader;
            if(var1) { _fun0014_ip = 6; continue _fun0014 }
case 128:
            var1 = null;
case 6:
            var2['homeHeader'] = var1;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var8 = var6.bind(var1)(var4);
            var6 = var8.toSetInplace;
            var4 = var5.features;
            var4 = var6.bind(var8)(var4);
            var2['features'] = var4;
            var4 = var5.preferredLocale;
            if(var4) { _fun0014_ip = 129; continue _fun0014 }
case 130:
            var6 = _closure1_slot7;
            var4 = var6.preferredLocale;
case 129:
            var2['preferredLocale'] = var4;
            var4 = var5.afkChannelId;
            if(var4) { _fun0014_ip = 88; continue _fun0014 }
case 131:
            var4 = null;
case 88:
            var2['afkChannelId'] = var4;
            var4 = var5.afkTimeout;
            var2['afkTimeout'] = var4;
            var4 = var5.systemChannelId;
            if(var4) { _fun0014_ip = 132; continue _fun0014 }
case 133:
            var4 = null;
case 132:
            var2['systemChannelId'] = var4;
            var4 = var5.verificationLevel;
            if(var4) { _fun0014_ip = 134; continue _fun0014 }
case 135:
            var6 = _closure1_slot7;
            var4 = var6.verificationLevel;
case 134:
            var2['verificationLevel'] = var4;
            var6 = var5.joinedAt;
            var8 = global;
            var4 = var8.Date;
            var4 = var6 instanceof var4;
            var6 = var5.joinedAt;
            if(var4) { _fun0014_ip = 136; continue _fun0014 }
case 137:
            var4 = null;
            if(!(var4 == var6)) { _fun0014_ip = 138; continue _fun0014 }
case 139:
            var4 = var5.joinedAt;
            _fun0014_ip = 140; continue _fun0014;
case 138:
            var11 = var8.Date;
            var12 = var5.joinedAt;
            var10 = var11.prototype;
            var10 = Object.create(var10, {constructor: {value: var11}});
            var13 = var10;
            var9 = new var13[var11](var12, var11);
            var4 = var9 instanceof Object ? var9 : var10;
case 140:
            _fun0014_ip = 141; continue _fun0014;
case 136:
            var4 = var6;
case 141:
            var2['joinedAt'] = var4;
            var4 = var5.defaultMessageNotifications;
            if(var4) { _fun0014_ip = 142; continue _fun0014 }
case 143:
            var6 = _closure1_slot7;
            var4 = var6.defaultMessageNotifications;
case 142:
            var2['defaultMessageNotifications'] = var4;
            var4 = var5.mfaLevel;
            if(var4) { _fun0014_ip = 144; continue _fun0014 }
case 145:
            var6 = _closure1_slot7;
            var4 = var6.mfaLevel;
case 144:
            var2['mfaLevel'] = var4;
            var4 = var5.application_id;
            if(var4) { _fun0014_ip = 146; continue _fun0014 }
case 147:
            var4 = null;
case 146:
            var2['application_id'] = var4;
            var4 = var5.explicitContentFilter;
            if(var4) { _fun0014_ip = 26; continue _fun0014 }
case 27:
            var6 = _closure1_slot7;
            var4 = var6.explicitContentFilter;
case 26:
            var2['explicitContentFilter'] = var4;
            var4 = var5.vanityURLCode;
            if(var4) { _fun0014_ip = 148; continue _fun0014 }
case 149:
            var4 = null;
case 148:
            var2['vanityURLCode'] = var4;
            var4 = var5.premiumTier;
            if(var4) { _fun0014_ip = 150; continue _fun0014 }
case 151:
            var6 = _closure1_slot7;
            var4 = var6.premiumTier;
case 150:
            var2['premiumTier'] = var4;
            var4 = var5.premiumSubscriberCount;
            if(var4) { _fun0014_ip = 152; continue _fun0014 }
case 153:
            var6 = _closure1_slot7;
            var4 = var6.premiumSubscriberCount;
case 152:
            var2['premiumSubscriberCount'] = var4;
            var4 = var5.premiumProgressBarEnabled;
            if(var4) { _fun0014_ip = 154; continue _fun0014 }
case 155:
            var6 = _closure1_slot7;
            var4 = var6.premiumProgressBarEnabled;
case 154:
            var2['premiumProgressBarEnabled'] = var4;
            var6 = var5.premiumProgressBarEnabledUserUpdatedAt;
            var4 = var8.Date;
            var4 = var6 instanceof var4;
            var6 = var5.premiumProgressBarEnabledUserUpdatedAt;
            if(var4) { _fun0014_ip = 156; continue _fun0014 }
case 157:
            var4 = null;
            var9 = var4 != var6;
            if(!var9) { _fun0014_ip = 158; continue _fun0014 }
case 159:
            var10 = var8.Date;
            var12 = var5.premiumProgressBarEnabledUserUpdatedAt;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var13 = var9;
            var8 = new var13[var10](var12, var11);
            var4 = var8 instanceof Object ? var8 : var9;
case 158:
            _fun0014_ip = 160; continue _fun0014;
case 156:
            var4 = var6;
case 160:
            var2['premiumProgressBarEnabledUserUpdatedAt'] = var4;
            var4 = var5.systemChannelFlags;
            var2['systemChannelFlags'] = var4;
            var4 = var5.discoverySplash;
            if(var4) { _fun0014_ip = 161; continue _fun0014 }
case 162:
            var4 = null;
case 161:
            var2['discoverySplash'] = var4;
            var4 = var5.rulesChannelId;
            if(var4) { _fun0014_ip = 163; continue _fun0014 }
case 164:
            var4 = null;
case 163:
            var2['rulesChannelId'] = var4;
            var4 = var5.safetyAlertsChannelId;
            if(var4) { _fun0014_ip = 165; continue _fun0014 }
case 166:
            var4 = null;
case 165:
            var2['safetyAlertsChannelId'] = var4;
            var4 = var5.publicUpdatesChannelId;
            if(var4) { _fun0014_ip = 167; continue _fun0014 }
case 168:
            var4 = null;
case 167:
            var2['publicUpdatesChannelId'] = var4;
            var4 = var5.maxStageVideoChannelUsers;
            if(var4) { _fun0014_ip = 169; continue _fun0014 }
case 170:
            var6 = _closure1_slot7;
            var4 = var6.maxStageVideoChannelUsers;
case 169:
            var2['maxStageVideoChannelUsers'] = var4;
            var4 = var5.maxVideoChannelUsers;
            if(var4) { _fun0014_ip = 171; continue _fun0014 }
case 172:
            var6 = _closure1_slot7;
            var4 = var6.maxVideoChannelUsers;
case 171:
            var2['maxVideoChannelUsers'] = var4;
            var4 = var5.maxMembers;
            if(var4) { _fun0014_ip = 173; continue _fun0014 }
case 174:
            var6 = _closure1_slot7;
            var4 = var6.maxMembers;
case 173:
            var2['maxMembers'] = var4;
            var6 = var5.nsfwLevel;
            var4 = null;
            if(!(var4 == var6)) { _fun0014_ip = 175; continue _fun0014 }
case 176:
            var7 = _closure1_slot7;
            var6 = var7.nsfwLevel;
case 175:
            var2['nsfwLevel'] = var6;
            var7 = var5.ownerConfiguredContentLevel;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0014_ip = 177; continue _fun0014 }
case 178:
            var6 = var7;
case 177:
            var2['ownerConfiguredContentLevel'] = var6;
            var6 = var5.hubType;
            var2['hubType'] = var6;
            var7 = var5.latestOnboardingQuestionId;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0014_ip = 57; continue _fun0014 }
case 179:
            var6 = var7;
case 57:
            var2['latestOnboardingQuestionId'] = var6;
            var7 = var5.profile;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0014_ip = 59; continue _fun0014 }
case 180:
            var6 = var7;
case 59:
            var2['profile'] = var6;
            var7 = var5.guildTheme;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0014_ip = 181; continue _fun0014 }
case 182:
            var6 = var7;
case 181:
            var2['guildTheme'] = var6;
            var7 = var5.premiumFeatures;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0014_ip = 183; continue _fun0014 }
case 184:
            var6 = var7;
case 183:
            var2['premiumFeatures'] = var6;
            var7 = var5.moderatorReporting;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0014_ip = 185; continue _fun0014 }
case 186:
            var6 = var7;
case 185:
            var2['moderatorReporting'] = var6;
            var7 = var5.gameApplicationIds;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0014_ip = 187; continue _fun0014 }
case 188:
            var6 = var7;
case 187:
            var2['gameApplicationIds'] = var6;
            var7 = var5.officialMessageColor;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0014_ip = 189; continue _fun0014 }
case 190:
            var6 = var7;
case 189:
            var2['officialMessageColor'] = var6;
            var5 = var5.verificationRoleId;
            var6 = var4 != var5;
            var4 = null;
            if(!var6) { _fun0014_ip = 191; continue _fun0014 }
case 192:
            var4 = var5;
case 191:
            var2['verificationRoleId'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['dangerouslyConstructGuildRecordFromUntypedObject'] = var5;
    var5 = function toGuildProperties(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.name;
            var1['name'] = var3;
            var3 = var2.description;
            var1['description'] = var3;
            var3 = var2.icon;
            var1['icon'] = var3;
            var3 = var2.splash;
            var1['splash'] = var3;
            var3 = var2.banner;
            var1['banner'] = var3;
            var3 = var2.homeHeader;
            var1['home_header'] = var3;
            var3 = global;
            var5 = var3.Array;
            var4 = var5.from;
            var3 = var2.features;
            var3 = var4.bind(var5)(var3);
            var1['features'] = var3;
            var3 = var2.preferredLocale;
            var1['preferred_locale'] = var3;
            var3 = var2.ownerId;
            var1['owner_id'] = var3;
            var3 = var2.application_id;
            var1['application_id'] = var3;
            var3 = var2.afkChannelId;
            var1['afk_channel_id'] = var3;
            var3 = var2.afkTimeout;
            var1['afk_timeout'] = var3;
            var3 = var2.systemChannelId;
            var1['system_channel_id'] = var3;
            var3 = var2.verificationLevel;
            var1['verification_level'] = var3;
            var3 = var2.explicitContentFilter;
            var1['explicit_content_filter'] = var3;
            var3 = var2.defaultMessageNotifications;
            var1['default_message_notifications'] = var3;
            var3 = var2.mfaLevel;
            var1['mfa_level'] = var3;
            var5 = var2.vanityURLCode;
            var3 = null;
            var6 = var3 != var5;
            var4 = null;
            if(!var6) { _fun0015_ip = 133; continue _fun0015 }
case 193:
            var4 = var5;
case 133:
            var1['vanity_url_code'] = var4;
            var4 = var2.premiumTier;
            var1['premium_tier'] = var4;
            var4 = var2.premiumProgressBarEnabled;
            var1['premium_progress_bar_enabled'] = var4;
            var6 = var2.premiumProgressBarEnabledUserUpdatedAt;
            var4 = var3 == var6;
            var9 = undefined;
            var5 = undefined;
            if(var4) { _fun0015_ip = 194; continue _fun0015 }
case 195:
            var4 = var6.toISOString;
            var5 = var4.bind(var6)();
case 194:
            var6 = var3 != var5;
            var4 = null;
            if(!var6) { _fun0015_ip = 196; continue _fun0015 }
case 16:
            var4 = var5;
case 196:
            var1['premium_progress_bar_enabled_user_updated_at'] = var4;
            var4 = var2.premiumFeatures;
            var5 = var3 != var4;
            var4 = null;
            if(!var5) { _fun0015_ip = 197; continue _fun0015 }
case 198:
            var6 = var2.premiumFeatures;
            var5 = {};
            var7 = var6.features;
            var5['features'] = var7;
            var7 = var6.additionalEmojiSlots;
            var5['additional_emoji_slots'] = var7;
            var7 = var6.additionalStickerSlots;
            var5['additional_sticker_slots'] = var7;
            var6 = var6.additionalSoundSlots;
            var5['additional_sound_slots'] = var6;
            var4 = var5;
case 197:
            var1['premium_features'] = var4;
            var4 = var2.systemChannelFlags;
            var1['system_channel_flags'] = var4;
            var4 = var2.discoverySplash;
            var1['discovery_splash'] = var4;
            var4 = var2.rulesChannelId;
            var1['rules_channel_id'] = var4;
            var4 = var2.safetyAlertsChannelId;
            var1['safety_alerts_channel_id'] = var4;
            var4 = var2.publicUpdatesChannelId;
            var1['public_updates_channel_id'] = var4;
            var4 = var2.maxStageVideoChannelUsers;
            var1['max_stage_video_channel_users'] = var4;
            var4 = var2.maxVideoChannelUsers;
            var1['max_video_channel_users'] = var4;
            var4 = var2.maxMembers;
            var1['max_members'] = var4;
            var4 = var2.nsfwLevel;
            var1['nsfw_level'] = var4;
            var4 = _closure1_slot9;
            var5 = var4.AGE_RESTRICTED;
            var6 = new Array(2);
            var6[0] = var5;
            var4 = var4.EXPLICIT;
            var6[1] = var4;
            var5 = var6.includes;
            var4 = var2.nsfwLevel;
            var4 = var5.bind(var6)(var4);
            var1['nsfw'] = var4;
            var4 = var2.ownerConfiguredContentLevel;
            var1['owner_configured_content_level'] = var4;
            var4 = var2.hubType;
            var1['hub_type'] = var4;
            var4 = var2.latestOnboardingQuestionId;
            var1['latest_onboarding_question_id'] = var4;
            var4 = var2.profile;
            var1['profile'] = var4;
            var4 = var2.guildTheme;
            var5 = var3 != var4;
            var4 = null;
            if(!var5) { _fun0015_ip = 165; continue _fun0015 }
case 158:
            var6 = var2.guildTheme;
            var5 = {};
            var8 = var6.enabled;
            var5['enabled'] = var8;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 5;
            var7 = var10[var7];
            var8 = var8.bind(var9)(var7);
            var7 = var8.toServerGuildThemeSettings;
            var6 = var6.themeSettings;
            var11 = var7.bind(var8)(var6);
            var12 = var5;
            var6 = copyDataProperties(var12, var11);
            var4 = var5;
case 165:
            var1['theme'] = var4;
            var4 = var2.moderatorReporting;
            var5 = var3 != var4;
            var4 = null;
            if(!var5) { _fun0015_ip = 199; continue _fun0015 }
case 200:
            var6 = var2.moderatorReporting;
            var5 = {};
            var7 = var6.moderatorReportingEnabled;
            var5['moderator_reporting_enabled'] = var7;
            var6 = var6.moderatorReportChannelId;
            var5['moderator_report_channel_id'] = var6;
            var4 = var5;
case 199:
            var1['moderator_reporting'] = var4;
            var4 = var2.officialMessageColor;
            var1['official_message_color'] = var4;
            var1['incidents_data'] = var3;
            var3 = var2.gameApplicationIds;
            var1['game_application_ids'] = var3;
            var2 = var2.verificationRoleId;
            var1['verification_role_id'] = var2;
            return var1;
        }
    };
    var3['toGuildProperties'] = var5;
    var4 = function fromSerializedGuildRecord(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var3 = {};
            var11 = var3;
            var10 = var4;
            var1 = copyDataProperties(var11, var10);
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var5 = var5[var2];
            var2 = undefined;
            var7 = var6.bind(var2)(var5);
            var6 = var7.toSetInplace;
            var5 = var4.features;
            var6 = var6.bind(var7)(var5);
            var5 = 'features';
            var3[4] = var6;
            var6 = var4.joinedAt;
            var5 = null;
            var6 = var5 != var6;
            var7 = null;
            if(!var6) { _fun0016_ip = 201; continue _fun0016 }
case 202:
            var6 = global;
            var9 = var6.Date;
            var11 = var4.joinedAt;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var12 = var8;
            var6 = new var12[var9](var11, var10);
            var7 = var6 instanceof Object ? var6 : var8;
case 201:
            var6 = 'joinedAt';
            var3[5] = var7;
            var6 = var4.premiumProgressBarEnabledUserUpdatedAt;
            var6 = var5 != var6;
            var5 = null;
            if(!var6) { _fun0016_ip = 203; continue _fun0016 }
case 118:
            var6 = global;
            var7 = var6.Date;
            var11 = var4.premiumProgressBarEnabledUserUpdatedAt;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var4 = new var12[var7](var11, var10);
            var5 = var4 instanceof Object ? var4 : var6;
case 203:
            var4 = 'premiumProgressBarEnabledUserUpdatedAt';
            var3[3] = var5;
            var4 = delete var3.roles;
            var4 = delete var3.member;
            var1 = _closure1_slot12;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['fromSerializedGuildRecord'] = var4;
    var3['constructFromPartialGuildRecord'] = var2;
    return var1;
})();