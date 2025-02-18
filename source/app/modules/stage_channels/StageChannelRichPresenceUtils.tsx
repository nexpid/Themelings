// app/modules/stage_channels/StageChannelRichPresenceUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    tangon = function(argFoo) { // Original name: unpackStageChannelParty
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = report;
            michal = undefined;
            zuuluu = undefined;
            oscard = undefined;
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 31; continue _fun00001 }
 18:
            report = tangon;
            report = report.party;
            if(!(entity == report)) { _fun00002_ip = 33; continue _fun00001 }
 31:
            return michal;
 33:
            tangon = tangon.party;
            zuuluu = tangon.id;
            oscard = tangon.size;
 49: // try_start_0
            tangon = zuuluu;
            if(!(entity != tangon)) { _fun00002_ip = 243; continue _fun00001 }
 59:
            option = zuuluu;
            golfie = option.startsWith;
            tangon = _closure1_slot7;
            tangon = golfie.bind(option)(tangon);
            if(!tangon) { _fun00002_ip = 243; continue _fun00001 }
 86:
            golfie = zuuluu;
            tangon = golfie.split;
            zuuluu = ':';
            golfie = tangon.bind(golfie)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = 5;
            tangon = tangon.bind(michal)(golfie, zuuluu);
            zuuluu = 1;
            verify = tangon[zuuluu];
            zuuluu = 2;
            option = tangon[zuuluu];
            zuuluu = 3;
            offset = tangon[zuuluu];
            zuuluu = 4;
            tangon = tangon[zuuluu];
            zuuluu = global;
            golfie = zuuluu.parseInt;
            zuuluu = 16;
            golfie = golfie.bind(michal)(offset, zuuluu);
            zuuluu = {};
            zuuluu['guildId'] = verify;
            zuuluu['channelId'] = option;
            zuuluu['size'] = oscard;
            oscard = _closure1_slot8;
            option = golfie & oscard;
            oscard = 0;
            option = oscard !== option;
            zuuluu['userIsSpeaker'] = option;
            option = _closure1_slot9;
            option = golfie & option;
            option = oscard !== option;
            zuuluu['guildIsPartnered'] = option;
            report = _closure1_slot10;
            report = golfie & report;
            report = oscard !== report;
            zuuluu['guildIsVerified'] = report;
            zuuluu['stageInstanceId'] = tangon;
 241: // try_end0
            return zuuluu;
 243:
            return michal;
 245: // catch_target0
            CatchBlockStart(arg_register=1);
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = yankee.bind(entity)(report);
    var _closure1_slot0 = report;
    verify = 1;
    report = golfie[verify];
    report = yankee.bind(entity)(report);
    var _closure1_slot1 = report;
    option = 2;
    report = golfie[option];
    report = yankee.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = golfie[report];
    report = yankee.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    offset = golfie[report];
    offset = yankee.bind(entity)(offset);
    var _closure1_slot4 = offset;
    offset = 5;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    offset = offset.STAGE_APPLICATION_ID;
    var _closure1_slot5 = offset;
    offset = 6;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    offset = offset.GuildFeatures;
    var _closure1_slot6 = offset;
    offset = 'stage:';
    var _closure1_slot7 = offset;
    var _closure1_slot8 = verify;
    var _closure1_slot9 = option;
    var _closure1_slot10 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/stage_channels/StageChannelRichPresenceUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: packStageChannelPartyId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot1;
            zuuluu = tangon.getId;
            oscard = zuuluu.bind(tangon)();
            report = _closure1_slot4;
            tangon = report.isSpeaker;
            zuuluu = entity.id;
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            tangon = 0;
            if(!zuuluu) { _fun00004_ip = 53; continue _fun00003 }
 46:
            zuuluu = _closure1_slot8;
            tangon = zuuluu | 0;
 53:
            oscard = _closure1_slot3;
            report = oscard.getGuild;
            zuuluu = entity.getGuildId;
            zuuluu = zuuluu.bind(entity)();
            golfie = report.bind(oscard)(zuuluu);
            zuuluu = null;
            report = tangon;
            if(!(zuuluu != golfie)) { _fun00004_ip = 159; continue _fun00003 }
 86:
            oscard = golfie.hasFeature;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.PARTNERED;
            zuuluu = oscard.bind(golfie)(zuuluu);
            oscard = tangon;
            if(!zuuluu) { _fun00004_ip = 121; continue _fun00003 }
 113:
            zuuluu = _closure1_slot9;
            oscard = tangon | zuuluu;
 121:
            tangon = golfie.hasFeature;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.VERIFIED;
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = oscard;
            if(!tangon) { _fun00004_ip = 156; continue _fun00003 }
 148:
            tangon = _closure1_slot10;
            zuuluu = oscard | tangon;
 156:
            report = zuuluu;
 159:
            tangon = report.toString;
            zuuluu = 16;
            yankee = tangon.bind(report)(zuuluu);
            sizing = _closure1_slot7;
            kiloes = entity.guild_id;
            foxtra = entity.id;
            entity = argBar;
            verify = entity.id;
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            output = '';
            entity = ':';
            backup = entity;
            romeon = entity;
            offset = entity;
            entity = output[zuuluu](sizing, kiloes, backup, foxtra, romeon, yankee, offset, verify, option);
            return entity;
        }
    };
    zuuluu['packStageChannelPartyId'] = report;
    zuuluu['unpackStageChannelParty'] = tangon;
    tangon = function(argFoo) { // Original name: isStageActivity
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = null;
            zuuluu = michal == entity;
            michal = undefined;
            if(zuuluu) { _fun00006_ip = 20; continue _fun00005 }
 14:
            michal = entity.application_id;
 20:
            entity = _closure1_slot5;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['isStageActivity'] = tangon;
    michal = function(argFoo) { // Original name: shouldShowActivity
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot11;
            zuuluu = undefined;
            michal = argFoo;
            zuuluu = tangon.bind(zuuluu)(michal);
            michal = null;
            if(!(michal != zuuluu)) { _fun00008_ip = 48; continue _fun00007 }
 23:
            tangon = zuuluu.channelId;
            zuuluu = _closure1_slot2;
            entity = zuuluu.getChannel;
            entity = entity.bind(zuuluu)(tangon);
            entity = michal != entity;
            return entity;
 48:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldShowActivity'] = michal;
    return entity;
})();