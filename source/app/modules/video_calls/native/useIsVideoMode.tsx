// app/modules/video_calls/native/useIsVideoMode.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function() { // Original name: isVideoMode
        _fun103063: for(var _fun103063_ip = 0; ; ) switch(_fun103063_ip) {
 0:
            zulu = arguments[0];
            golf = arguments[1];
            report = arguments[2];
            oscar = arguments[3];
            tango = arguments[4];
            entity = undefined;
            if(!(zulu === entity)) { _fun103063_ip = 28; continue _fun103063 }
 21:
            zulu = _closure1_slot3;
 28:
            if(!(golf === entity)) { _fun103063_ip = 39; continue _fun103063 }
 32:
            golf = _closure1_slot5;
 39:
            if(!(report === entity)) { _fun103063_ip = 50; continue _fun103063 }
 43:
            report = _closure1_slot2;
 50:
            if(!(oscar === entity)) { _fun103063_ip = 61; continue _fun103063 }
 54:
            oscar = _closure1_slot6;
 61:
            if(!(tango === entity)) { _fun103063_ip = 72; continue _fun103063 }
 65:
            tango = _closure1_slot4;
 72:
            mike = zulu.getChannel;
            entity = golf.getVoiceChannelId;
            entity = entity.bind(golf)();
            zulu = mike.bind(zulu)(entity);
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun103063_ip = 157; continue _fun103063 }
 101:
            mike = report.getAllActiveStreams;
            mike = mike.bind(report)();
            report = mike.length;
            mike = 0;
            mike = report > mike;
            if(mike) { _fun103063_ip = 141; continue _fun103063 }
 125:
            report = oscar.hasVideo;
            zulu = zulu.id;
            mike = report.bind(oscar)(zulu);
 141:
            if(mike) { _fun103063_ip = 154; continue _fun103063 }
 144:
            zulu = tango.isVideoEnabled;
            mike = zulu.bind(tango)();
 154:
            entity = mike;
 157:
            return entity;
        }
    };
    var _closure1_slot7 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/video_calls/native/useIsVideoMode.tsx';
    report = oscar.bind(golf)(report);
    tango = function() { // Original name: _default
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        report = _closure1_slot3;
        mike = new Array(5);
        mike[0] = report;
        report = _closure1_slot5;
        mike[1] = report;
        report = _closure1_slot4;
        mike[2] = report;
        report = _closure1_slot6;
        mike[3] = report;
        entity = _closure1_slot2;
        mike[4] = entity;
        entity = function() {
            golf = _closure1_slot7;
            romeo = _closure1_slot3;
            yankee = _closure1_slot5;
            offset = _closure1_slot2;
            verify = _closure1_slot6;
            options = _closure1_slot4;
            foxtrot = undefined;
            entity = foxtrot[golf](romeo, yankee, offset, verify, options, golf);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    zulu['isVideoMode'] = mike;
    return entity;
})();