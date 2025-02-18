// app/modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.VoicePanelModes;
    var _closure1_slot3 = golfie;
    tangon = tangon.IS_IOS;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VoicePanelControlsModes;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PIP_WINDOW_OFFSET;
    var _closure1_slot6 = tangon;
    tangon = {};
    golfie = 'function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,IS_IOS,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:IS_IOS?keyboardHeight.get():0,safeArea:safeArea.get(),screenName:screenName.get()};}';
    tangon['code'] = golfie;
    var _closure1_slot7 = tangon;
    tangon = {};
    golfie = 'function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{adjustedScreenBottomOffset:adjustedScreenBottomOffset,bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,imeInsetsBottom:safeArea.imeInsetsBottom,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:Math.max(bottomOffset,adjustedScreenBottomOffset)});}';
    tangon['code'] = golfie;
    var _closure1_slot8 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: usePIPAvoidanceSpecs
        entity = argFoo;
        sizing = entity.mode;
        var _closure2_slot0 = sizing;
        kiloes = entity.controlsSpecs;
        var _closure2_slot1 = kiloes;
        foxtra = entity.safeArea;
        var _closure2_slot2 = foxtra;
        romeon = _closure1_slot0;
        yankee = _closure1_slot2;
        zuuluu = 3;
        entity = yankee[zuuluu];
        offset = undefined;
        report = romeon.bind(offset)(entity);
        tangon = report.useSharedValue;
        entity = {'top': 0, 'bottom': 0};
        entity = tangon.bind(report)(entity);
        var _closure2_slot3 = entity;
        verify = _closure1_slot1;
        tangon = 4;
        tangon = yankee[tangon];
        tangon = verify.bind(offset)(tangon);
        backup = tangon.bind(offset)();
        var _closure2_slot4 = backup;
        tangon = 5;
        tangon = yankee[tangon];
        tangon = verify.bind(offset)(tangon);
        option = tangon.bind(offset)();
        var _closure2_slot5 = option;
        zuuluu = yankee[zuuluu];
        report = romeon.bind(offset)(zuuluu);
        tangon = report.useAnimatedReaction;
        zuuluu = function() { // Original name: S
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = {};
                tangon = _closure2_slot0;
                zuuluu = tangon.get;
                zuuluu = zuuluu.bind(tangon)();
                entity['mode'] = zuuluu;
                tangon = _closure2_slot1;
                zuuluu = tangon.get;
                zuuluu = zuuluu.bind(tangon)();
                entity['controlsSpecs'] = zuuluu;
                tangon = _closure1_slot4;
                zuuluu = 0;
                if(!tangon) { _fun00002_ip = 65; continue _fun00001 }
 52:
                report = _closure2_slot4;
                tangon = report.get;
                zuuluu = tangon.bind(report)();
 65:
                entity['keyboardHeight'] = zuuluu;
                tangon = _closure2_slot2;
                zuuluu = tangon.get;
                zuuluu = zuuluu.bind(tangon)();
                entity['safeArea'] = zuuluu;
                zuuluu = _closure2_slot5;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                entity['screenName'] = michal;
                return entity;
            }
        };
        golfie = {};
        golfie['mode'] = sizing;
        golfie['controlsSpecs'] = kiloes;
        kiloes = _closure1_slot4;
        golfie['IS_IOS'] = kiloes;
        golfie['keyboardHeight'] = backup;
        golfie['safeArea'] = foxtra;
        golfie['screenName'] = option;
        zuuluu['__closure'] = golfie;
        golfie = 3889227533187.0;
        zuuluu['__workletHash'] = golfie;
        golfie = _closure1_slot7;
        zuuluu['__initData'] = golfie;
        michal = function(argFoo, argBar) { // Original name: p
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                oscard = argBar;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                report = tangon.bind(entity)(michal);
                tangon = report.cheapWorkletShallowEqual;
                michal = null;
                golfie = michal != oscard;
                michal = undefined;
                if(!golfie) { _fun00004_ip = 51; continue _fun00003 }
 48:
                michal = oscard;
 51:
                michal = tangon.bind(report)(zuuluu, michal);
                if(michal) { _fun00004_ip = 446; continue _fun00003 }
 63:
                foxtra = zuuluu.mode;
                offset = zuuluu.controlsSpecs;
                michal = zuuluu.keyboardHeight;
                report = zuuluu.safeArea;
                tangon = zuuluu.screenName;
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.PIP;
                if(!(foxtra === zuuluu)) { _fun00004_ip = 133; continue _fun00003 }
 106:
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                zuuluu = 7;
                zuuluu = golfie[zuuluu];
                zuuluu = oscard.bind(entity)(zuuluu);
                oscard = zuuluu.bind(entity)(tangon);
                _fun00004_ip = 184; continue _fun00003;
 133:
                zuuluu = _closure1_slot3;
                tangon = zuuluu.PANEL;
                zuuluu = 0;
                if(!(foxtra === tangon)) { _fun00004_ip = 181; continue _fun00003 }
 149:
                golfie = offset.mode;
                tangon = _closure1_slot5;
                tangon = tangon.DRAWER;
                zuuluu = 0;
                if(!(golfie === tangon)) { _fun00004_ip = 181; continue _fun00003 }
 170:
                golfie = _closure1_slot6;
                tangon = 60;
                zuuluu = tangon + golfie;
 181:
                oscard = zuuluu;
 184:
                tangon = _closure1_slot1;
                golfie = _closure1_slot2;
                zuuluu = 8;
                zuuluu = golfie[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = {};
                zuuluu['screenBottomOffset'] = oscard;
                oscard = report.imeInsetsBottom;
                zuuluu['imeInsetsBottom'] = oscard;
                oscard = report.bottom;
                zuuluu['safeAreaBottom'] = oscard;
                zuuluu['keyboardHeight'] = michal;
                zuuluu = tangon.bind(entity)(zuuluu);
                option = zuuluu.adjustedScreenBottomOffset;
                zuuluu = zuuluu.bottomOffset;
                yankee = 0;
                michal = michal <= yankee;
                if(!michal) { _fun00004_ip = 277; continue _fun00003 }
 263:
                tangon = _closure1_slot3;
                tangon = tangon.PANEL;
                michal = foxtra === tangon;
 277:
                if(!michal) { _fun00004_ip = 299; continue _fun00003 }
 280:
                oscard = offset.mode;
                tangon = _closure1_slot5;
                tangon = tangon.FLOATING_DEFAULT;
                michal = oscard === tangon;
 299:
                golfie = zuuluu;
                if(!michal) { _fun00004_ip = 322; continue _fun00003 }
 305:
                tangon = offset.height;
                michal = _closure1_slot6;
                michal = tangon + michal;
                golfie = zuuluu + michal;
 322:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 9;
                michal = tangon[michal];
                michal = zuuluu.bind(entity)(michal);
                michal = michal.bind(entity)(report);
                oscard = michal.height;
                michal = 10;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = _closure2_slot3;
                michal = {};
                report = _closure1_slot3;
                romeon = report.PANEL;
                report = 0;
                if(!(foxtra === romeon)) { _fun00004_ip = 413; continue _fun00003 }
 389:
                offset = offset.mode;
                verify = _closure1_slot5;
                verify = verify.FLOATING_DEFAULT;
                report = 0;
                if(!(offset === verify)) { _fun00004_ip = 413; continue _fun00003 }
 410:
                report = oscard;
 413:
                michal['top'] = report;
                report = global;
                oscard = report.Math;
                report = oscard.max;
                report = report.bind(oscard)(golfie, option);
                michal['bottom'] = report;
                michal = tangon.bind(entity)(zuuluu, michal);
 446:
                return entity;
            }
        };
        golfie = {};
        option = 6;
        option = yankee[option];
        option = romeon.bind(offset)(option);
        option = option.cheapWorkletShallowEqual;
        golfie['cheapWorkletShallowEqual'] = option;
        option = _closure1_slot3;
        golfie['VoicePanelModes'] = option;
        option = _closure1_slot5;
        golfie['VoicePanelControlsModes'] = option;
        option = 60;
        golfie['DEFAULT_CHANNEL_INPUT_HEIGHT'] = option;
        option = _closure1_slot6;
        golfie['PIP_WINDOW_OFFSET'] = option;
        option = 7;
        option = yankee[option];
        option = verify.bind(offset)(option);
        golfie['getPIPBottomOffsetForPIPMode'] = option;
        option = 8;
        option = yankee[option];
        option = verify.bind(offset)(option);
        golfie['getAdjustedBottomOffsets'] = option;
        option = 9;
        option = yankee[option];
        option = verify.bind(offset)(option);
        golfie['calculateVoicePanelHeaderSpecs'] = option;
        option = 10;
        option = yankee[option];
        option = verify.bind(offset)(option);
        golfie['updateSharedValueIfChanged'] = option;
        golfie['pipAvoidanceSpecs'] = entity;
        michal['__closure'] = golfie;
        golfie = 2235944231220.0;
        michal['__workletHash'] = golfie;
        oscard = _closure1_slot8;
        michal['__initData'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();