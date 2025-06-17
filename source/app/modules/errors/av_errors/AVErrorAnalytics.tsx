// app/modules/errors/av_errors/AVErrorAnalytics.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getOutboundVideoStats
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.getConnectionStats;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = null;
            tangon = michal == zuuluu;
            entity = null;
            if(tangon) { _fun00002_ip = 84; continue _fun00001 }
 32:
            zuuluu = zuuluu.stats;
            zuuluu = zuuluu.rtp;
            report = zuuluu.outbound;
            tangon = report.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = 'video';
                entity = entity === michal;
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = michal != zuuluu;
            michal = null;
            if(!tangon) { _fun00002_ip = 81; continue _fun00001 }
 78:
            michal = zuuluu;
 81:
            entity = michal;
 84:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: getInboundVideoStats
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argBar;
            entity = null;
            if(!(entity != zuuluu)) { _fun00004_ip = 103; continue _fun00003 }
 9:
            report = _closure1_slot4;
            tangon = report.getConnectionStats;
            michal = argFoo;
            michal = tangon.bind(report)(michal);
            if(!(entity != michal)) { _fun00004_ip = 101; continue _fun00003 }
 34:
            michal = michal.stats;
            michal = michal.rtp;
            michal = michal.inbound;
            report = michal[zuuluu];
            zuuluu = entity == report;
            michal = null;
            if(zuuluu) { _fun00004_ip = 99; continue _fun00003 }
 65:
            tangon = report.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = 'video';
                entity = entity === michal;
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            report = entity != tangon;
            zuuluu = null;
            if(!report) { _fun00004_ip = 96; continue _fun00003 }
 93:
            zuuluu = tangon;
 96:
            michal = zuuluu;
 99:
            return michal;
 101:
            return entity;
 103:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getVideoStats
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argBar;
            entity = argFoo;
            if(entity) { _fun00006_ip = 29; continue _fun00005 }
 12:
            report = _closure1_slot17;
            zuuluu = undefined;
            entity = argBaz;
            entity = report.bind(zuuluu)(tangon, entity);
            _fun00006_ip = 40; continue _fun00005;
 29:
            zuuluu = _closure1_slot16;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 40:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: getLatestOutboundBitrateEstimate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.getConnectionStats;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            tangon = entity == zuuluu;
            michal = undefined;
            if(tangon) { _fun00008_ip = 50; continue _fun00007 }
 32:
            zuuluu = zuuluu.stats;
            zuuluu = zuuluu.transport;
            michal = zuuluu.outboundBitrateEstimate;
 50:
            zuuluu = entity != michal;
            entity = null;
            if(!zuuluu) { _fun00008_ip = 62; continue _fun00007 }
 59:
            entity = michal;
 62:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: getLatestInboundBitrateEstimate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.getConnectionStats;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            tangon = entity == zuuluu;
            michal = undefined;
            if(tangon) { _fun00010_ip = 50; continue _fun00009 }
 32:
            zuuluu = zuuluu.stats;
            zuuluu = zuuluu.transport;
            michal = zuuluu.inboundBitrateEstimate;
 50:
            zuuluu = entity != michal;
            entity = null;
            if(!zuuluu) { _fun00010_ip = 62; continue _fun00009 }
 59:
            entity = michal;
 62:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: getCurrentScreenshareCaptureMethod
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot4;
            entity = michal.getConnectionStats;
            option = entity.bind(michal)(zuuluu);
            michal = _closure1_slot4;
            entity = michal.getLastConnectionStats;
            golfie = entity.bind(michal)(zuuluu);
            entity = null;
            if(!(entity != option)) { _fun00012_ip = 298; continue _fun00011 }
 47:
            if(!(entity != golfie)) { _fun00012_ip = 298; continue _fun00011 }
 54:
            report = {};
            oscard = ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames'];
            michal = oscard.length;
            tangon = 0;
            michal = tangon < michal;
            romeon = undefined;
            zuuluu = 0;
            if(!michal) { _fun00012_ip = 182; continue _fun00011 }
 84:
            verify = oscard[zuuluu];
            michal = golfie.stats;
            offset = michal.screenshare;
            yankee = entity == offset;
            michal = undefined;
            if(yankee) { _fun00012_ip = 113; continue _fun00011 }
 109:
            michal = offset[verify];
 113:
            yankee = entity != michal;
            offset = 0;
            if(!yankee) { _fun00012_ip = 125; continue _fun00011 }
 122:
            offset = michal;
 125:
            michal = option.stats;
            michal = michal.screenshare;
            backup = entity == michal;
            yankee = undefined;
            if(backup) { _fun00012_ip = 150; continue _fun00011 }
 146:
            yankee = michal[verify];
 150:
            backup = entity != yankee;
            michal = 0;
            if(!backup) { _fun00012_ip = 162; continue _fun00011 }
 159:
            michal = yankee;
 162:
            michal = michal - offset;
            report[verify] = michal;
            zuuluu = zuuluu + 1;
            michal = oscard.length;
            if(zuuluu < michal) { _fun00012_ip = 84; continue _fun00011 }
 182:
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
            michal = option;
            zuuluu = null;
            if(!report) { _fun00012_ip = 284; continue _fun00011 }
 234:
            backup = yankee[oscard];
            report = _closure1_slot3;
            backup = report.bind(romeon)(backup, offset);
            report = backup[tangon];
            backup = backup[verify];
            if(!(backup > option)) { _fun00012_ip = 266; continue _fun00011 }
 260:
            option = backup;
            golfie = report;
 266:
            oscard = oscard + 1;
            report = yankee.length;
            michal = option;
            zuuluu = golfie;
            if(oscard < report) { _fun00012_ip = 234; continue _fun00011 }
 284:
            tangon = michal > tangon;
            michal = null;
            if(!tangon) { _fun00012_ip = 296; continue _fun00011 }
 293:
            michal = zuuluu;
 296:
            return michal;
 298:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getSystemAnalyticsInfo;
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MediaEngineContextTypes;
    var _closure1_slot14 = golfie;
    tangon = tangon.SIMULCAST_HQ_QUALITY;
    var _closure1_slot15 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/AVErrorAnalytics.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: sendAVErrorAnalyticsEvent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            var _closure2_slot0 = golfie;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 12;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.getErrorInfo;
            report = tangon.bind(report)(golfie);
            var _closure2_slot2 = report;
            golfie = _closure1_slot10;
            tangon = golfie.getVoiceChannelId;
            tangon = tangon.bind(golfie)();
            golfie = 'channelId';
            golfie = golfie in oscard;
            option = undefined;
            if(!golfie) { _fun00014_ip = 84; continue _fun00013 }
 79:
            option = oscard.channelId;
 84:
            golfie = null;
            if(!(golfie != option)) { _fun00014_ip = 93; continue _fun00013 }
 90:
            tangon = option;
 93:
            option = golfie != tangon;
            verify = null;
            if(!option) { _fun00014_ip = 105; continue _fun00013 }
 102:
            verify = tangon;
 105:
            var _closure2_slot3 = verify;
            option = _closure1_slot6;
            tangon = option.getChannel;
            tangon = tangon.bind(option)(verify);
            var _closure2_slot4 = tangon;
            tangon = 'streamKey';
            option = tangon in oscard;
            tangon = undefined;
            if(!option) { _fun00014_ip = 146; continue _fun00013 }
 140:
            tangon = oscard.streamKey;
 146:
            option = 'mediaContext';
            verify = option in oscard;
            option = undefined;
            if(!verify) { _fun00014_ip = 165; continue _fun00013 }
 159:
            option = oscard.mediaContext;
 165:
            var _closure2_slot5 = option;
            verify = 'underlyingError';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 188; continue _fun00013 }
 182:
            verify = oscard.underlyingError;
 188:
            var _closure2_slot6 = verify;
            verify = 'errorMessage';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 211; continue _fun00013 }
 205:
            verify = oscard.errorMessage;
 211:
            var _closure2_slot7 = verify;
            verify = 'mediaSessionId';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 234; continue _fun00013 }
 228:
            verify = oscard.mediaSessionId;
 234:
            var _closure2_slot8 = verify;
            verify = 'rtcConnectionId';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 257; continue _fun00013 }
 251:
            verify = oscard.rtcConnectionId;
 257:
            var _closure2_slot9 = verify;
            verify = 'videoCodec';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 280; continue _fun00013 }
 274:
            verify = oscard.videoCodec;
 280:
            var _closure2_slot10 = verify;
            verify = 'videoEncoder';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 303; continue _fun00013 }
 297:
            verify = oscard.videoEncoder;
 303:
            var _closure2_slot11 = verify;
            verify = 'videoDecoder';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 330; continue _fun00013 }
 322:
            verify = oscard.videoDecoder;
 330:
            var _closure2_slot12 = verify;
            verify = 'audioCaptureSampleRateMismatchPercent';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 353; continue _fun00013 }
 347:
            verify = oscard.audioCaptureSampleRateMismatchPercent;
 353:
            var _closure2_slot13 = verify;
            verify = 'audioInputDeviceName';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 376; continue _fun00013 }
 370:
            verify = oscard.audioInputDeviceName;
 376:
            var _closure2_slot14 = verify;
            verify = 'audioOutputDeviceName';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 399; continue _fun00013 }
 393:
            verify = oscard.audioOutputDeviceName;
 399:
            var _closure2_slot15 = verify;
            verify = 'videoDeviceName';
            offset = verify in oscard;
            verify = undefined;
            if(!offset) { _fun00014_ip = 422; continue _fun00013 }
 416:
            verify = oscard.videoDeviceName;
 422:
            var _closure2_slot16 = verify;
            verify = 'userId';
            verify = verify in oscard;
            yankee = undefined;
            if(!verify) { _fun00014_ip = 444; continue _fun00013 }
 439:
            yankee = oscard.userId;
 444:
            verify = golfie != tangon;
            oscard = null;
            if(!verify) { _fun00014_ip = 484; continue _fun00013 }
 453:
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 13;
            verify = romeon[verify];
            offset = offset.bind(entity)(verify);
            verify = offset.decodeStreamKey;
            oscard = verify.bind(offset)(tangon);
 484:
            var _closure2_slot17 = oscard;
            verify = golfie != tangon;
            foxtra = null;
            if(!verify) { _fun00014_ip = 512; continue _fun00013 }
 497:
            offset = _closure1_slot11;
            verify = offset.getRTCConnection;
            foxtra = verify.bind(offset)(tangon);
 512:
            var _closure2_slot18 = foxtra;
            verify = foxtra;
            if(!(golfie == tangon)) { _fun00014_ip = 537; continue _fun00013 }
 523:
            romeon = _closure1_slot8;
            offset = romeon.getRTCConnection;
            verify = offset.bind(romeon)();
 537:
            var _closure2_slot19 = verify;
            offset = golfie != tangon;
            backup = null;
            if(!offset) { _fun00014_ip = 583; continue _fun00013 }
 550:
            romeon = golfie == foxtra;
            offset = undefined;
            if(romeon) { _fun00014_ip = 580; continue _fun00013 }
 559:
            romeon = foxtra.analyticsContext;
            kiloes = golfie == romeon;
            offset = undefined;
            if(kiloes) { _fun00014_ip = 580; continue _fun00013 }
 574:
            offset = romeon.streamApplication;
 580:
            backup = offset;
 583:
            romeon = _closure1_slot5;
            offset = romeon.getState;
            offset = offset.bind(romeon)();
            romeon = offset.resolution;
            var _closure2_slot20 = romeon;
            offset = offset.fps;
            var _closure2_slot21 = offset;
            romeon = _closure1_slot0;
            kiloes = _closure1_slot2;
            offset = 14;
            offset = kiloes[offset];
            romeon = romeon.bind(entity)(offset);
            offset = romeon.getRunningGameAnalytics;
            offset = offset.bind(romeon)(backup);
            romeon = offset.gameName;
            var _closure2_slot22 = romeon;
            romeon = offset.gameId;
            var _closure2_slot23 = romeon;
            romeon = offset.exe;
            var _closure2_slot24 = romeon;
            offset = offset.distributor;
            var _closure2_slot25 = offset;
            report = report.isErrorOutbound;
            var _closure2_slot26 = report;
            if(!(golfie == option)) { _fun00014_ip = 712; continue _fun00013 }
 702:
            offset = _closure1_slot14;
            option = offset.DEFAULT;
 712:
            var _closure2_slot27 = option;
            if(!(golfie != oscard)) { _fun00014_ip = 726; continue _fun00013 }
 720:
            yankee = oscard.ownerId;
 726:
            var _closure2_slot28 = yankee;
            if(!(golfie == foxtra)) { _fun00014_ip = 749; continue _fun00013 }
 734:
            option = 'receiver';
            if(!report) { _fun00014_ip = 747; continue _fun00013 }
 743:
            option = 'sender';
 747:
            _fun00014_ip = 771; continue _fun00013;
 749:
            romeon = golfie == foxtra;
            offset = undefined;
            if(romeon) { _fun00014_ip = 768; continue _fun00013 }
 758:
            romeon = foxtra.getVoiceParticipantType;
            offset = romeon.bind(foxtra)();
 768:
            option = offset;
 771:
            var _closure2_slot29 = option;
            option = golfie == verify;
            offset = undefined;
            if(option) { _fun00014_ip = 794; continue _fun00013 }
 784:
            option = verify.getMediaEngineConnectionId;
            offset = option.bind(verify)();
 794:
            romeon = golfie != offset;
            option = null;
            if(!romeon) { _fun00014_ip = 806; continue _fun00013 }
 803:
            option = offset;
 806:
            var _closure2_slot30 = option;
            if(!(golfie != tangon)) { _fun00014_ip = 818; continue _fun00013 }
 814:
            if(!(golfie == oscard)) { _fun00014_ip = 938; continue _fun00013 }
 818:
            if(report) { _fun00014_ip = 855; continue _fun00013 }
 821:
            option = golfie != yankee;
            tangon = null;
            if(!option) { _fun00014_ip = 853; continue _fun00013 }
 830:
            offset = golfie == verify;
            option = undefined;
            if(offset) { _fun00014_ip = 850; continue _fun00013 }
 839:
            offset = verify.getInboundStats;
            option = offset.bind(verify)(yankee);
 850:
            tangon = option;
 853:
            _fun00014_ip = 936; continue _fun00013;
 855:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 15;
            option = yankee[option];
            romeon = offset.bind(entity)(option);
            yankee = romeon.maxBy;
            option = golfie == verify;
            offset = undefined;
            if(option) { _fun00014_ip = 900; continue _fun00013 }
 890:
            option = verify.getOutboundStats;
            offset = option.bind(verify)();
 900:
            if(!(golfie == offset)) { _fun00014_ip = 908; continue _fun00013 }
 904:
            offset = new Array(0);
 908:
            option = function(argFoo) {
                entity = argFoo;
                entity = entity.num_frames;
                return entity;
            };
            offset = yankee.bind(romeon)(offset, option);
            yankee = golfie != offset;
            option = null;
            if(!yankee) { _fun00014_ip = 933; continue _fun00013 }
 930:
            option = offset;
 933:
            tangon = option;
 936:
            _fun00014_ip = 1016; continue _fun00013;
 938:
            option = golfie == verify;
            if(report) { _fun00014_ip = 969; continue _fun00013 }
 945:
            report = undefined;
            if(option) { _fun00014_ip = 967; continue _fun00013 }
 950:
            offset = verify.getInboundStats;
            oscard = oscard.ownerId;
            report = offset.bind(verify)(oscard);
 967:
            _fun00014_ip = 1013; continue _fun00013;
 969:
            oscard = undefined;
            if(option) { _fun00014_ip = 1010; continue _fun00013 }
 974:
            option = verify.getOutboundStats;
            verify = option.bind(verify)();
            golfie = golfie == verify;
            oscard = undefined;
            if(golfie) { _fun00014_ip = 1010; continue _fun00013 }
 993:
            option = verify.find;
            golfie = function(argFoo) {
                entity = argFoo;
                michal = entity.quality;
                entity = _closure1_slot15;
                entity = michal === entity;
                return entity;
            };
            oscard = option.bind(verify)(golfie);
 1010:
            report = oscard;
 1013:
            tangon = report;
 1016:
            var _closure2_slot1 = tangon;
            zuuluu = _closure1_slot12;
            tangon = zuuluu.bind(entity)();
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    oscard = argFoo;
                    report = {};
                    michal = _closure2_slot0;
                    entity = michal.valueOf;
                    entity = entity.bind(michal)();
                    report['error_name'] = entity;
                    entity = _closure2_slot2;
                    michal = entity.errorCode;
                    report['error_code'] = michal;
                    michal = entity.severity;
                    report['error_severity'] = michal;
                    entity = entity.category;
                    report['error_category'] = entity;
                    entity = _closure2_slot6;
                    zuuluu = null;
                    michal = zuuluu != entity;
                    entity = null;
                    if(!michal) { _fun00016_ip = 88; continue _fun00015 }
 84:
                    entity = _closure2_slot6;
 88:
                    report['underlying_error'] = entity;
                    entity = _closure2_slot7;
                    michal = zuuluu != entity;
                    entity = null;
                    if(!michal) { _fun00016_ip = 112; continue _fun00015 }
 108:
                    entity = _closure2_slot7;
 112:
                    report['error_message'] = entity;
                    entity = _closure2_slot4;
                    michal = zuuluu == entity;
                    entity = undefined;
                    golfie = undefined;
                    if(michal) { _fun00016_ip = 141; continue _fun00015 }
 132:
                    michal = _closure2_slot4;
                    golfie = michal.guild_id;
 141:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 153; continue _fun00015 }
 150:
                    michal = golfie;
 153:
                    report['guild_id'] = michal;
                    michal = _closure2_slot3;
                    golfie = zuuluu != michal;
                    michal = null;
                    if(!golfie) { _fun00016_ip = 174; continue _fun00015 }
 170:
                    michal = _closure2_slot3;
 174:
                    report['channel_id'] = michal;
                    michal = _closure2_slot4;
                    michal = zuuluu == michal;
                    golfie = undefined;
                    if(michal) { _fun00016_ip = 200; continue _fun00015 }
 191:
                    michal = _closure2_slot4;
                    golfie = michal.type;
 200:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 212; continue _fun00015 }
 209:
                    michal = golfie;
 212:
                    report['channel_type'] = michal;
                    michal = _closure2_slot9;
                    golfie = zuuluu != michal;
                    michal = null;
                    if(!golfie) { _fun00016_ip = 234; continue _fun00015 }
 230:
                    michal = _closure2_slot9;
 234:
                    report['rtc_connection_id'] = michal;
                    michal = _closure2_slot8;
                    if(!(zuuluu == michal)) { _fun00016_ip = 266; continue _fun00015 }
 247:
                    golfie = _closure1_slot8;
                    michal = golfie.getMediaSessionId;
                    golfie = michal.bind(golfie)();
                    _fun00016_ip = 270; continue _fun00015;
 266:
                    golfie = _closure2_slot8;
 270:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 282; continue _fun00015 }
 279:
                    michal = golfie;
 282:
                    report['media_session_id'] = michal;
                    michal = _closure2_slot18;
                    michal = zuuluu == michal;
                    golfie = undefined;
                    if(michal) { _fun00016_ip = 310; continue _fun00015 }
 300:
                    michal = _closure2_slot18;
                    golfie = michal.parentMediaSessionId;
 310:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 322; continue _fun00015 }
 319:
                    michal = golfie;
 322:
                    report['parent_media_session_id'] = michal;
                    michal = _closure2_slot5;
                    golfie = zuuluu != michal;
                    michal = null;
                    if(!golfie) { _fun00016_ip = 344; continue _fun00015 }
 340:
                    michal = _closure2_slot5;
 344:
                    report['context'] = michal;
                    option = _closure1_slot8;
                    golfie = option.getRTCConnection;
                    verify = golfie.bind(option)();
                    golfie = zuuluu == verify;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 386; continue _fun00015 }
 374:
                    golfie = verify.getVoiceVersion;
                    option = golfie.bind(verify)();
 386:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 398; continue _fun00015 }
 395:
                    golfie = option;
 398:
                    report['voice_backend_version'] = golfie;
                    option = _closure1_slot8;
                    golfie = option.getRTCConnection;
                    verify = golfie.bind(option)();
                    golfie = zuuluu == verify;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 438; continue _fun00015 }
 426:
                    golfie = verify.getRtcWorkerVersion;
                    option = golfie.bind(verify)();
 438:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 450; continue _fun00015 }
 447:
                    golfie = option;
 450:
                    report['rtc_worker_backend_version'] = golfie;
                    verify = _closure1_slot9;
                    option = verify.getRegion;
                    offset = _closure1_slot8;
                    golfie = offset.getHostname;
                    golfie = golfie.bind(offset)();
                    option = option.bind(verify)(golfie);
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 496; continue _fun00015 }
 493:
                    golfie = option;
 496:
                    report['guild_region'] = golfie;
                    option = _closure1_slot8;
                    golfie = option.getHostname;
                    option = golfie.bind(option)();
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 527; continue _fun00015 }
 524:
                    golfie = option;
 527:
                    report['hostname'] = golfie;
                    golfie = _closure2_slot19;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 559; continue _fun00015 }
 545:
                    verify = _closure2_slot19;
                    golfie = verify.getDurationSeconds;
                    option = golfie.bind(verify)();
 559:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 571; continue _fun00015 }
 568:
                    golfie = option;
 571:
                    report['duration'] = golfie;
                    golfie = _closure2_slot29;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 592; continue _fun00015 }
 588:
                    golfie = _closure2_slot29;
 592:
                    report['participant_type'] = golfie;
                    golfie = _closure2_slot1;
                    option = zuuluu == golfie;
                    verify = undefined;
                    if(option) { _fun00016_ip = 616; continue _fun00015 }
 610:
                    verify = golfie.num_frames;
 616:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 628; continue _fun00015 }
 625:
                    option = verify;
 628:
                    report['num_frames'] = option;
                    option = _closure2_slot1;
                    offset = zuuluu == option;
                    verify = undefined;
                    if(offset) { _fun00016_ip = 652; continue _fun00015 }
 646:
                    verify = option.num_packets;
 652:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 664; continue _fun00015 }
 661:
                    option = verify;
 664:
                    report['num_packets'] = option;
                    option = _closure2_slot1;
                    offset = zuuluu == option;
                    verify = undefined;
                    if(offset) { _fun00016_ip = 688; continue _fun00015 }
 682:
                    verify = option.num_bytes;
 688:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 700; continue _fun00015 }
 697:
                    option = verify;
 700:
                    report['num_bytes'] = option;
                    yankee = _closure1_slot18;
                    offset = _closure2_slot26;
                    verify = _closure2_slot30;
                    option = _closure2_slot28;
                    verify = yankee.bind(entity)(offset, verify, option);
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 743; continue _fun00015 }
 737:
                    option = verify.packetsLost;
 743:
                    verify = zuuluu != option;
                    golfie = 0;
                    if(!verify) { _fun00016_ip = 755; continue _fun00015 }
 752:
                    golfie = option;
 755:
                    report['num_packets_lost'] = golfie;
                    golfie = _closure2_slot10;
                    if(!(zuuluu == golfie)) { _fun00016_ip = 846; continue _fun00015 }
 770:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 16;
                    golfie = verify[golfie];
                    verify = option.bind(entity)(golfie);
                    option = verify.parseCodecType;
                    romeon = _closure1_slot18;
                    yankee = _closure2_slot26;
                    offset = _closure2_slot30;
                    golfie = _closure2_slot28;
                    offset = romeon.bind(entity)(yankee, offset, golfie);
                    yankee = zuuluu == offset;
                    golfie = undefined;
                    if(yankee) { _fun00016_ip = 839; continue _fun00015 }
 828:
                    offset = offset.codec;
                    golfie = offset.name;
 839:
                    option = option.bind(verify)(golfie);
                    _fun00016_ip = 850; continue _fun00015;
 846:
                    option = _closure2_slot10;
 850:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 862; continue _fun00015 }
 859:
                    golfie = option;
 862:
                    report['video_codec'] = golfie;
                    golfie = _closure2_slot11;
                    if(!(zuuluu == golfie)) { _fun00016_ip = 936; continue _fun00015 }
 875:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 16;
                    golfie = verify[golfie];
                    verify = option.bind(entity)(golfie);
                    option = verify.parseEncoder;
                    offset = _closure1_slot16;
                    golfie = _closure2_slot30;
                    offset = offset.bind(entity)(golfie);
                    yankee = zuuluu == offset;
                    golfie = undefined;
                    if(yankee) { _fun00016_ip = 929; continue _fun00015 }
 923:
                    golfie = offset.encoderImplementationName;
 929:
                    option = option.bind(verify)(golfie);
                    _fun00016_ip = 940; continue _fun00015;
 936:
                    option = _closure2_slot11;
 940:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 952; continue _fun00015 }
 949:
                    golfie = option;
 952:
                    report['video_encoder'] = golfie;
                    golfie = _closure2_slot12;
                    if(!(zuuluu == golfie)) { _fun00016_ip = 1033; continue _fun00015 }
 967:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 16;
                    golfie = verify[golfie];
                    verify = option.bind(entity)(golfie);
                    option = verify.parseDecoder;
                    yankee = _closure1_slot17;
                    offset = _closure2_slot30;
                    golfie = _closure2_slot28;
                    offset = yankee.bind(entity)(offset, golfie);
                    yankee = zuuluu == offset;
                    golfie = undefined;
                    if(yankee) { _fun00016_ip = 1026; continue _fun00015 }
 1020:
                    golfie = offset.decoderImplementationName;
 1026:
                    option = option.bind(verify)(golfie);
                    _fun00016_ip = 1037; continue _fun00015;
 1033:
                    option = _closure2_slot12;
 1037:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1049; continue _fun00015 }
 1046:
                    golfie = option;
 1049:
                    report['video_decoder'] = golfie;
                    golfie = _closure2_slot13;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1073; continue _fun00015 }
 1069:
                    golfie = _closure2_slot13;
 1073:
                    report['audio_capture_sample_rate_mismatch_percent'] = golfie;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 17;
                    golfie = verify[golfie];
                    golfie = option.bind(entity)(golfie);
                    option = golfie.WindowVisibilityVideoManager;
                    golfie = option.isIncomingVideoEnabled;
                    golfie = golfie.bind(option)();
                    golfie = !golfie;
                    report['incoming_video_stopped_for_occlusion'] = golfie;
                    offset = _closure1_slot18;
                    verify = _closure2_slot26;
                    option = _closure2_slot30;
                    golfie = _closure2_slot28;
                    golfie = offset.bind(entity)(verify, option, golfie);
                    verify = zuuluu == golfie;
                    option = undefined;
                    if(verify) { _fun00016_ip = 1164; continue _fun00015 }
 1158:
                    option = golfie.bitrate;
 1164:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1176; continue _fun00015 }
 1173:
                    golfie = option;
 1176:
                    report['bitrate'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1230; continue _fun00015 }
 1190:
                    verify = _closure1_slot16;
                    option = _closure2_slot30;
                    verify = verify.bind(entity)(option);
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 1218; continue _fun00015 }
 1212:
                    option = verify.bitrateTarget;
 1218:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1230; continue _fun00015 }
 1227:
                    golfie = option;
 1230:
                    report['target_bitrate'] = golfie;
                    golfie = _closure2_slot26;
                    verify = _closure2_slot27;
                    option = _closure2_slot28;
                    if(golfie) { _fun00016_ip = 1291; continue _fun00015 }
 1252:
                    golfie = _closure1_slot17;
                    option = golfie.bind(entity)(verify, option);
                    offset = zuuluu == option;
                    golfie = undefined;
                    if(offset) { _fun00016_ip = 1277; continue _fun00015 }
 1271:
                    golfie = option.frameRateDecode;
 1277:
                    offset = zuuluu != golfie;
                    option = null;
                    if(!offset) { _fun00016_ip = 1289; continue _fun00015 }
 1286:
                    option = golfie;
 1289:
                    _fun00016_ip = 1330; continue _fun00015;
 1291:
                    golfie = _closure1_slot16;
                    golfie = golfie.bind(entity)(verify);
                    offset = zuuluu == golfie;
                    verify = undefined;
                    if(offset) { _fun00016_ip = 1315; continue _fun00015 }
 1309:
                    verify = golfie.frameRateEncode;
 1315:
                    offset = zuuluu != verify;
                    golfie = null;
                    if(!offset) { _fun00016_ip = 1327; continue _fun00015 }
 1324:
                    golfie = verify;
 1327:
                    option = golfie;
 1330:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1342; continue _fun00015 }
 1339:
                    golfie = option;
 1342:
                    report['fps'] = golfie;
                    verify = _closure2_slot27;
                    golfie = _closure1_slot14;
                    option = golfie.STREAM;
                    golfie = null;
                    if(!(verify === option)) { _fun00016_ip = 1380; continue _fun00015 }
 1367:
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1380; continue _fun00015 }
 1376:
                    golfie = _closure2_slot21;
 1380:
                    report['target_fps'] = golfie;
                    golfie = _closure2_slot17;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1410; continue _fun00015 }
 1400:
                    golfie = _closure2_slot17;
                    option = golfie.ownerId;
 1410:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1422; continue _fun00015 }
 1419:
                    golfie = option;
 1422:
                    report['sender_user_id'] = golfie;
                    golfie = _closure2_slot18;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1454; continue _fun00015 }
 1440:
                    verify = _closure2_slot18;
                    golfie = verify.getRegion;
                    option = golfie.bind(verify)();
 1454:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1466; continue _fun00015 }
 1463:
                    golfie = option;
 1466:
                    report['stream_region'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1530; continue _fun00015 }
 1480:
                    option = _closure2_slot18;
                    verify = zuuluu == option;
                    option = undefined;
                    if(verify) { _fun00016_ip = 1518; continue _fun00015 }
 1493:
                    verify = _closure2_slot18;
                    verify = verify.analyticsContext;
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 1518; continue _fun00015 }
 1512:
                    option = verify.streamSourceType;
 1518:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1530; continue _fun00015 }
 1527:
                    golfie = option;
 1530:
                    report['stream_source_type'] = golfie;
                    golfie = _closure2_slot18;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1573; continue _fun00015 }
 1548:
                    golfie = _closure2_slot18;
                    golfie = golfie.analyticsContext;
                    verify = zuuluu == golfie;
                    option = undefined;
                    if(verify) { _fun00016_ip = 1573; continue _fun00015 }
 1567:
                    option = golfie.numViewers;
 1573:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1585; continue _fun00015 }
 1582:
                    golfie = option;
 1585:
                    report['num_stream_viewers'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1618; continue _fun00015 }
 1601:
                    option = _closure2_slot20;
                    option = zuuluu != option;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1618; continue _fun00015 }
 1614:
                    golfie = _closure2_slot20;
 1618:
                    report['video_input_resolution_height'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1651; continue _fun00015 }
 1634:
                    option = _closure2_slot21;
                    option = zuuluu != option;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1651; continue _fun00015 }
 1647:
                    golfie = _closure2_slot21;
 1651:
                    report['video_input_frame_rate'] = golfie;
                    option = _closure1_slot21;
                    golfie = _closure2_slot30;
                    golfie = option.bind(entity)(golfie);
                    report['screenshare_capture_method'] = golfie;
                    golfie = _closure2_slot22;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1695; continue _fun00015 }
 1691:
                    golfie = _closure2_slot22;
 1695:
                    report['share_application_name'] = golfie;
                    golfie = _closure2_slot23;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1717; continue _fun00015 }
 1713:
                    golfie = _closure2_slot23;
 1717:
                    report['share_application_id'] = golfie;
                    golfie = _closure2_slot24;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1739; continue _fun00015 }
 1735:
                    golfie = _closure2_slot24;
 1739:
                    report['share_application_executable'] = golfie;
                    golfie = _closure2_slot25;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1761; continue _fun00015 }
 1757:
                    golfie = _closure2_slot25;
 1761:
                    report['share_application_distributor'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1781; continue _fun00015 }
 1775:
                    option = oscard.cpu_brand;
 1781:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1793; continue _fun00015 }
 1790:
                    golfie = option;
 1793:
                    report['cpu_brand'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1813; continue _fun00015 }
 1807:
                    option = oscard.cpu_vendor;
 1813:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1825; continue _fun00015 }
 1822:
                    golfie = option;
 1825:
                    report['cpu_vendor'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1845; continue _fun00015 }
 1839:
                    option = oscard.cpu_memory;
 1845:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1857; continue _fun00015 }
 1854:
                    golfie = option;
 1857:
                    report['cpu_memory'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1877; continue _fun00015 }
 1871:
                    option = oscard.gpu_brand;
 1877:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1889; continue _fun00015 }
 1886:
                    golfie = option;
 1889:
                    report['gpu_brand'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1909; continue _fun00015 }
 1903:
                    option = oscard.gpu_count;
 1909:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1921; continue _fun00015 }
 1918:
                    golfie = option;
 1921:
                    report['gpu_count'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1941; continue _fun00015 }
 1935:
                    option = oscard.gpu_memory;
 1941:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1953; continue _fun00015 }
 1950:
                    golfie = option;
 1953:
                    report['gpu_memory'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1973; continue _fun00015 }
 1967:
                    option = oscard.gpu_device_vendor_id;
 1973:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1985; continue _fun00015 }
 1982:
                    golfie = option;
 1985:
                    report['gpu_device_vendor_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 2005; continue _fun00015 }
 1999:
                    option = oscard.gpu_device_device_id;
 2005:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 2017; continue _fun00015 }
 2014:
                    golfie = option;
 2017:
                    report['gpu_device_device_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 2037; continue _fun00015 }
 2031:
                    option = oscard.gpu_device_sub_sys_id;
 2037:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 2049; continue _fun00015 }
 2046:
                    golfie = option;
 2049:
                    report['gpu_device_sub_sys_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 2069; continue _fun00015 }
 2063:
                    option = oscard.gpu_device_revision;
 2069:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 2081; continue _fun00015 }
 2078:
                    golfie = option;
 2081:
                    report['gpu_device_revision'] = golfie;
                    option = zuuluu == oscard;
                    golfie = undefined;
                    if(option) { _fun00016_ip = 2101; continue _fun00015 }
 2095:
                    golfie = oscard.gpu_driver_version;
 2101:
                    option = zuuluu != golfie;
                    oscard = null;
                    if(!option) { _fun00016_ip = 2113; continue _fun00015 }
 2110:
                    oscard = golfie;
 2113:
                    report['gpu_driver_version'] = oscard;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    option = 18;
                    oscard = oscard[option];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.getCurrentCPUUsagePercent;
                    golfie = oscard.bind(golfie)();
                    verify = zuuluu != golfie;
                    oscard = null;
                    if(!verify) { _fun00016_ip = 2160; continue _fun00015 }
 2157:
                    oscard = golfie;
 2160:
                    report['cpu_usage'] = oscard;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.getCurrentMemoryUsageKB;
                    golfie = oscard.bind(golfie)();
                    option = zuuluu != golfie;
                    oscard = null;
                    if(!option) { _fun00016_ip = 2206; continue _fun00015 }
 2203:
                    oscard = golfie;
 2206:
                    report['memory_usage'] = oscard;
                    golfie = _closure1_slot19;
                    oscard = _closure2_slot30;
                    oscard = golfie.bind(entity)(oscard);
                    report['outbound_bitrate_estimate'] = oscard;
                    golfie = _closure1_slot20;
                    oscard = _closure2_slot30;
                    oscard = golfie.bind(entity)(oscard);
                    report['inbound_bitrate_estimate'] = oscard;
                    golfie = _closure1_slot7;
                    oscard = golfie.getHardwareEncoding;
                    oscard = oscard.bind(golfie)();
                    report['hardware_enabled'] = oscard;
                    oscard = _closure2_slot14;
                    if(!(zuuluu == oscard)) { _fun00016_ip = 2326; continue _fun00015 }
 2282:
                    option = _closure1_slot7;
                    oscard = option.getInputDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getInputDeviceId;
                    oscard = oscard.bind(option)();
                    golfie = golfie[oscard];
                    option = zuuluu == golfie;
                    oscard = undefined;
                    if(option) { _fun00016_ip = 2324; continue _fun00015 }
 2319:
                    oscard = golfie.name;
 2324:
                    _fun00016_ip = 2330; continue _fun00015;
 2326:
                    oscard = _closure2_slot14;
 2330:
                    report['audio_input_device_name'] = oscard;
                    oscard = _closure2_slot15;
                    if(!(zuuluu == oscard)) { _fun00016_ip = 2389; continue _fun00015 }
 2345:
                    option = _closure1_slot7;
                    oscard = option.getOutputDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getOutputDeviceId;
                    oscard = oscard.bind(option)();
                    golfie = golfie[oscard];
                    option = zuuluu == golfie;
                    oscard = undefined;
                    if(option) { _fun00016_ip = 2387; continue _fun00015 }
 2382:
                    oscard = golfie.name;
 2387:
                    _fun00016_ip = 2393; continue _fun00015;
 2389:
                    oscard = _closure2_slot15;
 2393:
                    report['audio_output_device_name'] = oscard;
                    oscard = _closure2_slot16;
                    if(!(zuuluu == oscard)) { _fun00016_ip = 2452; continue _fun00015 }
 2408:
                    option = _closure1_slot7;
                    oscard = option.getVideoDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getVideoDeviceId;
                    oscard = oscard.bind(option)();
                    oscard = golfie[oscard];
                    golfie = zuuluu == oscard;
                    zuuluu = undefined;
                    if(golfie) { _fun00016_ip = 2450; continue _fun00015 }
 2445:
                    zuuluu = oscard.name;
 2450:
                    _fun00016_ip = 2456; continue _fun00015;
 2452:
                    zuuluu = _closure2_slot16;
 2456:
                    report['video_device_name'] = zuuluu;
                    golfie = _closure1_slot7;
                    zuuluu = golfie.getMediaEngine;
                    tangon = zuuluu.bind(golfie)();
                    zuuluu = tangon.getAudioSubsystem;
                    zuuluu = zuuluu.bind(tangon)();
                    report['audio_subsystem'] = zuuluu;
                    zuuluu = golfie.getSettings;
                    zuuluu = zuuluu.bind(golfie)();
                    zuuluu = zuuluu.automaticAudioSubsystem;
                    report['automatic_audio_subsystem'] = zuuluu;
                    zuuluu = golfie.getMediaEngine;
                    tangon = zuuluu.bind(golfie)();
                    zuuluu = tangon.getAudioLayer;
                    zuuluu = zuuluu.bind(tangon)();
                    report['audio_layer'] = zuuluu;
                    zuuluu = golfie.getSettings;
                    zuuluu = zuuluu.bind(golfie)();
                    zuuluu = zuuluu.mode;
                    report['audio_input_mode'] = zuuluu;
                    zuuluu = golfie.getSettings;
                    zuuluu = zuuluu.bind(golfie)();
                    zuuluu = zuuluu.modeOptions;
                    zuuluu = zuuluu.autoThreshold;
                    report['automatic_audio_input_sensitivity_enabled'] = zuuluu;
                    zuuluu = golfie.getSettings;
                    zuuluu = zuuluu.bind(golfie)();
                    zuuluu = zuuluu.modeOptions;
                    zuuluu = zuuluu.threshold;
                    report['audio_input_sensitivity'] = zuuluu;
                    zuuluu = golfie.getEchoCancellation;
                    zuuluu = zuuluu.bind(golfie)();
                    report['echo_cancellation_enabled'] = zuuluu;
                    zuuluu = golfie.getNoiseSuppression;
                    zuuluu = zuuluu.bind(golfie)();
                    report['noise_suppression_enabled'] = zuuluu;
                    zuuluu = golfie.getNoiseCancellation;
                    zuuluu = zuuluu.bind(golfie)();
                    report['noise_cancellation_enabled'] = zuuluu;
                    zuuluu = golfie.getAutomaticGainControl;
                    zuuluu = zuuluu.bind(golfie)();
                    report['automatic_gain_control_enabled'] = zuuluu;
                    zuuluu = golfie.getSidechainCompression;
                    zuuluu = zuuluu.bind(golfie)();
                    report['sidechain_compression_enabled'] = zuuluu;
                    zuuluu = golfie.getInputVolume;
                    zuuluu = zuuluu.bind(golfie)();
                    report['input_volume'] = zuuluu;
                    zuuluu = golfie.getOutputVolume;
                    zuuluu = zuuluu.bind(golfie)();
                    report['output_volume'] = zuuluu;
                    zuuluu = global;
                    option = zuuluu.Object;
                    oscard = option.keys;
                    tangon = golfie.getInputDevices;
                    tangon = tangon.bind(golfie)();
                    tangon = oscard.bind(option)(tangon);
                    tangon = tangon.length;
                    report['audio_input_device_count'] = tangon;
                    oscard = zuuluu.Object;
                    tangon = oscard.keys;
                    zuuluu = golfie.getOutputDevices;
                    zuuluu = zuuluu.bind(golfie)();
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.length;
                    report['audio_output_device_count'] = zuuluu;
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 19;
                    zuuluu = oscard[zuuluu];
                    golfie = tangon.bind(entity)(zuuluu);
                    zuuluu = golfie.getAppHardwareAccelerationEnabled;
                    zuuluu = zuuluu.bind(golfie)();
                    report['app_hardware_acceleration_enabled'] = zuuluu;
                    zuuluu = 20;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.track;
                    michal = _closure1_slot13;
                    michal = michal.AV_ERROR_REPORTED;
                    michal = zuuluu.bind(tangon)(michal, report);
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['sendAVErrorAnalyticsEvent'] = michal;
    return entity;
})();