// app/modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    yankee = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    golf = function(argFoo) { // Original name: triggerPostStageJoinActions
        _fun67625: for(var _fun67625_ip = 0; ; ) switch(_fun67625_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot3;
            mike = tango.getId;
            oscar = mike.bind(tango)();
            report = _closure1_slot4;
            tango = report.isModerator;
            mike = zulu.id;
            mike = tango.bind(report)(oscar, mike);
            oscar = _closure1_slot5;
            report = oscar.isLive;
            tango = zulu.id;
            tango = report.bind(oscar)(tango);
            if(!mike) { _fun67625_ip = 80; continue _fun67625 }
 64:
            if(tango) { _fun67625_ip = 80; continue _fun67625 }
 67:
            oscar = _closure1_slot14;
            report = undefined;
            report = oscar.bind(report)(zulu);
            _fun67625_ip = 100; continue _fun67625;
 80:
            if(!mike) { _fun67625_ip = 86; continue _fun67625 }
 83:
            mike = tango;
 86:
            if(!mike) { _fun67625_ip = 100; continue _fun67625 }
 89:
            mike = _closure1_slot15;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
 100:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot13 = golf;
    oscar = function(argFoo) { // Original name: openStageChannelSettings
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        golf = _closure1_slot0;
        tango = 7;
        tango = zulu[tango];
        golf = golf.bind(entity)(tango);
        tango = 6;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = _closure1_slot8;
        mike = {};
        golf = argFoo;
        mike['channel'] = golf;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    var _closure1_slot14 = oscar;
    report = function(argFoo) { // Original name: openStageChannelModeratorJoinSheet
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        golf = _closure1_slot0;
        tango = 7;
        tango = zulu[tango];
        golf = golf.bind(entity)(tango);
        tango = 8;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = _closure1_slot9;
        mike = {};
        golf = argFoo;
        mike['channel'] = golf;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    var _closure1_slot15 = report;
    tango = function(argFoo) { // Original name: openStageChannel
        _fun67628: for(var _fun67628_ip = 0; ; ) switch(_fun67628_ip) {
 0:
            entity = argFoo;
            mike = entity.isGuildStageVoice;
            mike = mike.bind(entity)();
            if(!mike) { _fun67628_ip = 122; continue _fun67628 }
 16:
            tango = _closure1_slot1;
            verify = _closure1_slot2;
            zulu = 13;
            zulu = verify[zulu];
            options = undefined;
            report = tango.bind(options)(zulu);
            tango = report.pushLazy;
            golf = _closure1_slot0;
            mike = 7;
            mike = verify[mike];
            oscar = golf.bind(options)(mike);
            mike = 14;
            zulu = verify[mike];
            mike = verify.paths;
            zulu = oscar.bind(options)(zulu, mike);
            mike = {};
            mike['channel'] = entity;
            oscar = 15;
            oscar = verify[oscar];
            golf = golf.bind(options)(oscar);
            oscar = golf.getVoiceChannelKey;
            entity = entity.id;
            entity = oscar.bind(golf)(entity);
            entity = tango.bind(report)(zulu, mike, entity);
 122:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = tango;
    entity = global;
    foxtrot = entity.Object;
    romeo = foxtrot.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, options);
    entity = 0;
    options = offset[entity];
    entity = undefined;
    options = yankee.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = offset[options];
    options = verify.bind(entity)(options);
    options = options.setIsOnStartStageScreen;
    var _closure1_slot6 = options;
    options = 4;
    options = offset[options];
    options = verify.bind(entity)(options);
    yankee = options.STAGE_AUDIENCE_NOTICE_SHEET_KEY;
    var _closure1_slot7 = yankee;
    yankee = options.START_STAGE_CHANNEL_EVENT_SHEET_KEY;
    var _closure1_slot8 = yankee;
    yankee = options.STAGE_MODERATOR_JOIN_SHEET_KEY;
    var _closure1_slot9 = yankee;
    yankee = options.STAGE_BLOCKED_USERS_SHEET_KEY;
    var _closure1_slot10 = yankee;
    yankee = options.STAGE_SETTINGS_SHEET_KEY;
    var _closure1_slot11 = yankee;
    options = options.EXPLICIT_END_STAGE_SHEET_KEY;
    var _closure1_slot12 = options;
    options = 18;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/stage_channels/StageChannelActionCreatorExtras.native.tsx';
    options = verify.bind(offset)(options);
    zulu['triggerPostStageJoinActions'] = golf;
    zulu['openStageChannelSettings'] = oscar;
    zulu['openStageChannelModeratorJoinSheet'] = report;
    report = function() { // Original name: openEndGuildEventConfirmationModal
        entity = undefined;
        return entity;
    };
    zulu['openEndGuildEventConfirmationModal'] = report;
    report = function(argFoo) { // Original name: openStageChannelAudienceNoticeModal
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        golf = _closure1_slot0;
        tango = 7;
        tango = zulu[tango];
        golf = golf.bind(entity)(tango);
        tango = 9;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = _closure1_slot7;
        mike = {};
        golf = argFoo;
        mike['channelId'] = golf;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    zulu['openStageChannelAudienceNoticeModal'] = report;
    report = function(argFoo, argBar) { // Original name: openStageBlockedUsersSheet
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        golf = _closure1_slot0;
        tango = 7;
        tango = zulu[tango];
        golf = golf.bind(entity)(tango);
        tango = 10;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = _closure1_slot10;
        mike = {};
        golf = argFoo;
        mike['channel'] = golf;
        golf = argBar;
        mike['onAccept'] = golf;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    zulu['openStageBlockedUsersSheet'] = report;
    report = function(argFoo, argBar) { // Original name: openStageSettingsSheet
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        golf = _closure1_slot0;
        tango = 7;
        tango = zulu[tango];
        golf = golf.bind(entity)(tango);
        tango = 11;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = _closure1_slot11;
        mike = {};
        golf = argFoo;
        mike['channelId'] = golf;
        golf = argBar;
        mike['onOpenRTCDebugOverlay'] = golf;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    zulu['openStageSettingsSheet'] = report;
    report = function(argFoo) { // Original name: openEndStageModal
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        golf = _closure1_slot0;
        tango = 7;
        tango = zulu[tango];
        golf = golf.bind(entity)(tango);
        tango = 12;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = _closure1_slot12;
        mike = {};
        golf = argFoo;
        mike['channel'] = golf;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    zulu['openEndStageModal'] = report;
    zulu['openStageChannel'] = tango;
    tango = function(argFoo) { // Original name: showPlatformUserProfile
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 16;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = {};
        oscar = argFoo;
        golf = mike;
        tango = copyDataProperties(golf, oscar);
        report = true;
        tango = 'isVoiceContext';
        mike[tango] = report;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['showPlatformUserProfile'] = tango;
    tango = function(argFoo) { // Original name: shouldShowBlockedUsers
        _fun67635: for(var _fun67635_ip = 0; ; ) switch(_fun67635_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 17;
            entity = oscar[mike];
            zulu = undefined;
            golf = report.bind(zulu)(entity);
            entity = golf.getStageBlockedUsersCount;
            entity = entity.bind(golf)(tango);
            mike = oscar[mike];
            zulu = report.bind(zulu)(mike);
            mike = zulu.getStageIgnoredUsersCount;
            zulu = mike.bind(zulu)(tango);
            mike = 0;
            entity = entity > mike;
            if(entity) { _fun67635_ip = 72; continue _fun67635 }
 68:
            entity = zulu > mike;
 72:
            return entity;
        }
    };
    zulu['shouldShowBlockedUsers'] = tango;
    tango = function(argFoo, argBar) { // Original name: navigateToStage
        _fun67636: for(var _fun67636_ip = 0; ; ) switch(_fun67636_ip) {
 0:
            zulu = argFoo;
            oscar = argBar;
            report = arguments[2];
            entity = undefined;
            if(!(report === entity)) { _fun67636_ip = 17; continue _fun67636 }
 15:
            report = true;
 17:
            mike = zulu.id;
            if(!(oscar !== mike)) { _fun67636_ip = 40; continue _fun67636 }
 26:
            tango = _closure1_slot6;
            mike = true;
            mike = tango.bind(entity)(mike);
 40:
            tango = _closure1_slot16;
            tango = tango.bind(entity)(zulu);
            tango = zulu.id;
            tango = oscar !== tango;
            if(!tango) { _fun67636_ip = 67; continue _fun67636 }
 64:
            tango = report;
 67:
            if(!tango) { _fun67636_ip = 79; continue _fun67636 }
 70:
            mike = _closure1_slot13;
            mike = mike.bind(entity)(zulu);
 79:
            return entity;
        }
    };
    zulu['navigateToStage'] = tango;
    mike = function() { // Original name: showChannelChangeConfirmationAlert
        entity = false;
        return entity;
    };
    zulu['showChannelChangeConfirmationAlert'] = mike;
    return entity;
})();