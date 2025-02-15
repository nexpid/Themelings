// app/modules/stage_channels/StageChannelRichPresenceUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    yankee = argBaz;
    zulu = argFred;
    golf = argPlugh;
    tango = function(argFoo) { // Original name: unpackStageChannelParty
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tango = report;
            mike = undefined;
            zulu = undefined;
            oscar = undefined;
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 31; continue _fun00001 }
 18:
            report = tango;
            report = report.party;
            if(!(entity == report)) { _fun00002_ip = 33; continue _fun00001 }
 31:
            return mike;
 33:
            tango = tango.party;
            zulu = tango.id;
            oscar = tango.size;
 49: // try_start_0
            tango = zulu;
            if(!(entity != tango)) { _fun00002_ip = 243; continue _fun00001 }
 59:
            options = zulu;
            golf = options.startsWith;
            tango = _closure1_slot7;
            tango = golf.bind(options)(tango);
            if(!tango) { _fun00002_ip = 243; continue _fun00001 }
 86:
            golf = zulu;
            tango = golf.split;
            zulu = ':';
            golf = tango.bind(golf)(zulu);
            tango = _closure1_slot0;
            zulu = 5;
            tango = tango.bind(mike)(golf, zulu);
            zulu = 1;
            verify = tango[zulu];
            zulu = 2;
            options = tango[zulu];
            zulu = 3;
            offset = tango[zulu];
            zulu = 4;
            tango = tango[zulu];
            zulu = global;
            golf = zulu.parseInt;
            zulu = 16;
            golf = golf.bind(mike)(offset, zulu);
            zulu = {};
            zulu['guildId'] = verify;
            zulu['channelId'] = options;
            zulu['size'] = oscar;
            oscar = _closure1_slot8;
            options = golf & oscar;
            oscar = 0;
            options = oscar !== options;
            zulu['userIsSpeaker'] = options;
            options = _closure1_slot9;
            options = golf & options;
            options = oscar !== options;
            zulu['guildIsPartnered'] = options;
            report = _closure1_slot10;
            report = golf & report;
            report = oscar !== report;
            zulu['guildIsVerified'] = report;
            zulu['stageInstanceId'] = tango;
 241: // try_end0
            return zulu;
 243:
            return mike;
 245: // catch_target0
            CatchBlockStart(arg_register=1);
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = yankee.bind(entity)(report);
    var _closure1_slot0 = report;
    verify = 1;
    report = golf[verify];
    report = yankee.bind(entity)(report);
    var _closure1_slot1 = report;
    options = 2;
    report = golf[options];
    report = yankee.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = golf[report];
    report = yankee.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    offset = golf[report];
    offset = yankee.bind(entity)(offset);
    var _closure1_slot4 = offset;
    offset = 5;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    offset = offset.STAGE_APPLICATION_ID;
    var _closure1_slot5 = offset;
    offset = 6;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    offset = offset.GuildFeatures;
    var _closure1_slot6 = offset;
    offset = 'stage:';
    var _closure1_slot7 = offset;
    var _closure1_slot8 = verify;
    var _closure1_slot9 = options;
    var _closure1_slot10 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/stage_channels/StageChannelRichPresenceUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: packStageChannelPartyId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot1;
            zulu = tango.getId;
            oscar = zulu.bind(tango)();
            report = _closure1_slot4;
            tango = report.isSpeaker;
            zulu = entity.id;
            zulu = tango.bind(report)(oscar, zulu);
            tango = 0;
            if(!zulu) { _fun00004_ip = 53; continue _fun00003 }
 46:
            zulu = _closure1_slot8;
            tango = zulu | 0;
 53:
            oscar = _closure1_slot3;
            report = oscar.getGuild;
            zulu = entity.getGuildId;
            zulu = zulu.bind(entity)();
            golf = report.bind(oscar)(zulu);
            zulu = null;
            report = tango;
            if(!(zulu != golf)) { _fun00004_ip = 159; continue _fun00003 }
 86:
            oscar = golf.hasFeature;
            zulu = _closure1_slot6;
            zulu = zulu.PARTNERED;
            zulu = oscar.bind(golf)(zulu);
            oscar = tango;
            if(!zulu) { _fun00004_ip = 121; continue _fun00003 }
 113:
            zulu = _closure1_slot9;
            oscar = tango | zulu;
 121:
            tango = golf.hasFeature;
            zulu = _closure1_slot6;
            zulu = zulu.VERIFIED;
            tango = tango.bind(golf)(zulu);
            zulu = oscar;
            if(!tango) { _fun00004_ip = 156; continue _fun00003 }
 148:
            tango = _closure1_slot10;
            zulu = oscar | tango;
 156:
            report = zulu;
 159:
            tango = report.toString;
            zulu = 16;
            yankee = tango.bind(report)(zulu);
            sizing = _closure1_slot7;
            kilo = entity.guild_id;
            foxtrot = entity.id;
            entity = argBar;
            verify = entity.id;
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            output = '';
            entity = ':';
            backup = entity;
            romeo = entity;
            offset = entity;
            entity = output[zulu](sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify, options);
            return entity;
        }
    };
    zulu['packStageChannelPartyId'] = report;
    zulu['unpackStageChannelParty'] = tango;
    tango = function(argFoo) { // Original name: isStageActivity
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            mike = null;
            zulu = mike == entity;
            mike = undefined;
            if(zulu) { _fun00006_ip = 20; continue _fun00005 }
 14:
            mike = entity.application_id;
 20:
            entity = _closure1_slot5;
            entity = mike === entity;
            return entity;
        }
    };
    zulu['isStageActivity'] = tango;
    mike = function(argFoo) { // Original name: shouldShowActivity
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = _closure1_slot11;
            zulu = undefined;
            mike = argFoo;
            zulu = tango.bind(zulu)(mike);
            mike = null;
            if(!(mike != zulu)) { _fun00008_ip = 48; continue _fun00007 }
 23:
            tango = zulu.channelId;
            zulu = _closure1_slot2;
            entity = zulu.getChannel;
            entity = entity.bind(zulu)(tango);
            entity = mike != entity;
            return entity;
 48:
            entity = false;
            return entity;
        }
    };
    zulu['shouldShowActivity'] = mike;
    return entity;
})();