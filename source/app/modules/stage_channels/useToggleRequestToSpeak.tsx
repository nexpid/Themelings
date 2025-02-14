// app/modules/stage_channels/useToggleRequestToSpeak.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/useToggleRequestToSpeak.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useToggleRequestToSpeak
        _fun103009: for(var _fun103009_ip = 0; ; ) switch(_fun103009_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 3;
            oscar = entity[oscar];
            golf = undefined;
            offset = tango.bind(golf)(oscar);
            verify = offset.useStateFromStores;
            oscar = _closure1_slot5;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                mike = _closure1_slot5;
                entity = mike.getId;
                entity = entity.bind(mike)();
                return entity;
            };
            verify = verify.bind(offset)(options, oscar);
            offset = _closure1_slot1;
            options = 4;
            oscar = entity[options];
            oscar = offset.bind(golf)(oscar);
            report = report.id;
            report = oscar.bind(golf)(verify, report);
            var _closure2_slot1 = report;
            entity = entity[options];
            entity = tango.bind(golf)(entity);
            entity = entity.RequestToSpeakStates;
            entity = entity.REQUESTED_TO_SPEAK;
            entity = report === entity;
            if(entity) { _fun103009_ip = 156; continue _fun103009 }
 123:
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[options];
            tango = oscar.bind(golf)(tango);
            tango = tango.RequestToSpeakStates;
            tango = tango.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            entity = report === tango;
 156:
            var _closure2_slot2 = entity;
            oscar = _closure1_slot4;
            tango = oscar.useState;
            report = tango.bind(oscar)(entity);
            tango = _closure1_slot3;
            zulu = 2;
            report = tango.bind(golf)(report, zulu);
            zulu = 0;
            zulu = report[zulu];
            var _closure2_slot3 = zulu;
            tango = 1;
            tango = report[tango];
            var _closure2_slot4 = tango;
            report = oscar.useEffect;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                zulu = _closure2_slot4;
                mike = _closure2_slot2;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = report.bind(oscar)(entity, tango);
            entity = new Array(2);
            entity[0] = zulu;
            mike = function() {
                _fun103012: for(var _fun103012_ip = 0; ; ) switch(_fun103012_ip) {
 0:
                    report = _closure2_slot1;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 4;
                    tango = tango[entity];
                    entity = undefined;
                    tango = oscar.bind(entity)(tango);
                    tango = tango.RequestToSpeakStates;
                    tango = tango.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                    if(!(report !== tango)) { _fun103012_ip = 93; continue _fun103012 }
 48:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 5;
                    tango = oscar[tango];
                    golf = report.bind(entity)(tango);
                    oscar = golf.toggleRequestToSpeak;
                    report = _closure2_slot0;
                    tango = _closure2_slot3;
                    tango = !tango;
                    tango = oscar.bind(golf)(report, tango);
                    _fun103012_ip = 131; continue _fun103012;
 93:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 5;
                    zulu = report[zulu];
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.audienceAckRequestToSpeak;
                    tango = _closure2_slot0;
                    zulu = true;
                    zulu = report.bind(oscar)(tango, zulu);
 131:
                    zulu = _closure2_slot4;
                    mike = _closure2_slot3;
                    mike = !mike;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            entity[1] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();