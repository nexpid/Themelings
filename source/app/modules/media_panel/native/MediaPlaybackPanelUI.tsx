// app/modules/media_panel/native/MediaPlaybackPanelUI.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    offset = 0;
    tangon = oscard[offset];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    romeon = 1;
    tangon = oscard[romeon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useContext;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS;
    var _closure1_slot7 = golfie;
    tangon = tangon.MediaPlaybackPanelModes;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.IS_IOS;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BORDER_RADIUS_PHYSICS;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['opacity'] = offset;
    tangon['wrapperAnimationPresets'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'left': 0, 'zIndex': 1};
    tangon['wrapper'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'overflow': 'hidden', 'borderWidth': 1};
    offset = 8;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.xl;
    verify['borderRadius'] = foxtra;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.CHAT_BORDER;
    verify['borderColor'] = foxtra;
    tangon['mask'] = verify;
    verify = {};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.shadows;
    kiloes = foxtra.SHADOW_LOW_HOVER;
    sizing = verify;
    foxtra = copyDataProperties(sizing, kiloes);
    tangon['maskElevation'] = verify;
    verify = {'xOffset': 0, 'yOffset': 0, 'shadowColorIos': '#000000', 'shadowOpacity': 0, 'shadowRadius': 0, 'elevation': 0, 'shadowColorAndroid': '#000000'};
    tangon['maskEmptyElevation'] = verify;
    verify = {};
    verify['flex'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_FLOATING;
    verify['backgroundColor'] = offset;
    tangon['content'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = {};
    golfie = 'function MediaPlaybackPanelUITsx1(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}';
    tangon['code'] = golfie;
    var _closure1_slot13 = tangon;
    tangon = {};
    golfie = 'function MediaPlaybackPanelUITsx2(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;if(modeToSet===MediaPlaybackPanelModes.PIP){const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});}else if(modeToSet===MediaPlaybackPanelModes.DISMISSED){updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});}}';
    tangon['code'] = golfie;
    var _closure1_slot14 = tangon;
    tangon = {};
    golfie = 'function MediaPlaybackPanelUITsx3(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}';
    tangon['code'] = golfie;
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = 'function MediaPlaybackPanelUITsx4(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}';
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = "function MediaPlaybackPanelUITsx5(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}";
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = {};
    golfie = "function MediaPlaybackPanelUITsx6(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};}";
    tangon['code'] = golfie;
    var _closure1_slot18 = tangon;
    tangon = {};
    golfie = "function MediaPlaybackPanelUITsx7(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};}";
    tangon['code'] = golfie;
    var _closure1_slot19 = tangon;
    tangon = {};
    golfie = "function MediaPlaybackPanelUITsx8(){const{styles}=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};}";
    tangon['code'] = golfie;
    var _closure1_slot20 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_panel/native/MediaPlaybackPanelUI.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: MediaPlaybackPanelUI
        michal = _closure1_slot12;
        tangon = undefined;
        kiloes = michal.bind(tangon)();
        var _closure2_slot0 = kiloes;
        sizing = _closure1_slot1;
        output = _closure1_slot2;
        michal = 10;
        michal = output[michal];
        michal = sizing.bind(tangon)(michal);
        yankee = michal.bind(tangon)();
        var _closure2_slot1 = yankee;
        oscard = _closure1_slot5;
        michal = 11;
        report = output[michal];
        report = sizing.bind(tangon)(report);
        report = oscard.bind(tangon)(report);
        option = report.wrapperDimensions;
        oscard = report.wrapperOffset;
        romeon = _closure1_slot0;
        foxtra = 12;
        report = output[foxtra];
        verify = romeon.bind(tangon)(report);
        golfie = verify.useAnimatedStyle;
        report = function() { // Original name: p
            zuuluu = _closure2_slot1;
            michal = zuuluu.height;
            entity = {'position': 'absolute', 'top': 0, 'left': 0, 'width': null, 'height': null, 'overflow': 'hidden'};
            zuuluu = zuuluu.width;
            entity['width'] = zuuluu;
            entity['height'] = michal;
            return entity;
        };
        offset = {};
        offset['windowDimensions'] = yankee;
        report['__closure'] = offset;
        offset = 5768037716653.0;
        report['__workletHash'] = offset;
        offset = _closure1_slot19;
        report['__initData'] = offset;
        golfie = golfie.bind(verify)(report);
        report = function(argFoo, argBar) { // Original name: useWrapperStyles
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                kiloes = argFoo;
                sequen = argBar;
                var _closure3_slot0 = kiloes;
                var _closure3_slot1 = sequen;
                entity = _closure1_slot12;
                foxtra = undefined;
                oscard = entity.bind(foxtra)();
                var _closure3_slot2 = oscard;
                sizing = _closure1_slot1;
                ctrled = _closure1_slot2;
                entity = 9;
                entity = ctrled[entity];
                entity = sizing.bind(foxtra)(entity);
                echoed = entity.bind(foxtra)();
                var _closure3_slot3 = echoed;
                entity = 10;
                entity = ctrled[entity];
                entity = sizing.bind(foxtra)(entity);
                vacuum = entity.bind(foxtra)();
                var _closure3_slot4 = vacuum;
                report = _closure1_slot4;
                tangon = report.useContext;
                entity = 11;
                entity = ctrled[entity];
                entity = sizing.bind(foxtra)(entity);
                entity = tangon.bind(report)(entity);
                report = entity.mode;
                var _closure3_slot5 = report;
                romeon = entity.pipState;
                var _closure3_slot6 = romeon;
                config = entity.pipAvoidanceSpecs;
                var _closure3_slot7 = config;
                golfie = entity.canShowPIP;
                var _closure3_slot8 = golfie;
                source = _closure1_slot0;
                tangon = 12;
                entity = ctrled[tangon];
                offset = source.bind(foxtra)(entity);
                verify = offset.useAnimatedReaction;
                option = function() { // Original name: u
                    entity = {};
                    tangon = _closure3_slot5;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    entity['mode'] = zuuluu;
                    zuuluu = _closure3_slot4;
                    entity['windowDimensions'] = zuuluu;
                    zuuluu = _closure3_slot8;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    entity['canShowPIP'] = michal;
                    return entity;
                };
                entity = {};
                entity['mode'] = report;
                entity['windowDimensions'] = vacuum;
                entity['canShowPIP'] = golfie;
                option['__closure'] = entity;
                entity = 4412661953046.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot13;
                option['__initData'] = entity;
                golfie = function(argFoo, argBar) { // Original name: p
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = argFoo;
                        golfie = argBar;
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        entity = 13;
                        tangon = tangon[entity];
                        entity = undefined;
                        oscard = report.bind(entity)(tangon);
                        report = oscard.cheapWorkletShallowEqual;
                        tangon = null;
                        option = tangon != golfie;
                        tangon = undefined;
                        if(!option) { _fun00004_ip = 51; continue _fun00003 }
 48:
                        tangon = golfie;
 51:
                        tangon = report.bind(oscard)(zuuluu, tangon);
                        if(tangon) { _fun00004_ip = 239; continue _fun00003 }
 63:
                        report = zuuluu.mode;
                        golfie = zuuluu.windowDimensions;
                        zuuluu = zuuluu.canShowPIP;
                        tangon = _closure1_slot8;
                        tangon = tangon.PIP;
                        if(!(report !== tangon)) { _fun00004_ip = 157; continue _fun00003 }
 94:
                        tangon = _closure1_slot8;
                        tangon = tangon.DISMISSED;
                        if(!(report === tangon)) { _fun00004_ip = 239; continue _fun00003 }
 111:
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        tangon = 14;
                        tangon = oscard[tangon];
                        oscard = report.bind(entity)(tangon);
                        report = _closure3_slot1;
                        tangon = {};
                        golfie = golfie.height;
                        tangon['y'] = golfie;
                        tangon = oscard.bind(entity)(report, tangon);
                        _fun00004_ip = 239; continue _fun00003;
 157:
                        if(zuuluu) { _fun00004_ip = 172; continue _fun00003 }
 160:
                        zuuluu = {'width': 0, 'height': 0};
                        _fun00004_ip = 186; continue _fun00003;
 172:
                        zuuluu = {'width': 120, 'height': 120};
 186:
                        oscard = zuuluu.width;
                        report = zuuluu.height;
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 14;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = _closure3_slot0;
                        michal = {};
                        michal['width'] = oscard;
                        michal['height'] = report;
                        michal = tangon.bind(entity)(zuuluu, michal);
 239:
                        return entity;
                    }
                };
                yankee = {};
                update = 13;
                entity = ctrled[update];
                entity = source.bind(foxtra)(entity);
                entity = entity.cheapWorkletShallowEqual;
                yankee['cheapWorkletShallowEqual'] = entity;
                entity = _closure1_slot8;
                yankee['MediaPlaybackPanelModes'] = entity;
                backup = 14;
                backup = ctrled[backup];
                backup = sizing.bind(foxtra)(backup);
                yankee['updateSharedValueIfChanged'] = backup;
                yankee['wrapperDimensions'] = kiloes;
                yankee['wrapperOffset'] = sequen;
                golfie['__closure'] = yankee;
                yankee = 8412437178561.0;
                golfie['__workletHash'] = yankee;
                yankee = _closure1_slot14;
                golfie['__initData'] = yankee;
                golfie = verify.bind(offset)(option, golfie);
                golfie = ctrled[tangon];
                option = source.bind(foxtra)(golfie);
                golfie = option.useSharedValue;
                verify = 0;
                output = golfie.bind(option)(verify);
                var _closure3_slot9 = output;
                golfie = ctrled[tangon];
                option = source.bind(foxtra)(golfie);
                golfie = option.useSharedValue;
                sizing = golfie.bind(option)(verify);
                var _closure3_slot10 = sizing;
                golfie = ctrled[tangon];
                option = source.bind(foxtra)(golfie);
                golfie = option.useSharedValue;
                result = golfie.bind(option)(verify);
                var _closure3_slot11 = result;
                golfie = ctrled[tangon];
                verify = source.bind(foxtra)(golfie);
                option = verify.useSharedValue;
                golfie = false;
                yankee = option.bind(verify)(golfie);
                var _closure3_slot12 = yankee;
                option = _closure1_slot6;
                golfie = function(argFoo) {
                    michal = argFoo;
                    entity = michal.shouldDisableSafeAreas;
                    entity = entity.bind(michal)();
                    return entity;
                };
                backup = option.bind(foxtra)(golfie);
                var _closure3_slot13 = backup;
                golfie = ctrled[tangon];
                offset = source.bind(foxtra)(golfie);
                verify = offset.useAnimatedReaction;
                option = function() { // Original name: R
                    entity = {};
                    tangon = _closure3_slot5;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    entity['mode'] = zuuluu;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    entity['wrapperDimensions'] = zuuluu;
                    tangon = _closure3_slot7;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    entity['pipAvoidanceSpecs'] = zuuluu;
                    tangon = _closure3_slot1;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    entity['wrapperOffset'] = zuuluu;
                    zuuluu = _closure3_slot4;
                    entity['windowDimensions'] = zuuluu;
                    zuuluu = _closure3_slot3;
                    entity['safeArea'] = zuuluu;
                    zuuluu = _closure3_slot6;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    entity['pipState'] = michal;
                    return entity;
                };
                golfie = {};
                golfie['mode'] = report;
                golfie['wrapperDimensions'] = kiloes;
                golfie['pipAvoidanceSpecs'] = config;
                golfie['wrapperOffset'] = sequen;
                golfie['windowDimensions'] = vacuum;
                golfie['safeArea'] = echoed;
                golfie['pipState'] = romeon;
                option['__closure'] = golfie;
                golfie = 4950432193502.0;
                option['__workletHash'] = golfie;
                golfie = _closure1_slot15;
                option['__initData'] = golfie;
                golfie = function(argFoo, argBar) { // Original name: C
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        tangon = argFoo;
                        zuuluu = argBar;
                        report = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 13;
                        michal = michal[entity];
                        entity = undefined;
                        golfie = report.bind(entity)(michal);
                        oscard = golfie.cheapWorkletShallowEqual;
                        report = null;
                        verify = report != zuuluu;
                        michal = undefined;
                        if(!verify) { _fun00006_ip = 51; continue _fun00005 }
 48:
                        michal = zuuluu;
 51:
                        michal = oscard.bind(golfie)(tangon, michal);
                        if(michal) { _fun00006_ip = 468; continue _fun00005 }
 63:
                        verify = tangon.mode;
                        offset = tangon.wrapperDimensions;
                        kiloes = tangon.pipAvoidanceSpecs;
                        michal = tangon.wrapperOffset;
                        foxtra = tangon.windowDimensions;
                        tangon = tangon.pipState;
                        sizing = michal.gestureActive;
                        yankee = tangon.x;
                        golfie = tangon.y;
                        tangon = _closure1_slot8;
                        tangon = tangon.PIP;
                        if(!(tangon !== verify)) { _fun00006_ip = 180; continue _fun00005 }
 128:
                        tangon = _closure1_slot8;
                        backup = tangon.DISMISSED;
                        romeon = 0;
                        oscard = 0;
                        tangon = 0;
                        if(!(backup === verify)) { _fun00006_ip = 320; continue _fun00005 }
 151:
                        tangon = offset.height;
                        output = _closure3_slot11;
                        backup = output.set;
                        backup = backup.bind(output)(romeon);
                        oscard = 0;
                        _fun00006_ip = 320; continue _fun00005;
 180:
                        romeon = _closure1_slot0;
                        backup = _closure1_slot2;
                        offset = 15;
                        offset = backup[offset];
                        backup = romeon.bind(entity)(offset);
                        romeon = backup.getClampedPIPPosition;
                        offset = {};
                        offset['pipX'] = yankee;
                        offset['pipY'] = golfie;
                        output = 120;
                        offset['width'] = output;
                        offset['height'] = output;
                        offset['windowDimensions'] = foxtra;
                        output = _closure3_slot3;
                        offset['safeArea'] = output;
                        output = kiloes.bottom;
                        offset['bottomAvoidanceRegion'] = output;
                        kiloes = kiloes.top;
                        offset['topAvoidanceRegion'] = kiloes;
                        kiloes = undefined;
                        if(!sizing) { _fun00006_ip = 274; continue _fun00005 }
 271:
                        kiloes = michal;
 274:
                        offset['positionOffset'] = kiloes;
                        kiloes = _closure3_slot13;
                        offset['disableHorizontalSafeAreas'] = kiloes;
                        offset = romeon.bind(backup)(offset);
                        oscard = offset.x;
                        tangon = offset.y;
                        kiloes = _closure3_slot11;
                        backup = kiloes.set;
                        foxtra = 1;
                        foxtra = backup.bind(kiloes)(foxtra);
 320:
                        romeon = report == zuuluu;
                        offset = undefined;
                        if(romeon) { _fun00006_ip = 335; continue _fun00005 }
 329:
                        offset = zuuluu.pipState;
 335:
                        romeon = report == offset;
                        zuuluu = undefined;
                        if(romeon) { _fun00006_ip = 349; continue _fun00005 }
 344:
                        zuuluu = offset.x;
 349:
                        zuuluu = yankee !== zuuluu;
                        if(zuuluu) { _fun00006_ip = 374; continue _fun00005 }
 356:
                        yankee = report == offset;
                        report = undefined;
                        if(yankee) { _fun00006_ip = 370; continue _fun00005 }
 365:
                        report = offset.y;
 370:
                        zuuluu = golfie !== report;
 374:
                        report = _closure1_slot8;
                        report = report.PIP;
                        golfie = verify === report;
                        if(!golfie) { _fun00006_ip = 394; continue _fun00005 }
 391:
                        golfie = zuuluu;
 394:
                        if(!golfie) { _fun00006_ip = 406; continue _fun00005 }
 397:
                        michal = michal.gestureActive;
                        golfie = !michal;
 406:
                        report = _closure3_slot12;
                        zuuluu = report.set;
                        if(golfie) { _fun00006_ip = 435; continue _fun00005 }
 421:
                        option = _closure1_slot8;
                        option = option.PIP;
                        golfie = verify !== option;
 435:
                        zuuluu = zuuluu.bind(report)(golfie);
                        report = _closure3_slot9;
                        zuuluu = report.set;
                        zuuluu = zuuluu.bind(report)(oscard);
                        zuuluu = _closure3_slot10;
                        michal = zuuluu.set;
                        michal = michal.bind(zuuluu)(tangon);
 468:
                        return entity;
                    }
                };
                romeon = {};
                update = ctrled[update];
                update = source.bind(foxtra)(update);
                update = update.cheapWorkletShallowEqual;
                romeon['cheapWorkletShallowEqual'] = update;
                romeon['MediaPlaybackPanelModes'] = entity;
                update = 15;
                update = ctrled[update];
                update = source.bind(foxtra)(update);
                update = update.getClampedPIPPosition;
                romeon['getClampedPIPPosition'] = update;
                romeon['safeArea'] = echoed;
                romeon['disableHorizontalSafeAreas'] = backup;
                romeon['wrapperOpacity'] = result;
                romeon['animateWrapperTranslation'] = yankee;
                romeon['wrapperTranslationX'] = output;
                romeon['wrapperTranslationY'] = sizing;
                golfie['__closure'] = romeon;
                romeon = 10793489581273.0;
                golfie['__workletHash'] = romeon;
                romeon = _closure1_slot16;
                golfie['__initData'] = romeon;
                golfie = verify.bind(offset)(option, golfie);
                golfie = report.get;
                golfie = golfie.bind(report)();
                entity = entity.PIP;
                if(!(golfie === entity)) { _fun00002_ip = 687; continue _fun00001 }
 680:
                entity = _closure1_slot9;
                if(entity) { _fun00002_ip = 695; continue _fun00001 }
 687:
                offset = oscard.maskEmptyElevation;
                _fun00002_ip = 701; continue _fun00001;
 695:
                offset = oscard.maskElevation;
 701:
                var _closure3_slot14 = offset;
                entity = report.get;
                report = entity.bind(report)();
                entity = _closure1_slot8;
                entity = entity.PIP;
                if(!(report === entity)) { _fun00002_ip = 743; continue _fun00001 }
 728:
                entity = _closure1_slot9;
                if(entity) { _fun00002_ip = 743; continue _fun00001 }
 735:
                verify = oscard.maskElevation;
                _fun00002_ip = 749; continue _fun00001;
 743:
                verify = oscard.maskEmptyElevation;
 749:
                var _closure3_slot15 = verify;
                romeon = _closure1_slot0;
                backup = _closure1_slot2;
                entity = backup[tangon];
                golfie = romeon.bind(foxtra)(entity);
                report = golfie.useAnimatedStyle;
                entity = function() { // Original name: L
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        oscard = _closure1_slot0;
                        option = _closure1_slot2;
                        entity = 16;
                        entity = option[entity];
                        offset = undefined;
                        report = oscard.bind(offset)(entity);
                        tangon = report.withTiming;
                        zuuluu = _closure3_slot11;
                        entity = zuuluu.get;
                        zuuluu = entity.bind(zuuluu)();
                        entity = 17;
                        entity = option[entity];
                        entity = oscard.bind(offset)(entity);
                        entity = entity.timingFast;
                        romeon = 'respect-motion-settings';
                        zuuluu = tangon.bind(report)(zuuluu, entity, romeon);
                        entity = {};
                        report = {};
                        oscard = _closure3_slot12;
                        tangon = oscard.get;
                        tangon = tangon.bind(oscard)();
                        if(tangon) { _fun00008_ip = 112; continue _fun00007 }
 97:
                        oscard = _closure3_slot9;
                        tangon = oscard.get;
                        tangon = tangon.bind(oscard)();
                        _fun00008_ip = 167; continue _fun00007;
 112:
                        option = _closure1_slot0;
                        verify = _closure1_slot2;
                        oscard = 18;
                        oscard = verify[oscard];
                        foxtra = option.bind(offset)(oscard);
                        yankee = foxtra.withSpring;
                        option = _closure3_slot9;
                        oscard = option.get;
                        verify = oscard.bind(option)();
                        option = _closure1_slot7;
                        oscard = 'animate-always';
                        tangon = yankee.bind(foxtra)(verify, option, oscard);
 167:
                        report['translateX'] = tangon;
                        tangon = new Array(2);
                        tangon[0] = report;
                        report = {};
                        option = _closure3_slot12;
                        oscard = option.get;
                        oscard = oscard.bind(option)();
                        if(oscard) { _fun00008_ip = 213; continue _fun00007 }
 198:
                        option = _closure3_slot10;
                        oscard = option.get;
                        oscard = oscard.bind(option)();
                        _fun00008_ip = 287; continue _fun00007;
 213:
                        verify = _closure1_slot0;
                        yankee = _closure1_slot2;
                        option = 18;
                        option = yankee[option];
                        yankee = verify.bind(offset)(option);
                        offset = yankee.withSpring;
                        verify = _closure3_slot10;
                        option = verify.get;
                        verify = option.bind(verify)();
                        option = _closure1_slot7;
                        foxtra = _closure3_slot12;
                        golfie = foxtra.get;
                        foxtra = golfie.bind(foxtra)();
                        golfie = 'animate-never';
                        if(!foxtra) { _fun00008_ip = 280; continue _fun00007 }
 277:
                        golfie = romeon;
 280:
                        oscard = offset.bind(yankee)(verify, option, golfie);
 287:
                        report['translateY'] = oscard;
                        tangon[1] = report;
                        entity['transform'] = tangon;
                        entity['opacity'] = zuuluu;
                        tangon = _closure3_slot0;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = zuuluu.width;
                        entity['width'] = zuuluu;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = zuuluu.height;
                        entity['height'] = zuuluu;
                        kiloes = _closure3_slot14;
                        sizing = entity;
                        michal = copyDataProperties(sizing, kiloes);
                        return entity;
                    }
                };
                option = {};
                echoed = 16;
                echoed = backup[echoed];
                echoed = romeon.bind(foxtra)(echoed);
                echoed = echoed.withTiming;
                option['withTiming'] = echoed;
                option['wrapperOpacity'] = result;
                result = 17;
                result = backup[result];
                result = romeon.bind(foxtra)(result);
                result = result.timingFast;
                option['timingFast'] = result;
                option['animateWrapperTranslation'] = yankee;
                yankee = 18;
                result = backup[yankee];
                result = romeon.bind(foxtra)(result);
                result = result.withSpring;
                option['withSpring'] = result;
                option['wrapperTranslationX'] = output;
                output = _closure1_slot7;
                option['MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS'] = output;
                option['wrapperTranslationY'] = sizing;
                option['wrapperDimensions'] = kiloes;
                option['wrapperElevationStyles'] = offset;
                entity['__closure'] = option;
                option = 11049335639852.0;
                entity['__workletHash'] = option;
                option = _closure1_slot17;
                entity['__initData'] = option;
                entity = report.bind(golfie)(entity);
                var _closure3_slot16 = entity;
                golfie = _closure1_slot1;
                report = 8;
                report = backup[report];
                report = golfie.bind(foxtra)(report);
                report = report.radii;
                offset = report.xl;
                var _closure3_slot17 = offset;
                tangon = backup[tangon];
                golfie = romeon.bind(foxtra)(tangon);
                report = golfie.useAnimatedStyle;
                tangon = function() { // Original name: B
                    entity = {};
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 18;
                    tangon = tangon[michal];
                    michal = undefined;
                    golfie = report.bind(michal)(tangon);
                    oscard = golfie.withSpring;
                    report = _closure3_slot17;
                    tangon = _closure1_slot10;
                    zuuluu = 'animate-always';
                    zuuluu = oscard.bind(golfie)(report, tangon, zuuluu);
                    entity['borderRadius'] = zuuluu;
                    verify = _closure3_slot15;
                    offset = entity;
                    michal = copyDataProperties(offset, verify);
                    return entity;
                };
                option = {};
                yankee = backup[yankee];
                yankee = romeon.bind(foxtra)(yankee);
                yankee = yankee.withSpring;
                option['withSpring'] = yankee;
                option['borderRadius'] = offset;
                offset = _closure1_slot10;
                option['BORDER_RADIUS_PHYSICS'] = offset;
                option['maskElevationStyles'] = verify;
                tangon['__closure'] = option;
                option = 7035830192327.0;
                tangon['__workletHash'] = option;
                option = _closure1_slot18;
                tangon['__initData'] = option;
                golfie = report.bind(golfie)(tangon);
                var _closure3_slot18 = golfie;
                report = _closure1_slot4;
                tangon = report.useMemo;
                zuuluu = new Array(3);
                zuuluu[0] = entity;
                entity = oscard.wrapper;
                zuuluu[1] = entity;
                entity = oscard.wrapperAnimationPresets;
                zuuluu[2] = entity;
                entity = function() {
                    zuuluu = _closure3_slot16;
                    entity = new Array(3);
                    entity[0] = zuuluu;
                    michal = _closure3_slot2;
                    zuuluu = michal.wrapper;
                    entity[1] = zuuluu;
                    michal = michal.wrapperAnimationPresets;
                    entity[2] = michal;
                    return entity;
                };
                zuuluu = tangon.bind(report)(entity, zuuluu);
                entity = new Array(2);
                entity[0] = zuuluu;
                tangon = report.useMemo;
                zuuluu = new Array(2);
                zuuluu[0] = golfie;
                oscard = oscard.mask;
                zuuluu[1] = oscard;
                michal = function() {
                    zuuluu = _closure3_slot18;
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    michal = _closure3_slot2;
                    michal = michal.mask;
                    entity[1] = michal;
                    return entity;
                };
                michal = tangon.bind(report)(michal, zuuluu);
                entity[1] = michal;
                return entity;
            }
        };
        option = report.bind(tangon)(option, oscard);
        oscard = _closure1_slot3;
        report = 2;
        oscard = oscard.bind(tangon)(option, report);
        report = 0;
        verify = oscard[report];
        report = 1;
        yankee = oscard[report];
        report = output[foxtra];
        oscard = romeon.bind(tangon)(report);
        report = oscard.useAnimatedStyle;
        zuuluu = function() { // Original name: b
            entity = {'flexDirection': 'column', 'backgroundColor': null, 'borderTopStartRadius': 0, 'borderTopEndRadius': 0, 'top': 0, 'overflow': 'hidden'};
            michal = _closure2_slot0;
            michal = michal.content;
            michal = michal.backgroundColor;
            entity['backgroundColor'] = michal;
            return entity;
        };
        option = {};
        option['styles'] = kiloes;
        zuuluu['__closure'] = option;
        option = 8557652955267.0;
        zuuluu['__workletHash'] = option;
        option = _closure1_slot20;
        zuuluu['__initData'] = option;
        result = report.bind(oscard)(zuuluu);
        report = _closure1_slot4;
        zuuluu = report.useContext;
        michal = output[michal];
        michal = sizing.bind(tangon)(michal);
        michal = zuuluu.bind(report)(michal);
        report = michal.wrapperOffset;
        oscard = michal.pipState;
        option = 19;
        michal = output[option];
        zuuluu = sizing.bind(tangon)(michal);
        michal = {};
        offset = true;
        michal['panGestureEnabled'] = offset;
        option = output[option];
        option = romeon.bind(tangon)(option);
        option = option.MorphablePanelModes;
        option = option.PIP;
        michal['mode'] = option;
        michal['pipState'] = oscard;
        michal['wrapperOffset'] = report;
        backup = zuuluu.bind(tangon)(michal);
        zuuluu = _closure1_slot11;
        entity = 20;
        entity = output[entity];
        entity = romeon.bind(tangon)(entity);
        michal = entity.LayerScope;
        entity = {};
        report = output[foxtra];
        report = sizing.bind(tangon)(report);
        oscard = report.View;
        report = {};
        report['style'] = golfie;
        golfie = 'box-none';
        report['pointerEvents'] = golfie;
        golfie = output[foxtra];
        golfie = sizing.bind(tangon)(golfie);
        option = golfie.View;
        golfie = {};
        golfie['style'] = verify;
        verify = output[foxtra];
        verify = sizing.bind(tangon)(verify);
        offset = verify.View;
        verify = {};
        verify['style'] = yankee;
        yankee = 21;
        yankee = output[yankee];
        yankee = romeon.bind(tangon)(yankee);
        romeon = yankee.GestureDetector;
        yankee = {};
        yankee['gesture'] = backup;
        foxtra = output[foxtra];
        foxtra = sizing.bind(tangon)(foxtra);
        backup = foxtra.View;
        foxtra = {};
        echoed = kiloes.content;
        kiloes = new Array(2);
        kiloes[0] = echoed;
        kiloes[1] = result;
        foxtra['style'] = kiloes;
        kiloes = 22;
        kiloes = output[kiloes];
        sizing = sizing.bind(tangon)(kiloes);
        kiloes = {};
        kiloes = zuuluu.bind(tangon)(sizing, kiloes);
        foxtra['children'] = kiloes;
        foxtra = zuuluu.bind(tangon)(backup, foxtra);
        yankee['children'] = foxtra;
        yankee = zuuluu.bind(tangon)(romeon, yankee);
        verify['children'] = yankee;
        verify = zuuluu.bind(tangon)(offset, verify);
        golfie['children'] = verify;
        golfie = zuuluu.bind(tangon)(option, golfie);
        report['children'] = golfie;
        report = zuuluu.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();