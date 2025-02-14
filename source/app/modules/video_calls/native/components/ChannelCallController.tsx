// app/modules/video_calls/native/components/ChannelCallController.tsx
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
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = function(argFoo) { // Original name: ChannelPrivateVoiceCallController
        _fun104121: for(var _fun104121_ip = 0; ; ) switch(_fun104121_ip) {
 0:
            entity = argFoo;
            oscar = entity.channel;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 3;
            entity = tango[entity];
            report = undefined;
            entity = zulu.bind(report)(entity);
            entity = entity.bind(report)(oscar);
            zulu = oscar.isPrivate;
            zulu = zulu.bind(oscar)();
            if(!zulu) { _fun104121_ip = 54; continue _fun104121 }
 51:
            if(entity) { _fun104121_ip = 76; continue _fun104121 }
 54:
            tango = _closure1_slot5;
            zulu = _closure1_slot7;
            entity = {};
            entity['channel'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun104121_ip = 112; continue _fun104121;
 76:
            tango = _closure1_slot5;
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 4;
            mike = golf[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['channel'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 112:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    tango = function(argFoo) { // Original name: ChannelCallController
        _fun104122: for(var _fun104122_ip = 0; ; ) switch(_fun104122_ip) {
 0:
            entity = argFoo;
            golf = entity.channel;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 5;
            entity = tango[entity];
            report = undefined;
            entity = zulu.bind(report)(entity);
            oscar = entity.bind(report)(golf);
            entity = null;
            if(!(entity == oscar)) { _fun104122_ip = 66; continue _fun104122 }
 44:
            tango = _closure1_slot5;
            zulu = _closure1_slot8;
            entity = {};
            entity['channel'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun104122_ip = 113; continue _fun104122;
 66:
            tango = _closure1_slot5;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 6;
            mike = options[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.ChannelCallSingleController;
            mike = {};
            mike['channel'] = golf;
            mike['selectedParticipant'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 113:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    tango = function(argFoo) { // Original name: ChannelCallGridContainer
        entity = argFoo;
        report = entity.channel;
        var _closure2_slot0 = report;
        oscar = _closure1_slot3;
        tango = oscar.useEffect;
        golf = report.id;
        zulu = new Array(1);
        zulu[0] = golf;
        mike = function() {
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            entity = 7;
            mike = options[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot4;
            zulu = mike.VIDEO_LAYOUT_TOGGLED;
            mike = {};
            golf = 'grid';
            mike['video_layout'] = golf;
            golf = _closure1_slot0;
            oscar = 8;
            oscar = options[oscar];
            options = golf.bind(entity)(oscar);
            golf = options.collectVoiceAnalyticsMetadata;
            oscar = _closure2_slot0;
            oscar = oscar.id;
            verify = golf.bind(options)(oscar);
            offset = mike;
            oscar = copyDataProperties(offset, verify);
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        mike = tango.bind(oscar)(mike, zulu);
        tango = _closure1_slot5;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 9;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = {};
        entity['channel'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_calls/native/components/ChannelCallController.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        _fun104125: for(var _fun104125_ip = 0; ; ) switch(_fun104125_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            entity = null;
            zulu = entity == mike;
            if(zulu) { _fun104125_ip = 42; continue _fun104125 }
 17:
            report = _closure1_slot5;
            tango = _closure1_slot6;
            zulu = {};
            zulu['channel'] = mike;
            mike = undefined;
            entity = report.bind(mike)(tango, zulu);
 42:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();