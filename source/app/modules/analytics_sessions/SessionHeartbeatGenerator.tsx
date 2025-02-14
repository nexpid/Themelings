// app/modules/analytics_sessions/SessionHeartbeatGenerator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    entity = function() { // Original name: _getLatestClientSession
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun58783: for(var _fun58783_ip = 0; ; ) switch(_fun58783_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun58783_ip = 245; continue _fun58783 }
 10:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    options = 2;
                    mike = mike[options];
                    golf = undefined;
                    mike = zulu.bind(golf)(mike);
                    report = mike.Storage;
                    zulu = report.getAfterRefresh;
                    mike = _closure1_slot4;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=60);
 58:
                    return mike;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun58783_ip = 242; continue _fun58783 }
 69:
                    report = _closure1_slot0;
                    zulu = _closure1_slot1;
                    zulu = zulu[options];
                    zulu = report.bind(golf)(zulu);
                    oscar = zulu.Storage;
                    report = oscar.getAfterRefresh;
                    zulu = _closure1_slot5;
                    oscar = report.bind(oscar)(zulu);
                    report = oscar.then;
                    zulu = _closure1_slot10;
                    zulu = report.bind(oscar)(zulu);
                    SaveGenerator(address=125);
 123:
                    return zulu;
 125:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun58783_ip = 239; continue _fun58783 }
 131:
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    report = report[options];
                    report = oscar.bind(golf)(report);
                    golf = report.Storage;
                    oscar = golf.getAfterRefresh;
                    report = _closure1_slot3;
                    oscar = oscar.bind(golf)(report);
                    report = oscar.then;
                    tango = _closure1_slot10;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=187);
 185:
                    return tango;
 187:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun58783_ip = 236; continue _fun58783 }
 193:
                    golf = null;
                    oscar = golf != mike;
                    report = null;
                    if(!oscar) { _fun58783_ip = 233; continue _fun58783 }
 204:
                    oscar = golf != zulu;
                    report = null;
                    if(!oscar) { _fun58783_ip = 233; continue _fun58783 }
 213:
                    oscar = {};
                    oscar['uuid'] = mike;
                    oscar['initialized'] = zulu;
                    oscar['lastUsed'] = tango;
                    report = oscar;
 233:
                    return report;
 236:
                    return tango;
 239:
                    return zulu;
 242:
                    return mike;
 245:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    tango = function(argFoo) { // Original name: isSessionExpired
        entity = argFoo;
        mike = entity.lastUsed;
        entity = 1800000;
        mike = entity + mike;
        entity = global;
        zulu = entity.Date;
        entity = zulu.now;
        entity = entity.bind(zulu)();
        mike = mike - entity;
        entity = 0;
        entity = mike <= entity;
        return entity;
    };
    var _closure1_slot9 = tango;
    mike = function(argFoo) { // Original name: timestampOrZero
        _fun58785: for(var _fun58785_ip = 0; ; ) switch(_fun58785_ip) {
 0:
            tango = argFoo;
            entity = null;
            mike = entity != tango;
            entity = 0;
            if(!mike) { _fun58785_ip = 29; continue _fun58785 }
 14:
            mike = global;
            zulu = mike.Number;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 29:
            return entity;
        }
    };
    var _closure1_slot10 = mike;
    oscar = global;
    yankee = oscar.Object;
    offset = yankee.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, verify);
    entity = 0;
    offset = options[entity];
    verify = argBaz;
    entity = undefined;
    verify = verify.bind(entity)(offset);
    var _closure1_slot2 = verify;
    verify = 'LATEST_SESSION_TIMESTAMP';
    var _closure1_slot3 = verify;
    verify = 'LATEST_SESSION_UUID';
    var _closure1_slot4 = verify;
    verify = 'LATEST_SESSION_INITIALIZED_TIMESTAMP';
    var _closure1_slot5 = verify;
    verify = oscar.Promise;
    oscar = verify.resolve;
    oscar = oscar.bind(verify)();
    var _closure1_slot6 = oscar;
    oscar = false;
    var _closure1_slot7 = oscar;
    oscar = 3;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/analytics_sessions/SessionHeartbeatGenerator.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = 30;
    zulu['SESSION_IDLE_TIMEOUT_MINS'] = oscar;
    oscar = function(argFoo) { // Original name: setSessionExtendingEnabled
        entity = argFoo;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    zulu['setSessionExtendingEnabled'] = oscar;
    report = function() { // Original name: getSession
        tango = _closure1_slot6;
        zulu = tango.then;
        oscar = _closure1_slot2;
        report = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun58789: for(var _fun58789_ip = 0; ; ) switch(_fun58789_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun58789_ip = 384; continue _fun58789 }
 10:
                    mike = function() { // Original name: getLatestClientSession
                        entity = undefined;
                        tango = _closure1_slot8;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    verify = undefined;
                    mike = mike.bind(verify)();
                    SaveGenerator(address=27);
 25:
                    return mike;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun58789_ip = 381; continue _fun58789 }
 36:
                    tango = null;
                    if(!(tango != mike)) { _fun58789_ip = 145; continue _fun58789 }
 42:
                    zulu = _closure1_slot9;
                    zulu = zulu.bind(verify)(mike);
                    if(zulu) { _fun58789_ip = 145; continue _fun58789 }
 57:
                    oscar = _closure1_slot7;
                    zulu = mike;
                    if(!oscar) { _fun58789_ip = 378; continue _fun58789 }
 70:
                    golf = _closure1_slot0;
                    options = _closure1_slot1;
                    oscar = 2;
                    oscar = options[oscar];
                    oscar = golf.bind(verify)(oscar);
                    options = oscar.Storage;
                    golf = options.set;
                    oscar = _closure1_slot3;
                    report = global;
                    offset = report.Date;
                    report = offset.now;
                    offset = report.bind(offset)();
                    report = offset.toString;
                    report = report.bind(offset)();
                    report = golf.bind(options)(oscar, report);
                    zulu = mike;
                    _fun58789_ip = 378; continue _fun58789;
 145:
                    report = _closure1_slot7;
                    if(report) { _fun58789_ip = 158; continue _fun58789 }
 155:
                    return tango;
 158:
                    tango = {};
                    options = _closure1_slot0;
                    offset = _closure1_slot1;
                    report = 1;
                    report = offset[report];
                    golf = options.bind(verify)(report);
                    report = golf.v4;
                    report = report.bind(golf)();
                    tango['uuid'] = report;
                    report = global;
                    yankee = report.Date;
                    golf = yankee.now;
                    golf = golf.bind(yankee)();
                    tango['initialized'] = golf;
                    yankee = report.Date;
                    golf = yankee.now;
                    golf = golf.bind(yankee)();
                    tango['lastUsed'] = golf;
                    golf = 2;
                    yankee = offset[golf];
                    yankee = options.bind(verify)(yankee);
                    backup = yankee.Storage;
                    foxtrot = backup.set;
                    romeo = _closure1_slot4;
                    yankee = tango.uuid;
                    yankee = foxtrot.bind(backup)(romeo, yankee);
                    yankee = offset[golf];
                    yankee = options.bind(verify)(yankee);
                    backup = yankee.Storage;
                    foxtrot = backup.set;
                    romeo = _closure1_slot5;
                    kilo = tango.initialized;
                    yankee = kilo.toString;
                    yankee = yankee.bind(kilo)();
                    yankee = foxtrot.bind(backup)(romeo, yankee);
                    golf = offset[golf];
                    golf = options.bind(verify)(golf);
                    options = golf.Storage;
                    golf = options.set;
                    oscar = _closure1_slot3;
                    verify = report.Date;
                    report = verify.now;
                    verify = report.bind(verify)();
                    report = verify.toString;
                    report = report.bind(verify)();
                    report = golf.bind(options)(oscar, report);
                    zulu = tango;
 378:
                    return zulu;
 381:
                    return mike;
 384:
                    return entity;
                }
            };
            return entity;
        };
        entity = oscar.bind(report)(entity);
        entity = zulu.bind(tango)(entity);
        _closure1_slot6 = entity;
        return entity;
    };
    zulu['getSession'] = report;
    zulu['isSessionExpired'] = tango;
    zulu['timestampOrZero'] = mike;
    return entity;
})();