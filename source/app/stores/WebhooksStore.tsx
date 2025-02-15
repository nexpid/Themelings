// app/stores/WebhooksStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
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
            report = _closure1_slot5;
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
    entity = function(argFoo, argBar) { // Original name: fetchingKey
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argBar;
            entity = null;
            if(!(entity == report)) { _fun00006_ip = 13; continue _fun00005 }
 9:
            report = 'guild';
 13:
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            zulu = '';
            mike = argFoo;
            entity = ':';
            entity = tango.bind(zulu)(mike, entity, report);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: getOrCreateGuild
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot8;
            tango = zulu[mike];
            zulu = null;
            if(!(zulu == tango)) { _fun00008_ip = 30; continue _fun00007 }
 20:
            tango = _closure1_slot8;
            zulu = {};
            tango[mike] = zulu;
 30:
            entity = _closure1_slot8;
            entity = entity[mike];
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    options = function(argFoo) { // Original name: handleWebhookCreateUpdate
        entity = argFoo;
        zulu = entity.guildId;
        tango = entity.webhook;
        mike = _closure1_slot13;
        entity = undefined;
        zulu = mike.bind(entity)(zulu);
        mike = tango.id;
        zulu[mike] = tango;
        return entity;
    };
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = {};
    var _closure1_slot8 = mike;
    mike = {};
    var _closure1_slot9 = mike;
    mike = 7;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: WebhooksStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'isFetching';
        report['key'] = entity;
        entity = function(argFoo, argBar) { // Original name: value
            mike = _closure1_slot9;
            report = _closure1_slot12;
            tango = undefined;
            zulu = argFoo;
            entity = argBar;
            entity = report.bind(tango)(zulu, entity);
            mike = mike[entity];
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getWebhooksForGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 6;
            mike = tango[mike];
            report = undefined;
            zulu = zulu.bind(report)(mike);
            mike = zulu.values;
            tango = _closure1_slot13;
            entity = argFoo;
            entity = tango.bind(report)(entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getWebhooksForChannel';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            mike = argBar;
            var _closure3_slot0 = mike;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 6;
            zulu = tango[zulu];
            tango = undefined;
            zulu = report.bind(tango)(zulu);
            report = _closure1_slot13;
            mike = argFoo;
            mike = report.bind(tango)(mike);
            zulu = zulu.bind(tango)(mike);
            mike = zulu.values;
            zulu = mike.bind(zulu)();
            mike = zulu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.channel_id;
                entity = _closure3_slot0;
                entity = mike === entity;
                return entity;
            };
            mike = mike.bind(zulu)(entity);
            entity = mike.value;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'error';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot7;
            return entity;
        };
        report['get'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'WebhooksStore';
    golf['displayName'] = mike;
    mike = 8;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleWebhooksUpdate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            tango = entity.channelId;
            var _closure2_slot0 = tango;
            options = entity.webhooks;
            golf = entity.error;
            entity = undefined;
            var _closure2_slot1 = entity;
            oscar = null;
            if(!(oscar == options)) { _fun00010_ip = 148; continue _fun00009 }
 42:
            if(!(oscar == golf)) { _fun00010_ip = 118; continue _fun00009 }
 46:
            mike = oscar != tango;
            if(!mike) { _fun00010_ip = 68; continue _fun00009 }
 53:
            verify = _closure1_slot8;
            verify = verify[report];
            mike = oscar != verify;
 68:
            if(!mike) { _fun00010_ip = 291; continue _fun00009 }
 74:
            var _closure1_slot7 = oscar;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            mike = 5;
            mike = offset[mike];
            verify = verify.bind(entity)(mike);
            mike = verify.fetchForChannel;
            mike = mike.bind(verify)(report, tango);
            _fun00010_ip = 291; continue _fun00009;
 118:
            _closure1_slot7 = golf;
            golf = _closure1_slot9;
            mike = _closure1_slot12;
            mike = mike.bind(entity)(report, tango);
            mike = delete golf[mike];
            _fun00010_ip = 291; continue _fun00009;
 148:
            _closure1_slot7 = oscar;
            golf = new Array(0);
            if(!(oscar != tango)) { _fun00010_ip = 232; continue _fun00009 }
 163:
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            oscar = 6;
            oscar = offset[oscar];
            verify = verify.bind(entity)(oscar);
            oscar = _closure1_slot13;
            oscar = oscar.bind(entity)(report);
            verify = verify.bind(entity)(oscar);
            oscar = verify.values;
            offset = oscar.bind(verify)();
            verify = offset.filter;
            oscar = function(argFoo) {
                entity = argFoo;
                mike = entity.channel_id;
                entity = _closure2_slot0;
                entity = mike !== entity;
                return entity;
            };
            verify = verify.bind(offset)(oscar);
            oscar = verify.value;
            golf = oscar.bind(verify)();
 232:
            verify = _closure1_slot8;
            oscar = {};
            verify[report] = oscar;
            _closure2_slot1 = oscar;
            oscar = golf.concat;
            golf = oscar.bind(golf)(options);
            oscar = golf.forEach;
            zulu = function(argFoo) {
                entity = argFoo;
                zulu = _closure2_slot1;
                mike = entity.id;
                zulu[mike] = entity;
                return entity;
            };
            zulu = oscar.bind(golf)(zulu);
            zulu = _closure1_slot9;
            mike = _closure1_slot12;
            mike = mike.bind(entity)(report, tango);
            mike = delete zulu[mike];
 291:
            return entity;
        }
    };
    mike['WEBHOOKS_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleWebhooksFetching
        entity = argFoo;
        report = entity.guildId;
        zulu = entity.channelId;
        tango = _closure1_slot9;
        mike = _closure1_slot12;
        entity = undefined;
        zulu = mike.bind(entity)(report, zulu);
        mike = true;
        tango[zulu] = mike;
        return entity;
    };
    mike['WEBHOOKS_FETCHING'] = verify;
    mike['WEBHOOK_CREATE'] = options;
    mike['WEBHOOK_UPDATE'] = options;
    tango = function(argFoo) { // Original name: handleWebhookDelete
        entity = argFoo;
        tango = entity.guildId;
        zulu = entity.webhookId;
        mike = _closure1_slot13;
        entity = undefined;
        mike = mike.bind(entity)(tango);
        mike = delete mike[zulu];
        return entity;
    };
    mike['WEBHOOK_DELETE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[golf](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/WebhooksStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();