// app/modules/clan/ClanAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.ClanSetupSteps;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.ContentDismissActionType;
    var _closure1_slot7 = tangon;
    tangon = {};
    report = 'to-tag-adoption';
    tangon['TAG_ADOPTION'] = report;
    report = 'to-apply-flow';
    tangon['APPLY_FLOW'] = report;
    report = 'to-application';
    tangon['APPLICATION'] = report;
    report = 'to-guild';
    tangon['GUILD'] = report;
    report = 'to-discovery';
    tangon['DISCOVERY'] = report;
    report = 'ask-to-join';
    tangon['ASK_TO_JOIN'] = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/clan/ClanAnalyticsUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['GuildProfileCTATypes'] = tangon;
    tangon = function(argFoo) { // Original name: trackClanProfileViewed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            foxtra = entity.guildId;
            yankee = entity.hasJoinRequest;
            offset = entity.source;
            oscard = entity.messageId;
            golfie = entity.tagUserId;
            verify = entity.location;
            report = _closure1_slot3;
            entity = report.getId;
            option = entity.bind(report)();
            tangon = _closure1_slot4;
            zuuluu = tangon.getMember;
            entity = report.getId;
            entity = entity.bind(report)();
            report = zuuluu.bind(tangon)(foxtra, entity);
            tangon = null;
            romeon = tangon == report;
            entity = undefined;
            zuuluu = undefined;
            if(romeon) { _fun00002_ip = 97; continue _fun00001 }
 91:
            zuuluu = report.joinedAt;
 97:
            romeon = tangon != zuuluu;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot6;
            zuuluu = michal.CLAN_PROFILE_VIEWED;
            michal = {};
            michal['guild_id'] = foxtra;
            michal['is_member'] = romeon;
            michal['has_join_request'] = yankee;
            michal['source'] = offset;
            michal['location'] = verify;
            michal['viewing_user_id'] = option;
            michal['tag_owner_user_id'] = golfie;
            michal['message_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackClanProfileViewed'] = tangon;
    tangon = function(argFoo) { // Original name: trackClanApplyToJoinViewed
        entity = argFoo;
        yankee = entity.guildId;
        offset = entity.source;
        verify = entity.location;
        oscard = entity.messageId;
        golfie = entity.tagUserId;
        zuuluu = _closure1_slot3;
        entity = zuuluu.getId;
        option = entity.bind(zuuluu)();
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_APPLY_TO_JOIN_VIEWED;
        michal = {};
        michal['guild_id'] = yankee;
        michal['source'] = offset;
        michal['location'] = verify;
        michal['viewing_user_id'] = option;
        michal['tag_owner_user_id'] = golfie;
        michal['message_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackClanApplyToJoinViewed'] = tangon;
    tangon = function(argFoo) { // Original name: trackClanAdoptIdentity
        entity = argFoo;
        option = entity.guildId;
        golfie = entity.userId;
        oscard = entity.source;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_ADOPT_IDENTITY;
        michal = {};
        michal['guild_id'] = option;
        michal['user_id'] = golfie;
        michal['source'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackClanAdoptIdentity'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: trackConvertStepViewed
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_CONVERT_STEP_VIEWED;
        michal = {};
        oscard = argFoo;
        michal['guild_id'] = oscard;
        oscard = argBar;
        michal['step'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackConvertStepViewed'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: trackSettingsViewed
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_SETTINGS_VIEWED;
        michal = {};
        oscard = argFoo;
        michal['guild_id'] = oscard;
        oscard = argBar;
        michal['page'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSettingsViewed'] = tangon;
    tangon = function(argFoo) { // Original name: trackSettingsSaved
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_SETTINGS_SAVED;
        michal = {};
        oscard = argFoo;
        michal['guild_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSettingsSaved'] = tangon;
    tangon = function(argFoo) { // Original name: trackConvertSuccessModalViewed
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_CONVERT_SUCCESS_MODAL_VIEWED;
        michal = {};
        oscard = argFoo;
        michal['guild_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackConvertSuccessModalViewed'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: trackConvertSuccessModalConfirm
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_CONVERT_SUCCESS_MODAL_CONFIRM;
        michal = {};
        oscard = argFoo;
        michal['guild_id'] = oscard;
        oscard = argBar;
        michal['enable_tag'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackConvertSuccessModalConfirm'] = tangon;
    tangon = function(argFoo) { // Original name: getProgressStepAnalyticsName
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GAMES;
            if(!(zuuluu !== entity)) { _fun00004_ip = 172; continue _fun00003 }
 23:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.PLAYSTYLE;
            if(!(zuuluu !== entity)) { _fun00004_ip = 166; continue _fun00003 }
 40:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.UTILITY_TRAITS;
            if(!(zuuluu !== entity)) { _fun00004_ip = 158; continue _fun00003 }
 54:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.INTERESTS;
            if(!(zuuluu !== entity)) { _fun00004_ip = 152; continue _fun00003 }
 68:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.DESCRIPTION;
            if(!(zuuluu !== entity)) { _fun00004_ip = 146; continue _fun00003 }
 82:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.CUSTOMIZE_TAG_BADGE;
            if(!(zuuluu !== entity)) { _fun00004_ip = 140; continue _fun00003 }
 96:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.CUSTOMIZE_BANNER;
            if(!(zuuluu !== entity)) { _fun00004_ip = 134; continue _fun00003 }
 110:
            michal = _closure1_slot5;
            michal = michal.MEMBER_APPLICATION;
            if(!(michal !== entity)) { _fun00004_ip = 126; continue _fun00003 }
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
    zuuluu['getProgressStepAnalyticsName'] = tangon;
    tangon = function(argFoo) { // Original name: trackClanDiscoveryCardClicked
        entity = argFoo;
        yankee = entity.guildId;
        offset = entity.isMember;
        verify = entity.hasJoinRequest;
        option = entity.affinity;
        golfie = entity.index;
        oscard = entity.position;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_DISCOVERY_CARD_CLICKED;
        michal = {};
        michal['guild_id'] = yankee;
        michal['is_member'] = offset;
        michal['has_join_request'] = verify;
        michal['affinity'] = option;
        michal['index'] = golfie;
        michal['position'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackClanDiscoveryCardClicked'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: trackRapidashProfileCtaClicked
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.RAPIDASH_PROFILE_CTA_CLICKED;
        michal = {};
        oscard = argFoo;
        michal['guild_id'] = oscard;
        oscard = argBar;
        michal['action_type'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackRapidashProfileCtaClicked'] = tangon;
    tangon = function(argFoo) { // Original name: trackMemberVerificationApplicationViewed
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.MEMBER_VERIFICATION_APPLICATION_VIEWED;
        michal = {};
        oscard = argFoo;
        michal['guild_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackMemberVerificationApplicationViewed'] = tangon;
    tangon = function(argFoo) { // Original name: trackClanSendInterviewMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            romeon = entity.guildId;
            offset = entity.messageId;
            yankee = entity.channelId;
            golfie = entity.joinRequestStatus;
            oscard = entity.joinRequestUserId;
            zuuluu = _closure1_slot3;
            entity = zuuluu.getId;
            verify = entity.bind(zuuluu)();
            zuuluu = _closure1_slot4;
            entity = zuuluu.getMember;
            report = entity.bind(zuuluu)(romeon, verify);
            tangon = null;
            option = tangon == report;
            entity = undefined;
            zuuluu = undefined;
            if(option) { _fun00006_ip = 82; continue _fun00005 }
 76:
            zuuluu = report.joinedAt;
 82:
            option = tangon != zuuluu;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot6;
            zuuluu = michal.CLAN_SEND_INTERVIEW_MESSAGE;
            michal = {};
            michal['guild_id'] = romeon;
            michal['channel_id'] = yankee;
            michal['message_id'] = offset;
            michal['message_user_id'] = verify;
            michal['is_member'] = option;
            michal['join_request_status'] = golfie;
            michal['join_request_user_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackClanSendInterviewMessage'] = tangon;
    tangon = function(argFoo) { // Original name: trackClanApplicationNavigation
        entity = argFoo;
        option = entity.guildId;
        golfie = entity.source;
        oscard = entity.tab;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_APPLICATION_NAVIGATION;
        michal = {};
        michal['guild_id'] = option;
        michal['source'] = golfie;
        michal['tab'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackClanApplicationNavigation'] = tangon;
    tangon = function(argFoo) { // Original name: trackClanApplicationAction
        entity = argFoo;
        verify = entity.guildId;
        option = entity.actionType;
        golfie = entity.applicationUserId;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_APPLICATION_ACTION;
        michal = {};
        michal['guild_id'] = verify;
        michal['action_type'] = option;
        michal['application_user_id'] = golfie;
        golfie = _closure1_slot3;
        oscard = golfie.getId;
        oscard = oscard.bind(golfie)();
        michal['viewing_user_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackClanApplicationAction'] = tangon;
    tangon = function(argFoo) { // Original name: trackClanApplicationViewed
        entity = argFoo;
        verify = entity.guildId;
        golfie = entity.applicationUserId;
        oscard = entity.applicationStatus;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.CLAN_APPLICATION_VIEWED;
        michal = {};
        michal['guild_id'] = verify;
        verify = _closure1_slot3;
        option = verify.getId;
        option = option.bind(verify)();
        michal['viewing_user_id'] = option;
        michal['application_user_id'] = golfie;
        michal['application_status'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackClanApplicationViewed'] = tangon;
    tangon = function(argFoo) { // Original name: trackClanApplyWaitlist
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            backup = entity.originGuildId;
            foxtra = entity.tagGuildId;
            romeon = entity.tagUserId;
            yankee = entity.messageId;
            offset = entity.location;
            option = _closure1_slot0;
            michal = _closure1_slot2;
            tangon = 6;
            zuuluu = michal[tangon];
            entity = undefined;
            report = option.bind(entity)(zuuluu);
            zuuluu = report.isDismissibleContentDismissed;
            golfie = 7;
            michal = michal[golfie];
            michal = option.bind(entity)(michal);
            michal = michal.DismissibleContent;
            michal = michal.CLAN_TAG_WAITLIST;
            michal = zuuluu.bind(report)(michal);
            if(michal) { _fun00008_ip = 263; continue _fun00007 }
 101:
            report = _closure1_slot1;
            michal = _closure1_slot2;
            zuuluu = 5;
            zuuluu = michal[zuuluu];
            verify = report.bind(entity)(zuuluu);
            option = verify.track;
            zuuluu = _closure1_slot6;
            report = zuuluu.CLAN_APPLY_WAITLIST;
            zuuluu = {};
            sizing = _closure1_slot3;
            kiloes = sizing.getId;
            kiloes = kiloes.bind(sizing)();
            zuuluu['user_id'] = kiloes;
            zuuluu['origin_guild_id'] = backup;
            zuuluu['tag_guild_id'] = foxtra;
            zuuluu['tag_user_id'] = romeon;
            zuuluu['message_id'] = yankee;
            zuuluu['location'] = offset;
            zuuluu = option.bind(verify)(report, zuuluu);
            zuuluu = _closure1_slot0;
            tangon = michal[tangon];
            report = zuuluu.bind(entity)(tangon);
            tangon = report.markDismissibleContentAsDismissed;
            michal = michal[golfie];
            michal = zuuluu.bind(entity)(michal);
            michal = michal.DismissibleContent;
            zuuluu = michal.CLAN_TAG_WAITLIST;
            michal = {};
            oscard = _closure1_slot7;
            oscard = oscard.TAKE_ACTION;
            michal['dismissAction'] = oscard;
            oscard = true;
            michal['forceTrack'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 263:
            return entity;
        }
    };
    zuuluu['trackClanApplyWaitlist'] = tangon;
    tangon = function(argFoo) { // Original name: trackGuildApplicationIntendsToJoin
        entity = argFoo;
        golfie = entity.guildId;
        oscard = entity.position;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.GUILD_APPLICATION_INTENDS_TO_JOIN;
        michal = {};
        michal['guild_id'] = golfie;
        michal['position'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackGuildApplicationIntendsToJoin'] = tangon;
    tangon = function(argFoo) { // Original name: trackDiscoveryGuildFavorited
        entity = argFoo;
        option = entity.guildId;
        golfie = entity.position;
        oscard = entity.isFavorited;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.DISCOVERY_GUILD_FAVORITED;
        michal = {};
        michal['guild_id'] = option;
        michal['position'] = golfie;
        michal['favorite'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackDiscoveryGuildFavorited'] = tangon;
    tangon = function(argFoo) { // Original name: trackDiscoveryGuildCardInteraction
        entity = argFoo;
        golfie = entity.feature;
        option = entity.guildId;
        oscard = entity.position;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.DISCOVERY_GUILD_CARD_INTERACTION;
        michal = {};
        michal['guild_id'] = option;
        michal['feature'] = golfie;
        michal['position'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackDiscoveryGuildCardInteraction'] = tangon;
    michal = function(argFoo) { // Original name: trackGuildApplicationAbandoned
        entity = argFoo;
        golfie = entity.guildId;
        oscard = entity.position;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.GUILD_APPLICATION_ABANDONED;
        michal = {};
        michal['guild_id'] = golfie;
        michal['position'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackGuildApplicationAbandoned'] = michal;
    return entity;
})();