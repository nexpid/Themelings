// app/modules/forums/ForumSearchStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
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
            _closure1_slot7 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: isForumLikeChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot5;
            michal = zuuluu.getChannel;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            entity = entity == zuuluu;
            if(entity) { _fun00004_ip = 42; continue _fun00003 }
 29:
            michal = zuuluu.isForumLikeChannel;
            michal = michal.bind(zuuluu)();
            entity = !michal;
 42:
            entity = !entity;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot6;
            entity = entity[zuuluu];
            tangon = null;
            if(!(tangon == entity)) { _fun00006_ip = 34; continue _fun00005 }
 20:
            entity = {'query': null, 'loading': false, 'results': null};
 34:
            michal = _closure1_slot6;
            michal[zuuluu] = entity;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = report[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = {};
    var _closure1_slot6 = michal;
    michal = 6;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ForumSearchStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot0;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot7;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
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
        michal = _closure1_slot1;
        report = {};
        entity = 'getSearchQuery';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = _closure1_slot6;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00010_ip = 30; continue _fun00009 }
 25:
                entity = michal.query;
 30:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'getSearchLoading';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = _closure1_slot6;
                entity = argFoo;
                zuuluu = michal[entity];
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00012_ip = 31; continue _fun00011 }
 25:
                michal = zuuluu.loading;
 31:
                entity = entity != michal;
                if(!entity) { _fun00012_ip = 41; continue _fun00011 }
 38:
                entity = michal;
 41:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getSearchResults';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure1_slot6;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00014_ip = 31; continue _fun00013 }
 25:
                entity = michal.results;
 31:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getHasSearchResults';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure1_slot6;
                entity = argFoo;
                michal = michal[entity];
                zuuluu = null;
                tangon = zuuluu == michal;
                entity = undefined;
                if(tangon) { _fun00016_ip = 31; continue _fun00015 }
 25:
                entity = michal.results;
 31:
                entity = zuuluu != entity;
                if(!entity) { _fun00016_ip = 55; continue _fun00015 }
 38:
                michal = michal.results;
                zuuluu = michal.length;
                michal = 0;
                entity = zuuluu > michal;
 55:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'ForumSearchStore';
    golfie['displayName'] = michal;
    michal = 7;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    option = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = option;
    option = function(argFoo) { // Original name: handleThreadDelete
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            var _closure2_slot0 = entity;
            tangon = entity.parent_id;
            entity = null;
            if(!(entity != tangon)) { _fun00018_ip = 108; continue _fun00017 }
 26:
            zuuluu = _closure1_slot6;
            oscard = zuuluu[tangon];
            if(!(entity != oscard)) { _fun00018_ip = 104; continue _fun00017 }
 41:
            zuuluu = _closure1_slot6;
            michal = {};
            offset = michal;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            option = oscard.results;
            golfie = entity == option;
            entity = undefined;
            oscard = undefined;
            if(golfie) { _fun00018_ip = 89; continue _fun00017 }
 74:
            golfie = option.filter;
            report = function(argFoo) {
                entity = _closure2_slot0;
                michal = entity.id;
                entity = argFoo;
                entity = michal !== entity;
                return entity;
            };
            oscard = golfie.bind(option)(report);
 89:
            report = 'results';
            michal[report] = oscard;
            zuuluu[tangon] = michal;
            return entity;
 104:
            entity = false;
            return entity;
 108:
            entity = false;
            return entity;
        }
    };
    michal['THREAD_DELETE'] = option;
    option = function(argFoo) { // Original name: handleChannelDelete
        entity = argFoo;
        entity = entity.channel;
        michal = _closure1_slot6;
        entity = entity.id;
        entity = delete michal[entity];
        return entity;
    };
    michal['CHANNEL_DELETE'] = option;
    option = function(argFoo) { // Original name: handleForumSearchQueryUpdated
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            oscard = entity.query;
            zuuluu = _closure1_slot8;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            if(zuuluu) { _fun00020_ip = 34; continue _fun00019 }
 30:
            zuuluu = false;
            return zuuluu;
 34:
            zuuluu = _closure1_slot9;
            golfie = zuuluu.bind(entity)(tangon);
            zuuluu = _closure1_slot6;
            michal = {};
            option = michal;
            report = copyDataProperties(option, golfie);
            report = 'query';
            michal[report] = oscard;
            oscard = null;
            report = 'results';
            michal[report] = oscard;
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    michal['FORUM_SEARCH_QUERY_UPDATED'] = option;
    option = function(argFoo) { // Original name: handleForumSearchStart
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            zuuluu = _closure1_slot8;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            if(zuuluu) { _fun00022_ip = 29; continue _fun00021 }
 25:
            zuuluu = false;
            return zuuluu;
 29:
            zuuluu = _closure1_slot9;
            golfie = zuuluu.bind(entity)(tangon);
            zuuluu = _closure1_slot6;
            michal = {};
            option = michal;
            report = copyDataProperties(option, golfie);
            oscard = true;
            report = 'loading';
            michal[report] = oscard;
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    michal['FORUM_SEARCH_START'] = option;
    option = function(argFoo) { // Original name: handleForumSearchSuccess
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            oscard = entity.threadIds;
            zuuluu = _closure1_slot8;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            if(zuuluu) { _fun00024_ip = 35; continue _fun00023 }
 31:
            zuuluu = false;
            return zuuluu;
 35:
            zuuluu = _closure1_slot9;
            option = zuuluu.bind(entity)(tangon);
            zuuluu = _closure1_slot6;
            michal = {};
            verify = michal;
            report = copyDataProperties(verify, option);
            golfie = false;
            report = 'loading';
            michal[report] = golfie;
            report = 'results';
            michal[report] = oscard;
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    michal['FORUM_SEARCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleForumSearchFailure
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            zuuluu = _closure1_slot8;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            if(zuuluu) { _fun00026_ip = 29; continue _fun00025 }
 25:
            zuuluu = false;
            return zuuluu;
 29:
            zuuluu = _closure1_slot9;
            golfie = zuuluu.bind(entity)(tangon);
            zuuluu = _closure1_slot6;
            michal = {};
            option = michal;
            report = copyDataProperties(option, golfie);
            oscard = false;
            report = 'loading';
            michal[report] = oscard;
            oscard = new Array(0);
            report = 'results';
            michal[report] = oscard;
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    michal['FORUM_SEARCH_FAILURE'] = option;
    tangon = function(argFoo) { // Original name: handleForumSearchClear
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            tangon = _closure1_slot8;
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            entity = !tangon;
            entity = !entity;
            if(!tangon) { _fun00028_ip = 39; continue _fun00027 }
 31:
            michal = _closure1_slot6;
            entity = delete michal[zuuluu];
 39:
            return entity;
        }
    };
    michal['FORUM_SEARCH_CLEAR'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    romeon = tangon;
    offset = michal;
    michal = new romeon[golfie](yankee, offset, verify);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/ForumSearchStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();