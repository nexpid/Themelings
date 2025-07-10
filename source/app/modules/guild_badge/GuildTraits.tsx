// app/modules/guild_badge/GuildTraits.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    tangon = function(argFoo) { // Original name: isPremiumGuild
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = null;
            entity = zuuluu != report;
            if(!entity) { _fun00002_ip = 119; continue _fun00001 }
 12:
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 1;
            oscard = oscard[michal];
            michal = undefined;
            oscard = golfie.bind(michal)(oscard);
            michal = oscard.isGuildRecord;
            michal = michal.bind(oscard)(report);
            if(michal) { _fun00002_ip = 78; continue _fun00001 }
 51:
            michal = report.premiumSubscriptionCount;
            michal = zuuluu != michal;
            if(!michal) { _fun00002_ip = 76; continue _fun00001 }
 64:
            oscard = report.premiumSubscriptionCount;
            zuuluu = 0;
            michal = oscard > zuuluu;
 76:
            _fun00002_ip = 116; continue _fun00001;
 78:
            oscard = report.premiumSubscriberCount;
            zuuluu = 0;
            zuuluu = oscard > zuuluu;
            if(zuuluu) { _fun00002_ip = 113; continue _fun00001 }
 93:
            report = report.premiumTier;
            tangon = _closure1_slot3;
            tangon = tangon.NONE;
            zuuluu = report > tangon;
 113:
            michal = zuuluu;
 116:
            entity = michal;
 119:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    oscard = report.GuildFeatures;
    var _closure1_slot2 = oscard;
    report = report.BoostedGuildTiers;
    var _closure1_slot3 = report;
    report = {};
    oscard = 'PUBLIC';
    report['PUBLIC'] = oscard;
    oscard = 'INVITE_ONLY';
    report['INVITE_ONLY'] = oscard;
    oscard = 'APPLY_TO_JOIN';
    report['APPLY_TO_JOIN'] = oscard;
    var _closure1_slot4 = report;
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
            romeon = entity.features;
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            foxtra = zuuluu;
            michal = new foxtra[tangon](romeon, yankee);
            option = michal instanceof Object ? michal : zuuluu;
            michal = _closure1_slot4;
            report = michal.INVITE_ONLY;
            zuuluu = option.has;
            michal = _closure1_slot2;
            michal = michal.COMMUNITY;
            michal = zuuluu.bind(option)(michal);
            if(!michal) { _fun00004_ip = 96; continue _fun00003 }
 73:
            zuuluu = option.has;
            michal = _closure1_slot2;
            michal = michal.DISCOVERABLE;
            michal = zuuluu.bind(option)(michal);
            if(michal) { _fun00004_ip = 154; continue _fun00003 }
 96:
            zuuluu = option.has;
            michal = _closure1_slot2;
            michal = michal.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            michal = zuuluu.bind(option)(michal);
            if(!michal) { _fun00004_ip = 139; continue _fun00003 }
 119:
            tangon = option.has;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.MEMBER_VERIFICATION_GATE_ENABLED;
            michal = tangon.bind(option)(zuuluu);
 139:
            if(!michal) { _fun00004_ip = 164; continue _fun00003 }
 142:
            michal = _closure1_slot4;
            report = michal.APPLY_TO_JOIN;
            _fun00004_ip = 164; continue _fun00003;
 154:
            michal = _closure1_slot4;
            report = michal.PUBLIC;
 164:
            michal = _closure1_slot5;
            verify = undefined;
            tangon = michal.bind(verify)(entity);
            zuuluu = 0;
            if(!tangon) { _fun00004_ip = 245; continue _fun00003 }
 180:
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            golfie = 1;
            golfie = yankee[golfie];
            offset = offset.bind(verify)(golfie);
            golfie = offset.isGuildRecord;
            golfie = golfie.bind(offset)(entity);
            if(golfie) { _fun00004_ip = 222; continue _fun00003 }
 214:
            golfie = entity.premiumSubscriptionCount;
            _fun00004_ip = 228; continue _fun00003;
 222:
            golfie = entity.premiumSubscriberCount;
 228:
            offset = null;
            offset = offset != golfie;
            michal = 0;
            if(!offset) { _fun00004_ip = 242; continue _fun00003 }
 239:
            michal = golfie;
 242:
            zuuluu = michal;
 245:
            golfie = _closure1_slot0;
            offset = _closure1_slot1;
            michal = 1;
            michal = offset[michal];
            golfie = golfie.bind(verify)(michal);
            michal = golfie.isGuildRecord;
            michal = michal.bind(golfie)(entity);
            if(michal) { _fun00004_ip = 291; continue _fun00003 }
 279:
            michal = _closure1_slot3;
            michal = michal.NONE;
            _fun00004_ip = 297; continue _fun00003;
 291:
            michal = entity.premiumTier;
 297:
            entity = {};
            verify = option.has;
            oscard = _closure1_slot2;
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
            golfie = option.has;
            oscard = oscard.INTERNAL_EMPLOYEE_ONLY;
            oscard = golfie.bind(option)(oscard);
            entity['staff'] = oscard;
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
            michal = _closure1_slot2;
            michal = michal.DISCOVERABLE;
            entity = zuuluu.bind(tangon)(michal);
 69:
            return entity;
        }
    };
    zuuluu['isDiscoverableGuild'] = michal;
    return entity;
})();