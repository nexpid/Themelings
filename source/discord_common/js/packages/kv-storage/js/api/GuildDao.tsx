// discord_common/js/packages/kv-storage/js/api/GuildDao.tsx
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
        tangon = function(argFoo, argBar, argBaz) { // Original name: GuildDao
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
        var _closure2_slot0 = tangon;
        zuuluu = _closure1_slot3;
        entity = {};
        michal = 'prefix';
        entity['key'] = michal;
        michal = function() { // Original name: get
            entity = this;
            entity = entity.table;
            entity = entity.prefix;
            return entity;
        };
        entity['get'] = michal;
        michal = new Array(18);
        michal[0] = entity;
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
        michal[1] = entity;
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
        michal[2] = entity;
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
        michal[3] = entity;
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
        michal[4] = entity;
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
        michal[5] = entity;
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
        michal[6] = entity;
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
        michal[7] = entity;
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
        michal[8] = entity;
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
        michal[9] = entity;
        entity = {};
        oscard = 'put';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                golfie = arguments[3];
                oscard = this;
                zuuluu = undefined;
                if(!(golfie === zuuluu)) { _fun00004_ip = 47; continue _fun00003 }
 12:
                michal = _closure1_slot0;
                tangon = _closure1_slot1;
                entity = 3;
                entity = tangon[entity];
                entity = michal.bind(zuuluu)(entity);
                entity = entity.ConflictOptions;
                golfie = entity.Replace;
 47:
                report = oscard.putWithGeneration;
                romeon = argFoo;
                yankee = argBar;
                offset = argBaz;
                verify = null;
                foxtra = oscard;
                option = golfie;
                entity = foxtra[report](romeon, yankee, offset, verify, option, golfie);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'putWithGeneration';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = arguments[4];
                zuuluu = undefined;
                if(!(tangon === zuuluu)) { _fun00006_ip = 44; continue _fun00005 }
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
                zuuluu = entity.table;
                michal = zuuluu.put;
                entity = {};
                report = new Array(2);
                oscard = argFoo;
                report[0] = oscard;
                oscard = argBar;
                report[1] = oscard;
                entity['key'] = report;
                report = argBaz;
                entity['data'] = report;
                report = argCor;
                entity['generation'] = report;
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'delete';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = argFoo;
                entity = this;
                michal = undefined;
                zuuluu = arguments.length;
                michal = 0;
                if(!(michal !== zuuluu)) { _fun00008_ip = 83; continue _fun00007 }
 17:
                michal = 1;
                if(!(michal !== zuuluu)) { _fun00008_ip = 57; continue _fun00007 }
 24:
                tangon = entity.table;
                zuuluu = tangon.delete;
                michal = new Array(2);
                michal[0] = report;
                oscard = argBar;
                michal[1] = oscard;
                michal = zuuluu.bind(tangon)(michal);
                return michal;
 57:
                tangon = entity.table;
                zuuluu = tangon.delete;
                michal = new Array(1);
                michal[0] = report;
                michal = zuuluu.bind(tangon)(michal);
                return michal;
 83:
                zuuluu = entity.table;
                michal = zuuluu.delete;
                entity = new Array(0);
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'deleteGeneration';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            report = entity.table;
            tangon = report.deleteGeneration;
            zuuluu = new Array(0);
            michal = argFoo;
            entity = argBar;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[13] = entity;
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
                tangon = _closure1_slot4;
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
        michal[14] = entity;
        entity = {};
        oscard = 'upgradeTransaction';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot4;
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
        michal[15] = entity;
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
        michal[16] = entity;
        entity = {};
        oscard = 'getMapEntriesSyncUnsafe';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            michal = entity.table;
            entity = michal.getMapEntriesSyncUnsafe;
            entity = entity.bind(michal)();
            return entity;
        };
        entity['value'] = report;
        michal[17] = entity;
        entity = undefined;
        entity = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    tangon = michal.bind(entity)();
    michal = function() {
        report = function(argFoo) { // Original name: GuildDaoTransaction
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argFoo;
            zuuluu['state'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        entity = {};
        zuuluu = 'put';
        entity['key'] = zuuluu;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                option = arguments[3];
                golfie = this;
                entity = undefined;
                if(!(option === entity)) { _fun00010_ip = 47; continue _fun00009 }
 12:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 3;
                michal = tangon[michal];
                michal = zuuluu.bind(entity)(michal);
                michal = michal.ConflictOptions;
                option = michal.Replace;
 47:
                oscard = golfie.putWithGeneration;
                foxtra = argFoo;
                romeon = argBar;
                yankee = argBaz;
                offset = null;
                backup = golfie;
                verify = option;
                michal = backup[oscard](foxtra, romeon, yankee, offset, verify, option);
                return entity;
            }
        };
        entity['value'] = zuuluu;
        zuuluu = new Array(4);
        zuuluu[0] = entity;
        entity = {};
        oscard = 'putWithGeneration';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = arguments[4];
                zuuluu = undefined;
                if(!(tangon === zuuluu)) { _fun00012_ip = 44; continue _fun00011 }
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
                zuuluu = entity.state;
                michal = zuuluu.put;
                entity = {};
                report = new Array(2);
                oscard = argFoo;
                report[0] = oscard;
                oscard = argBar;
                report[1] = oscard;
                entity['key'] = report;
                report = argBaz;
                entity['data'] = report;
                report = argCor;
                entity['generation'] = report;
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[1] = entity;
        entity = {};
        oscard = 'delete';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                oscard = argFoo;
                michal = this;
                entity = undefined;
                zuuluu = undefined;
                tangon = arguments.length;
                zuuluu = 0;
                if(!(zuuluu !== tangon)) { _fun00014_ip = 83; continue _fun00013 }
 19:
                zuuluu = 1;
                if(!(zuuluu !== tangon)) { _fun00014_ip = 58; continue _fun00013 }
 26:
                report = michal.state;
                tangon = report.delete;
                zuuluu = new Array(2);
                zuuluu[0] = oscard;
                golfie = argBar;
                zuuluu[1] = golfie;
                zuuluu = tangon.bind(report)(zuuluu);
                _fun00014_ip = 102; continue _fun00013;
 58:
                report = michal.state;
                tangon = report.delete;
                zuuluu = new Array(1);
                zuuluu[0] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                _fun00014_ip = 102; continue _fun00013;
 83:
                tangon = michal.state;
                zuuluu = tangon.delete;
                michal = new Array(0);
                michal = zuuluu.bind(tangon)(michal);
 102:
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[2] = entity;
        entity = {};
        oscard = 'deleteGeneration';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            report = entity.state;
            tangon = report.deleteGeneration;
            zuuluu = new Array(0);
            michal = argFoo;
            entity = argBar;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[3] = entity;
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
    var _closure1_slot4 = michal;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = '../discord_common/js/packages/kv-storage/js/api/GuildDao.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['GuildDao'] = tangon;
    zuuluu['GuildDaoTransaction'] = michal;
    return entity;
})();