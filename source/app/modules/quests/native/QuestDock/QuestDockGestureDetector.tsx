// app/modules/quests/native/QuestDock/QuestDockGestureDetector.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    mike = function() { // Original name: useQuestDockSwipeGesture
        tango = _closure1_slot3;
        zulu = tango.useContext;
        offset = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 4;
        entity = yankee[entity];
        verify = undefined;
        entity = offset.bind(verify)(entity);
        entity = entity.QuestDockGestureContext;
        entity = zulu.bind(tango)(entity);
        foxtrot = entity.questDockWrapperSpecs;
        var _closure2_slot0 = foxtrot;
        romeo = entity.activeQuestDockMode;
        var _closure2_slot1 = romeo;
        backup = entity.windowDimensions;
        var _closure2_slot2 = backup;
        entity = entity.minExpandedContentHeight;
        var _closure2_slot3 = entity;
        tango = _closure1_slot1;
        zulu = 5;
        zulu = yankee[zulu];
        zulu = tango.bind(verify)(zulu);
        sizing = zulu.bind(verify)();
        var _closure2_slot4 = sizing;
        report = _closure1_slot3;
        tango = report.useContext;
        zulu = 6;
        zulu = yankee[zulu];
        zulu = offset.bind(verify)(zulu);
        zulu = zulu.QuestDockExternalCoordinationContext;
        zulu = tango.bind(report)(zulu);
        result = zulu.restingQuestDockMode;
        var _closure2_slot5 = result;
        golf = zulu.setRestingQuestDockMode;
        var _closure2_slot6 = golf;
        options = 7;
        zulu = yankee[options];
        kilo = offset.bind(verify)(zulu);
        tango = kilo.useSharedValue;
        zulu = {'absoluteX': 0, 'absoluteY': 0, 'x': 0, 'y': 0, 'height': 0, 'isDrawer': null, 'active': false};
        report = 0;
        output = result.get;
        echo = output.bind(result)();
        output = _closure1_slot4;
        output = output.EXPANDED;
        output = echo === output;
        zulu['isDrawer'] = output;
        output = tango.bind(kilo)(zulu);
        var _closure2_slot7 = output;
        zulu = yankee[options];
        tango = offset.bind(verify)(zulu);
        zulu = tango.useSharedValue;
        kilo = zulu.bind(tango)(report);
        var _closure2_slot8 = kilo;
        report = _closure1_slot3;
        tango = report.useMemo;
        zulu = new Array(9);
        zulu[0] = result;
        zulu[1] = output;
        zulu[2] = sizing;
        zulu[3] = kilo;
        zulu[4] = backup;
        zulu[5] = foxtrot;
        zulu[6] = golf;
        zulu[7] = romeo;
        zulu[8] = entity;
        entity = function() {
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            kilo = 8;
            mike = offset[kilo];
            options = undefined;
            mike = verify.bind(options)(mike);
            zulu = mike.Gesture;
            mike = zulu.Pan;
            zulu = mike.bind(zulu)();
            mike = zulu.manualActivation;
            report = false;
            oscar = mike.bind(zulu)(report);
            zulu = oscar.maxPointers;
            mike = 1;
            zulu = zulu.bind(oscar)(mike);
            mike = zulu.shouldCancelWhenOutside;
            report = mike.bind(zulu)(report);
            zulu = report.onTouchesDown;
            mike = function(argFoo) { // Original name: I
                report = argFoo;
                mike = _closure2_slot8;
                entity = mike.set;
                oscar = 0;
                entity = entity.bind(mike)(oscar);
                zulu = _closure2_slot7;
                mike = zulu.set;
                entity = {};
                golf = report.changedTouches;
                golf = golf[oscar];
                golf = golf.absoluteX;
                entity['absoluteX'] = golf;
                report = report.changedTouches;
                report = report[oscar];
                report = report.absoluteY;
                entity['absoluteY'] = report;
                oscar = _closure2_slot0;
                report = oscar.get;
                report = report.bind(oscar)();
                report = report.x;
                entity['x'] = report;
                report = oscar.get;
                report = report.bind(oscar)();
                report = report.y;
                entity['y'] = report;
                report = oscar.get;
                report = report.bind(oscar)();
                report = report.height;
                entity['height'] = report;
                report = _closure2_slot5;
                tango = report.get;
                report = tango.bind(report)();
                tango = _closure1_slot4;
                tango = tango.EXPANDED;
                tango = report === tango;
                entity['isDrawer'] = tango;
                tango = false;
                entity['active'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            foxtrot = {};
            backup = _closure2_slot8;
            foxtrot['touchMoveCount'] = backup;
            yankee = _closure2_slot7;
            foxtrot['initialGestureOffset'] = yankee;
            golf = _closure2_slot0;
            foxtrot['questDockWrapperSpecs'] = golf;
            romeo = _closure2_slot5;
            foxtrot['restingQuestDockMode'] = romeo;
            sizing = _closure1_slot4;
            foxtrot['QuestDockMode'] = sizing;
            mike['__closure'] = foxtrot;
            foxtrot = 2861068648942.0;
            mike['__workletHash'] = foxtrot;
            foxtrot = _closure1_slot18;
            mike['__initData'] = foxtrot;
            report = zulu.bind(report)(mike);
            zulu = report.onTouchesMove;
            mike = function(argFoo) { // Original name: k
                _fun116252: for(var _fun116252_ip = 0; ; ) switch(_fun116252_ip) {
 0:
                    mike = argFoo;
                    tango = mike.state;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 8;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = oscar.bind(entity)(zulu);
                    zulu = zulu.State;
                    zulu = zulu.BEGAN;
                    if(!(tango === zulu)) { _fun116252_ip = 620; continue _fun116252 }
 52:
                    tango = _closure2_slot7;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    zulu = zulu.active;
                    if(zulu) { _fun116252_ip = 620; continue _fun116252 }
 80:
                    tango = _closure2_slot8;
                    golf = tango.set;
                    zulu = tango.get;
                    options = zulu.bind(tango)();
                    zulu = 1;
                    zulu = options + zulu;
                    zulu = golf.bind(tango)(zulu);
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = _closure1_slot13;
                    zulu = tango <= zulu;
                    mike = mike.changedTouches;
                    offset = 0;
                    mike = mike[offset];
                    golf = mike.absoluteY;
                    options = mike.absoluteX;
                    tango = _closure2_slot7;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    mike = mike.absoluteY;
                    tango = mike - golf;
                    mike = global;
                    verify = mike.Math;
                    mike = verify.abs;
                    verify = mike.bind(verify)(tango);
                    yankee = _closure2_slot5;
                    mike = yankee.get;
                    yankee = mike.bind(yankee)();
                    mike = _closure1_slot4;
                    mike = mike.EXPANDED;
                    mike = yankee === mike;
                    if(!mike) { _fun116252_ip = 226; continue _fun116252 }
 223:
                    mike = zulu;
 226:
                    if(!mike) { _fun116252_ip = 233; continue _fun116252 }
 229:
                    mike = tango >= offset;
 233:
                    if(mike) { _fun116252_ip = 620; continue _fun116252 }
 239:
                    zulu = _closure2_slot5;
                    mike = zulu.get;
                    zulu = mike.bind(zulu)();
                    mike = _closure1_slot4;
                    mike = mike.COLLAPSED;
                    mike = zulu === mike;
                    if(!mike) { _fun116252_ip = 277; continue _fun116252 }
 269:
                    zulu = _closure1_slot8;
                    mike = tango > zulu;
 277:
                    if(mike) { _fun116252_ip = 338; continue _fun116252 }
 280:
                    yankee = _closure2_slot5;
                    zulu = yankee.get;
                    yankee = zulu.bind(yankee)();
                    zulu = _closure1_slot4;
                    zulu = zulu.EXPANDED;
                    zulu = yankee === zulu;
                    if(!zulu) { _fun116252_ip = 335; continue _fun116252 }
 310:
                    yankee = _closure1_slot8;
                    yankee = -yankee;
                    yankee = tango < yankee;
                    if(yankee) { _fun116252_ip = 332; continue _fun116252 }
 324:
                    romeo = _closure1_slot8;
                    yankee = tango > romeo;
 332:
                    zulu = yankee;
 335:
                    mike = zulu;
 338:
                    if(mike) { _fun116252_ip = 389; continue _fun116252 }
 341:
                    yankee = _closure2_slot5;
                    zulu = yankee.get;
                    yankee = zulu.bind(yankee)();
                    zulu = _closure1_slot4;
                    zulu = zulu.COLLAPSED;
                    zulu = yankee === zulu;
                    if(!zulu) { _fun116252_ip = 375; continue _fun116252 }
 371:
                    zulu = tango < offset;
 375:
                    if(!zulu) { _fun116252_ip = 386; continue _fun116252 }
 378:
                    yankee = _closure1_slot9;
                    zulu = verify > yankee;
 386:
                    mike = zulu;
 389:
                    if(mike) { _fun116252_ip = 440; continue _fun116252 }
 392:
                    yankee = _closure2_slot5;
                    zulu = yankee.get;
                    yankee = zulu.bind(yankee)();
                    zulu = _closure1_slot4;
                    zulu = zulu.CLOSED;
                    zulu = yankee === zulu;
                    if(!zulu) { _fun116252_ip = 426; continue _fun116252 }
 422:
                    zulu = tango > offset;
 426:
                    if(!zulu) { _fun116252_ip = 437; continue _fun116252 }
 429:
                    yankee = _closure1_slot9;
                    zulu = tango > yankee;
 437:
                    mike = zulu;
 440:
                    if(mike) { _fun116252_ip = 491; continue _fun116252 }
 443:
                    yankee = _closure2_slot5;
                    zulu = yankee.get;
                    yankee = zulu.bind(yankee)();
                    zulu = _closure1_slot4;
                    zulu = zulu.CLOSED;
                    zulu = yankee === zulu;
                    if(!zulu) { _fun116252_ip = 477; continue _fun116252 }
 473:
                    zulu = tango < offset;
 477:
                    if(!zulu) { _fun116252_ip = 488; continue _fun116252 }
 480:
                    tango = _closure1_slot9;
                    zulu = verify > tango;
 488:
                    mike = zulu;
 491:
                    if(!mike) { _fun116252_ip = 620; continue _fun116252 }
 497:
                    tango = _closure2_slot7;
                    zulu = tango.set;
                    mike = {};
                    mike['absoluteX'] = options;
                    mike['absoluteY'] = golf;
                    options = _closure2_slot0;
                    golf = options.get;
                    golf = golf.bind(options)();
                    golf = golf.x;
                    mike['x'] = golf;
                    golf = options.get;
                    golf = golf.bind(options)();
                    golf = golf.y;
                    mike['y'] = golf;
                    golf = options.get;
                    golf = golf.bind(options)();
                    golf = golf.height;
                    mike['height'] = golf;
                    golf = _closure2_slot5;
                    oscar = golf.get;
                    oscar = oscar.bind(golf)();
                    report = _closure1_slot4;
                    report = report.EXPANDED;
                    report = oscar === report;
                    mike['isDrawer'] = report;
                    report = true;
                    mike['active'] = report;
                    mike = zulu.bind(tango)(mike);
 620:
                    return entity;
                }
            };
            foxtrot = {};
            kilo = offset[kilo];
            kilo = verify.bind(options)(kilo);
            kilo = kilo.State;
            foxtrot['State'] = kilo;
            foxtrot['initialGestureOffset'] = yankee;
            foxtrot['touchMoveCount'] = backup;
            backup = _closure1_slot13;
            foxtrot['QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD'] = backup;
            foxtrot['restingQuestDockMode'] = romeo;
            backup = _closure1_slot4;
            foxtrot['QuestDockMode'] = backup;
            backup = _closure1_slot8;
            foxtrot['QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM'] = backup;
            backup = _closure1_slot9;
            foxtrot['QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM'] = backup;
            foxtrot['questDockWrapperSpecs'] = golf;
            mike['__closure'] = foxtrot;
            foxtrot = 14053569871044.0;
            mike['__workletHash'] = foxtrot;
            foxtrot = _closure1_slot19;
            mike['__initData'] = foxtrot;
            report = zulu.bind(report)(mike);
            zulu = report.onChange;
            mike = function(argFoo) { // Original name: o
                _fun116253: for(var _fun116253_ip = 0; ; ) switch(_fun116253_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.absoluteY;
                    oscar = _closure2_slot7;
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    entity = entity.absoluteY;
                    tango = zulu - entity;
                    zulu = _closure2_slot3;
                    entity = zulu.get;
                    zulu = entity.bind(zulu)();
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    report = entity.height;
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    entity = entity.y;
                    entity = report - entity;
                    entity = entity - tango;
                    tango = entity > zulu;
                    if(!tango) { _fun116253_ip = 121; continue _fun116253 }
 91:
                    oscar = _closure2_slot1;
                    report = oscar.get;
                    oscar = report.bind(oscar)();
                    report = _closure1_slot4;
                    report = report.EXPANDED;
                    tango = oscar === report;
 121:
                    verify = entity;
                    if(!tango) { _fun116253_ip = 146; continue _fun116253 }
 127:
                    tango = entity - zulu;
                    entity = _closure1_slot16;
                    entity = tango * entity;
                    verify = zulu + entity;
 146:
                    zulu = _closure2_slot3;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    oscar = 0;
                    if(!(!(entity > oscar))) { _fun116253_ip = 174; continue _fun116253 }
 165:
                    entity = _closure1_slot10;
                    _fun116253_ip = 213; continue _fun116253;
 174:
                    zulu = global;
                    golf = zulu.Math;
                    report = golf.min;
                    tango = _closure2_slot3;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = _closure1_slot10;
                    entity = report.bind(golf)(tango, zulu);
 213:
                    if(!(!(verify >= entity))) { _fun116253_ip = 962; continue _fun116253 }
 220:
                    zulu = _closure1_slot11;
                    if(!(!(verify < zulu))) { _fun116253_ip = 677; continue _fun116253 }
 234:
                    zulu = _closure1_slot10;
                    yankee = verify / zulu;
                    zulu = _closure1_slot5;
                    zulu = verify - zulu;
                    options = -1;
                    offset = options * zulu;
                    tango = _closure2_slot7;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    zulu = zulu.isDrawer;
                    if(!zulu) { _fun116253_ip = 325; continue _fun116253 }
 282:
                    report = _closure2_slot7;
                    tango = report.set;
                    zulu = {};
                    golf = report.get;
                    sizing = golf.bind(report)();
                    output = zulu;
                    golf = copyDataProperties(output, sizing);
                    romeo = false;
                    golf = 'isDrawer';
                    zulu[golf] = romeo;
                    zulu = tango.bind(report)(zulu);
 325:
                    tango = _closure1_slot5;
                    report = _closure2_slot0;
                    zulu = report.get;
                    zulu = zulu.bind(report)();
                    zulu = zulu.height;
                    zulu = tango !== zulu;
                    if(!zulu) { _fun116253_ip = 381; continue _fun116253 }
 354:
                    report = _closure2_slot1;
                    tango = report.get;
                    report = tango.bind(report)();
                    tango = _closure1_slot4;
                    tango = tango.EXPANDED;
                    zulu = report !== tango;
 381:
                    if(!zulu) { _fun116253_ip = 460; continue _fun116253 }
 384:
                    golf = _closure1_slot0;
                    romeo = _closure1_slot2;
                    zulu = 7;
                    zulu = romeo[zulu];
                    report = undefined;
                    backup = golf.bind(report)(zulu);
                    foxtrot = backup.runOnJS;
                    zulu = 10;
                    tango = romeo[zulu];
                    tango = golf.bind(report)(tango);
                    tango = tango.triggerHapticFeedback;
                    tango = foxtrot.bind(backup)(tango);
                    zulu = romeo[zulu];
                    zulu = golf.bind(report)(zulu);
                    zulu = zulu.HapticFeedbackTypes;
                    zulu = zulu.IMPACT_MEDIUM;
                    zulu = tango.bind(report)(zulu);
 460:
                    report = _closure2_slot0;
                    tango = report.set;
                    zulu = {};
                    golf = report.get;
                    sizing = golf.bind(report)();
                    output = zulu;
                    golf = copyDataProperties(output, sizing);
                    golf = 'x';
                    zulu[golf] = oscar;
                    golf = _closure1_slot7;
                    options = options * golf;
                    golf = _closure1_slot14;
                    yankee = yankee / golf;
                    golf = 1;
                    golf = golf - yankee;
                    golf = offset * golf;
                    options = options + golf;
                    golf = 'y';
                    zulu[golf] = options;
                    offset = _closure1_slot0;
                    options = _closure1_slot2;
                    golf = 9;
                    options = options[golf];
                    golf = undefined;
                    romeo = offset.bind(golf)(options);
                    yankee = romeo.getQuestDockCollapsedWidth;
                    options = _closure2_slot2;
                    golf = options.get;
                    golf = golf.bind(options)();
                    offset = golf.width;
                    foxtrot = _closure2_slot4;
                    golf = foxtrot.get;
                    golf = golf.bind(foxtrot)();
                    options = golf.left;
                    golf = foxtrot.get;
                    golf = golf.bind(foxtrot)();
                    golf = golf.right;
                    options = yankee.bind(romeo)(offset, options, golf);
                    golf = 'width';
                    zulu[golf] = options;
                    options = _closure1_slot5;
                    golf = 'height';
                    zulu[golf] = options;
                    zulu = tango.bind(report)(zulu);
                    report = _closure2_slot1;
                    tango = report.set;
                    zulu = _closure1_slot4;
                    zulu = zulu.COLLAPSED;
                    zulu = tango.bind(report)(zulu);
                    _fun116253_ip = 1240; continue _fun116253;
 677:
                    tango = _closure2_slot1;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = _closure1_slot4;
                    zulu = zulu.CLOSED;
                    if(!(tango === zulu)) { _fun116253_ip = 1240; continue _fun116253 }
 707:
                    zulu = global;
                    tango = zulu.Math;
                    zulu = tango.min;
                    tango = zulu.bind(tango)(verify, oscar);
                    zulu = _closure1_slot6;
                    tango = tango / zulu;
                    zulu = 1;
                    tango = zulu - tango;
                    zulu = _closure1_slot6;
                    zulu = zulu - verify;
                    yankee = tango * zulu;
                    golf = yankee > oscar;
                    report = _closure2_slot0;
                    tango = report.set;
                    zulu = {};
                    options = report.get;
                    sizing = options.bind(report)();
                    output = zulu;
                    options = copyDataProperties(output, sizing);
                    options = 'x';
                    zulu[options] = oscar;
                    offset = 0;
                    if(!golf) { _fun116253_ip = 806; continue _fun116253 }
 798:
                    options = _closure1_slot15;
                    offset = yankee * options;
 806:
                    options = 'y';
                    zulu[options] = offset;
                    yankee = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 9;
                    offset = offset[options];
                    options = undefined;
                    foxtrot = yankee.bind(options)(offset);
                    romeo = foxtrot.getQuestDockClosedWidth;
                    offset = _closure2_slot2;
                    options = offset.get;
                    options = options.bind(offset)();
                    yankee = options.width;
                    backup = _closure2_slot4;
                    options = backup.get;
                    options = options.bind(backup)();
                    offset = options.left;
                    options = backup.get;
                    options = options.bind(backup)();
                    options = options.right;
                    offset = romeo.bind(foxtrot)(yankee, offset, options);
                    options = 'width';
                    zulu[options] = offset;
                    options = verify;
                    if(!golf) { _fun116253_ip = 919; continue _fun116253 }
 915:
                    options = _closure1_slot6;
 919:
                    golf = 'height';
                    zulu[golf] = options;
                    zulu = tango.bind(report)(zulu);
                    tango = _closure2_slot1;
                    zulu = tango.set;
                    entity = _closure1_slot4;
                    entity = entity.CLOSED;
                    entity = zulu.bind(tango)(entity);
                    _fun116253_ip = 1240; continue _fun116253;
 962:
                    zulu = _closure2_slot7;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    entity = entity.isDrawer;
                    if(entity) { _fun116253_ip = 1027; continue _fun116253 }
 984:
                    tango = _closure2_slot7;
                    zulu = tango.set;
                    entity = {};
                    report = tango.get;
                    sizing = report.bind(tango)();
                    output = entity;
                    report = copyDataProperties(output, sizing);
                    golf = true;
                    report = 'isDrawer';
                    entity[report] = golf;
                    entity = zulu.bind(tango)(entity);
 1027:
                    report = _closure2_slot0;
                    tango = report.set;
                    zulu = {};
                    entity = report.get;
                    sizing = entity.bind(report)();
                    output = zulu;
                    entity = copyDataProperties(output, sizing);
                    entity = 'x';
                    zulu[entity] = oscar;
                    entity = 'y';
                    zulu[entity] = oscar;
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    oscar = 9;
                    golf = golf[oscar];
                    oscar = undefined;
                    romeo = options.bind(oscar)(golf);
                    yankee = romeo.getQuestDockExpandedWidth;
                    offset = _closure2_slot2;
                    oscar = offset.get;
                    oscar = oscar.bind(offset)();
                    options = oscar.width;
                    foxtrot = _closure2_slot4;
                    oscar = foxtrot.get;
                    oscar = oscar.bind(foxtrot)();
                    golf = oscar.left;
                    oscar = foxtrot.get;
                    oscar = oscar.bind(foxtrot)();
                    oscar = oscar.right;
                    golf = yankee.bind(romeo)(options, golf, oscar);
                    oscar = 'width';
                    zulu[oscar] = golf;
                    oscar = global;
                    options = oscar.Math;
                    golf = options.min;
                    oscar = offset.get;
                    oscar = oscar.bind(offset)();
                    oscar = oscar.height;
                    golf = golf.bind(options)(verify, oscar);
                    oscar = 'height';
                    zulu[oscar] = golf;
                    zulu = tango.bind(report)(zulu);
                    zulu = _closure2_slot1;
                    mike = zulu.set;
                    entity = _closure1_slot4;
                    entity = entity.EXPANDED;
                    entity = mike.bind(zulu)(entity);
 1240:
                    entity = undefined;
                    return entity;
                }
            };
            foxtrot = {};
            foxtrot['initialGestureOffset'] = yankee;
            backup = _closure2_slot3;
            foxtrot['minExpandedContentHeight'] = backup;
            backup = _closure2_slot1;
            foxtrot['activeQuestDockMode'] = backup;
            backup = _closure1_slot4;
            foxtrot['QuestDockMode'] = backup;
            backup = _closure1_slot16;
            foxtrot['QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR'] = backup;
            backup = _closure1_slot10;
            foxtrot['QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT'] = backup;
            foxtrot['questDockWrapperSpecs'] = golf;
            backup = 9;
            golf = offset[backup];
            golf = verify.bind(options)(golf);
            golf = golf.getQuestDockExpandedWidth;
            foxtrot['getQuestDockExpandedWidth'] = golf;
            golf = _closure2_slot2;
            foxtrot['windowDimensions'] = golf;
            golf = _closure2_slot4;
            foxtrot['safeArea'] = golf;
            golf = _closure1_slot11;
            foxtrot['QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT'] = golf;
            golf = _closure1_slot6;
            foxtrot['QUEST_DOCK_CLOSED_HEIGHT'] = golf;
            golf = _closure1_slot15;
            foxtrot['QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR'] = golf;
            golf = offset[backup];
            golf = verify.bind(options)(golf);
            golf = golf.getQuestDockClosedWidth;
            foxtrot['getQuestDockClosedWidth'] = golf;
            golf = _closure1_slot5;
            foxtrot['QUEST_DOCK_COLLAPSED_HEIGHT'] = golf;
            golf = _closure1_slot14;
            foxtrot['QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR'] = golf;
            golf = 7;
            kilo = offset[golf];
            kilo = verify.bind(options)(kilo);
            kilo = kilo.runOnJS;
            foxtrot['runOnJS'] = kilo;
            kilo = 10;
            sizing = offset[kilo];
            sizing = verify.bind(options)(sizing);
            sizing = sizing.triggerHapticFeedback;
            foxtrot['triggerHapticFeedback'] = sizing;
            kilo = offset[kilo];
            kilo = verify.bind(options)(kilo);
            kilo = kilo.HapticFeedbackTypes;
            foxtrot['HapticFeedbackTypes'] = kilo;
            kilo = _closure1_slot7;
            foxtrot['QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED'] = kilo;
            backup = offset[backup];
            backup = verify.bind(options)(backup);
            backup = backup.getQuestDockCollapsedWidth;
            foxtrot['getQuestDockCollapsedWidth'] = backup;
            mike['__closure'] = foxtrot;
            foxtrot = 14201763266080.0;
            mike['__workletHash'] = foxtrot;
            foxtrot = _closure1_slot20;
            mike['__initData'] = foxtrot;
            zulu = zulu.bind(report)(mike);
            mike = zulu.onEnd;
            entity = function(argFoo) { // Original name: t
                _fun116254: for(var _fun116254_ip = 0; ; ) switch(_fun116254_ip) {
 0:
                    entity = argFoo;
                    report = entity.velocityY;
                    golf = entity.y;
                    entity = global;
                    zulu = entity.Math;
                    mike = zulu.abs;
                    tango = mike.bind(zulu)(report);
                    mike = entity.Math;
                    entity = mike.abs;
                    oscar = entity.bind(mike)(golf);
                    mike = _closure1_slot12;
                    if(!(tango > mike)) { _fun116254_ip = 70; continue _fun116254 }
 61:
                    mike = 0;
                    if(!(!(report < mike))) { _fun116254_ip = 336; continue _fun116254 }
 70:
                    mike = _closure1_slot12;
                    if(!(tango < mike)) { _fun116254_ip = 106; continue _fun116254 }
 78:
                    zulu = _closure2_slot7;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    mike = mike.isDrawer;
                    if(mike) { _fun116254_ip = 336; continue _fun116254 }
 106:
                    options = _closure2_slot5;
                    zulu = options.get;
                    options = zulu.bind(options)();
                    zulu = _closure1_slot4;
                    zulu = zulu.COLLAPSED;
                    if(!(options === zulu)) { _fun116254_ip = 158; continue _fun116254 }
 136:
                    zulu = _closure1_slot12;
                    if(!(!(report > zulu))) { _fun116254_ip = 324; continue _fun116254 }
 147:
                    zulu = _closure1_slot11;
                    if(!(!(golf > zulu))) { _fun116254_ip = 324; continue _fun116254 }
 158:
                    zulu = _closure1_slot12;
                    if(!(report > zulu)) { _fun116254_ip = 193; continue _fun116254 }
 166:
                    options = _closure2_slot5;
                    zulu = options.get;
                    options = zulu.bind(options)();
                    zulu = _closure1_slot4;
                    zulu = zulu.COLLAPSED;
                    if(!(options === zulu)) { _fun116254_ip = 312; continue _fun116254 }
 193:
                    zulu = 0;
                    if(!(report < zulu)) { _fun116254_ip = 234; continue _fun116254 }
 199:
                    zulu = _closure1_slot12;
                    if(!(tango > zulu)) { _fun116254_ip = 234; continue _fun116254 }
 207:
                    tango = _closure2_slot5;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = _closure1_slot4;
                    zulu = zulu.CLOSED;
                    if(!(tango !== zulu)) { _fun116254_ip = 312; continue _fun116254 }
 234:
                    tango = _closure2_slot5;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = _closure1_slot4;
                    zulu = zulu.COLLAPSED;
                    if(!(tango !== zulu)) { _fun116254_ip = 300; continue _fun116254 }
 261:
                    zulu = _closure2_slot5;
                    mike = zulu.get;
                    zulu = mike.bind(zulu)();
                    mike = _closure1_slot4;
                    mike = mike.CLOSED;
                    if(!(zulu !== mike)) { _fun116254_ip = 300; continue _fun116254 }
 288:
                    mike = _closure1_slot4;
                    zulu = mike.COLLAPSED;
                    _fun116254_ip = 310; continue _fun116254;
 300:
                    mike = _closure1_slot4;
                    zulu = mike.RESET_TO_PREVIOUS;
 310:
                    _fun116254_ip = 322; continue _fun116254;
 312:
                    mike = _closure1_slot4;
                    zulu = mike.COLLAPSED;
 322:
                    _fun116254_ip = 334; continue _fun116254;
 324:
                    mike = _closure1_slot4;
                    zulu = mike.SOFT_DISMISSED;
 334:
                    _fun116254_ip = 391; continue _fun116254;
 336:
                    tango = _closure2_slot5;
                    mike = tango.get;
                    tango = mike.bind(tango)();
                    mike = _closure1_slot4;
                    mike = mike.EXPANDED;
                    if(!(tango !== mike)) { _fun116254_ip = 378; continue _fun116254 }
 366:
                    mike = _closure1_slot4;
                    mike = mike.EXPANDED;
                    _fun116254_ip = 388; continue _fun116254;
 378:
                    tango = _closure1_slot4;
                    mike = tango.RESET_TO_PREVIOUS;
 388:
                    zulu = mike;
 391:
                    report = _closure2_slot5;
                    tango = report.get;
                    report = tango.bind(report)();
                    tango = _closure1_slot4;
                    tango = tango.CLOSED;
                    tango = report === tango;
                    if(!tango) { _fun116254_ip = 438; continue _fun116254 }
 424:
                    report = _closure1_slot4;
                    report = report.EXPANDED;
                    tango = zulu !== report;
 438:
                    if(!tango) { _fun116254_ip = 447; continue _fun116254 }
 441:
                    report = 0;
                    tango = golf < report;
 447:
                    if(!tango) { _fun116254_ip = 458; continue _fun116254 }
 450:
                    report = _closure1_slot11;
                    tango = oscar > report;
 458:
                    if(!tango) { _fun116254_ip = 471; continue _fun116254 }
 461:
                    tango = _closure1_slot4;
                    zulu = tango.COLLAPSED;
 471:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 7;
                    tango = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.runOnJS;
                    mike = _closure2_slot6;
                    mike = tango.bind(report)(mike);
                    mike = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            report = {};
            foxtrot = _closure1_slot12;
            report['QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY'] = foxtrot;
            report['restingQuestDockMode'] = romeo;
            romeo = _closure1_slot4;
            report['QuestDockMode'] = romeo;
            report['initialGestureOffset'] = yankee;
            yankee = _closure1_slot11;
            report['QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT'] = yankee;
            golf = offset[golf];
            golf = verify.bind(options)(golf);
            golf = golf.runOnJS;
            report['runOnJS'] = golf;
            oscar = _closure2_slot6;
            report['setRestingQuestDockMode'] = oscar;
            entity['__closure'] = report;
            report = 2588627994637.0;
            entity['__workletHash'] = report;
            tango = _closure1_slot21;
            entity['__initData'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = tango.bind(report)(entity, zulu);
        zulu = yankee[options];
        report = offset.bind(verify)(zulu);
        tango = report.useAnimatedReaction;
        zulu = function() { // Original name: k
            mike = _closure2_slot1;
            entity = mike.get;
            entity = entity.bind(mike)();
            return entity;
        };
        golf = {};
        golf['activeQuestDockMode'] = romeo;
        zulu['__closure'] = golf;
        golf = 4183219364740.0;
        zulu['__workletHash'] = golf;
        golf = _closure1_slot22;
        zulu['__initData'] = golf;
        mike = function(argFoo, argBar) { // Original name: o
            _fun116256: for(var _fun116256_ip = 0; ; ) switch(_fun116256_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                entity = tango !== zulu;
                if(!entity) { _fun116256_ip = 30; continue _fun116256 }
 13:
                mike = _closure1_slot4;
                mike = mike.CLOSED;
                entity = tango !== mike;
 30:
                if(!entity) { _fun116256_ip = 50; continue _fun116256 }
 33:
                mike = _closure1_slot4;
                mike = mike.CLOSED;
                entity = zulu !== mike;
 50:
                if(!entity) { _fun116256_ip = 132; continue _fun116256 }
 53:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                entity = 7;
                entity = report[entity];
                zulu = undefined;
                golf = tango.bind(zulu)(entity);
                oscar = golf.runOnJS;
                entity = 10;
                mike = report[entity];
                mike = tango.bind(zulu)(mike);
                mike = mike.triggerHapticFeedback;
                mike = oscar.bind(golf)(mike);
                entity = report[entity];
                entity = tango.bind(zulu)(entity);
                entity = entity.HapticFeedbackTypes;
                entity = entity.IMPACT_MEDIUM;
                entity = mike.bind(zulu)(entity);
 132:
                entity = undefined;
                return entity;
            }
        };
        golf = {};
        romeo = _closure1_slot4;
        golf['QuestDockMode'] = romeo;
        options = yankee[options];
        options = offset.bind(verify)(options);
        options = options.runOnJS;
        golf['runOnJS'] = options;
        options = 10;
        romeo = yankee[options];
        romeo = offset.bind(verify)(romeo);
        romeo = romeo.triggerHapticFeedback;
        golf['triggerHapticFeedback'] = romeo;
        options = yankee[options];
        options = offset.bind(verify)(options);
        options = options.HapticFeedbackTypes;
        golf['HapticFeedbackTypes'] = options;
        mike['__closure'] = golf;
        golf = 16625438704608.0;
        mike['__workletHash'] = golf;
        oscar = _closure1_slot23;
        mike['__initData'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot24 = mike;
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
    var _closure1_slot3 = options;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.QuestDockMode;
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot5 = verify;
    verify = report.QUEST_DOCK_CLOSED_HEIGHT;
    var _closure1_slot6 = verify;
    verify = report.QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
    var _closure1_slot7 = verify;
    verify = report.QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM;
    var _closure1_slot8 = verify;
    verify = report.QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM;
    var _closure1_slot9 = verify;
    verify = report.QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;
    var _closure1_slot10 = verify;
    verify = report.QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT;
    var _closure1_slot11 = verify;
    verify = report.QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY;
    var _closure1_slot12 = verify;
    verify = report.QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;
    var _closure1_slot13 = verify;
    verify = report.QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR;
    var _closure1_slot14 = verify;
    verify = report.QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;
    var _closure1_slot15 = verify;
    report = report.QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;
    var _closure1_slot16 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot17 = report;
    report = {};
    verify = 'function QuestDockGestureDetectorTsx1(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}';
    report['code'] = verify;
    var _closure1_slot18 = report;
    report = {};
    verify = 'function QuestDockGestureDetectorTsx2(event){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}';
    report['code'] = verify;
    var _closure1_slot19 = report;
    report = {};
    verify = 'function QuestDockGestureDetectorTsx3(event){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth}=this.__closure;const deltaY=event.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-initialGestureOffset.get().y-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height)});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange=yOffset*(1-progress/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+newChange,width:getQuestDockCollapsedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}';
    report['code'] = verify;
    var _closure1_slot20 = report;
    report = {};
    verify = 'function QuestDockGestureDetectorTsx4(event){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,setRestingQuestDockMode}=this.__closure;const{velocityY:velocityY,y:y}=event;const absoluteVelocityY=Math.abs(velocityY);const absoluteY=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}runOnJS(setRestingQuestDockMode)(resultingDockMode);}';
    report['code'] = verify;
    var _closure1_slot21 = report;
    report = {};
    verify = 'function QuestDockGestureDetectorTsx5(){const{activeQuestDockMode}=this.__closure;return activeQuestDockMode.get();}';
    report['code'] = verify;
    var _closure1_slot22 = report;
    report = {};
    verify = 'function QuestDockGestureDetectorTsx6(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous||current===QuestDockMode.CLOSED||previous===QuestDockMode.CLOSED){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}';
    report['code'] = verify;
    var _closure1_slot23 = report;
    report = options.memo;
    tango = function(argFoo) { // Original name: QuestDockGestureDetector
        mike = _closure1_slot24;
        tango = undefined;
        report = mike.bind(tango)();
        zulu = _closure1_slot17;
        mike = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 8;
        entity = oscar[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.GestureDetector;
        entity = {};
        entity['gesture'] = report;
        report = argFoo;
        report = report.children;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    tango = report.bind(options)(tango);
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/quests/native/QuestDock/QuestDockGestureDetector.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['useQuestDockSwipeGesture'] = mike;
    return entity;
})();