// discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function(argFoo, argBar) { // Original name: APIError
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                verify = arguments[2];
                zulu = this;
                entity = undefined;
                if(!(verify === entity)) { _fun00002_ip = 21; continue _fun00001 }
 15:
                verify = 'An unexpected error occurred.';
 21:
                tango = _closure1_slot0;
                mike = _closure2_slot0;
                mike = tango.bind(entity)(zulu, mike);
                tango = 'string';
                mike = typeof report;
                if(!(tango !== mike)) { _fun00002_ip = 302; continue _fun00001 }
 55:
                mike = report.body;
                golf = null;
                if(!(golf == mike)) { _fun00002_ip = 73; continue _fun00001 }
 66:
                mike = {};
                _fun00002_ip = 318; continue _fun00001;
 73:
                tango = report.body;
                tango = tango.message;
                if(!(golf != tango)) { _fun00002_ip = 224; continue _fun00001 }
 90:
                tango = global;
                offset = tango.Array;
                options = offset.isArray;
                oscar = report.body;
                oscar = oscar.message;
                oscar = options.bind(offset)(oscar);
                if(oscar) { _fun00002_ip = 224; continue _fun00001 }
 121:
                oscar = report.body;
                oscar = oscar.code;
                if(!(golf != oscar)) { _fun00002_ip = 164; continue _fun00001 }
 135:
                options = tango.Array;
                oscar = options.isArray;
                tango = report.body;
                tango = tango.code;
                tango = oscar.bind(options)(tango);
                if(tango) { _fun00002_ip = 224; continue _fun00001 }
 164:
                tango = {};
                oscar = report.body;
                oscar = oscar.message;
                tango['message'] = oscar;
                oscar = report.body;
                oscar = oscar.code;
                tango['code'] = oscar;
                oscar = report.body;
                oscar = oscar.retry_after;
                tango['retryAfter'] = oscar;
                oscar = report.status;
                tango['status'] = oscar;
                mike = tango;
                _fun00002_ip = 318; continue _fun00001;
 224:
                oscar = report.body;
                tango = golf != oscar;
                offset = null;
                if(!tango) { _fun00002_ip = 262; continue _fun00001 }
 238:
                tango = global;
                options = tango.Object;
                tango = options.values;
                options = tango.bind(options)(oscar);
                tango = 0;
                offset = options[tango];
 262:
                tango = {};
                options = golf != offset;
                golf = undefined;
                if(!options) { _fun00002_ip = 279; continue _fun00001 }
 273:
                options = 0;
                golf = offset[options];
 279:
                tango['message'] = golf;
                tango['fields'] = oscar;
                oscar = report.status;
                tango['status'] = oscar;
                mike = tango;
                _fun00002_ip = 318; continue _fun00001;
 302:
                tango = {};
                tango['message'] = report;
                report = argBar;
                tango['code'] = report;
                mike = tango;
 318:
                report = mike.message;
                oscar = mike.code;
                golf = mike.retryAfter;
                tango = mike.fields;
                mike = mike.status;
                options = report;
                if(options) { _fun00002_ip = 354; continue _fun00001 }
 351:
                options = verify;
 354:
                zulu['message'] = options;
                zulu['retryAfter'] = golf;
                if(oscar) { _fun00002_ip = 375; continue _fun00001 }
 369:
                oscar = -1;
 375:
                zulu['code'] = oscar;
                if(tango) { _fun00002_ip = 386; continue _fun00001 }
 384:
                tango = {};
 386:
                zulu['fields'] = tango;
                zulu['status'] = mike;
                mike = global;
                mike = mike.Error;
                tango = mike.prototype;
                tango = Object.create(tango, {constructor: {value: mike}});
                foxtrot = tango;
                romeo = report;
                mike = new foxtrot[mike](romeo, yankee);
                mike = mike instanceof Object ? mike : tango;
                zulu['error'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        report = 'getFieldMessage';
        entity['key'] = report;
        mike = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                mike = this;
                entity = mike.fields;
                tango = entity[zulu];
                entity = null;
                tango = entity != tango;
                if(!tango) { _fun00004_ip = 41; continue _fun00003 }
 25:
                mike = mike.fields;
                zulu = mike[zulu];
                mike = 0;
                entity = zulu[mike];
 41:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx';
    tango = report.bind(oscar)(tango);
    zulu['APIError'] = mike;
    return entity;
})();