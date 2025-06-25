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
        verify = michal.questId;
        var _closure2_slot0 = verify;
        report = michal.sourceQuestContent;
        var _closure2_slot1 = report;
        tangon = _closure1_slot3;
        golfie = tangon.useContext;
        oscard = _closure1_slot0;
        offset = _closure1_slot2;
        michal = 2;
        michal = offset[michal];
        zuuluu = undefined;
        michal = oscard.bind(zuuluu)(michal);
        michal = michal.QuestDockExternalCoordinationContext;
        michal = golfie.bind(tangon)(michal);
        option = michal.setRestingQuestDockMode;
        var _closure2_slot2 = option;
        golfie = tangon.useContext;
        michal = 3;
        michal = offset[michal];
        michal = oscard.bind(zuuluu)(michal);
        michal = michal.QuestBottomSheetContext;
        michal = golfie.bind(tangon)(michal);
        golfie = michal.isInQuestBottomSheet;
        var _closure2_slot3 = golfie;
        michal = 4;
        michal = offset[michal];
        zuuluu = oscard.bind(zuuluu)(michal);
        michal = zuuluu.useQuestImpression;
        oscard = michal.bind(zuuluu)();
        var _closure2_slot4 = oscard;
        zuuluu = tangon.useCallback;
        michal = new Array(5);
        michal[0] = verify;
        michal[1] = option;
        michal[2] = golfie;
        michal[3] = oscard;
        michal[4] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot3;
                if(entity) { _fun00002_ip = 36; continue _fun00001 }
 13:
                tangon = _closure2_slot2;
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
                oscard = _closure2_slot0;
                zuuluu['questId'] = oscard;
                oscard = _closure2_slot4;
                golfie = null;
                option = golfie == oscard;
                oscard = undefined;
                if(option) { _fun00002_ip = 137; continue _fun00001 }
 123:
                verify = _closure2_slot4;
                option = verify.getQuestContentPosition;
                oscard = option.bind(verify)();
 137:
                zuuluu['questContentPosition'] = oscard;
                oscard = _closure2_slot1;
                zuuluu['sourceQuestContent'] = oscard;
                zuuluu = tangon.bind(entity)(zuuluu);
                option = _closure1_slot0;
                verify = _closure1_slot2;
                oscard = 7;
                michal = verify[oscard];
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
                oscard = verify[oscard];
                oscard = option.bind(entity)(oscard);
                oscard = oscard.QuestContentCTA;
                oscard = oscard.WATCH_VIDEO;
                michal['questContentCTA'] = oscard;
                oscard = _closure2_slot4;
                option = golfie == oscard;
                oscard = undefined;
                if(option) { _fun00002_ip = 275; continue _fun00001 }
 261:
                verify = _closure2_slot4;
                option = verify.getQuestContentPosition;
                oscard = option.bind(verify)();
 275:
                michal['questContentPosition'] = oscard;
                oscard = _closure2_slot4;
                golfie = golfie == oscard;
                oscard = undefined;
                if(golfie) { _fun00002_ip = 307; continue _fun00001 }
 293:
                option = _closure2_slot4;
                golfie = option.getId;
                oscard = golfie.bind(option)();
 307:
                michal['impressionId'] = oscard;
                report = _closure2_slot1;
                michal['sourceQuestContent'] = report;
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