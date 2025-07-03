// app/experiments/ChannelSummariesExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: canSeeChannelSummaries
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = arguments[1];
            golfie = arguments[2];
            oscard = undefined;
            if(!(report === oscard)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            report = false;
 17:
            if(!(golfie === oscard)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            golfie = true;
 23:
            verify = null;
            entity = verify != tangon;
            if(!entity) { _fun00002_ip = 247; continue _fun00001 }
 35:
            option = verify == tangon;
            zuuluu = false;
            michal = false;
            if(option) { _fun00002_ip = 163; continue _fun00001 }
 46:
            romeon = _closure1_slot2;
            yankee = romeon.getGuild;
            offset = verify == tangon;
            foxtra = undefined;
            if(offset) { _fun00002_ip = 72; continue _fun00001 }
 67:
            foxtra = tangon.guild_id;
 72:
            backup = verify != foxtra;
            offset = '';
            if(!backup) { _fun00002_ip = 86; continue _fun00001 }
 83:
            offset = foxtra;
 86:
            offset = yankee.bind(romeon)(offset);
            verify = verify != offset;
            if(!verify) { _fun00002_ip = 113; continue _fun00001 }
 98:
            yankee = offset.rulesChannelId;
            offset = tangon.id;
            verify = yankee === offset;
 113:
            option = _closure1_slot5;
            yankee = option.SUMMARIZEABLE;
            offset = yankee.has;
            option = tangon.type;
            option = offset.bind(yankee)(option);
            if(!option) { _fun00002_ip = 154; continue _fun00001 }
 141:
            offset = tangon.isNSFW;
            offset = offset.bind(tangon)();
            option = !offset;
 154:
            if(!option) { _fun00002_ip = 160; continue _fun00001 }
 157:
            option = !verify;
 160:
            michal = option;
 163:
            option = !michal;
            michal = !option;
            if(option) { _fun00002_ip = 244; continue _fun00001 }
 172:
            zuuluu = zuuluu !== report;
            if(zuuluu) { _fun00002_ip = 206; continue _fun00001 }
 179:
            option = tangon.hasFlag;
            report = _closure1_slot8;
            report = report.SUMMARIES_DISABLED;
            report = option.bind(tangon)(report);
            zuuluu = !report;
 206:
            if(!zuuluu) { _fun00002_ip = 241; continue _fun00001 }
 209:
            report = _closure1_slot10;
            verify = _closure1_slot2;
            option = verify.getGuild;
            tangon = tangon.guild_id;
            tangon = option.bind(verify)(tangon);
            zuuluu = report.bind(oscard)(tangon, golfie);
 241:
            michal = zuuluu;
 244:
            entity = michal;
 247:
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tangon = function(argFoo) { // Original name: canGuildUseConversationSummaries
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            tangon = arguments[1];
            entity = undefined;
            if(!(tangon === entity)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            tangon = true;
 14:
            michal = null;
            entity = michal != oscard;
            if(!entity) { _fun00004_ip = 148; continue _fun00003 }
 26:
            golfie = oscard.id;
            zuuluu = michal != golfie;
            if(!zuuluu) { _fun00004_ip = 63; continue _fun00003 }
 38:
            michal = _closure1_slot3;
            michal = golfie === michal;
            if(michal) { _fun00004_ip = 60; continue _fun00003 }
 52:
            report = _closure1_slot4;
            michal = golfie === report;
 60:
            zuuluu = michal;
 63:
            michal = !zuuluu;
            if(zuuluu) { _fun00004_ip = 145; continue _fun00003 }
 69:
            option = oscard.features;
            golfie = option.has;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.SUMMARIES_ENABLED_GA;
            zuuluu = golfie.bind(option)(zuuluu);
            golfie = !zuuluu;
            zuuluu = !golfie;
            if(golfie) { _fun00004_ip = 142; continue _fun00003 }
 107:
            tangon = !tangon;
            if(tangon) { _fun00004_ip = 139; continue _fun00003 }
 113:
            golfie = oscard.features;
            oscard = golfie.has;
            report = _closure1_slot6;
            report = report.SUMMARIES_ENABLED_BY_USER;
            tangon = oscard.bind(golfie)(report);
 139:
            zuuluu = tangon;
 142:
            michal = zuuluu;
 145:
            entity = michal;
 148:
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    verify = option[entity];
    oscard = argBaz;
    entity = undefined;
    oscard = oscard.bind(entity)(verify);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.ME;
    var _closure1_slot3 = verify;
    verify = oscard.FAVORITES;
    var _closure1_slot4 = verify;
    verify = oscard.ChannelTypesSets;
    var _closure1_slot5 = verify;
    verify = oscard.GuildFeatures;
    var _closure1_slot6 = verify;
    oscard = oscard.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.ChannelFlags;
    var _closure1_slot8 = oscard;
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'experiments/ChannelSummariesExperiment.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: channelEligibleForSummaries
        report = _closure1_slot9;
        tangon = undefined;
        zuuluu = argFoo;
        michal = true;
        entity = false;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    zuuluu['channelEligibleForSummaries'] = oscard;
    zuuluu['canSeeChannelSummaries'] = report;
    zuuluu['canGuildUseConversationSummaries'] = tangon;
    tangon = function(argFoo) { // Original name: useChannelSummariesExperiment
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = arguments[2];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            tangon = false;
 11:
            michal = _closure1_slot9;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity, tangon);
            return entity;
        }
    };
    zuuluu['useChannelSummariesExperiment'] = tangon;
    michal = function(argFoo) { // Original name: useGuildEligibleForSummaries
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure1_slot10;
                report = _closure1_slot2;
                michal = report.getGuild;
                entity = _closure2_slot0;
                golfie = null;
                verify = golfie == entity;
                zuuluu = undefined;
                entity = undefined;
                if(verify) { _fun00008_ip = 45; continue _fun00007 }
 36:
                option = _closure2_slot0;
                entity = option.id;
 45:
                if(!(golfie == entity)) { _fun00008_ip = 53; continue _fun00007 }
 49:
                entity = _closure1_slot7;
 53:
                michal = michal.bind(report)(entity);
                entity = false;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useGuildEligibleForSummaries'] = michal;
    return entity;
})();