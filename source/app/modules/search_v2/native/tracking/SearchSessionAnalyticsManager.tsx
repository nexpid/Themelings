// app/modules/search_v2/native/tracking/SearchSessionAnalyticsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: createDefaultState
        entity = argFoo;
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 3;
        michal = golfie[michal];
        report = undefined;
        zuuluu = oscard.bind(report)(michal);
        michal = zuuluu.getSearchInitialTabs;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = 0;
        zuuluu = zuuluu[michal];
        option = _closure1_slot1;
        tangon = 4;
        tangon = golfie[tangon];
        option = option.bind(report)(tangon);
        tangon = null;
        tangon = tangon != zuuluu;
        yankee = entity.type;
        entity = global;
        entity = entity.HermesInternal;
        offset = entity.concat;
        verify = '[SearchSessionsAnalyticsManager] Initial search tab missing for search context type: ';
        entity = '.';
        entity = offset.bind(verify)(yankee, entity);
        entity = option.bind(report)(tangon, entity);
        entity = {};
        tangon = 5;
        tangon = golfie[tangon];
        report = oscard.bind(report)(tangon);
        tangon = report.v4;
        tangon = tangon.bind(report)();
        entity['sessionId'] = tangon;
        entity['selectedSearchTab'] = zuuluu;
        entity['searchCount'] = michal;
        entity['searchWithFiltersCount'] = michal;
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Logger;
    tangon = option.prototype;
    foxtra = Object.create(tangon, {constructor: {value: option}});
    romeon = 'SearchSessionAnalyticsManager';
    tangon = new foxtra[option](romeon, yankee);
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: SearchSessionAnalyticsManager
            zuuluu = this;
            tangon = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = global;
            michal = michal.Map;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            golfie = tangon;
            michal = new golfie[michal](oscard);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['sessions'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'upsertState';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                michal = this;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                report = report[entity];
                entity = undefined;
                oscard = oscard.bind(entity)(report);
                report = oscard.getSearchContextId;
                report = report.bind(oscard)(tangon);
                golfie = michal.sessions;
                oscard = golfie.get;
                oscard = oscard.bind(golfie)(report);
                golfie = null;
                if(!(golfie == oscard)) { _fun00002_ip = 73; continue _fun00001 }
 64:
                zuuluu = _closure1_slot5;
                oscard = zuuluu.bind(entity)(tangon);
 73:
                tangon = michal.sessions;
                zuuluu = tangon.set;
                michal = {};
                verify = michal;
                option = oscard;
                oscard = copyDataProperties(verify, option);
                option = argBar;
                verify = michal;
                oscard = copyDataProperties(verify, option);
                michal = zuuluu.bind(tangon)(report, michal);
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(11);
        michal[0] = entity;
        entity = {};
        oscard = 'getState';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getSearchContextId;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            entity = this;
            michal = entity.sessions;
            entity = michal.get;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'incrementSearchCount';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                tangon = this;
                entity = tangon.getState;
                verify = entity.bind(tangon)(report);
                zuuluu = {};
                option = null;
                oscard = option == verify;
                entity = undefined;
                michal = undefined;
                if(oscard) { _fun00004_ip = 38; continue _fun00003 }
 32:
                michal = verify.searchCount;
 38:
                offset = option != michal;
                golfie = 0;
                if(!offset) { _fun00004_ip = 50; continue _fun00003 }
 47:
                golfie = michal;
 50:
                michal = 1;
                golfie = golfie + michal;
                zuuluu['searchCount'] = golfie;
                golfie = argBar;
                if(!golfie) { _fun00004_ip = 106; continue _fun00003 }
 69:
                offset = option == verify;
                golfie = undefined;
                if(offset) { _fun00004_ip = 84; continue _fun00003 }
 78:
                golfie = verify.searchWithFiltersCount;
 84:
                option = option != golfie;
                oscard = 0;
                if(!option) { _fun00004_ip = 96; continue _fun00003 }
 93:
                oscard = golfie;
 96:
                michal = oscard + michal;
                zuuluu['searchWithFiltersCount'] = michal;
 106:
                michal = tangon.upsertState;
                michal = michal.bind(tangon)(report, zuuluu);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'getSearchCount';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getState;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00006_ip = 34; continue _fun00005 }
 28:
                michal = zuuluu.searchCount;
 34:
                zuuluu = entity != michal;
                entity = 0;
                if(!zuuluu) { _fun00006_ip = 46; continue _fun00005 }
 43:
                entity = michal;
 46:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'getSearchWithFiltersCount';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getState;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00008_ip = 34; continue _fun00007 }
 28:
                michal = zuuluu.searchWithFiltersCount;
 34:
                zuuluu = entity != michal;
                entity = 0;
                if(!zuuluu) { _fun00008_ip = 46; continue _fun00007 }
 43:
                entity = michal;
 46:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'getSearchCountWithoutFilters';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            oscard = argFoo;
            report = this;
            entity = global;
            tangon = entity.Math;
            zuuluu = tangon.max;
            entity = report.getSearchCount;
            michal = entity.bind(report)(oscard);
            entity = report.getSearchWithFiltersCount;
            entity = entity.bind(report)(oscard);
            michal = michal - entity;
            entity = 0;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'setSelectedSearchTab';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argBar;
                tangon = this;
                michal = null;
                if(!(michal != entity)) { _fun00010_ip = 34; continue _fun00009 }
 12:
                zuuluu = tangon.upsertState;
                michal = {};
                michal['selectedSearchTab'] = entity;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
 34:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'getSessionId';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getState;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00012_ip = 34; continue _fun00011 }
 28:
                entity = michal.sessionId;
 34:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'getSelectedSearchTab';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getState;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00014_ip = 34; continue _fun00013 }
 28:
                entity = michal.selectedSearchTab;
 34:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'initialize';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            oscard = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getSearchContextId;
            report = zuuluu.bind(tangon)(oscard);
            zuuluu = this;
            tangon = zuuluu.sessions;
            zuuluu = tangon.set;
            michal = _closure1_slot5;
            michal = michal.bind(entity)(oscard);
            michal = zuuluu.bind(tangon)(report, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'terminate';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.getSearchContextId;
            michal = argFoo;
            tangon = zuuluu.bind(tangon)(michal);
            michal = this;
            zuuluu = michal.sessions;
            michal = zuuluu.delete;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        };
        entity['value'] = report;
        michal[10] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/tracking/SearchSessionAnalyticsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();