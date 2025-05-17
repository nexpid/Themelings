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
            _closure1_slot28 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: fetchMessages
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            result = entity.guildId;
            offset = entity.channelId;
            kiloes = entity.messageId;
            yankee = entity.forceFetch;
            golfie = entity.isPreload;
            backup = entity.jumpType;
            oscard = entity.skipLocalFetch;
            michal = entity.logFailures;
            tangon = entity.skipIfAlreadyFetched;
            option = null;
            if(!(option == offset)) { _fun00004_ip = 97; continue _fun00003 }
 62:
            if(!michal) { _fun00004_ip = 1643; continue _fun00003 }
 68:
            report = _closure1_slot23;
            zuuluu = report.log;
            entity = 'Skipping fetch because channelId is null';
            entity = zuuluu.bind(report)(entity);
            _fun00004_ip = 1643; continue _fun00003;
 97:
            zuuluu = _closure1_slot22;
            report = undefined;
            zuuluu = zuuluu.bind(report)(offset);
            if(zuuluu) { _fun00004_ip = 1619; continue _fun00003 }
 117:
            verify = _closure1_slot11;
            zuuluu = verify.getChannel;
            zuuluu = zuuluu.bind(verify)(offset);
            verify = option == zuuluu;
            romeon = undefined;
            if(verify) { _fun00004_ip = 145; continue _fun00003 }
 140:
            romeon = zuuluu.type;
 145:
            verify = _closure1_slot18;
            verify = verify.GUILD_STORE;
            if(!(romeon !== verify)) { _fun00004_ip = 1593; continue _fun00003 }
 162:
            romeon = option == zuuluu;
            verify = undefined;
            if(romeon) { _fun00004_ip = 176; continue _fun00003 }
 171:
            verify = zuuluu.type;
 176:
            if(!(option != verify)) { _fun00004_ip = 211; continue _fun00003 }
 180:
            verify = _closure1_slot21;
            foxtra = verify.GUILD_THREADS_ONLY;
            romeon = foxtra.has;
            verify = zuuluu.type;
            verify = romeon.bind(foxtra)(verify);
            if(verify) { _fun00004_ip = 1593; continue _fun00003 }
 211:
            foxtra = _closure1_slot1;
            verify = _closure1_slot2;
            romeon = 16;
            verify = verify[romeon];
            foxtra = foxtra.bind(report)(verify);
            verify = foxtra.getOrCreate;
            verify = verify.bind(foxtra)(offset);
            foxtra = verify.hasFetched;
            if(!foxtra) { _fun00004_ip = 257; continue _fun00003 }
 251:
            if(tangon) { _fun00004_ip = 1643; continue _fun00003 }
 257:
            foxtra = verify.some;
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            tangon = 17;
            tangon = output[tangon];
            tangon = sizing.bind(report)(tangon);
            tangon = tangon.messageHasExpiredAttachmentUrl;
            tangon = foxtra.bind(verify)(tangon);
            output = verify;
            if(!tangon) { _fun00004_ip = 369; continue _fun00003 }
 300:
            foxtra = _closure1_slot23;
            verify = foxtra.log;
            tangon = 'Found expired attachment link, clearing messages';
            tangon = verify.bind(foxtra)(tangon);
            verify = _closure1_slot1;
            tangon = _closure1_slot2;
            foxtra = tangon[romeon];
            sizing = verify.bind(report)(foxtra);
            foxtra = sizing.clear;
            foxtra = foxtra.bind(sizing)(offset);
            tangon = tangon[romeon];
            verify = verify.bind(report)(tangon);
            tangon = verify.getOrCreate;
            output = tangon.bind(verify)(offset);
 369:
            tangon = output.jumpTargetId;
            tangon = option != tangon;
            if(!tangon) { _fun00004_ip = 386; continue _fun00003 }
 382:
            tangon = option == kiloes;
 386:
            sizing = output;
            if(!tangon) { _fun00004_ip = 481; continue _fun00003 }
 392:
            foxtra = output.mutate;
            tangon = {'jumpTargetId': null, 'jumped': false};
            update = _closure1_slot0;
            verify = _closure1_slot2;
            echoed = 18;
            echoed = verify[echoed];
            echoed = update.bind(report)(echoed);
            echoed = echoed.JumpTypes;
            echoed = echoed.ANIMATED;
            tangon['jumpType'] = echoed;
            tangon = foxtra.bind(output)(tangon);
            foxtra = _closure1_slot1;
            verify = verify[romeon];
            foxtra = foxtra.bind(report)(verify);
            verify = foxtra.commit;
            verify = verify.bind(foxtra)(tangon);
            sizing = tangon;
 481:
            tangon = sizing.focusTargetId;
            verify = option != tangon;
            if(!verify) { _fun00004_ip = 498; continue _fun00003 }
 494:
            verify = option == kiloes;
 498:
            tangon = sizing;
            if(!verify) { _fun00004_ip = 553; continue _fun00003 }
 504:
            foxtra = sizing.mutate;
            verify = {};
            verify['focusTargetId'] = option;
            verify = foxtra.bind(sizing)(verify);
            sizing = _closure1_slot1;
            foxtra = _closure1_slot2;
            foxtra = foxtra[romeon];
            sizing = sizing.bind(report)(foxtra);
            foxtra = sizing.commit;
            foxtra = foxtra.bind(sizing)(verify);
            tangon = verify;
 553:
            if(!golfie) { _fun00004_ip = 587; continue _fun00003 }
 556:
            foxtra = _closure1_slot8;
            verify = foxtra.isConnected;
            verify = verify.bind(foxtra)();
            if(verify) { _fun00004_ip = 587; continue _fun00003 }
 573:
            foxtra = tangon.loadingMore;
            verify = true;
            if(!foxtra) { _fun00004_ip = 717; continue _fun00003 }
 587:
            foxtra = tangon.loadingMore;
            if(foxtra) { _fun00004_ip = 678; continue _fun00003 }
 596:
            foxtra = tangon.ready;
            if(!foxtra) { _fun00004_ip = 614; continue _fun00003 }
 605:
            foxtra = tangon.cached;
            if(!foxtra) { _fun00004_ip = 678; continue _fun00003 }
 614:
            foxtra = option == result;
            verify = true;
            if(foxtra) { _fun00004_ip = 717; continue _fun00003 }
 623:
            output = _closure1_slot12;
            foxtra = output.getGuild;
            foxtra = foxtra.bind(output)(result);
            foxtra = option != foxtra;
            verify = true;
            if(foxtra) { _fun00004_ip = 717; continue _fun00003 }
 646:
            verify = yankee;
            if(!michal) { _fun00004_ip = 717; continue _fun00003 }
 652:
            output = _closure1_slot23;
            sizing = output.log;
            foxtra = 'Skipping fetch we are connected and have loaded messages';
            foxtra = sizing.bind(output)(foxtra);
            verify = yankee;
            _fun00004_ip = 717; continue _fun00003;
 678:
            foxtra = option != kiloes;
            verify = true;
            if(foxtra) { _fun00004_ip = 717; continue _fun00003 }
 687:
            verify = yankee;
            if(!michal) { _fun00004_ip = 717; continue _fun00003 }
 693:
            output = _closure1_slot23;
            sizing = output.log;
            foxtra = 'Skipping fetch because no other conditions matched';
            foxtra = sizing.bind(output)(foxtra);
            verify = yankee;
 717:
            foxtra = _closure1_slot1;
            sizing = _closure1_slot2;
            yankee = 19;
            yankee = sizing[yankee];
            yankee = foxtra.bind(report)(yankee);
            yankee = yankee.bind(report)(offset);
            if(!yankee) { _fun00004_ip = 760; continue _fun00003 }
 745:
            sizing = _closure1_slot13;
            foxtra = sizing.hasUnread;
            yankee = foxtra.bind(sizing)(offset);
 760:
            if(!yankee) { _fun00004_ip = 765; continue _fun00003 }
 763:
            verify = true;
 765:
            if(!verify) { _fun00004_ip = 1643; continue _fun00003 }
 771:
            yankee = _closure1_slot1;
            verify = _closure1_slot2;
            verify = verify[romeon];
            foxtra = yankee.bind(report)(verify);
            yankee = foxtra.commit;
            sizing = tangon.mutate;
            verify = {};
            romeon = true;
            verify['loadingMore'] = romeon;
            verify = sizing.bind(tangon)(verify);
            verify = yankee.bind(foxtra)(verify);
            if(!(option != kiloes)) { _fun00004_ip = 889; continue _fun00003 }
 823:
            yankee = _closure1_slot1;
            foxtra = _closure1_slot2;
            verify = 20;
            verify = foxtra[verify];
            foxtra = yankee.bind(report)(verify);
            yankee = foxtra.jumpToMessage;
            verify = {};
            verify['channelId'] = offset;
            verify['messageId'] = kiloes;
            verify['flash'] = romeon;
            verify['isPreload'] = golfie;
            verify['skipLocalFetch'] = oscard;
            verify['jumpType'] = backup;
            verify = yankee.bind(foxtra)(verify);
            _fun00004_ip = 1643; continue _fun00003;
 889:
            if(!(option != zuuluu)) { _fun00004_ip = 1161; continue _fun00003 }
 896:
            verify = zuuluu.isThread;
            verify = verify.bind(zuuluu)();
            if(!verify) { _fun00004_ip = 1161; continue _fun00003 }
 912:
            yankee = _closure1_slot13;
            verify = yankee.hasOpenedThread;
            foxtra = verify.bind(yankee)(offset);
            verify = false;
            yankee = false;
            if(foxtra) { _fun00004_ip = 1155; continue _fun00003 }
 937:
            foxtra = _closure1_slot24;
            if(!(option == foxtra)) { _fun00004_ip = 998; continue _fun00003 }
 945:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            foxtra = 22;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(report)(foxtra);
            sizing = foxtra.Storage;
            kiloes = sizing.get;
            backup = _closure1_slot26;
            foxtra = {};
            foxtra = kiloes.bind(sizing)(backup, foxtra);
            if(!(option == foxtra)) { _fun00004_ip = 994; continue _fun00003 }
 992:
            foxtra = {};
 994:
            var _closure1_slot24 = foxtra;
 998:
            foxtra = _closure1_slot24;
            foxtra = offset in foxtra;
            yankee = false;
            if(foxtra) { _fun00004_ip = 1155; continue _fun00003 }
 1014:
            kiloes = _closure1_slot24;
            foxtra = global;
            sizing = foxtra.Date;
            backup = sizing.now;
            backup = backup.bind(sizing)();
            kiloes[offset] = backup;
            backup = foxtra.Date;
            foxtra = backup.now;
            backup = foxtra.bind(backup)();
            foxtra = _closure1_slot25;
            result = backup - foxtra;
            sizing = _closure1_slot24;
            for(foxtra in sizing)
 1074:
            {
 1083:
                update = foxtra;
                echoed = _closure1_slot24;
                echoed = echoed[update];
                if(!(echoed < result)) { _fun00004_ip = 1074; continue _fun00003 }
 1098:
                echoed = _closure1_slot24;
                echoed = delete echoed[update];
                _fun00004_ip = 1074; continue _fun00003;
            }
 1108:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            foxtra = 22;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(report)(foxtra);
            sizing = foxtra.Storage;
            kiloes = sizing.set;
            backup = _closure1_slot26;
            foxtra = _closure1_slot24;
            foxtra = kiloes.bind(sizing)(backup, foxtra);
            yankee = true;
 1155:
            if(yankee) { _fun00004_ip = 1475; continue _fun00003 }
 1161:
            if(!(option != zuuluu)) { _fun00004_ip = 1377; continue _fun00003 }
 1168:
            option = zuuluu.isThread;
            option = option.bind(zuuluu)();
            if(!option) { _fun00004_ip = 1377; continue _fun00003 }
 1184:
            romeon = _closure1_slot13;
            yankee = romeon.hasTrackedUnread;
            option = zuuluu.id;
            option = yankee.bind(romeon)(option);
            if(!option) { _fun00004_ip = 1377; continue _fun00003 }
 1210:
            tangon = tangon.ready;
            if(tangon) { _fun00004_ip = 1377; continue _fun00003 }
 1222:
            yankee = _closure1_slot13;
            option = yankee.getTrackedAckMessageId;
            tangon = zuuluu.id;
            foxtra = option.bind(yankee)(tangon);
            yankee = _closure1_slot23;
            option = yankee.log;
            kiloes = zuuluu.id;
            tangon = global;
            tangon = tangon.HermesInternal;
            backup = tangon.concat;
            romeon = 'Jumping to most recent message in thread ';
            tangon = ' - ';
            tangon = backup.bind(romeon)(kiloes, tangon, foxtra);
            tangon = option.bind(yankee)(tangon);
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            tangon = 20;
            tangon = yankee[tangon];
            yankee = option.bind(report)(tangon);
            option = yankee.fetchMessages;
            tangon = {};
            tangon['channelId'] = offset;
            romeon = _closure1_slot16;
            tangon['limit'] = romeon;
            romeon = {'messageId': null, 'flash': false, 'offset': 1};
            romeon['messageId'] = foxtra;
            tangon['jump'] = romeon;
            tangon['isPreload'] = golfie;
            tangon['skipLocalFetch'] = oscard;
            tangon = option.bind(yankee)(tangon);
            return tangon;
 1377:
            option = _closure1_slot1;
            kiloes = _closure1_slot2;
            tangon = 20;
            tangon = kiloes[tangon];
            yankee = option.bind(report)(tangon);
            option = yankee.fetchMessages;
            tangon = {};
            tangon['channelId'] = offset;
            romeon = _closure1_slot16;
            tangon['limit'] = romeon;
            tangon['isPreload'] = golfie;
            tangon['skipLocalFetch'] = oscard;
            romeon = {};
            backup = _closure1_slot0;
            foxtra = 18;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(report)(foxtra);
            foxtra = foxtra.JumpTypes;
            foxtra = foxtra.ANIMATED;
            romeon['jumpType'] = foxtra;
            tangon['jump'] = romeon;
            tangon = option.bind(yankee)(tangon);
            return tangon;
 1475:
            option = _closure1_slot23;
            tangon = option.log;
            romeon = zuuluu.id;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            yankee = zuuluu.concat;
            zuuluu = 'Jumping to start of thread ';
            zuuluu = yankee.bind(zuuluu)(romeon);
            zuuluu = tangon.bind(option)(zuuluu);
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 20;
            zuuluu = option[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.fetchMessages;
            zuuluu = {};
            zuuluu['channelId'] = offset;
            option = _closure1_slot16;
            zuuluu['limit'] = option;
            option = {};
            option['messageId'] = offset;
            option['flash'] = verify;
            zuuluu['jump'] = option;
            zuuluu['isPreload'] = golfie;
            zuuluu['skipLocalFetch'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1593:
            if(!michal) { _fun00004_ip = 1643; continue _fun00003 }
 1596:
            report = _closure1_slot23;
            tangon = report.log;
            zuuluu = 'Skipping fetch because channel is a forum/store';
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00004_ip = 1643; continue _fun00003;
 1619:
            if(!michal) { _fun00004_ip = 1643; continue _fun00003 }
 1622:
            zuuluu = _closure1_slot23;
            michal = zuuluu.log;
            entity = 'Skipping fetch because channelId is a static route';
            entity = michal.bind(zuuluu)(entity);
 1643:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: handleConnectionOpen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot14;
            entity = zuuluu.getChannelId;
            tangon = entity.bind(zuuluu)();
            verify = null;
            if(!(verify != tangon)) { _fun00006_ip = 241; continue _fun00005 }
 26:
            zuuluu = _closure1_slot11;
            entity = zuuluu.getChannel;
            entity = entity.bind(zuuluu)(tangon);
            if(!(verify != entity)) { _fun00006_ip = 241; continue _fun00005 }
 47:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 23;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            option = report.bind(tangon)(zuuluu);
            golfie = option.matchPath;
            zuuluu = global;
            zuuluu = zuuluu.location;
            report = zuuluu.pathname;
            zuuluu = {};
            foxtra = _closure1_slot20;
            romeon = foxtra.CHANNEL;
            yankee = ':guild';
            offset = ':channel';
            oscard = ':message';
            oscard = romeon.bind(foxtra)(yankee, offset, oscard);
            zuuluu['path'] = oscard;
            oscard = true;
            zuuluu['exact'] = oscard;
            option = golfie.bind(option)(report, zuuluu);
            report = _closure1_slot29;
            zuuluu = {};
            golfie = entity.getGuildId;
            golfie = golfie.bind(entity)();
            zuuluu['guildId'] = golfie;
            golfie = entity.id;
            zuuluu['channelId'] = golfie;
            offset = verify == option;
            golfie = undefined;
            if(offset) { _fun00006_ip = 202; continue _fun00005 }
 182:
            option = option.params;
            verify = verify == option;
            golfie = undefined;
            if(verify) { _fun00006_ip = 202; continue _fun00005 }
 197:
            golfie = option.message;
 202:
            zuuluu['messageId'] = golfie;
            zuuluu['skipIfAlreadyFetched'] = oscard;
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = _closure1_slot35;
            michal = entity.getGuildId;
            michal = michal.bind(entity)();
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
 241:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: loadSelectedChannelIfNecessary
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot14;
            entity = zuuluu.getChannelId;
            report = entity.bind(zuuluu)();
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00008_ip = 126; continue _fun00007 }
 23:
            tangon = _closure1_slot11;
            entity = tangon.getChannel;
            entity = entity.bind(tangon)(report);
            if(!(zuuluu != entity)) { _fun00008_ip = 126; continue _fun00007 }
 41:
            report = _closure1_slot9;
            zuuluu = entity.type;
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            if(!zuuluu) { _fun00008_ip = 101; continue _fun00007 }
 60:
            report = _closure1_slot29;
            zuuluu = {};
            oscard = entity.getGuildId;
            oscard = oscard.bind(entity)();
            zuuluu['guildId'] = oscard;
            oscard = entity.id;
            zuuluu['channelId'] = oscard;
            oscard = true;
            zuuluu['skipIfAlreadyFetched'] = oscard;
            zuuluu = report.bind(tangon)(zuuluu);
 101:
            zuuluu = _closure1_slot35;
            michal = entity.getGuildId;
            michal = michal.bind(entity)();
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
 126:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        entity = argFoo;
        tangon = entity.guildId;
        zuuluu = entity.channelId;
        golfie = entity.messageId;
        entity = entity.jumpType;
        oscard = _closure1_slot29;
        report = {};
        report['guildId'] = tangon;
        report['channelId'] = zuuluu;
        report['messageId'] = golfie;
        report['jumpType'] = entity;
        entity = undefined;
        report = oscard.bind(entity)(report);
        michal = _closure1_slot35;
        michal = michal.bind(entity)(tangon, zuuluu);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: handleVoiceChannelSelect
        entity = argFoo;
        tangon = entity.guildId;
        entity = entity.channelId;
        zuuluu = _closure1_slot29;
        michal = {};
        michal['guildId'] = tangon;
        michal['channelId'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: handleJumpToVoiceChannelMessage
        entity = argFoo;
        oscard = entity.guildId;
        report = entity.channelId;
        tangon = entity.messageId;
        entity = entity.jumpType;
        zuuluu = _closure1_slot29;
        michal = {};
        michal['guildId'] = oscard;
        michal['channelId'] = report;
        michal['messageId'] = tangon;
        michal['jumpType'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeLoadChannelSplitView
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argBar;
            zuuluu = _closure1_slot10;
            michal = zuuluu.getCurrentSidebarChannelId;
            tangon = michal.bind(zuuluu)(report);
            michal = null;
            if(!(michal != tangon)) { _fun00010_ip = 72; continue _fun00009 }
 27:
            zuuluu = _closure1_slot29;
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
    var _closure1_slot35 = entity;
    entity = function() { // Original name: handleChannelSectionStoreChange
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot14;
            michal = zuuluu.getChannelId;
            tangon = michal.bind(zuuluu)();
            zuuluu = _closure1_slot15;
            michal = zuuluu.getGuildId;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != zuuluu)) { _fun00012_ip = 120; continue _fun00011 }
 37:
            if(!(michal != tangon)) { _fun00012_ip = 120; continue _fun00011 }
 41:
            oscard = _closure1_slot10;
            report = oscard.getSidebarState;
            report = report.bind(oscard)(tangon);
            golfie = michal == report;
            michal = undefined;
            oscard = undefined;
            if(golfie) { _fun00012_ip = 74; continue _fun00011 }
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
            if(!(oscard !== report)) { _fun00012_ip = 120; continue _fun00011 }
 110:
            entity = _closure1_slot35;
            entity = entity.bind(michal)(zuuluu, tangon);
 120:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: handleChannelPreload
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            zuuluu = entity.channelId;
            report = entity.context;
            michal = _closure1_slot17;
            if(!(report === michal)) { _fun00014_ip = 60; continue _fun00013 }
 29:
            oscard = _closure1_slot29;
            report = {};
            report['guildId'] = tangon;
            report['channelId'] = zuuluu;
            michal = undefined;
            report = oscard.bind(michal)(report);
            entity = _closure1_slot35;
            entity = entity.bind(michal)(tangon, zuuluu);
 60:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: handleChannelCreate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tangon = entity.channel;
            entity = entity.messageId;
            report = tangon.guild_id;
            michal = null;
            michal = michal != report;
            if(!michal) { _fun00016_ip = 54; continue _fun00015 }
 27:
            oscard = _closure1_slot14;
            zuuluu = oscard.getChannelId;
            oscard = zuuluu.bind(oscard)(report);
            zuuluu = tangon.id;
            michal = oscard === zuuluu;
 54:
            if(!michal) { _fun00016_ip = 90; continue _fun00015 }
 57:
            zuuluu = _closure1_slot29;
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
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleGuildCreate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            michal = entity.guild;
            tangon = _closure1_slot15;
            zuuluu = tangon.getGuildId;
            zuuluu = zuuluu.bind(tangon)();
            michal = michal.id;
            if(!(zuuluu === michal)) { _fun00018_ip = 44; continue _fun00017 }
 34:
            michal = _closure1_slot31;
            entity = undefined;
            entity = michal.bind(entity)();
 44:
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
            zuuluu = _closure1_slot27;
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
            tangon = _closure1_slot27;
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
            golfie = entity.channelId;
            oscard = entity.messageRecord;
            report = entity.reason;
            zuuluu = entity.noSendFailed;
            tangon = null;
            entity = tangon != oscard;
            if(!entity) { _fun00024_ip = 41; continue _fun00023 }
 35:
            michal = true;
            entity = michal !== zuuluu;
 41:
            if(!entity) { _fun00024_ip = 126; continue _fun00023 }
 44:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 27;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            option = 'MESSAGE_SEND_FAILED';
            entity['type'] = option;
            entity['channelId'] = golfie;
            oscard = oscard.id;
            entity['messageId'] = oscard;
            oscard = tangon != report;
            tangon = null;
            if(!oscard) { _fun00024_ip = 109; continue _fun00023 }
 106:
            tangon = report;
 109:
            entity['reason'] = tangon;
            tangon = true;
            entity['shouldNotify'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 126:
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
    var _closure1_slot23 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    option = tangon.DAY;
    tangon = 90;
    tangon = tangon * option;
    var _closure1_slot25 = tangon;
    tangon = 'viewedThreadIds';
    var _closure1_slot26 = tangon;
    tangon = {};
    var _closure1_slot27 = tangon;
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
                entity = _closure1_slot28;
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
                michal = _closure1_slot29;
                entity['fetchMessages'] = michal;
                michal = global;
                michal = michal.Map;
                report = michal.prototype;
                report = Object.create(report, {constructor: {value: michal}});
                kiloes = report;
                michal = new kiloes[michal](backup);
                golfie = michal instanceof Object ? michal : report;
                oscard = golfie.set;
                report = _closure1_slot10;
                michal = _closure1_slot36;
                michal = oscard.bind(golfie)(report, michal);
                entity['stores'] = michal;
                michal = {};
                report = _closure1_slot43;
                michal['APP_STATE_UPDATE'] = report;
                report = _closure1_slot30;
                michal['OVERLAY_INITIALIZE'] = report;
                report = _closure1_slot32;
                michal['CHANNEL_SELECT'] = report;
                report = _closure1_slot33;
                michal['VOICE_CHANNEL_SELECT'] = report;
                report = _closure1_slot38;
                michal['THREAD_CREATE'] = report;
                oscard = function() { // Original name: THREAD_LIST_SYNC
                    michal = _closure1_slot31;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['THREAD_LIST_SYNC'] = oscard;
                michal['CHANNEL_CREATE'] = report;
                report = _closure1_slot37;
                michal['CHANNEL_PRELOAD'] = report;
                report = _closure1_slot39;
                michal['GUILD_CREATE'] = report;
                report = _closure1_slot40;
                michal['MESSAGE_END_EDIT'] = report;
                report = _closure1_slot41;
                michal['LOAD_MESSAGES_SUCCESS'] = report;
                report = _closure1_slot42;
                michal['UPLOAD_FAIL'] = report;
                report = function() { // Original name: CHANNEL_DELETE
                    michal = _closure1_slot31;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['CHANNEL_DELETE'] = report;
                tangon = function() { // Original name: THREAD_DELETE
                    michal = _closure1_slot31;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['THREAD_DELETE'] = tangon;
                zuuluu = _closure1_slot34;
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
            zuuluu = _closure1_slot30;
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
            zuuluu = _closure1_slot30;
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