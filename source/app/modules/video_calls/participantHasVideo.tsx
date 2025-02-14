// app/modules/video_calls/participantHasVideo.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: participantHasVideo
        _fun75812: for(var _fun75812_ip = 0; ; ) switch(_fun75812_ip) {
 0:
            zulu = argFoo;
            tango = zulu.type;
            entity = _closure1_slot4;
            entity = entity.ACTIVITY;
            entity = tango !== entity;
            if(!entity) { _fun75812_ip = 47; continue _fun75812 }
 28:
            report = zulu.type;
            tango = _closure1_slot4;
            tango = tango.PRESENCE_EMBEDDED_ACTIVITY;
            entity = report !== tango;
 47:
            if(!entity) { _fun75812_ip = 114; continue _fun75812 }
 50:
            mike = _closure1_slot5;
            tango = undefined;
            mike = mike.bind(tango)(zulu);
            if(mike) { _fun75812_ip = 99; continue _fun75812 }
 64:
            report = zulu.voiceState;
            mike = null;
            oscar = mike == report;
            tango = undefined;
            if(oscar) { _fun75812_ip = 87; continue _fun75812 }
 81:
            tango = report.selfVideo;
 87:
            mike = mike != tango;
            if(!mike) { _fun75812_ip = 97; continue _fun75812 }
 94:
            mike = tango;
 97:
            _fun75812_ip = 111; continue _fun75812;
 99:
            tango = zulu.streamId;
            zulu = null;
            mike = zulu != tango;
 111:
            entity = mike;
 114:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    tango = function(argFoo) { // Original name: canRenderParticipantVideo
        _fun75813: for(var _fun75813_ip = 0; ; ) switch(_fun75813_ip) {
 0:
            report = argFoo;
            golf = arguments[1];
            oscar = undefined;
            if(!(golf === oscar)) { _fun75813_ip = 19; continue _fun75813 }
 12:
            golf = _closure1_slot3;
 19:
            entity = null;
            entity = entity != report;
            if(!entity) { _fun75813_ip = 138; continue _fun75813 }
 28:
            mike = _closure1_slot7;
            mike = mike.bind(oscar)(report);
            zulu = !mike;
            mike = !zulu;
            if(zulu) { _fun75813_ip = 135; continue _fun75813 }
 49:
            zulu = _closure1_slot5;
            zulu = zulu.bind(oscar)(report);
            zulu = !zulu;
            if(zulu) { _fun75813_ip = 92; continue _fun75813 }
 64:
            options = report.user;
            verify = options.id;
            offset = _closure1_slot2;
            options = offset.getId;
            options = options.bind(offset)();
            zulu = verify !== options;
 92:
            if(!zulu) { _fun75813_ip = 132; continue _fun75813 }
 95:
            tango = _closure1_slot6;
            tango = tango.bind(oscar)(report);
            tango = !tango;
            if(tango) { _fun75813_ip = 129; continue _fun75813 }
 110:
            oscar = golf.isLocalVideoDisabled;
            report = report.id;
            report = oscar.bind(golf)(report);
            tango = !report;
 129:
            zulu = tango;
 132:
            mike = zulu;
 135:
            entity = mike;
 138:
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.ParticipantTypes;
    var _closure1_slot4 = verify;
    verify = oscar.isStreamParticipant;
    var _closure1_slot5 = verify;
    oscar = oscar.isUserParticipant;
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/video_calls/participantHasVideo.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['canRenderParticipantVideo'] = tango;
    mike = function(argFoo) { // Original name: useCanRenderParticipantVideo
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            tango = _closure1_slot8;
            zulu = _closure2_slot0;
            mike = _closure1_slot3;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useCanRenderParticipantVideo'] = mike;
    return entity;
})();