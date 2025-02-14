// app/modules/app_database/modules/NonGuildVersions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    options = report.bind(entity)(tango);
    tango = options.prototype;
    report = Object.create(tango, {constructor: {value: options}});
    romeo = 'NonGuildVersions';
    foxtrot = report;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : report;
    var _closure1_slot7 = tango;
    mike = function() {
        tango = _closure1_slot5;
        zulu = function() { // Original name: NonGuildVersions
            _fun60983: for(var _fun60983_ip = 0; ; ) switch(_fun60983_ip) {
 0:
                tango = this;
                var _closure3_slot0 = tango;
                oscar = _closure1_slot4;
                zulu = _closure2_slot1;
                entity = undefined;
                zulu = oscar.bind(entity)(tango, zulu);
                zulu = {};
                oscar = function(argFoo, argBar) { // Original name: CONNECTION_OPEN
                    tango = _closure3_slot0;
                    zulu = tango.handleConnectionOpen;
                    mike = argFoo;
                    entity = argBar;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                zulu['CONNECTION_OPEN'] = oscar;
                oscar = function(argFoo, argBar) { // Original name: BACKGROUND_SYNC
                    tango = _closure3_slot0;
                    zulu = tango.handleConnectionOpen;
                    mike = argFoo;
                    entity = argBar;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                zulu['BACKGROUND_SYNC'] = oscar;
                tango['actions'] = zulu;
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 5;
                zulu = oscar[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.isCacheEnabled;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun60983_ip = 175; continue _fun60983 }
 92:
                tango = _closure1_slot6;
                zulu = tango.addChangeListener;
                options = _closure1_slot1;
                verify = _closure1_slot2;
                report = 6;
                report = verify[report];
                golf = options.bind(entity)(report);
                oscar = golf.throttle;
                report = 8;
                report = verify[report];
                report = options.bind(entity)(report);
                report = report.Millis;
                options = report.SECOND;
                report = 10;
                report = report * options;
                mike = function() {
                    _fun60986: for(var _fun60986_ip = 0; ; ) switch(_fun60986_ip) {
 0:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 7;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.database;
                        tango = mike.bind(zulu)();
                        mike = null;
                        if(!(mike != tango)) { _fun60986_ip = 59; continue _fun60986 }
 41:
                        zulu = tango.transaction;
                        mike = function(argFoo) {
                            _fun60987: for(var _fun60987_ip = 0; ; ) switch(_fun60987_ip) {
 0:
                                zulu = argFoo;
                                tango = _closure1_slot6;
                                mike = tango.getGuildId;
                                oscar = mike.bind(tango)();
                                mike = null;
                                if(!(mike != oscar)) { _fun60987_ip = 114; continue _fun60987 }
 26:
                                mike = global;
                                tango = mike.isNaN;
                                mike = mike.Number;
                                report = undefined;
                                mike = mike.bind(report)(oscar);
                                mike = tango.bind(report)(mike);
                                if(mike) { _fun60987_ip = 114; continue _fun60987 }
 55:
                                tango = _closure1_slot1;
                                golf = _closure1_slot2;
                                mike = 7;
                                mike = golf[mike];
                                tango = tango.bind(report)(mike);
                                mike = tango.nonGuildVersionsTransaction;
                                report = mike.bind(tango)(zulu);
                                tango = report.put;
                                mike = {};
                                golf = 'initial_guild_id';
                                mike['id'] = golf;
                                mike['versionString'] = oscar;
                                mike = tango.bind(report)(mike);
                                _fun60987_ip = 161; continue _fun60987;
 114:
                                tango = _closure1_slot1;
                                mike = _closure1_slot2;
                                entity = 7;
                                mike = mike[entity];
                                entity = undefined;
                                mike = tango.bind(entity)(mike);
                                entity = mike.nonGuildVersionsTransaction;
                                zulu = entity.bind(mike)(zulu);
                                mike = zulu.delete;
                                entity = 'initial_guild_id';
                                entity = mike.bind(zulu)(entity);
 161:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
 59:
                        return entity;
                    }
                };
                mike = oscar.bind(golf)(mike, report);
                mike = zulu.bind(tango)(mike);
 175:
                return entity;
            }
        };
        var _closure2_slot1 = zulu;
        report = {};
        mike = 'getCommittedVersions';
        report['key'] = mike;
        golf = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun60989: for(var _fun60989_ip = 0; ; ) switch(_fun60989_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun60989_ip = 175; continue _fun60989 }
 10:
                    report = undefined;
                    mike = undefined;
                    oscar = undefined;
 16: // try_start_0
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 7;
                    zulu = golf[zulu];
                    tango = tango.bind(report)(zulu);
                    zulu = tango.nonGuildVersions;
                    zulu = zulu.bind(tango)();
                    mike = zulu;
                    golf = null;
                    if(!(golf != zulu)) { _fun60989_ip = 139; continue _fun60989 }
 58:
                    zulu = mike;
                    mike = zulu.getMany;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=75);
 73:
                    return mike;
 75:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun60989_ip = 136; continue _fun60989 }
 81:
                    tango = mike.map;
                    zulu = function(argFoo) {
                        _fun60990: for(var _fun60990_ip = 0; ; ) switch(_fun60990_ip) {
 0:
                            zulu = argFoo;
                            mike = zulu.id;
                            entity = new Array(2);
                            entity[0] = mike;
                            mike = 'version';
                            mike = mike in zulu;
                            if(mike) { _fun60990_ip = 35; continue _fun60990 }
 27:
                            mike = zulu.versionString;
                            _fun60990_ip = 41; continue _fun60990;
 35:
                            mike = zulu.version;
 41:
                            entity[1] = mike;
                            return entity;
                        }
                    };
                    zulu = tango.bind(mike)(zulu);
                    oscar = zulu;
                    tango = global;
                    report = tango.Object;
                    tango = report.fromEntries;
                    if(!(golf == zulu)) { _fun60989_ip = 125; continue _fun60989 }
 119:
                    zulu = new Array(0);
                    _fun60989_ip = 128; continue _fun60989;
 125:
                    zulu = oscar;
 128:
                    zulu = tango.bind(report)(zulu);
 133: // try_end0
                    return zulu;
 136:
                    return mike;
 139:
                    mike = {};
                    return mike;
 144: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot7;
                    zulu = tango.warn;
                    mike = "couldn't load guild versions";
                    mike = zulu.bind(tango)(mike, report);
                    mike = {};
                    return mike;
 175:
                    return entity;
                }
            };
            return entity;
        };
        entity = golf.bind(mike)(entity);
        var _closure2_slot0 = entity;
        entity = function() { // Original name: getCommittedVersions
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'handleConnectionOpen';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun60992: for(var _fun60992_ip = 0; ; ) switch(_fun60992_ip) {
 0:
                tango = argFoo;
                mike = tango.apiCodeVersion;
                entity = null;
                if(!(entity != mike)) { _fun60992_ip = 86; continue _fun60992 }
 15:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.nonGuildVersionsTransaction;
                entity = argBar;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.put;
                entity = {};
                report = 'api_code_version';
                entity['id'] = report;
                tango = tango.apiCodeVersion;
                entity['version'] = tango;
                entity = mike.bind(zulu)(entity);
 86:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'resetInMemoryState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    report = Object.create(tango, {constructor: {value: mike}});
    foxtrot = report;
    tango = new foxtrot[mike](romeo);
    tango = tango instanceof Object ? tango : report;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/app_database/modules/NonGuildVersions.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['NonGuildVersions'] = mike;
    return entity;
})();