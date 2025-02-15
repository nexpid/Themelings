// app/modules/markup/MarkupReactRules.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: MarkupLink
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = mike.state;
            verify = mike.node;
            var _closure2_slot0 = verify;
            options = mike.output;
            offset = mike.styles;
            mike = _closure1_slot17;
            report = undefined;
            yankee = mike.bind(report)();
            tango = _closure1_slot13;
            zulu = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 16;
            mike = romeo[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.LegacyText;
            mike = {};
            romeo = 'link';
            mike['accessibilityRole'] = romeo;
            offset = offset.link;
            if(offset) { _fun00002_ip = 100; continue _fun00001 }
 94:
            offset = yankee.link;
 100:
            mike['style'] = offset;
            golf = function(argFoo) { // Original name: onPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscar = argFoo;
                    entity = _closure2_slot0;
                    options = entity.target;
                    mike = 'string';
                    entity = typeof options;
                    if(!(mike === entity)) { _fun00004_ip = 189; continue _fun00003 }
 32:
                    golf = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 17;
                    report = zulu[mike];
                    zulu = undefined;
                    golf = golf.bind(zulu)(report);
                    report = golf.safeParseWithQuery;
                    golf = report.bind(golf)(options);
                    options = null;
                    if(!(options != golf)) { _fun00004_ip = 189; continue _fun00003 }
 74:
                    report = golf.protocol;
                    if(!(options != report)) { _fun00004_ip = 189; continue _fun00003 }
 84:
                    report = golf.hostname;
                    if(!(options != report)) { _fun00004_ip = 189; continue _fun00003 }
 94:
                    report = oscar.stopPropagation;
                    report = report.bind(oscar)();
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = oscar[mike];
                    report = report.bind(zulu)(mike);
                    mike = report.format;
                    report = mike.bind(report)(golf);
                    var _closure3_slot0 = report;
                    mike = _closure1_slot0;
                    entity = 18;
                    entity = oscar[entity];
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.handleClick;
                    entity = {};
                    entity['href'] = report;
                    report = function() { // Original name: onConfirm
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 19;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.openURL;
                        entity = _closure3_slot0;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity['onConfirm'] = report;
                    tango = function() { // Original name: trusted
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 20;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.isLinkTrusted;
                        entity = _closure2_slot0;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity['trusted'] = tango;
                    entity = mike.bind(zulu)(entity);
 189:
                    entity = undefined;
                    return entity;
                }
            };
            mike['onPress'] = golf;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 21;
            oscar = offset[oscar];
            golf = golf.bind(report)(oscar);
            oscar = golf.smartOutput;
            oscar = oscar.bind(golf)(verify, options, entity);
            mike['children'] = oscar;
            entity = entity.key;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: MarkupMention
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            options = mike.roleStyle;
            entity = mike.state;
            offset = mike.node;
            var _closure2_slot0 = offset;
            verify = mike.output;
            zulu = mike.styles;
            mike = _closure1_slot17;
            report = undefined;
            mike = mike.bind(report)();
            yankee = zulu.mention;
            if(yankee) { _fun00006_ip = 66; continue _fun00005 }
 60:
            yankee = mike.mention;
 66:
            foxtrot = offset.colorString;
            mike = foxtrot;
            if(!mike) { _fun00006_ip = 86; continue _fun00005 }
 78:
            tango = 'username';
            mike = tango === options;
 86:
            if(!mike) { _fun00006_ip = 170; continue _fun00005 }
 89:
            mike = {};
            mike['color'] = foxtrot;
            romeo = zulu.mention;
            tango = null;
            backup = tango == romeo;
            zulu = undefined;
            if(backup) { _fun00006_ip = 117; continue _fun00005 }
 112:
            zulu = romeo.backgroundColor;
 117:
            if(!(tango == zulu)) { _fun00006_ip = 163; continue _fun00005 }
 121:
            romeo = _closure1_slot0;
            backup = _closure1_slot2;
            tango = 22;
            tango = backup[tango];
            backup = romeo.bind(report)(tango);
            romeo = backup.hexWithOpacity;
            tango = 0.1;
            zulu = romeo.bind(backup)(foxtrot, tango);
 163:
            mike['backgroundColor'] = zulu;
            yankee = mike;
 170:
            tango = _closure1_slot14;
            zulu = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 16;
            mike = romeo[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.LegacyText;
            mike = {};
            romeo = 'button';
            mike['accessibilityRole'] = romeo;
            mike['style'] = yankee;
            oscar = function() { // Original name: onPress
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot0;
                    zulu = entity.userId;
                    entity = null;
                    if(!(entity == zulu)) { _fun00008_ip = 213; continue _fun00007 }
 21:
                    mike = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 12;
                    entity = offset[entity];
                    verify = undefined;
                    tango = mike.bind(verify)(entity);
                    mike = tango.show;
                    entity = {};
                    options = _closure1_slot0;
                    report = 13;
                    oscar = offset[report];
                    oscar = options.bind(verify)(oscar);
                    yankee = oscar.intl;
                    golf = yankee.string;
                    oscar = offset[report];
                    oscar = options.bind(verify)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.r0DLNj;
                    oscar = golf.bind(yankee)(oscar);
                    entity['title'] = oscar;
                    oscar = offset[report];
                    oscar = options.bind(verify)(oscar);
                    yankee = oscar.intl;
                    golf = yankee.string;
                    oscar = offset[report];
                    oscar = options.bind(verify)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.Fqqbho;
                    oscar = golf.bind(yankee)(oscar);
                    entity['body'] = oscar;
                    oscar = offset[report];
                    oscar = options.bind(verify)(oscar);
                    golf = oscar.intl;
                    oscar = golf.string;
                    report = offset[report];
                    report = options.bind(verify)(report);
                    report = report.t;
                    report = report.BddRzc;
                    report = oscar.bind(golf)(report);
                    entity['confirmText'] = report;
                    entity = mike.bind(tango)(entity);
                    _fun00008_ip = 249; continue _fun00007;
 213:
                    tango = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    entity = mike.openPrivateChannel;
                    entity = entity.bind(mike)(zulu);
 249:
                    entity = undefined;
                    return entity;
                }
            };
            mike['onPress'] = oscar;
            oscar = 'dot';
            options = oscar === options;
            if(!options) { _fun00006_ip = 284; continue _fun00005 }
 234:
            romeo = _closure1_slot13;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            oscar = 23;
            oscar = backup[oscar];
            oscar = yankee.bind(report)(oscar);
            yankee = oscar.RoleDot;
            oscar = {};
            oscar['color'] = foxtrot;
            foxtrot = 'small';
            oscar['size'] = foxtrot;
            options = romeo.bind(report)(yankee, oscar);
 284:
            oscar = new Array(2);
            oscar[0] = options;
            options = _closure1_slot0;
            yankee = _closure1_slot2;
            golf = 21;
            golf = yankee[golf];
            options = options.bind(report)(golf);
            golf = options.smartOutput;
            golf = golf.bind(options)(offset, verify, entity);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = entity.key;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: MarkupBlockQuote
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            golf = mike.styles;
            entity = mike.state;
            verify = mike.node;
            options = mike.output;
            mike = _closure1_slot17;
            report = undefined;
            offset = mike.bind(report)();
            tango = _closure1_slot13;
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 16;
            mike = yankee[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.LegacyText;
            mike = {};
            golf = golf.blockQuote;
            if(golf) { _fun00010_ip = 86; continue _fun00009 }
 80:
            golf = offset.blockQuote;
 86:
            mike['style'] = golf;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 21;
            oscar = offset[oscar];
            golf = golf.bind(report)(oscar);
            oscar = golf.smartOutput;
            oscar = oscar.bind(golf)(verify, options, entity);
            mike['children'] = oscar;
            entity = entity.key;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: MarkupInlineCode
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            golf = mike.styles;
            entity = mike.state;
            verify = mike.node;
            options = mike.output;
            mike = _closure1_slot17;
            report = undefined;
            offset = mike.bind(report)();
            tango = _closure1_slot13;
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 16;
            mike = yankee[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.LegacyText;
            mike = {};
            golf = golf.inlineCode;
            if(golf) { _fun00012_ip = 86; continue _fun00011 }
 80:
            golf = offset.inlineCode;
 86:
            mike['style'] = golf;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 21;
            oscar = offset[oscar];
            golf = golf.bind(report)(oscar);
            oscar = golf.smartOutput;
            oscar = oscar.bind(golf)(verify, options, entity);
            mike['children'] = oscar;
            entity = entity.key;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: MarkupCodeBlock
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = argFoo;
            golf = mike.styles;
            entity = mike.state;
            verify = mike.node;
            options = mike.output;
            mike = _closure1_slot17;
            report = undefined;
            offset = mike.bind(report)();
            tango = _closure1_slot14;
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 16;
            mike = yankee[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.LegacyText;
            mike = {};
            golf = golf.codeBlock;
            if(golf) { _fun00014_ip = 86; continue _fun00013 }
 80:
            golf = offset.codeBlock;
 86:
            mike['style'] = golf;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 21;
            oscar = offset[oscar];
            golf = golf.bind(report)(oscar);
            oscar = golf.smartOutput;
            golf = oscar.bind(golf)(verify, options, entity);
            oscar = new Array(2);
            oscar[0] = golf;
            golf = '\n';
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = entity.key;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: MarkupChannelMention
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            mike = entity.state;
            var _closure2_slot0 = mike;
            kilo = entity.node;
            var _closure2_slot1 = kilo;
            backup = entity.output;
            verify = entity.styles;
            entity = entity.variants;
            tango = _closure1_slot17;
            oscar = undefined;
            offset = tango.bind(oscar)();
            tango = mike.noStyleAndInteraction;
            yankee = 'button';
            if(!tango) { _fun00016_ip = 72; continue _fun00015 }
 68:
            yankee = 'text';
 72:
            golf = _closure1_slot14;
            report = _closure1_slot0;
            romeo = _closure1_slot2;
            tango = 24;
            tango = romeo[tango];
            tango = report.bind(oscar)(tango);
            report = tango.Text;
            tango = {};
            foxtrot = entity.channelMentionText;
            romeo = null;
            sizing = romeo != foxtrot;
            entity = 'text-xs/medium';
            if(!sizing) { _fun00016_ip = 125; continue _fun00015 }
 122:
            entity = foxtrot;
 125:
            tango['variant'] = entity;
            entity = offset.channelMentionText;
            tango['style'] = entity;
            entity = kilo.inContent;
            entity = romeo != entity;
            foxtrot = null;
            if(!entity) { _fun00016_ip = 166; continue _fun00015 }
 154:
            entity = kilo.inContent;
            foxtrot = backup.bind(oscar)(entity, mike);
 166:
            entity = new Array(3);
            entity[0] = foxtrot;
            foxtrot = kilo.inContent;
            foxtrot = romeo != foxtrot;
            romeo = null;
            if(!foxtrot) { _fun00016_ip = 305; continue _fun00015 }
 189:
            output = _closure1_slot13;
            echo = _closure1_slot1;
            update = _closure1_slot2;
            foxtrot = 25;
            foxtrot = update[foxtrot];
            sizing = echo.bind(oscar)(foxtrot);
            foxtrot = {};
            result = 9;
            result = update[result];
            result = echo.bind(oscar)(result);
            result = result.colors;
            result = result.MENTION_FOREGROUND;
            foxtrot['themedColor'] = result;
            result = _closure1_slot20;
            result = result.bind(oscar)();
            foxtrot['style'] = result;
            result = 26;
            result = update[result];
            result = echo.bind(oscar)(result);
            foxtrot['source'] = result;
            result = 15;
            result = update[result];
            result = echo.bind(oscar)(result);
            result = result.Sizes;
            result = result.CUSTOM;
            foxtrot['size'] = result;
            romeo = output.bind(oscar)(sizing, foxtrot);
 305:
            entity[1] = romeo;
            foxtrot = _closure1_slot0;
            sizing = _closure1_slot2;
            romeo = 21;
            romeo = sizing[romeo];
            foxtrot = foxtrot.bind(oscar)(romeo);
            romeo = foxtrot.smartOutput;
            romeo = romeo.bind(foxtrot)(kilo, backup, mike);
            entity[2] = romeo;
            tango['children'] = entity;
            entity = mike.key;
            golf = golf.bind(oscar)(report, tango, entity);
            tango = mike.disablePressableChannelMention;
            entity = golf;
            if(tango) { _fun00016_ip = 453; continue _fun00015 }
 374:
            report = _closure1_slot13;
            tango = _closure1_slot6;
            zulu = {};
            zulu['accessibilityRole'] = yankee;
            verify = verify.channel;
            if(verify) { _fun00016_ip = 402; continue _fun00015 }
 396:
            verify = offset.channelMention;
 402:
            zulu['style'] = verify;
            offset = mike.noStyleAndInteraction;
            verify = 'auto';
            if(!offset) { _fun00016_ip = 423; continue _fun00015 }
 419:
            verify = 'none';
 423:
            zulu['pointerEvents'] = verify;
            options = function() { // Original name: onPress
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot0;
                    zulu = entity.noStyleAndInteraction;
                    entity = null;
                    if(zulu) { _fun00018_ip = 47; continue _fun00017 }
 18:
                    report = _closure1_slot18;
                    mike = _closure2_slot1;
                    tango = mike.channelId;
                    zulu = mike.messageId;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu);
 47:
                    return entity;
                }
            };
            zulu['onPress'] = options;
            zulu['children'] = golf;
            mike = mike.key;
            entity = report.bind(oscar)(tango, zulu, mike);
 453:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: MarkupAttachmentLink
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            mike = entity.state;
            var _closure2_slot0 = mike;
            kilo = entity.node;
            var _closure2_slot1 = kilo;
            backup = entity.output;
            verify = entity.styles;
            entity = entity.variants;
            tango = _closure1_slot17;
            oscar = undefined;
            offset = tango.bind(oscar)();
            tango = mike.noStyleAndInteraction;
            yankee = 'button';
            if(!tango) { _fun00020_ip = 72; continue _fun00019 }
 68:
            yankee = 'text';
 72:
            golf = _closure1_slot14;
            report = _closure1_slot0;
            romeo = _closure1_slot2;
            tango = 24;
            tango = romeo[tango];
            tango = report.bind(oscar)(tango);
            report = tango.Text;
            tango = {};
            romeo = entity.channelMentionText;
            entity = null;
            foxtrot = entity != romeo;
            entity = 'text-xs/medium';
            if(!foxtrot) { _fun00020_ip = 125; continue _fun00019 }
 122:
            entity = romeo;
 125:
            tango['variant'] = entity;
            entity = offset.channelMentionText;
            tango['style'] = entity;
            foxtrot = _closure1_slot13;
            result = _closure1_slot1;
            sizing = _closure1_slot2;
            entity = 25;
            entity = sizing[entity];
            romeo = result.bind(oscar)(entity);
            entity = {};
            output = 9;
            output = sizing[output];
            output = result.bind(oscar)(output);
            output = output.colors;
            output = output.MENTION_FOREGROUND;
            entity['themedColor'] = output;
            output = 27;
            output = sizing[output];
            output = result.bind(oscar)(output);
            entity['source'] = output;
            output = _closure1_slot19;
            output = output.bind(oscar)();
            entity['size'] = output;
            romeo = foxtrot.bind(oscar)(romeo, entity);
            entity = new Array(2);
            entity[0] = romeo;
            foxtrot = _closure1_slot0;
            romeo = 21;
            romeo = sizing[romeo];
            foxtrot = foxtrot.bind(oscar)(romeo);
            romeo = foxtrot.smartOutput;
            romeo = romeo.bind(foxtrot)(kilo, backup, mike);
            entity[1] = romeo;
            tango['children'] = entity;
            entity = mike.key;
            golf = golf.bind(oscar)(report, tango, entity);
            tango = mike.disablePressableChannelMention;
            entity = golf;
            if(tango) { _fun00020_ip = 375; continue _fun00019 }
 296:
            report = _closure1_slot13;
            tango = _closure1_slot6;
            zulu = {};
            zulu['accessibilityRole'] = yankee;
            verify = verify.channel;
            if(verify) { _fun00020_ip = 324; continue _fun00019 }
 318:
            verify = offset.channelMention;
 324:
            zulu['style'] = verify;
            offset = mike.noStyleAndInteraction;
            verify = 'auto';
            if(!offset) { _fun00020_ip = 345; continue _fun00019 }
 341:
            verify = 'none';
 345:
            zulu['pointerEvents'] = verify;
            options = function(argFoo) { // Original name: onPress
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure2_slot0;
                    mike = mike.noStyleAndInteraction;
                    if(mike) { _fun00022_ip = 75; continue _fun00021 }
 19:
                    mike = zulu.stopPropagation;
                    mike = mike.bind(zulu)();
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 19;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.openURL;
                    entity = _closure2_slot1;
                    entity = entity.attachmentLink;
                    entity = mike.bind(zulu)(entity);
 75:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['onPress'] = options;
            zulu['children'] = golf;
            mike = mike.key;
            entity = report.bind(oscar)(tango, zulu, mike);
 375:
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: MarkupCommandMention
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            mike = argFoo;
            entity = mike.state;
            verify = mike.node;
            options = mike.output;
            oscar = mike.styles;
            zulu = _closure1_slot17;
            report = undefined;
            golf = zulu.bind(report)();
            tango = _closure1_slot13;
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 28;
            mike = offset[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['node'] = verify;
            mike['output'] = options;
            mike['state'] = entity;
            oscar = oscar.mention;
            if(oscar) { _fun00024_ip = 94; continue _fun00023 }
 88:
            oscar = golf.mention;
 94:
            mike['style'] = oscar;
            entity = entity.key;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    options = oscar[entity];
    golf = argCorge;
    entity = undefined;
    golf = golf.bind(entity)(options);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.Image;
    var _closure1_slot4 = options;
    options = golf.PixelRatio;
    var _closure1_slot5 = options;
    options = golf.Pressable;
    var _closure1_slot6 = options;
    options = golf.View;
    var _closure1_slot7 = options;
    golf = golf.Text;
    var _closure1_slot8 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot9 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    verify = golf.EMOJI_CHAT_SIZE;
    golf = golf.GuildFeatures;
    var _closure1_slot10 = golf;
    options = 4;
    golf = oscar[options];
    golf = report.bind(entity)(golf);
    offset = golf.StaticChannelRoute;
    var _closure1_slot11 = offset;
    golf = golf.StaticChannelId;
    var _closure1_slot12 = golf;
    golf = 5;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    romeo = golf.Fonts;
    golf = 6;
    offset = oscar[golf];
    offset = report.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot13 = offset;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot14 = golf;
    foxtrot = tango.RegExp;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    sizing = tango.ANSI_CONTROL_SEQUENCE_RE;
    tango = foxtrot.prototype;
    golf = Object.create(tango, {constructor: {value: foxtrot}});
    kilo = 'g';
    output = golf;
    tango = new output[foxtrot](sizing, kilo, backup);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot15 = tango;
    tango = {};
    golf = {};
    golf['width'] = verify;
    golf['height'] = verify;
    verify = 'contain';
    golf['resizeMode'] = verify;
    tango['emoji'] = golf;
    golf = {'paddingEnd': 2, 'paddingBottom': 1};
    tango['guildIcon'] = golf;
    golf = {};
    verify = 16;
    golf['paddingTop'] = verify;
    tango['list'] = golf;
    golf = {};
    golf['paddingTop'] = options;
    tango['listItem'] = golf;
    golf = {};
    options = romeo.CODE_BOLD;
    golf['fontFamily'] = options;
    tango['bullet'] = golf;
    golf = {};
    options = romeo.PRIMARY_BOLD;
    golf['fontFamily'] = options;
    tango['strong'] = golf;
    var _closure1_slot16 = tango;
    tango = 8;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = romeo.PRIMARY_BOLD;
    verify['fontFamily'] = offset;
    offset = 9;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.TEXT_LINK;
    verify['color'] = foxtrot;
    tango['link'] = verify;
    verify = {'backgroundColor': null, 'borderRadius': 3, 'paddingHorizontal': 2, 'alignItems': 'center'};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.MENTION_BACKGROUND;
    verify['backgroundColor'] = foxtrot;
    tango['channelMention'] = verify;
    verify = {};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.MENTION_FOREGROUND;
    verify['color'] = foxtrot;
    tango['channelMentionText'] = verify;
    verify = {};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.unsafe_rawColors;
    foxtrot = foxtrot.BRAND_500;
    verify['color'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_MODIFIER_ACCENT;
    verify['backgroundColor'] = foxtrot;
    tango['mention'] = verify;
    verify = {};
    foxtrot = romeo.CODE_BOLD;
    verify['fontFamily'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.TEXT_NORMAL;
    verify['color'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_SECONDARY_ALT;
    verify['backgroundColor'] = foxtrot;
    tango['inlineCode'] = verify;
    verify = {};
    romeo = romeo.CODE_BOLD;
    verify['fontFamily'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.TEXT_NORMAL;
    verify['color'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_SECONDARY_ALT;
    verify['backgroundColor'] = romeo;
    tango['codeBlock'] = verify;
    verify = {'borderLeftWidth': 2, 'borderLeftColor': null, 'paddingLeft': 4};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_SECONDARY_ALT;
    verify['borderLeftColor'] = offset;
    tango['blockQuote'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot17 = tango;
    tango = function(argFoo, argBar) { // Original name: handleTapChannel
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            entity = null;
            if(!(entity != tango)) { _fun00026_ip = 91; continue _fun00025 }
 12:
            if(!(entity == zulu)) { _fun00026_ip = 54; continue _fun00025 }
 16:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            mike = report.bind(entity)(mike);
            entity = mike.transitionToChannel;
            entity = entity.bind(mike)(tango);
            _fun00026_ip = 91; continue _fun00025;
 54:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            mike = report.bind(entity)(mike);
            entity = mike.transitionToMessage;
            entity = entity.bind(mike)(tango, zulu);
 91:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = tango;
    tango = function() { // Original name: getIconSize
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zulu = _closure1_slot5;
            entity = zulu.getFontScale;
            zulu = entity.bind(zulu)();
            entity = 1;
            if(!(!(zulu < entity))) { _fun00028_ip = 110; continue _fun00027 }
 24:
            entity = 1.25;
            if(!(!(zulu < entity))) { _fun00028_ip = 74; continue _fun00027 }
 38:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 15;
            zulu = zulu[entity];
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            entity = entity.Sizes;
            entity = entity.SMALL;
            _fun00028_ip = 108; continue _fun00027;
 74:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 15;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            zulu = zulu.Sizes;
            entity = zulu.EXTRA_SMALL;
 108:
            _fun00028_ip = 144; continue _fun00027;
 110:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 15;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.Sizes;
            entity = mike.EXTRA_SMALL_10;
 144:
            return entity;
        }
    };
    var _closure1_slot19 = tango;
    tango = function() { // Original name: getCaretIconSize
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            mike = _closure1_slot5;
            entity = mike.getFontScale;
            mike = entity.bind(mike)();
            entity = 1.25;
            if(!(!(mike < entity))) { _fun00030_ip = 62; continue _fun00029 }
 31:
            entity = 2;
            if(!(!(mike < entity))) { _fun00030_ip = 50; continue _fun00029 }
 38:
            entity = {'width': 16, 'height': 16};
            _fun00030_ip = 60; continue _fun00029;
 50:
            entity = {'width': 12, 'height': 12};
 60:
            _fun00030_ip = 76; continue _fun00029;
 62:
            entity = {'width': 8, 'height': 8};
 76:
            return entity;
        }
    };
    var _closure1_slot20 = tango;
    tango = 37;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/markup/MarkupReactRules.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: createRules
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            zulu = arguments[0];
            entity = arguments[1];
            report = undefined;
            if(!(zulu === report)) { _fun00032_ip = 16; continue _fun00031 }
 14:
            zulu = {};
 16:
            var _closure2_slot0 = zulu;
            if(!(entity === report)) { _fun00032_ip = 26; continue _fun00031 }
 24:
            entity = {};
 26:
            var _closure2_slot1 = entity;
            entity = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    mike = arguments[0];
                    zulu = undefined;
                    if(!(mike === zulu)) { _fun00034_ip = 13; continue _fun00033 }
 11:
                    mike = {};
 13:
                    var _closure3_slot0 = mike;
                    entity = function(argFoo, argBar, argBaz) {
                        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                            offset = argFoo;
                            verify = argBar;
                            mike = argBaz;
                            entity = mike.noStyleAndInteraction;
                            oscar = _closure1_slot13;
                            if(entity) { _fun00036_ip = 73; continue _fun00035 }
 25:
                            golf = _closure1_slot21;
                            report = {};
                            report['state'] = mike;
                            report['node'] = offset;
                            report['output'] = verify;
                            entity = _closure3_slot0;
                            report['styles'] = entity;
                            tango = mike.key;
                            entity = undefined;
                            entity = oscar.bind(entity)(golf, report, tango);
                            _fun00036_ip = 144; continue _fun00035;
 73:
                            options = _closure1_slot0;
                            yankee = _closure1_slot2;
                            zulu = 16;
                            zulu = yankee[zulu];
                            report = undefined;
                            zulu = options.bind(report)(zulu);
                            tango = zulu.LegacyText;
                            zulu = {};
                            golf = 21;
                            golf = yankee[golf];
                            options = options.bind(report)(golf);
                            golf = options.smartOutput;
                            golf = golf.bind(options)(offset, verify, mike);
                            zulu['children'] = golf;
                            mike = mike.key;
                            entity = oscar.bind(report)(tango, zulu, mike);
 144:
                            return entity;
                        }
                    };
                    return entity;
                }
            };
            tango = entity.bind(report)(zulu);
            mike = function() {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    tango = arguments[0];
                    mike = arguments[1];
                    zulu = undefined;
                    if(!(tango === zulu)) { _fun00038_ip = 16; continue _fun00037 }
 14:
                    tango = {};
 16:
                    var _closure3_slot0 = tango;
                    if(!(mike === zulu)) { _fun00038_ip = 28; continue _fun00037 }
 24:
                    mike = 'username';
 28:
                    var _closure3_slot1 = mike;
                    entity = function(argFoo, argBar, argBaz) {
                        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                            offset = argFoo;
                            verify = argBar;
                            mike = argBaz;
                            entity = mike.noStyleAndInteraction;
                            oscar = _closure1_slot13;
                            if(entity) { _fun00040_ip = 82; continue _fun00039 }
 25:
                            golf = _closure1_slot22;
                            report = {};
                            tango = _closure3_slot1;
                            report['roleStyle'] = tango;
                            report['state'] = mike;
                            report['node'] = offset;
                            report['output'] = verify;
                            entity = _closure3_slot0;
                            report['styles'] = entity;
                            tango = mike.key;
                            entity = undefined;
                            entity = oscar.bind(entity)(golf, report, tango);
                            _fun00040_ip = 153; continue _fun00039;
 82:
                            options = _closure1_slot0;
                            yankee = _closure1_slot2;
                            zulu = 16;
                            zulu = yankee[zulu];
                            report = undefined;
                            zulu = options.bind(report)(zulu);
                            tango = zulu.LegacyText;
                            zulu = {};
                            golf = 21;
                            golf = yankee[golf];
                            options = options.bind(report)(golf);
                            golf = options.smartOutput;
                            golf = golf.bind(options)(offset, verify, mike);
                            zulu['children'] = golf;
                            mike = mike.key;
                            entity = oscar.bind(report)(tango, zulu, mike);
 153:
                            return entity;
                        }
                    };
                    return entity;
                }
            };
            entity = arguments[2];
            romeo = mike.bind(report)(zulu, entity);
            entity = {};
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 29;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.TEXT;
            golf = {};
            offset = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    mike = argFoo;
                    entity = argBaz;
                    zulu = mike.content;
                    tango = 'string';
                    zulu = typeof zulu;
                    if(!(tango !== zulu)) { _fun00042_ip = 105; continue _fun00041 }
 22:
                    oscar = _closure1_slot13;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 16;
                    zulu = verify[zulu];
                    report = undefined;
                    zulu = options.bind(report)(zulu);
                    tango = zulu.LegacyText;
                    zulu = {};
                    golf = 21;
                    golf = verify[golf];
                    verify = options.bind(report)(golf);
                    options = verify.smartOutput;
                    golf = argBar;
                    golf = options.bind(verify)(mike, golf, entity);
                    zulu['children'] = golf;
                    entity = entity.key;
                    entity = oscar.bind(report)(tango, zulu, entity);
                    _fun00042_ip = 110; continue _fun00041;
 105:
                    entity = mike.content;
 110:
                    return entity;
                }
            };
            golf['react'] = offset;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.STRIKETHROUGH;
            golf = {};
            offset = 30;
            yankee = oscar[offset];
            yankee = zulu.bind(report)(yankee);
            foxtrot = yankee.DEFAULT_RULES;
            yankee = oscar[mike];
            yankee = zulu.bind(report)(yankee);
            yankee = yankee.AST_KEY;
            yankee = yankee.STRIKETHROUGH;
            sizing = foxtrot[yankee];
            output = golf;
            yankee = copyDataProperties(output, sizing);
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                mike = 16;
                mike = options[mike];
                tango = undefined;
                mike = golf.bind(tango)(mike);
                zulu = mike.LegacyText;
                mike = {};
                oscar = {};
                verify = 'line-through';
                oscar['textDecorationLine'] = verify;
                mike['style'] = oscar;
                oscar = 21;
                oscar = options[oscar];
                verify = golf.bind(tango)(oscar);
                options = verify.smartOutput;
                golf = argFoo;
                oscar = argBar;
                oscar = options.bind(verify)(golf, oscar, entity);
                mike['children'] = oscar;
                entity = entity.key;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            yankee = 'react';
            golf[yankee] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.UNDERLINE;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.UNDERLINE;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                mike = 16;
                mike = options[mike];
                tango = undefined;
                mike = golf.bind(tango)(mike);
                zulu = mike.LegacyText;
                mike = {};
                oscar = {};
                verify = 'underline';
                oscar['textDecorationLine'] = verify;
                mike['style'] = oscar;
                oscar = 21;
                oscar = options[oscar];
                verify = golf.bind(tango)(oscar);
                options = verify.smartOutput;
                golf = argFoo;
                oscar = argBar;
                oscar = options.bind(verify)(golf, oscar, entity);
                mike['children'] = oscar;
                entity = entity.key;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            golf[yankee] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.ITALICS;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.ITALICS;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    entity = argBaz;
                    report = _closure1_slot13;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 16;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.LegacyText;
                    mike = {};
                    golf = {};
                    options = _closure2_slot0;
                    offset = options.em;
                    options = null;
                    yankee = options == offset;
                    verify = undefined;
                    if(yankee) { _fun00044_ip = 72; continue _fun00043 }
 66:
                    verify = offset.fontStyle;
 72:
                    offset = options != verify;
                    options = 'italic';
                    if(!offset) { _fun00044_ip = 86; continue _fun00043 }
 83:
                    options = verify;
 86:
                    golf['fontStyle'] = options;
                    mike['style'] = golf;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    oscar = 21;
                    oscar = options[oscar];
                    verify = golf.bind(tango)(oscar);
                    options = verify.smartOutput;
                    golf = argFoo;
                    oscar = argBar;
                    oscar = options.bind(verify)(golf, oscar, entity);
                    mike['children'] = oscar;
                    entity = entity.key;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            golf[yankee] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.STRONG;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.STRONG;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    entity = argBaz;
                    report = _closure1_slot13;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 16;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.LegacyText;
                    mike = {};
                    golf = _closure2_slot0;
                    golf = golf.strong;
                    if(golf) { _fun00046_ip = 66; continue _fun00045 }
 56:
                    options = _closure1_slot16;
                    golf = options.strong;
 66:
                    mike['style'] = golf;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    oscar = 21;
                    oscar = options[oscar];
                    verify = golf.bind(tango)(oscar);
                    options = verify.smartOutput;
                    golf = argFoo;
                    oscar = argBar;
                    oscar = options.bind(verify)(golf, oscar, entity);
                    mike['children'] = oscar;
                    entity = entity.key;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            golf[yankee] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.LINK;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.LINK;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            golf[yankee] = tango;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.URL;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.URL;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            golf[yankee] = tango;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.AUTOLINK;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.AUTOLINK;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            golf[yankee] = tango;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.LINE_BREAK;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.LINE_BREAK;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                report = _closure1_slot13;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 16;
                entity = zulu[entity];
                tango = undefined;
                entity = mike.bind(tango)(entity);
                zulu = entity.LegacyText;
                mike = {};
                entity = '\n';
                mike['children'] = entity;
                entity = argBaz;
                entity = entity.key;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            golf[yankee] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.HIGHLIGHT;
            golf = {};
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                mike = 16;
                mike = options[mike];
                tango = undefined;
                mike = golf.bind(tango)(mike);
                zulu = mike.LegacyText;
                mike = {};
                oscar = 21;
                oscar = options[oscar];
                verify = golf.bind(tango)(oscar);
                options = verify.smartOutput;
                golf = argFoo;
                oscar = argBar;
                oscar = options.bind(verify)(golf, oscar, entity);
                mike['children'] = oscar;
                entity = entity.key;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            golf['react'] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.BLOCK_QUOTE;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.BLOCK_QUOTE;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                tango = _closure1_slot23;
                zulu = {};
                mike = _closure2_slot0;
                zulu['styles'] = mike;
                zulu['state'] = entity;
                mike = argFoo;
                zulu['node'] = mike;
                mike = argBar;
                zulu['output'] = mike;
                mike = entity.key;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            golf[yankee] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.PARAGRAPH;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.PARAGRAPH;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            backup = 600;
            foxtrot = 'order';
            golf[foxtrot] = backup;
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                mike = 16;
                mike = options[mike];
                tango = undefined;
                mike = golf.bind(tango)(mike);
                zulu = mike.LegacyText;
                mike = {};
                oscar = 21;
                oscar = options[oscar];
                verify = golf.bind(tango)(oscar);
                options = verify.smartOutput;
                golf = argFoo;
                oscar = argBar;
                oscar = options.bind(verify)(golf, oscar, entity);
                mike['children'] = oscar;
                entity = entity.key;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            golf[yankee] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.EMOJI;
            golf = {};
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    mike = argFoo;
                    report = _closure1_slot13;
                    tango = _closure1_slot8;
                    zulu = {};
                    entity = mike.surrogate;
                    if(entity) { _fun00048_ip = 30; continue _fun00047 }
 25:
                    entity = mike.content;
 30:
                    zulu['children'] = entity;
                    entity = argBaz;
                    mike = entity.key;
                    entity = undefined;
                    entity = report.bind(entity)(tango, zulu, mike);
                    return entity;
                }
            };
            golf['react'] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.CUSTOM_EMOJI;
            golf = {};
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    golf = argFoo;
                    mike = argBaz;
                    entity = golf.src;
                    oscar = _closure1_slot13;
                    if(entity) { _fun00050_ip = 76; continue _fun00049 }
 22:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 16;
                    entity = tango[entity];
                    report = undefined;
                    entity = zulu.bind(report)(entity);
                    tango = entity.LegacyText;
                    zulu = {};
                    entity = golf.alt;
                    zulu['children'] = entity;
                    entity = mike.key;
                    entity = oscar.bind(report)(tango, zulu, entity);
                    _fun00050_ip = 143; continue _fun00049;
 76:
                    report = _closure1_slot4;
                    tango = {};
                    zulu = _closure2_slot0;
                    zulu = zulu.emoji;
                    if(zulu) { _fun00050_ip = 108; continue _fun00049 }
 98:
                    options = _closure1_slot16;
                    zulu = options.emoji;
 108:
                    tango['style'] = zulu;
                    zulu = {};
                    golf = golf.src;
                    zulu['uri'] = golf;
                    tango['source'] = zulu;
                    zulu = mike.key;
                    mike = undefined;
                    entity = oscar.bind(mike)(report, tango, zulu);
 143:
                    return entity;
                }
            };
            golf['react'] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.SPOILER;
            golf = {};
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                zulu = _closure1_slot1;
                options = _closure1_slot2;
                mike = 31;
                mike = options[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                golf = _closure2_slot0;
                verify = golf.spoiler;
                mike['spoilerStyle'] = verify;
                golf = golf.spoilerRevealed;
                mike['spoilerRevealedStyle'] = golf;
                golf = _closure1_slot0;
                oscar = 21;
                oscar = options[oscar];
                verify = golf.bind(tango)(oscar);
                options = verify.smartOutput;
                golf = argFoo;
                oscar = argBar;
                oscar = options.bind(verify)(golf, oscar, entity);
                mike['children'] = oscar;
                entity = entity.key;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            golf['react'] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.STATIC_ROUTE_LINK;
            golf = {};
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    offset = argFoo;
                    entity = argBaz;
                    var _closure3_slot0 = offset;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    verify = 21;
                    mike = mike[verify];
                    report = undefined;
                    tango = zulu.bind(report)(mike);
                    zulu = tango.isStaticRouteIconType;
                    mike = offset.channelId;
                    mike = zulu.bind(tango)(mike);
                    if(mike) { _fun00052_ip = 60; continue _fun00051 }
 56:
                    mike = null;
                    return mike;
 60:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    tango = 32;
                    mike = mike[tango];
                    golf = zulu.bind(report)(mike);
                    zulu = offset.channelId;
                    mike = _closure1_slot12;
                    mike = mike.GUILD_HOME;
                    if(!(mike !== zulu)) { _fun00052_ip = 166; continue _fun00051 }
 99:
                    mike = _closure1_slot12;
                    mike = mike.SERVER_GUIDE;
                    if(!(mike !== zulu)) { _fun00052_ip = 166; continue _fun00051 }
 113:
                    mike = _closure1_slot12;
                    mike = mike.CHANNEL_BROWSER;
                    if(!(mike !== zulu)) { _fun00052_ip = 144; continue _fun00051 }
 127:
                    mike = _closure1_slot12;
                    mike = mike.CUSTOMIZE_COMMUNITY;
                    sizing = golf;
                    if(!(mike === zulu)) { _fun00052_ip = 183; continue _fun00051 }
 144:
                    zulu = _closure1_slot1;
                    golf = _closure1_slot2;
                    mike = 33;
                    mike = golf[mike];
                    sizing = zulu.bind(report)(mike);
                    _fun00052_ip = 183; continue _fun00051;
 166:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    mike = mike[tango];
                    sizing = zulu.bind(report)(mike);
 183:
                    tango = _closure1_slot14;
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 16;
                    mike = golf[mike];
                    mike = options.bind(report)(mike);
                    zulu = mike.LegacyText;
                    mike = {};
                    romeo = 'button';
                    mike['accessibilityRole'] = romeo;
                    kilo = _closure2_slot0;
                    romeo = kilo.staticRouteLink;
                    mike['style'] = romeo;
                    yankee = function() { // Original name: onPress
                        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                            entity = _closure3_slot0;
                            tango = entity.guildId;
                            report = entity.channelId;
                            zulu = _closure1_slot9;
                            mike = zulu.getGuild;
                            golf = mike.bind(zulu)(tango);
                            zulu = null;
                            mike = zulu != tango;
                            if(!mike) { _fun00054_ip = 47; continue _fun00053 }
 43:
                            mike = zulu != golf;
 47:
                            if(!mike) { _fun00054_ip = 71; continue _fun00053 }
 50:
                            oscar = golf.hasFeature;
                            zulu = _closure1_slot10;
                            zulu = zulu.COMMUNITY;
                            mike = oscar.bind(golf)(zulu);
 71:
                            if(!mike) { _fun00054_ip = 152; continue _fun00053 }
 74:
                            mike = _closure1_slot12;
                            mike = mike.GUILD_HOME;
                            mike = report !== mike;
                            if(!mike) { _fun00054_ip = 105; continue _fun00053 }
 91:
                            zulu = _closure1_slot12;
                            zulu = zulu.SERVER_GUIDE;
                            mike = report !== zulu;
 105:
                            if(mike) { _fun00054_ip = 152; continue _fun00053 }
 108:
                            report = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 10;
                            zulu = zulu[mike];
                            mike = undefined;
                            zulu = report.bind(mike)(zulu);
                            mike = zulu.transitionToStaticChannelRoute;
                            entity = _closure1_slot11;
                            entity = entity.GUILD_HOME;
                            entity = mike.bind(zulu)(tango, entity);
 152:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike['onPress'] = yankee;
                    romeo = _closure1_slot13;
                    backup = _closure1_slot1;
                    foxtrot = 15;
                    oscar = golf[foxtrot];
                    yankee = backup.bind(report)(oscar);
                    oscar = {};
                    oscar['source'] = sizing;
                    kilo = kilo.staticRouteLinkIcon;
                    oscar['style'] = kilo;
                    foxtrot = golf[foxtrot];
                    foxtrot = backup.bind(report)(foxtrot);
                    foxtrot = foxtrot.Sizes;
                    foxtrot = foxtrot.REFRESH_SMALL_16;
                    oscar['size'] = foxtrot;
                    yankee = romeo.bind(report)(yankee, oscar);
                    oscar = new Array(2);
                    oscar[0] = yankee;
                    golf = golf[verify];
                    verify = options.bind(report)(golf);
                    options = verify.smartOutput;
                    golf = argBar;
                    golf = options.bind(verify)(offset, golf, entity);
                    oscar[1] = golf;
                    mike['children'] = oscar;
                    entity = entity.key;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                }
            };
            golf['react'] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.INLINE_CODE;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.INLINE_CODE;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                tango = _closure1_slot24;
                zulu = {};
                mike = _closure2_slot0;
                zulu['styles'] = mike;
                zulu['state'] = entity;
                mike = argFoo;
                zulu['node'] = mike;
                mike = argBar;
                zulu['output'] = mike;
                mike = entity.key;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            golf[yankee] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.CODE_BLOCK;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            backup = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.CODE_BLOCK;
            sizing = backup[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: parse
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 30;
                    entity = oscar[entity];
                    tango = undefined;
                    entity = report.bind(tango)(entity);
                    zulu = entity.DEFAULT_RULES;
                    entity = 29;
                    entity = oscar[entity];
                    entity = report.bind(tango)(entity);
                    entity = entity.AST_KEY;
                    entity = entity.CODE_BLOCK;
                    oscar = zulu[entity];
                    report = oscar.parse;
                    tango = argFoo;
                    zulu = argBar;
                    entity = argBaz;
                    entity = report.bind(oscar)(tango, zulu, entity);
                    tango = entity.lang;
                    zulu = tango.toLowerCase;
                    tango = zulu.bind(tango)();
                    zulu = 'ansi';
                    if(!(zulu === tango)) { _fun00056_ip = 138; continue _fun00055 }
 107:
                    report = entity.content;
                    tango = report.replaceAll;
                    zulu = _closure1_slot15;
                    mike = '';
                    mike = tango.bind(report)(zulu, mike);
                    entity['content'] = mike;
 138:
                    return entity;
                }
            };
            backup = 'parse';
            golf[backup] = foxtrot;
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                tango = _closure1_slot25;
                zulu = {};
                mike = _closure2_slot0;
                zulu['styles'] = mike;
                zulu['state'] = entity;
                mike = argFoo;
                zulu['node'] = mike;
                mike = argBar;
                zulu['output'] = mike;
                mike = entity.key;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            golf[yankee] = foxtrot;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.MENTION;
            golf = {};
            foxtrot = oscar[offset];
            foxtrot = zulu.bind(report)(foxtrot);
            kilo = foxtrot.DEFAULT_RULES;
            foxtrot = oscar[mike];
            foxtrot = zulu.bind(report)(foxtrot);
            foxtrot = foxtrot.AST_KEY;
            foxtrot = foxtrot.MENTION;
            sizing = kilo[foxtrot];
            output = golf;
            foxtrot = copyDataProperties(output, sizing);
            foxtrot = function(argFoo, argBar, argBaz) { // Original name: parse
                entity = {};
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 30;
                mike = oscar[mike];
                zulu = undefined;
                mike = report.bind(zulu)(mike);
                tango = mike.DEFAULT_RULES;
                mike = 29;
                mike = oscar[mike];
                mike = report.bind(zulu)(mike);
                mike = mike.AST_KEY;
                mike = mike.MENTION;
                mike = tango[mike];
                oscar = mike.parse;
                report = argFoo;
                tango = argBar;
                mike = argBaz;
                options = oscar.bind(zulu)(report, tango, mike);
                verify = entity;
                mike = copyDataProperties(verify, options);
                mike = 'guildId';
                entity[mike] = zulu;
                return entity;
            };
            golf[backup] = foxtrot;
            golf[yankee] = romeo;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.CHANNEL_MENTION;
            golf = {};
            romeo = oscar[offset];
            romeo = zulu.bind(report)(romeo);
            foxtrot = romeo.DEFAULT_RULES;
            romeo = oscar[mike];
            romeo = zulu.bind(report)(romeo);
            romeo = romeo.AST_KEY;
            romeo = romeo.CHANNEL_MENTION;
            sizing = foxtrot[romeo];
            output = golf;
            romeo = copyDataProperties(output, sizing);
            romeo = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                tango = _closure1_slot26;
                zulu = {};
                oscar = _closure2_slot0;
                zulu['styles'] = oscar;
                zulu['state'] = entity;
                oscar = argFoo;
                zulu['node'] = oscar;
                oscar = argBar;
                zulu['output'] = oscar;
                mike = _closure2_slot1;
                zulu['variants'] = mike;
                mike = entity.key;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            golf[yankee] = romeo;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.ATTACHMENT_LINK;
            golf = {};
            romeo = oscar[offset];
            romeo = zulu.bind(report)(romeo);
            foxtrot = romeo.DEFAULT_RULES;
            romeo = oscar[mike];
            romeo = zulu.bind(report)(romeo);
            romeo = romeo.AST_KEY;
            romeo = romeo.ATTACHMENT_LINK;
            sizing = foxtrot[romeo];
            output = golf;
            romeo = copyDataProperties(output, sizing);
            romeo = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                tango = _closure1_slot27;
                zulu = {};
                oscar = _closure2_slot0;
                zulu['styles'] = oscar;
                zulu['state'] = entity;
                oscar = argFoo;
                zulu['node'] = oscar;
                oscar = argBar;
                zulu['output'] = oscar;
                mike = _closure2_slot1;
                zulu['variants'] = mike;
                mike = entity.key;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            golf[yankee] = romeo;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.SOUNDBOARD;
            golf = {};
            romeo = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot14;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                mike = 24;
                mike = options[mike];
                tango = undefined;
                mike = golf.bind(tango)(mike);
                zulu = mike.Text;
                mike = {};
                oscar = 'text-md/bold';
                mike['variant'] = oscar;
                oscar = 21;
                oscar = options[oscar];
                verify = golf.bind(tango)(oscar);
                options = verify.smartOutput;
                golf = argFoo;
                oscar = argBar;
                golf = options.bind(verify)(golf, oscar, entity);
                oscar = ['<sound:'];
                oscar[1] = golf;
                golf = '>';
                oscar[2] = golf;
                mike['children'] = oscar;
                entity = entity.key;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            golf['react'] = romeo;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.GUILD;
            golf = {};
            romeo = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                    foxtrot = argFoo;
                    entity = argBaz;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 34;
                    mike = tango[mike];
                    report = undefined;
                    zulu = zulu.bind(report)(mike);
                    mike = zulu.isAndroid;
                    mike = mike.bind(zulu)();
                    golf = 2;
                    if(mike) { _fun00058_ip = 85; continue _fun00057 }
 46:
                    zulu = _closure1_slot5;
                    mike = zulu.getFontScale;
                    zulu = mike.bind(zulu)();
                    mike = 1.5;
                    zulu = zulu < mike;
                    mike = 0;
                    if(!zulu) { _fun00058_ip = 82; continue _fun00057 }
 79:
                    mike = 1;
 82:
                    golf = mike;
 85:
                    mike = foxtrot.icon;
                    backup = null;
                    mike = backup != mike;
                    if(!mike) { _fun00058_ip = 283; continue _fun00057 }
 102:
                    tango = _closure1_slot13;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    offset = 14;
                    mike = mike[offset];
                    zulu = zulu.bind(report)(mike);
                    mike = {};
                    oscar = {};
                    oscar['top'] = golf;
                    mike['style'] = oscar;
                    oscar = foxtrot.icon;
                    mike['icon'] = oscar;
                    golf = _closure1_slot5;
                    oscar = golf.getFontScale;
                    golf = oscar.bind(golf)();
                    oscar = 1;
                    if(!(!(golf < oscar))) { _fun00058_ip = 244; continue _fun00057 }
 168:
                    oscar = 1.25;
                    if(!(!(golf < oscar))) { _fun00058_ip = 213; continue _fun00057 }
 182:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    oscar = oscar[offset];
                    oscar = golf.bind(report)(oscar);
                    oscar = oscar.GuildIconSizes;
                    oscar = oscar.XXSMALL;
                    _fun00058_ip = 242; continue _fun00057;
 213:
                    verify = _closure1_slot0;
                    golf = _closure1_slot2;
                    golf = golf[offset];
                    golf = verify.bind(report)(golf);
                    golf = golf.GuildIconSizes;
                    oscar = golf.XXSMALL_12;
 242:
                    _fun00058_ip = 273; continue _fun00057;
 244:
                    verify = _closure1_slot0;
                    golf = _closure1_slot2;
                    golf = golf[offset];
                    golf = verify.bind(report)(golf);
                    golf = golf.GuildIconSizes;
                    oscar = golf.XXXSMALL;
 273:
                    mike['size'] = oscar;
                    backup = tango.bind(report)(zulu, mike);
 283:
                    tango = _closure1_slot14;
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    golf = 16;
                    mike = romeo[golf];
                    mike = yankee.bind(report)(mike);
                    zulu = mike.LegacyText;
                    mike = {};
                    offset = _closure1_slot13;
                    verify = _closure1_slot7;
                    oscar = {};
                    kilo = _closure1_slot16;
                    kilo = kilo.guildIcon;
                    oscar['style'] = kilo;
                    oscar['children'] = backup;
                    verify = offset.bind(report)(verify, oscar);
                    oscar = new Array(2);
                    oscar[0] = verify;
                    verify = _closure1_slot13;
                    golf = romeo[golf];
                    golf = yankee.bind(report)(golf);
                    options = golf.LegacyText;
                    golf = {};
                    offset = 21;
                    offset = romeo[offset];
                    romeo = yankee.bind(report)(offset);
                    yankee = romeo.smartOutput;
                    offset = argBar;
                    offset = yankee.bind(romeo)(foxtrot, offset, entity);
                    golf['children'] = offset;
                    golf = verify.bind(report)(options, golf);
                    oscar[1] = golf;
                    mike['children'] = oscar;
                    entity = entity.key;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                }
            };
            golf['react'] = romeo;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.CHANNEL;
            golf = {};
            romeo = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    offset = argFoo;
                    entity = argBaz;
                    zulu = offset.iconType;
                    mike = null;
                    tango = mike != zulu;
                    mike = 'text';
                    romeo = mike;
                    if(!tango) { _fun00060_ip = 31; continue _fun00059 }
 28:
                    romeo = zulu;
 31:
                    backup = 2;
                    if(!(mike === romeo)) { _fun00060_ip = 40; continue _fun00059 }
 38:
                    backup = 0;
 40:
                    tango = _closure1_slot13;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    mike = 25;
                    mike = verify[mike];
                    report = undefined;
                    zulu = options.bind(report)(mike);
                    mike = {};
                    golf = 9;
                    golf = verify[golf];
                    golf = options.bind(report)(golf);
                    golf = golf.colors;
                    golf = golf.MENTION_FOREGROUND;
                    mike['themedColor'] = golf;
                    options = _closure1_slot0;
                    golf = 35;
                    golf = verify[golf];
                    yankee = options.bind(report)(golf);
                    golf = yankee.getChannelMentionIcon;
                    golf = golf.bind(yankee)(romeo);
                    mike['source'] = golf;
                    golf = _closure1_slot19;
                    golf = golf.bind(report)();
                    mike['size'] = golf;
                    golf = {};
                    yankee = 1;
                    golf['top'] = yankee;
                    mike['style'] = golf;
                    romeo = tango.bind(report)(zulu, mike);
                    tango = _closure1_slot14;
                    mike = 16;
                    mike = verify[mike];
                    mike = options.bind(report)(mike);
                    zulu = mike.LegacyText;
                    mike = {};
                    yankee = _closure1_slot13;
                    golf = _closure1_slot7;
                    oscar = {};
                    foxtrot = {};
                    foxtrot['paddingEnd'] = backup;
                    oscar['style'] = foxtrot;
                    oscar['children'] = romeo;
                    golf = yankee.bind(report)(golf, oscar);
                    oscar = new Array(2);
                    oscar[0] = golf;
                    golf = 21;
                    golf = verify[golf];
                    verify = options.bind(report)(golf);
                    options = verify.smartOutput;
                    golf = argBar;
                    golf = options.bind(verify)(offset, golf, entity);
                    oscar[1] = golf;
                    mike['children'] = oscar;
                    entity = entity.key;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                }
            };
            golf['react'] = romeo;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.COMMAND_MENTION;
            golf = {};
            romeo = oscar[offset];
            romeo = zulu.bind(report)(romeo);
            foxtrot = romeo.DEFAULT_RULES;
            romeo = oscar[mike];
            romeo = zulu.bind(report)(romeo);
            romeo = romeo.AST_KEY;
            romeo = romeo.COMMAND_MENTION;
            sizing = foxtrot[romeo];
            output = golf;
            romeo = copyDataProperties(output, sizing);
            romeo = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot13;
                tango = _closure1_slot28;
                zulu = {};
                mike = _closure2_slot0;
                zulu['styles'] = mike;
                zulu['state'] = entity;
                mike = argFoo;
                zulu['node'] = mike;
                mike = argBar;
                zulu['output'] = mike;
                mike = entity.key;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            golf[yankee] = romeo;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.TIMESTAMP;
            golf = {};
            romeo = oscar[offset];
            romeo = zulu.bind(report)(romeo);
            foxtrot = romeo.DEFAULT_RULES;
            romeo = oscar[mike];
            romeo = zulu.bind(report)(romeo);
            romeo = romeo.AST_KEY;
            romeo = romeo.TIMESTAMP;
            sizing = foxtrot[romeo];
            output = golf;
            romeo = copyDataProperties(output, sizing);
            romeo = function(argFoo, argBar, argBaz) { // Original name: react
                report = _closure1_slot13;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 36;
                entity = zulu[entity];
                tango = undefined;
                zulu = mike.bind(tango)(entity);
                mike = {};
                entity = argFoo;
                mike['node'] = entity;
                entity = _closure2_slot0;
                entity = entity.timestamp;
                mike['style'] = entity;
                entity = argBaz;
                entity = entity.key;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            golf[yankee] = romeo;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.LIST;
            golf = {};
            offset = oscar[offset];
            offset = zulu.bind(report)(offset);
            romeo = offset.DEFAULT_RULES;
            offset = oscar[mike];
            offset = zulu.bind(report)(offset);
            offset = offset.AST_KEY;
            offset = offset.LIST;
            sizing = romeo[offset];
            output = golf;
            offset = copyDataProperties(output, sizing);
            offset = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                    zulu = argFoo;
                    entity = argBaz;
                    var _closure3_slot0 = zulu;
                    tango = argBar;
                    var _closure3_slot1 = tango;
                    var _closure3_slot2 = entity;
                    tango = entity.level;
                    report = null;
                    oscar = report != tango;
                    tango = 0;
                    if(!oscar) { _fun00062_ip = 46; continue _fun00061 }
 40:
                    tango = entity.level;
 46:
                    var _closure3_slot3 = tango;
                    tango = zulu.start;
                    if(!(report == tango)) { _fun00062_ip = 66; continue _fun00061 }
 59:
                    tango = entity.start;
                    _fun00062_ip = 71; continue _fun00061;
 66:
                    tango = zulu.start;
 71:
                    var _closure3_slot4 = tango;
                    tango = zulu.items;
                    zulu = tango.map;
                    mike = function(argFoo, argBar) {
                        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                            sizing = argFoo;
                            verify = argBar;
                            var _closure4_slot0 = sizing;
                            entity = _closure3_slot3;
                            options = '⚬ ';
                            offset = 0;
                            if(!(offset === entity)) { _fun00064_ip = 169; continue _fun00063 }
 34:
                            entity = _closure3_slot0;
                            entity = entity.ordered;
                            mike = 'boolean';
                            entity = typeof entity;
                            if(!(mike === entity)) { _fun00064_ip = 78; continue _fun00063 }
 55:
                            entity = _closure3_slot0;
                            entity = entity.ordered;
                            if(!entity) { _fun00064_ip = 78; continue _fun00063 }
 68:
                            mike = _closure3_slot4;
                            entity = null;
                            if(!(entity == mike)) { _fun00064_ip = 129; continue _fun00063 }
 78:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 34;
                            mike = mike[entity];
                            entity = undefined;
                            mike = zulu.bind(entity)(mike);
                            entity = mike.isAndroid;
                            mike = entity.bind(mike)();
                            entity = '● ';
                            if(!mike) { _fun00064_ip = 127; continue _fun00063 }
 121:
                            entity = '• ';
 127:
                            _fun00064_ip = 166; continue _fun00063;
 129:
                            mike = _closure3_slot4;
                            report = mike + verify;
                            mike = global;
                            mike = mike.HermesInternal;
                            tango = mike.concat;
                            zulu = '';
                            mike = '. ';
                            entity = tango.bind(zulu)(report, mike);
 166:
                            options = entity;
 169:
                            kilo = {};
                            entity = _closure3_slot2;
                            sequence = kilo;
                            vacuum = entity;
                            mike = copyDataProperties(sequence, vacuum);
                            tango = entity.key;
                            entity = global;
                            mike = entity.HermesInternal;
                            zulu = mike.concat;
                            romeo = '';
                            mike = '-';
                            zulu = zulu.bind(romeo)(tango, mike, verify);
                            mike = 'key';
                            kilo[mike] = zulu;
                            mike = _closure3_slot3;
                            yankee = 1;
                            zulu = mike + yankee;
                            mike = 'level';
                            kilo[mike] = zulu;
                            zulu = _closure3_slot4;
                            mike = null;
                            if(!(mike == zulu)) { _fun00064_ip = 263; continue _fun00063 }
 257:
                            zulu = _closure3_slot4;
                            _fun00064_ip = 271; continue _fun00063;
 263:
                            mike = _closure3_slot4;
                            zulu = mike + yankee;
 271:
                            mike = 'start';
                            kilo[mike] = zulu;
                            var _closure4_slot1 = kilo;
                            report = _closure1_slot14;
                            output = _closure1_slot0;
                            echo = _closure1_slot2;
                            mike = 24;
                            mike = echo[mike];
                            tango = undefined;
                            mike = output.bind(tango)(mike);
                            zulu = mike.Text;
                            mike = {};
                            golf = _closure1_slot16;
                            result = golf.listItem;
                            mike['style'] = result;
                            result = 'text-sm/medium';
                            mike['variant'] = result;
                            result = _closure1_slot14;
                            foxtrot = 16;
                            foxtrot = echo[foxtrot];
                            foxtrot = output.bind(tango)(foxtrot);
                            output = foxtrot.LegacyText;
                            foxtrot = {};
                            golf = golf.bullet;
                            foxtrot['style'] = golf;
                            golf = _closure3_slot3;
                            golf = golf > offset;
                            offset = romeo;
                            if(!golf) { _fun00064_ip = 411; continue _fun00063 }
 390:
                            update = '  ';
                            echo = update.repeat;
                            golf = _closure3_slot3;
                            offset = echo.bind(update)(golf);
 411:
                            golf = new Array(2);
                            golf[0] = offset;
                            golf[1] = options;
                            foxtrot['children'] = golf;
                            golf = _closure3_slot2;
                            sequence = golf.key;
                            golf = entity.HermesInternal;
                            echo = golf.concat;
                            options = 'list-';
                            golf = '-item-';
                            source = '-bullet';
                            config = options;
                            vacuum = golf;
                            control = verify;
                            offset = config[echo](sequence, vacuum, control, source, update);
                            foxtrot = result.bind(tango)(output, foxtrot, offset);
                            offset = new Array(3);
                            offset[0] = foxtrot;
                            output = entity.Array;
                            foxtrot = output.isArray;
                            foxtrot = foxtrot.bind(output)(sizing);
                            if(foxtrot) { _fun00064_ip = 524; continue _fun00063 }
 512:
                            foxtrot = _closure3_slot1;
                            foxtrot = foxtrot.bind(tango)(sizing, kilo);
                            _fun00064_ip = 539; continue _fun00063;
 524:
                            kilo = sizing.map;
                            backup = function(argFoo, argBar) {
                                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                                    yankee = argFoo;
                                    report = argBar;
                                    mike = yankee.type;
                                    entity = 'list';
                                    options = entity === mike;
                                    entity = 1;
                                    zulu = report + entity;
                                    mike = _closure4_slot0;
                                    mike = mike.length;
                                    golf = zulu === mike;
                                    tango = _closure1_slot14;
                                    mike = _closure1_slot3;
                                    zulu = mike.Fragment;
                                    mike = {};
                                    verify = options;
                                    if(!verify) { _fun00066_ip = 70; continue _fun00065 }
 66:
                                    verify = '\n';
 70:
                                    oscar = new Array(3);
                                    oscar[0] = verify;
                                    offset = _closure3_slot1;
                                    verify = _closure4_slot1;
                                    entity = undefined;
                                    verify = offset.bind(entity)(yankee, verify);
                                    oscar[1] = verify;
                                    if(!golf) { _fun00066_ip = 107; continue _fun00065 }
 104:
                                    golf = !options;
 107:
                                    if(!golf) { _fun00066_ip = 114; continue _fun00065 }
 110:
                                    golf = '\n';
 114:
                                    oscar[2] = golf;
                                    mike['children'] = oscar;
                                    entity = tango.bind(entity)(zulu, mike, report);
                                    return entity;
                                }
                            };
                            foxtrot = kilo.bind(sizing)(backup);
 539:
                            offset[1] = foxtrot;
                            foxtrot = _closure3_slot0;
                            foxtrot = foxtrot.items;
                            backup = foxtrot.length;
                            foxtrot = verify + yankee;
                            yankee = '  ';
                            if(!(backup === foxtrot)) { _fun00064_ip = 575; continue _fun00063 }
 572:
                            yankee = romeo;
 575:
                            offset[2] = yankee;
                            mike['children'] = offset;
                            oscar = _closure3_slot2;
                            oscar = oscar.key;
                            entity = entity.HermesInternal;
                            entity = entity.concat;
                            entity = entity.bind(options)(oscar, golf, verify);
                            entity = report.bind(tango)(zulu, mike, entity);
                            return entity;
                        }
                    };
                    oscar = zulu.bind(tango)(mike);
                    report = _closure1_slot13;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 24;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.Text;
                    mike = {};
                    golf = _closure1_slot16;
                    golf = golf.list;
                    mike['style'] = golf;
                    golf = 'text-sm/medium';
                    mike['variant'] = golf;
                    mike['children'] = oscar;
                    golf = entity.key;
                    entity = global;
                    entity = entity.HermesInternal;
                    oscar = entity.concat;
                    entity = 'list-';
                    entity = oscar.bind(entity)(golf);
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            golf[yankee] = offset;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.HEADING;
            golf = {};
            offset = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                    verify = argFoo;
                    entity = argBaz;
                    zulu = verify.level;
                    golf = 'heading-xl/bold';
                    mike = 1;
                    if(!(mike !== zulu)) { _fun00068_ip = 51; continue _fun00067 }
 25:
                    tango = verify.level;
                    mike = 'heading-md/bold';
                    zulu = 2;
                    if(!(zulu === tango)) { _fun00068_ip = 48; continue _fun00067 }
 42:
                    mike = 'heading-lg/bold';
 48:
                    golf = mike;
 51:
                    report = _closure1_slot14;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 24;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.Text;
                    mike = {};
                    mike['variant'] = golf;
                    options = entity.forceWhite;
                    golf = 'header-primary';
                    if(!options) { _fun00068_ip = 110; continue _fun00067 }
 106:
                    golf = 'white';
 110:
                    mike['color'] = golf;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    oscar = 21;
                    oscar = options[oscar];
                    options = golf.bind(tango)(oscar);
                    golf = options.smartOutput;
                    oscar = argBar;
                    golf = golf.bind(options)(verify, oscar, entity);
                    oscar = new Array(2);
                    oscar[0] = golf;
                    golf = '\n';
                    oscar[1] = golf;
                    mike['children'] = oscar;
                    entity = entity.key;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            golf['react'] = offset;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.SUBTEXT;
            golf = {};
            offset = function(argFoo, argBar, argBaz) { // Original name: react
                entity = argBaz;
                report = _closure1_slot14;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                mike = 24;
                mike = options[mike];
                tango = undefined;
                mike = golf.bind(tango)(mike);
                zulu = mike.Text;
                mike = {'variant': 'text-sm/normal', 'color': 'text-muted'};
                oscar = 21;
                oscar = options[oscar];
                verify = golf.bind(tango)(oscar);
                options = verify.smartOutput;
                golf = argFoo;
                oscar = argBar;
                golf = options.bind(verify)(golf, oscar, entity);
                oscar = new Array(2);
                oscar[0] = golf;
                golf = '\n';
                oscar[1] = golf;
                mike['children'] = oscar;
                entity = entity.key;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            golf['react'] = offset;
            entity[options] = golf;
            golf = oscar[mike];
            golf = zulu.bind(report)(golf);
            golf = golf.AST_KEY;
            options = golf.SILENT_PREFIX;
            golf = {};
            verify = function(argFoo, argBar, argBaz) { // Original name: react
                _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                    mike = argFoo;
                    entity = argBaz;
                    zulu = mike.content;
                    tango = 'string';
                    zulu = typeof zulu;
                    if(!(tango !== zulu)) { _fun00070_ip = 105; continue _fun00069 }
 22:
                    oscar = _closure1_slot13;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 16;
                    zulu = verify[zulu];
                    report = undefined;
                    zulu = options.bind(report)(zulu);
                    tango = zulu.LegacyText;
                    zulu = {};
                    golf = 21;
                    golf = verify[golf];
                    verify = options.bind(report)(golf);
                    options = verify.smartOutput;
                    golf = argBar;
                    golf = options.bind(verify)(mike, golf, entity);
                    zulu['children'] = golf;
                    entity = entity.key;
                    entity = oscar.bind(report)(tango, zulu, entity);
                    _fun00070_ip = 110; continue _fun00069;
 105:
                    entity = mike.content;
 110:
                    return entity;
                }
            };
            golf['react'] = verify;
            entity[options] = golf;
            mike = oscar[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.AST_KEY;
            zulu = mike.SHOP_LINK;
            mike = {};
            mike['react'] = tango;
            entity[zulu] = mike;
            return entity;
        }
    };
    zulu['default'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: plainMentionRenderer
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            mike = argFoo;
            entity = mike.content;
            zulu = 'string';
            entity = typeof entity;
            if(!(zulu !== entity)) { _fun00072_ip = 65; continue _fun00071 }
 19:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 21;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.smartOutput;
            zulu = argBar;
            entity = argBaz;
            entity = tango.bind(report)(mike, zulu, entity);
            _fun00072_ip = 70; continue _fun00071;
 65:
            entity = mike.content;
 70:
            return entity;
        }
    };
    zulu['plainMentionRenderer'] = tango;
    mike = function(argFoo) { // Original name: plainSpoilerRenderer
        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
            mike = argFoo;
            zulu = mike.content;
            entity = '███';
            tango = 'string';
            zulu = typeof zulu;
            if(!(tango === zulu)) { _fun00074_ip = 61; continue _fun00073 }
 25:
            report = mike.content;
            tango = report.replace;
            zulu = /[^\n]/g;
            mike = '█';
            entity = tango.bind(report)(zulu, mike);
 61:
            return entity;
        }
    };
    zulu['plainSpoilerRenderer'] = mike;
    return entity;
})();