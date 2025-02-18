// app/modules/quests/native/QuestDock/QuestDockGestureDetector.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    michal = function() { // Original name: useQuestDockSwipeGesture
        tangon = _closure1_slot3;
        zuuluu = tangon.useContext;
        offset = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 4;
        entity = yankee[entity];
        verify = undefined;
        entity = offset.bind(verify)(entity);
        entity = entity.QuestDockGestureContext;
        entity = zuuluu.bind(tangon)(entity);
        foxtra = entity.questDockWrapperSpecs;
        var _closure2_slot0 = foxtra;
        romeon = entity.activeQuestDockMode;
        var _closure2_slot1 = romeon;
        backup = entity.windowDimensions;
        var _closure2_slot2 = backup;
        entity = entity.minExpandedContentHeight;
        var _closure2_slot3 = entity;
        tangon = _closure1_slot1;
        zuuluu = 5;
        zuuluu = yankee[zuuluu];
        zuuluu = tangon.bind(verify)(zuuluu);
        sizing = zuuluu.bind(verify)();
        var _closure2_slot4 = sizing;
        report = _closure1_slot3;
        tangon = report.useContext;
        zuuluu = 6;
        zuuluu = yankee[zuuluu];
        zuuluu = offset.bind(verify)(zuuluu);
        zuuluu = zuuluu.QuestDockExternalCoordinationContext;
        zuuluu = tangon.bind(report)(zuuluu);
        result = zuuluu.restingQuestDockMode;
        var _closure2_slot5 = result;
        golfie = zuuluu.setRestingQuestDockMode;
        var _closure2_slot6 = golfie;
        option = 7;
        zuuluu = yankee[option];
        kiloes = offset.bind(verify)(zuuluu);
        tangon = kiloes.useSharedValue;
        zuuluu = {'absoluteX': 0, 'absoluteY': 0, 'x': 0, 'y': 0, 'height': 0, 'isDrawer': null, 'active': false};
        report = 0;
        output = result.get;
        echoed = output.bind(result)();
        output = _closure1_slot4;
        output = output.EXPANDED;
        output = echoed === output;
        zuuluu['isDrawer'] = output;
        output = tangon.bind(kiloes)(zuuluu);
        var _closure2_slot7 = output;
        zuuluu = yankee[option];
        tangon = offset.bind(verify)(zuuluu);
        zuuluu = tangon.useSharedValue;
        kiloes = zuuluu.bind(tangon)(report);
        var _closure2_slot8 = kiloes;
        report = _closure1_slot3;
        tangon = report.useMemo;
        zuuluu = new Array(9);
        zuuluu[0] = result;
        zuuluu[1] = output;
        zuuluu[2] = sizing;
        zuuluu[3] = kiloes;
        zuuluu[4] = backup;
        zuuluu[5] = foxtra;
        zuuluu[6] = golfie;
        zuuluu[7] = romeon;
        zuuluu[8] = entity;
        entity = function() {
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            kiloes = 8;
            michal = offset[kiloes];
            option = undefined;
            michal = verify.bind(option)(michal);
            zuuluu = michal.Gesture;
            michal = zuuluu.Pan;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.manualActivation;
            report = false;
            oscard = michal.bind(zuuluu)(report);
            zuuluu = oscard.maxPointers;
            michal = 1;
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.shouldCancelWhenOutside;
            report = michal.bind(zuuluu)(report);
            zuuluu = report.onTouchesDown;
            michal = function(argFoo) { // Original name: I
                report = argFoo;
                michal = _closure2_slot8;
                entity = michal.set;
                oscard = 0;
                entity = entity.bind(michal)(oscard);
                zuuluu = _closure2_slot7;
                michal = zuuluu.set;
                entity = {};
                golfie = report.changedTouches;
                golfie = golfie[oscard];
                golfie = golfie.absoluteX;
                entity['absoluteX'] = golfie;
                report = report.changedTouches;
                report = report[oscard];
                report = report.absoluteY;
                entity['absoluteY'] = report;
                oscard = _closure2_slot0;
                report = oscard.get;
                report = report.bind(oscard)();
                report = report.x;
                entity['x'] = report;
                report = oscard.get;
                report = report.bind(oscard)();
                report = report.y;
                entity['y'] = report;
                report = oscard.get;
                report = report.bind(oscard)();
                report = report.height;
                entity['height'] = report;
                report = _closure2_slot5;
                tangon = report.get;
                report = tangon.bind(report)();
                tangon = _closure1_slot4;
                tangon = tangon.EXPANDED;
                tangon = report === tangon;
                entity['isDrawer'] = tangon;
                tangon = false;
                entity['active'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            foxtra = {};
            backup = _closure2_slot8;
            foxtra['touchMoveCount'] = backup;
            yankee = _closure2_slot7;
            foxtra['initialGestureOffset'] = yankee;
            golfie = _closure2_slot0;
            foxtra['questDockWrapperSpecs'] = golfie;
            romeon = _closure2_slot5;
            foxtra['restingQuestDockMode'] = romeon;
            sizing = _closure1_slot4;
            foxtra['QuestDockMode'] = sizing;
            michal['__closure'] = foxtra;
            foxtra = 2861068648942.0;
            michal['__workletHash'] = foxtra;
            foxtra = _closure1_slot18;
            michal['__initData'] = foxtra;
            report = zuuluu.bind(report)(michal);
            zuuluu = report.onTouchesMove;
            michal = function(argFoo) { // Original name: k
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.state;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 8;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.State;
                    zuuluu = zuuluu.BEGAN;
                    if(!(tangon === zuuluu)) { _fun00002_ip = 620; continue _fun00001 }
 52:
                    tangon = _closure2_slot7;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    zuuluu = zuuluu.active;
                    if(zuuluu) { _fun00002_ip = 620; continue _fun00001 }
 80:
                    tangon = _closure2_slot8;
                    golfie = tangon.set;
                    zuuluu = tangon.get;
                    option = zuuluu.bind(tangon)();
                    zuuluu = 1;
                    zuuluu = option + zuuluu;
                    zuuluu = golfie.bind(tangon)(zuuluu);
                    zuuluu = tangon.get;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = _closure1_slot13;
                    zuuluu = tangon <= zuuluu;
                    michal = michal.changedTouches;
                    offset = 0;
                    michal = michal[offset];
                    golfie = michal.absoluteY;
                    option = michal.absoluteX;
                    tangon = _closure2_slot7;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    michal = michal.absoluteY;
                    tangon = michal - golfie;
                    michal = global;
                    verify = michal.Math;
                    michal = verify.abs;
                    verify = michal.bind(verify)(tangon);
                    yankee = _closure2_slot5;
                    michal = yankee.get;
                    yankee = michal.bind(yankee)();
                    michal = _closure1_slot4;
                    michal = michal.EXPANDED;
                    michal = yankee === michal;
                    if(!michal) { _fun00002_ip = 226; continue _fun00001 }
 223:
                    michal = zuuluu;
 226:
                    if(!michal) { _fun00002_ip = 233; continue _fun00001 }
 229:
                    michal = tangon >= offset;
 233:
                    if(michal) { _fun00002_ip = 620; continue _fun00001 }
 239:
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure1_slot4;
                    michal = michal.COLLAPSED;
                    michal = zuuluu === michal;
                    if(!michal) { _fun00002_ip = 277; continue _fun00001 }
 269:
                    zuuluu = _closure1_slot8;
                    michal = tangon > zuuluu;
 277:
                    if(michal) { _fun00002_ip = 338; continue _fun00001 }
 280:
                    yankee = _closure2_slot5;
                    zuuluu = yankee.get;
                    yankee = zuuluu.bind(yankee)();
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.EXPANDED;
                    zuuluu = yankee === zuuluu;
                    if(!zuuluu) { _fun00002_ip = 335; continue _fun00001 }
 310:
                    yankee = _closure1_slot8;
                    yankee = -yankee;
                    yankee = tangon < yankee;
                    if(yankee) { _fun00002_ip = 332; continue _fun00001 }
 324:
                    romeon = _closure1_slot8;
                    yankee = tangon > romeon;
 332:
                    zuuluu = yankee;
 335:
                    michal = zuuluu;
 338:
                    if(michal) { _fun00002_ip = 389; continue _fun00001 }
 341:
                    yankee = _closure2_slot5;
                    zuuluu = yankee.get;
                    yankee = zuuluu.bind(yankee)();
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.COLLAPSED;
                    zuuluu = yankee === zuuluu;
                    if(!zuuluu) { _fun00002_ip = 375; continue _fun00001 }
 371:
                    zuuluu = tangon < offset;
 375:
                    if(!zuuluu) { _fun00002_ip = 386; continue _fun00001 }
 378:
                    yankee = _closure1_slot9;
                    zuuluu = verify > yankee;
 386:
                    michal = zuuluu;
 389:
                    if(michal) { _fun00002_ip = 440; continue _fun00001 }
 392:
                    yankee = _closure2_slot5;
                    zuuluu = yankee.get;
                    yankee = zuuluu.bind(yankee)();
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.CLOSED;
                    zuuluu = yankee === zuuluu;
                    if(!zuuluu) { _fun00002_ip = 426; continue _fun00001 }
 422:
                    zuuluu = tangon > offset;
 426:
                    if(!zuuluu) { _fun00002_ip = 437; continue _fun00001 }
 429:
                    yankee = _closure1_slot9;
                    zuuluu = tangon > yankee;
 437:
                    michal = zuuluu;
 440:
                    if(michal) { _fun00002_ip = 491; continue _fun00001 }
 443:
                    yankee = _closure2_slot5;
                    zuuluu = yankee.get;
                    yankee = zuuluu.bind(yankee)();
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.CLOSED;
                    zuuluu = yankee === zuuluu;
                    if(!zuuluu) { _fun00002_ip = 477; continue _fun00001 }
 473:
                    zuuluu = tangon < offset;
 477:
                    if(!zuuluu) { _fun00002_ip = 488; continue _fun00001 }
 480:
                    tangon = _closure1_slot9;
                    zuuluu = verify > tangon;
 488:
                    michal = zuuluu;
 491:
                    if(!michal) { _fun00002_ip = 620; continue _fun00001 }
 497:
                    tangon = _closure2_slot7;
                    zuuluu = tangon.set;
                    michal = {};
                    michal['absoluteX'] = option;
                    michal['absoluteY'] = golfie;
                    option = _closure2_slot0;
                    golfie = option.get;
                    golfie = golfie.bind(option)();
                    golfie = golfie.x;
                    michal['x'] = golfie;
                    golfie = option.get;
                    golfie = golfie.bind(option)();
                    golfie = golfie.y;
                    michal['y'] = golfie;
                    golfie = option.get;
                    golfie = golfie.bind(option)();
                    golfie = golfie.height;
                    michal['height'] = golfie;
                    golfie = _closure2_slot5;
                    oscard = golfie.get;
                    oscard = oscard.bind(golfie)();
                    report = _closure1_slot4;
                    report = report.EXPANDED;
                    report = oscard === report;
                    michal['isDrawer'] = report;
                    report = true;
                    michal['active'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 620:
                    return entity;
                }
            };
            foxtra = {};
            kiloes = offset[kiloes];
            kiloes = verify.bind(option)(kiloes);
            kiloes = kiloes.State;
            foxtra['State'] = kiloes;
            foxtra['initialGestureOffset'] = yankee;
            foxtra['touchMoveCount'] = backup;
            backup = _closure1_slot13;
            foxtra['QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD'] = backup;
            foxtra['restingQuestDockMode'] = romeon;
            backup = _closure1_slot4;
            foxtra['QuestDockMode'] = backup;
            backup = _closure1_slot8;
            foxtra['QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM'] = backup;
            backup = _closure1_slot9;
            foxtra['QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM'] = backup;
            foxtra['questDockWrapperSpecs'] = golfie;
            michal['__closure'] = foxtra;
            foxtra = 14053569871044.0;
            michal['__workletHash'] = foxtra;
            foxtra = _closure1_slot19;
            michal['__initData'] = foxtra;
            report = zuuluu.bind(report)(michal);
            zuuluu = report.onChange;
            michal = function(argFoo) { // Original name: o
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.absoluteY;
                    oscard = _closure2_slot7;
                    entity = oscard.get;
                    entity = entity.bind(oscard)();
                    entity = entity.absoluteY;
                    tangon = zuuluu - entity;
                    zuuluu = _closure2_slot3;
                    entity = zuuluu.get;
                    zuuluu = entity.bind(zuuluu)();
                    entity = oscard.get;
                    entity = entity.bind(oscard)();
                    report = entity.height;
                    entity = oscard.get;
                    entity = entity.bind(oscard)();
                    entity = entity.y;
                    entity = report - entity;
                    entity = entity - tangon;
                    tangon = entity > zuuluu;
                    if(!tangon) { _fun00004_ip = 121; continue _fun00003 }
 91:
                    oscard = _closure2_slot1;
                    report = oscard.get;
                    oscard = report.bind(oscard)();
                    report = _closure1_slot4;
                    report = report.EXPANDED;
                    tangon = oscard === report;
 121:
                    verify = entity;
                    if(!tangon) { _fun00004_ip = 146; continue _fun00003 }
 127:
                    tangon = entity - zuuluu;
                    entity = _closure1_slot16;
                    entity = tangon * entity;
                    verify = zuuluu + entity;
 146:
                    zuuluu = _closure2_slot3;
                    entity = zuuluu.get;
                    entity = entity.bind(zuuluu)();
                    oscard = 0;
                    if(!(!(entity > oscard))) { _fun00004_ip = 174; continue _fun00003 }
 165:
                    entity = _closure1_slot10;
                    _fun00004_ip = 213; continue _fun00003;
 174:
                    zuuluu = global;
                    golfie = zuuluu.Math;
                    report = golfie.min;
                    tangon = _closure2_slot3;
                    zuuluu = tangon.get;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = _closure1_slot10;
                    entity = report.bind(golfie)(tangon, zuuluu);
 213:
                    if(!(!(verify >= entity))) { _fun00004_ip = 962; continue _fun00003 }
 220:
                    zuuluu = _closure1_slot11;
                    if(!(!(verify < zuuluu))) { _fun00004_ip = 677; continue _fun00003 }
 234:
                    zuuluu = _closure1_slot10;
                    yankee = verify / zuuluu;
                    zuuluu = _closure1_slot5;
                    zuuluu = verify - zuuluu;
                    option = -1;
                    offset = option * zuuluu;
                    tangon = _closure2_slot7;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    zuuluu = zuuluu.isDrawer;
                    if(!zuuluu) { _fun00004_ip = 325; continue _fun00003 }
 282:
                    report = _closure2_slot7;
                    tangon = report.set;
                    zuuluu = {};
                    golfie = report.get;
                    sizing = golfie.bind(report)();
                    output = zuuluu;
                    golfie = copyDataProperties(output, sizing);
                    romeon = false;
                    golfie = 'isDrawer';
                    zuuluu[golfie] = romeon;
                    zuuluu = tangon.bind(report)(zuuluu);
 325:
                    tangon = _closure1_slot5;
                    report = _closure2_slot0;
                    zuuluu = report.get;
                    zuuluu = zuuluu.bind(report)();
                    zuuluu = zuuluu.height;
                    zuuluu = tangon !== zuuluu;
                    if(!zuuluu) { _fun00004_ip = 381; continue _fun00003 }
 354:
                    report = _closure2_slot1;
                    tangon = report.get;
                    report = tangon.bind(report)();
                    tangon = _closure1_slot4;
                    tangon = tangon.EXPANDED;
                    zuuluu = report !== tangon;
 381:
                    if(!zuuluu) { _fun00004_ip = 460; continue _fun00003 }
 384:
                    golfie = _closure1_slot0;
                    romeon = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = romeon[zuuluu];
                    report = undefined;
                    backup = golfie.bind(report)(zuuluu);
                    foxtra = backup.runOnJS;
                    zuuluu = 10;
                    tangon = romeon[zuuluu];
                    tangon = golfie.bind(report)(tangon);
                    tangon = tangon.triggerHapticFeedback;
                    tangon = foxtra.bind(backup)(tangon);
                    zuuluu = romeon[zuuluu];
                    zuuluu = golfie.bind(report)(zuuluu);
                    zuuluu = zuuluu.HapticFeedbackTypes;
                    zuuluu = zuuluu.IMPACT_MEDIUM;
                    zuuluu = tangon.bind(report)(zuuluu);
 460:
                    report = _closure2_slot0;
                    tangon = report.set;
                    zuuluu = {};
                    golfie = report.get;
                    sizing = golfie.bind(report)();
                    output = zuuluu;
                    golfie = copyDataProperties(output, sizing);
                    golfie = 'x';
                    zuuluu[golfie] = oscard;
                    golfie = _closure1_slot7;
                    option = option * golfie;
                    golfie = _closure1_slot14;
                    yankee = yankee / golfie;
                    golfie = 1;
                    golfie = golfie - yankee;
                    golfie = offset * golfie;
                    option = option + golfie;
                    golfie = 'y';
                    zuuluu[golfie] = option;
                    offset = _closure1_slot0;
                    option = _closure1_slot2;
                    golfie = 9;
                    option = option[golfie];
                    golfie = undefined;
                    romeon = offset.bind(golfie)(option);
                    yankee = romeon.getQuestDockCollapsedWidth;
                    option = _closure2_slot2;
                    golfie = option.get;
                    golfie = golfie.bind(option)();
                    offset = golfie.width;
                    foxtra = _closure2_slot4;
                    golfie = foxtra.get;
                    golfie = golfie.bind(foxtra)();
                    option = golfie.left;
                    golfie = foxtra.get;
                    golfie = golfie.bind(foxtra)();
                    golfie = golfie.right;
                    option = yankee.bind(romeon)(offset, option, golfie);
                    golfie = 'width';
                    zuuluu[golfie] = option;
                    option = _closure1_slot5;
                    golfie = 'height';
                    zuuluu[golfie] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    report = _closure2_slot1;
                    tangon = report.set;
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.COLLAPSED;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00004_ip = 1240; continue _fun00003;
 677:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.get;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.CLOSED;
                    if(!(tangon === zuuluu)) { _fun00004_ip = 1240; continue _fun00003 }
 707:
                    zuuluu = global;
                    tangon = zuuluu.Math;
                    zuuluu = tangon.min;
                    tangon = zuuluu.bind(tangon)(verify, oscard);
                    zuuluu = _closure1_slot6;
                    tangon = tangon / zuuluu;
                    zuuluu = 1;
                    tangon = zuuluu - tangon;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu - verify;
                    yankee = tangon * zuuluu;
                    golfie = yankee > oscard;
                    report = _closure2_slot0;
                    tangon = report.set;
                    zuuluu = {};
                    option = report.get;
                    sizing = option.bind(report)();
                    output = zuuluu;
                    option = copyDataProperties(output, sizing);
                    option = 'x';
                    zuuluu[option] = oscard;
                    offset = 0;
                    if(!golfie) { _fun00004_ip = 806; continue _fun00003 }
 798:
                    option = _closure1_slot15;
                    offset = yankee * option;
 806:
                    option = 'y';
                    zuuluu[option] = offset;
                    yankee = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 9;
                    offset = offset[option];
                    option = undefined;
                    foxtra = yankee.bind(option)(offset);
                    romeon = foxtra.getQuestDockClosedWidth;
                    offset = _closure2_slot2;
                    option = offset.get;
                    option = option.bind(offset)();
                    yankee = option.width;
                    backup = _closure2_slot4;
                    option = backup.get;
                    option = option.bind(backup)();
                    offset = option.left;
                    option = backup.get;
                    option = option.bind(backup)();
                    option = option.right;
                    offset = romeon.bind(foxtra)(yankee, offset, option);
                    option = 'width';
                    zuuluu[option] = offset;
                    option = verify;
                    if(!golfie) { _fun00004_ip = 919; continue _fun00003 }
 915:
                    option = _closure1_slot6;
 919:
                    golfie = 'height';
                    zuuluu[golfie] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure2_slot1;
                    zuuluu = tangon.set;
                    entity = _closure1_slot4;
                    entity = entity.CLOSED;
                    entity = zuuluu.bind(tangon)(entity);
                    _fun00004_ip = 1240; continue _fun00003;
 962:
                    zuuluu = _closure2_slot7;
                    entity = zuuluu.get;
                    entity = entity.bind(zuuluu)();
                    entity = entity.isDrawer;
                    if(entity) { _fun00004_ip = 1027; continue _fun00003 }
 984:
                    tangon = _closure2_slot7;
                    zuuluu = tangon.set;
                    entity = {};
                    report = tangon.get;
                    sizing = report.bind(tangon)();
                    output = entity;
                    report = copyDataProperties(output, sizing);
                    golfie = true;
                    report = 'isDrawer';
                    entity[report] = golfie;
                    entity = zuuluu.bind(tangon)(entity);
 1027:
                    report = _closure2_slot0;
                    tangon = report.set;
                    zuuluu = {};
                    entity = report.get;
                    sizing = entity.bind(report)();
                    output = zuuluu;
                    entity = copyDataProperties(output, sizing);
                    entity = 'x';
                    zuuluu[entity] = oscard;
                    entity = 'y';
                    zuuluu[entity] = oscard;
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    oscard = 9;
                    golfie = golfie[oscard];
                    oscard = undefined;
                    romeon = option.bind(oscard)(golfie);
                    yankee = romeon.getQuestDockExpandedWidth;
                    offset = _closure2_slot2;
                    oscard = offset.get;
                    oscard = oscard.bind(offset)();
                    option = oscard.width;
                    foxtra = _closure2_slot4;
                    oscard = foxtra.get;
                    oscard = oscard.bind(foxtra)();
                    golfie = oscard.left;
                    oscard = foxtra.get;
                    oscard = oscard.bind(foxtra)();
                    oscard = oscard.right;
                    golfie = yankee.bind(romeon)(option, golfie, oscard);
                    oscard = 'width';
                    zuuluu[oscard] = golfie;
                    oscard = global;
                    option = oscard.Math;
                    golfie = option.min;
                    oscard = offset.get;
                    oscard = oscard.bind(offset)();
                    oscard = oscard.height;
                    golfie = golfie.bind(option)(verify, oscard);
                    oscard = 'height';
                    zuuluu[oscard] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.set;
                    entity = _closure1_slot4;
                    entity = entity.EXPANDED;
                    entity = michal.bind(zuuluu)(entity);
 1240:
                    entity = undefined;
                    return entity;
                }
            };
            foxtra = {};
            foxtra['initialGestureOffset'] = yankee;
            backup = _closure2_slot3;
            foxtra['minExpandedContentHeight'] = backup;
            backup = _closure2_slot1;
            foxtra['activeQuestDockMode'] = backup;
            backup = _closure1_slot4;
            foxtra['QuestDockMode'] = backup;
            backup = _closure1_slot16;
            foxtra['QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR'] = backup;
            backup = _closure1_slot10;
            foxtra['QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT'] = backup;
            foxtra['questDockWrapperSpecs'] = golfie;
            backup = 9;
            golfie = offset[backup];
            golfie = verify.bind(option)(golfie);
            golfie = golfie.getQuestDockExpandedWidth;
            foxtra['getQuestDockExpandedWidth'] = golfie;
            golfie = _closure2_slot2;
            foxtra['windowDimensions'] = golfie;
            golfie = _closure2_slot4;
            foxtra['safeArea'] = golfie;
            golfie = _closure1_slot11;
            foxtra['QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT'] = golfie;
            golfie = _closure1_slot6;
            foxtra['QUEST_DOCK_CLOSED_HEIGHT'] = golfie;
            golfie = _closure1_slot15;
            foxtra['QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR'] = golfie;
            golfie = offset[backup];
            golfie = verify.bind(option)(golfie);
            golfie = golfie.getQuestDockClosedWidth;
            foxtra['getQuestDockClosedWidth'] = golfie;
            golfie = _closure1_slot5;
            foxtra['QUEST_DOCK_COLLAPSED_HEIGHT'] = golfie;
            golfie = _closure1_slot14;
            foxtra['QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR'] = golfie;
            golfie = 7;
            kiloes = offset[golfie];
            kiloes = verify.bind(option)(kiloes);
            kiloes = kiloes.runOnJS;
            foxtra['runOnJS'] = kiloes;
            kiloes = 10;
            sizing = offset[kiloes];
            sizing = verify.bind(option)(sizing);
            sizing = sizing.triggerHapticFeedback;
            foxtra['triggerHapticFeedback'] = sizing;
            kiloes = offset[kiloes];
            kiloes = verify.bind(option)(kiloes);
            kiloes = kiloes.HapticFeedbackTypes;
            foxtra['HapticFeedbackTypes'] = kiloes;
            kiloes = _closure1_slot7;
            foxtra['QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED'] = kiloes;
            backup = offset[backup];
            backup = verify.bind(option)(backup);
            backup = backup.getQuestDockCollapsedWidth;
            foxtra['getQuestDockCollapsedWidth'] = backup;
            michal['__closure'] = foxtra;
            foxtra = 14201763266080.0;
            michal['__workletHash'] = foxtra;
            foxtra = _closure1_slot20;
            michal['__initData'] = foxtra;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.onEnd;
            entity = function(argFoo) { // Original name: t
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    report = entity.velocityY;
                    golfie = entity.y;
                    entity = global;
                    zuuluu = entity.Math;
                    michal = zuuluu.abs;
                    tangon = michal.bind(zuuluu)(report);
                    michal = entity.Math;
                    entity = michal.abs;
                    oscard = entity.bind(michal)(golfie);
                    michal = _closure1_slot12;
                    if(!(tangon > michal)) { _fun00006_ip = 70; continue _fun00005 }
 61:
                    michal = 0;
                    if(!(!(report < michal))) { _fun00006_ip = 336; continue _fun00005 }
 70:
                    michal = _closure1_slot12;
                    if(!(tangon < michal)) { _fun00006_ip = 106; continue _fun00005 }
 78:
                    zuuluu = _closure2_slot7;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    michal = michal.isDrawer;
                    if(michal) { _fun00006_ip = 336; continue _fun00005 }
 106:
                    option = _closure2_slot5;
                    zuuluu = option.get;
                    option = zuuluu.bind(option)();
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.COLLAPSED;
                    if(!(option === zuuluu)) { _fun00006_ip = 158; continue _fun00005 }
 136:
                    zuuluu = _closure1_slot12;
                    if(!(!(report > zuuluu))) { _fun00006_ip = 324; continue _fun00005 }
 147:
                    zuuluu = _closure1_slot11;
                    if(!(!(golfie > zuuluu))) { _fun00006_ip = 324; continue _fun00005 }
 158:
                    zuuluu = _closure1_slot12;
                    if(!(report > zuuluu)) { _fun00006_ip = 193; continue _fun00005 }
 166:
                    option = _closure2_slot5;
                    zuuluu = option.get;
                    option = zuuluu.bind(option)();
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.COLLAPSED;
                    if(!(option === zuuluu)) { _fun00006_ip = 312; continue _fun00005 }
 193:
                    zuuluu = 0;
                    if(!(report < zuuluu)) { _fun00006_ip = 234; continue _fun00005 }
 199:
                    zuuluu = _closure1_slot12;
                    if(!(tangon > zuuluu)) { _fun00006_ip = 234; continue _fun00005 }
 207:
                    tangon = _closure2_slot5;
                    zuuluu = tangon.get;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.CLOSED;
                    if(!(tangon !== zuuluu)) { _fun00006_ip = 312; continue _fun00005 }
 234:
                    tangon = _closure2_slot5;
                    zuuluu = tangon.get;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.COLLAPSED;
                    if(!(tangon !== zuuluu)) { _fun00006_ip = 300; continue _fun00005 }
 261:
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure1_slot4;
                    michal = michal.CLOSED;
                    if(!(zuuluu !== michal)) { _fun00006_ip = 300; continue _fun00005 }
 288:
                    michal = _closure1_slot4;
                    zuuluu = michal.COLLAPSED;
                    _fun00006_ip = 310; continue _fun00005;
 300:
                    michal = _closure1_slot4;
                    zuuluu = michal.RESET_TO_PREVIOUS;
 310:
                    _fun00006_ip = 322; continue _fun00005;
 312:
                    michal = _closure1_slot4;
                    zuuluu = michal.COLLAPSED;
 322:
                    _fun00006_ip = 334; continue _fun00005;
 324:
                    michal = _closure1_slot4;
                    zuuluu = michal.SOFT_DISMISSED;
 334:
                    _fun00006_ip = 391; continue _fun00005;
 336:
                    tangon = _closure2_slot5;
                    michal = tangon.get;
                    tangon = michal.bind(tangon)();
                    michal = _closure1_slot4;
                    michal = michal.EXPANDED;
                    if(!(tangon !== michal)) { _fun00006_ip = 378; continue _fun00005 }
 366:
                    michal = _closure1_slot4;
                    michal = michal.EXPANDED;
                    _fun00006_ip = 388; continue _fun00005;
 378:
                    tangon = _closure1_slot4;
                    michal = tangon.RESET_TO_PREVIOUS;
 388:
                    zuuluu = michal;
 391:
                    report = _closure2_slot5;
                    tangon = report.get;
                    report = tangon.bind(report)();
                    tangon = _closure1_slot4;
                    tangon = tangon.CLOSED;
                    tangon = report === tangon;
                    if(!tangon) { _fun00006_ip = 438; continue _fun00005 }
 424:
                    report = _closure1_slot4;
                    report = report.EXPANDED;
                    tangon = zuuluu !== report;
 438:
                    if(!tangon) { _fun00006_ip = 447; continue _fun00005 }
 441:
                    report = 0;
                    tangon = golfie < report;
 447:
                    if(!tangon) { _fun00006_ip = 458; continue _fun00005 }
 450:
                    report = _closure1_slot11;
                    tangon = oscard > report;
 458:
                    if(!tangon) { _fun00006_ip = 471; continue _fun00005 }
 461:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.COLLAPSED;
 471:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 7;
                    tangon = tangon[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.runOnJS;
                    michal = _closure2_slot6;
                    michal = tangon.bind(report)(michal);
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            report = {};
            foxtra = _closure1_slot12;
            report['QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY'] = foxtra;
            report['restingQuestDockMode'] = romeon;
            romeon = _closure1_slot4;
            report['QuestDockMode'] = romeon;
            report['initialGestureOffset'] = yankee;
            yankee = _closure1_slot11;
            report['QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT'] = yankee;
            golfie = offset[golfie];
            golfie = verify.bind(option)(golfie);
            golfie = golfie.runOnJS;
            report['runOnJS'] = golfie;
            oscard = _closure2_slot6;
            report['setRestingQuestDockMode'] = oscard;
            entity['__closure'] = report;
            report = 2588627994637.0;
            entity['__workletHash'] = report;
            tangon = _closure1_slot21;
            entity['__initData'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = tangon.bind(report)(entity, zuuluu);
        zuuluu = yankee[option];
        report = offset.bind(verify)(zuuluu);
        tangon = report.useAnimatedReaction;
        zuuluu = function() { // Original name: k
            michal = _closure2_slot1;
            entity = michal.get;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = {};
        golfie['activeQuestDockMode'] = romeon;
        zuuluu['__closure'] = golfie;
        golfie = 4183219364740.0;
        zuuluu['__workletHash'] = golfie;
        golfie = _closure1_slot22;
        zuuluu['__initData'] = golfie;
        michal = function(argFoo, argBar) { // Original name: o
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                entity = tangon !== zuuluu;
                if(!entity) { _fun00008_ip = 30; continue _fun00007 }
 13:
                michal = _closure1_slot4;
                michal = michal.CLOSED;
                entity = tangon !== michal;
 30:
                if(!entity) { _fun00008_ip = 50; continue _fun00007 }
 33:
                michal = _closure1_slot4;
                michal = michal.CLOSED;
                entity = zuuluu !== michal;
 50:
                if(!entity) { _fun00008_ip = 132; continue _fun00007 }
 53:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                entity = 7;
                entity = report[entity];
                zuuluu = undefined;
                golfie = tangon.bind(zuuluu)(entity);
                oscard = golfie.runOnJS;
                entity = 10;
                michal = report[entity];
                michal = tangon.bind(zuuluu)(michal);
                michal = michal.triggerHapticFeedback;
                michal = oscard.bind(golfie)(michal);
                entity = report[entity];
                entity = tangon.bind(zuuluu)(entity);
                entity = entity.HapticFeedbackTypes;
                entity = entity.IMPACT_MEDIUM;
                entity = michal.bind(zuuluu)(entity);
 132:
                entity = undefined;
                return entity;
            }
        };
        golfie = {};
        romeon = _closure1_slot4;
        golfie['QuestDockMode'] = romeon;
        option = yankee[option];
        option = offset.bind(verify)(option);
        option = option.runOnJS;
        golfie['runOnJS'] = option;
        option = 10;
        romeon = yankee[option];
        romeon = offset.bind(verify)(romeon);
        romeon = romeon.triggerHapticFeedback;
        golfie['triggerHapticFeedback'] = romeon;
        option = yankee[option];
        option = offset.bind(verify)(option);
        option = option.HapticFeedbackTypes;
        golfie['HapticFeedbackTypes'] = option;
        michal['__closure'] = golfie;
        golfie = 16625438704608.0;
        michal['__workletHash'] = golfie;
        oscard = _closure1_slot23;
        michal['__initData'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot24 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    option = report.bind(entity)(option);
    var _closure1_slot3 = option;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.QuestDockMode;
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
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
    report = golfie[report];
    report = oscard.bind(entity)(report);
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
    report = option.memo;
    tangon = function(argFoo) { // Original name: QuestDockGestureDetector
        michal = _closure1_slot24;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot17;
        michal = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 8;
        entity = oscard[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.GestureDetector;
        entity = {};
        entity['gesture'] = report;
        report = argFoo;
        report = report.children;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    tangon = report.bind(option)(tangon);
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/native/QuestDock/QuestDockGestureDetector.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['useQuestDockSwipeGesture'] = michal;
    return entity;
})();