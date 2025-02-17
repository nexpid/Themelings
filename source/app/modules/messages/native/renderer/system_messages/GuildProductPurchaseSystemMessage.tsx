// app/modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: GuildProductPurchaseSystemMessageInner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            offset = mike.row;
            yankee = mike.productName;
            var _closure2_slot0 = yankee;
            foxtrot = mike.guildId;
            oscar = offset.message;
            var _closure2_slot1 = oscar;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            tango = 5;
            golf = zulu[tango];
            tango = undefined;
            options = mike.bind(tango)(golf);
            golf = options.useNullableMessageAuthor;
            options = golf.bind(options)(oscar);
            golf = options.nick;
            var _closure2_slot2 = golf;
            backup = options.guildMemberAvatar;
            romeo = oscar.author;
            var _closure2_slot3 = romeo;
            verify = _closure1_slot3;
            options = verify.useMemo;
            kilo = oscar.channel_id;
            oscar = new Array(4);
            oscar[0] = kilo;
            oscar[1] = golf;
            oscar[2] = yankee;
            yankee = romeo.id;
            oscar[3] = yankee;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getGuildProductPurchaseSystemMessageContentMobile;
                entity = {};
                report = _closure2_slot2;
                entity['username'] = report;
                report = {};
                oscar = 'bindUserMenu';
                report['action'] = oscar;
                oscar = _closure2_slot3;
                oscar = oscar.id;
                report['userId'] = oscar;
                oscar = _closure2_slot1;
                oscar = oscar.channel_id;
                report['messageChannelId'] = oscar;
                entity['usernameOnClickHandler'] = report;
                tango = _closure2_slot0;
                entity['productName'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = options.bind(verify)(entity, oscar);
            entity = 6;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.ensureAvatarSource;
            entity = null;
            if(!(entity != backup)) { _fun00002_ip = 175; continue _fun00001 }
 171:
            if(!(entity == foxtrot)) { _fun00002_ip = 188; continue _fun00001 }
 175:
            entity = romeo.getAvatarSource;
            entity = entity.bind(romeo)(tango);
            _fun00002_ip = 240; continue _fun00001;
 188:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 7;
            oscar = yankee[oscar];
            yankee = verify.bind(tango)(oscar);
            verify = yankee.getGuildMemberAvatarSource;
            oscar = {};
            kilo = romeo.id;
            oscar['userId'] = kilo;
            oscar['guildMemberAvatar'] = backup;
            oscar['guildId'] = foxtrot;
            entity = verify.bind(yankee)(oscar, romeo);
 240:
            oscar = mike.bind(zulu)(entity);
            zulu = _closure1_slot7;
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 11;
            entity = verify[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['row'] = offset;
            entity['content'] = options;
            options = 0;
            entity['totalMonthsSubscribed'] = options;
            entity['username'] = golf;
            oscar = oscar.uri;
            entity['avatarURL'] = oscar;
            options = _closure1_slot0;
            report = 9;
            oscar = verify[report];
            oscar = options.bind(tango)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = verify[report];
            report = options.bind(tango)(report);
            report = report.t;
            report = report.piPHvb;
            report = oscar.bind(golf)(report);
            entity['welcomeLabel'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MessageTypes;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: createGuildProductPurchaseSystemMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = {};
            echo = report;
            result = entity;
            mike = copyDataProperties(echo, result);
            tango = _closure1_slot4;
            echo = entity.message;
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            update = mike;
            entity = new update[tango](echo, result);
            mike = entity instanceof Object ? entity : mike;
            entity = 'message';
            report[entity] = mike;
            mike = report.message;
            entity = _closure1_slot6;
            entity = entity.ROLE_SUBSCRIPTION_PURCHASE;
            mike['type'] = entity;
            entity = report.message;
            mike = entity.purchaseNotification;
            entity = null;
            oscar = entity == mike;
            tango = undefined;
            foxtrot = undefined;
            if(oscar) { _fun00004_ip = 122; continue _fun00003 }
 101:
            mike = mike.guild_product_purchase;
            oscar = entity == mike;
            foxtrot = undefined;
            if(oscar) { _fun00004_ip = 122; continue _fun00003 }
 116:
            foxtrot = mike.product_name;
 122:
            if(!(entity != foxtrot)) { _fun00004_ip = 512; continue _fun00003 }
 129:
            mike = report.message;
            golf = mike.author;
            verify = _closure1_slot5;
            options = verify.getChannel;
            oscar = mike.getChannelId;
            oscar = oscar.bind(mike)();
            options = options.bind(verify)(oscar);
            oscar = entity == options;
            kilo = undefined;
            if(oscar) { _fun00004_ip = 183; continue _fun00003 }
 173:
            oscar = options.getGuildId;
            kilo = oscar.bind(options)();
 183:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 5;
            oscar = offset[oscar];
            options = verify.bind(tango)(oscar);
            oscar = options.getMessageAuthor;
            oscar = oscar.bind(options)(mike);
            options = oscar.nick;
            sizing = oscar.guildMemberAvatar;
            oscar = 6;
            oscar = offset[oscar];
            offset = verify.bind(tango)(oscar);
            verify = offset.ensureAvatarSource;
            if(!(entity != sizing)) { _fun00004_ip = 252; continue _fun00003 }
 248:
            if(!(entity == kilo)) { _fun00004_ip = 265; continue _fun00003 }
 252:
            oscar = golf.getAvatarSource;
            oscar = oscar.bind(golf)(tango);
            _fun00004_ip = 317; continue _fun00003;
 265:
            romeo = _closure1_slot0;
            backup = _closure1_slot2;
            yankee = 7;
            yankee = backup[yankee];
            backup = romeo.bind(tango)(yankee);
            romeo = backup.getGuildMemberAvatarSource;
            yankee = {};
            output = golf.id;
            yankee['userId'] = output;
            yankee['guildMemberAvatar'] = sizing;
            yankee['guildId'] = kilo;
            oscar = romeo.bind(backup)(yankee, golf);
 317:
            oscar = verify.bind(offset)(oscar);
            backup = {};
            verify = 'bindUserMenu';
            backup['action'] = verify;
            golf = golf.id;
            backup['userId'] = golf;
            mike = mike.channel_id;
            backup['messageChannelId'] = mike;
            mike = {};
            offset = _closure1_slot0;
            golf = _closure1_slot2;
            verify = 8;
            verify = golf[verify];
            romeo = offset.bind(tango)(verify);
            yankee = romeo.getGuildProductPurchaseSystemMessageContentMobile;
            verify = {};
            verify['username'] = options;
            verify['usernameOnClickHandler'] = backup;
            verify['productName'] = foxtrot;
            verify = yankee.bind(romeo)(verify);
            mike['content'] = verify;
            verify = 0;
            mike['totalMonthsSubscribed'] = verify;
            mike['username'] = options;
            oscar = oscar.uri;
            mike['avatarURL'] = oscar;
            oscar = 9;
            options = golf[oscar];
            options = offset.bind(tango)(options);
            verify = options.intl;
            options = verify.string;
            oscar = golf[oscar];
            oscar = offset.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.s2N5HR;
            oscar = options.bind(verify)(oscar);
            mike['welcomeLabel'] = oscar;
            oscar = _closure1_slot1;
            zulu = 10;
            zulu = golf[zulu];
            zulu = oscar.bind(tango)(zulu);
            result = zulu.bind(tango)(report);
            echo = mike;
            zulu = copyDataProperties(echo, result);
            return mike;
 512:
            return entity;
        }
    };
    zulu['createGuildProductPurchaseSystemMessage'] = tango;
    mike = function(argFoo) { // Original name: GuildProductPurchaseSystemMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            yankee = mike.row;
            options = {};
            romeo = options;
            mike = copyDataProperties(romeo, yankee);
            tango = options.message;
            zulu = _closure1_slot6;
            zulu = zulu.ROLE_SUBSCRIPTION_PURCHASE;
            tango['type'] = zulu;
            tango = options.message;
            zulu = tango.getChannelId;
            verify = zulu.bind(tango)();
            var _closure2_slot0 = verify;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 12;
            zulu = report[zulu];
            report = undefined;
            golf = tango.bind(report)(zulu);
            oscar = golf.useStateFromStores;
            zulu = _closure1_slot5;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = new Array(1);
            zulu[0] = verify;
            entity = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = oscar.bind(golf)(tango, entity, zulu);
            entity = null;
            tango = entity == oscar;
            zulu = undefined;
            if(tango) { _fun00006_ip = 143; continue _fun00005 }
 133:
            tango = oscar.getGuildId;
            zulu = tango.bind(oscar)();
 143:
            tango = entity != zulu;
            oscar = undefined;
            if(!tango) { _fun00006_ip = 155; continue _fun00005 }
 152:
            oscar = zulu;
 155:
            zulu = options.message;
            zulu = zulu.purchaseNotification;
            tango = entity == zulu;
            golf = undefined;
            if(tango) { _fun00006_ip = 196; continue _fun00005 }
 175:
            zulu = zulu.guild_product_purchase;
            tango = entity == zulu;
            golf = undefined;
            if(tango) { _fun00006_ip = 196; continue _fun00005 }
 190:
            golf = zulu.product_name;
 196:
            zulu = entity == golf;
            entity = null;
            if(zulu) { _fun00006_ip = 235; continue _fun00005 }
 205:
            tango = _closure1_slot7;
            zulu = _closure1_slot8;
            mike = {};
            mike['row'] = options;
            mike['productName'] = golf;
            mike['guildId'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 235:
            return entity;
        }
    };
    zulu['GuildProductPurchaseSystemMessage'] = mike;
    return entity;
})();