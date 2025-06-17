// app/modules/stickers/StickersUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    tangon = function() { // Original name: getFavoriteStickerIds
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot2;
            entity = entity.frecencyWithoutFetchingLatest;
            tangon = entity.favoriteStickers;
            zuuluu = null;
            report = zuuluu == tangon;
            entity = undefined;
            if(report) { _fun00002_ip = 36; continue _fun00001 }
 30:
            entity = tangon.stickerIds;
 36:
            if(!(zuuluu == entity)) { _fun00002_ip = 44; continue _fun00001 }
 40:
            entity = _closure1_slot19;
 44:
            return entity;
        }
    };
    var _closure1_slot20 = tangon;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 3;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 4;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    golfie = oscard.DEFAULT_STICKER_DIMENSIONS;
    var _closure1_slot6 = golfie;
    golfie = oscard.STICKER_APPLICATION_ID;
    var _closure1_slot7 = golfie;
    oscard = oscard.StickerAnimationSettings;
    var _closure1_slot8 = oscard;
    oscard = 5;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    romeon = oscard.Endpoints;
    var _closure1_slot9 = romeon;
    oscard = report.window;
    oscard = oscard.GLOBAL_ENV;
    kiloes = oscard.API_ENDPOINT;
    var _closure1_slot10 = kiloes;
    echoed = oscard.MEDIA_PROXY_ENDPOINT;
    var _closure1_slot11 = echoed;
    golfie = oscard.PROJECT_ENV;
    var _closure1_slot12 = golfie;
    result = oscard.ASSET_ENDPOINT;
    var _closure1_slot13 = result;
    oscard = oscard.CDN_HOST;
    var _closure1_slot14 = oscard;
    offset = report.Object;
    golfie = offset.values;
    oscard = 6;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.StickerExtensions;
    offset = golfie.bind(offset)(oscard);
    golfie = report.decodeURIComponent;
    yankee = romeon.STICKER_ASSET;
    oscard = offset.join;
    output = '|';
    offset = oscard.bind(offset)(output);
    oscard = report.HermesInternal;
    oscard = oscard.concat;
    backup = '(';
    foxtra = ')';
    offset = oscard.bind(backup)(offset, foxtra);
    oscard = '[\\d]+';
    oscard = yankee.bind(romeon)(oscard, offset);
    romeon = golfie.bind(entity)(oscard);
    yankee = report.RegExp;
    oscard = report.location;
    cntext = oscard.protocol;
    oscard = report.location;
    sequen = oscard.protocol;
    oscard = report.HermesInternal;
    golfie = oscard.concat;
    ctrled = ')(';
    papara = backup;
    record = result;
    config = output;
    vacuum = echoed;
    source = romeon;
    update = foxtra;
    cntext = papara[golfie](cntext, record, config, sequen, vacuum, ctrled, source, update, echoed);
    golfie = yankee.prototype;
    golfie = Object.create(golfie, {constructor: {value: yankee}});
    offset = 'ig';
    papara = golfie;
    record = offset;
    oscard = new papara[yankee](cntext, record, config);
    oscard = oscard instanceof Object ? oscard : golfie;
    var _closure1_slot15 = oscard;
    golfie = report.RegExp;
    oscard = report.location;
    cntext = oscard.protocol;
    report = report.HermesInternal;
    oscard = report.concat;
    papara = '';
    record = kiloes;
    config = backup;
    sequen = romeon;
    vacuum = foxtra;
    cntext = papara[oscard](cntext, record, config, sequen, vacuum, ctrled);
    oscard = golfie.prototype;
    oscard = Object.create(oscard, {constructor: {value: golfie}});
    papara = oscard;
    record = offset;
    report = new papara[golfie](cntext, record, config);
    report = report instanceof Object ? report : oscard;
    var _closure1_slot16 = report;
    oscard = function(argFoo) { // Original name: getStickerPackPreviewSticker
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = michal.cover_sticker_id;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00004_ip = 46; continue _fun00003 }
 21:
            report = michal.stickers;
            tangon = report.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = entity.cover_sticker_id;
                entity = michal === entity;
                return entity;
            };
            entity = tangon.bind(report)(entity);
            if(!(zuuluu == entity)) { _fun00004_ip = 60; continue _fun00003 }
 46:
            zuuluu = michal.stickers;
            michal = 0;
            michal = zuuluu[michal];
            return michal;
 60:
            return entity;
        }
    };
    var _closure1_slot17 = oscard;
    report = function(argFoo) { // Original name: getStickerExtensionFromFormatType
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            report = 6;
            entity = entity[report];
            tangon = undefined;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.StickerFormat;
            entity = entity.PNG;
            if(!(entity !== golfie)) { _fun00006_ip = 294; continue _fun00005 }
 47:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.StickerFormat;
            entity = entity.APNG;
            if(!(entity !== golfie)) { _fun00006_ip = 263; continue _fun00005 }
 83:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.StickerFormat;
            entity = entity.LOTTIE;
            if(!(entity !== golfie)) { _fun00006_ip = 232; continue _fun00005 }
 116:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.StickerFormat;
            entity = entity.GIF;
            if(!(entity !== golfie)) { _fun00006_ip = 201; continue _fun00005 }
 149:
            entity = global;
            oscard = entity.Error;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            entity = 'Unexpected format type: ';
            option = zuuluu.bind(entity)(golfie);
            zuuluu = oscard.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: oscard}});
            verify = zuuluu;
            entity = new verify[oscard](option, golfie);
            entity = entity instanceof Object ? entity : zuuluu;
            throw entity;
 201:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.StickerExtensions;
            entity = entity.GIF;
            return entity;
 232:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.StickerExtensions;
            entity = entity.LOTTIE;
            return entity;
 263:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.StickerExtensions;
            entity = entity.APNG;
            return entity;
 294:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 7;
            entity = oscard[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.SUPPORTS_WEBP;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[report];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.StickerExtensions;
            if(entity) { _fun00006_ip = 354; continue _fun00005 }
 346:
            entity = michal.PNG;
            _fun00006_ip = 360; continue _fun00005;
 354:
            entity = michal.WEBP;
 360:
            return entity;
        }
    };
    var _closure1_slot18 = report;
    golfie = new Array(0);
    var _closure1_slot19 = golfie;
    golfie = 11;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/stickers/StickersUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['getStickerPackPreviewSticker'] = oscard;
    zuuluu['getStickerExtensionFromFormatType'] = report;
    report = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = 'application/json';
            if(!(entity !== tangon)) { _fun00008_ip = 226; continue _fun00007 }
 14:
            entity = 'image/apng';
            if(!(entity !== tangon)) { _fun00008_ip = 187; continue _fun00007 }
 27:
            entity = 'image/png';
            if(!(entity !== tangon)) { _fun00008_ip = 148; continue _fun00007 }
 37:
            entity = 'image/webp';
            if(!(entity !== tangon)) { _fun00008_ip = 148; continue _fun00007 }
 47:
            entity = 'image/gif';
            if(!(entity !== tangon)) { _fun00008_ip = 109; continue _fun00007 }
 57:
            entity = global;
            zuuluu = entity.Error;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = 'Unexpected file type: ';
            report = michal.bind(entity)(tangon);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = michal;
            entity = new oscard[zuuluu](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
 109:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.StickerFormat;
            entity = entity.GIF;
            return entity;
 148:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.StickerFormat;
            entity = entity.PNG;
            return entity;
 187:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.StickerFormat;
            entity = entity.APNG;
            return entity;
 226:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.StickerFormat;
            entity = entity.LOTTIE;
            return entity;
        }
    };
    zuuluu['getStickerFormatTypeFromFileType'] = report;
    report = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            entity = null;
            zuuluu = entity == michal;
            if(zuuluu) { _fun00010_ip = 65; continue _fun00009 }
 12:
            oscard = michal.name;
            tangon = _closure1_slot18;
            zuuluu = michal.format_type;
            michal = undefined;
            report = tangon.bind(michal)(zuuluu);
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '.';
            entity = tangon.bind(zuuluu)(oscard, michal, report);
 65:
            return entity;
        }
    };
    zuuluu['getFilenameForSticker'] = report;
    report = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            entity = arguments[1];
            backup = undefined;
            if(!(entity === backup)) { _fun00012_ip = 14; continue _fun00011 }
 12:
            entity = {};
 14:
            michal = entity.isPreview;
            if(!(michal === backup)) { _fun00012_ip = 26; continue _fun00011 }
 24:
            michal = false;
 26:
            foxtra = entity.size;
            if(!(foxtra === backup)) { _fun00012_ip = 42; continue _fun00011 }
 35:
            foxtra = _closure1_slot6;
 42:
            zuuluu = tangon.format_type;
            entity = null;
            if(!(entity != zuuluu)) { _fun00012_ip = 573; continue _fun00011 }
 57:
            oscard = tangon.format_type;
            golfie = tangon.format_type;
            option = _closure1_slot0;
            report = _closure1_slot1;
            verify = 6;
            report = report[verify];
            report = option.bind(backup)(report);
            report = report.StickerFormat;
            report = report.GIF;
            report = golfie === report;
            if(!report) { _fun00012_ip = 114; continue _fun00011 }
 111:
            report = michal;
 114:
            if(!report) { _fun00012_ip = 146; continue _fun00011 }
 117:
            golfie = _closure1_slot0;
            report = _closure1_slot1;
            report = report[verify];
            report = golfie.bind(backup)(report);
            report = report.StickerFormat;
            oscard = report.PNG;
 146:
            report = _closure1_slot18;
            option = report.bind(backup)(oscard);
            golfie = _closure1_slot9;
            oscard = golfie.STICKER_ASSET;
            report = tangon.id;
            oscard = oscard.bind(golfie)(report, option);
            golfie = _closure1_slot0;
            report = _closure1_slot1;
            report = report[verify];
            report = golfie.bind(backup)(report);
            report = report.StickerExtensions;
            golfie = report.WEBP;
            report = '';
            yankee = report;
            if(!(option === golfie)) { _fun00012_ip = 222; continue _fun00011 }
 216:
            yankee = '&quality=lossless';
 222:
            option = _closure1_slot12;
            golfie = 'development';
            if(!(golfie === option)) { _fun00012_ip = 274; continue _fun00011 }
 236:
            golfie = global;
            option = golfie.location;
            offset = option.protocol;
            option = _closure1_slot10;
            golfie = golfie.HermesInternal;
            golfie = golfie.concat;
            golfie = golfie.bind(report)(offset, option, oscard);
            return golfie;
 274:
            option = tangon.format_type;
            offset = _closure1_slot0;
            golfie = _closure1_slot1;
            golfie = golfie[verify];
            golfie = offset.bind(backup)(golfie);
            golfie = golfie.StickerFormat;
            golfie = golfie.LOTTIE;
            if(!(option !== golfie)) { _fun00012_ip = 535; continue _fun00011 }
 316:
            golfie = tangon.format_type;
            option = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[verify];
            tangon = option.bind(backup)(tangon);
            tangon = tangon.StickerFormat;
            tangon = tangon.APNG;
            offset = report;
            if(!(golfie === tangon)) { _fun00012_ip = 405; continue _fun00011 }
 358:
            offset = report;
            if(!michal) { _fun00012_ip = 405; continue _fun00011 }
 364:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 8;
            michal = golfie[michal];
            tangon = tangon.bind(backup)(michal);
            michal = tangon.isAndroid;
            michal = michal.bind(tangon)();
            offset = report;
            if(michal) { _fun00012_ip = 405; continue _fun00011 }
 399:
            offset = '&passthrough=false';
 405:
            michal = global;
            sizing = michal.Math;
            verify = sizing.min;
            romeon = _closure1_slot0;
            kiloes = _closure1_slot1;
            golfie = 9;
            tangon = kiloes[golfie];
            option = romeon.bind(backup)(tangon);
            tangon = option.getDevicePixelRatio;
            option = tangon.bind(option)();
            tangon = 2;
            tangon = verify.bind(sizing)(tangon, option);
            option = michal.location;
            verify = option.protocol;
            ctrled = _closure1_slot11;
            golfie = kiloes[golfie];
            romeon = romeon.bind(backup)(golfie);
            golfie = romeon.getBestMediaProxySize;
            tangon = foxtra * tangon;
            echoed = golfie.bind(romeon)(tangon);
            michal = michal.HermesInternal;
            tangon = michal.concat;
            update = '?size=';
            sequen = report;
            vacuum = verify;
            source = oscard;
            result = offset;
            output = yankee;
            michal = sequen[tangon](vacuum, ctrled, source, update, echoed, result, output, sizing);
            return michal;
 535:
            michal = global;
            tangon = michal.location;
            tangon = tangon.protocol;
            zuuluu = _closure1_slot13;
            michal = michal.HermesInternal;
            michal = michal.concat;
            michal = michal.bind(report)(tangon, zuuluu, oscard);
            return michal;
 573:
            return entity;
        }
    };
    zuuluu['getStickerAssetUrl'] = report;
    report = function(argFoo, argBar) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argBar;
            entity = argFoo;
            backup = entity.banner_asset_id;
            entity = null;
            if(!(entity != backup)) { _fun00014_ip = 261; continue _fun00013 }
 23:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 7;
            michal = report[michal];
            golfie = undefined;
            michal = tangon.bind(golfie)(michal);
            michal = michal.SUPPORTS_WEBP;
            foxtra = 'png';
            if(!michal) { _fun00014_ip = 69; continue _fun00013 }
 63:
            foxtra = 'webp';
 69:
            michal = _closure1_slot14;
            if(!(entity == michal)) { _fun00014_ip = 140; continue _fun00013 }
 77:
            michal = global;
            tangon = michal.location;
            verify = tangon.protocol;
            option = _closure1_slot10;
            offset = _closure1_slot9;
            report = offset.STORE_ASSET;
            tangon = _closure1_slot7;
            report = report.bind(offset)(tangon, backup, foxtra);
            michal = michal.HermesInternal;
            tangon = michal.concat;
            michal = '';
            tangon = tangon.bind(michal)(verify, option, report);
            _fun00014_ip = 193; continue _fun00013;
 140:
            source = _closure1_slot14;
            echoed = _closure1_slot7;
            michal = global;
            michal = michal.HermesInternal;
            offset = michal.concat;
            ctrled = 'https://';
            update = '/app-assets/';
            result = '/store/';
            sizing = '.';
            output = backup;
            kiloes = foxtra;
            tangon = ctrled[offset](source, update, echoed, result, output, sizing, kiloes, backup);
 193:
            michal = tangon;
            if(!(entity != oscard)) { _fun00014_ip = 259; continue _fun00013 }
 200:
            report = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 9;
            zuuluu = option[zuuluu];
            report = report.bind(golfie)(zuuluu);
            zuuluu = report.getBestMediaProxySize;
            oscard = zuuluu.bind(report)(oscard);
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            report = zuuluu.concat;
            zuuluu = '?size=';
            zuuluu = report.bind(zuuluu)(oscard);
            michal = tangon + zuuluu;
 259:
            return michal;
 261:
            return entity;
        }
    };
    zuuluu['getStickerPackBannerAssetUrl'] = report;
    report = function(argFoo) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.match;
            report = _closure1_slot12;
            entity = 'development';
            if(!(entity === report)) { _fun00016_ip = 32; continue _fun00015 }
 26:
            entity = _closure1_slot16;
            _fun00016_ip = 36; continue _fun00015;
 32:
            entity = _closure1_slot15;
 36:
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            entity = entity != michal;
            return entity;
        }
    };
    zuuluu['isStickerAssetUrl'] = report;
    report = function(argFoo) {
        entity = argFoo;
        zuuluu = entity.stickers;
        michal = zuuluu.some;
        entity = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.format_type;
                tangon = _closure1_slot0;
                entity = _closure1_slot1;
                oscard = 6;
                entity = entity[oscard];
                report = undefined;
                entity = tangon.bind(report)(entity);
                entity = entity.StickerFormat;
                entity = entity.APNG;
                entity = zuuluu === entity;
                if(entity) { _fun00018_ip = 86; continue _fun00017 }
 53:
                golfie = _closure1_slot0;
                tangon = _closure1_slot1;
                tangon = tangon[oscard];
                tangon = golfie.bind(report)(tangon);
                tangon = tangon.StickerFormat;
                tangon = tangon.LOTTIE;
                entity = zuuluu === tangon;
 86:
                if(entity) { _fun00018_ip = 122; continue _fun00017 }
 89:
                tangon = _closure1_slot0;
                michal = _closure1_slot1;
                michal = michal[oscard];
                michal = tangon.bind(report)(michal);
                michal = michal.StickerFormat;
                michal = michal.GIF;
                entity = zuuluu === michal;
 122:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isStickerPackAnimated'] = report;
    report = function(argFoo) {
        tangon = argFoo;
        entity = {};
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        zuuluu = 6;
        report = report[zuuluu];
        zuuluu = undefined;
        report = oscard.bind(zuuluu)(report);
        report = report.StickerCategoryTypes;
        report = report.PACK;
        entity['type'] = report;
        report = tangon.id;
        entity['id'] = report;
        report = tangon.name;
        entity['name'] = report;
        report = tangon.stickers;
        entity['stickers'] = report;
        michal = _closure1_slot17;
        michal = michal.bind(zuuluu)(tangon);
        entity['previewSticker'] = michal;
        return entity;
    };
    zuuluu['createStickerPackCategory'] = report;
    report = function(argFoo, argBar) {
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argFoo;
            entity = argBar;
            tangon = _closure1_slot8;
            tangon = tangon.ANIMATE_ON_INTERACTION;
            if(!(zuuluu !== tangon)) { _fun00020_ip = 37; continue _fun00019 }
 23:
            michal = _closure1_slot8;
            michal = michal.NEVER_ANIMATE;
            entity = zuuluu !== michal;
 37:
            return entity;
        }
    };
    zuuluu['shouldAnimateSticker'] = report;
    report = function(argFoo, argBar, argBaz, argCor) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            report = argFoo;
            michal = argBar;
            option = argBaz;
            golfie = argCor;
            tangon = _closure1_slot4;
            zuuluu = tangon.getUploadCount;
            zuuluu = zuuluu.bind(tangon)(option, golfie);
            tangon = 0;
            if(!(!(zuuluu > tangon))) { _fun00022_ip = 249; continue _fun00021 }
 40:
            oscard = _closure1_slot5;
            zuuluu = oscard.getStickerPreview;
            zuuluu = zuuluu.bind(oscard)(option, golfie);
            oscard = null;
            if(!(oscard != zuuluu)) { _fun00022_ip = 76; continue _fun00021 }
 64:
            zuuluu = zuuluu.length;
            if(!(!(zuuluu > tangon))) { _fun00022_ip = 245; continue _fun00021 }
 76:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            oscard = 6;
            zuuluu = zuuluu[oscard];
            tangon = undefined;
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.StickerSelectLocation;
            zuuluu = zuuluu.STICKER_PICKER;
            if(!(zuuluu !== report)) { _fun00022_ip = 225; continue _fun00021 }
 114:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.StickerSelectLocation;
            zuuluu = zuuluu.AUTOCOMPLETE;
            if(!(zuuluu !== report)) { _fun00022_ip = 180; continue _fun00021 }
 147:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.StickerSelectLocation;
            zuuluu = zuuluu.BUILT_IN_INTEGRATION;
            zuuluu = false;
            return zuuluu;
 180:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 10;
            entity = report[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.getQueriesFromUserInput;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = entity.length;
            entity = 1;
            entity = zuuluu > entity;
            return entity;
 225:
            entity = michal.trim;
            michal = entity.bind(michal)();
            entity = '';
            entity = entity !== michal;
            return entity;
 245:
            entity = true;
            return entity;
 249:
            entity = true;
            return entity;
        }
    };
    zuuluu['shouldAttachSticker'] = report;
    report = function(argFoo) {
        entity = argFoo;
        michal = entity.type;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 6;
        zuuluu = zuuluu[entity];
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu);
        entity = entity.MetaStickerType;
        entity = entity.GUILD;
        entity = michal === entity;
        return entity;
    };
    zuuluu['isGuildSticker'] = report;
    report = function(argFoo) {
        entity = argFoo;
        michal = entity.type;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 6;
        zuuluu = zuuluu[entity];
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu);
        entity = entity.MetaStickerType;
        entity = entity.STANDARD;
        entity = michal === entity;
        return entity;
    };
    zuuluu['isStandardSticker'] = report;
    report = function(argFoo) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            michal = argFoo;
            entity = michal.stickerItems;
            entity = entity.length;
            zuuluu = 0;
            if(!(!(entity > zuuluu))) { _fun00024_ip = 49; continue _fun00023 }
 20:
            entity = michal.stickers;
            entity = entity.length;
            if(!(!(entity > zuuluu))) { _fun00024_ip = 41; continue _fun00023 }
 35:
            entity = new Array(0);
            _fun00024_ip = 47; continue _fun00023;
 41:
            entity = michal.stickers;
 47:
            _fun00024_ip = 55; continue _fun00023;
 49:
            entity = michal.stickerItems;
 55:
            return entity;
        }
    };
    zuuluu['getMessageStickers'] = report;
    report = function(argFoo) {
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal !== entity)) { _fun00026_ip = 39; continue _fun00025 }
 9:
            zuuluu = entity.guild_id;
            michal = _closure1_slot3;
            entity = michal.getGuild;
            michal = entity.bind(michal)(zuuluu);
            entity = undefined;
            entity = entity !== michal;
            return entity;
 39:
            entity = false;
            return entity;
        }
    };
    zuuluu['isAvailableGuildSticker'] = report;
    zuuluu['getFavoriteStickerIds'] = tangon;
    michal = function(argFoo) { // Original name: isFavoriteSticker
        michal = _closure1_slot20;
        entity = undefined;
        zuuluu = michal.bind(entity)();
        michal = zuuluu.includes;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isFavoriteSticker'] = michal;
    return entity;
})();