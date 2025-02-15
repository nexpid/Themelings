// app/modules/friend_suggestions/FriendSuggestionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
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
            report = _closure1_slot5;
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
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: transformSuggestion
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            entity = zulu.contact_names;
            golf = null;
            if(!(golf != entity)) { _fun00006_ip = 33; continue _fun00005 }
 15:
            entity = zulu.contact_names;
            entity = entity.length;
            oscar = 2;
            if(!(!(entity >= oscar))) { _fun00006_ip = 39; continue _fun00005 }
 33:
            mike = new Array(0);
            _fun00006_ip = 58; continue _fun00005;
 39:
            report = zulu.contact_names;
            tango = report.slice;
            entity = 0;
            mike = tango.bind(report)(entity, oscar);
 58:
            entity = {};
            tango = zulu.suggested_user;
            tango = tango.id;
            entity['key'] = tango;
            options = _closure1_slot0;
            oscar = _closure1_slot1;
            report = 7;
            oscar = oscar[report];
            report = undefined;
            verify = options.bind(report)(oscar);
            options = verify.first;
            oscar = zulu.reasons;
            oscar = options.bind(verify)(oscar);
            golf = golf == oscar;
            if(golf) { _fun00006_ip = 129; continue _fun00005 }
 124:
            report = oscar.name;
 129:
            entity['name'] = report;
            oscar = _closure1_slot7;
            yankee = zulu.suggested_user;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            romeo = report;
            tango = new romeo[oscar](yankee, offset);
            tango = tango instanceof Object ? tango : report;
            entity['user'] = tango;
            zulu = zulu.mutual_friends_count;
            entity['mutualFriendsCount'] = zulu;
            entity['contactNames'] = mike;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    mike = function(argFoo) { // Original name: transformFriendSuggestions
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 7;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.chain;
        mike = argFoo;
        tango = zulu.bind(tango)(mike);
        zulu = tango.map;
        mike = function(argFoo) {
            zulu = _closure1_slot15;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.keyBy;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.key;
            return entity;
        };
        mike = mike.bind(zulu)(entity);
        entity = mike.value;
        entity = entity.bind(mike)();
        return entity;
    };
    var _closure1_slot16 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    tango = 0;
    options = oscar[tango];
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
    options = {};
    var _closure1_slot9 = options;
    var _closure1_slot10 = tango;
    tango = false;
    var _closure1_slot11 = tango;
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    options = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: FriendSuggestionStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot13;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
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
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getSuggestionCount';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getSuggestions';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = global;
            zulu = entity.Object;
            mike = zulu.entries;
            entity = _closure1_slot9;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = argFoo;
                    mike = tango[Symbol.iterator];
                    tango = mike().next;
                    entity = tango().value;
                    entity = mike;
                    oscar = undefined;
                    zulu = entity === oscar;
                    entity = undefined;
                    if(zulu) { _fun00008_ip = 49; continue _fun00007 }
 24:
                    report = tango().value;
                    tango = mike;
                    tango = tango === oscar;
                    entity = undefined;
                    zulu = tango;
                    if(tango) { _fun00008_ip = 49; continue _fun00007 }
 43:
                    entity = report;
                    zulu = tango;
 49:
                    if(zulu) { _fun00008_ip = 55; continue _fun00007 }
 52:
                    mike.return();
 55:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getSuggestion';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = _closure1_slot9;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = tango.bind(entity)(options);
    tango = 'FriendSuggestionStore';
    options['displayName'] = tango;
    tango = 11;
    tango = oscar[tango];
    romeo = golf.bind(entity)(tango);
    tango = {};
    verify = function(argFoo) { // Original name: handleConnectionOpen
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = {};
            _closure1_slot9 = mike;
            mike = argFoo;
            zulu = mike.friendSuggestionCount;
            _closure1_slot10 = zulu;
            mike = 0;
            if(!(!(zulu > mike))) { _fun00010_ip = 56; continue _fun00009 }
 28:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 9;
            mike = zulu[mike];
            zulu = undefined;
            mike = tango.bind(zulu)(mike);
            mike = mike.bind(zulu)();
            _fun00010_ip = 121; continue _fun00009;
 56:
            mike = true;
            _closure1_slot12 = mike;
            tango = _closure1_slot11;
            zulu = !tango;
            if(tango) { _fun00010_ip = 76; continue _fun00009 }
 72:
            zulu = _closure1_slot12;
 76:
            if(!zulu) { _fun00010_ip = 121; continue _fun00009 }
 79:
            _closure1_slot11 = mike;
            mike = false;
            _closure1_slot12 = mike;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.fetch;
            entity = entity.bind(mike)();
 121:
            entity = undefined;
            return entity;
        }
    };
    tango['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleFriendSuggestionCreate
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = _closure1_slot15;
            entity = argFoo;
            mike = entity.suggestion;
            entity = undefined;
            report = tango.bind(entity)(mike);
            tango = _closure1_slot9;
            mike = report.key;
            tango = tango[mike];
            mike = null;
            if(!(mike == tango)) { _fun00012_ip = 82; continue _fun00011 }
 42:
            mike = _closure1_slot10;
            mike = mike + 1;
            _closure1_slot10 = mike;
            mike = {};
            oscar = _closure1_slot9;
            golf = mike;
            tango = copyDataProperties(golf, oscar);
            tango = report.key;
            mike[tango] = report;
            _closure1_slot9 = mike;
            return entity;
 82:
            entity = false;
            return entity;
        }
    };
    tango['FRIEND_SUGGESTION_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleFriendSuggestionDelete
        entity = global;
        report = entity.Math;
        tango = report.max;
        mike = _closure1_slot10;
        zulu = mike - 1;
        _closure1_slot10 = zulu;
        mike = 0;
        mike = tango.bind(report)(mike, zulu);
        _closure1_slot10 = mike;
        mike = _closure1_slot9;
        entity = argFoo;
        entity = entity.suggestedUserId;
        entity = delete mike[entity];
        entity = undefined;
        return entity;
    };
    tango['FRIEND_SUGGESTION_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleLoadFriendSuggestionsSuccess
        entity = false;
        _closure1_slot11 = entity;
        tango = _closure1_slot16;
        entity = argFoo;
        mike = entity.suggestions;
        entity = undefined;
        mike = tango.bind(entity)(mike);
        _closure1_slot9 = mike;
        tango = _closure1_slot0;
        report = _closure1_slot1;
        mike = 7;
        mike = report[mike];
        report = tango.bind(entity)(mike);
        tango = report.keys;
        mike = _closure1_slot9;
        mike = tango.bind(report)(mike);
        mike = mike.length;
        _closure1_slot10 = mike;
        return entity;
    };
    tango['LOAD_FRIEND_SUGGESTIONS_SUCCESS'] = verify;
    report = function() { // Original name: handleLoadFriendSuggestionsFailure
        entity = false;
        _closure1_slot11 = entity;
        entity = {};
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    tango['LOAD_FRIEND_SUGGESTIONS_FAILURE'] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    foxtrot = report;
    yankee = tango;
    tango = new foxtrot[options](romeo, yankee, offset);
    tango = tango instanceof Object ? tango : report;
    report = 12;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/friend_suggestions/FriendSuggestionStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['transformFriendSuggestions'] = mike;
    return entity;
})();