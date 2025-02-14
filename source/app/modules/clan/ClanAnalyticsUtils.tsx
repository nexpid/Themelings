// app/modules/clan/ClanAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.ClanSetupSteps;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.ContentDismissActionType;
    var _closure1_slot7 = tango;
    tango = {};
    report = 'to-tag-adoption';
    tango['TAG_ADOPTION'] = report;
    report = 'to-apply-flow';
    tango['APPLY_FLOW'] = report;
    report = 'to-application';
    tango['APPLICATION'] = report;
    report = 'to-guild';
    tango['GUILD'] = report;
    report = 'to-discovery';
    tango['DISCOVERY'] = report;
    report = 'ask-to-join';
    tango['ASK_TO_JOIN'] = report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/clan/ClanAnalyticsUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['GuildProfileCTATypes'] = tango;
    tango = function(argFoo) { // Original name: trackClanProfileViewed
        _fun77681: for(var _fun77681_ip = 0; ; ) switch(_fun77681_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.guildId;
            yankee = entity.hasJoinRequest;
            offset = entity.source;
            oscar = entity.messageId;
            golf = entity.tagUserId;
            verify = entity.location;
            report = _closure1_slot3;
            entity = report.getId;
            options = entity.bind(report)();
            tango = _closure1_slot4;
            zulu = tango.getMember;
            entity = report.getId;
            entity = entity.bind(report)();
            report = zulu.bind(tango)(foxtrot, entity);
            tango = null;
            romeo = tango == report;
            entity = undefined;
            zulu = undefined;
            if(romeo) { _fun77681_ip = 97; continue _fun77681 }
 91:
            zulu = report.joinedAt;
 97:
            romeo = tango != zulu;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 5;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot6;
            zulu = mike.CLAN_PROFILE_VIEWED;
            mike = {};
            mike['guild_id'] = foxtrot;
            mike['is_member'] = romeo;
            mike['has_join_request'] = yankee;
            mike['source'] = offset;
            mike['location'] = verify;
            mike['viewing_user_id'] = options;
            mike['tag_owner_user_id'] = golf;
            mike['message_id'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackClanProfileViewed'] = tango;
    tango = function(argFoo) { // Original name: trackClanApplyToJoinViewed
        entity = argFoo;
        yankee = entity.guildId;
        offset = entity.source;
        verify = entity.location;
        oscar = entity.messageId;
        golf = entity.tagUserId;
        zulu = _closure1_slot3;
        entity = zulu.getId;
        options = entity.bind(zulu)();
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_APPLY_TO_JOIN_VIEWED;
        mike = {};
        mike['guild_id'] = yankee;
        mike['source'] = offset;
        mike['location'] = verify;
        mike['viewing_user_id'] = options;
        mike['tag_owner_user_id'] = golf;
        mike['message_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackClanApplyToJoinViewed'] = tango;
    tango = function(argFoo) { // Original name: trackClanAdoptIdentity
        entity = argFoo;
        options = entity.guildId;
        golf = entity.userId;
        oscar = entity.source;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_ADOPT_IDENTITY;
        mike = {};
        mike['guild_id'] = options;
        mike['user_id'] = golf;
        mike['source'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackClanAdoptIdentity'] = tango;
    tango = function(argFoo, argBar) { // Original name: trackConvertStepViewed
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_CONVERT_STEP_VIEWED;
        mike = {};
        oscar = argFoo;
        mike['guild_id'] = oscar;
        oscar = argBar;
        mike['step'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackConvertStepViewed'] = tango;
    tango = function(argFoo, argBar) { // Original name: trackSettingsViewed
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_SETTINGS_VIEWED;
        mike = {};
        oscar = argFoo;
        mike['guild_id'] = oscar;
        oscar = argBar;
        mike['page'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackSettingsViewed'] = tango;
    tango = function(argFoo) { // Original name: trackSettingsSaved
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_SETTINGS_SAVED;
        mike = {};
        oscar = argFoo;
        mike['guild_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackSettingsSaved'] = tango;
    tango = function(argFoo) { // Original name: trackConvertSuccessModalViewed
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_CONVERT_SUCCESS_MODAL_VIEWED;
        mike = {};
        oscar = argFoo;
        mike['guild_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackConvertSuccessModalViewed'] = tango;
    tango = function(argFoo, argBar) { // Original name: trackConvertSuccessModalConfirm
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_CONVERT_SUCCESS_MODAL_CONFIRM;
        mike = {};
        oscar = argFoo;
        mike['guild_id'] = oscar;
        oscar = argBar;
        mike['enable_tag'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackConvertSuccessModalConfirm'] = tango;
    tango = function(argFoo) { // Original name: getProgressStepAnalyticsName
        _fun77689: for(var _fun77689_ip = 0; ; ) switch(_fun77689_ip) {
 0:
            entity = argFoo;
            zulu = _closure1_slot5;
            zulu = zulu.GAMES;
            if(!(zulu !== entity)) { _fun77689_ip = 172; continue _fun77689 }
 23:
            zulu = _closure1_slot5;
            zulu = zulu.PLAYSTYLE;
            if(!(zulu !== entity)) { _fun77689_ip = 166; continue _fun77689 }
 40:
            zulu = _closure1_slot5;
            zulu = zulu.UTILITY_TRAITS;
            if(!(zulu !== entity)) { _fun77689_ip = 158; continue _fun77689 }
 54:
            zulu = _closure1_slot5;
            zulu = zulu.INTERESTS;
            if(!(zulu !== entity)) { _fun77689_ip = 152; continue _fun77689 }
 68:
            zulu = _closure1_slot5;
            zulu = zulu.DESCRIPTION;
            if(!(zulu !== entity)) { _fun77689_ip = 146; continue _fun77689 }
 82:
            zulu = _closure1_slot5;
            zulu = zulu.CUSTOMIZE_TAG_BADGE;
            if(!(zulu !== entity)) { _fun77689_ip = 140; continue _fun77689 }
 96:
            zulu = _closure1_slot5;
            zulu = zulu.CUSTOMIZE_BANNER;
            if(!(zulu !== entity)) { _fun77689_ip = 134; continue _fun77689 }
 110:
            mike = _closure1_slot5;
            mike = mike.MEMBER_APPLICATION;
            if(!(mike !== entity)) { _fun77689_ip = 126; continue _fun77689 }
 124:
            return entity;
 126:
            entity = 'member_application';
            return entity;
 134:
            entity = 'banner';
            return entity;
 140:
            entity = 'tag';
            return entity;
 146:
            entity = 'description';
            return entity;
 152:
            entity = 'interests';
            return entity;
 158:
            entity = 'utility_traits';
            return entity;
 166:
            entity = 'playstyle';
            return entity;
 172:
            entity = 'games';
            return entity;
        }
    };
    zulu['getProgressStepAnalyticsName'] = tango;
    tango = function(argFoo) { // Original name: trackClanDiscoveryCardClicked
        entity = argFoo;
        yankee = entity.guildId;
        offset = entity.isMember;
        verify = entity.hasJoinRequest;
        options = entity.affinity;
        golf = entity.index;
        oscar = entity.position;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_DISCOVERY_CARD_CLICKED;
        mike = {};
        mike['guild_id'] = yankee;
        mike['is_member'] = offset;
        mike['has_join_request'] = verify;
        mike['affinity'] = options;
        mike['index'] = golf;
        mike['position'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackClanDiscoveryCardClicked'] = tango;
    tango = function(argFoo, argBar) { // Original name: trackRapidashProfileCtaClicked
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.RAPIDASH_PROFILE_CTA_CLICKED;
        mike = {};
        oscar = argFoo;
        mike['guild_id'] = oscar;
        oscar = argBar;
        mike['action_type'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackRapidashProfileCtaClicked'] = tango;
    tango = function(argFoo) { // Original name: trackMemberVerificationApplicationViewed
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.MEMBER_VERIFICATION_APPLICATION_VIEWED;
        mike = {};
        oscar = argFoo;
        mike['guild_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackMemberVerificationApplicationViewed'] = tango;
    tango = function(argFoo) { // Original name: trackClanSendInterviewMessage
        _fun77693: for(var _fun77693_ip = 0; ; ) switch(_fun77693_ip) {
 0:
            entity = argFoo;
            romeo = entity.guildId;
            offset = entity.messageId;
            yankee = entity.channelId;
            golf = entity.joinRequestStatus;
            oscar = entity.joinRequestUserId;
            zulu = _closure1_slot3;
            entity = zulu.getId;
            verify = entity.bind(zulu)();
            zulu = _closure1_slot4;
            entity = zulu.getMember;
            report = entity.bind(zulu)(romeo, verify);
            tango = null;
            options = tango == report;
            entity = undefined;
            zulu = undefined;
            if(options) { _fun77693_ip = 82; continue _fun77693 }
 76:
            zulu = report.joinedAt;
 82:
            options = tango != zulu;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 5;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot6;
            zulu = mike.CLAN_SEND_INTERVIEW_MESSAGE;
            mike = {};
            mike['guild_id'] = romeo;
            mike['channel_id'] = yankee;
            mike['message_id'] = offset;
            mike['message_user_id'] = verify;
            mike['is_member'] = options;
            mike['join_request_status'] = golf;
            mike['join_request_user_id'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackClanSendInterviewMessage'] = tango;
    tango = function(argFoo) { // Original name: trackClanApplicationNavigation
        entity = argFoo;
        options = entity.guildId;
        golf = entity.source;
        oscar = entity.tab;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_APPLICATION_NAVIGATION;
        mike = {};
        mike['guild_id'] = options;
        mike['source'] = golf;
        mike['tab'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackClanApplicationNavigation'] = tango;
    tango = function(argFoo) { // Original name: trackClanApplicationAction
        entity = argFoo;
        verify = entity.guildId;
        options = entity.actionType;
        golf = entity.applicationUserId;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_APPLICATION_ACTION;
        mike = {};
        mike['guild_id'] = verify;
        mike['action_type'] = options;
        mike['application_user_id'] = golf;
        golf = _closure1_slot3;
        oscar = golf.getId;
        oscar = oscar.bind(golf)();
        mike['viewing_user_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackClanApplicationAction'] = tango;
    tango = function(argFoo) { // Original name: trackClanApplicationViewed
        entity = argFoo;
        verify = entity.guildId;
        golf = entity.applicationUserId;
        oscar = entity.applicationStatus;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.CLAN_APPLICATION_VIEWED;
        mike = {};
        mike['guild_id'] = verify;
        verify = _closure1_slot3;
        options = verify.getId;
        options = options.bind(verify)();
        mike['viewing_user_id'] = options;
        mike['application_user_id'] = golf;
        mike['application_status'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackClanApplicationViewed'] = tango;
    tango = function(argFoo) { // Original name: trackClanApplyWaitlist
        _fun77697: for(var _fun77697_ip = 0; ; ) switch(_fun77697_ip) {
 0:
            entity = argFoo;
            backup = entity.originGuildId;
            foxtrot = entity.tagGuildId;
            romeo = entity.tagUserId;
            yankee = entity.messageId;
            offset = entity.location;
            options = _closure1_slot0;
            mike = _closure1_slot2;
            tango = 6;
            zulu = mike[tango];
            entity = undefined;
            report = options.bind(entity)(zulu);
            zulu = report.isDismissibleContentDismissed;
            golf = 7;
            mike = mike[golf];
            mike = options.bind(entity)(mike);
            mike = mike.DismissibleContent;
            mike = mike.CLAN_TAG_WAITLIST;
            mike = zulu.bind(report)(mike);
            if(mike) { _fun77697_ip = 263; continue _fun77697 }
 101:
            report = _closure1_slot1;
            mike = _closure1_slot2;
            zulu = 5;
            zulu = mike[zulu];
            verify = report.bind(entity)(zulu);
            options = verify.track;
            zulu = _closure1_slot6;
            report = zulu.CLAN_APPLY_WAITLIST;
            zulu = {};
            sizing = _closure1_slot3;
            kilo = sizing.getId;
            kilo = kilo.bind(sizing)();
            zulu['user_id'] = kilo;
            zulu['origin_guild_id'] = backup;
            zulu['tag_guild_id'] = foxtrot;
            zulu['tag_user_id'] = romeo;
            zulu['message_id'] = yankee;
            zulu['location'] = offset;
            zulu = options.bind(verify)(report, zulu);
            zulu = _closure1_slot0;
            tango = mike[tango];
            report = zulu.bind(entity)(tango);
            tango = report.markDismissibleContentAsDismissed;
            mike = mike[golf];
            mike = zulu.bind(entity)(mike);
            mike = mike.DismissibleContent;
            zulu = mike.CLAN_TAG_WAITLIST;
            mike = {};
            oscar = _closure1_slot7;
            oscar = oscar.TAKE_ACTION;
            mike['dismissAction'] = oscar;
            oscar = true;
            mike['forceTrack'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 263:
            return entity;
        }
    };
    zulu['trackClanApplyWaitlist'] = tango;
    tango = function(argFoo) { // Original name: trackGuildApplicationIntendsToJoin
        entity = argFoo;
        golf = entity.guildId;
        oscar = entity.position;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.GUILD_APPLICATION_INTENDS_TO_JOIN;
        mike = {};
        mike['guild_id'] = golf;
        mike['position'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackGuildApplicationIntendsToJoin'] = tango;
    tango = function(argFoo) { // Original name: trackDiscoveryGuildFavorited
        entity = argFoo;
        options = entity.guildId;
        golf = entity.position;
        oscar = entity.isFavorited;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.DISCOVERY_GUILD_FAVORITED;
        mike = {};
        mike['guild_id'] = options;
        mike['position'] = golf;
        mike['favorite'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackDiscoveryGuildFavorited'] = tango;
    tango = function(argFoo) { // Original name: trackDiscoveryGuildCardInteraction
        entity = argFoo;
        golf = entity.feature;
        options = entity.guildId;
        oscar = entity.position;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.DISCOVERY_GUILD_CARD_INTERACTION;
        mike = {};
        mike['guild_id'] = options;
        mike['feature'] = golf;
        mike['position'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackDiscoveryGuildCardInteraction'] = tango;
    mike = function(argFoo) { // Original name: trackGuildApplicationAbandoned
        entity = argFoo;
        golf = entity.guildId;
        oscar = entity.position;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.GUILD_APPLICATION_ABANDONED;
        mike = {};
        mike['guild_id'] = golf;
        mike['position'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackGuildApplicationAbandoned'] = mike;
    return entity;
})();