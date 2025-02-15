// app/modules/forums/ForumSearchStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
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
            entity = _closure1_slot8;
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
    var _closure1_slot7 = entity;
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
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: isForumLikeChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot5;
            mike = zulu.getChannel;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            entity = null;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 42; continue _fun00005 }
 29:
            mike = zulu.isForumLikeChannel;
            mike = mike.bind(zulu)();
            entity = !mike;
 42:
            entity = !entity;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot6;
            entity = entity[zulu];
            tango = null;
            if(!(tango == entity)) { _fun00008_ip = 30; continue _fun00007 }
 20:
            entity = {'query': null, 'loading': false, 'results': null};
 30:
            mike = _closure1_slot6;
            mike[zulu] = entity;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = {};
    var _closure1_slot6 = mike;
    mike = 6;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ForumSearchStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'getSearchQuery';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = _closure1_slot6;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00010_ip = 30; continue _fun00009 }
 25:
                entity = mike.query;
 30:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getSearchLoading';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = _closure1_slot6;
                entity = argFoo;
                zulu = mike[entity];
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun00012_ip = 31; continue _fun00011 }
 25:
                mike = zulu.loading;
 31:
                entity = entity != mike;
                if(!entity) { _fun00012_ip = 41; continue _fun00011 }
 38:
                entity = mike;
 41:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getSearchResults';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = _closure1_slot6;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00014_ip = 31; continue _fun00013 }
 25:
                entity = mike.results;
 31:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getHasSearchResults';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = _closure1_slot6;
                entity = argFoo;
                mike = mike[entity];
                zulu = null;
                tango = zulu == mike;
                entity = undefined;
                if(tango) { _fun00016_ip = 31; continue _fun00015 }
 25:
                entity = mike.results;
 31:
                entity = zulu != entity;
                if(!entity) { _fun00016_ip = 55; continue _fun00015 }
 38:
                mike = mike.results;
                zulu = mike.length;
                mike = 0;
                entity = zulu > mike;
 55:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'ForumSearchStore';
    golf['displayName'] = mike;
    mike = 7;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = options;
    options = function(argFoo) { // Original name: handleThreadDelete
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            var _closure2_slot0 = entity;
            tango = entity.parent_id;
            entity = null;
            if(!(entity != tango)) { _fun00018_ip = 110; continue _fun00017 }
 26:
            zulu = _closure1_slot6;
            oscar = zulu[tango];
            if(!(entity != oscar)) { _fun00018_ip = 106; continue _fun00017 }
 41:
            zulu = _closure1_slot6;
            mike = {};
            offset = mike;
            verify = oscar;
            golf = copyDataProperties(offset, verify);
            options = oscar.results;
            golf = entity == options;
            entity = undefined;
            oscar = undefined;
            if(golf) { _fun00018_ip = 91; continue _fun00017 }
 74:
            golf = options.filter;
            report = function(argFoo) {
                entity = _closure2_slot0;
                mike = entity.id;
                entity = argFoo;
                entity = mike !== entity;
                return entity;
            };
            oscar = golf.bind(options)(report);
 91:
            report = 'results';
            mike[report] = oscar;
            zulu[tango] = mike;
            return entity;
 106:
            entity = false;
            return entity;
 110:
            entity = false;
            return entity;
        }
    };
    mike['THREAD_DELETE'] = options;
    options = function(argFoo) { // Original name: handleChannelDelete
        entity = argFoo;
        entity = entity.channel;
        mike = _closure1_slot6;
        entity = entity.id;
        entity = delete mike[entity];
        return entity;
    };
    mike['CHANNEL_DELETE'] = options;
    options = function(argFoo) { // Original name: handleForumSearchQueryUpdated
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            oscar = entity.query;
            zulu = _closure1_slot9;
            entity = undefined;
            zulu = zulu.bind(entity)(tango);
            if(zulu) { _fun00020_ip = 34; continue _fun00019 }
 30:
            zulu = false;
            return zulu;
 34:
            zulu = _closure1_slot10;
            golf = zulu.bind(entity)(tango);
            zulu = _closure1_slot6;
            mike = {};
            options = mike;
            report = copyDataProperties(options, golf);
            report = 'query';
            mike[report] = oscar;
            oscar = null;
            report = 'results';
            mike[report] = oscar;
            zulu[tango] = mike;
            return entity;
        }
    };
    mike['FORUM_SEARCH_QUERY_UPDATED'] = options;
    options = function(argFoo) { // Original name: handleForumSearchStart
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            zulu = _closure1_slot9;
            entity = undefined;
            zulu = zulu.bind(entity)(tango);
            if(zulu) { _fun00022_ip = 29; continue _fun00021 }
 25:
            zulu = false;
            return zulu;
 29:
            zulu = _closure1_slot10;
            golf = zulu.bind(entity)(tango);
            zulu = _closure1_slot6;
            mike = {};
            options = mike;
            report = copyDataProperties(options, golf);
            oscar = true;
            report = 'loading';
            mike[report] = oscar;
            zulu[tango] = mike;
            return entity;
        }
    };
    mike['FORUM_SEARCH_START'] = options;
    options = function(argFoo) { // Original name: handleForumSearchSuccess
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            oscar = entity.threadIds;
            zulu = _closure1_slot9;
            entity = undefined;
            zulu = zulu.bind(entity)(tango);
            if(zulu) { _fun00024_ip = 35; continue _fun00023 }
 31:
            zulu = false;
            return zulu;
 35:
            zulu = _closure1_slot10;
            options = zulu.bind(entity)(tango);
            zulu = _closure1_slot6;
            mike = {};
            verify = mike;
            report = copyDataProperties(verify, options);
            golf = false;
            report = 'loading';
            mike[report] = golf;
            report = 'results';
            mike[report] = oscar;
            zulu[tango] = mike;
            return entity;
        }
    };
    mike['FORUM_SEARCH_SUCCESS'] = options;
    options = function(argFoo) { // Original name: handleForumSearchFailure
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            zulu = _closure1_slot9;
            entity = undefined;
            zulu = zulu.bind(entity)(tango);
            if(zulu) { _fun00026_ip = 29; continue _fun00025 }
 25:
            zulu = false;
            return zulu;
 29:
            zulu = _closure1_slot10;
            golf = zulu.bind(entity)(tango);
            zulu = _closure1_slot6;
            mike = {};
            options = mike;
            report = copyDataProperties(options, golf);
            oscar = false;
            report = 'loading';
            mike[report] = oscar;
            oscar = new Array(0);
            report = 'results';
            mike[report] = oscar;
            zulu[tango] = mike;
            return entity;
        }
    };
    mike['FORUM_SEARCH_FAILURE'] = options;
    tango = function(argFoo) { // Original name: handleForumSearchClear
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            tango = _closure1_slot9;
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            entity = !tango;
            entity = !entity;
            if(!tango) { _fun00028_ip = 39; continue _fun00027 }
 31:
            mike = _closure1_slot6;
            entity = delete mike[zulu];
 39:
            return entity;
        }
    };
    mike['FORUM_SEARCH_CLEAR'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/ForumSearchStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();