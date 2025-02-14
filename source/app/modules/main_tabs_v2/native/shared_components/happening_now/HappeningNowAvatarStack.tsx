// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CHANNEL_SPRING_CONFIG;
    var _closure1_slot7 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    tango = 17;
    golf = {'damping': 17, 'stiffness': 320, 'mass': 0.5};
    var _closure1_slot10 = golf;
    golf = 6;
    golf = oscar[golf];
    verify = report.bind(entity)(golf);
    options = verify.createStyles;
    golf = function(argFoo, argBar) {
        offset = argFoo;
        options = argBar;
        entity = {};
        mike = {};
        zulu = 'row';
        mike['flexDirection'] = zulu;
        entity['avatarStack'] = mike;
        mike = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': 24, 'paddingLeft': 4, 'paddingRight': 4, 'paddingVertical': 4};
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        zulu = 7;
        golf = oscar[zulu];
        tango = undefined;
        golf = report.bind(tango)(golf);
        golf = golf.colors;
        golf = golf.BG_MOD_SUBTLE;
        mike['backgroundColor'] = golf;
        golf = 4;
        entity['stageAvatarStack'] = mike;
        mike = {'display': 'flex', 'flexDirection': 'row'};
        entity['avatarBubbles'] = mike;
        mike = {'display': 'flex', 'flexDirection': 'row'};
        entity['avatars'] = mike;
        mike = {};
        yankee = -options;
        mike['marginLeft'] = yankee;
        entity['shiftedAvatar'] = mike;
        mike = {'backgroundColor': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
        yankee = oscar[zulu];
        yankee = report.bind(tango)(yankee);
        yankee = yankee.colors;
        yankee = yankee.BG_MOD_STRONG;
        mike['backgroundColor'] = yankee;
        yankee = -options;
        mike['marginLeft'] = yankee;
        yankee = _closure1_slot0;
        verify = 8;
        romeo = oscar[verify];
        romeo = yankee.bind(tango)(romeo);
        romeo = romeo.AVATAR_SIZE_MAP;
        romeo = romeo[offset];
        mike['height'] = romeo;
        verify = oscar[verify];
        verify = yankee.bind(tango)(verify);
        verify = verify.AVATAR_SIZE_MAP;
        verify = verify[offset];
        mike['minWidth'] = verify;
        verify = 10;
        mike['borderRadius'] = verify;
        mike['paddingHorizontal'] = golf;
        golf = 1;
        mike['paddingTop'] = golf;
        entity['userCounter'] = mike;
        mike = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'flex-end', 'overflow': 'hidden'};
        golf = -4;
        golf = golf - options;
        mike['marginLeft'] = golf;
        entity['ellipsisWrapper'] = mike;
        mike = {};
        zulu = oscar[zulu];
        zulu = report.bind(tango)(zulu);
        zulu = zulu.colors;
        zulu = zulu.CARD_SECONDARY_BG;
        mike['borderColor'] = zulu;
        entity['ellipsisBorder'] = mike;
        return entity;
    };
    golf = options.bind(verify)(golf);
    var _closure1_slot11 = golf;
    golf = {};
    options = 'function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}';
    golf['code'] = options;
    var _closure1_slot12 = golf;
    golf = {};
    options = 'function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}';
    golf['code'] = options;
    var _closure1_slot13 = golf;
    golf = {};
    options = 'function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}';
    golf['code'] = options;
    var _closure1_slot14 = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: HappeningNowAvatarStack
        _fun115301: for(var _fun115301_ip = 0; ; ) switch(_fun115301_ip) {
 0:
            oscar = argFoo;
            zulu = oscar.users;
            entity = oscar.guildId;
            var _closure2_slot0 = entity;
            backup = oscar.isTyping;
            tango = undefined;
            if(!(backup === tango)) { _fun115301_ip = 34; continue _fun115301 }
 32:
            backup = false;
 34:
            var _closure2_slot1 = backup;
            offset = oscar.userLimit;
            if(!(offset === tango)) { _fun115301_ip = 51; continue _fun115301 }
 48:
            offset = 3;
 51:
            foxtrot = oscar.userCount;
            entity = oscar.isStage;
            var _closure2_slot2 = entity;
            control = oscar.avatarSize;
            if(!(control === tango)) { _fun115301_ip = 112; continue _fun115301 }
 77:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 9;
            report = options[report];
            report = golf.bind(tango)(report);
            report = report.AvatarSizes;
            control = report.XSMALL_20;
 112:
            var _closure2_slot3 = control;
            report = oscar.avatarBorderWidth;
            if(!(report === tango)) { _fun115301_ip = 131; continue _fun115301 }
 128:
            report = 2;
 131:
            var _closure2_slot4 = report;
            report = oscar.avatarOverlap;
            if(!(report === tango)) { _fun115301_ip = 148; continue _fun115301 }
 145:
            report = 4;
 148:
            var _closure2_slot5 = report;
            verify = oscar.style;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            oscar = _closure1_slot11;
            yankee = oscar.bind(tango)(control, report);
            _closure2_slot6 = yankee;
            romeo = _closure1_slot4;
            options = romeo.useState;
            oscar = function() {
                entity = _closure2_slot1;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            romeo = options.bind(romeo)(oscar);
            options = _closure1_slot3;
            oscar = 2;
            oscar = options.bind(tango)(romeo, oscar);
            source = 0;
            options = oscar[source];
            output = 1;
            oscar = oscar[output];
            _closure2_slot7 = oscar;
            kilo = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 10;
            romeo = romeo[oscar];
            kilo = kilo.bind(tango)(romeo);
            romeo = kilo.useSharedValue;
            sizing = report;
            report = 0;
            if(!backup) { _fun115301_ip = 285; continue _fun115301 }
 282:
            report = output;
 285:
            report = romeo.bind(kilo)(report);
            _closure2_slot8 = report;
            vacuum = _closure1_slot0;
            update = _closure1_slot2;
            romeo = 11;
            romeo = update[romeo];
            result = vacuum.bind(tango)(romeo);
            output = result.useStateFromStores;
            romeo = _closure1_slot6;
            kilo = new Array(1);
            kilo[0] = romeo;
            romeo = function() {
                entity = _closure1_slot6;
                entity = entity.locale;
                return entity;
            };
            romeo = output.bind(result)(kilo, romeo);
            kilo = update[oscar];
            result = vacuum.bind(tango)(kilo);
            output = result.useAnimatedStyle;
            kilo = function() { // Original name: V
                entity = {};
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 10;
                mike = oscar[zulu];
                tango = undefined;
                yankee = report.bind(tango)(mike);
                offset = yankee.interpolate;
                options = _closure2_slot8;
                golf = options.get;
                verify = golf.bind(options)();
                options = [0, 1];
                golf = [0, 1];
                golf = offset.bind(yankee)(verify, options, golf);
                entity['opacity'] = golf;
                zulu = oscar[zulu];
                oscar = report.bind(tango)(zulu);
                report = oscar.interpolate;
                zulu = _closure2_slot8;
                mike = zulu.get;
                tango = mike.bind(zulu)();
                zulu = [0, 1];
                mike = [0, 28];
                mike = report.bind(oscar)(tango, zulu, mike);
                entity['width'] = mike;
                return entity;
            };
            echo = {};
            update = update[oscar];
            update = vacuum.bind(tango)(update);
            update = update.interpolate;
            echo['interpolate'] = update;
            echo['typingValue'] = report;
            update = 28;
            echo['ELLIPSIS_WIDTH'] = update;
            kilo['__closure'] = echo;
            echo = 14140918847743.0;
            kilo['__workletHash'] = echo;
            echo = _closure1_slot12;
            kilo['__initData'] = echo;
            echo = output.bind(result)(kilo);
            result = _closure1_slot4;
            output = result.useEffect;
            kilo = new Array(2);
            kilo[0] = backup;
            kilo[1] = report;
            report = function() {
                _fun115305: for(var _fun115305_ip = 0; ; ) switch(_fun115305_ip) {
 0:
                    tango = _closure2_slot8;
                    zulu = tango.set;
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 12;
                    report = report[entity];
                    entity = undefined;
                    verify = oscar.bind(entity)(report);
                    options = verify.withSpring;
                    report = _closure2_slot1;
                    golf = 0;
                    if(!report) { _fun115305_ip = 54; continue _fun115305 }
 51:
                    golf = 1;
 54:
                    output = _closure1_slot7;
                    report = function(argFoo) { // Original name: t
                        _fun115306: for(var _fun115306_ip = 0; ; ) switch(_fun115306_ip) {
 0:
                            entity = argFoo;
                            if(!entity) { _fun115306_ip = 57; continue _fun115306 }
 6:
                            mike = _closure1_slot0;
                            zulu = _closure1_slot2;
                            entity = 10;
                            entity = zulu[entity];
                            zulu = undefined;
                            report = mike.bind(zulu)(entity);
                            tango = report.runOnJS;
                            mike = _closure2_slot7;
                            mike = tango.bind(report)(mike);
                            entity = _closure2_slot1;
                            entity = mike.bind(zulu)(entity);
 57:
                            entity = undefined;
                            return entity;
                        }
                    };
                    offset = {};
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot2;
                    romeo = 10;
                    romeo = backup[romeo];
                    romeo = foxtrot.bind(entity)(romeo);
                    romeo = romeo.runOnJS;
                    offset['runOnJS'] = romeo;
                    romeo = _closure2_slot7;
                    offset['setRenderComponents'] = romeo;
                    yankee = _closure2_slot1;
                    offset['isTyping'] = yankee;
                    report['__closure'] = offset;
                    offset = 2498652829757.0;
                    report['__workletHash'] = offset;
                    mike = _closure1_slot13;
                    report['__initData'] = mike;
                    sizing = 'respect-motion-settings';
                    echo = verify;
                    result = golf;
                    kilo = report;
                    mike = echo[options](result, output, sizing, kilo, backup);
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            report = output.bind(result)(report, kilo);
            report = zulu.slice;
            offset = report.bind(zulu)(source, offset);
            _closure2_slot9 = offset;
            update = null;
            if(!(update == foxtrot)) { _fun115301_ip = 502; continue _fun115301 }
 497:
            foxtrot = zulu.length;
 502:
            zulu = offset.length;
            target = foxtrot - zulu;
            _closure2_slot10 = target;
            report = offset.map;
            zulu = function(argFoo, argBar) {
                _fun115307: for(var _fun115307_ip = 0; ; ) switch(_fun115307_ip) {
 0:
                    entity = argFoo;
                    golf = argBar;
                    mike = _closure2_slot9;
                    zulu = mike.length;
                    mike = 1;
                    oscar = zulu - mike;
                    report = _closure1_slot8;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 9;
                    mike = tango[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    mike['user'] = entity;
                    options = _closure2_slot0;
                    mike['guildId'] = options;
                    options = _closure2_slot3;
                    mike['size'] = options;
                    offset = report.bind(tango)(zulu, mike);
                    zulu = _closure1_slot5;
                    mike = {};
                    options = 0;
                    verify = undefined;
                    if(!(options !== golf)) { _fun115307_ip = 106; continue _fun115307 }
 96:
                    yankee = _closure2_slot6;
                    verify = yankee.shiftedAvatar;
 106:
                    mike['style'] = verify;
                    if(!(golf === oscar)) { _fun115307_ip = 141; continue _fun115307 }
 114:
                    golf = _closure2_slot2;
                    oscar = offset;
                    if(golf) { _fun115307_ip = 309; continue _fun115307 }
 127:
                    golf = _closure2_slot10;
                    oscar = offset;
                    if(!(golf > options)) { _fun115307_ip = 309; continue _fun115307 }
 141:
                    verify = _closure1_slot8;
                    options = _closure1_slot1;
                    sizing = _closure1_slot2;
                    yankee = 13;
                    golf = sizing[yankee];
                    options = options.bind(tango)(golf);
                    golf = {};
                    romeo = {};
                    kilo = _closure1_slot0;
                    yankee = sizing[yankee];
                    yankee = kilo.bind(tango)(yankee);
                    yankee = yankee.CutoutShape;
                    yankee = yankee.Circle;
                    romeo['shape'] = yankee;
                    yankee = 8;
                    foxtrot = sizing[yankee];
                    foxtrot = kilo.bind(tango)(foxtrot);
                    output = foxtrot.AVATAR_SIZE_MAP;
                    foxtrot = _closure2_slot3;
                    result = output[foxtrot];
                    output = _closure2_slot5;
                    output = result - output;
                    backup = _closure2_slot4;
                    output = output - backup;
                    romeo['x'] = output;
                    output = -backup;
                    romeo['y'] = output;
                    yankee = sizing[yankee];
                    yankee = kilo.bind(tango)(yankee);
                    yankee = yankee.AVATAR_SIZE_MAP;
                    foxtrot = yankee[foxtrot];
                    yankee = 2;
                    yankee = yankee * backup;
                    yankee = foxtrot + yankee;
                    romeo['size'] = yankee;
                    yankee = new Array(1);
                    yankee[0] = romeo;
                    golf['cutouts'] = yankee;
                    golf['children'] = offset;
                    oscar = verify.bind(tango)(options, golf);
 309:
                    mike['children'] = oscar;
                    entity = entity.id;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            offset = report.bind(offset)(zulu);
            _closure2_slot11 = offset;
            output = _closure1_slot0;
            result = _closure1_slot2;
            zulu = result[oscar];
            report = output.bind(tango)(zulu);
            zulu = report.useAnimatedStyle;
            mike = function() { // Original name: H
                _fun115308: for(var _fun115308_ip = 0; ; ) switch(_fun115308_ip) {
 0:
                    mike = _closure2_slot11;
                    tango = mike.length;
                    report = _closure2_slot2;
                    zulu = 0;
                    mike = 0;
                    if(report) { _fun115308_ip = 39; continue _fun115308 }
 23:
                    report = _closure2_slot10;
                    report = report > zulu;
                    mike = 0;
                    if(!report) { _fun115308_ip = 39; continue _fun115308 }
 36:
                    mike = 1;
 39:
                    tango = tango + mike;
                    golf = 0;
                    if(!(tango > zulu)) { _fun115308_ip = 111; continue _fun115308 }
 49:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 8;
                    report = report[mike];
                    mike = undefined;
                    mike = oscar.bind(mike)(report);
                    report = mike.AVATAR_SIZE_MAP;
                    mike = _closure2_slot3;
                    mike = report[mike];
                    mike = tango * mike;
                    report = _closure2_slot5;
                    entity = 1;
                    entity = tango - entity;
                    entity = entity * report;
                    golf = mike - entity;
 111:
                    entity = {};
                    options = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 12;
                    oscar = oscar[report];
                    report = undefined;
                    oscar = options.bind(report)(oscar);
                    report = oscar.withSpring;
                    mike = _closure1_slot10;
                    mike = report.bind(oscar)(golf, mike);
                    entity['width'] = mike;
                    mike = 4;
                    if(!(zulu === tango)) { _fun115308_ip = 166; continue _fun115308 }
 164:
                    mike = 0;
 166:
                    entity['marginRight'] = mike;
                    return entity;
                }
            };
            kilo = {};
            kilo['isStage'] = entity;
            kilo['extraUsers'] = target;
            kilo['avatars'] = offset;
            vacuum = 8;
            vacuum = result[vacuum];
            vacuum = output.bind(tango)(vacuum);
            vacuum = vacuum.AVATAR_SIZE_MAP;
            kilo['AVATAR_SIZE_MAP'] = vacuum;
            kilo['avatarSize'] = control;
            kilo['avatarOverlap'] = sizing;
            sizing = 12;
            sizing = result[sizing];
            sizing = output.bind(tango)(sizing);
            sizing = sizing.withSpring;
            kilo['withSpring'] = sizing;
            sizing = _closure1_slot10;
            kilo['SPRING_CONFIG'] = sizing;
            mike['__closure'] = kilo;
            kilo = 5027466437777.0;
            mike['__workletHash'] = kilo;
            kilo = _closure1_slot14;
            mike['__initData'] = kilo;
            kilo = zulu.bind(report)(mike);
            zulu = _closure1_slot9;
            mike = _closure1_slot5;
            report = {};
            if(entity) { _fun115301_ip = 1086; continue _fun115301 }
 699:
            sizing = yankee.avatarStack;
            entity = new Array(2);
            entity[0] = sizing;
            entity[1] = verify;
            report['style'] = entity;
            output = _closure1_slot9;
            sizing = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[oscar];
            entity = sizing.bind(tango)(entity);
            sizing = entity.View;
            entity = {};
            control = yankee.avatarBubbles;
            result = new Array(2);
            result[0] = control;
            result[1] = kilo;
            entity['style'] = result;
            vacuum = _closure1_slot8;
            control = _closure1_slot5;
            result = {};
            sequence = yankee.avatars;
            result['style'] = sequence;
            result['children'] = offset;
            control = vacuum.bind(tango)(control, result);
            result = new Array(2);
            result[0] = control;
            update = null;
            if(!(target > source)) { _fun115301_ip = 939; continue _fun115301 }
 818:
            vacuum = _closure1_slot8;
            control = _closure1_slot5;
            source = {};
            sequence = yankee.userCounter;
            source['style'] = sequence;
            record = _closure1_slot9;
            papa = _closure1_slot0;
            status = _closure1_slot2;
            sequence = 14;
            sequence = status[sequence];
            sequence = papa.bind(tango)(sequence);
            config = sequence.Text;
            sequence = {'color': 'text-normal', 'variant': 'text-xxs/semibold', 'allowFontScaling': false};
            context = 15;
            context = status[context];
            papa = papa.bind(tango)(context);
            context = papa.humanizeValue;
            papa = context.bind(papa)(target, romeo);
            context = ['+'];
            context[1] = papa;
            sequence['children'] = context;
            sequence = record.bind(tango)(config, sequence);
            source['children'] = sequence;
            update = vacuum.bind(tango)(control, source);
 939:
            result[1] = update;
            entity['children'] = result;
            sizing = output.bind(tango)(sizing, entity);
            entity = new Array(2);
            entity[0] = sizing;
            if(options) { _fun115301_ip = 967; continue _fun115301 }
 964:
            options = backup;
 967:
            if(!options) { _fun115301_ip = 1070; continue _fun115301 }
 970:
            output = _closure1_slot8;
            sizing = _closure1_slot1;
            update = _closure1_slot2;
            backup = update[oscar];
            backup = sizing.bind(tango)(backup);
            sizing = backup.View;
            backup = {};
            source = yankee.ellipsisWrapper;
            result = new Array(2);
            result[0] = source;
            result[1] = echo;
            backup['style'] = result;
            echo = _closure1_slot0;
            result = 16;
            result = update[result];
            result = echo.bind(tango)(result);
            echo = result.TypingIndicator;
            result = {};
            update = yankee.ellipsisBorder;
            result['style'] = update;
            result = output.bind(tango)(echo, result);
            backup['children'] = result;
            options = output.bind(tango)(sizing, backup);
 1070:
            entity[1] = options;
            report['children'] = entity;
            entity = report;
            _fun115301_ip = 1256; continue _fun115301;
 1086:
            backup = yankee.stageAvatarStack;
            options = new Array(2);
            options[0] = backup;
            options[1] = verify;
            report['style'] = options;
            verify = _closure1_slot8;
            options = _closure1_slot1;
            backup = _closure1_slot2;
            oscar = backup[oscar];
            oscar = options.bind(tango)(oscar);
            options = oscar.View;
            oscar = {};
            sizing = yankee.avatars;
            yankee = new Array(2);
            yankee[0] = sizing;
            yankee[1] = kilo;
            oscar['style'] = yankee;
            oscar['children'] = offset;
            options = verify.bind(tango)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            yankee = _closure1_slot0;
            golf = 14;
            golf = backup[golf];
            golf = yankee.bind(tango)(golf);
            options = golf.Text;
            golf = {'color': 'text-normal', 'variant': 'text-xs/semibold'};
            offset = 15;
            offset = backup[offset];
            yankee = yankee.bind(tango)(offset);
            offset = yankee.humanizeValue;
            offset = offset.bind(yankee)(foxtrot, romeo);
            golf['children'] = offset;
            golf = verify.bind(tango)(options, golf);
            oscar[1] = golf;
            report['children'] = oscar;
            entity = report;
 1256:
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['HappeningNowAvatarStack'] = mike;
    return entity;
})();