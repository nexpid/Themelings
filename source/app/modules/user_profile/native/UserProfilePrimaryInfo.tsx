// app/modules/user_profile/native/UserProfilePrimaryInfo.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    sizing = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = sizing;
    var _closure1_slot2 = verify;
    report = function(argFoo) { // Original name: DisplayName
        _fun77425: for(var _fun77425_ip = 0; ; ) switch(_fun77425_ip) {
 0:
            mike = argFoo;
            zulu = mike.user;
            var _closure2_slot0 = zulu;
            yankee = mike.name;
            var _closure2_slot1 = yankee;
            tango = mike.userProfileType;
            romeo = mike.onPress;
            offset = mike.accessibilityHint;
            verify = mike.showChevron;
            report = undefined;
            if(!(verify === report)) { _fun77425_ip = 54; continue _fun77425 }
 52:
            verify = false;
 54:
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            zulu = _closure1_slot15;
            options = zulu.bind(report)();
            _closure2_slot2 = options;
            zulu = _closure1_slot18;
            zulu = zulu.bind(report)(tango);
            zulu = zulu.headingVariant;
            _closure2_slot3 = zulu;
            oscar = function() { // Original name: renderDisplayName
                tango = _closure1_slot12;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 10;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.Text;
                entity = {'variant': null, 'color': 'header-primary', 'lineClamp': 2};
                oscar = _closure2_slot3;
                entity['variant'] = oscar;
                report = _closure2_slot1;
                entity['children'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            golf = function() { // Original name: renderBotTag
                _fun77427: for(var _fun77427_ip = 0; ; ) switch(_fun77427_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = mike.isSystemUser;
                    entity = entity.bind(mike)();
                    if(entity) { _fun77427_ip = 249; continue _fun77427 }
 23:
                    mike = _closure2_slot0;
                    entity = mike.isClyde;
                    entity = entity.bind(mike)();
                    if(entity) { _fun77427_ip = 152; continue _fun77427 }
 40:
                    entity = _closure2_slot0;
                    mike = entity.bot;
                    entity = null;
                    if(!mike) { _fun77427_ip = 150; continue _fun77427 }
 55:
                    report = _closure1_slot12;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 11;
                    mike = verify[golf];
                    tango = undefined;
                    zulu = options.bind(tango)(mike);
                    mike = {};
                    offset = _closure2_slot2;
                    offset = offset.botTag;
                    mike['style'] = offset;
                    golf = verify[golf];
                    golf = options.bind(tango)(golf);
                    golf = golf.Types;
                    golf = golf.BOT;
                    mike['type'] = golf;
                    options = _closure2_slot0;
                    golf = options.isVerifiedBot;
                    golf = golf.bind(options)();
                    mike['verified'] = golf;
                    entity = report.bind(tango)(zulu, mike);
 150:
                    _fun77427_ip = 247; continue _fun77427;
 152:
                    report = _closure1_slot12;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 11;
                    mike = verify[golf];
                    tango = undefined;
                    zulu = options.bind(tango)(mike);
                    mike = {};
                    offset = _closure2_slot2;
                    offset = offset.botTag;
                    mike['style'] = offset;
                    golf = verify[golf];
                    golf = options.bind(tango)(golf);
                    golf = golf.Types;
                    golf = golf.AI;
                    mike['type'] = golf;
                    options = _closure2_slot0;
                    golf = options.isVerifiedBot;
                    golf = golf.bind(options)();
                    mike['verified'] = golf;
                    entity = report.bind(tango)(zulu, mike);
 247:
                    _fun77427_ip = 344; continue _fun77427;
 249:
                    report = _closure1_slot12;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 11;
                    mike = verify[golf];
                    tango = undefined;
                    zulu = options.bind(tango)(mike);
                    mike = {};
                    offset = _closure2_slot2;
                    offset = offset.botTag;
                    mike['style'] = offset;
                    golf = verify[golf];
                    golf = options.bind(tango)(golf);
                    golf = golf.Types;
                    golf = golf.SYSTEM_DM;
                    mike['type'] = golf;
                    golf = _closure2_slot0;
                    oscar = golf.isVerifiedBot;
                    oscar = oscar.bind(golf)();
                    mike['verified'] = oscar;
                    entity = report.bind(tango)(zulu, mike);
 344:
                    return entity;
                }
            };
            entity = null;
            if(!(entity != romeo)) { _fun77425_ip = 270; continue _fun77425 }
 119:
            tango = _closure1_slot13;
            zulu = _closure1_slot0;
            foxtrot = _closure1_slot2;
            entity = 12;
            entity = foxtrot[entity];
            entity = zulu.bind(report)(entity);
            zulu = entity.PressableOpacity;
            entity = {};
            entity['onPress'] = romeo;
            romeo = 'button';
            entity['accessibilityRole'] = romeo;
            entity['accessibilityLabel'] = yankee;
            entity['accessibilityHint'] = offset;
            options = options.displayName;
            entity['style'] = options;
            offset = oscar.bind(report)();
            options = new Array(3);
            options[0] = offset;
            offset = golf.bind(report)();
            options[1] = offset;
            if(!verify) { _fun77425_ip = 254; continue _fun77425 }
 204:
            romeo = _closure1_slot12;
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            offset = 13;
            offset = foxtrot[offset];
            offset = yankee.bind(report)(offset);
            yankee = offset.ChevronSmallDownIcon;
            offset = {'size': 'sm', 'color': 'icon-muted'};
            verify = romeo.bind(report)(yankee, offset);
 254:
            options[2] = verify;
            entity['children'] = options;
            entity = tango.bind(report)(zulu, entity);
            _fun77425_ip = 310; continue _fun77425;
 270:
            tango = _closure1_slot13;
            zulu = _closure1_slot5;
            mike = {};
            options = oscar.bind(report)();
            oscar = new Array(2);
            oscar[0] = options;
            golf = golf.bind(report)();
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 310:
            return entity;
        }
    };
    var _closure1_slot19 = report;
    tango = function(argFoo) { // Original name: UserTagAndPronouns
        _fun77428: for(var _fun77428_ip = 0; ; ) switch(_fun77428_ip) {
 0:
            mike = argFoo;
            echo = mike.userTag;
            var _closure2_slot0 = echo;
            output = mike.pronouns;
            var _closure2_slot1 = output;
            zulu = mike.userProfileType;
            foxtrot = mike.onPressUserTag;
            backup = mike.userTagAccessibilityHint;
            result = mike.onPressPronouns;
            sizing = mike.pronounsAccessibilityHint;
            tango = undefined;
            var _closure2_slot2 = tango;
            mike = _closure1_slot15;
            report = mike.bind(tango)();
            yankee = null;
            oscar = yankee != output;
            if(!oscar) { _fun77428_ip = 92; continue _fun77428 }
 81:
            golf = output.length;
            mike = 0;
            oscar = golf > mike;
 92:
            mike = _closure1_slot18;
            mike = mike.bind(tango)(zulu);
            update = mike.textVariant;
            _closure2_slot2 = update;
            offset = function() { // Original name: renderUserTag
                tango = _closure1_slot12;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 10;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.Text;
                entity = {'variant': null, 'color': 'header-primary', 'lineClamp': 2};
                oscar = _closure2_slot2;
                entity['variant'] = oscar;
                report = _closure2_slot0;
                entity['children'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            kilo = function() { // Original name: renderPronouns
                tango = _closure1_slot12;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 10;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.Text;
                entity = {'variant': null, 'color': 'header-primary', 'lineClamp': 1};
                oscar = _closure2_slot2;
                entity['variant'] = oscar;
                report = _closure2_slot1;
                entity['children'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            zulu = _closure1_slot13;
            mike = _closure1_slot5;
            entity = {};
            report = report.detailsText;
            entity['style'] = report;
            if(!(yankee == foxtrot)) { _fun77428_ip = 155; continue _fun77428 }
 149:
            golf = offset.bind(tango)();
            _fun77428_ip = 222; continue _fun77428;
 155:
            verify = _closure1_slot12;
            options = _closure1_slot0;
            source = _closure1_slot2;
            report = 12;
            report = source[report];
            report = options.bind(tango)(report);
            options = report.PressableOpacity;
            report = {};
            report['onPress'] = foxtrot;
            source = 'button';
            report['accessibilityRole'] = source;
            report['accessibilityLabel'] = echo;
            report['accessibilityHint'] = backup;
            offset = offset.bind(tango)();
            report['children'] = offset;
            golf = verify.bind(tango)(options, report);
 222:
            report = new Array(2);
            report[0] = golf;
            if(!oscar) { _fun77428_ip = 404; continue _fun77428 }
 236:
            verify = _closure1_slot13;
            options = _closure1_slot14;
            golf = {};
            echo = _closure1_slot12;
            backup = _closure1_slot0;
            source = _closure1_slot2;
            offset = 10;
            offset = source[offset];
            offset = backup.bind(tango)(offset);
            backup = offset.Text;
            offset = {};
            offset['variant'] = update;
            update = 'header-primary';
            offset['color'] = update;
            update = _closure1_slot8;
            offset['children'] = update;
            backup = echo.bind(tango)(backup, offset);
            offset = new Array(2);
            offset[0] = backup;
            if(!(yankee == foxtrot)) { _fun77428_ip = 323; continue _fun77428 }
 317:
            yankee = kilo.bind(tango)();
            _fun77428_ip = 390; continue _fun77428;
 323:
            backup = _closure1_slot12;
            foxtrot = _closure1_slot0;
            echo = _closure1_slot2;
            romeo = 12;
            romeo = echo[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            foxtrot = romeo.PressableOpacity;
            romeo = {};
            romeo['onPress'] = result;
            result = 'button';
            romeo['accessibilityRole'] = result;
            romeo['accessibilityLabel'] = output;
            romeo['accessibilityHint'] = sizing;
            kilo = kilo.bind(tango)();
            romeo['children'] = kilo;
            yankee = backup.bind(tango)(foxtrot, romeo);
 390:
            offset[1] = yankee;
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 404:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot20 = tango;
    entity = function(argFoo) { // Original name: ProfileBadge
        _fun77431: for(var _fun77431_ip = 0; ; ) switch(_fun77431_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.source;
            var _closure2_slot0 = foxtrot;
            oscar = entity.id;
            var _closure2_slot1 = oscar;
            sizing = entity.label;
            var _closure2_slot2 = sizing;
            golf = entity.badgeSize;
            verify = entity.userId;
            report = entity.userProfileType;
            entity = entity.showToastOnPress;
            tango = undefined;
            if(!(entity === tango)) { _fun77431_ip = 63; continue _fun77431 }
 61:
            entity = true;
 63:
            var _closure2_slot3 = tango;
            mike = _closure1_slot15;
            backup = mike.bind(tango)();
            zulu = null;
            mike = zulu != golf;
            kilo = undefined;
            if(!mike) { _fun77431_ip = 102; continue _fun77431 }
 89:
            mike = {};
            mike['width'] = golf;
            mike['height'] = golf;
            kilo = mike;
 102:
            golf = _closure1_slot3;
            mike = golf.useRef;
            yankee = mike.bind(golf)(zulu);
            golf = _closure1_slot0;
            output = _closure1_slot2;
            mike = 14;
            mike = output[mike];
            options = golf.bind(tango)(mike);
            mike = options.useTieredTenureBadgeClickHandler;
            mike = mike.bind(options)(oscar, verify, report);
            _closure2_slot3 = mike;
            mike = 15;
            options = output[mike];
            options = golf.bind(tango)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            mike = output[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.t;
            golf = mike.A0LN9v;
            mike = {};
            mike['badgeLabel'] = sizing;
            sizing = options.bind(verify)(golf, mike);
            mike = _closure1_slot9;
            mike = mike.YOU_SCREEN;
            mike = report === mike;
            if(!mike) { _fun77431_ip = 238; continue _fun77431 }
 227:
            golf = 'string';
            report = typeof oscar;
            mike = golf === report;
 238:
            golf = null;
            if(!mike) { _fun77431_ip = 285; continue _fun77431 }
 243:
            report = _closure1_slot12;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 16;
            mike = options[mike];
            zulu = zulu.bind(tango)(mike);
            mike = {};
            mike['targetRef'] = yankee;
            mike['badgeId'] = oscar;
            golf = report.bind(tango)(zulu, mike);
 285:
            zulu = _closure1_slot13;
            mike = _closure1_slot14;
            report = {};
            verify = _closure1_slot12;
            if(entity) { _fun77431_ip = 387; continue _fun77431 }
 302:
            oscar = _closure1_slot4;
            entity = {};
            output = backup.badge;
            options = new Array(2);
            options[0] = output;
            options[1] = kilo;
            entity['style'] = options;
            entity['source'] = foxtrot;
            options = true;
            entity['accessible'] = options;
            options = 'image';
            entity['accessibilityRole'] = options;
            entity['accessibilityLabel'] = sizing;
            entity['ref'] = yankee;
            oscar = verify.bind(tango)(oscar, entity);
            entity = new Array(2);
            entity[0] = oscar;
            entity[1] = golf;
            report['children'] = entity;
            entity = report;
            _fun77431_ip = 513; continue _fun77431;
 387:
            options = _closure1_slot0;
            output = _closure1_slot2;
            oscar = 12;
            oscar = output[oscar];
            oscar = options.bind(tango)(oscar);
            options = oscar.PressableOpacity;
            oscar = {};
            output = 'image';
            oscar['accessibilityRole'] = output;
            oscar['accessibilityLabel'] = sizing;
            romeo = function() { // Original name: onPress
                _fun77432: for(var _fun77432_ip = 0; ; ) switch(_fun77432_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = null;
                    if(!(mike != zulu)) { _fun77432_ip = 28; continue _fun77432 }
 13:
                    zulu = _closure2_slot3;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    _fun77432_ip = 241; continue _fun77432;
 28:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 17;
                    mike = tango[mike];
                    verify = undefined;
                    oscar = zulu.bind(verify)(mike);
                    zulu = oscar.open;
                    mike = {};
                    golf = _closure2_slot2;
                    options = global;
                    options = options.HermesInternal;
                    offset = options.concat;
                    options = 'PROFILE_BADGE-';
                    options = offset.bind(options)(golf);
                    mike['key'] = options;
                    mike['content'] = golf;
                    golf = _closure2_slot0;
                    mike['icon'] = golf;
                    mike = zulu.bind(oscar)(mike);
                    mike = _closure2_slot1;
                    zulu = _closure1_slot0;
                    entity = 18;
                    entity = tango[entity];
                    entity = zulu.bind(verify)(entity);
                    entity = entity.QUEST_COMPLETED_BADGE;
                    if(!(mike === entity)) { _fun77432_ip = 241; continue _fun77432 }
 140:
                    mike = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 19;
                    entity = offset[entity];
                    tango = mike.bind(verify)(entity);
                    zulu = tango.track;
                    entity = _closure1_slot11;
                    mike = entity.QUEST_CONTENT_VIEWED;
                    entity = {};
                    options = _closure1_slot0;
                    report = 20;
                    report = offset[report];
                    golf = options.bind(verify)(report);
                    oscar = golf.getContentProperties;
                    report = 21;
                    report = offset[report];
                    report = options.bind(verify)(report);
                    report = report.QuestContent;
                    report = report.QUEST_BADGE;
                    yankee = oscar.bind(golf)(report);
                    romeo = entity;
                    report = copyDataProperties(romeo, yankee);
                    entity = zulu.bind(tango)(mike, entity);
 241:
                    entity = undefined;
                    return entity;
                }
            };
            oscar['onPress'] = romeo;
            oscar['ref'] = yankee;
            romeo = _closure1_slot12;
            yankee = _closure1_slot4;
            offset = {};
            sizing = backup.badge;
            backup = new Array(2);
            backup[0] = sizing;
            backup[1] = kilo;
            offset['style'] = backup;
            offset['source'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            oscar['children'] = offset;
            options = verify.bind(tango)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            oscar[1] = golf;
            report['children'] = oscar;
            entity = report;
 513:
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    mike = function(argFoo) { // Original name: ProfileBadgeRows
        _fun77433: for(var _fun77433_ip = 0; ; ) switch(_fun77433_ip) {
 0:
            mike = argFoo;
            foxtrot = mike.userId;
            var _closure2_slot0 = foxtrot;
            zulu = mike.guildId;
            entity = mike.isTryItOut;
            tango = mike.style;
            var _closure2_slot1 = tango;
            verify = mike.userProfileType;
            var _closure2_slot2 = verify;
            romeo = mike.showToastOnPress;
            var _closure2_slot3 = romeo;
            tango = undefined;
            var _closure2_slot8 = tango;
            mike = _closure1_slot15;
            options = mike.bind(tango)();
            var _closure2_slot4 = options;
            golf = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 22;
            mike = yankee[mike];
            mike = golf.bind(tango)(mike);
            zulu = mike.bind(tango)(foxtrot, zulu);
            mike = _closure1_slot18;
            mike = mike.bind(tango)(verify);
            verify = mike.badgeSize;
            var _closure2_slot5 = verify;
            offset = mike.badgeRowHorizontalPadding;
            var _closure2_slot6 = offset;
            mike = 18;
            mike = yankee[mike];
            mike = golf.bind(tango)(mike);
            golf = mike.bind(tango)(zulu);
            zulu = golf.map;
            mike = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot12;
                tango = _closure1_slot21;
                zulu = {};
                oscar = entity.id;
                zulu['id'] = oscar;
                golf = _closure2_slot0;
                zulu['userId'] = golf;
                golf = {};
                verify = _closure1_slot7;
                options = entity.icon;
                mike = undefined;
                options = verify.bind(mike)(options);
                golf['uri'] = options;
                zulu['source'] = golf;
                golf = entity.description;
                zulu['label'] = golf;
                golf = _closure2_slot5;
                zulu['badgeSize'] = golf;
                golf = _closure2_slot2;
                zulu['userProfileType'] = golf;
                oscar = _closure2_slot3;
                zulu['showToastOnPress'] = oscar;
                entity = entity.id;
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            };
            yankee = zulu.bind(golf)(mike);
            var _closure2_slot7 = yankee;
            if(!entity) { _fun77433_ip = 194; continue _fun77433 }
 171:
            zulu = golf.find;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = 'premium';
                entity = entity === mike;
                return entity;
            };
            zulu = zulu.bind(golf)(mike);
            mike = null;
            entity = mike == zulu;
 194:
            if(!entity) { _fun77433_ip = 363; continue _fun77433 }
 200:
            mike = yankee.push;
            golf = _closure1_slot12;
            zulu = _closure1_slot21;
            entity = {};
            kilo = _closure1_slot1;
            output = _closure1_slot2;
            backup = 23;
            backup = output[backup];
            backup = kilo.bind(tango)(backup);
            entity['source'] = backup;
            backup = 'premium';
            entity['id'] = backup;
            entity['userId'] = foxtrot;
            backup = _closure1_slot0;
            foxtrot = 15;
            kilo = output[foxtrot];
            kilo = backup.bind(tango)(kilo);
            sizing = kilo.intl;
            kilo = sizing.formatToPlainString;
            foxtrot = output[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            backup = foxtrot.8zbGNT;
            foxtrot = {};
            output = global;
            output = output.Date;
            result = output.prototype;
            result = Object.create(result, {constructor: {value: output}});
            source = result;
            output = new source[output](update);
            output = output instanceof Object ? output : result;
            foxtrot['date'] = output;
            foxtrot = kilo.bind(sizing)(backup, foxtrot);
            entity['label'] = foxtrot;
            entity['badgeSize'] = verify;
            entity['showToastOnPress'] = romeo;
            entity = golf.bind(tango)(zulu, entity);
            entity = mike.bind(yankee)(entity);
 363:
            entity = _closure1_slot6;
            entity = entity.bind(tango)();
            entity = entity.width;
            _closure2_slot8 = entity;
            golf = _closure1_slot3;
            zulu = golf.useMemo;
            mike = new Array(4);
            mike[0] = yankee;
            mike[1] = offset;
            mike[2] = verify;
            mike[3] = entity;
            entity = function() {
                oscar = global;
                tango = oscar.Math;
                zulu = tango.floor;
                options = _closure2_slot8;
                mike = _closure1_slot10;
                golf = 2;
                mike = golf * mike;
                options = options - mike;
                mike = _closure2_slot6;
                mike = golf * mike;
                verify = _closure2_slot5;
                golf = 8;
                golf = verify + golf;
                mike = options - mike;
                mike = mike / golf;
                options = zulu.bind(tango)(mike);
                var _closure3_slot0 = options;
                tango = oscar.Array;
                zulu = tango.from;
                mike = {};
                golf = oscar.Math;
                oscar = golf.ceil;
                report = _closure2_slot7;
                report = report.length;
                report = report / options;
                report = oscar.bind(golf)(report);
                mike['length'] = report;
                entity = function(argFoo, argBar) {
                    oscar = argBar;
                    tango = _closure2_slot7;
                    zulu = tango.slice;
                    report = _closure3_slot0;
                    mike = oscar * report;
                    entity = 1;
                    entity = oscar + entity;
                    entity = entity * report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf = zulu.bind(golf)(entity, mike);
            zulu = _closure1_slot12;
            mike = _closure1_slot5;
            entity = {};
            verify = options.badges;
            options = new Array(1);
            options[0] = verify;
            entity['style'] = options;
            options = 'list';
            entity['accessibilityRole'] = options;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 15;
            options = yankee[oscar];
            options = offset.bind(tango)(options);
            verify = options.intl;
            options = verify.string;
            oscar = yankee[oscar];
            oscar = offset.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.VWV0y8;
            oscar = options.bind(verify)(oscar);
            entity['accessibilityLabel'] = oscar;
            oscar = golf.map;
            report = function(argFoo, argBar) {
                report = _closure1_slot12;
                tango = _closure1_slot5;
                zulu = {};
                entity = _closure2_slot4;
                oscar = entity.badgeRow;
                entity = new Array(3);
                entity[0] = oscar;
                oscar = {};
                golf = _closure2_slot6;
                oscar['paddingHorizontal'] = golf;
                entity[1] = oscar;
                mike = _closure2_slot1;
                entity[2] = mike;
                zulu['style'] = entity;
                entity = argFoo;
                zulu['children'] = entity;
                mike = undefined;
                entity = argBar;
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            };
            report = oscar.bind(golf)(report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot22 = mike;
    entity = function(argFoo) { // Original name: ClanTag
        _fun77439: for(var _fun77439_ip = 0; ; ) switch(_fun77439_ip) {
 0:
            entity = argFoo;
            kilo = entity.user;
            golf = entity.userProfileType;
            offset = entity.style;
            yankee = entity.showToastOnPress;
            report = undefined;
            if(!(yankee === report)) { _fun77439_ip = 33; continue _fun77439 }
 31:
            yankee = false;
 33:
            entity = _closure1_slot15;
            options = entity.bind(report)();
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 24;
            entity = tango[entity];
            oscar = zulu.bind(report)(entity);
            zulu = oscar.getUserPrimaryGuild;
            tango = null;
            verify = tango == kilo;
            entity = undefined;
            if(verify) { _fun77439_ip = 87; continue _fun77439 }
 81:
            entity = kilo.primaryGuild;
 87:
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.tag;
            zulu = zulu.guildId;
            oscar = _closure1_slot18;
            oscar = oscar.bind(report)(golf);
            backup = oscar.badgeSize;
            golf = oscar.clanTagBadgeSize;
            romeo = oscar.clanTagHorizontalPadding;
            oscar = oscar.clanTagTextVariant;
            foxtrot = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 25;
            verify = sizing[verify];
            foxtrot = foxtrot.bind(report)(verify);
            verify = foxtrot.isAndroid;
            verify = verify.bind(foxtrot)();
            foxtrot = 4;
            sizing = foxtrot;
            if(!verify) { _fun77439_ip = 176; continue _fun77439 }
 173:
            sizing = 2;
 176:
            output = _closure1_slot0;
            result = _closure1_slot2;
            verify = 10;
            verify = result[verify];
            verify = output.bind(report)(verify);
            verify = verify.TextStyleSheet;
            verify = verify[oscar];
            verify = verify.fontSize;
            verify = verify + sizing;
            sizing = tango == entity;
            entity = null;
            if(sizing) { _fun77439_ip = 350; continue _fun77439 }
 228:
            zulu = tango == zulu;
            entity = null;
            if(zulu) { _fun77439_ip = 350; continue _fun77439 }
 237:
            tango = _closure1_slot12;
            zulu = _closure1_slot1;
            sizing = _closure1_slot2;
            mike = 26;
            mike = sizing[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            kilo = kilo.id;
            mike['userId'] = kilo;
            yankee = !yankee;
            mike['disabledTooltip'] = yankee;
            yankee = options.clanTag;
            options = new Array(3);
            options[0] = yankee;
            yankee = {};
            foxtrot = backup + foxtrot;
            yankee['minHeight'] = foxtrot;
            yankee['paddingHorizontal'] = romeo;
            options[1] = yankee;
            options[2] = offset;
            mike['containerStyles'] = options;
            options = {};
            options['lineHeight'] = verify;
            mike['textStyle'] = options;
            mike['badgeSize'] = golf;
            mike['textVariant'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 350:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, golf);
    entity = 0;
    offset = verify[entity];
    golf = argCorge;
    entity = undefined;
    golf = golf.bind(entity)(offset);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.Image;
    var _closure1_slot4 = offset;
    offset = golf.View;
    var _closure1_slot5 = offset;
    golf = golf.useWindowDimensions;
    var _closure1_slot6 = golf;
    golf = 2;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.getBadgeAsset;
    var _closure1_slot7 = golf;
    golf = 3;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.DIVIDER_DOT;
    var _closure1_slot8 = offset;
    offset = golf.UserProfileType;
    var _closure1_slot9 = offset;
    kilo = 4;
    golf = verify[kilo];
    golf = options.bind(entity)(golf);
    golf = golf.SIDE_PADDING;
    var _closure1_slot10 = golf;
    golf = 5;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.AnalyticEvents;
    var _closure1_slot11 = golf;
    golf = 6;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    romeo = golf.ClanTagBadgeSize;
    golf = 7;
    yankee = verify[golf];
    yankee = options.bind(entity)(yankee);
    yankee = yankee.jsx;
    var _closure1_slot12 = yankee;
    yankee = verify[golf];
    yankee = options.bind(entity)(yankee);
    yankee = yankee.jsxs;
    var _closure1_slot13 = yankee;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot14 = golf;
    golf = 8;
    golf = verify[golf];
    foxtrot = options.bind(entity)(golf);
    yankee = foxtrot.createStyles;
    golf = {};
    backup = {};
    output = 'column';
    backup['flexDirection'] = output;
    golf['container'] = backup;
    backup = {'flexDirection': 'row', 'alignItems': 'center', 'columnGap': 4};
    golf['displayName'] = backup;
    backup = {'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': 8};
    golf['details'] = backup;
    backup = {'flexDirection': 'row', 'flexWrap': 'wrap', 'alignContent': 'center', 'paddingVertical': 2};
    golf['detailsText'] = backup;
    backup = {};
    backup['marginLeft'] = kilo;
    golf['botTag'] = backup;
    backup = {'alignSelf': 'center', 'borderRadius': null, 'columnGap': 4};
    kilo = 9;
    output = verify[kilo];
    output = sizing.bind(entity)(output);
    output = output.radii;
    output = output.sm;
    backup['borderRadius'] = output;
    golf['clanTag'] = backup;
    backup = {};
    output = 'contain';
    backup['resizeMode'] = output;
    golf['badge'] = backup;
    backup = {'alignSelf': 'center', 'flexDirection': 'column', 'justifyContent': 'flex-start', 'rowGap': 8};
    golf['badges'] = backup;
    backup = {'borderRadius': null, 'paddingVertical': 2, 'justifyContent': 'flex-start', 'flexDirection': 'row', 'marginRight': 'auto', 'columnGap': 4};
    kilo = verify[kilo];
    kilo = sizing.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.sm;
    backup['borderRadius'] = kilo;
    golf['badgeRow'] = backup;
    golf = yankee.bind(foxtrot)(golf);
    var _closure1_slot15 = golf;
    golf = {'headingVariant': 'heading-xl/bold', 'textVariant': 'text-md/normal', 'badgeSize': 20, 'badgeRowHorizontalPadding': 7, 'clanTagBadgeSize': null, 'clanTagTextVariant': 'text-sm/medium', 'clanTagHorizontalPadding': 8};
    yankee = romeo.SIZE_16;
    golf['clanTagBadgeSize'] = yankee;
    var _closure1_slot16 = golf;
    golf = {};
    yankee = offset.PREVIEW;
    offset = {'headingVariant': 'heading-lg/bold', 'textVariant': 'text-sm/normal', 'badgeSize': 16, 'badgeRowHorizontalPadding': 6, 'clanTagBadgeSize': null, 'clanTagTextVariant': 'text-xs/medium', 'clanTagHorizontalPadding': 6};
    romeo = romeo.SIZE_12;
    offset['clanTagBadgeSize'] = romeo;
    golf[yankee] = offset;
    var _closure1_slot17 = golf;
    golf = function(argFoo) { // Original name: getStyleConfig
        _fun77440: for(var _fun77440_ip = 0; ; ) switch(_fun77440_ip) {
 0:
            zulu = argFoo;
            entity = undefined;
            if(!zulu) { _fun77440_ip = 19; continue _fun77440 }
 8:
            mike = _closure1_slot17;
            entity = mike[zulu];
 19:
            mike = null;
            if(!(mike == entity)) { _fun77440_ip = 32; continue _fun77440 }
 25:
            entity = _closure1_slot16;
 32:
            return entity;
        }
    };
    var _closure1_slot18 = golf;
    golf = 28;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/user_profile/native/UserProfilePrimaryInfo.tsx';
    golf = options.bind(verify)(golf);
    oscar = function(argFoo) { // Original name: UserProfilePrimaryInfo
        _fun77441: for(var _fun77441_ip = 0; ; ) switch(_fun77441_ip) {
 0:
            mike = argFoo;
            output = mike.user;
            sizing = mike.guildId;
            record = mike.displayName;
            control = mike.pronouns;
            oscar = mike.style;
            entity = mike.badgeContainerBackground;
            backup = mike.userProfileType;
            romeo = mike.onPressDisplayName;
            yankee = mike.displayNameAccessibilityHint;
            source = mike.onPressUserTag;
            update = mike.userTagAccessibilityHint;
            echo = mike.onPressPronouns;
            result = mike.pronounsAccessibilityHint;
            options = mike.showChevron;
            foxtrot = mike.showBadgeToastOnPress;
            mike = _closure1_slot15;
            tango = undefined;
            verify = mike.bind(tango)();
            kilo = {};
            kilo['backgroundColor'] = entity;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 27;
            report = zulu[entity];
            golf = mike.bind(tango)(report);
            report = golf.useName;
            config = report.bind(golf)(output);
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.useUserTag;
            vacuum = entity.bind(mike)(output);
            zulu = _closure1_slot13;
            mike = _closure1_slot5;
            entity = {};
            golf = verify.container;
            report = new Array(2);
            report[0] = golf;
            report[1] = oscar;
            entity['style'] = report;
            golf = _closure1_slot12;
            oscar = _closure1_slot19;
            report = {};
            report['user'] = output;
            context = '';
            sequence = config;
            if(!(context !== record)) { _fun77441_ip = 227; continue _fun77441 }
 215:
            context = null;
            if(!(context != record)) { _fun77441_ip = 224; continue _fun77441 }
 221:
            config = record;
 224:
            sequence = config;
 227:
            report['name'] = sequence;
            report['userProfileType'] = backup;
            report['onPress'] = romeo;
            report['accessibilityHint'] = yankee;
            report['showChevron'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot13;
            golf = _closure1_slot5;
            oscar = {};
            verify = verify.details;
            oscar['style'] = verify;
            romeo = _closure1_slot12;
            yankee = _closure1_slot20;
            verify = {};
            verify['userTag'] = vacuum;
            verify['pronouns'] = control;
            verify['userProfileType'] = backup;
            verify['onPressUserTag'] = source;
            verify['userTagAccessibilityHint'] = update;
            verify['onPressPronouns'] = echo;
            verify['pronounsAccessibilityHint'] = result;
            yankee = romeo.bind(tango)(yankee, verify);
            verify = new Array(3);
            verify[0] = yankee;
            result = _closure1_slot12;
            romeo = _closure1_slot23;
            yankee = {};
            yankee['user'] = output;
            yankee['userProfileType'] = backup;
            yankee['style'] = kilo;
            yankee['showToastOnPress'] = foxtrot;
            yankee = result.bind(tango)(romeo, yankee);
            verify[1] = yankee;
            romeo = _closure1_slot12;
            yankee = _closure1_slot22;
            offset = {};
            output = output.id;
            offset['userId'] = output;
            offset['guildId'] = sizing;
            offset['style'] = kilo;
            offset['userProfileType'] = backup;
            offset['showToastOnPress'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            verify[2] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = oscar;
    zulu['DisplayName'] = report;
    zulu['UserTagAndPronouns'] = tango;
    zulu['ProfileBadgeRows'] = mike;
    return entity;
})();