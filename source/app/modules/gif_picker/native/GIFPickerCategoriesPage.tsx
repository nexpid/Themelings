// app/modules/gif_picker/native/GIFPickerCategoriesPage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo) {
        option = argFoo;
        entity = {};
        michal = {};
        michal['height'] = option;
        zuuluu = 'row';
        michal['flexDirection'] = zuuluu;
        verify = _closure1_slot0;
        oscard = _closure1_slot2;
        golfie = 6;
        tangon = oscard[golfie];
        report = undefined;
        tangon = verify.bind(report)(tangon);
        tangon = tangon.GIF_PICKER_GUTTER_SPACING;
        michal['gap'] = tangon;
        tangon = oscard[golfie];
        tangon = verify.bind(report)(tangon);
        tangon = tangon.GIF_PICKER_GUTTER_SPACING;
        michal['paddingBottom'] = tangon;
        entity['item'] = michal;
        michal = {};
        tangon = _closure1_slot1;
        zuuluu = 7;
        offset = oscard[zuuluu];
        offset = tangon.bind(report)(offset);
        offset = offset.colors;
        offset = offset.BACKGROUND_MODIFIER_ACCENT;
        michal['backgroundColor'] = offset;
        golfie = oscard[golfie];
        golfie = verify.bind(report)(golfie);
        golfie = golfie.GIF_PICKER_GUTTER_SPACING;
        golfie = option - golfie;
        michal['height'] = golfie;
        zuuluu = oscard[zuuluu];
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = zuuluu.radii;
        zuuluu = zuuluu.xs;
        michal['borderRadius'] = zuuluu;
        zuuluu = 1;
        michal['flex'] = zuuluu;
        entity['placeholder'] = michal;
        return entity;
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot8 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: GIFPickerCategoriesPage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            kiloes = michal.columns;
            var _closure2_slot0 = kiloes;
            oscard = michal.favoritesCategory;
            var _closure2_slot1 = oscard;
            offset = michal.inActionSheet;
            zuuluu = michal.onSelectCategory;
            var _closure2_slot2 = zuuluu;
            tangon = undefined;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            report = 2;
            if(!(!(kiloes > report))) { _fun00002_ip = 101; continue _fun00001 }
 66:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 6;
            michal = option[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
            option = michal / report;
            _fun00002_ip = 130; continue _fun00001;
 101:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 6;
            michal = golfie[michal];
            michal = report.bind(tangon)(michal);
            option = michal.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
 130:
            _closure2_slot3 = option;
            michal = _closure1_slot8;
            backup = michal.bind(tangon)(option);
            _closure2_slot4 = backup;
            michal = _closure1_slot1;
            romeon = _closure1_slot2;
            report = 8;
            report = romeon[report];
            golfie = michal.bind(tangon)(report);
            report = {};
            verify = false;
            report['hasCategories'] = verify;
            report = golfie.bind(tangon)(report);
            verify = report.safeAreaBottomKeyboardAware;
            golfie = _closure1_slot0;
            report = 9;
            report = romeon[report];
            sizing = golfie.bind(tangon)(report);
            foxtra = sizing.useStateFromStoresObject;
            report = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = report;
            report = function() {
                entity = {};
                zuuluu = _closure1_slot6;
                michal = zuuluu.getTrendingCategories;
                michal = michal.bind(zuuluu)();
                entity['trendingCategories'] = michal;
                return entity;
            };
            report = foxtra.bind(sizing)(golfie, report);
            report = report.trendingCategories;
            _closure2_slot5 = report;
            foxtra = _closure1_slot3;
            sizing = foxtra.useMemo;
            golfie = new Array(3);
            golfie[0] = kiloes;
            golfie[1] = oscard;
            golfie[2] = report;
            oscard = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    kiloes = _closure2_slot5;
                    option = new Array(0);
                    zuuluu = 0;
                    sizing = option;
                    backup = 0;
                    entity = arraySpread(sizing, kiloes, backup);
                    michal = _closure2_slot1;
                    entity = null;
                    if(!(entity != michal)) { _fun00004_ip = 47; continue _fun00003 }
 32:
                    michal = option.unshift;
                    entity = _closure2_slot1;
                    entity = michal.bind(option)(entity);
 47:
                    michal = new Array(0);
                    golfie = global;
                    romeon = golfie.Math;
                    yankee = romeon.max;
                    offset = option.length;
                    foxtra = _closure1_slot0;
                    entity = _closure1_slot2;
                    report = 6;
                    entity = entity[report];
                    tangon = undefined;
                    entity = foxtra.bind(tangon)(entity);
                    entity = entity.DEFAULT_CATEGORY_ROWS;
                    entity = yankee.bind(romeon)(offset, entity);
                    entity = zuuluu < entity;
                    zuuluu = 0;
                    if(!entity) { _fun00004_ip = 197; continue _fun00003 }
 115:
                    yankee = michal.push;
                    romeon = option.slice;
                    entity = _closure2_slot0;
                    offset = zuuluu + entity;
                    offset = romeon.bind(option)(zuuluu, offset);
                    offset = yankee.bind(michal)(offset);
                    zuuluu = zuuluu + entity;
                    romeon = golfie.Math;
                    yankee = romeon.max;
                    offset = option.length;
                    foxtra = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[report];
                    entity = foxtra.bind(tangon)(entity);
                    entity = entity.DEFAULT_CATEGORY_ROWS;
                    entity = yankee.bind(romeon)(offset, entity);
                    if(zuuluu < entity) { _fun00004_ip = 115; continue _fun00003 }
 197:
                    entity = {};
                    entity['data'] = michal;
                    zuuluu = michal.length;
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity['sections'] = michal;
                    return entity;
                }
            };
            oscard = sizing.bind(foxtra)(oscard, golfie);
            sizing = oscard.data;
            _closure2_slot6 = sizing;
            golfie = oscard.sections;
            output = foxtra.useEffect;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot5;
                    michal = entity.length;
                    entity = 0;
                    if(!(entity === michal)) { _fun00006_ip = 53; continue _fun00005 }
 18:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.fetchTrending;
                    entity = entity.bind(michal)();
 53:
                    entity = undefined;
                    return entity;
                }
            };
            report = output.bind(foxtra)(report, oscard);
            oscard = foxtra.useCallback;
            report = new Array(4);
            report[0] = kiloes;
            report[1] = sizing;
            report[2] = zuuluu;
            report[3] = backup;
            zuuluu = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot6;
                    entity = argBar;
                    verify = michal[entity];
                    report = new Array(0);
                    entity = _closure2_slot0;
                    option = 0;
                    michal = option < entity;
                    golfie = 11;
                    tangon = undefined;
                    zuuluu = null;
                    if(!michal) { _fun00008_ip = 170; continue _fun00007 }
 44:
                    backup = verify[option];
                    offset = report.push;
                    if(!(zuuluu == backup)) { _fun00008_ip = 111; continue _fun00007 }
 57:
                    romeon = _closure1_slot7;
                    yankee = _closure1_slot4;
                    michal = {};
                    foxtra = _closure2_slot4;
                    kiloes = foxtra.item;
                    foxtra = new Array(2);
                    foxtra[0] = kiloes;
                    kiloes = _closure2_slot4;
                    kiloes = kiloes.placeholder;
                    foxtra[1] = kiloes;
                    michal['style'] = foxtra;
                    michal = romeon.bind(tangon)(yankee, michal, option);
                    _fun00008_ip = 154; continue _fun00007;
 111:
                    foxtra = _closure1_slot7;
                    romeon = _closure1_slot1;
                    yankee = _closure1_slot2;
                    yankee = yankee[golfie];
                    romeon = romeon.bind(tangon)(yankee);
                    yankee = {};
                    yankee['item'] = backup;
                    backup = _closure2_slot2;
                    yankee['onSelectCategory'] = backup;
                    michal = foxtra.bind(tangon)(romeon, yankee, option);
 154:
                    michal = offset.bind(report)(michal);
                    option = option + 1;
                    michal = _closure2_slot0;
                    if(option < michal) { _fun00008_ip = 44; continue _fun00007 }
 170:
                    zuuluu = _closure1_slot7;
                    michal = _closure1_slot4;
                    entity = {};
                    oscard = _closure2_slot4;
                    oscard = oscard.item;
                    entity['style'] = oscard;
                    oscard = false;
                    entity['collapsable'] = oscard;
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            report = oscard.bind(foxtra)(zuuluu, report);
            oscard = foxtra.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = option;
            zuuluu[1] = kiloes;
            zuuluu[2] = backup;
            entity = function() {
                entity = {};
                michal = {};
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                zuuluu = 12;
                zuuluu = golfie[zuuluu];
                report = undefined;
                zuuluu = oscard.bind(report)(zuuluu);
                zuuluu = zuuluu.FastestListPropsPlaceholderType;
                zuuluu = zuuluu.SHAPE;
                michal['type'] = zuuluu;
                zuuluu = 'rect';
                michal['shape'] = zuuluu;
                zuuluu = _closure2_slot0;
                michal['shapeCount'] = zuuluu;
                zuuluu = 6;
                option = golfie[zuuluu];
                option = oscard.bind(report)(option);
                option = option.GIF_PICKER_GUTTER_SPACING;
                michal['spaceGap'] = option;
                option = _closure2_slot4;
                option = option.placeholder;
                option = option.borderRadius;
                michal['borderRadius'] = option;
                option = _closure2_slot4;
                option = option.placeholder;
                option = option.backgroundColor;
                michal['colorHex'] = option;
                tangon = _closure2_slot3;
                zuuluu = golfie[zuuluu];
                zuuluu = oscard.bind(report)(zuuluu);
                zuuluu = zuuluu.GIF_PICKER_GUTTER_SPACING;
                zuuluu = tangon - zuuluu;
                michal['height'] = zuuluu;
                zuuluu = 'top';
                michal['verticalAlignment'] = zuuluu;
                entity['sectionItem'] = michal;
                return entity;
            };
            oscard = oscard.bind(foxtra)(entity, zuuluu);
            zuuluu = _closure1_slot7;
            entity = 13;
            entity = romeon[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            yankee = _closure1_slot5;
            yankee = yankee.systemKeyboardHeight;
            entity['estimatedListSize'] = yankee;
            entity['inActionSheet'] = offset;
            entity['insetEnd'] = verify;
            entity['itemSize'] = option;
            entity['sections'] = golfie;
            entity['placeholderConfig'] = oscard;
            entity['renderItem'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gif_picker/native/GIFPickerCategoriesPage.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();