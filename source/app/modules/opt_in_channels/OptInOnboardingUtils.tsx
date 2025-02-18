// app/modules/opt_in_channels/OptInOnboardingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: hasNotSetUpChannelOptIn
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 5;
            entity = tangon[entity];
            golfie = undefined;
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = zuuluu.isOptInEnabledForGuild;
            entity = entity.bind(zuuluu)(oscard);
            tangon = _closure1_slot7;
            zuuluu = tangon.getSelfMember;
            report = zuuluu.bind(tangon)(oscard);
            tangon = null;
            option = tangon == report;
            zuuluu = undefined;
            if(option) { _fun00002_ip = 70; continue _fun00001 }
 65:
            zuuluu = report.flags;
 70:
            report = tangon != zuuluu;
            tangon = 0;
            option = 0;
            if(!report) { _fun00002_ip = 84; continue _fun00001 }
 81:
            option = zuuluu;
 84:
            report = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 6;
            zuuluu = verify[zuuluu];
            golfie = report.bind(golfie)(zuuluu);
            report = golfie.hasFlag;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.COMPLETED_ONBOARDING;
            zuuluu = report.bind(golfie)(option, zuuluu);
            report = _closure1_slot8;
            michal = report.getOptedInChannels;
            michal = michal.bind(report)(oscard);
            michal = michal.size;
            michal = michal > tangon;
            entity = !entity;
            if(!entity) { _fun00002_ip = 159; continue _fun00001 }
 156:
            entity = !zuuluu;
 159:
            if(!entity) { _fun00002_ip = 165; continue _fun00001 }
 162:
            entity = !michal;
 165:
            return entity;
        }
    };
    var _closure1_slot10 = report;
    tangon = function(argFoo) { // Original name: optIntoAllChannelsForExistingMember
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00004_ip = 16; continue _fun00003 }
 14:
            michal = {};
 16:
            oscard = michal.include;
            if(!(oscard === entity)) { _fun00004_ip = 54; continue _fun00003 }
 26:
            tangon = global;
            tangon = tangon.Set;
            golfie = tangon.prototype;
            golfie = Object.create(golfie, {constructor: {value: tangon}});
            foxtra = golfie;
            tangon = new foxtra[tangon](romeon);
            oscard = tangon instanceof Object ? tangon : golfie;
 54:
            michal = michal.exclude;
            if(!(michal === entity)) { _fun00004_ip = 92; continue _fun00003 }
 64:
            tangon = global;
            tangon = tangon.Set;
            golfie = tangon.prototype;
            golfie = Object.create(golfie, {constructor: {value: tangon}});
            foxtra = golfie;
            tangon = new foxtra[tangon](romeon);
            michal = tangon instanceof Object ? tangon : golfie;
 92:
            var _closure2_slot0 = michal;
            var _closure2_slot1 = entity;
            golfie = _closure1_slot6;
            tangon = golfie.getChannels;
            verify = tangon.bind(golfie)(report);
            tangon = _closure1_slot4;
            yankee = verify[tangon];
            option = new Array(0);
            offset = 0;
            romeon = option;
            offset = arraySpread(romeon, yankee, offset);
            tangon = _closure1_slot5;
            yankee = verify[tangon];
            romeon = option;
            tangon = arraySpread(romeon, yankee, offset);
            golfie = option.filter;
            tangon = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    michal = entity.channel;
                    entity = michal.isThread;
                    entity = entity.bind(michal)();
                    entity = !entity;
                    if(!entity) { _fun00006_ip = 49; continue _fun00005 }
 24:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.has;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = !michal;
 49:
                    return entity;
                }
            };
            option = golfie.bind(option)(tangon);
            golfie = option.map;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                entity = entity.id;
                return entity;
            };
            golfie = golfie.bind(option)(tangon);
            _closure2_slot1 = golfie;
            tangon = oscard.forEach;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot1;
                michal = zuuluu.push;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = tangon.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 8;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.onboardExistingMember;
            michal = global;
            michal = michal.Set;
            oscard = michal.prototype;
            oscard = Object.create(oscard, {constructor: {value: michal}});
            foxtra = oscard;
            romeon = golfie;
            michal = new foxtra[michal](romeon, yankee);
            michal = michal instanceof Object ? michal : oscard;
            michal = zuuluu.bind(tangon)(report, michal);
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    offset = option[oscard];
    offset = golfie.bind(entity)(offset);
    yankee = offset.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot4 = yankee;
    offset = offset.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot5 = offset;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.GuildMemberFlags;
    var _closure1_slot9 = oscard;
    oscard = 10;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/opt_in_channels/OptInOnboardingUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['hasNotSetUpChannelOptIn'] = report;
    report = function(argFoo) { // Original name: toggleShowAllChannels
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot10;
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            if(tangon) { _fun00008_ip = 80; continue _fun00007 }
 20:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 5;
            tangon = golfie[tangon];
            report = oscard.bind(entity)(tangon);
            tangon = report.isOptInEnabledForGuild;
            tangon = tangon.bind(report)(zuuluu);
            report = 7;
            report = golfie[report];
            oscard = oscard.bind(entity)(report);
            report = oscard.setGuildOptIn;
            tangon = !tangon;
            tangon = report.bind(oscard)(zuuluu, tangon);
            _fun00008_ip = 89; continue _fun00007;
 80:
            michal = _closure1_slot11;
            michal = michal.bind(entity)(zuuluu);
 89:
            return entity;
        }
    };
    zuuluu['toggleShowAllChannels'] = report;
    zuuluu['optIntoAllChannelsForExistingMember'] = tangon;
    michal = function(argFoo) { // Original name: hasClearedGuildOnboardingNotice
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            verify = argFoo;
            oscard = arguments[1];
            golfie = undefined;
            if(!(oscard === golfie)) { _fun00010_ip = 19; continue _fun00009 }
 12:
            oscard = _closure1_slot3;
 19:
            zuuluu = null;
            entity = zuuluu != verify;
            if(!entity) { _fun00010_ip = 156; continue _fun00009 }
 31:
            report = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 6;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.hasFlag;
            oscard = oscard.settings;
            option = oscard.guilds;
            offset = zuuluu == option;
            oscard = undefined;
            if(offset) { _fun00010_ip = 106; continue _fun00009 }
 81:
            option = option.guilds;
            option = option[verify];
            verify = zuuluu == option;
            oscard = undefined;
            if(verify) { _fun00010_ip = 106; continue _fun00009 }
 100:
            oscard = option.guildOnboardingProgress;
 106:
            option = zuuluu != oscard;
            zuuluu = 0;
            if(!option) { _fun00010_ip = 118; continue _fun00009 }
 115:
            zuuluu = oscard;
 118:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            michal = 9;
            michal = option[michal];
            michal = oscard.bind(golfie)(michal);
            michal = michal.GuildOnboardingProgress;
            michal = michal.GUILD_NOTICE_CLEARED;
            entity = tangon.bind(report)(zuuluu, michal);
 156:
            return entity;
        }
    };
    zuuluu['hasClearedGuildOnboardingNotice'] = michal;
    return entity;
})();