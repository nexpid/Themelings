// app/modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argCorge;
    entity = undefined;
    options = tango.bind(entity)(report);
    var _closure1_slot3 = options;
    romeo = 1;
    tango = golf[romeo];
    tango = oscar.bind(entity)(tango);
    backup = tango.StyleSheet;
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.SearchTypes;
    var _closure1_slot5 = tango;
    tango = 3;
    report = golf[tango];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot6 = report;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    yankee = 4;
    tango = golf[yankee];
    tango = foxtrot.bind(entity)(tango);
    tango = tango.spacing;
    sizing = tango.PX_16;
    var _closure1_slot8 = sizing;
    tango = golf[yankee];
    tango = foxtrot.bind(entity)(tango);
    tango = tango.spacing;
    kilo = tango.PX_8;
    var _closure1_slot9 = kilo;
    tango = 7;
    tango = golf[tango];
    verify = oscar.bind(entity)(tango);
    report = verify.createStyles;
    tango = {};
    offset = {};
    output = 'relative';
    offset['position'] = output;
    offset['padding'] = sizing;
    tango['headerPanel'] = offset;
    offset = {};
    offset['paddingBottom'] = kilo;
    tango['headerPanelTitle'] = offset;
    offset = {};
    kilo = 6;
    kilo = golf[kilo];
    kilo = oscar.bind(entity)(kilo);
    kilo = kilo.SMALL_BUTTON_HEIGHT;
    offset['height'] = kilo;
    kilo = golf[yankee];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    offset['gap'] = kilo;
    kilo = 'row';
    offset['flexDirection'] = kilo;
    kilo = 'center';
    offset['alignItems'] = kilo;
    tango['headerPanelButtons'] = offset;
    offset = {};
    echo = backup.absoluteFillObject;
    update = offset;
    backup = copyDataProperties(update, echo);
    yankee = golf[yankee];
    yankee = foxtrot.bind(entity)(yankee);
    yankee = yankee.colors;
    foxtrot = yankee.BACKGROUND_MODIFIER_ACCENT;
    yankee = 'backgroundColor';
    offset[yankee] = foxtrot;
    yankee = 'top';
    offset[yankee] = entity;
    yankee = 'height';
    offset[yankee] = romeo;
    tango['headerBorder'] = offset;
    tango = report.bind(verify)(tango);
    var _closure1_slot10 = tango;
    tango = {};
    report = 'function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}';
    tango['code'] = report;
    var _closure1_slot11 = tango;
    report = options.memo;
    tango = function(argFoo) { // Original name: MessagesHeader
        zulu = argFoo;
        mike = zulu.height;
        var _closure2_slot0 = mike;
        foxtrot = zulu.scrollPosition;
        var _closure2_slot1 = foxtrot;
        zulu = _closure1_slot10;
        tango = undefined;
        verify = zulu.bind(tango)();
        var _closure2_slot2 = verify;
        options = _closure1_slot3;
        report = options.useMemo;
        zulu = new Array(2);
        zulu[0] = verify;
        zulu[1] = mike;
        mike = function() {
            entity = _closure2_slot2;
            mike = entity.headerPanel;
            entity = new Array(2);
            entity[0] = mike;
            mike = {};
            zulu = _closure2_slot0;
            mike['height'] = zulu;
            entity[1] = mike;
            return entity;
        };
        report = report.bind(options)(mike, zulu);
        echo = _closure1_slot0;
        yankee = _closure1_slot2;
        oscar = 8;
        mike = yankee[oscar];
        offset = echo.bind(tango)(mike);
        zulu = offset.useAnimatedStyle;
        mike = function() { // Original name: u
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = {};
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.withSpring;
                report = _closure2_slot1;
                mike = report.get;
                report = mike.bind(report)();
                mike = 0;
                report = report > mike;
                if(!report) { _fun00002_ip = 60; continue _fun00001 }
 57:
                mike = 1;
 60:
                mike = zulu.bind(tango)(mike);
                entity['opacity'] = mike;
                return entity;
            }
        };
        romeo = {};
        backup = 9;
        backup = yankee[backup];
        backup = echo.bind(tango)(backup);
        backup = backup.withSpring;
        romeo['withSpring'] = backup;
        romeo['scrollPosition'] = foxtrot;
        mike['__closure'] = romeo;
        romeo = 17233409273245.0;
        mike['__workletHash'] = romeo;
        romeo = _closure1_slot11;
        mike['__initData'] = romeo;
        offset = zulu.bind(offset)(mike);
        romeo = options.useCallback;
        zulu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getRootNavigationRef;
                tango = mike.bind(zulu)();
                mike = null;
                if(!(mike != tango)) { _fun00004_ip = 58; continue _fun00003 }
 41:
                zulu = tango.navigate;
                mike = 'message-requests';
                mike = zulu.bind(tango)(mike);
 58:
                return entity;
            }
        };
        mike = new Array(0);
        result = romeo.bind(options)(zulu, mike);
        romeo = options.useCallback;
        zulu = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getRootNavigationRef;
                report = mike.bind(zulu)();
                mike = null;
                if(!(mike != report)) { _fun00006_ip = 89; continue _fun00005 }
 41:
                tango = report.navigate;
                zulu = {};
                mike = 'add-friends';
                zulu['screen'] = mike;
                mike = {'sourcePage': 'Messages Tab', 'presentation': 'card'};
                zulu['params'] = mike;
                mike = 'friends';
                mike = tango.bind(report)(mike, zulu);
 89:
                return entity;
            }
        };
        mike = new Array(0);
        output = romeo.bind(options)(zulu, mike);
        zulu = options.useCallback;
        mike = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 10;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.getRootNavigationRef;
                oscar = zulu.bind(tango)();
                zulu = null;
                if(!(zulu != oscar)) { _fun00008_ip = 99; continue _fun00007 }
 41:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 11;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.navigateToSearch;
                zulu = {};
                mike = _closure1_slot5;
                mike = mike.DMS;
                zulu['type'] = mike;
                mike = {};
                golf = true;
                mike['prefetch'] = golf;
                mike = tango.bind(report)(oscar, zulu, mike);
 99:
                return entity;
            }
        };
        entity = new Array(0);
        kilo = zulu.bind(options)(mike, entity);
        zulu = _closure1_slot7;
        mike = _closure1_slot4;
        entity = {};
        entity['style'] = report;
        options = _closure1_slot6;
        report = 5;
        report = yankee[report];
        report = echo.bind(tango)(report);
        romeo = report.Text;
        report = {'style': null, 'color': 'header-primary', 'variant': 'redesign/heading-18/bold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
        foxtrot = verify.headerPanelTitle;
        report['style'] = foxtrot;
        sizing = 12;
        foxtrot = yankee[sizing];
        foxtrot = echo.bind(tango)(foxtrot);
        update = foxtrot.intl;
        backup = update.string;
        foxtrot = yankee[sizing];
        foxtrot = echo.bind(tango)(foxtrot);
        foxtrot = foxtrot.t;
        foxtrot = foxtrot.OIgYlZ;
        foxtrot = backup.bind(update)(foxtrot);
        report['children'] = foxtrot;
        romeo = options.bind(tango)(romeo, report);
        report = new Array(3);
        report[0] = romeo;
        romeo = {};
        foxtrot = verify.headerPanelButtons;
        romeo['style'] = foxtrot;
        foxtrot = 13;
        foxtrot = yankee[foxtrot];
        foxtrot = echo.bind(tango)(foxtrot);
        backup = foxtrot.IconButton;
        foxtrot = {'onPress': null, 'variant': 'secondary', 'size': 'sm'};
        foxtrot['onPress'] = kilo;
        source = 'sm';
        kilo = 14;
        kilo = yankee[kilo];
        kilo = echo.bind(tango)(kilo);
        update = kilo.MagnifyingGlassIcon;
        kilo = {};
        kilo['size'] = source;
        kilo = options.bind(tango)(update, kilo);
        foxtrot['icon'] = kilo;
        kilo = yankee[sizing];
        kilo = echo.bind(tango)(kilo);
        control = kilo.intl;
        update = control.string;
        kilo = yankee[sizing];
        kilo = echo.bind(tango)(kilo);
        kilo = kilo.t;
        kilo = kilo.5h0QOD;
        kilo = update.bind(control)(kilo);
        foxtrot['accessibilityLabel'] = kilo;
        backup = options.bind(tango)(backup, foxtrot);
        foxtrot = new Array(3);
        foxtrot[0] = backup;
        golf = _closure1_slot1;
        backup = 15;
        backup = yankee[backup];
        kilo = golf.bind(tango)(backup);
        backup = {'noMargin': true, 'onPress': null, 'alternateVariant': true};
        backup['onPress'] = result;
        backup = options.bind(tango)(kilo, backup);
        foxtrot[1] = backup;
        backup = 16;
        backup = yankee[backup];
        backup = echo.bind(tango)(backup);
        kilo = backup.Button;
        backup = {'variant': 'secondary', 'grow': true, 'size': 'sm', 'icon': null, 'onPress': null, 'maxFontSizeMultiplier': 1};
        result = 17;
        result = yankee[result];
        result = echo.bind(tango)(result);
        update = result.UserPlusIcon;
        result = {};
        result['size'] = source;
        result = options.bind(tango)(update, result);
        backup['icon'] = result;
        backup['onPress'] = output;
        output = yankee[sizing];
        output = echo.bind(tango)(output);
        result = output.intl;
        output = result.string;
        sizing = yankee[sizing];
        sizing = echo.bind(tango)(sizing);
        sizing = sizing.t;
        sizing = sizing.zIJnAw;
        sizing = output.bind(result)(sizing);
        backup['text'] = sizing;
        backup = options.bind(tango)(kilo, backup);
        foxtrot[2] = backup;
        romeo['children'] = foxtrot;
        romeo = zulu.bind(tango)(mike, romeo);
        report[1] = romeo;
        oscar = yankee[oscar];
        oscar = golf.bind(tango)(oscar);
        golf = oscar.View;
        oscar = {};
        yankee = verify.headerBorder;
        verify = new Array(2);
        verify[0] = yankee;
        verify[1] = offset;
        oscar['style'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[2] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    tango = report.bind(options)(tango);
    report = 18;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getMessagesHeaderHeight
        entity = global;
        tango = entity.Math;
        zulu = tango.min;
        mike = argFoo;
        entity = 1.75;
        zulu = zulu.bind(tango)(mike, entity);
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        mike = 5;
        mike = oscar[mike];
        tango = undefined;
        mike = report.bind(tango)(mike);
        mike = mike.TextStyleSheet;
        mike = mike.redesign/heading-18/bold;
        mike = mike.lineHeight;
        zulu = mike * zulu;
        mike = _closure1_slot9;
        zulu = zulu + mike;
        mike = 6;
        mike = oscar[mike];
        mike = report.bind(tango)(mike);
        mike = mike.SMALL_BUTTON_HEIGHT;
        mike = zulu + mike;
        zulu = _closure1_slot8;
        entity = 2;
        entity = entity * zulu;
        entity = mike + entity;
        return entity;
    };
    zulu['getMessagesHeaderHeight'] = mike;
    return entity;
})();