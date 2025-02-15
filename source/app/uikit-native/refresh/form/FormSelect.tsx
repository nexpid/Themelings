// app/uikit-native/refresh/form/FormSelect.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: OptionButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.item;
            var _closure2_slot0 = verify;
            report = entity.selected;
            offset = entity.onPress;
            var _closure2_slot1 = offset;
            zulu = _closure1_slot8;
            tango = undefined;
            oscar = zulu.bind(tango)();
            options = _closure1_slot3;
            golf = options.useCallback;
            zulu = new Array(2);
            zulu[0] = verify;
            zulu[1] = offset;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00004_ip = 28; continue _fun00003 }
 13:
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 28:
                    entity = undefined;
                    return entity;
                }
            };
            golf = golf.bind(options)(mike, zulu);
            zulu = _closure1_slot6;
            mike = _closure1_slot1;
            options = _closure1_slot2;
            entity = 6;
            entity = options[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            offset = verify.descriptiveLabel;
            options = null;
            if(!(options == offset)) { _fun00002_ip = 117; continue _fun00001 }
 112:
            offset = verify.label;
 117:
            entity['accessibilityLabel'] = offset;
            offset = {};
            offset['selected'] = report;
            entity['accessibilityState'] = offset;
            offset = 'radio';
            entity['accessibilityRole'] = offset;
            offset = verify.label;
            verify = offset.toUpperCase;
            verify = verify.bind(offset)();
            entity['text'] = verify;
            entity['onPress'] = golf;
            verify = oscar.button;
            golf = new Array(2);
            golf[0] = verify;
            options = null;
            if(!report) { _fun00002_ip = 189; continue _fun00001 }
 183:
            options = oscar.buttonSelected;
 189:
            golf[1] = options;
            entity['style'] = golf;
            if(report) { _fun00002_ip = 207; continue _fun00001 }
 200:
            report = oscar.label;
            _fun00002_ip = 213; continue _fun00001;
 207:
            report = oscar.labelSelected;
 213:
            entity['textStyle'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: extractKey
        entity = argFoo;
        zulu = entity.value;
        entity = global;
        entity = entity.HermesInternal;
        mike = entity.concat;
        entity = '';
        entity = mike.bind(entity)(zulu);
        return entity;
    };
    var _closure1_slot11 = entity;
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
    golf = tango.View;
    var _closure1_slot4 = golf;
    offset = tango.StyleSheet;
    tango = tango.FlatList;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.Fonts;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 4;
    golf = oscar[tango];
    verify = report.bind(entity)(golf);
    options = verify.createStyles;
    golf = {};
    yankee = {'minWidth': 95, 'height': 36, 'margin': 4, 'borderRadius': 3, 'justifyContent': 'center', 'alignItems': 'center', 'paddingHorizontal': 10, 'borderWidth': null, 'shadowColor': null, 'shadowOffset': null, 'shadowOpacity': 0.12, 'shadowRadius': 6};
    offset = offset.hairlineWidth;
    yankee['borderWidth'] = offset;
    offset = 5;
    backup = oscar[offset];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BLACK;
    yankee['shadowColor'] = backup;
    backup = {'width': 0, 'height': 2};
    yankee['shadowOffset'] = backup;
    backup = oscar[offset];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_TERTIARY;
    yankee['backgroundColor'] = backup;
    golf['button'] = yankee;
    yankee = {};
    backup = oscar[offset];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BRAND;
    yankee['backgroundColor'] = backup;
    golf['buttonSelected'] = yankee;
    yankee = {};
    backup = foxtrot.PRIMARY_SEMIBOLD;
    yankee['fontFamily'] = backup;
    backup = 14;
    yankee['fontSize'] = backup;
    backup = oscar[offset];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.TEXT_MUTED;
    yankee['color'] = backup;
    golf['label'] = yankee;
    yankee = {};
    backup = oscar[offset];
    backup = romeo.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.BRAND_100;
    yankee['color'] = backup;
    golf['labelSelected'] = yankee;
    golf = options.bind(verify)(golf);
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    golf = {};
    yankee = 12;
    tango = {'paddingVertical': 12, 'paddingHorizontal': 16};
    golf['row'] = tango;
    tango = {};
    foxtrot = foxtrot.PRIMARY_SEMIBOLD;
    tango['fontFamily'] = foxtrot;
    foxtrot = 13;
    tango['fontSize'] = foxtrot;
    offset = oscar[offset];
    offset = romeo.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_MUTED;
    tango['color'] = offset;
    golf['label'] = tango;
    tango = 8;
    offset = {'marginHorizontal': 4294967280, 'paddingTop': 20, 'marginTop': 4294967276, 'paddingBottom': 8, 'marginBottom': 4294967288};
    golf['optionsWrapper'] = offset;
    offset = {};
    offset['paddingHorizontal'] = yankee;
    golf['optionsContainer'] = offset;
    golf = options.bind(verify)(golf);
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'uikit-native/refresh/form/FormSelect.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: FormSelect
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            sizing = entity.label;
            foxtrot = entity.options;
            romeo = entity.value;
            var _closure2_slot0 = romeo;
            mike = entity.onChange;
            var _closure2_slot1 = mike;
            verify = entity.onScrollBeginDrag;
            entity = _closure1_slot9;
            tango = undefined;
            backup = entity.bind(tango)();
            zulu = _closure1_slot7;
            mike = _closure1_slot4;
            entity = {};
            report = backup.row;
            entity['style'] = report;
            report = null;
            oscar = report != sizing;
            if(!oscar) { _fun00006_ip = 156; continue _fun00005 }
 82:
            options = _closure1_slot6;
            golf = _closure1_slot0;
            kilo = _closure1_slot2;
            report = 7;
            report = kilo[report];
            report = golf.bind(tango)(report);
            golf = report.Text;
            report = {'style': null, 'variant': 'heading-md/medium', 'accessibilityRole': 'header'};
            kilo = backup.label;
            report['style'] = kilo;
            kilo = sizing.toUpperCase;
            kilo = kilo.bind(sizing)();
            report['children'] = kilo;
            oscar = options.bind(tango)(golf, report);
 156:
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot6;
            golf = _closure1_slot5;
            oscar = {};
            kilo = backup.optionsWrapper;
            oscar['style'] = kilo;
            backup = backup.optionsContainer;
            oscar['contentContainerStyle'] = backup;
            oscar['data'] = foxtrot;
            oscar['extraData'] = romeo;
            yankee = _closure1_slot11;
            oscar['keyExtractor'] = yankee;
            offset = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                entity = entity.item;
                tango = _closure1_slot6;
                zulu = _closure1_slot10;
                mike = {};
                mike['item'] = entity;
                report = entity.value;
                entity = _closure2_slot0;
                entity = report === entity;
                mike['selected'] = entity;
                entity = function(argFoo) { // Original name: onPress
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        tango = entity.value;
                        zulu = _closure2_slot1;
                        entity = null;
                        report = entity == zulu;
                        zulu = undefined;
                        entity = undefined;
                        if(report) { _fun00008_ip = 37; continue _fun00007 }
 28:
                        mike = _closure2_slot1;
                        entity = mike.bind(zulu)(tango);
 37:
                        return entity;
                    }
                };
                mike['onPress'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            oscar['renderItem'] = offset;
            offset = false;
            oscar['showsHorizontalScrollIndicator'] = offset;
            offset = true;
            oscar['horizontal'] = offset;
            oscar['onScrollBeginDrag'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();