// app/modules/search_v2/native/hooks/usePeopleSearchTab.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    tangon = global;
    offset = tangon.Object;
    option = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 1;
    option = oscard[golfie];
    golfie = argCor;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.createZustandStore;
    option = 3;
    option = oscard[option];
    option = verify.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 4;
    option = oscard[option];
    option = verify.bind(entity)(option);
    var _closure1_slot5 = option;
    option = new Array(0);
    var _closure1_slot6 = option;
    verify = tangon.Object;
    option = verify.freeze;
    tangon = {};
    offset = new Array(0);
    tangon['data'] = offset;
    offset = null;
    tangon['count'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot7 = tangon;
    tangon = function() {
        entity = _closure1_slot7;
        return entity;
    };
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/hooks/usePeopleSearchTab.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: usePeopleSearchTabCount
        golfie = argFoo;
        zuuluu = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = zuuluu;
        report = _closure1_slot3;
        oscard = report.useState;
        tangon = 0;
        offset = oscard.bind(report)(tangon);
        verify = _closure1_slot2;
        option = undefined;
        oscard = 2;
        oscard = verify.bind(option)(offset, oscard);
        offset = oscard[tangon];
        tangon = 1;
        tangon = oscard[tangon];
        var _closure2_slot2 = tangon;
        option = report.useCallback;
        oscard = function() {
            zuuluu = _closure2_slot2;
            michal = undefined;
            entity = function(argFoo) {
                michal = argFoo;
                entity = 1;
                entity = michal + entity;
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        tangon = new Array(0);
        oscard = option.bind(report)(oscard, tangon);
        var _closure2_slot3 = oscard;
        verify = report.useMemo;
        option = new Array(2);
        option[0] = zuuluu;
        option[1] = oscard;
        tangon = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = null;
                if(zuuluu) { _fun00002_ip = 67; continue _fun00001 }
 12:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 5;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                tangon = zuuluu.UserSearch;
                oscard = _closure2_slot3;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                golfie = zuuluu;
                michal = new golfie[tangon](oscard, report);
                entity = michal instanceof Object ? michal : zuuluu;
 67:
                return entity;
            }
        };
        tangon = verify.bind(report)(tangon, option);
        var _closure2_slot4 = tangon;
        verify = report.useRef;
        option = new Array(0);
        option = verify.bind(report)(option);
        var _closure2_slot5 = option;
        verify = report.useRef;
        option = '';
        option = verify.bind(report)(option);
        var _closure2_slot6 = option;
        yankee = report.useEffect;
        verify = new Array(1);
        verify[0] = zuuluu;
        option = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot1;
                if(entity) { _fun00004_ip = 45; continue _fun00003 }
 10:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.fetchUserAffinities;
                entity = entity.bind(michal)();
 45:
                entity = undefined;
                return entity;
            }
        };
        option = yankee.bind(report)(option, verify);
        yankee = report.useEffect;
        verify = new Array(3);
        verify[0] = zuuluu;
        verify[1] = oscard;
        verify[2] = tangon;
        option = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00006_ip = 93; continue _fun00005 }
 10:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 7;
                zuuluu = zuuluu[michal];
                michal = undefined;
                report = tangon.bind(michal)(zuuluu);
                tangon = report.debounce;
                zuuluu = _closure2_slot3;
                michal = 250;
                tangon = tangon.bind(report)(zuuluu, michal);
                zuuluu = _closure2_slot4;
                michal = null;
                if(!(michal != zuuluu)) { _fun00006_ip = 82; continue _fun00005 }
 64:
                zuuluu = _closure2_slot4;
                michal = zuuluu.subscribe;
                entity = true;
                entity = michal.bind(zuuluu)(tangon, entity);
 82:
                entity = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = _closure2_slot4;
                        entity = null;
                        zuuluu = entity == zuuluu;
                        entity = undefined;
                        if(zuuluu) { _fun00008_ip = 32; continue _fun00007 }
 18:
                        zuuluu = _closure2_slot4;
                        michal = zuuluu.unsubscribe;
                        entity = michal.bind(zuuluu)();
 32:
                        return entity;
                    }
                };
                return entity;
 93:
                entity = undefined;
                return entity;
            }
        };
        option = yankee.bind(report)(option, verify);
        verify = report.useCallback;
        option = new Array(3);
        option[0] = oscard;
        option[1] = tangon;
        option[2] = golfie;
        oscard = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                option = _closure1_slot5;
                golfie = option.getState;
                oscard = _closure2_slot0;
                report = function(argFoo) {
                    michal = argFoo;
                    entity = michal.isAutocompleteVisible;
                    entity = entity.bind(michal)();
                    return entity;
                };
                report = golfie.bind(option)(oscard, report);
                if(report) { _fun00010_ip = 302; continue _fun00009 }
 48:
                oscard = _closure2_slot6;
                report = zuuluu.toLowerCase;
                golfie = report.bind(zuuluu)();
                report = golfie.trim;
                report = report.bind(golfie)();
                oscard['current'] = report;
                oscard = _closure2_slot4;
                report = null;
                if(!(report != oscard)) { _fun00010_ip = 106; continue _fun00009 }
 88:
                golfie = _closure2_slot4;
                oscard = golfie.fetch;
                report = true;
                report = oscard.bind(golfie)(zuuluu, report);
 106:
                report = zuuluu.length;
                zuuluu = 0;
                if(!(zuuluu !== report)) { _fun00010_ip = 292; continue _fun00009 }
 120:
                zuuluu = _closure2_slot5;
                option = _closure1_slot0;
                verify = _closure1_slot1;
                report = 7;
                report = verify[report];
                golfie = undefined;
                oscard = option.bind(golfie)(report);
                report = oscard.chain;
                offset = _closure1_slot4;
                tangon = offset.getMutablePrivateChannels;
                tangon = tangon.bind(offset)();
                report = report.bind(oscard)(tangon);
                tangon = report.values;
                oscard = tangon.bind(report)();
                report = oscard.filter;
                tangon = 8;
                tangon = verify[tangon];
                tangon = option.bind(golfie)(tangon);
                tangon = tangon.filterGroupDMs;
                oscard = report.bind(oscard)(tangon);
                report = oscard.map;
                tangon = function(argFoo) {
                    oscard = argFoo;
                    entity = new Array(2);
                    entity[0] = oscard;
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    zuuluu = 8;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.matchGroupDM;
                    zuuluu = _closure1_slot6;
                    michal = _closure3_slot0;
                    michal = tangon.bind(report)(oscard, zuuluu, michal);
                    entity[1] = michal;
                    return entity;
                };
                oscard = report.bind(oscard)(tangon);
                report = oscard.filter;
                tangon = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        tangon = argFoo;
                        entity = tangon[Symbol.iterator];
                        tangon = entity().next;
                        michal = tangon().value;
                        michal = entity;
                        oscard = undefined;
                        zuuluu = michal === oscard;
                        michal = undefined;
                        if(zuuluu) { _fun00012_ip = 49; continue _fun00011 }
 24:
                        report = tangon().value;
                        tangon = entity;
                        tangon = tangon === oscard;
                        michal = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00012_ip = 49; continue _fun00011 }
 43:
                        michal = report;
                        zuuluu = tangon;
 49:
                        if(zuuluu) { _fun00012_ip = 55; continue _fun00011 }
 52:
                        entity.return();
 55:
                        entity = 0;
                        entity = michal > entity;
                        return entity;
                    }
                };
                oscard = report.bind(oscard)(tangon);
                report = oscard.sort;
                tangon = function(argFoo, argBar) {
                    entity = argFoo;
                    zuuluu = 1;
                    michal = entity[zuuluu];
                    entity = argBar;
                    entity = entity[zuuluu];
                    entity = michal - entity;
                    return entity;
                };
                report = report.bind(oscard)(tangon);
                tangon = report.map;
                michal = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        michal = entity[Symbol.iterator];
                        entity = michal().next;
                        tangon = entity().value;
                        zuuluu = michal;
                        entity = undefined;
                        zuuluu = zuuluu === entity;
                        if(zuuluu) { _fun00014_ip = 25; continue _fun00013 }
 22:
                        entity = tangon;
 25:
                        if(zuuluu) { _fun00014_ip = 31; continue _fun00013 }
 28:
                        michal.return();
 31:
                        return entity;
                    }
                };
                tangon = tangon.bind(report)(michal);
                michal = tangon.value;
                michal = michal.bind(tangon)();
                zuuluu['current'] = michal;
 292:
                michal = _closure2_slot3;
                entity = undefined;
                entity = michal.bind(entity)();
 302:
                entity = undefined;
                return entity;
            }
        };
        option = verify.bind(report)(oscard, option);
        var _closure2_slot7 = option;
        verify = report.useEffect;
        oscard = new Array(3);
        oscard[0] = offset;
        oscard[1] = zuuluu;
        oscard[2] = tangon;
        tangon = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = _closure2_slot1;
                if(entity) { _fun00016_ip = 401; continue _fun00015 }
 15:
                tangon = _closure2_slot4;
                entity = null;
                tangon = entity == tangon;
                romeon = undefined;
                golfie = undefined;
                if(tangon) { _fun00016_ip = 55; continue _fun00015 }
 32:
                oscard = _closure2_slot4;
                report = oscard.filter;
                tangon = _closure2_slot6;
                tangon = tangon.current;
                golfie = report.bind(oscard)(tangon);
 55:
                if(!(entity != golfie)) { _fun00016_ip = 401; continue _fun00015 }
 62:
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                tangon = 5;
                tangon = oscard[tangon];
                oscard = report.bind(romeon)(tangon);
                report = oscard.parseUserSearchResults;
                tangon = {'data': null, 'withGuildMembers': true, 'withAffinitySuggestions': true, 'withFriends': true, 'withFriendSuggestions': false, 'withFriendRequests': false, 'withFriendRequestsIncoming': false, 'withFriendRequestsOutgoing': false, 'excludeCurrentUser': true};
                tangon['data'] = golfie;
                golfie = report.bind(oscard)(tangon);
                tangon = _closure2_slot5;
                tangon = tangon.current;
                oscard = tangon.length;
                tangon = 0;
                report = golfie;
                if(!(tangon !== oscard)) { _fun00016_ip = 357; continue _fun00015 }
 142:
                oscard = _closure2_slot6;
                option = oscard.current;
                oscard = '';
                report = golfie;
                if(!(oscard !== option)) { _fun00016_ip = 357; continue _fun00015 }
 165:
                oscard = {};
                yankee = _closure1_slot0;
                foxtra = _closure1_slot1;
                option = 9;
                verify = foxtra[option];
                verify = yankee.bind(romeon)(verify);
                offset = verify.intl;
                verify = offset.string;
                option = foxtra[option];
                option = yankee.bind(romeon)(option);
                option = option.t;
                option = option.qGlQra;
                option = verify.bind(offset)(option);
                oscard['title'] = option;
                zuuluu = _closure2_slot5;
                zuuluu = zuuluu.current;
                oscard['items'] = zuuluu;
                option = golfie.findIndex;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    michal = entity.title;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot1;
                    entity = 9;
                    zuuluu = golfie[entity];
                    report = undefined;
                    zuuluu = oscard.bind(report)(zuuluu);
                    tangon = zuuluu.intl;
                    zuuluu = tangon.string;
                    entity = golfie[entity];
                    entity = oscard.bind(report)(entity);
                    entity = entity.t;
                    entity = entity.y29JXl;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = michal === entity;
                    return entity;
                };
                offset = option.bind(golfie)(zuuluu);
                zuuluu = -1;
                if(!(zuuluu !== offset)) { _fun00016_ip = 326; continue _fun00015 }
 268:
                zuuluu = golfie.slice;
                kiloes = zuuluu.bind(golfie)(tangon, offset);
                zuuluu = new Array(1);
                sizing = zuuluu;
                backup = 0;
                verify = arraySpread(sizing, kiloes, backup);
                zuuluu[verify] = oscard;
                option = 1;
                backup = verify + option;
                option = golfie.slice;
                kiloes = option.bind(golfie)(offset);
                sizing = zuuluu;
                option = arraySpread(sizing, kiloes, backup);
                report = zuuluu;
                _fun00016_ip = 357; continue _fun00015;
 326:
                zuuluu = new Array(1);
                sizing = zuuluu;
                kiloes = golfie;
                backup = 0;
                golfie = arraySpread(sizing, kiloes, backup);
                zuuluu[golfie] = oscard;
                oscard = 1;
                oscard = golfie + oscard;
                report = zuuluu;
 357:
                zuuluu = report.reduce;
                michal = function(argFoo, argBar) {
                    entity = argBar;
                    entity = entity.items;
                    michal = entity.length;
                    entity = argFoo;
                    entity = entity + michal;
                    return entity;
                };
                tangon = zuuluu.bind(report)(michal, tangon);
                zuuluu = _closure1_slot8;
                michal = zuuluu.setState;
                entity = {};
                entity['data'] = report;
                entity['count'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 401:
                entity = undefined;
                return entity;
            }
        };
        tangon = verify.bind(report)(tangon, oscard);
        oscard = report.useEffect;
        tangon = new Array(3);
        tangon[0] = option;
        tangon[1] = golfie;
        tangon[2] = zuuluu;
        zuuluu = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00018_ip = 76; continue _fun00017 }
 10:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 7;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                oscard = report.bind(zuuluu)(tangon);
                report = oscard.debounce;
                tangon = _closure2_slot7;
                zuuluu = 250;
                tangon = report.bind(oscard)(tangon, zuuluu);
                zuuluu = _closure1_slot5;
                michal = zuuluu.subscribeTextInputValue;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
 76:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = oscard.bind(report)(zuuluu, tangon);
        tangon = report.useEffect;
        zuuluu = function() {
            entity = function() {
                michal = _closure1_slot8;
                entity = michal.resetState;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        zuuluu = _closure1_slot8;
        michal = zuuluu.useField;
        entity = 'count';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function() { // Original name: usePeopleSearchResults
        zuuluu = _closure1_slot8;
        michal = zuuluu.useField;
        entity = 'data';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['usePeopleSearchResults'] = michal;
    return entity;
})();