// app/modules/routing/getChannelIdForGuildTransition.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StaticChannelRoute;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/routing/getChannelIdForGuildTransition.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getChannelIdForGuildTransition
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            michal = _closure1_slot5;
            entity = michal.getChannelId;
            entity = entity.bind(michal)(golfie);
            zuuluu = _closure1_slot4;
            michal = zuuluu.getDefaultChannel;
            report = michal.bind(zuuluu)(golfie);
            zuuluu = null;
            oscard = zuuluu == report;
            option = undefined;
            michal = undefined;
            if(oscard) { _fun00002_ip = 54; continue _fun00001 }
 49:
            michal = report.id;
 54:
            report = _closure1_slot6;
            report = report.GUILD_ONBOARDING;
            if(!(entity === report)) { _fun00002_ip = 88; continue _fun00001 }
 68:
            oscard = _closure1_slot2;
            report = oscard.shouldShowOnboarding;
            report = report.bind(oscard)(golfie);
            if(report) { _fun00002_ip = 88; continue _fun00001 }
 86:
            return michal;
 88:
            report = _closure1_slot6;
            report = report.GUILD_HOME;
            if(!(entity === report)) { _fun00002_ip = 138; continue _fun00001 }
 102:
            oscard = _closure1_slot0;
            verify = _closure1_slot1;
            report = 5;
            report = verify[report];
            oscard = oscard.bind(option)(report);
            report = oscard.canSeeOnboardingHome;
            report = report.bind(oscard)(golfie);
            if(report) { _fun00002_ip = 138; continue _fun00001 }
 136:
            return michal;
 138:
            report = _closure1_slot3;
            tangon = report.getChannel;
            tangon = tangon.bind(report)(entity);
            if(!(zuuluu != tangon)) { _fun00002_ip = 169; continue _fun00001 }
 156:
            zuuluu = tangon.isGuildVocal;
            zuuluu = zuuluu.bind(tangon)();
            if(!zuuluu) { _fun00002_ip = 172; continue _fun00001 }
 169:
            entity = michal;
 172:
            return entity;
        }
    };
    zuuluu['getChannelIdForGuildTransition'] = michal;
    return entity;
})();