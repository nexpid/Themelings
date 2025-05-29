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
            output = entity.guildId;
            option = entity.channelId;
            backup = entity.messageId;
            offset = entity.forceFetch;
            report = entity.isPreload;
            foxtra = entity.jumpType;
            tangon = entity.skipLocalFetch;
            verify = null;
            if(!(verify != option)) { _fun00004_ip = 1466; continue _fun00003 }
 51:
            entity = _closure1_slot22;
            zuuluu = undefined;
            entity = entity.bind(zuuluu)(option);
            if(entity) { _fun00004_ip = 1466; continue _fun00003 }
 71:
            michal = _closure1_slot11;
            entity = michal.getChannel;
            entity = entity.bind(michal)(option);
            michal = verify == entity;
            golfie = undefined;
            if(michal) { _fun00004_ip = 99; continue _fun00003 }
 94:
            golfie = entity.type;
 99:
            michal = _closure1_slot18;
            michal = michal.GUILD_STORE;
            if(!(golfie !== michal)) { _fun00004_ip = 1466; continue _fun00003 }
 116:
            golfie = verify == entity;
            michal = undefined;
            if(golfie) { _fun00004_ip = 130; continue _fun00003 }
 125:
            michal = entity.type;
 130:
            if(!(verify != michal)) { _fun00004_ip = 165; continue _fun00003 }
 134:
            michal = _closure1_slot21;
            yankee = michal.GUILD_THREADS_ONLY;
            golfie = yankee.has;
            michal = entity.type;
            michal = golfie.bind(yankee)(michal);
            if(michal) { _fun00004_ip = 1466; continue _fun00003 }
 165:
            golfie = _closure1_slot1;
            sizing = _closure1_slot2;
            yankee = 16;
            michal = sizing[yankee];
            golfie = golfie.bind(zuuluu)(michal);
            michal = golfie.getOrCreate;
            golfie = michal.bind(golfie)(option);
            romeon = golfie.some;
            kiloes = _closure1_slot0;
            michal = 17;
            michal = sizing[michal];
            michal = kiloes.bind(zuuluu)(michal);
            michal = michal.messageHasExpiredAttachmentUrl;
            michal = romeon.bind(golfie)(michal);
            sizing = golfie;
            if(!michal) { _fun00004_ip = 304; continue _fun00003 }
 235:
            romeon = _closure1_slot23;
            golfie = romeon.log;
            michal = 'Found expired attachment link, clearing messages';
            michal = golfie.bind(romeon)(michal);
            golfie = _closure1_slot1;
            michal = _closure1_slot2;
            romeon = michal[yankee];
            kiloes = golfie.bind(zuuluu)(romeon);
            romeon = kiloes.clear;
            romeon = romeon.bind(kiloes)(option);
            michal = michal[yankee];
            golfie = golfie.bind(zuuluu)(michal);
            michal = golfie.getOrCreate;
            sizing = michal.bind(golfie)(option);
 304:
            michal = sizing.jumpTargetId;
            michal = verify != michal;
            if(!michal) { _fun00004_ip = 321; continue _fun00003 }
 317:
            michal = verify == backup;
 321:
            kiloes = sizing;
            if(!michal) { _fun00004_ip = 416; continue _fun00003 }
 327:
            romeon = sizing.mutate;
            michal = {'jumpTargetId': null, 'jumped': false};
            echoed = _closure1_slot0;
            golfie = _closure1_slot2;
            result = 18;
            result = golfie[result];
            result = echoed.bind(zuuluu)(result);
            result = result.JumpTypes;
            result = result.ANIMATED;
            michal['jumpType'] = result;
            michal = romeon.bind(sizing)(michal);
            romeon = _closure1_slot1;
            golfie = golfie[yankee];
            romeon = romeon.bind(zuuluu)(golfie);
            golfie = romeon.commit;
            golfie = golfie.bind(romeon)(michal);
            kiloes = michal;
 416:
            michal = kiloes.focusTargetId;
            golfie = verify != michal;
            if(!golfie) { _fun00004_ip = 433; continue _fun00003 }
 429:
            golfie = verify == backup;
 433:
            michal = kiloes;
            if(!golfie) { _fun00004_ip = 488; continue _fun00003 }
 439:
            romeon = kiloes.mutate;
            golfie = {};
            golfie['focusTargetId'] = verify;
            golfie = romeon.bind(kiloes)(golfie);
            kiloes = _closure1_slot1;
            romeon = _closure1_slot2;
            romeon = romeon[yankee];
            kiloes = kiloes.bind(zuuluu)(romeon);
            romeon = kiloes.commit;
            romeon = romeon.bind(kiloes)(golfie);
            michal = golfie;
 488:
            if(!report) { _fun00004_ip = 519; continue _fun00003 }
 491:
            romeon = _closure1_slot8;
            golfie = romeon.isConnected;
            golfie = golfie.bind(romeon)();
            if(golfie) { _fun00004_ip = 519; continue _fun00003 }
 508:
            romeon = michal.loadingMore;
            golfie = true;
            if(!romeon) { _fun00004_ip = 590; continue _fun00003 }
 519:
            romeon = michal.loadingMore;
            if(romeon) { _fun00004_ip = 581; continue _fun00003 }
 528:
            romeon = michal.ready;
            if(!romeon) { _fun00004_ip = 546; continue _fun00003 }
 537:
            romeon = michal.cached;
            if(!romeon) { _fun00004_ip = 581; continue _fun00003 }
 546:
            romeon = verify != output;
            if(!romeon) { _fun00004_ip = 571; continue _fun00003 }
 553:
            sizing = _closure1_slot12;
            kiloes = sizing.getGuild;
            kiloes = kiloes.bind(sizing)(output);
            romeon = verify == kiloes;
 571:
            golfie = offset;
            if(romeon) { _fun00004_ip = 590; continue _fun00003 }
 577:
            golfie = true;
            _fun00004_ip = 590; continue _fun00003;
 581:
            golfie = offset;
            if(!(verify != backup)) { _fun00004_ip = 590; continue _fun00003 }
 588:
            golfie = true;
 590:
            romeon = _closure1_slot1;
            kiloes = _closure1_slot2;
            offset = 19;
            offset = kiloes[offset];
            offset = romeon.bind(zuuluu)(offset);
            offset = offset.bind(zuuluu)(option);
            if(!offset) { _fun00004_ip = 633; continue _fun00003 }
 618:
            kiloes = _closure1_slot13;
            romeon = kiloes.hasUnread;
            offset = romeon.bind(kiloes)(option);
 633:
            if(!offset) { _fun00004_ip = 638; continue _fun00003 }
 636:
            golfie = true;
 638:
            if(!golfie) { _fun00004_ip = 1466; continue _fun00003 }
 644:
            offset = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[yankee];
            romeon = offset.bind(zuuluu)(golfie);
            offset = romeon.commit;
            kiloes = michal.mutate;
            golfie = {};
            yankee = true;
            golfie['loadingMore'] = yankee;
            golfie = kiloes.bind(michal)(golfie);
            golfie = offset.bind(romeon)(golfie);
            if(!(verify != backup)) { _fun00004_ip = 762; continue _fun00003 }
 696:
            offset = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 20;
            golfie = romeon[golfie];
            romeon = offset.bind(zuuluu)(golfie);
            offset = romeon.jumpToMessage;
            golfie = {};
            golfie['channelId'] = option;
            golfie['messageId'] = backup;
            golfie['flash'] = yankee;
            golfie['isPreload'] = report;
            golfie['skipLocalFetch'] = tangon;
            golfie['jumpType'] = foxtra;
            golfie = offset.bind(romeon)(golfie);
            _fun00004_ip = 1466; continue _fun00003;
 762:
            if(!(verify != entity)) { _fun00004_ip = 1034; continue _fun00003 }
 769:
            golfie = entity.isThread;
            golfie = golfie.bind(entity)();
            if(!golfie) { _fun00004_ip = 1034; continue _fun00003 }
 785:
            offset = _closure1_slot13;
            golfie = offset.hasOpenedThread;
            romeon = golfie.bind(offset)(option);
            golfie = false;
            offset = false;
            if(romeon) { _fun00004_ip = 1028; continue _fun00003 }
 810:
            romeon = _closure1_slot24;
            if(!(verify == romeon)) { _fun00004_ip = 871; continue _fun00003 }
 818:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 22;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            kiloes = romeon.Storage;
            backup = kiloes.get;
            foxtra = _closure1_slot26;
            romeon = {};
            romeon = backup.bind(kiloes)(foxtra, romeon);
            if(!(verify == romeon)) { _fun00004_ip = 867; continue _fun00003 }
 865:
            romeon = {};
 867:
            var _closure1_slot24 = romeon;
 871:
            romeon = _closure1_slot24;
            romeon = option in romeon;
            offset = false;
            if(romeon) { _fun00004_ip = 1028; continue _fun00003 }
 887:
            backup = _closure1_slot24;
            romeon = global;
            kiloes = romeon.Date;
            foxtra = kiloes.now;
            foxtra = foxtra.bind(kiloes)();
            backup[option] = foxtra;
            foxtra = romeon.Date;
            romeon = foxtra.now;
            foxtra = romeon.bind(foxtra)();
            romeon = _closure1_slot25;
            output = foxtra - romeon;
            kiloes = _closure1_slot24;
            for(romeon in kiloes)
 947:
            {
 956:
                echoed = romeon;
                result = _closure1_slot24;
                result = result[echoed];
                if(!(result < output)) { _fun00004_ip = 947; continue _fun00003 }
 971:
                result = _closure1_slot24;
                result = delete result[echoed];
                _fun00004_ip = 947; continue _fun00003;
            }
 981:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 22;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            kiloes = romeon.Storage;
            backup = kiloes.set;
            foxtra = _closure1_slot26;
            romeon = _closure1_slot24;
            romeon = backup.bind(kiloes)(foxtra, romeon);
            offset = true;
 1028:
            if(offset) { _fun00004_ip = 1348; continue _fun00003 }
 1034:
            if(!(verify != entity)) { _fun00004_ip = 1250; continue _fun00003 }
 1041:
            verify = entity.isThread;
            verify = verify.bind(entity)();
            if(!verify) { _fun00004_ip = 1250; continue _fun00003 }
 1057:
            yankee = _closure1_slot13;
            offset = yankee.hasTrackedUnread;
            verify = entity.id;
            verify = offset.bind(yankee)(verify);
            if(!verify) { _fun00004_ip = 1250; continue _fun00003 }
 1083:
            michal = michal.ready;
            if(michal) { _fun00004_ip = 1250; continue _fun00003 }
 1095:
            offset = _closure1_slot13;
            verify = offset.getTrackedAckMessageId;
            michal = entity.id;
            romeon = verify.bind(offset)(michal);
            offset = _closure1_slot23;
            verify = offset.log;
            backup = entity.id;
            michal = global;
            michal = michal.HermesInternal;
            foxtra = michal.concat;
            yankee = 'Jumping to most recent message in thread ';
            michal = ' - ';
            michal = foxtra.bind(yankee)(backup, michal, romeon);
            michal = verify.bind(offset)(michal);
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 20;
            michal = offset[michal];
            offset = verify.bind(zuuluu)(michal);
            verify = offset.fetchMessages;
            michal = {};
            michal['channelId'] = option;
            yankee = _closure1_slot16;
            michal['limit'] = yankee;
            yankee = {'messageId': null, 'flash': false, 'offset': 1};
            yankee['messageId'] = romeon;
            michal['jump'] = yankee;
            michal['isPreload'] = report;
            michal['skipLocalFetch'] = tangon;
            michal = verify.bind(offset)(michal);
            return michal;
 1250:
            verify = _closure1_slot1;
            backup = _closure1_slot2;
            michal = 20;
            michal = backup[michal];
            offset = verify.bind(zuuluu)(michal);
            verify = offset.fetchMessages;
            michal = {};
            michal['channelId'] = option;
            yankee = _closure1_slot16;
            michal['limit'] = yankee;
            michal['isPreload'] = report;
            michal['skipLocalFetch'] = tangon;
            yankee = {};
            foxtra = _closure1_slot0;
            romeon = 18;
            romeon = backup[romeon];
            romeon = foxtra.bind(zuuluu)(romeon);
            romeon = romeon.JumpTypes;
            romeon = romeon.ANIMATED;
            yankee['jumpType'] = romeon;
            michal['jump'] = yankee;
            michal = verify.bind(offset)(michal);
            return michal;
 1348:
            verify = _closure1_slot23;
            michal = verify.log;
            yankee = entity.id;
            entity = global;
            entity = entity.HermesInternal;
            offset = entity.concat;
            entity = 'Jumping to start of thread ';
            entity = offset.bind(entity)(yankee);
            entity = michal.bind(verify)(entity);
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 20;
            entity = verify[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.fetchMessages;
            entity = {};
            entity['channelId'] = option;
            oscard = _closure1_slot16;
            entity['limit'] = oscard;
            oscard = {};
            oscard['messageId'] = option;
            oscard['flash'] = golfie;
            entity['jump'] = oscard;
            entity['isPreload'] = report;
            entity['skipLocalFetch'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 1466:
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
            option = null;
            if(!(option != tangon)) { _fun00006_ip = 236; continue _fun00005 }
 26:
            zuuluu = _closure1_slot11;
            entity = zuuluu.getChannel;
            entity = entity.bind(zuuluu)(tangon);
            if(!(option != entity)) { _fun00006_ip = 236; continue _fun00005 }
 47:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 23;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            golfie = report.bind(tangon)(zuuluu);
            oscard = golfie.matchPath;
            zuuluu = global;
            zuuluu = zuuluu.location;
            report = zuuluu.pathname;
            zuuluu = {};
            foxtra = _closure1_slot20;
            romeon = foxtra.CHANNEL;
            yankee = ':guild';
            offset = ':channel';
            verify = ':message';
            verify = romeon.bind(foxtra)(yankee, offset, verify);
            zuuluu['path'] = verify;
            verify = true;
            zuuluu['exact'] = verify;
            golfie = oscard.bind(golfie)(report, zuuluu);
            report = _closure1_slot29;
            zuuluu = {};
            oscard = entity.getGuildId;
            oscard = oscard.bind(entity)();
            zuuluu['guildId'] = oscard;
            oscard = entity.id;
            zuuluu['channelId'] = oscard;
            verify = option == golfie;
            oscard = undefined;
            if(verify) { _fun00006_ip = 202; continue _fun00005 }
 182:
            golfie = golfie.params;
            option = option == golfie;
            oscard = undefined;
            if(option) { _fun00006_ip = 202; continue _fun00005 }
 197:
            oscard = golfie.message;
 202:
            zuuluu['messageId'] = oscard;
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = _closure1_slot35;
            michal = entity.getGuildId;
            michal = michal.bind(entity)();
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
 236:
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
            golfie = _closure1_slot35;
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
            report = _closure1_slot29;
            zuuluu = {};
            oscard = entity.getGuildId;
            oscard = oscard.bind(entity)();
            zuuluu['guildId'] = oscard;
            oscard = entity.id;
            zuuluu['channelId'] = oscard;
            zuuluu = report.bind(tangon)(zuuluu);
 176:
            zuuluu = _closure1_slot35;
            michal = entity.getGuildId;
            michal = michal.bind(entity)();
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
 201:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            tangon = michal.guildId;
            zuuluu = michal.channelId;
            golfie = michal.messageId;
            entity = michal.jumpType;
            michal = michal.isInitialSetup;
            if(michal) { _fun00010_ip = 78; continue _fun00009 }
 33:
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
 78:
            entity = false;
            return entity;
        }
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
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argBar;
            zuuluu = _closure1_slot10;
            michal = zuuluu.getCurrentSidebarChannelId;
            tangon = michal.bind(zuuluu)(report);
            michal = null;
            if(!(michal != tangon)) { _fun00012_ip = 72; continue _fun00011 }
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
            entity = _closure1_slot35;
            entity = entity.bind(michal)(zuuluu, tangon);
 120:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot36 = entity;
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
    var _closure1_slot39 = entity;
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
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: handleUploadFail
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            option = entity.channelId;
            golfie = entity.messageRecord;
            oscard = entity.reason;
            zuuluu = entity.noSendFailed;
            report = entity.shouldSendNotification;
            tangon = null;
            entity = tangon != golfie;
            if(!entity) { _fun00024_ip = 47; continue _fun00023 }
 41:
            michal = true;
            entity = michal !== zuuluu;
 47:
            if(!entity) { _fun00024_ip = 136; continue _fun00023 }
 50:
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
            golfie = golfie.id;
            entity['messageId'] = golfie;
            golfie = tangon != oscard;
            tangon = null;
            if(!golfie) { _fun00024_ip = 115; continue _fun00023 }
 112:
            tangon = oscard;
 115:
            entity['reason'] = tangon;
            tangon = false;
            tangon = tangon !== report;
            entity['shouldNotify'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 136:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot41 = entity;
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
    var _closure1_slot42 = entity;
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
                michal = _closure1_slot31;
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
                michal = _closure1_slot36;
                michal = oscard.bind(golfie)(report, michal);
                entity['stores'] = michal;
                michal = {};
                report = _closure1_slot42;
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
                report = function() { // Original name: GUILD_CREATE
                    michal = _closure1_slot31;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal['GUILD_CREATE'] = report;
                report = _closure1_slot39;
                michal['MESSAGE_END_EDIT'] = report;
                report = _closure1_slot40;
                michal['LOAD_MESSAGES_SUCCESS'] = report;
                report = _closure1_slot41;
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