// app/modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx
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
    tango = function() { // Original name: trackOpen
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 3;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot3;
        zulu = mike.OPEN_POPOUT;
        mike = {};
        oscar = 'Call Session Feedback';
        mike['type'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot5 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: VoiceFeedbackActionSheet
        entity = argFoo;
        entity = entity.analyticsData;
        var _closure2_slot0 = entity;
        mike = _closure1_slot1;
        foxtrot = _closure1_slot2;
        entity = 4;
        entity = foxtrot[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        offset = true;
        options = entity.bind(tango)(offset);
        romeo = _closure1_slot0;
        entity = 5;
        entity = foxtrot[entity];
        golf = romeo.bind(tango)(entity);
        zulu = golf.improperGetEnglishIntlMessageText;
        entity = 'CALL_FEEDBACK_OPTION_OTHER';
        golf = zulu.bind(golf)(entity);
        zulu = _closure1_slot4;
        entity = 6;
        entity = foxtrot[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        verify = 7;
        yankee = foxtrot[verify];
        yankee = romeo.bind(tango)(yankee);
        kilo = yankee.intl;
        backup = kilo.string;
        yankee = foxtrot[verify];
        yankee = romeo.bind(tango)(yankee);
        yankee = yankee.t;
        yankee = yankee.Ss6tlZ;
        yankee = backup.bind(kilo)(yankee);
        entity['headerLabel'] = yankee;
        entity['showHeaderCloseButton'] = offset;
        offset = foxtrot[verify];
        offset = romeo.bind(tango)(offset);
        backup = offset.intl;
        yankee = backup.string;
        offset = foxtrot[verify];
        offset = romeo.bind(tango)(offset);
        offset = offset.t;
        offset = offset.tLi4cX;
        offset = yankee.bind(backup)(offset);
        entity['ratingsBodyLabel'] = offset;
        offset = foxtrot[verify];
        offset = romeo.bind(tango)(offset);
        yankee = offset.intl;
        offset = yankee.string;
        verify = foxtrot[verify];
        verify = romeo.bind(tango)(verify);
        verify = verify.t;
        verify = verify.FJmoxM;
        verify = offset.bind(yankee)(verify);
        entity['reasonsHeaderLabel'] = verify;
        entity['reasons'] = options;
        options = new Array(1);
        options[0] = golf;
        entity['feedbackReasons'] = options;
        entity['otherKey'] = golf;
        oscar = _closure1_slot5;
        entity['trackOpen'] = oscar;
        report = function(argFoo) { // Original name: trackReport
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = argFoo;
                tango = mike.rating;
                entity = mike.reason;
                report = mike.feedback;
                zulu = null;
                mike = zulu != entity;
                verify = null;
                options = null;
                if(!mike) { _fun00002_ip = 44; continue _fun00001 }
 34:
                verify = entity.code;
                options = entity.value;
 44:
                golf = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 8;
                oscar = oscar[entity];
                entity = undefined;
                golf = golf.bind(entity)(oscar);
                offset = zulu != report;
                oscar = '';
                if(!offset) { _fun00002_ip = 83; continue _fun00001 }
 80:
                oscar = report;
 83:
                yankee = _closure2_slot0;
                sizing = undefined;
                kilo = tango;
                backup = verify;
                foxtrot = options;
                romeo = oscar;
                report = sizing[golf](kilo, backup, foxtrot, romeo, yankee, offset);
                if(!(zulu != tango)) { _fun00002_ip = 142; continue _fun00001 }
 112:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 9;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.presentFeedbackSent;
                mike = mike.bind(zulu)();
 142:
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