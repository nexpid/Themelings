// app/modules/safe_area/SafeAreaProvider.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun111433: for(var _fun111433_ip = 0; ; ) switch(_fun111433_ip) {
 0:
        oscar = argBar;
        verify = argBaz;
        zulu = argFred;
        golf = argPlugh;
        var _closure1_slot0 = oscar;
        var _closure1_slot1 = verify;
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
        tango = tango.bind(entity)(report);
        var _closure1_slot3 = tango;
        foxtrot = 1;
        tango = golf[foxtrot];
        tango = oscar.bind(entity)(tango);
        yankee = tango.StyleSheet;
        options = tango.requireNativeComponent;
        tango = 2;
        tango = golf[tango];
        tango = oscar.bind(entity)(tango);
        tango = tango.jsx;
        var _closure1_slot4 = tango;
        tango = {};
        report = 3;
        report = golf[report];
        report = oscar.bind(entity)(report);
        report = report.INITIAL_SAFE_AREA_INSETS;
        tango['insets'] = report;
        report = {'x': 0, 'y': 0};
        offset = 4;
        romeo = golf[offset];
        backup = oscar.bind(entity)(romeo);
        romeo = backup.getWindowDimensions;
        romeo = romeo.bind(backup)();
        romeo = romeo.width;
        report['width'] = romeo;
        offset = golf[offset];
        romeo = oscar.bind(entity)(offset);
        offset = romeo.getWindowDimensions;
        offset = offset.bind(romeo)();
        offset = offset.height;
        report['height'] = offset;
        tango['frame'] = report;
        var _closure1_slot5 = tango;
        offset = yankee.create;
        report = {};
        romeo = {};
        romeo['flex'] = foxtrot;
        report['flex'] = romeo;
        report = offset.bind(yankee)(report);
        var _closure1_slot6 = report;
        report = 5;
        report = golf[report];
        offset = oscar.bind(entity)(report);
        report = offset.isAndroid;
        report = report.bind(offset)();
        if(report) { _fun111433_ip = 289; continue _fun111433 }
 276:
        report = 'DCDSafeArea';
        report = options.bind(entity)(report);
        _fun111433_ip = 301; continue _fun111433;
 289:
        options = 6;
        options = golf[options];
        report = verify.bind(entity)(options);
 301:
        var _closure1_slot7 = report;
        report = 10;
        report = golf[report];
        golf = oscar.bind(entity)(report);
        oscar = golf.fileFinishedImporting;
        report = 'modules/safe_area/SafeAreaProvider.native.tsx';
        report = oscar.bind(golf)(report);
        zulu['INITIAL_SAFE_AREA_METRICS'] = tango;
        mike = function(argFoo) {
            entity = argFoo;
            golf = entity.children;
            tango = _closure1_slot3;
            zulu = tango.useCallback;
            mike = function(argFoo) {
                _fun111435: for(var _fun111435_ip = 0; ; ) switch(_fun111435_ip) {
 0:
                    entity = argFoo;
                    report = entity.nativeEvent;
                    var _closure3_slot0 = report;
                    zulu = report.imeInsetsBottom;
                    entity = null;
                    if(!(entity == zulu)) { _fun111435_ip = 34; continue _fun111435 }
 26:
                    entity = 0;
                    report['imeInsetsBottom'] = entity;
 34:
                    oscar = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 7;
                    tango = tango[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(tango);
                    tango = oscar.getState;
                    tango = tango.bind(oscar)();
                    oscar = tango.safeAreaInsets;
                    golf = oscar.bottom;
                    tango = report.bottom;
                    tango = golf === tango;
                    if(!tango) { _fun111435_ip = 106; continue _fun111435 }
 92:
                    options = oscar.top;
                    golf = report.top;
                    tango = options === golf;
 106:
                    if(!tango) { _fun111435_ip = 123; continue _fun111435 }
 109:
                    options = oscar.left;
                    golf = report.left;
                    tango = options === golf;
 123:
                    if(!tango) { _fun111435_ip = 140; continue _fun111435 }
 126:
                    options = oscar.right;
                    golf = report.right;
                    tango = options === golf;
 140:
                    if(!tango) { _fun111435_ip = 159; continue _fun111435 }
 143:
                    oscar = oscar.imeInsetsBottom;
                    report = report.imeInsetsBottom;
                    tango = oscar === report;
 159:
                    if(tango) { _fun111435_ip = 200; continue _fun111435 }
 162:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 8;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.batchUpdates;
                    mike = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 7;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.setState;
                        mike = function() {
                            entity = {};
                            mike = _closure3_slot0;
                            entity['safeAreaInsets'] = mike;
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 200:
                    return entity;
                }
            };
            entity = new Array(0);
            entity = zulu.bind(tango)(mike, entity);
            tango = _closure1_slot4;
            zulu = _closure1_slot7;
            mike = {};
            mike['onSafeAreaInsetsDidChange'] = entity;
            entity = _closure1_slot6;
            entity = entity.flex;
            mike['style'] = entity;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            entity = 9;
            report = report[entity];
            entity = undefined;
            report = oscar.bind(entity)(report);
            oscar = report.SafeAreaProvider;
            report = {};
            options = _closure1_slot5;
            report['initialMetrics'] = options;
            report['children'] = golf;
            report = tango.bind(entity)(oscar, report);
            mike['children'] = report;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        zulu['SafeAreaProvider'] = mike;
        return entity;
    }
})();