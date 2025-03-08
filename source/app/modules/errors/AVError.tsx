// app/modules/errors/AVError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    report = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = report;
    var _closure1_slot2 = offset;
    backup = function(argFoo) { // Original name: handleMediaEngineConnectionStats
        entity = _closure1_slot18;
        _closure1_slot19 = entity;
        entity = argFoo;
        _closure1_slot18 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot21 = backup;
    entity = function(argFoo) { // Original name: getLatestOutboundBitrateEstimate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            oscard = _closure1_slot18;
            entity = null;
            tangon = entity == oscard;
            michal = undefined;
            if(tangon) { _fun00002_ip = 71; continue _fun00001 }
 27:
            tangon = oscard.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = entity == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 71; continue _fun00001 }
 53:
            zuuluu = zuuluu.stats;
            zuuluu = zuuluu.transport;
            michal = zuuluu.outboundBitrateEstimate;
 71:
            zuuluu = entity != michal;
            entity = null;
            if(!zuuluu) { _fun00002_ip = 83; continue _fun00001 }
 80:
            entity = michal;
 83:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: getLatestInboundBitrateEstimate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot18;
            michal = zuuluu.find;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            tangon = entity == zuuluu;
            michal = undefined;
            if(tangon) { _fun00004_ip = 62; continue _fun00003 }
 44:
            zuuluu = zuuluu.stats;
            zuuluu = zuuluu.transport;
            michal = zuuluu.inboundBitrateEstimate;
 62:
            zuuluu = entity != michal;
            entity = null;
            if(!zuuluu) { _fun00004_ip = 74; continue _fun00003 }
 71:
            entity = michal;
 74:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: getCurrentScreenshareCaptureMethod
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot18;
            entity = entity.length;
            tangon = 0;
            if(!(tangon !== entity)) { _fun00006_ip = 349; continue _fun00005 }
 23:
            entity = _closure1_slot19;
            entity = entity.length;
            if(!(tangon !== entity)) { _fun00006_ip = 349; continue _fun00005 }
 39:
            report = {};
            oscard = ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames'];
            entity = oscard.length;
            michal = tangon < entity;
            entity = null;
            romeon = undefined;
            zuuluu = 0;
            if(!michal) { _fun00006_ip = 233; continue _fun00005 }
 72:
            option = oscard[zuuluu];
            offset = _closure1_slot19;
            verify = offset.find;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure1_slot13;
                entity = entity.STREAM;
                entity = michal === entity;
                return entity;
            };
            verify = verify.bind(offset)(michal);
            offset = entity == verify;
            michal = undefined;
            if(offset) { _fun00006_ip = 131; continue _fun00005 }
 106:
            verify = verify.stats;
            verify = verify.screenshare;
            offset = entity == verify;
            michal = undefined;
            if(offset) { _fun00006_ip = 131; continue _fun00005 }
 127:
            michal = verify[option];
 131:
            offset = entity != michal;
            verify = 0;
            if(!offset) { _fun00006_ip = 143; continue _fun00005 }
 140:
            verify = michal;
 143:
            yankee = _closure1_slot18;
            offset = yankee.find;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure1_slot13;
                entity = entity.STREAM;
                entity = michal === entity;
                return entity;
            };
            michal = offset.bind(yankee)(michal);
            yankee = entity == michal;
            offset = undefined;
            if(yankee) { _fun00006_ip = 198; continue _fun00005 }
 173:
            michal = michal.stats;
            michal = michal.screenshare;
            yankee = entity == michal;
            offset = undefined;
            if(yankee) { _fun00006_ip = 198; continue _fun00005 }
 194:
            offset = michal[option];
 198:
            yankee = entity != offset;
            michal = 0;
            if(!yankee) { _fun00006_ip = 210; continue _fun00005 }
 207:
            michal = offset;
 210:
            michal = michal - verify;
            report[option] = michal;
            zuuluu = zuuluu + 1;
            michal = oscard.length;
            if(zuuluu < michal) { _fun00006_ip = 72; continue _fun00005 }
 233:
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.entries;
            yankee = michal.bind(zuuluu)(report);
            michal = yankee.length;
            report = tangon < michal;
            option = -1;
            offset = 2;
            verify = 1;
            golfie = null;
            oscard = 0;
            zuuluu = option;
            michal = null;
            if(!report) { _fun00006_ip = 335; continue _fun00005 }
 285:
            backup = yankee[oscard];
            report = _closure1_slot3;
            backup = report.bind(romeon)(backup, offset);
            report = backup[tangon];
            backup = backup[verify];
            if(!(backup > option)) { _fun00006_ip = 317; continue _fun00005 }
 311:
            option = backup;
            golfie = report;
 317:
            oscard = oscard + 1;
            report = yankee.length;
            zuuluu = option;
            michal = golfie;
            if(oscard < report) { _fun00006_ip = 285; continue _fun00005 }
 335:
            zuuluu = zuuluu > tangon;
            entity = null;
            if(!zuuluu) { _fun00006_ip = 347; continue _fun00005 }
 344:
            entity = michal;
 347:
            return entity;
 349:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: getCurrentEncoder
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = _closure1_slot18;
            tangon = report.find;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            tangon = tangon.bind(report)(entity);
            entity = null;
            if(!(entity != tangon)) { _fun00008_ip = 131; continue _fun00007 }
 39:
            tangon = tangon.stats;
            tangon = tangon.rtp;
            report = tangon.outbound;
            tangon = report.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = 'video';
                entity = entity === michal;
                return entity;
            };
            oscard = tangon.bind(report)(michal);
            tangon = entity == oscard;
            michal = null;
            if(tangon) { _fun00008_ip = 129; continue _fun00007 }
 83:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 12;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.parseEncoder;
            golfie = entity == oscard;
            if(golfie) { _fun00008_ip = 124; continue _fun00007 }
 118:
            zuuluu = oscard.encoderImplementationName;
 124:
            michal = tangon.bind(report)(zuuluu);
 129:
            return michal;
 131:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar) { // Original name: getCurrentDecoder
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = null;
            if(!(entity != report)) { _fun00010_ip = 144; continue _fun00009 }
 21:
            golfie = _closure1_slot18;
            oscard = golfie.find;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            tangon = oscard.bind(golfie)(tangon);
            if(!(entity != tangon)) { _fun00010_ip = 142; continue _fun00009 }
 49:
            tangon = tangon.stats;
            tangon = tangon.rtp;
            tangon = tangon.inbound;
            report = tangon[report];
            if(!(entity != report)) { _fun00010_ip = 140; continue _fun00009 }
 75:
            tangon = report.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = 'video';
                entity = entity === michal;
                return entity;
            };
            report = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 12;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.parseDecoder;
            oscard = entity == report;
            if(oscard) { _fun00010_ip = 133; continue _fun00009 }
 127:
            michal = report.decoderImplementationName;
 133:
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 140:
            return entity;
 142:
            return entity;
 144:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getCurrentCodec
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            verify = argBaz;
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = _closure1_slot18;
            tangon = report.find;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            tangon = tangon.bind(report)(entity);
            report = null;
            oscard = report == tangon;
            entity = undefined;
            golfie = undefined;
            if(oscard) { _fun00012_ip = 61; continue _fun00011 }
 49:
            tangon = tangon.stats;
            golfie = tangon.rtp;
 61:
            tangon = argBar;
            if(tangon) { _fun00012_ip = 129; continue _fun00011 }
 67:
            oscard = report != verify;
            tangon = null;
            if(!oscard) { _fun00012_ip = 176; continue _fun00011 }
 76:
            oscard = report == golfie;
            option = undefined;
            if(oscard) { _fun00012_ip = 112; continue _fun00011 }
 85:
            oscard = golfie.inbound;
            offset = oscard[verify];
            verify = offset.find;
            oscard = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = 'video';
                entity = entity === michal;
                return entity;
            };
            option = verify.bind(offset)(oscard);
 112:
            verify = report != option;
            oscard = null;
            if(!verify) { _fun00012_ip = 124; continue _fun00011 }
 121:
            oscard = option;
 124:
            tangon = oscard;
            _fun00012_ip = 176; continue _fun00011;
 129:
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00012_ip = 161; continue _fun00011 }
 138:
            option = golfie.outbound;
            golfie = option.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = 'video';
                entity = entity === michal;
                return entity;
            };
            oscard = golfie.bind(option)(zuuluu);
 161:
            golfie = report != oscard;
            zuuluu = null;
            if(!golfie) { _fun00012_ip = 173; continue _fun00011 }
 170:
            zuuluu = oscard;
 173:
            tangon = zuuluu;
 176:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 12;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.parseCodecType;
            report = report == tangon;
            entity = undefined;
            if(report) { _fun00012_ip = 222; continue _fun00011 }
 211:
            tangon = tangon.codec;
            entity = tangon.name;
 222:
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    foxtra = true;
    tangon['value'] = foxtra;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    tangon = offset[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = offset[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = offset[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = offset[tangon];
    yankee = report.bind(entity)(tangon);
    var _closure1_slot6 = yankee;
    tangon = 4;
    tangon = offset[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = offset[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = offset[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = offset[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = offset[tangon];
    tangon = verify.bind(entity)(tangon);
    tangon = tangon.getSystemAnalyticsInfo;
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = offset[tangon];
    tangon = verify.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = offset[tangon];
    tangon = verify.bind(entity)(tangon);
    oscard = tangon.MediaEngineContextTypes;
    var _closure1_slot13 = oscard;
    tangon = tangon.SIMULCAST_HQ_QUALITY;
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = offset[tangon];
    oscard = report.bind(entity)(tangon);
    tangon = oscard.prototype;
    report = Object.create(tangon, {constructor: {value: oscard}});
    echoed = 'AVError';
    update = report;
    tangon = new update[oscard](echoed, result);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot15 = tangon;
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
    romeon = golfie.STREAM_SOUNDSHARE_FAILED;
    option = {};
    kiloes = 1001;
    option['errorCode'] = kiloes;
    kiloes = report.Warning;
    option['severity'] = kiloes;
    kiloes = oscard.Audio;
    option['category'] = kiloes;
    option['isErrorOutbound'] = foxtra;
    tangon[romeon] = option;
    romeon = golfie.STREAM_FAILED_TO_START;
    option = {};
    kiloes = 2001;
    option['errorCode'] = kiloes;
    kiloes = report.Critical;
    option['severity'] = kiloes;
    kiloes = oscard.Video;
    option['category'] = kiloes;
    option['isErrorOutbound'] = foxtra;
    tangon[romeon] = option;
    romeon = golfie.STREAM_VIEW_LOW_FPS;
    option = {};
    kiloes = 2002;
    option['errorCode'] = kiloes;
    kiloes = report.Warning;
    option['severity'] = kiloes;
    kiloes = oscard.Video;
    option['category'] = kiloes;
    kiloes = false;
    option['isErrorOutbound'] = kiloes;
    tangon[romeon] = option;
    romeon = golfie.STREAM_VIEW_HIGH_PACKET_LOSS;
    option = {};
    sizing = 2003;
    option['errorCode'] = sizing;
    sizing = report.Warning;
    option['severity'] = sizing;
    sizing = oscard.Video;
    option['category'] = sizing;
    option['isErrorOutbound'] = kiloes;
    tangon[romeon] = option;
    romeon = golfie.STREAM_SEND_HIGH_PACKET_LOSS;
    option = {};
    kiloes = 2004;
    option['errorCode'] = kiloes;
    kiloes = report.Warning;
    option['severity'] = kiloes;
    kiloes = oscard.Video;
    option['category'] = kiloes;
    option['isErrorOutbound'] = foxtra;
    tangon[romeon] = option;
    romeon = golfie.STREAM_SEND_LOW_FPS;
    option = {};
    kiloes = 2005;
    option['errorCode'] = kiloes;
    kiloes = report.Warning;
    option['severity'] = kiloes;
    kiloes = oscard.Video;
    option['category'] = kiloes;
    option['isErrorOutbound'] = foxtra;
    tangon[romeon] = option;
    romeon = golfie.STREAM_BAD_NETWORK_QUALITY;
    option = {};
    kiloes = 2006;
    option['errorCode'] = kiloes;
    kiloes = report.Warning;
    option['severity'] = kiloes;
    kiloes = oscard.Video;
    option['category'] = kiloes;
    option['isErrorOutbound'] = foxtra;
    tangon[romeon] = option;
    romeon = golfie.NO_INPUT_DEVICES;
    option = {};
    kiloes = 3001;
    option['errorCode'] = kiloes;
    kiloes = report.Critical;
    option['severity'] = kiloes;
    kiloes = oscard.Devices;
    option['category'] = kiloes;
    option['isErrorOutbound'] = foxtra;
    tangon[romeon] = option;
    romeon = golfie.NO_AUDIO_INPUT_DETECTED;
    option = {};
    kiloes = 3002;
    option['errorCode'] = kiloes;
    kiloes = report.Critical;
    option['severity'] = kiloes;
    kiloes = oscard.Devices;
    option['category'] = kiloes;
    option['isErrorOutbound'] = foxtra;
    tangon[romeon] = option;
    romeon = golfie.DEBUG_LOG_UPLOAD_FAILED;
    option = {};
    kiloes = 4001;
    option['errorCode'] = kiloes;
    kiloes = report.Info;
    option['severity'] = kiloes;
    kiloes = oscard.Debug;
    option['category'] = kiloes;
    option['isErrorOutbound'] = foxtra;
    tangon[romeon] = option;
    var _closure1_slot16 = tangon;
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
    var _closure1_slot17 = tangon;
    option = new Array(0);
    var _closure1_slot18 = option;
    option = new Array(0);
    var _closure1_slot19 = option;
    option = function() { // Original name: validateUniqueErrorCodes
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = global;
            oscard = entity.Object;
            report = oscard.values;
            tangon = _closure1_slot16;
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
            if(!(report === tangon)) { _fun00014_ip = 95; continue _fun00013 }
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
            zuuluu = _closure1_slot16;
            report = tangon.bind(report)(zuuluu);
            tangon = report.filter;
            zuuluu = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    entity = tangon().value;
                    entity = michal;
                    oscard = undefined;
                    zuuluu = entity === oscard;
                    entity = undefined;
                    if(zuuluu) { _fun00016_ip = 49; continue _fun00015 }
 24:
                    report = tangon().value;
                    tangon = michal;
                    tangon = tangon === oscard;
                    entity = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00016_ip = 49; continue _fun00015 }
 43:
                    entity = report;
                    zuuluu = tangon;
 49:
                    if(zuuluu) { _fun00016_ip = 55; continue _fun00015 }
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
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    entity = tangon().value;
                    zuuluu = michal;
                    golfie = undefined;
                    zuuluu = zuuluu === golfie;
                    report = undefined;
                    if(zuuluu) { _fun00018_ip = 27; continue _fun00017 }
 24:
                    report = entity;
 27:
                    entity = undefined;
                    if(zuuluu) { _fun00018_ip = 57; continue _fun00017 }
 32:
                    oscard = tangon().value;
                    tangon = michal;
                    tangon = tangon === golfie;
                    entity = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00018_ip = 57; continue _fun00017 }
 51:
                    entity = oscard;
                    zuuluu = tangon;
 57:
                    if(zuuluu) { _fun00018_ip = 63; continue _fun00017 }
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
    option = yankee.getMediaEngine;
    foxtra = option.bind(yankee)();
    var _closure1_slot20 = foxtra;
    romeon = foxtra.on;
    option = 19;
    yankee = offset[option];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.MediaEngineEvent;
    yankee = yankee.ConnectionStats;
    yankee = romeon.bind(foxtra)(yankee, backup);
    romeon = foxtra.on;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option.MediaEngineEvent;
    yankee = option.Destroy;
    option = function() {
        tangon = _closure1_slot20;
        zuuluu = tangon.off;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        michal = 19;
        report = report[michal];
        michal = undefined;
        michal = oscard.bind(michal)(report);
        michal = michal.MediaEngineEvent;
        michal = michal.ConnectionStats;
        entity = _closure1_slot21;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    option = romeon.bind(foxtra)(yankee, option);
    option = 20;
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
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            michal = zuuluu.underlyingError;
            entity = null;
            if(!(entity != michal)) { _fun00020_ip = 116; continue _fun00019 }
 18:
            entity = global;
            golfie = entity.Object;
            oscard = golfie.values;
            report = _closure1_slot17;
            golfie = oscard.bind(golfie)(report);
            oscard = golfie.includes;
            report = zuuluu.underlyingError;
            report = oscard.bind(golfie)(report);
            if(report) { _fun00020_ip = 116; continue _fun00019 }
 62:
            report = _closure1_slot15;
            michal = report.error;
            option = zuuluu.underlyingError;
            entity = entity.HermesInternal;
            golfie = entity.concat;
            oscard = "Invalid underlying error string '";
            entity = "', must be member of AVUnderlyingError";
            entity = golfie.bind(oscard)(option, entity);
            entity = michal.bind(report)(entity);
            _fun00020_ip = 286; continue _fun00019;
 116:
            oscard = _closure1_slot15;
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
            michal = _closure1_slot16;
            golfie = michal[tangon];
            report = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 18;
            entity = michal[entity];
            michal = undefined;
            oscard = report.bind(michal)(entity);
            report = oscard.dispatch;
            entity = {};
            option = 'REPORT_AV_ERROR';
            entity['type'] = option;
            entity['error'] = tangon;
            option = golfie.errorCode;
            entity['errorCode'] = option;
            option = golfie.severity;
            entity['severity'] = option;
            golfie = golfie.category;
            entity['category'] = golfie;
            entity['context'] = zuuluu;
            entity = report.bind(oscard)(entity);
            entity = function(argFoo, argBar) { // Original name: sendAnalyticsEvent
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    report = argFoo;
                    offset = argBar;
                    var _closure3_slot0 = report;
                    var _closure3_slot1 = offset;
                    oscard = offset.channelId;
                    golfie = null;
                    if(!(golfie == oscard)) { _fun00022_ip = 44; continue _fun00021 }
 27:
                    zuuluu = _closure1_slot9;
                    entity = zuuluu.getVoiceChannelId;
                    oscard = entity.bind(zuuluu)();
 44:
                    var _closure3_slot3 = oscard;
                    tangon = _closure1_slot5;
                    entity = tangon.getChannel;
                    entity = entity.bind(tangon)(oscard);
                    var _closure3_slot4 = entity;
                    entity = offset.streamKey;
                    entity = golfie != entity;
                    oscard = null;
                    if(!entity) { _fun00022_ip = 123; continue _fun00021 }
 84:
                    option = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 13;
                    tangon = tangon[entity];
                    entity = undefined;
                    option = option.bind(entity)(tangon);
                    tangon = option.decodeStreamKey;
                    entity = offset.streamKey;
                    oscard = tangon.bind(option)(entity);
 123:
                    var _closure3_slot5 = oscard;
                    entity = offset.streamKey;
                    entity = golfie != entity;
                    tangon = null;
                    if(!entity) { _fun00022_ip = 163; continue _fun00021 }
 142:
                    verify = _closure1_slot10;
                    option = verify.getRTCConnection;
                    entity = offset.streamKey;
                    tangon = option.bind(verify)(entity);
 163:
                    var _closure3_slot6 = tangon;
                    entity = offset.streamKey;
                    verify = tangon;
                    if(!(golfie == entity)) { _fun00022_ip = 194; continue _fun00021 }
 180:
                    option = _closure1_slot7;
                    entity = option.getRTCConnection;
                    verify = entity.bind(option)();
 194:
                    var _closure3_slot7 = verify;
                    entity = offset.streamKey;
                    entity = golfie != entity;
                    yankee = null;
                    if(!entity) { _fun00022_ip = 246; continue _fun00021 }
 213:
                    option = golfie == tangon;
                    entity = undefined;
                    if(option) { _fun00022_ip = 243; continue _fun00021 }
 222:
                    tangon = tangon.analyticsContext;
                    option = golfie == tangon;
                    entity = undefined;
                    if(option) { _fun00022_ip = 243; continue _fun00021 }
 237:
                    entity = tangon.streamApplication;
 243:
                    yankee = entity;
 246:
                    tangon = _closure1_slot4;
                    entity = tangon.getState;
                    entity = entity.bind(tangon)();
                    tangon = entity.resolution;
                    var _closure3_slot8 = tangon;
                    entity = entity.fps;
                    var _closure3_slot9 = entity;
                    option = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 14;
                    tangon = tangon[entity];
                    entity = undefined;
                    option = option.bind(entity)(tangon);
                    tangon = option.getRunningGameAnalytics;
                    tangon = tangon.bind(option)(yankee);
                    option = tangon.gameName;
                    var _closure3_slot10 = option;
                    option = tangon.gameId;
                    var _closure3_slot11 = option;
                    option = tangon.exe;
                    var _closure3_slot12 = option;
                    tangon = tangon.distributor;
                    var _closure3_slot13 = tangon;
                    tangon = _closure1_slot16;
                    tangon = tangon[report];
                    report = tangon.isErrorOutbound;
                    var _closure3_slot14 = report;
                    tangon = offset.mediaContext;
                    if(!(golfie == tangon)) { _fun00022_ip = 391; continue _fun00021 }
 381:
                    option = _closure1_slot13;
                    tangon = option.DEFAULT;
 391:
                    var _closure3_slot15 = tangon;
                    if(!(golfie == oscard)) { _fun00022_ip = 406; continue _fun00021 }
 399:
                    tangon = offset.userId;
                    _fun00022_ip = 412; continue _fun00021;
 406:
                    tangon = oscard.ownerId;
 412:
                    var _closure3_slot16 = tangon;
                    if(!(golfie == oscard)) { _fun00022_ip = 433; continue _fun00021 }
 420:
                    tangon = 'receiver';
                    if(!report) { _fun00022_ip = 431; continue _fun00021 }
 427:
                    tangon = 'sender';
 431:
                    _fun00022_ip = 455; continue _fun00021;
 433:
                    yankee = golfie == verify;
                    option = undefined;
                    if(yankee) { _fun00022_ip = 452; continue _fun00021 }
 442:
                    yankee = verify.getVoiceParticipantType;
                    option = yankee.bind(verify)();
 452:
                    tangon = option;
 455:
                    var _closure3_slot17 = tangon;
                    tangon = offset.streamKey;
                    if(!(golfie != tangon)) { _fun00022_ip = 476; continue _fun00021 }
 469:
                    if(!(golfie == oscard)) { _fun00022_ip = 606; continue _fun00021 }
 476:
                    if(report) { _fun00022_ip = 523; continue _fun00021 }
 479:
                    tangon = offset.userId;
                    option = golfie != tangon;
                    tangon = null;
                    if(!option) { _fun00022_ip = 521; continue _fun00021 }
 493:
                    yankee = golfie == verify;
                    option = undefined;
                    if(yankee) { _fun00022_ip = 518; continue _fun00021 }
 502:
                    yankee = verify.getInboundStats;
                    offset = offset.userId;
                    option = yankee.bind(verify)(offset);
 518:
                    tangon = option;
 521:
                    _fun00022_ip = 604; continue _fun00021;
 523:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    option = 15;
                    option = yankee[option];
                    romeon = offset.bind(entity)(option);
                    yankee = romeon.maxBy;
                    option = golfie == verify;
                    offset = undefined;
                    if(option) { _fun00022_ip = 568; continue _fun00021 }
 558:
                    option = verify.getOutboundStats;
                    offset = option.bind(verify)();
 568:
                    if(!(golfie == offset)) { _fun00022_ip = 576; continue _fun00021 }
 572:
                    offset = new Array(0);
 576:
                    option = function(argFoo) {
                        entity = argFoo;
                        entity = entity.num_frames;
                        return entity;
                    };
                    offset = yankee.bind(romeon)(offset, option);
                    yankee = golfie != offset;
                    option = null;
                    if(!yankee) { _fun00022_ip = 601; continue _fun00021 }
 598:
                    option = offset;
 601:
                    tangon = option;
 604:
                    _fun00022_ip = 684; continue _fun00021;
 606:
                    option = golfie == verify;
                    if(report) { _fun00022_ip = 637; continue _fun00021 }
 613:
                    report = undefined;
                    if(option) { _fun00022_ip = 635; continue _fun00021 }
 618:
                    offset = verify.getInboundStats;
                    oscard = oscard.ownerId;
                    report = offset.bind(verify)(oscard);
 635:
                    _fun00022_ip = 681; continue _fun00021;
 637:
                    oscard = undefined;
                    if(option) { _fun00022_ip = 678; continue _fun00021 }
 642:
                    option = verify.getOutboundStats;
                    verify = option.bind(verify)();
                    golfie = golfie == verify;
                    oscard = undefined;
                    if(golfie) { _fun00022_ip = 678; continue _fun00021 }
 661:
                    option = verify.find;
                    golfie = function(argFoo) {
                        entity = argFoo;
                        michal = entity.quality;
                        entity = _closure1_slot14;
                        entity = michal === entity;
                        return entity;
                    };
                    oscard = option.bind(verify)(golfie);
 678:
                    report = oscard;
 681:
                    tangon = report;
 684:
                    var _closure3_slot2 = tangon;
                    zuuluu = _closure1_slot11;
                    tangon = zuuluu.bind(entity)();
                    zuuluu = tangon.then;
                    michal = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            oscard = argFoo;
                            report = {};
                            tangon = _closure3_slot0;
                            entity = tangon.valueOf;
                            entity = entity.bind(tangon)();
                            report['error_name'] = entity;
                            entity = _closure1_slot16;
                            golfie = entity[tangon];
                            golfie = golfie.errorCode;
                            report['error_code'] = golfie;
                            golfie = entity[tangon];
                            golfie = golfie.severity;
                            report['error_severity'] = golfie;
                            entity = entity[tangon];
                            entity = entity.category;
                            report['error_category'] = entity;
                            entity = _closure3_slot1;
                            golfie = entity.underlyingError;
                            tangon = null;
                            option = tangon != golfie;
                            entity = null;
                            if(!option) { _fun00024_ip = 107; continue _fun00023 }
 104:
                            entity = golfie;
 107:
                            report['underlying_error'] = entity;
                            entity = _closure3_slot1;
                            golfie = entity.errorMessage;
                            option = tangon != golfie;
                            entity = null;
                            if(!option) { _fun00024_ip = 136; continue _fun00023 }
 133:
                            entity = golfie;
 136:
                            report['error_message'] = entity;
                            entity = _closure3_slot4;
                            golfie = tangon == entity;
                            entity = undefined;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 165; continue _fun00023 }
 156:
                            golfie = _closure3_slot4;
                            option = golfie.guild_id;
 165:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 177; continue _fun00023 }
 174:
                            golfie = option;
 177:
                            report['guild_id'] = golfie;
                            golfie = _closure3_slot3;
                            option = tangon != golfie;
                            golfie = null;
                            if(!option) { _fun00024_ip = 198; continue _fun00023 }
 194:
                            golfie = _closure3_slot3;
 198:
                            report['channel_id'] = golfie;
                            golfie = _closure3_slot4;
                            golfie = tangon == golfie;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 224; continue _fun00023 }
 215:
                            golfie = _closure3_slot4;
                            option = golfie.type;
 224:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 236; continue _fun00023 }
 233:
                            golfie = option;
 236:
                            report['channel_type'] = golfie;
                            golfie = _closure3_slot1;
                            option = golfie.rtcConnectionId;
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 263; continue _fun00023 }
 260:
                            golfie = option;
 263:
                            report['rtc_connection_id'] = golfie;
                            golfie = _closure3_slot1;
                            option = golfie.mediaSessionId;
                            if(!(tangon == option)) { _fun00024_ip = 296; continue _fun00023 }
 282:
                            verify = _closure1_slot7;
                            golfie = verify.getMediaSessionId;
                            option = golfie.bind(verify)();
 296:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 308; continue _fun00023 }
 305:
                            golfie = option;
 308:
                            report['media_session_id'] = golfie;
                            golfie = _closure3_slot1;
                            option = golfie.parentMediaSessionId;
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 335; continue _fun00023 }
 332:
                            golfie = option;
 335:
                            report['parent_media_session_id'] = golfie;
                            golfie = _closure3_slot1;
                            option = golfie.mediaContext;
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 362; continue _fun00023 }
 359:
                            golfie = option;
 362:
                            report['context'] = golfie;
                            option = _closure1_slot7;
                            golfie = option.getRTCConnection;
                            verify = golfie.bind(option)();
                            golfie = tangon == verify;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 401; continue _fun00023 }
 389:
                            golfie = verify.getVoiceVersion;
                            option = golfie.bind(verify)();
 401:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 413; continue _fun00023 }
 410:
                            golfie = option;
 413:
                            report['voice_backend_version'] = golfie;
                            option = _closure1_slot7;
                            golfie = option.getRTCConnection;
                            verify = golfie.bind(option)();
                            golfie = tangon == verify;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 453; continue _fun00023 }
 441:
                            golfie = verify.getRtcWorkerVersion;
                            option = golfie.bind(verify)();
 453:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 465; continue _fun00023 }
 462:
                            golfie = option;
 465:
                            report['rtc_worker_backend_version'] = golfie;
                            verify = _closure1_slot8;
                            option = verify.getRegion;
                            offset = _closure1_slot7;
                            golfie = offset.getHostname;
                            golfie = golfie.bind(offset)();
                            option = option.bind(verify)(golfie);
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 511; continue _fun00023 }
 508:
                            golfie = option;
 511:
                            report['guild_region'] = golfie;
                            option = _closure1_slot7;
                            golfie = option.getHostname;
                            option = golfie.bind(option)();
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 542; continue _fun00023 }
 539:
                            golfie = option;
 542:
                            report['hostname'] = golfie;
                            golfie = _closure3_slot7;
                            golfie = tangon == golfie;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 576; continue _fun00023 }
 560:
                            verify = _closure3_slot7;
                            golfie = verify.getDurationSeconds;
                            option = golfie.bind(verify)();
 576:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 588; continue _fun00023 }
 585:
                            golfie = option;
 588:
                            report['duration'] = golfie;
                            golfie = _closure3_slot17;
                            option = tangon != golfie;
                            golfie = null;
                            if(!option) { _fun00024_ip = 609; continue _fun00023 }
 605:
                            golfie = _closure3_slot17;
 609:
                            report['participant_type'] = golfie;
                            golfie = _closure3_slot2;
                            option = tangon == golfie;
                            verify = undefined;
                            if(option) { _fun00024_ip = 633; continue _fun00023 }
 627:
                            verify = golfie.num_frames;
 633:
                            offset = tangon != verify;
                            option = 0;
                            if(!offset) { _fun00024_ip = 645; continue _fun00023 }
 642:
                            option = verify;
 645:
                            report['num_frames'] = option;
                            option = _closure3_slot2;
                            offset = tangon == option;
                            verify = undefined;
                            if(offset) { _fun00024_ip = 669; continue _fun00023 }
 663:
                            verify = option.num_packets;
 669:
                            offset = tangon != verify;
                            option = 0;
                            if(!offset) { _fun00024_ip = 681; continue _fun00023 }
 678:
                            option = verify;
 681:
                            report['num_packets'] = option;
                            verify = _closure3_slot2;
                            offset = tangon == verify;
                            option = undefined;
                            if(offset) { _fun00024_ip = 705; continue _fun00023 }
 699:
                            option = verify.num_bytes;
 705:
                            verify = tangon != option;
                            golfie = 0;
                            if(!verify) { _fun00024_ip = 717; continue _fun00023 }
 714:
                            golfie = option;
 717:
                            report['num_bytes'] = golfie;
                            offset = _closure1_slot27;
                            verify = _closure3_slot15;
                            option = _closure3_slot14;
                            golfie = _closure3_slot16;
                            golfie = offset.bind(entity)(verify, option, golfie);
                            report['video_codec'] = golfie;
                            option = _closure1_slot25;
                            golfie = _closure3_slot15;
                            option = option.bind(entity)(golfie);
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 775; continue _fun00023 }
 772:
                            golfie = option;
 775:
                            report['video_encoder'] = golfie;
                            verify = _closure1_slot26;
                            option = _closure3_slot15;
                            golfie = _closure3_slot16;
                            option = verify.bind(entity)(option, golfie);
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 812; continue _fun00023 }
 809:
                            golfie = option;
 812:
                            report['video_decoder'] = golfie;
                            golfie = _closure3_slot5;
                            golfie = tangon == golfie;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 842; continue _fun00023 }
 832:
                            golfie = _closure3_slot5;
                            option = golfie.ownerId;
 842:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 854; continue _fun00023 }
 851:
                            golfie = option;
 854:
                            report['sender_user_id'] = golfie;
                            golfie = _closure3_slot6;
                            golfie = tangon == golfie;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 886; continue _fun00023 }
 872:
                            verify = _closure3_slot6;
                            golfie = verify.getRegion;
                            option = golfie.bind(verify)();
 886:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 898; continue _fun00023 }
 895:
                            golfie = option;
 898:
                            report['stream_region'] = golfie;
                            option = _closure3_slot14;
                            golfie = null;
                            if(!option) { _fun00024_ip = 962; continue _fun00023 }
 912:
                            option = _closure3_slot6;
                            verify = tangon == option;
                            option = undefined;
                            if(verify) { _fun00024_ip = 950; continue _fun00023 }
 925:
                            verify = _closure3_slot6;
                            verify = verify.analyticsContext;
                            offset = tangon == verify;
                            option = undefined;
                            if(offset) { _fun00024_ip = 950; continue _fun00023 }
 944:
                            option = verify.streamSourceType;
 950:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 962; continue _fun00023 }
 959:
                            golfie = option;
 962:
                            report['stream_source_type'] = golfie;
                            golfie = _closure3_slot6;
                            golfie = tangon == golfie;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 1005; continue _fun00023 }
 980:
                            golfie = _closure3_slot6;
                            golfie = golfie.analyticsContext;
                            verify = tangon == golfie;
                            option = undefined;
                            if(verify) { _fun00024_ip = 1005; continue _fun00023 }
 999:
                            option = golfie.numViewers;
 1005:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 1017; continue _fun00023 }
 1014:
                            golfie = option;
 1017:
                            report['num_stream_viewers'] = golfie;
                            option = _closure3_slot14;
                            golfie = null;
                            if(!option) { _fun00024_ip = 1050; continue _fun00023 }
 1033:
                            option = _closure3_slot8;
                            option = tangon != option;
                            golfie = null;
                            if(!option) { _fun00024_ip = 1050; continue _fun00023 }
 1046:
                            golfie = _closure3_slot8;
 1050:
                            report['video_input_resolution_height'] = golfie;
                            option = _closure3_slot14;
                            golfie = null;
                            if(!option) { _fun00024_ip = 1083; continue _fun00023 }
 1066:
                            option = _closure3_slot9;
                            option = tangon != option;
                            golfie = null;
                            if(!option) { _fun00024_ip = 1083; continue _fun00023 }
 1079:
                            golfie = _closure3_slot9;
 1083:
                            report['video_input_frame_rate'] = golfie;
                            golfie = _closure1_slot24;
                            golfie = golfie.bind(entity)();
                            report['screenshare_capture_method'] = golfie;
                            golfie = _closure3_slot10;
                            option = tangon != golfie;
                            golfie = null;
                            if(!option) { _fun00024_ip = 1122; continue _fun00023 }
 1118:
                            golfie = _closure3_slot10;
 1122:
                            report['share_application_name'] = golfie;
                            golfie = _closure3_slot11;
                            option = tangon != golfie;
                            golfie = null;
                            if(!option) { _fun00024_ip = 1144; continue _fun00023 }
 1140:
                            golfie = _closure3_slot11;
 1144:
                            report['share_application_id'] = golfie;
                            golfie = _closure3_slot12;
                            option = tangon != golfie;
                            golfie = null;
                            if(!option) { _fun00024_ip = 1166; continue _fun00023 }
 1162:
                            golfie = _closure3_slot12;
 1166:
                            report['share_application_executable'] = golfie;
                            golfie = _closure3_slot13;
                            option = tangon != golfie;
                            golfie = null;
                            if(!option) { _fun00024_ip = 1188; continue _fun00023 }
 1184:
                            golfie = _closure3_slot13;
 1188:
                            report['share_application_distributor'] = golfie;
                            golfie = tangon == oscard;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 1208; continue _fun00023 }
 1202:
                            option = oscard.cpu_brand;
 1208:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 1220; continue _fun00023 }
 1217:
                            golfie = option;
 1220:
                            report['cpu_brand'] = golfie;
                            golfie = tangon == oscard;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 1240; continue _fun00023 }
 1234:
                            option = oscard.cpu_vendor;
 1240:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 1252; continue _fun00023 }
 1249:
                            golfie = option;
 1252:
                            report['cpu_vendor'] = golfie;
                            golfie = tangon == oscard;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 1272; continue _fun00023 }
 1266:
                            option = oscard.cpu_memory;
 1272:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 1284; continue _fun00023 }
 1281:
                            golfie = option;
 1284:
                            report['cpu_memory'] = golfie;
                            golfie = tangon == oscard;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 1304; continue _fun00023 }
 1298:
                            option = oscard.gpu_brand;
 1304:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 1316; continue _fun00023 }
 1313:
                            golfie = option;
 1316:
                            report['gpu_brand'] = golfie;
                            golfie = tangon == oscard;
                            option = undefined;
                            if(golfie) { _fun00024_ip = 1336; continue _fun00023 }
 1330:
                            option = oscard.gpu_count;
 1336:
                            verify = tangon != option;
                            golfie = null;
                            if(!verify) { _fun00024_ip = 1348; continue _fun00023 }
 1345:
                            golfie = option;
 1348:
                            report['gpu_count'] = golfie;
                            option = tangon == oscard;
                            golfie = undefined;
                            if(option) { _fun00024_ip = 1368; continue _fun00023 }
 1362:
                            golfie = oscard.gpu_memory;
 1368:
                            option = tangon != golfie;
                            oscard = null;
                            if(!option) { _fun00024_ip = 1380; continue _fun00023 }
 1377:
                            oscard = golfie;
 1380:
                            report['gpu_memory'] = oscard;
                            golfie = _closure1_slot1;
                            oscard = _closure1_slot2;
                            option = 16;
                            oscard = oscard[option];
                            golfie = golfie.bind(entity)(oscard);
                            oscard = golfie.getCurrentCPUUsagePercent;
                            golfie = oscard.bind(golfie)();
                            verify = tangon != golfie;
                            oscard = null;
                            if(!verify) { _fun00024_ip = 1427; continue _fun00023 }
 1424:
                            oscard = golfie;
 1427:
                            report['cpu_usage'] = oscard;
                            golfie = _closure1_slot1;
                            oscard = _closure1_slot2;
                            oscard = oscard[option];
                            golfie = golfie.bind(entity)(oscard);
                            oscard = golfie.getCurrentMemoryUsageKB;
                            golfie = oscard.bind(golfie)();
                            option = tangon != golfie;
                            oscard = null;
                            if(!option) { _fun00024_ip = 1473; continue _fun00023 }
 1470:
                            oscard = golfie;
 1473:
                            report['memory_usage'] = oscard;
                            golfie = _closure1_slot22;
                            oscard = _closure3_slot15;
                            oscard = golfie.bind(entity)(oscard);
                            report['outbound_bitrate_estimate'] = oscard;
                            golfie = _closure1_slot23;
                            oscard = _closure3_slot15;
                            oscard = golfie.bind(entity)(oscard);
                            report['inbound_bitrate_estimate'] = oscard;
                            golfie = _closure1_slot6;
                            oscard = golfie.getHardwareEncoding;
                            oscard = oscard.bind(golfie)();
                            report['hardware_enabled'] = oscard;
                            oscard = _closure3_slot1;
                            oscard = oscard.audioInputDeviceName;
                            if(!(tangon == oscard)) { _fun00024_ip = 1600; continue _fun00023 }
 1555:
                            verify = _closure1_slot6;
                            golfie = verify.getInputDevices;
                            option = golfie.bind(verify)();
                            golfie = verify.getInputDeviceId;
                            golfie = golfie.bind(verify)();
                            option = option[golfie];
                            verify = tangon == option;
                            golfie = undefined;
                            if(verify) { _fun00024_ip = 1597; continue _fun00023 }
 1592:
                            golfie = option.name;
 1597:
                            oscard = golfie;
 1600:
                            report['audio_input_device_name'] = oscard;
                            oscard = _closure3_slot1;
                            oscard = oscard.audioOutputDeviceName;
                            if(!(tangon == oscard)) { _fun00024_ip = 1666; continue _fun00023 }
 1621:
                            verify = _closure1_slot6;
                            golfie = verify.getOutputDevices;
                            option = golfie.bind(verify)();
                            golfie = verify.getOutputDeviceId;
                            golfie = golfie.bind(verify)();
                            option = option[golfie];
                            verify = tangon == option;
                            golfie = undefined;
                            if(verify) { _fun00024_ip = 1663; continue _fun00023 }
 1658:
                            golfie = option.name;
 1663:
                            oscard = golfie;
 1666:
                            report['audio_output_device_name'] = oscard;
                            zuuluu = _closure3_slot1;
                            zuuluu = zuuluu.videoDeviceName;
                            if(!(tangon == zuuluu)) { _fun00024_ip = 1732; continue _fun00023 }
 1687:
                            option = _closure1_slot6;
                            oscard = option.getVideoDevices;
                            golfie = oscard.bind(option)();
                            oscard = option.getVideoDeviceId;
                            oscard = oscard.bind(option)();
                            oscard = golfie[oscard];
                            golfie = tangon == oscard;
                            tangon = undefined;
                            if(golfie) { _fun00024_ip = 1729; continue _fun00023 }
 1724:
                            tangon = oscard.name;
 1729:
                            zuuluu = tangon;
 1732:
                            report['video_device_name'] = zuuluu;
                            tangon = _closure1_slot6;
                            zuuluu = tangon.getMediaEngine;
                            oscard = zuuluu.bind(tangon)();
                            zuuluu = oscard.getAudioSubsystem;
                            zuuluu = zuuluu.bind(oscard)();
                            report['audio_subsystem'] = zuuluu;
                            zuuluu = tangon.getSettings;
                            zuuluu = zuuluu.bind(tangon)();
                            zuuluu = zuuluu.automaticAudioSubsystem;
                            report['automatic_audio_subsystem'] = zuuluu;
                            zuuluu = tangon.getMediaEngine;
                            oscard = zuuluu.bind(tangon)();
                            zuuluu = oscard.getAudioLayer;
                            zuuluu = zuuluu.bind(oscard)();
                            report['audio_layer'] = zuuluu;
                            zuuluu = tangon.getSettings;
                            zuuluu = zuuluu.bind(tangon)();
                            zuuluu = zuuluu.mode;
                            report['audio_input_mode'] = zuuluu;
                            zuuluu = tangon.getSettings;
                            zuuluu = zuuluu.bind(tangon)();
                            zuuluu = zuuluu.modeOptions;
                            zuuluu = zuuluu.autoThreshold;
                            report['automatic_audio_input_sensitivity_enabled'] = zuuluu;
                            zuuluu = tangon.getSettings;
                            zuuluu = zuuluu.bind(tangon)();
                            zuuluu = zuuluu.modeOptions;
                            zuuluu = zuuluu.threshold;
                            report['audio_input_sensitivity'] = zuuluu;
                            zuuluu = tangon.getEchoCancellation;
                            zuuluu = zuuluu.bind(tangon)();
                            report['echo_cancellation_enabled'] = zuuluu;
                            zuuluu = tangon.getNoiseSuppression;
                            zuuluu = zuuluu.bind(tangon)();
                            report['noise_suppression_enabled'] = zuuluu;
                            zuuluu = tangon.getNoiseCancellation;
                            zuuluu = zuuluu.bind(tangon)();
                            report['noise_cancellation_enabled'] = zuuluu;
                            zuuluu = tangon.getAutomaticGainControl;
                            zuuluu = zuuluu.bind(tangon)();
                            report['automatic_gain_control_enabled'] = zuuluu;
                            zuuluu = tangon.getSidechainCompression;
                            zuuluu = zuuluu.bind(tangon)();
                            report['sidechain_compression_enabled'] = zuuluu;
                            zuuluu = tangon.getInputVolume;
                            zuuluu = zuuluu.bind(tangon)();
                            report['input_volume'] = zuuluu;
                            zuuluu = tangon.getOutputVolume;
                            zuuluu = zuuluu.bind(tangon)();
                            report['output_volume'] = zuuluu;
                            tangon = _closure1_slot1;
                            oscard = _closure1_slot2;
                            zuuluu = 17;
                            zuuluu = oscard[zuuluu];
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.track;
                            michal = _closure1_slot12;
                            michal = michal.AV_ERROR_REPORTED;
                            michal = zuuluu.bind(tangon)(michal, report);
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = entity.bind(michal)(tangon, zuuluu);
 286:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['reportAVError'] = tangon;
    michal = function(argFoo) { // Original name: getErrorInfo
        michal = _closure1_slot16;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    zuuluu['getErrorInfo'] = michal;
    return entity;
})();