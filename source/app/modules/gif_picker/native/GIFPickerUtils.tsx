// app/modules/gif_picker/native/GIFPickerUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GIFPickerResultTypes;
    var _closure1_slot4 = tangon;
    tangon = /(https?:\\/\\/)(?!media(?:\d+)?\.)(?:[^.]+\.)*giphy\.com/;
    var _closure1_slot5 = tangon;
    tangon = /(tenor\.com)/;
    var _closure1_slot6 = tangon;
    tangon = /-(?:.(?!-))+$/;
    var _closure1_slot7 = tangon;
    tangon = function(argFoo, argBar) { // Original name: transformFavoriteGifUrl
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            option = argBar;
            michal = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 2;
            entity = tangon[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.toURLSafe;
            michal = entity.bind(michal)(zuuluu);
            tangon = null;
            if(!(tangon != michal)) { _fun00002_ip = 194; continue _fun00001 }
 51:
            golfie = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 3;
            entity = entity[verify];
            golfie = golfie.bind(report)(entity);
            entity = golfie.isExternalProxiedAttachmentUrl;
            entity = entity.bind(golfie)(michal);
            if(entity) { _fun00002_ip = 116; continue _fun00001 }
 85:
            golfie = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            golfie = golfie.bind(report)(entity);
            entity = golfie.isAttachmentUrl;
            entity = entity.bind(golfie)(michal);
            if(!entity) { _fun00002_ip = 194; continue _fun00001 }
 116:
            golfie = michal.pathname;
            entity = golfie.toLowerCase;
            verify = entity.bind(golfie)();
            golfie = verify.endsWith;
            entity = '.webp';
            golfie = golfie.bind(verify)(entity);
            verify = michal.pathname;
            entity = verify.toLowerCase;
            offset = entity.bind(verify)();
            verify = offset.endsWith;
            entity = '.avif';
            entity = verify.bind(offset)(entity);
            if(golfie) { _fun00002_ip = 344; continue _fun00001 }
 188:
            if(entity) { _fun00002_ip = 344; continue _fun00001 }
 194:
            verify = _closure1_slot5;
            golfie = verify.test;
            golfie = golfie.bind(verify)(option);
            if(golfie) { _fun00002_ip = 259; continue _fun00001 }
 211:
            verify = _closure1_slot6;
            golfie = verify.test;
            golfie = golfie.bind(verify)(option);
            if(!golfie) { _fun00002_ip = 257; continue _fun00001 }
 228:
            golfie = global;
            golfie = golfie.HermesInternal;
            offset = golfie.concat;
            verify = '';
            golfie = '.gif';
            zuuluu = offset.bind(verify)(option, golfie);
 257:
            _fun00002_ip = 342; continue _fun00001;
 259:
            golfie = _closure1_slot7;
            oscard = golfie.exec;
            option = oscard.bind(golfie)(option);
            oscard = tangon == option;
            golfie = undefined;
            if(oscard) { _fun00002_ip = 311; continue _fun00001 }
 283:
            oscard = 0;
            oscard = option[oscard];
            tangon = tangon == oscard;
            golfie = undefined;
            if(tangon) { _fun00002_ip = 311; continue _fun00001 }
 298:
            report = oscard.slice;
            tangon = 1;
            golfie = report.bind(oscard)(tangon);
 311:
            tangon = global;
            tangon = tangon.HermesInternal;
            oscard = tangon.concat;
            report = 'https://media.giphy.com/media/';
            tangon = '/giphy.gif';
            zuuluu = oscard.bind(report)(golfie, tangon);
 342:
            return zuuluu;
 344:
            oscard = michal.searchParams;
            report = oscard.set;
            tangon = 'animated';
            zuuluu = 'true';
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            if(!entity) { _fun00002_ip = 399; continue _fun00001 }
 372:
            report = michal.searchParams;
            tangon = report.set;
            zuuluu = 'format';
            entity = 'webp';
            entity = tangon.bind(report)(zuuluu, entity);
 399:
            entity = michal.toString;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gif_picker/native/GIFPickerUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 56;
    zuuluu['GIF_HEADER_HEIGHT'] = tangon;
    michal = function() { // Original name: useFavoriteGIFsMobile
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useSortedFavoriteGIFs;
        zuuluu = _closure1_slot8;
        zuuluu = tangon.bind(report)(zuuluu);
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot3;
        tangon = report.useMemo;
        michal = new Array(1);
        michal[0] = zuuluu;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot0;
                entity = entity.length;
                tangon = 0;
                michal = entity > tangon;
                verify = undefined;
                entity = undefined;
                if(!michal) { _fun00004_ip = 138; continue _fun00003 }
 25:
                michal = {};
                oscard = _closure1_slot4;
                oscard = oscard.FAVORITES;
                michal['type'] = oscard;
                option = _closure1_slot0;
                offset = _closure1_slot2;
                report = 5;
                oscard = offset[report];
                oscard = option.bind(verify)(oscard);
                golfie = oscard.intl;
                oscard = golfie.string;
                report = offset[report];
                report = option.bind(verify)(report);
                report = report.t;
                report = report.k8fFjo;
                report = oscard.bind(golfie)(report);
                michal['name'] = report;
                zuuluu = _closure2_slot0;
                report = zuuluu[tangon];
                report = report.src;
                michal['src'] = report;
                zuuluu = zuuluu[tangon];
                zuuluu = zuuluu.format;
                michal['format'] = zuuluu;
                entity = michal;
 138:
                return entity;
            }
        };
        michal = tangon.bind(report)(entity, michal);
        entity = {};
        entity['favorites'] = zuuluu;
        entity['favoritesCategory'] = michal;
        return entity;
    };
    zuuluu['useFavoriteGIFsMobile'] = michal;
    michal = 180;
    zuuluu['GIF_PICKER_ITEM_ESIMTATED_HEIGHT'] = michal;
    michal = 8;
    zuuluu['GIF_PICKER_GUTTER_SPACING'] = michal;
    michal = 20;
    zuuluu['DEFAULT_CATEGORY_ROWS'] = michal;
    return entity;
})();