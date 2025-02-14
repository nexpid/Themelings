// app/modules/in_app_reports/native/components/InAppReportModal.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getScreens
        mike = argFoo;
        entity = mike.nodeMap;
        var _closure2_slot0 = entity;
        entity = mike.reportType;
        var _closure2_slot1 = entity;
        entity = mike.reportSubType;
        var _closure2_slot2 = entity;
        entity = mike.successNodeId;
        var _closure2_slot3 = entity;
        entity = mike.failNodeId;
        var _closure2_slot4 = entity;
        entity = mike.callbacks;
        mike = mike.reportId;
        var _closure2_slot5 = mike;
        mike = entity.closeModal;
        var _closure2_slot6 = mike;
        mike = entity.addOnCloseCallback;
        var _closure2_slot7 = mike;
        mike = entity.onSubmit;
        var _closure2_slot8 = mike;
        entity = entity.onNavigate;
        var _closure2_slot9 = entity;
        entity = {};
        zulu = _closure1_slot6;
        mike = {};
        report = function() { // Original name: headerRight
            tango = _closure1_slot7;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            zulu = undefined;
            entity = options.bind(zulu)(entity);
            mike = entity.HeaderActionButton;
            entity = {};
            oscar = _closure1_slot1;
            report = 6;
            report = verify[report];
            report = oscar.bind(zulu)(report);
            entity['source'] = report;
            report = _closure2_slot6;
            entity['onPress'] = report;
            report = 7;
            oscar = verify[report];
            oscar = options.bind(zulu)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = verify[report];
            report = options.bind(zulu)(report);
            report = report.t;
            report = report.cpT0Cg;
            report = oscar.bind(golf)(report);
            entity['accessibilityLabel'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        mike['headerRight'] = report;
        report = function() { // Original name: headerTitle
            entity = null;
            return entity;
        };
        mike['headerTitle'] = report;
        report = true;
        mike['fullscreen'] = report;
        tango = function(argFoo) { // Original name: render
            report = argFoo;
            var _closure3_slot0 = report;
            tango = _closure1_slot7;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 8;
            entity = zulu[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = {};
            offset = entity;
            verify = report;
            report = copyDataProperties(offset, verify);
            options = _closure2_slot0;
            golf = 'nodeMap';
            entity[golf] = options;
            options = _closure2_slot1;
            golf = 'reportType';
            entity[golf] = options;
            options = _closure2_slot2;
            golf = 'reportSubType';
            entity[golf] = options;
            options = _closure2_slot3;
            golf = 'successNodeId';
            entity[golf] = options;
            options = _closure2_slot4;
            golf = 'failNodeId';
            entity[golf] = options;
            golf = function(argFoo) { // Original name: onSubmit
                zulu = _closure2_slot8;
                entity = _closure3_slot0;
                oscar = entity.history;
                mike = new Array(1);
                report = 0;
                golf = mike;
                tango = arraySpread(golf, oscar, report);
                entity = argFoo;
                mike[tango] = entity;
                entity = 1;
                entity = tango + entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            oscar = 'onSubmit';
            entity[oscar] = golf;
            golf = _closure2_slot6;
            oscar = 'closeModal';
            entity[oscar] = golf;
            golf = _closure2_slot7;
            oscar = 'addOnCloseCallback';
            entity[oscar] = golf;
            golf = _closure2_slot5;
            oscar = 'reportId';
            entity[oscar] = golf;
            oscar = _closure2_slot9;
            report = 'onNavigate';
            entity[report] = oscar;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        mike['render'] = tango;
        entity[zulu] = mike;
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.IN_APP_REPORTS_NODE;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/in_app_reports/native/components/InAppReportModal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: InAppReportModal
        _fun68897: for(var _fun68897_ip = 0; ; ) switch(_fun68897_ip) {
 0:
            zulu = argFoo;
            mike = zulu.reportType;
            var _closure2_slot0 = mike;
            mike = zulu.menu;
            var _closure2_slot1 = mike;
            tango = zulu.afterSubmit;
            var _closure2_slot2 = tango;
            zulu = zulu.isEligibleForFeedback;
            var _closure2_slot3 = zulu;
            zulu = mike.nodes;
            var _closure2_slot4 = zulu;
            zulu = mike.root_node_id;
            var _closure2_slot5 = zulu;
            zulu = mike.success_node_id;
            var _closure2_slot6 = zulu;
            mike = mike.fail_node_id;
            var _closure2_slot7 = mike;
            offset = _closure1_slot5;
            zulu = offset.useState;
            report = undefined;
            zulu = zulu.bind(offset)(report);
            options = _closure1_slot4;
            golf = 2;
            zulu = options.bind(report)(zulu, golf);
            oscar = 0;
            tango = zulu[oscar];
            var _closure2_slot8 = tango;
            tango = 1;
            zulu = zulu[tango];
            var _closure2_slot9 = zulu;
            zulu = offset.useState;
            zulu = zulu.bind(offset)(report);
            zulu = options.bind(report)(zulu, golf);
            verify = zulu[oscar];
            var _closure2_slot10 = verify;
            zulu = zulu[tango];
            var _closure2_slot11 = zulu;
            verify = offset.useState;
            zulu = new Array(0);
            zulu = verify.bind(offset)(zulu);
            zulu = options.bind(report)(zulu, golf);
            verify = zulu[oscar];
            var _closure2_slot12 = verify;
            zulu = zulu[tango];
            var _closure2_slot13 = zulu;
            verify = offset.useState;
            zulu = new Array(0);
            zulu = verify.bind(offset)(zulu);
            zulu = options.bind(report)(zulu, golf);
            oscar = zulu[oscar];
            var _closure2_slot14 = oscar;
            zulu = zulu[tango];
            var _closure2_slot15 = zulu;
            zulu = function(argFoo) { // Original name: addOnCloseCallback
                entity = argFoo;
                var _closure3_slot0 = entity;
                zulu = _closure2_slot15;
                entity = undefined;
                mike = function(argFoo) {
                    entity = new Array(1);
                    report = argFoo;
                    tango = 0;
                    oscar = entity;
                    zulu = arraySpread(oscar, report, tango);
                    mike = _closure3_slot0;
                    entity[zulu] = mike;
                    mike = 1;
                    mike = zulu + mike;
                    return entity;
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            var _closure2_slot16 = zulu;
            zulu = function() { // Original name: closeModal
                _fun68900: for(var _fun68900_ip = 0; ; ) switch(_fun68900_ip) {
 0:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 9;
                    mike = golf[report];
                    entity = undefined;
                    yankee = oscar.bind(entity)(mike);
                    offset = yankee.trackCloseReportModalAnalytics;
                    verify = _closure2_slot0;
                    options = _closure2_slot12;
                    tango = _closure2_slot8;
                    tango = offset.bind(yankee)(verify, options, tango);
                    tango = 10;
                    tango = golf[tango];
                    oscar = oscar.bind(entity)(tango);
                    tango = oscar.hideReportModal;
                    tango = tango.bind(oscar)();
                    golf = _closure2_slot14;
                    oscar = golf.forEach;
                    tango = function(argFoo) {
                        mike = argFoo;
                        entity = undefined;
                        entity = mike.bind(entity)();
                        return entity;
                    };
                    tango = oscar.bind(golf)(tango);
                    tango = _closure2_slot3;
                    if(!tango) { _fun68900_ip = 142; continue _fun68900 }
 105:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(entity)(zulu);
                    tango = report.showInAppReportsFeedbackModal;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot8;
                    mike = tango.bind(report)(zulu, mike);
 142:
                    return entity;
                }
            };
            var _closure2_slot17 = zulu;
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 11;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            entity = function() {
                _fun68902: for(var _fun68902_ip = 0; ; ) switch(_fun68902_ip) {
 0:
                    zulu = _closure2_slot4;
                    mike = _closure2_slot5;
                    verify = zulu[mike];
                    mike = null;
                    if(!(mike != verify)) { _fun68902_ip = 202; continue _fun68902 }
 26:
                    mike = function() {
                        tango = _closure1_slot3;
                        zulu = undefined;
                        mike = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun68905: for(var _fun68905_ip = 0; ; ) switch(_fun68905_ip) {
 0:
                                    StartGenerator();
                                    golf = argFoo;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun68905_ip = 183; continue _fun68905 }
 13:
                                    tango = _closure1_slot0;
                                    zulu = _closure1_slot2;
                                    mike = 9;
                                    mike = zulu[mike];
                                    zulu = undefined;
                                    options = tango.bind(zulu)(mike);
                                    oscar = options.submitReport;
                                    report = _closure2_slot1;
                                    mike = _closure2_slot0;
                                    mike = oscar.bind(options)(report, mike, golf);
                                    SaveGenerator(address=66);
 64:
                                    return mike;
 66:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(report) { _fun68905_ip = 180; continue _fun68905 }
 72:
                                    oscar = null;
                                    report = oscar == mike;
                                    options = undefined;
                                    if(report) { _fun68905_ip = 103; continue _fun68905 }
 83:
                                    report = mike.body;
                                    verify = oscar == report;
                                    options = undefined;
                                    if(verify) { _fun68905_ip = 103; continue _fun68905 }
 97:
                                    options = report.report_id;
 103:
                                    if(!(oscar != options)) { _fun68905_ip = 116; continue _fun68905 }
 107:
                                    report = _closure2_slot9;
                                    report = report.bind(zulu)(options);
 116:
                                    options = golf.length;
                                    report = 1;
                                    report = options - report;
                                    report = golf[report];
                                    golf = _closure2_slot11;
                                    options = _closure2_slot4;
                                    report = report.nodeRef;
                                    report = options[report];
                                    report = report.report_type;
                                    report = golf.bind(zulu)(report);
                                    report = _closure2_slot2;
                                    if(!(oscar != report)) { _fun68905_ip = 177; continue _fun68905 }
 169:
                                    tango = _closure2_slot2;
                                    tango = tango.bind(zulu)();
 177:
                                    return zulu;
 180:
                                    return mike;
 183:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        mike = tango.bind(zulu)(mike);
                        var _closure4_slot0 = mike;
                        entity = function() {
                            entity = undefined;
                            tango = _closure4_slot0;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        return entity;
                    };
                    report = undefined;
                    options = mike.bind(report)();
                    mike = {};
                    oscar = {};
                    tango = _closure1_slot6;
                    oscar['name'] = tango;
                    tango = {};
                    tango['node'] = verify;
                    verify = new Array(0);
                    tango['history'] = verify;
                    oscar['params'] = tango;
                    tango = new Array(1);
                    tango[0] = oscar;
                    mike['initialStack'] = tango;
                    tango = _closure1_slot8;
                    zulu = {};
                    oscar = _closure2_slot4;
                    zulu['nodeMap'] = oscar;
                    oscar = _closure2_slot0;
                    zulu['reportType'] = oscar;
                    oscar = _closure2_slot10;
                    zulu['reportSubType'] = oscar;
                    oscar = _closure2_slot6;
                    zulu['successNodeId'] = oscar;
                    oscar = _closure2_slot7;
                    zulu['failNodeId'] = oscar;
                    oscar = {};
                    oscar['onSubmit'] = options;
                    options = _closure2_slot17;
                    oscar['closeModal'] = options;
                    options = _closure2_slot16;
                    oscar['addOnCloseCallback'] = options;
                    golf = function(argFoo) { // Original name: onNavigate
                        entity = argFoo;
                        var _closure4_slot0 = entity;
                        zulu = _closure2_slot13;
                        entity = undefined;
                        mike = function(argFoo) {
                            entity = new Array(1);
                            report = argFoo;
                            tango = 0;
                            oscar = entity;
                            zulu = arraySpread(oscar, report, tango);
                            mike = _closure4_slot0;
                            entity[zulu] = mike;
                            mike = 1;
                            mike = zulu + mike;
                            return entity;
                        };
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    oscar['onNavigate'] = golf;
                    zulu['callbacks'] = oscar;
                    oscar = _closure2_slot8;
                    zulu['reportId'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    mike['screens'] = zulu;
                    return mike;
 202:
                    mike = _closure2_slot17;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    entity = {};
                    return entity;
                }
            };
            entity = zulu.bind(report)(entity);
            oscar = entity.initialStack;
            golf = entity.screens;
            tango = null;
            zulu = tango == oscar;
            entity = null;
            if(zulu) { _fun68897_ip = 430; continue _fun68897 }
 321:
            zulu = tango == golf;
            entity = null;
            if(zulu) { _fun68897_ip = 430; continue _fun68897 }
 330:
            tango = _closure1_slot7;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 12;
            mike = offset[mike];
            mike = verify.bind(report)(mike);
            zulu = mike.Navigator;
            mike = {};
            mike['screens'] = golf;
            mike['initialRouteStack'] = oscar;
            oscar = 7;
            golf = offset[oscar];
            golf = verify.bind(report)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(report)(oscar);
            oscar = oscar.t;
            oscar = oscar.13/7kZ;
            oscar = golf.bind(options)(oscar);
            mike['headerBackTitle'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 430:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();