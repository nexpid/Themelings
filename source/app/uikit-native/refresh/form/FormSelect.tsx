// app/uikit-native/refresh/form/FormSelect.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: OptionButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.item;
            var _closure2_slot0 = verify;
            report = entity.selected;
            offset = entity.onPress;
            var _closure2_slot1 = offset;
            zuuluu = _closure1_slot8;
            tangon = undefined;
            oscard = zuuluu.bind(tangon)();
            option = _closure1_slot3;
            golfie = option.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = verify;
            zuuluu[1] = offset;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 28; continue _fun00003 }
 13:
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 28:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = golfie.bind(option)(michal, zuuluu);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot1;
            option = _closure1_slot2;
            entity = 6;
            entity = option[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            offset = verify.descriptiveLabel;
            option = null;
            if(!(option == offset)) { _fun00002_ip = 117; continue _fun00001 }
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
            entity['onPress'] = golfie;
            verify = oscard.button;
            golfie = new Array(2);
            golfie[0] = verify;
            option = null;
            if(!report) { _fun00002_ip = 189; continue _fun00001 }
 183:
            option = oscard.buttonSelected;
 189:
            golfie[1] = option;
            entity['style'] = golfie;
            if(report) { _fun00002_ip = 207; continue _fun00001 }
 200:
            report = oscard.label;
            _fun00002_ip = 213; continue _fun00001;
 207:
            report = oscard.labelSelected;
 213:
            entity['textStyle'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: extractKey
        entity = argFoo;
        zuuluu = entity.value;
        entity = global;
        entity = entity.HermesInternal;
        michal = entity.concat;
        entity = '';
        entity = michal.bind(entity)(zuuluu);
        return entity;
    };
    var _closure1_slot11 = entity;
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
    golfie = tangon.View;
    var _closure1_slot4 = golfie;
    offset = tangon.StyleSheet;
    tangon = tangon.FlatList;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.Fonts;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot6 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 4;
    golfie = oscard[tangon];
    verify = report.bind(entity)(golfie);
    option = verify.createStyles;
    golfie = {};
    yankee = {'minWidth': 95, 'height': 36, 'margin': 4, 'borderRadius': 3, 'justifyContent': 'center', 'alignItems': 'center', 'paddingHorizontal': 10, 'borderWidth': null, 'shadowColor': null, 'shadowOffset': null, 'shadowOpacity': 0.12, 'shadowRadius': 6};
    offset = offset.hairlineWidth;
    yankee['borderWidth'] = offset;
    offset = 5;
    backup = oscard[offset];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BLACK;
    yankee['shadowColor'] = backup;
    backup = {'width': 0, 'height': 2};
    yankee['shadowOffset'] = backup;
    backup = oscard[offset];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_TERTIARY;
    yankee['backgroundColor'] = backup;
    golfie['button'] = yankee;
    yankee = {};
    backup = oscard[offset];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BRAND;
    yankee['backgroundColor'] = backup;
    golfie['buttonSelected'] = yankee;
    yankee = {};
    backup = foxtra.PRIMARY_SEMIBOLD;
    yankee['fontFamily'] = backup;
    backup = 14;
    yankee['fontSize'] = backup;
    backup = oscard[offset];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.TEXT_MUTED;
    yankee['color'] = backup;
    golfie['label'] = yankee;
    yankee = {};
    backup = oscard[offset];
    backup = romeon.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.BRAND_100;
    yankee['color'] = backup;
    golfie['labelSelected'] = yankee;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot8 = golfie;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    golfie = {};
    yankee = 12;
    tangon = {'paddingVertical': 12, 'paddingHorizontal': 16};
    golfie['row'] = tangon;
    tangon = {};
    foxtra = foxtra.PRIMARY_SEMIBOLD;
    tangon['fontFamily'] = foxtra;
    foxtra = 13;
    tangon['fontSize'] = foxtra;
    offset = oscard[offset];
    offset = romeon.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_MUTED;
    tangon['color'] = offset;
    golfie['label'] = tangon;
    tangon = 8;
    offset = {'marginHorizontal': 4294967280, 'paddingTop': 20, 'marginTop': 4294967276, 'paddingBottom': 8, 'marginBottom': 4294967288};
    golfie['optionsWrapper'] = offset;
    offset = {};
    offset['paddingHorizontal'] = yankee;
    golfie['optionsContainer'] = offset;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot9 = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'uikit-native/refresh/form/FormSelect.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: FormSelect
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            sizing = entity.label;
            foxtra = entity.options;
            romeon = entity.value;
            var _closure2_slot0 = romeon;
            michal = entity.onChange;
            var _closure2_slot1 = michal;
            verify = entity.onScrollBeginDrag;
            entity = _closure1_slot9;
            tangon = undefined;
            backup = entity.bind(tangon)();
            zuuluu = _closure1_slot7;
            michal = _closure1_slot4;
            entity = {};
            report = backup.row;
            entity['style'] = report;
            report = null;
            oscard = report != sizing;
            if(!oscard) { _fun00006_ip = 156; continue _fun00005 }
 82:
            option = _closure1_slot6;
            golfie = _closure1_slot0;
            kiloes = _closure1_slot2;
            report = 7;
            report = kiloes[report];
            report = golfie.bind(tangon)(report);
            golfie = report.Text;
            report = {'style': null, 'variant': 'heading-md/medium', 'accessibilityRole': 'header'};
            kiloes = backup.label;
            report['style'] = kiloes;
            kiloes = sizing.toUpperCase;
            kiloes = kiloes.bind(sizing)();
            report['children'] = kiloes;
            oscard = option.bind(tangon)(golfie, report);
 156:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot6;
            golfie = _closure1_slot5;
            oscard = {};
            kiloes = backup.optionsWrapper;
            oscard['style'] = kiloes;
            backup = backup.optionsContainer;
            oscard['contentContainerStyle'] = backup;
            oscard['data'] = foxtra;
            oscard['extraData'] = romeon;
            yankee = _closure1_slot11;
            oscard['keyExtractor'] = yankee;
            offset = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                entity = entity.item;
                tangon = _closure1_slot6;
                zuuluu = _closure1_slot10;
                michal = {};
                michal['item'] = entity;
                report = entity.value;
                entity = _closure2_slot0;
                entity = report === entity;
                michal['selected'] = entity;
                entity = function(argFoo) { // Original name: onPress
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.value;
                        zuuluu = _closure2_slot1;
                        entity = null;
                        report = entity == zuuluu;
                        zuuluu = undefined;
                        entity = undefined;
                        if(report) { _fun00008_ip = 37; continue _fun00007 }
 28:
                        michal = _closure2_slot1;
                        entity = michal.bind(zuuluu)(tangon);
 37:
                        return entity;
                    }
                };
                michal['onPress'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            oscard['renderItem'] = offset;
            offset = false;
            oscard['showsHorizontalScrollIndicator'] = offset;
            offset = true;
            oscard['horizontal'] = offset;
            oscard['onScrollBeginDrag'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();