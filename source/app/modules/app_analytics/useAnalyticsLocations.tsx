// app/modules/app_analytics/useAnalyticsLocations.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: mergeLocations
        _fun63968: for(var _fun63968_ip = 0; ; ) switch(_fun63968_ip) {
 0:
            entity = argFoo;
            report = argBar;
            mike = report.length;
            zulu = 0;
            if(!(zulu !== mike)) { _fun63968_ip = 81; continue _fun63968 }
 17:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 3;
            tango = tango[mike];
            mike = undefined;
            tango = oscar.bind(mike)(tango);
            mike = tango.flatten;
            tango = mike.bind(tango)(report);
            mike = new Array(0);
            verify = mike;
            options = entity;
            golf = 0;
            golf = arraySpread(verify, options, golf);
            verify = mike;
            options = tango;
            zulu = arraySpread(verify, options, golf);
            return mike;
 81:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    report = golf[tango];
    tango = argCorge;
    options = tango.bind(entity)(report);
    var _closure1_slot3 = options;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    report = options.createContext;
    tango = new Array(0);
    tango = report.bind(options)(tango);
    var _closure1_slot5 = tango;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/app_analytics/useAnalyticsLocations.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: useAnalyticsLocations
        _fun63969: for(var _fun63969_ip = 0; ; ) switch(_fun63969_ip) {
 0:
            tango = 0;
            romeo = 0;
            verify = copyRestArgs(romeo);
            var _closure2_slot0 = verify;
            golf = _closure1_slot3;
            zulu = golf.useState;
            options = zulu.bind(golf)(verify);
            oscar = _closure1_slot2;
            report = undefined;
            zulu = 2;
            zulu = oscar.bind(report)(options, zulu);
            options = zulu[tango];
            var _closure2_slot1 = options;
            tango = 1;
            zulu = zulu[tango];
            var _closure2_slot2 = zulu;
            zulu = golf.useContext;
            mike = _closure1_slot5;
            mike = zulu.bind(golf)(mike);
            var _closure2_slot3 = mike;
            oscar = golf.useMemo;
            report = new Array(2);
            report[0] = options;
            report[1] = mike;
            zulu = function() {
                tango = _closure1_slot6;
                zulu = _closure2_slot3;
                mike = _closure2_slot1;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            zulu = oscar.bind(golf)(zulu, report);
            oscar = golf.useMemo;
            report = new Array(2);
            report[0] = options;
            report[1] = mike;
            mike = function() {
                tango = _closure1_slot6;
                zulu = _closure2_slot3;
                oscar = _closure2_slot1;
                report = oscar.slice;
                mike = oscar.length;
                entity = 1;
                mike = mike - entity;
                entity = 0;
                mike = report.bind(oscar)(entity, mike);
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            mike = oscar.bind(golf)(mike, report);
            oscar = golf.useEffect;
            report = new Array(2);
            report[0] = verify;
            report[1] = options;
            entity = function() {
                _fun63972: for(var _fun63972_ip = 0; ; ) switch(_fun63972_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 4;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = _closure2_slot0;
                    zulu = _closure2_slot1;
                    zulu = report.bind(entity)(tango, zulu);
                    if(zulu) { _fun63972_ip = 58; continue _fun63972 }
 45:
                    zulu = _closure2_slot2;
                    mike = _closure2_slot0;
                    mike = zulu.bind(entity)(mike);
 58:
                    return entity;
                }
            };
            entity = oscar.bind(golf)(entity, report);
            entity = {};
            entity['analyticsLocations'] = zulu;
            entity['sourceAnalyticsLocations'] = mike;
            mike = zulu.length;
            mike = mike - tango;
            zulu = zulu[mike];
            mike = null;
            tango = mike != zulu;
            if(!tango) { _fun63969_ip = 205; continue _fun63969 }
 202:
            mike = zulu;
 205:
            entity['newestAnalyticsLocation'] = mike;
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['LocationContext'] = tango;
    mike = function(argFoo) { // Original name: AnalyticsLocationProvider
        mike = argFoo;
        entity = mike.children;
        report = mike.value;
        tango = _closure1_slot4;
        mike = _closure1_slot5;
        zulu = mike.Provider;
        mike = {};
        mike['value'] = report;
        mike['children'] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    zulu['AnalyticsLocationProvider'] = mike;
    return entity;
})();