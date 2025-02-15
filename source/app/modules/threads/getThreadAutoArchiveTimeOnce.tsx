// app/modules/threads/getThreadAutoArchiveTimeOnce.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    mike = function(argFoo) { // Original name: getThreadLastActivityTime
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.threadMetadata;
            zulu = null;
            if(!(zulu != mike)) { _fun00002_ip = 175; continue _fun00001 }
 18:
            oscar = _closure1_slot2;
            report = oscar.lastMessageId;
            tango = entity.id;
            report = report.bind(oscar)(tango);
            if(!(zulu == report)) { _fun00002_ip = 50; continue _fun00001 }
 45:
            report = entity.id;
 50:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            tango = oscar.bind(mike)(tango);
            mike = tango.extractTimestamp;
            tango = mike.bind(tango)(report);
            mike = entity.threadMetadata;
            mike = mike.archiveTimestamp;
            mike = zulu != mike;
            zulu = 0;
            if(!mike) { _fun00002_ip = 154; continue _fun00001 }
 104:
            mike = global;
            report = mike.Date;
            entity = entity.threadMetadata;
            options = entity.archiveTimestamp;
            mike = report.prototype;
            mike = Object.create(mike, {constructor: {value: report}});
            verify = mike;
            entity = new verify[report](options, golf);
            mike = entity instanceof Object ? entity : mike;
            entity = mike.getTime;
            zulu = entity.bind(mike)();
 154:
            entity = global;
            mike = entity.Math;
            entity = mike.max;
            entity = entity.bind(mike)(tango, zulu);
            return entity;
 175:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot3 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = oscar[entity];
    entity = undefined;
    report = golf.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/threads/getThreadAutoArchiveTimeOnce.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: getThreadAutoArchiveTimeOnce
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            mike = tango.threadMetadata;
            entity = null;
            if(!(entity != mike)) { _fun00004_ip = 83; continue _fun00003 }
 15:
            entity = tango.threadMetadata;
            report = entity.autoArchiveDuration;
            oscar = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            mike = zulu[mike];
            zulu = undefined;
            mike = oscar.bind(zulu)(mike);
            mike = mike.Millis;
            mike = mike.MINUTE;
            mike = report * mike;
            entity = _closure1_slot3;
            entity = entity.bind(zulu)(tango);
            entity = entity + mike;
            return entity;
 83:
            entity = 0;
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['getThreadLastActivityTime'] = mike;
    return entity;
})();