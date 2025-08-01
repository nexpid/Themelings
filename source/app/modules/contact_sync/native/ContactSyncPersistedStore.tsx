// app/modules/contact_sync/native/ContactSyncPersistedStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var5 = function setStoredContacts(arg1) {
        var9 = arg1;
        var _closure2_slot0 = var9;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 0;
        var4 = var5[var1];
        var1 = undefined;
        var4 = var6.bind(var1)(var4);
        var8 = var4.Storage;
        var7 = var8.set;
        var4 = 'V2_DCD_CONTACTS_STORAGE_KEY';
        var4 = var7.bind(var8)(var4, var9);
        var4 = 1;
        var4 = var5[var4];
        var7 = var6.bind(var1)(var4);
        var6 = var7.batchUpdates;
        var4 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = _closure2_slot0;
                var2 = 'storedContacts';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var4 = var6.bind(var7)(var4);
        var4 = _closure1_slot1;
        var3 = 2;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'CONTACT_SYNC_STORED_CONTACTS';
            var1['type'] = var4;
            var5 = _closure2_slot0;
            var4 = '';
            var4 = var4 === var5;
            var1['empty'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot3 = var5;
    var6 = 0;
    var4 = var8[var6];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var11 = var4.Storage;
    var10 = var11.asyncGet;
    var9 = 'V2_DCD_CONTACTS_STORAGE_KEY';
    var4 = function(arg1) {
        var3 = _closure1_slot3;
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var11)(var9, var4);
    var4 = 3;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var9 = var10.create;
    var4 = function() {
        var1 = {'loadedPolicyNotice': false, 'storedContacts': '', 'upsellCTADismissed': false, 'policyUpdateNoticeDismissed': false, 'dmListCTADismissed': false};
        return var1;
    };
    var4 = var9.bind(var10)(var4);
    var _closure1_slot4 = var4;
    var9 = var8[var6];
    var9 = var7.bind(var1)(var9);
    var12 = var9.Storage;
    var11 = var12.asyncGet;
    var10 = 'ContactSyncDMListCTADismissed';
    var9 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = global;
            var5 = var4.Boolean;
            var1 = undefined;
            var3 = arg1;
            var3 = var5.bind(var1)(var3);
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 0;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var7 = var5.Storage;
            var6 = var7.get;
            var5 = 'contact_sync_dm_list_cta_first_seen_date';
            var5 = var6.bind(var7)(var5);
            var6 = null;
            if(!(var6 == var5)) { _fun0001_ip = 89; continue _fun0001 }
 74:
            var7 = var4.Date;
            var6 = var7.now;
            var5 = var6.bind(var7)();
 89:
            var6 = var4.Date;
            var4 = var6.now;
            var4 = var4.bind(var6)();
            var5 = var4 - var5;
            var4 = 5184000000.0;
            if(!(var5 > var4)) { _fun0001_ip = 128; continue _fun0001 }
 122:
            var4 = true;
            _closure2_slot0 = var4;
 128:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 1;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.setState;
                var1 = {};
                var4 = _closure2_slot0;
                var1['dmListCTADismissed'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var9 = var11.bind(var12)(var10, var9);
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var11 = var6.Storage;
    var10 = var11.asyncGet;
    var9 = 'ContactSyncUpsellCTADismissed';
    var6 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var4 = !var4;
            var4 = !var4;
            var1['upsellCTADismissed'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var6 = var10.bind(var11)(var9, var6);
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/contact_sync/native/ContactSyncPersistedStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['setStoredContacts'] = var5;
    var5 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 0;
            var1 = var1[var2];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var3 = var1.Storage;
            var1 = var3.get;
            var7 = 'V2_DCD_CONTACTS_STORAGE_KEY';
            var3 = var1.bind(var3)(var7);
            var1 = null;
            var6 = var1 != var3;
            var1 = '';
            if(!var6) { _fun0002_ip = 62; continue _fun0002 }
 59:
            var1 = var3;
 62:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var6 = var2.Storage;
            var2 = var6.remove;
            var2 = var2.bind(var6)(var7);
            var2 = 1;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.setState;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = '';
                    var2 = 'storedContacts';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['deleteStoredContacts'] = var5;
    var3['useContactSyncStore'] = var4;
    var4 = function dismissUpsellCTA() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 0;
        var2 = var4[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var7 = var2.Storage;
        var6 = var7.set;
        var5 = 'ContactSyncUpsellCTADismissed';
        var2 = true;
        var2 = var6.bind(var7)(var5, var2);
        var2 = 1;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = true;
                var2 = 'upsellCTADismissed';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dismissUpsellCTA'] = var4;
    var4 = function dismissDMListCTA() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 0;
        var2 = var4[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var7 = var2.Storage;
        var6 = var7.set;
        var5 = 'ContactSyncDMListCTADismissed';
        var2 = true;
        var2 = var6.bind(var7)(var5, var2);
        var2 = 1;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = true;
                var2 = 'dmListCTADismissed';
                var1[var2] = var3;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dismissDMListCTA'] = var4;
    var4 = function setDMListCTAFirstSeenDate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 0;
            var3 = var1[var4];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var6 = var3.Storage;
            var3 = var6.get;
            var5 = 'contact_sync_dm_list_cta_first_seen_date';
            var3 = var3.bind(var6)(var5);
            if(var3) { _fun0003_ip = 100; continue _fun0003 }
 49:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = global;
            var6 = var2.Date;
            var2 = var6.now;
            var2 = var2.bind(var6)();
            var2 = var3.bind(var4)(var5, var2);
 100:
            return var1;
        }
    };
    var3['setDMListCTAFirstSeenDate'] = var4;
    var2 = function clearDismissState() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 0;
        var6 = var5[var3];
        var1 = undefined;
        var6 = var4.bind(var1)(var6);
        var8 = var6.Storage;
        var7 = var8.remove;
        var6 = 'ContactSyncUpsellCTADismissed';
        var6 = var7.bind(var8)(var6);
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var5 = var3.Storage;
        var4 = var5.remove;
        var3 = 'ContactSyncDMListCTADismissed';
        var3 = var4.bind(var5)(var3);
        var4 = _closure1_slot4;
        var3 = var4.setState;
        var2 = function(arg1) {
            var1 = {};
            var4 = arg1;
            var5 = var1;
            var2 = copyDataProperties(var5, var4);
            var3 = false;
            var2 = 'upsellCTADismissed';
            var1[var2] = var3;
            var2 = 'dmListCTADismissed';
            var1[var2] = var3;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearDismissState'] = var2;
    return var1;
})();