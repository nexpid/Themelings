// app/modules/markup/MarkupChannelMentionRule.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    offset = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: makeGuild
        report = argFoo;
        entity = {};
        mike = 'guild';
        entity['type'] = mike;
        mike = report.id;
        entity['guildId'] = mike;
        golf = _closure1_slot0;
        oscar = _closure1_slot2;
        zulu = 7;
        zulu = oscar[zulu];
        tango = undefined;
        verify = golf.bind(tango)(zulu);
        options = verify.truncateText;
        golf = report.name;
        zulu = 32;
        zulu = options.bind(verify)(golf, zulu);
        entity['content'] = zulu;
        zulu = _closure1_slot1;
        mike = 8;
        mike = oscar[mike];
        tango = zulu.bind(tango)(mike);
        zulu = tango.getGuildIconURL;
        mike = {};
        oscar = report.id;
        mike['id'] = oscar;
        report = report.icon;
        mike['icon'] = report;
        report = 40;
        mike['size'] = report;
        mike = zulu.bind(tango)(mike);
        entity['icon'] = mike;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: makeChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot17;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 7;
            entity = zulu[entity];
            zulu = undefined;
            golf = report.bind(zulu)(entity);
            oscar = golf.truncateText;
            report = mike.name;
            entity = 32;
            entity = oscar.bind(golf)(report, entity);
            oscar = tango.bind(zulu)(entity);
            entity = {};
            zulu = 'channel';
            entity['type'] = zulu;
            report = 'italics';
            zulu = argBar;
            tango = oscar;
            if(!(report === zulu)) { _fun00002_ip = 106; continue _fun00001 }
 81:
            zulu = {};
            report = 'em';
            zulu['type'] = report;
            report = new Array(1);
            report[0] = oscar;
            zulu['content'] = report;
            tango = zulu;
 106:
            zulu = new Array(1);
            zulu[0] = tango;
            entity['content'] = zulu;
            zulu = mike.type;
            entity['channelType'] = zulu;
            mike = mike.iconType;
            entity['iconType'] = mike;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: makeMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = {};
            mike = 'channel';
            entity['type'] = mike;
            tango = _closure1_slot17;
            zulu = undefined;
            mike = '';
            zulu = tango.bind(zulu)(mike);
            mike = new Array(1);
            mike[0] = zulu;
            entity['content'] = mike;
            mike = 'message';
            zulu = argFoo;
            if(!zulu) { _fun00004_ip = 54; continue _fun00003 }
 50:
            mike = 'post';
 54:
            entity['iconType'] = mike;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: getChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            foxtrot = argFoo;
            options = argBar;
            var _closure2_slot0 = foxtrot;
            zulu = _closure1_slot4;
            mike = zulu.getChannel;
            zulu = mike.bind(zulu)(foxtrot);
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 10;
            tango = golf[mike];
            mike = undefined;
            romeo = report.bind(mike)(tango);
            yankee = romeo.getChannelRoleSubscriptionStatus;
            output = _closure1_slot4;
            sizing = _closure1_slot3;
            kilo = _closure1_slot6;
            echo = romeo;
            result = foxtrot;
            tango = echo[yankee](result, output, sizing, kilo, backup);
            oscar = tango.isSubscriptionGated;
            tango = 11;
            tango = golf[tango];
            report = report.bind(mike)(tango);
            tango = report.getMentionIconType;
            golf = tango.bind(report)(zulu);
            tango = null;
            offset = tango != golf;
            report = 'text';
            if(!offset) { _fun00006_ip = 124; continue _fun00005 }
 121:
            report = golf;
 124:
            if(!(tango != options)) { _fun00006_ip = 150; continue _fun00005 }
 128:
            golf = options.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            golf = golf.bind(options)(entity);
            if(!(tango == golf)) { _fun00006_ip = 353; continue _fun00005 }
 150:
            options = tango != zulu;
            entity = null;
            if(!options) { _fun00006_ip = 351; continue _fun00005 }
 162:
            options = {};
            offset = zulu.type;
            options['type'] = offset;
            offset = zulu.id;
            options['id'] = offset;
            offset = zulu.guild_id;
            options['guildId'] = offset;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            romeo = 12;
            romeo = yankee[romeo];
            backup = offset.bind(mike)(romeo);
            foxtrot = backup.computeChannelName;
            romeo = _closure1_slot8;
            verify = _closure1_slot7;
            verify = foxtrot.bind(backup)(zulu, romeo, verify);
            options['name'] = verify;
            verify = zulu.isPrivate;
            verify = verify.bind(zulu)();
            options['isDm'] = verify;
            verify = zulu.isForumPost;
            verify = verify.bind(zulu)();
            options['isForumPost'] = verify;
            verify = 13;
            verify = yankee[verify];
            foxtrot = offset.bind(mike)(verify);
            romeo = foxtrot.isChannelTypeMentionable;
            verify = zulu.type;
            verify = romeo.bind(foxtrot)(verify);
            options['isMentionable'] = verify;
            verify = 14;
            verify = yankee[verify];
            offset = offset.bind(mike)(verify);
            verify = offset.canViewChannel;
            verify = verify.bind(offset)(zulu);
            options['canViewChannel'] = verify;
            options['roleSubscriptionGated'] = oscar;
            options['iconType'] = report;
            verify = zulu.parent_id;
            options['parentId'] = verify;
            entity = options;
 351:
            return entity;
 353:
            entity = {};
            options = golf.type;
            entity['type'] = options;
            options = golf.id;
            entity['id'] = options;
            options = golf.guild_id;
            entity['guildId'] = options;
            golf = golf.name;
            entity['name'] = golf;
            golf = tango != zulu;
            if(!golf) { _fun00006_ip = 408; continue _fun00005 }
 398:
            options = zulu.isPrivate;
            golf = options.bind(zulu)();
 408:
            entity['isDm'] = golf;
            golf = tango != zulu;
            if(!golf) { _fun00006_ip = 430; continue _fun00005 }
 420:
            options = zulu.isForumPost;
            golf = options.bind(zulu)();
 430:
            entity['isForumPost'] = golf;
            golf = true;
            entity['isMentionable'] = golf;
            entity['canViewChannel'] = golf;
            entity['roleSubscriptionGated'] = oscar;
            entity['iconType'] = report;
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun00006_ip = 472; continue _fun00005 }
 466:
            mike = zulu.parent_id;
 472:
            entity['parentId'] = mike;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: makeLink
        mike = argFoo;
        entity = {};
        zulu = 'link';
        entity['type'] = zulu;
        tango = {};
        zulu = 'text';
        tango['type'] = zulu;
        tango['content'] = mike;
        zulu = new Array(1);
        zulu[0] = tango;
        entity['content'] = zulu;
        entity['target'] = mike;
        mike = undefined;
        entity['title'] = mike;
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: makeText
        entity = {};
        mike = 'text';
        entity['type'] = mike;
        mike = argFoo;
        entity['content'] = mike;
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: handleUnknownChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot5;
            entity = tango.getGuild;
            oscar = entity.bind(tango)(zulu);
            options = null;
            entity = options == oscar;
            report = undefined;
            golf = undefined;
            if(entity) { _fun00008_ip = 38; continue _fun00007 }
 33:
            golf = oscar.id;
 38:
            entity = {};
            tango = 'channelMention';
            entity['type'] = tango;
            entity['guildId'] = zulu;
            zulu = argBar;
            entity['channelId'] = zulu;
            zulu = argBaz;
            entity['messageId'] = zulu;
            zulu = argGrault;
            entity['originalLink'] = zulu;
            tango = options == oscar;
            zulu = null;
            if(tango) { _fun00008_ip = 112; continue _fun00007 }
 83:
            tango = argCorge;
            zulu = null;
            if(!(golf !== tango)) { _fun00008_ip = 112; continue _fun00007 }
 92:
            tango = _closure1_slot12;
            oscar = tango.bind(report)(oscar);
            tango = new Array(1);
            tango[0] = oscar;
            zulu = tango;
 112:
            entity['inContent'] = zulu;
            tango = _closure1_slot13;
            zulu = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 9;
            golf = offset[oscar];
            golf = verify.bind(report)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(report)(oscar);
            oscar = oscar.t;
            oscar = oscar.zLZPmp;
            golf = golf.bind(options)(oscar);
            oscar = golf.toLowerCase;
            oscar = oscar.bind(golf)();
            zulu['name'] = oscar;
            mike = _closure1_slot9;
            mike = mike.UNKNOWN;
            zulu['type'] = mike;
            mike = 'text';
            zulu['iconType'] = mike;
            mike = 'italics';
            zulu = tango.bind(report)(zulu, mike);
            mike = new Array(1);
            mike[0] = zulu;
            entity['content'] = mike;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: formatChannelMentionContent
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argBar;
            offset = argBaz;
            verify = argCorge;
            zulu = _closure1_slot12;
            report = undefined;
            mike = argFoo;
            yankee = zulu.bind(report)(mike);
            mike = _closure1_slot13;
            zulu = mike.bind(report)(entity);
            tango = _closure1_slot14;
            mike = entity.isForumPost;
            tango = tango.bind(report)(mike);
            if(!offset) { _fun00010_ip = 59; continue _fun00009 }
 53:
            if(verify) { _fun00010_ip = 186; continue _fun00009 }
 59:
            if(!offset) { _fun00010_ip = 88; continue _fun00009 }
 62:
            if(verify) { _fun00010_ip = 88; continue _fun00009 }
 65:
            mike = {};
            oscar = null;
            mike['inContent'] = oscar;
            oscar = new Array(1);
            oscar[0] = zulu;
            mike['content'] = oscar;
            _fun00010_ip = 184; continue _fun00009;
 88:
            if(offset) { _fun00010_ip = 138; continue _fun00009 }
 91:
            if(!verify) { _fun00010_ip = 138; continue _fun00009 }
 94:
            oscar = {};
            options = new Array(1);
            options[0] = yankee;
            oscar['inContent'] = options;
            options = entity.isForumPost;
            romeo = tango;
            if(!options) { _fun00010_ip = 124; continue _fun00009 }
 121:
            romeo = zulu;
 124:
            options = new Array(1);
            options[0] = romeo;
            oscar['content'] = options;
            _fun00010_ip = 181; continue _fun00009;
 138:
            options = undefined;
            if(offset) { _fun00010_ip = 178; continue _fun00009 }
 143:
            options = undefined;
            if(verify) { _fun00010_ip = 178; continue _fun00009 }
 148:
            verify = {};
            offset = new Array(1);
            offset[0] = yankee;
            verify['inContent'] = offset;
            offset = new Array(1);
            offset[0] = zulu;
            verify['content'] = offset;
            options = verify;
 178:
            oscar = options;
 181:
            mike = oscar;
 184:
            return mike;
 186:
            mike = entity.isForumPost;
            if(!mike) { _fun00010_ip = 221; continue _fun00009 }
 195:
            oscar = _closure1_slot4;
            mike = oscar.getChannel;
            entity = entity.parentId;
            verify = mike.bind(oscar)(entity);
            oscar = null;
            if(!(oscar == verify)) { _fun00010_ip = 250; continue _fun00009 }
 221:
            entity = {};
            mike = new Array(1);
            mike[0] = zulu;
            entity['inContent'] = mike;
            mike = new Array(1);
            mike[0] = tango;
            entity['content'] = mike;
            return entity;
 250:
            entity = {};
            tango = _closure1_slot13;
            mike = {};
            options = verify.name;
            mike['name'] = options;
            options = verify.type;
            mike['type'] = options;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 11;
            golf = offset[golf];
            options = options.bind(report)(golf);
            golf = options.getMentionIconType;
            golf = golf.bind(options)(verify);
            options = oscar != golf;
            oscar = 'forum';
            if(!options) { _fun00010_ip = 323; continue _fun00009 }
 320:
            oscar = golf;
 323:
            mike['iconType'] = oscar;
            tango = tango.bind(report)(mike);
            mike = new Array(1);
            mike[0] = tango;
            entity['inContent'] = mike;
            mike = new Array(1);
            mike[0] = zulu;
            entity['content'] = mike;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: parseChannel
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            golf = argCorge;
            entity = oscar.canViewChannel;
            if(entity) { _fun00012_ip = 223; continue _fun00011 }
 21:
            zulu = {};
            entity = 'channel';
            zulu['type'] = entity;
            options = _closure1_slot17;
            mike = oscar.roleSubscriptionGated;
            if(mike) { _fun00012_ip = 106; continue _fun00011 }
 47:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 9;
            tango = romeo[mike];
            offset = undefined;
            tango = yankee.bind(offset)(tango);
            verify = tango.intl;
            tango = verify.string;
            mike = romeo[mike];
            mike = yankee.bind(offset)(mike);
            mike = mike.t;
            mike = mike./YzI6+;
            tango = tango.bind(verify)(mike);
            _fun00012_ip = 111; continue _fun00011;
 106:
            tango = oscar.name;
 111:
            mike = undefined;
            tango = options.bind(mike)(tango);
            mike = new Array(1);
            mike[0] = tango;
            zulu['content'] = mike;
            mike = oscar.roleSubscriptionGated;
            if(mike) { _fun00012_ip = 151; continue _fun00011 }
 139:
            entity = _closure1_slot9;
            entity = entity.UNKNOWN;
            _fun00012_ip = 156; continue _fun00011;
 151:
            entity = oscar.type;
 156:
            zulu['channelType'] = entity;
            entity = 'locked';
            zulu['iconType'] = entity;
            entity = {};
            mike = 'channelMention';
            entity['type'] = mike;
            mike = oscar.guildId;
            entity['guildId'] = mike;
            mike = oscar.id;
            entity['channelId'] = mike;
            entity['messageId'] = report;
            mike = null;
            entity['inContent'] = mike;
            mike = new Array(1);
            mike[0] = zulu;
            entity['content'] = mike;
            return entity;
 223:
            entity = oscar.isMentionable;
            if(entity) { _fun00012_ip = 275; continue _fun00011 }
 232:
            zulu = _closure1_slot17;
            tango = oscar.name;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = '#';
            mike = mike.bind(entity)(tango);
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
 275:
            tango = {};
            entity = 'channelMention';
            tango['type'] = entity;
            entity = oscar.id;
            tango['channelId'] = entity;
            entity = oscar.guildId;
            tango['guildId'] = entity;
            tango['messageId'] = report;
            tango['originalLink'] = golf;
            options = _closure1_slot5;
            mike = options.getGuild;
            entity = oscar.guildId;
            yankee = mike.bind(options)(entity);
            entity = null;
            if(!(entity != yankee)) { _fun00012_ip = 393; continue _fun00011 }
 340:
            romeo = oscar.guildId;
            mike = {};
            sizing = mike;
            kilo = tango;
            options = copyDataProperties(sizing, kilo);
            offset = _closure1_slot19;
            foxtrot = entity != report;
            output = undefined;
            report = argBaz;
            backup = romeo === report;
            sizing = yankee;
            kilo = oscar;
            kilo = output[offset](sizing, kilo, backup, foxtrot, romeo);
            sizing = mike;
            report = copyDataProperties(sizing, kilo);
            return mike;
 393:
            mike = oscar.isDm;
            if(mike) { _fun00012_ip = 509; continue _fun00011 }
 402:
            if(!(entity == golf)) { _fun00012_ip = 496; continue _fun00011 }
 406:
            report = _closure1_slot17;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 9;
            options = yankee[entity];
            mike = undefined;
            options = offset.bind(mike)(options);
            verify = options.intl;
            options = verify.string;
            entity = yankee[entity];
            entity = offset.bind(mike)(entity);
            entity = entity.t;
            entity = entity.J90oLS;
            verify = options.bind(verify)(entity);
            entity = global;
            entity = entity.HermesInternal;
            options = entity.concat;
            entity = '#';
            entity = options.bind(entity)(verify);
            entity = report.bind(mike)(entity);
            _fun00012_ip = 507; continue _fun00011;
 496:
            report = _closure1_slot16;
            mike = undefined;
            entity = report.bind(mike)(golf);
 507:
            _fun00012_ip = 593; continue _fun00011;
 509:
            mike = {};
            sizing = mike;
            kilo = tango;
            tango = copyDataProperties(sizing, kilo);
            report = _closure1_slot10;
            tango = 'guildId';
            mike[tango] = report;
            tango = _closure1_slot13;
            report = undefined;
            tango = tango.bind(report)(oscar);
            oscar = new Array(1);
            oscar[0] = tango;
            tango = 'inContent';
            mike[tango] = oscar;
            tango = _closure1_slot14;
            zulu = false;
            zulu = tango.bind(report)(zulu);
            tango = new Array(1);
            tango[0] = zulu;
            zulu = 'content';
            mike[zulu] = tango;
            entity = mike;
 593:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = offset.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.ChannelTypes;
    var _closure1_slot9 = tango;
    mike = mike.ME;
    var _closure1_slot10 = mike;
    mike = function(argFoo) { // Original name: getGuildIdFromChannelId
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = _closure1_slot4;
            mike = zulu.getChannel;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            entity = null;
            mike = entity == zulu;
            entity = undefined;
            if(mike) { _fun00014_ip = 41; continue _fun00013 }
 31:
            mike = zulu.getGuildId;
            entity = mike.bind(zulu)();
 41:
            return entity;
        }
    };
    var _closure1_slot11 = mike;
    mike = {};
    tango = {};
    options = 15;
    options = oscar[options];
    options = offset.bind(entity)(options);
    options = options.order;
    tango['order'] = options;
    options = ['<'];
    tango['requiredFirstCharacters'] = options;
    options = function(argFoo) { // Original name: match
        zulu = /^<#(\d+)>/;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['match'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zulu = argBaz;
            mike = argFoo;
            entity = 1;
            mike = mike[entity];
            entity = zulu.returnMentionIds;
            if(entity) { _fun00016_ip = 109; continue _fun00015 }
 22:
            tango = _closure1_slot15;
            entity = zulu.mentionChannels;
            oscar = undefined;
            options = tango.bind(oscar)(mike, entity);
            report = null;
            if(!(report != options)) { _fun00016_ip = 76; continue _fun00015 }
 49:
            tango = _closure1_slot20;
            verify = _closure1_slot11;
            entity = zulu.channelId;
            entity = verify.bind(oscar)(entity);
            entity = tango.bind(oscar)(options, report, entity);
            _fun00016_ip = 107; continue _fun00015;
 76:
            tango = _closure1_slot18;
            golf = _closure1_slot11;
            zulu = zulu.channelId;
            offset = golf.bind(oscar)(zulu);
            backup = undefined;
            foxtrot = null;
            romeo = mike;
            yankee = null;
            entity = backup[tango](foxtrot, romeo, yankee, offset, verify);
 107:
            return entity;
 109:
            entity = {};
            zulu = 'channelMention';
            entity['type'] = zulu;
            entity['id'] = mike;
            return entity;
        }
    };
    tango['parse'] = options;
    mike['channelMention'] = tango;
    tango = {};
    options = 16;
    verify = oscar[options];
    verify = offset.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.url;
    yankee = verify.order;
    verify = 0.5;
    yankee = yankee - verify;
    tango['order'] = yankee;
    yankee = ['h'];
    tango['requiredFirstCharacters'] = yankee;
    yankee = function(argFoo) { // Original name: match
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.CHANNEL_OR_MESSAGES_URL_RE;
            mike = zulu.exec;
            entity = argFoo;
            mike = mike.bind(zulu)(entity);
            entity = null;
            if(!(entity != mike)) { _fun00018_ip = 135; continue _fun00017 }
 51:
            zulu = 2;
            tango = mike[zulu];
            if(!(entity != tango)) { _fun00018_ip = 93; continue _fun00017 }
 62:
            report = /\D/;
            tango = report.test;
            zulu = mike[zulu];
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun00018_ip = 139; continue _fun00017 }
 93:
            zulu = 3;
            tango = mike[zulu];
            if(!(entity != tango)) { _fun00018_ip = 135; continue _fun00017 }
 104:
            report = /\D/;
            tango = report.test;
            zulu = mike[zulu];
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun00018_ip = 137; continue _fun00017 }
 135:
            return mike;
 137:
            return entity;
 139:
            return entity;
        }
    };
    tango['match'] = yankee;
    yankee = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tango = argFoo;
            mike = argBaz;
            entity = 0;
            zulu = tango[entity];
            entity = 1;
            options = tango[entity];
            entity = 2;
            golf = tango[entity];
            entity = 3;
            oscar = tango[entity];
            entity = null;
            if(!(entity != golf)) { _fun00020_ip = 131; continue _fun00019 }
 39:
            tango = _closure1_slot15;
            report = undefined;
            offset = tango.bind(report)(golf, entity);
            if(!(entity != offset)) { _fun00020_ip = 93; continue _fun00019 }
 58:
            tango = _closure1_slot20;
            yankee = _closure1_slot11;
            entity = mike.channelId;
            backup = yankee.bind(report)(entity);
            output = undefined;
            sizing = offset;
            kilo = oscar;
            foxtrot = zulu;
            entity = output[tango](sizing, kilo, backup, foxtrot, romeo);
            _fun00020_ip = 129; continue _fun00019;
 93:
            tango = _closure1_slot18;
            verify = _closure1_slot11;
            mike = mike.channelId;
            foxtrot = verify.bind(report)(mike);
            output = undefined;
            sizing = options;
            kilo = golf;
            backup = oscar;
            romeo = zulu;
            entity = output[tango](sizing, kilo, backup, foxtrot, romeo, yankee);
 129:
            return entity;
 131:
            mike = _closure1_slot16;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
            return entity;
        }
    };
    tango['parse'] = yankee;
    mike['channelOrMessageUrl'] = tango;
    tango = {};
    options = oscar[options];
    options = offset.bind(entity)(options);
    options = options.defaultRules;
    options = options.url;
    options = options.order;
    options = options - verify;
    tango['order'] = options;
    options = ['h'];
    tango['requiredFirstCharacters'] = options;
    options = function(argFoo) { // Original name: match
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.MEDIA_POST_URL_RE;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['match'] = options;
    golf = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tango = argFoo;
            entity = argBaz;
            mike = 0;
            zulu = tango[mike];
            mike = 1;
            yankee = tango[mike];
            mike = 2;
            verify = tango[mike];
            mike = 3;
            options = tango[mike];
            mike = 4;
            oscar = tango[mike];
            mike = null;
            if(!(mike != verify)) { _fun00022_ip = 197; continue _fun00021 }
 49:
            if(!(mike != options)) { _fun00022_ip = 197; continue _fun00021 }
 56:
            tango = _closure1_slot15;
            report = undefined;
            tango = tango.bind(report)(options, mike);
            if(!(mike == tango)) { _fun00022_ip = 162; continue _fun00021 }
 75:
            options = _closure1_slot15;
            offset = options.bind(report)(verify, mike);
            if(!(mike == offset)) { _fun00022_ip = 127; continue _fun00021 }
 89:
            options = _closure1_slot18;
            romeo = _closure1_slot11;
            mike = entity.channelId;
            backup = romeo.bind(report)(mike);
            result = undefined;
            output = yankee;
            sizing = verify;
            kilo = oscar;
            foxtrot = zulu;
            mike = result[options](output, sizing, kilo, backup, foxtrot, romeo);
            _fun00022_ip = 160; continue _fun00021;
 127:
            verify = _closure1_slot20;
            yankee = _closure1_slot11;
            options = entity.channelId;
            kilo = yankee.bind(report)(options);
            result = undefined;
            output = offset;
            sizing = oscar;
            backup = zulu;
            mike = result[verify](output, sizing, kilo, backup, foxtrot);
 160:
            return mike;
 162:
            mike = _closure1_slot20;
            golf = _closure1_slot11;
            entity = entity.channelId;
            kilo = golf.bind(report)(entity);
            result = undefined;
            output = tango;
            sizing = oscar;
            backup = zulu;
            entity = result[mike](output, sizing, kilo, backup, foxtrot);
            return entity;
 197:
            mike = _closure1_slot16;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
            return entity;
        }
    };
    tango['parse'] = golf;
    mike['mediaPostLink'] = tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/markup/MarkupChannelMentionRule.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();