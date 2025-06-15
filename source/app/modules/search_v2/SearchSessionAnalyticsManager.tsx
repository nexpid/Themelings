// app/modules/search_v2/SearchSessionAnalyticsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: createSessionState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 3;
            tangon = tangon[michal];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            michal = tangon.v4;
            michal = michal.bind(tangon)();
            entity['sessionId'] = michal;
            michal = null;
            tangon = michal != zuuluu;
            if(!tangon) { _fun00002_ip = 57; continue _fun00001 }
 54:
            michal = zuuluu;
 57:
            entity['selectedSearchTab'] = michal;
            michal = 0;
            entity['searchCount'] = michal;
            entity['searchWithFiltersCount'] = michal;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Logger;
    tangon = option.prototype;
    foxtra = Object.create(tangon, {constructor: {value: option}});
    romeon = 'SearchSessionAnalyticsManager';
    tangon = new foxtra[option](romeon, yankee);
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: SearchSessionAnalyticsManager
            zuuluu = this;
            tangon = _closure1_slot2;
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
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = this;
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                entity = 4;
                tangon = tangon[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.getSearchContextId;
                tangon = argFoo;
                report = report.bind(oscard)(tangon);
                oscard = michal.sessions;
                tangon = oscard.get;
                oscard = tangon.bind(oscard)(report);
                tangon = null;
                if(!(tangon == oscard)) { _fun00004_ip = 72; continue _fun00003 }
 64:
                zuuluu = _closure1_slot4;
                oscard = zuuluu.bind(entity)();
 72:
                tangon = michal.sessions;
                zuuluu = tangon.set;
                michal = {};
                option = michal;
                golfie = oscard;
                oscard = copyDataProperties(option, golfie);
                golfie = argBar;
                option = michal;
                oscard = copyDataProperties(option, golfie);
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
            michal = _closure1_slot1;
            entity = 4;
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
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
                if(oscard) { _fun00006_ip = 38; continue _fun00005 }
 32:
                michal = verify.searchCount;
 38:
                offset = option != michal;
                golfie = 0;
                if(!offset) { _fun00006_ip = 50; continue _fun00005 }
 47:
                golfie = michal;
 50:
                michal = 1;
                golfie = golfie + michal;
                zuuluu['searchCount'] = golfie;
                golfie = argBar;
                if(!golfie) { _fun00006_ip = 106; continue _fun00005 }
 69:
                offset = option == verify;
                golfie = undefined;
                if(offset) { _fun00006_ip = 84; continue _fun00005 }
 78:
                golfie = verify.searchWithFiltersCount;
 84:
                option = option != golfie;
                oscard = 0;
                if(!option) { _fun00006_ip = 96; continue _fun00005 }
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
                michal = zuuluu.searchCount;
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
        michal[3] = entity;
        entity = {};
        oscard = 'getSearchWithFiltersCount';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getState;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00010_ip = 34; continue _fun00009 }
 28:
                michal = zuuluu.searchWithFiltersCount;
 34:
                zuuluu = entity != michal;
                entity = 0;
                if(!zuuluu) { _fun00010_ip = 46; continue _fun00009 }
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
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argBar;
                tangon = this;
                michal = null;
                if(!(michal != entity)) { _fun00012_ip = 34; continue _fun00011 }
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
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getState;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00016_ip = 34; continue _fun00015 }
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
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = this;
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                entity = 4;
                tangon = tangon[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.getSearchContextId;
                tangon = argFoo;
                report = report.bind(oscard)(tangon);
                oscard = zuuluu.sessions;
                tangon = oscard.has;
                tangon = tangon.bind(oscard)(report);
                if(tangon) { _fun00018_ip = 90; continue _fun00017 }
 61:
                tangon = zuuluu.sessions;
                zuuluu = tangon.set;
                oscard = _closure1_slot4;
                michal = argBar;
                michal = oscard.bind(entity)(michal);
                michal = zuuluu.bind(tangon)(report, michal);
 90:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'terminate';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 4;
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/SearchSessionAnalyticsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();