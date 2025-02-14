// app/modules/threads/ThreadAutoArchive.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = options;
    report = function() { // Original name: getAutoArchiveOptions
        mike = {};
        options = _closure1_slot0;
        verify = _closure1_slot2;
        tango = 1;
        entity = verify[tango];
        golf = undefined;
        entity = options.bind(golf)(entity);
        oscar = entity.intl;
        report = oscar.string;
        entity = verify[tango];
        entity = options.bind(golf)(entity);
        entity = entity.t;
        entity = entity.cs8A1d;
        entity = report.bind(oscar)(entity);
        mike['label'] = entity;
        entity = _closure1_slot4;
        mike['value'] = entity;
        entity = new Array(4);
        entity[0] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        offset = report.intl;
        oscar = offset.string;
        report = verify[tango];
        report = options.bind(golf)(report);
        report = report.t;
        report = report.zFKbrK;
        report = oscar.bind(offset)(report);
        mike['label'] = report;
        report = _closure1_slot5;
        mike['value'] = report;
        entity[1] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        offset = report.intl;
        oscar = offset.string;
        report = verify[tango];
        report = options.bind(golf)(report);
        report = report.t;
        report = report.TmPIZW;
        report = oscar.bind(offset)(report);
        mike['label'] = report;
        report = _closure1_slot6;
        mike['value'] = report;
        entity[2] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        oscar = report.intl;
        report = oscar.string;
        tango = verify[tango];
        tango = options.bind(golf)(tango);
        tango = tango.t;
        tango = tango./7i2en;
        tango = report.bind(oscar)(tango);
        mike['label'] = tango;
        zulu = _closure1_slot7;
        mike['value'] = zulu;
        entity[3] = mike;
        return entity;
    };
    var _closure1_slot8 = report;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    tango = tango.DEFAULT_AUTO_ARCHIVE_DURATION;
    var _closure1_slot3 = tango;
    tango = 60;
    var _closure1_slot4 = tango;
    tango = 1440;
    var _closure1_slot5 = tango;
    tango = 4320;
    var _closure1_slot6 = tango;
    tango = 10080;
    var _closure1_slot7 = tango;
    tango = 2;
    tango = options[tango];
    oscar = oscar.bind(entity)(tango);
    tango = function() {
        mike = _closure1_slot8;
        entity = undefined;
        zulu = mike.bind(entity)();
        mike = zulu.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.value;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = oscar.bind(entity)(tango);
    oscar = 4;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/threads/ThreadAutoArchive.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['getAutoArchiveOptions'] = report;
    zulu['getAutoArchiveDurations'] = tango;
    tango = function(argFoo) { // Original name: getAutoArchiveDurationText
        _fun71473: for(var _fun71473_ip = 0; ; ) switch(_fun71473_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zulu = _closure1_slot8;
            tango = undefined;
            oscar = zulu.bind(tango)();
            zulu = oscar.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.value;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            oscar = zulu.bind(oscar)(entity);
            zulu = null;
            golf = zulu == oscar;
            entity = undefined;
            if(golf) { _fun71473_ip = 55; continue _fun71473 }
 50:
            entity = oscar.label;
 55:
            if(!(zulu == entity)) { _fun71473_ip = 104; continue _fun71473 }
 59:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 3;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.duration;
            mike = 'minutes';
            zulu = zulu.bind(tango)(report, mike);
            mike = zulu.humanize;
            entity = mike.bind(zulu)();
 104:
            return entity;
        }
    };
    zulu['getAutoArchiveDurationText'] = tango;
    mike = function(argFoo, argBar) { // Original name: getAutoArchiveDuration
        _fun71475: for(var _fun71475_ip = 0; ; ) switch(_fun71475_ip) {
 0:
            tango = argFoo;
            entity = argBar;
            mike = null;
            if(!(mike == entity)) { _fun71475_ip = 30; continue _fun71475 }
 12:
            report = mike == tango;
            zulu = undefined;
            if(report) { _fun71475_ip = 27; continue _fun71475 }
 21:
            zulu = tango.defaultAutoArchiveDuration;
 27:
            entity = zulu;
 30:
            if(!(mike == entity)) { _fun71475_ip = 41; continue _fun71475 }
 34:
            entity = _closure1_slot3;
 41:
            return entity;
        }
    };
    zulu['getAutoArchiveDuration'] = mike;
    return entity;
})();