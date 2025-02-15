// app/modules/quests/native/QuestRewardTile.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useMemo;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AppState;
    var _closure1_slot6 = options;
    options = tango.View;
    var _closure1_slot7 = options;
    tango = tango.StyleSheet;
    var _closure1_slot8 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = function() {
        entity = {};
        mike = {'borderRadius': null, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
        oscar = _closure1_slot1;
        report = _closure1_slot2;
        tango = 6;
        report = report[tango];
        tango = undefined;
        tango = oscar.bind(tango)(report);
        tango = tango.radii;
        tango = tango.sm;
        mike['borderRadius'] = tango;
        tango = 'center';
        entity['container'] = mike;
        mike = {'overflow': 'hidden', 'height': '100%', 'width': '100%'};
        entity['video'] = mike;
        mike = {'height': '100%', 'width': '100%'};
        entity['image'] = mike;
        mike = {};
        zulu = _closure1_slot8;
        golf = zulu.absoluteFillObject;
        options = mike;
        zulu = copyDataProperties(options, golf);
        zulu = 'justifyContent';
        mike[zulu] = tango;
        zulu = 'alignItems';
        mike[zulu] = tango;
        entity['loader'] = mike;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/native/QuestRewardTile.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: QuestRewardTile
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            mike = zulu.quest;
            var _closure2_slot0 = mike;
            kilo = zulu.height;
            romeo = zulu.width;
            golf = zulu.style;
            yankee = zulu.paused;
            tango = undefined;
            if(!(yankee === tango)) { _fun00002_ip = 44; continue _fun00001 }
 42:
            yankee = false;
 44:
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            report = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 7;
            zulu = options[zulu];
            verify = report.bind(tango)(zulu);
            options = verify.useStateFromStores;
            zulu = _closure1_slot9;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                entity = _closure1_slot9;
                entity = entity.useReducedMotion;
                return entity;
            };
            offset = options.bind(verify)(report, zulu);
            report = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 8;
                mike = golf[entity];
                report = undefined;
                tango = oscar.bind(report)(mike);
                zulu = tango.getQuestAsset;
                mike = _closure2_slot0;
                entity = golf[entity];
                entity = oscar.bind(report)(entity);
                entity = entity.QuestAssetType;
                entity = entity.REWARD;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            backup = report.bind(tango)(mike, zulu);
            _closure2_slot1 = backup;
            mike = _closure1_slot11;
            foxtrot = mike.bind(tango)();
            report = _closure1_slot4;
            zulu = report.useState;
            mike = _closure1_slot6;
            options = mike.currentState;
            mike = 'active';
            mike = mike === options;
            options = zulu.bind(report)(mike);
            zulu = _closure1_slot3;
            mike = 2;
            zulu = zulu.bind(tango)(options, mike);
            mike = 0;
            verify = zulu[mike];
            mike = 1;
            mike = zulu[mike];
            _closure2_slot2 = mike;
            zulu = report.useEffect;
            options = backup.isAnimated;
            mike = new Array(1);
            mike[0] = options;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    mike = mike.isAnimated;
                    if(mike) { _fun00004_ip = 22; continue _fun00003 }
 18:
                    mike = undefined;
                    return mike;
 22:
                    report = _closure1_slot6;
                    tango = report.addEventListener;
                    zulu = 'change';
                    mike = function(argFoo) {
                        zulu = _closure2_slot2;
                        entity = undefined;
                        tango = 'active';
                        mike = argFoo;
                        mike = tango === mike;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = tango.bind(report)(zulu, mike);
                    var _closure3_slot0 = mike;
                    entity = function() {
                        mike = _closure3_slot0;
                        entity = mike.remove;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                }
            };
            entity = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot10;
            mike = _closure1_slot7;
            entity = {};
            options = foxtrot.container;
            report = new Array(3);
            report[0] = options;
            options = {};
            options['height'] = kilo;
            options['width'] = romeo;
            report[1] = options;
            report[2] = golf;
            entity['style'] = report;
            report = backup.isAnimated;
            if(report) { _fun00002_ip = 353; continue _fun00001 }
 290:
            options = _closure1_slot10;
            golf = _closure1_slot1;
            romeo = _closure1_slot2;
            report = 10;
            report = romeo[report];
            golf = golf.bind(tango)(report);
            report = {};
            romeo = {};
            kilo = backup.url;
            romeo['uri'] = kilo;
            report['source'] = romeo;
            romeo = foxtrot.image;
            report['style'] = romeo;
            report = options.bind(tango)(golf, report);
            _fun00002_ip = 507; continue _fun00001;
 353:
            output = backup.url;
            sizing = output.replace;
            golf = _closure1_slot0;
            kilo = _closure1_slot2;
            options = 8;
            options = kilo[options];
            options = golf.bind(tango)(options);
            romeo = options.EXTENSION_RE;
            options = '.png';
            romeo = sizing.bind(output)(romeo, options);
            options = _closure1_slot10;
            oscar = 9;
            oscar = kilo[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.VideoComponent;
            oscar = {};
            foxtrot = foxtrot.video;
            oscar['style'] = foxtrot;
            foxtrot = {};
            backup = backup.url;
            foxtrot['uri'] = backup;
            oscar['source'] = foxtrot;
            oscar['poster'] = romeo;
            romeo = 'cover';
            oscar['resizeMode'] = romeo;
            verify = !verify;
            if(verify) { _fun00002_ip = 474; continue _fun00001 }
 471:
            verify = yankee;
 474:
            if(verify) { _fun00002_ip = 480; continue _fun00001 }
 477:
            verify = offset;
 480:
            oscar['paused'] = verify;
            verify = 'mix';
            oscar['mixWithOthers'] = verify;
            verify = true;
            oscar['muted'] = verify;
            report = options.bind(tango)(golf, oscar);
 507:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();