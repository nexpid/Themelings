// app/modules/contact_sync/native/ContactSyncPersistedStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = options;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    report = function(argFoo) { // Original name: setStoredContacts
        verify = argFoo;
        var _closure2_slot0 = verify;
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        entity = 0;
        tango = report[entity];
        entity = undefined;
        tango = oscar.bind(entity)(tango);
        options = tango.Storage;
        golf = options.set;
        tango = 'V2_DCD_CONTACTS_STORAGE_KEY';
        tango = golf.bind(options)(tango, verify);
        tango = 1;
        tango = report[tango];
        golf = oscar.bind(entity)(tango);
        oscar = golf.batchUpdates;
        tango = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = _closure2_slot0;
                mike = 'storedContacts';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        tango = oscar.bind(golf)(tango);
        tango = _closure1_slot1;
        zulu = 2;
        zulu = report[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.wait;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'CONTACT_SYNC_STORED_CONTACTS';
            entity['type'] = tango;
            report = _closure2_slot0;
            tango = '';
            tango = tango === report;
            entity['empty'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot3 = report;
    oscar = 0;
    tango = options[oscar];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    yankee = tango.Storage;
    offset = yankee.asyncGet;
    verify = 'V2_DCD_CONTACTS_STORAGE_KEY';
    tango = function(argFoo) {
        zulu = _closure1_slot3;
        entity = undefined;
        mike = argFoo;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = offset.bind(yankee)(verify, tango);
    tango = 3;
    tango = options[tango];
    offset = golf.bind(entity)(tango);
    verify = offset.create;
    tango = function() {
        entity = {'loadedPolicyNotice': false, 'storedContacts': '', 'upsellCTADismissed': false, 'policyUpdateNoticeDismissed': false, 'dmListCTADismissed': false};
        return entity;
    };
    tango = verify.bind(offset)(tango);
    var _closure1_slot4 = tango;
    verify = options[oscar];
    verify = golf.bind(entity)(verify);
    romeo = verify.Storage;
    yankee = romeo.asyncGet;
    offset = 'ContactSyncDMListCTADismissed';
    verify = function(argFoo) {
        _fun94015: for(var _fun94015_ip = 0; ; ) switch(_fun94015_ip) {
 0:
            tango = global;
            report = tango.Boolean;
            entity = undefined;
            zulu = argFoo;
            zulu = report.bind(entity)(zulu);
            var _closure2_slot0 = zulu;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 0;
            report = golf[report];
            report = oscar.bind(entity)(report);
            golf = report.Storage;
            oscar = golf.get;
            report = 'contact_sync_dm_list_cta_first_seen_date';
            report = oscar.bind(golf)(report);
            oscar = null;
            if(!(oscar == report)) { _fun94015_ip = 89; continue _fun94015 }
 74:
            golf = tango.Date;
            oscar = golf.now;
            report = oscar.bind(golf)();
 89:
            oscar = tango.Date;
            tango = oscar.now;
            tango = tango.bind(oscar)();
            report = tango - report;
            tango = 5184000000.0;
            if(!(report > tango)) { _fun94015_ip = 128; continue _fun94015 }
 122:
            tango = true;
            _closure2_slot0 = tango;
 128:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 1;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot4;
                mike = zulu.setState;
                entity = {};
                tango = _closure2_slot0;
                entity['dmListCTADismissed'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    verify = yankee.bind(romeo)(offset, verify);
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    yankee = oscar.Storage;
    offset = yankee.asyncGet;
    verify = 'ContactSyncUpsellCTADismissed';
    oscar = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = {};
            tango = _closure2_slot0;
            tango = !tango;
            tango = !tango;
            entity['upsellCTADismissed'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    oscar = offset.bind(yankee)(verify, oscar);
    oscar = 4;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/contact_sync/native/ContactSyncPersistedStore.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['setStoredContacts'] = report;
    report = function() {
        _fun94019: for(var _fun94019_ip = 0; ; ) switch(_fun94019_ip) {
 0:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            mike = 0;
            entity = entity[mike];
            tango = undefined;
            entity = zulu.bind(tango)(entity);
            zulu = entity.Storage;
            entity = zulu.get;
            golf = 'V2_DCD_CONTACTS_STORAGE_KEY';
            zulu = entity.bind(zulu)(golf);
            entity = null;
            oscar = entity != zulu;
            entity = '';
            if(!oscar) { _fun94019_ip = 62; continue _fun94019 }
 59:
            entity = zulu;
 62:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            oscar = mike.Storage;
            mike = oscar.remove;
            mike = mike.bind(oscar)(golf);
            mike = 1;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot4;
                mike = zulu.setState;
                entity = function(argFoo) {
                    entity = {};
                    tango = argFoo;
                    report = entity;
                    mike = copyDataProperties(report, tango);
                    zulu = '';
                    mike = 'storedContacts';
                    entity[mike] = zulu;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['deleteStoredContacts'] = report;
    zulu['useContactSyncStore'] = tango;
    tango = function() { // Original name: dismissUpsellCTA
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 0;
        mike = tango[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        golf = mike.Storage;
        oscar = golf.set;
        report = 'ContactSyncUpsellCTADismissed';
        mike = true;
        mike = oscar.bind(golf)(report, mike);
        mike = 1;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = true;
                mike = 'upsellCTADismissed';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['dismissUpsellCTA'] = tango;
    tango = function() { // Original name: dismissDMListCTA
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 0;
        mike = tango[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        golf = mike.Storage;
        oscar = golf.set;
        report = 'ContactSyncDMListCTADismissed';
        mike = true;
        mike = oscar.bind(golf)(report, mike);
        mike = 1;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                entity = {};
                tango = argFoo;
                report = entity;
                mike = copyDataProperties(report, tango);
                zulu = true;
                mike = 'dmListCTADismissed';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['dismissDMListCTA'] = tango;
    tango = function() { // Original name: setDMListCTAFirstSeenDate
        _fun94028: for(var _fun94028_ip = 0; ; ) switch(_fun94028_ip) {
 0:
            report = _closure1_slot0;
            entity = _closure1_slot2;
            tango = 0;
            zulu = entity[tango];
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            oscar = zulu.Storage;
            zulu = oscar.get;
            report = 'contact_sync_dm_list_cta_first_seen_date';
            zulu = zulu.bind(oscar)(report);
            if(zulu) { _fun94028_ip = 100; continue _fun94028 }
 49:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[tango];
            mike = zulu.bind(entity)(mike);
            tango = mike.Storage;
            zulu = tango.set;
            mike = global;
            oscar = mike.Date;
            mike = oscar.now;
            mike = mike.bind(oscar)();
            mike = zulu.bind(tango)(report, mike);
 100:
            return entity;
        }
    };
    zulu['setDMListCTAFirstSeenDate'] = tango;
    mike = function() { // Original name: clearDismissState
        tango = _closure1_slot0;
        report = _closure1_slot2;
        zulu = 0;
        oscar = report[zulu];
        entity = undefined;
        oscar = tango.bind(entity)(oscar);
        options = oscar.Storage;
        golf = options.remove;
        oscar = 'ContactSyncUpsellCTADismissed';
        oscar = golf.bind(options)(oscar);
        zulu = report[zulu];
        zulu = tango.bind(entity)(zulu);
        report = zulu.Storage;
        tango = report.remove;
        zulu = 'ContactSyncDMListCTADismissed';
        zulu = tango.bind(report)(zulu);
        tango = _closure1_slot4;
        zulu = tango.setState;
        mike = function(argFoo) {
            entity = {};
            tango = argFoo;
            report = entity;
            mike = copyDataProperties(report, tango);
            zulu = false;
            mike = 'upsellCTADismissed';
            entity[mike] = zulu;
            mike = 'dmListCTADismissed';
            entity[mike] = zulu;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearDismissState'] = mike;
    return entity;
})();