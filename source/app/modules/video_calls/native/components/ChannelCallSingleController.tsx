// app/modules/video_calls/native/components/ChannelCallSingleController.tsx
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ParticipantTypes;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_calls/native/components/ChannelCallSingleController.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            golf = mike.selectedParticipant;
            var _closure2_slot0 = golf;
            oscar = mike.channel;
            var _closure2_slot1 = oscar;
            report = _closure1_slot3;
            tango = report.useEffect;
            mike = oscar.id;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot1;
                options = _closure1_slot2;
                entity = 6;
                mike = options[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.track;
                mike = _closure1_slot6;
                zulu = mike.VIDEO_LAYOUT_TOGGLED;
                mike = {};
                golf = 'focus';
                mike['video_layout'] = golf;
                golf = _closure1_slot0;
                oscar = 7;
                oscar = options[oscar];
                options = golf.bind(entity)(oscar);
                golf = options.collectVoiceAnalyticsMetadata;
                oscar = _closure2_slot1;
                oscar = oscar.id;
                verify = golf.bind(options)(oscar);
                offset = mike;
                oscar = copyDataProperties(offset, verify);
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            report = undefined;
            tango = zulu.bind(report)(mike);
            zulu = tango.useStateFromStores;
            verify = _closure1_slot4;
            mike = new Array(1);
            mike[0] = verify;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getActiveStreamForStreamKey;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = zulu.bind(tango)(mike, entity);
            mike = golf.type;
            entity = _closure1_slot7;
            entity = entity.STREAM;
            if(!(entity !== mike)) { _fun00002_ip = 270; continue _fun00001 }
 136:
            entity = _closure1_slot7;
            entity = entity.USER;
            if(!(entity !== mike)) { _fun00002_ip = 227; continue _fun00001 }
 150:
            entity = _closure1_slot7;
            entity = entity.HIDDEN_STREAM;
            if(!(entity !== mike)) { _fun00002_ip = 223; continue _fun00001 }
 164:
            entity = _closure1_slot7;
            entity = entity.ACTIVITY;
            if(!(entity !== mike)) { _fun00002_ip = 180; continue _fun00001 }
 178:
            return report;
 180:
            tango = _closure1_slot8;
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 12;
            entity = verify[entity];
            mike = mike.bind(report)(entity);
            entity = {};
            entity['participant'] = golf;
            entity['channel'] = oscar;
            entity = tango.bind(report)(mike, entity);
            return entity;
 223:
            entity = null;
            return entity;
 227:
            tango = _closure1_slot8;
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 11;
            entity = verify[entity];
            mike = mike.bind(report)(entity);
            entity = {};
            entity['participant'] = golf;
            entity['channel'] = oscar;
            entity = tango.bind(report)(mike, entity);
            return entity;
 270:
            entity = golf.user;
            verify = entity.id;
            mike = _closure1_slot5;
            entity = mike.getId;
            mike = entity.bind(mike)();
            entity = null;
            zulu = entity != zulu;
            if(!zulu) { _fun00002_ip = 361; continue _fun00001 }
 303:
            tango = _closure1_slot8;
            zulu = _closure1_slot1;
            if(!(verify !== mike)) { _fun00002_ip = 328; continue _fun00001 }
 315:
            verify = _closure1_slot2;
            mike = 10;
            mike = verify[mike];
            _fun00002_ip = 339; continue _fun00001;
 328:
            verify = _closure1_slot2;
            options = 9;
            mike = verify[options];
 339:
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['participant'] = golf;
            mike['channel'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 361:
            return entity;
        }
    };
    zulu['ChannelCallSingleController'] = mike;
    return entity;
})();