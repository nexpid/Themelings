// app/modules/threads/FormError.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: formSubmitError
        _fun112226: for(var _fun112226_ip = 0; ; ) switch(_fun112226_ip) {
 0:
            zulu = argBar;
            entity = {};
            mike = argFoo;
            entity['type'] = mike;
            mike = null;
            tango = mike != zulu;
            if(!tango) { _fun112226_ip = 24; continue _fun112226 }
 21:
            mike = zulu;
 24:
            entity['message'] = mike;
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo) { // Original name: makeEmptyContentError
        tango = _closure1_slot3;
        entity = _closure1_slot2;
        zulu = entity.EmptyContent;
        mike = undefined;
        entity = argFoo;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    tango = {};
    golf = 0;
    tango['EmptyContent'] = golf;
    entity = 'EmptyContent';
    tango[golf] = entity;
    golf = 1;
    tango['AutomodViolation'] = golf;
    entity = 'AutomodViolation';
    tango[golf] = entity;
    var _closure1_slot2 = tango;
    entity = 2;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/threads/FormError.tsx';
    report = oscar.bind(golf)(report);
    zulu['FormSubmitErrorType'] = tango;
    tango = function() { // Original name: makeEmptyTitleError
        zulu = _closure1_slot4;
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        entity = 0;
        tango = golf[entity];
        mike = undefined;
        tango = oscar.bind(mike)(tango);
        report = tango.intl;
        tango = report.string;
        entity = golf[entity];
        entity = oscar.bind(mike)(entity);
        entity = entity.t;
        entity = entity.uXA57+;
        entity = tango.bind(report)(entity);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['makeEmptyTitleError'] = tango;
    tango = function() { // Original name: makeEmptyMessageError
        zulu = _closure1_slot4;
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        entity = 0;
        tango = golf[entity];
        mike = undefined;
        tango = oscar.bind(mike)(tango);
        report = tango.intl;
        tango = report.string;
        entity = golf[entity];
        entity = oscar.bind(mike)(entity);
        entity = entity.t;
        entity = entity.kesTVV;
        entity = tango.bind(report)(entity);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['makeEmptyMessageError'] = tango;
    tango = function(argFoo, argBar) { // Original name: makeAutomodViolationError
        _fun112230: for(var _fun112230_ip = 0; ; ) switch(_fun112230_ip) {
 0:
            entity = argBar;
            tango = _closure1_slot3;
            zulu = _closure1_slot2;
            zulu = zulu.AutomodViolation;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            mike = 1;
            report = report[mike];
            mike = undefined;
            golf = oscar.bind(mike)(report);
            oscar = golf.getAutomodErrorMessageFromErrorResponse;
            report = null;
            options = report == entity;
            report = undefined;
            if(options) { _fun112230_ip = 64; continue _fun112230 }
 59:
            report = entity.id;
 64:
            entity = argFoo;
            entity = oscar.bind(golf)(entity, report);
            entity = tango.bind(mike)(zulu, entity);
            return entity;
        }
    };
    zulu['makeAutomodViolationError'] = tango;
    mike = function(argFoo, argBar) { // Original name: renderError
        _fun112231: for(var _fun112231_ip = 0; ; ) switch(_fun112231_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            mike = null;
            report = mike == zulu;
            entity = null;
            if(report) { _fun112231_ip = 99; continue _fun112231 }
 17:
            oscar = zulu.type;
            report = _closure1_slot2;
            report = report.EmptyContent;
            if(!(oscar === report)) { _fun112231_ip = 79; continue _fun112231 }
 39:
            report = tango.content;
            if(!(mike != report)) { _fun112231_ip = 79; continue _fun112231 }
 48:
            report = tango.content;
            tango = report.trim;
            tango = tango.bind(report)();
            report = tango.length;
            tango = 0;
            tango = report > tango;
            entity = null;
            if(tango) { _fun112231_ip = 99; continue _fun112231 }
 79:
            zulu = zulu.message;
            tango = mike != zulu;
            mike = null;
            if(!tango) { _fun112231_ip = 96; continue _fun112231 }
 93:
            mike = zulu;
 96:
            entity = mike;
 99:
            return entity;
        }
    };
    zulu['renderError'] = mike;
    return entity;
})();