// app/modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    golf = report.bind(entity)(tango);
    tango = golf.createNavigatorFactory;
    mike = function(argFoo) { // Original name: ChatPanelNativeStackNavigator
        tango = argFoo;
        kilo = tango.id;
        backup = tango.initialRouteName;
        foxtrot = tango.children;
        romeo = tango.screenListeners;
        offset = tango.screenOptions;
        zulu = {'id': 0, 'initialRouteName': 0, 'children': 0, 'screenListeners': 0, 'screenOptions': 0};
        output = null;
        result = zulu;
        entity = silentSetPrototypeOf(result, output);
        result = {};
        output = tango;
        sizing = zulu;
        golf = copyDataProperties(result, output, sizing);
        oscar = _closure1_slot0;
        yankee = _closure1_slot1;
        zulu = 2;
        report = yankee[zulu];
        tango = undefined;
        verify = oscar.bind(tango)(report);
        options = verify.useNavigationBuilder;
        zulu = yankee[zulu];
        zulu = oscar.bind(tango)(zulu);
        report = zulu.StackRouter;
        zulu = {};
        zulu['id'] = kilo;
        zulu['initialRouteName'] = backup;
        zulu['children'] = foxtrot;
        zulu['screenListeners'] = romeo;
        zulu['screenOptions'] = offset;
        zulu = options.bind(verify)(report, zulu);
        report = zulu.state;
        var _closure2_slot0 = report;
        options = zulu.descriptors;
        verify = zulu.navigation;
        var _closure2_slot1 = verify;
        zulu = zulu.NavigationContent;
        foxtrot = _closure1_slot2;
        romeo = foxtrot.useMemo;
        offset = new Array(1);
        offset[0] = report;
        report = function() {
            _fun111530: for(var _fun111530_ip = 0; ; ) switch(_fun111530_ip) {
 0:
                entity = {};
                mike = _closure2_slot0;
                sizing = entity;
                kilo = mike;
                zulu = copyDataProperties(sizing, kilo);
                kilo = mike.routes;
                zulu = new Array(0);
                tango = 0;
                sizing = zulu;
                backup = 0;
                mike = arraySpread(sizing, kilo, backup);
                mike = 'routes';
                entity[mike] = zulu;
                yankee = new Array(0);
                mike = new Array(0);
                zulu = entity.routes;
                zulu = zulu.length;
                zulu = tango < zulu;
                verify = 3;
                options = undefined;
                golf = null;
                oscar = 0;
                report = 0;
                if(!zulu) { _fun111530_ip = 195; continue _fun111530 }
 89:
                zulu = entity.routes;
                foxtrot = zulu[report];
                romeo = _closure1_slot0;
                zulu = _closure1_slot1;
                zulu = zulu[verify];
                romeo = romeo.bind(options)(zulu);
                zulu = romeo.coerceChannelRoute;
                zulu = zulu.bind(romeo)(foxtrot);
                if(!(golf == zulu)) { _fun111530_ip = 146; continue _fun111530 }
 131:
                zulu = mike.push;
                zulu = zulu.bind(mike)(foxtrot);
                romeo = oscar;
                _fun111530_ip = 171; continue _fun111530;
 146:
                zulu = yankee.push;
                zulu = zulu.bind(yankee)(foxtrot);
                zulu = entity.index;
                romeo = oscar;
                if(!(report <= zulu)) { _fun111530_ip = 171; continue _fun111530 }
 168:
                romeo = oscar + 1;
 171:
                report = report + 1;
                zulu = entity.routes;
                zulu = zulu.length;
                oscar = romeo;
                tango = oscar;
                if(report < zulu) { _fun111530_ip = 89; continue _fun111530 }
 195:
                zulu = entity.index;
                zulu = zulu - tango;
                entity['index'] = zulu;
                entity['routes'] = mike;
                return entity;
            }
        };
        offset = romeo.bind(foxtrot)(report, offset);
        var _closure2_slot2 = offset;
        romeo = foxtrot.useEffect;
        report = new Array(3);
        report[0] = verify;
        backup = offset.index;
        report[1] = backup;
        backup = offset.key;
        report[2] = backup;
        mike = function() {
            _fun111531: for(var _fun111531_ip = 0; ; ) switch(_fun111531_ip) {
 0:
                entity = _closure2_slot1;
                report = null;
                zulu = report == entity;
                entity = undefined;
                if(zulu) { _fun111531_ip = 66; continue _fun111531 }
 18:
                zulu = _closure2_slot1;
                zulu = zulu.addListener;
                zulu = report == zulu;
                entity = undefined;
                if(zulu) { _fun111531_ip = 66; continue _fun111531 }
 37:
                report = _closure2_slot1;
                tango = report.addListener;
                zulu = 'tabPress';
                mike = function(argFoo) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    zulu = _closure2_slot1;
                    entity = zulu.isFocused;
                    entity = entity.bind(zulu)();
                    var _closure4_slot1 = entity;
                    entity = global;
                    zulu = entity.requestAnimationFrame;
                    entity = undefined;
                    mike = function() {
                        _fun111533: for(var _fun111533_ip = 0; ; ) switch(_fun111533_ip) {
 0:
                            entity = _closure2_slot2;
                            mike = entity.index;
                            entity = 0;
                            entity = mike > entity;
                            if(!entity) { _fun111533_ip = 28; continue _fun111533 }
 21:
                            entity = _closure4_slot1;
 28:
                            if(!entity) { _fun111533_ip = 47; continue _fun111533 }
 31:
                            mike = _closure4_slot0;
                            mike = mike.defaultPrevented;
                            entity = !mike;
 47:
                            if(!entity) { _fun111533_ip = 132; continue _fun111533 }
 50:
                            zulu = _closure2_slot1;
                            mike = zulu.dispatch;
                            entity = {};
                            golf = _closure1_slot0;
                            oscar = _closure1_slot1;
                            report = 2;
                            oscar = oscar[report];
                            report = undefined;
                            report = golf.bind(report)(oscar);
                            oscar = report.StackActions;
                            report = oscar.popToTop;
                            options = report.bind(oscar)();
                            verify = entity;
                            report = copyDataProperties(verify, options);
                            tango = _closure2_slot2;
                            report = tango.key;
                            tango = 'target';
                            entity[tango] = report;
                            entity = mike.bind(zulu)(entity);
 132:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = tango.bind(report)(zulu, mike);
 66:
                return entity;
            }
        };
        mike = romeo.bind(foxtrot)(mike, report);
        mike = _closure1_slot3;
        entity = {};
        report = 4;
        report = yankee[report];
        report = oscar.bind(tango)(report);
        oscar = report.NativeStackView;
        report = {};
        result = report;
        output = golf;
        golf = copyDataProperties(result, output);
        golf = 'state';
        report[golf] = offset;
        golf = 'navigation';
        report[golf] = verify;
        golf = 'descriptors';
        report[golf] = options;
        report = mike.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = mike.bind(tango)(zulu, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();