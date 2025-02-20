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
            verify = argFoo;
            michal = argBar;
            zuuluu = michal.underlyingError;
            entity = null;
            if(!(entity != zuuluu)) { _fun00008_ip = 116; continue _fun00007 }
 18:
            entity = global;
            oscard = entity.Object;
            report = oscard.values;
            tangon = _closure1_slot6;
            oscard = report.bind(oscard)(tangon);
            report = oscard.includes;
            tangon = michal.underlyingError;
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00008_ip = 116; continue _fun00007 }
 62:
            tangon = _closure1_slot4;
            zuuluu = tangon.error;
            golfie = michal.underlyingError;
            entity = entity.HermesInternal;
            oscard = entity.concat;
            report = "Invalid underlying error string '";
            entity = "', must be member of AVUnderlyingError";
            entity = oscard.bind(report)(golfie, entity);
            entity = zuuluu.bind(tangon)(entity);
            _fun00008_ip = 472; continue _fun00007;
 116:
            report = _closure1_slot4;
            tangon = report.error;
            zuuluu = global;
            golfie = zuuluu.JSON;
            oscard = golfie.stringify;
            option = oscard.bind(golfie)(michal);
            zuuluu = zuuluu.HermesInternal;
            golfie = zuuluu.concat;
            oscard = 'AV error reported: ';
            zuuluu = ' ';
            zuuluu = golfie.bind(oscard)(verify, zuuluu, option);
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot5;
            yankee = tangon[verify];
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 4;
            golfie = oscard[zuuluu];
            zuuluu = undefined;
            offset = report.bind(zuuluu)(golfie);
            option = offset.dispatch;
            golfie = {};
            romeon = 'REPORT_AV_ERROR';
            golfie['type'] = romeon;
            golfie['error'] = verify;
            romeon = yankee.errorCode;
            golfie['errorCode'] = romeon;
            romeon = yankee.severity;
            golfie['severity'] = romeon;
            yankee = yankee.category;
            golfie['category'] = yankee;
            golfie['context'] = michal;
            golfie = option.bind(offset)(golfie);
            golfie = tangon[verify];
            tangon = {};
            option = verify.valueOf;
            option = option.bind(verify)();
            tangon['error_name'] = option;
            option = golfie.errorCode;
            tangon['error_code'] = option;
            option = golfie.severity;
            tangon['error_severity'] = option;
            golfie = golfie.category;
            tangon['error_category'] = golfie;
            golfie = michal.underlyingError;
            tangon['underlying_error'] = golfie;
            golfie = michal.errorMessage;
            tangon['error_message'] = golfie;
            golfie = michal.guildId;
            tangon['guild_id'] = golfie;
            golfie = michal.channelId;
            tangon['channel_id'] = golfie;
            golfie = michal.channelType;
            tangon['channel_type'] = golfie;
            golfie = michal.rtcConnectionId;
            tangon['rtc_connection_id'] = golfie;
            golfie = michal.mediaSessionId;
            tangon['media_session_id'] = golfie;
            michal = michal.mediaContext;
            tangon['context'] = michal;
            golfie = _closure1_slot2;
            michal = golfie.getHardwareEncoding;
            michal = michal.bind(golfie)();
            tangon['hardware_enabled'] = michal;
            michal = 3;
            michal = oscard[michal];
            zuuluu = report.bind(zuuluu)(michal);
            michal = zuuluu.track;
            entity = _closure1_slot3;
            entity = entity.AV_ERROR_REPORTED;
            entity = michal.bind(zuuluu)(entity, tangon);
 472:
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