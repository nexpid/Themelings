// app/modules/contact_sync/native/ContactSyncPersistedStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    report = function(argFoo) { // Original name: setStoredContacts
        verify = argFoo;
        var _closure2_slot0 = verify;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        entity = 0;
        tangon = report[entity];
        entity = undefined;
        tangon = oscard.bind(entity)(tangon);
        option = tangon.Storage;
        golfie = option.set;
        tangon = 'V2_DCD_CONTACTS_STORAGE_KEY';
        tangon = golfie.bind(option)(tangon, verify);
        tangon = 1;
        tangon = report[tangon];
        golfie = oscard.bind(entity)(tangon);
        oscard = golfie.batchUpdates;
        tangon = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot0;
                michal = 'storedContacts';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        tangon = oscard.bind(golfie)(tangon);
        tangon = _closure1_slot1;
        zuuluu = 2;
        zuuluu = report[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'CONTACT_SYNC_STORED_CONTACTS';
            entity['type'] = tangon;
            report = _closure2_slot0;
            tangon = '';
            tangon = tangon === report;
            entity['empty'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot3 = report;
    oscard = 0;
    tangon = option[oscard];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    yankee = tangon.Storage;
    offset = yankee.asyncGet;
    verify = 'V2_DCD_CONTACTS_STORAGE_KEY';
    tangon = function(argFoo) {
        zuuluu = _closure1_slot3;
        entity = undefined;
        michal = argFoo;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = offset.bind(yankee)(verify, tangon);
    tangon = 3;
    tangon = option[tangon];
    offset = golfie.bind(entity)(tangon);
    verify = offset.create;
    tangon = function() {
        entity = {'loadedPolicyNotice': false, 'storedContacts': '', 'upsellCTADismissed': false, 'policyUpdateNoticeDismissed': false, 'dmListCTADismissed': false};
        return entity;
    };
    tangon = verify.bind(offset)(tangon);
    var _closure1_slot4 = tangon;
    verify = option[oscard];
    verify = golfie.bind(entity)(verify);
    romeon = verify.Storage;
    yankee = romeon.asyncGet;
    offset = 'ContactSyncDMListCTADismissed';
    verify = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = global;
            report = tangon.Boolean;
            entity = undefined;
            zuuluu = argFoo;
            zuuluu = report.bind(entity)(zuuluu);
            var _closure2_slot0 = zuuluu;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 0;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            golfie = report.Storage;
            oscard = golfie.get;
            report = 'contact_sync_dm_list_cta_first_seen_date';
            report = oscard.bind(golfie)(report);
            oscard = null;
            if(!(oscard == report)) { _fun00002_ip = 89; continue _fun00001 }
 74:
            golfie = tangon.Date;
            oscard = golfie.now;
            report = oscard.bind(golfie)();
 89:
            oscard = tangon.Date;
            tangon = oscard.now;
            tangon = tangon.bind(oscard)();
            report = tangon - report;
            tangon = 5184000000.0;
            if(!(report > tangon)) { _fun00002_ip = 128; continue _fun00001 }
 122:
            tangon = true;
            _closure2_slot0 = tangon;
 128:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.setState;
                entity = {};
                tangon = _closure2_slot0;
                entity['dmListCTADismissed'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    verify = yankee.bind(romeon)(offset, verify);
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    yankee = oscard.Storage;
    offset = yankee.asyncGet;
    verify = 'ContactSyncUpsellCTADismissed';
    oscard = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = {};
            tangon = _closure2_slot0;
            tangon = !tangon;
            tangon = !tangon;
            entity['upsellCTADismissed'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    oscard = offset.bind(yankee)(verify, oscard);
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/contact_sync/native/ContactSyncPersistedStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['setStoredContacts'] = report;
    report = function() {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            michal = 0;
            entity = entity[michal];
            tangon = undefined;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = entity.Storage;
            entity = zuuluu.get;
            golfie = 'V2_DCD_CONTACTS_STORAGE_KEY';
            zuuluu = entity.bind(zuuluu)(golfie);
            entity = null;
            oscard = entity != zuuluu;
            entity = '';
            if(!oscard) { _fun00004_ip = 62; continue _fun00003 }
 59:
            entity = zuuluu;
 62:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            oscard = michal.Storage;
            michal = oscard.remove;
            michal = michal.bind(oscard)(golfie);
            michal = 1;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.setState;
                entity = function(argFoo) {
                    entity = {};
                    tangon = argFoo;
                    report = entity;
                    michal = copyDataProperties(report, tangon);
                    zuuluu = '';
                    michal = 'storedContacts';
                    entity[michal] = zuuluu;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['deleteStoredContacts'] = report;
    zuuluu['useContactSyncStore'] = tangon;
    tangon = function() { // Original name: dismissUpsellCTA
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 0;
        michal = tangon[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        golfie = michal.Storage;
        oscard = golfie.set;
        report = 'ContactSyncUpsellCTADismissed';
        michal = true;
        michal = oscard.bind(golfie)(report, michal);
        michal = 1;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = true;
                michal = 'upsellCTADismissed';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['dismissUpsellCTA'] = tangon;
    tangon = function() { // Original name: dismissDMListCTA
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 0;
        michal = tangon[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        golfie = michal.Storage;
        oscard = golfie.set;
        report = 'ContactSyncDMListCTADismissed';
        michal = true;
        michal = oscard.bind(golfie)(report, michal);
        michal = 1;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                tangon = argFoo;
                report = entity;
                michal = copyDataProperties(report, tangon);
                zuuluu = true;
                michal = 'dmListCTADismissed';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['dismissDMListCTA'] = tangon;
    tangon = function() { // Original name: setDMListCTAFirstSeenDate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot0;
            entity = _closure1_slot2;
            tangon = 0;
            zuuluu = entity[tangon];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            oscard = zuuluu.Storage;
            zuuluu = oscard.get;
            report = 'contact_sync_dm_list_cta_first_seen_date';
            zuuluu = zuuluu.bind(oscard)(report);
            if(zuuluu) { _fun00006_ip = 100; continue _fun00005 }
 49:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[tangon];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.Storage;
            zuuluu = tangon.set;
            michal = global;
            oscard = michal.Date;
            michal = oscard.now;
            michal = michal.bind(oscard)();
            michal = zuuluu.bind(tangon)(report, michal);
 100:
            return entity;
        }
    };
    zuuluu['setDMListCTAFirstSeenDate'] = tangon;
    michal = function() { // Original name: clearDismissState
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        zuuluu = 0;
        oscard = report[zuuluu];
        entity = undefined;
        oscard = tangon.bind(entity)(oscard);
        option = oscard.Storage;
        golfie = option.remove;
        oscard = 'ContactSyncUpsellCTADismissed';
        oscard = golfie.bind(option)(oscard);
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.Storage;
        tangon = report.remove;
        zuuluu = 'ContactSyncDMListCTADismissed';
        zuuluu = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot4;
        zuuluu = tangon.setState;
        michal = function(argFoo) {
            entity = {};
            tangon = argFoo;
            report = entity;
            michal = copyDataProperties(report, tangon);
            zuuluu = false;
            michal = 'upsellCTADismissed';
            entity[michal] = zuuluu;
            michal = 'dmListCTADismissed';
            entity[michal] = zuuluu;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearDismissState'] = michal;
    return entity;
})();