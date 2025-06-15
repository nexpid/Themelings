// app/modules/markup/MarkupChannelMentionRule.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    offset = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: makeGuild
        report = argFoo;
        entity = {};
        michal = 'guild';
        entity['type'] = michal;
        michal = report.id;
        entity['guildId'] = michal;
        golfie = _closure1_slot0;
        oscard = _closure1_slot2;
        zuuluu = 7;
        zuuluu = oscard[zuuluu];
        tangon = undefined;
        verify = golfie.bind(tangon)(zuuluu);
        option = verify.truncateText;
        golfie = report.name;
        zuuluu = 32;
        zuuluu = option.bind(verify)(golfie, zuuluu);
        entity['content'] = zuuluu;
        zuuluu = _closure1_slot1;
        michal = 8;
        michal = oscard[michal];
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.getGuildIconURL;
        michal = {};
        oscard = report.id;
        michal['id'] = oscard;
        report = report.icon;
        michal['icon'] = report;
        report = 40;
        michal['size'] = report;
        michal = zuuluu.bind(tangon)(michal);
        entity['icon'] = michal;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: makeChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot17;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            entity = zuuluu[entity];
            zuuluu = undefined;
            golfie = report.bind(zuuluu)(entity);
            oscard = golfie.truncateText;
            report = michal.name;
            entity = 32;
            entity = oscard.bind(golfie)(report, entity);
            oscard = tangon.bind(zuuluu)(entity);
            entity = {};
            zuuluu = 'channel';
            entity['type'] = zuuluu;
            report = 'italics';
            zuuluu = argBar;
            tangon = oscard;
            if(!(report === zuuluu)) { _fun00002_ip = 106; continue _fun00001 }
 81:
            zuuluu = {};
            report = 'em';
            zuuluu['type'] = report;
            report = new Array(1);
            report[0] = oscard;
            zuuluu['content'] = report;
            tangon = zuuluu;
 106:
            zuuluu = new Array(1);
            zuuluu[0] = tangon;
            entity['content'] = zuuluu;
            zuuluu = michal.type;
            entity['channelType'] = zuuluu;
            michal = michal.iconType;
            entity['iconType'] = michal;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: makeMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = {};
            michal = 'channel';
            entity['type'] = michal;
            tangon = _closure1_slot17;
            zuuluu = undefined;
            michal = '';
            zuuluu = tangon.bind(zuuluu)(michal);
            michal = new Array(1);
            michal[0] = zuuluu;
            entity['content'] = michal;
            michal = 'message';
            zuuluu = argFoo;
            if(!zuuluu) { _fun00004_ip = 54; continue _fun00003 }
 50:
            michal = 'post';
 54:
            entity['iconType'] = michal;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: getChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            foxtra = argFoo;
            option = argBar;
            var _closure2_slot0 = foxtra;
            zuuluu = _closure1_slot4;
            michal = zuuluu.getChannel;
            zuuluu = michal.bind(zuuluu)(foxtra);
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 10;
            tangon = golfie[michal];
            michal = undefined;
            romeon = report.bind(michal)(tangon);
            yankee = romeon.getChannelRoleSubscriptionStatus;
            output = _closure1_slot4;
            sizing = _closure1_slot3;
            kiloes = _closure1_slot6;
            echoed = romeon;
            result = foxtra;
            tangon = echoed[yankee](result, output, sizing, kiloes, backup);
            oscard = tangon.isSubscriptionGated;
            tangon = 11;
            tangon = golfie[tangon];
            report = report.bind(michal)(tangon);
            tangon = report.getMentionIconType;
            golfie = tangon.bind(report)(zuuluu);
            tangon = null;
            offset = tangon != golfie;
            report = 'text';
            if(!offset) { _fun00006_ip = 124; continue _fun00005 }
 121:
            report = golfie;
 124:
            if(!(tangon != option)) { _fun00006_ip = 151; continue _fun00005 }
 128:
            golfie = option.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            golfie = golfie.bind(option)(entity);
            if(!(tangon == golfie)) { _fun00006_ip = 354; continue _fun00005 }
 151:
            option = tangon != zuuluu;
            entity = null;
            if(!option) { _fun00006_ip = 352; continue _fun00005 }
 163:
            option = {};
            offset = zuuluu.type;
            option['type'] = offset;
            offset = zuuluu.id;
            option['id'] = offset;
            offset = zuuluu.guild_id;
            option['guildId'] = offset;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            romeon = 12;
            romeon = yankee[romeon];
            backup = offset.bind(michal)(romeon);
            foxtra = backup.computeChannelName;
            romeon = _closure1_slot8;
            verify = _closure1_slot7;
            verify = foxtra.bind(backup)(zuuluu, romeon, verify);
            option['name'] = verify;
            verify = zuuluu.isPrivate;
            verify = verify.bind(zuuluu)();
            option['isDm'] = verify;
            verify = zuuluu.isForumPost;
            verify = verify.bind(zuuluu)();
            option['isForumPost'] = verify;
            verify = 13;
            verify = yankee[verify];
            foxtra = offset.bind(michal)(verify);
            romeon = foxtra.isChannelTypeMentionable;
            verify = zuuluu.type;
            verify = romeon.bind(foxtra)(verify);
            option['isMentionable'] = verify;
            verify = 14;
            verify = yankee[verify];
            offset = offset.bind(michal)(verify);
            verify = offset.canViewChannel;
            verify = verify.bind(offset)(zuuluu);
            option['canViewChannel'] = verify;
            option['roleSubscriptionGated'] = oscard;
            option['iconType'] = report;
            verify = zuuluu.parent_id;
            option['parentId'] = verify;
            entity = option;
 352:
            return entity;
 354:
            entity = {};
            option = golfie.type;
            entity['type'] = option;
            option = golfie.id;
            entity['id'] = option;
            option = golfie.guild_id;
            entity['guildId'] = option;
            golfie = golfie.name;
            entity['name'] = golfie;
            golfie = tangon != zuuluu;
            if(!golfie) { _fun00006_ip = 409; continue _fun00005 }
 399:
            option = zuuluu.isPrivate;
            golfie = option.bind(zuuluu)();
 409:
            entity['isDm'] = golfie;
            golfie = tangon != zuuluu;
            if(!golfie) { _fun00006_ip = 431; continue _fun00005 }
 421:
            option = zuuluu.isForumPost;
            golfie = option.bind(zuuluu)();
 431:
            entity['isForumPost'] = golfie;
            golfie = true;
            entity['isMentionable'] = golfie;
            entity['canViewChannel'] = golfie;
            entity['roleSubscriptionGated'] = oscard;
            entity['iconType'] = report;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00006_ip = 473; continue _fun00005 }
 467:
            michal = zuuluu.parent_id;
 473:
            entity['parentId'] = michal;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: makeLink
        michal = argFoo;
        entity = {};
        zuuluu = 'link';
        entity['type'] = zuuluu;
        tangon = {};
        zuuluu = 'text';
        tangon['type'] = zuuluu;
        tangon['content'] = michal;
        zuuluu = new Array(1);
        zuuluu[0] = tangon;
        entity['content'] = zuuluu;
        entity['target'] = michal;
        michal = undefined;
        entity['title'] = michal;
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: makeText
        entity = {};
        michal = 'text';
        entity['type'] = michal;
        michal = argFoo;
        entity['content'] = michal;
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: handleUnknownChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot5;
            entity = tangon.getGuild;
            oscard = entity.bind(tangon)(zuuluu);
            option = null;
            entity = option == oscard;
            report = undefined;
            golfie = undefined;
            if(entity) { _fun00008_ip = 38; continue _fun00007 }
 33:
            golfie = oscard.id;
 38:
            entity = {};
            tangon = 'channelMention';
            entity['type'] = tangon;
            entity['guildId'] = zuuluu;
            zuuluu = argBar;
            entity['channelId'] = zuuluu;
            zuuluu = argBaz;
            entity['messageId'] = zuuluu;
            zuuluu = argGra;
            entity['originalLink'] = zuuluu;
            tangon = option == oscard;
            zuuluu = null;
            if(tangon) { _fun00008_ip = 112; continue _fun00007 }
 83:
            tangon = argCor;
            zuuluu = null;
            if(!(golfie !== tangon)) { _fun00008_ip = 112; continue _fun00007 }
 92:
            tangon = _closure1_slot12;
            oscard = tangon.bind(report)(oscard);
            tangon = new Array(1);
            tangon[0] = oscard;
            zuuluu = tangon;
 112:
            entity['inContent'] = zuuluu;
            tangon = _closure1_slot13;
            zuuluu = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 9;
            golfie = offset[oscard];
            golfie = verify.bind(report)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(report)(oscard);
            oscard = oscard.t;
            oscard = oscard.zLZPmp;
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.toLowerCase;
            oscard = oscard.bind(golfie)();
            zuuluu['name'] = oscard;
            michal = _closure1_slot9;
            michal = michal.UNKNOWN;
            zuuluu['type'] = michal;
            michal = 'text';
            zuuluu['iconType'] = michal;
            michal = 'italics';
            zuuluu = tangon.bind(report)(zuuluu, michal);
            michal = new Array(1);
            michal[0] = zuuluu;
            entity['content'] = michal;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: formatChannelMentionContent
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argBar;
            offset = argBaz;
            verify = argCor;
            zuuluu = _closure1_slot12;
            report = undefined;
            michal = argFoo;
            yankee = zuuluu.bind(report)(michal);
            michal = _closure1_slot13;
            zuuluu = michal.bind(report)(entity);
            tangon = _closure1_slot14;
            michal = entity.isForumPost;
            tangon = tangon.bind(report)(michal);
            if(!offset) { _fun00010_ip = 59; continue _fun00009 }
 53:
            if(verify) { _fun00010_ip = 186; continue _fun00009 }
 59:
            if(!offset) { _fun00010_ip = 88; continue _fun00009 }
 62:
            if(verify) { _fun00010_ip = 88; continue _fun00009 }
 65:
            michal = {};
            oscard = null;
            michal['inContent'] = oscard;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            michal['content'] = oscard;
            _fun00010_ip = 184; continue _fun00009;
 88:
            if(offset) { _fun00010_ip = 138; continue _fun00009 }
 91:
            if(!verify) { _fun00010_ip = 138; continue _fun00009 }
 94:
            oscard = {};
            option = new Array(1);
            option[0] = yankee;
            oscard['inContent'] = option;
            option = entity.isForumPost;
            romeon = tangon;
            if(!option) { _fun00010_ip = 124; continue _fun00009 }
 121:
            romeon = zuuluu;
 124:
            option = new Array(1);
            option[0] = romeon;
            oscard['content'] = option;
            _fun00010_ip = 181; continue _fun00009;
 138:
            option = undefined;
            if(offset) { _fun00010_ip = 178; continue _fun00009 }
 143:
            option = undefined;
            if(verify) { _fun00010_ip = 178; continue _fun00009 }
 148:
            verify = {};
            offset = new Array(1);
            offset[0] = yankee;
            verify['inContent'] = offset;
            offset = new Array(1);
            offset[0] = zuuluu;
            verify['content'] = offset;
            option = verify;
 178:
            oscard = option;
 181:
            michal = oscard;
 184:
            return michal;
 186:
            michal = entity.isForumPost;
            if(!michal) { _fun00010_ip = 221; continue _fun00009 }
 195:
            oscard = _closure1_slot4;
            michal = oscard.getChannel;
            entity = entity.parentId;
            verify = michal.bind(oscard)(entity);
            oscard = null;
            if(!(oscard == verify)) { _fun00010_ip = 250; continue _fun00009 }
 221:
            entity = {};
            michal = new Array(1);
            michal[0] = zuuluu;
            entity['inContent'] = michal;
            michal = new Array(1);
            michal[0] = tangon;
            entity['content'] = michal;
            return entity;
 250:
            entity = {};
            tangon = _closure1_slot13;
            michal = {};
            option = verify.name;
            michal['name'] = option;
            option = verify.type;
            michal['type'] = option;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 11;
            golfie = offset[golfie];
            option = option.bind(report)(golfie);
            golfie = option.getMentionIconType;
            golfie = golfie.bind(option)(verify);
            option = oscard != golfie;
            oscard = 'forum';
            if(!option) { _fun00010_ip = 323; continue _fun00009 }
 320:
            oscard = golfie;
 323:
            michal['iconType'] = oscard;
            tangon = tangon.bind(report)(michal);
            michal = new Array(1);
            michal[0] = tangon;
            entity['inContent'] = michal;
            michal = new Array(1);
            michal[0] = zuuluu;
            entity['content'] = michal;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: parseChannel
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            golfie = argCor;
            entity = oscard.canViewChannel;
            if(entity) { _fun00012_ip = 223; continue _fun00011 }
 21:
            zuuluu = {};
            entity = 'channel';
            zuuluu['type'] = entity;
            option = _closure1_slot17;
            michal = oscard.roleSubscriptionGated;
            if(michal) { _fun00012_ip = 106; continue _fun00011 }
 47:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = 9;
            tangon = romeon[michal];
            offset = undefined;
            tangon = yankee.bind(offset)(tangon);
            verify = tangon.intl;
            tangon = verify.string;
            michal = romeon[michal];
            michal = yankee.bind(offset)(michal);
            michal = michal.t;
            michal = michal./YzI6+;
            tangon = tangon.bind(verify)(michal);
            _fun00012_ip = 111; continue _fun00011;
 106:
            tangon = oscard.name;
 111:
            michal = undefined;
            tangon = option.bind(michal)(tangon);
            michal = new Array(1);
            michal[0] = tangon;
            zuuluu['content'] = michal;
            michal = oscard.roleSubscriptionGated;
            if(michal) { _fun00012_ip = 151; continue _fun00011 }
 139:
            entity = _closure1_slot9;
            entity = entity.UNKNOWN;
            _fun00012_ip = 156; continue _fun00011;
 151:
            entity = oscard.type;
 156:
            zuuluu['channelType'] = entity;
            entity = 'locked';
            zuuluu['iconType'] = entity;
            entity = {};
            michal = 'channelMention';
            entity['type'] = michal;
            michal = oscard.guildId;
            entity['guildId'] = michal;
            michal = oscard.id;
            entity['channelId'] = michal;
            entity['messageId'] = report;
            michal = null;
            entity['inContent'] = michal;
            michal = new Array(1);
            michal[0] = zuuluu;
            entity['content'] = michal;
            return entity;
 223:
            entity = oscard.isMentionable;
            if(entity) { _fun00012_ip = 275; continue _fun00011 }
 232:
            zuuluu = _closure1_slot17;
            tangon = oscard.name;
            entity = global;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = '#';
            michal = michal.bind(entity)(tangon);
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
 275:
            tangon = {};
            entity = 'channelMention';
            tangon['type'] = entity;
            entity = oscard.id;
            tangon['channelId'] = entity;
            entity = oscard.guildId;
            tangon['guildId'] = entity;
            tangon['messageId'] = report;
            tangon['originalLink'] = golfie;
            option = _closure1_slot5;
            michal = option.getGuild;
            entity = oscard.guildId;
            yankee = michal.bind(option)(entity);
            entity = null;
            if(!(entity != yankee)) { _fun00012_ip = 393; continue _fun00011 }
 340:
            romeon = oscard.guildId;
            michal = {};
            sizing = michal;
            kiloes = tangon;
            option = copyDataProperties(sizing, kiloes);
            offset = _closure1_slot19;
            foxtra = entity != report;
            output = undefined;
            report = argBaz;
            backup = romeon === report;
            sizing = yankee;
            kiloes = oscard;
            kiloes = output[offset](sizing, kiloes, backup, foxtra, romeon);
            sizing = michal;
            report = copyDataProperties(sizing, kiloes);
            return michal;
 393:
            michal = oscard.isDm;
            if(michal) { _fun00012_ip = 509; continue _fun00011 }
 402:
            if(!(entity == golfie)) { _fun00012_ip = 496; continue _fun00011 }
 406:
            report = _closure1_slot17;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 9;
            option = yankee[entity];
            michal = undefined;
            option = offset.bind(michal)(option);
            verify = option.intl;
            option = verify.string;
            entity = yankee[entity];
            entity = offset.bind(michal)(entity);
            entity = entity.t;
            entity = entity.J90oLS;
            verify = option.bind(verify)(entity);
            entity = global;
            entity = entity.HermesInternal;
            option = entity.concat;
            entity = '#';
            entity = option.bind(entity)(verify);
            entity = report.bind(michal)(entity);
            _fun00012_ip = 507; continue _fun00011;
 496:
            report = _closure1_slot16;
            michal = undefined;
            entity = report.bind(michal)(golfie);
 507:
            _fun00012_ip = 593; continue _fun00011;
 509:
            michal = {};
            sizing = michal;
            kiloes = tangon;
            tangon = copyDataProperties(sizing, kiloes);
            report = _closure1_slot10;
            tangon = 'guildId';
            michal[tangon] = report;
            tangon = _closure1_slot13;
            report = undefined;
            tangon = tangon.bind(report)(oscard);
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = 'inContent';
            michal[tangon] = oscard;
            tangon = _closure1_slot14;
            zuuluu = false;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = 'content';
            michal[zuuluu] = tangon;
            entity = michal;
 593:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    option = entity.Object;
    tangon = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = offset.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = offset.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = offset.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = offset.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = offset.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = offset.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.ChannelTypes;
    var _closure1_slot9 = tangon;
    michal = michal.ME;
    var _closure1_slot10 = michal;
    michal = function(argFoo) { // Original name: getGuildIdFromChannelId
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.getChannel;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            michal = entity == zuuluu;
            entity = undefined;
            if(michal) { _fun00014_ip = 41; continue _fun00013 }
 31:
            michal = zuuluu.getGuildId;
            entity = michal.bind(zuuluu)();
 41:
            return entity;
        }
    };
    var _closure1_slot11 = michal;
    michal = {};
    tangon = {};
    option = 15;
    option = oscard[option];
    option = offset.bind(entity)(option);
    option = option.order;
    tangon['order'] = option;
    option = ['<'];
    tangon['requiredFirstCharacters'] = option;
    option = function(argFoo) { // Original name: match
        zuuluu = /^<#(\d+)>/;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['match'] = option;
    option = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argBaz;
            michal = argFoo;
            entity = 1;
            michal = michal[entity];
            entity = zuuluu.returnMentionIds;
            if(entity) { _fun00016_ip = 109; continue _fun00015 }
 22:
            tangon = _closure1_slot15;
            entity = zuuluu.mentionChannels;
            oscard = undefined;
            option = tangon.bind(oscard)(michal, entity);
            report = null;
            if(!(report != option)) { _fun00016_ip = 76; continue _fun00015 }
 49:
            tangon = _closure1_slot20;
            verify = _closure1_slot11;
            entity = zuuluu.channelId;
            entity = verify.bind(oscard)(entity);
            entity = tangon.bind(oscard)(option, report, entity);
            _fun00016_ip = 107; continue _fun00015;
 76:
            tangon = _closure1_slot18;
            golfie = _closure1_slot11;
            zuuluu = zuuluu.channelId;
            offset = golfie.bind(oscard)(zuuluu);
            backup = undefined;
            foxtra = null;
            romeon = michal;
            yankee = null;
            entity = backup[tangon](foxtra, romeon, yankee, offset, verify);
 107:
            return entity;
 109:
            entity = {};
            zuuluu = 'channelMention';
            entity['type'] = zuuluu;
            entity['id'] = michal;
            return entity;
        }
    };
    tangon['parse'] = option;
    michal['channelMention'] = tangon;
    tangon = {};
    option = 16;
    verify = oscard[option];
    verify = offset.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.url;
    yankee = verify.order;
    verify = 0.5;
    yankee = yankee - verify;
    tangon['order'] = yankee;
    yankee = ['h'];
    tangon['requiredFirstCharacters'] = yankee;
    yankee = function(argFoo) { // Original name: match
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 14;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.CHANNEL_OR_MESSAGES_URL_RE;
            michal = zuuluu.exec;
            entity = argFoo;
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity != michal)) { _fun00018_ip = 135; continue _fun00017 }
 51:
            zuuluu = 2;
            tangon = michal[zuuluu];
            if(!(entity != tangon)) { _fun00018_ip = 93; continue _fun00017 }
 62:
            report = /\D/;
            tangon = report.test;
            zuuluu = michal[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00018_ip = 139; continue _fun00017 }
 93:
            zuuluu = 3;
            tangon = michal[zuuluu];
            if(!(entity != tangon)) { _fun00018_ip = 135; continue _fun00017 }
 104:
            report = /\D/;
            tangon = report.test;
            zuuluu = michal[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00018_ip = 137; continue _fun00017 }
 135:
            return michal;
 137:
            return entity;
 139:
            return entity;
        }
    };
    tangon['match'] = yankee;
    yankee = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tangon = argFoo;
            michal = argBaz;
            entity = 0;
            zuuluu = tangon[entity];
            entity = 1;
            option = tangon[entity];
            entity = 2;
            golfie = tangon[entity];
            entity = 3;
            oscard = tangon[entity];
            entity = null;
            if(!(entity != golfie)) { _fun00020_ip = 131; continue _fun00019 }
 39:
            tangon = _closure1_slot15;
            report = undefined;
            offset = tangon.bind(report)(golfie, entity);
            if(!(entity != offset)) { _fun00020_ip = 93; continue _fun00019 }
 58:
            tangon = _closure1_slot20;
            yankee = _closure1_slot11;
            entity = michal.channelId;
            backup = yankee.bind(report)(entity);
            output = undefined;
            sizing = offset;
            kiloes = oscard;
            foxtra = zuuluu;
            entity = output[tangon](sizing, kiloes, backup, foxtra, romeon);
            _fun00020_ip = 129; continue _fun00019;
 93:
            tangon = _closure1_slot18;
            verify = _closure1_slot11;
            michal = michal.channelId;
            foxtra = verify.bind(report)(michal);
            output = undefined;
            sizing = option;
            kiloes = golfie;
            backup = oscard;
            romeon = zuuluu;
            entity = output[tangon](sizing, kiloes, backup, foxtra, romeon, yankee);
 129:
            return entity;
 131:
            michal = _closure1_slot16;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
            return entity;
        }
    };
    tangon['parse'] = yankee;
    michal['channelOrMessageUrl'] = tangon;
    tangon = {};
    option = oscard[option];
    option = offset.bind(entity)(option);
    option = option.defaultRules;
    option = option.url;
    option = option.order;
    option = option - verify;
    tangon['order'] = option;
    option = ['h'];
    tangon['requiredFirstCharacters'] = option;
    option = function(argFoo) { // Original name: match
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 14;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.MEDIA_POST_URL_RE;
        michal = zuuluu.exec;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['match'] = option;
    golfie = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = argFoo;
            entity = argBaz;
            michal = 0;
            zuuluu = tangon[michal];
            michal = 1;
            yankee = tangon[michal];
            michal = 2;
            verify = tangon[michal];
            michal = 3;
            option = tangon[michal];
            michal = 4;
            oscard = tangon[michal];
            michal = null;
            if(!(michal != verify)) { _fun00022_ip = 197; continue _fun00021 }
 49:
            if(!(michal != option)) { _fun00022_ip = 197; continue _fun00021 }
 56:
            tangon = _closure1_slot15;
            report = undefined;
            tangon = tangon.bind(report)(option, michal);
            if(!(michal == tangon)) { _fun00022_ip = 162; continue _fun00021 }
 75:
            option = _closure1_slot15;
            offset = option.bind(report)(verify, michal);
            if(!(michal == offset)) { _fun00022_ip = 127; continue _fun00021 }
 89:
            option = _closure1_slot18;
            romeon = _closure1_slot11;
            michal = entity.channelId;
            backup = romeon.bind(report)(michal);
            result = undefined;
            output = yankee;
            sizing = verify;
            kiloes = oscard;
            foxtra = zuuluu;
            michal = result[option](output, sizing, kiloes, backup, foxtra, romeon);
            _fun00022_ip = 160; continue _fun00021;
 127:
            verify = _closure1_slot20;
            yankee = _closure1_slot11;
            option = entity.channelId;
            kiloes = yankee.bind(report)(option);
            result = undefined;
            output = offset;
            sizing = oscard;
            backup = zuuluu;
            michal = result[verify](output, sizing, kiloes, backup, foxtra);
 160:
            return michal;
 162:
            michal = _closure1_slot20;
            golfie = _closure1_slot11;
            entity = entity.channelId;
            kiloes = golfie.bind(report)(entity);
            result = undefined;
            output = tangon;
            sizing = oscard;
            backup = zuuluu;
            entity = result[michal](output, sizing, kiloes, backup, foxtra);
            return entity;
 197:
            michal = _closure1_slot16;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
            return entity;
        }
    };
    tangon['parse'] = golfie;
    michal['mediaPostLink'] = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/markup/MarkupChannelMentionRule.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();