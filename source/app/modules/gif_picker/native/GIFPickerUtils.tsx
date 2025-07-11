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
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gif_picker/native/GIFPickerUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 56;
    zuuluu['GIF_HEADER_HEIGHT'] = tangon;
    michal = function() { // Original name: useFavoriteGIFsMobile
        tangon = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 4;
        zuuluu = oscard[zuuluu];
        report = undefined;
        golfie = tangon.bind(report)(zuuluu);
        tangon = golfie.useExperiment;
        zuuluu = {};
        option = 'useFavoriteGIFsMobile';
        zuuluu['location'] = option;
        zuuluu = tangon.bind(golfie)(zuuluu);
        tangon = zuuluu.optimizationsEnabled;
        var _closure2_slot0 = tangon;
        zuuluu = zuuluu.sendParam;
        var _closure2_slot1 = zuuluu;
        tangon = _closure1_slot0;
        zuuluu = 5;
        zuuluu = oscard[zuuluu];
        report = tangon.bind(report)(zuuluu);
        tangon = report.useSortedFavoriteGIFs;
        zuuluu = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                romeon = argBar;
                oscard = _closure2_slot0;
                yankee = _closure2_slot1;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 2;
                michal = tangon[michal];
                offset = undefined;
                zuuluu = zuuluu.bind(offset)(michal);
                michal = zuuluu.toURLSafe;
                zuuluu = michal.bind(zuuluu)(entity);
                option = null;
                if(!(option != zuuluu)) { _fun00002_ip = 268; continue _fun00001 }
 62:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                report = 3;
                michal = michal[report];
                tangon = tangon.bind(offset)(michal);
                michal = tangon.isExternalProxiedAttachmentUrl;
                michal = michal.bind(tangon)(zuuluu);
                if(michal) { _fun00002_ip = 130; continue _fun00001 }
 96:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[report];
                tangon = tangon.bind(offset)(michal);
                michal = tangon.isAttachmentUrl;
                michal = michal.bind(tangon)(zuuluu);
                if(!michal) { _fun00002_ip = 268; continue _fun00001 }
 130:
                tangon = zuuluu.pathname;
                michal = tangon.toLowerCase;
                report = michal.bind(tangon)();
                tangon = report.endsWith;
                michal = '.webp';
                report = tangon.bind(report)(michal);
                tangon = zuuluu.pathname;
                michal = tangon.toLowerCase;
                golfie = michal.bind(tangon)();
                tangon = golfie.endsWith;
                michal = '.avif';
                michal = tangon.bind(golfie)(michal);
                golfie = zuuluu.pathname;
                tangon = golfie.toLowerCase;
                foxtra = tangon.bind(golfie)();
                golfie = foxtra.endsWith;
                tangon = '.gif';
                golfie = golfie.bind(foxtra)(tangon);
                tangon = golfie;
                if(!golfie) { _fun00002_ip = 238; continue _fun00001 }
 235:
                tangon = oscard;
 238:
                if(!golfie) { _fun00002_ip = 244; continue _fun00001 }
 241:
                golfie = yankee;
 244:
                if(report) { _fun00002_ip = 421; continue _fun00001 }
 250:
                if(michal) { _fun00002_ip = 421; continue _fun00001 }
 256:
                if(tangon) { _fun00002_ip = 421; continue _fun00001 }
 262:
                if(golfie) { _fun00002_ip = 421; continue _fun00001 }
 268:
                foxtra = _closure1_slot5;
                yankee = foxtra.test;
                yankee = yankee.bind(foxtra)(romeon);
                if(yankee) { _fun00002_ip = 333; continue _fun00001 }
 285:
                foxtra = _closure1_slot6;
                yankee = foxtra.test;
                yankee = yankee.bind(foxtra)(romeon);
                if(!yankee) { _fun00002_ip = 331; continue _fun00001 }
 302:
                yankee = global;
                yankee = yankee.HermesInternal;
                backup = yankee.concat;
                foxtra = '';
                yankee = '.gif';
                entity = backup.bind(foxtra)(romeon, yankee);
 331:
                _fun00002_ip = 416; continue _fun00001;
 333:
                yankee = _closure1_slot7;
                verify = yankee.exec;
                yankee = verify.bind(yankee)(romeon);
                verify = option == yankee;
                romeon = undefined;
                if(verify) { _fun00002_ip = 385; continue _fun00001 }
 357:
                verify = 0;
                yankee = yankee[verify];
                option = option == yankee;
                romeon = undefined;
                if(option) { _fun00002_ip = 385; continue _fun00001 }
 372:
                verify = yankee.slice;
                option = 1;
                romeon = verify.bind(yankee)(option);
 385:
                option = global;
                option = option.HermesInternal;
                yankee = option.concat;
                verify = 'https://media.giphy.com/media/';
                option = '/giphy.gif';
                entity = yankee.bind(verify)(romeon, option);
 416:
                _fun00002_ip = 548; continue _fun00001;
 421:
                if(!golfie) { _fun00002_ip = 463; continue _fun00001 }
 424:
                verify = zuuluu.searchParams;
                option = verify.set;
                golfie = global;
                golfie = golfie.String;
                oscard = oscard - 0;
                golfie = golfie.bind(offset)(oscard);
                oscard = 'gif_treatment';
                oscard = option.bind(verify)(oscard, golfie);
 463:
                if(report) { _fun00002_ip = 469; continue _fun00001 }
 466:
                report = michal;
 469:
                if(report) { _fun00002_ip = 475; continue _fun00001 }
 472:
                report = tangon;
 475:
                if(!report) { _fun00002_ip = 503; continue _fun00001 }
 478:
                option = zuuluu.searchParams;
                golfie = option.set;
                oscard = 'animated';
                report = 'true';
                report = golfie.bind(option)(oscard, report);
 503:
                if(michal) { _fun00002_ip = 509; continue _fun00001 }
 506:
                michal = tangon;
 509:
                if(!michal) { _fun00002_ip = 539; continue _fun00001 }
 512:
                oscard = zuuluu.searchParams;
                report = oscard.set;
                tangon = 'format';
                michal = 'webp';
                michal = report.bind(oscard)(tangon, michal);
 539:
                michal = zuuluu.toString;
                entity = michal.bind(zuuluu)();
 548:
                return entity;
            }
        };
        zuuluu = tangon.bind(report)(zuuluu);
        var _closure2_slot2 = zuuluu;
        report = _closure1_slot3;
        tangon = report.useMemo;
        michal = new Array(1);
        michal[0] = zuuluu;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot2;
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
                report = 6;
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
                zuuluu = _closure2_slot2;
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