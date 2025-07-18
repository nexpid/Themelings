// app/utils/GuildRecordUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function fromGuildPropertiesWithAdditionalFields(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!var9) { _fun0001_ip = 78; continue _fun0001 }
 75:
            var2 = var7;
 78:
            var3['description'] = var2;
            var7 = var6.icon;
            var9 = var1 != var7;
            var2 = null;
            if(!var9) { _fun0001_ip = 99; continue _fun0001 }
 96:
            var2 = var7;
 99:
            var3['icon'] = var2;
            var7 = var6.splash;
            var9 = var1 != var7;
            var2 = null;
            if(!var9) { _fun0001_ip = 121; continue _fun0001 }
 118:
            var2 = var7;
 121:
            var3['splash'] = var2;
            var7 = var6.banner;
            var9 = var1 != var7;
            var2 = null;
            if(!var9) { _fun0001_ip = 144; continue _fun0001 }
 141:
            var2 = var7;
 144:
            var3['banner'] = var2;
            var7 = var6.home_header;
            var9 = var1 != var7;
            var2 = null;
            if(!var9) { _fun0001_ip = 167; continue _fun0001 }
 164:
            var2 = var7;
 167:
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
            if(!(var1 == var7)) { _fun0001_ip = 236; continue _fun0001 }
 226:
            var9 = _closure1_slot7;
            var7 = var9.preferredLocale;
 236:
            var3['preferredLocale'] = var7;
            var7 = var6.owner_id;
            var3['ownerId'] = var7;
            var9 = var6.application_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 270; continue _fun0001 }
 267:
            var7 = var9;
 270:
            var3['application_id'] = var7;
            var9 = var6.afk_channel_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 293; continue _fun0001 }
 290:
            var7 = var9;
 293:
            var3['afkChannelId'] = var7;
            var7 = var6.afk_timeout;
            if(!(var1 == var7)) { _fun0001_ip = 318; continue _fun0001 }
 308:
            var9 = _closure1_slot7;
            var7 = var9.afkTimeout;
 318:
            var3['afkTimeout'] = var7;
            var9 = var6.system_channel_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 341; continue _fun0001 }
 338:
            var7 = var9;
 341:
            var3['systemChannelId'] = var7;
            var7 = var6.verification_level;
            if(!(var1 == var7)) { _fun0001_ip = 366; continue _fun0001 }
 356:
            var9 = _closure1_slot7;
            var7 = var9.verificationLevel;
 366:
            var3['verificationLevel'] = var7;
            var7 = var6.explicit_content_filter;
            if(!(var1 == var7)) { _fun0001_ip = 391; continue _fun0001 }
 381:
            var9 = _closure1_slot7;
            var7 = var9.explicitContentFilter;
 391:
            var3['explicitContentFilter'] = var7;
            var7 = var6.default_message_notifications;
            var3['defaultMessageNotifications'] = var7;
            var7 = var6.mfa_level;
            if(!(var1 == var7)) { _fun0001_ip = 427; continue _fun0001 }
 417:
            var9 = _closure1_slot7;
            var7 = var9.mfaLevel;
 427:
            var3['mfaLevel'] = var7;
            var9 = var6.vanity_url_code;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 450; continue _fun0001 }
 447:
            var7 = var9;
 450:
            var3['vanityURLCode'] = var7;
            var7 = var6.premium_tier;
            if(!(var1 == var7)) { _fun0001_ip = 475; continue _fun0001 }
 465:
            var9 = _closure1_slot7;
            var7 = var9.premiumTier;
 475:
            var3['premiumTier'] = var7;
            var7 = var6.premium_progress_bar_enabled;
            if(var7) { _fun0001_ip = 499; continue _fun0001 }
 489:
            var9 = _closure1_slot7;
            var7 = var9.premiumProgressBarEnabled;
 499:
            var3['premiumProgressBarEnabled'] = var7;
            var7 = var6.system_channel_flags;
            var3['systemChannelFlags'] = var7;
            var9 = var6.discovery_splash;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 533; continue _fun0001 }
 530:
            var7 = var9;
 533:
            var3['discoverySplash'] = var7;
            var9 = var6.rules_channel_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 556; continue _fun0001 }
 553:
            var7 = var9;
 556:
            var3['rulesChannelId'] = var7;
            var9 = var6.safety_alerts_channel_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 579; continue _fun0001 }
 576:
            var7 = var9;
 579:
            var3['safetyAlertsChannelId'] = var7;
            var9 = var6.public_updates_channel_id;
            var10 = var1 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 602; continue _fun0001 }
 599:
            var7 = var9;
 602:
            var3['publicUpdatesChannelId'] = var7;
            var7 = var6.max_stage_video_channel_users;
            if(!(var1 == var7)) { _fun0001_ip = 627; continue _fun0001 }
 617:
            var9 = _closure1_slot7;
            var7 = var9.maxStageVideoChannelUsers;
 627:
            var3['maxStageVideoChannelUsers'] = var7;
            var7 = var6.max_video_channel_users;
            if(!(var1 == var7)) { _fun0001_ip = 652; continue _fun0001 }
 642:
            var9 = _closure1_slot7;
            var7 = var9.maxVideoChannelUsers;
 652:
            var3['maxVideoChannelUsers'] = var7;
            var7 = var6.max_members;
            if(!(var1 == var7)) { _fun0001_ip = 677; continue _fun0001 }
 667:
            var9 = _closure1_slot7;
            var7 = var9.maxMembers;
 677:
            var3['maxMembers'] = var7;
            var7 = var6.nsfw_level;
            if(!(var1 == var7)) { _fun0001_ip = 702; continue _fun0001 }
 692:
            var8 = _closure1_slot7;
            var7 = var8.nsfwLevel;
 702:
            var3['nsfwLevel'] = var7;
            var8 = var6.owner_configured_content_level;
            var9 = var1 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 725; continue _fun0001 }
 722:
            var7 = var8;
 725:
            var3['ownerConfiguredContentLevel'] = var7;
            var8 = var6.hub_type;
            var9 = var1 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 748; continue _fun0001 }
 745:
            var7 = var8;
 748:
            var3['hubType'] = var7;
            var8 = var6.latest_onboarding_question_id;
            var9 = var1 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 771; continue _fun0001 }
 768:
            var7 = var8;
 771:
            var3['latestOnboardingQuestionId'] = var7;
            var8 = var6.profile;
            var9 = var1 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 794; continue _fun0001 }
 791:
            var7 = var8;
 794:
            var3['profile'] = var7;
            var7 = var6.premium_features;
            var8 = var1 != var7;
            var7 = null;
            if(!var8) { _fun0001_ip = 869; continue _fun0001 }
 814:
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
 869:
            var3['premiumFeatures'] = var7;
            var7 = var6.moderator_reporting;
            var7 = var1 != var7;
            var1 = null;
            if(!var7) { _fun0001_ip = 922; continue _fun0001 }
 889:
            var7 = var6.moderator_reporting;
            var6 = {};
            var8 = var7.moderator_reporting_enabled;
            var6['moderatorReportingEnabled'] = var8;
            var7 = var7.moderator_report_channel_id;
            var6['moderatorReportChannelId'] = var7;
            var1 = var6;
 922:
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
 0:
            var1 = arg1;
            var5 = arg2;
            var2 = var1.joined_at;
            var3 = null;
            if(!(var3 == var2)) { _fun0002_ip = 47; continue _fun0002 }
 18:
            var4 = var3 == var5;
            var2 = undefined;
            if(var4) { _fun0002_ip = 33; continue _fun0002 }
 27:
            var2 = var5.joinedAt;
 33:
            var4 = var3 != var2;
            var7 = null;
            if(!var4) { _fun0002_ip = 45; continue _fun0002 }
 42:
            var7 = var2;
 45:
            _fun0002_ip = 81; continue _fun0002;
 47:
            var2 = global;
            var6 = var2.Date;
            var12 = var1.joined_at;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var13 = var4;
            var2 = new var13[var6](var12, var11);
            var7 = var2 instanceof Object ? var2 : var4;
 81:
            var2 = var1.premium_subscription_count;
            var4 = var3 != var2;
            var6 = 0;
            if(!var4) { _fun0002_ip = 99; continue _fun0002 }
 96:
            var6 = var2;
 99:
            var2 = var1.properties;
            if(!(var3 != var2)) { _fun0002_ip = 145; continue _fun0002 }
 109:
            var8 = _closure1_slot10;
            var4 = var1.properties;
            var2 = {};
            var2['joinedAt'] = var7;
            var2['premiumSubscriberCount'] = var6;
            var1 = undefined;
            var1 = var8.bind(var1)(var4, var2, var5);
            _fun0002_ip = 208; continue _fun0002;
 145:
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
 208:
            return var1;
        }
    };
    var3['fromServer'] = var5;
    var5 = function attachSerializedData(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(!var5) { _fun0003_ip = 51; continue _fun0003 }
 35:
            var7 = var2.joinedAt;
            var5 = var7.toISOString;
            var6 = var5.bind(var7)();
 51:
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
            if(!var2) { _fun0003_ip = 139; continue _fun0003 }
 114:
            var2 = {};
            var5 = var4.userId;
            var2['userId'] = var5;
            var4 = var4.roles;
            var2['roles'] = var4;
            var3 = var2;
 139:
            var2 = 'member';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['attachSerializedData'] = var5;
    var5 = function fromBackgroundSync(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var6 = arg2;
            var4 = var2.properties;
            var3 = null;
            var1 = var6;
            if(!(var3 != var4)) { _fun0004_ip = 67; continue _fun0004 }
 21:
            var5 = _closure1_slot10;
            var4 = var2.properties;
            var3 = {};
            var2 = var6.joinedAt;
            var3['joinedAt'] = var2;
            var2 = var6.premiumSubscriberCount;
            var3['premiumSubscriberCount'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3, var6);
 67:
            return var1;
        }
    };
    var3['fromBackgroundSync'] = var5;
    var5 = function fromGuild(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot10;
            var2 = {};
            var6 = var5.joined_at;
            var1 = null;
            if(!(var1 == var6)) { _fun0005_ip = 56; continue _fun0005 }
 27:
            var7 = var1 == var4;
            var6 = undefined;
            if(var7) { _fun0005_ip = 42; continue _fun0005 }
 36:
            var6 = var4.joinedAt;
 42:
            var7 = var1 != var6;
            var1 = null;
            if(!var7) { _fun0005_ip = 54; continue _fun0005 }
 51:
            var1 = var6;
 54:
            _fun0005_ip = 90; continue _fun0005;
 56:
            var6 = global;
            var8 = var6.Date;
            var11 = var5.joined_at;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var6 = new var12[var8](var11, var10);
            var1 = var6 instanceof Object ? var6 : var7;
 90:
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
 0:
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
            if(!(var6 == var5)) { _fun0006_ip = 70; continue _fun0006 }
 60:
            var7 = _closure1_slot7;
            var5 = var7.premiumSubscriberCount;
 70:
            var2['premiumSubscriberCount'] = var5;
            var5 = var4.premiumTier;
            if(!(var6 == var5)) { _fun0006_ip = 95; continue _fun0006 }
 85:
            var6 = _closure1_slot7;
            var5 = var6.premiumTier;
 95:
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
 0:
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
            if(!var5) { _fun0007_ip = 47; continue _fun0007 }
 44:
            var1 = var4;
 47:
            var2['icon'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromStoreListingGuild'] = var5;
    var5 = function fromDirectoryGuild(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
            if(!var8) { _fun0008_ip = 49; continue _fun0008 }
 46:
            var6 = var7;
 49:
            var2['icon'] = var6;
            var7 = var4.description;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0008_ip = 70; continue _fun0008 }
 67:
            var6 = var7;
 70:
            var2['description'] = var6;
            var6 = var4.splash;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0008_ip = 92; continue _fun0008 }
 89:
            var5 = var6;
 92:
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
 0:
            var4 = arg1;
            var3 = _closure1_slot11;
            var2 = {};
            var5 = var4.guildId;
            var2['id'] = var5;
            var7 = var4.name;
            var5 = null;
            var8 = var5 != var7;
            var6 = '';
            if(!var8) { _fun0009_ip = 42; continue _fun0009 }
 39:
            var6 = var7;
 42:
            var2['name'] = var6;
            var7 = var4.icon;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0009_ip = 63; continue _fun0009 }
 60:
            var6 = var7;
 63:
            var2['icon'] = var6;
            var7 = var4.description;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0009_ip = 84; continue _fun0009 }
 81:
            var6 = var7;
 84:
            var2['description'] = var6;
            var6 = var4.splash;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0009_ip = 106; continue _fun0009 }
 103:
            var5 = var6;
 106:
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
 0:
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
            if(!var8) { _fun0010_ip = 49; continue _fun0010 }
 46:
            var1 = var7;
 49:
            var2['icon'] = var1;
            var7 = var4.description;
            var8 = var6 != var7;
            var1 = null;
            if(!var8) { _fun0010_ip = 70; continue _fun0010 }
 67:
            var1 = var7;
 70:
            var2['description'] = var1;
            var7 = var4.splash;
            var8 = var6 != var7;
            var1 = null;
            if(!var8) { _fun0010_ip = 92; continue _fun0010 }
 89:
            var1 = var7;
 92:
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
            if(!(var6 == var4)) { _fun0010_ip = 161; continue _fun0010 }
 151:
            var5 = _closure1_slot7;
            var4 = var5.verificationLevel;
 161:
            var2['verificationLevel'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromVerificationGateGuild'] = var5;
    var5 = function fromClientDiscoverableGuild(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
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
            if(!var8) { _fun0011_ip = 49; continue _fun0011 }
 46:
            var1 = var6;
 49:
            var2['description'] = var1;
            var6 = var5.splash;
            var8 = var4 != var6;
            var1 = null;
            if(!var8) { _fun0011_ip = 71; continue _fun0011 }
 68:
            var1 = var6;
 71:
            var2['splash'] = var1;
            var6 = var5.banner;
            var8 = var4 != var6;
            var1 = null;
            if(!var8) { _fun0011_ip = 94; continue _fun0011 }
 91:
            var1 = var6;
 94:
            var2['banner'] = var1;
            var1 = var5.preferredLocale;
            if(!(var4 == var1)) { _fun0011_ip = 119; continue _fun0011 }
 109:
            var6 = _closure1_slot7;
            var1 = var6.preferredLocale;
 119:
            var2['preferredLocale'] = var1;
            var6 = var5.icon;
            var8 = var4 != var6;
            var1 = null;
            if(!var8) { _fun0011_ip = 141; continue _fun0011 }
 138:
            var1 = var6;
 141:
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
            if(!(var4 == var6)) { _fun0011_ip = 209; continue _fun0011 }
 199:
            var7 = _closure1_slot7;
            var6 = var7.premiumSubscriberCount;
 209:
            var2['premiumSubscriberCount'] = var6;
            var5 = var5.discoverySplash;
            var6 = var4 != var5;
            var4 = null;
            if(!var6) { _fun0011_ip = 232; continue _fun0011 }
 229:
            var4 = var5;
 232:
            var2['discoverySplash'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['fromClientDiscoverableGuild'] = var5;
    var5 = function fromGuildBasic(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
            if(!var8) { _fun0012_ip = 49; continue _fun0012 }
 46:
            var6 = var7;
 49:
            var2['icon'] = var6;
            var7 = var4.description;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0012_ip = 70; continue _fun0012 }
 67:
            var6 = var7;
 70:
            var2['description'] = var6;
            var7 = var4.splash;
            var8 = var5 != var7;
            var6 = null;
            if(!var8) { _fun0012_ip = 92; continue _fun0012 }
 89:
            var6 = var7;
 92:
            var2['splash'] = var6;
            var6 = var4.discovery_splash;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0012_ip = 115; continue _fun0012 }
 112:
            var5 = var6;
 115:
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
 0:
            var5 = arg1;
            var3 = _closure1_slot12;
            var2 = {};
            var1 = var5.id;
            var2['id'] = var1;
            var1 = var5.name;
            if(var1) { _fun0013_ip = 33; continue _fun0013 }
 29:
            var1 = '';
 33:
            var2['name'] = var1;
            var1 = var5.description;
            if(var1) { _fun0013_ip = 47; continue _fun0013 }
 45:
            var1 = null;
 47:
            var2['description'] = var1;
            var1 = var5.ownerId;
            if(var1) { _fun0013_ip = 62; continue _fun0013 }
 60:
            var1 = null;
 62:
            var2['ownerId'] = var1;
            var1 = var5.icon;
            if(var1) { _fun0013_ip = 77; continue _fun0013 }
 75:
            var1 = null;
 77:
            var2['icon'] = var1;
            var1 = var5.splash;
            if(var1) { _fun0013_ip = 92; continue _fun0013 }
 90:
            var1 = null;
 92:
            var2['splash'] = var1;
            var1 = var5.banner;
            if(var1) { _fun0013_ip = 108; continue _fun0013 }
 106:
            var1 = null;
 108:
            var2['banner'] = var1;
            var1 = var5.homeHeader;
            if(var1) { _fun0013_ip = 124; continue _fun0013 }
 122:
            var1 = null;
 124:
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
            if(var4) { _fun0013_ip = 192; continue _fun0013 }
 182:
            var6 = _closure1_slot7;
            var4 = var6.preferredLocale;
 192:
            var2['preferredLocale'] = var4;
            var4 = var5.afkChannelId;
            if(var4) { _fun0013_ip = 208; continue _fun0013 }
 206:
            var4 = null;
 208:
            var2['afkChannelId'] = var4;
            var4 = var5.afkTimeout;
            var2['afkTimeout'] = var4;
            var4 = var5.systemChannelId;
            if(var4) { _fun0013_ip = 235; continue _fun0013 }
 233:
            var4 = null;
 235:
            var2['systemChannelId'] = var4;
            var4 = var5.verificationLevel;
            if(var4) { _fun0013_ip = 259; continue _fun0013 }
 249:
            var6 = _closure1_slot7;
            var4 = var6.verificationLevel;
 259:
            var2['verificationLevel'] = var4;
            var6 = var5.joinedAt;
            var8 = global;
            var4 = var8.Date;
            var4 = var6 instanceof var4;
            var6 = var5.joinedAt;
            if(var4) { _fun0013_ip = 339; continue _fun0013 }
 291:
            var4 = null;
            if(!(var4 == var6)) { _fun0013_ip = 305; continue _fun0013 }
 297:
            var4 = var5.joinedAt;
            _fun0013_ip = 337; continue _fun0013;
 305:
            var10 = var8.Date;
            var11 = var5.joinedAt;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var12 = var9;
            var8 = new var12[var10](var11, var10);
            var4 = var8 instanceof Object ? var8 : var9;
 337:
            _fun0013_ip = 342; continue _fun0013;
 339:
            var4 = var6;
 342:
            var2['joinedAt'] = var4;
            var4 = var5.defaultMessageNotifications;
            if(var4) { _fun0013_ip = 366; continue _fun0013 }
 356:
            var6 = _closure1_slot7;
            var4 = var6.defaultMessageNotifications;
 366:
            var2['defaultMessageNotifications'] = var4;
            var4 = var5.mfaLevel;
            if(var4) { _fun0013_ip = 390; continue _fun0013 }
 380:
            var6 = _closure1_slot7;
            var4 = var6.mfaLevel;
 390:
            var2['mfaLevel'] = var4;
            var4 = var5.application_id;
            if(var4) { _fun0013_ip = 406; continue _fun0013 }
 404:
            var4 = null;
 406:
            var2['application_id'] = var4;
            var4 = var5.explicitContentFilter;
            if(var4) { _fun0013_ip = 430; continue _fun0013 }
 420:
            var6 = _closure1_slot7;
            var4 = var6.explicitContentFilter;
 430:
            var2['explicitContentFilter'] = var4;
            var4 = var5.vanityURLCode;
            if(var4) { _fun0013_ip = 446; continue _fun0013 }
 444:
            var4 = null;
 446:
            var2['vanityURLCode'] = var4;
            var4 = var5.premiumTier;
            if(var4) { _fun0013_ip = 470; continue _fun0013 }
 460:
            var6 = _closure1_slot7;
            var4 = var6.premiumTier;
 470:
            var2['premiumTier'] = var4;
            var4 = var5.premiumSubscriberCount;
            if(var4) { _fun0013_ip = 494; continue _fun0013 }
 484:
            var6 = _closure1_slot7;
            var4 = var6.premiumSubscriberCount;
 494:
            var2['premiumSubscriberCount'] = var4;
            var4 = var5.premiumProgressBarEnabled;
            if(var4) { _fun0013_ip = 518; continue _fun0013 }
 508:
            var6 = _closure1_slot7;
            var4 = var6.premiumProgressBarEnabled;
 518:
            var2['premiumProgressBarEnabled'] = var4;
            var4 = var5.systemChannelFlags;
            var2['systemChannelFlags'] = var4;
            var4 = var5.discoverySplash;
            if(var4) { _fun0013_ip = 545; continue _fun0013 }
 543:
            var4 = null;
 545:
            var2['discoverySplash'] = var4;
            var4 = var5.rulesChannelId;
            if(var4) { _fun0013_ip = 561; continue _fun0013 }
 559:
            var4 = null;
 561:
            var2['rulesChannelId'] = var4;
            var4 = var5.safetyAlertsChannelId;
            if(var4) { _fun0013_ip = 577; continue _fun0013 }
 575:
            var4 = null;
 577:
            var2['safetyAlertsChannelId'] = var4;
            var4 = var5.publicUpdatesChannelId;
            if(var4) { _fun0013_ip = 593; continue _fun0013 }
 591:
            var4 = null;
 593:
            var2['publicUpdatesChannelId'] = var4;
            var4 = var5.maxStageVideoChannelUsers;
            if(var4) { _fun0013_ip = 617; continue _fun0013 }
 607:
            var6 = _closure1_slot7;
            var4 = var6.maxStageVideoChannelUsers;
 617:
            var2['maxStageVideoChannelUsers'] = var4;
            var4 = var5.maxVideoChannelUsers;
            if(var4) { _fun0013_ip = 641; continue _fun0013 }
 631:
            var6 = _closure1_slot7;
            var4 = var6.maxVideoChannelUsers;
 641:
            var2['maxVideoChannelUsers'] = var4;
            var4 = var5.maxMembers;
            if(var4) { _fun0013_ip = 665; continue _fun0013 }
 655:
            var6 = _closure1_slot7;
            var4 = var6.maxMembers;
 665:
            var2['maxMembers'] = var4;
            var6 = var5.nsfwLevel;
            var4 = null;
            if(!(var4 == var6)) { _fun0013_ip = 692; continue _fun0013 }
 682:
            var7 = _closure1_slot7;
            var6 = var7.nsfwLevel;
 692:
            var2['nsfwLevel'] = var6;
            var7 = var5.ownerConfiguredContentLevel;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 715; continue _fun0013 }
 712:
            var6 = var7;
 715:
            var2['ownerConfiguredContentLevel'] = var6;
            var6 = var5.hubType;
            var2['hubType'] = var6;
            var7 = var5.latestOnboardingQuestionId;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 749; continue _fun0013 }
 746:
            var6 = var7;
 749:
            var2['latestOnboardingQuestionId'] = var6;
            var7 = var5.profile;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 772; continue _fun0013 }
 769:
            var6 = var7;
 772:
            var2['profile'] = var6;
            var7 = var5.premiumFeatures;
            var8 = var4 != var7;
            var6 = null;
            if(!var8) { _fun0013_ip = 795; continue _fun0013 }
 792:
            var6 = var7;
 795:
            var2['premiumFeatures'] = var6;
            var5 = var5.moderatorReporting;
            var6 = var4 != var5;
            var4 = null;
            if(!var6) { _fun0013_ip = 818; continue _fun0013 }
 815:
            var4 = var5;
 818:
            var2['moderatorReporting'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['dangerouslyConstructGuildRecordFromUntypedObject'] = var5;
    var5 = function toGuildProperties(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
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
            if(!var6) { _fun0014_ip = 233; continue _fun0014 }
 230:
            var3 = var5;
 233:
            var1['vanity_url_code'] = var3;
            var3 = var4.premiumTier;
            var1['premium_tier'] = var3;
            var3 = var4.premiumProgressBarEnabled;
            var1['premium_progress_bar_enabled'] = var3;
            var3 = var4.premiumFeatures;
            var5 = var2 != var3;
            var3 = null;
            if(!var5) { _fun0014_ip = 330; continue _fun0014 }
 275:
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
 330:
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
            if(!var5) { _fun0014_ip = 578; continue _fun0014 }
 545:
            var5 = var4.moderatorReporting;
            var4 = {};
            var6 = var5.moderatorReportingEnabled;
            var4['moderator_reporting_enabled'] = var6;
            var5 = var5.moderatorReportChannelId;
            var4['moderator_report_channel_id'] = var5;
            var3 = var4;
 578:
            var1['moderator_reporting'] = var3;
            var1['incidents_data'] = var2;
            return var1;
        }
    };
    var3['toGuildProperties'] = var5;
    var4 = function fromSerializedGuildRecord(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
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
            if(!var6) { _fun0015_ip = 115; continue _fun0015 }
 81:
            var6 = global;
            var7 = var6.Date;
            var9 = var4.joinedAt;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var10 = var6;
            var4 = new var10[var7](var9, var8);
            var5 = var4 instanceof Object ? var4 : var6;
 115:
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