// discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var5 = {};
    var6 = 0;
    var5['SKIP_MIGRATION'] = var6;
    var1 = 'SKIP_MIGRATION';
    var5[var6] = var1;
    var7 = 1;
    var5['SEND_DATA'] = var7;
    var1 = 'SEND_DATA';
    var5[var7] = var1;
    var4 = 2;
    var5['DATA_MIGRATED'] = var4;
    var1 = 'DATA_MIGRATED';
    var5[var4] = var1;
    var4 = 3;
    var5['DATA_MIGRATED_CONFIRMED'] = var4;
    var1 = 'DATA_MIGRATED_CONFIRMED';
    var5[var4] = var1;
    var4 = {};
    var4['MIGRATION_SOURCE_DOMAIN'] = var6;
    var1 = 'MIGRATION_SOURCE_DOMAIN';
    var4[var6] = var1;
    var4['MIGRATION_DESTINATION_DOMAIN'] = var7;
    var1 = 'MIGRATION_DESTINATION_DOMAIN';
    var4[var7] = var1;
    var _closure1_slot0 = var4;
    var1 = dependencyMap;
    var7 = var1[var6];
    var6 = require;
    var1 = undefined;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['DomainMigrationEventType'] = var5;
    var3['DomainMigrationMessageFrom'] = var4;
    var4 = 'domainMigrationSuccess';
    var3['DOMAIN_MIGRATION_SUCCESS_KEY'] = var4;
    var4 = 'domainMigrationFailed';
    var3['DOMAIN_MIGRATION_FAILED_KEY'] = var4;
    var4 = function sendPostMessage(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg2;
            var1 = _closure1_slot0;
            var2 = var1.MIGRATION_SOURCE_DOMAIN;
            var1 = arg3;
            if(!(var1 !== var2)) { _fun0001_ip = 45; continue _fun0001 }
 23:
            var1 = global;
            var1 = var1.window;
            var1 = var1.GLOBAL_ENV;
            var3 = var1.MIGRATION_SOURCE_ORIGIN;
            _fun0001_ip = 65; continue _fun0001;
 45:
            var1 = global;
            var1 = var1.window;
            var1 = var1.GLOBAL_ENV;
            var3 = var1.MIGRATION_DESTINATION_ORIGIN;
 65:
            var2 = var4.postMessage;
            var1 = {};
            var5 = arg1;
            var1['domainMigrationEvent'] = var5;
            var1 = var2.bind(var4)(var1, var3);
            var1 = undefined;
            return var1;
        }
    };
    var3['sendPostMessage'] = var4;
    var2 = function extractMessage(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot0;
            var2 = var1.MIGRATION_SOURCE_DOMAIN;
            var1 = arg2;
            if(!(var1 !== var2)) { _fun0002_ip = 45; continue _fun0002 }
 23:
            var1 = global;
            var1 = var1.window;
            var1 = var1.GLOBAL_ENV;
            var2 = var1.MIGRATION_SOURCE_ORIGIN;
            _fun0002_ip = 65; continue _fun0002;
 45:
            var1 = global;
            var1 = var1.window;
            var1 = var1.GLOBAL_ENV;
            var2 = var1.MIGRATION_DESTINATION_ORIGIN;
 65:
            var1 = var3.origin;
            var4 = var1 === var2;
            if(!var4) { _fun0002_ip = 95; continue _fun0002 }
 78:
            var1 = var3.data;
            var2 = var1.domainMigrationEvent;
            var1 = null;
            var4 = var1 != var2;
 95:
            var2 = null;
            var1 = null;
            if(!var4) { _fun0002_ip = 125; continue _fun0002 }
 102:
            var3 = var3.data;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 122; continue _fun0002 }
 116:
            var2 = var3.domainMigrationEvent;
 122:
            var1 = var2;
 125:
            return var1;
        }
    };
    var3['extractMessage'] = var2;
    return var1;
})();