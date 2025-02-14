// app/modules/quests/native/QuestDock/QuestDockHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.QuestDockMode;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.QUEST_DOCK_CLOSED_HEIGHT;
    var _closure1_slot7 = golf;
    golf = tango.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot8 = golf;
    golf = tango.QUEST_DOCK_EXTERNAL_OFFSET_CLOSED;
    var _closure1_slot9 = golf;
    golf = tango.QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED;
    var _closure1_slot10 = golf;
    golf = tango.QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED;
    var _closure1_slot11 = golf;
    golf = tango.QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED;
    var _closure1_slot12 = golf;
    golf = tango.QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED;
    var _closure1_slot13 = golf;
    tango = tango.QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
    var _closure1_slot14 = tango;
    tango = {};
    golf = 'function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}';
    tango['code'] = golf;
    var _closure1_slot15 = tango;
    tango = {};
    golf = 'function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED,getQuestDockCollapsedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED*-1,width:getQuestDockCollapsedWidth(windowWidth,safeArea.left,safeArea.right),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED*-1,width:getQuestDockClosedWidth(windowWidth,safeArea.left,safeArea.right),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}';
    tango['code'] = golf;
    var _closure1_slot16 = tango;
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/native/QuestDock/QuestDockHooks.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useQuestDockModeAnimatedReaction
        report = _closure1_slot4;
        tango = report.useContext;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 5;
        zulu = offset[entity];
        entity = undefined;
        zulu = verify.bind(entity)(zulu);
        zulu = zulu.QuestDockGestureContext;
        zulu = tango.bind(report)(zulu);
        options = zulu.questDockWrapperSpecs;
        var _closure2_slot0 = options;
        kilo = zulu.windowDimensions;
        var _closure2_slot1 = kilo;
        yankee = zulu.activeQuestDockMode;
        var _closure2_slot2 = yankee;
        sizing = zulu.minExpandedContentHeight;
        var _closure2_slot3 = sizing;
        tango = report.useContext;
        zulu = 6;
        zulu = offset[zulu];
        zulu = verify.bind(entity)(zulu);
        zulu = zulu.QuestDockExternalCoordinationContext;
        zulu = tango.bind(report)(zulu);
        output = zulu.restingQuestDockMode;
        var _closure2_slot4 = output;
        romeo = zulu.setRestingQuestDockMode;
        var _closure2_slot5 = romeo;
        tango = _closure1_slot1;
        zulu = 7;
        zulu = offset[zulu];
        zulu = tango.bind(entity)(zulu);
        backup = zulu.bind(entity)();
        var _closure2_slot6 = backup;
        foxtrot = 8;
        zulu = offset[foxtrot];
        report = verify.bind(entity)(zulu);
        tango = report.useAnimatedReaction;
        zulu = function() { // Original name: o
            entity = {};
            tango = _closure2_slot4;
            zulu = tango.get;
            zulu = zulu.bind(tango)();
            entity['restingQuestDockMode'] = zulu;
            tango = _closure2_slot3;
            zulu = tango.get;
            zulu = zulu.bind(tango)();
            entity['minExpandedContentHeight'] = zulu;
            tango = _closure2_slot1;
            zulu = tango.get;
            zulu = zulu.bind(tango)();
            zulu = zulu.width;
            entity['windowWidth'] = zulu;
            zulu = tango.get;
            zulu = zulu.bind(tango)();
            zulu = zulu.height;
            entity['windowHeight'] = zulu;
            zulu = _closure2_slot6;
            mike = zulu.get;
            mike = mike.bind(zulu)();
            entity['safeArea'] = mike;
            return entity;
        };
        golf = {};
        golf['restingQuestDockMode'] = output;
        golf['minExpandedContentHeight'] = sizing;
        golf['windowDimensions'] = kilo;
        golf['safeArea'] = backup;
        zulu['__closure'] = golf;
        golf = 9502251090521.0;
        zulu['__workletHash'] = golf;
        golf = _closure1_slot15;
        zulu['__initData'] = golf;
        mike = function(argFoo, argBar) { // Original name: t
            _fun91277: for(var _fun91277_ip = 0; ; ) switch(_fun91277_ip) {
 0:
                mike = argFoo;
                oscar = argBar;
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 9;
                zulu = zulu[entity];
                entity = undefined;
                options = report.bind(entity)(zulu);
                golf = options.cheapWorkletShallowEqual;
                report = null;
                verify = report != oscar;
                zulu = undefined;
                if(!verify) { _fun91277_ip = 51; continue _fun91277 }
 48:
                zulu = oscar;
 51:
                zulu = golf.bind(options)(mike, zulu);
                if(zulu) { _fun91277_ip = 789; continue _fun91277 }
 63:
                golf = mike.restingQuestDockMode;
                result = mike.minExpandedContentHeight;
                foxtrot = mike.windowWidth;
                offset = mike.windowHeight;
                verify = mike.safeArea;
                mike = _closure1_slot6;
                mike = mike.RESET_TO_PREVIOUS;
                if(!(mike !== golf)) { _fun91277_ip = 714; continue _fun91277 }
 110:
                mike = _closure1_slot6;
                mike = mike.COLLAPSED;
                if(!(mike !== golf)) { _fun91277_ip = 590; continue _fun91277 }
 127:
                mike = _closure1_slot6;
                mike = mike.CLOSED;
                if(!(mike !== golf)) { _fun91277_ip = 473; continue _fun91277 }
 144:
                mike = _closure1_slot6;
                mike = mike.SOFT_DISMISSED;
                if(!(mike !== golf)) { _fun91277_ip = 473; continue _fun91277 }
 161:
                mike = _closure1_slot6;
                mike = mike.EXPANDED;
                if(!(mike === golf)) { _fun91277_ip = 789; continue _fun91277 }
 178:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                kilo = 10;
                mike = mike[kilo];
                options = zulu.bind(entity)(mike);
                zulu = options.getQuestDockExpandedHeightLimits;
                mike = verify.top;
                mike = zulu.bind(options)(offset, mike, result);
                zulu = mike.minHeight;
                yankee = mike.maxHeight;
                options = _closure2_slot0;
                zulu = options.get;
                zulu = zulu.bind(options)();
                options = zulu.height;
                zulu = _closure1_slot8;
                zulu = options <= zulu;
                if(zulu) { _fun91277_ip = 345; continue _fun91277 }
 260:
                options = report != oscar;
                if(!options) { _fun91277_ip = 342; continue _fun91277 }
 267:
                romeo = _closure2_slot0;
                offset = romeo.get;
                offset = offset.bind(romeo)();
                romeo = offset.height;
                backup = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[kilo];
                output = backup.bind(entity)(offset);
                sizing = output.getQuestDockExpandedHeightLimits;
                backup = oscar.windowHeight;
                offset = oscar.safeArea;
                offset = offset.top;
                offset = sizing.bind(output)(backup, offset, result);
                offset = offset.maxHeight;
                options = romeo === offset;
 342:
                zulu = options;
 345:
                if(zulu) { _fun91277_ip = 366; continue _fun91277 }
 348:
                options = _closure2_slot0;
                zulu = options.get;
                zulu = zulu.bind(options)();
                zulu = zulu.height;
 366:
                offset = _closure2_slot0;
                options = offset.set;
                zulu = {};
                romeo = 0;
                zulu['x'] = romeo;
                romeo = _closure1_slot14;
                zulu['y'] = romeo;
                backup = _closure1_slot0;
                romeo = _closure1_slot2;
                romeo = romeo[kilo];
                sizing = backup.bind(entity)(romeo);
                kilo = sizing.getQuestDockExpandedWidth;
                backup = verify.left;
                romeo = verify.right;
                romeo = kilo.bind(sizing)(foxtrot, backup, romeo);
                zulu['width'] = romeo;
                zulu['height'] = yankee;
                zulu = options.bind(offset)(zulu);
                options = _closure2_slot2;
                zulu = options.set;
                mike = _closure1_slot6;
                mike = mike.EXPANDED;
                mike = zulu.bind(options)(mike);
                _fun91277_ip = 789; continue _fun91277;
 473:
                offset = _closure2_slot0;
                options = offset.set;
                zulu = {};
                yankee = 0;
                zulu['x'] = yankee;
                romeo = _closure1_slot12;
                yankee = -1;
                yankee = yankee * romeo;
                zulu['y'] = yankee;
                romeo = _closure1_slot0;
                backup = _closure1_slot2;
                yankee = 10;
                yankee = backup[yankee];
                kilo = romeo.bind(entity)(yankee);
                backup = kilo.getQuestDockClosedWidth;
                romeo = verify.left;
                yankee = verify.right;
                yankee = backup.bind(kilo)(foxtrot, romeo, yankee);
                zulu['width'] = yankee;
                yankee = _closure1_slot7;
                zulu['height'] = yankee;
                zulu = options.bind(offset)(zulu);
                zulu = _closure2_slot2;
                mike = zulu.set;
                mike = mike.bind(zulu)(golf);
                _fun91277_ip = 789; continue _fun91277;
 590:
                options = _closure2_slot0;
                golf = options.set;
                zulu = {};
                offset = 0;
                zulu['x'] = offset;
                yankee = _closure1_slot13;
                offset = -1;
                offset = offset * yankee;
                zulu['y'] = offset;
                yankee = _closure1_slot0;
                romeo = _closure1_slot2;
                offset = 10;
                offset = romeo[offset];
                romeo = yankee.bind(entity)(offset);
                yankee = romeo.getQuestDockCollapsedWidth;
                offset = verify.left;
                verify = verify.right;
                verify = yankee.bind(romeo)(foxtrot, offset, verify);
                zulu['width'] = verify;
                verify = _closure1_slot8;
                zulu['height'] = verify;
                zulu = golf.bind(options)(zulu);
                golf = _closure2_slot2;
                zulu = golf.set;
                mike = _closure1_slot6;
                mike = mike.COLLAPSED;
                mike = zulu.bind(golf)(mike);
                _fun91277_ip = 789; continue _fun91277;
 714:
                zulu = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 8;
                mike = golf[mike];
                golf = zulu.bind(entity)(mike);
                zulu = golf.runOnJS;
                mike = _closure2_slot5;
                zulu = zulu.bind(golf)(mike);
                golf = report == oscar;
                mike = undefined;
                if(golf) { _fun91277_ip = 766; continue _fun91277 }
 760:
                mike = oscar.restingQuestDockMode;
 766:
                if(!(report == mike)) { _fun91277_ip = 780; continue _fun91277 }
 770:
                tango = _closure1_slot6;
                mike = tango.COLLAPSED;
 780:
                mike = zulu.bind(entity)(mike);
                mike = undefined;
                return mike;
 789:
                return entity;
            }
        };
        golf = {};
        backup = 9;
        backup = offset[backup];
        backup = verify.bind(entity)(backup);
        backup = backup.cheapWorkletShallowEqual;
        golf['cheapWorkletShallowEqual'] = backup;
        backup = _closure1_slot6;
        golf['QuestDockMode'] = backup;
        foxtrot = offset[foxtrot];
        foxtrot = verify.bind(entity)(foxtrot);
        foxtrot = foxtrot.runOnJS;
        golf['runOnJS'] = foxtrot;
        golf['setRestingQuestDockMode'] = romeo;
        golf['questDockWrapperSpecs'] = options;
        options = _closure1_slot13;
        golf['QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED'] = options;
        options = 10;
        romeo = offset[options];
        romeo = verify.bind(entity)(romeo);
        romeo = romeo.getQuestDockCollapsedWidth;
        golf['getQuestDockCollapsedWidth'] = romeo;
        romeo = _closure1_slot8;
        golf['QUEST_DOCK_COLLAPSED_HEIGHT'] = romeo;
        golf['activeQuestDockMode'] = yankee;
        yankee = _closure1_slot12;
        golf['QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED'] = yankee;
        yankee = offset[options];
        yankee = verify.bind(entity)(yankee);
        yankee = yankee.getQuestDockClosedWidth;
        golf['getQuestDockClosedWidth'] = yankee;
        yankee = _closure1_slot7;
        golf['QUEST_DOCK_CLOSED_HEIGHT'] = yankee;
        yankee = offset[options];
        yankee = verify.bind(entity)(yankee);
        yankee = yankee.getQuestDockExpandedHeightLimits;
        golf['getQuestDockExpandedHeightLimits'] = yankee;
        yankee = _closure1_slot14;
        golf['QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED'] = yankee;
        options = offset[options];
        options = verify.bind(entity)(options);
        options = options.getQuestDockExpandedWidth;
        golf['getQuestDockExpandedWidth'] = options;
        mike['__closure'] = golf;
        golf = 9618314280124.0;
        mike['__workletHash'] = golf;
        oscar = _closure1_slot16;
        mike['__initData'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['useQuestDockModeAnimatedReaction'] = tango;
    tango = function() { // Original name: useQuestDockExternalOffset
        tango = _closure1_slot0;
        report = _closure1_slot2;
        zulu = 11;
        zulu = report[zulu];
        oscar = undefined;
        golf = tango.bind(oscar)(zulu);
        report = golf.useStateFromStoresArray;
        zulu = _closure1_slot5;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            mike = _closure1_slot5;
            zulu = mike.prevRestingQuestDockMode;
            entity = new Array(2);
            entity[0] = zulu;
            mike = mike.isVisible;
            entity[1] = mike;
            return entity;
        };
        report = report.bind(golf)(tango, zulu);
        tango = _closure1_slot3;
        zulu = 2;
        tango = tango.bind(oscar)(report, zulu);
        zulu = 0;
        report = tango[zulu];
        var _closure2_slot0 = report;
        zulu = 1;
        oscar = tango[zulu];
        var _closure2_slot1 = oscar;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun91280: for(var _fun91280_ip = 0; ; ) switch(_fun91280_ip) {
 0:
                mike = _closure2_slot1;
                if(mike) { _fun91280_ip = 14; continue _fun91280 }
 10:
                mike = 0;
                return mike;
 14:
                zulu = _closure2_slot0;
                mike = _closure1_slot6;
                mike = mike.COLLAPSED;
                if(!(mike !== zulu)) { _fun91280_ip = 93; continue _fun91280 }
 35:
                mike = _closure1_slot6;
                mike = mike.EXPANDED;
                if(!(mike !== zulu)) { _fun91280_ip = 87; continue _fun91280 }
 49:
                mike = _closure1_slot6;
                mike = mike.CLOSED;
                if(!(mike !== zulu)) { _fun91280_ip = 81; continue _fun91280 }
 63:
                mike = _closure1_slot6;
                mike = mike.SOFT_DISMISSED;
                if(!(mike !== zulu)) { _fun91280_ip = 81; continue _fun91280 }
 77:
                mike = 0;
                return mike;
 81:
                mike = _closure1_slot9;
                return mike;
 87:
                mike = _closure1_slot11;
                return mike;
 93:
                entity = _closure1_slot10;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useQuestDockExternalOffset'] = tango;
    tango = function() { // Original name: useQuestDockDismissalReset
        report = _closure1_slot4;
        tango = report.useContext;
        oscar = _closure1_slot0;
        options = _closure1_slot2;
        entity = 6;
        zulu = options[entity];
        entity = undefined;
        zulu = oscar.bind(entity)(zulu);
        zulu = zulu.QuestDockExternalCoordinationContext;
        zulu = tango.bind(report)(zulu);
        golf = zulu.setRestingQuestDockMode;
        var _closure2_slot0 = golf;
        tango = report.useContext;
        zulu = 5;
        zulu = options[zulu];
        zulu = oscar.bind(entity)(zulu);
        zulu = zulu.QuestDockGestureContext;
        zulu = tango.bind(report)(zulu);
        oscar = zulu.activeQuestDockMode;
        var _closure2_slot1 = oscar;
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            report = function() { // Original name: maybeResetSoftDismissal
                _fun91283: for(var _fun91283_ip = 0; ; ) switch(_fun91283_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = zulu.get;
                    tango = entity.bind(zulu)();
                    zulu = _closure1_slot6;
                    zulu = zulu.SOFT_DISMISSED;
                    zulu = tango !== zulu;
                    if(zulu) { _fun91283_ip = 79; continue _fun91283 }
 36:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    tango = 10;
                    report = report[tango];
                    tango = undefined;
                    oscar = oscar.bind(tango)(report);
                    report = oscar.isSoftDismissed;
                    tango = _closure1_slot5;
                    tango = tango.questDockSoftDismissedAt;
                    zulu = report.bind(oscar)(tango);
 79:
                    if(zulu) { _fun91283_ip = 103; continue _fun91283 }
 82:
                    zulu = _closure2_slot0;
                    entity = _closure1_slot6;
                    mike = entity.COLLAPSED;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            tango = undefined;
            mike = report.bind(tango)();
            mike = global;
            zulu = mike.setInterval;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 12;
            mike = golf[mike];
            mike = oscar.bind(tango)(mike);
            mike = mike.Millis;
            oscar = mike.MINUTE;
            mike = 5;
            mike = mike * oscar;
            mike = zulu.bind(tango)(report, mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = global;
                zulu = entity.clearInterval;
                mike = _closure3_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useQuestDockDismissalReset'] = tango;
    mike = function(argFoo) { // Original name: useActionSheetPressHandler
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 13;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useTrackQuestContentClickedWithImpression;
        report = zulu.bind(tango)();
        var _closure2_slot1 = report;
        tango = _closure1_slot4;
        zulu = tango.useCallback;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            oscar = _closure2_slot1;
            report = {};
            mike = _closure2_slot0;
            entity = mike.id;
            report['questId'] = entity;
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 14;
            options = zulu[entity];
            entity = undefined;
            options = golf.bind(entity)(options);
            options = options.QuestContent;
            options = options.QUEST_BAR_MOBILE;
            report['questContent'] = options;
            options = 13;
            options = zulu[options];
            options = golf.bind(entity)(options);
            options = options.QuestContentCTA;
            options = options.OPEN_CONTEXT_MENU;
            report['questContentCTA'] = options;
            report = oscar.bind(entity)(report);
            report = _closure1_slot1;
            tango = 15;
            tango = zulu[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.openLazy;
            tango = 17;
            tango = zulu[tango];
            golf = golf.bind(entity)(tango);
            tango = 16;
            tango = zulu[tango];
            zulu = zulu.paths;
            tango = golf.bind(entity)(tango, zulu);
            zulu = {};
            zulu['quest'] = mike;
            mike = 'QuestDockContextMenuActionSheet';
            mike = report.bind(oscar)(tango, mike, zulu);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useActionSheetPressHandler'] = mike;
    return entity;
})();