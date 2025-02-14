// app/uikit-native/status/Status.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: getStatusSource
        _fun64822: for(var _fun64822_ip = 0; ; ) switch(_fun64822_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            if(mike) { _fun64822_ip = 213; continue _fun64822 }
 15:
            mike = argBaz;
            if(mike) { _fun64822_ip = 189; continue _fun64822 }
 24:
            mike = _closure1_slot7;
            mike = mike.IDLE;
            if(!(mike !== zulu)) { _fun64822_ip = 165; continue _fun64822 }
 41:
            mike = _closure1_slot7;
            mike = mike.DND;
            if(!(mike !== zulu)) { _fun64822_ip = 141; continue _fun64822 }
 55:
            mike = _closure1_slot7;
            mike = mike.OFFLINE;
            if(!(mike !== zulu)) { _fun64822_ip = 117; continue _fun64822 }
 69:
            mike = _closure1_slot7;
            mike = mike.INVISIBLE;
            if(!(mike !== zulu)) { _fun64822_ip = 117; continue _fun64822 }
 83:
            mike = _closure1_slot7;
            mike = mike.ONLINE;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 15;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            return mike;
 117:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            return mike;
 141:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 13;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            return mike;
 165:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 12;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            return mike;
 189:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 11;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            return mike;
 213:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Image;
    var _closure1_slot4 = golf;
    options = tango.StyleSheet;
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.STATUS_PADDING;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StatusTypes;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.TYPING_ENTERING;
    var _closure1_slot8 = golf;
    golf = tango.TYPING_EXITING;
    var _closure1_slot9 = golf;
    tango = tango.CHANNEL_SPRING_CONFIG;
    var _closure1_slot10 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot11 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot12 = tango;
    golf = options.create;
    tango = {};
    verify = {'width': '100%', 'height': '100%'};
    tango['statusIcon'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot13 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = function(argFoo, argBar) {
        _fun64823: for(var _fun64823_ip = 0; ; ) switch(_fun64823_ip) {
 0:
            offset = argBar;
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 8;
            entity = oscar[entity];
            report = undefined;
            tango = mike.bind(report)(entity);
            mike = tango.getStatusTypingDimensions;
            entity = argFoo;
            entity = mike.bind(tango)(entity);
            golf = entity.width;
            options = entity.height;
            tango = entity.dotSize;
            entity = {};
            mike = {};
            verify = _closure1_slot7;
            verify = verify.ONLINE;
            if(!(verify !== offset)) { _fun64823_ip = 300; continue _fun64823 }
 79:
            verify = _closure1_slot7;
            verify = verify.IDLE;
            if(!(verify !== offset)) { _fun64823_ip = 267; continue _fun64823 }
 96:
            verify = _closure1_slot7;
            verify = verify.DND;
            if(!(verify !== offset)) { _fun64823_ip = 234; continue _fun64823 }
 113:
            verify = _closure1_slot7;
            verify = verify.STREAMING;
            if(!(verify !== offset)) { _fun64823_ip = 201; continue _fun64823 }
 127:
            verify = _closure1_slot7;
            verify = verify.INVISIBLE;
            if(!(verify !== offset)) { _fun64823_ip = 165; continue _fun64823 }
 141:
            verify = _closure1_slot7;
            verify = verify.UNKNOWN;
            if(!(verify !== offset)) { _fun64823_ip = 165; continue _fun64823 }
 155:
            verify = _closure1_slot7;
            verify = verify.OFFLINE;
 165:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 9;
            verify = yankee[verify];
            verify = offset.bind(report)(verify);
            verify = verify.unsafe_rawColors;
            verify = verify.PRIMARY_400;
            _fun64823_ip = 331; continue _fun64823;
 201:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            offset = 9;
            offset = romeo[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.unsafe_rawColors;
            verify = offset.TWITCH;
            _fun64823_ip = 331; continue _fun64823;
 234:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            offset = 9;
            offset = romeo[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.unsafe_rawColors;
            verify = offset.RED_400;
            _fun64823_ip = 331; continue _fun64823;
 267:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            offset = 9;
            offset = romeo[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.unsafe_rawColors;
            verify = offset.YELLOW_300;
            _fun64823_ip = 331; continue _fun64823;
 300:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            offset = 9;
            offset = romeo[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.unsafe_rawColors;
            verify = offset.GREEN_360;
 331:
            mike['backgroundColor'] = verify;
            mike['borderRadius'] = options;
            mike['height'] = options;
            mike['width'] = golf;
            golf = 4;
            mike['paddingStart'] = golf;
            golf = 2;
            mike['paddingEnd'] = golf;
            golf = 0;
            mike['marginRight'] = golf;
            entity['ellipsis'] = mike;
            mike = {};
            mike['width'] = tango;
            mike['height'] = tango;
            tango = _closure1_slot1;
            zulu = 9;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.colors;
            zulu = zulu.WHITE;
            mike['backgroundColor'] = zulu;
            entity['ellipsisDot'] = mike;
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = {};
    golf = "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}";
    tango['code'] = golf;
    var _closure1_slot15 = tango;
    tango = {};
    golf = 'function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}';
    tango['code'] = golf;
    var _closure1_slot16 = tango;
    tango = 21;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'uikit-native/status/Status.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: Status
        _fun64824: for(var _fun64824_ip = 0; ; ) switch(_fun64824_ip) {
 0:
            entity = argFoo;
            offset = entity.isMobileOnline;
            tango = undefined;
            if(!(offset === tango)) { _fun64824_ip = 17; continue _fun64824 }
 15:
            offset = false;
 17:
            oscar = entity.style;
            verify = entity.status;
            yankee = entity.size;
            options = entity.streaming;
            if(!(options === tango)) { _fun64824_ip = 44; continue _fun64824 }
 42:
            options = false;
 44:
            zulu = _closure1_slot11;
            mike = _closure1_slot5;
            entity = {};
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            report = 16;
            report = foxtrot[report];
            report = romeo.bind(tango)(report);
            yankee = report.bind(tango)(yankee, offset);
            report = new Array(2);
            report[0] = yankee;
            report[1] = oscar;
            entity['style'] = report;
            oscar = _closure1_slot4;
            report = {};
            yankee = _closure1_slot13;
            yankee = yankee.statusIcon;
            report['style'] = yankee;
            golf = _closure1_slot17;
            golf = golf.bind(tango)(verify, options, offset);
            report['source'] = golf;
            golf = 'stretch';
            report['resizeMode'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: StatusWithTyping
        _fun64825: for(var _fun64825_ip = 0; ; ) switch(_fun64825_ip) {
 0:
            entity = argFoo;
            backup = entity.isMobileOnline;
            tango = undefined;
            if(!(backup === tango)) { _fun64825_ip = 19; continue _fun64825 }
 17:
            backup = false;
 19:
            golf = entity.style;
            foxtrot = entity.status;
            zulu = entity.size;
            romeo = entity.streaming;
            if(!(romeo === tango)) { _fun64825_ip = 46; continue _fun64825 }
 44:
            romeo = false;
 46:
            oscar = entity.typing;
            options = entity.userId;
            var _closure2_slot0 = tango;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            entity = _closure1_slot14;
            output = entity.bind(tango)(zulu, foxtrot);
            verify = _closure1_slot1;
            report = _closure1_slot2;
            entity = 16;
            entity = report[entity];
            entity = verify.bind(tango)(entity);
            kilo = entity.bind(tango)(zulu, backup);
            zulu = _closure1_slot0;
            entity = 17;
            entity = report[entity];
            report = zulu.bind(tango)(entity);
            zulu = report.useFlashListAnimationDisabler;
            entity = null;
            verify = entity != options;
            entity = '';
            if(!verify) { _fun64825_ip = 162; continue _fun64825 }
 159:
            entity = options;
 162:
            report = zulu.bind(report)(entity);
            entity = _closure1_slot3;
            zulu = 2;
            report = entity.bind(tango)(report, zulu);
            entity = 0;
            result = report[entity];
            _closure2_slot0 = result;
            sizing = 1;
            source = report[sizing];
            _closure2_slot1 = source;
            if(oscar) { _fun64825_ip = 211; continue _fun64825 }
 204:
            vacuum = kilo.width;
            _fun64825_ip = 234; continue _fun64825;
 211:
            report = output.ellipsis;
            options = report.width;
            report = _closure1_slot6;
            report = zulu * report;
            vacuum = options + report;
 234:
            _closure2_slot2 = vacuum;
            if(oscar) { _fun64825_ip = 248; continue _fun64825 }
 241:
            control = kilo.height;
            _fun64825_ip = 271; continue _fun64825;
 248:
            report = output.ellipsis;
            options = report.height;
            report = _closure1_slot6;
            report = zulu * report;
            control = options + report;
 271:
            _closure2_slot3 = control;
            if(oscar) { _fun64825_ip = 285; continue _fun64825 }
 278:
            update = kilo.borderRadius;
            _fun64825_ip = 289; continue _fun64825;
 285:
            update = vacuum / zulu;
 289:
            _closure2_slot4 = update;
            echo = 0;
            if(!oscar) { _fun64825_ip = 334; continue _fun64825 }
 298:
            report = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 8;
            zulu = options[zulu];
            options = report.bind(tango)(zulu);
            report = options.getAnimatedTypingTranslateX;
            zulu = kilo.width;
            echo = report.bind(options)(zulu);
 334:
            _closure2_slot5 = echo;
            config = _closure1_slot0;
            sequence = _closure1_slot2;
            offset = 18;
            zulu = sequence[offset];
            options = config.bind(tango)(zulu);
            report = options.useAnimatedStyle;
            zulu = function() { // Original name: R
                _fun64826: for(var _fun64826_ip = 0; ; ) switch(_fun64826_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    golf = 'animate-never';
                    if(!entity) { _fun64826_ip = 31; continue _fun64826 }
 25:
                    golf = 'respect-motion-settings';
 31:
                    entity = {};
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 19;
                    zulu = verify[tango];
                    report = undefined;
                    yankee = options.bind(report)(zulu);
                    offset = yankee.withSpring;
                    zulu = _closure2_slot2;
                    oscar = _closure1_slot10;
                    zulu = offset.bind(yankee)(zulu, oscar, golf);
                    entity['width'] = zulu;
                    zulu = verify[tango];
                    romeo = options.bind(report)(zulu);
                    yankee = romeo.withSpring;
                    sizing = _closure2_slot3;
                    foxtrot = _closure2_slot1;
                    output = romeo;
                    kilo = oscar;
                    backup = golf;
                    zulu = output[yankee](sizing, kilo, backup, foxtrot, romeo);
                    entity['height'] = zulu;
                    zulu = verify[tango];
                    yankee = options.bind(report)(zulu);
                    offset = yankee.withSpring;
                    zulu = _closure2_slot4;
                    zulu = offset.bind(yankee)(zulu, oscar, golf);
                    entity['borderRadius'] = zulu;
                    zulu = {};
                    tango = verify[tango];
                    report = options.bind(report)(tango);
                    tango = report.withSpring;
                    mike = _closure2_slot5;
                    mike = tango.bind(report)(mike, oscar, golf);
                    zulu['translateX'] = mike;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity['transform'] = mike;
                    return entity;
                }
            };
            verify = {};
            verify['enableAnimation'] = result;
            result = 19;
            sequence = sequence[result];
            sequence = config.bind(tango)(sequence);
            sequence = sequence.withSpring;
            verify['withSpring'] = sequence;
            verify['width'] = vacuum;
            vacuum = _closure1_slot10;
            verify['CHANNEL_SPRING_CONFIG'] = vacuum;
            verify['height'] = control;
            verify['onAnimationFinished'] = source;
            verify['borderRadius'] = update;
            verify['translateX'] = echo;
            zulu['__closure'] = verify;
            verify = 2188820017597.0;
            zulu['__workletHash'] = verify;
            verify = _closure1_slot15;
            zulu['__initData'] = verify;
            options = report.bind(options)(zulu);
            if(!oscar) { _fun64825_ip = 470; continue _fun64825 }
 468:
            sizing = 0;
 470:
            _closure2_slot6 = sizing;
            echo = _closure1_slot0;
            entity = _closure1_slot2;
            zulu = entity[offset];
            report = echo.bind(tango)(zulu);
            zulu = report.useAnimatedStyle;
            mike = function() { // Original name: f
                entity = {};
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 19;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.withSpring;
                zulu = _closure2_slot6;
                mike = _closure1_slot10;
                mike = tango.bind(report)(zulu, mike);
                entity['opacity'] = mike;
                return entity;
            };
            verify = {};
            result = entity[result];
            result = echo.bind(tango)(result);
            result = result.withSpring;
            verify['withSpring'] = result;
            verify['statusOpacity'] = sizing;
            sizing = _closure1_slot10;
            verify['CHANNEL_SPRING_CONFIG'] = sizing;
            mike['__closure'] = verify;
            verify = 7224613224414.0;
            mike['__workletHash'] = verify;
            verify = _closure1_slot16;
            mike['__initData'] = verify;
            verify = zulu.bind(report)(mike);
            zulu = _closure1_slot12;
            mike = _closure1_slot1;
            entity = entity[offset];
            entity = mike.bind(tango)(entity);
            mike = entity.View;
            entity = {};
            report = new Array(3);
            report[0] = kilo;
            report[1] = options;
            report[2] = golf;
            entity['style'] = report;
            kilo = false;
            entity['collapsable'] = kilo;
            if(!oscar) { _fun64825_ip = 775; continue _fun64825 }
 632:
            options = _closure1_slot11;
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            report = result[offset];
            report = sizing.bind(tango)(report);
            golf = report.View;
            report = {};
            report['collapsable'] = kilo;
            kilo = _closure1_slot8;
            report['entering'] = kilo;
            kilo = _closure1_slot9;
            report['exiting'] = kilo;
            echo = {};
            kilo = 'absolute';
            echo['position'] = kilo;
            kilo = _closure1_slot6;
            echo['left'] = kilo;
            echo['top'] = kilo;
            kilo = new Array(1);
            kilo[0] = echo;
            report['style'] = kilo;
            kilo = 20;
            kilo = result[kilo];
            sizing = sizing.bind(tango)(kilo);
            kilo = {};
            result = output.ellipsis;
            kilo['style'] = result;
            output = output.ellipsisDot;
            kilo['dotStyle'] = output;
            output = true;
            kilo['disableScale'] = output;
            kilo = options.bind(tango)(sizing, kilo);
            report['children'] = kilo;
            oscar = options.bind(tango)(golf, report);
 775:
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot11;
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            oscar = oscar[offset];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.View;
            oscar = {};
            oscar['style'] = verify;
            offset = _closure1_slot4;
            verify = {};
            kilo = _closure1_slot13;
            kilo = kilo.statusIcon;
            verify['style'] = kilo;
            yankee = _closure1_slot17;
            yankee = yankee.bind(tango)(foxtrot, romeo, backup);
            verify['source'] = yankee;
            yankee = 'stretch';
            verify['resizeMode'] = yankee;
            verify = options.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['StatusWithTyping'] = mike;
    return entity;
})();