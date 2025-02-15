// app/modules/video_calls/native/VoiceActionUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function() { // Original name: NOOP
        entity = undefined;
        return entity;
    };
    var _closure1_slot3 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    tango = {};
    golf = 0;
    tango['SERVER_MUTE'] = golf;
    entity = 'SERVER_MUTE';
    tango[golf] = entity;
    entity = 1;
    tango['SUPPRESS'] = entity;
    golf = 'SUPPRESS';
    tango[entity] = golf;
    options = 2;
    tango['SELF_MUTE'] = options;
    golf = 'SELF_MUTE';
    tango[options] = golf;
    options = 3;
    tango['NONE'] = options;
    golf = 'NONE';
    tango[options] = golf;
    var _closure1_slot2 = tango;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/video_calls/native/VoiceActionUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['DominantMuteState'] = tango;
    tango = function(argFoo) { // Original name: createMuteHandler
        _fun103147: for(var _fun103147_ip = 0; ; ) switch(_fun103147_ip) {
 0:
            report = argFoo;
            entity = arguments[1];
            golf = undefined;
            if(!(entity === golf)) { _fun103147_ip = 14; continue _fun103147 }
 12:
            entity = false;
 14:
            mike = _closure1_slot2;
            mike = mike.NONE;
            zulu = report.selfMute;
            if(!zulu) { _fun103147_ip = 46; continue _fun103147 }
 36:
            zulu = _closure1_slot2;
            mike = zulu.SELF_MUTE;
 46:
            if(entity) { _fun103147_ip = 76; continue _fun103147 }
 49:
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 0;
            entity = oscar[entity];
            entity = zulu.bind(golf)(entity);
            zulu = entity.handleToggleSelfMute;
            _fun103147_ip = 80; continue _fun103147;
 76:
            zulu = _closure1_slot3;
 80:
            entity = report.suppress;
            if(!entity) { _fun103147_ip = 124; continue _fun103147 }
 89:
            oscar = _closure1_slot0;
            options = _closure1_slot1;
            entity = 0;
            entity = options[entity];
            entity = oscar.bind(golf)(entity);
            zulu = entity.showSuppressedAlert;
            oscar = _closure1_slot2;
            mike = oscar.SUPPRESS;
 124:
            entity = report.mute;
            if(!entity) { _fun103147_ip = 168; continue _fun103147 }
 133:
            oscar = _closure1_slot0;
            options = _closure1_slot1;
            entity = 0;
            entity = options[entity];
            entity = oscar.bind(golf)(entity);
            zulu = entity.showServerMuteAlert;
            tango = _closure1_slot2;
            mike = tango.SERVER_MUTE;
 168:
            entity = {};
            tango = report.selfMute;
            if(tango) { _fun103147_ip = 185; continue _fun103147 }
 179:
            tango = report.mute;
 185:
            if(tango) { _fun103147_ip = 194; continue _fun103147 }
 188:
            tango = report.suppress;
 194:
            entity['mute'] = tango;
            entity['onPress'] = zulu;
            entity['dominantMuteState'] = mike;
            return entity;
        }
    };
    zulu['createMuteHandler'] = tango;
    mike = function(argFoo) { // Original name: createDeafHandler
        _fun103148: for(var _fun103148_ip = 0; ; ) switch(_fun103148_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            oscar = 0;
            mike = mike[oscar];
            report = undefined;
            mike = zulu.bind(report)(mike);
            mike = mike.handleToggleSelfDeaf;
            zulu = tango.deaf;
            if(!zulu) { _fun103148_ip = 65; continue _fun103148 }
 42:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscar];
            entity = zulu.bind(report)(entity);
            mike = entity.showServerDeafenAlert;
 65:
            entity = {};
            zulu = tango.selfDeaf;
            if(zulu) { _fun103148_ip = 82; continue _fun103148 }
 76:
            zulu = tango.deaf;
 82:
            entity['deaf'] = zulu;
            entity['onPress'] = mike;
            return entity;
        }
    };
    zulu['createDeafHandler'] = mike;
    return entity;
})();