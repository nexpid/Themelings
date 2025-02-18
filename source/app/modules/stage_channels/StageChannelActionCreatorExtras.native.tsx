// app/modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    golfie = function(argFoo) { // Original name: triggerPostStageJoinActions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot3;
            michal = tangon.getId;
            oscard = michal.bind(tangon)();
            report = _closure1_slot4;
            tangon = report.isModerator;
            michal = zuuluu.id;
            michal = tangon.bind(report)(oscard, michal);
            oscard = _closure1_slot5;
            report = oscard.isLive;
            tangon = zuuluu.id;
            tangon = report.bind(oscard)(tangon);
            if(!michal) { _fun00002_ip = 80; continue _fun00001 }
 64:
            if(tangon) { _fun00002_ip = 80; continue _fun00001 }
 67:
            oscard = _closure1_slot14;
            report = undefined;
            report = oscard.bind(report)(zuuluu);
            _fun00002_ip = 100; continue _fun00001;
 80:
            if(!michal) { _fun00002_ip = 86; continue _fun00001 }
 83:
            michal = tangon;
 86:
            if(!michal) { _fun00002_ip = 100; continue _fun00001 }
 89:
            michal = _closure1_slot15;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
 100:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot13 = golfie;
    oscard = function(argFoo) { // Original name: openStageChannelSettings
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        tangon = zuuluu[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.openLazy;
        golfie = _closure1_slot0;
        tangon = 7;
        tangon = zuuluu[tangon];
        golfie = golfie.bind(entity)(tangon);
        tangon = 6;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = golfie.bind(entity)(tangon, zuuluu);
        zuuluu = _closure1_slot8;
        michal = {};
        golfie = argFoo;
        michal['channel'] = golfie;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    var _closure1_slot14 = oscard;
    report = function(argFoo) { // Original name: openStageChannelModeratorJoinSheet
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        tangon = zuuluu[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.openLazy;
        golfie = _closure1_slot0;
        tangon = 7;
        tangon = zuuluu[tangon];
        golfie = golfie.bind(entity)(tangon);
        tangon = 8;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = golfie.bind(entity)(tangon, zuuluu);
        zuuluu = _closure1_slot9;
        michal = {};
        golfie = argFoo;
        michal['channel'] = golfie;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    var _closure1_slot15 = report;
    tangon = function(argFoo) { // Original name: openStageChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.isGuildStageVoice;
            michal = michal.bind(entity)();
            if(!michal) { _fun00004_ip = 122; continue _fun00003 }
 16:
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 13;
            zuuluu = verify[zuuluu];
            option = undefined;
            report = tangon.bind(option)(zuuluu);
            tangon = report.pushLazy;
            golfie = _closure1_slot0;
            michal = 7;
            michal = verify[michal];
            oscard = golfie.bind(option)(michal);
            michal = 14;
            zuuluu = verify[michal];
            michal = verify.paths;
            zuuluu = oscard.bind(option)(zuuluu, michal);
            michal = {};
            michal['channel'] = entity;
            oscard = 15;
            oscard = verify[oscard];
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.getVoiceChannelKey;
            entity = entity.id;
            entity = oscard.bind(golfie)(entity);
            entity = tangon.bind(report)(zuuluu, michal, entity);
 122:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = tangon;
    entity = global;
    foxtra = entity.Object;
    romeon = foxtra.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, option);
    entity = 0;
    option = offset[entity];
    entity = undefined;
    option = yankee.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option.setIsOnStartStageScreen;
    var _closure1_slot6 = option;
    option = 4;
    option = offset[option];
    option = verify.bind(entity)(option);
    yankee = option.STAGE_AUDIENCE_NOTICE_SHEET_KEY;
    var _closure1_slot7 = yankee;
    yankee = option.START_STAGE_CHANNEL_EVENT_SHEET_KEY;
    var _closure1_slot8 = yankee;
    yankee = option.STAGE_MODERATOR_JOIN_SHEET_KEY;
    var _closure1_slot9 = yankee;
    yankee = option.STAGE_BLOCKED_USERS_SHEET_KEY;
    var _closure1_slot10 = yankee;
    yankee = option.STAGE_SETTINGS_SHEET_KEY;
    var _closure1_slot11 = yankee;
    option = option.EXPLICIT_END_STAGE_SHEET_KEY;
    var _closure1_slot12 = option;
    option = 18;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/stage_channels/StageChannelActionCreatorExtras.native.tsx';
    option = verify.bind(offset)(option);
    zuuluu['triggerPostStageJoinActions'] = golfie;
    zuuluu['openStageChannelSettings'] = oscard;
    zuuluu['openStageChannelModeratorJoinSheet'] = report;
    report = function() { // Original name: openEndGuildEventConfirmationModal
        entity = undefined;
        return entity;
    };
    zuuluu['openEndGuildEventConfirmationModal'] = report;
    report = function(argFoo) { // Original name: openStageChannelAudienceNoticeModal
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        tangon = zuuluu[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.openLazy;
        golfie = _closure1_slot0;
        tangon = 7;
        tangon = zuuluu[tangon];
        golfie = golfie.bind(entity)(tangon);
        tangon = 9;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = golfie.bind(entity)(tangon, zuuluu);
        zuuluu = _closure1_slot7;
        michal = {};
        golfie = argFoo;
        michal['channelId'] = golfie;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['openStageChannelAudienceNoticeModal'] = report;
    report = function(argFoo, argBar) { // Original name: openStageBlockedUsersSheet
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        tangon = zuuluu[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.openLazy;
        golfie = _closure1_slot0;
        tangon = 7;
        tangon = zuuluu[tangon];
        golfie = golfie.bind(entity)(tangon);
        tangon = 10;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = golfie.bind(entity)(tangon, zuuluu);
        zuuluu = _closure1_slot10;
        michal = {};
        golfie = argFoo;
        michal['channel'] = golfie;
        golfie = argBar;
        michal['onAccept'] = golfie;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['openStageBlockedUsersSheet'] = report;
    report = function(argFoo, argBar) { // Original name: openStageSettingsSheet
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        tangon = zuuluu[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.openLazy;
        golfie = _closure1_slot0;
        tangon = 7;
        tangon = zuuluu[tangon];
        golfie = golfie.bind(entity)(tangon);
        tangon = 11;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = golfie.bind(entity)(tangon, zuuluu);
        zuuluu = _closure1_slot11;
        michal = {};
        golfie = argFoo;
        michal['channelId'] = golfie;
        golfie = argBar;
        michal['onOpenRTCDebugOverlay'] = golfie;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['openStageSettingsSheet'] = report;
    report = function(argFoo) { // Original name: openEndStageModal
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 5;
        tangon = zuuluu[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.openLazy;
        golfie = _closure1_slot0;
        tangon = 7;
        tangon = zuuluu[tangon];
        golfie = golfie.bind(entity)(tangon);
        tangon = 12;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = golfie.bind(entity)(tangon, zuuluu);
        zuuluu = _closure1_slot12;
        michal = {};
        golfie = argFoo;
        michal['channel'] = golfie;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['openEndStageModal'] = report;
    zuuluu['openStageChannel'] = tangon;
    tangon = function(argFoo) { // Original name: showPlatformUserProfile
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 16;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = {};
        oscard = argFoo;
        golfie = michal;
        tangon = copyDataProperties(golfie, oscard);
        report = true;
        tangon = 'isVoiceContext';
        michal[tangon] = report;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['showPlatformUserProfile'] = tangon;
    tangon = function(argFoo) { // Original name: shouldShowBlockedUsers
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 17;
            entity = oscard[michal];
            zuuluu = undefined;
            golfie = report.bind(zuuluu)(entity);
            entity = golfie.getStageBlockedUsersCount;
            entity = entity.bind(golfie)(tangon);
            michal = oscard[michal];
            zuuluu = report.bind(zuuluu)(michal);
            michal = zuuluu.getStageIgnoredUsersCount;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = 0;
            entity = entity > michal;
            if(entity) { _fun00006_ip = 72; continue _fun00005 }
 68:
            entity = zuuluu > michal;
 72:
            return entity;
        }
    };
    zuuluu['shouldShowBlockedUsers'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: navigateToStage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            oscard = argBar;
            report = arguments[2];
            entity = undefined;
            if(!(report === entity)) { _fun00008_ip = 17; continue _fun00007 }
 15:
            report = true;
 17:
            michal = zuuluu.id;
            if(!(oscard !== michal)) { _fun00008_ip = 40; continue _fun00007 }
 26:
            tangon = _closure1_slot6;
            michal = true;
            michal = tangon.bind(entity)(michal);
 40:
            tangon = _closure1_slot16;
            tangon = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.id;
            tangon = oscard !== tangon;
            if(!tangon) { _fun00008_ip = 67; continue _fun00007 }
 64:
            tangon = report;
 67:
            if(!tangon) { _fun00008_ip = 79; continue _fun00007 }
 70:
            michal = _closure1_slot13;
            michal = michal.bind(entity)(zuuluu);
 79:
            return entity;
        }
    };
    zuuluu['navigateToStage'] = tangon;
    michal = function() { // Original name: showChannelChangeConfirmationAlert
        entity = false;
        return entity;
    };
    zuuluu['showChannelChangeConfirmationAlert'] = michal;
    return entity;
})();