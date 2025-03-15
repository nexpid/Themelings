// app/modules/errors/AVErrorAnalytics.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: handleMediaEngineConnectionStats
        entity = _closure1_slot14;
        _closure1_slot15 = entity;
        entity = argFoo;
        _closure1_slot14 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: getLatestOutboundBitrateEstimate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            oscard = _closure1_slot14;
            entity = null;
            tangon = entity == oscard;
            michal = undefined;
            if(tangon) { _fun00002_ip = 69; continue _fun00001 }
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
            if(tangon) { _fun00002_ip = 69; continue _fun00001 }
 51:
            zuuluu = zuuluu.stats;
            zuuluu = zuuluu.transport;
            michal = zuuluu.outboundBitrateEstimate;
 69:
            zuuluu = entity != michal;
            entity = null;
            if(!zuuluu) { _fun00002_ip = 81; continue _fun00001 }
 78:
            entity = michal;
 81:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: getLatestInboundBitrateEstimate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot14;
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
            if(tangon) { _fun00004_ip = 60; continue _fun00003 }
 42:
            zuuluu = zuuluu.stats;
            zuuluu = zuuluu.transport;
            michal = zuuluu.inboundBitrateEstimate;
 60:
            zuuluu = entity != michal;
            entity = null;
            if(!zuuluu) { _fun00004_ip = 72; continue _fun00003 }
 69:
            entity = michal;
 72:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: getCurrentScreenshareCaptureMethod
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot14;
            entity = entity.length;
            tangon = 0;
            if(!(tangon !== entity)) { _fun00006_ip = 345; continue _fun00005 }
 23:
            entity = _closure1_slot15;
            entity = entity.length;
            if(!(tangon !== entity)) { _fun00006_ip = 345; continue _fun00005 }
 39:
            report = {};
            oscard = ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames'];
            entity = oscard.length;
            michal = tangon < entity;
            entity = null;
            romeon = undefined;
            zuuluu = 0;
            if(!michal) { _fun00006_ip = 229; continue _fun00005 }
 72:
            option = oscard[zuuluu];
            offset = _closure1_slot15;
            verify = offset.find;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure1_slot11;
                entity = entity.STREAM;
                entity = michal === entity;
                return entity;
            };
            verify = verify.bind(offset)(michal);
            offset = entity == verify;
            michal = undefined;
            if(offset) { _fun00006_ip = 129; continue _fun00005 }
 104:
            verify = verify.stats;
            verify = verify.screenshare;
            offset = entity == verify;
            michal = undefined;
            if(offset) { _fun00006_ip = 129; continue _fun00005 }
 125:
            michal = verify[option];
 129:
            offset = entity != michal;
            verify = 0;
            if(!offset) { _fun00006_ip = 141; continue _fun00005 }
 138:
            verify = michal;
 141:
            yankee = _closure1_slot14;
            offset = yankee.find;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.connection;
                michal = entity.context;
                entity = _closure1_slot11;
                entity = entity.STREAM;
                entity = michal === entity;
                return entity;
            };
            michal = offset.bind(yankee)(michal);
            yankee = entity == michal;
            offset = undefined;
            if(yankee) { _fun00006_ip = 194; continue _fun00005 }
 169:
            michal = michal.stats;
            michal = michal.screenshare;
            yankee = entity == michal;
            offset = undefined;
            if(yankee) { _fun00006_ip = 194; continue _fun00005 }
 190:
            offset = michal[option];
 194:
            yankee = entity != offset;
            michal = 0;
            if(!yankee) { _fun00006_ip = 206; continue _fun00005 }
 203:
            michal = offset;
 206:
            michal = michal - verify;
            report[option] = michal;
            zuuluu = zuuluu + 1;
            michal = oscard.length;
            if(zuuluu < michal) { _fun00006_ip = 72; continue _fun00005 }
 229:
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
            if(!report) { _fun00006_ip = 331; continue _fun00005 }
 281:
            backup = yankee[oscard];
            report = _closure1_slot3;
            backup = report.bind(romeon)(backup, offset);
            report = backup[tangon];
            backup = backup[verify];
            if(!(backup > option)) { _fun00006_ip = 313; continue _fun00005 }
 307:
            option = backup;
            golfie = report;
 313:
            oscard = oscard + 1;
            report = yankee.length;
            zuuluu = option;
            michal = golfie;
            if(oscard < report) { _fun00006_ip = 281; continue _fun00005 }
 331:
            zuuluu = zuuluu > tangon;
            entity = null;
            if(!zuuluu) { _fun00006_ip = 343; continue _fun00005 }
 340:
            entity = michal;
 343:
            return entity;
 345:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: getCurrentEncoder
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = _closure1_slot14;
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
            if(!(entity != tangon)) { _fun00008_ip = 127; continue _fun00007 }
 37:
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
            if(tangon) { _fun00008_ip = 125; continue _fun00007 }
 79:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 9;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.parseEncoder;
            golfie = entity == oscard;
            if(golfie) { _fun00008_ip = 120; continue _fun00007 }
 114:
            zuuluu = oscard.encoderImplementationName;
 120:
            michal = tangon.bind(report)(zuuluu);
 125:
            return michal;
 127:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: getCurrentDecoder
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = null;
            if(!(entity != report)) { _fun00010_ip = 137; continue _fun00009 }
 18:
            golfie = _closure1_slot14;
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
            if(!(entity != tangon)) { _fun00010_ip = 135; continue _fun00009 }
 44:
            tangon = tangon.stats;
            tangon = tangon.rtp;
            tangon = tangon.inbound;
            report = tangon[report];
            if(!(entity != report)) { _fun00010_ip = 133; continue _fun00009 }
 70:
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
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.parseDecoder;
            oscard = entity == report;
            if(oscard) { _fun00010_ip = 126; continue _fun00009 }
 120:
            michal = report.decoderImplementationName;
 126:
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 133:
            return entity;
 135:
            return entity;
 137:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getCurrentCodec
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            verify = argBaz;
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = _closure1_slot14;
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
            if(oscard) { _fun00012_ip = 59; continue _fun00011 }
 47:
            tangon = tangon.stats;
            golfie = tangon.rtp;
 59:
            tangon = argBar;
            if(tangon) { _fun00012_ip = 134; continue _fun00011 }
 65:
            oscard = report != verify;
            tangon = null;
            if(!oscard) { _fun00012_ip = 179; continue _fun00011 }
 74:
            oscard = report == golfie;
            option = undefined;
            if(oscard) { _fun00012_ip = 117; continue _fun00011 }
 83:
            oscard = golfie.inbound;
            offset = oscard[verify];
            oscard = report == offset;
            option = undefined;
            if(oscard) { _fun00012_ip = 117; continue _fun00011 }
 102:
            verify = offset.find;
            oscard = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = 'video';
                entity = entity === michal;
                return entity;
            };
            option = verify.bind(offset)(oscard);
 117:
            verify = report != option;
            oscard = null;
            if(!verify) { _fun00012_ip = 129; continue _fun00011 }
 126:
            oscard = option;
 129:
            tangon = oscard;
            _fun00012_ip = 179; continue _fun00011;
 134:
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00012_ip = 164; continue _fun00011 }
 143:
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
 164:
            golfie = report != oscard;
            zuuluu = null;
            if(!golfie) { _fun00012_ip = 176; continue _fun00011 }
 173:
            zuuluu = oscard;
 176:
            tangon = zuuluu;
 179:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 9;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.parseCodecType;
            report = report == tangon;
            entity = undefined;
            if(report) { _fun00012_ip = 225; continue _fun00011 }
 214:
            tangon = tangon.codec;
            entity = tangon.name;
 225:
            entity = michal.bind(zuuluu)(entity);
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getSystemAnalyticsInfo;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MediaEngineContextTypes;
    var _closure1_slot11 = golfie;
    tangon = tangon.SIMULCAST_HQ_QUALITY;
    var _closure1_slot12 = tangon;
    tangon = false;
    var _closure1_slot13 = tangon;
    tangon = new Array(0);
    var _closure1_slot14 = tangon;
    tangon = new Array(0);
    var _closure1_slot15 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/AVErrorAnalytics.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: sendAVErrorAnalyticsEvent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            option = argFoo;
            offset = argBar;
            var _closure2_slot0 = option;
            var _closure2_slot1 = offset;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 12;
            tangon = golfie[entity];
            entity = undefined;
            report = oscard.bind(entity)(tangon);
            tangon = report.getErrorInfo;
            tangon = tangon.bind(report)(option);
            var _closure2_slot3 = tangon;
            report = 11;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            oscard = report.default;
            option = offset.channelId;
            golfie = null;
            if(!(golfie == option)) { _fun00014_ip = 94; continue _fun00013 }
 84:
            report = oscard.getVoiceChannelId;
            option = report.bind(oscard)();
 94:
            var _closure2_slot4 = option;
            oscard = _closure1_slot5;
            report = oscard.getChannel;
            report = report.bind(oscard)(option);
            var _closure2_slot5 = report;
            report = offset.streamKey;
            report = golfie != report;
            oscard = null;
            if(!report) { _fun00014_ip = 168; continue _fun00013 }
 131:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 13;
            report = verify[report];
            verify = option.bind(entity)(report);
            option = verify.decodeStreamKey;
            report = offset.streamKey;
            oscard = option.bind(verify)(report);
 168:
            var _closure2_slot6 = oscard;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 10;
            report = verify[report];
            report = option.bind(entity)(report);
            yankee = report.default;
            report = offset.streamKey;
            report = golfie != report;
            option = null;
            if(!report) { _fun00014_ip = 229; continue _fun00013 }
 212:
            verify = yankee.getRTCConnection;
            report = offset.streamKey;
            option = verify.bind(yankee)(report);
 229:
            var _closure2_slot7 = option;
            report = offset.streamKey;
            verify = option;
            if(!(golfie == report)) { _fun00014_ip = 260; continue _fun00013 }
 246:
            yankee = _closure1_slot7;
            report = yankee.getRTCConnection;
            verify = report.bind(yankee)();
 260:
            var _closure2_slot8 = verify;
            report = offset.streamKey;
            report = golfie != report;
            yankee = null;
            if(!report) { _fun00014_ip = 312; continue _fun00013 }
 279:
            romeon = golfie == option;
            report = undefined;
            if(romeon) { _fun00014_ip = 309; continue _fun00013 }
 288:
            option = option.analyticsContext;
            romeon = golfie == option;
            report = undefined;
            if(romeon) { _fun00014_ip = 309; continue _fun00013 }
 303:
            report = option.streamApplication;
 309:
            yankee = report;
 312:
            option = _closure1_slot4;
            report = option.getState;
            report = report.bind(option)();
            option = report.resolution;
            var _closure2_slot9 = option;
            report = report.fps;
            var _closure2_slot10 = report;
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            report = 14;
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
            if(!(golfie == tangon)) { _fun00014_ip = 447; continue _fun00013 }
 437:
            option = _closure1_slot11;
            tangon = option.DEFAULT;
 447:
            var _closure2_slot16 = tangon;
            if(!(golfie == oscard)) { _fun00014_ip = 462; continue _fun00013 }
 455:
            tangon = offset.userId;
            _fun00014_ip = 468; continue _fun00013;
 462:
            tangon = oscard.ownerId;
 468:
            var _closure2_slot17 = tangon;
            if(!(golfie == oscard)) { _fun00014_ip = 489; continue _fun00013 }
 476:
            tangon = 'receiver';
            if(!report) { _fun00014_ip = 487; continue _fun00013 }
 483:
            tangon = 'sender';
 487:
            _fun00014_ip = 511; continue _fun00013;
 489:
            yankee = golfie == verify;
            option = undefined;
            if(yankee) { _fun00014_ip = 508; continue _fun00013 }
 498:
            yankee = verify.getVoiceParticipantType;
            option = yankee.bind(verify)();
 508:
            tangon = option;
 511:
            var _closure2_slot18 = tangon;
            tangon = offset.streamKey;
            if(!(golfie != tangon)) { _fun00014_ip = 532; continue _fun00013 }
 525:
            if(!(golfie == oscard)) { _fun00014_ip = 660; continue _fun00013 }
 532:
            if(report) { _fun00014_ip = 579; continue _fun00013 }
 535:
            tangon = offset.userId;
            option = golfie != tangon;
            tangon = null;
            if(!option) { _fun00014_ip = 577; continue _fun00013 }
 549:
            yankee = golfie == verify;
            option = undefined;
            if(yankee) { _fun00014_ip = 574; continue _fun00013 }
 558:
            yankee = verify.getInboundStats;
            offset = offset.userId;
            option = yankee.bind(verify)(offset);
 574:
            tangon = option;
 577:
            _fun00014_ip = 658; continue _fun00013;
 579:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 15;
            option = yankee[option];
            romeon = offset.bind(entity)(option);
            yankee = romeon.maxBy;
            option = golfie == verify;
            offset = undefined;
            if(option) { _fun00014_ip = 624; continue _fun00013 }
 614:
            option = verify.getOutboundStats;
            offset = option.bind(verify)();
 624:
            if(!(golfie == offset)) { _fun00014_ip = 632; continue _fun00013 }
 628:
            offset = new Array(0);
 632:
            option = function(argFoo) {
                entity = argFoo;
                entity = entity.num_frames;
                return entity;
            };
            offset = yankee.bind(romeon)(offset, option);
            yankee = golfie != offset;
            option = null;
            if(!yankee) { _fun00014_ip = 655; continue _fun00013 }
 652:
            option = offset;
 655:
            tangon = option;
 658:
            _fun00014_ip = 736; continue _fun00013;
 660:
            option = golfie == verify;
            if(report) { _fun00014_ip = 691; continue _fun00013 }
 667:
            report = undefined;
            if(option) { _fun00014_ip = 689; continue _fun00013 }
 672:
            offset = verify.getInboundStats;
            oscard = oscard.ownerId;
            report = offset.bind(verify)(oscard);
 689:
            _fun00014_ip = 733; continue _fun00013;
 691:
            oscard = undefined;
            if(option) { _fun00014_ip = 730; continue _fun00013 }
 696:
            option = verify.getOutboundStats;
            verify = option.bind(verify)();
            golfie = golfie == verify;
            oscard = undefined;
            if(golfie) { _fun00014_ip = 730; continue _fun00013 }
 715:
            option = verify.find;
            golfie = function(argFoo) {
                entity = argFoo;
                michal = entity.quality;
                entity = _closure1_slot12;
                entity = michal === entity;
                return entity;
            };
            oscard = option.bind(verify)(golfie);
 730:
            report = oscard;
 733:
            tangon = report;
 736:
            var _closure2_slot2 = tangon;
            zuuluu = _closure1_slot9;
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
                    option = _closure1_slot7;
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
                    michal = _closure2_slot1;
                    golfie = michal.parentMediaSessionId;
                    option = tangon != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 323; continue _fun00015 }
 320:
                    michal = golfie;
 323:
                    report['parent_media_session_id'] = michal;
                    michal = _closure2_slot1;
                    golfie = michal.mediaContext;
                    option = tangon != golfie;
                    michal = null;
                    if(!option) { _fun00016_ip = 350; continue _fun00015 }
 347:
                    michal = golfie;
 350:
                    report['context'] = michal;
                    option = _closure1_slot7;
                    golfie = option.getRTCConnection;
                    verify = golfie.bind(option)();
                    golfie = tangon == verify;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 392; continue _fun00015 }
 380:
                    golfie = verify.getVoiceVersion;
                    option = golfie.bind(verify)();
 392:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 404; continue _fun00015 }
 401:
                    golfie = option;
 404:
                    report['voice_backend_version'] = golfie;
                    option = _closure1_slot7;
                    golfie = option.getRTCConnection;
                    verify = golfie.bind(option)();
                    golfie = tangon == verify;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 444; continue _fun00015 }
 432:
                    golfie = verify.getRtcWorkerVersion;
                    option = golfie.bind(verify)();
 444:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 456; continue _fun00015 }
 453:
                    golfie = option;
 456:
                    report['rtc_worker_backend_version'] = golfie;
                    verify = _closure1_slot8;
                    option = verify.getRegion;
                    offset = _closure1_slot7;
                    golfie = offset.getHostname;
                    golfie = golfie.bind(offset)();
                    option = option.bind(verify)(golfie);
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 502; continue _fun00015 }
 499:
                    golfie = option;
 502:
                    report['guild_region'] = golfie;
                    option = _closure1_slot7;
                    golfie = option.getHostname;
                    option = golfie.bind(option)();
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 533; continue _fun00015 }
 530:
                    golfie = option;
 533:
                    report['hostname'] = golfie;
                    golfie = _closure2_slot8;
                    golfie = tangon == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 567; continue _fun00015 }
 551:
                    verify = _closure2_slot8;
                    golfie = verify.getDurationSeconds;
                    option = golfie.bind(verify)();
 567:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 579; continue _fun00015 }
 576:
                    golfie = option;
 579:
                    report['duration'] = golfie;
                    golfie = _closure2_slot18;
                    option = tangon != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 600; continue _fun00015 }
 596:
                    golfie = _closure2_slot18;
 600:
                    report['participant_type'] = golfie;
                    golfie = _closure2_slot2;
                    option = tangon == golfie;
                    verify = undefined;
                    if(option) { _fun00016_ip = 624; continue _fun00015 }
 618:
                    verify = golfie.num_frames;
 624:
                    offset = tangon != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 636; continue _fun00015 }
 633:
                    option = verify;
 636:
                    report['num_frames'] = option;
                    option = _closure2_slot2;
                    offset = tangon == option;
                    verify = undefined;
                    if(offset) { _fun00016_ip = 660; continue _fun00015 }
 654:
                    verify = option.num_packets;
 660:
                    offset = tangon != verify;
                    option = 0;
                    if(!offset) { _fun00016_ip = 672; continue _fun00015 }
 669:
                    option = verify;
 672:
                    report['num_packets'] = option;
                    verify = _closure2_slot2;
                    offset = tangon == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 696; continue _fun00015 }
 690:
                    option = verify.num_bytes;
 696:
                    verify = tangon != option;
                    golfie = 0;
                    if(!verify) { _fun00016_ip = 708; continue _fun00015 }
 705:
                    golfie = option;
 708:
                    report['num_bytes'] = golfie;
                    golfie = _closure2_slot1;
                    golfie = golfie.videoCodec;
                    if(!(tangon == golfie)) { _fun00016_ip = 750; continue _fun00015 }
 727:
                    yankee = _closure1_slot22;
                    offset = _closure2_slot16;
                    verify = _closure2_slot15;
                    option = _closure2_slot17;
                    golfie = yankee.bind(entity)(offset, verify, option);
 750:
                    report['video_codec'] = golfie;
                    golfie = _closure2_slot1;
                    option = golfie.videoEncoder;
                    if(!(tangon == option)) { _fun00016_ip = 782; continue _fun00015 }
 769:
                    verify = _closure1_slot20;
                    golfie = _closure2_slot16;
                    option = verify.bind(entity)(golfie);
 782:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 794; continue _fun00015 }
 791:
                    golfie = option;
 794:
                    report['video_encoder'] = golfie;
                    golfie = _closure2_slot1;
                    option = golfie.videoDecoder;
                    if(!(tangon == option)) { _fun00016_ip = 833; continue _fun00015 }
 815:
                    offset = _closure1_slot21;
                    verify = _closure2_slot16;
                    golfie = _closure2_slot17;
                    option = offset.bind(entity)(verify, golfie);
 833:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 845; continue _fun00015 }
 842:
                    golfie = option;
 845:
                    report['video_decoder'] = golfie;
                    golfie = _closure2_slot6;
                    golfie = tangon == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 875; continue _fun00015 }
 865:
                    golfie = _closure2_slot6;
                    option = golfie.ownerId;
 875:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 887; continue _fun00015 }
 884:
                    golfie = option;
 887:
                    report['sender_user_id'] = golfie;
                    golfie = _closure2_slot7;
                    golfie = tangon == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 919; continue _fun00015 }
 905:
                    verify = _closure2_slot7;
                    golfie = verify.getRegion;
                    option = golfie.bind(verify)();
 919:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 931; continue _fun00015 }
 928:
                    golfie = option;
 931:
                    report['stream_region'] = golfie;
                    option = _closure2_slot15;
                    golfie = null;
                    if(!option) { _fun00016_ip = 995; continue _fun00015 }
 945:
                    option = _closure2_slot7;
                    verify = tangon == option;
                    option = undefined;
                    if(verify) { _fun00016_ip = 983; continue _fun00015 }
 958:
                    verify = _closure2_slot7;
                    verify = verify.analyticsContext;
                    offset = tangon == verify;
                    option = undefined;
                    if(offset) { _fun00016_ip = 983; continue _fun00015 }
 977:
                    option = verify.streamSourceType;
 983:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 995; continue _fun00015 }
 992:
                    golfie = option;
 995:
                    report['stream_source_type'] = golfie;
                    golfie = _closure2_slot7;
                    golfie = tangon == golfie;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1038; continue _fun00015 }
 1013:
                    golfie = _closure2_slot7;
                    golfie = golfie.analyticsContext;
                    verify = tangon == golfie;
                    option = undefined;
                    if(verify) { _fun00016_ip = 1038; continue _fun00015 }
 1032:
                    option = golfie.numViewers;
 1038:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1050; continue _fun00015 }
 1047:
                    golfie = option;
 1050:
                    report['num_stream_viewers'] = golfie;
                    option = _closure2_slot15;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1083; continue _fun00015 }
 1066:
                    option = _closure2_slot9;
                    option = tangon != option;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1083; continue _fun00015 }
 1079:
                    golfie = _closure2_slot9;
 1083:
                    report['video_input_resolution_height'] = golfie;
                    option = _closure2_slot15;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1116; continue _fun00015 }
 1099:
                    option = _closure2_slot10;
                    option = tangon != option;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1116; continue _fun00015 }
 1112:
                    golfie = _closure2_slot10;
 1116:
                    report['video_input_frame_rate'] = golfie;
                    golfie = _closure1_slot19;
                    golfie = golfie.bind(entity)();
                    report['screenshare_capture_method'] = golfie;
                    golfie = _closure2_slot11;
                    option = tangon != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1155; continue _fun00015 }
 1151:
                    golfie = _closure2_slot11;
 1155:
                    report['share_application_name'] = golfie;
                    golfie = _closure2_slot12;
                    option = tangon != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1177; continue _fun00015 }
 1173:
                    golfie = _closure2_slot12;
 1177:
                    report['share_application_id'] = golfie;
                    golfie = _closure2_slot13;
                    option = tangon != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1199; continue _fun00015 }
 1195:
                    golfie = _closure2_slot13;
 1199:
                    report['share_application_executable'] = golfie;
                    golfie = _closure2_slot14;
                    option = tangon != golfie;
                    golfie = null;
                    if(!option) { _fun00016_ip = 1221; continue _fun00015 }
 1217:
                    golfie = _closure2_slot14;
 1221:
                    report['share_application_distributor'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1241; continue _fun00015 }
 1235:
                    option = oscard.cpu_brand;
 1241:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1253; continue _fun00015 }
 1250:
                    golfie = option;
 1253:
                    report['cpu_brand'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1273; continue _fun00015 }
 1267:
                    option = oscard.cpu_vendor;
 1273:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1285; continue _fun00015 }
 1282:
                    golfie = option;
 1285:
                    report['cpu_vendor'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1305; continue _fun00015 }
 1299:
                    option = oscard.cpu_memory;
 1305:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1317; continue _fun00015 }
 1314:
                    golfie = option;
 1317:
                    report['cpu_memory'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1337; continue _fun00015 }
 1331:
                    option = oscard.gpu_brand;
 1337:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1349; continue _fun00015 }
 1346:
                    golfie = option;
 1349:
                    report['gpu_brand'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1369; continue _fun00015 }
 1363:
                    option = oscard.gpu_count;
 1369:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1381; continue _fun00015 }
 1378:
                    golfie = option;
 1381:
                    report['gpu_count'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1401; continue _fun00015 }
 1395:
                    option = oscard.gpu_memory;
 1401:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1413; continue _fun00015 }
 1410:
                    golfie = option;
 1413:
                    report['gpu_memory'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1433; continue _fun00015 }
 1427:
                    option = oscard.gpu_device_vendor_id;
 1433:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1445; continue _fun00015 }
 1442:
                    golfie = option;
 1445:
                    report['gpu_device_vendor_id'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1465; continue _fun00015 }
 1459:
                    option = oscard.gpu_device_device_id;
 1465:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1477; continue _fun00015 }
 1474:
                    golfie = option;
 1477:
                    report['gpu_device_device_id'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1497; continue _fun00015 }
 1491:
                    option = oscard.gpu_device_sub_sys_id;
 1497:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1509; continue _fun00015 }
 1506:
                    golfie = option;
 1509:
                    report['gpu_device_sub_sys_id'] = golfie;
                    golfie = tangon == oscard;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 1529; continue _fun00015 }
 1523:
                    option = oscard.gpu_device_revision;
 1529:
                    verify = tangon != option;
                    golfie = null;
                    if(!verify) { _fun00016_ip = 1541; continue _fun00015 }
 1538:
                    golfie = option;
 1541:
                    report['gpu_device_revision'] = golfie;
                    option = tangon == oscard;
                    golfie = undefined;
                    if(option) { _fun00016_ip = 1561; continue _fun00015 }
 1555:
                    golfie = oscard.gpu_driver_version;
 1561:
                    option = tangon != golfie;
                    oscard = null;
                    if(!option) { _fun00016_ip = 1573; continue _fun00015 }
 1570:
                    oscard = golfie;
 1573:
                    report['gpu_driver_version'] = oscard;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    option = 16;
                    oscard = oscard[option];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.getCurrentCPUUsagePercent;
                    golfie = oscard.bind(golfie)();
                    verify = tangon != golfie;
                    oscard = null;
                    if(!verify) { _fun00016_ip = 1620; continue _fun00015 }
 1617:
                    oscard = golfie;
 1620:
                    report['cpu_usage'] = oscard;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.getCurrentMemoryUsageKB;
                    golfie = oscard.bind(golfie)();
                    option = tangon != golfie;
                    oscard = null;
                    if(!option) { _fun00016_ip = 1666; continue _fun00015 }
 1663:
                    oscard = golfie;
 1666:
                    report['memory_usage'] = oscard;
                    golfie = _closure1_slot17;
                    oscard = _closure2_slot16;
                    oscard = golfie.bind(entity)(oscard);
                    report['outbound_bitrate_estimate'] = oscard;
                    golfie = _closure1_slot18;
                    oscard = _closure2_slot16;
                    oscard = golfie.bind(entity)(oscard);
                    report['inbound_bitrate_estimate'] = oscard;
                    golfie = _closure1_slot6;
                    oscard = golfie.getHardwareEncoding;
                    oscard = oscard.bind(golfie)();
                    report['hardware_enabled'] = oscard;
                    oscard = _closure2_slot1;
                    oscard = oscard.audioInputDeviceName;
                    if(!(tangon == oscard)) { _fun00016_ip = 1793; continue _fun00015 }
 1748:
                    verify = _closure1_slot6;
                    golfie = verify.getInputDevices;
                    option = golfie.bind(verify)();
                    golfie = verify.getInputDeviceId;
                    golfie = golfie.bind(verify)();
                    option = option[golfie];
                    verify = tangon == option;
                    golfie = undefined;
                    if(verify) { _fun00016_ip = 1790; continue _fun00015 }
 1785:
                    golfie = option.name;
 1790:
                    oscard = golfie;
 1793:
                    report['audio_input_device_name'] = oscard;
                    oscard = _closure2_slot1;
                    oscard = oscard.audioOutputDeviceName;
                    if(!(tangon == oscard)) { _fun00016_ip = 1859; continue _fun00015 }
 1814:
                    verify = _closure1_slot6;
                    golfie = verify.getOutputDevices;
                    option = golfie.bind(verify)();
                    golfie = verify.getOutputDeviceId;
                    golfie = golfie.bind(verify)();
                    option = option[golfie];
                    verify = tangon == option;
                    golfie = undefined;
                    if(verify) { _fun00016_ip = 1856; continue _fun00015 }
 1851:
                    golfie = option.name;
 1856:
                    oscard = golfie;
 1859:
                    report['audio_output_device_name'] = oscard;
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.videoDeviceName;
                    if(!(tangon == zuuluu)) { _fun00016_ip = 1925; continue _fun00015 }
 1880:
                    option = _closure1_slot6;
                    oscard = option.getVideoDevices;
                    golfie = oscard.bind(option)();
                    oscard = option.getVideoDeviceId;
                    oscard = oscard.bind(option)();
                    oscard = golfie[oscard];
                    golfie = tangon == oscard;
                    tangon = undefined;
                    if(golfie) { _fun00016_ip = 1922; continue _fun00015 }
 1917:
                    tangon = oscard.name;
 1922:
                    zuuluu = tangon;
 1925:
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
                    michal = _closure1_slot10;
                    michal = michal.AV_ERROR_REPORTED;
                    michal = zuuluu.bind(tangon)(michal, report);
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['sendAVErrorAnalyticsEvent'] = tangon;
    michal = function() { // Original name: initializeAVErrorAnalytics
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = _closure1_slot13;
            if(zuuluu) { _fun00018_ip = 124; continue _fun00017 }
 12:
            tangon = _closure1_slot6;
            zuuluu = tangon.getMediaEngine;
            report = zuuluu.bind(tangon)();
            var _closure2_slot0 = report;
            offset = report.on;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 18;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            tangon = tangon.MediaEngineEvent;
            verify = tangon.ConnectionStats;
            tangon = _closure1_slot16;
            tangon = offset.bind(report)(verify, tangon);
            tangon = report.on;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.MediaEngineEvent;
            zuuluu = zuuluu.Destroy;
            entity = function() {
                tangon = _closure2_slot0;
                zuuluu = tangon.off;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                michal = 18;
                report = report[michal];
                michal = undefined;
                michal = oscard.bind(michal)(report);
                michal = michal.MediaEngineEvent;
                michal = michal.ConnectionStats;
                entity = _closure1_slot16;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, entity);
            entity = true;
            _closure1_slot13 = entity;
 124:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['initializeAVErrorAnalytics'] = michal;
    return entity;
})();