// app/modules/routing/native/RouteManagerUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function(argFoo, argBar) { // Original name: matchPathToRoutes
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 11;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.matchPath;
        mike = {'path': null, 'strict': false, 'exact': false};
        entity = argBar;
        mike['path'] = entity;
        entity = argFoo;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    report = function(argFoo) { // Original name: extractParamsFromVoiceModalRoute
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            tango = _closure1_slot17;
            zulu = options.pathname;
            entity = _closure1_slot16;
            golf = undefined;
            verify = tango.bind(golf)(zulu, entity);
            zulu = null;
            tango = zulu == verify;
            entity = undefined;
            if(tango) { _fun00002_ip = 45; continue _fun00001 }
 39:
            entity = verify.params;
 45:
            if(!(zulu == entity)) { _fun00002_ip = 51; continue _fun00001 }
 49:
            entity = {};
 51:
            report = entity.voiceChannelId;
            tango = entity.voiceGuildId;
            zulu = entity.voiceMessageId;
            entity = {};
            oscar = _closure1_slot20;
            mike = {};
            mike['match'] = verify;
            mike['location'] = options;
            offset = oscar.bind(golf)(mike);
            yankee = entity;
            mike = copyDataProperties(yankee, offset);
            mike = 'voiceChannelId';
            entity[mike] = report;
            mike = 'voiceGuildId';
            entity[mike] = tango;
            mike = 'voiceMessageId';
            entity[mike] = zulu;
            return entity;
        }
    };
    var _closure1_slot18 = report;
    entity = function(argFoo) { // Original name: selectLastVisitedTextChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golf = argFoo;
            zulu = _closure1_slot7;
            mike = zulu.getChannel;
            report = _closure1_slot10;
            entity = report.getLastSelectedChannelId;
            entity = entity.bind(report)();
            mike = mike.bind(zulu)(entity);
            report = null;
            oscar = report == mike;
            zulu = undefined;
            entity = undefined;
            if(oscar) { _fun00004_ip = 52; continue _fun00003 }
 47:
            entity = mike.type;
 52:
            if(!(report != entity)) { _fun00004_ip = 82; continue _fun00003 }
 56:
            oscar = _closure1_slot6;
            options = report == mike;
            entity = undefined;
            if(options) { _fun00004_ip = 74; continue _fun00003 }
 69:
            entity = mike.type;
 74:
            entity = oscar.bind(zulu)(entity);
            if(entity) { _fun00004_ip = 137; continue _fun00003 }
 82:
            oscar = _closure1_slot10;
            entity = oscar.getMostRecentSelectedTextChannelId;
            entity = entity.bind(oscar)(golf);
            if(!(report == entity)) { _fun00004_ip = 135; continue _fun00003 }
 103:
            oscar = _closure1_slot9;
            tango = oscar.getDefaultChannel;
            tango = tango.bind(oscar)(golf);
            report = report == tango;
            zulu = undefined;
            if(report) { _fun00004_ip = 132; continue _fun00003 }
 127:
            zulu = tango.id;
 132:
            entity = zulu;
 135:
            _fun00004_ip = 142; continue _fun00003;
 137:
            entity = mike.id;
 142:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    mike = function(argFoo) { // Original name: extractParams
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            entity = mike.match;
            mike = mike.location;
            report = null;
            if(!(report != entity)) { _fun00006_ip = 263; continue _fun00005 }
 23:
            entity = entity.params;
            options = entity.guildId;
            oscar = entity.channelId;
            tango = entity.messageId;
            zulu = mike.jumpType;
            offset = _closure1_slot0;
            entity = _closure1_slot2;
            yankee = 21;
            entity = entity[yankee];
            verify = undefined;
            entity = offset.bind(verify)(entity);
            entity = entity.JumpTypes;
            entity = entity.INSTANT;
            if(!(zulu !== entity)) { _fun00006_ip = 122; continue _fun00005 }
 91:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[yankee];
            entity = zulu.bind(verify)(entity);
            entity = entity.JumpTypes;
            zulu = entity.ANIMATED;
            _fun00006_ip = 151; continue _fun00005;
 122:
            offset = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[yankee];
            entity = offset.bind(verify)(entity);
            entity = entity.JumpTypes;
            zulu = entity.INSTANT;
 151:
            entity = {};
            romeo = _closure1_slot0;
            yankee = _closure1_slot2;
            offset = 10;
            yankee = yankee[offset];
            romeo = romeo.bind(verify)(yankee);
            yankee = romeo.isValidGuildId;
            yankee = yankee.bind(romeo)(options);
            if(yankee) { _fun00006_ip = 191; continue _fun00005 }
 187:
            options = _closure1_slot11;
 191:
            entity['guildId'] = options;
            options = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[offset];
            options = options.bind(verify)(golf);
            golf = options.isValidChannelId;
            golf = golf.bind(options)(oscar);
            report = null;
            if(!golf) { _fun00006_ip = 231; continue _fun00005 }
 228:
            report = oscar;
 231:
            entity['channelId'] = report;
            entity['messageId'] = tango;
            entity['jumpType'] = zulu;
            mike = mike.preserveDrawerState;
            mike = !mike;
            mike = !mike;
            entity['preserveDrawerState'] = mike;
            return entity;
 263:
            entity = {'guildId': null, 'channelId': null, 'messageId': null, 'jumpType': null, 'preserveDrawerState': false};
            zulu = _closure1_slot11;
            entity['guildId'] = zulu;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 21;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.JumpTypes;
            mike = mike.ANIMATED;
            entity['jumpType'] = mike;
            return entity;
        }
    };
    var _closure1_slot20 = mike;
    entity = ['channelId', 'guildId'];
    var _closure1_slot3 = entity;
    golf = global;
    romeo = golf.Object;
    yankee = romeo.defineProperty;
    oscar = {};
    sizing = true;
    oscar['value'] = sizing;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 1;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.setVoiceChatDrawerState;
    var _closure1_slot5 = oscar;
    oscar = 2;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.isGuildSelectableChannelType;
    var _closure1_slot6 = oscar;
    oscar = 3;
    oscar = verify[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 4;
    oscar = verify[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot8 = oscar;
    oscar = 5;
    oscar = verify[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot9 = oscar;
    oscar = 6;
    oscar = verify[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot10 = oscar;
    oscar = 7;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    yankee = oscar.ME;
    var _closure1_slot11 = yankee;
    backup = oscar.Routes;
    var _closure1_slot12 = backup;
    oscar = oscar.ChannelTypes;
    var _closure1_slot13 = oscar;
    oscar = 8;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.VoiceChatDrawerState;
    var _closure1_slot14 = oscar;
    oscar = 9;
    oscar = verify[oscar];
    yankee = offset.bind(entity)(oscar);
    oscar = yankee.prototype;
    offset = Object.create(oscar, {constructor: {value: yankee}});
    echo = 'RouteUtils';
    update = offset;
    oscar = new update[yankee](echo, result);
    oscar = oscar instanceof Object ? oscar : offset;
    var _closure1_slot15 = oscar;
    foxtrot = backup.CHANNEL;
    offset = 10;
    oscar = verify[offset];
    oscar = options.bind(entity)(oscar);
    yankee = oscar.RouteParam;
    oscar = yankee.guildId;
    romeo = oscar.bind(yankee)();
    oscar = verify[offset];
    oscar = options.bind(entity)(oscar);
    kilo = oscar.RouteParam;
    yankee = kilo.channelId;
    oscar = {};
    oscar['optional'] = sizing;
    yankee = yankee.bind(kilo)(oscar);
    oscar = ':messageId?';
    oscar = foxtrot.bind(backup)(romeo, yankee, oscar);
    foxtrot = backup.VOICE_CHAT_CHANNEL_PARTIAL;
    yankee = verify[offset];
    yankee = options.bind(entity)(yankee);
    kilo = yankee.RouteParam;
    romeo = kilo.guildId;
    yankee = {};
    sizing = 'voiceGuildId';
    yankee['name'] = sizing;
    romeo = romeo.bind(kilo)(yankee);
    offset = verify[offset];
    offset = options.bind(entity)(offset);
    kilo = offset.RouteParam;
    yankee = kilo.channelId;
    offset = {};
    sizing = 'voiceChannelId';
    offset['name'] = sizing;
    yankee = yankee.bind(kilo)(offset);
    offset = ':voiceMessageId?';
    yankee = foxtrot.bind(backup)(romeo, yankee, offset);
    golf = golf.HermesInternal;
    offset = golf.concat;
    golf = '';
    offset = offset.bind(golf)(oscar, yankee);
    golf = new Array(2);
    golf[0] = offset;
    golf[1] = oscar;
    var _closure1_slot16 = golf;
    golf = 22;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/routing/native/RouteManagerUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['MAIN_DRAWER_ROUTES'] = oscar;
    zulu['extractParamsFromVoiceModalRoute'] = report;
    report = function(argFoo) { // Original name: popVoiceRoute
        verify = argFoo;
        entity = _closure1_slot8;
        report = entity.lastNonVoiceRoute;
        tango = _closure1_slot15;
        zulu = tango.log;
        entity = global;
        entity = entity.HermesInternal;
        oscar = entity.concat;
        entity = 'popVoiceRoute: last non-voice route is ';
        entity = oscar.bind(entity)(report);
        entity = zulu.bind(tango)(entity);
        oscar = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 12;
        zulu = tango[entity];
        entity = undefined;
        options = oscar.bind(entity)(zulu);
        golf = options.selectChannel;
        zulu = {};
        zulu['guildId'] = verify;
        oscar = _closure1_slot19;
        oscar = oscar.bind(entity)(verify);
        zulu['channelId'] = oscar;
        oscar = true;
        zulu['preserveDrawerState'] = oscar;
        zulu = golf.bind(options)(zulu);
        zulu = _closure1_slot0;
        mike = 13;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.transitionTo;
        mike = {};
        mike['preserveDrawerState'] = oscar;
        mike = zulu.bind(tango)(report, mike);
        return entity;
    };
    zulu['popVoiceRoute'] = report;
    report = function(argFoo, argBar) { // Original name: transitionToVoiceRoute
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = _closure1_slot8;
            backup = entity.defaultRoute;
            tango = _closure1_slot17;
            zulu = _closure1_slot16;
            entity = undefined;
            golf = tango.bind(entity)(backup, zulu);
            tango = null;
            options = tango == golf;
            zulu = undefined;
            if(options) { _fun00008_ip = 52; continue _fun00007 }
 46:
            zulu = golf.params;
 52:
            if(!(tango == zulu)) { _fun00008_ip = 58; continue _fun00007 }
 56:
            zulu = {};
 58:
            yankee = zulu.voiceChannelId;
            options = _closure1_slot15;
            golf = options.log;
            zulu = global;
            tango = zulu.HermesInternal;
            foxtrot = tango.concat;
            control = 'transitionToVoiceRoute(<';
            update = '>, <';
            result = '>), current route ';
            sizing = ' has voiceChannelId ';
            source = oscar;
            echo = report;
            output = backup;
            kilo = yankee;
            tango = control[foxtrot](source, update, echo, result, output, sizing, kilo, backup);
            tango = golf.bind(options)(tango);
            if(!(yankee === report)) { _fun00008_ip = 192; continue _fun00007 }
 136:
            golf = _closure1_slot15;
            tango = golf.log;
            zulu = zulu.HermesInternal;
            offset = zulu.concat;
            control = 'transitionToVoiceRoute -> ';
            update = ' === ';
            result = '. staying where we are';
            source = yankee;
            echo = report;
            zulu = control[offset](source, update, echo, result, output);
            zulu = tango.bind(golf)(zulu);
            _fun00008_ip = 245; continue _fun00007;
 192:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 13;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.transitionToGuild;
            mike = {};
            golf = true;
            mike['preserveDrawerState'] = golf;
            control = tango;
            source = oscar;
            update = report;
            echo = undefined;
            result = mike;
            mike = control[zulu](source, update, echo, result, output);
 245:
            return entity;
        }
    };
    zulu['transitionToVoiceRoute'] = report;
    report = function(argFoo) { // Original name: voiceRouteRewriter
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golf = argFoo;
            zulu = golf.state;
            mike = _closure1_slot20;
            entity = {};
            options = _closure1_slot17;
            oscar = golf.pathname;
            tango = _closure1_slot16;
            offset = undefined;
            tango = options.bind(offset)(oscar, tango);
            entity['match'] = tango;
            entity['location'] = golf;
            tango = mike.bind(offset)(entity);
            verify = tango.channelId;
            oscar = tango.guildId;
            mike = _closure1_slot4;
            entity = _closure1_slot3;
            tango = mike.bind(offset)(tango, entity);
            mike = _closure1_slot7;
            entity = mike.getChannel;
            mike = entity.bind(mike)(verify);
            options = null;
            yankee = options == verify;
            entity = null;
            if(yankee) { _fun00010_ip = 202; continue _fun00009 }
 102:
            yankee = options == oscar;
            entity = null;
            if(yankee) { _fun00010_ip = 202; continue _fun00009 }
 111:
            yankee = options == mike;
            romeo = undefined;
            if(yankee) { _fun00010_ip = 125; continue _fun00009 }
 120:
            romeo = mike.type;
 125:
            yankee = _closure1_slot13;
            yankee = yankee.GUILD_VOICE;
            if(!(romeo !== yankee)) { _fun00010_ip = 169; continue _fun00009 }
 139:
            yankee = options == mike;
            offset = undefined;
            if(yankee) { _fun00010_ip = 153; continue _fun00009 }
 148:
            offset = mike.type;
 153:
            mike = _closure1_slot13;
            mike = mike.GUILD_STAGE_VOICE;
            entity = null;
            if(!(offset === mike)) { _fun00010_ip = 202; continue _fun00009 }
 169:
            mike = {};
            kilo = mike;
            backup = tango;
            tango = copyDataProperties(kilo, backup);
            tango = 'channelId';
            mike[tango] = verify;
            tango = 'guildId';
            mike[tango] = oscar;
            entity = mike;
 202:
            if(!(options == entity)) { _fun00010_ip = 208; continue _fun00009 }
 206:
            return options;
 208:
            mike = _closure1_slot15;
            if(!(options != mike)) { _fun00010_ip = 272; continue _fun00009 }
 216:
            oscar = _closure1_slot15;
            tango = oscar.log;
            mike = global;
            offset = mike.JSON;
            verify = offset.stringify;
            offset = verify.bind(offset)(entity);
            mike = mike.HermesInternal;
            verify = mike.concat;
            mike = 'voiceRouteRewriter: has voiceChannelParams = ';
            mike = verify.bind(mike)(offset);
            mike = tango.bind(oscar)(mike);
 272:
            mike = _closure1_slot8;
            verify = mike.lastNonVoiceRoute;
            offset = _closure1_slot12;
            oscar = offset.VOICE_CHAT_CHANNEL_PARTIAL;
            tango = entity.guildId;
            mike = entity.channelId;
            entity = entity.messageId;
            oscar = oscar.bind(offset)(tango, mike, entity);
            mike = global;
            entity = mike.HermesInternal;
            tango = entity.concat;
            entity = '';
            tango = tango.bind(entity)(verify, oscar);
            oscar = golf.pathname;
            entity = null;
            if(!(tango !== oscar)) { _fun00010_ip = 422; continue _fun00009 }
 349:
            oscar = _closure1_slot15;
            if(!(options != oscar)) { _fun00010_ip = 408; continue _fun00009 }
 357:
            oscar = _closure1_slot15;
            report = oscar.log;
            verify = golf.pathname;
            mike = mike.HermesInternal;
            options = mike.concat;
            golf = 'voiceRouteRewriter: rewriting route: ';
            mike = ' -> ';
            mike = options.bind(golf)(verify, mike, tango);
            mike = report.bind(oscar)(mike);
 408:
            mike = {};
            mike['path'] = tango;
            mike['state'] = zulu;
            entity = mike;
 422:
            return entity;
        }
    };
    zulu['voiceRouteRewriter'] = report;
    report = function(argFoo) { // Original name: saveLastRouteListener
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.saveLastRoute;
        mike = argFoo;
        mike = mike.pathname;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['saveLastRouteListener'] = report;
    report = function(argFoo) { // Original name: saveLastNonVoiceRouteListener
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golf = argFoo;
            tango = _closure1_slot17;
            zulu = golf.pathname;
            mike = _closure1_slot16;
            entity = undefined;
            options = tango.bind(entity)(zulu, mike);
            oscar = _closure1_slot7;
            tango = oscar.getChannel;
            zulu = null;
            verify = zulu == options;
            mike = undefined;
            if(verify) { _fun00012_ip = 59; continue _fun00011 }
 48:
            verify = options.params;
            mike = verify.channelId;
 59:
            tango = tango.bind(oscar)(mike);
            mike = zulu == tango;
            verify = undefined;
            if(mike) { _fun00012_ip = 78; continue _fun00011 }
 73:
            verify = tango.type;
 78:
            mike = _closure1_slot13;
            oscar = mike.GUILD_VOICE;
            mike = null;
            if(!(verify !== oscar)) { _fun00012_ip = 144; continue _fun00011 }
 94:
            verify = zulu == tango;
            oscar = undefined;
            if(verify) { _fun00012_ip = 108; continue _fun00011 }
 103:
            oscar = tango.type;
 108:
            tango = _closure1_slot13;
            tango = tango.GUILD_STAGE_VOICE;
            mike = null;
            if(!(oscar !== tango)) { _fun00012_ip = 144; continue _fun00011 }
 124:
            oscar = _closure1_slot20;
            tango = {};
            tango['match'] = options;
            tango['location'] = golf;
            mike = oscar.bind(entity)(tango);
 144:
            if(!(zulu != mike)) { _fun00012_ip = 205; continue _fun00011 }
 148:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 14;
            zulu = oscar[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.saveLastNonVoiceRoute;
            golf = _closure1_slot12;
            oscar = golf.CHANNEL;
            report = mike.guildId;
            mike = mike.channelId;
            mike = oscar.bind(golf)(report, mike);
            mike = zulu.bind(tango)(mike);
 205:
            return entity;
        }
    };
    zulu['saveLastNonVoiceRouteListener'] = report;
    tango = function(argFoo) { // Original name: updateSelectedChannelListener
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            backup = argFoo;
            mike = _closure1_slot18;
            zulu = undefined;
            mike = mike.bind(zulu)(backup);
            offset = null;
            if(!(offset == mike)) { _fun00014_ip = 27; continue _fun00013 }
 25:
            mike = {};
 27:
            options = mike.guildId;
            golf = mike.channelId;
            oscar = mike.messageId;
            report = mike.jumpType;
            result = mike.voiceChannelId;
            output = mike.voiceGuildId;
            sizing = mike.voiceMessageId;
            tango = mike.preserveDrawerState;
            if(!(offset == result)) { _fun00014_ip = 83; continue _fun00013 }
 76:
            if(!(offset != output)) { _fun00014_ip = 793; continue _fun00013 }
 83:
            yankee = _closure1_slot7;
            mike = yankee.getChannel;
            mike = mike.bind(yankee)(result);
            var _closure2_slot0 = mike;
            yankee = offset == mike;
            romeo = undefined;
            if(yankee) { _fun00014_ip = 115; continue _fun00013 }
 110:
            romeo = mike.type;
 115:
            yankee = _closure1_slot13;
            yankee = yankee.GUILD_VOICE;
            if(!(romeo !== yankee)) { _fun00014_ip = 332; continue _fun00013 }
 132:
            yankee = offset == mike;
            romeo = undefined;
            if(yankee) { _fun00014_ip = 146; continue _fun00013 }
 141:
            romeo = mike.type;
 146:
            yankee = _closure1_slot13;
            yankee = yankee.GUILD_STAGE_VOICE;
            if(!(romeo !== yankee)) { _fun00014_ip = 332; continue _fun00013 }
 163:
            yankee = _closure1_slot15;
            if(!(offset != yankee)) { _fun00014_ip = 791; continue _fun00013 }
 174:
            foxtrot = _closure1_slot15;
            romeo = foxtrot.log;
            yankee = offset == mike;
            sequence = undefined;
            if(yankee) { _fun00014_ip = 198; continue _fun00013 }
 193:
            sequence = mike.id;
 198:
            yankee = global;
            echo = yankee.JSON;
            kilo = echo.stringify;
            papa = kilo.bind(echo)(backup);
            update = yankee.JSON;
            echo = update.stringify;
            kilo = {};
            kilo['guildId'] = options;
            kilo['channelId'] = golf;
            kilo['messageId'] = oscar;
            kilo['jumpType'] = report;
            kilo['preserveDrawerState'] = tango;
            kilo['voiceChannelId'] = result;
            kilo['voiceGuildId'] = output;
            kilo['voiceMessageId'] = sizing;
            record = echo.bind(update)(kilo);
            yankee = yankee.HermesInternal;
            source = yankee.concat;
            whiskey = 'UpdateSelectedChannelListener -> !!!VERY BAD!!! channel.id ';
            sierra = ' (voiceChannelId ';
            target = ') is not a voice channel! and yet RouteUtils thinks it is! ';
            yankee = ' ';
            lima = sequence;
            status = result;
            context = yankee;
            config = yankee;
            yankee = whiskey[source](lima, sierra, status, target, papa, context, record, config, sequence);
            yankee = romeo.bind(foxtrot)(yankee);
            _fun00014_ip = 791; continue _fun00013;
 332:
            yankee = _closure1_slot15;
            if(!(offset != yankee)) { _fun00014_ip = 467; continue _fun00013 }
 343:
            foxtrot = _closure1_slot15;
            romeo = foxtrot.verbose;
            yankee = global;
            echo = yankee.JSON;
            kilo = echo.stringify;
            source = kilo.bind(echo)(backup);
            update = yankee.JSON;
            echo = update.stringify;
            kilo = {};
            kilo['guildId'] = options;
            kilo['channelId'] = golf;
            kilo['messageId'] = oscar;
            kilo['jumpType'] = report;
            kilo['preserveDrawerState'] = tango;
            kilo['voiceChannelId'] = result;
            kilo['voiceGuildId'] = output;
            kilo['voiceMessageId'] = sizing;
            status = echo.bind(update)(kilo);
            yankee = yankee.HermesInternal;
            echo = yankee.concat;
            whiskey = 'UpdateSelectedChannelListener -> voice route present! ';
            yankee = ' ';
            lima = source;
            sierra = yankee;
            target = yankee;
            yankee = whiskey[echo](lima, sierra, status, target, papa);
            yankee = romeo.bind(foxtrot)(yankee);
 467:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            yankee = 18;
            yankee = foxtrot[yankee];
            romeo = romeo.bind(zulu)(yankee);
            yankee = romeo.isVoicePanelEnabled;
            yankee = yankee.bind(romeo)(mike);
            if(yankee) { _fun00014_ip = 581; continue _fun00013 }
 501:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            yankee = 17;
            yankee = foxtrot[yankee];
            kilo = romeo.bind(zulu)(yankee);
            yankee = kilo.selectGuild;
            yankee = yankee.bind(kilo)(output);
            yankee = 12;
            yankee = foxtrot[yankee];
            foxtrot = romeo.bind(zulu)(yankee);
            romeo = foxtrot.selectChannel;
            yankee = {};
            yankee['guildId'] = output;
            yankee['channelId'] = result;
            yankee['messageId'] = sizing;
            yankee['jumpType'] = report;
            kilo = true;
            yankee['preserveDrawerState'] = kilo;
            yankee = romeo.bind(foxtrot)(yankee);
 581:
            echo = _closure1_slot0;
            romeo = _closure1_slot2;
            yankee = 19;
            yankee = romeo[yankee];
            kilo = echo.bind(zulu)(yankee);
            foxtrot = kilo.isModalOpen;
            yankee = 16;
            romeo = romeo[yankee];
            update = echo.bind(zulu)(romeo);
            echo = update.getVoiceChannelKey;
            romeo = mike.id;
            romeo = echo.bind(update)(romeo);
            romeo = foxtrot.bind(kilo)(romeo);
            if(romeo) { _fun00014_ip = 733; continue _fun00013 }
 643:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            kilo = 15;
            kilo = foxtrot[kilo];
            echo = romeo.bind(zulu)(kilo);
            kilo = echo.popWithKey;
            update = _closure1_slot0;
            yankee = foxtrot[yankee];
            source = update.bind(zulu)(yankee);
            update = source.getVoiceChannelKey;
            yankee = mike.id;
            yankee = update.bind(source)(yankee);
            yankee = kilo.bind(echo)(yankee);
            yankee = 20;
            yankee = foxtrot[yankee];
            romeo = romeo.bind(zulu)(yankee);
            yankee = romeo.wait;
            verify = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.openGuildVoiceModal;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = yankee.bind(romeo)(verify);
 733:
            verify = mike.isGuildVoice;
            verify = verify.bind(mike)();
            if(!verify) { _fun00014_ip = 750; continue _fun00013 }
 746:
            verify = offset != sizing;
 750:
            if(verify) { _fun00014_ip = 763; continue _fun00013 }
 753:
            yankee = mike.isGuildStageVoice;
            verify = yankee.bind(mike)();
 763:
            if(!verify) { _fun00014_ip = 791; continue _fun00013 }
 766:
            yankee = _closure1_slot5;
            verify = mike.id;
            mike = _closure1_slot14;
            mike = mike.OPEN;
            mike = yankee.bind(zulu)(verify, mike);
 791:
            return zulu;
 793:
            mike = _closure1_slot15;
            if(!(offset != mike)) { _fun00014_ip = 928; continue _fun00013 }
 804:
            yankee = _closure1_slot15;
            verify = yankee.verbose;
            mike = global;
            foxtrot = mike.JSON;
            romeo = foxtrot.stringify;
            kilo = romeo.bind(foxtrot)(backup);
            backup = mike.JSON;
            foxtrot = backup.stringify;
            romeo = {};
            romeo['guildId'] = options;
            romeo['channelId'] = golf;
            romeo['messageId'] = oscar;
            romeo['jumpType'] = report;
            romeo['preserveDrawerState'] = tango;
            romeo['voiceChannelId'] = result;
            romeo['voiceGuildId'] = output;
            romeo['voiceMessageId'] = sizing;
            status = foxtrot.bind(backup)(romeo);
            mike = mike.HermesInternal;
            foxtrot = mike.concat;
            whiskey = 'UpdateSelectedChannelListener -> no voice route present in ';
            mike = ' ';
            lima = kilo;
            sierra = mike;
            target = mike;
            mike = whiskey[foxtrot](lima, sierra, status, target, papa);
            mike = verify.bind(yankee)(mike);
 928:
            verify = _closure1_slot10;
            mike = verify.getLastSelectedChannelId;
            yankee = mike.bind(verify)();
            verify = _closure1_slot7;
            mike = verify.getChannel;
            mike = mike.bind(verify)(yankee);
            verify = offset != mike;
            if(!verify) { _fun00014_ip = 973; continue _fun00013 }
 963:
            yankee = mike.isGuildVoice;
            verify = yankee.bind(mike)();
 973:
            if(verify) { _fun00014_ip = 996; continue _fun00013 }
 976:
            offset = offset != mike;
            if(!offset) { _fun00014_ip = 993; continue _fun00013 }
 983:
            yankee = mike.isGuildStageVoice;
            offset = yankee.bind(mike)();
 993:
            verify = offset;
 996:
            if(!verify) { _fun00014_ip = 1062; continue _fun00013 }
 999:
            offset = _closure1_slot1;
            foxtrot = _closure1_slot2;
            verify = 15;
            verify = foxtrot[verify];
            offset = offset.bind(zulu)(verify);
            verify = offset.popWithKey;
            romeo = _closure1_slot0;
            yankee = 16;
            yankee = foxtrot[yankee];
            romeo = romeo.bind(zulu)(yankee);
            yankee = romeo.getVoiceChannelKey;
            mike = mike.id;
            mike = yankee.bind(romeo)(mike);
            mike = verify.bind(offset)(mike);
 1062:
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 17;
            entity = verify[entity];
            offset = mike.bind(zulu)(entity);
            entity = offset.selectGuild;
            entity = entity.bind(offset)(options);
            entity = 12;
            entity = verify[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.selectChannel;
            entity = {};
            entity['guildId'] = options;
            entity['channelId'] = golf;
            entity['messageId'] = oscar;
            entity['jumpType'] = report;
            entity['preserveDrawerState'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zulu['updateSelectedChannelListener'] = tango;
    zulu['extractParams'] = mike;
    return entity;
})();