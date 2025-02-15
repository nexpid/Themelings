// app/modules/messages/isSpam.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: isSpammer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot2;
            mike = tango.getUser;
            entity = argFoo;
            report = mike.bind(tango)(entity);
            entity = null;
            tango = entity == report;
            mike = undefined;
            if(tango) { _fun00002_ip = 53; continue _fun00001 }
 32:
            tango = report.hasFlag;
            zulu = _closure1_slot3;
            zulu = zulu.SPAMMER;
            mike = tango.bind(report)(zulu);
 53:
            entity = entity != mike;
            if(!entity) { _fun00002_ip = 63; continue _fun00001 }
 60:
            entity = mike;
 63:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
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
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.UserFlags;
    var _closure1_slot3 = options;
    report = report.ChannelTypes;
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/isSpam.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: isSpamSupported
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            entity = undefined;
            entity = entity !== mike;
            if(!entity) { _fun00004_ip = 34; continue _fun00003 }
 12:
            zulu = mike.type;
            mike = _closure1_slot4;
            mike = mike.DM;
            entity = zulu !== mike;
 34:
            return entity;
        }
    };
    zulu['isSpamSupported'] = report;
    zulu['isSpammer'] = tango;
    mike = function(argFoo) { // Original name: isSpam
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot5;
            entity = tango.author;
            entity = entity.id;
            report = undefined;
            entity = zulu.bind(report)(entity);
            if(!entity) { _fun00006_ip = 65; continue _fun00005 }
 31:
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 2;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.isAutomodMessageRecord;
            mike = mike.bind(zulu)(tango);
            entity = !mike;
 65:
            return entity;
        }
    };
    zulu['isSpam'] = mike;
    return entity;
})();