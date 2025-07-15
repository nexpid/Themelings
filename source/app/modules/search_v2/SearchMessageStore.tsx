// app/modules/search_v2/SearchMessageStore.tsx
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
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getSearchStateOrDefault
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot10;
            zuuluu = tangon.get;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00004_ip = 50; continue _fun00003 }
 26:
            michal = _closure1_slot9;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            oscard = zuuluu;
            michal = new oscard[michal](report);
            entity = michal instanceof Object ? michal : zuuluu;
 50:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchState
        tangon = argFoo;
        zuuluu = _closure1_slot15;
        entity = undefined;
        entity = zuuluu.bind(entity)(tangon);
        zuuluu = _closure1_slot10;
        michal = zuuluu.set;
        michal = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: updateMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot12;
            michal = zuuluu.get;
            report = michal.bind(zuuluu)(tangon);
            michal = null;
            if(!(michal != report)) { _fun00006_ip = 55; continue _fun00005 }
 26:
            zuuluu = argBar;
            michal = undefined;
            zuuluu = zuuluu.bind(michal)(report);
            michal = _closure1_slot12;
            entity = michal.set;
            entity = entity.bind(michal)(tangon, zuuluu);
            entity = true;
            return entity;
 55:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: withSearchState
        michal = _closure1_slot15;
        zuuluu = undefined;
        entity = argFoo;
        michal = michal.bind(zuuluu)(entity);
        entity = argBar;
        entity = entity.bind(zuuluu)(michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    verify = function(argFoo) { // Original name: handleReaction
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            option = argFoo;
            var _closure2_slot0 = option;
            michal = option.type;
            var _closure2_slot1 = michal;
            tangon = option.messageId;
            oscard = option.userId;
            michal = option.emoji;
            var _closure2_slot2 = michal;
            golfie = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 9;
            report = report[zuuluu];
            zuuluu = undefined;
            golfie = golfie.bind(zuuluu)(report);
            report = golfie.shouldApplyReaction;
            report = report.bind(golfie)(option);
            if(report) { _fun00008_ip = 81; continue _fun00007 }
 77:
            report = false;
            return report;
 81:
            golfie = _closure1_slot7;
            report = golfie.getId;
            report = report.bind(golfie)();
            report = report === oscard;
            var _closure2_slot3 = report;
            michal = _closure1_slot17;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    golfie = argFoo;
                    entity = _closure2_slot0;
                    oscard = entity.reactionType;
                    zuuluu = _closure2_slot1;
                    entity = 'MESSAGE_REACTION_ADD';
                    if(!(entity !== zuuluu)) { _fun00010_ip = 51; continue _fun00009 }
 28:
                    tangon = golfie.removeReaction;
                    zuuluu = _closure2_slot2;
                    entity = _closure2_slot3;
                    entity = tangon.bind(golfie)(zuuluu, entity, oscard);
                    _fun00010_ip = 84; continue _fun00009;
 51:
                    report = golfie.addReaction;
                    yankee = _closure2_slot2;
                    offset = _closure2_slot3;
                    michal = _closure2_slot0;
                    verify = michal.colors;
                    romeon = golfie;
                    option = oscard;
                    entity = romeon[report](yankee, offset, verify, option, golfie);
 84:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    michal = global;
    yankee = michal.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = function() {
        tangon = _closure1_slot6;
        zuuluu = function() { // Original name: SearchState
            zuuluu = this;
            tangon = _closure1_slot5;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            tangon = false;
            zuuluu['isIndexing'] = tangon;
            zuuluu['isHistoricalIndexing'] = tangon;
            zuuluu['isFetching'] = tangon;
            michal = null;
            zuuluu['analyticsId'] = michal;
            zuuluu['error'] = michal;
            zuuluu['messages'] = michal;
            report = 0;
            zuuluu['documentsIndexed'] = report;
            zuuluu['totalResults'] = michal;
            zuuluu['hasNextPage'] = tangon;
            report = global;
            report = report.Set;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            verify = oscard;
            report = new verify[report](option);
            report = report instanceof Object ? report : oscard;
            zuuluu['messageIds'] = report;
            zuuluu['isInitialFetchComplete'] = tangon;
            zuuluu['cursor'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'handleSearchStart';
        entity['key'] = michal;
        michal = function() { // Original name: value
            michal = this;
            entity = true;
            michal['isFetching'] = entity;
            entity = false;
            michal['isIndexing'] = entity;
            entity = null;
            michal['analyticsId'] = entity;
            michal['error'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'handleSearchIndexing';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = true;
            michal['isInitialFetchComplete'] = entity;
            michal['isIndexing'] = entity;
            michal['isHistoricalIndexing'] = entity;
            entity = false;
            michal['isFetching'] = entity;
            entity = null;
            michal['error'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'handleSearchFailure';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = this;
            entity = false;
            zuuluu['isFetching'] = entity;
            zuuluu['isIndexing'] = entity;
            michal = true;
            zuuluu['isInitialFetchComplete'] = michal;
            zuuluu['isHistoricalIndexing'] = entity;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            report = michal.APIError;
            michal = report.prototype;
            tangon = Object.create(michal, {constructor: {value: report}});
            oscard = argFoo;
            golfie = tangon;
            michal = new golfie[report](oscard, report);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['error'] = michal;
            michal = null;
            zuuluu['analyticsId'] = michal;
            michal = 0;
            zuuluu['documentsIndexed'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'handleSearchSuccess';
        entity['key'] = oscard;
        report = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                option = argBar;
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                golfie = tangon.analyticsId;
                entity = tangon.cursor;
                michal = tangon.totalResults;
                report = tangon.doingHistoricalIndex;
                tangon = tangon.documentsIndexed;
                verify = undefined;
                var _closure3_slot1 = verify;
                var _closure3_slot2 = verify;
                zuuluu['analyticsId'] = golfie;
                golfie = false;
                zuuluu['isFetching'] = golfie;
                zuuluu['isIndexing'] = golfie;
                golfie = true;
                zuuluu['isInitialFetchComplete'] = golfie;
                zuuluu['isHistoricalIndexing'] = report;
                report = null;
                zuuluu['error'] = report;
                zuuluu['documentsIndexed'] = tangon;
                zuuluu['cursor'] = entity;
                golfie = zuuluu.messages;
                if(!(report == golfie)) { _fun00012_ip = 123; continue _fun00011 }
 119:
                golfie = new Array(0);
 123:
                tangon = new Array(0);
                yankee = 0;
                foxtra = tangon;
                romeon = golfie;
                entity = arraySpread(foxtra, romeon, yankee);
                _closure3_slot1 = tangon;
                entity = new Array(0);
                _closure3_slot2 = entity;
                golfie = option.forEach;
                oscard = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zuuluu = argFoo;
                        michal = _closure3_slot0;
                        report = michal.messageIds;
                        tangon = report.has;
                        michal = zuuluu.id;
                        michal = tangon.bind(report)(michal);
                        if(michal) { _fun00014_ip = 52; continue _fun00013 }
 34:
                        report = _closure1_slot8;
                        tangon = report.isBlockedOrIgnoredForMessage;
                        michal = tangon.bind(report)(zuuluu);
 52:
                        if(michal) { _fun00014_ip = 108; continue _fun00013 }
 55:
                        michal = _closure3_slot0;
                        report = michal.messageIds;
                        tangon = report.add;
                        michal = zuuluu.id;
                        michal = tangon.bind(report)(michal);
                        tangon = _closure3_slot1;
                        michal = tangon.push;
                        michal = michal.bind(tangon)(zuuluu);
                        michal = _closure3_slot2;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
 108:
                        entity = undefined;
                        return entity;
                    }
                };
                oscard = golfie.bind(option)(oscard);
                zuuluu['messages'] = tangon;
                tangon = zuuluu.cursor;
                tangon = report != tangon;
                zuuluu['hasNextPage'] = tangon;
                zuuluu['totalResults'] = michal;
                return entity;
            }
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    option = option.bind(entity)();
    var _closure1_slot9 = option;
    option = michal.Map;
    offset = option.prototype;
    offset = Object.create(offset, {constructor: {value: option}});
    kiloes = offset;
    option = new kiloes[option](backup);
    option = option instanceof Object ? option : offset;
    var _closure1_slot10 = option;
    option = null;
    var _closure1_slot11 = option;
    option = michal.Map;
    offset = option.prototype;
    offset = Object.create(offset, {constructor: {value: option}});
    kiloes = offset;
    option = new kiloes[option](backup);
    option = option instanceof Object ? option : offset;
    var _closure1_slot12 = option;
    michal = michal.Map;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    kiloes = option;
    michal = new kiloes[michal](backup);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot13 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: SearchMessageStore
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot5;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot14;
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
                oscard = _closure1_slot3;
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
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot6;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.waitFor;
            entity = _closure1_slot8;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(14);
        entity[0] = report;
        report = {};
        golfie = 'getMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot12;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getTotalCount';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot18;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.totalResults;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getIsInitialFetchComplete';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot18;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isInitialFetchComplete;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getIsIndexing';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot18;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isIndexing;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getIsHistoricalIndexing';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot18;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isHistoricalIndexing;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getDocumentsIndexed';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot18;
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
        entity[6] = report;
        report = {};
        golfie = 'getIsFetching';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot18;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isFetching;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getHasNextPage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot18;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.hasNextPage;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getError';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot18;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.error;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getMessages';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot18;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.messages;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getCursor';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot18;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.cursor;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getLastSearchAnalyticsId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'hasSearchState';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot10;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = oscard;
        entity[13] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'SearchMessageStore';
    option['displayName'] = michal;
    michal = 11;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    offset = function(argFoo) { // Original name: handleSearchMessagesStart
        entity = argFoo;
        zuuluu = entity.ids;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = _closure1_slot16;
            entity = undefined;
            michal = argFoo;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.handleSearchStart;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['SEARCH_MESSAGES_START'] = offset;
    offset = function(argFoo) { // Original name: handleSearchMessagesSuccess
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.data;
            entity = 0;
            zuuluu = zuuluu[entity];
            entity = null;
            report = entity == zuuluu;
            entity = undefined;
            tangon = undefined;
            if(report) { _fun00018_ip = 33; continue _fun00017 }
 27:
            tangon = zuuluu.analyticsId;
 33:
            _closure1_slot11 = tangon;
            tangon = michal.data;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                oscard = argFoo;
                tangon = _closure1_slot16;
                zuuluu = oscard.id;
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                golfie = oscard.messages;
                tangon = golfie.map;
                zuuluu = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        michal = argFoo;
                        entity = michal[Symbol.iterator];
                        michal = entity().next;
                        report = michal().value;
                        michal = entity;
                        tangon = undefined;
                        michal = michal === tangon;
                        zuuluu = undefined;
                        if(michal) { _fun00020_ip = 27; continue _fun00019 }
 24:
                        zuuluu = report;
 27:
                        if(michal) { _fun00020_ip = 33; continue _fun00019 }
 30:
                        entity.return();
 33:
                        michal = _closure1_slot0;
                        report = _closure1_slot1;
                        entity = 8;
                        entity = report[entity];
                        michal = michal.bind(tangon)(entity);
                        entity = michal.createMessageRecord;
                        entity = entity.bind(michal)(zuuluu);
                        return entity;
                    }
                };
                tangon = tangon.bind(golfie)(zuuluu);
                zuuluu = report.handleSearchSuccess;
                tangon = zuuluu.bind(report)(oscard, tangon);
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        entity = argFoo;
                        report = _closure1_slot12;
                        tangon = report.set;
                        zuuluu = entity.id;
                        zuuluu = tangon.bind(report)(zuuluu, entity);
                        report = _closure1_slot13;
                        tangon = report.get;
                        zuuluu = entity.id;
                        zuuluu = tangon.bind(report)(zuuluu);
                        tangon = null;
                        tangon = tangon != zuuluu;
                        report = 0;
                        if(!tangon) { _fun00022_ip = 59; continue _fun00021 }
 56:
                        report = zuuluu;
 59:
                        tangon = _closure1_slot13;
                        zuuluu = tangon.set;
                        michal = entity.id;
                        entity = 1;
                        entity = report + entity;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['SEARCH_MESSAGES_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleSearchMessagesIndexing
        entity = argFoo;
        zuuluu = entity.ids;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = _closure1_slot16;
            entity = undefined;
            michal = argFoo;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.handleSearchIndexing;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['SEARCH_MESSAGES_INDEXING'] = offset;
    offset = function(argFoo) { // Original name: handleSearchMessagesFailure
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = michal.ids;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = _closure1_slot16;
            entity = undefined;
            michal = argFoo;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.handleSearchFailure;
            michal = _closure2_slot0;
            michal = michal.error;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['SEARCH_MESSAGES_FAILURE'] = offset;
    offset = function(argFoo) { // Original name: handleSearchMessagesClear
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot10;
            tangon = report.get;
            zuuluu = entity.id;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00024_ip = 77; continue _fun00023 }
 31:
            report = zuuluu.messageIds;
            tangon = report.forEach;
            zuuluu = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure1_slot13;
                    michal = tangon.get;
                    michal = michal.bind(tangon)(zuuluu);
                    tangon = null;
                    tangon = tangon != michal;
                    oscard = 0;
                    if(!tangon) { _fun00026_ip = 34; continue _fun00025 }
 31:
                    oscard = michal;
 34:
                    michal = 1;
                    if(!(!(oscard <= michal))) { _fun00026_ip = 62; continue _fun00025 }
 41:
                    report = _closure1_slot13;
                    tangon = report.set;
                    michal = oscard - michal;
                    michal = tangon.bind(report)(zuuluu, michal);
                    _fun00026_ip = 90; continue _fun00025;
 62:
                    tangon = _closure1_slot12;
                    michal = tangon.delete;
                    michal = michal.bind(tangon)(zuuluu);
                    michal = _closure1_slot13;
                    entity = michal.delete;
                    entity = entity.bind(michal)(zuuluu);
 90:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot10;
            michal = zuuluu.delete;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
 77:
            entity = false;
            return entity;
        }
    };
    michal['SEARCH_MESSAGES_CLEAR'] = offset;
    offset = function() { // Original name: handleSearchMessagesClearAll
        entity = global;
        michal = entity.Map;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        report = zuuluu;
        michal = new report[michal](tangon);
        zuuluu = michal instanceof Object ? michal : zuuluu;
        _closure1_slot10 = zuuluu;
        zuuluu = entity.Map;
        tangon = zuuluu.prototype;
        tangon = Object.create(tangon, {constructor: {value: zuuluu}});
        report = tangon;
        zuuluu = new report[zuuluu](tangon);
        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
        _closure1_slot12 = zuuluu;
        entity = entity.Map;
        zuuluu = entity.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
        report = zuuluu;
        entity = new report[entity](tangon);
        entity = entity instanceof Object ? entity : zuuluu;
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    michal['SEARCH_MESSAGES_CLEAR_ALL'] = offset;
    offset = function(argFoo) { // Original name: handleMessageUpdate
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.message;
            report = entity.id;
            entity = null;
            if(!(entity != report)) { _fun00028_ip = 100; continue _fun00027 }
 19:
            oscard = _closure1_slot12;
            tangon = oscard.get;
            golfie = tangon.bind(oscard)(report);
            if(!(entity != golfie)) { _fun00028_ip = 96; continue _fun00027 }
 40:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 8;
            tangon = tangon[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.updateMessageRecord;
            zuuluu = zuuluu.message;
            tangon = tangon.bind(oscard)(golfie, zuuluu);
            zuuluu = _closure1_slot12;
            michal = zuuluu.set;
            michal = michal.bind(zuuluu)(report, tangon);
            return entity;
 96:
            entity = false;
            return entity;
 100:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_UPDATE'] = offset;
    michal['MESSAGE_REACTION_ADD'] = verify;
    offset = function(argFoo) { // Original name: handleReactionBatch
        michal = argFoo;
        tangon = michal.messageId;
        michal = michal.reactions;
        var _closure2_slot0 = michal;
        report = _closure1_slot7;
        zuuluu = report.getId;
        zuuluu = zuuluu.bind(report)();
        var _closure2_slot1 = zuuluu;
        zuuluu = _closure1_slot17;
        michal = undefined;
        entity = function(argFoo) {
            tangon = argFoo;
            zuuluu = tangon.addReactionBatch;
            michal = _closure2_slot0;
            entity = _closure2_slot1;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity = zuuluu.bind(michal)(tangon, entity);
        return entity;
    };
    michal['MESSAGE_REACTION_ADD_MANY'] = offset;
    michal['MESSAGE_REACTION_REMOVE'] = verify;
    verify = function(argFoo) { // Original name: handleRemoveAllReactions
        entity = argFoo;
        tangon = entity.messageId;
        zuuluu = _closure1_slot17;
        michal = undefined;
        entity = function(argFoo) {
            tangon = argFoo;
            zuuluu = tangon.set;
            michal = 'reactions';
            entity = new Array(0);
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity = zuuluu.bind(michal)(tangon, entity);
        return entity;
    };
    michal['MESSAGE_REACTION_REMOVE_ALL'] = verify;
    verify = function(argFoo) { // Original name: handleRemoveEmojiReactions
        michal = argFoo;
        tangon = michal.messageId;
        michal = michal.emoji;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot17;
        michal = undefined;
        entity = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.removeReactionsForEmoji;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(michal)(tangon, entity);
        return entity;
    };
    michal['MESSAGE_REACTION_REMOVE_EMOJI'] = verify;
    tangon = function() { // Original name: handleConnectionOpen
        entity = global;
        michal = entity.Map;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        report = zuuluu;
        michal = new report[michal](tangon);
        zuuluu = michal instanceof Object ? michal : zuuluu;
        _closure1_slot10 = zuuluu;
        zuuluu = entity.Map;
        tangon = zuuluu.prototype;
        tangon = Object.create(tangon, {constructor: {value: zuuluu}});
        report = tangon;
        zuuluu = new report[zuuluu](tangon);
        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
        _closure1_slot12 = zuuluu;
        entity = entity.Map;
        zuuluu = entity.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
        report = zuuluu;
        entity = new report[entity](tangon);
        entity = entity instanceof Object ? entity : zuuluu;
        _closure1_slot13 = entity;
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
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/SearchMessageStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();