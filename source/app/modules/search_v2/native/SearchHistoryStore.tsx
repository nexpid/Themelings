// app/modules/search_v2/native/SearchHistoryStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchHistory
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot9;
            entity = entity[zuuluu];
            tangon = null;
            if(!(tangon == entity)) { _fun00004_ip = 44; continue _fun00003 }
 20:
            tangon = _closure1_slot8;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            oscard = report;
            tangon = new oscard[tangon](report);
            entity = tangon instanceof Object ? tangon : report;
 44:
            michal = _closure1_slot9;
            michal[zuuluu] = entity;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.SearchHistoryItemTypes;
    var _closure1_slot7 = michal;
    michal = function() {
        tangon = _closure1_slot6;
        zuuluu = function() { // Original name: SearchHistory
            zuuluu = this;
            tangon = _closure1_slot5;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = new Array(0);
            zuuluu['items'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'deserialize';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            report = argFoo;
            michal = this;
            tangon = report.slice;
            zuuluu = 0;
            entity = 3;
            entity = tangon.bind(report)(zuuluu, entity);
            michal['items'] = entity;
            tangon = michal.items;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.type;
                    entity = _closure1_slot7;
                    entity = entity.TEXT;
                    entity = zuuluu !== entity;
                    if(entity) { _fun00006_ip = 40; continue _fun00005 }
 28:
                    tangon = michal.tags;
                    zuuluu = null;
                    entity = zuuluu == tangon;
 40:
                    if(entity) { _fun00006_ip = 69; continue _fun00005 }
 43:
                    tangon = michal.tags;
                    zuuluu = tangon.every;
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot1;
                        entity = 6;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.hasOwnProperty;
                        michal = argFoo;
                        entity = 'type';
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal);
 69:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['items'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'serialize';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.items;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'add';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                michal = this;
                zuuluu = tangon.type;
                entity = _closure1_slot7;
                entity = entity.TEXT;
                entity = zuuluu === entity;
                if(!entity) { _fun00008_ip = 54; continue _fun00007 }
 31:
                report = tangon.text;
                zuuluu = report.trim;
                report = zuuluu.bind(report)();
                zuuluu = '';
                entity = zuuluu === report;
 54:
                if(!entity) { _fun00008_ip = 92; continue _fun00007 }
 57:
                report = tangon.tags;
                zuuluu = null;
                zuuluu = zuuluu == report;
                if(zuuluu) { _fun00008_ip = 89; continue _fun00007 }
 72:
                report = tangon.tags;
                oscard = report.length;
                report = 0;
                zuuluu = report === oscard;
 89:
                entity = zuuluu;
 92:
                if(entity) { _fun00008_ip = 151; continue _fun00007 }
 95:
                entity = michal.remove;
                entity = entity.bind(michal)(tangon);
                zuuluu = michal.items;
                entity = zuuluu.unshift;
                entity = entity.bind(zuuluu)(tangon);
                report = michal.items;
                tangon = report.slice;
                zuuluu = 0;
                entity = 3;
                entity = tangon.bind(report)(zuuluu, entity);
                michal['items'] = entity;
 151:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'remove';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            michal = this;
            zuuluu = argFoo;
            var _closure3_slot0 = zuuluu;
            tangon = michal.items;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.isEqual;
                michal = _closure3_slot0;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = !entity;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['items'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    var _closure1_slot8 = michal;
    michal = {};
    var _closure1_slot9 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: SearchHistoryStore
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot5;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot10;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 69; continue _fun00009 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00010_ip = 105; continue _fun00009;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot3;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot6;
        report = {};
        entity = 'getState';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = {};
            var _closure3_slot0 = michal;
            zuuluu = global;
            report = zuuluu.Object;
            tangon = report.entries;
            zuuluu = _closure1_slot9;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.forEach;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    oscard = argFoo;
                    michal = oscard[Symbol.iterator];
                    oscard = michal().next;
                    report = oscard().value;
                    zuuluu = michal;
                    entity = undefined;
                    zuuluu = zuuluu === entity;
                    tangon = undefined;
                    if(zuuluu) { _fun00012_ip = 27; continue _fun00011 }
 24:
                    tangon = report;
 27:
                    report = undefined;
                    if(zuuluu) { _fun00012_ip = 57; continue _fun00011 }
 32:
                    golfie = oscard().value;
                    oscard = michal;
                    oscard = oscard === entity;
                    report = undefined;
                    zuuluu = oscard;
                    if(oscard) { _fun00012_ip = 57; continue _fun00011 }
 51:
                    report = golfie;
                    zuuluu = oscard;
 57:
                    if(zuuluu) { _fun00012_ip = 63; continue _fun00011 }
 60:
                    michal.return();
 63:
                    michal = null;
                    if(!(michal != report)) { _fun00012_ip = 90; continue _fun00011 }
 69:
                    zuuluu = _closure3_slot0;
                    michal = report.serialize;
                    michal = michal.bind(report)();
                    zuuluu[tangon] = michal;
 90:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity);
            entity = {};
            entity['searchHistories'] = michal;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'initialize';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                michal = null;
                tangon = michal == zuuluu;
                entity = undefined;
                oscard = undefined;
                if(tangon) { _fun00014_ip = 22; continue _fun00013 }
 16:
                oscard = zuuluu.searchHistories;
 22:
                if(!(michal != oscard)) { _fun00014_ip = 74; continue _fun00013 }
 26:
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                michal = 7;
                michal = report[michal];
                report = tangon.bind(entity)(michal);
                tangon = report.mapValues;
                michal = function(argFoo) {
                    entity = _closure1_slot8;
                    michal = entity.prototype;
                    michal = Object.create(michal, {constructor: {value: entity}});
                    report = michal;
                    entity = new report[entity](tangon);
                    entity = entity instanceof Object ? entity : michal;
                    zuuluu = entity.deserialize;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = tangon.bind(report)(oscard, michal);
                _closure1_slot9 = michal;
 74:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getSearchHistory';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot11;
            michal = undefined;
            entity = argFoo;
            michal = zuuluu.bind(michal)(entity);
            entity = michal.serialize;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'SearchHistoryStore';
    option['displayName'] = michal;
    option['persistKey'] = michal;
    michal = 9;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: handleSearchHistoryClearItems
        entity = argFoo;
        michal = entity.id;
        entity = _closure1_slot9;
        entity = delete entity[michal];
        entity = undefined;
        return entity;
    };
    michal['SEARCH_HISTORY_CLEAR_ITEMS'] = verify;
    verify = function(argFoo) { // Original name: handleSearchHistoryRemoveItem
        entity = argFoo;
        zuuluu = entity.id;
        tangon = entity.item;
        michal = _closure1_slot11;
        entity = undefined;
        zuuluu = michal.bind(entity)(zuuluu);
        michal = zuuluu.remove;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    michal['SEARCH_HISTORY_REMOVE_ITEM'] = verify;
    tangon = function(argFoo) { // Original name: handleSearchHistoryAddItem
        entity = argFoo;
        zuuluu = entity.id;
        tangon = entity.item;
        michal = _closure1_slot11;
        entity = undefined;
        zuuluu = michal.bind(entity)(zuuluu);
        michal = zuuluu.add;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    michal['SEARCH_HISTORY_ADD_ITEM'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/SearchHistoryStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();