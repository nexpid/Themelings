// app/modules/stage_channels/shouldShowEndStageModal.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/shouldShowEndStageModal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: shouldShowEndStageModal
        _fun102965: for(var _fun102965_ip = 0; ; ) switch(_fun102965_ip) {
 0:
            golf = argFoo;
            var _closure2_slot0 = golf;
            entity = golf.isGuildStageVoice;
            entity = entity.bind(golf)();
            if(entity) { _fun102965_ip = 26; continue _fun102965 }
 22:
            entity = false;
            return entity;
 26:
            zulu = _closure1_slot5;
            mike = zulu.isLive;
            entity = golf.id;
            entity = mike.bind(zulu)(entity);
            if(entity) { _fun102965_ip = 56; continue _fun102965 }
 52:
            entity = false;
            return entity;
 56:
            mike = _closure1_slot2;
            entity = mike.getId;
            options = entity.bind(mike)();
            var _closure2_slot1 = options;
            zulu = _closure1_slot4;
            mike = zulu.isModerator;
            entity = golf.id;
            entity = mike.bind(zulu)(options, entity);
            mike = !entity;
            entity = !mike;
            if(mike) { _fun102965_ip = 268; continue _fun102965 }
 107:
            report = _closure1_slot4;
            zulu = report.isSpeaker;
            mike = golf.id;
            mike = zulu.bind(report)(options, mike);
            zulu = !mike;
            mike = !zulu;
            if(zulu) { _fun102965_ip = 265; continue _fun102965 }
 140:
            options = _closure1_slot3;
            report = options.getMutableParticipants;
            zulu = golf.id;
            options = report.bind(options)(zulu);
            report = options.find;
            zulu = function(argFoo) {
                _fun102966: for(var _fun102966_ip = 0; ; ) switch(_fun102966_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu.user;
                    tango = entity.id;
                    entity = _closure2_slot1;
                    entity = tango !== entity;
                    if(!entity) { _fun102966_ip = 65; continue _fun102966 }
 27:
                    report = _closure1_slot4;
                    tango = report.isModerator;
                    zulu = zulu.user;
                    zulu = zulu.id;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = tango.bind(report)(zulu, mike);
 65:
                    return entity;
                }
            };
            zulu = report.bind(options)(zulu);
            report = null;
            zulu = report == zulu;
            if(zulu) { _fun102965_ip = 262; continue _fun102965 }
 186:
            verify = _closure1_slot3;
            options = verify.getMutableParticipants;
            golf = golf.id;
            yankee = _closure1_slot0;
            offset = _closure1_slot1;
            oscar = 4;
            offset = offset[oscar];
            oscar = undefined;
            oscar = yankee.bind(oscar)(offset);
            oscar = oscar.StageChannelParticipantNamedIndex;
            oscar = oscar.SPEAKER;
            golf = options.bind(verify)(golf, oscar);
            oscar = golf.find;
            tango = function(argFoo) {
                _fun102967: for(var _fun102967_ip = 0; ; ) switch(_fun102967_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu.user;
                    tango = entity.id;
                    entity = _closure2_slot1;
                    entity = tango !== entity;
                    if(!entity) { _fun102967_ip = 65; continue _fun102967 }
 27:
                    report = _closure1_slot4;
                    tango = report.isModerator;
                    zulu = zulu.user;
                    zulu = zulu.id;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = tango.bind(report)(zulu, mike);
 65:
                    return entity;
                }
            };
            tango = oscar.bind(golf)(tango);
            zulu = report == tango;
 262:
            mike = zulu;
 265:
            entity = mike;
 268:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();