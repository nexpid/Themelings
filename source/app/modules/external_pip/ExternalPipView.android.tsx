// app/modules/external_pip/ExternalPipView.android.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: requestFreezeLock
        mike = _closure1_slot5;
        entity = mike.getState;
        zulu = entity.bind(mike)();
        mike = zulu.requestFreezeLock;
        entity = {};
        tango = argFoo;
        entity['lockEnabled'] = tango;
        tango = 'external-pip';
        entity['key'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot7 = entity;
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
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/external_pip/ExternalPipView.android.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: ExternalPipView
        _fun121201: for(var _fun121201_ip = 0; ; ) switch(_fun121201_ip) {
 0:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 5;
            zulu = options[zulu];
            report = undefined;
            tango = golf.bind(report)(zulu);
            zulu = {};
            oscar = 6;
            oscar = options[oscar];
            golf = golf.bind(report)(oscar);
            oscar = golf.isSupported;
            oscar = oscar.bind(golf)();
            oscar = !oscar;
            zulu['disabled'] = oscar;
            zulu = tango.bind(report)(zulu);
            tango = zulu.externalPipEnabled;
            var _closure2_slot0 = tango;
            zulu = function() { // Original name: useExternalPipActive
                oscar = _closure1_slot4;
                tango = oscar.useState;
                zulu = false;
                report = tango.bind(oscar)(zulu);
                tango = _closure1_slot3;
                zulu = undefined;
                mike = 2;
                tango = tango.bind(zulu)(report, mike);
                mike = 0;
                zulu = tango[mike];
                mike = 1;
                mike = tango[mike];
                var _closure3_slot0 = mike;
                report = oscar.useCallback;
                tango = function(argFoo) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 4;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.batchUpdates;
                    mike = function() {
                        mike = _closure3_slot0;
                        zulu = _closure4_slot0;
                        entity = undefined;
                        mike = mike.bind(entity)(zulu);
                        mike = _closure1_slot7;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = new Array(0);
                mike = report.bind(oscar)(tango, mike);
                report = oscar.useEffect;
                tango = function() {
                    entity = function() {
                        zulu = _closure1_slot7;
                        entity = undefined;
                        mike = false;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    return entity;
                };
                entity = new Array(0);
                entity = report.bind(oscar)(tango, entity);
                entity = {};
                entity['externalPipActive'] = zulu;
                entity['setExternalPipActive'] = mike;
                return entity;
            };
            oscar = zulu.bind(report)();
            zulu = oscar.externalPipActive;
            options = oscar.setExternalPipActive;
            var _closure2_slot1 = options;
            golf = _closure1_slot4;
            verify = golf.useEffect;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.setEnabled;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            tango = verify.bind(golf)(tango, oscar);
            verify = golf.useEffect;
            oscar = new Array(1);
            oscar[0] = options;
            tango = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.addOnPipModeChangedListener;
                mike = function(argFoo) {
                    zulu = _closure2_slot1;
                    entity = undefined;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    _fun121210: for(var _fun121210_ip = 0; ; ) switch(_fun121210_ip) {
 0:
                        zulu = _closure3_slot0;
                        entity = null;
                        zulu = entity == zulu;
                        entity = undefined;
                        if(zulu) { _fun121210_ip = 32; continue _fun121210 }
 18:
                        zulu = _closure3_slot0;
                        mike = zulu.remove;
                        entity = mike.bind(zulu)();
 32:
                        return entity;
                    }
                };
                return entity;
            };
            tango = verify.bind(golf)(tango, oscar);
            oscar = golf.useEffect;
            tango = new Array(1);
            tango[0] = options;
            entity = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.addOnPipModeWillChangeListener;
                mike = function() {
                    zulu = _closure2_slot1;
                    entity = undefined;
                    mike = true;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    _fun121213: for(var _fun121213_ip = 0; ; ) switch(_fun121213_ip) {
 0:
                        zulu = _closure3_slot0;
                        entity = null;
                        zulu = entity == zulu;
                        entity = undefined;
                        if(zulu) { _fun121213_ip = 32; continue _fun121213 }
 18:
                        zulu = _closure3_slot0;
                        mike = zulu.remove;
                        entity = mike.bind(zulu)();
 32:
                        return entity;
                    }
                };
                return entity;
            };
            entity = oscar.bind(golf)(entity, tango);
            entity = null;
            if(!zulu) { _fun121201_ip = 219; continue _fun121201 }
 187:
            tango = _closure1_slot6;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 7;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            entity = tango.bind(report)(zulu, mike);
 219:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();