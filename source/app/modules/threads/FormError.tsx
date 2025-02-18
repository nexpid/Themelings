// app/modules/threads/FormError.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: formSubmitError
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argBar;
            entity = {};
            michal = argFoo;
            entity['type'] = michal;
            michal = null;
            tangon = michal != zuuluu;
            if(!tangon) { _fun00002_ip = 24; continue _fun00001 }
 21:
            michal = zuuluu;
 24:
            entity['message'] = michal;
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo) { // Original name: makeEmptyContentError
        tangon = _closure1_slot3;
        entity = _closure1_slot2;
        zuuluu = entity.EmptyContent;
        michal = undefined;
        entity = argFoo;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    tangon = {};
    golfie = 0;
    tangon['EmptyContent'] = golfie;
    entity = 'EmptyContent';
    tangon[golfie] = entity;
    golfie = 1;
    tangon['AutomodViolation'] = golfie;
    entity = 'AutomodViolation';
    tangon[golfie] = entity;
    var _closure1_slot2 = tangon;
    entity = 2;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/threads/FormError.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['FormSubmitErrorType'] = tangon;
    tangon = function() { // Original name: makeEmptyTitleError
        zuuluu = _closure1_slot4;
        oscard = _closure1_slot0;
        golfie = _closure1_slot1;
        entity = 0;
        tangon = golfie[entity];
        michal = undefined;
        tangon = oscard.bind(michal)(tangon);
        report = tangon.intl;
        tangon = report.string;
        entity = golfie[entity];
        entity = oscard.bind(michal)(entity);
        entity = entity.t;
        entity = entity.uXA57+;
        entity = tangon.bind(report)(entity);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['makeEmptyTitleError'] = tangon;
    tangon = function() { // Original name: makeEmptyMessageError
        zuuluu = _closure1_slot4;
        oscard = _closure1_slot0;
        golfie = _closure1_slot1;
        entity = 0;
        tangon = golfie[entity];
        michal = undefined;
        tangon = oscard.bind(michal)(tangon);
        report = tangon.intl;
        tangon = report.string;
        entity = golfie[entity];
        entity = oscard.bind(michal)(entity);
        entity = entity.t;
        entity = entity.kesTVV;
        entity = tangon.bind(report)(entity);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['makeEmptyMessageError'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: makeAutomodViolationError
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argBar;
            tangon = _closure1_slot3;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.AutomodViolation;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            michal = 1;
            report = report[michal];
            michal = undefined;
            golfie = oscard.bind(michal)(report);
            oscard = golfie.getAutomodErrorMessageFromErrorResponse;
            report = null;
            option = report == entity;
            report = undefined;
            if(option) { _fun00004_ip = 64; continue _fun00003 }
 59:
            report = entity.id;
 64:
            entity = argFoo;
            entity = oscard.bind(golfie)(entity, report);
            entity = tangon.bind(michal)(zuuluu, entity);
            return entity;
        }
    };
    zuuluu['makeAutomodViolationError'] = tangon;
    michal = function(argFoo, argBar) { // Original name: renderError
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            michal = null;
            report = michal == zuuluu;
            entity = null;
            if(report) { _fun00006_ip = 99; continue _fun00005 }
 17:
            oscard = zuuluu.type;
            report = _closure1_slot2;
            report = report.EmptyContent;
            if(!(oscard === report)) { _fun00006_ip = 79; continue _fun00005 }
 39:
            report = tangon.content;
            if(!(michal != report)) { _fun00006_ip = 79; continue _fun00005 }
 48:
            report = tangon.content;
            tangon = report.trim;
            tangon = tangon.bind(report)();
            report = tangon.length;
            tangon = 0;
            tangon = report > tangon;
            entity = null;
            if(tangon) { _fun00006_ip = 99; continue _fun00005 }
 79:
            zuuluu = zuuluu.message;
            tangon = michal != zuuluu;
            michal = null;
            if(!tangon) { _fun00006_ip = 96; continue _fun00005 }
 93:
            michal = zuuluu;
 96:
            entity = michal;
 99:
            return entity;
        }
    };
    zuuluu['renderError'] = michal;
    return entity;
})();