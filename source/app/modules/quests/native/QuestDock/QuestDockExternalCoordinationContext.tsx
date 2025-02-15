// app/modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, tango);
    entity = 0;
    report = options[entity];
    tango = argCorge;
    entity = undefined;
    verify = tango.bind(entity)(report);
    var _closure1_slot2 = verify;
    report = 1;
    tango = options[report];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    offset = tango.QuestDockMode;
    var _closure1_slot4 = offset;
    tango = 3;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.SECOND;
    tango = report * tango;
    var _closure1_slot7 = tango;
    report = verify.createContext;
    tango = {};
    oscar = 6;
    yankee = options[oscar];
    romeo = golf.bind(entity)(yankee);
    yankee = romeo.createFakeSharedValue;
    offset = offset.COLLAPSED;
    offset = yankee.bind(romeo)(offset);
    tango['restingQuestDockMode'] = offset;
    offset = function() { // Original name: setRestingQuestDockMode
        entity = undefined;
        return entity;
    };
    tango['setRestingQuestDockMode'] = offset;
    oscar = options[oscar];
    yankee = golf.bind(entity)(oscar);
    offset = yankee.createFakeSharedValue;
    oscar = null;
    oscar = offset.bind(yankee)(oscar);
    tango['lastScrollEventSourceId'] = oscar;
    report = report.bind(verify)(tango);
    var _closure1_slot8 = report;
    oscar = verify.memo;
    tango = function(argFoo) { // Original name: QuestDockExternalCoordinationContextProviderInner
        _fun91368: for(var _fun91368_ip = 0; ; ) switch(_fun91368_ip) {
 0:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 7;
            report = options[zulu];
            tango = undefined;
            verify = golf.bind(tango)(report);
            oscar = verify.useSharedValue;
            report = null;
            verify = oscar.bind(verify)(report);
            var _closure2_slot0 = verify;
            zulu = options[zulu];
            oscar = golf.bind(tango)(zulu);
            report = oscar.useSharedValue;
            zulu = 8;
            zulu = options[zulu];
            options = golf.bind(tango)(zulu);
            golf = options.isSoftDismissed;
            zulu = _closure1_slot3;
            zulu = zulu.questDockSoftDismissedAt;
            zulu = golf.bind(options)(zulu);
            golf = _closure1_slot4;
            if(zulu) { _fun91368_ip = 105; continue _fun91368 }
 97:
            zulu = golf.COLLAPSED;
            _fun91368_ip = 111; continue _fun91368;
 105:
            zulu = golf.SOFT_DISMISSED;
 111:
            options = report.bind(oscar)(zulu);
            var _closure2_slot1 = options;
            oscar = _closure1_slot2;
            golf = oscar.useCallback;
            report = new Array(1);
            report[0] = options;
            zulu = function(argFoo) {
                _fun91369: for(var _fun91369_ip = 0; ; ) switch(_fun91369_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure2_slot1;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    if(!(mike !== zulu)) { _fun91369_ip = 37; continue _fun91369 }
 23:
                    mike = _closure2_slot1;
                    entity = mike.set;
                    entity = entity.bind(mike)(zulu);
 37:
                    mike = _closure1_slot4;
                    mike = mike.RESET_TO_PREVIOUS;
                    if(!(zulu !== mike)) { _fun91369_ip = 87; continue _fun91369 }
 54:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 9;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    entity = mike.updatePrevRestingQuestDockMode;
                    entity = entity.bind(mike)(zulu);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            golf = golf.bind(oscar)(zulu, report);
            var _closure2_slot2 = golf;
            report = oscar.useMemo;
            zulu = new Array(3);
            zulu[0] = verify;
            zulu[1] = options;
            zulu[2] = golf;
            mike = function() {
                entity = {};
                zulu = _closure2_slot0;
                entity['lastScrollEventSourceId'] = zulu;
                zulu = _closure2_slot1;
                entity['restingQuestDockMode'] = zulu;
                mike = _closure2_slot2;
                entity['setRestingQuestDockMode'] = mike;
                return entity;
            };
            report = report.bind(oscar)(mike, zulu);
            zulu = _closure1_slot6;
            entity = _closure1_slot8;
            mike = entity.Provider;
            entity = {};
            entity['value'] = report;
            report = argFoo;
            report = report.children;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = oscar.bind(verify)(tango);
    oscar = 10;
    oscar = options[oscar];
    verify = golf.bind(entity)(oscar);
    oscar = verify.isAndroid;
    oscar = oscar.bind(verify)();
    var _closure1_slot9 = oscar;
    oscar = {};
    verify = 'function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}';
    oscar['code'] = verify;
    var _closure1_slot10 = oscar;
    oscar = {};
    verify = 'function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}';
    oscar['code'] = verify;
    var _closure1_slot11 = oscar;
    oscar = {};
    verify = "function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}";
    oscar['code'] = verify;
    var _closure1_slot12 = oscar;
    oscar = 11;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['QuestDockExternalCoordinationContext'] = report;
    zulu['QuestDockExternalCoordinationContextProvider'] = tango;
    mike = function(argFoo) { // Original name: useExternalScrollEventHandler
        entity = argFoo;
        romeo = entity.id;
        var _closure2_slot0 = romeo;
        tango = _closure1_slot2;
        report = tango.useContext;
        zulu = _closure1_slot8;
        zulu = report.bind(tango)(zulu);
        golf = zulu.setRestingQuestDockMode;
        var _closure2_slot1 = golf;
        verify = zulu.restingQuestDockMode;
        var _closure2_slot2 = verify;
        offset = zulu.lastScrollEventSourceId;
        var _closure2_slot3 = offset;
        report = tango.useRef;
        zulu = -1;
        zulu = report.bind(tango)(zulu);
        var _closure2_slot4 = zulu;
        oscar = tango.useCallback;
        report = new Array(2);
        report[0] = golf;
        report[1] = verify;
        zulu = function() {
            entity = global;
            report = entity.window;
            tango = report.clearTimeout;
            mike = _closure2_slot4;
            zulu = mike.current;
            zulu = tango.bind(report)(zulu);
            report = entity.window;
            tango = report.setTimeout;
            zulu = function() {
                _fun91373: for(var _fun91373_ip = 0; ; ) switch(_fun91373_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = zulu.get;
                    tango = entity.bind(zulu)();
                    zulu = _closure1_slot4;
                    zulu = zulu.EXPANDED;
                    if(!(tango !== zulu)) { _fun91373_ip = 54; continue _fun91373 }
 33:
                    zulu = _closure2_slot1;
                    entity = _closure1_slot4;
                    mike = entity.COLLAPSED;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 54:
                    entity = undefined;
                    return entity;
                }
            };
            entity = 500;
            entity = tango.bind(report)(zulu, entity);
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        options = oscar.bind(tango)(zulu, report);
        var _closure2_slot5 = options;
        oscar = tango.useCallback;
        report = function() {
            entity = global;
            zulu = entity.window;
            mike = zulu.clearTimeout;
            entity = _closure2_slot4;
            entity = entity.current;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        zulu = new Array(0);
        oscar = oscar.bind(tango)(report, zulu);
        var _closure2_slot6 = oscar;
        sizing = _closure1_slot0;
        output = _closure1_slot1;
        backup = 7;
        zulu = output[backup];
        kilo = undefined;
        foxtrot = sizing.bind(kilo)(zulu);
        yankee = foxtrot.useAnimatedReaction;
        report = function() { // Original name: D
            mike = _closure2_slot2;
            entity = mike.get;
            entity = entity.bind(mike)();
            return entity;
        };
        zulu = {};
        zulu['restingQuestDockMode'] = verify;
        report['__closure'] = zulu;
        zulu = 14040596710288.0;
        report['__workletHash'] = zulu;
        zulu = _closure1_slot10;
        report['__initData'] = zulu;
        zulu = function(argFoo, argBar) { // Original name: c
            _fun91376: for(var _fun91376_ip = 0; ; ) switch(_fun91376_ip) {
 0:
                mike = argFoo;
                entity = argBar;
                if(!(mike !== entity)) { _fun91376_ip = 56; continue _fun91376 }
 10:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 7;
                entity = mike[entity];
                mike = undefined;
                tango = zulu.bind(mike)(entity);
                zulu = tango.runOnJS;
                entity = _closure2_slot6;
                entity = zulu.bind(tango)(entity);
                entity = entity.bind(mike)();
 56:
                entity = undefined;
                return entity;
            }
        };
        result = {};
        echo = output[backup];
        echo = sizing.bind(kilo)(echo);
        echo = echo.runOnJS;
        result['runOnJS'] = echo;
        result['cancelReopenQuestDock'] = oscar;
        zulu['__closure'] = result;
        result = 1848909508809.0;
        zulu['__workletHash'] = result;
        result = _closure1_slot11;
        zulu['__initData'] = result;
        zulu = yankee.bind(foxtrot)(report, zulu);
        zulu = output[backup];
        yankee = sizing.bind(kilo)(zulu);
        report = yankee.useSharedValue;
        zulu = 0;
        yankee = report.bind(yankee)(zulu);
        var _closure2_slot7 = yankee;
        zulu = output[backup];
        foxtrot = sizing.bind(kilo)(zulu);
        report = foxtrot.useSharedValue;
        zulu = false;
        report = report.bind(foxtrot)(zulu);
        var _closure2_slot8 = report;
        result = tango.useEffect;
        foxtrot = new Array(1);
        foxtrot[0] = report;
        zulu = function() {
            mike = global;
            report = mike.setTimeout;
            tango = _closure1_slot7;
            zulu = undefined;
            mike = function() {
                zulu = _closure2_slot8;
                mike = zulu.set;
                entity = true;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = report.bind(zulu)(mike, tango);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = global;
                zulu = entity.clearTimeout;
                mike = _closure3_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            return entity;
        };
        zulu = result.bind(tango)(zulu, foxtrot);
        zulu = tango.useCallback;
        mike = function(argFoo, argBar, argBaz) { // Original name: T
            _fun91380: for(var _fun91380_ip = 0; ; ) switch(_fun91380_ip) {
 0:
                tango = argFoo;
                golf = argBar;
                report = argBaz;
                zulu = _closure2_slot8;
                mike = zulu.get;
                mike = mike.bind(zulu)();
                if(!mike) { _fun91380_ip = 591; continue _fun91380 }
 31:
                zulu = _closure2_slot2;
                mike = zulu.get;
                oscar = mike.bind(zulu)();
                zulu = _closure1_slot4;
                zulu = zulu.SOFT_DISMISSED;
                if(!(oscar !== zulu)) { _fun91380_ip = 591; continue _fun91380 }
 64:
                oscar = _closure2_slot2;
                zulu = oscar.get;
                oscar = zulu.bind(oscar)();
                zulu = _closure1_slot4;
                zulu = zulu.EXPANDED;
                if(!(oscar !== zulu)) { _fun91380_ip = 591; continue _fun91380 }
 94:
                options = _closure2_slot7;
                zulu = options.get;
                zulu = zulu.bind(options)();
                oscar = options.set;
                oscar = oscar.bind(options)(tango);
                if(!(zulu !== tango)) { _fun91380_ip = 591; continue _fun91380 }
 124:
                options = _closure2_slot3;
                oscar = options.get;
                options = oscar.bind(options)();
                oscar = _closure2_slot0;
                verify = 'guilds';
                if(!(verify !== oscar)) { _fun91380_ip = 167; continue _fun91380 }
 149:
                yankee = _closure2_slot3;
                offset = yankee.set;
                oscar = _closure2_slot0;
                oscar = offset.bind(yankee)(oscar);
 167:
                oscar = _closure2_slot0;
                if(!(verify !== oscar)) { _fun91380_ip = 186; continue _fun91380 }
 175:
                oscar = _closure2_slot0;
                if(!(oscar === options)) { _fun91380_ip = 591; continue _fun91380 }
 186:
                oscar = 0;
                if(!(tango < oscar)) { _fun91380_ip = 199; continue _fun91380 }
 192:
                if(!(!(zulu < oscar))) { _fun91380_ip = 551; continue _fun91380 }
 199:
                options = null;
                if(!(options != report)) { _fun91380_ip = 220; continue _fun91380 }
 205:
                if(!(options != golf)) { _fun91380_ip = 220; continue _fun91380 }
 209:
                report = tango + report;
                if(!(!(report >= golf))) { _fun91380_ip = 591; continue _fun91380 }
 220:
                if(!(tango <= oscar)) { _fun91380_ip = 265; continue _fun91380 }
 224:
                report = _closure1_slot9;
                if(report) { _fun91380_ip = 235; continue _fun91380 }
 231:
                if(!(zulu <= oscar)) { _fun91380_ip = 265; continue _fun91380 }
 235:
                golf = _closure2_slot2;
                report = golf.get;
                golf = report.bind(golf)();
                report = _closure1_slot4;
                report = report.CLOSED;
                if(!(golf !== report)) { _fun91380_ip = 476; continue _fun91380 }
 265:
                report = global;
                options = report.Math;
                golf = options.abs;
                report = zulu - tango;
                report = golf.bind(options)(report);
                if(!(tango > zulu)) { _fun91380_ip = 327; continue _fun91380 }
 292:
                if(!(tango > oscar)) { _fun91380_ip = 327; continue _fun91380 }
 296:
                if(!(zulu > oscar)) { _fun91380_ip = 327; continue _fun91380 }
 300:
                golf = _closure2_slot2;
                oscar = golf.get;
                golf = oscar.bind(golf)();
                oscar = _closure1_slot4;
                oscar = oscar.COLLAPSED;
                if(!(golf !== oscar)) { _fun91380_ip = 423; continue _fun91380 }
 327:
                zulu = tango < zulu;
                if(!zulu) { _fun91380_ip = 361; continue _fun91380 }
 334:
                oscar = _closure2_slot2;
                tango = oscar.get;
                oscar = tango.bind(oscar)();
                tango = _closure1_slot4;
                tango = tango.CLOSED;
                zulu = oscar === tango;
 361:
                if(!zulu) { _fun91380_ip = 372; continue _fun91380 }
 364:
                tango = _closure1_slot5;
                zulu = report >= tango;
 372:
                if(!zulu) { _fun91380_ip = 591; continue _fun91380 }
 378:
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 7;
                zulu = tango[zulu];
                tango = undefined;
                oscar = report.bind(tango)(zulu);
                report = oscar.runOnJS;
                zulu = _closure2_slot5;
                zulu = report.bind(oscar)(zulu);
                zulu = zulu.bind(tango)();
                _fun91380_ip = 591; continue _fun91380;
 423:
                tango = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 7;
                zulu = report[zulu];
                report = undefined;
                oscar = tango.bind(report)(zulu);
                tango = oscar.runOnJS;
                zulu = _closure2_slot1;
                tango = tango.bind(oscar)(zulu);
                zulu = _closure1_slot4;
                zulu = zulu.CLOSED;
                zulu = tango.bind(report)(zulu);
                _fun91380_ip = 591; continue _fun91380;
 476:
                zulu = _closure1_slot9;
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                tango = 7;
                report = report[tango];
                tango = undefined;
                oscar = oscar.bind(tango)(report);
                report = oscar.runOnJS;
                if(zulu) { _fun91380_ip = 536; continue _fun91380 }
 510:
                zulu = _closure2_slot1;
                golf = report.bind(oscar)(zulu);
                zulu = _closure1_slot4;
                zulu = zulu.COLLAPSED;
                zulu = golf.bind(tango)(zulu);
                _fun91380_ip = 591; continue _fun91380;
 536:
                zulu = _closure2_slot5;
                zulu = report.bind(oscar)(zulu);
                zulu = zulu.bind(tango)();
                _fun91380_ip = 591; continue _fun91380;
 551:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 7;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.runOnJS;
                entity = _closure2_slot6;
                entity = zulu.bind(tango)(entity);
                entity = entity.bind(mike)();
 591:
                entity = undefined;
                return entity;
            }
        };
        foxtrot = {};
        foxtrot['isScrollHandlerEnabled'] = report;
        foxtrot['restingQuestDockMode'] = verify;
        result = _closure1_slot4;
        foxtrot['QuestDockMode'] = result;
        foxtrot['lastContentOffsetY'] = yankee;
        foxtrot['lastScrollEventSourceId'] = offset;
        foxtrot['id'] = romeo;
        backup = output[backup];
        backup = sizing.bind(kilo)(backup);
        backup = backup.runOnJS;
        foxtrot['runOnJS'] = backup;
        foxtrot['cancelReopenQuestDock'] = oscar;
        backup = _closure1_slot9;
        foxtrot['IS_ANDROID'] = backup;
        foxtrot['scheduleReopenQuestDock'] = options;
        foxtrot['setRestingQuestDockMode'] = golf;
        backup = _closure1_slot5;
        foxtrot['QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD'] = backup;
        mike['__closure'] = foxtrot;
        foxtrot = 9824540806898.0;
        mike['__workletHash'] = foxtrot;
        entity = _closure1_slot12;
        mike['__initData'] = entity;
        entity = new Array(8);
        entity[0] = romeo;
        entity[1] = yankee;
        entity[2] = offset;
        entity[3] = verify;
        entity[4] = options;
        entity[5] = golf;
        entity[6] = oscar;
        entity[7] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useExternalScrollEventHandler'] = mike;
    return entity;
})();