// app/actions/ChannelRTCActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.AppContext;
    var _closure1_slot3 = golf;
    golf = mike.AnalyticEvents;
    var _closure1_slot4 = golf;
    mike = mike.ComponentActions;
    var _closure1_slot5 = mike;
    mike = {};
    golf = function() { // Original name: rebuildRTCActiveChannels
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_RTC_ACTIVE_CHANNELS';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['rebuildRTCActiveChannels'] = golf;
    golf = function(argFoo, argBar) { // Original name: selectParticipant
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_RTC_SELECT_PARTICIPANT';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['id'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['selectParticipant'] = golf;
    golf = function(argFoo, argBar) { // Original name: updateLayout
        _fun73188: for(var _fun73188_ip = 0; ; ) switch(_fun73188_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            report = arguments[2];
            entity = undefined;
            if(!(report === entity)) { _fun73188_ip = 28; continue _fun73188 }
 15:
            mike = _closure1_slot3;
            report = mike.APP;
 28:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 2;
            mike = tango[mike];
            offset = zulu.bind(entity)(mike);
            verify = offset.track;
            mike = _closure1_slot4;
            options = mike.VIDEO_LAYOUT_TOGGLED;
            mike = {};
            mike['video_layout'] = oscar;
            romeo = _closure1_slot0;
            yankee = 3;
            yankee = tango[yankee];
            romeo = romeo.bind(entity)(yankee);
            yankee = romeo.collectVoiceAnalyticsMetadata;
            foxtrot = yankee.bind(romeo)(golf);
            backup = mike;
            yankee = copyDataProperties(backup, foxtrot);
            mike = verify.bind(offset)(options, mike);
            mike = 1;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            options = 'CHANNEL_RTC_UPDATE_LAYOUT';
            mike['type'] = options;
            mike['channelId'] = golf;
            mike['layout'] = oscar;
            mike['appContext'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['updateLayout'] = golf;
    golf = function(argFoo, argBar) { // Original name: toggleParticipants
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['participantsOpen'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['toggleParticipants'] = golf;
    golf = function(argFoo, argBar) { // Original name: toggleParticipantsList
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['participantsListOpen'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['toggleParticipantsList'] = golf;
    golf = function(argFoo, argBar) { // Original name: toggleVoiceParticipantsHidden
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['voiceParticipantsHidden'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['toggleVoiceParticipantsHidden'] = golf;
    golf = function(argFoo, argBar) { // Original name: updateStageStreamSize
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['large'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateStageStreamSize'] = golf;
    golf = function(argFoo, argBar) { // Original name: updateStageVideoLimitBoostUpsellDismissed
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['dismissed'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateStageVideoLimitBoostUpsellDismissed'] = golf;
    tango = function(argFoo, argBar) { // Original name: updateChatOpen
        _fun73194: for(var _fun73194_ip = 0; ; ) switch(_fun73194_ip) {
 0:
            options = argFoo;
            tango = argBar;
            var _closure2_slot0 = options;
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            entity = 1;
            report = report[entity];
            entity = undefined;
            golf = oscar.bind(entity)(report);
            oscar = golf.dispatch;
            report = {};
            verify = 'CHANNEL_RTC_UPDATE_CHAT_OPEN';
            report['type'] = verify;
            report['channelId'] = options;
            report['chatOpen'] = tango;
            report = oscar.bind(golf)(report);
            if(tango) { _fun73194_ip = 117; continue _fun73194 }
 69:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 4;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            report = tango.ComponentDispatch;
            tango = report.dispatch;
            zulu = _closure1_slot5;
            zulu = zulu.FOCUS_CHAT_BUTTON;
            zulu = tango.bind(report)(zulu);
            _fun73194_ip = 140; continue _fun73194;
 117:
            zulu = global;
            tango = zulu.setTimeout;
            zulu = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 4;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                report = zulu.ComponentDispatch;
                tango = report.dispatch;
                mike = _closure1_slot5;
                zulu = mike.FOCUS_CHANNEL_TEXT_AREA;
                mike = {};
                oscar = _closure2_slot0;
                mike['channelId'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            mike = 0;
            mike = tango.bind(entity)(zulu, mike);
 140:
            return entity;
        }
    };
    mike['updateChatOpen'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/ChannelRTCActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();