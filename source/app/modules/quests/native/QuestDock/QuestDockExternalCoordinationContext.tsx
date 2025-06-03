// app/modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    report = option[entity];
    tangon = argCor;
    entity = undefined;
    verify = tangon.bind(entity)(report);
    var _closure1_slot2 = verify;
    report = 1;
    tangon = option[report];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    offset = tangon.QuestDockMode;
    var _closure1_slot4 = offset;
    tangon = 3;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.Millis;
    tangon = tangon.SECOND;
    tangon = report * tangon;
    var _closure1_slot7 = tangon;
    report = verify.createContext;
    tangon = {};
    oscard = 6;
    yankee = option[oscard];
    romeon = golfie.bind(entity)(yankee);
    yankee = romeon.createFakeSharedValue;
    offset = offset.COLLAPSED;
    offset = yankee.bind(romeon)(offset);
    tangon['restingQuestDockMode'] = offset;
    offset = function() { // Original name: setRestingQuestDockMode
        entity = undefined;
        return entity;
    };
    tangon['setRestingQuestDockMode'] = offset;
    oscard = option[oscard];
    yankee = golfie.bind(entity)(oscard);
    offset = yankee.createFakeSharedValue;
    oscard = null;
    oscard = offset.bind(yankee)(oscard);
    tangon['lastScrollEventSourceId'] = oscard;
    report = report.bind(verify)(tangon);
    var _closure1_slot8 = report;
    oscard = verify.memo;
    tangon = function(argFoo) { // Original name: QuestDockExternalCoordinationContextProviderInner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 7;
            report = option[zuuluu];
            tangon = undefined;
            verify = golfie.bind(tangon)(report);
            oscard = verify.useSharedValue;
            report = null;
            verify = oscard.bind(verify)(report);
            var _closure2_slot0 = verify;
            zuuluu = option[zuuluu];
            oscard = golfie.bind(tangon)(zuuluu);
            report = oscard.useSharedValue;
            zuuluu = 8;
            zuuluu = option[zuuluu];
            option = golfie.bind(tangon)(zuuluu);
            golfie = option.isSoftDismissed;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.questDockSoftDismissedAt;
            zuuluu = golfie.bind(option)(zuuluu);
            golfie = _closure1_slot4;
            if(zuuluu) { _fun00002_ip = 105; continue _fun00001 }
 97:
            zuuluu = golfie.COLLAPSED;
            _fun00002_ip = 111; continue _fun00001;
 105:
            zuuluu = golfie.SOFT_DISMISSED;
 111:
            option = report.bind(oscard)(zuuluu);
            var _closure2_slot1 = option;
            oscard = _closure1_slot2;
            golfie = oscard.useCallback;
            report = new Array(1);
            report[0] = option;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot1;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    if(!(michal !== zuuluu)) { _fun00004_ip = 37; continue _fun00003 }
 23:
                    michal = _closure2_slot1;
                    entity = michal.set;
                    entity = entity.bind(michal)(zuuluu);
 37:
                    michal = _closure1_slot4;
                    michal = michal.RESET_TO_PREVIOUS;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 87; continue _fun00003 }
 54:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 9;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    entity = michal.updatePrevRestingQuestDockMode;
                    entity = entity.bind(michal)(zuuluu);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = golfie.bind(oscard)(zuuluu, report);
            var _closure2_slot2 = golfie;
            report = oscard.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = verify;
            zuuluu[1] = option;
            zuuluu[2] = golfie;
            michal = function() {
                entity = {};
                zuuluu = _closure2_slot0;
                entity['lastScrollEventSourceId'] = zuuluu;
                zuuluu = _closure2_slot1;
                entity['restingQuestDockMode'] = zuuluu;
                michal = _closure2_slot2;
                entity['setRestingQuestDockMode'] = michal;
                return entity;
            };
            report = report.bind(oscard)(michal, zuuluu);
            zuuluu = _closure1_slot6;
            entity = _closure1_slot8;
            michal = entity.Provider;
            entity = {};
            entity['value'] = report;
            report = argFoo;
            report = report.children;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = oscard.bind(verify)(tangon);
    oscard = 10;
    oscard = option[oscard];
    verify = golfie.bind(entity)(oscard);
    oscard = verify.isAndroid;
    oscard = oscard.bind(verify)();
    var _closure1_slot9 = oscard;
    oscard = {};
    verify = 'function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}';
    oscard['code'] = verify;
    var _closure1_slot10 = oscard;
    oscard = {};
    verify = 'function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}';
    oscard['code'] = verify;
    var _closure1_slot11 = oscard;
    oscard = {};
    verify = "function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}";
    oscard['code'] = verify;
    var _closure1_slot12 = oscard;
    oscard = 11;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['QuestDockExternalCoordinationContext'] = report;
    zuuluu['QuestDockExternalCoordinationContextProvider'] = tangon;
    michal = function(argFoo) { // Original name: useExternalScrollEventHandler
        entity = argFoo;
        romeon = entity.id;
        var _closure2_slot0 = romeon;
        tangon = _closure1_slot2;
        report = tangon.useContext;
        zuuluu = _closure1_slot8;
        zuuluu = report.bind(tangon)(zuuluu);
        golfie = zuuluu.setRestingQuestDockMode;
        var _closure2_slot1 = golfie;
        verify = zuuluu.restingQuestDockMode;
        var _closure2_slot2 = verify;
        offset = zuuluu.lastScrollEventSourceId;
        var _closure2_slot3 = offset;
        report = tangon.useRef;
        zuuluu = -1;
        zuuluu = report.bind(tangon)(zuuluu);
        var _closure2_slot4 = zuuluu;
        oscard = tangon.useCallback;
        report = new Array(2);
        report[0] = golfie;
        report[1] = verify;
        zuuluu = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot4;
                zuuluu = michal.current;
                michal = -1;
                if(!(michal !== zuuluu)) { _fun00006_ip = 50; continue _fun00005 }
 22:
                michal = global;
                tangon = michal.window;
                zuuluu = tangon.clearTimeout;
                michal = _closure2_slot4;
                michal = michal.current;
                michal = zuuluu.bind(tangon)(michal);
 50:
                michal = _closure2_slot4;
                entity = global;
                report = entity.window;
                tangon = report.setTimeout;
                zuuluu = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = _closure2_slot2;
                        entity = zuuluu.get;
                        tangon = entity.bind(zuuluu)();
                        zuuluu = _closure1_slot4;
                        zuuluu = zuuluu.EXPANDED;
                        if(!(tangon !== zuuluu)) { _fun00008_ip = 54; continue _fun00007 }
 33:
                        zuuluu = _closure2_slot1;
                        entity = _closure1_slot4;
                        michal = entity.COLLAPSED;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 54:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = 500;
                entity = tangon.bind(report)(zuuluu, entity);
                michal['current'] = entity;
                entity = undefined;
                return entity;
            }
        };
        option = oscard.bind(tangon)(zuuluu, report);
        var _closure2_slot5 = option;
        oscard = tangon.useCallback;
        report = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = _closure2_slot4;
                zuuluu = michal.current;
                michal = -1;
                if(!(michal !== zuuluu)) { _fun00010_ip = 50; continue _fun00009 }
 22:
                michal = global;
                zuuluu = michal.window;
                michal = zuuluu.clearTimeout;
                entity = _closure2_slot4;
                entity = entity.current;
                entity = michal.bind(zuuluu)(entity);
 50:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = new Array(0);
        oscard = oscard.bind(tangon)(report, zuuluu);
        var _closure2_slot6 = oscard;
        sizing = _closure1_slot0;
        output = _closure1_slot1;
        backup = 7;
        zuuluu = output[backup];
        kiloes = undefined;
        foxtra = sizing.bind(kiloes)(zuuluu);
        yankee = foxtra.useAnimatedReaction;
        report = function() { // Original name: D
            michal = _closure2_slot2;
            entity = michal.get;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu = {};
        zuuluu['restingQuestDockMode'] = verify;
        report['__closure'] = zuuluu;
        zuuluu = 14040596710288.0;
        report['__workletHash'] = zuuluu;
        zuuluu = _closure1_slot10;
        report['__initData'] = zuuluu;
        zuuluu = function(argFoo, argBar) { // Original name: c
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                entity = argBar;
                if(!(michal !== entity)) { _fun00012_ip = 56; continue _fun00011 }
 10:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 7;
                entity = michal[entity];
                michal = undefined;
                tangon = zuuluu.bind(michal)(entity);
                zuuluu = tangon.runOnJS;
                entity = _closure2_slot6;
                entity = zuuluu.bind(tangon)(entity);
                entity = entity.bind(michal)();
 56:
                entity = undefined;
                return entity;
            }
        };
        result = {};
        echoed = output[backup];
        echoed = sizing.bind(kiloes)(echoed);
        echoed = echoed.runOnJS;
        result['runOnJS'] = echoed;
        result['cancelReopenQuestDock'] = oscard;
        zuuluu['__closure'] = result;
        result = 1848909508809.0;
        zuuluu['__workletHash'] = result;
        result = _closure1_slot11;
        zuuluu['__initData'] = result;
        zuuluu = yankee.bind(foxtra)(report, zuuluu);
        zuuluu = output[backup];
        yankee = sizing.bind(kiloes)(zuuluu);
        report = yankee.useSharedValue;
        zuuluu = 0;
        yankee = report.bind(yankee)(zuuluu);
        var _closure2_slot7 = yankee;
        zuuluu = output[backup];
        foxtra = sizing.bind(kiloes)(zuuluu);
        report = foxtra.useSharedValue;
        zuuluu = false;
        report = report.bind(foxtra)(zuuluu);
        var _closure2_slot8 = report;
        result = tangon.useEffect;
        foxtra = new Array(1);
        foxtra[0] = report;
        zuuluu = function() {
            michal = global;
            report = michal.setTimeout;
            tangon = _closure1_slot7;
            zuuluu = undefined;
            michal = function() {
                zuuluu = _closure2_slot8;
                michal = zuuluu.set;
                entity = true;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = report.bind(zuuluu)(michal, tangon);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = global;
                zuuluu = entity.clearTimeout;
                michal = _closure3_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            return entity;
        };
        zuuluu = result.bind(tangon)(zuuluu, foxtra);
        zuuluu = tangon.useCallback;
        michal = function(argFoo, argBar, argBaz) { // Original name: T
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                golfie = argBar;
                report = argBaz;
                zuuluu = _closure2_slot8;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                if(!michal) { _fun00014_ip = 591; continue _fun00013 }
 31:
                zuuluu = _closure2_slot2;
                michal = zuuluu.get;
                oscard = michal.bind(zuuluu)();
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.SOFT_DISMISSED;
                if(!(oscard !== zuuluu)) { _fun00014_ip = 591; continue _fun00013 }
 64:
                oscard = _closure2_slot2;
                zuuluu = oscard.get;
                oscard = zuuluu.bind(oscard)();
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.EXPANDED;
                if(!(oscard !== zuuluu)) { _fun00014_ip = 591; continue _fun00013 }
 94:
                option = _closure2_slot7;
                zuuluu = option.get;
                zuuluu = zuuluu.bind(option)();
                oscard = option.set;
                oscard = oscard.bind(option)(tangon);
                if(!(zuuluu !== tangon)) { _fun00014_ip = 591; continue _fun00013 }
 124:
                option = _closure2_slot3;
                oscard = option.get;
                option = oscard.bind(option)();
                oscard = _closure2_slot0;
                verify = 'guilds';
                if(!(verify !== oscard)) { _fun00014_ip = 167; continue _fun00013 }
 149:
                yankee = _closure2_slot3;
                offset = yankee.set;
                oscard = _closure2_slot0;
                oscard = offset.bind(yankee)(oscard);
 167:
                oscard = _closure2_slot0;
                if(!(verify !== oscard)) { _fun00014_ip = 186; continue _fun00013 }
 175:
                oscard = _closure2_slot0;
                if(!(oscard === option)) { _fun00014_ip = 591; continue _fun00013 }
 186:
                oscard = 0;
                if(!(tangon < oscard)) { _fun00014_ip = 199; continue _fun00013 }
 192:
                if(!(!(zuuluu < oscard))) { _fun00014_ip = 551; continue _fun00013 }
 199:
                option = null;
                if(!(option != report)) { _fun00014_ip = 220; continue _fun00013 }
 205:
                if(!(option != golfie)) { _fun00014_ip = 220; continue _fun00013 }
 209:
                report = tangon + report;
                if(!(!(report >= golfie))) { _fun00014_ip = 591; continue _fun00013 }
 220:
                if(!(tangon <= oscard)) { _fun00014_ip = 265; continue _fun00013 }
 224:
                report = _closure1_slot9;
                if(report) { _fun00014_ip = 235; continue _fun00013 }
 231:
                if(!(zuuluu <= oscard)) { _fun00014_ip = 265; continue _fun00013 }
 235:
                golfie = _closure2_slot2;
                report = golfie.get;
                golfie = report.bind(golfie)();
                report = _closure1_slot4;
                report = report.CLOSED;
                if(!(golfie !== report)) { _fun00014_ip = 476; continue _fun00013 }
 265:
                report = global;
                option = report.Math;
                golfie = option.abs;
                report = zuuluu - tangon;
                report = golfie.bind(option)(report);
                if(!(tangon > zuuluu)) { _fun00014_ip = 327; continue _fun00013 }
 292:
                if(!(tangon > oscard)) { _fun00014_ip = 327; continue _fun00013 }
 296:
                if(!(zuuluu > oscard)) { _fun00014_ip = 327; continue _fun00013 }
 300:
                golfie = _closure2_slot2;
                oscard = golfie.get;
                golfie = oscard.bind(golfie)();
                oscard = _closure1_slot4;
                oscard = oscard.COLLAPSED;
                if(!(golfie !== oscard)) { _fun00014_ip = 423; continue _fun00013 }
 327:
                zuuluu = tangon < zuuluu;
                if(!zuuluu) { _fun00014_ip = 361; continue _fun00013 }
 334:
                oscard = _closure2_slot2;
                tangon = oscard.get;
                oscard = tangon.bind(oscard)();
                tangon = _closure1_slot4;
                tangon = tangon.CLOSED;
                zuuluu = oscard === tangon;
 361:
                if(!zuuluu) { _fun00014_ip = 372; continue _fun00013 }
 364:
                tangon = _closure1_slot5;
                zuuluu = report >= tangon;
 372:
                if(!zuuluu) { _fun00014_ip = 591; continue _fun00013 }
 378:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 7;
                zuuluu = tangon[zuuluu];
                tangon = undefined;
                oscard = report.bind(tangon)(zuuluu);
                report = oscard.runOnJS;
                zuuluu = _closure2_slot5;
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = zuuluu.bind(tangon)();
                _fun00014_ip = 591; continue _fun00013;
 423:
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 7;
                zuuluu = report[zuuluu];
                report = undefined;
                oscard = tangon.bind(report)(zuuluu);
                tangon = oscard.runOnJS;
                zuuluu = _closure2_slot1;
                tangon = tangon.bind(oscard)(zuuluu);
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.CLOSED;
                zuuluu = tangon.bind(report)(zuuluu);
                _fun00014_ip = 591; continue _fun00013;
 476:
                zuuluu = _closure1_slot9;
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                tangon = 7;
                report = report[tangon];
                tangon = undefined;
                oscard = oscard.bind(tangon)(report);
                report = oscard.runOnJS;
                if(zuuluu) { _fun00014_ip = 536; continue _fun00013 }
 510:
                zuuluu = _closure2_slot1;
                golfie = report.bind(oscard)(zuuluu);
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.COLLAPSED;
                zuuluu = golfie.bind(tangon)(zuuluu);
                _fun00014_ip = 591; continue _fun00013;
 536:
                zuuluu = _closure2_slot5;
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = zuuluu.bind(tangon)();
                _fun00014_ip = 591; continue _fun00013;
 551:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 7;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.runOnJS;
                entity = _closure2_slot6;
                entity = zuuluu.bind(tangon)(entity);
                entity = entity.bind(michal)();
 591:
                entity = undefined;
                return entity;
            }
        };
        foxtra = {};
        foxtra['isScrollHandlerEnabled'] = report;
        foxtra['restingQuestDockMode'] = verify;
        result = _closure1_slot4;
        foxtra['QuestDockMode'] = result;
        foxtra['lastContentOffsetY'] = yankee;
        foxtra['lastScrollEventSourceId'] = offset;
        foxtra['id'] = romeon;
        backup = output[backup];
        backup = sizing.bind(kiloes)(backup);
        backup = backup.runOnJS;
        foxtra['runOnJS'] = backup;
        foxtra['cancelReopenQuestDock'] = oscard;
        backup = _closure1_slot9;
        foxtra['IS_ANDROID'] = backup;
        foxtra['scheduleReopenQuestDock'] = option;
        foxtra['setRestingQuestDockMode'] = golfie;
        backup = _closure1_slot5;
        foxtra['QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD'] = backup;
        michal['__closure'] = foxtra;
        foxtra = 9824540806898.0;
        michal['__workletHash'] = foxtra;
        entity = _closure1_slot12;
        michal['__initData'] = entity;
        entity = new Array(8);
        entity[0] = romeon;
        entity[1] = yankee;
        entity[2] = offset;
        entity[3] = verify;
        entity[4] = option;
        entity[5] = golfie;
        entity[6] = oscard;
        entity[7] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useExternalScrollEventHandler'] = michal;
    return entity;
})();