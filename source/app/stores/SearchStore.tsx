// app/stores/SearchStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
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
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot12;
            tangon = zuuluu[michal];
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00004_ip = 65; continue _fun00003 }
 20:
            tangon = _closure1_slot12;
            zuuluu = {'searchId': null, 'searchType': null, 'isIndexing': false, 'isHistoricalIndexing': false, 'isSearching': false, 'analyticsId': null, 'editorState': null, 'offset': 0, 'query': null, 'hasError': false, 'searchFetcher': null, 'rawResults': null, 'totalResults': 0, 'documentsIndexed': 0, 'resultsBlocked': 0, 'showBlockedResults': false, 'showNoResultsAlt': false, 'searchResultsQueryString': null, 'searchResultsQuery': null};
            zuuluu['searchId'] = michal;
            oscard = _closure1_slot19;
            report = undefined;
            report = oscard.bind(report)(michal);
            zuuluu['searchType'] = report;
            tangon[michal] = zuuluu;
 65:
            entity = _closure1_slot12;
            entity = entity[michal];
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    michal = function(argFoo) { // Original name: getSearchType
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot11;
            entity = entity.DMS;
            if(!(report !== entity)) { _fun00006_ip = 107; continue _fun00005 }
 20:
            entity = _closure1_slot10;
            if(!(report !== entity)) { _fun00006_ip = 95; continue _fun00005 }
 28:
            zuuluu = _closure1_slot9;
            entity = zuuluu.getGuild;
            zuuluu = entity.bind(zuuluu)(report);
            entity = null;
            if(!(entity == zuuluu)) { _fun00006_ip = 83; continue _fun00005 }
 48:
            tangon = _closure1_slot8;
            zuuluu = tangon.getChannel;
            zuuluu = zuuluu.bind(tangon)(report);
            zuuluu = entity != zuuluu;
            entity = null;
            if(!zuuluu) { _fun00006_ip = 81; continue _fun00005 }
 71:
            zuuluu = _closure1_slot11;
            entity = zuuluu.CHANNEL;
 81:
            _fun00006_ip = 93; continue _fun00005;
 83:
            zuuluu = _closure1_slot11;
            entity = zuuluu.GUILD;
 93:
            _fun00006_ip = 105; continue _fun00005;
 95:
            zuuluu = _closure1_slot11;
            entity = zuuluu.FAVORITES;
 105:
            _fun00006_ip = 117; continue _fun00005;
 107:
            michal = _closure1_slot11;
            entity = michal.DMS;
 117:
            return entity;
        }
    };
    var _closure1_slot19 = michal;
    entity = function(argFoo, argBar) { // Original name: withSearchState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = arguments[2];
            report = undefined;
            if(!(entity === report)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            entity = null;
 14:
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00008_ip = 48; continue _fun00007 }
 20:
            michal = _closure1_slot12;
            tangon = michal[tangon];
            michal = entity;
            if(!(zuuluu != tangon)) { _fun00008_ip = 46; continue _fun00007 }
 38:
            zuuluu = argBar;
            michal = zuuluu.bind(report)(tangon);
 46:
            return michal;
 48:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    offset = function(argFoo) { // Original name: addQueryToHistory
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            tangon = entity.searchId;
            michal = entity.query;
            zuuluu = 'string';
            entity = typeof michal;
            if(!(zuuluu === entity)) { _fun00010_ip = 265; continue _fun00009 }
 28:
            entity = michal.trim;
            michal = entity.bind(michal)();
            golfie = '';
            if(!(golfie !== michal)) { _fun00010_ip = 265; continue _fun00009 }
 49:
            entity = _closure1_slot15;
            zuuluu = entity[tangon];
            option = null;
            if(!(option == zuuluu)) { _fun00010_ip = 70; continue _fun00009 }
 66:
            zuuluu = new Array(0);
 70:
            entity[tangon] = zuuluu;
            entity = zuuluu.indexOf;
            oscard = entity.bind(zuuluu)(michal);
            entity = -1;
            tangon = zuuluu;
            if(!(entity === oscard)) { _fun00010_ip = 156; continue _fun00009 }
 97:
            entity = 0;
            zuuluu = tangon[entity];
            if(!(option != zuuluu)) { _fun00010_ip = 133; continue _fun00009 }
 107:
            zuuluu = tangon[entity];
            if(!(golfie !== zuuluu)) { _fun00010_ip = 133; continue _fun00009 }
 115:
            golfie = michal.startsWith;
            zuuluu = tangon[entity];
            zuuluu = golfie.bind(michal)(zuuluu);
            if(zuuluu) { _fun00010_ip = 150; continue _fun00009 }
 133:
            if(!(oscard < entity)) { _fun00010_ip = 182; continue _fun00009 }
 137:
            zuuluu = tangon.unshift;
            zuuluu = zuuluu.bind(tangon)(michal);
            _fun00010_ip = 182; continue _fun00009;
 150:
            tangon[entity] = michal;
            _fun00010_ip = 182; continue _fun00009;
 156:
            zuuluu = tangon.splice;
            entity = 1;
            entity = zuuluu.bind(tangon)(oscard, entity);
            entity = tangon.unshift;
            entity = entity.bind(tangon)(michal);
 182:
            entity = tangon.length;
            zuuluu = 5;
            if(!(entity > zuuluu)) { _fun00010_ip = 211; continue _fun00009 }
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
    var _closure1_slot21 = offset;
    yankee = function(argFoo) { // Original name: clearSearchState
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            michal = entity.searchId;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu[michal];
            report = null;
            if(!(report != zuuluu)) { _fun00012_ip = 64; continue _fun00011 }
 26:
            tangon = zuuluu.searchFetcher;
            if(!(report != tangon)) { _fun00012_ip = 52; continue _fun00011 }
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
    var _closure1_slot22 = yankee;
    entity = function(argFoo) { // Original name: setCurrentSearchId
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot16;
            if(!(michal !== zuuluu)) { _fun00014_ip = 57; continue _fun00013 }
 14:
            report = null;
            zuuluu = report != michal;
            if(!zuuluu) { _fun00014_ip = 35; continue _fun00013 }
 23:
            tangon = _closure1_slot12;
            tangon = tangon[michal];
            zuuluu = report == tangon;
 35:
            if(!zuuluu) { _fun00014_ip = 49; continue _fun00013 }
 38:
            tangon = _closure1_slot18;
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
    var _closure1_slot23 = entity;
    entity = global;
    romeon = entity.Object;
    verify = romeon.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(romeon)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.FAVORITES;
    var _closure1_slot10 = verify;
    tangon = tangon.SearchTypes;
    var _closure1_slot11 = tangon;
    tangon = {};
    var _closure1_slot12 = tangon;
    tangon = 'SearchStore';
    var _closure1_slot13 = tangon;
    verify = false;
    var _closure1_slot14 = verify;
    verify = {};
    var _closure1_slot15 = verify;
    verify = null;
    var _closure1_slot16 = verify;
    verify = 14;
    verify = golfie[verify];
    verify = option.bind(entity)(verify);
    romeon = verify.Store;
    verify = function(argFoo) {
        tangon = function() { // Original name: SearchStore
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot17;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00016_ip = 69; continue _fun00015 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00016_ip = 105; continue _fun00015;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
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
        entity = new Array(25);
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
                zuuluu = _closure1_slot20;
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
            tangon = _closure1_slot20;
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
            tangon = _closure1_slot20;
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
                tangon = _closure1_slot20;
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
                tangon = _closure1_slot20;
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
                tangon = _closure1_slot20;
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
            tangon = _closure1_slot20;
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
            tangon = _closure1_slot20;
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
            tangon = _closure1_slot20;
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
            tangon = _closure1_slot20;
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
                tangon = _closure1_slot20;
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
            tangon = _closure1_slot20;
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
                tangon = _closure1_slot20;
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
            tangon = _closure1_slot20;
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
                tangon = _closure1_slot20;
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
                report = _closure1_slot20;
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
                report = _closure1_slot20;
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
        golfie = 'getSearchResultsQueryString';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot20;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.searchResultsQueryString;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[22] = report;
        report = {};
        golfie = 'getSearchResultsQuery';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot20;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.searchResultsQuery;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[23] = report;
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
        entity[24] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = verify.bind(entity)(romeon);
    verify['displayName'] = tangon;
    tangon = 10;
    tangon = golfie[tangon];
    kiloes = option.bind(entity)(tangon);
    tangon = {};
    romeon = function(argFoo) { // Original name: startSearching
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            offset = entity.queryString;
            option = entity.searchId;
            var _closure2_slot0 = option;
            golfie = entity.query;
            zuuluu = _closure1_slot18;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(option);
            oscard = zuuluu.searchFetcher;
            tangon = null;
            if(!(tangon != oscard)) { _fun00044_ip = 74; continue _fun00043 }
 52:
            verify = zuuluu.searchFetcher;
            oscard = verify.cancel;
            oscard = oscard.bind(verify)();
            zuuluu['searchFetcher'] = tangon;
 74:
            verify = zuuluu.searchType;
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
            backup = golfie;
            oscard = new output[oscard](sizing, kiloes, backup, foxtra);
            oscard = oscard instanceof Object ? oscard : yankee;
            zuuluu['searchFetcher'] = oscard;
            yankee = true;
            zuuluu['isSearching'] = yankee;
            zuuluu['rawResults'] = tangon;
            zuuluu['analyticsId'] = tangon;
            yankee = 9;
            yankee = foxtra[yankee];
            foxtra = romeon.bind(entity)(yankee);
            romeon = foxtra.omit;
            yankee = 'type';
            yankee = romeon.bind(foxtra)(golfie, yankee);
            zuuluu['query'] = yankee;
            yankee = golfie.offset;
            romeon = tangon != yankee;
            golfie = 0;
            if(!romeon) { _fun00044_ip = 207; continue _fun00043 }
 204:
            golfie = yankee;
 207:
            zuuluu['offset'] = golfie;
            golfie = false;
            zuuluu['showBlockedResults'] = golfie;
            zuuluu['searchResultsQueryString'] = offset;
            golfie = _closure1_slot21;
            zuuluu = {};
            yankee = 'SEARCH_ADD_HISTORY';
            zuuluu['type'] = yankee;
            zuuluu['searchId'] = option;
            zuuluu['query'] = offset;
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = _closure1_slot10;
            if(!(option !== zuuluu)) { _fun00044_ip = 286; continue _fun00043 }
 265:
            zuuluu = _closure1_slot11;
            golfie = zuuluu.GUILD;
            zuuluu = null;
            if(!(verify === golfie)) { _fun00044_ip = 284; continue _fun00043 }
 281:
            zuuluu = option;
 284:
            _fun00044_ip = 317; continue _fun00043;
 286:
            golfie = _closure1_slot8;
            report = golfie.getChannel;
            report = report.bind(golfie)(option);
            golfie = tangon == report;
            tangon = undefined;
            if(golfie) { _fun00044_ip = 314; continue _fun00043 }
 309:
            tangon = report.guild_id;
 314:
            zuuluu = tangon;
 317:
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
    tangon['SEARCH_START'] = romeon;
    romeon = function(argFoo) { // Original name: guildIsIndexing
        entity = argFoo;
        zuuluu = entity.searchId;
        michal = _closure1_slot18;
        entity = undefined;
        zuuluu = michal.bind(entity)(zuuluu);
        michal = true;
        zuuluu['isIndexing'] = michal;
        zuuluu['isHistoricalIndexing'] = michal;
        michal = false;
        zuuluu['isSearching'] = michal;
        return entity;
    };
    tangon['SEARCH_INDEXING'] = romeon;
    romeon = function(argFoo) { // Original name: finishedSearch
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot18;
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
    tangon['SEARCH_FINISH'] = romeon;
    romeon = function(argFoo) { // Original name: handleSearchResultsQueryUpdate
        entity = argFoo;
        report = entity.searchId;
        tangon = entity.queryString;
        zuuluu = entity.query;
        michal = _closure1_slot18;
        entity = undefined;
        michal = michal.bind(entity)(report);
        michal['searchResultsQueryString'] = tangon;
        michal['query'] = zuuluu;
        return entity;
    };
    tangon['SEARCH_RESULTS_QUERY_UPDATE'] = romeon;
    tangon['SEARCH_EDITOR_STATE_CLEAR'] = yankee;
    yankee = function(argFoo) { // Original name: ensureEditorState
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.searchId;
            entity = null;
            if(!(entity != zuuluu)) { _fun00050_ip = 29; continue _fun00049 }
 15:
            michal = _closure1_slot18;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
 29:
            entity = undefined;
            return entity;
        }
    };
    tangon['SEARCH_ENSURE_SEARCH_STATE'] = yankee;
    yankee = function(argFoo) { // Original name: setSearchState
        entity = argFoo;
        tangon = entity.searchId;
        zuuluu = entity.editorState;
        michal = _closure1_slot18;
        entity = undefined;
        michal = michal.bind(entity)(tangon);
        michal['editorState'] = zuuluu;
        return entity;
    };
    tangon['SEARCH_EDITOR_STATE_CHANGE'] = yankee;
    yankee = function(argFoo) { // Original name: setShowBlockedResults
        entity = argFoo;
        tangon = entity.searchId;
        zuuluu = entity.showBlocked;
        michal = _closure1_slot18;
        entity = undefined;
        michal = michal.bind(entity)(tangon);
        michal['showBlockedResults'] = zuuluu;
        return entity;
    };
    tangon['SEARCH_SET_SHOW_BLOCKED_RESULTS'] = yankee;
    yankee = function(argFoo) { // Original name: handleSearchScreenOpen
        entity = argFoo;
        zuuluu = entity.searchId;
        michal = _closure1_slot23;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    tangon['SEARCH_SCREEN_OPEN'] = yankee;
    yankee = function(argFoo) { // Original name: handleChannelSelect
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            entity = argFoo;
            michal = entity.guildId;
            report = entity.channelId;
            oscard = null;
            if(!(oscard == michal)) { _fun00052_ip = 70; continue _fun00051 }
 19:
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 13;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            option = golfie.bind(zuuluu)(tangon);
            golfie = option.getIsSearchDesktopXDMExperimentEnabled;
            tangon = {};
            verify = 'SearchStore';
            tangon['location'] = verify;
            tangon = golfie.bind(option)(tangon);
            if(tangon) { _fun00052_ip = 93; continue _fun00051 }
 70:
            tangon = _closure1_slot23;
            if(!(oscard != michal)) { _fun00052_ip = 84; continue _fun00051 }
 81:
            report = michal;
 84:
            michal = undefined;
            michal = tangon.bind(michal)(report);
            _fun00052_ip = 112; continue _fun00051;
 93:
            michal = _closure1_slot23;
            entity = _closure1_slot11;
            entity = entity.DMS;
            entity = michal.bind(zuuluu)(entity);
 112:
            entity = undefined;
            return entity;
        }
    };
    tangon['CHANNEL_SELECT'] = yankee;
    yankee = function() { // Original name: handleChannelToggleMembersSection
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            zuuluu = _closure1_slot16;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00054_ip = 38; continue _fun00053 }
 16:
            tangon = _closure1_slot22;
            zuuluu = {};
            michal = _closure1_slot16;
            zuuluu['searchId'] = michal;
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 38:
            return entity;
        }
    };
    tangon['CHANNEL_TOGGLE_MEMBERS_SECTION'] = yankee;
    yankee = function(argFoo) { // Original name: clearSearchHistory
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
    tangon['SEARCH_CLEAR_HISTORY'] = yankee;
    yankee = function(argFoo) { // Original name: removeQueryFromHistory
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
    tangon['SEARCH_REMOVE_HISTORY'] = yankee;
    tangon['SEARCH_ADD_HISTORY'] = offset;
    offset = function() { // Original name: handleLogOut
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
    tangon['LOGOUT'] = offset;
    report = function() { // Original name: handleConnectionOpen
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
                zuuluu = _closure1_slot19;
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
    tangon['CONNECTION_OPEN'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    sizing = report;
    backup = tangon;
    tangon = new sizing[verify](kiloes, backup, foxtra);
    tangon = tangon instanceof Object ? tangon : report;
    report = 15;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'stores/SearchStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['getSearchType'] = michal;
    return entity;
})();