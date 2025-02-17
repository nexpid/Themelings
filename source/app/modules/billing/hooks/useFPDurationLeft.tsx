// app/modules/billing/hooks/useFPDurationLeft.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    mike = {};
    golf = 0;
    mike['SHORT_TIME_LEFT'] = golf;
    entity = 'SHORT_TIME_LEFT';
    mike[golf] = entity;
    golf = 1;
    mike['LONG_TIME_LEFT'] = golf;
    entity = 'LONG_TIME_LEFT';
    mike[golf] = entity;
    golf = 2;
    mike['ENDS_IN'] = golf;
    entity = 'ENDS_IN';
    mike[golf] = entity;
    entity = 3;
    mike['SHORT_TIME'] = entity;
    golf = 'SHORT_TIME';
    mike[entity] = golf;
    var _closure1_slot3 = mike;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/billing/hooks/useFPDurationLeft.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar) { // Original name: useFPDurationLeft
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            golf = argBar;
            mike = _closure1_slot3;
            mike = mike.SHORT_TIME_LEFT;
            if(!(mike !== golf)) { _fun00002_ip = 430; continue _fun00001 }
 26:
            mike = _closure1_slot3;
            mike = mike.LONG_TIME_LEFT;
            if(!(mike !== golf)) { _fun00002_ip = 330; continue _fun00001 }
 43:
            mike = _closure1_slot3;
            mike = mike.ENDS_IN;
            if(!(mike !== golf)) { _fun00002_ip = 227; continue _fun00001 }
 60:
            mike = _closure1_slot3;
            mike = mike.SHORT_TIME;
            if(!(mike !== golf)) { _fun00002_ip = 133; continue _fun00001 }
 74:
            mike = global;
            report = mike.Error;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            tango = 'Unknown messageType (';
            mike = ') when rendering time left';
            yankee = oscar.bind(tango)(golf, mike);
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            romeo = tango;
            mike = new romeo[report](yankee, offset);
            mike = mike instanceof Object ? mike : tango;
            throw mike;
 133:
            tango = {};
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 0;
            options = golf[mike];
            report = undefined;
            options = oscar.bind(report)(options);
            options = options.t;
            options = options.fYmir6;
            tango['days'] = options;
            options = golf[mike];
            options = oscar.bind(report)(options);
            options = options.t;
            options = options.C3RO+v;
            tango['hours'] = options;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.r77oHR;
            tango['minutes'] = mike;
            _fun00002_ip = 528; continue _fun00001;
 227:
            mike = {};
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 0;
            verify = options[report];
            oscar = undefined;
            verify = golf.bind(oscar)(verify);
            verify = verify.t;
            verify = verify.rLqNaW;
            mike['days'] = verify;
            verify = options[report];
            verify = golf.bind(oscar)(verify);
            verify = verify.t;
            verify = verify.d1LvCA;
            mike['hours'] = verify;
            report = options[report];
            report = golf.bind(oscar)(report);
            report = report.t;
            report = report.Z2LX7O;
            mike['minutes'] = report;
            tango = mike;
            _fun00002_ip = 528; continue _fun00001;
 330:
            mike = {};
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 0;
            verify = options[report];
            oscar = undefined;
            verify = golf.bind(oscar)(verify);
            verify = verify.t;
            verify = verify.UD5nn5;
            mike['days'] = verify;
            verify = options[report];
            verify = golf.bind(oscar)(verify);
            verify = verify.t;
            verify = verify.Hg8FeX;
            mike['hours'] = verify;
            report = options[report];
            report = golf.bind(oscar)(report);
            report = report.t;
            report = report.XSbQZW;
            mike['minutes'] = report;
            tango = mike;
            _fun00002_ip = 528; continue _fun00001;
 430:
            mike = {};
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 0;
            verify = options[report];
            oscar = undefined;
            verify = golf.bind(oscar)(verify);
            verify = verify.t;
            verify = verify./wnvqK;
            mike['days'] = verify;
            verify = options[report];
            verify = golf.bind(oscar)(verify);
            verify = verify.t;
            verify = verify.Jsq0XF;
            mike['hours'] = verify;
            report = options[report];
            report = golf.bind(oscar)(report);
            report = report.t;
            report = report.SBd+Bg;
            mike['minutes'] = report;
            tango = mike;
 528:
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 1;
            mike = oscar[mike];
            report = undefined;
            golf = golf.bind(report)(mike);
            mike = zulu.toDate;
            zulu = mike.bind(zulu)();
            mike = 60000;
            zulu = golf.bind(report)(zulu, mike);
            mike = _closure1_slot0;
            entity = 2;
            entity = oscar[entity];
            mike = mike.bind(report)(entity);
            entity = mike.unitsAsStrings;
            entity = entity.bind(mike)(zulu, tango);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['CountDownMessageTypes'] = mike;
    return entity;
})();