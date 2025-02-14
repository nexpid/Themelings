// app/modules/self_remediation_feedback/native/BlockUserFeedbackActionSheet.tsx
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    golf = report.bind(entity)(tango);
    tango = golf.BlockUserFeedbackReasons;
    var _closure1_slot4 = tango;
    golf = golf.getBlockUserFeedbackOptions;
    var _closure1_slot5 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.AnalyticEvents;
    var _closure1_slot6 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot7 = golf;
    golf = tango.SOMETHING_ELSE;
    tango = new Array(1);
    tango[0] = golf;
    var _closure1_slot8 = tango;
    tango = function() { // Original name: trackOpen
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.OPEN_POPOUT;
        mike = {};
        oscar = 'Block User Feedback';
        mike['type'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_remediation_feedback/native/BlockUserFeedbackActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: BlockUserFeedbackActionSheet
        mike = _closure1_slot1;
        options = _closure1_slot2;
        entity = 5;
        entity = options[entity];
        tango = undefined;
        zulu = mike.bind(tango)(entity);
        entity = _closure1_slot5;
        golf = zulu.bind(tango)(entity);
        verify = _closure1_slot3;
        report = verify.useCallback;
        zulu = function(argFoo) {
            _fun123559: for(var _fun123559_ip = 0; ; ) switch(_fun123559_ip) {
 0:
                entity = argFoo;
                zulu = entity.rating;
                mike = null;
                entity = mike != zulu;
                if(!entity) { _fun123559_ip = 22; continue _fun123559 }
 18:
                entity = mike != zulu;
 22:
                if(!entity) { _fun123559_ip = 60; continue _fun123559 }
 25:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.presentFeedbackSent;
                entity = entity.bind(mike)();
 60:
                entity = undefined;
                return entity;
            }
        };
        entity = new Array(0);
        report = report.bind(verify)(zulu, entity);
        zulu = _closure1_slot7;
        entity = 7;
        entity = options[entity];
        mike = mike.bind(tango)(entity);
        entity = {'headerLabel': 'header goes here', 'showHeaderCloseButton': true, 'ratingsBodyLabel': 'body goes here', 'reasonsHeaderLabel': 'section header goes here'};
        entity['reasons'] = golf;
        golf = _closure1_slot8;
        entity['feedbackReasons'] = golf;
        golf = _closure1_slot4;
        golf = golf.SOMETHING_ELSE;
        entity['otherKey'] = golf;
        oscar = _closure1_slot9;
        entity['trackOpen'] = oscar;
        entity['trackReport'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();