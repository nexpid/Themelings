// app/modules/guild_onboarding_home/native/GuildHomeResources.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ResourceChannelRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            update = entity.channelId;
            var _closure2_slot0 = update;
            config = entity.title;
            offset = entity.icon;
            target = entity.description;
            report = undefined;
            var _closure2_slot2 = report;
            entity = _closure1_slot14;
            yankee = entity.bind(report)();
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 10;
            mike = entity[oscar];
            romeo = zulu.bind(report)(mike);
            options = romeo.useStateFromStores;
            mike = _closure1_slot6;
            golf = new Array(1);
            golf[0] = mike;
            mike = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            echo = options.bind(romeo)(golf, mike);
            var _closure2_slot1 = echo;
            mike = entity[oscar];
            romeo = zulu.bind(report)(mike);
            options = romeo.useStateFromStores;
            mike = _closure1_slot9;
            golf = new Array(1);
            golf[0] = mike;
            mike = function() {
                tango = _closure1_slot9;
                zulu = tango.can;
                entity = _closure1_slot10;
                mike = entity.VIEW_CHANNEL;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = options.bind(romeo)(golf, mike);
            oscar = entity[oscar];
            romeo = zulu.bind(report)(oscar);
            options = romeo.useStateFromStores;
            oscar = _closure1_slot8;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot8;
                mike = zulu.getMessages;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = options.bind(romeo)(golf, oscar);
            oscar = golf.first;
            foxtrot = oscar.bind(golf)();
            kilo = 11;
            oscar = entity[kilo];
            romeo = zulu.bind(report)(oscar);
            oscar = romeo.useForumPostMediaProperties;
            options = false;
            oscar = oscar.bind(romeo)(foxtrot, options);
            entity = entity[kilo];
            zulu = zulu.bind(report)(entity);
            entity = zulu.useFirstMediaIsEmbed;
            output = entity.bind(zulu)(foxtrot, options);
            entity = null;
            zulu = entity == oscar;
            options = undefined;
            if(zulu) { _fun00002_ip = 251; continue _fun00001 }
 246:
            options = oscar.length;
 251:
            zulu = 0;
            options = options > zulu;
            result = null;
            if(!options) { _fun00002_ip = 266; continue _fun00001 }
 262:
            result = oscar[zulu];
 266:
            romeo = _closure1_slot0;
            backup = _closure1_slot2;
            options = 12;
            oscar = backup[options];
            sizing = romeo.bind(report)(oscar);
            romeo = sizing.useSharedMediaProps;
            oscar = {};
            oscar['channel'] = echo;
            oscar['media'] = result;
            oscar = romeo.bind(sizing)(oscar);
            sizing = oscar.shouldObscure;
            romeo = _closure1_slot1;
            oscar = 13;
            oscar = backup[oscar];
            oscar = romeo.bind(report)(oscar);
            lima = oscar.bind(report)(foxtrot);
            oscar = entity != echo;
            if(!oscar) { _fun00002_ip = 356; continue _fun00001 }
 342:
            romeo = golf.first;
            romeo = romeo.bind(golf)();
            oscar = entity == romeo;
 356:
            if(!oscar) { _fun00002_ip = 368; continue _fun00001 }
 359:
            romeo = golf.loadingMore;
            oscar = !romeo;
 368:
            if(!oscar) { _fun00002_ip = 380; continue _fun00001 }
 371:
            romeo = golf.ready;
            oscar = !romeo;
 380:
            if(!oscar) { _fun00002_ip = 392; continue _fun00001 }
 383:
            golf = golf.hasFetched;
            oscar = !golf;
 392:
            _closure2_slot2 = oscar;
            backup = _closure1_slot3;
            romeo = backup.useEffect;
            golf = new Array(2);
            golf[0] = update;
            golf[1] = oscar;
            oscar = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun00004_ip = 69; continue _fun00003 }
 10:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 14;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.fetchMessages;
                    entity = {};
                    tango = _closure2_slot0;
                    entity['channelId'] = tango;
                    entity['after'] = tango;
                    tango = 5;
                    entity['limit'] = tango;
                    entity = mike.bind(zulu)(entity);
 69:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = romeo.bind(backup)(oscar, golf);
            romeo = _closure1_slot3;
            golf = romeo.useCallback;
            oscar = new Array(1);
            oscar[0] = echo;
            tango = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00006_ip = 64; continue _fun00005 }
 13:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 15;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.selectHomeResourceChannel;
                    entity = _closure2_slot1;
                    mike = entity.guild_id;
                    entity = entity.id;
                    entity = zulu.bind(tango)(mike, entity);
 64:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = golf.bind(romeo)(tango, oscar);
            if(!(entity != echo)) { _fun00002_ip = 1165; continue _fun00001 }
 467:
            if(!mike) { _fun00002_ip = 1165; continue _fun00001 }
 473:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 16;
            mike = golf[mike];
            golf = tango.bind(report)(mike);
            tango = golf.getResourceChannelIconURL;
            mike = {};
            romeo = echo.id;
            mike['channelId'] = romeo;
            mike['icon'] = offset;
            golf = tango.bind(golf)(mike);
            vacuum = entity == target;
            if(vacuum) { _fun00002_ip = 535; continue _fun00001 }
 526:
            mike = target.length;
            vacuum = zulu === mike;
 535:
            tango = _closure1_slot13;
            source = _closure1_slot0;
            update = _closure1_slot2;
            mike = 17;
            mike = update[mike];
            mike = source.bind(report)(mike);
            zulu = mike.PressableOpacity;
            mike = {};
            mike['onPress'] = oscar;
            oscar = yankee.channelContainer;
            mike['style'] = oscar;
            backup = _closure1_slot13;
            romeo = _closure1_slot4;
            oscar = {};
            control = yankee.textContent;
            oscar['style'] = control;
            sequence = _closure1_slot12;
            control = 18;
            update = update[control];
            update = source.bind(report)(update);
            source = update.Text;
            update = {'variant': 'heading-md/extrabold', 'color': 'header-primary'};
            update['children'] = config;
            source = sequence.bind(report)(source, update);
            update = new Array(3);
            update[0] = source;
            source = vacuum;
            if(!source) { _fun00002_ip = 664; continue _fun00001 }
 660:
            source = entity != lima;
 664:
            if(!source) { _fun00002_ip = 780; continue _fun00001 }
 667:
            record = _closure1_slot12;
            config = _closure1_slot0;
            status = _closure1_slot2;
            sequence = status[control];
            sequence = config.bind(report)(sequence);
            config = sequence.Text;
            sequence = {'variant': 'text-sm/normal', 'color': 'header-secondary', 'style': null, 'lineClamp': 3, 'ellipsizeMode': 'tail'};
            context = yankee.messageContent;
            sequence['style'] = context;
            papa = _closure1_slot1;
            context = 19;
            context = status[context];
            sierra = papa.bind(report)(context);
            status = sierra.parse;
            papa = {};
            context = echo.guild_id;
            papa['guildId'] = context;
            context = echo.id;
            papa['channelId'] = context;
            context = true;
            context = status.bind(sierra)(lima, context, papa);
            sequence['children'] = context;
            source = record.bind(report)(config, sequence);
 780:
            update[1] = source;
            source = !vacuum;
            if(vacuum) { _fun00002_ip = 903; continue _fun00001 }
 790:
            sequence = _closure1_slot12;
            vacuum = _closure1_slot0;
            context = _closure1_slot2;
            control = context[control];
            control = vacuum.bind(report)(control);
            vacuum = control.Text;
            control = {'variant': 'text-sm/normal', 'color': 'header-secondary', 'style': null, 'lineClamp': 3, 'ellipsizeMode': 'tail'};
            config = yankee.messageContent;
            control['style'] = config;
            record = _closure1_slot1;
            config = 19;
            config = context[config];
            papa = record.bind(report)(config);
            context = papa.parse;
            record = {};
            config = echo.guild_id;
            record['guildId'] = config;
            config = echo.id;
            record['channelId'] = config;
            config = true;
            config = context.bind(papa)(target, config, record);
            control['children'] = config;
            source = sequence.bind(report)(vacuum, control);
 903:
            update[2] = source;
            oscar['children'] = update;
            romeo = backup.bind(report)(romeo, oscar);
            oscar = new Array(3);
            oscar[0] = romeo;
            romeo = entity != offset;
            offset = null;
            if(!romeo) { _fun00002_ip = 979; continue _fun00001 }
 934:
            romeo = entity != golf;
            offset = null;
            if(!romeo) { _fun00002_ip = 979; continue _fun00001 }
 943:
            update = _closure1_slot12;
            backup = _closure1_slot5;
            romeo = {};
            source = {};
            source['uri'] = golf;
            romeo['source'] = source;
            source = yankee.icon;
            romeo['style'] = source;
            offset = update.bind(report)(backup, romeo);
 979:
            oscar[1] = offset;
            offset = entity != golf;
            golf = null;
            if(offset) { _fun00002_ip = 1149; continue _fun00001 }
 995:
            offset = entity == foxtrot;
            golf = null;
            if(offset) { _fun00002_ip = 1149; continue _fun00001 }
 1007:
            if(!(entity != foxtrot)) { _fun00002_ip = 1025; continue _fun00001 }
 1011:
            offset = foxtrot.blocked;
            golf = null;
            if(offset) { _fun00002_ip = 1149; continue _fun00001 }
 1025:
            offset = entity == result;
            golf = null;
            if(offset) { _fun00002_ip = 1149; continue _fun00001 }
 1034:
            offset = _closure1_slot12;
            backup = _closure1_slot0;
            romeo = _closure1_slot2;
            options = romeo[options];
            options = backup.bind(report)(options);
            verify = options.ForumPostMediaThumbnail;
            options = {};
            options['channel'] = echo;
            options['media'] = result;
            options['isEmbed'] = output;
            romeo = romeo[kilo];
            kilo = backup.bind(report)(romeo);
            backup = kilo.getEmbedColor;
            romeo = entity != sizing;
            if(!romeo) { _fun00002_ip = 1102; continue _fun00001 }
 1099:
            romeo = sizing;
 1102:
            romeo = backup.bind(kilo)(foxtrot, romeo);
            options['embedLeftBorderColor'] = romeo;
            backup = entity == foxtrot;
            romeo = undefined;
            if(backup) { _fun00002_ip = 1127; continue _fun00001 }
 1122:
            romeo = foxtrot.id;
 1127:
            options['firstMessageId'] = romeo;
            yankee = yankee.thumbnail;
            options['containerStyle'] = yankee;
            golf = offset.bind(report)(verify, options);
 1149:
            oscar[2] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 1165:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    yankee = 1;
    tango = oscar[yankee];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot4 = golf;
    tango = tango.Image;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Permissions;
    var _closure1_slot10 = golf;
    tango = tango.Routes;
    var _closure1_slot11 = tango;
    tango = 7;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot12 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot13 = tango;
    offset = 8;
    tango = oscar[offset];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'paddingHorizontal': 12, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'};
    tango['container'] = verify;
    verify = {'padding': 20, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'};
    tango['emptyStateContainer'] = verify;
    verify = {'backgroundColor': null, 'marginBottom': 8, 'padding': 12, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'flex-start'};
    romeo = 9;
    backup = oscar[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = backup;
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    tango['channelContainer'] = verify;
    verify = {};
    verify['marginTop'] = offset;
    tango['messageContent'] = verify;
    verify = {};
    verify['flex'] = yankee;
    tango['textContent'] = verify;
    verify = {};
    verify['marginLeft'] = offset;
    tango['thumbnail'] = verify;
    verify = {'marginTop': 12, 'marginBottom': 20};
    tango['emptyStateImage'] = verify;
    verify = {'width': 72, 'height': 72};
    tango['icon'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding_home/native/GuildHomeResources.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildHomeResources
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            mike = entity.guildId;
            var _closure2_slot0 = mike;
            entity = _closure1_slot14;
            report = undefined;
            options = entity.bind(report)();
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 20;
            entity = tango[entity];
            entity = zulu.bind(report)(entity);
            verify = entity.bind(report)(mike);
            mike = verify.length;
            entity = 0;
            if(!(entity !== mike)) { _fun00008_ip = 114; continue _fun00007 }
 63:
            zulu = _closure1_slot12;
            mike = _closure1_slot4;
            entity = {};
            tango = options.container;
            entity['style'] = tango;
            oscar = verify.map;
            tango = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot12;
                tango = _closure1_slot15;
                zulu = {};
                mike = entity.channelId;
                zulu['channelId'] = mike;
                mike = entity.title;
                zulu['title'] = mike;
                mike = entity.icon;
                zulu['icon'] = mike;
                mike = entity.description;
                zulu['description'] = mike;
                oscar = entity.channelId;
                entity = global;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = 'resource-';
                mike = mike.bind(entity)(oscar);
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            tango = oscar.bind(verify)(tango);
            entity['children'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun00008_ip = 389; continue _fun00007;
 114:
            tango = _closure1_slot13;
            zulu = _closure1_slot4;
            mike = {};
            oscar = options.emptyStateContainer;
            mike['style'] = oscar;
            romeo = _closure1_slot12;
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            oscar = 18;
            oscar = backup[oscar];
            oscar = foxtrot.bind(report)(oscar);
            verify = oscar.Text;
            oscar = {'variant': 'heading-xl/bold', 'color': 'header-primary'};
            offset = 22;
            kilo = backup[offset];
            kilo = foxtrot.bind(report)(kilo);
            output = kilo.intl;
            sizing = output.string;
            kilo = backup[offset];
            kilo = foxtrot.bind(report)(kilo);
            kilo = kilo.t;
            kilo = kilo.owvC9f;
            kilo = sizing.bind(output)(kilo);
            oscar['children'] = kilo;
            verify = romeo.bind(report)(verify, oscar);
            oscar = new Array(3);
            oscar[0] = verify;
            kilo = _closure1_slot12;
            romeo = _closure1_slot5;
            verify = {};
            options = options.emptyStateImage;
            verify['style'] = options;
            options = _closure1_slot1;
            sizing = 23;
            sizing = backup[sizing];
            sizing = options.bind(report)(sizing);
            verify['source'] = sizing;
            verify = kilo.bind(report)(romeo, verify);
            oscar[1] = verify;
            verify = _closure1_slot12;
            golf = 24;
            golf = backup[golf];
            options = options.bind(report)(golf);
            golf = {};
            yankee = function() { // Original name: onPress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure1_slot7;
                    mike = zulu.getDefaultChannel;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
                    mike = null;
                    if(!(mike != entity)) { _fun00010_ip = 89; continue _fun00009 }
 31:
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 21;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = oscar.bind(mike)(zulu);
                    mike = zulu.transitionTo;
                    oscar = _closure1_slot11;
                    report = oscar.CHANNEL;
                    tango = _closure2_slot0;
                    entity = entity.id;
                    entity = report.bind(oscar)(tango, entity);
                    entity = mike.bind(zulu)(entity);
 89:
                    entity = undefined;
                    return entity;
                }
            };
            golf['onPress'] = yankee;
            yankee = backup[offset];
            yankee = foxtrot.bind(report)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            offset = backup[offset];
            offset = foxtrot.bind(report)(offset);
            offset = offset.t;
            offset = offset.3iCBUl;
            offset = yankee.bind(romeo)(offset);
            golf['text'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[2] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 389:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();