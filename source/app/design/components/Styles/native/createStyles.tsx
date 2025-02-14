// app/design/components/Styles/native/createStyles.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: createCacheKey
        tango = 0;
        zulu = copyRestArgs(tango);
        mike = zulu.join;
        entity = '';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot8 = entity;
    tango = function(argFoo) { // Original name: processColorOrThrow
        _fun34212: for(var _fun34212_ip = 0; ; ) switch(_fun34212_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot3;
            entity = undefined;
            entity = mike.bind(entity)(report);
            mike = null;
            if(!(mike != entity)) { _fun34212_ip = 25; continue _fun34212 }
 23:
            return entity;
 25:
            entity = global;
            zulu = entity.Error;
            entity = entity.HermesInternal;
            tango = entity.concat;
            mike = 'Unable to parse color: "';
            entity = '"';
            golf = tango.bind(mike)(report, entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            options = mike;
            entity = new options[zulu](golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    var _closure1_slot9 = tango;
    entity = function(argFoo, argBar) { // Original name: parseThemedStyles
        _fun34213: for(var _fun34213_ip = 0; ; ) switch(_fun34213_ip) {
 0:
            lima = argFoo;
            sierra = argBar;
            status = sierra.theme;
            target = sierra.saturation;
            papa = sierra.contrast;
            entity = {};
            record = lima;
            control = undefined;
            update = 4;
            echo = 6;
            result = 5;
            output = 1;
            sizing = 'text';
            kilo = 'generic';
            backup = 'color';
            foxtrot = 'border';
            romeo = 'borderColor';
            yankee = 'background';
            offset = 'backgroundColor';
            verify = 0;
            options = '#';
            golf = 'string';
            oscar = output !== target;
            report = 'resolve';
            tango = null;
            zulu = undefined;
            mike = undefined;
            for(vacuum in record)
 109:
            {
                equality = zulu;
                whiskey = mike;
 127:
                variable36 = vacuum;
                variable37 = lima[variable36];
                quebec = tango != variable37;
                if(!quebec) { _fun34213_ip = 156; continue _fun34213 }
 141:
                variable39 = variable37.hasOwnProperty;
                variable38 = _closure1_slot6;
                quebec = variable39.bind(variable37)(variable38);
 156:
                variable38 = variable37;
                if(!quebec) { _fun34213_ip = 175; continue _fun34213 }
 162:
                quebec = _closure1_slot6;
                quebec = variable37[quebec];
                variable38 = quebec.bind(variable37)(sierra);
 175:
                if(!(tango != variable38)) { _fun34213_ip = 196; continue _fun34213 }
 179:
                quebec = variable38.hasOwnProperty;
                quebec = quebec.bind(variable38)(report);
                if(quebec) { _fun34213_ip = 514; continue _fun34213 }
 196:
                variable37 = _closure1_slot1;
                quebec = _closure1_slot2;
                quebec = quebec[result];
                quebec = variable37.bind(control)(quebec);
                variable37 = quebec.internal;
                quebec = variable37.isSemanticColor;
                quebec = quebec.bind(variable37)(variable38);
                if(quebec) { _fun34213_ip = 439; continue _fun34213 }
 236:
                if(oscar) { _fun34213_ip = 255; continue _fun34213 }
 239:
                quebec = variable38;
                zulu = equality;
                mike = whiskey;
                if(!(output !== papa)) { _fun34213_ip = 430; continue _fun34213 }
 255:
                variable37 = typeof variable38;
                quebec = variable38;
                zulu = equality;
                mike = whiskey;
                if(!(golf === variable37)) { _fun34213_ip = 430; continue _fun34213 }
 274:
                variable37 = variable38[verify];
                quebec = variable38;
                zulu = equality;
                mike = whiskey;
                if(!(options === variable37)) { _fun34213_ip = 430; continue _fun34213 }
 294:
                variable39 = yankee;
                if(!(offset !== variable36)) { _fun34213_ip = 324; continue _fun34213 }
 301:
                variable37 = foxtrot;
                if(!(romeo !== variable36)) { _fun34213_ip = 321; continue _fun34213 }
 308:
                variable40 = kilo;
                if(!(backup === variable36)) { _fun34213_ip = 318; continue _fun34213 }
 315:
                variable40 = sizing;
 318:
                variable37 = variable40;
 321:
                variable39 = variable37;
 324:
                variable42 = variable38;
                if(!oscar) { _fun34213_ip = 366; continue _fun34213 }
 330:
                variable40 = _closure1_slot1;
                variable37 = _closure1_slot2;
                variable37 = variable37[result];
                variable37 = variable40.bind(control)(variable37);
                variable40 = variable37.internal;
                variable37 = variable40.adjustColorSaturation;
                variable42 = variable37.bind(variable40)(variable38, target, variable39);
 366:
                variable37 = variable42;
                if(!(output !== papa)) { _fun34213_ip = 421; continue _fun34213 }
 373:
                variable41 = _closure1_slot1;
                variable40 = _closure1_slot2;
                variable40 = variable40[result];
                variable40 = variable41.bind(control)(variable40);
                variable41 = variable40.internal;
                variable40 = variable41.adjustColorContrast;
                variable47 = variable41;
                variable46 = variable42;
                variable45 = papa;
                variable44 = variable39;
                variable43 = status;
                variable37 = variable47[variable40](variable46, variable45, variable44, variable43, variable42);
 421:
                quebec = variable37;
                zulu = variable39;
                mike = quebec;
 430:
                entity[variable36] = quebec;
                _fun34213_ip = 109; continue _fun34213;
 439:
                variable39 = _closure1_slot0;
                quebec = _closure1_slot2;
                variable37 = quebec[echo];
                variable39 = variable39.bind(control)(variable37);
                variable37 = variable39.getSemanticColorContextFromThemeContext;
                variable39 = variable37.bind(variable39)(sierra);
                variable37 = _closure1_slot1;
                quebec = quebec[result];
                quebec = variable37.bind(control)(quebec);
                variable37 = quebec.internal;
                quebec = variable37.resolveSemanticColor;
                quebec = quebec.bind(variable37)(status, variable38, variable39);
                entity[variable36] = quebec;
                zulu = equality;
                mike = whiskey;
                _fun34213_ip = 109; continue _fun34213;
 514:
                variable37 = variable38.resolve;
                variable39 = _closure1_slot0;
                quebec = _closure1_slot2;
                quebec = quebec[update];
                variable39 = variable39.bind(control)(quebec);
                quebec = variable39.isAndroid;
                quebec = quebec.bind(variable39)();
                quebec = variable37.bind(variable38)(status, quebec);
                entity[variable36] = quebec;
                zulu = equality;
                mike = whiskey;
                _fun34213_ip = 109; continue _fun34213;
            }
 567:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = golf[entity];
    entity = undefined;
    options = oscar.bind(entity)(options);
    options = options.processColor;
    var _closure1_slot3 = options;
    options = 1;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot5 = options;
    offset = report.Set;
    options = offset.prototype;
    kilo = Object.create(options, {constructor: {value: offset}});
    backup = ['backgroundColor', 'borderBottomColor', 'borderColor', 'borderEndColor', 'borderLeftColor', 'borderRightColor', 'borderStartColor', 'borderTopColor', 'color', 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'elevation', 'textDecorationColor', 'textShadowColor', 'tintColor'];
    options = new kilo[offset](backup, foxtrot);
    verify = report.Symbol;
    options = verify.for;
    report = 'dynamicToken';
    report = options.bind(verify)(report);
    var _closure1_slot6 = report;
    report = {};
    options = 'function createStylesTsx1(){const{resolved,withTiming,interpolateColor,themeIndex,timingStandard}=this.__closure;const styles={};for(const propertyName in resolved){const value=resolved[propertyName];if(Array.isArray(value)){styles[propertyName]=withTiming(interpolateColor(themeIndex.get(),[0,1,2],value),timingStandard);}else{styles[propertyName]=value;}}return styles;}';
    report['code'] = options;
    var _closure1_slot7 = report;
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/Styles/native/createStyles.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: experimental_createToken
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = {};
        zulu = _closure1_slot6;
        mike = function(argFoo) {
            zulu = _closure2_slot0;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        entity[zulu] = mike;
        return entity;
    };
    zulu['experimental_createToken'] = report;
    report = function(argFoo) { // Original name: createStyles
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = global;
        zulu = zulu.Map;
        tango = zulu.prototype;
        tango = Object.create(tango, {constructor: {value: zulu}});
        report = tango;
        zulu = new report[zulu](tango);
        zulu = zulu instanceof Object ? zulu : tango;
        var _closure2_slot1 = zulu;
        zulu = 'function';
        mike = typeof mike;
        mike = zulu === mike;
        var _closure2_slot2 = mike;
        entity = function(argFoo) {
            _fun34217: for(var _fun34217_ip = 0; ; ) switch(_fun34217_ip) {
 0:
                output = 0;
                foxtrot = copyRestArgs(output);
                var _closure3_slot0 = foxtrot;
                romeo = undefined;
                var _closure3_slot2 = romeo;
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 3;
                mike = report[mike];
                zulu = zulu.bind(romeo)(mike);
                mike = zulu.useThemeContext;
                zulu = mike.bind(zulu)();
                var _closure3_slot1 = zulu;
                mike = _closure1_slot8;
                entity = new Array(1);
                output = entity;
                sizing = foxtrot;
                kilo = 0;
                report = arraySpread(output, sizing, kilo);
                zulu = zulu.key;
                entity[report] = zulu;
                zulu = 1;
                zulu = report + zulu;
                output = mike;
                sizing = entity;
                kilo = undefined;
                report = apply(output, sizing, kilo);
                mike = _closure2_slot1;
                entity = mike.get;
                entity = entity.bind(mike)(report);
                mike = null;
                if(!(mike == entity)) { _fun34217_ip = 267; continue _fun34217 }
 130:
                mike = {};
                _closure3_slot2 = mike;
                oscar = _closure2_slot2;
                options = global;
                verify = options.Object;
                golf = verify.keys;
                offset = _closure2_slot0;
                if(oscar) { _fun34217_ip = 167; continue _fun34217 }
 160:
                yankee = golf.bind(verify)(offset);
                _fun34217_ip = 200; continue _fun34217;
 167:
                oscar = new Array(0);
                output = oscar;
                sizing = foxtrot;
                kilo = 0;
                foxtrot = arraySpread(output, sizing, kilo);
                output = offset;
                sizing = oscar;
                kilo = undefined;
                oscar = apply(output, sizing, kilo);
                yankee = golf.bind(verify)(oscar);
 200:
                golf = options.Object;
                oscar = golf.defineProperties;
                verify = options.Object;
                options = verify.fromEntries;
                offset = yankee.map;
                tango = function(argFoo) {
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    entity = new Array(2);
                    entity[0] = mike;
                    mike = {'configurable': true, 'enumerable': true};
                    zulu = function() { // Original name: get
                        _fun34219: for(var _fun34219_ip = 0; ; ) switch(_fun34219_ip) {
 0:
                            report = _closure1_slot10;
                            entity = _closure2_slot2;
                            tango = _closure2_slot0;
                            if(entity) { _fun34219_ip = 26; continue _fun34219 }
 21:
                            entity = tango;
                            _fun34219_ip = 58; continue _fun34219;
 26:
                            verify = _closure3_slot0;
                            zulu = new Array(0);
                            options = 0;
                            offset = zulu;
                            mike = arraySpread(offset, verify, options);
                            options = undefined;
                            offset = tango;
                            verify = zulu;
                            entity = apply(offset, verify, options);
 58:
                            oscar = _closure4_slot0;
                            tango = entity[oscar];
                            zulu = _closure3_slot1;
                            entity = undefined;
                            entity = report.bind(entity)(tango, zulu);
                            zulu = global;
                            report = zulu.Object;
                            tango = report.defineProperty;
                            zulu = _closure3_slot2;
                            mike = {};
                            mike['value'] = entity;
                            golf = true;
                            mike['enumerable'] = golf;
                            mike = tango.bind(report)(zulu, oscar, mike);
                            return entity;
                        }
                    };
                    mike['get'] = zulu;
                    entity[1] = mike;
                    return entity;
                };
                tango = offset.bind(yankee)(tango);
                tango = options.bind(verify)(tango);
                tango = oscar.bind(golf)(mike, tango);
                tango = _closure2_slot1;
                zulu = tango.set;
                zulu = zulu.bind(tango)(report, mike);
                return mike;
 267:
                return entity;
            }
        };
        return entity;
    };
    zulu['createStyles'] = report;
    report = function(argFoo) { // Original name: createLegacyClassComponentStyles
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = global;
        mike = mike.Map;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        tango = zulu;
        mike = new tango[mike](zulu);
        mike = mike instanceof Object ? mike : zulu;
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            _fun34221: for(var _fun34221_ip = 0; ; ) switch(_fun34221_ip) {
 0:
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                entity = tango.bind(entity)(mike);
                entity = entity.FALLBACK_THEME_CONTEXT_VALUE;
                oscar = _closure2_slot1;
                mike = oscar.get;
                entity = zulu.key;
                entity = mike.bind(oscar)(entity);
                mike = null;
                if(!(mike == entity)) { _fun34221_ip = 168; continue _fun34221 }
 68:
                mike = {};
                var _closure3_slot1 = mike;
                options = global;
                verify = options.Object;
                golf = verify.keys;
                oscar = _closure2_slot0;
                yankee = golf.bind(verify)(oscar);
                golf = options.Object;
                oscar = golf.defineProperties;
                verify = options.Object;
                options = verify.fromEntries;
                offset = yankee.map;
                report = function(argFoo) {
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    entity = new Array(2);
                    entity[0] = mike;
                    mike = {'configurable': true, 'enumerable': true};
                    zulu = function() { // Original name: get
                        report = _closure1_slot10;
                        entity = _closure2_slot0;
                        oscar = _closure4_slot0;
                        tango = entity[oscar];
                        zulu = _closure3_slot0;
                        entity = undefined;
                        entity = report.bind(entity)(tango, zulu);
                        zulu = global;
                        report = zulu.Object;
                        tango = report.defineProperty;
                        zulu = _closure3_slot1;
                        mike = {};
                        mike['value'] = entity;
                        golf = true;
                        mike['enumerable'] = golf;
                        mike = tango.bind(report)(zulu, oscar, mike);
                        return entity;
                    };
                    mike['get'] = zulu;
                    entity[1] = mike;
                    return entity;
                };
                report = offset.bind(yankee)(report);
                report = options.bind(verify)(report);
                report = oscar.bind(golf)(mike, report);
                report = _closure2_slot1;
                tango = report.set;
                zulu = zulu.key;
                zulu = tango.bind(report)(zulu, mike);
                return mike;
 168:
                return entity;
            }
        };
        return entity;
    };
    zulu['createLegacyClassComponentStyles'] = report;
    report = function(argFoo) { // Original name: useLegacyClassComponentStyles
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 3;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = mike.useThemeContext;
        mike = entity.bind(mike)();
        entity = argFoo;
        entity = entity.bind(zulu)(mike);
        return entity;
    };
    zulu['useLegacyClassComponentStyles'] = report;
    report = function(argFoo) { // Original name: createStyleProperties
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = global;
        mike = mike.Map;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        tango = zulu;
        mike = new tango[mike](zulu);
        mike = mike instanceof Object ? mike : zulu;
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            _fun34226: for(var _fun34226_ip = 0; ; ) switch(_fun34226_ip) {
 0:
                backup = 0;
                offset = copyRestArgs(backup);
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 3;
                entity = tango[entity];
                golf = undefined;
                zulu = zulu.bind(golf)(entity);
                entity = zulu.useThemeContext;
                oscar = entity.bind(zulu)();
                zulu = _closure1_slot8;
                entity = new Array(1);
                backup = entity;
                foxtrot = offset;
                romeo = 0;
                report = arraySpread(backup, foxtrot, romeo);
                tango = oscar.key;
                entity[report] = tango;
                tango = 1;
                tango = report + tango;
                backup = zulu;
                foxtrot = entity;
                romeo = undefined;
                report = apply(backup, foxtrot, romeo);
                tango = _closure2_slot1;
                entity = tango.get;
                entity = entity.bind(tango)(report);
                tango = null;
                if(!(tango == entity)) { _fun34226_ip = 193; continue _fun34226 }
 113:
                tango = _closure1_slot10;
                mike = _closure2_slot0;
                options = 'function';
                mike = typeof mike;
                if(!(options !== mike)) { _fun34226_ip = 138; continue _fun34226 }
 132:
                mike = _closure2_slot0;
                _fun34226_ip = 170; continue _fun34226;
 138:
                verify = _closure2_slot0;
                options = new Array(0);
                backup = options;
                foxtrot = offset;
                romeo = 0;
                offset = arraySpread(backup, foxtrot, romeo);
                backup = verify;
                foxtrot = options;
                romeo = undefined;
                mike = apply(backup, foxtrot, romeo);
 170:
                mike = tango.bind(golf)(mike, oscar);
                tango = _closure2_slot1;
                zulu = tango.set;
                zulu = zulu.bind(tango)(report, mike);
                return mike;
 193:
                return entity;
            }
        };
        return entity;
    };
    zulu['createStyleProperties'] = report;
    zulu['processColorOrThrow'] = tango;
    tango = function(argFoo) { // Original name: createNativeStyleProperties
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = global;
        mike = mike.Map;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        tango = zulu;
        mike = new tango[mike](zulu);
        mike = mike instanceof Object ? mike : zulu;
        var _closure2_slot1 = mike;
        entity = function(argFoo, argBar) {
            _fun34228: for(var _fun34228_ip = 0; ; ) switch(_fun34228_ip) {
 0:
                report = 1;
                result = report;
                romeo = copyRestArgs(result);
                entity = _closure1_slot4;
                tango = entity.saturation;
                entity = _closure1_slot5;
                entity = entity.gradientPreset;
                mike = null;
                zulu = mike != entity;
                oscar = null;
                if(!zulu) { _fun34228_ip = 47; continue _fun34228 }
 44:
                oscar = entity;
 47:
                entity = mike != oscar;
                verify = 0;
                golf = 0;
                if(!entity) { _fun34228_ip = 166; continue _fun34228 }
 58:
                zulu = _closure1_slot0;
                entity = _closure1_slot2;
                kilo = 3;
                entity = entity[kilo];
                backup = undefined;
                options = zulu.bind(backup)(entity);
                zulu = options.setThemeFlag;
                offset = oscar.theme;
                entity = 'light';
                if(!(entity !== offset)) { _fun34228_ip = 131; continue _fun34228 }
 100:
                offset = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[kilo];
                entity = offset.bind(backup)(entity);
                entity = entity.ThemeContextFlags;
                entity = entity.MOBILE_DARK_GRADIENT_THEME_ENABLED;
                _fun34228_ip = 160; continue _fun34228;
 131:
                foxtrot = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[kilo];
                offset = foxtrot.bind(backup)(offset);
                offset = offset.ThemeContextFlags;
                entity = offset.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
 160:
                golf = zulu.bind(options)(verify, entity);
 166:
                entity = {};
                options = _closure1_slot0;
                offset = _closure1_slot2;
                zulu = 3;
                zulu = offset[zulu];
                offset = undefined;
                zulu = options.bind(offset)(zulu);
                output = zulu.FALLBACK_THEME_CONTEXT_VALUE;
                result = entity;
                zulu = copyDataProperties(result, output);
                zulu = 'flags';
                entity[zulu] = golf;
                zulu = 'gradient';
                entity[zulu] = oscar;
                zulu = 'saturation';
                entity[zulu] = tango;
                tango = argFoo;
                zulu = 'theme';
                entity[zulu] = tango;
                zulu = global;
                tango = zulu.JSON;
                zulu = tango.stringify;
                zulu = zulu.bind(tango)(entity);
                oscar = {};
                result = oscar;
                output = entity;
                entity = copyDataProperties(result, output);
                entity = 'key';
                oscar[entity] = zulu;
                zulu = _closure1_slot8;
                entity = new Array(1);
                result = entity;
                output = romeo;
                sizing = 0;
                tango = arraySpread(result, output, sizing);
                golf = oscar.key;
                entity[tango] = golf;
                tango = tango + report;
                result = zulu;
                output = entity;
                sizing = undefined;
                report = apply(result, output, sizing);
                tango = _closure2_slot1;
                entity = tango.get;
                entity = entity.bind(tango)(report);
                if(!(mike == entity)) { _fun34228_ip = 474; continue _fun34228 }
 352:
                tango = _closure1_slot10;
                mike = _closure2_slot0;
                golf = 'function';
                mike = typeof mike;
                if(!(golf !== mike)) { _fun34228_ip = 377; continue _fun34228 }
 371:
                mike = _closure2_slot0;
                _fun34228_ip = 409; continue _fun34228;
 377:
                options = _closure2_slot0;
                golf = new Array(0);
                result = golf;
                output = romeo;
                sizing = 0;
                verify = arraySpread(result, output, sizing);
                result = options;
                output = golf;
                sizing = undefined;
                mike = apply(result, output, sizing);
 409:
                mike = tango.bind(offset)(mike, oscar);
                options = mike;
                for(tango in options)
 426:
                {
 435:
                    foxtrot = tango;
                    backup = mike[foxtrot];
                    romeo = _closure1_slot9;
                    romeo = romeo.bind(offset)(backup);
                    mike[foxtrot] = romeo;
                    _fun34228_ip = 426; continue _fun34228;
                }
 457:
                tango = _closure2_slot1;
                zulu = tango.set;
                zulu = zulu.bind(tango)(report, mike);
                return mike;
 474:
                return entity;
            }
        };
        return entity;
    };
    zulu['createNativeStyleProperties'] = tango;
    mike = function(argFoo) { // Original name: createAnimatedThemedStyles
        _fun34229: for(var _fun34229_ip = 0; ; ) switch(_fun34229_ip) {
 0:
            backup = argFoo;
            foxtrot = {};
            var _closure2_slot0 = foxtrot;
            yankee = backup;
            oscar = 5;
            report = undefined;
            tango = 'light';
            zulu = 'darker';
            mike = 'midnight';
            for(options in yankee)
 45:
            {
 57:
                sizing = options;
                echo = backup[sizing];
                output = _closure1_slot1;
                kilo = _closure1_slot2;
                kilo = kilo[oscar];
                kilo = output.bind(report)(kilo);
                output = kilo.internal;
                kilo = output.isSemanticColor;
                kilo = kilo.bind(output)(echo);
                if(kilo) { _fun34229_ip = 107; continue _fun34229 }
 101:
                foxtrot[sizing] = echo;
                _fun34229_ip = 45; continue _fun34229;
 107:
                result = _closure1_slot1;
                output = _closure1_slot2;
                kilo = output[oscar];
                kilo = result.bind(report)(kilo);
                update = kilo.internal;
                kilo = update.resolveSemanticColor;
                update = kilo.bind(update)(tango, echo);
                kilo = new Array(3);
                kilo[0] = update;
                update = output[oscar];
                update = result.bind(report)(update);
                source = update.internal;
                update = source.resolveSemanticColor;
                update = update.bind(source)(zulu, echo);
                kilo[1] = update;
                output = output[oscar];
                output = result.bind(report)(output);
                result = output.internal;
                output = result.resolveSemanticColor;
                output = output.bind(result)(mike, echo);
                kilo[2] = output;
                foxtrot[sizing] = kilo;
                _fun34229_ip = 45; continue _fun34229;
            }
 221:
            entity = function(argFoo) {
                oscar = argFoo;
                var _closure3_slot0 = oscar;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                offset = 7;
                mike = verify[offset];
                golf = undefined;
                zulu = options.bind(golf)(mike);
                mike = zulu.useAnimatedStyle;
                entity = function() { // Original name: n
                    _fun34231: for(var _fun34231_ip = 0; ; ) switch(_fun34231_ip) {
 0:
                        entity = {};
                        foxtrot = _closure2_slot0;
                        golf = 8;
                        oscar = undefined;
                        report = 7;
                        zulu = 9;
                        mike = global;
                        for(verify in foxtrot)
 39:
                        {
 51:
                            sizing = verify;
                            kilo = _closure2_slot0;
                            sequence = kilo[sizing];
                            output = mike.Array;
                            kilo = output.isArray;
                            kilo = kilo.bind(output)(sequence);
                            if(kilo) { _fun34231_ip = 87; continue _fun34231 }
 81:
                            entity[sizing] = sequence;
                            _fun34231_ip = 39; continue _fun34231;
 87:
                            update = _closure1_slot0;
                            kilo = _closure1_slot2;
                            output = kilo[golf];
                            echo = update.bind(oscar)(output);
                            result = echo.withTiming;
                            output = kilo[report];
                            vacuum = update.bind(oscar)(output);
                            control = vacuum.interpolateColor;
                            source = _closure3_slot0;
                            output = source.get;
                            source = output.bind(source)();
                            output = [0, 1, 2];
                            output = control.bind(vacuum)(source, output, sequence);
                            kilo = kilo[zulu];
                            kilo = update.bind(oscar)(kilo);
                            kilo = kilo.timingStandard;
                            kilo = result.bind(echo)(output, kilo);
                            entity[sizing] = kilo;
                            _fun34231_ip = 39; continue _fun34231;
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
                yankee = options.bind(golf)(yankee);
                yankee = yankee.withTiming;
                report['withTiming'] = yankee;
                offset = verify[offset];
                offset = options.bind(golf)(offset);
                offset = offset.interpolateColor;
                report['interpolateColor'] = offset;
                report['themeIndex'] = oscar;
                oscar = 9;
                oscar = verify[oscar];
                oscar = options.bind(golf)(oscar);
                oscar = oscar.timingStandard;
                report['timingStandard'] = oscar;
                entity['__closure'] = report;
                report = 15640881185419.0;
                entity['__workletHash'] = report;
                tango = _closure1_slot7;
                entity['__initData'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            return entity;
        }
    };
    zulu['createAnimatedThemedStyles'] = mike;
    return entity;
})();