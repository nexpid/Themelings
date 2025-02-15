// app/modules/messages/MessageManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot29;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot29 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: fetchMessages
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            result = entity.guildId;
            offset = entity.channelId;
            kilo = entity.messageId;
            yankee = entity.forceFetch;
            golf = entity.isPreload;
            backup = entity.jumpType;
            oscar = entity.skipLocalFetch;
            mike = entity.logFailures;
            options = null;
            if(!(options == offset)) { _fun00006_ip = 89; continue _fun00005 }
 54:
            if(!mike) { _fun00006_ip = 1612; continue _fun00005 }
 60:
            tango = _closure1_slot23;
            zulu = tango.log;
            entity = 'Skipping fetch because channelId is null';
            entity = zulu.bind(tango)(entity);
            _fun00006_ip = 1612; continue _fun00005;
 89:
            zulu = _closure1_slot22;
            report = undefined;
            zulu = zulu.bind(report)(offset);
            if(zulu) { _fun00006_ip = 1588; continue _fun00005 }
 109:
            tango = _closure1_slot11;
            zulu = tango.getChannel;
            zulu = zulu.bind(tango)(offset);
            tango = options == zulu;
            verify = undefined;
            if(tango) { _fun00006_ip = 137; continue _fun00005 }
 132:
            verify = zulu.type;
 137:
            tango = _closure1_slot18;
            tango = tango.GUILD_STORE;
            if(!(verify !== tango)) { _fun00006_ip = 1562; continue _fun00005 }
 154:
            verify = options == zulu;
            tango = undefined;
            if(verify) { _fun00006_ip = 168; continue _fun00005 }
 163:
            tango = zulu.type;
 168:
            if(!(options != tango)) { _fun00006_ip = 203; continue _fun00005 }
 172:
            tango = _closure1_slot21;
            romeo = tango.GUILD_THREADS_ONLY;
            verify = romeo.has;
            tango = zulu.type;
            tango = verify.bind(romeo)(tango);
            if(tango) { _fun00006_ip = 1562; continue _fun00005 }
 203:
            verify = _closure1_slot1;
            output = _closure1_slot2;
            romeo = 16;
            tango = output[romeo];
            verify = verify.bind(report)(tango);
            tango = verify.getOrCreate;
            verify = tango.bind(verify)(offset);
            foxtrot = verify.some;
            sizing = _closure1_slot0;
            tango = 17;
            tango = output[tango];
            tango = sizing.bind(report)(tango);
            tango = tango.messageHasExpiredAttachmentUrl;
            tango = foxtrot.bind(verify)(tango);
            output = verify;
            if(!tango) { _fun00006_ip = 342; continue _fun00005 }
 273:
            foxtrot = _closure1_slot23;
            verify = foxtrot.log;
            tango = 'Found expired attachment link, clearing messages';
            tango = verify.bind(foxtrot)(tango);
            verify = _closure1_slot1;
            tango = _closure1_slot2;
            foxtrot = tango[romeo];
            sizing = verify.bind(report)(foxtrot);
            foxtrot = sizing.clear;
            foxtrot = foxtrot.bind(sizing)(offset);
            tango = tango[romeo];
            verify = verify.bind(report)(tango);
            tango = verify.getOrCreate;
            output = tango.bind(verify)(offset);
 342:
            tango = output.jumpTargetId;
            tango = options != tango;
            if(!tango) { _fun00006_ip = 359; continue _fun00005 }
 355:
            tango = options == kilo;
 359:
            sizing = output;
            if(!tango) { _fun00006_ip = 450; continue _fun00005 }
 365:
            foxtrot = output.mutate;
            tango = {'jumpTargetId': null, 'jumped': false};
            update = _closure1_slot0;
            verify = _closure1_slot2;
            echo = 18;
            echo = verify[echo];
            echo = update.bind(report)(echo);
            echo = echo.JumpTypes;
            echo = echo.ANIMATED;
            tango['jumpType'] = echo;
            tango = foxtrot.bind(output)(tango);
            foxtrot = _closure1_slot1;
            verify = verify[romeo];
            foxtrot = foxtrot.bind(report)(verify);
            verify = foxtrot.commit;
            verify = verify.bind(foxtrot)(tango);
            sizing = tango;
 450:
            tango = sizing.focusTargetId;
            verify = options != tango;
            if(!verify) { _fun00006_ip = 467; continue _fun00005 }
 463:
            verify = options == kilo;
 467:
            tango = sizing;
            if(!verify) { _fun00006_ip = 522; continue _fun00005 }
 473:
            foxtrot = sizing.mutate;
            verify = {};
            verify['focusTargetId'] = options;
            verify = foxtrot.bind(sizing)(verify);
            sizing = _closure1_slot1;
            foxtrot = _closure1_slot2;
            foxtrot = foxtrot[romeo];
            sizing = sizing.bind(report)(foxtrot);
            foxtrot = sizing.commit;
            foxtrot = foxtrot.bind(sizing)(verify);
            tango = verify;
 522:
            if(!golf) { _fun00006_ip = 556; continue _fun00005 }
 525:
            foxtrot = _closure1_slot8;
            verify = foxtrot.isConnected;
            verify = verify.bind(foxtrot)();
            if(verify) { _fun00006_ip = 556; continue _fun00005 }
 542:
            foxtrot = tango.loadingMore;
            verify = true;
            if(!foxtrot) { _fun00006_ip = 686; continue _fun00005 }
 556:
            foxtrot = tango.loadingMore;
            if(foxtrot) { _fun00006_ip = 647; continue _fun00005 }
 565:
            foxtrot = tango.ready;
            if(!foxtrot) { _fun00006_ip = 583; continue _fun00005 }
 574:
            foxtrot = tango.cached;
            if(!foxtrot) { _fun00006_ip = 647; continue _fun00005 }
 583:
            foxtrot = options == result;
            verify = true;
            if(foxtrot) { _fun00006_ip = 686; continue _fun00005 }
 592:
            output = _closure1_slot12;
            foxtrot = output.getGuild;
            foxtrot = foxtrot.bind(output)(result);
            foxtrot = options != foxtrot;
            verify = true;
            if(foxtrot) { _fun00006_ip = 686; continue _fun00005 }
 615:
            verify = yankee;
            if(!mike) { _fun00006_ip = 686; continue _fun00005 }
 621:
            output = _closure1_slot23;
            sizing = output.log;
            foxtrot = 'Skipping fetch we are connected and have loaded messages';
            foxtrot = sizing.bind(output)(foxtrot);
            verify = yankee;
            _fun00006_ip = 686; continue _fun00005;
 647:
            foxtrot = options != kilo;
            verify = true;
            if(foxtrot) { _fun00006_ip = 686; continue _fun00005 }
 656:
            verify = yankee;
            if(!mike) { _fun00006_ip = 686; continue _fun00005 }
 662:
            output = _closure1_slot23;
            sizing = output.log;
            foxtrot = 'Skipping fetch because no other conditions matched';
            foxtrot = sizing.bind(output)(foxtrot);
            verify = yankee;
 686:
            foxtrot = _closure1_slot1;
            sizing = _closure1_slot2;
            yankee = 19;
            yankee = sizing[yankee];
            yankee = foxtrot.bind(report)(yankee);
            yankee = yankee.bind(report)(offset);
            if(!yankee) { _fun00006_ip = 729; continue _fun00005 }
 714:
            sizing = _closure1_slot13;
            foxtrot = sizing.hasUnread;
            yankee = foxtrot.bind(sizing)(offset);
 729:
            if(!yankee) { _fun00006_ip = 734; continue _fun00005 }
 732:
            verify = true;
 734:
            if(!verify) { _fun00006_ip = 1612; continue _fun00005 }
 740:
            yankee = _closure1_slot1;
            verify = _closure1_slot2;
            verify = verify[romeo];
            foxtrot = yankee.bind(report)(verify);
            yankee = foxtrot.commit;
            sizing = tango.mutate;
            verify = {};
            romeo = true;
            verify['loadingMore'] = romeo;
            verify = sizing.bind(tango)(verify);
            verify = yankee.bind(foxtrot)(verify);
            if(!(options != kilo)) { _fun00006_ip = 858; continue _fun00005 }
 792:
            yankee = _closure1_slot1;
            foxtrot = _closure1_slot2;
            verify = 20;
            verify = foxtrot[verify];
            foxtrot = yankee.bind(report)(verify);
            yankee = foxtrot.jumpToMessage;
            verify = {};
            verify['channelId'] = offset;
            verify['messageId'] = kilo;
            verify['flash'] = romeo;
            verify['isPreload'] = golf;
            verify['skipLocalFetch'] = oscar;
            verify['jumpType'] = backup;
            verify = yankee.bind(foxtrot)(verify);
            _fun00006_ip = 1612; continue _fun00005;
 858:
            if(!(options != zulu)) { _fun00006_ip = 1130; continue _fun00005 }
 865:
            verify = zulu.isThread;
            verify = verify.bind(zulu)();
            if(!verify) { _fun00006_ip = 1130; continue _fun00005 }
 881:
            yankee = _closure1_slot13;
            verify = yankee.hasOpenedThread;
            foxtrot = verify.bind(yankee)(offset);
            verify = false;
            yankee = false;
            if(foxtrot) { _fun00006_ip = 1124; continue _fun00005 }
 906:
            foxtrot = _closure1_slot24;
            if(!(options == foxtrot)) { _fun00006_ip = 967; continue _fun00005 }
 914:
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            foxtrot = 22;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            sizing = foxtrot.Storage;
            kilo = sizing.get;
            backup = _closure1_slot26;
            foxtrot = {};
            foxtrot = kilo.bind(sizing)(backup, foxtrot);
            if(!(options == foxtrot)) { _fun00006_ip = 963; continue _fun00005 }
 961:
            foxtrot = {};
 963:
            var _closure1_slot24 = foxtrot;
 967:
            foxtrot = _closure1_slot24;
            foxtrot = offset in foxtrot;
            yankee = false;
            if(foxtrot) { _fun00006_ip = 1124; continue _fun00005 }
 983:
            kilo = _closure1_slot24;
            foxtrot = global;
            sizing = foxtrot.Date;
            backup = sizing.now;
            backup = backup.bind(sizing)();
            kilo[offset] = backup;
            backup = foxtrot.Date;
            foxtrot = backup.now;
            backup = foxtrot.bind(backup)();
            foxtrot = _closure1_slot25;
            result = backup - foxtrot;
            sizing = _closure1_slot24;
            for(foxtrot in sizing)
 1043:
            {
 1052:
                update = foxtrot;
                echo = _closure1_slot24;
                echo = echo[update];
                if(!(echo < result)) { _fun00006_ip = 1043; continue _fun00005 }
 1067:
                echo = _closure1_slot24;
                echo = delete echo[update];
                _fun00006_ip = 1043; continue _fun00005;
            }
 1077:
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            foxtrot = 22;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            sizing = foxtrot.Storage;
            kilo = sizing.set;
            backup = _closure1_slot26;
            foxtrot = _closure1_slot24;
            foxtrot = kilo.bind(sizing)(backup, foxtrot);
            yankee = true;
 1124:
            if(yankee) { _fun00006_ip = 1444; continue _fun00005 }
 1130:
            if(!(options != zulu)) { _fun00006_ip = 1346; continue _fun00005 }
 1137:
            options = zulu.isThread;
            options = options.bind(zulu)();
            if(!options) { _fun00006_ip = 1346; continue _fun00005 }
 1153:
            romeo = _closure1_slot13;
            yankee = romeo.hasTrackedUnread;
            options = zulu.id;
            options = yankee.bind(romeo)(options);
            if(!options) { _fun00006_ip = 1346; continue _fun00005 }
 1179:
            tango = tango.ready;
            if(tango) { _fun00006_ip = 1346; continue _fun00005 }
 1191:
            yankee = _closure1_slot13;
            options = yankee.getTrackedAckMessageId;
            tango = zulu.id;
            foxtrot = options.bind(yankee)(tango);
            yankee = _closure1_slot23;
            options = yankee.log;
            kilo = zulu.id;
            tango = global;
            tango = tango.HermesInternal;
            backup = tango.concat;
            romeo = 'Jumping to most recent message in thread ';
            tango = ' - ';
            tango = backup.bind(romeo)(kilo, tango, foxtrot);
            tango = options.bind(yankee)(tango);
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            tango = 20;
            tango = yankee[tango];
            yankee = options.bind(report)(tango);
            options = yankee.fetchMessages;
            tango = {};
            tango['channelId'] = offset;
            romeo = _closure1_slot16;
            tango['limit'] = romeo;
            romeo = {'messageId': null, 'flash': false, 'offset': 1};
            romeo['messageId'] = foxtrot;
            tango['jump'] = romeo;
            tango['isPreload'] = golf;
            tango['skipLocalFetch'] = oscar;
            tango = options.bind(yankee)(tango);
            return tango;
 1346:
            options = _closure1_slot1;
            kilo = _closure1_slot2;
            tango = 20;
            tango = kilo[tango];
            yankee = options.bind(report)(tango);
            options = yankee.fetchMessages;
            tango = {};
            tango['channelId'] = offset;
            romeo = _closure1_slot16;
            tango['limit'] = romeo;
            tango['isPreload'] = golf;
            tango['skipLocalFetch'] = oscar;
            romeo = {};
            backup = _closure1_slot0;
            foxtrot = 18;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            foxtrot = foxtrot.JumpTypes;
            foxtrot = foxtrot.ANIMATED;
            romeo['jumpType'] = foxtrot;
            tango['jump'] = romeo;
            tango = options.bind(yankee)(tango);
            return tango;
 1444:
            options = _closure1_slot23;
            tango = options.log;
            romeo = zulu.id;
            zulu = global;
            zulu = zulu.HermesInternal;
            yankee = zulu.concat;
            zulu = 'Jumping to start of thread ';
            zulu = yankee.bind(zulu)(romeo);
            zulu = tango.bind(options)(zulu);
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 20;
            zulu = options[zulu];
            report = tango.bind(report)(zulu);
            tango = report.fetchMessages;
            zulu = {};
            zulu['channelId'] = offset;
            options = _closure1_slot16;
            zulu['limit'] = options;
            options = {};
            options['messageId'] = offset;
            options['flash'] = verify;
            zulu['jump'] = options;
            zulu['isPreload'] = golf;
            zulu['skipLocalFetch'] = oscar;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1562:
            if(!mike) { _fun00006_ip = 1612; continue _fun00005 }
 1565:
            report = _closure1_slot23;
            tango = report.log;
            zulu = 'Skipping fetch because channel is a forum/store';
            zulu = tango.bind(report)(zulu);
            _fun00006_ip = 1612; continue _fun00005;
 1588:
            if(!mike) { _fun00006_ip = 1612; continue _fun00005 }
 1591:
            zulu = _closure1_slot23;
            mike = zulu.log;
            entity = 'Skipping fetch because channelId is a static route';
            entity = mike.bind(zulu)(entity);
 1612:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: handleConnectionOpen
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = _closure1_slot14;
            entity = zulu.getChannelId;
            tango = entity.bind(zulu)();
            options = null;
            if(!(options != tango)) { _fun00008_ip = 236; continue _fun00007 }
 26:
            zulu = _closure1_slot11;
            entity = zulu.getChannel;
            entity = entity.bind(zulu)(tango);
            if(!(options != entity)) { _fun00008_ip = 236; continue _fun00007 }
 47:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 23;
            zulu = tango[zulu];
            tango = undefined;
            golf = report.bind(tango)(zulu);
            oscar = golf.matchPath;
            zulu = global;
            zulu = zulu.location;
            report = zulu.pathname;
            zulu = {};
            foxtrot = _closure1_slot20;
            romeo = foxtrot.CHANNEL;
            yankee = ':guild';
            offset = ':channel';
            verify = ':message';
            verify = romeo.bind(foxtrot)(yankee, offset, verify);
            zulu['path'] = verify;
            verify = true;
            zulu['exact'] = verify;
            golf = oscar.bind(golf)(report, zulu);
            report = _closure1_slot30;
            zulu = {};
            oscar = entity.getGuildId;
            oscar = oscar.bind(entity)();
            zulu['guildId'] = oscar;
            oscar = entity.id;
            zulu['channelId'] = oscar;
            verify = options == golf;
            oscar = undefined;
            if(verify) { _fun00008_ip = 202; continue _fun00007 }
 182:
            golf = golf.params;
            options = options == golf;
            oscar = undefined;
            if(options) { _fun00008_ip = 202; continue _fun00007 }
 197:
            oscar = golf.message;
 202:
            zulu['messageId'] = oscar;
            zulu = report.bind(tango)(zulu);
            zulu = _closure1_slot35;
            mike = entity.getGuildId;
            mike = mike.bind(entity)();
            entity = entity.id;
            entity = zulu.bind(tango)(mike, entity);
 236:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: loadSelectedChannelIfNecessary
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun00010_ip = 11; continue _fun00009 }
 9:
            mike = {};
 11:
            options = mike.isPreload;
            golf = mike.skipLocalFetch;
            oscar = mike.logFailures;
            tango = _closure1_slot14;
            mike = tango.getChannelId;
            verify = mike.bind(tango)();
            tango = null;
            if(!(tango == verify)) { _fun00010_ip = 84; continue _fun00009 }
 52:
            if(!oscar) { _fun00010_ip = 248; continue _fun00009 }
 58:
            offset = _closure1_slot23;
            report = offset.log;
            mike = 'Skipping fetch because there is no selected channel';
            mike = report.bind(offset)(mike);
            _fun00010_ip = 248; continue _fun00009;
 84:
            report = _closure1_slot11;
            mike = report.getChannel;
            mike = mike.bind(report)(verify);
            if(!(tango == mike)) { _fun00010_ip = 131; continue _fun00009 }
 102:
            if(!oscar) { _fun00010_ip = 248; continue _fun00009 }
 108:
            verify = _closure1_slot23;
            report = verify.log;
            tango = 'Skipping fetch because channel is null';
            tango = report.bind(verify)(tango);
            _fun00010_ip = 248; continue _fun00009;
 131:
            report = _closure1_slot9;
            tango = mike.type;
            tango = report.bind(entity)(tango);
            if(tango) { _fun00010_ip = 174; continue _fun00009 }
 148:
            if(!oscar) { _fun00010_ip = 223; continue _fun00009 }
 151:
            verify = _closure1_slot23;
            report = verify.log;
            tango = 'Skipping fetch because the selected channel is not a text channel';
            tango = report.bind(verify)(tango);
            _fun00010_ip = 223; continue _fun00009;
 174:
            report = _closure1_slot30;
            tango = {};
            verify = mike.getGuildId;
            verify = verify.bind(mike)();
            tango['guildId'] = verify;
            verify = mike.id;
            tango['channelId'] = verify;
            tango['isPreload'] = options;
            tango['skipLocalFetch'] = golf;
            tango['logFailures'] = oscar;
            tango = report.bind(entity)(tango);
 223:
            tango = _closure1_slot35;
            zulu = mike.getGuildId;
            zulu = zulu.bind(mike)();
            mike = mike.id;
            mike = tango.bind(entity)(zulu, mike);
 248:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        entity = argFoo;
        tango = entity.guildId;
        zulu = entity.channelId;
        golf = entity.messageId;
        entity = entity.jumpType;
        oscar = _closure1_slot30;
        report = {};
        report['guildId'] = tango;
        report['channelId'] = zulu;
        report['messageId'] = golf;
        report['jumpType'] = entity;
        entity = undefined;
        report = oscar.bind(entity)(report);
        mike = _closure1_slot35;
        mike = mike.bind(entity)(tango, zulu);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: handleVoiceChannelSelect
        entity = argFoo;
        tango = entity.guildId;
        entity = entity.channelId;
        zulu = _closure1_slot30;
        mike = {};
        mike['guildId'] = tango;
        mike['channelId'] = entity;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeLoadChannelSplitView
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argBar;
            zulu = _closure1_slot10;
            mike = zulu.getCurrentSidebarChannelId;
            tango = mike.bind(zulu)(report);
            mike = null;
            if(!(mike != tango)) { _fun00012_ip = 72; continue _fun00011 }
 27:
            zulu = _closure1_slot30;
            mike = {};
            oscar = argFoo;
            mike['guildId'] = oscar;
            mike['channelId'] = tango;
            tango = _closure1_slot10;
            entity = tango.getCurrentSidebarMessageId;
            entity = entity.bind(tango)(report);
            mike['messageId'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 72:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function() { // Original name: handleChannelSectionStoreChange
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = _closure1_slot14;
            mike = zulu.getChannelId;
            tango = mike.bind(zulu)();
            zulu = _closure1_slot15;
            mike = zulu.getGuildId;
            zulu = mike.bind(zulu)();
            mike = null;
            if(!(mike != zulu)) { _fun00014_ip = 120; continue _fun00013 }
 37:
            if(!(mike != tango)) { _fun00014_ip = 120; continue _fun00013 }
 41:
            oscar = _closure1_slot10;
            report = oscar.getSidebarState;
            report = report.bind(oscar)(tango);
            golf = mike == report;
            mike = undefined;
            oscar = undefined;
            if(golf) { _fun00014_ip = 74; continue _fun00013 }
 69:
            oscar = report.type;
 74:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 24;
            report = options[report];
            report = golf.bind(mike)(report);
            report = report.SidebarType;
            report = report.VIEW_CHANNEL;
            if(!(oscar !== report)) { _fun00014_ip = 120; continue _fun00013 }
 110:
            entity = _closure1_slot35;
            entity = entity.bind(mike)(zulu, tango);
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
            tango = entity.guildId;
            zulu = entity.channelId;
            report = entity.context;
            mike = _closure1_slot17;
            if(!(report === mike)) { _fun00016_ip = 60; continue _fun00015 }
 29:
            oscar = _closure1_slot30;
            report = {};
            report['guildId'] = tango;
            report['channelId'] = zulu;
            mike = undefined;
            report = oscar.bind(mike)(report);
            entity = _closure1_slot35;
            entity = entity.bind(mike)(tango, zulu);
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
            tango = entity.channel;
            entity = entity.messageId;
            report = tango.guild_id;
            mike = null;
            mike = mike != report;
            if(!mike) { _fun00018_ip = 54; continue _fun00017 }
 27:
            oscar = _closure1_slot14;
            zulu = oscar.getChannelId;
            oscar = zulu.bind(oscar)(report);
            zulu = tango.id;
            mike = oscar === zulu;
 54:
            if(!mike) { _fun00018_ip = 90; continue _fun00017 }
 57:
            zulu = _closure1_slot30;
            mike = {};
            mike['guildId'] = report;
            tango = tango.id;
            mike['channelId'] = tango;
            mike['messageId'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
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
            mike = entity.response;
            entity = null;
            if(!(entity != mike)) { _fun00020_ip = 256; continue _fun00019 }
 18:
            zulu = mike.body;
            if(!(entity != zulu)) { _fun00020_ip = 256; continue _fun00019 }
 30:
            zulu = mike.body;
            tango = zulu.code;
            zulu = _closure1_slot19;
            zulu = zulu.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED;
            if(!(tango === zulu)) { _fun00020_ip = 252; continue _fun00019 }
 60:
            mike = mike.body;
            romeo = mike.retry_after;
            if(!(entity != romeo)) { _fun00020_ip = 252; continue _fun00019 }
 78:
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 25;
            mike = offset[mike];
            verify = undefined;
            tango = zulu.bind(verify)(mike);
            zulu = tango.show;
            mike = {};
            oscar = _closure1_slot0;
            report = 26;
            golf = offset[report];
            golf = oscar.bind(verify)(golf);
            yankee = golf.intl;
            options = yankee.string;
            golf = offset[report];
            golf = oscar.bind(verify)(golf);
            golf = golf.t;
            golf = golf.Whhv4+;
            golf = options.bind(yankee)(golf);
            mike['title'] = golf;
            golf = offset[report];
            golf = oscar.bind(verify)(golf);
            options = golf.intl;
            golf = options.formatToPlainString;
            report = offset[report];
            report = oscar.bind(verify)(report);
            report = report.t;
            oscar = report.qoxdQE;
            report = {};
            verify = global;
            yankee = verify.Math;
            offset = yankee.ceil;
            verify = 60;
            verify = romeo / verify;
            verify = offset.bind(yankee)(verify);
            report['retryAfterMinutes'] = verify;
            report = golf.bind(options)(oscar, report);
            mike['body'] = report;
            mike = zulu.bind(tango)(mike);
 252:
            mike = undefined;
            return mike;
 256:
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo) { // Original name: handleLoadMessagesSuccess
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            report = entity.jump;
            mike = entity.isStale;
            zulu = entity.isPreview;
            entity = undefined;
            if(!(zulu === entity)) { _fun00022_ip = 34; continue _fun00021 }
 32:
            zulu = false;
 34:
            if(zulu) { _fun00022_ip = 272; continue _fun00021 }
 40:
            zulu = _closure1_slot27;
            zulu = zulu[golf];
            tango = null;
            tango = tango != zulu;
            options = 0;
            if(!tango) { _fun00022_ip = 65; continue _fun00021 }
 62:
            options = zulu;
 65:
            zulu = global;
            verify = zulu.Date;
            tango = verify.now;
            tango = tango.bind(verify)();
            options = tango - options;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            tango = 21;
            tango = offset[tango];
            tango = verify.bind(entity)(tango);
            tango = tango.Millis;
            verify = tango.SECOND;
            tango = 10;
            tango = tango * verify;
            if(!(!(options < tango))) { _fun00022_ip = 272; continue _fun00021 }
 132:
            tango = _closure1_slot27;
            options = zulu.Date;
            zulu = options.now;
            zulu = zulu.bind(options)();
            tango[golf] = zulu;
            tango = _closure1_slot14;
            zulu = tango.getChannelId;
            zulu = zulu.bind(tango)();
            options = _closure1_slot10;
            tango = options.getCurrentSidebarChannelId;
            tango = tango.bind(options)(zulu);
            if(!mike) { _fun00022_ip = 201; continue _fun00021 }
 187:
            verify = _closure1_slot8;
            options = verify.isConnected;
            mike = options.bind(verify)();
 201:
            if(!mike) { _fun00022_ip = 218; continue _fun00021 }
 204:
            zulu = golf === zulu;
            if(zulu) { _fun00022_ip = 215; continue _fun00021 }
 211:
            zulu = golf === tango;
 215:
            mike = zulu;
 218:
            if(!mike) { _fun00022_ip = 272; continue _fun00021 }
 221:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 20;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.fetchMessages;
            mike = {};
            mike['channelId'] = golf;
            oscar = _closure1_slot16;
            mike['limit'] = oscar;
            mike['jump'] = report;
            mike = zulu.bind(tango)(mike);
 272:
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: handleUploadFail
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            oscar = entity.messageRecord;
            report = entity.reason;
            tango = null;
            if(!(tango != oscar)) { _fun00024_ip = 108; continue _fun00023 }
 26:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 27;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            options = 'MESSAGE_SEND_FAILED';
            entity['type'] = options;
            entity['channelId'] = golf;
            oscar = oscar.id;
            entity['messageId'] = oscar;
            oscar = tango != report;
            tango = null;
            if(!oscar) { _fun00024_ip = 91; continue _fun00023 }
 88:
            tango = report;
 91:
            entity['reason'] = tango;
            tango = true;
            entity['shouldNotify'] = tango;
            entity = mike.bind(zulu)(entity);
 108:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo) { // Original name: handleAppStateChanged
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            mike = entity.state;
            entity = 'active';
            if(!(entity === mike)) { _fun00026_ip = 83; continue _fun00025 }
 16:
            zulu = _closure1_slot14;
            entity = zulu.getChannelId;
            report = entity.bind(zulu)();
            entity = null;
            if(!(entity != report)) { _fun00026_ip = 79; continue _fun00025 }
 39:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 20;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.fetchNewLocalMessages;
            mike = _closure1_slot16;
            mike = zulu.bind(tango)(report, mike);
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
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.isTextChannel;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot16 = options;
    options = tango.CURRENT_APP_CONTEXT;
    var _closure1_slot17 = options;
    options = tango.ChannelTypes;
    var _closure1_slot18 = options;
    options = tango.AbortCodes;
    var _closure1_slot19 = options;
    options = tango.Routes;
    var _closure1_slot20 = options;
    tango = tango.ChannelTypesSets;
    var _closure1_slot21 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.isStaticChannelRoute;
    var _closure1_slot22 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.Logger;
    tango = verify.prototype;
    options = Object.create(tango, {constructor: {value: verify}});
    romeo = 'MessageManager';
    foxtrot = options;
    tango = new foxtrot[verify](romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot23 = tango;
    tango = 21;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    options = tango.DAY;
    tango = 90;
    tango = tango * options;
    var _closure1_slot25 = tango;
    tango = 'viewedThreadIds';
    var _closure1_slot26 = tango;
    tango = {};
    var _closure1_slot27 = tango;
    tango = 28;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: MessageManager
            golf = this;
            romeo = 0;
            options = copyRestArgs(romeo);
            entity = _closure1_slot3;
            oscar = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(golf, oscar);
            mike = _closure1_slot28;
            entity = new Array(0);
            romeo = entity;
            yankee = options;
            offset = 0;
            options = arraySpread(romeo, yankee, offset);
            entity = mike.bind(report)(golf, oscar, entity);
            mike = _closure1_slot30;
            entity['fetchMessages'] = mike;
            mike = _closure1_slot32;
            entity['loadSelectedChannelIfNecessary'] = mike;
            mike = global;
            mike = mike.Map;
            report = mike.prototype;
            report = Object.create(report, {constructor: {value: mike}});
            foxtrot = report;
            mike = new foxtrot[mike](romeo);
            golf = mike instanceof Object ? mike : report;
            oscar = golf.set;
            report = _closure1_slot10;
            mike = _closure1_slot36;
            mike = oscar.bind(golf)(report, mike);
            entity['stores'] = mike;
            mike = {};
            report = _closure1_slot42;
            mike['APP_STATE_UPDATE'] = report;
            report = _closure1_slot31;
            mike['OVERLAY_INITIALIZE'] = report;
            report = _closure1_slot33;
            mike['CHANNEL_SELECT'] = report;
            report = _closure1_slot34;
            mike['VOICE_CHANNEL_SELECT'] = report;
            report = _closure1_slot38;
            mike['THREAD_CREATE'] = report;
            oscar = function() { // Original name: THREAD_LIST_SYNC
                mike = _closure1_slot32;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            mike['THREAD_LIST_SYNC'] = oscar;
            mike['CHANNEL_CREATE'] = report;
            report = _closure1_slot37;
            mike['CHANNEL_PRELOAD'] = report;
            report = function() { // Original name: GUILD_CREATE
                mike = _closure1_slot32;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            mike['GUILD_CREATE'] = report;
            report = _closure1_slot39;
            mike['MESSAGE_END_EDIT'] = report;
            report = _closure1_slot40;
            mike['LOAD_MESSAGES_SUCCESS'] = report;
            tango = _closure1_slot41;
            mike['UPLOAD_FAIL'] = tango;
            tango = function() { // Original name: CHANNEL_DELETE
                mike = _closure1_slot32;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            mike['CHANNEL_DELETE'] = tango;
            zulu = function() { // Original name: THREAD_DELETE
                mike = _closure1_slot32;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            mike['THREAD_DELETE'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 27;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.subscribe;
            zulu = _closure1_slot31;
            mike = 'CONNECTION_OPEN';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        oscar = function() { // Original name: value
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 27;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.unsubscribe;
            zulu = _closure1_slot31;
            mike = 'CONNECTION_OPEN';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 29;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/MessageManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();