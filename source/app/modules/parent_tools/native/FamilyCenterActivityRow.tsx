// app/modules/parent_tools/native/FamilyCenterActivityRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: FamilyCenterActivityRowUser
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            mike = mike.action;
            var _closure2_slot0 = mike;
            zulu = _closure1_slot10;
            report = undefined;
            result = zulu.bind(report)();
            oscar = _closure1_slot6;
            tango = oscar.get;
            zulu = mike.display_type;
            backup = tango.bind(oscar)(zulu);
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 10;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = 'No text for action type';
            zulu = tango.bind(report)(backup, zulu);
            tango = _closure1_slot0;
            zulu = 11;
            zulu = oscar[zulu];
            oscar = tango.bind(report)(zulu);
            tango = oscar.useStateFromStores;
            golf = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = golf;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                entity = entity.entity_id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            source = tango.bind(oscar)(zulu, entity);
            entity = null;
            if(!(entity != source)) { _fun00002_ip = 543; continue _fun00001 }
 134:
            update = _closure1_slot1;
            output = _closure1_slot2;
            zulu = 12;
            zulu = output[zulu];
            tango = update.bind(report)(zulu);
            zulu = tango.extractTimestamp;
            mike = mike.event_id;
            echo = zulu.bind(tango)(mike);
            tango = _closure1_slot9;
            zulu = _closure1_slot3;
            mike = {};
            oscar = result.container;
            mike['style'] = oscar;
            options = _closure1_slot8;
            golf = _closure1_slot3;
            oscar = {};
            verify = result.avatarContainer;
            oscar['style'] = verify;
            yankee = _closure1_slot8;
            verify = 13;
            verify = output[verify];
            offset = update.bind(report)(verify);
            verify = {};
            foxtrot = result.avatar;
            verify['avatarStyle'] = foxtrot;
            verify['user'] = source;
            verify['guildId'] = report;
            foxtrot = true;
            verify['disablePlaceholder'] = foxtrot;
            foxtrot = source.avatarDecoration;
            verify['avatarDecoration'] = foxtrot;
            verify = yankee.bind(report)(offset, verify);
            oscar['children'] = verify;
            golf = options.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            verify = _closure1_slot9;
            options = _closure1_slot3;
            golf = {};
            offset = result.textContainer;
            golf['style'] = offset;
            kilo = _closure1_slot8;
            sizing = _closure1_slot0;
            yankee = 14;
            offset = output[yankee];
            offset = sizing.bind(report)(offset);
            foxtrot = offset.Text;
            offset = {'style': null, 'variant': 'text-md/semibold', 'color': 'interactive-active', 'ellipsizeMode': 'tail', 'lineClamp': 1};
            result = result.text;
            offset['style'] = result;
            result = 15;
            result = output[result];
            update = update.bind(report)(result);
            result = update.getName;
            result = result.bind(update)(source);
            offset['children'] = result;
            foxtrot = kilo.bind(report)(foxtrot, offset);
            offset = new Array(2);
            offset[0] = foxtrot;
            foxtrot = _closure1_slot8;
            yankee = output[yankee];
            yankee = sizing.bind(report)(yankee);
            romeo = yankee.Text;
            yankee = {'variant': 'text-xs/medium', 'color': 'channels-default'};
            kilo = 16;
            kilo = output[kilo];
            output = sizing.bind(report)(kilo);
            sizing = output.formatUserActivityTimestamp;
            kilo = global;
            kilo = kilo.Date;
            result = kilo.prototype;
            result = Object.create(result, {constructor: {value: kilo}});
            sequence = result;
            vacuum = echo;
            kilo = new sequence[kilo](vacuum, control);
            result = kilo instanceof Object ? kilo : result;
            kilo = result.getTime;
            kilo = kilo.bind(result)();
            backup = backup.timestampFormatter;
            backup = sizing.bind(output)(kilo, backup);
            yankee['children'] = backup;
            yankee = foxtrot.bind(report)(romeo, yankee);
            offset[1] = yankee;
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 543:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: FamilyCenterActivityRowGuild
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            entity = entity.action;
            var _closure2_slot0 = entity;
            zulu = _closure1_slot11;
            tango = undefined;
            sequence = zulu.bind(tango)();
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 11;
            zulu = report[zulu];
            golf = oscar.bind(tango)(zulu);
            oscar = golf.useStateFromStores;
            options = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = options;
            mike = function() {
                zulu = _closure1_slot5;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = entity.entity_id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            result = oscar.bind(golf)(zulu, mike);
            zulu = _closure1_slot6;
            mike = zulu.get;
            entity = entity.display_type;
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot1;
            entity = 10;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = 'No text for action type';
            entity = mike.bind(tango)(zulu, entity);
            if(!(tango !== result)) { _fun00004_ip = 705; continue _fun00003 }
 132:
            mike = result.hasFeature;
            entity = _closure1_slot7;
            entity = entity.VERIFIED;
            echo = mike.bind(result)(entity);
            if(echo) { _fun00004_ip = 177; continue _fun00003 }
 156:
            mike = result.hasFeature;
            entity = _closure1_slot7;
            entity = entity.PARTNERED;
            echo = mike.bind(result)(entity);
 177:
            entity = result.toString;
            vacuum = entity.bind(result)();
            zulu = _closure1_slot9;
            mike = _closure1_slot3;
            entity = {};
            report = sequence.container;
            entity['style'] = report;
            golf = _closure1_slot8;
            oscar = _closure1_slot1;
            offset = _closure1_slot2;
            options = 17;
            report = offset[options];
            oscar = oscar.bind(tango)(report);
            report = {};
            verify = sequence.avatar;
            report['style'] = verify;
            verify = sequence.avatarText;
            report['textStyle'] = verify;
            report['guild'] = result;
            verify = _closure1_slot0;
            options = offset[options];
            options = verify.bind(tango)(options);
            options = options.GuildIconSizes;
            options = options.NORMAL;
            report['size'] = options;
            control = true;
            report['animate'] = control;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot9;
            golf = _closure1_slot3;
            oscar = {};
            verify = sequence.text;
            oscar['style'] = verify;
            backup = _closure1_slot8;
            foxtrot = _closure1_slot3;
            verify = {};
            offset = sequence.headerContainer;
            verify['style'] = offset;
            output = _closure1_slot9;
            sizing = _closure1_slot3;
            kilo = {};
            offset = sequence.headerAndIconContainer;
            kilo['style'] = offset;
            yankee = null;
            if(!echo) { _fun00004_ip = 446; continue _fun00003 }
 370:
            source = _closure1_slot8;
            record = _closure1_slot1;
            context = _closure1_slot2;
            config = 18;
            echo = context[config];
            update = record.bind(tango)(echo);
            echo = {};
            papa = sequence.badge;
            echo['style'] = papa;
            echo['guild'] = result;
            config = context[config];
            config = record.bind(tango)(config);
            config = config.Sizes;
            config = config.SMALL;
            echo['size'] = config;
            echo['disableColor'] = control;
            yankee = source.bind(tango)(update, echo);
 446:
            echo = new Array(2);
            echo[0] = yankee;
            control = _closure1_slot8;
            source = _closure1_slot0;
            update = _closure1_slot2;
            yankee = 14;
            update = update[yankee];
            update = source.bind(tango)(update);
            source = update.Text;
            update = {'style': null, 'variant': 'text-md/semibold', 'color': 'interactive-active', 'ellipsizeMode': 'tail', 'lineClamp': 1};
            sequence = sequence.header;
            update['style'] = sequence;
            update['children'] = vacuum;
            update = control.bind(tango)(source, update);
            echo[1] = update;
            kilo['children'] = echo;
            kilo = output.bind(tango)(sizing, kilo);
            verify['children'] = kilo;
            foxtrot = backup.bind(tango)(foxtrot, verify);
            verify = new Array(2);
            verify[0] = foxtrot;
            foxtrot = result.approximateMemberCount;
            offset = null;
            if(!(tango !== foxtrot)) { _fun00004_ip = 675; continue _fun00003 }
 562:
            foxtrot = _closure1_slot8;
            kilo = _closure1_slot0;
            echo = _closure1_slot2;
            yankee = echo[yankee];
            yankee = kilo.bind(tango)(yankee);
            romeo = yankee.Text;
            yankee = {'variant': 'text-xs/medium', 'color': 'channels-default'};
            backup = 19;
            sizing = echo[backup];
            sizing = kilo.bind(tango)(sizing);
            output = sizing.intl;
            sizing = output.format;
            backup = echo[backup];
            backup = kilo.bind(tango)(backup);
            backup = backup.t;
            kilo = backup.5JmNgo;
            backup = {};
            result = result.approximateMemberCount;
            backup['members'] = result;
            backup = sizing.bind(output)(kilo, backup);
            yankee['children'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 675:
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 705:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    kilo = 2;
    tango = oscar[kilo];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    offset = 4;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.ACTION_TO_TEXT;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot7 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    tango = 7;
    golf = oscar[tango];
    verify = report.bind(entity)(golf);
    options = verify.createStyles;
    golf = {};
    foxtrot = {'display': 'flex', 'flexDirection': 'row', 'borderBottomColor': null, 'borderBottomWidth': 1, 'paddingVertical': 12};
    yankee = 8;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_ACCENT;
    foxtrot['borderBottomColor'] = backup;
    golf['container'] = foxtrot;
    foxtrot = {};
    backup = 9;
    sizing = oscar[backup];
    sizing = report.bind(entity)(sizing);
    sizing = sizing.AVATAR_SIZE_MAP;
    backup = oscar[backup];
    backup = report.bind(entity)(backup);
    backup = backup.AvatarSizes;
    backup = backup.NORMAL;
    backup = sizing[backup];
    backup = backup / kilo;
    foxtrot['borderRadius'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    foxtrot['backgroundColor'] = backup;
    golf['avatar'] = foxtrot;
    foxtrot = {'marginRight': 12, 'alignItems': 'flex-start'};
    golf['avatarContainer'] = foxtrot;
    foxtrot = {'display': 'flex', 'flexDirection': 'column', 'flexShrink': 1};
    golf['textContainer'] = foxtrot;
    foxtrot = {'display': 'flex', 'flexDirection': 'row', 'flexShrink': 1};
    golf['text'] = foxtrot;
    golf = options.bind(verify)(golf);
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'display': 'flex', 'alignItems': 'center', 'flexDirection': 'row', 'borderBottomColor': null, 'borderBottomWidth': 1, 'paddingVertical': 12};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_ACCENT;
    verify['borderBottomColor'] = foxtrot;
    tango['container'] = verify;
    verify = {'borderRadius': null, 'borderColor': null, 'height': 40, 'width': 40, 'margin': 0, 'backgroundColor': null, 'marginRight': 12};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.lg;
    verify['borderRadius'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_PRIMARY;
    verify['borderColor'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = foxtrot;
    tango['avatar'] = verify;
    verify = {};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.TEXT_NORMAL;
    verify['color'] = yankee;
    tango['avatarText'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'column', 'flexShrink': 1};
    tango['text'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row'};
    tango['headerContainer'] = verify;
    verify = {};
    verify['marginRight'] = offset;
    tango['badge'] = verify;
    verify = {};
    offset = 16;
    verify['paddingRight'] = offset;
    tango['header'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    tango['headerAndIconContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/parent_tools/native/FamilyCenterActivityRow.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: FamilyCenterActivityRow
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            offset = entity.action;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 16;
            entity = entity[verify];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = mike.isUserAction;
            entity = entity.bind(mike)(offset);
            if(entity) { _fun00006_ip = 80; continue _fun00005 }
 47:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            mike = mike.bind(report)(entity);
            entity = mike.isGuildAction;
            mike = entity.bind(mike)(offset);
            entity = null;
            if(!mike) { _fun00006_ip = 169; continue _fun00005 }
 80:
            tango = _closure1_slot8;
            zulu = _closure1_slot3;
            mike = {};
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[verify];
            options = options.bind(report)(oscar);
            oscar = options.isUserAction;
            oscar = oscar.bind(options)(offset);
            verify = _closure1_slot8;
            if(oscar) { _fun00006_ip = 143; continue _fun00005 }
 125:
            options = _closure1_slot13;
            oscar = {};
            oscar['action'] = offset;
            oscar = verify.bind(report)(options, oscar);
            _fun00006_ip = 159; continue _fun00005;
 143:
            options = _closure1_slot12;
            golf = {};
            golf['action'] = offset;
            oscar = verify.bind(report)(options, golf);
 159:
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 169:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();