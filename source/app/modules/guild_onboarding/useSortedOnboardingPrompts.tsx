// app/modules/guild_onboarding/useSortedOnboardingPrompts.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/useSortedOnboardingPrompts.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSortedOnboardingPrompts
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        oscard = report.bind(zuuluu)(tangon);
        report = oscard.useStateFromStoresArray;
        zuuluu = _closure1_slot3;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.getEnabledOnboardingPrompts;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report = report.bind(oscard)(tangon, zuuluu);
        var _closure2_slot1 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                oscard = new Array(0);
                report = new Array(0);
                tangon = new Array(0);
                zuuluu = new Array(0);
                entity = _closure2_slot1;
                entity = entity.length;
                michal = 0;
                entity = michal < entity;
                verify = 0;
                option = 0;
                if(!entity) { _fun00002_ip = 194; continue _fun00001 }
 46:
                entity = _closure2_slot1;
                romeon = entity[option];
                entity = romeon.isNew;
                if(entity) { _fun00002_ip = 156; continue _fun00001 }
 63:
                entity = romeon.hasNewAnswers;
                if(entity) { _fun00002_ip = 113; continue _fun00001 }
 74:
                entity = romeon.inOnboarding;
                if(entity) { _fun00002_ip = 98; continue _fun00001 }
 83:
                entity = tangon.push;
                entity = entity.bind(tangon)(romeon);
                yankee = verify;
                _fun00002_ip = 169; continue _fun00001;
 98:
                entity = zuuluu.push;
                entity = entity.bind(zuuluu)(romeon);
                yankee = verify;
                _fun00002_ip = 169; continue _fun00001;
 113:
                entity = report.push;
                entity = entity.bind(report)(romeon);
                backup = romeon.options;
                foxtra = backup.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isUnseen;
                    return entity;
                };
                entity = foxtra.bind(backup)(entity);
                entity = entity.length;
                yankee = verify + entity;
                _fun00002_ip = 169; continue _fun00001;
 156:
                entity = oscard.push;
                entity = entity.bind(oscard)(romeon);
                yankee = verify;
 169:
                option = option + 1;
                entity = _closure2_slot1;
                entity = entity.length;
                verify = yankee;
                michal = verify;
                if(option < entity) { _fun00002_ip = 46; continue _fun00001 }
 194:
                entity = {};
                golfie = _closure2_slot1;
                entity['onboardingPromptsRaw'] = golfie;
                entity['newOnboardingPrompts'] = oscard;
                entity['onboardingPromptsWithNewAnswers'] = report;
                entity['newAnswersCount'] = michal;
                michal = tangon.concat;
                michal = michal.bind(tangon)(zuuluu);
                entity['onboardingPrompts'] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();