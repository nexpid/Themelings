// app/modules/friend_suggestions/FriendSuggestionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
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
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: transformSuggestion
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.contact_names;
            golfie = null;
            if(!(golfie != entity)) { _fun00004_ip = 33; continue _fun00003 }
 15:
            entity = zuuluu.contact_names;
            entity = entity.length;
            oscard = 2;
            if(!(!(entity >= oscard))) { _fun00004_ip = 39; continue _fun00003 }
 33:
            michal = new Array(0);
            _fun00004_ip = 58; continue _fun00003;
 39:
            report = zuuluu.contact_names;
            tangon = report.slice;
            entity = 0;
            michal = tangon.bind(report)(entity, oscard);
 58:
            entity = {};
            tangon = zuuluu.suggested_user;
            tangon = tangon.id;
            entity['key'] = tangon;
            option = _closure1_slot0;
            oscard = _closure1_slot1;
            report = 7;
            oscard = oscard[report];
            report = undefined;
            verify = option.bind(report)(oscard);
            option = verify.first;
            oscard = zuuluu.reasons;
            oscard = option.bind(verify)(oscard);
            golfie = golfie == oscard;
            if(golfie) { _fun00004_ip = 129; continue _fun00003 }
 124:
            report = oscard.name;
 129:
            entity['name'] = report;
            oscard = _closure1_slot7;
            yankee = zuuluu.suggested_user;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            romeon = report;
            tangon = new romeon[oscard](yankee, offset);
            tangon = tangon instanceof Object ? tangon : report;
            entity['user'] = tangon;
            zuuluu = zuuluu.mutual_friends_count;
            entity['mutualFriendsCount'] = zuuluu;
            entity['contactNames'] = michal;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    michal = function(argFoo) { // Original name: transformFriendSuggestions
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 7;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.chain;
        michal = argFoo;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.map;
        michal = function(argFoo) {
            zuuluu = _closure1_slot14;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.keyBy;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.key;
            return entity;
        };
        michal = michal.bind(zuuluu)(entity);
        entity = michal.value;
        entity = entity.bind(michal)();
        return entity;
    };
    var _closure1_slot15 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    tangon = 0;
    option = oscard[tangon];
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
    option = {};
    var _closure1_slot9 = option;
    var _closure1_slot10 = tangon;
    tangon = false;
    var _closure1_slot11 = tangon;
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    option = tangon.Store;
    tangon = function(argFoo) {
        tangon = function() { // Original name: FriendSuggestionStore
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot13;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00006_ip = 69; continue _fun00005 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00006_ip = 105; continue _fun00005;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
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
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
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
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'getSuggestionCount';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getSuggestions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.entries;
            entity = _closure1_slot9;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    entity = tangon().value;
                    entity = michal;
                    oscard = undefined;
                    zuuluu = entity === oscard;
                    entity = undefined;
                    if(zuuluu) { _fun00008_ip = 49; continue _fun00007 }
 24:
                    report = tangon().value;
                    tangon = michal;
                    tangon = tangon === oscard;
                    entity = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00008_ip = 49; continue _fun00007 }
 43:
                    entity = report;
                    zuuluu = tangon;
 49:
                    if(zuuluu) { _fun00008_ip = 55; continue _fun00007 }
 52:
                    michal.return();
 55:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getSuggestion';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            michal = _closure1_slot9;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = tangon.bind(entity)(option);
    tangon = 'FriendSuggestionStore';
    option['displayName'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    romeon = golfie.bind(entity)(tangon);
    tangon = {};
    verify = function(argFoo) { // Original name: handleConnectionOpen
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = {};
            _closure1_slot9 = michal;
            michal = argFoo;
            zuuluu = michal.friendSuggestionCount;
            _closure1_slot10 = zuuluu;
            michal = 0;
            if(!(!(zuuluu > michal))) { _fun00010_ip = 56; continue _fun00009 }
 28:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 9;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.bind(zuuluu)();
            _fun00010_ip = 121; continue _fun00009;
 56:
            michal = true;
            _closure1_slot12 = michal;
            tangon = _closure1_slot11;
            zuuluu = !tangon;
            if(tangon) { _fun00010_ip = 76; continue _fun00009 }
 72:
            zuuluu = _closure1_slot12;
 76:
            if(!zuuluu) { _fun00010_ip = 121; continue _fun00009 }
 79:
            _closure1_slot11 = michal;
            michal = false;
            _closure1_slot12 = michal;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.fetch;
            entity = entity.bind(michal)();
 121:
            entity = undefined;
            return entity;
        }
    };
    tangon['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleFriendSuggestionCreate
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot14;
            entity = argFoo;
            michal = entity.suggestion;
            entity = undefined;
            report = tangon.bind(entity)(michal);
            tangon = _closure1_slot9;
            michal = report.key;
            tangon = tangon[michal];
            michal = null;
            if(!(michal == tangon)) { _fun00012_ip = 82; continue _fun00011 }
 42:
            michal = _closure1_slot10;
            michal = michal + 1;
            _closure1_slot10 = michal;
            michal = {};
            oscard = _closure1_slot9;
            golfie = michal;
            tangon = copyDataProperties(golfie, oscard);
            tangon = report.key;
            michal[tangon] = report;
            _closure1_slot9 = michal;
            return entity;
 82:
            entity = false;
            return entity;
        }
    };
    tangon['FRIEND_SUGGESTION_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleFriendSuggestionDelete
        entity = global;
        report = entity.Math;
        tangon = report.max;
        michal = _closure1_slot10;
        zuuluu = michal - 1;
        _closure1_slot10 = zuuluu;
        michal = 0;
        michal = tangon.bind(report)(michal, zuuluu);
        _closure1_slot10 = michal;
        michal = _closure1_slot9;
        entity = argFoo;
        entity = entity.suggestedUserId;
        entity = delete michal[entity];
        entity = undefined;
        return entity;
    };
    tangon['FRIEND_SUGGESTION_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleLoadFriendSuggestionsSuccess
        entity = false;
        _closure1_slot11 = entity;
        tangon = _closure1_slot15;
        entity = argFoo;
        michal = entity.suggestions;
        entity = undefined;
        michal = tangon.bind(entity)(michal);
        _closure1_slot9 = michal;
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        michal = 7;
        michal = report[michal];
        report = tangon.bind(entity)(michal);
        tangon = report.keys;
        michal = _closure1_slot9;
        michal = tangon.bind(report)(michal);
        michal = michal.length;
        _closure1_slot10 = michal;
        return entity;
    };
    tangon['LOAD_FRIEND_SUGGESTIONS_SUCCESS'] = verify;
    report = function() { // Original name: handleLoadFriendSuggestionsFailure
        entity = false;
        _closure1_slot11 = entity;
        entity = {};
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    tangon['LOAD_FRIEND_SUGGESTIONS_FAILURE'] = report;
    report = option.prototype;
    report = Object.create(report, {constructor: {value: option}});
    foxtra = report;
    yankee = tangon;
    tangon = new foxtra[option](romeon, yankee, offset);
    tangon = tangon instanceof Object ? tangon : report;
    report = 12;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/friend_suggestions/FriendSuggestionStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['transformFriendSuggestions'] = michal;
    return entity;
})();