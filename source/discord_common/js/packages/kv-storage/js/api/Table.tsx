// discord_common/js/packages/kv-storage/js/api/Table.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar) { // Original name: prefixCell
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            golfie = argBar;
            tangon = golfie.length;
            michal = 0;
            entity = zuuluu;
            if(!(michal !== tangon)) { _fun00002_ip = 91; continue _fun00001 }
 20:
            michal = {};
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 3;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.combineKey;
            tangon = zuuluu.key;
            tangon = report.bind(oscard)(golfie, tangon);
            michal['key'] = tangon;
            tangon = zuuluu.data;
            michal['data'] = tangon;
            zuuluu = zuuluu.generation;
            michal['generation'] = zuuluu;
            entity = michal;
 91:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: prefixCells
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            report = entity.length;
            zuuluu = 0;
            entity = tangon;
            if(!(zuuluu !== report)) { _fun00004_ip = 41; continue _fun00003 }
 26:
            zuuluu = tangon.map;
            michal = function(argFoo) {
                tangon = _closure1_slot6;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 41:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    michal = 2;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar, argBaz, argCor) { // Original name: Table
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                report = _closure1_slot3;
                michal = _closure2_slot1;
                entity = undefined;
                michal = report.bind(entity)(zuuluu, michal);
                michal = {};
                tangon = function(argFoo) { // Original name: getLatest
                    entity = _closure3_slot0;
                    tangon = entity.database;
                    zuuluu = tangon.execute;
                    michal = {};
                    report = 'messages.get_latest';
                    michal['type'] = report;
                    report = entity.tableId;
                    michal['table'] = report;
                    report = argFoo;
                    michal['guildId'] = report;
                    entity = entity.defaultDebugTag;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                michal['getLatest'] = tangon;
                zuuluu['messages'] = michal;
                michal = argFoo;
                zuuluu['prefix'] = michal;
                michal = argBar;
                zuuluu['tableId'] = michal;
                michal = argBaz;
                zuuluu['database'] = michal;
                tangon = argCor;
                michal = null;
                if(!tangon) { _fun00006_ip = 86; continue _fun00005 }
 84:
                michal = undefined;
 86:
                zuuluu['defaultDebugTag'] = michal;
                return entity;
            }
        };
        var _closure2_slot1 = zuuluu;
        report = {};
        michal = 'close';
        report['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            michal = entity.database;
            entity = michal.close;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = michal;
        michal = new Array(18);
        michal[0] = report;
        report = {};
        golfie = 'get';
        report['key'] = golfie;
        option = _closure1_slot2;
        entity = undefined;
        golfie = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 69; continue _fun00007 }
 10:
                    tangon = report.getMany;
                    zuuluu = {};
                    michal = 1;
                    zuuluu['limit'] = michal;
                    michal = argFoo;
                    michal = tangon.bind(report)(michal, zuuluu);
                    SaveGenerator(address=39);
 37:
                    return michal;
 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 66; continue _fun00007 }
 45:
                    zuuluu = 0;
                    tangon = michal[zuuluu];
                    zuuluu = null;
                    report = zuuluu != tangon;
                    if(!report) { _fun00008_ip = 63; continue _fun00007 }
 60:
                    zuuluu = tangon;
 63:
                    return zuuluu;
 66:
                    return michal;
 69:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot0 = golfie;
        golfie = function() { // Original name: get
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        michal[1] = report;
        report = {};
        golfie = 'getMany';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                offset = arguments[0];
                oscard = arguments[1];
                entity = this;
                report = undefined;
                if(!(offset === report)) { _fun00010_ip = 19; continue _fun00009 }
 15:
                offset = new Array(0);
 19:
                tangon = entity.database;
                zuuluu = tangon.execute;
                michal = {};
                golfie = 'kv.get_many';
                michal['type'] = golfie;
                golfie = entity.tableId;
                michal['table'] = golfie;
                option = _closure1_slot0;
                verify = _closure1_slot1;
                golfie = 3;
                golfie = verify[golfie];
                verify = option.bind(report)(golfie);
                option = verify.combineKeyPrefix;
                golfie = entity.prefix;
                golfie = option.bind(verify)(golfie, offset);
                michal['key'] = golfie;
                golfie = null;
                verify = golfie == oscard;
                option = undefined;
                if(verify) { _fun00010_ip = 116; continue _fun00009 }
 110:
                option = oscard.ordering;
 116:
                michal['ordering'] = option;
                golfie = golfie == oscard;
                report = undefined;
                if(golfie) { _fun00010_ip = 136; continue _fun00009 }
 130:
                report = oscard.limit;
 136:
                michal['limit'] = report;
                entity = entity.defaultDebugTag;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[2] = report;
        report = {};
        golfie = 'getRange';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                oscard = argBaz;
                entity = this;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 3;
                golfie = tangon[michal];
                report = undefined;
                offset = zuuluu.bind(report)(golfie);
                verify = offset.combineKey;
                option = entity.prefix;
                golfie = argFoo;
                verify = verify.bind(offset)(option, golfie);
                michal = tangon[michal];
                golfie = zuuluu.bind(report)(michal);
                tangon = golfie.combineKey;
                zuuluu = entity.prefix;
                michal = argBar;
                option = tangon.bind(golfie)(zuuluu, michal);
                tangon = entity.database;
                zuuluu = tangon.execute;
                michal = {};
                golfie = 'kv.get_range';
                michal['type'] = golfie;
                golfie = entity.tableId;
                michal['table'] = golfie;
                golfie = new Array(2);
                golfie[0] = verify;
                golfie[1] = option;
                michal['range'] = golfie;
                golfie = null;
                verify = golfie == oscard;
                option = undefined;
                if(verify) { _fun00012_ip = 151; continue _fun00011 }
 145:
                option = oscard.ordering;
 151:
                michal['ordering'] = option;
                golfie = golfie == oscard;
                report = undefined;
                if(golfie) { _fun00012_ip = 171; continue _fun00011 }
 165:
                report = oscard.limit;
 171:
                michal['limit'] = report;
                entity = entity.defaultDebugTag;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[3] = report;
        report = {};
        golfie = 'getKvEntries';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                option = arguments[0];
                entity = this;
                golfie = undefined;
                if(!(option === golfie)) { _fun00014_ip = 16; continue _fun00013 }
 12:
                option = new Array(0);
 16:
                tangon = entity.database;
                zuuluu = tangon.execute;
                michal = {};
                report = 'kv.get_kv_entries';
                michal['type'] = report;
                report = entity.tableId;
                michal['table'] = report;
                oscard = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golfie = oscard.bind(golfie)(report);
                oscard = golfie.combineKeyPrefix;
                report = entity.prefix;
                report = oscard.bind(golfie)(report, option);
                michal['key'] = report;
                entity = entity.defaultDebugTag;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[4] = report;
        report = {};
        golfie = 'getMapEntries';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                option = arguments[0];
                entity = this;
                golfie = undefined;
                if(!(option === golfie)) { _fun00016_ip = 16; continue _fun00015 }
 12:
                option = new Array(0);
 16:
                tangon = entity.database;
                zuuluu = tangon.execute;
                michal = {};
                report = 'kv.get_map_entries';
                michal['type'] = report;
                report = entity.tableId;
                michal['table'] = report;
                oscard = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golfie = oscard.bind(golfie)(report);
                oscard = golfie.combineKeyPrefix;
                report = entity.prefix;
                report = oscard.bind(golfie)(report, option);
                michal['key'] = report;
                entity = entity.defaultDebugTag;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[5] = report;
        report = {};
        golfie = 'getChildIds';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                option = arguments[0];
                entity = this;
                golfie = undefined;
                if(!(option === golfie)) { _fun00018_ip = 16; continue _fun00017 }
 12:
                option = new Array(0);
 16:
                tangon = entity.database;
                zuuluu = tangon.execute;
                michal = {};
                report = 'kv.get_child_ids';
                michal['type'] = report;
                report = entity.tableId;
                michal['table'] = report;
                oscard = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golfie = oscard.bind(golfie)(report);
                oscard = golfie.combineKeyPrefix;
                report = entity.prefix;
                report = oscard.bind(golfie)(report, option);
                michal['key'] = report;
                entity = entity.defaultDebugTag;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[6] = report;
        report = {};
        golfie = 'getParentId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                option = arguments[0];
                entity = this;
                golfie = undefined;
                if(!(option === golfie)) { _fun00020_ip = 16; continue _fun00019 }
 12:
                option = new Array(0);
 16:
                tangon = entity.database;
                zuuluu = tangon.execute;
                michal = {};
                report = 'kv.get_parent_id';
                michal['type'] = report;
                report = entity.tableId;
                michal['table'] = report;
                oscard = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golfie = oscard.bind(golfie)(report);
                oscard = golfie.combineKey;
                report = entity.prefix;
                report = oscard.bind(golfie)(report, option);
                michal['key'] = report;
                entity = entity.defaultDebugTag;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[7] = report;
        report = {};
        golfie = 'put';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                oscard = arguments[1];
                entity = this;
                option = undefined;
                if(!(oscard === option)) { _fun00022_ip = 47; continue _fun00021 }
 12:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 4;
                michal = tangon[michal];
                michal = zuuluu.bind(option)(michal);
                michal = michal.ConflictOptions;
                oscard = michal.Replace;
 47:
                tangon = entity.database;
                zuuluu = tangon.execute;
                michal = {};
                report = 'kv.put_one';
                michal['type'] = report;
                report = entity.tableId;
                michal['table'] = report;
                offset = _closure1_slot6;
                verify = entity.prefix;
                golfie = argFoo;
                golfie = offset.bind(option)(golfie, verify);
                michal['cell'] = golfie;
                golfie = _closure1_slot0;
                verify = _closure1_slot1;
                report = 4;
                report = verify[report];
                report = golfie.bind(option)(report);
                report = report.ConflictOptions;
                report = report.Replace;
                report = oscard === report;
                michal['overwrite'] = report;
                entity = entity.defaultDebugTag;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[8] = report;
        report = {};
        golfie = 'putAll';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                oscard = arguments[1];
                entity = this;
                option = undefined;
                if(!(oscard === option)) { _fun00024_ip = 47; continue _fun00023 }
 12:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 4;
                michal = tangon[michal];
                michal = zuuluu.bind(option)(michal);
                michal = michal.ConflictOptions;
                oscard = michal.Replace;
 47:
                tangon = entity.database;
                zuuluu = tangon.execute;
                michal = {};
                report = 'kv.put_many';
                michal['type'] = report;
                report = entity.tableId;
                michal['table'] = report;
                offset = _closure1_slot7;
                verify = entity.prefix;
                golfie = argFoo;
                golfie = offset.bind(option)(golfie, verify);
                michal['cells'] = golfie;
                golfie = _closure1_slot0;
                verify = _closure1_slot1;
                report = 4;
                report = verify[report];
                report = golfie.bind(option)(report);
                report = report.ConflictOptions;
                report = report.Replace;
                report = oscard === report;
                michal['overwrite'] = report;
                entity = entity.defaultDebugTag;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[9] = report;
        report = {};
        golfie = 'replaceAll';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            zuuluu = tangon.transaction;
            michal = tangon.defaultDebugTag;
            entity = function(argFoo) {
                zuuluu = argFoo;
                entity = zuuluu.delete;
                entity = entity.bind(zuuluu)();
                michal = zuuluu.putAll;
                entity = _closure3_slot0;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        michal[10] = report;
        report = {};
        golfie = 'delete';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                option = arguments[0];
                entity = this;
                golfie = undefined;
                if(!(option === golfie)) { _fun00026_ip = 16; continue _fun00025 }
 12:
                option = new Array(0);
 16:
                tangon = entity.database;
                zuuluu = tangon.execute;
                michal = {};
                report = 'kv.delete_many';
                michal['type'] = report;
                report = entity.tableId;
                michal['table'] = report;
                oscard = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golfie = oscard.bind(golfie)(report);
                oscard = golfie.combineKeyPrefix;
                report = entity.prefix;
                report = oscard.bind(golfie)(report, option);
                michal['key'] = report;
                entity = entity.defaultDebugTag;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[11] = report;
        report = {};
        golfie = 'deleteRange';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            entity = this;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            oscard = report[michal];
            zuuluu = undefined;
            verify = tangon.bind(zuuluu)(oscard);
            option = verify.combineKey;
            golfie = entity.prefix;
            oscard = argFoo;
            golfie = option.bind(verify)(golfie, oscard);
            michal = report[michal];
            report = tangon.bind(zuuluu)(michal);
            tangon = report.combineKey;
            zuuluu = entity.prefix;
            michal = argBar;
            oscard = tangon.bind(report)(zuuluu, michal);
            tangon = entity.database;
            zuuluu = tangon.execute;
            michal = {};
            report = 'kv.delete_range';
            michal['type'] = report;
            report = entity.tableId;
            michal['table'] = report;
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            michal['range'] = report;
            entity = entity.defaultDebugTag;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        michal[12] = report;
        report = {};
        golfie = 'deleteGeneration';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                option = arguments[0];
                entity = this;
                golfie = undefined;
                if(!(option === golfie)) { _fun00028_ip = 16; continue _fun00027 }
 12:
                option = new Array(0);
 16:
                tangon = entity.database;
                zuuluu = tangon.execute;
                michal = {};
                report = 'kv.delete_generation';
                michal['type'] = report;
                report = entity.tableId;
                michal['table'] = report;
                oscard = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golfie = oscard.bind(golfie)(report);
                oscard = golfie.combineKeyPrefix;
                report = entity.prefix;
                report = oscard.bind(golfie)(report, option);
                michal['key'] = report;
                report = arguments[2];
                michal['generation'] = report;
                report = arguments[1];
                michal['comparer'] = report;
                entity = entity.defaultDebugTag;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[13] = report;
        report = {};
        golfie = 'transaction';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = argFoo;
            var _closure3_slot1 = zuuluu;
            tangon = michal.database;
            zuuluu = tangon.transaction;
            michal = function(argFoo) {
                zuuluu = _closure3_slot1;
                oscard = _closure1_slot5;
                entity = _closure3_slot0;
                verify = entity.prefix;
                option = entity.tableId;
                entity = oscard.prototype;
                michal = Object.create(entity, {constructor: {value: oscard}});
                golfie = argFoo;
                offset = michal;
                entity = new offset[oscard](verify, option, golfie, oscard);
                michal = entity instanceof Object ? entity : michal;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        michal[14] = report;
        report = {};
        golfie = 'upgradeTransaction';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            report = _closure1_slot5;
            option = entity.prefix;
            golfie = entity.tableId;
            entity = report.prototype;
            michal = Object.create(entity, {constructor: {value: report}});
            oscard = argFoo;
            verify = michal;
            entity = new verify[report](option, golfie, oscard, report);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        report['value'] = golfie;
        michal[15] = report;
        report = {};
        golfie = 'getManySyncUnsafe';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                verify = arguments[0];
                report = arguments[1];
                oscard = this;
                tangon = undefined;
                if(!(verify === tangon)) { _fun00030_ip = 19; continue _fun00029 }
 15:
                verify = new Array(0);
 19:
                zuuluu = oscard.database;
                michal = zuuluu.executeSync;
                entity = {};
                golfie = 'kv.get_many';
                entity['type'] = golfie;
                golfie = oscard.tableId;
                entity['table'] = golfie;
                option = _closure1_slot0;
                offset = _closure1_slot1;
                golfie = 3;
                golfie = offset[golfie];
                option = option.bind(tangon)(golfie);
                golfie = option.combineKeyPrefix;
                oscard = oscard.prefix;
                oscard = golfie.bind(option)(oscard, verify);
                entity['key'] = oscard;
                oscard = null;
                option = oscard == report;
                golfie = undefined;
                if(option) { _fun00030_ip = 116; continue _fun00029 }
 110:
                golfie = report.ordering;
 116:
                entity['ordering'] = golfie;
                oscard = oscard == report;
                tangon = undefined;
                if(oscard) { _fun00030_ip = 136; continue _fun00029 }
 130:
                tangon = report.limit;
 136:
                entity['limit'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        report['value'] = golfie;
        michal[16] = report;
        report = {};
        golfie = 'getMapEntriesSyncUnsafe';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                golfie = arguments[0];
                tangon = this;
                option = undefined;
                if(!(golfie === option)) { _fun00032_ip = 16; continue _fun00031 }
 12:
                golfie = new Array(0);
 16:
                zuuluu = tangon.database;
                michal = zuuluu.executeSync;
                entity = {};
                report = 'kv.get_map_entries';
                entity['type'] = report;
                report = tangon.tableId;
                entity['table'] = report;
                oscard = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                oscard = oscard.bind(option)(report);
                report = oscard.combineKeyPrefix;
                tangon = tangon.prefix;
                tangon = report.bind(oscard)(tangon, golfie);
                entity['key'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        report['value'] = oscard;
        michal[17] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = michal.bind(entity)();
    michal = function() {
        report = function(argFoo, argBar, argBaz) { // Original name: TableTransaction
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = report.bind(entity)(zuuluu, michal);
            michal = {};
            report = function(argFoo) { // Original name: trimOrphans
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    oscard = argFoo;
                    michal = _closure3_slot0;
                    michal = michal.prefix;
                    michal = michal.length;
                    zuuluu = 1;
                    if(!(zuuluu === michal)) { _fun00034_ip = 110; continue _fun00033 }
 28:
                    michal = oscard.length;
                    if(!(zuuluu === michal)) { _fun00034_ip = 110; continue _fun00033 }
 37:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.transaction;
                    michal = zuuluu.add;
                    entity = {};
                    report = 'messages.trim_orphans';
                    entity['type'] = report;
                    report = tangon.tableId;
                    entity['table'] = report;
                    report = 0;
                    oscard = oscard[report];
                    entity['channelKey'] = oscard;
                    tangon = tangon.prefix;
                    tangon = tangon[report];
                    entity['messageKey'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
 110:
                    entity = global;
                    zuuluu = entity.Error;
                    entity = zuuluu.prototype;
                    michal = Object.create(entity, {constructor: {value: zuuluu}});
                    golfie = 'trimOrphans: only one prefix component is supported at this time';
                    option = michal;
                    entity = new option[zuuluu](golfie, oscard);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            michal['trimOrphans'] = report;
            report = function(argFoo, argBar) { // Original name: trimChannel
                report = _closure3_slot0;
                tangon = report.transaction;
                zuuluu = tangon.add;
                michal = {};
                entity = 'messages.trim_channel';
                michal['type'] = entity;
                entity = report.tableId;
                michal['table'] = entity;
                golfie = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 3;
                oscard = oscard[entity];
                entity = undefined;
                option = golfie.bind(entity)(oscard);
                golfie = option.combineKey;
                oscard = report.prefix;
                report = argFoo;
                report = golfie.bind(option)(oscard, report);
                michal['key'] = report;
                report = argBar;
                michal['limit'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal['trimChannel'] = report;
            report = function(argFoo, argBar) { // Original name: trimChannelsIn
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    oscard = argFoo;
                    michal = _closure3_slot0;
                    michal = michal.prefix;
                    michal = michal.length;
                    zuuluu = 1;
                    if(!(zuuluu === michal)) { _fun00036_ip = 118; continue _fun00035 }
 28:
                    michal = oscard.length;
                    if(!(zuuluu === michal)) { _fun00036_ip = 118; continue _fun00035 }
 37:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.transaction;
                    michal = zuuluu.add;
                    entity = {};
                    report = 'messages.trim_channels_in';
                    entity['type'] = report;
                    report = tangon.tableId;
                    entity['table'] = report;
                    report = 0;
                    oscard = oscard[report];
                    entity['channelKey'] = oscard;
                    tangon = tangon.prefix;
                    tangon = tangon[report];
                    entity['messageKey'] = tangon;
                    tangon = argBar;
                    entity['limit'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
 118:
                    entity = global;
                    zuuluu = entity.Error;
                    entity = zuuluu.prototype;
                    michal = Object.create(entity, {constructor: {value: zuuluu}});
                    golfie = 'trimChannelsIn: only one prefix component is supported at this time';
                    option = michal;
                    entity = new option[zuuluu](golfie, oscard);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            michal['trimChannelsIn'] = report;
            tangon = function(argFoo, argBar) { // Original name: trimChannelsNotIn
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    oscard = argFoo;
                    michal = _closure3_slot0;
                    michal = michal.prefix;
                    michal = michal.length;
                    zuuluu = 1;
                    if(!(zuuluu === michal)) { _fun00038_ip = 118; continue _fun00037 }
 28:
                    michal = oscard.length;
                    if(!(zuuluu === michal)) { _fun00038_ip = 118; continue _fun00037 }
 37:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.transaction;
                    michal = zuuluu.add;
                    entity = {};
                    report = 'messages.trim_channels_not_in';
                    entity['type'] = report;
                    report = tangon.tableId;
                    entity['table'] = report;
                    report = 0;
                    oscard = oscard[report];
                    entity['channelKey'] = oscard;
                    tangon = tangon.prefix;
                    tangon = tangon[report];
                    entity['messageKey'] = tangon;
                    tangon = argBar;
                    entity['limit'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
 118:
                    entity = global;
                    zuuluu = entity.Error;
                    entity = zuuluu.prototype;
                    michal = Object.create(entity, {constructor: {value: zuuluu}});
                    golfie = 'trimChannelsNotIn: only one prefix component is supported at this time';
                    option = michal;
                    entity = new option[zuuluu](golfie, oscard);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            michal['trimChannelsNotIn'] = tangon;
            zuuluu['messages'] = michal;
            michal = argFoo;
            zuuluu['prefix'] = michal;
            michal = argBar;
            zuuluu['tableId'] = michal;
            michal = argBaz;
            zuuluu['transaction'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot4;
        entity = {};
        zuuluu = 'put';
        entity['key'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                oscard = arguments[1];
                golfie = this;
                entity = undefined;
                if(!(oscard === entity)) { _fun00040_ip = 47; continue _fun00039 }
 12:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 4;
                michal = tangon[michal];
                michal = zuuluu.bind(entity)(michal);
                michal = michal.ConflictOptions;
                oscard = michal.Replace;
 47:
                tangon = golfie.transaction;
                zuuluu = tangon.add;
                michal = {};
                report = 'kv.put_one';
                michal['type'] = report;
                report = golfie.tableId;
                michal['table'] = report;
                verify = _closure1_slot6;
                option = golfie.prefix;
                golfie = argFoo;
                golfie = verify.bind(entity)(golfie, option);
                michal['cell'] = golfie;
                golfie = _closure1_slot0;
                option = _closure1_slot1;
                report = 4;
                report = option[report];
                report = golfie.bind(entity)(report);
                report = report.ConflictOptions;
                report = report.Replace;
                report = oscard === report;
                michal['overwrite'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity['value'] = zuuluu;
        zuuluu = new Array(6);
        zuuluu[0] = entity;
        entity = {};
        oscard = 'putAll';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                oscard = arguments[1];
                golfie = this;
                entity = undefined;
                if(!(oscard === entity)) { _fun00042_ip = 47; continue _fun00041 }
 12:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 4;
                michal = tangon[michal];
                michal = zuuluu.bind(entity)(michal);
                michal = michal.ConflictOptions;
                oscard = michal.Replace;
 47:
                tangon = golfie.transaction;
                zuuluu = tangon.add;
                michal = {};
                report = 'kv.put_many';
                michal['type'] = report;
                report = golfie.tableId;
                michal['table'] = report;
                verify = _closure1_slot7;
                option = golfie.prefix;
                golfie = argFoo;
                golfie = verify.bind(entity)(golfie, option);
                michal['cells'] = golfie;
                golfie = _closure1_slot0;
                option = _closure1_slot1;
                report = 4;
                report = option[report];
                report = golfie.bind(entity)(report);
                report = report.ConflictOptions;
                report = report.Replace;
                report = oscard === report;
                michal['overwrite'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[1] = entity;
        entity = {};
        oscard = 'replaceAll';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = this;
            entity = zuuluu.delete;
            entity = entity.bind(zuuluu)();
            michal = zuuluu.putAll;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[2] = entity;
        entity = {};
        oscard = 'delete';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                option = arguments[0];
                report = this;
                entity = undefined;
                if(!(option === entity)) { _fun00044_ip = 16; continue _fun00043 }
 12:
                option = new Array(0);
 16:
                tangon = report.transaction;
                zuuluu = tangon.add;
                michal = {};
                oscard = 'kv.delete_many';
                michal['type'] = oscard;
                oscard = report.tableId;
                michal['table'] = oscard;
                golfie = _closure1_slot0;
                verify = _closure1_slot1;
                oscard = 3;
                oscard = verify[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.combineKeyPrefix;
                report = report.prefix;
                report = oscard.bind(golfie)(report, option);
                michal['key'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[3] = entity;
        entity = {};
        oscard = 'deleteRange';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            report = this;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 3;
            oscard = tangon[michal];
            entity = undefined;
            verify = zuuluu.bind(entity)(oscard);
            option = verify.combineKey;
            golfie = report.prefix;
            oscard = argFoo;
            golfie = option.bind(verify)(golfie, oscard);
            michal = tangon[michal];
            oscard = zuuluu.bind(entity)(michal);
            tangon = oscard.combineKey;
            zuuluu = report.prefix;
            michal = argBar;
            oscard = tangon.bind(oscard)(zuuluu, michal);
            tangon = report.transaction;
            zuuluu = tangon.add;
            michal = {};
            option = 'kv.delete_range';
            michal['type'] = option;
            report = report.tableId;
            michal['table'] = report;
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            michal['range'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[4] = entity;
        entity = {};
        oscard = 'deleteGeneration';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                option = arguments[0];
                report = this;
                entity = undefined;
                if(!(option === entity)) { _fun00046_ip = 16; continue _fun00045 }
 12:
                option = new Array(0);
 16:
                tangon = report.transaction;
                zuuluu = tangon.add;
                michal = {};
                oscard = 'kv.delete_generation';
                michal['type'] = oscard;
                oscard = report.tableId;
                michal['table'] = oscard;
                golfie = _closure1_slot0;
                verify = _closure1_slot1;
                oscard = 3;
                oscard = verify[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.combineKeyPrefix;
                report = report.prefix;
                report = oscard.bind(golfie)(report, option);
                michal['key'] = report;
                report = arguments[2];
                michal['generation'] = report;
                report = arguments[1];
                michal['comparer'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[5] = entity;
        entity = {};
        oscard = 'fromDatabaseTransaction';
        entity['key'] = oscard;
        michal = function(argFoo, argBar, argBaz) { // Original name: value
            report = _closure2_slot0;
            entity = report.prototype;
            michal = Object.create(entity, {constructor: {value: report}});
            option = argFoo;
            golfie = argBar;
            oscard = argBaz;
            verify = michal;
            entity = new verify[report](option, golfie, oscard, report);
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
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = '../discord_common/js/packages/kv-storage/js/api/Table.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['Table'] = tangon;
    zuuluu['TableTransaction'] = michal;
    return entity;
})();