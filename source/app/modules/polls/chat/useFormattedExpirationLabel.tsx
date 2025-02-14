// app/modules/polls/chat/useFormattedExpirationLabel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    mike = function(argFoo) { // Original name: formatExpirationLabel
        _fun72085: for(var _fun72085_ip = 0; ; ) switch(_fun72085_ip) {
 0:
            options = argFoo;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 0;
            zulu = zulu[entity];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            report = zulu.bind(entity)();
            if(!(!(options <= report))) { _fun72085_ip = 286; continue _fun72085 }
 38:
            tango = options.diff;
            zulu = 'days';
            oscar = tango.bind(options)(report, zulu);
            golf = 1;
            if(!(!(oscar > golf))) { _fun72085_ip = 224; continue _fun72085 }
 64:
            tango = options.diff;
            zulu = 'hours';
            verify = tango.bind(options)(report, zulu);
            if(!(!(verify > golf))) { _fun72085_ip = 162; continue _fun72085 }
 84:
            tango = options.diff;
            zulu = 'minutes';
            offset = tango.bind(options)(report, zulu);
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            report = zulu[golf];
            report = tango.bind(entity)(report);
            options = report.intl;
            report = options.formatToPlainString;
            zulu = zulu[golf];
            zulu = tango.bind(entity)(zulu);
            zulu = zulu.t;
            tango = zulu.3SLXAw;
            zulu = {};
            zulu['minutes'] = offset;
            zulu = report.bind(options)(tango, zulu);
            return zulu;
 162:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            report = zulu[golf];
            report = tango.bind(entity)(report);
            options = report.intl;
            report = options.formatToPlainString;
            zulu = zulu[golf];
            zulu = tango.bind(entity)(zulu);
            zulu = zulu.t;
            tango = zulu.BWqf0d;
            zulu = {};
            zulu['hours'] = verify;
            zulu = report.bind(options)(tango, zulu);
            return zulu;
 224:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            tango = mike[golf];
            tango = zulu.bind(entity)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = mike[golf];
            mike = zulu.bind(entity)(mike);
            mike = mike.t;
            zulu = mike.dex68f;
            mike = {};
            mike['days'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 286:
            return entity;
        }
    };
    var _closure1_slot3 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 2;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/polls/chat/useFormattedExpirationLabel.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useFormattedExpirationLabel
        _fun72086: for(var _fun72086_ip = 0; ; ) switch(_fun72086_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity == zulu)) { _fun72086_ip = 13; continue _fun72086 }
 9:
            entity = undefined;
            return entity;
 13:
            mike = _closure1_slot3;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['formatExpirationLabel'] = mike;
    return entity;
})();