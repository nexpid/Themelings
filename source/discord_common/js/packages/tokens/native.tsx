// discord_common/js/packages/tokens/native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    verify = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = offset;
    golf = global;
    report = golf.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    entity = 0;
    mike = offset[entity];
    entity = undefined;
    mike = verify.bind(entity)(mike);
    mike = mike._private;
    oscar = mike.Themes;
    var _closure1_slot3 = oscar;
    mike = 1;
    tango = offset[mike];
    tango = verify.bind(entity)(tango);
    tango = tango._private;
    tango = tango.SemanticColors;
    var _closure1_slot4 = tango;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    mike = mike._private;
    report = mike.RawColors;
    var _closure1_slot5 = report;
    mike = 2;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    mike = mike._private;
    mike = mike.Shadows;
    options = 3;
    options = offset[options];
    options = verify.bind(entity)(options);
    options = options._private;
    options = options.Spacing;
    romeo = golf.Symbol;
    golf = 'semanticColor';
    golf = romeo.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = {};
    golf['themes'] = oscar;
    romeo = 4;
    backup = offset[romeo];
    kilo = foxtrot.bind(entity)(backup);
    backup = function(argFoo, argBar) {
        entity = {};
        zulu = _closure1_slot6;
        mike = argBar;
        entity[zulu] = mike;
        return entity;
    };
    backup = kilo.bind(entity)(tango, backup);
    golf['colors'] = backup;
    golf['unsafe_rawColors'] = report;
    romeo = offset[romeo];
    foxtrot = foxtrot.bind(entity)(romeo);
    romeo = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = function(argFoo) { // Original name: createResolve
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = {};
            mike = function(argFoo, argBar) { // Original name: resolve
                tango = _closure3_slot0;
                mike = _closure2_slot0;
                entity = argFoo;
                entity = mike[entity];
                zulu = entity.nativeStyles;
                mike = undefined;
                entity = argBar;
                entity = tango.bind(mike)(zulu, entity);
                return entity;
            };
            entity['resolve'] = mike;
            return entity;
        };
        entity = {};
        zulu = undefined;
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.shadowOffset;
            return entity;
        };
        report = tango.bind(zulu)(report);
        entity['shadowOffset'] = report;
        report = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = argFoo;
                entity = argBar;
                if(entity) { _fun00002_ip = 17; continue _fun00001 }
 9:
                entity = mike.shadowColor;
                _fun00002_ip = 23; continue _fun00001;
 17:
                entity = mike.shadowColorAndroid;
 23:
                return entity;
            }
        };
        report = tango.bind(zulu)(report);
        entity['shadowColor'] = report;
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.shadowOpacity;
            return entity;
        };
        report = tango.bind(zulu)(report);
        entity['shadowOpacity'] = report;
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.shadowRadius;
            return entity;
        };
        report = tango.bind(zulu)(report);
        entity['shadowRadius'] = report;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.elevation;
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        entity['elevation'] = mike;
        return entity;
    };
    romeo = foxtrot.bind(entity)(mike, romeo);
    golf['shadows'] = romeo;
    romeo = 5;
    romeo = offset[romeo];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.Radius;
    golf['radii'] = romeo;
    golf['spacing'] = options;
    options = {};
    romeo = function(argFoo) { // Original name: isSemanticColor
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            mike = 'object';
            entity = typeof zulu;
            entity = mike === entity;
            if(!entity) { _fun00004_ip = 23; continue _fun00003 }
 17:
            mike = null;
            entity = mike !== zulu;
 23:
            if(!entity) { _fun00004_ip = 37; continue _fun00003 }
 26:
            mike = _closure1_slot6;
            entity = mike in zulu;
 37:
            return entity;
        }
    };
    options['isSemanticColor'] = romeo;
    romeo = function(argFoo) { // Original name: getSemanticColorName
        mike = _closure1_slot6;
        entity = argFoo;
        entity = entity[mike];
        return entity;
    };
    options['getSemanticColorName'] = romeo;
    romeo = function(argFoo, argBar, argBaz) { // Original name: resolveSemanticColor
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscar = argFoo;
            golf = argBaz;
            mike = 'string';
            entity = typeof oscar;
            yankee = oscar;
            if(!(mike === entity)) { _fun00006_ip = 104; continue _fun00005 }
 20:
            entity = oscar.toUpperCase;
            mike = entity.bind(oscar)();
            zulu = _closure1_slot3;
            zulu = mike in zulu;
            if(zulu) { _fun00006_ip = 96; continue _fun00005 }
 44:
            zulu = global;
            report = zulu.Error;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = 'Invalid theme: ';
            result = tango.bind(zulu)(oscar);
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            echo = tango;
            zulu = new echo[report](result, output);
            zulu = zulu instanceof Object ? zulu : tango;
            throw zulu;
 96:
            entity = _closure1_slot3;
            yankee = entity[mike];
 104:
            zulu = _closure1_slot4;
            tango = _closure1_slot6;
            entity = argBar;
            entity = entity[tango];
            options = zulu[entity];
            offset = options.category;
            entity = options[yankee];
            tango = _closure1_slot5;
            zulu = entity.raw;
            oscar = tango[zulu];
            entity = entity.opacity;
            zulu = null;
            tango = zulu == golf;
            report = undefined;
            verify = undefined;
            if(tango) { _fun00006_ip = 172; continue _fun00005 }
 166:
            verify = golf.gradient;
 172:
            romeo = oscar;
            tango = entity;
            if(!(zulu != verify)) { _fun00006_ip = 442; continue _fun00005 }
 185:
            verify = 'gradient';
            verify = verify in options;
            romeo = oscar;
            tango = entity;
            if(!verify) { _fun00006_ip = 442; continue _fun00005 }
 205:
            verify = options.gradient;
            foxtrot = zulu == golf;
            options = undefined;
            if(foxtrot) { _fun00006_ip = 232; continue _fun00005 }
 220:
            foxtrot = golf.gradient;
            options = foxtrot.theme;
 232:
            options = verify[options];
            romeo = oscar;
            tango = entity;
            if(!(zulu != options)) { _fun00006_ip = 442; continue _fun00005 }
 249:
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 6;
            entity = verify[entity];
            oscar = oscar.bind(report)(entity);
            verify = options.color;
            entity = _closure1_slot5;
            entity = verify in entity;
            if(entity) { _fun00006_ip = 316; continue _fun00005 }
 285:
            verify = zulu == golf;
            entity = undefined;
            if(verify) { _fun00006_ip = 314; continue _fun00005 }
 294:
            verify = golf.gradient;
            foxtrot = verify.colors;
            verify = options.color;
            entity = foxtrot[verify];
 314:
            _fun00006_ip = 329; continue _fun00005;
 316:
            foxtrot = _closure1_slot5;
            verify = options.color;
            entity = foxtrot[verify];
 329:
            foxtrot = oscar.bind(report)(entity);
            entity = 'saturation';
            entity = entity in options;
            backup = foxtrot;
            if(!entity) { _fun00006_ip = 371; continue _fun00005 }
 348:
            verify = foxtrot.set;
            oscar = options.saturation;
            entity = 'hsl.s';
            backup = verify.bind(foxtrot)(entity, oscar);
 371:
            entity = 'lightness';
            entity = entity in options;
            oscar = backup;
            if(!entity) { _fun00006_ip = 408; continue _fun00005 }
 385:
            foxtrot = backup.set;
            verify = options.lightness;
            entity = 'hsl.l';
            oscar = foxtrot.bind(backup)(entity, verify);
 408:
            entity = oscar.hex;
            oscar = entity.bind(oscar)();
            entity = 'opacity';
            verify = entity in options;
            entity = 1;
            if(!verify) { _fun00006_ip = 436; continue _fun00005 }
 431:
            entity = options.opacity;
 436:
            tango = entity;
            romeo = oscar;
 442:
            oscar = zulu == golf;
            entity = undefined;
            if(oscar) { _fun00006_ip = 457; continue _fun00005 }
 451:
            entity = golf.contrast;
 457:
            options = zulu != entity;
            oscar = 1;
            verify = oscar;
            if(!options) { _fun00006_ip = 473; continue _fun00005 }
 470:
            verify = entity;
 473:
            options = zulu == golf;
            entity = undefined;
            if(options) { _fun00006_ip = 488; continue _fun00005 }
 482:
            entity = golf.saturation;
 488:
            zulu = zulu != entity;
            golf = oscar;
            if(!zulu) { _fun00006_ip = 501; continue _fun00005 }
 498:
            golf = entity;
 501:
            options = romeo;
            if(!(golf < oscar)) { _fun00006_ip = 541; continue _fun00005 }
 508:
            zulu = _closure1_slot0;
            foxtrot = _closure1_slot2;
            entity = 7;
            entity = foxtrot[entity];
            zulu = zulu.bind(report)(entity);
            entity = zulu.transformColorForReducedSaturation;
            options = entity.bind(zulu)(romeo, offset, golf);
 541:
            zulu = options;
            if(!(oscar !== verify)) { _fun00006_ip = 593; continue _fun00005 }
 548:
            golf = _closure1_slot0;
            romeo = _closure1_slot2;
            entity = 7;
            entity = romeo[entity];
            golf = golf.bind(report)(entity);
            entity = golf.transformColorContrast;
            echo = golf;
            result = options;
            output = offset;
            sizing = yankee;
            kilo = verify;
            zulu = echo[entity](result, output, sizing, kilo, backup);
 593:
            entity = zulu;
            if(!(oscar !== tango)) { _fun00006_ip = 645; continue _fun00005 }
 600:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 6;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            zulu = mike.bind(report)(zulu);
            mike = zulu.alpha;
            zulu = mike.bind(zulu)(tango);
            mike = zulu.hex;
            entity = mike.bind(zulu)();
 645:
            return entity;
        }
    };
    options['resolveSemanticColor'] = romeo;
    romeo = function(argFoo, argBar, argBaz) { // Original name: adjustColorSaturation
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.transformColorForReducedSaturation;
        zulu = argFoo;
        mike = argBaz;
        entity = argBar;
        entity = tango.bind(report)(zulu, mike, entity);
        return entity;
    };
    options['adjustColorSaturation'] = romeo;
    yankee = function(argFoo, argBar, argBaz, argCorge) { // Original name: adjustColorContrast
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        oscar = zulu.bind(entity)(mike);
        report = oscar.transformColorContrast;
        offset = argFoo;
        verify = argBaz;
        options = argCorge;
        golf = argBar;
        yankee = oscar;
        entity = yankee[report](offset, verify, options, golf, oscar);
        return entity;
    };
    options['adjustColorContrast'] = yankee;
    golf['internal'] = options;
    options = 8;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = '../discord_common/js/packages/tokens/native.tsx';
    options = verify.bind(offset)(options);
    zulu['default'] = golf;
    zulu['Theme'] = oscar;
    zulu['RawColor'] = report;
    zulu['SemanticColor'] = tango;
    zulu['Shadow'] = mike;
    return entity;
})();