// app/lib/VideoSpinnerTimer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    report = global;
    offset = report.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot10 = tango;
    tango = {};
    options = 'self_video';
    tango['SELF_VIDEO'] = options;
    options = 'self_stream';
    tango['SELF_STREAM'] = options;
    options = 'remote_video';
    tango['REMOTE_VIDEO'] = options;
    options = 'remote_stream';
    tango['REMOTE_STREAM'] = options;
    options = 'change_video_background';
    tango['CHANGE_VIDEO_BACKGROUND'] = options;
    options = 'video_player';
    tango['VIDEO_PLAYER'] = options;
    options = 'replay_video_stream';
    tango['REPLAY_VIDEO_STREAM'] = options;
    report = report.Map;
    options = report.prototype;
    options = Object.create(options, {constructor: {value: report}});
    backup = options;
    report = new backup[report](foxtrot);
    report = report instanceof Object ? report : options;
    var _closure1_slot11 = report;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: VideoSpinnerTimer
            zulu = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = null;
            zulu['spinnerVisibleStart'] = tango;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 8;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            report = mike.Logger;
            mike = report.prototype;
            tango = Object.create(mike, {constructor: {value: report}});
            golf = argFoo;
            options = tango;
            mike = new options[report](golf, oscar);
            mike = mike instanceof Object ? mike : tango;
            zulu['logger'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'onSpinnerStarted';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun75212: for(var _fun75212_ip = 0; ; ) switch(_fun75212_ip) {
 0:
                mike = this;
                zulu = mike.spinnerVisibleStart;
                entity = null;
                if(!(entity == zulu)) { _fun75212_ip = 55; continue _fun75212 }
 15:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 9;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                entity = zulu.now;
                entity = entity.bind(zulu)();
                mike['spinnerVisibleStart'] = entity;
 55:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'trackSpinnerDuration';
        entity['key'] = oscar;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun75213: for(var _fun75213_ip = 0; ; ) switch(_fun75213_ip) {
 0:
                offset = argFoo;
                golf = argBaz;
                entity = this;
                mike = entity.spinnerVisibleStart;
                zulu = null;
                if(!(zulu != mike)) { _fun75213_ip = 569; continue _fun75213 }
 24:
                tango = _closure1_slot11;
                mike = tango.get;
                tango = mike.bind(tango)(golf);
                options = zulu != tango;
                mike = 0;
                report = 0;
                if(!options) { _fun75213_ip = 55; continue _fun75213 }
 52:
                report = tango;
 55:
                tango = 1;
                verify = report + tango;
                report = _closure1_slot11;
                tango = report.set;
                tango = tango.bind(report)(golf, verify);
                golf = _closure1_slot0;
                report = _closure1_slot2;
                tango = 9;
                report = report[tango];
                tango = undefined;
                golf = golf.bind(tango)(report);
                report = golf.now;
                golf = report.bind(golf)();
                report = entity.spinnerVisibleStart;
                options = golf - report;
                entity['spinnerVisibleStart'] = zulu;
                if(!(!(options < mike))) { _fun75213_ip = 506; continue _fun75213 }
 131:
                golf = entity.logger;
                report = golf.info;
                mike = global;
                mike = mike.HermesInternal;
                backup = mike.concat;
                source = 'spinner visible for ';
                echo = ' ms\n      [';
                output = ', count for stream: ';
                kilo = ']';
                update = options;
                result = offset;
                sizing = verify;
                mike = source[backup](update, echo, result, output, sizing, kilo, backup);
                mike = report.bind(golf)(mike);
                backup = _closure1_slot8;
                mike = backup.getGuildId;
                romeo = mike.bind(backup)();
                golf = _closure1_slot9;
                report = golf.getUserVoiceChannelId;
                yankee = _closure1_slot5;
                mike = yankee.getId;
                mike = mike.bind(yankee)();
                yankee = report.bind(golf)(romeo, mike);
                report = _closure1_slot6;
                mike = report.getChannel;
                report = mike.bind(report)(yankee);
                mike = zulu != report;
                golf = null;
                if(!mike) { _fun75213_ip = 338; continue _fun75213 }
 262:
                mike = report.isGuildVoice;
                mike = mike.bind(report)();
                golf = 'guild_voice';
                if(mike) { _fun75213_ip = 338; continue _fun75213 }
 281:
                mike = report.isGuildStageVoice;
                mike = mike.bind(report)();
                golf = 'is_stage_channel';
                if(mike) { _fun75213_ip = 338; continue _fun75213 }
 300:
                mike = report.isDM;
                mike = mike.bind(report)();
                golf = 'dm';
                if(mike) { _fun75213_ip = 338; continue _fun75213 }
 317:
                mike = report.isGroupDM;
                mike = mike.bind(report)();
                golf = null;
                if(!mike) { _fun75213_ip = 338; continue _fun75213 }
 332:
                golf = 'group_dm';
 338:
                zulu = _closure1_slot1;
                report = _closure1_slot2;
                mike = 10;
                mike = report[mike];
                report = zulu.bind(tango)(mike);
                tango = report.track;
                mike = _closure1_slot10;
                zulu = mike.VIDEO_SPINNER_SHOWN_V2;
                mike = {};
                mike['video_spinner_context'] = offset;
                mike['duration_video_spinner_visible_ms'] = options;
                foxtrot = backup.getRTCConnectionId;
                foxtrot = foxtrot.bind(backup)();
                mike['rtc_connection_id'] = foxtrot;
                foxtrot = backup.getMediaSessionId;
                foxtrot = foxtrot.bind(backup)();
                mike['media_session_id'] = foxtrot;
                mike['event_count_for_stream'] = verify;
                mike['guild_id'] = romeo;
                mike['channel_id'] = yankee;
                mike['channel_type'] = golf;
                golf = argBar;
                mike['spinning_user_id'] = golf;
                golf = _closure1_slot7;
                oscar = golf.getType;
                oscar = oscar.bind(golf)();
                mike['connection_type'] = oscar;
                oscar = golf.getEffectiveConnectionSpeed;
                oscar = oscar.bind(golf)();
                mike['effective_connection_speed'] = oscar;
                oscar = golf.getServiceProvider;
                oscar = oscar.bind(golf)();
                mike['service_provider'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                _fun75213_ip = 569; continue _fun75213;
 506:
                zulu = entity.logger;
                mike = zulu.warn;
                entity = global;
                entity = entity.HermesInternal;
                golf = entity.concat;
                source = 'spinner duration is negative: ';
                echo = ' ms\n        [';
                output = ', count for stream: ';
                kilo = ']';
                update = options;
                result = offset;
                sizing = verify;
                entity = source[golf](update, echo, result, output, sizing, kilo, backup);
                entity = mike.bind(zulu)(entity);
 569:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'lib/VideoSpinnerTimer.tsx';
    report = oscar.bind(golf)(report);
    zulu['VideoSpinnerContext'] = tango;
    zulu['VideoSpinnerTimer'] = mike;
    return entity;
})();