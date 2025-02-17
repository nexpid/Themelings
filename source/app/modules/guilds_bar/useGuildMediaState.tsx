// app/modules/guilds_bar/useGuildMediaState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot17;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot17;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: canConnectToChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tango = arguments[2];
            golf = undefined;
            if(!(tango === golf)) { _fun00008_ip = 19; continue _fun00007 }
 12:
            tango = _closure1_slot10;
 19:
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00008_ip = 72; continue _fun00007 }
 28:
            zulu = report.type;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            mike = 13;
            mike = options[mike];
            mike = oscar.bind(golf)(mike);
            mike = mike.ChannelTypes;
            mike = mike.GUILD_STAGE_VOICE;
            entity = zulu !== mike;
 72:
            if(!entity) { _fun00008_ip = 87; continue _fun00007 }
 75:
            zulu = report.id;
            mike = argBar;
            entity = mike !== zulu;
 87:
            if(!entity) { _fun00008_ip = 115; continue _fun00007 }
 90:
            zulu = tango.canBasicChannel;
            mike = _closure1_slot15;
            mike = mike.VIEW_CHANNEL;
            entity = zulu.bind(tango)(mike, report);
 115:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.isVoiceChannel;
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
    tango = golf.bind(entity)(tango);
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
    tango = report.bind(entity)(tango);
    tango = tango.BasicPermissions;
    var _closure1_slot15 = tango;
    tango = 22;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/useGuildMediaState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useGuildMediaState
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            kilo = argFoo;
            var _closure2_slot0 = kilo;
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            result = 14;
            zulu = oscar[result];
            report = undefined;
            verify = tango.bind(report)(zulu);
            options = verify.useStateFromStores;
            zulu = _closure1_slot13;
            golf = new Array(1);
            golf[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot13;
                mike = zulu.isMuted;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            backup = options.bind(verify)(golf, zulu);
            var _closure2_slot1 = backup;
            zulu = 15;
            zulu = oscar[zulu];
            golf = tango.bind(report)(zulu);
            zulu = golf.useGuildActiveEvent;
            options = zulu.bind(golf)(kilo);
            var _closure2_slot2 = options;
            zulu = 16;
            zulu = oscar[zulu];
            verify = tango.bind(report)(zulu);
            golf = verify.useBlockingVoiceStatesConfigForBlocker;
            zulu = 'use-guild-media-state';
            zulu = golf.bind(verify)(zulu);
            foxtrot = zulu.enabled;
            var _closure2_slot3 = foxtrot;
            zulu = oscar[result];
            offset = tango.bind(report)(zulu);
            verify = offset.useStateFromStoresArray;
            zulu = _closure1_slot3;
            golf = new Array(2);
            golf[0] = zulu;
            zulu = _closure1_slot11;
            golf[1] = zulu;
            zulu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tango = _closure1_slot3;
                    zulu = tango.getEmbeddedActivitiesForGuild;
                    mike = _closure2_slot0;
                    tango = zulu.bind(tango)(mike);
                    mike = _closure2_slot3;
                    entity = tango;
                    if(!mike) { _fun00012_ip = 54; continue _fun00011 }
 35:
                    zulu = tango.filter;
                    mike = function(argFoo) {
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 17;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.hasBlockedOrIgnoredUserIds;
                        mike = argFoo;
                        options = mike.userIds;
                        mike = new Array(0);
                        golf = 0;
                        verify = mike;
                        report = arraySpread(verify, options, golf);
                        report = _closure1_slot11;
                        entity = report.getBlockedOrIgnoredIDs;
                        entity = entity.bind(report)();
                        entity = zulu.bind(tango)(mike, entity);
                        entity = !entity;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike);
 54:
                    return entity;
                }
            };
            verify = verify.bind(offset)(golf, zulu);
            var _closure2_slot4 = verify;
            zulu = 18;
            zulu = oscar[zulu];
            oscar = tango.bind(report)(zulu);
            tango = oscar.getEmbeddedActivityLocationChannelId;
            zulu = 0;
            golf = verify[zulu];
            zulu = null;
            offset = zulu == golf;
            zulu = undefined;
            if(offset) { _fun00010_ip = 225; continue _fun00009 }
 220:
            zulu = golf.location;
 225:
            offset = tango.bind(oscar)(zulu);
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            oscar = 19;
            oscar = zulu[oscar];
            golf = tango.bind(report)(oscar);
            oscar = golf.useIsActivitiesInTextEnabled;
            offset = oscar.bind(golf)(offset);
            var _closure2_slot5 = offset;
            oscar = zulu[result];
            echo = tango.bind(report)(oscar);
            romeo = echo.useStateFromStoresObject;
            output = _closure1_slot12;
            yankee = new Array(5);
            yankee[0] = output;
            oscar = _closure1_slot14;
            yankee[1] = oscar;
            oscar = _closure1_slot9;
            yankee[2] = oscar;
            oscar = _closure1_slot10;
            yankee[3] = oscar;
            sizing = _closure1_slot8;
            yankee[4] = sizing;
            golf = new Array(3);
            golf[0] = foxtrot;
            golf[1] = kilo;
            golf[2] = backup;
            oscar = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = _closure1_slot12;
                    entity = mike.getVoiceChannelId;
                    report = entity.bind(mike)();
                    oscar = _closure1_slot9;
                    mike = oscar.getGuild;
                    entity = _closure2_slot0;
                    entity = mike.bind(oscar)(entity);
                    mike = null;
                    oscar = mike == entity;
                    foxtrot = undefined;
                    romeo = undefined;
                    if(oscar) { _fun00014_ip = 57; continue _fun00013 }
 51:
                    romeo = entity.afkChannelId;
 57:
                    golf = _closure1_slot14;
                    oscar = golf.getUsersWithVideo;
                    entity = _closure2_slot0;
                    golf = oscar.bind(golf)(entity);
                    entity = _closure2_slot3;
                    if(entity) { _fun00014_ip = 106; continue _fun00013 }
 85:
                    options = _closure1_slot14;
                    oscar = options.getVoiceStates;
                    entity = _closure2_slot0;
                    yankee = oscar.bind(options)(entity);
                    _fun00014_ip = 156; continue _fun00013;
 106:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    entity = 17;
                    entity = options[entity];
                    options = oscar.bind(foxtrot)(entity);
                    oscar = options.filterBlockedUsersFromVoiceStates;
                    offset = _closure1_slot14;
                    verify = offset.getVoiceStates;
                    entity = _closure2_slot0;
                    entity = verify.bind(offset)(entity);
                    yankee = oscar.bind(options)(entity);
 156:
                    entity = {};
                    options = _closure2_slot1;
                    oscar = false;
                    if(options) { _fun00014_ip = 250; continue _fun00013 }
 167:
                    output = yankee;
                    oscar = false;
                    for(backup in output)
 180:
                    {
                        oscar = false;
 191:
                        options = backup;
                        source = _closure1_slot18;
                        update = _closure1_slot8;
                        echo = update.getBasicChannel;
                        options = yankee[options];
                        options = options.channelId;
                        update = echo.bind(update)(options);
                        options = mike != romeo;
                        echo = undefined;
                        if(!options) { _fun00014_ip = 234; continue _fun00013 }
 231:
                        echo = romeo;
 234:
                        options = _closure1_slot10;
                        options = source.bind(foxtrot)(update, echo, options);
                        oscar = true;
                        if(!options) { _fun00014_ip = 180; continue _fun00013 }
                    }
 250:
                    entity['guildHasVoice'] = oscar;
                    oscar = _closure2_slot1;
                    tango = false;
                    if(oscar) { _fun00014_ip = 374; continue _fun00013 }
 264:
                    oscar = _closure1_slot16;
                    verify = oscar.bind(foxtrot)(golf);
                    golf = verify.bind(foxtrot)();
                    oscar = golf.done;
                    tango = false;
                    if(oscar) { _fun00014_ip = 374; continue _fun00013 }
 287:
                    oscar = golf.value;
                    sizing = _closure1_slot18;
                    kilo = _closure1_slot8;
                    backup = kilo.getBasicChannel;
                    output = yankee[oscar];
                    result = mike == output;
                    oscar = undefined;
                    if(result) { _fun00014_ip = 324; continue _fun00013 }
 319:
                    oscar = output.channelId;
 324:
                    kilo = backup.bind(kilo)(oscar);
                    oscar = mike != romeo;
                    backup = undefined;
                    if(!oscar) { _fun00014_ip = 341; continue _fun00013 }
 338:
                    backup = romeo;
 341:
                    oscar = _closure1_slot10;
                    oscar = sizing.bind(foxtrot)(kilo, backup, oscar);
                    tango = true;
                    if(oscar) { _fun00014_ip = 374; continue _fun00013 }
 357:
                    backup = verify.bind(foxtrot)();
                    oscar = backup.done;
                    golf = backup;
                    tango = false;
                    if(!oscar) { _fun00014_ip = 287; continue _fun00013 }
 374:
                    entity['guildHasVideo'] = tango;
                    mike = mike != report;
                    if(!mike) { _fun00014_ip = 401; continue _fun00013 }
 386:
                    tango = _closure1_slot14;
                    zulu = tango.hasVideo;
                    mike = zulu.bind(tango)(report);
 401:
                    entity['selectedVoiceChannelHasVideo'] = mike;
                    return entity;
                }
            };
            yankee = romeo.bind(echo)(yankee, oscar, golf);
            golf = yankee.guildHasVoice;
            var _closure2_slot6 = golf;
            oscar = yankee.guildHasVideo;
            var _closure2_slot7 = oscar;
            romeo = yankee.selectedVoiceChannelHasVideo;
            var _closure2_slot8 = romeo;
            echo = _closure1_slot7;
            yankee = echo.getId;
            yankee = yankee.bind(echo)();
            var _closure2_slot9 = yankee;
            zulu = zulu[result];
            report = tango.bind(report)(zulu);
            tango = report.useStateFromStoresObject;
            zulu = new Array(6);
            zulu[0] = output;
            zulu[1] = sizing;
            sizing = _closure1_slot3;
            zulu[2] = sizing;
            sizing = _closure1_slot4;
            zulu[3] = sizing;
            sizing = _closure1_slot6;
            zulu[4] = sizing;
            mike = _closure1_slot10;
            zulu[5] = mike;
            mike = new Array(10);
            mike[0] = kilo;
            mike[1] = backup;
            mike[2] = foxtrot;
            mike[3] = romeo;
            mike[4] = yankee;
            mike[5] = offset;
            mike[6] = verify;
            mike[7] = options;
            mike[8] = golf;
            mike[9] = oscar;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = _closure1_slot12;
                    mike = zulu.getVoiceChannelId;
                    romeo = mike.bind(zulu)();
                    zulu = _closure1_slot8;
                    mike = zulu.getChannel;
                    mike = mike.bind(zulu)(romeo);
                    kilo = null;
                    report = kilo == mike;
                    yankee = undefined;
                    zulu = undefined;
                    if(report) { _fun00016_ip = 51; continue _fun00015 }
 46:
                    zulu = mike.guild_id;
 51:
                    mike = _closure2_slot0;
                    mike = zulu === mike;
                    if(mike) { _fun00016_ip = 84; continue _fun00015 }
 65:
                    zulu = _closure2_slot1;
                    if(!zulu) { _fun00016_ip = 84; continue _fun00015 }
 72:
                    zulu = {'audio': false, 'video': false, 'screenshare': false, 'liveStage': false, 'activeEvent': false, 'activity': false, 'isCurrentUserConnected': false};
                    return zulu;
 84:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 20;
                    zulu = oscar[zulu];
                    oscar = report.bind(yankee)(zulu);
                    report = oscar.keys;
                    options = _closure1_slot4;
                    golf = options.getStageInstancesByGuild;
                    zulu = _closure2_slot0;
                    zulu = golf.bind(options)(zulu);
                    oscar = report.bind(oscar)(zulu);
                    report = oscar.some;
                    zulu = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tango = _closure1_slot8;
                            zulu = tango.getChannel;
                            entity = argFoo;
                            report = zulu.bind(tango)(entity);
                            entity = null;
                            entity = entity != report;
                            if(!entity) { _fun00018_ip = 73; continue _fun00017 }
 29:
                            tango = _closure1_slot10;
                            zulu = tango.can;
                            golf = _closure1_slot0;
                            oscar = _closure1_slot2;
                            mike = 21;
                            oscar = oscar[mike];
                            mike = undefined;
                            mike = golf.bind(mike)(oscar);
                            mike = mike.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                            entity = zulu.bind(tango)(mike, report);
 73:
                            return entity;
                        }
                    };
                    oscar = report.bind(oscar)(zulu);
                    zulu = mike;
                    report = undefined;
                    if(!mike) { _fun00016_ip = 199; continue _fun00015 }
 159:
                    options = _closure1_slot8;
                    golf = options.getChannel;
                    verify = golf.bind(options)(romeo);
                    options = kilo == verify;
                    golf = undefined;
                    if(options) { _fun00016_ip = 192; continue _fun00015 }
 182:
                    options = verify.isGuildStageVoice;
                    golf = options.bind(verify)();
 192:
                    zulu = kilo != golf;
                    report = golf;
 199:
                    if(!zulu) { _fun00016_ip = 205; continue _fun00015 }
 202:
                    zulu = report;
 205:
                    report = !mike;
                    offset = !report;
                    if(!mike) { _fun00016_ip = 242; continue _fun00015 }
 214:
                    verify = _closure1_slot6;
                    options = verify.getActiveStreamForUser;
                    golf = _closure2_slot9;
                    report = _closure2_slot0;
                    report = options.bind(verify)(golf, report);
                    offset = kilo != report;
 242:
                    report = _closure2_slot3;
                    if(report) { _fun00016_ip = 265; continue _fun00015 }
 249:
                    golf = _closure1_slot6;
                    report = golf.getAllApplicationStreams;
                    golf = report.bind(golf)();
                    _fun00016_ip = 310; continue _fun00015;
 265:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 17;
                    report = verify[report];
                    verify = options.bind(yankee)(report);
                    options = verify.filterOutStreamsByBlockedOwner;
                    backup = _closure1_slot6;
                    report = backup.getAllApplicationStreams;
                    report = report.bind(backup)();
                    golf = options.bind(verify)(report);
 310:
                    report = golf.some;
                    tango = function(argFoo) {
                        entity = argFoo;
                        mike = entity.guildId;
                        entity = _closure2_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    golf = report.bind(golf)(tango);
                    tango = _closure2_slot5;
                    if(tango) { _fun00016_ip = 465; continue _fun00015 }
 338:
                    report = _closure1_slot16;
                    tango = _closure2_slot4;
                    output = report.bind(yankee)(tango);
                    tango = output.bind(yankee)();
                    report = tango.done;
                    verify = 18;
                    options = tango;
                    tango = false;
                    if(report) { _fun00016_ip = 480; continue _fun00015 }
 371:
                    report = options.value;
                    echo = _closure1_slot8;
                    result = echo.getChannel;
                    source = _closure1_slot0;
                    update = _closure1_slot2;
                    update = update[verify];
                    source = source.bind(yankee)(update);
                    update = source.getEmbeddedActivityLocationChannelId;
                    report = report.location;
                    report = update.bind(source)(report);
                    report = result.bind(echo)(report);
                    if(!(kilo != report)) { _fun00016_ip = 446; continue _fun00015 }
 427:
                    result = _closure1_slot5;
                    report = report.type;
                    report = result.bind(yankee)(report);
                    tango = true;
                    if(report) { _fun00016_ip = 480; continue _fun00015 }
 446:
                    result = output.bind(yankee)();
                    report = result.done;
                    options = result;
                    tango = false;
                    if(report) { _fun00016_ip = 480; continue _fun00015 }
 463:
                    _fun00016_ip = 371; continue _fun00015;
 465:
                    report = _closure2_slot4;
                    options = report.length;
                    report = 0;
                    tango = options > report;
 480:
                    options = _closure1_slot3;
                    report = options.getEmbeddedActivitiesForGuild;
                    entity = _closure2_slot0;
                    entity = report.bind(options)(entity);
                    report = entity.length;
                    entity = 0;
                    entity = report > entity;
                    if(mike) { _fun00016_ip = 531; continue _fun00015 }
 513:
                    verify = _closure2_slot6;
                    report = _closure2_slot2;
                    report = kilo != report;
                    options = _closure2_slot7;
                    _fun00016_ip = 584; continue _fun00015;
 531:
                    backup = _closure2_slot2;
                    backup = kilo == backup;
                    yankee = undefined;
                    if(backup) { _fun00016_ip = 553; continue _fun00015 }
 544:
                    backup = _closure2_slot2;
                    yankee = backup.channel_id;
 553:
                    romeo = yankee === romeo;
                    yankee = mike;
                    if(!mike) { _fun00016_ip = 567; continue _fun00015 }
 563:
                    yankee = _closure2_slot8;
 567:
                    verify = true;
                    options = yankee;
                    report = romeo;
                    oscar = zulu;
                    golf = offset;
                    tango = entity;
 584:
                    entity = {};
                    entity['audio'] = verify;
                    entity['video'] = options;
                    entity['screenshare'] = golf;
                    entity['liveStage'] = oscar;
                    entity['activeEvent'] = report;
                    entity['activity'] = tango;
                    if(mike) { _fun00016_ip = 622; continue _fun00015 }
 619:
                    mike = zulu;
 622:
                    entity['isCurrentUserConnected'] = mike;
                    return entity;
                }
            };
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();