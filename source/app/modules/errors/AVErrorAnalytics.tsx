// app/modules/errors/AVErrorAnalytics.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getLatestOutboundBitrateEstimate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot4;
            michal = zuuluu.getConnectionStats;
            zuuluu = michal.bind(zuuluu)();
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
            if(tangon) { _fun00002_ip = 72; continue _fun00001 }
 54:
            zuuluu = zuuluu.stats;
            zuuluu = zuuluu.transport;
            michal = zuuluu.outboundBitrateEstimate;
 72:
            zuuluu = entity != michal;
            entity = null;
            if(!zuuluu) { _fun00002_ip = 84; continue _fun00001 }
 81:
            entity = michal;
 84:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: getLatestInboundBitrateEstimate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot4;
            michal = zuuluu.getConnectionStats;
            zuuluu = michal.bind(zuuluu)();
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
            if(tangon) { _fun00004_ip = 72; continue _fun00003 }
 54:
            zuuluu = zuuluu.stats;
            zuuluu = zuuluu.transport;
            michal = zuuluu.inboundBitrateEstimate;
 72:
            zuuluu = entity != michal;
            entity = null;
            if(!zuuluu) { _fun00004_ip = 84; continue _fun00003 }
 81:
            entity = michal;
 84:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: getCurrentScreenshareCaptureMethod
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot4;
            entity = michal.getConnectionStats;
            entity = entity.bind(michal)();
            entity = entity.length;
            tangon = 0;
            if(!(tangon !== entity)) { _fun00006_ip = 389; continue _fun00005 }
 33:
            michal = _closure1_slot4;
            entity = michal.getLastConnectionStats;
            entity = entity.bind(michal)();
            entity = entity.length;
            if(!(tangon !== entity)) { _fun00006_ip = 389; continue _fun00005 }
 59:
            report = {};
            oscard = ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames'];
            entity = oscard.length;
            michal = tangon < entity;
            entity = null;
            romeon = undefined;
            zuuluu = 0;
            if(!michal) { _fun00006_ip = 273; continue _fun00005 }
 92:
            option = oscard[zuuluu];
            verify = _closure1_slot4;
            michal = verify.getLastConnectionStats;
            offset = michal.bind(verify)();
            verify = offset.find;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure1_slot14;
                entity = entity.STREAM;
                entity = michal === entity;
                return entity;
            };
            verify = verify.bind(offset)(michal);
            offset = entity == verify;
            michal = undefined;
            if(offset) { _fun00006_ip = 161; continue _fun00005 }
 136:
            verify = verify.stats;
            verify = verify.screenshare;
            offset = entity == verify;
            michal = undefined;
            if(offset) { _fun00006_ip = 161; continue _fun00005 }
 157:
            michal = verify[option];
 161:
            offset = entity != michal;
            verify = 0;
            if(!offset) { _fun00006_ip = 173; continue _fun00005 }
 170:
            verify = michal;
 173:
            offset = _closure1_slot4;
            michal = offset.getConnectionStats;
            yankee = michal.bind(offset)();
            offset = yankee.find;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure1_slot14;
                entity = entity.STREAM;
                entity = michal === entity;
                return entity;
            };
            michal = offset.bind(yankee)(michal);
            yankee = entity == michal;
            offset = undefined;
            if(yankee) { _fun00006_ip = 238; continue _fun00005 }
 213:
            michal = michal.stats;
            michal = michal.screenshare;
            yankee = entity == michal;
            offset = undefined;
            if(yankee) { _fun00006_ip = 238; continue _fun00005 }
 234:
            offset = michal[option];
 238:
            yankee = entity != offset;
            michal = 0;
            if(!yankee) { _fun00006_ip = 250; continue _fun00005 }
 247:
            michal = offset;
 250:
            michal = michal - verify;
            report[option] = michal;
            zuuluu = zuuluu + 1;
            michal = oscard.length;
            if(zuuluu < michal) { _fun00006_ip = 92; continue _fun00005 }
 273:
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
            if(!report) { _fun00006_ip = 375; continue _fun00005 }
 325:
            backup = yankee[oscard];
            report = _closure1_slot3;
            backup = report.bind(romeon)(backup, offset);
            report = backup[tangon];
            backup = backup[verify];
            if(!(backup > option)) { _fun00006_ip = 357; continue _fun00005 }
 351:
            option = backup;
            golfie = report;
 357:
            oscard = oscard + 1;
            report = yankee.length;
            zuuluu = option;
            michal = golfie;
            if(oscard < report) { _fun00006_ip = 325; continue _fun00005 }
 375:
            zuuluu = zuuluu > tangon;
            entity = null;
            if(!zuuluu) { _fun00006_ip = 387; continue _fun00005 }
 384:
            entity = michal;
 387:
            return entity;
 389:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: getCurrentEncoder
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot4;
            entity = tangon.getConnectionStats;
            report = entity.bind(tangon)();
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
            if(!(entity != tangon)) { _fun00008_ip = 141; continue _fun00007 }
 49:
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
            if(tangon) { _fun00008_ip = 139; continue _fun00007 }
 93:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 12;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.parseEncoder;
            golfie = entity == oscard;
            if(golfie) { _fun00008_ip = 134; continue _fun00007 }
 128:
            zuuluu = oscard.encoderImplementationName;
 134:
            michal = tangon.bind(report)(zuuluu);
 139:
            return michal;
 141:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar) { // Original name: getCurrentDecoder
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = null;
            if(!(entity != report)) { _fun00010_ip = 154; continue _fun00009 }
 21:
            oscard = _closure1_slot4;
            tangon = oscard.getConnectionStats;
            golfie = tangon.bind(oscard)();
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
            if(!(entity != tangon)) { _fun00010_ip = 152; continue _fun00009 }
 59:
            tangon = tangon.stats;
            tangon = tangon.rtp;
            tangon = tangon.inbound;
            report = tangon[report];
            if(!(entity != report)) { _fun00010_ip = 150; continue _fun00009 }
 85:
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
            if(oscard) { _fun00010_ip = 143; continue _fun00009 }
 137:
            michal = report.decoderImplementationName;
 143:
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 150:
            return entity;
 152:
            return entity;
 154:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getCurrentCodec
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            verify = argBaz;
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot4;
            entity = tangon.getConnectionStats;
            report = entity.bind(tangon)();
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
            if(oscard) { _fun00012_ip = 71; continue _fun00011 }
 59:
            tangon = tangon.stats;
            golfie = tangon.rtp;
 71:
            tangon = argBar;
            if(tangon) { _fun00012_ip = 148; continue _fun00011 }
 77:
            oscard = report != verify;
            tangon = null;
            if(!oscard) { _fun00012_ip = 195; continue _fun00011 }
 86:
            oscard = report == golfie;
            option = undefined;
            if(oscard) { _fun00012_ip = 131; continue _fun00011 }
 95:
            oscard = golfie.inbound;
            offset = oscard[verify];
            oscard = report == offset;
            option = undefined;
            if(oscard) { _fun00012_ip = 131; continue _fun00011 }
 114:
            verify = offset.find;
            oscard = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = 'video';
                entity = entity === michal;
                return entity;
            };
            option = verify.bind(offset)(oscard);
 131:
            verify = report != option;
            oscard = null;
            if(!verify) { _fun00012_ip = 143; continue _fun00011 }
 140:
            oscard = option;
 143:
            tangon = oscard;
            _fun00012_ip = 195; continue _fun00011;
 148:
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00012_ip = 180; continue _fun00011 }
 157:
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
 180:
            golfie = report != oscard;
            zuuluu = null;
            if(!golfie) { _fun00012_ip = 192; continue _fun00011 }
 189:
            zuuluu = oscard;
 192:
            tangon = zuuluu;
 195:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 12;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.parseCodecType;
            report = report == tangon;
            entity = undefined;
            if(report) { _fun00012_ip = 241; continue _fun00011 }
 230:
            tangon = tangon.codec;
            entity = tangon.name;
 241:
            entity = michal.bind(zuuluu)(entity);
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
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/AVErrorAnalytics.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: sendAVErrorAnalyticsEvent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            verify = argBar;
            var _closure2_slot0 = oscard;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 13;
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
            if(!golfie) { _fun00014_ip = 84; continue _fun00013 }
 79:
            oscard = verify.channelId;
 84:
            golfie = null;
            if(!(golfie != oscard)) { _fun00014_ip = 93; continue _fun00013 }
 90:
            tangon = oscard;
 93:
            oscard = golfie != tangon;
            option = null;
            if(!oscard) { _fun00014_ip = 105; continue _fun00013 }
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
            if(!oscard) { _fun00014_ip = 146; continue _fun00013 }
 140:
            tangon = verify.streamKey;
 146:
            oscard = 'mediaContext';
            oscard = oscard in verify;
            option = undefined;
            if(!oscard) { _fun00014_ip = 165; continue _fun00013 }
 159:
            option = verify.mediaContext;
 165:
            var _closure2_slot5 = option;
            oscard = 'underlyingError';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 188; continue _fun00013 }
 182:
            oscard = verify.underlyingError;
 188:
            var _closure2_slot6 = oscard;
            oscard = 'errorMessage';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 211; continue _fun00013 }
 205:
            oscard = verify.errorMessage;
 211:
            var _closure2_slot7 = oscard;
            oscard = 'mediaSessionId';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 234; continue _fun00013 }
 228:
            oscard = verify.mediaSessionId;
 234:
            var _closure2_slot8 = oscard;
            oscard = 'rtcConnectionId';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 257; continue _fun00013 }
 251:
            oscard = verify.rtcConnectionId;
 257:
            var _closure2_slot9 = oscard;
            oscard = 'videoCodec';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 280; continue _fun00013 }
 274:
            oscard = verify.videoCodec;
 280:
            var _closure2_slot10 = oscard;
            oscard = 'videoEncoder';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 303; continue _fun00013 }
 297:
            oscard = verify.videoEncoder;
 303:
            var _closure2_slot11 = oscard;
            oscard = 'videoDecoder';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 330; continue _fun00013 }
 322:
            oscard = verify.videoDecoder;
 330:
            var _closure2_slot12 = oscard;
            oscard = 'audioCaptureSampleRateMismatchPercent';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 353; continue _fun00013 }
 347:
            oscard = verify.audioCaptureSampleRateMismatchPercent;
 353:
            var _closure2_slot13 = oscard;
            oscard = 'audioInputDeviceName';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 376; continue _fun00013 }
 370:
            oscard = verify.audioInputDeviceName;
 376:
            var _closure2_slot14 = oscard;
            oscard = 'audioOutputDeviceName';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 399; continue _fun00013 }
 393:
            oscard = verify.audioOutputDeviceName;
 399:
            var _closure2_slot15 = oscard;
            oscard = 'videoDeviceName';
            yankee = oscard in verify;
            oscard = undefined;
            if(!yankee) { _fun00014_ip = 422; continue _fun00013 }
 416:
            oscard = verify.videoDeviceName;
 422:
            var _closure2_slot16 = oscard;
            oscard = 'userId';
            oscard = oscard in verify;
            yankee = undefined;
            if(!oscard) { _fun00014_ip = 444; continue _fun00013 }
 439:
            yankee = verify.userId;
 444:
            romeon = golfie != tangon;
            oscard = null;
            if(!romeon) { _fun00014_ip = 484; continue _fun00013 }
 453:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 14;
            romeon = backup[romeon];
            foxtra = foxtra.bind(entity)(romeon);
            romeon = foxtra.decodeStreamKey;
            oscard = romeon.bind(foxtra)(tangon);
 484:
            var _closure2_slot17 = oscard;
            offset = offset in verify;
            romeon = null;
            if(!offset) { _fun00014_ip = 545; continue _fun00013 }
 497:
            offset = verify.streamKey;
            offset = golfie != offset;
            romeon = null;
            if(!offset) { _fun00014_ip = 545; continue _fun00013 }
 512:
            foxtra = _closure1_slot11;
            offset = foxtra.getRTCConnection;
            verify = verify.streamKey;
            verify = offset.bind(foxtra)(verify);
            offset = golfie != verify;
            romeon = null;
            if(!offset) { _fun00014_ip = 545; continue _fun00013 }
 542:
            romeon = verify;
 545:
            var _closure2_slot18 = romeon;
            verify = romeon;
            if(!(golfie == tangon)) { _fun00014_ip = 570; continue _fun00013 }
 556:
            foxtra = _closure1_slot8;
            offset = foxtra.getRTCConnection;
            verify = offset.bind(foxtra)();
 570:
            var _closure2_slot19 = verify;
            offset = golfie != tangon;
            foxtra = null;
            if(!offset) { _fun00014_ip = 616; continue _fun00013 }
 583:
            backup = golfie == romeon;
            offset = undefined;
            if(backup) { _fun00014_ip = 613; continue _fun00013 }
 592:
            romeon = romeon.analyticsContext;
            backup = golfie == romeon;
            offset = undefined;
            if(backup) { _fun00014_ip = 613; continue _fun00013 }
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
            offset = 15;
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
            if(!(golfie == option)) { _fun00014_ip = 745; continue _fun00013 }
 735:
            offset = _closure1_slot14;
            option = offset.DEFAULT;
 745:
            var _closure2_slot27 = option;
            if(!(golfie != oscard)) { _fun00014_ip = 759; continue _fun00013 }
 753:
            yankee = oscard.ownerId;
 759:
            var _closure2_slot28 = yankee;
            if(!(golfie == oscard)) { _fun00014_ip = 780; continue _fun00013 }
 767:
            option = 'receiver';
            if(!report) { _fun00014_ip = 778; continue _fun00013 }
 774:
            option = 'sender';
 778:
            _fun00014_ip = 802; continue _fun00013;
 780:
            romeon = golfie == verify;
            offset = undefined;
            if(romeon) { _fun00014_ip = 799; continue _fun00013 }
 789:
            romeon = verify.getVoiceParticipantType;
            offset = romeon.bind(verify)();
 799:
            option = offset;
 802:
            var _closure2_slot29 = option;
            if(!(golfie != tangon)) { _fun00014_ip = 814; continue _fun00013 }
 810:
            if(!(golfie == oscard)) { _fun00014_ip = 934; continue _fun00013 }
 814:
            if(report) { _fun00014_ip = 851; continue _fun00013 }
 817:
            option = golfie != yankee;
            tangon = null;
            if(!option) { _fun00014_ip = 849; continue _fun00013 }
 826:
            offset = golfie == verify;
            option = undefined;
            if(offset) { _fun00014_ip = 846; continue _fun00013 }
 835:
            offset = verify.getInboundStats;
            option = offset.bind(verify)(yankee);
 846:
            tangon = option;
 849:
            _fun00014_ip = 932; continue _fun00013;
 851:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 16;
            option = yankee[option];
            romeon = offset.bind(entity)(option);
            yankee = romeon.maxBy;
            option = golfie == verify;
            offset = undefined;
            if(option) { _fun00014_ip = 896; continue _fun00013 }
 886:
            option = verify.getOutboundStats;
            offset = option.bind(verify)();
 896:
            if(!(golfie == offset)) { _fun00014_ip = 904; continue _fun00013 }
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
            if(!yankee) { _fun00014_ip = 929; continue _fun00013 }
 926:
            option = offset;
 929:
            tangon = option;
 932:
            _fun00014_ip = 1012; continue _fun00013;
 934:
            option = golfie == verify;
            if(report) { _fun00014_ip = 965; continue _fun00013 }
 941:
            report = undefined;
            if(option) { _fun00014_ip = 963; continue _fun00013 }
 946:
            offset = verify.getInboundStats;
            oscard = oscard.ownerId;
            report = offset.bind(verify)(oscard);
 963:
            _fun00014_ip = 1009; continue _fun00013;
 965:
            oscard = undefined;
            if(option) { _fun00014_ip = 1006; continue _fun00013 }
 970:
            option = verify.getOutboundStats;
            verify = option.bind(verify)();
            golfie = golfie == verify;
            oscard = undefined;
            if(golfie) { _fun00014_ip = 1006; continue _fun00013 }
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
                    if(golfie) { _fun00016_ip = 560; continue _fun00015 }
 544:
                    verify = _closure2_slot19;
                    golfie = verify.getDurationSeconds;
                    option = golfie.bind(verify)();
 560:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 572; continue _fun00015 }
 569:
                    golfie = option;
 572:
                    report['duration'] = golfie;
                    golfie = _closure2_slot29;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 593; continue _fun00015 }
 589:
                    golfie = _closure2_slot29;
 593:
                    report['participant_type'] = golfie;
                    golfie = _closure2_slot1;
                    option = zuuluu == golfie;
                    verify = undefined;
                    if(option) { _fun00016_ip = 617; continue _fun00015 }
 611:
                    verify = golfie.num_frames;
 617:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 629; continue _fun00015 }
 626:
                    option = verify;
 629:
                    report['num_frames'] = option;
                    option = _closure2_slot1;
                    offset = zuuluu == option;
                    verify = undefined;
                    if(offset) { _fun00016_ip = 653; continue _fun00015 }
 647:
                    verify = option.num_packets;
 653:
                    offset = zuuluu != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 665; continue _fun00015 }
 662:
                    option = verify;
 665:
                    report['num_packets'] = option;
                    verify = _closure2_slot1;
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 689; continue _fun00015 }
 683:
                    option = verify.num_bytes;
 689:
                    verify = zuuluu != option;
                    golfie = 0;
                    if(!verify) { _fun00016_ip = 701; continue _fun00015 }
 698:
                    golfie = option;
 701:
                    report['num_bytes'] = golfie;
                    golfie = _closure2_slot10;
                    if(!(zuuluu == golfie)) { _fun00016_ip = 739; continue _fun00015 }
 714:
                    offset = _closure1_slot21;
                    verify = _closure2_slot27;
                    option = _closure2_slot26;
                    golfie = _closure2_slot28;
                    golfie = offset.bind(entity)(verify, option, golfie);
                    _fun00016_ip = 743; continue _fun00015;
 739:
                    golfie = _closure2_slot10;
 743:
                    report['video_codec'] = golfie;
                    golfie = _closure2_slot11;
                    if(!(zuuluu == golfie)) { _fun00016_ip = 771; continue _fun00015 }
 756:
                    option = _closure1_slot19;
                    golfie = _closure2_slot27;
                    option = option.bind(entity)(golfie);
                    _fun00016_ip = 775; continue _fun00015;
 771:
                    option = _closure2_slot11;
 775:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 787; continue _fun00015 }
 784:
                    golfie = option;
 787:
                    report['video_encoder'] = golfie;
                    golfie = _closure2_slot12;
                    if(!(zuuluu == golfie)) { _fun00016_ip = 822; continue _fun00015 }
 802:
                    verify = _closure1_slot20;
                    option = _closure2_slot27;
                    golfie = _closure2_slot28;
                    option = verify.bind(entity)(option, golfie);
                    _fun00016_ip = 826; continue _fun00015;
 822:
                    option = _closure2_slot12;
 826:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 838; continue _fun00015 }
 835:
                    golfie = option;
 838:
                    report['video_decoder'] = golfie;
                    golfie = _closure2_slot13;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 862; continue _fun00015 }
 858:
                    golfie = _closure2_slot13;
 862:
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
                    golfie = _closure2_slot17;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 938; continue _fun00015 }
 928:
                    golfie = _closure2_slot17;
                    option = golfie.ownerId;
 938:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 950; continue _fun00015 }
 947:
                    golfie = option;
 950:
                    report['sender_user_id'] = golfie;
                    golfie = _closure2_slot18;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 982; continue _fun00015 }
 968:
                    verify = _closure2_slot18;
                    golfie = verify.getRegion;
                    option = golfie.bind(verify)();
 982:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 994; continue _fun00015 }
 991:
                    golfie = option;
 994:
                    report['stream_region'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1058; continue _fun00015 }
 1008:
                    option = _closure2_slot18;
                    verify = zuuluu == option;
                    option = undefined;
                    if(verify) { _fun00016_ip = 1046; continue _fun00015 }
 1021:
                    verify = _closure2_slot18;
                    verify = verify.analyticsContext;
                    offset = zuuluu == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 1046; continue _fun00015 }
 1040:
                    option = verify.streamSourceType;
 1046:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1058; continue _fun00015 }
 1055:
                    golfie = option;
 1058:
                    report['stream_source_type'] = golfie;
                    golfie = _closure2_slot18;
                    golfie = zuuluu == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1101; continue _fun00015 }
 1076:
                    golfie = _closure2_slot18;
                    golfie = golfie.analyticsContext;
                    verify = zuuluu == golfie;
                    option = undefined;
                    if(verify) { _fun00016_ip = 1101; continue _fun00015 }
 1095:
                    option = golfie.numViewers;
 1101:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1113; continue _fun00015 }
 1110:
                    golfie = option;
 1113:
                    report['num_stream_viewers'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1146; continue _fun00015 }
 1129:
                    option = _closure2_slot20;
                    option = zuuluu != option;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1146; continue _fun00015 }
 1142:
                    golfie = _closure2_slot20;
 1146:
                    report['video_input_resolution_height'] = golfie;
                    option = _closure2_slot26;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1179; continue _fun00015 }
 1162:
                    option = _closure2_slot21;
                    option = zuuluu != option;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1179; continue _fun00015 }
 1175:
                    golfie = _closure2_slot21;
 1179:
                    report['video_input_frame_rate'] = golfie;
                    golfie = _closure1_slot18;
                    golfie = golfie.bind(entity)();
                    report['screenshare_capture_method'] = golfie;
                    golfie = _closure2_slot22;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1218; continue _fun00015 }
 1214:
                    golfie = _closure2_slot22;
 1218:
                    report['share_application_name'] = golfie;
                    golfie = _closure2_slot23;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1240; continue _fun00015 }
 1236:
                    golfie = _closure2_slot23;
 1240:
                    report['share_application_id'] = golfie;
                    golfie = _closure2_slot24;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1262; continue _fun00015 }
 1258:
                    golfie = _closure2_slot24;
 1262:
                    report['share_application_executable'] = golfie;
                    golfie = _closure2_slot25;
                    option = zuuluu != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1284; continue _fun00015 }
 1280:
                    golfie = _closure2_slot25;
 1284:
                    report['share_application_distributor'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1304; continue _fun00015 }
 1298:
                    option = oscard.cpu_brand;
 1304:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1316; continue _fun00015 }
 1313:
                    golfie = option;
 1316:
                    report['cpu_brand'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1336; continue _fun00015 }
 1330:
                    option = oscard.cpu_vendor;
 1336:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1348; continue _fun00015 }
 1345:
                    golfie = option;
 1348:
                    report['cpu_vendor'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1368; continue _fun00015 }
 1362:
                    option = oscard.cpu_memory;
 1368:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1380; continue _fun00015 }
 1377:
                    golfie = option;
 1380:
                    report['cpu_memory'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1400; continue _fun00015 }
 1394:
                    option = oscard.gpu_brand;
 1400:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1412; continue _fun00015 }
 1409:
                    golfie = option;
 1412:
                    report['gpu_brand'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1432; continue _fun00015 }
 1426:
                    option = oscard.gpu_count;
 1432:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1444; continue _fun00015 }
 1441:
                    golfie = option;
 1444:
                    report['gpu_count'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1464; continue _fun00015 }
 1458:
                    option = oscard.gpu_memory;
 1464:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1476; continue _fun00015 }
 1473:
                    golfie = option;
 1476:
                    report['gpu_memory'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1496; continue _fun00015 }
 1490:
                    option = oscard.gpu_device_vendor_id;
 1496:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1508; continue _fun00015 }
 1505:
                    golfie = option;
 1508:
                    report['gpu_device_vendor_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1528; continue _fun00015 }
 1522:
                    option = oscard.gpu_device_device_id;
 1528:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1540; continue _fun00015 }
 1537:
                    golfie = option;
 1540:
                    report['gpu_device_device_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1560; continue _fun00015 }
 1554:
                    option = oscard.gpu_device_sub_sys_id;
 1560:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1572; continue _fun00015 }
 1569:
                    golfie = option;
 1572:
                    report['gpu_device_sub_sys_id'] = golfie;
                    golfie = zuuluu == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1592; continue _fun00015 }
 1586:
                    option = oscard.gpu_device_revision;
 1592:
                    verify = zuuluu != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1604; continue _fun00015 }
 1601:
                    golfie = option;
 1604:
                    report['gpu_device_revision'] = golfie;
                    option = zuuluu == oscard;
                    golfie = undefined;
                    if(option) { _fun00016_ip = 1624; continue _fun00015 }
 1618:
                    golfie = oscard.gpu_driver_version;
 1624:
                    option = zuuluu != golfie;
                    oscard = null;
                    if(!option) { _fun00016_ip = 1636; continue _fun00015 }
 1633:
                    oscard = golfie;
 1636:
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
                    if(!verify) { _fun00016_ip = 1683; continue _fun00015 }
 1680:
                    oscard = golfie;
 1683:
                    report['cpu_usage'] = oscard;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.getCurrentMemoryUsageKB;
                    golfie = oscard.bind(golfie)();
                    option = zuuluu != golfie;
                    oscard = null;
                    if(!option) { _fun00016_ip = 1729; continue _fun00015 }
 1726:
                    oscard = golfie;
 1729:
                    report['memory_usage'] = oscard;
                    golfie = _closure1_slot16;
                    oscard = _closure2_slot27;
                    oscard = golfie.bind(entity)(oscard);
                    report['outbound_bitrate_estimate'] = oscard;
                    golfie = _closure1_slot17;
                    oscard = _closure2_slot27;
                    oscard = golfie.bind(entity)(oscard);
                    report['inbound_bitrate_estimate'] = oscard;
                    golfie = _closure1_slot7;
                    oscard = golfie.getHardwareEncoding;
                    oscard = oscard.bind(golfie)();
                    report['hardware_enabled'] = oscard;
                    oscard = _closure2_slot14;
                    if(!(zuuluu == oscard)) { _fun00016_ip = 1849; continue _fun00015 }
 1805:
                    option = _closure1_slot7;
                    oscard = option.getInputDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getInputDeviceId;
                    oscard = oscard.bind(option)();
                    golfie = golfie[oscard];
                    option = zuuluu == golfie;
                    oscard = undefined;
                    if(option) { _fun00016_ip = 1847; continue _fun00015 }
 1842:
                    oscard = golfie.name;
 1847:
                    _fun00016_ip = 1853; continue _fun00015;
 1849:
                    oscard = _closure2_slot14;
 1853:
                    report['audio_input_device_name'] = oscard;
                    oscard = _closure2_slot15;
                    if(!(zuuluu == oscard)) { _fun00016_ip = 1912; continue _fun00015 }
 1868:
                    option = _closure1_slot7;
                    oscard = option.getOutputDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getOutputDeviceId;
                    oscard = oscard.bind(option)();
                    golfie = golfie[oscard];
                    option = zuuluu == golfie;
                    oscard = undefined;
                    if(option) { _fun00016_ip = 1910; continue _fun00015 }
 1905:
                    oscard = golfie.name;
 1910:
                    _fun00016_ip = 1916; continue _fun00015;
 1912:
                    oscard = _closure2_slot15;
 1916:
                    report['audio_output_device_name'] = oscard;
                    oscard = _closure2_slot16;
                    if(!(zuuluu == oscard)) { _fun00016_ip = 1975; continue _fun00015 }
 1931:
                    option = _closure1_slot7;
                    oscard = option.getVideoDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getVideoDeviceId;
                    oscard = oscard.bind(option)();
                    oscard = golfie[oscard];
                    golfie = zuuluu == oscard;
                    zuuluu = undefined;
                    if(golfie) { _fun00016_ip = 1973; continue _fun00015 }
 1968:
                    zuuluu = oscard.name;
 1973:
                    _fun00016_ip = 1979; continue _fun00015;
 1975:
                    zuuluu = _closure2_slot16;
 1979:
                    report['video_device_name'] = zuuluu;
                    tangon = _closure1_slot7;
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
                    zuuluu = 19;
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