// app/modules/main_tabs_v2/native/tabs/gravity/GravityConversationSummaryRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: ConversationMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            echo = entity.muted;
            zulu = entity.message;
            var _closure2_slot0 = zulu;
            output = entity.channel;
            var _closure2_slot1 = output;
            vacuum = entity.showTimestamps;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 13;
            oscar = report[entity];
            tango = undefined;
            verify = zulu.bind(tango)(oscar);
            options = verify.useStateFromStores;
            oscar = _closure1_slot9;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot9;
                    tango = report.getMessage;
                    entity = _closure2_slot0;
                    zulu = entity.channel_id;
                    entity = entity.id;
                    entity = tango.bind(report)(zulu, entity);
                    zulu = null;
                    if(!(zulu == entity)) { _fun00004_ip = 46; continue _fun00003 }
 42:
                    entity = _closure2_slot0;
 46:
                    return entity;
                }
            };
            result = options.bind(verify)(golf, oscar);
            var _closure2_slot2 = result;
            oscar = _closure1_slot18;
            kilo = oscar.bind(tango)();
            entity = report[entity];
            oscar = zulu.bind(tango)(entity);
            report = oscar.useStateFromStores;
            entity = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                tango = _closure1_slot7;
                zulu = tango.getMember;
                mike = _closure2_slot1;
                mike = mike.guild_id;
                entity = _closure2_slot2;
                entity = entity.author;
                entity = entity.id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = report.bind(oscar)(zulu, entity);
            oscar = _closure1_slot4;
            report = oscar.useMemo;
            zulu = result.attachments;
            golf = zulu.length;
            zulu = new Array(3);
            zulu[0] = golf;
            golf = result.content;
            zulu[1] = golf;
            golf = result.embeds;
            zulu[2] = golf;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot2;
                    entity = entity.embeds;
                    mike = entity.length;
                    entity = 1;
                    mike = entity !== mike;
                    if(mike) { _fun00006_ip = 49; continue _fun00005 }
 28:
                    entity = _closure2_slot2;
                    entity = entity.attachments;
                    tango = entity.length;
                    entity = 0;
                    mike = tango > entity;
 49:
                    entity = !mike;
                    if(mike) { _fun00006_ip = 127; continue _fun00005 }
 55:
                    mike = _closure2_slot2;
                    mike = mike.embeds;
                    report = 0;
                    mike = mike[report];
                    tango = mike.type;
                    mike = _closure1_slot14;
                    mike = mike.GIFV;
                    mike = tango === mike;
                    if(!mike) { _fun00006_ip = 124; continue _fun00005 }
 96:
                    zulu = _closure2_slot2;
                    tango = zulu.embeds;
                    tango = tango[report];
                    tango = tango.url;
                    zulu = zulu.content;
                    mike = tango === zulu;
 124:
                    entity = mike;
 127:
                    return entity;
                }
            };
            update = report.bind(oscar)(mike, zulu);
            offset = null;
            mike = offset == entity;
            sequence = undefined;
            if(mike) { _fun00002_ip = 218; continue _fun00001 }
 212:
            sequence = entity.colorString;
 218:
            if(!(offset == sequence)) { _fun00002_ip = 257; continue _fun00001 }
 222:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 14;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.int2hex;
            entity = _closure1_slot13;
            sequence = mike.bind(zulu)(entity);
 257:
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 15;
            entity = verify[entity];
            report = yankee.bind(tango)(entity);
            zulu = report.extractMediaSourcesFromMessage;
            lima = output.guild_id;
            entity = 16;
            entity = verify[entity];
            entity = yankee.bind(tango)(entity);
            sierra = entity.GRAVITY_VALID_EMBED_TYPES;
            quebec = report;
            equality = result;
            whiskey = result;
            romeo = quebec[zulu](equality, whiskey, lima, sierra, status);
            entity = 17;
            entity = verify[entity];
            oscar = yankee.bind(tango)(entity);
            report = oscar.useName;
            zulu = output.guild_id;
            mike = output.id;
            entity = result.author;
            control = report.bind(oscar)(zulu, mike, entity);
            zulu = _closure1_slot16;
            mike = _closure1_slot5;
            entity = {};
            report = kilo.messageContainer;
            entity['style'] = report;
            golf = _closure1_slot15;
            oscar = _closure1_slot1;
            options = 18;
            report = verify[options];
            oscar = oscar.bind(tango)(report);
            report = {};
            foxtrot = result.author;
            report['user'] = foxtrot;
            options = verify[options];
            options = yankee.bind(tango)(options);
            options = options.AvatarSizes;
            options = options.REFRESH_MEDIUM_32;
            report['size'] = options;
            options = output.guild_id;
            report['guildId'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot16;
            golf = _closure1_slot5;
            oscar = {};
            foxtrot = kilo.messageContent;
            oscar['style'] = foxtrot;
            foxtrot = _closure1_slot16;
            sizing = 19;
            verify = verify[sizing];
            verify = yankee.bind(tango)(verify);
            yankee = verify.Text;
            verify = {'style': null, 'variant': 'text-md/semibold', 'color': 'text-primary'};
            source = {};
            source['color'] = sequence;
            verify['style'] = source;
            source = new Array(2);
            source[0] = control;
            control = null;
            if(!vacuum) { _fun00002_ip = 659; continue _fun00001 }
 540:
            config = _closure1_slot16;
            context = _closure1_slot0;
            status = _closure1_slot2;
            vacuum = status[sizing];
            vacuum = context.bind(tango)(vacuum);
            sequence = vacuum.Text;
            vacuum = {'variant': 'text-xs/normal', 'color': 'header-muted'};
            record = 20;
            record = status[record];
            papa = context.bind(tango)(record);
            context = papa.getRelativeTimestamp;
            target = _closure1_slot1;
            record = 21;
            record = status[record];
            status = target.bind(tango)(record);
            target = status.extractTimestamp;
            record = result.id;
            record = target.bind(status)(record);
            context = context.bind(papa)(record);
            record = ['   '];
            record[1] = context;
            vacuum['children'] = record;
            control = config.bind(tango)(sequence, vacuum);
 659:
            source[1] = control;
            verify['children'] = source;
            yankee = foxtrot.bind(tango)(yankee, verify);
            verify = new Array(4);
            verify[0] = yankee;
            yankee = result.content;
            foxtrot = yankee.length;
            yankee = 0;
            foxtrot = foxtrot > yankee;
            if(!foxtrot) { _fun00002_ip = 703; continue _fun00001 }
 700:
            foxtrot = !update;
 703:
            if(!foxtrot) { _fun00002_ip = 791; continue _fun00001 }
 706:
            source = _closure1_slot15;
            update = _closure1_slot0;
            sequence = _closure1_slot2;
            sizing = sequence[sizing];
            sizing = update.bind(tango)(sizing);
            update = sizing.Text;
            sizing = {'variant': 'text-md/normal', 'lineClamp': 2, 'color': 'text-primary'};
            vacuum = _closure1_slot1;
            control = 22;
            control = sequence[control];
            config = vacuum.bind(tango)(control);
            sequence = config.parseInlineReply;
            vacuum = result.content;
            control = true;
            control = sequence.bind(config)(vacuum, control);
            sizing['children'] = control;
            foxtrot = source.bind(tango)(update, sizing);
 791:
            verify[1] = foxtrot;
            offset = offset != romeo;
            if(!offset) { _fun00002_ip = 811; continue _fun00001 }
 802:
            romeo = romeo.length;
            offset = romeo > yankee;
 811:
            if(!offset) { _fun00002_ip = 869; continue _fun00001 }
 814:
            sizing = _closure1_slot15;
            foxtrot = _closure1_slot0;
            update = _closure1_slot2;
            romeo = 23;
            romeo = update[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            foxtrot = romeo.MediaOnlyRowPreview;
            romeo = {};
            romeo['message'] = result;
            romeo['muted'] = echo;
            echo = 2;
            romeo['lineClamp'] = echo;
            offset = sizing.bind(tango)(foxtrot, romeo);
 869:
            verify[2] = offset;
            offset = result.reactions;
            offset = offset.length;
            offset = offset > yankee;
            if(!offset) { _fun00002_ip = 968; continue _fun00001 }
 891:
            foxtrot = _closure1_slot15;
            romeo = _closure1_slot5;
            yankee = {};
            kilo = kilo.emojiContainer;
            yankee['style'] = kilo;
            sizing = _closure1_slot15;
            kilo = _closure1_slot1;
            echo = _closure1_slot2;
            backup = 24;
            backup = echo[backup];
            kilo = kilo.bind(tango)(backup);
            backup = {};
            backup['message'] = result;
            backup['channel'] = output;
            output = true;
            backup['hideAdditionalButtons'] = output;
            backup = sizing.bind(tango)(kilo, backup);
            yankee['children'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 968:
            verify[3] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: CardGradient
        mike = _closure1_slot18;
        tango = undefined;
        oscar = mike.bind(tango)();
        options = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 25;
        mike = golf[mike];
        verify = options.bind(tango)(mike);
        report = verify.useToken;
        mike = _closure1_slot1;
        zulu = 12;
        zulu = golf[zulu];
        zulu = mike.bind(tango)(zulu);
        zulu = zulu.colors;
        zulu = zulu.ACTION_SHEET_GRADIENT_BG;
        offset = report.bind(verify)(zulu);
        zulu = 26;
        report = golf[zulu];
        yankee = options.bind(tango)(report);
        verify = yankee.hexOpacityToRgba;
        report = 0;
        verify = verify.bind(yankee)(offset, report);
        report = new Array(3);
        report[0] = verify;
        verify = golf[zulu];
        romeo = options.bind(tango)(verify);
        yankee = romeo.hexOpacityToRgba;
        verify = 0.6;
        verify = yankee.bind(romeo)(offset, verify);
        report[1] = verify;
        zulu = golf[zulu];
        verify = options.bind(tango)(zulu);
        options = verify.hexOpacityToRgba;
        zulu = 1;
        zulu = options.bind(verify)(offset, zulu);
        report[2] = zulu;
        zulu = _closure1_slot15;
        entity = 27;
        entity = golf[entity];
        mike = mike.bind(tango)(entity);
        entity = {'style': null, 'locations': null, 'pointerEvents': 'none', 'angle': 180, 'useAngle': true};
        oscar = oscar.linearGradient;
        entity['style'] = oscar;
        oscar = [0, 0.5, 1];
        entity['locations'] = oscar;
        entity['colors'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: ConversationMessages
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            entity = entity.topic;
            var _closure2_slot0 = entity;
            report = undefined;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            oscar = entity.messages;
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 13;
            zulu = golf[mike];
            yankee = tango.bind(report)(zulu);
            offset = yankee.useStateFromStores;
            zulu = _closure1_slot6;
            verify = new Array(1);
            verify[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            source = offset.bind(yankee)(verify, zulu);
            var _closure2_slot1 = source;
            zulu = golf[mike];
            yankee = tango.bind(report)(zulu);
            offset = yankee.useStateFromStores;
            zulu = _closure1_slot10;
            verify = new Array(1);
            verify[0] = zulu;
            zulu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00010_ip = 54; continue _fun00009 }
 16:
                    report = _closure1_slot10;
                    tango = report.isChannelMuted;
                    mike = _closure2_slot1;
                    zulu = mike.getGuildId;
                    zulu = zulu.bind(mike)();
                    mike = mike.id;
                    entity = tango.bind(report)(zulu, mike);
 54:
                    return entity;
                }
            };
            zulu = offset.bind(yankee)(verify, zulu);
            var _closure2_slot2 = zulu;
            zulu = _closure1_slot18;
            result = zulu.bind(report)();
            verify = _closure1_slot1;
            zulu = 21;
            zulu = golf[zulu];
            yankee = verify.bind(report)(zulu);
            offset = yankee.age;
            romeo = entity.messageIds;
            zulu = entity.messageIds;
            verify = zulu.length;
            zulu = 1;
            verify = verify - zulu;
            verify = romeo[verify];
            offset = offset.bind(yankee)(verify);
            verify = 16;
            verify = golf[verify];
            verify = tango.bind(report)(verify);
            verify = verify.ACTIVE_CONVERSATION_AGE;
            verify = offset < verify;
            var _closure2_slot3 = verify;
            mike = golf[mike];
            offset = tango.bind(report)(mike);
            golf = offset.useStateFromStores;
            mike = _closure1_slot9;
            tango = new Array(1);
            tango[0] = mike;
            mike = function() {
                zulu = _closure1_slot9;
                mike = zulu.getMessages;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = golf.bind(offset)(tango, mike);
            echo = oscar;
            if(!verify) { _fun00008_ip = 331; continue _fun00007 }
 277:
            tango = mike._array;
            golf = tango.length;
            tango = 0;
            echo = oscar;
            if(!(golf > tango)) { _fun00008_ip = 331; continue _fun00007 }
 297:
            golf = mike._array;
            tango = golf.slice;
            mike = mike._array;
            offset = mike.length;
            mike = 3;
            mike = offset - mike;
            echo = tango.bind(golf)(mike);
 331:
            tango = _closure1_slot4;
            mike = tango.useState;
            control = 0;
            tango = mike.bind(tango)(control);
            mike = _closure1_slot3;
            offset = 2;
            mike = mike.bind(report)(tango, offset);
            golf = mike[control];
            _closure2_slot4 = golf;
            mike = mike[zulu];
            _closure2_slot5 = mike;
            yankee = _closure1_slot4;
            tango = yankee.useState;
            mike = false;
            tango = tango.bind(yankee)(mike);
            mike = _closure1_slot3;
            mike = mike.bind(report)(tango, offset);
            yankee = mike[control];
            mike = mike[zulu];
            _closure2_slot6 = mike;
            romeo = _closure1_slot4;
            tango = romeo.useState;
            mike = entity.id;
            tango = tango.bind(romeo)(mike);
            mike = _closure1_slot3;
            mike = mike.bind(report)(tango, offset);
            offset = mike[control];
            _closure2_slot7 = offset;
            mike = mike[zulu];
            _closure2_slot8 = mike;
            tango = _closure1_slot4;
            zulu = tango.useLayoutEffect;
            mike = new Array(4);
            mike[0] = offset;
            mike[1] = golf;
            oscar = oscar.length;
            mike[2] = oscar;
            entity = entity.id;
            mike[3] = entity;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure2_slot7;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    if(!(zulu === mike)) { _fun00012_ip = 66; continue _fun00011 }
 20:
                    zulu = _closure2_slot4;
                    mike = 0;
                    mike = mike !== zulu;
                    if(!mike) { _fun00012_ip = 48; continue _fun00011 }
 33:
                    tango = _closure2_slot4;
                    zulu = _closure1_slot17;
                    mike = tango >= zulu;
 48:
                    if(!mike) { _fun00012_ip = 108; continue _fun00011 }
 51:
                    tango = _closure2_slot6;
                    zulu = undefined;
                    mike = true;
                    mike = tango.bind(zulu)(mike);
                    _fun00012_ip = 108; continue _fun00011;
 66:
                    tango = _closure2_slot5;
                    zulu = undefined;
                    mike = 0;
                    mike = tango.bind(zulu)(mike);
                    tango = _closure2_slot6;
                    mike = false;
                    mike = tango.bind(zulu)(mike);
                    mike = _closure2_slot8;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
 108:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            offset = null;
            mike = offset == source;
            entity = null;
            if(mike) { _fun00008_ip = 862; continue _fun00007 }
 526:
            tango = _closure1_slot16;
            zulu = _closure1_slot5;
            mike = {};
            oscar = function(argFoo) { // Original name: onLayout
                zulu = _closure2_slot5;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                mike = entity.height;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike['onLayout'] = oscar;
            golf = result.outerCardContainer;
            oscar = new Array(1);
            oscar[0] = golf;
            mike['style'] = oscar;
            oscar = 'none';
            mike['pointerEvents'] = oscar;
            romeo = _closure1_slot16;
            golf = _closure1_slot5;
            oscar = {};
            backup = result.messagesContainer;
            foxtrot = new Array(2);
            foxtrot[0] = backup;
            backup = yankee;
            if(!backup) { _fun00008_ip = 611; continue _fun00007 }
 605:
            backup = result.messagesContainerGradient;
 611:
            foxtrot[1] = backup;
            oscar['style'] = foxtrot;
            kilo = _closure1_slot15;
            backup = _closure1_slot5;
            foxtrot = {};
            update = result.messages;
            output = new Array(2);
            output[0] = update;
            update = {};
            control = 0;
            if(!verify) { _fun00008_ip = 681; continue _fun00007 }
 650:
            sequence = _closure1_slot1;
            config = _closure1_slot2;
            vacuum = 12;
            vacuum = config[vacuum];
            vacuum = sequence.bind(report)(vacuum);
            vacuum = vacuum.spacing;
            control = vacuum.PX_12;
 681:
            update['paddingBottom'] = control;
            output[1] = update;
            foxtrot['style'] = output;
            output = echo.map;
            sizing = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot15;
                tango = _closure1_slot19;
                zulu = {};
                oscar = _closure2_slot2;
                zulu['muted'] = oscar;
                oscar = _closure2_slot1;
                zulu['channel'] = oscar;
                zulu['message'] = entity;
                mike = _closure2_slot3;
                zulu['showTimestamps'] = mike;
                mike = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            sizing = output.bind(echo)(sizing);
            foxtrot['children'] = sizing;
            backup = kilo.bind(report)(backup, foxtrot);
            foxtrot = new Array(2);
            foxtrot[0] = backup;
            backup = null;
            if(!verify) { _fun00008_ip = 800; continue _fun00007 }
 734:
            output = _closure1_slot15;
            sizing = _closure1_slot5;
            kilo = {};
            result = result.typingArea;
            kilo['style'] = result;
            update = _closure1_slot15;
            echo = _closure1_slot1;
            control = _closure1_slot2;
            result = 28;
            result = control[result];
            echo = echo.bind(report)(result);
            result = {};
            result['channel'] = source;
            result = update.bind(report)(echo, result);
            kilo['children'] = result;
            backup = output.bind(report)(sizing, kilo);
 800:
            foxtrot[1] = backup;
            oscar['children'] = foxtrot;
            golf = romeo.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            golf = null;
            if(!yankee) { _fun00008_ip = 848; continue _fun00007 }
 827:
            golf = null;
            if(verify) { _fun00008_ip = 848; continue _fun00007 }
 832:
            offset = _closure1_slot15;
            verify = _closure1_slot20;
            options = {};
            golf = offset.bind(report)(verify, options);
 848:
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 862:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = romeo.bind(entity)(mike);
    var _closure1_slot3 = mike;
    kilo = 1;
    report = golf[kilo];
    mike = argCorge;
    mike = mike.bind(entity)(report);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.View;
    var _closure1_slot5 = mike;
    mike = 3;
    report = golf[mike];
    report = romeo.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    foxtrot = report.ICYMI_MARGIN;
    var _closure1_slot11 = foxtrot;
    backup = report.MESSAGE_CONTENT_INSET;
    report = 9;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.ComponentActions;
    var _closure1_slot12 = options;
    options = report.DEFAULT_ROLE_COLOR;
    var _closure1_slot13 = options;
    report = report.MessageEmbedTypes;
    var _closure1_slot14 = report;
    report = 10;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot15 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot16 = report;
    report = 460;
    var _closure1_slot17 = report;
    report = 11;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = {};
    offset = {};
    offset['flex'] = kilo;
    offset['paddingLeft'] = backup;
    report['pressable'] = offset;
    offset = {};
    offset['marginHorizontal'] = foxtrot;
    report['container'] = offset;
    offset = {'maxHeight': 461, 'display': 'flex', 'overflow': 'hidden', 'borderRadius': null, 'borderColor': null, 'borderWidth': 1};
    yankee = 12;
    sizing = golf[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.lg;
    offset['borderRadius'] = sizing;
    sizing = golf[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BORDER_SUBTLE;
    offset['borderColor'] = sizing;
    report['outerCardContainer'] = offset;
    offset = {};
    sizing = 360;
    offset['maxHeight'] = sizing;
    report['activeContainer'] = offset;
    offset = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
    sizing = 'row';
    output = golf[yankee];
    output = romeo.bind(entity)(output);
    output = output.spacing;
    output = output.PX_8;
    offset['gap'] = output;
    report['channelHeader'] = offset;
    offset = {};
    offset['flexDirection'] = sizing;
    sizing = golf[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    offset['gap'] = sizing;
    report['messageContainer'] = offset;
    offset = {};
    offset['paddingHorizontal'] = foxtrot;
    sizing = golf[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    offset['gap'] = sizing;
    report['messages'] = offset;
    offset = {};
    offset['flex'] = kilo;
    report['messageContent'] = offset;
    offset = {'position': 'absolute', 'width': '100%', 'bottom': 0, 'minHeight': 104, 'borderBottomEndRadius': null, 'paddingBottom': 16};
    kilo = golf[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.lg;
    offset['borderBottomEndRadius'] = kilo;
    report['linearGradient'] = offset;
    offset = {};
    kilo = golf[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    offset['marginTop'] = kilo;
    kilo = 'none';
    offset['pointerEvents'] = kilo;
    report['emojiContainer'] = offset;
    offset = {};
    kilo = 'flex-end';
    offset['justifyContent'] = kilo;
    offset['paddingLeft'] = backup;
    report['footer'] = offset;
    offset = {};
    offset['paddingVertical'] = foxtrot;
    offset['gap'] = foxtrot;
    report['messagesContainer'] = offset;
    offset = {'maxHeight': 458, 'marginBottom': 4, 'overflow': 'hidden'};
    report['messagesContainerGradient'] = offset;
    offset = {'marginLeft': 22, 'marginBottom': 22, 'flexDirection': 'row', 'alignItems': 'center'};
    report['viewMoreContainer'] = offset;
    offset = {'position': 'absolute', 'left': 22, 'bottom': 22, 'flexDirection': 'row', 'alignItems': 'center', 'zIndex': 5};
    report['viewMoreContainerAbsolute'] = offset;
    offset = {'height': 20, 'width': 20, 'marginRight': 18};
    report['viewMoreIcon'] = offset;
    offset = {'height': 20, 'width': 20};
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_4;
    offset['marginLeft'] = yankee;
    report['rightArrowIcon'] = offset;
    offset = {'position': 'absolute', 'width': '100%', 'height': 24, 'bottom': 0};
    report['typingArea'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot18 = report;
    report = 39;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/gravity/GravityConversationSummaryRow.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: GravityConversationSummaryRow
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            kilo = entity.topic;
            var _closure2_slot0 = kilo;
            options = entity.disableInteractions;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            update = function(argFoo) { // Original name: convertToWords
                mike = argFoo;
                entity = mike.toLowerCase;
                tango = entity.bind(mike)();
                zulu = tango.replace;
                mike = /[.,\\/#!$%\^&\*;:{}=\-_`~()]/g;
                entity = '';
                tango = zulu.bind(tango)(mike, entity);
                mike = tango.replace;
                entity = /\s{2,}/g;
                zulu = ' ';
                mike = mike.bind(tango)(entity, zulu);
                entity = mike.split;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            entity = _closure1_slot18;
            romeo = entity.bind(report)();
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            foxtrot = 13;
            zulu = entity[foxtrot];
            verify = mike.bind(report)(zulu);
            oscar = verify.useStateFromStores;
            zulu = _closure1_slot6;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sizing = oscar.bind(verify)(tango, zulu);
            var _closure2_slot1 = sizing;
            entity = entity[foxtrot];
            tango = mike.bind(report)(entity);
            zulu = tango.useStateFromStores;
            entity = _closure1_slot8;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = _closure1_slot8;
                    mike = zulu.getGuild;
                    report = _closure2_slot1;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00016_ip = 44; continue _fun00015 }
 30:
                    report = _closure2_slot1;
                    tango = report.getGuildId;
                    entity = tango.bind(report)();
 44:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            result = zulu.bind(tango)(mike, entity);
            var _closure2_slot2 = result;
            entity = kilo.messages;
            zulu = 0;
            mike = entity[zulu];
            entity = null;
            tango = entity == mike;
            verify = undefined;
            if(tango) { _fun00014_ip = 187; continue _fun00013 }
 181:
            verify = mike.author;
 187:
            offset = _closure1_slot1;
            mike = _closure1_slot2;
            oscar = 21;
            tango = mike[oscar];
            output = offset.bind(report)(tango);
            backup = output.age;
            echo = kilo.messageIds;
            tango = kilo.messageIds;
            tango = tango.length;
            offset = 1;
            tango = tango - offset;
            tango = echo[tango];
            output = backup.bind(output)(tango);
            tango = _closure1_slot0;
            backup = 16;
            backup = mike[backup];
            backup = tango.bind(report)(backup);
            backup = backup.ACTIVE_CONVERSATION_AGE;
            backup = output < backup;
            _closure2_slot3 = backup;
            mike = mike[foxtrot];
            output = tango.bind(report)(mike);
            foxtrot = output.useStateFromStores;
            mike = _closure1_slot9;
            tango = new Array(1);
            tango[0] = mike;
            mike = function() {
                zulu = _closure1_slot9;
                mike = zulu.getMessages;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = foxtrot.bind(output)(tango, mike);
            if(!backup) { _fun00014_ip = 333; continue _fun00013 }
 318:
            tango = mike._array;
            tango = tango.length;
            if(!(!(tango > zulu))) { _fun00014_ip = 355; continue _fun00013 }
 333:
            output = kilo.messages;
            foxtrot = output.slice;
            tango = 3;
            tango = foxtrot.bind(output)(zulu, tango);
            _fun00014_ip = 389; continue _fun00013;
 355:
            output = mike._array;
            foxtrot = output.slice;
            mike = mike._array;
            echo = mike.length;
            mike = 3;
            mike = echo - mike;
            tango = foxtrot.bind(output)(mike);
 389:
            _closure2_slot4 = tango;
            mike = tango.length;
            mike = mike - offset;
            offset = tango[mike];
            foxtrot = entity == offset;
            mike = undefined;
            if(foxtrot) { _fun00014_ip = 420; continue _fun00013 }
 415:
            mike = offset.id;
 420:
            _closure2_slot5 = mike;
            output = _closure1_slot4;
            foxtrot = output.useMemo;
            offset = new Array(1);
            offset[0] = tango;
            tango = function() {
                zulu = _closure2_slot4;
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.author;
                    entity = entity.id;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = foxtrot.bind(output)(tango, offset);
            _closure2_slot6 = tango;
            output = _closure1_slot4;
            foxtrot = output.useEffect;
            offset = entity == result;
            echo = undefined;
            if(offset) { _fun00014_ip = 481; continue _fun00013 }
 476:
            echo = result.id;
 481:
            offset = new Array(2);
            offset[0] = echo;
            offset[1] = tango;
            tango = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot2;
                    oscar = null;
                    tango = oscar == entity;
                    entity = undefined;
                    zulu = undefined;
                    if(tango) { _fun00018_ip = 29; continue _fun00017 }
 20:
                    tango = _closure2_slot2;
                    zulu = tango.id;
 29:
                    if(!(oscar != zulu)) { _fun00018_ip = 94; continue _fun00017 }
 33:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 29;
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.requestMembersById;
                    zulu = _closure2_slot2;
                    oscar = oscar == zulu;
                    zulu = undefined;
                    if(oscar) { _fun00018_ip = 84; continue _fun00017 }
 75:
                    oscar = _closure2_slot2;
                    zulu = oscar.id;
 84:
                    mike = _closure2_slot6;
                    mike = tango.bind(report)(zulu, mike);
 94:
                    return entity;
                }
            };
            tango = foxtrot.bind(output)(tango, offset);
            output = _closure1_slot4;
            foxtrot = output.useEffect;
            offset = new Array(3);
            offset[0] = result;
            offset[1] = sizing;
            offset[2] = backup;
            tango = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    mike = _closure2_slot3;
                    if(!mike) { _fun00020_ip = 20; continue _fun00019 }
 10:
                    tango = _closure2_slot2;
                    zulu = null;
                    mike = zulu != tango;
 20:
                    if(!mike) { _fun00020_ip = 33; continue _fun00019 }
 23:
                    tango = _closure2_slot1;
                    zulu = null;
                    mike = zulu != tango;
 33:
                    if(!mike) { _fun00020_ip = 81; continue _fun00019 }
 36:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 30;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.subscribeGuild;
                    entity = _closure2_slot2;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
 81:
                    entity = undefined;
                    return entity;
                }
            };
            tango = foxtrot.bind(output)(tango, offset);
            foxtrot = _closure1_slot4;
            offset = foxtrot.useCallback;
            tango = new Array(7);
            tango[0] = sizing;
            tango[1] = result;
            output = kilo.id;
            tango[2] = output;
            output = kilo.startId;
            tango[3] = output;
            output = kilo.type;
            tango[4] = output;
            tango[5] = mike;
            tango[6] = backup;
            mike = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    report = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscar = 31;
                    zulu = yankee[oscar];
                    entity = undefined;
                    verify = report.bind(entity)(zulu);
                    options = verify.trackItemInteraction;
                    tango = _closure2_slot0;
                    golf = tango.id;
                    offset = tango.type;
                    tango = 32;
                    tango = yankee[tango];
                    tango = report.bind(entity)(tango);
                    tango = tango.SummaryType;
                    tango = tango.SOURCE_1;
                    report = 'summary';
                    if(!(offset === tango)) { _fun00022_ip = 86; continue _fun00021 }
 80:
                    report = 'summary_regenerated';
 86:
                    tango = 'press_summary';
                    tango = options.bind(verify)(golf, report, tango);
                    tango = _closure2_slot1;
                    golf = null;
                    if(!(golf != tango)) { _fun00022_ip = 117; continue _fun00021 }
 109:
                    tango = _closure2_slot2;
                    if(!(golf == tango)) { _fun00022_ip = 224; continue _fun00021 }
 117:
                    tango = _closure2_slot1;
                    tango = golf != tango;
                    if(!tango) { _fun00022_ip = 142; continue _fun00021 }
 128:
                    options = _closure2_slot1;
                    report = options.isDM;
                    tango = report.bind(options)();
 142:
                    if(tango) { _fun00022_ip = 173; continue _fun00021 }
 145:
                    report = _closure2_slot1;
                    report = golf != report;
                    if(!report) { _fun00022_ip = 170; continue _fun00021 }
 156:
                    options = _closure2_slot1;
                    golf = options.isGroupDM;
                    report = golf.bind(options)();
 170:
                    tango = report;
 173:
                    if(!tango) { _fun00022_ip = 431; continue _fun00021 }
 179:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 35;
                    tango = golf[tango];
                    golf = report.bind(entity)(tango);
                    report = golf.transitionToChannel;
                    tango = _closure2_slot1;
                    tango = tango.id;
                    tango = report.bind(golf)(tango);
                    _fun00022_ip = 431; continue _fun00021;
 224:
                    tango = _closure2_slot3;
                    if(tango) { _fun00022_ip = 329; continue _fun00021 }
 231:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 34;
                    tango = golf[tango];
                    yankee = report.bind(entity)(tango);
                    offset = yankee.setGravitySelectedSummary;
                    report = _closure2_slot1;
                    verify = report.id;
                    tango = _closure2_slot0;
                    options = tango.id;
                    options = offset.bind(yankee)(verify, options);
                    options = _closure1_slot0;
                    golf = golf[oscar];
                    verify = options.bind(entity)(golf);
                    options = verify.navigateToPost;
                    golf = report.id;
                    report = _closure2_slot2;
                    report = report.id;
                    tango = tango.startId;
                    tango = options.bind(verify)(golf, report, tango);
                    _fun00022_ip = 431; continue _fun00021;
 329:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    oscar = report[oscar];
                    offset = tango.bind(entity)(oscar);
                    verify = offset.navigateToPost;
                    oscar = _closure2_slot1;
                    options = oscar.id;
                    golf = _closure2_slot2;
                    golf = golf.id;
                    zulu = _closure2_slot5;
                    zulu = verify.bind(offset)(options, golf, zulu);
                    zulu = 33;
                    zulu = report[zulu];
                    zulu = tango.bind(entity)(zulu);
                    report = zulu.ComponentDispatch;
                    tango = report.dispatch;
                    mike = _closure1_slot12;
                    zulu = mike.TEXTAREA_FOCUS;
                    mike = {};
                    oscar = oscar.id;
                    mike['channelId'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
 431:
                    return entity;
                }
            };
            foxtrot = offset.bind(foxtrot)(mike, tango);
            output = _closure1_slot4;
            offset = output.useCallback;
            mike = kilo.channelId;
            tango = new Array(3);
            tango[0] = mike;
            mike = kilo.id;
            tango[1] = mike;
            mike = kilo.type;
            tango[2] = mike;
            mike = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    report = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 31;
                    mike = offset[entity];
                    entity = undefined;
                    options = report.bind(entity)(mike);
                    golf = options.trackItemInteraction;
                    tango = _closure2_slot0;
                    oscar = tango.id;
                    verify = tango.type;
                    tango = 32;
                    tango = offset[tango];
                    tango = report.bind(entity)(tango);
                    tango = tango.SummaryType;
                    tango = tango.SOURCE_1;
                    report = 'summary';
                    if(!(verify === tango)) { _fun00024_ip = 86; continue _fun00023 }
 80:
                    report = 'summary_regenerated';
 86:
                    tango = 'long_press_channel';
                    tango = golf.bind(options)(oscar, report, tango);
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 36;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.openChannelLongPressActionSheet;
                    mike = _closure2_slot0;
                    mike = mike.channelId;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            offset = offset.bind(output)(mike, tango);
            if(!(entity != sizing)) { _fun00014_ip = 1727; continue _fun00013 }
 674:
            mike = sizing.guild_id;
            if(!(entity != mike)) { _fun00014_ip = 1727; continue _fun00013 }
 686:
            if(!(entity != result)) { _fun00014_ip = 1727; continue _fun00013 }
 693:
            if(!(entity != verify)) { _fun00014_ip = 1727; continue _fun00013 }
 700:
            output = global;
            echo = output.Set;
            mike = kilo.messages;
            mike = mike[zulu];
            mike = mike.content;
            source = update.bind(report)(mike);
            tango = source.filter;
            mike = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tango = argFoo;
                    mike = tango.startsWith;
                    entity = 'http';
                    entity = mike.bind(tango)(entity);
                    entity = !entity;
                    if(!entity) { _fun00026_ip = 42; continue _fun00025 }
 24:
                    zulu = tango.startsWith;
                    mike = 'https';
                    mike = zulu.bind(tango)(mike);
                    entity = !mike;
 42:
                    return entity;
                }
            };
            status = tango.bind(source)(mike);
            tango = echo.prototype;
            tango = Object.create(tango, {constructor: {value: echo}});
            sierra = tango;
            mike = new sierra[echo](status, target);
            echo = mike instanceof Object ? mike : tango;
            source = output.Set;
            mike = kilo.topic;
            status = update.bind(report)(mike);
            tango = source.prototype;
            tango = Object.create(tango, {constructor: {value: source}});
            sierra = tango;
            mike = new sierra[source](status, target);
            tango = mike instanceof Object ? mike : tango;
            source = output.Set;
            mike = kilo.summShort;
            status = update.bind(report)(mike);
            update = source.prototype;
            update = Object.create(update, {constructor: {value: source}});
            sierra = update;
            mike = new sierra[source](status, target);
            mike = mike instanceof Object ? mike : update;
            _closure2_slot7 = mike;
            source = output.Array;
            update = source.from;
            control = update.bind(source)(echo);
            source = control.filter;
            update = function(argFoo) {
                zulu = _closure2_slot7;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            update = source.bind(control)(update);
            update = update.length;
            echo = echo.size;
            control = update / echo;
            echo = output.Array;
            output = echo.from;
            echo = output.bind(echo)(tango);
            output = echo.filter;
            golf = function(argFoo) {
                zulu = _closure2_slot7;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = output.bind(echo)(golf);
            golf = golf.length;
            tango = tango.size;
            golf = golf / tango;
            tango = 0.8;
            update = golf > tango;
            if(!update) { _fun00014_ip = 966; continue _fun00013 }
 954:
            tango = mike.size;
            mike = 15;
            update = tango < mike;
 966:
            mike = kilo.summShort;
            mike = mike.length;
            vacuum = zulu === mike;
            if(!vacuum) { _fun00014_ip = 999; continue _fun00013 }
 984:
            mike = kilo.topic;
            mike = mike.length;
            vacuum = zulu === mike;
 999:
            tango = _closure1_slot16;
            golf = _closure1_slot0;
            output = _closure1_slot2;
            mike = 31;
            mike = output[mike];
            mike = golf.bind(report)(mike);
            zulu = mike.SummaryContentPost;
            mike = {};
            mike['channel'] = sizing;
            mike['guild'] = result;
            mike['author'] = verify;
            verify = kilo.id;
            mike['id'] = verify;
            verify = _closure1_slot1;
            oscar = output[oscar];
            result = verify.bind(report)(oscar);
            verify = result.extractTimestamp;
            oscar = kilo.endId;
            oscar = verify.bind(result)(oscar);
            mike['timestamp'] = oscar;
            mike['disableInteractions'] = options;
            verify = kilo.type;
            oscar = 32;
            oscar = output[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.SummaryType;
            golf = oscar.SOURCE_1;
            oscar = 'summary';
            if(!(verify === golf)) { _fun00014_ip = 1136; continue _fun00013 }
 1130:
            oscar = 'summary_regenerated';
 1136:
            mike['type'] = oscar;
            mike['onHeaderPress'] = foxtrot;
            mike['onHeaderLongPress'] = offset;
            mike['isActive'] = backup;
            verify = _closure1_slot15;
            golf = _closure1_slot0;
            output = _closure1_slot2;
            oscar = 37;
            oscar = output[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.PressableHighlight;
            oscar = {};
            oscar['onPress'] = foxtrot;
            oscar['onLongPress'] = offset;
            offset = 'button';
            oscar['accessibilityRole'] = offset;
            offset = 130;
            oscar['unstable_pressDelay'] = offset;
            offset = romeo.pressable;
            oscar['style'] = offset;
            oscar['disabled'] = options;
            output = _closure1_slot16;
            foxtrot = _closure1_slot5;
            offset = {};
            result = romeo.container;
            offset['style'] = result;
            echo = null;
            if(vacuum) { _fun00014_ip = 1350; continue _fun00013 }
 1250:
            sequence = _closure1_slot15;
            source = _closure1_slot0;
            context = _closure1_slot2;
            result = 19;
            result = context[result];
            result = source.bind(report)(result);
            source = result.Text;
            result = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            record = _closure1_slot1;
            config = 22;
            config = context[config];
            papa = record.bind(report)(config);
            context = papa.parseInlineReply;
            if(update) { _fun00014_ip = 1326; continue _fun00013 }
 1318:
            record = kilo.topic;
            _fun00014_ip = 1332; continue _fun00013;
 1326:
            record = kilo.summShort;
 1332:
            config = true;
            config = context.bind(papa)(record, config);
            result['children'] = config;
            echo = sequence.bind(report)(source, result);
 1350:
            result = new Array(3);
            result[0] = echo;
            echo = null;
            if(vacuum) { _fun00014_ip = 1489; continue _fun00013 }
 1366:
            source = 0.7;
            echo = null;
            if(!(!(control > source))) { _fun00014_ip = 1489; continue _fun00013 }
 1382:
            echo = null;
            if(update) { _fun00014_ip = 1489; continue _fun00013 }
 1387:
            control = _closure1_slot15;
            source = _closure1_slot0;
            record = _closure1_slot2;
            update = 19;
            update = record[update];
            update = source.bind(report)(update);
            source = update.Text;
            update = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            sequence = {};
            config = 8;
            sequence['marginTop'] = config;
            update['style'] = sequence;
            config = _closure1_slot1;
            sequence = 22;
            sequence = record[sequence];
            context = config.bind(report)(sequence);
            record = context.parseInlineReply;
            config = kilo.summShort;
            sequence = true;
            sequence = record.bind(context)(config, sequence);
            update['children'] = sequence;
            echo = control.bind(report)(source, update);
 1489:
            result[1] = echo;
            source = _closure1_slot15;
            update = _closure1_slot5;
            echo = {};
            control = {};
            if(vacuum) { _fun00014_ip = 1514; continue _fun00013 }
 1508:
            vacuum = _closure1_slot11;
            _fun00014_ip = 1545; continue _fun00013;
 1514:
            config = _closure1_slot1;
            record = _closure1_slot2;
            sequence = 12;
            sequence = record[sequence];
            sequence = config.bind(report)(sequence);
            sequence = sequence.spacing;
            vacuum = sequence.PX_4;
 1545:
            control['marginTop'] = vacuum;
            vacuum = _closure1_slot11;
            control['marginBottom'] = vacuum;
            echo['style'] = control;
            sequence = _closure1_slot15;
            vacuum = _closure1_slot21;
            control = {};
            control['topic'] = kilo;
            control = sequence.bind(report)(vacuum, control);
            echo['children'] = control;
            echo = source.bind(report)(update, echo);
            result[2] = echo;
            offset['children'] = result;
            offset = output.bind(report)(foxtrot, offset);
            oscar['children'] = offset;
            golf = verify.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            golf = null;
            if(options) { _fun00014_ip = 1711; continue _fun00013 }
 1629:
            offset = _closure1_slot15;
            verify = _closure1_slot5;
            options = {};
            romeo = romeo.footer;
            options['style'] = romeo;
            foxtrot = _closure1_slot15;
            romeo = _closure1_slot0;
            output = _closure1_slot2;
            yankee = 38;
            yankee = output[yankee];
            yankee = romeo.bind(report)(yankee);
            romeo = yankee.SummaryShareRow;
            yankee = {};
            yankee['channel'] = sizing;
            yankee['topic'] = kilo;
            yankee['active'] = backup;
            yankee = foxtrot.bind(report)(romeo, yankee);
            options['children'] = yankee;
            golf = offset.bind(report)(verify, options);
 1711:
            oscar[1] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 1727:
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['MAX_AVATARS_IN_PILE'] = mike;
    return entity;
})();