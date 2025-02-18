// discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function(argFoo, argBar) { // Original name: APIError
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                verify = arguments[2];
                zuuluu = this;
                entity = undefined;
                if(!(verify === entity)) { _fun00002_ip = 21; continue _fun00001 }
 15:
                verify = 'An unexpected error occurred.';
 21:
                tangon = _closure1_slot0;
                michal = _closure2_slot0;
                michal = tangon.bind(entity)(zuuluu, michal);
                tangon = 'string';
                michal = typeof report;
                if(!(tangon !== michal)) { _fun00002_ip = 302; continue _fun00001 }
 55:
                michal = report.body;
                golfie = null;
                if(!(golfie == michal)) { _fun00002_ip = 73; continue _fun00001 }
 66:
                michal = {};
                _fun00002_ip = 318; continue _fun00001;
 73:
                tangon = report.body;
                tangon = tangon.message;
                if(!(golfie != tangon)) { _fun00002_ip = 224; continue _fun00001 }
 90:
                tangon = global;
                offset = tangon.Array;
                option = offset.isArray;
                oscard = report.body;
                oscard = oscard.message;
                oscard = option.bind(offset)(oscard);
                if(oscard) { _fun00002_ip = 224; continue _fun00001 }
 121:
                oscard = report.body;
                oscard = oscard.code;
                if(!(golfie != oscard)) { _fun00002_ip = 164; continue _fun00001 }
 135:
                option = tangon.Array;
                oscard = option.isArray;
                tangon = report.body;
                tangon = tangon.code;
                tangon = oscard.bind(option)(tangon);
                if(tangon) { _fun00002_ip = 224; continue _fun00001 }
 164:
                tangon = {};
                oscard = report.body;
                oscard = oscard.message;
                tangon['message'] = oscard;
                oscard = report.body;
                oscard = oscard.code;
                tangon['code'] = oscard;
                oscard = report.body;
                oscard = oscard.retry_after;
                tangon['retryAfter'] = oscard;
                oscard = report.status;
                tangon['status'] = oscard;
                michal = tangon;
                _fun00002_ip = 318; continue _fun00001;
 224:
                oscard = report.body;
                tangon = golfie != oscard;
                offset = null;
                if(!tangon) { _fun00002_ip = 262; continue _fun00001 }
 238:
                tangon = global;
                option = tangon.Object;
                tangon = option.values;
                option = tangon.bind(option)(oscard);
                tangon = 0;
                offset = option[tangon];
 262:
                tangon = {};
                option = golfie != offset;
                golfie = undefined;
                if(!option) { _fun00002_ip = 279; continue _fun00001 }
 273:
                option = 0;
                golfie = offset[option];
 279:
                tangon['message'] = golfie;
                tangon['fields'] = oscard;
                oscard = report.status;
                tangon['status'] = oscard;
                michal = tangon;
                _fun00002_ip = 318; continue _fun00001;
 302:
                tangon = {};
                tangon['message'] = report;
                report = argBar;
                tangon['code'] = report;
                michal = tangon;
 318:
                report = michal.message;
                oscard = michal.code;
                golfie = michal.retryAfter;
                tangon = michal.fields;
                michal = michal.status;
                option = report;
                if(option) { _fun00002_ip = 354; continue _fun00001 }
 351:
                option = verify;
 354:
                zuuluu['message'] = option;
                zuuluu['retryAfter'] = golfie;
                if(oscard) { _fun00002_ip = 375; continue _fun00001 }
 369:
                oscard = -1;
 375:
                zuuluu['code'] = oscard;
                if(tangon) { _fun00002_ip = 386; continue _fun00001 }
 384:
                tangon = {};
 386:
                zuuluu['fields'] = tangon;
                zuuluu['status'] = michal;
                michal = global;
                michal = michal.Error;
                tangon = michal.prototype;
                tangon = Object.create(tangon, {constructor: {value: michal}});
                foxtra = tangon;
                romeon = report;
                michal = new foxtra[michal](romeon, yankee);
                michal = michal instanceof Object ? michal : tangon;
                zuuluu['error'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        report = 'getFieldMessage';
        entity['key'] = report;
        michal = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                entity = michal.fields;
                tangon = entity[zuuluu];
                entity = null;
                tangon = entity != tangon;
                if(!tangon) { _fun00004_ip = 41; continue _fun00003 }
 25:
                michal = michal.fields;
                zuuluu = michal[zuuluu];
                michal = 0;
                entity = zuuluu[michal];
 41:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['APIError'] = michal;
    return entity;
})();