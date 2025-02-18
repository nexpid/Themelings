// discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    report = {};
    oscard = 0;
    report['SKIP_MIGRATION'] = oscard;
    entity = 'SKIP_MIGRATION';
    report[oscard] = entity;
    golfie = 1;
    report['SEND_DATA'] = golfie;
    entity = 'SEND_DATA';
    report[golfie] = entity;
    tangon = 2;
    report['DATA_MIGRATED'] = tangon;
    entity = 'DATA_MIGRATED';
    report[tangon] = entity;
    tangon = 3;
    report['DATA_MIGRATED_CONFIRMED'] = tangon;
    entity = 'DATA_MIGRATED_CONFIRMED';
    report[tangon] = entity;
    tangon = {};
    tangon['MIGRATION_SOURCE_DOMAIN'] = oscard;
    entity = 'MIGRATION_SOURCE_DOMAIN';
    tangon[oscard] = entity;
    tangon['MIGRATION_DESTINATION_DOMAIN'] = golfie;
    entity = 'MIGRATION_DESTINATION_DOMAIN';
    tangon[golfie] = entity;
    var _closure1_slot0 = tangon;
    entity = argPlu;
    golfie = entity[oscard];
    oscard = argBar;
    entity = undefined;
    option = oscard.bind(entity)(golfie);
    golfie = option.fileFinishedImporting;
    oscard = '../discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['DomainMigrationEventType'] = report;
    zuuluu['DomainMigrationMessageFrom'] = tangon;
    tangon = 'domainMigrationSuccess';
    zuuluu['DOMAIN_MIGRATION_SUCCESS_KEY'] = tangon;
    tangon = 'domainMigrationFailed';
    zuuluu['DOMAIN_MIGRATION_FAILED_KEY'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: sendPostMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argBar;
            entity = _closure1_slot0;
            michal = entity.MIGRATION_SOURCE_DOMAIN;
            entity = argBaz;
            if(!(entity !== michal)) { _fun00002_ip = 45; continue _fun00001 }
 23:
            entity = global;
            entity = entity.window;
            entity = entity.GLOBAL_ENV;
            zuuluu = entity.MIGRATION_SOURCE_ORIGIN;
            _fun00002_ip = 65; continue _fun00001;
 45:
            entity = global;
            entity = entity.window;
            entity = entity.GLOBAL_ENV;
            zuuluu = entity.MIGRATION_DESTINATION_ORIGIN;
 65:
            michal = tangon.postMessage;
            entity = {};
            report = argFoo;
            entity['domainMigrationEvent'] = report;
            entity = michal.bind(tangon)(entity, zuuluu);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['sendPostMessage'] = tangon;
    michal = function(argFoo, argBar) { // Original name: extractMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot0;
            michal = entity.MIGRATION_SOURCE_DOMAIN;
            entity = argBar;
            if(!(entity !== michal)) { _fun00004_ip = 45; continue _fun00003 }
 23:
            entity = global;
            entity = entity.window;
            entity = entity.GLOBAL_ENV;
            michal = entity.MIGRATION_SOURCE_ORIGIN;
            _fun00004_ip = 65; continue _fun00003;
 45:
            entity = global;
            entity = entity.window;
            entity = entity.GLOBAL_ENV;
            michal = entity.MIGRATION_DESTINATION_ORIGIN;
 65:
            entity = zuuluu.origin;
            tangon = entity === michal;
            if(!tangon) { _fun00004_ip = 95; continue _fun00003 }
 78:
            entity = zuuluu.data;
            michal = entity.domainMigrationEvent;
            entity = null;
            tangon = entity != michal;
 95:
            michal = null;
            entity = null;
            if(!tangon) { _fun00004_ip = 125; continue _fun00003 }
 102:
            zuuluu = zuuluu.data;
            tangon = michal == zuuluu;
            michal = undefined;
            if(tangon) { _fun00004_ip = 122; continue _fun00003 }
 116:
            michal = zuuluu.domainMigrationEvent;
 122:
            entity = michal;
 125:
            return entity;
        }
    };
    zuuluu['extractMessage'] = michal;
    return entity;
})();