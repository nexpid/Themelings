// discord_common/js/packages/http-utils/V8APIError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun6647: for(var _fun6647_ip = 0; ; ) switch(_fun6647_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot7;
            entity = entity.bind(zulu)();
            if(entity) { _fun6647_ip = 51; continue _fun6647 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun6647_ip = 92; continue _fun6647;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun6647_ip = 71; continue _fun6647 }
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
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun6648: for(var _fun6648_ip = 0; ; ) switch(_fun6648_ip) {
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
            _fun6648_ip = 74; continue _fun6648;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: convertStringArrayToSkemaErrorItems
        zulu = argFoo;
        mike = zulu.map;
        entity = function(argFoo) {
            entity = {};
            mike = 'UNKNOWN';
            entity['code'] = mike;
            mike = argFoo;
            entity['message'] = mike;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: convertOldFormError
        _fun6653: for(var _fun6653_ip = 0; ; ) switch(_fun6653_ip) {
 0:
            entity = {};
            mike = global;
            tango = mike.Object;
            zulu = tango.entries;
            mike = argFoo;
            offset = zulu.bind(tango)(mike);
            mike = offset.length;
            verify = 0;
            mike = verify < mike;
            golf = undefined;
            oscar = 2;
            report = 1;
            tango = '_misc';
            zulu = 0;
            if(!mike) { _fun6653_ip = 131; continue _fun6653 }
 55:
            yankee = offset[zulu];
            mike = _closure1_slot5;
            mike = mike.bind(golf)(yankee, oscar);
            yankee = mike[verify];
            foxtrot = mike[report];
            if(!(tango === yankee)) { _fun6653_ip = 98; continue _fun6653 }
 81:
            mike = _closure1_slot8;
            mike = mike.bind(golf)(foxtrot);
            entity['_errors'] = mike;
            _fun6653_ip = 119; continue _fun6653;
 98:
            mike = {};
            romeo = _closure1_slot8;
            romeo = romeo.bind(golf)(foxtrot);
            mike['_errors'] = romeo;
            entity[yankee] = mike;
 119:
            zulu = zulu + 1;
            mike = offset.length;
            if(zulu < mike) { _fun6653_ip = 55; continue _fun6653 }
 131:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    report = global;
    verify = report.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    golf = options.bind(entity)(tango);
    tango = 6;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = {};
    options = 'hcaptcha';
    tango['HCAPTCHA'] = options;
    options = 'recaptcha';
    tango['RECAPTCHA'] = options;
    options = 'recaptcha_enterprise';
    tango['RECAPTCHA_ENTERPRISE'] = options;
    report = report.Error;
    report = golf.bind(entity)(report);
    mike = function(argFoo) {
        tango = function(argFoo, argBar) { // Original name: APIError
            _fun6655: for(var _fun6655_ip = 0; ; ) switch(_fun6655_ip) {
 0:
                mike = argFoo;
                foxtrot = arguments[2];
                romeo = this;
                yankee = undefined;
                if(!(foxtrot === yankee)) { _fun6655_ip = 21; continue _fun6655 }
 15:
                foxtrot = 'An unexpected error occurred.';
 21:
                entity = _closure1_slot0;
                offset = _closure2_slot0;
                entity = entity.bind(yankee)(romeo, offset);
                zulu = 'string';
                entity = typeof mike;
                if(!(zulu !== entity)) { _fun6655_ip = 356; continue _fun6655 }
 55:
                zulu = mike.body;
                entity = null;
                if(!(entity != zulu)) { _fun6655_ip = 340; continue _fun6655 }
 69:
                golf = mike.body;
                zulu = mike.body;
                zulu = zulu.message;
                if(!(entity != zulu)) { _fun6655_ip = 218; continue _fun6655 }
 91:
                zulu = global;
                options = zulu.Array;
                oscar = options.isArray;
                report = mike.body;
                report = report.message;
                report = oscar.bind(options)(report);
                if(report) { _fun6655_ip = 218; continue _fun6655 }
 122:
                report = mike.body;
                report = report.code;
                if(!(entity != report)) { _fun6655_ip = 165; continue _fun6655 }
 136:
                oscar = zulu.Array;
                report = oscar.isArray;
                zulu = mike.body;
                zulu = zulu.code;
                zulu = report.bind(oscar)(zulu);
                if(zulu) { _fun6655_ip = 218; continue _fun6655 }
 165:
                zulu = {};
                report = golf.message;
                zulu['message'] = report;
                report = golf.code;
                zulu['code'] = report;
                report = golf.retry_after;
                zulu['retryAfter'] = report;
                report = golf.errors;
                zulu['errors'] = report;
                report = mike.status;
                zulu['status'] = report;
                _fun6655_ip = 338; continue _fun6655;
 218:
                if(!(entity != golf)) { _fun6655_ip = 233; continue _fun6655 }
 222:
                entity = 'captcha_key';
                entity = entity in golf;
                if(entity) { _fun6655_ip = 270; continue _fun6655 }
 233:
                entity = {};
                report = mike.status;
                entity['status'] = report;
                report = 50035;
                entity['code'] = report;
                report = _closure1_slot9;
                report = report.bind(yankee)(golf);
                entity['errors'] = report;
                _fun6655_ip = 335; continue _fun6655;
 270:
                report = {};
                oscar = -1;
                report['code'] = oscar;
                report['captchaFields'] = golf;
                oscar = mike.status;
                report['status'] = oscar;
                oscar = golf.captcha_key;
                oscar = oscar.length;
                options = 0;
                verify = oscar > options;
                oscar = undefined;
                if(!verify) { _fun6655_ip = 328; continue _fun6655 }
 318:
                golf = golf.captcha_key;
                oscar = golf[options];
 328:
                report['message'] = oscar;
                entity = report;
 335:
                zulu = entity;
 338:
                _fun6655_ip = 372; continue _fun6655;
 340:
                entity = {};
                report = mike.status;
                entity['status'] = report;
                zulu = entity;
                _fun6655_ip = 372; continue _fun6655;
 356:
                entity = {};
                entity['message'] = mike;
                report = argBar;
                entity['code'] = report;
                zulu = entity;
 372:
                entity = zulu.message;
                verify = zulu.code;
                golf = zulu.retryAfter;
                oscar = zulu.errors;
                report = zulu.status;
                zulu = zulu.captchaFields;
                options = _closure1_slot6;
                tango = null;
                if(!(tango != entity)) { _fun6655_ip = 418; continue _fun6655 }
 415:
                foxtrot = entity;
 418:
                entity = new Array(1);
                entity[0] = foxtrot;
                entity = options.bind(yankee)(romeo, offset, entity);
                offset = tango != verify;
                options = -1;
                if(!offset) { _fun6655_ip = 449; continue _fun6655 }
 446:
                options = verify;
 449:
                entity['code'] = options;
                entity['retryAfter'] = golf;
                entity['errors'] = oscar;
                entity['status'] = report;
                if(!(tango == zulu)) { _fun6655_ip = 479; continue _fun6655 }
 477:
                zulu = {};
 479:
                entity['captchaFields'] = zulu;
                entity['cause'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'hasFieldErrors';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun6656: for(var _fun6656_ip = 0; ; ) switch(_fun6656_ip) {
 0:
                mike = this;
                zulu = mike.errors;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun6656_ip = 53; continue _fun6656 }
 18:
                zulu = global;
                tango = zulu.Object;
                zulu = tango.keys;
                mike = mike.errors;
                mike = zulu.bind(tango)(mike);
                zulu = mike.length;
                mike = 0;
                entity = zulu > mike;
 53:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'getFieldErrors';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun6657: for(var _fun6657_ip = 0; ; ) switch(_fun6657_ip) {
 0:
                mike = argFoo;
                zulu = 'string';
                entity = typeof mike;
                oscar = mike;
                if(!(zulu === entity)) { _fun6657_ip = 28; continue _fun6657 }
 17:
                entity = new Array(1);
                entity[0] = mike;
                oscar = entity;
 28:
                entity = this;
                golf = entity.errors;
                entity = oscar.length;
                report = 0;
                mike = golf;
                if(!(entity > report)) { _fun6657_ip = 110; continue _fun6657 }
 51:
                tango = null;
                zulu = 1;
                entity = golf;
                mike = entity;
                if(!(tango != mike)) { _fun6657_ip = 110; continue _fun6657 }
 66:
                golf = oscar[report];
                golf = entity[golf];
                options = oscar.splice;
                options = options.bind(oscar)(zulu);
                verify = options.length;
                mike = golf;
                if(!(verify > report)) { _fun6657_ip = 110; continue _fun6657 }
 97:
                oscar = options;
                entity = golf;
                mike = entity;
                if(tango != mike) { _fun6657_ip = 66; continue _fun6657 }
 110:
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun6657_ip = 127; continue _fun6657 }
 121:
                entity = mike._errors;
 127:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getAllFieldErrors';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            mike = zulu.getAllFieldErrorsUnder;
            entity = zulu.errors;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getAllFieldErrorsUnder';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun6659: for(var _fun6659_ip = 0; ; ) switch(_fun6659_ip) {
 0:
                report = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                entity = {};
                var _closure3_slot1 = entity;
                oscar = null;
                golf = oscar == report;
                zulu = undefined;
                tango = undefined;
                if(golf) { _fun6659_ip = 37; continue _fun6659 }
 31:
                tango = report._errors;
 37:
                oscar = oscar != tango;
                if(!oscar) { _fun6659_ip = 55; continue _fun6659 }
 44:
                options = tango.length;
                golf = 0;
                oscar = options > golf;
 55:
                if(!oscar) { _fun6659_ip = 64; continue _fun6659 }
 58:
                entity['__root_errors'] = tango;
 64:
                if(!(zulu !== report)) { _fun6659_ip = 102; continue _fun6659 }
 68:
                zulu = global;
                tango = zulu.Object;
                zulu = tango.entries;
                tango = zulu.bind(tango)(report);
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun6660: for(var _fun6660_ip = 0; ; ) switch(_fun6660_ip) {
 0:
                        oscar = argFoo;
                        zulu = oscar[Symbol.iterator];
                        oscar = zulu().next;
                        golf = oscar().value;
                        tango = zulu;
                        entity = undefined;
                        report = tango === entity;
                        tango = undefined;
                        if(report) { _fun6660_ip = 29; continue _fun6660 }
 26:
                        tango = golf;
 29:
                        var _closure4_slot0 = tango;
                        golf = undefined;
                        if(report) { _fun6660_ip = 63; continue _fun6660 }
 38:
                        options = oscar().value;
                        oscar = zulu;
                        oscar = oscar === entity;
                        golf = undefined;
                        report = oscar;
                        if(oscar) { _fun6660_ip = 63; continue _fun6660 }
 57:
                        golf = options;
                        report = oscar;
 63:
                        if(report) { _fun6660_ip = 69; continue _fun6660 }
 66:
                        zulu.return();
 69:
                        zulu = '_errors';
                        if(!(zulu !== tango)) { _fun6660_ip = 129; continue _fun6660 }
 77:
                        zulu = global;
                        report = zulu.Object;
                        tango = report.entries;
                        oscar = _closure3_slot0;
                        zulu = oscar.getAllFieldErrorsUnder;
                        zulu = zulu.bind(oscar)(golf);
                        tango = tango.bind(report)(zulu);
                        zulu = tango.forEach;
                        mike = function(argFoo) {
                            _fun6661: for(var _fun6661_ip = 0; ; ) switch(_fun6661_ip) {
 0:
                                report = argFoo;
                                mike = report[Symbol.iterator];
                                report = mike().next;
                                tango = report().value;
                                zulu = mike;
                                entity = undefined;
                                zulu = zulu === entity;
                                options = undefined;
                                if(zulu) { _fun6661_ip = 27; continue _fun6661 }
 24:
                                options = tango;
 27:
                                tango = undefined;
                                if(zulu) { _fun6661_ip = 57; continue _fun6661 }
 32:
                                oscar = report().value;
                                report = mike;
                                report = report === entity;
                                tango = undefined;
                                zulu = report;
                                if(report) { _fun6661_ip = 57; continue _fun6661 }
 51:
                                tango = oscar;
                                zulu = report;
 57:
                                if(zulu) { _fun6661_ip = 63; continue _fun6661 }
 60:
                                mike.return();
 63:
                                mike = '__root_errors';
                                if(!(options !== mike)) { _fun6661_ip = 119; continue _fun6661 }
 71:
                                zulu = _closure3_slot1;
                                golf = _closure4_slot0;
                                mike = global;
                                mike = mike.HermesInternal;
                                oscar = mike.concat;
                                report = '';
                                mike = '.';
                                mike = oscar.bind(report)(golf, mike, options);
                                zulu[mike] = tango;
                                _fun6661_ip = 137; continue _fun6661;
 119:
                                zulu = _closure3_slot1;
                                mike = _closure4_slot0;
                                zulu[mike] = tango;
 137:
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
 129:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
 102:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getFirstFieldErrorMessage';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun6662: for(var _fun6662_ip = 0; ; ) switch(_fun6662_ip) {
 0:
                zulu = this;
                mike = zulu.getFieldErrors;
                entity = argFoo;
                zulu = mike.bind(zulu)(entity);
                tango = null;
                mike = tango == zulu;
                entity = null;
                if(mike) { _fun6662_ip = 56; continue _fun6662 }
 28:
                report = zulu.length;
                mike = 1;
                mike = report < mike;
                entity = null;
                if(mike) { _fun6662_ip = 56; continue _fun6662 }
 45:
                mike = 0;
                mike = zulu[mike];
                entity = mike.message;
 56:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getAnyErrorMessage';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun6663: for(var _fun6663_ip = 0; ; ) switch(_fun6663_ip) {
 0:
                mike = this;
                entity = mike.getAnyErrorMessageAndField;
                tango = entity.bind(mike)();
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                if(report) { _fun6663_ip = 29; continue _fun6663 }
 24:
                entity = tango.error;
 29:
                if(!(zulu == entity)) { _fun6663_ip = 38; continue _fun6663 }
 33:
                entity = mike.message;
 38:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getAnyErrorMessageAndField';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun6664: for(var _fun6664_ip = 0; ; ) switch(_fun6664_ip) {
 0:
                entity = this;
                golf = entity.errors;
                entity = null;
                mike = entity != golf;
                oscar = global;
                zulu = 0;
                report = null;
                if(!mike) { _fun6664_ip = 68; continue _fun6664 }
 24:
                options = golf._errors;
                mike = golf;
                tango = report;
                if(!(entity == options)) { _fun6664_ip = 70; continue _fun6664 }
 40:
                verify = oscar.Object;
                options = verify.keys;
                options = options.bind(verify)(mike);
                report = options[zulu];
                golf = mike[report];
                if(entity != golf) { _fun6664_ip = 24; continue _fun6664 }
 68:
                return entity;
 70:
                entity = {};
                entity['fieldName'] = tango;
                mike = mike._errors;
                mike = mike[zulu];
                mike = mike.message;
                entity['error'] = mike;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(report);
    report = 7;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/http-utils/V8APIError.tsx';
    report = oscar.bind(golf)(report);
    report = 50035;
    zulu['INVALID_FORM_BODY_ERROR_CODE'] = report;
    report = '__root_errors';
    zulu['ROOT_FORM_ERRORS_KEY'] = report;
    zulu['CaptchaTypes'] = tango;
    zulu['APIError'] = mike;
    return entity;
})();