// app/modules/errors/AVError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    report = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = report;
    var _closure1_slot2 = offset;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    romeon = true;
    tangon['value'] = romeon;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    tangon = offset[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    tangon = oscard.prototype;
    report = Object.create(tangon, {constructor: {value: oscard}});
    output = 'AVError';
    result = report;
    tangon = new result[oscard](output, sizing);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot3 = tangon;
    golfie = {};
    tangon = 'stream-failed-to-start';
    golfie['STREAM_FAILED_TO_START'] = tangon;
    tangon = 'no-input-devices';
    golfie['NO_INPUT_DEVICES'] = tangon;
    tangon = 'no-audio-input-detected';
    golfie['NO_AUDIO_INPUT_DETECTED'] = tangon;
    tangon = 'debug-log-upload-failed';
    golfie['DEBUG_LOG_UPLOAD_FAILED'] = tangon;
    tangon = 'stream-view-low-fps';
    golfie['STREAM_VIEW_LOW_FPS'] = tangon;
    tangon = 'stream-view-high-packet-loss';
    golfie['STREAM_VIEW_HIGH_PACKET_LOSS'] = tangon;
    tangon = 'stream-send-low-encode-fps';
    golfie['STREAM_SEND_LOW_FPS'] = tangon;
    tangon = 'stream-send-high-packet-loss';
    golfie['STREAM_SEND_HIGH_PACKET_LOSS'] = tangon;
    tangon = 'stream-send-network-quality';
    golfie['STREAM_BAD_NETWORK_QUALITY'] = tangon;
    tangon = 'stream-soundshare-failed';
    golfie['STREAM_SOUNDSHARE_FAILED'] = tangon;
    tangon = 'noise-canceller-error';
    golfie['NOISE_CANCELLER_ERROR'] = tangon;
    tangon = 'screenshare-min-os-requirement';
    golfie['SCREENSHARE_OS_NOT_SUPPORTED'] = tangon;
    tangon = 'stream-reconnecting';
    golfie['STREAM_RECONNECTING'] = tangon;
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
    yankee = golfie.STREAM_SOUNDSHARE_FAILED;
    option = {};
    foxtra = 1001;
    option['errorCode'] = foxtra;
    foxtra = report.Warning;
    option['severity'] = foxtra;
    foxtra = oscard.Audio;
    option['category'] = foxtra;
    option['isErrorOutbound'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.NOISE_CANCELLER_ERROR;
    option = {};
    foxtra = 1002;
    option['errorCode'] = foxtra;
    foxtra = report.Warning;
    option['severity'] = foxtra;
    foxtra = oscard.Audio;
    option['category'] = foxtra;
    option['isErrorOutbound'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.STREAM_FAILED_TO_START;
    option = {};
    foxtra = 2001;
    option['errorCode'] = foxtra;
    foxtra = report.Critical;
    option['severity'] = foxtra;
    foxtra = oscard.Video;
    option['category'] = foxtra;
    option['isErrorOutbound'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.STREAM_VIEW_LOW_FPS;
    option = {};
    foxtra = 2002;
    option['errorCode'] = foxtra;
    foxtra = report.Warning;
    option['severity'] = foxtra;
    foxtra = oscard.Video;
    option['category'] = foxtra;
    foxtra = false;
    option['isErrorOutbound'] = foxtra;
    tangon[yankee] = option;
    yankee = golfie.STREAM_VIEW_HIGH_PACKET_LOSS;
    option = {};
    backup = 2003;
    option['errorCode'] = backup;
    backup = report.Warning;
    option['severity'] = backup;
    backup = oscard.Video;
    option['category'] = backup;
    option['isErrorOutbound'] = foxtra;
    tangon[yankee] = option;
    yankee = golfie.STREAM_SEND_HIGH_PACKET_LOSS;
    option = {};
    backup = 2004;
    option['errorCode'] = backup;
    backup = report.Warning;
    option['severity'] = backup;
    backup = oscard.Video;
    option['category'] = backup;
    option['isErrorOutbound'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.STREAM_SEND_LOW_FPS;
    option = {};
    backup = 2005;
    option['errorCode'] = backup;
    backup = report.Warning;
    option['severity'] = backup;
    backup = oscard.Video;
    option['category'] = backup;
    option['isErrorOutbound'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.STREAM_BAD_NETWORK_QUALITY;
    option = {};
    backup = 2006;
    option['errorCode'] = backup;
    backup = report.Warning;
    option['severity'] = backup;
    backup = oscard.Video;
    option['category'] = backup;
    option['isErrorOutbound'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.STREAM_RECONNECTING;
    option = {};
    backup = 2007;
    option['errorCode'] = backup;
    backup = report.Warning;
    option['severity'] = backup;
    backup = oscard.Video;
    option['category'] = backup;
    option['isErrorOutbound'] = foxtra;
    tangon[yankee] = option;
    yankee = golfie.NO_INPUT_DEVICES;
    option = {};
    foxtra = 3001;
    option['errorCode'] = foxtra;
    foxtra = report.Critical;
    option['severity'] = foxtra;
    foxtra = oscard.Devices;
    option['category'] = foxtra;
    option['isErrorOutbound'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.NO_AUDIO_INPUT_DETECTED;
    option = {};
    foxtra = 3002;
    option['errorCode'] = foxtra;
    foxtra = report.Critical;
    option['severity'] = foxtra;
    foxtra = oscard.Devices;
    option['category'] = foxtra;
    option['isErrorOutbound'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.SCREENSHARE_OS_NOT_SUPPORTED;
    option = {};
    foxtra = 3003;
    option['errorCode'] = foxtra;
    foxtra = report.Critical;
    option['severity'] = foxtra;
    foxtra = oscard.Devices;
    option['category'] = foxtra;
    option['isErrorOutbound'] = romeon;
    tangon[yankee] = option;
    yankee = golfie.DEBUG_LOG_UPLOAD_FAILED;
    option = {};
    foxtra = 4001;
    option['errorCode'] = foxtra;
    foxtra = report.Info;
    option['severity'] = foxtra;
    foxtra = oscard.Debug;
    option['category'] = foxtra;
    option['isErrorOutbound'] = romeon;
    tangon[yankee] = option;
    var _closure1_slot4 = tangon;
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
    option = 'NoiseCancellerError.CPU_OVERUSE';
    tangon['NoiseCancellerCpuOveruse'] = option;
    option = 'NoiseCancellerError.FAILED';
    tangon['NoiseCancellerFailed'] = option;
    option = 'NoiseCancellerError.VAD_CPU_OVERUSE';
    tangon['NoiseCancellerVadCpuOveruse'] = option;
    var _closure1_slot5 = tangon;
    option = function() { // Original name: validateUniqueErrorCodes
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = global;
            oscard = entity.Object;
            report = oscard.values;
            tangon = _closure1_slot4;
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
            if(!(report === tangon)) { _fun00002_ip = 93; continue _fun00001 }
 89:
            tangon = undefined;
            return tangon;
 93:
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
            zuuluu = _closure1_slot4;
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
    option = 3;
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
            tangon = argFoo;
            zuuluu = argBar;
            michal = zuuluu.underlyingError;
            entity = null;
            if(!(entity != michal)) { _fun00008_ip = 116; continue _fun00007 }
 18:
            entity = global;
            golfie = entity.Object;
            oscard = golfie.values;
            report = _closure1_slot5;
            golfie = oscard.bind(golfie)(report);
            oscard = golfie.includes;
            report = zuuluu.underlyingError;
            report = oscard.bind(golfie)(report);
            if(report) { _fun00008_ip = 116; continue _fun00007 }
 62:
            report = _closure1_slot3;
            michal = report.error;
            option = zuuluu.underlyingError;
            entity = entity.HermesInternal;
            golfie = entity.concat;
            oscard = "Invalid underlying error string '";
            entity = "', must be member of AVUnderlyingError";
            entity = golfie.bind(oscard)(option, entity);
            entity = michal.bind(report)(entity);
            _fun00008_ip = 299; continue _fun00007;
 116:
            oscard = _closure1_slot3;
            report = oscard.error;
            michal = global;
            option = michal.JSON;
            golfie = option.stringify;
            verify = golfie.bind(option)(zuuluu);
            michal = michal.HermesInternal;
            option = michal.concat;
            golfie = 'AV error reported: ';
            michal = ' ';
            michal = option.bind(golfie)(tangon, michal, verify);
            michal = report.bind(oscard)(michal);
            michal = _closure1_slot4;
            verify = michal[tangon];
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 1;
            michal = oscard[michal];
            report = undefined;
            option = golfie.bind(report)(michal);
            golfie = option.dispatch;
            michal = {};
            offset = 'REPORT_AV_ERROR';
            michal['type'] = offset;
            michal['error'] = tangon;
            offset = verify.errorCode;
            michal['errorCode'] = offset;
            offset = verify.severity;
            michal['severity'] = offset;
            verify = verify.category;
            michal['category'] = verify;
            michal['context'] = zuuluu;
            michal = golfie.bind(option)(michal);
            michal = _closure1_slot0;
            entity = 2;
            entity = oscard[entity];
            michal = michal.bind(report)(entity);
            entity = michal.sendAVErrorAnalyticsEvent;
            entity = entity.bind(michal)(tangon, zuuluu);
 299:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['reportAVError'] = tangon;
    michal = function(argFoo) { // Original name: getErrorInfo
        michal = _closure1_slot4;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    zuuluu['getErrorInfo'] = michal;
    return entity;
})();