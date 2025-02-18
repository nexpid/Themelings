// app/modules/guild_onboarding/doGuildOnboardingHelpers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildMemberFlags;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/doGuildOnboardingHelpers.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: waitForOnboardingCompletion
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            zuuluu = _closure1_slot3;
            michal = zuuluu.addConditionalChangeListener;
            entity = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    report = _closure1_slot3;
                    zuuluu = report.getSelfMember;
                    entity = _closure2_slot0;
                    option = zuuluu.bind(report)(entity);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 2;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    golfie = report.bind(zuuluu)(entity);
                    oscard = golfie.hasFlag;
                    report = null;
                    verify = report == option;
                    entity = undefined;
                    if(verify) { _fun00002_ip = 69; continue _fun00001 }
 64:
                    entity = option.flags;
 69:
                    option = report != entity;
                    report = 0;
                    if(!option) { _fun00002_ip = 81; continue _fun00001 }
 78:
                    report = entity;
 81:
                    entity = _closure1_slot4;
                    entity = entity.COMPLETED_ONBOARDING;
                    entity = oscard.bind(golfie)(report, entity);
                    entity = !entity;
                    if(entity) { _fun00002_ip = 151; continue _fun00001 }
 103:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 3;
                    tangon = oscard[tangon];
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.finishOnboarding;
                    michal = _closure2_slot0;
                    michal = tangon.bind(report)(michal);
                    michal = _closure3_slot0;
                    michal = michal.bind(zuuluu)();
                    entity = false;
 151:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['waitForOnboardingCompletion'] = michal;
    return entity;
})();