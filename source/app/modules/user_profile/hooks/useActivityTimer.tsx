// app/modules/user_profile/hooks/useActivityTimer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.useEffect;
    var _closure1_slot4 = golf;
    tango = tango.useState;
    var _closure1_slot5 = tango;
    tango = function(argFoo) { // Original name: pad
        entity = global;
        zulu = entity.String;
        mike = undefined;
        entity = argFoo;
        tango = zulu.bind(mike)(entity);
        zulu = tango.padStart;
        mike = 2;
        entity = '0';
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/hooks/useActivityTimer.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useActivityTimer
        entity = argFoo;
        backup = entity.start;
        zulu = entity.end;
        golf = _closure1_slot5;
        report = _closure1_slot0;
        foxtrot = _closure1_slot2;
        entity = 3;
        entity = foxtrot[entity];
        romeo = undefined;
        entity = report.bind(romeo)(entity);
        entity = entity.Interval;
        report = entity.prototype;
        report = Object.create(report, {constructor: {value: entity}});
        output = report;
        entity = new output[entity](sizing);
        entity = entity instanceof Object ? entity : report;
        entity = golf.bind(romeo)(entity);
        verify = _closure1_slot3;
        options = 1;
        entity = verify.bind(romeo)(entity, options);
        report = 0;
        yankee = entity[report];
        var _closure2_slot0 = yankee;
        oscar = global;
        offset = oscar.Date;
        entity = offset.now;
        entity = entity.bind(offset)();
        golf = golf.bind(romeo)(entity);
        entity = 2;
        golf = verify.bind(romeo)(golf, entity);
        offset = golf[report];
        golf = golf[options];
        var _closure2_slot1 = golf;
        verify = _closure1_slot4;
        golf = new Array(1);
        golf[0] = yankee;
        tango = function() {
            report = _closure2_slot0;
            tango = report.start;
            oscar = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.Millis;
            zulu = mike.HALF_SECOND;
            mike = function() {
                zulu = _closure2_slot1;
                entity = global;
                mike = entity.Date;
                entity = mike.now;
                mike = entity.bind(mike)();
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            entity = function() {
                mike = _closure2_slot0;
                entity = mike.stop;
                entity = entity.bind(mike)();
                return entity;
            };
            return entity;
        };
        tango = verify.bind(romeo)(tango, golf);
        zulu = zulu - backup;
        yankee = _closure1_slot1;
        mike = foxtrot[entity];
        mike = yankee.bind(romeo)(mike);
        mike = mike.Millis;
        mike = mike.SECOND;
        verify = zulu / mike;
        zulu = oscar.Math;
        mike = zulu.max;
        golf = oscar.Math;
        tango = golf.min;
        offset = offset - backup;
        entity = foxtrot[entity];
        entity = yankee.bind(romeo)(entity);
        entity = entity.Millis;
        entity = entity.SECOND;
        entity = offset / entity;
        entity = tango.bind(golf)(entity, verify);
        mike = mike.bind(zulu)(entity, report);
        entity = {};
        entity['elapsed'] = mike;
        entity['duration'] = verify;
        tango = oscar.Math;
        zulu = tango.max;
        golf = oscar.Math;
        oscar = golf.min;
        mike = mike / verify;
        mike = oscar.bind(golf)(mike, options);
        mike = zulu.bind(tango)(mike, report);
        entity['percentage'] = mike;
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            mike = global;
            zulu = mike.Math;
            entity = zulu.floor;
            oscar = entity.bind(zulu)(verify);
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 2;
            tango = yankee[entity];
            report = undefined;
            tango = offset.bind(report)(tango);
            tango = tango.Seconds;
            tango = tango.MINUTE;
            tango = oscar % tango;
            options = mike.Math;
            golf = options.floor;
            oscar = yankee[entity];
            oscar = offset.bind(report)(oscar);
            oscar = oscar.Seconds;
            oscar = oscar.MINUTE;
            oscar = verify / oscar;
            golf = golf.bind(options)(oscar);
            oscar = yankee[entity];
            oscar = offset.bind(report)(oscar);
            oscar = oscar.Seconds;
            oscar = oscar.MINUTE;
            oscar = golf % oscar;
            options = mike.Math;
            golf = options.floor;
            entity = yankee[entity];
            entity = offset.bind(report)(entity);
            entity = entity.Seconds;
            entity = entity.HOUR;
            entity = verify / entity;
            golf = golf.bind(options)(entity);
            entity = 0;
            if(!(entity !== golf)) { _fun00002_ip = 231; continue _fun00001 }
 178:
            entity = _closure1_slot6;
            yankee = entity.bind(report)(golf);
            backup = entity.bind(report)(oscar);
            romeo = entity.bind(report)(tango);
            entity = mike.HermesInternal;
            options = entity.concat;
            output = '';
            entity = ':';
            sizing = yankee;
            kilo = entity;
            foxtrot = entity;
            entity = output[options](sizing, kilo, backup, foxtrot, romeo, yankee);
            _fun00002_ip = 271; continue _fun00001;
 231:
            zulu = _closure1_slot6;
            oscar = zulu.bind(report)(oscar);
            report = zulu.bind(report)(tango);
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = ':';
            entity = tango.bind(zulu)(oscar, mike, report);
 271:
            return entity;
        }
    };
    zulu['formatTime'] = mike;
    return entity;
})();