// app/modules/guild_badge/GuildTraits.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    tangon = function(argFoo) { // Original name: isPremiumGuild
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = null;
            entity = zuuluu != report;
            if(!entity) { _fun00002_ip = 94; continue _fun00001 }
 12:
            michal = _closure1_slot0;
            michal = report instanceof michal;
            if(michal) { _fun00002_ip = 53; continue _fun00001 }
 26:
            michal = report.premiumSubscriptionCount;
            michal = zuuluu != michal;
            if(!michal) { _fun00002_ip = 51; continue _fun00001 }
 39:
            oscard = report.premiumSubscriptionCount;
            zuuluu = 0;
            michal = oscard > zuuluu;
 51:
            _fun00002_ip = 91; continue _fun00001;
 53:
            oscard = report.premiumSubscriberCount;
            zuuluu = 0;
            zuuluu = oscard > zuuluu;
            if(zuuluu) { _fun00002_ip = 88; continue _fun00001 }
 68:
            report = report.premiumTier;
            tangon = _closure1_slot2;
            tangon = tangon.NONE;
            zuuluu = report > tangon;
 88:
            michal = zuuluu;
 91:
            entity = michal;
 94:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    entity = 0;
    oscard = option[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(oscard);
    var _closure1_slot0 = report;
    report = 1;
    report = option[report];
    report = golfie.bind(entity)(report);
    oscard = report.GuildFeatures;
    var _closure1_slot1 = oscard;
    report = report.BoostedGuildTiers;
    var _closure1_slot2 = report;
    report = {};
    oscard = 'PUBLIC';
    report['PUBLIC'] = oscard;
    oscard = 'INVITE_ONLY';
    report['INVITE_ONLY'] = oscard;
    var _closure1_slot3 = report;
    oscard = 2;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_badge/GuildTraits.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['GuildVisibility'] = report;
    report = function(argFoo) { // Original name: getGuildTraits
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = global;
            tangon = michal.Set;
            offset = entity.features;
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            yankee = zuuluu;
            michal = new yankee[tangon](offset, verify);
            option = michal instanceof Object ? michal : zuuluu;
            zuuluu = option.has;
            michal = _closure1_slot1;
            michal = michal.COMMUNITY;
            michal = zuuluu.bind(option)(michal);
            if(!michal) { _fun00004_ip = 86; continue _fun00003 }
 63:
            zuuluu = option.has;
            michal = _closure1_slot1;
            michal = michal.DISCOVERABLE;
            michal = zuuluu.bind(option)(michal);
            if(michal) { _fun00004_ip = 98; continue _fun00003 }
 86:
            michal = _closure1_slot3;
            report = michal.INVITE_ONLY;
            _fun00004_ip = 108; continue _fun00003;
 98:
            michal = _closure1_slot3;
            report = michal.PUBLIC;
 108:
            zuuluu = _closure1_slot4;
            michal = undefined;
            tangon = zuuluu.bind(michal)(entity);
            zuuluu = 0;
            if(!tangon) { _fun00004_ip = 166; continue _fun00003 }
 124:
            golfie = _closure1_slot0;
            golfie = entity instanceof golfie;
            if(golfie) { _fun00004_ip = 143; continue _fun00003 }
 135:
            golfie = entity.premiumSubscriptionCount;
            _fun00004_ip = 149; continue _fun00003;
 143:
            golfie = entity.premiumSubscriberCount;
 149:
            verify = null;
            verify = verify != golfie;
            michal = 0;
            if(!verify) { _fun00004_ip = 163; continue _fun00003 }
 160:
            michal = golfie;
 163:
            zuuluu = michal;
 166:
            michal = _closure1_slot0;
            michal = entity instanceof michal;
            if(michal) { _fun00004_ip = 189; continue _fun00003 }
 177:
            michal = _closure1_slot2;
            michal = michal.NONE;
            _fun00004_ip = 195; continue _fun00003;
 189:
            michal = entity.premiumTier;
 195:
            entity = {};
            verify = option.has;
            oscard = _closure1_slot1;
            golfie = oscard.VERIFIED;
            golfie = verify.bind(option)(golfie);
            entity['verified'] = golfie;
            verify = option.has;
            golfie = oscard.PARTNERED;
            golfie = verify.bind(option)(golfie);
            entity['partnered'] = golfie;
            verify = option.has;
            golfie = oscard.COMMUNITY;
            golfie = verify.bind(option)(golfie);
            entity['community'] = golfie;
            verify = option.has;
            golfie = oscard.INTERNAL_EMPLOYEE_ONLY;
            golfie = verify.bind(option)(golfie);
            entity['staff'] = golfie;
            golfie = option.has;
            oscard = oscard.CLAN;
            oscard = golfie.bind(option)(oscard);
            entity['clan'] = oscard;
            entity['visibility'] = report;
            entity['premium'] = tangon;
            entity['premiumSubscriberCount'] = zuuluu;
            entity['premiumTier'] = michal;
            return entity;
        }
    };
    zuuluu['getGuildTraits'] = report;
    zuuluu['isPremiumGuild'] = tangon;
    michal = function(argFoo) { // Original name: isDiscoverableGuild
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00006_ip = 69; continue _fun00005 }
 12:
            zuuluu = global;
            tangon = zuuluu.Set;
            report = michal.features;
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            oscard = zuuluu;
            michal = new oscard[tangon](report, tangon);
            tangon = michal instanceof Object ? michal : zuuluu;
            zuuluu = tangon.has;
            michal = _closure1_slot1;
            michal = michal.DISCOVERABLE;
            entity = zuuluu.bind(tangon)(michal);
 69:
            return entity;
        }
    };
    zuuluu['isDiscoverableGuild'] = michal;
    return entity;
})();