// discord_common/js/packages/http-utils/V8APIError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
            _closure1_slot6 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo) { // Original name: convertStringArrayToSkemaErrorItems
        zuuluu = argFoo;
        michal = zuuluu.map;
        entity = function(argFoo) {
            entity = {};
            michal = 'UNKNOWN';
            entity['code'] = michal;
            michal = argFoo;
            entity['message'] = michal;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: convertOldFormError
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = {};
            michal = global;
            tangon = michal.Object;
            zuuluu = tangon.entries;
            michal = argFoo;
            offset = zuuluu.bind(tangon)(michal);
            michal = offset.length;
            verify = 0;
            michal = verify < michal;
            golfie = undefined;
            oscard = 2;
            report = 1;
            tangon = '_misc';
            zuuluu = 0;
            if(!michal) { _fun00004_ip = 131; continue _fun00003 }
 55:
            yankee = offset[zuuluu];
            michal = _closure1_slot5;
            michal = michal.bind(golfie)(yankee, oscard);
            yankee = michal[verify];
            foxtra = michal[report];
            if(!(tangon === yankee)) { _fun00004_ip = 98; continue _fun00003 }
 81:
            michal = _closure1_slot7;
            michal = michal.bind(golfie)(foxtra);
            entity['_errors'] = michal;
            _fun00004_ip = 119; continue _fun00003;
 98:
            michal = {};
            romeon = _closure1_slot7;
            romeon = romeon.bind(golfie)(foxtra);
            michal['_errors'] = romeon;
            entity[yankee] = michal;
 119:
            zuuluu = zuuluu + 1;
            michal = offset.length;
            if(zuuluu < michal) { _fun00004_ip = 55; continue _fun00003 }
 131:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    report = global;
    verify = report.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    golfie = option.bind(entity)(tangon);
    tangon = 6;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = {};
    option = 'hcaptcha';
    tangon['HCAPTCHA'] = option;
    option = 'recaptcha';
    tangon['RECAPTCHA'] = option;
    option = 'recaptcha_enterprise';
    tangon['RECAPTCHA_ENTERPRISE'] = option;
    report = report.Error;
    report = golfie.bind(entity)(report);
    michal = function(argFoo) {
        tangon = function(argFoo, argBar) { // Original name: APIError
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                entity = arguments[2];
                yankee = this;
                offset = undefined;
                if(!(entity === offset)) { _fun00006_ip = 21; continue _fun00005 }
 15:
                entity = 'An unexpected error occurred.';
 21:
                zuuluu = _closure1_slot0;
                option = _closure2_slot0;
                zuuluu = zuuluu.bind(offset)(yankee, option);
                tangon = 'string';
                zuuluu = typeof michal;
                if(!(tangon !== zuuluu)) { _fun00006_ip = 356; continue _fun00005 }
 55:
                zuuluu = michal.body;
                tangon = null;
                if(!(tangon != zuuluu)) { _fun00006_ip = 340; continue _fun00005 }
 69:
                golfie = michal.body;
                zuuluu = michal.body;
                zuuluu = zuuluu.message;
                if(!(tangon != zuuluu)) { _fun00006_ip = 218; continue _fun00005 }
 91:
                zuuluu = global;
                verify = zuuluu.Array;
                oscard = verify.isArray;
                report = michal.body;
                report = report.message;
                report = oscard.bind(verify)(report);
                if(report) { _fun00006_ip = 218; continue _fun00005 }
 122:
                report = michal.body;
                report = report.code;
                if(!(tangon != report)) { _fun00006_ip = 165; continue _fun00005 }
 136:
                oscard = zuuluu.Array;
                report = oscard.isArray;
                zuuluu = michal.body;
                zuuluu = zuuluu.code;
                zuuluu = report.bind(oscard)(zuuluu);
                if(zuuluu) { _fun00006_ip = 218; continue _fun00005 }
 165:
                zuuluu = {};
                report = golfie.message;
                zuuluu['message'] = report;
                report = golfie.code;
                zuuluu['code'] = report;
                report = golfie.retry_after;
                zuuluu['retryAfter'] = report;
                report = golfie.errors;
                zuuluu['errors'] = report;
                report = michal.status;
                zuuluu['status'] = report;
                _fun00006_ip = 338; continue _fun00005;
 218:
                if(!(tangon != golfie)) { _fun00006_ip = 233; continue _fun00005 }
 222:
                tangon = 'captcha_key';
                tangon = tangon in golfie;
                if(tangon) { _fun00006_ip = 270; continue _fun00005 }
 233:
                tangon = {};
                report = michal.status;
                tangon['status'] = report;
                report = 50035;
                tangon['code'] = report;
                report = _closure1_slot8;
                report = report.bind(offset)(golfie);
                tangon['errors'] = report;
                _fun00006_ip = 335; continue _fun00005;
 270:
                report = {};
                oscard = -1;
                report['code'] = oscard;
                report['captchaFields'] = golfie;
                oscard = michal.status;
                report['status'] = oscard;
                oscard = golfie.captcha_key;
                oscard = oscard.length;
                verify = 0;
                foxtra = oscard > verify;
                oscard = undefined;
                if(!foxtra) { _fun00006_ip = 328; continue _fun00005 }
 318:
                golfie = golfie.captcha_key;
                oscard = golfie[verify];
 328:
                report['message'] = oscard;
                tangon = report;
 335:
                zuuluu = tangon;
 338:
                _fun00006_ip = 372; continue _fun00005;
 340:
                tangon = {};
                report = michal.status;
                tangon['status'] = report;
                zuuluu = tangon;
                _fun00006_ip = 372; continue _fun00005;
 356:
                tangon = {};
                tangon['message'] = michal;
                report = argBar;
                tangon['code'] = report;
                zuuluu = tangon;
 372:
                foxtra = zuuluu.message;
                verify = zuuluu.code;
                golfie = zuuluu.retryAfter;
                oscard = zuuluu.errors;
                report = zuuluu.status;
                zuuluu = zuuluu.captchaFields;
                tangon = null;
                if(!(tangon != foxtra)) { _fun00006_ip = 414; continue _fun00005 }
 411:
                entity = foxtra;
 414:
                sizing = new Array(1);
                sizing[0] = entity;
                entity = _closure1_slot3;
                kiloes = entity.bind(offset)(option);
                option = _closure1_slot2;
                entity = _closure1_slot6;
                entity = entity.bind(offset)();
                if(entity) { _fun00006_ip = 459; continue _fun00005 }
 446:
                entity = kiloes.apply;
                entity = entity.bind(kiloes)(yankee, sizing);
                _fun00006_ip = 493; continue _fun00005;
 459:
                foxtra = global;
                backup = foxtra.Reflect;
                foxtra = backup.construct;
                romeon = _closure1_slot3;
                romeon = romeon.bind(offset)(yankee);
                romeon = romeon.constructor;
                entity = foxtra.bind(backup)(kiloes, sizing, romeon);
 493:
                entity = option.bind(offset)(yankee, entity);
                offset = tangon != verify;
                option = -1;
                if(!offset) { _fun00006_ip = 515; continue _fun00005 }
 512:
                option = verify;
 515:
                entity['code'] = option;
                entity['retryAfter'] = golfie;
                entity['errors'] = oscard;
                entity['status'] = report;
                if(!(tangon == zuuluu)) { _fun00006_ip = 545; continue _fun00005 }
 543:
                zuuluu = {};
 545:
                entity['captchaFields'] = zuuluu;
                entity['cause'] = michal;
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
        entity = 'hasFieldErrors';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                zuuluu = michal.errors;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00008_ip = 53; continue _fun00007 }
 18:
                zuuluu = global;
                tangon = zuuluu.Object;
                zuuluu = tangon.keys;
                michal = michal.errors;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.length;
                michal = 0;
                entity = zuuluu > michal;
 53:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'getFieldErrors';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = argFoo;
                zuuluu = 'string';
                entity = typeof michal;
                oscard = michal;
                if(!(zuuluu === entity)) { _fun00010_ip = 28; continue _fun00009 }
 17:
                entity = new Array(1);
                entity[0] = michal;
                oscard = entity;
 28:
                entity = this;
                golfie = entity.errors;
                entity = oscard.length;
                report = 0;
                michal = golfie;
                if(!(entity > report)) { _fun00010_ip = 110; continue _fun00009 }
 51:
                tangon = null;
                zuuluu = 1;
                entity = golfie;
                michal = entity;
                if(!(tangon != michal)) { _fun00010_ip = 110; continue _fun00009 }
 66:
                golfie = oscard[report];
                golfie = entity[golfie];
                option = oscard.splice;
                option = option.bind(oscard)(zuuluu);
                verify = option.length;
                michal = golfie;
                if(!(verify > report)) { _fun00010_ip = 110; continue _fun00009 }
 97:
                oscard = option;
                entity = golfie;
                michal = entity;
                if(tangon != michal) { _fun00010_ip = 66; continue _fun00009 }
 110:
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00010_ip = 127; continue _fun00009 }
 121:
                entity = michal._errors;
 127:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getAllFieldErrors';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.getAllFieldErrorsUnder;
            entity = zuuluu.errors;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getAllFieldErrorsUnder';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                entity = {};
                var _closure3_slot1 = entity;
                oscard = null;
                golfie = oscard == report;
                zuuluu = undefined;
                tangon = undefined;
                if(golfie) { _fun00012_ip = 37; continue _fun00011 }
 31:
                tangon = report._errors;
 37:
                oscard = oscard != tangon;
                if(!oscard) { _fun00012_ip = 55; continue _fun00011 }
 44:
                option = tangon.length;
                golfie = 0;
                oscard = option > golfie;
 55:
                if(!oscard) { _fun00012_ip = 64; continue _fun00011 }
 58:
                entity['__root_errors'] = tangon;
 64:
                if(!(zuuluu !== report)) { _fun00012_ip = 102; continue _fun00011 }
 68:
                zuuluu = global;
                tangon = zuuluu.Object;
                zuuluu = tangon.entries;
                tangon = zuuluu.bind(tangon)(report);
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        oscard = argFoo;
                        zuuluu = oscard[Symbol.iterator];
                        oscard = zuuluu().next;
                        golfie = oscard().value;
                        tangon = zuuluu;
                        entity = undefined;
                        report = tangon === entity;
                        tangon = undefined;
                        if(report) { _fun00014_ip = 29; continue _fun00013 }
 26:
                        tangon = golfie;
 29:
                        var _closure4_slot0 = tangon;
                        golfie = undefined;
                        if(report) { _fun00014_ip = 63; continue _fun00013 }
 38:
                        option = oscard().value;
                        oscard = zuuluu;
                        oscard = oscard === entity;
                        golfie = undefined;
                        report = oscard;
                        if(oscard) { _fun00014_ip = 63; continue _fun00013 }
 57:
                        golfie = option;
                        report = oscard;
 63:
                        if(report) { _fun00014_ip = 69; continue _fun00013 }
 66:
                        zuuluu.return();
 69:
                        zuuluu = '_errors';
                        if(!(zuuluu !== tangon)) { _fun00014_ip = 129; continue _fun00013 }
 77:
                        zuuluu = global;
                        report = zuuluu.Object;
                        tangon = report.entries;
                        oscard = _closure3_slot0;
                        zuuluu = oscard.getAllFieldErrorsUnder;
                        zuuluu = zuuluu.bind(oscard)(golfie);
                        tangon = tangon.bind(report)(zuuluu);
                        zuuluu = tangon.forEach;
                        michal = function(argFoo) {
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                report = argFoo;
                                michal = report[Symbol.iterator];
                                report = michal().next;
                                tangon = report().value;
                                zuuluu = michal;
                                entity = undefined;
                                zuuluu = zuuluu === entity;
                                option = undefined;
                                if(zuuluu) { _fun00016_ip = 27; continue _fun00015 }
 24:
                                option = tangon;
 27:
                                tangon = undefined;
                                if(zuuluu) { _fun00016_ip = 57; continue _fun00015 }
 32:
                                oscard = report().value;
                                report = michal;
                                report = report === entity;
                                tangon = undefined;
                                zuuluu = report;
                                if(report) { _fun00016_ip = 57; continue _fun00015 }
 51:
                                tangon = oscard;
                                zuuluu = report;
 57:
                                if(zuuluu) { _fun00016_ip = 63; continue _fun00015 }
 60:
                                michal.return();
 63:
                                michal = '__root_errors';
                                if(!(option !== michal)) { _fun00016_ip = 119; continue _fun00015 }
 71:
                                zuuluu = _closure3_slot1;
                                golfie = _closure4_slot0;
                                michal = global;
                                michal = michal.HermesInternal;
                                oscard = michal.concat;
                                report = '';
                                michal = '.';
                                michal = oscard.bind(report)(golfie, michal, option);
                                zuuluu[michal] = tangon;
                                _fun00016_ip = 137; continue _fun00015;
 119:
                                zuuluu = _closure3_slot1;
                                michal = _closure4_slot0;
                                zuuluu[michal] = tangon;
 137:
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(tangon)(michal);
 129:
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
 102:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getFirstFieldErrorMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getFieldErrors;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                tangon = null;
                michal = tangon == zuuluu;
                entity = null;
                if(michal) { _fun00018_ip = 56; continue _fun00017 }
 28:
                report = zuuluu.length;
                michal = 1;
                michal = report < michal;
                entity = null;
                if(michal) { _fun00018_ip = 56; continue _fun00017 }
 45:
                michal = 0;
                michal = zuuluu[michal];
                entity = michal.message;
 56:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getAnyErrorMessage';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = this;
                entity = michal.getAnyErrorMessageAndField;
                tangon = entity.bind(michal)();
                zuuluu = null;
                report = zuuluu == tangon;
                entity = undefined;
                if(report) { _fun00020_ip = 29; continue _fun00019 }
 24:
                entity = tangon.error;
 29:
                if(!(zuuluu == entity)) { _fun00020_ip = 38; continue _fun00019 }
 33:
                entity = michal.message;
 38:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getAnyErrorMessageAndField';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = this;
                golfie = entity.errors;
                entity = null;
                michal = entity != golfie;
                oscard = global;
                zuuluu = 0;
                report = null;
                if(!michal) { _fun00022_ip = 68; continue _fun00021 }
 24:
                option = golfie._errors;
                michal = golfie;
                tangon = report;
                if(!(entity == option)) { _fun00022_ip = 70; continue _fun00021 }
 40:
                verify = oscard.Object;
                option = verify.keys;
                option = option.bind(verify)(michal);
                report = option[zuuluu];
                golfie = michal[report];
                if(entity != golfie) { _fun00022_ip = 24; continue _fun00021 }
 68:
                return entity;
 70:
                entity = {};
                entity['fieldName'] = tangon;
                michal = michal._errors;
                michal = michal[zuuluu];
                michal = michal.message;
                entity['error'] = michal;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(report);
    report = 7;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = '../discord_common/js/packages/http-utils/V8APIError.tsx';
    report = oscard.bind(golfie)(report);
    report = 50035;
    zuuluu['INVALID_FORM_BODY_ERROR_CODE'] = report;
    report = '__root_errors';
    zuuluu['ROOT_FORM_ERRORS_KEY'] = report;
    zuuluu['CaptchaTypes'] = tangon;
    zuuluu['APIError'] = michal;
    return entity;
})();