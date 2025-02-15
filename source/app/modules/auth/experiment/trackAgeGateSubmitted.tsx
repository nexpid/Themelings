// app/modules/auth/experiment/trackAgeGateSubmitted.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/auth/experiment/trackAgeGateSubmitted.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: trackAgeGateSubmitted
        _fun111689: for(var _fun111689_ip = 0; ; ) switch(_fun111689_ip) {
 0:
            golf = argFoo;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            options = 1;
            zulu = offset[options];
            entity = undefined;
            report = verify.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot2;
            zulu = mike.AGE_GATE_SUBMITTED;
            mike = {};
            oscar = 2;
            oscar = offset[oscar];
            oscar = verify.bind(entity)(oscar);
            offset = oscar.bind(entity)();
            verify = offset.diff;
            oscar = 'years';
            verify = verify.bind(offset)(golf, oscar);
            oscar = 18;
            verify = verify < oscar;
            oscar = null;
            if(!verify) { _fun111689_ip = 105; continue _fun111689 }
 89:
            offset = golf.format;
            verify = 'YYYY-MM-DD';
            oscar = offset.bind(golf)(verify);
 105:
            mike['dob'] = oscar;
            oscar = golf.date;
            oscar = oscar.bind(golf)();
            mike['dob_day'] = oscar;
            oscar = golf.month;
            oscar = oscar.bind(golf)();
            oscar = oscar + options;
            mike['dob_month'] = oscar;
            oscar = golf.year;
            oscar = oscar.bind(golf)();
            mike['dob_year'] = oscar;
            oscar = {};
            golf = argBar;
            oscar['section'] = golf;
            mike['source'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();