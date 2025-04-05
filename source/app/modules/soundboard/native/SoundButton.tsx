// app/modules/soundboard/native/SoundButton.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        verify = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = verify;
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
        option = tangon.bind(entity)(golfie);
        var _closure1_slot3 = option;
        tangon = 1;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        yankee = tangon.View;
        var _closure1_slot4 = yankee;
        tangon = 2;
        tangon = oscard[tangon];
        tangon = verify.bind(entity)(tangon);
        var _closure1_slot5 = tangon;
        tangon = 3;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        foxtra = tangon.SOUND_BUTTON_HEIGHT;
        tangon = 4;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        golfie = tangon.jsx;
        var _closure1_slot6 = golfie;
        tangon = tangon.jsxs;
        var _closure1_slot7 = tangon;
        golfie = 5;
        tangon = oscard[golfie];
        offset = verify.bind(entity)(tangon);
        tangon = offset.createAnimatedComponent;
        tangon = tangon.bind(offset)(yankee);
        var _closure1_slot8 = tangon;
        tangon = {'damping': 10, 'stiffness': 300, 'mass': 1};
        var _closure1_slot9 = tangon;
        kiloes = 6;
        tangon = oscard[kiloes];
        romeon = report.bind(entity)(tangon);
        yankee = romeon.createStyles;
        offset = {};
        tangon = {'marginTop': 4, 'height': null, 'backgroundColor': null, 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center', 'borderRadius': null, 'borderWidth': 1};
        tangon['height'] = foxtra;
        backup = 7;
        foxtra = oscard[backup];
        foxtra = verify.bind(entity)(foxtra);
        foxtra = foxtra.colors;
        foxtra = foxtra.CARD_PRIMARY_BG;
        tangon['backgroundColor'] = foxtra;
        foxtra = oscard[backup];
        foxtra = verify.bind(entity)(foxtra);
        foxtra = foxtra.radii;
        foxtra = foxtra.lg;
        tangon['borderRadius'] = foxtra;
        foxtra = oscard[backup];
        foxtra = verify.bind(entity)(foxtra);
        foxtra = foxtra.colors;
        foxtra = foxtra.BORDER_FAINT;
        tangon['borderColor'] = foxtra;
        foxtra = oscard[backup];
        foxtra = verify.bind(entity)(foxtra);
        foxtra = foxtra.shadows;
        update = foxtra.SHADOW_LOW;
        source = tangon;
        foxtra = copyDataProperties(source, update);
        offset['button'] = tangon;
        tangon = {};
        foxtra = oscard[backup];
        foxtra = verify.bind(entity)(foxtra);
        foxtra = foxtra.colors;
        foxtra = foxtra.CARD_PRIMARY_PRESSED_BG;
        tangon['backgroundColor'] = foxtra;
        offset['buttonPressed'] = tangon;
        tangon = {};
        foxtra = 0.5;
        tangon['opacity'] = foxtra;
        offset['buttonDisabled'] = tangon;
        tangon = {'borderStyle': 'solid', 'borderWidth': 2};
        foxtra = oscard[backup];
        foxtra = verify.bind(entity)(foxtra);
        foxtra = foxtra.colors;
        foxtra = foxtra.STATUS_SPEAKING;
        tangon['borderColor'] = foxtra;
        foxtra = oscard[backup];
        foxtra = verify.bind(entity)(foxtra);
        foxtra = foxtra.colors;
        foxtra = foxtra.CARD_SECONDARY_BG;
        tangon['backgroundColor'] = foxtra;
        offset['buttonPlaying'] = tangon;
        foxtra = {'height': 24, 'width': 24, 'fontSize': null, 'lineHeight': 28};
        output = 24;
        sizing = 8;
        tangon = oscard[sizing];
        result = report.bind(entity)(tangon);
        tangon = result.isIOS;
        result = tangon.bind(result)();
        tangon = undefined;
        if(!result) { _fun00002_ip = 527; continue _fun00001 }
 524:
        tangon = output;
 527:
        foxtra['fontSize'] = tangon;
        tangon = 28;
        offset['emoji'] = foxtra;
        foxtra = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': 40, 'width': 40, 'backgroundColor': null, 'backgroundSize': 32, 'borderRadius': null, 'marginBottom': 8};
        output = oscard[backup];
        output = verify.bind(entity)(output);
        output = output.colors;
        output = output.BG_MOD_FAINT;
        foxtra['backgroundColor'] = output;
        output = oscard[backup];
        output = verify.bind(entity)(output);
        output = output.radii;
        output = output.round;
        foxtra['borderRadius'] = output;
        offset['emojiWrapper'] = foxtra;
        foxtra = {'width': '100%', 'height': '100%'};
        output = oscard[backup];
        output = verify.bind(entity)(output);
        output = output.radii;
        output = output.round;
        foxtra['borderRadius'] = output;
        offset['emojiBackground'] = foxtra;
        foxtra = {};
        output = oscard[backup];
        output = verify.bind(entity)(output);
        output = output.colors;
        output = output.CHANNEL_ICON;
        foxtra['color'] = output;
        offset['defaultSoundboardIcon'] = foxtra;
        foxtra = {};
        foxtra['marginHorizontal'] = sizing;
        offset['text'] = foxtra;
        foxtra = {};
        foxtra['marginHorizontal'] = kiloes;
        offset['textPlaying'] = foxtra;
        foxtra = {'position': 'absolute', 'top': null, 'end': null, 'width': 12, 'height': 12};
        kiloes = oscard[backup];
        kiloes = verify.bind(entity)(kiloes);
        kiloes = kiloes.spacing;
        kiloes = kiloes.PX_12;
        foxtra['top'] = kiloes;
        kiloes = oscard[backup];
        kiloes = verify.bind(entity)(kiloes);
        kiloes = kiloes.spacing;
        kiloes = kiloes.PX_12;
        foxtra['end'] = kiloes;
        backup = oscard[backup];
        backup = verify.bind(entity)(backup);
        backup = backup.colors;
        backup = backup.WHITE;
        foxtra['tintColor'] = backup;
        offset['lock'] = foxtra;
        offset = yankee.bind(romeon)(offset);
        var _closure1_slot10 = offset;
        golfie = oscard[golfie];
        offset = verify.bind(entity)(golfie);
        verify = offset.createAnimatedComponent;
        golfie = 9;
        golfie = oscard[golfie];
        golfie = report.bind(entity)(golfie);
        golfie = golfie.PressableOpacity;
        golfie = verify.bind(offset)(golfie);
        var _closure1_slot11 = golfie;
        golfie = {};
        verify = 'function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+"deg"}]};}';
        golfie['code'] = verify;
        var _closure1_slot12 = golfie;
        golfie = function(argFoo) { // Original name: useAnimation
            offset = argFoo;
            var _closure2_slot0 = offset;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 5;
            michal = verify[oscard];
            golfie = undefined;
            zuuluu = option.bind(golfie)(michal);
            michal = zuuluu.useAnimatedStyle;
            entity = function() { // Original name: t
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    michal = entity.sharedValues;
                    zuuluu = michal.pressed;
                    michal = zuuluu.get;
                    foxtra = michal.bind(zuuluu)();
                    michal = entity.sharedValues;
                    zuuluu = michal.playing;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    tangon = 0;
                    yankee = michal > tangon;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    option = 5;
                    michal = michal[option];
                    report = undefined;
                    output = zuuluu.bind(report)(michal);
                    sizing = output.withDelay;
                    entity = entity.playingAnimationDelay;
                    verify = null;
                    michal = verify != entity;
                    golfie = 0;
                    if(!michal) { _fun00004_ip = 106; continue _fun00003 }
 103:
                    golfie = entity;
 106:
                    kiloes = _closure1_slot0;
                    backup = _closure1_slot2;
                    michal = 10;
                    entity = backup[michal];
                    echoed = kiloes.bind(report)(entity);
                    result = echoed.withSpring;
                    entity = backup[option];
                    ctrled = kiloes.bind(report)(entity);
                    source = ctrled.interpolate;
                    entity = _closure2_slot0;
                    zuuluu = entity.sharedValues;
                    romeon = zuuluu.playing;
                    zuuluu = romeon.get;
                    update = zuuluu.bind(romeon)();
                    zuuluu = entity.scaleFactors;
                    zuuluu = zuuluu.playing;
                    romeon = [1];
                    romeon[1] = zuuluu;
                    zuuluu = [0, 1];
                    zuuluu = source.bind(ctrled)(update, zuuluu, romeon);
                    romeon = _closure1_slot9;
                    zuuluu = result.bind(echoed)(zuuluu, romeon);
                    golfie = sizing.bind(output)(golfie, zuuluu);
                    michal = backup[michal];
                    zuuluu = kiloes.bind(report)(michal);
                    michal = zuuluu.withSpring;
                    backup = backup[option];
                    output = kiloes.bind(report)(backup);
                    sizing = output.interpolate;
                    backup = entity.sharedValues;
                    kiloes = backup.pressed;
                    backup = kiloes.get;
                    kiloes = backup.bind(kiloes)();
                    entity = entity.scaleFactors;
                    entity = entity.pressed;
                    backup = [1];
                    backup[1] = entity;
                    entity = [0, 1];
                    entity = sizing.bind(output)(kiloes, entity, backup);
                    romeon = michal.bind(zuuluu)(entity, romeon);
                    entity = {};
                    zuuluu = {};
                    michal = romeon;
                    if(!(tangon === foxtra)) { _fun00004_ip = 349; continue _fun00003 }
 340:
                    michal = romeon;
                    if(!yankee) { _fun00004_ip = 349; continue _fun00003 }
 346:
                    michal = golfie;
 349:
                    zuuluu['scale'] = michal;
                    michal = new Array(2);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    option = golfie.bind(report)(oscard);
                    golfie = option.interpolate;
                    yankee = _closure2_slot0;
                    oscard = yankee.sharedValues;
                    romeon = oscard.pressed;
                    oscard = romeon.get;
                    oscard = oscard.bind(romeon)();
                    yankee = verify == yankee;
                    report = undefined;
                    if(yankee) { _fun00004_ip = 431; continue _fun00003 }
 421:
                    offset = _closure2_slot0;
                    report = offset.pressedRotationDegrees;
 431:
                    verify = verify != report;
                    tangon = 0;
                    if(!verify) { _fun00004_ip = 443; continue _fun00003 }
 440:
                    tangon = report;
 443:
                    report = [0];
                    report[1] = tangon;
                    tangon = [0, 1];
                    golfie = golfie.bind(option)(oscard, tangon, report);
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    oscard = tangon.concat;
                    report = '';
                    tangon = 'deg';
                    tangon = oscard.bind(report)(golfie, tangon);
                    zuuluu['rotate'] = tangon;
                    michal[1] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            report = {};
            report['animationConfig'] = offset;
            offset = verify[oscard];
            offset = option.bind(golfie)(offset);
            offset = offset.withDelay;
            report['withDelay'] = offset;
            offset = 10;
            offset = verify[offset];
            offset = option.bind(golfie)(offset);
            offset = offset.withSpring;
            report['withSpring'] = offset;
            oscard = verify[oscard];
            oscard = option.bind(golfie)(oscard);
            oscard = oscard.interpolate;
            report['interpolate'] = oscard;
            oscard = _closure1_slot9;
            report['SPRING_CONFIG'] = oscard;
            entity['__closure'] = report;
            report = 13932429225740.0;
            entity['__workletHash'] = report;
            tangon = _closure1_slot12;
            entity['__initData'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        var _closure1_slot13 = golfie;
        golfie = function(argFoo) { // Original name: SoundButtonEmoji
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                option = entity.sound;
                zuuluu = entity.sharedValues;
                entity = _closure1_slot10;
                tangon = undefined;
                verify = entity.bind(tangon)();
                michal = _closure1_slot13;
                entity = {};
                entity['sharedValues'] = zuuluu;
                report = {'pressed': 0.8, 'playing': 1.2};
                entity['scaleFactors'] = report;
                offset = michal.bind(tangon)(entity);
                michal = _closure1_slot13;
                entity = {};
                entity['sharedValues'] = zuuluu;
                zuuluu = {'pressed': 0.7200000000000001, 'playing': 1.08};
                entity['scaleFactors'] = zuuluu;
                zuuluu = 100;
                entity['playingAnimationDelay'] = zuuluu;
                zuuluu = -15;
                entity['pressedRotationDegrees'] = zuuluu;
                golfie = michal.bind(tangon)(entity);
                zuuluu = _closure1_slot6;
                michal = _closure1_slot8;
                entity = {};
                yankee = verify.emojiWrapper;
                report = new Array(2);
                report[0] = yankee;
                report[1] = offset;
                entity['style'] = report;
                report = {};
                report['style'] = golfie;
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                oscard = 11;
                oscard = yankee[oscard];
                golfie = offset.bind(tangon)(oscard);
                oscard = {};
                romeon = verify.emoji;
                oscard['fastImageStyle'] = romeon;
                verify = verify.emoji;
                oscard['textEmojiStyle'] = verify;
                verify = 12;
                verify = yankee[verify];
                offset = offset.bind(tangon)(verify);
                verify = 24;
                verify = offset.bind(tangon)(option, verify);
                oscard['src'] = verify;
                verify = option.emojiName;
                option = null;
                offset = option != verify;
                option = '';
                if(!offset) { _fun00006_ip = 247; continue _fun00005 }
 244:
                option = verify;
 247:
                oscard['name'] = option;
                oscard = zuuluu.bind(tangon)(golfie, oscard);
                report['children'] = oscard;
                report = zuuluu.bind(tangon)(michal, report);
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        var _closure1_slot14 = golfie;
        golfie = option.memo;
        michal = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                kiloes = zuuluu.sound;
                var _closure2_slot0 = kiloes;
                michal = zuuluu.channel;
                var _closure2_slot1 = michal;
                echoed = zuuluu.style;
                option = zuuluu.isSectionLocked;
                tangon = undefined;
                if(!(option === tangon)) { _fun00008_ip = 43; continue _fun00007 }
 41:
                option = false;
 43:
                var _closure2_slot2 = tangon;
                var _closure2_slot3 = tangon;
                var _closure2_slot4 = tangon;
                var _closure2_slot5 = tangon;
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 13;
                zuuluu = oscard[zuuluu];
                report = report.bind(tangon)(zuuluu);
                zuuluu = report.useSoundButtonStyleConfig;
                zuuluu = zuuluu.bind(report)();
                vacuum = zuuluu.buttonWidth;
                zuuluu = kiloes.emojiId;
                output = null;
                romeon = output != zuuluu;
                if(romeon) { _fun00008_ip = 123; continue _fun00007 }
 113:
                zuuluu = kiloes.emojiName;
                romeon = output != zuuluu;
 123:
                zuuluu = _closure1_slot10;
                offset = zuuluu.bind(tangon)();
                oscard = _closure1_slot0;
                verify = _closure1_slot2;
                zuuluu = 14;
                zuuluu = verify[zuuluu];
                foxtra = oscard.bind(tangon)(zuuluu);
                yankee = foxtra.useStateFromStores;
                zuuluu = _closure1_slot5;
                report = new Array(1);
                report[0] = zuuluu;
                zuuluu = function() {
                    michal = _closure1_slot5;
                    entity = michal.getCurrentUser;
                    entity = entity.bind(michal)();
                    return entity;
                };
                foxtra = yankee.bind(foxtra)(report, zuuluu);
                _closure2_slot2 = foxtra;
                backup = _closure1_slot1;
                zuuluu = 15;
                zuuluu = verify[zuuluu];
                report = backup.bind(tangon)(zuuluu);
                zuuluu = michal.id;
                report = report.bind(tangon)(kiloes, zuuluu);
                zuuluu = report.playSoundboardSound;
                _closure2_slot3 = zuuluu;
                result = report.isPlayingSound;
                report = 16;
                report = verify[report];
                yankee = backup.bind(tangon)(report);
                report = 17;
                report = verify[report];
                report = backup.bind(tangon)(report);
                report = report.SOUNDBOARD_BUTTON;
                report = yankee.bind(tangon)(report);
                backup = report.analyticsLocations;
                _closure2_slot4 = backup;
                report = 18;
                report = verify[report];
                oscard = oscard.bind(tangon)(report);
                report = oscard.canUseSoundboardSound;
                report = report.bind(oscard)(foxtra, kiloes, michal);
                oscard = !report;
                _closure2_slot5 = oscard;
                report = _closure1_slot3;
                yankee = report.useCallback;
                verify = new Array(6);
                verify[0] = backup;
                backup = michal.guild_id;
                verify[1] = backup;
                verify[2] = foxtra;
                verify[3] = zuuluu;
                verify[4] = kiloes;
                verify[5] = oscard;
                zuuluu = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure2_slot5;
                        if(michal) { _fun00010_ip = 30; continue _fun00009 }
 10:
                        tangon = _closure2_slot3;
                        zuuluu = _closure2_slot4;
                        michal = undefined;
                        michal = tangon.bind(michal)(zuuluu);
                        _fun00010_ip = 296; continue _fun00009;
 30:
                        zuuluu = _closure1_slot1;
                        report = _closure1_slot2;
                        michal = 19;
                        michal = report[michal];
                        option = undefined;
                        report = zuuluu.bind(option)(michal);
                        zuuluu = report.canUseSoundboardEverywhere;
                        michal = _closure2_slot2;
                        michal = zuuluu.bind(report)(michal);
                        if(michal) { _fun00010_ip = 153; continue _fun00009 }
 73:
                        michal = _closure2_slot0;
                        zuuluu = michal.guildId;
                        michal = _closure2_slot1;
                        michal = michal.guild_id;
                        if(!(zuuluu !== michal)) { _fun00010_ip = 153; continue _fun00009 }
 95:
                        zuuluu = _closure1_slot1;
                        oscard = _closure1_slot2;
                        michal = 20;
                        michal = oscard[michal];
                        zuuluu = zuuluu.bind(option)(michal);
                        report = _closure1_slot0;
                        michal = 21;
                        michal = oscard[michal];
                        michal = report.bind(option)(michal);
                        michal = michal.EntitlementFeatureNames;
                        michal = michal.SOUNDBOARD_EVERYWHERE;
                        michal = zuuluu.bind(option)(michal);
                        _fun00010_ip = 296; continue _fun00009;
 153:
                        entity = _closure2_slot0;
                        entity = entity.available;
                        if(entity) { _fun00010_ip = 296; continue _fun00009 }
 169:
                        oscard = _closure1_slot1;
                        verify = _closure1_slot2;
                        entity = 22;
                        entity = verify[entity];
                        zuuluu = oscard.bind(option)(entity);
                        michal = zuuluu.open;
                        entity = {};
                        report = 'DISABLED_SOUND_PRESSED';
                        entity['key'] = report;
                        report = 23;
                        report = verify[report];
                        report = oscard.bind(option)(report);
                        entity['icon'] = report;
                        golfie = _closure1_slot0;
                        tangon = 24;
                        report = verify[tangon];
                        report = golfie.bind(option)(report);
                        oscard = report.intl;
                        report = oscard.string;
                        tangon = verify[tangon];
                        tangon = golfie.bind(option)(tangon);
                        tangon = tangon.t;
                        tangon = tangon.MDOXJS;
                        tangon = report.bind(oscard)(tangon);
                        entity['content'] = tangon;
                        tangon = 3000;
                        entity['toastDurationMs'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
 296:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtra = yankee.bind(report)(zuuluu, verify);
                zuuluu = function(argFoo) {
                    verify = argFoo;
                    var _closure3_slot0 = verify;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 5;
                    tangon = option[zuuluu];
                    report = undefined;
                    offset = golfie.bind(report)(tangon);
                    tangon = offset.useSharedValue;
                    oscard = 0;
                    tangon = tangon.bind(offset)(oscard);
                    var _closure3_slot1 = tangon;
                    zuuluu = option[zuuluu];
                    report = golfie.bind(report)(zuuluu);
                    zuuluu = report.useSharedValue;
                    zuuluu = zuuluu.bind(report)(oscard);
                    var _closure3_slot2 = zuuluu;
                    option = _closure1_slot3;
                    oscard = option.useCallback;
                    report = new Array(1);
                    report[0] = tangon;
                    michal = function() {
                        zuuluu = _closure3_slot1;
                        michal = zuuluu.set;
                        entity = 1;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    oscard = oscard.bind(option)(michal, report);
                    golfie = option.useCallback;
                    report = new Array(1);
                    report[0] = tangon;
                    michal = function() {
                        zuuluu = _closure3_slot1;
                        michal = zuuluu.set;
                        entity = 0;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    report = golfie.bind(option)(michal, report);
                    golfie = option.useEffect;
                    michal = new Array(3);
                    michal[0] = verify;
                    michal[1] = zuuluu;
                    michal[2] = tangon;
                    entity = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zuuluu = _closure3_slot2;
                            michal = zuuluu.set;
                            tangon = _closure3_slot0;
                            entity = 0;
                            if(!tangon) { _fun00012_ip = 24; continue _fun00011 }
 21:
                            entity = 1;
 24:
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = golfie.bind(option)(entity, michal);
                    entity = {};
                    michal = {};
                    michal['pressIn'] = oscard;
                    michal['pressOut'] = report;
                    entity['handlers'] = michal;
                    michal = {};
                    michal['pressed'] = tangon;
                    michal['playing'] = zuuluu;
                    entity['sharedValues'] = michal;
                    return entity;
                };
                sizing = zuuluu.bind(tangon)(result);
                verify = _closure1_slot13;
                zuuluu = {};
                yankee = sizing.sharedValues;
                zuuluu['sharedValues'] = yankee;
                yankee = {'pressed': 0.95, 'playing': 1.05};
                zuuluu['scaleFactors'] = yankee;
                update = verify.bind(tangon)(zuuluu);
                zuuluu = sizing.sharedValues;
                verify = zuuluu.pressed;
                zuuluu = verify.get;
                verify = zuuluu.bind(verify)();
                zuuluu = 0;
                ctrled = verify > zuuluu;
                zuuluu = report.useCallback;
                verify = michal.id;
                michal = new Array(2);
                michal[0] = verify;
                michal[1] = kiloes;
                entity = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 25;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot0;
                    michal = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                yankee = zuuluu.bind(report)(entity, michal);
                zuuluu = _closure1_slot7;
                michal = _closure1_slot4;
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
                if(!ctrled) { _fun00008_ip = 526; continue _fun00007 }
 520:
                source = offset.buttonPressed;
 526:
                backup[2] = source;
                backup[3] = update;
                update = null;
                if(!result) { _fun00008_ip = 545; continue _fun00007 }
 539:
                update = offset.buttonPlaying;
 545:
                backup[4] = update;
                update = null;
                if(!oscard) { _fun00008_ip = 565; continue _fun00007 }
 554:
                update = null;
                if(option) { _fun00008_ip = 565; continue _fun00007 }
 559:
                update = offset.buttonDisabled;
 565:
                backup[5] = update;
                backup[6] = echoed;
                report['style'] = backup;
                backup = 'button';
                report['accessibilityRole'] = backup;
                backup = kiloes.name;
                report['accessibilityLabel'] = backup;
                backup = sizing.handlers;
                backup = backup.pressIn;
                report['onPressIn'] = backup;
                backup = sizing.handlers;
                backup = backup.pressOut;
                report['onPressOut'] = backup;
                report['onPress'] = foxtra;
                report['onLongPress'] = yankee;
                if(!romeon) { _fun00008_ip = 672; continue _fun00007 }
 640:
                backup = _closure1_slot6;
                foxtra = _closure1_slot14;
                yankee = {};
                sizing = sizing.sharedValues;
                yankee['sharedValues'] = sizing;
                yankee['sound'] = kiloes;
                romeon = backup.bind(tangon)(foxtra, yankee);
 672:
                yankee = new Array(2);
                yankee[0] = romeon;
                backup = _closure1_slot6;
                foxtra = _closure1_slot0;
                sizing = _closure1_slot2;
                romeon = 26;
                romeon = sizing[romeon];
                romeon = foxtra.bind(tangon)(romeon);
                foxtra = romeon.Text;
                romeon = {'lineClamp': 1, 'style': null, 'variant': 'text-sm/semibold'};
                echoed = offset.text;
                sizing = new Array(2);
                sizing[0] = echoed;
                output = null;
                if(!result) { _fun00008_ip = 747; continue _fun00007 }
 741:
                output = offset.textPlaying;
 747:
                sizing[1] = output;
                romeon['style'] = sizing;
                kiloes = kiloes.name;
                romeon['children'] = kiloes;
                romeon = backup.bind(tangon)(foxtra, romeon);
                yankee[1] = romeon;
                report['children'] = yankee;
                verify = zuuluu.bind(tangon)(verify, report);
                report = new Array(2);
                report[0] = verify;
                if(!oscard) { _fun00008_ip = 800; continue _fun00007 }
 797:
                oscard = !option;
 800:
                if(!oscard) { _fun00008_ip = 851; continue _fun00007 }
 803:
                verify = _closure1_slot6;
                option = _closure1_slot0;
                yankee = _closure1_slot2;
                golfie = 27;
                golfie = yankee[golfie];
                golfie = option.bind(tangon)(golfie);
                option = golfie.LockIcon;
                golfie = {};
                offset = offset.lock;
                golfie['style'] = offset;
                oscard = verify.bind(tangon)(option, golfie);
 851:
                report[1] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        michal = golfie.bind(option)(michal);
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/soundboard/native/SoundButton.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['SoundButton'] = michal;
        return entity;
    }
})();