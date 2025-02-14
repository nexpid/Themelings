// app/modules/search_v2/native/tracking/SearchSessionAnalyticsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: createDefaultState
        entity = argFoo;
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 3;
        mike = golf[mike];
        report = undefined;
        zulu = oscar.bind(report)(mike);
        mike = zulu.getSearchInitialTabs;
        zulu = mike.bind(zulu)(entity);
        mike = 0;
        zulu = zulu[mike];
        options = _closure1_slot1;
        tango = 4;
        tango = golf[tango];
        options = options.bind(report)(tango);
        tango = null;
        tango = tango != zulu;
        yankee = entity.type;
        entity = global;
        entity = entity.HermesInternal;
        offset = entity.concat;
        verify = '[SearchSessionsAnalyticsManager] Initial search tab missing for search context type: ';
        entity = '.';
        entity = offset.bind(verify)(yankee, entity);
        entity = options.bind(report)(tango, entity);
        entity = {};
        tango = 5;
        tango = golf[tango];
        report = oscar.bind(report)(tango);
        tango = report.v4;
        tango = tango.bind(report)();
        entity['sessionId'] = tango;
        entity['selectedSearchTab'] = zulu;
        entity['searchCount'] = mike;
        entity['searchWithFiltersCount'] = mike;
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Logger;
    tango = options.prototype;
    foxtrot = Object.create(tango, {constructor: {value: options}});
    romeo = 'SearchSessionAnalyticsManager';
    tango = new foxtrot[options](romeo, yankee);
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: SearchSessionAnalyticsManager
            zulu = this;
            tango = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = global;
            mike = mike.Map;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            golf = tango;
            mike = new golf[mike](oscar);
            mike = mike instanceof Object ? mike : tango;
            zulu['sessions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'upsertState';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun112573: for(var _fun112573_ip = 0; ; ) switch(_fun112573_ip) {
 0:
                tango = argFoo;
                mike = this;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                report = report[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(report);
                report = oscar.getSearchContextId;
                report = report.bind(oscar)(tango);
                golf = mike.sessions;
                oscar = golf.get;
                oscar = oscar.bind(golf)(report);
                golf = null;
                if(!(golf == oscar)) { _fun112573_ip = 73; continue _fun112573 }
 64:
                zulu = _closure1_slot5;
                oscar = zulu.bind(entity)(tango);
 73:
                tango = mike.sessions;
                zulu = tango.set;
                mike = {};
                verify = mike;
                options = oscar;
                oscar = copyDataProperties(verify, options);
                options = argBar;
                verify = mike;
                oscar = copyDataProperties(verify, options);
                mike = zulu.bind(tango)(report, mike);
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(11);
        mike[0] = entity;
        entity = {};
        oscar = 'getState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getSearchContextId;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            entity = this;
            mike = entity.sessions;
            entity = mike.get;
            entity = entity.bind(mike)(zulu);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'incrementSearchCount';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun112575: for(var _fun112575_ip = 0; ; ) switch(_fun112575_ip) {
 0:
                report = argFoo;
                tango = this;
                entity = tango.getState;
                verify = entity.bind(tango)(report);
                zulu = {};
                options = null;
                oscar = options == verify;
                entity = undefined;
                mike = undefined;
                if(oscar) { _fun112575_ip = 38; continue _fun112575 }
 32:
                mike = verify.searchCount;
 38:
                offset = options != mike;
                golf = 0;
                if(!offset) { _fun112575_ip = 50; continue _fun112575 }
 47:
                golf = mike;
 50:
                mike = 1;
                golf = golf + mike;
                zulu['searchCount'] = golf;
                golf = argBar;
                if(!golf) { _fun112575_ip = 106; continue _fun112575 }
 69:
                offset = options == verify;
                golf = undefined;
                if(offset) { _fun112575_ip = 84; continue _fun112575 }
 78:
                golf = verify.searchWithFiltersCount;
 84:
                options = options != golf;
                oscar = 0;
                if(!options) { _fun112575_ip = 96; continue _fun112575 }
 93:
                oscar = golf;
 96:
                mike = oscar + mike;
                zulu['searchWithFiltersCount'] = mike;
 106:
                mike = tango.upsertState;
                mike = mike.bind(tango)(report, zulu);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getSearchCount';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun112576: for(var _fun112576_ip = 0; ; ) switch(_fun112576_ip) {
 0:
                zulu = this;
                mike = zulu.getState;
                entity = argFoo;
                zulu = mike.bind(zulu)(entity);
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun112576_ip = 34; continue _fun112576 }
 28:
                mike = zulu.searchCount;
 34:
                zulu = entity != mike;
                entity = 0;
                if(!zulu) { _fun112576_ip = 46; continue _fun112576 }
 43:
                entity = mike;
 46:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getSearchWithFiltersCount';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun112577: for(var _fun112577_ip = 0; ; ) switch(_fun112577_ip) {
 0:
                zulu = this;
                mike = zulu.getState;
                entity = argFoo;
                zulu = mike.bind(zulu)(entity);
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun112577_ip = 34; continue _fun112577 }
 28:
                mike = zulu.searchWithFiltersCount;
 34:
                zulu = entity != mike;
                entity = 0;
                if(!zulu) { _fun112577_ip = 46; continue _fun112577 }
 43:
                entity = mike;
 46:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getSearchCountWithoutFilters';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            oscar = argFoo;
            report = this;
            entity = global;
            tango = entity.Math;
            zulu = tango.max;
            entity = report.getSearchCount;
            mike = entity.bind(report)(oscar);
            entity = report.getSearchWithFiltersCount;
            entity = entity.bind(report)(oscar);
            mike = mike - entity;
            entity = 0;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'setSelectedSearchTab';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun112579: for(var _fun112579_ip = 0; ; ) switch(_fun112579_ip) {
 0:
                entity = argBar;
                tango = this;
                mike = null;
                if(!(mike != entity)) { _fun112579_ip = 34; continue _fun112579 }
 12:
                zulu = tango.upsertState;
                mike = {};
                mike['selectedSearchTab'] = entity;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
 34:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getSessionId';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun112580: for(var _fun112580_ip = 0; ; ) switch(_fun112580_ip) {
 0:
                zulu = this;
                mike = zulu.getState;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun112580_ip = 34; continue _fun112580 }
 28:
                entity = mike.sessionId;
 34:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'getSelectedSearchTab';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun112581: for(var _fun112581_ip = 0; ; ) switch(_fun112581_ip) {
 0:
                zulu = this;
                mike = zulu.getState;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun112581_ip = 34; continue _fun112581 }
 28:
                entity = mike.selectedSearchTab;
 34:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'initialize';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            oscar = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 6;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getSearchContextId;
            report = zulu.bind(tango)(oscar);
            zulu = this;
            tango = zulu.sessions;
            zulu = tango.set;
            mike = _closure1_slot5;
            mike = mike.bind(entity)(oscar);
            mike = zulu.bind(tango)(report, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'terminate';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.getSearchContextId;
            mike = argFoo;
            tango = zulu.bind(tango)(mike);
            mike = this;
            zulu = mike.sessions;
            mike = zulu.delete;
            mike = mike.bind(zulu)(tango);
            return entity;
        };
        entity['value'] = report;
        mike[10] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/tracking/SearchSessionAnalyticsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();