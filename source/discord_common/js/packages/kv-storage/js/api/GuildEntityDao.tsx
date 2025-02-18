// discord_common/js/packages/kv-storage/js/api/GuildEntityDao.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = function() {
        report = function(argFoo, argBar, argBaz) { // Original name: GuildEntityDao
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                option = arguments[3];
                zuuluu = this;
                entity = undefined;
                if(!(option === entity)) { _fun00002_ip = 17; continue _fun00001 }
 15:
                option = true;
 17:
                oscard = _closure1_slot2;
                report = _closure2_slot0;
                report = oscard.bind(entity)(zuuluu, report);
                zuuluu['originalPrefix'] = michal;
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                tangon = 2;
                tangon = oscard[tangon];
                tangon = report.bind(entity)(tangon);
                golfie = tangon.Table;
                oscard = new Array(1);
                oscard[0] = michal;
                michal = golfie.prototype;
                tangon = Object.create(michal, {constructor: {value: golfie}});
                yankee = argBar;
                offset = argBaz;
                foxtra = tangon;
                romeon = oscard;
                verify = option;
                michal = new foxtra[golfie](romeon, yankee, offset, verify, option);
                michal = michal instanceof Object ? michal : tangon;
                zuuluu['table'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        entity = {};
        zuuluu = 'prefix';
        entity['key'] = zuuluu;
        zuuluu = function() { // Original name: get
            entity = this;
            entity = entity.table;
            entity = entity.prefix;
            return entity;
        };
        entity['get'] = zuuluu;
        zuuluu = new Array(19);
        zuuluu[0] = entity;
        entity = {};
        oscard = 'withoutLogging';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            oscard = _closure2_slot0;
            offset = entity.originalPrefix;
            michal = entity.table;
            verify = michal.tableId;
            entity = entity.table;
            option = entity.database;
            entity = oscard.prototype;
            michal = Object.create(entity, {constructor: {value: oscard}});
            golfie = false;
            yankee = michal;
            entity = new yankee[oscard](offset, verify, option, golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[1] = entity;
        entity = {};
        oscard = 'get';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            zuuluu = entity.table;
            michal = zuuluu.get;
            entity = new Array(2);
            tangon = argFoo;
            entity[0] = tangon;
            tangon = argBar;
            entity[1] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[2] = entity;
        entity = {};
        oscard = 'getMany';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            tangon = entity.table;
            zuuluu = tangon.getMany;
            michal = new Array(1);
            entity = argFoo;
            michal[0] = entity;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[3] = entity;
        entity = {};
        oscard = 'getRange';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            entity = argFoo;
            michal = this;
            report = michal.table;
            tangon = report.getRange;
            zuuluu = new Array(2);
            zuuluu[0] = entity;
            michal = argBar;
            zuuluu[1] = michal;
            michal = new Array(2);
            michal[0] = entity;
            entity = argBaz;
            michal[1] = entity;
            entity = argCor;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[4] = entity;
        entity = {};
        oscard = 'getKvEntries';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity.table;
            entity = michal.getKvEntries;
            entity = entity.bind(michal)();
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[5] = entity;
        entity = {};
        oscard = 'getMapEntries';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity.table;
            entity = michal.getMapEntries;
            entity = entity.bind(michal)();
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[6] = entity;
        entity = {};
        oscard = 'getIds';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.table;
            michal = zuuluu.getChildIds;
            entity = new Array(1);
            tangon = argFoo;
            entity[0] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[7] = entity;
        entity = {};
        oscard = 'getGuildIds';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            zuuluu = entity.table;
            michal = zuuluu.getChildIds;
            entity = new Array(0);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[8] = entity;
        entity = {};
        oscard = 'getGuildId';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.table;
            michal = zuuluu.getParentId;
            entity = [null];
            tangon = argFoo;
            entity[1] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[9] = entity;
        entity = {};
        oscard = 'put';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = arguments[2];
                tangon = this;
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                zuuluu = argBar;
                var _closure3_slot1 = zuuluu;
                oscard = undefined;
                if(!(michal === oscard)) { _fun00004_ip = 63; continue _fun00003 }
 28:
                report = _closure1_slot0;
                golfie = _closure1_slot1;
                zuuluu = 3;
                zuuluu = golfie[zuuluu];
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = zuuluu.ConflictOptions;
                michal = zuuluu.Replace;
 63:
                var _closure3_slot2 = michal;
                zuuluu = tangon.transaction;
                golfie = tangon.prefix;
                michal = global;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                report = '';
                michal = ' put';
                michal = oscard.bind(report)(golfie, michal);
                entity = function(argFoo) {
                    report = argFoo;
                    tangon = report.put;
                    zuuluu = _closure3_slot0;
                    michal = _closure3_slot1;
                    entity = _closure3_slot2;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[10] = entity;
        entity = {};
        oscard = 'putAll';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = arguments[2];
                tangon = this;
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                zuuluu = argBar;
                var _closure3_slot1 = zuuluu;
                oscard = undefined;
                if(!(michal === oscard)) { _fun00006_ip = 63; continue _fun00005 }
 28:
                report = _closure1_slot0;
                golfie = _closure1_slot1;
                zuuluu = 3;
                zuuluu = golfie[zuuluu];
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = zuuluu.ConflictOptions;
                michal = zuuluu.Replace;
 63:
                var _closure3_slot2 = michal;
                zuuluu = tangon.transaction;
                golfie = tangon.prefix;
                michal = global;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                report = '';
                michal = ' putAll';
                michal = oscard.bind(report)(golfie, michal);
                entity = function(argFoo) {
                    report = argFoo;
                    tangon = report.putAll;
                    zuuluu = _closure3_slot0;
                    michal = _closure3_slot1;
                    entity = _closure3_slot2;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[11] = entity;
        entity = {};
        oscard = 'replaceAll';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            tangon = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            zuuluu = tangon.transaction;
            golfie = tangon.prefix;
            michal = global;
            michal = michal.HermesInternal;
            oscard = michal.concat;
            report = '';
            michal = ' replaceAll';
            michal = oscard.bind(report)(golfie, michal);
            entity = function(argFoo) {
                tangon = argFoo;
                zuuluu = tangon.replaceAll;
                michal = _closure3_slot0;
                entity = _closure3_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[12] = entity;
        entity = {};
        oscard = 'delete';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            tangon = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            zuuluu = tangon.transaction;
            golfie = tangon.prefix;
            michal = global;
            michal = michal.HermesInternal;
            oscard = michal.concat;
            report = '';
            michal = ' delete';
            michal = oscard.bind(report)(golfie, michal);
            entity = function(argFoo) {
                tangon = argFoo;
                zuuluu = tangon.delete;
                michal = _closure3_slot0;
                entity = _closure3_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[13] = entity;
        entity = {};
        oscard = 'deleteGeneration';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            tangon = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            zuuluu = tangon.transaction;
            golfie = tangon.prefix;
            michal = global;
            michal = michal.HermesInternal;
            oscard = michal.concat;
            report = '';
            michal = ' deleteGeneration';
            michal = oscard.bind(report)(golfie, michal);
            entity = function(argFoo) {
                tangon = argFoo;
                zuuluu = tangon.deleteGeneration;
                michal = _closure3_slot0;
                entity = _closure3_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[14] = entity;
        entity = {};
        oscard = 'transaction';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = this;
            tangon = michal.table;
            zuuluu = tangon.transaction;
            michal = function(argFoo) {
                zuuluu = _closure3_slot0;
                tangon = _closure1_slot5;
                entity = tangon.prototype;
                michal = Object.create(entity, {constructor: {value: tangon}});
                report = argFoo;
                oscard = michal;
                entity = new oscard[tangon](report, tangon);
                michal = entity instanceof Object ? entity : michal;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[15] = entity;
        entity = {};
        oscard = 'upgradeTransaction';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot5;
            entity = this;
            tangon = entity.table;
            michal = tangon.upgradeTransaction;
            entity = argFoo;
            report = michal.bind(tangon)(entity);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = michal;
            entity = new oscard[zuuluu](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[16] = entity;
        entity = {};
        oscard = 'getManySyncUnsafe';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            tangon = entity.table;
            zuuluu = tangon.getManySyncUnsafe;
            michal = new Array(1);
            entity = argFoo;
            michal[0] = entity;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[17] = entity;
        entity = {};
        oscard = 'getMapEntriesSyncUnsafe';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity.table;
            entity = michal.getMapEntriesSyncUnsafe;
            entity = entity.bind(michal)();
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[18] = entity;
        entity = {};
        oscard = 'cell';
        entity['key'] = oscard;
        michal = function(argFoo, argBar, argBaz) { // Original name: value
            michal = argBar;
            entity = {};
            zuuluu = new Array(2);
            tangon = argFoo;
            zuuluu[0] = tangon;
            tangon = michal.id;
            zuuluu[1] = tangon;
            entity['key'] = zuuluu;
            entity['data'] = michal;
            michal = argBaz;
            entity['generation'] = michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(report, zuuluu, michal);
        return entity;
    };
    tangon = michal.bind(entity)();
    var _closure1_slot4 = tangon;
    michal = function() {
        report = function(argFoo) { // Original name: GuildEntityDaoTransaction
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argFoo;
            zuuluu['transaction'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        entity = {};
        zuuluu = 'put';
        entity['key'] = zuuluu;
        zuuluu = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscard = arguments[2];
                report = this;
                zuuluu = undefined;
                if(!(oscard === zuuluu)) { _fun00008_ip = 47; continue _fun00007 }
 12:
                michal = _closure1_slot0;
                tangon = _closure1_slot1;
                entity = 3;
                entity = tangon[entity];
                entity = michal.bind(zuuluu)(entity);
                entity = entity.ConflictOptions;
                oscard = entity.Replace;
 47:
                tangon = report.putWithGeneration;
                offset = argFoo;
                verify = argBar;
                option = null;
                yankee = report;
                golfie = oscard;
                entity = yankee[tangon](offset, verify, option, golfie, oscard);
                return entity;
            }
        };
        entity['value'] = zuuluu;
        zuuluu = new Array(6);
        zuuluu[0] = entity;
        entity = {};
        oscard = 'putWithGeneration';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = arguments[3];
                zuuluu = undefined;
                if(!(tangon === zuuluu)) { _fun00010_ip = 44; continue _fun00009 }
 9:
                michal = _closure1_slot0;
                report = _closure1_slot1;
                entity = 3;
                entity = report[entity];
                entity = michal.bind(zuuluu)(entity);
                entity = entity.ConflictOptions;
                tangon = entity.Replace;
 44:
                entity = this;
                zuuluu = entity.transaction;
                michal = zuuluu.put;
                option = _closure1_slot4;
                golfie = option.cell;
                oscard = argFoo;
                report = argBar;
                entity = argBaz;
                entity = golfie.bind(option)(oscard, report, entity);
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[1] = entity;
        entity = {};
        oscard = 'putAll';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                oscard = argBar;
                tangon = arguments[2];
                michal = argFoo;
                var _closure3_slot0 = michal;
                report = undefined;
                if(!(tangon === report)) { _fun00012_ip = 56; continue _fun00011 }
 21:
                zuuluu = _closure1_slot0;
                golfie = _closure1_slot1;
                michal = 3;
                michal = golfie[michal];
                michal = zuuluu.bind(report)(michal);
                michal = michal.ConflictOptions;
                tangon = michal.Replace;
 56:
                michal = this;
                zuuluu = michal.transaction;
                michal = zuuluu.putAll;
                report = oscard.map;
                entity = function(argFoo) {
                    report = _closure1_slot4;
                    tangon = report.cell;
                    zuuluu = _closure3_slot0;
                    michal = argFoo;
                    entity = null;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                };
                entity = report.bind(oscard)(entity);
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[2] = entity;
        entity = {};
        oscard = 'replaceAll';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            tangon = argFoo;
            zuuluu = this;
            entity = zuuluu.delete;
            entity = entity.bind(zuuluu)(tangon);
            michal = zuuluu.putAll;
            entity = argBar;
            entity = michal.bind(zuuluu)(tangon, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[3] = entity;
        entity = {};
        oscard = 'delete';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                entity = this;
                michal = undefined;
                zuuluu = arguments.length;
                michal = 0;
                if(!(michal !== zuuluu)) { _fun00014_ip = 83; continue _fun00013 }
 17:
                michal = 1;
                if(!(michal !== zuuluu)) { _fun00014_ip = 57; continue _fun00013 }
 24:
                tangon = entity.transaction;
                zuuluu = tangon.delete;
                michal = new Array(2);
                michal[0] = report;
                oscard = argBar;
                michal[1] = oscard;
                michal = zuuluu.bind(tangon)(michal);
                return michal;
 57:
                tangon = entity.transaction;
                zuuluu = tangon.delete;
                michal = new Array(1);
                michal[0] = report;
                michal = zuuluu.bind(tangon)(michal);
                return michal;
 83:
                zuuluu = entity.transaction;
                michal = zuuluu.delete;
                entity = new Array(0);
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[4] = entity;
        entity = {};
        oscard = 'deleteGeneration';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            report = entity.transaction;
            tangon = report.deleteGeneration;
            zuuluu = new Array(0);
            michal = argFoo;
            entity = argBar;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[5] = entity;
        entity = {};
        oscard = 'fromDatabaseTransaction';
        entity['key'] = oscard;
        michal = function(argFoo, argBar, argBaz) { // Original name: value
            zuuluu = _closure2_slot0;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            oscard = entity.TableTransaction;
            entity = oscard.prototype;
            michal = Object.create(entity, {constructor: {value: oscard}});
            verify = argFoo;
            option = argBar;
            golfie = argBaz;
            offset = michal;
            entity = new offset[oscard](verify, option, golfie, oscard);
            verify = entity instanceof Object ? entity : michal;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            offset = michal;
            entity = new offset[zuuluu](verify, option);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(report, zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    var _closure1_slot5 = michal;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = '../discord_common/js/packages/kv-storage/js/api/GuildEntityDao.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['GuildEntityDao'] = tangon;
    zuuluu['GuildEntityDaoTransaction'] = michal;
    return entity;
})();