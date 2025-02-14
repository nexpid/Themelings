// app/modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.CreatorMonetizationApplicationState;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useIsCreatorMonetizationRequestRejected
        _fun126876: for(var _fun126876_ip = 0; ; ) switch(_fun126876_ip) {
 0:
            mike = argFoo;
            entity = {};
            report = null;
            zulu = report == mike;
            tango = undefined;
            oscar = undefined;
            if(zulu) { _fun126876_ip = 38; continue _fun126876 }
 18:
            zulu = mike.latestRequest;
            golf = report == zulu;
            oscar = undefined;
            if(golf) { _fun126876_ip = 38; continue _fun126876 }
 33:
            oscar = zulu.state;
 38:
            zulu = _closure1_slot2;
            zulu = zulu.REJECTED;
            zulu = oscar === zulu;
            entity['isApplicationRejected'] = zulu;
            oscar = report == mike;
            zulu = undefined;
            if(oscar) { _fun126876_ip = 92; continue _fun126876 }
 69:
            mike = mike.rejection;
            report = report == mike;
            zulu = undefined;
            if(report) { _fun126876_ip = 92; continue _fun126876 }
 84:
            zulu = mike.can_reapply_at;
 92:
            mike = function(argFoo) { // Original name: getRequestCooldown
                _fun126877: for(var _fun126877_ip = 0; ; ) switch(_fun126877_ip) {
 0:
                    report = argFoo;
                    mike = null;
                    if(!(mike != report)) { _fun126877_ip = 521; continue _fun126877 }
 14:
                    zulu = global;
                    tango = zulu.Date;
                    mike = tango.parse;
                    report = mike.bind(tango)(report);
                    tango = zulu.Date;
                    mike = tango.now;
                    mike = mike.bind(tango)();
                    tango = zulu.isNaN;
                    options = undefined;
                    tango = tango.bind(options)(report);
                    if(tango) { _fun126877_ip = 521; continue _fun126877 }
 67:
                    if(!(!(report < mike))) { _fun126877_ip = 521; continue _fun126877 }
 74:
                    tango = zulu.Math;
                    zulu = tango.round;
                    report = report - mike;
                    mike = 60000;
                    mike = report / mike;
                    report = zulu.bind(tango)(mike);
                    var _closure3_slot0 = report;
                    golf = function(argFoo) { // Original name: roundByInterval
                        entity = global;
                        zulu = entity.Math;
                        mike = zulu.round;
                        tango = _closure3_slot0;
                        entity = argFoo;
                        entity = tango / entity;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    oscar = 43200;
                    if(!(!(report >= oscar))) { _fun126877_ip = 448; continue _fun126877 }
 128:
                    verify = 10080;
                    if(!(!(report >= verify))) { _fun126877_ip = 375; continue _fun126877 }
 141:
                    offset = 1440;
                    if(!(!(report >= offset))) { _fun126877_ip = 302; continue _fun126877 }
 154:
                    yankee = 60;
                    if(!(!(report >= yankee))) { _fun126877_ip = 229; continue _fun126877 }
 161:
                    mike = _closure1_slot0;
                    romeo = _closure1_slot1;
                    entity = 1;
                    zulu = romeo[entity];
                    zulu = mike.bind(options)(zulu);
                    tango = zulu.intl;
                    zulu = tango.formatToPlainString;
                    entity = romeo[entity];
                    entity = mike.bind(options)(entity);
                    entity = entity.t;
                    mike = entity.iXLF9f;
                    entity = {};
                    entity['minutes'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    _fun126877_ip = 300; continue _fun126877;
 229:
                    zulu = _closure1_slot0;
                    romeo = _closure1_slot1;
                    mike = 1;
                    tango = romeo[mike];
                    tango = zulu.bind(options)(tango);
                    report = tango.intl;
                    tango = report.formatToPlainString;
                    mike = romeo[mike];
                    mike = zulu.bind(options)(mike);
                    mike = mike.t;
                    zulu = mike.xCjYxM;
                    mike = {};
                    yankee = golf.bind(options)(yankee);
                    mike['hours'] = yankee;
                    entity = tango.bind(report)(zulu, mike);
 300:
                    _fun126877_ip = 373; continue _fun126877;
 302:
                    zulu = _closure1_slot0;
                    yankee = _closure1_slot1;
                    mike = 1;
                    tango = yankee[mike];
                    tango = zulu.bind(options)(tango);
                    report = tango.intl;
                    tango = report.formatToPlainString;
                    mike = yankee[mike];
                    mike = zulu.bind(options)(mike);
                    mike = mike.t;
                    zulu = mike.k2UNz8;
                    mike = {};
                    offset = golf.bind(options)(offset);
                    mike['days'] = offset;
                    entity = tango.bind(report)(zulu, mike);
 373:
                    _fun126877_ip = 446; continue _fun126877;
 375:
                    zulu = _closure1_slot0;
                    offset = _closure1_slot1;
                    mike = 1;
                    tango = offset[mike];
                    tango = zulu.bind(options)(tango);
                    report = tango.intl;
                    tango = report.formatToPlainString;
                    mike = offset[mike];
                    mike = zulu.bind(options)(mike);
                    mike = mike.t;
                    zulu = mike.EmoBDw;
                    mike = {};
                    verify = golf.bind(options)(verify);
                    mike['weeks'] = verify;
                    entity = tango.bind(report)(zulu, mike);
 446:
                    _fun126877_ip = 519; continue _fun126877;
 448:
                    zulu = _closure1_slot0;
                    verify = _closure1_slot1;
                    mike = 1;
                    tango = verify[mike];
                    tango = zulu.bind(options)(tango);
                    report = tango.intl;
                    tango = report.formatToPlainString;
                    mike = verify[mike];
                    mike = zulu.bind(options)(mike);
                    mike = mike.t;
                    zulu = mike.kridzM;
                    mike = {};
                    oscar = golf.bind(options)(oscar);
                    mike['months'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 519:
                    return entity;
 521:
                    entity = undefined;
                    return entity;
                }
            };
            mike = mike.bind(tango)(zulu);
            entity['requestCooldownDuration'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();