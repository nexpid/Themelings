// app/modules/stickers/StickersUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    tango = function() { // Original name: getFavoriteStickerIds
        _fun56070: for(var _fun56070_ip = 0; ; ) switch(_fun56070_ip) {
 0:
            entity = _closure1_slot2;
            entity = entity.frecencyWithoutFetchingLatest;
            tango = entity.favoriteStickers;
            zulu = null;
            report = zulu == tango;
            entity = undefined;
            if(report) { _fun56070_ip = 36; continue _fun56070 }
 30:
            entity = tango.stickerIds;
 36:
            if(!(zulu == entity)) { _fun56070_ip = 44; continue _fun56070 }
 40:
            entity = _closure1_slot19;
 44:
            return entity;
        }
    };
    var _closure1_slot20 = tango;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 3;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 4;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    golf = oscar.DEFAULT_STICKER_DIMENSIONS;
    var _closure1_slot6 = golf;
    golf = oscar.STICKER_APPLICATION_ID;
    var _closure1_slot7 = golf;
    oscar = oscar.StickerAnimationSettings;
    var _closure1_slot8 = oscar;
    oscar = 5;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    romeo = oscar.Endpoints;
    var _closure1_slot9 = romeo;
    oscar = report.window;
    oscar = oscar.GLOBAL_ENV;
    kilo = oscar.API_ENDPOINT;
    var _closure1_slot10 = kilo;
    echo = oscar.MEDIA_PROXY_ENDPOINT;
    var _closure1_slot11 = echo;
    golf = oscar.PROJECT_ENV;
    var _closure1_slot12 = golf;
    result = oscar.ASSET_ENDPOINT;
    var _closure1_slot13 = result;
    oscar = oscar.CDN_HOST;
    var _closure1_slot14 = oscar;
    offset = report.Object;
    golf = offset.values;
    oscar = 6;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.StickerExtensions;
    offset = golf.bind(offset)(oscar);
    golf = report.decodeURIComponent;
    yankee = romeo.STICKER_ASSET;
    oscar = offset.join;
    output = '|';
    offset = oscar.bind(offset)(output);
    oscar = report.HermesInternal;
    oscar = oscar.concat;
    backup = '(';
    foxtrot = ')';
    offset = oscar.bind(backup)(offset, foxtrot);
    oscar = '[\\d]+';
    oscar = yankee.bind(romeo)(oscar, offset);
    romeo = golf.bind(entity)(oscar);
    yankee = report.RegExp;
    oscar = report.location;
    context = oscar.protocol;
    oscar = report.location;
    sequence = oscar.protocol;
    oscar = report.HermesInternal;
    golf = oscar.concat;
    control = ')(';
    papa = backup;
    record = result;
    config = output;
    vacuum = echo;
    source = romeo;
    update = foxtrot;
    context = papa[golf](context, record, config, sequence, vacuum, control, source, update, echo);
    golf = yankee.prototype;
    golf = Object.create(golf, {constructor: {value: yankee}});
    offset = 'ig';
    papa = golf;
    record = offset;
    oscar = new papa[yankee](context, record, config);
    oscar = oscar instanceof Object ? oscar : golf;
    var _closure1_slot15 = oscar;
    golf = report.RegExp;
    oscar = report.location;
    context = oscar.protocol;
    report = report.HermesInternal;
    oscar = report.concat;
    papa = '';
    record = kilo;
    config = backup;
    sequence = romeo;
    vacuum = foxtrot;
    context = papa[oscar](context, record, config, sequence, vacuum, control);
    oscar = golf.prototype;
    oscar = Object.create(oscar, {constructor: {value: golf}});
    papa = oscar;
    record = offset;
    report = new papa[golf](context, record, config);
    report = report instanceof Object ? report : oscar;
    var _closure1_slot16 = report;
    oscar = function(argFoo) { // Original name: getStickerPackPreviewSticker
        _fun56071: for(var _fun56071_ip = 0; ; ) switch(_fun56071_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = mike.cover_sticker_id;
            zulu = null;
            if(!(zulu != tango)) { _fun56071_ip = 46; continue _fun56071 }
 21:
            report = mike.stickers;
            tango = report.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = entity.cover_sticker_id;
                entity = mike === entity;
                return entity;
            };
            entity = tango.bind(report)(entity);
            if(!(zulu == entity)) { _fun56071_ip = 60; continue _fun56071 }
 46:
            zulu = mike.stickers;
            mike = 0;
            mike = zulu[mike];
            return mike;
 60:
            return entity;
        }
    };
    var _closure1_slot17 = oscar;
    report = function(argFoo) { // Original name: getStickerExtensionFromFormatType
        _fun56073: for(var _fun56073_ip = 0; ; ) switch(_fun56073_ip) {
 0:
            golf = argFoo;
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            report = 6;
            entity = entity[report];
            tango = undefined;
            entity = zulu.bind(tango)(entity);
            entity = entity.StickerFormat;
            entity = entity.PNG;
            if(!(entity !== golf)) { _fun56073_ip = 294; continue _fun56073 }
 47:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zulu.bind(tango)(entity);
            entity = entity.StickerFormat;
            entity = entity.APNG;
            if(!(entity !== golf)) { _fun56073_ip = 263; continue _fun56073 }
 83:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zulu.bind(tango)(entity);
            entity = entity.StickerFormat;
            entity = entity.LOTTIE;
            if(!(entity !== golf)) { _fun56073_ip = 232; continue _fun56073 }
 116:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zulu.bind(tango)(entity);
            entity = entity.StickerFormat;
            entity = entity.GIF;
            if(!(entity !== golf)) { _fun56073_ip = 201; continue _fun56073 }
 149:
            entity = global;
            oscar = entity.Error;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            entity = 'Unexpected format type: ';
            options = zulu.bind(entity)(golf);
            zulu = oscar.prototype;
            zulu = Object.create(zulu, {constructor: {value: oscar}});
            verify = zulu;
            entity = new verify[oscar](options, golf);
            entity = entity instanceof Object ? entity : zulu;
            throw entity;
 201:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zulu.bind(tango)(entity);
            entity = entity.StickerExtensions;
            entity = entity.GIF;
            return entity;
 232:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zulu.bind(tango)(entity);
            entity = entity.StickerExtensions;
            entity = entity.LOTTIE;
            return entity;
 263:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            entity = zulu.bind(tango)(entity);
            entity = entity.StickerExtensions;
            entity = entity.APNG;
            return entity;
 294:
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 7;
            entity = oscar[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.SUPPORTS_WEBP;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[report];
            mike = zulu.bind(tango)(mike);
            mike = mike.StickerExtensions;
            if(entity) { _fun56073_ip = 354; continue _fun56073 }
 346:
            entity = mike.PNG;
            _fun56073_ip = 360; continue _fun56073;
 354:
            entity = mike.WEBP;
 360:
            return entity;
        }
    };
    var _closure1_slot18 = report;
    golf = new Array(0);
    var _closure1_slot19 = golf;
    golf = 11;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/stickers/StickersUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['getStickerPackPreviewSticker'] = oscar;
    zulu['getStickerExtensionFromFormatType'] = report;
    report = function(argFoo) {
        _fun56074: for(var _fun56074_ip = 0; ; ) switch(_fun56074_ip) {
 0:
            tango = argFoo;
            entity = 'application/json';
            if(!(entity !== tango)) { _fun56074_ip = 224; continue _fun56074 }
 14:
            entity = 'image/apng';
            if(!(entity !== tango)) { _fun56074_ip = 185; continue _fun56074 }
 27:
            entity = 'image/png';
            if(!(entity !== tango)) { _fun56074_ip = 146; continue _fun56074 }
 37:
            entity = 'image/webp';
            if(!(entity !== tango)) { _fun56074_ip = 146; continue _fun56074 }
 45:
            entity = 'image/gif';
            if(!(entity !== tango)) { _fun56074_ip = 107; continue _fun56074 }
 55:
            entity = global;
            zulu = entity.Error;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Unexpected file type: ';
            report = mike.bind(entity)(tango);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = mike;
            entity = new oscar[zulu](report, tango);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
 107:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.StickerFormat;
            entity = entity.GIF;
            return entity;
 146:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.StickerFormat;
            entity = entity.PNG;
            return entity;
 185:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.StickerFormat;
            entity = entity.APNG;
            return entity;
 224:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.StickerFormat;
            entity = entity.LOTTIE;
            return entity;
        }
    };
    zulu['getStickerFormatTypeFromFileType'] = report;
    report = function(argFoo) {
        _fun56075: for(var _fun56075_ip = 0; ; ) switch(_fun56075_ip) {
 0:
            mike = argFoo;
            entity = null;
            zulu = entity == mike;
            if(zulu) { _fun56075_ip = 65; continue _fun56075 }
 12:
            oscar = mike.name;
            tango = _closure1_slot18;
            zulu = mike.format_type;
            mike = undefined;
            report = tango.bind(mike)(zulu);
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = '.';
            entity = tango.bind(zulu)(oscar, mike, report);
 65:
            return entity;
        }
    };
    zulu['getFilenameForSticker'] = report;
    report = function(argFoo) {
        _fun56076: for(var _fun56076_ip = 0; ; ) switch(_fun56076_ip) {
 0:
            tango = argFoo;
            entity = arguments[1];
            backup = undefined;
            if(!(entity === backup)) { _fun56076_ip = 14; continue _fun56076 }
 12:
            entity = {};
 14:
            mike = entity.isPreview;
            if(!(mike === backup)) { _fun56076_ip = 26; continue _fun56076 }
 24:
            mike = false;
 26:
            foxtrot = entity.size;
            if(!(foxtrot === backup)) { _fun56076_ip = 42; continue _fun56076 }
 35:
            foxtrot = _closure1_slot6;
 42:
            zulu = tango.format_type;
            entity = null;
            if(!(entity != zulu)) { _fun56076_ip = 573; continue _fun56076 }
 57:
            oscar = tango.format_type;
            golf = tango.format_type;
            options = _closure1_slot0;
            report = _closure1_slot1;
            verify = 6;
            report = report[verify];
            report = options.bind(backup)(report);
            report = report.StickerFormat;
            report = report.GIF;
            report = golf === report;
            if(!report) { _fun56076_ip = 114; continue _fun56076 }
 111:
            report = mike;
 114:
            if(!report) { _fun56076_ip = 146; continue _fun56076 }
 117:
            golf = _closure1_slot0;
            report = _closure1_slot1;
            report = report[verify];
            report = golf.bind(backup)(report);
            report = report.StickerFormat;
            oscar = report.PNG;
 146:
            report = _closure1_slot18;
            options = report.bind(backup)(oscar);
            golf = _closure1_slot9;
            oscar = golf.STICKER_ASSET;
            report = tango.id;
            oscar = oscar.bind(golf)(report, options);
            golf = _closure1_slot0;
            report = _closure1_slot1;
            report = report[verify];
            report = golf.bind(backup)(report);
            report = report.StickerExtensions;
            golf = report.WEBP;
            report = '';
            yankee = report;
            if(!(options === golf)) { _fun56076_ip = 222; continue _fun56076 }
 216:
            yankee = '&quality=lossless';
 222:
            options = _closure1_slot12;
            golf = 'development';
            if(!(golf === options)) { _fun56076_ip = 274; continue _fun56076 }
 236:
            golf = global;
            options = golf.location;
            offset = options.protocol;
            options = _closure1_slot10;
            golf = golf.HermesInternal;
            golf = golf.concat;
            golf = golf.bind(report)(offset, options, oscar);
            return golf;
 274:
            options = tango.format_type;
            offset = _closure1_slot0;
            golf = _closure1_slot1;
            golf = golf[verify];
            golf = offset.bind(backup)(golf);
            golf = golf.StickerFormat;
            golf = golf.LOTTIE;
            if(!(options !== golf)) { _fun56076_ip = 535; continue _fun56076 }
 316:
            golf = tango.format_type;
            options = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[verify];
            tango = options.bind(backup)(tango);
            tango = tango.StickerFormat;
            tango = tango.APNG;
            offset = report;
            if(!(golf === tango)) { _fun56076_ip = 405; continue _fun56076 }
 358:
            offset = report;
            if(!mike) { _fun56076_ip = 405; continue _fun56076 }
 364:
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 8;
            mike = golf[mike];
            tango = tango.bind(backup)(mike);
            mike = tango.isAndroid;
            mike = mike.bind(tango)();
            offset = report;
            if(mike) { _fun56076_ip = 405; continue _fun56076 }
 399:
            offset = '&passthrough=false';
 405:
            mike = global;
            sizing = mike.Math;
            verify = sizing.min;
            romeo = _closure1_slot0;
            kilo = _closure1_slot1;
            golf = 9;
            tango = kilo[golf];
            options = romeo.bind(backup)(tango);
            tango = options.getDevicePixelRatio;
            options = tango.bind(options)();
            tango = 2;
            tango = verify.bind(sizing)(tango, options);
            options = mike.location;
            verify = options.protocol;
            control = _closure1_slot11;
            golf = kilo[golf];
            romeo = romeo.bind(backup)(golf);
            golf = romeo.getBestMediaProxySize;
            tango = foxtrot * tango;
            echo = golf.bind(romeo)(tango);
            mike = mike.HermesInternal;
            tango = mike.concat;
            update = '?size=';
            sequence = report;
            vacuum = verify;
            source = oscar;
            result = offset;
            output = yankee;
            mike = sequence[tango](vacuum, control, source, update, echo, result, output, sizing);
            return mike;
 535:
            mike = global;
            tango = mike.location;
            tango = tango.protocol;
            zulu = _closure1_slot13;
            mike = mike.HermesInternal;
            mike = mike.concat;
            mike = mike.bind(report)(tango, zulu, oscar);
            return mike;
 573:
            return entity;
        }
    };
    zulu['getStickerAssetUrl'] = report;
    report = function(argFoo, argBar) {
        _fun56077: for(var _fun56077_ip = 0; ; ) switch(_fun56077_ip) {
 0:
            oscar = argBar;
            entity = argFoo;
            sizing = entity.banner_asset_id;
            entity = null;
            if(!(entity != sizing)) { _fun56077_ip = 277; continue _fun56077 }
 23:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 7;
            mike = report[mike];
            golf = undefined;
            mike = tango.bind(golf)(mike);
            mike = mike.SUPPORTS_WEBP;
            kilo = 'png';
            if(!mike) { _fun56077_ip = 69; continue _fun56077 }
 63:
            kilo = 'webp';
 69:
            mike = _closure1_slot14;
            if(!(entity == mike)) { _fun56077_ip = 140; continue _fun56077 }
 77:
            mike = global;
            tango = mike.location;
            verify = tango.protocol;
            options = _closure1_slot10;
            offset = _closure1_slot9;
            report = offset.STORE_ASSET;
            tango = _closure1_slot7;
            report = report.bind(offset)(tango, sizing, kilo);
            mike = mike.HermesInternal;
            tango = mike.concat;
            mike = '';
            tango = tango.bind(mike)(verify, options, report);
            _fun56077_ip = 209; continue _fun56077;
 140:
            mike = global;
            report = mike.location;
            config = report.protocol;
            vacuum = _closure1_slot14;
            source = _closure1_slot7;
            mike = mike.HermesInternal;
            yankee = mike.concat;
            record = '';
            sequence = '//';
            control = '/app-assets/';
            update = '/store/';
            result = '.';
            echo = sizing;
            output = kilo;
            tango = record[yankee](config, sequence, vacuum, control, source, update, echo, result, output, sizing);
 209:
            mike = tango;
            if(!(entity != oscar)) { _fun56077_ip = 275; continue _fun56077 }
 216:
            report = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 9;
            zulu = options[zulu];
            report = report.bind(golf)(zulu);
            zulu = report.getBestMediaProxySize;
            oscar = zulu.bind(report)(oscar);
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            zulu = '?size=';
            zulu = report.bind(zulu)(oscar);
            mike = tango + zulu;
 275:
            return mike;
 277:
            return entity;
        }
    };
    zulu['getStickerPackBannerAssetUrl'] = report;
    report = function(argFoo) {
        _fun56078: for(var _fun56078_ip = 0; ; ) switch(_fun56078_ip) {
 0:
            zulu = argFoo;
            mike = zulu.match;
            report = _closure1_slot12;
            entity = 'development';
            if(!(entity === report)) { _fun56078_ip = 32; continue _fun56078 }
 26:
            entity = _closure1_slot16;
            _fun56078_ip = 36; continue _fun56078;
 32:
            entity = _closure1_slot15;
 36:
            mike = mike.bind(zulu)(entity);
            entity = null;
            entity = entity != mike;
            return entity;
        }
    };
    zulu['isStickerAssetUrl'] = report;
    report = function(argFoo) {
        entity = argFoo;
        zulu = entity.stickers;
        mike = zulu.some;
        entity = function(argFoo) {
            _fun56080: for(var _fun56080_ip = 0; ; ) switch(_fun56080_ip) {
 0:
                entity = argFoo;
                zulu = entity.format_type;
                tango = _closure1_slot0;
                entity = _closure1_slot1;
                oscar = 6;
                entity = entity[oscar];
                report = undefined;
                entity = tango.bind(report)(entity);
                entity = entity.StickerFormat;
                entity = entity.APNG;
                entity = zulu === entity;
                if(entity) { _fun56080_ip = 86; continue _fun56080 }
 53:
                golf = _closure1_slot0;
                tango = _closure1_slot1;
                tango = tango[oscar];
                tango = golf.bind(report)(tango);
                tango = tango.StickerFormat;
                tango = tango.LOTTIE;
                entity = zulu === tango;
 86:
                if(entity) { _fun56080_ip = 122; continue _fun56080 }
 89:
                tango = _closure1_slot0;
                mike = _closure1_slot1;
                mike = mike[oscar];
                mike = tango.bind(report)(mike);
                mike = mike.StickerFormat;
                mike = mike.GIF;
                entity = zulu === mike;
 122:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isStickerPackAnimated'] = report;
    report = function(argFoo) {
        tango = argFoo;
        entity = {};
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        zulu = 6;
        report = report[zulu];
        zulu = undefined;
        report = oscar.bind(zulu)(report);
        report = report.StickerCategoryTypes;
        report = report.PACK;
        entity['type'] = report;
        report = tango.id;
        entity['id'] = report;
        report = tango.name;
        entity['name'] = report;
        report = tango.stickers;
        entity['stickers'] = report;
        mike = _closure1_slot17;
        mike = mike.bind(zulu)(tango);
        entity['previewSticker'] = mike;
        return entity;
    };
    zulu['createStickerPackCategory'] = report;
    report = function(argFoo, argBar) {
        _fun56082: for(var _fun56082_ip = 0; ; ) switch(_fun56082_ip) {
 0:
            zulu = argFoo;
            entity = argBar;
            tango = _closure1_slot8;
            tango = tango.ANIMATE_ON_INTERACTION;
            if(!(zulu !== tango)) { _fun56082_ip = 37; continue _fun56082 }
 23:
            mike = _closure1_slot8;
            mike = mike.NEVER_ANIMATE;
            entity = zulu !== mike;
 37:
            return entity;
        }
    };
    zulu['shouldAnimateSticker'] = report;
    report = function(argFoo, argBar, argBaz, argCorge) {
        _fun56083: for(var _fun56083_ip = 0; ; ) switch(_fun56083_ip) {
 0:
            report = argFoo;
            mike = argBar;
            options = argBaz;
            golf = argCorge;
            tango = _closure1_slot4;
            zulu = tango.getUploadCount;
            zulu = zulu.bind(tango)(options, golf);
            tango = 0;
            if(!(!(zulu > tango))) { _fun56083_ip = 285; continue _fun56083 }
 40:
            oscar = _closure1_slot5;
            zulu = oscar.getStickerPreview;
            zulu = zulu.bind(oscar)(options, golf);
            oscar = null;
            if(!(oscar != zulu)) { _fun56083_ip = 76; continue _fun56083 }
 64:
            zulu = zulu.length;
            if(!(!(zulu > tango))) { _fun56083_ip = 281; continue _fun56083 }
 76:
            golf = _closure1_slot0;
            zulu = _closure1_slot1;
            oscar = 6;
            zulu = zulu[oscar];
            tango = undefined;
            zulu = golf.bind(tango)(zulu);
            zulu = zulu.StickerSelectLocation;
            zulu = zulu.STICKER_PICKER;
            if(!(zulu !== report)) { _fun56083_ip = 261; continue _fun56083 }
 117:
            golf = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[oscar];
            zulu = golf.bind(tango)(zulu);
            zulu = zulu.StickerSelectLocation;
            zulu = zulu.AUTOCOMPLETE;
            if(!(zulu !== report)) { _fun56083_ip = 216; continue _fun56083 }
 150:
            golf = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[oscar];
            zulu = golf.bind(tango)(zulu);
            zulu = zulu.StickerSelectLocation;
            zulu = zulu.EXPRESSION_SUGGESTIONS;
            if(!(zulu !== report)) { _fun56083_ip = 216; continue _fun56083 }
 183:
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[oscar];
            zulu = report.bind(tango)(zulu);
            zulu = zulu.StickerSelectLocation;
            zulu = zulu.BUILT_IN_INTEGRATION;
            zulu = false;
            return zulu;
 216:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 10;
            entity = report[entity];
            zulu = zulu.bind(tango)(entity);
            entity = zulu.getQueriesFromUserInput;
            entity = entity.bind(zulu)(mike);
            zulu = entity.length;
            entity = 1;
            entity = zulu > entity;
            return entity;
 261:
            entity = mike.trim;
            mike = entity.bind(mike)();
            entity = '';
            entity = entity !== mike;
            return entity;
 281:
            entity = true;
            return entity;
 285:
            entity = true;
            return entity;
        }
    };
    zulu['shouldAttachSticker'] = report;
    report = function(argFoo) {
        entity = argFoo;
        mike = entity.type;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 6;
        zulu = zulu[entity];
        entity = undefined;
        entity = tango.bind(entity)(zulu);
        entity = entity.MetaStickerType;
        entity = entity.GUILD;
        entity = mike === entity;
        return entity;
    };
    zulu['isGuildSticker'] = report;
    report = function(argFoo) {
        entity = argFoo;
        mike = entity.type;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 6;
        zulu = zulu[entity];
        entity = undefined;
        entity = tango.bind(entity)(zulu);
        entity = entity.MetaStickerType;
        entity = entity.STANDARD;
        entity = mike === entity;
        return entity;
    };
    zulu['isStandardSticker'] = report;
    report = function(argFoo) {
        _fun56086: for(var _fun56086_ip = 0; ; ) switch(_fun56086_ip) {
 0:
            mike = argFoo;
            entity = mike.stickerItems;
            entity = entity.length;
            zulu = 0;
            if(!(!(entity > zulu))) { _fun56086_ip = 49; continue _fun56086 }
 20:
            entity = mike.stickers;
            entity = entity.length;
            if(!(!(entity > zulu))) { _fun56086_ip = 41; continue _fun56086 }
 35:
            entity = new Array(0);
            _fun56086_ip = 47; continue _fun56086;
 41:
            entity = mike.stickers;
 47:
            _fun56086_ip = 55; continue _fun56086;
 49:
            entity = mike.stickerItems;
 55:
            return entity;
        }
    };
    zulu['getMessageStickers'] = report;
    report = function(argFoo) {
        _fun56087: for(var _fun56087_ip = 0; ; ) switch(_fun56087_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike !== entity)) { _fun56087_ip = 39; continue _fun56087 }
 9:
            zulu = entity.guild_id;
            mike = _closure1_slot3;
            entity = mike.getGuild;
            mike = entity.bind(mike)(zulu);
            entity = undefined;
            entity = entity !== mike;
            return entity;
 39:
            entity = false;
            return entity;
        }
    };
    zulu['isAvailableGuildSticker'] = report;
    zulu['getFavoriteStickerIds'] = tango;
    mike = function(argFoo) { // Original name: isFavoriteSticker
        mike = _closure1_slot20;
        entity = undefined;
        zulu = mike.bind(entity)();
        mike = zulu.includes;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isFavoriteSticker'] = mike;
    return entity;
})();