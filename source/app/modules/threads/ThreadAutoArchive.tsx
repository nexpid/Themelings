// app/modules/threads/ThreadAutoArchive.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = verify;
    report = function() { // Original name: getAutoArchiveOptions
        mike = {};
        offset = _closure1_slot0;
        oscar = _closure1_slot2;
        golf = 2;
        zulu = oscar[golf];
        report = undefined;
        zulu = offset.bind(report)(zulu);
        options = zulu.intl;
        tango = options.string;
        zulu = oscar[golf];
        zulu = offset.bind(report)(zulu);
        zulu = zulu.t;
        zulu = zulu.cs8A1d;
        zulu = tango.bind(options)(zulu);
        mike['label'] = zulu;
        tango = _closure1_slot1;
        zulu = 1;
        entity = oscar[zulu];
        entity = tango.bind(report)(entity);
        entity = entity.Minutes;
        entity = entity.HOUR;
        mike['value'] = entity;
        entity = new Array(4);
        entity[0] = mike;
        mike = {};
        options = oscar[golf];
        options = offset.bind(report)(options);
        yankee = options.intl;
        verify = yankee.string;
        options = oscar[golf];
        options = offset.bind(report)(options);
        options = options.t;
        options = options.zFKbrK;
        options = verify.bind(yankee)(options);
        mike['label'] = options;
        options = oscar[zulu];
        options = tango.bind(report)(options);
        options = options.Minutes;
        options = options.DAY;
        mike['value'] = options;
        entity[1] = mike;
        mike = {};
        options = oscar[golf];
        options = offset.bind(report)(options);
        yankee = options.intl;
        verify = yankee.string;
        options = oscar[golf];
        options = offset.bind(report)(options);
        options = options.t;
        options = options.TmPIZW;
        options = verify.bind(yankee)(options);
        mike['label'] = options;
        options = oscar[zulu];
        options = tango.bind(report)(options);
        options = options.Minutes;
        verify = options.DAY;
        options = 3;
        options = options * verify;
        mike['value'] = options;
        entity[2] = mike;
        mike = {};
        options = oscar[golf];
        options = offset.bind(report)(options);
        verify = options.intl;
        options = verify.string;
        golf = oscar[golf];
        golf = offset.bind(report)(golf);
        golf = golf.t;
        golf = golf./7i2en;
        golf = options.bind(verify)(golf);
        mike['label'] = golf;
        zulu = oscar[zulu];
        zulu = tango.bind(report)(zulu);
        zulu = zulu.Minutes;
        zulu = zulu.WEEK;
        mike['value'] = zulu;
        entity[3] = mike;
        return entity;
    };
    var _closure1_slot4 = report;
    entity = global;
    offset = entity.Object;
    oscar = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    tango = tango.DEFAULT_AUTO_ARCHIVE_DURATION;
    var _closure1_slot3 = tango;
    yankee = 1;
    tango = verify[yankee];
    tango = golf.bind(entity)(tango);
    tango = tango.Minutes;
    tango = tango.HOUR;
    tango = yankee * tango;
    oscar = new Array(4);
    oscar[0] = tango;
    tango = verify[yankee];
    tango = golf.bind(entity)(tango);
    tango = tango.Minutes;
    tango = tango.DAY;
    tango = yankee * tango;
    oscar[1] = tango;
    tango = verify[yankee];
    tango = golf.bind(entity)(tango);
    tango = tango.Minutes;
    offset = tango.DAY;
    tango = 3;
    offset = tango * offset;
    oscar[2] = offset;
    offset = verify[yankee];
    offset = golf.bind(entity)(offset);
    offset = offset.Minutes;
    offset = offset.WEEK;
    offset = yankee * offset;
    oscar[3] = offset;
    tango = verify[tango];
    golf = golf.bind(entity)(tango);
    tango = function() {
        mike = _closure1_slot4;
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
    tango = golf.bind(entity)(tango);
    golf = 5;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/threads/ThreadAutoArchive.tsx';
    golf = options.bind(verify)(golf);
    zulu['AUTO_ARCHIVE_OPTION_VALUES'] = oscar;
    zulu['getAutoArchiveOptions'] = report;
    zulu['getAutoArchiveDurations'] = tango;
    tango = function(argFoo) { // Original name: getAutoArchiveDurationText
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zulu = _closure1_slot4;
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
            if(golf) { _fun00002_ip = 53; continue _fun00001 }
 48:
            entity = oscar.label;
 53:
            if(!(zulu == entity)) { _fun00002_ip = 102; continue _fun00001 }
 57:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 4;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.duration;
            mike = 'minutes';
            zulu = zulu.bind(tango)(report, mike);
            mike = zulu.humanize;
            entity = mike.bind(zulu)();
 102:
            return entity;
        }
    };
    zulu['getAutoArchiveDurationText'] = tango;
    mike = function(argFoo, argBar) { // Original name: getAutoArchiveDuration
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            entity = argBar;
            mike = null;
            if(!(mike == entity)) { _fun00004_ip = 30; continue _fun00003 }
 12:
            report = mike == tango;
            zulu = undefined;
            if(report) { _fun00004_ip = 27; continue _fun00003 }
 21:
            zulu = tango.defaultAutoArchiveDuration;
 27:
            entity = zulu;
 30:
            if(!(mike == entity)) { _fun00004_ip = 41; continue _fun00003 }
 34:
            entity = _closure1_slot3;
 41:
            return entity;
        }
    };
    zulu['getAutoArchiveDuration'] = mike;
    return entity;
})();