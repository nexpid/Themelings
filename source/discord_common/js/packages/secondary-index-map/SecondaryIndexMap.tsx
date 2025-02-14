// discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: sortedInsert
        _fun44057: for(var _fun44057_ip = 0; ; ) switch(_fun44057_ip) {
 0:
            report = argFoo;
            options = argBar;
            tango = argBaz;
            oscar = argCorge;
            entity = null;
            if(!(entity != options)) { _fun44057_ip = 65; continue _fun44057 }
 18:
            golf = report.splice;
            verify = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 3;
            mike = zulu[mike];
            zulu = undefined;
            mike = verify.bind(zulu)(mike);
            zulu = mike.bind(zulu)(report, options, oscar);
            mike = 1;
            mike = golf.bind(report)(zulu, mike);
 65:
            if(!(entity != tango)) { _fun44057_ip = 116; continue _fun44057 }
 69:
            zulu = report.splice;
            golf = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 3;
            entity = mike[entity];
            mike = undefined;
            entity = golf.bind(mike)(entity);
            mike = entity.bind(mike)(report, tango, oscar);
            entity = 0;
            entity = zulu.bind(report)(mike, entity, tango);
 116:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = new Array(0);
    var _closure1_slot5 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar) { // Original name: SecondaryIndexMap
            _fun44059: for(var _fun44059_ip = 0; ; ) switch(_fun44059_ip) {
 0:
                zulu = arguments[2];
                mike = this;
                entity = undefined;
                if(!(zulu === entity)) { _fun44059_ip = 19; continue _fun44059 }
 12:
                zulu = function(argFoo, argBar) { // Original name: l
                    mike = argFoo;
                    entity = argBar;
                    entity = mike === entity;
                    return entity;
                };
 19:
                report = _closure1_slot3;
                tango = _closure2_slot0;
                tango = report.bind(entity)(mike, tango);
                tango = global;
                tango = tango.Map;
                report = tango.prototype;
                report = Object.create(report, {constructor: {value: tango}});
                options = report;
                tango = new options[tango](golf);
                tango = tango instanceof Object ? tango : report;
                mike['valueMap'] = tango;
                tango = new Array(0);
                mike['valueArray'] = tango;
                tango = {};
                mike['valueIndexes'] = tango;
                tango = {};
                mike['valueIndexesForGetter'] = tango;
                tango = false;
                mike['dirty'] = tango;
                tango = 0;
                mike['_version'] = tango;
                tango = argFoo;
                mike['indexBy'] = tango;
                tango = argBar;
                mike['sortBy'] = tango;
                mike['isEqual'] = zulu;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'version';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity._version;
            return entity;
        };
        entity['get'] = mike;
        mike = new Array(11);
        mike[0] = entity;
        entity = {};
        oscar = 'indexes';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun44062: for(var _fun44062_ip = 0; ; ) switch(_fun44062_ip) {
 0:
                mike = arguments[0];
                entity = this;
                offset = undefined;
                if(!(mike === offset)) { _fun44062_ip = 14; continue _fun44062 }
 12:
                mike = false;
 14:
                if(mike) { _fun44062_ip = 160; continue _fun44062 }
 20:
                if(mike) { _fun44062_ip = 152; continue _fun44062 }
 26:
                mike = entity.dirty;
                if(!mike) { _fun44062_ip = 152; continue _fun44062 }
 35:
                mike = {};
                zulu = global;
                report = zulu.Object;
                tango = report.entries;
                zulu = entity.valueIndexes;
                verify = tango.bind(report)(zulu);
                zulu = verify.length;
                options = 0;
                zulu = options < zulu;
                oscar = 2;
                report = 1;
                tango = 0;
                if(!zulu) { _fun44062_ip = 138; continue _fun44062 }
 87:
                yankee = verify[tango];
                zulu = _closure1_slot2;
                zulu = zulu.bind(offset)(yankee, oscar);
                yankee = zulu[options];
                backup = zulu[report];
                zulu = new Array(0);
                kilo = zulu;
                foxtrot = 0;
                romeo = arraySpread(kilo, backup, foxtrot);
                mike[yankee] = zulu;
                tango = tango + 1;
                zulu = verify.length;
                if(tango < zulu) { _fun44062_ip = 87; continue _fun44062 }
 138:
                entity['valueIndexesForGetter'] = mike;
                mike = false;
                entity['dirty'] = mike;
 152:
                mike = entity.valueIndexesForGetter;
                return mike;
 160:
                entity = entity.valueIndexes;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'keys';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.valueMap;
            entity = mike.keys;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'values';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun44064: for(var _fun44064_ip = 0; ; ) switch(_fun44064_ip) {
 0:
                tango = argFoo;
                report = arguments[1];
                mike = this;
                entity = undefined;
                if(!(report === entity)) { _fun44064_ip = 17; continue _fun44064 }
 15:
                report = false;
 17:
                zulu = null;
                if(!(zulu != tango)) { _fun44064_ip = 51; continue _fun44064 }
 23:
                entity = mike.indexes;
                entity = entity.bind(mike)(report);
                entity = entity[tango];
                if(!(zulu == entity)) { _fun44064_ip = 49; continue _fun44064 }
 42:
                entity = _closure1_slot5;
 49:
                _fun44064_ip = 57; continue _fun44064;
 51:
                entity = mike.valueArray;
 57:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'size';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun44065: for(var _fun44065_ip = 0; ; ) switch(_fun44065_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = null;
                if(!(entity != tango)) { _fun44065_ip = 50; continue _fun44065 }
 12:
                zulu = mike.valueIndexes;
                tango = zulu[tango];
                report = entity == tango;
                zulu = undefined;
                if(report) { _fun44065_ip = 36; continue _fun44065 }
 31:
                zulu = tango.length;
 36:
                tango = entity != zulu;
                entity = 0;
                if(!tango) { _fun44065_ip = 48; continue _fun44065 }
 45:
                entity = zulu;
 48:
                _fun44065_ip = 61; continue _fun44065;
 50:
                mike = mike.valueArray;
                entity = mike.length;
 61:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            zulu = mike.valueMap;
            entity = zulu.clear;
            entity = entity.bind(zulu)();
            entity = new Array(0);
            mike['valueArray'] = entity;
            entity = {};
            mike['valueIndexes'] = entity;
            entity = {};
            mike['valueIndexesForGetter'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'has';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.valueMap;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.valueMap;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'set';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun44069: for(var _fun44069_ip = 0; ; ) switch(_fun44069_ip) {
 0:
                offset = argFoo;
                oscar = argBar;
                report = this;
                var _closure3_slot0 = report;
                var _closure3_slot1 = oscar;
                entity = report.get;
                options = entity.bind(report)(offset);
                var _closure3_slot2 = options;
                tango = null;
                entity = tango != options;
                if(entity) { _fun44069_ip = 46; continue _fun44069 }
 42:
                entity = tango != oscar;
 46:
                if(!entity) { _fun44069_ip = 245; continue _fun44069 }
 52:
                mike = tango == options;
                if(mike) { _fun44069_ip = 63; continue _fun44069 }
 59:
                mike = tango == oscar;
 63:
                if(mike) { _fun44069_ip = 81; continue _fun44069 }
 66:
                golf = report.isEqual;
                golf = golf.bind(report)(options, oscar);
                mike = !golf;
 81:
                if(!mike) { _fun44069_ip = 242; continue _fun44069 }
 87:
                if(!(tango == oscar)) { _fun44069_ip = 109; continue _fun44069 }
 91:
                verify = report.valueMap;
                golf = verify.delete;
                golf = golf.bind(verify)(offset);
                _fun44069_ip = 126; continue _fun44069;
 109:
                verify = report.valueMap;
                golf = verify.set;
                golf = golf.bind(verify)(offset, oscar);
 126:
                yankee = _closure1_slot6;
                kilo = report.valueArray;
                romeo = report.sortBy;
                sizing = undefined;
                backup = options;
                foxtrot = oscar;
                golf = sizing[yankee](kilo, backup, foxtrot, romeo, yankee);
                if(!(tango != options)) { _fun44069_ip = 187; continue _fun44069 }
 161:
                golf = report.indexBy;
                verify = golf.bind(report)(options);
                options = verify.forEach;
                golf = function(argFoo) {
                    oscar = _closure1_slot6;
                    entity = _closure3_slot0;
                    tango = entity.getIndex;
                    zulu = argFoo;
                    offset = tango.bind(entity)(zulu);
                    verify = _closure3_slot2;
                    golf = entity.sortBy;
                    entity = undefined;
                    options = null;
                    yankee = undefined;
                    mike = yankee[oscar](offset, verify, options, golf, oscar);
                    return entity;
                };
                golf = options.bind(verify)(golf);
 187:
                if(!(tango != oscar)) { _fun44069_ip = 217; continue _fun44069 }
 191:
                tango = report.indexBy;
                oscar = tango.bind(report)(oscar);
                tango = oscar.forEach;
                zulu = function(argFoo) {
                    oscar = _closure1_slot6;
                    entity = _closure3_slot0;
                    tango = entity.getIndex;
                    zulu = argFoo;
                    offset = tango.bind(entity)(zulu);
                    options = _closure3_slot1;
                    golf = entity.sortBy;
                    entity = undefined;
                    verify = null;
                    yankee = undefined;
                    mike = yankee[oscar](offset, verify, options, golf, oscar);
                    return entity;
                };
                zulu = tango.bind(oscar)(zulu);
 217:
                zulu = true;
                report['dirty'] = zulu;
                tango = report._version;
                tango = tango + 1;
                report['_version'] = tango;
                mike = true;
 242:
                entity = mike;
 245:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            zulu = tango.set;
            mike = argFoo;
            entity = null;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'getIndex';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun44073: for(var _fun44073_ip = 0; ; ) switch(_fun44073_ip) {
 0:
                tango = argFoo;
                zulu = this;
                entity = zulu.valueIndexes;
                entity = entity[tango];
                mike = null;
                if(!(mike == entity)) { _fun44073_ip = 39; continue _fun44073 }
 22:
                mike = new Array(0);
                zulu = zulu.valueIndexes;
                zulu[tango] = mike;
                entity = mike;
 39:
                return entity;
            }
        };
        entity['value'] = report;
        mike[10] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 4;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx';
    tango = report.bind(oscar)(tango);
    zulu['SecondaryIndexMap'] = mike;
    return entity;
})();