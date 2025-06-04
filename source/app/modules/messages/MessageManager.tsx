// app/modules/messages/MessageManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot29 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: fetchMessages
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            result = entity.guildId;
            verify = entity.channelId;
            kiloes = entity.messageId;
            yankee = entity.forceFetch;
            oscard = entity.isPreload;
            backup = entity.jumpType;
            report = entity.skipLocalFetch;
            tangon = entity.avoidInitialScroll;
            offset = null;
            if(!(offset != verify)) { _fun00004_ip = 1492; continue _fun00003 }
 57:
            entity = _closure1_slot22;
            zuuluu = undefined;
            entity = entity.bind(zuuluu)(verify);
            if(entity) { _fun00004_ip = 1492; continue _fun00003 }
 77:
            michal = _closure1_slot11;
            entity = michal.getChannel;
            entity = entity.bind(michal)(verify);
            michal = offset == entity;
            option = undefined;
            if(michal) { _fun00004_ip = 105; continue _fun00003 }
 100:
            option = entity.type;
 105:
            michal = _closure1_slot18;
            michal = michal.GUILD_STORE;
            if(!(option !== michal)) { _fun00004_ip = 1492; continue _fun00003 }
 122:
            option = offset == entity;
            michal = undefined;
            if(option) { _fun00004_ip = 136; continue _fun00003 }
 131:
            michal = entity.type;
 136:
            if(!(offset != michal)) { _fun00004_ip = 171; continue _fun00003 }
 140:
            michal = _closure1_slot21;
            romeon = michal.GUILD_THREADS_ONLY;
            option = romeon.has;
            michal = entity.type;
            michal = option.bind(romeon)(michal);
            if(michal) { _fun00004_ip = 1492; continue _fun00003 }
 171:
            option = _closure1_slot1;
            output = _closure1_slot2;
            romeon = 16;
            michal = output[romeon];
            option = option.bind(zuuluu)(michal);
            michal = option.getOrCreate;
            option = michal.bind(option)(verify);
            foxtra = option.some;
            sizing = _closure1_slot0;
            michal = 17;
            michal = output[michal];
            michal = sizing.bind(zuuluu)(michal);
            michal = michal.messageHasExpiredAttachmentUrl;
            michal = foxtra.bind(option)(michal);
            output = option;
            if(!michal) { _fun00004_ip = 310; continue _fun00003 }
 241:
            foxtra = _closure1_slot24;
            option = foxtra.log;
            michal = 'Found expired attachment link, clearing messages';
            michal = option.bind(foxtra)(michal);
            option = _closure1_slot1;
            michal = _closure1_slot2;
            foxtra = michal[romeon];
            sizing = option.bind(zuuluu)(foxtra);
            foxtra = sizing.clear;
            foxtra = foxtra.bind(sizing)(verify);
            michal = michal[romeon];
            option = option.bind(zuuluu)(michal);
            michal = option.getOrCreate;
            output = michal.bind(option)(verify);
 310:
            michal = output.jumpTargetId;
            michal = offset != michal;
            if(!michal) { _fun00004_ip = 327; continue _fun00003 }
 323:
            michal = offset == kiloes;
 327:
            sizing = output;
            if(!michal) { _fun00004_ip = 422; continue _fun00003 }
 333:
            foxtra = output.mutate;
            michal = {'jumpTargetId': null, 'jumped': false};
            update = _closure1_slot0;
            option = _closure1_slot2;
            echoed = 18;
            echoed = option[echoed];
            echoed = update.bind(zuuluu)(echoed);
            echoed = echoed.JumpTypes;
            echoed = echoed.ANIMATED;
            michal['jumpType'] = echoed;
            michal = foxtra.bind(output)(michal);
            foxtra = _closure1_slot1;
            option = option[romeon];
            foxtra = foxtra.bind(zuuluu)(option);
            option = foxtra.commit;
            option = option.bind(foxtra)(michal);
            sizing = michal;
 422:
            michal = sizing.focusTargetId;
            option = offset != michal;
            if(!option) { _fun00004_ip = 439; continue _fun00003 }
 435:
            option = offset == kiloes;
 439:
            michal = sizing;
            if(!option) { _fun00004_ip = 494; continue _fun00003 }
 445:
            foxtra = sizing.mutate;
            option = {};
            option['focusTargetId'] = offset;
            option = foxtra.bind(sizing)(option);
            sizing = _closure1_slot1;
            foxtra = _closure1_slot2;
            foxtra = foxtra[romeon];
            sizing = sizing.bind(zuuluu)(foxtra);
            foxtra = sizing.commit;
            foxtra = foxtra.bind(sizing)(option);
            michal = option;
 494:
            if(!oscard) { _fun00004_ip = 525; continue _fun00003 }
 497:
            foxtra = _closure1_slot8;
            option = foxtra.isConnected;
            option = option.bind(foxtra)();
            if(option) { _fun00004_ip = 525; continue _fun00003 }
 514:
            foxtra = michal.loadingMore;
            option = true;
            if(!foxtra) { _fun00004_ip = 596; continue _fun00003 }
 525:
            foxtra = michal.loadingMore;
            if(foxtra) { _fun00004_ip = 587; continue _fun00003 }
 534:
            foxtra = michal.ready;
            if(!foxtra) { _fun00004_ip = 552; continue _fun00003 }
 543:
            foxtra = michal.cached;
            if(!foxtra) { _fun00004_ip = 587; continue _fun00003 }
 552:
            foxtra = offset != result;
            if(!foxtra) { _fun00004_ip = 577; continue _fun00003 }
 559:
            output = _closure1_slot12;
            sizing = output.getGuild;
            sizing = sizing.bind(output)(result);
            foxtra = offset == sizing;
 577:
            option = yankee;
            if(foxtra) { _fun00004_ip = 596; continue _fun00003 }
 583:
            option = true;
            _fun00004_ip = 596; continue _fun00003;
 587:
            option = yankee;
            if(!(offset != kiloes)) { _fun00004_ip = 596; continue _fun00003 }
 594:
            option = true;
 596:
            foxtra = _closure1_slot1;
            sizing = _closure1_slot2;
            yankee = 19;
            yankee = sizing[yankee];
            yankee = foxtra.bind(zuuluu)(yankee);
            yankee = yankee.bind(zuuluu)(verify);
            if(!yankee) { _fun00004_ip = 639; continue _fun00003 }
 624:
            sizing = _closure1_slot13;
            foxtra = sizing.hasUnread;
            yankee = foxtra.bind(sizing)(verify);
 639:
            if(!yankee) { _fun00004_ip = 644; continue _fun00003 }
 642:
            option = true;
 644:
            if(!option) { _fun00004_ip = 1492; continue _fun00003 }
 650:
            yankee = _closure1_slot1;
            option = _closure1_slot2;
            option = option[romeon];
            foxtra = yankee.bind(zuuluu)(option);
            yankee = foxtra.commit;
            sizing = michal.mutate;
            option = {};
            romeon = true;
            option['loadingMore'] = romeon;
            option = sizing.bind(michal)(option);
            option = yankee.bind(foxtra)(option);
            if(!(offset != kiloes)) { _fun00004_ip = 773; continue _fun00003 }
 702:
            yankee = _closure1_slot1;
            foxtra = _closure1_slot2;
            option = 20;
            option = foxtra[option];
            foxtra = yankee.bind(zuuluu)(option);
            yankee = foxtra.jumpToMessage;
            option = {};
            option['channelId'] = verify;
            option['messageId'] = kiloes;
            option['flash'] = romeon;
            option['isPreload'] = oscard;
            option['skipLocalFetch'] = report;
            option['jumpType'] = backup;
            option['avoidInitialScroll'] = tangon;
            option = yankee.bind(foxtra)(option);
            _fun00004_ip = 1492; continue _fun00003;
 773:
            if(!(offset != entity)) { _fun00004_ip = 1045; continue _fun00003 }
 780:
            option = entity.isThread;
            option = option.bind(entity)();
            if(!option) { _fun00004_ip = 1045; continue _fun00003 }
 796:
            yankee = _closure1_slot13;
            option = yankee.hasOpenedThread;
            foxtra = option.bind(yankee)(verify);
            option = false;
            yankee = false;
            if(foxtra) { _fun00004_ip = 1039; continue _fun00003 }
 821:
            foxtra = _closure1_slot25;
            if(!(offset == foxtra)) { _fun00004_ip = 882; continue _fun00003 }
 829:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            foxtra = 22;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            sizing = foxtra.Storage;
            kiloes = sizing.get;
            backup = _closure1_slot27;
            foxtra = {};
            foxtra = kiloes.bind(sizing)(backup, foxtra);
            if(!(offset == foxtra)) { _fun00004_ip = 878; continue _fun00003 }
 876:
            foxtra = {};
 878:
            var _closure1_slot25 = foxtra;
 882:
            foxtra = _closure1_slot25;
            foxtra = verify in foxtra;
            yankee = false;
            if(foxtra) { _fun00004_ip = 1039; continue _fun00003 }
 898:
            kiloes = _closure1_slot25;
            foxtra = global;
            sizing = foxtra.Date;
            backup = sizing.now;
            backup = backup.bind(sizing)();
            kiloes[verify] = backup;
            backup = foxtra.Date;
            foxtra = backup.now;
            backup = foxtra.bind(backup)();
            foxtra = _closure1_slot26;
            result = backup - foxtra;
            sizing = _closure1_slot25;
            for(foxtra in sizing)
 958:
            {
 967:
                update = foxtra;
                echoed = _closure1_slot25;
                echoed = echoed[update];
                if(!(echoed < result)) { _fun00004_ip = 958; continue _fun00003 }
 982:
                echoed = _closure1_slot25;
                echoed = delete echoed[update];
                _fun00004_ip = 958; continue _fun00003;
            }
 992:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            foxtra = 22;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            sizing = foxtra.Storage;
            kiloes = sizing.set;
            backup = _closure1_slot27;
            foxtra = _closure1_slot25;
            foxtra = kiloes.bind(sizing)(backup, foxtra);
            yankee = true;
 1039:
            if(yankee) { _fun00004_ip = 1369; continue _fun00003 }
 1045:
            if(!(offset != entity)) { _fun00004_ip = 1266; continue _fun00003 }
 1052:
            offset = entity.isThread;
            offset = offset.bind(entity)();
            if(!offset) { _fun00004_ip = 1266; continue _fun00003 }
 1068:
            romeon = _closure1_slot13;
            yankee = romeon.hasTrackedUnread;
            offset = entity.id;
            offset = yankee.bind(romeon)(offset);
            if(!offset) { _fun00004_ip = 1266; continue _fun00003 }
 1094:
            michal = michal.ready;
            if(michal) { _fun00004_ip = 1266; continue _fun00003 }
 1106:
            yankee = _closure1_slot13;
            offset = yankee.getTrackedAckMessageId;
            michal = entity.id;
            foxtra = offset.bind(yankee)(michal);
            yankee = _closure1_slot24;
            offset = yankee.log;
            kiloes = entity.id;
            michal = global;
            michal = michal.HermesInternal;
            backup = michal.concat;
            romeon = 'Jumping to most recent message in thread ';
            michal = ' - ';
            michal = backup.bind(romeon)(kiloes, michal, foxtra);
            michal = offset.bind(yankee)(michal);
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 20;
            michal = yankee[michal];
            yankee = offset.bind(zuuluu)(michal);
            offset = yankee.fetchMessages;
            michal = {};
            michal['channelId'] = verify;
            romeon = _closure1_slot16;
            michal['limit'] = romeon;
            romeon = {'messageId': null, 'flash': false, 'offset': 1};
            romeon['messageId'] = foxtra;
            michal['jump'] = romeon;
            michal['isPreload'] = oscard;
            michal['skipLocalFetch'] = report;
            michal['avoidInitialScroll'] = tangon;
            michal = offset.bind(yankee)(michal);
            return michal;
 1266:
            offset = _closure1_slot1;
            kiloes = _closure1_slot2;
            michal = 20;
            michal = kiloes[michal];
            yankee = offset.bind(zuuluu)(michal);
            offset = yankee.fetchMessages;
            michal = {};
            michal['channelId'] = verify;
            romeon = _closure1_slot16;
            michal['limit'] = romeon;
            michal['isPreload'] = oscard;
            michal['skipLocalFetch'] = report;
            romeon = {};
            backup = _closure1_slot0;
            foxtra = 18;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            foxtra = foxtra.JumpTypes;
            foxtra = foxtra.ANIMATED;
            romeon['jumpType'] = foxtra;
            michal['jump'] = romeon;
            michal['avoidInitialScroll'] = tangon;
            michal = offset.bind(yankee)(michal);
            return michal;
 1369:
            offset = _closure1_slot24;
            michal = offset.log;
            romeon = entity.id;
            entity = global;
            entity = entity.HermesInternal;
            yankee = entity.concat;
            entity = 'Jumping to start of thread ';
            entity = yankee.bind(entity)(romeon);
            entity = michal.bind(offset)(entity);
            michal = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 20;
            entity = offset[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.fetchMessages;
            entity = {};
            entity['channelId'] = verify;
            golfie = _closure1_slot16;
            entity['limit'] = golfie;
            golfie = {};
            golfie['messageId'] = verify;
            golfie['flash'] = option;
            entity['jump'] = golfie;
            entity['isPreload'] = oscard;
            entity['skipLocalFetch'] = report;
            entity['avoidInitialScroll'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 1492:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: handleConnectionOpen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot14;
            entity = zuuluu.getChannelId;
            tangon = entity.bind(zuuluu)();
            golfie = null;
            if(!(golfie != tangon)) { _fun00006_ip = 317; continue _fun00005 }
 26:
            zuuluu = _closure1_slot11;
            entity = zuuluu.getChannel;
            entity = entity.bind(zuuluu)(tangon);
            if(!(golfie != entity)) { _fun00006_ip = 317; continue _fun00005 }
 47:
            zuuluu = entity.id;
            tangon = _closure1_slot23;
            if(!(golfie != tangon)) { _fun00006_ip = 76; continue _fun00005 }
 60:
            tangon = _closure1_slot23;
            tangon = tangon.channelId;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 214; continue _fun00005 }
 76:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 23;
            tangon = oscard[tangon];
            option = undefined;
            verify = report.bind(option)(tangon);
            oscard = verify.matchPath;
            tangon = global;
            tangon = tangon.location;
            report = tangon.pathname;
            tangon = {};
            backup = _closure1_slot20;
            foxtra = backup.CHANNEL;
            romeon = ':guild';
            yankee = ':channel';
            offset = ':message';
            offset = foxtra.bind(backup)(romeon, yankee, offset);
            tangon['path'] = offset;
            offset = true;
            tangon['exact'] = offset;
            tangon = oscard.bind(verify)(report, tangon);
            oscard = {};
            oscard['channelId'] = zuuluu;
            report = golfie == tangon;
            zuuluu = undefined;
            if(report) { _fun00006_ip = 208; continue _fun00005 }
 188:
            tangon = tangon.params;
            report = golfie == tangon;
            zuuluu = undefined;
            if(report) { _fun00006_ip = 208; continue _fun00005 }
 203:
            zuuluu = tangon.message;
 208:
            oscard['messageId'] = zuuluu;
            _fun00006_ip = 218; continue _fun00005;
 214:
            oscard = _closure1_slot23;
 218:
            tangon = undefined;
            var _closure1_slot23 = tangon;
            report = _closure1_slot30;
            zuuluu = {};
            option = entity.getGuildId;
            option = option.bind(entity)();
            zuuluu['guildId'] = option;
            option = entity.id;
            zuuluu['channelId'] = option;
            option = oscard.messageId;
            zuuluu['messageId'] = option;
            option = oscard.jumpType;
            zuuluu['jumpType'] = option;
            oscard = oscard.messageId;
            oscard = golfie != oscard;
            zuuluu['avoidInitialScroll'] = oscard;
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = _closure1_slot36;
            michal = entity.getGuildId;
            michal = michal.bind(entity)();
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
 317:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: loadSelectedChannelIfNecessary
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot14;
            entity = zuuluu.getChannelId;
            oscard = entity.bind(zuuluu)();
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00008_ip = 201; continue _fun00007 }
 26:
            tangon = _closure1_slot11;
            entity = tangon.getChannel;
            entity = entity.bind(tangon)(oscard);
            if(!(zuuluu != entity)) { _fun00008_ip = 201; continue _fun00007 }
 47:
            report = _closure1_slot9;
            zuuluu = entity.type;
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            if(zuuluu) { _fun00008_ip = 93; continue _fun00007 }
 66:
            golfie = _closure1_slot36;
            zuuluu = entity.getGuildId;
            report = zuuluu.bind(entity)();
            zuuluu = entity.id;
            zuuluu = golfie.bind(tangon)(report, zuuluu);
            _fun00008_ip = 201; continue _fun00007;
 93:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 16;
            zuuluu = golfie[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.getOrCreate;
            report = zuuluu.bind(report)(oscard);
            zuuluu = report.ready;
            if(!zuuluu) { _fun00008_ip = 139; continue _fun00007 }
 133:
            zuuluu = report.hasFetched;
 139:
            if(zuuluu) { _fun00008_ip = 176; continue _fun00007 }
 142:
            report = _closure1_slot30;
            zuuluu = {};
            oscard = entity.getGuildId;
            oscard = oscard.bind(entity)();
            zuuluu['guildId'] = oscard;
            oscard = entity.id;
            zuuluu['channelId'] = oscard;
            zuuluu = report.bind(tangon)(zuuluu);
 176:
            zuuluu = _closure1_slot36;
            michal = entity.getGuildId;
            michal = michal.bind(entity)();
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
 201:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            oscard = michal.guildId;
            report = michal.channelId;
            tangon = michal.messageId;
            entity = michal.jumpType;
            michal = michal.isInitialSetup;
            if(michal) { _fun00010_ip = 78; continue _fun00009 }
 33:
            option = _closure1_slot30;
            golfie = {};
            golfie['guildId'] = oscard;
            golfie['channelId'] = report;
            golfie['messageId'] = tangon;
            golfie['jumpType'] = entity;
            michal = undefined;
            golfie = option.bind(michal)(golfie);
            zuuluu = _closure1_slot36;
            zuuluu = zuuluu.bind(michal)(oscard, report);
            return michal;
 78:
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00010_ip = 118; continue _fun00009 }
 84:
            michal = {};
            michal['channelId'] = report;
            report = zuuluu != tangon;
            zuuluu = undefined;
            if(!report) { _fun00010_ip = 102; continue _fun00009 }
 99:
            zuuluu = tangon;
 102:
            michal['messageId'] = zuuluu;
            michal['jumpType'] = entity;
            _closure1_slot23 = michal;
 118:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: handleVoiceChannelSelect
        entity = argFoo;
        tangon = entity.guildId;
        entity = entity.channelId;
        zuuluu = _closure1_slot30;
        michal = {};
        michal['guildId'] = tangon;
        michal['channelId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: handleJumpToVoiceChannelMessage
        entity = argFoo;
        oscard = entity.guildId;
        report = entity.channelId;
        tangon = entity.messageId;
        entity = entity.jumpType;
        zuuluu = _closure1_slot30;
        michal = {};
        michal['guildId'] = oscard;
        michal['channelId'] = report;
        michal['messageId'] = tangon;
        michal['jumpType'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeLoadChannelSplitView
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argBar;
            zuuluu = _closure1_slot10;
            michal = zuuluu.getCurrentSidebarChannelId;
            tangon = michal.bind(zuuluu)(report);
            michal = null;
            if(!(michal != tangon)) { _fun00012_ip = 72; continue _fun00011 }
 27:
            zuuluu = _closure1_slot30;
            michal = {};
            oscard = argFoo;
            michal['guildId'] = oscard;
            michal['channelId'] = tangon;
            tangon = _closure1_slot10;
            entity = tangon.getCurrentSidebarMessageId;
            entity = entity.bind(tangon)(report);
            michal['messageId'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 72:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function() { // Original name: handleChannelSectionStoreChange
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot14;
            michal = zuuluu.getChannelId;
            tangon = michal.bind(zuuluu)();
            zuuluu = _closure1_slot15;
            michal = zuuluu.getGuildId;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != zuuluu)) { _fun00014_ip = 120; continue _fun00013 }
 37:
            if(!(michal != tangon)) { _fun00014_ip = 120; continue _fun00013 }
 41:
            oscard = _closure1_slot10;
            report = oscard.getSidebarState;
            report = report.bind(oscard)(tangon);
            golfie = michal == report;
            michal = undefined;
            oscard = undefined;
            if(golfie) { _fun00014_ip = 74; continue _fun00013 }
 69:
            oscard = report.type;
 74:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 24;
            report = option[report];
            report = golfie.bind(michal)(report);
            report = report.SidebarType;
            report = report.VIEW_CHANNEL;
            if(!(oscard !== report)) { _fun00014_ip = 120; continue _fun00013 }
 110:
            entity = _closure1_slot36;
            entity = entity.bind(michal)(zuuluu, tangon);
 120:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: handleChannelPreload
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            zuuluu = entity.channelId;
            report = entity.context;
            michal = _closure1_slot17;
            if(!(report === michal)) { _fun00016_ip = 60; continue _fun00015 }
 29:
            oscard = _closure1_slot30;
            report = {};
            report['guildId'] = tangon;
            report['channelId'] = zuuluu;
            michal = undefined;
            report = oscard.bind(michal)(report);
            entity = _closure1_slot36;
            entity = entity.bind(michal)(tangon, zuuluu);
 60:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleChannelCreate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            tangon = entity.channel;
            entity = entity.messageId;
            report = tangon.guild_id;
            michal = null;
            michal = michal != report;
            if(!michal) { _fun00018_ip = 54; continue _fun00017 }
 27:
            oscard = _closure1_slot14;
            zuuluu = oscard.getChannelId;
            oscard = zuuluu.bind(oscard)(report);
            zuuluu = tangon.id;
            michal = oscard === zuuluu;
 54:
            if(!michal) { _fun00018_ip = 90; continue _fun00017 }
 57:
            zuuluu = _closure1_slot30;
            michal = {};
            michal['guildId'] = report;
            tangon = tangon.id;
            michal['channelId'] = tangon;
            michal['messageId'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 90:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo) { // Original name: handleMessageEditEnd
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            michal = entity.response;
            entity = null;
            if(!(entity != michal)) { _fun00020_ip = 258; continue _fun00019 }
 18:
            zuuluu = michal.body;
            if(!(entity != zuuluu)) { _fun00020_ip = 258; continue _fun00019 }
 30:
            zuuluu = michal.body;
            tangon = zuuluu.code;
            zuuluu = _closure1_slot19;
            zuuluu = zuuluu.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED;
            if(!(tangon === zuuluu)) { _fun00020_ip = 254; continue _fun00019 }
 60:
            michal = michal.body;
            romeon = michal.retry_after;
            if(!(entity != romeon)) { _fun00020_ip = 254; continue _fun00019 }
 78:
            zuuluu = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 25;
            michal = offset[michal];
            verify = undefined;
            tangon = zuuluu.bind(verify)(michal);
            zuuluu = tangon.show;
            michal = {};
            oscard = _closure1_slot0;
            report = 26;
            golfie = offset[report];
            golfie = oscard.bind(verify)(golfie);
            yankee = golfie.intl;
            option = yankee.string;
            golfie = offset[report];
            golfie = oscard.bind(verify)(golfie);
            golfie = golfie.t;
            golfie = golfie.Whhv4+;
            golfie = option.bind(yankee)(golfie);
            michal['title'] = golfie;
            golfie = offset[report];
            golfie = oscard.bind(verify)(golfie);
            option = golfie.intl;
            golfie = option.formatToPlainString;
            report = offset[report];
            report = oscard.bind(verify)(report);
            report = report.t;
            oscard = report.qoxdQE;
            report = {};
            verify = global;
            yankee = verify.Math;
            offset = yankee.ceil;
            verify = 60;
            verify = romeon / verify;
            verify = offset.bind(yankee)(verify);
            report['retryAfterMinutes'] = verify;
            report = golfie.bind(option)(oscard, report);
            michal['body'] = report;
            michal = zuuluu.bind(tangon)(michal);
 254:
            michal = undefined;
            return michal;
 258:
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: handleLoadMessagesSuccess
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            golfie = entity.channelId;
            report = entity.jump;
            michal = entity.isStale;
            zuuluu = entity.isPreview;
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00022_ip = 34; continue _fun00021 }
 32:
            zuuluu = false;
 34:
            if(zuuluu) { _fun00022_ip = 272; continue _fun00021 }
 40:
            zuuluu = _closure1_slot28;
            zuuluu = zuuluu[golfie];
            tangon = null;
            tangon = tangon != zuuluu;
            option = 0;
            if(!tangon) { _fun00022_ip = 65; continue _fun00021 }
 62:
            option = zuuluu;
 65:
            zuuluu = global;
            verify = zuuluu.Date;
            tangon = verify.now;
            tangon = tangon.bind(verify)();
            option = tangon - option;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            tangon = 21;
            tangon = offset[tangon];
            tangon = verify.bind(entity)(tangon);
            tangon = tangon.Millis;
            verify = tangon.SECOND;
            tangon = 10;
            tangon = tangon * verify;
            if(!(!(option < tangon))) { _fun00022_ip = 272; continue _fun00021 }
 132:
            tangon = _closure1_slot28;
            option = zuuluu.Date;
            zuuluu = option.now;
            zuuluu = zuuluu.bind(option)();
            tangon[golfie] = zuuluu;
            tangon = _closure1_slot14;
            zuuluu = tangon.getChannelId;
            zuuluu = zuuluu.bind(tangon)();
            option = _closure1_slot10;
            tangon = option.getCurrentSidebarChannelId;
            tangon = tangon.bind(option)(zuuluu);
            if(!michal) { _fun00022_ip = 201; continue _fun00021 }
 187:
            verify = _closure1_slot8;
            option = verify.isConnected;
            michal = option.bind(verify)();
 201:
            if(!michal) { _fun00022_ip = 218; continue _fun00021 }
 204:
            zuuluu = golfie === zuuluu;
            if(zuuluu) { _fun00022_ip = 215; continue _fun00021 }
 211:
            zuuluu = golfie === tangon;
 215:
            michal = zuuluu;
 218:
            if(!michal) { _fun00022_ip = 272; continue _fun00021 }
 221:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 20;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.fetchMessages;
            michal = {};
            michal['channelId'] = golfie;
            oscard = _closure1_slot16;
            michal['limit'] = oscard;
            michal['jump'] = report;
            michal = zuuluu.bind(tangon)(michal);
 272:
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo) { // Original name: handleUploadFail
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            option = entity.channelId;
            golfie = entity.messageId;
            oscard = entity.reason;
            zuuluu = entity.noSendFailed;
            report = entity.shouldSendNotification;
            tangon = null;
            entity = tangon != golfie;
            if(!entity) { _fun00024_ip = 46; continue _fun00023 }
 40:
            michal = true;
            entity = michal !== zuuluu;
 46:
            if(!entity) { _fun00024_ip = 130; continue _fun00023 }
 49:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 27;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            verify = 'MESSAGE_SEND_FAILED';
            entity['type'] = verify;
            entity['channelId'] = option;
            entity['messageId'] = golfie;
            golfie = tangon != oscard;
            tangon = null;
            if(!golfie) { _fun00024_ip = 109; continue _fun00023 }
 106:
            tangon = oscard;
 109:
            entity['reason'] = tangon;
            tangon = false;
            tangon = tangon !== report;
            entity['shouldNotify'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 130:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    entity = function(argFoo) { // Original name: handleAppStateChanged
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            michal = entity.state;
            entity = 'active';
            if(!(entity === michal)) { _fun00026_ip = 83; continue _fun00025 }
 16:
            zuuluu = _closure1_slot14;
            entity = zuuluu.getChannelId;
            report = entity.bind(zuuluu)();
            entity = null;
            if(!(entity != report)) { _fun00026_ip = 79; continue _fun00025 }
 39:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 20;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.fetchNewLocalMessages;
            michal = _closure1_slot16;
            michal = zuuluu.bind(tangon)(report, michal);
            return entity;
 79:
            entity = false;
            return entity;
 83:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot43 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
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
    tangon = tangon.isTextChannel;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot16 = option;
    option = tangon.CURRENT_APP_CONTEXT;
    var _closure1_slot17 = option;
    option = tangon.ChannelTypes;
    var _closure1_slot18 = option;
    option = tangon.AbortCodes;
    var _closure1_slot19 = option;
    option = tangon.Routes;
    var _closure1_slot20 = option;
    tangon = tangon.ChannelTypesSets;
    var _closure1_slot21 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isStaticChannelRoute;
    var _closure1_slot22 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.Logger;
    tangon = verify.prototype;
    option = Object.create(tangon, {constructor: {value: verify}});
    romeon = 'MessageManager';
    foxtra = option;
    tangon = new foxtra[verify](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot24 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    option = tangon.DAY;
    tangon = 90;
    tangon = tangon * option;
    var _closure1_slot26 = tangon;
    tangon = 'viewedThreadIds';
    var _closure1_slot27 = tangon;
    tangon = {};
    var _closure1_slot28 = tangon;
    tangon = 28;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: MessageManager
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                oscard = this;
                backup = 0;
                entity = copyRestArgs(backup);
                option = _closure1_slot3;
                michal = _closure2_slot0;
                report = undefined;
                option = option.bind(report)(oscard, michal);
                yankee = new Array(0);
                backup = yankee;
                foxtra = entity;
                romeon = 0;
                entity = arraySpread(backup, foxtra, romeon);
                entity = _closure1_slot6;
                offset = entity.bind(report)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot29;
                entity = entity.bind(report)();
                if(entity) { _fun00028_ip = 86; continue _fun00027 }
 73:
                entity = offset.apply;
                entity = entity.bind(offset)(oscard, yankee);
                _fun00028_ip = 120; continue _fun00027;
 86:
                golfie = global;
                verify = golfie.Reflect;
                option = verify.construct;
                golfie = _closure1_slot6;
                golfie = golfie.bind(report)(oscard);
                golfie = golfie.constructor;
                entity = option.bind(verify)(offset, yankee, golfie);
 120:
                entity = michal.bind(report)(oscard, entity);
                michal = _closure1_slot30;
                entity['fetchMessages'] = michal;
                michal = _closure1_slot32;
                entity['loadSelectedChannelIfNecessary'] = michal;
                michal = global;
                michal = michal.Map;
                report = michal.prototype;
                report = Object.create(report, {constructor: {value: michal}});
                kiloes = report;
                michal = new kiloes[michal](backup);
                golfie = michal instanceof Object ? michal : report;
                oscard = golfie.set;
                report = _closure1_slot10;
                michal = _closure1_slot37;
                michal = oscard.bind(golfie)(report, michal);
                entity['stores'] = michal;
                michal = {};
                report = _closure1_slot43;
                michal['APP_STATE_UPDATE'] = report;
                report = _closure1_slot31;
                michal['OVERLAY_INITIALIZE'] = report;
                report = _closure1_slot33;
                michal['CHANNEL_SELECT'] = report;
                report = _closure1_slot34;
                michal['VOICE_CHANNEL_SELECT'] = report;
                report = _closure1_slot39;
                michal['THREAD_CREATE'] = report;
                oscard = function() { // Original name: THREAD_LIST_SYNC
                    michal = _closure1_slot32;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['THREAD_LIST_SYNC'] = oscard;
                michal['CHANNEL_CREATE'] = report;
                report = _closure1_slot38;
                michal['CHANNEL_PRELOAD'] = report;
                report = function() { // Original name: GUILD_CREATE
                    michal = _closure1_slot32;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['GUILD_CREATE'] = report;
                report = _closure1_slot40;
                michal['MESSAGE_END_EDIT'] = report;
                report = _closure1_slot41;
                michal['LOAD_MESSAGES_SUCCESS'] = report;
                report = _closure1_slot42;
                michal['UPLOAD_FAIL'] = report;
                report = function() { // Original name: CHANNEL_DELETE
                    michal = _closure1_slot32;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['CHANNEL_DELETE'] = report;
                tangon = function() { // Original name: THREAD_DELETE
                    michal = _closure1_slot32;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['THREAD_DELETE'] = tangon;
                zuuluu = _closure1_slot35;
                michal['CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 27;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.subscribe;
            zuuluu = _closure1_slot31;
            michal = 'CONNECTION_OPEN';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = '_terminate';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 27;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.unsubscribe;
            zuuluu = _closure1_slot31;
            michal = 'CONNECTION_OPEN';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 29;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/MessageManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();