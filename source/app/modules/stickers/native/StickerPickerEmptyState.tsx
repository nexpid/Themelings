// app/modules/stickers/native/StickerPickerEmptyState.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    offset = 2;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EMPTY_STATE_STICKERS;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot8 = golf;
    tango = tango.AnalyticsSections;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumUpsellTypes;
    var _closure1_slot10 = tango;
    tango = 7;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot11 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot12 = tango;
    tango = 8;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    yankee = 16;
    verify['marginBottom'] = yankee;
    tango['emptyImage'] = verify;
    verify = {'marginBottom': 8, 'textAlign': 'center'};
    tango['header'] = verify;
    verify = {'lineHeight': 18, 'textAlign': 'center', 'marginBottom': 12};
    tango['blurb'] = verify;
    verify = {'marginTop': 20, 'alignSelf': 'center', 'paddingLeft': 5, 'paddingRight': 10, 'flexGrow': 0};
    tango['premiumButton'] = verify;
    verify = {};
    yankee = 32;
    verify['width'] = yankee;
    tango['nitroWheel'] = verify;
    verify = {'flexDirection': 'row', 'alignSelf': 'center'};
    tango['stickersRow'] = verify;
    verify = {};
    verify['paddingHorizontal'] = offset;
    tango['sticker'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot13 = tango;
    tango = function(argFoo) { // Original name: EmptyStateSticker
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscar = entity.sticker;
            tango = entity.isFocused;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 9;
            entity = golf[entity];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.useShouldAnimateSticker;
            entity = entity.bind(zulu)(tango);
            tango = _closure1_slot11;
            zulu = _closure1_slot1;
            mike = 10;
            mike = golf[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['sticker'] = oscar;
            golf = 60;
            mike['size'] = golf;
            mike['animated'] = entity;
            entity = null;
            golf = entity == oscar;
            entity = undefined;
            if(golf) { _fun00002_ip = 106; continue _fun00001 }
 101:
            entity = oscar.id;
 106:
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot14 = tango;
    tango = 24;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stickers/native/StickerPickerEmptyState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: _default
        entity = _closure1_slot13;
        tango = undefined;
        offset = entity.bind(tango)();
        var _closure2_slot0 = offset;
        output = _closure1_slot0;
        foxtrot = _closure1_slot2;
        entity = 9;
        entity = foxtrot[entity];
        mike = output.bind(tango)(entity);
        entity = mike.useFetchStickerPacks;
        entity = entity.bind(mike)();
        romeo = _closure1_slot1;
        entity = 11;
        entity = foxtrot[entity];
        mike = romeo.bind(tango)(entity);
        entity = 12;
        entity = foxtrot[entity];
        entity = romeo.bind(tango)(entity);
        entity = entity.EMPTY_STATE;
        entity = mike.bind(tango)(entity);
        entity = entity.analyticsLocations;
        var _closure2_slot1 = entity;
        mike = 13;
        mike = foxtrot[mike];
        golf = output.bind(tango)(mike);
        oscar = golf.useStateFromStoresArray;
        mike = _closure1_slot6;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            tango = _closure1_slot7;
            zulu = tango.map;
            mike = function(argFoo) {
                zulu = _closure1_slot6;
                mike = zulu.getStickerById;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.filter;
            entity = function(argFoo) {
                mike = null;
                entity = argFoo;
                entity = mike != entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        kilo = oscar.bind(golf)(zulu, mike);
        oscar = _closure1_slot4;
        zulu = oscar.useState;
        mike = null;
        golf = zulu.bind(oscar)(mike);
        zulu = _closure1_slot3;
        mike = 2;
        zulu = zulu.bind(tango)(golf, mike);
        mike = 0;
        mike = zulu[mike];
        var _closure2_slot2 = mike;
        mike = 1;
        mike = zulu[mike];
        var _closure2_slot3 = mike;
        zulu = oscar.useEffect;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot8;
            zulu = mike.PREMIUM_UPSELL_VIEWED;
            mike = {};
            oscar = _closure1_slot10;
            oscar = oscar.EMPTY_STICKER_PICKER_UPSELL;
            mike['type'] = oscar;
            oscar = {};
            golf = _closure1_slot9;
            golf = golf.EMPTY_STICKER_PICKER_UPSELL;
            oscar['section'] = golf;
            mike['source'] = oscar;
            oscar = _closure2_slot1;
            mike['location_stack'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity = zulu.bind(oscar)(entity, mike);
        zulu = _closure1_slot12;
        mike = _closure1_slot5;
        entity = {};
        options = _closure1_slot11;
        oscar = 15;
        report = foxtrot[oscar];
        report = output.bind(tango)(report);
        golf = report.Text;
        report = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
        yankee = offset.header;
        report['style'] = yankee;
        backup = 16;
        yankee = foxtrot[backup];
        yankee = output.bind(tango)(yankee);
        result = yankee.intl;
        sizing = result.string;
        yankee = foxtrot[backup];
        yankee = output.bind(tango)(yankee);
        yankee = yankee.t;
        yankee = yankee.HEm04O;
        yankee = sizing.bind(result)(yankee);
        report['children'] = yankee;
        golf = options.bind(tango)(golf, report);
        report = new Array(4);
        report[0] = golf;
        oscar = foxtrot[oscar];
        oscar = output.bind(tango)(oscar);
        golf = oscar.Text;
        oscar = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
        yankee = offset.blurb;
        oscar['style'] = yankee;
        yankee = foxtrot[backup];
        yankee = output.bind(tango)(yankee);
        result = yankee.intl;
        sizing = result.string;
        yankee = foxtrot[backup];
        yankee = output.bind(tango)(yankee);
        yankee = yankee.t;
        yankee = yankee.FnNud3;
        yankee = sizing.bind(result)(yankee);
        oscar['children'] = yankee;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        oscar = {};
        golf = offset.stickersRow;
        oscar['style'] = golf;
        yankee = kilo.map;
        golf = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscar = argFoo;
                var _closure3_slot0 = oscar;
                report = _closure1_slot11;
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 17;
                mike = tango[mike];
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                zulu = mike.PressableOpacity;
                mike = {};
                options = false;
                mike['accessible'] = options;
                golf = function() { // Original name: onLongPress
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 18;
                    zulu = oscar[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.triggerHapticFeedback;
                    report = _closure1_slot1;
                    mike = 19;
                    mike = oscar[mike];
                    mike = report.bind(entity)(mike);
                    mike = mike.IMPACT_LIGHT;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure2_slot3;
                    mike = _closure3_slot0;
                    mike = mike.id;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike['onLongPress'] = golf;
                golf = _closure2_slot0;
                golf = golf.sticker;
                mike['style'] = golf;
                golf = _closure1_slot14;
                entity = {};
                entity['sticker'] = oscar;
                verify = _closure2_slot2;
                options = oscar.id;
                options = verify === options;
                entity['isFocused'] = options;
                entity = report.bind(tango)(golf, entity);
                mike['children'] = entity;
                entity = null;
                golf = entity == oscar;
                entity = undefined;
                if(golf) { _fun00004_ip = 135; continue _fun00003 }
 130:
                entity = oscar.id;
 135:
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            }
        };
        golf = yankee.bind(kilo)(golf);
        oscar['children'] = golf;
        oscar = options.bind(tango)(mike, oscar);
        report[2] = oscar;
        yankee = 20;
        oscar = foxtrot[yankee];
        golf = romeo.bind(tango)(oscar);
        oscar = {};
        kilo = function() { // Original name: renderIcon
            tango = _closure1_slot11;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 21;
            entity = golf[entity];
            zulu = undefined;
            mike = oscar.bind(zulu)(entity);
            entity = {};
            report = 22;
            report = golf[report];
            report = oscar.bind(zulu)(report);
            entity['source'] = report;
            report = _closure2_slot0;
            report = report.nitroWheel;
            entity['style'] = report;
            report = 'contain';
            entity['resizeMode'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        oscar['renderIcon'] = kilo;
        kilo = foxtrot[backup];
        kilo = output.bind(tango)(kilo);
        sizing = kilo.intl;
        kilo = sizing.string;
        backup = foxtrot[backup];
        backup = output.bind(tango)(backup);
        backup = backup.t;
        backup = backup.pj0XBA;
        backup = kilo.bind(sizing)(backup);
        oscar['text'] = backup;
        backup = foxtrot[yankee];
        backup = romeo.bind(tango)(backup);
        backup = backup.Colors;
        backup = backup.GREEN;
        oscar['color'] = backup;
        yankee = foxtrot[yankee];
        yankee = romeo.bind(tango)(yankee);
        yankee = yankee.Sizes;
        yankee = yankee.SMALL;
        oscar['size'] = yankee;
        offset = offset.premiumButton;
        oscar['style'] = offset;
        verify = function() { // Original name: onPress
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 23;
            entity = zulu[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = {};
            tango = _closure1_slot9;
            tango = tango.EXPRESSION_PICKER;
            entity['section'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['onPress'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[3] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();