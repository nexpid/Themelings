// app/modules/media_uploads/native/showUploadFileSizeError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot5 = golfie;
    tangon = tangon.AnalyticsSections;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FileUploadErrorTypes;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.PremiumTypes;
    var _closure1_slot8 = golfie;
    golfie = tangon.PremiumUserLimits;
    var _closure1_slot9 = golfie;
    tangon = tangon.PremiumUpsellTypes;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 'Nitro Upsell';
    tangon['NITRO_UPSELL'] = golfie;
    golfie = 'Over Max Size';
    tangon['OVER_MAX_SIZE'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_uploads/native/showUploadFileSizeError.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: showUploadFileSizeError
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            kiloes = entity.file;
            offset = entity.maxSize;
            romeon = entity.analyticsLocations;
            tangon = entity.errorReason;
            entity = undefined;
            var _closure2_slot0 = entity;
            var _closure2_slot1 = entity;
            oscard = _closure1_slot4;
            report = oscard.getCurrentUser;
            option = report.bind(oscard)();
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 5;
            report = golfie[report];
            golfie = oscard.bind(entity)(report);
            oscard = golfie.isPremiumExactly;
            report = _closure1_slot8;
            report = report.TIER_2;
            backup = oscard.bind(golfie)(option, report);
            report = kiloes.items;
            golfie = null;
            if(!(golfie == report)) { _fun00002_ip = 115; continue _fun00001 }
 109:
            sizing = new Array(0);
            _fun00002_ip = 152; continue _fun00001;
 115:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 6;
            report = option[report];
            option = oscard.bind(entity)(report);
            oscard = option.getAttachmentMimeTypes;
            report = kiloes.items;
            sizing = oscard.bind(option)(report);
 152:
            report = new Array(0);
            _closure2_slot0 = report;
            foxtra = new Array(0);
            _closure2_slot1 = foxtra;
            oscard = kiloes.items;
            if(!(golfie != oscard)) { _fun00002_ip = 199; continue _fun00001 }
 178:
            option = kiloes.items;
            oscard = option.forEach;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    report = _closure2_slot0;
                    tangon = report.push;
                    oscard = entity.postCompressionSize;
                    zuuluu = null;
                    golfie = zuuluu != oscard;
                    zuuluu = 0;
                    if(!golfie) { _fun00004_ip = 35; continue _fun00003 }
 32:
                    zuuluu = oscard;
 35:
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.push;
                    entity = entity.preCompressionSize;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = oscard.bind(option)(zuuluu);
 199:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            verify = 7;
            zuuluu = zuuluu[verify];
            yankee = oscard.bind(entity)(zuuluu);
            option = yankee.trackWithMetadata;
            zuuluu = _closure1_slot5;
            oscard = zuuluu.FILE_SIZE_LIMIT_EXCEEDED;
            zuuluu = {};
            zuuluu['user_individual_file_size_limit'] = offset;
            output = kiloes.attachmentsCount;
            zuuluu['num_attachments'] = output;
            zuuluu['pre_compression_file_sizes'] = foxtra;
            output = kiloes.totalPreCompressionSize;
            zuuluu['pre_compression_aggregate_file_size'] = output;
            zuuluu['post_compression_file_sizes'] = report;
            output = kiloes.totalPostCompressionSize;
            zuuluu['post_compression_aggregate_file_size'] = output;
            zuuluu['attachment_mimetypes'] = sizing;
            sizing = tangon;
            if(!(golfie == sizing)) { _fun00002_ip = 319; continue _fun00001 }
 309:
            output = _closure1_slot7;
            sizing = output.ERROR_SOURCE_UNKNOWN;
 319:
            zuuluu['error_type'] = sizing;
            zuuluu = option.bind(yankee)(oscard, zuuluu);
            option = 0;
            if(backup) { _fun00002_ip = 427; continue _fun00001 }
 335:
            oscard = kiloes.items;
            zuuluu = offset;
            if(!(golfie != oscard)) { _fun00002_ip = 424; continue _fun00001 }
 348:
            oscard = _closure1_slot7;
            oscard = oscard.ERROR_SOURCE_UNKNOWN;
            zuuluu = offset;
            if(!(tangon !== oscard)) { _fun00002_ip = 424; continue _fun00001 }
 365:
            oscard = global;
            golfie = oscard.Math;
            oscard = golfie.max;
            sizing = _closure1_slot7;
            sizing = sizing.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
            if(!(tangon === sizing)) { _fun00002_ip = 395; continue _fun00001 }
 392:
            foxtra = report;
 395:
            report = new Array(0);
            source = report;
            update = foxtra;
            echoed = 0;
            foxtra = arraySpread(source, update, echoed);
            source = oscard;
            update = report;
            echoed = golfie;
            zuuluu = apply(source, update, echoed);
 424:
            option = zuuluu;
 427:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.POSTCOMPRESSION_SUM_TOO_LARGE;
            report = tangon === zuuluu;
            if(report) { _fun00002_ip = 458; continue _fun00001 }
 444:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.PRECOMPRESSION_SUM_TOO_LARGE;
            report = tangon === zuuluu;
 458:
            zuuluu = backup;
            if(zuuluu) { _fun00002_ip = 492; continue _fun00001 }
 464:
            golfie = _closure1_slot9;
            oscard = _closure1_slot8;
            oscard = oscard.TIER_2;
            oscard = golfie[oscard];
            oscard = oscard.fileSize;
            zuuluu = option > oscard;
 492:
            if(zuuluu) { _fun00002_ip = 525; continue _fun00001 }
 495:
            golfie = _closure1_slot0;
            foxtra = _closure1_slot2;
            oscard = 8;
            oscard = foxtra[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.MAX_TOTAL_ATTACHMENT_SIZE;
            zuuluu = option > oscard;
 525:
            if(zuuluu) { _fun00002_ip = 531; continue _fun00001 }
 528:
            zuuluu = report;
 531:
            if(zuuluu) { _fun00002_ip = 548; continue _fun00001 }
 534:
            oscard = _closure1_slot7;
            oscard = oscard.ERROR_SOURCE_UNKNOWN;
            zuuluu = tangon === oscard;
 548:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[verify];
            foxtra = golfie.bind(entity)(oscard);
            verify = foxtra.trackWithMetadata;
            oscard = _closure1_slot5;
            golfie = oscard.FILE_UPLOAD_ALERT_VIEWED;
            oscard = {};
            output = _closure1_slot11;
            if(zuuluu) { _fun00002_ip = 598; continue _fun00001 }
 590:
            sizing = output.NITRO_UPSELL;
            _fun00002_ip = 604; continue _fun00001;
 598:
            sizing = output.OVER_MAX_SIZE;
 604:
            oscard['alert_type'] = sizing;
            sizing = kiloes.attachmentsCount;
            oscard['num_attachments'] = sizing;
            sizing = kiloes.currentSize;
            oscard['total_attachment_size'] = sizing;
            sizing = kiloes.hasImage;
            oscard['has_image'] = sizing;
            kiloes = kiloes.hasVideo;
            oscard['has_video'] = kiloes;
            oscard['is_premium'] = backup;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            backup = 9;
            backup = sizing[backup];
            kiloes = kiloes.bind(entity)(backup);
            backup = kiloes.getImageCompressionQuality;
            backup = backup.bind(kiloes)();
            oscard['image_compression_quality'] = backup;
            backup = _closure1_slot3;
            backup = backup.dataSavingMode;
            oscard['image_compression_setting_enabled'] = backup;
            oscard = verify.bind(foxtra)(golfie, oscard);
            if(zuuluu) { _fun00002_ip = 901; continue _fun00001 }
 732:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            zuuluu = 10;
            zuuluu = backup[zuuluu];
            golfie = foxtra.bind(entity)(zuuluu);
            oscard = golfie.handleShowUpsellAlert;
            zuuluu = {};
            kiloes = _closure1_slot0;
            verify = 11;
            verify = backup[verify];
            verify = kiloes.bind(entity)(verify);
            verify = verify.UpsellTypes;
            verify = verify.UPLOAD;
            zuuluu['initialUpsellKey'] = verify;
            verify = {};
            kiloes = _closure1_slot6;
            kiloes = kiloes.FILE_UPLOAD_POPOUT;
            verify['section'] = kiloes;
            zuuluu['analyticsLocation'] = verify;
            verify = new Array(1);
            source = verify;
            update = romeon;
            echoed = 0;
            romeon = arraySpread(source, update, echoed);
            yankee = 12;
            yankee = backup[yankee];
            yankee = foxtra.bind(entity)(yankee);
            yankee = yankee.FILE_UPLOAD_POPOUT;
            verify[romeon] = yankee;
            yankee = 1;
            yankee = romeon + yankee;
            zuuluu['analyticsLocations'] = verify;
            verify = {};
            yankee = _closure1_slot10;
            yankee = yankee.UPLOAD_ERROR_UPSELL;
            verify['type'] = yankee;
            zuuluu['analyticsProperties'] = verify;
            zuuluu['largestFileSize'] = option;
            zuuluu = oscard.bind(golfie)(zuuluu);
            _fun00002_ip = 1328; continue _fun00001;
 901:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.ERROR_SOURCE_UNKNOWN;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 1186; continue _fun00001 }
 918:
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 13;
            oscard = zuuluu[tangon];
            oscard = option.bind(entity)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            zuuluu = zuuluu[tangon];
            zuuluu = option.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu./tGlcn;
            zuuluu = oscard.bind(golfie)(zuuluu);
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            oscard = backup[tangon];
            oscard = foxtra.bind(entity)(oscard);
            option = oscard.intl;
            golfie = option.formatToPlainString;
            tangon = backup[tangon];
            tangon = foxtra.bind(entity)(tangon);
            tangon = tangon.t;
            if(report) { _fun00002_ip = 1090; continue _fun00001 }
 1017:
            oscard = tangon.fxEKdX;
            report = {};
            verify = 14;
            yankee = backup[verify];
            romeon = foxtra.bind(entity)(yankee);
            yankee = romeon.formatSize;
            verify = backup[verify];
            verify = foxtra.bind(entity)(verify);
            verify = verify.BYTE_IN_KB;
            offset = offset / verify;
            verify = {};
            kiloes = true;
            verify['useKibibytes'] = kiloes;
            verify = yankee.bind(romeon)(offset, verify);
            report['maxSize'] = verify;
            report = golfie.bind(option)(oscard, report);
            _fun00002_ip = 1181; continue _fun00001;
 1090:
            oscard = tangon.tUOJdH;
            tangon = {};
            verify = 14;
            offset = backup[verify];
            romeon = foxtra.bind(entity)(offset);
            yankee = romeon.formatSize;
            offset = 8;
            offset = backup[offset];
            offset = foxtra.bind(entity)(offset);
            offset = offset.MAX_TOTAL_ATTACHMENT_SIZE;
            verify = backup[verify];
            verify = foxtra.bind(entity)(verify);
            verify = verify.BYTE_IN_KB;
            offset = offset / verify;
            verify = {};
            foxtra = true;
            verify['useKibibytes'] = foxtra;
            verify = yankee.bind(romeon)(offset, verify);
            tangon['maxSize'] = verify;
            report = golfie.bind(option)(oscard, tangon);
 1181:
            oscard = zuuluu;
            _fun00002_ip = 1287; continue _fun00001;
 1186:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 13;
            zuuluu = offset[tangon];
            zuuluu = verify.bind(entity)(zuuluu);
            option = zuuluu.intl;
            golfie = option.string;
            zuuluu = offset[tangon];
            zuuluu = verify.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.B3vFdX;
            oscard = golfie.bind(option)(zuuluu);
            golfie = offset[tangon];
            golfie = verify.bind(entity)(golfie);
            option = golfie.intl;
            golfie = option.string;
            tangon = offset[tangon];
            tangon = verify.bind(entity)(tangon);
            tangon = tangon.t;
            tangon = tangon.zMEjJi;
            report = golfie.bind(option)(tangon);
 1287:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 15;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.show;
            michal = {};
            michal['title'] = oscard;
            michal['body'] = report;
            michal = zuuluu.bind(tangon)(michal);
 1328:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();