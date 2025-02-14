// app/modules/stage_channels/native/components/StageGridRow.tsx
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
    golf = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    tango['container'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot5 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun104009: for(var _fun104009_ip = 0; ; ) switch(_fun104009_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            var _closure2_slot0 = mike;
            golf = entity.participants;
            options = entity.row;
            tango = undefined;
            var _closure2_slot1 = tango;
            mike = _closure1_slot5;
            oscar = mike.bind(tango)();
            zulu = 3;
            mike = 0;
            if(!(mike === options)) { _fun104009_ip = 57; continue _fun104009 }
 52:
            zulu = golf.length;
 57:
            mike = 1;
            if(!(mike !== zulu)) { _fun104009_ip = 139; continue _fun104009 }
 64:
            mike = 2;
            if(!(mike !== zulu)) { _fun104009_ip = 105; continue _fun104009 }
 71:
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 4;
            mike = options[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.StageTileSize;
            mike = mike.THIRD;
            _fun104009_ip = 171; continue _fun104009;
 105:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 4;
            zulu = verify[zulu];
            zulu = options.bind(tango)(zulu);
            zulu = zulu.StageTileSize;
            mike = zulu.HALF;
            _fun104009_ip = 171; continue _fun104009;
 139:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 4;
            zulu = verify[zulu];
            zulu = options.bind(tango)(zulu);
            zulu = zulu.StageTileSize;
            mike = zulu.FULL;
 171:
            _closure2_slot1 = mike;
            zulu = _closure1_slot4;
            mike = _closure1_slot3;
            entity = {};
            oscar = oscar.container;
            entity['style'] = oscar;
            oscar = golf.map;
            report = function(argFoo) {
                _fun104010: for(var _fun104010_ip = 0; ; ) switch(_fun104010_ip) {
 0:
                    mike = argFoo;
                    tango = mike.type;
                    report = _closure1_slot0;
                    entity = _closure1_slot2;
                    options = 5;
                    entity = entity[options];
                    oscar = undefined;
                    entity = report.bind(oscar)(entity);
                    entity = entity.StageChannelParticipantTypes;
                    entity = entity.STREAM;
                    entity = tango === entity;
                    if(entity) { _fun104010_ip = 122; continue _fun104010 }
 52:
                    report = mike.type;
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    tango = golf.bind(oscar)(tango);
                    tango = tango.StageChannelParticipantTypes;
                    tango = tango.VOICE;
                    tango = report === tango;
                    if(!tango) { _fun104010_ip = 119; continue _fun104010 }
 93:
                    golf = mike.voiceState;
                    report = null;
                    options = report == golf;
                    report = undefined;
                    if(options) { _fun104010_ip = 116; continue _fun104010 }
 110:
                    report = golf.selfVideo;
 116:
                    tango = report;
 119:
                    entity = tango;
 122:
                    report = _closure1_slot4;
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    if(entity) { _fun104010_ip = 213; continue _fun104010 }
 137:
                    entity = 7;
                    entity = golf[entity];
                    options = tango.bind(oscar)(entity);
                    zulu = {};
                    verify = _closure2_slot0;
                    zulu['channel'] = verify;
                    zulu['participant'] = mike;
                    entity = _closure2_slot1;
                    zulu['size'] = entity;
                    offset = mike.id;
                    entity = global;
                    entity = entity.HermesInternal;
                    verify = entity.concat;
                    entity = 'stage-user-participant-';
                    entity = verify.bind(entity)(offset);
                    entity = report.bind(oscar)(options, zulu, entity);
                    _fun104010_ip = 287; continue _fun104010;
 213:
                    zulu = 6;
                    zulu = golf[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = {};
                    zulu['participant'] = mike;
                    options = _closure2_slot1;
                    zulu['size'] = options;
                    golf = _closure2_slot0;
                    zulu['channel'] = golf;
                    options = mike.id;
                    mike = global;
                    mike = mike.HermesInternal;
                    golf = mike.concat;
                    mike = 'stage-media-participant-';
                    mike = golf.bind(mike)(options);
                    entity = report.bind(oscar)(tango, zulu, mike);
 287:
                    return entity;
                }
            };
            report = oscar.bind(golf)(report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/native/components/StageGridRow.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();