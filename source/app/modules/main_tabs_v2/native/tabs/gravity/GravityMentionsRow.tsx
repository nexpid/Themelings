// app/modules/main_tabs_v2/native/tabs/gravity/GravityMentionsRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot22;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot22;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: MoreUnreadsRow
        mike = argFoo;
        echo = mike.messages;
        var _closure2_slot0 = echo;
        mike = _closure1_slot20;
        tango = undefined;
        yankee = mike.bind(tango)();
        oscar = _closure1_slot4;
        report = oscar.useMemo;
        zulu = new Array(1);
        zulu[0] = echo;
        mike = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                options = new Array(0);
                entity = global;
                entity = entity.Set;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                kilo = mike;
                entity = new kilo[entity](backup);
                oscar = entity instanceof Object ? entity : mike;
                mike = _closure1_slot21;
                entity = _closure2_slot0;
                verify = undefined;
                report = mike.bind(verify)(entity);
                mike = report.bind(verify)();
                entity = mike.done;
                tango = null;
                if(entity) { _fun00008_ip = 205; continue _fun00007 }
 70:
                yankee = mike.value;
                offset = _closure1_slot6;
                golf = offset.getChannel;
                entity = yankee.getChannelId;
                entity = entity.bind(yankee)();
                romeo = golf.bind(offset)(entity);
                golf = tango != romeo;
                entity = null;
                if(!golf) { _fun00008_ip = 132; continue _fun00007 }
 108:
                yankee = _closure1_slot9;
                offset = yankee.getGuild;
                golf = romeo.getGuildId;
                golf = golf.bind(romeo)();
                entity = offset.bind(yankee)(golf);
 132:
                golf = tango == entity;
                if(golf) { _fun00008_ip = 154; continue _fun00007 }
 139:
                yankee = oscar.has;
                offset = entity.id;
                golf = yankee.bind(oscar)(offset);
 154:
                if(golf) { _fun00008_ip = 187; continue _fun00007 }
 157:
                offset = options.push;
                golf = entity.name;
                golf = offset.bind(options)(golf);
                golf = oscar.add;
                entity = entity.id;
                entity = golf.bind(oscar)(entity);
 187:
                golf = report.bind(verify)();
                entity = golf.done;
                mike = golf;
                if(!entity) { _fun00008_ip = 70; continue _fun00007 }
 205:
                mike = options.length;
                entity = '';
                golf = 0;
                if(!(golf !== mike)) { _fun00008_ip = 498; continue _fun00007 }
 223:
                mike = options.length;
                yankee = 1;
                if(!(yankee !== mike)) { _fun00008_ip = 426; continue _fun00007 }
 238:
                mike = options.length;
                romeo = 2;
                if(!(romeo !== mike)) { _fun00008_ip = 346; continue _fun00007 }
 250:
                tango = _closure1_slot0;
                offset = _closure1_slot3;
                mike = 14;
                report = offset[mike];
                report = tango.bind(verify)(report);
                oscar = report.intl;
                report = oscar.formatToPlainString;
                mike = offset[mike];
                mike = tango.bind(verify)(mike);
                mike = mike.t;
                tango = mike.1P7pvb;
                mike = {};
                offset = options[golf];
                mike['guildName1'] = offset;
                offset = options[yankee];
                mike['guildName2'] = offset;
                offset = options.length;
                offset = offset - romeo;
                mike['numGuildsRemaining'] = offset;
                mike = report.bind(oscar)(tango, mike);
                _fun00008_ip = 424; continue _fun00007;
 346:
                report = _closure1_slot0;
                romeo = _closure1_slot3;
                tango = 14;
                oscar = romeo[tango];
                oscar = report.bind(verify)(oscar);
                offset = oscar.intl;
                oscar = offset.formatToPlainString;
                tango = romeo[tango];
                tango = report.bind(verify)(tango);
                tango = tango.t;
                report = tango.QiuZ+P;
                tango = {};
                romeo = options[golf];
                tango['guildName1'] = romeo;
                yankee = options[yankee];
                tango['guildName2'] = yankee;
                mike = oscar.bind(offset)(report, tango);
 424:
                _fun00008_ip = 495; continue _fun00007;
 426:
                tango = _closure1_slot0;
                offset = _closure1_slot3;
                zulu = 14;
                report = offset[zulu];
                report = tango.bind(verify)(report);
                oscar = report.intl;
                report = oscar.formatToPlainString;
                zulu = offset[zulu];
                zulu = tango.bind(verify)(zulu);
                zulu = zulu.t;
                tango = zulu.90AwBw;
                zulu = {};
                golf = options[golf];
                zulu['guildName'] = golf;
                mike = report.bind(oscar)(tango, zulu);
 495:
                entity = mike;
 498:
                return entity;
            }
        };
        options = report.bind(oscar)(mike, zulu);
        oscar = _closure1_slot0;
        romeo = _closure1_slot3;
        mike = 15;
        mike = romeo[mike];
        zulu = oscar.bind(tango)(mike);
        mike = zulu.useNavigation;
        golf = mike.bind(zulu)();
        var _closure2_slot1 = golf;
        report = _closure1_slot4;
        zulu = report.useCallback;
        mike = new Array(1);
        mike[0] = golf;
        entity = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 16;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.trackItemInteraction;
            zulu = 'more_unreads_button';
            mike = 'press_more_unreads_button';
            mike = tango.bind(report)(zulu, zulu, mike);
            tango = _closure2_slot1;
            zulu = tango.push;
            mike = 'notifications-screen';
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report = zulu.bind(report)(entity, mike);
        zulu = _closure1_slot12;
        entity = 17;
        entity = romeo[entity];
        entity = oscar.bind(tango)(entity);
        mike = entity.TableRow;
        entity = {};
        foxtrot = _closure1_slot12;
        golf = 18;
        golf = romeo[golf];
        golf = oscar.bind(tango)(golf);
        offset = golf.ArrowSmallRightIcon;
        golf = {};
        backup = yankee.rightArrow;
        golf['style'] = backup;
        backup = 'custom';
        golf['size'] = backup;
        golf = foxtrot.bind(tango)(offset, golf);
        entity['icon'] = golf;
        entity['onPress'] = report;
        backup = _closure1_slot12;
        report = 11;
        golf = romeo[report];
        golf = oscar.bind(tango)(golf);
        foxtrot = golf.Text;
        golf = {};
        offset = yankee.noTouchContainer;
        golf['style'] = offset;
        offset = 1;
        golf['lineClamp'] = offset;
        kilo = _closure1_slot16;
        golf['variant'] = kilo;
        kilo = 'text-brand';
        golf['color'] = kilo;
        kilo = 14;
        sizing = romeo[kilo];
        sizing = oscar.bind(tango)(sizing);
        result = sizing.intl;
        output = result.formatToPlainString;
        kilo = romeo[kilo];
        kilo = oscar.bind(tango)(kilo);
        kilo = kilo.t;
        sizing = kilo.66UdFh;
        kilo = {};
        echo = echo.length;
        kilo['unreadsCount'] = echo;
        kilo = output.bind(result)(sizing, kilo);
        golf['children'] = kilo;
        golf = backup.bind(tango)(foxtrot, golf);
        entity['label'] = golf;
        golf = _closure1_slot12;
        report = romeo[report];
        report = oscar.bind(tango)(report);
        oscar = report.Text;
        report = {};
        yankee = yankee.noTouchContainer;
        report['style'] = yankee;
        report['lineClamp'] = offset;
        verify = _closure1_slot17;
        report['variant'] = verify;
        verify = 'text-muted';
        report['color'] = verify;
        report['children'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['subLabel'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: MentionRow
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            yankee = mike.message;
            var _closure2_slot0 = yankee;
            mike = _closure1_slot20;
            tango = undefined;
            kilo = mike.bind(tango)();
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            report = 19;
            mike = zulu[report];
            verify = oscar.bind(tango)(mike);
            options = verify.useStateFromStores;
            mike = _closure1_slot6;
            golf = new Array(1);
            golf[0] = mike;
            mike = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                tango = _closure2_slot0;
                entity = tango.getChannelId;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = options.bind(verify)(golf, mike);
            var _closure2_slot1 = mike;
            zulu = zulu[report];
            options = oscar.bind(tango)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot9;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00012_ip = 47; continue _fun00011 }
 16:
                    tango = _closure1_slot9;
                    zulu = tango.getGuild;
                    report = _closure2_slot1;
                    mike = report.getGuildId;
                    mike = mike.bind(report)();
                    entity = zulu.bind(tango)(mike);
 47:
                    return entity;
                }
            };
            config = golf.bind(options)(oscar, zulu);
            var _closure2_slot2 = config;
            options = _closure1_slot4;
            golf = options.useMemo;
            oscar = new Array(2);
            oscar[0] = config;
            zulu = yankee.author;
            zulu = zulu.id;
            oscar[1] = zulu;
            zulu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    if(!(entity != zulu)) { _fun00014_ip = 54; continue _fun00013 }
 13:
                    entity = {};
                    zulu = _closure2_slot2;
                    zulu = zulu.id;
                    mike = _closure2_slot0;
                    mike = mike.author;
                    tango = mike.id;
                    mike = new Array(1);
                    mike[0] = tango;
                    entity[zulu] = mike;
                    _fun00014_ip = 56; continue _fun00013;
 54:
                    entity = {};
 56:
                    return entity;
                }
            };
            verify = golf.bind(options)(zulu, oscar);
            options = _closure1_slot4;
            golf = options.useEffect;
            vacuum = null;
            oscar = vacuum == config;
            zulu = undefined;
            if(oscar) { _fun00010_ip = 194; continue _fun00009 }
 189:
            zulu = config.id;
 194:
            oscar = new Array(2);
            oscar[0] = zulu;
            zulu = yankee.author;
            zulu = zulu.id;
            oscar[1] = zulu;
            zulu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot2;
                    oscar = null;
                    tango = oscar == entity;
                    entity = undefined;
                    zulu = undefined;
                    if(tango) { _fun00016_ip = 29; continue _fun00015 }
 20:
                    tango = _closure2_slot2;
                    zulu = tango.id;
 29:
                    if(!(oscar != zulu)) { _fun00016_ip = 123; continue _fun00015 }
 33:
                    golf = _closure1_slot10;
                    report = golf.getUser;
                    tango = _closure2_slot0;
                    tango = tango.author;
                    tango = tango.id;
                    tango = report.bind(golf)(tango);
                    if(!(oscar == tango)) { _fun00016_ip = 123; continue _fun00015 }
 70:
                    report = _closure1_slot7;
                    tango = report.requestMember;
                    zulu = _closure2_slot2;
                    oscar = oscar == zulu;
                    zulu = undefined;
                    if(oscar) { _fun00016_ip = 102; continue _fun00015 }
 93:
                    oscar = _closure2_slot2;
                    zulu = oscar.id;
 102:
                    mike = _closure2_slot0;
                    mike = mike.author;
                    mike = mike.id;
                    mike = tango.bind(report)(zulu, mike);
 123:
                    return entity;
                }
            };
            zulu = golf.bind(options)(zulu, oscar);
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            zulu = 20;
            zulu = golf[zulu];
            options = oscar.bind(tango)(zulu);
            zulu = options.useSubscribeGuildMembers;
            zulu = zulu.bind(options)(verify);
            zulu = _closure1_slot19;
            backup = zulu.bind(tango)();
            zulu = 21;
            zulu = golf[zulu];
            options = oscar.bind(tango)(zulu);
            golf = options.useName;
            zulu = vacuum == config;
            oscar = undefined;
            if(zulu) { _fun00010_ip = 301; continue _fun00009 }
 296:
            oscar = config.id;
 301:
            verify = vacuum == mike;
            zulu = undefined;
            if(verify) { _fun00010_ip = 315; continue _fun00009 }
 310:
            zulu = mike.id;
 315:
            mike = yankee.author;
            record = golf.bind(options)(oscar, zulu, mike);
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[report];
            oscar = zulu.bind(tango)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot8;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00018_ip = 59; continue _fun00017 }
 16:
                    report = _closure1_slot8;
                    tango = report.getMember;
                    zulu = _closure2_slot2;
                    zulu = zulu.id;
                    mike = _closure2_slot0;
                    mike = mike.author;
                    mike = mike.id;
                    entity = tango.bind(report)(zulu, mike);
 59:
                    return entity;
                }
            };
            mike = report.bind(oscar)(zulu, mike);
            zulu = vacuum == mike;
            control = undefined;
            if(zulu) { _fun00010_ip = 390; continue _fun00009 }
 384:
            control = mike.colorString;
 390:
            if(!(vacuum == control)) { _fun00010_ip = 429; continue _fun00009 }
 394:
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            mike = 22;
            mike = report[mike];
            report = zulu.bind(tango)(mike);
            zulu = report.int2hex;
            mike = _closure1_slot11;
            control = zulu.bind(report)(mike);
 429:
            report = _closure1_slot4;
            zulu = report.useCallback;
            mike = vacuum == config;
            oscar = undefined;
            if(mike) { _fun00010_ip = 452; continue _fun00009 }
 447:
            oscar = config.id;
 452:
            mike = new Array(2);
            mike[0] = oscar;
            mike[1] = yankee;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    report = _closure1_slot0;
                    oscar = _closure1_slot3;
                    zulu = 16;
                    mike = oscar[zulu];
                    entity = undefined;
                    yankee = report.bind(entity)(mike);
                    offset = yankee.trackItemInteraction;
                    tango = _closure2_slot0;
                    verify = tango.id;
                    options = 'unread_mention';
                    golf = 'press_unread_mention';
                    golf = offset.bind(yankee)(verify, options, golf);
                    zulu = oscar[zulu];
                    oscar = report.bind(entity)(zulu);
                    report = oscar.navigateToPost;
                    zulu = tango.getChannelId;
                    tango = zulu.bind(tango)();
                    golf = _closure2_slot2;
                    zulu = null;
                    golf = zulu == golf;
                    zulu = undefined;
                    if(golf) { _fun00020_ip = 111; continue _fun00019 }
 102:
                    golf = _closure2_slot2;
                    zulu = golf.id;
 111:
                    mike = _closure2_slot0;
                    mike = mike.id;
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                }
            };
            report = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot12;
            mike = _closure1_slot0;
            oscar = _closure1_slot3;
            entity = 17;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {};
            options = _closure1_slot12;
            golf = _closure1_slot1;
            verify = 23;
            oscar = oscar[verify];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            offset = true;
            oscar['animate'] = offset;
            foxtrot = vacuum == config;
            offset = undefined;
            if(foxtrot) { _fun00010_ip = 552; continue _fun00009 }
 547:
            offset = config.id;
 552:
            oscar['guildId'] = offset;
            offset = yankee.author;
            oscar['user'] = offset;
            update = _closure1_slot0;
            sequence = _closure1_slot3;
            verify = sequence[verify];
            verify = update.bind(tango)(verify);
            verify = verify.AvatarSizes;
            verify = verify.REFRESH_MEDIUM_32;
            oscar['size'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            entity['icon'] = oscar;
            entity['onPress'] = report;
            golf = _closure1_slot13;
            oscar = _closure1_slot5;
            report = {};
            verify = kilo.textContainer;
            options = new Array(3);
            options[0] = verify;
            verify = kilo.labelContainer;
            options[1] = verify;
            verify = kilo.noTouchContainer;
            options[2] = verify;
            report['style'] = options;
            foxtrot = _closure1_slot13;
            options = 11;
            verify = sequence[options];
            verify = update.bind(tango)(verify);
            offset = verify.Text;
            verify = {};
            sizing = kilo.label;
            verify['style'] = sizing;
            result = 1;
            verify['lineClamp'] = result;
            sizing = _closure1_slot14;
            verify['variant'] = sizing;
            sizing = 'header-primary';
            verify['color'] = sizing;
            source = _closure1_slot12;
            sizing = sequence[options];
            sizing = update.bind(tango)(sizing);
            output = sizing.Text;
            sizing = {};
            echo = {};
            echo['color'] = control;
            sizing['style'] = echo;
            echo = 'text-md/semibold';
            sizing['variant'] = echo;
            echo = 16;
            echo = sequence[echo];
            control = update.bind(tango)(echo);
            echo = control.truncateUsername;
            control = echo.bind(control)(record);
            echo = ' ';
            control = control + echo;
            sizing['children'] = control;
            output = source.bind(tango)(output, sizing);
            sizing = new Array(2);
            sizing[0] = output;
            output = 14;
            source = sequence[output];
            source = update.bind(tango)(source);
            control = source.intl;
            source = control.formatToPlainString;
            output = sequence[output];
            output = update.bind(tango)(output);
            output = output.t;
            update = output.jM1jAA;
            output = {};
            record = vacuum == config;
            sequence = undefined;
            if(record) { _fun00010_ip = 866; continue _fun00009 }
 861:
            sequence = config.name;
 866:
            config = vacuum != sequence;
            vacuum = '';
            if(!config) { _fun00010_ip = 880; continue _fun00009 }
 877:
            vacuum = sequence;
 880:
            output['guildName'] = vacuum;
            output = source.bind(control)(update, output);
            sizing[1] = output;
            verify['children'] = sizing;
            verify = foxtrot.bind(tango)(offset, verify);
            offset = new Array(2);
            offset[0] = verify;
            control = _closure1_slot12;
            verify = _closure1_slot0;
            sizing = _closure1_slot3;
            foxtrot = sizing[options];
            foxtrot = verify.bind(tango)(foxtrot);
            source = foxtrot.Text;
            update = {'style': null, 'variant': 'text-xs/normal', 'color': 'header-muted'};
            foxtrot = kilo.timestamp;
            update['style'] = foxtrot;
            output = 'header-muted';
            foxtrot = 24;
            foxtrot = sizing[foxtrot];
            config = verify.bind(tango)(foxtrot);
            sequence = config.getRelativeTimestamp;
            foxtrot = _closure1_slot1;
            vacuum = 25;
            vacuum = sizing[vacuum];
            context = foxtrot.bind(tango)(vacuum);
            record = context.extractTimestamp;
            vacuum = yankee.id;
            vacuum = record.bind(context)(vacuum);
            vacuum = sequence.bind(config)(vacuum);
            update['children'] = vacuum;
            update = control.bind(tango)(source, update);
            offset[1] = update;
            report['children'] = offset;
            report = golf.bind(tango)(oscar, report);
            entity['label'] = report;
            golf = _closure1_slot13;
            oscar = _closure1_slot5;
            report = {};
            update = kilo.textContainer;
            offset = new Array(3);
            offset[0] = update;
            update = kilo.noTouchContainer;
            offset[2] = update;
            report['style'] = offset;
            offset = _closure1_slot12;
            options = sizing[options];
            options = verify.bind(tango)(options);
            verify = options.Text;
            options = {};
            update = kilo.label;
            options['style'] = update;
            options['lineClamp'] = result;
            result = _closure1_slot15;
            options['variant'] = result;
            options['color'] = output;
            result = yankee.content;
            output = result.replace;
            yankee = /\n+/g;
            yankee = output.bind(result)(yankee, echo);
            yankee = backup.bind(tango)(yankee);
            options['children'] = yankee;
            verify = offset.bind(tango)(verify, options);
            options = new Array(2);
            options[0] = verify;
            yankee = _closure1_slot12;
            offset = _closure1_slot5;
            verify = {};
            backup = kilo.badgeContainer;
            verify['style'] = backup;
            backup = _closure1_slot12;
            romeo = 26;
            romeo = sizing[romeo];
            foxtrot = foxtrot.bind(tango)(romeo);
            romeo = {};
            kilo = kilo.badge;
            romeo['badgeStyle'] = kilo;
            kilo = 8;
            romeo['size'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['subLabel'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot24 = entity;
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
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    foxtrot = 2;
    tango = oscar[foxtrot];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    romeo = tango.ICYMI_MARGIN;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DEFAULT_ROLE_COLOR;
    var _closure1_slot11 = tango;
    tango = 9;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot12 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot13 = tango;
    tango = 'text-md/medium';
    var _closure1_slot14 = tango;
    tango = 'text-sm/normal';
    var _closure1_slot15 = tango;
    tango = 'text-sm/semibold';
    var _closure1_slot16 = tango;
    tango = 'text-xs/normal';
    var _closure1_slot17 = tango;
    tango = 10;
    golf = oscar[tango];
    verify = report.bind(entity)(golf);
    options = verify.createStyles;
    golf = {};
    backup = {};
    kilo = 11;
    offset = oscar[kilo];
    offset = report.bind(entity)(offset);
    offset = offset.TextStyleSheet;
    echo = offset.text-sm/normal;
    update = backup;
    offset = copyDataProperties(update, echo);
    offset = 12;
    sizing = oscar[offset];
    sizing = yankee.bind(entity)(sizing);
    sizing = sizing.colors;
    output = sizing.TEXT_MUTED;
    sizing = 'color';
    backup[sizing] = output;
    golf['strong'] = backup;
    backup = {};
    kilo = oscar[kilo];
    kilo = report.bind(entity)(kilo);
    kilo = kilo.TextStyleSheet;
    echo = kilo.text-sm/semibold;
    update = backup;
    kilo = copyDataProperties(update, echo);
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.TEXT_BRAND;
    backup[sizing] = kilo;
    sizing = 'transparent';
    kilo = 'backgroundColor';
    backup[kilo] = sizing;
    golf['mention'] = backup;
    golf = options.bind(verify)(golf);
    var _closure1_slot18 = golf;
    golf = function() { // Original name: useMarkup
        zulu = _closure1_slot2;
        tango = _closure1_slot3;
        mike = 13;
        mike = tango[mike];
        tango = undefined;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.getParser;
        entity = _closure1_slot18;
        entity = entity.bind(tango)();
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot19 = golf;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['height'] = romeo;
    tango['arrowContainer'] = verify;
    verify = {'width': 0, 'height': 0, 'borderStyle': 'solid', 'borderLeftColor': 'transparent', 'borderRightColor': 'transparent', 'borderTopColor': null, 'borderBottomColor': null, 'position': 'absolute'};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.CARD_PRIMARY_BG;
    verify['borderTopColor'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.CARD_PRIMARY_BG;
    verify['borderBottomColor'] = backup;
    backup = 32;
    kilo = romeo + backup;
    backup = romeo / foxtrot;
    backup = kilo + backup;
    verify['right'] = backup;
    tango['arrow'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    tango['textContainer'] = verify;
    verify = {};
    verify['marginBottom'] = foxtrot;
    tango['labelContainer'] = verify;
    verify = {};
    verify['flexShrink'] = foxtrot;
    tango['label'] = verify;
    verify = {};
    verify['marginHorizontal'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    verify['paddingTop'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['paddingBottom'] = romeo;
    tango['container'] = verify;
    verify = {};
    romeo = 18;
    verify['width'] = romeo;
    tango['badgeContainer'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    verify['marginLeft'] = romeo;
    tango['timestamp'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BUTTON_OUTLINE_DANGER_BORDER;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    verify['marginLeft'] = romeo;
    tango['badge'] = verify;
    verify = {'tintColor': null, 'height': 20, 'width': 20, 'marginHorizontal': 6};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_BRAND;
    verify['tintColor'] = offset;
    tango['rightArrow'] = verify;
    verify = {};
    offset = 'none';
    verify['pointerEvents'] = offset;
    tango['noTouchContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot20 = tango;
    tango = 29;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/gravity/GravityMentionsRow.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GravityMentionsRow
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            entity = entity.messages;
            var _closure2_slot0 = entity;
            mike = _closure1_slot20;
            tango = undefined;
            kilo = mike.bind(tango)();
            report = _closure1_slot4;
            zulu = report.useMemo;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = {};
                tango = _closure2_slot0;
                verify = tango.slice;
                oscar = _closure1_slot0;
                golf = _closure1_slot3;
                mike = 27;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                options = zulu.MAX_NUM_MENTIONS_SHOWN;
                zulu = 0;
                zulu = verify.bind(tango)(zulu, options);
                entity['displayMessages'] = zulu;
                zulu = tango.slice;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.MAX_NUM_MENTIONS_SHOWN;
                mike = zulu.bind(tango)(mike);
                entity['remainingMessages'] = mike;
                return entity;
            };
            entity = zulu.bind(report)(entity, mike);
            romeo = entity.displayMessages;
            backup = entity.remainingMessages;
            zulu = _closure1_slot13;
            mike = _closure1_slot5;
            entity = {};
            report = kilo.container;
            entity['style'] = report;
            golf = _closure1_slot12;
            oscar = _closure1_slot5;
            report = {};
            options = kilo.arrowContainer;
            report['style'] = options;
            foxtrot = _closure1_slot12;
            offset = _closure1_slot5;
            options = {};
            sizing = kilo.arrow;
            kilo = new Array(2);
            kilo[0] = sizing;
            sizing = {'borderLeftWidth': 12, 'borderRightWidth': 12, 'borderBottomWidth': 12};
            kilo[1] = sizing;
            options['style'] = kilo;
            options = foxtrot.bind(tango)(offset, options);
            report['children'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot13;
            golf = _closure1_slot0;
            offset = _closure1_slot3;
            oscar = 28;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.TableRowGroup;
            oscar = {};
            offset = romeo.map;
            verify = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot12;
                tango = _closure1_slot24;
                zulu = {};
                zulu['message'] = entity;
                mike = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            offset = offset.bind(romeo)(verify);
            verify = new Array(2);
            verify[0] = offset;
            romeo = backup.length;
            offset = 0;
            offset = romeo > offset;
            if(!offset) { _fun00022_ip = 271; continue _fun00021 }
 250:
            foxtrot = _closure1_slot12;
            romeo = _closure1_slot23;
            yankee = {};
            yankee['messages'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 271:
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();