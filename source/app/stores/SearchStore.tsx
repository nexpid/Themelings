// app/stores/SearchStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot18;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot12;
            tango = zulu[mike];
            zulu = null;
            if(!(zulu == tango)) { _fun00006_ip = 61; continue _fun00005 }
 20:
            tango = _closure1_slot12;
            zulu = {'searchId': null, 'searchType': null, 'isIndexing': false, 'isHistoricalIndexing': false, 'isSearching': false, 'analyticsId': null, 'editorState': null, 'offset': 0, 'query': null, 'hasError': false, 'searchFetcher': null, 'rawResults': null, 'totalResults': 0, 'documentsIndexed': 0, 'resultsBlocked': 0, 'showBlockedResults': false, 'showNoResultsAlt': false};
            zulu['searchId'] = mike;
            oscar = _closure1_slot20;
            report = undefined;
            report = oscar.bind(report)(mike);
            zulu['searchType'] = report;
            tango[mike] = zulu;
 61:
            entity = _closure1_slot12;
            entity = entity[mike];
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
            zulu = _closure1_slot9;
            entity = zulu.getGuild;
            zulu = entity.bind(zulu)(report);
            entity = null;
            if(!(entity == zulu)) { _fun00008_ip = 83; continue _fun00007 }
 48:
            tango = _closure1_slot8;
            zulu = tango.getChannel;
            zulu = zulu.bind(tango)(report);
            zulu = entity != zulu;
            entity = null;
            if(!zulu) { _fun00008_ip = 81; continue _fun00007 }
 71:
            zulu = _closure1_slot11;
            entity = zulu.CHANNEL;
 81:
            _fun00008_ip = 93; continue _fun00007;
 83:
            zulu = _closure1_slot11;
            entity = zulu.GUILD;
 93:
            _fun00008_ip = 105; continue _fun00007;
 95:
            zulu = _closure1_slot11;
            entity = zulu.FAVORITES;
 105:
            _fun00008_ip = 117; continue _fun00007;
 107:
            mike = _closure1_slot11;
            entity = mike.DMS;
 117:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: withSearchState
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            entity = arguments[2];
            report = undefined;
            if(!(entity === report)) { _fun00010_ip = 14; continue _fun00009 }
 12:
            entity = null;
 14:
            zulu = null;
            if(!(zulu != tango)) { _fun00010_ip = 48; continue _fun00009 }
 20:
            mike = _closure1_slot12;
            tango = mike[tango];
            mike = entity;
            if(!(zulu != tango)) { _fun00010_ip = 46; continue _fun00009 }
 38:
            zulu = argBar;
            mike = zulu.bind(report)(tango);
 46:
            return mike;
 48:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    verify = function(argFoo) { // Original name: addQueryToHistory
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            tango = entity.searchId;
            mike = entity.query;
            zulu = 'string';
            entity = typeof mike;
            if(!(zulu === entity)) { _fun00012_ip = 265; continue _fun00011 }
 28:
            entity = mike.trim;
            mike = entity.bind(mike)();
            golf = '';
            if(!(golf !== mike)) { _fun00012_ip = 265; continue _fun00011 }
 49:
            entity = _closure1_slot15;
            zulu = entity[tango];
            options = null;
            if(!(options == zulu)) { _fun00012_ip = 70; continue _fun00011 }
 66:
            zulu = new Array(0);
 70:
            entity[tango] = zulu;
            entity = zulu.indexOf;
            oscar = entity.bind(zulu)(mike);
            entity = -1;
            tango = zulu;
            if(!(entity === oscar)) { _fun00012_ip = 156; continue _fun00011 }
 97:
            entity = 0;
            zulu = tango[entity];
            if(!(options != zulu)) { _fun00012_ip = 133; continue _fun00011 }
 107:
            zulu = tango[entity];
            if(!(golf !== zulu)) { _fun00012_ip = 133; continue _fun00011 }
 115:
            golf = mike.startsWith;
            zulu = tango[entity];
            zulu = golf.bind(mike)(zulu);
            if(zulu) { _fun00012_ip = 150; continue _fun00011 }
 133:
            if(!(oscar < entity)) { _fun00012_ip = 182; continue _fun00011 }
 137:
            zulu = tango.unshift;
            zulu = zulu.bind(tango)(mike);
            _fun00012_ip = 182; continue _fun00011;
 150:
            tango[entity] = mike;
            _fun00012_ip = 182; continue _fun00011;
 156:
            zulu = tango.splice;
            entity = 1;
            entity = zulu.bind(tango)(oscar, entity);
            entity = tango.unshift;
            entity = entity.bind(tango)(mike);
 182:
            entity = tango.length;
            zulu = 5;
            if(!(entity > zulu)) { _fun00012_ip = 211; continue _fun00011 }
 194:
            mike = tango.splice;
            entity = tango.length;
            entity = mike.bind(tango)(zulu, entity);
 211:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            tango = entity.Storage;
            zulu = tango.set;
            mike = _closure1_slot13;
            entity = {};
            report = _closure1_slot15;
            entity['history'] = report;
            entity = zulu.bind(tango)(mike, entity);
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
            mike = entity.searchId;
            zulu = _closure1_slot12;
            zulu = zulu[mike];
            report = null;
            if(!(report != zulu)) { _fun00014_ip = 64; continue _fun00013 }
 26:
            tango = zulu.searchFetcher;
            if(!(report != tango)) { _fun00014_ip = 52; continue _fun00013 }
 36:
            tango = zulu.searchFetcher;
            zulu = tango.cancel;
            zulu = zulu.bind(tango)();
 52:
            entity = _closure1_slot12;
            entity = delete entity[mike];
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
            mike = argFoo;
            zulu = _closure1_slot16;
            if(!(mike !== zulu)) { _fun00016_ip = 57; continue _fun00015 }
 14:
            report = null;
            zulu = report != mike;
            if(!zulu) { _fun00016_ip = 35; continue _fun00015 }
 23:
            tango = _closure1_slot12;
            tango = tango[mike];
            zulu = report == tango;
 35:
            if(!zulu) { _fun00016_ip = 49; continue _fun00015 }
 38:
            tango = _closure1_slot19;
            zulu = undefined;
            zulu = tango.bind(zulu)(mike);
 49:
            _closure1_slot16 = mike;
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
    options = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.FAVORITES;
    var _closure1_slot10 = options;
    mike = mike.SearchTypes;
    var _closure1_slot11 = mike;
    mike = {};
    var _closure1_slot12 = mike;
    mike = 'SearchStore';
    var _closure1_slot13 = mike;
    options = false;
    var _closure1_slot14 = options;
    options = {};
    var _closure1_slot15 = options;
    options = null;
    var _closure1_slot16 = options;
    options = 13;
    options = oscar[options];
    options = golf.bind(entity)(options);
    yankee = options.Store;
    options = function(argFoo) {
        tango = function() { // Original name: SearchStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot17;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = this;
                tango = report.waitFor;
                mike = _closure1_slot9;
                entity = _closure1_slot8;
                entity = tango.bind(report)(mike, entity);
                tango = _closure1_slot0;
                entity = _closure1_slot2;
                report = 12;
                mike = entity[report];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                oscar = mike.Storage;
                tango = oscar.get;
                mike = _closure1_slot13;
                mike = tango.bind(oscar)(mike);
                oscar = null;
                golf = oscar == mike;
                tango = undefined;
                if(golf) { _fun00018_ip = 85; continue _fun00017 }
 79:
                tango = mike.history;
 85:
                if(!(oscar != tango)) { _fun00018_ip = 111; continue _fun00017 }
 89:
                mike = mike.history;
                tango = function(argFoo) { // Original name: cleanHistory
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    zulu = global;
                    tango = zulu.Object;
                    zulu = tango.keys;
                    tango = zulu.bind(tango)(entity);
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            mike = argFoo;
                            zulu = global;
                            oscar = zulu.Array;
                            report = oscar.isArray;
                            tango = _closure4_slot0;
                            tango = tango[mike];
                            tango = report.bind(oscar)(tango);
                            if(!tango) { _fun00020_ip = 64; continue _fun00019 }
 35:
                            report = _closure4_slot0;
                            golf = report[mike];
                            oscar = golf.filter;
                            tango = function(argFoo) {
                                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                    zulu = argFoo;
                                    mike = 'string';
                                    entity = typeof zulu;
                                    entity = mike === entity;
                                    if(!entity) { _fun00022_ip = 27; continue _fun00021 }
 17:
                                    mike = zulu.trim;
                                    entity = mike.bind(zulu)();
 27:
                                    return entity;
                                }
                            };
                            tango = oscar.bind(golf)(tango);
                            report[mike] = tango;
 64:
                            report = zulu.Array;
                            tango = report.isArray;
                            zulu = _closure4_slot0;
                            zulu = zulu[mike];
                            zulu = tango.bind(report)(zulu);
                            if(!zulu) { _fun00020_ip = 110; continue _fun00019 }
 91:
                            tango = _closure4_slot0;
                            tango = tango[mike];
                            report = tango.length;
                            tango = 0;
                            zulu = tango !== report;
 110:
                            if(zulu) { _fun00020_ip = 121; continue _fun00019 }
 113:
                            entity = _closure4_slot0;
                            entity = delete entity[mike];
 121:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                tango = tango.bind(entity)(mike);
                _closure1_slot15 = mike;
 111:
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[report];
                mike = tango.bind(entity)(mike);
                report = mike.Storage;
                tango = report.get;
                mike = 'tokenized';
                mike = tango.bind(report)(mike);
                tango = !mike;
                mike = !tango;
                if(!tango) { _fun00018_ip = 161; continue _fun00017 }
 159:
                mike = false;
 161:
                _closure1_slot14 = mike;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(23);
        entity[0] = report;
        report = {};
        golf = 'getCurrentSearchId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'isActive';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                report = arguments[0];
                tango = this;
                entity = undefined;
                if(!(report === entity)) { _fun00024_ip = 19; continue _fun00023 }
 12:
                report = _closure1_slot16;
 19:
                entity = null;
                entity = entity != report;
                if(!entity) { _fun00024_ip = 72; continue _fun00023 }
 28:
                mike = tango.isIndexing;
                mike = mike.bind(tango)(report);
                if(mike) { _fun00024_ip = 53; continue _fun00023 }
 42:
                zulu = tango.isSearching;
                mike = zulu.bind(tango)(report);
 53:
                if(mike) { _fun00024_ip = 69; continue _fun00023 }
 56:
                zulu = tango.hasResults;
                mike = zulu.bind(tango)(report);
 69:
                entity = mike;
 72:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'isTokenized';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getSearchType';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tango = argFoo;
                zulu = _closure1_slot21;
                mike = null;
                if(!(mike == tango)) { _fun00026_ip = 20; continue _fun00025 }
 16:
                tango = _closure1_slot16;
 20:
                mike = undefined;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.searchType;
                    return entity;
                };
                entity = zulu.bind(mike)(tango, entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getRawResults';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot21;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.rawResults;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'hasResults';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot21;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.rawResults;
                return entity;
            };
            mike = tango.bind(zulu)(mike, entity);
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'isIndexing';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tango = _closure1_slot21;
                zulu = undefined;
                mike = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isIndexing;
                    return entity;
                };
                entity = tango.bind(zulu)(mike, entity);
                if(entity) { _fun00028_ip = 30; continue _fun00027 }
 28:
                entity = false;
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'isHistoricalIndexing';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tango = _closure1_slot21;
                zulu = undefined;
                mike = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isHistoricalIndexing;
                    return entity;
                };
                entity = tango.bind(zulu)(mike, entity);
                if(entity) { _fun00030_ip = 30; continue _fun00029 }
 28:
                entity = false;
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'isSearching';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                tango = _closure1_slot21;
                zulu = undefined;
                mike = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isSearching;
                    return entity;
                };
                entity = tango.bind(zulu)(mike, entity);
                if(entity) { _fun00032_ip = 30; continue _fun00031 }
 28:
                entity = false;
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getAnalyticsId';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot21;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.analyticsId;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'getResultsBlocked';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot21;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.resultsBlocked;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getDocumentsIndexedCount';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot21;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.documentsIndexed;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'getSearchFetcher';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot21;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.searchFetcher;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'getTotalResults';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                tango = _closure1_slot21;
                zulu = undefined;
                mike = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.totalResults;
                    return entity;
                };
                mike = tango.bind(zulu)(mike, entity);
                entity = null;
                zulu = entity != mike;
                entity = 0;
                if(!zulu) { _fun00034_ip = 39; continue _fun00033 }
 36:
                entity = mike;
 39:
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'getEditorState';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot21;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.editorState;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'getHistory';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot15;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'getOffset';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                tango = _closure1_slot21;
                zulu = undefined;
                mike = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.offset;
                    return entity;
                };
                mike = tango.bind(zulu)(mike, entity);
                entity = null;
                zulu = entity != mike;
                entity = 0;
                if(!zulu) { _fun00036_ip = 39; continue _fun00035 }
 36:
                entity = mike;
 39:
                return entity;
            }
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'getQuery';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot21;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.query;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'hasError';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                tango = _closure1_slot21;
                zulu = undefined;
                mike = argFoo;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.hasError;
                    return entity;
                };
                mike = tango.bind(zulu)(mike, entity);
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00038_ip = 37; continue _fun00037 }
 34:
                entity = mike;
 37:
                return entity;
            }
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'shouldShowBlockedResults';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                report = _closure1_slot21;
                tango = undefined;
                zulu = argFoo;
                mike = function(argFoo) {
                    entity = argFoo;
                    entity = entity.showBlockedResults;
                    return entity;
                };
                entity = false;
                mike = report.bind(tango)(zulu, mike, entity);
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00040_ip = 40; continue _fun00039 }
 37:
                entity = mike;
 40:
                return entity;
            }
        };
        report['value'] = golf;
        entity[20] = report;
        report = {};
        golf = 'shouldShowNoResultsAlt';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                report = _closure1_slot21;
                tango = undefined;
                zulu = argFoo;
                mike = function(argFoo) {
                    entity = argFoo;
                    entity = entity.showNoResultsAlt;
                    return entity;
                };
                entity = false;
                mike = report.bind(tango)(zulu, mike, entity);
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00042_ip = 40; continue _fun00041 }
 37:
                entity = mike;
 40:
                return entity;
            }
        };
        report['value'] = golf;
        entity[21] = report;
        report = {};
        golf = 'getResultsState';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            tango = argFoo;
            zulu = this;
            entity = {};
            mike = zulu.isSearching;
            mike = mike.bind(zulu)(tango);
            entity['isSearching'] = mike;
            mike = zulu.isIndexing;
            mike = mike.bind(zulu)(tango);
            entity['isIndexing'] = mike;
            mike = zulu.isHistoricalIndexing;
            mike = mike.bind(zulu)(tango);
            entity['isHistoricalIndexing'] = mike;
            mike = zulu.getDocumentsIndexedCount;
            mike = mike.bind(zulu)(tango);
            entity['documentsIndexed'] = mike;
            mike = zulu.getOffset;
            mike = mike.bind(zulu)(tango);
            entity['offset'] = mike;
            mike = zulu.getTotalResults;
            mike = mike.bind(zulu)(tango);
            entity['totalResults'] = mike;
            mike = zulu.hasError;
            mike = mike.bind(zulu)(tango);
            entity['hasError'] = mike;
            mike = zulu.shouldShowBlockedResults;
            mike = mike.bind(zulu)(tango);
            entity['showBlockedResults'] = mike;
            mike = zulu.shouldShowNoResultsAlt;
            mike = mike.bind(zulu)(tango);
            entity['showNoResultsAlt'] = mike;
            return entity;
        };
        report['value'] = oscar;
        entity[22] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = options.bind(entity)(yankee);
    options['displayName'] = mike;
    mike = 10;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    yankee = function(argFoo) { // Original name: startSearching
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            offset = entity.queryString;
            options = entity.searchId;
            var _closure2_slot0 = options;
            zulu = entity.query;
            tango = _closure1_slot19;
            entity = undefined;
            golf = tango.bind(entity)(options);
            oscar = golf.searchFetcher;
            tango = null;
            if(!(tango != oscar)) { _fun00044_ip = 74; continue _fun00043 }
 52:
            verify = golf.searchFetcher;
            oscar = verify.cancel;
            oscar = oscar.bind(verify)();
            golf['searchFetcher'] = tango;
 74:
            verify = golf.searchType;
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            oscar = 8;
            oscar = foxtrot[oscar];
            oscar = romeo.bind(entity)(oscar);
            yankee = oscar.prototype;
            yankee = Object.create(yankee, {constructor: {value: oscar}});
            output = yankee;
            sizing = options;
            kilo = verify;
            backup = zulu;
            oscar = new output[oscar](sizing, kilo, backup, foxtrot);
            oscar = oscar instanceof Object ? oscar : yankee;
            golf['searchFetcher'] = oscar;
            yankee = true;
            golf['isSearching'] = yankee;
            golf['rawResults'] = tango;
            golf['analyticsId'] = tango;
            yankee = 9;
            yankee = foxtrot[yankee];
            foxtrot = romeo.bind(entity)(yankee);
            romeo = foxtrot.omit;
            yankee = 'type';
            yankee = romeo.bind(foxtrot)(zulu, yankee);
            golf['query'] = yankee;
            yankee = zulu.offset;
            romeo = tango != yankee;
            zulu = 0;
            if(!romeo) { _fun00044_ip = 207; continue _fun00043 }
 204:
            zulu = yankee;
 207:
            golf['offset'] = zulu;
            zulu = false;
            golf['showBlockedResults'] = zulu;
            golf = _closure1_slot22;
            zulu = {};
            yankee = 'SEARCH_ADD_HISTORY';
            zulu['type'] = yankee;
            zulu['searchId'] = options;
            zulu['query'] = offset;
            zulu = golf.bind(entity)(zulu);
            zulu = _closure1_slot10;
            if(!(options !== zulu)) { _fun00044_ip = 280; continue _fun00043 }
 259:
            zulu = _closure1_slot11;
            golf = zulu.GUILD;
            zulu = null;
            if(!(verify === golf)) { _fun00044_ip = 278; continue _fun00043 }
 275:
            zulu = options;
 278:
            _fun00044_ip = 311; continue _fun00043;
 280:
            golf = _closure1_slot8;
            report = golf.getChannel;
            report = report.bind(golf)(options);
            golf = tango == report;
            tango = undefined;
            if(golf) { _fun00044_ip = 308; continue _fun00043 }
 303:
            tango = report.guild_id;
 308:
            zulu = tango;
 311:
            var _closure2_slot1 = zulu;
            report = oscar.fetch;
            tango = function(argFoo) {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    report = argFoo;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    oscar = 'SEARCH_FINISH';
                    mike['type'] = oscar;
                    golf = _closure2_slot0;
                    mike['searchId'] = golf;
                    oscar = _closure2_slot1;
                    mike['guildId'] = oscar;
                    oscar = report.body;
                    oscar = oscar.analytics_id;
                    mike['analyticsId'] = oscar;
                    oscar = report.body;
                    oscar = oscar.total_results;
                    mike['totalResults'] = oscar;
                    oscar = report.body;
                    oscar = oscar.messages;
                    mike['messages'] = oscar;
                    oscar = report.body;
                    golf = oscar.threads;
                    oscar = null;
                    if(!(oscar == golf)) { _fun00046_ip = 132; continue _fun00045 }
 128:
                    golf = new Array(0);
 132:
                    mike['threads'] = golf;
                    golf = report.body;
                    options = golf.members;
                    if(!(oscar == options)) { _fun00046_ip = 156; continue _fun00045 }
 152:
                    options = new Array(0);
 156:
                    golf = options.map;
                    oscar = function(argFoo) {
                        mike = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 11;
                        entity = zulu[entity];
                        zulu = undefined;
                        mike = mike.bind(zulu)(entity);
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    oscar = golf.bind(options)(oscar);
                    mike['members'] = oscar;
                    oscar = false;
                    mike['hasError'] = oscar;
                    oscar = report.body;
                    oscar = oscar.doing_deep_historical_index;
                    mike['doingHistoricalIndex'] = oscar;
                    report = report.body;
                    report = report.documents_indexed;
                    mike['documentsIndexed'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'SEARCH_INDEXING';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['searchId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'SEARCH_FINISH';
                mike['type'] = report;
                oscar = _closure2_slot0;
                mike['searchId'] = oscar;
                report = _closure2_slot1;
                mike['guildId'] = report;
                report = new Array(0);
                mike['messages'] = report;
                report = new Array(0);
                mike['threads'] = report;
                report = new Array(0);
                mike['members'] = report;
                report = 0;
                mike['totalResults'] = report;
                oscar = null;
                mike['analyticsId'] = oscar;
                oscar = true;
                mike['hasError'] = oscar;
                oscar = false;
                mike['doingHistoricalIndex'] = oscar;
                mike['documentsIndexed'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = report.bind(oscar)(tango, zulu, mike);
            return entity;
        }
    };
    mike['SEARCH_START'] = yankee;
    yankee = function(argFoo) { // Original name: guildIsIndexing
        entity = argFoo;
        zulu = entity.searchId;
        mike = _closure1_slot19;
        entity = undefined;
        zulu = mike.bind(entity)(zulu);
        mike = true;
        zulu['isIndexing'] = mike;
        zulu['isHistoricalIndexing'] = mike;
        mike = false;
        zulu['isSearching'] = mike;
        return entity;
    };
    mike['SEARCH_INDEXING'] = yankee;
    yankee = function(argFoo) { // Original name: finishedSearch
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot19;
            zulu = mike.searchId;
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            report = false;
            zulu['isSearching'] = report;
            zulu['isIndexing'] = report;
            tango = mike.doingHistoricalIndex;
            if(tango) { _fun00048_ip = 48; continue _fun00047 }
 46:
            tango = false;
 48:
            zulu['isHistoricalIndexing'] = tango;
            tango = null;
            zulu['searchFetcher'] = tango;
            report = mike.totalResults;
            zulu['totalResults'] = report;
            report = mike.hasError;
            zulu['hasError'] = report;
            report = mike.analyticsId;
            zulu['analyticsId'] = report;
            report = mike.documentsIndexed;
            oscar = tango != report;
            report = 0;
            if(!oscar) { _fun00048_ip = 119; continue _fun00047 }
 113:
            report = mike.documentsIndexed;
 119:
            zulu['documentsIndexed'] = report;
            report = global;
            oscar = report.Math;
            report = oscar.random;
            oscar = report.bind(oscar)();
            report = 0.05;
            report = oscar < report;
            zulu['showNoResultsAlt'] = report;
            mike = mike.messages;
            zulu['rawResults'] = mike;
            mike = zulu.query;
            if(!(tango == mike)) { _fun00048_ip = 192; continue _fun00047 }
 184:
            mike = true;
            zulu['hasError'] = mike;
 192:
            return entity;
        }
    };
    mike['SEARCH_FINISH'] = yankee;
    mike['SEARCH_EDITOR_STATE_CLEAR'] = offset;
    offset = function(argFoo) { // Original name: ensureEditorState
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            zulu = entity.searchId;
            entity = null;
            if(!(entity != zulu)) { _fun00050_ip = 29; continue _fun00049 }
 15:
            mike = _closure1_slot19;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
 29:
            entity = undefined;
            return entity;
        }
    };
    mike['SEARCH_ENSURE_SEARCH_STATE'] = offset;
    offset = function(argFoo) { // Original name: setSearchState
        entity = argFoo;
        tango = entity.searchId;
        zulu = entity.editorState;
        mike = _closure1_slot19;
        entity = undefined;
        mike = mike.bind(entity)(tango);
        mike['editorState'] = zulu;
        return entity;
    };
    mike['SEARCH_EDITOR_STATE_CHANGE'] = offset;
    offset = function(argFoo) { // Original name: setShowBlockedResults
        entity = argFoo;
        tango = entity.searchId;
        zulu = entity.showBlocked;
        mike = _closure1_slot19;
        entity = undefined;
        mike = mike.bind(entity)(tango);
        mike['showBlockedResults'] = zulu;
        return entity;
    };
    mike['SEARCH_SET_SHOW_BLOCKED_RESULTS'] = offset;
    offset = function(argFoo) { // Original name: handleSearchScreenOpen
        entity = argFoo;
        zulu = entity.searchId;
        mike = _closure1_slot24;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['SEARCH_SCREEN_OPEN'] = offset;
    offset = function(argFoo) { // Original name: handleChannelSelect
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            mike = argFoo;
            entity = mike.guildId;
            zulu = mike.channelId;
            mike = _closure1_slot24;
            tango = null;
            if(!(tango != entity)) { _fun00052_ip = 29; continue _fun00051 }
 26:
            zulu = entity;
 29:
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        }
    };
    mike['CHANNEL_SELECT'] = offset;
    offset = function() { // Original name: handleChannelToggleMembersSection
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            zulu = _closure1_slot16;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun00054_ip = 38; continue _fun00053 }
 16:
            tango = _closure1_slot23;
            zulu = {};
            mike = _closure1_slot16;
            zulu['searchId'] = mike;
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 38:
            return entity;
        }
    };
    mike['CHANNEL_TOGGLE_MEMBERS_SECTION'] = offset;
    offset = function(argFoo) { // Original name: clearSearchHistory
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            mike = entity.searchId;
            entity = null;
            if(!(entity != mike)) { _fun00056_ip = 82; continue _fun00055 }
 15:
            entity = _closure1_slot15;
            entity = delete entity[mike];
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            tango = entity.Storage;
            zulu = tango.set;
            mike = _closure1_slot13;
            entity = {};
            report = _closure1_slot15;
            entity['history'] = report;
            entity = zulu.bind(tango)(mike, entity);
            _fun00056_ip = 134; continue _fun00055;
 82:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 12;
            zulu = zulu[entity];
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            tango = entity.Storage;
            zulu = tango.remove;
            entity = _closure1_slot13;
            entity = zulu.bind(tango)(entity);
            entity = {};
            _closure1_slot15 = entity;
 134:
            entity = undefined;
            return entity;
        }
    };
    mike['SEARCH_CLEAR_HISTORY'] = offset;
    offset = function(argFoo) { // Original name: removeQueryFromHistory
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            mike = argFoo;
            zulu = mike.searchId;
            mike = mike.query;
            var _closure2_slot0 = mike;
            mike = _closure1_slot15;
            tango = mike[zulu];
            mike = null;
            if(!(mike != tango)) { _fun00058_ip = 118; continue _fun00057 }
 37:
            mike = _closure1_slot15;
            oscar = mike[zulu];
            tango = oscar.filter;
            entity = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            entity = tango.bind(oscar)(entity);
            mike[zulu] = entity;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            tango = entity.Storage;
            zulu = tango.set;
            mike = _closure1_slot13;
            entity = {};
            report = _closure1_slot15;
            entity['history'] = report;
            entity = zulu.bind(tango)(mike, entity);
 118:
            entity = undefined;
            return entity;
        }
    };
    mike['SEARCH_REMOVE_HISTORY'] = offset;
    mike['SEARCH_ADD_HISTORY'] = verify;
    verify = function() { // Original name: handleLogOut
        tango = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        mike = tango.bind(entity)(mike);
        report = mike.Storage;
        tango = report.remove;
        mike = _closure1_slot13;
        mike = tango.bind(report)(mike);
        mike = {};
        _closure1_slot15 = mike;
        return entity;
    };
    mike['LOGOUT'] = verify;
    tango = function() { // Original name: handleConnectionOpen
        entity = global;
        zulu = entity.Object;
        mike = zulu.keys;
        entity = _closure1_slot12;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                tango = argFoo;
                mike = _closure1_slot12;
                zulu = mike[tango];
                mike = null;
                if(!(mike != zulu)) { _fun00060_ip = 45; continue _fun00059 }
 20:
                mike = _closure1_slot12;
                mike = mike[tango];
                zulu = _closure1_slot20;
                entity = undefined;
                entity = zulu.bind(entity)(tango);
                mike['searchType'] = entity;
 45:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/SearchStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();