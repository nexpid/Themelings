// app/modules/main_tabs_v2/native/tabs/gravity/GravityMessageRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: MessageRowContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            backup = zulu.message;
            var _closure2_slot0 = backup;
            mike = zulu.channel;
            var _closure2_slot1 = mike;
            romeo = zulu.lineClamp;
            tango = undefined;
            if(!(romeo === tango)) { _fun00002_ip = 38; continue _fun00001 }
 35:
            romeo = 3;
 38:
            verify = zulu.nested;
            if(!(verify === tango)) { _fun00002_ip = 50; continue _fun00001 }
 48:
            verify = false;
 50:
            echo = zulu.visible;
            if(!(echo === tango)) { _fun00002_ip = 62; continue _fun00001 }
 60:
            echo = false;
 62:
            zulu = _closure1_slot20;
            yankee = zulu.bind(tango)();
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            oscar = 14;
            oscar = report[oscar];
            options = zulu.bind(tango)(oscar);
            golf = options.extractMediaSourcesFromMessage;
            control = mike.guild_id;
            mike = 15;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            source = mike.GRAVITY_VALID_EMBED_TYPES;
            config = options;
            sequence = backup;
            vacuum = backup;
            oscar = config[golf](sequence, vacuum, control, source, update);
            mike = 16;
            mike = report[mike];
            golf = zulu.bind(tango)(mike);
            report = golf.useStateFromStores;
            mike = _closure1_slot9;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                tango = _closure1_slot9;
                zulu = tango.isChannelMuted;
                entity = _closure2_slot1;
                mike = entity.getGuildId;
                mike = mike.bind(entity)();
                entity = entity.id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            foxtrot = report.bind(golf)(zulu, mike);
            golf = _closure1_slot3;
            report = golf.useMemo;
            mike = backup.attachments;
            mike = mike.length;
            zulu = new Array(3);
            zulu[0] = mike;
            mike = backup.content;
            zulu[1] = mike;
            mike = backup.embeds;
            zulu[2] = mike;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    entity = entity.embeds;
                    mike = entity.length;
                    entity = 1;
                    mike = entity !== mike;
                    if(mike) { _fun00004_ip = 49; continue _fun00003 }
 28:
                    entity = _closure2_slot0;
                    entity = entity.attachments;
                    tango = entity.length;
                    entity = 0;
                    mike = tango > entity;
 49:
                    entity = !mike;
                    if(mike) { _fun00004_ip = 127; continue _fun00003 }
 55:
                    mike = _closure2_slot0;
                    mike = mike.embeds;
                    report = 0;
                    mike = mike[report];
                    tango = mike.type;
                    mike = _closure1_slot15;
                    mike = mike.GIFV;
                    mike = tango === mike;
                    if(!mike) { _fun00004_ip = 124; continue _fun00003 }
 96:
                    zulu = _closure2_slot0;
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
            report = report.bind(golf)(mike, zulu);
            zulu = backup.attachments;
            mike = zulu.every;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    tango = entity.content_type;
                    entity = null;
                    mike = entity == tango;
                    entity = undefined;
                    if(mike) { _fun00006_ip = 37; continue _fun00005 }
 20:
                    zulu = tango.startsWith;
                    mike = 'audio/';
                    entity = zulu.bind(tango)(mike);
 37:
                    return entity;
                }
            };
            kilo = mike.bind(zulu)(entity);
            zulu = _closure1_slot17;
            mike = _closure1_slot4;
            entity = {};
            options = yankee.messagePreview;
            golf = new Array(2);
            golf[0] = options;
            options = null;
            if(verify) { _fun00002_ip = 304; continue _fun00001 }
 290:
            verify = {};
            sizing = _closure1_slot11;
            verify['paddingLeft'] = sizing;
            options = verify;
 304:
            golf[1] = options;
            entity['style'] = golf;
            golf = !report;
            if(!golf) { _fun00002_ip = 456; continue _fun00001 }
 321:
            verify = _closure1_slot16;
            options = _closure1_slot0;
            sizing = _closure1_slot2;
            report = 17;
            report = sizing[report];
            report = options.bind(tango)(report);
            options = report.MessageRowPreview;
            report = {};
            report['message'] = backup;
            report['muted'] = foxtrot;
            report['lineClamp'] = romeo;
            sizing = oscar.length;
            output = 0;
            romeo = undefined;
            if(!(output === sizing)) { _fun00002_ip = 429; continue _fun00001 }
 380:
            sizing = backup.attachments;
            sizing = sizing.length;
            sizing = sizing > output;
            romeo = undefined;
            if(!sizing) { _fun00002_ip = 429; continue _fun00001 }
 400:
            sizing = backup.embeds;
            sizing = sizing.length;
            romeo = undefined;
            if(!(output === sizing)) { _fun00002_ip = 429; continue _fun00001 }
 417:
            sizing = {};
            output = true;
            sizing['renderAttachments'] = output;
            romeo = sizing;
 429:
            report['messageOptions'] = romeo;
            romeo = 'none';
            if(!kilo) { _fun00002_ip = 445; continue _fun00001 }
 441:
            romeo = 'auto';
 445:
            report['pointerEvents'] = romeo;
            golf = verify.bind(tango)(options, report);
 456:
            report = new Array(3);
            report[0] = golf;
            golf = oscar.length;
            options = 0;
            golf = golf > options;
            if(!golf) { _fun00002_ip = 594; continue _fun00001 }
 478:
            kilo = _closure1_slot16;
            romeo = _closure1_slot4;
            verify = {};
            output = yankee.media;
            sizing = new Array(2);
            sizing[0] = output;
            output = backup.content;
            output = output.length;
            output = options === output;
            if(!output) { _fun00002_ip = 535; continue _fun00001 }
 519:
            result = {};
            update = _closure1_slot11;
            update = -update;
            result['marginTop'] = update;
            output = result;
 535:
            sizing[1] = output;
            verify['style'] = sizing;
            result = _closure1_slot16;
            output = _closure1_slot1;
            update = _closure1_slot2;
            sizing = 18;
            sizing = update[sizing];
            output = output.bind(tango)(sizing);
            sizing = {};
            sizing['message'] = backup;
            sizing['visible'] = echo;
            sizing = result.bind(tango)(output, sizing);
            verify['children'] = sizing;
            golf = kilo.bind(tango)(romeo, verify);
 594:
            report[1] = golf;
            oscar = oscar.length;
            oscar = options === oscar;
            if(!oscar) { _fun00002_ip = 625; continue _fun00001 }
 610:
            golf = backup.embeds;
            golf = golf.length;
            oscar = golf > options;
 625:
            if(!oscar) { _fun00002_ip = 713; continue _fun00001 }
 628:
            verify = _closure1_slot16;
            options = _closure1_slot4;
            golf = {};
            yankee = yankee.media;
            golf['style'] = yankee;
            romeo = _closure1_slot16;
            yankee = _closure1_slot0;
            kilo = _closure1_slot2;
            offset = 17;
            offset = kilo[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.NonMediaEmbedsRowPreview;
            offset = {};
            offset['message'] = backup;
            offset['muted'] = foxtrot;
            foxtrot = 3;
            offset['lineClamp'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 713:
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot22 = mike;
    entity = function(argFoo) { // Original name: ReplyMessageContent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            vacuum = mike.message;
            var _closure2_slot0 = vacuum;
            control = mike.channel;
            source = mike.guild;
            var _closure2_slot1 = source;
            mike = _closure1_slot20;
            report = undefined;
            offset = mike.bind(report)();
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 16;
            oscar = tango[mike];
            verify = zulu.bind(report)(oscar);
            options = verify.useStateFromStores;
            oscar = _closure1_slot10;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot10;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sierra = options.bind(verify)(golf, oscar);
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.useStateFromStores;
            oscar = _closure1_slot6;
            mike = new Array(1);
            mike[0] = oscar;
            entity = function() {
                tango = _closure1_slot6;
                zulu = tango.getMember;
                mike = _closure2_slot1;
                mike = mike.id;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike, entity);
            entity = null;
            zulu = entity == mike;
            papa = undefined;
            if(zulu) { _fun00008_ip = 147; continue _fun00007 }
 141:
            papa = mike.colorString;
 147:
            if(!(entity == papa)) { _fun00008_ip = 186; continue _fun00007 }
 151:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 19;
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.int2hex;
            mike = _closure1_slot14;
            papa = zulu.bind(tango)(mike);
 186:
            tango = _closure1_slot3;
            zulu = tango.useContext;
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            echo = 20;
            mike = mike[echo];
            mike = oscar.bind(report)(mike);
            mike = mike.ICYMIContext;
            mike = zulu.bind(tango)(mike);
            config = mike.width;
            mike = entity == sierra;
            entity = null;
            if(mike) { _fun00008_ip = 819; continue _fun00007 }
 244:
            tango = _closure1_slot17;
            zulu = _closure1_slot4;
            mike = {};
            oscar = offset.replyPreview;
            mike['style'] = oscar;
            options = _closure1_slot16;
            sizing = _closure1_slot0;
            kilo = _closure1_slot2;
            backup = 21;
            oscar = kilo[backup];
            oscar = sizing.bind(report)(oscar);
            golf = oscar.Text;
            oscar = {'variant': 'text-sm/semibold', 'color': 'text-muted'};
            verify = {};
            yankee = 'italic';
            verify['fontStyle'] = yankee;
            oscar['style'] = verify;
            verify = 22;
            yankee = kilo[verify];
            yankee = sizing.bind(report)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            verify = kilo[verify];
            verify = sizing.bind(report)(verify);
            verify = verify.t;
            verify = verify.mPPce3;
            verify = yankee.bind(romeo)(verify);
            oscar['children'] = verify;
            golf = options.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            verify = _closure1_slot17;
            options = _closure1_slot4;
            golf = {};
            offset = offset.replyInner;
            golf['style'] = offset;
            romeo = _closure1_slot16;
            yankee = _closure1_slot1;
            foxtrot = 23;
            offset = kilo[foxtrot];
            yankee = yankee.bind(report)(offset);
            offset = {};
            output = false;
            offset['animate'] = output;
            output = source.id;
            offset['guildId'] = output;
            offset['user'] = sierra;
            foxtrot = kilo[foxtrot];
            foxtrot = sizing.bind(report)(foxtrot);
            foxtrot = foxtrot.AvatarSizes;
            foxtrot = foxtrot.SMALL;
            offset['size'] = foxtrot;
            yankee = romeo.bind(report)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            foxtrot = _closure1_slot17;
            romeo = _closure1_slot4;
            yankee = {};
            output = {};
            update = 4;
            output['gap'] = update;
            update = _closure1_slot13;
            record = config - update;
            update = _closure1_slot12;
            sequence = 2;
            update = sequence * update;
            record = record - update;
            update = _closure1_slot18;
            update = sequence * update;
            context = _closure1_slot19;
            update = record - update;
            record = 30;
            update = update - record;
            update = update - context;
            update = update - sequence;
            output['width'] = update;
            yankee['style'] = output;
            update = _closure1_slot16;
            backup = kilo[backup];
            backup = sizing.bind(report)(backup);
            output = backup.Text;
            backup = {'variant': 'text-md/semibold', 'style': null, 'lineClamp': 1};
            context = {};
            context['color'] = papa;
            backup['style'] = context;
            context = 24;
            context = kilo[context];
            status = sizing.bind(report)(context);
            target = status.getName;
            papa = source.id;
            context = control.id;
            context = target.bind(status)(papa, context, sierra);
            backup['children'] = context;
            output = update.bind(report)(output, backup);
            backup = new Array(2);
            backup[0] = output;
            output = _closure1_slot16;
            kilo = kilo[echo];
            kilo = sizing.bind(report)(kilo);
            kilo = kilo.ICYMIContext;
            sizing = kilo.Provider;
            kilo = {};
            echo = {};
            update = _closure1_slot18;
            update = sequence * update;
            update = config - update;
            config = _closure1_slot19;
            update = update - record;
            update = update - config;
            update = update - sequence;
            echo['width'] = update;
            kilo['value'] = echo;
            update = _closure1_slot16;
            echo = _closure1_slot22;
            result = {};
            result['message'] = vacuum;
            result['channel'] = control;
            result['guild'] = source;
            source = true;
            result['nested'] = source;
            result = update.bind(report)(echo, result);
            kilo['children'] = result;
            kilo = output.bind(report)(sizing, kilo);
            backup[1] = kilo;
            yankee['children'] = backup;
            yankee = foxtrot.bind(report)(romeo, yankee);
            offset[1] = yankee;
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 819:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    verify = golf[entity];
    report = argCorge;
    entity = undefined;
    verify = report.bind(entity)(verify);
    var _closure1_slot3 = verify;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.View;
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    offset = report.ICYMI_MARGIN;
    var _closure1_slot11 = offset;
    offset = report.ITEM_PADDING;
    var _closure1_slot12 = offset;
    report = report.MESSAGE_CONTENT_INSET;
    var _closure1_slot13 = report;
    report = 9;
    report = golf[report];
    report = oscar.bind(entity)(report);
    offset = report.DEFAULT_ROLE_COLOR;
    var _closure1_slot14 = offset;
    report = report.MessageEmbedTypes;
    var _closure1_slot15 = report;
    report = 10;
    offset = golf[report];
    offset = oscar.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot16 = offset;
    offset = golf[report];
    offset = oscar.bind(entity)(offset);
    offset = offset.jsxs;
    var _closure1_slot17 = offset;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Fragment;
    report = 11;
    offset = golf[report];
    offset = options.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_12;
    var _closure1_slot18 = offset;
    report = golf[report];
    report = options.bind(entity)(report);
    report = report.spacing;
    report = report.PX_8;
    var _closure1_slot19 = report;
    report = 12;
    report = golf[report];
    offset = oscar.bind(entity)(report);
    options = offset.createStyles;
    report = function() {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = {};
            mike = {};
            options = 1;
            mike['flex'] = options;
            tango = _closure1_slot13;
            mike['paddingLeft'] = tango;
            report = _closure1_slot1;
            verify = _closure1_slot2;
            golf = 11;
            tango = verify[golf];
            oscar = undefined;
            tango = report.bind(oscar)(tango);
            tango = tango.spacing;
            tango = tango.PX_8;
            mike['gap'] = tango;
            entity['pressable'] = mike;
            mike = {};
            tango = verify[golf];
            tango = report.bind(oscar)(tango);
            tango = tango.colors;
            tango = tango.BACKGROUND_MODIFIER_ACTIVE;
            mike['backgroundColor'] = tango;
            entity['rowActive'] = mike;
            mike = {};
            report = _closure1_slot0;
            tango = 13;
            tango = verify[tango];
            report = report.bind(oscar)(tango);
            tango = report.isAndroid;
            report = tango.bind(report)();
            tango = 0;
            if(!report) { _fun00010_ip = 135; continue _fun00009 }
 129:
            tango = -2;
 135:
            mike['marginTop'] = tango;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            verify = tango[golf];
            verify = report.bind(oscar)(verify);
            verify = verify.radii;
            verify = verify.md;
            mike['borderRadius'] = verify;
            verify = tango[golf];
            verify = report.bind(oscar)(verify);
            verify = verify.spacing;
            verify = verify.PX_8;
            mike['gap'] = verify;
            entity['messagePreview'] = mike;
            mike = {};
            verify = tango[golf];
            verify = report.bind(oscar)(verify);
            verify = verify.spacing;
            verify = verify.PX_8;
            mike['gap'] = verify;
            verify = _closure1_slot11;
            mike['marginHorizontal'] = verify;
            verify = _closure1_slot18;
            mike['padding'] = verify;
            verify = 'hidden';
            mike['overflow'] = verify;
            mike['borderWidth'] = options;
            options = tango[golf];
            options = report.bind(oscar)(options);
            options = options.colors;
            options = options.BORDER_SUBTLE;
            mike['borderColor'] = options;
            options = tango[golf];
            options = report.bind(oscar)(options);
            options = options.radii;
            options = options.lg;
            mike['borderRadius'] = options;
            options = 132;
            mike['maxHeight'] = options;
            entity['replyPreview'] = mike;
            mike = {'flexDirection': 'row', 'gap': null, 'overflow': 'hidden'};
            options = _closure1_slot19;
            mike['gap'] = options;
            entity['replyInner'] = mike;
            mike = {};
            options = _closure1_slot13;
            mike['paddingLeft'] = options;
            options = _closure1_slot11;
            mike['paddingBottom'] = options;
            entity['afterMessage'] = mike;
            mike = {};
            options = _closure1_slot11;
            mike['marginRight'] = options;
            entity['media'] = mike;
            mike = {};
            options = _closure1_slot11;
            mike['marginVertical'] = options;
            tango = tango[golf];
            tango = report.bind(oscar)(tango);
            tango = tango.spacing;
            tango = tango.PX_8;
            mike['gap'] = tango;
            tango = _closure1_slot11;
            mike['paddingHorizontal'] = tango;
            zulu = _closure1_slot13;
            mike['marginLeft'] = zulu;
            entity['footer'] = mike;
            return entity;
        }
    };
    report = options.bind(offset)(report);
    var _closure1_slot20 = report;
    options = verify.memo;
    report = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            kilo = mike.message;
            var _closure2_slot0 = kilo;
            echo = mike.channel;
            var _closure2_slot1 = echo;
            sizing = mike.guild;
            var _closure2_slot2 = sizing;
            update = mike.visible;
            options = mike.messageContext;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 16;
            mike = tango[mike];
            tango = undefined;
            oscar = zulu.bind(tango)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot9;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                tango = _closure1_slot9;
                zulu = tango.isChannelMuted;
                entity = _closure2_slot1;
                mike = entity.getGuildId;
                mike = mike.bind(entity)();
                entity = entity.id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            result = report.bind(oscar)(zulu, mike);
            golf = _closure1_slot3;
            report = golf.useEffect;
            oscar = null;
            zulu = oscar == sizing;
            mike = undefined;
            if(zulu) { _fun00012_ip = 124; continue _fun00011 }
 119:
            mike = sizing.id;
 124:
            zulu = new Array(2);
            zulu[0] = mike;
            mike = kilo.author;
            mike = mike.id;
            zulu[1] = mike;
            mike = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot2;
                    oscar = null;
                    tango = oscar == entity;
                    entity = undefined;
                    zulu = undefined;
                    if(tango) { _fun00014_ip = 29; continue _fun00013 }
 20:
                    tango = _closure2_slot2;
                    zulu = tango.id;
 29:
                    if(!(oscar != zulu)) { _fun00014_ip = 105; continue _fun00013 }
 33:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 25;
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.requestMembersById;
                    zulu = _closure2_slot2;
                    oscar = oscar == zulu;
                    zulu = undefined;
                    if(oscar) { _fun00014_ip = 84; continue _fun00013 }
 75:
                    oscar = _closure2_slot2;
                    zulu = oscar.id;
 84:
                    mike = _closure2_slot0;
                    mike = mike.author;
                    mike = mike.id;
                    mike = tango.bind(report)(zulu, mike);
 105:
                    return entity;
                }
            };
            mike = report.bind(golf)(mike, zulu);
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            report = 26;
            mike = mike[report];
            verify = zulu.bind(tango)(mike);
            golf = verify.useICYMIMessage;
            zulu = echo.id;
            offset = oscar == options;
            mike = undefined;
            if(offset) { _fun00012_ip = 206; continue _fun00011 }
 200:
            mike = options.reply_message_id;
 206:
            source = golf.bind(verify)(zulu, mike);
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            golf = zulu.bind(tango)(mike);
            report = golf.useICYMIMessage;
            zulu = echo.id;
            verify = oscar == options;
            mike = undefined;
            if(verify) { _fun00012_ip = 255; continue _fun00011 }
 249:
            mike = options.before_message_id;
 255:
            control = report.bind(golf)(zulu, mike);
            mike = _closure1_slot20;
            offset = mike.bind(tango)();
            golf = _closure1_slot3;
            report = golf.useCallback;
            mike = echo.id;
            zulu = new Array(3);
            zulu[0] = mike;
            mike = sizing.id;
            zulu[1] = mike;
            mike = kilo.id;
            zulu[2] = mike;
            mike = function() {
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                tango = 27;
                mike = oscar[tango];
                entity = undefined;
                yankee = report.bind(entity)(mike);
                offset = yankee.trackItemInteraction;
                mike = _closure2_slot0;
                verify = mike.id;
                options = 'message';
                golf = 'press_message';
                golf = offset.bind(yankee)(verify, options, golf);
                tango = oscar[tango];
                oscar = report.bind(entity)(tango);
                report = oscar.navigateToPost;
                tango = _closure2_slot1;
                tango = tango.id;
                zulu = _closure2_slot2;
                zulu = zulu.id;
                mike = mike.id;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            vacuum = report.bind(golf)(mike, zulu);
            golf = _closure1_slot3;
            report = golf.useCallback;
            mike = echo.id;
            zulu = new Array(2);
            zulu[0] = mike;
            zulu[1] = kilo;
            mike = function() {
                tango = _closure1_slot0;
                report = _closure1_slot2;
                entity = 27;
                mike = report[entity];
                entity = undefined;
                verify = tango.bind(entity)(mike);
                options = verify.trackItemInteraction;
                zulu = _closure2_slot0;
                golf = zulu.id;
                oscar = 'message';
                zulu = 'long_press_channel';
                zulu = options.bind(verify)(golf, oscar, zulu);
                zulu = 28;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.openChannelLongPressActionSheet;
                mike = _closure2_slot1;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            report = report.bind(golf)(mike, zulu);
            options = _closure1_slot3;
            golf = options.useCallback;
            zulu = new Array(2);
            zulu[0] = echo;
            zulu[1] = kilo;
            mike = function() {
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 27;
                mike = tango[entity];
                entity = undefined;
                yankee = zulu.bind(entity)(mike);
                offset = yankee.trackItemInteraction;
                report = _closure2_slot0;
                verify = report.id;
                options = 'message';
                mike = 'long_press_message';
                mike = offset.bind(yankee)(verify, options, mike);
                mike = 29;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.showLongPressMessageActionSheet;
                mike = {};
                golf = _closure2_slot1;
                mike['channel'] = golf;
                mike['message'] = report;
                golf = _closure1_slot10;
                oscar = golf.getUser;
                report = report.author;
                report = report.id;
                report = oscar.bind(golf)(report);
                mike['user'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = golf.bind(options)(mike, zulu);
            golf = _closure1_slot3;
            zulu = golf.useCallback;
            mike = new Array(2);
            mike[0] = kilo;
            options = sizing.id;
            mike[1] = options;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    report = 27;
                    mike = entity[report];
                    entity = undefined;
                    offset = tango.bind(entity)(mike);
                    verify = offset.trackItemInteraction;
                    oscar = _closure2_slot0;
                    options = oscar.id;
                    golf = 'message';
                    tango = 'press_comments';
                    tango = verify.bind(offset)(options, golf, tango);
                    tango = null;
                    if(!(tango != oscar)) { _fun00016_ip = 114; continue _fun00015 }
 66:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(entity)(zulu);
                    tango = report.navigateToPost;
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    mike = _closure2_slot2;
                    mike = mike.id;
                    mike = tango.bind(report)(zulu, mike, entity);
 114:
                    return entity;
                }
            };
            backup = zulu.bind(golf)(entity, mike);
            zulu = _closure1_slot17;
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            output = 27;
            entity = foxtrot[output];
            entity = yankee.bind(tango)(entity);
            mike = entity.MessageContentPost;
            entity = {};
            entity['channel'] = echo;
            entity['guild'] = sizing;
            golf = kilo.author;
            entity['author'] = golf;
            entity['message'] = kilo;
            golf = kilo.id;
            entity['id'] = golf;
            golf = 'message';
            entity['type'] = golf;
            sequence = _closure1_slot1;
            golf = 30;
            golf = foxtrot[golf];
            config = sequence.bind(tango)(golf);
            options = config.extractTimestamp;
            golf = kilo.id;
            golf = options.bind(config)(golf);
            entity['timestamp'] = golf;
            entity['onHeaderPress'] = vacuum;
            entity['onHeaderLongPress'] = report;
            options = _closure1_slot17;
            report = 31;
            report = foxtrot[report];
            report = yankee.bind(tango)(report);
            golf = report.PressableHighlight;
            report = {};
            report['onPress'] = vacuum;
            report['onLongPress'] = verify;
            verify = 130;
            report['unstable_pressDelay'] = verify;
            verify = 'button';
            report['accessibilityRole'] = verify;
            verify = 32;
            vacuum = foxtrot[verify];
            sequence = sequence.bind(tango)(vacuum);
            vacuum = {};
            vacuum['channel'] = echo;
            vacuum = sequence.bind(tango)(vacuum);
            report['accessibilityLabel'] = vacuum;
            verify = foxtrot[verify];
            foxtrot = yankee.bind(tango)(verify);
            yankee = foxtrot.getChannelA11yHint;
            verify = {};
            verify['channel'] = echo;
            verify['muted'] = result;
            verify = yankee.bind(foxtrot)(verify);
            report['accessibilityHint'] = verify;
            verify = offset.pressable;
            report['style'] = verify;
            verify = oscar != control;
            yankee = null;
            if(!verify) { _fun00012_ip = 717; continue _fun00011 }
 684:
            result = _closure1_slot16;
            foxtrot = _closure1_slot22;
            verify = {};
            verify['message'] = control;
            verify['channel'] = echo;
            verify['guild'] = sizing;
            verify['visible'] = update;
            yankee = result.bind(tango)(foxtrot, verify);
 717:
            verify = new Array(3);
            verify[0] = yankee;
            result = _closure1_slot16;
            foxtrot = _closure1_slot22;
            yankee = {};
            yankee['message'] = kilo;
            yankee['channel'] = echo;
            yankee['guild'] = sizing;
            yankee['visible'] = update;
            yankee = result.bind(tango)(foxtrot, yankee);
            verify[1] = yankee;
            foxtrot = oscar != source;
            yankee = null;
            if(!foxtrot) { _fun00012_ip = 799; continue _fun00011 }
 771:
            update = _closure1_slot16;
            result = _closure1_slot23;
            foxtrot = {};
            foxtrot['message'] = source;
            foxtrot['channel'] = echo;
            foxtrot['guild'] = sizing;
            yankee = update.bind(tango)(result, foxtrot);
 799:
            verify[2] = yankee;
            report['children'] = verify;
            golf = options.bind(tango)(golf, report);
            report = new Array(3);
            report[0] = golf;
            verify = _closure1_slot17;
            options = _closure1_slot4;
            golf = {};
            offset = offset.footer;
            golf['style'] = offset;
            result = _closure1_slot16;
            foxtrot = _closure1_slot1;
            yankee = _closure1_slot2;
            offset = 33;
            offset = yankee[offset];
            foxtrot = foxtrot.bind(tango)(offset);
            offset = {};
            offset['message'] = kilo;
            offset['channel'] = echo;
            foxtrot = result.bind(tango)(foxtrot, offset);
            offset = new Array(2);
            offset[0] = foxtrot;
            foxtrot = _closure1_slot16;
            romeo = _closure1_slot0;
            yankee = yankee[output];
            yankee = romeo.bind(tango)(yankee);
            romeo = yankee.ThreadAsComments;
            yankee = {};
            yankee['guild'] = sizing;
            yankee['parentMessage'] = kilo;
            yankee['onPress'] = backup;
            yankee = foxtrot.bind(tango)(romeo, yankee);
            offset[1] = yankee;
            golf['children'] = offset;
            golf = verify.bind(tango)(options, golf);
            report[1] = golf;
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    report = options.bind(verify)(report);
    var _closure1_slot21 = report;
    report = 34;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/gravity/GravityMessageRow.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: MessageRowWrapper
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            mike = argFoo;
            verify = mike.message;
            golf = mike.messageContext;
            oscar = mike.visible;
            tango = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 26;
            zulu = yankee[zulu];
            report = undefined;
            options = tango.bind(report)(zulu);
            zulu = options.useGravityMessage;
            offset = zulu.bind(options)(verify);
            var _closure2_slot0 = offset;
            zulu = 16;
            options = yankee[zulu];
            foxtrot = tango.bind(report)(options);
            romeo = foxtrot.useStateFromStores;
            options = _closure1_slot5;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                tango = _closure2_slot0;
                entity = tango.getChannelId;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = romeo.bind(foxtrot)(verify, options);
            var _closure2_slot1 = verify;
            options = yankee[zulu];
            backup = tango.bind(report)(options);
            foxtrot = backup.useStateFromStores;
            options = _closure1_slot7;
            romeo = new Array(1);
            romeo[0] = options;
            options = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zulu = _closure1_slot7;
                    mike = zulu.getGuild;
                    report = _closure2_slot1;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00020_ip = 39; continue _fun00019 }
 30:
                    tango = _closure2_slot1;
                    entity = tango.guild_id;
 39:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            options = foxtrot.bind(backup)(romeo, options);
            zulu = yankee[zulu];
            yankee = tango.bind(report)(zulu);
            tango = yankee.useStateFromStores;
            romeo = _closure1_slot8;
            zulu = new Array(1);
            zulu[0] = romeo;
            entity = function() {
                zulu = _closure1_slot8;
                mike = zulu.isBlocked;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = tango.bind(yankee)(zulu, entity);
            tango = null;
            yankee = tango == verify;
            entity = null;
            if(yankee) { _fun00018_ip = 249; continue _fun00017 }
 197:
            yankee = tango == options;
            entity = null;
            if(yankee) { _fun00018_ip = 249; continue _fun00017 }
 206:
            entity = null;
            if(zulu) { _fun00018_ip = 249; continue _fun00017 }
 211:
            tango = _closure1_slot16;
            zulu = _closure1_slot21;
            mike = {};
            mike['message'] = offset;
            mike['channel'] = verify;
            mike['guild'] = options;
            mike['messageContext'] = golf;
            mike['visible'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 249:
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['MessageRowContent'] = mike;
    return entity;
})();