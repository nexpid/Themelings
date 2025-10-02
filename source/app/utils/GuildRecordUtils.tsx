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
            var6 = arg1;
            var1 = arg2;
            var5 = _closure1_slot6;
            var4 = _closure1_slot8;
            var3 = {};
            var2 = var6.id;
            var3['id'] = var2;
            var2 = var1.joinedAt;
            var3['joinedAt'] = var2;
            var1 = var1.premiumSubscriberCount;
            var3['premiumSubscriberCount'] = var1;
            var1 = var6.name;
            var3['name'] = var1;
            var7 = var6.description;
            var1 = null;
            var9 = var1 != var7;
            var2 = null;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7;
case 2:
            var3['description'] = var2;
            var7 = var6.icon;
            var9 = var1 != var7;
            var2 = null;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var7;
case 4:
            var3['icon'] = var2;
            var7 = var6.splash;
            var9 = var1 != var7;
            var2 = null;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var7;
case 6:
            var3['splash'] = var2;
            var7 = var6.banner;
            var9 = var1 != var7;
            var2 = null;
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var7;
case 8:
            var3['banner'] = var2;
            var7 = var6.home_header;
            var9 = var1 != var7;
            var2 = null;
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var7;
case 10:
            var3['homeHeader'] = var2;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var7 = var7[var2];
            var2 = undefined;
            var10 = var9.bind(var2)(var7);
            var9 = var10.toSetInplace;
            var7 = var6.features;
            var7 = var9.bind(var10)(var7);
            var3['features'] = var7;
            var7 = var6.preferred_locale;
            if(!(var1 == var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = _closure1_slot7;
            var7 = var9.preferredLocale;
case 12:
            var3['preferredLocale'] = var7;
            var7 = var6.owner_id;
            var3['ownerId'] = var7;
            var9 = var6.application_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var9;
case 14:
            var3['application_id'] = var7;
            var9 = var6.afk_channel_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var9;
case 16:
            var3['afkChannelId'] = var7;
            var7 = var6.afk_timeout;
            if(!(var1 == var7)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = _closure1_slot7;
            var7 = var9.afkTimeout;
case 18:
            var3['afkTimeout'] = var7;
            var9 = var6.system_channel_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = var9;
case 20:
            var3['systemChannelId'] = var7;
            var7 = var6.verification_level;
            if(!(var1 == var7)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = _closure1_slot7;
            var7 = var9.verificationLevel;
case 22:
            var3['verificationLevel'] = var7;
            var7 = var6.explicit_content_filter;
            if(!(var1 == var7)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var9 = _closure1_slot7;
            var7 = var9.explicitContentFilter;
case 24:
            var3['explicitContentFilter'] = var7;
            var7 = var6.default_message_notifications;
            var3['defaultMessageNotifications'] = var7;
            var7 = var6.mfa_level;
            if(!(var1 == var7)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var9 = _closure1_slot7;
            var7 = var9.mfaLevel;
case 26:
            var3['mfaLevel'] = var7;
            var9 = var6.vanity_url_code;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var7 = var9;
case 28:
            var3['vanityURLCode'] = var7;
            var7 = var6.premium_tier;
            if(!(var1 == var7)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var9 = _closure1_slot7;
            var7 = var9.premiumTier;
case 30:
            var3['premiumTier'] = var7;
            var7 = var6.premium_progress_bar_enabled;
            if(var7) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var9 = _closure1_slot7;
            var7 = var9.premiumProgressBarEnabled;
case 32:
            var3['premiumProgressBarEnabled'] = var7;
            var7 = var6.system_channel_flags;
            var3['systemChannelFlags'] = var7;
            var9 = var6.discovery_splash;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var7 = var9;
case 34:
            var3['discoverySplash'] = var7;
            var9 = var6.rules_channel_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var7 = var9;
case 36:
            var3['rulesChannelId'] = var7;
            var9 = var6.safety_alerts_channel_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var7 = var9;
case 38:
            var3['safetyAlertsChannelId'] = var7;
            var9 = var6.public_updates_channel_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var7 = var9;
case 40:
            var3['publicUpdatesChannelId'] = var7;
            var7 = var6.max_stage_video_channel_users;
            if(!(var1 == var7)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var9 = _closure1_slot7;
            var7 = var9.maxStageVideoChannelUsers;
case 42:
            var3['maxStageVideoChannelUsers'] = var7;
            var7 = var6.max_video_channel_users;
            if(!(var1 == var7)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var9 = _closure1_slot7;
            var7 = var9.maxVideoChannelUsers;
case 44:
            var3['maxVideoChannelUsers'] = var7;
            var7 = var6.max_members;
            if(!(var1 == var7)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var9 = _closure1_slot7;
            var7 = var9.maxMembers;
case 46:
            var3['maxMembers'] = var7;
            var7 = var6.nsfw_level;
            if(!(var1 == var7)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var8 = _closure1_slot7;
            var7 = var8.nsfwLevel;
case 48:
            var3['nsfwLevel'] = var7;
            var8 = var6.owner_configured_content_level;
            var9 = var1 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var7 = var8;
case 50:
            var3['ownerConfiguredContentLevel'] = var7;
            var8 = var6.hub_type;
            var9 = var1 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var7 = var8;
case 52:
            var3['hubType'] = var7;
            var8 = var6.latest_onboarding_question_id;
            var9 = var1 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var7 = var8;
case 54:
            var3['latestOnboardingQuestionId'] = var7;
            var8 = var6.profile;
            var9 = var1 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var7 = var8;
case 56:
            var3['profile'] = var7;
            var7 = var6.premium_features;
            var8 = var1 != var7;
            var7 = null;
            if(!var8) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var9 = var6.premium_features;
            var8 = {};
            var10 = var9.features;
            var8['features'] = var10;
            var10 = var9.additional_emoji_slots;
            var8['additionalEmojiSlots'] = var10;
            var10 = var9.additional_sticker_slots;
            var8['additionalStickerSlots'] = var10;
            var9 = var9.additional_sound_slots;
            var8['additionalSoundSlots'] = var9;
            var7 = var8;
case 58:
            var3['premiumFeatures'] = var7;
            var7 = var6.moderator_reporting;
            var7 = var1 != var7;
            var1 = null;
            if(!var7) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var7 = var6.moderator_reporting;
            var6 = {};
            var8 = var7.moderator_reporting_enabled;
            var6['moderatorReportingEnabled'] = var8;
            var7 = var7.moderator_report_channel_id;
            var6['moderatorReportChannelId'] = var7;
            var1 = var6;
case 60:
            var3['moderatorReporting'] = var1;
            var1 = arg3;
            var1 = var5.bind(var2)(var4, var1, var3);
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
    var6 = 5;
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
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var2 = var1.joined_at;
            var3 = null;
            if(!(var3 == var2)) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var4 = var3 == var5;
            var2 = undefined;
            if(var4) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var2 = var5.joinedAt;
case 64:
            var4 = var3 != var2;
            var7 = null;
            if(!var4) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var7 = var2;
case 66:
            _fun0002_ip = 68; continue _fun0002;
case 62:
            var2 = global;
            var6 = var2.Date;
            var12 = var1.joined_at;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var13 = var4;
            var2 = new var13[var6](var12, var11);
            var7 = var2 instanceof Object ? var2 : var4;
case 68:
            var2 = var1.premium_subscription_count;
            var4 = var3 != var2;
            var6 = 0;
            if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = var2;
case 4:
            var2 = var1.properties;
            if(!(var3 != var2)) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var8 = _closure1_slot10;
            var4 = var1.properties;
            var2 = {};
            var2['joinedAt'] = var7;
            var2['premiumSubscriberCount'] = var6;
            var1 = undefined;
            var1 = var8.bind(var1)(var4, var2, var5);
            _fun0002_ip = 71; continue _fun0002;
case 69:
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
case 71:
            return var1;
        }
    };
    var3['fromServer'] = var5;
    var5 = function attachSerializedData(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(!var5) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var7 = var2.joinedAt;
            var5 = var7.toISOString;
            var6 = var5.bind(var7)();
case 72:
            var5 = 'joinedAt';
            var1[var5] = var6;
            var5 = global;
            var6 = var5.Array;
            var5 = var6.from;
            var2 = var2.features;
            var5 = var5.bind(var6)(var2);
            var2 = 'features';
            var1[var2] = var5;
            var5 = arg2;
            var2 = 'roles';
            var1[var2] = var5;
            var2 = var3 != var4;
            var3 = null;
            if(!var2) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var2 = {};
            var5 = var4.userId;
            var2['userId'] = var5;
            var4 = var4.roles;
            var2['roles'] = var4;
            var3 = var2;
case 74:
            var2 = 'member';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['attachSerializedData'] = var5;
    var5 = function fromBackgroundSync(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var4 = var2.properties;
            var3 = null;
            var1 = var6;
            if(!(var3 != var4)) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var5 = _closure1_slot10;
            var4 = var2.properties;
            var3 = {};
            var2 = var6.joinedAt;
            var3['joinedAt'] = var2;
            var2 = var6.premiumSubscriberCount;
            var3['premiumSubscriberCount'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3, var6);
case 76:
            return var1;
        }
    };
    var3['fromBackgroundSync'] = var5;
    var5 = function fromGuild(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot10;
            var2 = {};
            var6 = var5.joined_at;
            var1 = null;
            if(!(var1 == var6)) { _fun0005_ip = 78; continue _fun0005 }
case 65:
            var7 = var1 == var4;
            var6 = undefined;
            if(var7) { _fun0005_ip = 67; continue _fun0005 }
case 79:
            var6 = var4.joinedAt;
case 67:
            var7 = var1 != var6;
            var1 = null;
            if(!var7) { _fun0005_ip = 80; continue _fun0005 }
case 72:
            var1 = var6;
case 80:
            _fun0005_ip = 81; continue _fun0005;
case 78:
            var6 = global;
            var8 = var6.Date;
            var11 = var5.joined_at;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var6 = new var12[var8](var11, var10);
            var1 = var6 instanceof Object ? var6 : var7;
case 81:
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
            if(!(var6 == var5)) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            var7 = _closure1_slot7;
            var5 = var7.premiumSubscriberCount;
case 82:
            var2['premiumSubscriberCount'] = var5;
            var5 = var4.premiumTier;
            if(!(var6 == var5)) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var6 = _closure1_slot7;
            var5 = var6.premiumTier;
case 84:
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
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            if(!var5) { _fun0007_ip = 62; continue _fun0007 }
case 86:
            var1 = var4;
case 62:
            var2['icon'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromStoreListingGuild'] = var5;
    var5 = function fromDirectoryGuild(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            if(!var8) { _fun0008_ip = 87; continue _fun0008 }
case 88:
            var6 = var7;
case 87:
            var2['icon'] = var6;
            var7 = var4.description;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0008_ip = 82; continue _fun0008 }
case 76:
            var6 = var7;
case 82:
            var2['description'] = var6;
            var6 = var4.splash;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0008_ip = 89; continue _fun0008 }
case 90:
            var5 = var6;
case 89:
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
            if(!var8) { _fun0009_ip = 67; continue _fun0009 }
case 91:
            var6 = var7;
case 67:
            var2['name'] = var6;
            var7 = var4.icon;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0009_ip = 92; continue _fun0009 }
case 83:
            var6 = var7;
case 92:
            var2['icon'] = var6;
            var7 = var4.description;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0009_ip = 93; continue _fun0009 }
case 68:
            var6 = var7;
case 93:
            var2['description'] = var6;
            var6 = var4.splash;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0009_ip = 94; continue _fun0009 }
case 95:
            var5 = var6;
case 94:
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
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
            if(!var8) { _fun0010_ip = 87; continue _fun0010 }
case 88:
            var1 = var7;
case 87:
            var2['icon'] = var1;
            var7 = var4.description;
            var8 = var6 != var7;
            var1 = null;
            if(!var8) { _fun0010_ip = 82; continue _fun0010 }
case 76:
            var1 = var7;
case 82:
            var2['description'] = var1;
            var7 = var4.splash;
            var8 = var6 != var7;
            var1 = null;
            if(!var8) { _fun0010_ip = 89; continue _fun0010 }
case 90:
            var1 = var7;
case 89:
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
            if(!(var6 == var4)) { _fun0010_ip = 96; continue _fun0010 }
case 97:
            var5 = _closure1_slot7;
            var4 = var5.verificationLevel;
case 96:
            var2['verificationLevel'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromVerificationGateGuild'] = var5;
    var5 = function fromClientDiscoverableGuild(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
            if(!var8) { _fun0011_ip = 87; continue _fun0011 }
case 88:
            var1 = var6;
case 87:
            var2['description'] = var1;
            var6 = var5.splash;
            var8 = var4 != var6;
            var1 = null;
            if(!var8) { _fun0011_ip = 98; continue _fun0011 }
case 99:
            var1 = var6;
case 98:
            var2['splash'] = var1;
            var6 = var5.banner;
            var8 = var4 != var6;
            var1 = null;
            if(!var8) { _fun0011_ip = 100; continue _fun0011 }
case 101:
            var1 = var6;
case 100:
            var2['banner'] = var1;
            var1 = var5.preferredLocale;
            if(!(var4 == var1)) { _fun0011_ip = 102; continue _fun0011 }
case 70:
            var6 = _closure1_slot7;
            var1 = var6.preferredLocale;
case 102:
            var2['preferredLocale'] = var1;
            var6 = var5.icon;
            var8 = var4 != var6;
            var1 = null;
            if(!var8) { _fun0011_ip = 9; continue _fun0011 }
case 103:
            var1 = var6;
case 9:
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
            if(!(var4 == var6)) { _fun0011_ip = 104; continue _fun0011 }
case 105:
            var7 = _closure1_slot7;
            var6 = var7.premiumSubscriberCount;
case 104:
            var2['premiumSubscriberCount'] = var6;
            var5 = var5.discoverySplash;
            var6 = var4 != var5;
            var4 = null;
            if(!var6) { _fun0011_ip = 106; continue _fun0011 }
case 107:
            var4 = var5;
case 106:
            var2['discoverySplash'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromClientDiscoverableGuild'] = var5;
    var5 = function fromGuildBasic(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            if(!var8) { _fun0012_ip = 87; continue _fun0012 }
case 88:
            var6 = var7;
case 87:
            var2['icon'] = var6;
            var7 = var4.description;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0012_ip = 82; continue _fun0012 }
case 76:
            var6 = var7;
case 82:
            var2['description'] = var6;
            var7 = var4.splash;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0012_ip = 89; continue _fun0012 }
case 90:
            var6 = var7;
case 89:
            var2['splash'] = var6;
            var6 = var4.discovery_splash;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0012_ip = 108; continue _fun0012 }
case 109:
            var5 = var6;
case 108:
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
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot12;
            var2 = {};
            var1 = var5.id;
            var2['id'] = var1;
            var1 = var5.name;
            if(var1) { _fun0013_ip = 64; continue _fun0013 }
case 110:
            var1 = '';
case 64:
            var2['name'] = var1;
            var1 = var5.description;
            if(var1) { _fun0013_ip = 62; continue _fun0013 }
case 66:
            var1 = null;
case 62:
            var2['description'] = var1;
            var1 = var5.ownerId;
            if(var1) { _fun0013_ip = 111; continue _fun0013 }
case 83:
            var1 = null;
case 111:
            var2['ownerId'] = var1;
            var1 = var5.icon;
            if(var1) { _fun0013_ip = 112; continue _fun0013 }
case 3:
            var1 = null;
case 112:
            var2['icon'] = var1;
            var1 = var5.splash;
            if(var1) { _fun0013_ip = 89; continue _fun0013 }
case 81:
            var1 = null;
case 89:
            var2['splash'] = var1;
            var1 = var5.banner;
            if(var1) { _fun0013_ip = 113; continue _fun0013 }
case 94:
            var1 = null;
case 113:
            var2['banner'] = var1;
            var1 = var5.homeHeader;
            if(var1) { _fun0013_ip = 114; continue _fun0013 }
case 115:
            var1 = null;
case 114:
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
            if(var4) { _fun0013_ip = 116; continue _fun0013 }
case 117:
            var6 = _closure1_slot7;
            var4 = var6.preferredLocale;
case 116:
            var2['preferredLocale'] = var4;
            var4 = var5.afkChannelId;
            if(var4) { _fun0013_ip = 71; continue _fun0013 }
case 118:
            var4 = null;
case 71:
            var2['afkChannelId'] = var4;
            var4 = var5.afkTimeout;
            var2['afkTimeout'] = var4;
            var4 = var5.systemChannelId;
            if(var4) { _fun0013_ip = 119; continue _fun0013 }
case 120:
            var4 = null;
case 119:
            var2['systemChannelId'] = var4;
            var4 = var5.verificationLevel;
            if(var4) { _fun0013_ip = 121; continue _fun0013 }
case 122:
            var6 = _closure1_slot7;
            var4 = var6.verificationLevel;
case 121:
            var2['verificationLevel'] = var4;
            var6 = var5.joinedAt;
            var8 = global;
            var4 = var8.Date;
            var4 = var6 instanceof var4;
            var6 = var5.joinedAt;
            if(var4) { _fun0013_ip = 123; continue _fun0013 }
case 124:
            var4 = null;
            if(!(var4 == var6)) { _fun0013_ip = 125; continue _fun0013 }
case 126:
            var4 = var5.joinedAt;
            _fun0013_ip = 127; continue _fun0013;
case 125:
            var10 = var8.Date;
            var11 = var5.joinedAt;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var12 = var9;
            var8 = new var12[var10](var11, var10);
            var4 = var8 instanceof Object ? var8 : var9;
case 127:
            _fun0013_ip = 128; continue _fun0013;
case 123:
            var4 = var6;
case 128:
            var2['joinedAt'] = var4;
            var4 = var5.defaultMessageNotifications;
            if(var4) { _fun0013_ip = 22; continue _fun0013 }
case 23:
            var6 = _closure1_slot7;
            var4 = var6.defaultMessageNotifications;
case 22:
            var2['defaultMessageNotifications'] = var4;
            var4 = var5.mfaLevel;
            if(var4) { _fun0013_ip = 129; continue _fun0013 }
case 130:
            var6 = _closure1_slot7;
            var4 = var6.mfaLevel;
case 129:
            var2['mfaLevel'] = var4;
            var4 = var5.application_id;
            if(var4) { _fun0013_ip = 131; continue _fun0013 }
case 132:
            var4 = null;
case 131:
            var2['application_id'] = var4;
            var4 = var5.explicitContentFilter;
            if(var4) { _fun0013_ip = 133; continue _fun0013 }
case 134:
            var6 = _closure1_slot7;
            var4 = var6.explicitContentFilter;
case 133:
            var2['explicitContentFilter'] = var4;
            var4 = var5.vanityURLCode;
            if(var4) { _fun0013_ip = 135; continue _fun0013 }
case 136:
            var4 = null;
case 135:
            var2['vanityURLCode'] = var4;
            var4 = var5.premiumTier;
            if(var4) { _fun0013_ip = 137; continue _fun0013 }
case 138:
            var6 = _closure1_slot7;
            var4 = var6.premiumTier;
case 137:
            var2['premiumTier'] = var4;
            var4 = var5.premiumSubscriberCount;
            if(var4) { _fun0013_ip = 139; continue _fun0013 }
case 140:
            var6 = _closure1_slot7;
            var4 = var6.premiumSubscriberCount;
case 139:
            var2['premiumSubscriberCount'] = var4;
            var4 = var5.premiumProgressBarEnabled;
            if(var4) { _fun0013_ip = 141; continue _fun0013 }
case 142:
            var6 = _closure1_slot7;
            var4 = var6.premiumProgressBarEnabled;
case 141:
            var2['premiumProgressBarEnabled'] = var4;
            var4 = var5.systemChannelFlags;
            var2['systemChannelFlags'] = var4;
            var4 = var5.discoverySplash;
            if(var4) { _fun0013_ip = 143; continue _fun0013 }
case 144:
            var4 = null;
case 143:
            var2['discoverySplash'] = var4;
            var4 = var5.rulesChannelId;
            if(var4) { _fun0013_ip = 145; continue _fun0013 }
case 146:
            var4 = null;
case 145:
            var2['rulesChannelId'] = var4;
            var4 = var5.safetyAlertsChannelId;
            if(var4) { _fun0013_ip = 147; continue _fun0013 }
case 148:
            var4 = null;
case 147:
            var2['safetyAlertsChannelId'] = var4;
            var4 = var5.publicUpdatesChannelId;
            if(var4) { _fun0013_ip = 149; continue _fun0013 }
case 150:
            var4 = null;
case 149:
            var2['publicUpdatesChannelId'] = var4;
            var4 = var5.maxStageVideoChannelUsers;
            if(var4) { _fun0013_ip = 43; continue _fun0013 }
case 151:
            var6 = _closure1_slot7;
            var4 = var6.maxStageVideoChannelUsers;
case 43:
            var2['maxStageVideoChannelUsers'] = var4;
            var4 = var5.maxVideoChannelUsers;
            if(var4) { _fun0013_ip = 152; continue _fun0013 }
case 153:
            var6 = _closure1_slot7;
            var4 = var6.maxVideoChannelUsers;
case 152:
            var2['maxVideoChannelUsers'] = var4;
            var4 = var5.maxMembers;
            if(var4) { _fun0013_ip = 154; continue _fun0013 }
case 155:
            var6 = _closure1_slot7;
            var4 = var6.maxMembers;
case 154:
            var2['maxMembers'] = var4;
            var6 = var5.nsfwLevel;
            var4 = null;
            if(!(var4 == var6)) { _fun0013_ip = 49; continue _fun0013 }
case 156:
            var7 = _closure1_slot7;
            var6 = var7.nsfwLevel;
case 49:
            var2['nsfwLevel'] = var6;
            var7 = var5.ownerConfiguredContentLevel;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 157; continue _fun0013 }
case 158:
            var6 = var7;
case 157:
            var2['ownerConfiguredContentLevel'] = var6;
            var6 = var5.hubType;
            var2['hubType'] = var6;
            var7 = var5.latestOnboardingQuestionId;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 159; continue _fun0013 }
case 160:
            var6 = var7;
case 159:
            var2['latestOnboardingQuestionId'] = var6;
            var7 = var5.profile;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 161; continue _fun0013 }
case 162:
            var6 = var7;
case 161:
            var2['profile'] = var6;
            var7 = var5.premiumFeatures;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 163; continue _fun0013 }
case 164:
            var6 = var7;
case 163:
            var2['premiumFeatures'] = var6;
            var5 = var5.moderatorReporting;
            var6 = var4 != var5;
            var4 = null;
            if(!var6) { _fun0013_ip = 165; continue _fun0013 }
case 166:
            var4 = var5;
case 165:
            var2['moderatorReporting'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['dangerouslyConstructGuildRecordFromUntypedObject'] = var5;
    var5 = function toGuildProperties(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var2 = var4.id;
            var1['id'] = var2;
            var2 = var4.name;
            var1['name'] = var2;
            var2 = var4.description;
            var1['description'] = var2;
            var2 = var4.icon;
            var1['icon'] = var2;
            var2 = var4.splash;
            var1['splash'] = var2;
            var2 = var4.banner;
            var1['banner'] = var2;
            var2 = var4.homeHeader;
            var1['home_header'] = var2;
            var2 = global;
            var5 = var2.Array;
            var3 = var5.from;
            var2 = var4.features;
            var2 = var3.bind(var5)(var2);
            var1['features'] = var2;
            var2 = var4.preferredLocale;
            var1['preferred_locale'] = var2;
            var2 = var4.ownerId;
            var1['owner_id'] = var2;
            var2 = var4.application_id;
            var1['application_id'] = var2;
            var2 = var4.afkChannelId;
            var1['afk_channel_id'] = var2;
            var2 = var4.afkTimeout;
            var1['afk_timeout'] = var2;
            var2 = var4.systemChannelId;
            var1['system_channel_id'] = var2;
            var2 = var4.verificationLevel;
            var1['verification_level'] = var2;
            var2 = var4.explicitContentFilter;
            var1['explicit_content_filter'] = var2;
            var2 = var4.defaultMessageNotifications;
            var1['default_message_notifications'] = var2;
            var2 = var4.mfaLevel;
            var1['mfa_level'] = var2;
            var5 = var4.vanityURLCode;
            var2 = null;
            var6 = var2 != var5;
            var3 = null;
            if(!var6) { _fun0014_ip = 120; continue _fun0014 }
case 167:
            var3 = var5;
case 120:
            var1['vanity_url_code'] = var3;
            var3 = var4.premiumTier;
            var1['premium_tier'] = var3;
            var3 = var4.premiumProgressBarEnabled;
            var1['premium_progress_bar_enabled'] = var3;
            var3 = var4.premiumFeatures;
            var5 = var2 != var3;
            var3 = null;
            if(!var5) { _fun0014_ip = 168; continue _fun0014 }
case 169:
            var6 = var4.premiumFeatures;
            var5 = {};
            var7 = var6.features;
            var5['features'] = var7;
            var7 = var6.additionalEmojiSlots;
            var5['additional_emoji_slots'] = var7;
            var7 = var6.additionalStickerSlots;
            var5['additional_sticker_slots'] = var7;
            var6 = var6.additionalSoundSlots;
            var5['additional_sound_slots'] = var6;
            var3 = var5;
case 168:
            var1['premium_features'] = var3;
            var3 = var4.systemChannelFlags;
            var1['system_channel_flags'] = var3;
            var3 = var4.discoverySplash;
            var1['discovery_splash'] = var3;
            var3 = var4.rulesChannelId;
            var1['rules_channel_id'] = var3;
            var3 = var4.safetyAlertsChannelId;
            var1['safety_alerts_channel_id'] = var3;
            var3 = var4.publicUpdatesChannelId;
            var1['public_updates_channel_id'] = var3;
            var3 = var4.maxStageVideoChannelUsers;
            var1['max_stage_video_channel_users'] = var3;
            var3 = var4.maxVideoChannelUsers;
            var1['max_video_channel_users'] = var3;
            var3 = var4.maxMembers;
            var1['max_members'] = var3;
            var3 = var4.nsfwLevel;
            var1['nsfw_level'] = var3;
            var3 = _closure1_slot9;
            var5 = var3.AGE_RESTRICTED;
            var6 = new Array(2);
            var6[0] = var5;
            var3 = var3.EXPLICIT;
            var6[1] = var3;
            var5 = var6.includes;
            var3 = var4.nsfwLevel;
            var3 = var5.bind(var6)(var3);
            var1['nsfw'] = var3;
            var3 = var4.ownerConfiguredContentLevel;
            var1['owner_configured_content_level'] = var3;
            var3 = var4.hubType;
            var1['hub_type'] = var3;
            var3 = var4.latestOnboardingQuestionId;
            var1['latest_onboarding_question_id'] = var3;
            var3 = var4.profile;
            var1['profile'] = var3;
            var3 = var4.moderatorReporting;
            var5 = var2 != var3;
            var3 = null;
            if(!var5) { _fun0014_ip = 170; continue _fun0014 }
case 143:
            var5 = var4.moderatorReporting;
            var4 = {};
            var6 = var5.moderatorReportingEnabled;
            var4['moderator_reporting_enabled'] = var6;
            var5 = var5.moderatorReportChannelId;
            var4['moderator_report_channel_id'] = var5;
            var3 = var4;
case 170:
            var1['moderator_reporting'] = var3;
            var1['incidents_data'] = var2;
            return var1;
        }
    };
    var3['toGuildProperties'] = var5;
    var4 = function fromSerializedGuildRecord(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var3 = {};
            var9 = var3;
            var8 = var4;
            var1 = copyDataProperties(var9, var8);
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
            var3[var5] = var6;
            var6 = var4.joinedAt;
            var5 = null;
            var6 = var5 != var6;
            if(!var6) { _fun0015_ip = 108; continue _fun0015 }
case 68:
            var6 = global;
            var7 = var6.Date;
            var9 = var4.joinedAt;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var10 = var6;
            var4 = new var10[var7](var9, var8);
            var5 = var4 instanceof Object ? var4 : var6;
case 108:
            var4 = 'joinedAt';
            var3[var4] = var5;
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