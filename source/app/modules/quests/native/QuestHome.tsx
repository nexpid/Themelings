// app/modules/quests/native/QuestHome.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
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
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    romeon = 1;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot4 = option;
    option = tangon.ActivityIndicator;
    var _closure1_slot5 = option;
    yankee = tangon.StyleSheet;
    tangon = tangon.ScrollView;
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.QuestsExperimentLocations;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot9 = option;
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    offset['flex'] = romeon;
    romeon = 6;
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    offset['padding'] = romeon;
    tangon['container'] = offset;
    offset = {};
    kiloes = yankee.absoluteFillObject;
    sizing = offset;
    yankee = copyDataProperties(sizing, kiloes);
    romeon = 'center';
    yankee = 'justifyContent';
    offset[yankee] = romeon;
    yankee = 'alignItems';
    offset[yankee] = romeon;
    tangon['loadingContainer'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot11 = tangon;
    tangon = golfie.forwardRef;
    michal = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            verify = michal.containerStyle;
            romeon = michal.isNavigationComplete;
            entity = michal.scrollToQuestId;
            report = michal.ListEmptyComponent;
            backup = michal.ListFooterComponent;
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            michal = 9;
            michal = foxtra[michal];
            oscard = undefined;
            tangon = yankee.bind(oscard)(michal);
            zuuluu = tangon.useIsEligibleForQuests;
            michal = {};
            option = _closure1_slot8;
            option = option.QUEST_HOME_MOBILE;
            michal['location'] = option;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot11;
            option = michal.bind(oscard)();
            tangon = _closure1_slot1;
            michal = 10;
            michal = foxtra[michal];
            michal = tangon.bind(oscard)(michal);
            michal = michal.bind(oscard)();
            sizing = michal.bottom;
            tangon = 11;
            michal = foxtra[tangon];
            output = yankee.bind(oscard)(michal);
            kiloes = output.useFilteredQuests;
            michal = foxtra[tangon];
            michal = yankee.bind(oscard)(michal);
            michal = michal.QuestTabs;
            michal = michal.ALL;
            michal = kiloes.bind(output)(michal);
            kiloes = michal.quests;
            var _closure2_slot0 = kiloes;
            michal = michal.isFetchingCurrentQuests;
            tangon = foxtra[tangon];
            yankee = yankee.bind(oscard)(tangon);
            tangon = yankee.useExpiredQuestsMap;
            tangon = tangon.bind(yankee)();
            var _closure2_slot1 = tangon;
            echoed = _closure1_slot3;
            foxtra = echoed.useMemo;
            yankee = new Array(2);
            yankee[0] = kiloes;
            yankee[1] = tangon;
            tangon = function() {
                zuuluu = _closure2_slot0;
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = argFoo;
                        tangon = zuuluu.userStatus;
                        entity = null;
                        report = entity == tangon;
                        michal = undefined;
                        if(report) { _fun00004_ip = 26; continue _fun00003 }
 20:
                        michal = tangon.completedAt;
 26:
                        michal = entity != michal;
                        report = _closure2_slot1;
                        tangon = report.get;
                        zuuluu = zuuluu.id;
                        zuuluu = tangon.bind(report)(zuuluu);
                        entity = entity != zuuluu;
                        if(!entity) { _fun00004_ip = 62; continue _fun00003 }
 59:
                        entity = zuuluu;
 62:
                        entity = !entity;
                        if(entity) { _fun00004_ip = 71; continue _fun00003 }
 68:
                        entity = michal;
 71:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            kiloes = foxtra.bind(echoed)(tangon, yankee);
            tangon = {};
            tangon['scrollToQuestId'] = entity;
            entity = function(argFoo) {
                michal = argFoo;
                yankee = michal.scrollToQuestId;
                var _closure3_slot0 = yankee;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 7;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                oscard = report.bind(zuuluu)(tangon);
                report = oscard.useStateFromStores;
                zuuluu = _closure1_slot7;
                tangon = new Array(1);
                tangon[0] = zuuluu;
                zuuluu = function() {
                    entity = _closure1_slot7;
                    entity = entity.useReducedMotion;
                    return entity;
                };
                verify = report.bind(oscard)(tangon, zuuluu);
                var _closure3_slot1 = verify;
                option = _closure1_slot3;
                zuuluu = option.useRef;
                michal = null;
                oscard = zuuluu.bind(option)(michal);
                var _closure3_slot2 = oscard;
                zuuluu = option.useRef;
                michal = {};
                tangon = {};
                report = 0;
                tangon['scrollY'] = report;
                michal['parent'] = tangon;
                tangon = {};
                michal['children'] = tangon;
                tangon = zuuluu.bind(option)(michal);
                var _closure3_slot3 = tangon;
                report = option.useCallback;
                zuuluu = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        option = argFoo;
                        entity = global;
                        zuuluu = entity.Object;
                        michal = zuuluu.keys;
                        entity = _closure3_slot3;
                        entity = entity.current;
                        entity = entity.children;
                        oscard = michal.bind(zuuluu)(entity);
                        entity = oscard.length;
                        report = 0;
                        michal = report < entity;
                        entity = undefined;
                        tangon = null;
                        zuuluu = undefined;
                        if(!michal) { _fun00006_ip = 139; continue _fun00005 }
 58:
                        offset = oscard[report];
                        michal = tangon != option;
                        if(!michal) { _fun00006_ip = 73; continue _fun00005 }
 69:
                        michal = offset !== option;
 73:
                        if(michal) { _fun00006_ip = 101; continue _fun00005 }
 76:
                        verify = _closure3_slot3;
                        verify = verify.current;
                        verify = verify.children;
                        verify = verify[offset];
                        michal = tangon == verify;
                        zuuluu = verify;
 101:
                        if(michal) { _fun00006_ip = 114; continue _fun00005 }
 104:
                        verify = zuuluu.calculateVisibility;
                        michal = tangon == verify;
 114:
                        if(michal) { _fun00006_ip = 127; continue _fun00005 }
 117:
                        michal = zuuluu.calculateVisibility;
                        michal = michal.bind(zuuluu)();
 127:
                        report = report + 1;
                        michal = oscard.length;
                        if(report < michal) { _fun00006_ip = 58; continue _fun00005 }
 139:
                        return entity;
                    }
                };
                michal = new Array(0);
                offset = report.bind(option)(zuuluu, michal);
                var _closure3_slot4 = offset;
                report = option.useCallback;
                zuuluu = new Array(1);
                zuuluu[0] = offset;
                michal = function(argFoo) {
                    michal = _closure3_slot3;
                    michal = michal.current;
                    zuuluu = michal.parent;
                    michal = argFoo;
                    michal = michal.nativeEvent;
                    michal = michal.contentOffset;
                    michal = michal.y;
                    zuuluu['scrollY'] = michal;
                    michal = _closure3_slot4;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                report = report.bind(option)(michal, zuuluu);
                golfie = option.useCallback;
                zuuluu = new Array(1);
                zuuluu[0] = offset;
                michal = function(argFoo) {
                    michal = _closure3_slot3;
                    michal = michal.current;
                    zuuluu = michal.parent;
                    michal = argFoo;
                    michal = michal.nativeEvent;
                    michal = michal.layout;
                    zuuluu['layout'] = michal;
                    michal = _closure3_slot4;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                zuuluu = golfie.bind(option)(michal, zuuluu);
                golfie = option.useCallback;
                michal = new Array(3);
                michal[0] = yankee;
                michal[1] = offset;
                michal[2] = verify;
                entity = function(argFoo, argBar) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        report = argFoo;
                        zuuluu = argBar;
                        michal = _closure3_slot0;
                        if(!(zuuluu === michal)) { _fun00008_ip = 126; continue _fun00007 }
 17:
                        michal = _closure3_slot2;
                        oscard = michal.current;
                        michal = null;
                        if(!(michal != oscard)) { _fun00008_ip = 126; continue _fun00007 }
 32:
                        tangon = oscard.scrollTo;
                        michal = {};
                        golfie = report.nativeEvent;
                        golfie = golfie.layout;
                        option = golfie.y;
                        offset = _closure1_slot0;
                        verify = _closure1_slot2;
                        golfie = 8;
                        verify = verify[golfie];
                        golfie = undefined;
                        golfie = offset.bind(golfie)(verify);
                        verify = golfie.QUEST_CARD_SPACING;
                        golfie = 0.5;
                        golfie = golfie * verify;
                        golfie = option + golfie;
                        michal['y'] = golfie;
                        golfie = _closure3_slot1;
                        golfie = !golfie;
                        michal['animated'] = golfie;
                        michal = tangon.bind(oscard)(michal);
 126:
                        oscard = _closure3_slot3;
                        michal = oscard.current;
                        tangon = michal.children;
                        michal = {};
                        oscard = oscard.current;
                        oscard = oscard.children;
                        yankee = oscard[zuuluu];
                        romeon = michal;
                        oscard = copyDataProperties(romeon, yankee);
                        report = report.nativeEvent;
                        oscard = report.layout;
                        report = 'layout';
                        michal[report] = oscard;
                        tangon[zuuluu] = michal;
                        michal = _closure3_slot4;
                        entity = undefined;
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    }
                };
                michal = golfie.bind(option)(entity, michal);
                entity = {};
                entity['scrollViewRef'] = oscard;
                entity['onScroll'] = report;
                entity['visibilityRef'] = tangon;
                entity['onLayout'] = zuuluu;
                entity['onQuestCardLayout'] = michal;
                return entity;
            };
            entity = entity.bind(oscard)(tangon);
            result = entity.scrollViewRef;
            var _closure2_slot2 = result;
            output = entity.onScroll;
            foxtra = entity.onLayout;
            tangon = entity.onQuestCardLayout;
            var _closure2_slot3 = tangon;
            entity = entity.visibilityRef;
            var _closure2_slot4 = entity;
            yankee = echoed.useImperativeHandle;
            tangon = argBar;
            entity = function() {
                entity = {};
                michal = function(argFoo) { // Original name: scrollTo
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = _closure2_slot2;
                        zuuluu = entity.current;
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00010_ip = 32; continue _fun00009 }
 18:
                        michal = zuuluu.scrollTo;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
 32:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['scrollTo'] = michal;
                return entity;
            };
            entity = yankee.bind(echoed)(tangon, entity);
            yankee = null;
            entity = null;
            if(!zuuluu) { _fun00002_ip = 562; continue _fun00001 }
 330:
            if(!romeon) { _fun00002_ip = 498; continue _fun00001 }
 336:
            if(michal) { _fun00002_ip = 498; continue _fun00001 }
 342:
            zuuluu = kiloes.length;
            michal = 0;
            if(!(michal !== zuuluu)) { _fun00002_ip = 484; continue _fun00001 }
 356:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot6;
            michal = {};
            update = option.container;
            echoed = new Array(2);
            echoed[0] = update;
            echoed[1] = verify;
            michal['style'] = echoed;
            michal['ref'] = result;
            michal['onScroll'] = output;
            michal['onLayout'] = foxtra;
            foxtra = 16;
            michal['scrollEventThrottle'] = foxtra;
            foxtra = {};
            foxtra['paddingBottom'] = sizing;
            michal['contentContainerStyle'] = foxtra;
            if(!romeon) { _fun00002_ip = 441; continue _fun00001 }
 424:
            foxtra = kiloes.map;
            offset = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                michal = argBar;
                var _closure3_slot1 = michal;
                report = _closure1_slot9;
                option = _closure1_slot0;
                verify = _closure1_slot2;
                michal = 12;
                michal = verify[michal];
                tangon = undefined;
                michal = option.bind(tangon)(michal);
                zuuluu = michal.QuestContentImpressionTrackerNative;
                michal = {};
                michal['questOrQuests'] = entity;
                golfie = 13;
                offset = verify[golfie];
                offset = option.bind(tangon)(offset);
                offset = offset.QuestContent;
                offset = offset.QUEST_HOME_MOBILE;
                michal['questContent'] = offset;
                offset = false;
                michal['trackGuildAndChannelMetadata'] = offset;
                offset = _closure2_slot4;
                michal['visibilityRef'] = offset;
                golfie = verify[golfie];
                golfie = option.bind(tangon)(golfie);
                golfie = golfie.QuestContent;
                golfie = golfie.QUEST_HOME_MOBILE;
                michal['sourceQuestContent'] = golfie;
                oscard = function() { // Original name: children
                    report = _closure1_slot9;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 8;
                    entity = option[entity];
                    tangon = undefined;
                    entity = golfie.bind(tangon)(entity);
                    zuuluu = entity.QuestCard;
                    michal = {};
                    entity = _closure3_slot0;
                    michal['quest'] = entity;
                    oscard = _closure3_slot1;
                    michal['questContentPosition'] = oscard;
                    oscard = _closure2_slot3;
                    michal['onLayout'] = oscard;
                    oscard = 13;
                    oscard = option[oscard];
                    oscard = golfie.bind(tangon)(oscard);
                    oscard = oscard.QuestContent;
                    oscard = oscard.QUEST_HOME_MOBILE;
                    michal['sourceQuestContent'] = oscard;
                    entity = entity.id;
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                };
                michal['children'] = oscard;
                entity = entity.id;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            romeon = foxtra.bind(kiloes)(offset);
 441:
            offset = new Array(2);
            offset[0] = romeon;
            yankee = yankee != backup;
            if(!yankee) { _fun00002_ip = 468; continue _fun00001 }
 456:
            foxtra = _closure1_slot9;
            romeon = {};
            yankee = foxtra.bind(oscard)(backup, romeon);
 468:
            offset[1] = yankee;
            michal['children'] = offset;
            michal = tangon.bind(oscard)(zuuluu, michal);
            _fun00002_ip = 496; continue _fun00001;
 484:
            tangon = _closure1_slot9;
            zuuluu = {};
            michal = tangon.bind(oscard)(report, zuuluu);
 496:
            _fun00002_ip = 559; continue _fun00001;
 498:
            report = _closure1_slot9;
            tangon = _closure1_slot4;
            zuuluu = {};
            offset = option.loadingContainer;
            option = new Array(2);
            option[0] = offset;
            option[1] = verify;
            zuuluu['style'] = option;
            option = _closure1_slot5;
            golfie = {};
            verify = true;
            golfie['animating'] = verify;
            golfie = report.bind(oscard)(option, golfie);
            zuuluu['children'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 559:
            entity = michal;
 562:
            return entity;
        }
    };
    tangon = tangon.bind(golfie)(michal);
    michal = golfie.memo;
    michal = michal.bind(golfie)(tangon);
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestHome.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();