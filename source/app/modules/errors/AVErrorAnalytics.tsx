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
            offset = argBar;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = offset;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 13;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.getErrorInfo;
            tangon = tangon.bind(report)(oscard);
            var _closure2_slot3 = tangon;
            report = offset.channelId;
            golfie = null;
            if(!(golfie == report)) { _fun00014_ip = 81; continue _fun00013 }
 67:
            option = _closure1_slot10;
            oscard = option.getVoiceChannelId;
            report = oscard.bind(option)();
 81:
            oscard = golfie != report;
            option = null;
            if(!oscard) { _fun00014_ip = 93; continue _fun00013 }
 90:
            option = report;
 93:
            var _closure2_slot4 = option;
            oscard = _closure1_slot6;
            report = oscard.getChannel;
            report = report.bind(oscard)(option);
            var _closure2_slot5 = report;
            report = offset.streamKey;
            report = golfie != report;
            oscard = null;
            if(!report) { _fun00014_ip = 167; continue _fun00013 }
 130:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 14;
            report = verify[report];
            verify = option.bind(entity)(report);
            option = verify.decodeStreamKey;
            report = offset.streamKey;
            oscard = option.bind(verify)(report);
 167:
            var _closure2_slot6 = oscard;
            report = offset.streamKey;
            report = golfie != report;
            option = null;
            if(!report) { _fun00014_ip = 219; continue _fun00013 }
 186:
            yankee = _closure1_slot11;
            verify = yankee.getRTCConnection;
            report = offset.streamKey;
            report = verify.bind(yankee)(report);
            verify = golfie != report;
            option = null;
            if(!verify) { _fun00014_ip = 219; continue _fun00013 }
 216:
            option = report;
 219:
            var _closure2_slot7 = option;
            report = offset.streamKey;
            verify = option;
            if(!(golfie == report)) { _fun00014_ip = 250; continue _fun00013 }
 236:
            yankee = _closure1_slot8;
            report = yankee.getRTCConnection;
            verify = report.bind(yankee)();
 250:
            var _closure2_slot8 = verify;
            report = offset.streamKey;
            report = golfie != report;
            yankee = null;
            if(!report) { _fun00014_ip = 302; continue _fun00013 }
 269:
            romeon = golfie == option;
            report = undefined;
            if(romeon) { _fun00014_ip = 299; continue _fun00013 }
 278:
            option = option.analyticsContext;
            romeon = golfie == option;
            report = undefined;
            if(romeon) { _fun00014_ip = 299; continue _fun00013 }
 293:
            report = option.streamApplication;
 299:
            yankee = report;
 302:
            option = _closure1_slot5;
            report = option.getState;
            report = report.bind(option)();
            option = report.resolution;
            var _closure2_slot9 = option;
            report = report.fps;
            var _closure2_slot10 = report;
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            report = 15;
            report = romeon[report];
            option = option.bind(entity)(report);
            report = option.getRunningGameAnalytics;
            report = report.bind(option)(yankee);
            option = report.gameName;
            var _closure2_slot11 = option;
            option = report.gameId;
            var _closure2_slot12 = option;
            option = report.exe;
            var _closure2_slot13 = option;
            report = report.distributor;
            var _closure2_slot14 = report;
            report = tangon.isErrorOutbound;
            var _closure2_slot15 = report;
            tangon = offset.mediaContext;
            if(!(golfie == tangon)) { _fun00014_ip = 437; continue _fun00013 }
 427:
            option = _closure1_slot14;
            tangon = option.DEFAULT;
 437:
            var _closure2_slot16 = tangon;
            if(!(golfie == oscard)) { _fun00014_ip = 452; continue _fun00013 }
 445:
            tangon = offset.userId;
            _fun00014_ip = 458; continue _fun00013;
 452:
            tangon = oscard.ownerId;
 458:
            var _closure2_slot17 = tangon;
            if(!(golfie == oscard)) { _fun00014_ip = 479; continue _fun00013 }
 466:
            tangon = 'receiver';
            if(!report) { _fun00014_ip = 477; continue _fun00013 }
 473:
            tangon = 'sender';
 477:
            _fun00014_ip = 501; continue _fun00013;
 479:
            yankee = golfie == verify;
            option = undefined;
            if(yankee) { _fun00014_ip = 498; continue _fun00013 }
 488:
            yankee = verify.getVoiceParticipantType;
            option = yankee.bind(verify)();
 498:
            tangon = option;
 501:
            var _closure2_slot18 = tangon;
            tangon = offset.streamKey;
            if(!(golfie != tangon)) { _fun00014_ip = 522; continue _fun00013 }
 515:
            if(!(golfie == oscard)) { _fun00014_ip = 652; continue _fun00013 }
 522:
            if(report) { _fun00014_ip = 569; continue _fun00013 }
 525:
            tangon = offset.userId;
            option = golfie != tangon;
            tangon = null;
            if(!option) { _fun00014_ip = 567; continue _fun00013 }
 539:
            yankee = golfie == verify;
            option = undefined;
            if(yankee) { _fun00014_ip = 564; continue _fun00013 }
 548:
            yankee = verify.getInboundStats;
            offset = offset.userId;
            option = yankee.bind(verify)(offset);
 564:
            tangon = option;
 567:
            _fun00014_ip = 650; continue _fun00013;
 569:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 16;
            option = yankee[option];
            romeon = offset.bind(entity)(option);
            yankee = romeon.maxBy;
            option = golfie == verify;
            offset = undefined;
            if(option) { _fun00014_ip = 614; continue _fun00013 }
 604:
            option = verify.getOutboundStats;
            offset = option.bind(verify)();
 614:
            if(!(golfie == offset)) { _fun00014_ip = 622; continue _fun00013 }
 618:
            offset = new Array(0);
 622:
            option = function(argFoo) {
                entity = argFoo;
                entity = entity.num_frames;
                return entity;
            };
            offset = yankee.bind(romeon)(offset, option);
            yankee = golfie != offset;
            option = null;
            if(!yankee) { _fun00014_ip = 647; continue _fun00013 }
 644:
            option = offset;
 647:
            tangon = option;
 650:
            _fun00014_ip = 730; continue _fun00013;
 652:
            option = golfie == verify;
            if(report) { _fun00014_ip = 683; continue _fun00013 }
 659:
            report = undefined;
            if(option) { _fun00014_ip = 681; continue _fun00013 }
 664:
            offset = verify.getInboundStats;
            oscard = oscard.ownerId;
            report = offset.bind(verify)(oscard);
 681:
            _fun00014_ip = 727; continue _fun00013;
 683:
            oscard = undefined;
            if(option) { _fun00014_ip = 724; continue _fun00013 }
 688:
            option = verify.getOutboundStats;
            verify = option.bind(verify)();
            golfie = golfie == verify;
            oscard = undefined;
            if(golfie) { _fun00014_ip = 724; continue _fun00013 }
 707:
            option = verify.find;
            golfie = function(argFoo) {
                entity = argFoo;
                michal = entity.quality;
                entity = _closure1_slot15;
                entity = michal === entity;
                return entity;
            };
            oscard = option.bind(verify)(golfie);
 724:
            report = oscard;
 727:
            tangon = report;
 730:
            var _closure2_slot2 = tangon;
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
                    entity = _closure2_slot3;
                    michal = entity.errorCode;
                    report['error_code'] = michal;
                    michal = entity.severity;
                    report['error_severity'] = michal;
                    entity = entity.category;
                    report['error_category'] = entity;
                    entity = _closure2_slot1;
                    michal = entity.underlyingError;
                    tangon = null;
                    golfie = tangon != michal;
                    entity = null;
                    if(!golfie) { _fun00016_ip = 92; continue _fun00015 }
 89:
                    entity = michal;
 92:
                    report['underlying_error'] = entity;
                    entity = _closure2_slot1;
                    michal = entity.errorMessage;
                    golfie = tangon != michal;
                    entity = null;
                    if(!golfie) { _fun00016_ip = 121; continue _fun00015 }
 118:
                    entity = michal;
 121:
                    report['error_message'] = entity;
                    entity = _closure2_slot5;
                    michal = tangon == entity;
                    entity = undefined;
                    golfie = undefined;
                    if(michal) { _fun00016_ip = 150; continue _fun00015 }
 141:
                    michal = _closure2_slot5;
                    golfie = michal.guild_id;
 150:
                    option = tangon != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 162; continue _fun00015 }
 159:
                    michal = golfie;
 162:
                    report['guild_id'] = michal;
                    michal = _closure2_slot4;
                    golfie = tangon != michal;
                    michal = null;
                    if(!golfie) { _fun00016_ip = 183; continue _fun00015 }
 179:
                    michal = _closure2_slot4;
 183:
                    report['channel_id'] = michal;
                    michal = _closure2_slot5;
                    michal = tangon == michal;
                    golfie = undefined;
                    if(michal) { _fun00016_ip = 209; continue _fun00015 }
 200:
                    michal = _closure2_slot5;
                    golfie = michal.type;
 209:
                    option = tangon != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 221; continue _fun00015 }
 218:
                    michal = golfie;
 221:
                    report['channel_type'] = michal;
                    michal = _closure2_slot1;
                    golfie = michal.rtcConnectionId;
                    option = tangon != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 248; continue _fun00015 }
 245:
                    michal = golfie;
 248:
                    report['rtc_connection_id'] = michal;
                    michal = _closure2_slot1;
                    golfie = michal.mediaSessionId;
                    if(!(tangon == golfie)) { _fun00016_ip = 284; continue _fun00015 }
 267:
                    option = _closure1_slot8;
                    michal = option.getMediaSessionId;
                    golfie = michal.bind(option)();
 284:
                    option = tangon != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 296; continue _fun00015 }
 293:
                    michal = golfie;
 296:
                    report['media_session_id'] = michal;
                    michal = _closure2_slot7;
                    michal = tangon == michal;
                    golfie = undefined;
                    if(michal) { _fun00016_ip = 324; continue _fun00015 }
 314:
                    michal = _closure2_slot7;
                    golfie = michal.parentMediaSessionId;
 324:
                    option = tangon != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 336; continue _fun00015 }
 333:
                    michal = golfie;
 336:
                    report['parent_media_session_id'] = michal;
                    michal = _closure2_slot1;
                    golfie = michal.mediaContext;
                    option = tangon != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 363; continue _fun00015 }
 360:
                    michal = golfie;
 363:
                    report['context'] = michal;
                    option = _closure1_slot8;
                    golfie = option.getRTCConnection;
                    verify = golfie.bind(option)();
                    golfie = tangon == verify;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 405; continue _fun00015 }
 393:
                    golfie = verify.getVoiceVersion;
                    option = golfie.bind(verify)();
 405:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 417; continue _fun00015 }
 414:
                    golfie = option;
 417:
                    report['voice_backend_version'] = golfie;
                    option = _closure1_slot8;
                    golfie = option.getRTCConnection;
                    verify = golfie.bind(option)();
                    golfie = tangon == verify;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 457; continue _fun00015 }
 445:
                    golfie = verify.getRtcWorkerVersion;
                    option = golfie.bind(verify)();
 457:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 469; continue _fun00015 }
 466:
                    golfie = option;
 469:
                    report['rtc_worker_backend_version'] = golfie;
                    verify = _closure1_slot9;
                    option = verify.getRegion;
                    offset = _closure1_slot8;
                    golfie = offset.getHostname;
                    golfie = golfie.bind(offset)();
                    option = option.bind(verify)(golfie);
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 515; continue _fun00015 }
 512:
                    golfie = option;
 515:
                    report['guild_region'] = golfie;
                    option = _closure1_slot8;
                    golfie = option.getHostname;
                    option = golfie.bind(option)();
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 546; continue _fun00015 }
 543:
                    golfie = option;
 546:
                    report['hostname'] = golfie;
                    golfie = _closure2_slot8;
                    golfie = tangon == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 580; continue _fun00015 }
 564:
                    verify = _closure2_slot8;
                    golfie = verify.getDurationSeconds;
                    option = golfie.bind(verify)();
 580:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 592; continue _fun00015 }
 589:
                    golfie = option;
 592:
                    report['duration'] = golfie;
                    golfie = _closure2_slot18;
                    option = tangon != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 613; continue _fun00015 }
 609:
                    golfie = _closure2_slot18;
 613:
                    report['participant_type'] = golfie;
                    golfie = _closure2_slot2;
                    option = tangon == golfie;
                    verify = undefined;
                    if(option) { _fun00016_ip = 637; continue _fun00015 }
 631:
                    verify = golfie.num_frames;
 637:
                    offset = tangon != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 649; continue _fun00015 }
 646:
                    option = verify;
 649:
                    report['num_frames'] = option;
                    option = _closure2_slot2;
                    offset = tangon == option;
                    verify = undefined;
                    if(offset) { _fun00016_ip = 673; continue _fun00015 }
 667:
                    verify = option.num_packets;
 673:
                    offset = tangon != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 685; continue _fun00015 }
 682:
                    option = verify;
 685:
                    report['num_packets'] = option;
                    verify = _closure2_slot2;
                    offset = tangon == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 709; continue _fun00015 }
 703:
                    option = verify.num_bytes;
 709:
                    verify = tangon != option;
                    golfie = 0;
                    if(!verify) { _fun00016_ip = 721; continue _fun00015 }
 718:
                    golfie = option;
 721:
                    report['num_bytes'] = golfie;
                    golfie = _closure2_slot1;
                    golfie = golfie.videoCodec;
                    if(!(tangon == golfie)) { _fun00016_ip = 763; continue _fun00015 }
 740:
                    yankee = _closure1_slot21;
                    offset = _closure2_slot16;
                    verify = _closure2_slot15;
                    option = _closure2_slot17;
                    golfie = yankee.bind(entity)(offset, verify, option);
 763:
                    report['video_codec'] = golfie;
                    golfie = _closure2_slot1;
                    option = golfie.videoEncoder;
                    if(!(tangon == option)) { _fun00016_ip = 795; continue _fun00015 }
 782:
                    verify = _closure1_slot19;
                    golfie = _closure2_slot16;
                    option = verify.bind(entity)(golfie);
 795:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 807; continue _fun00015 }
 804:
                    golfie = option;
 807:
                    report['video_encoder'] = golfie;
                    golfie = _closure2_slot1;
                    option = golfie.videoDecoder;
                    if(!(tangon == option)) { _fun00016_ip = 846; continue _fun00015 }
 828:
                    offset = _closure1_slot20;
                    verify = _closure2_slot16;
                    golfie = _closure2_slot17;
                    option = offset.bind(entity)(verify, golfie);
 846:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 858; continue _fun00015 }
 855:
                    golfie = option;
 858:
                    report['video_decoder'] = golfie;
                    golfie = _closure2_slot1;
                    option = golfie.audioCaptureSampleRateMismatchPercent;
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 887; continue _fun00015 }
 884:
                    golfie = option;
 887:
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
                    golfie = _closure2_slot6;
                    golfie = tangon == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 963; continue _fun00015 }
 953:
                    golfie = _closure2_slot6;
                    option = golfie.ownerId;
 963:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 975; continue _fun00015 }
 972:
                    golfie = option;
 975:
                    report['sender_user_id'] = golfie;
                    golfie = _closure2_slot7;
                    golfie = tangon == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1007; continue _fun00015 }
 993:
                    verify = _closure2_slot7;
                    golfie = verify.getRegion;
                    option = golfie.bind(verify)();
 1007:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1019; continue _fun00015 }
 1016:
                    golfie = option;
 1019:
                    report['stream_region'] = golfie;
                    option = _closure2_slot15;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1083; continue _fun00015 }
 1033:
                    option = _closure2_slot7;
                    verify = tangon == option;
                    option = undefined;
                    if(verify) { _fun00016_ip = 1071; continue _fun00015 }
 1046:
                    verify = _closure2_slot7;
                    verify = verify.analyticsContext;
                    offset = tangon == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 1071; continue _fun00015 }
 1065:
                    option = verify.streamSourceType;
 1071:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1083; continue _fun00015 }
 1080:
                    golfie = option;
 1083:
                    report['stream_source_type'] = golfie;
                    golfie = _closure2_slot7;
                    golfie = tangon == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1126; continue _fun00015 }
 1101:
                    golfie = _closure2_slot7;
                    golfie = golfie.analyticsContext;
                    verify = tangon == golfie;
                    option = undefined;
                    if(verify) { _fun00016_ip = 1126; continue _fun00015 }
 1120:
                    option = golfie.numViewers;
 1126:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1138; continue _fun00015 }
 1135:
                    golfie = option;
 1138:
                    report['num_stream_viewers'] = golfie;
                    option = _closure2_slot15;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1171; continue _fun00015 }
 1154:
                    option = _closure2_slot9;
                    option = tangon != option;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1171; continue _fun00015 }
 1167:
                    golfie = _closure2_slot9;
 1171:
                    report['video_input_resolution_height'] = golfie;
                    option = _closure2_slot15;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1204; continue _fun00015 }
 1187:
                    option = _closure2_slot10;
                    option = tangon != option;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1204; continue _fun00015 }
 1200:
                    golfie = _closure2_slot10;
 1204:
                    report['video_input_frame_rate'] = golfie;
                    golfie = _closure1_slot18;
                    golfie = golfie.bind(entity)();
                    report['screenshare_capture_method'] = golfie;
                    golfie = _closure2_slot11;
                    option = tangon != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1243; continue _fun00015 }
 1239:
                    golfie = _closure2_slot11;
 1243:
                    report['share_application_name'] = golfie;
                    golfie = _closure2_slot12;
                    option = tangon != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1265; continue _fun00015 }
 1261:
                    golfie = _closure2_slot12;
 1265:
                    report['share_application_id'] = golfie;
                    golfie = _closure2_slot13;
                    option = tangon != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1287; continue _fun00015 }
 1283:
                    golfie = _closure2_slot13;
 1287:
                    report['share_application_executable'] = golfie;
                    golfie = _closure2_slot14;
                    option = tangon != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1309; continue _fun00015 }
 1305:
                    golfie = _closure2_slot14;
 1309:
                    report['share_application_distributor'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1329; continue _fun00015 }
 1323:
                    option = oscard.cpu_brand;
 1329:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1341; continue _fun00015 }
 1338:
                    golfie = option;
 1341:
                    report['cpu_brand'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1361; continue _fun00015 }
 1355:
                    option = oscard.cpu_vendor;
 1361:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1373; continue _fun00015 }
 1370:
                    golfie = option;
 1373:
                    report['cpu_vendor'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1393; continue _fun00015 }
 1387:
                    option = oscard.cpu_memory;
 1393:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1405; continue _fun00015 }
 1402:
                    golfie = option;
 1405:
                    report['cpu_memory'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1425; continue _fun00015 }
 1419:
                    option = oscard.gpu_brand;
 1425:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1437; continue _fun00015 }
 1434:
                    golfie = option;
 1437:
                    report['gpu_brand'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1457; continue _fun00015 }
 1451:
                    option = oscard.gpu_count;
 1457:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1469; continue _fun00015 }
 1466:
                    golfie = option;
 1469:
                    report['gpu_count'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1489; continue _fun00015 }
 1483:
                    option = oscard.gpu_memory;
 1489:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1501; continue _fun00015 }
 1498:
                    golfie = option;
 1501:
                    report['gpu_memory'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1521; continue _fun00015 }
 1515:
                    option = oscard.gpu_device_vendor_id;
 1521:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1533; continue _fun00015 }
 1530:
                    golfie = option;
 1533:
                    report['gpu_device_vendor_id'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1553; continue _fun00015 }
 1547:
                    option = oscard.gpu_device_device_id;
 1553:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1565; continue _fun00015 }
 1562:
                    golfie = option;
 1565:
                    report['gpu_device_device_id'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1585; continue _fun00015 }
 1579:
                    option = oscard.gpu_device_sub_sys_id;
 1585:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1597; continue _fun00015 }
 1594:
                    golfie = option;
 1597:
                    report['gpu_device_sub_sys_id'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1617; continue _fun00015 }
 1611:
                    option = oscard.gpu_device_revision;
 1617:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1629; continue _fun00015 }
 1626:
                    golfie = option;
 1629:
                    report['gpu_device_revision'] = golfie;
                    option = tangon == oscard;
                    golfie = undefined;
                    if(option) { _fun00016_ip = 1649; continue _fun00015 }
 1643:
                    golfie = oscard.gpu_driver_version;
 1649:
                    option = tangon != golfie;
                    oscard = null;
                    if(!option) { _fun00016_ip = 1661; continue _fun00015 }
 1658:
                    oscard = golfie;
 1661:
                    report['gpu_driver_version'] = oscard;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    option = 18;
                    oscard = oscard[option];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.getCurrentCPUUsagePercent;
                    golfie = oscard.bind(golfie)();
                    verify = tangon != golfie;
                    oscard = null;
                    if(!verify) { _fun00016_ip = 1708; continue _fun00015 }
 1705:
                    oscard = golfie;
 1708:
                    report['cpu_usage'] = oscard;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.getCurrentMemoryUsageKB;
                    golfie = oscard.bind(golfie)();
                    option = tangon != golfie;
                    oscard = null;
                    if(!option) { _fun00016_ip = 1754; continue _fun00015 }
 1751:
                    oscard = golfie;
 1754:
                    report['memory_usage'] = oscard;
                    golfie = _closure1_slot16;
                    oscard = _closure2_slot16;
                    oscard = golfie.bind(entity)(oscard);
                    report['outbound_bitrate_estimate'] = oscard;
                    golfie = _closure1_slot17;
                    oscard = _closure2_slot16;
                    oscard = golfie.bind(entity)(oscard);
                    report['inbound_bitrate_estimate'] = oscard;
                    golfie = _closure1_slot7;
                    oscard = golfie.getHardwareEncoding;
                    oscard = oscard.bind(golfie)();
                    report['hardware_enabled'] = oscard;
                    oscard = _closure2_slot1;
                    oscard = oscard.audioInputDeviceName;
                    if(!(tangon == oscard)) { _fun00016_ip = 1881; continue _fun00015 }
 1836:
                    verify = _closure1_slot7;
                    golfie = verify.getInputDevices;
                    option = golfie.bind(verify)();
                    golfie = verify.getInputDeviceId;
                    golfie = golfie.bind(verify)();
                    option = option[golfie];
                    verify = tangon == option;
                    golfie = undefined;
                    if(verify) { _fun00016_ip = 1878; continue _fun00015 }
 1873:
                    golfie = option.name;
 1878:
                    oscard = golfie;
 1881:
                    report['audio_input_device_name'] = oscard;
                    oscard = _closure2_slot1;
                    oscard = oscard.audioOutputDeviceName;
                    if(!(tangon == oscard)) { _fun00016_ip = 1947; continue _fun00015 }
 1902:
                    verify = _closure1_slot7;
                    golfie = verify.getOutputDevices;
                    option = golfie.bind(verify)();
                    golfie = verify.getOutputDeviceId;
                    golfie = golfie.bind(verify)();
                    option = option[golfie];
                    verify = tangon == option;
                    golfie = undefined;
                    if(verify) { _fun00016_ip = 1944; continue _fun00015 }
 1939:
                    golfie = option.name;
 1944:
                    oscard = golfie;
 1947:
                    report['audio_output_device_name'] = oscard;
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.videoDeviceName;
                    if(!(tangon == zuuluu)) { _fun00016_ip = 2013; continue _fun00015 }
 1968:
                    option = _closure1_slot7;
                    oscard = option.getVideoDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getVideoDeviceId;
                    oscard = oscard.bind(option)();
                    oscard = golfie[oscard];
                    golfie = tangon == oscard;
                    tangon = undefined;
                    if(golfie) { _fun00016_ip = 2010; continue _fun00015 }
 2005:
                    tangon = oscard.name;
 2010:
                    zuuluu = tangon;
 2013:
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