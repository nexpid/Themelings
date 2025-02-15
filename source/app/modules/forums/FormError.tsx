// app/modules/forums/FormError.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: formSubmitError
        _fun87468: for(var _fun87468_ip = 0; ; ) switch(_fun87468_ip) {
 0:
            zulu = argBar;
            entity = {};
            mike = argFoo;
            entity['type'] = mike;
            mike = null;
            tango = mike != zulu;
            if(!tango) { _fun87468_ip = 24; continue _fun87468 }
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
    entity = 2;
    tango['EmptyTags'] = entity;
    golf = 'EmptyTags';
    tango[entity] = golf;
    var _closure1_slot2 = tango;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/forums/FormError.tsx';
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
        entity = entity.71wuR0;
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
        entity = entity.w/BT3N;
        entity = tango.bind(report)(entity);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['makeEmptyMessageError'] = tango;
    tango = function(argFoo, argBar) { // Original name: makeAutomodViolationError
        _fun87472: for(var _fun87472_ip = 0; ; ) switch(_fun87472_ip) {
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
            if(options) { _fun87472_ip = 64; continue _fun87472 }
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
    tango = function() { // Original name: makeEmptyTagsError
        tango = _closure1_slot3;
        mike = _closure1_slot2;
        zulu = mike.EmptyTags;
        golf = _closure1_slot0;
        options = _closure1_slot1;
        entity = 0;
        report = options[entity];
        mike = undefined;
        report = golf.bind(mike)(report);
        oscar = report.intl;
        report = oscar.string;
        entity = options[entity];
        entity = golf.bind(mike)(entity);
        entity = entity.t;
        entity = entity.xPfNQk;
        entity = report.bind(oscar)(entity);
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    zulu['makeEmptyTagsError'] = tango;
    mike = function(argFoo, argBar) { // Original name: renderError
        _fun87474: for(var _fun87474_ip = 0; ; ) switch(_fun87474_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            mike = null;
            report = mike == zulu;
            entity = null;
            if(report) { _fun87474_ip = 153; continue _fun87474 }
 20:
            golf = zulu.type;
            oscar = _closure1_slot2;
            oscar = oscar.EmptyContent;
            if(!(golf === oscar)) { _fun87474_ip = 82; continue _fun87474 }
 42:
            oscar = tango.content;
            if(!(mike != oscar)) { _fun87474_ip = 82; continue _fun87474 }
 51:
            golf = tango.content;
            oscar = golf.trim;
            oscar = oscar.bind(golf)();
            golf = oscar.length;
            oscar = 0;
            oscar = golf > oscar;
            entity = null;
            if(oscar) { _fun87474_ip = 153; continue _fun87474 }
 82:
            oscar = zulu.type;
            report = _closure1_slot2;
            report = report.EmptyTags;
            if(!(oscar === report)) { _fun87474_ip = 133; continue _fun87474 }
 101:
            report = tango.tags;
            if(!(mike != report)) { _fun87474_ip = 133; continue _fun87474 }
 111:
            tango = tango.tags;
            report = tango.length;
            tango = 0;
            tango = report > tango;
            entity = null;
            if(tango) { _fun87474_ip = 153; continue _fun87474 }
 133:
            zulu = zulu.message;
            tango = mike != zulu;
            mike = null;
            if(!tango) { _fun87474_ip = 150; continue _fun87474 }
 147:
            mike = zulu;
 150:
            entity = mike;
 153:
            return entity;
        }
    };
    zulu['renderError'] = mike;
    return entity;
})();