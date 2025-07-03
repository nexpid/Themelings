// app/modules/stage_channels/StageChannelRichPresenceUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    tangon = function(argFoo) { // Original name: unpackStageChannelParty
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = report;
            michal = undefined;
            tangon = undefined;
            verify = undefined;
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 31; continue _fun00001 }
 18:
            report = zuuluu;
            report = report.party;
            if(!(entity == report)) { _fun00002_ip = 33; continue _fun00001 }
 31:
            return michal;
 33:
            zuuluu = zuuluu.party;
            tangon = zuuluu.id;
            verify = zuuluu.size;
 49: // try_start_0
            zuuluu = tangon;
            if(!(entity != zuuluu)) { _fun00002_ip = 235; continue _fun00001 }
 59:
            golfie = tangon;
            oscard = golfie.startsWith;
            report = _closure1_slot7;
            report = oscard.bind(golfie)(report);
            if(!report) { _fun00002_ip = 235; continue _fun00001 }
 86:
            oscard = tangon;
            report = oscard.split;
            tangon = ':';
            report = report.bind(oscard)(tangon);
            tangon = _closure1_slot0;
            zuuluu = 5;
            zuuluu = tangon.bind(michal)(report, zuuluu);
            option = 1;
            yankee = zuuluu[option];
            golfie = 2;
            offset = zuuluu[golfie];
            tangon = 3;
            romeon = zuuluu[tangon];
            oscard = 4;
            tangon = zuuluu[oscard];
            zuuluu = global;
            report = zuuluu.parseInt;
            zuuluu = 16;
            report = report.bind(michal)(romeon, zuuluu);
            zuuluu = {};
            zuuluu['guildId'] = yankee;
            zuuluu['channelId'] = offset;
            zuuluu['size'] = verify;
            option = option & report;
            option = !option;
            option = !option;
            zuuluu['userIsSpeaker'] = option;
            golfie = golfie & report;
            golfie = !golfie;
            golfie = !golfie;
            zuuluu['guildIsPartnered'] = golfie;
            report = oscard & report;
            report = !report;
            report = !report;
            zuuluu['guildIsVerified'] = report;
            zuuluu['stageInstanceId'] = tangon;
 233: // try_end0
            return zuuluu;
 235:
            return michal;
 237: // catch_target0
            CatchBlockStart(arg_register=1);
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.STAGE_APPLICATION_ID;
    var _closure1_slot5 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.GuildFeatures;
    var _closure1_slot6 = report;
    report = 'stage:';
    var _closure1_slot7 = report;
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
            golfie = 0;
            if(!zuuluu) { _fun00004_ip = 49; continue _fun00003 }
 46:
            golfie = 1;
 49:
            report = _closure1_slot3;
            tangon = report.getGuild;
            zuuluu = entity.getGuildId;
            zuuluu = zuuluu.bind(entity)();
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = null;
            report = golfie;
            if(!(tangon != zuuluu)) { _fun00004_ip = 163; continue _fun00003 }
 82:
            option = zuuluu.features;
            oscard = option.has;
            tangon = _closure1_slot6;
            tangon = tangon.PARTNERED;
            tangon = oscard.bind(option)(tangon);
            oscard = golfie;
            if(!tangon) { _fun00004_ip = 121; continue _fun00003 }
 114:
            tangon = 2;
            oscard = golfie | tangon;
 121:
            golfie = zuuluu.features;
            tangon = golfie.has;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.VERIFIED;
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = oscard;
            if(!tangon) { _fun00004_ip = 160; continue _fun00003 }
 153:
            tangon = 4;
            zuuluu = oscard | tangon;
 160:
            report = zuuluu;
 163:
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
            tangon = _closure1_slot8;
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