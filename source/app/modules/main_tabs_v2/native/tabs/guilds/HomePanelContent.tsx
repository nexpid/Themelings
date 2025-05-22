// app/modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: useHomePanelData
        oscard = _closure1_slot0;
        option = _closure1_slot2;
        tangon = 8;
        entity = option[tangon];
        report = undefined;
        offset = oscard.bind(report)(entity);
        verify = offset.useStateFromStoresArray;
        entity = _closure1_slot5;
        golfie = new Array(1);
        golfie[0] = entity;
        entity = function() {
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.values;
            tangon = _closure1_slot5;
            entity = tangon.allSummaries;
            entity = entity.bind(tangon)();
            michal = michal.bind(zuuluu)(entity);
            entity = michal.flat;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = verify.bind(offset)(golfie, entity);
        var _closure2_slot0 = entity;
        golfie = option[tangon];
        yankee = oscard.bind(report)(golfie);
        offset = yankee.useStateFromStoresArray;
        golfie = _closure1_slot6;
        verify = new Array(1);
        verify[0] = golfie;
        golfie = new Array(1);
        golfie[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.sortBy;
            michal = _closure2_slot0;
            entity = function(argFoo) {
                michal = argFoo;
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 9;
                entity = oscard[entity];
                report = undefined;
                option = tangon.bind(report)(entity);
                golfie = option.maxBy;
                tangon = michal.people;
                entity = function(argFoo) {
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        zuuluu = _closure1_slot6;
                        michal = zuuluu.getUserAffinity;
                        entity = argFoo;
                        zuuluu = michal.bind(zuuluu)(entity);
                        entity = null;
                        tangon = entity == zuuluu;
                        michal = undefined;
                        if(tangon) { _fun00002_ip = 38; continue _fun00001 }
 32:
                        michal = zuuluu.communicationProbability;
 38:
                        zuuluu = entity != michal;
                        entity = 0;
                        if(!zuuluu) { _fun00002_ip = 50; continue _fun00001 }
 47:
                        entity = michal;
 50:
                        return entity;
                    }
                };
                tangon = golfie.bind(option)(tangon, entity);
                entity = new Array(2);
                entity[0] = tangon;
                tangon = _closure1_slot1;
                zuuluu = 10;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.extractTimestamp;
                michal = michal.endId;
                michal = zuuluu.bind(tangon)(michal);
                entity[1] = michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        golfie = offset.bind(yankee)(verify, entity, golfie);
        var _closure2_slot1 = golfie;
        entity = {};
        tangon = option[tangon];
        oscard = oscard.bind(report)(tangon);
        report = oscard.useStateFromStoresObject;
        zuuluu = _closure1_slot7;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = new Array(1);
        zuuluu[0] = golfie;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.keyBy;
            michal = _closure2_slot1;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.getChannel;
                    entity = argFoo;
                    entity = entity.channelId;
                    zuuluu = michal.bind(zuuluu)(entity);
                    entity = null;
                    tangon = entity == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00004_ip = 41; continue _fun00003 }
 36:
                    michal = zuuluu.guild_id;
 41:
                    zuuluu = entity != michal;
                    entity = -1;
                    if(!zuuluu) { _fun00004_ip = 57; continue _fun00003 }
 54:
                    entity = michal;
 57:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        michal = report.bind(oscard)(tangon, michal, zuuluu);
        entity['topicsByGuild'] = michal;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: HomePanelContextProvider
        entity = argFoo;
        report = entity.children;
        tangon = _closure1_slot8;
        michal = _closure1_slot10;
        zuuluu = michal.Provider;
        michal = {};
        oscard = _closure1_slot12;
        entity = undefined;
        oscard = oscard.bind(entity)();
        michal['value'] = oscard;
        michal['children'] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: MockHomePanelContextProvider
        entity = argFoo;
        entity = entity.children;
        oscard = _closure1_slot3;
        report = oscard.useMemo;
        tangon = function() {
            entity = {};
            michal = {};
            entity['topicsByGuild'] = michal;
            return entity;
        };
        zuuluu = new Array(0);
        report = report.bind(oscard)(tangon, zuuluu);
        tangon = _closure1_slot8;
        michal = _closure1_slot10;
        zuuluu = michal.Provider;
        michal = {};
        michal['value'] = report;
        michal['children'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = golfie[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(option);
    var _closure1_slot3 = option;
    romeon = 1;
    tangon = golfie[romeon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    yankee = tangon.DM_WIDTH;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    verify = oscard.bind(entity)(tangon);
    report = verify.createStyles;
    tangon = {};
    offset = {};
    offset['flex'] = romeon;
    tangon['container'] = offset;
    offset = {};
    offset['flex'] = romeon;
    tangon['guildsListContainerGestured'] = offset;
    offset = {};
    offset['flex'] = romeon;
    offset['width'] = yankee;
    tangon['guildLisetContainerDefault'] = offset;
    tangon = report.bind(verify)(tangon);
    var _closure1_slot9 = tangon;
    report = option.createContext;
    tangon = {};
    verify = {};
    tangon['topicsByGuild'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    report = {};
    verify = "function HomePanelContentTsx1(){const{withSpring,gestureState,panelX,drawerState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS,serverGestureEnabled,safeArea,PEEK_SIZE}=this.__closure;return{transform:[{translateX:withSpring(gestureState.get().active&&gestureState.get().requiresPop?panelX.get():drawerState.get()==='open'?Math.max(0,Math.min(8,panelX.get())):0,gestureState.get().active&&gestureState.get().requiresPop?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always')}],marginRight:serverGestureEnabled?safeArea.get().right+PEEK_SIZE+8:0};}";
    report['code'] = verify;
    var _closure1_slot11 = report;
    report = option.memo;
    michal = function() {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            yankee = _closure1_slot1;
            foxtra = _closure1_slot2;
            michal = 11;
            michal = foxtra[michal];
            tangon = undefined;
            report = yankee.bind(tangon)(michal);
            michal = 'nav_experiment_server_drawer_enabled';
            michal = report.bind(tangon)(michal);
            var _closure2_slot0 = michal;
            golfie = _closure1_slot3;
            oscard = golfie.useContext;
            verify = _closure1_slot0;
            option = 12;
            report = foxtra[option];
            report = verify.bind(tangon)(report);
            report = report.HomeDrawerStateContext;
            report = oscard.bind(golfie)(report);
            backup = report.drawerState;
            var _closure2_slot1 = backup;
            romeon = report.safeArea;
            var _closure2_slot2 = romeon;
            output = report.gestureState;
            var _closure2_slot3 = output;
            sizing = report.panelX;
            var _closure2_slot4 = sizing;
            report = _closure1_slot9;
            kiloes = report.bind(tangon)();
            offset = 13;
            report = foxtra[offset];
            oscard = verify.bind(tangon)(report);
            report = oscard.useAnimatedStyle;
            zuuluu = function() { // Original name: o
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = {};
                    report = {};
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 14;
                    michal = oscard[michal];
                    oscard = undefined;
                    offset = tangon.bind(oscard)(michal);
                    verify = offset.withSpring;
                    golfie = _closure2_slot3;
                    michal = golfie.get;
                    michal = michal.bind(golfie)();
                    michal = michal.active;
                    if(!michal) { _fun00008_ip = 81; continue _fun00007 }
 59:
                    golfie = _closure2_slot3;
                    michal = golfie.get;
                    michal = michal.bind(golfie)();
                    michal = michal.requiresPop;
                    if(michal) { _fun00008_ip = 160; continue _fun00007 }
 81:
                    golfie = _closure2_slot1;
                    michal = golfie.get;
                    golfie = michal.bind(golfie)();
                    romeon = 0;
                    michal = 'open';
                    option = 0;
                    if(!(michal === golfie)) { _fun00008_ip = 158; continue _fun00007 }
 106:
                    michal = global;
                    yankee = michal.Math;
                    golfie = yankee.max;
                    kiloes = michal.Math;
                    backup = kiloes.min;
                    foxtra = _closure2_slot4;
                    michal = foxtra.get;
                    foxtra = michal.bind(foxtra)();
                    michal = 8;
                    michal = backup.bind(kiloes)(michal, foxtra);
                    option = golfie.bind(yankee)(romeon, michal);
 158:
                    _fun00008_ip = 173; continue _fun00007;
 160:
                    golfie = _closure2_slot4;
                    michal = golfie.get;
                    option = michal.bind(golfie)();
 173:
                    golfie = _closure2_slot3;
                    michal = golfie.get;
                    michal = michal.bind(golfie)();
                    michal = michal.active;
                    if(!michal) { _fun00008_ip = 217; continue _fun00007 }
 195:
                    golfie = _closure2_slot3;
                    michal = golfie.get;
                    michal = michal.bind(golfie)();
                    michal = michal.requiresPop;
                    if(michal) { _fun00008_ip = 245; continue _fun00007 }
 217:
                    golfie = _closure1_slot0;
                    yankee = _closure1_slot2;
                    michal = 12;
                    michal = yankee[michal];
                    michal = golfie.bind(oscard)(michal);
                    golfie = michal.HOME_DRAWER_FLING_PHYSICS;
                    _fun00008_ip = 271; continue _fun00007;
 245:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    michal = 12;
                    michal = romeon[michal];
                    michal = yankee.bind(oscard)(michal);
                    golfie = michal.HOME_GESTURE_DRAG_PHYSICS;
 271:
                    michal = 'animate-always';
                    michal = verify.bind(offset)(option, golfie, michal);
                    report['translateX'] = michal;
                    michal = new Array(1);
                    michal[0] = report;
                    entity['transform'] = michal;
                    report = _closure2_slot0;
                    michal = 0;
                    if(!report) { _fun00008_ip = 365; continue _fun00007 }
 310:
                    report = _closure2_slot2;
                    tangon = report.get;
                    tangon = tangon.bind(report)();
                    tangon = tangon.right;
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 12;
                    zuuluu = golfie[zuuluu];
                    zuuluu = report.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.PEEK_SIZE;
                    tangon = tangon + zuuluu;
                    zuuluu = 8;
                    michal = tangon + zuuluu;
 365:
                    entity['marginRight'] = michal;
                    return entity;
                }
            };
            golfie = {};
            result = 14;
            result = foxtra[result];
            result = verify.bind(tangon)(result);
            result = result.withSpring;
            golfie['withSpring'] = result;
            golfie['gestureState'] = output;
            golfie['panelX'] = sizing;
            golfie['drawerState'] = backup;
            backup = foxtra[option];
            backup = verify.bind(tangon)(backup);
            backup = backup.HOME_GESTURE_DRAG_PHYSICS;
            golfie['HOME_GESTURE_DRAG_PHYSICS'] = backup;
            backup = foxtra[option];
            backup = verify.bind(tangon)(backup);
            backup = backup.HOME_DRAWER_FLING_PHYSICS;
            golfie['HOME_DRAWER_FLING_PHYSICS'] = backup;
            golfie['serverGestureEnabled'] = michal;
            golfie['safeArea'] = romeon;
            option = foxtra[option];
            option = verify.bind(tangon)(option);
            option = option.PEEK_SIZE;
            golfie['PEEK_SIZE'] = option;
            zuuluu['__closure'] = golfie;
            golfie = 10692769092476.0;
            zuuluu['__workletHash'] = golfie;
            golfie = _closure1_slot11;
            zuuluu['__initData'] = golfie;
            backup = report.bind(oscard)(zuuluu);
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot10;
            report = zuuluu.Provider;
            zuuluu = {};
            golfie = _closure1_slot12;
            golfie = golfie.bind(tangon)();
            zuuluu['value'] = golfie;
            verify = _closure1_slot8;
            option = _closure1_slot4;
            golfie = {};
            romeon = kiloes.container;
            golfie['style'] = romeon;
            romeon = _closure1_slot8;
            offset = foxtra[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.View;
            offset = {};
            foxtra = new Array(2);
            foxtra[0] = backup;
            if(michal) { _fun00006_ip = 385; continue _fun00005 }
 377:
            backup = kiloes.guildLisetContainerDefault;
            _fun00006_ip = 391; continue _fun00005;
 385:
            backup = kiloes.guildsListContainerGestured;
 391:
            foxtra[1] = backup;
            offset['style'] = foxtra;
            kiloes = _closure1_slot8;
            backup = _closure1_slot1;
            sizing = _closure1_slot2;
            foxtra = 15;
            foxtra = sizing[foxtra];
            backup = backup.bind(tangon)(foxtra);
            foxtra = {};
            foxtra = kiloes.bind(tangon)(backup, foxtra);
            offset['children'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            zuuluu['children'] = golfie;
            report = oscard.bind(tangon)(report, zuuluu);
            zuuluu = _closure1_slot8;
            if(michal) { _fun00006_ip = 474; continue _fun00005 }
 468:
            michal = _closure1_slot14;
            _fun00006_ip = 478; continue _fun00005;
 474:
            michal = _closure1_slot13;
 478:
            entity = {};
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = report.bind(option)(michal);
    report = 16;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['HomePanelContext'] = tangon;
    zuuluu['HomePanelContent'] = michal;
    return entity;
})();