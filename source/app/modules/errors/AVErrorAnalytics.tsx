// app/modules/errors/AVErrorAnalytics.tsx
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
            entity = argFoo;
            var _closure2_slot0 = entity;
            michal = _closure1_slot4;
            entity = michal.getConnectionStats;
            tangon = entity.bind(michal)();
            michal = tangon.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.context;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            tangon = michal.bind(tangon)(entity);
            michal = null;
            report = michal == tangon;
            entity = null;
            if(report) { _fun00002_ip = 104; continue _fun00001 }
 54:
            tangon = tangon.stats;
            tangon = tangon.rtp;
            report = tangon.outbound;
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
            if(!tangon) { _fun00002_ip = 101; continue _fun00001 }
 98:
            michal = zuuluu;
 101:
            entity = michal;
 104:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: getInboundVideoStats
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = null;
            if(!(entity != tangon)) { _fun00004_ip = 123; continue _fun00003 }
 18:
            report = _closure1_slot4;
            michal = report.getConnectionStats;
            oscard = michal.bind(report)();
            report = oscard.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.context;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            michal = report.bind(oscard)(michal);
            if(!(entity != michal)) { _fun00004_ip = 121; continue _fun00003 }
 56:
            michal = michal.stats;
            michal = michal.rtp;
            michal = michal.inbound;
            report = michal[tangon];
            tangon = entity == report;
            michal = null;
            if(tangon) { _fun00004_ip = 119; continue _fun00003 }
 87:
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
            if(!report) { _fun00004_ip = 116; continue _fun00003 }
 113:
            zuuluu = tangon;
 116:
            michal = zuuluu;
 119:
            return michal;
 121:
            return entity;
 123:
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
            michal = zuuluu.getFirstConnectionStatsByContext;
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
            michal = zuuluu.getFirstConnectionStatsByContext;
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
    entity = function() { // Original name: getCurrentScreenshareCaptureMethod
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = _closure1_slot4;
            entity = michal.getConnectionStats;
            entity = entity.bind(michal)();
            entity = entity.length;
            tangon = 0;
            if(!(tangon !== entity)) { _fun00012_ip = 383; continue _fun00011 }
 33:
            michal = _closure1_slot4;
            entity = michal.getLastConnectionStats;
            entity = entity.bind(michal)();
            entity = entity.length;
            if(!(tangon !== entity)) { _fun00012_ip = 383; continue _fun00011 }
 59:
            report = {};
            oscard = ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames'];
            entity = oscard.length;
            michal = tangon < entity;
            entity = null;
            romeon = undefined;
            zuuluu = 0;
            if(!michal) { _fun00012_ip = 267; continue _fun00011 }
 92:
            option = oscard[zuuluu];
            verify = _closure1_slot4;
            michal = verify.getLastConnectionStats;
            offset = michal.bind(verify)();
            verify = offset.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.context;
                entity = _closure1_slot14;
                entity = entity.STREAM;
                entity = michal === entity;
                return entity;
            };
            verify = verify.bind(offset)(michal);
            offset = entity == verify;
            michal = undefined;
            if(offset) { _fun00012_ip = 161; continue _fun00011 }
 136:
            verify = verify.stats;
            verify = verify.screenshare;
            offset = entity == verify;
            michal = undefined;
            if(offset) { _fun00012_ip = 161; continue _fun00011 }
 157:
            michal = verify[option];
 161:
            offset = entity != michal;
            verify = 0;
            if(!offset) { _fun00012_ip = 173; continue _fun00011 }
 170:
            verify = michal;
 173:
            yankee = _closure1_slot4;
            offset = yankee.getFirstConnectionStatsByContext;
            michal = _closure1_slot14;
            michal = michal.STREAM;
            michal = offset.bind(yankee)(michal);
            yankee = entity == michal;
            offset = undefined;
            if(yankee) { _fun00012_ip = 232; continue _fun00011 }
 207:
            michal = michal.stats;
            michal = michal.screenshare;
            yankee = entity == michal;
            offset = undefined;
            if(yankee) { _fun00012_ip = 232; continue _fun00011 }
 228:
            offset = michal[option];
 232:
            yankee = entity != offset;
            michal = 0;
            if(!yankee) { _fun00012_ip = 244; continue _fun00011 }
 241:
            michal = offset;
 244:
            michal = michal - verify;
            report[option] = michal;
            zuuluu = zuuluu + 1;
            michal = oscard.length;
            if(zuuluu < michal) { _fun00012_ip = 92; continue _fun00011 }
 267:
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
            if(!report) { _fun00012_ip = 369; continue _fun00011 }
 319:
            backup = yankee[oscard];
            report = _closure1_slot3;
            backup = report.bind(romeon)(backup, offset);
            report = backup[tangon];
            backup = backup[verify];
            if(!(backup > option)) { _fun00012_ip = 351; continue _fun00011 }
 345:
            option = backup;
            golfie = report;
 351:
            oscard = oscard + 1;
            report = yankee.length;
            zuuluu = option;
            michal = golfie;
            if(oscard < report) { _fun00012_ip = 319; continue _fun00011 }
 369:
            zuuluu = zuuluu > tangon;
            entity = null;
            if(!zuuluu) { _fun00012_ip = 381; continue _fun00011 }
 378:
            entity = michal;
 381:
            return entity;
 383:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getVideoFrameRate
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argBar;
            entity = argFoo;
            if(entity) { _fun00014_ip = 56; continue _fun00013 }
 12:
            report = _closure1_slot17;
            zuuluu = undefined;
            entity = argBaz;
            report = report.bind(zuuluu)(tangon, entity);
            entity = null;
            oscard = entity == report;
            if(oscard) { _fun00014_ip = 42; continue _fun00013 }
 36:
            zuuluu = report.frameRateDecode;
 42:
            report = entity != zuuluu;
            entity = null;
            if(!report) { _fun00014_ip = 54; continue _fun00013 }
 51:
            entity = zuuluu;
 54:
            _fun00014_ip = 97; continue _fun00013;
 56:
            michal = _closure1_slot16;
            zuuluu = undefined;
            tangon = michal.bind(zuuluu)(tangon);
            michal = null;
            report = michal == tangon;
            if(report) { _fun00014_ip = 82; continue _fun00013 }
 76:
            zuuluu = tangon.frameRateEncode;
 82:
            tangon = michal != zuuluu;
            michal = null;
            if(!tangon) { _fun00014_ip = 94; continue _fun00013 }
 91:
            michal = zuuluu;
 94:
            entity = michal;
 97:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
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
    tangon = 'modules/errors/AVErrorAnalytics.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: sendAVErrorAnalyticsEvent
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = argFoo;
            verify = argBar;
            var _closure2_slot0 = oscard;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 12;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.getErrorInfo;
            report = tangon.bind(report)(oscard);
            var _closure2_slot2 = report;
            oscard = _closure1_slot10;
            tangon = oscard.getVoiceChannelId;
            tangon = tangon.bind(oscard)();
            oscard = 'channelId';
            golfie = oscard in verify;
            oscard = undefined;
            if(!golfie) { _fun00016_ip = 84; continue _fun00015 }
 79:
            oscard = verify.channelId;
 84:
            golfie = null;
            if(!(golfie != oscard)) { _fun00016_ip = 93; continue _fun00015 }
 90:
            tangon = oscard;
 93:
            oscard = golfie != tangon;
            option = null;
            if(!oscard) { _fun00016_ip = 105; continue _fun00015 }
 102:
            option = tangon;
 105:
            var _closure2_slot3 = option;
            oscard = _closure1_slot6;
            tangon = oscard.getChannel;
            tangon = tangon.bind(oscard)(option);
            var _closure2_slot4 = tangon;
            offset = 'streamKey';
            oscard = offset in verify;
            tangon = undefined;
            if(!oscard) { _fun00016_ip = 146; continue _fun00015 }
 140:
            tangon = verify.streamKey;
 146:
            oscard = 'mediaContext';
            oscard = oscard in verify;
            option = undefined;
            if(!oscard) { _fun00016_ip = 165; continue _fun00015 }
 159:
            option = verify.mediaContext;
 165:
            var _closure2_slot5 = option;
            oscard = 'underlyingError';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 188; continue _fun00015 }
 182:
            oscard = verify.underlyingError;
 188:
            var _closure2_slot6 = oscard;
            oscard = 'errorMessage';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 211; continue _fun00015 }
 205:
            oscard = verify.errorMessage;
 211:
            var _closure2_slot7 = oscard;
            oscard = 'mediaSessionId';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 234; continue _fun00015 }
 228:
            oscard = verify.mediaSessionId;
 234:
            var _closure2_slot8 = oscard;
            oscard = 'rtcConnectionId';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 257; continue _fun00015 }
 251:
            oscard = verify.rtcConnectionId;
 257:
            var _closure2_slot9 = oscard;
            oscard = 'videoCodec';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 280; continue _fun00015 }
 274:
            oscard = verify.videoCodec;
 280:
            var _closure2_slot10 = oscard;
            oscard = 'videoEncoder';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 303; continue _fun00015 }
 297:
            oscard = verify.videoEncoder;
 303:
            var _closure2_slot11 = oscard;
            oscard = 'videoDecoder';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 330; continue _fun00015 }
 322:
            oscard = verify.videoDecoder;
 330:
            var _closure2_slot12 = oscard;
            oscard = 'audioCaptureSampleRateMismatchPercent';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 353; continue _fun00015 }
 347:
            oscard = verify.audioCaptureSampleRateMismatchPercent;
 353:
            var _closure2_slot13 = oscard;
            oscard = 'audioInputDeviceName';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 376; continue _fun00015 }
 370:
            oscard = verify.audioInputDeviceName;
 376:
            var _closure2_slot14 = oscard;
            oscard = 'audioOutputDeviceName';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 399; continue _fun00015 }
 393:
            oscard = verify.audioOutputDeviceName;
 399:
            var _closure2_slot15 = oscard;
            oscard = 'videoDeviceName';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00016_ip = 422; continue _fun00015 }
 416:
            oscard = verify.videoDeviceName;
 422:
            var _closure2_slot16 = oscard;
            oscard = 'userId';
            oscard = oscard in verify;
            yankee = undefined;
            if(!oscard) { _fun00016_ip = 444; continue _fun00015 }
 439:
            yankee = verify.userId;
 444:
            romeon = golfie != tangon;
            oscard = null;
            if(!romeon) { _fun00016_ip = 484; continue _fun00015 }
 453:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 13;
            romeon = backup[romeon];
            foxtra = foxtra.bind(entity)(romeon);
            romeon = foxtra.decodeStreamKey;
            oscard = romeon.bind(foxtra)(tangon);
 484:
            var _closure2_slot17 = oscard;
            offset = offset in verify;
            romeon = null;
            if(!offset) { _fun00016_ip = 545; continue _fun00015 }
 497:
            offset = verify.streamKey;
            offset = golfie != offset;
            romeon = null;
            if(!offset) { _fun00016_ip = 545; continue _fun00015 }
 512:
            foxtra = _closure1_slot11;
            offset = foxtra.getRTCConnection;
            verify = verify.streamKey;
            verify = offset.bind(foxtra)(verify);
            offset = golfie != verify;
            romeon = null;
            if(!offset) { _fun00016_ip = 545; continue _fun00015 }
 542:
            romeon = verify;
 545:
            var _closure2_slot18 = romeon;
            verify = romeon;
            if(!(golfie == tangon)) { _fun00016_ip = 570; continue _fun00015 }
 556:
            foxtra = _closure1_slot8;
            offset = foxtra.getRTCConnection;
            verify = offset.bind(foxtra)();
 570:
            var _closure2_slot19 = verify;
            offset = golfie != tangon;
            foxtra = null;
            if(!offset) { _fun00016_ip = 616; continue _fun00015 }
 583:
            backup = golfie == romeon;
            offset = undefined;
            if(backup) { _fun00016_ip = 613; continue _fun00015 }
 592:
            romeon = romeon.analyticsContext;
            backup = golfie == romeon;
            offset = undefined;
            if(backup) { _fun00016_ip = 613; continue _fun00015 }
 607:
            offset = romeon.streamApplication;
 613:
            foxtra = offset;
 616:
            romeon = _closure1_slot5;
            offset = romeon.getState;
            offset = offset.bind(romeon)();
            romeon = offset.resolution;
            var _closure2_slot20 = romeon;
            offset = offset.fps;
            var _closure2_slot21 = offset;
            romeon = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 14;
            offset = backup[offset];
            romeon = romeon.bind(entity)(offset);
            offset = romeon.getRunningGameAnalytics;
            offset = offset.bind(romeon)(foxtra);
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
            if(!(golfie == option)) { _fun00016_ip = 745; continue _fun00015 }
 735:
            offset = _closure1_slot14;
            option = offset.DEFAULT;
 745:
            var _closure2_slot27 = option;
            if(!(golfie != oscard)) { _fun00016_ip = 759; continue _fun00015 }
 753:
            yankee = oscard.ownerId;
 759:
            var _closure2_slot28 = yankee;
            if(!(golfie == oscard)) { _fun00016_ip = 780; continue _fun00015 }
 767:
            option = 'receiver';
            if(!report) { _fun00016_ip = 778; continue _fun00015 }
 774:
            option = 'sender';
 778:
            _fun00016_ip = 802; continue _fun00015;
 780:
            romeon = golfie == verify;
            offset = undefined;
            if(romeon) { _fun00016_ip = 799; continue _fun00015 }
 789:
            romeon = verify.getVoiceParticipantType;
            offset = romeon.bind(verify)();
 799:
            option = offset;
 802:
            var _closure2_slot29 = option;
            if(!(golfie != tangon)) { _fun00016_ip = 814; continue _fun00015 }
 810:
            if(!(golfie == oscard)) { _fun00016_ip = 934; continue _fun00015 }
 814:
            if(report) { _fun00016_ip = 851; continue _fun00015 }
 817:
            option = golfie != yankee;
            tangon = null;
            if(!option) { _fun00016_ip = 849; continue _fun00015 }
 826:
            offset = golfie == verify;
            option = undefined;
            if(offset) { _fun00016_ip = 846; continue _fun00015 }
 835:
            offset = verify.getInboundStats;
            option = offset.bind(verify)(yankee);
 846:
            tangon = option;
 849:
            _fun00016_ip = 932; continue _fun00015;
 851:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 15;
            option = yankee[option];
            romeon = offset.bind(entity)(option);
            yankee = romeon.maxBy;
            option = golfie == verify;
            offset = undefined;
            if(option) { _fun00016_ip = 896; continue _fun00015 }
 886:
            option = verify.getOutboundStats;
            offset = option.bind(verify)();
 896:
            if(!(golfie == offset)) { _fun00016_ip = 904; continue _fun00015 }
 900:
            offset = new Array(0);
 904:
            option = function(argFoo) {
                entity = argFoo;
                entity = entity.num_frames;
                return entity;
            };
            offset = yankee.bind(romeon)(offset, option);
            yankee = golfie != offset;
            option = null;
            if(!yankee) { _fun00016_ip = 929; continue _fun00015 }
 926:
            option = offset;
 929:
            tangon = option;
 932:
            _fun00016_ip = 1012; continue _fun00015;
 934:
            option = golfie == verify;
            if(report) { _fun00016_ip = 965; continue _fun00015 }
 941:
            report = undefined;
            if(option) { _fun00016_ip = 963; continue _fun00015 }
 946:
            offset = verify.getInboundStats;
            oscard = oscard.ownerId;
            report = offset.bind(verify)(oscard);
 963:
            _fun00016_ip = 1009; continue _fun00015;
 965:
            oscard = undefined;
            if(option) { _fun00016_ip = 1006; continue _fun00015 }
 970:
            option = verify.getOutboundStats;
            verify = option.bind(verify)();
            golfie = golfie == verify;
            oscard = undefined;
            if(golfie) { _fun00016_ip = 1006; continue _fun00015 }
 989:
            option = verify.find;
            golfie = function(argFoo) {
                entity = argFoo;
                michal = entity.quality;
                entity = _closure1_slot15;
                entity = michal === entity;
                return entity;
            };
            oscard = option.bind(verify)(golfie);
 1006:
            report = oscard;
 1009:
            tangon = report;
 1012:
            var _closure2_slot1 = tangon;
            zuuluu = _closure1_slot12;
            tangon = zuuluu.bind(entity)();
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
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
                    if(!michal) { _fun00018_ip = 87; continue _fun00017 }
 83:
                    entity = _closure2_slot6;
 87:
                    report['underlying_error'] = entity;
                    entity = _closure2_slot7;
                    michal = zuuluu != entity;
                    entity = null;
                    if(!michal) { _fun00018_ip = 111; continue _fun00017 }
 107:
                    entity = _closure2_slot7;
 111:
                    report['error_message'] = entity;
                    entity = _closure2_slot4;
                    michal = zuuluu == entity;
                    entity = undefined;
                    golfie = undefined;
                    if(michal) { _fun00018_ip = 140; continue _fun00017 }
 131:
                    michal = _closure2_slot4;
                    golfie = michal.guild_id;
 140:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00018_ip = 152; continue _fun00017 }
 149:
                    michal = golfie;
 152:
                    report['guild_id'] = michal;
                    michal = _closure2_slot3;
                    golfie = zuuluu != michal;
                    michal = null;
                    if(!golfie) { _fun00018_ip = 173; continue _fun00017 }
 169:
                    michal = _closure2_slot3;
 173:
                    report['channel_id'] = michal;
                    michal = _closure2_slot4;
                    michal = zuuluu == michal;
                    golfie = undefined;
                    if(michal) { _fun00018_ip = 199; continue _fun00017 }
 190:
                    michal = _closure2_slot4;
                    golfie = michal.type;
 199:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00018_ip = 211; continue _fun00017 }
 208:
                    michal = golfie;
 211:
                    report['channel_type'] = michal;
                    michal = _closure2_slot9;
                    golfie = zuuluu != michal;
                    michal = null;
                    if(!golfie) { _fun00018_ip = 233; continue _fun00017 }
 229:
                    michal = _closure2_slot9;
 233:
                    report['rtc_connection_id'] = michal;
                    michal = _closure2_slot8;
                    if(!(zuuluu == michal)) { _fun00018_ip = 265; continue _fun00017 }
 246:
                    golfie = _closure1_slot8;
                    michal = golfie.getMediaSessionId;
                    golfie = michal.bind(golfie)();
                    _fun00018_ip = 269; continue _fun00017;
 265:
                    golfie = _closure2_slot8;
 269:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00018_ip = 281; continue _fun00017 }
 278:
                    michal = golfie;
 281:
                    report['media_session_id'] = michal;
                    michal = _closure2_slot18;
                    michal = zuuluu == michal;
                    golfie = undefined;
                    if(michal) { _fun00018_ip = 309; continue _fun00017 }
 299:
                    michal = _closure2_slot18;
                    golfie = michal.parentMediaSessionId;
 309:
                    option = zuuluu != golfie;
                    michal = null;
                    if(!option) { _fun00018_ip = 321; continue _fun00017 }
 318:
                    michal = golfie;
 321:
                    report['parent_media_session_id'] = michal;
                    michal = _closure2_slot5;
                    golfie = zuuluu != michal;
                    michal = null;
                    if(!golfie) { _fun00018_ip = 343; continue _fun00017 }
 339:
                    michal = _closure2_slot5;
 343:
                    report['context'] = michal;
                    option = _closure1_slot8;
                    golfie = option.getRTCConnection;
                    verify = golfie.bind(option)();
                    golfie = zuuluu == verify;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 385; continue _fun00017 }
 373:
                    golfie = verify.getVoiceVersion;
                    option = golfie.bind(verify)();
 385:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 397; continue _fun00017 }
 394:
                    golfie = option;
 397:
                    report['voice_backend_version'] = golfie;
                    option = _closure1_slot8;
                    golfie = option.getRTCConnection;
                    verify = golfie.bind(option)();
                    golfie = zuuluu == verify;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 437; continue _fun00017 }
 425:
                    golfie = verify.getRtcWorkerVersion;
                    option = golfie.bind(verify)();
 437:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 449; continue _fun00017 }
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
                    if(!verify) { _fun00018_ip = 495; continue _fun00017 }
 492:
                    golfie = option;
 495:
                    report['guild_region'] = golfie;
                    option = _closure1_slot8;
                    golfie = option.getHostname;
                    option = golfie.bind(option)();
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 526; continue _fun00017 }
 523:
                    golfie = option;
 526:
                    report['hostname'] = golfie;
                    golfie = _closure2_slot19;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 560; continue _fun00017 }
 544:
                    verify = _closure2_slot19;
                    golfie = verify.getDurationSeconds;
                    option = golfie.bind(verify)();
 560:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 572; continue _fun00017 }
 569:
                    golfie = option;
 572:
                    report['duration'] = golfie;
                    golfie = _closure2_slot29;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00018_ip = 593; continue _fun00017 }
 589:
                    golfie = _closure2_slot29;
 593:
                    report['participant_type'] = golfie;
                    golfie = _closure2_slot1;
                    option = zuuluu == golfie;
                    verify = undefined;
                    if(option) { _fun00018_ip = 617; continue _fun00017 }
 611:
                    verify = golfie.num_frames;
 617:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00018_ip = 629; continue _fun00017 }
 626:
                    option = verify;
 629:
                    report['num_frames'] = option;
                    option = _closure2_slot1;
                    offset = zuuluu == option;
                    verify = undefined;
                    if(offset) { _fun00018_ip = 653; continue _fun00017 }
 647:
                    verify = option.num_packets;
 653:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00018_ip = 665; continue _fun00017 }
 662:
                    option = verify;
 665:
                    report['num_packets'] = option;
                    option = _closure2_slot1;
                    offset = zuuluu == option;
                    verify = undefined;
                    if(offset) { _fun00018_ip = 689; continue _fun00017 }
 683:
                    verify = option.num_bytes;
 689:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00018_ip = 701; continue _fun00017 }
 698:
                    option = verify;
 701:
                    report['num_bytes'] = option;
                    yankee = _closure1_slot18;
                    offset = _closure2_slot26;
                    verify = _closure2_slot27;
                    option = _closure2_slot28;
                    verify = yankee.bind(entity)(offset, verify, option);
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00018_ip = 744; continue _fun00017 }
 738:
                    option = verify.packetsLost;
 744:
                    verify = zuuluu != option;
                    golfie = 0;
                    if(!verify) { _fun00018_ip = 756; continue _fun00017 }
 753:
                    golfie = option;
 756:
                    report['num_packets_lost'] = golfie;
                    golfie = _closure2_slot10;
                    if(!(zuuluu == golfie)) { _fun00018_ip = 847; continue _fun00017 }
 771:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 16;
                    golfie = verify[golfie];
                    verify = option.bind(entity)(golfie);
                    option = verify.parseCodecType;
                    romeon = _closure1_slot18;
                    yankee = _closure2_slot26;
                    offset = _closure2_slot27;
                    golfie = _closure2_slot28;
                    offset = romeon.bind(entity)(yankee, offset, golfie);
                    yankee = zuuluu == offset;
                    golfie = undefined;
                    if(yankee) { _fun00018_ip = 840; continue _fun00017 }
 829:
                    offset = offset.codec;
                    golfie = offset.name;
 840:
                    option = option.bind(verify)(golfie);
                    _fun00018_ip = 851; continue _fun00017;
 847:
                    option = _closure2_slot10;
 851:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 863; continue _fun00017 }
 860:
                    golfie = option;
 863:
                    report['video_codec'] = golfie;
                    golfie = _closure2_slot11;
                    if(!(zuuluu == golfie)) { _fun00018_ip = 937; continue _fun00017 }
 876:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 16;
                    golfie = verify[golfie];
                    verify = option.bind(entity)(golfie);
                    option = verify.parseEncoder;
                    offset = _closure1_slot16;
                    golfie = _closure2_slot27;
                    offset = offset.bind(entity)(golfie);
                    yankee = zuuluu == offset;
                    golfie = undefined;
                    if(yankee) { _fun00018_ip = 930; continue _fun00017 }
 924:
                    golfie = offset.encoderImplementationName;
 930:
                    option = option.bind(verify)(golfie);
                    _fun00018_ip = 941; continue _fun00017;
 937:
                    option = _closure2_slot11;
 941:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 953; continue _fun00017 }
 950:
                    golfie = option;
 953:
                    report['video_encoder'] = golfie;
                    golfie = _closure2_slot12;
                    if(!(zuuluu == golfie)) { _fun00018_ip = 1034; continue _fun00017 }
 968:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 16;
                    golfie = verify[golfie];
                    verify = option.bind(entity)(golfie);
                    option = verify.parseDecoder;
                    yankee = _closure1_slot17;
                    offset = _closure2_slot27;
                    golfie = _closure2_slot28;
                    offset = yankee.bind(entity)(offset, golfie);
                    yankee = zuuluu == offset;
                    golfie = undefined;
                    if(yankee) { _fun00018_ip = 1027; continue _fun00017 }
 1021:
                    golfie = offset.decoderImplementationName;
 1027:
                    option = option.bind(verify)(golfie);
                    _fun00018_ip = 1038; continue _fun00017;
 1034:
                    option = _closure2_slot12;
 1038:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1050; continue _fun00017 }
 1047:
                    golfie = option;
 1050:
                    report['video_decoder'] = golfie;
                    golfie = _closure2_slot13;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1074; continue _fun00017 }
 1070:
                    golfie = _closure2_slot13;
 1074:
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
                    option = _closure2_slot27;
                    golfie = _closure2_slot28;
                    golfie = offset.bind(entity)(verify, option, golfie);
                    verify = zuuluu == golfie;
                    option = undefined;
                    if(verify) { _fun00018_ip = 1165; continue _fun00017 }
 1159:
                    option = golfie.bitrate;
 1165:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1177; continue _fun00017 }
 1174:
                    golfie = option;
 1177:
                    report['bitrate'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1231; continue _fun00017 }
 1191:
                    verify = _closure1_slot16;
                    option = _closure2_slot27;
                    verify = verify.bind(entity)(option);
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00018_ip = 1219; continue _fun00017 }
 1213:
                    option = verify.bitrateTarget;
 1219:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1231; continue _fun00017 }
 1228:
                    golfie = option;
 1231:
                    report['target_bitrate'] = golfie;
                    offset = _closure1_slot22;
                    verify = _closure2_slot26;
                    option = _closure2_slot27;
                    golfie = _closure2_slot28;
                    option = offset.bind(entity)(verify, option, golfie);
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1273; continue _fun00017 }
 1270:
                    golfie = option;
 1273:
                    report['fps'] = golfie;
                    verify = _closure2_slot27;
                    golfie = _closure1_slot14;
                    option = golfie.STREAM;
                    golfie = null;
                    if(!(verify === option)) { _fun00018_ip = 1311; continue _fun00017 }
 1298:
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1311; continue _fun00017 }
 1307:
                    golfie = _closure2_slot21;
 1311:
                    report['target_fps'] = golfie;
                    golfie = _closure2_slot17;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1341; continue _fun00017 }
 1331:
                    golfie = _closure2_slot17;
                    option = golfie.ownerId;
 1341:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1353; continue _fun00017 }
 1350:
                    golfie = option;
 1353:
                    report['sender_user_id'] = golfie;
                    golfie = _closure2_slot18;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1385; continue _fun00017 }
 1371:
                    verify = _closure2_slot18;
                    golfie = verify.getRegion;
                    option = golfie.bind(verify)();
 1385:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1397; continue _fun00017 }
 1394:
                    golfie = option;
 1397:
                    report['stream_region'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1461; continue _fun00017 }
 1411:
                    option = _closure2_slot18;
                    verify = zuuluu == option;
                    option = undefined;
                    if(verify) { _fun00018_ip = 1449; continue _fun00017 }
 1424:
                    verify = _closure2_slot18;
                    verify = verify.analyticsContext;
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00018_ip = 1449; continue _fun00017 }
 1443:
                    option = verify.streamSourceType;
 1449:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1461; continue _fun00017 }
 1458:
                    golfie = option;
 1461:
                    report['stream_source_type'] = golfie;
                    golfie = _closure2_slot18;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1504; continue _fun00017 }
 1479:
                    golfie = _closure2_slot18;
                    golfie = golfie.analyticsContext;
                    verify = zuuluu == golfie;
                    option = undefined;
                    if(verify) { _fun00018_ip = 1504; continue _fun00017 }
 1498:
                    option = golfie.numViewers;
 1504:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1516; continue _fun00017 }
 1513:
                    golfie = option;
 1516:
                    report['num_stream_viewers'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1549; continue _fun00017 }
 1532:
                    option = _closure2_slot20;
                    option = zuuluu != option;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1549; continue _fun00017 }
 1545:
                    golfie = _closure2_slot20;
 1549:
                    report['video_input_resolution_height'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1582; continue _fun00017 }
 1565:
                    option = _closure2_slot21;
                    option = zuuluu != option;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1582; continue _fun00017 }
 1578:
                    golfie = _closure2_slot21;
 1582:
                    report['video_input_frame_rate'] = golfie;
                    golfie = _closure1_slot21;
                    golfie = golfie.bind(entity)();
                    report['screenshare_capture_method'] = golfie;
                    golfie = _closure2_slot22;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1621; continue _fun00017 }
 1617:
                    golfie = _closure2_slot22;
 1621:
                    report['share_application_name'] = golfie;
                    golfie = _closure2_slot23;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1643; continue _fun00017 }
 1639:
                    golfie = _closure2_slot23;
 1643:
                    report['share_application_id'] = golfie;
                    golfie = _closure2_slot24;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1665; continue _fun00017 }
 1661:
                    golfie = _closure2_slot24;
 1665:
                    report['share_application_executable'] = golfie;
                    golfie = _closure2_slot25;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00018_ip = 1687; continue _fun00017 }
 1683:
                    golfie = _closure2_slot25;
 1687:
                    report['share_application_distributor'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1707; continue _fun00017 }
 1701:
                    option = oscard.cpu_brand;
 1707:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1719; continue _fun00017 }
 1716:
                    golfie = option;
 1719:
                    report['cpu_brand'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1739; continue _fun00017 }
 1733:
                    option = oscard.cpu_vendor;
 1739:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1751; continue _fun00017 }
 1748:
                    golfie = option;
 1751:
                    report['cpu_vendor'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1771; continue _fun00017 }
 1765:
                    option = oscard.cpu_memory;
 1771:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1783; continue _fun00017 }
 1780:
                    golfie = option;
 1783:
                    report['cpu_memory'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1803; continue _fun00017 }
 1797:
                    option = oscard.gpu_brand;
 1803:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1815; continue _fun00017 }
 1812:
                    golfie = option;
 1815:
                    report['gpu_brand'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1835; continue _fun00017 }
 1829:
                    option = oscard.gpu_count;
 1835:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1847; continue _fun00017 }
 1844:
                    golfie = option;
 1847:
                    report['gpu_count'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1867; continue _fun00017 }
 1861:
                    option = oscard.gpu_memory;
 1867:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1879; continue _fun00017 }
 1876:
                    golfie = option;
 1879:
                    report['gpu_memory'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1899; continue _fun00017 }
 1893:
                    option = oscard.gpu_device_vendor_id;
 1899:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1911; continue _fun00017 }
 1908:
                    golfie = option;
 1911:
                    report['gpu_device_vendor_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1931; continue _fun00017 }
 1925:
                    option = oscard.gpu_device_device_id;
 1931:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1943; continue _fun00017 }
 1940:
                    golfie = option;
 1943:
                    report['gpu_device_device_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1963; continue _fun00017 }
 1957:
                    option = oscard.gpu_device_sub_sys_id;
 1963:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 1975; continue _fun00017 }
 1972:
                    golfie = option;
 1975:
                    report['gpu_device_sub_sys_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00018_ip = 1995; continue _fun00017 }
 1989:
                    option = oscard.gpu_device_revision;
 1995:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00018_ip = 2007; continue _fun00017 }
 2004:
                    golfie = option;
 2007:
                    report['gpu_device_revision'] = golfie;
                    option = zuuluu == oscard;
                    golfie = undefined;
                    if(option) { _fun00018_ip = 2027; continue _fun00017 }
 2021:
                    golfie = oscard.gpu_driver_version;
 2027:
                    option = zuuluu != golfie;
                    oscard = null;
                    if(!option) { _fun00018_ip = 2039; continue _fun00017 }
 2036:
                    oscard = golfie;
 2039:
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
                    if(!verify) { _fun00018_ip = 2086; continue _fun00017 }
 2083:
                    oscard = golfie;
 2086:
                    report['cpu_usage'] = oscard;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.getCurrentMemoryUsageKB;
                    golfie = oscard.bind(golfie)();
                    option = zuuluu != golfie;
                    oscard = null;
                    if(!option) { _fun00018_ip = 2132; continue _fun00017 }
 2129:
                    oscard = golfie;
 2132:
                    report['memory_usage'] = oscard;
                    golfie = _closure1_slot19;
                    oscard = _closure2_slot27;
                    oscard = golfie.bind(entity)(oscard);
                    report['outbound_bitrate_estimate'] = oscard;
                    golfie = _closure1_slot20;
                    oscard = _closure2_slot27;
                    oscard = golfie.bind(entity)(oscard);
                    report['inbound_bitrate_estimate'] = oscard;
                    golfie = _closure1_slot7;
                    oscard = golfie.getHardwareEncoding;
                    oscard = oscard.bind(golfie)();
                    report['hardware_enabled'] = oscard;
                    oscard = _closure2_slot14;
                    if(!(zuuluu == oscard)) { _fun00018_ip = 2252; continue _fun00017 }
 2208:
                    option = _closure1_slot7;
                    oscard = option.getInputDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getInputDeviceId;
                    oscard = oscard.bind(option)();
                    golfie = golfie[oscard];
                    option = zuuluu == golfie;
                    oscard = undefined;
                    if(option) { _fun00018_ip = 2250; continue _fun00017 }
 2245:
                    oscard = golfie.name;
 2250:
                    _fun00018_ip = 2256; continue _fun00017;
 2252:
                    oscard = _closure2_slot14;
 2256:
                    report['audio_input_device_name'] = oscard;
                    oscard = _closure2_slot15;
                    if(!(zuuluu == oscard)) { _fun00018_ip = 2315; continue _fun00017 }
 2271:
                    option = _closure1_slot7;
                    oscard = option.getOutputDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getOutputDeviceId;
                    oscard = oscard.bind(option)();
                    golfie = golfie[oscard];
                    option = zuuluu == golfie;
                    oscard = undefined;
                    if(option) { _fun00018_ip = 2313; continue _fun00017 }
 2308:
                    oscard = golfie.name;
 2313:
                    _fun00018_ip = 2319; continue _fun00017;
 2315:
                    oscard = _closure2_slot15;
 2319:
                    report['audio_output_device_name'] = oscard;
                    oscard = _closure2_slot16;
                    if(!(zuuluu == oscard)) { _fun00018_ip = 2378; continue _fun00017 }
 2334:
                    option = _closure1_slot7;
                    oscard = option.getVideoDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getVideoDeviceId;
                    oscard = oscard.bind(option)();
                    oscard = golfie[oscard];
                    golfie = zuuluu == oscard;
                    zuuluu = undefined;
                    if(golfie) { _fun00018_ip = 2376; continue _fun00017 }
 2371:
                    zuuluu = oscard.name;
 2376:
                    _fun00018_ip = 2382; continue _fun00017;
 2378:
                    zuuluu = _closure2_slot16;
 2382:
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