// app/modules/search_v2/native/SearchMessageStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot14;
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
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getSearchStateOrDefault
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = _closure1_slot10;
            zulu = tango.get;
            entity = argFoo;
            entity = zulu.bind(tango)(entity);
            zulu = null;
            if(!(zulu == entity)) { _fun00006_ip = 50; continue _fun00005 }
 26:
            mike = _closure1_slot9;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            oscar = zulu;
            mike = new oscar[mike](report);
            entity = mike instanceof Object ? mike : zulu;
 50:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchState
        tango = argFoo;
        zulu = _closure1_slot15;
        entity = undefined;
        entity = zulu.bind(entity)(tango);
        zulu = _closure1_slot10;
        mike = zulu.set;
        mike = mike.bind(zulu)(tango, entity);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: updateMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot11;
            mike = zulu.get;
            report = mike.bind(zulu)(tango);
            mike = null;
            if(!(mike != report)) { _fun00008_ip = 55; continue _fun00007 }
 26:
            zulu = argBar;
            mike = undefined;
            zulu = zulu.bind(mike)(report);
            mike = _closure1_slot11;
            entity = mike.set;
            entity = entity.bind(mike)(tango, zulu);
            entity = true;
            return entity;
 55:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: withSearchState
        mike = _closure1_slot15;
        zulu = undefined;
        entity = argFoo;
        mike = mike.bind(zulu)(entity);
        entity = argBar;
        entity = entity.bind(zulu)(mike);
        return entity;
    };
    var _closure1_slot18 = entity;
    verify = function(argFoo) { // Original name: handleReaction
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            mike = options.type;
            var _closure2_slot1 = mike;
            tango = options.messageId;
            oscar = options.userId;
            mike = options.emoji;
            var _closure2_slot2 = mike;
            golf = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 9;
            report = report[zulu];
            zulu = undefined;
            golf = golf.bind(zulu)(report);
            report = golf.shouldApplyReaction;
            report = report.bind(golf)(options);
            if(report) { _fun00010_ip = 81; continue _fun00009 }
 77:
            report = false;
            return report;
 81:
            golf = _closure1_slot7;
            report = golf.getId;
            report = report.bind(golf)();
            report = report === oscar;
            var _closure2_slot3 = report;
            mike = _closure1_slot17;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    golf = argFoo;
                    entity = _closure2_slot0;
                    oscar = entity.reactionType;
                    zulu = _closure2_slot1;
                    entity = 'MESSAGE_REACTION_ADD';
                    if(!(entity !== zulu)) { _fun00012_ip = 51; continue _fun00011 }
 28:
                    tango = golf.removeReaction;
                    zulu = _closure2_slot2;
                    entity = _closure2_slot3;
                    entity = tango.bind(golf)(zulu, entity, oscar);
                    _fun00012_ip = 84; continue _fun00011;
 51:
                    report = golf.addReaction;
                    yankee = _closure2_slot2;
                    offset = _closure2_slot3;
                    mike = _closure2_slot0;
                    verify = mike.colors;
                    romeo = golf;
                    options = oscar;
                    entity = romeo[report](yankee, offset, verify, options, golf);
 84:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    mike = global;
    yankee = mike.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = function() {
        tango = _closure1_slot6;
        zulu = function() { // Original name: SearchState
            zulu = this;
            tango = _closure1_slot5;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            tango = false;
            zulu['isIndexing'] = tango;
            zulu['isHistoricalIndexing'] = tango;
            zulu['isFetching'] = tango;
            mike = null;
            zulu['analyticsId'] = mike;
            zulu['error'] = mike;
            zulu['messages'] = mike;
            report = 0;
            zulu['documentsIndexed'] = report;
            zulu['totalResults'] = mike;
            zulu['resultsBlocked'] = report;
            zulu['showBlockedResults'] = tango;
            zulu['showNoResultsAlt'] = tango;
            zulu['hasNextPage'] = tango;
            report = global;
            report = report.Set;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            verify = oscar;
            report = new verify[report](options);
            report = report instanceof Object ? report : oscar;
            zulu['messageIds'] = report;
            zulu['isInitialFetchComplete'] = tango;
            zulu['cursor'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'handleSearchStart';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            entity = true;
            mike['isFetching'] = entity;
            zulu = false;
            mike['isIndexing'] = zulu;
            entity = null;
            mike['analyticsId'] = entity;
            mike['showBlockedResults'] = zulu;
            mike['error'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        oscar = 'handleSearchIndexing';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = true;
            mike['isInitialFetchComplete'] = entity;
            mike['isIndexing'] = entity;
            mike['isHistoricalIndexing'] = entity;
            entity = false;
            mike['isFetching'] = entity;
            entity = null;
            mike['error'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'handleSearchFailure';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = this;
            entity = false;
            zulu['isFetching'] = entity;
            zulu['isIndexing'] = entity;
            mike = true;
            zulu['isInitialFetchComplete'] = mike;
            zulu['isHistoricalIndexing'] = entity;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            report = mike.APIError;
            mike = report.prototype;
            tango = Object.create(mike, {constructor: {value: report}});
            oscar = argFoo;
            golf = tango;
            mike = new golf[report](oscar, report);
            mike = mike instanceof Object ? mike : tango;
            zulu['error'] = mike;
            mike = null;
            zulu['analyticsId'] = mike;
            mike = 0;
            zulu['documentsIndexed'] = mike;
            mike = global;
            tango = mike.Math;
            mike = tango.random;
            tango = mike.bind(tango)();
            mike = 0.05;
            mike = tango < mike;
            zulu['showNoResultsAlt'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'handleSearchSuccess';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                mike = this;
                oscar = report.analyticsId;
                zulu = report.cursor;
                entity = report.totalResults;
                tango = report.doingHistoricalIndex;
                report = report.documentsIndexed;
                mike['analyticsId'] = oscar;
                oscar = false;
                mike['isFetching'] = oscar;
                mike['isIndexing'] = oscar;
                oscar = true;
                mike['isInitialFetchComplete'] = oscar;
                mike['isHistoricalIndexing'] = tango;
                tango = null;
                mike['error'] = tango;
                mike['documentsIndexed'] = report;
                report = global;
                oscar = report.Math;
                report = oscar.random;
                oscar = report.bind(oscar)();
                report = 0.05;
                report = oscar < report;
                mike['showNoResultsAlt'] = report;
                mike['cursor'] = zulu;
                report = mike.dedupMessages;
                zulu = argBar;
                report = report.bind(mike)(zulu);
                zulu = mike.filterBlockedMessages;
                oscar = zulu.bind(mike)(report);
                golf = mike.messages;
                if(!(tango == golf)) { _fun00014_ip = 171; continue _fun00013 }
 167:
                golf = new Array(0);
 171:
                zulu = new Array(0);
                options = 0;
                offset = zulu;
                verify = golf;
                options = arraySpread(offset, verify, options);
                offset = zulu;
                verify = oscar;
                report = arraySpread(offset, verify, options);
                mike['messages'] = zulu;
                zulu = mike.cursor;
                zulu = tango != zulu;
                mike['hasNextPage'] = zulu;
                mike['totalResults'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'filterBlockedMessages';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = argFoo;
            mike = zulu.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot8;
                mike = zulu.isBlockedOrIgnoredForMessage;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'dedupMessages';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            zulu = argFoo;
            mike = this;
            var _closure3_slot0 = mike;
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = argFoo;
                    entity = _closure3_slot0;
                    report = entity.messageIds;
                    tango = report.has;
                    entity = mike.id;
                    entity = tango.bind(report)(entity);
                    entity = !entity;
                    if(!entity) { _fun00016_ip = 64; continue _fun00015 }
 37:
                    zulu = _closure3_slot0;
                    tango = zulu.messageIds;
                    zulu = tango.add;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
                    entity = true;
 64:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = report;
        mike[5] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    options = options.bind(entity)();
    var _closure1_slot9 = options;
    options = mike.Map;
    offset = options.prototype;
    offset = Object.create(offset, {constructor: {value: options}});
    kilo = offset;
    options = new kilo[options](backup);
    options = options instanceof Object ? options : offset;
    var _closure1_slot10 = options;
    mike = mike.Map;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    kilo = options;
    mike = new kilo[mike](backup);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot11 = mike;
    mike = null;
    var _closure1_slot12 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: SearchMessageStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot5;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot13;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot6;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot8;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(13);
        entity[0] = report;
        report = {};
        golf = 'getMessage';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot11;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getTotalCount';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot18;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.totalResults;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getIsInitialFetchComplete';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot18;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isInitialFetchComplete;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getIsIndexing';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot18;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isIndexing;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getIsHistoricalIndexing';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot18;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isHistoricalIndexing;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getDocumentsIndexed';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot18;
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
        entity[6] = report;
        report = {};
        golf = 'getIsFetching';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot18;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isFetching;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getHasNextPage';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot18;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.hasNextPage;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getError';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot18;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.error;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getMessages';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot18;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.messages;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'getCursor';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot18;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.cursor;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getLastSearchAnalyticsId';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = oscar;
        entity[12] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'SearchMessageStore';
    options['displayName'] = mike;
    mike = 11;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    offset = function(argFoo) { // Original name: handleSearchMessagesStart
        entity = argFoo;
        zulu = entity.ids;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot16;
            entity = undefined;
            mike = argFoo;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.handleSearchStart;
            mike = mike.bind(zulu)();
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['SEARCH_MESSAGES_START'] = offset;
    offset = function(argFoo) { // Original name: handleSearchMessagesSuccess
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            mike = argFoo;
            zulu = mike.data;
            entity = 0;
            zulu = zulu[entity];
            entity = null;
            report = entity == zulu;
            entity = undefined;
            tango = undefined;
            if(report) { _fun00018_ip = 33; continue _fun00017 }
 27:
            tango = zulu.analyticsId;
 33:
            _closure1_slot12 = tango;
            tango = mike.data;
            zulu = tango.forEach;
            mike = function(argFoo) {
                oscar = argFoo;
                tango = _closure1_slot16;
                zulu = oscar.id;
                entity = undefined;
                report = tango.bind(entity)(zulu);
                golf = oscar.messages;
                tango = golf.map;
                zulu = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        mike = argFoo;
                        entity = mike[Symbol.iterator];
                        mike = entity().next;
                        report = mike().value;
                        mike = entity;
                        tango = undefined;
                        mike = mike === tango;
                        zulu = undefined;
                        if(mike) { _fun00020_ip = 27; continue _fun00019 }
 24:
                        zulu = report;
 27:
                        if(mike) { _fun00020_ip = 33; continue _fun00019 }
 30:
                        entity.return();
 33:
                        mike = _closure1_slot0;
                        report = _closure1_slot1;
                        entity = 8;
                        entity = report[entity];
                        mike = mike.bind(tango)(entity);
                        entity = mike.createMessageRecord;
                        entity = entity.bind(mike)(zulu);
                        return entity;
                    }
                };
                tango = tango.bind(golf)(zulu);
                zulu = report.handleSearchSuccess;
                zulu = zulu.bind(report)(oscar, tango);
                zulu = tango.forEach;
                mike = function(argFoo) {
                    tango = argFoo;
                    zulu = _closure1_slot11;
                    mike = zulu.set;
                    entity = tango.id;
                    entity = mike.bind(zulu)(entity, tango);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['SEARCH_MESSAGES_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleSearchMessagesIndexing
        entity = argFoo;
        zulu = entity.ids;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot16;
            entity = undefined;
            mike = argFoo;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.handleSearchIndexing;
            mike = mike.bind(zulu)();
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['SEARCH_MESSAGES_INDEXING'] = offset;
    offset = function(argFoo) { // Original name: handleSearchMessagesFailure
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = mike.ids;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot16;
            entity = undefined;
            mike = argFoo;
            tango = zulu.bind(entity)(mike);
            zulu = tango.handleSearchFailure;
            mike = _closure2_slot0;
            mike = mike.error;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['SEARCH_MESSAGES_FAILURE'] = offset;
    offset = function() { // Original name: handleSearchMessagesClearAll
        entity = global;
        mike = entity.Map;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        tango = zulu;
        mike = new tango[mike](zulu);
        zulu = mike instanceof Object ? mike : zulu;
        _closure1_slot10 = zulu;
        entity = entity.Map;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        tango = zulu;
        entity = new tango[entity](zulu);
        entity = entity instanceof Object ? entity : zulu;
        _closure1_slot11 = entity;
        entity = undefined;
        return entity;
    };
    mike['SEARCH_MESSAGES_CLEAR_ALL'] = offset;
    offset = function(argFoo) { // Original name: handleMessageUpdate
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zulu = argFoo;
            entity = zulu.message;
            report = entity.id;
            entity = null;
            if(!(entity != report)) { _fun00022_ip = 100; continue _fun00021 }
 19:
            oscar = _closure1_slot11;
            tango = oscar.get;
            golf = tango.bind(oscar)(report);
            if(!(entity != golf)) { _fun00022_ip = 96; continue _fun00021 }
 40:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 8;
            tango = tango[entity];
            entity = undefined;
            oscar = oscar.bind(entity)(tango);
            tango = oscar.updateMessageRecord;
            zulu = zulu.message;
            tango = tango.bind(oscar)(golf, zulu);
            zulu = _closure1_slot11;
            mike = zulu.set;
            mike = mike.bind(zulu)(report, tango);
            return entity;
 96:
            entity = false;
            return entity;
 100:
            entity = false;
            return entity;
        }
    };
    mike['MESSAGE_UPDATE'] = offset;
    mike['MESSAGE_REACTION_ADD'] = verify;
    offset = function(argFoo) { // Original name: handleReactionBatch
        mike = argFoo;
        tango = mike.messageId;
        mike = mike.reactions;
        var _closure2_slot0 = mike;
        report = _closure1_slot7;
        zulu = report.getId;
        zulu = zulu.bind(report)();
        var _closure2_slot1 = zulu;
        zulu = _closure1_slot17;
        mike = undefined;
        entity = function(argFoo) {
            tango = argFoo;
            zulu = tango.addReactionBatch;
            mike = _closure2_slot0;
            entity = _closure2_slot1;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity = zulu.bind(mike)(tango, entity);
        return entity;
    };
    mike['MESSAGE_REACTION_ADD_MANY'] = offset;
    mike['MESSAGE_REACTION_REMOVE'] = verify;
    verify = function(argFoo) { // Original name: handleRemoveAllReactions
        entity = argFoo;
        tango = entity.messageId;
        zulu = _closure1_slot17;
        mike = undefined;
        entity = function(argFoo) {
            tango = argFoo;
            zulu = tango.set;
            mike = 'reactions';
            entity = new Array(0);
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity = zulu.bind(mike)(tango, entity);
        return entity;
    };
    mike['MESSAGE_REACTION_REMOVE_ALL'] = verify;
    verify = function(argFoo) { // Original name: handleRemoveEmojiReactions
        mike = argFoo;
        tango = mike.messageId;
        mike = mike.emoji;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot17;
        mike = undefined;
        entity = function(argFoo) {
            zulu = argFoo;
            mike = zulu.removeReactionsForEmoji;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(mike)(tango, entity);
        return entity;
    };
    mike['MESSAGE_REACTION_REMOVE_EMOJI'] = verify;
    tango = function() { // Original name: handleConnectionOpen
        entity = global;
        mike = entity.Map;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        tango = zulu;
        mike = new tango[mike](zulu);
        zulu = mike instanceof Object ? mike : zulu;
        _closure1_slot10 = zulu;
        entity = entity.Map;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        tango = zulu;
        entity = new tango[entity](zulu);
        entity = entity instanceof Object ? entity : zulu;
        _closure1_slot11 = entity;
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
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/SearchMessageStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();