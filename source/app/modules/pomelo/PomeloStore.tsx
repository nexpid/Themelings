// app/modules/pomelo/PomeloStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot10;
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
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot2 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = {'taken': null, 'error': null, 'rateLimited': true};
    michal['error'] = entity;
    var _closure1_slot7 = michal;
    michal = {'validations': null, 'currentUsernameInvalid': false, 'retryAfterTime': null};
    golfie = 5;
    golfie = report[golfie];
    verify = oscard.bind(entity)(golfie);
    golfie = verify.prototype;
    option = Object.create(golfie, {constructor: {value: verify}});
    backup = {'max': 100, 'maxAge': 60000};
    kiloes = option;
    golfie = new kiloes[verify](backup, foxtra);
    golfie = golfie instanceof Object ? golfie : option;
    michal['validations'] = golfie;
    verify = false;
    golfie = {};
    option = {'suggestion': null, 'fetched': false, 'usernameSuggestionLoading': false};
    offset = {};
    offset['username'] = entity;
    option['suggestion'] = offset;
    golfie['migration'] = option;
    option = {};
    offset = {};
    offset['username'] = entity;
    option['suggestion'] = offset;
    option['source'] = entity;
    option['fetched'] = verify;
    golfie['registration'] = option;
    michal['suggestions'] = golfie;
    var _closure1_slot8 = michal;
    michal = 7;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: PomeloStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot2;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot9;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'isRateLimited';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = _closure1_slot8;
                zuuluu = entity.retryAfterTime;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00006_ip = 53; continue _fun00005 }
 22:
                zuuluu = global;
                tangon = zuuluu.Date;
                zuuluu = tangon.now;
                zuuluu = zuuluu.bind(tangon)();
                michal = _closure1_slot8;
                michal = michal.retryAfterTime;
                entity = zuuluu < michal;
 53:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'validate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                entity = _closure1_slot8;
                report = entity.validations;
                zuuluu = report.get;
                entity = argFoo;
                zuuluu = zuuluu.bind(report)(entity);
                entity = tangon.isRateLimited;
                entity = entity.bind(tangon)();
                if(!entity) { _fun00008_ip = 57; continue _fun00007 }
 42:
                entity = null;
                if(!(entity != zuuluu)) { _fun00008_ip = 92; continue _fun00007 }
 48:
                entity = zuuluu.rateLimited;
                if(entity) { _fun00008_ip = 92; continue _fun00007 }
 57:
                entity = tangon.isRateLimited;
                entity = entity.bind(tangon)();
                if(entity) { _fun00008_ip = 87; continue _fun00007 }
 70:
                entity = null;
                if(!(entity != zuuluu)) { _fun00008_ip = 87; continue _fun00007 }
 76:
                tangon = zuuluu.rateLimited;
                entity = undefined;
                if(tangon) { _fun00008_ip = 90; continue _fun00007 }
 87:
                entity = zuuluu;
 90:
                _fun00008_ip = 96; continue _fun00007;
 92:
                entity = _closure1_slot7;
 96:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'registrationUsernameSuggestion';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.suggestions;
            entity = entity.registration;
            entity = entity.suggestion;
            entity = entity.username;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'usernameSuggestion';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.suggestions;
            entity = entity.migration;
            entity = entity.suggestion;
            entity = entity.username;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'usernameSuggestionLoading';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.suggestions;
            entity = entity.migration;
            entity = entity.usernameSuggestionLoading;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'isCurrentUsernameInvalid';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.currentUsernameInvalid;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'wasRegistrationSuggestionFetched';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = _closure1_slot8;
                entity = entity.suggestions;
                entity = entity.registration;
                zuuluu = entity.source;
                entity = argFoo;
                entity = zuuluu === entity;
                if(!entity) { _fun00010_ip = 56; continue _fun00009 }
 34:
                michal = _closure1_slot8;
                michal = michal.suggestions;
                michal = michal.registration;
                entity = michal.fetched;
 56:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'wasSuggestionsFetched';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.suggestions;
            entity = entity.migration;
            entity = entity.fetched;
            return entity;
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'PomeloStore';
    golfie['displayName'] = michal;
    michal = 8;
    michal = report[michal];
    backup = oscard.bind(entity)(michal);
    michal = {};
    option = function(argFoo) { // Original name: handlePomeloAttemptSuccess
        entity = argFoo;
        tangon = entity.username;
        report = entity.taken;
        entity = _closure1_slot8;
        zuuluu = entity.validations;
        michal = zuuluu.set;
        entity = {};
        entity['taken'] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        entity = undefined;
        return entity;
    };
    michal['POMELO_ATTEMPT_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handlePomeloAttemptFailure
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            oscard = entity.username;
            option = entity.error;
            michal = entity.statusCode;
            tangon = entity.retryAfter;
            entity = 429;
            if(!(entity !== michal)) { _fun00012_ip = 74; continue _fun00011 }
 35:
            entity = _closure1_slot8;
            zuuluu = entity.validations;
            michal = zuuluu.set;
            entity = {};
            report = null;
            entity['taken'] = report;
            entity['error'] = option;
            entity = michal.bind(zuuluu)(oscard, entity);
            _fun00012_ip = 168; continue _fun00011;
 74:
            michal = _closure1_slot8;
            report = michal.validations;
            zuuluu = report.set;
            michal = {'taken': null, 'error': null, 'rateLimited': true};
            golfie = null;
            michal['error'] = option;
            option = golfie != tangon;
            golfie = 7;
            if(!option) { _fun00012_ip = 123; continue _fun00011 }
 120:
            golfie = tangon;
 123:
            verify = _closure1_slot0;
            option = _closure1_slot1;
            entity = 6;
            option = option[entity];
            entity = undefined;
            entity = verify.bind(entity)(option);
            entity = entity.Millis;
            entity = entity.SECOND;
            entity = golfie * entity;
            entity = zuuluu.bind(report)(oscard, michal, entity);
 168:
            entity = null;
            if(!(entity != tangon)) { _fun00012_ip = 246; continue _fun00011 }
 174:
            michal = _closure1_slot8;
            zuuluu = global;
            report = zuuluu.Date;
            zuuluu = report.now;
            zuuluu = zuuluu.bind(report)();
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            entity = 6;
            report = report[entity];
            entity = undefined;
            entity = oscard.bind(entity)(report);
            entity = entity.Millis;
            entity = entity.SECOND;
            entity = tangon * entity;
            entity = zuuluu + entity;
            michal['retryAfterTime'] = entity;
 246:
            entity = undefined;
            return entity;
        }
    };
    michal['POMELO_ATTEMPT_FAILURE'] = option;
    option = function() { // Original name: handlePomeloSuggestionsReset
        michal = _closure1_slot8;
        report = michal.suggestions;
        zuuluu = {'suggestion': null, 'fetched': false, 'usernameSuggestionLoading': false};
        tangon = {};
        entity = undefined;
        tangon['username'] = entity;
        zuuluu['suggestion'] = tangon;
        tangon = false;
        report['migration'] = zuuluu;
        zuuluu = michal.suggestions;
        michal = {};
        report = {};
        report['username'] = entity;
        michal['suggestion'] = report;
        michal['source'] = entity;
        michal['fetched'] = tangon;
        zuuluu['registration'] = michal;
        return entity;
    };
    michal['POMELO_SUGGESTIONS_RESET'] = option;
    option = function(argFoo) { // Original name: handlePomeloSuggestionsSuccess
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            report = entity.suggestion;
            entity = _closure1_slot8;
            tangon = entity.suggestions;
            entity = {'suggestion': null, 'fetched': true, 'usernameSuggestionLoading': false};
            entity['suggestion'] = report;
            zuuluu = true;
            tangon['migration'] = entity;
            entity = null;
            oscard = entity == report;
            entity = undefined;
            tangon = undefined;
            if(oscard) { _fun00014_ip = 71; continue _fun00013 }
 63:
            tangon = report.invalid_current_username;
 71:
            if(!(zuuluu === tangon)) { _fun00014_ip = 85; continue _fun00013 }
 75:
            michal = _closure1_slot8;
            michal['currentUsernameInvalid'] = zuuluu;
 85:
            return entity;
        }
    };
    michal['POMELO_SUGGESTIONS_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handlePomeloSuggestionsFetch
        entity = argFoo;
        michal = entity.usernameSuggestionLoading;
        entity = _closure1_slot8;
        entity = entity.suggestions;
        entity = entity.migration;
        entity['usernameSuggestionLoading'] = michal;
        entity = undefined;
        return entity;
    };
    michal['POMELO_SUGGESTIONS_FETCH'] = option;
    tangon = function(argFoo) { // Original name: handlePomeloRegistrationSuggestionsSuccess
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            michal = entity.suggestion;
            report = entity.source;
            entity = _closure1_slot8;
            tangon = entity.suggestions;
            entity = {};
            entity['suggestion'] = michal;
            entity['source'] = report;
            report = true;
            entity['fetched'] = report;
            tangon['registration'] = entity;
            report = null;
            oscard = report == michal;
            entity = undefined;
            tangon = undefined;
            if(oscard) { _fun00016_ip = 69; continue _fun00015 }
 64:
            tangon = michal.username;
 69:
            if(!(report != tangon)) { _fun00016_ip = 108; continue _fun00015 }
 73:
            zuuluu = _closure1_slot8;
            report = zuuluu.validations;
            tangon = report.set;
            zuuluu = michal.username;
            michal = {};
            oscard = false;
            michal['taken'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 108:
            return entity;
        }
    };
    michal['POMELO_REGISTRATION_SUGGESTIONS_SUCCESS'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[golfie](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/pomelo/PomeloStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();