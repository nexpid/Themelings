// app/design/components/Styles/native/createStyles.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: createCacheKey
        tangon = 0;
        zuuluu = copyRestArgs(tangon);
        michal = zuuluu.join;
        entity = '';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot8 = entity;
    tangon = function(argFoo) { // Original name: processColorOrThrow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot3;
            entity = undefined;
            entity = michal.bind(entity)(report);
            michal = null;
            if(!(michal != entity)) { _fun00002_ip = 25; continue _fun00001 }
 23:
            return entity;
 25:
            entity = global;
            zuuluu = entity.Error;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            michal = 'Unable to parse color: "';
            entity = '"';
            golfie = tangon.bind(michal)(report, entity);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            option = michal;
            entity = new option[zuuluu](golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = function(argFoo, argBar) { // Original name: parseThemedStyles
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            limora = argFoo;
            sierra = argBar;
            status = sierra.theme;
            target = sierra.saturation;
            papara = sierra.contrast;
            entity = {};
            record = limora;
            ctrled = undefined;
            update = 4;
            echoed = 6;
            result = 5;
            output = 1;
            sizing = 'text';
            kiloes = 'generic';
            backup = 'color';
            foxtra = 'border';
            romeon = 'borderColor';
            yankee = 'background';
            offset = 'backgroundColor';
            verify = 0;
            option = '#';
            golfie = 'string';
            oscard = output !== target;
            report = 'resolve';
            tangon = null;
            zuuluu = undefined;
            michal = undefined;
            for(vacuum in record)
 108:
            {
                equals = zuuluu;
                whisks = michal;
 126:
                variable36 = vacuum;
                variable37 = limora[variable36];
                quebec = tangon != variable37;
                if(!quebec) { _fun00004_ip = 155; continue _fun00003 }
 140:
                variable39 = variable37.hasOwnProperty;
                variable38 = _closure1_slot6;
                quebec = variable39.bind(variable37)(variable38);
 155:
                variable38 = variable37;
                if(!quebec) { _fun00004_ip = 174; continue _fun00003 }
 161:
                quebec = _closure1_slot6;
                quebec = variable37[quebec];
                variable38 = quebec.bind(variable37)(sierra);
 174:
                if(!(tangon != variable38)) { _fun00004_ip = 195; continue _fun00003 }
 178:
                quebec = variable38.hasOwnProperty;
                quebec = quebec.bind(variable38)(report);
                if(quebec) { _fun00004_ip = 513; continue _fun00003 }
 195:
                variable37 = _closure1_slot1;
                quebec = _closure1_slot2;
                quebec = quebec[result];
                quebec = variable37.bind(ctrled)(quebec);
                variable37 = quebec.internal;
                quebec = variable37.isSemanticColor;
                quebec = quebec.bind(variable37)(variable38);
                if(quebec) { _fun00004_ip = 438; continue _fun00003 }
 235:
                if(oscard) { _fun00004_ip = 254; continue _fun00003 }
 238:
                quebec = variable38;
                zuuluu = equals;
                michal = whisks;
                if(!(output !== papara)) { _fun00004_ip = 429; continue _fun00003 }
 254:
                variable37 = typeof variable38;
                quebec = variable38;
                zuuluu = equals;
                michal = whisks;
                if(!(golfie === variable37)) { _fun00004_ip = 429; continue _fun00003 }
 273:
                variable37 = variable38[verify];
                quebec = variable38;
                zuuluu = equals;
                michal = whisks;
                if(!(option === variable37)) { _fun00004_ip = 429; continue _fun00003 }
 293:
                variable39 = yankee;
                if(!(offset !== variable36)) { _fun00004_ip = 323; continue _fun00003 }
 300:
                variable37 = foxtra;
                if(!(romeon !== variable36)) { _fun00004_ip = 320; continue _fun00003 }
 307:
                variable40 = kiloes;
                if(!(backup === variable36)) { _fun00004_ip = 317; continue _fun00003 }
 314:
                variable40 = sizing;
 317:
                variable37 = variable40;
 320:
                variable39 = variable37;
 323:
                variable42 = variable38;
                if(!oscard) { _fun00004_ip = 365; continue _fun00003 }
 329:
                variable40 = _closure1_slot1;
                variable37 = _closure1_slot2;
                variable37 = variable37[result];
                variable37 = variable40.bind(ctrled)(variable37);
                variable40 = variable37.internal;
                variable37 = variable40.adjustColorSaturation;
                variable42 = variable37.bind(variable40)(variable38, target, variable39);
 365:
                variable37 = variable42;
                if(!(output !== papara)) { _fun00004_ip = 420; continue _fun00003 }
 372:
                variable41 = _closure1_slot1;
                variable40 = _closure1_slot2;
                variable40 = variable40[result];
                variable40 = variable41.bind(ctrled)(variable40);
                variable41 = variable40.internal;
                variable40 = variable41.adjustColorContrast;
                variable47 = variable41;
                variable46 = variable42;
                variable45 = papara;
                variable44 = variable39;
                variable43 = status;
                variable37 = variable47[variable40](variable46, variable45, variable44, variable43, variable42);
 420:
                quebec = variable37;
                zuuluu = variable39;
                michal = quebec;
 429:
                entity[variable36] = quebec;
                _fun00004_ip = 108; continue _fun00003;
 438:
                variable39 = _closure1_slot0;
                quebec = _closure1_slot2;
                variable37 = quebec[echoed];
                variable39 = variable39.bind(ctrled)(variable37);
                variable37 = variable39.getSemanticColorContextFromThemeContext;
                variable39 = variable37.bind(variable39)(sierra);
                variable37 = _closure1_slot1;
                quebec = quebec[result];
                quebec = variable37.bind(ctrled)(quebec);
                variable37 = quebec.internal;
                quebec = variable37.resolveSemanticColor;
                quebec = quebec.bind(variable37)(status, variable38, variable39);
                entity[variable36] = quebec;
                zuuluu = equals;
                michal = whisks;
                _fun00004_ip = 108; continue _fun00003;
 513:
                variable37 = variable38.resolve;
                variable39 = _closure1_slot0;
                quebec = _closure1_slot2;
                quebec = quebec[update];
                variable39 = variable39.bind(ctrled)(quebec);
                quebec = variable39.isAndroid;
                quebec = quebec.bind(variable39)();
                quebec = variable37.bind(variable38)(status, quebec);
                entity[variable36] = quebec;
                zuuluu = equals;
                michal = whisks;
                _fun00004_ip = 108; continue _fun00003;
            }
 566:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = golfie[entity];
    entity = undefined;
    option = oscard.bind(entity)(option);
    option = option.processColor;
    var _closure1_slot3 = option;
    option = 1;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot5 = option;
    offset = report.Set;
    option = offset.prototype;
    kiloes = Object.create(option, {constructor: {value: offset}});
    backup = ['backgroundColor', 'borderBottomColor', 'borderColor', 'borderEndColor', 'borderLeftColor', 'borderRightColor', 'borderStartColor', 'borderTopColor', 'color', 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'elevation', 'textDecorationColor', 'textShadowColor', 'tintColor'];
    option = new kiloes[offset](backup, foxtra);
    verify = report.Symbol;
    option = verify.for;
    report = 'dynamicToken';
    report = option.bind(verify)(report);
    var _closure1_slot6 = report;
    report = {};
    option = 'function createStylesTsx1(){const{resolved,withTiming,interpolateColor,themeIndex,timingStandard}=this.__closure;const styles={};for(const propertyName in resolved){const value=resolved[propertyName];if(Array.isArray(value)){styles[propertyName]=withTiming(interpolateColor(themeIndex.get(),[0,1,2],value),timingStandard);}else{styles[propertyName]=value;}}return styles;}';
    report['code'] = option;
    var _closure1_slot7 = report;
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'design/components/Styles/native/createStyles.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: experimental_createToken
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = {};
        zuuluu = _closure1_slot6;
        michal = function(argFoo) {
            zuuluu = _closure2_slot0;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        entity[zuuluu] = michal;
        return entity;
    };
    zuuluu['experimental_createToken'] = report;
    report = function(argFoo) { // Original name: createStyles
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = global;
        zuuluu = zuuluu.Map;
        tangon = zuuluu.prototype;
        tangon = Object.create(tangon, {constructor: {value: zuuluu}});
        report = tangon;
        zuuluu = new report[zuuluu](tangon);
        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
        var _closure2_slot1 = zuuluu;
        zuuluu = 'function';
        michal = typeof michal;
        michal = zuuluu === michal;
        var _closure2_slot2 = michal;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                output = 0;
                foxtra = copyRestArgs(output);
                var _closure3_slot0 = foxtra;
                romeon = undefined;
                var _closure3_slot2 = romeon;
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 3;
                michal = report[michal];
                zuuluu = zuuluu.bind(romeon)(michal);
                michal = zuuluu.useThemeContext;
                zuuluu = michal.bind(zuuluu)();
                var _closure3_slot1 = zuuluu;
                michal = _closure1_slot8;
                entity = new Array(1);
                output = entity;
                sizing = foxtra;
                kiloes = 0;
                report = arraySpread(output, sizing, kiloes);
                zuuluu = zuuluu.key;
                entity[report] = zuuluu;
                zuuluu = 1;
                zuuluu = report + zuuluu;
                output = michal;
                sizing = entity;
                kiloes = undefined;
                report = apply(output, sizing, kiloes);
                michal = _closure2_slot1;
                entity = michal.get;
                entity = entity.bind(michal)(report);
                michal = null;
                if(!(michal == entity)) { _fun00006_ip = 267; continue _fun00005 }
 130:
                michal = {};
                _closure3_slot2 = michal;
                oscard = _closure2_slot2;
                option = global;
                verify = option.Object;
                golfie = verify.keys;
                offset = _closure2_slot0;
                if(oscard) { _fun00006_ip = 167; continue _fun00005 }
 160:
                yankee = golfie.bind(verify)(offset);
                _fun00006_ip = 200; continue _fun00005;
 167:
                oscard = new Array(0);
                output = oscard;
                sizing = foxtra;
                kiloes = 0;
                foxtra = arraySpread(output, sizing, kiloes);
                output = offset;
                sizing = oscard;
                kiloes = undefined;
                oscard = apply(output, sizing, kiloes);
                yankee = golfie.bind(verify)(oscard);
 200:
                golfie = option.Object;
                oscard = golfie.defineProperties;
                verify = option.Object;
                option = verify.fromEntries;
                offset = yankee.map;
                tangon = function(argFoo) {
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    entity = new Array(2);
                    entity[0] = michal;
                    michal = {'configurable': true, 'enumerable': true};
                    zuuluu = function() { // Original name: get
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            report = _closure1_slot10;
                            entity = _closure2_slot2;
                            tangon = _closure2_slot0;
                            if(entity) { _fun00008_ip = 26; continue _fun00007 }
 21:
                            entity = tangon;
                            _fun00008_ip = 58; continue _fun00007;
 26:
                            verify = _closure3_slot0;
                            zuuluu = new Array(0);
                            option = 0;
                            offset = zuuluu;
                            michal = arraySpread(offset, verify, option);
                            option = undefined;
                            offset = tangon;
                            verify = zuuluu;
                            entity = apply(offset, verify, option);
 58:
                            oscard = _closure4_slot0;
                            tangon = entity[oscard];
                            zuuluu = _closure3_slot1;
                            entity = undefined;
                            entity = report.bind(entity)(tangon, zuuluu);
                            zuuluu = global;
                            report = zuuluu.Object;
                            tangon = report.defineProperty;
                            zuuluu = _closure3_slot2;
                            michal = {};
                            michal['value'] = entity;
                            golfie = true;
                            michal['enumerable'] = golfie;
                            michal = tangon.bind(report)(zuuluu, oscard, michal);
                            return entity;
                        }
                    };
                    michal['get'] = zuuluu;
                    entity[1] = michal;
                    return entity;
                };
                tangon = offset.bind(yankee)(tangon);
                tangon = option.bind(verify)(tangon);
                tangon = oscard.bind(golfie)(michal, tangon);
                tangon = _closure2_slot1;
                zuuluu = tangon.set;
                zuuluu = zuuluu.bind(tangon)(report, michal);
                return michal;
 267:
                return entity;
            }
        };
        return entity;
    };
    zuuluu['createStyles'] = report;
    report = function(argFoo) { // Original name: createLegacyClassComponentStyles
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = global;
        michal = michal.Map;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        tangon = zuuluu;
        michal = new tangon[michal](zuuluu);
        michal = michal instanceof Object ? michal : zuuluu;
        var _closure2_slot1 = michal;
        entity = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                entity = tangon.bind(entity)(michal);
                entity = entity.FALLBACK_THEME_CONTEXT_VALUE;
                oscard = _closure2_slot1;
                michal = oscard.get;
                entity = zuuluu.key;
                entity = michal.bind(oscard)(entity);
                michal = null;
                if(!(michal == entity)) { _fun00010_ip = 168; continue _fun00009 }
 68:
                michal = {};
                var _closure3_slot1 = michal;
                option = global;
                verify = option.Object;
                golfie = verify.keys;
                oscard = _closure2_slot0;
                yankee = golfie.bind(verify)(oscard);
                golfie = option.Object;
                oscard = golfie.defineProperties;
                verify = option.Object;
                option = verify.fromEntries;
                offset = yankee.map;
                report = function(argFoo) {
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    entity = new Array(2);
                    entity[0] = michal;
                    michal = {'configurable': true, 'enumerable': true};
                    zuuluu = function() { // Original name: get
                        report = _closure1_slot10;
                        entity = _closure2_slot0;
                        oscard = _closure4_slot0;
                        tangon = entity[oscard];
                        zuuluu = _closure3_slot0;
                        entity = undefined;
                        entity = report.bind(entity)(tangon, zuuluu);
                        zuuluu = global;
                        report = zuuluu.Object;
                        tangon = report.defineProperty;
                        zuuluu = _closure3_slot1;
                        michal = {};
                        michal['value'] = entity;
                        golfie = true;
                        michal['enumerable'] = golfie;
                        michal = tangon.bind(report)(zuuluu, oscard, michal);
                        return entity;
                    };
                    michal['get'] = zuuluu;
                    entity[1] = michal;
                    return entity;
                };
                report = offset.bind(yankee)(report);
                report = option.bind(verify)(report);
                report = oscard.bind(golfie)(michal, report);
                report = _closure2_slot1;
                tangon = report.set;
                zuuluu = zuuluu.key;
                zuuluu = tangon.bind(report)(zuuluu, michal);
                return michal;
 168:
                return entity;
            }
        };
        return entity;
    };
    zuuluu['createLegacyClassComponentStyles'] = report;
    report = function(argFoo) { // Original name: useLegacyClassComponentStyles
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 3;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = michal.useThemeContext;
        michal = entity.bind(michal)();
        entity = argFoo;
        entity = entity.bind(zuuluu)(michal);
        return entity;
    };
    zuuluu['useLegacyClassComponentStyles'] = report;
    report = function(argFoo) { // Original name: createStyleProperties
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = global;
        michal = michal.Map;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        tangon = zuuluu;
        michal = new tangon[michal](zuuluu);
        michal = michal instanceof Object ? michal : zuuluu;
        var _closure2_slot1 = michal;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                backup = 0;
                offset = copyRestArgs(backup);
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 3;
                entity = tangon[entity];
                golfie = undefined;
                zuuluu = zuuluu.bind(golfie)(entity);
                entity = zuuluu.useThemeContext;
                oscard = entity.bind(zuuluu)();
                zuuluu = _closure1_slot8;
                entity = new Array(1);
                backup = entity;
                foxtra = offset;
                romeon = 0;
                report = arraySpread(backup, foxtra, romeon);
                tangon = oscard.key;
                entity[report] = tangon;
                tangon = 1;
                tangon = report + tangon;
                backup = zuuluu;
                foxtra = entity;
                romeon = undefined;
                report = apply(backup, foxtra, romeon);
                tangon = _closure2_slot1;
                entity = tangon.get;
                entity = entity.bind(tangon)(report);
                tangon = null;
                if(!(tangon == entity)) { _fun00012_ip = 193; continue _fun00011 }
 113:
                tangon = _closure1_slot10;
                michal = _closure2_slot0;
                option = 'function';
                michal = typeof michal;
                if(!(option !== michal)) { _fun00012_ip = 138; continue _fun00011 }
 132:
                michal = _closure2_slot0;
                _fun00012_ip = 170; continue _fun00011;
 138:
                verify = _closure2_slot0;
                option = new Array(0);
                backup = option;
                foxtra = offset;
                romeon = 0;
                offset = arraySpread(backup, foxtra, romeon);
                backup = verify;
                foxtra = option;
                romeon = undefined;
                michal = apply(backup, foxtra, romeon);
 170:
                michal = tangon.bind(golfie)(michal, oscard);
                tangon = _closure2_slot1;
                zuuluu = tangon.set;
                zuuluu = zuuluu.bind(tangon)(report, michal);
                return michal;
 193:
                return entity;
            }
        };
        return entity;
    };
    zuuluu['createStyleProperties'] = report;
    zuuluu['processColorOrThrow'] = tangon;
    tangon = function(argFoo) { // Original name: createNativeStyleProperties
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = global;
        michal = michal.Map;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        tangon = zuuluu;
        michal = new tangon[michal](zuuluu);
        michal = michal instanceof Object ? michal : zuuluu;
        var _closure2_slot1 = michal;
        entity = function(argFoo, argBar) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = 1;
                result = report;
                romeon = copyRestArgs(result);
                entity = _closure1_slot4;
                tangon = entity.saturation;
                entity = _closure1_slot5;
                entity = entity.gradientPreset;
                michal = null;
                zuuluu = michal != entity;
                oscard = null;
                if(!zuuluu) { _fun00014_ip = 47; continue _fun00013 }
 44:
                oscard = entity;
 47:
                entity = michal != oscard;
                verify = 0;
                golfie = 0;
                if(!entity) { _fun00014_ip = 165; continue _fun00013 }
 58:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot2;
                kiloes = 10;
                entity = entity[kiloes];
                backup = undefined;
                option = zuuluu.bind(backup)(entity);
                zuuluu = option.setThemeFlag;
                offset = oscard.theme;
                entity = 'light';
                if(!(entity !== offset)) { _fun00014_ip = 130; continue _fun00013 }
 99:
                offset = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[kiloes];
                entity = offset.bind(backup)(entity);
                entity = entity.ThemeContextFlags;
                entity = entity.MOBILE_DARK_GRADIENT_THEME_ENABLED;
                _fun00014_ip = 159; continue _fun00013;
 130:
                foxtra = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[kiloes];
                offset = foxtra.bind(backup)(offset);
                offset = offset.ThemeContextFlags;
                entity = offset.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
 159:
                golfie = zuuluu.bind(option)(verify, entity);
 165:
                entity = {};
                option = _closure1_slot0;
                offset = _closure1_slot2;
                zuuluu = 3;
                zuuluu = offset[zuuluu];
                offset = undefined;
                zuuluu = option.bind(offset)(zuuluu);
                output = zuuluu.FALLBACK_THEME_CONTEXT_VALUE;
                result = entity;
                zuuluu = copyDataProperties(result, output);
                zuuluu = 'flags';
                entity[zuuluu] = golfie;
                zuuluu = 'gradient';
                entity[zuuluu] = oscard;
                zuuluu = 'saturation';
                entity[zuuluu] = tangon;
                tangon = argFoo;
                zuuluu = 'theme';
                entity[zuuluu] = tangon;
                zuuluu = global;
                tangon = zuuluu.JSON;
                zuuluu = tangon.stringify;
                zuuluu = zuuluu.bind(tangon)(entity);
                oscard = {};
                result = oscard;
                output = entity;
                entity = copyDataProperties(result, output);
                entity = 'key';
                oscard[entity] = zuuluu;
                zuuluu = _closure1_slot8;
                entity = new Array(1);
                result = entity;
                output = romeon;
                sizing = 0;
                tangon = arraySpread(result, output, sizing);
                golfie = oscard.key;
                entity[tangon] = golfie;
                tangon = tangon + report;
                result = zuuluu;
                output = entity;
                sizing = undefined;
                report = apply(result, output, sizing);
                tangon = _closure2_slot1;
                entity = tangon.get;
                entity = entity.bind(tangon)(report);
                if(!(michal == entity)) { _fun00014_ip = 473; continue _fun00013 }
 351:
                tangon = _closure1_slot10;
                michal = _closure2_slot0;
                golfie = 'function';
                michal = typeof michal;
                if(!(golfie !== michal)) { _fun00014_ip = 376; continue _fun00013 }
 370:
                michal = _closure2_slot0;
                _fun00014_ip = 408; continue _fun00013;
 376:
                option = _closure2_slot0;
                golfie = new Array(0);
                result = golfie;
                output = romeon;
                sizing = 0;
                verify = arraySpread(result, output, sizing);
                result = option;
                output = golfie;
                sizing = undefined;
                michal = apply(result, output, sizing);
 408:
                michal = tangon.bind(offset)(michal, oscard);
                option = michal;
                for(tangon in option)
 425:
                {
 434:
                    foxtra = tangon;
                    backup = michal[foxtra];
                    romeon = _closure1_slot9;
                    romeon = romeon.bind(offset)(backup);
                    michal[foxtra] = romeon;
                    _fun00014_ip = 425; continue _fun00013;
                }
 456:
                tangon = _closure2_slot1;
                zuuluu = tangon.set;
                zuuluu = zuuluu.bind(tangon)(report, michal);
                return michal;
 473:
                return entity;
            }
        };
        return entity;
    };
    zuuluu['createNativeStyleProperties'] = tangon;
    michal = function(argFoo) { // Original name: createAnimatedThemedStyles
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            backup = argFoo;
            foxtra = {};
            var _closure2_slot0 = foxtra;
            yankee = backup;
            oscard = 5;
            report = undefined;
            tangon = 'light';
            zuuluu = 'darker';
            michal = 'midnight';
            for(option in yankee)
 45:
            {
 57:
                sizing = option;
                echoed = backup[sizing];
                output = _closure1_slot1;
                kiloes = _closure1_slot2;
                kiloes = kiloes[oscard];
                kiloes = output.bind(report)(kiloes);
                output = kiloes.internal;
                kiloes = output.isSemanticColor;
                kiloes = kiloes.bind(output)(echoed);
                if(kiloes) { _fun00016_ip = 107; continue _fun00015 }
 101:
                foxtra[sizing] = echoed;
                _fun00016_ip = 45; continue _fun00015;
 107:
                result = _closure1_slot1;
                output = _closure1_slot2;
                kiloes = output[oscard];
                kiloes = result.bind(report)(kiloes);
                update = kiloes.internal;
                kiloes = update.resolveSemanticColor;
                update = kiloes.bind(update)(tangon, echoed);
                kiloes = new Array(3);
                kiloes[0] = update;
                update = output[oscard];
                update = result.bind(report)(update);
                source = update.internal;
                update = source.resolveSemanticColor;
                update = update.bind(source)(zuuluu, echoed);
                kiloes[1] = update;
                output = output[oscard];
                output = result.bind(report)(output);
                result = output.internal;
                output = result.resolveSemanticColor;
                output = output.bind(result)(michal, echoed);
                kiloes[2] = output;
                foxtra[sizing] = kiloes;
                _fun00016_ip = 45; continue _fun00015;
            }
 221:
            entity = function(argFoo) {
                oscard = argFoo;
                var _closure3_slot0 = oscard;
                option = _closure1_slot0;
                verify = _closure1_slot2;
                offset = 7;
                michal = verify[offset];
                golfie = undefined;
                zuuluu = option.bind(golfie)(michal);
                michal = zuuluu.useAnimatedStyle;
                entity = function() { // Original name: n
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = {};
                        foxtra = _closure2_slot0;
                        golfie = 8;
                        oscard = undefined;
                        report = 7;
                        zuuluu = 9;
                        michal = global;
                        for(verify in foxtra)
 39:
                        {
 51:
                            sizing = verify;
                            kiloes = _closure2_slot0;
                            sequen = kiloes[sizing];
                            output = michal.Array;
                            kiloes = output.isArray;
                            kiloes = kiloes.bind(output)(sequen);
                            if(kiloes) { _fun00018_ip = 87; continue _fun00017 }
 81:
                            entity[sizing] = sequen;
                            _fun00018_ip = 39; continue _fun00017;
 87:
                            update = _closure1_slot0;
                            kiloes = _closure1_slot2;
                            output = kiloes[golfie];
                            echoed = update.bind(oscard)(output);
                            result = echoed.withTiming;
                            output = kiloes[report];
                            vacuum = update.bind(oscard)(output);
                            ctrled = vacuum.interpolateColor;
                            source = _closure3_slot0;
                            output = source.get;
                            source = output.bind(source)();
                            output = [0, 1, 2];
                            output = ctrled.bind(vacuum)(source, output, sequen);
                            kiloes = kiloes[zuuluu];
                            kiloes = update.bind(oscard)(kiloes);
                            kiloes = kiloes.timingStandard;
                            kiloes = result.bind(echoed)(output, kiloes);
                            entity[sizing] = kiloes;
                            _fun00018_ip = 39; continue _fun00017;
                        }
 184:
                        return entity;
                    }
                };
                report = {};
                yankee = _closure2_slot0;
                report['resolved'] = yankee;
                yankee = 8;
                yankee = verify[yankee];
                yankee = option.bind(golfie)(yankee);
                yankee = yankee.withTiming;
                report['withTiming'] = yankee;
                offset = verify[offset];
                offset = option.bind(golfie)(offset);
                offset = offset.interpolateColor;
                report['interpolateColor'] = offset;
                report['themeIndex'] = oscard;
                oscard = 9;
                oscard = verify[oscard];
                oscard = option.bind(golfie)(oscard);
                oscard = oscard.timingStandard;
                report['timingStandard'] = oscard;
                entity['__closure'] = report;
                report = 15640881185419.0;
                entity['__workletHash'] = report;
                tangon = _closure1_slot7;
                entity['__initData'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            return entity;
        }
    };
    zuuluu['createAnimatedThemedStyles'] = michal;
    return entity;
})();