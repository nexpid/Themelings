// app/modules/soundboard/native/SoundButton.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun103512: for(var _fun103512_ip = 0; ; ) switch(_fun103512_ip) {
 0:
        report = argBar;
        verify = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = verify;
        var _closure1_slot2 = oscar;
        entity = global;
        options = entity.Object;
        golf = options.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(options)(zulu, entity, tango);
        entity = 0;
        golf = oscar[entity];
        tango = argCorge;
        entity = undefined;
        options = tango.bind(entity)(golf);
        var _closure1_slot3 = options;
        tango = 1;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        yankee = tango.View;
        var _closure1_slot4 = yankee;
        tango = 2;
        tango = oscar[tango];
        tango = verify.bind(entity)(tango);
        var _closure1_slot5 = tango;
        tango = 3;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        foxtrot = tango.SOUND_BUTTON_HEIGHT;
        tango = 4;
        golf = oscar[tango];
        golf = report.bind(entity)(golf);
        golf = golf.jsx;
        var _closure1_slot6 = golf;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.jsxs;
        var _closure1_slot7 = tango;
        golf = 5;
        tango = oscar[golf];
        offset = verify.bind(entity)(tango);
        tango = offset.createAnimatedComponent;
        tango = tango.bind(offset)(yankee);
        var _closure1_slot8 = tango;
        tango = {'damping': 10, 'stiffness': 300, 'mass': 1};
        var _closure1_slot9 = tango;
        kilo = 6;
        tango = oscar[kilo];
        romeo = report.bind(entity)(tango);
        yankee = romeo.createStyles;
        offset = {};
        tango = {'marginTop': 4, 'height': null, 'backgroundColor': null, 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center', 'borderRadius': null, 'borderWidth': 1};
        tango['height'] = foxtrot;
        backup = 7;
        foxtrot = oscar[backup];
        foxtrot = verify.bind(entity)(foxtrot);
        foxtrot = foxtrot.colors;
        foxtrot = foxtrot.CARD_PRIMARY_BG;
        tango['backgroundColor'] = foxtrot;
        foxtrot = oscar[backup];
        foxtrot = verify.bind(entity)(foxtrot);
        foxtrot = foxtrot.radii;
        foxtrot = foxtrot.lg;
        tango['borderRadius'] = foxtrot;
        foxtrot = oscar[backup];
        foxtrot = verify.bind(entity)(foxtrot);
        foxtrot = foxtrot.colors;
        foxtrot = foxtrot.BORDER_FAINT;
        tango['borderColor'] = foxtrot;
        foxtrot = oscar[backup];
        foxtrot = verify.bind(entity)(foxtrot);
        foxtrot = foxtrot.shadows;
        update = foxtrot.SHADOW_LOW;
        source = tango;
        foxtrot = copyDataProperties(source, update);
        offset['button'] = tango;
        tango = {};
        foxtrot = oscar[backup];
        foxtrot = verify.bind(entity)(foxtrot);
        foxtrot = foxtrot.colors;
        foxtrot = foxtrot.CARD_PRIMARY_PRESSED_BG;
        tango['backgroundColor'] = foxtrot;
        offset['buttonPressed'] = tango;
        tango = {};
        foxtrot = 0.5;
        tango['opacity'] = foxtrot;
        offset['buttonDisabled'] = tango;
        tango = {'borderStyle': 'solid', 'borderWidth': 2};
        foxtrot = oscar[backup];
        foxtrot = verify.bind(entity)(foxtrot);
        foxtrot = foxtrot.colors;
        foxtrot = foxtrot.STATUS_SPEAKING;
        tango['borderColor'] = foxtrot;
        foxtrot = oscar[backup];
        foxtrot = verify.bind(entity)(foxtrot);
        foxtrot = foxtrot.colors;
        foxtrot = foxtrot.CARD_SECONDARY_BG;
        tango['backgroundColor'] = foxtrot;
        offset['buttonPlaying'] = tango;
        foxtrot = {'height': 24, 'width': 24, 'fontSize': null, 'lineHeight': 28};
        output = 24;
        sizing = 8;
        tango = oscar[sizing];
        result = report.bind(entity)(tango);
        tango = result.isIOS;
        result = tango.bind(result)();
        tango = undefined;
        if(!result) { _fun103512_ip = 536; continue _fun103512 }
 533:
        tango = output;
 536:
        foxtrot['fontSize'] = tango;
        tango = 28;
        offset['emoji'] = foxtrot;
        foxtrot = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': 40, 'width': 40, 'backgroundColor': null, 'backgroundSize': 32, 'borderRadius': null, 'marginBottom': 8};
        output = oscar[backup];
        output = verify.bind(entity)(output);
        output = output.colors;
        output = output.BG_MOD_FAINT;
        foxtrot['backgroundColor'] = output;
        output = oscar[backup];
        output = verify.bind(entity)(output);
        output = output.radii;
        output = output.round;
        foxtrot['borderRadius'] = output;
        offset['emojiWrapper'] = foxtrot;
        foxtrot = {'width': '100%', 'height': '100%'};
        output = oscar[backup];
        output = verify.bind(entity)(output);
        output = output.radii;
        output = output.round;
        foxtrot['borderRadius'] = output;
        offset['emojiBackground'] = foxtrot;
        foxtrot = {};
        output = oscar[backup];
        output = verify.bind(entity)(output);
        output = output.colors;
        output = output.CHANNEL_ICON;
        foxtrot['color'] = output;
        offset['defaultSoundboardIcon'] = foxtrot;
        foxtrot = {};
        foxtrot['marginHorizontal'] = sizing;
        offset['text'] = foxtrot;
        foxtrot = {};
        foxtrot['marginHorizontal'] = kilo;
        offset['textPlaying'] = foxtrot;
        foxtrot = {'position': 'absolute', 'top': null, 'end': null, 'width': 12, 'height': 12};
        kilo = oscar[backup];
        kilo = verify.bind(entity)(kilo);
        kilo = kilo.spacing;
        kilo = kilo.PX_12;
        foxtrot['top'] = kilo;
        kilo = oscar[backup];
        kilo = verify.bind(entity)(kilo);
        kilo = kilo.spacing;
        kilo = kilo.PX_12;
        foxtrot['end'] = kilo;
        backup = oscar[backup];
        backup = verify.bind(entity)(backup);
        backup = backup.colors;
        backup = backup.WHITE;
        foxtrot['tintColor'] = backup;
        offset['lock'] = foxtrot;
        offset = yankee.bind(romeo)(offset);
        var _closure1_slot10 = offset;
        golf = oscar[golf];
        offset = verify.bind(entity)(golf);
        verify = offset.createAnimatedComponent;
        golf = 9;
        golf = oscar[golf];
        golf = report.bind(entity)(golf);
        golf = golf.PressableOpacity;
        golf = verify.bind(offset)(golf);
        var _closure1_slot11 = golf;
        golf = {};
        verify = 'function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+"deg"}]};}';
        golf['code'] = verify;
        var _closure1_slot12 = golf;
        golf = function(argFoo) { // Original name: useAnimation
            offset = argFoo;
            var _closure2_slot0 = offset;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 5;
            mike = verify[oscar];
            golf = undefined;
            zulu = options.bind(golf)(mike);
            mike = zulu.useAnimatedStyle;
            entity = function() { // Original name: t
                _fun103514: for(var _fun103514_ip = 0; ; ) switch(_fun103514_ip) {
 0:
                    entity = _closure2_slot0;
                    mike = entity.sharedValues;
                    zulu = mike.pressed;
                    mike = zulu.get;
                    foxtrot = mike.bind(zulu)();
                    mike = entity.sharedValues;
                    zulu = mike.playing;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    tango = 0;
                    yankee = mike > tango;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    options = 5;
                    mike = mike[options];
                    report = undefined;
                    output = zulu.bind(report)(mike);
                    sizing = output.withDelay;
                    entity = entity.playingAnimationDelay;
                    verify = null;
                    mike = verify != entity;
                    golf = 0;
                    if(!mike) { _fun103514_ip = 106; continue _fun103514 }
 103:
                    golf = entity;
 106:
                    kilo = _closure1_slot0;
                    backup = _closure1_slot2;
                    mike = 10;
                    entity = backup[mike];
                    echo = kilo.bind(report)(entity);
                    result = echo.withSpring;
                    entity = backup[options];
                    control = kilo.bind(report)(entity);
                    source = control.interpolate;
                    entity = _closure2_slot0;
                    zulu = entity.sharedValues;
                    romeo = zulu.playing;
                    zulu = romeo.get;
                    update = zulu.bind(romeo)();
                    zulu = entity.scaleFactors;
                    zulu = zulu.playing;
                    romeo = [1];
                    romeo[1] = zulu;
                    zulu = [0, 1];
                    zulu = source.bind(control)(update, zulu, romeo);
                    romeo = _closure1_slot9;
                    zulu = result.bind(echo)(zulu, romeo);
                    golf = sizing.bind(output)(golf, zulu);
                    mike = backup[mike];
                    zulu = kilo.bind(report)(mike);
                    mike = zulu.withSpring;
                    backup = backup[options];
                    output = kilo.bind(report)(backup);
                    sizing = output.interpolate;
                    backup = entity.sharedValues;
                    kilo = backup.pressed;
                    backup = kilo.get;
                    kilo = backup.bind(kilo)();
                    entity = entity.scaleFactors;
                    entity = entity.pressed;
                    backup = [1];
                    backup[1] = entity;
                    entity = [0, 1];
                    entity = sizing.bind(output)(kilo, entity, backup);
                    romeo = mike.bind(zulu)(entity, romeo);
                    entity = {};
                    zulu = {};
                    mike = romeo;
                    if(!(tango === foxtrot)) { _fun103514_ip = 349; continue _fun103514 }
 340:
                    mike = romeo;
                    if(!yankee) { _fun103514_ip = 349; continue _fun103514 }
 346:
                    mike = golf;
 349:
                    zulu['scale'] = mike;
                    mike = new Array(2);
                    mike[0] = zulu;
                    zulu = {};
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    oscar = oscar[options];
                    options = golf.bind(report)(oscar);
                    golf = options.interpolate;
                    yankee = _closure2_slot0;
                    oscar = yankee.sharedValues;
                    romeo = oscar.pressed;
                    oscar = romeo.get;
                    oscar = oscar.bind(romeo)();
                    yankee = verify == yankee;
                    report = undefined;
                    if(yankee) { _fun103514_ip = 431; continue _fun103514 }
 421:
                    offset = _closure2_slot0;
                    report = offset.pressedRotationDegrees;
 431:
                    verify = verify != report;
                    tango = 0;
                    if(!verify) { _fun103514_ip = 443; continue _fun103514 }
 440:
                    tango = report;
 443:
                    report = [0];
                    report[1] = tango;
                    tango = [0, 1];
                    golf = golf.bind(options)(oscar, tango, report);
                    tango = global;
                    tango = tango.HermesInternal;
                    oscar = tango.concat;
                    report = '';
                    tango = 'deg';
                    tango = oscar.bind(report)(golf, tango);
                    zulu['rotate'] = tango;
                    mike[1] = zulu;
                    entity['transform'] = mike;
                    return entity;
                }
            };
            report = {};
            report['animationConfig'] = offset;
            offset = verify[oscar];
            offset = options.bind(golf)(offset);
            offset = offset.withDelay;
            report['withDelay'] = offset;
            offset = 10;
            offset = verify[offset];
            offset = options.bind(golf)(offset);
            offset = offset.withSpring;
            report['withSpring'] = offset;
            oscar = verify[oscar];
            oscar = options.bind(golf)(oscar);
            oscar = oscar.interpolate;
            report['interpolate'] = oscar;
            oscar = _closure1_slot9;
            report['SPRING_CONFIG'] = oscar;
            entity['__closure'] = report;
            report = 13932429225740.0;
            entity['__workletHash'] = report;
            tango = _closure1_slot12;
            entity['__initData'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        var _closure1_slot13 = golf;
        golf = function(argFoo) { // Original name: SoundButtonEmoji
            _fun103515: for(var _fun103515_ip = 0; ; ) switch(_fun103515_ip) {
 0:
                entity = argFoo;
                options = entity.sound;
                zulu = entity.sharedValues;
                entity = _closure1_slot10;
                tango = undefined;
                verify = entity.bind(tango)();
                mike = _closure1_slot13;
                entity = {};
                entity['sharedValues'] = zulu;
                report = {'pressed': 0.8, 'playing': 1.2};
                entity['scaleFactors'] = report;
                offset = mike.bind(tango)(entity);
                mike = _closure1_slot13;
                entity = {};
                entity['sharedValues'] = zulu;
                zulu = {'pressed': 0.7200000000000001, 'playing': 1.08};
                entity['scaleFactors'] = zulu;
                zulu = 100;
                entity['playingAnimationDelay'] = zulu;
                zulu = -15;
                entity['pressedRotationDegrees'] = zulu;
                golf = mike.bind(tango)(entity);
                zulu = _closure1_slot6;
                mike = _closure1_slot8;
                entity = {};
                yankee = verify.emojiWrapper;
                report = new Array(2);
                report[0] = yankee;
                report[1] = offset;
                entity['style'] = report;
                report = {};
                report['style'] = golf;
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                oscar = 11;
                oscar = yankee[oscar];
                golf = offset.bind(tango)(oscar);
                oscar = {};
                romeo = verify.emoji;
                oscar['fastImageStyle'] = romeo;
                verify = verify.emoji;
                oscar['textEmojiStyle'] = verify;
                verify = 12;
                verify = yankee[verify];
                offset = offset.bind(tango)(verify);
                verify = 24;
                verify = offset.bind(tango)(options, verify);
                oscar['src'] = verify;
                verify = options.emojiName;
                options = null;
                offset = options != verify;
                options = '';
                if(!offset) { _fun103515_ip = 247; continue _fun103515 }
 244:
                options = verify;
 247:
                oscar['name'] = options;
                oscar = zulu.bind(tango)(golf, oscar);
                report['children'] = oscar;
                report = zulu.bind(tango)(mike, report);
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        var _closure1_slot14 = golf;
        golf = options.memo;
        mike = function(argFoo) {
            _fun103516: for(var _fun103516_ip = 0; ; ) switch(_fun103516_ip) {
 0:
                zulu = argFoo;
                kilo = zulu.sound;
                var _closure2_slot0 = kilo;
                mike = zulu.channel;
                var _closure2_slot1 = mike;
                echo = zulu.style;
                options = zulu.isSectionLocked;
                tango = undefined;
                if(!(options === tango)) { _fun103516_ip = 43; continue _fun103516 }
 41:
                options = false;
 43:
                var _closure2_slot2 = tango;
                var _closure2_slot3 = tango;
                var _closure2_slot4 = tango;
                var _closure2_slot5 = tango;
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 13;
                zulu = oscar[zulu];
                report = report.bind(tango)(zulu);
                zulu = report.useSoundButtonStyleConfig;
                zulu = zulu.bind(report)();
                vacuum = zulu.buttonWidth;
                zulu = kilo.emojiId;
                output = null;
                romeo = output != zulu;
                if(romeo) { _fun103516_ip = 123; continue _fun103516 }
 113:
                zulu = kilo.emojiName;
                romeo = output != zulu;
 123:
                zulu = _closure1_slot10;
                offset = zulu.bind(tango)();
                oscar = _closure1_slot0;
                verify = _closure1_slot2;
                zulu = 14;
                zulu = verify[zulu];
                foxtrot = oscar.bind(tango)(zulu);
                yankee = foxtrot.useStateFromStores;
                zulu = _closure1_slot5;
                report = new Array(1);
                report[0] = zulu;
                zulu = function() {
                    mike = _closure1_slot5;
                    entity = mike.getCurrentUser;
                    entity = entity.bind(mike)();
                    return entity;
                };
                foxtrot = yankee.bind(foxtrot)(report, zulu);
                _closure2_slot2 = foxtrot;
                backup = _closure1_slot1;
                zulu = 15;
                zulu = verify[zulu];
                report = backup.bind(tango)(zulu);
                zulu = mike.id;
                report = report.bind(tango)(kilo, zulu);
                zulu = report.playSoundboardSound;
                _closure2_slot3 = zulu;
                result = report.isPlayingSound;
                report = 16;
                report = verify[report];
                yankee = backup.bind(tango)(report);
                report = 17;
                report = verify[report];
                report = backup.bind(tango)(report);
                report = report.SOUNDBOARD_BUTTON;
                report = yankee.bind(tango)(report);
                backup = report.analyticsLocations;
                _closure2_slot4 = backup;
                report = 18;
                report = verify[report];
                oscar = oscar.bind(tango)(report);
                report = oscar.canUseSoundboardSound;
                report = report.bind(oscar)(foxtrot, kilo, mike);
                oscar = !report;
                _closure2_slot5 = oscar;
                report = _closure1_slot3;
                yankee = report.useCallback;
                verify = new Array(6);
                verify[0] = backup;
                backup = mike.guild_id;
                verify[1] = backup;
                verify[2] = foxtrot;
                verify[3] = zulu;
                verify[4] = kilo;
                verify[5] = oscar;
                zulu = function() {
                    _fun103518: for(var _fun103518_ip = 0; ; ) switch(_fun103518_ip) {
 0:
                        mike = _closure2_slot5;
                        if(mike) { _fun103518_ip = 30; continue _fun103518 }
 10:
                        tango = _closure2_slot3;
                        zulu = _closure2_slot4;
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
                        _fun103518_ip = 294; continue _fun103518;
 30:
                        zulu = _closure1_slot1;
                        report = _closure1_slot2;
                        mike = 19;
                        mike = report[mike];
                        options = undefined;
                        report = zulu.bind(options)(mike);
                        zulu = report.canUseSoundboardEverywhere;
                        mike = _closure2_slot2;
                        mike = zulu.bind(report)(mike);
                        if(mike) { _fun103518_ip = 153; continue _fun103518 }
 73:
                        mike = _closure2_slot0;
                        zulu = mike.guildId;
                        mike = _closure2_slot1;
                        mike = mike.guild_id;
                        if(!(zulu !== mike)) { _fun103518_ip = 153; continue _fun103518 }
 95:
                        zulu = _closure1_slot1;
                        oscar = _closure1_slot2;
                        mike = 20;
                        mike = oscar[mike];
                        zulu = zulu.bind(options)(mike);
                        report = _closure1_slot0;
                        mike = 21;
                        mike = oscar[mike];
                        mike = report.bind(options)(mike);
                        mike = mike.EntitlementFeatureNames;
                        mike = mike.SOUNDBOARD_EVERYWHERE;
                        mike = zulu.bind(options)(mike);
                        _fun103518_ip = 294; continue _fun103518;
 153:
                        entity = _closure2_slot0;
                        entity = entity.available;
                        if(entity) { _fun103518_ip = 294; continue _fun103518 }
 169:
                        oscar = _closure1_slot1;
                        verify = _closure1_slot2;
                        entity = 22;
                        entity = verify[entity];
                        zulu = oscar.bind(options)(entity);
                        mike = zulu.open;
                        entity = {};
                        report = 'DISABLED_SOUND_PRESSED';
                        entity['key'] = report;
                        report = 23;
                        report = verify[report];
                        report = oscar.bind(options)(report);
                        entity['icon'] = report;
                        golf = _closure1_slot0;
                        tango = 24;
                        report = verify[tango];
                        report = golf.bind(options)(report);
                        oscar = report.intl;
                        report = oscar.string;
                        tango = verify[tango];
                        tango = golf.bind(options)(tango);
                        tango = tango.t;
                        tango = tango.MDOXJS;
                        tango = report.bind(oscar)(tango);
                        entity['content'] = tango;
                        tango = 3000;
                        entity['toastDurationMs'] = tango;
                        entity = mike.bind(zulu)(entity);
 294:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtrot = yankee.bind(report)(zulu, verify);
                zulu = function(argFoo) {
                    verify = argFoo;
                    var _closure3_slot0 = verify;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 5;
                    tango = options[zulu];
                    report = undefined;
                    offset = golf.bind(report)(tango);
                    tango = offset.useSharedValue;
                    oscar = 0;
                    tango = tango.bind(offset)(oscar);
                    var _closure3_slot1 = tango;
                    zulu = options[zulu];
                    report = golf.bind(report)(zulu);
                    zulu = report.useSharedValue;
                    zulu = zulu.bind(report)(oscar);
                    var _closure3_slot2 = zulu;
                    options = _closure1_slot3;
                    oscar = options.useCallback;
                    report = new Array(1);
                    report[0] = tango;
                    mike = function() {
                        zulu = _closure3_slot1;
                        mike = zulu.set;
                        entity = 1;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    oscar = oscar.bind(options)(mike, report);
                    golf = options.useCallback;
                    report = new Array(1);
                    report[0] = tango;
                    mike = function() {
                        zulu = _closure3_slot1;
                        mike = zulu.set;
                        entity = 0;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    report = golf.bind(options)(mike, report);
                    golf = options.useEffect;
                    mike = new Array(3);
                    mike[0] = verify;
                    mike[1] = zulu;
                    mike[2] = tango;
                    entity = function() {
                        _fun103522: for(var _fun103522_ip = 0; ; ) switch(_fun103522_ip) {
 0:
                            zulu = _closure3_slot2;
                            mike = zulu.set;
                            tango = _closure3_slot0;
                            entity = 0;
                            if(!tango) { _fun103522_ip = 24; continue _fun103522 }
 21:
                            entity = 1;
 24:
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = golf.bind(options)(entity, mike);
                    entity = {};
                    mike = {};
                    mike['pressIn'] = oscar;
                    mike['pressOut'] = report;
                    entity['handlers'] = mike;
                    mike = {};
                    mike['pressed'] = tango;
                    mike['playing'] = zulu;
                    entity['sharedValues'] = mike;
                    return entity;
                };
                sizing = zulu.bind(tango)(result);
                verify = _closure1_slot13;
                zulu = {};
                yankee = sizing.sharedValues;
                zulu['sharedValues'] = yankee;
                yankee = {'pressed': 0.95, 'playing': 1.05};
                zulu['scaleFactors'] = yankee;
                update = verify.bind(tango)(zulu);
                zulu = sizing.sharedValues;
                verify = zulu.pressed;
                zulu = verify.get;
                verify = zulu.bind(verify)();
                zulu = 0;
                control = verify > zulu;
                zulu = report.useCallback;
                verify = mike.id;
                mike = new Array(2);
                mike[0] = verify;
                mike[1] = kilo;
                entity = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 25;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = _closure2_slot1;
                    zulu = zulu.id;
                    mike = _closure2_slot0;
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                yankee = zulu.bind(report)(entity, mike);
                zulu = _closure1_slot7;
                mike = _closure1_slot4;
                entity = {};
                verify = _closure1_slot11;
                report = {};
                source = offset.button;
                backup = new Array(7);
                backup[0] = source;
                source = {};
                source['width'] = vacuum;
                backup[1] = source;
                source = null;
                if(!control) { _fun103516_ip = 526; continue _fun103516 }
 520:
                source = offset.buttonPressed;
 526:
                backup[2] = source;
                backup[3] = update;
                update = null;
                if(!result) { _fun103516_ip = 545; continue _fun103516 }
 539:
                update = offset.buttonPlaying;
 545:
                backup[4] = update;
                update = null;
                if(!oscar) { _fun103516_ip = 565; continue _fun103516 }
 554:
                update = null;
                if(options) { _fun103516_ip = 565; continue _fun103516 }
 559:
                update = offset.buttonDisabled;
 565:
                backup[5] = update;
                backup[6] = echo;
                report['style'] = backup;
                backup = 'button';
                report['accessibilityRole'] = backup;
                backup = kilo.name;
                report['accessibilityLabel'] = backup;
                backup = sizing.handlers;
                backup = backup.pressIn;
                report['onPressIn'] = backup;
                backup = sizing.handlers;
                backup = backup.pressOut;
                report['onPressOut'] = backup;
                report['onPress'] = foxtrot;
                report['onLongPress'] = yankee;
                if(!romeo) { _fun103516_ip = 672; continue _fun103516 }
 640:
                backup = _closure1_slot6;
                foxtrot = _closure1_slot14;
                yankee = {};
                sizing = sizing.sharedValues;
                yankee['sharedValues'] = sizing;
                yankee['sound'] = kilo;
                romeo = backup.bind(tango)(foxtrot, yankee);
 672:
                yankee = new Array(2);
                yankee[0] = romeo;
                backup = _closure1_slot6;
                foxtrot = _closure1_slot0;
                sizing = _closure1_slot2;
                romeo = 26;
                romeo = sizing[romeo];
                romeo = foxtrot.bind(tango)(romeo);
                foxtrot = romeo.Text;
                romeo = {'lineClamp': 1, 'style': null, 'variant': 'text-sm/semibold'};
                echo = offset.text;
                sizing = new Array(2);
                sizing[0] = echo;
                output = null;
                if(!result) { _fun103516_ip = 747; continue _fun103516 }
 741:
                output = offset.textPlaying;
 747:
                sizing[1] = output;
                romeo['style'] = sizing;
                kilo = kilo.name;
                romeo['children'] = kilo;
                romeo = backup.bind(tango)(foxtrot, romeo);
                yankee[1] = romeo;
                report['children'] = yankee;
                verify = zulu.bind(tango)(verify, report);
                report = new Array(2);
                report[0] = verify;
                if(!oscar) { _fun103516_ip = 800; continue _fun103516 }
 797:
                oscar = !options;
 800:
                if(!oscar) { _fun103516_ip = 851; continue _fun103516 }
 803:
                verify = _closure1_slot6;
                options = _closure1_slot0;
                yankee = _closure1_slot2;
                golf = 27;
                golf = yankee[golf];
                golf = options.bind(tango)(golf);
                options = golf.LockIcon;
                golf = {};
                offset = offset.lock;
                golf['style'] = offset;
                oscar = verify.bind(tango)(options, golf);
 851:
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        mike = golf.bind(options)(mike);
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/soundboard/native/SoundButton.tsx';
        tango = report.bind(oscar)(tango);
        zulu['SoundButton'] = mike;
        return entity;
    }
})();