// app/modules/errors/AVError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    report = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    tangon = offset[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = offset[tangon];
    tangon = verify.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = offset[tangon];
    oscard = report.bind(entity)(tangon);
    tangon = oscard.prototype;
    report = Object.create(tangon, {constructor: {value: oscard}});
    kiloes = 'AVError';
    sizing = report;
    tangon = new sizing[oscard](kiloes, backup);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot4 = tangon;
    golfie = {};
    tangon = 'stream-failed-to-start';
    golfie['STREAM_FAILED_TO_START'] = tangon;
    tangon = 'no-input-devices';
    golfie['NO_INPUT_DEVICES'] = tangon;
    tangon = 'no-audio-input-detected';
    golfie['NO_AUDIO_INPUT_DETECTED'] = tangon;
    tangon = 'debug-log-upload-failed';
    golfie['DEBUG_LOG_UPLOAD_FAILED'] = tangon;
    oscard = {};
    tangon = 'audio';
    oscard['Audio'] = tangon;
    tangon = 'video';
    oscard['Video'] = tangon;
    tangon = 'devices';
    oscard['Devices'] = tangon;
    tangon = 'debug';
    oscard['Debug'] = tangon;
    report = {};
    tangon = 'critical';
    report['Critical'] = tangon;
    tangon = 'warning';
    report['Warning'] = tangon;
    tangon = 'info';
    report['Info'] = tangon;
    tangon = {};
    yankee = golfie.STREAM_FAILED_TO_START;
    option = {};
    romeon = 2001;
    option['errorCode'] = romeon;
    romeon = report.Critical;
    option['severity'] = romeon;
    romeon = oscard.Video;
    option['category'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.NO_INPUT_DEVICES;
    option = {};
    romeon = 3001;
    option['errorCode'] = romeon;
    romeon = report.Critical;
    option['severity'] = romeon;
    romeon = oscard.Devices;
    option['category'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.NO_AUDIO_INPUT_DETECTED;
    option = {};
    romeon = 3002;
    option['errorCode'] = romeon;
    romeon = report.Critical;
    option['severity'] = romeon;
    romeon = oscard.Devices;
    option['category'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.DEBUG_LOG_UPLOAD_FAILED;
    option = {};
    romeon = 4001;
    option['errorCode'] = romeon;
    romeon = report.Info;
    option['severity'] = romeon;
    romeon = oscard.Debug;
    option['category'] = romeon;
    tangon[yankee] = option;
    var _closure1_slot5 = tangon;
    tangon = {};
    option = 'Unknown';
    tangon['Unknown'] = option;
    option = 'UploadErrorCodes.GENERAL';
    tangon['UploadErrorGeneral'] = option;
    option = 'UploadErrorCodes.NO_FILE';
    tangon['UploadErrorNoFile'] = option;
    option = 'UploadErrorCodes.PROGRESS';
    tangon['UploadErrorProgress'] = option;
    option = 'UploadErrorCodes.UPLOAD';
    tangon['UploadErrorUpload'] = option;
    option = 'UploadErrorCodes.READ';
    tangon['UploadErrorRead'] = option;
    var _closure1_slot6 = tangon;
    option = function() { // Original name: validateUniqueErrorCodes
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = global;
            oscard = entity.Object;
            report = oscard.values;
            tangon = _closure1_slot5;
            oscard = report.bind(oscard)(tangon);
            report = oscard.map;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.errorCode;
                return entity;
            };
            oscard = report.bind(oscard)(tangon);
            var _closure2_slot0 = oscard;
            tangon = entity.Set;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            option = report;
            golfie = oscard;
            tangon = new option[tangon](golfie, oscard);
            tangon = tangon instanceof Object ? tangon : report;
            report = oscard.length;
            tangon = tangon.size;
            if(!(report === tangon)) { _fun00002_ip = 95; continue _fun00001 }
 91:
            tangon = undefined;
            return tangon;
 95:
            report = oscard.filter;
            tangon = function(argFoo, argBar) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.indexOf;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = argBar;
                entity = michal !== entity;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            var _closure2_slot1 = tangon;
            report = entity.Object;
            tangon = report.entries;
            zuuluu = _closure1_slot5;
            report = tangon.bind(report)(zuuluu);
            tangon = report.filter;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    entity = tangon().value;
                    entity = michal;
                    oscard = undefined;
                    zuuluu = entity === oscard;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 49; continue _fun00003 }
 24:
                    report = tangon().value;
                    tangon = michal;
                    tangon = tangon === oscard;
                    entity = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00004_ip = 49; continue _fun00003 }
 43:
                    entity = report;
                    zuuluu = tangon;
 49:
                    if(zuuluu) { _fun00004_ip = 55; continue _fun00003 }
 52:
                    michal.return();
 55:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.includes;
                    entity = entity.errorCode;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    entity = tangon().value;
                    zuuluu = michal;
                    golfie = undefined;
                    zuuluu = zuuluu === golfie;
                    report = undefined;
                    if(zuuluu) { _fun00006_ip = 27; continue _fun00005 }
 24:
                    report = entity;
 27:
                    entity = undefined;
                    if(zuuluu) { _fun00006_ip = 57; continue _fun00005 }
 32:
                    oscard = tangon().value;
                    tangon = michal;
                    tangon = tangon === golfie;
                    entity = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00006_ip = 57; continue _fun00005 }
 51:
                    entity = oscard;
                    zuuluu = tangon;
 57:
                    if(zuuluu) { _fun00006_ip = 63; continue _fun00005 }
 60:
                    michal.return();
 63:
                    tangon = entity.errorCode;
                    entity = global;
                    entity = entity.HermesInternal;
                    zuuluu = entity.concat;
                    michal = '';
                    entity = ': ';
                    entity = zuuluu.bind(michal)(report, entity, tangon);
                    return entity;
                }
            };
            report = zuuluu.bind(tangon)(michal);
            zuuluu = entity.Error;
            tangon = report.join;
            michal = '\n';
            tangon = tangon.bind(report)(michal);
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = 'Duplicate AV error codes found:\n';
            golfie = michal.bind(entity)(tangon);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            option = michal;
            entity = new option[zuuluu](golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    option = option.bind(entity)();
    option = 5;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/errors/AVError.tsx';
    option = verify.bind(offset)(option);
    zuuluu['AVError'] = golfie;
    zuuluu['AVErrorCategory'] = oscard;
    zuuluu['AVErrorSeverity'] = report;
    zuuluu['AVUnderlyingError'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: reportAVError
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            offset = argFoo;
            golfie = argBar;
            entity = golfie.underlyingError;
            michal = null;
            if(!(michal != entity)) { _fun00008_ip = 116; continue _fun00007 }
 18:
            entity = global;
            oscard = entity.Object;
            report = oscard.values;
            tangon = _closure1_slot6;
            oscard = report.bind(oscard)(tangon);
            report = oscard.includes;
            tangon = golfie.underlyingError;
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00008_ip = 116; continue _fun00007 }
 62:
            tangon = _closure1_slot4;
            zuuluu = tangon.error;
            option = golfie.underlyingError;
            entity = entity.HermesInternal;
            oscard = entity.concat;
            report = "Invalid underlying error string '";
            entity = "', must be member of AVUnderlyingError";
            entity = oscard.bind(report)(option, entity);
            entity = zuuluu.bind(tangon)(entity);
            _fun00008_ip = 748; continue _fun00007;
 116:
            report = _closure1_slot4;
            tangon = report.error;
            zuuluu = global;
            option = zuuluu.JSON;
            oscard = option.stringify;
            verify = oscard.bind(option)(golfie);
            zuuluu = zuuluu.HermesInternal;
            option = zuuluu.concat;
            oscard = 'AV error reported: ';
            zuuluu = ' ';
            zuuluu = option.bind(oscard)(offset, zuuluu, verify);
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot5;
            romeon = tangon[offset];
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 4;
            option = oscard[zuuluu];
            zuuluu = undefined;
            yankee = report.bind(zuuluu)(option);
            verify = yankee.dispatch;
            option = {};
            foxtra = 'REPORT_AV_ERROR';
            option['type'] = foxtra;
            option['error'] = offset;
            foxtra = romeon.errorCode;
            option['errorCode'] = foxtra;
            foxtra = romeon.severity;
            option['severity'] = foxtra;
            romeon = romeon.category;
            option['category'] = romeon;
            option['context'] = golfie;
            option = verify.bind(yankee)(option);
            option = tangon[offset];
            tangon = {};
            verify = offset.valueOf;
            verify = verify.bind(offset)();
            tangon['error_name'] = verify;
            verify = option.errorCode;
            tangon['error_code'] = verify;
            verify = option.severity;
            tangon['error_severity'] = verify;
            option = option.category;
            tangon['error_category'] = option;
            option = golfie.underlyingError;
            tangon['underlying_error'] = option;
            option = golfie.errorMessage;
            tangon['error_message'] = option;
            option = golfie.guildId;
            tangon['guild_id'] = option;
            option = golfie.channelId;
            tangon['channel_id'] = option;
            option = golfie.channelType;
            tangon['channel_type'] = option;
            option = golfie.rtcConnectionId;
            tangon['rtc_connection_id'] = option;
            option = golfie.mediaSessionId;
            tangon['media_session_id'] = option;
            tangon['parent_media_session_id'] = michal;
            golfie = golfie.mediaContext;
            tangon['context'] = golfie;
            option = _closure1_slot2;
            golfie = option.getHardwareEncoding;
            golfie = golfie.bind(option)();
            tangon['hardware_enabled'] = golfie;
            tangon['voice_backend_version'] = michal;
            tangon['rtc_worker_backend_version'] = michal;
            tangon['audio_input_device_name'] = michal;
            tangon['audio_output_device_name'] = michal;
            tangon['video_device_name'] = michal;
            golfie = option.getMediaEngine;
            verify = golfie.bind(option)();
            golfie = verify.getAudioSubsystem;
            golfie = golfie.bind(verify)();
            tangon['audio_subsystem'] = golfie;
            golfie = option.getMediaEngine;
            verify = golfie.bind(option)();
            golfie = verify.getAudioLayer;
            golfie = golfie.bind(verify)();
            tangon['audio_layer'] = golfie;
            golfie = option.getSettings;
            golfie = golfie.bind(option)();
            golfie = golfie.mode;
            tangon['audio_input_mode'] = golfie;
            golfie = option.getSettings;
            golfie = golfie.bind(option)();
            golfie = golfie.modeOptions;
            golfie = golfie.autoThreshold;
            tangon['automatic_audio_input_sensitivity_enabled'] = golfie;
            golfie = option.getSettings;
            golfie = golfie.bind(option)();
            golfie = golfie.modeOptions;
            golfie = golfie.threshold;
            tangon['audio_input_sensitivity'] = golfie;
            golfie = option.getEchoCancellation;
            golfie = golfie.bind(option)();
            tangon['echo_cancellation_enabled'] = golfie;
            golfie = option.getNoiseSuppression;
            golfie = golfie.bind(option)();
            tangon['noise_suppression_enabled'] = golfie;
            golfie = option.getNoiseCancellation;
            golfie = golfie.bind(option)();
            tangon['noise_cancellation_enabled'] = golfie;
            golfie = option.getAutomaticGainControl;
            golfie = golfie.bind(option)();
            tangon['automatic_gain_control_enabled'] = golfie;
            golfie = option.getSidechainCompression;
            golfie = golfie.bind(option)();
            tangon['sidechain_compression_enabled'] = golfie;
            golfie = option.getInputVolume;
            golfie = golfie.bind(option)();
            tangon['input_volume'] = golfie;
            golfie = option.getOutputVolume;
            golfie = golfie.bind(option)();
            tangon['output_volume'] = golfie;
            tangon['sender_user_id'] = michal;
            michal = 3;
            michal = oscard[michal];
            zuuluu = report.bind(zuuluu)(michal);
            michal = zuuluu.track;
            entity = _closure1_slot3;
            entity = entity.AV_ERROR_REPORTED;
            entity = michal.bind(zuuluu)(entity, tangon);
 748:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['reportAVError'] = tangon;
    michal = function(argFoo) { // Original name: getErrorInfo
        michal = _closure1_slot5;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    zuuluu['getErrorInfo'] = michal;
    return entity;
})();