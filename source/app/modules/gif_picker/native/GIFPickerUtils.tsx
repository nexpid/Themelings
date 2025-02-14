// app/modules/gif_picker/native/GIFPickerUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GIFPickerResultTypes;
    var _closure1_slot4 = tango;
    tango = /(https?:\\/\\/)(?!media(?:\d+)?\.)(?:[^.]+\.)*giphy\.com/;
    var _closure1_slot5 = tango;
    tango = /(tenor\.com)/;
    var _closure1_slot6 = tango;
    tango = /-(?:.(?!-))+$/;
    var _closure1_slot7 = tango;
    tango = function(argFoo, argBar) { // Original name: transformFavoriteGifUrl
        _fun84835: for(var _fun84835_ip = 0; ; ) switch(_fun84835_ip) {
 0:
            entity = argFoo;
            golf = argBar;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 2;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.toURLSafe;
            mike = mike.bind(zulu)(entity);
            zulu = null;
            if(!(zulu != mike)) { _fun84835_ip = 119; continue _fun84835 }
 48:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            verify = 3;
            oscar = oscar[verify];
            options = options.bind(tango)(oscar);
            oscar = options.isExternalProxiedAttachmentUrl;
            oscar = oscar.bind(options)(mike);
            if(oscar) { _fun84835_ip = 269; continue _fun84835 }
 85:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[verify];
            options = options.bind(tango)(oscar);
            oscar = options.isAttachmentUrl;
            oscar = oscar.bind(options)(mike);
            if(oscar) { _fun84835_ip = 269; continue _fun84835 }
 119:
            options = _closure1_slot5;
            oscar = options.test;
            oscar = oscar.bind(options)(golf);
            if(oscar) { _fun84835_ip = 184; continue _fun84835 }
 136:
            options = _closure1_slot6;
            oscar = options.test;
            oscar = oscar.bind(options)(golf);
            if(!oscar) { _fun84835_ip = 182; continue _fun84835 }
 153:
            oscar = global;
            oscar = oscar.HermesInternal;
            verify = oscar.concat;
            options = '';
            oscar = '.gif';
            entity = verify.bind(options)(golf, oscar);
 182:
            _fun84835_ip = 267; continue _fun84835;
 184:
            oscar = _closure1_slot7;
            report = oscar.exec;
            golf = report.bind(oscar)(golf);
            report = zulu == golf;
            oscar = undefined;
            if(report) { _fun84835_ip = 236; continue _fun84835 }
 208:
            report = 0;
            report = golf[report];
            zulu = zulu == report;
            oscar = undefined;
            if(zulu) { _fun84835_ip = 236; continue _fun84835 }
 223:
            tango = report.slice;
            zulu = 1;
            oscar = tango.bind(report)(zulu);
 236:
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = 'https://media.giphy.com/media/';
            zulu = '/giphy.gif';
            entity = report.bind(tango)(oscar, zulu);
 267:
            return entity;
 269:
            zulu = mike.pathname;
            entity = zulu.toLowerCase;
            tango = entity.bind(zulu)();
            zulu = tango.endsWith;
            entity = '.webp';
            zulu = zulu.bind(tango)(entity);
            tango = mike.pathname;
            entity = tango.toLowerCase;
            report = entity.bind(tango)();
            tango = report.endsWith;
            entity = '.avif';
            entity = tango.bind(report)(entity);
            if(zulu) { _fun84835_ip = 341; continue _fun84835 }
 338:
            zulu = entity;
 341:
            if(!zulu) { _fun84835_ip = 399; continue _fun84835 }
 344:
            oscar = mike.searchParams;
            report = oscar.set;
            tango = 'animated';
            zulu = 'true';
            zulu = report.bind(oscar)(tango, zulu);
            if(!entity) { _fun84835_ip = 399; continue _fun84835 }
 372:
            report = mike.searchParams;
            tango = report.set;
            zulu = 'format';
            entity = 'webp';
            entity = tango.bind(report)(zulu, entity);
 399:
            entity = mike.toString;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gif_picker/native/GIFPickerUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = 56;
    zulu['GIF_HEADER_HEIGHT'] = tango;
    mike = function() { // Original name: useFavoriteGIFsMobile
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useSortedFavoriteGIFs;
        zulu = _closure1_slot8;
        zulu = tango.bind(report)(zulu);
        var _closure2_slot0 = zulu;
        report = _closure1_slot3;
        tango = report.useMemo;
        mike = new Array(1);
        mike[0] = zulu;
        entity = function() {
            _fun84837: for(var _fun84837_ip = 0; ; ) switch(_fun84837_ip) {
 0:
                entity = _closure2_slot0;
                entity = entity.length;
                tango = 0;
                mike = entity > tango;
                verify = undefined;
                entity = undefined;
                if(!mike) { _fun84837_ip = 138; continue _fun84837 }
 25:
                mike = {};
                oscar = _closure1_slot4;
                oscar = oscar.FAVORITES;
                mike['type'] = oscar;
                options = _closure1_slot0;
                offset = _closure1_slot2;
                report = 5;
                oscar = offset[report];
                oscar = options.bind(verify)(oscar);
                golf = oscar.intl;
                oscar = golf.string;
                report = offset[report];
                report = options.bind(verify)(report);
                report = report.t;
                report = report.k8fFjo;
                report = oscar.bind(golf)(report);
                mike['name'] = report;
                zulu = _closure2_slot0;
                report = zulu[tango];
                report = report.src;
                mike['src'] = report;
                zulu = zulu[tango];
                zulu = zulu.format;
                mike['format'] = zulu;
                entity = mike;
 138:
                return entity;
            }
        };
        mike = tango.bind(report)(entity, mike);
        entity = {};
        entity['favorites'] = zulu;
        entity['favoritesCategory'] = mike;
        return entity;
    };
    zulu['useFavoriteGIFsMobile'] = mike;
    mike = 180;
    zulu['GIF_PICKER_ITEM_ESIMTATED_HEIGHT'] = mike;
    mike = 8;
    zulu['GIF_PICKER_GUTTER_SPACING'] = mike;
    mike = 20;
    zulu['DEFAULT_CATEGORY_ROWS'] = mike;
    return entity;
})();