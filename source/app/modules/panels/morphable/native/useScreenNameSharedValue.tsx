// app/modules/panels/morphable/native/useScreenNameSharedValue.tsx
export default (function(_, argBar, __, argCorge, ___, argFred, argPlugh) {
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
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/panels/morphable/native/useScreenNameSharedValue.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useScreenNameSharedValue
        _fun121289: for(var _fun121289_ip = 0; ; ) switch(_fun121289_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            entity = 1;
            entity = report[entity];
            oscar = undefined;
            golf = tango.bind(oscar)(entity);
            entity = golf.getRootNavigationRef;
            offset = entity.bind(golf)();
            entity = 2;
            entity = report[entity];
            report = tango.bind(oscar)(entity);
            tango = report.useSharedValue;
            golf = null;
            entity = golf == offset;
            yankee = undefined;
            if(entity) { _fun121289_ip = 75; continue _fun121289 }
 65:
            entity = offset.isReady;
            yankee = entity.bind(offset)();
 75:
            options = 'unknown';
            verify = true;
            entity = options;
            if(!(verify === yankee)) { _fun121289_ip = 125; continue _fun121289 }
 88:
            verify = offset.getCurrentRoute;
            verify = verify.bind(offset)();
            offset = golf == verify;
            oscar = undefined;
            if(offset) { _fun121289_ip = 112; continue _fun121289 }
 107:
            oscar = verify.name;
 112:
            golf = golf != oscar;
            entity = options;
            if(!golf) { _fun121289_ip = 125; continue _fun121289 }
 122:
            entity = oscar;
 125:
            entity = tango.bind(report)(entity);
            var _closure2_slot0 = entity;
            report = _closure1_slot2;
            tango = report.useEffect;
            zulu = new Array(1);
            zulu[0] = entity;
            mike = function() {
                _fun121290: for(var _fun121290_ip = 0; ; ) switch(_fun121290_ip) {
 0:
                    report = function() { // Original name: handleStateChange
                        _fun121291: for(var _fun121291_ip = 0; ; ) switch(_fun121291_ip) {
 0:
                            zulu = _closure3_slot0;
                            entity = null;
                            if(!(entity != zulu)) { _fun121291_ip = 89; continue _fun121291 }
 13:
                            tango = _closure3_slot0;
                            zulu = tango.isReady;
                            zulu = zulu.bind(tango)();
                            if(!zulu) { _fun121291_ip = 89; continue _fun121291 }
 30:
                            zulu = _closure3_slot0;
                            mike = zulu.getCurrentRoute;
                            report = mike.bind(zulu)();
                            zulu = _closure2_slot0;
                            mike = zulu.set;
                            oscar = entity == report;
                            tango = undefined;
                            if(oscar) { _fun121291_ip = 70; continue _fun121291 }
 65:
                            tango = report.name;
 70:
                            report = entity != tango;
                            entity = 'unknown';
                            if(!report) { _fun121291_ip = 84; continue _fun121291 }
 81:
                            entity = tango;
 84:
                            entity = mike.bind(zulu)(entity);
 89:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure3_slot1 = report;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 1;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.getRootNavigationRef;
                    tango = zulu.bind(tango)();
                    var _closure3_slot0 = tango;
                    zulu = null;
                    if(!(zulu == tango)) { _fun121290_ip = 60; continue _fun121290 }
 58:
                    return mike;
 60:
                    zulu = tango.addListener;
                    mike = 'state';
                    mike = zulu.bind(tango)(mike, report);
                    entity = function() {
                        tango = _closure3_slot0;
                        zulu = tango.removeListener;
                        mike = _closure3_slot1;
                        entity = 'state';
                        entity = zulu.bind(tango)(entity, mike);
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                }
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();