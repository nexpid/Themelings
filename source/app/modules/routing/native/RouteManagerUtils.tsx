// app/modules/routing/native/RouteManagerUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function(argFoo, argBar) { // Original name: matchPathToRoutes
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 11;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.matchPath;
        michal = {'path': null, 'strict': false, 'exact': false};
        entity = argBar;
        michal['path'] = entity;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    report = function(argFoo) { // Original name: extractParamsFromVoiceModalRoute
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            tangon = _closure1_slot17;
            zuuluu = option.pathname;
            entity = _closure1_slot16;
            golfie = undefined;
            verify = tangon.bind(golfie)(zuuluu, entity);
            zuuluu = null;
            tangon = zuuluu == verify;
            entity = undefined;
            if(tangon) { _fun00002_ip = 45; continue _fun00001 }
 39:
            entity = verify.params;
 45:
            if(!(zuuluu == entity)) { _fun00002_ip = 51; continue _fun00001 }
 49:
            entity = {};
 51:
            report = entity.voiceChannelId;
            tangon = entity.voiceGuildId;
            zuuluu = entity.voiceMessageId;
            entity = {};
            oscard = _closure1_slot20;
            michal = {};
            michal['match'] = verify;
            michal['location'] = option;
            offset = oscard.bind(golfie)(michal);
            yankee = entity;
            michal = copyDataProperties(yankee, offset);
            michal = 'voiceChannelId';
            entity[michal] = report;
            michal = 'voiceGuildId';
            entity[michal] = tangon;
            michal = 'voiceMessageId';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot18 = report;
    entity = function(argFoo) { // Original name: selectLastVisitedTextChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            zuuluu = _closure1_slot7;
            michal = zuuluu.getChannel;
            report = _closure1_slot10;
            entity = report.getLastSelectedChannelId;
            entity = entity.bind(report)();
            michal = michal.bind(zuuluu)(entity);
            report = null;
            oscard = report == michal;
            zuuluu = undefined;
            entity = undefined;
            if(oscard) { _fun00004_ip = 52; continue _fun00003 }
 47:
            entity = michal.type;
 52:
            if(!(report != entity)) { _fun00004_ip = 82; continue _fun00003 }
 56:
            oscard = _closure1_slot6;
            option = report == michal;
            entity = undefined;
            if(option) { _fun00004_ip = 74; continue _fun00003 }
 69:
            entity = michal.type;
 74:
            entity = oscard.bind(zuuluu)(entity);
            if(entity) { _fun00004_ip = 137; continue _fun00003 }
 82:
            oscard = _closure1_slot10;
            entity = oscard.getMostRecentSelectedTextChannelId;
            entity = entity.bind(oscard)(golfie);
            if(!(report == entity)) { _fun00004_ip = 135; continue _fun00003 }
 103:
            oscard = _closure1_slot9;
            tangon = oscard.getDefaultChannel;
            tangon = tangon.bind(oscard)(golfie);
            report = report == tangon;
            zuuluu = undefined;
            if(report) { _fun00004_ip = 132; continue _fun00003 }
 127:
            zuuluu = tangon.id;
 132:
            entity = zuuluu;
 135:
            _fun00004_ip = 142; continue _fun00003;
 137:
            entity = michal.id;
 142:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    michal = function(argFoo) { // Original name: extractParams
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = michal.match;
            michal = michal.location;
            report = null;
            if(!(report != entity)) { _fun00006_ip = 263; continue _fun00005 }
 23:
            entity = entity.params;
            option = entity.guildId;
            oscard = entity.channelId;
            tangon = entity.messageId;
            zuuluu = michal.jumpType;
            offset = _closure1_slot0;
            entity = _closure1_slot2;
            yankee = 21;
            entity = entity[yankee];
            verify = undefined;
            entity = offset.bind(verify)(entity);
            entity = entity.JumpTypes;
            entity = entity.INSTANT;
            if(!(zuuluu !== entity)) { _fun00006_ip = 122; continue _fun00005 }
 91:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[yankee];
            entity = zuuluu.bind(verify)(entity);
            entity = entity.JumpTypes;
            zuuluu = entity.ANIMATED;
            _fun00006_ip = 151; continue _fun00005;
 122:
            offset = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[yankee];
            entity = offset.bind(verify)(entity);
            entity = entity.JumpTypes;
            zuuluu = entity.INSTANT;
 151:
            entity = {};
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            offset = 10;
            yankee = yankee[offset];
            romeon = romeon.bind(verify)(yankee);
            yankee = romeon.isValidGuildId;
            yankee = yankee.bind(romeon)(option);
            if(yankee) { _fun00006_ip = 191; continue _fun00005 }
 187:
            option = _closure1_slot11;
 191:
            entity['guildId'] = option;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[offset];
            option = option.bind(verify)(golfie);
            golfie = option.isValidChannelId;
            golfie = golfie.bind(option)(oscard);
            report = null;
            if(!golfie) { _fun00006_ip = 231; continue _fun00005 }
 228:
            report = oscard;
 231:
            entity['channelId'] = report;
            entity['messageId'] = tangon;
            entity['jumpType'] = zuuluu;
            michal = michal.preserveDrawerState;
            michal = !michal;
            michal = !michal;
            entity['preserveDrawerState'] = michal;
            return entity;
 263:
            entity = {'guildId': null, 'channelId': null, 'messageId': null, 'jumpType': null, 'preserveDrawerState': false};
            zuuluu = _closure1_slot11;
            entity['guildId'] = zuuluu;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 21;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.JumpTypes;
            michal = michal.ANIMATED;
            entity['jumpType'] = michal;
            return entity;
        }
    };
    var _closure1_slot20 = michal;
    entity = ['channelId', 'guildId'];
    var _closure1_slot3 = entity;
    golfie = global;
    romeon = golfie.Object;
    yankee = romeon.defineProperty;
    oscard = {};
    sizing = true;
    oscard['value'] = sizing;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 1;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.setVoiceChatDrawerState;
    var _closure1_slot5 = oscard;
    oscard = 2;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.isGuildSelectableChannelType;
    var _closure1_slot6 = oscard;
    oscard = 3;
    oscard = verify[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 4;
    oscard = verify[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 5;
    oscard = verify[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot9 = oscard;
    oscard = 6;
    oscard = verify[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot10 = oscard;
    oscard = 7;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    yankee = oscard.ME;
    var _closure1_slot11 = yankee;
    backup = oscard.Routes;
    var _closure1_slot12 = backup;
    oscard = oscard.ChannelTypes;
    var _closure1_slot13 = oscard;
    oscard = 8;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.VoiceChatDrawerState;
    var _closure1_slot14 = oscard;
    oscard = 9;
    oscard = verify[oscard];
    yankee = offset.bind(entity)(oscard);
    oscard = yankee.prototype;
    offset = Object.create(oscard, {constructor: {value: yankee}});
    echoed = 'RouteUtils';
    update = offset;
    oscard = new update[yankee](echoed, result);
    oscard = oscard instanceof Object ? oscard : offset;
    var _closure1_slot15 = oscard;
    foxtra = backup.CHANNEL;
    offset = 10;
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    yankee = oscard.RouteParam;
    oscard = yankee.guildId;
    romeon = oscard.bind(yankee)();
    oscard = verify[offset];
    oscard = option.bind(entity)(oscard);
    kiloes = oscard.RouteParam;
    yankee = kiloes.channelId;
    oscard = {};
    oscard['optional'] = sizing;
    yankee = yankee.bind(kiloes)(oscard);
    oscard = ':messageId?';
    oscard = foxtra.bind(backup)(romeon, yankee, oscard);
    foxtra = backup.VOICE_CHAT_CHANNEL_PARTIAL;
    yankee = verify[offset];
    yankee = option.bind(entity)(yankee);
    kiloes = yankee.RouteParam;
    romeon = kiloes.guildId;
    yankee = {};
    sizing = 'voiceGuildId';
    yankee['name'] = sizing;
    romeon = romeon.bind(kiloes)(yankee);
    offset = verify[offset];
    offset = option.bind(entity)(offset);
    kiloes = offset.RouteParam;
    yankee = kiloes.channelId;
    offset = {};
    sizing = 'voiceChannelId';
    offset['name'] = sizing;
    yankee = yankee.bind(kiloes)(offset);
    offset = ':voiceMessageId?';
    yankee = foxtra.bind(backup)(romeon, yankee, offset);
    golfie = golfie.HermesInternal;
    offset = golfie.concat;
    golfie = '';
    offset = offset.bind(golfie)(oscard, yankee);
    golfie = new Array(2);
    golfie[0] = offset;
    golfie[1] = oscard;
    var _closure1_slot16 = golfie;
    golfie = 22;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/routing/native/RouteManagerUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['MAIN_DRAWER_ROUTES'] = oscard;
    zuuluu['extractParamsFromVoiceModalRoute'] = report;
    report = function(argFoo) { // Original name: popVoiceRoute
        verify = argFoo;
        entity = _closure1_slot8;
        report = entity.lastNonVoiceRoute;
        tangon = _closure1_slot15;
        zuuluu = tangon.log;
        entity = global;
        entity = entity.HermesInternal;
        oscard = entity.concat;
        entity = 'popVoiceRoute: last non-voice route is ';
        entity = oscard.bind(entity)(report);
        entity = zuuluu.bind(tangon)(entity);
        oscard = _closure1_slot1;
        tangon = _closure1_slot2;
        entity = 12;
        zuuluu = tangon[entity];
        entity = undefined;
        option = oscard.bind(entity)(zuuluu);
        golfie = option.selectChannel;
        zuuluu = {};
        zuuluu['guildId'] = verify;
        oscard = _closure1_slot19;
        oscard = oscard.bind(entity)(verify);
        zuuluu['channelId'] = oscard;
        oscard = true;
        zuuluu['preserveDrawerState'] = oscard;
        zuuluu = golfie.bind(option)(zuuluu);
        zuuluu = _closure1_slot0;
        michal = 13;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.transitionTo;
        michal = {};
        michal['preserveDrawerState'] = oscard;
        michal = zuuluu.bind(tangon)(report, michal);
        return entity;
    };
    zuuluu['popVoiceRoute'] = report;
    report = function(argFoo, argBar) { // Original name: transitionToVoiceRoute
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            entity = _closure1_slot8;
            backup = entity.defaultRoute;
            tangon = _closure1_slot17;
            zuuluu = _closure1_slot16;
            entity = undefined;
            golfie = tangon.bind(entity)(backup, zuuluu);
            tangon = null;
            option = tangon == golfie;
            zuuluu = undefined;
            if(option) { _fun00008_ip = 52; continue _fun00007 }
 46:
            zuuluu = golfie.params;
 52:
            if(!(tangon == zuuluu)) { _fun00008_ip = 58; continue _fun00007 }
 56:
            zuuluu = {};
 58:
            yankee = zuuluu.voiceChannelId;
            option = _closure1_slot15;
            golfie = option.log;
            zuuluu = global;
            tangon = zuuluu.HermesInternal;
            foxtra = tangon.concat;
            ctrled = 'transitionToVoiceRoute(<';
            update = '>, <';
            result = '>), current route ';
            sizing = ' has voiceChannelId ';
            source = oscard;
            echoed = report;
            output = backup;
            kiloes = yankee;
            tangon = ctrled[foxtra](source, update, echoed, result, output, sizing, kiloes, backup);
            tangon = golfie.bind(option)(tangon);
            if(!(yankee === report)) { _fun00008_ip = 192; continue _fun00007 }
 136:
            golfie = _closure1_slot15;
            tangon = golfie.log;
            zuuluu = zuuluu.HermesInternal;
            offset = zuuluu.concat;
            ctrled = 'transitionToVoiceRoute -> ';
            update = ' === ';
            result = '. staying where we are';
            source = yankee;
            echoed = report;
            zuuluu = ctrled[offset](source, update, echoed, result, output);
            zuuluu = tangon.bind(golfie)(zuuluu);
            _fun00008_ip = 245; continue _fun00007;
 192:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 13;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.transitionToGuild;
            michal = {};
            golfie = true;
            michal['preserveDrawerState'] = golfie;
            ctrled = tangon;
            source = oscard;
            update = report;
            echoed = undefined;
            result = michal;
            michal = ctrled[zuuluu](source, update, echoed, result, output);
 245:
            return entity;
        }
    };
    zuuluu['transitionToVoiceRoute'] = report;
    report = function(argFoo) { // Original name: voiceRouteRewriter
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            zuuluu = golfie.state;
            michal = _closure1_slot20;
            entity = {};
            option = _closure1_slot17;
            oscard = golfie.pathname;
            tangon = _closure1_slot16;
            offset = undefined;
            tangon = option.bind(offset)(oscard, tangon);
            entity['match'] = tangon;
            entity['location'] = golfie;
            tangon = michal.bind(offset)(entity);
            verify = tangon.channelId;
            oscard = tangon.guildId;
            michal = _closure1_slot4;
            entity = _closure1_slot3;
            tangon = michal.bind(offset)(tangon, entity);
            michal = _closure1_slot7;
            entity = michal.getChannel;
            michal = entity.bind(michal)(verify);
            option = null;
            yankee = option == verify;
            entity = null;
            if(yankee) { _fun00010_ip = 202; continue _fun00009 }
 102:
            yankee = option == oscard;
            entity = null;
            if(yankee) { _fun00010_ip = 202; continue _fun00009 }
 111:
            yankee = option == michal;
            romeon = undefined;
            if(yankee) { _fun00010_ip = 125; continue _fun00009 }
 120:
            romeon = michal.type;
 125:
            yankee = _closure1_slot13;
            yankee = yankee.GUILD_VOICE;
            if(!(romeon !== yankee)) { _fun00010_ip = 169; continue _fun00009 }
 139:
            yankee = option == michal;
            offset = undefined;
            if(yankee) { _fun00010_ip = 153; continue _fun00009 }
 148:
            offset = michal.type;
 153:
            michal = _closure1_slot13;
            michal = michal.GUILD_STAGE_VOICE;
            entity = null;
            if(!(offset === michal)) { _fun00010_ip = 202; continue _fun00009 }
 169:
            michal = {};
            kiloes = michal;
            backup = tangon;
            tangon = copyDataProperties(kiloes, backup);
            tangon = 'channelId';
            michal[tangon] = verify;
            tangon = 'guildId';
            michal[tangon] = oscard;
            entity = michal;
 202:
            if(!(option == entity)) { _fun00010_ip = 208; continue _fun00009 }
 206:
            return option;
 208:
            michal = _closure1_slot15;
            if(!(option != michal)) { _fun00010_ip = 272; continue _fun00009 }
 216:
            oscard = _closure1_slot15;
            tangon = oscard.log;
            michal = global;
            offset = michal.JSON;
            verify = offset.stringify;
            offset = verify.bind(offset)(entity);
            michal = michal.HermesInternal;
            verify = michal.concat;
            michal = 'voiceRouteRewriter: has voiceChannelParams = ';
            michal = verify.bind(michal)(offset);
            michal = tangon.bind(oscard)(michal);
 272:
            michal = _closure1_slot8;
            verify = michal.lastNonVoiceRoute;
            offset = _closure1_slot12;
            oscard = offset.VOICE_CHAT_CHANNEL_PARTIAL;
            tangon = entity.guildId;
            michal = entity.channelId;
            entity = entity.messageId;
            oscard = oscard.bind(offset)(tangon, michal, entity);
            michal = global;
            entity = michal.HermesInternal;
            tangon = entity.concat;
            entity = '';
            tangon = tangon.bind(entity)(verify, oscard);
            oscard = golfie.pathname;
            entity = null;
            if(!(tangon !== oscard)) { _fun00010_ip = 422; continue _fun00009 }
 349:
            oscard = _closure1_slot15;
            if(!(option != oscard)) { _fun00010_ip = 408; continue _fun00009 }
 357:
            oscard = _closure1_slot15;
            report = oscard.log;
            verify = golfie.pathname;
            michal = michal.HermesInternal;
            option = michal.concat;
            golfie = 'voiceRouteRewriter: rewriting route: ';
            michal = ' -> ';
            michal = option.bind(golfie)(verify, michal, tangon);
            michal = report.bind(oscard)(michal);
 408:
            michal = {};
            michal['path'] = tangon;
            michal['state'] = zuuluu;
            entity = michal;
 422:
            return entity;
        }
    };
    zuuluu['voiceRouteRewriter'] = report;
    report = function(argFoo) { // Original name: saveLastRouteListener
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 14;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.saveLastRoute;
        michal = argFoo;
        michal = michal.pathname;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['saveLastRouteListener'] = report;
    report = function(argFoo) { // Original name: saveLastNonVoiceRouteListener
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argFoo;
            tangon = _closure1_slot17;
            zuuluu = golfie.pathname;
            michal = _closure1_slot16;
            entity = undefined;
            option = tangon.bind(entity)(zuuluu, michal);
            oscard = _closure1_slot7;
            tangon = oscard.getChannel;
            zuuluu = null;
            verify = zuuluu == option;
            michal = undefined;
            if(verify) { _fun00012_ip = 59; continue _fun00011 }
 48:
            verify = option.params;
            michal = verify.channelId;
 59:
            tangon = tangon.bind(oscard)(michal);
            michal = zuuluu == tangon;
            verify = undefined;
            if(michal) { _fun00012_ip = 78; continue _fun00011 }
 73:
            verify = tangon.type;
 78:
            michal = _closure1_slot13;
            oscard = michal.GUILD_VOICE;
            michal = null;
            if(!(verify !== oscard)) { _fun00012_ip = 144; continue _fun00011 }
 94:
            verify = zuuluu == tangon;
            oscard = undefined;
            if(verify) { _fun00012_ip = 108; continue _fun00011 }
 103:
            oscard = tangon.type;
 108:
            tangon = _closure1_slot13;
            tangon = tangon.GUILD_STAGE_VOICE;
            michal = null;
            if(!(oscard !== tangon)) { _fun00012_ip = 144; continue _fun00011 }
 124:
            oscard = _closure1_slot20;
            tangon = {};
            tangon['match'] = option;
            tangon['location'] = golfie;
            michal = oscard.bind(entity)(tangon);
 144:
            if(!(zuuluu != michal)) { _fun00012_ip = 205; continue _fun00011 }
 148:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 14;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.saveLastNonVoiceRoute;
            golfie = _closure1_slot12;
            oscard = golfie.CHANNEL;
            report = michal.guildId;
            michal = michal.channelId;
            michal = oscard.bind(golfie)(report, michal);
            michal = zuuluu.bind(tangon)(michal);
 205:
            return entity;
        }
    };
    zuuluu['saveLastNonVoiceRouteListener'] = report;
    tangon = function(argFoo) { // Original name: updateSelectedChannelListener
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            backup = argFoo;
            michal = _closure1_slot18;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(backup);
            offset = null;
            if(!(offset == michal)) { _fun00014_ip = 27; continue _fun00013 }
 25:
            michal = {};
 27:
            option = michal.guildId;
            golfie = michal.channelId;
            oscard = michal.messageId;
            report = michal.jumpType;
            result = michal.voiceChannelId;
            output = michal.voiceGuildId;
            sizing = michal.voiceMessageId;
            tangon = michal.preserveDrawerState;
            if(!(offset == result)) { _fun00014_ip = 83; continue _fun00013 }
 76:
            if(!(offset != output)) { _fun00014_ip = 793; continue _fun00013 }
 83:
            yankee = _closure1_slot7;
            michal = yankee.getChannel;
            michal = michal.bind(yankee)(result);
            var _closure2_slot0 = michal;
            yankee = offset == michal;
            romeon = undefined;
            if(yankee) { _fun00014_ip = 115; continue _fun00013 }
 110:
            romeon = michal.type;
 115:
            yankee = _closure1_slot13;
            yankee = yankee.GUILD_VOICE;
            if(!(romeon !== yankee)) { _fun00014_ip = 332; continue _fun00013 }
 132:
            yankee = offset == michal;
            romeon = undefined;
            if(yankee) { _fun00014_ip = 146; continue _fun00013 }
 141:
            romeon = michal.type;
 146:
            yankee = _closure1_slot13;
            yankee = yankee.GUILD_STAGE_VOICE;
            if(!(romeon !== yankee)) { _fun00014_ip = 332; continue _fun00013 }
 163:
            yankee = _closure1_slot15;
            if(!(offset != yankee)) { _fun00014_ip = 791; continue _fun00013 }
 174:
            foxtra = _closure1_slot15;
            romeon = foxtra.log;
            yankee = offset == michal;
            sequen = undefined;
            if(yankee) { _fun00014_ip = 198; continue _fun00013 }
 193:
            sequen = michal.id;
 198:
            yankee = global;
            echoed = yankee.JSON;
            kiloes = echoed.stringify;
            papara = kiloes.bind(echoed)(backup);
            update = yankee.JSON;
            echoed = update.stringify;
            kiloes = {};
            kiloes['guildId'] = option;
            kiloes['channelId'] = golfie;
            kiloes['messageId'] = oscard;
            kiloes['jumpType'] = report;
            kiloes['preserveDrawerState'] = tangon;
            kiloes['voiceChannelId'] = result;
            kiloes['voiceGuildId'] = output;
            kiloes['voiceMessageId'] = sizing;
            record = echoed.bind(update)(kiloes);
            yankee = yankee.HermesInternal;
            source = yankee.concat;
            whisks = 'UpdateSelectedChannelListener -> !!!VERY BAD!!! channel.id ';
            sierra = ' (voiceChannelId ';
            target = ') is not a voice channel! and yet RouteUtils thinks it is! ';
            yankee = ' ';
            limora = sequen;
            status = result;
            cntext = yankee;
            config = yankee;
            yankee = whisks[source](limora, sierra, status, target, papara, cntext, record, config, sequen);
            yankee = romeon.bind(foxtra)(yankee);
            _fun00014_ip = 791; continue _fun00013;
 332:
            yankee = _closure1_slot15;
            if(!(offset != yankee)) { _fun00014_ip = 467; continue _fun00013 }
 343:
            foxtra = _closure1_slot15;
            romeon = foxtra.verbose;
            yankee = global;
            echoed = yankee.JSON;
            kiloes = echoed.stringify;
            source = kiloes.bind(echoed)(backup);
            update = yankee.JSON;
            echoed = update.stringify;
            kiloes = {};
            kiloes['guildId'] = option;
            kiloes['channelId'] = golfie;
            kiloes['messageId'] = oscard;
            kiloes['jumpType'] = report;
            kiloes['preserveDrawerState'] = tangon;
            kiloes['voiceChannelId'] = result;
            kiloes['voiceGuildId'] = output;
            kiloes['voiceMessageId'] = sizing;
            status = echoed.bind(update)(kiloes);
            yankee = yankee.HermesInternal;
            echoed = yankee.concat;
            whisks = 'UpdateSelectedChannelListener -> voice route present! ';
            yankee = ' ';
            limora = source;
            sierra = yankee;
            target = yankee;
            yankee = whisks[echoed](limora, sierra, status, target, papara);
            yankee = romeon.bind(foxtra)(yankee);
 467:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 18;
            yankee = foxtra[yankee];
            romeon = romeon.bind(zuuluu)(yankee);
            yankee = romeon.isVoicePanelEnabled;
            yankee = yankee.bind(romeon)(michal);
            if(yankee) { _fun00014_ip = 581; continue _fun00013 }
 501:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            yankee = 17;
            yankee = foxtra[yankee];
            kiloes = romeon.bind(zuuluu)(yankee);
            yankee = kiloes.selectGuild;
            yankee = yankee.bind(kiloes)(output);
            yankee = 12;
            yankee = foxtra[yankee];
            foxtra = romeon.bind(zuuluu)(yankee);
            romeon = foxtra.selectChannel;
            yankee = {};
            yankee['guildId'] = output;
            yankee['channelId'] = result;
            yankee['messageId'] = sizing;
            yankee['jumpType'] = report;
            kiloes = true;
            yankee['preserveDrawerState'] = kiloes;
            yankee = romeon.bind(foxtra)(yankee);
 581:
            echoed = _closure1_slot0;
            romeon = _closure1_slot2;
            yankee = 19;
            yankee = romeon[yankee];
            kiloes = echoed.bind(zuuluu)(yankee);
            foxtra = kiloes.isModalOpen;
            yankee = 16;
            romeon = romeon[yankee];
            update = echoed.bind(zuuluu)(romeon);
            echoed = update.getVoiceChannelKey;
            romeon = michal.id;
            romeon = echoed.bind(update)(romeon);
            romeon = foxtra.bind(kiloes)(romeon);
            if(romeon) { _fun00014_ip = 733; continue _fun00013 }
 643:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            kiloes = 15;
            kiloes = foxtra[kiloes];
            echoed = romeon.bind(zuuluu)(kiloes);
            kiloes = echoed.popWithKey;
            update = _closure1_slot0;
            yankee = foxtra[yankee];
            source = update.bind(zuuluu)(yankee);
            update = source.getVoiceChannelKey;
            yankee = michal.id;
            yankee = update.bind(source)(yankee);
            yankee = kiloes.bind(echoed)(yankee);
            yankee = 20;
            yankee = foxtra[yankee];
            romeon = romeon.bind(zuuluu)(yankee);
            yankee = romeon.wait;
            verify = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openGuildVoiceModal;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            verify = yankee.bind(romeon)(verify);
 733:
            verify = michal.isGuildVoice;
            verify = verify.bind(michal)();
            if(!verify) { _fun00014_ip = 750; continue _fun00013 }
 746:
            verify = offset != sizing;
 750:
            if(verify) { _fun00014_ip = 763; continue _fun00013 }
 753:
            yankee = michal.isGuildStageVoice;
            verify = yankee.bind(michal)();
 763:
            if(!verify) { _fun00014_ip = 791; continue _fun00013 }
 766:
            yankee = _closure1_slot5;
            verify = michal.id;
            michal = _closure1_slot14;
            michal = michal.OPEN;
            michal = yankee.bind(zuuluu)(verify, michal);
 791:
            return zuuluu;
 793:
            michal = _closure1_slot15;
            if(!(offset != michal)) { _fun00014_ip = 928; continue _fun00013 }
 804:
            yankee = _closure1_slot15;
            verify = yankee.verbose;
            michal = global;
            foxtra = michal.JSON;
            romeon = foxtra.stringify;
            kiloes = romeon.bind(foxtra)(backup);
            backup = michal.JSON;
            foxtra = backup.stringify;
            romeon = {};
            romeon['guildId'] = option;
            romeon['channelId'] = golfie;
            romeon['messageId'] = oscard;
            romeon['jumpType'] = report;
            romeon['preserveDrawerState'] = tangon;
            romeon['voiceChannelId'] = result;
            romeon['voiceGuildId'] = output;
            romeon['voiceMessageId'] = sizing;
            status = foxtra.bind(backup)(romeon);
            michal = michal.HermesInternal;
            foxtra = michal.concat;
            whisks = 'UpdateSelectedChannelListener -> no voice route present in ';
            michal = ' ';
            limora = kiloes;
            sierra = michal;
            target = michal;
            michal = whisks[foxtra](limora, sierra, status, target, papara);
            michal = verify.bind(yankee)(michal);
 928:
            verify = _closure1_slot10;
            michal = verify.getLastSelectedChannelId;
            yankee = michal.bind(verify)();
            verify = _closure1_slot7;
            michal = verify.getChannel;
            michal = michal.bind(verify)(yankee);
            verify = offset != michal;
            if(!verify) { _fun00014_ip = 973; continue _fun00013 }
 963:
            yankee = michal.isGuildVoice;
            verify = yankee.bind(michal)();
 973:
            if(verify) { _fun00014_ip = 996; continue _fun00013 }
 976:
            offset = offset != michal;
            if(!offset) { _fun00014_ip = 993; continue _fun00013 }
 983:
            yankee = michal.isGuildStageVoice;
            offset = yankee.bind(michal)();
 993:
            verify = offset;
 996:
            if(!verify) { _fun00014_ip = 1062; continue _fun00013 }
 999:
            offset = _closure1_slot1;
            foxtra = _closure1_slot2;
            verify = 15;
            verify = foxtra[verify];
            offset = offset.bind(zuuluu)(verify);
            verify = offset.popWithKey;
            romeon = _closure1_slot0;
            yankee = 16;
            yankee = foxtra[yankee];
            romeon = romeon.bind(zuuluu)(yankee);
            yankee = romeon.getVoiceChannelKey;
            michal = michal.id;
            michal = yankee.bind(romeon)(michal);
            michal = verify.bind(offset)(michal);
 1062:
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 17;
            entity = verify[entity];
            offset = michal.bind(zuuluu)(entity);
            entity = offset.selectGuild;
            entity = entity.bind(offset)(option);
            entity = 12;
            entity = verify[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.selectChannel;
            entity = {};
            entity['guildId'] = option;
            entity['channelId'] = golfie;
            entity['messageId'] = oscard;
            entity['jumpType'] = report;
            entity['preserveDrawerState'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['updateSelectedChannelListener'] = tangon;
    zuuluu['extractParams'] = michal;
    return entity;
})();