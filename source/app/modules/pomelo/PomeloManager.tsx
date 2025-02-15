// app/modules/pomelo/PomeloManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PomeloEntrypoints;
    var _closure1_slot8 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: PomeloManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot9;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = {};
            tango = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.onPostConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['POST_CONNECTION_OPEN'] = tango;
            entity['actions'] = zulu;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 8;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    oscar = zulu.experiment;
                    report = oscar.getCurrentConfig;
                    tango = {};
                    zulu = 'b9eb97_1';
                    tango['location'] = zulu;
                    zulu = {};
                    golf = false;
                    zulu['autoTrackExposure'] = golf;
                    zulu = report.bind(oscar)(tango, zulu);
                    tango = zulu.enabled;
                    zulu = false;
                    if(!tango) { _fun00006_ip = 262; continue _fun00005 }
 77:
                    report = _closure1_slot7;
                    tango = report.getCurrentUser;
                    oscar = tango.bind(report)();
                    tango = null;
                    report = tango == oscar;
                    zulu = false;
                    if(report) { _fun00006_ip = 262; continue _fun00005 }
 104:
                    report = oscar.isPomelo;
                    report = report.bind(oscar)();
                    zulu = false;
                    if(report) { _fun00006_ip = 262; continue _fun00005 }
 122:
                    report = oscar.hasVerifiedEmailOrPhone;
                    report = report.bind(oscar)();
                    zulu = false;
                    if(!report) { _fun00006_ip = 262; continue _fun00005 }
 140:
                    oscar = _closure1_slot0;
                    options = _closure1_slot1;
                    report = 9;
                    report = options[report];
                    oscar = oscar.bind(entity)(report);
                    report = oscar.getForceMigration;
                    report = report.bind(oscar)();
                    options = 'lastSawPomeloMigration';
                    if(report) { _fun00006_ip = 185; continue _fun00005 }
 179:
                    options = 'lastSawPomelo';
 185:
                    oscar = _closure1_slot0;
                    verify = _closure1_slot1;
                    report = 7;
                    report = verify[report];
                    report = oscar.bind(entity)(report);
                    oscar = report.Storage;
                    report = oscar.get;
                    oscar = report.bind(oscar)(options);
                    tango = tango != oscar;
                    if(!tango) { _fun00006_ip = 259; continue _fun00005 }
 228:
                    report = global;
                    options = report.Date;
                    report = options.now;
                    report = report.bind(options)();
                    oscar = report - oscar;
                    report = 604800000;
                    tango = oscar < report;
 259:
                    zulu = !tango;
 262:
                    if(!zulu) { _fun00006_ip = 428; continue _fun00005 }
 268:
                    tango = _closure1_slot0;
                    report = _closure1_slot1;
                    zulu = 10;
                    zulu = report[zulu];
                    zulu = tango.bind(entity)(zulu);
                    verify = zulu.UUOneClickExperiment;
                    options = verify.getCurrentConfig;
                    oscar = {};
                    zulu = 'uu_one_click';
                    oscar['location'] = zulu;
                    zulu = {};
                    zulu['autoTrackExposure'] = golf;
                    zulu = options.bind(verify)(oscar, zulu);
                    oscar = zulu.enabled;
                    zulu = 11;
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.openPomeloModal;
                    zulu = _closure1_slot8;
                    zulu = zulu.APP_START;
                    zulu = tango.bind(report)(zulu, oscar, golf);
                    if(!zulu) { _fun00006_ip = 428; continue _fun00005 }
 368:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot1;
                    mike = 7;
                    mike = tango[mike];
                    mike = zulu.bind(entity)(mike);
                    report = mike.Storage;
                    tango = report.set;
                    mike = global;
                    zulu = mike.Date;
                    mike = zulu.now;
                    zulu = mike.bind(zulu)();
                    mike = 'lastSawPomelo';
                    mike = tango.bind(report)(mike, zulu);
 428:
                    return entity;
                }
            };
            entity['onPostConnectionOpen'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot6;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot2;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/pomelo/PomeloManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();