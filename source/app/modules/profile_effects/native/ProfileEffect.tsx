// app/modules/profile_effects/native/ProfileEffect.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    options = golf[mike];
    mike = argCorge;
    mike = mike.bind(entity)(options);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.View;
    var _closure1_slot5 = options;
    options = mike.Dimensions;
    var _closure1_slot6 = options;
    mike = mike.Image;
    var _closure1_slot7 = mike;
    mike = 3;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 4;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot9 = mike;
    mike = 5;
    mike = golf[mike];
    options = oscar.bind(entity)(mike);
    report = options.createStyles;
    mike = {};
    offset = 'absolute';
    verify = {'position': 'absolute', 'width': '100%', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'flex': 1, 'justifyContent': 'flex-start'};
    mike['profileEffects'] = verify;
    verify = {};
    verify['position'] = offset;
    mike['effect'] = verify;
    mike = report.bind(options)(mike);
    var _closure1_slot10 = mike;
    mike = function(argFoo) { // Original name: usePreloadProfileEffect
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot4;
        tango = report.useMemo;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            entity = global;
            zulu = entity.Set;
            tango = _closure2_slot0;
            mike = tango.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.src;
                return entity;
            };
            report = mike.bind(tango)(entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = mike;
            entity = new oscar[zulu](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        var _closure2_slot1 = mike;
        zulu = report.useRef;
        zulu = zulu.bind(report)(mike);
        var _closure2_slot2 = zulu;
        tango = report.useRef;
        zulu = false;
        zulu = tango.bind(report)(zulu);
        var _closure2_slot3 = zulu;
        oscar = report.useEffect;
        tango = new Array(1);
        tango[0] = mike;
        mike = function() {
            zulu = _closure2_slot2;
            entity = _closure2_slot1;
            zulu['current'] = entity;
            mike = _closure2_slot3;
            zulu = entity.size;
            entity = 0;
            entity = entity === zulu;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        mike = oscar.bind(report)(mike, tango);
        tango = report.useCallback;
        mike = function(argFoo) {
            _fun79939: for(var _fun79939_ip = 0; ; ) switch(_fun79939_ip) {
 0:
                mike = _closure2_slot3;
                mike = mike.current;
                if(mike) { _fun79939_ip = 65; continue _fun79939 }
 15:
                mike = _closure2_slot2;
                report = mike.current;
                tango = report.delete;
                zulu = argFoo;
                zulu = tango.bind(report)(zulu);
                mike = mike.current;
                zulu = mike.size;
                mike = 0;
                if(!(mike === zulu)) { _fun79939_ip = 65; continue _fun79939 }
 53:
                mike = _closure2_slot3;
                entity = true;
                mike['current'] = entity;
 65:
                entity = undefined;
                return entity;
            }
        };
        entity = new Array(0);
        mike = tango.bind(report)(mike, entity);
        entity = {};
        entity['loaded'] = zulu;
        entity['onLayerLoaded'] = mike;
        return entity;
    };
    var _closure1_slot11 = mike;
    report = function() { // Original name: useProfileDimensions
        oscar = _closure1_slot4;
        tango = oscar.useState;
        zulu = 0;
        options = tango.bind(oscar)(zulu);
        golf = _closure1_slot3;
        report = undefined;
        tango = 2;
        report = golf.bind(report)(options, tango);
        zulu = report[zulu];
        tango = 1;
        tango = report[tango];
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        tango = report.get;
        mike = 'window';
        mike = tango.bind(report)(mike);
        tango = mike.height;
        report = oscar.useCallback;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.nativeEvent;
            entity = entity.layout;
            zulu = entity.width;
            mike = _closure2_slot0;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        entity = new Array(0);
        mike = report.bind(oscar)(mike, entity);
        entity = {};
        entity['height'] = tango;
        entity['width'] = zulu;
        entity['onLayout'] = mike;
        return entity;
    };
    var _closure1_slot12 = report;
    report = function(argFoo) { // Original name: ProfileEffect
        _fun79942: for(var _fun79942_ip = 0; ; ) switch(_fun79942_ip) {
 0:
            entity = argFoo;
            mike = entity.profileEffectConfig;
            var _closure2_slot0 = mike;
            sizing = entity.replayOnNavigationFocus;
            tango = undefined;
            if(!(sizing === tango)) { _fun79942_ip = 29; continue _fun79942 }
 27:
            sizing = false;
 29:
            var _closure2_slot1 = sizing;
            verify = entity.style;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            var _closure2_slot12 = tango;
            zulu = _closure1_slot10;
            options = zulu.bind(tango)();
            zulu = _closure1_slot12;
            zulu = zulu.bind(tango)();
            oscar = zulu.width;
            _closure2_slot2 = oscar;
            oscar = zulu.onLayout;
            zulu = mike.accessibilityLabel;
            _closure2_slot3 = zulu;
            foxtrot = _closure1_slot4;
            golf = foxtrot.useMemo;
            mike = mike.effects;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.sortEffectLayers;
                entity = _closure2_slot0;
                entity = entity.effects;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = golf.bind(foxtrot)(mike, zulu);
            _closure2_slot4 = golf;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 7;
            mike = yankee[mike];
            romeo = offset.bind(tango)(mike);
            zulu = romeo.getProfileEffectNativePreloadExperiment;
            mike = 'ProfileEffect';
            zulu = zulu.bind(romeo)(mike);
            _closure2_slot5 = zulu;
            backup = foxtrot.useMemo;
            romeo = new Array(2);
            romeo[0] = golf;
            romeo[1] = zulu;
            mike = function() {
                _fun79944: for(var _fun79944_ip = 0; ; ) switch(_fun79944_ip) {
 0:
                    entity = _closure2_slot5;
                    if(entity) { _fun79944_ip = 16; continue _fun79944 }
 10:
                    entity = new Array(0);
                    _fun79944_ip = 20; continue _fun79944;
 16:
                    entity = _closure2_slot4;
 20:
                    return entity;
                }
            };
            romeo = backup.bind(foxtrot)(mike, romeo);
            mike = _closure1_slot11;
            romeo = mike.bind(tango)(romeo);
            mike = romeo.loaded;
            _closure2_slot6 = mike;
            romeo = romeo.onLayerLoaded;
            _closure2_slot7 = romeo;
            backup = foxtrot.useMemo;
            romeo = new Array(1);
            romeo[0] = zulu;
            zulu = function() {
                _fun79945: for(var _fun79945_ip = 0; ; ) switch(_fun79945_ip) {
 0:
                    entity = _closure2_slot5;
                    mike = 0;
                    if(entity) { _fun79945_ip = 57; continue _fun79945 }
 12:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 8;
                    tango = tango[entity];
                    entity = undefined;
                    tango = report.bind(entity)(tango);
                    entity = tango.isAndroid;
                    entity = entity.bind(tango)();
                    mike = 0;
                    if(!entity) { _fun79945_ip = 57; continue _fun79945 }
 51:
                    mike = 900;
 57:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 9;
                    zulu = zulu[entity];
                    entity = undefined;
                    entity = tango.bind(entity)(zulu);
                    entity = entity.ENTRY_DELAY;
                    entity = -entity;
                    entity = entity - mike;
                    return entity;
                }
            };
            kilo = backup.bind(foxtrot)(zulu, romeo);
            _closure2_slot8 = kilo;
            zulu = foxtrot.useState;
            backup = zulu.bind(foxtrot)(kilo);
            romeo = _closure1_slot3;
            zulu = 2;
            romeo = romeo.bind(tango)(backup, zulu);
            zulu = 0;
            zulu = romeo[zulu];
            _closure2_slot9 = zulu;
            zulu = 1;
            zulu = romeo[zulu];
            _closure2_slot10 = zulu;
            backup = foxtrot.useEffect;
            romeo = new Array(1);
            romeo[0] = kilo;
            zulu = function() {
                zulu = _closure2_slot10;
                mike = _closure2_slot8;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            zulu = backup.bind(foxtrot)(zulu, romeo);
            romeo = _closure1_slot1;
            zulu = 10;
            zulu = yankee[zulu];
            zulu = romeo.bind(tango)(zulu);
            backup = foxtrot.useCallback;
            romeo = new Array(1);
            romeo[0] = mike;
            mike = function(argFoo) {
                _fun79947: for(var _fun79947_ip = 0; ; ) switch(_fun79947_ip) {
 0:
                    mike = argFoo;
                    var _closure3_slot0 = mike;
                    zulu = _closure2_slot6;
                    zulu = zulu.current;
                    if(!zulu) { _fun79947_ip = 42; continue _fun79947 }
 24:
                    zulu = _closure2_slot10;
                    mike = undefined;
                    entity = function(argFoo) {
                        mike = _closure3_slot0;
                        entity = argFoo;
                        entity = entity + mike;
                        return entity;
                    };
                    entity = zulu.bind(mike)(entity);
 42:
                    entity = undefined;
                    return entity;
                }
            };
            mike = backup.bind(foxtrot)(mike, romeo);
            mike = zulu.bind(tango)(mike);
            backup = mike.stop;
            _closure2_slot11 = backup;
            mike = mike.reset;
            _closure2_slot12 = mike;
            zulu = 11;
            zulu = yankee[zulu];
            offset = offset.bind(tango)(zulu);
            zulu = offset.useFocusEffect;
            romeo = foxtrot.useCallback;
            yankee = new Array(4);
            yankee[0] = sizing;
            yankee[1] = kilo;
            yankee[2] = backup;
            yankee[3] = mike;
            mike = function() {
                _fun79949: for(var _fun79949_ip = 0; ; ) switch(_fun79949_ip) {
 0:
                    mike = _closure2_slot1;
                    if(!mike) { _fun79949_ip = 33; continue _fun79949 }
 10:
                    tango = _closure2_slot10;
                    zulu = _closure2_slot8;
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    entity = _closure2_slot12;
                    entity = entity.bind(mike)();
 33:
                    entity = function() {
                        mike = _closure2_slot11;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    return entity;
                }
            };
            mike = romeo.bind(foxtrot)(mike, yankee);
            mike = zulu.bind(offset)(mike);
            zulu = _closure1_slot9;
            mike = _closure1_slot5;
            entity = {};
            offset = options.profileEffects;
            options = new Array(2);
            options[0] = offset;
            options[1] = verify;
            entity['style'] = options;
            options = 'none';
            entity['pointerEvents'] = options;
            entity['onLayout'] = oscar;
            oscar = golf.map;
            report = function(argFoo, argBar) {
                options = argFoo;
                mike = options.src;
                entity = argBar;
                report = mike + entity;
                zulu = _closure1_slot0;
                verify = _closure1_slot2;
                mike = 12;
                mike = verify[mike];
                tango = undefined;
                golf = zulu.bind(tango)(mike);
                zulu = golf.shouldAnimate;
                mike = _closure2_slot9;
                golf = zulu.bind(golf)(options, mike);
                zulu = _closure1_slot9;
                mike = _closure1_slot1;
                entity = 13;
                entity = verify[entity];
                mike = mike.bind(tango)(entity);
                entity = {};
                entity['layerConfig'] = options;
                entity['animate'] = golf;
                golf = _closure2_slot2;
                entity['width'] = golf;
                golf = _closure2_slot3;
                entity['accessibilityLabel'] = golf;
                golf = _closure2_slot7;
                entity['onLoad'] = golf;
                oscar = _closure2_slot6;
                oscar = oscar.current;
                entity['loaded'] = oscar;
                entity = zulu.bind(tango)(mike, entity, report);
                return entity;
            };
            report = oscar.bind(golf)(report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = report;
    report = function(argFoo) { // Original name: StaticEffect
        _fun79952: for(var _fun79952_ip = 0; ; ) switch(_fun79952_ip) {
 0:
            zulu = argFoo;
            mike = zulu.config;
            foxtrot = zulu.bannerAdjustment;
            tango = undefined;
            if(!(foxtrot === tango)) { _fun79952_ip = 24; continue _fun79952 }
 22:
            foxtrot = 0;
 24:
            result = zulu.useThumbnail;
            var _closure2_slot0 = result;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            zulu = _closure1_slot10;
            golf = zulu.bind(tango)();
            sizing = mike.reducedMotionSrc;
            _closure2_slot1 = sizing;
            output = mike.thumbnailPreviewSrc;
            _closure2_slot2 = output;
            offset = mike.accessibilityLabel;
            mike = _closure1_slot12;
            mike = mike.bind(tango)();
            kilo = mike.width;
            _closure2_slot3 = kilo;
            oscar = mike.onLayout;
            options = _closure1_slot4;
            mike = options.useState;
            romeo = 0;
            verify = mike.bind(options)(romeo);
            zulu = _closure1_slot3;
            mike = 2;
            zulu = zulu.bind(tango)(verify, mike);
            backup = zulu[romeo];
            mike = 1;
            mike = zulu[mike];
            _closure2_slot4 = mike;
            zulu = options.useEffect;
            mike = new Array(4);
            mike[0] = sizing;
            mike[1] = output;
            mike[2] = kilo;
            mike[3] = result;
            entity = function() {
                _fun79953: for(var _fun79953_ip = 0; ; ) switch(_fun79953_ip) {
 0:
                    tango = _closure2_slot3;
                    zulu = 0;
                    if(!(zulu !== tango)) { _fun79953_ip = 66; continue _fun79953 }
 15:
                    report = _closure1_slot7;
                    tango = report.getSize;
                    zulu = _closure2_slot0;
                    if(zulu) { _fun79953_ip = 41; continue _fun79953 }
 35:
                    zulu = _closure2_slot1;
                    _fun79953_ip = 45; continue _fun79953;
 41:
                    zulu = _closure2_slot2;
 45:
                    mike = function(argFoo, argBar) {
                        zulu = _closure2_slot4;
                        mike = _closure2_slot3;
                        entity = argFoo;
                        mike = mike / entity;
                        entity = argBar;
                        mike = entity * mike;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = function() {
                        zulu = _closure2_slot4;
                        tango = _closure2_slot3;
                        report = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 14;
                        mike = mike[entity];
                        entity = undefined;
                        mike = report.bind(entity)(mike);
                        mike = mike.DEFAULT_PROFILE_EFFECT_WH_RATIO;
                        mike = tango / mike;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = tango.bind(report)(zulu, mike, entity);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(options)(entity, mike);
            zulu = _closure1_slot9;
            mike = _closure1_slot5;
            if(!(romeo !== backup)) { _fun79952_ip = 356; continue _fun79952 }
 210:
            entity = {};
            options = golf.profileEffects;
            entity['style'] = options;
            options = 'none';
            entity['pointerEvents'] = options;
            entity['onLayout'] = oscar;
            verify = _closure1_slot9;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 15;
            report = yankee[report];
            options = options.bind(tango)(report);
            report = {'resizeMode': 'cover', 'resizeMethod': 'resize', 'enableAnimation': true};
            yankee = {};
            if(!result) { _fun79952_ip = 282; continue _fun79952 }
 279:
            sizing = output;
 282:
            yankee['uri'] = sizing;
            report['source'] = yankee;
            report['alt'] = offset;
            report['height'] = backup;
            report['width'] = kilo;
            yankee = golf.effect;
            offset = new Array(2);
            offset[0] = yankee;
            yankee = {};
            yankee['width'] = kilo;
            yankee['height'] = backup;
            romeo = romeo - foxtrot;
            yankee['top'] = romeo;
            offset[1] = yankee;
            report['style'] = offset;
            report = verify.bind(tango)(options, report);
            entity['children'] = report;
            _fun79952_ip = 385; continue _fun79952;
 356:
            report = {};
            golf = golf.profileEffects;
            report['style'] = golf;
            golf = 'none';
            report['pointerEvents'] = golf;
            report['onLayout'] = oscar;
            entity = report;
 385:
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot14 = report;
    report = 19;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/profile_effects/native/ProfileEffect.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: _default
        _fun79956: for(var _fun79956_ip = 0; ; ) switch(_fun79956_ip) {
 0:
            golf = argFoo;
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 16;
            entity = tango[entity];
            oscar = undefined;
            tango = mike.bind(oscar)(entity);
            mike = tango.useProfileEffectPreset;
            entity = golf.profileEffectId;
            mike = mike.bind(tango)(entity);
            entity = null;
            tango = entity == mike;
            yankee = undefined;
            if(tango) { _fun79956_ip = 63; continue _fun79956 }
 58:
            yankee = mike.config;
 63:
            tango = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 17;
            mike = offset[mike];
            romeo = tango.bind(oscar)(mike);
            options = romeo.useStateFromStores;
            mike = _closure1_slot8;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                entity = _closure1_slot8;
                entity = entity.useReducedMotion;
                return entity;
            };
            report = options.bind(romeo)(report, mike);
            mike = 6;
            mike = offset[mike];
            options = tango.bind(oscar)(mike);
            mike = options.usePotentiallyRandomizedConfig;
            options = mike.bind(options)(yankee);
            mike = 7;
            mike = offset[mike];
            offset = tango.bind(oscar)(mike);
            tango = offset.getProfileEffectNativePreloadExperiment;
            mike = 'WrappedProfileEffect';
            tango = tango.bind(offset)(mike);
            yankee = _closure1_slot4;
            offset = yankee.useState;
            mike = false;
            yankee = offset.bind(yankee)(mike);
            offset = _closure1_slot3;
            mike = 2;
            yankee = offset.bind(oscar)(yankee, mike);
            mike = 0;
            mike = yankee[mike];
            offset = 1;
            offset = yankee[offset];
            var _closure2_slot0 = offset;
            offset = entity == options;
            entity = null;
            if(offset) { _fun79956_ip = 370; continue _fun79956 }
 223:
            if(report) { _fun79956_ip = 325; continue _fun79956 }
 226:
            report = golf.useThumbnail;
            if(report) { _fun79956_ip = 325; continue _fun79956 }
 235:
            if(tango) { _fun79956_ip = 292; continue _fun79956 }
 238:
            if(mike) { _fun79956_ip = 292; continue _fun79956 }
 241:
            report = _closure1_slot9;
            tango = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 18;
            mike = offset[mike];
            tango = tango.bind(oscar)(mike);
            mike = {};
            mike['profileEffectConfig'] = options;
            verify = function() { // Original name: onReady
                zulu = _closure2_slot0;
                entity = undefined;
                mike = true;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike['onReady'] = verify;
            mike = report.bind(oscar)(tango, mike);
            _fun79956_ip = 323; continue _fun79956;
 292:
            verify = _closure1_slot9;
            report = _closure1_slot13;
            tango = {};
            tango['profileEffectConfig'] = options;
            backup = tango;
            foxtrot = golf;
            offset = copyDataProperties(backup, foxtrot);
            mike = verify.bind(oscar)(report, tango);
 323:
            _fun79956_ip = 367; continue _fun79956;
 325:
            report = _closure1_slot9;
            tango = _closure1_slot14;
            zulu = {};
            zulu['config'] = options;
            options = golf.bannerAdjustment;
            zulu['bannerAdjustment'] = options;
            golf = golf.useThumbnail;
            zulu['useThumbnail'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 367:
            entity = mike;
 370:
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['usePreloadProfileEffect'] = mike;
    return entity;
})();