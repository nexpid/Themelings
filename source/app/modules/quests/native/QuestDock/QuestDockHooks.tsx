// app/modules/quests/native/QuestDock/QuestDockHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.QuestDockMode;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.QUEST_DOCK_CLOSED_HEIGHT;
    var _closure1_slot7 = golfie;
    golfie = tangon.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot8 = golfie;
    golfie = tangon.QUEST_DOCK_EXTERNAL_OFFSET_CLOSED;
    var _closure1_slot9 = golfie;
    golfie = tangon.QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED;
    var _closure1_slot10 = golfie;
    golfie = tangon.QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED;
    var _closure1_slot11 = golfie;
    golfie = tangon.QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED;
    var _closure1_slot12 = golfie;
    golfie = tangon.QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED;
    var _closure1_slot13 = golfie;
    tangon = tangon.QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
    var _closure1_slot14 = tangon;
    tangon = {};
    golfie = 'function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}';
    tangon['code'] = golfie;
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = 'function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED,getQuestDockCollapsedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED*-1,width:getQuestDockCollapsedWidth(windowWidth,safeArea.left,safeArea.right),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED*-1,width:getQuestDockClosedWidth(windowWidth,safeArea.left,safeArea.right),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}';
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestDock/QuestDockHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useQuestDockModeAnimatedReaction
        report = _closure1_slot4;
        tangon = report.useContext;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 5;
        zuuluu = offset[entity];
        entity = undefined;
        zuuluu = verify.bind(entity)(zuuluu);
        zuuluu = zuuluu.QuestDockGestureContext;
        zuuluu = tangon.bind(report)(zuuluu);
        option = zuuluu.questDockWrapperSpecs;
        var _closure2_slot0 = option;
        kiloes = zuuluu.windowDimensions;
        var _closure2_slot1 = kiloes;
        yankee = zuuluu.activeQuestDockMode;
        var _closure2_slot2 = yankee;
        sizing = zuuluu.minExpandedContentHeight;
        var _closure2_slot3 = sizing;
        tangon = report.useContext;
        zuuluu = 6;
        zuuluu = offset[zuuluu];
        zuuluu = verify.bind(entity)(zuuluu);
        zuuluu = zuuluu.QuestDockExternalCoordinationContext;
        zuuluu = tangon.bind(report)(zuuluu);
        output = zuuluu.restingQuestDockMode;
        var _closure2_slot4 = output;
        romeon = zuuluu.setRestingQuestDockMode;
        var _closure2_slot5 = romeon;
        tangon = _closure1_slot1;
        zuuluu = 7;
        zuuluu = offset[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        backup = zuuluu.bind(entity)();
        var _closure2_slot6 = backup;
        foxtra = 8;
        zuuluu = offset[foxtra];
        report = verify.bind(entity)(zuuluu);
        tangon = report.useAnimatedReaction;
        zuuluu = function() { // Original name: o
            entity = {};
            tangon = _closure2_slot4;
            zuuluu = tangon.get;
            zuuluu = zuuluu.bind(tangon)();
            entity['restingQuestDockMode'] = zuuluu;
            tangon = _closure2_slot3;
            zuuluu = tangon.get;
            zuuluu = zuuluu.bind(tangon)();
            entity['minExpandedContentHeight'] = zuuluu;
            tangon = _closure2_slot1;
            zuuluu = tangon.get;
            zuuluu = zuuluu.bind(tangon)();
            zuuluu = zuuluu.width;
            entity['windowWidth'] = zuuluu;
            zuuluu = tangon.get;
            zuuluu = zuuluu.bind(tangon)();
            zuuluu = zuuluu.height;
            entity['windowHeight'] = zuuluu;
            zuuluu = _closure2_slot6;
            michal = zuuluu.get;
            michal = michal.bind(zuuluu)();
            entity['safeArea'] = michal;
            return entity;
        };
        golfie = {};
        golfie['restingQuestDockMode'] = output;
        golfie['minExpandedContentHeight'] = sizing;
        golfie['windowDimensions'] = kiloes;
        golfie['safeArea'] = backup;
        zuuluu['__closure'] = golfie;
        golfie = 9502251090521.0;
        zuuluu['__workletHash'] = golfie;
        golfie = _closure1_slot15;
        zuuluu['__initData'] = golfie;
        michal = function(argFoo, argBar) { // Original name: t
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                oscard = argBar;
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                option = report.bind(entity)(zuuluu);
                golfie = option.cheapWorkletShallowEqual;
                report = null;
                verify = report != oscard;
                zuuluu = undefined;
                if(!verify) { _fun00002_ip = 51; continue _fun00001 }
 48:
                zuuluu = oscard;
 51:
                zuuluu = golfie.bind(option)(michal, zuuluu);
                if(zuuluu) { _fun00002_ip = 897; continue _fun00001 }
 63:
                golfie = michal.restingQuestDockMode;
                result = michal.minExpandedContentHeight;
                foxtra = michal.windowWidth;
                offset = michal.windowHeight;
                verify = michal.safeArea;
                michal = _closure1_slot6;
                michal = michal.RESET_TO_PREVIOUS;
                if(!(michal !== golfie)) { _fun00002_ip = 822; continue _fun00001 }
 110:
                michal = _closure1_slot6;
                michal = michal.COLLAPSED;
                if(!(michal !== golfie)) { _fun00002_ip = 662; continue _fun00001 }
 127:
                michal = _closure1_slot6;
                michal = michal.CLOSED;
                if(!(michal !== golfie)) { _fun00002_ip = 509; continue _fun00001 }
 144:
                michal = _closure1_slot6;
                michal = michal.SOFT_DISMISSED;
                if(!(michal !== golfie)) { _fun00002_ip = 509; continue _fun00001 }
 161:
                michal = _closure1_slot6;
                michal = michal.EXPANDED;
                if(!(michal === golfie)) { _fun00002_ip = 897; continue _fun00001 }
 178:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                kiloes = 10;
                michal = michal[kiloes];
                option = zuuluu.bind(entity)(michal);
                zuuluu = option.getQuestDockExpandedHeightLimits;
                michal = verify.top;
                michal = zuuluu.bind(option)(offset, michal, result);
                zuuluu = michal.minHeight;
                romeon = michal.maxHeight;
                option = _closure2_slot0;
                zuuluu = option.get;
                zuuluu = zuuluu.bind(option)();
                option = zuuluu.height;
                zuuluu = _closure1_slot8;
                zuuluu = option <= zuuluu;
                if(zuuluu) { _fun00002_ip = 345; continue _fun00001 }
 260:
                option = report != oscard;
                if(!option) { _fun00002_ip = 342; continue _fun00001 }
 267:
                yankee = _closure2_slot0;
                offset = yankee.get;
                offset = offset.bind(yankee)();
                yankee = offset.height;
                backup = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[kiloes];
                output = backup.bind(entity)(offset);
                sizing = output.getQuestDockExpandedHeightLimits;
                backup = oscard.windowHeight;
                offset = oscard.safeArea;
                offset = offset.top;
                offset = sizing.bind(output)(backup, offset, result);
                offset = offset.maxHeight;
                option = yankee === offset;
 342:
                zuuluu = option;
 345:
                if(zuuluu) { _fun00002_ip = 366; continue _fun00001 }
 348:
                option = _closure2_slot0;
                zuuluu = option.get;
                zuuluu = zuuluu.bind(option)();
                zuuluu = zuuluu.height;
 366:
                offset = _closure2_slot0;
                option = offset.set;
                zuuluu = {};
                yankee = offset.get;
                update = yankee.bind(offset)();
                source = zuuluu;
                yankee = copyDataProperties(source, update);
                backup = 0;
                yankee = 'x';
                zuuluu[yankee] = backup;
                backup = _closure1_slot14;
                yankee = 'y';
                zuuluu[yankee] = backup;
                backup = _closure1_slot0;
                yankee = _closure1_slot2;
                yankee = yankee[kiloes];
                sizing = backup.bind(entity)(yankee);
                kiloes = sizing.getQuestDockExpandedWidth;
                backup = verify.left;
                yankee = verify.right;
                backup = kiloes.bind(sizing)(foxtra, backup, yankee);
                yankee = 'width';
                zuuluu[yankee] = backup;
                yankee = 'height';
                zuuluu[yankee] = romeon;
                zuuluu = option.bind(offset)(zuuluu);
                option = _closure2_slot2;
                zuuluu = option.set;
                michal = _closure1_slot6;
                michal = michal.EXPANDED;
                michal = zuuluu.bind(option)(michal);
                _fun00002_ip = 897; continue _fun00001;
 509:
                offset = _closure2_slot0;
                option = offset.set;
                zuuluu = {};
                yankee = offset.get;
                update = yankee.bind(offset)();
                source = zuuluu;
                yankee = copyDataProperties(source, update);
                romeon = 0;
                yankee = 'x';
                zuuluu[yankee] = romeon;
                romeon = _closure1_slot12;
                yankee = -1;
                romeon = yankee * romeon;
                yankee = 'y';
                zuuluu[yankee] = romeon;
                romeon = _closure1_slot0;
                backup = _closure1_slot2;
                yankee = 10;
                yankee = backup[yankee];
                kiloes = romeon.bind(entity)(yankee);
                backup = kiloes.getQuestDockClosedWidth;
                romeon = verify.left;
                yankee = verify.right;
                romeon = backup.bind(kiloes)(foxtra, romeon, yankee);
                yankee = 'width';
                zuuluu[yankee] = romeon;
                romeon = _closure1_slot7;
                yankee = 'height';
                zuuluu[yankee] = romeon;
                zuuluu = option.bind(offset)(zuuluu);
                zuuluu = _closure2_slot2;
                michal = zuuluu.set;
                michal = michal.bind(zuuluu)(golfie);
                _fun00002_ip = 897; continue _fun00001;
 662:
                option = _closure2_slot0;
                golfie = option.set;
                zuuluu = {};
                offset = option.get;
                update = offset.bind(option)();
                source = zuuluu;
                offset = copyDataProperties(source, update);
                yankee = 0;
                offset = 'x';
                zuuluu[offset] = yankee;
                yankee = _closure1_slot13;
                offset = -1;
                yankee = offset * yankee;
                offset = 'y';
                zuuluu[offset] = yankee;
                yankee = _closure1_slot0;
                romeon = _closure1_slot2;
                offset = 10;
                offset = romeon[offset];
                romeon = yankee.bind(entity)(offset);
                yankee = romeon.getQuestDockCollapsedWidth;
                offset = verify.left;
                verify = verify.right;
                offset = yankee.bind(romeon)(foxtra, offset, verify);
                verify = 'width';
                zuuluu[verify] = offset;
                offset = _closure1_slot8;
                verify = 'height';
                zuuluu[verify] = offset;
                zuuluu = golfie.bind(option)(zuuluu);
                golfie = _closure2_slot2;
                zuuluu = golfie.set;
                michal = _closure1_slot6;
                michal = michal.COLLAPSED;
                michal = zuuluu.bind(golfie)(michal);
                _fun00002_ip = 897; continue _fun00001;
 822:
                zuuluu = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 8;
                michal = golfie[michal];
                golfie = zuuluu.bind(entity)(michal);
                zuuluu = golfie.runOnJS;
                michal = _closure2_slot5;
                zuuluu = zuuluu.bind(golfie)(michal);
                golfie = report == oscard;
                michal = undefined;
                if(golfie) { _fun00002_ip = 874; continue _fun00001 }
 868:
                michal = oscard.restingQuestDockMode;
 874:
                if(!(report == michal)) { _fun00002_ip = 888; continue _fun00001 }
 878:
                tangon = _closure1_slot6;
                michal = tangon.COLLAPSED;
 888:
                michal = zuuluu.bind(entity)(michal);
                michal = undefined;
                return michal;
 897:
                return entity;
            }
        };
        golfie = {};
        backup = 9;
        backup = offset[backup];
        backup = verify.bind(entity)(backup);
        backup = backup.cheapWorkletShallowEqual;
        golfie['cheapWorkletShallowEqual'] = backup;
        backup = _closure1_slot6;
        golfie['QuestDockMode'] = backup;
        foxtra = offset[foxtra];
        foxtra = verify.bind(entity)(foxtra);
        foxtra = foxtra.runOnJS;
        golfie['runOnJS'] = foxtra;
        golfie['setRestingQuestDockMode'] = romeon;
        golfie['questDockWrapperSpecs'] = option;
        option = _closure1_slot13;
        golfie['QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED'] = option;
        option = 10;
        romeon = offset[option];
        romeon = verify.bind(entity)(romeon);
        romeon = romeon.getQuestDockCollapsedWidth;
        golfie['getQuestDockCollapsedWidth'] = romeon;
        romeon = _closure1_slot8;
        golfie['QUEST_DOCK_COLLAPSED_HEIGHT'] = romeon;
        golfie['activeQuestDockMode'] = yankee;
        yankee = _closure1_slot12;
        golfie['QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED'] = yankee;
        yankee = offset[option];
        yankee = verify.bind(entity)(yankee);
        yankee = yankee.getQuestDockClosedWidth;
        golfie['getQuestDockClosedWidth'] = yankee;
        yankee = _closure1_slot7;
        golfie['QUEST_DOCK_CLOSED_HEIGHT'] = yankee;
        yankee = offset[option];
        yankee = verify.bind(entity)(yankee);
        yankee = yankee.getQuestDockExpandedHeightLimits;
        golfie['getQuestDockExpandedHeightLimits'] = yankee;
        yankee = _closure1_slot14;
        golfie['QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED'] = yankee;
        option = offset[option];
        option = verify.bind(entity)(option);
        option = option.getQuestDockExpandedWidth;
        golfie['getQuestDockExpandedWidth'] = option;
        michal['__closure'] = golfie;
        golfie = 8147170339175.0;
        michal['__workletHash'] = golfie;
        oscard = _closure1_slot16;
        michal['__initData'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['useQuestDockModeAnimatedReaction'] = tangon;
    tangon = function() { // Original name: useQuestDockExternalOffset
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        zuuluu = 11;
        zuuluu = report[zuuluu];
        oscard = undefined;
        golfie = tangon.bind(oscard)(zuuluu);
        report = golfie.useStateFromStoresArray;
        zuuluu = _closure1_slot5;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            michal = _closure1_slot5;
            zuuluu = michal.prevRestingQuestDockMode;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = michal.isVisible;
            entity[1] = michal;
            return entity;
        };
        report = report.bind(golfie)(tangon, zuuluu);
        tangon = _closure1_slot3;
        zuuluu = 2;
        tangon = tangon.bind(oscard)(report, zuuluu);
        zuuluu = 0;
        report = tangon[zuuluu];
        var _closure2_slot0 = report;
        zuuluu = 1;
        oscard = tangon[zuuluu];
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00004_ip = 14; continue _fun00003 }
 10:
                michal = 0;
                return michal;
 14:
                zuuluu = _closure2_slot0;
                michal = _closure1_slot6;
                michal = michal.COLLAPSED;
                if(!(michal !== zuuluu)) { _fun00004_ip = 93; continue _fun00003 }
 35:
                michal = _closure1_slot6;
                michal = michal.EXPANDED;
                if(!(michal !== zuuluu)) { _fun00004_ip = 87; continue _fun00003 }
 49:
                michal = _closure1_slot6;
                michal = michal.CLOSED;
                if(!(michal !== zuuluu)) { _fun00004_ip = 81; continue _fun00003 }
 63:
                michal = _closure1_slot6;
                michal = michal.SOFT_DISMISSED;
                if(!(michal !== zuuluu)) { _fun00004_ip = 81; continue _fun00003 }
 77:
                michal = 0;
                return michal;
 81:
                michal = _closure1_slot9;
                return michal;
 87:
                michal = _closure1_slot11;
                return michal;
 93:
                entity = _closure1_slot10;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useQuestDockExternalOffset'] = tangon;
    tangon = function() { // Original name: useQuestDockDismissalReset
        report = _closure1_slot4;
        tangon = report.useContext;
        oscard = _closure1_slot0;
        option = _closure1_slot2;
        entity = 6;
        zuuluu = option[entity];
        entity = undefined;
        zuuluu = oscard.bind(entity)(zuuluu);
        zuuluu = zuuluu.QuestDockExternalCoordinationContext;
        zuuluu = tangon.bind(report)(zuuluu);
        golfie = zuuluu.setRestingQuestDockMode;
        var _closure2_slot0 = golfie;
        tangon = report.useContext;
        zuuluu = 5;
        zuuluu = option[zuuluu];
        zuuluu = oscard.bind(entity)(zuuluu);
        zuuluu = zuuluu.QuestDockGestureContext;
        zuuluu = tangon.bind(report)(zuuluu);
        oscard = zuuluu.activeQuestDockMode;
        var _closure2_slot1 = oscard;
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            report = function() { // Original name: maybeResetSoftDismissal
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = zuuluu.get;
                    tangon = entity.bind(zuuluu)();
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.SOFT_DISMISSED;
                    zuuluu = tangon !== zuuluu;
                    if(zuuluu) { _fun00006_ip = 79; continue _fun00005 }
 36:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    tangon = 10;
                    report = report[tangon];
                    tangon = undefined;
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.isSoftDismissed;
                    tangon = _closure1_slot5;
                    tangon = tangon.questDockSoftDismissedAt;
                    zuuluu = report.bind(oscard)(tangon);
 79:
                    if(zuuluu) { _fun00006_ip = 103; continue _fun00005 }
 82:
                    zuuluu = _closure2_slot0;
                    entity = _closure1_slot6;
                    michal = entity.COLLAPSED;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = undefined;
            michal = report.bind(tangon)();
            michal = global;
            zuuluu = michal.setInterval;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 12;
            michal = golfie[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.Millis;
            oscard = michal.MINUTE;
            michal = 5;
            michal = michal * oscard;
            michal = zuuluu.bind(tangon)(report, michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = global;
                zuuluu = entity.clearInterval;
                michal = _closure3_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useQuestDockDismissalReset'] = tangon;
    michal = function(argFoo) { // Original name: useActionSheetPressHandler
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 13;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useTrackQuestContentClickedWithImpression;
        report = zuuluu.bind(tangon)();
        var _closure2_slot1 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useCallback;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            oscard = _closure2_slot1;
            report = {};
            michal = _closure2_slot0;
            entity = michal.id;
            report['questId'] = entity;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            option = 14;
            verify = zuuluu[option];
            entity = undefined;
            verify = golfie.bind(entity)(verify);
            verify = verify.QuestContent;
            verify = verify.QUEST_BAR_MOBILE;
            report['questContent'] = verify;
            verify = 13;
            verify = zuuluu[verify];
            verify = golfie.bind(entity)(verify);
            verify = verify.QuestContentCTA;
            verify = verify.OPEN_CONTEXT_MENU;
            report['questContentCTA'] = verify;
            option = zuuluu[option];
            option = golfie.bind(entity)(option);
            option = option.QuestContent;
            option = option.QUEST_BAR_MOBILE;
            report['sourceQuestContent'] = option;
            report = oscard.bind(entity)(report);
            report = _closure1_slot1;
            tangon = 15;
            tangon = zuuluu[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.openLazy;
            tangon = 17;
            tangon = zuuluu[tangon];
            golfie = golfie.bind(entity)(tangon);
            tangon = 16;
            tangon = zuuluu[tangon];
            zuuluu = zuuluu.paths;
            tangon = golfie.bind(entity)(tangon, zuuluu);
            zuuluu = {};
            zuuluu['quest'] = michal;
            michal = 'QuestDockContextMenuActionSheet';
            michal = report.bind(oscard)(tangon, michal, zuuluu);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useActionSheetPressHandler'] = michal;
    return entity;
})();