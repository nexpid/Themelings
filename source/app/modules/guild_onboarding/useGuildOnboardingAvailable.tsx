// app/modules/guild_onboarding/useGuildOnboardingAvailable.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/useGuildOnboardingAvailable.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useGuildOnboardingAvailable
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            michal = 2;
            report = report[michal];
            michal = undefined;
            golfie = oscard.bind(michal)(report);
            oscard = golfie.useStateFromStores;
            option = _closure1_slot2;
            report = new Array(1);
            report[0] = option;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = null;
                    tangon = zuuluu == michal;
                    michal = undefined;
                    if(tangon) { _fun00004_ip = 27; continue _fun00003 }
 18:
                    tangon = _closure2_slot0;
                    michal = tangon.id;
 27:
                    if(!(zuuluu != michal)) { _fun00004_ip = 82; continue _fun00003 }
 31:
                    tangon = _closure1_slot2;
                    zuuluu = tangon.isFullServerPreview;
                    michal = _closure2_slot0;
                    entity = michal.id;
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = tangon.isOnboardingEnabled;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    if(!entity) { _fun00004_ip = 80; continue _fun00003 }
 77:
                    entity = michal;
 80:
                    return entity;
 82:
                    entity = false;
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(report, entity);
            if(entity) { _fun00002_ip = 105; continue _fun00001 }
 65:
            report = null;
            report = report == tangon;
            michal = undefined;
            if(report) { _fun00002_ip = 102; continue _fun00001 }
 76:
            report = tangon.features;
            tangon = report.has;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.GUILD_ONBOARDING_HAS_PROMPTS;
            michal = tangon.bind(report)(zuuluu);
 102:
            entity = michal;
 105:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: isGuildOnboardingAvailable
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00006_ip = 85; continue _fun00005 }
 9:
            oscard = _closure1_slot2;
            tangon = oscard.isFullServerPreview;
            entity = zuuluu.id;
            entity = tangon.bind(oscard)(entity);
            report = oscard.isOnboardingEnabled;
            tangon = zuuluu.id;
            tangon = report.bind(oscard)(tangon);
            if(!entity) { _fun00006_ip = 54; continue _fun00005 }
 51:
            entity = tangon;
 54:
            if(entity) { _fun00006_ip = 83; continue _fun00005 }
 57:
            tangon = zuuluu.features;
            zuuluu = tangon.has;
            michal = _closure1_slot3;
            michal = michal.GUILD_ONBOARDING_HAS_PROMPTS;
            entity = zuuluu.bind(tangon)(michal);
 83:
            return entity;
 85:
            entity = false;
            return entity;
        }
    };
    zuuluu['isGuildOnboardingAvailable'] = michal;
    return entity;
})();