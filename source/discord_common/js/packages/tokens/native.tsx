// discord_common/js/packages/tokens/native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = offset;
    golfie = global;
    report = golfie.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    entity = 0;
    michal = offset[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    michal = michal._private;
    oscard = michal.Themes;
    var _closure1_slot3 = oscard;
    michal = 1;
    tangon = offset[michal];
    tangon = verify.bind(entity)(tangon);
    tangon = tangon._private;
    tangon = tangon.SemanticColors;
    var _closure1_slot4 = tangon;
    michal = offset[michal];
    michal = verify.bind(entity)(michal);
    michal = michal._private;
    report = michal.RawColors;
    var _closure1_slot5 = report;
    michal = 2;
    michal = offset[michal];
    michal = verify.bind(entity)(michal);
    michal = michal._private;
    michal = michal.Shadows;
    option = 3;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option._private;
    option = option.Spacing;
    romeon = golfie.Symbol;
    golfie = 'semanticColor';
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = {};
    golfie['themes'] = oscard;
    romeon = 4;
    backup = offset[romeon];
    kiloes = foxtra.bind(entity)(backup);
    backup = function(argFoo, argBar) {
        entity = {};
        zuuluu = _closure1_slot6;
        michal = argBar;
        entity[zuuluu] = michal;
        return entity;
    };
    backup = kiloes.bind(entity)(tangon, backup);
    golfie['colors'] = backup;
    golfie['unsafe_rawColors'] = report;
    romeon = offset[romeon];
    foxtra = foxtra.bind(entity)(romeon);
    romeon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = function(argFoo) { // Original name: createResolve
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = {};
            michal = function(argFoo, argBar) { // Original name: resolve
                tangon = _closure3_slot0;
                michal = _closure2_slot0;
                entity = argFoo;
                entity = michal[entity];
                zuuluu = entity.nativeStyles;
                michal = undefined;
                entity = argBar;
                entity = tangon.bind(michal)(zuuluu, entity);
                return entity;
            };
            entity['resolve'] = michal;
            return entity;
        };
        entity = {};
        zuuluu = undefined;
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.shadowOffset;
            return entity;
        };
        report = tangon.bind(zuuluu)(report);
        entity['shadowOffset'] = report;
        report = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                entity = argBar;
                if(entity) { _fun00002_ip = 17; continue _fun00001 }
 9:
                entity = michal.shadowColor;
                _fun00002_ip = 23; continue _fun00001;
 17:
                entity = michal.shadowColorAndroid;
 23:
                return entity;
            }
        };
        report = tangon.bind(zuuluu)(report);
        entity['shadowColor'] = report;
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.shadowOpacity;
            return entity;
        };
        report = tangon.bind(zuuluu)(report);
        entity['shadowOpacity'] = report;
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.shadowRadius;
            return entity;
        };
        report = tangon.bind(zuuluu)(report);
        entity['shadowRadius'] = report;
        michal = function(argFoo) {
            entity = argFoo;
            entity = entity.elevation;
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        entity['elevation'] = michal;
        return entity;
    };
    romeon = foxtra.bind(entity)(michal, romeon);
    golfie['shadows'] = romeon;
    romeon = 5;
    romeon = offset[romeon];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.Radius;
    golfie['radii'] = romeon;
    golfie['spacing'] = option;
    option = {};
    romeon = function(argFoo) { // Original name: isSemanticColor
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = 'object';
            entity = typeof zuuluu;
            entity = michal === entity;
            if(!entity) { _fun00004_ip = 23; continue _fun00003 }
 17:
            michal = null;
            entity = michal !== zuuluu;
 23:
            if(!entity) { _fun00004_ip = 37; continue _fun00003 }
 26:
            michal = _closure1_slot6;
            entity = michal in zuuluu;
 37:
            return entity;
        }
    };
    option['isSemanticColor'] = romeon;
    romeon = function(argFoo) { // Original name: getSemanticColorName
        michal = _closure1_slot6;
        entity = argFoo;
        entity = entity[michal];
        return entity;
    };
    option['getSemanticColorName'] = romeon;
    romeon = function(argFoo, argBar, argBaz) { // Original name: resolveSemanticColor
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = argFoo;
            golfie = argBaz;
            michal = 'string';
            entity = typeof oscard;
            yankee = oscard;
            if(!(michal === entity)) { _fun00006_ip = 104; continue _fun00005 }
 20:
            entity = oscard.toUpperCase;
            michal = entity.bind(oscard)();
            zuuluu = _closure1_slot3;
            zuuluu = michal in zuuluu;
            if(zuuluu) { _fun00006_ip = 96; continue _fun00005 }
 44:
            zuuluu = global;
            report = zuuluu.Error;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = 'Invalid theme: ';
            result = tangon.bind(zuuluu)(oscard);
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            echoed = tangon;
            zuuluu = new echoed[report](result, output);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            throw zuuluu;
 96:
            entity = _closure1_slot3;
            yankee = entity[michal];
 104:
            zuuluu = _closure1_slot4;
            tangon = _closure1_slot6;
            entity = argBar;
            entity = entity[tangon];
            option = zuuluu[entity];
            offset = option.category;
            entity = option[yankee];
            tangon = _closure1_slot5;
            zuuluu = entity.raw;
            oscard = tangon[zuuluu];
            entity = entity.opacity;
            zuuluu = null;
            tangon = zuuluu == golfie;
            report = undefined;
            verify = undefined;
            if(tangon) { _fun00006_ip = 172; continue _fun00005 }
 166:
            verify = golfie.gradient;
 172:
            romeon = oscard;
            tangon = entity;
            if(!(zuuluu != verify)) { _fun00006_ip = 442; continue _fun00005 }
 185:
            verify = 'gradient';
            verify = verify in option;
            romeon = oscard;
            tangon = entity;
            if(!verify) { _fun00006_ip = 442; continue _fun00005 }
 205:
            verify = option.gradient;
            foxtra = zuuluu == golfie;
            option = undefined;
            if(foxtra) { _fun00006_ip = 232; continue _fun00005 }
 220:
            foxtra = golfie.gradient;
            option = foxtra.theme;
 232:
            option = verify[option];
            romeon = oscard;
            tangon = entity;
            if(!(zuuluu != option)) { _fun00006_ip = 442; continue _fun00005 }
 249:
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 6;
            entity = verify[entity];
            oscard = oscard.bind(report)(entity);
            verify = option.color;
            entity = _closure1_slot5;
            entity = verify in entity;
            if(entity) { _fun00006_ip = 316; continue _fun00005 }
 285:
            verify = zuuluu == golfie;
            entity = undefined;
            if(verify) { _fun00006_ip = 314; continue _fun00005 }
 294:
            verify = golfie.gradient;
            foxtra = verify.colors;
            verify = option.color;
            entity = foxtra[verify];
 314:
            _fun00006_ip = 329; continue _fun00005;
 316:
            foxtra = _closure1_slot5;
            verify = option.color;
            entity = foxtra[verify];
 329:
            foxtra = oscard.bind(report)(entity);
            entity = 'saturation';
            entity = entity in option;
            backup = foxtra;
            if(!entity) { _fun00006_ip = 371; continue _fun00005 }
 348:
            verify = foxtra.set;
            oscard = option.saturation;
            entity = 'hsl.s';
            backup = verify.bind(foxtra)(entity, oscard);
 371:
            entity = 'lightness';
            entity = entity in option;
            oscard = backup;
            if(!entity) { _fun00006_ip = 408; continue _fun00005 }
 385:
            foxtra = backup.set;
            verify = option.lightness;
            entity = 'hsl.l';
            oscard = foxtra.bind(backup)(entity, verify);
 408:
            entity = oscard.hex;
            oscard = entity.bind(oscard)();
            entity = 'opacity';
            verify = entity in option;
            entity = 1;
            if(!verify) { _fun00006_ip = 436; continue _fun00005 }
 431:
            entity = option.opacity;
 436:
            tangon = entity;
            romeon = oscard;
 442:
            oscard = zuuluu == golfie;
            entity = undefined;
            if(oscard) { _fun00006_ip = 457; continue _fun00005 }
 451:
            entity = golfie.contrast;
 457:
            option = zuuluu != entity;
            oscard = 1;
            verify = oscard;
            if(!option) { _fun00006_ip = 473; continue _fun00005 }
 470:
            verify = entity;
 473:
            option = zuuluu == golfie;
            entity = undefined;
            if(option) { _fun00006_ip = 488; continue _fun00005 }
 482:
            entity = golfie.saturation;
 488:
            zuuluu = zuuluu != entity;
            golfie = oscard;
            if(!zuuluu) { _fun00006_ip = 501; continue _fun00005 }
 498:
            golfie = entity;
 501:
            option = romeon;
            if(!(golfie < oscard)) { _fun00006_ip = 541; continue _fun00005 }
 508:
            zuuluu = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = 7;
            entity = foxtra[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.transformColorForReducedSaturation;
            option = entity.bind(zuuluu)(romeon, offset, golfie);
 541:
            zuuluu = option;
            if(!(oscard !== verify)) { _fun00006_ip = 593; continue _fun00005 }
 548:
            golfie = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 7;
            entity = romeon[entity];
            golfie = golfie.bind(report)(entity);
            entity = golfie.transformColorContrast;
            echoed = golfie;
            result = option;
            output = offset;
            sizing = yankee;
            kiloes = verify;
            zuuluu = echoed[entity](result, output, sizing, kiloes, backup);
 593:
            entity = zuuluu;
            if(!(oscard !== tangon)) { _fun00006_ip = 645; continue _fun00005 }
 600:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 6;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            zuuluu = michal.bind(report)(zuuluu);
            michal = zuuluu.alpha;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = zuuluu.hex;
            entity = michal.bind(zuuluu)();
 645:
            return entity;
        }
    };
    option['resolveSemanticColor'] = romeon;
    romeon = function(argFoo, argBar, argBaz) { // Original name: adjustColorSaturation
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.transformColorForReducedSaturation;
        zuuluu = argFoo;
        michal = argBaz;
        entity = argBar;
        entity = tangon.bind(report)(zuuluu, michal, entity);
        return entity;
    };
    option['adjustColorSaturation'] = romeon;
    yankee = function(argFoo, argBar, argBaz, argCor) { // Original name: adjustColorContrast
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        oscard = zuuluu.bind(entity)(michal);
        report = oscard.transformColorContrast;
        offset = argFoo;
        verify = argBaz;
        option = argCor;
        golfie = argBar;
        yankee = oscard;
        entity = yankee[report](offset, verify, option, golfie, oscard);
        return entity;
    };
    option['adjustColorContrast'] = yankee;
    golfie['internal'] = option;
    option = 8;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = '../discord_common/js/packages/tokens/native.tsx';
    option = verify.bind(offset)(option);
    zuuluu['default'] = golfie;
    zuuluu['Theme'] = oscard;
    zuuluu['RawColor'] = report;
    zuuluu['SemanticColor'] = tangon;
    zuuluu['Shadow'] = michal;
    return entity;
})();