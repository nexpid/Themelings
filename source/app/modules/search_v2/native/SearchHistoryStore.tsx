// app/modules/search_v2/native/SearchHistoryStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun113193: for(var _fun113193_ip = 0; ; ) switch(_fun113193_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun113193_ip = 51; continue _fun113193 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun113193_ip = 92; continue _fun113193;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun113193_ip = 71; continue _fun113193 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun113194: for(var _fun113194_ip = 0; ; ) switch(_fun113194_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun113194_ip = 76; continue _fun113194;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchHistory
        _fun113197: for(var _fun113197_ip = 0; ; ) switch(_fun113197_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot9;
            entity = entity[zulu];
            tango = null;
            if(!(tango == entity)) { _fun113197_ip = 44; continue _fun113197 }
 20:
            tango = _closure1_slot8;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            oscar = report;
            tango = new oscar[tango](report);
            entity = tango instanceof Object ? tango : report;
 44:
            mike = _closure1_slot9;
            mike[zulu] = entity;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.SearchHistoryItemTypes;
    var _closure1_slot7 = mike;
    mike = function() {
        tango = _closure1_slot6;
        zulu = function() { // Original name: SearchHistory
            zulu = this;
            tango = _closure1_slot5;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = new Array(0);
            zulu['items'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'deserialize';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            report = argFoo;
            mike = this;
            tango = report.slice;
            zulu = 0;
            entity = 3;
            entity = tango.bind(report)(zulu, entity);
            mike['items'] = entity;
            tango = mike.items;
            zulu = tango.filter;
            entity = function(argFoo) {
                _fun113201: for(var _fun113201_ip = 0; ; ) switch(_fun113201_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.type;
                    entity = _closure1_slot7;
                    entity = entity.TEXT;
                    entity = zulu !== entity;
                    if(entity) { _fun113201_ip = 40; continue _fun113201 }
 28:
                    tango = mike.tags;
                    zulu = null;
                    entity = zulu == tango;
 40:
                    if(entity) { _fun113201_ip = 69; continue _fun113201 }
 43:
                    tango = mike.tags;
                    zulu = tango.every;
                    mike = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot1;
                        entity = 6;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.hasOwnProperty;
                        mike = argFoo;
                        entity = 'type';
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike);
 69:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            mike['items'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'serialize';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.items;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'add';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun113204: for(var _fun113204_ip = 0; ; ) switch(_fun113204_ip) {
 0:
                tango = argFoo;
                mike = this;
                zulu = tango.type;
                entity = _closure1_slot7;
                entity = entity.TEXT;
                entity = zulu === entity;
                if(!entity) { _fun113204_ip = 54; continue _fun113204 }
 31:
                report = tango.text;
                zulu = report.trim;
                report = zulu.bind(report)();
                zulu = '';
                entity = zulu === report;
 54:
                if(!entity) { _fun113204_ip = 92; continue _fun113204 }
 57:
                report = tango.tags;
                zulu = null;
                zulu = zulu == report;
                if(zulu) { _fun113204_ip = 89; continue _fun113204 }
 72:
                report = tango.tags;
                oscar = report.length;
                report = 0;
                zulu = report === oscar;
 89:
                entity = zulu;
 92:
                if(entity) { _fun113204_ip = 151; continue _fun113204 }
 95:
                entity = mike.remove;
                entity = entity.bind(mike)(tango);
                zulu = mike.items;
                entity = zulu.unshift;
                entity = entity.bind(zulu)(tango);
                report = mike.items;
                tango = report.slice;
                zulu = 0;
                entity = 3;
                entity = tango.bind(report)(zulu, entity);
                mike['items'] = entity;
 151:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'remove';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            mike = this;
            zulu = argFoo;
            var _closure3_slot0 = zulu;
            tango = mike.items;
            zulu = tango.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.isEqual;
                mike = _closure3_slot0;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                entity = !entity;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['items'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot8 = mike;
    mike = {};
    var _closure1_slot9 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: SearchHistoryStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot5;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot6;
        report = {};
        entity = 'getState';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = {};
            var _closure3_slot0 = mike;
            zulu = global;
            report = zulu.Object;
            tango = report.entries;
            zulu = _closure1_slot9;
            tango = tango.bind(report)(zulu);
            zulu = tango.forEach;
            entity = function(argFoo) {
                _fun113210: for(var _fun113210_ip = 0; ; ) switch(_fun113210_ip) {
 0:
                    oscar = argFoo;
                    mike = oscar[Symbol.iterator];
                    oscar = mike().next;
                    report = oscar().value;
                    zulu = mike;
                    entity = undefined;
                    zulu = zulu === entity;
                    tango = undefined;
                    if(zulu) { _fun113210_ip = 27; continue _fun113210 }
 24:
                    tango = report;
 27:
                    report = undefined;
                    if(zulu) { _fun113210_ip = 57; continue _fun113210 }
 32:
                    golf = oscar().value;
                    oscar = mike;
                    oscar = oscar === entity;
                    report = undefined;
                    zulu = oscar;
                    if(oscar) { _fun113210_ip = 57; continue _fun113210 }
 51:
                    report = golf;
                    zulu = oscar;
 57:
                    if(zulu) { _fun113210_ip = 63; continue _fun113210 }
 60:
                    mike.return();
 63:
                    mike = null;
                    if(!(mike != report)) { _fun113210_ip = 90; continue _fun113210 }
 69:
                    zulu = _closure3_slot0;
                    mike = report.serialize;
                    mike = mike.bind(report)();
                    zulu[tango] = mike;
 90:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            entity = {};
            entity['searchHistories'] = mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'initialize';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun113211: for(var _fun113211_ip = 0; ; ) switch(_fun113211_ip) {
 0:
                zulu = argFoo;
                mike = null;
                tango = mike == zulu;
                entity = undefined;
                oscar = undefined;
                if(tango) { _fun113211_ip = 22; continue _fun113211 }
 16:
                oscar = zulu.searchHistories;
 22:
                if(!(mike != oscar)) { _fun113211_ip = 74; continue _fun113211 }
 26:
                tango = _closure1_slot0;
                report = _closure1_slot1;
                mike = 7;
                mike = report[mike];
                report = tango.bind(entity)(mike);
                tango = report.mapValues;
                mike = function(argFoo) {
                    entity = _closure1_slot8;
                    mike = entity.prototype;
                    mike = Object.create(mike, {constructor: {value: entity}});
                    report = mike;
                    entity = new report[entity](tango);
                    entity = entity instanceof Object ? entity : mike;
                    zulu = entity.deserialize;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = tango.bind(report)(oscar, mike);
                _closure1_slot9 = mike;
 74:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getSearchHistory';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot12;
            mike = undefined;
            entity = argFoo;
            mike = zulu.bind(mike)(entity);
            entity = mike.serialize;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'SearchHistoryStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = 9;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleSearchHistoryClearItems
        entity = argFoo;
        mike = entity.id;
        entity = _closure1_slot9;
        entity = delete entity[mike];
        entity = undefined;
        return entity;
    };
    mike['SEARCH_HISTORY_CLEAR_ITEMS'] = verify;
    verify = function(argFoo) { // Original name: handleSearchHistoryRemoveItem
        entity = argFoo;
        zulu = entity.id;
        tango = entity.item;
        mike = _closure1_slot12;
        entity = undefined;
        zulu = mike.bind(entity)(zulu);
        mike = zulu.remove;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    mike['SEARCH_HISTORY_REMOVE_ITEM'] = verify;
    tango = function(argFoo) { // Original name: handleSearchHistoryAddItem
        entity = argFoo;
        zulu = entity.id;
        tango = entity.item;
        mike = _closure1_slot12;
        entity = undefined;
        zulu = mike.bind(entity)(zulu);
        mike = zulu.add;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    mike['SEARCH_HISTORY_ADD_ITEM'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/SearchHistoryStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();