// app/modules/interaction_components/SearchableSelectActionComponentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function(argFoo, argBar) { // Original name: getSnowflakeSelectDefaultValues
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = arguments[2];
            report = undefined;
            if(!(entity === report)) { _fun00002_ip = 18; continue _fun00001 }
 14:
            entity = new Array(0);
 18:
            var _closure2_slot0 = entity;
            var _closure2_slot1 = report;
            entity = null;
            if(!(entity == tangon)) { _fun00002_ip = 34; continue _fun00001 }
 32:
            return report;
 34:
            golfie = _closure1_slot5;
            oscard = golfie.getGuild;
            zuuluu = argBar;
            zuuluu = oscard.bind(golfie)(zuuluu);
            _closure2_slot1 = zuuluu;
            zuuluu = tangon.map;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.type;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    oscard = 9;
                    michal = michal[oscard];
                    golfie = undefined;
                    michal = tangon.bind(golfie)(michal);
                    michal = michal.SnowflakeSelectDefaultValueTypes;
                    michal = michal.USER;
                    if(!(michal !== zuuluu)) { _fun00004_ip = 404; continue _fun00003 }
 52:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    michal = tangon.bind(golfie)(michal);
                    michal = michal.SnowflakeSelectDefaultValueTypes;
                    michal = michal.ROLE;
                    if(!(michal !== zuuluu)) { _fun00004_ip = 289; continue _fun00003 }
 88:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    michal = tangon.bind(golfie)(michal);
                    michal = michal.SnowflakeSelectDefaultValueTypes;
                    michal = michal.CHANNEL;
                    if(!(michal !== zuuluu)) { _fun00004_ip = 123; continue _fun00003 }
 121:
                    return golfie;
 123:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 287; continue _fun00003 }
 139:
                    option = _closure1_slot3;
                    oscard = option.getChannel;
                    zuuluu = entity.id;
                    oscard = oscard.bind(option)(zuuluu);
                    option = michal == oscard;
                    zuuluu = null;
                    if(option) { _fun00004_ip = 285; continue _fun00003 }
 167:
                    verify = oscard.guild_id;
                    option = _closure2_slot1;
                    option = option.id;
                    zuuluu = null;
                    if(!(verify === option)) { _fun00004_ip = 285; continue _fun00003 }
 187:
                    option = _closure2_slot0;
                    verify = option.length;
                    option = 0;
                    if(!(verify > option)) { _fun00004_ip = 226; continue _fun00003 }
 202:
                    verify = _closure2_slot0;
                    option = verify.includes;
                    tangon = oscard.type;
                    tangon = option.bind(verify)(tangon);
                    zuuluu = null;
                    if(!tangon) { _fun00004_ip = 285; continue _fun00003 }
 226:
                    tangon = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 8;
                    option = offset[option];
                    option = verify.bind(golfie)(option);
                    option = option.SelectOptionType;
                    option = option.CHANNEL;
                    tangon['type'] = option;
                    option = oscard.id;
                    tangon['value'] = option;
                    oscard = oscard.name;
                    tangon['label'] = oscard;
                    zuuluu = tangon;
 285:
                    return zuuluu;
 287:
                    return michal;
 289:
                    tangon = _closure2_slot1;
                    michal = null;
                    if(!(michal != tangon)) { _fun00004_ip = 402; continue _fun00003 }
 302:
                    option = _closure1_slot5;
                    oscard = option.getRole;
                    zuuluu = _closure2_slot1;
                    tangon = zuuluu.id;
                    zuuluu = entity.id;
                    oscard = oscard.bind(option)(tangon, zuuluu);
                    tangon = michal == oscard;
                    zuuluu = null;
                    if(tangon) { _fun00004_ip = 400; continue _fun00003 }
 341:
                    tangon = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 8;
                    option = offset[option];
                    option = verify.bind(golfie)(option);
                    option = option.SelectOptionType;
                    option = option.ROLE;
                    tangon['type'] = option;
                    option = oscard.id;
                    tangon['value'] = option;
                    oscard = oscard.name;
                    tangon['label'] = oscard;
                    zuuluu = tangon;
 400:
                    return zuuluu;
 402:
                    return michal;
 404:
                    zuuluu = _closure1_slot6;
                    michal = zuuluu.getUser;
                    entity = entity.id;
                    tangon = michal.bind(zuuluu)(entity);
                    entity = null;
                    if(!(entity != tangon)) { _fun00004_ip = 548; continue _fun00003 }
 430:
                    zuuluu = _closure2_slot1;
                    oscard = entity != zuuluu;
                    zuuluu = undefined;
                    if(!oscard) { _fun00004_ip = 476; continue _fun00003 }
 446:
                    verify = _closure1_slot4;
                    option = verify.getNick;
                    michal = _closure2_slot1;
                    oscard = michal.id;
                    michal = tangon.id;
                    zuuluu = option.bind(verify)(oscard, michal);
 476:
                    michal = {};
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 8;
                    report = option[report];
                    report = oscard.bind(golfie)(report);
                    report = report.SelectOptionType;
                    report = report.USER;
                    michal['type'] = report;
                    report = tangon.id;
                    michal['value'] = report;
                    if(!(entity == zuuluu)) { _fun00004_ip = 533; continue _fun00003 }
 527:
                    zuuluu = tangon.globalName;
 533:
                    if(!(entity == zuuluu)) { _fun00004_ip = 542; continue _fun00003 }
 537:
                    zuuluu = tangon.username;
 542:
                    michal['label'] = zuuluu;
                    return michal;
 548:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.filter;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 10;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.isNotNullish;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot8 = michal;
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
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/interaction_components/SearchableSelectActionComponentUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = 1000;
    zuuluu['MIN_REREQUEST_TIME'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: queryMentionables
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            report = argBaz;
            var _closure2_slot0 = report;
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            report = zuuluu.bind(tangon)(report);
            var _closure2_slot1 = report;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00006_ip = 344; continue _fun00005 }
 42:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            offset = 5;
            zuuluu = zuuluu[offset];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.USER_SELECT;
            golfie = option === zuuluu;
            if(golfie) { _fun00006_ip = 116; continue _fun00005 }
 83:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[offset];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.MENTIONABLE_SELECT;
            golfie = option === zuuluu;
 116:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[offset];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.ROLE_SELECT;
            oscard = option === zuuluu;
            if(oscard) { _fun00006_ip = 185; continue _fun00005 }
 152:
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[offset];
            zuuluu = verify.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.MENTIONABLE_SELECT;
            oscard = option === zuuluu;
 185:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            entity = 6;
            entity = option[entity];
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.queryMentionResults;
            entity = {};
            option = argBar;
            entity['query'] = option;
            entity['channel'] = report;
            report = false;
            entity['canMentionEveryone'] = report;
            entity['canMentionHere'] = report;
            entity['canMentionUsers'] = golfie;
            entity['canMentionRoles'] = oscard;
            oscard = true;
            entity['includeAllGuildUsers'] = oscard;
            entity['includeNonMentionableRoles'] = oscard;
            entity['checkRecentlyTalkedOnEmptyQuery'] = report;
            report = 15;
            entity['limit'] = report;
            entity = zuuluu.bind(tangon)(entity);
            tangon = entity.users;
            report = entity.roles;
            zuuluu = tangon.map;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure1_slot1;
                    golfie = _closure1_slot2;
                    entity = 7;
                    entity = golfie[entity];
                    oscard = undefined;
                    verify = michal.bind(oscard)(entity);
                    option = verify.getNickname;
                    report = _closure2_slot1;
                    michal = report.getGuildId;
                    report = michal.bind(report)();
                    michal = _closure2_slot0;
                    entity = zuuluu.user;
                    michal = option.bind(verify)(report, michal, entity);
                    entity = {};
                    report = _closure1_slot0;
                    tangon = 8;
                    tangon = golfie[tangon];
                    tangon = report.bind(oscard)(tangon);
                    tangon = tangon.SelectOptionType;
                    tangon = tangon.USER;
                    entity['type'] = tangon;
                    tangon = zuuluu.user;
                    tangon = tangon.id;
                    entity['value'] = tangon;
                    tangon = null;
                    if(!(tangon == michal)) { _fun00008_ip = 132; continue _fun00007 }
 121:
                    report = zuuluu.user;
                    michal = report.globalName;
 132:
                    if(!(tangon == michal)) { _fun00008_ip = 146; continue _fun00007 }
 136:
                    zuuluu = zuuluu.user;
                    michal = zuuluu.username;
 146:
                    entity['label'] = michal;
                    return entity;
                }
            };
            romeon = zuuluu.bind(tangon)(entity);
            entity = new Array(0);
            yankee = 0;
            foxtra = entity;
            yankee = arraySpread(foxtra, romeon, yankee);
            tangon = report.map;
            michal = function(argFoo) {
                michal = argFoo;
                entity = {};
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 8;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                zuuluu = zuuluu.SelectOptionType;
                zuuluu = zuuluu.ROLE;
                entity['type'] = zuuluu;
                zuuluu = michal.id;
                entity['value'] = zuuluu;
                michal = michal.name;
                entity['label'] = michal;
                return entity;
            };
            romeon = tangon.bind(report)(michal);
            foxtra = entity;
            michal = arraySpread(foxtra, romeon, yankee);
            return entity;
 344:
            entity = new Array(0);
            return entity;
        }
    };
    zuuluu['queryMentionables'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: queryChannels
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            michal = argBar;
            tangon = zuuluu.bind(tangon)(michal);
            michal = null;
            if(!(michal != tangon)) { _fun00010_ip = 115; continue _fun00009 }
 26:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.queryApplicationCommandChannelResults;
            entity = {};
            report = argFoo;
            entity['query'] = report;
            entity['channel'] = tangon;
            tangon = argBaz;
            entity['channelTypes'] = tangon;
            tangon = 15;
            entity['limit'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.channels;
            michal = zuuluu.map;
            entity = function(argFoo) {
                michal = argFoo;
                entity = {};
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 8;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                zuuluu = zuuluu.SelectOptionType;
                zuuluu = zuuluu.CHANNEL;
                entity['type'] = zuuluu;
                zuuluu = michal.id;
                entity['value'] = zuuluu;
                michal = michal.name;
                entity['label'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00010_ip = 119; continue _fun00009;
 115:
            entity = new Array(0);
 119:
            return entity;
        }
    };
    zuuluu['queryChannels'] = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getInitialSnowflakeSelectOptions
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            oscard = _closure1_slot7;
            report = oscard.getInteractionComponentState;
            zuuluu = entity.id;
            michal = argBar;
            zuuluu = report.bind(oscard)(michal, zuuluu);
            oscard = _closure1_slot8;
            report = entity.defaultValues;
            offset = entity.type;
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            option = 5;
            michal = michal[option];
            golfie = undefined;
            michal = verify.bind(golfie)(michal);
            michal = michal.ComponentType;
            verify = michal.CHANNEL_SELECT;
            michal = undefined;
            if(!(offset === verify)) { _fun00012_ip = 91; continue _fun00011 }
 85:
            michal = entity.channelTypes;
 91:
            entity = argBaz;
            entity = oscard.bind(golfie)(report, entity, michal);
            michal = null;
            report = michal == zuuluu;
            oscard = undefined;
            if(report) { _fun00012_ip = 117; continue _fun00011 }
 112:
            oscard = zuuluu.type;
 117:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[option];
            report = verify.bind(golfie)(report);
            report = report.ComponentType;
            report = report.USER_SELECT;
            if(!(oscard !== report)) { _fun00012_ip = 294; continue _fun00011 }
 153:
            report = michal == zuuluu;
            oscard = undefined;
            if(report) { _fun00012_ip = 167; continue _fun00011 }
 162:
            oscard = zuuluu.type;
 167:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[option];
            report = verify.bind(golfie)(report);
            report = report.ComponentType;
            report = report.ROLE_SELECT;
            if(!(oscard !== report)) { _fun00012_ip = 294; continue _fun00011 }
 200:
            report = michal == zuuluu;
            oscard = undefined;
            if(report) { _fun00012_ip = 214; continue _fun00011 }
 209:
            oscard = zuuluu.type;
 214:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[option];
            report = verify.bind(golfie)(report);
            report = report.ComponentType;
            report = report.MENTIONABLE_SELECT;
            if(!(oscard !== report)) { _fun00012_ip = 294; continue _fun00011 }
 247:
            oscard = michal == zuuluu;
            report = undefined;
            if(oscard) { _fun00012_ip = 261; continue _fun00011 }
 256:
            report = zuuluu.type;
 261:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.ComponentType;
            tangon = tangon.CHANNEL_SELECT;
            if(!(report === tangon)) { _fun00012_ip = 300; continue _fun00011 }
 294:
            entity = zuuluu.selectedOptions;
 300:
            if(!(michal == entity)) { _fun00012_ip = 308; continue _fun00011 }
 304:
            entity = new Array(0);
 308:
            return entity;
        }
    };
    zuuluu['getInitialSnowflakeSelectOptions'] = tangon;
    zuuluu['getSnowflakeSelectDefaultValues'] = michal;
    return entity;
})();