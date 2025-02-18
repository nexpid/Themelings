// app/modules/search_v2/native/SearchFetchManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot7;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot6;
            entity = _closure1_slot15;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.SEARCH_FILTERS_BY_TAB;
    var _closure1_slot10 = option;
    option = tangon.SEARCH_QUERY_BY_SEARCH_FILTER;
    var _closure1_slot11 = option;
    tangon = tangon.SEARCH_QUERY_DEFAULT_FILTERS;
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchTypes;
    var _closure1_slot13 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: SearchFetchManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            michal = _closure1_slot4;
            report = _closure2_slot0;
            tangon = undefined;
            michal = michal.bind(tangon)(oscard, report);
            michal = _closure1_slot14;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = michal.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            michal = {};
            entity['searchTabFetchers'] = michal;
            michal = global;
            michal = michal.Set;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            romeon = tangon;
            michal = new romeon[michal](yankee);
            michal = michal instanceof Object ? michal : tangon;
            entity['deferredFetches'] = michal;
            michal = {};
            zuuluu = function() { // Original name: SEARCH_MESSAGES_CLEAR_ALL
                michal = _closure3_slot0;
                entity = michal.clearDeferredFetches;
                entity = entity.bind(michal)();
                return entity;
            };
            michal['SEARCH_MESSAGES_CLEAR_ALL'] = zuuluu;
            entity['actions'] = michal;
            return entity;
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
        entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: value
            verify = argBar;
            tangon = argCor;
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBaz;
            var _closure3_slot1 = entity;
            entity = argGra;
            var _closure3_slot2 = entity;
            golfie = verify.include_nsfw;
            report = verify.channel_id;
            option = _closure1_slot3;
            entity = _closure1_slot2;
            oscard = undefined;
            entity = option.bind(oscard)(verify, entity);
            var _closure3_slot3 = entity;
            entity = {};
            entity['include_nsfw'] = golfie;
            entity['channel_ids'] = report;
            report = {};
            entity['tabs'] = report;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 9;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            report = zuuluu.SearchResultExactCountEnabled;
            zuuluu = report.getSetting;
            zuuluu = zuuluu.bind(report)();
            entity['track_exact_total_hits'] = zuuluu;
            var _closure3_slot4 = entity;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    golfie = zuuluu.bind(entity)(michal);
                    oscard = golfie.getSearchTabFetchId;
                    zuuluu = _closure3_slot0;
                    michal = _closure3_slot1;
                    oscard = oscard.bind(golfie)(zuuluu, tangon, michal);
                    zuuluu = _closure1_slot9;
                    michal = zuuluu.getCursor;
                    golfie = michal.bind(zuuluu)(oscard);
                    michal = _closure3_slot2;
                    oscard = michal.bind(entity)(tangon);
                    michal = _closure1_slot10;
                    zuuluu = michal[tangon];
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00006_ip = 96; continue _fun00005 }
 92:
                    option = {};
                    _fun00006_ip = 104; continue _fun00005;
 96:
                    michal = _closure1_slot11;
                    option = michal[zuuluu];
 104:
                    michal = _closure3_slot4;
                    zuuluu = michal.tabs;
                    michal = {};
                    yankee = _closure1_slot12;
                    romeon = michal;
                    verify = copyDataProperties(romeon, yankee);
                    romeon = michal;
                    yankee = option;
                    option = copyDataProperties(romeon, yankee);
                    yankee = _closure3_slot3;
                    romeon = michal;
                    report = copyDataProperties(romeon, yankee);
                    report = 'cursor';
                    michal[report] = golfie;
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
        entity = new Array(9);
        entity[0] = report;
        report = {};
        golfie = 'createSearchTabFetcher';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                oscard = argBar;
                golfie = this;
                report = golfie.createSearchTabsPayload;
                yankee = argBaz;
                offset = argCor;
                verify = argGra;
                backup = golfie;
                foxtra = entity;
                romeon = oscard;
                report = backup[report](foxtra, romeon, yankee, offset, verify, option);
                tangon = entity.type;
                zuuluu = _closure1_slot13;
                zuuluu = zuuluu.GUILD;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 301; continue _fun00007 }
 64:
                zuuluu = _closure1_slot13;
                zuuluu = zuuluu.GUILD_CHANNEL;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 301; continue _fun00007 }
 81:
                zuuluu = _closure1_slot13;
                zuuluu = zuuluu.CHANNEL;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 235; continue _fun00007 }
 98:
                zuuluu = _closure1_slot13;
                zuuluu = zuuluu.DMS;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 169; continue _fun00007 }
 112:
                zuuluu = global;
                golfie = zuuluu.Error;
                option = entity.type;
                zuuluu = zuuluu.HermesInternal;
                tangon = zuuluu.concat;
                zuuluu = '[SearchFetchManager] Unsupported search context type: ';
                foxtra = tangon.bind(zuuluu)(option);
                tangon = golfie.prototype;
                tangon = Object.create(tangon, {constructor: {value: golfie}});
                backup = tangon;
                zuuluu = new backup[golfie](foxtra, romeon);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                throw zuuluu;
 169:
                golfie = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 11;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = golfie.bind(zuuluu)(tangon);
                option = zuuluu.SearchTabFetcherImpl;
                foxtra = entity.type;
                romeon = entity.type;
                tangon = option.prototype;
                tangon = Object.create(tangon, {constructor: {value: option}});
                backup = tangon;
                yankee = oscard;
                offset = report;
                zuuluu = new backup[option](foxtra, romeon, yankee, offset, verify);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                return zuuluu;
 235:
                golfie = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 11;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = golfie.bind(zuuluu)(tangon);
                option = zuuluu.SearchTabFetcherImpl;
                foxtra = entity.channelId;
                romeon = entity.type;
                tangon = option.prototype;
                tangon = Object.create(tangon, {constructor: {value: option}});
                backup = tangon;
                yankee = oscard;
                offset = report;
                zuuluu = new backup[option](foxtra, romeon, yankee, offset, verify);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                return zuuluu;
 301:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                tangon = michal.SearchTabFetcherImpl;
                foxtra = entity.guildId;
                romeon = entity.type;
                michal = tangon.prototype;
                michal = Object.create(michal, {constructor: {value: tangon}});
                backup = michal;
                yankee = oscard;
                offset = report;
                entity = new backup[tangon](foxtra, romeon, yankee, offset, verify);
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
            michal = this;
            entity = global;
            report = entity.Object;
            tangon = report.values;
            zuuluu = michal.searchTabFetchers;
            report = tangon.bind(report)(zuuluu);
            tangon = report.forEach;
            zuuluu = function(argFoo) {
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
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = {};
            michal['searchTabFetchers'] = zuuluu;
            entity = entity.Set;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            golfie = zuuluu;
            entity = new golfie[entity](oscard);
            entity = entity instanceof Object ? entity : zuuluu;
            michal['deferredFetches'] = entity;
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
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getSearchContextId;
                michal = argFoo;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = this;
                michal = michal.searchTabFetchers;
                zuuluu = michal[zuuluu];
                michal = null;
                if(!(michal != zuuluu)) { _fun00012_ip = 68; continue _fun00011 }
 58:
                michal = zuuluu.cancel;
                michal = michal.bind(zuuluu)();
 68:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getSearchTabFetcher';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: value
            report = argFoo;
            michal = this;
            entity = michal.cancelInFlightRequests;
            entity = entity.bind(michal)(report);
            golfie = michal.createSearchTabFetcher;
            yankee = argBar;
            offset = argBaz;
            verify = argCor;
            option = argGra;
            foxtra = michal;
            romeon = report;
            entity = foxtra[golfie](romeon, yankee, offset, verify, option, golfie);
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 10;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = oscard.bind(zuuluu)(tangon);
            zuuluu = tangon.getSearchContextId;
            zuuluu = zuuluu.bind(tangon)(report);
            michal = michal.searchTabFetchers;
            michal[zuuluu] = entity;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'addDeferredFetch';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.deferredFetches;
            michal = zuuluu.add;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'removeDeferredFetch';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.deferredFetches;
            michal = zuuluu.delete;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'hasDeferredFetch';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.deferredFetches;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'clearDeferredFetches';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = global;
            entity = entity.Set;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            zuuluu = michal;
            entity = new zuuluu[entity](michal);
            michal = entity instanceof Object ? entity : michal;
            entity = this;
            entity['deferredFetches'] = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[8] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/SearchFetchManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();