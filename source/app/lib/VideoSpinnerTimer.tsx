// app/lib/VideoSpinnerTimer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    report = global;
    offset = report.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot10 = tangon;
    tangon = {};
    option = 'self_video';
    tangon['SELF_VIDEO'] = option;
    option = 'self_stream';
    tangon['SELF_STREAM'] = option;
    option = 'remote_video';
    tangon['REMOTE_VIDEO'] = option;
    option = 'remote_stream';
    tangon['REMOTE_STREAM'] = option;
    option = 'change_video_background';
    tangon['CHANGE_VIDEO_BACKGROUND'] = option;
    option = 'replay_video_stream';
    tangon['REPLAY_VIDEO_STREAM'] = option;
    report = report.Map;
    option = report.prototype;
    option = Object.create(option, {constructor: {value: report}});
    backup = option;
    report = new backup[report](foxtra);
    report = report instanceof Object ? report : option;
    var _closure1_slot11 = report;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: VideoSpinnerTimer
            zuuluu = this;
            report = _closure1_slot3;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = null;
            zuuluu['spinnerVisibleStart'] = tangon;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 8;
            michal = report[michal];
            report = tangon.bind(entity)(michal);
            michal = report.prototype;
            tangon = Object.create(michal, {constructor: {value: report}});
            golfie = argFoo;
            option = tangon;
            michal = new option[report](golfie, oscard);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['logger'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'onSpinnerStarted';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = this;
                zuuluu = michal.spinnerVisibleStart;
                entity = null;
                if(!(entity == zuuluu)) { _fun00002_ip = 55; continue _fun00001 }
 15:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                entity = zuuluu.now;
                entity = entity.bind(zuuluu)();
                michal['spinnerVisibleStart'] = entity;
 55:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'trackSpinnerDuration';
        entity['key'] = oscard;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                offset = argFoo;
                golfie = argBaz;
                entity = this;
                michal = entity.spinnerVisibleStart;
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00004_ip = 569; continue _fun00003 }
 24:
                tangon = _closure1_slot11;
                michal = tangon.get;
                tangon = michal.bind(tangon)(golfie);
                option = zuuluu != tangon;
                michal = 0;
                report = 0;
                if(!option) { _fun00004_ip = 55; continue _fun00003 }
 52:
                report = tangon;
 55:
                tangon = 1;
                verify = report + tangon;
                report = _closure1_slot11;
                tangon = report.set;
                tangon = tangon.bind(report)(golfie, verify);
                golfie = _closure1_slot0;
                report = _closure1_slot2;
                tangon = 9;
                report = report[tangon];
                tangon = undefined;
                golfie = golfie.bind(tangon)(report);
                report = golfie.now;
                golfie = report.bind(golfie)();
                report = entity.spinnerVisibleStart;
                option = golfie - report;
                entity['spinnerVisibleStart'] = zuuluu;
                if(!(!(option < michal))) { _fun00004_ip = 506; continue _fun00003 }
 131:
                golfie = entity.logger;
                report = golfie.info;
                michal = global;
                michal = michal.HermesInternal;
                backup = michal.concat;
                source = 'spinner visible for ';
                echoed = ' ms\n      [';
                output = ', count for stream: ';
                kiloes = ']';
                update = option;
                result = offset;
                sizing = verify;
                michal = source[backup](update, echoed, result, output, sizing, kiloes, backup);
                michal = report.bind(golfie)(michal);
                backup = _closure1_slot8;
                michal = backup.getGuildId;
                romeon = michal.bind(backup)();
                golfie = _closure1_slot9;
                report = golfie.getUserVoiceChannelId;
                yankee = _closure1_slot5;
                michal = yankee.getId;
                michal = michal.bind(yankee)();
                yankee = report.bind(golfie)(romeon, michal);
                report = _closure1_slot6;
                michal = report.getChannel;
                report = michal.bind(report)(yankee);
                michal = zuuluu != report;
                golfie = null;
                if(!michal) { _fun00004_ip = 338; continue _fun00003 }
 262:
                michal = report.isGuildVoice;
                michal = michal.bind(report)();
                golfie = 'guild_voice';
                if(michal) { _fun00004_ip = 338; continue _fun00003 }
 281:
                michal = report.isGuildStageVoice;
                michal = michal.bind(report)();
                golfie = 'is_stage_channel';
                if(michal) { _fun00004_ip = 338; continue _fun00003 }
 300:
                michal = report.isDM;
                michal = michal.bind(report)();
                golfie = 'dm';
                if(michal) { _fun00004_ip = 338; continue _fun00003 }
 317:
                michal = report.isGroupDM;
                michal = michal.bind(report)();
                golfie = null;
                if(!michal) { _fun00004_ip = 338; continue _fun00003 }
 332:
                golfie = 'group_dm';
 338:
                zuuluu = _closure1_slot1;
                report = _closure1_slot2;
                michal = 10;
                michal = report[michal];
                report = zuuluu.bind(tangon)(michal);
                tangon = report.track;
                michal = _closure1_slot10;
                zuuluu = michal.VIDEO_SPINNER_SHOWN_V2;
                michal = {};
                michal['video_spinner_context'] = offset;
                michal['duration_video_spinner_visible_ms'] = option;
                foxtra = backup.getRTCConnectionId;
                foxtra = foxtra.bind(backup)();
                michal['rtc_connection_id'] = foxtra;
                foxtra = backup.getMediaSessionId;
                foxtra = foxtra.bind(backup)();
                michal['media_session_id'] = foxtra;
                michal['event_count_for_stream'] = verify;
                michal['guild_id'] = romeon;
                michal['channel_id'] = yankee;
                michal['channel_type'] = golfie;
                golfie = argBar;
                michal['spinning_user_id'] = golfie;
                golfie = _closure1_slot7;
                oscard = golfie.getType;
                oscard = oscard.bind(golfie)();
                michal['connection_type'] = oscard;
                oscard = golfie.getEffectiveConnectionSpeed;
                oscard = oscard.bind(golfie)();
                michal['effective_connection_speed'] = oscard;
                oscard = golfie.getServiceProvider;
                oscard = oscard.bind(golfie)();
                michal['service_provider'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                _fun00004_ip = 569; continue _fun00003;
 506:
                zuuluu = entity.logger;
                michal = zuuluu.warn;
                entity = global;
                entity = entity.HermesInternal;
                golfie = entity.concat;
                source = 'spinner duration is negative: ';
                echoed = ' ms\n        [';
                output = ', count for stream: ';
                kiloes = ']';
                update = option;
                result = offset;
                sizing = verify;
                entity = source[golfie](update, echoed, result, output, sizing, kiloes, backup);
                entity = michal.bind(zuuluu)(entity);
 569:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'lib/VideoSpinnerTimer.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['VideoSpinnerContext'] = tangon;
    zuuluu['VideoSpinnerTimer'] = michal;
    return entity;
})();