// app/modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = function() { // Original name: trackOpen
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot3;
        zuuluu = michal.OPEN_POPOUT;
        michal = {};
        oscard = 'Call Session Feedback';
        michal['type'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot5 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: VoiceFeedbackActionSheet
        entity = argFoo;
        entity = entity.analyticsData;
        var _closure2_slot0 = entity;
        michal = _closure1_slot1;
        foxtra = _closure1_slot2;
        entity = 4;
        entity = foxtra[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        offset = true;
        option = entity.bind(tangon)(offset);
        romeon = _closure1_slot0;
        entity = 5;
        entity = foxtra[entity];
        golfie = romeon.bind(tangon)(entity);
        zuuluu = golfie.improperGetEnglishIntlMessageText;
        entity = 'CALL_FEEDBACK_OPTION_OTHER';
        golfie = zuuluu.bind(golfie)(entity);
        zuuluu = _closure1_slot4;
        entity = 6;
        entity = foxtra[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        verify = 7;
        yankee = foxtra[verify];
        yankee = romeon.bind(tangon)(yankee);
        kiloes = yankee.intl;
        backup = kiloes.string;
        yankee = foxtra[verify];
        yankee = romeon.bind(tangon)(yankee);
        yankee = yankee.t;
        yankee = yankee.Ss6tlZ;
        yankee = backup.bind(kiloes)(yankee);
        entity['headerLabel'] = yankee;
        entity['showHeaderCloseButton'] = offset;
        offset = foxtra[verify];
        offset = romeon.bind(tangon)(offset);
        backup = offset.intl;
        yankee = backup.string;
        offset = foxtra[verify];
        offset = romeon.bind(tangon)(offset);
        offset = offset.t;
        offset = offset.tLi4cX;
        offset = yankee.bind(backup)(offset);
        entity['ratingsBodyLabel'] = offset;
        offset = foxtra[verify];
        offset = romeon.bind(tangon)(offset);
        yankee = offset.intl;
        offset = yankee.string;
        verify = foxtra[verify];
        verify = romeon.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.FJmoxM;
        verify = offset.bind(yankee)(verify);
        entity['reasonsHeaderLabel'] = verify;
        entity['reasons'] = option;
        option = new Array(1);
        option[0] = golfie;
        entity['feedbackReasons'] = option;
        entity['otherKey'] = golfie;
        oscard = _closure1_slot5;
        entity['trackOpen'] = oscard;
        report = function(argFoo) { // Original name: trackReport
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                tangon = michal.rating;
                entity = michal.reason;
                report = michal.feedback;
                zuuluu = null;
                michal = zuuluu != entity;
                verify = null;
                option = null;
                if(!michal) { _fun00002_ip = 44; continue _fun00001 }
 34:
                verify = entity.code;
                option = entity.value;
 44:
                golfie = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 8;
                oscard = oscard[entity];
                entity = undefined;
                golfie = golfie.bind(entity)(oscard);
                offset = zuuluu != report;
                oscard = '';
                if(!offset) { _fun00002_ip = 83; continue _fun00001 }
 80:
                oscard = report;
 83:
                yankee = _closure2_slot0;
                sizing = undefined;
                kiloes = tangon;
                backup = verify;
                foxtra = option;
                romeon = oscard;
                report = sizing[golfie](kiloes, backup, foxtra, romeon, yankee, offset);
                if(!(zuuluu != tangon)) { _fun00002_ip = 142; continue _fun00001 }
 112:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 9;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.presentFeedbackSent;
                michal = michal.bind(zuuluu)();
 142:
                return entity;
            }
        };
        entity['trackReport'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();