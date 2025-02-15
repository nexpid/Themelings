// app/modules/messages/native/renderer/row_data/CtaButton.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot2 = tango;
    tango = {};
    report = 'mark_as_false_positive';
    tango['MARK_AS_FALSE_POSITIVE'] = report;
    var _closure1_slot3 = tango;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/native/renderer/row_data/CtaButton.tsx';
    report = oscar.bind(golf)(report);
    zulu['CtaButtonCallbackTypes'] = tango;
    tango = function(argFoo, argBar) { // Original name: createCtaButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            report = argBar;
            mike = _closure1_slot2;
            entity = mike.getFpMessageInfo;
            mike = entity.bind(mike)(tango);
            entity = null;
            if(!(entity == mike)) { _fun00002_ip = 34; continue _fun00001 }
 30:
            entity = undefined;
            return entity;
 34:
            mike = _closure1_slot2;
            entity = mike.canSubmitFpReport;
            tango = entity.bind(mike)(tango);
            entity = {};
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            oscar = 1;
            golf = offset[oscar];
            mike = undefined;
            golf = verify.bind(mike)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(mike)(oscar);
            oscar = oscar.t;
            oscar = oscar.4q1ElZ;
            oscar = golf.bind(options)(oscar);
            entity['text'] = oscar;
            oscar = report.reportFpTextColor;
            entity['textColor'] = oscar;
            report = report.reportFpBackgroundColor;
            entity['backgroundColor'] = report;
            if(!tango) { _fun00002_ip = 146; continue _fun00001 }
 136:
            zulu = _closure1_slot3;
            mike = zulu.MARK_AS_FALSE_POSITIVE;
 146:
            entity['callback'] = mike;
            return entity;
        }
    };
    zulu['createCtaButton'] = tango;
    mike = function(argFoo, argBar) { // Original name: useCtaButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 2;
            entity = mike[entity];
            mike = undefined;
            tango = tango.bind(mike)(entity);
            entity = tango.useShouldRenderReportFalsePositiveButton;
            entity = entity.bind(tango)(oscar);
            if(entity) { _fun00004_ip = 47; continue _fun00003 }
 45:
            return mike;
 47:
            tango = _closure1_slot2;
            entity = tango.canSubmitFpReport;
            tango = entity.bind(tango)(oscar);
            entity = {};
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            oscar = 1;
            golf = offset[oscar];
            golf = verify.bind(mike)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(mike)(oscar);
            oscar = oscar.t;
            oscar = oscar.4q1ElZ;
            oscar = golf.bind(options)(oscar);
            entity['text'] = oscar;
            oscar = report.reportFpTextColor;
            entity['textColor'] = oscar;
            report = report.reportFpBackgroundColor;
            entity['backgroundColor'] = report;
            mike = undefined;
            if(!tango) { _fun00004_ip = 159; continue _fun00003 }
 149:
            zulu = _closure1_slot3;
            mike = zulu.MARK_AS_FALSE_POSITIVE;
 159:
            entity['callback'] = mike;
            return entity;
        }
    };
    zulu['useCtaButton'] = mike;
    return entity;
})();