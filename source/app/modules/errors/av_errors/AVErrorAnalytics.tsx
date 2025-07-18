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
                    if(!michal) { _fun00016_ip = 87; continue _fun00015 }
 83:
                    entity = _closure2_slot6;
 87:
                    report['underlying_error'] = entity;
                    entity = _closure2_slot7;
                    michal = zuuluu != entity;
                    entity = null;
                    if(!michal) { _fun00016_ip = 111; continue _fun00015 }
 107:
                    entity = _closure2_slot7;
 111:
                    report['error_message'] = entity;
                    entity = _closure2_slot4;
                    michal = zuuluu == entity;
                    entity = undefined;
                    golfie = undefined;
                    if(michal) { _fun00016_ip = 140; continue _fun00015 }
 131:
                    michal = _closure2_slot4;
                    golfie = michal.guild_id;
 140:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 152; continue _fun00015 }
 149:
                    michal = golfie;
 152:
                    report['guild_id'] = michal;
                    michal = _closure2_slot3;
                    golfie = zuuluu != michal;
                    michal = null;
                    if(!golfie) { _fun00016_ip = 173; continue _fun00015 }
 169:
                    michal = _closure2_slot3;
 173:
                    report['channel_id'] = michal;
                    michal = _closure2_slot4;
                    michal = zuuluu == michal;
                    golfie = undefined;
                    if(michal) { _fun00016_ip = 199; continue _fun00015 }
 190:
                    michal = _closure2_slot4;
                    golfie = michal.type;
 199:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 211; continue _fun00015 }
 208:
                    michal = golfie;
 211:
                    report['channel_type'] = michal;
                    michal = _closure2_slot9;
                    golfie = zuuluu != michal;
                    michal = null;
                    if(!golfie) { _fun00016_ip = 233; continue _fun00015 }
 229:
                    michal = _closure2_slot9;
 233:
                    report['rtc_connection_id'] = michal;
                    michal = _closure2_slot8;
                    if(!(zuuluu == michal)) { _fun00016_ip = 265; continue _fun00015 }
 246:
                    golfie = _closure1_slot8;
                    michal = golfie.getMediaSessionId;
                    golfie = michal.bind(golfie)();
                    _fun00016_ip = 269; continue _fun00015;
 265:
                    golfie = _closure2_slot8;
 269:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 281; continue _fun00015 }
 278:
                    michal = golfie;
 281:
                    report['media_session_id'] = michal;
                    michal = _closure2_slot18;
                    michal = zuuluu == michal;
                    golfie = undefined;
                    if(michal) { _fun00016_ip = 309; continue _fun00015 }
 299:
                    michal = _closure2_slot18;
                    golfie = michal.parentMediaSessionId;
 309:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 321; continue _fun00015 }
 318:
                    michal = golfie;
 321:
                    report['parent_media_session_id'] = michal;
                    michal = _closure2_slot5;
                    golfie = zuuluu != michal;
                    michal = null;
                    if(!golfie) { _fun00016_ip = 343; continue _fun00015 }
 339:
                    michal = _closure2_slot5;
 343:
                    report['context'] = michal;
                    option = _closure1_slot8;
                    golfie = option.getRTCConnection;
                    verify = golfie.bind(option)();
                    golfie = zuuluu == verify;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 385; continue _fun00015 }
 373:
                    golfie = verify.getVoiceVersion;
                    option = golfie.bind(verify)();
 385:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 397; continue _fun00015 }
 394:
                    golfie = option;
 397:
                    report['voice_backend_version'] = golfie;
                    option = _closure1_slot8;
                    golfie = option.getRTCConnection;
                    verify = golfie.bind(option)();
                    golfie = zuuluu == verify;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 437; continue _fun00015 }
 425:
                    golfie = verify.getRtcWorkerVersion;
                    option = golfie.bind(verify)();
 437:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 449; continue _fun00015 }
 446:
                    golfie = option;
 449:
                    report['rtc_worker_backend_version'] = golfie;
                    verify = _closure1_slot9;
                    option = verify.getRegion;
                    offset = _closure1_slot8;
                    golfie = offset.getHostname;
                    golfie = golfie.bind(offset)();
                    option = option.bind(verify)(golfie);
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 495; continue _fun00015 }
 492:
                    golfie = option;
 495:
                    report['guild_region'] = golfie;
                    option = _closure1_slot8;
                    golfie = option.getHostname;
                    option = golfie.bind(option)();
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 526; continue _fun00015 }
 523:
                    golfie = option;
 526:
                    report['hostname'] = golfie;
                    golfie = _closure2_slot19;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 558; continue _fun00015 }
 544:
                    verify = _closure2_slot19;
                    golfie = verify.getDurationSeconds;
                    option = golfie.bind(verify)();
 558:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 570; continue _fun00015 }
 567:
                    golfie = option;
 570:
                    report['duration'] = golfie;
                    golfie = _closure2_slot29;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 591; continue _fun00015 }
 587:
                    golfie = _closure2_slot29;
 591:
                    report['participant_type'] = golfie;
                    golfie = _closure2_slot1;
                    option = zuuluu == golfie;
                    verify = undefined;
                    if(option) { _fun00016_ip = 615; continue _fun00015 }
 609:
                    verify = golfie.num_frames;
 615:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 627; continue _fun00015 }
 624:
                    option = verify;
 627:
                    report['num_frames'] = option;
                    option = _closure2_slot1;
                    offset = zuuluu == option;
                    verify = undefined;
                    if(offset) { _fun00016_ip = 651; continue _fun00015 }
 645:
                    verify = option.num_packets;
 651:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 663; continue _fun00015 }
 660:
                    option = verify;
 663:
                    report['num_packets'] = option;
                    option = _closure2_slot1;
                    offset = zuuluu == option;
                    verify = undefined;
                    if(offset) { _fun00016_ip = 687; continue _fun00015 }
 681:
                    verify = option.num_bytes;
 687:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 699; continue _fun00015 }
 696:
                    option = verify;
 699:
                    report['num_bytes'] = option;
                    yankee = _closure1_slot18;
                    offset = _closure2_slot26;
                    verify = _closure2_slot30;
                    option = _closure2_slot28;
                    verify = yankee.bind(entity)(offset, verify, option);
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 742; continue _fun00015 }
 736:
                    option = verify.packetsLost;
 742:
                    verify = zuuluu != option;
                    golfie = 0;
                    if(!verify) { _fun00016_ip = 754; continue _fun00015 }
 751:
                    golfie = option;
 754:
                    report['num_packets_lost'] = golfie;
                    golfie = _closure2_slot10;
                    if(!(zuuluu == golfie)) { _fun00016_ip = 845; continue _fun00015 }
 769:
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
                    if(yankee) { _fun00016_ip = 838; continue _fun00015 }
 827:
                    offset = offset.codec;
                    golfie = offset.name;
 838:
                    option = option.bind(verify)(golfie);
                    _fun00016_ip = 849; continue _fun00015;
 845:
                    option = _closure2_slot10;
 849:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 861; continue _fun00015 }
 858:
                    golfie = option;
 861:
                    report['video_codec'] = golfie;
                    golfie = _closure2_slot11;
                    if(!(zuuluu == golfie)) { _fun00016_ip = 935; continue _fun00015 }
 874:
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
                    if(yankee) { _fun00016_ip = 928; continue _fun00015 }
 922:
                    golfie = offset.encoderImplementationName;
 928:
                    option = option.bind(verify)(golfie);
                    _fun00016_ip = 939; continue _fun00015;
 935:
                    option = _closure2_slot11;
 939:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 951; continue _fun00015 }
 948:
                    golfie = option;
 951:
                    report['video_encoder'] = golfie;
                    golfie = _closure2_slot12;
                    if(!(zuuluu == golfie)) { _fun00016_ip = 1032; continue _fun00015 }
 966:
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
                    if(yankee) { _fun00016_ip = 1025; continue _fun00015 }
 1019:
                    golfie = offset.decoderImplementationName;
 1025:
                    option = option.bind(verify)(golfie);
                    _fun00016_ip = 1036; continue _fun00015;
 1032:
                    option = _closure2_slot12;
 1036:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1048; continue _fun00015 }
 1045:
                    golfie = option;
 1048:
                    report['video_decoder'] = golfie;
                    golfie = _closure2_slot13;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1072; continue _fun00015 }
 1068:
                    golfie = _closure2_slot13;
 1072:
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
                    if(verify) { _fun00016_ip = 1163; continue _fun00015 }
 1157:
                    option = golfie.bitrate;
 1163:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1175; continue _fun00015 }
 1172:
                    golfie = option;
 1175:
                    report['bitrate'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1229; continue _fun00015 }
 1189:
                    verify = _closure1_slot16;
                    option = _closure2_slot30;
                    verify = verify.bind(entity)(option);
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 1217; continue _fun00015 }
 1211:
                    option = verify.bitrateTarget;
 1217:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1229; continue _fun00015 }
 1226:
                    golfie = option;
 1229:
                    report['target_bitrate'] = golfie;
                    golfie = _closure2_slot26;
                    verify = _closure2_slot27;
                    option = _closure2_slot28;
                    if(golfie) { _fun00016_ip = 1290; continue _fun00015 }
 1251:
                    golfie = _closure1_slot17;
                    option = golfie.bind(entity)(verify, option);
                    offset = zuuluu == option;
                    golfie = undefined;
                    if(offset) { _fun00016_ip = 1276; continue _fun00015 }
 1270:
                    golfie = option.frameRateDecode;
 1276:
                    offset = zuuluu != golfie;
                    option = null;
                    if(!offset) { _fun00016_ip = 1288; continue _fun00015 }
 1285:
                    option = golfie;
 1288:
                    _fun00016_ip = 1329; continue _fun00015;
 1290:
                    golfie = _closure1_slot16;
                    golfie = golfie.bind(entity)(verify);
                    offset = zuuluu == golfie;
                    verify = undefined;
                    if(offset) { _fun00016_ip = 1314; continue _fun00015 }
 1308:
                    verify = golfie.frameRateEncode;
 1314:
                    offset = zuuluu != verify;
                    golfie = null;
                    if(!offset) { _fun00016_ip = 1326; continue _fun00015 }
 1323:
                    golfie = verify;
 1326:
                    option = golfie;
 1329:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1341; continue _fun00015 }
 1338:
                    golfie = option;
 1341:
                    report['fps'] = golfie;
                    verify = _closure2_slot27;
                    golfie = _closure1_slot14;
                    option = golfie.STREAM;
                    golfie = null;
                    if(!(verify === option)) { _fun00016_ip = 1379; continue _fun00015 }
 1366:
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1379; continue _fun00015 }
 1375:
                    golfie = _closure2_slot21;
 1379:
                    report['target_fps'] = golfie;
                    golfie = _closure2_slot17;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1409; continue _fun00015 }
 1399:
                    golfie = _closure2_slot17;
                    option = golfie.ownerId;
 1409:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1421; continue _fun00015 }
 1418:
                    golfie = option;
 1421:
                    report['sender_user_id'] = golfie;
                    golfie = _closure2_slot18;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1453; continue _fun00015 }
 1439:
                    verify = _closure2_slot18;
                    golfie = verify.getRegion;
                    option = golfie.bind(verify)();
 1453:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1465; continue _fun00015 }
 1462:
                    golfie = option;
 1465:
                    report['stream_region'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1529; continue _fun00015 }
 1479:
                    option = _closure2_slot18;
                    verify = zuuluu == option;
                    option = undefined;
                    if(verify) { _fun00016_ip = 1517; continue _fun00015 }
 1492:
                    verify = _closure2_slot18;
                    verify = verify.analyticsContext;
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 1517; continue _fun00015 }
 1511:
                    option = verify.streamSourceType;
 1517:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1529; continue _fun00015 }
 1526:
                    golfie = option;
 1529:
                    report['stream_source_type'] = golfie;
                    golfie = _closure2_slot18;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1572; continue _fun00015 }
 1547:
                    golfie = _closure2_slot18;
                    golfie = golfie.analyticsContext;
                    verify = zuuluu == golfie;
                    option = undefined;
                    if(verify) { _fun00016_ip = 1572; continue _fun00015 }
 1566:
                    option = golfie.numViewers;
 1572:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1584; continue _fun00015 }
 1581:
                    golfie = option;
 1584:
                    report['num_stream_viewers'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1617; continue _fun00015 }
 1600:
                    option = _closure2_slot20;
                    option = zuuluu != option;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1617; continue _fun00015 }
 1613:
                    golfie = _closure2_slot20;
 1617:
                    report['video_input_resolution_height'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1650; continue _fun00015 }
 1633:
                    option = _closure2_slot21;
                    option = zuuluu != option;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1650; continue _fun00015 }
 1646:
                    golfie = _closure2_slot21;
 1650:
                    report['video_input_frame_rate'] = golfie;
                    option = _closure1_slot21;
                    golfie = _closure2_slot30;
                    golfie = option.bind(entity)(golfie);
                    report['screenshare_capture_method'] = golfie;
                    golfie = _closure2_slot22;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1694; continue _fun00015 }
 1690:
                    golfie = _closure2_slot22;
 1694:
                    report['share_application_name'] = golfie;
                    golfie = _closure2_slot23;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1716; continue _fun00015 }
 1712:
                    golfie = _closure2_slot23;
 1716:
                    report['share_application_id'] = golfie;
                    golfie = _closure2_slot24;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1738; continue _fun00015 }
 1734:
                    golfie = _closure2_slot24;
 1738:
                    report['share_application_executable'] = golfie;
                    golfie = _closure2_slot25;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1760; continue _fun00015 }
 1756:
                    golfie = _closure2_slot25;
 1760:
                    report['share_application_distributor'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1780; continue _fun00015 }
 1774:
                    option = oscard.cpu_brand;
 1780:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1792; continue _fun00015 }
 1789:
                    golfie = option;
 1792:
                    report['cpu_brand'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1812; continue _fun00015 }
 1806:
                    option = oscard.cpu_vendor;
 1812:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1824; continue _fun00015 }
 1821:
                    golfie = option;
 1824:
                    report['cpu_vendor'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1844; continue _fun00015 }
 1838:
                    option = oscard.cpu_memory;
 1844:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1856; continue _fun00015 }
 1853:
                    golfie = option;
 1856:
                    report['cpu_memory'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1876; continue _fun00015 }
 1870:
                    option = oscard.gpu_brand;
 1876:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1888; continue _fun00015 }
 1885:
                    golfie = option;
 1888:
                    report['gpu_brand'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1908; continue _fun00015 }
 1902:
                    option = oscard.gpu_count;
 1908:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1920; continue _fun00015 }
 1917:
                    golfie = option;
 1920:
                    report['gpu_count'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1940; continue _fun00015 }
 1934:
                    option = oscard.gpu_memory;
 1940:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1952; continue _fun00015 }
 1949:
                    golfie = option;
 1952:
                    report['gpu_memory'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1972; continue _fun00015 }
 1966:
                    option = oscard.gpu_device_vendor_id;
 1972:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1984; continue _fun00015 }
 1981:
                    golfie = option;
 1984:
                    report['gpu_device_vendor_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 2004; continue _fun00015 }
 1998:
                    option = oscard.gpu_device_device_id;
 2004:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 2016; continue _fun00015 }
 2013:
                    golfie = option;
 2016:
                    report['gpu_device_device_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 2036; continue _fun00015 }
 2030:
                    option = oscard.gpu_device_sub_sys_id;
 2036:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 2048; continue _fun00015 }
 2045:
                    golfie = option;
 2048:
                    report['gpu_device_sub_sys_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 2068; continue _fun00015 }
 2062:
                    option = oscard.gpu_device_revision;
 2068:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 2080; continue _fun00015 }
 2077:
                    golfie = option;
 2080:
                    report['gpu_device_revision'] = golfie;
                    option = zuuluu == oscard;
                    golfie = undefined;
                    if(option) { _fun00016_ip = 2100; continue _fun00015 }
 2094:
                    golfie = oscard.gpu_driver_version;
 2100:
                    option = zuuluu != golfie;
                    oscard = null;
                    if(!option) { _fun00016_ip = 2112; continue _fun00015 }
 2109:
                    oscard = golfie;
 2112:
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
                    if(!verify) { _fun00016_ip = 2159; continue _fun00015 }
 2156:
                    oscard = golfie;
 2159:
                    report['cpu_usage'] = oscard;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.getCurrentMemoryUsageKB;
                    golfie = oscard.bind(golfie)();
                    option = zuuluu != golfie;
                    oscard = null;
                    if(!option) { _fun00016_ip = 2205; continue _fun00015 }
 2202:
                    oscard = golfie;
 2205:
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
                    if(!(zuuluu == oscard)) { _fun00016_ip = 2323; continue _fun00015 }
 2279:
                    option = _closure1_slot7;
                    oscard = option.getInputDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getInputDeviceId;
                    oscard = oscard.bind(option)();
                    golfie = golfie[oscard];
                    option = zuuluu == golfie;
                    oscard = undefined;
                    if(option) { _fun00016_ip = 2321; continue _fun00015 }
 2316:
                    oscard = golfie.name;
 2321:
                    _fun00016_ip = 2327; continue _fun00015;
 2323:
                    oscard = _closure2_slot14;
 2327:
                    report['audio_input_device_name'] = oscard;
                    oscard = _closure2_slot15;
                    if(!(zuuluu == oscard)) { _fun00016_ip = 2386; continue _fun00015 }
 2342:
                    option = _closure1_slot7;
                    oscard = option.getOutputDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getOutputDeviceId;
                    oscard = oscard.bind(option)();
                    golfie = golfie[oscard];
                    option = zuuluu == golfie;
                    oscard = undefined;
                    if(option) { _fun00016_ip = 2384; continue _fun00015 }
 2379:
                    oscard = golfie.name;
 2384:
                    _fun00016_ip = 2390; continue _fun00015;
 2386:
                    oscard = _closure2_slot15;
 2390:
                    report['audio_output_device_name'] = oscard;
                    oscard = _closure2_slot16;
                    if(!(zuuluu == oscard)) { _fun00016_ip = 2449; continue _fun00015 }
 2405:
                    option = _closure1_slot7;
                    oscard = option.getVideoDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getVideoDeviceId;
                    oscard = oscard.bind(option)();
                    oscard = golfie[oscard];
                    golfie = zuuluu == oscard;
                    zuuluu = undefined;
                    if(golfie) { _fun00016_ip = 2447; continue _fun00015 }
 2442:
                    zuuluu = oscard.name;
 2447:
                    _fun00016_ip = 2453; continue _fun00015;
 2449:
                    zuuluu = _closure2_slot16;
 2453:
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