// app/modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: isMidjourneyOnboardingFlow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[1];
            tangon = undefined;
            if(!(entity === tangon)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            entity = {};
 11:
            report = entity.guildStore;
            zuuluu = null;
            if(!(zuuluu == report)) { _fun00002_ip = 30; continue _fun00001 }
 23:
            report = _closure1_slot2;
 30:
            oscard = report.getGuild;
            entity = _closure1_slot5;
            entity = oscard.bind(report)(entity);
            zuuluu = zuuluu == entity;
            golfie = undefined;
            if(zuuluu) { _fun00002_ip = 62; continue _fun00001 }
 56:
            golfie = entity.joinedAt;
 62:
            oscard = global;
            zuuluu = oscard.Date;
            zuuluu = golfie instanceof zuuluu;
            if(!zuuluu) { _fun00002_ip = 122; continue _fun00001 }
 77:
            golfie = oscard.Date;
            oscard = golfie.now;
            oscard = oscard.bind(golfie)();
            golfie = entity.joinedAt;
            entity = golfie.getTime;
            entity = entity.bind(golfie)();
            oscard = oscard - entity;
            entity = 3600000;
            zuuluu = oscard <= entity;
 122:
            entity = report.getGuildCount;
            report = entity.bind(report)();
            entity = 1;
            entity = entity === report;
            if(!entity) { _fun00002_ip = 145; continue _fun00001 }
 142:
            entity = zuuluu;
 145:
            if(!entity) { _fun00002_ip = 182; continue _fun00001 }
 148:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.isEligibleForMidjourneyOnboarding;
            michal = argFoo;
            entity = zuuluu.bind(tangon)(michal);
 182:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
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
    option = report.MIDJOURNEY_BOT_ID;
    var _closure1_slot4 = option;
    report = report.MIDJOURNEY_GUILD_ID;
    var _closure1_slot5 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['isMidjourneyOnboardingFlow'] = tangon;
    tangon = function(argFoo) { // Original name: useIsMidjourneyOnboardingFlow
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 4;
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
            tangon = _closure1_slot6;
            zuuluu = _closure2_slot0;
            michal = {};
            entity = _closure1_slot2;
            michal['guildStore'] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useIsMidjourneyOnboardingFlow'] = tangon;
    tangon = function(argFoo) { // Original name: isEligibleForMidjourneyRedirect
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.isDM;
            entity = entity.bind(michal)();
            if(!entity) { _fun00004_ip = 34; continue _fun00003 }
 16:
            zuuluu = michal.rawRecipients;
            tangon = zuuluu.length;
            zuuluu = 1;
            entity = zuuluu === tangon;
 34:
            if(!entity) { _fun00004_ip = 65; continue _fun00003 }
 37:
            zuuluu = michal.rawRecipients;
            michal = 0;
            michal = zuuluu[michal];
            zuuluu = michal.id;
            michal = _closure1_slot4;
            entity = zuuluu === michal;
 65:
            if(!entity) { _fun00004_ip = 86; continue _fun00003 }
 68:
            tangon = _closure1_slot6;
            zuuluu = undefined;
            michal = 'app';
            entity = tangon.bind(zuuluu)(michal);
 86:
            return entity;
        }
    };
    zuuluu['isEligibleForMidjourneyRedirect'] = tangon;
    michal = function(argFoo) { // Original name: hasRedirectedToGuild
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo, argBar) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                entity = argBar;
                var _closure3_slot1 = entity;
                report = _closure1_slot3;
                michal = report.getGuildId;
                report = michal.bind(report)();
                michal = _closure2_slot0;
                if(!(report === michal)) { _fun00006_ip = 52; continue _fun00005 }
 44:
                michal = undefined;
                michal = zuuluu.bind(michal)();
                _fun00006_ip = 122; continue _fun00005;
 52:
                michal = global;
                oscard = michal.setTimeout;
                report = undefined;
                zuuluu = function() {
                    zuuluu = _closure3_slot4;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)();
                    michal = _closure3_slot1;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal = 3000;
                michal = oscard.bind(report)(zuuluu, michal);
                var _closure3_slot2 = michal;
                zuuluu = function() { // Original name: handleSelectedGuildUpdate
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = _closure1_slot3;
                        entity = michal.getGuildId;
                        michal = entity.bind(michal)();
                        entity = _closure2_slot0;
                        if(!(michal === entity)) { _fun00008_ip = 49; continue _fun00007 }
 28:
                        zuuluu = _closure3_slot4;
                        michal = undefined;
                        zuuluu = zuuluu.bind(michal)();
                        entity = _closure3_slot0;
                        entity = entity.bind(michal)();
 49:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot3 = zuuluu;
                michal = function() { // Original name: cleanup
                    tangon = _closure1_slot3;
                    zuuluu = tangon.removeChangeListener;
                    michal = _closure3_slot3;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = global;
                    zuuluu = michal.clearTimeout;
                    michal = _closure3_slot2;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                var _closure3_slot4 = michal;
                michal = _closure1_slot3;
                entity = michal.addChangeListener;
                entity = entity.bind(michal)(zuuluu);
 122:
                entity = undefined;
                return entity;
            }
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['hasRedirectedToGuild'] = michal;
    return entity;
})();