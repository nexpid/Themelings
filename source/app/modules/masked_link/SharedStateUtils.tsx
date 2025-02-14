// app/modules/masked_link/SharedStateUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: useUrlParts
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            entity = {};
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 2;
            tango = oscar[mike];
            zulu = undefined;
            options = report.bind(zulu)(tango);
            golf = options.getProtocol;
            tango = _closure2_slot0;
            golf = golf.bind(options)(tango);
            entity['protocol'] = golf;
            mike = oscar[mike];
            zulu = report.bind(zulu)(mike);
            mike = zulu.getHostname;
            mike = mike.bind(zulu)(tango);
            entity['hostname'] = mike;
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        options = entity.protocol;
        golf = entity.hostname;
        entity = {};
        entity['protocol'] = options;
        entity['hostname'] = golf;
        tango = report.replace;
        mike = global;
        mike = mike.HermesInternal;
        oscar = mike.concat;
        zulu = '';
        mike = '//';
        mike = oscar.bind(zulu)(options, mike, golf);
        mike = tango.bind(report)(mike, zulu);
        entity['theRestOfTheUrl'] = mike;
        return entity;
    };
    var _closure1_slot4 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    options = golf[report];
    report = argCorge;
    report = report.bind(entity)(options);
    var _closure1_slot3 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/masked_link/SharedStateUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['useUrlParts'] = tango;
    mike = function(argFoo) { // Original name: useModalState
        mike = argFoo;
        kilo = mike.url;
        var _closure2_slot0 = kilo;
        backup = mike.trustUrl;
        var _closure2_slot1 = backup;
        zulu = mike.onConfirm;
        var _closure2_slot2 = zulu;
        romeo = mike.onCancel;
        var _closure2_slot3 = romeo;
        yankee = mike.onClose;
        var _closure2_slot4 = yankee;
        oscar = _closure1_slot3;
        report = oscar.useState;
        tango = false;
        oscar = report.bind(oscar)(tango);
        report = _closure1_slot2;
        golf = undefined;
        tango = 2;
        oscar = report.bind(golf)(oscar, tango);
        tango = 0;
        report = oscar[tango];
        var _closure2_slot5 = report;
        tango = 1;
        tango = oscar[tango];
        oscar = _closure1_slot4;
        oscar = oscar.bind(golf)(kilo);
        options = oscar.protocol;
        golf = oscar.hostname;
        oscar = oscar.theRestOfTheUrl;
        foxtrot = _closure1_slot3;
        offset = foxtrot.useCallback;
        verify = new Array(5);
        verify[0] = kilo;
        verify[1] = report;
        verify[2] = backup;
        verify[3] = zulu;
        verify[4] = yankee;
        zulu = function() {
            _fun67308: for(var _fun67308_ip = 0; ; ) switch(_fun67308_ip) {
 0:
                mike = _closure2_slot5;
                if(!mike) { _fun67308_ip = 25; continue _fun67308 }
 10:
                tango = _closure2_slot1;
                zulu = _closure2_slot0;
                mike = undefined;
                mike = tango.bind(mike)(zulu);
 25:
                zulu = _closure2_slot4;
                mike = null;
                if(!(mike != zulu)) { _fun67308_ip = 45; continue _fun67308 }
 35:
                zulu = _closure2_slot4;
                mike = undefined;
                mike = zulu.bind(mike)();
 45:
                mike = _closure2_slot2;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            }
        };
        zulu = offset.bind(foxtrot)(zulu, verify);
        offset = _closure1_slot3;
        verify = offset.useCallback;
        mike = new Array(2);
        mike[0] = romeo;
        mike[1] = yankee;
        entity = function() {
            _fun67309: for(var _fun67309_ip = 0; ; ) switch(_fun67309_ip) {
 0:
                zulu = _closure2_slot4;
                mike = null;
                if(!(mike != zulu)) { _fun67309_ip = 23; continue _fun67309 }
 13:
                zulu = _closure2_slot4;
                mike = undefined;
                mike = zulu.bind(mike)();
 23:
                mike = _closure2_slot3;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            }
        };
        mike = verify.bind(offset)(entity, mike);
        entity = {};
        entity['protocol'] = options;
        entity['hostname'] = golf;
        entity['theRestOfTheUrl'] = oscar;
        entity['shouldTrustUrl'] = report;
        entity['setShouldTrustUrl'] = tango;
        entity['handleConfirm'] = zulu;
        entity['handleCancel'] = mike;
        return entity;
    };
    zulu['useModalState'] = mike;
    return entity;
})();