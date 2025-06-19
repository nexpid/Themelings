// app/modules/search_v2/SearchFetchManager.tsx
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
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = ['include_nsfw', 'channel_id'];
    var _closure1_slot2 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.SEARCH_FILTERS_BY_TAB;
    var _closure1_slot9 = option;
    option = tangon.SEARCH_QUERY_BY_SEARCH_FILTER;
    var _closure1_slot10 = option;
    tangon = tangon.SEARCH_QUERY_DEFAULT_FILTERS;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchTypes;
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: SearchFetchManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot4;
                michal = _closure2_slot0;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot7;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot13;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 84; continue _fun00003 }
 71:
                entity = option.apply;
                entity = entity.bind(option)(tangon, verify);
                _fun00004_ip = 118; continue _fun00003;
 84:
                oscard = global;
                golfie = oscard.Reflect;
                oscard = golfie.construct;
                report = _closure1_slot7;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = global;
                michal = michal.Map;
                zuuluu = michal.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                foxtra = zuuluu;
                michal = new foxtra[michal](romeon);
                michal = michal instanceof Object ? michal : zuuluu;
                entity['searchTabFetchers'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'createSearchTabsPayload';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            entity = argFoo;
            verify = entity.searchQuery;
            tangon = entity.searchTabs;
            zuuluu = entity.getLimit;
            var _closure3_slot0 = zuuluu;
            zuuluu = entity.pagination;
            var _closure3_slot1 = zuuluu;
            zuuluu = entity.trackExactTotalHits;
            oscard = verify.include_nsfw;
            report = verify.channel_id;
            option = _closure1_slot3;
            golfie = _closure1_slot2;
            entity = undefined;
            entity = option.bind(entity)(verify, golfie);
            var _closure3_slot2 = entity;
            entity = {};
            entity['include_nsfw'] = oscard;
            entity['channel_ids'] = report;
            report = {};
            entity['tabs'] = report;
            entity['track_exact_total_hits'] = zuuluu;
            var _closure3_slot3 = entity;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    michal = _closure3_slot0;
                    entity = undefined;
                    oscard = michal.bind(entity)(tangon);
                    michal = _closure1_slot9;
                    zuuluu = michal[tangon];
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00006_ip = 38; continue _fun00005 }
 34:
                    golfie = {};
                    _fun00006_ip = 46; continue _fun00005;
 38:
                    michal = _closure1_slot10;
                    golfie = michal[zuuluu];
 46:
                    michal = _closure3_slot3;
                    zuuluu = michal.tabs;
                    michal = {};
                    verify = _closure1_slot11;
                    offset = michal;
                    option = copyDataProperties(offset, verify);
                    offset = michal;
                    verify = golfie;
                    golfie = copyDataProperties(offset, verify);
                    verify = _closure3_slot2;
                    offset = michal;
                    golfie = copyDataProperties(offset, verify);
                    verify = _closure3_slot1;
                    offset = michal;
                    report = copyDataProperties(offset, verify);
                    report = 'limit';
                    michal[report] = oscard;
                    zuuluu[tangon] = michal;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'createSearchTabFetcher';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = argFoo;
                tangon = this;
                entity = michal.searchContext;
                oscard = michal.searchQuery;
                verify = michal.searchTabs;
                option = michal.getLimit;
                golfie = michal.pagination;
                report = michal.trackExactTotalHits;
                zuuluu = tangon.createSearchTabsPayload;
                michal = {};
                michal['searchQuery'] = oscard;
                michal['searchTabs'] = verify;
                michal['getLimit'] = option;
                michal['pagination'] = golfie;
                michal['trackExactTotalHits'] = report;
                report = zuuluu.bind(tangon)(michal);
                tangon = entity.type;
                zuuluu = _closure1_slot12;
                zuuluu = zuuluu.GUILD;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 344; continue _fun00007 }
 107:
                zuuluu = _closure1_slot12;
                zuuluu = zuuluu.GUILD_CHANNEL;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 344; continue _fun00007 }
 124:
                zuuluu = _closure1_slot12;
                zuuluu = zuuluu.CHANNEL;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 278; continue _fun00007 }
 141:
                zuuluu = _closure1_slot12;
                zuuluu = zuuluu.DMS;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 212; continue _fun00007 }
 155:
                zuuluu = global;
                golfie = zuuluu.Error;
                option = entity.type;
                zuuluu = zuuluu.HermesInternal;
                tangon = zuuluu.concat;
                zuuluu = '[SearchFetchManager] Unsupported search context type: ';
                backup = tangon.bind(zuuluu)(option);
                tangon = golfie.prototype;
                tangon = Object.create(tangon, {constructor: {value: golfie}});
                kiloes = tangon;
                zuuluu = new kiloes[golfie](backup, foxtra);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                throw zuuluu;
 212:
                golfie = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 8;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = golfie.bind(zuuluu)(tangon);
                option = zuuluu.SearchTabFetcherImpl;
                backup = entity.type;
                foxtra = entity.type;
                tangon = option.prototype;
                tangon = Object.create(tangon, {constructor: {value: option}});
                kiloes = tangon;
                romeon = oscard;
                yankee = report;
                zuuluu = new kiloes[option](backup, foxtra, romeon, yankee, offset);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                return zuuluu;
 278:
                golfie = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 8;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = golfie.bind(zuuluu)(tangon);
                option = zuuluu.SearchTabFetcherImpl;
                backup = entity.channelId;
                foxtra = entity.type;
                tangon = option.prototype;
                tangon = Object.create(tangon, {constructor: {value: option}});
                kiloes = tangon;
                romeon = oscard;
                yankee = report;
                zuuluu = new kiloes[option](backup, foxtra, romeon, yankee, offset);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                return zuuluu;
 344:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 8;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                tangon = michal.SearchTabFetcherImpl;
                backup = entity.guildId;
                foxtra = entity.type;
                michal = tangon.prototype;
                michal = Object.create(michal, {constructor: {value: tangon}});
                kiloes = michal;
                romeon = oscard;
                yankee = report;
                entity = new kiloes[tangon](backup, foxtra, romeon, yankee, offset);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = '_terminate';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            tangon = entity.searchTabFetchers;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    michal = entity == zuuluu;
                    entity = undefined;
                    if(michal) { _fun00010_ip = 24; continue _fun00009 }
 14:
                    michal = zuuluu.cancel;
                    entity = michal.bind(zuuluu)();
 24:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            michal = entity.searchTabFetchers;
            entity = michal.clear;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'cancelInFlightRequests';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getSearchContextId;
                michal = argFoo;
                tangon = zuuluu.bind(tangon)(michal);
                michal = this;
                zuuluu = michal.searchTabFetchers;
                michal = zuuluu.get;
                zuuluu = michal.bind(zuuluu)(tangon);
                michal = null;
                if(!(michal != zuuluu)) { _fun00012_ip = 74; continue _fun00011 }
 64:
                michal = zuuluu.cancel;
                michal = michal.bind(zuuluu)();
 74:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getSearchTabFetcher';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            entity = argFoo;
            michal = this;
            report = entity.searchContext;
            verify = entity.searchQuery;
            option = entity.searchTabs;
            golfie = entity.getLimit;
            oscard = entity.pagination;
            tangon = entity.trackExactTotalHits;
            entity = michal.cancelInFlightRequests;
            entity = entity.bind(michal)(report);
            zuuluu = michal.createSearchTabFetcher;
            entity = {};
            entity['searchContext'] = report;
            entity['searchQuery'] = verify;
            entity['searchTabs'] = option;
            entity['getLimit'] = golfie;
            entity['pagination'] = oscard;
            entity['trackExactTotalHits'] = tangon;
            entity = zuuluu.bind(michal)(entity);
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 9;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = oscard.bind(zuuluu)(tangon);
            zuuluu = tangon.getSearchContextId;
            tangon = zuuluu.bind(tangon)(report);
            zuuluu = michal.searchTabFetchers;
            michal = zuuluu.set;
            michal = michal.bind(zuuluu)(tangon, entity);
            return entity;
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/SearchFetchManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();