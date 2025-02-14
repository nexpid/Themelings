// app/modules/media_panel/native/MediaPlaybackPanelUI.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    offset = 0;
    tango = oscar[offset];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    romeo = 1;
    tango = oscar[romeo];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = oscar[romeo];
    tango = report.bind(entity)(tango);
    tango = tango.useContext;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS;
    var _closure1_slot7 = golf;
    tango = tango.MediaPlaybackPanelModes;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.IS_IOS;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.BORDER_RADIUS_PHYSICS;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['opacity'] = offset;
    tango['wrapperAnimationPresets'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'left': 0, 'zIndex': 1};
    tango['wrapper'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'overflow': 'hidden', 'borderWidth': 1};
    offset = 8;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.xl;
    verify['borderRadius'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.CHAT_BORDER;
    verify['borderColor'] = foxtrot;
    tango['mask'] = verify;
    verify = {};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.shadows;
    kilo = foxtrot.SHADOW_LOW_HOVER;
    sizing = verify;
    foxtrot = copyDataProperties(sizing, kilo);
    tango['maskElevation'] = verify;
    verify = {'xOffset': 0, 'yOffset': 0, 'shadowColorIos': '#000000', 'shadowOpacity': 0, 'shadowRadius': 0, 'elevation': 0, 'shadowColorAndroid': '#000000'};
    tango['maskEmptyElevation'] = verify;
    verify = {};
    verify['flex'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_FLOATING;
    verify['backgroundColor'] = offset;
    tango['content'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot12 = tango;
    tango = {};
    golf = 'function MediaPlaybackPanelUITsx1(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}';
    tango['code'] = golf;
    var _closure1_slot13 = tango;
    tango = {};
    golf = 'function MediaPlaybackPanelUITsx2(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;if(modeToSet===MediaPlaybackPanelModes.PIP){const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});}else if(modeToSet===MediaPlaybackPanelModes.DISMISSED){updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});}}';
    tango['code'] = golf;
    var _closure1_slot14 = tango;
    tango = {};
    golf = 'function MediaPlaybackPanelUITsx3(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}';
    tango['code'] = golf;
    var _closure1_slot15 = tango;
    tango = {};
    golf = 'function MediaPlaybackPanelUITsx4(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}';
    tango['code'] = golf;
    var _closure1_slot16 = tango;
    tango = {};
    golf = "function MediaPlaybackPanelUITsx5(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}";
    tango['code'] = golf;
    var _closure1_slot17 = tango;
    tango = {};
    golf = "function MediaPlaybackPanelUITsx6(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};}";
    tango['code'] = golf;
    var _closure1_slot18 = tango;
    tango = {};
    golf = "function MediaPlaybackPanelUITsx7(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};}";
    tango['code'] = golf;
    var _closure1_slot19 = tango;
    tango = {};
    golf = "function MediaPlaybackPanelUITsx8(){const{styles}=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};}";
    tango['code'] = golf;
    var _closure1_slot20 = tango;
    tango = 23;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_panel/native/MediaPlaybackPanelUI.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: MediaPlaybackPanelUI
        mike = _closure1_slot12;
        tango = undefined;
        kilo = mike.bind(tango)();
        var _closure2_slot0 = kilo;
        sizing = _closure1_slot1;
        output = _closure1_slot2;
        mike = 10;
        mike = output[mike];
        mike = sizing.bind(tango)(mike);
        yankee = mike.bind(tango)();
        var _closure2_slot1 = yankee;
        oscar = _closure1_slot5;
        mike = 11;
        report = output[mike];
        report = sizing.bind(tango)(report);
        report = oscar.bind(tango)(report);
        options = report.wrapperDimensions;
        oscar = report.wrapperOffset;
        romeo = _closure1_slot0;
        foxtrot = 12;
        report = output[foxtrot];
        verify = romeo.bind(tango)(report);
        golf = verify.useAnimatedStyle;
        report = function() { // Original name: p
            zulu = _closure2_slot1;
            mike = zulu.height;
            entity = {'position': 'absolute', 'top': 0, 'left': 0, 'width': null, 'height': null, 'overflow': 'hidden'};
            zulu = zulu.width;
            entity['width'] = zulu;
            entity['height'] = mike;
            return entity;
        };
        offset = {};
        offset['windowDimensions'] = yankee;
        report['__closure'] = offset;
        offset = 5768037716653.0;
        report['__workletHash'] = offset;
        offset = _closure1_slot19;
        report['__initData'] = offset;
        golf = golf.bind(verify)(report);
        report = function(argFoo, argBar) { // Original name: useWrapperStyles
            _fun122630: for(var _fun122630_ip = 0; ; ) switch(_fun122630_ip) {
 0:
                kilo = argFoo;
                sequence = argBar;
                var _closure3_slot0 = kilo;
                var _closure3_slot1 = sequence;
                entity = _closure1_slot12;
                foxtrot = undefined;
                oscar = entity.bind(foxtrot)();
                var _closure3_slot2 = oscar;
                sizing = _closure1_slot1;
                control = _closure1_slot2;
                entity = 9;
                entity = control[entity];
                entity = sizing.bind(foxtrot)(entity);
                echo = entity.bind(foxtrot)();
                var _closure3_slot3 = echo;
                entity = 10;
                entity = control[entity];
                entity = sizing.bind(foxtrot)(entity);
                vacuum = entity.bind(foxtrot)();
                var _closure3_slot4 = vacuum;
                report = _closure1_slot4;
                tango = report.useContext;
                entity = 11;
                entity = control[entity];
                entity = sizing.bind(foxtrot)(entity);
                entity = tango.bind(report)(entity);
                report = entity.mode;
                var _closure3_slot5 = report;
                romeo = entity.pipState;
                var _closure3_slot6 = romeo;
                config = entity.pipAvoidanceSpecs;
                var _closure3_slot7 = config;
                golf = entity.canShowPIP;
                var _closure3_slot8 = golf;
                source = _closure1_slot0;
                tango = 12;
                entity = control[tango];
                offset = source.bind(foxtrot)(entity);
                verify = offset.useAnimatedReaction;
                options = function() { // Original name: u
                    entity = {};
                    tango = _closure3_slot5;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    entity['mode'] = zulu;
                    zulu = _closure3_slot4;
                    entity['windowDimensions'] = zulu;
                    zulu = _closure3_slot8;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    entity['canShowPIP'] = mike;
                    return entity;
                };
                entity = {};
                entity['mode'] = report;
                entity['windowDimensions'] = vacuum;
                entity['canShowPIP'] = golf;
                options['__closure'] = entity;
                entity = 4412661953046.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot13;
                options['__initData'] = entity;
                golf = function(argFoo, argBar) { // Original name: p
                    _fun122632: for(var _fun122632_ip = 0; ; ) switch(_fun122632_ip) {
 0:
                        zulu = argFoo;
                        golf = argBar;
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        entity = 13;
                        tango = tango[entity];
                        entity = undefined;
                        oscar = report.bind(entity)(tango);
                        report = oscar.cheapWorkletShallowEqual;
                        tango = null;
                        options = tango != golf;
                        tango = undefined;
                        if(!options) { _fun122632_ip = 51; continue _fun122632 }
 48:
                        tango = golf;
 51:
                        tango = report.bind(oscar)(zulu, tango);
                        if(tango) { _fun122632_ip = 239; continue _fun122632 }
 63:
                        report = zulu.mode;
                        golf = zulu.windowDimensions;
                        zulu = zulu.canShowPIP;
                        tango = _closure1_slot8;
                        tango = tango.PIP;
                        if(!(report !== tango)) { _fun122632_ip = 157; continue _fun122632 }
 94:
                        tango = _closure1_slot8;
                        tango = tango.DISMISSED;
                        if(!(report === tango)) { _fun122632_ip = 239; continue _fun122632 }
 111:
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        tango = 14;
                        tango = oscar[tango];
                        oscar = report.bind(entity)(tango);
                        report = _closure3_slot1;
                        tango = {};
                        golf = golf.height;
                        tango['y'] = golf;
                        tango = oscar.bind(entity)(report, tango);
                        _fun122632_ip = 239; continue _fun122632;
 157:
                        if(zulu) { _fun122632_ip = 172; continue _fun122632 }
 160:
                        zulu = {'width': 0, 'height': 0};
                        _fun122632_ip = 186; continue _fun122632;
 172:
                        zulu = {'width': 120, 'height': 120};
 186:
                        oscar = zulu.width;
                        report = zulu.height;
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 14;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = _closure3_slot0;
                        mike = {};
                        mike['width'] = oscar;
                        mike['height'] = report;
                        mike = tango.bind(entity)(zulu, mike);
 239:
                        return entity;
                    }
                };
                yankee = {};
                update = 13;
                entity = control[update];
                entity = source.bind(foxtrot)(entity);
                entity = entity.cheapWorkletShallowEqual;
                yankee['cheapWorkletShallowEqual'] = entity;
                entity = _closure1_slot8;
                yankee['MediaPlaybackPanelModes'] = entity;
                backup = 14;
                backup = control[backup];
                backup = sizing.bind(foxtrot)(backup);
                yankee['updateSharedValueIfChanged'] = backup;
                yankee['wrapperDimensions'] = kilo;
                yankee['wrapperOffset'] = sequence;
                golf['__closure'] = yankee;
                yankee = 8412437178561.0;
                golf['__workletHash'] = yankee;
                yankee = _closure1_slot14;
                golf['__initData'] = yankee;
                golf = verify.bind(offset)(options, golf);
                golf = control[tango];
                options = source.bind(foxtrot)(golf);
                golf = options.useSharedValue;
                verify = 0;
                output = golf.bind(options)(verify);
                var _closure3_slot9 = output;
                golf = control[tango];
                options = source.bind(foxtrot)(golf);
                golf = options.useSharedValue;
                sizing = golf.bind(options)(verify);
                var _closure3_slot10 = sizing;
                golf = control[tango];
                options = source.bind(foxtrot)(golf);
                golf = options.useSharedValue;
                result = golf.bind(options)(verify);
                var _closure3_slot11 = result;
                golf = control[tango];
                verify = source.bind(foxtrot)(golf);
                options = verify.useSharedValue;
                golf = false;
                yankee = options.bind(verify)(golf);
                var _closure3_slot12 = yankee;
                options = _closure1_slot6;
                golf = function(argFoo) {
                    mike = argFoo;
                    entity = mike.shouldDisableSafeAreas;
                    entity = entity.bind(mike)();
                    return entity;
                };
                backup = options.bind(foxtrot)(golf);
                var _closure3_slot13 = backup;
                golf = control[tango];
                offset = source.bind(foxtrot)(golf);
                verify = offset.useAnimatedReaction;
                options = function() { // Original name: R
                    entity = {};
                    tango = _closure3_slot5;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    entity['mode'] = zulu;
                    tango = _closure3_slot0;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    entity['wrapperDimensions'] = zulu;
                    tango = _closure3_slot7;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    entity['pipAvoidanceSpecs'] = zulu;
                    tango = _closure3_slot1;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    entity['wrapperOffset'] = zulu;
                    zulu = _closure3_slot4;
                    entity['windowDimensions'] = zulu;
                    zulu = _closure3_slot3;
                    entity['safeArea'] = zulu;
                    zulu = _closure3_slot6;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    entity['pipState'] = mike;
                    return entity;
                };
                golf = {};
                golf['mode'] = report;
                golf['wrapperDimensions'] = kilo;
                golf['pipAvoidanceSpecs'] = config;
                golf['wrapperOffset'] = sequence;
                golf['windowDimensions'] = vacuum;
                golf['safeArea'] = echo;
                golf['pipState'] = romeo;
                options['__closure'] = golf;
                golf = 4950432193502.0;
                options['__workletHash'] = golf;
                golf = _closure1_slot15;
                options['__initData'] = golf;
                golf = function(argFoo, argBar) { // Original name: C
                    _fun122635: for(var _fun122635_ip = 0; ; ) switch(_fun122635_ip) {
 0:
                        tango = argFoo;
                        zulu = argBar;
                        report = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        golf = report.bind(entity)(mike);
                        oscar = golf.cheapWorkletShallowEqual;
                        report = null;
                        verify = report != zulu;
                        mike = undefined;
                        if(!verify) { _fun122635_ip = 51; continue _fun122635 }
 48:
                        mike = zulu;
 51:
                        mike = oscar.bind(golf)(tango, mike);
                        if(mike) { _fun122635_ip = 468; continue _fun122635 }
 63:
                        verify = tango.mode;
                        offset = tango.wrapperDimensions;
                        kilo = tango.pipAvoidanceSpecs;
                        mike = tango.wrapperOffset;
                        foxtrot = tango.windowDimensions;
                        tango = tango.pipState;
                        sizing = mike.gestureActive;
                        yankee = tango.x;
                        golf = tango.y;
                        tango = _closure1_slot8;
                        tango = tango.PIP;
                        if(!(tango !== verify)) { _fun122635_ip = 180; continue _fun122635 }
 128:
                        tango = _closure1_slot8;
                        backup = tango.DISMISSED;
                        romeo = 0;
                        oscar = 0;
                        tango = 0;
                        if(!(backup === verify)) { _fun122635_ip = 320; continue _fun122635 }
 151:
                        tango = offset.height;
                        output = _closure3_slot11;
                        backup = output.set;
                        backup = backup.bind(output)(romeo);
                        oscar = 0;
                        _fun122635_ip = 320; continue _fun122635;
 180:
                        romeo = _closure1_slot0;
                        backup = _closure1_slot2;
                        offset = 15;
                        offset = backup[offset];
                        backup = romeo.bind(entity)(offset);
                        romeo = backup.getClampedPIPPosition;
                        offset = {};
                        offset['pipX'] = yankee;
                        offset['pipY'] = golf;
                        output = 120;
                        offset['width'] = output;
                        offset['height'] = output;
                        offset['windowDimensions'] = foxtrot;
                        output = _closure3_slot3;
                        offset['safeArea'] = output;
                        output = kilo.bottom;
                        offset['bottomAvoidanceRegion'] = output;
                        kilo = kilo.top;
                        offset['topAvoidanceRegion'] = kilo;
                        kilo = undefined;
                        if(!sizing) { _fun122635_ip = 274; continue _fun122635 }
 271:
                        kilo = mike;
 274:
                        offset['positionOffset'] = kilo;
                        kilo = _closure3_slot13;
                        offset['disableHorizontalSafeAreas'] = kilo;
                        offset = romeo.bind(backup)(offset);
                        oscar = offset.x;
                        tango = offset.y;
                        kilo = _closure3_slot11;
                        backup = kilo.set;
                        foxtrot = 1;
                        foxtrot = backup.bind(kilo)(foxtrot);
 320:
                        romeo = report == zulu;
                        offset = undefined;
                        if(romeo) { _fun122635_ip = 335; continue _fun122635 }
 329:
                        offset = zulu.pipState;
 335:
                        romeo = report == offset;
                        zulu = undefined;
                        if(romeo) { _fun122635_ip = 349; continue _fun122635 }
 344:
                        zulu = offset.x;
 349:
                        zulu = yankee !== zulu;
                        if(zulu) { _fun122635_ip = 374; continue _fun122635 }
 356:
                        yankee = report == offset;
                        report = undefined;
                        if(yankee) { _fun122635_ip = 370; continue _fun122635 }
 365:
                        report = offset.y;
 370:
                        zulu = golf !== report;
 374:
                        report = _closure1_slot8;
                        report = report.PIP;
                        golf = verify === report;
                        if(!golf) { _fun122635_ip = 394; continue _fun122635 }
 391:
                        golf = zulu;
 394:
                        if(!golf) { _fun122635_ip = 406; continue _fun122635 }
 397:
                        mike = mike.gestureActive;
                        golf = !mike;
 406:
                        report = _closure3_slot12;
                        zulu = report.set;
                        if(golf) { _fun122635_ip = 435; continue _fun122635 }
 421:
                        options = _closure1_slot8;
                        options = options.PIP;
                        golf = verify !== options;
 435:
                        zulu = zulu.bind(report)(golf);
                        report = _closure3_slot9;
                        zulu = report.set;
                        zulu = zulu.bind(report)(oscar);
                        zulu = _closure3_slot10;
                        mike = zulu.set;
                        mike = mike.bind(zulu)(tango);
 468:
                        return entity;
                    }
                };
                romeo = {};
                update = control[update];
                update = source.bind(foxtrot)(update);
                update = update.cheapWorkletShallowEqual;
                romeo['cheapWorkletShallowEqual'] = update;
                romeo['MediaPlaybackPanelModes'] = entity;
                update = 15;
                update = control[update];
                update = source.bind(foxtrot)(update);
                update = update.getClampedPIPPosition;
                romeo['getClampedPIPPosition'] = update;
                romeo['safeArea'] = echo;
                romeo['disableHorizontalSafeAreas'] = backup;
                romeo['wrapperOpacity'] = result;
                romeo['animateWrapperTranslation'] = yankee;
                romeo['wrapperTranslationX'] = output;
                romeo['wrapperTranslationY'] = sizing;
                golf['__closure'] = romeo;
                romeo = 10793489581273.0;
                golf['__workletHash'] = romeo;
                romeo = _closure1_slot16;
                golf['__initData'] = romeo;
                golf = verify.bind(offset)(options, golf);
                golf = report.get;
                golf = golf.bind(report)();
                entity = entity.PIP;
                if(!(golf === entity)) { _fun122630_ip = 687; continue _fun122630 }
 680:
                entity = _closure1_slot9;
                if(entity) { _fun122630_ip = 695; continue _fun122630 }
 687:
                offset = oscar.maskEmptyElevation;
                _fun122630_ip = 701; continue _fun122630;
 695:
                offset = oscar.maskElevation;
 701:
                var _closure3_slot14 = offset;
                entity = report.get;
                report = entity.bind(report)();
                entity = _closure1_slot8;
                entity = entity.PIP;
                if(!(report === entity)) { _fun122630_ip = 743; continue _fun122630 }
 728:
                entity = _closure1_slot9;
                if(entity) { _fun122630_ip = 743; continue _fun122630 }
 735:
                verify = oscar.maskElevation;
                _fun122630_ip = 749; continue _fun122630;
 743:
                verify = oscar.maskEmptyElevation;
 749:
                var _closure3_slot15 = verify;
                romeo = _closure1_slot0;
                backup = _closure1_slot2;
                entity = backup[tango];
                golf = romeo.bind(foxtrot)(entity);
                report = golf.useAnimatedStyle;
                entity = function() { // Original name: L
                    _fun122636: for(var _fun122636_ip = 0; ; ) switch(_fun122636_ip) {
 0:
                        oscar = _closure1_slot0;
                        options = _closure1_slot2;
                        entity = 16;
                        entity = options[entity];
                        offset = undefined;
                        report = oscar.bind(offset)(entity);
                        tango = report.withTiming;
                        zulu = _closure3_slot11;
                        entity = zulu.get;
                        zulu = entity.bind(zulu)();
                        entity = 17;
                        entity = options[entity];
                        entity = oscar.bind(offset)(entity);
                        entity = entity.timingFast;
                        romeo = 'respect-motion-settings';
                        zulu = tango.bind(report)(zulu, entity, romeo);
                        entity = {};
                        report = {};
                        oscar = _closure3_slot12;
                        tango = oscar.get;
                        tango = tango.bind(oscar)();
                        if(tango) { _fun122636_ip = 112; continue _fun122636 }
 97:
                        oscar = _closure3_slot9;
                        tango = oscar.get;
                        tango = tango.bind(oscar)();
                        _fun122636_ip = 167; continue _fun122636;
 112:
                        options = _closure1_slot0;
                        verify = _closure1_slot2;
                        oscar = 18;
                        oscar = verify[oscar];
                        foxtrot = options.bind(offset)(oscar);
                        yankee = foxtrot.withSpring;
                        options = _closure3_slot9;
                        oscar = options.get;
                        verify = oscar.bind(options)();
                        options = _closure1_slot7;
                        oscar = 'animate-always';
                        tango = yankee.bind(foxtrot)(verify, options, oscar);
 167:
                        report['translateX'] = tango;
                        tango = new Array(2);
                        tango[0] = report;
                        report = {};
                        options = _closure3_slot12;
                        oscar = options.get;
                        oscar = oscar.bind(options)();
                        if(oscar) { _fun122636_ip = 213; continue _fun122636 }
 198:
                        options = _closure3_slot10;
                        oscar = options.get;
                        oscar = oscar.bind(options)();
                        _fun122636_ip = 287; continue _fun122636;
 213:
                        verify = _closure1_slot0;
                        yankee = _closure1_slot2;
                        options = 18;
                        options = yankee[options];
                        yankee = verify.bind(offset)(options);
                        offset = yankee.withSpring;
                        verify = _closure3_slot10;
                        options = verify.get;
                        verify = options.bind(verify)();
                        options = _closure1_slot7;
                        foxtrot = _closure3_slot12;
                        golf = foxtrot.get;
                        foxtrot = golf.bind(foxtrot)();
                        golf = 'animate-never';
                        if(!foxtrot) { _fun122636_ip = 280; continue _fun122636 }
 277:
                        golf = romeo;
 280:
                        oscar = offset.bind(yankee)(verify, options, golf);
 287:
                        report['translateY'] = oscar;
                        tango[1] = report;
                        entity['transform'] = tango;
                        entity['opacity'] = zulu;
                        tango = _closure3_slot0;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        zulu = zulu.width;
                        entity['width'] = zulu;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        zulu = zulu.height;
                        entity['height'] = zulu;
                        kilo = _closure3_slot14;
                        sizing = entity;
                        mike = copyDataProperties(sizing, kilo);
                        return entity;
                    }
                };
                options = {};
                echo = 16;
                echo = backup[echo];
                echo = romeo.bind(foxtrot)(echo);
                echo = echo.withTiming;
                options['withTiming'] = echo;
                options['wrapperOpacity'] = result;
                result = 17;
                result = backup[result];
                result = romeo.bind(foxtrot)(result);
                result = result.timingFast;
                options['timingFast'] = result;
                options['animateWrapperTranslation'] = yankee;
                yankee = 18;
                result = backup[yankee];
                result = romeo.bind(foxtrot)(result);
                result = result.withSpring;
                options['withSpring'] = result;
                options['wrapperTranslationX'] = output;
                output = _closure1_slot7;
                options['MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS'] = output;
                options['wrapperTranslationY'] = sizing;
                options['wrapperDimensions'] = kilo;
                options['wrapperElevationStyles'] = offset;
                entity['__closure'] = options;
                options = 11049335639852.0;
                entity['__workletHash'] = options;
                options = _closure1_slot17;
                entity['__initData'] = options;
                entity = report.bind(golf)(entity);
                var _closure3_slot16 = entity;
                golf = _closure1_slot1;
                report = 8;
                report = backup[report];
                report = golf.bind(foxtrot)(report);
                report = report.radii;
                offset = report.xl;
                var _closure3_slot17 = offset;
                tango = backup[tango];
                golf = romeo.bind(foxtrot)(tango);
                report = golf.useAnimatedStyle;
                tango = function() { // Original name: B
                    entity = {};
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 18;
                    tango = tango[mike];
                    mike = undefined;
                    golf = report.bind(mike)(tango);
                    oscar = golf.withSpring;
                    report = _closure3_slot17;
                    tango = _closure1_slot10;
                    zulu = 'animate-always';
                    zulu = oscar.bind(golf)(report, tango, zulu);
                    entity['borderRadius'] = zulu;
                    verify = _closure3_slot15;
                    offset = entity;
                    mike = copyDataProperties(offset, verify);
                    return entity;
                };
                options = {};
                yankee = backup[yankee];
                yankee = romeo.bind(foxtrot)(yankee);
                yankee = yankee.withSpring;
                options['withSpring'] = yankee;
                options['borderRadius'] = offset;
                offset = _closure1_slot10;
                options['BORDER_RADIUS_PHYSICS'] = offset;
                options['maskElevationStyles'] = verify;
                tango['__closure'] = options;
                options = 7035830192327.0;
                tango['__workletHash'] = options;
                options = _closure1_slot18;
                tango['__initData'] = options;
                golf = report.bind(golf)(tango);
                var _closure3_slot18 = golf;
                report = _closure1_slot4;
                tango = report.useMemo;
                zulu = new Array(3);
                zulu[0] = entity;
                entity = oscar.wrapper;
                zulu[1] = entity;
                entity = oscar.wrapperAnimationPresets;
                zulu[2] = entity;
                entity = function() {
                    zulu = _closure3_slot16;
                    entity = new Array(3);
                    entity[0] = zulu;
                    mike = _closure3_slot2;
                    zulu = mike.wrapper;
                    entity[1] = zulu;
                    mike = mike.wrapperAnimationPresets;
                    entity[2] = mike;
                    return entity;
                };
                zulu = tango.bind(report)(entity, zulu);
                entity = new Array(2);
                entity[0] = zulu;
                tango = report.useMemo;
                zulu = new Array(2);
                zulu[0] = golf;
                oscar = oscar.mask;
                zulu[1] = oscar;
                mike = function() {
                    zulu = _closure3_slot18;
                    entity = new Array(2);
                    entity[0] = zulu;
                    mike = _closure3_slot2;
                    mike = mike.mask;
                    entity[1] = mike;
                    return entity;
                };
                mike = tango.bind(report)(mike, zulu);
                entity[1] = mike;
                return entity;
            }
        };
        options = report.bind(tango)(options, oscar);
        oscar = _closure1_slot3;
        report = 2;
        oscar = oscar.bind(tango)(options, report);
        report = 0;
        verify = oscar[report];
        report = 1;
        yankee = oscar[report];
        report = output[foxtrot];
        oscar = romeo.bind(tango)(report);
        report = oscar.useAnimatedStyle;
        zulu = function() { // Original name: b
            entity = {'flexDirection': 'column', 'backgroundColor': null, 'borderTopStartRadius': 0, 'borderTopEndRadius': 0, 'top': 0, 'overflow': 'hidden'};
            mike = _closure2_slot0;
            mike = mike.content;
            mike = mike.backgroundColor;
            entity['backgroundColor'] = mike;
            return entity;
        };
        options = {};
        options['styles'] = kilo;
        zulu['__closure'] = options;
        options = 8557652955267.0;
        zulu['__workletHash'] = options;
        options = _closure1_slot20;
        zulu['__initData'] = options;
        result = report.bind(oscar)(zulu);
        report = _closure1_slot4;
        zulu = report.useContext;
        mike = output[mike];
        mike = sizing.bind(tango)(mike);
        mike = zulu.bind(report)(mike);
        report = mike.wrapperOffset;
        oscar = mike.pipState;
        options = 19;
        mike = output[options];
        zulu = sizing.bind(tango)(mike);
        mike = {};
        offset = true;
        mike['panGestureEnabled'] = offset;
        options = output[options];
        options = romeo.bind(tango)(options);
        options = options.MorphablePanelModes;
        options = options.PIP;
        mike['mode'] = options;
        mike['pipState'] = oscar;
        mike['wrapperOffset'] = report;
        backup = zulu.bind(tango)(mike);
        zulu = _closure1_slot11;
        entity = 20;
        entity = output[entity];
        entity = romeo.bind(tango)(entity);
        mike = entity.LayerScope;
        entity = {};
        report = output[foxtrot];
        report = sizing.bind(tango)(report);
        oscar = report.View;
        report = {};
        report['style'] = golf;
        golf = 'box-none';
        report['pointerEvents'] = golf;
        golf = output[foxtrot];
        golf = sizing.bind(tango)(golf);
        options = golf.View;
        golf = {};
        golf['style'] = verify;
        verify = output[foxtrot];
        verify = sizing.bind(tango)(verify);
        offset = verify.View;
        verify = {};
        verify['style'] = yankee;
        yankee = 21;
        yankee = output[yankee];
        yankee = romeo.bind(tango)(yankee);
        romeo = yankee.GestureDetector;
        yankee = {};
        yankee['gesture'] = backup;
        foxtrot = output[foxtrot];
        foxtrot = sizing.bind(tango)(foxtrot);
        backup = foxtrot.View;
        foxtrot = {};
        echo = kilo.content;
        kilo = new Array(2);
        kilo[0] = echo;
        kilo[1] = result;
        foxtrot['style'] = kilo;
        kilo = 22;
        kilo = output[kilo];
        sizing = sizing.bind(tango)(kilo);
        kilo = {};
        kilo = zulu.bind(tango)(sizing, kilo);
        foxtrot['children'] = kilo;
        foxtrot = zulu.bind(tango)(backup, foxtrot);
        yankee['children'] = foxtrot;
        yankee = zulu.bind(tango)(romeo, yankee);
        verify['children'] = yankee;
        verify = zulu.bind(tango)(offset, verify);
        golf['children'] = verify;
        golf = zulu.bind(tango)(options, golf);
        report['children'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();