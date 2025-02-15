// app/modules/hub/HubJoinManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot11;
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
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot9 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: HubJoinManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot10;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            mike = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure1_slot8;
                    mike = tango.getGuild;
                    entity = argFoo;
                    entity = entity.guild;
                    entity = entity.id;
                    mike = mike.bind(tango)(entity);
                    oscar = null;
                    tango = oscar != mike;
                    entity = undefined;
                    options = undefined;
                    if(!tango) { _fun00006_ip = 56; continue _fun00005 }
 43:
                    report = mike.features;
                    tango = oscar != report;
                    options = report;
 56:
                    if(!tango) { _fun00006_ip = 79; continue _fun00005 }
 59:
                    golf = options.has;
                    report = _closure1_slot9;
                    report = report.HUB;
                    tango = golf.bind(options)(report);
 79:
                    if(!tango) { _fun00006_ip = 149; continue _fun00005 }
 82:
                    report = _closure3_slot0;
                    report = report.onClose;
                    if(!(oscar != report)) { _fun00006_ip = 113; continue _fun00005 }
 99:
                    report = _closure3_slot0;
                    tango = report.onClose;
                    tango = tango.bind(report)();
 113:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 7;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.transitionToGuild;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
 149:
                    return entity;
                }
            };
            entity['handleGuildCreate'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            mike = this;
            entity = argFoo;
            mike['onClose'] = entity;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 8;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.subscribe;
            zulu = mike.handleGuildCreate;
            mike = 'GUILD_CREATE';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        oscar = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.unsubscribe;
            mike = this;
            zulu = mike.handleGuildCreate;
            mike = 'GUILD_CREATE';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/hub/HubJoinManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();