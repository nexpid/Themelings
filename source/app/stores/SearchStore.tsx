// app/stores/SearchStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot18;
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
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot12;
            tangon = zuuluu[michal];
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00006_ip = 61; continue _fun00005 }
 20:
            tangon = _closure1_slot12;
            zuuluu = {'searchId': null, 'searchType': null, 'isIndexing': false, 'isHistoricalIndexing': false, 'isSearching': false, 'analyticsId': null, 'editorState': null, 'offset': 0, 'query': null, 'hasError': false, 'searchFetcher': null, 'rawResults': null, 'totalResults': 0, 'documentsIndexed': 0, 'resultsBlocked': 0, 'showBlockedResults': false, 'showNoResultsAlt': false};
            zuuluu['searchId'] = michal;
            oscard = _closure1_slot20;
            report = undefined;
            report = oscard.bind(report)(michal);
            zuuluu['searchType'] = report;
            tangon[michal] = zuuluu;
 61:
            entity = _closure1_slot12;
            entity = entity[michal];
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: getSearchType
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot11;
            entity = entity.DMS;
            if(!(report !== entity)) { _fun00008_ip = 107; continue _fun00007 }
 20:
            entity = _closure1_slot10;
            if(!(report !== entity)) { _fun00008_ip = 95; continue _fun00007 }
 28:
            zuuluu = _closure1_slot9;
            entity = zuuluu.getGuild;
            zuuluu = entity.bind(zuuluu)(report);
            entity = null;
            if(!(entity == zuuluu)) { _fun00008_ip = 83; continue _fun00007 }
 48:
            tangon = _closure1_slot8;
            zuuluu = tangon.getChannel;
            zuuluu = zuuluu.bind(tangon)(report);
            zuuluu = entity != zuuluu;
            entity = null;
            if(!zuuluu) { _fun00008_ip = 81; continue _fun00007 }
 71:
            zuuluu = _closure1_slot11;
            entity = zuuluu.CHANNEL;
 81:
            _fun00008_ip = 93; continue _fun00007;
 83:
            zuuluu = _closure1_slot11;
            entity = zuuluu.GUILD;
 93:
            _fun00008_ip = 105; continue _fun00007;
 95:
            zuuluu = _closure1_slot11;
            entity = zuuluu.FAVORITES;
 105:
            _fun00008_ip = 117; continue _fun00007;
 107:
            michal = _closure1_slot11;
            entity = michal.DMS;
 117:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: withSearchState
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = arguments[2];
            report = undefined;
            if(!(entity === report)) { _fun00010_ip = 14; continue _fun00009 }
 12:
            entity = null;
 14:
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00010_ip = 48; continue _fun00009 }
 20:
            michal = _closure1_slot12;
            tangon = michal[tangon];
            michal = entity;
            if(!(zuuluu != tangon)) { _fun00010_ip = 46; continue _fun00009 }
 38:
            zuuluu = argBar;
            michal = zuuluu.bind(report)(tangon);
 46:
            return michal;
 48:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    verify = function(argFoo) { // Original name: addQueryToHistory
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            tangon = entity.searchId;
            michal = entity.query;
            zuuluu = 'string';
            entity = typeof michal;
            if(!(zuuluu === entity)) { _fun00012_ip = 265; continue _fun00011 }
 28:
            entity = michal.trim;
            michal = entity.bind(michal)();
            golfie = '';
            if(!(golfie !== michal)) { _fun00012_ip = 265; continue _fun00011 }
 49:
            entity = _closure1_slot15;
            zuuluu = entity[tangon];
            option = null;
            if(!(option == zuuluu)) { _fun00012_ip = 70; continue _fun00011 }
 66:
            zuuluu = new Array(0);
 70:
            entity[tangon] = zuuluu;
            entity = zuuluu.indexOf;
            oscard = entity.bind(zuuluu)(michal);
            entity = -1;
            tangon = zuuluu;
            if(!(entity === oscard)) { _fun00012_ip = 156; continue _fun00011 }
 97:
            entity = 0;
            zuuluu = tangon[entity];
            if(!(option != zuuluu)) { _fun00012_ip = 133; continue _fun00011 }
 107:
            zuuluu = tangon[entity];
            if(!(golfie !== zuuluu)) { _fun00012_ip = 133; continue _fun00011 }
 115:
            golfie = michal.startsWith;
            zuuluu = tangon[entity];
            zuuluu = golfie.bind(michal)(zuuluu);
            if(zuuluu) { _fun00012_ip = 150; continue _fun00011 }
 133:
            if(!(oscard < entity)) { _fun00012_ip = 182; continue _fun00011 }
 137:
            zuuluu = tangon.unshift;
            zuuluu = zuuluu.bind(tangon)(michal);
            _fun00012_ip = 182; continue _fun00011;
 150:
            tangon[entity] = michal;
            _fun00012_ip = 182; continue _fun00011;
 156:
            zuuluu = tangon.splice;
            entity = 1;
            entity = zuuluu.bind(tangon)(oscard, entity);
            entity = tangon.unshift;
            entity = entity.bind(tangon)(michal);
 182:
            entity = tangon.length;
            zuuluu = 5;
            if(!(entity > zuuluu)) { _fun00012_ip = 211; continue _fun00011 }
 194:
            michal = tangon.splice;
            entity = tangon.length;
            entity = michal.bind(tangon)(zuuluu, entity);
 211:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            tangon = entity.Storage;
            zuuluu = tangon.set;
            michal = _closure1_slot13;
            entity = {};
            report = _closure1_slot15;
            entity['history'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
 265:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot22 = verify;
    offset = function(argFoo) { // Original name: clearSearchState
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            michal = entity.searchId;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu[michal];
            report = null;
            if(!(report != zuuluu)) { _fun00014_ip = 64; continue _fun00013 }
 26:
            tangon = zuuluu.searchFetcher;
            if(!(report != tangon)) { _fun00014_ip = 52; continue _fun00013 }
 36:
            tangon = zuuluu.searchFetcher;
            zuuluu = tangon.cancel;
            zuuluu = zuuluu.bind(tangon)();
 52:
            entity = _closure1_slot12;
            entity = delete entity[michal];
            entity = undefined;
            return entity;
 64:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot23 = offset;
    entity = function(argFoo) { // Original name: setCurrentSearchId
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot16;
            if(!(michal !== zuuluu)) { _fun00016_ip = 57; continue _fun00015 }
 14:
            report = null;
            zuuluu = report != michal;
            if(!zuuluu) { _fun00016_ip = 35; continue _fun00015 }
 23:
            tangon = _closure1_slot12;
            tangon = tangon[michal];
            zuuluu = report == tangon;
 35:
            if(!zuuluu) { _fun00016_ip = 49; continue _fun00015 }
 38:
            tangon = _closure1_slot19;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)(michal);
 49:
            _closure1_slot16 = michal;
            entity = undefined;
            return entity;
 57:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.FAVORITES;
    var _closure1_slot10 = option;
    michal = michal.SearchTypes;
    var _closure1_slot11 = michal;
    michal = {};
    var _closure1_slot12 = michal;
    michal = 'SearchStore';
    var _closure1_slot13 = michal;
    option = false;
    var _closure1_slot14 = option;
    option = {};
    var _closure1_slot15 = option;
    option = null;
    var _closure1_slot16 = option;
    option = 13;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    yankee = option.Store;
    option = function(argFoo) {
        tangon = function() { // Original name: SearchStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot17;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = this;
                tangon = report.waitFor;
                michal = _closure1_slot9;
                entity = _closure1_slot8;
                entity = tangon.bind(report)(michal, entity);
                tangon = _closure1_slot0;
                entity = _closure1_slot2;
                report = 12;
                michal = entity[report];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                oscard = michal.Storage;
                tangon = oscard.get;
                michal = _closure1_slot13;
                michal = tangon.bind(oscard)(michal);
                oscard = null;
                golfie = oscard == michal;
                tangon = undefined;
                if(golfie) { _fun00018_ip = 85; continue _fun00017 }
 79:
                tangon = michal.history;
 85:
                if(!(oscard != tangon)) { _fun00018_ip = 111; continue _fun00017 }
 89:
                michal = michal.history;
                tangon = function(argFoo) { // Original name: cleanHistory
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    zuuluu = global;
                    tangon = zuuluu.Object;
                    zuuluu = tangon.keys;
                    tangon = zuuluu.bind(tangon)(entity);
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            michal = argFoo;
                            zuuluu = global;
                            oscard = zuuluu.Array;
                            report = oscard.isArray;
                            tangon = _closure4_slot0;
                            tangon = tangon[michal];
                            tangon = report.bind(oscard)(tangon);
                            if(!tangon) { _fun00020_ip = 64; continue _fun00019 }
 35:
                            report = _closure4_slot0;
                            golfie = report[michal];
                            oscard = golfie.filter;
                            tangon = function(argFoo) {
                                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                    zuuluu = argFoo;
                                    michal = 'string';
                                    entity = typeof zuuluu;
                                    entity = michal === entity;
                                    if(!entity) { _fun00022_ip = 27; continue _fun00021 }
 17:
                                    michal = zuuluu.trim;
                                    entity = michal.bind(zuuluu)();
 27:
                                    return entity;
                                }
                            };
                            tangon = oscard.bind(golfie)(tangon);
                            report[michal] = tangon;
 64:
                            report = zuuluu.Array;
                            tangon = report.isArray;
                            zuuluu = _closure4_slot0;
                            zuuluu = zuuluu[michal];
                            zuuluu = tangon.bind(report)(zuuluu);
                            if(!zuuluu) { _fun00020_ip = 110; continue _fun00019 }
 91:
                            tangon = _closure4_slot0;
                            tangon = tangon[michal];
                            report = tangon.length;
                            tangon = 0;
                            zuuluu = tangon !== report;
 110:
                            if(zuuluu) { _fun00020_ip = 121; continue _fun00019 }
 113:
                            entity = _closure4_slot0;
                            entity = delete entity[michal];
 121:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                tangon = tangon.bind(entity)(michal);
                _closure1_slot15 = michal;
 111:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[report];
                michal = tangon.bind(entity)(michal);
                report = michal.Storage;
                tangon = report.get;
                michal = 'tokenized';
                michal = tangon.bind(report)(michal);
                tangon = !michal;
                michal = !tangon;
                if(!tangon) { _fun00018_ip = 161; continue _fun00017 }
 159:
                michal = false;
 161:
                _closure1_slot14 = michal;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(23);
        entity[0] = report;
        report = {};
        golfie = 'getCurrentSearchId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'isActive';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                report = arguments[0];
                tangon = this;
                entity = undefined;
                if(!(report === entity)) { _fun00024_ip = 19; continue _fun00023 }
 12:
                report = _closure1_slot16;
 19:
                entity = null;
                entity = entity != report;
                if(!entity) { _fun00024_ip = 72; continue _fun00023 }
 28:
                michal = tangon.isIndexing;
                michal = michal.bind(tangon)(report);
                if(michal) { _fun00024_ip = 53; continue _fun00023 }
 42:
                zuuluu = tangon.isSearching;
                michal = zuuluu.bind(tangon)(report);
 53:
                if(michal) { _fun00024_ip = 69; continue _fun00023 }
 56:
                zuuluu = tangon.hasResults;
                michal = zuuluu.bind(tangon)(report);
 69:
                entity = michal;
 72:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isTokenized';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getSearchType';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tangon = argFoo;
                zuuluu = _closure1_slot21;
                michal = null;
                if(!(michal == tangon)) { _fun00026_ip = 20; continue _fun00025 }
 16:
                tangon = _closure1_slot16;
 20:
                michal = undefined;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.searchType;
                    return entity;
                };
                entity = zuuluu.bind(michal)(tangon, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getRawResults';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot21;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.rawResults;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'hasResults';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot21;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.rawResults;
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal, entity);
            entity = null;
            entity = entity != michal;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'isIndexing';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tangon = _closure1_slot21;
                zuuluu = undefined;
                michal = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isIndexing;
                    return entity;
                };
                entity = tangon.bind(zuuluu)(michal, entity);
                if(entity) { _fun00028_ip = 30; continue _fun00027 }
 28:
                entity = false;
 30:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'isHistoricalIndexing';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tangon = _closure1_slot21;
                zuuluu = undefined;
                michal = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isHistoricalIndexing;
                    return entity;
                };
                entity = tangon.bind(zuuluu)(michal, entity);
                if(entity) { _fun00030_ip = 30; continue _fun00029 }
 28:
                entity = false;
 30:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'isSearching';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                tangon = _closure1_slot21;
                zuuluu = undefined;
                michal = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isSearching;
                    return entity;
                };
                entity = tangon.bind(zuuluu)(michal, entity);
                if(entity) { _fun00032_ip = 30; continue _fun00031 }
 28:
                entity = false;
 30:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getAnalyticsId';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot21;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.analyticsId;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getResultsBlocked';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot21;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.resultsBlocked;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getDocumentsIndexedCount';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot21;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.documentsIndexed;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'getSearchFetcher';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot21;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.searchFetcher;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'getTotalResults';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                tangon = _closure1_slot21;
                zuuluu = undefined;
                michal = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.totalResults;
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal, entity);
                entity = null;
                zuuluu = entity != michal;
                entity = 0;
                if(!zuuluu) { _fun00034_ip = 39; continue _fun00033 }
 36:
                entity = michal;
 39:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'getEditorState';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot21;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.editorState;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[15] = report;
        report = {};
        golfie = 'getHistory';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot15;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[16] = report;
        report = {};
        golfie = 'getOffset';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                tangon = _closure1_slot21;
                zuuluu = undefined;
                michal = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.offset;
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal, entity);
                entity = null;
                zuuluu = entity != michal;
                entity = 0;
                if(!zuuluu) { _fun00036_ip = 39; continue _fun00035 }
 36:
                entity = michal;
 39:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[17] = report;
        report = {};
        golfie = 'getQuery';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot21;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.query;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[18] = report;
        report = {};
        golfie = 'hasError';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                tangon = _closure1_slot21;
                zuuluu = undefined;
                michal = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.hasError;
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal, entity);
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00038_ip = 37; continue _fun00037 }
 34:
                entity = michal;
 37:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[19] = report;
        report = {};
        golfie = 'shouldShowBlockedResults';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                report = _closure1_slot21;
                tangon = undefined;
                zuuluu = argFoo;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = entity.showBlockedResults;
                    return entity;
                };
                entity = false;
                michal = report.bind(tangon)(zuuluu, michal, entity);
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00040_ip = 40; continue _fun00039 }
 37:
                entity = michal;
 40:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[20] = report;
        report = {};
        golfie = 'shouldShowNoResultsAlt';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                report = _closure1_slot21;
                tangon = undefined;
                zuuluu = argFoo;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = entity.showNoResultsAlt;
                    return entity;
                };
                entity = false;
                michal = report.bind(tangon)(zuuluu, michal, entity);
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00042_ip = 40; continue _fun00041 }
 37:
                entity = michal;
 40:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[21] = report;
        report = {};
        golfie = 'getResultsState';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            tangon = argFoo;
            zuuluu = this;
            entity = {};
            michal = zuuluu.isSearching;
            michal = michal.bind(zuuluu)(tangon);
            entity['isSearching'] = michal;
            michal = zuuluu.isIndexing;
            michal = michal.bind(zuuluu)(tangon);
            entity['isIndexing'] = michal;
            michal = zuuluu.isHistoricalIndexing;
            michal = michal.bind(zuuluu)(tangon);
            entity['isHistoricalIndexing'] = michal;
            michal = zuuluu.getDocumentsIndexedCount;
            michal = michal.bind(zuuluu)(tangon);
            entity['documentsIndexed'] = michal;
            michal = zuuluu.getOffset;
            michal = michal.bind(zuuluu)(tangon);
            entity['offset'] = michal;
            michal = zuuluu.getTotalResults;
            michal = michal.bind(zuuluu)(tangon);
            entity['totalResults'] = michal;
            michal = zuuluu.hasError;
            michal = michal.bind(zuuluu)(tangon);
            entity['hasError'] = michal;
            michal = zuuluu.shouldShowBlockedResults;
            michal = michal.bind(zuuluu)(tangon);
            entity['showBlockedResults'] = michal;
            michal = zuuluu.shouldShowNoResultsAlt;
            michal = michal.bind(zuuluu)(tangon);
            entity['showNoResultsAlt'] = michal;
            return entity;
        };
        report['value'] = oscard;
        entity[22] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = option.bind(entity)(yankee);
    option['displayName'] = michal;
    michal = 10;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    yankee = function(argFoo) { // Original name: startSearching
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            offset = entity.queryString;
            option = entity.searchId;
            var _closure2_slot0 = option;
            zuuluu = entity.query;
            tangon = _closure1_slot19;
            entity = undefined;
            golfie = tangon.bind(entity)(option);
            oscard = golfie.searchFetcher;
            tangon = null;
            if(!(tangon != oscard)) { _fun00044_ip = 74; continue _fun00043 }
 52:
            verify = golfie.searchFetcher;
            oscard = verify.cancel;
            oscard = oscard.bind(verify)();
            golfie['searchFetcher'] = tangon;
 74:
            verify = golfie.searchType;
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            oscard = 8;
            oscard = foxtra[oscard];
            oscard = romeon.bind(entity)(oscard);
            yankee = oscard.prototype;
            yankee = Object.create(yankee, {constructor: {value: oscard}});
            output = yankee;
            sizing = option;
            kiloes = verify;
            backup = zuuluu;
            oscard = new output[oscard](sizing, kiloes, backup, foxtra);
            oscard = oscard instanceof Object ? oscard : yankee;
            golfie['searchFetcher'] = oscard;
            yankee = true;
            golfie['isSearching'] = yankee;
            golfie['rawResults'] = tangon;
            golfie['analyticsId'] = tangon;
            yankee = 9;
            yankee = foxtra[yankee];
            foxtra = romeon.bind(entity)(yankee);
            romeon = foxtra.omit;
            yankee = 'type';
            yankee = romeon.bind(foxtra)(zuuluu, yankee);
            golfie['query'] = yankee;
            yankee = zuuluu.offset;
            romeon = tangon != yankee;
            zuuluu = 0;
            if(!romeon) { _fun00044_ip = 207; continue _fun00043 }
 204:
            zuuluu = yankee;
 207:
            golfie['offset'] = zuuluu;
            zuuluu = false;
            golfie['showBlockedResults'] = zuuluu;
            golfie = _closure1_slot22;
            zuuluu = {};
            yankee = 'SEARCH_ADD_HISTORY';
            zuuluu['type'] = yankee;
            zuuluu['searchId'] = option;
            zuuluu['query'] = offset;
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = _closure1_slot10;
            if(!(option !== zuuluu)) { _fun00044_ip = 280; continue _fun00043 }
 259:
            zuuluu = _closure1_slot11;
            golfie = zuuluu.GUILD;
            zuuluu = null;
            if(!(verify === golfie)) { _fun00044_ip = 278; continue _fun00043 }
 275:
            zuuluu = option;
 278:
            _fun00044_ip = 311; continue _fun00043;
 280:
            golfie = _closure1_slot8;
            report = golfie.getChannel;
            report = report.bind(golfie)(option);
            golfie = tangon == report;
            tangon = undefined;
            if(golfie) { _fun00044_ip = 308; continue _fun00043 }
 303:
            tangon = report.guild_id;
 308:
            zuuluu = tangon;
 311:
            var _closure2_slot1 = zuuluu;
            report = oscard.fetch;
            tangon = function(argFoo) {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    oscard = 'SEARCH_FINISH';
                    michal['type'] = oscard;
                    golfie = _closure2_slot0;
                    michal['searchId'] = golfie;
                    oscard = _closure2_slot1;
                    michal['guildId'] = oscard;
                    oscard = report.body;
                    oscard = oscard.analytics_id;
                    michal['analyticsId'] = oscard;
                    oscard = report.body;
                    oscard = oscard.total_results;
                    michal['totalResults'] = oscard;
                    oscard = report.body;
                    oscard = oscard.messages;
                    michal['messages'] = oscard;
                    oscard = report.body;
                    golfie = oscard.threads;
                    oscard = null;
                    if(!(oscard == golfie)) { _fun00046_ip = 132; continue _fun00045 }
 128:
                    golfie = new Array(0);
 132:
                    michal['threads'] = golfie;
                    golfie = report.body;
                    option = golfie.members;
                    if(!(oscard == option)) { _fun00046_ip = 156; continue _fun00045 }
 152:
                    option = new Array(0);
 156:
                    golfie = option.map;
                    oscard = function(argFoo) {
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 11;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        michal = michal.bind(zuuluu)(entity);
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    oscard = golfie.bind(option)(oscard);
                    michal['members'] = oscard;
                    oscard = false;
                    michal['hasError'] = oscard;
                    oscard = report.body;
                    oscard = oscard.doing_deep_historical_index;
                    michal['doingHistoricalIndex'] = oscard;
                    report = report.body;
                    report = report.documents_indexed;
                    michal['documentsIndexed'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'SEARCH_INDEXING';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['searchId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'SEARCH_FINISH';
                michal['type'] = report;
                oscard = _closure2_slot0;
                michal['searchId'] = oscard;
                report = _closure2_slot1;
                michal['guildId'] = report;
                report = new Array(0);
                michal['messages'] = report;
                report = new Array(0);
                michal['threads'] = report;
                report = new Array(0);
                michal['members'] = report;
                report = 0;
                michal['totalResults'] = report;
                oscard = null;
                michal['analyticsId'] = oscard;
                oscard = true;
                michal['hasError'] = oscard;
                oscard = false;
                michal['doingHistoricalIndex'] = oscard;
                michal['documentsIndexed'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return entity;
        }
    };
    michal['SEARCH_START'] = yankee;
    yankee = function(argFoo) { // Original name: guildIsIndexing
        entity = argFoo;
        zuuluu = entity.searchId;
        michal = _closure1_slot19;
        entity = undefined;
        zuuluu = michal.bind(entity)(zuuluu);
        michal = true;
        zuuluu['isIndexing'] = michal;
        zuuluu['isHistoricalIndexing'] = michal;
        michal = false;
        zuuluu['isSearching'] = michal;
        return entity;
    };
    michal['SEARCH_INDEXING'] = yankee;
    yankee = function(argFoo) { // Original name: finishedSearch
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot19;
            zuuluu = michal.searchId;
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            report = false;
            zuuluu['isSearching'] = report;
            zuuluu['isIndexing'] = report;
            tangon = michal.doingHistoricalIndex;
            if(tangon) { _fun00048_ip = 48; continue _fun00047 }
 46:
            tangon = false;
 48:
            zuuluu['isHistoricalIndexing'] = tangon;
            tangon = null;
            zuuluu['searchFetcher'] = tangon;
            report = michal.totalResults;
            zuuluu['totalResults'] = report;
            report = michal.hasError;
            zuuluu['hasError'] = report;
            report = michal.analyticsId;
            zuuluu['analyticsId'] = report;
            report = michal.documentsIndexed;
            oscard = tangon != report;
            report = 0;
            if(!oscard) { _fun00048_ip = 119; continue _fun00047 }
 113:
            report = michal.documentsIndexed;
 119:
            zuuluu['documentsIndexed'] = report;
            report = global;
            oscard = report.Math;
            report = oscard.random;
            oscard = report.bind(oscard)();
            report = 0.05;
            report = oscard < report;
            zuuluu['showNoResultsAlt'] = report;
            michal = michal.messages;
            zuuluu['rawResults'] = michal;
            michal = zuuluu.query;
            if(!(tangon == michal)) { _fun00048_ip = 192; continue _fun00047 }
 184:
            michal = true;
            zuuluu['hasError'] = michal;
 192:
            return entity;
        }
    };
    michal['SEARCH_FINISH'] = yankee;
    michal['SEARCH_EDITOR_STATE_CLEAR'] = offset;
    offset = function(argFoo) { // Original name: ensureEditorState
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.searchId;
            entity = null;
            if(!(entity != zuuluu)) { _fun00050_ip = 29; continue _fun00049 }
 15:
            michal = _closure1_slot19;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
 29:
            entity = undefined;
            return entity;
        }
    };
    michal['SEARCH_ENSURE_SEARCH_STATE'] = offset;
    offset = function(argFoo) { // Original name: setSearchState
        entity = argFoo;
        tangon = entity.searchId;
        zuuluu = entity.editorState;
        michal = _closure1_slot19;
        entity = undefined;
        michal = michal.bind(entity)(tangon);
        michal['editorState'] = zuuluu;
        return entity;
    };
    michal['SEARCH_EDITOR_STATE_CHANGE'] = offset;
    offset = function(argFoo) { // Original name: setShowBlockedResults
        entity = argFoo;
        tangon = entity.searchId;
        zuuluu = entity.showBlocked;
        michal = _closure1_slot19;
        entity = undefined;
        michal = michal.bind(entity)(tangon);
        michal['showBlockedResults'] = zuuluu;
        return entity;
    };
    michal['SEARCH_SET_SHOW_BLOCKED_RESULTS'] = offset;
    offset = function(argFoo) { // Original name: handleSearchScreenOpen
        entity = argFoo;
        zuuluu = entity.searchId;
        michal = _closure1_slot24;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['SEARCH_SCREEN_OPEN'] = offset;
    offset = function(argFoo) { // Original name: handleChannelSelect
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            michal = argFoo;
            entity = michal.guildId;
            zuuluu = michal.channelId;
            michal = _closure1_slot24;
            tangon = null;
            if(!(tangon != entity)) { _fun00052_ip = 29; continue _fun00051 }
 26:
            zuuluu = entity;
 29:
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        }
    };
    michal['CHANNEL_SELECT'] = offset;
    offset = function() { // Original name: handleChannelToggleMembersSection
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            zuuluu = _closure1_slot16;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00054_ip = 38; continue _fun00053 }
 16:
            tangon = _closure1_slot23;
            zuuluu = {};
            michal = _closure1_slot16;
            zuuluu['searchId'] = michal;
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 38:
            return entity;
        }
    };
    michal['CHANNEL_TOGGLE_MEMBERS_SECTION'] = offset;
    offset = function(argFoo) { // Original name: clearSearchHistory
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            michal = entity.searchId;
            entity = null;
            if(!(entity != michal)) { _fun00056_ip = 82; continue _fun00055 }
 15:
            entity = _closure1_slot15;
            entity = delete entity[michal];
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            tangon = entity.Storage;
            zuuluu = tangon.set;
            michal = _closure1_slot13;
            entity = {};
            report = _closure1_slot15;
            entity['history'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            _fun00056_ip = 134; continue _fun00055;
 82:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            tangon = entity.Storage;
            zuuluu = tangon.remove;
            entity = _closure1_slot13;
            entity = zuuluu.bind(tangon)(entity);
            entity = {};
            _closure1_slot15 = entity;
 134:
            entity = undefined;
            return entity;
        }
    };
    michal['SEARCH_CLEAR_HISTORY'] = offset;
    offset = function(argFoo) { // Original name: removeQueryFromHistory
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.searchId;
            michal = michal.query;
            var _closure2_slot0 = michal;
            michal = _closure1_slot15;
            tangon = michal[zuuluu];
            michal = null;
            if(!(michal != tangon)) { _fun00058_ip = 118; continue _fun00057 }
 37:
            michal = _closure1_slot15;
            oscard = michal[zuuluu];
            tangon = oscard.filter;
            entity = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            entity = tangon.bind(oscard)(entity);
            michal[zuuluu] = entity;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            tangon = entity.Storage;
            zuuluu = tangon.set;
            michal = _closure1_slot13;
            entity = {};
            report = _closure1_slot15;
            entity['history'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
 118:
            entity = undefined;
            return entity;
        }
    };
    michal['SEARCH_REMOVE_HISTORY'] = offset;
    michal['SEARCH_ADD_HISTORY'] = verify;
    verify = function() { // Original name: handleLogOut
        tangon = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 12;
        michal = michal[entity];
        entity = undefined;
        michal = tangon.bind(entity)(michal);
        report = michal.Storage;
        tangon = report.remove;
        michal = _closure1_slot13;
        michal = tangon.bind(report)(michal);
        michal = {};
        _closure1_slot15 = michal;
        return entity;
    };
    michal['LOGOUT'] = verify;
    tangon = function() { // Original name: handleConnectionOpen
        entity = global;
        zuuluu = entity.Object;
        michal = zuuluu.keys;
        entity = _closure1_slot12;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                tangon = argFoo;
                michal = _closure1_slot12;
                zuuluu = michal[tangon];
                michal = null;
                if(!(michal != zuuluu)) { _fun00060_ip = 45; continue _fun00059 }
 20:
                michal = _closure1_slot12;
                michal = michal[tangon];
                zuuluu = _closure1_slot20;
                entity = undefined;
                entity = zuuluu.bind(entity)(tangon);
                michal['searchType'] = entity;
 45:
                entity = undefined;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/SearchStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();