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
        _fun84851: for(var _fun84851_ip = 0; ; ) switch(_fun84851_ip) {
 0:
            zulu = argFoo;
            options = argBar;
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 2;
            entity = tango[entity];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = mike.toURLSafe;
            mike = entity.bind(mike)(zulu);
            tango = null;
            if(!(tango != mike)) { _fun84851_ip = 194; continue _fun84851 }
 51:
            golf = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 3;
            entity = entity[verify];
            golf = golf.bind(report)(entity);
            entity = golf.isExternalProxiedAttachmentUrl;
            entity = entity.bind(golf)(mike);
            if(entity) { _fun84851_ip = 116; continue _fun84851 }
 85:
            golf = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            golf = golf.bind(report)(entity);
            entity = golf.isAttachmentUrl;
            entity = entity.bind(golf)(mike);
            if(!entity) { _fun84851_ip = 194; continue _fun84851 }
 116:
            golf = mike.pathname;
            entity = golf.toLowerCase;
            verify = entity.bind(golf)();
            golf = verify.endsWith;
            entity = '.webp';
            golf = golf.bind(verify)(entity);
            verify = mike.pathname;
            entity = verify.toLowerCase;
            offset = entity.bind(verify)();
            verify = offset.endsWith;
            entity = '.avif';
            entity = verify.bind(offset)(entity);
            if(golf) { _fun84851_ip = 344; continue _fun84851 }
 188:
            if(entity) { _fun84851_ip = 344; continue _fun84851 }
 194:
            verify = _closure1_slot5;
            golf = verify.test;
            golf = golf.bind(verify)(options);
            if(golf) { _fun84851_ip = 259; continue _fun84851 }
 211:
            verify = _closure1_slot6;
            golf = verify.test;
            golf = golf.bind(verify)(options);
            if(!golf) { _fun84851_ip = 257; continue _fun84851 }
 228:
            golf = global;
            golf = golf.HermesInternal;
            offset = golf.concat;
            verify = '';
            golf = '.gif';
            zulu = offset.bind(verify)(options, golf);
 257:
            _fun84851_ip = 342; continue _fun84851;
 259:
            golf = _closure1_slot7;
            oscar = golf.exec;
            options = oscar.bind(golf)(options);
            oscar = tango == options;
            golf = undefined;
            if(oscar) { _fun84851_ip = 311; continue _fun84851 }
 283:
            oscar = 0;
            oscar = options[oscar];
            tango = tango == oscar;
            golf = undefined;
            if(tango) { _fun84851_ip = 311; continue _fun84851 }
 298:
            report = oscar.slice;
            tango = 1;
            golf = report.bind(oscar)(tango);
 311:
            tango = global;
            tango = tango.HermesInternal;
            oscar = tango.concat;
            report = 'https://media.giphy.com/media/';
            tango = '/giphy.gif';
            zulu = oscar.bind(report)(golf, tango);
 342:
            return zulu;
 344:
            oscar = mike.searchParams;
            report = oscar.set;
            tango = 'animated';
            zulu = 'true';
            zulu = report.bind(oscar)(tango, zulu);
            if(!entity) { _fun84851_ip = 399; continue _fun84851 }
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
            _fun84853: for(var _fun84853_ip = 0; ; ) switch(_fun84853_ip) {
 0:
                entity = _closure2_slot0;
                entity = entity.length;
                tango = 0;
                mike = entity > tango;
                verify = undefined;
                entity = undefined;
                if(!mike) { _fun84853_ip = 138; continue _fun84853 }
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