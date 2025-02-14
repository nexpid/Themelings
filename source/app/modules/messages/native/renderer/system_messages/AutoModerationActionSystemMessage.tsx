// app/modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: createAutoModerationActionSystemMessage
        _fun72453: for(var _fun72453_ip = 0; ; ) switch(_fun72453_ip) {
 0:
            vacuum = argFoo;
            kilo = vacuum.message;
            variable38 = vacuum.theme;
            control = vacuum.roleStyle;
            entity = _closure1_slot14;
            verify = undefined;
            entity = entity.bind(verify)(variable38);
            result = entity.defaultUsernameColor;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            output = 14;
            entity = entity[output];
            mike = mike.bind(verify)(entity);
            entity = mike.isAutomodMessageRecord;
            entity = entity.bind(mike)(kilo);
            if(entity) { _fun72453_ip = 78; continue _fun72453 }
 74:
            entity = null;
            return entity;
 78:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[output];
            mike = mike.bind(verify)(entity);
            entity = mike.extractAutomodMessageFields;
            entity = entity.bind(mike)(kilo);
            backup = entity.ruleName;
            equality = entity.keyword;
            papa = entity.embedChannel;
            golf = entity.content;
            target = entity.flaggedMessageId;
            record = entity.embedChannelId;
            sizing = entity.quarantineType;
            options = entity.interactionUserId;
            zulu = _closure1_slot8;
            mike = zulu.getChannel;
            entity = kilo.getChannelId;
            entity = entity.bind(kilo)();
            mike = mike.bind(zulu)(entity);
            oscar = null;
            entity = oscar == mike;
            config = undefined;
            if(entity) { _fun72453_ip = 198; continue _fun72453 }
 188:
            entity = mike.getGuildId;
            config = entity.bind(mike)();
 198:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 15;
            entity = mike[entity];
            tango = zulu.bind(verify)(entity);
            entity = tango.getMessageAuthor;
            entity = entity.bind(tango)(kilo);
            echo = entity.nick;
            whiskey = entity.guildMemberAvatar;
            source = entity.colorString;
            sierra = entity.iconRoleId;
            sequence = kilo.author;
            offset = _closure1_slot10;
            tango = offset.can;
            entity = _closure1_slot12;
            entity = entity.VIEW_CHANNEL;
            context = tango.bind(offset)(entity, papa);
            entity = mike[output];
            tango = zulu.bind(verify)(entity);
            entity = tango.getActionHeaderTextMobile;
            foxtrot = entity.bind(tango)(kilo, sequence, options);
            offset = 16;
            tango = mike[offset];
            tango = zulu.bind(verify)(tango);
            yankee = tango.intl;
            options = yankee.string;
            tango = mike[offset];
            tango = zulu.bind(verify)(tango);
            tango = tango.t;
            tango = tango.94JbMz;
            options = options.bind(yankee)(tango);
            mike = mike[output];
            zulu = zulu.bind(verify)(mike);
            mike = zulu.isAutomodNotification;
            tango = mike.bind(zulu)(kilo);
            mike = options;
            yankee = null;
            if(!tango) { _fun72453_ip = 2829; continue _fun72453 }
 385:
            update = _closure1_slot0;
            entity = _closure1_slot2;
            zulu = entity[output];
            romeo = update.bind(verify)(zulu);
            zulu = romeo.extractAutomodNotificationFields;
            zulu = zulu.bind(romeo)(kilo);
            romeo = zulu.notificationType;
            entity = entity[output];
            entity = update.bind(verify)(entity);
            entity = entity.IS_BACKWARDS_COMPAT_RAID_TYPE;
            if(!(entity !== romeo)) { _fun72453_ip = 2042; continue _fun72453 }
 441:
            update = _closure1_slot0;
            entity = _closure1_slot2;
            status = 17;
            entity = entity[status];
            entity = update.bind(verify)(entity);
            entity = entity.AutomodNotificationEmbedTypeKeys;
            entity = entity.RAID;
            if(!(entity !== romeo)) { _fun72453_ip = 2042; continue _fun72453 }
 480:
            update = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[status];
            entity = update.bind(verify)(entity);
            entity = entity.AutomodNotificationEmbedTypeKeys;
            entity = entity.MENTION_RAID;
            if(!(entity !== romeo)) { _fun72453_ip = 1639; continue _fun72453 }
 516:
            update = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[status];
            entity = update.bind(verify)(entity);
            entity = entity.AutomodNotificationEmbedTypeKeys;
            entity = entity.ACTIVITY_ALERTS_ENABLED;
            if(!(entity !== romeo)) { _fun72453_ip = 894; continue _fun72453 }
 552:
            entity = {};
            lima = _closure1_slot0;
            romeo = _closure1_slot2;
            update = romeo[offset];
            update = lima.bind(verify)(update);
            quebec = update.intl;
            status = quebec.string;
            update = romeo[offset];
            update = lima.bind(verify)(update);
            update = update.t;
            update = update.VdZCcH;
            update = status.bind(quebec)(update);
            entity['header'] = update;
            status = 13;
            update = romeo[status];
            variable37 = lima.bind(verify)(update);
            variable36 = variable37.processColorOrThrow;
            variable39 = _closure1_slot1;
            update = 12;
            quebec = romeo[update];
            quebec = variable39.bind(verify)(quebec);
            variable41 = quebec.internal;
            variable40 = variable41.resolveSemanticColor;
            quebec = romeo[update];
            quebec = variable39.bind(verify)(quebec);
            quebec = quebec.colors;
            quebec = quebec.HEADER_SECONDARY;
            quebec = variable40.bind(variable41)(variable38, quebec);
            quebec = variable36.bind(variable37)(quebec);
            entity['headerColor'] = quebec;
            variable37 = _closure1_slot5;
            variable36 = variable37.resolveAssetSource;
            quebec = 21;
            quebec = romeo[quebec];
            variable41 = lima.bind(verify)(quebec);
            variable40 = variable41.makeSource;
            quebec = 23;
            quebec = romeo[quebec];
            quebec = variable39.bind(verify)(quebec);
            quebec = variable40.bind(variable41)(quebec);
            quebec = variable36.bind(variable37)(quebec);
            quebec = quebec.uri;
            entity['headerIconURL'] = quebec;
            status = romeo[status];
            quebec = lima.bind(verify)(status);
            status = quebec.processColorOrThrow;
            variable36 = romeo[update];
            variable36 = variable39.bind(verify)(variable36);
            variable37 = variable36.internal;
            variable36 = variable37.resolveSemanticColor;
            update = romeo[update];
            update = variable39.bind(verify)(update);
            update = update.colors;
            update = update.HEADER_SECONDARY;
            update = variable36.bind(variable37)(variable38, update);
            update = status.bind(quebec)(update);
            entity['headerIconColor'] = update;
            update = romeo[offset];
            update = lima.bind(verify)(update);
            status = update.intl;
            update = status.string;
            romeo = romeo[offset];
            romeo = lima.bind(verify)(romeo);
            romeo = romeo.t;
            romeo = romeo.NxHYX1;
            romeo = update.bind(status)(romeo);
            entity['body'] = romeo;
            romeo = false;
            entity['shouldShowActions'] = romeo;
            foxtrot = '';
            mike = options;
            yankee = entity;
            _fun72453_ip = 2829; continue _fun72453;
 894:
            romeo = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[output];
            romeo = romeo.bind(verify)(entity);
            entity = romeo.getUserIdOfAutomodAction;
            lima = entity.bind(romeo)(kilo);
            romeo = _closure1_slot11;
            entity = romeo.getUser;
            status = entity.bind(romeo)(lima);
            entity = oscar != lima;
            update = null;
            if(!entity) { _fun72453_ip = 971; continue _fun72453 }
 946:
            entity = oscar != config;
            update = null;
            if(!entity) { _fun72453_ip = 971; continue _fun72453 }
 955:
            romeo = _closure1_slot9;
            entity = romeo.getMember;
            update = entity.bind(romeo)(config, lima);
 971:
            entity = oscar == update;
            romeo = undefined;
            if(entity) { _fun72453_ip = 986; continue _fun72453 }
 980:
            romeo = update.nick;
 986:
            if(!(oscar == romeo)) { _fun72453_ip = 1007; continue _fun72453 }
 990:
            lima = oscar == status;
            entity = undefined;
            if(lima) { _fun72453_ip = 1004; continue _fun72453 }
 999:
            entity = status.username;
 1004:
            romeo = entity;
 1007:
            status = _closure1_slot0;
            lima = _closure1_slot2;
            entity = 24;
            entity = lima[entity];
            lima = status.bind(verify)(entity);
            status = lima.ensureAvatarSource;
            quebec = oscar == update;
            entity = undefined;
            if(quebec) { _fun72453_ip = 1048; continue _fun72453 }
 1042:
            entity = update.avatar;
 1048:
            if(!(oscar != entity)) { _fun72453_ip = 1056; continue _fun72453 }
 1052:
            if(!(oscar == config)) { _fun72453_ip = 1073; continue _fun72453 }
 1056:
            quebec = sequence.getAvatarSource;
            entity = false;
            entity = quebec.bind(sequence)(verify, entity, offset);
            _fun72453_ip = 1140; continue _fun72453;
 1073:
            variable36 = _closure1_slot0;
            variable37 = _closure1_slot2;
            quebec = 21;
            quebec = variable37[quebec];
            variable37 = variable36.bind(verify)(quebec);
            variable36 = variable37.getGuildMemberAvatarSource;
            quebec = {};
            variable39 = sequence.id;
            quebec['userId'] = variable39;
            variable40 = oscar == update;
            variable39 = undefined;
            if(variable40) { _fun72453_ip = 1125; continue _fun72453 }
 1119:
            variable39 = update.avatar;
 1125:
            quebec['guildMemberAvatar'] = variable39;
            quebec['guildId'] = config;
            entity = variable36.bind(variable37)(quebec, sequence);
 1140:
            status = status.bind(lima)(entity);
            entity = {};
            variable37 = _closure1_slot0;
            lima = _closure1_slot2;
            quebec = lima[offset];
            quebec = variable37.bind(verify)(quebec);
            variable39 = quebec.intl;
            variable36 = variable39.string;
            quebec = lima[offset];
            quebec = variable37.bind(verify)(quebec);
            quebec = quebec.t;
            quebec = quebec.lVLiFh;
            quebec = variable36.bind(variable39)(quebec);
            entity['header'] = quebec;
            variable39 = 13;
            quebec = lima[variable39];
            variable42 = variable37.bind(verify)(quebec);
            variable41 = variable42.processColorOrThrow;
            variable36 = _closure1_slot1;
            quebec = 12;
            variable40 = lima[quebec];
            variable40 = variable36.bind(verify)(variable40);
            variable44 = variable40.internal;
            variable43 = variable44.resolveSemanticColor;
            variable40 = lima[quebec];
            variable40 = variable36.bind(verify)(variable40);
            variable40 = variable40.colors;
            variable40 = variable40.TEXT_POSITIVE;
            variable40 = variable43.bind(variable44)(variable38, variable40);
            variable40 = variable41.bind(variable42)(variable40);
            entity['headerColor'] = variable40;
            variable42 = _closure1_slot5;
            variable41 = variable42.resolveAssetSource;
            variable40 = 21;
            variable40 = lima[variable40];
            variable44 = variable37.bind(verify)(variable40);
            variable43 = variable44.makeSource;
            variable40 = 25;
            variable40 = lima[variable40];
            variable40 = variable36.bind(verify)(variable40);
            variable40 = variable43.bind(variable44)(variable40);
            variable40 = variable41.bind(variable42)(variable40);
            variable40 = variable40.uri;
            entity['headerIconURL'] = variable40;
            variable39 = lima[variable39];
            variable40 = variable37.bind(verify)(variable39);
            variable39 = variable40.processColorOrThrow;
            variable41 = lima[quebec];
            variable41 = variable36.bind(verify)(variable41);
            variable42 = variable41.internal;
            variable41 = variable42.resolveSemanticColor;
            quebec = lima[quebec];
            quebec = variable36.bind(verify)(quebec);
            quebec = quebec.colors;
            quebec = quebec.TEXT_POSITIVE;
            quebec = variable41.bind(variable42)(variable38, quebec);
            quebec = variable39.bind(variable40)(quebec);
            entity['headerIconColor'] = quebec;
            quebec = lima[offset];
            quebec = variable37.bind(verify)(quebec);
            variable40 = quebec.intl;
            variable39 = variable40.string;
            quebec = lima[offset];
            quebec = variable37.bind(verify)(quebec);
            quebec = quebec.t;
            quebec = quebec.QV/8u7;
            quebec = variable39.bind(variable40)(quebec);
            entity['body'] = quebec;
            quebec = false;
            entity['shouldShowActions'] = quebec;
            quebec = 18;
            quebec = lima[quebec];
            variable36 = variable36.bind(verify)(quebec);
            quebec = kilo.timestamp;
            variable36 = variable36.bind(verify)(quebec);
            quebec = variable36.fromNow;
            quebec = quebec.bind(variable36)();
            entity['subtitleRight'] = quebec;
            quebec = lima[offset];
            quebec = variable37.bind(verify)(quebec);
            variable36 = quebec.intl;
            quebec = variable36.string;
            lima = lima[offset];
            lima = variable37.bind(verify)(lima);
            lima = lima.t;
            lima = lima.qlFrXV;
            lima = quebec.bind(variable36)(lima);
            entity['subtitleLeft'] = lima;
            status = status.uri;
            entity['enabledByAvatarURL'] = status;
            entity['enabledByUsername'] = romeo;
            status = oscar == update;
            romeo = undefined;
            if(status) { _fun72453_ip = 1593; continue _fun72453 }
 1587:
            romeo = update.colorString;
 1593:
            status = oscar != romeo;
            romeo = undefined;
            if(!status) { _fun72453_ip = 1617; continue _fun72453 }
 1602:
            status = _closure1_slot4;
            update = update.colorString;
            romeo = status.bind(verify)(update);
 1617:
            entity['enabledByColor'] = romeo;
            foxtrot = '';
            mike = options;
            yankee = entity;
            _fun72453_ip = 2829; continue _fun72453;
 1639:
            entity = {};
            romeo = zulu.raidDatetime;
            update = oscar != romeo;
            romeo = undefined;
            if(!update) { _fun72453_ip = 1697; continue _fun72453 }
 1656:
            status = _closure1_slot1;
            lima = _closure1_slot2;
            update = 18;
            update = lima[update];
            status = status.bind(verify)(update);
            update = zulu.raidDatetime;
            status = status.bind(verify)(update);
            update = status.fromNow;
            romeo = update.bind(status)();
 1697:
            entity['subtitleLeft'] = romeo;
            lima = _closure1_slot0;
            romeo = _closure1_slot2;
            update = romeo[offset];
            update = lima.bind(verify)(update);
            quebec = update.intl;
            status = quebec.string;
            update = romeo[offset];
            update = lima.bind(verify)(update);
            update = update.t;
            update = update.C2uIXF;
            update = status.bind(quebec)(update);
            entity['header'] = update;
            status = 13;
            update = romeo[status];
            variable37 = lima.bind(verify)(update);
            variable36 = variable37.processColorOrThrow;
            variable39 = _closure1_slot1;
            update = 12;
            quebec = romeo[update];
            quebec = variable39.bind(verify)(quebec);
            variable41 = quebec.internal;
            variable40 = variable41.resolveSemanticColor;
            quebec = romeo[update];
            quebec = variable39.bind(verify)(quebec);
            quebec = quebec.colors;
            quebec = quebec.TEXT_DANGER;
            quebec = variable40.bind(variable41)(variable38, quebec);
            quebec = variable36.bind(variable37)(quebec);
            entity['headerColor'] = quebec;
            variable37 = _closure1_slot5;
            variable36 = variable37.resolveAssetSource;
            quebec = 21;
            quebec = romeo[quebec];
            variable41 = lima.bind(verify)(quebec);
            variable40 = variable41.makeSource;
            quebec = 23;
            quebec = romeo[quebec];
            quebec = variable39.bind(verify)(quebec);
            quebec = variable40.bind(variable41)(quebec);
            quebec = variable36.bind(variable37)(quebec);
            quebec = quebec.uri;
            entity['headerIconURL'] = quebec;
            status = romeo[status];
            quebec = lima.bind(verify)(status);
            status = quebec.processColorOrThrow;
            variable36 = romeo[update];
            variable36 = variable39.bind(verify)(variable36);
            variable37 = variable36.internal;
            variable36 = variable37.resolveSemanticColor;
            update = romeo[update];
            update = variable39.bind(verify)(update);
            update = update.colors;
            update = update.TEXT_DANGER;
            update = variable36.bind(variable37)(variable38, update);
            update = status.bind(quebec)(update);
            entity['headerIconColor'] = update;
            update = romeo[offset];
            update = lima.bind(verify)(update);
            status = update.intl;
            update = status.string;
            romeo = romeo[offset];
            romeo = lima.bind(verify)(romeo);
            romeo = romeo.t;
            romeo = romeo.SWIWER;
            romeo = update.bind(status)(romeo);
            entity['body'] = romeo;
            romeo = false;
            entity['shouldShowActions'] = romeo;
            foxtrot = '';
            mike = options;
            yankee = entity;
            _fun72453_ip = 2829; continue _fun72453;
 2042:
            entity = zulu.raidDatetime;
            entity = oscar != entity;
            options = undefined;
            if(!entity) { _fun72453_ip = 2098; continue _fun72453 }
 2057:
            romeo = _closure1_slot1;
            update = _closure1_slot2;
            entity = 18;
            entity = update[entity];
            romeo = romeo.bind(verify)(entity);
            entity = zulu.raidDatetime;
            romeo = romeo.bind(verify)(entity);
            entity = romeo.fromNow;
            options = entity.bind(romeo)();
 2098:
            romeo = zulu.raidType;
            update = _closure1_slot0;
            status = _closure1_slot2;
            entity = 19;
            entity = status[entity];
            entity = update.bind(verify)(entity);
            entity = entity.AutomodRaidAlertTypes;
            entity = entity.DM_RAID;
            romeo = romeo === entity;
            entity = zulu.raidDatetime;
            entity = oscar != entity;
            variable36 = '';
            if(!entity) { _fun72453_ip = 2249; continue _fun72453 }
 2157:
            entity = global;
            status = entity.Date;
            variable47 = zulu.raidDatetime;
            update = status.prototype;
            update = Object.create(update, {constructor: {value: status}});
            variable48 = update;
            entity = new variable48[status](variable47, variable46);
            lima = entity instanceof Object ? entity : update;
            status = lima.toLocaleString;
            quebec = _closure1_slot0;
            variable37 = _closure1_slot2;
            entity = variable37[offset];
            entity = quebec.bind(verify)(entity);
            entity = entity.intl;
            update = entity.currentLocale;
            entity = 20;
            entity = variable37[entity];
            entity = quebec.bind(verify)(entity);
            entity = entity.DATE_CONFIG;
            variable36 = status.bind(lima)(update, entity);
 2249:
            update = _closure1_slot0;
            entity = _closure1_slot2;
            status = entity[offset];
            status = update.bind(verify)(status);
            quebec = status.intl;
            lima = quebec.formatToPlainString;
            entity = entity[offset];
            entity = update.bind(verify)(entity);
            entity = entity.t;
            if(romeo) { _fun72453_ip = 2322; continue _fun72453 }
 2293:
            status = entity.4ylIio;
            update = {};
            variable37 = zulu.joinAttempts;
            update['joinCount'] = variable37;
            update = lima.bind(quebec)(status, update);
            _fun72453_ip = 2347; continue _fun72453;
 2322:
            status = entity.5C8Mh4;
            entity = {};
            variable37 = zulu.dmsSent;
            entity['dmsSent'] = variable37;
            update = lima.bind(quebec)(status, entity);
 2347:
            entity = {};
            entity['subtitleLeft'] = update;
            entity['severity'] = update;
            entity['subtitleRight'] = options;
            entity['startTime'] = options;
            update = _closure1_slot0;
            options = _closure1_slot2;
            status = options[offset];
            status = update.bind(verify)(status);
            lima = status.intl;
            status = lima.string;
            options = options[offset];
            options = update.bind(verify)(options);
            update = options.t;
            if(romeo) { _fun72453_ip = 2428; continue _fun72453 }
 2415:
            options = update.xMwcwc;
            options = status.bind(lima)(options);
            _fun72453_ip = 2439; continue _fun72453;
 2428:
            update = update.8+lHUV;
            options = status.bind(lima)(update);
 2439:
            entity['header'] = options;
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            status = 13;
            options = variable40[status];
            quebec = variable37.bind(verify)(options);
            lima = quebec.processColorOrThrow;
            variable39 = _closure1_slot1;
            options = 12;
            update = variable40[options];
            update = variable39.bind(verify)(update);
            variable42 = update.internal;
            variable41 = variable42.resolveSemanticColor;
            update = variable40[options];
            update = variable39.bind(verify)(update);
            update = update.colors;
            update = update.TEXT_DANGER;
            update = variable41.bind(variable42)(variable38, update);
            update = lima.bind(quebec)(update);
            entity['headerColor'] = update;
            lima = _closure1_slot5;
            update = lima.resolveAssetSource;
            quebec = 21;
            quebec = variable40[quebec];
            variable37 = variable37.bind(verify)(quebec);
            quebec = variable37.makeSource;
            variable41 = _closure1_slot2;
            if(romeo) { _fun72453_ip = 2577; continue _fun72453 }
 2568:
            romeo = 23;
            romeo = variable41[romeo];
            _fun72453_ip = 2584; continue _fun72453;
 2577:
            variable40 = 22;
            romeo = variable41[variable40];
 2584:
            romeo = variable39.bind(verify)(romeo);
            romeo = quebec.bind(variable37)(romeo);
            romeo = update.bind(lima)(romeo);
            romeo = romeo.uri;
            entity['headerIconURL'] = romeo;
            update = _closure1_slot0;
            romeo = _closure1_slot2;
            status = romeo[status];
            lima = update.bind(verify)(status);
            status = lima.processColorOrThrow;
            variable39 = _closure1_slot1;
            quebec = romeo[options];
            quebec = variable39.bind(verify)(quebec);
            variable37 = quebec.internal;
            quebec = variable37.resolveSemanticColor;
            options = romeo[options];
            options = variable39.bind(verify)(options);
            options = options.colors;
            options = options.TEXT_DANGER;
            options = quebec.bind(variable37)(variable38, options);
            options = status.bind(lima)(options);
            entity['headerIconColor'] = options;
            options = romeo[offset];
            options = update.bind(verify)(options);
            quebec = options.intl;
            lima = quebec.formatToPlainString;
            options = romeo[offset];
            options = update.bind(verify)(options);
            options = options.t;
            status = options.4QIIZm;
            options = {};
            options['dateTime'] = variable36;
            options = lima.bind(quebec)(status, options);
            entity['body'] = options;
            options = true;
            entity['shouldShowActions'] = options;
            options = romeo[offset];
            options = update.bind(verify)(options);
            lima = options.intl;
            status = lima.string;
            options = romeo[offset];
            options = update.bind(verify)(options);
            options = options.t;
            options = options.ufawc3;
            foxtrot = status.bind(lima)(options);
            romeo = romeo[output];
            update = update.bind(verify)(romeo);
            romeo = update.getRaidAlertResolveCTAText;
            zulu = zulu.resolvedReason;
            mike = romeo.bind(update)(zulu);
            yankee = entity;
 2829:
            entity = oscar != config;
            options = null;
            if(!entity) { _fun72453_ip = 2947; continue _fun72453 }
 2838:
            zulu = _closure1_slot0;
            romeo = _closure1_slot2;
            entity = 24;
            entity = romeo[entity];
            romeo = zulu.bind(verify)(entity);
            zulu = romeo.ensureAvatarSource;
            if(!(oscar != whiskey)) { _fun72453_ip = 2872; continue _fun72453 }
 2868:
            if(!(oscar == config)) { _fun72453_ip = 2885; continue _fun72453 }
 2872:
            entity = sequence.getAvatarSource;
            entity = entity.bind(sequence)(verify);
            _fun72453_ip = 2937; continue _fun72453;
 2885:
            status = _closure1_slot0;
            lima = _closure1_slot2;
            update = 21;
            update = lima[update];
            lima = status.bind(verify)(update);
            status = lima.getGuildMemberAvatarSource;
            update = {};
            quebec = sequence.id;
            update['userId'] = quebec;
            update['guildMemberAvatar'] = whiskey;
            update['guildId'] = config;
            entity = status.bind(lima)(update, sequence);
 2937:
            entity = zulu.bind(romeo)(entity);
            options = entity.uri;
 2947:
            entity = oscar != config;
            update = null;
            if(!entity) { _fun72453_ip = 2977; continue _fun72453 }
 2956:
            romeo = _closure1_slot9;
            zulu = romeo.getMember;
            entity = sequence.id;
            update = zulu.bind(romeo)(config, entity);
 2977:
            entity = oscar != sierra;
            romeo = undefined;
            if(!entity) { _fun72453_ip = 3044; continue _fun72453 }
 2986:
            entity = oscar != config;
            romeo = undefined;
            if(!entity) { _fun72453_ip = 3044; continue _fun72453 }
 2995:
            zulu = _closure1_slot0;
            status = _closure1_slot2;
            entity = 26;
            entity = status[entity];
            status = zulu.bind(verify)(entity);
            zulu = status.getRoleIcon;
            entity = {};
            entity['guildId'] = config;
            entity['roleId'] = sierra;
            sierra = 18;
            entity['size'] = sierra;
            romeo = zulu.bind(status)(entity);
 3044:
            entity = {};
            status = _closure1_slot1;
            variable36 = _closure1_slot2;
            zulu = 27;
            zulu = variable36[zulu];
            zulu = status.bind(verify)(zulu);
            variable46 = zulu.bind(verify)(vacuum);
            variable47 = entity;
            zulu = copyDataProperties(variable47, variable46);
            zulu = 'roleIcon';
            entity[zulu] = romeo;
            romeo = sequence.id;
            zulu = 'authorId';
            entity[zulu] = romeo;
            quebec = _closure1_slot0;
            zulu = variable36[offset];
            zulu = quebec.bind(verify)(zulu);
            vacuum = zulu.intl;
            romeo = vacuum.string;
            zulu = variable36[offset];
            zulu = quebec.bind(verify)(zulu);
            zulu = zulu.t;
            zulu = zulu.hG1StL;
            zulu = romeo.bind(vacuum)(zulu);
            vacuum = 'username';
            entity[vacuum] = zulu;
            zulu = 24;
            romeo = variable36[zulu];
            sierra = quebec.bind(verify)(romeo);
            status = sierra.ensureAvatarSource;
            romeo = 21;
            lima = variable36[romeo];
            whiskey = quebec.bind(verify)(lima);
            lima = whiskey.makeSource;
            zulu = variable36[zulu];
            quebec = quebec.bind(verify)(zulu);
            zulu = quebec.getAutomodAvatarURL;
            zulu = zulu.bind(quebec)();
            zulu = lima.bind(whiskey)(zulu);
            zulu = status.bind(sierra)(zulu);
            status = zulu.uri;
            zulu = 'avatarURL';
            entity[zulu] = status;
            zulu = _closure1_slot4;
            zulu = zulu.bind(verify)(source);
            sierra = oscar != zulu;
            status = null;
            if(!sierra) { _fun72453_ip = 3258; continue _fun72453 }
 3255:
            status = zulu;
 3258:
            zulu = 'colorString';
            entity[zulu] = status;
            zulu = {};
            zulu['headerText'] = foxtrot;
            lima = _closure1_slot0;
            foxtrot = _closure1_slot2;
            status = foxtrot[offset];
            status = lima.bind(verify)(status);
            sierra = status.intl;
            status = sierra.string;
            foxtrot = foxtrot[offset];
            foxtrot = lima.bind(verify)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.70CJbW;
            foxtrot = status.bind(sierra)(foxtrot);
            zulu['headerBadgeText'] = foxtrot;
            status = oscar != equality;
            foxtrot = '';
            if(!status) { _fun72453_ip = 3404; continue _fun72453 }
 3344:
            sierra = _closure1_slot0;
            status = _closure1_slot2;
            lima = status[offset];
            lima = sierra.bind(verify)(lima);
            whiskey = lima.intl;
            lima = whiskey.formatToPlainString;
            status = status[offset];
            status = sierra.bind(verify)(status);
            status = status.t;
            sierra = status.SYIUTU;
            status = {};
            status['keyword'] = equality;
            foxtrot = lima.bind(whiskey)(sierra, status);
 3404:
            zulu['keywordDisplayText'] = foxtrot;
            foxtrot = {};
            if(!(oscar == target)) { _fun72453_ip = 3422; continue _fun72453 }
 3417:
            target = kilo.id;
 3422:
            foxtrot['id'] = target;
            status = oscar == papa;
            target = undefined;
            if(status) { _fun72453_ip = 3440; continue _fun72453 }
 3435:
            target = papa.id;
 3440:
            if(!(oscar != target)) { _fun72453_ip = 3447; continue _fun72453 }
 3444:
            record = target;
 3447:
            if(!(oscar == record)) { _fun72453_ip = 3456; continue _fun72453 }
 3451:
            record = kilo.channel_id;
 3456:
            foxtrot['channelId'] = record;
            foxtrot['guildId'] = config;
            sequence = sequence.id;
            foxtrot['userId'] = sequence;
            sequence = undefined;
            if(!context) { _fun72453_ip = 3516; continue _fun72453 }
 3478:
            config = oscar == sizing;
            sequence = undefined;
            if(!config) { _fun72453_ip = 3516; continue _fun72453 }
 3487:
            record = _closure1_slot0;
            config = _closure1_slot2;
            config = config[output];
            record = record.bind(verify)(config);
            config = record.getChannelName;
            sequence = config.bind(record)(papa, context);
 3516:
            foxtrot['channelName'] = sequence;
            foxtrot['username'] = echo;
            echo = result;
            if(!(vacuum === control)) { _fun72453_ip = 3551; continue _fun72453 }
 3532:
            vacuum = _closure1_slot4;
            vacuum = vacuum.bind(verify)(source);
            echo = result;
            if(!(oscar != vacuum)) { _fun72453_ip = 3551; continue _fun72453 }
 3548:
            echo = vacuum;
 3551:
            foxtrot['usernameColor'] = echo;
            echo = _closure1_slot4;
            vacuum = echo.bind(verify)(source);
            sequence = oscar != vacuum;
            echo = null;
            if(!sequence) { _fun72453_ip = 3577; continue _fun72453 }
 3574:
            echo = vacuum;
 3577:
            foxtrot['roleColor'] = echo;
            echo = 'dot';
            echo = echo === control;
            if(!echo) { _fun72453_ip = 3597; continue _fun72453 }
 3593:
            echo = oscar != source;
 3597:
            foxtrot['shouldShowRoleDot'] = echo;
            echo = _closure1_slot4;
            echo = echo.bind(verify)(source);
            if(!(oscar != echo)) { _fun72453_ip = 3618; continue _fun72453 }
 3615:
            result = echo;
 3618:
            foxtrot['colorString'] = result;
            foxtrot['avatarURL'] = options;
            foxtrot['content'] = golf;
            options = _closure1_slot0;
            golf = _closure1_slot2;
            result = 28;
            result = golf[result];
            echo = options.bind(verify)(result);
            result = echo.isMemberCommunicationDisabled;
            result = result.bind(echo)(update);
            foxtrot['communicationDisabled'] = result;
            result = 29;
            result = golf[result];
            echo = options.bind(verify)(result);
            result = echo.accessibilityLabelCalendarFormat;
            kilo = kilo.timestamp;
            kilo = result.bind(echo)(kilo);
            foxtrot['timestamp'] = kilo;
            zulu['message'] = foxtrot;
            zulu['notification'] = yankee;
            yankee = golf[offset];
            yankee = options.bind(verify)(yankee);
            foxtrot = yankee.intl;
            yankee = foxtrot.formatToPlainString;
            golf = golf[offset];
            golf = options.bind(verify)(golf);
            golf = golf.t;
            options = golf.ZoOyKC;
            golf = {};
            golf['ruleName'] = backup;
            golf = yankee.bind(foxtrot)(options, golf);
            zulu['ruleDisplayText'] = golf;
            golf = oscar != sizing;
            oscar = null;
            if(!golf) { _fun72453_ip = 3859; continue _fun72453 }
 3779:
            kilo = _closure1_slot0;
            backup = _closure1_slot2;
            golf = backup[offset];
            golf = kilo.bind(verify)(golf);
            foxtrot = golf.intl;
            yankee = foxtrot.formatToPlainString;
            golf = backup[offset];
            golf = kilo.bind(verify)(golf);
            golf = golf.t;
            options = golf.26bB2N;
            golf = {};
            backup = backup[output];
            kilo = kilo.bind(verify)(backup);
            backup = kilo.getQuarantineReasonString;
            backup = backup.bind(kilo)(sizing);
            golf['reason'] = backup;
            oscar = yankee.bind(foxtrot)(options, golf);
 3859:
            zulu['reasonDisplayText'] = oscar;
            options = _closure1_slot5;
            golf = options.resolveAssetSource;
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[romeo];
            romeo = yankee.bind(verify)(oscar);
            yankee = romeo.makeSource;
            foxtrot = _closure1_slot1;
            kilo = _closure1_slot2;
            if(tango) { _fun72453_ip = 3919; continue _fun72453 }
 3910:
            oscar = 31;
            oscar = kilo[oscar];
            _fun72453_ip = 3926; continue _fun72453;
 3919:
            backup = 30;
            oscar = kilo[backup];
 3926:
            oscar = foxtrot.bind(verify)(oscar);
            oscar = yankee.bind(romeo)(oscar);
            oscar = golf.bind(options)(oscar);
            oscar = oscar.uri;
            zulu['actionsIconURL'] = oscar;
            options = _closure1_slot0;
            report = _closure1_slot2;
            oscar = report[offset];
            oscar = options.bind(verify)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = report[offset];
            report = options.bind(verify)(report);
            report = report.t;
            if(tango) { _fun72453_ip = 4010; continue _fun72453 }
 3997:
            tango = report.DEoVWV;
            tango = oscar.bind(golf)(tango);
            _fun72453_ip = 4021; continue _fun72453;
 4010:
            report = report.UgXhdn;
            tango = oscar.bind(golf)(report);
 4021:
            zulu['actionsText'] = tango;
            zulu['feedbackText'] = mike;
            mike = 'autoModerationContext';
            entity[mike] = zulu;
            return entity;
        }
    };
    var _closure1_slot15 = mike;
    entity = function(argFoo) { // Original name: AutoModerationActionSystemMessageInner
        _fun72454: for(var _fun72454_ip = 0; ; ) switch(_fun72454_ip) {
 0:
            entity = argFoo;
            yankee = entity.row;
            backup = entity.message;
            var _closure2_slot0 = backup;
            report = undefined;
            var _closure2_slot4 = report;
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 32;
            entity = oscar[zulu];
            romeo = tango.bind(report)(entity);
            offset = romeo.useStateFromStores;
            entity = _closure1_slot6;
            verify = new Array(1);
            verify[0] = entity;
            golf = function() {
                entity = _closure1_slot6;
                entity = entity.roleStyle;
                return entity;
            };
            entity = new Array(0);
            foxtrot = offset.bind(romeo)(verify, golf, entity);
            var _closure2_slot1 = foxtrot;
            entity = oscar[zulu];
            offset = tango.bind(report)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot7;
            golf = new Array(1);
            golf[0] = entity;
            entity = function() {
                entity = _closure1_slot7;
                entity = entity.theme;
                return entity;
            };
            romeo = verify.bind(offset)(golf, entity);
            var _closure2_slot2 = romeo;
            entity = backup.getChannelId;
            entity = entity.bind(backup)();
            var _closure2_slot3 = entity;
            zulu = oscar[zulu];
            golf = tango.bind(report)(zulu);
            oscar = golf.useStateFromStores;
            zulu = _closure1_slot8;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                zulu = _closure1_slot8;
                mike = zulu.getChannel;
                entity = _closure2_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = oscar.bind(golf)(tango, entity, zulu);
            entity = null;
            zulu = entity == tango;
            sizing = undefined;
            if(zulu) { _fun72454_ip = 214; continue _fun72454 }
 204:
            zulu = tango.getGuildId;
            sizing = zulu.bind(tango)();
 214:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 15;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.useNullableMessageAuthor;
            zulu = zulu.bind(tango)(backup);
            tango = zulu.colorString;
            kilo = zulu.iconRoleId;
            verify = backup.author;
            zulu = entity != kilo;
            offset = undefined;
            if(!zulu) { _fun72454_ip = 330; continue _fun72454 }
 272:
            zulu = entity != sizing;
            offset = undefined;
            if(!zulu) { _fun72454_ip = 330; continue _fun72454 }
 281:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 26;
            zulu = golf[zulu];
            golf = oscar.bind(report)(zulu);
            oscar = golf.getRoleIcon;
            zulu = {};
            zulu['guildId'] = sizing;
            zulu['roleId'] = kilo;
            kilo = 18;
            zulu['size'] = kilo;
            offset = oscar.bind(golf)(zulu);
 330:
            zulu = _closure1_slot4;
            zulu = zulu.bind(report)(tango);
            tango = entity != zulu;
            golf = null;
            if(!tango) { _fun72454_ip = 351; continue _fun72454 }
 348:
            golf = zulu;
 351:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 33;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            tango = zulu.AnimateEmoji;
            zulu = tango.useSetting;
            kilo = zulu.bind(tango)();
            _closure2_slot4 = kilo;
            oscar = _closure1_slot3;
            tango = oscar.useMemo;
            zulu = new Array(4);
            zulu[0] = kilo;
            zulu[1] = backup;
            zulu[2] = foxtrot;
            zulu[3] = romeo;
            mike = function() {
                zulu = _closure1_slot15;
                mike = {};
                golf = _closure2_slot0;
                mike['message'] = golf;
                tango = _closure2_slot2;
                mike['theme'] = tango;
                tango = _closure2_slot1;
                mike['roleStyle'] = tango;
                report = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 34;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = {};
                golf = golf.reactions;
                tango['reactions'] = golf;
                oscar = _closure2_slot4;
                tango['animateEmoji'] = oscar;
                tango = report.bind(entity)(tango);
                mike['reactions'] = tango;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike = tango.bind(oscar)(mike, zulu);
            if(!(entity != mike)) { _fun72454_ip = 640; continue _fun72454 }
 440:
            oscar = mike.autoModerationContext;
            tango = _closure1_slot13;
            zulu = _closure1_slot1;
            backup = _closure1_slot2;
            mike = 35;
            mike = backup[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['row'] = yankee;
            mike['roleIcon'] = offset;
            verify = verify.id;
            mike['authorId'] = verify;
            foxtrot = _closure1_slot0;
            options = 16;
            verify = backup[options];
            verify = foxtrot.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = backup[options];
            options = foxtrot.bind(report)(options);
            options = options.t;
            options = options.hG1StL;
            options = verify.bind(offset)(options);
            mike['username'] = options;
            options = 24;
            verify = backup[options];
            offset = foxtrot.bind(report)(verify);
            verify = offset.ensureAvatarSource;
            yankee = 21;
            yankee = backup[yankee];
            romeo = foxtrot.bind(report)(yankee);
            yankee = romeo.makeSource;
            options = backup[options];
            foxtrot = foxtrot.bind(report)(options);
            options = foxtrot.getAutomodAvatarURL;
            options = options.bind(foxtrot)();
            options = yankee.bind(romeo)(options);
            options = verify.bind(offset)(options);
            options = options.uri;
            mike['avatarURL'] = options;
            mike['colorString'] = golf;
            mike['autoModerationContext'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 640:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.processColor;
    var _closure1_slot4 = verify;
    report = report.Image;
    var _closure1_slot5 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot12 = report;
    report = 9;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot13 = report;
    report = 10;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.memoize;
    report = function(argFoo) {
        _fun72459: for(var _fun72459_ip = 0; ; ) switch(_fun72459_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 11;
            entity = tango[entity];
            report = undefined;
            tango = zulu.bind(report)(entity);
            zulu = tango.isThemeDark;
            entity = argFoo;
            zulu = zulu.bind(tango)(entity);
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 12;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.unsafe_rawColors;
            if(zulu) { _fun72459_ip = 75; continue _fun72459 }
 67:
            tango = entity.PRIMARY_630;
            _fun72459_ip = 81; continue _fun72459;
 75:
            tango = entity.WHITE_500;
 81:
            entity = {};
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 13;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.processColorOrThrow;
            mike = mike.bind(zulu)(tango);
            entity['defaultUsernameColor'] = mike;
            return entity;
        }
    };
    report = options.bind(verify)(report);
    var _closure1_slot14 = report;
    report = 36;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: AutoModerationActionSystemMessage
        _fun72460: for(var _fun72460_ip = 0; ; ) switch(_fun72460_ip) {
 0:
            entity = argFoo;
            golf = entity.row;
            oscar = golf.message;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 14;
            entity = tango[entity];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.isAutomodMessageRecord;
            zulu = entity.bind(zulu)(oscar);
            entity = null;
            if(!zulu) { _fun72460_ip = 80; continue _fun72460 }
 55:
            tango = _closure1_slot13;
            zulu = _closure1_slot16;
            mike = {};
            mike['row'] = golf;
            mike['message'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 80:
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['createAutoModerationActionSystemMessage'] = mike;
    return entity;
})();