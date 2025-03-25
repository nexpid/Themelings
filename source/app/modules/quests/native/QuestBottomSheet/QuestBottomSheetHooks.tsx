// app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.QuestDockMode;
    var _closure1_slot4 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useWatchTaskPressHandler
        michal = argFoo;
        option = michal.questId;
        var _closure2_slot0 = option;
        tangon = _closure1_slot3;
        oscard = tangon.useContext;
        report = _closure1_slot0;
        verify = _closure1_slot2;
        michal = 2;
        michal = verify[michal];
        zuuluu = undefined;
        michal = report.bind(zuuluu)(michal);
        michal = michal.QuestDockExternalCoordinationContext;
        michal = oscard.bind(tangon)(michal);
        golfie = michal.setRestingQuestDockMode;
        var _closure2_slot1 = golfie;
        oscard = tangon.useContext;
        michal = 3;
        michal = verify[michal];
        michal = report.bind(zuuluu)(michal);
        michal = michal.QuestBottomSheetContext;
        michal = oscard.bind(tangon)(michal);
        oscard = michal.isInQuestBottomSheet;
        var _closure2_slot2 = oscard;
        michal = 4;
        michal = verify[michal];
        zuuluu = report.bind(zuuluu)(michal);
        michal = zuuluu.useQuestImpression;
        report = michal.bind(zuuluu)();
        var _closure2_slot3 = report;
        zuuluu = tangon.useCallback;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot2;
                if(entity) { _fun00002_ip = 36; continue _fun00001 }
 13:
                tangon = _closure2_slot1;
                entity = _closure1_slot4;
                zuuluu = entity.COLLAPSED;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                _fun00002_ip = 75; continue _fun00001;
 36:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.hideActionSheet;
                entity = 'QuestBottomSheet';
                entity = zuuluu.bind(tangon)(entity);
 75:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 6;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = {};
                report = _closure2_slot0;
                zuuluu['questId'] = report;
                report = _closure2_slot3;
                golfie = null;
                option = golfie == report;
                report = undefined;
                if(option) { _fun00002_ip = 137; continue _fun00001 }
 123:
                verify = _closure2_slot3;
                option = verify.getQuestContentPosition;
                report = option.bind(verify)();
 137:
                zuuluu['questContentPosition'] = report;
                zuuluu = tangon.bind(entity)(zuuluu);
                option = _closure1_slot0;
                verify = _closure1_slot2;
                report = 7;
                michal = verify[report];
                tangon = option.bind(entity)(michal);
                zuuluu = tangon.trackQuestContentClicked;
                michal = {};
                offset = _closure2_slot0;
                michal['questId'] = offset;
                offset = 8;
                offset = verify[offset];
                offset = option.bind(entity)(offset);
                offset = offset.QuestContent;
                offset = offset.QUEST_BOTTOM_SHEET;
                michal['questContent'] = offset;
                report = verify[report];
                report = option.bind(entity)(report);
                report = report.QuestContentCTA;
                report = report.WATCH_VIDEO;
                michal['questContentCTA'] = report;
                report = _closure2_slot3;
                option = golfie == report;
                report = undefined;
                if(option) { _fun00002_ip = 266; continue _fun00001 }
 252:
                verify = _closure2_slot3;
                option = verify.getQuestContentPosition;
                report = option.bind(verify)();
 266:
                michal['questContentPosition'] = report;
                report = _closure2_slot3;
                golfie = golfie == report;
                report = undefined;
                if(golfie) { _fun00002_ip = 298; continue _fun00001 }
 284:
                golfie = _closure2_slot3;
                oscard = golfie.getId;
                report = oscard.bind(golfie)();
 298:
                michal['impressionId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useWatchTaskPressHandler'] = michal;
    return entity;
})();