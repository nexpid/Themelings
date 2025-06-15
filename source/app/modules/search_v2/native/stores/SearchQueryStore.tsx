// app/modules/search_v2/native/stores/SearchQueryStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: defaultStatesAreEqual
        michal = argFoo;
        entity = argBar;
        entity = michal === entity;
        return entity;
    };
    var _closure1_slot8 = entity;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: subscribeState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argCor;
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            report = _closure1_slot7;
            tangon = report.subscribe;
            zuuluu = {};
            michal = null;
            offset = michal == golfie;
            oscard = undefined;
            option = undefined;
            if(offset) { _fun00002_ip = 53; continue _fun00001 }
 47:
            option = golfie.equalityFn;
 53:
            if(!(michal == option)) { _fun00002_ip = 83; continue _fun00001 }
 57:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 7;
            verify = yankee[verify];
            verify = offset.bind(oscard)(verify);
            option = verify.shallow;
 83:
            zuuluu['equalityFn'] = option;
            option = michal == golfie;
            oscard = undefined;
            if(option) { _fun00002_ip = 103; continue _fun00001 }
 97:
            oscard = golfie.fireImmediately;
 103:
            michal = michal != oscard;
            if(!michal) { _fun00002_ip = 113; continue _fun00001 }
 110:
            michal = oscard;
 113:
            zuuluu['fireImmediately'] = michal;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    report = entity.states;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 6;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    oscard = michal.bind(tangon)(entity);
                    zuuluu = oscard.getSearchContextId;
                    entity = _closure2_slot0;
                    zuuluu = zuuluu.bind(oscard)(entity);
                    entity = report.get;
                    zuuluu = entity.bind(report)(zuuluu);
                    entity = null;
                    report = entity != zuuluu;
                    if(!report) { _fun00004_ip = 80; continue _fun00003 }
 71:
                    michal = _closure2_slot1;
                    entity = michal.bind(tangon)(zuuluu);
 80:
                    return entity;
                }
            };
            entity = argBaz;
            entity = tangon.bind(report)(michal, entity, zuuluu);
            return entity;
        }
    };
    var _closure1_slot9 = golfie;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    verify = option.bind(entity)(michal);
    michal = 1;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    option = oscard[michal];
    michal = argCor;
    michal = michal.bind(entity)(option);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.createZustandStore;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot5 = michal;
    michal = function(argFoo) { // Original name: SearchQueryStateManager
        zuuluu = this;
        var _closure2_slot0 = zuuluu;
        oscard = _closure1_slot3;
        report = _closure1_slot10;
        entity = undefined;
        report = oscard.bind(entity)(zuuluu, report);
        report = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = arguments[0];
                entity = undefined;
                if(!(tangon === entity)) { _fun00006_ip = 11; continue _fun00005 }
 9:
                tangon = false;
 11:
                entity = _closure2_slot0;
                zuuluu = entity.tagsManager;
                entity = zuuluu.getQueryString;
                oscard = entity.bind(zuuluu)(tangon);
                zuuluu = oscard.length;
                entity = 0;
                if(!(entity === zuuluu)) { _fun00006_ip = 58; continue _fun00005 }
 46:
                entity = _closure2_slot0;
                entity = entity.textInputValue;
                _fun00006_ip = 96; continue _fun00005;
 58:
                michal = _closure2_slot0;
                report = michal.textInputValue;
                michal = global;
                michal = michal.HermesInternal;
                tangon = michal.concat;
                zuuluu = '';
                michal = ' ';
                entity = tangon.bind(zuuluu)(oscard, michal, report);
 96:
                return entity;
            }
        };
        zuuluu['getQueryString'] = report;
        report = function() {
            entity = _closure2_slot0;
            entity = entity.textInputValue;
            return entity;
        };
        zuuluu['getTextInputValue'] = report;
        report = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = arguments[1];
                entity = undefined;
                if(!(zuuluu === entity)) { _fun00008_ip = 11; continue _fun00007 }
 9:
                zuuluu = false;
 11:
                michal = _closure2_slot0;
                tangon = argFoo;
                michal['textInputValue'] = tangon;
                michal['textInputChangedFromInput'] = zuuluu;
                return entity;
            }
        };
        zuuluu['setTextInputValue'] = report;
        report = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = _closure2_slot0;
                zuuluu = entity.textInputValue;
                entity = zuuluu.trim;
                entity = entity.bind(zuuluu)();
                zuuluu = entity.length;
                entity = 0;
                entity = entity === zuuluu;
                if(!entity) { _fun00010_ip = 60; continue _fun00009 }
 37:
                michal = _closure2_slot0;
                zuuluu = michal.tagsManager;
                michal = zuuluu.hasUserAddedTags;
                michal = michal.bind(zuuluu)();
                entity = !michal;
 60:
                return entity;
            }
        };
        zuuluu['isInitialSearchQuery'] = report;
        report = function() {
            entity = _closure2_slot0;
            entity = entity.searchResultsQuery;
            return entity;
        };
        zuuluu['getSearchResultsQuery'] = report;
        report = function(argFoo) {
            michal = _closure2_slot0;
            entity = argFoo;
            michal['searchResultsQuery'] = entity;
            entity = undefined;
            return entity;
        };
        zuuluu['setSearchResultsQuery'] = report;
        report = function() {
            entity = _closure2_slot0;
            michal = entity.textInputValue;
            entity = michal.trim;
            entity = entity.bind(michal)();
            michal = entity.length;
            entity = 0;
            entity = entity === michal;
            return entity;
        };
        zuuluu['isTextInputValueEmpty'] = report;
        report = function() {
            entity = _closure2_slot0;
            entity = entity.textInputChangedFromInput;
            return entity;
        };
        zuuluu['getTextValueChangedFromInput'] = report;
        report = function() {
            entity = _closure2_slot0;
            michal = entity.tagsManager;
            entity = michal.hasUserAddedTags;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu['hasUserAddedTags'] = report;
        report = function() {
            entity = _closure2_slot0;
            michal = entity.tagsManager;
            entity = michal.get;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu['getTags'] = report;
        report = function() {
            entity = _closure2_slot0;
            michal = entity.tagsManager;
            entity = michal.getPrefixTag;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu['getPrefixTag'] = report;
        report = function() {
            michal = _closure2_slot0;
            entity = michal.getPrefixTag;
            michal = entity.bind(michal)();
            entity = null;
            entity = entity != michal;
            return entity;
        };
        zuuluu['isAutocompleteVisible'] = report;
        report = function(argFoo) {
            entity = _closure2_slot0;
            zuuluu = entity.tagsManager;
            michal = zuuluu.set;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        zuuluu['setTags'] = report;
        report = function(argFoo) {
            entity = _closure2_slot0;
            zuuluu = entity.tagsManager;
            michal = zuuluu.add;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        zuuluu['addTag'] = report;
        report = function(argFoo) {
            entity = _closure2_slot0;
            zuuluu = entity.tagsManager;
            michal = zuuluu.removeAtIndex;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        zuuluu['removeTag'] = report;
        report = function() {
            entity = _closure2_slot0;
            michal = entity.tagsManager;
            entity = michal.removeAnyPrefixTags;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        zuuluu['removePrefixTags'] = report;
        report = function() {
            entity = _closure2_slot0;
            michal = entity.tagsManager;
            entity = michal.getChannelIds;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu['getChannelIds'] = report;
        report = function(argFoo) {
            entity = _closure2_slot0;
            zuuluu = entity.tagsManager;
            michal = zuuluu.getUserIds;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu['getUserIds'] = report;
        report = function() {
            entity = _closure2_slot0;
            michal = entity.tagsManager;
            entity = michal.isEmpty;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu['isTagsEmpty'] = report;
        tangon = function() {
            entity = _closure2_slot0;
            michal = _closure1_slot5;
            entity['textInputValue'] = michal;
            zuuluu = false;
            entity['textInputChangedFromInput'] = zuuluu;
            entity['searchResultsQuery'] = michal;
            michal = entity.tagsManager;
            entity = michal.reset;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        zuuluu['reset'] = tangon;
        tangon = _closure1_slot5;
        zuuluu['textInputValue'] = tangon;
        report = false;
        zuuluu['textInputChangedFromInput'] = report;
        zuuluu['searchResultsQuery'] = tangon;
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        michal = 5;
        michal = report[michal];
        report = tangon.bind(entity)(michal);
        michal = report.prototype;
        tangon = Object.create(michal, {constructor: {value: report}});
        option = argFoo;
        verify = tangon;
        michal = new verify[report](option, golfie);
        michal = michal instanceof Object ? michal : tangon;
        zuuluu['tagsManager'] = michal;
        return entity;
    };
    var _closure1_slot10 = michal;
    michal = verify.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = function() {
        entity = {};
        michal = global;
        michal = michal.Map;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        tangon = zuuluu;
        michal = new tangon[michal](zuuluu);
        michal = michal instanceof Object ? michal : zuuluu;
        entity['states'] = michal;
        return entity;
    };
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = {};
    option = function(argFoo, argBar) { // Original name: useState
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot4;
        tangon = report.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                oscard = entity.states;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 6;
                entity = zuuluu[entity];
                zuuluu = undefined;
                golfie = michal.bind(zuuluu)(entity);
                report = golfie.getSearchContextId;
                michal = _closure2_slot0;
                report = report.bind(golfie)(michal);
                michal = oscard.get;
                michal = michal.bind(oscard)(report);
                report = null;
                if(!(report == michal)) { _fun00012_ip = 96; continue _fun00011 }
 68:
                oscard = _closure1_slot6;
                option = _closure2_slot0;
                report = oscard.prototype;
                report = Object.create(report, {constructor: {value: oscard}});
                verify = report;
                tangon = new verify[oscard](option, golfie);
                michal = tangon instanceof Object ? tangon : report;
 96:
                entity = _closure2_slot1;
                entity = entity.bind(zuuluu)(michal);
                return entity;
            }
        };
        tangon = tangon.bind(report)(michal, zuuluu);
        zuuluu = _closure1_slot7;
        michal = zuuluu.useState;
        entity = _closure1_slot8;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal['useState'] = option;
    option = function(argFoo, argBar) { // Original name: getState
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            michal = zuuluu[michal];
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.getSearchContextId;
            oscard = michal.bind(tangon)(report);
            golfie = _closure1_slot7;
            tangon = golfie.getState;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.states;
                return entity;
            };
            tangon = tangon.bind(golfie)(michal);
            michal = tangon.get;
            michal = michal.bind(tangon)(oscard);
            tangon = null;
            if(!(tangon == michal)) { _fun00014_ip = 106; continue _fun00013 }
 79:
            entity = _closure1_slot6;
            tangon = entity.prototype;
            tangon = Object.create(tangon, {constructor: {value: entity}});
            verify = tangon;
            option = report;
            entity = new verify[entity](option, golfie);
            michal = entity instanceof Object ? entity : tangon;
 106:
            entity = argBar;
            entity = entity.bind(zuuluu)(michal);
            return entity;
        }
    };
    michal['getState'] = option;
    option = function(argFoo, argBar) { // Original name: setState
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            option = argFoo;
            tangon = _closure1_slot7;
            zuuluu = tangon.getState;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.states;
                return entity;
            };
            golfie = zuuluu.bind(tangon)(entity);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getSearchContextId;
            oscard = zuuluu.bind(tangon)(option);
            zuuluu = golfie.get;
            tangon = zuuluu.bind(golfie)(oscard);
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00016_ip = 106; continue _fun00015 }
 79:
            zuuluu = _closure1_slot6;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            yankee = report;
            offset = option;
            zuuluu = new yankee[zuuluu](offset, verify);
            tangon = zuuluu instanceof Object ? zuuluu : report;
 106:
            zuuluu = argBar;
            zuuluu = zuuluu.bind(entity)(tangon);
            zuuluu = global;
            zuuluu = zuuluu.Map;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            yankee = report;
            offset = golfie;
            zuuluu = new yankee[zuuluu](offset, verify);
            report = zuuluu instanceof Object ? zuuluu : report;
            zuuluu = report.set;
            zuuluu = zuuluu.bind(report)(oscard, tangon);
            tangon = _closure1_slot7;
            zuuluu = tangon.setState;
            michal = {};
            michal['states'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['setState'] = option;
    option = function(argFoo) { // Original name: deleteState
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = _closure1_slot7;
            zuuluu = tangon.getState;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.states;
                return entity;
            };
            oscard = zuuluu.bind(tangon)(entity);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.getSearchContextId;
            zuuluu = argFoo;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = oscard.has;
            zuuluu = zuuluu.bind(oscard)(tangon);
            if(!zuuluu) { _fun00018_ip = 139; continue _fun00017 }
 76:
            zuuluu = global;
            zuuluu = zuuluu.Map;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            option = report;
            golfie = oscard;
            zuuluu = new option[zuuluu](golfie, oscard);
            report = zuuluu instanceof Object ? zuuluu : report;
            zuuluu = report.delete;
            zuuluu = zuuluu.bind(report)(tangon);
            tangon = _closure1_slot7;
            zuuluu = tangon.setState;
            michal = {};
            michal['states'] = report;
            michal = zuuluu.bind(tangon)(michal);
 139:
            return entity;
        }
    };
    michal['deleteState'] = option;
    michal['subscribeState'] = golfie;
    tangon = function(argFoo, argBar, argBaz) { // Original name: subscribeTextInputValue
        michal = argBar;
        var _closure2_slot0 = michal;
        oscard = _closure1_slot9;
        yankee = undefined;
        offset = argFoo;
        verify = function(argFoo) {
            zuuluu = argFoo;
            entity = {};
            michal = zuuluu.getTextInputValue;
            michal = michal.bind(zuuluu)();
            entity['textInputValue'] = michal;
            michal = zuuluu.getTextValueChangedFromInput;
            michal = michal.bind(zuuluu)();
            entity['textInputChangedFromInput'] = michal;
            return entity;
        };
        option = function(argFoo, argBar) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = argFoo;
                oscard = argBar;
                michal = null;
                if(!(michal != entity)) { _fun00020_ip = 55; continue _fun00019 }
 12:
                report = _closure2_slot0;
                tangon = entity.textInputValue;
                golfie = michal == oscard;
                zuuluu = undefined;
                michal = undefined;
                if(golfie) { _fun00020_ip = 42; continue _fun00019 }
 36:
                michal = oscard.textInputValue;
 42:
                entity = entity.textInputChangedFromInput;
                entity = report.bind(zuuluu)(tangon, michal, entity);
 55:
                entity = undefined;
                return entity;
            }
        };
        golfie = argBaz;
        entity = yankee[oscard](offset, verify, option, golfie, oscard);
        return entity;
    };
    michal['subscribeTextInputValue'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/stores/SearchQueryStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();