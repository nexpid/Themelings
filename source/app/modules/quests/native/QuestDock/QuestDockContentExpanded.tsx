// app/modules/quests/native/QuestDock/QuestDockContentExpanded.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
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
    var _closure1_slot3 = golf;
    romeo = 1;
    tango = oscar[romeo];
    tango = report.bind(entity)(tango);
    yankee = tango.StyleSheet;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.QuestDockMode;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.QUEST_DOCK_MODE_CHANGE_PHYSICS;
    var _closure1_slot5 = options;
    tango = tango.QUEST_DOCK_EXPANDED_HEIGHT;
    var _closure1_slot6 = tango;
    tango = 4;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot7 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    kilo = yankee.absoluteFillObject;
    sizing = offset;
    yankee = copyDataProperties(sizing, kilo);
    yankee = 'bottom';
    offset[yankee] = entity;
    foxtrot = 'flex';
    yankee = 'display';
    offset[yankee] = foxtrot;
    yankee = 'zIndex';
    offset[yankee] = romeo;
    tango['wrapper'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot9 = tango;
    tango = {};
    options = 'function QuestDockContentExpandedTsx1(){const{isEnrolled,QUEST_DOCK_EXPANDED_HEIGHT,windowDimensions,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:isEnrolled?undefined:QUEST_DOCK_EXPANDED_HEIGHT,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}';
    tango['code'] = options;
    var _closure1_slot10 = tango;
    tango = golf.memo;
    mike = function() { // Original name: QuestDockContentExpanded
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = _closure1_slot3;
            zulu = oscar.useContext;
            report = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 6;
            mike = verify[mike];
            tango = undefined;
            mike = report.bind(tango)(mike);
            mike = zulu.bind(oscar)(mike);
            offset = mike.quest;
            mike = _closure1_slot9;
            report = mike.bind(tango)();
            zulu = oscar.useContext;
            options = _closure1_slot0;
            mike = 7;
            mike = verify[mike];
            mike = options.bind(tango)(mike);
            mike = mike.QuestDockGestureContext;
            mike = zulu.bind(oscar)(mike);
            romeo = mike.activeQuestDockMode;
            var _closure2_slot0 = romeo;
            yankee = mike.questDockWrapperSpecs;
            var _closure2_slot1 = yankee;
            foxtrot = mike.windowDimensions;
            var _closure2_slot2 = foxtrot;
            oscar = offset.userStatus;
            zulu = null;
            options = zulu == oscar;
            mike = undefined;
            if(options) { _fun00002_ip = 142; continue _fun00001 }
 136:
            mike = oscar.enrolledAt;
 142:
            oscar = zulu != mike;
            var _closure2_slot3 = oscar;
            backup = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 8;
            mike = verify[mike];
            zulu = backup.bind(tango)(mike);
            mike = zulu.useAnimatedStyle;
            entity = function() { // Original name: n
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = {};
                    tango = _closure2_slot3;
                    golf = undefined;
                    zulu = undefined;
                    if(tango) { _fun00004_ip = 23; continue _fun00003 }
 16:
                    zulu = _closure1_slot6;
 23:
                    entity['height'] = zulu;
                    tango = _closure2_slot2;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    zulu = zulu.width;
                    entity['width'] = zulu;
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    options = 9;
                    zulu = zulu[options];
                    verify = report.bind(golf)(zulu);
                    report = verify.withSpring;
                    oscar = _closure2_slot0;
                    zulu = oscar.get;
                    offset = zulu.bind(oscar)();
                    zulu = _closure1_slot4;
                    oscar = zulu.EXPANDED;
                    zulu = 0;
                    if(!(offset === oscar)) { _fun00004_ip = 109; continue _fun00003 }
 106:
                    zulu = 1;
 109:
                    oscar = _closure1_slot5;
                    zulu = report.bind(verify)(zulu, oscar);
                    entity['opacity'] = zulu;
                    zulu = {};
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    report = report.bind(golf)(tango);
                    tango = report.withSpring;
                    options = _closure2_slot1;
                    golf = options.get;
                    golf = golf.bind(options)();
                    golf = golf.width;
                    options = _closure2_slot2;
                    mike = options.get;
                    mike = mike.bind(options)();
                    mike = mike.width;
                    golf = golf - mike;
                    mike = 2;
                    mike = golf / mike;
                    mike = tango.bind(report)(mike, oscar);
                    zulu['translateX'] = mike;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity['transform'] = mike;
                    return entity;
                }
            };
            options = {};
            options['isEnrolled'] = oscar;
            kilo = _closure1_slot6;
            options['QUEST_DOCK_EXPANDED_HEIGHT'] = kilo;
            options['windowDimensions'] = foxtrot;
            foxtrot = 9;
            foxtrot = verify[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.withSpring;
            options['withSpring'] = foxtrot;
            options['activeQuestDockMode'] = romeo;
            romeo = _closure1_slot4;
            options['QuestDockMode'] = romeo;
            romeo = _closure1_slot5;
            options['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = romeo;
            options['questDockWrapperSpecs'] = yankee;
            entity['__closure'] = options;
            options = 17161265612101.0;
            entity['__workletHash'] = options;
            options = _closure1_slot10;
            entity['__initData'] = options;
            options = mike.bind(zulu)(entity);
            zulu = _closure1_slot8;
            mike = _closure1_slot1;
            entity = 10;
            entity = verify[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            verify = report.wrapper;
            report = new Array(2);
            report[0] = verify;
            report[1] = options;
            entity['style'] = report;
            options = !oscar;
            if(oscar) { _fun00002_ip = 372; continue _fun00001 }
 340:
            yankee = _closure1_slot7;
            verify = _closure1_slot1;
            romeo = _closure1_slot2;
            report = 11;
            report = romeo[report];
            verify = verify.bind(tango)(report);
            report = {};
            options = yankee.bind(tango)(verify, report);
 372:
            report = new Array(2);
            report[0] = options;
            if(!oscar) { _fun00002_ip = 425; continue _fun00001 }
 383:
            verify = _closure1_slot7;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = 12;
            golf = yankee[golf];
            options = options.bind(tango)(golf);
            golf = {};
            offset = offset.id;
            golf['questId'] = offset;
            oscar = verify.bind(tango)(options, golf);
 425:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/native/QuestDock/QuestDockContentExpanded.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();