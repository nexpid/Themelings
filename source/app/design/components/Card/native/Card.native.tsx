// app/design/components/Card/native/Card.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getCardBackgroundToken
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = 'primary';
            if(!(entity !== mike)) { _fun00002_ip = 102; continue _fun00001 }
 11:
            entity = 'secondary';
            if(!(entity !== mike)) { _fun00002_ip = 69; continue _fun00001 }
 19:
            entity = 'transparent';
            if(!(entity !== mike)) { _fun00002_ip = 31; continue _fun00001 }
 27:
            entity = undefined;
            return entity;
 31:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.unsafe_rawColors;
            entity = entity.TRANSPARENT;
            return entity;
 69:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.CARD_SECONDARY_BG;
            return entity;
 102:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.CARD_PRIMARY_BG;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    mike = function(argFoo) { // Original name: Card
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscar = argFoo;
            offset = oscar.start;
            report = undefined;
            if(!(offset === report)) { _fun00004_ip = 16; continue _fun00003 }
 14:
            offset = true;
 16:
            verify = oscar.end;
            if(!(verify === report)) { _fun00004_ip = 27; continue _fun00003 }
 25:
            verify = true;
 27:
            options = oscar.shadow;
            if(!(options === report)) { _fun00004_ip = 41; continue _fun00003 }
 37:
            options = 'none';
 41:
            golf = oscar.border;
            if(!(golf === report)) { _fun00004_ip = 57; continue _fun00003 }
 51:
            golf = 'faint';
 57:
            tango = oscar.variant;
            if(!(tango === report)) { _fun00004_ip = 70; continue _fun00003 }
 66:
            tango = 'primary';
 70:
            mike = {'start': 0, 'end': 0, 'shadow': 0, 'border': 0, 'variant': 0};
            zulu = null;
            sizing = mike;
            kilo = null;
            entity = silentSetPrototypeOf(sizing, kilo);
            sizing = {};
            kilo = oscar;
            backup = mike;
            oscar = copyDataProperties(sizing, kilo, backup);
            entity = _closure1_slot8;
            output = undefined;
            sizing = offset;
            kilo = verify;
            backup = tango;
            foxtrot = options;
            romeo = golf;
            entity = output[entity](sizing, kilo, backup, foxtrot, romeo, yankee);
            golf = entity.spacing;
            options = new Array(3);
            options[0] = golf;
            golf = oscar.style;
            options[1] = golf;
            entity = entity.card;
            options[2] = entity;
            entity = 'onPress';
            entity = entity in oscar;
            golf = tango;
            if(!entity) { _fun00004_ip = 186; continue _fun00003 }
 177:
            entity = oscar.onPress;
            if(!(zulu == entity)) { _fun00004_ip = 223; continue _fun00003 }
 186:
            tango = _closure1_slot5;
            zulu = _closure1_slot4;
            entity = {};
            sizing = entity;
            kilo = oscar;
            yankee = copyDataProperties(sizing, kilo);
            yankee = 'style';
            entity[yankee] = options;
            entity = tango.bind(report)(zulu, entity);
            _fun00004_ip = 293; continue _fun00003;
 223:
            tango = _closure1_slot5;
            zulu = _closure1_slot11;
            mike = {};
            yankee = 'button';
            mike['accessibilityRole'] = yankee;
            sizing = mike;
            kilo = oscar;
            oscar = copyDataProperties(sizing, kilo);
            oscar = 'start';
            mike[oscar] = offset;
            oscar = 'end';
            mike[oscar] = verify;
            oscar = 'style';
            mike[oscar] = options;
            oscar = 'variant';
            mike[oscar] = golf;
            entity = tango.bind(report)(zulu, mike);
 293:
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: PressableCard
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 7;
            entity = zulu[entity];
            zulu = undefined;
            report = report.bind(zulu)(entity);
            entity = report.isAndroid;
            entity = entity.bind(report)();
            if(entity) { _fun00006_ip = 54; continue _fun00005 }
 42:
            entity = function(argFoo) { // Original name: PressableCardiOS
                golf = argFoo;
                oscar = golf.children;
                options = golf.style;
                report = golf.variant;
                verify = golf.onPressIn;
                var _closure3_slot0 = verify;
                zulu = golf.onPressOut;
                var _closure3_slot1 = zulu;
                entity = golf.start;
                entity = golf.end;
                tango = {'children': 0, 'style': 0, 'variant': 0, 'onPressIn': 0, 'onPressOut': 0, 'start': 0, 'end': 0};
                update = null;
                source = tango;
                entity = silentSetPrototypeOf(source, update);
                romeo = 0;
                source = {};
                update = golf;
                echo = tango;
                golf = copyDataProperties(source, update, echo);
                foxtrot = _closure1_slot0;
                backup = _closure1_slot2;
                output = 3;
                offset = backup[output];
                tango = undefined;
                yankee = foxtrot.bind(tango)(offset);
                offset = yankee.useSharedValue;
                sizing = offset.bind(yankee)(romeo);
                var _closure3_slot2 = sizing;
                romeo = _closure1_slot3;
                yankee = romeo.useCallback;
                offset = new Array(2);
                offset[0] = sizing;
                offset[1] = verify;
                verify = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        tango = _closure3_slot2;
                        zulu = tango.set;
                        mike = 1;
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure3_slot0;
                        mike = null;
                        if(!(mike != zulu)) { _fun00008_ip = 44; continue _fun00007 }
 30:
                        zulu = _closure3_slot0;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
 44:
                        entity = undefined;
                        return entity;
                    }
                };
                offset = yankee.bind(romeo)(verify, offset);
                romeo = _closure1_slot3;
                yankee = romeo.useCallback;
                verify = new Array(2);
                verify[0] = sizing;
                verify[1] = zulu;
                zulu = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tango = _closure3_slot2;
                        zulu = tango.set;
                        mike = 0;
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure3_slot1;
                        mike = null;
                        if(!(mike != zulu)) { _fun00010_ip = 43; continue _fun00009 }
 29:
                        zulu = _closure3_slot1;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
 43:
                        entity = undefined;
                        return entity;
                    }
                };
                verify = yankee.bind(romeo)(zulu, verify);
                zulu = _closure1_slot7;
                zulu = zulu.bind(tango)(report);
                kilo = zulu.backgroundColor;
                var _closure3_slot3 = kilo;
                romeo = zulu.backgroundColorPressed;
                var _closure3_slot4 = romeo;
                zulu = backup[output];
                report = foxtrot.bind(tango)(zulu);
                zulu = report.useAnimatedStyle;
                mike = function() { // Original name: A
                    entity = {};
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 8;
                    mike = options[mike];
                    zulu = undefined;
                    oscar = golf.bind(zulu)(mike);
                    report = oscar.withSpring;
                    mike = 3;
                    mike = options[mike];
                    yankee = golf.bind(zulu)(mike);
                    offset = yankee.interpolateColor;
                    verify = _closure3_slot2;
                    tango = verify.get;
                    verify = tango.bind(verify)();
                    romeo = _closure3_slot3;
                    tango = new Array(2);
                    tango[0] = romeo;
                    mike = _closure3_slot4;
                    tango[1] = mike;
                    mike = [0, 1];
                    tango = offset.bind(yankee)(verify, mike, tango);
                    mike = 9;
                    mike = options[mike];
                    mike = golf.bind(zulu)(mike);
                    zulu = mike.ON_PRESS_SPRING;
                    mike = 'animate-always';
                    mike = report.bind(oscar)(tango, zulu, mike);
                    entity['backgroundColor'] = mike;
                    return entity;
                };
                yankee = {};
                result = 8;
                result = backup[result];
                result = foxtrot.bind(tango)(result);
                result = result.withSpring;
                yankee['withSpring'] = result;
                output = backup[output];
                output = foxtrot.bind(tango)(output);
                output = output.interpolateColor;
                yankee['interpolateColor'] = output;
                yankee['pressed'] = sizing;
                yankee['backgroundColor'] = kilo;
                yankee['backgroundColorPressed'] = romeo;
                romeo = 9;
                romeo = backup[romeo];
                romeo = foxtrot.bind(tango)(romeo);
                romeo = romeo.ON_PRESS_SPRING;
                yankee['ON_PRESS_SPRING'] = romeo;
                mike['__closure'] = yankee;
                yankee = 14943431549291.0;
                mike['__workletHash'] = yankee;
                yankee = _closure1_slot9;
                mike['__initData'] = yankee;
                report = zulu.bind(report)(mike);
                zulu = _closure1_slot5;
                mike = _closure1_slot6;
                entity = {};
                source = entity;
                update = golf;
                golf = copyDataProperties(source, update);
                golf = 'onPressIn';
                entity[golf] = offset;
                golf = 'onPressOut';
                entity[golf] = verify;
                golf = new Array(2);
                golf[0] = options;
                golf[1] = report;
                report = 'style';
                entity[report] = golf;
                golf = 130;
                report = 'unstable_pressDelay';
                entity[report] = golf;
                report = 'children';
                entity[report] = oscar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = entity.bind(zulu)(tango);
            _fun00006_ip = 64; continue _fun00005;
 54:
            mike = function(argFoo) { // Original name: PressableCardAndroid
                tango = argFoo;
                oscar = tango.children;
                verify = tango.start;
                var _closure3_slot0 = verify;
                options = tango.end;
                var _closure3_slot1 = options;
                zulu = {'children': 0, 'start': 0, 'end': 0};
                yankee = null;
                romeo = zulu;
                entity = silentSetPrototypeOf(romeo, yankee);
                romeo = {};
                yankee = tango;
                offset = zulu;
                report = copyDataProperties(romeo, yankee, offset);
                golf = _closure1_slot3;
                tango = golf.useMemo;
                zulu = new Array(2);
                zulu[0] = verify;
                zulu[1] = options;
                mike = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = {};
                        zulu = _closure3_slot0;
                        if(zulu) { _fun00012_ip = 21; continue _fun00011 }
 12:
                        zulu = _closure3_slot1;
                        mike = 0;
                        if(!zulu) { _fun00012_ip = 57; continue _fun00011 }
 21:
                        report = _closure1_slot1;
                        tango = _closure1_slot2;
                        zulu = 4;
                        tango = tango[zulu];
                        zulu = undefined;
                        zulu = report.bind(zulu)(tango);
                        zulu = zulu.radii;
                        mike = zulu.lg;
 57:
                        entity['cornerRadius'] = mike;
                        return entity;
                    }
                };
                golf = tango.bind(golf)(mike, zulu);
                tango = _closure1_slot5;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 10;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.AnimatedPressableHighlight;
                entity = {};
                entity['androidRippleConfig'] = golf;
                romeo = entity;
                yankee = report;
                report = copyDataProperties(romeo, yankee);
                report = 'children';
                entity[report] = oscar;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            entity = mike.bind(zulu)(tango);
 64:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    verify = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(verify);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.View;
    var _closure1_slot4 = verify;
    verify = tango.Pressable;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    options = options.bind(entity)(tango);
    tango = options.createAnimatedComponent;
    tango = tango.bind(options)(verify);
    var _closure1_slot6 = tango;
    tango = 6;
    options = oscar[tango];
    offset = report.bind(entity)(options);
    verify = offset.createStyleProperties;
    options = function(argFoo) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscar = argFoo;
            mike = _closure1_slot10;
            report = undefined;
            zulu = mike.bind(report)(oscar);
            mike = 'primary';
            if(!(mike !== oscar)) { _fun00014_ip = 104; continue _fun00013 }
 25:
            mike = 'secondary';
            if(!(mike !== oscar)) { _fun00014_ip = 76; continue _fun00013 }
 33:
            tango = 'transparent';
            mike = undefined;
            if(!(tango === oscar)) { _fun00014_ip = 130; continue _fun00013 }
 43:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 4;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            tango = tango.unsafe_rawColors;
            mike = tango.TRANSPARENT;
            _fun00014_ip = 130; continue _fun00013;
 76:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 5;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            mike = tango.CARD_SECONDARY_PRESSED_BG;
            _fun00014_ip = 130; continue _fun00013;
 104:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 5;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            mike = entity.CARD_PRIMARY_PRESSED_BG;
 130:
            entity = {};
            entity['backgroundColor'] = zulu;
            entity['backgroundColorPressed'] = mike;
            return entity;
        }
    };
    options = verify.bind(offset)(options);
    var _closure1_slot7 = options;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            options = argFoo;
            verify = argBar;
            oscar = argGrault;
            mike = _closure1_slot10;
            offset = undefined;
            entity = argBaz;
            tango = mike.bind(offset)(entity);
            mike = null;
            zulu = 'none';
            entity = null;
            if(!(zulu !== oscar)) { _fun00016_ip = 170; continue _fun00015 }
 41:
            golf = 'subtle';
            if(!(golf !== oscar)) { _fun00016_ip = 139; continue _fun00015 }
 51:
            golf = 'strong';
            if(!(golf !== oscar)) { _fun00016_ip = 106; continue _fun00015 }
 59:
            golf = 'faint';
            if(!(golf !== oscar)) { _fun00016_ip = 73; continue _fun00015 }
 69:
            entity = undefined;
            _fun00016_ip = 170; continue _fun00015;
 73:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            golf = 4;
            golf = romeo[golf];
            golf = yankee.bind(offset)(golf);
            golf = golf.colors;
            entity = golf.BORDER_FAINT;
            _fun00016_ip = 170; continue _fun00015;
 106:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            golf = 4;
            golf = romeo[golf];
            golf = yankee.bind(offset)(golf);
            golf = golf.colors;
            entity = golf.BORDER_STRONG;
            _fun00016_ip = 170; continue _fun00015;
 139:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            golf = 4;
            golf = romeo[golf];
            golf = yankee.bind(offset)(golf);
            golf = golf.colors;
            entity = golf.BORDER_SUBTLE;
 170:
            golf = tango;
            if(!(mike != entity)) { _fun00016_ip = 180; continue _fun00015 }
 177:
            golf = entity;
 180:
            entity = {};
            mike = {};
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            yankee = 5;
            yankee = foxtrot[yankee];
            foxtrot = romeo.bind(offset)(yankee);
            romeo = foxtrot.createCardShadowToken;
            yankee = argCorge;
            kilo = romeo.bind(foxtrot)(yankee);
            sizing = mike;
            yankee = copyDataProperties(sizing, kilo);
            romeo = undefined;
            if(!options) { _fun00016_ip = 261; continue _fun00015 }
 230:
            foxtrot = _closure1_slot1;
            backup = _closure1_slot2;
            yankee = 4;
            yankee = backup[yankee];
            yankee = foxtrot.bind(offset)(yankee);
            yankee = yankee.radii;
            romeo = yankee.lg;
 261:
            yankee = 'borderTopStartRadius';
            mike[yankee] = romeo;
            yankee = undefined;
            if(!options) { _fun00016_ip = 306; continue _fun00015 }
 275:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            options = 4;
            options = foxtrot[options];
            options = romeo.bind(offset)(options);
            options = options.radii;
            yankee = options.lg;
 306:
            options = 'borderTopEndRadius';
            mike[options] = yankee;
            yankee = undefined;
            if(!verify) { _fun00016_ip = 351; continue _fun00015 }
 320:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            options = 4;
            options = foxtrot[options];
            options = romeo.bind(offset)(options);
            options = options.radii;
            yankee = options.lg;
 351:
            options = 'borderBottomStartRadius';
            mike[options] = yankee;
            options = undefined;
            if(!verify) { _fun00016_ip = 396; continue _fun00015 }
 365:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 4;
            report = yankee[report];
            report = verify.bind(offset)(report);
            report = report.radii;
            options = report.lg;
 396:
            report = 'borderBottomEndRadius';
            mike[report] = options;
            report = 'borderColor';
            mike[report] = golf;
            report = 0;
            if(!(zulu !== oscar)) { _fun00016_ip = 423; continue _fun00015 }
 420:
            report = 1;
 423:
            zulu = 'borderWidth';
            mike[zulu] = report;
            zulu = 'backgroundColor';
            mike[zulu] = tango;
            entity['card'] = mike;
            mike = {};
            zulu = 16;
            mike['padding'] = zulu;
            entity['spacing'] = mike;
            return entity;
        }
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot8 = tango;
    tango = {};
    options = "function CardNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};}";
    tango['code'] = options;
    var _closure1_slot9 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Card/native/Card.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['Card'] = mike;
    zulu['InternalCard'] = mike;
    return entity;
})();