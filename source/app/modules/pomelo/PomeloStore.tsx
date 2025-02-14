// app/modules/pomelo/PomeloStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun94268: for(var _fun94268_ip = 0; ; ) switch(_fun94268_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun94268_ip = 51; continue _fun94268 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun94268_ip = 92; continue _fun94268;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun94268_ip = 71; continue _fun94268 }
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
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun94269: for(var _fun94269_ip = 0; ; ) switch(_fun94269_ip) {
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
            _fun94269_ip = 76; continue _fun94269;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
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
    var _closure1_slot2 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = {'taken': null, 'error': null, 'rateLimited': true};
    mike['error'] = entity;
    var _closure1_slot7 = mike;
    mike = {'validations': null, 'currentUsernameInvalid': false, 'retryAfterTime': null};
    golf = 5;
    golf = report[golf];
    verify = oscar.bind(entity)(golf);
    golf = verify.prototype;
    options = Object.create(golf, {constructor: {value: verify}});
    backup = {'max': 100, 'maxAge': 60000};
    kilo = options;
    golf = new kilo[verify](backup, foxtrot);
    golf = golf instanceof Object ? golf : options;
    mike['validations'] = golf;
    verify = false;
    golf = {};
    options = {'suggestion': null, 'fetched': false, 'usernameSuggestionLoading': false};
    offset = {};
    offset['username'] = entity;
    options['suggestion'] = offset;
    golf['migration'] = options;
    options = {};
    offset = {};
    offset['username'] = entity;
    options['suggestion'] = offset;
    options['source'] = entity;
    options['fetched'] = verify;
    golf['registration'] = options;
    mike['suggestions'] = golf;
    var _closure1_slot8 = mike;
    mike = 7;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: PomeloStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot9;
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
        entity = 'isRateLimited';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun94274: for(var _fun94274_ip = 0; ; ) switch(_fun94274_ip) {
 0:
                entity = _closure1_slot8;
                zulu = entity.retryAfterTime;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun94274_ip = 53; continue _fun94274 }
 22:
                zulu = global;
                tango = zulu.Date;
                zulu = tango.now;
                zulu = zulu.bind(tango)();
                mike = _closure1_slot8;
                mike = mike.retryAfterTime;
                entity = zulu < mike;
 53:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golf = 'validate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun94275: for(var _fun94275_ip = 0; ; ) switch(_fun94275_ip) {
 0:
                tango = this;
                entity = _closure1_slot8;
                report = entity.validations;
                zulu = report.get;
                entity = argFoo;
                zulu = zulu.bind(report)(entity);
                entity = tango.isRateLimited;
                entity = entity.bind(tango)();
                if(!entity) { _fun94275_ip = 57; continue _fun94275 }
 42:
                entity = null;
                if(!(entity != zulu)) { _fun94275_ip = 92; continue _fun94275 }
 48:
                entity = zulu.rateLimited;
                if(entity) { _fun94275_ip = 92; continue _fun94275 }
 57:
                entity = tango.isRateLimited;
                entity = entity.bind(tango)();
                if(entity) { _fun94275_ip = 87; continue _fun94275 }
 70:
                entity = null;
                if(!(entity != zulu)) { _fun94275_ip = 87; continue _fun94275 }
 76:
                tango = zulu.rateLimited;
                entity = undefined;
                if(tango) { _fun94275_ip = 90; continue _fun94275 }
 87:
                entity = zulu;
 90:
                _fun94275_ip = 96; continue _fun94275;
 92:
                entity = _closure1_slot7;
 96:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'registrationUsernameSuggestion';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.suggestions;
            entity = entity.registration;
            entity = entity.suggestion;
            entity = entity.username;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'usernameSuggestion';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.suggestions;
            entity = entity.migration;
            entity = entity.suggestion;
            entity = entity.username;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'usernameSuggestionLoading';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.suggestions;
            entity = entity.migration;
            entity = entity.usernameSuggestionLoading;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'isCurrentUsernameInvalid';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.currentUsernameInvalid;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'wasRegistrationSuggestionFetched';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun94280: for(var _fun94280_ip = 0; ; ) switch(_fun94280_ip) {
 0:
                entity = _closure1_slot8;
                entity = entity.suggestions;
                entity = entity.registration;
                zulu = entity.source;
                entity = argFoo;
                entity = zulu === entity;
                if(!entity) { _fun94280_ip = 56; continue _fun94280 }
 34:
                mike = _closure1_slot8;
                mike = mike.suggestions;
                mike = mike.registration;
                entity = mike.fetched;
 56:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'wasSuggestionsFetched';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.suggestions;
            entity = entity.migration;
            entity = entity.fetched;
            return entity;
        };
        report['value'] = oscar;
        entity[7] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'PomeloStore';
    golf['displayName'] = mike;
    mike = 8;
    mike = report[mike];
    backup = oscar.bind(entity)(mike);
    mike = {};
    options = function(argFoo) { // Original name: handlePomeloAttemptSuccess
        entity = argFoo;
        tango = entity.username;
        report = entity.taken;
        entity = _closure1_slot8;
        zulu = entity.validations;
        mike = zulu.set;
        entity = {};
        entity['taken'] = report;
        entity = mike.bind(zulu)(tango, entity);
        entity = undefined;
        return entity;
    };
    mike['POMELO_ATTEMPT_SUCCESS'] = options;
    options = function(argFoo) { // Original name: handlePomeloAttemptFailure
        _fun94283: for(var _fun94283_ip = 0; ; ) switch(_fun94283_ip) {
 0:
            entity = argFoo;
            oscar = entity.username;
            options = entity.error;
            mike = entity.statusCode;
            tango = entity.retryAfter;
            entity = 429;
            if(!(entity !== mike)) { _fun94283_ip = 74; continue _fun94283 }
 35:
            entity = _closure1_slot8;
            zulu = entity.validations;
            mike = zulu.set;
            entity = {};
            report = null;
            entity['taken'] = report;
            entity['error'] = options;
            entity = mike.bind(zulu)(oscar, entity);
            _fun94283_ip = 172; continue _fun94283;
 74:
            mike = _closure1_slot8;
            report = mike.validations;
            zulu = report.set;
            mike = {'taken': null, 'error': null, 'rateLimited': true};
            golf = null;
            mike['error'] = options;
            options = golf != tango;
            golf = 7;
            if(!options) { _fun94283_ip = 127; continue _fun94283 }
 124:
            golf = tango;
 127:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            entity = 6;
            options = options[entity];
            entity = undefined;
            entity = verify.bind(entity)(options);
            entity = entity.Millis;
            entity = entity.SECOND;
            entity = golf * entity;
            entity = zulu.bind(report)(oscar, mike, entity);
 172:
            entity = null;
            if(!(entity != tango)) { _fun94283_ip = 250; continue _fun94283 }
 178:
            mike = _closure1_slot8;
            zulu = global;
            report = zulu.Date;
            zulu = report.now;
            zulu = zulu.bind(report)();
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            entity = 6;
            report = report[entity];
            entity = undefined;
            entity = oscar.bind(entity)(report);
            entity = entity.Millis;
            entity = entity.SECOND;
            entity = tango * entity;
            entity = zulu + entity;
            mike['retryAfterTime'] = entity;
 250:
            entity = undefined;
            return entity;
        }
    };
    mike['POMELO_ATTEMPT_FAILURE'] = options;
    options = function() { // Original name: handlePomeloSuggestionsReset
        mike = _closure1_slot8;
        report = mike.suggestions;
        zulu = {'suggestion': null, 'fetched': false, 'usernameSuggestionLoading': false};
        tango = {};
        entity = undefined;
        tango['username'] = entity;
        zulu['suggestion'] = tango;
        tango = false;
        report['migration'] = zulu;
        zulu = mike.suggestions;
        mike = {};
        report = {};
        report['username'] = entity;
        mike['suggestion'] = report;
        mike['source'] = entity;
        mike['fetched'] = tango;
        zulu['registration'] = mike;
        return entity;
    };
    mike['POMELO_SUGGESTIONS_RESET'] = options;
    options = function(argFoo) { // Original name: handlePomeloSuggestionsSuccess
        _fun94285: for(var _fun94285_ip = 0; ; ) switch(_fun94285_ip) {
 0:
            entity = argFoo;
            report = entity.suggestion;
            entity = _closure1_slot8;
            tango = entity.suggestions;
            entity = {'suggestion': null, 'fetched': true, 'usernameSuggestionLoading': false};
            entity['suggestion'] = report;
            zulu = true;
            tango['migration'] = entity;
            entity = null;
            oscar = entity == report;
            entity = undefined;
            tango = undefined;
            if(oscar) { _fun94285_ip = 71; continue _fun94285 }
 63:
            tango = report.invalid_current_username;
 71:
            if(!(zulu === tango)) { _fun94285_ip = 85; continue _fun94285 }
 75:
            mike = _closure1_slot8;
            mike['currentUsernameInvalid'] = zulu;
 85:
            return entity;
        }
    };
    mike['POMELO_SUGGESTIONS_SUCCESS'] = options;
    options = function(argFoo) { // Original name: handlePomeloSuggestionsFetch
        entity = argFoo;
        mike = entity.usernameSuggestionLoading;
        entity = _closure1_slot8;
        entity = entity.suggestions;
        entity = entity.migration;
        entity['usernameSuggestionLoading'] = mike;
        entity = undefined;
        return entity;
    };
    mike['POMELO_SUGGESTIONS_FETCH'] = options;
    tango = function(argFoo) { // Original name: handlePomeloRegistrationSuggestionsSuccess
        _fun94287: for(var _fun94287_ip = 0; ; ) switch(_fun94287_ip) {
 0:
            entity = argFoo;
            mike = entity.suggestion;
            report = entity.source;
            entity = _closure1_slot8;
            tango = entity.suggestions;
            entity = {};
            entity['suggestion'] = mike;
            entity['source'] = report;
            report = true;
            entity['fetched'] = report;
            tango['registration'] = entity;
            report = null;
            oscar = report == mike;
            entity = undefined;
            tango = undefined;
            if(oscar) { _fun94287_ip = 69; continue _fun94287 }
 64:
            tango = mike.username;
 69:
            if(!(report != tango)) { _fun94287_ip = 108; continue _fun94287 }
 73:
            zulu = _closure1_slot8;
            report = zulu.validations;
            tango = report.set;
            zulu = mike.username;
            mike = {};
            oscar = false;
            mike['taken'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 108:
            return entity;
        }
    };
    mike['POMELO_REGISTRATION_SUGGESTIONS_SUCCESS'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[golf](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/pomelo/PomeloStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();