// discord_common/js/packages/flux/useStateFromStores.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: defaultAreStatesEqual
        mike = argFoo;
        entity = argBar;
        entity = mike === entity;
        return entity;
    };
    var _closure1_slot7 = entity;
    tango = function(argFoo, argBar, argBaz) { // Original name: useStateFromStores
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            tango = argBar;
            yankee = argBaz;
            verify = arguments[3];
            var _closure2_slot0 = options;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = yankee;
            report = undefined;
            if(!(verify === report)) { _fun00002_ip = 39; continue _fun00001 }
 32:
            verify = _closure1_slot7;
 39:
            var _closure2_slot3 = verify;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            entity = _closure1_slot5;
            oscar = null;
            entity = entity.bind(report)(oscar);
            golf = entity.current;
            if(!(oscar == golf)) { _fun00002_ip = 110; continue _fun00001 }
 78:
            golf = {};
            golf['stores'] = options;
            golf['areStatesEqual'] = verify;
            golf['getStateFromStores'] = tango;
            golf['prevDeps'] = report;
            golf['state'] = report;
            entity['current'] = golf;
 110:
            entity = entity.current;
            _closure2_slot4 = entity;
            options = entity.state;
            _closure2_slot5 = options;
            if(!(oscar != yankee)) { _fun00002_ip = 176; continue _fun00001 }
 132:
            offset = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 2;
            golf = romeo[golf];
            offset = offset.bind(report)(golf);
            golf = offset.areArraysShallowEqual;
            entity = entity.prevDeps;
            golf = golf.bind(offset)(yankee, entity);
            entity = options;
            if(golf) { _fun00002_ip = 206; continue _fun00001 }
 176:
            tango = tango.bind(report)();
            golf = oscar != options;
            if(!golf) { _fun00002_ip = 193; continue _fun00001 }
 187:
            golf = verify.bind(report)(options, tango);
 193:
            entity = options;
            if(golf) { _fun00002_ip = 206; continue _fun00001 }
 199:
            _closure2_slot5 = tango;
            entity = tango;
 206:
            golf = _closure1_slot6;
            tango = function() {
                zulu = _closure2_slot4;
                mike = _closure2_slot1;
                zulu['getStateFromStores'] = mike;
                zulu = _closure2_slot4;
                mike = _closure2_slot2;
                zulu['prevDeps'] = mike;
                mike = _closure2_slot4;
                entity = _closure2_slot5;
                mike['state'] = entity;
                entity = undefined;
                return entity;
            };
            tango = golf.bind(report)(tango);
            tango = _closure1_slot4;
            golf = tango.bind(report)(oscar);
            oscar = _closure1_slot3;
            tango = 2;
            oscar = oscar.bind(report)(golf, tango);
            tango = 1;
            tango = oscar[tango];
            _closure2_slot6 = tango;
            tango = _closure1_slot6;
            zulu = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 3;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                report = mike.BatchedStoreListener;
                golf = _closure2_slot0;
                mike = report.prototype;
                zulu = Object.create(mike, {constructor: {value: report}});
                oscar = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = _closure2_slot4;
                        entity = zulu.getStateFromStores;
                        tango = entity.bind(zulu)();
                        report = _closure2_slot3;
                        entity = _closure2_slot4;
                        zulu = entity.state;
                        entity = undefined;
                        zulu = report.bind(entity)(zulu, tango);
                        if(zulu) { _fun00004_ip = 62; continue _fun00003 }
 41:
                        zulu = _closure2_slot4;
                        zulu['state'] = tango;
                        zulu = _closure2_slot6;
                        mike = {};
                        mike = zulu.bind(entity)(mike);
 62:
                        return entity;
                    }
                };
                options = zulu;
                mike = new options[report](golf, oscar, report);
                tango = mike instanceof Object ? mike : zulu;
                var _closure3_slot0 = tango;
                zulu = tango.attach;
                mike = 'useStateFromStores';
                mike = zulu.bind(tango)(mike);
                entity = function() {
                    mike = _closure3_slot0;
                    entity = mike.detach;
                    entity = entity.bind(mike)();
                    return entity;
                };
                return entity;
            };
            mike = new Array(0);
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.useState;
    var _closure1_slot4 = options;
    options = report.useRef;
    var _closure1_slot5 = options;
    report = report.useInsertionEffect;
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/flux/useStateFromStores.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: statesWillNeverBeEqual
        entity = false;
        return entity;
    };
    zulu['statesWillNeverBeEqual'] = report;
    zulu['useStateFromStores'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: useStateFromStoresObject
        oscar = _closure1_slot8;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 2;
        entity = zulu[entity];
        report = undefined;
        golf = mike.bind(report)(entity);
        offset = argFoo;
        verify = argBar;
        options = argBaz;
        yankee = undefined;
        entity = yankee[oscar](offset, verify, options, golf, oscar);
        return entity;
    };
    zulu['useStateFromStoresObject'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: useStateFromStoresArray
        oscar = _closure1_slot8;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 2;
        entity = zulu[entity];
        report = undefined;
        entity = mike.bind(report)(entity);
        golf = entity.areArraysShallowEqual;
        offset = argFoo;
        verify = argBar;
        options = argBaz;
        yankee = undefined;
        entity = yankee[oscar](offset, verify, options, golf, oscar);
        return entity;
    };
    zulu['useStateFromStoresArray'] = mike;
    return entity;
})();