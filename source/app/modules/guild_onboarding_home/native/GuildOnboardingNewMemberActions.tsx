// app/modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: MemberActionRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            backup = mike.channelId;
            var _closure2_slot0 = backup;
            result = mike.title;
            entity = mike.emoji;
            foxtrot = mike.icon;
            offset = mike.completed;
            report = undefined;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            mike = _closure1_slot17;
            yankee = mike.bind(report)();
            zulu = null;
            if(!(zulu == entity)) { _fun00002_ip = 65; continue _fun00001 }
 63:
            entity = {};
 65:
            verify = entity.id;
            _closure2_slot1 = verify;
            options = entity.name;
            output = _closure1_slot0;
            oscar = _closure1_slot2;
            sizing = 15;
            entity = oscar[sizing];
            kilo = output.bind(report)(entity);
            golf = kilo.useStateFromStores;
            entity = _closure1_slot6;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = golf.bind(kilo)(mike, entity);
            _closure2_slot2 = entity;
            golf = _closure1_slot1;
            mike = 16;
            mike = oscar[mike];
            mike = golf.bind(report)(mike);
            kilo = true;
            control = mike.bind(report)(entity, kilo);
            mike = oscar[sizing];
            source = output.bind(report)(mike);
            update = source.useStateFromStores;
            mike = _closure1_slot9;
            echo = new Array(1);
            echo[0] = mike;
            mike = function() {
                tango = _closure1_slot9;
                zulu = tango.can;
                entity = _closure1_slot12;
                mike = entity.VIEW_CHANNEL;
                entity = _closure2_slot2;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = update.bind(source)(echo, mike);
            sizing = oscar[sizing];
            update = output.bind(report)(sizing);
            echo = update.useStateFromStores;
            sizing = _closure1_slot5;
            output = new Array(1);
            output[0] = sizing;
            sizing = new Array(1);
            sizing[0] = verify;
            verify = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00004_ip = 38; continue _fun00003 }
 16:
                    tango = _closure1_slot5;
                    zulu = tango.getCustomEmojiById;
                    mike = _closure2_slot1;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            output = echo.bind(update)(output, verify, sizing);
            sizing = 17;
            oscar = oscar[sizing];
            verify = golf.bind(report)(oscar);
            golf = verify.getNewMemberActionIconURL;
            oscar = {};
            oscar['channelId'] = backup;
            oscar['icon'] = foxtrot;
            verify = golf.bind(verify)(oscar);
            foxtrot = _closure1_slot3;
            golf = foxtrot.useCallback;
            oscar = new Array(1);
            oscar[0] = entity;
            tango = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike != zulu)) { _fun00006_ip = 68; continue _fun00005 }
 13:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 18;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.selectNewMemberActionChannel;
                    mike = _closure2_slot2;
                    mike = mike.guild_id;
                    entity = _closure2_slot2;
                    entity = entity.id;
                    entity = zulu.bind(tango)(mike, entity);
 68:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = golf.bind(foxtrot)(tango, oscar);
            tango = zulu != entity;
            entity = null;
            if(!tango) { _fun00002_ip = 1092; continue _fun00001 }
 319:
            entity = null;
            if(!mike) { _fun00002_ip = 1092; continue _fun00001 }
 327:
            if(!(zulu == verify)) { _fun00002_ip = 685; continue _fun00001 }
 334:
            if(!(zulu == output)) { _fun00002_ip = 571; continue _fun00001 }
 341:
            if(!(zulu != options)) { _fun00002_ip = 403; continue _fun00001 }
 345:
            foxtrot = _closure1_slot1;
            backup = _closure1_slot2;
            mike = 20;
            tango = backup[mike];
            golf = foxtrot.bind(report)(tango);
            tango = golf.getByName;
            mike = backup[mike];
            backup = foxtrot.bind(report)(mike);
            foxtrot = backup.convertSurrogateToName;
            mike = false;
            mike = foxtrot.bind(backup)(options, mike);
            mike = tango.bind(golf)(mike);
            if(!(zulu == mike)) { _fun00002_ip = 508; continue _fun00001 }
 403:
            tango = _closure1_slot15;
            zulu = _closure1_slot4;
            mike = {};
            golf = yankee.emojiPlaceholder;
            mike['style'] = golf;
            backup = _closure1_slot15;
            update = _closure1_slot1;
            source = _closure1_slot2;
            echo = 22;
            golf = source[echo];
            foxtrot = update.bind(report)(golf);
            golf = {};
            echo = source[echo];
            echo = update.bind(report)(echo);
            echo = echo.Sizes;
            echo = echo.REFRESH_SMALL_16;
            golf['size'] = echo;
            echo = 23;
            echo = source[echo];
            echo = update.bind(report)(echo);
            golf['source'] = echo;
            golf = backup.bind(report)(foxtrot, golf);
            mike['children'] = golf;
            golf = tango.bind(report)(zulu, mike);
            _fun00002_ip = 569; continue _fun00001;
 508:
            tango = _closure1_slot15;
            zulu = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 21;
            mike = foxtrot[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.Text;
            mike = {};
            foxtrot = yankee.textEmoji;
            mike['style'] = foxtrot;
            foxtrot = 'heading-xxl/normal';
            mike['variant'] = foxtrot;
            mike['children'] = options;
            golf = tango.bind(report)(zulu, mike);
 569:
            _fun00002_ip = 683; continue _fun00001;
 571:
            tango = _closure1_slot15;
            backup = _closure1_slot1;
            foxtrot = _closure1_slot2;
            mike = 19;
            mike = foxtrot[mike];
            zulu = backup.bind(report)(mike);
            mike = {};
            options = yankee.emoji;
            mike['style'] = options;
            options = {};
            foxtrot = foxtrot[sizing];
            sizing = backup.bind(report)(foxtrot);
            backup = sizing.getEmojiURL;
            foxtrot = {};
            echo = output.id;
            foxtrot['id'] = echo;
            output = output.animated;
            foxtrot['animated'] = output;
            output = _closure1_slot13;
            foxtrot['size'] = output;
            foxtrot = backup.bind(sizing)(foxtrot);
            options['uri'] = foxtrot;
            mike['source'] = options;
            options = 'contain';
            mike['resizeMode'] = options;
            golf = tango.bind(report)(zulu, mike);
 683:
            _fun00002_ip = 746; continue _fun00001;
 685:
            tango = _closure1_slot15;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 19;
            mike = options[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            options = yankee.icon;
            mike['style'] = options;
            options = {};
            options['uri'] = verify;
            mike['source'] = options;
            options = 'contain';
            mike['resizeMode'] = options;
            golf = tango.bind(report)(zulu, mike);
 746:
            tango = _closure1_slot16;
            echo = _closure1_slot0;
            backup = _closure1_slot2;
            mike = 24;
            mike = backup[mike];
            mike = echo.bind(report)(mike);
            zulu = mike.PressableOpacity;
            mike = {};
            mike['onPress'] = oscar;
            oscar = yankee.actionContainer;
            mike['style'] = oscar;
            oscar = new Array(3);
            oscar[0] = golf;
            verify = _closure1_slot16;
            options = _closure1_slot4;
            golf = {};
            yankee = yankee.channelNameContainer;
            golf['style'] = yankee;
            output = _closure1_slot15;
            foxtrot = 21;
            yankee = backup[foxtrot];
            yankee = echo.bind(report)(yankee);
            sizing = yankee.Text;
            yankee = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            yankee['children'] = result;
            sizing = output.bind(report)(sizing, yankee);
            yankee = new Array(2);
            yankee[0] = sizing;
            output = _closure1_slot15;
            foxtrot = backup[foxtrot];
            foxtrot = echo.bind(report)(foxtrot);
            sizing = foxtrot.Text;
            foxtrot = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            result = 25;
            update = backup[result];
            update = echo.bind(report)(update);
            source = update.intl;
            update = source.format;
            result = backup[result];
            result = echo.bind(report)(result);
            result = result.t;
            echo = result.MkzlDA;
            result = {};
            result['channelName'] = control;
            result = update.bind(source)(echo, result);
            foxtrot['children'] = result;
            foxtrot = output.bind(report)(sizing, foxtrot);
            yankee[1] = foxtrot;
            golf['children'] = yankee;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            verify = _closure1_slot15;
            yankee = _closure1_slot1;
            foxtrot = 22;
            golf = backup[foxtrot];
            options = yankee.bind(report)(golf);
            golf = {};
            golf['disableColor'] = kilo;
            foxtrot = backup[foxtrot];
            foxtrot = yankee.bind(report)(foxtrot);
            foxtrot = foxtrot.Sizes;
            foxtrot = foxtrot.MEDIUM;
            golf['size'] = foxtrot;
            foxtrot = _closure1_slot2;
            if(offset) { _fun00002_ip = 1056; continue _fun00001 }
 1047:
            offset = 27;
            offset = foxtrot[offset];
            _fun00002_ip = 1063; continue _fun00001;
 1056:
            romeo = 26;
            offset = foxtrot[romeo];
 1063:
            offset = yankee.bind(report)(offset);
            golf['source'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[2] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1092:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot10 = tango;
    offset = 8;
    tango = oscar[offset];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EMOJI_URL_BASE_SIZE;
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildMemberFlags;
    var _closure1_slot14 = tango;
    yankee = 12;
    tango = oscar[yankee];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot15 = tango;
    tango = oscar[yankee];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot16 = tango;
    tango = 13;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['paddingHorizontal'] = yankee;
    tango['actionsContainer'] = verify;
    verify = {'display': 'flex', 'marginBottom': 16};
    tango['actionsHeader'] = verify;
    verify = {'backgroundColor': null, 'marginBottom': 8, 'padding': 12, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    yankee = 14;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    verify['borderRadius'] = foxtrot;
    tango['actionContainer'] = verify;
    verify = {'flex': 1, 'marginHorizontal': 8};
    tango['channelNameContainer'] = verify;
    verify = {'width': 40, 'height': 40};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.xs;
    verify['borderRadius'] = foxtrot;
    tango['icon'] = verify;
    verify = {'width': 40, 'height': 40};
    tango['emoji'] = verify;
    verify = {'width': 40, 'textAlign': 'center'};
    tango['textEmoji'] = verify;
    verify = {'width': 40, 'height': 40, 'backgroundColor': null, 'borderRadius': 20, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = yankee;
    tango['emojiPlaceholder'] = verify;
    verify = {};
    verify['marginLeft'] = offset;
    tango['completedText'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot17 = tango;
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildOnboardingNewMemberActions
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            mike = entity.guildId;
            var _closure2_slot0 = mike;
            entity = _closure1_slot17;
            report = undefined;
            output = entity.bind(report)();
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 15;
            entity = oscar[zulu];
            yankee = tango.bind(report)(entity);
            offset = yankee.useStateFromStores;
            entity = _closure1_slot10;
            verify = new Array(1);
            verify[0] = entity;
            options = new Array(1);
            options[0] = mike;
            entity = function() {
                zulu = _closure1_slot10;
                mike = zulu.getNewMemberActions;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = offset.bind(yankee)(verify, entity, options);
            entity = oscar[zulu];
            offset = tango.bind(report)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot11;
            options = new Array(1);
            options[0] = entity;
            entity = function() {
                zulu = _closure1_slot11;
                mike = zulu.getCompletedActions;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = verify.bind(offset)(options, entity);
            var _closure2_slot1 = options;
            entity = oscar[zulu];
            yankee = tango.bind(report)(entity);
            offset = yankee.useStateFromStores;
            entity = _closure1_slot7;
            verify = new Array(1);
            verify[0] = entity;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getSelfMember;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = offset.bind(yankee)(verify, entity);
            var _closure2_slot2 = entity;
            zulu = oscar[zulu];
            verify = tango.bind(report)(zulu);
            oscar = verify.useStateFromStores;
            zulu = _closure1_slot8;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot8;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = oscar.bind(verify)(tango, zulu);
            var _closure2_slot3 = verify;
            oscar = _closure1_slot3;
            tango = oscar.useEffect;
            zulu = new Array(3);
            zulu[0] = options;
            zulu[1] = mike;
            options = null;
            offset = options == entity;
            mike = undefined;
            if(offset) { _fun00008_ip = 252; continue _fun00007 }
 247:
            mike = entity.flags;
 252:
            zulu[2] = mike;
            mike = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure2_slot1;
                    tango = null;
                    mike = tango == mike;
                    if(!mike) { _fun00010_ip = 42; continue _fun00009 }
 16:
                    zulu = _closure2_slot2;
                    report = tango == zulu;
                    zulu = undefined;
                    if(report) { _fun00010_ip = 38; continue _fun00009 }
 29:
                    report = _closure2_slot2;
                    zulu = report.flags;
 38:
                    mike = tango != zulu;
 42:
                    if(!mike) { _fun00010_ip = 113; continue _fun00009 }
 45:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 28;
                    oscar = oscar[report];
                    report = undefined;
                    oscar = golf.bind(report)(oscar);
                    report = oscar.hasFlag;
                    golf = _closure2_slot2;
                    golf = golf.flags;
                    options = tango != golf;
                    tango = 0;
                    if(!options) { _fun00010_ip = 97; continue _fun00009 }
 94:
                    tango = golf;
 97:
                    zulu = _closure1_slot14;
                    zulu = zulu.STARTED_HOME_ACTIONS;
                    mike = report.bind(oscar)(tango, zulu);
 113:
                    if(!mike) { _fun00010_ip = 156; continue _fun00009 }
 116:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 18;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.fetchNewMemberActions;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
 156:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(oscar)(mike, zulu);
            oscar = _closure1_slot3;
            tango = oscar.useCallback;
            zulu = new Array(1);
            zulu[0] = verify;
            mike = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = _closure2_slot3;
                    tango = null;
                    mike = tango != mike;
                    if(!mike) { _fun00012_ip = 43; continue _fun00011 }
 16:
                    zulu = _closure2_slot3;
                    report = tango == zulu;
                    zulu = undefined;
                    if(report) { _fun00012_ip = 39; continue _fun00011 }
 29:
                    report = _closure2_slot3;
                    zulu = report.rulesChannelId;
 39:
                    mike = tango != zulu;
 43:
                    if(!mike) { _fun00012_ip = 98; continue _fun00011 }
 46:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 18;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.selectNewMemberActionChannel;
                    entity = _closure2_slot3;
                    mike = entity.id;
                    entity = entity.rulesChannelId;
                    entity = zulu.bind(tango)(mike, entity);
 98:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = tango.bind(oscar)(mike, zulu);
            mike = options == entity;
            entity = null;
            if(mike) { _fun00008_ip = 838; continue _fun00007 }
 311:
            mike = options == romeo;
            entity = null;
            if(mike) { _fun00008_ip = 838; continue _fun00007 }
 323:
            zulu = romeo.length;
            mike = 0;
            entity = null;
            if(!(mike !== zulu)) { _fun00008_ip = 838; continue _fun00007 }
 339:
            tango = _closure1_slot16;
            zulu = _closure1_slot4;
            mike = {};
            oscar = output.actionsContainer;
            mike['style'] = oscar;
            foxtrot = _closure1_slot15;
            offset = _closure1_slot4;
            oscar = {};
            backup = output.actionsHeader;
            oscar['style'] = backup;
            echo = _closure1_slot15;
            sequence = _closure1_slot0;
            update = _closure1_slot2;
            kilo = 21;
            backup = update[kilo];
            backup = sequence.bind(report)(backup);
            result = backup.Text;
            backup = {'variant': 'heading-lg/bold', 'color': 'header-primary'};
            control = 25;
            source = update[control];
            source = sequence.bind(report)(source);
            vacuum = source.intl;
            source = vacuum.string;
            update = update[control];
            update = sequence.bind(report)(update);
            update = update.t;
            update = update.LhlgY2;
            update = source.bind(vacuum)(update);
            backup['children'] = update;
            backup = echo.bind(report)(result, backup);
            oscar['children'] = backup;
            offset = foxtrot.bind(report)(offset, oscar);
            oscar = new Array(3);
            oscar[0] = offset;
            offset = romeo.map;
            golf = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot15;
                    tango = _closure1_slot18;
                    zulu = {};
                    mike = entity.channelId;
                    zulu['channelId'] = mike;
                    mike = entity.title;
                    zulu['title'] = mike;
                    mike = entity.emoji;
                    zulu['emoji'] = mike;
                    mike = entity.icon;
                    zulu['icon'] = mike;
                    mike = _closure2_slot1;
                    oscar = null;
                    verify = oscar == mike;
                    mike = undefined;
                    golf = undefined;
                    if(verify) { _fun00014_ip = 87; continue _fun00013 }
 74:
                    verify = _closure2_slot1;
                    options = entity.channelId;
                    golf = verify[options];
 87:
                    oscar = oscar != golf;
                    if(!oscar) { _fun00014_ip = 97; continue _fun00013 }
 94:
                    oscar = golf;
 97:
                    zulu['completed'] = oscar;
                    golf = entity.channelId;
                    entity = global;
                    entity = entity.HermesInternal;
                    oscar = entity.concat;
                    entity = 'member-action-';
                    entity = oscar.bind(entity)(golf);
                    entity = report.bind(mike)(tango, zulu, entity);
                    return entity;
                }
            };
            golf = offset.bind(romeo)(golf);
            oscar[1] = golf;
            offset = options == verify;
            golf = undefined;
            if(offset) { _fun00008_ip = 529; continue _fun00007 }
 523:
            golf = verify.rulesChannelId;
 529:
            golf = options != golf;
            if(!golf) { _fun00008_ip = 824; continue _fun00007 }
 539:
            offset = _closure1_slot16;
            source = _closure1_slot0;
            result = _closure1_slot2;
            options = 24;
            options = result[options];
            options = source.bind(report)(options);
            verify = options.PressableOpacity;
            options = {};
            options['onPress'] = yankee;
            yankee = output.actionContainer;
            options['style'] = yankee;
            foxtrot = _closure1_slot15;
            romeo = _closure1_slot4;
            yankee = {};
            backup = output.emojiPlaceholder;
            yankee['style'] = backup;
            update = _closure1_slot15;
            sequence = _closure1_slot1;
            vacuum = 22;
            backup = result[vacuum];
            echo = sequence.bind(report)(backup);
            backup = {};
            vacuum = result[vacuum];
            vacuum = sequence.bind(report)(vacuum);
            vacuum = vacuum.Sizes;
            vacuum = vacuum.REFRESH_SMALL_16;
            backup['size'] = vacuum;
            vacuum = 29;
            vacuum = result[vacuum];
            vacuum = sequence.bind(report)(vacuum);
            backup['source'] = vacuum;
            backup = update.bind(report)(echo, backup);
            yankee['children'] = backup;
            romeo = foxtrot.bind(report)(romeo, yankee);
            yankee = new Array(2);
            yankee[0] = romeo;
            backup = _closure1_slot15;
            foxtrot = _closure1_slot4;
            romeo = {};
            output = output.channelNameContainer;
            romeo['style'] = output;
            output = _closure1_slot15;
            kilo = result[kilo];
            kilo = source.bind(report)(kilo);
            sizing = kilo.Text;
            kilo = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            echo = result[control];
            echo = source.bind(report)(echo);
            update = echo.intl;
            echo = update.string;
            result = result[control];
            result = source.bind(report)(result);
            result = result.t;
            result = result.K/i3iY;
            result = echo.bind(update)(result);
            kilo['children'] = result;
            kilo = output.bind(report)(sizing, kilo);
            romeo['children'] = kilo;
            romeo = backup.bind(report)(foxtrot, romeo);
            yankee[1] = romeo;
            options['children'] = yankee;
            golf = offset.bind(report)(verify, options);
 824:
            oscar[2] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 838:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();