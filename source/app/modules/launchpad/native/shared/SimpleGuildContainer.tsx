// app/modules/launchpad/native/shared/SimpleGuildContainer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    golf = tango.Pressable;
    var _closure1_slot4 = golf;
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = {'mass': 0.2, 'damping': 40, 'stiffness': 300, 'overshootClamping': true, 'restSpeedThreshold': 1};
    var _closure1_slot9 = tango;
    tango = 3;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    golf = verify.createStyles;
    tango = {};
    offset = {'position': 'absolute', 'right': 4294967292, 'bottom': 0};
    tango['badgeWrapper'] = offset;
    tango = golf.bind(verify)(tango);
    var _closure1_slot10 = tango;
    golf = options.memo;
    tango = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.badge;
            verify = entity.unread;
            options = entity.backgroundColor;
            entity = _closure1_slot10;
            report = undefined;
            golf = entity.bind(report)();
            entity = 0;
            if(!(offset <= entity)) { _fun00002_ip = 44; continue _fun00001 }
 39:
            entity = null;
            if(!verify) { _fun00002_ip = 115; continue _fun00001 }
 44:
            tango = _closure1_slot6;
            zulu = _closure1_slot5;
            mike = {};
            golf = golf.badgeWrapper;
            mike['style'] = golf;
            golf = _closure1_slot1;
            yankee = _closure1_slot2;
            oscar = 4;
            oscar = yankee[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            oscar['value'] = offset;
            oscar['unread'] = verify;
            oscar['backgroundColor'] = options;
            oscar = tango.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 115:
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    golf = options.memo;
    tango = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golf = entity.guildId;
            oscar = entity.activityIndicatorState;
            options = entity.backgroundColor;
            entity = null;
            zulu = entity == oscar;
            report = undefined;
            mike = undefined;
            if(zulu) { _fun00004_ip = 37; continue _fun00003 }
 32:
            mike = oscar.source;
 37:
            if(!(entity == mike)) { _fun00004_ip = 101; continue _fun00003 }
 41:
            mike = entity != golf;
            entity = null;
            if(!mike) { _fun00004_ip = 99; continue _fun00003 }
 50:
            tango = _closure1_slot6;
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 5;
            mike = verify[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['guildId'] = golf;
            golf = {};
            golf['backgroundColor'] = options;
            mike['style'] = golf;
            entity = tango.bind(report)(zulu, mike);
 99:
            _fun00004_ip = 183; continue _fun00003;
 101:
            tango = _closure1_slot6;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 5;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.GuildsBarActivityIndicatorBase;
            mike = {};
            golf = {};
            golf['backgroundColor'] = options;
            mike['style'] = golf;
            golf = oscar.source;
            mike['source'] = golf;
            golf = oscar.IconComponent;
            mike['IconComponent'] = golf;
            oscar = oscar.isCurrentUserConnected;
            mike['isCurrentUserConnected'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 183:
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot12 = tango;
    tango = {};
    golf = 'function SimpleGuildContainerTsx1(){const{targetRadius}=this.__closure;return targetRadius;}';
    tango['code'] = golf;
    var _closure1_slot13 = tango;
    tango = {};
    golf = 'function SimpleGuildContainerTsx2(){const{selected}=this.__closure;return selected?1:0;}';
    tango['code'] = golf;
    var _closure1_slot14 = tango;
    tango = {};
    golf = "function SimpleGuildContainerTsx3(){const{withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};}";
    tango['code'] = golf;
    var _closure1_slot15 = tango;
    tango = {};
    golf = "function SimpleGuildContainerTsx4(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};}";
    tango['code'] = golf;
    var _closure1_slot16 = tango;
    tango = {};
    golf = "function SimpleGuildContainerTsx5(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};}";
    tango['code'] = golf;
    var _closure1_slot17 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/shared/SimpleGuildContainer.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: SimpleGuildContainer
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            source = mike.guildIconRef;
            backup = mike.guildId;
            control = mike.style;
            kilo = mike.children;
            vacuum = mike.selected;
            var _closure2_slot0 = vacuum;
            config = mike.size;
            tango = undefined;
            if(!(config === tango)) { _fun00006_ip = 50; continue _fun00005 }
 47:
            config = 48;
 50:
            var _closure2_slot1 = config;
            output = mike.borderRadius;
            if(!(output === tango)) { _fun00006_ip = 106; continue _fun00005 }
 63:
            zulu = 24;
            if(!vacuum) { _fun00006_ip = 103; continue _fun00005 }
 69:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            report = 6;
            report = golf[report];
            report = oscar.bind(tango)(report);
            report = report.radii;
            zulu = report.lg;
 103:
            output = zulu;
 106:
            var _closure2_slot2 = output;
            offset = mike.badge;
            var _closure2_slot3 = offset;
            verify = mike.unread;
            var _closure2_slot4 = verify;
            yankee = mike.backgroundColor;
            var _closure2_slot5 = yankee;
            update = mike.folder;
            if(!(update === tango)) { _fun00006_ip = 151; continue _fun00005 }
 149:
            update = false;
 151:
            result = mike.usingCutout;
            if(!(result === tango)) { _fun00006_ip = 163; continue _fun00005 }
 161:
            result = false;
 163:
            var _closure2_slot6 = result;
            foxtrot = mike.activityIndicatorState;
            var _closure2_slot7 = foxtrot;
            romeo = mike.accessibilityLabel;
            report = mike.onAccessibilityAction;
            sizing = mike.onLayout;
            var _closure2_slot8 = tango;
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 7;
            mike = golf[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.bind(tango)();
            sequence = mike.iconStroke;
            _closure2_slot8 = sequence;
            echo = mike.iconBackground;
            options = _closure1_slot3;
            golf = options.useMemo;
            zulu = new Array(8);
            zulu[0] = vacuum;
            zulu[1] = offset;
            zulu[2] = verify;
            zulu[3] = result;
            zulu[4] = config;
            zulu[5] = yankee;
            zulu[6] = output;
            zulu[7] = foxtrot;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot0;
                    offset = null;
                    entity = null;
                    if(!mike) { _fun00008_ip = 441; continue _fun00007 }
 17:
                    mike = _closure2_slot6;
                    if(mike) { _fun00008_ip = 226; continue _fun00007 }
 30:
                    report = _closure1_slot8;
                    tango = _closure1_slot7;
                    zulu = {};
                    romeo = _closure1_slot6;
                    yankee = _closure1_slot5;
                    oscar = {};
                    golf = {'borderRadius': null, 'borderWidth': 2, 'borderColor': null, 'position': 'absolute', 'top': 4294967294, 'left': 4294967294};
                    kilo = _closure2_slot2;
                    mike = 2;
                    mike = kilo + mike;
                    golf['borderRadius'] = mike;
                    backup = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    mike = 6;
                    foxtrot = foxtrot[mike];
                    mike = undefined;
                    foxtrot = backup.bind(mike)(foxtrot);
                    foxtrot = foxtrot.unsafe_rawColors;
                    foxtrot = foxtrot.BRAND_500;
                    golf['borderColor'] = foxtrot;
                    backup = _closure2_slot1;
                    foxtrot = 4;
                    sizing = backup + foxtrot;
                    golf['width'] = sizing;
                    foxtrot = backup + foxtrot;
                    golf['height'] = foxtrot;
                    oscar['style'] = golf;
                    golf = romeo.bind(mike)(yankee, oscar);
                    oscar = new Array(2);
                    oscar[0] = golf;
                    golf = {};
                    foxtrot = {'borderRadius': null, 'borderWidth': 3, 'borderColor': null, 'position': 'absolute', 'top': 0, 'left': 0};
                    foxtrot['borderRadius'] = kilo;
                    kilo = _closure2_slot5;
                    foxtrot['borderColor'] = kilo;
                    foxtrot['width'] = backup;
                    foxtrot['height'] = backup;
                    golf['style'] = foxtrot;
                    golf = romeo.bind(mike)(yankee, golf);
                    oscar[1] = golf;
                    zulu['children'] = oscar;
                    mike = report.bind(mike)(tango, zulu);
                    _fun00008_ip = 438; continue _fun00007;
 226:
                    oscar = _closure1_slot6;
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 8;
                    zulu = report[zulu];
                    report = undefined;
                    tango = tango.bind(report)(zulu);
                    zulu = {'style': null, 'cutoutTopRightSize': null, 'cutoutTopRightInsetX': 8, 'cutoutTopRightInsetY': 8, 'cutoutBottomRightSize': null, 'cutoutBottomRightInsetX': 6, 'cutoutBottomRightInsetY': 7};
                    golf = {'position': 'absolute', 'top': 4294967294, 'left': 4294967294};
                    zulu['style'] = golf;
                    golf = _closure2_slot7;
                    yankee = offset == golf;
                    golf = undefined;
                    if(yankee) { _fun00008_ip = 304; continue _fun00007 }
 295:
                    yankee = _closure2_slot7;
                    golf = yankee.source;
 304:
                    yankee = offset != golf;
                    offset = 0;
                    golf = 0;
                    if(!yankee) { _fun00008_ip = 318; continue _fun00007 }
 315:
                    golf = 13;
 318:
                    zulu['cutoutTopRightSize'] = golf;
                    golf = _closure2_slot3;
                    yankee = golf > offset;
                    golf = 13;
                    if(yankee) { _fun00008_ip = 353; continue _fun00007 }
 338:
                    yankee = _closure2_slot4;
                    offset = 0;
                    if(!yankee) { _fun00008_ip = 350; continue _fun00007 }
 347:
                    offset = 11;
 350:
                    golf = offset;
 353:
                    zulu['cutoutBottomRightSize'] = golf;
                    yankee = 6;
                    golf = _closure2_slot1;
                    offset = 4;
                    offset = golf + offset;
                    zulu['imageSize'] = offset;
                    offset = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[yankee];
                    verify = offset.bind(report)(verify);
                    verify = verify.unsafe_rawColors;
                    verify = verify.BRAND_500;
                    zulu['imageBackgroundColor'] = verify;
                    verify = _closure2_slot2;
                    options = 2;
                    options = verify + options;
                    zulu['imageBorderRadius'] = options;
                    zulu['clipInnerAmount'] = golf;
                    mike = oscar.bind(report)(tango, zulu);
 438:
                    entity = mike;
 441:
                    return entity;
                }
            };
            golf = golf.bind(options)(mike, zulu);
            zulu = options.useMemo;
            mike = new Array(4);
            mike[0] = output;
            mike[1] = result;
            mike[2] = config;
            mike[3] = sequence;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure2_slot6;
                    entity = null;
                    if(mike) { _fun00010_ip = 85; continue _fun00009 }
 12:
                    report = _closure1_slot6;
                    tango = _closure1_slot5;
                    zulu = {};
                    mike = {'position': 'absolute', 'borderWidth': 1};
                    golf = _closure2_slot8;
                    golf = golf.color;
                    mike['borderColor'] = golf;
                    golf = _closure2_slot2;
                    mike['borderRadius'] = golf;
                    oscar = _closure2_slot1;
                    mike['width'] = oscar;
                    mike['height'] = oscar;
                    zulu['style'] = mike;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu);
 85:
                    return entity;
                }
            };
            options = zulu.bind(options)(entity, mike);
            zulu = _closure1_slot8;
            mike = _closure1_slot5;
            entity = {};
            entity['style'] = control;
            control = true;
            entity['accessible'] = control;
            control = {};
            control['selected'] = vacuum;
            entity['accessibilityState'] = control;
            control = 'button';
            entity['accessibilityRole'] = control;
            entity['accessibilityLabel'] = romeo;
            control = {};
            romeo = 'activate';
            control['name'] = romeo;
            romeo = new Array(1);
            romeo[0] = control;
            entity['accessibilityActions'] = romeo;
            entity['onAccessibilityAction'] = report;
            romeo = _closure1_slot6;
            report = {};
            report['ref'] = source;
            report['onLayout'] = sizing;
            sizing = {};
            sizing['borderRadius'] = output;
            output = 'hidden';
            sizing['overflow'] = output;
            output = 'transparent';
            if(result) { _fun00006_ip = 461; continue _fun00005 }
 447:
            result = yankee;
            if(update) { _fun00006_ip = 458; continue _fun00005 }
 453:
            result = echo.color;
 458:
            output = result;
 461:
            sizing['backgroundColor'] = output;
            report['style'] = sizing;
            report['children'] = kilo;
            romeo = romeo.bind(tango)(mike, report);
            report = new Array(5);
            report[0] = romeo;
            report[1] = options;
            report[2] = golf;
            options = _closure1_slot6;
            romeo = _closure1_slot12;
            golf = {};
            golf['backgroundColor'] = yankee;
            golf['guildId'] = backup;
            golf['activityIndicatorState'] = foxtrot;
            golf = options.bind(tango)(romeo, golf);
            report[3] = golf;
            golf = _closure1_slot11;
            oscar = {};
            oscar['backgroundColor'] = yankee;
            oscar['badge'] = offset;
            oscar['unread'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[4] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['SimpleGuildContainer'] = tango;
    mike = function(argFoo) { // Original name: SimpleGuildContainerAnimated
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            backup = mike.guildIconRef;
            control = mike.guildId;
            foxtrot = mike.style;
            record = mike.children;
            offset = mike.selected;
            var _closure2_slot0 = offset;
            zulu = mike.size;
            zulu = mike.borderRadius;
            echo = mike.badge;
            result = mike.unread;
            update = mike.backgroundColor;
            var _closure2_slot1 = update;
            tango = mike.folder;
            tango = mike.usingCutout;
            source = mike.activityIndicatorState;
            verify = mike.accessibilityLabel;
            options = mike.onAccessibilityAction;
            golf = mike.onLayout;
            romeo = mike.onPress;
            yankee = mike.onLongPress;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            oscar = _closure1_slot1;
            kilo = _closure1_slot2;
            tango = 7;
            tango = kilo[tango];
            tango = oscar.bind(report)(tango);
            tango = tango.bind(report)();
            vacuum = tango.iconBackground;
            var _closure2_slot2 = vacuum;
            if(offset) { _fun00012_ip = 188; continue _fun00011 }
 171:
            tango = null;
            tango = tango != zulu;
            output = 24;
            if(!tango) { _fun00012_ip = 186; continue _fun00011 }
 183:
            output = zulu;
 186:
            _fun00012_ip = 219; continue _fun00011;
 188:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 6;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.radii;
            output = zulu.lg;
 219:
            _closure2_slot3 = output;
            target = _closure1_slot0;
            sequence = _closure1_slot2;
            kilo = 9;
            zulu = sequence[kilo];
            oscar = target.bind(report)(zulu);
            tango = oscar.useDerivedValue;
            zulu = function() { // Original name: V
                entity = _closure2_slot3;
                return entity;
            };
            sizing = {};
            sizing['targetRadius'] = output;
            zulu['__closure'] = sizing;
            sizing = 5259600477627.0;
            zulu['__workletHash'] = sizing;
            sizing = _closure1_slot13;
            zulu['__initData'] = sizing;
            status = tango.bind(oscar)(zulu);
            _closure2_slot4 = status;
            zulu = sequence[kilo];
            oscar = target.bind(report)(zulu);
            tango = oscar.useDerivedValue;
            zulu = function() { // Original name: z
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = 0;
                    if(!mike) { _fun00014_ip = 15; continue _fun00013 }
 12:
                    entity = 1;
 15:
                    return entity;
                }
            };
            sizing = {};
            sizing['selected'] = offset;
            zulu['__closure'] = sizing;
            sizing = 12318204664732.0;
            zulu['__workletHash'] = sizing;
            sizing = _closure1_slot14;
            zulu['__initData'] = sizing;
            config = tango.bind(oscar)(zulu);
            _closure2_slot5 = config;
            zulu = sequence[kilo];
            oscar = target.bind(report)(zulu);
            tango = oscar.useAnimatedStyle;
            zulu = function() { // Original name: H
                entity = {'borderRadius': null, 'width': 48, 'height': 48, 'overflow': 'hidden'};
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 10;
                tango = tango[mike];
                mike = undefined;
                oscar = report.bind(mike)(tango);
                report = oscar.withSpring;
                golf = _closure2_slot4;
                tango = golf.get;
                tango = tango.bind(golf)();
                zulu = _closure1_slot9;
                zulu = report.bind(oscar)(tango, zulu);
                entity['borderRadius'] = zulu;
                mike = _closure2_slot2;
                mike = mike.color;
                entity['backgroundColor'] = mike;
                return entity;
            };
            sizing = {};
            sierra = 10;
            output = sequence[sierra];
            output = target.bind(report)(output);
            output = output.withSpring;
            sizing['withSpring'] = output;
            sizing['toRadius'] = status;
            context = _closure1_slot9;
            sizing['springConfig'] = context;
            output = 48;
            sizing['GUILD_SIZE'] = output;
            sizing['iconBackground'] = vacuum;
            zulu['__closure'] = sizing;
            sizing = 11339684212259.0;
            zulu['__workletHash'] = sizing;
            sizing = _closure1_slot15;
            zulu['__initData'] = sizing;
            papa = tango.bind(oscar)(zulu);
            sizing = _closure1_slot1;
            zulu = 6;
            zulu = sequence[zulu];
            zulu = sizing.bind(report)(zulu);
            zulu = zulu.unsafe_rawColors;
            lima = zulu.BRAND_500;
            _closure2_slot6 = lima;
            zulu = sequence[kilo];
            oscar = target.bind(report)(zulu);
            tango = oscar.useAnimatedStyle;
            zulu = function() { // Original name: j
                entity = {'borderRadius': null, 'borderWidth': null, 'borderColor': null, 'position': 'absolute', 'top': 4294967294, 'left': 4294967294, 'width': 52, 'height': 52};
                options = _closure1_slot0;
                verify = _closure1_slot2;
                zulu = 10;
                mike = verify[zulu];
                golf = undefined;
                offset = options.bind(golf)(mike);
                report = offset.withSpring;
                yankee = _closure2_slot4;
                tango = yankee.get;
                yankee = tango.bind(yankee)();
                tango = 2;
                tango = yankee + tango;
                oscar = _closure1_slot9;
                tango = report.bind(offset)(tango, oscar);
                entity['borderRadius'] = tango;
                zulu = verify[zulu];
                report = options.bind(golf)(zulu);
                tango = report.withSpring;
                zulu = 9;
                zulu = verify[zulu];
                offset = options.bind(golf)(zulu);
                verify = offset.interpolate;
                golf = _closure2_slot5;
                zulu = golf.get;
                options = zulu.bind(golf)();
                golf = [0, 1];
                zulu = [0, 2];
                zulu = verify.bind(offset)(options, golf, zulu);
                zulu = tango.bind(report)(zulu, oscar);
                entity['borderWidth'] = zulu;
                mike = _closure2_slot6;
                entity['borderColor'] = mike;
                return entity;
            };
            vacuum = {};
            whiskey = sequence[sierra];
            whiskey = target.bind(report)(whiskey);
            whiskey = whiskey.withSpring;
            vacuum['withSpring'] = whiskey;
            vacuum['toRadius'] = status;
            vacuum['springConfig'] = context;
            whiskey = sequence[kilo];
            whiskey = target.bind(report)(whiskey);
            whiskey = whiskey.interpolate;
            vacuum['interpolate'] = whiskey;
            vacuum['toStrokeWidth'] = config;
            vacuum['borderColor'] = lima;
            vacuum['GUILD_SIZE'] = output;
            zulu['__closure'] = vacuum;
            vacuum = 1481885125958.0;
            zulu['__workletHash'] = vacuum;
            vacuum = _closure1_slot16;
            zulu['__initData'] = vacuum;
            vacuum = tango.bind(oscar)(zulu);
            zulu = sequence[kilo];
            tango = target.bind(report)(zulu);
            zulu = tango.useAnimatedStyle;
            entity = function() { // Original name: M
                entity = {'borderRadius': null, 'borderWidth': null, 'borderColor': null, 'position': 'absolute', 'top': 0, 'left': 0, 'width': 48, 'height': 48};
                options = _closure1_slot0;
                verify = _closure1_slot2;
                zulu = 10;
                mike = verify[zulu];
                golf = undefined;
                offset = options.bind(golf)(mike);
                report = offset.withSpring;
                yankee = _closure2_slot4;
                tango = yankee.get;
                tango = tango.bind(yankee)();
                oscar = _closure1_slot9;
                tango = report.bind(offset)(tango, oscar);
                entity['borderRadius'] = tango;
                zulu = verify[zulu];
                report = options.bind(golf)(zulu);
                tango = report.withSpring;
                zulu = 9;
                zulu = verify[zulu];
                offset = options.bind(golf)(zulu);
                verify = offset.interpolate;
                golf = _closure2_slot5;
                zulu = golf.get;
                options = zulu.bind(golf)();
                golf = [0, 1];
                zulu = [0, 3];
                zulu = verify.bind(offset)(options, golf, zulu);
                zulu = tango.bind(report)(zulu, oscar);
                entity['borderWidth'] = zulu;
                mike = _closure2_slot1;
                entity['borderColor'] = mike;
                return entity;
            };
            oscar = {};
            sierra = sequence[sierra];
            sierra = target.bind(report)(sierra);
            sierra = sierra.withSpring;
            oscar['withSpring'] = sierra;
            oscar['toRadius'] = status;
            oscar['springConfig'] = context;
            context = sequence[kilo];
            context = target.bind(report)(context);
            context = context.interpolate;
            oscar['interpolate'] = context;
            oscar['toStrokeWidth'] = config;
            oscar['backgroundColor'] = update;
            oscar['GUILD_SIZE'] = output;
            entity['__closure'] = oscar;
            oscar = 11592745547551.0;
            entity['__workletHash'] = oscar;
            oscar = _closure1_slot17;
            entity['__initData'] = oscar;
            context = zulu.bind(tango)(entity);
            tango = _closure1_slot8;
            zulu = _closure1_slot7;
            entity = {};
            output = _closure1_slot6;
            oscar = sequence[kilo];
            oscar = sizing.bind(report)(oscar);
            config = oscar.View;
            oscar = {};
            oscar['style'] = papa;
            oscar['children'] = record;
            config = output.bind(report)(config, oscar);
            oscar = new Array(5);
            oscar[0] = config;
            config = sequence[kilo];
            config = sizing.bind(report)(config);
            record = config.View;
            config = {};
            config['style'] = context;
            config = output.bind(report)(record, config);
            oscar[1] = config;
            kilo = sequence[kilo];
            kilo = sizing.bind(report)(kilo);
            sizing = kilo.View;
            kilo = {};
            kilo['style'] = vacuum;
            kilo = output.bind(report)(sizing, kilo);
            oscar[2] = kilo;
            sizing = _closure1_slot12;
            kilo = {};
            kilo['backgroundColor'] = update;
            kilo['guildId'] = control;
            kilo['activityIndicatorState'] = source;
            kilo = output.bind(report)(sizing, kilo);
            oscar[3] = kilo;
            sizing = _closure1_slot11;
            kilo = {};
            kilo['backgroundColor'] = update;
            kilo['badge'] = echo;
            kilo['unread'] = result;
            kilo = output.bind(report)(sizing, kilo);
            oscar[4] = kilo;
            entity['children'] = oscar;
            oscar = tango.bind(report)(zulu, entity);
            entity = null;
            if(!(entity == romeo)) { _fun00012_ip = 976; continue _fun00011 }
 950:
            tango = _closure1_slot6;
            zulu = _closure1_slot5;
            entity = {};
            entity['style'] = foxtrot;
            entity['children'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun00012_ip = 1054; continue _fun00011;
 976:
            tango = _closure1_slot6;
            zulu = _closure1_slot4;
            mike = {};
            mike['ref'] = backup;
            mike['style'] = foxtrot;
            mike['onPress'] = romeo;
            mike['onLongPress'] = yankee;
            yankee = 'button';
            mike['accessibilityRole'] = yankee;
            yankee = true;
            mike['accessible'] = yankee;
            mike['accessibilityLabel'] = verify;
            verify = {};
            verify['selected'] = offset;
            mike['accessibilityState'] = verify;
            mike['onAccessibilityAction'] = options;
            mike['onLayout'] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1054:
            return entity;
        }
    };
    zulu['SimpleGuildContainerAnimated'] = mike;
    return entity;
})();