// app/modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    michal = michal.Millis;
    golfie = michal.SECOND;
    michal = 10;
    michal = michal * golfie;
    var _closure1_slot5 = michal;
    michal = {};
    golfie = function() { // Original name: getActiveErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot4;
            entity = michal.getRTCConnection;
            zuuluu = entity.bind(michal)();
            golfie = null;
            michal = golfie == zuuluu;
            entity = undefined;
            tangon = undefined;
            if(michal) { _fun00002_ip = 40; continue _fun00001 }
 30:
            michal = zuuluu.getDurationSeconds;
            tangon = michal.bind(zuuluu)();
 40:
            report = golfie != tangon;
            zuuluu = 0;
            if(!report) { _fun00002_ip = 52; continue _fun00001 }
 49:
            zuuluu = tangon;
 52:
            tangon = 30;
            if(!(!(zuuluu < tangon))) { _fun00002_ip = 346; continue _fun00001 }
 62:
            zuuluu = global;
            option = zuuluu.performance;
            report = option.now;
            option = report.bind(option)();
            verify = _closure1_slot3;
            report = verify.getLastAudioInputDeviceChangeTimestamp;
            report = report.bind(verify)();
            option = option - report;
            report = _closure1_slot5;
            if(!(!(option < report))) { _fun00002_ip = 346; continue _fun00001 }
 110:
            verify = _closure1_slot2;
            option = verify.getConnectionStats;
            offset = _closure1_slot4;
            report = offset.getRTCConnection;
            yankee = report.bind(offset)();
            offset = golfie == yankee;
            report = undefined;
            if(offset) { _fun00002_ip = 153; continue _fun00001 }
 143:
            offset = yankee.getMediaEngineConnectionId;
            report = offset.bind(yankee)();
 153:
            option = option.bind(verify)(report);
            verify = golfie == option;
            report = undefined;
            if(verify) { _fun00002_ip = 220; continue _fun00001 }
 167:
            option = option.stats;
            option = option.rtp;
            offset = option.outbound;
            verify = offset.find;
            option = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = 'audio';
                entity = entity === michal;
                return entity;
            };
            option = verify.bind(offset)(option);
            verify = golfie == option;
            report = undefined;
            if(verify) { _fun00002_ip = 220; continue _fun00001 }
 214:
            report = option.sampleRateMismatchPercent;
 220:
            golfie = golfie != report;
            michal = 0;
            if(!golfie) { _fun00002_ip = 232; continue _fun00001 }
 229:
            michal = report;
 232:
            report = zuuluu.Math;
            zuuluu = report.abs;
            zuuluu = zuuluu.bind(report)(michal);
            tangon = zuuluu > tangon;
            zuuluu = michal;
            michal = undefined;
            if(!tangon) { _fun00002_ip = 344; continue _fun00001 }
 261:
            tangon = {};
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            golfie = 4;
            golfie = oscard[golfie];
            golfie = report.bind(entity)(golfie);
            golfie = golfie.AVError;
            golfie = golfie.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH;
            tangon['type'] = golfie;
            tangon['audioCaptureSampleRateMismatchPercent'] = zuuluu;
            zuuluu = 5;
            zuuluu = oscard[zuuluu];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.getVoiceChannelErrorContext;
            romeon = zuuluu.bind(report)();
            foxtra = tangon;
            zuuluu = copyDataProperties(foxtra, romeon);
            zuuluu = new Array(1);
            zuuluu[0] = tangon;
            michal = zuuluu;
 344:
            return michal;
 346:
            return entity;
        }
    };
    michal['getActiveErrors'] = golfie;
    tangon = function(argFoo) { // Original name: makeErrorContextKey
        entity = argFoo;
        report = entity.mediaSessionId;
        tangon = entity.audioInputDeviceName;
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '';
        entity = ':';
        entity = zuuluu.bind(michal)(report, entity, tangon);
        return entity;
    };
    michal['makeErrorContextKey'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AVErrorAudioCaptureSampleRateMismatchDefinition'] = michal;
    return entity;
})();