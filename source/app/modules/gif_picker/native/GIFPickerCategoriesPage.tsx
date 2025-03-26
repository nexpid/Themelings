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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 4;
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
        golfie = 5;
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
        zuuluu = 6;
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
    var _closure1_slot7 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: GIFPickerCategoriesPage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sizing = entity.columns;
            var _closure2_slot0 = sizing;
            golfie = entity.favoritesCategory;
            var _closure2_slot1 = golfie;
            offset = entity.inActionSheet;
            report = entity.onSelectCategory;
            var _closure2_slot2 = report;
            tangon = undefined;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            michal = 2;
            if(!(!(sizing > michal))) { _fun00002_ip = 101; continue _fun00001 }
 66:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            entity = 5;
            entity = option[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
            option = entity / michal;
            _fun00002_ip = 130; continue _fun00001;
 101:
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 5;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            option = entity.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
 130:
            _closure2_slot3 = option;
            michal = _closure1_slot7;
            kiloes = michal.bind(tangon)(option);
            _closure2_slot4 = kiloes;
            michal = _closure1_slot1;
            foxtra = _closure1_slot2;
            oscard = 7;
            oscard = foxtra[oscard];
            verify = michal.bind(tangon)(oscard);
            oscard = {};
            yankee = false;
            oscard['hasCategories'] = yankee;
            oscard = verify.bind(tangon)(oscard);
            verify = oscard.safeAreaBottomKeyboardAware;
            romeon = _closure1_slot0;
            oscard = 8;
            oscard = foxtra[oscard];
            output = romeon.bind(tangon)(oscard);
            backup = output.useStateFromStoresObject;
            oscard = _closure1_slot5;
            yankee = new Array(1);
            yankee[0] = oscard;
            oscard = function() {
                entity = {};
                zuuluu = _closure1_slot5;
                michal = zuuluu.getTrendingCategories;
                michal = michal.bind(zuuluu)();
                entity['trendingCategories'] = michal;
                return entity;
            };
            oscard = backup.bind(output)(yankee, oscard);
            oscard = oscard.trendingCategories;
            _closure2_slot5 = oscard;
            backup = _closure1_slot3;
            output = backup.useMemo;
            yankee = new Array(3);
            yankee[0] = sizing;
            yankee[1] = golfie;
            yankee[2] = oscard;
            golfie = function() {
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
                    report = 5;
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
            golfie = output.bind(backup)(golfie, yankee);
            output = golfie.data;
            _closure2_slot6 = output;
            golfie = golfie.sections;
            result = backup.useEffect;
            yankee = new Array(1);
            yankee[0] = oscard;
            oscard = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot5;
                    michal = entity.length;
                    entity = 0;
                    if(!(entity === michal)) { _fun00006_ip = 53; continue _fun00005 }
 18:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 9;
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
            oscard = result.bind(backup)(oscard, yankee);
            yankee = backup.useCallback;
            oscard = new Array(4);
            oscard[0] = sizing;
            oscard[1] = output;
            oscard[2] = report;
            oscard[3] = kiloes;
            report = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot6;
                    entity = argBar;
                    verify = michal[entity];
                    report = new Array(0);
                    entity = _closure2_slot0;
                    option = 0;
                    michal = option < entity;
                    golfie = 10;
                    tangon = undefined;
                    zuuluu = null;
                    if(!michal) { _fun00008_ip = 170; continue _fun00007 }
 44:
                    backup = verify[option];
                    offset = report.push;
                    if(!(zuuluu == backup)) { _fun00008_ip = 111; continue _fun00007 }
 57:
                    romeon = _closure1_slot6;
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
                    foxtra = _closure1_slot6;
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
                    zuuluu = _closure1_slot6;
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
            report = yankee.bind(backup)(report, oscard);
            yankee = backup.useMemo;
            oscard = new Array(3);
            oscard[0] = option;
            oscard[1] = sizing;
            oscard[2] = kiloes;
            zuuluu = function() {
                entity = {};
                michal = {};
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                zuuluu = 11;
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
                zuuluu = 5;
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
            oscard = yankee.bind(backup)(zuuluu, oscard);
            zuuluu = _closure1_slot6;
            entity = 12;
            entity = foxtra[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            yankee = 13;
            yankee = foxtra[yankee];
            romeon = romeon.bind(tangon)(yankee);
            yankee = romeon.getCustomKeyboardHeight;
            yankee = yankee.bind(romeon)();
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