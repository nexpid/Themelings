// app/modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.queueBlockWarning;
    var _closure1_slot4 = golf;
    tango = tango.dequeueBlockWarning;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoiceChannelWarningSurfaces;
    var _closure1_slot6 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: showVoiceChannelBlockedUserWarning
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            verify = argBar;
            mike = _closure1_slot3;
            entity = mike.getState;
            zulu = entity.bind(mike)();
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            mike = mike.AppStates;
            mike = mike.ACTIVE;
            if(!(zulu !== mike)) { _fun00002_ip = 74; continue _fun00001 }
 61:
            mike = _closure1_slot4;
            mike = mike.bind(entity)();
            _fun00002_ip = 234; continue _fun00001;
 74:
            mike = _closure1_slot5;
            mike = mike.bind(entity)();
            zulu = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 4;
            mike = yankee[mike];
            oscar = zulu.bind(entity)(mike);
            report = oscar.openLazy;
            offset = _closure1_slot0;
            mike = 6;
            mike = yankee[mike];
            tango = offset.bind(entity)(mike);
            mike = 5;
            zulu = yankee[mike];
            mike = yankee.paths;
            tango = tango.bind(entity)(zulu, mike);
            zulu = {};
            zulu['channelId'] = options;
            zulu['blockedUserId'] = verify;
            mike = 7;
            mike = yankee[mike];
            mike = offset.bind(entity)(mike);
            mike = mike.ImpressionNames;
            mike = mike.VOICE_CHANNEL_BLOCKED_USER_WARNING;
            zulu['impressionName'] = mike;
            mike = {};
            mike['channel_id'] = options;
            options = new Array(1);
            options[0] = verify;
            mike['blocked_user_ids'] = options;
            golf = _closure1_slot6;
            golf = golf.POST_JOIN_SHEET;
            mike['warning_surface'] = golf;
            zulu['impressionProperties'] = mike;
            mike = 'gdm_blocked_user_action_sheet';
            mike = report.bind(oscar)(tango, mike, zulu);
 234:
            return entity;
        }
    };
    zulu['showVoiceChannelBlockedUserWarning'] = mike;
    return entity;
})();