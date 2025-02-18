// app/modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getMemberOrUserAvatar
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.user;
            verify = entity.guildMemberAvatar;
            option = entity.guildId;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            entity = zuuluu[entity];
            oscard = undefined;
            zuuluu = michal.bind(oscard)(entity);
            michal = zuuluu.ensureAvatarSource;
            entity = null;
            if(!(entity != verify)) { _fun00002_ip = 60; continue _fun00001 }
 56:
            if(!(entity == option)) { _fun00002_ip = 73; continue _fun00001 }
 60:
            entity = golfie.getAvatarSource;
            entity = entity.bind(golfie)(oscard);
            _fun00002_ip = 125; continue _fun00001;
 73:
            report = _closure1_slot1;
            offset = _closure1_slot2;
            tangon = 10;
            tangon = offset[tangon];
            oscard = report.bind(oscard)(tangon);
            report = oscard.getGuildMemberAvatarSource;
            tangon = {};
            offset = golfie.id;
            tangon['userId'] = offset;
            tangon['guildMemberAvatar'] = verify;
            tangon['guildId'] = option;
            entity = report.bind(oscard)(tangon, golfie);
 125:
            entity = michal.bind(zuuluu)(entity);
            entity = entity.uri;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.processColor;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageTypes;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.COMMAND_SENTINEL;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot11 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.makeKeyedDataComponent;
    tangon = 'executedCommand';
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: ExecutedCommand
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.message;
            var _closure2_slot0 = michal;
            yankee = zuuluu.interaction;
            var _closure2_slot1 = yankee;
            tangon = undefined;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            offset = 20;
            oscard = zuuluu[offset];
            romeon = report.bind(tangon)(oscard);
            verify = romeon.useStateFromStores;
            oscard = _closure1_slot5;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                entity = _closure1_slot5;
                entity = entity.roleStyle;
                return entity;
            };
            backup = verify.bind(romeon)(option, oscard);
            oscard = 21;
            oscard = zuuluu[oscard];
            option = report.bind(tangon)(oscard);
            oscard = option.useMessageRendererTheme;
            oscard = oscard.bind(option)();
            var _closure2_slot2 = oscard;
            romeon = _closure1_slot3;
            verify = romeon.useMemo;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 22;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(entity);
                entity = entity.defaultUsernameColor;
                return entity;
            };
            verify = verify.bind(romeon)(oscard, option);
            oscard = michal.getChannelId;
            source = oscard.bind(michal)();
            var _closure2_slot3 = source;
            oscard = zuuluu[offset];
            foxtra = report.bind(tangon)(oscard);
            romeon = foxtra.useStateFromStores;
            oscard = _closure1_slot7;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            kiloes = romeon.bind(foxtra)(option, oscard);
            zuuluu = zuuluu[offset];
            option = report.bind(tangon)(zuuluu);
            oscard = option.useStateFromStores;
            zuuluu = _closure1_slot8;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getUser;
                entity = _closure2_slot1;
                entity = entity.user;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = oscard.bind(option)(report, zuuluu);
            option = null;
            if(!(option == romeon)) { _fun00004_ip = 270; continue _fun00003 }
 265:
            romeon = yankee.user;
 270:
            report = _closure1_slot0;
            output = _closure1_slot2;
            sizing = 11;
            zuuluu = output[sizing];
            oscard = report.bind(tangon)(zuuluu);
            zuuluu = oscard.useNullableUserAuthor;
            zuuluu = zuuluu.bind(oscard)(romeon, kiloes);
            ctrled = zuuluu.nick;
            _closure2_slot4 = ctrled;
            foxtra = zuuluu.colorString;
            oscard = zuuluu.guildMemberAvatar;
            zuuluu = 14;
            zuuluu = output[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.getInitialInteractionMetadata;
            zuuluu = zuuluu.bind(report)(michal);
            report = option == zuuluu;
            output = undefined;
            if(report) { _fun00004_ip = 361; continue _fun00003 }
 356:
            output = zuuluu.type;
 361:
            result = _closure1_slot0;
            echoed = _closure1_slot2;
            report = 15;
            report = echoed[report];
            report = result.bind(tangon)(report);
            report = report.InteractionTypes;
            report = report.APPLICATION_COMMAND;
            result = undefined;
            if(!(output === report)) { _fun00004_ip = 405; continue _fun00003 }
 399:
            result = zuuluu.target_user;
 405:
            _closure2_slot5 = result;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[offset];
            output = report.bind(tangon)(zuuluu);
            offset = output.useStateFromStores;
            zuuluu = _closure1_slot8;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00006_ip = 43; continue _fun00005 }
 16:
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getUser;
                    michal = _closure2_slot5;
                    michal = michal.id;
                    entity = zuuluu.bind(tangon)(michal);
 43:
                    return entity;
                }
            };
            offset = offset.bind(output)(report, zuuluu);
            if(!(option == offset)) { _fun00004_ip = 497; continue _fun00003 }
 458:
            report = option != result;
            zuuluu = null;
            if(!report) { _fun00004_ip = 494; continue _fun00003 }
 467:
            report = _closure1_slot6;
            output = report.prototype;
            output = Object.create(output, {constructor: {value: report}});
            record = output;
            config = result;
            report = new record[report](config, sequen);
            zuuluu = report instanceof Object ? report : output;
 494:
            offset = zuuluu;
 497:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[sizing];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.useNullableUserAuthor;
            zuuluu = zuuluu.bind(report)(offset, kiloes);
            offset = zuuluu.colorString;
            report = _closure1_slot13;
            zuuluu = {};
            zuuluu['user'] = romeon;
            zuuluu['guildMemberAvatar'] = oscard;
            romeon = option == kiloes;
            oscard = undefined;
            if(romeon) { _fun00004_ip = 566; continue _fun00003 }
 556:
            romeon = kiloes.getGuildId;
            oscard = romeon.bind(kiloes)();
 566:
            zuuluu['guildId'] = oscard;
            oscard = report.bind(tangon)(zuuluu);
            report = michal.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.CHAT_INPUT_COMMAND;
            echoed = report === zuuluu;
            if(echoed) { _fun00004_ip = 616; continue _fun00003 }
 597:
            report = michal.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.INTERACTION_PREMIUM_UPSELL;
            echoed = report === zuuluu;
 616:
            _closure2_slot6 = echoed;
            report = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 12;
            zuuluu = romeon[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.isPrimaryEntryPointCommandMessage;
            romeon = zuuluu.bind(report)(michal);
            _closure2_slot7 = romeon;
            zuuluu = michal.activityInstance;
            update = option != zuuluu;
            if(!update) { _fun00004_ip = 678; continue _fun00003 }
 668:
            zuuluu = michal.activityInstance;
            update = tangon !== zuuluu;
 678:
            _closure2_slot8 = update;
            result = yankee.displayName;
            _closure2_slot9 = result;
            zuuluu = option != kiloes;
            if(!zuuluu) { _fun00004_ip = 710; continue _fun00003 }
 698:
            report = echoed;
            if(report) { _fun00004_ip = 707; continue _fun00003 }
 704:
            report = romeon;
 707:
            zuuluu = report;
 710:
            _closure2_slot10 = zuuluu;
            report = _closure1_slot3;
            output = report.useMemo;
            sizing = new Array(4);
            sizing[0] = source;
            vacuum = yankee.user;
            vacuum = vacuum.id;
            sizing[1] = vacuum;
            sizing[2] = zuuluu;
            sizing[3] = michal;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot10;
                    if(entity) { _fun00008_ip = 14; continue _fun00007 }
 10:
                    entity = {};
                    _fun00008_ip = 95; continue _fun00007;
 14:
                    michal = {};
                    tangon = 'bindTapCommandName';
                    michal['action'] = tangon;
                    tangon = _closure2_slot1;
                    tangon = tangon.user;
                    tangon = tangon.id;
                    michal['userId'] = tangon;
                    tangon = _closure2_slot0;
                    report = tangon.id;
                    michal['messageId'] = report;
                    report = tangon.author;
                    report = report.id;
                    michal['applicationUserId'] = report;
                    tangon = tangon.type;
                    michal['messageType'] = tangon;
                    zuuluu = _closure2_slot3;
                    michal['messageChannelId'] = zuuluu;
                    entity = michal;
 95:
                    return entity;
                }
            };
            output = output.bind(report)(zuuluu, sizing);
            _closure2_slot11 = output;
            sizing = report.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = update;
            vacuum = michal.author;
            vacuum = vacuum.id;
            zuuluu[1] = vacuum;
            michal = michal.channel_id;
            zuuluu[2] = michal;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot8;
                    if(entity) { _fun00010_ip = 14; continue _fun00009 }
 10:
                    entity = {};
                    _fun00010_ip = 59; continue _fun00009;
 14:
                    michal = {};
                    tangon = 'bindTapActivityText';
                    michal['action'] = tangon;
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.author;
                    tangon = tangon.id;
                    michal['applicationUserId'] = tangon;
                    zuuluu = zuuluu.channel_id;
                    michal['messageChannelId'] = zuuluu;
                    entity = michal;
 59:
                    return entity;
                }
            };
            sizing = sizing.bind(report)(michal, zuuluu);
            _closure2_slot12 = sizing;
            zuuluu = _closure1_slot0;
            vacuum = _closure1_slot2;
            michal = 16;
            michal = vacuum[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.isActivitiesInTextEnabled;
            kiloes = michal.bind(zuuluu)(kiloes);
            _closure2_slot13 = kiloes;
            zuuluu = report.useMemo;
            michal = new Array(10);
            michal[0] = ctrled;
            ctrled = yankee.user;
            ctrled = ctrled.id;
            michal[1] = ctrled;
            michal[2] = source;
            michal[3] = update;
            michal[4] = echoed;
            michal[5] = result;
            michal[6] = output;
            michal[7] = sizing;
            michal[8] = kiloes;
            michal[9] = romeon;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    oscard = {};
                    entity = _closure2_slot4;
                    oscard['username'] = entity;
                    entity = {};
                    michal = 'bindTapUsername';
                    entity['action'] = michal;
                    michal = _closure2_slot1;
                    michal = michal.user;
                    michal = michal.id;
                    entity['userId'] = michal;
                    michal = _closure2_slot3;
                    entity['messageChannelId'] = michal;
                    oscard['usernameOnClick'] = entity;
                    entity = _closure2_slot8;
                    if(!entity) { _fun00012_ip = 201; continue _fun00011 }
 67:
                    entity = _closure2_slot7;
                    if(entity) { _fun00012_ip = 201; continue _fun00011 }
 77:
                    entity = _closure2_slot13;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 17;
                    tangon = verify[michal];
                    zuuluu = undefined;
                    tangon = option.bind(zuuluu)(tangon);
                    golfie = tangon.intl;
                    tangon = golfie.formatToParts;
                    michal = verify[michal];
                    michal = option.bind(zuuluu)(michal);
                    michal = michal.t;
                    if(entity) { _fun00012_ip = 160; continue _fun00011 }
 134:
                    zuuluu = michal.k964Wl;
                    entity = {};
                    yankee = entity;
                    offset = oscard;
                    option = copyDataProperties(yankee, offset);
                    entity = tangon.bind(golfie)(zuuluu, entity);
                    _fun00012_ip = 199; continue _fun00011;
 160:
                    zuuluu = michal.R/mrBg;
                    michal = {};
                    yankee = michal;
                    offset = oscard;
                    option = copyDataProperties(yankee, offset);
                    verify = _closure2_slot12;
                    option = 'activityTextOnClick';
                    michal[option] = verify;
                    entity = tangon.bind(golfie)(zuuluu, michal);
 199:
                    return entity;
 201:
                    entity = _closure2_slot7;
                    if(entity) { _fun00012_ip = 257; continue _fun00011 }
 208:
                    entity = _closure2_slot6;
                    if(entity) { _fun00012_ip = 221; continue _fun00011 }
 215:
                    golfie = _closure2_slot9;
                    _fun00012_ip = 255; continue _fun00011;
 221:
                    tangon = _closure1_slot10;
                    zuuluu = _closure2_slot9;
                    entity = global;
                    entity = entity.HermesInternal;
                    michal = entity.concat;
                    entity = '';
                    golfie = michal.bind(entity)(tangon, zuuluu);
 255:
                    _fun00012_ip = 297; continue _fun00011;
 257:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.formatPrimaryEntryPointCommandName;
                    entity = _closure2_slot9;
                    golfie = michal.bind(zuuluu)(entity);
 297:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 17;
                    zuuluu = verify[entity];
                    michal = undefined;
                    zuuluu = option.bind(michal)(zuuluu);
                    tangon = zuuluu.intl;
                    zuuluu = tangon.formatToParts;
                    entity = verify[entity];
                    entity = option.bind(michal)(entity);
                    entity = entity.t;
                    michal = entity.SSrolp;
                    entity = {};
                    yankee = entity;
                    offset = oscard;
                    oscard = copyDataProperties(yankee, offset);
                    oscard = 'commandName';
                    entity[oscard] = golfie;
                    oscard = _closure2_slot11;
                    report = 'commandNameOnClick';
                    entity[report] = oscard;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            report = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot12;
            entity = {};
            yankee = yankee.user;
            yankee = yankee.id;
            entity['userId'] = yankee;
            yankee = 'username';
            yankee = yankee === backup;
            romeon = verify;
            if(!yankee) { _fun00004_ip = 982; continue _fun00003 }
 963:
            kiloes = _closure1_slot4;
            kiloes = kiloes.bind(tangon)(foxtra);
            romeon = verify;
            if(!(option != kiloes)) { _fun00004_ip = 982; continue _fun00003 }
 979:
            romeon = kiloes;
 982:
            entity['usernameColor'] = romeon;
            romeon = _closure1_slot4;
            kiloes = romeon.bind(tangon)(foxtra);
            sizing = option != kiloes;
            romeon = null;
            if(!sizing) { _fun00004_ip = 1008; continue _fun00003 }
 1005:
            romeon = kiloes;
 1008:
            entity['roleColor'] = romeon;
            romeon = 'dot';
            romeon = romeon === backup;
            if(!romeon) { _fun00004_ip = 1028; continue _fun00003 }
 1024:
            romeon = option != foxtra;
 1028:
            entity['shouldShowRoleDot'] = romeon;
            entity['avatarURL'] = oscard;
            oscard = verify;
            if(!yankee) { _fun00004_ip = 1063; continue _fun00003 }
 1044:
            golfie = _closure1_slot4;
            golfie = golfie.bind(tangon)(offset);
            oscard = verify;
            if(!(option != golfie)) { _fun00004_ip = 1063; continue _fun00003 }
 1060:
            oscard = golfie;
 1063:
            entity['targetUsernameColor'] = oscard;
            entity['content'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: createExecutedCommand
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            romeon = argFoo;
            update = argBar;
            yankee = argBaz;
            foxtra = argGra;
            entity = romeon.activityInstance;
            offset = null;
            entity = offset != entity;
            if(!entity) { _fun00014_ip = 39; continue _fun00013 }
 27:
            zuuluu = romeon.activityInstance;
            michal = undefined;
            entity = michal !== zuuluu;
 39:
            michal = romeon.interaction;
            if(!(offset != michal)) { _fun00014_ip = 71; continue _fun00013 }
 49:
            michal = romeon.interaction;
            zuuluu = michal.displayName;
            michal = '';
            if(!(michal === zuuluu)) { _fun00014_ip = 75; continue _fun00013 }
 68:
            if(entity) { _fun00014_ip = 75; continue _fun00013 }
 71:
            michal = undefined;
            return michal;
 75:
            michal = romeon.interaction;
            zuuluu = offset == michal;
            report = undefined;
            golfie = undefined;
            if(zuuluu) { _fun00014_ip = 97; continue _fun00013 }
 92:
            golfie = michal.user;
 97:
            oscard = _closure1_slot8;
            tangon = oscard.getUser;
            option = offset == golfie;
            zuuluu = undefined;
            if(option) { _fun00014_ip = 124; continue _fun00013 }
 119:
            zuuluu = golfie.id;
 124:
            backup = tangon.bind(oscard)(zuuluu);
            zuuluu = offset != backup;
            golfie = undefined;
            if(!zuuluu) { _fun00014_ip = 250; continue _fun00013 }
 138:
            verify = update;
            if(!(offset == verify)) { _fun00014_ip = 169; continue _fun00013 }
 145:
            oscard = _closure1_slot7;
            tangon = oscard.getChannel;
            zuuluu = romeon.getChannelId;
            zuuluu = zuuluu.bind(romeon)();
            verify = tangon.bind(oscard)(zuuluu);
 169:
            tangon = _closure1_slot13;
            zuuluu = {};
            zuuluu['user'] = backup;
            option = _closure1_slot0;
            kiloes = _closure1_slot2;
            oscard = 11;
            oscard = kiloes[oscard];
            option = option.bind(report)(oscard);
            oscard = option.getUserAuthor;
            oscard = oscard.bind(option)(backup, verify);
            oscard = oscard.guildMemberAvatar;
            zuuluu['guildMemberAvatar'] = oscard;
            option = offset == update;
            oscard = undefined;
            if(option) { _fun00014_ip = 241; continue _fun00013 }
 231:
            option = update.getGuildId;
            oscard = option.bind(update)();
 241:
            zuuluu['guildId'] = oscard;
            golfie = tangon.bind(report)(zuuluu);
 250:
            tangon = romeon.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.CHAT_INPUT_COMMAND;
            vacuum = tangon === zuuluu;
            if(vacuum) { _fun00014_ip = 291; continue _fun00013 }
 272:
            tangon = romeon.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.INTERACTION_PREMIUM_UPSELL;
            vacuum = tangon === zuuluu;
 291:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 12;
            zuuluu = option[zuuluu];
            tangon = oscard.bind(report)(zuuluu);
            zuuluu = tangon.isPrimaryEntryPointCommandMessage;
            echoed = zuuluu.bind(tangon)(romeon);
            source = 11;
            zuuluu = option[source];
            verify = oscard.bind(report)(zuuluu);
            tangon = verify.getUserAuthor;
            zuuluu = romeon.interaction;
            zuuluu = zuuluu.user;
            zuuluu = tangon.bind(verify)(zuuluu, update);
            verify = zuuluu.colorString;
            zuuluu = romeon.interaction;
            backup = zuuluu.displayName;
            tangon = _closure1_slot1;
            zuuluu = 13;
            kiloes = option[zuuluu];
            kiloes = tangon.bind(report)(kiloes);
            sizing = kiloes.internal;
            kiloes = sizing.resolveSemanticColor;
            zuuluu = option[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.colors;
            tangon = zuuluu.MENTION_BACKGROUND;
            zuuluu = argCor;
            tangon = kiloes.bind(sizing)(zuuluu, tangon);
            zuuluu = 14;
            zuuluu = option[zuuluu];
            oscard = oscard.bind(report)(zuuluu);
            zuuluu = oscard.getInitialInteractionMetadata;
            zuuluu = zuuluu.bind(oscard)(romeon);
            oscard = offset == zuuluu;
            kiloes = undefined;
            if(oscard) { _fun00014_ip = 468; continue _fun00013 }
 463:
            kiloes = zuuluu.type;
 468:
            option = _closure1_slot0;
            sizing = _closure1_slot2;
            oscard = 15;
            oscard = sizing[oscard];
            oscard = option.bind(report)(oscard);
            oscard = oscard.InteractionTypes;
            option = oscard.APPLICATION_COMMAND;
            oscard = null;
            if(!(kiloes === option)) { _fun00014_ip = 551; continue _fun00013 }
 506:
            option = zuuluu.target_user;
            option = offset != option;
            oscard = null;
            if(!option) { _fun00014_ip = 551; continue _fun00013 }
 521:
            kiloes = _closure1_slot6;
            papara = zuuluu.target_user;
            option = kiloes.prototype;
            option = Object.create(option, {constructor: {value: kiloes}});
            target = option;
            zuuluu = new target[kiloes](papara, cntext);
            oscard = zuuluu instanceof Object ? zuuluu : option;
 551:
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[source];
            option = option.bind(report)(zuuluu);
            zuuluu = option.getUserAuthor;
            zuuluu = zuuluu.bind(option)(oscard, update);
            kiloes = zuuluu.colorString;
            zuuluu = 'username';
            zuuluu = zuuluu === yankee;
            result = oscard;
            oscard = foxtra;
            if(!zuuluu) { _fun00014_ip = 622; continue _fun00013 }
 603:
            option = _closure1_slot4;
            option = option.bind(report)(kiloes);
            oscard = foxtra;
            if(!(offset != option)) { _fun00014_ip = 622; continue _fun00013 }
 619:
            oscard = option;
 622:
            option = foxtra;
            if(!zuuluu) { _fun00014_ip = 647; continue _fun00013 }
 628:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(report)(verify);
            option = foxtra;
            if(!(offset != zuuluu)) { _fun00014_ip = 647; continue _fun00013 }
 644:
            option = zuuluu;
 647:
            config = {};
            foxtra = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[source];
            kiloes = foxtra.bind(report)(zuuluu);
            foxtra = kiloes.getUserAuthor;
            zuuluu = romeon.interaction;
            zuuluu = zuuluu.user;
            zuuluu = foxtra.bind(kiloes)(zuuluu, update);
            zuuluu = zuuluu.nick;
            config['username'] = zuuluu;
            zuuluu = {};
            sizing = 'bindTapUsername';
            zuuluu['action'] = sizing;
            foxtra = romeon.interaction;
            foxtra = foxtra.user;
            foxtra = foxtra.id;
            zuuluu['userId'] = foxtra;
            foxtra = romeon.channel_id;
            zuuluu['messageChannelId'] = foxtra;
            config['usernameOnClick'] = zuuluu;
            if(!entity) { _fun00014_ip = 941; continue _fun00013 }
 752:
            if(echoed) { _fun00014_ip = 941; continue _fun00013 }
 758:
            zuuluu = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = 16;
            entity = foxtra[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isActivitiesInTextEnabled;
            zuuluu = entity.bind(zuuluu)(update);
            foxtra = _closure1_slot0;
            ctrled = _closure1_slot2;
            entity = 17;
            kiloes = ctrled[entity];
            kiloes = foxtra.bind(report)(kiloes);
            output = kiloes.intl;
            kiloes = output.formatToParts;
            entity = ctrled[entity];
            entity = foxtra.bind(report)(entity);
            entity = entity.t;
            if(zuuluu) { _fun00014_ip = 863; continue _fun00013 }
 837:
            foxtra = entity.k964Wl;
            zuuluu = {};
            papara = zuuluu;
            cntext = config;
            ctrled = copyDataProperties(papara, cntext);
            zuuluu = kiloes.bind(output)(foxtra, zuuluu);
            _fun00014_ip = 936; continue _fun00013;
 863:
            foxtra = entity.R/mrBg;
            entity = {};
            papara = entity;
            cntext = config;
            ctrled = copyDataProperties(papara, cntext);
            sequen = {};
            ctrled = 'bindTapActivityText';
            sequen['action'] = ctrled;
            ctrled = romeon.author;
            ctrled = ctrled.id;
            sequen['applicationUserId'] = ctrled;
            ctrled = romeon.channel_id;
            sequen['messageChannelId'] = ctrled;
            ctrled = 'activityTextOnClick';
            entity[ctrled] = sequen;
            zuuluu = kiloes.bind(output)(foxtra, entity);
 936:
            _fun00014_ip = 1336; continue _fun00013;
 941:
            sequen = backup;
            if(!echoed) { _fun00014_ip = 978; continue _fun00013 }
 947:
            foxtra = _closure1_slot0;
            kiloes = _closure1_slot2;
            entity = 18;
            entity = kiloes[entity];
            foxtra = foxtra.bind(report)(entity);
            entity = foxtra.formatPrimaryEntryPointCommandName;
            sequen = entity.bind(foxtra)(backup);
 978:
            backup = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = 17;
            kiloes = foxtra[entity];
            kiloes = backup.bind(report)(kiloes);
            output = kiloes.intl;
            kiloes = output.formatToParts;
            foxtra = foxtra[entity];
            foxtra = backup.bind(report)(foxtra);
            foxtra = foxtra.t;
            backup = foxtra.SSrolp;
            foxtra = {};
            papara = foxtra;
            cntext = config;
            ctrled = copyDataProperties(papara, cntext);
            ctrled = 'commandName';
            foxtra[ctrled] = sequen;
            if(!(offset != update)) { _fun00014_ip = 1060; continue _fun00013 }
 1054:
            if(vacuum) { _fun00014_ip = 1064; continue _fun00013 }
 1057:
            if(echoed) { _fun00014_ip = 1064; continue _fun00013 }
 1060:
            echoed = {};
            _fun00014_ip = 1144; continue _fun00013;
 1064:
            vacuum = {};
            record = 'bindTapCommandName';
            vacuum['action'] = record;
            record = romeon.interaction;
            record = record.user;
            record = record.id;
            vacuum['userId'] = record;
            record = romeon.id;
            vacuum['messageId'] = record;
            record = romeon.author;
            record = record.id;
            vacuum['applicationUserId'] = record;
            record = romeon.type;
            vacuum['messageType'] = record;
            record = romeon.channel_id;
            vacuum['messageChannelId'] = record;
            echoed = vacuum;
 1144:
            vacuum = 'commandNameOnClick';
            foxtra[vacuum] = echoed;
            zuuluu = kiloes.bind(output)(backup, foxtra);
            if(!(offset != result)) { _fun00014_ip = 1336; continue _fun00013 }
 1168:
            echoed = _closure1_slot0;
            output = _closure1_slot2;
            foxtra = output[entity];
            foxtra = echoed.bind(report)(foxtra);
            kiloes = foxtra.intl;
            backup = kiloes.formatToParts;
            entity = output[entity];
            entity = echoed.bind(report)(entity);
            entity = entity.t;
            foxtra = entity.mqKdCA;
            entity = {};
            papara = entity;
            cntext = config;
            config = copyDataProperties(papara, cntext);
            entity[ctrled] = sequen;
            ctrled = {};
            entity[vacuum] = ctrled;
            output = output[source];
            echoed = echoed.bind(report)(output);
            output = echoed.getUserAuthor;
            output = output.bind(echoed)(result, update);
            echoed = output.nick;
            output = 'targetUsername';
            entity[output] = echoed;
            output = {};
            output['action'] = sizing;
            echoed = offset == result;
            sizing = undefined;
            if(echoed) { _fun00014_ip = 1300; continue _fun00013 }
 1295:
            sizing = result.id;
 1300:
            output['userId'] = sizing;
            sizing = romeon.channel_id;
            output['messageChannelId'] = sizing;
            output['linkColor'] = oscard;
            sizing = 'targetUsernameOnClick';
            entity[sizing] = output;
            zuuluu = backup.bind(kiloes)(foxtra, entity);
 1336:
            entity = {};
            romeon = romeon.interaction;
            romeon = romeon.user;
            romeon = romeon.id;
            entity['userId'] = romeon;
            entity['usernameColor'] = option;
            option = _closure1_slot4;
            romeon = option.bind(report)(verify);
            foxtra = offset != romeon;
            option = null;
            if(!foxtra) { _fun00014_ip = 1384; continue _fun00013 }
 1381:
            option = romeon;
 1384:
            entity['roleColor'] = option;
            option = 'dot';
            option = option === yankee;
            if(!option) { _fun00014_ip = 1404; continue _fun00013 }
 1400:
            option = offset != verify;
 1404:
            entity['shouldShowRoleDot'] = option;
            entity['avatarURL'] = golfie;
            entity['targetUsernameColor'] = oscard;
            entity['content'] = zuuluu;
            zuuluu = {'color': null, 'borderRadius': 4, 'spaceAround': true};
            michal = _closure1_slot4;
            michal = michal.bind(report)(tangon);
            zuuluu['color'] = michal;
            michal = true;
            entity['commandNameBackgroundStyles'] = zuuluu;
            entity['showAppsIcon'] = michal;
            return entity;
        }
    };
    zuuluu['createExecutedCommand'] = michal;
    return entity;
})();