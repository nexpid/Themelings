// app/modules/self_remediation_feedback/native/BlockUserFeedbackActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    golfie = report.bind(entity)(tangon);
    tangon = golfie.BlockUserFeedbackReasons;
    var _closure1_slot4 = tangon;
    golfie = golfie.getBlockUserFeedbackOptions;
    var _closure1_slot5 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.AnalyticEvents;
    var _closure1_slot6 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot7 = golfie;
    golfie = tangon.SOMETHING_ELSE;
    tangon = new Array(1);
    tangon[0] = golfie;
    var _closure1_slot8 = tangon;
    tangon = function() { // Original name: trackOpen
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.OPEN_POPOUT;
        michal = {};
        oscard = 'Block User Feedback';
        michal['type'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/self_remediation_feedback/native/BlockUserFeedbackActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: BlockUserFeedbackActionSheet
        michal = _closure1_slot1;
        option = _closure1_slot2;
        entity = 5;
        entity = option[entity];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(entity);
        entity = _closure1_slot5;
        golfie = zuuluu.bind(tangon)(entity);
        verify = _closure1_slot3;
        report = verify.useCallback;
        zuuluu = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.rating;
                michal = null;
                entity = michal != zuuluu;
                if(!entity) { _fun00002_ip = 22; continue _fun00001 }
 18:
                entity = michal != zuuluu;
 22:
                if(!entity) { _fun00002_ip = 60; continue _fun00001 }
 25:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.presentFeedbackSent;
                entity = entity.bind(michal)();
 60:
                entity = undefined;
                return entity;
            }
        };
        entity = new Array(0);
        report = report.bind(verify)(zuuluu, entity);
        zuuluu = _closure1_slot7;
        entity = 7;
        entity = option[entity];
        michal = michal.bind(tangon)(entity);
        entity = {'headerLabel': 'header goes here', 'showHeaderCloseButton': true, 'hideDontShowAgainCheckbox': true, 'ratingsBodyLabel': 'body goes here', 'reasonsHeaderLabel': 'section header goes here'};
        entity['reasons'] = golfie;
        golfie = _closure1_slot8;
        entity['feedbackReasons'] = golfie;
        golfie = _closure1_slot4;
        golfie = golfie.SOMETHING_ELSE;
        entity['otherKey'] = golfie;
        oscard = _closure1_slot9;
        entity['trackOpen'] = oscard;
        entity['trackReport'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();