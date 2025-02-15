// app/modules/stage_channels/native/components/AudienceGridRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: BlankAudience
        _fun104051: for(var _fun104051_ip = 0; ; ) switch(_fun104051_ip) {
 0:
            entity = argFoo;
            oscar = entity.count;
            report = new Array(0);
            zulu = 0;
            golf = zulu < oscar;
            mike = 5;
            tango = undefined;
            if(!golf) { _fun104051_ip = 76; continue _fun104051 }
 29:
            options = report.push;
            offset = _closure1_slot4;
            verify = _closure1_slot0;
            golf = _closure1_slot1;
            golf = golf[mike];
            verify = verify.bind(tango)(golf);
            golf = {};
            golf = offset.bind(tango)(verify, golf, zulu);
            golf = options.bind(report)(golf);
            zulu = zulu + 1;
            if(zulu < oscar) { _fun104051_ip = 29; continue _fun104051 }
 76:
            zulu = _closure1_slot4;
            mike = _closure1_slot5;
            entity = {};
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot8 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    options = report.bind(entity)(options);
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.View;
    var _closure1_slot2 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.MAX_AUDIENCE_ROW_LIMIT;
    var _closure1_slot3 = report;
    report = 3;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot4 = verify;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    verify = verify.Fragment;
    var _closure1_slot5 = verify;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    offset = oscar.bind(entity)(report);
    verify = offset.createStyles;
    report = {};
    yankee = {'flex': 1, 'flexDirection': 'row', 'marginVertical': 16, 'paddingHorizontal': 4, 'justifyContent': 'space-between'};
    report['rowContainer'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot7 = report;
    report = options.memo;
    tango = function(argFoo) {
        _fun104052: for(var _fun104052_ip = 0; ; ) switch(_fun104052_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            var _closure2_slot0 = mike;
            verify = entity.participants;
            foxtrot = entity.renderBlankAudience;
            tango = undefined;
            if(!(foxtrot === tango)) { _fun104052_ip = 36; continue _fun104052 }
 34:
            foxtrot = true;
 36:
            entity = entity.theme;
            var _closure2_slot1 = entity;
            entity = _closure1_slot7;
            oscar = entity.bind(tango)();
            options = 0;
            offset = 0;
            if(!foxtrot) { _fun104052_ip = 77; continue _fun104052 }
 64:
            mike = _closure1_slot3;
            entity = verify.length;
            offset = mike - entity;
 77:
            zulu = _closure1_slot6;
            mike = _closure1_slot2;
            entity = {};
            yankee = oscar.rowContainer;
            oscar = new Array(2);
            oscar[0] = yankee;
            yankee = {};
            romeo = 'center';
            if(!foxtrot) { _fun104052_ip = 116; continue _fun104052 }
 110:
            romeo = 'space-between';
 116:
            yankee['justifyContent'] = romeo;
            oscar[1] = yankee;
            entity['style'] = oscar;
            oscar = verify.map;
            report = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot4;
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 6;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                golf = _closure2_slot1;
                mike['theme'] = golf;
                oscar = _closure2_slot0;
                mike['channel'] = oscar;
                mike['participant'] = entity;
                entity = entity.id;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            oscar = oscar.bind(verify)(report);
            report = new Array(2);
            report[0] = oscar;
            oscar = null;
            if(!(offset > options)) { _fun104052_ip = 179; continue _fun104052 }
 159:
            verify = _closure1_slot4;
            options = _closure1_slot8;
            golf = {};
            golf['count'] = offset;
            oscar = verify.bind(tango)(options, golf);
 179:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = report.bind(options)(tango);
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/stage_channels/native/components/AudienceGridRow.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['BlankAudience'] = mike;
    return entity;
})();