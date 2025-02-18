// app/modules/guild_sidebar/SectionFooterHelpers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar, argBaz) { // Original name: isSectionFooterWithDivider
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            option = argBaz;
            michal = _closure1_slot0;
            entity = _closure1_slot1;
            offset = 4;
            entity = entity[offset];
            verify = undefined;
            entity = michal.bind(verify)(entity);
            entity = entity.SECTION_INDEX_GUILD_ACTIONS;
            if(!(option !== entity)) { _fun00002_ip = 66; continue _fun00001 }
 41:
            michal = golfie.getSections;
            entity = false;
            entity = michal.bind(golfie)(entity);
            michal = entity[option];
            entity = 0;
            entity = entity === michal;
            _fun00002_ip = 147; continue _fun00001;
 66:
            michal = golfie.getGuildActionSection;
            zuuluu = michal.bind(golfie)();
            michal = zuuluu.getRows;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.length;
            michal = 1;
            michal = michal === zuuluu;
            if(!michal) { _fun00002_ip = 121; continue _fun00001 }
 101:
            zuuluu = 0;
            tangon = tangon[zuuluu];
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.GUILD_PREMIUM_PROGRESS_BAR;
            michal = tangon === zuuluu;
 121:
            if(michal) { _fun00002_ip = 144; continue _fun00001 }
 124:
            zuuluu = golfie.getGuildActionSection;
            tangon = zuuluu.bind(golfie)();
            zuuluu = tangon.isEmpty;
            michal = zuuluu.bind(tangon)();
 144:
            entity = michal;
 147:
            entity = !entity;
            if(!entity) { _fun00002_ip = 294; continue _fun00001 }
 156:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[offset];
            michal = zuuluu.bind(verify)(michal);
            michal = michal.SECTION_INDEX_GUILD_ACTIONS;
            michal = option === michal;
            if(michal) { _fun00002_ip = 291; continue _fun00001 }
 186:
            zuuluu = argBar;
            tangon = !zuuluu;
            zuuluu = !tangon;
            if(tangon) { _fun00002_ip = 288; continue _fun00001 }
 198:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[offset];
            tangon = oscard.bind(verify)(tangon);
            tangon = tangon.SECTION_INDEX_FAVORITES;
            tangon = option === tangon;
            if(tangon) { _fun00002_ip = 285; continue _fun00001 }
 228:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            report = report[offset];
            report = oscard.bind(verify)(report);
            report = report.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            report = option !== report;
            if(!report) { _fun00002_ip = 282; continue _fun00001 }
 258:
            oscard = golfie.recentsSectionNumber;
            oscard = option === oscard;
            if(oscard) { _fun00002_ip = 279; continue _fun00001 }
 271:
            golfie = golfie.voiceChannelsSectionNumber;
            oscard = false;
 279:
            report = oscard;
 282:
            tangon = report;
 285:
            zuuluu = tangon;
 288:
            michal = zuuluu;
 291:
            entity = michal;
 294:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: isSectionFooterVoiceSummaryEligible
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = argBar;
            report = _closure1_slot0;
            entity = _closure1_slot1;
            golfie = 4;
            entity = entity[golfie];
            oscard = undefined;
            entity = report.bind(oscard)(entity);
            entity = entity.SECTION_INDEX_GUILD_ACTIONS;
            entity = zuuluu === entity;
            if(entity) { _fun00004_ip = 71; continue _fun00003 }
 44:
            option = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golfie];
            report = option.bind(oscard)(report);
            report = report.SECTION_INDEX_FAVORITES;
            entity = zuuluu === report;
 71:
            if(entity) { _fun00004_ip = 101; continue _fun00003 }
 74:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            entity = zuuluu === tangon;
 101:
            if(entity) { _fun00004_ip = 114; continue _fun00003 }
 104:
            tangon = michal.recentsSectionNumber;
            entity = zuuluu === tangon;
 114:
            if(entity) { _fun00004_ip = 127; continue _fun00003 }
 117:
            michal = michal.voiceChannelsSectionNumber;
            entity = zuuluu === michal;
 127:
            entity = !entity;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tangon = function(argFoo) { // Original name: getSectionFooterActiveVoiceChannels
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.category;
            tangon = michal.voiceStates;
            var _closure2_slot0 = tangon;
            tangon = michal.selectedChannelId;
            var _closure2_slot1 = tangon;
            michal = michal.selectedVoiceChannelId;
            var _closure2_slot2 = michal;
            report = _closure1_slot2;
            tangon = report.isCollapsed;
            michal = zuuluu.record;
            michal = michal.id;
            tangon = tangon.bind(report)(michal);
            michal = true;
            if(!(michal === tangon)) { _fun00006_ip = 104; continue _fun00005 }
 75:
            michal = zuuluu.getChannelRecords;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure1_slot3;
                    michal = zuuluu.can;
                    entity = _closure1_slot5;
                    entity = entity.VIEW_CHANNEL;
                    entity = michal.bind(zuuluu)(entity, tangon);
                    if(entity) { _fun00008_ip = 39; continue _fun00007 }
 35:
                    entity = false;
                    return entity;
 39:
                    michal = _closure2_slot0;
                    entity = tangon.id;
                    michal = michal[entity];
                    entity = null;
                    if(!(entity == michal)) { _fun00008_ip = 65; continue _fun00007 }
 61:
                    michal = new Array(0);
 65:
                    report = tangon.id;
                    entity = _closure2_slot2;
                    entity = report !== entity;
                    if(!entity) { _fun00008_ip = 94; continue _fun00007 }
 81:
                    tangon = tangon.id;
                    zuuluu = _closure2_slot1;
                    entity = tangon !== zuuluu;
 94:
                    if(!entity) { _fun00008_ip = 108; continue _fun00007 }
 97:
                    zuuluu = michal.length;
                    michal = 0;
                    entity = zuuluu > michal;
 108:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00006_ip = 108; continue _fun00005;
 104:
            entity = new Array(0);
 108:
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
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ChannelListGuildActionRow;
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot5 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_sidebar/SectionFooterHelpers.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar, argBaz) { // Original name: getSectionFooterConfig
        report = argFoo;
        tangon = argBaz;
        entity = {};
        golfie = _closure1_slot6;
        zuuluu = undefined;
        oscard = argBar;
        oscard = golfie.bind(zuuluu)(report, oscard, tangon);
        entity['hasDivider'] = oscard;
        michal = _closure1_slot7;
        michal = michal.bind(zuuluu)(report, tangon);
        entity['canHaveVoiceSummary'] = michal;
        return entity;
    };
    zuuluu['getSectionFooterConfig'] = report;
    zuuluu['getSectionFooterActiveVoiceChannels'] = tangon;
    michal = function(argFoo) { // Original name: isSectionFooterWithActiveVoiceChannels
        michal = argFoo;
        oscard = michal.category;
        entity = michal.voiceStates;
        report = michal.selectedChannelId;
        tangon = michal.selectedVoiceChannelId;
        zuuluu = _closure1_slot8;
        michal = {};
        michal['category'] = oscard;
        michal['selectedChannelId'] = report;
        michal['selectedVoiceChannelId'] = tangon;
        michal['voiceStates'] = entity;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        michal = entity.length;
        entity = 0;
        entity = michal > entity;
        return entity;
    };
    zuuluu['isSectionFooterWithActiveVoiceChannels'] = michal;
    return entity;
})();