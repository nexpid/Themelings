// app/modules/gif_picker/native/GIFPickerCategoriesPage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function(argFoo) {
        options = argFoo;
        entity = {};
        mike = {};
        mike['height'] = options;
        zulu = 'row';
        mike['flexDirection'] = zulu;
        verify = _closure1_slot0;
        oscar = _closure1_slot2;
        golf = 6;
        tango = oscar[golf];
        report = undefined;
        tango = verify.bind(report)(tango);
        tango = tango.GIF_PICKER_GUTTER_SPACING;
        mike['gap'] = tango;
        tango = oscar[golf];
        tango = verify.bind(report)(tango);
        tango = tango.GIF_PICKER_GUTTER_SPACING;
        mike['paddingBottom'] = tango;
        entity['item'] = mike;
        mike = {};
        tango = _closure1_slot1;
        zulu = 7;
        offset = oscar[zulu];
        offset = tango.bind(report)(offset);
        offset = offset.colors;
        offset = offset.BACKGROUND_MODIFIER_ACCENT;
        mike['backgroundColor'] = offset;
        golf = oscar[golf];
        golf = verify.bind(report)(golf);
        golf = golf.GIF_PICKER_GUTTER_SPACING;
        golf = options - golf;
        mike['height'] = golf;
        zulu = oscar[zulu];
        zulu = tango.bind(report)(zulu);
        zulu = zulu.radii;
        zulu = zulu.xs;
        mike['borderRadius'] = zulu;
        zulu = 1;
        mike['flex'] = zulu;
        entity['placeholder'] = mike;
        return entity;
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot8 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: GIFPickerCategoriesPage
        _fun84882: for(var _fun84882_ip = 0; ; ) switch(_fun84882_ip) {
 0:
            mike = argFoo;
            kilo = mike.columns;
            var _closure2_slot0 = kilo;
            oscar = mike.favoritesCategory;
            var _closure2_slot1 = oscar;
            offset = mike.inActionSheet;
            zulu = mike.onSelectCategory;
            var _closure2_slot2 = zulu;
            tango = undefined;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            report = 2;
            if(!(!(kilo > report))) { _fun84882_ip = 101; continue _fun84882 }
 66:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 6;
            mike = options[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
            options = mike / report;
            _fun84882_ip = 130; continue _fun84882;
 101:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 6;
            mike = golf[mike];
            mike = report.bind(tango)(mike);
            options = mike.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
 130:
            _closure2_slot3 = options;
            mike = _closure1_slot8;
            backup = mike.bind(tango)(options);
            _closure2_slot4 = backup;
            mike = _closure1_slot1;
            romeo = _closure1_slot2;
            report = 8;
            report = romeo[report];
            golf = mike.bind(tango)(report);
            report = {};
            verify = false;
            report['hasCategories'] = verify;
            report = golf.bind(tango)(report);
            verify = report.safeAreaBottomKeyboardAware;
            golf = _closure1_slot0;
            report = 9;
            report = romeo[report];
            sizing = golf.bind(tango)(report);
            foxtrot = sizing.useStateFromStoresObject;
            report = _closure1_slot6;
            golf = new Array(1);
            golf[0] = report;
            report = function() {
                entity = {};
                zulu = _closure1_slot6;
                mike = zulu.getTrendingCategories;
                mike = mike.bind(zulu)();
                entity['trendingCategories'] = mike;
                return entity;
            };
            report = foxtrot.bind(sizing)(golf, report);
            report = report.trendingCategories;
            _closure2_slot5 = report;
            foxtrot = _closure1_slot3;
            sizing = foxtrot.useMemo;
            golf = new Array(3);
            golf[0] = kilo;
            golf[1] = oscar;
            golf[2] = report;
            oscar = function() {
                _fun84884: for(var _fun84884_ip = 0; ; ) switch(_fun84884_ip) {
 0:
                    kilo = _closure2_slot5;
                    options = new Array(0);
                    zulu = 0;
                    sizing = options;
                    backup = 0;
                    entity = arraySpread(sizing, kilo, backup);
                    mike = _closure2_slot1;
                    entity = null;
                    if(!(entity != mike)) { _fun84884_ip = 47; continue _fun84884 }
 32:
                    mike = options.unshift;
                    entity = _closure2_slot1;
                    entity = mike.bind(options)(entity);
 47:
                    mike = new Array(0);
                    golf = global;
                    romeo = golf.Math;
                    yankee = romeo.max;
                    offset = options.length;
                    foxtrot = _closure1_slot0;
                    entity = _closure1_slot2;
                    report = 6;
                    entity = entity[report];
                    tango = undefined;
                    entity = foxtrot.bind(tango)(entity);
                    entity = entity.DEFAULT_CATEGORY_ROWS;
                    entity = yankee.bind(romeo)(offset, entity);
                    entity = zulu < entity;
                    zulu = 0;
                    if(!entity) { _fun84884_ip = 197; continue _fun84884 }
 115:
                    yankee = mike.push;
                    romeo = options.slice;
                    entity = _closure2_slot0;
                    offset = zulu + entity;
                    offset = romeo.bind(options)(zulu, offset);
                    offset = yankee.bind(mike)(offset);
                    zulu = zulu + entity;
                    romeo = golf.Math;
                    yankee = romeo.max;
                    offset = options.length;
                    foxtrot = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[report];
                    entity = foxtrot.bind(tango)(entity);
                    entity = entity.DEFAULT_CATEGORY_ROWS;
                    entity = yankee.bind(romeo)(offset, entity);
                    if(zulu < entity) { _fun84884_ip = 115; continue _fun84884 }
 197:
                    entity = {};
                    entity['data'] = mike;
                    zulu = mike.length;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity['sections'] = mike;
                    return entity;
                }
            };
            oscar = sizing.bind(foxtrot)(oscar, golf);
            sizing = oscar.data;
            _closure2_slot6 = sizing;
            golf = oscar.sections;
            output = foxtrot.useEffect;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                _fun84885: for(var _fun84885_ip = 0; ; ) switch(_fun84885_ip) {
 0:
                    entity = _closure2_slot5;
                    mike = entity.length;
                    entity = 0;
                    if(!(entity === mike)) { _fun84885_ip = 53; continue _fun84885 }
 18:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.fetchTrending;
                    entity = entity.bind(mike)();
 53:
                    entity = undefined;
                    return entity;
                }
            };
            report = output.bind(foxtrot)(report, oscar);
            oscar = foxtrot.useCallback;
            report = new Array(4);
            report[0] = kilo;
            report[1] = sizing;
            report[2] = zulu;
            report[3] = backup;
            zulu = function(argFoo, argBar) {
                _fun84886: for(var _fun84886_ip = 0; ; ) switch(_fun84886_ip) {
 0:
                    mike = _closure2_slot6;
                    entity = argBar;
                    verify = mike[entity];
                    report = new Array(0);
                    entity = _closure2_slot0;
                    options = 0;
                    mike = options < entity;
                    golf = 11;
                    tango = undefined;
                    zulu = null;
                    if(!mike) { _fun84886_ip = 170; continue _fun84886 }
 44:
                    backup = verify[options];
                    offset = report.push;
                    if(!(zulu == backup)) { _fun84886_ip = 111; continue _fun84886 }
 57:
                    romeo = _closure1_slot7;
                    yankee = _closure1_slot4;
                    mike = {};
                    foxtrot = _closure2_slot4;
                    kilo = foxtrot.item;
                    foxtrot = new Array(2);
                    foxtrot[0] = kilo;
                    kilo = _closure2_slot4;
                    kilo = kilo.placeholder;
                    foxtrot[1] = kilo;
                    mike['style'] = foxtrot;
                    mike = romeo.bind(tango)(yankee, mike, options);
                    _fun84886_ip = 154; continue _fun84886;
 111:
                    foxtrot = _closure1_slot7;
                    romeo = _closure1_slot1;
                    yankee = _closure1_slot2;
                    yankee = yankee[golf];
                    romeo = romeo.bind(tango)(yankee);
                    yankee = {};
                    yankee['item'] = backup;
                    backup = _closure2_slot2;
                    yankee['onSelectCategory'] = backup;
                    mike = foxtrot.bind(tango)(romeo, yankee, options);
 154:
                    mike = offset.bind(report)(mike);
                    options = options + 1;
                    mike = _closure2_slot0;
                    if(options < mike) { _fun84886_ip = 44; continue _fun84886 }
 170:
                    zulu = _closure1_slot7;
                    mike = _closure1_slot4;
                    entity = {};
                    oscar = _closure2_slot4;
                    oscar = oscar.item;
                    entity['style'] = oscar;
                    oscar = false;
                    entity['collapsable'] = oscar;
                    entity['children'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            report = oscar.bind(foxtrot)(zulu, report);
            oscar = foxtrot.useMemo;
            zulu = new Array(3);
            zulu[0] = options;
            zulu[1] = kilo;
            zulu[2] = backup;
            entity = function() {
                entity = {};
                mike = {};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                zulu = 12;
                zulu = golf[zulu];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                zulu = zulu.FastestListPropsPlaceholderType;
                zulu = zulu.SHAPE;
                mike['type'] = zulu;
                zulu = 'rect';
                mike['shape'] = zulu;
                zulu = _closure2_slot0;
                mike['shapeCount'] = zulu;
                zulu = 6;
                options = golf[zulu];
                options = oscar.bind(report)(options);
                options = options.GIF_PICKER_GUTTER_SPACING;
                mike['spaceGap'] = options;
                options = _closure2_slot4;
                options = options.placeholder;
                options = options.borderRadius;
                mike['borderRadius'] = options;
                options = _closure2_slot4;
                options = options.placeholder;
                options = options.backgroundColor;
                mike['colorHex'] = options;
                tango = _closure2_slot3;
                zulu = golf[zulu];
                zulu = oscar.bind(report)(zulu);
                zulu = zulu.GIF_PICKER_GUTTER_SPACING;
                zulu = tango - zulu;
                mike['height'] = zulu;
                zulu = 'top';
                mike['verticalAlignment'] = zulu;
                entity['sectionItem'] = mike;
                return entity;
            };
            oscar = oscar.bind(foxtrot)(entity, zulu);
            zulu = _closure1_slot7;
            entity = 13;
            entity = romeo[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            yankee = _closure1_slot5;
            yankee = yankee.systemKeyboardHeight;
            entity['estimatedListSize'] = yankee;
            entity['inActionSheet'] = offset;
            entity['insetEnd'] = verify;
            entity['itemSize'] = options;
            entity['sections'] = golf;
            entity['placeholderConfig'] = oscar;
            entity['renderItem'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gif_picker/native/GIFPickerCategoriesPage.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();