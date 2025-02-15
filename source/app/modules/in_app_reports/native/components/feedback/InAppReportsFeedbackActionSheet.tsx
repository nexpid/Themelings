// app/modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: InAppReportsFeedbackActionSheet
        entity = argFoo;
        mike = entity.reportId;
        var _closure2_slot0 = mike;
        entity = entity.reportType;
        var _closure2_slot1 = entity;
        mike = _closure1_slot1;
        romeo = _closure1_slot2;
        zulu = 3;
        zulu = romeo[zulu];
        tango = undefined;
        zulu = mike.bind(tango)(zulu);
        golf = zulu.bind(tango)();
        yankee = _closure1_slot0;
        zulu = 4;
        zulu = romeo[zulu];
        options = yankee.bind(tango)(zulu);
        oscar = options.improperGetEnglishIntlMessageText;
        zulu = 'CALL_FEEDBACK_OPTION_OTHER';
        oscar = oscar.bind(options)(zulu);
        zulu = _closure1_slot4;
        entity = 5;
        entity = romeo[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        options = 6;
        verify = romeo[options];
        verify = yankee.bind(tango)(verify);
        foxtrot = verify.intl;
        offset = foxtrot.string;
        verify = romeo[options];
        verify = yankee.bind(tango)(verify);
        verify = verify.t;
        verify = verify.MP5lDg;
        verify = offset.bind(foxtrot)(verify);
        entity['headerLabel'] = verify;
        verify = true;
        entity['showHeaderCloseButton'] = verify;
        verify = romeo[options];
        verify = yankee.bind(tango)(verify);
        foxtrot = verify.intl;
        offset = foxtrot.string;
        verify = romeo[options];
        verify = yankee.bind(tango)(verify);
        verify = verify.t;
        verify = verify.7Ct0Dg;
        verify = offset.bind(foxtrot)(verify);
        entity['ratingsBodyLabel'] = verify;
        verify = romeo[options];
        verify = yankee.bind(tango)(verify);
        offset = verify.intl;
        verify = offset.string;
        options = romeo[options];
        options = yankee.bind(tango)(options);
        options = options.t;
        options = options.FJmoxM;
        options = verify.bind(offset)(options);
        entity['reasonsHeaderLabel'] = options;
        entity['reasons'] = golf;
        golf = new Array(1);
        golf[0] = oscar;
        entity['feedbackReasons'] = golf;
        entity['otherKey'] = oscar;
        oscar = function() { // Original name: trackOpen
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 7;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot3;
            zulu = mike.IAR_FEEDBACK_MODAL_VIEWED;
            mike = {};
            golf = _closure2_slot0;
            mike['report_id'] = golf;
            oscar = _closure2_slot1;
            mike['report_type'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['trackOpen'] = oscar;
        report = function(argFoo) { // Original name: trackReport
            _fun123556: for(var _fun123556_ip = 0; ; ) switch(_fun123556_ip) {
 0:
                mike = argFoo;
                tango = mike.rating;
                entity = mike.reason;
                verify = mike.feedback;
                options = mike.doNotShowAgain;
                zulu = null;
                mike = zulu != entity;
                golf = null;
                if(!mike) { _fun123556_ip = 43; continue _fun123556 }
 38:
                golf = entity.value;
 43:
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                entity = 8;
                report = report[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(report);
                report = {};
                report['rating'] = tango;
                report['problem'] = golf;
                offset = zulu != verify;
                golf = '';
                if(!offset) { _fun123556_ip = 94; continue _fun123556 }
 91:
                golf = verify;
 94:
                report['feedback'] = golf;
                verify = _closure2_slot0;
                report['reportId'] = verify;
                golf = _closure2_slot1;
                report['reportType'] = golf;
                golf = zulu != options;
                if(!golf) { _fun123556_ip = 130; continue _fun123556 }
 127:
                golf = options;
 130:
                report['dontShowAgain'] = golf;
                report = oscar.bind(entity)(report);
                if(!(zulu != tango)) { _fun123556_ip = 174; continue _fun123556 }
 144:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 9;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.presentFeedbackSent;
                mike = mike.bind(zulu)();
 174:
                return entity;
            }
        };
        entity['trackReport'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();