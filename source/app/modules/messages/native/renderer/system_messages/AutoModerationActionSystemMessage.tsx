// app/modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: createAutoModerationActionSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            vacuum = argFoo;
            kiloes = vacuum.message;
            variable38 = vacuum.theme;
            ctrled = vacuum.roleStyle;
            entity = _closure1_slot14;
            verify = undefined;
            entity = entity.bind(verify)(variable38);
            result = entity.defaultUsernameColor;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            output = 14;
            entity = entity[output];
            michal = michal.bind(verify)(entity);
            entity = michal.isAutomodMessageRecord;
            entity = entity.bind(michal)(kiloes);
            if(entity) { _fun00002_ip = 78; continue _fun00001 }
 74:
            entity = null;
            return entity;
 78:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[output];
            michal = michal.bind(verify)(entity);
            entity = michal.extractAutomodMessageFields;
            entity = entity.bind(michal)(kiloes);
            backup = entity.ruleName;
            equals = entity.keyword;
            papara = entity.embedChannel;
            golfie = entity.content;
            target = entity.flaggedMessageId;
            record = entity.embedChannelId;
            sizing = entity.quarantineType;
            option = entity.interactionUserId;
            zuuluu = _closure1_slot8;
            michal = zuuluu.getChannel;
            entity = kiloes.getChannelId;
            entity = entity.bind(kiloes)();
            michal = michal.bind(zuuluu)(entity);
            oscard = null;
            entity = oscard == michal;
            config = undefined;
            if(entity) { _fun00002_ip = 198; continue _fun00001 }
 188:
            entity = michal.getGuildId;
            config = entity.bind(michal)();
 198:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 15;
            entity = michal[entity];
            tangon = zuuluu.bind(verify)(entity);
            entity = tangon.getMessageAuthor;
            entity = entity.bind(tangon)(kiloes);
            echoed = entity.nick;
            whisks = entity.guildMemberAvatar;
            source = entity.colorString;
            sierra = entity.iconRoleId;
            sequen = kiloes.author;
            offset = _closure1_slot10;
            tangon = offset.can;
            entity = _closure1_slot12;
            entity = entity.VIEW_CHANNEL;
            cntext = tangon.bind(offset)(entity, papara);
            entity = michal[output];
            tangon = zuuluu.bind(verify)(entity);
            entity = tangon.getActionHeaderTextMobile;
            foxtra = entity.bind(tangon)(kiloes, sequen, option);
            offset = 16;
            tangon = michal[offset];
            tangon = zuuluu.bind(verify)(tangon);
            yankee = tangon.intl;
            option = yankee.string;
            tangon = michal[offset];
            tangon = zuuluu.bind(verify)(tangon);
            tangon = tangon.t;
            tangon = tangon.94JbMz;
            option = option.bind(yankee)(tangon);
            michal = michal[output];
            zuuluu = zuuluu.bind(verify)(michal);
            michal = zuuluu.isAutomodNotification;
            tangon = michal.bind(zuuluu)(kiloes);
            michal = option;
            yankee = null;
            if(!tangon) { _fun00002_ip = 2855; continue _fun00001 }
 387:
            update = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = entity[output];
            romeon = update.bind(verify)(zuuluu);
            zuuluu = romeon.extractAutomodNotificationFields;
            zuuluu = zuuluu.bind(romeon)(kiloes);
            romeon = zuuluu.notificationType;
            entity = entity[output];
            entity = update.bind(verify)(entity);
            entity = entity.IS_BACKWARDS_COMPAT_RAID_TYPE;
            if(!(entity !== romeon)) { _fun00002_ip = 2058; continue _fun00001 }
 443:
            update = _closure1_slot0;
            entity = _closure1_slot2;
            status = 17;
            entity = entity[status];
            entity = update.bind(verify)(entity);
            entity = entity.AutomodNotificationEmbedTypeKeys;
            entity = entity.RAID;
            if(!(entity !== romeon)) { _fun00002_ip = 2058; continue _fun00001 }
 482:
            update = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[status];
            entity = update.bind(verify)(entity);
            entity = entity.AutomodNotificationEmbedTypeKeys;
            entity = entity.MENTION_RAID;
            if(!(entity !== romeon)) { _fun00002_ip = 1651; continue _fun00001 }
 518:
            update = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[status];
            entity = update.bind(verify)(entity);
            entity = entity.AutomodNotificationEmbedTypeKeys;
            entity = entity.ACTIVITY_ALERTS_ENABLED;
            if(!(entity !== romeon)) { _fun00002_ip = 900; continue _fun00001 }
 554:
            entity = {};
            limora = _closure1_slot0;
            romeon = _closure1_slot2;
            update = romeon[offset];
            update = limora.bind(verify)(update);
            quebec = update.intl;
            status = quebec.string;
            update = romeon[offset];
            update = limora.bind(verify)(update);
            update = update.t;
            update = update.VdZCcH;
            update = status.bind(quebec)(update);
            entity['header'] = update;
            status = 13;
            update = romeon[status];
            variable37 = limora.bind(verify)(update);
            variable36 = variable37.processColorOrThrow;
            variable39 = _closure1_slot1;
            update = 12;
            quebec = romeon[update];
            quebec = variable39.bind(verify)(quebec);
            variable41 = quebec.internal;
            variable40 = variable41.resolveSemanticColor;
            quebec = romeon[update];
            quebec = variable39.bind(verify)(quebec);
            quebec = quebec.colors;
            quebec = quebec.HEADER_SECONDARY;
            quebec = variable40.bind(variable41)(variable38, quebec);
            quebec = variable36.bind(variable37)(quebec);
            entity['headerColor'] = quebec;
            variable37 = _closure1_slot5;
            variable36 = variable37.resolveAssetSource;
            quebec = 21;
            quebec = romeon[quebec];
            variable41 = limora.bind(verify)(quebec);
            variable40 = variable41.makeSource;
            quebec = 23;
            quebec = romeon[quebec];
            quebec = variable39.bind(verify)(quebec);
            quebec = variable40.bind(variable41)(quebec);
            quebec = variable36.bind(variable37)(quebec);
            quebec = quebec.uri;
            entity['headerIconURL'] = quebec;
            status = romeon[status];
            quebec = limora.bind(verify)(status);
            status = quebec.processColorOrThrow;
            variable36 = romeon[update];
            variable36 = variable39.bind(verify)(variable36);
            variable37 = variable36.internal;
            variable36 = variable37.resolveSemanticColor;
            update = romeon[update];
            update = variable39.bind(verify)(update);
            update = update.colors;
            update = update.HEADER_SECONDARY;
            update = variable36.bind(variable37)(variable38, update);
            update = status.bind(quebec)(update);
            entity['headerIconColor'] = update;
            update = romeon[offset];
            update = limora.bind(verify)(update);
            status = update.intl;
            update = status.string;
            romeon = romeon[offset];
            romeon = limora.bind(verify)(romeon);
            romeon = romeon.t;
            romeon = romeon.NxHYX1;
            romeon = update.bind(status)(romeon);
            entity['body'] = romeon;
            romeon = false;
            entity['shouldShowActions'] = romeon;
            foxtra = '';
            michal = option;
            yankee = entity;
            _fun00002_ip = 2855; continue _fun00001;
 900:
            romeon = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[output];
            romeon = romeon.bind(verify)(entity);
            entity = romeon.getUserIdOfAutomodAction;
            limora = entity.bind(romeon)(kiloes);
            romeon = _closure1_slot11;
            entity = romeon.getUser;
            status = entity.bind(romeon)(limora);
            entity = oscard != limora;
            update = null;
            if(!entity) { _fun00002_ip = 977; continue _fun00001 }
 952:
            entity = oscard != config;
            update = null;
            if(!entity) { _fun00002_ip = 977; continue _fun00001 }
 961:
            romeon = _closure1_slot9;
            entity = romeon.getMember;
            update = entity.bind(romeon)(config, limora);
 977:
            entity = oscard == update;
            romeon = undefined;
            if(entity) { _fun00002_ip = 992; continue _fun00001 }
 986:
            romeon = update.nick;
 992:
            if(!(oscard == romeon)) { _fun00002_ip = 1013; continue _fun00001 }
 996:
            limora = oscard == status;
            entity = undefined;
            if(limora) { _fun00002_ip = 1010; continue _fun00001 }
 1005:
            entity = status.username;
 1010:
            romeon = entity;
 1013:
            status = _closure1_slot0;
            limora = _closure1_slot2;
            entity = 24;
            entity = limora[entity];
            limora = status.bind(verify)(entity);
            status = limora.ensureAvatarSource;
            quebec = oscard == update;
            entity = undefined;
            if(quebec) { _fun00002_ip = 1054; continue _fun00001 }
 1048:
            entity = update.avatar;
 1054:
            if(!(oscard != entity)) { _fun00002_ip = 1062; continue _fun00001 }
 1058:
            if(!(oscard == config)) { _fun00002_ip = 1079; continue _fun00001 }
 1062:
            quebec = sequen.getAvatarSource;
            entity = false;
            entity = quebec.bind(sequen)(verify, entity, offset);
            _fun00002_ip = 1146; continue _fun00001;
 1079:
            variable36 = _closure1_slot0;
            variable37 = _closure1_slot2;
            quebec = 21;
            quebec = variable37[quebec];
            variable37 = variable36.bind(verify)(quebec);
            variable36 = variable37.getGuildMemberAvatarSource;
            quebec = {};
            variable39 = sequen.id;
            quebec['userId'] = variable39;
            variable40 = oscard == update;
            variable39 = undefined;
            if(variable40) { _fun00002_ip = 1131; continue _fun00001 }
 1125:
            variable39 = update.avatar;
 1131:
            quebec['guildMemberAvatar'] = variable39;
            quebec['guildId'] = config;
            entity = variable36.bind(variable37)(quebec, sequen);
 1146:
            status = status.bind(limora)(entity);
            entity = {};
            variable37 = _closure1_slot0;
            limora = _closure1_slot2;
            quebec = limora[offset];
            quebec = variable37.bind(verify)(quebec);
            variable39 = quebec.intl;
            variable36 = variable39.string;
            quebec = limora[offset];
            quebec = variable37.bind(verify)(quebec);
            quebec = quebec.t;
            quebec = quebec.lVLiFh;
            quebec = variable36.bind(variable39)(quebec);
            entity['header'] = quebec;
            variable39 = 13;
            quebec = limora[variable39];
            variable42 = variable37.bind(verify)(quebec);
            variable41 = variable42.processColorOrThrow;
            variable36 = _closure1_slot1;
            quebec = 12;
            variable40 = limora[quebec];
            variable40 = variable36.bind(verify)(variable40);
            variable44 = variable40.internal;
            variable43 = variable44.resolveSemanticColor;
            variable40 = limora[quebec];
            variable40 = variable36.bind(verify)(variable40);
            variable40 = variable40.colors;
            variable40 = variable40.TEXT_POSITIVE;
            variable40 = variable43.bind(variable44)(variable38, variable40);
            variable40 = variable41.bind(variable42)(variable40);
            entity['headerColor'] = variable40;
            variable42 = _closure1_slot5;
            variable41 = variable42.resolveAssetSource;
            variable40 = 21;
            variable40 = limora[variable40];
            variable44 = variable37.bind(verify)(variable40);
            variable43 = variable44.makeSource;
            variable40 = 25;
            variable40 = limora[variable40];
            variable40 = variable36.bind(verify)(variable40);
            variable40 = variable43.bind(variable44)(variable40);
            variable40 = variable41.bind(variable42)(variable40);
            variable40 = variable40.uri;
            entity['headerIconURL'] = variable40;
            variable39 = limora[variable39];
            variable40 = variable37.bind(verify)(variable39);
            variable39 = variable40.processColorOrThrow;
            variable41 = limora[quebec];
            variable41 = variable36.bind(verify)(variable41);
            variable42 = variable41.internal;
            variable41 = variable42.resolveSemanticColor;
            quebec = limora[quebec];
            quebec = variable36.bind(verify)(quebec);
            quebec = quebec.colors;
            quebec = quebec.TEXT_POSITIVE;
            quebec = variable41.bind(variable42)(variable38, quebec);
            quebec = variable39.bind(variable40)(quebec);
            entity['headerIconColor'] = quebec;
            quebec = limora[offset];
            quebec = variable37.bind(verify)(quebec);
            variable40 = quebec.intl;
            variable39 = variable40.string;
            quebec = limora[offset];
            quebec = variable37.bind(verify)(quebec);
            quebec = quebec.t;
            quebec = quebec.QV/8u7;
            quebec = variable39.bind(variable40)(quebec);
            entity['body'] = quebec;
            quebec = false;
            entity['shouldShowActions'] = quebec;
            quebec = 18;
            quebec = limora[quebec];
            variable36 = variable36.bind(verify)(quebec);
            quebec = kiloes.timestamp;
            variable36 = variable36.bind(verify)(quebec);
            quebec = variable36.fromNow;
            quebec = quebec.bind(variable36)();
            entity['subtitleRight'] = quebec;
            quebec = limora[offset];
            quebec = variable37.bind(verify)(quebec);
            variable36 = quebec.intl;
            quebec = variable36.string;
            limora = limora[offset];
            limora = variable37.bind(verify)(limora);
            limora = limora.t;
            limora = limora.qlFrXV;
            limora = quebec.bind(variable36)(limora);
            entity['subtitleLeft'] = limora;
            status = status.uri;
            entity['enabledByAvatarURL'] = status;
            entity['enabledByUsername'] = romeon;
            status = oscard == update;
            romeon = undefined;
            if(status) { _fun00002_ip = 1605; continue _fun00001 }
 1599:
            romeon = update.colorString;
 1605:
            status = oscard != romeon;
            romeon = undefined;
            if(!status) { _fun00002_ip = 1629; continue _fun00001 }
 1614:
            status = _closure1_slot4;
            update = update.colorString;
            romeon = status.bind(verify)(update);
 1629:
            entity['enabledByColor'] = romeon;
            foxtra = '';
            michal = option;
            yankee = entity;
            _fun00002_ip = 2855; continue _fun00001;
 1651:
            entity = {};
            romeon = zuuluu.raidDatetime;
            update = oscard != romeon;
            romeon = undefined;
            if(!update) { _fun00002_ip = 1709; continue _fun00001 }
 1668:
            status = _closure1_slot1;
            limora = _closure1_slot2;
            update = 18;
            update = limora[update];
            status = status.bind(verify)(update);
            update = zuuluu.raidDatetime;
            status = status.bind(verify)(update);
            update = status.fromNow;
            romeon = update.bind(status)();
 1709:
            entity['subtitleLeft'] = romeon;
            limora = _closure1_slot0;
            romeon = _closure1_slot2;
            update = romeon[offset];
            update = limora.bind(verify)(update);
            quebec = update.intl;
            status = quebec.string;
            update = romeon[offset];
            update = limora.bind(verify)(update);
            update = update.t;
            update = update.C2uIXF;
            update = status.bind(quebec)(update);
            entity['header'] = update;
            status = 13;
            update = romeon[status];
            variable37 = limora.bind(verify)(update);
            variable36 = variable37.processColorOrThrow;
            variable39 = _closure1_slot1;
            update = 12;
            quebec = romeon[update];
            quebec = variable39.bind(verify)(quebec);
            variable41 = quebec.internal;
            variable40 = variable41.resolveSemanticColor;
            quebec = romeon[update];
            quebec = variable39.bind(verify)(quebec);
            quebec = quebec.colors;
            quebec = quebec.TEXT_DANGER;
            quebec = variable40.bind(variable41)(variable38, quebec);
            quebec = variable36.bind(variable37)(quebec);
            entity['headerColor'] = quebec;
            variable37 = _closure1_slot5;
            variable36 = variable37.resolveAssetSource;
            quebec = 21;
            quebec = romeon[quebec];
            variable41 = limora.bind(verify)(quebec);
            variable40 = variable41.makeSource;
            quebec = 23;
            quebec = romeon[quebec];
            quebec = variable39.bind(verify)(quebec);
            quebec = variable40.bind(variable41)(quebec);
            quebec = variable36.bind(variable37)(quebec);
            quebec = quebec.uri;
            entity['headerIconURL'] = quebec;
            status = romeon[status];
            quebec = limora.bind(verify)(status);
            status = quebec.processColorOrThrow;
            variable36 = romeon[update];
            variable36 = variable39.bind(verify)(variable36);
            variable37 = variable36.internal;
            variable36 = variable37.resolveSemanticColor;
            update = romeon[update];
            update = variable39.bind(verify)(update);
            update = update.colors;
            update = update.TEXT_DANGER;
            update = variable36.bind(variable37)(variable38, update);
            update = status.bind(quebec)(update);
            entity['headerIconColor'] = update;
            update = romeon[offset];
            update = limora.bind(verify)(update);
            status = update.intl;
            update = status.string;
            romeon = romeon[offset];
            romeon = limora.bind(verify)(romeon);
            romeon = romeon.t;
            romeon = romeon.SWIWER;
            romeon = update.bind(status)(romeon);
            entity['body'] = romeon;
            romeon = false;
            entity['shouldShowActions'] = romeon;
            foxtra = '';
            michal = option;
            yankee = entity;
            _fun00002_ip = 2855; continue _fun00001;
 2058:
            entity = zuuluu.raidDatetime;
            entity = oscard != entity;
            option = undefined;
            if(!entity) { _fun00002_ip = 2114; continue _fun00001 }
 2073:
            romeon = _closure1_slot1;
            update = _closure1_slot2;
            entity = 18;
            entity = update[entity];
            romeon = romeon.bind(verify)(entity);
            entity = zuuluu.raidDatetime;
            romeon = romeon.bind(verify)(entity);
            entity = romeon.fromNow;
            option = entity.bind(romeon)();
 2114:
            romeon = zuuluu.raidType;
            update = _closure1_slot0;
            status = _closure1_slot2;
            entity = 19;
            entity = status[entity];
            entity = update.bind(verify)(entity);
            entity = entity.AutomodRaidAlertTypes;
            entity = entity.DM_RAID;
            romeon = romeon === entity;
            entity = zuuluu.raidDatetime;
            entity = oscard != entity;
            variable36 = '';
            if(!entity) { _fun00002_ip = 2265; continue _fun00001 }
 2173:
            entity = global;
            status = entity.Date;
            variable47 = zuuluu.raidDatetime;
            update = status.prototype;
            update = Object.create(update, {constructor: {value: status}});
            variable48 = update;
            entity = new variable48[status](variable47, variable46);
            limora = entity instanceof Object ? entity : update;
            status = limora.toLocaleString;
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
            variable36 = status.bind(limora)(update, entity);
 2265:
            update = _closure1_slot0;
            entity = _closure1_slot2;
            status = entity[offset];
            status = update.bind(verify)(status);
            quebec = status.intl;
            limora = quebec.formatToPlainString;
            entity = entity[offset];
            entity = update.bind(verify)(entity);
            entity = entity.t;
            if(romeon) { _fun00002_ip = 2340; continue _fun00001 }
 2309:
            status = entity.4ylIio;
            update = {};
            variable37 = zuuluu.joinAttempts;
            update['joinCount'] = variable37;
            update = limora.bind(quebec)(status, update);
            _fun00002_ip = 2367; continue _fun00001;
 2340:
            status = entity.5C8Mh4;
            entity = {};
            variable37 = zuuluu.dmsSent;
            entity['dmsSent'] = variable37;
            update = limora.bind(quebec)(status, entity);
 2367:
            entity = {};
            entity['subtitleLeft'] = update;
            entity['severity'] = update;
            entity['subtitleRight'] = option;
            entity['startTime'] = option;
            update = _closure1_slot0;
            option = _closure1_slot2;
            status = option[offset];
            status = update.bind(verify)(status);
            limora = status.intl;
            status = limora.string;
            option = option[offset];
            option = update.bind(verify)(option);
            update = option.t;
            if(romeon) { _fun00002_ip = 2448; continue _fun00001 }
 2433:
            option = update.xMwcwc;
            option = status.bind(limora)(option);
            _fun00002_ip = 2461; continue _fun00001;
 2448:
            update = update.8+lHUV;
            option = status.bind(limora)(update);
 2461:
            entity['header'] = option;
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            status = 13;
            option = variable40[status];
            quebec = variable37.bind(verify)(option);
            limora = quebec.processColorOrThrow;
            variable39 = _closure1_slot1;
            option = 12;
            update = variable40[option];
            update = variable39.bind(verify)(update);
            variable42 = update.internal;
            variable41 = variable42.resolveSemanticColor;
            update = variable40[option];
            update = variable39.bind(verify)(update);
            update = update.colors;
            update = update.TEXT_DANGER;
            update = variable41.bind(variable42)(variable38, update);
            update = limora.bind(quebec)(update);
            entity['headerColor'] = update;
            limora = _closure1_slot5;
            update = limora.resolveAssetSource;
            quebec = 21;
            quebec = variable40[quebec];
            variable37 = variable37.bind(verify)(quebec);
            quebec = variable37.makeSource;
            variable41 = _closure1_slot2;
            if(romeon) { _fun00002_ip = 2599; continue _fun00001 }
 2590:
            romeon = 23;
            romeon = variable41[romeon];
            _fun00002_ip = 2606; continue _fun00001;
 2599:
            variable40 = 22;
            romeon = variable41[variable40];
 2606:
            romeon = variable39.bind(verify)(romeon);
            romeon = quebec.bind(variable37)(romeon);
            romeon = update.bind(limora)(romeon);
            romeon = romeon.uri;
            entity['headerIconURL'] = romeon;
            update = _closure1_slot0;
            romeon = _closure1_slot2;
            status = romeon[status];
            limora = update.bind(verify)(status);
            status = limora.processColorOrThrow;
            variable39 = _closure1_slot1;
            quebec = romeon[option];
            quebec = variable39.bind(verify)(quebec);
            variable37 = quebec.internal;
            quebec = variable37.resolveSemanticColor;
            option = romeon[option];
            option = variable39.bind(verify)(option);
            option = option.colors;
            option = option.TEXT_DANGER;
            option = quebec.bind(variable37)(variable38, option);
            option = status.bind(limora)(option);
            entity['headerIconColor'] = option;
            option = romeon[offset];
            option = update.bind(verify)(option);
            quebec = option.intl;
            limora = quebec.formatToPlainString;
            option = romeon[offset];
            option = update.bind(verify)(option);
            option = option.t;
            status = option.4QIIZm;
            option = {};
            option['dateTime'] = variable36;
            option = limora.bind(quebec)(status, option);
            entity['body'] = option;
            option = true;
            entity['shouldShowActions'] = option;
            option = romeon[offset];
            option = update.bind(verify)(option);
            limora = option.intl;
            status = limora.string;
            option = romeon[offset];
            option = update.bind(verify)(option);
            option = option.t;
            option = option.ufawc3;
            foxtra = status.bind(limora)(option);
            romeon = romeon[output];
            update = update.bind(verify)(romeon);
            romeon = update.getRaidAlertResolveCTAText;
            zuuluu = zuuluu.resolvedReason;
            michal = romeon.bind(update)(zuuluu);
            yankee = entity;
 2855:
            entity = oscard != config;
            option = null;
            if(!entity) { _fun00002_ip = 2973; continue _fun00001 }
 2864:
            zuuluu = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 24;
            entity = romeon[entity];
            romeon = zuuluu.bind(verify)(entity);
            zuuluu = romeon.ensureAvatarSource;
            if(!(oscard != whisks)) { _fun00002_ip = 2898; continue _fun00001 }
 2894:
            if(!(oscard == config)) { _fun00002_ip = 2911; continue _fun00001 }
 2898:
            entity = sequen.getAvatarSource;
            entity = entity.bind(sequen)(verify);
            _fun00002_ip = 2963; continue _fun00001;
 2911:
            status = _closure1_slot0;
            limora = _closure1_slot2;
            update = 21;
            update = limora[update];
            limora = status.bind(verify)(update);
            status = limora.getGuildMemberAvatarSource;
            update = {};
            quebec = sequen.id;
            update['userId'] = quebec;
            update['guildMemberAvatar'] = whisks;
            update['guildId'] = config;
            entity = status.bind(limora)(update, sequen);
 2963:
            entity = zuuluu.bind(romeon)(entity);
            option = entity.uri;
 2973:
            entity = oscard != config;
            update = null;
            if(!entity) { _fun00002_ip = 3003; continue _fun00001 }
 2982:
            romeon = _closure1_slot9;
            zuuluu = romeon.getMember;
            entity = sequen.id;
            update = zuuluu.bind(romeon)(config, entity);
 3003:
            entity = oscard != sierra;
            romeon = undefined;
            if(!entity) { _fun00002_ip = 3070; continue _fun00001 }
 3012:
            entity = oscard != config;
            romeon = undefined;
            if(!entity) { _fun00002_ip = 3070; continue _fun00001 }
 3021:
            zuuluu = _closure1_slot0;
            status = _closure1_slot2;
            entity = 26;
            entity = status[entity];
            status = zuuluu.bind(verify)(entity);
            zuuluu = status.getRoleIcon;
            entity = {};
            entity['guildId'] = config;
            entity['roleId'] = sierra;
            sierra = 18;
            entity['size'] = sierra;
            romeon = zuuluu.bind(status)(entity);
 3070:
            entity = {};
            status = _closure1_slot1;
            variable36 = _closure1_slot2;
            zuuluu = 27;
            zuuluu = variable36[zuuluu];
            zuuluu = status.bind(verify)(zuuluu);
            variable46 = zuuluu.bind(verify)(vacuum);
            variable47 = entity;
            zuuluu = copyDataProperties(variable47, variable46);
            zuuluu = 'roleIcon';
            entity[zuuluu] = romeon;
            romeon = sequen.id;
            zuuluu = 'authorId';
            entity[zuuluu] = romeon;
            quebec = _closure1_slot0;
            zuuluu = variable36[offset];
            zuuluu = quebec.bind(verify)(zuuluu);
            vacuum = zuuluu.intl;
            romeon = vacuum.string;
            zuuluu = variable36[offset];
            zuuluu = quebec.bind(verify)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.hG1StL;
            zuuluu = romeon.bind(vacuum)(zuuluu);
            vacuum = 'username';
            entity[vacuum] = zuuluu;
            zuuluu = 24;
            romeon = variable36[zuuluu];
            sierra = quebec.bind(verify)(romeon);
            status = sierra.ensureAvatarSource;
            romeon = 21;
            limora = variable36[romeon];
            whisks = quebec.bind(verify)(limora);
            limora = whisks.makeSource;
            zuuluu = variable36[zuuluu];
            quebec = quebec.bind(verify)(zuuluu);
            zuuluu = quebec.getAutomodAvatarURL;
            zuuluu = zuuluu.bind(quebec)();
            zuuluu = limora.bind(whisks)(zuuluu);
            zuuluu = status.bind(sierra)(zuuluu);
            status = zuuluu.uri;
            zuuluu = 'avatarURL';
            entity[zuuluu] = status;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(verify)(source);
            sierra = oscard != zuuluu;
            status = null;
            if(!sierra) { _fun00002_ip = 3284; continue _fun00001 }
 3281:
            status = zuuluu;
 3284:
            zuuluu = 'colorString';
            entity[zuuluu] = status;
            zuuluu = {};
            zuuluu['headerText'] = foxtra;
            limora = _closure1_slot0;
            foxtra = _closure1_slot2;
            status = foxtra[offset];
            status = limora.bind(verify)(status);
            sierra = status.intl;
            status = sierra.string;
            foxtra = foxtra[offset];
            foxtra = limora.bind(verify)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.70CJbW;
            foxtra = status.bind(sierra)(foxtra);
            zuuluu['headerBadgeText'] = foxtra;
            status = oscard != equals;
            foxtra = '';
            if(!status) { _fun00002_ip = 3434; continue _fun00001 }
 3372:
            sierra = _closure1_slot0;
            status = _closure1_slot2;
            limora = status[offset];
            limora = sierra.bind(verify)(limora);
            whisks = limora.intl;
            limora = whisks.formatToPlainString;
            status = status[offset];
            status = sierra.bind(verify)(status);
            status = status.t;
            sierra = status.SYIUTU;
            status = {};
            status['keyword'] = equals;
            foxtra = limora.bind(whisks)(sierra, status);
 3434:
            zuuluu['keywordDisplayText'] = foxtra;
            foxtra = {};
            if(!(oscard == target)) { _fun00002_ip = 3452; continue _fun00001 }
 3447:
            target = kiloes.id;
 3452:
            foxtra['id'] = target;
            status = oscard == papara;
            target = undefined;
            if(status) { _fun00002_ip = 3470; continue _fun00001 }
 3465:
            target = papara.id;
 3470:
            if(!(oscard != target)) { _fun00002_ip = 3477; continue _fun00001 }
 3474:
            record = target;
 3477:
            if(!(oscard == record)) { _fun00002_ip = 3486; continue _fun00001 }
 3481:
            record = kiloes.channel_id;
 3486:
            foxtra['channelId'] = record;
            foxtra['guildId'] = config;
            sequen = sequen.id;
            foxtra['userId'] = sequen;
            sequen = undefined;
            if(!cntext) { _fun00002_ip = 3546; continue _fun00001 }
 3508:
            config = oscard == sizing;
            sequen = undefined;
            if(!config) { _fun00002_ip = 3546; continue _fun00001 }
 3517:
            record = _closure1_slot0;
            config = _closure1_slot2;
            config = config[output];
            record = record.bind(verify)(config);
            config = record.getChannelName;
            sequen = config.bind(record)(papara, cntext);
 3546:
            foxtra['channelName'] = sequen;
            foxtra['username'] = echoed;
            echoed = result;
            if(!(vacuum === ctrled)) { _fun00002_ip = 3581; continue _fun00001 }
 3562:
            vacuum = _closure1_slot4;
            vacuum = vacuum.bind(verify)(source);
            echoed = result;
            if(!(oscard != vacuum)) { _fun00002_ip = 3581; continue _fun00001 }
 3578:
            echoed = vacuum;
 3581:
            foxtra['usernameColor'] = echoed;
            echoed = _closure1_slot4;
            vacuum = echoed.bind(verify)(source);
            sequen = oscard != vacuum;
            echoed = null;
            if(!sequen) { _fun00002_ip = 3607; continue _fun00001 }
 3604:
            echoed = vacuum;
 3607:
            foxtra['roleColor'] = echoed;
            echoed = 'dot';
            echoed = echoed === ctrled;
            if(!echoed) { _fun00002_ip = 3627; continue _fun00001 }
 3623:
            echoed = oscard != source;
 3627:
            foxtra['shouldShowRoleDot'] = echoed;
            echoed = _closure1_slot4;
            echoed = echoed.bind(verify)(source);
            if(!(oscard != echoed)) { _fun00002_ip = 3648; continue _fun00001 }
 3645:
            result = echoed;
 3648:
            foxtra['colorString'] = result;
            foxtra['avatarURL'] = option;
            foxtra['content'] = golfie;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            result = 28;
            result = golfie[result];
            echoed = option.bind(verify)(result);
            result = echoed.isMemberCommunicationDisabled;
            result = result.bind(echoed)(update);
            foxtra['communicationDisabled'] = result;
            result = 29;
            result = golfie[result];
            echoed = option.bind(verify)(result);
            result = echoed.accessibilityLabelCalendarFormat;
            kiloes = kiloes.timestamp;
            kiloes = result.bind(echoed)(kiloes);
            foxtra['timestamp'] = kiloes;
            zuuluu['message'] = foxtra;
            zuuluu['notification'] = yankee;
            yankee = golfie[offset];
            yankee = option.bind(verify)(yankee);
            foxtra = yankee.intl;
            yankee = foxtra.formatToPlainString;
            golfie = golfie[offset];
            golfie = option.bind(verify)(golfie);
            golfie = golfie.t;
            option = golfie.ZoOyKC;
            golfie = {};
            golfie['ruleName'] = backup;
            golfie = yankee.bind(foxtra)(option, golfie);
            zuuluu['ruleDisplayText'] = golfie;
            golfie = oscard != sizing;
            oscard = null;
            if(!golfie) { _fun00002_ip = 3893; continue _fun00001 }
 3811:
            kiloes = _closure1_slot0;
            backup = _closure1_slot2;
            golfie = backup[offset];
            golfie = kiloes.bind(verify)(golfie);
            foxtra = golfie.intl;
            yankee = foxtra.formatToPlainString;
            golfie = backup[offset];
            golfie = kiloes.bind(verify)(golfie);
            golfie = golfie.t;
            option = golfie.26bB2N;
            golfie = {};
            backup = backup[output];
            kiloes = kiloes.bind(verify)(backup);
            backup = kiloes.getQuarantineReasonString;
            backup = backup.bind(kiloes)(sizing);
            golfie['reason'] = backup;
            oscard = yankee.bind(foxtra)(option, golfie);
 3893:
            zuuluu['reasonDisplayText'] = oscard;
            option = _closure1_slot5;
            golfie = option.resolveAssetSource;
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[romeon];
            romeon = yankee.bind(verify)(oscard);
            yankee = romeon.makeSource;
            foxtra = _closure1_slot1;
            kiloes = _closure1_slot2;
            if(tangon) { _fun00002_ip = 3953; continue _fun00001 }
 3944:
            oscard = 31;
            oscard = kiloes[oscard];
            _fun00002_ip = 3960; continue _fun00001;
 3953:
            backup = 30;
            oscard = kiloes[backup];
 3960:
            oscard = foxtra.bind(verify)(oscard);
            oscard = yankee.bind(romeon)(oscard);
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.uri;
            zuuluu['actionsIconURL'] = oscard;
            option = _closure1_slot0;
            report = _closure1_slot2;
            oscard = report[offset];
            oscard = option.bind(verify)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = report[offset];
            report = option.bind(verify)(report);
            report = report.t;
            if(tangon) { _fun00002_ip = 4044; continue _fun00001 }
 4031:
            tangon = report.DEoVWV;
            tangon = oscard.bind(golfie)(tangon);
            _fun00002_ip = 4057; continue _fun00001;
 4044:
            report = report.UgXhdn;
            tangon = oscard.bind(golfie)(report);
 4057:
            zuuluu['actionsText'] = tangon;
            zuuluu['feedbackText'] = michal;
            michal = 'autoModerationContext';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot15 = michal;
    entity = function(argFoo) { // Original name: AutoModerationActionSystemMessageInner
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            yankee = entity.row;
            backup = entity.message;
            var _closure2_slot0 = backup;
            report = undefined;
            var _closure2_slot4 = report;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 32;
            entity = oscard[zuuluu];
            romeon = tangon.bind(report)(entity);
            offset = romeon.useStateFromStores;
            entity = _closure1_slot6;
            verify = new Array(1);
            verify[0] = entity;
            golfie = function() {
                entity = _closure1_slot6;
                entity = entity.roleStyle;
                return entity;
            };
            entity = new Array(0);
            foxtra = offset.bind(romeon)(verify, golfie, entity);
            var _closure2_slot1 = foxtra;
            entity = oscard[zuuluu];
            offset = tangon.bind(report)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot7;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                entity = _closure1_slot7;
                entity = entity.theme;
                return entity;
            };
            romeon = verify.bind(offset)(golfie, entity);
            var _closure2_slot2 = romeon;
            entity = backup.getChannelId;
            entity = entity.bind(backup)();
            var _closure2_slot3 = entity;
            zuuluu = oscard[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot8;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getChannel;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = oscard.bind(golfie)(tangon, entity, zuuluu);
            entity = null;
            zuuluu = entity == tangon;
            sizing = undefined;
            if(zuuluu) { _fun00004_ip = 214; continue _fun00003 }
 204:
            zuuluu = tangon.getGuildId;
            sizing = zuuluu.bind(tangon)();
 214:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 15;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useNullableMessageAuthor;
            zuuluu = zuuluu.bind(tangon)(backup);
            tangon = zuuluu.colorString;
            kiloes = zuuluu.iconRoleId;
            verify = backup.author;
            zuuluu = entity != kiloes;
            offset = undefined;
            if(!zuuluu) { _fun00004_ip = 330; continue _fun00003 }
 272:
            zuuluu = entity != sizing;
            offset = undefined;
            if(!zuuluu) { _fun00004_ip = 330; continue _fun00003 }
 281:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 26;
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(report)(zuuluu);
            oscard = golfie.getRoleIcon;
            zuuluu = {};
            zuuluu['guildId'] = sizing;
            zuuluu['roleId'] = kiloes;
            kiloes = 18;
            zuuluu['size'] = kiloes;
            offset = oscard.bind(golfie)(zuuluu);
 330:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(tangon);
            tangon = entity != zuuluu;
            golfie = null;
            if(!tangon) { _fun00004_ip = 351; continue _fun00003 }
 348:
            golfie = zuuluu;
 351:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 33;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.AnimateEmoji;
            zuuluu = tangon.useSetting;
            kiloes = zuuluu.bind(tangon)();
            _closure2_slot4 = kiloes;
            oscard = _closure1_slot3;
            tangon = oscard.useMemo;
            zuuluu = new Array(4);
            zuuluu[0] = kiloes;
            zuuluu[1] = backup;
            zuuluu[2] = foxtra;
            zuuluu[3] = romeon;
            michal = function() {
                zuuluu = _closure1_slot15;
                michal = {};
                golfie = _closure2_slot0;
                michal['message'] = golfie;
                tangon = _closure2_slot2;
                michal['theme'] = tangon;
                tangon = _closure2_slot1;
                michal['roleStyle'] = tangon;
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 34;
                tangon = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(tangon);
                tangon = {};
                golfie = golfie.reactions;
                tangon['reactions'] = golfie;
                oscard = _closure2_slot4;
                tangon['animateEmoji'] = oscard;
                tangon = report.bind(entity)(tangon);
                michal['reactions'] = tangon;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = tangon.bind(oscard)(michal, zuuluu);
            if(!(entity != michal)) { _fun00004_ip = 640; continue _fun00003 }
 440:
            oscard = michal.autoModerationContext;
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot1;
            backup = _closure1_slot2;
            michal = 35;
            michal = backup[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['row'] = yankee;
            michal['roleIcon'] = offset;
            verify = verify.id;
            michal['authorId'] = verify;
            foxtra = _closure1_slot0;
            option = 16;
            verify = backup[option];
            verify = foxtra.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = backup[option];
            option = foxtra.bind(report)(option);
            option = option.t;
            option = option.hG1StL;
            option = verify.bind(offset)(option);
            michal['username'] = option;
            option = 24;
            verify = backup[option];
            offset = foxtra.bind(report)(verify);
            verify = offset.ensureAvatarSource;
            yankee = 21;
            yankee = backup[yankee];
            romeon = foxtra.bind(report)(yankee);
            yankee = romeon.makeSource;
            option = backup[option];
            foxtra = foxtra.bind(report)(option);
            option = foxtra.getAutomodAvatarURL;
            option = option.bind(foxtra)();
            option = yankee.bind(romeon)(option);
            option = verify.bind(offset)(option);
            option = option.uri;
            michal['avatarURL'] = option;
            michal['colorString'] = golfie;
            michal['autoModerationContext'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
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
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    verify = report.processColor;
    var _closure1_slot4 = verify;
    report = report.Image;
    var _closure1_slot5 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot12 = report;
    report = 9;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot13 = report;
    report = 10;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.memoize;
    report = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 11;
            entity = tangon[entity];
            report = undefined;
            tangon = zuuluu.bind(report)(entity);
            zuuluu = tangon.isThemeDark;
            entity = argFoo;
            zuuluu = zuuluu.bind(tangon)(entity);
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 12;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.unsafe_rawColors;
            if(zuuluu) { _fun00006_ip = 75; continue _fun00005 }
 67:
            tangon = entity.PRIMARY_630;
            _fun00006_ip = 81; continue _fun00005;
 75:
            tangon = entity.WHITE_500;
 81:
            entity = {};
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 13;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.processColorOrThrow;
            michal = michal.bind(zuuluu)(tangon);
            entity['defaultUsernameColor'] = michal;
            return entity;
        }
    };
    report = option.bind(verify)(report);
    var _closure1_slot14 = report;
    report = 36;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: AutoModerationActionSystemMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            golfie = entity.row;
            oscard = golfie.message;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 14;
            entity = tangon[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isAutomodMessageRecord;
            zuuluu = entity.bind(zuuluu)(oscard);
            entity = null;
            if(!zuuluu) { _fun00008_ip = 80; continue _fun00007 }
 55:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot16;
            michal = {};
            michal['row'] = golfie;
            michal['message'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 80:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['createAutoModerationActionSystemMessage'] = michal;
    return entity;
})();