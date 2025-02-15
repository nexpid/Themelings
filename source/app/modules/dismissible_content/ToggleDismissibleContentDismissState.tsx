// app/modules/dismissible_content/ToggleDismissibleContentDismissState.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 5;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/dismissible_content/ToggleDismissibleContentDismissState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: toggleDismissibleContentDismissState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            oscar = _closure1_slot0;
            entity = _closure1_slot1;
            options = 3;
            entity = entity[options];
            tango = undefined;
            entity = oscar.bind(tango)(entity);
            oscar = entity.versionedDismissibleContents;
            entity = oscar.indexOf;
            entity = entity.bind(oscar)(report);
            oscar = -1;
            if(!(oscar === entity)) { _fun00002_ip = 125; continue _fun00001 }
 56:
            golf = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[options];
            entity = golf.bind(tango)(entity);
            golf = entity.timeRecurringDismissibleContents;
            entity = golf.indexOf;
            entity = entity.bind(golf)(report);
            if(!(oscar === entity)) { _fun00002_ip = 111; continue _fun00001 }
 93:
            oscar = function(argFoo, argBar) { // Original name: toggleSingleUseDismissibleContent
                report = argFoo;
                var _closure3_slot0 = report;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 2;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.hasBit;
                entity = argBar;
                zulu = zulu.bind(tango)(entity, report);
                var _closure3_slot1 = zulu;
                entity = {};
                entity['isDismissed'] = zulu;
                mike = function() { // Original name: handleToggleDismissState
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = _closure3_slot1;
                        report = _closure1_slot0;
                        tango = _closure1_slot1;
                        entity = 1;
                        tango = tango[entity];
                        entity = undefined;
                        tango = report.bind(entity)(tango);
                        if(zulu) { _fun00004_ip = 52; continue _fun00003 }
 35:
                        report = tango.addDismissedContent;
                        zulu = _closure3_slot0;
                        zulu = report.bind(tango)(zulu);
                        _fun00004_ip = 67; continue _fun00003;
 52:
                        zulu = tango.removeDismissedContent;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
 67:
                        return entity;
                    }
                };
                entity['handleToggleDismissState'] = mike;
                mike = null;
                entity['recurringDismissibleContentInfo'] = mike;
                return entity;
            };
            entity = argBar;
            entity = oscar.bind(tango)(report, entity);
            _fun00002_ip = 123; continue _fun00001;
 111:
            oscar = function(argFoo) { // Original name: toggleTimeRecurringDismissibleContent
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 0;
                    entity = zulu[entity];
                    zulu = undefined;
                    tango = tango.bind(zulu)(entity);
                    entity = tango.isTimeRecurringDismissibleContentDismissed;
                    entity = entity.bind(tango)(report);
                    report = entity.isDismissed;
                    var _closure3_slot1 = report;
                    tango = entity.lastDismissedAtMs;
                    entity = {};
                    entity['isDismissed'] = report;
                    mike = function() { // Original name: handleToggleDismissState
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            zulu = _closure3_slot1;
                            report = _closure1_slot0;
                            tango = _closure1_slot1;
                            entity = 1;
                            tango = tango[entity];
                            entity = undefined;
                            tango = report.bind(entity)(tango);
                            if(zulu) { _fun00008_ip = 52; continue _fun00007 }
 35:
                            report = tango.addTimeRecurringDismissedContent;
                            zulu = _closure3_slot0;
                            zulu = report.bind(tango)(zulu);
                            _fun00008_ip = 67; continue _fun00007;
 52:
                            zulu = tango.removeDismissedRecurringContent;
                            mike = _closure3_slot0;
                            mike = zulu.bind(tango)(mike);
 67:
                            return entity;
                        }
                    };
                    entity['handleToggleDismissState'] = mike;
                    mike = {};
                    mike['lastDismissedVersion'] = zulu;
                    report = null;
                    report = report != tango;
                    if(!report) { _fun00006_ip = 98; continue _fun00005 }
 95:
                    zulu = tango;
 98:
                    mike['lastDismissedAtMs'] = zulu;
                    entity['recurringDismissibleContentInfo'] = mike;
                    return entity;
                }
            };
            entity = oscar.bind(tango)(report);
 123:
            _fun00002_ip = 169; continue _fun00001;
 125:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 4;
            zulu = golf[zulu];
            oscar = oscar.bind(tango)(zulu);
            zulu = oscar.getVersionedDismissibleContentCurrentVersion;
            zulu = zulu.bind(oscar)(report);
            mike = function(argFoo, argBar) { // Original name: toggleVersionedDismissibleContent
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    entity = argBar;
                    var _closure3_slot1 = entity;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 0;
                    entity = zulu[entity];
                    zulu = undefined;
                    tango = tango.bind(zulu)(entity);
                    entity = tango.isVersionedDismissibleContentDismissed;
                    entity = entity.bind(tango)(report);
                    tango = entity.isDismissed;
                    var _closure3_slot2 = tango;
                    report = entity.lastDismissedVersion;
                    entity = {};
                    entity['isDismissed'] = tango;
                    mike = function() { // Original name: handleToggleDismissState
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zulu = _closure3_slot2;
                            report = _closure1_slot0;
                            tango = _closure1_slot1;
                            entity = 1;
                            tango = tango[entity];
                            entity = undefined;
                            tango = report.bind(entity)(tango);
                            if(zulu) { _fun00012_ip = 57; continue _fun00011 }
 35:
                            oscar = tango.addVersionedDismissedContent;
                            report = _closure3_slot0;
                            zulu = _closure3_slot1;
                            zulu = oscar.bind(tango)(report, zulu);
                            _fun00012_ip = 72; continue _fun00011;
 57:
                            zulu = tango.removeDismissedRecurringContent;
                            mike = _closure3_slot0;
                            mike = zulu.bind(tango)(mike);
 72:
                            return entity;
                        }
                    };
                    entity['handleToggleDismissState'] = mike;
                    mike = {};
                    tango = null;
                    oscar = tango != report;
                    tango = undefined;
                    if(!oscar) { _fun00010_ip = 102; continue _fun00009 }
 99:
                    tango = report;
 102:
                    mike['lastDismissedVersion'] = tango;
                    mike['lastDismissedAtMs'] = zulu;
                    entity['recurringDismissibleContentInfo'] = mike;
                    return entity;
                }
            };
            entity = mike.bind(tango)(report, zulu);
 169:
            return entity;
        }
    };
    zulu['toggleDismissibleContentDismissState'] = mike;
    return entity;
})();