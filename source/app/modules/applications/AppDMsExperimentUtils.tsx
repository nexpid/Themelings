// app/modules/applications/AppDMsExperimentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: _isChannelEligibleForAppDMs
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = null;
            michal = entity == report;
            zuuluu = undefined;
            if(michal) { _fun00002_ip = 24; continue _fun00001 }
 14:
            michal = report.isDM;
            zuuluu = michal.bind(report)();
 24:
            michal = true;
            if(!(michal === zuuluu)) { _fun00002_ip = 73; continue _fun00001 }
 30:
            tangon = _closure1_slot4;
            zuuluu = tangon.getUser;
            michal = report.getRecipientId;
            michal = michal.bind(report)();
            michal = zuuluu.bind(tangon)(michal);
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 71; continue _fun00001 }
 65:
            entity = michal.bot;
 71:
            return entity;
 73:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/AppDMsExperimentUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useShowAppDMsUI
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot5;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        michal = 2;
        report = report[michal];
        michal = undefined;
        oscard = oscard.bind(michal)(report);
        report = oscard.useStateFromStores;
        golfie = _closure1_slot3;
        tangon = new Array(1);
        tangon[0] = golfie;
        entity = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.getChannel;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = report.bind(oscard)(tangon, entity);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useShowAppDMsUI'] = tangon;
    tangon = function(argFoo) { // Original name: canShowAppDMsUI
        zuuluu = _closure1_slot5;
        tangon = _closure1_slot3;
        michal = tangon.getChannel;
        entity = argFoo;
        michal = michal.bind(tangon)(entity);
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['canShowAppDMsUI'] = tangon;
    michal = function(argFoo) { // Original name: canUseActivityPopoutInAppDM
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.getCurrentConfig;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.activityPopoutWindowInAppDMEnabled;
        return entity;
    };
    zuuluu['canUseActivityPopoutInAppDM'] = michal;
    return entity;
})();