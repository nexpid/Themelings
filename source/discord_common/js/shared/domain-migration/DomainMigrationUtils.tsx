// discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    report = {};
    oscar = 0;
    report['SKIP_MIGRATION'] = oscar;
    entity = 'SKIP_MIGRATION';
    report[oscar] = entity;
    golf = 1;
    report['SEND_DATA'] = golf;
    entity = 'SEND_DATA';
    report[golf] = entity;
    tango = 2;
    report['DATA_MIGRATED'] = tango;
    entity = 'DATA_MIGRATED';
    report[tango] = entity;
    tango = 3;
    report['DATA_MIGRATED_CONFIRMED'] = tango;
    entity = 'DATA_MIGRATED_CONFIRMED';
    report[tango] = entity;
    tango = {};
    tango['MIGRATION_SOURCE_DOMAIN'] = oscar;
    entity = 'MIGRATION_SOURCE_DOMAIN';
    tango[oscar] = entity;
    tango['MIGRATION_DESTINATION_DOMAIN'] = golf;
    entity = 'MIGRATION_DESTINATION_DOMAIN';
    tango[golf] = entity;
    var _closure1_slot0 = tango;
    entity = argPlugh;
    golf = entity[oscar];
    oscar = argBar;
    entity = undefined;
    options = oscar.bind(entity)(golf);
    golf = options.fileFinishedImporting;
    oscar = '../discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['DomainMigrationEventType'] = report;
    zulu['DomainMigrationMessageFrom'] = tango;
    tango = 'domainMigrationSuccess';
    zulu['DOMAIN_MIGRATION_SUCCESS_KEY'] = tango;
    tango = 'domainMigrationFailed';
    zulu['DOMAIN_MIGRATION_FAILED_KEY'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: sendPostMessage
        _fun62331: for(var _fun62331_ip = 0; ; ) switch(_fun62331_ip) {
 0:
            tango = argBar;
            entity = _closure1_slot0;
            mike = entity.MIGRATION_SOURCE_DOMAIN;
            entity = argBaz;
            if(!(entity !== mike)) { _fun62331_ip = 45; continue _fun62331 }
 23:
            entity = global;
            entity = entity.window;
            entity = entity.GLOBAL_ENV;
            zulu = entity.MIGRATION_SOURCE_ORIGIN;
            _fun62331_ip = 65; continue _fun62331;
 45:
            entity = global;
            entity = entity.window;
            entity = entity.GLOBAL_ENV;
            zulu = entity.MIGRATION_DESTINATION_ORIGIN;
 65:
            mike = tango.postMessage;
            entity = {};
            report = argFoo;
            entity['domainMigrationEvent'] = report;
            entity = mike.bind(tango)(entity, zulu);
            entity = undefined;
            return entity;
        }
    };
    zulu['sendPostMessage'] = tango;
    mike = function(argFoo, argBar) { // Original name: extractMessage
        _fun62332: for(var _fun62332_ip = 0; ; ) switch(_fun62332_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot0;
            mike = entity.MIGRATION_SOURCE_DOMAIN;
            entity = argBar;
            if(!(entity !== mike)) { _fun62332_ip = 45; continue _fun62332 }
 23:
            entity = global;
            entity = entity.window;
            entity = entity.GLOBAL_ENV;
            mike = entity.MIGRATION_SOURCE_ORIGIN;
            _fun62332_ip = 65; continue _fun62332;
 45:
            entity = global;
            entity = entity.window;
            entity = entity.GLOBAL_ENV;
            mike = entity.MIGRATION_DESTINATION_ORIGIN;
 65:
            entity = zulu.origin;
            tango = entity === mike;
            if(!tango) { _fun62332_ip = 95; continue _fun62332 }
 78:
            entity = zulu.data;
            mike = entity.domainMigrationEvent;
            entity = null;
            tango = entity != mike;
 95:
            mike = null;
            entity = null;
            if(!tango) { _fun62332_ip = 125; continue _fun62332 }
 102:
            zulu = zulu.data;
            tango = mike == zulu;
            mike = undefined;
            if(tango) { _fun62332_ip = 122; continue _fun62332 }
 116:
            mike = zulu.domainMigrationEvent;
 122:
            entity = mike;
 125:
            return entity;
        }
    };
    zulu['extractMessage'] = mike;
    return entity;
})();