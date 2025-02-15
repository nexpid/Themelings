// app/modules/stage_channels/StageChannelSelfRichPresenceStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun68423: for(var _fun68423_ip = 0; ; ) switch(_fun68423_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot22;
            entity = entity.bind(zulu)();
            if(entity) { _fun68423_ip = 51; continue _fun68423 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun68423_ip = 92; continue _fun68423;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun68423_ip = 71; continue _fun68423 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun68424: for(var _fun68424_ip = 0; ; ) switch(_fun68424_ip) {
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
            _fun68424_ip = 76; continue _fun68424;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot22 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    verify = function() { // Original name: handleUpdateActivity
        _fun68427: for(var _fun68427_ip = 0; ; ) switch(_fun68427_ip) {
 0:
            entity = function() { // Original name: buildActivity
                _fun68428: for(var _fun68428_ip = 0; ; ) switch(_fun68428_ip) {
 0:
                    mike = _closure1_slot12;
                    entity = mike.getVoiceChannelId;
                    foxtrot = entity.bind(mike)();
                    entity = null;
                    if(!(entity != foxtrot)) { _fun68428_ip = 687; continue _fun68428 }
 26:
                    zulu = _closure1_slot14;
                    mike = zulu.getStageInstanceByChannel;
                    romeo = mike.bind(zulu)(foxtrot);
                    if(!(entity != romeo)) { _fun68428_ip = 685; continue _fun68428 }
 48:
                    zulu = _closure1_slot9;
                    mike = zulu.getChannel;
                    zulu = mike.bind(zulu)(foxtrot);
                    if(!(entity != zulu)) { _fun68428_ip = 683; continue _fun68428 }
 69:
                    tango = _closure1_slot2;
                    report = _closure1_slot3;
                    mike = 13;
                    mike = report[mike];
                    verify = undefined;
                    report = tango.bind(verify)(mike);
                    tango = report.canEveryone;
                    mike = _closure1_slot18;
                    mike = mike.VIEW_CHANNEL;
                    mike = tango.bind(report)(mike, zulu);
                    if(mike) { _fun68428_ip = 118; continue _fun68428 }
 116:
                    return entity;
 118:
                    report = _closure1_slot10;
                    tango = report.getGuild;
                    mike = zulu.getGuildId;
                    mike = mike.bind(zulu)();
                    oscar = tango.bind(report)(mike);
                    if(!(entity != oscar)) { _fun68428_ip = 681; continue _fun68428 }
 149:
                    tango = oscar.hasFeature;
                    mike = _closure1_slot17;
                    mike = mike.DISCOVERABLE;
                    mike = tango.bind(oscar)(mike);
                    if(mike) { _fun68428_ip = 175; continue _fun68428 }
 173:
                    return entity;
 175:
                    tango = _closure1_slot0;
                    report = _closure1_slot3;
                    mike = 14;
                    mike = report[mike];
                    tango = tango.bind(verify)(mike);
                    mike = tango.packStageChannelPartyId;
                    tango = mike.bind(tango)(zulu, romeo);
                    report = _closure1_slot20;
                    golf = entity == report;
                    mike = undefined;
                    if(golf) { _fun68428_ip = 240; continue _fun68428 }
 220:
                    report = report.party;
                    golf = entity == report;
                    mike = undefined;
                    if(golf) { _fun68428_ip = 240; continue _fun68428 }
 235:
                    mike = report.id;
 240:
                    yankee = null;
                    if(!(mike === tango)) { _fun68428_ip = 250; continue _fun68428 }
 246:
                    yankee = _closure1_slot20;
 250:
                    options = _closure1_slot13;
                    golf = options.getMutableParticipants;
                    report = zulu.id;
                    backup = _closure1_slot0;
                    kilo = _closure1_slot3;
                    mike = 15;
                    mike = kilo[mike];
                    mike = backup.bind(verify)(mike);
                    mike = mike.StageChannelParticipantNamedIndex;
                    mike = mike.SPEAKER;
                    mike = golf.bind(options)(report, mike);
                    golf = mike.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot3;
                        entity = 15;
                        zulu = zulu[entity];
                        entity = undefined;
                        entity = tango.bind(entity)(zulu);
                        entity = entity.StageChannelParticipantTypes;
                        entity = entity.STREAM;
                        entity = mike === entity;
                        return entity;
                    };
                    report = golf.bind(mike)(report);
                    golf = report.length;
                    mike = mike.length;
                    report = mike - golf;
                    options = _closure1_slot13;
                    mike = options.getParticipantCount;
                    mike = mike.bind(options)(foxtrot);
                    options = mike - golf;
                    golf = entity == yankee;
                    mike = undefined;
                    if(golf) { _fun68428_ip = 384; continue _fun68428 }
 364:
                    golf = yankee.party;
                    foxtrot = entity == golf;
                    mike = undefined;
                    if(foxtrot) { _fun68428_ip = 384; continue _fun68428 }
 379:
                    mike = golf.size;
 384:
                    mike = entity != mike;
                    golf = 0;
                    if(!mike) { _fun68428_ip = 411; continue _fun68428 }
 393:
                    mike = yankee.party;
                    foxtrot = mike.size;
                    mike = 1;
                    golf = foxtrot[mike];
 411:
                    mike = {};
                    foxtrot = _closure1_slot15;
                    mike['application_id'] = foxtrot;
                    romeo = romeo.topic;
                    if(!(entity == romeo)) { _fun68428_ip = 438; continue _fun68428 }
 432:
                    romeo = zulu.topic;
 438:
                    if(!(entity == romeo)) { _fun68428_ip = 447; continue _fun68428 }
 442:
                    romeo = zulu.name;
 447:
                    mike['name'] = romeo;
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot3;
                    romeo = 16;
                    romeo = backup[romeo];
                    foxtrot = foxtrot.bind(verify)(romeo);
                    romeo = foxtrot.getStageHasMedia;
                    zulu = zulu.id;
                    zulu = romeo.bind(foxtrot)(zulu);
                    offset = _closure1_slot16;
                    if(zulu) { _fun68428_ip = 502; continue _fun68428 }
 494:
                    zulu = offset.LISTENING;
                    _fun68428_ip = 508; continue _fun68428;
 502:
                    zulu = offset.WATCHING;
 508:
                    mike['type'] = zulu;
                    zulu = {};
                    romeo = entity == yankee;
                    offset = undefined;
                    if(romeo) { _fun68428_ip = 543; continue _fun68428 }
 523:
                    yankee = yankee.timestamps;
                    romeo = entity == yankee;
                    offset = undefined;
                    if(romeo) { _fun68428_ip = 543; continue _fun68428 }
 538:
                    offset = yankee.start;
 543:
                    if(!(entity == offset)) { _fun68428_ip = 585; continue _fun68428 }
 547:
                    yankee = global;
                    yankee = yankee.Date;
                    romeo = yankee.prototype;
                    romeo = Object.create(romeo, {constructor: {value: yankee}});
                    result = romeo;
                    yankee = new result[yankee](output);
                    romeo = yankee instanceof Object ? yankee : romeo;
                    yankee = romeo.getTime;
                    offset = yankee.bind(romeo)();
 585:
                    zulu['start'] = offset;
                    mike['timestamps'] = zulu;
                    zulu = {};
                    offset = oscar.icon;
                    yankee = entity != offset;
                    verify = undefined;
                    if(!yankee) { _fun68428_ip = 613; continue _fun68428 }
 610:
                    verify = offset;
 613:
                    zulu['small_image'] = verify;
                    oscar = oscar.name;
                    zulu['small_text'] = oscar;
                    mike['assets'] = zulu;
                    zulu = {};
                    zulu['id'] = tango;
                    tango = new Array(2);
                    tango[0] = report;
                    report = global;
                    oscar = report.Math;
                    report = oscar.max;
                    report = report.bind(oscar)(options, golf);
                    tango[1] = report;
                    zulu['size'] = tango;
                    mike['party'] = zulu;
                    return mike;
 681:
                    return entity;
 683:
                    return entity;
 685:
                    return entity;
 687:
                    return entity;
                }
            };
            report = undefined;
            zulu = entity.bind(report)();
            tango = _closure1_slot1;
            oscar = _closure1_slot3;
            entity = 17;
            entity = oscar[entity];
            tango = tango.bind(report)(entity);
            entity = _closure1_slot20;
            entity = tango.bind(report)(zulu, entity);
            entity = !entity;
            if(!entity) { _fun68427_ip = 60; continue _fun68427 }
 54:
            _closure1_slot20 = zulu;
            entity = true;
 60:
            return entity;
        }
    };
    var _closure1_slot23 = verify;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 11;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.STAGE_APPLICATION_ID;
    var _closure1_slot15 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.ActivityTypes;
    var _closure1_slot16 = options;
    options = mike.GuildFeatures;
    var _closure1_slot17 = options;
    options = mike.Permissions;
    var _closure1_slot18 = options;
    mike = mike.RTCConnectionStates;
    var _closure1_slot19 = mike;
    mike = null;
    var _closure1_slot20 = mike;
    mike = 18;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: StageChannelSelfRichPresenceStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot4;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot21;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            oscar = this;
            report = oscar.waitFor;
            offset = _closure1_slot9;
            verify = _closure1_slot12;
            options = _closure1_slot14;
            golf = _closure1_slot11;
            yankee = oscar;
            entity = yankee[report](offset, verify, options, golf, oscar);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getActivity';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot20;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'StageChannelSelfRichPresenceStore';
    options['displayName'] = mike;
    mike = 19;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = verify;
    mike['STAGE_INSTANCE_CREATE'] = verify;
    mike['STAGE_INSTANCE_UPDATE'] = verify;
    mike['STAGE_INSTANCE_DELETE'] = verify;
    mike['VOICE_CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleUpdateRTCConnection
        _fun68434: for(var _fun68434_ip = 0; ; ) switch(_fun68434_ip) {
 0:
            entity = argFoo;
            oscar = entity.state;
            report = _closure1_slot20;
            entity = null;
            golf = entity == report;
            zulu = undefined;
            tango = undefined;
            if(golf) { _fun68434_ip = 64; continue _fun68434 }
 28:
            report = report.party;
            golf = entity == report;
            tango = undefined;
            if(golf) { _fun68434_ip = 64; continue _fun68434 }
 43:
            golf = report.size;
            report = entity == golf;
            tango = undefined;
            if(report) { _fun68434_ip = 64; continue _fun68434 }
 57:
            report = 1;
            tango = golf[report];
 64:
            golf = entity != tango;
            report = 0;
            entity = 0;
            if(!golf) { _fun68434_ip = 78; continue _fun68434 }
 75:
            entity = tango;
 78:
            tango = _closure1_slot19;
            tango = tango.RTC_CONNECTED;
            tango = oscar !== tango;
            if(tango) { _fun68434_ip = 99; continue _fun68434 }
 95:
            tango = entity > report;
 99:
            entity = !tango;
            if(tango) { _fun68434_ip = 113; continue _fun68434 }
 105:
            mike = _closure1_slot23;
            entity = mike.bind(zulu)();
 113:
            return entity;
        }
    };
    mike['RTC_CONNECTION_STATE'] = verify;
    tango = function(argFoo) { // Original name: handleVoiceStateUpdates
        _fun68435: for(var _fun68435_ip = 0; ; ) switch(_fun68435_ip) {
 0:
            entity = argFoo;
            golf = entity.voiceStates;
            entity = undefined;
            var _closure2_slot0 = entity;
            zulu = _closure1_slot20;
            report = null;
            if(!(report != zulu)) { _fun68435_ip = 108; continue _fun68435 }
 30:
            oscar = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 14;
            zulu = options[zulu];
            options = oscar.bind(entity)(zulu);
            oscar = options.unpackStageChannelParty;
            zulu = _closure1_slot20;
            zulu = oscar.bind(options)(zulu);
            _closure2_slot0 = zulu;
            zulu = report != zulu;
            if(!zulu) { _fun68435_ip = 97; continue _fun68435 }
 76:
            oscar = golf.find;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.channelId;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = mike === entity;
                return entity;
            };
            tango = oscar.bind(golf)(tango);
            zulu = report != tango;
 97:
            if(!zulu) { _fun68435_ip = 108; continue _fun68435 }
 100:
            mike = _closure1_slot23;
            mike = mike.bind(entity)();
 108:
            return entity;
        }
    };
    mike['VOICE_STATE_UPDATES'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/StageChannelSelfRichPresenceStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();