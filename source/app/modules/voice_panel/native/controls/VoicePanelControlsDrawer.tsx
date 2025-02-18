// app/modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: renderControls
        tangon = _closure1_slot7;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 8;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        report = argFoo;
        entity['isVisible'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: renderChat
        tangon = _closure1_slot7;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 9;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        report = argFoo;
        entity['shown'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = romeon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    report = golfie[michal];
    michal = argCor;
    option = michal.bind(entity)(report);
    var _closure1_slot4 = option;
    michal = 2;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.MODE_CHANGE_PHYSICS;
    var _closure1_slot5 = report;
    michal = michal.VoicePanelModes;
    var _closure1_slot6 = michal;
    michal = 3;
    report = golfie[michal];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot7 = report;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.jsxs;
    var _closure1_slot8 = michal;
    michal = 4;
    michal = golfie[michal];
    verify = oscard.bind(entity)(michal);
    report = verify.createStyles;
    michal = {};
    offset = {'flex': 1, 'zIndex': 1};
    yankee = 5;
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_BASE_SECONDARY;
    offset['backgroundColor'] = yankee;
    michal['drawer'] = offset;
    michal = report.bind(verify)(michal);
    var _closure1_slot9 = michal;
    report = option.memo;
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.shown;
            var _closure2_slot0 = zuuluu;
            offset = michal.renderContent;
            var _closure2_slot1 = offset;
            report = undefined;
            var _closure2_slot3 = report;
            golfie = _closure1_slot4;
            oscard = golfie.useState;
            tangon = !zuuluu;
            golfie = oscard.bind(golfie)(tangon);
            oscard = _closure1_slot3;
            tangon = 2;
            oscard = oscard.bind(report)(golfie, tangon);
            tangon = 0;
            golfie = oscard[tangon];
            tangon = 1;
            oscard = oscard[tangon];
            var _closure2_slot2 = oscard;
            tangon = zuuluu;
            if(!tangon) { _fun00002_ip = 90; continue _fun00001 }
 87:
            tangon = golfie;
 90:
            if(!tangon) { _fun00002_ip = 101; continue _fun00001 }
 93:
            tangon = !zuuluu;
            tangon = oscard.bind(report)(tangon);
 101:
            verify = _closure1_slot4;
            tangon = verify.useRef;
            tangon = tangon.bind(verify)(zuuluu);
            _closure2_slot3 = tangon;
            option = verify.useEffect;
            oscard = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot3;
                    entity = michal.current;
                    if(entity) { _fun00004_ip = 19; continue _fun00003 }
 15:
                    entity = _closure2_slot0;
 19:
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            oscard = option.bind(verify)(oscard);
            yankee = verify.useEffect;
            option = new Array(1);
            option[0] = zuuluu;
            oscard = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = undefined;
                    if(zuuluu) { _fun00006_ip = 54; continue _fun00005 }
 14:
                    zuuluu = global;
                    report = zuuluu.setTimeout;
                    tangon = function() {
                        zuuluu = _closure2_slot2;
                        michal = undefined;
                        entity = true;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    zuuluu = 1000;
                    zuuluu = report.bind(entity)(tangon, zuuluu);
                    var _closure3_slot0 = zuuluu;
                    michal = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        michal = _closure3_slot0;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return michal;
 54:
                    return entity;
                }
            };
            oscard = yankee.bind(verify)(oscard, option);
            option = verify.useMemo;
            oscard = new Array(2);
            oscard[0] = offset;
            oscard[1] = zuuluu;
            entity = function() {
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            oscard = option.bind(verify)(entity, oscard);
            option = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 6;
            entity = verify[entity];
            entity = option.bind(report)(entity);
            entity = entity.bind(report)(tangon);
            if(entity) { _fun00002_ip = 225; continue _fun00001 }
 220:
            entity = null;
            if(!zuuluu) { _fun00002_ip = 272; continue _fun00001 }
 225:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 7;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.Freeze;
            michal = {};
            michal['freeze'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 272:
            return entity;
        }
    };
    michal = report.bind(option)(michal);
    var _closure1_slot10 = michal;
    report = {};
    verify = 'function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}';
    report['code'] = verify;
    var _closure1_slot11 = report;
    report = {};
    verify = 'function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}';
    report['code'] = verify;
    var _closure1_slot12 = report;
    report = {};
    verify = 'function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}';
    report['code'] = verify;
    var _closure1_slot13 = report;
    report = option.memo;
    tangon = function(argFoo) { // Original name: VoicePanelControlsDrawer
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            romeon = entity.tab;
            zuuluu = entity.sharedTab;
            output = entity.wrapperSpecs;
            var _closure2_slot0 = output;
            foxtra = entity.gestureSpecs;
            var _closure2_slot1 = foxtra;
            option = _closure1_slot4;
            report = option.useContext;
            golfie = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 10;
            entity = tangon[entity];
            tangon = undefined;
            entity = golfie.bind(tangon)(entity);
            entity = report.bind(option)(entity);
            kiloes = entity.mode;
            var _closure2_slot2 = kiloes;
            echoed = entity.windowDimensions;
            var _closure2_slot3 = echoed;
            backup = entity.safeArea;
            var _closure2_slot4 = backup;
            entity = _closure1_slot9;
            report = entity.bind(tangon)();
            golfie = option.useState;
            entity = null;
            entity = entity == romeon;
            option = golfie.bind(option)(entity);
            golfie = _closure1_slot3;
            entity = 2;
            golfie = golfie.bind(tangon)(option, entity);
            entity = 0;
            offset = golfie[entity];
            entity = 1;
            sizing = golfie[entity];
            var _closure2_slot5 = sizing;
            entity = zuuluu.get;
            entity = entity.bind(zuuluu)();
            entity = romeon !== entity;
            if(!entity) { _fun00008_ip = 179; continue _fun00007 }
 176:
            entity = offset;
 179:
            if(!entity) { _fun00008_ip = 189; continue _fun00007 }
 182:
            entity = false;
            entity = sizing.bind(tangon)(entity);
 189:
            result = _closure1_slot0;
            option = _closure1_slot2;
            entity = 11;
            zuuluu = option[entity];
            verify = result.bind(tangon)(zuuluu);
            golfie = verify.useAnimatedStyle;
            zuuluu = function() { // Original name: y
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = {};
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 12;
                    zuuluu = golfie[zuuluu];
                    report = undefined;
                    yankee = oscard.bind(report)(zuuluu);
                    offset = yankee.getControlsDrawerOpenWidth;
                    option = _closure2_slot3;
                    tangon = option.get;
                    tangon = tangon.bind(option)();
                    verify = tangon.width;
                    romeon = _closure2_slot4;
                    tangon = romeon.get;
                    tangon = tangon.bind(romeon)();
                    option = tangon.left;
                    tangon = romeon.get;
                    tangon = tangon.bind(romeon)();
                    tangon = tangon.right;
                    tangon = offset.bind(yankee)(verify, option, tangon);
                    entity['width'] = tangon;
                    tangon = 13;
                    tangon = golfie[tangon];
                    report = oscard.bind(report)(tangon);
                    tangon = report.withSpring;
                    oscard = _closure2_slot0;
                    zuuluu = oscard.get;
                    zuuluu = zuuluu.bind(oscard)();
                    oscard = zuuluu.height;
                    zuuluu = 200;
                    oscard = oscard >= zuuluu;
                    zuuluu = 0;
                    if(!oscard) { _fun00010_ip = 147; continue _fun00009 }
 144:
                    zuuluu = 1;
 147:
                    michal = _closure1_slot5;
                    michal = tangon.bind(report)(zuuluu, michal);
                    entity['opacity'] = michal;
                    return entity;
                }
            };
            yankee = {};
            update = 12;
            update = option[update];
            update = result.bind(tangon)(update);
            update = update.getControlsDrawerOpenWidth;
            yankee['getControlsDrawerOpenWidth'] = update;
            yankee['windowDimensions'] = echoed;
            yankee['safeArea'] = backup;
            backup = 13;
            backup = option[backup];
            backup = result.bind(tangon)(backup);
            backup = backup.withSpring;
            yankee['withSpring'] = backup;
            yankee['wrapperSpecs'] = output;
            backup = 200;
            yankee['TRANSITIONAL_HEIGHT'] = backup;
            backup = _closure1_slot5;
            yankee['MODE_CHANGE_PHYSICS'] = backup;
            zuuluu['__closure'] = yankee;
            yankee = 8777106499672.0;
            zuuluu['__workletHash'] = yankee;
            yankee = _closure1_slot11;
            zuuluu['__initData'] = yankee;
            golfie = golfie.bind(verify)(zuuluu);
            zuuluu = option[entity];
            backup = result.bind(tangon)(zuuluu);
            yankee = backup.useAnimatedReaction;
            verify = function() { // Original name: x
                zuuluu = _closure2_slot0;
                entity = zuuluu.get;
                entity = entity.bind(zuuluu)();
                zuuluu = entity.drawerMode;
                entity = new Array(2);
                entity[0] = zuuluu;
                zuuluu = _closure2_slot2;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                entity[1] = michal;
                return entity;
            };
            zuuluu = {};
            zuuluu['wrapperSpecs'] = output;
            zuuluu['mode'] = kiloes;
            verify['__closure'] = zuuluu;
            zuuluu = 16802013961309.0;
            verify['__workletHash'] = zuuluu;
            zuuluu = _closure1_slot12;
            verify['__initData'] = zuuluu;
            zuuluu = function(argFoo, argBar) { // Original name: M
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    oscard = argFoo;
                    golfie = argBar;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 14;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    option = tangon.bind(entity)(zuuluu);
                    report = option.cheapWorkletArrayShallowEqual;
                    tangon = null;
                    verify = tangon != golfie;
                    zuuluu = undefined;
                    if(!verify) { _fun00012_ip = 51; continue _fun00011 }
 48:
                    zuuluu = golfie;
 51:
                    zuuluu = report.bind(option)(oscard, zuuluu);
                    if(zuuluu) { _fun00012_ip = 225; continue _fun00011 }
 63:
                    report = _closure1_slot3;
                    zuuluu = 2;
                    report = report.bind(entity)(oscard, zuuluu);
                    option = 0;
                    zuuluu = report[option];
                    oscard = 1;
                    report = report[oscard];
                    tangon = tangon != golfie;
                    if(!tangon) { _fun00012_ip = 104; continue _fun00011 }
 96:
                    option = golfie[option];
                    tangon = zuuluu === option;
 104:
                    if(!tangon) { _fun00012_ip = 115; continue _fun00011 }
 107:
                    oscard = golfie[oscard];
                    tangon = report === oscard;
 115:
                    if(tangon) { _fun00012_ip = 225; continue _fun00011 }
 118:
                    tangon = _closure1_slot6;
                    tangon = tangon.PANEL;
                    if(!(report === tangon)) { _fun00012_ip = 135; continue _fun00011 }
 132:
                    if(zuuluu) { _fun00012_ip = 181; continue _fun00011 }
 135:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.runOnJS;
                    zuuluu = _closure2_slot5;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = true;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    _fun00012_ip = 225; continue _fun00011;
 181:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 11;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.runOnJS;
                    michal = _closure2_slot5;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = false;
                    michal = zuuluu.bind(entity)(michal);
 225:
                    return entity;
                }
            };
            kiloes = {};
            output = 14;
            output = option[output];
            output = result.bind(tangon)(output);
            output = output.cheapWorkletArrayShallowEqual;
            kiloes['cheapWorkletArrayShallowEqual'] = output;
            output = _closure1_slot6;
            kiloes['VoicePanelModes'] = output;
            output = option[entity];
            output = result.bind(tangon)(output);
            output = output.runOnJS;
            kiloes['runOnJS'] = output;
            kiloes['setFreeze'] = sizing;
            zuuluu['__closure'] = kiloes;
            kiloes = 10375596551326.0;
            zuuluu['__workletHash'] = kiloes;
            kiloes = _closure1_slot13;
            zuuluu['__initData'] = kiloes;
            zuuluu = yankee.bind(backup)(verify, zuuluu);
            yankee = _closure1_slot4;
            verify = yankee.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = foxtra;
            michal = function() {
                tangon = _closure1_slot7;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 15;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                report = _closure2_slot1;
                entity['gestureSpecs'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            verify = verify.bind(yankee)(michal, zuuluu);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot1;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.View;
            entity = {};
            option = report.drawer;
            report = new Array(2);
            report[0] = option;
            report[1] = golfie;
            entity['style'] = report;
            option = _closure1_slot7;
            golfie = _closure1_slot10;
            report = {};
            yankee = !offset;
            if(!yankee) { _fun00008_ip = 604; continue _fun00007 }
 596:
            foxtra = 'settings';
            yankee = foxtra === romeon;
 604:
            report['shown'] = yankee;
            yankee = _closure1_slot14;
            report['renderContent'] = yankee;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(3);
            report[0] = golfie;
            yankee = _closure1_slot7;
            option = _closure1_slot10;
            golfie = {};
            foxtra = !offset;
            if(!foxtra) { _fun00008_ip = 656; continue _fun00007 }
 648:
            backup = 'chat';
            foxtra = backup === romeon;
 656:
            golfie['shown'] = foxtra;
            foxtra = _closure1_slot15;
            golfie['renderContent'] = foxtra;
            golfie = yankee.bind(tangon)(option, golfie);
            report[1] = golfie;
            option = _closure1_slot7;
            golfie = _closure1_slot10;
            oscard = {};
            offset = !offset;
            if(!offset) { _fun00008_ip = 706; continue _fun00007 }
 696:
            yankee = 'app_launcher';
            offset = yankee === romeon;
 706:
            oscard['shown'] = offset;
            oscard['renderContent'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    report = 16;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['LazyContentFreezer'] = michal;
    return entity;
})();