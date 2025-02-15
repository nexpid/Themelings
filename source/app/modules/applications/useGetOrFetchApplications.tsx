// app/modules/applications/useGetOrFetchApplications.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: useGetOrFetchApplications
        _fun75868: for(var _fun75868_ip = 0; ; ) switch(_fun75868_ip) {
 0:
            options = argFoo;
            zulu = arguments[1];
            var _closure2_slot0 = options;
            report = undefined;
            if(!(zulu === report)) { _fun75868_ip = 20; continue _fun75868 }
 18:
            zulu = true;
 20:
            var _closure2_slot1 = zulu;
            var _closure2_slot2 = report;
            golf = _closure1_slot3;
            oscar = golf.useRef;
            tango = new Array(0);
            tango = oscar.bind(golf)(tango);
            _closure2_slot2 = tango;
            golf = _closure1_slot3;
            oscar = golf.useEffect;
            tango = new Array(2);
            tango[0] = options;
            tango[1] = zulu;
            zulu = function() {
                _fun75869: for(var _fun75869_ip = 0; ; ) switch(_fun75869_ip) {
 0:
                    mike = _closure2_slot1;
                    if(!mike) { _fun75869_ip = 63; continue _fun75869 }
 10:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 2;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = report.bind(zulu)(tango);
                    report = oscar.areArraysShallowEqual;
                    tango = _closure2_slot0;
                    zulu = _closure2_slot2;
                    zulu = zulu.current;
                    zulu = report.bind(oscar)(tango, zulu);
                    mike = !zulu;
 63:
                    if(!mike) { _fun75869_ip = 187; continue _fun75869 }
 66:
                    tango = _closure1_slot1;
                    offset = _closure1_slot2;
                    mike = 3;
                    mike = offset[mike];
                    verify = undefined;
                    oscar = tango.bind(verify)(mike);
                    report = oscar.fetchApplications;
                    mike = 4;
                    mike = offset[mike];
                    tango = tango.bind(verify)(mike);
                    mike = _closure2_slot0;
                    golf = tango.bind(verify)(mike);
                    tango = golf.filter;
                    options = _closure1_slot0;
                    zulu = 5;
                    zulu = offset[zulu];
                    zulu = options.bind(verify)(zulu);
                    zulu = zulu.isNotNullish;
                    tango = tango.bind(golf)(zulu);
                    zulu = tango.uniq;
                    tango = zulu.bind(tango)();
                    zulu = tango.value;
                    tango = zulu.bind(tango)();
                    zulu = false;
                    zulu = report.bind(oscar)(tango, zulu);
                    entity = _closure2_slot2;
                    entity['current'] = mike;
 187:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(zulu, tango);
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 6;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.useStateFromStoresArray;
            report = _closure1_slot4;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                zulu = _closure2_slot0;
                mike = zulu.map;
                entity = function(argFoo) {
                    _fun75871: for(var _fun75871_ip = 0; ; ) switch(_fun75871_ip) {
 0:
                        tango = argFoo;
                        entity = null;
                        mike = entity != tango;
                        entity = undefined;
                        if(!mike) { _fun75871_ip = 32; continue _fun75871 }
 14:
                        zulu = _closure1_slot4;
                        mike = zulu.getApplication;
                        entity = mike.bind(zulu)(tango);
 32:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    verify = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/applications/useGetOrFetchApplications.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useGetOrFetchApplication
        _fun75872: for(var _fun75872_ip = 0; ; ) switch(_fun75872_ip) {
 0:
            oscar = argFoo;
            tango = arguments[1];
            zulu = undefined;
            if(!(tango === zulu)) { _fun75872_ip = 14; continue _fun75872 }
 12:
            tango = true;
 14:
            mike = _closure1_slot5;
            entity = null;
            if(!(entity == oscar)) { _fun75872_ip = 33; continue _fun75872 }
 27:
            entity = new Array(0);
            _fun75872_ip = 44; continue _fun75872;
 33:
            report = new Array(1);
            report[0] = oscar;
            entity = report;
 44:
            mike = mike.bind(zulu)(entity, tango);
            entity = 0;
            entity = mike[entity];
            return entity;
        }
    };
    zulu['useGetOrFetchApplication'] = mike;
    return entity;
})();