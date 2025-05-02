// app/modules/profile_effects/native/ProfileEffect.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    option = golfie[michal];
    michal = argCor;
    michal = michal.bind(entity)(option);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    option = michal.View;
    var _closure1_slot5 = option;
    option = michal.Dimensions;
    var _closure1_slot6 = option;
    michal = michal.Image;
    var _closure1_slot7 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot9 = michal;
    michal = 5;
    michal = golfie[michal];
    option = oscard.bind(entity)(michal);
    report = option.createStyles;
    michal = {};
    offset = 'absolute';
    verify = {'position': 'absolute', 'width': '100%', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'flex': 1, 'justifyContent': 'flex-start'};
    michal['profileEffects'] = verify;
    verify = {};
    verify['position'] = offset;
    michal['effect'] = verify;
    michal = report.bind(option)(michal);
    var _closure1_slot10 = michal;
    michal = function(argFoo) { // Original name: usePreloadProfileEffect
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot4;
        tangon = report.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            entity = global;
            zuuluu = entity.Set;
            tangon = _closure2_slot0;
            michal = tangon.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.src;
                return entity;
            };
            report = michal.bind(tangon)(entity);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = michal;
            entity = new oscard[zuuluu](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        var _closure2_slot1 = michal;
        zuuluu = report.useRef;
        zuuluu = zuuluu.bind(report)(michal);
        var _closure2_slot2 = zuuluu;
        tangon = report.useRef;
        zuuluu = false;
        zuuluu = tangon.bind(report)(zuuluu);
        var _closure2_slot3 = zuuluu;
        oscard = report.useEffect;
        tangon = new Array(1);
        tangon[0] = michal;
        michal = function() {
            zuuluu = _closure2_slot2;
            entity = _closure2_slot1;
            zuuluu['current'] = entity;
            michal = _closure2_slot3;
            zuuluu = entity.size;
            entity = 0;
            entity = entity === zuuluu;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        michal = oscard.bind(report)(michal, tangon);
        tangon = report.useCallback;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot3;
                michal = michal.current;
                if(michal) { _fun00002_ip = 65; continue _fun00001 }
 15:
                michal = _closure2_slot2;
                report = michal.current;
                tangon = report.delete;
                zuuluu = argFoo;
                zuuluu = tangon.bind(report)(zuuluu);
                michal = michal.current;
                zuuluu = michal.size;
                michal = 0;
                if(!(michal === zuuluu)) { _fun00002_ip = 65; continue _fun00001 }
 53:
                michal = _closure2_slot3;
                entity = true;
                michal['current'] = entity;
 65:
                entity = undefined;
                return entity;
            }
        };
        entity = new Array(0);
        michal = tangon.bind(report)(michal, entity);
        entity = {};
        entity['loaded'] = zuuluu;
        entity['onLayerLoaded'] = michal;
        return entity;
    };
    var _closure1_slot11 = michal;
    report = function() { // Original name: useProfileDimensions
        oscard = _closure1_slot4;
        tangon = oscard.useState;
        zuuluu = 0;
        option = tangon.bind(oscard)(zuuluu);
        golfie = _closure1_slot3;
        report = undefined;
        tangon = 2;
        report = golfie.bind(report)(option, tangon);
        zuuluu = report[zuuluu];
        tangon = 1;
        tangon = report[tangon];
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        tangon = report.get;
        michal = 'window';
        michal = tangon.bind(report)(michal);
        tangon = michal.height;
        report = oscard.useCallback;
        michal = function(argFoo) {
            entity = argFoo;
            entity = entity.nativeEvent;
            entity = entity.layout;
            zuuluu = entity.width;
            michal = _closure2_slot0;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        entity = new Array(0);
        michal = report.bind(oscard)(michal, entity);
        entity = {};
        entity['height'] = tangon;
        entity['width'] = zuuluu;
        entity['onLayout'] = michal;
        return entity;
    };
    var _closure1_slot12 = report;
    report = function(argFoo) { // Original name: ProfileEffect
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.profileEffectConfig;
            var _closure2_slot0 = michal;
            sizing = entity.replayOnNavigationFocus;
            tangon = undefined;
            if(!(sizing === tangon)) { _fun00004_ip = 29; continue _fun00003 }
 27:
            sizing = false;
 29:
            var _closure2_slot1 = sizing;
            verify = entity.style;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            zuuluu = _closure1_slot10;
            option = zuuluu.bind(tangon)();
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.bind(tangon)();
            oscard = zuuluu.width;
            _closure2_slot2 = oscard;
            oscard = zuuluu.onLayout;
            zuuluu = michal.accessibilityLabel;
            _closure2_slot3 = zuuluu;
            foxtra = _closure1_slot4;
            golfie = foxtra.useMemo;
            michal = michal.effects;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.sortEffectLayers;
                entity = _closure2_slot0;
                entity = entity.effects;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = golfie.bind(foxtra)(michal, zuuluu);
            _closure2_slot4 = golfie;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 7;
            michal = yankee[michal];
            romeon = offset.bind(tangon)(michal);
            zuuluu = romeon.getProfileEffectNativePreloadExperiment;
            michal = 'ProfileEffect';
            zuuluu = zuuluu.bind(romeon)(michal);
            _closure2_slot5 = zuuluu;
            backup = foxtra.useMemo;
            romeon = new Array(2);
            romeon[0] = golfie;
            romeon[1] = zuuluu;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot5;
                    if(entity) { _fun00006_ip = 16; continue _fun00005 }
 10:
                    entity = new Array(0);
                    _fun00006_ip = 20; continue _fun00005;
 16:
                    entity = _closure2_slot4;
 20:
                    return entity;
                }
            };
            romeon = backup.bind(foxtra)(michal, romeon);
            michal = _closure1_slot11;
            romeon = michal.bind(tangon)(romeon);
            michal = romeon.loaded;
            _closure2_slot6 = michal;
            romeon = romeon.onLayerLoaded;
            _closure2_slot7 = romeon;
            backup = foxtra.useMemo;
            romeon = new Array(1);
            romeon[0] = zuuluu;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot5;
                    michal = 0;
                    if(entity) { _fun00008_ip = 57; continue _fun00007 }
 12:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 8;
                    tangon = tangon[entity];
                    entity = undefined;
                    tangon = report.bind(entity)(tangon);
                    entity = tangon.isAndroid;
                    entity = entity.bind(tangon)();
                    michal = 0;
                    if(!entity) { _fun00008_ip = 57; continue _fun00007 }
 51:
                    michal = 900;
 57:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 9;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu);
                    entity = entity.ENTRY_DELAY;
                    entity = -entity;
                    entity = entity - michal;
                    return entity;
                }
            };
            kiloes = backup.bind(foxtra)(zuuluu, romeon);
            _closure2_slot8 = kiloes;
            zuuluu = foxtra.useState;
            backup = zuuluu.bind(foxtra)(kiloes);
            romeon = _closure1_slot3;
            zuuluu = 2;
            romeon = romeon.bind(tangon)(backup, zuuluu);
            zuuluu = 0;
            zuuluu = romeon[zuuluu];
            _closure2_slot9 = zuuluu;
            zuuluu = 1;
            zuuluu = romeon[zuuluu];
            _closure2_slot10 = zuuluu;
            backup = foxtra.useEffect;
            romeon = new Array(1);
            romeon[0] = kiloes;
            zuuluu = function() {
                zuuluu = _closure2_slot10;
                michal = _closure2_slot8;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = backup.bind(foxtra)(zuuluu, romeon);
            romeon = _closure1_slot1;
            zuuluu = 10;
            zuuluu = yankee[zuuluu];
            zuuluu = romeon.bind(tangon)(zuuluu);
            backup = foxtra.useCallback;
            romeon = new Array(1);
            romeon[0] = michal;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    var _closure3_slot0 = michal;
                    zuuluu = _closure2_slot6;
                    zuuluu = zuuluu.current;
                    if(!zuuluu) { _fun00010_ip = 40; continue _fun00009 }
 24:
                    zuuluu = _closure2_slot10;
                    michal = undefined;
                    entity = function(argFoo) {
                        michal = _closure3_slot0;
                        entity = argFoo;
                        entity = entity + michal;
                        return entity;
                    };
                    entity = zuuluu.bind(michal)(entity);
 40:
                    entity = undefined;
                    return entity;
                }
            };
            michal = backup.bind(foxtra)(michal, romeon);
            michal = zuuluu.bind(tangon)(michal);
            backup = michal.stop;
            _closure2_slot11 = backup;
            michal = michal.reset;
            _closure2_slot12 = michal;
            zuuluu = 11;
            zuuluu = yankee[zuuluu];
            offset = offset.bind(tangon)(zuuluu);
            zuuluu = offset.useFocusEffect;
            romeon = foxtra.useCallback;
            yankee = new Array(4);
            yankee[0] = sizing;
            yankee[1] = kiloes;
            yankee[2] = backup;
            yankee[3] = michal;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot1;
                    if(!michal) { _fun00012_ip = 33; continue _fun00011 }
 10:
                    tangon = _closure2_slot10;
                    zuuluu = _closure2_slot8;
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    entity = _closure2_slot12;
                    entity = entity.bind(michal)();
 33:
                    entity = function() {
                        michal = _closure2_slot11;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    return entity;
                }
            };
            michal = romeon.bind(foxtra)(michal, yankee);
            michal = zuuluu.bind(offset)(michal);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot5;
            entity = {};
            offset = option.profileEffects;
            option = new Array(2);
            option[0] = offset;
            option[1] = verify;
            entity['style'] = option;
            option = 'none';
            entity['pointerEvents'] = option;
            entity['onLayout'] = oscard;
            oscard = golfie.map;
            report = function(argFoo, argBar) {
                option = argFoo;
                michal = option.src;
                entity = argBar;
                report = michal + entity;
                zuuluu = _closure1_slot0;
                verify = _closure1_slot2;
                michal = 12;
                michal = verify[michal];
                tangon = undefined;
                golfie = zuuluu.bind(tangon)(michal);
                zuuluu = golfie.shouldAnimate;
                michal = _closure2_slot9;
                golfie = zuuluu.bind(golfie)(option, michal);
                zuuluu = _closure1_slot9;
                michal = _closure1_slot1;
                entity = 13;
                entity = verify[entity];
                michal = michal.bind(tangon)(entity);
                entity = {};
                entity['layerConfig'] = option;
                entity['animate'] = golfie;
                golfie = _closure2_slot2;
                entity['width'] = golfie;
                golfie = _closure2_slot3;
                entity['accessibilityLabel'] = golfie;
                golfie = _closure2_slot7;
                entity['onLoad'] = golfie;
                oscard = _closure2_slot6;
                oscard = oscard.current;
                entity['loaded'] = oscard;
                entity = zuuluu.bind(tangon)(michal, entity, report);
                return entity;
            };
            report = oscard.bind(golfie)(report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = report;
    report = function(argFoo) { // Original name: StaticEffect
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.config;
            foxtra = zuuluu.bannerAdjustment;
            tangon = undefined;
            if(!(foxtra === tangon)) { _fun00014_ip = 24; continue _fun00013 }
 22:
            foxtra = 0;
 24:
            result = zuuluu.useThumbnail;
            var _closure2_slot0 = result;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            zuuluu = _closure1_slot10;
            golfie = zuuluu.bind(tangon)();
            sizing = michal.reducedMotionSrc;
            _closure2_slot1 = sizing;
            output = michal.thumbnailPreviewSrc;
            _closure2_slot2 = output;
            offset = michal.accessibilityLabel;
            michal = _closure1_slot12;
            michal = michal.bind(tangon)();
            kiloes = michal.width;
            _closure2_slot3 = kiloes;
            oscard = michal.onLayout;
            option = _closure1_slot4;
            michal = option.useState;
            romeon = 0;
            verify = michal.bind(option)(romeon);
            zuuluu = _closure1_slot3;
            michal = 2;
            zuuluu = zuuluu.bind(tangon)(verify, michal);
            backup = zuuluu[romeon];
            michal = 1;
            michal = zuuluu[michal];
            _closure2_slot4 = michal;
            zuuluu = option.useEffect;
            michal = new Array(4);
            michal[0] = sizing;
            michal[1] = output;
            michal[2] = kiloes;
            michal[3] = result;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = _closure2_slot3;
                    zuuluu = 0;
                    if(!(zuuluu !== tangon)) { _fun00016_ip = 62; continue _fun00015 }
 15:
                    report = _closure1_slot7;
                    tangon = report.getSize;
                    zuuluu = _closure2_slot0;
                    if(zuuluu) { _fun00016_ip = 41; continue _fun00015 }
 35:
                    zuuluu = _closure2_slot1;
                    _fun00016_ip = 45; continue _fun00015;
 41:
                    zuuluu = _closure2_slot2;
 45:
                    michal = function(argFoo, argBar) {
                        zuuluu = _closure2_slot4;
                        michal = _closure2_slot3;
                        entity = argFoo;
                        michal = michal / entity;
                        entity = argBar;
                        michal = entity * michal;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity = function() {
                        zuuluu = _closure2_slot4;
                        tangon = _closure2_slot3;
                        report = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 14;
                        michal = michal[entity];
                        entity = undefined;
                        michal = report.bind(entity)(michal);
                        michal = michal.DEFAULT_PROFILE_EFFECT_WH_RATIO;
                        michal = tangon / michal;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 62:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(option)(entity, michal);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot5;
            if(!(romeon !== backup)) { _fun00014_ip = 353; continue _fun00013 }
 208:
            entity = {};
            option = golfie.profileEffects;
            entity['style'] = option;
            option = 'none';
            entity['pointerEvents'] = option;
            entity['onLayout'] = oscard;
            verify = _closure1_slot9;
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 15;
            report = yankee[report];
            option = option.bind(tangon)(report);
            report = {'resizeMode': 'cover', 'resizeMethod': 'resize', 'enableAnimation': true};
            yankee = {};
            if(!result) { _fun00014_ip = 280; continue _fun00013 }
 277:
            sizing = output;
 280:
            yankee['uri'] = sizing;
            report['source'] = yankee;
            report['alt'] = offset;
            report['height'] = backup;
            report['width'] = kiloes;
            yankee = golfie.effect;
            offset = new Array(2);
            offset[0] = yankee;
            yankee = {};
            yankee['width'] = kiloes;
            yankee['height'] = backup;
            romeon = romeon - foxtra;
            yankee['top'] = romeon;
            offset[1] = yankee;
            report['style'] = offset;
            report = verify.bind(tangon)(option, report);
            entity['children'] = report;
            _fun00014_ip = 382; continue _fun00013;
 353:
            report = {};
            golfie = golfie.profileEffects;
            report['style'] = golfie;
            golfie = 'none';
            report['pointerEvents'] = golfie;
            report['onLayout'] = oscard;
            entity = report;
 382:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot14 = report;
    report = 19;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/profile_effects/native/ProfileEffect.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: _default
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            golfie = argFoo;
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 16;
            entity = tangon[entity];
            oscard = undefined;
            tangon = michal.bind(oscard)(entity);
            michal = tangon.useProfileEffectPreset;
            entity = golfie.profileEffectId;
            michal = michal.bind(tangon)(entity);
            entity = null;
            tangon = entity == michal;
            yankee = undefined;
            if(tangon) { _fun00018_ip = 63; continue _fun00017 }
 58:
            yankee = michal.config;
 63:
            tangon = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 17;
            michal = offset[michal];
            romeon = tangon.bind(oscard)(michal);
            option = romeon.useStateFromStores;
            michal = _closure1_slot8;
            report = new Array(1);
            report[0] = michal;
            michal = function() {
                entity = _closure1_slot8;
                entity = entity.useReducedMotion;
                return entity;
            };
            report = option.bind(romeon)(report, michal);
            michal = 6;
            michal = offset[michal];
            option = tangon.bind(oscard)(michal);
            michal = option.usePotentiallyRandomizedConfig;
            option = michal.bind(option)(yankee);
            michal = 7;
            michal = offset[michal];
            offset = tangon.bind(oscard)(michal);
            tangon = offset.getProfileEffectNativePreloadExperiment;
            michal = 'WrappedProfileEffect';
            tangon = tangon.bind(offset)(michal);
            yankee = _closure1_slot4;
            offset = yankee.useState;
            michal = false;
            yankee = offset.bind(yankee)(michal);
            offset = _closure1_slot3;
            michal = 2;
            yankee = offset.bind(oscard)(yankee, michal);
            michal = 0;
            michal = yankee[michal];
            offset = 1;
            offset = yankee[offset];
            var _closure2_slot0 = offset;
            offset = entity == option;
            entity = null;
            if(offset) { _fun00018_ip = 366; continue _fun00017 }
 221:
            if(report) { _fun00018_ip = 321; continue _fun00017 }
 224:
            report = golfie.useThumbnail;
            if(report) { _fun00018_ip = 321; continue _fun00017 }
 233:
            if(tangon) { _fun00018_ip = 288; continue _fun00017 }
 236:
            if(michal) { _fun00018_ip = 288; continue _fun00017 }
 239:
            report = _closure1_slot9;
            tangon = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 18;
            michal = offset[michal];
            tangon = tangon.bind(oscard)(michal);
            michal = {};
            michal['profileEffectConfig'] = option;
            verify = function() { // Original name: onReady
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = true;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal['onReady'] = verify;
            michal = report.bind(oscard)(tangon, michal);
            _fun00018_ip = 319; continue _fun00017;
 288:
            verify = _closure1_slot9;
            report = _closure1_slot13;
            tangon = {};
            tangon['profileEffectConfig'] = option;
            backup = tangon;
            foxtra = golfie;
            offset = copyDataProperties(backup, foxtra);
            michal = verify.bind(oscard)(report, tangon);
 319:
            _fun00018_ip = 363; continue _fun00017;
 321:
            report = _closure1_slot9;
            tangon = _closure1_slot14;
            zuuluu = {};
            zuuluu['config'] = option;
            option = golfie.bannerAdjustment;
            zuuluu['bannerAdjustment'] = option;
            golfie = golfie.useThumbnail;
            zuuluu['useThumbnail'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 363:
            entity = michal;
 366:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['usePreloadProfileEffect'] = michal;
    return entity;
})();